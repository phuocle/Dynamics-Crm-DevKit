using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Activities;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.ServiceModel;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskServer : ITask
    {
        public TaskServer(CommandLineArgs arg, Json json)
        {
            this.Arg = arg;
            CrmServiceClient = arg.CrmServiceClient;
            CurrentDirectory = arg.CurrentDirectory;
            switch (arg.Type)
            {
                case nameof(CliType.servers):
                    JsonServer = json.servers.FirstOrDefault(x => x.profile == arg.Profile);
                    TaskType = $"[{nameof(CliType.servers).ToUpper()}]";
                    break;
                case nameof(CliType.workflows):
                    JsonServer = json.workflows.FirstOrDefault(x => x.profile == arg.Profile);
                    TaskType = $"[{nameof(CliType.workflows).ToUpper()}]";
                    break;
                case nameof(CliType.plugins):
                    JsonServer = json.plugins.FirstOrDefault(x => x.profile == arg.Profile);
                    TaskType = $"[{nameof(CliType.plugins).ToUpper()}]";
                    break;
                case nameof(CliType.dataproviders):
                    JsonServer = json.dataproviders.FirstOrDefault(x => x.profile == arg.Profile);
                    TaskType = $"[{nameof(CliType.dataproviders).ToUpper()}]";
                    break;
            }
        }

        public string CurrentDirectory { get; set; }
        public string TaskType { get; set; }
        public CrmServiceClient CrmServiceClient { get; set; }
        public CommandLineArgs Arg { get; set; }
        private JsonServer JsonServer { get; }
        private bool IsOk { get; set; }
        private Guid SolutionId { get; set; }
        private string Prefix { get; set; }
        private string CurrentFolder => $"{CurrentDirectory}\\{JsonServer.folder}";

        public bool IsValid()
        {
            if (JsonServer == null)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'profile' not found: '{Arg.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (JsonServer.folder == "???" || (JsonServer.folder != null && JsonServer?.folder?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'folder' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (JsonServer.solution == "???" || (JsonServer.solution != null && JsonServer?.solution?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            (IsOk, SolutionId, Prefix) = XrmHelper.IsExistSolution(CrmServiceClient, JsonServer.solution);
            if (!IsOk)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} solution '{JsonServer.solution}' not exist");
                return false;
            }
            return true;
        }

        public void Run()
        {
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "START ", ConsoleColor.Blue, TaskType);
            CliLog.WriteLine(ConsoleColor.White, "|");

            if (IsValid())
            {
                var files = GetFiles(CurrentFolder, JsonServer.includefiles, JsonServer.excludefiles);
                if (files.Count == 0)
                {
                    CliLog.WriteLineWarning(ConsoleColor.Green, "Not found any files to deploy");
                }
                else
                {
                    DeployFiles(files);
                }
            }

            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ", ConsoleColor.Blue, TaskType);
        }

        private void DeployFiles(List<string> files)
        {
            foreach (var file in files)
            {
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, ConsoleColor.White, $"{Path.GetFileName(file)}");
                var types = GetTypes(file);
                if (!IsValidTypes(file, types)) continue;
                DeployFile(file, types);
            }
        }

        private void DeployFile(string file, List<TypeInfo> types)
        {
            var pluginAssemblyId = DeployAssembly(file);
            if (pluginAssemblyId == null) return;
            if (Arg?.OnlyUpdateAssembly?.Length > 0) return;
            foreach (var type in types)
            {
                var attributes = GetCrmPluginRegistrationAttributes(type);
                var pluginTypeId = DeployPluginType(pluginAssemblyId.Value, type, attributes[0]);
                if (pluginTypeId == null) return;
                if (IsWorkflowType(type)) continue;
                foreach (var attribute in attributes)
                {
                    switch (attribute.PluginType)
                    {
                        case PluginType.Plugin:
                        case PluginType.CustomAction:
                            var pluginStepId = DeployPluginStep(pluginTypeId.Value, type, attribute);
                            if (pluginStepId == null) return;
                            break;
                        case PluginType.DataProvider:
                            break;
                        case PluginType.CustomApi:
                            break;
                        default:
                            break;
                    }
                }
            }
        }

        private Guid? DeployPluginStep(Guid pluginTypeId, TypeInfo type, CrmPluginRegistrationAttribute attribute)
        {
            if (attribute?.Message?.ToLower() == "update")
            {
                if (attribute?.FilteringAttributes?.Length == 0)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{type.FullName} Update message need provide FilteringAttributes value. Deploy assembly stopped.");
                    return null;
                }
            }
            var fetchData = new
            {
                plugintypeid = pluginTypeId,
                name = attribute.Name,
                sdkmessageidname = attribute.Message
            };
            var fetchXml = $@"
