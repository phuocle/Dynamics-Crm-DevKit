using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Xml.Linq;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Helper;
using System;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk.Messages;
using System.Collections.Specialized;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Shared
{
    public class JsTypeScriptDeclaration2
    {
        private CrmServiceClient service = null;

        public JsTypeScriptDeclaration2(CrmServiceClient crmService)
        {
            service = crmService;
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
                _d_ts += $"///<reference path=\"devkit.d.ts\" />\r\n";
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
                IsDebugWebApi = IsDebugWebApi,
                JsFormVersion = "v2"
            };
            if (comment.Version == null)
            {
                comment.Version = Const.Version;
            }
            _d_ts += $"//{SimpleJson.SerializeObject(comment)}";
            _d_ts = _d_ts.Replace("\"", "'");
            return _d_ts;
        }
        private string GetOptionSet_d_ts()
        {
            var _d_ts = string.Empty;
            _d_ts += $"declare namespace OptionSet {{\r\n";
            _d_ts += $"\tnamespace {Class} {{\r\n";
            var fields = Fields.OrderBy(x => x.LogicalName).ToList();
            foreach (var crmAttribute in fields)
            {
                if (!crmAttribute.IsValidForRead) continue;
                if (crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                    crmAttribute.FieldType == AttributeTypeCode.State ||
                    crmAttribute.FieldType == AttributeTypeCode.Status ||
                    crmAttribute.IsMultiSelectPicklist)
                {
                    _d_ts += $"\t\tenum {crmAttribute.SchemaName} {{\r\n";
                    NameValueCollection values = UpdateOptionSetValues(crmAttribute.OptionSetValues);
                    foreach (string nvc in values)
                    {
                        _d_ts += $"\t\t\t/** {values[nvc]} */\r\n";
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
                        if (crmAttribute.LogicalName == "acceptingentityid") navigations = "acceptingentityid_queue;acceptingentityid_systemuser".Split(";".ToCharArray());
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
                    if (entities.Length == navigations.Length)
                    {
                        for (var j = 0; j < entities.Length; j++)
                        {
                            if (jdoc.Length > 0)
                                _d_ts += $"\t\t/** {jdoc} */\r\n";
                            _d_ts += $"\t\t{navigations[j]}: DevKit.WebApi.LookupValue{Readonly};\r\n";
                        }
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
            var navigations = (from x in xdoc.Descendants("Navigation").Descendants("NavBar")
                    .Descendants("NavBarByRelationshipItem")
                               select (string)x?.Attribute("Id")).ToList();
            navigations.Sort();
            if (navigations.Count == 0) return string.Empty;
            navigations.Sort();
            foreach (var navigation in navigations)
            {
                _d_ts += $"\t\t\t{navigation}: DevKit.Controls.NavigationItem,\r\n";
            }
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
            var processes = Processes.OrderBy(x => x.LogicalName);
            foreach (var entity in processes)
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
            _d_ts += $"\t\tinterface Process extends DevKit.Controls.IProcess {{\r\n";
            _d_ts += part1;
            _d_ts += $"\t\t}}\r\n";
            return _d_ts;
        }
        private string GetForm_d_ts_Grid(string formXml)
        {
            var _d_ts = string.Empty;
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
                if (temp.Contains($"\t\t\t{field.Id}: DevKit.Controls.Grid;\r\n")) continue;
                temp += $"\t\t\t{field.Id}: DevKit.Controls.Grid;\r\n";
            }
            if (temp.Length > 0)
            {
                _d_ts += $"\t\tinterface Grid {{\r\n";
                _d_ts += temp;
                _d_ts += $"\t\t}}\r\n";
                return _d_ts;
            }
            return string.Empty;
        }
        private string GetForm_d_ts_Composite(string formXml)
        {
            return string.Empty;
        }
        private string GetForm_d_ts_QuickForm(string formXml)
        {
            var _d_ts = string.Empty;
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
            var temp1 = string.Empty;
            var temp2 = string.Empty;
            foreach (var field in fields)
            {
                var classId = GetARealClassId(formXml, field.ClassId, field.ControlId);
                if (classId != ControlClassId.QUICK_VIEW_FORM) continue;
                temp2 += GetBodyOfQuickView(formXml, field.Id);
                temp1 += $"\t\tinterface quickForm_{field.Id} extends DevKit.Controls.IQuickView {{\r\n";
                temp1 += $"\t\t\tBody: quickForm_{field.Id}_Body;\r\n";
                temp1 += $"\t\t}}\r\n";
                temp += $"\t\t\t{field.Id}: quickForm_{field.Id};\r\n";
            }
            if (temp.Length > 0)
            {
                _d_ts += temp2;
                _d_ts += temp1;
                _d_ts += $"\t\tinterface QuickForm {{\r\n";
                _d_ts += temp;
                _d_ts += $"\t\t}}\r\n";
                return _d_ts;
            }
            return _d_ts;
        }

        private string GetBodyOfQuickView(string formXml, string id)
        {
            var _d_ts = string.Empty;
            _d_ts += $"\t\tinterface quickForm_{id}_Body {{\r\n";
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
            foreach(var field in fields)
            {
                if (field.ClassId == ControlClassId.SUB_GRID || field.ClassId == ControlClassId.SUB_GRID_PANEL || field.ClassId == ControlClassId.TIMER) continue;
                var request = new RetrieveAttributeRequest
                {
                    EntityLogicalName = quickViewEntityLogicalName,
                    LogicalName = field.Id,
                    RetrieveAsIfPublished = false
                };
                var response = (RetrieveAttributeResponse)service.Execute(request);
                _d_ts += $"\t\t\t{response.AttributeMetadata.SchemaName}: DevKit.Controls.QuickView;\r\n";
            }
            _d_ts += $"\t\t}}\r\n";
            return _d_ts;
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
            var rows = service.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return;
            var entity = rows.Entities[0];
            formXml = entity.GetAttributeValue<string>("formxml");
            entityLogicalName = entity.GetAttributeValue<string>("objecttypecode");
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
            var existTabs = new List<string>();
            rows = rows.OrderBy(x => x.Name).ToList();
            foreach (var row in rows)
            {
                if (Utility.SafeName(row.Name).Length == 0) continue;
                var tabName = row.Name;
                if (existTabs.Contains(Utility.SafeName(tabName))) continue; else existTabs.Add(Utility.SafeName(tabName));
                part1 += $"\t\tinterface tab_{Utility.SafeName(tabName)}_Sections {{\r\n";
                var xdoc2 = XDocument.Parse(row.InnerText);
                var rows2 = from x2 in xdoc2.Descendants("columns").Descendants("column").Descendants("sections")
                        .Elements("section")
                            select new
                            {
                                name = x2.Attribute("name")?.Value
                            };
                var existSections = new List<string>();
                rows2 = rows2.OrderBy(x => x.name).ToList();
                foreach (var row2 in rows2)
                {
                    if (row2 == null) continue;
                    if (row2.name == null) continue;
                    //if (row2.name.StartsWith("ref_pan")) continue;
                    var sectionName = row2.name;
                    if (existSections.Contains(Utility.SafeName(sectionName))) continue; else existSections.Add(Utility.SafeName(sectionName));
                    part1 += $"\t\t\t{Utility.SafeName(sectionName)}: DevKit.Controls.Section;\r\n";
                }
                part1 += $"\t\t}}\r\n";

                part2 += $"\t\tinterface tab_{Utility.SafeName(tabName)} extends DevKit.Controls.ITab {{\r\n";
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
                            Name = x?.Attribute("datafieldname")?.Value ?? x?.Attribute("id")?.Value,
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

            var listVirtualControls = new List<string>();

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
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.String;\r\n";
                    }
                    else if (crmAttribute.IsMultiSelectPicklist)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.MultiOptionSet;\r\n";
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                             crmAttribute.FieldType == AttributeTypeCode.State ||
                             crmAttribute.FieldType == AttributeTypeCode.Status)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.OptionSet;\r\n";
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.DateTime)
                    {
                        if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                        {
                            _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.Date;\r\n";
                        }
                        else
                        {
                            _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.DateTime;\r\n";
                        }
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.Lookup ||
                             crmAttribute.FieldType == AttributeTypeCode.Owner ||
                             crmAttribute.FieldType == AttributeTypeCode.Customer ||
                             crmAttribute.FieldType == AttributeTypeCode.PartyList)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.Lookup;\r\n";
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.Boolean)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.Boolean;\r\n";
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.Money)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.Money;\r\n";
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.Integer)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.Integer;\r\n";
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.Double)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.Double;\r\n";
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.Decimal)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.Decimal;\r\n";
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.EntityName)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.String;\r\n";
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.Uniqueidentifier)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.String;\r\n";
                    }
                    else if (crmAttribute.FieldType == AttributeTypeCode.ManagedProperty)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.String;\r\n";
                    }
                    else
                    {
                        _d_ts += $"\t\t\t{item.Name}: DevKit.Controls.ELSE1???;//{item.Id} - {item.ClassId} -- FOR DEBUG \r\n";
                    }
                }
                else if (ControlClassId.VIRTUAL_CONTROLS.Contains(item.ClassId))
                {
                    if (listVirtualControls.Contains(item.Id))
                        continue;
                    else
                        listVirtualControls.Add(item.Id);
                    if (item.ClassId == ControlClassId.IFRAME)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.IFrame;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.WEB_RESOURCE)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.WebResource;\r\n";
                    }
                    else if (item.Id.ToLower() == "notescontrol" && item.ClassId == ControlClassId.NOTE)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.Note;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.EMAIL_ENGAGEMENT_ACTIONS)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.EmailEngagement;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.EMAIL_RECIPIENT_ACTIVITY)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.EmailRecipient;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.TIMER)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.Timer;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.ACI_WIDGET)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.AciWidget;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.MAP_CONTROL)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.Map;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.ACTION_CARDS)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.ActionCards;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.POWERBI)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.PowerBi;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.FILE)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.File;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.IMAGE)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.Image;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.UNKNOWN_1 ||
                             item.ClassId == ControlClassId.UNKNOWN_2 ||
                             item.ClassId == ControlClassId.UNKNOWN_3 ||
                             item.ClassId == ControlClassId.UNKNOWN_4 ||
                             item.ClassId == ControlClassId.UNKNOWN_5 ||
                             item.ClassId == ControlClassId.SUB_GRID ||
                             item.ClassId == ControlClassId.SUB_GRID_PANEL ||
                             item.ClassId == ControlClassId.QUICK_VIEW_FORM ||
                             item.ClassId == ControlClassId.CASERESEARCH_LINKCONTROL ||
                             item.ClassId == ControlClassId.KBVIEWER ||
                             item.ClassId == ControlClassId.CASE_KBSEARCHCONTROL ||
                             item.ClassId == ControlClassId.ATTACHMENT ||
                             item.ClassId == ControlClassId.ISMANAGED ||
                             item.ClassId == ControlClassId.CONNECTIONROLEOBJECTTYPECODELIST||
                             item.ClassId == ControlClassId.DYNAMICPROPERTIESLIST_LINKCONTROL ||
                             item.ClassId == ControlClassId.MSDYN_SESSIONTYPE ||
                             item.ClassId == ControlClassId.MSDYN_NAME ||
                             item.ClassId == ControlClassId.WEBRESOURCE_POSTCONVERSATIONSURVEYDISCLAIMER ||
                             item.ClassId == ControlClassId.WEBRESOURCE_URL ||
                             item.ClassId == ControlClassId.WEBRESOURCE_POSTCONVERSATIONSURVEYDISCLAIMER2 ||
                             item.ClassId == ControlClassId.WEBRESOURCE_POSTCONVERSATIONSURVEYDISCLAIMER3 ||
                             item.ClassId == ControlClassId.WEBRESOURCE_WECHATCALLBACKURL ||
                             item.ClassId == ControlClassId.MSDYN_SOURCEENTITYNAME
                             )
                        continue;
                    else
                    {
                        _d_ts += $"\t\t\t{item.Name}: DevKit.Controls.ELSE2???;//{item.Id} - {item.ClassId} -- FOR DEBUG \r\n";
                    }
                }
                else
                {
                    if (item.Name != null)
                        _d_ts += $"\t\t\t{item.Name}: DevKit.Controls.ELSE3???;//{item.Id} - {item.ClassId} -- FOR DEBUG \r\n";
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
            foreach (var row in rows2)
            {
                if (Guid.TryParse(row.id, out var guid))
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
                    _d_ts += $"\t\tinterface Header extends DevKit.Controls.IHeader {{\r\n";
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
                    _d_ts += $"\t\tinterface Footer extends DevKit.Controls.IFooter {{\r\n";
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
                    _d_ts += form_d_ts_QuickForm;
                }
                var form_d_ts_Process = GetForm_d_ts_Process(form.FormXml);
                if (form_d_ts_Process.Length > 0)
                {
                    _d_ts += form_d_ts_Process;
                }
                var form_d_ts_Grid = GetForm_d_ts_Grid(form.FormXml);
                if (form_d_ts_Grid.Length > 0)
                {
                    _d_ts += form_d_ts_Grid;
                }
                _d_ts += $"\t}}\r\n";
                var formBase = string.Empty;
                var formName = Utility.SafeName(form.Name);
                formBase += $"\tclass Form{formName} extends DevKit.IForm {{\r\n";
                formBase += $"\t\t/**\r\n";
                formBase += $"\t\t* DynamicsCrm.DevKit form {formName}\r\n";
                formBase += $"\t\t* @param executionContext the execution context\r\n";
                formBase += $"\t\t* @param defaultWebResourceName default resource name. E.g.: \"devkit_/resources/Resource\"\r\n";
                formBase += $"\t\t*/\r\n";
                formBase += $"\t\tconstructor(executionContext: any, defaultWebResourceName?: string);\r\n";
                formBase += $"\t\t/** Utility functions/methods/objects for Dynamics 365 form */\r\n";
                formBase += $"\t\tUtility: DevKit.Utility;\r\n";
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
                if (form_d_ts_Process.Length > 0)
                {
                    formBase += $"\t\t/** The Process of form {formName} */\r\n";
                    formBase += $"\t\tProcess: {ProjectName}.Form{formName}.Process;\r\n";
                }
                if (form_d_ts_Grid.Length > 0)
                {
                    formBase += $"\t\t/** The Grid of form {formName} */\r\n";
                    formBase += $"\t\tGrid: {ProjectName}.Form{formName}.Grid;\r\n";
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
                _d_ts += $"\t}}\r\n";
                var formBase = string.Empty;
                var formName = Utility.SafeName(form.Name);
                formBase += $"\tclass Form{formName} extends DevKit.IForm {{\r\n";
                formBase += $"\t\t/**\r\n";
                formBase += $"\t\t* DynamicsCrm.DevKit form {formName}\r\n";
                formBase += $"\t\t* @param executionContext the execution context\r\n";
                formBase += $"\t\t* @param defaultWebResourceName default resource name. E.g.: \"devkit_/resources/Resource\"\r\n";
                formBase += $"\t\t*/\r\n";
                formBase += $"\t\tconstructor(executionContext: any, defaultWebResourceName?: string);\r\n";
                formBase += $"\t\t/** Utility functions/methods/objects for Dynamics 365 form */\r\n";
                formBase += $"\t\tUtility: DevKit.Utility;\r\n";
                if (form_d_ts_Body_QuickCreate.Length > 0)
                {
                    formBase += $"\t\t/** The Body section of form {formName} */\r\n";
                    formBase += $"\t\tBody: {ProjectName}.Form{formName}.Body;\r\n";
                }
                formBase += $"\t}}\r\n";
                _d_ts += formBase;
            }
            return _d_ts;
        }
    }
}
