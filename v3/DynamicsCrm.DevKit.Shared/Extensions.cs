using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;

namespace DynamicsCrm.DevKit.Shared
{
    public static class Extensions
    {
        public static void ForEach<T>(this IEnumerable<T> ie, Action<T> action)
        {
            foreach (var i in ie)
            {
                action(i);
            }
        }

        public static List<NameValue> OptionSetValues(this AttributeMetadata attribute)
        {
            var values = new List<NameValue>();
            if (!XrmHelper.IsOptionSet(attribute)) return values;
            var options = ((EnumAttributeMetadata)attribute)?.OptionSet?.Options;
            if (options == null) return values;
            foreach (var option in options)
            {
                var name = option?.Label?.UserLocalizedLabel?.Label ?? String.Empty;
                if (name.Length == 0) continue;
                name = Utility.SafeIdentifier(name);
                var value = option?.Value ?? -1;
                if (name.Length == 0 || value == -1) continue;
                var suffix = string.Empty;
                if (options.Count(x => Utility.SafeIdentifier(x?.Label?.UserLocalizedLabel.Label) == name) > 1) {
                    var count = values.Count(x => x.Name2 == name);
                    suffix = $"_{value}";
                }
                values.Add(new NameValue
                {
                    Name = $"{name}{suffix}",
                    Name2 = $"{name}",
                    Value = $"{value}",
                    Label = option?.Label?.UserLocalizedLabel?.Label ?? String.Empty
                });
            }
            return values.OrderBy(x => x.Name).ToList();
        }

        //public static string GetEntityReferenceLogicalName(this AttributeMetadata attribute)
        //{
        //    if (attribute.AttributeType == AttributeTypeCode.Owner)
        //    {
        //        return "systemuser;team";
        //    }
        //    else if (attribute.AttributeType == AttributeTypeCode.Lookup || attribute.AttributeType == AttributeTypeCode.Customer || attribute.AttributeType == AttributeTypeCode.PartyList)
        //    {
        //        var lookup = (LookupAttributeMetadata)attribute;
        //        var value = string.Empty;
        //        foreach (var target in lookup.Targets)
        //            value += target + ";";
        //        if (value.Length > 0) value = value.Substring(0, value.Length - 1);
        //        return value;
        //    }
        //    return string.Empty;
        //}

        public static int? GetMaxLength(this AttributeMetadata attribute)
        {
            if (attribute is StringAttributeMetadata attr1)
                return attr1.MaxLength ?? (int?)null;
            if (attribute is MemoAttributeMetadata attr2)
                return attr2.MaxLength ?? (int?)null;
            return (int?)null;
        }

        public static decimal? GetMinValue(this AttributeMetadata attribute)
        {
            if (attribute is IntegerAttributeMetadata attr1)
                return attr1.MinValue ?? -1;
            if (attribute is DecimalAttributeMetadata attr2)
                return attr2.MinValue ?? -1;
            if (attribute is MoneyAttributeMetadata attr3)
                return attr3.MinValue != null ? (decimal)attr3.MinValue.Value : -1;
            if (attribute is DoubleAttributeMetadata attr)
                return attr.MinValue != null ? (decimal)attr.MinValue.Value : -1;
            return (decimal?)null;
        }

        public static decimal? GetMaxValue(this AttributeMetadata attribute)
        {
            if (attribute is IntegerAttributeMetadata attr1)
                return attr1.MaxValue ?? -1;
            if (attribute is DecimalAttributeMetadata attr2)
                return attr2.MaxValue ?? -1;
            if (attribute is MoneyAttributeMetadata attr3)
                return attr3.MaxValue != null ? (decimal)attr3.MaxValue.Value : -1;
            if (attribute is DoubleAttributeMetadata attr)
                return attr.MaxValue != null ? (decimal)attr.MaxValue.Value : -1;
            return (decimal?)null;
        }

        public static string TrimNewLine(this string value)
        {
            if (value == null) return null;
            return value.Trim().Replace("\r\n", "").Replace("\r", "").Replace("\n", "");
        }

        public static bool IsReadOnly(this AttributeMetadata attribute)
        {
            return attribute.SourceType == 1 || attribute.SourceType == 2;
        }

        public static void AddIfNotExist(this List<EntityMetadata> entitiesMetadata, CrmServiceClient crmServiceClient, string entityLogicalName)
        {
            if (!XrmHelper.EntitiesMetadata.Any(x => x.LogicalName == entityLogicalName))
            {
                XrmHelper.EntitiesMetadata.Add(XrmHelper.GetEntityMetadata(crmServiceClient, entityLogicalName));
            }
        }
    }
}
