using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Linq;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Shared;

namespace DynamicsCrm.DevKit.Shared.Logic
{
    public static class TsWebApi
    {
        private const string NEW_LINE = "\r\n";
        private const string TAB = "\t";

        private static ServiceClient ServiceClient { get; set; }
        private static MetadataService _metadataService;
        private static MetadataService Metadata => _metadataService ??= new MetadataService(ServiceClient);
        private static EntityMetadata EntityMetadata { get; set; }
        private static string RootNamespace { get; set; }

        public static async Task<string> GetTsWebApiCodeAsync(ServiceClient serviceClient, EntityMetadata entityMetadata)
        {
            ServiceClient = serviceClient;
            _metadataService = null;
            EntityMetadata = entityMetadata;
            if (EntityMetadata.Attributes == null) EntityMetadata = await Metadata.FetchEntityMetadataAsync(entityMetadata.LogicalName);
            return await GenerateTsContentAsync();
        }

        private static async Task<string> GenerateTsContentAsync()
        {
            var code = string.Empty;
            var safeSchemaName = Helper.SafeIdentifier(EntityMetadata.SchemaName);
            // 1. Header & Imports
            code += $"/**{NEW_LINE}";
            code += $" * {safeSchemaName}.webapi.ts - {safeSchemaName} WebApi for early-bound style coding{NEW_LINE}";
            code += $" * Generated file - DO NOT MODIFY MANUALLY{NEW_LINE}";
            code += $" */{NEW_LINE}";
            code += $"{NEW_LINE}";
            code += $"import {{ createWebApiEntity }} from '../lib/devkit';{NEW_LINE}";
            code += $"{NEW_LINE}";
            code += $"/**{NEW_LINE}";
            code += $" * {safeSchemaName} WebApi entity interface{NEW_LINE}";
            code += $" * Provides IntelliSense for early-bound style coding{NEW_LINE}";
            code += $" */{NEW_LINE}";
            code += $"export interface I{safeSchemaName}Api extends DevKit.IWebApiEntity {{{NEW_LINE}";
            code += $"{TAB}/** Formatted values for all fields - auto-mapped to readonly string */{NEW_LINE}";
            code += $"{TAB}readonly FormattedValue: {{ readonly [K in keyof Omit<I{safeSchemaName}Api, 'FormattedValue'>]: string }};{NEW_LINE}";

            foreach (var attribute in EntityMetadata.Attributes.OrderBy(x => x.SchemaName))
            {
                if (ShouldSkipAttribute(attribute)) continue;
                var name = Helper.SafeDeclareName(attribute.SchemaName, GeneratorType.tswebapi, EntityMetadata.SchemaName, attribute) + GetSuffix(attribute);
                var type = GetTsType(attribute);
                var readOnly = (attribute.IsValidForCreate == false && attribute.IsValidForUpdate == false) || attribute.IsReadOnly() ? "readonly " : "";
                // Priority 1: Check Description first (per Microsoft SDK documentation)
                // Priority 2: Fallback to DisplayName if no Description
                var desc = attribute.Description?.UserLocalizedLabel?.Label;
                if (string.IsNullOrWhiteSpace(desc))
                {
                    desc = attribute.DisplayName?.UserLocalizedLabel?.Label;
                }
                desc = desc?.Replace("\r\n", " ") ?? "";
                if (!string.IsNullOrEmpty(desc))
                {
                    code += $"{TAB}/** {desc} */{NEW_LINE}";
                }
                code += $"{TAB}{readOnly}{name}: {type};{NEW_LINE}";
            }
            code += $"}}{NEW_LINE}";
            code += $"{NEW_LINE}";

            code += $"const {safeSchemaName}FieldConfig: DevKit.IWebApiFieldConfigMap = {{{NEW_LINE}";
            code += await GeneratorCodeAsync();
            code += $"}};{NEW_LINE}";
            code += $"{NEW_LINE}";
            code += $"/**{NEW_LINE}";
            code += $" * {safeSchemaName} WebApi class for early-bound style coding{NEW_LINE}";
            code += $" * Usage: const {safeSchemaName.Substring(0, 1).ToLower() + safeSchemaName.Substring(1)} = new {safeSchemaName}Api(entity);{NEW_LINE}";
            code += $" * @param entity The entity object from OData response (optional for create operations){NEW_LINE}";
            code += $" */{NEW_LINE}";
            code += $"export class {safeSchemaName}Api {{{NEW_LINE}";
            code += $"{TAB}constructor(entity?: Record<string, any>) {{{NEW_LINE}";
            code += $"{TAB}{TAB}const webApiEntity = createWebApiEntity<I{safeSchemaName}Api>(entity, '{EntityMetadata.LogicalName}', '{EntityMetadata.LogicalCollectionName}', {safeSchemaName}FieldConfig);{NEW_LINE}";
            code += $"{TAB}{TAB}Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));{NEW_LINE}";
            code += $"{TAB}}}{NEW_LINE}";
            code += $"}}{NEW_LINE}";
            code += $"{NEW_LINE}";
            code += $"export interface {safeSchemaName}Api extends I{safeSchemaName}Api {{ }}{NEW_LINE}";

            return code;
        }

