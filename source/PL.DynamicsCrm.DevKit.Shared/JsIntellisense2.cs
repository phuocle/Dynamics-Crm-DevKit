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
            //_d_ts += $"\t\tenum RollupState: {{\r\n";
            //_d_ts += $"\t\t\t/** 0 - Attribute value is yet to be calculated */\r\n";
            //_d_ts += $"\t\t\tNotCalculated,\r\n";
            //_d_ts += $"\t\t\t/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */\r\n";
            //_d_ts += $"\t\t\tCalculated,\r\n";
            //_d_ts += $"\t\t\t/** 2 - Attribute value calculation lead to overflow error */\r\n";
            //_d_ts += $"\t\t\tOverflowError,\r\n";
            //_d_ts += $"\t\t\t/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */\r\n";
            //_d_ts += $"\t\t\tOtherError,\r\n";
            //_d_ts += $"\t\t\t/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */\r\n";
            //_d_ts += $"\t\t\tRetryLimitExceeded,\r\n";
            //_d_ts += $"\t\t\t/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */\r\n";
            //_d_ts += $"\t\t\tHierarchicalRecursionLimitReached,\r\n";
            //_d_ts += $"\t\t\t/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */\r\n";
            //_d_ts += $"\t\t\tLoopDetected\r\n";
            //_d_ts += $"\t\t}},\r\n";
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
            //_d_ts += $"\t\t/** A collection OptionSet of {Class} enttiy */\r\n";
            //_d_ts += $"\t\tOptionSet: {Class}OptionSet;\r\n";
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
                if (!crmAttribute.IsValidForCreate && !crmAttribute.IsValidForUpdate)
                    jdoc = "ReadOnly - ";
                if (crmAttribute.FieldType != AttributeTypeCode.Customer && crmAttribute?.Description?.Length > 0)
                    jdoc += crmAttribute.Description;
                if (jdoc.EndsWith(" - "))
                    jdoc = jdoc.Substring(0, jdoc.Length - " - ".Length);
                if (crmAttribute.FieldType == AttributeTypeCode.Picklist ||
                    crmAttribute.FieldType == AttributeTypeCode.State ||
                    crmAttribute.FieldType == AttributeTypeCode.Status
                    )
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.OptionSetValue;\r\n";
                }
                else if (crmAttribute.IsMultiSelectPicklist)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.MultiOptionSetValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Lookup)
                {
                    var entities = crmAttribute.EntityReferenceLogicalName.Split(";".ToCharArray());
                    if (entities.Length == 1)
                    {
                        if (jdoc.Length > 0)
                            _d_ts += $"\t\t/** {jdoc} */\r\n";
                        _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.LookupValue;\r\n";
                    }
                    else
                    {
                        var navigations = crmAttribute.NavigationPropertyName.Split(";".ToCharArray());
                        for (var j = 0; j < entities.Length; j++)
                        {
                            if (jdoc.Length > 0)
                                _d_ts += $"\t\t/** {jdoc} */\r\n";
                            _d_ts += $"\t\t{navigations[j]}: DevKit.WebApi.LookupValue;\r\n";
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
                        _d_ts += $"\t\t{navigations[j]}: DevKit.WebApi.LookupValue;\r\n";
                    }
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Owner)
                {
                    _d_ts += $"\t\t/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */\r\n";
                    _d_ts += $"\t\tOwnerId_systemuser: DevKit.WebApi.LookupValue;\r\n";
                    _d_ts += $"\t\t/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */\r\n";
                    _d_ts += $"\t\tOwnerId_team: DevKit.WebApi.LookupValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Memo ||
                    crmAttribute.FieldType == AttributeTypeCode.String)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.StringValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Boolean)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.BooleanValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.DateTime)
                {
                    if (crmAttribute.DateTimeBehavior == DateTimeBehavior.DateOnly)
                    {
                        if (jdoc.Length > 0)
                            _d_ts += $"\t\t/** {jdoc} */\r\n";
                        _d_ts += $"\t\t{crmAttribute.SchemaName}_DateOnly: DevKit.WebApi.DateOnlyValue;\r\n";
                    }
                    else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.TimeZoneIndependent)
                    {
                        if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                        {
                            if (jdoc.Length > 0)
                                _d_ts += $"\t\t/** {jdoc} */\r\n";
                            _d_ts += $"\t\t{crmAttribute.SchemaName}_TimezoneDateOnly: DevKit.WebApi.TimezoneDateOnlyValue;\r\n";
                        }
                        else
                        {
                            if (jdoc.Length > 0)
                                _d_ts += $"\t\t/** {jdoc} */\r\n";
                            _d_ts += $"\t\t{crmAttribute.SchemaName}_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue;\r\n";
                        }
                    }
                    else if (crmAttribute.DateTimeBehavior == DateTimeBehavior.UserLocal)
                    {
                        if (crmAttribute.DateTimeFormat == DateTimeFormat.DateOnly)
                        {
                            if (jdoc.Length > 0)
                                _d_ts += $"\t\t/** {jdoc} */\r\n";
                            _d_ts += $"\t\t{crmAttribute.SchemaName}_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;\r\n";
                        }
                        else
                        {
                            if (jdoc.Length > 0)
                                _d_ts += $"\t\t/** {jdoc} */\r\n";
                            _d_ts += $"\t\t{crmAttribute.SchemaName}_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;\r\n";
                        }
                    }
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Integer)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.IntegerValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.BigInt)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.BigIntValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Decimal)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.DecimalValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Double)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.DoubleValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Money)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.MoneyValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.Uniqueidentifier)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.GuidValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.CalendarRules)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.EntityCollectionValue;\r\n";
                }
                else if (crmAttribute.FieldType == AttributeTypeCode.ManagedProperty)
                {
                    if (jdoc.Length > 0)
                        _d_ts += $"\t\t/** {jdoc} */\r\n";
                    _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.ManagedPropertyValue;\r\n";
                }
                else
                {
                    if (crmAttribute.LogicalName == "entityimage")
                    {
                        if (jdoc.Length > 0)
                            _d_ts += $"\t\t/** {jdoc} */\r\n";
                        _d_ts += $"\t\t{crmAttribute.SchemaName}: DevKit.WebApi.StringValue;\r\n";
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

        private string GetForm_d_ts()
        {
            var _d_ts = string.Empty;
            return _d_ts;
        }
    }
}
