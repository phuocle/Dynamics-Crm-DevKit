using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Xml.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Logic
{
    public class JsTypeScriptDeclaration
    {
        private const string NEW_LINE = "\r\n";
        private const string TAB = "\t";
        private static ServiceClient ServiceClient { get; set; }
        private static EntityMetadata EntityMetadata { get; set; }
        private static string RootNamespace { get; set; }
        private static List<string> FormNames = new List<string>();

        public static async Task<string> GetCodeAsync(ServiceClient serviceClient, EntityMetadata entityMetadata, string rootNamespace, bool isJsFormExist, bool isJsWebApiExist)
        {
            ServiceClient = serviceClient;
            EntityMetadata = entityMetadata;
            if (EntityMetadata.Attributes == null) EntityMetadata = await XrmHelper.FetchEntityMetadataAsync(serviceClient, entityMetadata.LogicalName);
            RootNamespace = rootNamespace;
            FormNames = new List<string>();
            var @namespace = Helper.GetNameSpace(RootNamespace);
            var _d_ts = string.Empty;
            _d_ts += $"//@ts-check{NEW_LINE}";
            _d_ts += $"///<reference path=\"devkit.d.ts\" />{NEW_LINE}";
            _d_ts += $"declare namespace {@namespace} {{{NEW_LINE}";
            if (isJsFormExist) _d_ts += await GetForm_d_tsAsync(@namespace);
            if (isJsWebApiExist) _d_ts += GetWebApi_d_ts(@namespace);
            _d_ts += $"}}{NEW_LINE}";
            _d_ts += GetOptionSet_d_ts();
            return _d_ts;
        }

        private static string GetOptionSet_d_ts()
        {
            var _d_ts = string.Empty;
            _d_ts += $"declare namespace OptionSet {{{NEW_LINE}";
            _d_ts += $"{TAB}namespace {EntityMetadata.SchemaName} {{{NEW_LINE}";
            foreach (var attribute in EntityMetadata.Attributes.OrderBy(x => x.SchemaName))
            {
                if (Helper.IsOptionSet(attribute))
                {
                    if (attribute.SchemaName == "OwnerIdType") continue;
                    var attributeSchemaName = Helper.SafeDeclareName(attribute.SchemaName, GeneratorType.jsform, EntityMetadata.SchemaName);
                    var values = attribute.OptionSetValues();
                    if (values.Count == 0)
                    {
                        _d_ts += $"{TAB}{TAB}enum {attributeSchemaName} {{{NEW_LINE}";
                        _d_ts = _d_ts.TrimEnd($",{NEW_LINE}".ToCharArray());
                        _d_ts += $"{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}}}{NEW_LINE}";
                    }
                    else
                    {
                        _d_ts += $"{TAB}{TAB}enum {attributeSchemaName} {{{NEW_LINE}";
                        foreach (var value in values)
                        {
                            _d_ts += $"{TAB}{TAB}{TAB}/** {value.Name} = {value.Value}*/{NEW_LINE}";
                            _d_ts += $"{TAB}{TAB}{TAB}{value.Name} = {value.Value},{NEW_LINE}";
                        }
                        _d_ts = _d_ts.TrimEnd($",{NEW_LINE}".ToCharArray());
                        _d_ts += $"{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}}}{NEW_LINE}";
                    }
                }
            }
            _d_ts += $"{TAB}{TAB}enum RollupState {{{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** NotCalculated = 0 - Attribute value is yet to be calculated */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}NotCalculated,{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}Calculated,{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** OverflowError = 2 - Attribute value calculation lead to overflow error */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}OverflowError,{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}OtherError,{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}RetryLimitExceeded,{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}HierarchicalRecursionLimitReached,{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}LoopDetected{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}}}{NEW_LINE}";
            _d_ts += $"{TAB}}}{NEW_LINE}";
            _d_ts += $"}}";
            return _d_ts;
        }

        private static string GetWebApi_d_ts(string @namespace)
        {
            var _d_ts = string.Empty;
            _d_ts += $"{TAB}export class {EntityMetadata.SchemaName}Api {{{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/**{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}* DynamicsCrm.DevKit {EntityMetadata.SchemaName}Api{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}* @param entity The entity object from OData response{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}*/{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}constructor(entity?: Record<string, any>){NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/**{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} * Get the raw value of an aliased field{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} * @param alias The alias field name{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} * @param isMultiOptionSet True if the field is a multi-option set{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} * @returns The raw value or null if not found{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/**{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} * Get the formatted value of an aliased field{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} * @param alias The alias field name{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} * @param isMultiOptionSet True if the field is a multi-option set{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} * @returns The formatted value or empty string if not found{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/** The entity object for Create/Update operations*/{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}readonly Entity: Record<string, any>;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/** The OData entity object containing raw data*/{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}readonly ODataEntity: Record<string, any>;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/** The entity name */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}readonly EntityName: string;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/** The entity collection name */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}readonly EntityCollectionName: string;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}readonly \"@odata.etag\": string;{NEW_LINE}";
            foreach (var attribute in EntityMetadata?.Attributes?.OrderBy(x => x.SchemaName))
            {
                var attributeSchemaName = Helper.SafeDeclareName(attribute.SchemaName, GeneratorType.jswebapi, EntityMetadata.SchemaName, attribute);
                if (attribute.AttributeType == AttributeTypeCode.PartyList || attribute.AttributeType == AttributeTypeCode.EntityName) continue;
                if (attribute.AttributeOf != null && attribute.AttributeTypeName != AttributeTypeDisplayName.ImageType) continue;

                var @readonly = (!(attribute.IsValidForCreate ?? false) && !(attribute.IsValidForUpdate ?? false)) ? "readonly " : string.Empty;
                var jdoc = attribute?.Description?.UserLocalizedLabel?.Label ?? string.Empty;
                switch (attribute.AttributeType)
                {
                    case AttributeTypeCode.Picklist:
                    case AttributeTypeCode.State:
                    case AttributeTypeCode.Status:
                        if (attribute is MultiSelectPicklistAttributeMetadata)
                        {
                            if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                            _d_ts += $"{TAB}{TAB}{@readonly}{attributeSchemaName}: Array<OptionSet.{EntityMetadata.SchemaName}.{attributeSchemaName}> | null;{NEW_LINE}";
                        }
                        else if (attribute is PicklistAttributeMetadata || attribute is StateAttributeMetadata || attribute is StatusAttributeMetadata)
                        {
                            if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                            _d_ts += $"{TAB}{TAB}{@readonly}{attributeSchemaName}: OptionSet.{EntityMetadata.SchemaName}.{attributeSchemaName} | null;{NEW_LINE}";
                        }
                        break;
                    case AttributeTypeCode.Owner:
                        _d_ts += $"{TAB}{TAB}/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}{@readonly}OwnerId_systemuser: string | null;{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}{@readonly}OwnerId_team: string | null;{NEW_LINE}";
                        break;
                    case AttributeTypeCode.Lookup:
                    case AttributeTypeCode.Customer:
                        if (attribute is LookupAttributeMetadata lookup)
                        {
                            if (lookup.Targets.Count() == 1)
                            {
                                if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                                _d_ts += $"{TAB}{TAB}{@readonly}{attributeSchemaName}: string | null;{NEW_LINE}";
                            }
                            else
                            {
                                if (attribute.LogicalName == "acceptingentityid")
                                {
                                    if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                                    _d_ts += $"{TAB}{TAB}{@readonly}acceptingentityid_queue: string | null;{NEW_LINE}";
                                    if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                                    _d_ts += $"{TAB}{TAB}{@readonly}acceptingentityid_systemuser: string | null;{NEW_LINE}";
                                }
                                else
                                {
                                    foreach (var entityLogicalName in lookup.Targets.Distinct())
                                    {
                                        var navigation = EntityMetadata.ManyToOneRelationships?.FirstOrDefault(x => x.ReferencingAttribute == attribute.LogicalName && x.ReferencedEntity == entityLogicalName);
                                        if (navigation?.ReferencingEntityNavigationPropertyName != null && navigation?.ReferencingEntityNavigationPropertyName.Length > 0)
                                        {
                                            var temp = $"{TAB}{TAB}{@readonly}{Helper.SafeDeclareName(navigation?.ReferencingEntityNavigationPropertyName, GeneratorType.jswebapi, EntityMetadata.SchemaName, attribute)}: string | null;{NEW_LINE}";
                                            if (!_d_ts.Contains(temp))
                                            {
                                                if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                                                _d_ts += temp;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        break;
                    case AttributeTypeCode.Memo:
                    case AttributeTypeCode.String:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}{@readonly}{attributeSchemaName}: string | null;{NEW_LINE}";
                        break;
                    case AttributeTypeCode.Boolean:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}{@readonly}{attributeSchemaName}: boolean | null;{NEW_LINE}";
                        break;
                    case AttributeTypeCode.DateTime:
                        if (attribute is DateTimeAttributeMetadata dateTime)
                        {
                            if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                            if (dateTime.DateTimeBehavior == DateTimeBehavior.DateOnly)
                                _d_ts += $"{TAB}{TAB}{@readonly}{attributeSchemaName}_DateOnly: Date | null;{NEW_LINE}";
                            else if (dateTime.DateTimeBehavior == DateTimeBehavior.TimeZoneIndependent)
                            {
                                if (dateTime.Format == DateTimeFormat.DateOnly)
                                    _d_ts += $"{TAB}{TAB}{@readonly}{attributeSchemaName}_TimezoneDateOnly: Date | null;{NEW_LINE}";
                                else
                                    _d_ts += $"{TAB}{TAB}{@readonly}{attributeSchemaName}_TimezoneDateAndTime: Date | null;{NEW_LINE}";
                            }
                            else
                            {
                                if (dateTime.Format == DateTimeFormat.DateOnly)
                                    _d_ts += $"{TAB}{TAB}{@readonly}{attributeSchemaName}_UtcDateOnly: Date | null;{NEW_LINE}";
                                else
                                    _d_ts += $"{TAB}{TAB}{@readonly}{attributeSchemaName}_UtcDateAndTime: Date | null;{NEW_LINE}";
                            }
                        }
                        break;
                    case AttributeTypeCode.Integer:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";

                        _d_ts += $"{TAB}{TAB}{@readonly}{attributeSchemaName}: number | null;{NEW_LINE}";
                        break;
                    case AttributeTypeCode.BigInt:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";

                        _d_ts += $"{TAB}{TAB}{@readonly}{attributeSchemaName}: number | null;{NEW_LINE}";
                        break;
                    case AttributeTypeCode.Decimal:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";

                        _d_ts += $"{TAB}{TAB}{@readonly}{attributeSchemaName}: number | null;{NEW_LINE}";
                        break;
                    case AttributeTypeCode.Double:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";

                        _d_ts += $"{TAB}{TAB}{@readonly}{attributeSchemaName}: number | null;{NEW_LINE}";
                        break;
                    case AttributeTypeCode.Money:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";

                        _d_ts += $"{TAB}{TAB}{@readonly}{attributeSchemaName}: number | null;{NEW_LINE}";
                        break;
                    case AttributeTypeCode.Uniqueidentifier:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";

                        _d_ts += $"{TAB}{TAB}{@readonly}{attributeSchemaName}: string | null;{NEW_LINE}";
                        break;
                    case AttributeTypeCode.ManagedProperty:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";

                        _d_ts += $"{TAB}{TAB}{@readonly}{attributeSchemaName}: string | null;{NEW_LINE}";
                        break;

                    default:
                        if (attribute is ImageAttributeMetadata image)
                        {
                            if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                            if ((image.IsPrimaryImage ?? false) && image.LogicalName != "entityimage")
                                _d_ts += GetGeneratorImageCode_d_ts("EntityImage", image.LogicalName, @readonly);
                            _d_ts += GetGeneratorImageCode_d_ts(attributeSchemaName, attribute.LogicalName, @readonly);
                        }
                        else if (attribute is FileAttributeMetadata file)
                        {
                            if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                            _d_ts += $"{TAB}{TAB}{@readonly}{attributeSchemaName}: string | null;{NEW_LINE}";
                        }
                        else if (attribute is MultiSelectPicklistAttributeMetadata)
                        {
                            if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                            _d_ts += $"{TAB}{TAB}{@readonly}{attributeSchemaName}: Array<OptionSet.{EntityMetadata.SchemaName}.{attributeSchemaName}> | null;{NEW_LINE}";
                        }
                        else
                            _d_ts += $"{attribute.AttributeType}-{attributeSchemaName}-{attribute.LogicalName} | null;{NEW_LINE}";
                        break;
                }
            }
            if (EntityMetadata.Attributes.Where(f => f.AttributeType == AttributeTypeCode.PartyList).Any())
            {
                _d_ts += $"{TAB}{TAB}/** The array of object that can cast object to ActivityPartyApi class */{NEW_LINE}"; ;
                _d_ts += $"{TAB}{TAB}ActivityParties: Array<Record<string, any>> | null;{NEW_LINE}";
            }
            _d_ts += $"{TAB}{TAB}/**{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}* Formatted values for all fields{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}* Contains the display-formatted values for fields that have formatting applied{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}*/{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}readonly FormattedValue: {{{NEW_LINE}";
            foreach (var attribute in EntityMetadata?.Attributes?.OrderBy(x => x.SchemaName))
            {
                var attributeSchemaName = Helper.SafeDeclareName(attribute.SchemaName, GeneratorType.jswebapi, EntityMetadata.SchemaName, attribute);
                if (attribute.AttributeType == AttributeTypeCode.PartyList || attribute.AttributeType == AttributeTypeCode.EntityName) continue;
                if (attribute.AttributeOf != null && attribute.AttributeTypeName != AttributeTypeDisplayName.ImageType) continue;

                var @readonly = "readonly ";
                var jdoc = attribute?.Description?.UserLocalizedLabel?.Label ?? string.Empty;
                switch (attribute.AttributeType)
                {
                    case AttributeTypeCode.Picklist:
                    case AttributeTypeCode.State:
                    case AttributeTypeCode.Status:
                        if (attribute is MultiSelectPicklistAttributeMetadata)
                        {
                            if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                            _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{attributeSchemaName}: Array<string>;{NEW_LINE}";
                        }
                        else if (attribute is PicklistAttributeMetadata || attribute is StateAttributeMetadata || attribute is StatusAttributeMetadata)
                        {
                            if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                            _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{attributeSchemaName}: string;{NEW_LINE}";
                        }
                        break;
                    case AttributeTypeCode.Owner:
                        _d_ts += $"{TAB}{TAB}{TAB}/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}{TAB}{@readonly}OwnerId_systemuser: string;{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}{TAB}/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}{TAB}{@readonly}OwnerId_team: string;{NEW_LINE}";
                        break;
                    case AttributeTypeCode.Lookup:
                    case AttributeTypeCode.Customer:
                        if (attribute is LookupAttributeMetadata lookup)
                        {
                            if (lookup.Targets.Count() == 1)
                            {
                                if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                                _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{attributeSchemaName}: string;{NEW_LINE}";
                            }
                            else
                            {
                                if (attribute.LogicalName == "acceptingentityid")
                                {
                                    if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                                    _d_ts += $"{TAB}{TAB}{TAB}{@readonly}acceptingentityid_queue: string;{NEW_LINE}";
                                    if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                                    _d_ts += $"{TAB}{TAB}{TAB}{@readonly}acceptingentityid_systemuser: string;{NEW_LINE}";
                                }
                                else
                                {
                                    foreach (var entityLogicalName in lookup.Targets.Distinct())
                                    {
                                        var navigation = EntityMetadata.ManyToOneRelationships?.FirstOrDefault(x => x.ReferencingAttribute == attribute.LogicalName && x.ReferencedEntity == entityLogicalName);
                                        if (navigation?.ReferencingEntityNavigationPropertyName != null && navigation?.ReferencingEntityNavigationPropertyName.Length > 0)
                                        {
                                            var temp = $"{TAB}{TAB}{TAB}{@readonly}{Helper.SafeDeclareName(navigation?.ReferencingEntityNavigationPropertyName, GeneratorType.jswebapi, EntityMetadata.SchemaName, attribute)}: string;{NEW_LINE}";
                                            if (!_d_ts.Contains(temp))
                                            {
                                                if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                                                _d_ts += temp;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        break;
                    case AttributeTypeCode.Memo:
                    case AttributeTypeCode.String:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{attributeSchemaName}: string;{NEW_LINE}";
                        break;
                    case AttributeTypeCode.Boolean:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{attributeSchemaName}: string;{NEW_LINE}";
                        break;
                    case AttributeTypeCode.DateTime:
                        if (attribute is DateTimeAttributeMetadata dateTime)
                        {
                            if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                            if (dateTime.DateTimeBehavior == DateTimeBehavior.DateOnly)
                                _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{attributeSchemaName}_DateOnly: string;{NEW_LINE}";
                            else if (dateTime.DateTimeBehavior == DateTimeBehavior.TimeZoneIndependent)
                            {
                                if (dateTime.Format == DateTimeFormat.DateOnly)
                                    _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{attributeSchemaName}_TimezoneDateOnly: string;{NEW_LINE}";
                                else
                                    _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{attributeSchemaName}_TimezoneDateAndTime: string;{NEW_LINE}";
                            }
                            else
                            {
                                if (dateTime.Format == DateTimeFormat.DateOnly)
                                    _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{attributeSchemaName}_UtcDateOnly: string;{NEW_LINE}";
                                else
                                    _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{attributeSchemaName}_UtcDateAndTime: string;{NEW_LINE}";
                            }
                        }
                        break;
                    case AttributeTypeCode.Integer:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}{TAB}/** {jdoc} */{NEW_LINE}";

                        _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{attributeSchemaName}: string;{NEW_LINE}";
                        break;
                    case AttributeTypeCode.BigInt:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}{TAB}/** {jdoc} */{NEW_LINE}";

                        _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{attributeSchemaName}: string;{NEW_LINE}";
                        break;
                    case AttributeTypeCode.Decimal:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}{TAB}/** {jdoc} */{NEW_LINE}";

                        _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{attributeSchemaName}: string;{NEW_LINE}";
                        break;
                    case AttributeTypeCode.Double:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}{TAB}/** {jdoc} */{NEW_LINE}";

                        _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{attributeSchemaName}: string;{NEW_LINE}";
                        break;
                    case AttributeTypeCode.Money:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}{TAB}/** {jdoc} */{NEW_LINE}";

                        _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{attributeSchemaName}: string;{NEW_LINE}";
                        break;
                    case AttributeTypeCode.Uniqueidentifier:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}{TAB}/** {jdoc} */{NEW_LINE}";

                        _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{attributeSchemaName}: string;{NEW_LINE}";
                        break;
                    case AttributeTypeCode.ManagedProperty:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}{TAB}/** {jdoc} */{NEW_LINE}";

                        _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{attributeSchemaName}: string;{NEW_LINE}";
                        break;

                    default:
                        if (attribute is ImageAttributeMetadata image)
                        {
                            if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                            if ((image.IsPrimaryImage ?? false) && image.LogicalName != "entityimage")
                                _d_ts += GetGeneratorImageCode_d_ts_2("EntityImage", image.LogicalName, @readonly);
                            _d_ts += GetGeneratorImageCode_d_ts_2(attributeSchemaName, attribute.LogicalName, @readonly);
                        }
                        else if (attribute is FileAttributeMetadata file)
                        {
                            if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                            _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{attributeSchemaName}: string;{NEW_LINE}";
                        }
                        else if (attribute is MultiSelectPicklistAttributeMetadata)
                        {
                            if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                            _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{attributeSchemaName}: Array<string>;{NEW_LINE}";
                        }
                        else
                            _d_ts += $"{attribute.AttributeType}-{attributeSchemaName}-{attribute.LogicalName};{NEW_LINE}";
                        break;
                }
            }
            _d_ts += $"{TAB}{TAB}}}{NEW_LINE}";
            _d_ts += $"{TAB}}}{NEW_LINE}";
            return _d_ts;
        }

        private static string GetGeneratorImageCode_d_ts(string schemaName, string logicalName, string @readonly)
        {
            var _d_ts = string.Empty;
            _d_ts += $"{TAB}{TAB}{@readonly}{schemaName}: string | null;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{@readonly}{schemaName}_Timestamp: number | null;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{@readonly}{schemaName}_URL: string | null;{NEW_LINE}";
            return _d_ts;
        }

        private static string GetGeneratorImageCode_d_ts_2(string schemaName, string logicalName, string @readonly)
        {
            var _d_ts = string.Empty;
            _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{schemaName}: string;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{schemaName}_Timestamp: string;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}{@readonly}{schemaName}_URL: string;{NEW_LINE}";
            return _d_ts;
        }

        private static async Task<string> GetForm_d_tsAsync(string @namespace)
        {
            var forms = await XrmHelper.GetEntityFormsAsync(ServiceClient, EntityMetadata.LogicalName);
            if (!forms.Any()) return string.Empty;
            var _d_ts = string.Empty;
            foreach (var form in forms.Where(x => x.FormType == FormType.Main).ToList())
                _d_ts += await GetFormMain_d_tsAsync(form, @namespace);
            foreach (var form in forms.Where(x => x.FormType == FormType.QuickCreate).ToList())
                _d_ts += GetFormQuickCreate_d_ts(form, @namespace);
            return _d_ts;
        }

        private static string GetFormQuickCreate_d_ts(SystemForm form, string @namespace)
        {
            var _d_ts = string.Empty;
            var formName = Helper.SafeIdentifier(Helper.GetFormName(form.Name, EntityMetadata.SchemaName));
            formName = GetUnquieFormName(formName);
            _d_ts += $"{TAB}namespace Form{formName} {{{NEW_LINE}";
            var form_d_ts_Body_QuickCreate = GetForm_d_ts_Body(form.FormXml);
            if (form_d_ts_Body_QuickCreate.Length > 0)
            {
                _d_ts += form_d_ts_Body_QuickCreate;
            }
            _d_ts += $"{TAB}}}{NEW_LINE}";
            _d_ts += $"{TAB}export class Form{formName} extends DevKit.IForm {{{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/**{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}* {form.Name} [Quick Create]{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}* @param executionContext the execution context{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}* @param defaultWebResourceName default resource name. E.g.: \"devkit_/resources/Resource\"{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}*/{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}constructor(executionContext: any, defaultWebResourceName?: string);{NEW_LINE}";
            if (form_d_ts_Body_QuickCreate.Length > 0)
            {
                _d_ts += $"{TAB}{TAB}/** The Body section of form {formName} */{NEW_LINE}";
                _d_ts += $"{TAB}{TAB}Body: {@namespace}.Form{formName}.Body;{NEW_LINE}";
            }
            _d_ts += $"{TAB}}}{NEW_LINE}";
            return _d_ts;
        }

        private static async Task<string> GetFormMain_d_tsAsync(SystemForm form, string @namespace)
        {
            var _d_ts = string.Empty;
            var formName = Helper.SafeIdentifier(Helper.GetFormName(form.Name, EntityMetadata.SchemaName));
            formName = GetUnquieFormName(formName);
            _d_ts += $"{TAB}namespace Form{formName} {{{NEW_LINE}";
            var form_d_ts_Header = GetForm_d_ts_Header(form.FormXml);
            if (form_d_ts_Header.Length > 0)
            {
                _d_ts += $"{TAB}{TAB}interface Header extends DevKit.Controls.IHeader {{{NEW_LINE}";
                _d_ts += form_d_ts_Header;
                _d_ts += $"{TAB}{TAB}}}{NEW_LINE}";
            }
            var form_d_ts_Body = GetForm_d_ts_Body(form.FormXml);
            if (form_d_ts_Body.Length > 0)
            {
                _d_ts += form_d_ts_Body;
            }

            var form_d_ts_Navigation = GetForm_d_ts_Navigation(form.FormXml);
            if (form_d_ts_Navigation.Length > 0)
            {
                _d_ts += $"{TAB}{TAB}interface Navigation {{{NEW_LINE}";
                _d_ts += form_d_ts_Navigation;
                _d_ts += $"{TAB}{TAB}}}{NEW_LINE}";
            }
            var form_d_ts_QuickForm = await GetForm_d_ts_QuickFormAsync(form.FormXml);
            if (form_d_ts_QuickForm.Length > 0)
            {
                _d_ts += form_d_ts_QuickForm;
            }
            var form_d_ts_Process = await GetForm_d_ts_ProcessAsync(form.FormXml);
            if (form_d_ts_Process.Length > 0)
            {
                _d_ts += form_d_ts_Process;
            }
            var form_d_ts_Grid = GetForm_d_ts_Grid(form.FormXml);
            if (form_d_ts_Grid.Length > 0)
            {
                _d_ts += form_d_ts_Grid;
            }
            _d_ts += $"{TAB}}}{NEW_LINE}";
            _d_ts += $"{TAB}export class Form{formName} extends DevKit.IForm {{{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/**{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}* {form.Name} [Main Form]{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}* @param executionContext the execution context{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}* @param defaultWebResourceName default resource name. E.g.: \"devkit_/resources/Resource\"{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}*/{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}constructor(executionContext: any, defaultWebResourceName?: string);{NEW_LINE}";
            if (form_d_ts_Body.Length > 0)
            {
                _d_ts += $"{TAB}{TAB}/** The Body section of form {formName} */{NEW_LINE}";
                _d_ts += $"{TAB}{TAB}Body: {@namespace}.Form{formName}.Body;{NEW_LINE}";
            }

            if (form_d_ts_Header.Length > 0)
            {
                _d_ts += $"{TAB}{TAB}/** The Header section of form {formName} */{NEW_LINE}";
                _d_ts += $"{TAB}{TAB}Header: {@namespace}.Form{formName}.Header;{NEW_LINE}";
            }
            if (form_d_ts_Navigation.Length > 0)
            {
                _d_ts += $"{TAB}{TAB}/** The Navigation of form {formName} */{NEW_LINE}";
                _d_ts += $"{TAB}{TAB}Navigation: {@namespace}.Form{formName}.Navigation;{NEW_LINE}";
            }
            if (form_d_ts_QuickForm.Length > 0)
            {
                _d_ts += $"{TAB}{TAB}/** The QuickForm of form {formName} */{NEW_LINE}";
                _d_ts += $"{TAB}{TAB}QuickForm: {@namespace}.Form{formName}.QuickForm;{NEW_LINE}";
            }
            if (form_d_ts_Process.Length > 0)
            {
                _d_ts += $"{TAB}{TAB}/** The Process of form {formName} */{NEW_LINE}";
                _d_ts += $"{TAB}{TAB}Process: {@namespace}.Form{formName}.Process;{NEW_LINE}";
            }
            if (form_d_ts_Grid.Length > 0)
            {
                _d_ts += $"{TAB}{TAB}/** The Grid of form {formName} */{NEW_LINE}";
                _d_ts += $"{TAB}{TAB}Grid: {@namespace}.Form{formName}.Grid;{NEW_LINE}";
            }
            _d_ts += $"{TAB}}}{NEW_LINE}";
            return _d_ts;
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

        private static string GetForm_d_ts_Grid(string formXml)
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
                          select new
                          {
                              Control = x.Descendants("control").FirstOrDefault(),
                              // Get label from cell's labels element
                              Label = x?.Descendants("labels")?.Descendants("label")?.FirstOrDefault()?.Attribute("description")?.Value
                          })
                          .Where(x => x.Control != null)
                          .Select(x => new
                          {
                              Name = Helper.SafeIdentifier(x.Control?.Attribute("datafieldname")?.Value),
                              Id = x.Control?.Attribute("id")?.Value,
                              ClassId = Helper.TrimGuid(x.Control?.Attribute("classid")?.Value?.ToUpper()),
                              ControlId = x.Control?.Attribute("uniqueid")?.Value,
                              Label = x.Label
                          })
                          .Distinct().ToList();
            fields = fields.OrderBy(x => x.Id).ToList();
            var temp = string.Empty;
            var addedGrids = new List<string>();
            foreach (var field in fields)
            {
                var classId = GetARealClassId(formXml, field.ClassId, field.ControlId);
                if (classId != ControlClassId.SUB_GRID && classId != ControlClassId.SUB_GRID_PANEL) continue;
                if (addedGrids.Contains(field.Id)) continue;
                addedGrids.Add(field.Id);
                // Add JSDoc for grid label
                if (!string.IsNullOrWhiteSpace(field.Label))
                    temp += $"{TAB}{TAB}{TAB}/** {field.Label} */{NEW_LINE}";
                temp += $"{TAB}{TAB}{TAB}{field.Id}: DevKit.Controls.Grid;{NEW_LINE}";
            }
            if (temp.Length > 0)
            {
                _d_ts += $"{TAB}{TAB}interface Grid {{{NEW_LINE}";
                _d_ts += temp;
                _d_ts += $"{TAB}{TAB}}}{NEW_LINE}";
                return _d_ts;
            }
            return string.Empty;
        }


        private static async Task<string> GetForm_d_ts_ProcessAsync(string formXml)
        {
            var code = string.Empty;
            await XrmHelper.EntitiesProcessForm.AddIfNotExistAsync(ServiceClient, EntityMetadata.LogicalName);
            var processes = XrmHelper.EntitiesProcessForm.Where(x => x.EntityLogicalName == EntityMetadata.LogicalName).OrderBy(x => x.Name);
            var _d_ts = string.Empty;
            var part1 = string.Empty;
            foreach (var process in processes)
            {
                var name = Helper.SafeIdentifier(process.Name);
                _d_ts += $"{TAB}{TAB}interface Process{name} {{{NEW_LINE}";
                var xdoc = XDocument.Parse(process.xaml);
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
                    if (arr.Length == 1 || arr[1] != EntityMetadata.LogicalName) continue;
                    const string pattern = @"DataFieldName=""\w*""";
                    foreach (Match m in Regex.Matches(row.InnerText, pattern))
                    {
                        var array = m.Value.Split("=".ToCharArray());
                        var fieldName = array[1].Substring(1, array[1].Length - 2);
                        var field = new IdName
                        {
                            ClassId = ControlClassId.SINGLE_LINE_OF_TEXT,
                            Name = Helper.SafeIdentifier(fieldName),
                            Id = null,
                            ControlId = null
                        };
                        fields.Add(field);
                    }
                }
                fields = fields.OrderBy(f => f.Name).ToList();
                _d_ts += Get_d_ts_ForListFields(formXml, fields, true);
                _d_ts += $"{TAB}{TAB}}}{NEW_LINE}";
                part1 += $"{TAB}{TAB}{TAB}{name}: Process{name};{NEW_LINE}";
            }
            if (part1.Length > 0)
            {
                _d_ts += $"{TAB}{TAB}interface Process extends DevKit.Controls.IProcess {{{NEW_LINE}";
                _d_ts += part1;
                _d_ts += $"{TAB}{TAB}}}{NEW_LINE}";
            }
            return _d_ts;
        }

        private static async Task<string> GetForm_d_ts_QuickFormAsync(string formXml)
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
                              Name = Helper.SafeIdentifier(x?.Attribute("datafieldname")?.Value),
                              Id = x?.Attribute("id").Value,
                              ClassId = Helper.TrimGuid(x?.Attribute("classid")?.Value?.ToUpper()),
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
                temp2 += await GetBodyOfQuickViewAsync(formXml, field.Id);
                temp1 += $"{TAB}{TAB}interface quickForm_{field.Id} extends DevKit.Controls.IQuickView {{{NEW_LINE}";
                temp1 += $"{TAB}{TAB}{TAB}Body: quickForm_{field.Id}_Body;{NEW_LINE}";
                temp1 += $"{TAB}{TAB}}}{NEW_LINE}";
                temp += $"{TAB}{TAB}{TAB}{field.Id}: quickForm_{field.Id};{NEW_LINE}";
            }
            if (temp.Length > 0)
            {
                _d_ts += temp2;
                _d_ts += temp1;
                _d_ts += $"{TAB}{TAB}interface QuickForm {{{NEW_LINE}";
                _d_ts += temp;
                _d_ts += $"{TAB}{TAB}}}{NEW_LINE}";
                return _d_ts;
            }
            return _d_ts;
        }

        private static async Task<string> GetBodyOfQuickViewAsync(string formXml, string id)
        {
            var _d_ts = string.Empty;
            _d_ts += $"{TAB}{TAB}interface quickForm_{id}_Body {{{NEW_LINE}";
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
            var quickViewFormXml = await GetFormXmlAsync(quickViewXml.formId, quickViewXml.entityLogicalName);
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
            if (quickViewMetadata.Attributes == null) quickViewMetadata = await XrmHelper.FetchEntityMetadataAsync(ServiceClient, quickViewXml.entityLogicalName);
            foreach (var field in fields)
            {
                var fieldAttribute = quickViewMetadata.Attributes.Where(x => x.LogicalName == field.Id).FirstOrDefault();
                if (fieldAttribute != null)
                {
                    // Add JSDoc for QuickView field
                    var jsdoc = string.Empty;
                    // Priority 1: Check Description first
                    if (fieldAttribute?.Description?.UserLocalizedLabel != null &&
                        !string.IsNullOrWhiteSpace(fieldAttribute.Description.UserLocalizedLabel.Label))
                    {
                        jsdoc = $"{TAB}{TAB}{TAB}/** {fieldAttribute.Description.UserLocalizedLabel.Label} */{NEW_LINE}";
                    }
                    // Priority 2: Fallback to DisplayName if no Description
                    else if (fieldAttribute?.DisplayName?.UserLocalizedLabel != null &&
                        !string.IsNullOrWhiteSpace(fieldAttribute.DisplayName.UserLocalizedLabel.Label))
                    {
                        jsdoc = $"{TAB}{TAB}{TAB}/** {fieldAttribute.DisplayName.UserLocalizedLabel.Label} */{NEW_LINE}";
                    }
                    _d_ts += $"{jsdoc}{TAB}{TAB}{TAB}{fieldAttribute.SchemaName}: DevKit.Controls.QuickView;{NEW_LINE}";
                }
            }

            _d_ts += $"{TAB}{TAB}}}{NEW_LINE}";
            return _d_ts;
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

        private static string GetForm_d_ts_Navigation(string formXml)
        {
            var _d_ts = string.Empty;
            var xdoc = XDocument.Parse(formXml);
            var navItems = (from x in xdoc
                            .Descendants("Navigation")
                            .Descendants("NavBar")
                            .Descendants("NavBarByRelationshipItem")
                            let id = x?.Attribute("Id")?.Value
                            let title = x?.Descendants("Titles")?.Descendants("Title")?.FirstOrDefault()?.Attribute("Text")?.Value
                            where !string.IsNullOrEmpty(id)
                            select new { Id = id, Title = title })
                            .Distinct()
                            .ToList();
            if (EntityMetadata.IsActivityParty == true && !navItems.Any(n => n.Id == "navActivities"))
            {
                navItems.Add(new { Id = "navActivities", Title = "Activities" });
            }
            navItems = navItems.OrderBy(x => x.Id).ToList();
            foreach (var nav in navItems)
            {
                // Add JSDoc for navigation title
                if (!string.IsNullOrWhiteSpace(nav.Title))
                    _d_ts += $"{TAB}{TAB}{TAB}/** {nav.Title} */{NEW_LINE}";
                _d_ts += $"{TAB}{TAB}{TAB}{Helper.SafeIdentifier(nav.Id)}: DevKit.Controls.NavigationItem;{NEW_LINE}";
            }
            return _d_ts;
        }


        private static string GetForm_d_ts_Body(string formXml)
        {
            var part1 = string.Empty;
            var part2 = string.Empty;
            var part3 = $"{TAB}{TAB}interface Tabs {{{NEW_LINE}";
            var xdoc = XDocument.Parse(formXml);
            var rows = from x in xdoc.Descendants("tabs").Elements("tab")
                       select new
                       {
                           Name = x?.Attribute("name")?.Value,
                           Label = x?.Descendants("labels")?.Descendants("label")?.FirstOrDefault()?.Attribute("description")?.Value,
                           InnerText = x?.ToString()
                       };
            var existTabs = new List<string>();
            rows = rows.OrderBy(x => x.Name).ToList();
            foreach (var row in rows)
            {
                if (Helper.SafeIdentifier(row.Name).Length == 0) continue;
                var tabName = row.Name;
                var tabLabel = row.Label;
                if (existTabs.Contains(Helper.SafeIdentifier(tabName))) continue; else existTabs.Add(Helper.SafeIdentifier(tabName));
                part1 += $"{TAB}{TAB}interface tab_{Helper.SafeIdentifier(tabName)}_Sections {{{NEW_LINE}";
                var xdoc2 = XDocument.Parse(row.InnerText);
                var rows2 = from x2 in xdoc2.Descendants("columns").Descendants("column").Descendants("sections")
                        .Elements("section")
                            select new
                            {
                                name = x2.Attribute("name")?.Value,
                                label = x2?.Descendants("labels")?.Descendants("label")?.FirstOrDefault()?.Attribute("description")?.Value
                            };
                var existSections = new List<string>();
                rows2 = rows2.OrderBy(x => x.name).ToList();
                foreach (var row2 in rows2)
                {
                    if (row2 == null) continue;
                    if (row2.name == null) continue;

                    var sectionName = row2.name;
                    var sectionLabel = row2.label;
                    if (existSections.Contains(Helper.SafeIdentifier(sectionName))) continue; else existSections.Add(Helper.SafeIdentifier(sectionName));
                    // Add JSDoc for section label
                    if (!string.IsNullOrWhiteSpace(sectionLabel))
                        part1 += $"{TAB}{TAB}{TAB}/** {sectionLabel} */{NEW_LINE}";
                    part1 += $"{TAB}{TAB}{TAB}{Helper.SafeIdentifier(sectionName)}: DevKit.Controls.Section;{NEW_LINE}";
                }
                part1 += $"{TAB}{TAB}}}{NEW_LINE}";

                // Add JSDoc for tab label
                if (!string.IsNullOrWhiteSpace(tabLabel))
                    part2 += $"{TAB}{TAB}/** {tabLabel} */{NEW_LINE}";
                part2 += $"{TAB}{TAB}interface tab_{Helper.SafeIdentifier(tabName)} extends DevKit.Controls.ITab {{{NEW_LINE}";
                part2 += $"{TAB}{TAB}{TAB}Section: tab_{Helper.SafeIdentifier(tabName)}_Sections;{NEW_LINE}";
                part2 += $"{TAB}{TAB}}}{NEW_LINE}";

                // Add JSDoc for tab in Tabs interface
                if (!string.IsNullOrWhiteSpace(tabLabel))
                    part3 += $"{TAB}{TAB}{TAB}/** {tabLabel} */{NEW_LINE}";
                part3 += $"{TAB}{TAB}{TAB}{Helper.SafeIdentifier(tabName)}: tab_{Helper.SafeIdentifier(tabName)};{NEW_LINE}";
            }
            part3 += $"{TAB}{TAB}}}{NEW_LINE}";
            var _d_ts = string.Empty;
            _d_ts = $"{part1}{part2}{part3}";
            _d_ts += $"{TAB}{TAB}interface Body {{{NEW_LINE}";
            if (part1.Length > 0 && part2.Length > 0)
                _d_ts += $"{TAB}{TAB}{TAB}Tab: Tabs;{NEW_LINE}";
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
                            Name = Helper.SafeIdentifier(x?.Attribute("datafieldname")?.Value) ?? Helper.SafeIdentifier(x?.Attribute("id")?.Value),
                            Id = x?.Attribute("id").Value,
                            ClassId = Helper.TrimGuid(x?.Attribute("classid")?.Value?.ToUpper()),
                            ControlId = x?.Attribute("uniqueid")?.Value
                        }).Distinct().ToList();
            body = body.OrderBy(x => x.Id).ToList();
            _d_ts += Get_d_ts_ForListFields(formXml, body, false);
            if (_d_ts.EndsWith(",{NEW_LINE}")) _d_ts = _d_ts.TrimEnd($",{NEW_LINE}".ToCharArray()) + $"{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}}}{NEW_LINE}";
            return _d_ts;
        }


        private static string GetForm_d_ts_Header(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var headers = (from x in xdoc.Descendants("header")
                           .Descendants("rows")
                           .Descendants("row")
                           .Descendants("cell")
                           .Descendants("control")
                           select new IdName
                           {
                               Name = Helper.SafeIdentifier(x?.Attribute("datafieldname")?.Value),
                               Id = Helper.SafeIdentifier(x?.Attribute("id").Value),
                               ClassId = Helper.TrimGuid(x?.Attribute("classid")?.Value?.ToUpper()),
                               ControlId = x?.Attribute("uniqueid")?.Value
                           }).ToList();
            headers = headers.OrderBy(x => x.Name).ToList();
            if (headers.Count() == 0) return string.Empty;
            var _d_ts = Get_d_ts_ForListFields(formXml, headers, false);
            if (_d_ts.EndsWith($",{NEW_LINE}")) _d_ts = _d_ts.TrimEnd($",{NEW_LINE}".ToCharArray()) + $"{NEW_LINE}";
            return _d_ts;
        }

        private static string Get_d_ts_ForListFields(string formXml, List<IdName> list, bool isBPF)
        {
            var code = string.Empty;
            var previousName = string.Empty;
            var previousCount = 0;

            var listVirtualControls = new List<string>();
            foreach (var item in list) item.Id = Helper.SafeIdentifier(item.Id);

            foreach (var item in list)
            {
                var _d_ts = string.Empty;
                item.ClassId = GetARealClassId(formXml, item.ClassId, item.ControlId);
                if (item.Name != null && ControlClassId.CONTROLS.Contains(item.ClassId))
                {
                    var crmAttribute = EntityMetadata.Attributes.FirstOrDefault(x => x.LogicalName == item.Name);
                    if (crmAttribute == null)
                        continue;
                    var name = Helper.SafeIdentifier(crmAttribute.SchemaName);
                    if (name == previousName)
                    {
                        previousCount = previousCount + 1;
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
                    previousName = Helper.SafeIdentifier(crmAttribute.SchemaName);
                    var jsdoc = string.Empty;
                    // Priority 1: Check Description first
                    if (crmAttribute?.Description?.UserLocalizedLabel != null &&
                        !string.IsNullOrWhiteSpace(crmAttribute.Description.UserLocalizedLabel.Label))
                    {
                        jsdoc = $"{TAB}{TAB}{TAB}/** {crmAttribute.Description.UserLocalizedLabel.Label} */{NEW_LINE}";
                    }
                    // Priority 2: Fallback to DisplayName if no Description
                    else if (crmAttribute?.DisplayName?.UserLocalizedLabel != null &&
                        !string.IsNullOrWhiteSpace(crmAttribute.DisplayName.UserLocalizedLabel.Label))
                    {
                        jsdoc = $"{TAB}{TAB}{TAB}/** {crmAttribute.DisplayName.UserLocalizedLabel.Label} */{NEW_LINE}";
                    }

                    if (crmAttribute.AttributeType == AttributeTypeCode.Memo ||
                        crmAttribute.AttributeType == AttributeTypeCode.String)
                    {
                        _d_ts += $"{jsdoc}{TAB}{TAB}{TAB}{name}: DevKit.Controls.String;{NEW_LINE}";
                    }
                    else if (crmAttribute is MultiSelectPicklistAttributeMetadata)
                    {
                        _d_ts += $"{jsdoc}{TAB}{TAB}{TAB}{name}: DevKit.Controls.MultiOptionSet;{NEW_LINE}";
                    }
                    else if (crmAttribute.AttributeType == AttributeTypeCode.Picklist ||
                             crmAttribute.AttributeType == AttributeTypeCode.State ||
                             crmAttribute.AttributeType == AttributeTypeCode.Status)
                    {
                        _d_ts += $"{jsdoc}{TAB}{TAB}{TAB}{name}: DevKit.Controls.OptionSet;{NEW_LINE}";
                    }
                    else if (crmAttribute is DateTimeAttributeMetadata dateTime)
                    {
                        if (dateTime.Format == DateTimeFormat.DateOnly)
                        {
                            _d_ts += $"{jsdoc}{TAB}{TAB}{TAB}{name}: DevKit.Controls.DateOnly;{NEW_LINE}";
                        }
                        else
                        {
                            _d_ts += $"{jsdoc}{TAB}{TAB}{TAB}{name}: DevKit.Controls.DateTime;{NEW_LINE}";
                        }
                    }
                    else if (crmAttribute.AttributeType == AttributeTypeCode.Lookup ||
                             crmAttribute.AttributeType == AttributeTypeCode.Owner ||
                             crmAttribute.AttributeType == AttributeTypeCode.Customer ||
                             crmAttribute.AttributeType == AttributeTypeCode.PartyList)
                    {
                        _d_ts += $"{jsdoc}{TAB}{TAB}{TAB}{name}: DevKit.Controls.Lookup;{NEW_LINE}";
                    }
                    else if (crmAttribute.AttributeType == AttributeTypeCode.Boolean)
                    {
                        _d_ts += $"{jsdoc}{TAB}{TAB}{TAB}{name}: DevKit.Controls.Boolean;{NEW_LINE}";
                    }
                    else if (crmAttribute.AttributeType == AttributeTypeCode.Money)
                    {
                        _d_ts += $"{jsdoc}{TAB}{TAB}{TAB}{name}: DevKit.Controls.Money;{NEW_LINE}";
                    }
                    else if (crmAttribute.AttributeType == AttributeTypeCode.Integer)
                    {
                        _d_ts += $"{jsdoc}{TAB}{TAB}{TAB}{name}: DevKit.Controls.Integer;{NEW_LINE}";
                    }
                    else if (crmAttribute.AttributeType == AttributeTypeCode.Double)
                    {
                        _d_ts += $"{jsdoc}{TAB}{TAB}{TAB}{name}: DevKit.Controls.Double;{NEW_LINE}";
                    }
                    else if (crmAttribute.AttributeType == AttributeTypeCode.Decimal)
                    {
                        _d_ts += $"{jsdoc}{TAB}{TAB}{TAB}{name}: DevKit.Controls.Decimal;{NEW_LINE}";
                    }
                    else if (crmAttribute.AttributeType == AttributeTypeCode.EntityName)
                    {
                        _d_ts += $"{jsdoc}{TAB}{TAB}{TAB}{name}: DevKit.Controls.String;{NEW_LINE}";
                    }
                    else if (crmAttribute.AttributeType == AttributeTypeCode.Uniqueidentifier)
                    {
                        _d_ts += $"{jsdoc}{TAB}{TAB}{TAB}{name}: DevKit.Controls.String;{NEW_LINE}";
                    }
                    else if (crmAttribute.AttributeType == AttributeTypeCode.ManagedProperty)
                    {
                        _d_ts += $"{jsdoc}{TAB}{TAB}{TAB}{name}: DevKit.Controls.String;{NEW_LINE}";
                    }
                    else if (crmAttribute is ImageAttributeMetadata)
                    {
                        _d_ts += $"{jsdoc}{TAB}{TAB}{TAB}{name}: DevKit.Controls.Image;{NEW_LINE}";
                    }
                    else if (crmAttribute is FileAttributeMetadata)
                    {
                        _d_ts += $"{jsdoc}{TAB}{TAB}{TAB}{name}: DevKit.Controls.File;{NEW_LINE}";
                    }
                    else
                    {
                        _d_ts += $"{TAB}{TAB}{TAB}{item.Name}: DevKit.Controls.ELSE1???;//{item.Id} - {item.ClassId} -- FOR DEBUG {NEW_LINE}";
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
                        _d_ts += $"{TAB}{TAB}{TAB}{item.Id}: DevKit.Controls.IFrame;{NEW_LINE}";
                    }
                    else if (item.ClassId == ControlClassId.WEB_RESOURCE)
                    {
                        _d_ts += $"{TAB}{TAB}{TAB}{item.Id}: DevKit.Controls.WebResource;{NEW_LINE}";
                    }
                    else if (item.Id.ToLower() == "notescontrol" && item.ClassId == ControlClassId.NOTE)
                    {
                        _d_ts += $"{TAB}{TAB}{TAB}{item.Id}: DevKit.Controls.Note;{NEW_LINE}";
                    }
                    else if (item.ClassId == ControlClassId.EMAIL_ENGAGEMENT_ACTIONS)
                    {
                        _d_ts += $"{TAB}{TAB}{TAB}{item.Id}: DevKit.Controls.EmailEngagement;{NEW_LINE}";
                    }
                    else if (item.ClassId == ControlClassId.EMAIL_RECIPIENT_ACTIVITY)
                    {
                        _d_ts += $"{TAB}{TAB}{TAB}{item.Id}: DevKit.Controls.EmailRecipient;{NEW_LINE}";
                    }
                    else if (item.ClassId == ControlClassId.TIMER)
                    {
                        _d_ts += $"{TAB}{TAB}{TAB}{item.Id}: DevKit.Controls.Timer;{NEW_LINE}";
                    }
                    else if (item.ClassId == ControlClassId.ACI_WIDGET)
                    {
                        _d_ts += $"{TAB}{TAB}{TAB}{item.Id}: DevKit.Controls.AciWidget;{NEW_LINE}";
                    }
                    else if (item.ClassId == ControlClassId.MAP_CONTROL)
                    {
                        _d_ts += $"{TAB}{TAB}{TAB}{item.Id}: DevKit.Controls.Map;{NEW_LINE}";
                    }
                    else if (item.ClassId == ControlClassId.ACTION_CARDS)
                    {
                        _d_ts += $"{TAB}{TAB}{TAB}{item.Id}: DevKit.Controls.ActionCards;{NEW_LINE}";
                    }
                    else if (item.ClassId == ControlClassId.POWERBI)
                    {
                        _d_ts += $"{TAB}{TAB}{TAB}{item.Id}: DevKit.Controls.PowerBi;{NEW_LINE}";
                    }
                    else if (item.ClassId == ControlClassId.FILE)
                    {
                        _d_ts += $"{TAB}{TAB}{TAB}{item.Id}: DevKit.Controls.File;{NEW_LINE}";
                    }
                    else if (item.ClassId == ControlClassId.IMAGE)
                    {
                        _d_ts += $"{TAB}{TAB}{TAB}{item.Id}: DevKit.Controls.Image;{NEW_LINE}";
                    }
                    else if (item.ClassId == ControlClassId.UNKNOWN_1 ||
                             item.ClassId == ControlClassId.UNKNOWN_2 ||
                             item.ClassId == ControlClassId.UNKNOWN_3 ||
                             item.ClassId == ControlClassId.UNKNOWN_4 ||
                             item.ClassId == ControlClassId.UNKNOWN_5 ||
                             item.ClassId == ControlClassId.UNKNOWN_6 ||
                             item.ClassId == ControlClassId.UNKNOWN_7 ||
                             item.ClassId == ControlClassId.UNKNOWN_8 ||
                             item.ClassId == ControlClassId.UNKNOWN_9 ||
                             item.ClassId == ControlClassId.UNKNOWN_10 ||
                             item.ClassId == ControlClassId.UNKNOWN_11 ||
                             item.ClassId == ControlClassId.UNKNOWN_12 ||
                             item.ClassId == ControlClassId.UNKNOWN_13 ||
                             item.ClassId == ControlClassId.UNKNOWN_14 ||
                             item.ClassId == ControlClassId.UNKNOWN_15 ||
                             item.ClassId == ControlClassId.UNKNOWN_16 ||
                             item.ClassId == ControlClassId.UNKNOWN_17 ||
                             item.ClassId == ControlClassId.UNKNOWN_18 ||
                             item.ClassId == ControlClassId.SUB_GRID ||
                             item.ClassId == ControlClassId.SUB_GRID_PANEL ||
                             item.ClassId == ControlClassId.QUICK_VIEW_FORM ||
                             item.ClassId == ControlClassId.CASERESEARCH_LINKCONTROL ||
                             item.ClassId == ControlClassId.KBVIEWER ||
                             item.ClassId == ControlClassId.CASE_KBSEARCHCONTROL ||
                             item.ClassId == ControlClassId.ATTACHMENT ||
                             item.ClassId == ControlClassId.ISMANAGED ||
                             item.ClassId == ControlClassId.CONNECTIONROLEOBJECTTYPECODELIST ||
                             item.ClassId == ControlClassId.DYNAMICPROPERTIESLIST_LINKCONTROL ||
                             item.ClassId == ControlClassId.MSDYN_SESSIONTYPE ||
                             item.ClassId == ControlClassId.MSDYN_NAME ||
                             item.ClassId == ControlClassId.WEBRESOURCE_POSTCONVERSATIONSURVEYDISCLAIMER ||
                             item.ClassId == ControlClassId.WEBRESOURCE_URL ||
                             item.ClassId == ControlClassId.WEBRESOURCE_POSTCONVERSATIONSURVEYDISCLAIMER2 ||
                             item.ClassId == ControlClassId.WEBRESOURCE_POSTCONVERSATIONSURVEYDISCLAIMER3 ||
                             item.ClassId == ControlClassId.WEBRESOURCE_WECHATCALLBACKURL ||
                             item.ClassId == ControlClassId.MSDYN_SOURCEENTITYNAME ||
                             item.ClassId == ControlClassId.UNKNOWN_19 ||
                             item.ClassId == ControlClassId.UNKNOWN_20 ||
                             item.ClassId == ControlClassId.UNKNOWN_21 ||
                             item.ClassId == ControlClassId.UNKNOWN_22 ||
                             item.ClassId == ControlClassId.UNKNOWN_23 ||
                             item.ClassId == ControlClassId.UNKNOWN_24 ||
                             item.ClassId == ControlClassId.UNKNOWN_25 ||
                             item.ClassId == ControlClassId.UNKNOWN_26 ||
                             item.ClassId == ControlClassId.UNKNOWN_27 ||
                             item.ClassId == ControlClassId.UNKNOWN_28 ||
                             item.ClassId == ControlClassId.UNKNOWN_29 ||
                             item.ClassId == ControlClassId.UNKNOWN_30 ||
                             item.ClassId == ControlClassId.UNKNOWN_31
                             )
                        continue;
                    else
                    {
                        _d_ts += $"{TAB}{TAB}{TAB}{item.Name}: DevKit.Controls.ELSE2???;//{item.Id} - {item.ClassId} -- FOR DEBUG {NEW_LINE}";
                    }
                }
                else
                {
                    if (item.Name != null)
                        _d_ts += $"{TAB}{TAB}{TAB}{item.Name}: any;//{item.Id} - {item.ClassId} -- FOR DEBUG {NEW_LINE}";
                }
                code += _d_ts;
            }
            code = code.TrimEnd($",{NEW_LINE}".ToCharArray()) + $"{NEW_LINE}";
            return code;
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
    }
}