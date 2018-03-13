using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using PL.DynamicsCrm.DevKit.Shared.Xrm;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Xml.Linq;

namespace PL.DynamicsCrm.DevKit.Shared
{
    public class GeneratedJScriptLateBound
    {
        internal CodeAndIntellisense GoFormCode(OrganizationServiceProxy crmService, string projectName, string entity)
        {
            CrmService = crmService;
            ProjectName = projectName;
            Class = entity;
            LoadData(entity);
            var forms = GetForm();
            var message = IsValidFormData(forms);
            if (message.Length > 0)
                return new CodeAndIntellisense { FormCode = string.Empty, FormIntellisense = string.Empty, WebApiCode = string.Empty, WebApiIntellisense = string.Empty, Message = message };
            var quickCreateForms = GetQuickCreateForm();
            var processes = GetProcesses();

            var formCode = string.Empty;
            //---R
            formCode += $"{ProjectName}.Utility = {ProjectName}.Form.LoadUtility();\r\n";
            var i = 1;
            foreach (var form in forms)
            {
                var name = i == 1 ? Class : Class + i.ToString();
                formCode += $"{ProjectName}.Form.{name} = function (executionContext) {{\r\n";
                formCode += $"\tvar formContext = executionContext.getFormContext();\r\n";
                formCode += $"\tvar form = {ProjectName}.Form.LoadForm(formContext);\r\n";
                formCode += $"\tvar body = {{\r\n";
                formCode += GetJsFormBody(form.FormXml);
                formCode += $"\t}}\r\n";
                formCode += $"\t{ProjectName}.Form.LoadFields(formContext, body);\r\n";
                formCode += $"\tvar tab = {{\r\n";
                formCode += GetJsFormCode(form.FormXml);
                formCode += $"\t}}\r\n";
                formCode += $"\t{ProjectName}.Form.LoadTabs(formContext, tab);\r\n";
                formCode += $"\tbody.Tab = tab;\r\n";
                formCode += $"\tform.Body = body;\r\n";
                var codeHeader = GetJsCodeHeader(form.FormXml); ;
                if (codeHeader.Length > 0)
                {
                    formCode += $"\tvar header = {{\r\n";
                    formCode += codeHeader;
                    formCode += $"\t}}\r\n";
                    formCode += $"\t{ProjectName}.Form.LoadFields(formContext, header, \"header_\");\r\n";
                    formCode += $"\tform.Header = header;\r\n";
                }
                var codeFooter = GetJsCodeFooter(form.FormXml);
                if (codeFooter.Length > 0)
                {
                    formCode += $"\tvar footer = {{\r\n";
                    formCode += codeFooter;
                    formCode += $"\t}}\r\n";
                    formCode += $"\t{ProjectName}.Form.LoadFields(formContext, header, \"footer_\");\r\n";
                    formCode += $"\tform.Footer = footer;\r\n";
                }
                var codeProcess = GetJsProcessCode(processes);
                if (codeProcess.Length > 0)
                {
                    formCode += $"\tvar process = {ProjectName}.Form.LoadProcess(formContext);\r\n";
                    formCode += codeProcess;
                    formCode += $"\tform.Process = process;\r\n";
                }
                var codeQuickForm = GetJsQuickFormCode(form.FormXml);
                if (codeQuickForm.Length > 0)
                {
                    formCode += $"\tvar quickForm = {{\r\n";
                    formCode += codeQuickForm;
                    formCode += $"\t}}\r\n";
                    formCode += $"\t{ProjectName}.Form.LoadQuickForms(formContext, quickForm);\r\n";
                    formCode += $"\tform.QuickForm = quickForm;\r\n";
                }
                var codeNavigation = GetJsNavigationCode(form.FormXml);
                if (codeNavigation.Length > 0)
                {
                    formCode += $"\tvar navigation = {{\r\n";
                    formCode += codeNavigation;
                    formCode += $"\t}}\r\n";
                    formCode += $"\t{ProjectName}.Form.LoadNavigations(formContext, navigation);\r\n";
                    formCode += $"\tform.Navigation = navigation;\r\n";
                }
                formCode += $"\treturn form;\r\n";
                formCode += $"}}\r\n";
                i++;
            }
            var codeQuickCreate = GetJsQuickCreateFormCode(quickCreateForms);
            if (codeQuickCreate.Length > 0)
            {
                formCode += codeQuickCreate;
            }
            formCode += GetJsOptionSetFormCode();
            //---R

            //---R
            var formIntellisense = string.Empty;
            formIntellisense += $"///<reference path=\"crm.intellisense.js\" />\r\n";
            formIntellisense += $"{ProjectName}.Form = {ProjectName}.Form || {{}};\r\n";
            i = 1;
            foreach (var form in forms)
            {
                var name = i == 1 ? Class : Class + i.ToString();
                formIntellisense += $"{ProjectName}.Form.{name} = function(executionContext) {{\r\n";
                formIntellisense += $"\tvar {Class.ToLower()} = intellisense.Form;\r\n";
                formIntellisense += $"\tvar tab = {{}};\r\n";
                formIntellisense += GetJsFormIntellisense(form.FormXml);
                formIntellisense += $"\tvar body = {{\r\n";
                formIntellisense += $"\t\t///<field name=\"Tab\" type=\"Object\">A tab is a group of sections on a page</field>\r\n";
                formIntellisense += $"\t\tTab: tab,\r\n";
                formIntellisense += GetJsFormBodyIntellisense(form.FormXml);
                formIntellisense += $"\t}};\r\n";
                formIntellisense += $"\t{Class.ToLower()}.Body = body;\r\n";
                var intellisenseHeader = GetJsFormHeader(form.FormXml);
                if (intellisenseHeader.Length > 0)
                {
                    formIntellisense += $"\tvar header = {{\r\n";
                    formIntellisense += intellisenseHeader;
                    formIntellisense += $"\t}};\r\n";
                    formIntellisense += $"\t{Class.ToLower()}.Header = header;\r\n";
                }
                var intellisenseFooter = GetJsFormFooter(form.FormXml);
                if (intellisenseFooter.Length > 0)
                {
                    formIntellisense += $"\tvar footer = {{\r\n";
                    formIntellisense += intellisenseFooter;
                    formIntellisense += $"\t}};\r\n";
                    formIntellisense += $"\t{Class.ToLower()}.Footer = footer;\r\n";
                }
                var intellisenseProcess = GetJsProcessIntellisense(processes);
                if (intellisenseProcess.Length > 0)
                {
                    formIntellisense += $"\tvar process = intellisense.Process;\r\n";
                    formIntellisense += intellisenseProcess;
                    formIntellisense += $"\t{Class.ToLower()}.Process = process;\r\n";
                }
                var intellisenseQuickForm = GetJsQuickFormIntellisense(form.FormXml);
                if (intellisenseQuickForm.Length > 0)
                {
                    formIntellisense += $"\tvar quickForm = {{\r\n";
                    formIntellisense += intellisenseQuickForm;
                    formIntellisense += $"\t}}\r\n";
                    formIntellisense += $"\t{Class.ToLower()}.QuickForm = quickForm;\r\n";
                }
                var intellisenseNavigation = GetJsNavigationIntellisense(form.FormXml);
                if (intellisenseNavigation.Length > 0)
                {
                    formIntellisense += $"\tvar navigation = {{\r\n";
                    formIntellisense += intellisenseNavigation;
                    formIntellisense += $"\t}}\r\n";
                    formIntellisense += $"\t{Class.ToLower()}.Navigation = navigation;\r\n";
                }
                formIntellisense += $"\treturn {Class.ToLower()};\r\n";
                formIntellisense += $"}}\r\n";
                i++;
            }
            var intellisenseQuickCreate = GetJsQuickCreateFormIntellisense(quickCreateForms);
            if (intellisenseQuickCreate.Length > 0)
            {
                formIntellisense += intellisenseQuickCreate;
            }
            formIntellisense += GetJsOptionSetFormIntellisense();
            formIntellisense += IntellisenseAddEventListener();
            //---R

            //---R
            var webApiCode = string.Empty;
            var @class = Class.ToLower();
            webApiCode += $"{ProjectName}.WebApi = {ProjectName}.WebApi || {{}};\r\n";
            webApiCode += $"{ProjectName}.WebApi.{Class} = function (entity, extendFields) {{\r\n";
            webApiCode += $"\tvar {@class} = {{\r\n";
            foreach (var crmAttribute in Lists)
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
                    webApiCode += $"\t\t{crmAttribute.SchemaName}: {{ logicalName: \"{crmAttribute.LogicalName}\" }},\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.DateTime)
                {
                    if (crmAttribute.DateTimeBehavior == DateTimeBehavior.DateOnly)
                        webApiCode += $"\t\t{crmAttribute.SchemaName}_DateOnly: {{ logicalName: \"{crmAttribute.LogicalName}\" }},\r\n";
                    else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.TimeZoneIndependent)
                    {
                        if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                            webApiCode += $"\t\t{crmAttribute.SchemaName}_TimezoneDateOnly: {{ logicalName: \"{crmAttribute.LogicalName}\" }},\r\n";
                        else
                            webApiCode += $"\t\t{crmAttribute.SchemaName}_TimezoneDateAndTime: {{ logicalName: \"{crmAttribute.LogicalName}\" }},\r\n";
                    }
                    else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.UserLocal)
                    {
                        if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                            webApiCode += $"\t\t{crmAttribute.SchemaName}_UtcDateOnly: {{ logicalName: \"{crmAttribute.LogicalName}\" }},\r\n";
                        else
                            webApiCode += $"\t\t{crmAttribute.SchemaName}_UtcDateAndTime: {{ logicalName: \"{crmAttribute.LogicalName}\" }},\r\n";
                    }
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Lookup ||
                    crmAttribute.FieldType == AttributeTypeCode.Customer)
                {
                    var entities = crmAttribute.EntityReferenceLogicalName.Split(";".ToCharArray());
                    var collections = crmAttribute.LogicalCollectionName.Split(";".ToCharArray());
                    var navigations = crmAttribute.NavigationPropertyName.Split(";".ToCharArray());
                    if (entities.Length == 1)
                    {
                        webApiCode += $"\t\t{crmAttribute.SchemaName}: {{ logicalName: \"_{crmAttribute.LogicalName}_value\", entityLogicalCollectionName: \"{collections[0]}\", entityLogicalName: \"{entities[0]}\" }},\r\n";
                    }
                    else
                    {
                        var j = 0;
                        foreach (var e in entities)
                        {
                            webApiCode += $"\t\t{navigations[j]}: {{ logicalName: \"_{navigations[j].Split("_".ToCharArray())[0]}_value\", entityLogicalCollectionName: \"{collections[j]}\", entityLogicalName: \"{entities[j]}\" }},\r\n";
                            j++;
                        }
                    }
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Owner)
                {
                    webApiCode += $"\t\tOwnerId_systemuser: {{ logicalName: \"_ownerid_value\", entityLogicalCollectionName: \"systemusers\", entityLogicalName: \"systemuser\" }},\r\n";
                    webApiCode += $"\t\tOwnerId_team: {{ logicalName: \"_ownerid_value\", entityLogicalCollectionName: \"teams\", entityLogicalName: \"team\" }},\r\n";
                }
                if (!(crmAttribute.IsValidForCreate || crmAttribute.IsValidForUpdate))
                {
                    webApiCode = webApiCode.TrimEnd(" },\r\n".ToCharArray());
                    webApiCode += $", readOnly: true }},\r\n";
                }
            }
            webApiCode = webApiCode.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            webApiCode += $"\t}};\r\n";
            webApiCode += $"\tif (typeof extendFields !== undefined) Object.assign({@class}, extendFields);\r\n";
            webApiCode += $"\tif (entity === undefined) entity = {{}};\r\n";
            webApiCode += $"\tvar logicalName = \"\", entityLogicalCollectionName = \"\", entityLogicalName = \"\", readOnly = false, upsertEntity = {{}};\r\n";
            webApiCode += $"\tfor (var field in {@class}) {{\r\n";
            webApiCode += $"\t\tlogicalName = {@class}[field].logicalName;\r\n";
            webApiCode += $"\t\tentityLogicalCollectionName = {@class}[field].entityLogicalCollectionName;\r\n";
            webApiCode += $"\t\tentityLogicalName = {@class}[field].entityLogicalName;\r\n";
            webApiCode += $"\t\treadOnly = {@class}[field].readOnly;\r\n";
            webApiCode += $"\t\t{@class}[field] = {ProjectName}.WebApi.LoadField(entity, logicalName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity);\r\n";
            webApiCode += $"\t}};\r\n";
            webApiCode += $"\t{@class}.UpsertEntity = upsertEntity;\r\n";
            webApiCode += $"\t{@class}.LogicalName = \"{@class}\";\r\n";
            webApiCode += $"\t{@class}.LogicalCollectionName = \"{GetLogicalCollectionName(@class)}\";\r\n";
            //webApiCode += $"\t{@class}.OptionSet = {{\r\n";
            //webApiCode += WebApiOptionSet();
            //webApiCode += $"\t}}\r\n";
            webApiCode += $"\treturn {@class};\r\n";
            webApiCode += $"}};\r\n";
            webApiCode += GetJsOptionSetFormCode();
            //---R

            //---R
            var webApiIntellisense = string.Empty;
            webApiIntellisense += $"///<reference path=\"crm.intellisense.js\" />\r\n";
            webApiIntellisense += $"///<reference path=\"webapi.intellisense.js\" />\r\n";
            webApiIntellisense += $"{ProjectName}.WebApi = {ProjectName}.WebApi || {{}};\r\n";
            webApiIntellisense += $"{ProjectName}.WebApi.{Class} = function (entity, extendFields) {{\r\n";
            webApiIntellisense += $"\treturn {{\r\n";

            foreach (var crmAttribute in Lists)
            {
                if (crmAttribute.AttributeOf != null) continue;
                if (crmAttribute.IsDeprecated) continue;
                var @function = "{1}\t\t{0}: intellisense.EntityValue,\r\n";
                var comment = GetXmlCommentForField(crmAttribute);
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
                    webApiIntellisense += string.Format(@function, crmAttribute.SchemaName, comment);
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.DateTime)
                {
                    if (crmAttribute.DateTimeBehavior == DateTimeBehavior.DateOnly)
                        webApiIntellisense += string.Format(@function, crmAttribute.SchemaName + "_DateOnly", comment);
                    else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.TimeZoneIndependent)
                    {
                        if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                            webApiIntellisense += string.Format(@function, crmAttribute.SchemaName + "_TimezoneDateOnly", comment);
                        else
                            webApiIntellisense += string.Format(@function, crmAttribute.SchemaName + "_TimezoneDateAndTime", comment);
                    }
                    else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.UserLocal)
                    {
                        if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                            webApiIntellisense += string.Format(@function, crmAttribute.SchemaName + "_UtcDateOnly", comment);
                        else
                            webApiIntellisense += string.Format(@function, crmAttribute.SchemaName + "_UtcDateAndTime", comment);
                    }
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Lookup ||
                    crmAttribute.FieldType == AttributeTypeCode.Customer)
                {
                    var entities = crmAttribute.EntityReferenceLogicalName.Split(";".ToCharArray());
                    var collections = crmAttribute.LogicalCollectionName.Split(";".ToCharArray());
                    var navigations = crmAttribute.NavigationPropertyName.Split(";".ToCharArray());
                    if (entities.Length == 1)
                    {
                        webApiIntellisense += string.Format(@function, crmAttribute.SchemaName /*navigations[0]*/, comment);
                    }
                    else
                    {
                        var j = 0;
                        foreach (var e in entities)
                        {
                            webApiIntellisense += string.Format(@function, navigations[j], comment);
                            j++;
                        }
                    }
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Owner)
                {
                    webApiIntellisense += $"\t\t///<field name=\"OwnerId_systemuser\" type=\"Lookup\"></field>\r\n";
                    webApiIntellisense += $"\t\tOwnerId_systemuser: intellisense.EntityValue,\r\n";
                    webApiIntellisense += $"\t\t///<field name=\"OwnerId_team\" type=\"Lookup\"></field>\r\n";
                    webApiIntellisense += $"\t\tOwnerId_team: intellisense.EntityValue,\r\n";
                }
            }
            webApiIntellisense += $"\t\t///<field name=\"UpsertEntity\" type=\"Object\"></field>\r\n";
            webApiIntellisense += $"\t\tUpsertEntity: null,\r\n";
            webApiIntellisense += $"\t\t///<field name=\"LogicalName\" type=\"String\"></field>\r\n";
            webApiIntellisense += $"\t\tLogicalName: null,\r\n";
            webApiIntellisense += $"\t\t///<field name=\"LogicalCollectionName\" type=\"String\"></field>\r\n";
            webApiIntellisense += $"\t\tLogicalCollectionName: null,\r\n";
            webApiIntellisense += $"\t\t///<field name=\"OptionSet\" type=\"Object\"></field>\r\n";
            //webApiIntellisense += $"\t\tOptionSet: {{\r\n";
            //webApiIntellisense += IntellisenseOptionSet() + "\r\n";
            //webApiIntellisense += $"\t\t}}\r\n";
            //webApiIntellisense = webApiIntellisense.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            webApiIntellisense += $"\t}}\r\n";
            webApiIntellisense += $"}}\r\n";
            webApiIntellisense += GetJsOptionSetFormIntellisense();
            webApiIntellisense += IntellisenseAddEventListener();
            //---R

            return new CodeAndIntellisense
            {
                FormCode = formCode,
                FormIntellisense = formIntellisense,
                WebApiCode = webApiCode,
                WebApiIntellisense = webApiIntellisense,
                Message = string.Empty
            };
        }

        private class SystemForm
        {
            public string Name { get; set; }
            public string FormXml { get; set; }
            public string Description { get; set; }
        }

        private OrganizationServiceProxy CrmService = null;
        private string ProjectName { get; set; }
        private string Class { get; set; }
        private List<CrmAttribute> Lists { get; set; }
        private int ObjectTypeCode { get; set; }
        private bool HasImage { get; set; }

        private string GetNavigationPropertyName(CrmAttribute crmAttribute, RetrieveEntityResponse responseRelationships)
        {
            if (crmAttribute.FieldType == AttributeTypeCode.Owner) return "ownerid;ownerid";
            var value = string.Empty;
            var entities = crmAttribute.EntityReferenceLogicalName.Split(";".ToCharArray());
            foreach (var entity in entities)
            {
                var related =
                    responseRelationships.EntityMetadata.ManyToOneRelationships.FirstOrDefault(
                        item => item.ReferencingAttribute == crmAttribute.LogicalName && item.ReferencedEntity == entity);
                if (related != null)
                    value += related.ReferencingEntityNavigationPropertyName + ";";
            }
            return value.TrimEnd(";".ToCharArray());
        }

        private string GetLogicalCollectionName(CrmAttribute crmAttribute)
        {
            var value = string.Empty;
            var entities = crmAttribute.EntityReferenceLogicalName.Split(";".ToCharArray());
            foreach (var entity in entities)
            {
                var request = new RetrieveEntityRequest
                {
                    EntityFilters = EntityFilters.Attributes,
                    LogicalName = entity
                };
                var response = (RetrieveEntityResponse)CrmService.Execute(request);
                value += response.EntityMetadata.LogicalCollectionName + ";";
            }
            return value.TrimEnd(";".ToCharArray());
        }

        private void LoadData(string entity)
        {
            var logicalName = entity.ToLower();
            Lists = new List<CrmAttribute>();
            var request = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Attributes,
                LogicalName = logicalName
            };
            var response = (RetrieveEntityResponse)CrmService.Execute(request);
            ObjectTypeCode = response.EntityMetadata.ObjectTypeCode.Value;
            HasImage = !string.IsNullOrEmpty(response.EntityMetadata.PrimaryImageAttribute);
            var requestRelationships = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Relationships,
                LogicalName = logicalName
            };
            var responseRelationships = (RetrieveEntityResponse)CrmService.Execute(requestRelationships);

            var lists = new List<CrmAttribute>();
            foreach (AttributeMetadata attribute in response.EntityMetadata.Attributes)
            {
                var crmAttribute = new CrmAttribute(attribute, logicalName);
                if (crmAttribute.FieldType == AttributeTypeCode.Lookup ||
                    crmAttribute.FieldType == AttributeTypeCode.Customer ||
                    crmAttribute.FieldType == AttributeTypeCode.Owner)
                {
                    crmAttribute.LogicalCollectionName = GetLogicalCollectionName(crmAttribute);
                    crmAttribute.NavigationPropertyName = GetNavigationPropertyName(crmAttribute, responseRelationships);
                }
                else
                    crmAttribute.LogicalCollectionName = string.Empty;
                lists.Add(crmAttribute);
            }
            lists = lists.OrderBy(row => row.Name).ToList();
            Lists = lists;
        }

        private List<SystemForm> GetForm()
        {
            var fetchData = new
            {
                formactivationstate = "1",
                objecttypecode = ObjectTypeCode,
                type = "2"
            };
            var fetchXml = $@"
<fetch>
  <entity name='systemform'>
    <attribute name='description' />
    <attribute name='name' />
    <attribute name='formxml' />
    <order attribute='name' descending='false'/>
    <filter type='and'>
      <condition attribute='formactivationstate' operator='eq' value='{fetchData.formactivationstate/*1*/}'/>
      <condition attribute='objecttypecode' operator='eq' value='{fetchData.objecttypecode/*1*/}'/>
      <condition attribute='type' operator='eq' value='{fetchData.type/*2*/}'/>
    </filter>
  </entity>
</fetch>";
            var rows = CrmService.RetrieveMultiple(new FetchExpression(fetchXml));
            var forms = new List<SystemForm>();
            foreach (var entity in rows.Entities)
            {
                var name = entity.GetAttributeValue<string>("name");
                var description = entity.GetAttributeValue<string>("description");
                var formxml = entity.GetAttributeValue<string>("formxml");
                forms.Add(new SystemForm { Name = name, Description = description, FormXml = formxml });
            }
            return forms;
        }

        private List<SystemForm> GetQuickCreateForm()
        {
            var fetchData = new
            {
                formactivationstate = "1",
                objecttypecode = ObjectTypeCode,
                type = "7"
            };
            var fetchXml = $@"
<fetch>
  <entity name='systemform'>
    <attribute name='description' />
    <attribute name='name' />
    <attribute name='formxml' />
    <order attribute='name' descending='false'/>
    <filter type='and'>
      <condition attribute='formactivationstate' operator='eq' value='{fetchData.formactivationstate/*1*/}'/>
      <condition attribute='objecttypecode' operator='eq' value='{fetchData.objecttypecode/*1*/}'/>
      <condition attribute='type' operator='eq' value='{fetchData.type/*2*/}'/>
    </filter>
  </entity>
</fetch>";
            var rows = CrmService.RetrieveMultiple(new FetchExpression(fetchXml));
            var forms = new List<SystemForm>();
            foreach (var entity in rows.Entities)
            {
                var name = entity.GetAttributeValue<string>("name");
                var description = entity.GetAttributeValue<string>("description");
                var formxml = entity.GetAttributeValue<string>("formxml");
                forms.Add(new SystemForm { Name = name, Description = description, FormXml = formxml });
            }
            return forms;
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

        private string WebApiOptionSet()
        {
            var code = string.Empty;
            foreach (var crmAttribute in Lists)
            {
                if (!crmAttribute.IsValidForRead) continue;
                if (crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                    crmAttribute.FieldType == AttributeTypeCode.State ||
                    crmAttribute.FieldType == AttributeTypeCode.Status)
                {
                    code += $"\t\t{crmAttribute.Name}: {{ ";
                    foreach (string nvc in crmAttribute.OptionSetValues)
                        code += $"{nvc}: {crmAttribute.OptionSetValues[nvc]}, ";
                    code = code.TrimEnd(", ".ToCharArray()) + " },\r\n";
                }
            }
            code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }

        private string IntellisenseOptionSet()
        {
            const string @enum = "\t\t[[Enum]]: {\r\n[[Declare]]\r\n\t\t\t},\r\n";
            const string field = "\t\t\t\t///<field name=\"{0}\" type=\"PickListValue\"><br/>{0} = {1}<br/></field>\r\n";
            var code = string.Empty;
            foreach (var crmAttribute in Lists)
            {
                if (!crmAttribute.IsValidForRead) continue;
                if (crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                    crmAttribute.FieldType == AttributeTypeCode.State ||
                    crmAttribute.FieldType == AttributeTypeCode.Status)
                {
                    var tmp = string.Empty;
                    var fullComment = "<br/>";
                    foreach (string nvc in crmAttribute.OptionSetValues)
                    {
                        tmp += string.Format(@field, nvc, crmAttribute.OptionSetValues[nvc]);
                        tmp += string.Format("\t\t\t\t{0}: {1},\r\n", nvc, crmAttribute.OptionSetValues[nvc]);
                        fullComment += string.Format("{0} = {1}<br/>", nvc, crmAttribute.OptionSetValues[nvc]);
                    }
                    tmp = tmp.TrimEnd(",\r\n".ToCharArray());
                    var temp = string.Format("\t///<field name=\"{0}\" type=\"PickList\">{1}</field>\r\n\t\t\t", crmAttribute.Name, fullComment);
                    code += @enum.Replace("[[Enum]]", temp + crmAttribute.Name).Replace("[[Declare]]", tmp);
                }
            }
            code = code.TrimEnd("\r\n".ToCharArray()).TrimEnd("\r\n".ToCharArray());
            code = code.TrimEnd(",".ToCharArray());
            return code;
        }

        private string GetFieldType(CrmAttribute crmAttribute)
        {
            if (crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                crmAttribute.FieldType == AttributeTypeCode.State ||
                crmAttribute.FieldType == AttributeTypeCode.Status)
                return "PickList";
            if (crmAttribute.FieldType == AttributeTypeCode.DateTime)
                if (crmAttribute.DateTimeBehavior == DateTimeBehavior.DateOnly)
                    return "DateOnly";
            if (crmAttribute.FieldType == AttributeTypeCode.Lookup ||
                crmAttribute.FieldType == AttributeTypeCode.Owner ||
                crmAttribute.FieldType == AttributeTypeCode.Customer)
                return "Lookup";
            return crmAttribute.FieldType.ToString();
        }

        private string GetWebApiType(CrmAttribute crmAttribute)
        {
            var @readonly = string.Empty;
            var apiType = string.Empty;
            if (!(crmAttribute.IsValidForCreate || crmAttribute.IsValidForUpdate))
                @readonly = "ReadOnly - ";
            if (crmAttribute.FieldType == AttributeTypeCode.Uniqueidentifier ||
                crmAttribute.FieldType == AttributeTypeCode.Lookup ||
                crmAttribute.FieldType == AttributeTypeCode.Customer ||
                crmAttribute.FieldType == AttributeTypeCode.Owner)
                apiType = "Edm.Guid";
            else if (crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                     crmAttribute.FieldType == AttributeTypeCode.State ||
                     crmAttribute.FieldType == AttributeTypeCode.Status)
                apiType = "Edm.Int32";
            else if (crmAttribute.FieldType == AttributeTypeCode.String ||
                     crmAttribute.FieldType == AttributeTypeCode.Memo)
                apiType = "Edm.String";
            else if (crmAttribute.FieldType == AttributeTypeCode.Double)
                apiType = "Edm.Double";
            else if (crmAttribute.FieldType == AttributeTypeCode.Integer)
                apiType = "Edm.Int32";
            else if (crmAttribute.FieldType == AttributeTypeCode.Decimal ||
                     crmAttribute.FieldType == AttributeTypeCode.Money)
                apiType = "Edm.Decimal";
            else if (crmAttribute.FieldType == AttributeTypeCode.Boolean)
                apiType = "Edm.Boolean";
            else if (crmAttribute.FieldType == AttributeTypeCode.DateTime)
            {
                if (crmAttribute.DateTimeBehavior == DateTimeBehavior.DateOnly)
                    apiType = "Edm.Date";
                else
                    apiType = "Edm.DateTimeOffset";
            }
            return $"{@readonly}{apiType}";
        }

        private string GetXmlCommentForField(CrmAttribute crmAttribute)
        {
            const string temp = "\t\t///<field name=\"{0}\" type=\"{1}\">{2}</field>\r\n";
            const string temp2 = "\t\t///<field name=\"{0}\" type=\"{1}\">{2}</field>\r\n";
            var comment = string.Empty;
            if (crmAttribute.DateTimeBehavior == DateTimeBehavior.DateOnly)
                comment += string.Format(temp, crmAttribute.SchemaName + "_DateOnly", GetFieldType(crmAttribute), GetWebApiType(crmAttribute));
            else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.TimeZoneIndependent)
            {
                if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                    comment += string.Format(temp, crmAttribute.SchemaName + "_TimezoneDateOnly", GetFieldType(crmAttribute), GetWebApiType(crmAttribute));
                else
                    comment += string.Format(temp, crmAttribute.SchemaName + "_TimezoneDateAndTime", GetFieldType(crmAttribute), GetWebApiType(crmAttribute));
            }
            else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.UserLocal)
            {
                if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                    comment += string.Format(temp, crmAttribute.SchemaName + "_UtcDateOnly", GetFieldType(crmAttribute), GetWebApiType(crmAttribute));
                else
                    comment += string.Format(temp, crmAttribute.SchemaName + "_UtcDateAndTime", GetFieldType(crmAttribute), GetWebApiType(crmAttribute));
            }
            else
            {
                var fieldType = GetFieldType(crmAttribute);
                if (fieldType == "PickList")
                    comment += string.Format(temp2, crmAttribute.SchemaName, $"OptionSet.{Class}.{crmAttribute.SchemaName}", $"{GetWebApiType(crmAttribute)} - OptionSet.{Class}.{crmAttribute.SchemaName}");
                else
                    comment += string.Format(temp, crmAttribute.SchemaName, fieldType, GetWebApiType(crmAttribute));
            }
            return comment;
        }

        private string IsValidFormData(List<SystemForm> forms)
        {
            var message = string.Empty;
            foreach (var form in forms)
            {
                var xdoc = XDocument.Parse(form.FormXml);
                var tabs = from x in xdoc.Descendants("tabs").Elements("tab")
                           select new
                           {
                               Name = x?.Attribute("name")?.Value,
                               InnerText = x?.ToString()
                           };
                foreach (var tab in tabs)
                {
                    if (tab.Name.Contains(" ") ||
                        tab.Name.Contains("{") ||
                        tab.Name.Contains("}"))
                        message += $"tab.Name = {tab.Name} invalid name\r\n";
                }
                foreach(var tab in tabs) {
                    var xdoc2 = XDocument.Parse(tab.InnerText);
                    var sections = from x2 in xdoc2.Descendants("columns").Descendants("column").Descendants("sections").Elements("section")
                                   select new
                                   {
                                       Name = x2.Attribute("name")?.Value
                                   };
                    foreach (var section in sections)
                    {
                        if (section.Name.Contains(" ") ||
                            section.Name.Contains("{") ||
                            section.Name.Contains("}"))
                            message += $"tab: {tab.Name} - section: {section.Name} invalid name\r\n";
                    }
                }
            }
            return message;
        }

        private string GetJsOptionSetFormCode()
        {
            var code = string.Empty;
            foreach (var crmAttribute in Lists)
            {
                if (!crmAttribute.IsValidForRead) continue;
                if (crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                    crmAttribute.FieldType == AttributeTypeCode.State ||
                    crmAttribute.FieldType == AttributeTypeCode.Status)
                {
                    code += $"OptionSet.{crmAttribute.SchemaName} = {{\r\n";
                    foreach (string nvc in crmAttribute.OptionSetValues)
                        code += $"\t{nvc}: {crmAttribute.OptionSetValues[nvc]},\r\n";
                    code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
                    code += $"}}\r\n";
                }
            }
            code = code.TrimEnd("\r\n".ToCharArray());
            return code;
        }

        private string GetJsOptionSetFormIntellisense()
        {
            var intellisense = string.Empty;
            foreach (var crmAttribute in Lists)
            {
                if (!crmAttribute.IsValidForRead) continue;
                if (crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                    crmAttribute.FieldType == AttributeTypeCode.State ||
                    crmAttribute.FieldType == AttributeTypeCode.Status)
                {
                    intellisense += $"///<field name=\"{crmAttribute.SchemaName}\" type=\"PickList\"></field>\r\n";
                    intellisense += $"OptionSet.{crmAttribute.SchemaName} = {{\r\n";
                    foreach (string nvc in crmAttribute.OptionSetValues)
                    {
                        intellisense += $"\t///<field name=\"{nvc}\" type=\"PickListValue\">{nvc} = {crmAttribute.OptionSetValues[nvc]}</field>\r\n";
                        intellisense += $"\t{nvc}: {crmAttribute.OptionSetValues[nvc]},\r\n";
                    }
                    intellisense = intellisense.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
                    intellisense += $"}}\r\n";
                }
            }
            return intellisense;
        }

        private string GetJsQuickCreateFormCode(List<SystemForm> forms)
        {
            var code = string.Empty;
            foreach (var form in forms)
            {
                code += $"{ProjectName}.Form.{GetSafeName(form.Name)} = function (executionContext) {{\r\n";
                code += $"\tvar formContext = executionContext.getFormContext();\r\n";
                code += $"\tvar form = {ProjectName}.Form.LoadForm(formContext);\r\n";
                code += $"\tvar section = {{\r\n";
                var xdoc = XDocument.Parse(form.FormXml);
                var sections = (from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns").Descendants("column").Descendants("sections").Descendants("section")
                                select (string)x?.Attribute("name")).ToList<string>();
                foreach (var section in sections)
                    code += $"\t\t{GetSafeName(section)}: {{}},\r\n";
                code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
                code += $"\t}}\r\n";
                code += $"\t{ProjectName}.Form.LoadSections(formContext, section);\r\n";
                code += $"\tform.Section = section;\r\n";
                code += $"\tvar body = {{\r\n";
                var fields = (from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns").Descendants("column").Descendants("sections").Descendants("section").Descendants("rows").Descendants("row").Descendants("cell").Descendants("control")
                              select (string)x.Attribute("datafieldname")).ToList<string>();
                fields.Sort();
                code += GetJsForListFields(fields);
                code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
                code += $"\t}}\r\n";
                code += $"\t{ProjectName}.Form.LoadFields(formContext, body);\r\n";
                code += $"\tform.Body = body;\r\n";
                code += $"\treturn form;\r\n";
                code += $"}}\r\n";
            }
            return code;
        }

        private string GetJsQuickCreateFormIntellisense(List<SystemForm> forms)
        {
            var intellisense = string.Empty;
            foreach(var form in forms)
            {
                intellisense += $"{ProjectName}.Form.{GetSafeName(form.Name)} = function (executionContext) {{\r\n";
                intellisense += $"\tvar {Class.ToLower()} = intellisense.FormQuickCreate;\r\n";
                intellisense += $"\t///<field name=\"section\" type=\"Object\"></field>\r\n";
                intellisense += $"\tvar section = {{\r\n";
                var xdoc = XDocument.Parse(form.FormXml);
                var sections = (from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns").Descendants("column").Descendants("sections").Descendants("section")
                            select (string)x?.Attribute("name")).ToList<string>();
                foreach(var section in sections)
                    intellisense += $"\t\t{GetSafeName(section)}: intellisense.FormSection,\r\n";
                intellisense = intellisense.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
                intellisense += $"\t}}\r\n";
                intellisense += $"\tvar body = {{\r\n";
                intellisense += $"\t\t///<field name=\"Section\" type=\"Object\">A group of sections on a quick create form</field>\r\n";
                intellisense += $"\t\tSection: section,\r\n";
                var fields = (from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns").Descendants("column").Descendants("sections").Descendants("section").Descendants("rows").Descendants("row").Descendants("cell").Descendants("control")
                              select (string)x.Attribute("datafieldname")).ToList<string>();
                fields.Sort();
                intellisense += GetJsIntellisenseForListFields(fields);
                intellisense = intellisense.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
                intellisense += $"\t}}\r\n";
                intellisense += $"\t{Class.ToLower()}.Body = body;\r\n";
                intellisense += $"\treturn {Class.ToLower()};\r\n";
                intellisense += $"}}\r\n";
            }
            return intellisense;
        }

        private string GetJsNavigationCode(string formXml)
        {
            var code = string.Empty;
            var xdoc = XDocument.Parse(formXml);
            var navigations = (from x in xdoc.Descendants("Navigation").Descendants("NavBar").Descendants("NavBarByRelationshipItem")
                               select (string)x?.Attribute("Id")).ToList<string>();
            foreach (var navigation in navigations)
                code += $"\t\t{navigation}: {{}},\r\n";
            code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }

        private string GetJsNavigationIntellisense(string formXml)
        {
            var intellisense = string.Empty;
            var xdoc = XDocument.Parse(formXml);
            var navigations = (from x in xdoc.Descendants("Navigation").Descendants("NavBar").Descendants("NavBarByRelationshipItem")
                          select (string)x?.Attribute("Id")).ToList<string>();
            foreach (var navigation in navigations)
                intellisense += $"\t\t{navigation}: intellisense.FormNavigation,\r\n";
            intellisense = intellisense.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return intellisense;
        }

        private string GetJsQuickFormCode(string formXml)
        {
            var code = string.Empty;
            var xdoc = XDocument.Parse(formXml);
            var fields = from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns").Descendants("column").Descendants("sections").Descendants("section").Descendants("rows").Descendants("row").Descendants("cell").Descendants("control")
                         select new
                         {
                             QuickForms = x?.Descendants("parameters")?.Descendants("QuickForms"),
                             id = (string)x.Attribute("id")
                         };
            var quickForms = (from f in fields
                              where f.QuickForms.Count() != 0
                              select f.id).ToList<string>();
            foreach (var quickForm in quickForms)
                code += $"\t\t{quickForm}: {{}},\r\n";
            code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }

        private string GetJsQuickFormIntellisense(string formXml)
        {
            var intellisense = string.Empty;
            var xdoc = XDocument.Parse(formXml);
            var fields = from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns").Descendants("column").Descendants("sections").Descendants("section").Descendants("rows").Descendants("row").Descendants("cell").Descendants("control")
                         select new
                         {
                             QuickForms = x?.Descendants("parameters")?.Descendants("QuickForms"),
                             id = (string)x.Attribute("id")
                         };
            var quickForms = (from f in fields
                              where f.QuickForms.Count() != 0
                              select f.id).ToList<string>();
            foreach(var quickForm in quickForms)
                intellisense += $"\t\t{quickForm}: intellisense.FormQuickView,\r\n";
            intellisense = intellisense.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return intellisense;
        }

        private DataCollection<Entity> GetProcesses()
        {
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
      <condition attribute='category' operator='eq' value='{fetchData.category/*4*/}'/>
      <condition attribute='statecode' operator='eq' value='{fetchData.statecode/*1*/}'/>
      <condition attribute='primaryentity' operator='eq' value='{fetchData.primaryentity/*4*/}'/>
      <condition attribute='businessprocesstype' operator='eq' value='{fetchData.businessprocesstype/*4*/}'/>
    </filter>
  </entity>
</fetch>";
            var rows = CrmService.RetrieveMultiple(new FetchExpression(fetchXml));
            return rows.Entities;
        }

        private string GetJsProcessCode(DataCollection<Entity> entities)
        {
            var code = string.Empty;
            foreach (var entity in entities)
            {
                var xaml = entity.GetAttributeValue<string>("xaml");
                var name = entity.GetAttributeValue<string>("name");
                name = GetSafeName(name);
                code += $"\tvar _{name} = {{\r\n";

                var xdoc = XDocument.Parse(xaml);
                var ns = xdoc.Root?.GetNamespaceOfPrefix("mxswa");
                var rows2 = from x in xdoc.Descendants(ns + "Workflow").Elements(ns + "ActivityReference")
                            select new
                            {
                                DisplayName = x.Attribute("DisplayName")?.Value,
                                InnerText = x.ToString()
                            };
                var fields = new List<string>();
                foreach (var row in rows2)
                {
                    var arr = row.DisplayName.Split(" ".ToCharArray());
                    if (arr.Length == 1) continue;
                    const string pattern = @"DataFieldName=""\w*""";
                    foreach (Match m in Regex.Matches(row.InnerText, pattern))
                    {
                        var array = m.Value.Split("=".ToCharArray());
                        var fieldName = array[1].Substring(1, array[1].Length - 2);
                        fields.Add(fieldName);
                    }
                }
                fields.Sort();
                code += GetJsForListFields(fields);
                code += $"\t}}\r\n";
                code += $"\t{ProjectName}.Form.LoadFields(formContext, _{name}, \"header_process_\");\r\n";
                code += $"\tprocess.{name} = _{name};\r\n";
            }
            return code;
        }

        private string GetJsProcessIntellisense(DataCollection<Entity> entities)
        {
            var intellisense = string.Empty;
            foreach(var entity in entities)
            {
                var xaml = entity.GetAttributeValue<string>("xaml");
                var name = entity.GetAttributeValue<string>("name");
                name = GetSafeName(name);
                intellisense += $"\tvar _{name} = {{\r\n";

                var xdoc = XDocument.Parse(xaml);
                var ns = xdoc.Root?.GetNamespaceOfPrefix("mxswa");
                var rows2 = from x in xdoc.Descendants(ns + "Workflow").Elements(ns + "ActivityReference")
                            select new
                            {
                                DisplayName = x.Attribute("DisplayName")?.Value,
                                InnerText = x.ToString()
                            };
                var fields = new List<string>();
                foreach (var row in rows2)
                {
                    var arr = row.DisplayName.Split(" ".ToCharArray());
                    if (arr.Length == 1) continue;
                    const string pattern = @"DataFieldName=""\w*""";
                    foreach (Match m in Regex.Matches(row.InnerText, pattern))
                    {
                        var array = m.Value.Split("=".ToCharArray());
                        var fieldName = array[1].Substring(1, array[1].Length - 2);
                        fields.Add(fieldName);
                    }
                }
                fields.Sort();
                intellisense += GetJsIntellisenseForListFields(fields);
                intellisense += $"\t}}\r\n";
                intellisense += $"\tprocess.{name} = _{name};\r\n";
            }
            return intellisense;
        }

        private string GetSafeName(string name)
        {
            name = name.Replace(" ", "");
            return name;
        }

        private string GetJsCodeFooter(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var footers = (from x in xdoc.Descendants("footer").Descendants("rows").Descendants("row").Descendants("cell").Descendants("control")
                           select x.Attribute("datafieldname")?.Value).ToList<string>();
            footers.Sort();
            var code = GetJsForListFields(footers);
            if (code.EndsWith(",\r\n")) code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            if (code == "\r\n") return string.Empty;
            return code;
        }

        private string GetJsFormFooter(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var footers = (from x in xdoc.Descendants("footer").Descendants("rows").Descendants("row").Descendants("cell").Descendants("control")
                           select x.Attribute("datafieldname")?.Value).ToList<string>();
            footers.Sort();
            var code = GetJsIntellisenseForListFields(footers);
            if (code.EndsWith(",\r\n")) code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }

        private string GetJsCodeHeader(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var headers = (from x in xdoc.Descendants("header").Descendants("rows").Descendants("row").Descendants("cell").Descendants("control")
                           select x.Attribute("datafieldname")?.Value).ToList<string>();
            headers.Sort();
            var code = GetJsForListFields(headers);
            if (code.EndsWith(",\r\n")) code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            if (code == "\r\n") return string.Empty;
            return code;
        }

        private string GetJsFormHeader(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var headers = (from x in xdoc.Descendants("header").Descendants("rows").Descendants("row").Descendants("cell").Descendants("control")
                           select x.Attribute("datafieldname")?.Value).ToList<string>();
            headers.Sort();
            var code = GetJsIntellisenseForListFields(headers);
            if (code.EndsWith(",\r\n")) code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }

        private string StaticCode()
        {
            var code = @"{0}///<field name='AddTabStateChange' type='Function'></field>
{0}AddTabStateChange: intellisense.FunctionTabAddTabStateChange,
{0}///<field name='DisplayState' type='OptionSet.TabDisplayState'>[GetSet] a value that indicates whether the tab is collapsed or expanded.</field>
{0}DisplayState: '',
{0}///<field name='Focus' type='Function'></field>
{0}Focus: intellisense.FunctionControlFocus,
{0}///<field name='Label' type='String'>[GetSet] the tab label.</field>
{0}Label: '',
{0}///<field name='Name' type='String'>[Get] returns the name of the tab.</field>
{0}Name: '',
{0}///<field name='Parent' type='Object'>[Get] returns the formContext.ui object containing the tab.</field>
{0}Parent: '',
{0}///<field name='Visible' type='Boolean'>[GetSet] a value that indicates whether the tab is currently visible or not.</field>
{0}Visible: '',
{0}///<field name='RemoveTabStateChange' type='Function'></field>
{0}RemoveTabStateChange: intellisense.FunctionTabRemoveTabStateChange,
{0}///<field name='Section' type='Object'>A section contains methods to manage how it appears as well as accessing the tab that contains the section.</field>
";
            code = string.Format(code, "\t\t");
            code = code.Replace("'", "\"");
            return code;
        }

        private string GetJsFormCode(string formXml)
        {
            var code = string.Empty;

            var xdoc = XDocument.Parse(formXml);
            var tabs = from x in xdoc.Descendants("tabs").Elements("tab")
                       select new
                       {
                           Name = x?.Attribute("name")?.Value,
                           InnerText = x?.ToString()
                       };
            foreach (var tab in tabs)
            {
                code += $"\t\t{tab.Name}: {{\r\n";
                code += $"\t\t\tSection: {{\r\n";

                var xdoc2 = XDocument.Parse(tab.InnerText);
                var sections = from x2 in xdoc2.Descendants("columns").Descendants("column").Descendants("sections").Elements("section")
                            select new
                            {
                                Name = x2.Attribute("name")?.Value
                            };
                foreach(var section in sections)
                    code += $"\t\t\t\t{section.Name}: {{}},\r\n";
                code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
                code += $"\t\t\t}},\r\n";
                code += $"\t\t}},\r\n";
            }
            code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }

        private string GetJsFormIntellisense(string formXml)
        {
            var intellisense = string.Empty;
            var xdoc = XDocument.Parse(formXml);
            var rows = from x in xdoc.Descendants("tabs").Elements("tab")
                       select new
                       {
                           Name = x?.Attribute("name")?.Value,
                           InnerText = x?.ToString()
                       };
            foreach (var row in rows)
            {
                intellisense += $"\ttab.{row.Name} = {{\r\n";
                intellisense += StaticCode();
                intellisense += $"\t\tSection: {{\r\n";
                var xdoc2 = XDocument.Parse(row.InnerText);
                var rows2 = from x2 in xdoc2.Descendants("columns").Descendants("column").Descendants("sections").Elements("section")
                            select new
                            {
                                name = x2.Attribute("name")?.Value
                            };
                foreach (var row2 in rows2)
                    intellisense += $"\t\t\t{row2.name}: intellisense.FormSection,\r\n";
                intellisense = intellisense.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
                intellisense += $"\t\t}}\r\n";
                intellisense += $"\t}};\r\n";
            }
            return intellisense;
        }

        private string GetJsForListFields(List<string> list)
        {
            var code = string.Empty;
            foreach (var item in list)
            {
                var crmAttribute = Lists.Where(x => x.LogicalName == item).FirstOrDefault();
                var name = crmAttribute.SchemaName;
                code += $"\t\t{name}: {{}},\r\n";
            }
            code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }

        private string GetJsIntellisenseForListFields(List<string> list)
        {
            var code = string.Empty;
            const string line1 = "\t\t///<field name=\"{0}\" type=\"{1}\">{2}</field>\r\n";
            const string line2 = "\t\t{0}: intellisense.{1},\r\n";
            foreach (var item in list)
            {
                var crmAttribute = Lists.Where(x => x.LogicalName == item).FirstOrDefault();
                var name = crmAttribute.SchemaName;
                if (crmAttribute == null)
                {
                    code += $"//ERROR: {item}\r\n";
                    continue;
                }
                if (crmAttribute.FieldType == AttributeTypeCode.Memo ||
                    crmAttribute.FieldType == AttributeTypeCode.String)
                {
                    code += string.Format(line1, name, "String", string.Empty);
                    code += string.Format(line2, name, "FieldString");
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                         crmAttribute.FieldType == AttributeTypeCode.State ||
                         crmAttribute.FieldType == AttributeTypeCode.Status)
                {
                    code += string.Format(line1, name, "OptionSet." + Class + "." + crmAttribute.SchemaName, string.Empty);
                    if (crmAttribute.IsMultiSelectPicklist)
                        code += string.Format(line2, name, "FieldMultiOptionSet");
                    else
                        code += string.Format(line2, name, "FieldOptionSet");
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.DateTime)
                {
                    code += string.Format(line1, name, "DateTime", string.Empty);
                    code += string.Format(line2, name, "FieldDateTime");
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Uniqueidentifier)
                {
                    code += $"//ERROR: {name}\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Lookup ||
                         crmAttribute.FieldType == AttributeTypeCode.Owner ||
                         crmAttribute.FieldType == AttributeTypeCode.Customer)
                {
                    code += string.Format(line1, name, "Lookup", string.Empty);
                    code += string.Format(line2, name, "FieldLookup");
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Boolean)
                {
                    code += string.Format(line1, name, "Boolean", string.Empty);
                    code += string.Format(line2, name, "FieldBoolean");
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Money)
                {
                    code += string.Format(line1, name, "Money", string.Empty);
                    code += string.Format(line2, name, "FieldNumber");
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Integer)
                {
                    code += string.Format(line1, name, "Integer", string.Empty);
                    code += string.Format(line2, name, "FieldNumber");
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Double)
                {
                    code += string.Format(line1, name, "Double", string.Empty);
                    code += string.Format(line2, name, "FieldNumber");
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Decimal)
                {
                    code += string.Format(line1, name, "Decimal", string.Empty);
                    code += string.Format(line2, name, "FieldNumber");
                }
            }
            return code;
        }

        private string GetJsFormBodyIntellisense(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var fields = from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns").Descendants("column").Descendants("sections").Descendants("section").Descendants("rows").Descendants("row").Descendants("cell").Descendants("control")
                         select new
                         {
                             FieldName = (string)x.Attribute("datafieldname")
                         };
            var list = (from field in fields where field.FieldName != null select field.FieldName.ToString()).ToList();
            list.Sort();
            return GetJsIntellisenseForListFields(list);
        }

        private string GetJsFormBody(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var fields = from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns").Descendants("column").Descendants("sections").Descendants("section").Descendants("rows").Descendants("row").Descendants("cell").Descendants("control")
                         select new
                         {
                             FieldName = (string)x.Attribute("datafieldname")
                         };
            var list = (from field in fields where field.FieldName != null select field.FieldName.ToString()).ToList();
            list.Sort();
            return GetJsForListFields(list);
        }

        private string IntellisenseAddEventListener()
        {
            var code = @"intellisense.addEventListener('statementcompletion', function (event) {
    event.items = event.items.filter(function (item) {
        var removes = ['hasOwnProperty', 'propertyIsEnumerable', 'isPrototypeOf', 'toLocaleString', 'toString', 'valueOf', 'constructor', '__defineGetter__', '__defineSetter__', '__lookupGetter__', '__lookupSetter__', '__proto__'];
        if (removes.indexOf(item.name) != -1) return false;
        var removes2 = ['apply', 'arguments', 'bind', 'call', 'caller', 'length', 'name', 'prototype', 'toMethod'];
        if (event.targetName == 'WebApi' && removes2.indexOf(item.name) != -1) return false;
        item.glyph = 'vs:GlyphGroupNamespace';
        if (item.comments.length != 0) {
            if (item.comments.indexOf('type='Boolean'') >= 0)
                item.glyph = 'vs:GlyphGroupModule';
            else if (item.comments.indexOf('type='Money'') >= 0)
                item.glyph = 'vs:GlyphGroupStruct';
            else if (item.comments.indexOf('type='DateTime'') >= 0 || item.comments.indexOf('type='DateOnly'') >= 0)
                item.glyph = 'vs:GlyphGroupTemplate';
            else if (item.comments.indexOf('type='PickList'') >= 0 || item.comments.indexOf('type='Status'') >= 0 || item.comments.indexOf('type='State'') >= 0 || item.comments.indexOf('type='OptionSet.') >= 0)
                item.glyph = 'vs:GlyphGroupEnum';
            else if (item.comments.indexOf('type='Function'') >= 0)
                item.glyph = 'vs:GlyphGroupEvent';
            else if (item.comments.indexOf('type='Lookup'') >= 0 || item.comments.indexOf('type='PartyList'') >= 0)
                item.glyph = 'vs:GlyphGroupMapItem';
            else if (item.comments.indexOf('type='Object'') >= 0)
                item.glyph = 'vs:GlyphGroupNamespace';
            else if (item.comments.indexOf('type='Memo'') >= 0 || item.comments.indexOf('type='String'') >= 0)
                item.glyph = 'vs:GlyphGroupField';
            else if (item.comments.indexOf('type='Uniqueidentifier'') >= 0)
                item.glyph = 'vs:GlyphGroupMap';
            else if (item.comments.indexOf('type='Virtual'') >= 0)
                item.glyph = 'vs:GlyphGroupInterface';
            else if (item.comments.indexOf('type='Array'') >= 0)
                item.glyph = 'vs:GlyphJSharpProject';
            else if (item.comments.indexOf('type='PickListValue'') >= 0)
                item.glyph = 'vs:GlyphGroupEnumMember';
            else if (item.comments.indexOf('type='Integer'') >= 0)
                item.glyph = 'vs:GlyphGroupInterface';
            else if (item.comments.indexOf('type='Double'') >= 0)
                item.glyph = 'vs:GlyphReference';
        }
        return true;
    });
})";
            code = code.Replace("'", "\"");
            code = code.Replace("\"type=", "'type=");
            code = code.Replace("\"\")", "\"')");
            code = code.Replace("'type=\"OptionSet.\"", "'type=\"OptionSet.'");
            return code;
        }
    }
}
