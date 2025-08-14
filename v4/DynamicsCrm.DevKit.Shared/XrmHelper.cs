using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Metadata.Query;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared
{
    public static class XrmHelper
    {
        private const string NEW_LINE = "\r\n";
        private const string TAB = "\t";

        public static List<EntityMetadata> EntitiesMetadata { get; set; } = new List<EntityMetadata>();
        public static List<SystemForm> EntitiesFormXml { get; set; } = new List<SystemForm>();
        public static List<ProcessForm> EntitiesProcessForm { get; set; } = new List<ProcessForm>();

        public static string GetConnectedUrl(ServiceClient service)
        {
            if (service?.ConnectedOrgUriActual == null) return null;
            var uri = service.ConnectedOrgUriActual;
            var url = uri.GetLeftPart(UriPartial.Authority);
            if (url.Contains(".api.")) url = url.Replace(".api.", ".");
            return url;
        }

        public static async Task<(bool IsOk, Guid SolutionId, string Prefix)> IsExistSolutionAsync(ServiceClient serviceClient, string solutionuniquename)
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

            var rows = await serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return (false, Guid.Empty, string.Empty);
            var entity = rows.Entities[0];
            var solutionId = entity.Id;
            var prefix = $"{entity.GetAttributeValue<AliasedValue>("p.customizationprefix").Value}_";
            return (true, solutionId, prefix);
        }

        public static async Task<bool> IsExistDataSourceAsync(ServiceClient serviceClient, string logicalname)
        {
            logicalname = logicalname.ToLower();
            var filterExpression = new MetadataFilterExpression();
            filterExpression.Conditions.Add(new MetadataConditionExpression("DataProviderId", MetadataConditionOperator.Equals, Guid.Parse("B2112A7E-B26C-42F7-9B63-9A809A9D716F")));
            var propertiesExpression = new MetadataPropertiesExpression(new string[7]
            {
                "DataProviderId",
                "LogicalName",
                "SchemaName",
                "MetadataId",
                "DisplayName",
                "ExternalName",
                "DisplayCollectionName"
            });
            var entityQueryExpression = new EntityQueryExpression();
            entityQueryExpression.Criteria = new MetadataFilterExpression();
            entityQueryExpression.Criteria = filterExpression;
            entityQueryExpression.Properties = propertiesExpression;
            var request = new RetrieveMetadataChangesRequest
            {
                Query = entityQueryExpression
            };
            var response = (RetrieveMetadataChangesResponse)await serviceClient.ExecuteAsync(request);
            foreach (EntityMetadata entityMetadata in response.EntityMetadata)
                if (entityMetadata.LogicalName == logicalname)
                    return true;
            return false;
        }

        public static async Task<List<DownloadFile>> GetReportsBySolutionAsync(ServiceClient service, string solution)
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
        <condition attribute='componenttype' operator='eq' value='{fetchData.componenttype}'/
      </filter>
      <link-entity name='solution' from='solutionid' to='solutionid' link-type='inner' alias='s'>
        <filter type='and'>
          <condition attribute='uniquename' operator='eq' value='{fetchData.uniquename}'/
        </filter>
      </link-entity>
    </link-entity>
    <link-entity name='languagelocale' from='localeid' to='languagecode' link-type='inner' alias='l'>
      <attribute name='language' />
    </link-entity>
  </entity>
</fetch>";

            var rows = await service.RetrieveMultipleAsync(new FetchExpression(fetchXml));
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

        public static async Task DeployReportAsync(ServiceClient service, Guid reportId, string fullFileName)
        {
            var update = new Entity("report", reportId);
            update["bodytext"] = File.ReadAllText(fullFileName);
            await service.UpdateAsync(update);
        }

        public static async Task<List<EntityMetadata>> GetEntitiesMetadataAsync(ServiceClient service)
        {
            var request = new RetrieveAllEntitiesRequest
            {
                EntityFilters = EntityFilters.All,
                RetrieveAsIfPublished = true
            };
            var response = (RetrieveAllEntitiesResponse)await service.ExecuteAsync(request);
            return response.EntityMetadata.ToList();
        }

        public static async Task<List<string>> GetAllEntitiesSchemaAsync(ServiceClient service)
        {
            var request = new RetrieveAllEntitiesRequest
            {
                EntityFilters = EntityFilters.All,
                RetrieveAsIfPublished = true
            };
            var response = (RetrieveAllEntitiesResponse)await service.ExecuteAsync(request);
            return response.EntityMetadata.ToList().Select(x => x.SchemaName).ToList();
        }

        public static async Task<List<EntityMetadata>> GetEntitiesMetadataAsync(ServiceClient service, List<string> schemaNames)
        {
            var request = new ExecuteMultipleRequest()
            {
                Settings = new ExecuteMultipleSettings()
                {
                    ContinueOnError = true,
                    ReturnResponses = true
                },
                Requests = new OrganizationRequestCollection()
            };
            foreach (var schemaName in schemaNames)
                request.Requests.Add(new RetrieveEntityRequest { EntityFilters = EntityFilters.All, LogicalName = schemaName.ToLower() });
            var list = new List<EntityMetadata>();
            ExecuteMultipleResponse response = (ExecuteMultipleResponse)await service.ExecuteAsync(request);
            foreach (var result in response.Responses)
            {
                if (result.Fault == null)
                    list.Add(((RetrieveEntityResponse)result.Response).EntityMetadata);
                else
                {
                    var errorRequest = request.Requests[result.RequestIndex] as RetrieveEntityRequest;
                    var entityMetadataError = new EntityMetadata
                    {
                        LogicalName = errorRequest.LogicalName,
                        SchemaName = errorRequest.LogicalName
                    };
                    list.Add(entityMetadataError);
                }
            }
            return list;
        }

        public static async Task<EntityMetadata> GetEntityMetadataAsync(ServiceClient service, string entityLogicalName)
        {
            var entities = await GetEntitiesMetadataAsync(service, new List<string> { entityLogicalName });
            return entities.FirstOrDefault();
        }

        public static async Task ReadEntitiesMetadataAsync(ServiceClient service)
        {
            if (XrmHelper.EntitiesMetadata.Count == 0)
            {
                XrmHelper.EntitiesMetadata = await XrmHelper.GetEntitiesMetadataAsync(service);
            }
        }

        public static async Task ReadEntitiesFormXmlAsync(ServiceClient service)
        {
            if (XrmHelper.EntitiesFormXml.Count == 0)
            {
                XrmHelper.EntitiesFormXml = await XrmHelper.GetEntitiesFormXmlAsync(service);
            }
        }

        public static async Task<List<SystemForm>> GetEntityFormXmlAsync(ServiceClient service, int? objectTypeCode)
        {
            var fetchData = new
            {
                formactivationstate = "1",
                type = (int)FormType.Main,
                type2 = (int)FormType.QuickCreate,
                type3 = (int)FormType.QuickView,
                objecttypecode = objectTypeCode ?? -1
            };
            var fetchXml = $@"
<fetch>
  <entity name='systemform'>
    <attribute name='description' />
    <attribute name='name' />
    <attribute name='formxml' />
    <attribute name='type' />
    <attribute name='objecttypecode' />
    <attribute name='formid' />
    <order attribute='name' descending='false'/>
    <filter type='and'>
      <condition attribute='formactivationstate' operator='eq' value='{fetchData.formactivationstate}'/>
      <condition attribute='objecttypecode' operator='eq' value='{fetchData.objecttypecode}'/>
      <filter type='or'>
        <condition attribute='type' operator='eq' value='{fetchData.type}'/>
        <condition attribute='type' operator='eq' value='{fetchData.type2}'/>
        <condition attribute='type' operator='eq' value='{fetchData.type3}'/>
      </filter>
    </filter>
  </entity>
</fetch>";
            var rows = await service.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return new List<SystemForm>();
            var forms = rows.Entities.Select(x => new SystemForm
            {
                Name = x.GetAttributeValue<string>("name"),
                Description = x.GetAttributeValue<string>("description"),
                FormXml = x.GetAttributeValue<string>("formxml"),
                IsQuickCreate = x.GetAttributeValue<OptionSetValue>("type")?.Value == 7,
                EntityLogicalName = x.GetAttributeValue<string>("objecttypecode"),
                FormType = (FormType)x.GetAttributeValue<OptionSetValue>("type")?.Value,
                FormId = x.GetAttributeValue<Guid?>("formid")
            });
            return forms.OrderBy(x => x.EntityLogicalName).ThenBy(x => x.Name).ToList();
        }

        public static async Task<List<SystemForm>> GetEntitiesFormXmlAsync(ServiceClient service)
        {
            var fetchData = new
            {
                formactivationstate = "1",
                type = (int)FormType.Main,
                type2 = (int)FormType.QuickCreate,
                type3 = (int)FormType.QuickView
            };
            var fetchXml = $@"
<fetch>
  <entity name='systemform'>
    <attribute name='description' />
    <attribute name='name' />
    <attribute name='formxml' />
    <attribute name='type' />
    <attribute name='objecttypecode' />
    <attribute name='formid' />
    <order attribute='name' descending='false'/>
    <filter type='and'>
      <condition attribute='formactivationstate' operator='eq' value='{fetchData.formactivationstate}'/>
      <filter type='or'>
        <condition attribute='type' operator='eq' value='{fetchData.type}'/>
        <condition attribute='type' operator='eq' value='{fetchData.type2}'/>
        <condition attribute='type' operator='eq' value='{fetchData.type3}'/>
      </filter>
    </filter>
  </entity>
</fetch>";
            var rows = await service.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            var forms = rows.Entities.Select(x => new SystemForm
            {
                Name = x.GetAttributeValue<string>("name"),
                Description = x.GetAttributeValue<string>("description"),
                FormXml = x.GetAttributeValue<string>("formxml"),
                IsQuickCreate = x.GetAttributeValue<OptionSetValue>("type")?.Value == 7,
                EntityLogicalName = x.GetAttributeValue<string>("objecttypecode"),
                FormType = (FormType)x.GetAttributeValue<OptionSetValue>("type")?.Value,
                FormId = x.GetAttributeValue<Guid?>("formid")
            });
            return forms.OrderBy(x => x.EntityLogicalName).ThenBy(x => x.Name).ToList();
        }

        public static async Task<CommentTypeScriptDeclaration> GetCommentAsync(ServiceClient service, string entityLogicalName, string dtsFile)
        {
            if (File.Exists(dtsFile))
            {
                var lines = File.ReadAllLines(dtsFile);
                try
                {
                    var json = lines[lines.Length - 1];
                    var oldComment = SimpleJson.DeserializeObject<OldCommentTypeScriptDeclaration>(json.Substring("//".Length).Replace("'", "\""));
                    var comment = SimpleJson.DeserializeObject<CommentTypeScriptDeclaration>(json.Substring("//".Length).Replace("'", "\""));
                    if (oldComment?.JsForm?.Count >= 0)
                    {
                        comment.UseForm = oldComment?.JsForm?.Count > 0;
                        comment.UseWebApi = oldComment.JsWebApi;
                    }
                    if (string.IsNullOrEmpty(comment.Version)) comment.Version = Const.Version;
                    return comment;
                }
                catch
                {
                    return new CommentTypeScriptDeclaration
                    {
                        UseForm = false,
                        UseWebApi = false,
                        Version = Const.Version
                    };
                }
            }
            else
            {
                await XrmHelper.EntitiesFormXml.AddIfNotExistAsync(service, entityLogicalName);
                return new CommentTypeScriptDeclaration
                {
                    UseForm = XrmHelper.EntitiesFormXml.Any(x => x.EntityLogicalName == entityLogicalName),
                    UseWebApi = true,
                    Version = Const.Version
                };
            }
        }

        public static async Task<List<SystemForm>> GetEntityFormsAsync(ServiceClient service, string entityLogicalName)
        {
            await XrmHelper.EntitiesFormXml.AddIfNotExistAsync(service, entityLogicalName);
            var forms = XrmHelper.EntitiesFormXml
                .Where(x => x.EntityLogicalName == entityLogicalName && (x.FormType == FormType.Main || x.FormType == FormType.QuickCreate))
                .OrderBy(x => x.Name)
                .ToList();
            return forms;
        }

        public static async Task<List<DeployWebResource>> GetWebResourcesAsync(ServiceClient serviceClient, string fullFileName)
        {
            var parts = fullFileName.Split(new[] { '\\', '/' }, StringSplitOptions.RemoveEmptyEntries);
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
            var rows = await serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
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

        public static async Task<bool> DeployWebResourceAsync(ServiceClient service, string fullFileName, Guid webResourceId)
        {
            try
            {
                var webResource = new Entity("webresource") { Id = webResourceId };
                webResource["content"] = Convert.ToBase64String(File.ReadAllBytes(fullFileName));
                var request = new UpdateRequest { Target = webResource };
                var response = await service.ExecuteAsync(request);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public static async Task<Guid> DeployNewWebResourceAsync(ServiceClient serviceClient, string fullFileName, string webResourceName)
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
                        var res = (RetrieveProvisionedLanguagesResponse)await serviceClient.ExecuteAsync(req);
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
                var webResourceId = await serviceClient.CreateAsync(webResource);
                return webResourceId;
            }
            catch
            {
                return Guid.Empty;
            }
        }

        public static async Task<bool> PublishWebResourceAsync(ServiceClient service, Guid webResourceId)
        {
            try
            {
                var publishXml = $"<importexportxml><webresources><webresource>{webResourceId}</webresource></webresources></importexportxml>";
                var request = new PublishXmlRequest { ParameterXml = publishXml };
                var response = await service.ExecuteAsync(request);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public static async Task<List<NameValueGuidExtend>> GetSolutionsAsync(ServiceClient serviceClient)
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
            var rows = await serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
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

        public static async Task<int> GetLanguageCodeAsync(ServiceClient serviceClient)
        {
            var fetchXml = $@"
<fetch>
  <entity name='organization'>
    <attribute name='languagecode' />
  </entity>
</fetch>";
            var rows = await serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return 1033;
            var entity = rows.Entities[0];
            return entity.GetAttributeValue<int?>("languagecode") ?? 1033;
        }

        public static async Task<List<DownloadFile>> GetWebResourcesBySolutionAsync(ServiceClient serviceClient, string solution)
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
            var rows = await serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
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

        public static async Task<List<ProcessForm>> GetEntityProcessFormAsync(ServiceClient serviceClient, int? objectTypeCode, string logicalName)
        {
            var fetchData = new
            {
                category = "4",
                statecode = "1",
                businessprocesstype = "0",
                xaml = $"%: {logicalName}%",
                primaryentity = objectTypeCode ?? -1,
            };
            var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='workflow'>
    <attribute name='name' />
    <attribute name='uniquename' />
    <attribute name='xaml' />
    <attribute name='primaryentity' />
    <filter type='and'>
      <condition attribute='category' operator='eq' value='{fetchData.category/*4*/}'/>
      <condition attribute='statecode' operator='eq' value='{fetchData.statecode/*1*/}'/>
      <condition attribute='businessprocesstype' operator='eq' value='{fetchData.businessprocesstype/*0*/}'/>
      <filter type='or'>
        <condition attribute='xaml' operator='like' value='{fetchData.xaml/*%: contact%*/}'/>
        <condition attribute='primaryentity' operator='eq' value='{fetchData.primaryentity/*2*/}'/>
      </filter>
    </filter>
  </entity>
</fetch>";
            var rows = await serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            return rows.Entities.Select(x => new ProcessForm
            {
                EntityLogicalName = logicalName,
                Name = x.GetAttributeValue<string>("name"),
                xaml = x.GetAttributeValue<string>("xaml")
            }).ToList();
        }

        public static async Task<string> GetDefaultFileWithFormAsync(ServiceClient serviceClient, EntityMetadata entityMetadata, string rootnamespace)
        {
            string GetUnquieFormName(List<string> FormNames, string formName)
            {
                if (!FormNames.Contains(formName))
                {
                    FormNames.Add(formName);
                    return formName;
                }
                else
                {
                    var count = FormNames.Count(x => x == formName) + 1;
                    FormNames.Add(formName);
                    return $"{formName}{count}";
                }
            }
            var forms = await XrmHelper.GetEntityFormsAsync(serviceClient, entityMetadata.LogicalName);
            if (!forms.Any()) return Helper.GetDefaultFileWithWebApi(entityMetadata.SchemaName);
            var @namespace = Helper.GetNameSpace(rootnamespace);
            var code = string.Empty;
            code += $"//@ts-check{NEW_LINE}";
            code += $"///<reference path=\"{entityMetadata.SchemaName}.d.ts\" />{NEW_LINE}";
            code += "\"use strict\";{NEW_LINE}";
            var formNames = new List<string>();
            foreach (var form in forms)
            {
                var formName = Helper.GetFormName(form.Name, entityMetadata.SchemaName);
                formName = GetUnquieFormName(formNames, formName);
                var type = $"{@namespace}.Form{Helper.SafeIdentifier(formName)}";
                code += $"var form{Helper.SafeIdentifier(formName)} = (function () {{{NEW_LINE}";
                code += $"{TAB}\"use strict\";{NEW_LINE}";
                code += $"{TAB}/** @type {type} */{NEW_LINE}";
                code += $"{TAB}var form = null;{NEW_LINE}";
                code += $"{TAB}/** @param {{any}} executionContext */{NEW_LINE}";
                code += $"{TAB}async function onLoad(executionContext) {{{NEW_LINE}";
                code += $"{TAB}{TAB}form = new {type}(executionContext);{NEW_LINE}";
                code += $"{TAB}{TAB}registerEvents();{NEW_LINE}";
                code += $"{TAB}{TAB}form.UiAddLoaded(UiAddLoaded);{NEW_LINE}";
                code += $"{TAB}}}{NEW_LINE}";
                code += $"{TAB}function registerEvents() {{{NEW_LINE}";
                code += $"{TAB}{TAB}if (form.ExecutionContext.IsInitialLoad()) {{{NEW_LINE}";
                code += $"{TAB}{TAB}}}{NEW_LINE}";
                code += $"{TAB}}}{NEW_LINE}";
                code += $"{TAB}//BEGIN ON LOAD ========================================================{NEW_LINE}";
                code += $"{TAB}async function UiAddLoaded(executionContext) {{{NEW_LINE}";
                code += $"{TAB}}}{NEW_LINE}";
                code += $"{TAB}//END ON LOAD =========================================================={NEW_LINE}";
                code += $"{TAB}//BEGIN ON CHANGE ======================================================{NEW_LINE}";
                code += $"{NEW_LINE}";
                code += $"{TAB}//END ON CHANGE ========================================================{NEW_LINE}";
                code += $"{TAB}//BEGIN PRE SEARCH ====================================================={NEW_LINE}";
                code += $"{NEW_LINE}";
                code += $"{TAB}//END PRE SEARCH ======================================================={NEW_LINE}";
                code += $"{TAB}//BEGIN OTHERS ========================================================={NEW_LINE}";
                code += $"{NEW_LINE}";
                code += $"{TAB}//END OTHERS ==========================================================={NEW_LINE}";
                code += $"{TAB}return {{{NEW_LINE}{TAB}{TAB}OnLoad: onLoad{NEW_LINE}{TAB}}};{NEW_LINE}";
                code += $"}})();{NEW_LINE}";
            }
            code = code.TrimEnd("{NEW_LINE}".ToCharArray());
            return code;
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
    }
}