using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
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

        public static CrmServiceClient IsConnected(CrmConnection crmConnection)
        {
            var password = crmConnection.Password;
            if (crmConnection.Type != "ClientSecret") password = EncryptDecrypt.DecryptString(password);
            var connectionString = BuildConnectionString(crmConnection.Type, crmConnection.Url, crmConnection.UserName, password);
            return IsConnected(connectionString);
        }

        public static CrmServiceClient IsConnected(string connectionString)
        {
            CrmServiceClient.MaxConnectionTimeout = new TimeSpan(1, 0, 0);
            var crmServiceClient = new CrmServiceClient(connectionString);
            if (crmServiceClient.LastCrmError?.Length != 0)
                return null;
            return crmServiceClient;
        }

        public static string ConnectedUrl(CrmServiceClient crmServiceClient)
        {
            var url = new Uri(crmServiceClient?.CrmConnectOrgUriActual?.AbsoluteUri).GetLeftPart(UriPartial.Authority);
            url = url.Replace(".api.", ".");
            return url;
        }

        public static List<DeployWebResource> GetWebResouces(CrmServiceClient service, string fullFileName)
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
            var fileNameWithoutExtension = "/" + Path.GetFileNameWithoutExtension(fullFileName) + "/";
            condition += $"<condition attribute='name' operator='like' value='%{fileNameWithoutExtension}%'/>" + "\r\n";
            var fetchXml = $@"
<fetch>
  <entity name='webresource'>
    <attribute name='webresourceid' />
    <attribute name='name' />
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
                    WebResourceName = entity.GetAttributeValue<string>("name") ?? string.Empty,
                    WebResourceId = entity.Id
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



        //public static List<string> GetAllForms(CrmServiceClient crmServiceClient, string schemaName)
        //{
        //    throw new NotImplementedException();
        //}

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

        public static List<SystemForm> GetEntityFormXml(CrmServiceClient crmServiceClient, string objectTypeCodeName)
        {
            var fetchData = new
            {
                formactivationstate = "1",
                type = (int)FormType.Main,
                type2 = (int)FormType.QuickCreate,
                type3 = (int)FormType.QuickView,
                objecttypecode = objectTypeCodeName
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
      <condition attribute='objecttypecodename' operator='eq' value='{fetchData.objecttypecode}'/>
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
                FormType = (FormType) x.GetAttributeValue<OptionSetValue>("type")?.Value,
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
                    var comment = SimpleJson.DeserializeObject<CommentTypeScriptDeclaration>(json.Substring("//".Length).Replace("'", "\""));
                    comment.Version = Const.Version;
                    return comment;
                }
                catch
                {
                    return new CommentTypeScriptDeclaration
                    {
                        JsForm = false,
                        JsWebApi = false,
                        Version = Const.Version
                    };
                }
            }
            else
            {
                XrmHelper.EntitiesFormXml.AddIfNotExist(crmServiceClient, entityLogicalName);
                return new CommentTypeScriptDeclaration
                {
                    JsForm = XrmHelper.EntitiesFormXml.Any(x => x.EntityLogicalName == entityLogicalName),
                    JsWebApi = true,
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
    }
}
