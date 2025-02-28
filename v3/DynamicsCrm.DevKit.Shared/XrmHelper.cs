﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Xml;
using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE;
using MessagePack.Internal;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Metadata.Query;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Shared
{
    public static class XrmHelper
    {
        public enum FormType
        {
            Main = 2,
            QuickCreate = 7,
            QuickView = 6
        };
        public static List<EntityMetadata> EntitiesMetadata { get; set; } = new List<EntityMetadata>();

        public static List<SystemForm> EntitiesFormXml { get; set; } = new List<SystemForm>();
        public static List<ProcessForm> EntitiesProcessForm { get; set; } = new List<ProcessForm>();

        public static string BuildConnectionString(string type, string url, string user, string pass)
        {
            if (type == "ClientSecret")
                return $"AuthType=ClientSecret;Url={url};ClientId={user};ClientSecret={pass};";
            else if (type == "AD")
            {
                var arr = user.Split("\\".ToCharArray());
                if (arr.Length != 2)
                    throw new Exception("Please enter User name like: contoso\\jsmith");
                var domain = arr[0];
                user = arr[1];
                return $"AuthType={type};Url={url};Domain={domain};Username={user};Password={pass};";
            }
            return $"AuthType=OAuth;Url={url};Username={user};Password={pass};AppId=51f81489-12ee-4a9e-aaae-a2591f45987d;RedirectUri=app://58145B91-0C36-4500-8554-080854F2AC97;LoginPrompt=Auto";
        }

        public static string BuildConnectionString(CrmConnection crmConnection)
        {
            return BuildConnectionString(crmConnection.Type, crmConnection.Url, crmConnection.UserName, crmConnection.Password);
        }

        public static string BuildConnectionString(string connectionString)
        {
            if (connectionString == null) return string.Empty;
            if (!connectionString.ToLower().Contains("Password=".ToLower())) return connectionString;
            var value = string.Empty;
            var arr = connectionString.Split(";".ToCharArray());
            foreach (var item in arr)
            {
                if (item.ToLower().Contains("Password=".ToLower()))
                {
                    var password = string.Empty;
                    if (item.EndsWith("=="))
                        password = item.Split("=".ToCharArray())[1] + "==";
                    else if (item.EndsWith("="))
                        password = item.Split("=".ToCharArray())[1] + "=";
                    else
                        password = item.Split("=".ToCharArray())[1];
                    password = EncryptDecrypt.DecryptString(password);
                    value += "Password=" + password + ";";
                }
                else
                    value += item + ";";
            }
            value = value.Replace(";;", ";");
            if (value.ToLower().Contains("AuthType=OAuth".ToLower()))
            {
                if (!value.ToLower().Contains("RedirectUri=".ToLower()))
                {
                    value += "AppId=51f81489-12ee-4a9e-aaae-a2591f45987d;RedirectUri=app://58145B91-0C36-4500-8554-080854F2AC97;LoginPrompt=Auto;";
                }
            }
            return value;
        }

        public static string BuildConnectionString2(string connectionString)
        {
            if (connectionString == null) return string.Empty;
            if (!connectionString.ToLower().Contains("Password=".ToLower())) return connectionString;
            var value = string.Empty;
            var arr = connectionString.Split(";".ToCharArray());
            foreach (var item in arr)
            {
                if (item.ToLower().Contains("Password=".ToLower()))
                {
                    var password = string.Empty;
                    if (item.EndsWith("=="))
                        password = item.Split("=".ToCharArray())[1] + "==";
                    else if (item.EndsWith("="))
                        password = item.Split("=".ToCharArray())[1] + "=";
                    else
                        password = item.Split("=".ToCharArray())[1];
                    value += "Password=" + password + ";";
                }
                else
                    value += item + ";";
            }
            value = value.Replace(";;", ";");
            if (value.ToLower().Contains("AuthType=OAuth".ToLower()))
            {
                if (!value.ToLower().Contains("RedirectUri=".ToLower()))
                {
                    value += "AppId=51f81489-12ee-4a9e-aaae-a2591f45987d;RedirectUri=app://58145B91-0C36-4500-8554-080854F2AC97;LoginPrompt=Auto;";
                }
            }
            return value;
        }

        public static CrmServiceClient IsConnected(CrmConnection crmConnection)
        {
            var password = crmConnection.Password;
            if (crmConnection.Type != "ClientSecret") password = EncryptDecrypt.DecryptString(password);
            var connectionString = BuildConnectionString(crmConnection.Type, crmConnection.Url, crmConnection.UserName, password);
            return IsConnected(connectionString, out _);
        }

        public static CrmServiceClient IsConnected(string connectionString, out string error)
        {
            error = null;
            CrmServiceClient.MaxConnectionTimeout = new TimeSpan(1, 0, 0);
            var crmServiceClient = new CrmServiceClient(connectionString);
            if (crmServiceClient.LastCrmError?.Length != 0)
            {
                error = crmServiceClient.LastCrmError;
                return null;
            }
            return crmServiceClient;
        }

        public static string ConnectedUrl(CrmServiceClient crmServiceClient)
        {
            var url = new Uri(crmServiceClient?.CrmConnectOrgUriActual?.AbsoluteUri).GetLeftPart(UriPartial.Authority);
            url = url.Replace(".api.", ".");
            return url;
        }

        public static List<DeployWebResource> GetWebResources(CrmServiceClient service, string fullFileName)
        {
            var parts = fullFileName.Split(@"\".ToCharArray());
            var condition = string.Empty;
            for (var i = parts.Length - 1; i > 0; i--)
            {
                var value = "/";
                for (var j = i; j < parts.Length; j++)
                {
                    value += parts[j] + "/";
                }
                value = value.TrimEnd("/".ToCharArray());
                condition += $"<condition attribute='name' operator='ends-with' value='{value}'/>" + "\r\n";
            }
            var fileNameWithoutExtension = Path.GetFileNameWithoutExtension(fullFileName);
            condition += $"<condition attribute='name' operator='like' value='%{fileNameWithoutExtension}%'/>" + "\r\n";
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
            var rows = service.RetrieveMultiple(new FetchExpression(fetchXml));
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

        public static string BuildConnectionStringLog(string connectionString)
        {
            if (!connectionString.ToLower().Contains("Password=".ToLower()) &&
                !connectionString.ToLower().Contains("ClientSecret=".ToLower())
                ) return connectionString;
            var value = string.Empty;
            var arr = connectionString.Split(";".ToCharArray());
            foreach (var item in arr)
            {
                if (item.ToLower().Contains("Password=".ToLower()))
                    value += "Password=********;";
                else if (item.ToLower().Contains("ClientSecret=".ToLower()))
                    value += "ClientSecret=********;";
                else
                    value += item + ";";
            }
            return value.Replace(";;", ";");
        }

        public static (bool IsOk, Guid SolutionId, string Prefix) IsExistSolution(CrmServiceClient crmServiceClient, string solutionuniquename)
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

            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return (false, Guid.Empty, string.Empty);
            var entity = rows.Entities[0];
            var solutionId = entity.Id;
            var prefix = $"{ entity.GetAttributeValue<AliasedValue>("p.customizationprefix").Value}_";
            return (true, solutionId, prefix);
        }

        public static List<DownloadFile> GetReportsBySolution(CrmServiceClient crmServiceClient, string solution)
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

            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
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

        public static void DeployReport(CrmServiceClient crmServiceClient, Guid reportId, string fullFileName)
        {
            var update = new Entity("report", reportId);
            update["bodytext"] = File.ReadAllText(fullFileName);
            crmServiceClient.Update(update);
        }

        public static List<EntityMetadata> GetEntitiesMetadata(CrmServiceClient crmServiceClient)
        {
            var request = new RetrieveAllEntitiesRequest
            {
                EntityFilters = EntityFilters.All,
                RetrieveAsIfPublished = true
            };
            var respone = (RetrieveAllEntitiesResponse)crmServiceClient.Execute(request);
            return respone.EntityMetadata.ToList();
        }

        public static List<string> GetAllEntitiesSchema(CrmServiceClient crmServiceClient)
        {
            var request = new RetrieveAllEntitiesRequest
            {
                EntityFilters = EntityFilters.All,
                RetrieveAsIfPublished = true
            };
            var respone = (RetrieveAllEntitiesResponse)crmServiceClient.Execute(request);
            return respone.EntityMetadata.ToList().Select(x => x.SchemaName).ToList();
        }

        public static List<EntityMetadata> GetEntitiesMetadata(CrmServiceClient crmServiceClient, List<string> schemaNames)
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
            ExecuteMultipleResponse response = (ExecuteMultipleResponse)crmServiceClient.Execute(request);
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

        public static EntityMetadata GetEntityMetadata(CrmServiceClient crmServiceClient, string entityLogicalName)
        {
            return GetEntitiesMetadata(crmServiceClient, new List<string> { entityLogicalName }).FirstOrDefault(); ;
        }

        public static bool IsOptionSet(AttributeMetadata attribute)
        {
            return attribute is EnumAttributeMetadata;
        }
        public static void ReadEntitiesMetadata(CrmServiceClient crmServiceClient)
        {
            if (XrmHelper.EntitiesMetadata.Count == 0)
            {
                XrmHelper.EntitiesMetadata = XrmHelper.GetEntitiesMetadata(crmServiceClient);
            }
        }

        public static void ReadEntitiesFormXml(CrmServiceClient crmServiceClient)
        {
            if (XrmHelper.EntitiesFormXml.Count == 0)
            {
                XrmHelper.EntitiesFormXml = XrmHelper.GetEntitiesFormXml(crmServiceClient);
            }
        }

        public static List<ProcessForm> GetEntityProcessForm(CrmServiceClient crmServiceClient, int? objectTypeCode, string logicalName)
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
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            return rows.Entities.Select(x => new ProcessForm
            {
                EntityLogicalName = logicalName,
                Name = x.GetAttributeValue<string>("name"),
                xaml = x.GetAttributeValue<string>("xaml")
            }).ToList();
        }

        public static List<SystemForm> GetEntityFormXml(CrmServiceClient crmServiceClient, int? objectTypeCode)
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
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
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

        public static List<SystemForm> GetEntitiesFormXml(CrmServiceClient crmServiceClient)
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
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
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

        public static CommentTypeScriptDeclaration GetComment(CrmServiceClient crmServiceClient, string entityLogicalName, string dtsFile)
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
                XrmHelper.EntitiesFormXml.AddIfNotExist(crmServiceClient, entityLogicalName);
                return new CommentTypeScriptDeclaration
                {
                    UseForm = XrmHelper.EntitiesFormXml.Any(x => x.EntityLogicalName == entityLogicalName),
                    UseWebApi = true,
                    Version = Const.Version
                };
            }
        }

        public static List<SystemForm> GetEntityForms(CrmServiceClient crmServiceClient, string entityLogicalName)
        {
            XrmHelper.EntitiesFormXml.AddIfNotExist(crmServiceClient, entityLogicalName);
            var forms = XrmHelper.EntitiesFormXml
                .Where(x => x.EntityLogicalName == entityLogicalName && (x.FormType == XrmHelper.FormType.Main || x.FormType == XrmHelper.FormType.QuickCreate))
                .OrderBy(x => x.Name)
                .ToList();
            return forms;
        }

        public static List<DownloadFile> GetWebResourcesBySolution(CrmServiceClient crmServiceClient, string solution)
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
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            var list = new List<DownloadFile>();
            foreach (var entity in rows.Entities)
            {
                var name = entity.GetAttributeValue<string>("name");
                var webresourcetype = (WebResourceWebResourceType)entity.GetAttributeValue<OptionSetValue>("webresourcetype").Value;
                var content = entity.GetAttributeValue<string>("content");
                var extension = GetExtension(webresourcetype);
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

        private static string GetExtension(WebResourceWebResourceType webresourcetype)
        {
            return webresourcetype switch
            {
                WebResourceWebResourceType.WebpageHtml => ".html",
                WebResourceWebResourceType.ScriptJScript => ".js",
                WebResourceWebResourceType.PngFormat => ".png",
                WebResourceWebResourceType.GifFormat => ".gif",
                WebResourceWebResourceType.JpgFormat => ".jpg",
                WebResourceWebResourceType.StyleSheetCss => ".css",
                WebResourceWebResourceType.IcoFormat => ".ico",
                WebResourceWebResourceType.DataXml => ".xml",
                WebResourceWebResourceType.StyleSheetXsl => ".xsl",
                WebResourceWebResourceType.SilverlightXap => ".xap",
                WebResourceWebResourceType.StringResx => ".resx",
                WebResourceWebResourceType.SvgFormat => ".svg",
                _ => ".html",
            };
        }

        public static List<NameValueGuidExtend> GetAllSolutions(CrmServiceClient crmServiceClient)
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
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
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

        public static List<XrmEntity> GetAllEntities(CrmServiceClient service)
        {
            var request = new RetrieveAllEntitiesRequest
            {
                EntityFilters = EntityFilters.Entity,
                RetrieveAsIfPublished = true
            };
            var response = (RetrieveAllEntitiesResponse)service.Execute(request);
            var entities = new List<XrmEntity>();
            foreach (var entity in response.EntityMetadata)
                entities.Add(new XrmEntity
                {
                    Name = entity.SchemaName,
                    LogicalName = entity.LogicalName,
                    SchemaName = entity.SchemaName,
                    HasImage = !string.IsNullOrEmpty(entity.PrimaryImageAttribute),
                    EntityTypeCode = entity.ObjectTypeCode ?? -1,
                    IsCustomEntity = entity.IsCustomEntity ?? false
                });
            entities = entities.OrderBy(entity => entity.Name).ToList();
            return entities;
        }

        public static List<XrmEntity> GetAllDataSource(CrmServiceClient crmServiceClient)
        {
            var list = new List<string>();
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
            var entityQueryExpression = new EntityQueryExpression
            {
                Criteria = new MetadataFilterExpression()
            };
            entityQueryExpression.Criteria = filterExpression;
            entityQueryExpression.Properties = propertiesExpression;
            var request = new RetrieveMetadataChangesRequest
            {
                Query = entityQueryExpression
            };
            var response = (RetrieveMetadataChangesResponse)crmServiceClient.Execute(request);
            foreach (EntityMetadata entityMetadata in response.EntityMetadata)
                list.Add(entityMetadata.LogicalName);
            return list.Select(x => new XrmEntity { Name = x }).ToList();
        }

        public static List<NameValue> GetSdkMessagesNone(CrmServiceClient service)
        {
            var fetchData = new
            {
                categoryname = "None",
                isprivate = "0",
                availability = "0",
                availability2 = "2",
                iscustomprocessingstepallowed = "1",
            };
            var fetchXml = $@"<?xml version=""1.0"" encoding=""utf-16""?>
<fetch>
  <entity name=""sdkmessage"">
    <all-attributes/>
    <filter>
      <condition attribute=""categoryname"" operator=""eq"" value=""{fetchData.categoryname/*None*/}"" />
      <condition attribute=""isprivate"" operator=""eq"" value=""{fetchData.isprivate/*0*/}"" />
      <condition attribute=""availability"" operator=""in"">
        <value>{fetchData.availability/*0*/}</value>
        <value>{fetchData.availability2/*2*/}</value>
      </condition>
    </filter>
    <link-entity name=""sdkmessagefilter"" from=""sdkmessageid"" to=""sdkmessageid"" link-type=""inner"" alias=""aa"">
      <attribute name=""name"" />
      <filter>
        <condition attribute=""iscustomprocessingstepallowed"" operator=""eq"" value=""{fetchData.iscustomprocessingstepallowed/*1*/}"" />
      </filter>
    </link-entity>
  </entity>
</fetch>";
            var rows = service.RetrieveMultiple(new FetchExpression(fetchXml));
            var messages = (from entity in rows.Entities
                            select entity["name"].ToString()
                ).ToList();
            messages.Sort();
            var list = new List<NameValue>();
            foreach (var message in messages)
                if (!list.Any(x => x.Name == message))
                    list.Add(new NameValue { Name = message });
            return list.OrderBy(x => x.Name).ToList();
        }

        public static List<NameValue> GetSdkMessages(CrmServiceClient service, string logicalName)
        {
            if (logicalName == "none") return GetSdkMessagesNone(service);
            var request = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Entity,
                LogicalName = logicalName
            };
            var response = (RetrieveEntityResponse)service.Execute(request);
            var fetchData = new
            {
                categoryname = "CustomOperation",
                categoryname2 = "CustomApi",
                isprivate = "0",
                primaryobjecttypecode = response.EntityMetadata.ObjectTypeCode,
                iscustomprocessingstepallowed = "1"
            };
            var fetchXml = $@"<?xml version=""1.0"" encoding=""utf-16""?>
<fetch>
  <entity name=""sdkmessage"">
    <all-attributes />
    <attribute name=""name"" />
    <filter>
      <condition attribute=""categoryname"" operator=""ne"" value=""{fetchData.categoryname/*CustomOperation*/}"" />
      <condition attribute=""categoryname"" operator=""ne"" value=""{fetchData.categoryname2/*CustomApi*/}"" />
      <condition attribute=""isprivate"" operator=""eq"" value=""{fetchData.isprivate/*0*/}"" />
    </filter>
    <order attribute=""name"" />
    <link-entity name=""sdkmessagefilter"" from=""sdkmessageid"" to=""sdkmessageid"">
      <filter type=""and"">
        <condition attribute=""primaryobjecttypecode"" operator=""eq"" value=""{fetchData.primaryobjecttypecode/*1*/}"" />
        <condition attribute=""iscustomprocessingstepallowed"" operator=""eq"" value=""{fetchData.iscustomprocessingstepallowed/*1*/}"" />
      </filter>
    </link-entity>
  </entity>
</fetch>";

            var rows = service.RetrieveMultiple(new FetchExpression(fetchXml));
            var messages = (from entity in rows.Entities
                            select entity["name"].ToString()
                ).ToList();
            messages.Sort();
            var list = new List<NameValue>();
            foreach (var message in messages)
            {
                if (!list.Any(x => x.Name == message))
                    list.Add(new NameValue { Name = message });
            }
            return list.OrderBy(x => x.Name).ToList();
        }

        public static List<PluginInputOutputParameter> GetPluginInputOutputParameters(CrmServiceClient service, string entityName, string requestName)
        {
            var fetchData = new
            {
                name = requestName,
                name2 = $"{requestName + entityName}",
                endpoint = "api/data"
            };
            var fetchXml = $@"
<fetch>
  <entity name='sdkmessagerequest'>
    <filter type='or'>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
      <condition attribute='name' operator='eq' value='{fetchData.name2}'/>
    </filter>
    <link-entity name='sdkmessagepair' from='sdkmessagepairid' to='sdkmessagepairid'>
      <filter type='and'>
        <condition attribute='endpoint' operator='eq' value='{fetchData.endpoint}'/>
      </filter>
    </link-entity>
    <link-entity name='sdkmessagerequestfield' from='sdkmessagerequestid' to='sdkmessagerequestid' link-type='inner' alias='f'>
      <attribute name='name' />
      <attribute name='clrparser' />
      <attribute name='optional' />
      <attribute name='position' />
    </link-entity>
  </entity>
</fetch>";
            var rows = service.RetrieveMultiple(new FetchExpression(fetchXml));
            var list = new List<PluginInputOutputParameter>();
            var sdkMessageRequestId = Guid.Empty;
            foreach (var row in rows.Entities)
            {
                var name = (string)row.GetAttributeValue<AliasedValue>("f.name")?.Value ?? string.Empty;
                var clrparser = (string)row.GetAttributeValue<AliasedValue>("f.clrparser")?.Value ?? string.Empty;
                var optional = (bool?)row.GetAttributeValue<AliasedValue>("f.optional")?.Value ?? false;
                var position = (int?)row.GetAttributeValue<AliasedValue>("f.position")?.Value ?? -1;
                list.Add(new PluginInputOutputParameter
                {
                    Name = name,
                    Position = position,
                    Require = optional,
                    Type = clrparser.Split(",".ToCharArray())[0],
                    ParameterType = ParameterType.Input
                });
                sdkMessageRequestId = row.Id;
            }

            var fetchData2 = new
            {
                sdkmessagerequestid = sdkMessageRequestId
            };
            var fetchXml2 = $@"
<fetch>
  <entity name='sdkmessageresponse'>
    <filter type='and'>
      <condition attribute='sdkmessagerequestid' operator='eq' value='{fetchData2.sdkmessagerequestid}'/>
    </filter>
    <link-entity name='sdkmessageresponsefield' from='sdkmessageresponseid' to='sdkmessageresponseid' link-type='inner' alias='f'>
      <attribute name='name' />
      <attribute name='clrformatter' />
      <attribute name='position' />
    </link-entity>
  </entity>
</fetch>";
            var rows2 = service.RetrieveMultiple(new FetchExpression(fetchXml2));
            foreach (var row in rows2.Entities)
            {
                var name = (string)row.GetAttributeValue<AliasedValue>("f.name")?.Value ?? string.Empty;
                var clrformatter = (string)row.GetAttributeValue<AliasedValue>("f.clrformatter")?.Value ??
                                   string.Empty;
                var optional = false;
                var position = (int?)row.GetAttributeValue<AliasedValue>("f.position")?.Value ?? -1;
                list.Add(new PluginInputOutputParameter
                {
                    Name = name,
                    Position = position,
                    Require = optional,
                    Type = clrformatter.Split(",".ToCharArray())[0],
                    ParameterType = ParameterType.Output
                });
            }
            list = list
                .OrderBy(order => order.ParameterType)
                .ThenBy(order => order.Position)
                .ToList();
            return list;
        }

        public static List<NameValue> GetCustomActionMessages(CrmServiceClient service, string logicalName)
        {
            var request = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Entity,
                LogicalName = logicalName
            };
            var response = (RetrieveEntityResponse)service.Execute(request);
            var fetchData = new
            {
                categoryname = "CustomOperation",
                primaryobjecttypecode = response.EntityMetadata.ObjectTypeCode,
                iscustomprocessingstepallowed = "1"
            };
            var fetchXml = $@"<?xml version=""1.0"" encoding=""utf-16""?>
