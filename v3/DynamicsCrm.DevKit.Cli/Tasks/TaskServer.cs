using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Activities;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;

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
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Deploy: ", ConsoleColor.White ,$"{Path.GetFileName(file)}");
                var types = GetTypes(file);
                if (types.Count == 0)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Not found any valid types to deploy.");
                    continue;
                }
                if (!IsValidTypes(types))
                {
                    continue;
                }
                if (!IsValidTypesWithCDS(types, Path.GetFileNameWithoutExtension(file)))
                {
                    continue;
                }
            }
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
    <attribute name='name' />
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
                var name = entity.GetAttributeValue<string>("name");
                if (types.Count(x => x.Name == name) == 0)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Type: '{name}' not found in the assembly file. This type: '{name}' already registered to CRM/CDS. Deploy stopped.");
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
                    if (IsCodeActivity(type))
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
                    case "FilteringAllAttributes":
                        attribute.FilteringAllAttributes = (bool)namedArgument.TypedValue.Value;
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
                    case "Image1AllAttributes":
                        attribute.Image1AllAttributes = (bool)namedArgument.TypedValue.Value;
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
                    case "Image2AllAttributes":
                        attribute.Image2AllAttributes = (bool)namedArgument.TypedValue.Value;
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
                    case "Image3AllAttributes":
                        attribute.Image3AllAttributes = (bool)namedArgument.TypedValue.Value;
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
                    case "Image4AllAttributes":
                        attribute.Image4AllAttributes = (bool)namedArgument.TypedValue.Value;
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

        private bool IsCodeActivity(Type type)
        {
            if (type?.Name == typeof(CodeActivity)?.Name) return true;
            if (type?.BaseType != null) return IsCodeActivity(type?.BaseType);
            return false;
        }
    }
}
