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

namespace DynamicsCrm.DevKit.Shared.Services
{
    public class MetadataService
    {
        private readonly ServiceClient _serviceClient;
        private const string NEW_LINE = "\r\n";
        private const string TAB = "\t";

        private static readonly HashSet<string> JsReservedWords = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
        {
            "package", "private", "protected", "public", "static", "yield",
            "let", "class", "enum", "export", "extends", "import", "super",
            "implements", "interface", "await", "break", "case", "catch",
            "continue", "debugger", "default", "delete", "do", "else",
            "finally", "for", "function", "if", "in", "instanceof", "new",
            "return", "switch", "this", "throw", "try", "typeof", "var",
            "void", "while", "with", "const"
        };

        private static readonly HashSet<string> JsReservedWordsExact = new HashSet<string>(StringComparer.Ordinal)
        {
            "package", "private", "protected", "public", "static", "yield",
            "let", "class", "enum", "export", "extends", "import", "super",
            "implements", "interface", "await", "break", "case", "catch",
            "continue", "debugger", "default", "delete", "do", "else",
            "finally", "for", "function", "if", "in", "instanceof", "new",
            "return", "switch", "this", "throw", "try", "typeof", "var",
            "void", "while", "with", "const"
        };

        public MetadataService(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        private static string GetSafeEntityName(string entityName)
        {
            if (JsReservedWords.Contains(entityName))
            {
                return $"_{entityName}";
            }
            return entityName;
        }

        private static bool CanUseAsAlias(string entityName)
        {
            return !JsReservedWordsExact.Contains(entityName);
        }

        private async Task<string> GetSchemaNameAsync(string logicalName)
        {
            if (logicalName == null || logicalName == "none") return "None";
            var request = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Entity,
                LogicalName = logicalName
            };
            XrmHelper.COUNT_ExecuteAsync++;
            var response = (RetrieveEntityResponse)await _serviceClient.ExecuteAsync(request);
            return response.EntityMetadata.SchemaName;
        }

        public async Task<List<EntityMetadata>> GetEntitiesMetadataAsync(EntityFilters entityFilters)
        {
            var request = new RetrieveAllEntitiesRequest
            {
                EntityFilters = entityFilters,
                RetrieveAsIfPublished = true
            };
            XrmHelper.COUNT_ExecuteAsync++;
            var response = (RetrieveAllEntitiesResponse)await _serviceClient.ExecuteAsync(request);
            return [.. response.EntityMetadata];
        }

        public async Task<List<string>> GetAllEntitiesSchemaAsync(EntityFilters entityFilters)
        {
            var request = new RetrieveAllEntitiesRequest
            {
                EntityFilters = entityFilters,
                RetrieveAsIfPublished = true
            };
            XrmHelper.COUNT_ExecuteAsync++;
            var response = (RetrieveAllEntitiesResponse)await _serviceClient.ExecuteAsync(request);
            return [.. response.EntityMetadata.ToList().Select(x => x.SchemaName)];
        }

        public async Task<List<EntityMetadata>> GetEntitiesMetadataAsync(List<string> schemaNames)
        {
            var list = new List<EntityMetadata>();
            var requests = new List<string>();
            foreach (var schemaName in schemaNames)
            {
                var entityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.LogicalName == schemaName.ToLower());
                if (entityMetadata != null)
                {
                    list.Add(entityMetadata);
                }
                else
                {
                    requests.Add(schemaName);
                }
            }
            if (requests.Count == 0) return list;

            var request = new ExecuteMultipleRequest()
            {
                Settings = new ExecuteMultipleSettings()
                {
                    ContinueOnError = true,
                    ReturnResponses = true
                },
                Requests = []
            };
            foreach (var schemaName in requests)
                request.Requests.Add(new RetrieveEntityRequest { EntityFilters = EntityFilters.All, LogicalName = schemaName.ToLower() });
            XrmHelper.COUNT_ExecuteAsync++;
            ExecuteMultipleResponse response = (ExecuteMultipleResponse)await _serviceClient.ExecuteAsync(request);
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

