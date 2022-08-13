using DynamicsCrm.DevKit.Shared.Extensions;
using DynamicsCrm.DevKit.Shared.Helper;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Shared
{
    public static class JsForm3
    {
        private const string NEW_LINE = "\r\n";
        private const string TAB = "\t";
        private static CrmServiceClient CrmServiceClient { get; set; }
        private static EntityMetadata EntityMetadata { get; set; }
        private static string RootNamespace { get; set; }
        private static CommentTypeScriptDeclaration Comment { get; set; }

        private static List<string> FormNames = new List<string>();

        public static string GetCode(CrmServiceClient crmServiceClient, EntityMetadata entityMetadata, string rootNamespace, CommentTypeScriptDeclaration comment, out string dts)
        {
            CrmServiceClient = crmServiceClient;
            EntityMetadata = entityMetadata;
            RootNamespace = rootNamespace;
            Comment = comment;
            var forms = XrmHelper.GetEntityForms(crmServiceClient, entityMetadata.LogicalName);
            if (!forms.Any())
            {
                comment.UseForm = false;
                dts = JsTypeScriptDeclaration.GetCode(crmServiceClient, entityMetadata, rootNamespace, comment);
                return String.Empty;
            }
            var code = string.Empty;
            var @namespace = Utility.GetNameSpace(RootNamespace);
            var logicalName = entityMetadata.LogicalName;

            code += $"'use strict';{NEW_LINE}";
            code += $"/** @namespace {@namespace} */{NEW_LINE}";
            code += $"var {@namespace};{NEW_LINE}";
            code += $"(function ({@namespace}) {{{NEW_LINE}";
            code += $"{TAB}'use strict';{NEW_LINE}";
            foreach (var form in forms.Where(x => !x.IsQuickCreate))
                code += GetMainFormCode(form, @namespace);
            foreach (var form in forms.Where(x => x.IsQuickCreate))
                code += GetQuickCreateFormCode(form, @namespace);
            code += $"}})({@namespace} || ({@namespace} = {{}}));{NEW_LINE}";
            code += $"{Utility.GeneratorOptionSet(EntityMetadata)}";
            if (comment.WebApiVersion == "2")
                dts = JsTypeScriptDeclaration2.GetCode(crmServiceClient, entityMetadata, rootNamespace, comment);
            else
                dts = JsTypeScriptDeclaration.GetCode(crmServiceClient, entityMetadata, rootNamespace, comment);
            return code;
        }

        private static string GetQuickCreateFormCode(SystemForm form, string @namespace)
        {
            var code = string.Empty;
            var formName = Utility.GetFormName(form.Name, EntityMetadata.SchemaName);
            formName = GetUnquieFormName(formName);
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
            formName = GetUnquieFormName(formName);
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
            var codeProcess = GetJsProcessCode();
            code += $"\t\tvar process = devKit.LoadProcess(formContext);\r\n";
            if (codeProcess.Length > 0)
            {
                code += codeProcess;
            }
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
            if (quickForms.Count == 0) return string.Empty;
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
            //<QuickFormIds><QuickFormId entityname="contact">29DE27BC-A257-4F29-99CF-BAB4A84E688F</QuickFormId></QuickFormIds>
            var quickViewXml = (from x in xdoc2.Descendants("QuickFormId") select new { formId = x.Value, entityLogicalName = x?.Attribute("entityname")?.Value }).FirstOrDefault();
            if (quickViewXml == null) return string.Empty;
            var quickViewFormXml = string.Empty;
            //var quickViewEntityLogicalName = string.Empty;
            GetFormXml(quickViewXml.formId, quickViewXml.entityLogicalName, out quickViewFormXml);
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
            XrmHelper.EntitiesMetadata.AddIfNotExist(CrmServiceClient, quickViewXml.entityLogicalName);
            var quickViewMetadata = XrmHelper.EntitiesMetadata.Where(x => x.LogicalName == quickViewXml.entityLogicalName).FirstOrDefault();
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

        private static void GetFormXml(string formId, string entityLogicalName, out string formXml)
        {
            formXml = string.Empty;
            XrmHelper.EntitiesFormXml.AddIfNotExist(CrmServiceClient, entityLogicalName);
            var form = XrmHelper.EntitiesFormXml.FirstOrDefault(x => x.FormType == FormType.QuickView && x.FormId == Guid.Parse(formId));
            if (form != null)
            {
                formXml = form.FormXml;
            }
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
            fields = fields.OrderBy(x => x.Id).ToList();
            if (fields.Count == 0) return string.Empty;
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
            if (navigations.Count == 0) return string.Empty;
            foreach (var navigation in navigations)
                code += $"\t\t\t{navigation}: {{}},\r\n";
            code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }

        private static string GetJsProcessCode()
        {
            var code = string.Empty;
            XrmHelper.EntitiesProcessForm.AddIfNotExist(CrmServiceClient, EntityMetadata.LogicalName);
            var processes = XrmHelper.EntitiesProcessForm.Where(x => x.EntityLogicalName == EntityMetadata.LogicalName).OrderBy(x => x.Name);
            if (processes.Count() == 0) return string.Empty;
            foreach (var process in processes)
            {
                var name = Utility.SafeIdentifier(process.Name);
                code += $"\t\tvar _{name} = {{\r\n";

                var xdoc = XDocument.Parse(process.xaml);
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
                    if (arr.Length == 1 || arr[1] != EntityMetadata.LogicalName) continue;
                    const string pattern = @"DataFieldName=""\w*""";
                    foreach (Match m in Regex.Matches(row.InnerText, pattern))
                    {
                        var array = m.Value.Split("=".ToCharArray());
                        var fieldName = array[1].Substring(1, array[1].Length - 2);
                        fields.Add(fieldName);
                    }
                }

                fields.Sort();
                code += GetJsForListFields(fields, true);
                code += $"\t\t}}\r\n";
                code += $"\t\tdevKit.LoadFields(formContext, _{name}, \"header_process_\");\r\n";
                code += $"\t\tprocess.{name} = _{name};\r\n";
            }
            return code;
        }

        private static string GetJsForListFields(IEnumerable<string> list, bool isBPF)
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
                        if (isBPF)
                            name = name + "_" + previousCount.ToString();
                        else
                            name = name + previousCount.ToString();
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
            if (headers.Count == 0) return string.Empty;
            var code = GetJsForListFields(headers, false);
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
            if (footers.Count == 0) return string.Empty;
            var code = GetJsForListFields(footers, false);
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
            if (tabs.Count() == 0) return string.Empty;
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
            return GetJsForListFields(list, false);
        }

        private static string GetJsQuickViewCodeBody(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var fields = (from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns")
                    .Descendants("column").Descendants("sections").Descendants("section").Descendants("rows")
                    .Descendants("row").Descendants("cell").Descendants("control")
                          select (string)x.Attribute("datafieldname")).ToList();
            fields.Sort();
            if (fields.Count == 0) return string.Empty;
            return GetJsForListFields(fields, false);
        }

        private static string GetUnquieFormName(string formName)
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
    }
}
