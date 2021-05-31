using System.IO;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;
using DynamicsCrm.DevKit.Shared.Models.Cli;
using System.Linq;
using System;
using DynamicsCrm.DevKit.Cli.Helper;
using System.Reflection;
using System.Collections.Generic;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using DynamicsCrm.DevKit.Shared.Helper;
using System.ServiceModel;
using DynamicsCrm.DevKit.Shared.Extensions;
using System.Activities;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskServer
    {
        private CrmServiceClient crmServiceClient;
        private string currentDirectory;
        private CommandLineArgs arguments;
        private const string LOG = "[SERVER]";
        private JsonServer json;

        public TaskServer(CrmServiceClient crmServiceClient, string currentDirectory, CommandLineArgs arguments)
        {
            this.crmServiceClient = crmServiceClient;
            this.currentDirectory = currentDirectory;
            this.arguments = arguments;
            var jsonFile = Path.Combine(currentDirectory, arguments.Json);
            this.json = SimpleJson.DeserializeObject<Json>(File.ReadAllText(jsonFile))
                .servers.FirstOrDefault(x => x.profile == arguments.Profile);
        }
        public void Run()
        {
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "START ", CliLog.ColorMagenta, LOG);
            CliLog.WriteLine(CliLog.ColorWhite, "|");

            if (!IsValid()) return;

            var folder = Path.Combine(currentDirectory, json.folder);
            var files = CliHelper.GetFiles(folder, json.includefiles, json.excludefiles);

            foreach (var file in files)
            {
                var types = GetTypes(file);
                if (types.Count == 0) continue;
                if (!IsValidTypes(types)) continue;
                var pluginAssemblyId = RegisterAssembly(file);
                if (arguments.OnlyUpdateAssembly?.Length > 0) continue;
                if (pluginAssemblyId == Guid.Empty) continue;
                foreach (var type in types)
                {
                    var attributes = GetCrmPluginRegistrationAttributes(type);
                    if (IsCodeActivity(type))
                    {
                        if (attributes.Count() == 1)
                        {
                            attributes[0].PluginType = PluginType.Workflow;
                            RegisterPluginType(pluginAssemblyId, type, attributes[0]);
                        }
                    }
                    else
                    {

                    }

                }
            }

            CliLog.WriteLine(CliLog.ColorWhite, "|");
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, LOG);
        }



        private bool IsCodeActivity(Type type)
        {
            if (type?.Name == typeof(CodeActivity)?.Name) return true;
            if (type?.BaseType != null) return IsCodeActivity(type?.BaseType);
            return false;
        }


        private bool IsValidTypes(List<TypeInfo> types)
        {
            foreach (var type in types)
            {
                if (IsCodeActivity(type))
                {
                    var attributes = GetCrmPluginRegistrationAttributes(type);
                    if (attributes.Count() > 1)
                    {
                        CliLog.WriteLine(CliLog.ColorWhite, "|");
                        CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, " Workflow: ", CliLog.ColorRed, type.FullName, CliLog.ColorGreen, " have multi ", CliLog.ColorRed, "CrmPluginRegistration", CliLog.ColorGreen, " attribute");
                        CliLog.WriteLine(CliLog.ColorWhite, "|");
                        return false;
                    }
                }
                else
                {

                }
            }
            return true;
        }

        private List<CrmPluginRegistrationAttribute> GetCrmPluginRegistrationAttributes(TypeInfo type)
        {
            var list = new List<CrmPluginRegistrationAttribute>();
            var attributes = type.GetCustomAttributesData();
            foreach (var attribute in attributes)
                list.Add(attribute.CreateFromData());
            return list;
        }



        private bool IsValid()
        {
            if (json == null)
                throw new Exception($"{LOG} 'profile' not found: '{arguments.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (json.solution.Length == 0 || json.solution == "???")
                throw new Exception($"{LOG} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
            if (!XrmHelper.IsExistSolution(crmServiceClient, json.solution, out var solutionId, out var prefix))
                throw new Exception($"{LOG} solution '{json.solution}' not exist");
            return true;
        }


        private List<TypeInfo> GetTypes(string file)
        {
            var assemblyFilePath = new FileInfo(file);
            Assembly assembly = null;
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve += CurrentDomain_ReflectionOnlyAssemblyResolve;
            assembly = Assembly.ReflectionOnlyLoadFrom(file);
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve -= CurrentDomain_ReflectionOnlyAssemblyResolve;
            if (assembly == null) return null;
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve += CurrentDomain_ReflectionOnlyAssemblyResolve;
            var allTypes = assembly.DefinedTypes;
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve -= CurrentDomain_ReflectionOnlyAssemblyResolve;
            var types = new List<TypeInfo>();
            foreach (var type in allTypes)
            {
                try
                {
                    var attributes = type?.GetCustomAttributesData();
                    if (attributes.Any(a => a.AttributeType.Name == typeof(CrmPluginRegistrationAttribute).Name))
                        types.Add(type);
                }
                catch { }
            }
            return types;
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


        private Guid RegisterAssembly(string file)
        {
            var assembly = Assembly.ReflectionOnlyLoadFrom(file);
            var assemblyProperties = assembly.GetName().FullName.Split(",= ".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);
            var assemblyName = assemblyProperties[0];
            var pluginAssemblyId = Guid.Empty;
            var content = Convert.ToBase64String(File.ReadAllBytes(file));
            var fetchData = new
            {
                name = assemblyName
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
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count == 1)
                {
                    var entity = rows.Entities[0];
                    pluginAssemblyId = entity.Id;
                }
                else
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR: ", CliLog.ColorRed, $"Found more than 1 plugin assembly name: {assemblyName}");
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    return Guid.Empty;
                }
            }
            var plugin = new Entity("pluginassembly")
            {
                ["content"] = content,
                ["name"] = assemblyProperties[0],
                ["culture"] = assemblyProperties[4],
                ["version"] = assemblyProperties[2],
                ["publickeytoken"] = assemblyProperties[6],
                ["sourcetype"] = new OptionSetValue(0),
                ["isolationmode"] = new OptionSetValue(2)
            };
            if (pluginAssemblyId == Guid.Empty)
            {
                var request = new CreateRequest
                {
                    Target = plugin
                };
                request.Parameters.Add("SolutionUniqueName", json.solution);
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "Registering", CliLog.ColorGreen, " Assembly ", CliLog.ColorCyan, assemblyName);
                var response = (CreateResponse)crmServiceClient.Execute(request);
                return response.id;
            }
            else
            {
                plugin["pluginassemblyid"] = pluginAssemblyId;
                var request = new UpdateRequest
                {
                    Target = plugin
                };
                request.Parameters.Add("SolutionUniqueName", json.solution);
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "Updating", CliLog.ColorGreen, " Assembly ", CliLog.ColorCyan, assemblyName);
                try
                {
                    crmServiceClient.Execute(request);
                }
                catch (FaultException fe)
                {
                    CliLog.WriteLine();
                    CliLog.WriteLine();
                    CliLog.WriteLine(ConsoleColor.White, fe.Message);
                    CliLog.WriteLine();
                    CliLog.WriteLine();
                    CliLog.WriteLine(ConsoleColor.Red, $"!!! DEPLOY {LOG} FAILED !!!");
                    throw;
                }
                return pluginAssemblyId;
            }
        }

        private Guid RegisterPluginType(Guid pluginAssemblyId, TypeInfo type, CrmPluginRegistrationAttribute attribute)
        {
            var pluginTypeId = Guid.Empty;
            var fetchData = new
            {
                typename = type.FullName
            };
            var fetchXml = $@"
<fetch>
  <entity name='plugintype'>
    <attribute name='plugintypeid' />
    <attribute name='name' />
    <attribute name='typename' />
    <attribute name='friendlyname' />
    <attribute name='workflowactivitygroupname' />
    <filter type='and'>
      <condition attribute='typename' operator='eq' value='{fetchData.typename}'/>
    </filter>
  </entity>
</fetch>";
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count == 1)
                {
                    var entity = rows.Entities[0];
                    pluginTypeId = entity.Id;
                }
                else
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorWhite, " ERROR: ", CliLog.ColorRed, $"Found more than 1 plugin type name: {type.FullName}");
                    CliLog.WriteLine(CliLog.ColorWhite, "|");
                    return Guid.Empty;
                }
            }
            var pluginType = new Entity("plugintype");
            if (attribute.PluginType == PluginType.Workflow)
            {
                pluginType["name"] = attribute.Name;
                pluginType["pluginassemblyid"] = new EntityReference("pluginassembly", pluginAssemblyId);
                pluginType["typename"] = type.FullName;
                pluginType["friendlyname"] = attribute.FriendlyName;
                pluginType["workflowactivitygroupname"] = attribute.GroupName;
            }
            else
            {
                pluginType["name"] = type.FullName;
                pluginType["pluginassemblyid"] = new EntityReference("pluginassembly", pluginAssemblyId);
                pluginType["typename"] = type.FullName;
                pluginType["friendlyname"] = type.FullName;
            };
            if (pluginTypeId == Guid.Empty)
            {
                var request = new CreateRequest
                {
                    Target = pluginType
                };
                request.Parameters.Add("SolutionUniqueName", json.solution);
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "   Registering ", CliLog.ColorGreen, $"{attribute.PluginType.ToString()} ", CliLog.ColorRed, $"{type.FullName}");
                var response = (CreateResponse)crmServiceClient.Execute(request);
                return response.id;
            }
            else
            {
                pluginType["plugintypeid"] = pluginTypeId;
                if (IsEqualsPluginType(rows.Entities[0], pluginType))
                {
                    CliLog.WriteLine(CliLog.ColorWhite, "|", "   ", CliLog.ColorGreen, $"{attribute.PluginType.ToString()} ", CliLog.ColorRed, $"{type.FullName}");
                }
                else
                {
                    var request = new UpdateRequest
                    {
                        Target = pluginType
                    };
                    request.Parameters.Add("SolutionUniqueName", json.solution);
                    CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorRed, "   Updating ", CliLog.ColorGreen, $"{attribute.PluginType.ToString()} ", CliLog.ColorRed, $"{type.FullName}");

                    crmServiceClient.Execute(request);
                }
                return pluginTypeId;
            }
        }

        private bool IsEqualsPluginType(Entity oldEntity, Entity newEntity)
        {
            if (
                oldEntity.GetAttributeValue<string>("name") != newEntity.GetAttributeValue<string>("name") ||
                oldEntity.GetAttributeValue<string>("typename") != newEntity.GetAttributeValue<string>("typename") ||
                oldEntity.GetAttributeValue<string>("friendlyname") != newEntity.GetAttributeValue<string>("friendlyname") ||
                oldEntity.GetAttributeValue<string>("workflowactivitygroupname") != newEntity.GetAttributeValue<string>("workflowactivitygroupname")
               )
                return false;
            return true;
        }
    }
}
