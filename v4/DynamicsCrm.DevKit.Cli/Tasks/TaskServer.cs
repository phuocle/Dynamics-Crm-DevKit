
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using NuGet.Packaging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reflection;
using System.ServiceModel;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskServer : ITask
    {
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
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "START ");
            CliLog.WriteLine(ConsoleColor.White, "|");
            if (await IsValidAsync())
            {
                var files = XrmHelper.GetFiles(CurrentFolder, Json.includefiles, Json.excludefiles);
                files.Sort();
                if (files.Count == 0)
                {
                    CliLog.WriteLineWarning(ConsoleColor.Green, "Not found any files to deploy");
                }
                else
                {
                    if (files.Count > 1)
                    {
                        CliLog.Write(ConsoleColor.White, "|", ConsoleColor.Green, "Found: ");
                        CliLog.WriteSuccess(ConsoleColor.White, files.Count);
                        CliLog.WriteLine(ConsoleColor.Green, " files to deploy");
                        foreach(var file in files)
                        {
                            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.White, $"  - {Path.GetFileName(file)}");
                        }
                        CliLog.WriteLine(ConsoleColor.White, "|");
                    }
                    await DeployFilesAsync(files);
                }
            }
            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ");
        }
        private async Task DeployFilesAsync(List<string> files)
        {
            foreach (var file in files)
            {
                if (file.EndsWith(".dll"))
                {
                    var fileDll = file;
                    CliLog.Write(ConsoleColor.White, "|");
                    CliLog.WriteSuccess(ConsoleColor.White, $"{Path.GetFileName(fileDll)}");
                    CliLog.WriteLine();
                    (IS_MANAGED_IDENTITY, ERROR) = IsNeedSignAssembly(fileDll);
                    if (IS_MANAGED_IDENTITY && ERROR.Length == 0)
                    {
                        (OK, ERROR) = await SignAssemblyAsync(fileDll, Path.Combine(CurrentDirectory, ManagedIdentityAttribute.CertificateFile), ManagedIdentityAttribute.CertificatePassword);
                        if (!OK)
                        {
                            if (!OK)
                            {
                                CliLog.WriteLineError(ConsoleColor.Yellow, ERROR);
                                CliLog.WriteLineError(ConsoleColor.Yellow, $"Assembly {Path.GetFileName(fileDll)} not signed. Assembly deployment stopped.");
                                continue;
                            }
                        }
                    }
                    else if (ERROR.Length > 0)
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, ERROR);
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"Assembly {Path.GetFileName(fileDll)} not signed. Assembly deployment stopped.");
                        continue;
                    }
                    await DeployDllAsync(fileDll, DeployFileType.Dll);
                }
                else if (file.EndsWith(".nupkg"))
                {
                    var fileNuget = file;
                    CliLog.Write(ConsoleColor.White, "|");
                    CliLog.WriteSuccess(ConsoleColor.White, $"{Path.GetFileName(fileNuget)}");
                    CliLog.WriteLine();
                    var fileNugetDll = GetDllFileFromNugetPackage(fileNuget);
                    if (fileNugetDll.Length == 0)
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, ERROR);
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"Package {Path.GetFileName(file)} don't have a .dll file to deploy.");
                        continue;
                    }
                    else
                    {
                        (IS_MANAGED_IDENTITY, ERROR) = IsNeedSignAssembly(fileNugetDll);
                        if (IS_MANAGED_IDENTITY && ERROR.Length == 0)
                        {
                            (OK, ERROR) = await SignPackageAsync(fileNuget, Path.Combine(CurrentDirectory, ManagedIdentityAttribute.CertificateFile), ManagedIdentityAttribute.CertificatePassword);
                            if (!OK)
                            {
                                CliLog.WriteLineError(ConsoleColor.Yellow, ERROR);
                                CliLog.WriteLineError(ConsoleColor.Yellow, $"Package {Path.GetFileName(fileNuget)} not signed. Package deployment stopped.");
                                continue;
                            }
                        }
                        else if (ERROR.Length > 0)
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, ERROR);
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Package {Path.GetFileName(fileNuget)} not signed. Package deployment stopped.");
                            continue;
                        }
                        ERROR = await DeployPackageAsync(fileNuget);
                        if (ERROR.Length > 0)
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, ERROR);
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Package {Path.GetFileName(fileNuget)} not signed. Package deployment stopped.");
                            continue;
                        }
                        await DeployDllAsync(fileNugetDll, DeployFileType.Nuget);
                    }
                }
                else
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Not support file extension: {new FileInfo(file).Extension}");
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
                    var response = (CreateResponse)await ServiceClient.ExecuteAsync(request);
                    CliLog.Write(ConsoleColor.White, "|", SPACE);
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.REGISTERED.Trim());
                    CliLog.WriteLine(ConsoleColor.White, " Package ", ConsoleColor.Cyan, Path.GetFileName(file));
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
                if (XrmHelper.IsEqualsContent(oldContent, newContent))
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, CliAction.DO_NOTHING, ConsoleColor.Blue, " Package ", ConsoleColor.Green, $"{Path.GetFileName(file)}");
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
                        await ServiceClient.ExecuteAsync(request);
                        CliLog.Write(ConsoleColor.White, "|", SPACE);
                        CliLog.WriteSuccess(ConsoleColor.White, CliAction.UPDATED.Trim());
                        CliLog.WriteLine(ConsoleColor.White, " Package ", ConsoleColor.Cyan, Path.GetFileName(file));
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
                    CliLog.Write(ConsoleColor.White, "|", SPACE);
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.REGISTERED.Trim());
                    CliLog.WriteLine(ConsoleColor.White, " Bind Package ", ConsoleColor.Cyan, Path.GetFileName(file), ConsoleColor.White, " to Managed Identity App ", ConsoleColor.Cyan, applicationId);
                    await ServiceClient.ExecuteAsync(request2);
                }
                else if (rows.Entities[0].GetAttributeValue<EntityReference>("managedidentityid")?.Id == managedIdentityId)
                {
                    CliLog.Write(ConsoleColor.White, "|", SPACE);
                    CliLog.Write(ConsoleColor.Green, CliAction.DO_NOTHING.Trim());
                    CliLog.WriteLine(ConsoleColor.White, " Bind Package ", ConsoleColor.Cyan, Path.GetFileName(file), ConsoleColor.White, " to Managed Identity App ", ConsoleColor.Cyan, applicationId);
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
                    CliLog.Write(ConsoleColor.White, "|", SPACE);
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.UPDATED.Trim());
                    CliLog.WriteLine(ConsoleColor.White, " Bind Package ", ConsoleColor.Cyan, Path.GetFileName(file), ConsoleColor.White, " to Managed Identity App ", ConsoleColor.Cyan, applicationId);
                    await ServiceClient.ExecuteAsync(request2);
                }
            }
            return string.Empty;
        }
        private async Task<Guid?> DeployAssemblyAsync(string file, DeployFileType deployFileType)
        {
            (string name, int value) GetIsolationMode(string file)
            {
                var types = GetTypes(file);
                foreach (var type in types)
                {
                    if (XrmHelper.IsWorkflowType(type)) continue;
                    var attributes = GetCrmPluginRegistrationAttributes(type);
                    foreach (var attribute in attributes)
                    {
                        if (attribute.IsolationMode == IsolationModeEnum.None) return ("None", 1);
                        if (attribute.IsolationMode == IsolationModeEnum.Sandbox) return ("Sandbox", 2);
                        if (attribute.IsolationMode == IsolationModeEnum.Sandbox) return ("Sandbox", 2);
                    }
                }
                return ("Sandbox", 2);
            }
            (string name, int value) GetSourceType(string file)
            {
                var types = GetTypes(file);
                foreach (var type in types)
                {
                    if (XrmHelper.IsWorkflowType(type)) continue;
                    var attributes = GetCrmPluginRegistrationAttributes(type);
                    foreach (var attribute in attributes)
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
    <all-attributes />
    <filter type='and'>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
    </filter>
  </entity>
</fetch>";
            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count > 0 && rows.Entities.Count != 1)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Found more than 1 plugin assembly name {assemblyName}. Assemply deployed, but the deployment of this assembly stopped.");
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
            var text = string.Empty;
            var (name_IsolationMode, value_IsolationMode) = GetIsolationMode(file);
            var (name_SourceType, value_SourceType) = GetSourceType(file);
            plugin["sourcetype"] = new OptionSetValue(value_SourceType);
            plugin["isolationmode"] = new OptionSetValue(value_IsolationMode);
            text = $" [Isolation: {name_IsolationMode}, Source: {name_SourceType}]";
            if (rows.Entities.Count == 0)
            {
                var request = new CreateRequest
                {
                    Target = plugin
                };
                request.Parameters.Add("SolutionUniqueName", Json.solution);
                CliLog.Write(ConsoleColor.White, "|", SPACE);
                CliLog.WriteSuccess(ConsoleColor.White, CliAction.REGISTERED.Trim());
                CliLog.Write(ConsoleColor.White, " Assembly ", ConsoleColor.Cyan, assemblyName, ".dll");
                CliLog.WriteLine(ConsoleColor.Blue, text);
                var response = (CreateResponse)await ServiceClient.ExecuteAsync(request);
                pluginAssemblyId = response.id;
            }
            else
            {
                var oldContent = rows.Entities[0].GetAttributeValue<string>("content");
                pluginAssemblyId = rows.Entities[0].Id;
                if (XrmHelper.IsEqualsContent(oldContent, newContent))
                {
                    CliLog.Write(ConsoleColor.White, "|", SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, "Assembly ", ConsoleColor.Cyan, assemblyName, ".dll");
                    CliLog.WriteLine(ConsoleColor.Blue, text);
                }
                else
                {
                    plugin["pluginassemblyid"] = pluginAssemblyId;
                    var request = new UpdateRequest
                    {
                        Target = plugin
                    };
                    request.Parameters.Add("SolutionUniqueName", Json.solution);
                    CliLog.Write(ConsoleColor.White, "|", SPACE);
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.UPDATED.Trim());
                    CliLog.Write(ConsoleColor.White, " Assembly ", ConsoleColor.Cyan, assemblyName, ".dll");
                    CliLog.WriteLine(ConsoleColor.Blue, text);
                    try
                    {
                        await ServiceClient.ExecuteAsync(request);
                    }
                    catch (FaultException fe)
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"{fe.Message} Assemply deployed, but the deployment of this assembly stopped.");
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
                    CliLog.Write(ConsoleColor.White, "|", SPACE);
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.REGISTERED.Trim());
                    CliLog.WriteLine(ConsoleColor.White, " Bind Assembly ", ConsoleColor.Cyan, assemblyName, ".dll", ConsoleColor.White, " to Managed Identity App ", ConsoleColor.Cyan, applicationId);
                    await ServiceClient.ExecuteAsync(request2);
                }
                else if (rows.Entities[0].GetAttributeValue<EntityReference>("managedidentityid")?.Id == managedIdentityId)
                {
                    CliLog.Write(ConsoleColor.White, "|", SPACE);
                    CliLog.Write(ConsoleColor.Green, CliAction.DO_NOTHING.Trim());
                    CliLog.WriteLine(ConsoleColor.White, " Bind Assembly ", ConsoleColor.Cyan, assemblyName, ".dll", ConsoleColor.White, " to Managed Identity App ", ConsoleColor.Cyan, applicationId);
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
                    CliLog.Write(ConsoleColor.White, "|", SPACE);
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.UPDATED.Trim());
                    CliLog.WriteLine(ConsoleColor.White, " Bind Assembly ", ConsoleColor.Cyan, assemblyName, ".dll", ConsoleColor.White, " to Managed Identity App ", ConsoleColor.Cyan, applicationId);
                    await ServiceClient.ExecuteAsync(request2);
                }
            }
            return pluginAssemblyId;
        }
        private bool OK = false;
        private bool IS_MANAGED_IDENTITY = false;
        private string ERROR = string.Empty;
        private DynamcisCrmDevKitManagedIdentityAssemblyAttribute ManagedIdentityAttribute { get; set; }
        private (bool needSign, string error) IsNeedSignAssembly(string file)
        {
            var assembly = LoadAssemblyIntoCache(file);
            ManagedIdentityAttribute = GetDynamcisCrmDevkitManagedIdentityAssemblyAttribute(assembly);
            if (ManagedIdentityAttribute == null) return (false, string.Empty);
            if (string.IsNullOrEmpty(ManagedIdentityAttribute.TenantId))
            {
                return (false, $"Not found TenantId value from {nameof(DynamcisCrmDevKitManagedIdentityAssemblyAttribute)}");
            }
            if (string.IsNullOrEmpty(ManagedIdentityAttribute.ApplicationIds))
            {
                return (false, $"Not found ApplicationId value from {nameof(DynamcisCrmDevKitManagedIdentityAssemblyAttribute)}");
            }
            if (string.IsNullOrEmpty(ManagedIdentityAttribute.CertificateFile))
            {
                return (false, $"Not found CertificateFile value from {nameof(DynamcisCrmDevKitManagedIdentityAssemblyAttribute)}");
            }
            if (!ManagedIdentityAttribute.CertificateFile.EndsWith(".pfx"))
            {
                return (false, $"CertificateFile value should ends with '.pfx' from {nameof(DynamcisCrmDevKitManagedIdentityAssemblyAttribute)}");
            }
            var certificateFile = Path.Combine(CurrentDirectory, ManagedIdentityAttribute.CertificateFile);
            if (!File.Exists(certificateFile))
            {
                return (false, $"CertificateFile not exist: {certificateFile}");
            }
            return (true, string.Empty);
        }
        private string FindSignTool()
        {
            try
            {
                var programFilesX86 = Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86);
                var programFiles = Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles);
                var searchPaths = new List<string>
                {
                    Path.Combine(programFilesX86, "Windows Kits", "10", "bin"),
                    Path.Combine(programFiles, "Windows Kits", "10", "bin"),
                    Path.Combine(programFilesX86, "Windows Kits", "8.1", "bin"),
                    Path.Combine(programFiles, "Windows Kits", "8.1", "bin"),
                    Path.Combine(programFilesX86, "Windows Kits", "8.0", "bin"),
                    Path.Combine(programFiles, "Windows Kits", "8.0", "bin")
                };
                foreach (var searchPath in searchPaths)
                {
                    if (!Directory.Exists(searchPath)) continue;
                    if (searchPath.Contains("Windows Kits\\10"))
                    {
                        var versionDirs = Directory.GetDirectories(searchPath)
                            .Where(d => Directory.Exists(Path.Combine(d, "x64")) || Directory.Exists(Path.Combine(d, "x86")))
                            .OrderByDescending(d => d);
                        foreach (var versionDir in versionDirs)
                        {
                            var x64Path = Path.Combine(versionDir, "x64", "signtool.exe");
                            if (File.Exists(x64Path))
                            {
                                return x64Path;
                            }
                            var x86Path = Path.Combine(versionDir, "x86", "signtool.exe");
                            if (File.Exists(x86Path))
                            {
                                return x86Path;
                            }
                        }
                    }
                    else
                    {
                        var x64Path = Path.Combine(searchPath, "x64", "signtool.exe");
                        if (File.Exists(x64Path))
                        {
                            return x64Path;
                        }
                        var x86Path = Path.Combine(searchPath, "x86", "signtool.exe");
                        if (File.Exists(x86Path))
                        {
                            return x86Path;
                        }
                    }
                }
                CliLog.WriteLine(ConsoleColor.White, "|");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Cyan, "To sign assemblies, you need to install Windows SDK:");
                CliLog.WriteLine(ConsoleColor.White, "|");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.White, "Option 1: Install Windows 10/11 SDK (Recommended)");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "  Download: https://developer.microsoft.com/en-us/windows/downloads/windows-sdk/");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.White, "  During installation, select:", ConsoleColor.Yellow, " 'Windows SDK Signing Tools for Desktop Apps'");
                CliLog.WriteLine(ConsoleColor.White, "|");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.White, "Option 2: Install via Visual Studio Installer");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.White, "  1. Open Visual Studio Installer");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.White, "  2. Click 'Modify' on your Visual Studio installation");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.White, "  3. Go to 'Individual Components' tab");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.White, "  4. Search for and select:", ConsoleColor.Yellow, " 'Windows 10 SDK' or 'Windows 11 SDK'");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.White, "  5. Click 'Modify' to install");
                CliLog.WriteLine(ConsoleColor.White, "|");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.White, "Option 3: Install via Chocolatey (Package Manager)");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "  Run: ", ConsoleColor.Yellow, "choco install windows-sdk-10.0");
                CliLog.WriteLine(ConsoleColor.White, "|");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.White, "After installation, SignTool.exe will be located at:");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Gray, "  C:\\Program Files (x86)\\Windows Kits\\10\\bin\\{version}\\x64\\signtool.exe");
                return null;
            }
            catch (Exception ex)
            {
                CliLog.WriteLineError(ConsoleColor.Red, $"Error finding SignTool: {ex.Message}");
                return null;
            }
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
                    CliLog.Write(ConsoleColor.White, "|", SPACE);
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.REGISTERED.Trim());
                    CliLog.WriteLine(ConsoleColor.White, " Managed Identity App ", ConsoleColor.Cyan, $"{AppId}");
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
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, "Managed Identity App ", ConsoleColor.Cyan, $"{AppId}");
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
        private DynamcisCrmDevKitManagedIdentityAssemblyAttribute GetDynamcisCrmDevkitManagedIdentityAssemblyAttribute(Assembly assembly)
        {
            var attributeData = CustomAttributeData.GetCustomAttributes(assembly)
                .Where(data => data.AttributeType.FullName.Contains(nameof(DynamcisCrmDevKitManagedIdentityAssemblyAttribute)))
                .FirstOrDefault();
            if (attributeData == null) return null;
            var attribute = new DynamcisCrmDevKitManagedIdentityAssemblyAttribute();
            var properties = typeof(DynamcisCrmDevKitManagedIdentityAssemblyAttribute).GetProperties();
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
        private async Task<(bool ok, string error)> SignAssemblyAsync(string file, string certificatePath, string certificatePassword = null)
        {
            var signToolPath = FindSignTool();
            if (string.IsNullOrEmpty(signToolPath)) return (false, "SignTool.exe not found. Please install Windows SDK.");
            string arguments;
            if (string.IsNullOrEmpty(certificatePassword))
            {
                arguments = $"sign /f \"{certificatePath}\" /fd SHA256 /v \"{file}\"";
            }
            else
            {
                arguments = $"sign /f \"{certificatePath}\" /p \"{certificatePassword}\" /fd SHA256 /v \"{file}\"";
            }
            var processStartInfo = new ProcessStartInfo
            {
                FileName = signToolPath,
                Arguments = arguments,
                UseShellExecute = false,
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                CreateNoWindow = true
            };
            using (var process = new Process { StartInfo = processStartInfo })
            {
                var output = new System.Text.StringBuilder();
                var error = new System.Text.StringBuilder();
                process.OutputDataReceived += (sender, args) =>
                {
                    if (!string.IsNullOrEmpty(args.Data)) output.AppendLine(args.Data);
                };
                process.ErrorDataReceived += (sender, args) =>
                {
                    if (!string.IsNullOrEmpty(args.Data)) error.AppendLine(args.Data);
                };
                process.Start();
                process.BeginOutputReadLine();
                process.BeginErrorReadLine();
                await Task.Run(() => process.WaitForExit());
                if (process.ExitCode == 0)
                {
                    CliLog.Write(ConsoleColor.White, "|", SPACE);
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.SIGNED.Trim());
                    CliLog.Write(ConsoleColor.White, " Assembly ");
                    CliLog.WriteLine(ConsoleColor.Cyan, Path.GetFileName(file));
                    return (true, string.Empty);
                }
                else
                {
                    return (false, $"{error}");
                }
            }
        }
        private async Task<(bool ok, string error)> SignPackageAsync(string file, string certificatePath, string certificatePassword = null)
        {
            var arguments = $"nuget sign \"{file}\" --certificate-path \"{certificatePath}\" --certificate-password \"{certificatePassword}\" --timestamper \"http://timestamp.digicert.com\"";
            var processStartInfo = new ProcessStartInfo
            {
                FileName = "dotnet",
                Arguments = arguments,
                WorkingDirectory = Path.GetDirectoryName(file),
                UseShellExecute = false,
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                CreateNoWindow = true
            };
            using (var process = new Process { StartInfo = processStartInfo })
            {
                process.Start();
                string output = await process.StandardOutput.ReadToEndAsync();
                string error = await process.StandardError.ReadToEndAsync();
                await Task.Run(() => process.WaitForExit());
                if (process.ExitCode == 0)
                {
                    CliLog.Write(ConsoleColor.White, "|", SPACE);
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.SIGNED.Trim());
                    CliLog.Write(ConsoleColor.White, " Package ");
                    CliLog.WriteLine(ConsoleColor.Cyan, Path.GetFileName(file));
                    return (true, string.Empty);
                }
                else
                {
                    var outputs = output.Trim().Split("\n".ToCharArray());
                    foreach(var o in outputs)
                    {
                        if (o.StartsWith("error: NU3001:")) return (false, "Package already contains a signature. Please remove the existing signature by 'Clean' and then 'Rebuild' project.");
                    }
                    return (false, $"{output}");
                }
            }
        }
        private const string SPACE = "  ";
        private readonly Dictionary<string, Assembly> _assemblyCache = new Dictionary<string, Assembly>(StringComparer.OrdinalIgnoreCase);
        public bool IsOk { get; set; }
        public Guid SolutionId { get; set; }
        public string SolutionPrefix { get; set; }
        public string CurrentDirectory { get; set; }
        public string TaskType { get; set; }
        public ServiceClient ServiceClient { get; set; }
        public CommandLineArgs Arg { get; set; }
        private JsonServer Json { get; }
        private string CurrentFolder => $"{CurrentDirectory}\\{Json.folder}";
        public async Task<bool> IsValidAsync()
        {
            if (Json == null)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'profile' not found: '{Arg.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.folder == "???" || (Json.folder != null && Json?.folder?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'folder' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.solution == "???" || (Json.solution != null && Json?.solution?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            (IsOk, SolutionId, SolutionPrefix) = await XrmHelper.IsExistSolutionAsync(ServiceClient, Json.solution);
            if (!IsOk)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} solution '{Json.solution}' not exist");
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
            var folder = $"{CurrentFolder}\\DynamicsCrm.DevKit.Cli.2";
            Helper.TryDeleteDirectory(folder);
            ExtractZip(packageArchiveReader, folder);
            var files = Directory.GetFiles(folder).ToList();
            var fileNameWithoutExtention = Path.GetFileNameWithoutExtension(file);
            var nugetVerion = packageArchiveReader.NuspecReader.GetVersion().ToFullString();
            fileNameWithoutExtention = fileNameWithoutExtention.Substring(0, fileNameWithoutExtention.Length - nugetVerion.Length);
            files = files.Where(x => x.Contains(fileNameWithoutExtention)).ToList();
            if (files.Count == 1) return files.First();
            return string.Empty;
        }
        private async Task DeployDllAsync(string file, DeployFileType deployFileType = DeployFileType.Dll)
        {
            var types = GetTypes(file);
            if (!await IsValidTypesAsync(file, types, deployFileType)) return;
            await DeployFileAsync(file, types, deployFileType);
        }
        private async Task DeployFileAsync(string file, List<TypeInfo> types, DeployFileType deployFileType)
        {
            var dataProviderEvents = new List<DataProviderEvent>();
            var pluginAssemblyId = await DeployAssemblyAsync(file, deployFileType);
            if (pluginAssemblyId == null) return;
            if (Arg?.OnlyUpdateAssembly?.Length > 0)
            {
                CliLog.Write(ConsoleColor.White, "|", SPACE);
                CliLog.WriteSuccess(ConsoleColor.White, CliAction.FLAG.Trim());
                CliLog.Write(ConsoleColor.White, " OnlyUpdateAssembly ");
                CliLog.WriteLine(ConsoleColor.Cyan, "true");
                return;
            }
            var sortedTypes = types.OrderBy(type =>
            {
                var attributes = GetCrmPluginRegistrationAttributes(type);
                if (attributes.Count == 0) return int.MaxValue;
                var pluginType = attributes[0].PluginType;
                return pluginType switch
                {
                    PluginType.Plugin => 0,        // First priority
                    PluginType.CustomAction => 1,  // Second priority
                    PluginType.CustomApi => 2,     // Third priority
                    PluginType.Workflow => 3,      // Fourth priority
                    PluginType.DataProvider => 4,  // Fifth priority
                    _ => int.MaxValue               // Unknown types at the end
                };
            }).ThenBy(type =>
            {
                var attributes = GetCrmPluginRegistrationAttributes(type);
                return attributes.Count > 0 ? attributes[0].Name : type.FullName;
            }).ToList();
            foreach (var type in sortedTypes)
            {
                var attributes = GetCrmPluginRegistrationAttributes(type);
                if (attributes[0].Unregister)
                {
                    var error = await UnregisterPluginTypeAsync(pluginAssemblyId.Value, type, attributes[0], deployFileType);
                    if (error) return;
                    CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE);
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.UNREGISTERED.Trim());
                    CliLog.Write(ConsoleColor.White, $" Type ", ConsoleColor.Blue, attributes[0].PluginType, " ", ConsoleColor.Cyan, type.FullName);
                    CliLog.WriteLine();
                    continue;
                }
                var pluginTypeId = await DeployPluginTypeAsync(pluginAssemblyId.Value, type, attributes[0], deployFileType);
                if (pluginTypeId == null) return;
                if (XrmHelper.IsWorkflowType(type)) continue;
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
                                if (IsSupportPluginImage(attribute))
                                {
                                    var pluginImageId = await DeployPluginImageAsync(pluginStepId.Value, attribute);
                                    if (pluginImageId == null) return;
                                }
                                else
                                {
                                    CliLog.WriteLineError(ConsoleColor.Yellow, $"The message {attribute.Message} of {attribute.Name} not support Image. Assemply deployed, but the deployment of this assembly stopped.");
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
                            CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, $"Step ", ConsoleColor.Blue, attribute.Message, " ", ConsoleColor.Cyan, attribute.Name, ConsoleColor.Blue, $" [MainOperation, Synchronous]");
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
                CliLog.WriteLineError(ConsoleColor.Yellow, $"DataSource {dataSource} with prefix {SolutionPrefix.ToLower()} not exist ({checkDataSource}). Assemply deployed, but the deployment of this assembly stopped.");
                return false;
            }
            var countRetrieve = dataProviderEvents.Count(x => x.Message == "Retrieve" && x.DataSource == dataSource);
            if (countRetrieve != 0 && countRetrieve != 1)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"Multiple message Retrieve found with data source {dataSource} ({checkDataSource}). Assemply deployed, but the deployment of this assembly stopped.");
                return false;
            }
            var countRetrieveMultiple = dataProviderEvents.Count(x => x.Message == "RetrieveMultiple" && x.DataSource == dataSource);
            if (countRetrieveMultiple != 0 && countRetrieveMultiple != 1)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"Multiple message RetrieveMultiple found with data source {dataSource} ({checkDataSource}). Assemply deployed, but the deployment of this assembly stopped.");
                return false;
            }
            if (await XrmHelper.IsVirtualTableSupportCRUDAsync(ServiceClient))
            {
                var countCreate = dataProviderEvents.Count(x => x.Message == "Create" && x.DataSource == dataSource);
                if (countCreate != 0 && countCreate != 1)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Multiple message Create found with data source {dataSource} ({checkDataSource}). Assemply deployed, but the deployment of this assembly stopped.");
                    return false;
                }
                var countUpdate = dataProviderEvents.Count(x => XrmHelper.IsMessageUpdate(x.Message) && x.DataSource == dataSource);
                if (countUpdate != 0 && countUpdate != 1)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Multiple message Update found with data source {dataSource} ({checkDataSource}). Assemply deployed, but the deployment of this assembly stopped.");
                    return false;
                }
                var countDelete = dataProviderEvents.Count(x => x.Message == "Delete" && x.DataSource == dataSource);
                if (countDelete != 0 && countDelete != 1)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Multiple message Delete found with data source {dataSource} ({checkDataSource}). Assemply deployed, but the deployment of this assembly stopped.");
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
                var update = dataProviderEvents.Where(x => XrmHelper.IsMessageUpdate(x.Message) && x.DataSource == dataSource).FirstOrDefault();
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
                CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE);
                CliLog.WriteSuccess(ConsoleColor.White, CliAction.REGISTERED.Trim());
                CliLog.WriteLine(ConsoleColor.White, " Type ", ConsoleColor.Blue, $"{PluginType.DataSource} ", ConsoleColor.Cyan, $"{logicalNameDataSource}", ConsoleColor.White, " linked with events ", ConsoleColor.Cyan, events);
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
                    CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE);
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.UPDATED.Trim());
                    CliLog.WriteLine(ConsoleColor.White, " Type ", ConsoleColor.Blue, $"{PluginType.DataSource} ", ConsoleColor.Cyan, $"{logicalNameDataSource}", ConsoleColor.White, " linked with events ", ConsoleColor.Cyan, events);
                    //CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, $"Step ", ConsoleColor.Blue, attribute.Message, " ", ConsoleColor.Cyan, attribute.Name, ConsoleColor.Blue, $" [{attribute.Stage}, {attribute.ExecutionMode}]");
                    await ServiceClient.ExecuteAsync(request);
                }
                else
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, "Type ", ConsoleColor.Blue, $"{PluginType.DataSource} ", ConsoleColor.Cyan, $"{logicalNameDataSource}", ConsoleColor.White, " linked with events ", ConsoleColor.Cyan, events);
                }
            }
        }
        private async Task DeployCustomApiStepAsync(Guid pluginTypeId, string pluginTypeName, CrmPluginRegistrationAttribute attribute)
        {
            var fetchData = new
            {
                uniquename = attribute.Message
            };
            var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='customapi'>
    <attribute name='customapiid'/>
    <attribute name='plugintypeid'/>
    <filter type='and'>
      <condition attribute='uniquename' operator='eq' value='{fetchData.uniquename}'/>
    </filter>
  </entity>
</fetch>
";
            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"Custom Api with message {attribute.Message} not found. Assemply deployed, but the deployment of this assembly stopped.");
                return;
            }
            if (rows.Entities[0].GetAttributeValue<EntityReference>("plugintypeid")?.Id.ToString("D") == pluginTypeId.ToString("D"))
            {
                if (attribute.Action == PluginStepOperationEnum.Activate)
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, "Step ", ConsoleColor.Blue, attribute.Message, ConsoleColor.White, " ", ConsoleColor.Cyan, pluginTypeName, ConsoleColor.Blue, $" [MainOperation, Synchronous]");
                else
                {
                    var update = new Entity("customapi", rows.Entities[0].Id);
                    update["plugintypeid"] = null;
                    await ServiceClient.UpdateAsync(update);
                }
            }
            else
            {
                if (attribute.Action == PluginStepOperationEnum.Deactivate)
                {
                    CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING.Trim(), " ");
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.DEACTIVATED.Trim());
                    CliLog.Write(ConsoleColor.White, " Step ", ConsoleColor.Blue, attribute.Message, ConsoleColor.White, " ", ConsoleColor.Cyan, pluginTypeName, ConsoleColor.Blue, $" [MainOperation, Synchronous]");
                    CliLog.WriteLine();
                }
                else
                {
                    CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE);
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.REGISTERED.Trim());
                    CliLog.WriteLine(ConsoleColor.White, " Step ", ConsoleColor.Blue, attribute.Message, ConsoleColor.White, " ", ConsoleColor.Cyan, pluginTypeName, ConsoleColor.Blue, $" [MainOperation, Synchronous]");
                    var update = new Entity("customapi", rows.Entities[0].Id);
                    update["plugintypeid"] = new EntityReference("plugintype", pluginTypeId);
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
            var fetchData = new
            {
                name = imageName,
                sdkmessageprocessingstepid = pluginStepId,
                imagetype = (int)imageType
            };
            var fetchXml = $@"
