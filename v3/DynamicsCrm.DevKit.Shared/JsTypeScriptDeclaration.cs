using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Tooling.Connector;
using System.Linq;

namespace DynamicsCrm.DevKit.Shared
{
    public class JsTypeScriptDeclaration
    {
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

            var _d_ts = string.Empty;
            _d_ts += $"//@ts-check{NEW_LINE}";
            _d_ts += $"///<reference path=\"devkit.d.ts\" />{NEW_LINE}";
            _d_ts += $"declare namespace {rootNamespace} {{{NEW_LINE}";
            if (comment.JsForm.Count > 0)
                _d_ts += GetForm_d_ts();
            if (comment.JsWebApi)
                _d_ts += GetWebApi_d_ts();
            _d_ts += $"}}{NEW_LINE}";
            _d_ts += GetOptionSet_d_ts();
            _d_ts += GetSavedComment();
            return _d_ts;
        }

        private static string GetOptionSet_d_ts()
        {
            var _d_ts = string.Empty;
            _d_ts += $"declare namespace OptionSet {{{NEW_LINE}";
            _d_ts += $"{TAB}namespace {EntityMetadata.SchemaName} {{{NEW_LINE}";
            foreach (var attribute in EntityMetadata.Attributes.OrderBy(x => x.SchemaName))
            {
                if (XrmHelper.IsOptionSet(attribute))
                {
                    var values = attribute.OptionSetValues();
                    if (values.Count == 0) continue;
                    _d_ts += $"{TAB}{TAB}enum {attribute.SchemaName} {{{NEW_LINE}";
                    foreach (var value in values)
                    {
                        _d_ts += $"{TAB}{TAB}{TAB}/** {value.Value} */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}{TAB}{value.Name},{NEW_LINE}";
                    }
                    _d_ts = _d_ts.TrimEnd($",{NEW_LINE}".ToCharArray());
                    _d_ts += $"{NEW_LINE}";
                    _d_ts += $"{TAB}{TAB}}}{NEW_LINE}";
                }
            }
            _d_ts += $"{TAB}{TAB}enum RollupState {{{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** 0 - Attribute value is yet to be calculated */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}NotCalculated,{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}Calculated,{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** 2 - Attribute value calculation lead to overflow error */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}OverflowError,{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}OtherError,{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}RetryLimitExceeded,{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}HierarchicalRecursionLimitReached,{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}LoopDetected{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}}}{NEW_LINE}";
            _d_ts += $"{TAB}}}{NEW_LINE}";
            _d_ts += $"}}{NEW_LINE}";
            return _d_ts;
        }

