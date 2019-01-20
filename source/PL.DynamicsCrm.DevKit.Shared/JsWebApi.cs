using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using NUglify;
using PL.DynamicsCrm.DevKit.Shared.Xrm;
using System.Collections.Generic;
using System.Linq;

namespace PL.DynamicsCrm.DevKit.Shared
{
    public class JsWebApi
    {
        public JsWebApi(OrganizationServiceProxy crmService, string projectName, string entityName, bool isDebugWebApi, List<string> checkedItems, bool isDebugForm)
        {
            CrmService = crmService;
            ProjectName = projectName;
            EntityName = entityName;
            CheckedItems = checkedItems;
            IsDebugForm = isDebugForm;
            IsDebugWebApi = isDebugWebApi;
        }
        private OrganizationServiceProxy CrmService { get; }
        private string EntityName { get; }
        private string ProjectName { get; }
        private List<string> CheckedItems { get; }
        private bool IsDebugWebApi { get; }
        private bool IsDebugForm { get; }
        private List<CrmAttribute> _fields;
        private List<CrmAttribute> Fields
        {
            get
            {
                if (_fields != null) return _fields;
                var logicalName = EntityName.ToLower();
                _fields = new List<CrmAttribute>();
                var request = new RetrieveEntityRequest
                {
                    EntityFilters = EntityFilters.Attributes,
                    LogicalName = logicalName
                };
                var response = (RetrieveEntityResponse)CrmService.Execute(request);
                foreach (var attribute in response.EntityMetadata.Attributes)
                {
                    var crmAttribute = new CrmAttribute(attribute, logicalName);
                    _fields.Add(crmAttribute);
                }
                _fields = _fields.OrderBy(row => row.Name).ToList();
                return _fields;
            }
        }
        private string GetLogicalCollectionName(string entity)
        {
            var request = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Attributes,
                LogicalName = entity
            };
            var response = (RetrieveEntityResponse)CrmService.Execute(request);
            return response.EntityMetadata.LogicalCollectionName;
        }
        private string GetLogicalCollectionName(CrmAttribute crmAttribute)
        {
            var value = string.Empty;
            var entities = crmAttribute.EntityReferenceLogicalName.Split(";".ToCharArray());
            foreach (var entity in entities)
            {
                if (entity.Length > 0)
                {
                    var request = new RetrieveEntityRequest
                    {
                        EntityFilters = EntityFilters.Attributes,
                        LogicalName = entity
                    };
                    var response = (RetrieveEntityResponse)CrmService.Execute(request);
                    value += response.EntityMetadata.LogicalCollectionName + ";";
                }
            }
            return value.TrimEnd(";".ToCharArray());
        }
        private RetrieveEntityResponse _relationships = null;
        private RetrieveEntityResponse Relationships
        {
            get
            {
                if (_relationships == null)
                {
                    var requestRelationships = new RetrieveEntityRequest
                    {
                        EntityFilters = EntityFilters.Relationships,
                        LogicalName = EntityName.ToLower()
                    };
                    _relationships = (RetrieveEntityResponse)CrmService.Execute(requestRelationships);
                }
                return _relationships;
            }
        }
        private string GetNavigationPropertyName(CrmAttribute crmAttribute)
        {
            if (crmAttribute.FieldType == AttributeTypeCode.Owner) return "ownerid;ownerid";
            var value = string.Empty;
            var entities = crmAttribute.EntityReferenceLogicalName.Split(";".ToCharArray());
            foreach (var entity in entities)
            {
                var related =
                    Relationships.EntityMetadata.ManyToOneRelationships.FirstOrDefault(
                        item => item.ReferencingAttribute == crmAttribute.LogicalName &&
                                item.ReferencedEntity == entity);
                if (related != null)
                    value += related.ReferencingEntityNavigationPropertyName + ";";
            }

            return value.TrimEnd(";".ToCharArray());
        }
        public string Message { get; private set; } = string.Empty;
        public string WebApiCode { get; private set; } = string.Empty;
        public string WebApiCodeIntellisense { get; private set; } = string.Empty;
        public void GeneratorCode()
        {
            var webApiCode = string.Empty;
            var @class = EntityName.ToLower();
            var Class = EntityName;
            webApiCode += $"'use strict';\r\n";
            webApiCode += $"var {ProjectName};\r\n";
            webApiCode += $"(function ({ProjectName}) {{\r\n";
            webApiCode += $"\t'use strict';\r\n";
            webApiCode += $"\t{ProjectName}.{Class}Api = function (e) {{\r\n";
            webApiCode += $"\t\tvar EMPTY_STRING = '';\r\n";
            var webapi = Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Wizard.data.WebApi.js");
            webApiCode += webapi;
            webApiCode += $"\t\tvar {@class} = {{\r\n";
            foreach (var crmAttribute in Fields)
            {
                if (crmAttribute.AttributeOf != null) continue;
                if (crmAttribute.IsDeprecated) continue;
                if (crmAttribute.FieldType == AttributeTypeCode.Memo ||
                    crmAttribute.FieldType == AttributeTypeCode.String ||
                    crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                    crmAttribute.FieldType == AttributeTypeCode.State ||
                    crmAttribute.FieldType == AttributeTypeCode.Status ||
                    crmAttribute.FieldType == AttributeTypeCode.Uniqueidentifier ||
                    crmAttribute.FieldType == AttributeTypeCode.Boolean ||
                    crmAttribute.FieldType == AttributeTypeCode.Integer ||
                    crmAttribute.FieldType == AttributeTypeCode.BigInt ||
                    crmAttribute.FieldType == AttributeTypeCode.Double ||
                    crmAttribute.FieldType == AttributeTypeCode.Decimal ||
                    crmAttribute.FieldType == AttributeTypeCode.Money
                )
                {
                    webApiCode += $"\t\t\t{crmAttribute.SchemaName}: {{ a: \"{crmAttribute.LogicalName}\" }},\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.DateTime)
                {
                    if (crmAttribute.DateTimeBehavior == DateTimeBehavior.DateOnly)
                        webApiCode += $"\t\t\t{crmAttribute.SchemaName}_DateOnly: {{ a: \"{crmAttribute.LogicalName}\" }},\r\n";
                    else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.TimeZoneIndependent)
                    {
                        if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                            webApiCode += $"\t\t\t{crmAttribute.SchemaName}_TimezoneDateOnly: {{ L=a: \"{crmAttribute.LogicalName}\" }},\r\n";
                        else
                            webApiCode += $"\t\t\t{crmAttribute.SchemaName}_TimezoneDateAndTime: {{ a: \"{crmAttribute.LogicalName}\" }},\r\n";
                    }
                    else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.UserLocal)
                    {
                        if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                            webApiCode += $"\t\t\t{crmAttribute.SchemaName}_UtcDateOnly: {{ a: \"{crmAttribute.LogicalName}\" }},\r\n";
                        else
                            webApiCode += $"\t\t\t{crmAttribute.SchemaName}_UtcDateAndTime: {{ a: \"{crmAttribute.LogicalName}\" }},\r\n";
                    }
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Lookup ||
                         crmAttribute.FieldType == AttributeTypeCode.Customer)
                {
                    var entities = crmAttribute.EntityReferenceLogicalName.Split(";".ToCharArray());
                    crmAttribute.LogicalCollectionName = GetLogicalCollectionName(crmAttribute);
                    crmAttribute.NavigationPropertyName = GetNavigationPropertyName(crmAttribute);
                    var collections = crmAttribute.LogicalCollectionName.Split(";".ToCharArray());
                    var navigations = crmAttribute.NavigationPropertyName.Split(";".ToCharArray());
                    if (entities.Length == 1)
                    {
                        if (crmAttribute.IsCustomAttribute)
                            webApiCode += $"\t\t\t{crmAttribute.SchemaName}: {{ b: \"{crmAttribute.SchemaName}\", a: \"_{crmAttribute.LogicalName}_value\", c: \"{collections[0]}\", d: \"{entities[0]}\" }},\r\n";
                        else
                            webApiCode += $"\t\t\t{crmAttribute.SchemaName}: {{ b: \"{crmAttribute.LogicalName}\", a: \"_{crmAttribute.LogicalName}_value\", c: \"{collections[0]}\", d: \"{entities[0]}\" }},\r\n";
                    }
                    else
                    {
                        var j = 0;
                        foreach (var e in entities)
                        {
                            webApiCode += $"\t\t\t{navigations[j]}: {{ b: \"{navigations[j]}\", a: \"_{navigations[j].Split("_".ToCharArray())[0]}_value\", c: \"{collections[j]}\", d: \"{entities[j]}\" }},\r\n";
                            j++;
                        }
                    }
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Owner)
                {
                    webApiCode += $"\t\t\tOwnerId_systemuser: {{ b: \"ownerid\", a: \"_ownerid_value\", c: \"systemusers\", d: \"systemuser\" }},\r\n";
                    webApiCode += $"\t\t\tOwnerId_team: {{ b: \"ownerid\", a: \"_ownerid_value\", c: \"teams\", d: \"team\" }},\r\n";
                }
                if (!(crmAttribute.IsValidForCreate || crmAttribute.IsValidForUpdate))
                {
                    webApiCode = webApiCode.TrimEnd(" },\r\n".ToCharArray());
                    webApiCode += $", r: true }},\r\n";
                }
            }
            webApiCode = webApiCode.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            webApiCode += $"\t\t}};\r\n";
            webApiCode += $"\t\tif (arguments.length > 1) {{\r\n";
            webApiCode += $"\t\t\tfor (var i = 1; i < arguments.length; i++) {{\r\n";
            webApiCode += $"\t\t\t\tObject.assign({@class}, arguments[i]);\r\n";
            webApiCode += $"\t\t\t}}\r\n";
            webApiCode += $"\t\t}}\r\n";
            webApiCode += $"\t\tif (e === undefined) e = {{}};\r\n";
            webApiCode += $"\t\tvar u = {{}};\r\n";
            webApiCode += $"\t\tfor (var field in {@class}) {{\r\n";
            webApiCode += $"\t\t\tvar a = {@class}[field].a;\r\n";
            webApiCode += $"\t\t\tvar b = {@class}[field].b;\r\n";
            webApiCode += $"\t\t\tvar c = {@class}[field].c;\r\n";
            webApiCode += $"\t\t\tvar d = {@class}[field].d;\r\n";
            webApiCode += $"\t\t\tvar r = {@class}[field].r;\r\n";
            webApiCode += $"\t\t\t{@class}[field] = webApiField(e, a, b, c, d, r, u);\r\n";
            webApiCode += $"\t\t}}\r\n";
            webApiCode += $"\t\t{@class}.Entity = u;\r\n";
            webApiCode += $"\t\t{@class}.EntityName = \"{@class}\";\r\n";
            webApiCode += $"\t\t{@class}.EntityCollectionName = \"{GetLogicalCollectionName(@class)}\";\r\n";
            webApiCode += JsOptionSetFormCode;
            webApiCode += $"\t\t{@class}.OptionSet = optionSet;\r\n";
            webApiCode += $"\t\treturn {@class};\r\n";
            webApiCode += $"\t}};\r\n";

