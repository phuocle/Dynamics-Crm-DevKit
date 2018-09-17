using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Xml.Linq;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Metadata;
using PL.DynamicsCrm.DevKit.Shared.Xrm;

namespace PL.DynamicsCrm.DevKit.Shared
{
    public class JsIntellisense
    {
        private OrganizationServiceProxy CrmService { get; }

        public JsIntellisense(OrganizationServiceProxy crmService)
        {
            CrmService = crmService;
        }

        public string Intellisense
        {
            get
            {
                var formIntellisense = string.Empty;
                formIntellisense += $"///<reference path=\"devkit.intellisense.js\" />\r\n";
                foreach (var form in ProcessForms)
                {
                    if (form.IsQuickCreate) continue;
                    formIntellisense += $"{ProjectName}.Form{GetSafeName(form.Name)} = function (executionContext, defaultWebResourceName) {{\r\n";
                    formIntellisense += $"\tvar {EntityName.ToLower()} = intellisense.Form;\r\n";
                    formIntellisense += $"\t{EntityName.ToLower()}.Utility = intellisense.Utility;\r\n";
                    formIntellisense += $"\tvar tab = {{}};\r\n";
                    formIntellisense += GetJsIntellisenseForm(form.FormXml);
                    formIntellisense += $"\tvar body = {{\r\n";
                    formIntellisense +=
                        $"\t\t///<field name=\"Tab\" type=\"Object\">A tab is a group of sections on a page</field>\r\n";
                    formIntellisense += $"\t\tTab: tab,\r\n";
                    formIntellisense += GetJsIntellisenseFormBody(form.FormXml);
                    formIntellisense += $"\t}};\r\n";
                    formIntellisense += $"\t{EntityName.ToLower()}.Body = body;\r\n";
                    var intellisenseHeader = GetJsIntellisenseFormHeader(form.FormXml);
                    if (intellisenseHeader.Length > 0)
                    {
                        formIntellisense += $"\tvar header = {{\r\n";
                        formIntellisense += intellisenseHeader;
                        formIntellisense += $"\t}};\r\n";
                        formIntellisense += $"\t{EntityName.ToLower()}.Header = header;\r\n";
                    }

                    var intellisenseFooter = GetJsIntellisenseFormFooter(form.FormXml);
                    if (intellisenseFooter.Length > 0)
                    {
                        formIntellisense += $"\tvar footer = {{\r\n";
                        formIntellisense += intellisenseFooter;
                        formIntellisense += $"\t}};\r\n";
                        formIntellisense += $"\t{EntityName.ToLower()}.Footer = footer;\r\n";
                    }

                    var intellisenseProcess = GetJsIntellisenseProcess();
                    if (intellisenseProcess.Length > 0)
                    {
                        formIntellisense += $"\tvar process = intellisense.Process;\r\n";
                        formIntellisense += intellisenseProcess;
                        formIntellisense += $"\t{EntityName.ToLower()}.Process = process;\r\n";
                    }

                    var intellisenseQuickForm = GetJsIntellisenseQuickForm(form.FormXml);
                    if (intellisenseQuickForm.Length > 0)
                    {
                        formIntellisense += $"\tvar quickForm = {{\r\n";
                        formIntellisense += intellisenseQuickForm;
                        formIntellisense += $"\t}};\r\n";
                        formIntellisense += $"\t{EntityName.ToLower()}.QuickForm = quickForm;\r\n";
                    }

                    var intellisenseNavigation = GetJsIntellisenseNavigation(form.FormXml);
                    if (intellisenseNavigation.Length > 0)
                    {
                        formIntellisense += $"\tvar navigation = {{\r\n";
                        formIntellisense += intellisenseNavigation;
                        formIntellisense += $"\t}};\r\n";
                        formIntellisense += $"\t{EntityName.ToLower()}.Navigation = navigation;\r\n";
                    }

                    formIntellisense += GetJsIntellisenseOptionSet();
                    formIntellisense += $"\treturn {EntityName.ToLower()};\r\n";
                    formIntellisense += $"}};\r\n";
                }

                foreach (var form in ProcessForms)
                {
                    if (!form.IsQuickCreate) continue;
                    formIntellisense += $"{ProjectName}.Form{GetSafeName(form.Name)} = function (executionContext) {{\r\n";
                    formIntellisense += $"\tvar {EntityName.ToLower()} = intellisense.FormQuickCreate;\r\n";
                    formIntellisense += $"\t///<field name=\"section\" type=\"Object\"></field>\r\n";
                    formIntellisense += $"\tvar section = {{\r\n";
                    var xdoc = XDocument.Parse(form.FormXml);
                    var sections = (from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns")
                            .Descendants("column").Descendants("sections").Descendants("section")
                                    select (string)x?.Attribute("name")).ToList();
                    foreach (var section in sections)
                        formIntellisense += $"\t\t{GetSafeName(section)}: intellisense.FormSection,\r\n";
                    formIntellisense = formIntellisense.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
                    formIntellisense += $"\t}}\r\n";
                    formIntellisense += $"\tvar body = {{\r\n";
                    formIntellisense +=
                        $"\t\t///<field name=\"Section\" type=\"Object\">A group of sections on a quick create form</field>\r\n";
                    formIntellisense += $"\t\tSection: section,\r\n";
                    var fields = (from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns")
                            .Descendants("column").Descendants("sections").Descendants("section").Descendants("rows")
                            .Descendants("row").Descendants("cell").Descendants("control")
                                  select (string)x.Attribute("datafieldname")).ToList();
                    fields.Sort();
                    formIntellisense += GetJsIntellisenseForListFields(fields);
                    formIntellisense = formIntellisense.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
                    formIntellisense += $"\t}}\r\n";
                    formIntellisense += $"\t{EntityName.ToLower()}.Body = body;\r\n";
                    formIntellisense += $"\treturn {EntityName.ToLower()};\r\n";
                    formIntellisense += $"}}\r\n";
                }

                if (IsJsWebApi)
                {
                    formIntellisense += GetWebApiIntellisense();
                }

                var comment = new CommentIntellisense()
                {
                    JsForm = ProcessForms.Select(f => f.Name).ToList<string>(),
                    JsWebApi = IsJsWebApi,
                    IsDebugForm = IsDebugForm,
                    IsDebugWebApi = IsDebugWebApi
                };
                formIntellisense += $"//{SimpleJson.SerializeObject(comment)}";
                formIntellisense = formIntellisense.Replace("\"", "'");
                return formIntellisense;
            }
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
            {
                apiType = "Edm.Guid";
            }
            else if (crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                     crmAttribute.FieldType == AttributeTypeCode.State ||
                     crmAttribute.FieldType == AttributeTypeCode.Status)
            {
                apiType = "Edm.Int32";
            }
            else if (crmAttribute.FieldType == AttributeTypeCode.String ||
                     crmAttribute.FieldType == AttributeTypeCode.Memo)
            {
                apiType = "Edm.String";
            }
            else if (crmAttribute.FieldType == AttributeTypeCode.Double)
            {
                apiType = "Edm.Double";
            }
            else if (crmAttribute.FieldType == AttributeTypeCode.Integer)
            {
                apiType = "Edm.Int32";
            }
            else if (crmAttribute.FieldType == AttributeTypeCode.Decimal ||
                     crmAttribute.FieldType == AttributeTypeCode.Money)
            {
                apiType = "Edm.Decimal";
            }
            else if (crmAttribute.FieldType == AttributeTypeCode.Boolean)
            {
                apiType = "Edm.Boolean";
            }
            else if (crmAttribute.FieldType == AttributeTypeCode.DateTime)
            {
                if (crmAttribute.DateTimeBehavior == DateTimeBehavior.DateOnly)
                    apiType = "Edm.Date";
                else
                    apiType = "Edm.DateTimeOffset";
            }

            return $"{@readonly}{apiType}";
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
        private string GetXmlCommentForField(CrmAttribute crmAttribute, string Class)
        {
            const string temp = "\t\t///<field name=\"{0}\" type=\"{1}\">{2}</field>\r\n";
            const string temp2 = "\t\t///<field name=\"{0}\" type=\"{1}\">{2}</field>\r\n";
            var comment = string.Empty;
            if (crmAttribute.DateTimeBehavior == DateTimeBehavior.DateOnly)
            {
                comment += string.Format(temp, crmAttribute.SchemaName + "_DateOnly", GetFieldType(crmAttribute),
                    GetWebApiType(crmAttribute));
            }
            else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.TimeZoneIndependent)
            {
                if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                    comment += string.Format(temp, crmAttribute.SchemaName + "_TimezoneDateOnly",
                        GetFieldType(crmAttribute), GetWebApiType(crmAttribute));
                else
                    comment += string.Format(temp, crmAttribute.SchemaName + "_TimezoneDateAndTime",
                        GetFieldType(crmAttribute), GetWebApiType(crmAttribute));
            }
            else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.UserLocal)
            {
                if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                    comment += string.Format(temp, crmAttribute.SchemaName + "_UtcDateOnly", GetFieldType(crmAttribute),
                        GetWebApiType(crmAttribute));
                else
                    comment += string.Format(temp, crmAttribute.SchemaName + "_UtcDateAndTime",
                        GetFieldType(crmAttribute), GetWebApiType(crmAttribute));
            }
            else
            {
                var fieldType = GetFieldType(crmAttribute);
                if (fieldType == "PickList")
                    comment += string.Format(temp2, crmAttribute.SchemaName,
                        $"OptionSet",
                        $"{GetWebApiType(crmAttribute)} - this.OptionSet.{crmAttribute.SchemaName}");
                else
                    comment += string.Format(temp, crmAttribute.SchemaName, fieldType, GetWebApiType(crmAttribute));
            }