        private static bool ShouldSkipAttribute(AttributeMetadata attribute)
        {
            if (attribute.AttributeType == AttributeTypeCode.PartyList || attribute.AttributeType == AttributeTypeCode.EntityName) return true;
            if (attribute.AttributeOf != null && attribute.AttributeTypeName != AttributeTypeDisplayName.ImageType) return true;
            return false;
        }

        private static string GetTsType(AttributeMetadata attribute)
        {
            if (attribute is MultiSelectPicklistAttributeMetadata) return "Array<number> | null";
            switch (attribute.AttributeType)
            {
                case AttributeTypeCode.Boolean: return "boolean | null";
                case AttributeTypeCode.Integer:
                case AttributeTypeCode.Double:
                case AttributeTypeCode.Decimal:
                case AttributeTypeCode.Money:
                case AttributeTypeCode.BigInt:
                case AttributeTypeCode.Picklist:
                case AttributeTypeCode.State:
                case AttributeTypeCode.Status:
                    return "number | null";
                case AttributeTypeCode.DateTime: return "Date | null";
                case AttributeTypeCode.Lookup:
                case AttributeTypeCode.Owner:
                case AttributeTypeCode.Customer:
                case AttributeTypeCode.Uniqueidentifier:
                    return "DevKit.Guid | null";
                default: return "string | null";
            }
        }

        private static async Task<string> GeneratorCodeAsync()
        {
            var code = string.Empty;
            foreach (var attribute in EntityMetadata?.Attributes?.OrderBy(x => x.SchemaName))
            {
                if (ShouldSkipAttribute(attribute)) continue;

                var attributeSchemaName = Helper.SafeDeclareName(attribute.SchemaName, GeneratorType.tswebapi, EntityMetadata.SchemaName, attribute) + GetSuffix(attribute);

                var logicalName = $"logicalName: '{attribute.LogicalName}'";

                var type = "";
                if (attribute.AttributeType == AttributeTypeCode.Integer || attribute.AttributeType == AttributeTypeCode.BigInt || attribute.AttributeType == AttributeTypeCode.Picklist || attribute.AttributeType == AttributeTypeCode.State || attribute.AttributeType == AttributeTypeCode.Status)
                    type = "type: 'Integer'";
                 else if (attribute.AttributeType == AttributeTypeCode.Double || attribute.AttributeType == AttributeTypeCode.Decimal || attribute.AttributeType == AttributeTypeCode.Money)
                    type = "type: 'Number'";
                 else if (attribute.AttributeType == AttributeTypeCode.Boolean)
                    type = "type: 'Boolean'";
                 else if (attribute.AttributeType == AttributeTypeCode.DateTime)
                    type = "type: 'DateTime'";
                 else if (attribute is MultiSelectPicklistAttributeMetadata)
                    type = "type: 'MultiOptionSet'";

                var properties = logicalName;

                // ReadOnly
                if ((attribute.IsValidForCreate == false && attribute.IsValidForUpdate == false) || attribute.IsReadOnly())
                    properties += $", readOnly: true";

                // Type
                if (!string.IsNullOrEmpty(type)) properties += $", {type}";



                // Handle Lookups
                if (attribute is LookupAttributeMetadata lookup)
                {


                    if (lookup.Targets.Any()) {
                          var target = lookup.Targets[0];
                          await XrmHelper.EntitiesMetadata.AddIfNotExistAsync(ServiceClient, target);
                          var targetMeta = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.LogicalName == target);
                          if(targetMeta != null) {
                              properties = properties.Replace($"logicalName: '{attribute.LogicalName}'", $"schemaName: '{attribute.SchemaName}', logicalName: '_{attribute.LogicalName}_value'");
                              properties += $", entityCollectionName: '{targetMeta.LogicalCollectionName}'";
                              properties += $", entityLogicalName: '{target}'";
                          }
                    }
                }
                else if (attribute.AttributeType == AttributeTypeCode.Owner)
                {
                     // Owner special case
                     properties = properties.Replace($"logicalName: '{attribute.LogicalName}'", $"schemaName: '{attribute.SchemaName}', logicalName: '_{attribute.LogicalName}_value'");
                     properties += ", entityCollectionName: 'systemusers', entityLogicalName: 'systemuser'";

                }

                code += $"{TAB}{attributeSchemaName}: {{ {properties} }},{NEW_LINE}";
            }
            return code;
        }
        private static string GetSuffix(AttributeMetadata attribute)
        {
            if (attribute.AttributeType != AttributeTypeCode.DateTime) return string.Empty;
            var datetime = attribute as DateTimeAttributeMetadata;
            if (datetime.DateTimeBehavior == DateTimeBehavior.DateOnly)
                return "_DateOnly";
            else if (datetime.DateTimeBehavior == DateTimeBehavior.UserLocal)
            {
                if (datetime.Format == DateTimeFormat.DateOnly)
                    return "_UtcDateOnly";
                return "_UtcDateAndTime";
            }
            else
            {
                if (datetime.Format == DateTimeFormat.DateOnly)
                    return "_TimezoneDateOnly";
                return "_TimezoneDateAndTime";
            }
        }
    }
}
