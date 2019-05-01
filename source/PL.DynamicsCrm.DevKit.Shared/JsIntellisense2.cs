using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Metadata;
using PL.DynamicsCrm.DevKit.Shared.Xrm;

namespace PL.DynamicsCrm.DevKit.Shared
{
    public class JsIntellisense2
    {
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
                _d_ts += GetOptionSet_d_ts();
                _d_ts += GetForm_d_ts();
                _d_ts += GetWebApi_d_ts();
                _d_ts += $"}}\r\n";
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
            _d_ts += $"\tinterface {Class}OptionSet {{\r\n";
            foreach (var crmAttribute in Fields)
            {
                if (!crmAttribute.IsValidForRead) continue;
                if (crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                    crmAttribute.FieldType == AttributeTypeCode.State ||
                    crmAttribute.FieldType == AttributeTypeCode.Status ||
                    crmAttribute.IsMultiSelectPicklist)
                {
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: {{\r\n";
                    foreach (string nvc in crmAttribute.OptionSetValues)
                    {
                        _d_ts += $"\t\t\t/** {crmAttribute.OptionSetValues[nvc]} */\r\n";
                        _d_ts += $"\t\t\t{nvc}: number,\r\n";
                    }
                    _d_ts = _d_ts.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
                    _d_ts += $"\t\t}},\r\n";
                }
            }
            _d_ts = _d_ts.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            _d_ts += $"\t}}\r\n";
            return _d_ts;
        }


        private string GetWebApi_d_ts()
        {
            var _d_ts = string.Empty;
            _d_ts += $"\tclass {Class}Api {{\r\n";
            _d_ts += $"\t\tconstructor(entity?: object);\r\n";
            _d_ts += $"\t\t/**\r\n";
            _d_ts += $"\t\t * Get the value of alias\r\n";
            _d_ts += $"\t\t * @param alias the alias value\r\n";
            _d_ts += $"\t\t * @param isMultiOptionSet true if the alias is multi optionset\r\n";
            _d_ts += $"\t\t */\r\n";
            _d_ts += $"\t\tgetAliasedValue(alias: string, isMultiOptionSet?: boolean): object;\r\n";
            _d_ts += $"\t\t/**\r\n";
            _d_ts += $"\t\t * Get the formatted value of alias\r\n";
            _d_ts += $"\t\t * @param alias the alias value\r\n";
            _d_ts += $"\t\t * @param isMultiOptionSet true if the alias is multi optionset\r\n";
            _d_ts += $"\t\t */\r\n";
            _d_ts += $"\t\tgetAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;\r\n";
            _d_ts += $"\t\t/** The entity of ODATA */\r\n";
            _d_ts += $"\t\tEntity: object;\r\n";
            _d_ts += $"\t\t/** The entity name */\r\n";
            _d_ts += $"\t\tEntityName: string;\r\n";
            _d_ts += $"\t\t/** The entity collection name */\r\n";
            _d_ts += $"\t\tEntityCollectionName: string;\r\n";
            _d_ts += $"\t\t/** A collection OptionSet of {Class} enttiy */\r\n";
            _d_ts += $"\t\tOptionSet: {Class}OptionSet;\r\n";
            _d_ts += $"\t\t/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */\r\n";
            _d_ts += $"\t\t\"@odata.etag\": string;\r\n";
            foreach (var crmAttribute in Fields)
            {
                if (crmAttribute.FieldType == AttributeTypeCode.Virtual && !crmAttribute.IsMultiSelectPicklist) continue;
                var jdoc = string.Empty;
                if (crmAttribute.FieldType != AttributeTypeCode.Owner)
                {
                    if (!crmAttribute.IsValidForCreate && !crmAttribute.IsValidForUpdate)
                        jdoc = "ReadOnly - ";
                    if (crmAttribute.FieldType != AttributeTypeCode.Customer && crmAttribute?.Description?.Length > 0)
                        jdoc += crmAttribute.Description;
                    if (jdoc.EndsWith(" - ")) jdoc = jdoc.Substring(0, jdoc.Length - " - ".Length);
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                }
                if (crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                    crmAttribute.FieldType == AttributeTypeCode.State ||
                    crmAttribute.FieldType == AttributeTypeCode.Status
                    )
                {
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: WebApi.OptionSetValue;\r\n";
                }
                else if (crmAttribute.IsMultiSelectPicklist)
                {
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: WebApi.MultiOptionSetValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Lookup)
                {
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: WebApi.LookupValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Customer)
                {
                    var entities = crmAttribute.EntityReferenceLogicalName.Split(";".ToCharArray());
                    var collections = crmAttribute.LogicalCollectionName.Split(";".ToCharArray());
                    var navigations = crmAttribute.NavigationPropertyName.Split(";".ToCharArray());
                    for (var j = 0; j < entities.Length; j++)
                    {
                        _d_ts += $"\t\t{navigations[j]}: WebApi.CustomerValue;\r\n";
                    }
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Owner)
                {
                    _d_ts += $"\t\t/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */\r\n";
                    _d_ts += $"\t\tOwnerId_systemuser: WebApi.OwnerUserValue;\r\n";
                    _d_ts += $"\t\t/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team. */\r\n";
                    _d_ts += $"\t\tOwnerId_team: WebApi.OwnerTeamValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Memo ||
                    crmAttribute.FieldType == AttributeTypeCode.String ||
                    crmAttribute.FieldType == AttributeTypeCode.EntityName)
                {
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: WebApi.StringValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Boolean)
                {
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: WebApi.BooleanValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.DateTime)
                {
                    if (crmAttribute.DateTimeBehavior == DateTimeBehavior.DateOnly)
                    {
                        _d_ts += $"\t\t{crmAttribute.SchemaName}_DateOnly: WebApi.DateOnlyValue;\r\n";
                    }
                    else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.TimeZoneIndependent)
                    {
                        if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                        {
                            _d_ts += $"\t\t{crmAttribute.SchemaName}_TimezoneDateOnly: WebApi.TimezoneDateOnlyValue;\r\n";
                        }
                        else
                        {
                            _d_ts += $"\t\t{crmAttribute.SchemaName}_TimezoneDateAndTime: WebApi.TimezoneDateAndTimeValue;\r\n";
                        }
                    }
                    else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.UserLocal)
                    {
                        if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                        {
                            _d_ts += $"\t\t{crmAttribute.SchemaName}_UtcDateOnly: WebApi.UtcDateOnlyValue;\r\n";
                        }
                        else
                        {
                            _d_ts += $"\t\t{crmAttribute.SchemaName}_UtcDateAndTime: WebApi.UtcDateAndTimeValue;\r\n";
                        }
                    }
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Integer)
                {
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: WebApi.IntegerValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.BigInt)
                {
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: WebApi.BigIntValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Decimal)
                {
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: WebApi.DecimalValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Double)
                {
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: WebApi.DoubleValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Money)
                {
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: WebApi.MoneyValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Uniqueidentifier)
                {
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: WebApi.GuidValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.CalendarRules ||
                    crmAttribute.FieldType == AttributeTypeCode.PartyList)
                {
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: WebApi.EntityCollectionValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.ManagedProperty)
                {
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: WebApi.ManagedPropertyValue;\r\n";
                }
            }
            _d_ts += $"\t}}\r\n";
            return _d_ts;
        }

        private string GetForm_d_ts()
        {
            var _d_ts = string.Empty;
            return _d_ts;
        }
    }
}