        public EntityMetadata FetchEntityMetadata(string entityLogicalName)
        {
            var request = new RetrieveEntityRequest {
                LogicalName = entityLogicalName,
                EntityFilters = EntityFilters.All
            };
            XrmHelper.COUNT_ExecuteAsync++;
            var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
            return response.EntityMetadata;
        }

        public async Task<EntityMetadata> FetchEntityMetadataAsync(string entityLogicalName)
        {
            var request = new RetrieveEntityRequest
            {
                LogicalName = entityLogicalName,
                EntityFilters = EntityFilters.All
            };
            XrmHelper.COUNT_ExecuteAsync++;
            var response = (RetrieveEntityResponse)await _serviceClient.ExecuteAsync(request);
            return response.EntityMetadata;
        }

        public async Task<EntityMetadata> GetEntityMetadataAsync(string entityLogicalName)
        {
            var entities = await GetEntitiesMetadataAsync([entityLogicalName]);
            return entities.FirstOrDefault();
        }

        public async Task ReadEntitiesMetadataAsync(EntityFilters entityFilters)
        {
            if (XrmHelper.EntitiesMetadata.Count == 0)
            {
                XrmHelper.EntitiesMetadata = await GetEntitiesMetadataAsync(entityFilters);
            }
        }

        public async Task ReadEntitiesFormXmlAsync()
        {
            if (XrmHelper.EntitiesFormXml.Count == 0)
            {
                XrmHelper.EntitiesFormXml = await GetEntitiesFormXmlAsync();
            }
        }

        public async Task<List<SystemForm>> GetEntityFormXmlAsync(int? objectTypeCode)
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
            XrmHelper.COUNT_RetrieveMultipleAsync++;
            var rows = await _serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return [];
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
            return [.. forms.OrderBy(x => x.EntityLogicalName).ThenBy(x => x.Name)];
        }

