using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskWebResource : ITask
    {
        public TaskWebResource(CommandLineArgs arg, JsonWebResource json)
        {
            this.Arg = arg;
            this.json = json;
            CrmServiceClient = arg.CrmServiceClient;
            CurrentDirectory = arg.CurrentDirectory;
        }
        public string CurrentDirectory { get; set; }
        public string TaskType => $"[{nameof(CliType.webresources).ToUpper()}]";
        public CrmServiceClient CrmServiceClient { get; set; }
        public CommandLineArgs Arg { get; set; }
        private JsonWebResource json { get; set; }
        private bool IsOk { get; set; }
        private Guid SolutionId { get; set; }
        private string Prefix { get; set; }
        private List<Guid> WebResourcesToPublish { get; } = new List<Guid>();
        public bool IsValid()
        {
            if (json == null)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'profile' not found: '{Arg.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (json.solution == "???" || (json.solution != null && json?.solution?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            (IsOk, SolutionId, Prefix) = XrmHelper.IsExistSolution(CrmServiceClient, json.solution);
            if (!IsOk)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} solution '{json.solution}' not exist");
                return false;
            }
            if (IsSupportWebResourceDependency)
            {
                foreach (var dependency in Dependencies)
                {
                    var check = dependency.dependencies.Where(x => x.StartsWith("???_/")).Any();
                    if (check)
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} Found ???_/ in webresource dependencies. Please check DynamicsCrm.DevKit.Cli.json file.");
                        return false;
                    }
                    var check2 = dependency.webresources.Where(x => x.StartsWith("???_/")).Any();
                    if (check2)
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} Found ???_/ in webresource dependencies. Please check DynamicsCrm.DevKit.Cli.json file.");
                        return false;
                    }
                }
            }
            return true;
        }

        public void Run()
        {
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "START ", ConsoleColor.Blue, TaskType);
            CliLog.WriteLine(ConsoleColor.White, "|");

            if (IsValid())
            {
                if (WebResourceFiles.Count == 0)
                {
                    CliLog.WriteLineWarning(ConsoleColor.Green, "Not found any webresource files to deploy");
                }
                else
                {
                    DeployWebResourceFiles();
                }
            }

            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ", ConsoleColor.Blue, TaskType);
        }

        private void DeployWebResourceFiles()
        {
            CliLog.WriteLineWarning(ConsoleColor.Green, "DEPLOYING WEBRESOURCES");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Found: ", ConsoleColor.Yellow, WebResourceFiles.Count, ConsoleColor.Green, " webresources");
            CliLog.WriteLine(ConsoleColor.White, "|");
            var i = 1;
            foreach (var webResourceFile in WebResourceFiles)
            {
                DeployWebResourceFile(webResourceFile, i);
                i++;
            }

            if (IsSupportWebResourceDependency && Dependencies.Count > 0)
            {
                CliLog.WriteLine(ConsoleColor.White, "|");
                CliLog.WriteLineWarning(ConsoleColor.Green, "DEPLOYING WEBRESOURCES DEPENDENCIES");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Found: ", ConsoleColor.Yellow, Dependencies.Count, ConsoleColor.Green, " dependencies");
                CliLog.WriteLine(ConsoleColor.White, "|");
                var j = 1;
                foreach (var dependency in Dependencies)
                {
                    UpdateDependency(dependency, j);
                    j++;
                }
            }
        }

        private void UpdateDependency(Dependency dependency, int current)
        {
            var len = Dependencies.Count.ToString().Length;
            List<string> dependencies = dependency.dependencies;
            dependencies = dependencies.Distinct().ToList();
            dependency.dependencies = dependencies;
            var dependencyXml = GetDependencyXml(dependency.dependencies, out var foundDependencies);
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
                var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                string existingDependencyXml;
                if (rows.Entities.Count > 0)
                    existingDependencyXml = rows.Entities[0].GetAttributeValue<string>("dependencyxml");
                else
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", current) + ": ", ConsoleColor.Magenta, "Not existing", ConsoleColor.Green, " Webresource ", ConsoleColor.Cyan, webResourceName);
                    return;
                }
                if (!IsTheSameDependencyXml(dependency.dependencies, existingDependencyXml))
                {
                    var webResourceId = rows.Entities[0].Id;
                    var entity = new Entity("webresource", webResourceId)
                    {
                        ["dependencyxml"] = dependencyXml
                    };
                    CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", current), ": ", ConsoleColor.Magenta, "Updating ", ConsoleColor.Cyan, webResourceName, ConsoleColor.Green, " dependencies");
                    foreach (var d in foundDependencies)
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Cyan, "\t" + d);
                    CrmServiceClient.Update(entity);
                    if (!WebResourcesToPublish.Contains(webResourceId))
                        WebResourcesToPublish.Add(webResourceId);
                }
                else
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", current) + ": ", ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, webResourceName, ConsoleColor.Green, " dependencies");
                    foreach (var d in foundDependencies)
                        CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.White, "\t" + d);
                }
            }
        }

        private bool IsTheSameDependencyXml(List<string> webresources, string existingDependencyXml)
        {
            foreach (var webresource in webresources)
                if (!existingDependencyXml.Contains(webresource)) return false;
            return true;
        }

        private string GetDependencyXml(List<string> dependencies, out List<string> foundDependencies)
        {
            var library = string.Empty;
            foundDependencies = new List<string>();
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
                var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
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
            if (library.Length == 0) return library;
            var dependencyXml = $"<Dependencies><Dependency componentType='WebResource'>{library}</Dependency></Dependencies>";
            dependencyXml = dependencyXml.Replace("'", "\"");
            return dependencyXml;
        }


        private void DeployWebResourceFile(WebResourceFile webResourceFile, int current)
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
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
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
                            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, string.Format("{0,0}{1," + len + "}", "", current) + ": ", ConsoleColor.Red, "Update webresource failed because the setting webresource.iscustomizable = false - ", ConsoleColor.Green, webResourceFile.uniquename);
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
                                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, string.Format("{0,0}{1," + len + "}", "", current) + ": ", ConsoleColor.Red, "Update webresource failed because the setting webresource.iscustomizable = false - ", ConsoleColor.Green, webResourceFile.uniquename);
                                return;
                            }
                        }
                        webResourceId = entity.Id;
                        content = entity?["content"]?.ToString();
                        break;
                    }
                }
            }
            var fileContent = Convert.ToBase64String(File.ReadAllBytes(webResourceFile.file));
            if (fileContent == content)
            {
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", current) + ": ", ConsoleColor.Green, CliAction.DoNothing, ConsoleColor.White, webResourceFile.file.Substring(CurrentDirectory.Length + 1));
                AddWebResourceToSolution(new Entity("webresource")
                {
                    ["name"] = webResourceFile.uniquename,
                    ["webresourceid"] = webResourceId
                });
                return;
            }
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
                    var res = (RetrieveProvisionedLanguagesResponse)CrmServiceClient.Execute(req);
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
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", current), ": ", ConsoleColor.Magenta, "Creating", ConsoleColor.Green, " WebResource ", ConsoleColor.Cyan, webResourceFile.file, ConsoleColor.Green, " to ", ConsoleColor.Cyan, webResourceFile.uniquename);
                webResourceId = CrmServiceClient.Create(webResource);
                webResource["webresourceid"] = webResourceId;
            }
            else
            {
                webResource["webresourceid"] = webResourceId;
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, string.Format("{0,0}{1," + len + "}", "", current), ": ", ConsoleColor.Magenta, "Updating", ConsoleColor.Green, " WebResource ", ConsoleColor.Cyan, webResourceFile.file, ConsoleColor.Green, " to ", ConsoleColor.Cyan, webResourceFile.uniquename);
                CrmServiceClient.Update(webResource);
            }
            WebResourcesToPublish.Add(webResourceId);
            AddWebResourceToSolution(webResource);
        }

        private void AddWebResourceToSolution(Entity webResource)
        {
            var fetchData = new
            {
                objectid = Guid.Parse(webResource["webresourceid"].ToString()),
                componenttype = 61,
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
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 0) return;
            var request = new AddSolutionComponentRequest
            {
                AddRequiredComponents = true,
                ComponentType = 61,
                ComponentId = Guid.Parse(webResource["webresourceid"].ToString()),
                SolutionUniqueName = json.solution
            };
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Magenta, " Adding ", ConsoleColor.Green, "WebResource: ", ConsoleColor.Magenta, $"{webResource["name"]} ", ConsoleColor.Green, "to solution: ", ConsoleColor.Magenta, $"{json.solution}");
            CrmServiceClient.Execute(request);
        }

        private bool? _isSupportWebResourceDependency = (bool?)null;
        private bool IsSupportWebResourceDependency
        {
            get
            {
                if (_isSupportWebResourceDependency != null) return _isSupportWebResourceDependency.Value;
                var request = new RetrieveVersionRequest();
                var response = (RetrieveVersionResponse)CrmServiceClient.Execute(request);
                var version = new Version(response.Version);
                _isSupportWebResourceDependency = version >= new Version("9.0");
                return _isSupportWebResourceDependency.Value;
            }
        }

        private List<Dependency> _dependencies = null;
        private List<Dependency> Dependencies
        {
            get
            {
                if (_dependencies != null) return _dependencies;
                _dependencies = new List<Dependency>();
                var dependencies = TransformPattern(json.dependencies, WebResourceFiles);
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
        }

        private List<WebResourceFile> _webResourceFiles = null;
        private List<WebResourceFile> WebResourceFiles
        {
            get
            {
                if (_webResourceFiles != null) return _webResourceFiles;
                _webResourceFiles = new List<WebResourceFile>();
                var includeFiles = new List<string>();
                foreach (var pattern in json.includefiles)
                {
                    var filePattern = $"{CurrentDirectory}\\{json.rootfolder}\\{pattern}";
                    filePattern = filePattern.Replace(@"\\", @"\");
                    includeFiles.AddRange(GetFiles(filePattern));
                }
                includeFiles = includeFiles.Distinct().ToList();
                var excludeFiles = new List<string>();
                foreach (var pattern in json.excludefiles)
                {
                    var filePattern = $"{CurrentDirectory}\\{json.rootfolder}\\{pattern}";
                    filePattern = filePattern.Replace(@"\\", @"\");
                    excludeFiles.AddRange(GetFiles(filePattern));
                }
                var files = includeFiles.Where(file => !excludeFiles.Contains(file)).ToList();
                foreach (var file in files)
                {
                    var name = file
                        .Substring($"{CurrentDirectory}\\{json.rootfolder}\\".Replace(@"\\", @"\").Length)
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

        private List<Dependency> TransformPattern(IEnumerable<Dependency> dependencies, IEnumerable<WebResourceFile> webResourceFiles)
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

    }
}