<fetch>
  <entity name=""sdkmessage"">
    <all-attributes />
    <attribute name=""name"" />
    <filter>
      <condition attribute=""categoryname"" operator=""eq"" value=""{fetchData.categoryname/*CustomOperation*/}"" />
    </filter>
    <order attribute=""name"" />
    <link-entity name=""sdkmessagefilter"" from=""sdkmessageid"" to=""sdkmessageid"">
      <filter type=""and"">
        <condition attribute=""primaryobjecttypecode"" operator=""eq"" value=""{fetchData.primaryobjecttypecode/*1*/}"" />
        <condition attribute=""iscustomprocessingstepallowed"" operator=""eq"" value=""{fetchData.iscustomprocessingstepallowed/*1*/}"" />
      </filter>
    </link-entity>
  </entity>
</fetch>";
            var rows = service.RetrieveMultiple(new FetchExpression(fetchXml));
            var messages = (from entity in rows.Entities
                            select entity["name"].ToString()
                ).ToList();
            messages.Sort();
            var list = new List<NameValue>();
            foreach (var message in messages)
            {
                list.Add(new NameValue { Name = message });
            }
            return list;
        }

        public static List<NameValue> GetCustomApiMessages(CrmServiceClient service, string entity)
        {
            var conditionEntity = string.Empty;
            if (entity != "none")
                conditionEntity = $"<condition attribute='boundentitylogicalname' operator='eq' value='{entity}'/>";
            else
                conditionEntity = $"<condition attribute='boundentitylogicalname' operator='null' />";
            var fetchData = new
            {
                statecode = "0"
            };
            var fetchXml = $@"
<fetch>
  <entity name='customapi'>
    <attribute name='name' />
    <attribute name='sdkmessageid' />
    <attribute name='boundentitylogicalname' />
    <filter>
      <condition attribute='statecode' operator='eq' value='{fetchData.statecode}'/>
      {conditionEntity}
    </filter>
  </entity>
</fetch>";
            var rows = service.RetrieveMultiple(new FetchExpression(fetchXml));
            return rows.Entities.Select(x => x.GetAttributeValue<EntityReference>("sdkmessageid")?.Name).Select(y => new NameValue { Name = y }).OrderBy(z => z.Name).ToList();
        }

        public static List<NameValue> GetAllCustomActions(CrmServiceClient service)
        {
            var fetchData = new
            {
                customizationlevel = "1",
                primaryobjecttypecode = "none",
                endpoint = "api/data"
            };
            var fetchXml = $@"
<fetch>
  <entity name='sdkmessagerequest'>
    <attribute name='name' />
    <attribute name='primaryobjecttypecode' />
    <filter type='and'>
      <condition attribute='customizationlevel' operator='eq' value='{fetchData.customizationlevel}'/>
    </filter>
    <link-entity name='sdkmessagepair' from='sdkmessagepairid' to='sdkmessagepairid' link-type='inner'>
      <filter type='and'>
        <condition attribute='endpoint' operator='eq' value='{fetchData.endpoint}'/>
      </filter>
    </link-entity>
  </entity>
</fetch>";
            var rows = service.RetrieveMultiple(new FetchExpression(fetchXml));
            var list2 = new List<Entity>();
            foreach (var entity in rows.Entities)
            {
                var primaryobjecttypecode = entity.GetAttributeValue<string>("primaryobjecttypecode");
                if (primaryobjecttypecode == null || primaryobjecttypecode == "none")
                    list2.Add(entity);
            }
            var list = new List<XrmEntity>();
            foreach (var entity in list2)
            {
                list.Add(new XrmEntity
                {
                    LogicalName = entity.GetAttributeValue<string>("name"),
                    Name = GetSchemaName(service, entity.GetAttributeValue<string>("primaryobjecttypecode"))
                });
            }
            var json = SimpleJson.SerializeObject(list);
            return list
                .Where(x => x.Name.ToLower() == "none")
                .Select(x => new NameValue { Name = x.LogicalName })
                .OrderBy(x => x.Name)
                .ToList();
        }

        private static string GetSchemaName(CrmServiceClient service, string logicalName)
        {
            if (logicalName == null || logicalName == "none") return "None";
            var request = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Entity,
                LogicalName = logicalName
            };
            var response = (RetrieveEntityResponse)service.Execute(request);
            return response.EntityMetadata.SchemaName;
        }

        public static List<NameValue> GetProvisionedLanguages(CrmServiceClient service, bool isAllLangauge = false)
        {
            static List<NameValue> GetLanguages()
            {
                var languages = new List<NameValue>
            {
                new NameValue { Name = "Afrikaans-South Africa", Value = "1078" },
                new NameValue { Name = "Albanian-Albania", Value = "1052" },
                new NameValue { Name = "Arabic-Algeria", Value = "5121" },
                new NameValue { Name = "Arabic-Bahrain", Value = "15361" },
                new NameValue { Name = "Arabic-Egypt", Value = "3073" },
                new NameValue { Name = "Arabic-Iraq", Value = "2049" },
                new NameValue { Name = "Arabic-Jordan", Value = "11265" },
                new NameValue { Name = "Arabic-Kuwait", Value = "13313" },
                new NameValue { Name = "Arabic-Lebanon", Value = "12289" },
                new NameValue { Name = "Arabic-Libya", Value = "4097" },
                new NameValue { Name = "Arabic-Morocco", Value = "6145" },
                new NameValue { Name = "Arabic-Oman", Value = "8193" },
                new NameValue { Name = "Arabic-Qatar", Value = "16385" },
                new NameValue { Name = "Arabic-Saudi Arabia", Value = "1025" },
                new NameValue { Name = "Arabic-Syria", Value = "10241" },
                new NameValue { Name = "Arabic-Tunisia", Value = "7169" },
                new NameValue { Name = "Arabic-U.A.E.", Value = "14337" },
                new NameValue { Name = "Arabic-Yemen", Value = "9217" },
                new NameValue { Name = "Armenian-Armenia", Value = "1067" },
                new NameValue { Name = "Azeri (Cyrillic)-Azerbaijan", Value = "2092" },
                new NameValue { Name = "Azeri (Latin)-Azerbaijan", Value = "1068" },
                new NameValue { Name = "Basque-Spain", Value = "1069" },
                new NameValue { Name = "Belarusian-Belarus", Value = "1059" },
                new NameValue { Name = "Bulgarian-Bulgaria", Value = "1026" },
                new NameValue { Name = "Catalan-Spain", Value = "1027" },
                new NameValue { Name = "Chinese-Hong Kong S.A.R.", Value = "3076" },
                new NameValue { Name = "Chinese-Macau S.A.R.", Value = "5124" },
                new NameValue { Name = "Chinese-People's Republic of China", Value = "2052" },
                new NameValue { Name = "Chinese-Singapore", Value = "4100" },
                new NameValue { Name = "Chinese-Taiwan", Value = "1028" },
                new NameValue { Name = "Croatian-Croatia", Value = "1050" },
                new NameValue { Name = "Czech-Czech Republic", Value = "1029" },
                new NameValue { Name = "Danish-Denmark", Value = "1030" },
                new NameValue { Name = "Divehi-Maldives", Value = "1125" },
                new NameValue { Name = "Dutch-Belgium", Value = "2067" },
                new NameValue { Name = "Dutch-Netherlands", Value = "1043" },
                new NameValue { Name = "English-Australia", Value = "3081" },
                new NameValue { Name = "English-Belize", Value = "10249" },
                new NameValue { Name = "English-Canada", Value = "4105" },
                new NameValue { Name = "English-Caribbean", Value = "9225" },
                new NameValue { Name = "English-Ireland", Value = "6153" },
                new NameValue { Name = "English-Jamaica", Value = "8201" },
                new NameValue { Name = "English-New Zealand", Value = "5129" },
                new NameValue { Name = "English-Republic of the Philippines", Value = "13321" },
                new NameValue { Name = "English-South Africa", Value = "7177" },
                new NameValue { Name = "English-Trinidad and Tobago", Value = "11273" },
                new NameValue { Name = "English-United Kingdom", Value = "2057" },
                new NameValue { Name = "English-United States", Value = "1033" },
                new NameValue { Name = "English-Zimbabwe", Value = "12297" },
                new NameValue { Name = "Estonian-Estonia", Value = "1061" },
                new NameValue { Name = "Faroese-Faeroe Islands", Value = "1080" },
                new NameValue { Name = "Farsi-Iran", Value = "1065" },
                new NameValue { Name = "Finnish-Finland", Value = "1035" },
                new NameValue { Name = "French-Belgium", Value = "2060" },
                new NameValue { Name = "French-Canada", Value = "3084" },
                new NameValue { Name = "French-France", Value = "1036" },
                new NameValue { Name = "French-Luxembourg", Value = "5132" },
                new NameValue { Name = "French-Principality of Monaco", Value = "6156" },
                new NameValue { Name = "French-Switzerland", Value = "4108" },
                new NameValue { Name = "FYRO Macedonian-Former Yugoslav Republic of Macedonia", Value = "1071" },
                new NameValue { Name = "Galician-Spain", Value = "1110" },
                new NameValue { Name = "Georgian-Georgia", Value = "1079" },
                new NameValue { Name = "German-Austria", Value = "3079" },
                new NameValue { Name = "German-Germany", Value = "1031" },
                new NameValue { Name = "German-Liechtenstein", Value = "5127" },
                new NameValue { Name = "German-Luxembourg", Value = "4103" },
                new NameValue { Name = "German-Switzerland", Value = "2055" },
                new NameValue { Name = "Greek-Greece", Value = "1032" },
                new NameValue { Name = "Gujarati-India", Value = "1095" },
                new NameValue { Name = "Hebrew-Israel", Value = "1037" },
                new NameValue { Name = "Hindi-India", Value = "1081" },
                new NameValue { Name = "Hungarian-Hungary", Value = "1038" },
                new NameValue { Name = "Icelandic-Iceland", Value = "1039" },
                new NameValue { Name = "Indonesian-Indonesia", Value = "1057" },
                new NameValue { Name = "Italian-Italy", Value = "1040" },
                new NameValue { Name = "Italian-Switzerland", Value = "2064" },
                new NameValue { Name = "Japanese-Japan", Value = "1041" },
                new NameValue { Name = "Kannada-India", Value = "1099" },
                new NameValue { Name = "Kazakh-Kazakhstan", Value = "1087" },
                new NameValue { Name = "Konkani-India", Value = "1111" },
                new NameValue { Name = "Korean-Korea", Value = "1042" },
                new NameValue { Name = "Kyrgyz-Kyrgyzstan", Value = "1088" },
                new NameValue { Name = "Latvian-Latvia", Value = "1062" },
                new NameValue { Name = "Lithuanian-Lithuania", Value = "1063" },
                new NameValue { Name = "Malay-Brunei Darussalam", Value = "2110" },
                new NameValue { Name = "Malay-Malaysia", Value = "1086" },
                new NameValue { Name = "Marathi-India", Value = "1102" },
                new NameValue { Name = "Mongolian-Mongolia", Value = "1104" },
                new NameValue { Name = "Norwegian (Bokmål)-Norway", Value = "1044" },
                new NameValue { Name = "Norwegian (Nynorsk)-Norway", Value = "2068" },
                new NameValue { Name = "Polish-Poland", Value = "1045" },
                new NameValue { Name = "Portuguese-Brazil", Value = "1046" },
                new NameValue { Name = "Portuguese-Portugal", Value = "2070" },
                new NameValue { Name = "Punjabi-India", Value = "1094" },
                new NameValue { Name = "Romanian-Romania", Value = "1048" },
                new NameValue { Name = "Russian-Russia", Value = "1049" },
                new NameValue { Name = "Sanskrit-India", Value = "1103" },
                new NameValue { Name = "Serbian (Cyrillic)-Serbia and Montenegro", Value = "3098" },
                new NameValue { Name = "Serbian (Latin)-Serbia and Montenegro", Value = "2074" },
                new NameValue { Name = "Slovak-Slovakia", Value = "1051" },
                new NameValue { Name = "Slovenian-Slovenia", Value = "1060" },
                new NameValue { Name = "Spanish-Argentina", Value = "11274" },
                new NameValue { Name = "Spanish-Bolivia", Value = "16394" },
                new NameValue { Name = "Spanish-Chile", Value = "13322" },
                new NameValue { Name = "Spanish-Colombia", Value = "9226" },
                new NameValue { Name = "Spanish-Costa Rica", Value = "5130" },
                new NameValue { Name = "Spanish-Dominican Republic", Value = "7178" },
                new NameValue { Name = "Spanish-Ecuador", Value = "12298" },
                new NameValue { Name = "Spanish-El Salvador", Value = "17418" },
                new NameValue { Name = "Spanish-Guatemala", Value = "4106" },
                new NameValue { Name = "Spanish-Honduras", Value = "18442" },
                new NameValue { Name = "Spanish-Mexico", Value = "2058" },
                new NameValue { Name = "Spanish-Nicaragua", Value = "19466" },
                new NameValue { Name = "Spanish-Panama", Value = "6154" },
                new NameValue { Name = "Spanish-Paraguay", Value = "15370" },
                new NameValue { Name = "Spanish-Peru", Value = "10250" },
                new NameValue { Name = "Spanish-Puerto Rico", Value = "20490" },
                new NameValue { Name = "Spanish-Spain", Value = "1034" },
                new NameValue { Name = "Spanish-Uruguay", Value = "14346" },
                new NameValue { Name = "Spanish-Venezuela", Value = "8202" },
                new NameValue { Name = "Spanish - Modern Sort-Spain", Value = "3082" },
                new NameValue { Name = "Swahili-Kenya", Value = "1089" },
                new NameValue { Name = "Swedish-Finland", Value = "2077" },
                new NameValue { Name = "Swedish-Sweden", Value = "1053" },
                new NameValue { Name = "Syriac-Syria", Value = "1114" },
                new NameValue { Name = "Tamil-India", Value = "1097" },
                new NameValue { Name = "Tatar-Tatarstan", Value = "1092" },
                new NameValue { Name = "Telugu-India", Value = "1098" },
                new NameValue { Name = "Thai-Thailand", Value = "1054" },
                new NameValue { Name = "Turkish-Turkey", Value = "1055" },
                new NameValue { Name = "Ukrainian-Ukraine", Value = "1058" },
                new NameValue { Name = "Urdu-Islamic Republic of Pakistan", Value = "1056" },
                new NameValue { Name = "Uzbek (Cyrillic)-Uzbekistan", Value = "2115" },
                new NameValue { Name = "Uzbek (Latin)-Uzbekistan", Value = "1091" },
                new NameValue { Name = "Vietnamese-Viet Nam", Value = "1066" },
                new NameValue { Name = "Welsh-United Kingdom", Value = "1106" },
                new NameValue { Name = "All Languages", Value = "-1" }
            };
                return languages;
            }
            var request = new RetrieveProvisionedLanguagesRequest();
            var response = (RetrieveProvisionedLanguagesResponse)service.Execute(request);
            var list = response.RetrieveProvisionedLanguages.ToList();
            if (isAllLangauge) list.Add(-1);
            return GetLanguages().Where(x => list.Contains(int.Parse(x.Value))).ToList();
        }
    }
}
