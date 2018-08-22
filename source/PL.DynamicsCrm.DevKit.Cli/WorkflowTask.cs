using System;
using System.Activities;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using PL.DynamicsCrm.DevKit.Cli.Models;

namespace PL.DynamicsCrm.DevKit.Cli
{
    public class WorkflowTask
    {
        public WorkflowTask(CrmServiceClient crmServiceClient, string currentDirectory, Plugin workflowJson,
            string version)
        {
            CrmServiceClient = crmServiceClient;
            CurrentDirectory = currentDirectory;
            WorkflowJson = workflowJson;
            Version = version;
        }

        private CrmServiceClient CrmServiceClient { get; }
        private Plugin WorkflowJson { get; }
        private string CurrentDirectory { get; }
        private string Version { get; }

        private List<string> WorkflowFiles
        {
            get
            {
                var folder = Path.Combine(CurrentDirectory, WorkflowJson.folder);
                var includefiles = new List<string>();
                foreach (var includefile in WorkflowJson.includefiles)
                    includefiles.AddRange(Directory.GetFiles(folder, includefile).ToList());
                var excludefiles = new List<string>();
                foreach (var excludefile in WorkflowJson.excludefiles)
                    excludefiles.AddRange(Directory.GetFiles(folder, excludefile).ToList());
                var assemblies = includefiles.Where(file => !excludefiles.Contains(file)).ToList();
                return assemblies;
            }
        }