        private static string GetWebApi_d_ts()
        {
            var _d_ts = string.Empty;
            _d_ts += $"{TAB}class {EntityMetadata.SchemaName}Api {{{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/**{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}* DynamicsCrm.DevKit {EntityMetadata.SchemaName}Api{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}* @param entity The entity object{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}*/{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}constructor(entity?: any);{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/**{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} * Get the value of alias{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} * @param alias the alias value{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} * @param isMultiOptionSet true if the alias is multi OptionSet{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/**{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} * Get the formatted value of alias{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} * @param alias the alias value{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} * @param isMultiOptionSet true if the alias is multi OptionSet{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/** The entity object */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}Entity: any;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/** The entity name */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}EntityName: string;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/** The entity collection name */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}EntityCollectionName: string;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}\"@odata.etag\": string;{NEW_LINE}";

            foreach (var attribute in EntityMetadata?.Attributes?.OrderBy(x => x.SchemaName))
            {
                if (attribute.AttributeType == AttributeTypeCode.PartyList || attribute.AttributeType == AttributeTypeCode.EntityName) continue;
                if (attribute.AttributeOf != null && attribute.AttributeTypeName != AttributeTypeDisplayName.ImageType) continue;

                var Readonly = (!(attribute.IsValidForCreate ?? false) && !(attribute.IsValidForUpdate ?? false)) ? "Readonly" : string.Empty;
                var jdoc = attribute?.Description?.UserLocalizedLabel?.Label ?? string.Empty;
                if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                switch (attribute.AttributeType)
                {
                    case AttributeTypeCode.Picklist:
                    case AttributeTypeCode.State:
                    case AttributeTypeCode.Status:
                        if (attribute is MultiSelectPicklistAttributeMetadata)
                            _d_ts += $"{TAB}{TAB}{attribute.SchemaName}: DevKit.WebApi.MultiOptionSetValue{Readonly};\r\n";
                        else if (attribute is PicklistAttributeMetadata || attribute is StateAttributeMetadata || attribute is StatusAttributeMetadata)
                            _d_ts += $"{TAB}{TAB}{attribute.SchemaName}: DevKit.WebApi.OptionSetValue{Readonly};\r\n";
                        break;
                    case AttributeTypeCode.Owner:
                        _d_ts += $"{TAB}{TAB}OwnerId_systemuser: DevKit.WebApi.LookupValue{Readonly};\r\n";
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}OwnerId_team: DevKit.WebApi.LookupValue{Readonly};\r\n";
                        break;
                    case AttributeTypeCode.Lookup:
                    case AttributeTypeCode.Customer:
                        if (attribute is LookupAttributeMetadata lookup)
                        {
                            if (lookup.Targets.Count() == 1)
                            {
                                _d_ts += $"{TAB}{TAB}{attribute.SchemaName}: DevKit.WebApi.LookupValue{Readonly};\r\n";
                            }
                            else
                            {
                                if (attribute.LogicalName == "acceptingentityid")
                                {
                                    if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                                    _d_ts += $"{TAB}{TAB}acceptingentityid_queue: DevKit.WebApi.LookupValue{Readonly};\r\n";
                                    if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                                    _d_ts += $"{TAB}{TAB}acceptingentityid_systemuser: DevKit.WebApi.LookupValue{Readonly};\r\n";
                                }
                                else
                                {
                                    foreach (var entityLogicalName in lookup.Targets)
                                    {
                                        var navigation = EntityMetadata.ManyToOneRelationships.FirstOrDefault(x => x.ReferencingAttribute == attribute.LogicalName && x.ReferencedEntity == entityLogicalName);
                                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                                        _d_ts += $"{TAB}{TAB}{navigation?.ReferencingEntityNavigationPropertyName}: DevKit.WebApi.LookupValue{Readonly};\r\n";
                                    }
                                }
                            }
                        }
                        break;
                    case AttributeTypeCode.Memo:
                    case AttributeTypeCode.String:
                        _d_ts += $"{TAB}{TAB}{attribute.SchemaName}: DevKit.WebApi.StringValue{Readonly};\r\n";
                        break;
                    case AttributeTypeCode.Boolean:
                        _d_ts += $"{TAB}{TAB}{attribute.SchemaName}: DevKit.WebApi.BooleanValue{Readonly};\r\n";
                        break;
                    case AttributeTypeCode.DateTime:
                        if (attribute is DateTimeAttributeMetadata dateTime)
                        {
                            if (dateTime.DateTimeBehavior == DateTimeBehavior.DateOnly)
                                _d_ts += $"{TAB}{TAB}{attribute.SchemaName}_DateOnly: DevKit.WebApi.DateOnlyValue{Readonly};{NEW_LINE}";
                            else if (dateTime.DateTimeBehavior == DateTimeBehavior.TimeZoneIndependent)
                            {
                                if (dateTime.Format == DateTimeFormat.DateOnly)
                                    _d_ts += $"{TAB}{TAB}{attribute.SchemaName}_TimezoneDateOnly: DevKit.WebApi.TimezoneDateOnlyValue{Readonly};{NEW_LINE}";
                                else
                                    _d_ts += $"{TAB}{TAB}{attribute.SchemaName}_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue{Readonly};{NEW_LINE}";
                            }
                            else
                            {
                                if (dateTime.Format == DateTimeFormat.DateOnly)
                                    _d_ts += $"{TAB}{TAB}{attribute.SchemaName}_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue{Readonly};{NEW_LINE}";
                                else
                                    _d_ts += $"{TAB}{TAB}{attribute.SchemaName}_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue{Readonly};{NEW_LINE}";
                            }
                        }
                        break;
                    case AttributeTypeCode.Integer:
                        _d_ts += $"{TAB}{TAB}{attribute.SchemaName}: DevKit.WebApi.IntegerValue{Readonly};\r\n";
                        break;
                    case AttributeTypeCode.BigInt:
                        _d_ts += $"{TAB}{TAB}{attribute.SchemaName}: DevKit.WebApi.BigIntValue{Readonly};\r\n";
                        break;
                    case AttributeTypeCode.Decimal:
                        _d_ts += $"{TAB}{TAB}{attribute.SchemaName}: DevKit.WebApi.DecimalValue{Readonly};\r\n";
                        break;
                    case AttributeTypeCode.Double:
                        _d_ts += $"{TAB}{TAB}{attribute.SchemaName}: DevKit.WebApi.DoubleValue{Readonly};\r\n";
                        break;
                    case AttributeTypeCode.Money:
                        _d_ts += $"{TAB}{TAB}{attribute.SchemaName}: DevKit.WebApi.MoneyValue{Readonly};\r\n";
                        break;
                    case AttributeTypeCode.Uniqueidentifier:
                        _d_ts += $"{TAB}{TAB}{attribute.SchemaName}: DevKit.WebApi.GuidValue{Readonly};\r\n";
                        break;
                    case AttributeTypeCode.ManagedProperty:
                        _d_ts += $"{TAB}{TAB}{attribute.SchemaName}: DevKit.WebApi.ManagedPropertyValue{Readonly};\r\n";
                        break;

                    default:
                        if (attribute is ImageAttributeMetadata image)
                        {
                            if ((image.IsPrimaryImage ?? false) && image.LogicalName != "entityimage")
                                _d_ts += GetGeneratorImageCode_d_ts("EntityImage", image.LogicalName);
                            _d_ts += GetGeneratorImageCode_d_ts(attribute.SchemaName, attribute.LogicalName);
                        }
                        else
                            _d_ts += $"{attribute.AttributeType}-{attribute.SchemaName}-{attribute.LogicalName}\r\n";
                        break;
                }


            }
            if (EntityMetadata.Attributes.Where(f => f.AttributeType == AttributeTypeCode.PartyList).Any())
            {
                _d_ts += $"{TAB}{TAB}/** The array of object that can cast object to ActivityPartyApi class */{NEW_LINE}"; ;
                _d_ts += $"{TAB}{TAB}ActivityParties: Array<any>;{NEW_LINE}";
            }
            _d_ts += $"{TAB}}}{NEW_LINE}";
            return _d_ts;
        }

        private static string GetGeneratorImageCode_d_ts(string schemaName, string logicalName)
        {
            var _d_ts = string.Empty;
            _d_ts += $"{TAB}{TAB}{schemaName}: DevKit.WebApi.StringValue;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{schemaName}_Timestamp: DevKit.WebApi.BigIntValueReadonly;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{schemaName}_URL: DevKit.WebApi.StringValueReadonly;{NEW_LINE}";
            return _d_ts;
        }

        private static string GetForm_d_ts()
        {
            return string.Empty;
        }

        private static string GetSavedComment()
        {
            var _d_ts = string.Empty;
            _d_ts = $"//{SimpleJson.SerializeObject(Comment)}";
            _d_ts = _d_ts.Replace("\"", "'");
            return _d_ts;
        }
    }
}
