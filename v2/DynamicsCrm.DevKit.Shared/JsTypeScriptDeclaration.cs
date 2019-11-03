using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Xml.Linq;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Metadata;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Helper;
using System;

namespace DynamicsCrm.DevKit.Shared
{
    public class JsTypeScriptDeclaration
    {
        public JsTypeScriptDeclaration(OrganizationServiceProxy crmService)
        {

        }
        private class IdName
        {
            public string Id { get; set; }
            public string Name { get; set; }
            public string ClassId { get; set; }
            public string ControlId { get; set; }
        }
        public List<SystemForm> ProcessForms { get; internal set; }
        public bool IsDebugForm { get; internal set; }
        public string ProjectName { get; internal set; }
        public string EntityName { get; internal set; }
        public List<CrmAttribute> Fields { get; internal set; }
        public DataCollection<Entity> Processes { get; internal set; }
        public bool IsJsWebApi { get; internal set; }
        public bool IsDebugWebApi { get; internal set; }
        private string Class { get { return EntityName; } }
        public string Intellisense
        {
            get
            {
                var _d_ts = string.Empty;
                _d_ts += $"//@ts-check\r\n";
                _d_ts += $"///<reference path=\"DevKit.d.ts\" />\r\n";
                _d_ts += $"declare namespace {ProjectName} {{\r\n";
                if (ProcessForms.Count > 0)
                    _d_ts += GetForm_d_ts();
                if (IsJsWebApi)
                    _d_ts += GetWebApi_d_ts();

                _d_ts += $"}}\r\n";
                _d_ts += GetOptionSet_d_ts();
                _d_ts += GetSavedComment();
                return _d_ts;
            }
        }

