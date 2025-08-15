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
    public class TaskWebResource : ITask
    {
        public TaskWebResource(CommandLineArgs arg, JsonWebResource json)
        {
            this.Arg = arg;
            this.Json = json;
            ServiceClient = arg.ServiceClient;
            CurrentDirectory = arg.CurrentDirectory;
        }
        public string CurrentDirectory { get; set; }
        public string TaskType => $"[{nameof(CliType.webresources).ToUpper()}]";
        public ServiceClient ServiceClient { get; set; }
        public CommandLineArgs Arg { get; set; }
        private JsonWebResource Json { get; set; }
        private bool IsOk { get; set; }
        private Guid SolutionId { get; set; }
        private string Prefix { get; set; }
        private List<Guid> WebResourcesToPublish { get; } = new List<Guid>();
        public async Task<bool> IsValidAsync()
        {
            await Helper.DelayAsync(1);
            return true;
        }

        private async Task DeployWebResourceFilesAsync()
        {
            CliLog.WriteLineWarning(ConsoleColor.Yellow, "DEPLOYING WEBRESOURCES");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Found: ", ConsoleColor.Yellow, WebResourceFiles.Count, ConsoleColor.Green, " webresources");
            CliLog.WriteLine(ConsoleColor.White, "|");
            var i = 1;
            foreach (var webResourceFile in WebResourceFiles)
            {
                await DeployWebResourceFileAsync(webResourceFile, i);
                i++;
            }

            var dependencies = await GetDependenciesAsync();
            if (await IsSupportWebResourceDependencyAsync() && dependencies.Count > 0)
            {
                CliLog.WriteLine(ConsoleColor.White, "|");
                CliLog.WriteLineWarning(ConsoleColor.Yellow, "DEPLOYING WEBRESOURCES DEPENDENCIES");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Found: ", ConsoleColor.Yellow, dependencies.Count, ConsoleColor.Green, " dependencies");
                CliLog.WriteLine(ConsoleColor.White, "|");
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
            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLineWarning(ConsoleColor.Green, "PUBLISHING WEBRESOURCES");
            await ServiceClient.ExecuteAsync(publish);
            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLineWarning(ConsoleColor.Green, "PUBLISHED WEBRESOURCES");
        }

        private async Task UpdateDependencyAsync(Dependency dependency, int current)
        {
            var dependencies = await GetDependenciesAsync();
            var len = dependencies.Count.ToString().Length;
            List<string> dependencyList = dependency.dependencies;
            dependencyList = dependencyList.Distinct().ToList();
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
                    CliLog.WriteLineError(ConsoleColor.Yellow, ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", current) + ": ", ConsoleColor.Green, CliAction.NOT_FOUND, ConsoleColor.White, webResourceName);
                    return;
                }
                if (!await IsTheSameDependencyXmlAsync(dependency.dependencies, existingDependencyXml))
                {
                    var webResourceId = rows.Entities[0].Id;
                    var entity = new Entity("webresource", webResourceId)
                    {
                        ["dependencyxml"] = dependencyXml
                    };
                    CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", current) + ": ", ConsoleColor.Green, CliAction.UPDATED, ConsoleColor.White, $"{webResourceName}", ConsoleColor.Green, " dependencies ", ConsoleColor.White, "with");
                    foreach (var d in foundDependencies)
                        CliLog.WriteLineWarning(ConsoleColor.White, "\t" + d);
                    await ServiceClient.UpdateAsync(entity);
                    if (!WebResourcesToPublish.Contains(webResourceId))
                        WebResourcesToPublish.Add(webResourceId);
                }
                else
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", current) + ": ", ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, webResourceName, ConsoleColor.Green, " dependencies ", ConsoleColor.White, "with");
                    foreach (var d in foundDependencies)
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.White, "\t" + d);
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
            var len = WebResourceFiles.Count.ToString().Length;
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
                            CliLog.WriteLineError(ConsoleColor.Yellow, ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", current) + ": ", ConsoleColor.Green, "Update webresource failed because the setting webresource.iscustomizable = false - ", ConsoleColor.White, webResourceFile.uniquename);
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
                                CliLog.WriteLineError(ConsoleColor.Yellow, ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", current) + ": ", ConsoleColor.Green, "Update webresource failed because the setting webresource.iscustomizable = false - ", ConsoleColor.White, webResourceFile.uniquename);
                                return;
                            }
                        }
                        webResourceId = entity.Id;
                        content = entity?["content"]?.ToString();
                        break;
                    }
                }
            }
            var fileContent = Convert.ToBase64String(await Helper.ReadAllBytesAsync(webResourceFile.file));
            if (fileContent == content)
            {
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", current) + ": ", ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, webResourceFile.file.Substring(CurrentDirectory.Length + 1));
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
                    CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", current) + ": ", ConsoleColor.Green, CliAction.CREATED, ConsoleColor.White, $"{webResourceFile.uniquename}", ConsoleColor.Green, " = ", ConsoleColor.White, $"{webResourceFile.file.Substring(CurrentDirectory.Length + 1)}");
                    webResourceId = await ServiceClient.CreateAsync(webResource);
                    webResource["webresourceid"] = webResourceId;
                }
                else
                {
                    webResource["webresourceid"] = webResourceId;
                    CliLog.WriteLineWarning(ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", current) + ": ", ConsoleColor.Green, CliAction.UPDATED, ConsoleColor.White, $"{webResourceFile.uniquename}", ConsoleColor.Green, " = ", ConsoleColor.White, $"{webResourceFile.file.Substring(CurrentDirectory.Length + 1)}");
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
            CliLog.WriteLineWarning("\t", ConsoleColor.Green, CliAction.ADDED, ConsoleColor.White, $"{webResource["name"]} ", ConsoleColor.Green, "to solution: ", ConsoleColor.White, $"{Json.solution}");
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
            _dependencies = new List<Dependency>();
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
                            webresources = new List<string>() { webResource },
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
                _webResourceFiles = new List<WebResourceFile>();
                var includeFiles = new List<string>();
                foreach (var pattern in Json.includefiles)
                {
                    var filePattern = $"{CurrentDirectory}\\{Json.rootfolder}\\{pattern}";
                    filePattern = filePattern.Replace(@"\\", @"\");
                    includeFiles.AddRange(GetFiles(filePattern));
                }
                includeFiles = includeFiles.Distinct().ToList();
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
                    if (!name.StartsWith(Prefix))
                        name = Prefix + "/" + name;
                    var webResourceFile = new WebResourceFile
                    {
                        file = file,
                        version = Arg.Version,
                        uniquename = name,
                        displayname = name
                    };
                    _webResourceFiles.Add(webResourceFile);
                }
                _webResourceFiles = _webResourceFiles.Where(i => IsSupportedExtensions(i.file)).OrderBy(x => x.uniquename).ToList();
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
            if (!pattern.Contains("**")) return Directory.Exists(folder) ? Directory.GetFiles(folder, pattern, SearchOption.TopDirectoryOnly).ToList() : new List<string>();
            pattern = pattern.Replace("**", "*");
            if (!Directory.Exists(folder)) return new List<string>();
            return Directory.GetFiles(folder, pattern, SearchOption.AllDirectories).ToList();
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
                    var waitingTask = Task.Run(() => CliLog.WaitingWithCancellation("Reading entities Metadata ", cancellationTokenSource.Token), cancellationTokenSource.Token);
                    try
                    {
                        var allEntities = await XrmHelper.GetAllEntitiesSchemaAsync(ServiceClient);
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
                CliLog.WriteLine();
                CliLog.WriteLine(ConsoleColor.White, "|");
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
                            dependencies = dependency.dependencies.Select(s => s.Replace("[entity]", entity)).ToList(),
                            webresources = dependency.webresources.Select(s => s.Replace("[entity]", entity)).ToList(),
                        });
                    }
                }
            }
            return list;
        }

        public async Task RunAsync()
        {
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "START ");
            CliLog.WriteLine(ConsoleColor.White, "|");
            if (await IsValidAsync())
            {
                if (WebResourceFiles.Count == 0)
                {
                    CliLog.WriteLineWarning(ConsoleColor.Green, "Not found any webresource files to deploy");
                }
                else
                {
                    await DeployWebResourceFilesAsync();
                }
            }

            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ");
        }
    }
}