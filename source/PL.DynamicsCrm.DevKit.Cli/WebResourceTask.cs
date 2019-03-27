using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using PL.DynamicsCrm.DevKit.Cli.Models;

namespace PL.DynamicsCrm.DevKit.Cli
{
    public class WebResourceTask
    {
        public WebResourceTask(CrmServiceClient crmServiceClient, string currentDirectory, WebResource webResourceJson, string version)
        {
            CrmServiceClient = crmServiceClient;
            CurrentDirectory = currentDirectory;
            WebResourceJson = webResourceJson;
            Version = version;
            WebResourcesToPublish = new List<Guid>();
        }

        private CrmServiceClient CrmServiceClient { get; }
        private WebResource WebResourceJson { get; }
        private string CurrentDirectory { get; }
        private string Version { get; }
        private List<Guid> WebResourcesToPublish { get; }

        private List<WebResourceFile> WebResourceFiles
        {
            get
            {
                var items = new List<WebResourceFile>();
                var includeFiles = new List<string>();
                foreach (var pattern in WebResourceJson.includefiles)
                {
                    var filePattern = $"{CurrentDirectory}\\{WebResourceJson.rootfolder}\\{pattern}";
                    filePattern = filePattern.Replace(@"\\", @"\");
                    includeFiles.AddRange(GetFiles(filePattern));
                }
                includeFiles = includeFiles.Distinct().ToList();
                var excludeFiles = new List<string>();
                foreach (var pattern in WebResourceJson.excludefiles)
                {
                    var filePattern = $"{CurrentDirectory}\\{WebResourceJson.rootfolder}\\{pattern}";
                    filePattern = filePattern.Replace(@"\\", @"\");
                    excludeFiles.AddRange(GetFiles(filePattern));
                }
                var files = includeFiles.Where(file => !excludeFiles.Contains(file)).ToList();
                foreach (var file in files)
                {
                    var name = file
                        .Substring($"{CurrentDirectory}\\{WebResourceJson.rootfolder}\\".Replace(@"\\", @"\").Length)
                        .Replace("\\", "/");
                    if (!name.StartsWith(WebResourceJson.prefix))
                        name = WebResourceJson.prefix + "/" + name;
                    var webResourceFile = new WebResourceFile
                    {
                        file = file,
                        version = Version,
                        uniquename = name,
                        displayname = name
                    };
                    items.Add(webResourceFile);
                }
                return items;
            }
        }

        public void Run()
        {
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorGreen, "START WEBRESOURCE TASKS");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            var files = WebResourceFiles;
            if (!files.Any()) throw new Exception("No webresource files found. Please check PL.DynamicsCrm.DevKit.Cli.json file !!!");
            if (WebResourceJson.solution.Length == 0 || WebResourceJson.solution == "???") throw new Exception("No solution found in webresource profile. Please check PL.DynamicsCrm.DevKit.Cli.json file !!!");
            if (WebResourceJson.prefix.Length == 0 || WebResourceJson.prefix == "???") throw new Exception("No prefix found in webresource profile. Please check PL.DynamicsCrm.DevKit.Cli.json file !!!");
            var totalWebResources = files.Count;
            CliLog.WriteLine(CliLog.ColorGreen, "Found: ", CliLog.ColorCyan, totalWebResources, CliLog.ColorGreen, " webresources");
            var i = 1;
            foreach (var webResourceFile in files)
            {
                DeployWebResource(webResourceFile, i, totalWebResources);
                i++;
            }
            if (IsSupportWebResourceDependency)
            {
                var dependencies = MergeDependencies(WebResourceJson.dependencies, files);
                CliLog.WriteLine(CliLog.ColorGreen, "Found: ", CliLog.ColorCyan, dependencies.Count, CliLog.ColorGreen, " dependencies");
                var j = 1;
                foreach (var dependency in dependencies)
                {
                    UpdateDependency(dependency, j, dependencies.Count);
                    j++;
                }
            }
            if (WebResourcesToPublish.Count > 0)
                PublishWebResources();
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorGreen, "END WEBRESOURCE TASKS");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
        }

        private List<Dependency> MergeDependencies(IEnumerable<Dependency> dependencies, IEnumerable<WebResourceFile> webResourceFiles)
        {
            dependencies = TransformPattern(dependencies, webResourceFiles);
            var list = new List<Dependency>();
            foreach(var dependency in dependencies)
            {
                foreach(var webResource in dependency.webresources)
                {
                    var found = list.FirstOrDefault(d => d.webresources.Contains(webResource));
                    if (found == null)
                    {
                        list.Add(new Dependency
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
            return list;
        }

        private List<Dependency> TransformPattern(IEnumerable<Dependency> dependencies, IEnumerable<WebResourceFile> webResourceFiles)
        {
            var list = new List<Dependency>();
            var entities = webResourceFiles
                .Where(w => w.file.EndsWith(".form.js"))
                .Select(s => Path.GetFileName(s.file))
                .Select(s => s.Substring(0, s.Length - ".form.js".Length))
                .ToList();
            foreach (var dependency in dependencies)
            {
                if(!dependency.webresources.Any(w => w.Contains("[entity]")) &&
                   !dependency.dependencies.Any(w => w.Contains("[entity]")))
                {
                    list.Add(dependency);
                }
                else
                {
                    foreach(var entity in entities)
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

        private void UpdateDependency(Dependency dependency, int j, int count)
        {
            var len = count.ToString().Length;
            List<string> dependencies = dependency.dependencies;
            dependencies = dependencies.Distinct().ToList();
            dependency.dependencies = dependencies;
            var dependencyXml = GetDependencyXml(dependency.dependencies);
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
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", j) + ": ", CliLog.ColorRed, "No Change ", CliLog.ColorGreen, webResourceName);
                    return;
                }
                if (existingDependencyXml != dependencyXml)
                {
                    var webResourceId = rows.Entities[0].Id;
                    var entity = new Entity("webresource", webResourceId)
                    {
                        ["dependencyxml"] = dependencyXml
                    };
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", j), ": ", CliLog.ColorRed, "Updated", CliLog.ColorBlue, " Dependency Webresource ", CliLog.ColorCyan, webResourceName);
                    foreach(var d in dependency.dependencies)
                        CliLog.WriteLine(CliLog.ColorWhite, "\t" + d);
                    CrmServiceClient.Update(entity);
                    if (!WebResourcesToPublish.Contains(webResourceId))
                        WebResourcesToPublish.Add(webResourceId);
                }
                else
                {
                    CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", j) + ": ", CliLog.ColorRed, "No Change ", CliLog.ColorGreen, webResourceName);
                }
            }
        }

        private string GetDependencyXml(IEnumerable<string> dependencies)
        {
            var library = string.Empty;
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
                }
            }
            if (library.Length == 0) return library;
            var dependencyXml = $"<Dependencies><Dependency componentType='WebResource'>{library}</Dependency></Dependencies>";
            dependencyXml = dependencyXml.Replace("'", "\"");
            return dependencyXml;
        }

        private void DeployWebResource(WebResourceFile webResourceFile, int current, int totalWebResources)
        {
            var len = totalWebResources.ToString().Length;
            if (webResourceFile.uniquename.StartsWith("/"))
                webResourceFile.uniquename = webResourceFile.uniquename.Substring(1);

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
                    var iscustomizable = entity.GetAttributeValue<BooleanManagedProperty>("iscustomizable");
                    if (iscustomizable?.Value == false)
                    {
                        CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", current) + ": ", CliLog.ColorRed, "Update webresource failed: ", CliLog.ColorGreen, webResourceFile.uniquename);
                        return;
                    }
                    webResourceId = entity.Id;
                    content = entity?["content"]?.ToString();
                }
                else
                {
                    foreach(var row in rows.Entities)
                    {
                        if (row.GetAttributeValue<string>("name") != fetchData.name) continue;
                        var iscustomizable = row.GetAttributeValue<BooleanManagedProperty>("iscustomizable");
                        if (iscustomizable?.Value == false)
                        {
                            CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", current) + ": ", CliLog.ColorRed, "Update webresource failed: ", CliLog.ColorGreen, webResourceFile.uniquename);
                            return;
                        }
                        webResourceId = row.Id;
                        content = row?["content"]?.ToString();
                        break;
                    }
                }
            }
            var fileContent = Convert.ToBase64String(File.ReadAllBytes(webResourceFile.file));
            if (fileContent == content)
            {
                CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", current) + ": ", CliLog.ColorRed, "No Change ", CliLog.ColorGreen, webResourceFile.file.Substring(CurrentDirectory.Length + 1));
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
            webResource["webresourcetype"] = new OptionSetValue((int) fileType);
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
                CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", current), ": ",  CliLog.ColorRed, "Creating", CliLog.ColorGreen, " WebResource ", CliLog.ColorCyan, webResourceFile.file, CliLog.ColorGreen, " to ", CliLog.ColorCyan, webResourceFile.uniquename);
                webResourceId = CrmServiceClient.Create(webResource);
                webResource["webresourceid"] = webResourceId;
            }
            else
            {
                webResource["webresourceid"] = webResourceId;
                CliLog.WriteLine(CliLog.ColorCyan, string.Format("{0,0}|{1," + len + "}", "", current), ": ", CliLog.ColorRed, "Updating", CliLog.ColorBlue, " WebResource ", CliLog.ColorCyan, webResourceFile.file, CliLog.ColorGreen, " to ", CliLog.ColorCyan, webResourceFile.uniquename);
                CrmServiceClient.Update(webResource);
            }
            WebResourcesToPublish.Add(webResourceId);
            AddWebResourceToSolution(webResource);
            return;
        }

        private void AddWebResourceToSolution(Entity webResource)
        {
            var fetchData = new
            {
                objectid = Guid.Parse(webResource["webresourceid"].ToString()),
                componenttype = 61,
                uniquename = WebResourceJson.solution
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
                SolutionUniqueName = WebResourceJson.solution
            };
            CliLog.WriteLine(CliLog.ColorCyan, "|", CliLog.ColorRed, "\tAdding", CliLog.ColorGreen, " WebResource: ", CliLog.ColorCyan,
                $"{webResource["name"]} ", CliLog.ColorGreen, "to solution: ", CliLog.ColorCyan,
                $"{WebResourceJson.solution}");
            CrmServiceClient.Execute(request);
        }

        private void PublishWebResources()
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
            CliLog.WriteLine(CliLog.ColorYellow, "Publishing WebResources");
            CrmServiceClient.Execute(publish);
            CliLog.WriteLine(CliLog.ColorYellow, "Published WebResources");
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

        private bool? _isSupportWebResourceDependency;
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
    }
}
