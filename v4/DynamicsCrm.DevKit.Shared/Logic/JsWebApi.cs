using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Logic
{
    public static class JsWebApi
    {
        private const string NEW_LINE = "\r\n";
        private const string TAB = "\t";
        private static ServiceClient ServiceClient { get; set; }
        private static EntityMetadata EntityMetadata { get; set; }
        private static string RootNamespace { get; set; }

        public static async Task<(string code, string dts)> GetCodeAsync(ServiceClient serviceClient, EntityMetadata entityMetadata, string rootNamespace, bool isJsFormExist)
        {
            ServiceClient = serviceClient;
            EntityMetadata = entityMetadata;
            RootNamespace = rootNamespace;
            var dts = await JsTypeScriptDeclaration.GetCodeAsync(serviceClient, entityMetadata, rootNamespace, isJsFormExist, true);
            var code = string.Empty;
            var @namespace = Helper.GetNameSpace(RootNamespace);
            var logicalName = Helper.SafeIdentifier(entityMetadata.LogicalName);
            code += $"'use strict';{NEW_LINE}";
            code += $"/** @namespace {@namespace} */{NEW_LINE}";
            code += $"var {@namespace};{NEW_LINE}";
            code += $"(function ({@namespace}) {{{NEW_LINE}";
            code += $"{TAB}{@namespace}.{entityMetadata.SchemaName}Api = function (e) {{{NEW_LINE}";
            code += $"{TAB}{TAB}const f = '@OData.Community.Display.V1.FormattedValue';{NEW_LINE}";
            code += $"{await Helper.ReadEmbeddedResourceAsync($"{typeof(JsWebApi).Assembly.GetName().Name}.Resources.WebApi.js")}";
            code += $"{TAB}{TAB}const _{logicalName} = {{{NEW_LINE}";
            code += $"{await GeneratorCodeAsync()}";
            code += $"{TAB}{TAB}}};{NEW_LINE}";
            code += $"{TAB}{TAB}if (e === undefined) e = {{}};{NEW_LINE}";
            code += $"{TAB}{TAB}const u = {{}};{NEW_LINE}";
            code += $"{TAB}{TAB}const {logicalName} = {{}};{NEW_LINE}";
            code += $"{TAB}{TAB}{logicalName}.ODataEntity = e;{NEW_LINE}";
            code += $"{TAB}{TAB}{logicalName}.FormattedValue = {{}};{NEW_LINE}";
            code += $"{TAB}{TAB}for (const field in _{logicalName}) {{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}const fieldConfig = _{logicalName}[field];{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}webApiField({logicalName}, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{GeneratorActivityPartyCode()}";
            code += $"{TAB}{TAB}{logicalName}.Entity = u;{NEW_LINE}";
            code += $"{TAB}{TAB}{logicalName}.EntityName = '{EntityMetadata.LogicalName}';{NEW_LINE}";
            code += $"{TAB}{TAB}{logicalName}.EntityCollectionName = '{EntityMetadata.LogicalCollectionName}';{NEW_LINE}";
            code += $"{TAB}{TAB}{logicalName}['@odata.etag'] = e?.['@odata.etag'];{NEW_LINE}";
            code += $"{TAB}{TAB}{logicalName}.getAliasedValue = function (alias, isMultiOptionSet = false) {{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (e?.[alias] === undefined || e?.[alias] === null) {{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}return null;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (isMultiOptionSet) {{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}return e?.[alias].toString().split(',').map(function (item) {{ return parseInt(item, 10); }});{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}return e?.[alias];{NEW_LINE}";
            code += $"{TAB}{TAB}}};{NEW_LINE}";
            code += $"{TAB}{TAB}{logicalName}.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (e?.[alias + f] === undefined || e?.[alias + f] === null) {{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}return '';{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (isMultiOptionSet) {{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}return e?.[alias + f]?.toString()?.split(';').map(function (item) {{ return item?.trim(); }});{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}return e?.[alias + f];{NEW_LINE}";
            code += $"{TAB}{TAB}}};{NEW_LINE}";
            code += $"{TAB}{TAB}return {logicalName};{NEW_LINE}";
            code += $"{TAB}}};{NEW_LINE}";
            code += $"}})({@namespace} || ({@namespace} = {{}}));{NEW_LINE}";
            code += $"{Helper.GeneratorOptionSet(EntityMetadata)}";
            return (code, dts);
        }

        private static string GeneratorActivityPartyCode()
        {
            var code = string.Empty;
            if (EntityMetadata.Attributes.Where(x => x.AttributeType == AttributeTypeCode.PartyList).Any())
            {
                var logicalName = (EntityMetadata.IsCustomEntity ?? false) ? $"{EntityMetadata.SchemaName}_activity_parties" : $"{EntityMetadata.LogicalName}_activity_parties";
                code += $"{TAB}{TAB}Object.defineProperty({EntityMetadata.LogicalName}, 'ActivityParties', {{{NEW_LINE}";
                code += $"{TAB}{TAB}{TAB}get: function () {{ return e?.['{logicalName}']; }},{NEW_LINE}";
                code += $"{TAB}{TAB}{TAB}set: function (value) {{{NEW_LINE}";
                code += $"{TAB}{TAB}{TAB}{TAB}e['{logicalName}'] = value;{NEW_LINE}";
                code += $"{TAB}{TAB}{TAB}{TAB}u['{logicalName}'] = value;{NEW_LINE}";
                code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
                code += $"{TAB}{TAB}}});{NEW_LINE}";
            }
            return code;
        }

        private static async Task<string> GeneratorCodeAsync()
        {
            var code = string.Empty;
            foreach (var attribute in EntityMetadata?.Attributes?.OrderBy(x => x.SchemaName))
            {
                var attributeSchemaName = Helper.SafeDeclareName(attribute.SchemaName, GeneratorType.jswebapi, EntityMetadata.SchemaName, attribute);
                if (attribute.AttributeType == AttributeTypeCode.PartyList || attribute.AttributeType == AttributeTypeCode.EntityName) continue;
                if (attribute.AttributeOf != null && attribute.AttributeTypeName != AttributeTypeDisplayName.ImageType) continue;
                var a = $"a: '{attribute.LogicalName}'";
                var r = (!((attribute.IsValidForCreate ?? false) || (attribute.IsValidForUpdate ?? false)) || attribute.IsReadOnly()) ? $", r: true" : $"";
                if (attribute.AttributeType == AttributeTypeCode.Memo ||
                    attribute.AttributeType == AttributeTypeCode.String ||
                    attribute.AttributeType == AttributeTypeCode.Picklist ||
                    attribute.AttributeType == AttributeTypeCode.State ||
                    attribute.AttributeType == AttributeTypeCode.Status ||
                    attribute.AttributeType == AttributeTypeCode.Boolean ||
                    attribute.AttributeType == AttributeTypeCode.Integer ||
                    attribute.AttributeType == AttributeTypeCode.BigInt ||
                    attribute.AttributeType == AttributeTypeCode.Double ||
                    attribute.AttributeType == AttributeTypeCode.Decimal ||
                    attribute.AttributeType == AttributeTypeCode.Money ||
                    attribute.AttributeType == AttributeTypeCode.Uniqueidentifier ||
                    attribute.AttributeType == AttributeTypeCode.ManagedProperty ||
                    attribute.AttributeTypeName == AttributeTypeDisplayName.FileType
                )
                {
                    var g = "";
                    if (attribute.AttributeType == AttributeTypeCode.Integer ||
                         attribute.AttributeType == AttributeTypeCode.BigInt ||
                         attribute.AttributeType == AttributeTypeCode.Picklist ||
                         attribute.AttributeType == AttributeTypeCode.Status ||
                         attribute.AttributeType == AttributeTypeCode.State)
                        g = ", g: 'Integer'";
                    else if (attribute.AttributeType == AttributeTypeCode.Double ||
                               attribute.AttributeType == AttributeTypeCode.Decimal ||
                               attribute.AttributeType == AttributeTypeCode.Money)
                        g = ", g: 'Number'";
                    else if (attribute.AttributeType == AttributeTypeCode.Boolean)
                        g = ", g: 'Boolean'";
                    code += $"{TAB}{TAB}{TAB}{attributeSchemaName}: {{ {a}{r}{g} }},{NEW_LINE}";
                }
                else if (attribute.AttributeType == AttributeTypeCode.DateTime)
                {
                    var suffix = GetSuffix(attribute);
                    var g = ", g: 'DateTime'";
                    code += $"{TAB}{TAB}{TAB}{attributeSchemaName}{suffix}: {{ {a}{r}{g} }},{NEW_LINE}";
                }
                else if (attribute is MultiSelectPicklistAttributeMetadata)
                {
                    var g = (attribute is MultiSelectPicklistAttributeMetadata) ? $", g: 'MultiOptionSet'" : $"";
                    code += $"{TAB}{TAB}{TAB}{attributeSchemaName}: {{ {a}{g}{r} }},{NEW_LINE}";
                }
                else if (attribute.AttributeType == AttributeTypeCode.Owner)
                {
                    code += $"{TAB}{TAB}{TAB}OwnerId_systemuser: {{ b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser'{r} }},{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}OwnerId_team: {{ b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team'{r} }},{NEW_LINE}";
                }
                else if (attribute is LookupAttributeMetadata lookup)
                {
                    a = $"a: '_{attribute.LogicalName}_value'";
                    if (lookup.Targets.Count() == 1)
                    {
                        var entityLogicalName = lookup.Targets[0];
                        await XrmHelper.EntitiesMetadata.AddIfNotExistAsync(ServiceClient, entityLogicalName);
                        var entityMetadata = XrmHelper.EntitiesMetadata.First(x => x.LogicalName == entityLogicalName);
                        var b = $"b: '{((attribute.IsCustomAttribute ?? false) ? attributeSchemaName : attribute.LogicalName)}'";
                        var c = $"c: '{entityMetadata.LogicalCollectionName}'";
                        var d = $"d: '{lookup.Targets[0]}'";
                        code += $"{TAB}{TAB}{TAB}{attributeSchemaName}: {{ {b}, {a}, {c}, {d}{r} }},{NEW_LINE}";
                    }
                    else
                    {
                        if (attribute.LogicalName == "acceptingentityid")
                        {
                            code += $"{TAB}{TAB}{TAB}acceptingentityid_queue: {{ b: 'acceptingentityid_queue', a: '_acceptingentityid_value', c: 'queues', d: 'queue' }},{NEW_LINE}";
                            code += $"{TAB}{TAB}{TAB}acceptingentityid_systemuser: {{ b: 'acceptingentityid_systemuser', a: '_acceptingentityid_value', c: 'systemusers', d: 'systemuser' }},{NEW_LINE}";
                        }
                        else
                        {
                            foreach (var entityLogicalName in lookup.Targets.Distinct())
                            {
                                var navigation = EntityMetadata.ManyToOneRelationships.FirstOrDefault(x => x.ReferencingAttribute == attribute.LogicalName && x.ReferencedEntity == entityLogicalName);
                                var b = $"b: '{navigation?.ReferencingEntityNavigationPropertyName}'";
                                await XrmHelper.EntitiesMetadata.AddIfNotExistAsync(ServiceClient, entityLogicalName);
                                var c = $"c: '{XrmHelper.EntitiesMetadata.First(x => x.LogicalName == entityLogicalName)?.LogicalCollectionName}'";
                                var d = $"d: '{entityLogicalName}'";
                                if (navigation?.ReferencingEntityNavigationPropertyName != null && navigation?.ReferencingEntityNavigationPropertyName?.Length > 0)
                                {
                                    var temp = $"{TAB}{TAB}{TAB}{Helper.SafeDeclareName(navigation?.ReferencingEntityNavigationPropertyName, GeneratorType.jswebapi, EntityMetadata.SchemaName, attribute)}: {{ {b}, {a},";
                                    if (!code.Contains(temp))
                                        code += $"{TAB}{TAB}{TAB}{Helper.SafeDeclareName(navigation?.ReferencingEntityNavigationPropertyName, GeneratorType.jswebapi, EntityMetadata.SchemaName, attribute)}: {{ {b}, {a}, {c}, {d}{r} }},{NEW_LINE}";
                                }
                            }
                        }
                    }
                }
                else if(attribute is ImageAttributeMetadata image)
                {
                    if ((image.IsPrimaryImage ?? false) && image.LogicalName != "entityimage")
                        code += GetGeneratorImageCode("EntityImage", image.LogicalName);
                    code += GetGeneratorImageCode(attributeSchemaName, attribute.LogicalName);
                }
                else
                {
                    code += attribute.LogicalName;
                }
            }
            code = code.TrimEnd($",{NEW_LINE}".ToCharArray());
            code += $"{NEW_LINE}";
            return code;
        }

        private static string GetGeneratorImageCode(string schemaName, string logicalName)
        {
            var code = string.Empty;
            code += $"{TAB}{TAB}{TAB}{schemaName}: {{ a: '{logicalName}' }},{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{schemaName}_Timestamp: {{ a: '{logicalName}_timestamp', r: true }},{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{schemaName}_URL: {{ a: '{logicalName}_url', r: true }},{NEW_LINE}";
            return code;
        }

        private static string GetSuffix(AttributeMetadata attribute)
        {
            if (attribute.AttributeType != AttributeTypeCode.DateTime) return String.Empty;
            var datetime = attribute as DateTimeAttributeMetadata;
            if (datetime.DateTimeBehavior == DateTimeBehavior.DateOnly)
                return "_DateOnly";
            else if(datetime.DateTimeBehavior == DateTimeBehavior.UserLocal)
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