            return comment;
        }

        private string GetWebApiIntellisense()
        {
            var Class = EntityName;
            var webApiCodeIntellisense = string.Empty;
            webApiCodeIntellisense += $"{ProjectName}.{Class}Api = function (entity) {{\r\n";
            webApiCodeIntellisense += $"\treturn {{\r\n";
            foreach (var crmAttribute in Fields)
            {
                if (crmAttribute.AttributeOf != null) continue;
                if (crmAttribute.IsDeprecated) continue;
                var @function = "{1}\t\t{0}: intellisense.EntityValue,\r\n";
                var comment = GetXmlCommentForField(crmAttribute, Class);
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
                    webApiCodeIntellisense += string.Format(@function, crmAttribute.SchemaName, comment);
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.DateTime)
                {
                    if (crmAttribute.DateTimeBehavior == DateTimeBehavior.DateOnly)
                        webApiCodeIntellisense += string.Format(@function, crmAttribute.SchemaName + "_DateOnly", comment);
                    else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.TimeZoneIndependent)
                    {
                        if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                            webApiCodeIntellisense += string.Format(@function, crmAttribute.SchemaName + "_TimezoneDateOnly", comment);
                        else
                            webApiCodeIntellisense += string.Format(@function, crmAttribute.SchemaName + "_TimezoneDateAndTime", comment);
                    }
                    else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.UserLocal)
                    {
                        if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                            webApiCodeIntellisense += string.Format(@function, crmAttribute.SchemaName + "_UtcDateOnly", comment);
                        else
                            webApiCodeIntellisense += string.Format(@function, crmAttribute.SchemaName + "_UtcDateAndTime", comment);
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
                        webApiCodeIntellisense += string.Format(@function, crmAttribute.SchemaName, comment);
                    }
                    else
                    {
                        var j = 0;
                        foreach (var e in entities)
                        {
                            webApiCodeIntellisense += string.Format(@function, navigations[j], comment);
                            j++;
                        }
                    }
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Owner)
                {
                    webApiCodeIntellisense += $"\t\t///<field name=\"OwnerId_systemuser\" type=\"Lookup\"></field>\r\n";
                    webApiCodeIntellisense += $"\t\tOwnerId_systemuser: intellisense.EntityValue,\r\n";
                    webApiCodeIntellisense += $"\t\t///<field name=\"OwnerId_team\" type=\"Lookup\"></field>\r\n";
                    webApiCodeIntellisense += $"\t\tOwnerId_team: intellisense.EntityValue,\r\n";
                }
            }
            webApiCodeIntellisense += $"\t\t///<field name=\"Entity\" type=\"Object\"></field>\r\n";
            webApiCodeIntellisense += $"\t\tEntity: null,\r\n";
            webApiCodeIntellisense += $"\t\t///<field name=\"EntityName\" type=\"String\"></field>\r\n";
            webApiCodeIntellisense += $"\t\tEntityName: null,\r\n";
            webApiCodeIntellisense += $"\t\t///<field name=\"EntityCollectionName\" type=\"String\"></field>\r\n";
            webApiCodeIntellisense += $"\t\tEntityCollectionName: null,\r\n";
            webApiCodeIntellisense += $"\t\t///<field name=\"OptionSet\" type=\"Object\"></field>\r\n";
            webApiCodeIntellisense += GetWebApiOptionSetIntellisense();
            webApiCodeIntellisense += $"\t}};\r\n";
            webApiCodeIntellisense += $"}};\r\n";
            return webApiCodeIntellisense;
        }

        private string GetWebApiOptionSetIntellisense()
        {
            var intellisense = string.Empty;
            intellisense += $"\t\tOptionSet: {{\r\n";
            foreach (var crmAttribute in Fields)
            {
                if (!crmAttribute.IsValidForRead) continue;
                if (crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                    crmAttribute.FieldType == AttributeTypeCode.State ||
                    crmAttribute.FieldType == AttributeTypeCode.Status)
                {
                    intellisense += $"\t\t\t///<field name=\"{crmAttribute.SchemaName}\" type=\"PickList\"></field>\r\n";
                    intellisense += $"\t\t\t{crmAttribute.SchemaName}: {{\r\n";
                    foreach (string nvc in crmAttribute.OptionSetValues)
                    {
                        intellisense += $"\t\t\t\t///<field name=\"{nvc}\" type=\"PickListValue\">{nvc} = {crmAttribute.OptionSetValues[nvc]}</field>\r\n";
                        intellisense += $"\t\t\t\t{nvc}: {crmAttribute.OptionSetValues[nvc]},\r\n";
                    }

                    intellisense = intellisense.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
                    intellisense += $"\t\t\t}},\r\n";
                }
            }
            intellisense = intellisense.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            intellisense += $"\t\t}}\r\n";
            return intellisense;
        }

        public List<SystemForm> ProcessForms { get; internal set; }
        public bool IsDebugForm { get; internal set; }
        public string ProjectName { get; internal set; }
        public string EntityName { get; internal set; }
        public List<CrmAttribute> Fields { get; internal set; }
        public DataCollection<Entity> Processes { get; internal set; }
        public bool IsJsWebApi { get; internal set; }
        public bool IsDebugWebApi { get; internal set; }

        private static string GetSafeName(string name)
        {
            name = name.Replace(" ", "");
            return name;
        }

        private string GetJsIntellisenseForm(string formXml)
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
                var rows2 = from x2 in xdoc2.Descendants("columns").Descendants("column").Descendants("sections")
                        .Elements("section")
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

        private string GetJsIntellisenseFormBody(string formXml)
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
            return GetJsIntellisenseForListFields(list);
        }

        private string GetJsIntellisenseForListFields(List<string> list)
        {
            var code = string.Empty;
            const string line1 = "\t\t///<field name=\"{0}\" type=\"{1}\">{2}</field>\r\n";
            const string line2 = "\t\t{0}: intellisense.{1},\r\n";
            foreach (var item in list)
            {
                var crmAttribute = Fields.FirstOrDefault(x => x.LogicalName == item);
                if (crmAttribute == null) continue;
                var name = crmAttribute.SchemaName;

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
                    code += string.Format(line1, name, "OptionSet", string.Empty);
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
            code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }

        private string GetJsIntellisenseFormHeader(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var headers = (from x in xdoc.Descendants("header").Descendants("rows").Descendants("row")
                    .Descendants("cell").Descendants("control")
                           select x.Attribute("datafieldname")?.Value).ToList();
            headers.Sort();
            var code = GetJsIntellisenseForListFields(headers);
            if (code.EndsWith(",\r\n")) code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }

        private string GetJsIntellisenseFormFooter(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var footers = (from x in xdoc.Descendants("footer").Descendants("rows").Descendants("row")
                    .Descendants("cell").Descendants("control")
                           select x.Attribute("datafieldname")?.Value).ToList();
            footers.Sort();
            var code = GetJsIntellisenseForListFields(footers);
            if (code.EndsWith(",\r\n")) code = code.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return code;
        }

        private string GetJsIntellisenseProcess()
        {
            var intellisense = string.Empty;
            foreach (var entity in Processes)
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

        private string GetJsIntellisenseQuickForm(string formXml)
        {
            var intellisense = string.Empty;
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
            foreach (var quickForm in quickForms)
                intellisense += $"\t\t{quickForm}: intellisense.FormQuickView,\r\n";
            intellisense = intellisense.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return intellisense;
        }

        private string GetJsIntellisenseNavigation(string formXml)
        {
            var intellisense = string.Empty;
            var xdoc = XDocument.Parse(formXml);
            var navigations = (from x in xdoc.Descendants("Navigation").Descendants("NavBar")
                    .Descendants("NavBarByRelationshipItem")
                               select (string)x?.Attribute("Id")).ToList();
            foreach (var navigation in navigations)
                intellisense += $"\t\t{navigation}: intellisense.FormNavigation,\r\n";
            intellisense = intellisense.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return intellisense;
        }

        private string GetJsIntellisenseOptionSet()
        {
            var intellisense = string.Empty;
            intellisense += $"\t{EntityName.ToLower()}.OptionSet = {{}};\r\n";
            foreach (var crmAttribute in Fields)
            {
                if (!crmAttribute.IsValidForRead) continue;
                if (crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                    crmAttribute.FieldType == AttributeTypeCode.State ||
                    crmAttribute.FieldType == AttributeTypeCode.Status)
                {
                    intellisense += $"\t///<field name=\"{crmAttribute.SchemaName}\" type=\"PickList\"></field>\r\n";
                    intellisense += $"\t{EntityName.ToLower()}.OptionSet.{crmAttribute.SchemaName} = {{\r\n";
                    foreach (string nvc in crmAttribute.OptionSetValues)
                    {
                        intellisense +=
                            $"\t\t///<field name=\"{nvc}\" type=\"PickListValue\">{nvc} = {crmAttribute.OptionSetValues[nvc]}</field>\r\n";
                        intellisense += $"\t\t{nvc}: {crmAttribute.OptionSetValues[nvc]},\r\n";
                    }

                    intellisense = intellisense.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
                    intellisense += $"\t}};\r\n";
                }
            }

            return intellisense;
        }

        private static string StaticCode()
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
    }
}
