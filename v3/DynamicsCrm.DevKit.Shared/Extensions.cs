using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk.Metadata;
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
                var suffix = string.Empty;
                var name = option?.Label?.UserLocalizedLabel?.Label ?? String.Empty;
                var value = option?.Value ?? -1;
                if (name.Length == 0 || value == -1) continue;
                if (values.Any(x => x.Name2 == name)) {
                    var count = values.Count(x => x.Name2 == name);
                    suffix = $" {count + 1}";
                }
                values.Add(new NameValue
                {
                    Name = $"{name}{suffix}",
                    Name2 = $"{name}",
                    Value = $"{value}"
                });
            }
            return values.OrderBy(x => x.Name).ToList();
        }
    }
}
