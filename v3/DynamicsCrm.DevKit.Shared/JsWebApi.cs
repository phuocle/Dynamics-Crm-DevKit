using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Linq;

namespace DynamicsCrm.DevKit.Shared
{
    public static class JsWebApi
    {
        private const string NEW_LINE = "\r\n";
        private const string TAB = "\t";
        private static CrmServiceClient CrmServiceClient { get; set; }
        private static EntityMetadata EntityMetadata { get; set; }
        private static string RootNamespace { get; set; }


        public static string GetCode(CrmServiceClient crmServiceClient, EntityMetadata entityMetadata, string rootNamespace)
        {
            CrmServiceClient = crmServiceClient;
            EntityMetadata = entityMetadata;
            RootNamespace = rootNamespace;

            var code = string.Empty;

            var @namespace = GetNameSpace();
            var logicalName = entityMetadata.LogicalName;

            code += $"'use strict';{NEW_LINE}";
            code += $"/** @namespace {@namespace} */{NEW_LINE}";
            code += $"var {@namespace};{NEW_LINE}";
            code += $"(function ({@namespace}) {{{NEW_LINE}";
            code += $"{TAB}'use strict';{NEW_LINE}";
            code += $"{TAB}{@namespace}.{entityMetadata.SchemaName}Api = function (e) {{{NEW_LINE}";
            code += $"{TAB}{TAB}var EMPTY_STRING = '';{NEW_LINE}";
            code += $"{TAB}{TAB}var f = '@OData.Community.Display.V1.FormattedValue';{NEW_LINE}";
            code += $"{Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.WebApi.js")}";
            code += $"{TAB}{TAB}var {logicalName} = {{{NEW_LINE}";
            code += $"{GeneratorCode()}";
            code += $"{TAB}{TAB}}};{NEW_LINE}";
            code += $"{TAB}{TAB}if (e === undefined) e = {{}};{NEW_LINE}";
            code += $"{TAB}{TAB}var u = {{}};{NEW_LINE}";
            code += $"{TAB}{TAB}for (var field in {logicalName}) {{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var a = {logicalName}[field].a;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var b = {logicalName}[field].b;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var c = {@logicalName}[field].c;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var d = {logicalName}[field].d;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var g = {logicalName}[field].g;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var r = {logicalName}[field].r;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{logicalName}[field] = webApiField(e, a, b, c, d, r, u, g);{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{GeneratorActivityPartyCode()}";
            code += $"\t\t{EntityMetadata.LogicalName}.Entity = u;\r\n";
            code += $"\t\t{EntityMetadata.LogicalName}.EntityName = '{EntityMetadata.LogicalName}';\r\n";
            code += $"\t\t{EntityMetadata.LogicalName}.EntityCollectionName = '{EntityMetadata.LogicalCollectionName}';\r\n";
            code += $"\t\t{EntityMetadata.LogicalName}['@odata.etag'] = e['@odata.etag'];\r\n";
            code += $"\t\t{EntityMetadata.LogicalName}.getAliasedValue = function (alias, isMultiOptionSet) {{\r\n";
            code += $"\t\t\tif (e[alias] === undefined || e[alias] === null) {{\r\n";
            code += $"\t\t\t\treturn null;\r\n";
            code += $"\t\t\t}}\r\n";
            code += $"\t\t\tif (isMultiOptionSet) {{\r\n";
            code += $"\t\t\t\treturn e[alias].toString().split(',').map(function (item) {{ return parseInt(item, 10); }});\r\n";
            code += $"\t\t\t}}\r\n";
            code += $"\t\t\treturn e[alias];\r\n";
            code += $"\t\t}}\r\n";
            code += $"\t\t{EntityMetadata.LogicalName}.getAliasedFormattedValue = function (alias, isMultiOptionSet) {{\r\n";
            code += $"\t\t\tif (e[alias + f] === undefined || e[alias + f] === null) {{\r\n";
            code += $"\t\t\t\treturn EMPTY_STRING;\r\n";
            code += $"\t\t\t}}\r\n";
            code += $"\t\t\tif (isMultiOptionSet) {{\r\n";
            code += $"\t\t\t\treturn e[alias + f].toString().split(';').map(function (item) {{ return item.trim(); }});\r\n";
            code += $"\t\t\t}}\r\n";
            code += $"\t\t\treturn e[alias + f];\r\n";
            code += $"\t\t}}\r\n";
            code += $"\t\treturn {EntityMetadata.LogicalName};\r\n";
            code += $"\t}};\r\n";
            code += $"}})({@namespace} || ({@namespace} = {{}}));{NEW_LINE}";
            code += $"/** @namespace OptionSet */{NEW_LINE}";
            code += $"var OptionSet;{NEW_LINE}";
            code += $"(function (OptionSet) {{{NEW_LINE}";
            code += $"{GeneratorOptionSet()}";
            code += $"}})(OptionSet || (OptionSet = {{}}));";
            return code;
        }

        private static string GeneratorOptionSet()
        {
            var code = string.Empty;
            code += $"{TAB}{TAB}OptionSet.{EntityMetadata.SchemaName} = {{{NEW_LINE}";
            foreach (var attribute in EntityMetadata.Attributes.OrderBy(x => x.SchemaName))
            {
                if (XrmHelper.IsOptionSet(attribute))
                {
                    var values = attribute.OptionSetValues();
                    if (values.Count == 0) continue;
                    code += $"{TAB}{TAB}{TAB}{attribute.SchemaName} : {{{NEW_LINE}";
                    foreach (var value in values)
                    {
                        code += $"{TAB}{TAB}{TAB}{TAB}{value.Name}: {value.Value},{NEW_LINE}";
                    }
                    code = code.TrimEnd($",{NEW_LINE}".ToCharArray());
                    code += $"{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}}},{NEW_LINE}";
                }
            }
            code += $"{TAB}{TAB}RollupState : {{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}NotCalculated: 0,{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}Calculated: 1,{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}OverflowError: 2,{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}OtherError: 3,{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}RetryLimitExceeded: 4,{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}HierarchicalRecursionLimitReached: 5,{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}LoopDetected: 6{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{NEW_LINE}";
            code += $"{TAB}}};{NEW_LINE}";
            return code;
        }

        private static string GeneratorActivityPartyCode()
        {
            var code = string.Empty;
            if (EntityMetadata.Attributes.Where(x => x.AttributeType == AttributeTypeCode.PartyList).Any())
            {
                var logicalName = (EntityMetadata.IsCustomEntity ?? false) ? $"{EntityMetadata.SchemaName}_activity_parties" : $"{EntityMetadata.LogicalName}_activity_parties";
                code += $"{TAB}{TAB}Object.defineProperty({EntityMetadata.LogicalName}, 'ActivityParties', {{{NEW_LINE}";
                code += $"{TAB}{TAB}{TAB}get: function () {{ return e['{logicalName}']; }},{NEW_LINE}";
                code += $"{TAB}{TAB}{TAB}set: function (value) {{{NEW_LINE}";
                code += $"{TAB}{TAB}{TAB}{TAB}e['{logicalName}'] = value;{NEW_LINE}";
                code += $"{TAB}{TAB}{TAB}{TAB}u['{logicalName}'] = value;{NEW_LINE}";
                code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
                code += $"{TAB}{TAB}}});{NEW_LINE}";
            }
            return code;
        }

        private static string GeneratorCode()
        {
            var code = string.Empty;

            foreach (var attribute in EntityMetadata?.Attributes?.OrderBy(x => x.SchemaName))
            {
                if (attribute.AttributeType == AttributeTypeCode.PartyList ||
                    attribute.AttributeType == AttributeTypeCode.EntityName
                    ) continue;
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
                    code += $"{TAB}{TAB}{TAB}{attribute.SchemaName}: {{ {a}{r} }},{NEW_LINE}";
                }
                else if (attribute.AttributeType == AttributeTypeCode.DateTime)
                {
                    var suffix = GetSuffix(attribute);
                    code += $"{TAB}{TAB}{TAB}{attribute.SchemaName}{suffix}: {{ {a}{r} }},{NEW_LINE}";
                }
                else if (attribute is MultiSelectPicklistAttributeMetadata)
                {
                    var g = (attribute is MultiSelectPicklistAttributeMetadata) ? $", g: true" : $"";
                    code += $"{TAB}{TAB}{TAB}{attribute.SchemaName}: {{ {a}{g}{r} }},{NEW_LINE}";
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
                        XrmHelper.EntitiesMetadata.AddIfNotExist(CrmServiceClient, entityLogicalName);
                        var entityMetadata = XrmHelper.EntitiesMetadata.First(x => x.LogicalName == entityLogicalName);
                        var b = $"b: '{((attribute.IsCustomAttribute ?? false) ? attribute.SchemaName : attribute.LogicalName)}'";
                        var c = $"c: '{entityMetadata.LogicalCollectionName}'";
                        var d = $"d: '{lookup.Targets[0]}'";
                        code += $"{TAB}{TAB}{TAB}{attribute.SchemaName}: {{ {b}, {a}, {c}, {d}{r} }},{NEW_LINE}";
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
                            foreach (var entityLogicalName in lookup.Targets)
                            {
                                var navigation = EntityMetadata.ManyToOneRelationships.FirstOrDefault(x => x.ReferencingAttribute == attribute.LogicalName && x.ReferencedEntity == entityLogicalName);
                                var b = $"b: '{navigation?.ReferencingEntityNavigationPropertyName}'";
                                var c = $"c: '{XrmHelper.EntitiesMetadata.First(x => x.LogicalName == entityLogicalName).LogicalCollectionName}'";
                                var d = $"d: '{entityLogicalName}'";
                                code += $"{TAB}{TAB}{TAB}{navigation?.ReferencingEntityNavigationPropertyName}: {{ {b}, {a}, {c}, {d}{r} }},{NEW_LINE}";
                            }
                        }
                    }
                }
                else if(attribute is ImageAttributeMetadata image)
                {
                    if ((image.IsPrimaryImage ?? false) && image.LogicalName != "entityimage")
                        code += GetGeneratorImageCode("EntityImage", image.LogicalName);
                    code += GetGeneratorImageCode(attribute.SchemaName, attribute.LogicalName);
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

        private static string GetNameSpace()
        {
            var parts = RootNamespace.Split(".".ToCharArray());
            var @namespace = parts.Length > 1 ? parts[1] : parts[0];
            return Utility.SafeIdentifier(@namespace);
        }
    }
}
