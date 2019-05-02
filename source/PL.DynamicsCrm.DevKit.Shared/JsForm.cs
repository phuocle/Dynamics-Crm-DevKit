using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Xml.Linq;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using NUglify;
using PL.DynamicsCrm.DevKit.Shared.Xrm;

namespace PL.DynamicsCrm.DevKit.Shared
{
    public class JsForm
    {
        private List<CrmAttribute> _fields;
        private List<SystemForm> _forms;
        private string _jsOptionSetFormCode;
        private int _objectTypeCode = -1;
        private DataCollection<Entity> _processes;

        public JsForm(OrganizationServiceProxy crmService, string projectName, string entityName)
        {
            CrmService = crmService;
            EntityName = entityName;
            ProjectName = projectName;
        }

        private OrganizationServiceProxy CrmService { get; }
        private string EntityName { get; }
        private string ProjectName { get; }

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
                var response = (RetrieveEntityResponse) CrmService.Execute(request);
                if (response.EntityMetadata.ObjectTypeCode != null) _objectTypeCode = response.EntityMetadata.ObjectTypeCode.Value;
                return _objectTypeCode;
            }
        }

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
                try
                {
                    var rows = CrmService.RetrieveMultiple(new FetchExpression(fetchXml));
                    _processes = rows.Entities;
                    return _processes;
                }
                catch
                {
                    var fetchXml2 = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='workflow'>
    <attribute name='name' />
    <attribute name='uniquename' />
    <attribute name='xaml' />
    <filter type='and'>
      <condition attribute='category' operator='eq' value='{fetchData.category /*4*/}'/>
      <condition attribute='statecode' operator='eq' value='{fetchData.statecode /*1*/}'/>
      <condition attribute='primaryentity' operator='eq' value='{fetchData.primaryentity /*4*/}'/>
    </filter>
  </entity>
</fetch>";
                    var rows2 = CrmService.RetrieveMultiple(new FetchExpression(fetchXml2));
                    _processes = rows2.Entities;
                    return _processes;
                }
            }
        }

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
                var response = (RetrieveEntityResponse) CrmService.Execute(request);
                foreach (var attribute in response.EntityMetadata.Attributes)
                {
                    var crmAttribute = new CrmAttribute(attribute, logicalName);
                    _fields.Add(crmAttribute);
                }
                _fields = _fields.OrderBy(row => row.Name).ToList();
                return _fields;
            }
        }

        public string Message { get; private set; } = string.Empty;
        public string Form { get; private set; } = string.Empty;
        public string FormCode { get; private set; } = string.Empty;
        public string FormCodeIntellisense { get; private set; } = string.Empty;
        public string FormCodeIntellisense2 { get; private set; } = string.Empty;
        private string IsValidFormData(IEnumerable<SystemForm> forms)
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
                    if (tab.Name == null)
                        message += $"tab on form has name = GUID. Please edit to correct name and try it again.\r\n";
                    else
                    {
                        if (tab.Name.Contains(" ") ||
                            tab.Name.Contains("{") ||
                            tab.Name.Contains("}"))
                            message += $"tab.Name = {tab.Name} invalid name\r\n";
                    }
                }
                foreach (var tab in tabs)
                {
                    var xdoc2 = XDocument.Parse(tab.InnerText);
                    var sections = from x2 in xdoc2.Descendants("columns").Descendants("column").Descendants("sections").Elements("section")
                        select new
                        {
                            Name = x2.Attribute("name")?.Value
                        };
                    foreach (var section in sections)
                    {
                        if (section.Name != null)
                        {
                            if (section.Name.StartsWith("ref_pan")) continue;
                            if (section.Name.Contains(" ") ||
                                section.Name.Contains("{") ||
                                section.Name.Contains("}"))
                                message += $"tab: {tab.Name} - section: {section.Name} invalid name\r\n";
                        }
                        else
                            message += $"tab: {tab.Name} - has section name = GUID. Please edit to correct name and try it again.\r\n";
                    }
                }
            }

            return message;
        }

        private string GetJsForListFields(IEnumerable<string> list)
        {
            var code = string.Empty;
            var previousName = string.Empty;
            var previousCount = 0;
            foreach (var item in list)
            {
                var crmAttribute = Fields.FirstOrDefault(x => x.LogicalName == item);
                if (crmAttribute == null) continue;
                var name = crmAttribute.SchemaName;
                if (name == previousName)
                {
                    previousCount = previousCount + 1;
                    name = name + "_" + previousCount.ToString();
                }
                else
                {
                    previousName = string.Empty;
                    previousCount = 0;
                }
                code += $"\t\t\t{name}: {{}},\r\n";
                previousName = crmAttribute.SchemaName;
            }
            code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }

        private static string GetSafeName(string name)
        {
            name = name.Replace(" ", "");
            name = name.Replace("'", string.Empty);
            name = name.Replace("-", "_");
            name = name.Replace("(", string.Empty);
            name = name.Replace(")", string.Empty);
            name = name.Replace("/", string.Empty);
            name = name.Replace("%", string.Empty);
            name = name.Replace(",", string.Empty);
            name = name.Replace("$", string.Empty);
            name = name.Replace(".", string.Empty);
            name = name.Replace("{", string.Empty);
            name = name.Replace("}", string.Empty);
            name = name.Replace(":", string.Empty);
            name = name.Replace(";", string.Empty);
            name = name.Replace("&", string.Empty);
            name = name.Replace("=", string.Empty);
            name = name.Replace("+", string.Empty);
            name = name.Replace("-", string.Empty);
            name = name.Replace(".", string.Empty);
            return name;
        }

        private string GetJsFormBody(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var fields = (from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns")
                    .Descendants("column").Descendants("sections").Descendants("section").Descendants("rows")
                    .Descendants("row").Descendants("cell").Descendants("control")
                          select new
                          {
                              FieldName = (string)x.Attribute("datafieldname")
                          }).Distinct();
            var list = (from field in fields where field.FieldName != null select field.FieldName).ToList();
            list.Sort();
            return GetJsForListFields(list);
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
                code += $"\t\t\t{tab.Name}: {{\r\n";
                code += $"\t\t\t\tSection: {{\r\n";
                var xdoc2 = XDocument.Parse(tab.InnerText);
                var sections = from x2 in xdoc2.Descendants("columns").Descendants("column").Descendants("sections")
                        .Elements("section")
                    select new
                    {
                        Name = x2.Attribute("name")?.Value
                    };
                foreach (var section in sections)
                {
                    if (section.Name.StartsWith("ref_pan")) continue;
                    code += $"\t\t\t\t\t{section.Name}: {{}},\r\n";
                }
                code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
                code += $"\t\t\t\t}}\r\n";
                code += $"\t\t\t}},\r\n";
            }

            code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }

        private string GetJsCodeHeader(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var headers = (from x in xdoc.Descendants("header").Descendants("rows").Descendants("row")
                    .Descendants("cell").Descendants("control")
                select x.Attribute("datafieldname")?.Value).ToList();
            headers.Sort();
            var code = GetJsForListFields(headers);
            if (code.EndsWith(",\r\n")) code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            if (code == "\r\n") return string.Empty;
            return code;
        }

        private string GetJsCodeFooter(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var footers = (from x in xdoc.Descendants("footer").Descendants("rows").Descendants("row")
                    .Descendants("cell").Descendants("control")
                select x.Attribute("datafieldname")?.Value).ToList();
            footers.Sort();
            var code = GetJsForListFields(footers);
            if (code.EndsWith(",\r\n")) code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            if (code == "\r\n") return string.Empty;
            return code;
        }

        private string GetJsProcessCode()
        {
            var code = string.Empty;
            if (Processes.Count == 0) return string.Empty;
            foreach (var entity in Processes)
            {
                var xaml = entity.GetAttributeValue<string>("xaml");
                var name = entity.GetAttributeValue<string>("name");
                name = GetSafeName(name);
                code += $"\t\tvar _{name} = {{\r\n";

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
                code += $"\t\t}}\r\n";
                code += $"\t\tdevKit.LoadFields(formContext, _{name}, \"header_process_\");\r\n";
                code += $"\t\tprocess.{name} = _{name};\r\n";
            }

            return code;
        }

        private string GetJsQuickFormCode(string formXml)
        {
            var code = string.Empty;
            var xdoc = XDocument.Parse(formXml);
            var fields = from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns")
                    .Descendants("column").Descendants("sections").Descendants("section").Descendants("rows")
                    .Descendants("row").Descendants("cell").Descendants("control")
                select new
                {
                    QuickForms = x?.Descendants("parameters").Descendants("QuickForms"),
                    id = (string) x?.Attribute("id")
                };
            var quickForms = (from f in fields
                where f.QuickForms.Count() != 0
                select f.id).ToList();
            foreach (var quickForm in quickForms)
                code += $"\t\t\t{quickForm}: {{}},\r\n";
            code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }

        private string GetJsNavigationCode(string formXml)
        {
            var code = string.Empty;
            var xdoc = XDocument.Parse(formXml);
            var navigations = (from x in xdoc.Descendants("Navigation").Descendants("NavBar")
                    .Descendants("NavBarByRelationshipItem")
                select (string) x?.Attribute("Id")).ToList();
            foreach (var navigation in navigations)
                code += $"\t\t\t{navigation}: {{}},\r\n";
            code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }

        private string GetForm(IEnumerable<SystemForm> processForms)
        {
            var code = string.Empty;
            code += $"///<reference path='[[{EntityName}]]' />\r\n";
            foreach (var form in processForms)
            {
                code += $"var form{GetSafeName(form.Name)} = (function () {{\r\n";
                code += $"\tfunction onLoad(executionContext) {{\r\n";
                code += $"\t}}\r\n";
                code += $"\tfunction onSave(executionContext) {{\r\n";
                code += $"\t}}\r\n";
                code += $"\treturn {{\r\n\t\tOnLoad: onLoad,\r\n\t\tOnSave: onSave\r\n\t}};\r\n";
                code += $"}})();\r\n";
            }
            code = code.TrimEnd("\r\n".ToCharArray());
            return code;
        }

        private string GetFormCode(List<SystemForm> processForms, bool isDebug)
        {
            var formCode = string.Empty;
            formCode += $"'use strict';\r\n";
            formCode += $"var {ProjectName};\r\n";
            formCode += $"(function ({ProjectName}) {{\r\n";
            formCode += $"\t'use strict';\r\n";
            var devKit = Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Wizard.data.DevKit.js");
            if (!isDebug)
            {
                devKit = devKit.Replace("else { throw new Error(", "//else { throw new Error(");
            }
            formCode += devKit + "\r\n";
            foreach (var form in processForms)
            {
                if (form.IsQuickCreate) continue;
                formCode += $"\t{ProjectName}.Form{GetSafeName(form.Name)} = function(executionContext, defaultWebResourceName) {{\r\n";
                formCode += $"\t\tvar formContext = null;\r\n";
                formCode += $"\t\tif (executionContext !== undefined) {{\r\n";
                formCode += $"\t\t\tif (executionContext.getFormContext === undefined) {{\r\n";
                formCode += $"\t\t\t\tformContext = executionContext;\r\n";
                formCode += $"\t\t\t}}\r\n";
                formCode += $"\t\t\telse {{\r\n";
                formCode += $"\t\t\t\tformContext = executionContext.getFormContext();\r\n";
                formCode += $"\t\t\t}}\r\n";
                formCode += $"\t\t}}\r\n";
                formCode += $"\t\tvar form = devKit.LoadForm(formContext);\r\n";
                formCode += $"\t\tvar body = {{\r\n";
                formCode += GetJsFormBody(form.FormXml);
                formCode += $"\t\t}};\r\n";
                formCode += $"\t\tdevKit.LoadFields(formContext, body);\r\n";
                formCode += $"\t\tvar tab = {{\r\n";
                formCode += GetJsFormCode(form.FormXml);
                formCode += $"\t\t}};\r\n";
                formCode += $"\t\tdevKit.LoadTabs(formContext, tab);\r\n";
                formCode += $"\t\tbody.Tab = tab;\r\n";
                formCode += $"\t\tform.Body = body;\r\n";
                var codeHeader = GetJsCodeHeader(form.FormXml);
                if (codeHeader.Length > 0)
                {
                    formCode += $"\t\tvar header = {{\r\n";
                    formCode += codeHeader;
                    formCode += $"\t\t}};\r\n";
                    formCode += $"\t\tdevKit.LoadFields(formContext, header, \"header_\");\r\n";
                    formCode += $"\t\tform.Header = header;\r\n";
                }
                var codeFooter = GetJsCodeFooter(form.FormXml);
                if (codeFooter.Length > 0)
                {
                    formCode += $"\t\tvar footer = {{\r\n";
                    formCode += codeFooter;
                    formCode += $"\t\t}};\r\n";
                    formCode += $"\t\tdevKit.LoadFields(formContext, footer, \"footer_\");\r\n";
                    formCode += $"\t\tform.Footer = footer;\r\n";
                }
                var codeProcess = GetJsProcessCode();
                if (codeProcess.Length > 0)
                {
                    formCode += $"\t\tvar process = devKit.LoadProcess(formContext);\r\n";
                    formCode += codeProcess;
                    formCode += $"\t\tform.Process = process;\r\n";
                }
                var codeQuickForm = GetJsQuickFormCode(form.FormXml);
                if (codeQuickForm.Length > 0)
                {
                    formCode += $"\t\tvar quickForm = {{\r\n";
                    formCode += codeQuickForm;
                    formCode += $"\t\t}};\r\n";
                    formCode += $"\t\tdevKit.LoadQuickForms(formContext, quickForm);\r\n";
                    formCode += $"\t\tform.QuickForm = quickForm;\r\n";
                }
                var codeNavigation = GetJsNavigationCode(form.FormXml);
                if (codeNavigation.Length > 0)
                {
                    formCode += $"\t\tvar navigation = {{\r\n";
                    formCode += codeNavigation;
                    formCode += $"\t\t}};\r\n";
                    formCode += $"\t\tdevKit.LoadNavigations(formContext, navigation);\r\n";
                    formCode += $"\t\tform.Navigation = navigation;\r\n";
                }
                formCode += $"\t\tform.Utility = devKit.LoadUtility(defaultWebResourceName);\r\n";
                formCode += JsOptionSetFormCode;
                formCode += $"\t\tform.OptionSet = optionSet;\r\n";
                formCode += $"\t\treturn form;\r\n";
                formCode += $"\t}};\r\n";
            }
            foreach (var form in processForms)
            {
                if (!form.IsQuickCreate) continue;
                formCode += $"\t{ProjectName}.Form{GetSafeName(form.Name)} = function(executionContext, defaultWebResourceName) {{\r\n";
                formCode += $"\t\tvar formContext = null;\r\n";
                formCode += $"\t\tif (executionContext !== undefined)\r\n";
                formCode += $"\t\t{{\r\n";
                formCode += $"\t\t\tif (executionContext.getFormContext === undefined) {{\r\n";
                formCode += $"\t\t\t\tformContext = executionContext;\r\n";
                formCode += $"\t\t\t}}\r\n";
                formCode += $"\t\t\telse {{\r\n";
                formCode += $"\t\t\t\tformContext = executionContext.getFormContext();\r\n";
                formCode += $"\t\t\t}}\r\n";
                formCode += $"\t\t}}\r\n";
                formCode += $"\t\tvar form = devKit.LoadForm(formContext);\r\n";
                formCode += $"\t\tvar tab = {{\r\n";
                formCode += GetJsFormCode(form.FormXml);
                formCode += $"\t\t}}\r\n";
                formCode += $"\t\tdevKit.LoadTabs(formContext, tab);\r\n";
                formCode += $"\t\tform.Tab = tab;\r\n";
                formCode += $"\t\tvar body = {{\r\n";
                var xdoc = XDocument.Parse(form.FormXml);
                var fields = (from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns")
                        .Descendants("column").Descendants("sections").Descendants("section").Descendants("rows")
                        .Descendants("row").Descendants("cell").Descendants("control")
                    select (string) x.Attribute("datafieldname")).ToList();
                fields.Sort();
                formCode += GetJsForListFields(fields);
                formCode = formCode.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
                formCode += $"\t\t}}\r\n";
                formCode += $"\t\tdevKit.LoadFields(formContext, body);\r\n";
                formCode += $"\t\tform.Body = body;\r\n";
                formCode += $"\t\tform.Utility = devKit.LoadUtility(defaultWebResourceName);\r\n";
                formCode += JsOptionSetFormCode;
                formCode += $"\t\tform.OptionSet = optionSet;\r\n";
                formCode += $"\t\treturn form;\r\n";
                formCode += $"\t}}\r\n";
            }
            formCode += $"}})({ProjectName} || ({ProjectName} = {{}}));\r\n";
            var optionSet = Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Wizard.data.OptionSet.js");
            formCode += optionSet;
            if (!isDebug)
            {
                formCode = Uglify.Js(formCode).Code;
                formCode = formCode.Replace("\"", "'");
            }
            return formCode;
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
        private RetrieveEntityResponse _Relationships = null;
        private RetrieveEntityResponse Relationships
        {
            get
            {
                if (_Relationships == null)
                {
                    var requestRelationships = new RetrieveEntityRequest
                    {
                        EntityFilters = EntityFilters.Relationships,
                        LogicalName = EntityName.ToLower()
                    };
                    _Relationships = (RetrieveEntityResponse)CrmService.Execute(requestRelationships);
                }
                return _Relationships;
            }
        }
        private string GetIntellisense(List<SystemForm> processForms, bool isDebugForm, bool isJsWebApi, bool isDebugWebApi)
        {
            if (isJsWebApi)
            {
                foreach (var crmAttribute in Fields)
                {
                    if (crmAttribute.FieldType == AttributeTypeCode.Lookup || crmAttribute.FieldType == AttributeTypeCode.Customer)
                    {
                        crmAttribute.LogicalCollectionName = GetLogicalCollectionName(crmAttribute);
                        crmAttribute.NavigationPropertyName = GetNavigationPropertyName(crmAttribute);
                    }
                }
            }
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

        private string GetIntellisense2(List<SystemForm> processForms, bool isDebugForm, bool isJsWebApi, bool isDebugWebApi)
        {
            if (isJsWebApi)
            {
                foreach (var crmAttribute in Fields)
                {
                    if (crmAttribute.FieldType == AttributeTypeCode.Lookup || crmAttribute.FieldType == AttributeTypeCode.Customer)
                    {
                        crmAttribute.LogicalCollectionName = GetLogicalCollectionName(crmAttribute);
                        crmAttribute.NavigationPropertyName = GetNavigationPropertyName(crmAttribute);
                    }
                }
            }
            var jsIntellisense = new JsIntellisense2(CrmService)
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

        public IEnumerable<string> GetForms()
        {
            return Forms.Select(f => f.Name).ToList();
        }

        public void GeneratorCode(List<string> checkedItems, bool isDebugForm, bool isJsWebApi, bool isDebugWebApi)
        {
            var processForms = new List<SystemForm>();
            foreach (var form in Forms)
                if (checkedItems.Contains($"{form.Name}"))
                    processForms.Add(form);
            var message = IsValidFormData(processForms);
            if (message.Length > 0)
            {
                Message = message;
                return;
            }

            Form = GetForm(processForms);
            FormCode = GetFormCode(processForms, isDebugForm);
            FormCodeIntellisense = GetIntellisense(processForms, isDebugForm, isJsWebApi, isDebugWebApi);
            FormCodeIntellisense2 = GetIntellisense2(processForms, isDebugForm, isJsWebApi, isDebugWebApi);
        }
    }
}