<fetch>
  <entity name='sdkmessageprocessingstepimage'>
    <attribute name='sdkmessageprocessingstepimageid' />
    <attribute name='name' />
    <attribute name='entityalias' />
    <attribute name='attributes' />
    <attribute name='imagetype' />
    <filter type='and'>
      <condition attribute='sdkmessageprocessingstepid' operator='eq' value='{fetchData.sdkmessageprocessingstepid}'/>
      <condition attribute='imagetype' operator='eq' value='{fetchData.imagetype}'/>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
    </filter>
  </entity>
</fetch>";
            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count > 0 && rows.Entities.Count != 1)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Found more than 1 plugin image name {imageName}. Assemply deployed, but the deployment of this assembly stopped.");
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
                ["messagepropertyname"] = XrmHelper.GetMessagePropertyName(message)
            };
            if (rows.Entities.Count == 0)
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
                    CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE);
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.REGISTERED.Trim());
                    CliLog.WriteLine(ConsoleColor.White, " Image ", ConsoleColor.Blue, imageType, ConsoleColor.White, $", Name = ", ConsoleColor.Green, imageName, ConsoleColor.White, $", Alias = ", ConsoleColor.Green, imageAliasName, ConsoleColor.White, ", Image Fields = ", ConsoleColor.Green, imageAttributes ?? "*");
                    try
                    {
                        var response = (CreateResponse)await ServiceClient.ExecuteAsync(request);
                        return response.id;
                    }
                    catch (FaultException fe)
                    {
                        if (fe.Message.Contains("entity doesn't contain attribute with"))
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Step {pluginStepName} have invalid {imageType} Attribute {imageAttributes}. Assemply deployed, but the deployment of this assembly stopped.");
                        }
                        else if (fe.Message.Contains("does not support this image type") || fe.Message.Contains("does not support Post Image"))
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Step {pluginStepName} does not support this image type {imageType}. Assemply deployed, but the deployment of this assembly stopped.");
                        }
                        else
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"{fe.Message} Assemply deployed, but the deployment of this assembly stopped.");
                        }
                        return Guid.Empty;
                    }
                    catch (Exception e)
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"{e.Message} Assemply deployed, but the deployment of this assembly stopped.");
                        return Guid.Empty;
                    }
                }
            }
            else
            {
                var row = rows.Entities[0];
                var name = row.GetAttributeValue<string>("name");
                var entityalias = row.GetAttributeValue<string>("entityalias");
                var attributes = row.GetAttributeValue<string>("attributes");
                var imagetype = row.GetAttributeValue<OptionSetValue>("imagetype").Value;
                if (name == imageName &&
                    entityalias == imageAliasName &&
                    attributes == (imageAttributes.Trim() == "*" ? null : imageAttributes) &&
                    imagetype == (int)imageType)
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, "Image ", ConsoleColor.Blue, imageType, ConsoleColor.White, $", Name = ", ConsoleColor.Green, imageName, ConsoleColor.White, $", Alias = ", ConsoleColor.Green, imageAliasName, ConsoleColor.White, ", Image Fields = ", ConsoleColor.Green, imageAttributes ?? "*");
                }
                else
                {
                    if (attributes == null || (attributes != (imageAttributes.Trim() == "*" ? null : imageAttributes) && imageAttributes.Length != 0))
                    {
                        pluginImage["sdkmessageprocessingstepimageid"] = rows.Entities[0].Id;
                        CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE);
                        CliLog.WriteSuccess(ConsoleColor.White, CliAction.UPDATED.Trim());
                        CliLog.WriteLine(ConsoleColor.White, " Image ", ConsoleColor.Blue, imageType, ConsoleColor.White, $", Name = ", ConsoleColor.Green, imageName, ConsoleColor.White, $", Alias = ", ConsoleColor.Green, imageAliasName, ConsoleColor.White, ", Image Fields = ", ConsoleColor.Green, imageAttributes ?? "*");
                    }
                    else if (imageAttributes.Length == 0)
                    {
                        CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE);
                        CliLog.WriteSuccess(ConsoleColor.White, CliAction.DELETED.Trim());
                        CliLog.WriteLine(ConsoleColor.White, " Image ", ConsoleColor.Blue, imageType, ConsoleColor.White, $", Name = ", ConsoleColor.Green, imageName, ConsoleColor.White, $", Alias = ", ConsoleColor.Green, imageAliasName, ConsoleColor.White, ", Image Fields = ", ConsoleColor.Green, imageAttributes ?? "*");
                        await ServiceClient.DeleteAsync("sdkmessageprocessingstepimage", rows.Entities[0].Id);
                        return Guid.NewGuid();
                    }
                    try
                    {
                        await ServiceClient.UpdateAsync(pluginImage);
                    }
                    catch (FaultException fe)
                    {
                        if (fe.Message.Contains("entity doesn't contain attribute with"))
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Step {pluginStepName} have invalid {imageType} Attribute {imageAttributes}. Assemply deployed, but the deployment of this assembly stopped.");
                        }
                        if (fe.Message.Contains("does not support this image type") || fe.Message.Contains("does not support Post Image"))
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Step {pluginStepName} does not support this image type {imageType}. Assemply deployed, but the deployment of this assembly stopped.");
                        }
                        return Guid.Empty;
                    }
                    catch (Exception e)
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"{e.Message} Assemply deployed, but the deployment of this assembly stopped.");
                        return Guid.Empty;
                    }
                }
                return rows.Entities[0].Id;
            }
        }
        private bool IsSupportPluginImage(CrmPluginRegistrationAttribute attribute)
        {
            return (attribute?.Message?.ToLower()) switch
            {
                "assign" or
                "create" or
                "delete" or
                "deliverincoming" or
                "deliverpromote" or
                "merge" or
                "route" or
                "send" or
                "setstate" or
                "setstatedynamicentity" or
                "update" or
                "createmultiple" or
                "updatemultiple" or
                "executeworkflow" => true,
                _ => false,
            };
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
            if (XrmHelper.IsMessageUpdate(attribute?.Message))
            {
                if (attribute?.FilteringAttributes?.Trim().Length == 0)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{type.FullName} The {attribute?.Message} message need provide FilteringAttributes value. Assemply deployed, but the deployment of this assembly stopped.");
                    return null;
                }
                if (attribute?.FilteringAttributes.Trim() == "*")
                {
                    attribute.FilteringAttributes = null;
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
            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            var SecureConfigurationAction = string.Empty;
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count > 0 && rows.Entities.Count != 1)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Found more than 1 step name {type.FullName}. Assemply deployed, but the deployment of this assembly stopped.");
                    return null;
                }
            }
            var sdkMessageFilterId = await XrmHelper.GetSdkMessageFilterIdAsync(ServiceClient, attribute.EntityLogicalName, attribute.Message);
            var sdkMessageId = await XrmHelper.GetSdkMessageIdAsync(ServiceClient, attribute.EntityLogicalName, attribute.Message);
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
            if (rows.Entities.Count == 0)
            {
                if (attribute.SecureConfiguration?.Trim().Length > 0)
                {
                    var secureEntity = new Entity("sdkmessageprocessingstepsecureconfig");
                    secureEntity["secureconfig"] = attribute.SecureConfiguration;
                    var sdkmessageprocessingstepsecureconfigid = await ServiceClient.CreateAsync(secureEntity);
                    SecureConfigurationAction = CliAction.REGISTERED;
                    pluginStep["sdkmessageprocessingstepsecureconfigid"] = new EntityReference("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid);
                }
                var request = new CreateRequest
                {
                    Target = pluginStep
                };
                request.Parameters.Add("SolutionUniqueName", Json.solution);
                CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE);
                CliLog.WriteSuccess(ConsoleColor.White, CliAction.REGISTERED.Trim());
                if (attribute.Action == PluginStepOperationEnum.Deactivate)
                {
                    CliLog.Write(" ");
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.DEACTIVATED.Trim());
                }
                CliLog.WriteLine(ConsoleColor.White, $" Step ", ConsoleColor.Blue, attribute.Message, " ", ConsoleColor.Cyan, attribute.Name, ConsoleColor.Blue, $" [{attribute.Stage}, {attribute.ExecutionMode}]");
                CliLogSecureUnsecure();
                CliLogUpdateFields();
                try
                {
                    var response = (CreateResponse)await ServiceClient.ExecuteAsync(request);
                    pluginStepId = response.id;
                }
                catch (FaultException fe)
                {
                    if (fe.Message.Contains("The dependent component Attribute "))
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"Step {attribute.Name} have invalid Image Attribute {attribute.FilteringAttributes}. Assemply deployed, but the deployment of this assembly stopped.");
                        return null;
                    }
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Step {attribute.Name} register failed: {fe.Message.TrimEnd(".".ToCharArray())}. Assemply deployed, but the deployment of this assembly stopped.");
                    return null;
                }
                catch (Exception e)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{e.Message.TrimEnd(".".ToCharArray())}. Assemply deployed, but the deployment of this assembly stopped.");
                    return null;
                }
            }
            else
            {
                pluginStepId = rows.Entities[0].Id;
                pluginStep["sdkmessageprocessingstepid"] = pluginStepId.Value;
                var hasChangedPluginStep = false;
                var secureEntity = await XrmHelper.GetSecureEntityAsync(ServiceClient, pluginStepId.Value);
                if (attribute.SecureConfiguration?.Trim().Length == 0 && secureEntity != null)
                {
                    var sdkmessageprocessingstepsecureconfigid = (Guid?)secureEntity.GetAttributeValue<AliasedValue>("s.sdkmessageprocessingstepsecureconfigid")?.Value;
                    if (sdkmessageprocessingstepsecureconfigid.HasValue)
                    {
                        var u = new Entity("sdkmessageprocessingstep");
                        u["sdkmessageprocessingstepid"] = pluginStepId.Value;
                        u["sdkmessageprocessingstepsecureconfigid"] = null;
                        await ServiceClient.UpdateAsync(u);
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
                        var sdkmessageprocessingstepsecureconfigid2 = await ServiceClient.CreateAsync(secureEntity2);
                        SecureConfigurationAction = CliAction.REGISTERED;
                        var u = new Entity("sdkmessageprocessingstep");
                        u["sdkmessageprocessingstepid"] = pluginStepId.Value;
                        u["sdkmessageprocessingstepsecureconfigid"] = new EntityReference("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid2);
                        await ServiceClient.UpdateAsync(u);
                    }
                }
                else if (attribute.SecureConfiguration?.Trim().Length > 0 && secureEntity == null)
                {
                    var create = new Entity("sdkmessageprocessingstepsecureconfig");
                    create["secureconfig"] = attribute.SecureConfiguration;
                    var sdkmessageprocessingstepsecureconfigid = await ServiceClient.CreateAsync(secureEntity);
                    SecureConfigurationAction = CliAction.REGISTERED;
                    pluginStep["sdkmessageprocessingstepsecureconfigid"] = new EntityReference("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid);
                    hasChangedPluginStep = true;
                }
                if (!IsChangedPluginStep(hasChangedPluginStep, rows.Entities[0], pluginStep, attribute))
                {
                    if (attribute.Action == PluginStepOperationEnum.Activate)
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, $"Step ", ConsoleColor.Blue, attribute.Message, " ", ConsoleColor.Cyan, attribute.Name, ConsoleColor.Blue, $" [{attribute.Stage}, {attribute.ExecutionMode}]");
                        CliLogSecureUnsecure();
                        CliLogUpdateFields();
                    }
                    else
                    {
                        CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE);
                        CliLog.WriteSuccess(ConsoleColor.White, CliAction.DEACTIVATED.Trim());
                        CliLog.Write(ConsoleColor.White, $" Step ", ConsoleColor.Blue, attribute.Message, " ", ConsoleColor.Cyan, attribute.Name, ConsoleColor.Blue, $" [{attribute.Stage}, {attribute.ExecutionMode}]");
                        CliLog.WriteLine();
                        CliLogSecureUnsecure();
                        CliLogUpdateFields();
                    }
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
                        CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE);
                        CliLog.WriteSuccess(ConsoleColor.White, CliAction.UPDATED.Trim());
                        if (
                            rows.Entities.Count == 1 &&
                            rows?.Entities?[0]?.GetAttributeValue<OptionSetValue>("statecode")?.Value == (int)PluginStepOperationEnum.Deactivate  &&
                            attribute.Action == PluginStepOperationEnum.Activate)
                        {
                            CliLog.Write(" ");
                            CliLog.WriteSuccess(ConsoleColor.White, CliAction.ACTIVATED.Trim());
                        }
                        CliLog.WriteLine(ConsoleColor.White, $" Step ", ConsoleColor.Blue, attribute.Message, " ", ConsoleColor.Cyan, attribute.Name, ConsoleColor.Blue, $" [{attribute.Stage}, {attribute.ExecutionMode}]");
                        CliLogSecureUnsecure();
                        CliLogUpdateFields();
                    }
                    else
                    {
                        CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE);
                        CliLog.WriteSuccess(ConsoleColor.White, CliAction.UPDATED.Trim());
                        if (
                            rows.Entities.Count == 1 &&
                            rows?.Entities?[0]?.GetAttributeValue<OptionSetValue>("statecode")?.Value == (int)PluginStepOperationEnum.Activate &&
                            attribute.Action == PluginStepOperationEnum.Deactivate)
                        {
                            CliLog.Write(" ");
                            CliLog.WriteSuccess(ConsoleColor.White, CliAction.DEACTIVATED.Trim());
                        }
                        CliLog.WriteLine(ConsoleColor.White, $" Step ", ConsoleColor.Blue, attribute.Message, " ", ConsoleColor.Cyan, attribute.Name, ConsoleColor.Blue, $" [{attribute.Stage}, {attribute.ExecutionMode}]");
                        CliLogSecureUnsecure();
                        CliLogUpdateFields();
                    }
                    try
                    {
                        await ServiceClient.ExecuteAsync(request);
                    }
                    catch (FaultException fe)
                    {
                        if (fe.Message.Contains("The dependent component Attribute "))
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Step {attribute.Name} have invalid Image Attribute {attribute.FilteringAttributes}. Assemply deployed, but the deployment of this assembly stopped.");
                        }
                        return null;
                    }
                    catch (Exception e)
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"{e.Message} Assemply deployed, but the deployment of this assembly stopped.");
                        return null;
                    }
                }
            }

            if (
                (
                    (rows.Entities.Count == 0) &&
                    (attribute.Action == PluginStepOperationEnum.Deactivate)
                )
                ||
                (
                    (rows.Entities.Count == 1 && rows?.Entities?[0]?.GetAttributeValue<OptionSetValue>("statecode")?.Value == 0 && attribute.Action == PluginStepOperationEnum.Deactivate) ||
                    (rows.Entities.Count == 1 && rows?.Entities?[0]?.GetAttributeValue<OptionSetValue>("statecode")?.Value == null && attribute.Action == PluginStepOperationEnum.Deactivate)
                )
               )
            {
                var update = new Entity("sdkmessageprocessingstep", pluginStepId.Value);
                update["statecode"] = new OptionSetValue(1);
                update["statuscode"] = new OptionSetValue(2);
                await ServiceClient.UpdateAsync(update);
                //CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE);
                //CliLog.WriteSuccess(ConsoleColor.White, CliAction.DEACTIVATED.Trim());
                //CliLog.WriteLine(ConsoleColor.White, $" Step ", ConsoleColor.Blue, attribute.Message, " ", ConsoleColor.Cyan, attribute.Name, ConsoleColor.Blue, $" [{attribute.Stage}, {attribute.ExecutionMode}]");
            }
            else if (
                rows.Entities.Count > 0 &&
                rows?.Entities?[0]?.GetAttributeValue<OptionSetValue>("statecode")?.Value == 1 &&
                attribute.Action == PluginStepOperationEnum.Activate)
            {
                var update = new Entity("sdkmessageprocessingstep", pluginStepId.Value);
                update["statecode"] = new OptionSetValue(0);
                update["statuscode"] = new OptionSetValue(1);
                await ServiceClient.UpdateAsync(update);
                //CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE);
                //CliLog.WriteSuccess(ConsoleColor.White, CliAction.ACTIVATED.Trim());
                //CliLog.WriteLine(ConsoleColor.White, $" Step ", ConsoleColor.Blue, attribute.Message, " ", ConsoleColor.Cyan, attribute.Name, ConsoleColor.Blue, $" [{attribute.Stage}, {attribute.ExecutionMode}]");
            }
            return pluginStepId;

            void CliLogUpdateFields()
            {
                if (XrmHelper.IsMessageUpdate(attribute.Message))
                {
                    if (rows.Entities.Count == 0)
                    {
                        CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE);
                        CliLog.WriteSuccess(ConsoleColor.White, CliAction.REGISTERED.Trim());
                        CliLog.WriteLine(ConsoleColor.White, " Update Fields: ", ConsoleColor.Green, attribute.FilteringAttributes ?? "*");
                    }
                    else
                    {
                        if (rows.Entities[0].GetAttributeValue<string>("filteringattributes") == attribute.FilteringAttributes?.Replace(" ", ""))
                            CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, "Update Fields: ", ConsoleColor.Green, attribute.FilteringAttributes ?? "*");
                        else
                        {
                            CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE);
                            CliLog.WriteSuccess(ConsoleColor.White, CliAction.UPDATED.Trim());
                            CliLog.WriteLine(ConsoleColor.White, " Update Fields: ", ConsoleColor.Green, attribute.FilteringAttributes ?? "*"); ;
                        }
                    }
                }
            }
            void CliLogSecureUnsecure()
            {
                //SecureConfiguration
                if (SecureConfigurationAction == CliAction.DO_NOTHING)
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, "Secure Configuration = ", ConsoleColor.Green, attribute.SecureConfiguration);
                }
                else if (!string.IsNullOrWhiteSpace(SecureConfigurationAction))
                {
                    if (string.IsNullOrWhiteSpace(attribute.SecureConfiguration))
                    {
                        CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE);
                        CliLog.WriteSuccess(ConsoleColor.White, CliAction.UNREGISTERED.Trim());
                        CliLog.WriteLine(ConsoleColor.White, " Secure Configuration", ConsoleColor.Green, attribute.SecureConfiguration);
                    }
                    else
                    {
                        CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE);
                        CliLog.WriteSuccess(ConsoleColor.White, SecureConfigurationAction.Trim());
                        CliLog.WriteLine(ConsoleColor.White, " Secure Configuration = ", ConsoleColor.Green, attribute.SecureConfiguration);
                    }
                }
                //UnSecureConfiguration
                if (rows.Entities.Count == 0 && !string.IsNullOrWhiteSpace(attribute.UnSecureConfiguration))
                {
                    CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE);
                    CliLog.WriteSuccess(ConsoleColor.White, CliAction.REGISTERED.Trim());
                    CliLog.WriteLine(ConsoleColor.White, " UnSecure Configuration = ", ConsoleColor.Green, attribute.UnSecureConfiguration);
                }
                else
                {
                    if (rows.Entities.Count == 1 && rows.Entities[0].GetAttributeValue<string>("configuration") == null && !string.IsNullOrWhiteSpace(attribute.UnSecureConfiguration))
                    {
                        CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE);
                        CliLog.WriteSuccess(ConsoleColor.White, CliAction.REGISTERED.Trim());
                        CliLog.WriteLine(ConsoleColor.White, " UnSecure Configuration = ", ConsoleColor.Green, attribute.UnSecureConfiguration);
                    }
                    else if (rows.Entities.Count == 1 && rows.Entities[0].GetAttributeValue<string>("configuration") == attribute.UnSecureConfiguration)
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, "UnSecure Configuration = ", ConsoleColor.Green, attribute.UnSecureConfiguration);
                    }
                    else if (rows.Entities.Count == 1 && rows.Entities[0].GetAttributeValue<string>("configuration") != null && string.IsNullOrEmpty(attribute.UnSecureConfiguration))
                    {
                        CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE);
                        CliLog.WriteSuccess(ConsoleColor.White, CliAction.UNREGISTERED.Trim());
                        CliLog.WriteLine(ConsoleColor.White, " UnSecure Configuration");
                    }
                    else if (rows.Entities.Count == 1 && rows.Entities[0].GetAttributeValue<string>("configuration") != null && !string.IsNullOrEmpty(attribute.UnSecureConfiguration))
                    {
                        CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE, SPACE, SPACE);
                        CliLog.WriteSuccess(ConsoleColor.White, CliAction.UPDATED.Trim());
                        CliLog.WriteLine(ConsoleColor.White, " UnSecure Configuration = ", ConsoleColor.Green, attribute.UnSecureConfiguration);
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
        private async Task<bool> UnregisterPluginTypeAsync(Guid pluginAssemblyId, TypeInfo type, CrmPluginRegistrationAttribute attribute, DeployFileType deployFileType)
        {
            var fetchData = new
            {
                typename = type.FullName
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
            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return false ;
            var pluginTypeId = rows.Entities[0].GetAttributeValue<Guid>("plugintypeid");
            try
            {
                await DeletePluginStepsAsync();
                await ServiceClient.DeleteAsync("plugintype", pluginTypeId);
            }
            catch(FaultException fe)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"Unregister {type.FullName} failed: {fe.Message} Assemply deployed, but the deployment of this assembly stopped.");
                return true;
            }
            return false;
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
                var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
                foreach (var row in rows.Entities)
                {
                    await ServiceClient.DeleteAsync("sdkmessageprocessingstep", row.Id);
                }
            }
        }
        private async Task<Guid?> DeployPluginTypeAsync(Guid pluginAssemblyId, TypeInfo type, CrmPluginRegistrationAttribute attribute, DeployFileType deployFileType)
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
            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count > 0 && rows.Entities.Count != 1)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Found more than 1 type name {type.FullName}. Assemply deployed, but the deployment of this assembly stopped.");
                    return null;
                }
                if (deployFileType == DeployFileType.Nuget)
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, "Type ", ConsoleColor.Blue, attribute.PluginType, " ", ConsoleColor.Cyan, type.FullName);
                    return rows.Entities[0].Id;
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
            if (string.IsNullOrWhiteSpace(attribute.Description))
            {
                if (rows.Entities.Count == 0 || (rows.Entities.Count > 0 && string.IsNullOrWhiteSpace(rows.Entities[0].GetAttributeValue<string>("description"))))
                {
                    pluginType["description"] = Const.WindowTitle;
                }
            }
            else
            {
                pluginType["description"] = attribute.Description;
            }
            if (rows.Entities.Count == 0)
            {
                var request = new CreateRequest
                {
                    Target = pluginType
                };
                request.Parameters.Add("SolutionUniqueName", Json.solution);
                CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE);
                CliLog.WriteSuccess(ConsoleColor.White, CliAction.REGISTERED.Trim());
                CliLog.WriteLine(ConsoleColor.White, " Type ", ConsoleColor.Blue, attribute.PluginType, " ", ConsoleColor.Cyan, type.FullName);
                var response = (CreateResponse)await ServiceClient.ExecuteAsync(request);
                return response.id;
            }
            else
            {
                pluginType["plugintypeid"] = rows.Entities[0].Id;
                var request = new UpdateRequest
                {
                    Target = pluginType
                };
                request.Parameters.Add("SolutionUniqueName", Json.solution);
                try
                {
                    await ServiceClient.ExecuteAsync(request);
                }
                catch (FaultException fe)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{fe.Message} Assemply deployed, but the deployment of this assembly stopped.");
                    return null;
                }
                catch(Exception ee)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"{ee.Message} Assemply deployed, but the deployment of this assembly stopped.");
                    return null;
                }
                if (XrmHelper.IsWorkflowType(type))
                {
                    var old = rows.Entities[0].GetAttributeValue<string>("customworkflowactivityinfo");
                    var @new = (await ServiceClient.RetrieveAsync("plugintype", rows.Entities[0].Id, new ColumnSet("customworkflowactivityinfo"))).GetAttributeValue<string>("customworkflowactivityinfo");
                    if (XrmHelper.IsEqualsWorkflowType(old, @new))
                    {
                        CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, ConsoleColor.White, "Type ", ConsoleColor.Blue, attribute.PluginType, " ",ConsoleColor.Cyan, type.FullName);
                    }
                    else
                    {
                        CliLog.Write(ConsoleColor.White, "|", SPACE, SPACE);
                        CliLog.WriteSuccess(ConsoleColor.White, CliAction.UPDATED.Trim());
                        CliLog.WriteLine(ConsoleColor.White, " Type ", ConsoleColor.Blue, attribute.PluginType, " ", ConsoleColor.Cyan, type.FullName);
                    }
                }
                else
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", SPACE, SPACE, ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, ConsoleColor.White, "Type ", ConsoleColor.Blue, attribute.PluginType, " ", ConsoleColor.Cyan, type.FullName);
                }
            }
            return rows.Entities[0].Id;
        }
        private async Task<bool> IsValidTypesAsync(string file, List<TypeInfo> types, DeployFileType deployFileType)
        {
            if (types.Count == 0 && deployFileType == DeployFileType.Nuget)
                return false;
            if (types.Count == 0)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"Not found any valid types to deploy.");
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

            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return true;
            foreach (var entity in rows.Entities)
            {
                var typeName = entity.GetAttributeValue<AliasedValue>("plugintype.typename")?.Value.ToString();
                if (types.Count(x => x.FullName == typeName) == 0)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"Type: '{typeName}' not found in the assembly file. This type: '{typeName}' already registered to CRM/CDS. Assemply deployed, but the deployment of this assembly stopped.");
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
                    if (XrmHelper.IsWorkflowType(type))
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"Type '{type.FullName}' has multi attribute CrmPluginRegistration. Deploy stopped.");
                        return false;
                    }
                    else
                    {
                        if (attributes.GroupBy(x => x.PluginType).Count() != 1)
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"Type '{type.FullName}' has multi invalid attribute CrmPluginRegistration. Deploy stopped.");
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
            // Normalize path for cache lookup
            var normalizedPath = Path.GetFullPath(file);

            // Check if already loaded in cache
            if (_assemblyCache.TryGetValue(normalizedPath, out var cachedAssembly))
            {
                return cachedAssembly;
            }

            Assembly assembly = null;
            try
            {
                // Load assembly bytes into memory to avoid file locking
                var assemblyBytes = File.ReadAllBytes(file);
                AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve += CurrentDomain_ReflectionOnlyAssemblyResolve;
                assembly = Assembly.ReflectionOnlyLoad(assemblyBytes);
                AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve -= CurrentDomain_ReflectionOnlyAssemblyResolve;

                // Cache the loaded assembly
                if (assembly != null)
                {
                    _assemblyCache[normalizedPath] = assembly;
                }
            }
            catch (Exception ex)
            {
                CliLog.WriteLineError(ConsoleColor.Red, $"Failed to load assembly {file}: {ex.Message}");
            }

            return assembly;
        }
        private List<TypeInfo> GetTypes(string file)
        {
            var assembly = LoadAssemblyIntoCache(file);
            if (assembly == null) return new List<TypeInfo>();
            var types = new List<TypeInfo>();
            try
            {
                AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve += CurrentDomain_ReflectionOnlyAssemblyResolve;
                var allTypes = assembly.DefinedTypes;
                AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve -= CurrentDomain_ReflectionOnlyAssemblyResolve;
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
            catch (Exception ex)
            {
                CliLog.WriteLineError(ConsoleColor.Red, $"Failed to read types from assembly {file}: {ex.Message}");
            }
            types = [.. types.OrderBy(x => x.FullName)];
            return types;
        }
        private Assembly CurrentDomain_ReflectionOnlyAssemblyResolve(object sender, ResolveEventArgs args)
        {
            try
            {
                var parts = args.Name.Split(',');
                var assemblyName = parts[0].Trim();
                return Assembly.ReflectionOnlyLoad(args.Name);
            }
            catch
            {
                return null;
            }
        }
        private void ExtractZip(PackageArchiveReader packageArchiveReader, string folder)
        {
            var libFiles = packageArchiveReader.GetFiles("lib");
            if (!Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }
            else
            {
                foreach (FileInfo f in new DirectoryInfo(folder).GetFiles()) { f.Delete(); }
            }
            foreach (var libFile in libFiles)
            {
                var zip = packageArchiveReader.GetEntry(libFile);
                zip.ExtractToFile($"{folder}\\{zip.Name}", true);
            }
        }
    }
}