            webApiCode += $"}})({ProjectName} || ({ProjectName} = {{}}));";
            webApiCode = webApiCode.Replace("\"", "'");
            webApiCode = webApiCode.Replace("'*'", "\"*\"");
            if (!IsDebugWebApi)
            {
                webApiCode = Uglify.Js(webApiCode).Code;
                webApiCode = webApiCode.Replace("\"", "'");
                webApiCode = webApiCode.Replace("'*'", "\"*\"");
            }
            WebApiCode = webApiCode;

            var processForms = new List<SystemForm>();
            foreach (var form in Forms)
                if (CheckedItems.Contains($"{form.Name}"))
                    processForms.Add(form);
            WebApiCodeIntellisense = GetIntellisense(processForms, IsDebugForm, true, IsDebugWebApi);
        }
        private string _jsOptionSetFormCode = null;
        private string JsOptionSetFormCode
        {
            get
            {
                if (_jsOptionSetFormCode != null) return _jsOptionSetFormCode;
                _jsOptionSetFormCode = string.Empty;
                _jsOptionSetFormCode += $"\t\tvar optionSet = {{\r\n";
                foreach (var crmAttribute in Fields)
                {
                    if (!crmAttribute.IsValidForRead) continue;
                    if (crmAttribute.FieldType != AttributeTypeCode.Picklist && crmAttribute.FieldType != AttributeTypeCode.State && crmAttribute.FieldType != AttributeTypeCode.Status) continue;
                    _jsOptionSetFormCode += $"\t\t\t{crmAttribute.SchemaName} : {{\r\n";
                    foreach (string nvc in crmAttribute.OptionSetValues)
                        _jsOptionSetFormCode += $"\t\t\t\t{nvc}: {crmAttribute.OptionSetValues[nvc]},\r\n";
                    _jsOptionSetFormCode = _jsOptionSetFormCode.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
                    _jsOptionSetFormCode += $"\t\t\t}},\r\n";
                }
                _jsOptionSetFormCode = _jsOptionSetFormCode.TrimEnd(",\r\n".ToCharArray());
                _jsOptionSetFormCode += $"\r\n\t\t}};\r\n";
                return _jsOptionSetFormCode;
            }
        }

        private int _objectTypeCode = -1;
        private int ObjectTypeCode
        {
            get
            {
                if (_objectTypeCode != -1) return _objectTypeCode;
                var logicalName = EntityName.ToLower();
                var request = new RetrieveEntityRequest
                {
                    EntityFilters = EntityFilters.Entity,
                    LogicalName = logicalName
                };
                var response = (RetrieveEntityResponse)CrmService.Execute(request);
                if (response.EntityMetadata.ObjectTypeCode != null) _objectTypeCode = response.EntityMetadata.ObjectTypeCode.Value;
                return _objectTypeCode;
            }
        }
        private DataCollection<Entity> _processes = null;
        private DataCollection<Entity> Processes
        {
            get
            {
                if (_processes != null) return _processes;
                var fetchData = new
                {
                    category = "4",
                    statecode = "1",
                    primaryentity = ObjectTypeCode,
                    businessprocesstype = "0"
                };
                var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='workflow'>
    <attribute name='name' />
    <attribute name='uniquename' />
    <attribute name='xaml' />
    <filter type='and'>
      <condition attribute='category' operator='eq' value='{fetchData.category /*4*/}'/>
      <condition attribute='statecode' operator='eq' value='{fetchData.statecode /*1*/}'/>
      <condition attribute='primaryentity' operator='eq' value='{fetchData.primaryentity /*4*/}'/>
      <condition attribute='businessprocesstype' operator='eq' value='{fetchData.businessprocesstype /*4*/}'/>
    </filter>
  </entity>
</fetch>";
                var rows = CrmService.RetrieveMultiple(new FetchExpression(fetchXml));
                _processes = rows.Entities;
                return _processes;
            }
        }
        private List<SystemForm> _forms = null;
        private List<SystemForm> Forms
        {
            get
            {
                if (_forms != null) return _forms;
                var fetchData = new
                {
                    formactivationstate = "1",
                    objecttypecode = ObjectTypeCode,
                    type = "2",
                    type2 = "7"
                };
                var fetchXml = $@"
<fetch>
  <entity name='systemform'>
    <attribute name='description' />
    <attribute name='name' />
    <attribute name='formxml' />
    <attribute name='type' />
    <order attribute='name' descending='false'/>
    <filter type='and'>
      <condition attribute='formactivationstate' operator='eq' value='{fetchData.formactivationstate}'/>
      <condition attribute='objecttypecode' operator='eq' value='{fetchData.objecttypecode}'/>
      <filter type='or'>
        <condition attribute='type' operator='eq' value='{fetchData.type}'/>
        <condition attribute='type' operator='eq' value='{fetchData.type2}'/>
      </filter>
    </filter>
  </entity>
</fetch>";
                var rows = CrmService.RetrieveMultiple(new FetchExpression(fetchXml));
                _forms = new List<SystemForm>();
                foreach (var entity in rows.Entities)
                {
                    var name = entity.GetAttributeValue<string>("name");
                    var description = entity.GetAttributeValue<string>("description");
                    var formxml = entity.GetAttributeValue<string>("formxml");
                    var isQuickCreate = entity.GetAttributeValue<OptionSetValue>("type").Value == 7;
                    _forms.Add(new SystemForm
                    {
                        Name = name,
                        Description = description,
                        FormXml = formxml,
                        IsQuickCreate = isQuickCreate
                    });
                }
                return _forms;
            }
        }
        private string GetIntellisense(List<SystemForm> processForms, bool isDebugForm, bool isJsWebApi, bool isDebugWebApi)
        {
            var jsIntellisense = new JsIntellisense(CrmService)
            {
                ProcessForms = processForms,
                IsDebugForm = isDebugForm,
                IsDebugWebApi = isDebugWebApi,
                IsJsWebApi = isJsWebApi,
                ProjectName = ProjectName,
                EntityName = EntityName,
                Fields = Fields,
                Processes = Processes
            };
            return jsIntellisense.Intellisense;
        }
    }
}
