using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Shared.Logic
{
    public static class JsForm
    {
        private const string NEW_LINE = "\r\n";
        private const string TAB = "\t";

        private class TabSection
        {
            public string Tab { get; set; }

            public string Section { get; set; }
        }

        private class ProcessFields
        {
            public string ProcessName { get; set; }

            public List<string> Fields { get; set; }
        }

        private static ServiceClient ServiceClient { get; set; }

        private static EntityMetadata EntityMetadata { get; set; }

        private static string RootNamespace { get; set; }

        private static CommentTypeScriptDeclaration Comment { get; set; }

        private static List<string> FormNames;

        public static async Task<(string code, string dts)> GetCodeAsync(ServiceClient service, EntityMetadata entityMetadata, string rootNamespace, CommentTypeScriptDeclaration comment)
        {
            FormNames = new List<string>();
            ServiceClient = service;
            EntityMetadata = entityMetadata;
            RootNamespace = rootNamespace;
            Comment = comment;
            var forms = await XrmHelper.GetEntityFormsAsync(service, entityMetadata.LogicalName);

            var code = string.Empty;
            var @namespace = Helper.GetNameSpace(RootNamespace);
            var logicalName = entityMetadata.LogicalName;

            code += $"'use strict';{NEW_LINE}";
            code += $"/** @namespace {@namespace} */{NEW_LINE}";
            code += $"var {@namespace};{NEW_LINE}";
            code += $"(function ({@namespace}) {{{NEW_LINE}";
            code += $"{TAB}'use strict';{NEW_LINE}";
            foreach (var form in forms.Where(x => !x.IsQuickCreate))
                code += await GetMainFormCodeAsync(form, @namespace);
            foreach (var form in forms.Where(x => x.IsQuickCreate))
                code += GetQuickCreateFormCode(form, @namespace);

            code += $"}})({@namespace} || ({@namespace} = {{}}));{NEW_LINE}";
            code += $"{Helper.GeneratorOptionSet(EntityMetadata)}";

            var dts = await JsTypeScriptDeclaration.GetCodeAsync(service, entityMetadata, rootNamespace, comment);

            return (code, dts);
        }

        private static string GetQuickCreateFormCode(SystemForm form, string @namespace)
        {
            var code = string.Empty;
            var formName = Helper.GetFormName(form.Name, EntityMetadata.SchemaName);
            formName = GetUnquieFormName(formName);
            code += $"{TAB}{@namespace}.Form{Helper.SafeIdentifier(formName)} = function(executionContext, defaultWebResourceName) {{{NEW_LINE}";
            code += $"{TAB}{TAB}var formContext = null;{NEW_LINE}";
            code += $"{TAB}{TAB}if (executionContext !== undefined){NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (executionContext.getFormContext === undefined) {{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}formContext = executionContext;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}else {{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}formContext = executionContext.getFormContext();{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}var form = devKit.LoadForm(formContext);{NEW_LINE}";
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
            code += $"{TAB}{TAB}form.Utility = devKit.LoadUtility(defaultWebResourceName);{NEW_LINE}";
            code += $"{TAB}{TAB}form.ExecutionContext = devKit.LoadExecutionContext(executionContext);{NEW_LINE}";
            code += $"{TAB}{TAB}devKit.LoadOthers(formContext, form, defaultWebResourceName);{NEW_LINE}";
            code += $"{TAB}{TAB}return form;{NEW_LINE}";
            code += $"{TAB}}};{NEW_LINE}";
            return code;
        }

        private static async Task<string> GetMainFormCodeAsync(SystemForm form, string @namespace)
        {
            var code = string.Empty;
            var formName = Helper.GetFormName(form.Name, EntityMetadata.SchemaName);
            formName = GetUnquieFormName(formName);
            code += $"{TAB}{@namespace}.Form{Helper.SafeIdentifier(formName)} = function(executionContext, defaultWebResourceName) {{{NEW_LINE}";
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
                code += $"{TAB}{TAB}var header = {{{NEW_LINE}";
                code += codeHeader;
                code += $"{TAB}{TAB}}};{NEW_LINE}";
                code += $"{TAB}{TAB}devKit.LoadFields(formContext, header, \"header_\");{NEW_LINE}";
                code += $"{TAB}{TAB}form.Header = header;{NEW_LINE}";
            }

            var codeProcess = await GetJsProcessCodeAsync();
            if (codeProcess.Length > 0)
            {
                code += $"{TAB}{TAB}var process = devKit.LoadProcess(formContext);{NEW_LINE}";
                code += codeProcess;
                code += $"{TAB}{TAB}form.Process = process;{NEW_LINE}";
            }
            var codeQuickForm = await GetJsQuickFormCodeAsync(form.FormXml);
            if (codeQuickForm.Length > 0)
            {
                code += $"{TAB}{TAB}var quickForm = {{{NEW_LINE}";
                code += codeQuickForm;
                code += $"{TAB}{TAB}}};{NEW_LINE}";
                code += $"{TAB}{TAB}devKit.LoadQuickForms(formContext, quickForm);{NEW_LINE}";
                code += $"{TAB}{TAB}form.QuickForm = quickForm;{NEW_LINE}";
            }
            var codeGrid = GetJsGridCode(form.FormXml);
            if (codeGrid.Length > 0)
            {
                code += $"{TAB}{TAB}var grid = {{{NEW_LINE}";
                code += codeGrid;
                code += $"{TAB}{TAB}}};{NEW_LINE}";
                code += $"{TAB}{TAB}devKit.LoadGrids(formContext, grid);{NEW_LINE}";
                code += $"{TAB}{TAB}form.Grid = grid;{NEW_LINE}";
            }
            var codeNavigation = GetJsNavigationCode(form.FormXml);
            if (codeNavigation.Length > 0)
            {
                code += $"{TAB}{TAB}var navigation = {{{NEW_LINE}";
                code += codeNavigation;
                code += $"{TAB}{TAB}}};{NEW_LINE}";
                code += $"{TAB}{TAB}devKit.LoadNavigations(formContext, navigation);{NEW_LINE}";
                code += $"{TAB}{TAB}form.Navigation = navigation;{NEW_LINE}";
            }
            code += $"{TAB}{TAB}form.Utility = devKit.LoadUtility(defaultWebResourceName);{NEW_LINE}";
            code += $"{TAB}{TAB}form.ExecutionContext = devKit.LoadExecutionContext(executionContext);{NEW_LINE}";
            code += $"{TAB}{TAB}devKit.LoadOthers(formContext, form, defaultWebResourceName);{NEW_LINE}";
            code += $"{TAB}{TAB}return form;{NEW_LINE}";
            code += $"{TAB}}};{NEW_LINE}";
            return code;
        }

        private static async Task<string> GetJsQuickFormCodeAsync(string formXml)
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
                code += $"{TAB}{TAB}{TAB}{quickForm}: {{{NEW_LINE}";
                code += await GetBodyOfQuickViewAsync(formXml, quickForm);
                code += $"{TAB}{TAB}{TAB}}},{NEW_LINE}";
            }
            code = code.TrimEnd(",{NEW_LINE}".ToCharArray()) + "{NEW_LINE}";
            return code;
        }

        private static async Task<string> GetBodyOfQuickViewAsync(string formXml, string id)
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

            var quickViewXml = (from x in xdoc2.Descendants("QuickFormId") select new { formId = x.Value, entityLogicalName = x?.Attribute("entityname")?.Value }).FirstOrDefault();
            if (quickViewXml == null) return string.Empty;
            var quickViewFormXml = string.Empty;

            await GetFormXmlAsync(quickViewXml.formId, quickViewXml.entityLogicalName);
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
                              Name = Helper.SafeIdentifier(x?.Attribute("datafieldname")?.Value),
                              Id = x?.Attribute("id").Value,
                              ClassId = Helper.TrimGuid(x?.Attribute("classid")?.Value?.ToUpper()),
                              ControlId = x?.Attribute("uniqueid")?.Value
                          }).Distinct().ToList();
            fields = fields.OrderBy(x => x.Name).ToList();
            await XrmHelper.EntitiesMetadata.AddIfNotExistAsync(ServiceClient, quickViewXml.entityLogicalName);
            var quickViewMetadata = XrmHelper.EntitiesMetadata.Where(x => x.LogicalName == quickViewXml.entityLogicalName).FirstOrDefault();
            if (quickViewMetadata == null) return String.Empty;
            foreach (var field in fields)
            {
                var fieldAttribute = quickViewMetadata.Attributes.Where(x => x.LogicalName == field.Id).FirstOrDefault();
                if (fieldAttribute != null)
                {
                    code += $"{TAB}{TAB}{TAB}{TAB}{fieldAttribute.SchemaName}: {{}},{NEW_LINE}";
                }
            }
            code = code.TrimEnd(",{NEW_LINE}".ToCharArray()) + "{NEW_LINE}";
            return code;
        }

        private static async Task<string> GetFormXmlAsync(string formId, string entityLogicalName)
        {
            await XrmHelper.EntitiesFormXml.AddIfNotExistAsync(ServiceClient, entityLogicalName);
            var form = XrmHelper.EntitiesFormXml.FirstOrDefault(x => x.FormType == FormType.QuickView && x.FormId == Guid.Parse(formId));
            if (form != null)
            {
                return form.FormXml;
            }
            return string.Empty;
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
                              Name = Helper.SafeIdentifier(x?.Attribute("datafieldname")?.Value),
                              Id = x?.Attribute("id").Value,
                              ClassId = Helper.TrimGuid(x?.Attribute("classid")?.Value?.ToUpper()),
                              ControlId = x?.Attribute("uniqueid")?.Value
                          }).Distinct().ToList();
            fields = fields.OrderBy(x => x.Id).ToList();
            if (fields.Count == 0) return string.Empty;
            foreach (var field in fields)
            {
                var classId = GetARealClassId(formXml, field.ClassId, field.ControlId);
                if (classId != ControlClassId.SUB_GRID && classId != ControlClassId.SUB_GRID_PANEL) continue;
                code += $"{TAB}{TAB}{TAB}{field.Id}: {{}},{NEW_LINE}";
            }
            return code;
        }

        private static string GetJsNavigationCode(string formXml)
        {
            List<string> BlackList = new List<string> { "asyncoperation", "bulkdeletefailure", "mailboxtrackingfolder", "principalobjectattributeaccess", "processsession", "syncerror", "userentityinstancedata", "duplicaterecord",
        "sharepointdocumentlocation", "sharepointdocument", "chat", "fax", "letter", "recurringappointmentmaster", "socialactivity", "activitypointer", "annotation", "slakpiinstance", "socialprofile", "postrole", "postregarding", "postfollow",
        "customeraddress", "customerrelationship", "activityparty", "actioncard", "connection", "fileattachment", "owner", "createdby", "createdonbehalfby", "modifiedby", "modifiedonbehalfby"
        };

            var code = string.Empty;

            foreach (var relationship in EntityMetadata.OneToManyRelationships.OrderBy(x => x.SchemaName))
            {
                if (BlackList.Contains(relationship.ReferencingEntity)) continue;
                if (BlackList.Contains(relationship.ReferencedEntity)) continue;
                if (BlackList.Contains(relationship.ReferencedAttribute)) continue;
                if (BlackList.Contains(relationship.ReferencingAttribute)) continue;
                if (
                    relationship.RelationshipType == RelationshipType.OneToManyRelationship &&
                    (relationship.IsValidForAdvancedFind ?? false)
                    )
                {

                    code += $"{TAB}{TAB}{TAB}{relationship.SchemaName}: {{}},{NEW_LINE}";
                }
            }

            code = code.TrimEnd(",{NEW_LINE}".ToCharArray()) + "{NEW_LINE}";
            return code;
        }

        private static async Task<string> GetJsProcessCodeAsync()
        {
            var code = string.Empty;
            await XrmHelper.EntitiesProcessForm.AddIfNotExistAsync(ServiceClient, EntityMetadata.LogicalName);
            var processes = XrmHelper.EntitiesProcessForm.Where(x => x.EntityLogicalName == EntityMetadata.LogicalName).OrderBy(x => x.Name);
            if (processes.Count() == 0) return string.Empty;
            foreach (var process in processes)
            {
                var name = Helper.SafeIdentifier(process.Name);
                code += $"{TAB}{TAB}var _{name} = {{{NEW_LINE}";

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
                code += $"{TAB}{TAB}}}{NEW_LINE}";
                code += $"{TAB}{TAB}devKit.LoadFields(formContext, _{name}, \"header_process_\");{NEW_LINE}";
                code += $"{TAB}{TAB}process.{name} = _{name};{NEW_LINE}";
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
                    if (listExist.Contains(item)) continue; else listExist.Add(Helper.SafeIdentifier(item));
                    code += $"{TAB}{TAB}{TAB}{Helper.SafeIdentifier(item)}: {{}},{NEW_LINE}";
                }
                else
                {
                    var name = Helper.SafeIdentifier(crmAttribute.SchemaName);
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
                    previousName = Helper.SafeIdentifier(crmAttribute.SchemaName);
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
                if (Helper.SafeIdentifier(tab.Name).Length == 0) continue;
                if (existTabs.Contains(Helper.SafeIdentifier(tab.Name))) continue; else existTabs.Add(Helper.SafeIdentifier(tab.Name));
                var tabName = Helper.SafeIdentifier(tab.Name);
                code += $"{TAB}{TAB}{TAB}{tabName}: {{{NEW_LINE}";
                code += $"{TAB}{TAB}{TAB}{TAB}Section: {{{NEW_LINE}";
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
                    if (Helper.SafeIdentifier(section.Name).Length == 0) continue;
                    if (existSections.Contains(Helper.SafeIdentifier(section.Name))) continue; else existSections.Add(Helper.SafeIdentifier(section.Name));
                    var sectionName = Helper.SafeIdentifier(section.Name);
                    code += $"{TAB}{TAB}{TAB}{TAB}{TAB}{sectionName}: {{}},{NEW_LINE}";
                }
                code = code.TrimEnd(",{NEW_LINE}".ToCharArray()) + "{NEW_LINE}";
                code += $"{TAB}{TAB}{TAB}{TAB}}}{NEW_LINE}";
                code += $"{TAB}{TAB}{TAB}}},{NEW_LINE}";
            }
            code = code.TrimEnd(",{NEW_LINE}".ToCharArray()) + "{NEW_LINE}";
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