        private string GetSavedComment()
        {
            var _d_ts = string.Empty;
            var comment = new CommentTypeScriptDeclaration()
            {
                JsForm = ProcessForms.Select(f => FormHelper.GetFormName(f.Name)).ToList<string>(),
                JsWebApi = IsJsWebApi,
                IsDebugForm = IsDebugForm,
                IsDebugWebApi = IsDebugWebApi
            };
            _d_ts += $"//{SimpleJson.SerializeObject(comment)}";
            _d_ts = _d_ts.Replace("\"", "'");
            return _d_ts;
        }
        private string GetOptionSet_d_ts()
        {
            var _d_ts = string.Empty;
            _d_ts += $"declare namespace OptionSet {{\r\n";
            _d_ts += $"\tnamespace {Class} {{\r\n";
            foreach (var crmAttribute in Fields)
            {
                if (!crmAttribute.IsValidForRead) continue;
                if (crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                    crmAttribute.FieldType == AttributeTypeCode.State ||
                    crmAttribute.FieldType == AttributeTypeCode.Status ||
                    crmAttribute.IsMultiSelectPicklist)
                {
                    _d_ts += $"\t\tenum {crmAttribute.SchemaName} {{\r\n";
                    foreach (string nvc in crmAttribute.OptionSetValues)
                    {
                        _d_ts += $"\t\t\t/** {crmAttribute.OptionSetValues[nvc]} */\r\n";
                        _d_ts += $"\t\t\t{nvc},\r\n";
                    }
                    _d_ts = _d_ts.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
                    _d_ts += $"\t\t}}\r\n";
                }
            }
            var optionSet = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Resources.OptionSetWebApi_d_ts.js");
            _d_ts += optionSet;
            _d_ts += $"\t}}\r\n";
            _d_ts += $"}}\r\n";
            return _d_ts;
        }
        private string GetWebApi_d_ts()
        {
            var _d_ts = string.Empty;
            _d_ts += $"\tclass {Class}Api {{\r\n";
            _d_ts += $"\t\t/**\r\n";
            _d_ts += $"\t\t* DynamicsCrm.DevKit {Class}Api\r\n";
            _d_ts += $"\t\t* @param entity The entity object\r\n";
            _d_ts += $"\t\t*/\r\n";
            _d_ts += $"\t\tconstructor(entity?: any);\r\n";
            _d_ts += $"\t\t/**\r\n";
            _d_ts += $"\t\t * Get the value of alias\r\n";
            _d_ts += $"\t\t * @param alias the alias value\r\n";
            _d_ts += $"\t\t * @param isMultiOptionSet true if the alias is multi OptionSet\r\n";
            _d_ts += $"\t\t */\r\n";
            _d_ts += $"\t\tgetAliasedValue(alias: string, isMultiOptionSet?: boolean): any;\r\n";
            _d_ts += $"\t\t/**\r\n";
            _d_ts += $"\t\t * Get the formatted value of alias\r\n";
            _d_ts += $"\t\t * @param alias the alias value\r\n";
            _d_ts += $"\t\t * @param isMultiOptionSet true if the alias is multi OptionSet\r\n";
            _d_ts += $"\t\t */\r\n";
            _d_ts += $"\t\tgetAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;\r\n";
            _d_ts += $"\t\t/** The entity object */\r\n";
            _d_ts += $"\t\tEntity: any;\r\n";
            _d_ts += $"\t\t/** The entity name */\r\n";
            _d_ts += $"\t\tEntityName: string;\r\n";
            _d_ts += $"\t\t/** The entity collection name */\r\n";
            _d_ts += $"\t\tEntityCollectionName: string;\r\n";
            _d_ts += $"\t\t/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */\r\n";
            _d_ts += $"\t\t\"@odata.etag\": string;\r\n";
            foreach (var crmAttribute in Fields)
            {
                if (crmAttribute.SchemaName == "Entity") crmAttribute.SchemaName = "_Entity";
                else if (crmAttribute.SchemaName == "EntityName") crmAttribute.SchemaName = "_EntityName";
                if (crmAttribute.IsDeprecated) continue;
                if (crmAttribute.AttributeOf != null && crmAttribute.FieldType == AttributeTypeCode.Virtual && crmAttribute.LogicalName != "entityimage") continue;
                if (crmAttribute.FieldType == AttributeTypeCode.EntityName || crmAttribute.FieldType == AttributeTypeCode.PartyList) continue;
                if (crmAttribute.AttributeOf != null && crmAttribute.AttributeOf.ToLower() + "name" == crmAttribute.LogicalName) continue;
                if (crmAttribute.AttributeOf != null && crmAttribute.LogicalName.EndsWith("yominame") && !crmAttribute.IsValidForCreate && !crmAttribute.IsValidForUpdate) continue;

                var jdoc = string.Empty;
                var Readonly = (!crmAttribute.IsValidForCreate && !crmAttribute.IsValidForUpdate) ? "Readonly" : string.Empty;
                if (crmAttribute.FieldType != AttributeTypeCode.Customer && crmAttribute?.Description?.Length > 0)
                    jdoc += crmAttribute.Description;
                if (crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                    crmAttribute.FieldType == AttributeTypeCode.State ||
                    crmAttribute.FieldType == AttributeTypeCode.Status
                    )
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.OptionSetValue{Readonly};\r\n";
                }
                else if (crmAttribute.IsMultiSelectPicklist)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.MultiOptionSetValue{Readonly};\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Lookup)
                {
                    var entities = crmAttribute.EntityReferenceLogicalName.Split(";".ToCharArray());
                    if (entities.Length == 1)
                    {
                        if (jdoc.Length > 0)
                            _d_ts += $"\t\t/** {jdoc} */\r\n";
                        _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.LookupValue{Readonly};\r\n";
                    }
                    else
                    {
                        var navigations = crmAttribute.NavigationPropertyName.Split(";".ToCharArray());
                        if (entities.Length != navigations.Length) continue;
                        var j = 0;
                        foreach (var entity in entities)
                        {
                            if (crmAttribute.EntityName == "audit" && entity == "externalparty") continue;
                            if (crmAttribute.EntityName == "feedback" && navigations[j] == "FeedbackId") navigations[j] = "_FeedbackId";
                            if (jdoc.Length > 0)
                                _d_ts += $"\t\t/** {jdoc} */\r\n";
                            _d_ts += $"\t\t{navigations[j]}: DevKit.WebApi.LookupValue{Readonly};\r\n";
                            j++;
                        }
                    }
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Customer)
                {
                    var entities = crmAttribute.EntityReferenceLogicalName.Split(";".ToCharArray());
                    var navigations = crmAttribute.NavigationPropertyName.Split(";".ToCharArray());
                    for (var j = 0; j < entities.Length; j++)
                    {
                        if (jdoc.Length > 0)
                            _d_ts += $"\t\t/** {jdoc} */\r\n";
                        _d_ts += $"\t\t{navigations[j]}: DevKit.WebApi.LookupValue{Readonly};\r\n";
                    }
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Owner)
                {
                    _d_ts += $"\t\t/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */\r\n";
                    _d_ts += $"\t\tOwnerId_systemuser: DevKit.WebApi.LookupValue{Readonly};\r\n";
                    _d_ts += $"\t\t/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */\r\n";
                    _d_ts += $"\t\tOwnerId_team: DevKit.WebApi.LookupValue{Readonly};\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Memo ||
                    crmAttribute.FieldType == AttributeTypeCode.String)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.StringValue{Readonly};\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Boolean)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.BooleanValue{Readonly};\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.DateTime)
                {
                    if (crmAttribute.DateTimeBehavior == DateTimeBehavior.DateOnly)
                    {
                        if (jdoc.Length > 0)
                            _d_ts += $"\t\t/** {jdoc} */\r\n";
                        _d_ts += $"\t\t{crmAttribute.SchemaName}_DateOnly: DevKit.WebApi.DateOnlyValue{Readonly};\r\n";
                    }
                    else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.TimeZoneIndependent)
                    {
                        if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                        {
                            if (jdoc.Length > 0)
                                _d_ts += $"\t\t/** {jdoc} */\r\n";
                            _d_ts += $"\t\t{crmAttribute.SchemaName}_TimezoneDateOnly: DevKit.WebApi.TimezoneDateOnlyValue{Readonly};\r\n";
                        }
                        else
                        {
                            if (jdoc.Length > 0)
                                _d_ts += $"\t\t/** {jdoc} */\r\n";
                            _d_ts += $"\t\t{crmAttribute.SchemaName}_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue{Readonly};\r\n";
                        }
                    }
                    else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.UserLocal)
                    {
                        if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                        {
                            if (jdoc.Length > 0)
                                _d_ts += $"\t\t/** {jdoc} */\r\n";
                            _d_ts += $"\t\t{crmAttribute.SchemaName}_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue{Readonly};\r\n";
                        }
                        else
                        {
                            if (jdoc.Length > 0)
                                _d_ts += $"\t\t/** {jdoc} */\r\n";
                            _d_ts += $"\t\t{crmAttribute.SchemaName}_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue{Readonly};\r\n";
                        }
                    }
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Integer)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.IntegerValue{Readonly};\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.BigInt)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.BigIntValue{Readonly};\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Decimal)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.DecimalValue{Readonly};\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Double)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.DoubleValue{Readonly};\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Money)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.MoneyValue{Readonly};\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Uniqueidentifier)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.GuidValue{Readonly};\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.CalendarRules)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.EntityCollectionValue{Readonly};\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.ManagedProperty)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.ManagedPropertyValue{Readonly};\r\n";
                }
                else
                {
                    if (crmAttribute.SchemaName == "EntityImage" ||
                        crmAttribute.SchemaName == "FullImageData" ||
                        crmAttribute.SchemaName == "ImageData")
                    {
                        if (jdoc.Length > 0)
                            _d_ts += $"\t\t/** {jdoc} */\r\n";
                        _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.StringValue{Readonly};\r\n";
                    }
                    else
                    {
                        if (jdoc.Length > 0)
                            _d_ts += $"\t\t/** {jdoc} */\r\n";
                        _d_ts += $"\t\t{crmAttribute.SchemaName}: ??????????;\r\n";
                    }
                }
            }
            var hasPartyList = Fields.Where(f => f.FieldType == AttributeTypeCode.PartyList).Any();
            if (hasPartyList)
            {
                _d_ts += $"\t\t/** The array of object that can cast object to ActivityPartyApi class */\r\n"; ;
                _d_ts += $"\t\tActivityParties: Array<any>;\r\n";
            }
            _d_ts += $"\t}}\r\n";
            return _d_ts;
        }
        private string GetForm_d_ts_Header(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var headers = (from x in xdoc.Descendants("header")
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
                           }).ToList();
            headers = headers.OrderBy(x => x.Name).ToList();
            if (headers.Count() == 0) return string.Empty;
            var _d_ts = Get_d_ts_ForListFields(formXml, headers);
            if (_d_ts.EndsWith(",\r\n")) _d_ts = _d_ts.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return _d_ts;
        }
        private string GetForm_d_ts_Navigation(string formXml)
        {
            var _d_ts = string.Empty;
            var xdoc = XDocument.Parse(formXml);
            var navigations = (from x in xdoc
                               .Descendants("Navigation")
                               .Descendants("NavBar")
                               .Descendants("NavBarByRelationshipItem")
                               select (string)x?.Attribute("Id")).ToList();
            if (navigations.Count == 0) return string.Empty;
            foreach (var navigation in navigations)
                _d_ts += $"\t\t\t{navigation}: DevKit.Form.Controls.ControlNavigationItem,\r\n";
            _d_ts = _d_ts.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return _d_ts;
        }
        private string GetForm_d_ts_Footer(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var footers = (from x in xdoc.Descendants("footer")
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
                           }).ToList();
            footers = footers.OrderBy(x => x.Name).ToList();
            if (footers.Count() == 0) return string.Empty;
            var _d_ts = Get_d_ts_ForListFields(formXml, footers);
            if (_d_ts.EndsWith(",\r\n")) _d_ts = _d_ts.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return _d_ts;
        }
        private string GetForm_d_ts_Process(string formXml)
        {
            if (Processes.Count == 0) return string.Empty;
            var _d_ts = string.Empty;
            var part1 = string.Empty;
            foreach (var entity in Processes)
            {
                var xaml = entity.GetAttributeValue<string>("xaml");
                var name = entity.GetAttributeValue<string>("name");
                name = Utility.SafeName(name);
                _d_ts += $"\t\tinterface Process{name} {{\r\n";
                var xdoc = XDocument.Parse(xaml);
                var ns = xdoc.Root?.GetNamespaceOfPrefix("mxswa");
                var rows2 = from x in xdoc.Descendants(ns + "Workflow").Elements(ns + "ActivityReference")
                            select new
                            {
                                DisplayName = x.Attribute("DisplayName")?.Value,
                                InnerText = x.ToString()
                            };
                var fields = new List<IdName>();
                foreach (var row in rows2)
                {
                    var arr = row.DisplayName.Split(" ".ToCharArray());
                    if (arr.Length == 1) continue;
                    const string pattern = @"DataFieldName=""\w*""";
                    foreach (Match m in Regex.Matches(row.InnerText, pattern))
                    {
                        var array = m.Value.Split("=".ToCharArray());
                        var fieldName = array[1].Substring(1, array[1].Length - 2);
                        var field = new IdName
                        {
                            ClassId = ControlClassId.SINGLE_LINE_OF_TEXT,
                            Name = fieldName,
                            Id = null,
                            ControlId = null
                        };
                        fields.Add(field);
                    }
                }
                fields = fields.OrderBy(f => f.Name).ToList();
                _d_ts += Get_d_ts_ForListFields(formXml, fields);
                _d_ts += $"\t\t}}\r\n";
                part1 += $"\t\t\t{name}: Process{name};\r\n";
            }
            _d_ts += $"\t\tinterface Process extends DevKit.Form.Controls.IControlProcess {{\r\n";
            _d_ts += part1;
            _d_ts += $"\t\t}}\r\n";
            return _d_ts;
        }
        private string GetForm_d_ts_Composite(string formXml)
        {
            return string.Empty;
        }
        private string GetForm_d_ts_QuickForm(string formXml)
        {
            return string.Empty;
        }
        private string GetForm_d_ts_Body_QuickCreate(string formXml)
        {
            return string.Empty;
        }
        private string GetForm_d_ts_Body(string formXml)
        {
            var part1 = string.Empty;
            var part2 = string.Empty;
            var part3 = $"\t\tinterface Tabs {{\r\n";
            var xdoc = XDocument.Parse(formXml);
            var rows = from x in xdoc.Descendants("tabs").Elements("tab")
                       select new
                       {
                           Name = x?.Attribute("name")?.Value,
                           InnerText = x?.ToString()
                       };
            int j = 1;
            foreach (var row in rows)
            {
                if (Utility.SafeName(row.Name).Length == 0) continue;
                var tabName = row.Name;
                //HOT FIXED for TAB
                if (EntityName == "EmailServerProfile" && tabName == "tab_3")
                {
                    tabName = tabName + j.ToString();
                    if (tabName == "tab_31") tabName = "tab_3";
                    j++;
                }

                part1 += $"\t\tinterface tab_{Utility.SafeName(tabName)}_Sections {{\r\n";
                var xdoc2 = XDocument.Parse(row.InnerText);
                var rows2 = from x2 in xdoc2.Descendants("columns").Descendants("column").Descendants("sections")
                        .Elements("section")
                            select new
                            {
                                name = x2.Attribute("name")?.Value
                            };
                int i = 1;
                foreach (var row2 in rows2)
                {
                    if (row2 == null) continue;
                    if (row2.name == null) continue;
                    if (row2.name.StartsWith("ref_pan")) continue;
                    var sectionName = row2.name;
                    //HOT FIXED!!!!
                    if (EntityName == "Feedback" && sectionName == "Content")
                    {
                        sectionName = sectionName + i.ToString();
                        if (sectionName == "Content1") sectionName = "Content";
                        i++;
                    }

                    part1 += $"\t\t\t{Utility.SafeName(sectionName)}: DevKit.Form.Controls.ControlSection;\r\n";
                }
                part1 += $"\t\t}}\r\n";

                part2 += $"\t\tinterface tab_{Utility.SafeName(tabName)} extends DevKit.Form.Controls.IControlTab {{\r\n";
                part2 += $"\t\t\tSection: tab_{Utility.SafeName(tabName)}_Sections;\r\n";
                part2 += $"\t\t}}\r\n";

                part3 += $"\t\t\t{Utility.SafeName(tabName)}: tab_{Utility.SafeName(tabName)};\r\n";

            }
            part3 += $"\t\t}}\r\n";
            var _d_ts = string.Empty;
            _d_ts = $"{part1}{part2}{part3}";
            _d_ts += $"\t\tinterface Body {{\r\n";
            if (part1.Length > 0 && part2.Length > 0)
                _d_ts += $"\t\t\tTab: Tabs;\r\n";
            var body = (from x in xdoc
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
            body = body.OrderBy(x => x.Name).ToList();
            _d_ts += Get_d_ts_ForListFields(formXml, body);
            if (_d_ts.EndsWith(",\r\n")) _d_ts = _d_ts.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            _d_ts += $"\t\t}}\r\n";
            return _d_ts;
        }
        private string Get_d_ts_ForListFields(string formXml, List<IdName> list)
        {
            var _d_ts = string.Empty;
            var previousName = string.Empty;
            var previousCount = 0;
            foreach (var item in list)
            {
                item.ClassId = GetARealClassId(formXml, item.ClassId, item.ControlId);
                if (item.Name != null && ControlClassId.CONTROLS.Contains(item.ClassId))
                {
                    var crmAttribute = Fields.FirstOrDefault(x => x.LogicalName == item.Name);
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
                    previousName = crmAttribute.SchemaName;
                    var jsdoc = string.Empty;
                    if (crmAttribute?.Description?.Length > 0)
                        jsdoc = $"\t\t\t/** {crmAttribute.Description} */\r\n";
                    if (crmAttribute.FieldType == AttributeTypeCode.Memo ||
                        crmAttribute.FieldType == AttributeTypeCode.String)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Form.Controls.ControlString;\r\n";
                    }
                    else if (crmAttribute.IsMultiSelectPicklist)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Form.Controls.ControlMultiOptionSet;\r\n";
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                             crmAttribute.FieldType == AttributeTypeCode.State ||
                             crmAttribute.FieldType == AttributeTypeCode.Status)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Form.Controls.ControlOptionSet;\r\n";
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.DateTime)
                    {
                        if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                        {
                            _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Form.Controls.ControlDate;\r\n";
                        }
                        else
                        {
                            _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Form.Controls.ControlDateTime;\r\n";
                        }
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.Lookup ||
                             crmAttribute.FieldType == AttributeTypeCode.Owner ||
                             crmAttribute.FieldType == AttributeTypeCode.Customer ||
                             crmAttribute.FieldType == AttributeTypeCode.PartyList)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Form.Controls.ControlLookup;\r\n";
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.Boolean)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Form.Controls.ControlBoolean;\r\n";
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.Money)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Form.Controls.ControlMoney;\r\n";
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.Integer)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Form.Controls.ControlInteger;\r\n";
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.Double)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Form.Controls.ControlDouble;\r\n";
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.Decimal)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Form.Controls.ControlDecimal;\r\n";
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.EntityName)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Form.Controls.ControlString;\r\n";
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.Uniqueidentifier)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Form.Controls.ControlString;\r\n";
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.ManagedProperty)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Form.Controls.ControlString;\r\n";
                    }
                    else
                    {
                        _d_ts += $"\t\t\t{item.Name}: DevKit.Form.Controls.ELSE1???;//{item.Id} - {item.ClassId} -- FOR DEBUG \r\n";
                    }
                }
                else if (ControlClassId.VIRTUAL_CONTROLS.Contains(item.ClassId))
                {
                    if (item.ClassId == ControlClassId.IFRAME)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Form.Controls.ControlIFrame;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.WEB_RESOURCE)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Form.Controls.ControlWebResource;\r\n";
                    }
                    else if (item.Id.ToLower() == "notescontrol" && item.ClassId == ControlClassId.NOTE)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Form.Controls.ControlNote;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.SUB_GRID)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Form.Controls.ControlGrid;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.EMAIL_ENGAGEMENT_ACTIONS)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Form.Controls.ControlEmailEngagement;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.EMAIL_RECIPIENT_ACTIVITY)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Form.Controls.ControlEmailRecipient;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.TIMER)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Form.Controls.ControlTimer;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.ACI_WIDGET)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Form.Controls.ControlAciWidget;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.QUICK_VIEW_FORM)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Form.Controls.ControlQuickView;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.MAP_CONTROL)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Form.Controls.ControlMap;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.ACTION_CARDS)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Form.Controls.ControlActionCards;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.POWERBI)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Form.Controls.ControlPowerBi;\r\n";
                    }
                    else
                    {
                        _d_ts += $"\t\t\t{item.Name}: DevKit.Form.Controls.ELSE2???;//{item.Id} - {item.ClassId} -- FOR DEBUG \r\n";
                    }
                }
                else
                {
                    if (item.Name != null)
                        _d_ts += $"\t\t\t{item.Name}: DevKit.Form.Controls.ELSE3???;//{item.Id} - {item.ClassId} -- FOR DEBUG \r\n";
                }
            }
            _d_ts = _d_ts.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return _d_ts;
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
            foreach(var row in rows2)
            {
                if(Guid.TryParse(row.id, out var guid))
                {
                    return guid.ToString().ToUpper();
                }
            }
            return classId;
        }

        private string GetForm_d_ts()
        {
            var _d_ts = string.Empty;
            //FORM
            foreach (var form in ProcessForms)
            {
                if (form.IsQuickCreate) continue;
                form.Name = FormHelper.GetFormName(form.Name, Class);
                _d_ts += $"\tnamespace Form{Utility.SafeName(form.Name)} {{\r\n";
                var form_d_ts_Header = GetForm_d_ts_Header(form.FormXml);
                if (form_d_ts_Header.Length > 0)
                {
                    _d_ts += $"\t\tinterface Header {{\r\n";
                    _d_ts += form_d_ts_Header;
                    _d_ts += $"\t\t}}\r\n";
                }
                var form_d_ts_Body = GetForm_d_ts_Body(form.FormXml);
                if (form_d_ts_Body.Length > 0)
                {
                    _d_ts += form_d_ts_Body;
                }
                var form_d_ts_Footer = GetForm_d_ts_Footer(form.FormXml);
                if (form_d_ts_Footer.Length > 0)
                {
                    _d_ts += $"\t\tinterface Footer {{\r\n";
                    _d_ts += form_d_ts_Footer;
                    _d_ts += $"\t\t}}\r\n";
                }

                var form_d_ts_Navigation = GetForm_d_ts_Navigation(form.FormXml);
                if (form_d_ts_Navigation.Length > 0)
                {
                    _d_ts += $"\t\tinterface Navigation {{\r\n";
                    _d_ts += form_d_ts_Navigation;
                    _d_ts += $"\t\t}}\r\n";
                }

                var form_d_ts_QuickForm = GetForm_d_ts_QuickForm(form.FormXml);
                if (form_d_ts_QuickForm.Length > 0)
                {
                    _d_ts += $"\t\tinterface QuickForm {{\r\n";
                    _d_ts += form_d_ts_QuickForm;
                    _d_ts += $"\t\t}}\r\n";
                }
                //var form_d_ts_Composite = GetForm_d_ts_Composite(form.FormXml);
                //if (form_d_ts_Composite.Length > 0)
                //{
                //    _d_ts += form_d_ts_Composite;
                //}
                var form_d_ts_Process = GetForm_d_ts_Process(form.FormXml);
                if (form_d_ts_Process.Length > 0)
                {
                    _d_ts += form_d_ts_Process;
                }
                _d_ts += $"\t}}\r\n";
                var formBase = string.Empty;
                var formName = Utility.SafeName(form.Name);
                formBase += $"\tclass Form{formName} extends DevKit.Form.IForm {{\r\n";
                formBase += $"\t\t/**\r\n";
                formBase += $"\t\t* DynamicsCrm.DevKit form {formName}\r\n";
                formBase += $"\t\t* @param executionContext the execution context\r\n";
                formBase += $"\t\t* @param defaultWebResourceName default resource name. E.g.: \"devkit_/resources/Resource\"\r\n";
                formBase += $"\t\t*/\r\n";
                formBase += $"\t\tconstructor(executionContext: any, defaultWebResourceName?: string);\r\n";
                formBase += $"\t\t/** Utility functions/methods/objects for Dynamics 365 form */\r\n";
                formBase += $"\t\tUtility: DevKit.Form.Utility;\r\n";
                formBase += $"\t\t/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */\r\n";
                formBase += $"\t\tWebApi: DevKit.Form.WebApi;\r\n";
                if (form_d_ts_Body.Length > 0)
                {
                    formBase += $"\t\t/** The Body section of form {formName} */\r\n";
                    formBase += $"\t\tBody: {ProjectName}.Form{formName}.Body;\r\n";
                }
                if (form_d_ts_Footer.Length > 0)
                {
                    formBase += $"\t\t/** The Footer section of form {formName} */\r\n";
                    formBase += $"\t\tFooter: {ProjectName}.Form{formName}.Footer;\r\n";
                }
                if (form_d_ts_Header.Length > 0)
                {
                    formBase += $"\t\t/** The Header section of form {formName} */\r\n";
                    formBase += $"\t\tHeader: {ProjectName}.Form{formName}.Header;\r\n";
                }
                if (form_d_ts_Navigation.Length > 0)
                {
                    formBase += $"\t\t/** The Navigation of form {formName} */\r\n";
                    formBase += $"\t\tNavigation: {ProjectName}.Form{formName}.Navigation;\r\n";
                }
                if (form_d_ts_QuickForm.Length > 0)
                {
                    formBase += $"\t\t/** The QuickForm of form {formName} */\r\n";
                    formBase += $"\t\tQuickForm: {ProjectName}.Form{formName}.QuickForm;\r\n";
                }
                //if(form_d_ts_Composite.Length > 0)
                //{
                //    formBase += $"\t\t/** The Composite of form {formName} */\r\n";
                //    formBase += $"\t\tComposite: {ProjectName}.Form{formName}.Composite;\r\n";
                //}
                if (form_d_ts_Process.Length > 0)
                {
                    formBase += $"\t\t/** The Process of form {formName} */\r\n";
                    formBase += $"\t\tProcess: {ProjectName}.Form{formName}.Process;\r\n";
                }
                formBase += $"\t}}\r\n";
                _d_ts += formBase;
            }
            //QUICK-CREATE
            foreach (var form in ProcessForms)
            {
                if (!form.IsQuickCreate) continue;
                form.Name = FormHelper.GetFormName(form.Name, Class);
                _d_ts += $"\tnamespace Form{Utility.SafeName(form.Name)} {{\r\n";
                var form_d_ts_Body_QuickCreate = GetForm_d_ts_Body(form.FormXml);
                if (form_d_ts_Body_QuickCreate.Length > 0)
                {
                    _d_ts += form_d_ts_Body_QuickCreate;
                }
                //var form_d_ts_Composite = GetForm_d_ts_Composite(form.FormXml);
                //if (form_d_ts_Composite.Length > 0)
                //{
                //    _d_ts += form_d_ts_Composite;
                //}
                _d_ts += $"\t}}\r\n";
                var formBase = string.Empty;
                var formName = Utility.SafeName(form.Name);
                formBase += $"\tclass Form{formName} extends DevKit.Form.IForm {{\r\n";
                formBase += $"\t\t/**\r\n";
                formBase += $"\t\t* DynamicsCrm.DevKit form {formName}\r\n";
                formBase += $"\t\t* @param executionContext the execution context\r\n";
                formBase += $"\t\t* @param defaultWebResourceName default resource name. E.g.: \"devkit_/resources/Resource\"\r\n";
                formBase += $"\t\t*/\r\n";
                formBase += $"\t\tconstructor(executionContext: any, defaultWebResourceName?: string);\r\n";
                formBase += $"\t\t/** Utility functions/methods/objects for Dynamics 365 form */\r\n";
                formBase += $"\t\tUtility: DevKit.Form.Utility;\r\n";
                formBase += $"\t\t/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */\r\n";
                formBase += $"\t\tWebApi: DevKit.Form.WebApi;\r\n";
                if (form_d_ts_Body_QuickCreate.Length > 0)
                {
                    formBase += $"\t\t/** The Body section of form {formName} */\r\n";
                    formBase += $"\t\tBody: {ProjectName}.Form{formName}.Body;\r\n";
                }
                //if (form_d_ts_Composite.Length > 0)
                //{
                //    formBase += $"\t\t/** The Composite of form {formName} */\r\n";
                //    formBase += $"\t\tComposite: {ProjectName}.Form{formName}.Composite;\r\n";
                //}
                formBase += $"\t}}\r\n";
                _d_ts += formBase;
            }
            return _d_ts;
        }
    }
}
