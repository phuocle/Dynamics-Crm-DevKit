using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Metadata;
using PL.DynamicsCrm.DevKit.Shared.Xrm;

namespace PL.DynamicsCrm.DevKit.Shared
{
    public class JsIntellisense2
    {
        private class IdName
        {
            public string Id { get; set; }
            public string Name { get; set; }
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


        public JsIntellisense2(OrganizationServiceProxy crmService)
        {

        }
        public string Intellisense
        {
            get
            {
                var _d_ts = string.Empty;
                _d_ts += $"///<reference path='devkit.d.ts' />\r\n";
                _d_ts += $"declare namespace {ProjectName} {{\r\n";
                _d_ts += GetForm_d_ts();
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
            var comment = new CommentIntellisense()
            {
                JsForm = ProcessForms.Select(f => f.Name).ToList<string>(),
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
            _d_ts += $"\t}}\r\n";
            _d_ts += $"}}\r\n";
            return _d_ts;
        }
        private string GetWebApi_d_ts()
        {
            var _d_ts = string.Empty;
            _d_ts += $"\tclass {Class}Api {{\r\n";
            _d_ts += $"\t\t/**\r\n";
            _d_ts += $"\t\t* PL.DynamicsCrm.DevKit {Class}Api\r\n";
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
                        for (var j = 0; j < entities.Length; j++)
                        {
                            if (jdoc.Length > 0)
                                _d_ts += $"\t\t/** {jdoc} */\r\n";
                            _d_ts += $"\t\t{navigations[j]}: DevKit.WebApi.LookupValue{Readonly};\r\n";
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
                    if (crmAttribute.LogicalName == "entityimage")
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
                _d_ts += $"\t\t/** The array of object that can cast object to ActivityPartyApi class */\r\n";;
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
                                Id = x?.Attribute("id").Value
                            }).ToList();
            headers = headers.OrderBy(x => x.Name).ToList();
            var _d_ts = Get_d_ts_ForListFields(headers);
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
            foreach (var navigation in navigations)
                _d_ts += $"\t\t\t{navigation}: DevKit.Form.Controls.NavigationItem,\r\n";
            _d_ts = _d_ts.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return _d_ts;
        }

        private string GetForm_d_ts_Footer(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var headers = (from x in xdoc.Descendants("footer")
                           .Descendants("rows")
                           .Descendants("row")
                           .Descendants("cell")
                           .Descendants("control")
                           select new IdName
                           {
                               Name = x?.Attribute("datafieldname")?.Value,
                               Id = x?.Attribute("id").Value
                           }).ToList();
            headers = headers.OrderBy(x => x.Name).ToList();
            var _d_ts = Get_d_ts_ForListFields(headers);
            if (_d_ts.EndsWith(",\r\n")) _d_ts = _d_ts.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return _d_ts;
        }

        private string Get_d_ts_ForListFields(List<IdName> list)
        {
            var _d_ts = string.Empty;
            var previousName = string.Empty;
            var previousCount = 0;
            foreach (var item in list)
            {
                if (item.Name != null)
                {
                    var crmAttribute = Fields.FirstOrDefault(x => x.LogicalName == item.Name);
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
                             crmAttribute.FieldType == AttributeTypeCode.Customer)
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
                    else
                    {
                        _d_ts += $"//{jsdoc}\t\t\t{name}: DevKit.Form.Controls.???;\r\n";
                    }
                }
                else if (item.Id.ToLower().StartsWith("IFRAME_".ToLower()))
                {
                    _d_ts += $"\t\t\t{item.Id}: DevKit.Form.Controls.ControlIFrame;\r\n";
                }
                else if (item.Id.ToLower().StartsWith("WebResource_".ToLower()))
                {
                    _d_ts += $"\t\t\t{item.Id}: DevKit.Form.Controls.ControlWebResource;\r\n";
                }
            }
            _d_ts = _d_ts.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return _d_ts;
        }

        private string GetForm_d_ts()
        {
            var _d_ts = string.Empty;
            foreach (var form in ProcessForms)
            {
                if (form.IsQuickCreate) continue;
                _d_ts += $"\tnamespace Form{GetSafeName(form.Name)} {{\r\n";
                var form_d_ts_Header = GetForm_d_ts_Header(form.FormXml);
                if (form_d_ts_Header.Length > 0)
                {
                    _d_ts += $"\t\tinterface Header {{\r\n";
                    _d_ts += form_d_ts_Header;
                    _d_ts += $"\t\t}}\r\n";
                }

                _d_ts += $"\t\tinterface Body {{\r\n";
                _d_ts += $"\t\t}}\r\n";

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

                _d_ts += $"\t\tinterface QuickForm {{\r\n";
                _d_ts += $"\t\t}}\r\n";
                //_d_ts += $"\t\tinterface Composite {{\r\n";
                //_d_ts += $"\t\t}}\r\n";
                _d_ts += $"\t\tinterface Process extends DevKit.Form.Controls.ProcessBase {{\r\n";
                _d_ts += $"\t\t}}\r\n";
                _d_ts += $"\t}}\r\n";
                var formBase = Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Wizard.data.FormBase.js");
                formBase = formBase.Replace(@"{0}", GetSafeName(form.Name));
                formBase = formBase.Replace(@"{1}", ProjectName);
                _d_ts += formBase;
            }
            return _d_ts;
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
    }
}
