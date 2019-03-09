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
        public WorkflowTask(CrmServiceClient crmServiceClient, string currentDirectory, Plugin workflowJson, string version)
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

        private IEnumerable<string> WorkflowFiles
        {
            get
            {
                var folder = Path.Combine(CurrentDirectory, WorkflowJson.folder);
                var includefiles = new List<string>();
                foreach (var includefile in WorkflowJson.includefiles)
                    includefiles.AddRange(Directory.GetFiles(folder, includefile).ToList());
                foreach (var includefile in WorkflowJson.includefiles)
                {
                    var other = includefile.Replace("*.", string.Empty);
                    includefiles.AddRange(Directory.GetFiles(folder, other).ToList());
                }
                var excludefiles = new List<string>();
                foreach (var excludefile in WorkflowJson.excludefiles)
                    excludefiles.AddRange(Directory.GetFiles(folder, excludefile).ToList());
                foreach (var excludefile in WorkflowJson.excludefiles)
                {
                    var other = excludefile.Replace("*.", string.Empty);
                    excludefiles.AddRange(Directory.GetFiles(folder, other).ToList());
                }
                var assemblies = includefiles.Where(file => !excludefiles.Contains(file)).ToList();
                return assemblies;
            }
        }

        public void Run()
        {
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorGreen, "START WORKFLOW TASKS");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            if (WorkflowFiles.Count() == 0) throw new Exception("No workflow files found. Please check PL.DynamicsCrm.DevKit.Cli.json file!!");
            if (WorkflowJson.solution.Length == 0 || WorkflowJson.solution == "???") throw new Exception("No solution found in workflow profile. Please check PL.DynamicsCrm.DevKit.Cli.json file!!");
            foreach (var workflowFile in WorkflowFiles) RegisterWorkflow(workflowFile);
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorGreen, "END WORKFLOW TASKS");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
        }

        private void RegisterWorkflow(string workflowFile)
        {
            var assemblyFilePath = new FileInfo(workflowFile);
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve += CurrentDomain_ReflectionOnlyAssemblyResolve;
            var assembly = Assembly.ReflectionOnlyLoadFrom(workflowFile);
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve -= CurrentDomain_ReflectionOnlyAssemblyResolve;
            if (assembly == null) return;
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve += CurrentDomain_ReflectionOnlyAssemblyResolve;
            var workflowTypes = assembly.DefinedTypes.Where(p => IsCodeActivity(p));
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve -= CurrentDomain_ReflectionOnlyAssemblyResolve;
            if (!workflowTypes.Any()) return;
            var workflowEntity = RegisterAssembly(assemblyFilePath, assembly, workflowTypes);
            if (workflowEntity == null) return;
            AddAssemblyToSolution(workflowEntity);
            foreach (var workflowType in workflowTypes)
            {
                if (workflowType.IsAbstract) continue;
                var workflowAttributes = workflowType.GetCustomAttributesData()
                                      .Where(a => a.AttributeType.Name == typeof(CrmPluginRegistrationAttribute).Name);
                var customAttributeDatas = workflowAttributes as CustomAttributeData[] ?? workflowAttributes.ToArray();
                if (!customAttributeDatas.Any()) continue;
                RegisterWorkflowType(workflowEntity, workflowType);
            }
        }

        private bool IsCodeActivity(Type type)
        {
            if (type.Name == typeof(CodeActivity).Name) return true;
            if (type.BaseType != null) return IsCodeActivity(type.BaseType);
            return false;
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

        private Entity RegisterAssembly(FileSystemInfo assemblyFilePath, Assembly assembly, IEnumerable<Type> workflowTypes)
        {
            var firstType = GetAttributes(workflowTypes, typeof(CrmPluginRegistrationAttribute).Name).FirstOrDefault();
            if (firstType == null)
            {
                var message = "Workflow Assembly don't have any type: CrmPluginRegistration Attribute";
                throw new Exception(message);
            }
            var firstTypeAttribute = firstType.CreateFromData();
            var assemblyProperties = assembly.GetName().FullName
                .Split(",= ".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);
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
            var plugin = new Entity("pluginassembly")
            {
                ["content"] = content,
                ["name"] = assemblyProperties[0],
                ["culture"] = assemblyProperties[4],
                ["version"] = assemblyProperties[2],
                ["publickeytoken"] = assemblyProperties[6],
                ["sourcetype"] = new OptionSetValue(0),
                ["isolationmode"] = firstTypeAttribute.IsolationMode == IsolationModeEnum.Sandbox ? new OptionSetValue(2) : new OptionSetValue(1)
            };
            if (pluginAssemblyId == Guid.Empty)
            {
                CliLog.WriteLine(CliLog.ColorRed, "Registering", CliLog.ColorGreen, " Assembly: ", CliLog.ColorCyan, $"{assemblyProperties[0]}");
                pluginAssemblyId = CrmServiceClient.Create(plugin);
                plugin["pluginassemblyid"] = pluginAssemblyId;
            }
            else
            {
                CliLog.WriteLine(CliLog.ColorRed, "Updating", CliLog.ColorGreen, " Assembly: ", CliLog.ColorCyan, $"{assemblyProperties[0]}");
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
            if (rows.Entities.Count != 0) return;
            var request = new AddSolutionComponentRequest
            {
                AddRequiredComponents = true,
                ComponentType = 91,
                ComponentId = Guid.Parse(workflow["pluginassemblyid"].ToString()),
                SolutionUniqueName = WorkflowJson.solution
            };
            CliLog.WriteLine(CliLog.ColorRed, "Adding", CliLog.ColorGreen, " Assembly: ", CliLog.ColorCyan, $"{workflow["name"]} ",
                CliLog.ColorGreen, "to solution: ", CliLog.ColorCyan, $"{WorkflowJson.solution}");
            CrmServiceClient.Execute(request);
        }

        private void RegisterWorkflowType(Entity workflowEntity, TypeInfo workflow)
        {
            var workflowAttributes = workflow.GetCustomAttributesData()
                .Where(a => a.AttributeType.Name == typeof(CrmPluginRegistrationAttribute).Name).ToList();
            if (!workflowAttributes.Any()) return;
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
    <all-attributes />
    <filter type='and'>
      <condition attribute='typename' operator='eq' value='{fetchData.typename}'/>
    </filter>
  </entity>
</fetch>";
                var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                var pluginType = new Entity("plugintype")
                {
                    ["name"] = attribute.Name,
                    ["friendlyname"] = attribute.FriendlyName,
                    ["pluginassemblyid"] = new EntityReference("pluginassembly", Guid.Parse(workflowEntity["pluginassemblyid"].ToString())),
                    ["typename"] = workflow.FullName,
                    ["workflowactivitygroupname"] = attribute.GroupName,
                    ["description"] = attribute.Description
                };
                if (rows.Entities.Count == 0)
                {
                    CliLog.WriteLine(CliLog.ColorRed, "\tRegistering", CliLog.ColorGreen, " Type: ", CliLog.ColorCyan, $"{workflow.FullName}");
                    CrmServiceClient.Create(pluginType);
                }
                else
                {
                    var check = rows.Entities[0];
                    if (!IsChangedPluginType(check, pluginType))
                    {
                        CliLog.WriteLine(CliLog.ColorRed, "\tNo Change", CliLog.ColorGreen, " Type: ", CliLog.ColorCyan, $"{workflow.FullName}");
                    }
                    else
                    {
                        pluginType["plugintypeid"] = rows.Entities[0].Id;
                        CliLog.WriteLine(CliLog.ColorRed, "\tUpdating", CliLog.ColorGreen, " Type: ", CliLog.ColorCyan, $"{workflow.FullName}");
                        CrmServiceClient.Update(pluginType);
                    }
                }
            }
        }

        private bool IsChangedPluginType(Entity check, Entity step)
        {
            foreach (var key in check.Attributes.Keys)
            {
                if (step.Attributes.Contains(key))
                {
                    object checkValue = null;
                    object stepValue = null;
                    if (check.Attributes[key] is OptionSetValue && step.Attributes[key] is OptionSetValue)
                    {
                        checkValue = ((OptionSetValue)check.Attributes[key]).Value;
                        stepValue = ((OptionSetValue)step.Attributes[key]).Value;
                    }
                    else if (check.Attributes[key] is EntityReference && step.Attributes[key] is EntityReference)
                    {
                        checkValue = ((EntityReference)check.Attributes[key]).Id;
                        stepValue = ((EntityReference)step.Attributes[key]).Id;
                    }
                    else
                    {
                        stepValue = step.Attributes[key];
                        checkValue = check.Attributes[key];
                    }
                    if (stepValue?.ToString() != checkValue?.ToString())
                        return true;
                }
            }
            return false;
        }
    }
}