        public async Task<List<SystemForm>> GetEntitiesFormXmlAsync()
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
            XrmHelper.COUNT_RetrieveMultipleAsync++;
            var rows = await _serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
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
            return [.. forms.OrderBy(x => x.EntityLogicalName).ThenBy(x => x.Name)];
        }

        public async Task<List<SystemForm>> GetEntityFormsAsync(string entityLogicalName)
        {
            await XrmHelper.EntitiesFormXml.AddIfNotExistAsync(_serviceClient, entityLogicalName);
            var forms = XrmHelper.EntitiesFormXml
                .Where(x => x.EntityLogicalName == entityLogicalName && (x.FormType == FormType.Main || x.FormType == FormType.QuickCreate))
                .OrderBy(x => x.Name)
                .ToList();
            return forms;
        }

        public async Task<List<ProcessForm>> GetEntityProcessFormAsync(int? objectTypeCode, string logicalName)
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
            XrmHelper.COUNT_RetrieveMultipleAsync++;
            var rows = await _serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            return [.. rows.Entities.Select(x => new ProcessForm
            {
                EntityLogicalName = logicalName,
                Name = x.GetAttributeValue<string>("name"),
                xaml = x.GetAttributeValue<string>("xaml")
            })];
        }

        public async Task<CommentTypeScriptDeclaration> GetCommentAsync(string entityLogicalName, string dtsFile)
        {
            if (File.Exists(dtsFile))
            {
                var lines = File.ReadAllLines(dtsFile);
                try
                {
                    var json = lines[lines.Length - 1];
                    var oldComment = JsonHelper.Deserialize<OldCommentTypeScriptDeclaration>(json.Substring("//".Length).Replace("'", "\""));
                    var comment = JsonHelper.Deserialize<CommentTypeScriptDeclaration>(json.Substring("//".Length).Replace("'", "\""));
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
                await XrmHelper.EntitiesFormXml.AddIfNotExistAsync(_serviceClient, entityLogicalName);
                return new CommentTypeScriptDeclaration
                {
                    UseForm = XrmHelper.EntitiesFormXml.Any(x => x.EntityLogicalName == entityLogicalName),
                    UseWebApi = true,
                    Version = Const.Version
                };
            }
        }

        public async Task<List<NameValue>> GetSdkMessagesAsync(string logicalName)
        {
            if (logicalName == "none") return await GetSdkMessagesNoneAsync();
            var request = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Entity,
                LogicalName = logicalName
            };
            XrmHelper.COUNT_ExecuteAsync++;
            var response = (RetrieveEntityResponse)await _serviceClient.ExecuteAsync(request);
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

            XrmHelper.COUNT_RetrieveMultipleAsync++;
            var rows = await _serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
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
            return [.. list.OrderBy(x => x.Name)];
        }

        public async Task<List<NameValue>> GetSdkMessagesNoneAsync()
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
            XrmHelper.COUNT_RetrieveMultipleAsync++;
            var rows = await _serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            var messages = (from entity in rows.Entities
                            select entity["name"].ToString()
                ).ToList();
            messages.Sort();
            var list = new List<NameValue>();
            foreach (var message in messages)
                if (!list.Any(x => x.Name == message))
                    list.Add(new NameValue { Name = message });
            return [.. list.OrderBy(x => x.Name)];
        }

        public async Task<List<PluginInputOutputParameter>> GetPluginInputOutputParametersAsync(string entityName, string requestName)
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
            XrmHelper.COUNT_RetrieveMultipleAsync++;
            var rows = await _serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
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
            XrmHelper.COUNT_RetrieveMultipleAsync++;
            var rows2 = await _serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml2));
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
            list = [.. list
                .OrderBy(order => order.ParameterType)
                .ThenBy(order => order.Position)];
            return list;
        }

        public async Task<string> GetPluginCommentAsync(string pluginLogicalName, string pluginMessage)
        {
            if (string.IsNullOrEmpty(pluginLogicalName) || string.IsNullOrEmpty(pluginMessage)) return string.Empty;
            var list = await GetPluginInputOutputParametersAsync(pluginLogicalName, pluginMessage);
            if (list.Count == 0) return string.Empty;
            var max = list.OrderByDescending(s => s.Name.Length).First().Name.Length + 4;
            var code = string.Empty;
            code += $"{TAB}{TAB}InputParameters:{NEW_LINE}";
            var inputParameters = string.Empty;
            foreach (var item in list.Where(where => where.ParameterType == ParameterType.Input))
            {
                var @string = new string(' ', max - item.Name.Length);
                inputParameters +=
                    $"{TAB}{TAB}{TAB}{item.Name}{@string}{item.Type}{(!item.Require ? " - require" : string.Empty)}{NEW_LINE}";
            }
            code += inputParameters;
            code += $"{TAB}{TAB}OutputParameters:{NEW_LINE}";
            var outputParameters = string.Empty;
            foreach (var item in list.Where(where => where.ParameterType == ParameterType.Output))
            {
                var @string = new string(' ', max - item.Name.Length);
                outputParameters +=
                    $"{TAB}{TAB}{TAB}{item.Name}{@string}{item.Type}{(!item.Require ? " - require" : string.Empty)}{NEW_LINE}";
            }
            code += outputParameters;
            code = code.TrimEnd($"{NEW_LINE}".ToCharArray());
            code = code.Replace($"{TAB}", "    ");
            return code;
        }

        public async Task<List<NameValue>> GetCustomActionsAsync()
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
            XrmHelper.COUNT_RetrieveMultipleAsync++;
            var rows = await _serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
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
                    Name = await GetSchemaNameAsync(entity.GetAttributeValue<string>("primaryobjecttypecode"))
                });
            }
            var json = JsonHelper.Serialize(list);
            return [.. list
                .Where(x => x.Name.ToLower() == "none")
                .Select(x => new NameValue { Name = x.LogicalName })
                .OrderBy(x => x.Name)];
        }

        public async Task<List<NameValue>> GetCustomActionsAsync(string logicalName)
        {
            var request = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Entity,
                LogicalName = logicalName
            };
            XrmHelper.COUNT_ExecuteAsync++;
            var response = (RetrieveEntityResponse)await _serviceClient.ExecuteAsync(request);
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
            XrmHelper.COUNT_RetrieveMultipleAsync++;
            var rows = await _serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
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

        public async Task<List<NameValue>> GetCustomApisAsync(string entity)
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
            XrmHelper.COUNT_RetrieveMultipleAsync++;
            var rows = await _serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            return [.. rows.Entities.Select(x => x.GetAttributeValue<EntityReference>("sdkmessageid")?.Name).Select(y => new NameValue { Name = y }).OrderBy(z => z.Name)];
        }

        public async Task<List<XrmEntity>> GetAllDataSourceAsync()
        {
            var list = new List<string>();
            var filterExpression = new MetadataFilterExpression();
            filterExpression.Conditions.Add(new MetadataConditionExpression("DataProviderId", MetadataConditionOperator.Equals, Guid.Parse("B2112A7E-B26C-42F7-9B63-9A809A9D716F")));
            var propertiesExpression = new MetadataPropertiesExpression(
            [
                "DataProviderId",
                "LogicalName",
                "SchemaName",
                "MetadataId",
                "DisplayName",
                "ExternalName",
                "DisplayCollectionName"
            ]);
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
            XrmHelper.COUNT_ExecuteAsync++;
            var response = (RetrieveMetadataChangesResponse)await _serviceClient.ExecuteAsync(request);
            foreach (EntityMetadata entityMetadata in response.EntityMetadata)
                list.Add(entityMetadata.LogicalName);
            return [.. list.Select(x => new XrmEntity { LogicalName = x })];
        }

        public async Task<List<XrmEntity>> GetProvisionedLanguagesAsync()
        {
            var request = new RetrieveProvisionedLanguagesRequest();
            XrmHelper.COUNT_ExecuteAsync++;
            var response = (RetrieveProvisionedLanguagesResponse)await _serviceClient.ExecuteAsync(request);
            var list = response.RetrieveProvisionedLanguages.ToList();

            var languages = GetLanguages().Where(x => list.Contains(int.Parse(x.Value))).ToList();
            return [.. languages.Select(x => new XrmEntity { LogicalName = x.Value, SchemaName = x.Name })];
            static List<NameValue> GetLanguages()
            {
                var languages = new List<NameValue>
                {
                    new() { Name = "Afrikaans-South Africa", Value = "1078" },
                    new() { Name = "Albanian-Albania", Value = "1052" },
                    new() { Name = "Arabic-Algeria", Value = "5121" },
                    new() { Name = "Arabic-Bahrain", Value = "15361" },
                    new() { Name = "Arabic-Egypt", Value = "3073" },
                    new() { Name = "Arabic-Iraq", Value = "2049" },
                    new() { Name = "Arabic-Jordan", Value = "11265" },
                    new() { Name = "Arabic-Kuwait", Value = "13313" },
                    new() { Name = "Arabic-Lebanon", Value = "12289" },
                    new() { Name = "Arabic-Libya", Value = "4097" },
                    new() { Name = "Arabic-Morocco", Value = "6145" },
                    new() { Name = "Arabic-Oman", Value = "8193" },
                    new() { Name = "Arabic-Qatar", Value = "16385" },
                    new() { Name = "Arabic-Saudi Arabia", Value = "1025" },
                    new() { Name = "Arabic-Syria", Value = "10241" },
                    new() { Name = "Arabic-Tunisia", Value = "7169" },
                    new() { Name = "Arabic-U.A.E.", Value = "14337" },
                    new() { Name = "Arabic-Yemen", Value = "9217" },
                    new() { Name = "Armenian-Armenia", Value = "1067" },
                    new() { Name = "Azeri (Cyrillic)-Azerbaijan", Value = "2092" },
                    new() { Name = "Azeri (Latin)-Azerbaijan", Value = "1068" },
                    new() { Name = "Basque-Spain", Value = "1069" },
                    new() { Name = "Belarusian-Belarus", Value = "1059" },
                    new() { Name = "Bulgarian-Bulgaria", Value = "1026" },
                    new() { Name = "Catalan-Spain", Value = "1027" },
                    new() { Name = "Chinese-Hong Kong S.A.R.", Value = "3076" },
                    new() { Name = "Chinese-Macau S.A.R.", Value = "5124" },
                    new() { Name = "Chinese-People's Republic of China", Value = "2052" },
                    new() { Name = "Chinese-Singapore", Value = "4100" },
                    new() { Name = "Chinese-Taiwan", Value = "1028" },
                    new() { Name = "Croatian-Croatia", Value = "1050" },
                    new() { Name = "Czech-Czech Republic", Value = "1029" },
                    new() { Name = "Danish-Denmark", Value = "1030" },
                    new() { Name = "Divehi-Maldives", Value = "1125" },
                    new() { Name = "Dutch-Belgium", Value = "2067" },
                    new() { Name = "Dutch-Netherlands", Value = "1043" },
                    new() { Name = "English-Australia", Value = "3081" },
                    new() { Name = "English-Belize", Value = "10249" },
                    new() { Name = "English-Canada", Value = "4105" },
                    new() { Name = "English-Caribbean", Value = "9225" },
                    new() { Name = "English-Ireland", Value = "6153" },
                    new() { Name = "English-Jamaica", Value = "8201" },
                    new() { Name = "English-New Zealand", Value = "5129" },
                    new() { Name = "English-Republic of the Philippines", Value = "13321" },
                    new() { Name = "English-South Africa", Value = "7177" },
                    new() { Name = "English-Trinidad and Tobago", Value = "11273" },
                    new() { Name = "English-United Kingdom", Value = "2057" },
                    new() { Name = "English-United States", Value = "1033" },
                    new() { Name = "English-Zimbabwe", Value = "12297" },
                    new() { Name = "Estonian-Estonia", Value = "1061" },
                    new() { Name = "Faroese-Faeroe Islands", Value = "1080" },
                    new() { Name = "Farsi-Iran", Value = "1065" },
                    new() { Name = "Finnish-Finland", Value = "1035" },
                    new() { Name = "French-Belgium", Value = "2060" },
                    new() { Name = "French-Canada", Value = "3084" },
                    new() { Name = "French-France", Value = "1036" },
                    new() { Name = "French-Luxembourg", Value = "5132" },
                    new() { Name = "French-Principality of Monaco", Value = "6156" },
                    new() { Name = "French-Switzerland", Value = "4108" },
                    new() { Name = "FYRO Macedonian-Former Yugoslav Republic of Macedonia", Value = "1071" },
                    new() { Name = "Galician-Spain", Value = "1110" },
                    new() { Name = "Georgian-Georgia", Value = "1079" },
                    new() { Name = "German-Austria", Value = "3079" },
                    new() { Name = "German-Germany", Value = "1031" },
                    new() { Name = "German-Liechtenstein", Value = "5127" },
                    new() { Name = "German-Luxembourg", Value = "4103" },
                    new() { Name = "German-Switzerland", Value = "2055" },
                    new() { Name = "Greek-Greece", Value = "1032" },
                    new() { Name = "Gujarati-India", Value = "1095" },
                    new() { Name = "Hebrew-Israel", Value = "1037" },
                    new() { Name = "Hindi-India", Value = "1081" },
                    new() { Name = "Hungarian-Hungary", Value = "1038" },
                    new() { Name = "Icelandic-Iceland", Value = "1039" },
                    new() { Name = "Indonesian-Indonesia", Value = "1057" },
                    new() { Name = "Italian-Italy", Value = "1040" },
                    new() { Name = "Italian-Switzerland", Value = "2064" },
                    new() { Name = "Japanese-Japan", Value = "1041" },
                    new() { Name = "Kannada-India", Value = "1099" },
                    new() { Name = "Kazakh-Kazakhstan", Value = "1087" },
                    new() { Name = "Konkani-India", Value = "1111" },
                    new() { Name = "Korean-Korea", Value = "1042" },
                    new() { Name = "Kyrgyz-Kyrgyzstan", Value = "1088" },
                    new() { Name = "Latvian-Latvia", Value = "1062" },
                    new() { Name = "Lithuanian-Lithuania", Value = "1063" },
                    new() { Name = "Malay-Brunei Darussalam", Value = "2110" },
                    new() { Name = "Malay-Malaysia", Value = "1086" },
                    new() { Name = "Marathi-India", Value = "1102" },
                    new() { Name = "Mongolian-Mongolia", Value = "1104" },
                    new() { Name = "Norwegian (Bokmål)-Norway", Value = "1044" },
                    new() { Name = "Norwegian (Nynorsk)-Norway", Value = "2068" },
                    new() { Name = "Polish-Poland", Value = "1045" },
                    new() { Name = "Portuguese-Brazil", Value = "1046" },
                    new() { Name = "Portuguese-Portugal", Value = "2070" },
                    new() { Name = "Punjabi-India", Value = "1094" },
                    new() { Name = "Romanian-Romania", Value = "1048" },
                    new() { Name = "Russian-Russia", Value = "1049" },
                    new() { Name = "Sanskrit-India", Value = "1103" },
                    new() { Name = "Serbian (Cyrillic)-Serbia and Montenegro", Value = "3098" },
                    new() { Name = "Serbian (Latin)-Serbia and Montenegro", Value = "2074" },
                    new() { Name = "Slovak-Slovakia", Value = "1051" },
                    new() { Name = "Slovenian-Slovenia", Value = "1060" },
                    new() { Name = "Spanish-Argentina", Value = "11274" },
                    new() { Name = "Spanish-Bolivia", Value = "16394" },
                    new() { Name = "Spanish-Chile", Value = "13322" },
                    new() { Name = "Spanish-Colombia", Value = "9226" },
                    new() { Name = "Spanish-Costa Rica", Value = "5130" },
                    new() { Name = "Spanish-Dominican Republic", Value = "7178" },
                    new() { Name = "Spanish-Ecuador", Value = "12298" },
                    new() { Name = "Spanish-El Salvador", Value = "17418" },
                    new() { Name = "Spanish-Guatemala", Value = "4106" },
                    new() { Name = "Spanish-Honduras", Value = "18442" },
                    new() { Name = "Spanish-Mexico", Value = "2058" },
                    new() { Name = "Spanish-Nicaragua", Value = "19466" },
                    new() { Name = "Spanish-Panama", Value = "6154" },
                    new() { Name = "Spanish-Paraguay", Value = "15370" },
                    new() { Name = "Spanish-Peru", Value = "10250" },
                    new() { Name = "Spanish-Puerto Rico", Value = "20490" },
                    new() { Name = "Spanish-Spain", Value = "1034" },
                    new() { Name = "Spanish-Uruguay", Value = "14346" },
                    new() { Name = "Spanish-Venezuela", Value = "8202" },
                    new() { Name = "Spanish - Modern Sort-Spain", Value = "3082" },
                    new() { Name = "Swahili-Kenya", Value = "1089" },
                    new() { Name = "Swedish-Finland", Value = "2077" },
                    new() { Name = "Swedish-Sweden", Value = "1053" },
                    new() { Name = "Syriac-Syria", Value = "1114" },
                    new() { Name = "Tamil-India", Value = "1097" },
                    new() { Name = "Tatar-Tatarstan", Value = "1092" },
                    new() { Name = "Telugu-India", Value = "1098" },
                    new() { Name = "Thai-Thailand", Value = "1054" },
                    new() { Name = "Turkish-Turkey", Value = "1055" },
                    new() { Name = "Ukrainian-Ukraine", Value = "1058" },
                    new() { Name = "Urdu-Islamic Republic of Pakistan", Value = "1056" },
                    new() { Name = "Uzbek (Cyrillic)-Uzbekistan", Value = "2115" },
                    new() { Name = "Uzbek (Latin)-Uzbekistan", Value = "1091" },
                    new() { Name = "Vietnamese-Viet Nam", Value = "1066" },
                    new() { Name = "Welsh-United Kingdom", Value = "1106" },
                    new() { Name = "All Languages", Value = "-1" }
                };
                return languages;
            }
        }

        public async Task<Guid?> GetImpersonatingUserIdAsync(string runAs)
        {
            if (runAs.Length == 0) return (Guid?)null;
            var fetchData = new
            {
                fullname = runAs
            };
            var fetchXml = $@"
<fetch>
  <entity name='systemuser'>
    <attribute name='systemuserid' />
    <filter type='and'>
      <condition attribute='fullname' operator='eq' value='{fetchData.fullname}'/>
    </filter>
  </entity>
</fetch>";
            XrmHelper.COUNT_RetrieveMultipleAsync++;
            var rows = await _serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return (Guid?)null;
            return rows.Entities[0].Id;
        }

        public async Task<int> GetLanguageCodeAsync()
        {
            var fetchXml = $@"
<fetch>
  <entity name='organization'>
    <attribute name='languagecode' />
  </entity>
</fetch>";
            XrmHelper.COUNT_RetrieveMultipleAsync++;
            var rows = await _serviceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return 1033;
            var entity = rows.Entities[0];
            return entity.GetAttributeValue<int?>("languagecode") ?? 1033;
        }

        public async Task<bool> IsExistDataSourceAsync(string logicalname)
        {
            logicalname = logicalname.ToLower();
            var filterExpression = new MetadataFilterExpression();
            filterExpression.Conditions.Add(new MetadataConditionExpression("DataProviderId", MetadataConditionOperator.Equals, Guid.Parse("B2112A7E-B26C-42F7-9B63-9A809A9D716F")));
            var propertiesExpression = new MetadataPropertiesExpression(
            [
                "DataProviderId",
                "LogicalName",
                "SchemaName",
                "MetadataId",
                "DisplayName",
                "ExternalName",
                "DisplayCollectionName"
            ]);
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
            XrmHelper.COUNT_ExecuteAsync++;
            var response = (RetrieveMetadataChangesResponse)await _serviceClient.ExecuteAsync(request);
            foreach (EntityMetadata entityMetadata in response.EntityMetadata)
                if (entityMetadata.LogicalName == logicalname)
                    return true;
            return false;
        }

        public static List<XrmEntity> GetListXrmEntity(List<EntityMetadata> entitiesMetadata)
        {
            var entities = new List<XrmEntity>();
            foreach (var entity in entitiesMetadata)
            {
                entities.Add(new XrmEntity
                {
                    LogicalName = entity.LogicalName,
                    SchemaName = entity.SchemaName,
                    HasImage = !string.IsNullOrEmpty(entity.PrimaryImageAttribute),
                    EntityTypeCode = entity.ObjectTypeCode ?? -1,
                    IsCustomEntity = entity.IsCustomEntity ?? false
                });
            }
            entities = [.. entities.OrderBy(entity => entity.Name)];
            return entities;
        }
    }
}