        public void Run()
        {
            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));
            CliLog.WriteLine(CliLog.COLOR_GREEN, "START WORKFLOW TASKS");
            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));
            foreach (var workflowFile in WorkflowFiles) RegisterWorkflow(workflowFile);
            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));
            CliLog.WriteLine(CliLog.COLOR_GREEN, "END WORKFLOW TASKS");
            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));
        }

        private void RegisterWorkflow(string workflowFile)
        {
            var assemblyFilePath = new FileInfo(workflowFile);
            Assembly assembly = null;
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve += CurrentDomain_ReflectionOnlyAssemblyResolve;
            assembly = Assembly.ReflectionOnlyLoadFrom(workflowFile);
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve -= CurrentDomain_ReflectionOnlyAssemblyResolve;
            if (assembly == null) return;
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve += CurrentDomain_ReflectionOnlyAssemblyResolve;
            var workflowTypes = assembly.DefinedTypes.Where(p =>
                p.BaseType != null ? p.BaseType.Name == typeof(CodeActivity).Name : false);
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve -= CurrentDomain_ReflectionOnlyAssemblyResolve;
            if (workflowTypes.Count() == 0) return;
            var workflowEntity = RegisterAssembly(assemblyFilePath, assembly, workflowTypes);
            if (workflowEntity == null) return;
            AddAssemblyToSolution(workflowEntity);
            foreach (var workflowType in workflowTypes)
                RegisterWorkflowType(workflowEntity, workflowType);
        }

        private Assembly CurrentDomain_ReflectionOnlyAssemblyResolve(object sender, ResolveEventArgs args)
        {
            Assembly assembly;
            var parts = args.Name.Split(',');
            switch (parts[0])
            {
                case "Microsoft.Xrm.Sdk":
                    assembly = Assembly.ReflectionOnlyLoad(parts[0].Trim());
                    break;
                default:
                    assembly = Assembly.ReflectionOnlyLoad(args.Name);
                    break;
            }

            return assembly;
        }

        private Entity RegisterAssembly(FileInfo assemblyFilePath, Assembly assembly, IEnumerable<Type> workflowTypes)
        {
            var firstType = GetAttributes(workflowTypes, typeof(CrmPluginRegistrationAttribute).Name).FirstOrDefault();
            if (firstType == null)
            {
                var message = "Workflow Assembly don't have any type: CrmPluginRegistrationAttribute";
                CliLog.WriteLine(CliLog.COLOR_ERROR, message);
                throw new Exception(message);
            }

            var firstTypeAttribute = firstType.CreateFromData();
            var assemblyProperties = assembly.GetName().FullName
                .Split(",= ".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);
            var assemblyName = assembly.GetName().Name;
            var fetchData = new
            {
                name = assemblyProperties[0]
            };
            var fetchXml = $@"
<fetch>
  <entity name='pluginassembly'>
    <attribute name='pluginassemblyid' />
    <attribute name='content' />
    <filter type='and'>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
    </filter>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            var pluginAssemblyId = Guid.Empty;
            var existingContent = string.Empty;
            if (rows.Entities.Count > 0)
            {
                var entity = rows.Entities[0];
                pluginAssemblyId = entity.Id;
                existingContent = entity.GetAttributeValue<string>("content");
            }

            var content = Convert.ToBase64String(File.ReadAllBytes(assemblyFilePath.FullName));
            if (content == existingContent) return null;
            var plugin = new Entity("pluginassembly");
            plugin["content"] = content;
            plugin["name"] = assemblyProperties[0];
            plugin["culture"] = assemblyProperties[4];
            plugin["version"] = assemblyProperties[2];
            plugin["publickeytoken"] = assemblyProperties[6];
            plugin["sourcetype"] = new OptionSetValue(0); // database
            plugin["isolationmode"] = firstTypeAttribute.IsolationMode == IsolationModeEnum.Sandbox
                ? new OptionSetValue(2)
                : // 2 = sandbox
                new OptionSetValue(1); // 1 = none
            if (pluginAssemblyId == Guid.Empty)
            {
                CliLog.WriteLine(CliLog.COLOR_GREEN, "Registering Assembly: ", CliLog.COLOR_CYAN,
                    $"{assemblyProperties[0]}");
                pluginAssemblyId = CrmServiceClient.Create(plugin);
                plugin["pluginassemblyid"] = pluginAssemblyId;
            }
            else
            {
                CliLog.WriteLine(CliLog.COLOR_BLUE, "Updating Assembly: ", CliLog.COLOR_CYAN,
                    $"{assemblyProperties[0]}");
                plugin["pluginassemblyid"] = pluginAssemblyId;
                CrmServiceClient.Update(plugin);
            }

            return plugin;
        }

        private IEnumerable<CustomAttributeData> GetAttributes(IEnumerable<Type> types, string attributeName)
        {
            var attributes = new List<CustomAttributeData>();
            foreach (var type in types)
            {
                var data = type.GetCustomAttributesData().Where(a => a.AttributeType.Name == attributeName);
                attributes.AddRange(data);
            }

            return attributes;
        }

        private void AddAssemblyToSolution(Entity workflow)
        {
            var fetchData = new
            {
                objectid = workflow["pluginassemblyid"].ToString(),
                componenttype = 91,
                uniquename = WorkflowJson.solution
            };
            var fetchXml = $@"
<fetch>
  <entity name='solutioncomponent'>
    <attribute name='solutioncomponentid' />
    <filter type='and'>
      <condition attribute='objectid' operator='eq' value='{fetchData.objectid}'/>
      <condition attribute='componenttype' operator='eq' value='{fetchData.componenttype}'/>
    </filter>
    <link-entity name='solution' from='solutionid' to='solutionid'>
      <filter type='and'>
        <condition attribute='uniquename' operator='eq' value='{fetchData.uniquename}'/>
      </filter>
    </link-entity>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0)
            {
                var request = new AddSolutionComponentRequest
                {
                    AddRequiredComponents = true,
                    ComponentType = 91,
                    ComponentId = Guid.Parse(workflow["pluginassemblyid"].ToString()),
                    SolutionUniqueName = WorkflowJson.solution
                };
                CliLog.WriteLine(CliLog.COLOR_GREEN, "Adding Assembly: ", CliLog.COLOR_CYAN, $"{workflow["name"]} ",
                    CliLog.COLOR_GREEN, "to solution: ", CliLog.COLOR_CYAN, $"{WorkflowJson.solution}");
                CrmServiceClient.Execute(request);
            }
        }

        private void RegisterWorkflowType(Entity workflowEntity, TypeInfo workflow)
        {
            var workflowAttributes = workflow.GetCustomAttributesData()
                .Where(a => a.AttributeType.Name == typeof(CrmPluginRegistrationAttribute).Name);
            if (workflowAttributes.Count() == 0) return;
            foreach (var workflowAttribute in workflowAttributes)
            {
                var attribute = workflowAttribute.CreateFromData();
                var fetchData = new
                {
                    typename = workflow.FullName
                };
                var fetchXml = $@"
<fetch>
  <entity name='plugintype'>
    <attribute name='plugintypeid' />
    <filter type='and'>
      <condition attribute='typename' operator='eq' value='{fetchData.typename}'/>
    </filter>
  </entity>
</fetch>";
                var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                if (rows.Entities.Count == 0)
                {
                    var pluginType = new Entity("plugintype");
                    pluginType["name"] = workflow.FullName;
                    pluginType["friendlyname"] = workflow.FullName;
                    pluginType["pluginassemblyid"] = new EntityReference("pluginassembly",
                        Guid.Parse(workflowEntity["pluginassemblyid"].ToString()));
                    pluginType["typename"] = workflow.FullName;
                    pluginType["workflowactivitygroupname"] = attribute.GroupName;
                    CliLog.WriteLine(CliLog.COLOR_GREEN, "\tRegistering Type: ", CliLog.COLOR_CYAN,
                        $"{workflow.FullName}");
                    CrmServiceClient.Create(pluginType);
                }
            }
        }
    }
}