<fetch>
  <entity name='sdkmessageprocessingstep'>
    <all-attributes />
    <filter type='and'>
      <condition attribute='plugintypeid' operator='eq' value='{fetchData.plugintypeid}'/>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
      <condition attribute='sdkmessageidname' operator='eq' value='{fetchData.sdkmessageidname}'/>
    </filter>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count > 0 && rows.Entities.Count != 1)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Found more than 1 step name {type.FullName}. Deploy assembly stopped.");
                    return null;
                }
            }

            return null;
        }

        private Guid? DeployPluginType(Guid pluginAssemblyId, TypeInfo type, CrmPluginRegistrationAttribute attribute)
        {
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
    <attribute name='description' />
    <attribute name='customworkflowactivityinfo' />
    <filter type='and'>
      <condition attribute='typename' operator='eq' value='{fetchData.typename}'/>
    </filter>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count > 0 && rows.Entities.Count != 1)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Found more than 1 type name {type.FullName}. Deploy assembly stopped.");
                    return null;
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
            if (rows.Entities.Count == 0 || (rows.Entities.Count > 0 && string.IsNullOrWhiteSpace(rows.Entities[0].GetAttributeValue<string>("description"))))
            {
                pluginType["description"] = Const.WindowTitle;
            }
            if (rows.Entities.Count == 0)
            {
                var request = new CreateRequest
                {
                    Target = pluginType
                };
                request.Parameters.Add("SolutionUniqueName", JsonServer.solution);
                CliLog.WriteLineWarning(SPACE, SPACE, ConsoleColor.Red, "Registering ", ConsoleColor.White, $"{attribute.PluginType.ToString()} Type: ", ConsoleColor.Cyan, type.FullName);
                var response = (CreateResponse)CrmServiceClient.Execute(request);
                return response.id;
            }
            else
            {
                pluginType["plugintypeid"] = rows.Entities[0].Id;
                var request = new UpdateRequest
                {
                    Target = pluginType
                };
                request.Parameters.Add("SolutionUniqueName", JsonServer.solution);
                try
                {
                    CrmServiceClient.Execute(request);
                }
                catch (FaultException fe)
                {
                    CliLog.WriteLine(ConsoleColor.White, "|");
                    CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Red, CliAction.Error, ConsoleColor.White, fe.Message);
                    CliLog.WriteLine(ConsoleColor.White, "|");
                    throw;
                }
                if (IsWorkflowType(type))
                {
                    var old = rows.Entities[0].GetAttributeValue<string>("customworkflowactivityinfo");
                    var @new = CrmServiceClient.Retrieve("plugintype", rows.Entities[0].Id, new ColumnSet("customworkflowactivityinfo")).GetAttributeValue<string>("customworkflowactivityinfo");
                    if (IsEqualsWorkflowType(old, @new))
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{attribute.PluginType.ToString()} Type: ", ConsoleColor.Cyan, type.FullName);
                    }
                    else
                    {
                        CliLog.WriteLineWarning(SPACE, SPACE, ConsoleColor.Red, CliAction.Updated, ConsoleColor.White, $"{attribute.PluginType.ToString()} Type: ", ConsoleColor.Cyan, type.FullName);
                    }
                }
                else
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, $"{attribute.PluginType.ToString()} Type: ", ConsoleColor.Cyan, type.FullName);
                }
            }
            return rows.Entities[0].Id;
        }

        private bool IsEqualsWorkflowType(string old, string @new)
        {
            return old == @new;
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

        private Guid? DeployAssembly(string file)
        {
            var assembly = Assembly.ReflectionOnlyLoadFrom(file);
            var assemblyProperties = assembly.GetName().FullName.Split(",= ".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);
            var assemblyName = assemblyProperties[0];
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
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count > 0 && rows.Entities.Count != 1)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Found more than 1 plugin assembly name {assemblyName}. Deploy assembly stopped.");
                    return null;
                }
            }
            var newContent = Convert.ToBase64String(File.ReadAllBytes(file));
            var plugin = new Entity("pluginassembly")
            {
                ["content"] = newContent,
                ["name"] = assemblyProperties[0],
                ["culture"] = assemblyProperties[4],
                ["version"] = assemblyProperties[2],
                ["publickeytoken"] = assemblyProperties[6],
                ["sourcetype"] = new OptionSetValue(0),
                ["isolationmode"] = GetIsolationMode(file)
            };
            if (rows.Entities.Count == 0)
            {
                var request = new CreateRequest
                {
                    Target = plugin
                };
                request.Parameters.Add("SolutionUniqueName", JsonServer.solution);
                CliLog.WriteLineWarning(SPACE, ConsoleColor.Red, "Registering", ConsoleColor.White, " Assembly ", ConsoleColor.Cyan, assemblyName);
                var response = (CreateResponse)CrmServiceClient.Execute(request);
                return response.id;
            }
            else
            {
                var oldContent = rows.Entities[0].GetAttributeValue<string>("content");
                if (IsEqualsAssembly(oldContent, newContent))
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, "Assembly ", ConsoleColor.Cyan, assemblyName);
                    return rows.Entities[0].Id;
                }
                else
                {
                    plugin["pluginassemblyid"] = rows.Entities[0].Id;
                    var request = new UpdateRequest
                    {
                        Target = plugin
                    };
                    request.Parameters.Add("SolutionUniqueName", JsonServer.solution);
                    CliLog.WriteLineWarning(SPACE, ConsoleColor.Red, CliAction.Updated, ConsoleColor.White, "Assembly ", ConsoleColor.Cyan, assemblyName);
                    try
                    {
                        CrmServiceClient.Execute(request);
                    }
                    catch (FaultException fe)
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|");
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Red, CliAction.Error, ConsoleColor.White, fe.Message);
                        CliLog.WriteLine(ConsoleColor.White, "|");
                        throw;
                    }
                }
            }
            return rows.Entities[0].Id;
        }

        private bool IsEqualsAssembly(string oldContent, string newContent)
        {
            return oldContent == newContent;
        }

        private const string SPACE = "  ";
        private bool IsValidTypes(string file, List<TypeInfo> types)
        {
            if (types.Count == 0)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"Not found any valid types to deploy.");
                return false;
            }
            if (!IsValidTypes(types))
            {
                return false;
            }
            if (!IsValidTypesWithCDS(types, Path.GetFileNameWithoutExtension(file)))
            {
                return false;
            }
            return true;
        }

        private bool IsValidTypesWithCDS(List<TypeInfo> types, string fileNameWithoutExtension)
        {
            var fetchData = new
            {
                name = fileNameWithoutExtension
            };
            var fetchXml = $@"
<fetch>
  <entity name='plugintype'>
    <attribute name='typename' />
    <link-entity name='pluginassembly' from='pluginassemblyid' to='pluginassemblyid'>
      <filter>
        <condition attribute='name' operator='eq' value='{fetchData.name}'/>
      </filter>
    </link-entity>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return true;
            foreach (var entity in rows.Entities)
            {
                var typeName = entity.GetAttributeValue<string>("typename");
                if (types.Count(x => x.FullName == typeName) == 0)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Type: '{typeName}' not found in the assembly file. This type: '{typeName}' already registered to CRM/CDS. Deploy assembly stopped.");
                    CliLog.WriteLineWarning(ConsoleColor.Yellow, $"If you need to deploy this assembly. Please manually remove this type from Plugin Registration Tool and try it again.");
                    return false;
                }
            }
            return true;
        }

        private bool IsValidTypes(List<TypeInfo> types)
        {
            foreach (var type in types)
            {
                var attributes = GetCrmPluginRegistrationAttributes(type);
                if (attributes.Count() > 1)
                {
                    if (IsWorkflowType(type))
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"Type '{type.FullName}' has multi attribute CrmPluginRegistration. Deploy stopped.");
                        return false;
                    }
                    else
                    {
                        if (attributes.GroupBy(x => x.PluginType).Count() != 1)
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Type '{type.FullName}' has multi invalid attribute CrmPluginRegistration. Deploy stopped.");
                        }
                        return false;
                    }
                }
            }
            return true;
        }

        private List<CrmPluginRegistrationAttribute> GetCrmPluginRegistrationAttributes(TypeInfo type)
        {
            var list = new List<CrmPluginRegistrationAttribute>();
            var attributes = type.GetCustomAttributesData();
            foreach (var attribute in attributes)
                list.Add(ConvertAttributeToCrmPluginRegistration(attribute));
            return list;
        }

        private CrmPluginRegistrationAttribute ConvertAttributeToCrmPluginRegistration(CustomAttributeData data)
        {
            var attribute = new CrmPluginRegistrationAttribute();
            var arguments = data.ConstructorArguments.ToArray();
            var hasNamedArgumentPluginType = false;
            var isCodeActivity = false;
            var isPlugin = false;
            if (arguments.Length == 8)
            {
                attribute.Message = (string)arguments[0].Value;
                attribute.EntityLogicalName = (string)arguments[1].Value;
                attribute.Stage = (StageEnum)Enum.ToObject(typeof(StageEnum), (int)arguments[2].Value);
                attribute.ExecutionMode = (ExecutionModeEnum)Enum.ToObject(typeof(ExecutionModeEnum), (int)arguments[3].Value);
                attribute.FilteringAttributes = (string)arguments[4].Value;
                attribute.Name = (string)arguments[5].Value;
                attribute.ExecutionOrder = (int)arguments[6].Value;
                attribute.IsolationMode = (IsolationModeEnum)Enum.ToObject(typeof(IsolationModeEnum), (int)arguments[7].Value);
                isPlugin = true;
            }
            else if (arguments.Length == 5)
            {
                attribute.Name = (string)arguments[0].Value;
                attribute.FriendlyName = (string)arguments[1].Value;
                attribute.Description = (string)arguments[2].Value;
                attribute.GroupName = (string)arguments[3].Value;
                attribute.IsolationMode = (IsolationModeEnum)Enum.ToObject(typeof(IsolationModeEnum), (int)arguments[4].Value);
                isCodeActivity = true;
            }
            else if (arguments.Length == 3)
            {
                attribute.Name = (string)arguments[0].Value;
                attribute.Message = (string)arguments[1].Value;
                attribute.PluginType = (PluginType)Enum.ToObject(typeof(PluginType), (int)arguments[2].Value);
            }
            foreach (var namedArgument in data.NamedArguments)
            {
                switch (namedArgument.MemberName)
                {
                    case "RunAs":
                        attribute.RunAs = (string)namedArgument.TypedValue.Value;
                        break;
                    case "FriendlyName":
                        attribute.FriendlyName = (string)namedArgument.TypedValue.Value;
                        break;
                    case "GroupName":
                        attribute.GroupName = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Description":
                        attribute.Description = (string)namedArgument.TypedValue.Value;
                        break;
                    case "DeleteAsyncOperation":
                        attribute.DeleteAsyncOperation = (bool)namedArgument.TypedValue.Value;
                        break;
                    case "Offline":
                        attribute.Offline = (bool)namedArgument.TypedValue.Value;
                        break;
                    case "Server":
                        attribute.Server = (bool)namedArgument.TypedValue.Value;
                        break;
                    case "Action":
                        attribute.Action = (PluginStepOperationEnum)Enum.ToObject(typeof(PluginStepOperationEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "IsolationMode":
                        attribute.IsolationMode = (IsolationModeEnum)Enum.ToObject(typeof(IsolationModeEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "Message":
                        attribute.Message = (string)namedArgument.TypedValue.Value;
                        break;
                    case "EntityLogicalName":
                        attribute.EntityLogicalName = (string)namedArgument.TypedValue.Value;
                        break;
                    case "FilteringAttributes":
                        attribute.FilteringAttributes = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Name":
                        attribute.Name = (string)namedArgument.TypedValue.Value;
                        break;
                    case "ExecutionOrder":
                        attribute.ExecutionOrder = (int)namedArgument.TypedValue.Value;
                        break;
                    case "Stage":
                        attribute.Stage = (StageEnum)Enum.ToObject(typeof(StageEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "ExecutionMode":
                        attribute.ExecutionMode = (ExecutionModeEnum)Enum.ToObject(typeof(ExecutionModeEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "UnSecureConfiguration":
                        attribute.UnSecureConfiguration = (string)namedArgument.TypedValue.Value;
                        break;
                    case "SecureConfiguration":
                        attribute.SecureConfiguration = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image1Name":
                        attribute.Image1Name = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image1Alias":
                        attribute.Image1Alias = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image1Type":
                        attribute.Image1Type = (ImageTypeEnum)Enum.ToObject(typeof(ImageTypeEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "Image1Attributes":
                        attribute.Image1Attributes = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image2Name":
                        attribute.Image2Name = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image2Alias":
                        attribute.Image2Alias = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image2Type":
                        attribute.Image2Type = (ImageTypeEnum)Enum.ToObject(typeof(ImageTypeEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "Image2Attributes":
                        attribute.Image2Attributes = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image3Name":
                        attribute.Image3Name = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image3Alias":
                        attribute.Image3Alias = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image3Type":
                        attribute.Image3Type = (ImageTypeEnum)Enum.ToObject(typeof(ImageTypeEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "Image3Attributes":
                        attribute.Image3Attributes = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image4Name":
                        attribute.Image4Name = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image4Alias":
                        attribute.Image4Alias = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image4Type":
                        attribute.Image4Type = (ImageTypeEnum)Enum.ToObject(typeof(ImageTypeEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "Image4Attributes":
                        attribute.Image4Attributes = (string)namedArgument.TypedValue.Value;
                        break;
                    case "PluginType":
                        hasNamedArgumentPluginType = true;
                        attribute.PluginType = (PluginType)Enum.ToObject(typeof(PluginType), (int)namedArgument.TypedValue.Value);
                        break;
                    case "DataSource":
                        attribute.DataSource = (string)namedArgument.TypedValue.Value;
                        break;
                }
            }
            if (!hasNamedArgumentPluginType)
            {
                if (isCodeActivity || attribute.GroupName.Length > 0) attribute.PluginType = PluginType.Workflow;
                if (isPlugin) attribute.PluginType = PluginType.Plugin;
                if (isPlugin && attribute.EntityLogicalName?.ToLower() == "none") attribute.PluginType = PluginType.CustomAction;
            }
            return attribute;
        }

        private List<string> GetFiles(string folder, List<string> includePatternFiles, List<string> excludePatternFiles)
        {
            var includefiles = new List<string>();
            foreach (var includefile in includePatternFiles)
            {
                if (Directory.Exists(folder))
                {
                    includefiles.AddRange(Directory.GetFiles(folder, includefile).ToList());
                }
            }
            foreach (var includefile in includePatternFiles)
            {
                var other = includefile.Replace("*.", string.Empty);
                if (Directory.Exists(folder))
                {
                    includefiles.AddRange(Directory.GetFiles(folder, other).ToList());
                }
            }
            var excludefiles = new List<string>();
            foreach (var excludefile in excludePatternFiles)
            {
                if (Directory.Exists(folder))
                {
                    excludefiles.AddRange(Directory.GetFiles(folder, excludefile).ToList());
                }
            }
            foreach (var excludefile in excludePatternFiles)
            {
                var other = excludefile.Replace("*.", string.Empty);
                if (Directory.Exists(folder))
                {
                    excludefiles.AddRange(Directory.GetFiles(folder, other).ToList());
                }
            }
            return includefiles.Where(file => !excludefiles.Contains(file)).Distinct().ToList();
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

        private bool IsWorkflowType(Type type)
        {
            if (type?.Name == typeof(CodeActivity)?.Name) return true;
            if (type?.BaseType != null) return IsWorkflowType(type?.BaseType);
            return false;
        }

        private OptionSetValue GetIsolationMode(string file)
        {
            var types = GetTypes(file);
            foreach (var type in types)
            {
                if (IsWorkflowType(type)) continue;
                var attributes = GetCrmPluginRegistrationAttributes(type);
                foreach (var attribute in attributes)
                {
                    if (attribute.IsolationMode == IsolationModeEnum.None) return new OptionSetValue(1);
                }
            }
            return new OptionSetValue(2);
        }
    }
}
