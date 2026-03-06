using Microsoft.Xrm.Sdk;
using System;
using System.Globalization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class DataverseValueFormatter
    {
        public static object FormatValue(Entity entity, string attributeName)
        {
            if (!entity.Attributes.TryGetValue(attributeName, out var raw) || raw == null)
                return null;

            var formatted = entity.FormattedValues.TryGetValue(attributeName, out var fv) ? fv : null;

            return raw switch
            {
                EntityReference er => new
                {
                    logical_name = er.LogicalName,
                    id = er.Id,
                    name = string.IsNullOrWhiteSpace(er.Name) ? null : er.Name,
                    formatted
                },
                OptionSetValue osv => new
                {
                    value = osv.Value,
                    formatted
                },
                Money money => new
                {
                    value = money.Value,
                    formatted = formatted ?? money.Value.ToString("N2", CultureInfo.InvariantCulture)
                },
                DateTime dt => new
                {
                    value = dt,
                    formatted = formatted ?? dt.ToString("yyyy-MM-dd HH:mm:ss", CultureInfo.InvariantCulture)
                },
                bool b => new
                {
                    value = b,
                    formatted = formatted ?? (b ? "Yes" : "No")
                },
                AliasedValue av => FormatAliased(av),
                byte[] bytes => new
                {
                    bytes = bytes.Length
                },
                _ => new
                {
                    value = raw.ToString(),
                    formatted
                }
            };
        }

        private static object FormatAliased(AliasedValue av)
        {
            if (av?.Value == null)
                return null;

            return av.Value switch
            {
                EntityReference er => new { logical_name = er.LogicalName, id = er.Id, name = er.Name },
                OptionSetValue osv => new { value = osv.Value },
                Money money => new { value = money.Value },
                DateTime dt => new { value = dt },
                _ => new { value = av.Value.ToString() }
            };
        }
    }
}
