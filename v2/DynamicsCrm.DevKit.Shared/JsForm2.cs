using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text.RegularExpressions;
using System.Xml.Linq;
using DynamicsCrm.DevKit.Shared.Helper;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using NUglify;

namespace DynamicsCrm.DevKit.Shared
{
    public class JsForm2
    {
        private List<CrmAttribute> _fields;
        private List<SystemForm> _forms;
        private int _objectTypeCode = -1;
        private DataCollection<Entity> _processes;

        public JsForm2(CrmServiceClient crmService, string projectName, string entityName)
        {
            CrmService = crmService;
            EntityName = entityName;
            ProjectName = projectName;
        }
        private CrmServiceClient CrmService { get; }
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
        public string Form { get; private set; } = string.Empty;
        public string FormCode { get; private set; } = string.Empty;
        public string FormCodeTypeScriptDeclaration2 { get; private set; } = string.Empty;
        private string GetJsForListFields(IEnumerable<string> list)
        {
            var code = string.Empty;
            var previousName = string.Empty;
            var previousCount = 0;
            var listExist = new List<string>();
            foreach (var item in list)
            {
                if (item == null) continue;
                var crmAttribute = Fields.FirstOrDefault(x => x.LogicalName == item);
                if (crmAttribute == null)
                {
                    if (listExist.Contains(item)) continue; else listExist.Add(item);
                    code += $"\t\t\t{item}: {{}},\r\n";
                }
                else
                {
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
            }
            code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }
        private string GetJsFormBody(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var fields = (from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns")
                    .Descendants("column").Descendants("sections").Descendants("section").Descendants("rows")
                    .Descendants("row").Descendants("cell").Descendants("control")
                          select new
                          {
                              FieldName = x?.Attribute("datafieldname") ?? x?.Attribute("id")
                          }).Distinct();
            var list = (from field in fields where field.FieldName != null select (string)field.FieldName).ToList<string>();
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
            tabs = tabs.OrderBy(x => x.Name).ToList();
            var existTabs = new List<string>();
            foreach (var tab in tabs)
            {
                if (Utility.SafeName(tab.Name).Length == 0) continue;
                if (existTabs.Contains(Utility.SafeName(tab.Name))) continue; else existTabs.Add(Utility.SafeName(tab.Name));
                code += $"\t\t\t{Utility.SafeName(tab.Name)}: {{\r\n";
                code += $"\t\t\t\tSection: {{\r\n";
                var xdoc2 = XDocument.Parse(tab.InnerText);
                var sections = from x2 in xdoc2
                               .Descendants("columns")
                               .Descendants("column")
                               .Descendants("sections")
                               .Elements("section")
                    select new
                    {
                        Name = x2?.Attribute("name")?.Value
                    };
                sections = sections.OrderBy(x => x.Name).ToList();
                var existSections = new List<string>();
                foreach (var section in sections)
                {
                    if (section == null) continue;
                    if (section.Name == null) continue;
                    if (section.Name.StartsWith("ref_pan")) continue;
                    if (Utility.SafeName(section.Name).Length == 0) continue;
                    if (existSections.Contains(Utility.SafeName(section.Name))) continue; else existSections.Add(Utility.SafeName(section.Name));
                    code += $"\t\t\t\t\t{Utility.SafeName(section.Name)}: {{}},\r\n";
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
            var processed = Processes.OrderBy(x => x.LogicalName);
            foreach (var entity in processed)
            {
                var xaml = entity.GetAttributeValue<string>("xaml");
                var name = entity.GetAttributeValue<string>("name");
                name = Utility.SafeName(name);
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

        private void GetFormXml(string formId, out string formXml, out string entityLogicalName)
        {
            formXml = string.Empty;
            entityLogicalName = string.Empty;
            var fetchData = new
            {
                formid = formId
            };
            var fetchXml = $@"
<fetch>
  <entity name='systemform'>
    <attribute name='formxml' />
    <attribute name='objecttypecode' />
    <filter>
      <condition attribute='formid' operator='eq' value='{fetchData.formid}'/>
    </filter>
  </entity>
</fetch>";
            var rows = CrmService.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return;
            var entity = rows.Entities[0];
            formXml = entity.GetAttributeValue<string>("formxml");
            entityLogicalName = entity.GetAttributeValue<string>("objecttypecode");
        }

        private string GetBodyOfQuickView(string formXml, string id)
        {
            var code = string.Empty;
            var xdoc = XDocument.Parse(formXml);
            var node = from x in xdoc
                          .Descendants("tabs")
                          .Descendants("tab")
                          .Descendants("columns")
                          .Descendants("column")
                          .Descendants("sections")
                          .Descendants("section")
                          .Descendants("rows")
                          .Descendants("row")
                          .Descendants("cell")
                          .Elements("control")
                       where x?.Attribute("id")?.Value == id &&
                             x?.Attribute("classid")?.Value == $"{{{ControlClassId.QUICK_VIEW_FORM}}}"
                       select x;
            var node2 = (from x in node
                            .Descendants("parameters")
                            .Descendants("QuickForms")
                         select x.Value
                         ).FirstOrDefault();
            if (node2 == null) return string.Empty;
            var xdoc2 = XDocument.Parse(node2);
            var formId = (from x in xdoc2.Descendants("QuickFormId") select x.Value).FirstOrDefault();
            if (formId == null) return string.Empty;
            var quickViewFormXml = string.Empty;
            var quickViewEntityLogicalName = string.Empty;
            GetFormXml(formId, out quickViewFormXml, out quickViewEntityLogicalName);
            if (quickViewFormXml == string.Empty) return string.Empty;
            var xdoc3 = XDocument.Parse(quickViewFormXml);
            var fields = (from x in xdoc3
                          .Descendants("tabs")
                          .Descendants("tab")
                          .Descendants("columns")
                          .Descendants("column")
                          .Descendants("sections")
                          .Descendants("section")
                          .Descendants("rows")
                          .Descendants("row")
                          .Descendants("cell")
                          .Descendants("control")
                          select new IdName
                          {
                              Name = x?.Attribute("datafieldname")?.Value,
                              Id = x?.Attribute("id").Value,
                              ClassId = Utility.TrimGuid(x?.Attribute("classid")?.Value?.ToUpper()),
                              ControlId = x?.Attribute("uniqueid")?.Value
                          }).Distinct().ToList();
            fields = fields.OrderBy(x => x.Name).ToList();
            foreach (var field in fields)
            {
                if (field.ClassId == ControlClassId.SUB_GRID || field.ClassId == ControlClassId.SUB_GRID_PANEL || field.ClassId == ControlClassId.TIMER) continue;
                var request = new RetrieveAttributeRequest
                {
                    EntityLogicalName = quickViewEntityLogicalName,
                    LogicalName = field.Id,
                    RetrieveAsIfPublished = false
                };
                var response = (RetrieveAttributeResponse)CrmService.Execute(request);
                code += $"\t\t\t\t{response.AttributeMetadata.SchemaName}: {{}},\r\n";
            }
            code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
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

            quickForms.Sort();
            foreach (var quickForm in quickForms)
            {
                //code += $"\t\t\t{quickForm}: {{}},\r\n";
                code += $"\t\t\t{quickForm}: {{\r\n";
                code += GetBodyOfQuickView(formXml, quickForm);
                code += $"\t\t\t}},\r\n";
            }
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
            navigations.Sort();
            foreach (var navigation in navigations)
                code += $"\t\t\t{navigation}: {{}},\r\n";
            code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }
        private string GetForm(IEnumerable<SystemForm> processForms)
        {
            var code = string.Empty;
            code += $"//@ts-check\r\n";
            code += $"///<reference path=\"{EntityName}.d.ts\" />\r\n";
            code += "\"use strict\";\r\n";
            foreach (var form in processForms)
            {
                var type = $"{ProjectName}.Form{Utility.SafeName(form.Name)}";
                code += $"var form{Utility.SafeName(form.Name)} = (function () {{\r\n";
                code += $"\t\"use strict\";\r\n";
                code += $"\t/** @type {type} */\r\n";
                code += $"\tvar form = null;\r\n";
                code += $"\tasync function onLoad(executionContext) {{\r\n";
                code += $"\t\tform = new {type}(executionContext);\r\n";
                code += $"\r\n";
                code += $"\t}}\r\n";
                code += $"\tasync function onSave(executionContext) {{\r\n";
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
            formCode += $"var {ProjectName};\r\n";
            formCode += $"(function ({ProjectName}) {{\r\n";
            formCode += $"\t'use strict';\r\n";
            //FORM
            foreach (var form in processForms)
            {
                if (form.IsQuickCreate) continue;
                form.Name = FormHelper.GetFormName(form.Name, EntityName);
                formCode += $"\t{ProjectName}.Form{Utility.SafeName(form.Name)} = function(executionContext, defaultWebResourceName) {{\r\n";
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
                var codeGrid = GetJsGridCode(form.FormXml);
                if (codeGrid.Length > 0)
                {
                    formCode += $"\t\tvar grid = {{\r\n";
                    formCode += codeGrid;
                    formCode += $"\t\t}};\r\n";
                    formCode += $"\t\tdevKit.LoadGrids(formContext, grid);\r\n";
                    formCode += $"\t\tform.Grid = grid;\r\n";
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
                formCode += $"\t\tform.ExecutionContext = devKit.LoadExecutionContext(executionContext);\r\n";
                formCode += $"\t\tdevKit.LoadOthers(formContext, form, defaultWebResourceName);\r\n";
                //formCode += JsOptionSetFormCode;
                //formCode += $"\t\tform.OptionSet = optionSet;\r\n";
                formCode += $"\t\treturn form;\r\n";
                formCode += $"\t}};\r\n";
            }
            //QUICK-CREATE
            foreach (var form in processForms)
            {
                if (!form.IsQuickCreate) continue;
                form.Name = FormHelper.GetFormName(form.Name, EntityName);
                formCode += $"\t{ProjectName}.Form{Utility.SafeName(form.Name)} = function(executionContext, defaultWebResourceName) {{\r\n";
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
                formCode += $"\t\tvar tab = {{\r\n";
                formCode += GetJsFormCode(form.FormXml);
                formCode += $"\t\t}}\r\n";
                formCode += $"\t\tdevKit.LoadTabs(formContext, tab);\r\n";
                formCode += $"\t\tbody.Tab = tab;\r\n";
                formCode += $"\t\tform.Body = body;\r\n";
                formCode += $"\t\tform.Utility = devKit.LoadUtility(defaultWebResourceName);\r\n";
                //formCode += JsOptionSetFormCode;
                //formCode += $"\t\tform.OptionSet = optionSet;\r\n";
                formCode += $"\t\treturn form;\r\n";
                formCode += $"\t}}\r\n";
            }
            formCode += $"}})({ProjectName} || ({ProjectName} = {{}}));\r\n";

            var code = string.Empty;
            code += $"'use strict';\r\n";
            code += $"/** @namespace {ProjectName} */\r\n";
            var formCodeMin = formCode;
            if (!isDebug)
            {
                formCode = formCode.Replace("else { throw new Error(", "//else { throw new Error(");
                formCodeMin = Uglify.Js(formCode).Code;
                formCodeMin = formCodeMin.Replace("\"", "'");
                formCodeMin = formCodeMin.Replace("'*'", "\"*\"");
            }
            code += formCodeMin;
            if (!isDebug) code += "\r\n";
            var optionSet = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Resources.OptionSet.js");
            optionSet = optionSet.Replace("[[EntityOptionSet]]", OptionSet_For_d_ts);
            var optionSetMin = optionSet;
            if (!isDebug)
            {
                optionSetMin = Uglify.Js(optionSet).Code;
            }
            code += $"/** @namespace OptionSet */\r\n";
            code += optionSetMin;
            return code;
        }

        private class IdName
        {
            public string Id { get; set; }
            public string Name { get; set; }
            public string ClassId { get; set; }
            public string ControlId { get; set; }
        }

        private string GetARealClassId(string formXml, string classId, string controlId)
        {
            if (controlId == null || controlId.Length == 0) return classId;
            var xdoc = XDocument.Parse(formXml);
            var rows = from x in xdoc
                       .Descendants("controlDescriptions")
                       .Elements("controlDescription")
                       where x?.Attribute("forControl")?.Value == controlId
                       select x;
            if (rows == null) return classId;
            var rows2 = (from x in rows.Elements("customControl")
                         where x?.Attribute("id")?.Value != null
                         select new
                         {
                             id = x?.Attribute("id")?.Value?.ToString()
                         }).ToList();
            if (rows2.Count() == 0) return classId;
            foreach (var row in rows2)
            {
                if (Guid.TryParse(row.id, out var guid))
                {
                    return guid.ToString().ToUpper();
                }
            }
            return classId;
        }

        private string GetJsGridCode(string formXml)
        {
            var code = string.Empty;
            var xdoc = XDocument.Parse(formXml);
            var fields = (from x in xdoc
                          .Descendants("tabs")
                          .Descendants("tab")
                          .Descendants("columns")
                          .Descendants("column")
                          .Descendants("sections")
                          .Descendants("section")
                          .Descendants("rows")
                          .Descendants("row")
                          .Descendants("cell")
                          .Descendants("control")
                          select new IdName
                          {
                              Name = x?.Attribute("datafieldname")?.Value,
                              Id = x?.Attribute("id").Value,
                              ClassId = Utility.TrimGuid(x?.Attribute("classid")?.Value?.ToUpper()),
                              ControlId = x?.Attribute("uniqueid")?.Value
                          }).Distinct().ToList();
            fields = fields.OrderBy(x => x.Name).ToList();
            var temp = string.Empty;
            foreach (var field in fields)
            {
                var classId = GetARealClassId(formXml, field.ClassId, field.ControlId);
                if (classId != ControlClassId.SUB_GRID && classId != ControlClassId.SUB_GRID_PANEL) continue;
                code += $"\t\t\t{field.Id}: {{}},\r\n";
            }
            return code;
        }

        private string OptionSet_For_d_ts
        {
            get
            {
                var _d_ts = string.Empty;
                _d_ts += $"\tOptionSet.{EntityName} = {{\r\n";
                foreach (var crmAttribute in Fields)
                {
                    if (!crmAttribute.IsValidForRead) continue;
                    if (crmAttribute.FieldType != AttributeTypeCode.Picklist &&
                        crmAttribute.FieldType != AttributeTypeCode.State &&
                        crmAttribute.FieldType != AttributeTypeCode.Status &&
                        !crmAttribute.IsMultiSelectPicklist) continue;
                    _d_ts += $"\t\t{crmAttribute.SchemaName} : {{\r\n";
                    NameValueCollection values = UpdateOptionSetValues(crmAttribute.OptionSetValues);
                    foreach (string nvc in values)
                        _d_ts += $"\t\t\t{nvc}: {values[nvc]},\r\n";
                    _d_ts = _d_ts.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
                    _d_ts += $"\t\t}},\r\n";
                }
                var optionSet = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Resources.OptionSetWebApi.js");
                _d_ts += optionSet;
                _d_ts += $"\r\n\t}};";
                return _d_ts;
            }
        }
        private NameValueCollection UpdateOptionSetValues(NameValueCollection optionSetValues)
        {
            var values = new NameValueCollection();
            foreach (string key in optionSetValues.Keys)
            {
                if (optionSetValues.GetValues(key).Length > 1)
                {
                    for (var i = 0; i < optionSetValues.GetValues(key).Length; i++)
                    {
                        var value = optionSetValues.GetValues(key)[i];
                        values.Add(key + "_" + value, value);
                    }
                }
                else
                    values.Add(key, optionSetValues[key]);
            }
            var newValues = new NameValueCollection();
            var sortedKeys = values.AllKeys;
            Array.Sort(sortedKeys);
            foreach (var key in sortedKeys)
                newValues.Add(key, values[key]);
            return newValues;
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
        private string GetTypeScriptDeclaration2(List<SystemForm> processForms, bool isDebugForm, bool isJsWebApi, bool isDebugWebApi)
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
            var jsIntellisense = new JsTypeScriptDeclaration2(CrmService)
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
            {
                if (checkedItems.Any(x => form.Name.ToLower() == x.ToLower()))
                {
                    processForms.Add(form);
                    checkedItems.RemoveAll(x => x.Equals(form.Name, StringComparison.OrdinalIgnoreCase));
                }
            }
            foreach (var form in Forms)
            {
                if (checkedItems.Any(x => form.Name.ToLower().EndsWith(x.ToLower())))
                    processForms.Add(form);
            }
            Form = GetForm(processForms);
            FormCode = GetFormCode(processForms, isDebugForm);
            FormCodeTypeScriptDeclaration2 = GetTypeScriptDeclaration2(processForms, isDebugForm, isJsWebApi, isDebugWebApi);
        }
    }
}
