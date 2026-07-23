using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
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
                EntityCollection ec => FormatEntityCollection(ec),
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

        private static string FormatEntityCollection(EntityCollection ec)
        {
            if (ec?.Entities == null || ec.Entities.Count == 0)
                return "[]";

            var parts = new List<string>(ec.Entities.Count);
            foreach (var e in ec.Entities)
            {
                if (e.Contains("partyid") && e["partyid"] is EntityReference partyRef)
                {
                    var name = string.IsNullOrWhiteSpace(partyRef.Name) ? "" : partyRef.Name;
                    var addr = e.Contains("addressused") ? e["addressused"]?.ToString() : null;

                    if (!string.IsNullOrWhiteSpace(addr))
                        parts.Add($"{name} ({partyRef.LogicalName}:{partyRef.Id}) <{addr}>");
                    else if (!string.IsNullOrEmpty(name))
                        parts.Add($"{name} ({partyRef.LogicalName}:{partyRef.Id})");
                    else
                        parts.Add($"{partyRef.LogicalName}:{partyRef.Id}");
                }
                else
                {
                    parts.Add(e.Id != Guid.Empty ? $"{e.LogicalName}:{e.Id}" : e.LogicalName);
                }
            }
            return string.Join("; ", parts);
        }
    }
}

