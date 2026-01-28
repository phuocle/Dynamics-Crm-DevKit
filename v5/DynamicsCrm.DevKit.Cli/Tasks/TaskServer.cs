using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using NuGet.Packaging;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskServer : ITask
    {
        const int PACK = 50;
        private const string SPACE = "  ";
        private readonly Dictionary<string, Assembly> _assemblyCache = new Dictionary<string, Assembly>(StringComparer.OrdinalIgnoreCase);
        private string _currentAssemblyDirectory = null;
        private bool OK { get; set; } = false;
        private bool IS_MANAGED_IDENTITY { get; set; } = false;
        private string ERROR { get; set; } = string.Empty;
        private DynamcisCrmDevKitPluginManagedIdentityAssemblyAttribute ManagedIdentityAttribute { get; set; }
        public bool IsOk { get; set; }
        public Guid SolutionId { get; set; }
        public string SolutionPrefix { get; set; }
        public string CurrentDirectory { get; set; }
        public string TaskType { get; set; }
        public ServiceClient ServiceClient { get; set; }
        public CommandLineArgs Arg { get; set; }
        private JsonServer Json { get; }
        private string CurrentFolder => $"{CurrentDirectory}\\{Json.folder}";
        public TaskServer(CommandLineArgs arg, Json json)
        {
            this.Arg = arg;
            ServiceClient = arg.ServiceClient;
            CurrentDirectory = arg.CurrentDirectory;
            switch (arg.Type)
            {
                case nameof(CliType.servers):
                    Json = json.servers.FirstOrDefault(x => x.profile == arg.Profile);
                    TaskType = $"[{nameof(CliType.servers).ToUpper()}]";
                    break;
                case nameof(CliType.workflows):
                    Json = json.workflows.FirstOrDefault(x => x.profile == arg.Profile);
                    TaskType = $"[{nameof(CliType.workflows).ToUpper()}]";
                    break;
                case nameof(CliType.plugins):
                    Json = json.plugins.FirstOrDefault(x => x.profile == arg.Profile);
                    TaskType = $"[{nameof(CliType.plugins).ToUpper()}]";
                    break;
                case nameof(CliType.dataproviders):
                    Json = json.dataproviders.FirstOrDefault(x => x.profile == arg.Profile);
                    TaskType = $"[{nameof(CliType.dataproviders).ToUpper()}]";
                    break;
            }
        }
        public async Task RunAsync()
        {
            SpectreLog.WriteLine("START");
            if (await IsValidAsync())
            {
                var files = Helper.GetFiles(CurrentFolder, Json.includefiles, Json.excludefiles);
                files.Sort();
                if (files.Count == 0)
                {
                    SpectreLog.ActionError($"Not found any files to deploy. Please double check DynamicsCrm.DevKit.Cli.json section 'servers' with profile: '{Arg.Profile}' again.");
                }
                else
                {
                    if (files.Count > 1)
                    {
                        SpectreLog.WriteLine();
                        SpectreLog.WriteHighLight($"Found: ",$"{files.Count}", " files to deploy.");
                        foreach (var file in files)
                        {
                            SpectreLog.WriteWithLevel(LogLevel.Level1, $"- {Path.GetFileName(file)}");
                        }
                        SpectreLog.WriteLine();
                    }
                    else
                    {
                        SpectreLog.WriteLine();
                    }
                    await LoadAllObjectTypeCodeAsync();
                    await DeployFilesAsync(files);
                }
            }
            //#if DEBUG
            //            SpectreLog.WriteLine();
            //            SpectreLog.WriteWithLevel(LogLevel.Level0, "Total Dataverse Requests COUNT_ExecuteAsync: ", $"{XrmHelper.COUNT_ExecuteAsync}");
            //            SpectreLog.WriteWithLevel(LogLevel.Level0, "Total Dataverse Requests COUNT_RetrieveMultipleAsync: ", $"{XrmHelper.COUNT_RetrieveMultipleAsync}");
            //            SpectreLog.WriteWithLevel(LogLevel.Level0, "Total Dataverse Requests COUNT_CreateAsync: ", $"{XrmHelper.COUNT_CreateAsync}");
            //            SpectreLog.WriteWithLevel(LogLevel.Level0, "Total Dataverse Requests COUNT_DeleteAsync: ", $"{XrmHelper.COUNT_DeleteAsync}");
            //            SpectreLog.WriteWithLevel(LogLevel.Level0, "Total Dataverse Requests COUNT_RetrieveAsync: ", $"{XrmHelper.COUNT_RetrieveAsync}");
            //            SpectreLog.WriteWithLevel(LogLevel.Level0, "Total Dataverse Requests COUNT_UpdateAsync: ", $"{XrmHelper.COUNT_UpdateAsync}");
            //#endif
            SpectreLog.WriteLine();
            SpectreLog.WriteLine("END");
        }
        private async Task DeployFilesAsync(List<string> files)
        {
            foreach (var file in files)
            {
                if (file.EndsWith(".dll"))
                {
                    var fileDll = file;
                    SpectreLog.ActionFile(Path.GetFileName(fileDll));
                    (IS_MANAGED_IDENTITY, ERROR) = IsNeedSignAssembly(fileDll);
                    if (IS_MANAGED_IDENTITY && ERROR.Length == 0)
                    {
                        var signToolPath = FindSignTool();
                        if (signToolPath == null) continue;
                        (OK, ERROR) = await Helper.SignAssemblyAsync(signToolPath, fileDll, Path.Combine(CurrentDirectory, ManagedIdentityAttribute.CertificateFileName), ManagedIdentityAttribute.CertificatePassword);
                        if (!OK)
                        {
                            SpectreLog.ActionError(ERROR);
                            SpectreLog.ActionError($"Assembly {Path.GetFileName(fileDll)} not signed. Assembly deployment stopped.");
                            continue;
                        }
                        else
                        {
                            SpectreLog.ActionWithLevel1(CliAction.SIGNED, "Assembly", Path.GetFileName(file));
                        }
                    }
                    else if (ERROR.Length > 0)
                    {
                        SpectreLog.ActionError(ERROR);
                        SpectreLog.ActionError($"Assembly {Path.GetFileName(fileDll)} not signed. Assembly deployment stopped.");
                        continue;
                    }
                    await DeployDllAsync(fileDll, DeployFileType.Dll);
                }
                else if (file.EndsWith(".nupkg"))
                {
                    var fileNuget = file;
                    SpectreLog.ActionFile(Path.GetFileName(fileNuget));
                    var fileNugetDll = GetDllFileFromNugetPackage(fileNuget);
                    (IS_MANAGED_IDENTITY, ERROR) = IsNeedSignAssembly(fileNugetDll);
                    if (IS_MANAGED_IDENTITY && ERROR.Length == 0)
                    {
                        (OK, ERROR) = await Helper.SignPackageAsync(fileNuget, Path.Combine(CurrentDirectory, ManagedIdentityAttribute.CertificateFileName), ManagedIdentityAttribute.CertificatePassword);
                        if (!OK)
                        {
                            SpectreLog.ActionError(ERROR);
                            SpectreLog.ActionError($"Package {Path.GetFileName(fileNuget)} not signed. Package deployment stopped.");
                            continue;
                        }
                        else
                        {
                            SpectreLog.ActionWithLevel1(CliAction.SIGNED, "Package", Path.GetFileName(file));
                        }
                    }
                    else if (ERROR.Length > 0)
                    {
                        SpectreLog.ActionError(ERROR);
                        SpectreLog.ActionError($"Package {Path.GetFileName(fileNuget)} not signed. Package deployment stopped.");
                        continue;
                    }
                    ERROR = await DeployPackageAsync(fileNuget);
                    if (ERROR.Length > 0)
                    {
                        SpectreLog.ActionError(ERROR);
                        SpectreLog.ActionError($"Package {Path.GetFileName(fileNuget)} not signed. Package deployment stopped.");
                        continue;
                    }
                    await DeployDllAsync(fileNugetDll, DeployFileType.Nuget);
                }
                else
                    SpectreLog.ActionError($"Not support file extension: {new FileInfo(file).Extension}");
            }
        }
        private async Task<string> DeployPackageAsync(string file)
        {
            var packageArchiveReader = new PackageArchiveReader(file);
            byte[] inArray = File.ReadAllBytes(file);
            var newContent = Convert.ToBase64String(inArray);
            var name = $"{SolutionPrefix}{packageArchiveReader.NuspecReader.GetId()}";
            var fetchData = new
            {
                name
            };
            var fetchXml = $@"
<fetch>
  <entity name='pluginpackage'>
    <attribute name='pluginpackageid' />
    <attribute name='managedidentityid' />
    <attribute name='content' />
    <filter type='and'>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
    </filter>
  </entity>
</fetch>";
            XrmHelper.COUNT_RetrieveMultipleAsync++;
            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            Guid PluginPackageId = Guid.Empty;
            if (rows.Entities.Count == 0)
            {
                try
                {
                    var entity = new Entity("pluginpackage");
                    entity["name"] = name;
                    entity["content"] = newContent;
                    entity["version"] = packageArchiveReader.NuspecReader.GetVersion().ToFullString();
                    var request = new CreateRequest { Target = entity };
                    request.Parameters.Add("SolutionUniqueName", Json.solution);
                    XrmHelper.COUNT_ExecuteAsync++;
                    var response = (CreateResponse)await ServiceClient.ExecuteAsync(request);
                    SpectreLog.ActionWithLevel1(CliAction.REGISTERED, "Package", Path.GetFileName(file));
                    PluginPackageId = response.id;
                }
                catch (Exception fe)
                {
                    return fe.Message;
                }
            }
            else
            {
                var entity = rows.Entities[0];
                var oldContent = entity.GetAttributeValue<string>("content");
                if (Helper.IsEqualsContent(oldContent, newContent))
                {
                    SpectreLog.ActionWithLevel1(CliAction.DO_NOTHING, "Package", Path.GetFileName(file));
                }
                else
                {
                    try
                    {
                        var update = new Entity("pluginpackage");
                        update["pluginpackageid"] = entity.Id;
                        update["content"] = newContent;
                        update["version"] = packageArchiveReader.NuspecReader.GetVersion().ToFullString();
                        var request = new UpdateRequest { Target = update };
                        request.Parameters.Add("SolutionUniqueName", Json.solution);
                        XrmHelper.COUNT_ExecuteAsync++;
                        await ServiceClient.ExecuteAsync(request);
                        SpectreLog.ActionWithLevel1(CliAction.UPDATED, "Package", Path.GetFileName(file));
                        PluginPackageId = entity.Id;
                    }
                    catch (Exception fe)
                    {
                        return fe.Message;
                    }
                }
            }
            if (IS_MANAGED_IDENTITY)
            {
                var (managedIdentityId, applicationId) = await DeployManagedIdentityAsync(fetchData.name, Guid.Parse(ManagedIdentityAttribute.TenantId), ManagedIdentityAttribute.ApplicationIds);
                if (rows.Entities.Count == 0)
                {
                    var pluginPackage = new Entity("pluginpackage")
                    {
                        ["pluginpackageid"] = PluginPackageId,
                        ["managedidentityid"] = new EntityReference("managedidentity", managedIdentityId)
                    };
                    var request2 = new UpdateRequest { Target = pluginPackage };
                    request2.Parameters.Add("SolutionUniqueName", Json.solution);
                    SpectreLog.ActionWithLevel1(CliAction.REGISTERED, "Bind", Path.GetFileName(file), $"ApplicationId: {applicationId}");
                    XrmHelper.COUNT_ExecuteAsync++;
                    await ServiceClient.ExecuteAsync(request2);
                }
                else if (rows.Entities[0].GetAttributeValue<EntityReference>("managedidentityid")?.Id == managedIdentityId)
                {
                    SpectreLog.ActionWithLevel1(CliAction.DO_NOTHING, "Bind", Path.GetFileName(file), $"ApplicationId: {applicationId}");
                }
                else
                {
                    var pluginPackage = new Entity("pluginpackage")
                    {
                        ["pluginpackageid"] = PluginPackageId,
                        ["managedidentityid"] = new EntityReference("managedidentity", managedIdentityId)
                    };
                    var request2 = new UpdateRequest { Target = pluginPackage };
                    request2.Parameters.Add("SolutionUniqueName", Json.solution);
                    SpectreLog.ActionWithLevel1(CliAction.UPDATED, "Bind", Path.GetFileName(file), $"ApplicationId: {applicationId}");
                    XrmHelper.COUNT_ExecuteAsync++;
                    await ServiceClient.ExecuteAsync(request2);
                }
            }
            return string.Empty;
        }
        private async Task<Guid?> DeployAssemblyAsync(string file, DeployFileType deployFileType)
        {
            (string name, int value) GetIsolationMode(string file)
            {
                foreach (var list in _AttributesCache)
                {
                    foreach (var attribute in list.Value)
                    {
                        if (attribute.IsolationMode == IsolationModeEnum.None) return ("None", 1);
                        if (attribute.IsolationMode == IsolationModeEnum.Sandbox) return ("Sandbox", 2);
                        if (attribute.IsolationMode == IsolationModeEnum.External) return ("Sandbox", 3);
                    }
                }
                return ("Sandbox", 2);
            }
            (string name, int value) GetSourceType(string file)
            {
                foreach (var list in _AttributesCache)
                {
                    foreach (var attribute in list.Value)
                    {
                        if (attribute.SourceType == SourceTypeEnum.Database) return ("Database", 0);
                        if (attribute.SourceType == SourceTypeEnum.Disk) return ("Disk", 1);
                        if (attribute.SourceType == SourceTypeEnum.Normal) return ("Normal", 2);
                        if (attribute.SourceType == SourceTypeEnum.AzureWebApp) return ("AzureWebApp", 3);
                        if (attribute.SourceType == SourceTypeEnum.FileStore) return ("FileStore", 4);
                    }
                }
                return ("Database", 0);
            }
            var assembly = LoadAssemblyIntoCache(file);
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
    <attribute name='name' />
    <attribute name='content' />
    <attribute name='managedidentityid' />
    <filter type='and'>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
    </filter>
  </entity>
</fetch>";
            XrmHelper.COUNT_RetrieveMultipleAsync++;
            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count > 0 && rows.Entities.Count != 1)
                {
                    SpectreLog.ActionError($"Found more than 1 plugin assembly name {assemblyName}. Assemply deployed, but the deployment of this assembly stopped.");
                    return null;
                }
            }
            var newContent = Convert.ToBase64String(File.ReadAllBytes(file));
            Guid pluginAssemblyId = Guid.NewGuid();
            var plugin = new Entity("pluginassembly")
            {
                ["content"] = newContent,
                ["name"] = assemblyProperties[0],
                ["culture"] = assemblyProperties[4],
                ["version"] = assemblyProperties[2],
                ["publickeytoken"] = assemblyProperties[6],
            };
            var (name_IsolationMode, value_IsolationMode) = GetIsolationMode(file);
            var (name_SourceType, value_SourceType) = GetSourceType(file);
            plugin["sourcetype"] = new OptionSetValue(value_SourceType);
            plugin["isolationmode"] = new OptionSetValue(value_IsolationMode);
            if (rows.Entities.Count == 0)
            {
                var request = new CreateRequest
                {
                    Target = plugin
                };
                request.Parameters.Add("SolutionUniqueName", Json.solution);
                SpectreLog.ActionWithLevel1(CliAction.REGISTERED, "Assembly", assemblyName, new List<string> { name_IsolationMode, name_SourceType });
                XrmHelper.COUNT_ExecuteAsync++;
                var response = (CreateResponse)await ServiceClient.ExecuteAsync(request);
                pluginAssemblyId = response.id;
            }
            else
            {
                var oldContent = rows.Entities[0].GetAttributeValue<string>("content");
                pluginAssemblyId = rows.Entities[0].Id;
                if (Helper.IsEqualsContent(oldContent, newContent))
                {
                    SpectreLog.ActionWithLevel1(CliAction.DO_NOTHING, "Assembly", assemblyName, new List<string> { name_IsolationMode, name_SourceType });
                }
                else
                {
                    plugin["pluginassemblyid"] = pluginAssemblyId;
                    var request = new UpdateRequest
                    {
                        Target = plugin
                    };
                    request.Parameters.Add("SolutionUniqueName", Json.solution);
                    SpectreLog.ActionWithLevel1(CliAction.UPDATED, "Assembly", assemblyName, new List<string> { name_IsolationMode, name_SourceType });
                    try
                    {
                        XrmHelper.COUNT_ExecuteAsync++;
                        await ServiceClient.ExecuteAsync(request);
                    }
                    catch (Exception fe)
                    {
                        SpectreLog.ActionError($"{fe.Message} Assemply deployed, but the deployment of this assembly stopped.");
                        return null;
                    }
                }
            }
            if (IS_MANAGED_IDENTITY && deployFileType == DeployFileType.Dll)
            {
                var (managedIdentityId, applicationId) = await DeployManagedIdentityAsync(assemblyName, Guid.Parse(ManagedIdentityAttribute.TenantId), ManagedIdentityAttribute.ApplicationIds);
                if (rows.Entities.Count == 0)
                {
                    var pluginAssembly = new Entity("pluginassembly")
                    {
                        ["pluginassemblyid"] = pluginAssemblyId,
                        ["managedidentityid"] = new EntityReference("managedidentity", managedIdentityId)
                    };
                    var request2 = new UpdateRequest { Target = pluginAssembly };
                    request2.Parameters.Add("SolutionUniqueName", Json.solution);
                    SpectreLog.ActionWithLevel1(CliAction.REGISTERED, "Bind", assemblyName, $"ApplicationId: {applicationId}");
                    XrmHelper.COUNT_ExecuteAsync++;
                    await ServiceClient.ExecuteAsync(request2);
                }
                else if (rows.Entities[0].GetAttributeValue<EntityReference>("managedidentityid")?.Id == managedIdentityId)
                {
                    SpectreLog.ActionWithLevel1(CliAction.DO_NOTHING, "Bind", assemblyName, $"ApplicationId: {applicationId}");
                }
                else
                {
                    var pluginAssembly = new Entity("pluginassembly")
                    {
                        ["pluginassemblyid"] = pluginAssemblyId,
                        ["managedidentityid"] = new EntityReference("managedidentity", managedIdentityId)
                    };
                    var request2 = new UpdateRequest { Target = pluginAssembly };
                    request2.Parameters.Add("SolutionUniqueName", Json.solution);
                    SpectreLog.ActionWithLevel1(CliAction.UPDATED, "Bind", assemblyName, $"ApplicationId: {applicationId}");
                    XrmHelper.COUNT_ExecuteAsync++;
                    await ServiceClient.ExecuteAsync(request2);
                }
            }
            return pluginAssemblyId;
        }
        private (bool needSign, string error) IsNeedSignAssembly(string file)
        {
            var assembly = LoadAssemblyIntoCache(file);
            ManagedIdentityAttribute = GetDynamcisCrmDevKitPluginManagedIdentityAssemblyAttribute(assembly);
            if (ManagedIdentityAttribute == null) return (false, string.Empty);
            if (string.IsNullOrEmpty(ManagedIdentityAttribute.TenantId))
            {
                return (false, $"Not found TenantId value from {nameof(DynamcisCrmDevKitPluginManagedIdentityAssemblyAttribute)}");
            }
            if (string.IsNullOrEmpty(ManagedIdentityAttribute.ApplicationIds))
            {
                return (false, $"Not found ApplicationId value from {nameof(DynamcisCrmDevKitPluginManagedIdentityAssemblyAttribute)}");
            }
            if (string.IsNullOrEmpty(ManagedIdentityAttribute.CertificateFileName))
            {
                return (false, $"Not found CertificateFile value from {nameof(DynamcisCrmDevKitPluginManagedIdentityAssemblyAttribute)}");
            }
            if (!ManagedIdentityAttribute.CertificateFileName.EndsWith(".pfx"))
            {
                return (false, $"CertificateFile value should ends with '.pfx' from {nameof(DynamcisCrmDevKitPluginManagedIdentityAssemblyAttribute)}");
            }
            var certificateFile = Path.Combine(CurrentDirectory, ManagedIdentityAttribute.CertificateFileName);
            if (!File.Exists(certificateFile))
            {
                return (false, $"CertificateFile not exist: {certificateFile}");
            }
            return (true, string.Empty);
        }
        private string FindSignTool()
        {
            var tool = Helper.FindSignTool();
            if (tool != null) return tool;
            SpectreLog.WriteLine();
            SpectreLog.WriteWithLevel(LogLevel.Level0, "To sign assemblies, you need to install Windows SDK:");
            SpectreLog.WriteLine();
            SpectreLog.WriteWithLevel(LogLevel.Level0, "Option 1: Install Windows 10/11 SDK (Recommended)");
            SpectreLog.WriteWithLevel(LogLevel.Level1, "Download: ", "https://developer.microsoft.com/en-us/windows/downloads/windows-sdk/");
            SpectreLog.WriteWithLevel(LogLevel.Level1, "During installation, select: ", "'Windows SDK Signing Tools for Desktop Apps'");
            SpectreLog.WriteLine();
            SpectreLog.WriteWithLevel(LogLevel.Level0, "Option 2: Install via Visual Studio Installer");
            SpectreLog.WriteWithLevel(LogLevel.Level1, "1. Open Visual Studio Installer");
            SpectreLog.WriteWithLevel(LogLevel.Level1, "2. Click 'Modify' on your Visual Studio installation");
            SpectreLog.WriteWithLevel(LogLevel.Level1, "3. Go to 'Individual Components' tab");
            SpectreLog.WriteWithLevel(LogLevel.Level1, "4. Search for and select: ", "'Windows 10 SDK' or 'Windows 11 SDK'");
            SpectreLog.WriteWithLevel(LogLevel.Level1, "5. Click 'Modify' to install");
            SpectreLog.WriteLine();
            SpectreLog.WriteWithLevel(LogLevel.Level0, "Option 3: Install via Chocolatey (Package Manager)");
            SpectreLog.WriteWithLevel(LogLevel.Level1, "Run: ", "choco install windows-sdk-10.0");
            SpectreLog.WriteLine();
            SpectreLog.WriteWithLevel(LogLevel.Level0, "After installation, SignTool.exe will be located at:");
            SpectreLog.WriteWithLevel(LogLevel.Level1, "C:\\Program Files (x86)\\Windows Kits\\10\\bin\\{version}\\x64\\signtool.exe");
            return tool;
        }
        private async Task<(Guid ManagedIdentityId, Guid ApplicationId)> DeployManagedIdentityAsync(string assemblyName, Guid TenantId, string ApplicationIds)
        {
            var AppIds = ApplicationIds.Contains(";") ? ApplicationIds.Split(";".ToCharArray()) : ApplicationIds.Split(",".ToCharArray());
            var isDevApplication = true;
            Guid? _ManagedIdentityId = null;
            Guid? _ApplicationId = null;
            foreach (var AppId in AppIds)
            {
                var fetchXml = $@"
<fetch>
  <entity name='managedidentity'>
    <all-attributes />
    <filter type='and'>
      <condition attribute='applicationid' operator='eq' value='{AppId}'/>
      <condition attribute='tenantid' operator='eq' value='{TenantId}'/>
    </filter>
  </entity>
</fetch>";

                XrmHelper.COUNT_RetrieveMultipleAsync++;
                var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
                var managedIdentity = new Entity("managedidentity")
                {
                    ["tenantid"] = TenantId,
                    ["applicationid"] = Guid.Parse(AppId),
                    ["credentialsource"] = new OptionSetValue(2),
                    ["subjectscope"] = new OptionSetValue(1),
                    ["managedidentityid"] = Guid.NewGuid(),
                    ["name"] = $"{assemblyName}-{AppId.ToString().ToUpper()}"
                };
                if (rows.Entities.Count == 0)
                {
                    var request = new CreateRequest { Target = managedIdentity };
                    request.Parameters.Add("SolutionUniqueName", Json.solution);
                    SpectreLog.ActionWithLevel1(CliAction.REGISTERED, "Managed Identity App", AppId);
                    XrmHelper.COUNT_ExecuteAsync++;
                    var response = (CreateResponse)await ServiceClient.ExecuteAsync(request);
                    if (isDevApplication && _ManagedIdentityId == null && _ApplicationId == null)
                    {
                        _ManagedIdentityId = response.id;
                        _ApplicationId = Guid.Parse(AppId);
                        isDevApplication = false;
                    }
                }
                else
                {
                    SpectreLog.ActionWithLevel1(CliAction.DO_NOTHING, "Managed Identity App", AppId);
                    if (isDevApplication && _ManagedIdentityId == null && _ApplicationId == null)
                    {
                        _ManagedIdentityId = rows.Entities[0].Id;
                        _ApplicationId = Guid.Parse(AppId);
                        isDevApplication = false;
                    }
                }
            }
            return (_ManagedIdentityId.Value, _ApplicationId.Value);
        }
        private DynamcisCrmDevKitPluginManagedIdentityAssemblyAttribute GetDynamcisCrmDevKitPluginManagedIdentityAssemblyAttribute(Assembly assembly)
        {
            var attributeData = CustomAttributeData.GetCustomAttributes(assembly)
                .Where(data => data.AttributeType.FullName.Contains(nameof(DynamcisCrmDevKitPluginManagedIdentityAssemblyAttribute)))
                .FirstOrDefault();
            if (attributeData == null) return null;
            var attribute = new DynamcisCrmDevKitPluginManagedIdentityAssemblyAttribute();
            var properties = typeof(DynamcisCrmDevKitPluginManagedIdentityAssemblyAttribute).GetProperties();
            foreach (var namedArgument in attributeData.NamedArguments)
            {
                string propertyName = namedArgument.MemberName;
                object rawValue = namedArgument.TypedValue.Value;
                var targetProperty = properties.FirstOrDefault(p => p.Name == propertyName);

                if (targetProperty != null)
                {
                    object finalValue = rawValue;
                    if (targetProperty.PropertyType.IsGenericType && targetProperty.PropertyType.GetGenericTypeDefinition() == typeof(Nullable<>))
                    {
                        Type underlyingType = Nullable.GetUnderlyingType(targetProperty.PropertyType);
                        if (underlyingType != null && underlyingType.IsEnum)
                        {
                            finalValue = Enum.ToObject(underlyingType, rawValue);
                        }
                    }
                    else if (targetProperty.PropertyType.IsEnum)
                    {
                        finalValue = Enum.ToObject(targetProperty.PropertyType, rawValue);
                    }
                    targetProperty.SetValue(attribute, finalValue);
                }
            }
            return attribute;
        }
        public async Task<bool> IsValidAsync()
        {
            if (Json == null)
            {
                SpectreLog.ActionError($"{TaskType} 'profile' not found: '{Arg.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.folder == "???" || (Json.folder != null && Json?.folder?.Trim().Length == 0))
            {
                SpectreLog.ActionError($"{TaskType} 'folder' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.solution == "???" || (Json.solution != null && Json?.solution?.Trim().Length == 0))
            {
                SpectreLog.ActionError($"{TaskType} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            (IsOk, SolutionId, SolutionPrefix) = await XrmHelper.IsExistSolutionAsync(ServiceClient, Json.solution);
            if (!IsOk)
            {
                SpectreLog.ActionError($"{TaskType} solution '{Json.solution}' not exist");
                return false;
            }
            return true;
        }
        private string GetDllFileFromNugetPackage(string file)
        {
            var tempFile = Path.Combine(Path.GetTempPath(), Path.GetFileName(file));
            Helper.TryDeleteFile(tempFile);
            File.Copy(file, tempFile);
            using PackageArchiveReader packageArchiveReader = new(tempFile);
            var folder = $"{CurrentFolder}\\DynamicsCrm.DevKit.Cli.Temp";
            Helper.TryDeleteDirectory(folder);
            ExtractZip(packageArchiveReader, folder);
            var currentDllFiles = Directory.GetFiles(CurrentFolder, "*.dll", SearchOption.AllDirectories);
            foreach (var dllFile in currentDllFiles)
            {
                var destFile = Path.Combine(folder, Path.GetFileName(dllFile));
                if (!File.Exists(destFile))
                {
                    File.Copy(dllFile, destFile);
                }
            }
            var files = Directory.GetFiles(folder).ToList();
            var fileNameWithoutExtention = Path.GetFileNameWithoutExtension(file);
            var nugetVerion = packageArchiveReader.NuspecReader.GetVersion().ToFullString();
            fileNameWithoutExtention = fileNameWithoutExtention.Substring(0, fileNameWithoutExtention.Length - nugetVerion.Length);
            var returnFiles = files.Where(x => x.Contains(fileNameWithoutExtention)).ToList();
            if (returnFiles.Count == 1)
            {
                var returnFile = returnFiles.First();
                foreach (var _file in files)
                {
                    if (_file == returnFile) continue;
                    LoadAssemblyIntoCache(_file);
                }
                LoadAssemblyIntoCache(returnFile);
                return returnFile;
            }
            return string.Empty;
        }
        private async Task DeployDllAsync(string file, DeployFileType deployFileType = DeployFileType.Dll)
        {
            var types = GetTypes(file);
            if (!await IsValidTypesAsync(file, types, deployFileType)) return;
            await DeployFileAsync(file, types, deployFileType);
        }
        private readonly List<KeyValuePair<string, int>> _ObjectTypeCodesCache = new List<KeyValuePair<string, int>>();
        private readonly List<KeyValuePair<string, Entity>> _PluginTypesCache = new List<KeyValuePair<string, Entity>>();
        private readonly List<KeyValuePair<string, Entity>> _PluginStepsCache = new List<KeyValuePair<string, Entity>>();
        private readonly List<KeyValuePair<string, Entity>> _PluginImagesCache = new List<KeyValuePair<string, Entity>>();
        private readonly List<KeyValuePair<string, Entity>> _SecureEntitiesCache = new List<KeyValuePair<string, Entity>>();
        private readonly List<KeyValuePair<string, Entity>> _CustomApisCache = new List<KeyValuePair<string, Entity>>();
        private readonly List<KeyValuePair<string, EntityReference>> _SdkMessagesCache = new List<KeyValuePair<string, EntityReference>>();
        private readonly List<KeyValuePair<string, EntityReference>> _SdkMessageFiltersCache = new List<KeyValuePair<string, EntityReference>>();
        private readonly List<KeyValuePair<string, List<CrmPluginRegistrationAttribute>>> _AttributesCache = new List<KeyValuePair<string, List<CrmPluginRegistrationAttribute>>>();
        private async Task LoadAllPluginTypesAsync()
        {
            _PluginTypesCache.Clear();
            var batches = (int)Math.Ceiling((double)_AttributesCache.Count / PACK);
            for (int i = 0; i < batches; i++)
            {
                var batchTypes = _AttributesCache.Skip(i * PACK).Take(PACK).ToList();
                var condition = string.Empty;
                foreach (var type in batchTypes)
                    condition += $"<condition attribute='typename' operator='eq' value='{type.Key}'/>";
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
    <filter type='or'>{condition}</filter>
  </entity>
</fetch>";

                var rows = await XrmHelper.RetrieveAllRecordsByFetchXmlAsync(ServiceClient, fetchXml);
                foreach (var entity in rows)
                {
                    var typename = entity.GetAttributeValue<string>("typename");
                    _PluginTypesCache.Add(new KeyValuePair<string, Entity>(typename, entity));
                }
            }
        }
        private async Task LoadAllPluginStepsAsync()
        {
            _PluginStepsCache.Clear();
            var batches = (int)Math.Ceiling((double)_PluginTypesCache.Count / PACK);
            for (int i = 0; i < batches; i++)
            {
                var entities = _PluginTypesCache.Skip(i * PACK).Take(PACK).ToList();
                var condition = string.Empty;
                foreach (var entity in entities)
                    condition += $"<condition attribute='plugintypeid' operator='eq' value='{entity.Value.GetAttributeValue<Guid>("plugintypeid")}'/>";
                var fetchXml = $@"
<fetch>
    <entity name='sdkmessageprocessingstep'>
        <all-attributes />
        <filter type='or'>{condition}</filter>
    </entity>
</fetch>";
                var rows = await XrmHelper.RetrieveAllRecordsByFetchXmlAsync(ServiceClient, fetchXml);
                foreach (var entity in rows)
                {
                    var plugintypeid = entity.GetAttributeValue<EntityReference>("plugintypeid").Id;
                    var name = entity.GetAttributeValue<string>("name");
                    var key = $"{plugintypeid}-{name}";
                    _PluginStepsCache.Add(new KeyValuePair<string, Entity>(key, entity));
                }
            }
        }
        private async Task LoadAllPluginImagesAsync()
        {
            _PluginImagesCache.Clear();
            var totalBatches = (int)Math.Ceiling((double)_PluginStepsCache.Count / PACK);
            for (int i = 0; i < totalBatches; i++)
            {
                var entities = _PluginStepsCache.Skip(i * PACK).Take(PACK).ToList();
                var condition = string.Empty;
                foreach (var entity in entities)
                    condition += $"<condition attribute='sdkmessageprocessingstepid' operator='eq' value='{entity.Value.GetAttributeValue<Guid>("sdkmessageprocessingstepid")}'/>";
                var fetchXml = $@"
<fetch>
    <entity name='sdkmessageprocessingstepimage'>
        <attribute name='sdkmessageprocessingstepimageid' />
        <attribute name='name' />
        <attribute name='entityalias' />
        <attribute name='attributes' />
        <attribute name='imagetype' />
        <attribute name='sdkmessageprocessingstepid' />
        <filter type='or'>{condition}</filter>
    </entity>
</fetch>";
                var rows = await XrmHelper.RetrieveAllRecordsByFetchXmlAsync(ServiceClient, fetchXml);
                foreach (var entity in rows)
                {
                    var sdkmessageprocessingstepid = entity.GetAttributeValue<EntityReference>("sdkmessageprocessingstepid").Id;
                    var name = entity.GetAttributeValue<string>("name");
                    var imageType = entity.GetAttributeValue<OptionSetValue>("imagetype");
                    var key = $"{sdkmessageprocessingstepid}-{name}-{imageType.Value}";
                    _PluginImagesCache.Add(new KeyValuePair<string, Entity>(key, entity));
                }
            }
        }
        private async Task LoadAllSecureEntitiesAsync()
        {
            _SecureEntitiesCache.Clear();
            var totalBatches = (int)Math.Ceiling((double)_PluginStepsCache.Count / PACK);
            for (int i = 0; i < totalBatches; i++)
            {
                var entities = _PluginStepsCache.Skip(i * PACK).Take(PACK).ToList();
                var condition = string.Empty;
                foreach (var entity in entities)
                    condition += $"<condition attribute='sdkmessageprocessingstepid' operator='eq' value='{entity.Value.GetAttributeValue<Guid>("sdkmessageprocessingstepid")}'/>";
                var fetchXml = $@"
<fetch>
  <entity name='sdkmessageprocessingstep'>
    <attribute name='name' />
    <attribute name='sdkmessageprocessingstepid' />
    <filter type='or'>{condition}</filter>
    <link-entity name='sdkmessageprocessingstepsecureconfig' from='sdkmessageprocessingstepsecureconfigid' to='sdkmessageprocessingstepsecureconfigid' link-type='inner' alias='s'>
      <attribute name='secureconfig' />
      <attribute name='sdkmessageprocessingstepsecureconfigid' />
    </link-entity>
  </entity>
</fetch>";
                var rows = await XrmHelper.RetrieveAllRecordsByFetchXmlAsync(ServiceClient, fetchXml);
                foreach (var entity in rows)
                {
                    var sdkmessageprocessingstepid = entity.GetAttributeValue<Guid>("sdkmessageprocessingstepid");
                    var key = $"{sdkmessageprocessingstepid}";
                    _SecureEntitiesCache.Add(new KeyValuePair<string, Entity>(key, entity));
                }
            }
        }
        private async Task LoadAllObjectTypeCodeAsync()
        {
            await XrmHelper.ReadEntitiesMetadataAsync(ServiceClient, Microsoft.Xrm.Sdk.Metadata.EntityFilters.Entity);
            _ObjectTypeCodesCache.Clear();
            foreach(var item in XrmHelper.EntitiesMetadata)
            {
                if (item.ObjectTypeCode != null) _ObjectTypeCodesCache.Add(new KeyValuePair<string, int>(item.LogicalName, item.ObjectTypeCode.Value));
            }
        }
        private async Task LoadAll_SdkMessages_SdkMessageFilters_Async()
        {
            _SdkMessagesCache.Clear();
            _SdkMessageFiltersCache.Clear();
            var uniqueMessageCombinations = new HashSet<(string entityLogicalName, string message)>();
            foreach (var list in _AttributesCache)
            {
                foreach (var attribute in list.Value)
                {
                    if (!string.IsNullOrEmpty(attribute.Message) && !string.IsNullOrEmpty(attribute.EntityLogicalName))
                    {
                        uniqueMessageCombinations.Add((attribute.EntityLogicalName, attribute.Message));
                    }
                }
            }
            var messageList = uniqueMessageCombinations.ToList();
            var messageBatches = (int)Math.Ceiling((double)messageList.Count / PACK);
            for (int i = 0; i < messageBatches; i++)
            {
                var batch = messageList.Skip(i * PACK).Take(PACK).ToList();
                var conditionNone = string.Empty;
                var condition = string.Empty;
                var condition2 = string.Empty;
                foreach (var (entityLogicalName, message) in batch)
                {
                    if (entityLogicalName == "none")
                    {
                        var check = $"<condition attribute='name' operator='eq' value='{message}'/>";
                        if (!conditionNone.Contains(check)) conditionNone += check;
                    }
                    else
                    {
                        var check = $"<condition attribute='primaryobjecttypecode' operator='eq' value='{GetObjectTypeCode(entityLogicalName)}'/>";
                        if (!condition.Contains(check)) condition += check;
                        var check2 = $"<condition attribute='name' operator='eq' value='{message}'/>";
                        if (!condition2.Contains(check2)) condition2 += check2;
                    }
                }
                if (conditionNone.Length > 0)
                {
                    var fetchXml = $@"
<fetch>
  <entity name='sdkmessage'>
    <attribute name='sdkmessageid' />
    <attribute name='name' />
    <filter type='or'>{conditionNone}</filter>
  </entity>
</fetch>";
                    var rows = await XrmHelper.RetrieveAllRecordsByFetchXmlAsync(ServiceClient, fetchXml);
                    foreach (var entity in rows)
                    {
                        var key = $"none-{entity.GetAttributeValue<string>("name")}";
                        var er = new EntityReference("sdkmessage", entity.GetAttributeValue<Guid>("sdkmessageid"));
                        if (!_SdkMessagesCache.Contains(new KeyValuePair<string, EntityReference>(key, er)))
                            _SdkMessagesCache.Add(new KeyValuePair<string, EntityReference>(key, er));
                    }
                }

                if (condition.Length > 0)
                {
                    var fetchXml = $@"
<fetch>
  <entity name='sdkmessage'>4
    <attribute name='sdkmessageid' />
    <attribute name='name' />
    <link-entity name='sdkmessagefilter' from='sdkmessageid' to='sdkmessageid' link-type='inner' alias='s'>
      <attribute name='primaryobjecttypecode' />
      <filter type='or'>{condition}</filter>
    </link-entity>
  </entity>
</fetch>";
                    var rows = await XrmHelper.RetrieveAllRecordsByFetchXmlAsync(ServiceClient, fetchXml);
                    foreach (var entity in rows)
                    {
                        var Aliased = entity.GetAttributeValue<AliasedValue>("s.primaryobjecttypecode");
                        var key = $"{Aliased.Value}-{entity.GetAttributeValue<string>("name")}";
                        var er = new EntityReference("sdkmessage", entity.GetAttributeValue<Guid>("sdkmessageid"));
                        if (!_SdkMessagesCache.Contains(new KeyValuePair<string, EntityReference>(key, er)))
                            _SdkMessagesCache.Add(new KeyValuePair<string, EntityReference>(key, er));
                    }
                    var fetchXml2 = $@"
<fetch>
  <entity name='sdkmessagefilter'>
    <attribute name='sdkmessagefilterid' />
    <attribute name='primaryobjecttypecode' />
    <filter type='or'>{condition}</filter>
    <link-entity name='sdkmessage' from='sdkmessageid' to='sdkmessageid' link-type='inner' alias='s'>
      <attribute name='name' />
      <filter type='or'>{condition2}</filter>
    </link-entity>
  </entity>
</fetch>";
                    var rows2 = await XrmHelper.RetrieveAllRecordsByFetchXmlAsync(ServiceClient, fetchXml2);
                    foreach (var entity in rows2)
                    {
                        var Aliased = entity.GetAttributeValue<AliasedValue>("s.name");
                        var key = $"{entity.GetAttributeValue<string>("primaryobjecttypecode")}-{Aliased.Value}";
                        var er = new EntityReference("sdkmessagefilter", entity.GetAttributeValue<Guid>("sdkmessagefilterid"));
                        if (!_SdkMessageFiltersCache.Contains(new KeyValuePair<string, EntityReference>(key, er)))
                            _SdkMessageFiltersCache.Add(new KeyValuePair<string, EntityReference>(key, er));
                    }
                }
            }
        }
        private async Task LoadAllCustomApisAsync()
        {
            _CustomApisCache.Clear();
            var customApiMessages = _AttributesCache
                .SelectMany(x => x.Value)
                .Where(x => x.PluginType == PluginType.CustomApi)
                .Select(x => x.Message)
                .Where(x => !string.IsNullOrEmpty(x))
                .Distinct()
                .ToList();
            var messageBatches = (int)Math.Ceiling((double)customApiMessages.Count / PACK);
            for (int i = 0; i < messageBatches; i++)
            {
                var messages = customApiMessages.Skip(i * PACK).Take(PACK).ToList();
                var condition = string.Empty;
                foreach (var message in messages)
                {
                    var check = $"<condition attribute='uniquename' operator='eq' value='{message}'/>";
                    if (!condition.Contains(check)) condition += check;
                }
                var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
    <entity name='customapi'>
        <attribute name='customapiid'/>
        <attribute name='uniquename'/>
        <attribute name='plugintypeid'/>
        <filter type='or'>{condition}</filter>
    </entity>
</fetch>
";
                var rows = await XrmHelper.RetrieveAllRecordsByFetchXmlAsync(ServiceClient, fetchXml);
                foreach (var entity in rows)
                {
                    var key = $"{entity.GetAttributeValue<string>("uniquename")}";
                    _CustomApisCache.Add(new KeyValuePair<string, Entity>(key, entity));
                }
            }
        }
        private async Task DeployFileAsync(string file, List<TypeInfo> types, DeployFileType deployFileType)
        {
            if (!Arg.OnlyUpdateAssembly)
            {
                await LoadAllPluginTypesAsync();
                await LoadAllPluginStepsAsync();
                await LoadAllPluginImagesAsync();
                await LoadAllSecureEntitiesAsync();
                await LoadAll_SdkMessages_SdkMessageFilters_Async();
                await LoadAllCustomApisAsync();
            }
            var dataProviderEvents = new List<DataProviderEvent>();
            var pluginAssemblyId = await DeployAssemblyAsync(file, deployFileType);
            if (pluginAssemblyId == null) return;
            if (Arg.OnlyUpdateAssembly)
            {
                SpectreLog.ActionWithLevel1(CliAction.FLAG, "OnlyUpdateAssembly", "true");
                return;
            }
            var sortedTypes = types.OrderBy(type =>
            {
                var attributes = _AttributesCache.FirstOrDefault(x => x.Key == type.FullName).Value;
                if (attributes == null || attributes.Count == 0) return int.MaxValue;
                var pluginType = attributes[0].PluginType;
                return pluginType switch
                {
                    PluginType.Plugin => 0,
                    PluginType.CustomAction => 1,
                    PluginType.CustomApi => 2,
                    PluginType.Workflow => 3,
                    PluginType.DataProvider => 4,
                    _ => int.MaxValue
                };
            }).ThenBy(type =>
            {
                var attributes = _AttributesCache.FirstOrDefault(x => x.Key == type.FullName).Value;
                return attributes != null && attributes.Count > 0 ? attributes[0].Name : type.FullName;
            }).ToList();


            foreach (var type in sortedTypes)
            {
                var attributes = _AttributesCache.FirstOrDefault(x => x.Key == type.FullName).Value;
                if (attributes[0].Unregister)
                {
                    var error = await UnregisterPluginTypeAsync(pluginAssemblyId.Value, type, attributes[0], deployFileType);
                    if (error == null)
                    {
                        SpectreLog.ActionWithLevel2(CliAction.DO_NOTHING, CliAction.UNREGISTERED.Trim(), attributes[0].PluginType.ToString(), type.FullName);
                        continue;
                    }
                    else if (error == true)
                    {
                        SpectreLog.ActionWithLevel2(CliAction.UPDATED, CliAction.UNREGISTERED.Trim(), attributes[0].PluginType.ToString(), type.FullName);
                        continue;
                    }
                    else
                    {
                        return;
                    }
                }
                var pluginTypeId = await DeployPluginTypeAsync(pluginAssemblyId.Value, type, attributes[0], deployFileType);
                if (pluginTypeId == null) return;
                if (IsWorkflowType(type)) continue;
                foreach (var attribute in attributes)
                {
                    switch (attribute.PluginType)
                    {
                        case PluginType.Plugin:
                        case PluginType.CustomAction:
                            var pluginStepId = await DeployPluginStepAsync(pluginTypeId.Value, type, attribute);
                            if (pluginStepId == null) return;
                            if (attribute.PluginType == PluginType.Plugin && HasPluginImage(attribute))
                            {
                                if (Helper.IsSupportPluginImage(attribute))
                                {
                                    var pluginImageId = await DeployPluginImageAsync(pluginStepId.Value, attribute);
                                    if (pluginImageId == null) return;
                                }
                                else
                                {
                                    SpectreLog.ActionError($"The message {attribute.Message} of {attribute.Name} not support Image. Assemply deployed, but the deployment of this assembly stopped.");
                                    return;
                                }
                            }
                            break;
                        case PluginType.DataProvider:
                            dataProviderEvents.Add(new DataProviderEvent
                            {
                                PluginTypeId = pluginTypeId.Value,
                                Message = attribute.Message,
                                DataSource = attribute.DataSource
                            });
                            SpectreLog.ActionWithLevel3(CliAction.DO_NOTHING, $"{attribute.Message}", attribute.Name, new List<string> { "MainOperation", "Synchronous" });
                            break;
                        case PluginType.CustomApi:
                            await DeployCustomApiStepAsync(pluginTypeId.Value, type.FullName, attribute);
                            break;
                        default:
                            break;
                    }
                }
            }
            if (dataProviderEvents.Count > 0)
            {
                var dataSources = from dataProviderEvent in dataProviderEvents
                                  group dataProviderEvent by dataProviderEvent.DataSource into @group
                                  select new { DataSource = @group.Key };
                foreach (var dataSource in dataSources)
                {
                    if (dataSource.DataSource == null) continue;
                    if (await IsValidDataProviderAsync(dataProviderEvents, dataSource.DataSource))
                    {
                        await RegisterDataProviderAsync(dataProviderEvents, dataSource.DataSource);
                    }
                }
            }
        }
        private async Task<bool> IsValidDataProviderAsync(List<DataProviderEvent> dataProviderEvents, string dataSource)
        {
            var checkDataSource = dataSource.ToLower().StartsWith(SolutionPrefix.ToLower()) ? dataSource : $"{SolutionPrefix?.ToLower()}{dataSource}";
            if (!await XrmHelper.IsExistDataSourceAsync(ServiceClient, $"{checkDataSource}"))
            {
                SpectreLog.ActionError($"DataSource {dataSource} with prefix {SolutionPrefix.ToLower()} not exist ({checkDataSource}). Assemply deployed, but the deployment of this assembly stopped.");
                return false;
            }
            var countRetrieve = dataProviderEvents.Count(x => x.Message == "Retrieve" && x.DataSource == dataSource);
            if (countRetrieve != 0 && countRetrieve != 1)
            {
                SpectreLog.ActionError($"Multiple message Retrieve found with data source {dataSource} ({checkDataSource}). Assemply deployed, but the deployment of this assembly stopped.");
                return false;
            }
            var countRetrieveMultiple = dataProviderEvents.Count(x => x.Message == "RetrieveMultiple" && x.DataSource == dataSource);
            if (countRetrieveMultiple != 0 && countRetrieveMultiple != 1)
            {
                SpectreLog.ActionError($"Multiple message RetrieveMultiple found with data source {dataSource} ({checkDataSource}). Assemply deployed, but the deployment of this assembly stopped.");
                return false;
            }
            if (await XrmHelper.IsVirtualTableSupportCRUDAsync(ServiceClient))
            {
                var countCreate = dataProviderEvents.Count(x => x.Message == "Create" && x.DataSource == dataSource);
                if (countCreate != 0 && countCreate != 1)
                {
                    SpectreLog.ActionError($"Multiple message Create found with data source {dataSource} ({checkDataSource}). Assemply deployed, but the deployment of this assembly stopped.");
                    return false;
                }
                var countUpdate = dataProviderEvents.Count(x => Helper.IsMessageUpdate(x.Message) && x.DataSource == dataSource);
                if (countUpdate != 0 && countUpdate != 1)
                {
                    SpectreLog.ActionError($"Multiple message Update found with data source {dataSource} ({checkDataSource}). Assemply deployed, but the deployment of this assembly stopped.");
                    return false;
                }
                var countDelete = dataProviderEvents.Count(x => x.Message == "Delete" && x.DataSource == dataSource);
                if (countDelete != 0 && countDelete != 1)
                {
                    SpectreLog.ActionError($"Multiple message Delete found with data source {dataSource} ({checkDataSource}). Assemply deployed, but the deployment of this assembly stopped.");
                    return false;
                }
            }
            return true;
        }
        private async Task RegisterDataProviderAsync(List<DataProviderEvent> dataProviderEvents, string dataSource)
        {
            var events = string.Empty;
            var logicalNameDataSource = dataSource.ToLower().StartsWith(SolutionPrefix.ToLower()) ? dataSource.ToLower() : $"{SolutionPrefix?.ToLower()}{dataSource}".ToLower();
            var entity = new Entity("entitydataprovider");
            entity.Attributes.Add("name", logicalNameDataSource);
            entity.Attributes.Add("datasourcelogicalname", logicalNameDataSource);
            entity.Attributes.Add("solutionid", SolutionId);
            var retrieve = dataProviderEvents.Where(x => x.Message == "Retrieve" && x.DataSource == dataSource).FirstOrDefault();
            if (retrieve == null)
                entity.Attributes.Add("retrieveplugin", new Guid("{c1919979-0021-4f11-a587-a8f904bdfdf9}"));
            else
            {
                entity.Attributes.Add("retrieveplugin", retrieve.PluginTypeId);
                events += "Retrieve, ";
            }
            var retrievemultiple = dataProviderEvents.Where(x => x.Message == "RetrieveMultiple" && x.DataSource == dataSource).FirstOrDefault();
            if (retrievemultiple == null)
                entity.Attributes.Add("retrievemultipleplugin", new Guid("{c1919979-0021-4f11-a587-a8f904bdfdf9}"));
            else
            {
                entity.Attributes.Add("retrievemultipleplugin", retrievemultiple.PluginTypeId);
                events += "RetrieveMultiple, ";
            }
            if (await XrmHelper.IsVirtualTableSupportCRUDAsync(ServiceClient))
            {
                var create = dataProviderEvents.Where(x => x.Message == "Create" && x.DataSource == dataSource).FirstOrDefault();
                if (create == null)
                    entity.Attributes.Add("createplugin", new Guid("{c1919979-0021-4f11-a587-a8f904bdfdf9}"));
                else
                {
                    entity.Attributes.Add("createplugin", create.PluginTypeId);
                    events += "Create, ";
                }
                var update = dataProviderEvents.Where(x => Helper.IsMessageUpdate(x.Message) && x.DataSource == dataSource).FirstOrDefault();
                if (update == null)
                    entity.Attributes.Add("updateplugin", new Guid("{c1919979-0021-4f11-a587-a8f904bdfdf9}"));
                else
                {
                    entity.Attributes.Add("updateplugin", update.PluginTypeId);
                    events += "Update, ";
                }
                var delete = dataProviderEvents.Where(x => x.Message == "Delete" && x.DataSource == dataSource).FirstOrDefault();
                if (delete == null)
                    entity.Attributes.Add("deleteplugin", new Guid("{c1919979-0021-4f11-a587-a8f904bdfdf9}"));
                else
                {
                    entity.Attributes.Add("deleteplugin", delete.PluginTypeId);
                    events += "Delete, ";
                }
            }
            events = events.TrimEnd(", ".ToCharArray());
            events = string.Join(", ", events.Split(",".ToCharArray()).Select(x => x.Trim()).OrderBy(x => x)).Trim();
            var entityDataProvider = await XrmHelper.GetEntityDataProviderIdAsync(ServiceClient, logicalNameDataSource);
            if (entityDataProvider == null)
            {
                var request = new CreateRequest();
                request.Parameters ??= [];
                request.Target = entity;
                request.Parameters.Add("SuppressDuplicateDetection", true);
                request.Parameters.Add("SolutionUniqueName", Json.solution);
                SpectreLog.ActionWithLevel2(CliAction.REGISTERED, PluginType.DataSource.ToString(), logicalNameDataSource, events.Split(",".ToCharArray()).ToList().Select(x => x.Trim()).ToList());
                XrmHelper.COUNT_ExecuteAsync++;
                await ServiceClient.ExecuteAsync(request);
            }
            else
            {
                var entitydataproviderid = entityDataProvider.GetAttributeValue<Guid?>("entitydataproviderid");
                var retrieveplugin = entityDataProvider.GetAttributeValue<Guid?>("retrieveplugin");
                var retrievemultipleplugin = entityDataProvider.GetAttributeValue<Guid?>("retrievemultipleplugin");
                var createplugin = entityDataProvider.GetAttributeValue<Guid?>("createplugin");
                var deleteplugin = entityDataProvider.GetAttributeValue<Guid?>("deleteplugin");
                var updateplugin = entityDataProvider.GetAttributeValue<Guid?>("updateplugin");
                if (retrievemultipleplugin != entity.GetAttributeValue<Guid>("retrievemultipleplugin") ||
                    retrieveplugin != entity.GetAttributeValue<Guid>("retrieveplugin") ||
                    createplugin != entity.GetAttributeValue<Guid>("createplugin") ||
                    deleteplugin != entity.GetAttributeValue<Guid>("deleteplugin") ||
                    updateplugin != entity.GetAttributeValue<Guid>("updateplugin")
                    )
                {
                    entity.Attributes.Add("entitydataproviderid", entitydataproviderid.Value);
                    var request = new UpdateRequest
                    {
                        Target = entity
                    };
                    SpectreLog.ActionWithLevel2(CliAction.UPDATED, PluginType.DataSource.ToString(), logicalNameDataSource, events.Split(",".ToCharArray()).ToList().Select(x => x.Trim()).ToList());
                    XrmHelper.COUNT_ExecuteAsync++;
                    await ServiceClient.ExecuteAsync(request);
                }
                else
                {
                    SpectreLog.ActionWithLevel2(CliAction.DO_NOTHING, PluginType.DataSource.ToString(), logicalNameDataSource, events.Split(",".ToCharArray()).ToList().Select(x => x.Trim()).ToList());
                }
            }
        }
        private async Task DeployCustomApiStepAsync(Guid pluginTypeId, string pluginTypeName, CrmPluginRegistrationAttribute attribute)
        {
            var rows = _CustomApisCache.Where(x => x.Key == attribute.Message).Select(x => x.Value).ToList();
            if (rows.Count != 1)
            {
                SpectreLog.ActionError($"Custom Api with message {attribute.Message} not found. Assemply deployed, but the deployment of this assembly stopped.");
                return;
            }
            if (rows[0].GetAttributeValue<EntityReference>("plugintypeid")?.Id.ToString("D") == pluginTypeId.ToString("D"))
            {
                if (attribute.Action == PluginStepOperationEnum.Activate)
                {
                    SpectreLog.ActionWithLevel3(CliAction.DO_NOTHING, $"{attribute.Message}", pluginTypeName, new List<string> { "MainOperation", "Synchronous" });
                }
                else
                {
                    var update = new Entity("customapi", rows[0].Id);
                    update["plugintypeid"] = null;
                    XrmHelper.COUNT_UpdateAsync++;
                    await ServiceClient.UpdateAsync(update);
                }
            }
            else
            {
                if (attribute.Action == PluginStepOperationEnum.Deactivate)
                {
                    SpectreLog.ActionWithLevel3(CliAction.DO_NOTHING, CliAction.DEACTIVATED.Trim(), $"{attribute.Message}", pluginTypeName, new List<string> { "MainOperation", "Synchronous" });
                }
                else
                {
                    SpectreLog.ActionWithLevel3(CliAction.REGISTERED, $"{attribute.Message}", pluginTypeName, new List<string> { "MainOperation", "Synchronous" });
                    var update = new Entity("customapi", rows[0].Id);
                    update["plugintypeid"] = new EntityReference("plugintype", pluginTypeId);
                    XrmHelper.COUNT_UpdateAsync++;
                    await ServiceClient.UpdateAsync(update);
                }
            }
        }
        private async Task<Guid?> DeployPluginImageAsync(Guid pluginStepId, CrmPluginRegistrationAttribute attribute)
        {
            Guid? check = null;
            if (attribute?.Image1Name?.Length > 0) check = await DeployPluginImageAsync(attribute.Message, attribute.Image1Name, attribute.Image1Alias, attribute.Image1Type, attribute.Image1Attributes, pluginStepId, attribute.Name);
            if (check == Guid.Empty) return null;
            if (attribute?.Image2Name?.Length > 0) check = await DeployPluginImageAsync(attribute.Message, attribute.Image2Name, attribute.Image2Alias, attribute.Image2Type, attribute.Image2Attributes, pluginStepId, attribute.Name);
            if (check == Guid.Empty) return null;
            if (attribute?.Image3Name?.Length > 0) check = await DeployPluginImageAsync(attribute.Message, attribute.Image3Name, attribute.Image3Alias, attribute.Image3Type, attribute.Image3Attributes, pluginStepId, attribute.Name);
            if (check == Guid.Empty) return null;
            if (attribute?.Image4Name?.Length > 0) check = await DeployPluginImageAsync(attribute.Message, attribute.Image4Name, attribute.Image4Alias, attribute.Image4Type, attribute.Image4Attributes, pluginStepId, attribute.Name);
            if (check == Guid.Empty) return null;
            return check;
        }
        private async Task<Guid> DeployPluginImageAsync(string message, string imageName, string imageAliasName, ImageTypeEnum imageType, string imageAttributes, Guid pluginStepId, string pluginStepName)
        {
            if (imageAliasName.Length == 0) imageAliasName = imageName;
            imageAttributes = imageAttributes?.Replace(" ", string.Empty);
            var key = $"{pluginStepId}-{imageName}-{(int)imageType}";
            var rows = _PluginImagesCache.Where(x => x.Key == key).Select(x => x.Value).ToList();
            if (rows.Count > 0)
            {
                if (rows.Count > 0 && rows.Count != 1)
                {
                    SpectreLog.ActionError($"Found more than 1 plugin image name {imageName}. Assemply deployed, but the deployment of this assembly stopped.");
                    return Guid.Empty;
                }
            }
            var pluginImage = new Entity("sdkmessageprocessingstepimage")
            {
                ["name"] = imageName,
                ["imagetype"] = new OptionSetValue((int)imageType),
                ["sdkmessageprocessingstepid"] = new EntityReference("sdkmessageprocessingstep", pluginStepId),
                ["attributes"] = imageAttributes.Trim() == "*" ? null : imageAttributes,
                ["entityalias"] = imageAliasName,
                ["messagepropertyname"] = Helper.GetMessagePropertyName(message)
            };
            if (rows.Count == 0)
            {
                if (imageName.Length > 0 && imageAttributes.Length == 0)
                {
                    return Guid.NewGuid();
                }
                else
                {
                    var request = new CreateRequest
                    {
                        Target = pluginImage
                    };
                    request.Parameters.Add("SolutionUniqueName", Json.solution);
                    SpectreLog.ActionWithLevel4(CliAction.REGISTERED, imageType.ToString(), imageName, imageAliasName, imageAttributes.Split(",".ToCharArray()).ToList());
                    try
                    {
                        XrmHelper.COUNT_ExecuteAsync++;
                        var response = (CreateResponse)await ServiceClient.ExecuteAsync(request);
                        return response.id;
                    }
                    catch (Exception fe)
                    {
                        if (fe.Message.Contains("entity doesn't contain attribute with"))
                        {
                            SpectreLog.ActionError($"Step {pluginStepName} have invalid {imageType} Attribute {imageAttributes}. Assemply deployed, but the deployment of this assembly stopped.");
                        }
                        else if (fe.Message.Contains("does not support this image type") || fe.Message.Contains("does not support Post Image"))
                        {
                            SpectreLog.ActionError($"Step {pluginStepName} does not support this image type {imageType}. Assemply deployed, but the deployment of this assembly stopped.");
                        }
                        else
                        {
                            SpectreLog.ActionError($"{fe.Message} Assemply deployed, but the deployment of this assembly stopped.");
                        }
                        return Guid.Empty;
                    }
                }
            }
            else
            {
                var row = rows[0];
                var name = row.GetAttributeValue<string>("name");
                var entityalias = row.GetAttributeValue<string>("entityalias");
                var attributes = row.GetAttributeValue<string>("attributes");
                var imagetype = row.GetAttributeValue<OptionSetValue>("imagetype").Value;
                if (name == imageName &&
                    entityalias == imageAliasName &&
                    attributes == (imageAttributes.Trim() == "*" ? null : imageAttributes) &&
                    imagetype == (int)imageType)
                {
                    SpectreLog.ActionWithLevel4(CliAction.DO_NOTHING, imageType.ToString(), imageName, imageAliasName, imageAttributes.Split(",".ToCharArray()).ToList());
                }
                else
                {
                    if (attributes == null || (attributes != (imageAttributes.Trim() == "*" ? null : imageAttributes) && imageAttributes.Length != 0))
                    {
                        pluginImage["sdkmessageprocessingstepimageid"] = rows[0].Id;
                        SpectreLog.ActionWithLevel4(CliAction.UPDATED, imageType.ToString(), imageName, imageAliasName, imageAttributes.Split(",".ToCharArray()).ToList());
                    }
                    else if (imageAttributes.Length == 0)
                    {
                        SpectreLog.ActionWithLevel4(CliAction.DELETED, imageType.ToString(), imageName, imageAliasName, imageAttributes.Split(",".ToCharArray()).ToList());
                        XrmHelper.COUNT_DeleteAsync++;
                        await ServiceClient.DeleteAsync("sdkmessageprocessingstepimage", rows[0].Id);
                        return Guid.NewGuid();
                    }
                    try
                    {
                        XrmHelper.COUNT_UpdateAsync++;
                        await ServiceClient.UpdateAsync(pluginImage);
                    }
                    catch (Exception fe)
                    {
                        if (fe.Message.Contains("entity doesn't contain attribute with"))
                        {
                            SpectreLog.ActionError($"Step {pluginStepName} have invalid {imageType} Attribute {imageAttributes}. Assemply deployed, but the deployment of this assembly stopped.");
                        }
                        if (fe.Message.Contains("does not support this image type") || fe.Message.Contains("does not support Post Image"))
                        {
                            SpectreLog.ActionError($"Step {pluginStepName} does not support this image type {imageType}. Assemply deployed, but the deployment of this assembly stopped.");
                        }
                        return Guid.Empty;
                    }
                }
                return rows[0].Id;
            }
        }
        private bool HasPluginImage(CrmPluginRegistrationAttribute attribute)
        {
            if (attribute?.Image1Name?.Length > 0)
                return true;
            if (attribute?.Image2Name?.Length > 0)
                return true;
            if (attribute?.Image3Name?.Length > 0)
                return true;
            if (attribute?.Image4Name?.Length > 0)
                return true;
            return false;
        }
        private async Task<Guid?> DeployPluginStepAsync(Guid pluginTypeId, TypeInfo type, CrmPluginRegistrationAttribute attribute)
        {
            if (Helper.IsMessageUpdate(attribute?.Message))
            {
                if (attribute?.FilteringAttributes?.Trim().Length == 0)
                {
                    SpectreLog.ActionError($"{type.FullName} The {attribute?.Message} message need provide FilteringAttributes value. Assemply deployed, but the deployment of this assembly stopped.");
                    return null;
                }
                if (attribute?.FilteringAttributes.Trim() == "*")
                {
                    attribute.FilteringAttributes = null;
                }
            }
            // Try to find existing step by Id first (for idempotent deployments)
            List<Entity> rows = new List<Entity>();
            if (!string.IsNullOrEmpty(attribute.Id) && Guid.TryParse(attribute.Id, out Guid stepId))
            {
                rows = _PluginStepsCache.Where(x => x.Value.Id == stepId).Select(x => x.Value).ToList();
            }
            // Fall back to Name-based lookup if Id not found or not provided
            if (rows.Count == 0)
            {
                var key = $"{pluginTypeId}-{attribute.Name}";
                rows = _PluginStepsCache.Where(x => x.Key == key).Select(x => x.Value).ToList();
            }
            var SecureConfigurationAction = string.Empty;
            if (rows.Count > 0)
            {
                if (rows.Count > 0 && rows.Count != 1)
                {
                    SpectreLog.ActionError($"Found more than 1 step name {type.FullName}. Assemply deployed, but the deployment of this assembly stopped.");
                    return null;
                }
            }
            var sdkMessageFilterId = GetSdkMessageFilterId(attribute.EntityLogicalName, attribute.Message);
            var sdkMessageId = GetSdkMessageId(attribute.EntityLogicalName, attribute.Message);
            var impersonatingUserId = await XrmHelper.GetImpersonatingUserIdAsync(ServiceClient, attribute.RunAs);

            if (attribute.ExecutionMode == 0) attribute.DeleteAsyncOperation = false;
            var pluginStep = new Entity("sdkmessageprocessingstep")
            {
                ["name"] = attribute.Name,
                ["configuration"] = attribute.UnSecureConfiguration,
                ["mode"] = new OptionSetValue(attribute.ExecutionMode == ExecutionModeEnum.Asynchronous ? 1 : 0),
                ["rank"] = attribute.ExecutionOrder,
                ["stage"] = new OptionSetValue((int)attribute.Stage),
                ["asyncautodelete"] = attribute.DeleteAsyncOperation,
                ["plugintypeid"] = new EntityReference("plugintype", pluginTypeId),
                ["sdkmessagefilterid"] = sdkMessageFilterId,
                ["sdkmessageid"] = sdkMessageId,
                ["filteringattributes"] = attribute.FilteringAttributes?.Replace(" ", ""),
                ["impersonatinguserid"] = impersonatingUserId != null ? new EntityReference("systemuser", impersonatingUserId.Value) : null,
                ["supporteddeployment"] = (attribute.Server && attribute.Offline) ? new OptionSetValue(2) : (!attribute.Server && attribute.Offline ? new OptionSetValue(1) : new OptionSetValue(0)),
                ["description"] = attribute.Description
            };

            Guid? pluginStepId;
            if (rows.Count == 0)
            {
                // Use provided Id if available (for idempotent deployments)
                if (!string.IsNullOrEmpty(attribute.Id) && Guid.TryParse(attribute.Id, out Guid specificStepId))
                {
                    pluginStep["sdkmessageprocessingstepid"] = specificStepId;
                }
                if (attribute.SecureConfiguration?.Trim().Length > 0)
                {
                    var secureEntity = new Entity("sdkmessageprocessingstepsecureconfig");
                    secureEntity["secureconfig"] = attribute.SecureConfiguration;
                    XrmHelper.COUNT_CreateAsync++;
                    var sdkmessageprocessingstepsecureconfigid = await ServiceClient.CreateAsync(secureEntity);
                    SecureConfigurationAction = CliAction.REGISTERED;
                    pluginStep["sdkmessageprocessingstepsecureconfigid"] = new EntityReference("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid);
                }
                var request = new CreateRequest
                {
                    Target = pluginStep
                };
                request.Parameters.Add("SolutionUniqueName", Json.solution);
                var actionText = attribute.Action == PluginStepOperationEnum.Deactivate
                    ? $"{CliAction.REGISTERED.Trim()} {CliAction.DEACTIVATED.Trim()}"
                    : CliAction.REGISTERED.Trim();
                SpectreLog.ActionWithLevel3(actionText, $"Step {attribute.Message}", attribute.Name, new List<string> { $"{attribute.Stage}", $"{attribute.ExecutionMode}" });
                CliLogSecureUnsecure();
                CliLogUpdateFields();
                try
                {
                    XrmHelper.COUNT_ExecuteAsync++;
                    var response = (CreateResponse)await ServiceClient.ExecuteAsync(request);
                    pluginStepId = response.id;
                }
                catch (Exception fe)
                {
                    if (fe.Message.Contains("The dependent component Attribute "))
                    {
                        SpectreLog.ActionError($"Step {attribute.Name} have invalid Image Attribute {attribute.FilteringAttributes}. Assemply deployed, but the deployment of this assembly stopped.");
                        return null;
                    }
                    SpectreLog.ActionError($"Step {attribute.Name} register failed: {fe.Message.TrimEnd(".".ToCharArray())}. Assemply deployed, but the deployment of this assembly stopped.");
                    return null;
                }
            }
            else
            {
                pluginStepId = rows[0].Id;
                pluginStep["sdkmessageprocessingstepid"] = pluginStepId.Value;
                var hasChangedPluginStep = false;
                var _rows = _SecureEntitiesCache.Where(x => x.Key == pluginStepId.Value.ToString()).Select(x => x.Value).ToList();
                var secureEntity = _rows.Count > 0 ? _rows[0] : null;
                if (attribute.SecureConfiguration?.Trim().Length == 0 && secureEntity != null)
                {
                    var sdkmessageprocessingstepsecureconfigid = (Guid?)secureEntity.GetAttributeValue<AliasedValue>("s.sdkmessageprocessingstepsecureconfigid")?.Value;
                    if (sdkmessageprocessingstepsecureconfigid.HasValue)
                    {
                        var u = new Entity("sdkmessageprocessingstep");
                        u["sdkmessageprocessingstepid"] = pluginStepId.Value;
                        u["sdkmessageprocessingstepsecureconfigid"] = null;
                        XrmHelper.COUNT_UpdateAsync++;
                        await ServiceClient.UpdateAsync(u);
                        XrmHelper.COUNT_DeleteAsync++;
                        await ServiceClient.DeleteAsync("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid.Value);
                        SecureConfigurationAction = CliAction.UNREGISTERED;
                        hasChangedPluginStep = true;
                    }
                }
                else if (attribute.SecureConfiguration?.Trim().Length > 0 && secureEntity != null)
                {
                    var sdkmessageprocessingstepsecureconfigid = (Guid?)secureEntity.GetAttributeValue<AliasedValue>("s.sdkmessageprocessingstepsecureconfigid")?.Value;
                    if (sdkmessageprocessingstepsecureconfigid.HasValue)
                    {
                        var old = (string)secureEntity.GetAttributeValue<AliasedValue>("s.secureconfig")?.Value;
                        if (old != attribute.SecureConfiguration)
                        {
                            var update = new Entity("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid.Value);
                            update["secureconfig"] = attribute.SecureConfiguration;
                            XrmHelper.COUNT_UpdateAsync++;
                            await ServiceClient.UpdateAsync(update);
                            SecureConfigurationAction = CliAction.UPDATED;
                            hasChangedPluginStep = true;
                        }
                        else
                            SecureConfigurationAction = CliAction.DO_NOTHING;
                    }
                    else
                    {
                        var secureEntity2 = new Entity("sdkmessageprocessingstepsecureconfig");
                        secureEntity2["secureconfig"] = attribute.SecureConfiguration;
                        XrmHelper.COUNT_CreateAsync++;
                        var sdkmessageprocessingstepsecureconfigid2 = await ServiceClient.CreateAsync(secureEntity2);
                        SecureConfigurationAction = CliAction.REGISTERED;
                        var u = new Entity("sdkmessageprocessingstep");
                        u["sdkmessageprocessingstepid"] = pluginStepId.Value;
                        u["sdkmessageprocessingstepsecureconfigid"] = new EntityReference("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid2);
                        XrmHelper.COUNT_UpdateAsync++;
                        await ServiceClient.UpdateAsync(u);
                    }
                }
                else if (attribute.SecureConfiguration?.Trim().Length > 0 && secureEntity == null)
                {
                    var create = new Entity("sdkmessageprocessingstepsecureconfig");
                    create["secureconfig"] = attribute.SecureConfiguration;
                    XrmHelper.COUNT_CreateAsync++;
                    var sdkmessageprocessingstepsecureconfigid = await ServiceClient.CreateAsync(create);
                    SecureConfigurationAction = CliAction.REGISTERED;
                    pluginStep["sdkmessageprocessingstepsecureconfigid"] = new EntityReference("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid);
                    hasChangedPluginStep = true;
                }
                if (!IsChangedPluginStep(hasChangedPluginStep, rows[0], pluginStep, attribute))
                {
                    if (attribute.Action == PluginStepOperationEnum.Activate)
                    {
                        SpectreLog.ActionWithLevel3(CliAction.DO_NOTHING, $"{attribute.Message}", attribute.Name, new List<string> { $"{attribute.Stage}", $"{attribute.ExecutionMode}" });
                    }
                    else
                    {
                        SpectreLog.ActionWithLevel3(CliAction.DO_NOTHING, CliAction.DEACTIVATED.Trim(), $"{attribute.Message}", attribute.Name, new List<string> { $"{attribute.Stage}", $"{attribute.ExecutionMode}" });
                    }
                    CliLogSecureUnsecure();
                    CliLogUpdateFields();
                }
                else
                {
                    var request = new UpdateRequest
                    {
                        Target = pluginStep
                    };
                    request.Parameters.Add("SolutionUniqueName", Json.solution);
                    if (attribute.Action == PluginStepOperationEnum.Activate)
                    {
                        var needActivate = rows.Count == 1 &&
                            rows[0].GetAttributeValue<OptionSetValue>("statecode")?.Value == (int)PluginStepOperationEnum.Deactivate &&
                            attribute.Action == PluginStepOperationEnum.Activate;
                        var actionText = needActivate ? $"{CliAction.UPDATED.Trim()} {CliAction.ACTIVATED.Trim()}" : CliAction.UPDATED.Trim();
                        SpectreLog.ActionWithLevel3(actionText, $"{attribute.Message}", attribute.Name, new List<string> { $"{attribute.Stage}", $"{attribute.ExecutionMode}" });
                    }
                    else
                    {
                        var needDeactivate = rows.Count == 1 &&
                            rows[0].GetAttributeValue<OptionSetValue>("statecode")?.Value == (int)PluginStepOperationEnum.Activate &&
                            attribute.Action == PluginStepOperationEnum.Deactivate;
                        var actionText = needDeactivate ? $"{CliAction.UPDATED.Trim()} {CliAction.DEACTIVATED.Trim()}" : CliAction.UPDATED.Trim();
                        SpectreLog.ActionWithLevel3(actionText, $"{attribute.Message}", attribute.Name, new List<string> { $"{attribute.Stage}", $"{attribute.ExecutionMode}" });
                    }
                    CliLogSecureUnsecure();
                    CliLogUpdateFields();
                    try
                    {
                        XrmHelper.COUNT_ExecuteAsync++;
                        await ServiceClient.ExecuteAsync(request);
                    }
                    catch (Exception fe)
                    {
                        if (fe.Message.Contains("The dependent component Attribute "))
                        {
                            SpectreLog.ActionError($"Step {attribute.Name} have invalid Image Attribute {attribute.FilteringAttributes}. Assemply deployed, but the deployment of this assembly stopped.");
                        }
                        return null;
                    }
                }
            }

            if (
                (
                    (rows.Count == 0) &&
                    (attribute.Action == PluginStepOperationEnum.Deactivate)
                )
                ||
                (
                    (rows.Count == 1 && rows[0].GetAttributeValue<OptionSetValue>("statecode")?.Value == 0 && attribute.Action == PluginStepOperationEnum.Deactivate) ||
                    (rows.Count == 1 && rows[0].GetAttributeValue<OptionSetValue>("statecode")?.Value == null && attribute.Action == PluginStepOperationEnum.Deactivate)
                )
               )
            {
                var update = new Entity("sdkmessageprocessingstep", pluginStepId.Value);
                update["statecode"] = new OptionSetValue(1);
                update["statuscode"] = new OptionSetValue(2);
                XrmHelper.COUNT_UpdateAsync++;
                await ServiceClient.UpdateAsync(update);
            }
            else if (
                rows.Count > 0 &&
                rows[0].GetAttributeValue<OptionSetValue>("statecode")?.Value == 1 &&
                attribute.Action == PluginStepOperationEnum.Activate)
            {
                var update = new Entity("sdkmessageprocessingstep", pluginStepId.Value);
                update["statecode"] = new OptionSetValue(0);
                update["statuscode"] = new OptionSetValue(1);
                XrmHelper.COUNT_UpdateAsync++;
                await ServiceClient.UpdateAsync(update);
            }
            return pluginStepId;

            void CliLogUpdateFields()
            {
                if (Helper.IsMessageUpdate(attribute.Message))
                {
                    if (rows.Count == 0)
                    {
                        SpectreLog.ActionWithLevel4(CliAction.REGISTERED, "Update", "Fields", attribute.FilteringAttributes.Split(",".ToCharArray()).ToList());
                    }
                    else
                    {
                        if (rows[0].GetAttributeValue<string>("filteringattributes") == attribute.FilteringAttributes?.Replace(" ", ""))
                        {
                            SpectreLog.ActionWithLevel4(CliAction.DO_NOTHING, "Update", "Fields", attribute.FilteringAttributes.Split(",".ToCharArray()).ToList());
                        }
                        else
                        {
                            SpectreLog.ActionWithLevel4(CliAction.UPDATED, "Update", "Fields", attribute.FilteringAttributes.Split(",".ToCharArray()).ToList());
                        }
                    }
                }
                else if (Helper.IsMessageCreate(attribute.Message))
                {
                    if (attribute.FilteringAttributes.Length > 0)
                    {
                        if (rows.Count == 0)
                        {
                            SpectreLog.ActionWithLevel4(CliAction.REGISTERED, "Create", "Fields", attribute.FilteringAttributes.Split(",".ToCharArray()).ToList());
                        }
                        else
                        {
                            if (rows[0].GetAttributeValue<string>("filteringattributes") == attribute.FilteringAttributes?.Replace(" ", ""))
                            {
                                SpectreLog.ActionWithLevel4(CliAction.DO_NOTHING, "Create", "Fields", attribute.FilteringAttributes.Split(",".ToCharArray()).ToList());
                            }
                            else
                            {
                                SpectreLog.ActionWithLevel4(CliAction.UPDATED, "Create", "Fields", attribute.FilteringAttributes.Split(",".ToCharArray()).ToList());
                            }
                        }
                    }
                }
            }
            void CliLogSecureUnsecure()
            {
                if (SecureConfigurationAction == CliAction.DO_NOTHING)
                {
                    SpectreLog.ActionWithLevel4(CliAction.DO_NOTHING, "Secure", "Configuration", attribute.SecureConfiguration);
                }
                else if (!string.IsNullOrWhiteSpace(SecureConfigurationAction))
                {
                    if (string.IsNullOrWhiteSpace(attribute.SecureConfiguration))
                    {
                        SpectreLog.ActionWithLevel4(CliAction.UNREGISTERED, "Secure", "Configuration", (string)null);
                    }
                    else
                    {
                        SpectreLog.ActionWithLevel4(SecureConfigurationAction.Trim(), "Secure", "Configuration", attribute.SecureConfiguration);
                    }
                }
                if (rows.Count == 0 && !string.IsNullOrWhiteSpace(attribute.UnSecureConfiguration))
                {
                    SpectreLog.ActionWithLevel4(CliAction.REGISTERED, "UnSecure", "Configuration", attribute.UnSecureConfiguration);
                }
                else
                {
                    if (rows.Count == 1 && rows[0].GetAttributeValue<string>("configuration") == null && !string.IsNullOrWhiteSpace(attribute.UnSecureConfiguration))
                    {
                        SpectreLog.ActionWithLevel4(CliAction.REGISTERED, "UnSecure", "Configuration", attribute.UnSecureConfiguration);
                    }
                    else if (rows.Count == 1 && rows[0].GetAttributeValue<string>("configuration") == attribute.UnSecureConfiguration)
                    {
                        SpectreLog.ActionWithLevel4(CliAction.DO_NOTHING, "UnSecure", "Configuration", attribute.UnSecureConfiguration);
                    }
                    else if (rows.Count == 1 && rows[0].GetAttributeValue<string>("configuration") != null && string.IsNullOrEmpty(attribute.UnSecureConfiguration))
                    {
                        SpectreLog.ActionWithLevel4(CliAction.UNREGISTERED, "UnSecure", "Configuration", (string)null);
                    }
                    else if (rows.Count == 1 && rows[0].GetAttributeValue<string>("configuration") != null && !string.IsNullOrEmpty(attribute.UnSecureConfiguration))
                    {
                        SpectreLog.ActionWithLevel4(CliAction.UPDATED, "UnSecure", "Configuration", attribute.UnSecureConfiguration);
                    }
                }
            }
        }
        private bool IsChangedPluginStep(bool alreadyChanged, Entity _old, Entity _new, CrmPluginRegistrationAttribute attribute)
        {
            if (alreadyChanged) return true;
            _new["statuscode"] = attribute.Action == PluginStepOperationEnum.Activate ? new OptionSetValue(1) : new OptionSetValue(2);
            _new["statecode"] = attribute.Action == PluginStepOperationEnum.Activate ? new OptionSetValue(0) : new OptionSetValue(1);
            var old = ReadFromEntity(_old);
            var @new = ReadFromEntity(_new);
            if (
                old.Name != @new.Name ||
                (old.Configuration ?? string.Empty) != @new.Configuration ||
                (old.Description ?? string.Empty) != (@new.Description ?? String.Empty) ||
                old.Mode.Value != @new.Mode.Value ||
                old.Rank != @new.Rank ||
                old.Stage.Value != @new.Stage.Value ||
                old.AsyncAutoDelete != @new.AsyncAutoDelete ||
                old.StatusCode.Value != @new.StatusCode.Value ||
                old.SdkMessageFilterId?.Id != @new.SdkMessageFilterId?.Id ||
                old.SdkMessageId?.Id != @new.SdkMessageId?.Id ||
                (old.FilteringAttributes ?? string.Empty) != (@new.FilteringAttributes ?? string.Empty) ||
                old.ImpersonatingUserId?.Id != @new.ImpersonatingUserId?.Id ||
                old.SupportedDeployment.Value != @new.SupportedDeployment.Value)
                return true;
            return false;
            static SdkMessageProcessingStep ReadFromEntity(Entity entity)
            {
                return new SdkMessageProcessingStep
                {
                    Name = entity.GetAttributeValue<string>("name"),
                    Configuration = entity.GetAttributeValue<string>("configuration"),
                    Description = entity.GetAttributeValue<string>("description"),
                    Mode = entity.GetAttributeValue<OptionSetValue>("mode"),
                    Rank = entity.GetAttributeValue<int?>("rank"),
                    Stage = entity.GetAttributeValue<OptionSetValue>("stage"),
                    AsyncAutoDelete = entity.GetAttributeValue<bool?>("asyncautodelete"),
                    StatusCode = entity.GetAttributeValue<OptionSetValue>("statuscode"),
                    StateCode = entity.GetAttributeValue<OptionSetValue>("statecode"),
                    SdkMessageFilterId = entity.GetAttributeValue<EntityReference>("sdkmessagefilterid"),
                    SdkMessageId = entity.GetAttributeValue<EntityReference>("sdkmessageid"),
                    FilteringAttributes = entity.GetAttributeValue<string>("filteringattributes"),
                    ImpersonatingUserId = entity.GetAttributeValue<EntityReference>("impersonatinguserid"),
                    SupportedDeployment = entity.GetAttributeValue<OptionSetValue>("supporteddeployment")
                };
            }
        }
        private async Task<bool?> UnregisterPluginTypeAsync(Guid pluginAssemblyId, TypeInfo type, CrmPluginRegistrationAttribute attribute, DeployFileType deployFileType)
        {
            var rows = _PluginTypesCache.Where(x => x.Key == type.FullName).Select(x => x.Value).ToList();
            if (rows.Count != 1) return null;
            var pluginTypeId = rows[0].GetAttributeValue<Guid>("plugintypeid");
            try
            {
                await DeletePluginStepsAsync();
                XrmHelper.COUNT_DeleteAsync++;
                await ServiceClient.DeleteAsync("plugintype", pluginTypeId);
                return true;
            }
            catch (Exception fe)
            {
                SpectreLog.ActionError($"Unregister {type.FullName} failed: {fe.Message} Assemply deployed, but the deployment of this assembly stopped.");
                return false;
            }
            async Task DeletePluginStepsAsync()
            {
                var fetchXml = $@"
<fetch>
  <entity name='sdkmessageprocessingstep'>
    <attribute name='sdkmessageprocessingstepid' />
    <attribute name='sdkmessageprocessingstepsecureconfigid' />
    <filter>
      <condition attribute='plugintypeid' operator='eq' value='{pluginTypeId}' />
    </filter>
  </entity>
</fetch>";
                XrmHelper.COUNT_RetrieveMultipleAsync++;
                var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
                foreach (var row in rows.Entities)
                {
                    XrmHelper.COUNT_DeleteAsync++;
                    await ServiceClient.DeleteAsync("sdkmessageprocessingstep", row.Id);
                }
            }
        }
        private async Task<Guid?> DeployPluginTypeAsync(Guid pluginAssemblyId, TypeInfo type, CrmPluginRegistrationAttribute attribute, DeployFileType deployFileType)
        {
            var rows = _PluginTypesCache.Where(x => x.Key == type.FullName).Select(x => x.Value).ToList();
            if (rows.Count > 0)
            {
                if (rows.Count > 0 && rows.Count != 1)
                {
                    SpectreLog.ActionError($"Found more than 1 type name {type.FullName}. Assemply deployed, but the deployment of this assembly stopped.");
                    return null;
                }
                if (deployFileType == DeployFileType.Nuget)
                {
                    SpectreLog.ActionWithLevel2(CliAction.DO_NOTHING, attribute.PluginType.ToString(), type.FullName);
                    return rows[0].Id;
                }
            }
            var pluginType = new Entity("plugintype");
            pluginType["name"] = attribute.Name;
            pluginType["pluginassemblyid"] = new EntityReference("pluginassembly", pluginAssemblyId);
            pluginType["typename"] = type.FullName;
            pluginType["friendlyname"] = attribute.FriendlyName?.Length == 0 ? type.FullName : attribute.FriendlyName;
            pluginType["description"] = attribute.Description?.Length == 0 ? null : attribute.Description;
            if (attribute.PluginType == PluginType.Workflow)
                pluginType["workflowactivitygroupname"] = attribute.GroupName;
            if (rows.Count == 0)
            {
                var request = new CreateRequest
                {
                    Target = pluginType
                };
                request.Parameters.Add("SolutionUniqueName", Json.solution);
                SpectreLog.ActionWithLevel2(CliAction.REGISTERED, attribute.PluginType.ToString(), type.FullName);
                XrmHelper.COUNT_ExecuteAsync++;
                var response = (CreateResponse)await ServiceClient.ExecuteAsync(request);
                return response.id;
            }
            else
            {
                var old = _PluginTypesCache
                        .Select(x => x.Value)
                        .FirstOrDefault(x => x.GetAttributeValue<Guid>("plugintypeid") == rows[0].Id);
                if (
                    pluginType.GetAttributeValue<string>("name") != old.GetAttributeValue<string>("name") ||
                    pluginType.GetAttributeValue<string>("typename") != old.GetAttributeValue<string>("typename") ||
                    pluginType.GetAttributeValue<string>("friendlyname") != old.GetAttributeValue<string>("friendlyname") ||
                    pluginType.GetAttributeValue<string>("workflowactivitygroupname") != old.GetAttributeValue<string>("workflowactivitygroupname") ||
                    pluginType.GetAttributeValue<string>("description") != old.GetAttributeValue<string>("description")
                    )
                {
                    pluginType["plugintypeid"] = rows[0].Id;
                    var request = new UpdateRequest
                    {
                        Target = pluginType
                    };
                    request.Parameters.Add("SolutionUniqueName", Json.solution);
                    XrmHelper.COUNT_ExecuteAsync++;
                    await ServiceClient.ExecuteAsync(request);
                    SpectreLog.ActionWithLevel2(CliAction.UPDATED, attribute.PluginType.ToString(), type.FullName);
                }
                else
                {
                    SpectreLog.ActionWithLevel2(CliAction.DO_NOTHING, attribute.PluginType.ToString(), type.FullName);
                }
            }
            return rows[0].Id;
        }
        private async Task<bool> IsValidTypesAsync(string file, List<TypeInfo> types, DeployFileType deployFileType)
        {
            if (types.Count == 0 && deployFileType == DeployFileType.Nuget)
                return false;
            if (types.Count == 0)
            {
                SpectreLog.ActionError($"Not found any valid types to deploy.");
                return false;
            }
            if (!IsValidTypes(types))
            {
                return false;
            }
            if (!await IsValidTypesWithCDSAsync(types, Path.GetFileNameWithoutExtension(file)))
            {
                return false;
            }
            return true;
        }
        private async Task<bool> IsValidTypesWithCDSAsync(List<TypeInfo> types, string fileNameWithoutExtension)
        {
            var fetchData = new
            {
                name = fileNameWithoutExtension
            };
            var fetchXml = $@"<?xml version=""1.0"" encoding=""utf-16""?>
<fetch>
  <entity name=""sdkmessageprocessingstep"">
    <link-entity name=""plugintype"" from=""plugintypeid"" to=""plugintypeid"" alias=""plugintype"">
      <attribute name=""typename"" />
      <link-entity name=""pluginassembly"" from=""pluginassemblyid"" to=""pluginassemblyid"">
        <filter>
          <condition attribute=""name"" operator=""eq"" value=""{fetchData.name}"" />
        </filter>
      </link-entity>
    </link-entity>
  </entity>
</fetch>";
            XrmHelper.COUNT_RetrieveMultipleAsync++;
            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return true;
            foreach (var entity in rows.Entities)
            {
                var typeName = entity.GetAttributeValue<AliasedValue>("plugintype.typename")?.Value.ToString();
                if (types.Count(x => x.FullName == typeName) == 0)
                {
                    SpectreLog.ActionError($"Type: '{typeName}' not found in the assembly file. This type: '{typeName}' already registered to CRM/CDS. Assemply deployed, but the deployment of this assembly stopped.");
                    SpectreLog.ActionError($"If you need to deploy this assembly. Please manually remove this type from Plugin Registration Tool and try it again.");
                    return false;
                }
            }
            return true;
        }
        private bool IsValidTypes(List<TypeInfo> types)
        {
            foreach (var type in types)
            {
                var attributes = _AttributesCache.FirstOrDefault(x => x.Key == type.FullName).Value;
                if (attributes != null && attributes.Count() > 1)
                {
                    if (IsWorkflowType(type))
                    {
                        SpectreLog.ActionError($"Type '{type.FullName}' has multi attribute CrmPluginRegistration. Deploy stopped.");
                        return false;
                    }
                    else
                    {
                        if (attributes.GroupBy(x => x.PluginType).Count() != 1)
                        {
                            SpectreLog.ActionError($"Type '{type.FullName}' has multi invalid attribute CrmPluginRegistration. Deploy stopped.");
                            return false;
                        }
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
                list.Add(Helper.ConvertAttributeToCrmPluginRegistration(attribute));
            return list;
        }
        private Assembly LoadAssemblyIntoCache(string file)
        {
            var normalizedPath = Path.GetFullPath(file);
            string fileName = Path.GetFileName(file);
            if (_assemblyCache.TryGetValue(fileName, out var cachedAssembly))
            {
                return cachedAssembly;
            }
            Assembly assembly = null;
            try
            {
                _currentAssemblyDirectory = Path.GetDirectoryName(file);
                var assemblyBytes = File.ReadAllBytes(file);
                AppDomain.CurrentDomain.AssemblyResolve += CurrentDomain_AssemblyResolve;
                assembly = Assembly.Load(assemblyBytes);
                AppDomain.CurrentDomain.AssemblyResolve -= CurrentDomain_AssemblyResolve;
                if (assembly != null)
                {
                    _assemblyCache[fileName] = assembly;
                }
            }
            catch (Exception ex)
            {
                SpectreLog.ActionError($"Failed to load assembly {file}: {ex.Message}");
            }
            return assembly;
        }
        private List<TypeInfo> GetTypes(string file)
        {
            _currentAssemblyDirectory = Path.GetDirectoryName(file);
            var assembly = LoadAssemblyIntoCache(file);
            if (assembly == null) return new List<TypeInfo>();
            var types = new List<TypeInfo>();
            try
            {
                AppDomain.CurrentDomain.AssemblyResolve += CurrentDomain_AssemblyResolve;
                var allTypes = assembly.DefinedTypes;
                AppDomain.CurrentDomain.AssemblyResolve -= CurrentDomain_AssemblyResolve;
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
            }
            catch (ReflectionTypeLoadException ex)
            {
                // Handle case where some types cannot be loaded (e.g., Workflow types with System.Activities dependency)
                // Use ex.Types to get types that were successfully loaded
                AppDomain.CurrentDomain.AssemblyResolve -= CurrentDomain_AssemblyResolve;
                var loadedTypes = ex.Types?.Where(t => t != null).OfType<TypeInfo>().ToList() ?? new List<TypeInfo>();
                foreach (var type in loadedTypes)
                {
                    try
                    {
                        var attributes = type?.GetCustomAttributesData();
                        if (attributes != null && attributes.Any(a => a.AttributeType.Name == typeof(CrmPluginRegistrationAttribute).Name))
                            types.Add(type);
                    }
                    catch { }
                }
            }
            catch (Exception ex)
            {
                SpectreLog.ActionError($"Failed to read types from assembly {file}: {ex.Message}");
            }
            types = [.. types.OrderBy(x => x.FullName)];
            _AttributesCache.Clear();
            foreach (var type in types)
            {
                var attributes = GetCrmPluginRegistrationAttributes(type);
                _AttributesCache.Add(new KeyValuePair<string, List<CrmPluginRegistrationAttribute>>(type.FullName, attributes));
            }
            return types;
        }
        private Assembly CurrentDomain_AssemblyResolve(object sender, ResolveEventArgs args)
        {
            try
            {
                var parts = args.Name.Split(',');
                var assemblyName = parts[0].Trim();

                // Check if already cached
                if (_assemblyCache.TryGetValue(assemblyName + ".dll", out var cachedAssembly))
                {
                    return cachedAssembly;
                }

                // Try to load from current assembly directory first
                if (!string.IsNullOrEmpty(_currentAssemblyDirectory))
                {
                    var localPath = Path.Combine(_currentAssemblyDirectory, assemblyName + ".dll");
                    if (File.Exists(localPath))
                    {
                        var assemblyBytes = File.ReadAllBytes(localPath);
                        var loaded = Assembly.Load(assemblyBytes);
                        _assemblyCache[assemblyName + ".dll"] = loaded;
                        return loaded;
                    }
                }

                // Try to load from .NET Framework 4.x directory for WF4 assemblies (e.g., System.Activities)
                // This is required for loading Workflow types that extend CodeActivity
                var netFxPaths = new[]
                {
                    Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Windows), @"Microsoft.NET\Framework64\v4.0.30319"),
                    Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Windows), @"Microsoft.NET\Framework\v4.0.30319")
                };

                foreach (var netFxPath in netFxPaths)
                {
                    if (Directory.Exists(netFxPath))
                    {
                        var netFxAssemblyPath = Path.Combine(netFxPath, assemblyName + ".dll");
                        if (File.Exists(netFxAssemblyPath))
                        {
                            var assemblyBytes = File.ReadAllBytes(netFxAssemblyPath);
                            var loaded = Assembly.Load(assemblyBytes);
                            _assemblyCache[assemblyName + ".dll"] = loaded;
                            return loaded;
                        }
                    }
                }

                // Cannot resolve - return null (do NOT call Assembly.Load(args.Name) as it triggers infinite recursion)
                return null;
            }
            catch
            {
                return null;
            }
        }
        private bool IsWorkflowType(Type type)
        {
            if (type?.FullName == "System.Activities.CodeActivity") return true;
            if (type?.BaseType != null) return IsWorkflowType(type?.BaseType);
            return false;
        }
        private void ExtractZip(PackageArchiveReader packageArchiveReader, string folder)
        {
            Helper.TryDeleteDirectory(folder);
            if (!Directory.Exists(folder)) Directory.CreateDirectory(folder);
            var libFiles = packageArchiveReader.GetFiles("lib");
            foreach (var libFile in libFiles)
            {
                var zip = packageArchiveReader.GetEntry(libFile);
                zip.ExtractToFile($"{folder}\\{zip.Name}", true);
            }
        }
        private int? GetObjectTypeCode(string entityName)
        {
            if (entityName?.Length == 0) return null;
            var rows = _ObjectTypeCodesCache.Where(x => x.Key == entityName.ToLower()).Select(x => x.Value).ToList();
            if (rows.Count == 1) return rows[0];
            return -1;
        }
        private EntityReference GetSdkMessageFilterId(string entityLogicalName, string message)
        {
            if (entityLogicalName?.Length == 0 || entityLogicalName?.ToLower() == "none") return null;
            var key = $"{entityLogicalName}-{message}";
            var rows = _SdkMessageFiltersCache.Where(x => x.Key == key).Select(x => x.Value).ToList();
            if (rows.Count == 1)
                return rows[0];
            return null;
        }
        private EntityReference GetSdkMessageId(string entityLogicalName, string message)
        {
            if (entityLogicalName?.Length == 0) return null;
            var key = $"{entityLogicalName}-{message}";
            var rows = _SdkMessagesCache.Where(x => x.Key == key).Select(x => x.Value).ToList();
            if (rows.Count == 1) return rows[0];
            return null;
        }
    }
}
