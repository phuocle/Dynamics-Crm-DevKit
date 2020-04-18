using System;
using System.Activities;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using DynamicsCrm.DevKit.Shared.Extensions;
using DynamicsCrm.DevKit.Shared.Models.Cli;
using System.ServiceModel;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskWorkflow
    {
        private CrmServiceClient crmServiceClient;
        private string currentDirectory;
        private CommandLineArgs arguments;
        private const string LOG = "[WORKFLOW]";
        private JsonWorkflow json;

        public TaskWorkflow(CrmServiceClient crmServiceClient, string currentDirectory, CommandLineArgs arguments)
        {
            this.crmServiceClient = crmServiceClient;
            this.currentDirectory = currentDirectory;
            this.arguments = arguments;
            var jsonFile = Path.Combine(currentDirectory, arguments.Json);
            this.json = SimpleJson.DeserializeObject<Json>(File.ReadAllText(jsonFile))
                .workflows.FirstOrDefault(x => x.profile == arguments.Profile);
        }

        public void Run()
        {
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "START ", CliLog.ColorMagenta, "WORKFLOW");

            if (!IsValid()) return;
            foreach (var file in WorkflowFiles)
            {
                RegisterWorkflow(file);
            }

            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, "WORKFLOW");
        }

        private bool IsValid()
        {
            if (json == null)
                throw new Exception($"{LOG} 'profile' not found: '{arguments.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.solution.Length == 0 || json.solution == "???")
                throw new Exception($"{LOG} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            return true;
        }

        private IEnumerable<string> WorkflowFiles
        {
            get
            {
                var folder = Path.Combine(currentDirectory, json.folder);
                var includefiles = new List<string>();
                foreach (var includefile in json.includefiles)
                {
                    if (Directory.Exists(folder))
                    {
                        includefiles.AddRange(Directory.GetFiles(folder, includefile).ToList());
                    }
                }
                foreach (var includefile in json.includefiles)
                {
                    var other = includefile.Replace("*.", string.Empty);
                    if (Directory.Exists(folder))
                    {
                        includefiles.AddRange(Directory.GetFiles(folder, other).ToList());
                    }
                }
                var excludefiles = new List<string>();
                foreach (var excludefile in json.excludefiles)
                {
                    if (Directory.Exists(folder))
                    {
                        excludefiles.AddRange(Directory.GetFiles(folder, excludefile).ToList());
                    }
                }
                foreach (var excludefile in json.excludefiles)
                {
                    var other = excludefile.Replace("*.", string.Empty);
                    if (Directory.Exists(folder))
                    {
                        excludefiles.AddRange(Directory.GetFiles(folder, other).ToList());
                    }
                }
                var assemblies = includefiles.Where(file => !excludefiles.Contains(file)).ToList();
                return assemblies;
            }
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
                CliLog.WriteLine();
                CliLog.WriteLine();
                CliLog.WriteLine(ConsoleColor.Green, $"{LOG} Plugin Assembly don't have any type: CrmPluginRegistration Attribute");
                CliLog.WriteLine();
                CliLog.WriteLine();
                CliLog.WriteLine(ConsoleColor.Red, "!!! DEPLOY PLUGIN FAILED !!!");
                throw new Exception();
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
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
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
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "Registering", CliLog.ColorGreen, " Assembly: ", CliLog.ColorCyan, $"{assemblyProperties[0]}");
                pluginAssemblyId = crmServiceClient.Create(plugin);
                plugin["pluginassemblyid"] = pluginAssemblyId;
            }
            else
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "Updating", CliLog.ColorGreen, " Assembly: ", CliLog.ColorCyan, $"{assemblyProperties[0]}");
                plugin["pluginassemblyid"] = pluginAssemblyId;
                try
                {
                    crmServiceClient.Update(plugin);
                }
                catch (FaultException fe)
                {
                    CliLog.WriteLine();
                    CliLog.WriteLine();
                    CliLog.WriteLine(ConsoleColor.White, fe.Message);
                    CliLog.WriteLine();
                    CliLog.WriteLine();
                    CliLog.WriteLine(ConsoleColor.Red, "!!! DEPLOY WORKFLOW FAILED !!!");
                    throw;
                }
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
                uniquename = json.solution
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
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 0) return;
            var request = new AddSolutionComponentRequest
            {
                AddRequiredComponents = true,
                ComponentType = 91,
                ComponentId = Guid.Parse(workflow["pluginassemblyid"].ToString()),
                SolutionUniqueName = json.solution
            };
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, " Adding", CliLog.ColorGreen, " Assembly: ", CliLog.ColorCyan, $"{workflow["name"]} ", CliLog.ColorGreen, "to solution: ", CliLog.ColorCyan, $"{json.solution}");
            crmServiceClient.Execute(request);
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
    <attribute name='plugintypeid' />
    <filter type='and'>
      <condition attribute='typename' operator='eq' value='{fetchData.typename}'/>
    </filter>
  </entity>
</fetch>";
                var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                var pluginType = new Entity("plugintype")
                {
                    ["name"] = attribute.Name,
                    ["friendlyname"] = attribute.FriendlyName,
                    ["pluginassemblyid"] = new EntityReference("pluginassembly", Guid.Parse(workflowEntity["pluginassemblyid"].ToString())),
                    ["typename"] = workflow.FullName,
                    ["workflowactivitygroupname"] = attribute.GroupName
                };
                if (rows.Entities.Count == 0)
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "   Registering", CliLog.ColorGreen, " Type: ", CliLog.ColorCyan, $"{workflow.FullName}");
                    crmServiceClient.Create(pluginType);
                }
                else
                {
                    pluginType["plugintypeid"] = rows.Entities[0].Id;
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, " Type: ", CliLog.ColorCyan, $"{workflow.FullName}");
                    crmServiceClient.Update(pluginType);
                }
            }
        }
    }
}
