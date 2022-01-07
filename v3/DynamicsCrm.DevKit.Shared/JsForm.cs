using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Shared
{
    public static class JsForm
    {
        private class IdName
        {
            public string Id { get; set; }
            public string Name { get; set; }
            public string ClassId { get; set; }
            public string ControlId { get; set; }
        }


        private const string NEW_LINE = "\r\n";
        private const string TAB = "\t";
        private static CrmServiceClient CrmServiceClient { get; set; }
        private static EntityMetadata EntityMetadata { get; set; }
        private static string RootNamespace { get; set; }
        private static CommentTypeScriptDeclaration Comment { get; set; }

        public static string GetCode(CrmServiceClient crmServiceClient, EntityMetadata entityMetadata, string rootNamespace, CommentTypeScriptDeclaration comment)
        {
            CrmServiceClient = crmServiceClient;
            EntityMetadata = entityMetadata;
            RootNamespace = rootNamespace;
            Comment = comment;
            var forms = GetForms();
            var code = string.Empty;
            var @namespace = Utility.GetNameSpace(RootNamespace);
            var logicalName = entityMetadata.LogicalName;

            code += $"'use strict';{NEW_LINE}";
            code += $"/** @namespace {@namespace} */{NEW_LINE}";
            code += $"var {@namespace};{NEW_LINE}";
            code += $"(function ({@namespace}) {{{NEW_LINE}";
            code += $"{TAB}'use strict';{NEW_LINE}";
            foreach(var form in forms.Where(x => !x.IsQuickCreate))
                code += GetMainFormCode(form, @namespace);
            foreach (var form in forms.Where(x => x.IsQuickCreate))
                code += GetQuickCreateFormCode(form, @namespace);
            code += $"}})({@namespace} || ({@namespace} = {{}}));{NEW_LINE}";
            code += $"{Utility.GeneratorOptionSet(EntityMetadata)}";
            return code;
        }

        private static string GetQuickCreateFormCode(SystemForm form, string @namespace)
        {
            var code = string.Empty;
            var formName = Utility.GetFormName(form.Name, EntityMetadata.SchemaName);
            code += $"\t{@namespace}.Form{Utility.SafeIdentifier(formName)} = function(executionContext, defaultWebResourceName) {{\r\n";
            code += $"\t\tvar formContext = null;\r\n";
            code += $"\t\tif (executionContext !== undefined)\r\n";
            code += $"\t\t{{\r\n";
            code += $"\t\t\tif (executionContext.getFormContext === undefined) {{\r\n";
            code += $"\t\t\t\tformContext = executionContext;\r\n";
            code += $"\t\t\t}}\r\n";
            code += $"\t\t\telse {{\r\n";
            code += $"\t\t\t\tformContext = executionContext.getFormContext();\r\n";
            code += $"\t\t\t}}\r\n";
            code += $"\t\t}}\r\n";
            code += $"\t\tvar form = devKit.LoadForm(formContext);\r\n";
            code += $"{TAB}{TAB}var body = {{{NEW_LINE}";
            code += GetJsQuickViewCodeBody(form.FormXml);
            code += $"{TAB}{TAB}}};{NEW_LINE}";
            code += $"{TAB}{TAB}devKit.LoadFields(formContext, body);{NEW_LINE}";
            code += $"{TAB}{TAB}var tab = {{{NEW_LINE}";
            code += GetJsCodeTabs(form.FormXml);
            code += $"{TAB}{TAB}}};{NEW_LINE}";
            code += $"{TAB}{TAB}devKit.LoadTabs(formContext, tab);{NEW_LINE}";
            code += $"{TAB}{TAB}body.Tab = tab;{NEW_LINE}";
            code += $"{TAB}{TAB}form.Body = body;{NEW_LINE}";
            code += $"\t\tform.Utility = devKit.LoadUtility(defaultWebResourceName);\r\n";
            code += $"\t\tform.ExecutionContext = devKit.LoadExecutionContext(executionContext);\r\n";
            code += $"\t\tdevKit.LoadOthers(formContext, form, defaultWebResourceName);\r\n";
            code += $"\t\treturn form;\r\n";
            code += $"\t}};\r\n";
            return code;
        }

        private static string GetMainFormCode(SystemForm form, string @namespace)
        {
            var code = string.Empty;
            var formName = Utility.GetFormName(form.Name, EntityMetadata.SchemaName);
            code += $"{TAB}{@namespace}.Form{Utility.SafeIdentifier(formName)} = function(executionContext, defaultWebResourceName) {{{NEW_LINE}";
            code += $"{TAB}{TAB}var formContext = null;{NEW_LINE}";
            code += $"{TAB}{TAB}if (executionContext !== undefined) {{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (executionContext.getFormContext === undefined) {{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}formContext = executionContext;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}else {{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}formContext = executionContext.getFormContext();{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}var form = devKit.LoadForm(formContext);{NEW_LINE}";
            code += $"{TAB}{TAB}var body = {{{NEW_LINE}";
            code += GetJsCodeBody(form.FormXml);
            code += $"{TAB}{TAB}}};{NEW_LINE}";
            code += $"{TAB}{TAB}devKit.LoadFields(formContext, body);{NEW_LINE}";
            code += $"{TAB}{TAB}var tab = {{{NEW_LINE}";
            code += GetJsCodeTabs(form.FormXml);
            code += $"{TAB}{TAB}}};{NEW_LINE}";
            code += $"{TAB}{TAB}devKit.LoadTabs(formContext, tab);{NEW_LINE}";
            code += $"{TAB}{TAB}body.Tab = tab;{NEW_LINE}";
            code += $"{TAB}{TAB}form.Body = body;{NEW_LINE}";
            var codeHeader = GetJsCodeHeader(form.FormXml);
            if (codeHeader.Length > 0)
            {
                code += $"\t\tvar header = {{\r\n";
                code += codeHeader;
                code += $"\t\t}};\r\n";
                code += $"\t\tdevKit.LoadFields(formContext, header, \"header_\");\r\n";
                code += $"\t\tform.Header = header;\r\n";
            }
            var codeFooter = GetJsCodeFooter(form.FormXml);
            if (codeFooter.Length > 0)
            {
                code += $"\t\tvar footer = {{\r\n";
                code += codeFooter;
                code += $"\t\t}};\r\n";
                code += $"\t\tdevKit.LoadFields(formContext, footer, \"footer_\");\r\n";
                code += $"\t\tform.Footer = footer;\r\n";
            }
            code += $"\t\tvar process = devKit.LoadProcess(formContext);\r\n";
            var codeProcess = GetJsProcessCode();
            if (codeProcess.Length > 0)
                code += codeProcess;
            code += $"\t\tform.Process = process;\r\n";
            var codeQuickForm = GetJsQuickFormCode(form.FormXml);
            if (codeQuickForm.Length > 0)
            {
                code += $"\t\tvar quickForm = {{\r\n";
                code += codeQuickForm;
                code += $"\t\t}};\r\n";
                code += $"\t\tdevKit.LoadQuickForms(formContext, quickForm);\r\n";
                code += $"\t\tform.QuickForm = quickForm;\r\n";
            }
            var codeGrid = GetJsGridCode(form.FormXml);
            if (codeGrid.Length > 0)
            {
                code += $"\t\tvar grid = {{\r\n";
                code += codeGrid;
                code += $"\t\t}};\r\n";
                code += $"\t\tdevKit.LoadGrids(formContext, grid);\r\n";
                code += $"\t\tform.Grid = grid;\r\n";
            }
            var codeNavigation = GetJsNavigationCode(form.FormXml);
            if (codeNavigation.Length > 0)
            {
                code += $"\t\tvar navigation = {{\r\n";
                code += codeNavigation;
                code += $"\t\t}};\r\n";
                code += $"\t\tdevKit.LoadNavigations(formContext, navigation);\r\n";
                code += $"\t\tform.Navigation = navigation;\r\n";
            }
            code += $"\t\tform.Utility = devKit.LoadUtility(defaultWebResourceName);\r\n";
            code += $"\t\tform.ExecutionContext = devKit.LoadExecutionContext(executionContext);\r\n";
            code += $"\t\tdevKit.LoadOthers(formContext, form, defaultWebResourceName);\r\n";
            code += $"\t\treturn form;\r\n";
            code += $"\t}};\r\n";
            return code;
        }

        private static string GetJsQuickFormCode(string formXml)
        {
            var code = string.Empty;
            var xdoc = XDocument.Parse(formXml);
            var fields = from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns")
                    .Descendants("column").Descendants("sections").Descendants("section").Descendants("rows")
                    .Descendants("row").Descendants("cell").Descendants("control")
                         select new
                         {
                             QuickForms = x?.Descendants("parameters").Descendants("QuickForms"),
                             id = (string)x?.Attribute("id")
                         };
            var quickForms = (from f in fields
                              where f.QuickForms.Count() != 0
                              select f.id).ToList();

            quickForms.Sort();
            foreach (var quickForm in quickForms)
            {
                code += $"\t\t\t{quickForm}: {{\r\n";
                code += GetBodyOfQuickView(formXml, quickForm);
                code += $"\t\t\t}},\r\n";
            }
            code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }
        private static string GetBodyOfQuickView(string formXml, string id)
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
            XrmHelper.EntitiesMetadata.AddIfNotExist(CrmServiceClient, quickViewEntityLogicalName);
            var quickViewMetadata = XrmHelper.EntitiesMetadata.Where(x => x.LogicalName == quickViewEntityLogicalName).FirstOrDefault();
            if (quickViewMetadata == null) return String.Empty;
            foreach (var field in fields)
            {
                var fieldAttribute = quickViewMetadata.Attributes.Where(x => x.LogicalName == field.Id).FirstOrDefault();
                if (fieldAttribute != null)
                {
                    code += $"\t\t\t\t{fieldAttribute.SchemaName}: {{}},\r\n";
                }
            }
            code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }

        private static void GetFormXml(string formId, out string formXml, out string entityLogicalName)
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
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return;
            var entity = rows.Entities[0];
            formXml = entity.GetAttributeValue<string>("formxml");
            entityLogicalName = entity.GetAttributeValue<string>("objecttypecode");
        }

        private static string GetARealClassId(string formXml, string classId, string controlId)
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

        private static string GetJsGridCode(string formXml)
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

        private static string GetJsNavigationCode(string formXml)
        {
            var code = string.Empty;
            var xdoc = XDocument.Parse(formXml);
            var navigations = (from x in xdoc.Descendants("Navigation").Descendants("NavBar")
                    .Descendants("NavBarByRelationshipItem")
                               select (string)x?.Attribute("Id")).ToList();
            navigations.Sort();
            foreach (var navigation in navigations)
                code += $"\t\t\t{navigation}: {{}},\r\n";
            code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }

        private static string GetJsProcessCode()
        {
            var code = string.Empty;
            var processes = GetProcess();

            if (processes.Count == 0) return string.Empty;
            var processed = processes.OrderBy(x => x.LogicalName);
            foreach (var entity in processed)
            {
                var xaml = entity.GetAttributeValue<string>("xaml");
                var name = entity.GetAttributeValue<string>("name");
                name = Utility.SafeIdentifier(name);
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

        private static DataCollection<Entity> GetProcess()
        {
            var fetchData = new
            {
                category = "4",
                statecode = "1",
                primaryentity = EntityMetadata.ObjectTypeCode,
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
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            return rows.Entities;
        }

        private static string GetJsForListFields(IEnumerable<string> list)
        {
            var code = string.Empty;
            var previousName = string.Empty;
            var previousCount = 0;
            var listExist = new List<string>();
            foreach (var item in list)
            {
                if (item == null) continue;
                var crmAttribute = EntityMetadata.Attributes.FirstOrDefault(x => x.LogicalName == item);
                if (crmAttribute == null)
                {
                    if (listExist.Contains(item)) continue; else listExist.Add(item);
                    code += $"{TAB}{TAB}{TAB}{item}: {{}},{NEW_LINE}";
                }
                else
                {
                    var name = crmAttribute.SchemaName;
                    if (name == previousName)
                    {
                        previousCount++;
                        name = name + "_" + previousCount.ToString();
                    }
                    else
                    {
                        previousName = string.Empty;
                        previousCount = 0;
                    }
                    code += $"{TAB}{TAB}{TAB}{name}: {{}},{NEW_LINE}";
                    previousName = crmAttribute.SchemaName;
                }
            }
            code = $"{code.TrimEnd($",{NEW_LINE}".ToCharArray())}{NEW_LINE}";
            return code;
        }
        private static string GetJsCodeHeader(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var headers = (from x in xdoc.Descendants("header").Descendants("rows").Descendants("row")
                    .Descendants("cell").Descendants("control")
                           select x.Attribute("datafieldname")?.Value).ToList();
            headers.Sort();
            var code = GetJsForListFields(headers);
            code = $"{code.TrimEnd($",{NEW_LINE}".ToCharArray())}{NEW_LINE}";
            if (code == NEW_LINE) return string.Empty;
            return code;
        }

        private static string GetJsCodeFooter(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var footers = (from x in xdoc.Descendants("footer").Descendants("rows").Descendants("row")
                    .Descendants("cell").Descendants("control")
                           select x.Attribute("datafieldname")?.Value).ToList();
            footers.Sort();
            var code = GetJsForListFields(footers);
            code = $"{code.TrimEnd($",{NEW_LINE}".ToCharArray())}{NEW_LINE}";
            if (code == NEW_LINE) return string.Empty;
            return code;
        }

        private static string GetJsCodeTabs(string formXml)
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
                if (Utility.SafeIdentifier(tab.Name).Length == 0) continue;
                if (existTabs.Contains(Utility.SafeIdentifier(tab.Name))) continue; else existTabs.Add(Utility.SafeIdentifier(tab.Name));
                code += $"\t\t\t{Utility.SafeIdentifier(tab.Name)}: {{\r\n";
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
                    if (Utility.SafeIdentifier(section.Name).Length == 0) continue;
                    if (existSections.Contains(Utility.SafeIdentifier(section.Name))) continue; else existSections.Add(Utility.SafeIdentifier(section.Name));
                    code += $"\t\t\t\t\t{Utility.SafeIdentifier(section.Name)}: {{}},\r\n";
                }
                code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
                code += $"\t\t\t\t}}\r\n";
                code += $"\t\t\t}},\r\n";
            }
            code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }

        private static string GetJsCodeBody(string formXml)
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

        private static string GetJsQuickViewCodeBody(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var fields = (from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns")
                    .Descendants("column").Descendants("sections").Descendants("section").Descendants("rows")
                    .Descendants("row").Descendants("cell").Descendants("control")
                          select (string)x.Attribute("datafieldname")).ToList();
            fields.Sort();
            return GetJsForListFields(fields);
        }

        private static List<SystemForm> GetForms()
        {
            var fetchData = new
            {
                formactivationstate = "1",
                objecttypecode = EntityMetadata.ObjectTypeCode ?? -1,
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
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            var forms = rows.Entities.Select(x => new SystemForm
            {
                Name = x.GetAttributeValue<string>("name"),
                Description = x.GetAttributeValue<string>("description"),
                FormXml = x.GetAttributeValue<string>("formxml"),
                IsQuickCreate = x.GetAttributeValue<OptionSetValue>("type").Value == 7
            });
            forms = forms.GroupBy(x => x.Name).Where(g => g.Count() == 1).Select(g => g.First()).OrderBy(x => x.Name);
            forms = forms.Where(x => Comment.JsForm.Any(y => x.Name.ToLower().EndsWith(y.ToLower())));
            return forms.ToList();
        }

    }
}
