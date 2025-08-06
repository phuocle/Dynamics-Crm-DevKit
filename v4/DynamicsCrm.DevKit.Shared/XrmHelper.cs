using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;

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
                    password = Helper.DecryptString(password);
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

        public static ServiceClient IsConnected(string connectionString, out string error)
        {
            error = null;

            var crmServiceClient = new ServiceClient(connectionString);

            return crmServiceClient;
        }

        public static string ConnectedUrl(ServiceClient crmServiceClient)
        {
            if (crmServiceClient?.ConnectedOrgUriActual == null)
                return null;

            var uri = crmServiceClient.ConnectedOrgUriActual;
            var url = uri.GetLeftPart(UriPartial.Authority);

            if (url.Contains(".api."))
            {
                url = url.Replace(".api.", ".");
            }

            return url;
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

        public static (bool IsOk, Guid SolutionId, string Prefix) IsExistSolution(ServiceClient crmServiceClient, string solutionuniquename)
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
            var prefix = $"{entity.GetAttributeValue<AliasedValue>("p.customizationprefix").Value}_";
            return (true, solutionId, prefix);
        }

        public static List<DownloadFile> GetReportsBySolution(ServiceClient crmServiceClient, string solution)
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

        public static void DeployReport(ServiceClient crmServiceClient, Guid reportId, string fullFileName)
        {
            var update = new Entity("report", reportId);
            update["bodytext"] = File.ReadAllText(fullFileName);
            crmServiceClient.Update(update);
        }

        public static List<EntityMetadata> GetEntitiesMetadata(ServiceClient crmServiceClient)
        {
            var request = new RetrieveAllEntitiesRequest
            {
                EntityFilters = EntityFilters.All,
                RetrieveAsIfPublished = true
            };
            var response = (RetrieveAllEntitiesResponse)crmServiceClient.Execute(request);
            return response.EntityMetadata.ToList();
        }

        public static List<string> GetAllEntitiesSchema(ServiceClient crmServiceClient)
        {
            var request = new RetrieveAllEntitiesRequest
            {
                EntityFilters = EntityFilters.All,
                RetrieveAsIfPublished = true
            };
            var response = (RetrieveAllEntitiesResponse)crmServiceClient.Execute(request);
            return response.EntityMetadata.ToList().Select(x => x.SchemaName).ToList();
        }

        public static List<EntityMetadata> GetEntitiesMetadata(ServiceClient crmServiceClient, List<string> schemaNames)
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

        public static EntityMetadata GetEntityMetadata(ServiceClient crmServiceClient, string entityLogicalName)
        {
            return GetEntitiesMetadata(crmServiceClient, new List<string> { entityLogicalName }).FirstOrDefault(); ;
        }

        public static bool IsOptionSet(AttributeMetadata attribute)
        {
            return attribute is EnumAttributeMetadata;
        }
        public static void ReadEntitiesMetadata(ServiceClient crmServiceClient)
        {
            if (XrmHelper.EntitiesMetadata.Count == 0)
            {
                XrmHelper.EntitiesMetadata = XrmHelper.GetEntitiesMetadata(crmServiceClient);
            }
        }

        public static void ReadEntitiesFormXml(ServiceClient crmServiceClient)
        {
            if (XrmHelper.EntitiesFormXml.Count == 0)
            {
                XrmHelper.EntitiesFormXml = XrmHelper.GetEntitiesFormXml(crmServiceClient);
            }
        }

        public static List<ProcessForm> GetEntityProcessForm(ServiceClient crmServiceClient, int? objectTypeCode, string logicalName)
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

        public static List<SystemForm> GetEntityFormXml(ServiceClient crmServiceClient, int? objectTypeCode)
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

        public static List<SystemForm> GetEntitiesFormXml(ServiceClient crmServiceClient)
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

        public static CommentTypeScriptDeclaration GetComment(ServiceClient crmServiceClient, string entityLogicalName, string dtsFile)
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

        public static List<SystemForm> GetEntityForms(ServiceClient crmServiceClient, string entityLogicalName)
        {
            XrmHelper.EntitiesFormXml.AddIfNotExist(crmServiceClient, entityLogicalName);
            var forms = XrmHelper.EntitiesFormXml
                .Where(x => x.EntityLogicalName == entityLogicalName && (x.FormType == XrmHelper.FormType.Main || x.FormType == XrmHelper.FormType.QuickCreate))
                .OrderBy(x => x.Name)
                .ToList();
            return forms;
        }

        public static List<NameValue> GetSdkMessagesNone(ServiceClient service)
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

    }
}