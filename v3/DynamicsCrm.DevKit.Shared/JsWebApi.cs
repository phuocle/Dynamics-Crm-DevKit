using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DynamicsCrm.DevKit.Shared
{
    public static class JsWebApi
    {
        private const string NEW_LINE = "\r\n";
        private const string TAB = "\t";
        private static EntityMetadata EntityMetadata {get;set;}
        private static string RootNamespace { get; set; }

        public static string GetCode(CrmServiceClient crmServiceClient, EntityMetadata entityMetadata, string schemaName, string rootNamespace)
        {
            EntityMetadata = entityMetadata;
            RootNamespace = rootNamespace;

            var code = string.Empty;

            var @namespace = GetNameSpace();
            var logicalName = schemaName.ToLower();

            code += $"'use strict';{NEW_LINE}";
            code += $"/** @namespace {@namespace} */{NEW_LINE}";
            code += $"var {@namespace};{NEW_LINE}";
            code += $"(function ({@namespace}) {{{NEW_LINE}";
            code += $"{TAB}'use strict';{NEW_LINE}";
            code += $"{TAB}{@namespace}.{schemaName}Api = function (e) {{{NEW_LINE}";
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

            return code;
        }

        private static string GeneratorCode()
        {
            var code = string.Empty;

            foreach (var attribute in EntityMetadata.Attributes.OrderBy(x => x.SchemaName))
            {
                if (attribute.AttributeOf != null) continue;
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
                    attribute.AttributeType == AttributeTypeCode.ManagedProperty
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
                else if (attribute is LookupAttributeMetadata lookup)
                {
                    a = $"a: '_{attribute.LogicalName}_value'";
                    var b = $"b: '{((attribute.IsCustomAttribute ?? false) ? attribute.SchemaName : attribute.LogicalName)}'";
                    if (lookup.Targets.Count() == 1)
                    {
                        var d = $"d: '{lookup.Targets[0]}'";
                        code += $"{TAB}{TAB}{TAB}{attribute.SchemaName}: {{ {b}, {a}, {d}{r} }},{NEW_LINE}";
                    }
                    else
                    {
                        foreach (var entity in lookup.Targets)
                        {
                            var d = $"d: '{entity}'";
                            code += $"{TAB}{TAB}{TAB}{attribute.SchemaName}_{entity}: {{ {b}, {a}, {d}{r} }},{NEW_LINE}";
                        }
                    }
                }
                else
                {

                }

            }


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
