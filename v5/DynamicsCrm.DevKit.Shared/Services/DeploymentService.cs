using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Services
{
    public class DeploymentService
    {
        private readonly ServiceClient _serviceClient;

        public DeploymentService(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        public async Task<List<Entity>> RetrieveAllRecordsByFetchXmlAsync(string fetchXml)
        {
            var allRecords = new List<Entity>();
            int pageNumber = 1;
            string pagingCookie = null;
            bool moreRecords = true;

            while (moreRecords)
            {
                var pagedFetchXml = CreatePagedFetchXml(fetchXml, pageNumber, pagingCookie);

                XrmHelper.COUNT_RetrieveMultipleAsync++;
                var response = await _serviceClient.RetrieveMultipleAsync(new FetchExpression(pagedFetchXml));

                allRecords.AddRange(response.Entities);

                moreRecords = response.MoreRecords;

                if (moreRecords)
                {
                    pageNumber++;
                    pagingCookie = response.PagingCookie;
                }
            }

            return allRecords;
        }

        private static string CreatePagedFetchXml(string fetchXml, int pageNumber, string pagingCookie)
        {
            var xml = System.Xml.Linq.XDocument.Parse(fetchXml);
            var fetchElement = xml.Root;

            fetchElement.SetAttributeValue("page", pageNumber.ToString());
            fetchElement.SetAttributeValue("count", "5000");

            if (!string.IsNullOrEmpty(pagingCookie))
            {
                fetchElement.SetAttributeValue("paging-cookie", pagingCookie);
            }

            return xml.ToString();
        }

        public async Task<(bool IsOk, Guid SolutionId, string Prefix)> IsExistSolutionAsync(string solutionuniquename)
        {
            var fetchData = new
            {
                uniquename = solutionuniquename
            };
            var fetchXml = $@"
<fetch>
  <entity name='solution'>
    <attribute name='solutionid' />
    <filter>
      <condition attribute='uniquename' operator='eq' value='{fetchData.uniquename}'/>
    </filter>
    <link-entity name='publisher' from='publisherid' to='publisherid' alias='p'>
      <attribute name='customizationprefix' />
    </link-entity>
  </entity>
</fetch>";

            XrmHelper.COUNT_RetrieveMultipleAsync++;
            var rows = await _serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return (false, Guid.Empty, string.Empty);
            var entity = rows.Entities[0];
            var solutionId = entity.Id;
            var prefix = $"{entity.GetAttributeValue<AliasedValue>("p.customizationprefix").Value}_";
            return (true, solutionId, prefix);
        }

        public async Task<List<DownloadFile>> GetReportsBySolutionAsync(string solution)
        {
            var fetchData = new
            {
                componenttype = "31",
                uniquename = solution
            };
            var fetchXml = $@"
<fetch>
  <entity name='report'>
    <attribute name='filename' />
    <attribute name='bodytext' />
    <attribute name='languagecode' />
    <order attribute='filename' />
    <link-entity name='solutioncomponent' from='objectid' to='reportid' link-type='inner' alias='sc'>
      <filter type='and'>
        <condition attribute='componenttype' operator='eq' value='{fetchData.componenttype}'/>
      </filter>
      <link-entity name='solution' from='solutionid' to='solutionid' link-type='inner' alias='s'>
        <filter type='and'>
          <condition attribute='uniquename' operator='eq' value='{fetchData.uniquename}'/>
        </filter>
      </link-entity>
    </link-entity>
    <link-entity name='languagelocale' from='localeid' to='languagecode' link-type='inner' alias='l'>
      <attribute name='language' />
    </link-entity>
  </entity>
</fetch>";

            var rows = await _serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            var list = new List<DownloadFile>();
            foreach (var entity in rows.Entities)
            {
                list.Add(new DownloadFile
                {
                    Content = entity.GetAttributeValue<string>("bodytext"),
                    FileName = entity.GetAttributeValue<string>("filename"),
                    Language = entity.GetAttributeValue<AliasedValue>("l.language")?.Value?.ToString() ?? "English",
                    ObjectId = entity.Id
                });
            }
            return list;
        }

        public async Task DeployReportAsync(Guid reportId, string fullFileName)
        {
            var update = new Entity("report", reportId);
            update["bodytext"] = await FileHelper.ReadAllTextAsync(fullFileName);
            await _serviceClient.UpdateAsync(update);
        }

        public async Task<List<DeployWebResource>> GetWebResourcesAsync(string fullFileName)
        {
            var parts = fullFileName.Split(['\\', '/'], StringSplitOptions.RemoveEmptyEntries);
            var condition = string.Empty;
            for (var i = parts.Length - 1; i >= 0; i--)
            {
                var value = "/";
                for (var j = i; j < parts.Length; j++)
                {
                    value += parts[j] + "/";
                }
                value = value.TrimEnd('/');
                condition += $"<condition attribute='name' operator='ends-with' value='{value}'/>" + "{NEW_LINE}";
            }
            var fileNameWithoutExtension = Path.GetFileNameWithoutExtension(fullFileName);
            condition += $"<condition attribute='name' operator='like' value='%{fileNameWithoutExtension}%'/>" + "{NEW_LINE}";
            var fetchXml = $@"
<fetch>
  <entity name='webresource'>
    <attribute name='webresourceid' />
    <attribute name='name' />
    <attribute name='ismanaged' />
    <filter type='or'>
      {condition}
    </filter>
  </entity>
</fetch>";
            var rows = await _serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            var webResources = new List<DeployWebResource>();
            foreach (var entity in rows.Entities)
            {
                webResources.Add(new DeployWebResource
                {
                    WebResource = entity.GetAttributeValue<string>("name") ?? string.Empty,
                    WebResourceId = entity.Id,
                    IsManaged = entity.GetAttributeValue<bool?>("ismanaged") ?? false
                });
            }
            return webResources;
        }

        public async Task<(bool ok, string message)> DeployWebResourceAsync(string fullFileName, Guid webResourceId)
        {
            try
            {
                var webResource = new Entity("webresource") { Id = webResourceId };
                webResource["content"] = Convert.ToBase64String(File.ReadAllBytes(fullFileName));
                var request = new UpdateRequest { Target = webResource };
                var response = await _serviceClient.ExecuteAsync(request);
                return (true, string.Empty);
            }
            catch (Exception e)
            {
                return (false, e.Message);
            }
        }

        public async Task<(Guid webResourceId, string message)> DeployNewWebResourceAsync(string fullFileName, string webResourceName)
        {
            try
            {
                var fileContent = Convert.ToBase64String(File.ReadAllBytes(fullFileName));
                var webResource = new Entity("webresource")
                {
                    ["name"] = webResourceName,
                    ["displayname"] = webResourceName,
                    ["content"] = fileContent
                };
                var webResourceFileInfo = new FileInfo(fullFileName);
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
                        var res = (RetrieveProvisionedLanguagesResponse)await _serviceClient.ExecuteAsync(req);
                        if (res.RetrieveProvisionedLanguages.Contains(languagecode))
                        {
                            webResource["languagecode"] = languagecode;
                        }
                        else
                        {
                            throw new Exception($"Language code not found: {languagecode}");
                        }
                    }
                }
                var webResourceId = await _serviceClient.CreateAsync(webResource);
                return (webResourceId, string.Empty);
            }
            catch (Exception e)
            {
                return (Guid.Empty, e.Message);
            }
        }

        public async Task<(bool ok, string message)> PublishWebResourceAsync(Guid webResourceId)
        {
            try
            {
                var publishXml = $"<importexportxml><webresources><webresource>{webResourceId}</webresource></webresources></importexportxml>";
                var request = new PublishXmlRequest { ParameterXml = publishXml };
                var response = await _serviceClient.ExecuteAsync(request);
                return (true, string.Empty);
            }
            catch (Exception e)
            {
                return (false, e.Message);
            }
        }

        public async Task<List<NameValueGuidExtend>> GetSolutionsAsync()
        {
            var fetchData = new
            {
                ismanaged = "0",
                uniquename = "Default",
                uniquename2 = "Active",
                uniquename3 = "Basic"
            };
            var fetchXml = $@"
<fetch>
  <entity name='solution'>
    <attribute name='solutionid' />
    <attribute name='uniquename' />
    <filter>
      <condition attribute='ismanaged' operator='eq' value='{fetchData.ismanaged/*0*/}'/>
      <condition attribute='uniquename' operator='neq' value='{fetchData.uniquename/*Default*/}'/>
      <condition attribute='uniquename' operator='neq' value='{fetchData.uniquename2/*Active*/}'/>
      <condition attribute='uniquename' operator='neq' value='{fetchData.uniquename3/*Basic*/}'/>
    </filter>
    <order attribute='uniquename' />
    <link-entity name='publisher' from='publisherid' to='publisherid' alias='p'>
      <attribute name='customizationprefix' />
      <filter>
        <condition attribute='customizationprefix' operator='not-null' />
      </filter>
    </link-entity>
  </entity>
</fetch>";
            var rows = await _serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            var list = new List<NameValueGuidExtend>();
            foreach (var entity in rows.Entities)
            {
                list.Add(new NameValueGuidExtend
                {
                    Name = entity.GetAttributeValue<string>("uniquename") ?? string.Empty,
                    Value = entity.Id,
                    SolutionPrefix = entity.GetAttributeValue<AliasedValue>("p.customizationprefix")?.Value.ToString() ?? string.Empty,
                    SolutionUniqueName = entity.GetAttributeValue<string>("uniquename") ?? string.Empty
                });
            }
            return list;
        }

        public async Task<List<DownloadFile>> GetWebResourcesBySolutionAsync(string solution)
        {
            var fetchData = new
            {
                uniquename = solution
            };
            var fetchXml = $@"
<fetch>
  <entity name='webresource'>
    <attribute name='name' />
    <attribute name='webresourcetype' />
    <attribute name='content' />
    <order attribute='name' />
    <link-entity name='solutioncomponent' from='objectid' to='webresourceid' link-type='inner' alias='sc'>
      <link-entity name='solution' from='solutionid' to='solutionid' link-type='inner' alias='s'>
        <filter type='and'>
          <condition attribute='uniquename' operator='eq' value='{fetchData.uniquename}'/>
        </filter>
      </link-entity>
    </link-entity>
  </entity>
</fetch>";
            var rows = await _serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            var list = new List<DownloadFile>();
            foreach (var entity in rows.Entities)
            {
                var name = entity.GetAttributeValue<string>("name");
                var webresourcetype = (WebResourceWebResourceType)entity.GetAttributeValue<OptionSetValue>("webresourcetype").Value;
                var content = entity.GetAttributeValue<string>("content");
                var extension = Helper.GetExtension(webresourcetype);
                if (name.StartsWith("/")) name = name.Substring(1);
                if (name.EndsWith(extension)) name = name.Substring(0, name.Length - extension.Length);
                var fileName = $"{name.Replace("/", "\\")}{extension}";
                list.Add(new DownloadFile
                {
                    Content = content,
                    FileName = fileName,
                    ObjectId = entity.Id
                });
            }
            return list;
        }

        public async Task AddWebResourceToSolutionAsync(Guid webResourceId, string solutionUniqueName)
        {
            var request = new AddSolutionComponentRequest
            {
                AddRequiredComponents = true,
                ComponentType = 61,
                ComponentId = webResourceId,
                SolutionUniqueName = solutionUniqueName
            };
            await _serviceClient.ExecuteAsync(request);
        }

        public static async Task<ServiceClient> IsConnectedAsync(string connectionString)
        {
            try
            {
                var serviceClient = new ServiceClient(connectionString);
                await Task.Delay(100);
                if (serviceClient.IsReady)
                {
                    return serviceClient;
                }
                var timeout = TimeSpan.FromSeconds(30);
                var start = DateTime.Now;
                while (!serviceClient.IsReady && DateTime.Now - start < timeout)
                {
                    await Task.Delay(500);
                }
                return serviceClient.IsReady ? serviceClient : null;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static T GetAliasedValue<T>(Entity entity, string name)
        {
            var aliased = entity.GetAttributeValue<AliasedValue>(name);
            if (aliased == null) return default;
            if (typeof(T) == typeof(EntityReference) && aliased.Value is Guid guid)
                return (T)(object)new EntityReference(aliased.EntityLogicalName, guid);
            if (typeof(T) == typeof(Guid) && aliased.Value is EntityReference reference)
                return (T)(object)reference.Id;
            return (T)aliased.Value;
        }

        public async Task<Entity> GetEntityDataProviderIdAsync(string dataSource)
        {
            var fetchData = new
            {
                datasourcelogicalname = dataSource
            };
            var fetchXml = $@"
<fetch>
  <entity name='entitydataprovider'>
    <attribute name='entitydataproviderid' />
    <attribute name='retrievemultipleplugin' />
    <attribute name='createplugin' />
    <attribute name='deleteplugin' />
    <attribute name='updateplugin' />
    <attribute name='retrieveplugin' />
    <filter>
      <condition attribute='datasourcelogicalname' operator='eq' value='{fetchData.datasourcelogicalname}'/>
    </filter>
  </entity>
</fetch>";
            XrmHelper.COUNT_RetrieveMultipleAsync++;
            var rows = await _serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return null;
            return rows.Entities[0];
        }

        public async Task<bool> IsVirtualTableSupportCRUDAsync()
        {
            var request = new RetrieveVersionRequest();
            XrmHelper.COUNT_ExecuteAsync++;
            var response = (RetrieveVersionResponse)await _serviceClient.ExecuteAsync(request);
            return new Version(response.Version) >= new Version("9.1.0.18950");
        }
    }
}
