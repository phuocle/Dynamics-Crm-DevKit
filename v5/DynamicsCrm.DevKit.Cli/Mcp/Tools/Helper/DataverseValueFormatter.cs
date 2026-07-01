using Microsoft.Xrm.Sdk;
using System;
using System.Globalization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class DataverseValueFormatter
    {
        public static string FormatValue(Entity entity, string attributeName)
        {
            if (!entity.Attributes.TryGetValue(attributeName, out var raw) || raw == null)
                return "";

            if (entity.FormattedValues.TryGetValue(attributeName, out var formatted) && !string.IsNullOrEmpty(formatted))
                return formatted;

            return raw switch
            {
                EntityReference er => string.IsNullOrWhiteSpace(er.Name)
                    ? $"{er.LogicalName}:{er.Id}"
                    : $"{er.Name} ({er.LogicalName}:{er.Id})",
                OptionSetValue osv => osv.Value.ToString(),
                Money money => money.Value.ToString("N2", CultureInfo.InvariantCulture),
                DateTime dt => dt.ToString("yyyy-MM-dd HH:mm:ss", CultureInfo.InvariantCulture),
                bool b => b ? "Yes" : "No",
                AliasedValue av => FormatAliased(av),
                Guid g => g.ToString(),
                byte[] bytes => $"[{bytes.Length} bytes]",
                _ => raw.ToString()
            };
        }

        private static string FormatAliased(AliasedValue av)
        {
            if (av?.Value == null)
                return "";

            return av.Value switch
            {
                EntityReference er => string.IsNullOrWhiteSpace(er.Name)
                    ? $"{er.LogicalName}:{er.Id}"
                    : $"{er.Name} ({er.LogicalName}:{er.Id})",
                OptionSetValue osv => osv.Value.ToString(),
                Money money => money.Value.ToString("N2", CultureInfo.InvariantCulture),
                DateTime dt => dt.ToString("yyyy-MM-dd HH:mm:ss", CultureInfo.InvariantCulture),
                Guid g => g.ToString(),
                _ => av.Value.ToString()
            };
        }
    }
}
