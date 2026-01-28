using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Xml.Linq;
namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskWebResource(CommandLineArgs arg, JsonWebResource json) : ITask
    {
        public string CurrentDirectory { get; set; } = arg.CurrentDirectory;
        public string TaskType => $"[{nameof(CliType.webresources).ToUpper()}]";
        public ServiceClient ServiceClient { get; set; } = arg.ServiceClient;
        public CommandLineArgs Arg { get; set; } = arg;
        private JsonWebResource Json { get; set; } = json;
        public bool IsOk { get; set; }
        public Guid SolutionId { get; set; }
        public string SolutionPrefix { get; set; }
        private List<Guid> WebResourcesToPublish { get; } = [];
        public async Task<bool> IsValidAsync()
        {
            if (Json == null)
            {
                SpectreLog.ActionError($"{TaskType} 'profile' not found: '{Arg.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
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
            if (await IsSupportWebResourceDependencyAsync())
            {
                var dependencies = await GetDependenciesAsync();
                foreach (var dependency in dependencies)
                {
                    var check = dependency.dependencies.Where(x => x.StartsWith("???_/")).Any();
                    if (check)
                    {
                        SpectreLog.ActionError($"{TaskType} Found ???_/ in webresource dependencies. Please check DynamicsCrm.DevKit.Cli.json file.");
                        return false;
                    }
                    var check2 = dependency.webresources.Where(x => x.StartsWith("???_/")).Any();
                    if (check2)
                    {
                        SpectreLog.ActionError($"{TaskType} Found ???_/ in webresource dependencies. Please check DynamicsCrm.DevKit.Cli.json file.");
                        return false;
                    }
                }
            }
            return true;
        }

        private async Task DeployWebResourceFilesAsync()
        {
            SpectreLog.WriteLine("DEPLOYING WEBRESOURCES WITH PATTERNS FILES");
            foreach (var pattern in Json.includefiles)
            {
                SpectreLog.WriteHighLight(" - ", $"{pattern}", "");
            }
            SpectreLog.WriteLine();
            SpectreLog.WriteHighLight("Found: ", $"{WebResourceFiles.Count}", " webresources");
            SpectreLog.WriteLine();
            var i = 1;
            foreach (var webResourceFile in WebResourceFiles)
            {
                await DeployWebResourceFileAsync(webResourceFile, i);
                i++;
            }

            var dependencies = await GetDependenciesAsync();
            if (await IsSupportWebResourceDependencyAsync() && dependencies.Count > 0)
            {
                SpectreLog.WriteLine();
                SpectreLog.WriteLine("DEPLOYING WEBRESOURCES DEPENDENCIES WITH PATTERNS FILES");
                foreach (var item in Json.dependencies)
                {
                    foreach (var webresource in item.webresources)
                    {
                        SpectreLog.WriteHighLight(" - ", $"{webresource}", "");
                    }
                    foreach (var dependency in item.dependencies)
                    {
                        SpectreLog.WriteWithLevel(LogLevel.Level3, $" {dependency}");
                    }
                }
                SpectreLog.WriteLine();
                SpectreLog.WriteHighLight("Found: ", $"{dependencies.Count}", " dependencies");
                SpectreLog.WriteLine();
                var j = 1;
                foreach (var dependency in dependencies)
                {
                    await UpdateDependencyAsync(dependency, j);
                    j++;
                }
            }

            if (WebResourcesToPublish.Count > 0)
                await PublishWebResourcesAsync();
        }

        private async Task PublishWebResourcesAsync()
        {
            var guids = WebResourcesToPublish.Select(g => g.ToString());
            var webresources = string.Join("</webresource><webresource>", guids);
            var publish = new PublishXmlRequest
            {
                ParameterXml =
                    "<importexportxml><webresources>" +
                    "<webresource>" + webresources + "</webresource>" +
                    "</webresources></importexportxml>"
            };
            SpectreLog.WriteLine();
            SpectreLog.WriteLine("PUBLISHING WEBRESOURCES");
            await ServiceClient.ExecuteAsync(publish);
            SpectreLog.WriteLine();
            SpectreLog.WriteLine("PUBLISHED WEBRESOURCES");
        }

        private async Task UpdateDependencyAsync(Dependency dependency, int current)
        {
            var dependencies = await GetDependenciesAsync();
            List<string> dependencyList = dependency.dependencies;
            dependencyList = [.. dependencyList.Distinct()];
            dependency.dependencies = dependencyList;
            var result = await GetDependencyXmlAsync(dependency.dependencies);
            var dependencyXml = result.dependencyXml;
            var foundDependencies = result.foundDependencies;
            foreach (var webResourceName in dependency.webresources)
            {
                var fetchXml = $@"
<fetch>
  <entity name='webresource'>
    <attribute name='dependencyxml' />
    <filter type='and'>
      <condition attribute='name' operator='eq' value='{webResourceName}'/>
    </filter>
  </entity>
</fetch>";
                var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
                string existingDependencyXml;
                if (rows.Entities.Count > 0)
                    existingDependencyXml = rows.Entities[0].GetAttributeValue<string>("dependencyxml");
                else
                {
                    SpectreLog.ActionError($"Not found: {webResourceName}");
                    return;
                }
                if (!await IsTheSameDependencyXmlAsync(dependency.dependencies, existingDependencyXml))
                {
                    var webResourceId = rows.Entities[0].Id;
                    var entity = new Entity("webresource", webResourceId)
                    {
                        ["dependencyxml"] = dependencyXml
                    };
                    SpectreLog.ActionWithLevel1(CliAction.UPDATED, webResourceName, "dependencies");
                    foreach (var d in foundDependencies)
                        SpectreLog.WriteWithLevel(LogLevel.Level2, $"{d}");
                    await ServiceClient.UpdateAsync(entity);
                    if (!WebResourcesToPublish.Contains(webResourceId))
                        WebResourcesToPublish.Add(webResourceId);
                }
                else
                {
                    SpectreLog.ActionWithLevel1($"{webResourceName}", "dependencies");
                    foreach (var d in foundDependencies)
                        SpectreLog.WriteWithLevel(LogLevel.Level2, $"{d}");
                }
            }
        }

        private async Task<bool> IsTheSameDependencyXmlAsync(List<string> dependencies, string existingDependencyXml)
        {
            if (existingDependencyXml == null) return false;
            var i = 0;
            var j = 0;
            foreach (var dependency in dependencies)
            {
                if (existingDependencyXml.Contains(dependency))
                {
                    i++;
                }
                else
                {
                    if (!await IsExistWebResourceAsync(dependency))
                    {
                        j++;
                    }
                }
            }
            var xdoc = XDocument.Parse(existingDependencyXml);
            var nodes = from x in xdoc.Descendants("Dependencies").Descendants("Dependency").Descendants("Library")
                        select x;
            if (i == nodes.Count() && i == dependencies.Count - j) return true;
            return false;
        }

        private async Task<bool> IsExistWebResourceAsync(string webResourceName)
        {
            var fetchXml = $@"
<fetch>
  <entity name='webresource'>
    <attribute name='name' />
    <filter type='and'>
      <condition attribute='name' operator='eq' value='{webResourceName}'/>
    </filter>
  </entity>
</fetch>";
            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            return rows.Entities.Count > 0;
        }

        private async Task<(string dependencyXml, List<string> foundDependencies)> GetDependencyXmlAsync(List<string> dependencies)
        {
            var library = string.Empty;
            var foundDependencies = new List<string>();
            foreach (var dependency in dependencies)
            {
                var fetchData = new
                {
                    name = dependency
                };
                var fetchXml = $@"
<fetch>
  <entity name='webresource'>
    <attribute name='webresourceid' />
    <attribute name='languagecode' />
    <attribute name='name' />
    <attribute name='displayname' />
    <attribute name='description' />
    <attribute name='webresourceidunique' />
    <filter type='and'>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
    </filter>
  </entity>
</fetch>";
                var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
                if (rows.Entities.Count > 0)
                {
                    var entity = rows.Entities[0];
                    var name = entity.GetAttributeValue<string>("name");
                    var displayname = entity.GetAttributeValue<string>("displayname");
                    var description = entity.GetAttributeValue<string>("description");
                    var webresourceidunique = entity.GetAttributeValue<Guid>("webresourceidunique");
                    var languagecode = entity.GetAttributeValue<int?>("languagecode");
                    library += $"<Library name='{name}' displayName='{displayname}' languagecode='{languagecode}' description='{description}' libraryUniqueId='{{{webresourceidunique}}}'/>";
                    foundDependencies.Add(dependency);
                }
            }
            if (library.Length == 0) return (library, foundDependencies);
            var dependencyXml = $"<Dependencies><Dependency componentType='WebResource'>{library}</Dependency></Dependencies>";
            dependencyXml = dependencyXml.Replace("'", "\"");
            return (dependencyXml, foundDependencies);
        }

        private async Task DeployWebResourceFileAsync(WebResourceFile webResourceFile, int current)
        {
            if (webResourceFile.uniquename.StartsWith("/")) webResourceFile.uniquename = webResourceFile.uniquename.Substring(1);
            var fetchData = new
            {
                name = webResourceFile.uniquename,
                name2 = webResourceFile.uniquename.Substring(0, webResourceFile.uniquename.LastIndexOf('.'))
            };
            var fetchXml = $@"
<fetch>
  <entity name='webresource'>
    <attribute name='content' />
    <attribute name='webresourceid' />
    <attribute name='name' />
    <attribute name='iscustomizable' />
    <attribute name='ismanaged' />
    <filter type='or'>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
      <condition attribute='name' operator='eq' value='{fetchData.name2}'/>
    </filter>
  </entity>
</fetch>";
            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            var content = string.Empty;
            var webResourceId = Guid.Empty;
            if (rows.Entities.Count > 0)
            {
                if (rows.Entities.Count == 1)
                {
                    var entity = rows.Entities[0];
                    var ismanaged = entity.GetAttributeValue<bool?>("ismanaged");
                    var iscustomizable = entity.GetAttributeValue<BooleanManagedProperty>("iscustomizable");
                    if (ismanaged.HasValue && ismanaged.Value == true)
                    {
                        if (iscustomizable?.Value == false)
                        {
                            SpectreLog.ActionError($"Update webresource failed because the setting webresource.iscustomizable = false - {webResourceFile.uniquename}");
                            return;
                        }
                    }
                    webResourceId = entity.Id;
                    content = entity?["content"]?.ToString();
                }
                else
                {
                    foreach (var entity in rows.Entities)
                    {
                        if (entity.GetAttributeValue<string>("name") != fetchData.name) continue;
                        var ismanaged = entity.GetAttributeValue<bool?>("ismanaged");
                        var iscustomizable = entity.GetAttributeValue<BooleanManagedProperty>("iscustomizable");
                        if (ismanaged.HasValue && ismanaged.Value == true)
                        {
                            if (iscustomizable?.Value == false)
                            {
                                SpectreLog.ActionError($"Update webresource failed because the setting webresource.iscustomizable = false - {webResourceFile.uniquename}");
                                return;
                            }
                        }
                        webResourceId = entity.Id;
                        content = entity?["content"]?.ToString();
                        break;
                    }
                }
            }
            var fileContent = Convert.ToBase64String(await FileHelper.ReadAllBytesAsync(webResourceFile.file));
            if (fileContent == content)
            {
                SpectreLog.ActionWithLevel0(CliAction.DO_NOTHING, webResourceFile.file.Substring(CurrentDirectory.Length + 1));
                await AddWebResourceToSolutionAsync(new Entity("webresource")
                {
                    ["name"] = webResourceFile.uniquename,
                    ["webresourceid"] = webResourceId
                });
            }
            else
            {
                var webResource = new Entity("webresource")
                {
                    ["name"] = webResourceFile.uniquename,
                    ["displayname"] = webResourceFile.displayname,
                    ["description"] = webResourceFile.version,
                    ["content"] = fileContent
                };
                var webResourceFileInfo = new FileInfo(webResourceFile.file);
                var fileType = WebResourceWebResourceType.ScriptJScript;
                switch (webResourceFileInfo.Extension.ToLower().TrimStart('.'))
                {
                    case "html":
                    case "htm":
                        fileType = WebResourceWebResourceType.WebpageHtml;
                        break;
                    case "js":
                        fileType = WebResourceWebResourceType.ScriptJScript;
                        break;
                    case "png":
                        fileType = WebResourceWebResourceType.PngFormat;
                        break;
                    case "gif":
                        fileType = WebResourceWebResourceType.GifFormat;
                        break;
                    case "jpg":
                    case "jpeg":
                        fileType = WebResourceWebResourceType.JpgFormat;
                        break;
                    case "css":
                        fileType = WebResourceWebResourceType.StyleSheetCss;
                        break;
                    case "ico":
                        fileType = WebResourceWebResourceType.IcoFormat;
                        break;
                    case "xml":
                        fileType = WebResourceWebResourceType.DataXml;
                        break;
                    case "xsl":
                    case "xslt":
                        fileType = WebResourceWebResourceType.StyleSheetXsl;
                        break;
                    case "xap":
                        fileType = WebResourceWebResourceType.SilverlightXap;
                        break;
                    case "resx":
                        fileType = WebResourceWebResourceType.StringResx;
                        break;
                    case "svg":
                        fileType = WebResourceWebResourceType.SvgFormat;
                        break;
                }
                webResource["webresourcetype"] = new OptionSetValue((int)fileType);
                if (fileType == WebResourceWebResourceType.StringResx)
                {
                    var fileName = webResourceFileInfo.Name.Substring(0, webResourceFileInfo.Name.Length - webResourceFileInfo.Extension.Length);
                    var arr = fileName.Split(".".ToCharArray());
                    if (int.TryParse(arr[arr.Length - 1], out var languagecode))
                    {
                        var req = new RetrieveProvisionedLanguagesRequest();
                        var res = (RetrieveProvisionedLanguagesResponse)await ServiceClient.ExecuteAsync(req);
                        if (res.RetrieveProvisionedLanguages.Contains(languagecode))
                            webResource["languagecode"] = languagecode;
                        else
                        {
                            throw new Exception($"Language code not found: {languagecode}");
                        }
                    }
                }
                if (webResourceId == Guid.Empty)
                {
                    SpectreLog.ActionCreated($"{webResourceFile.uniquename} = {webResourceFile.file.Substring(CurrentDirectory.Length + 1)}");
                    webResourceId = await ServiceClient.CreateAsync(webResource);
                    webResource["webresourceid"] = webResourceId;
                }
                else
                {
                    webResource["webresourceid"] = webResourceId;
                    SpectreLog.ActionUpdated($"{webResourceFile.uniquename} = {webResourceFile.file.Substring(CurrentDirectory.Length + 1)}");
                    await ServiceClient.UpdateAsync(webResource);
                }
                WebResourcesToPublish.Add(webResourceId);
                await AddWebResourceToSolutionAsync(webResource);
            }
        }

        private async Task AddWebResourceToSolutionAsync(Entity webResource)
        {
            var fetchData = new
            {
                objectid = Guid.Parse(webResource["webresourceid"].ToString()),
                componenttype = 61,
                uniquename = Json.solution
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
            var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 0) return;
            var request = new AddSolutionComponentRequest
            {
                AddRequiredComponents = true,
                ComponentType = 61,
                ComponentId = Guid.Parse(webResource["webresourceid"].ToString()),
                SolutionUniqueName = Json.solution
            };
            SpectreLog.ActionWithLevel3(CliAction.ADDED, $"{webResource["name"]}", "to solution: ", Json.solution);
            await ServiceClient.ExecuteAsync(request);
        }

        private bool? _isSupportWebResourceDependency = (bool?)null;
        private async Task<bool> IsSupportWebResourceDependencyAsync()
        {
            if (_isSupportWebResourceDependency != null) return _isSupportWebResourceDependency.Value;
            var request = new RetrieveVersionRequest();
            var response = (RetrieveVersionResponse)await ServiceClient.ExecuteAsync(request);
            var version = new Version(response.Version);
            _isSupportWebResourceDependency = version >= new Version("9.0");
            return _isSupportWebResourceDependency.Value;
        }

        private List<Dependency> _dependencies = null;
        private async Task<List<Dependency>> GetDependenciesAsync()
        {
            if (_dependencies != null) return _dependencies;
            _dependencies = [];
            var dependencies = await TransformPatternAsync(Json.dependencies, WebResourceFiles);
            foreach (var dependency in dependencies)
            {
                foreach (var webResource in dependency.webresources)
                {
                    var found = _dependencies.FirstOrDefault(d => d.webresources.Contains(webResource));
                    if (found == null)
                    {
                        _dependencies.Add(new Dependency
                        {
                            webresources = [webResource],
                            dependencies = dependency.dependencies
                        });
                    }
                    else
                    {
                        var temp = new List<string>(found.dependencies);
                        temp.AddRange(dependency.dependencies);
                        found.dependencies = temp;
                    }
                }
            }
            return _dependencies;
        }

        private List<WebResourceFile> _webResourceFiles = null;
        private List<WebResourceFile> WebResourceFiles
        {
            get
            {
                if (_webResourceFiles != null) return _webResourceFiles;
                _webResourceFiles = [];
                var includeFiles = new List<string>();
                foreach (var pattern in Json.includefiles)
                {
                    var filePattern = $"{CurrentDirectory}\\{Json.rootfolder}\\{pattern}";
                    filePattern = filePattern.Replace(@"\\", @"\");
                    includeFiles.AddRange(GetFiles(filePattern));
                }
                includeFiles = [.. includeFiles.Distinct()];
                var excludeFiles = new List<string>();
                foreach (var pattern in Json.excludefiles)
                {
                    var filePattern = $"{CurrentDirectory}\\{Json.rootfolder}\\{pattern}";
                    filePattern = filePattern.Replace(@"\\", @"\");
                    excludeFiles.AddRange(GetFiles(filePattern));
                }
                var files = includeFiles.Where(file => !excludeFiles.Contains(file)).ToList();
                foreach (var file in files)
                {
                    var name = file
                        .Substring($"{CurrentDirectory}\\{Json.rootfolder}\\".Replace(@"\\", @"\").Length)
                        .Replace("\\", "/");
                    if (!name.StartsWith(SolutionPrefix))
                        name = SolutionPrefix + "/" + name;
                    var webResourceFile = new WebResourceFile
                    {
                        file = file,
                        version = Arg.Version,
                        uniquename = name,
                        displayname = name
                    };
                    _webResourceFiles.Add(webResourceFile);
                }
                _webResourceFiles = [.. _webResourceFiles.Where(i => IsSupportedExtensions(i.file)).OrderBy(x => x.uniquename)];
                return _webResourceFiles;
            }
        }

        private bool IsSupportedExtensions(string fileName)
        {
            var list = new List<string> { ".html", ".htm", ".js", ".png", ".gif", ".jpg", ".jpeg", ".css", ".ico", ".xml", ".xsl", ".xslt", ".xap", ".resx", ".svg" };
            foreach (var item in list)
                if (fileName.EndsWith(item)) return true;
            return false;
        }

        private IEnumerable<string> GetFiles(string filePattern)
        {
            var folder = filePattern.Substring(0, filePattern.LastIndexOf("\\", StringComparison.Ordinal));
            var pattern = filePattern.Substring(folder.Length + 1);
            if (!pattern.Contains("**")) return Directory.Exists(folder) ? [.. Directory.GetFiles(folder, pattern, SearchOption.TopDirectoryOnly)] : [];
            pattern = pattern.Replace("**", "*");
            if (!Directory.Exists(folder)) return [];
            return [.. Directory.GetFiles(folder, pattern, SearchOption.AllDirectories)];
        }

        private async Task<List<Dependency>> TransformPatternAsync(IEnumerable<Dependency> dependencies, IEnumerable<WebResourceFile> webResourceFiles)
        {
            var list = new List<Dependency>();
            var forms = webResourceFiles
                .Where(w => w.file.EndsWith(".form.js"))
                .Select(s => Path.GetFileName(s.file))
                .Select(s => s.Substring(0, s.Length - ".form.js".Length))
                .ToList();
            var webApis = webResourceFiles
                .Where(w => w.file.EndsWith(".webapi.js"))
                .Select(s => Path.GetFileName(s.file))
                .Select(s => s.Substring(0, s.Length - ".webapi.js".Length))
                .ToList();
            var entities = forms.Concat(webApis).Distinct().ToList();
            if (entities.Count == 0)
            {
                using (var cancellationTokenSource = new CancellationTokenSource())
                {
                    var waitingTask = Task.Run(() => SpectreLog.WaitingWithCancellation("Reading entities Metadata ", cancellationTokenSource.Token), cancellationTokenSource.Token);
                    try
                    {
                        var allEntities = await XrmHelper.GetAllEntitiesSchemaAsync(ServiceClient, Microsoft.Xrm.Sdk.Metadata.EntityFilters.Entity);
                        foreach (var webResourceFile in webResourceFiles)
                        {
                            var fInfo = new FileInfo(webResourceFile.file);
                            var entity = allEntities.FirstOrDefault(x => x == fInfo.Name.Substring(0, fInfo.Name.Length - fInfo.Extension.Length));
                            if (entity != null)
                            {
                                entities.Add(entity);
                            }
                        }
                    }
                    finally
                    {
                        cancellationTokenSource.Cancel();
                        try
                        {
                            await waitingTask;
                        }
                        catch (OperationCanceledException)
                        {
                        }
                    }
                }
                SpectreLog.WriteLine();
            }
            foreach (var dependency in dependencies)
            {
                if (!dependency.webresources.Any(w => w.Contains("[entity]")) &&
                   !dependency.dependencies.Any(w => w.Contains("[entity]")))
                {
                    list.Add(dependency);
                }
                else
                {
                    foreach (var entity in entities)
                    {
                        list.Add(new Dependency
                        {
                            dependencies = [.. dependency.dependencies.Select(s => s.Replace("[entity]", entity))],
                            webresources = [.. dependency.webresources.Select(s => s.Replace("[entity]", entity))],
                        });
                    }
                }
            }
            return list;
        }

        public async Task RunAsync()
        {
            SpectreLog.WriteLine("START");
            SpectreLog.WriteLine();
            if (await IsValidAsync())
            {
                if (WebResourceFiles.Count == 0)
                {
                    SpectreLog.ActionError("Not found any webresource files to deploy");
                }
                else
                {
                    await DeployWebResourceFilesAsync();
                }
            }
            SpectreLog.WriteLine();
            SpectreLog.WriteLine("END");
        }
    }
}