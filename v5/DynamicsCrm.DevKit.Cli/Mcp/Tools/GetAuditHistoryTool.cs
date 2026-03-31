using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using System.Linq;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetAuditHistoryTool
    {
        private readonly ServiceClient _serviceClient;

        public GetAuditHistoryTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "get_audit_history", Title = "Retrieve audit history for a Dataverse record (who changed what, when)",
            Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Retrieve audit history for a specific Dataverse record. " +
            "Shows who changed what fields, when, with old and new values.\n\n" +

            "PARAMETERS:\n" +
            "- entity_name (required): Entity logical name (e.g., 'account').\n" +
            "- record_id (required): GUID of the record.\n" +
            "- minutes_ago: Return entries from last N minutes (default: 1440 = 24h, max: 43200 = 30 days).\n" +
            "- user_filter: Filter by user display name (contains match).\n" +
            "- operation: Filter by 'Create', 'Update', or 'Delete'.\n" +
            "- attribute_name: Show changes only for a specific field.\n" +
            "- max_records: Maximum entries to return (default: 50, max: 500).\n\n" +

            "RETURNS:\n" +
            "- Table of audit entries: timestamp, user, action, field, old value, new value\n\n" +

            "WHEN TO USE:\n" +
            "- When a user asks 'who changed this field?' or 'when was this record modified?'\n" +
            "- To debug unexpected data changes (e.g., integration overwriting values)\n" +
            "- For compliance auditing (GDPR, SOX data change trails)\n" +
            "- To investigate data disputes ('the deal was supposed to be $1M')\n" +
            "- After a data issue to trace the root cause\n\n" +

            "TIPS:\n" +
            "- Audit must be enabled at organization level AND entity level to work\n" +
            "- Not all field changes are audited - only fields with auditing enabled\n" +
            "- Create actions show all initial field values\n" +
            "- Use user_filter to find changes made by a specific user or integration account\n" +
            "- Use attribute_name to focus on a specific field's change history")]
        public string get_audit_history(
            [Description(
                "Entity logical name (always lowercase). " +
                "Examples: 'account', 'contact', 'lead', 'opportunity', 'incident'. " +
                "If unsure, call get_entities_metadata first."
            )] string entity_name,
            [Description(
                "GUID of the record to get audit history for. " +
                "Format: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'. " +
                "Use execute_fetchxml or search to find the correct ID."
            )] string record_id,
            [Description(
                "Return audit entries from the last N minutes. " +
                "Default: 1440 (24 hours). Max: 43200 (30 days)."
            )] int minutes_ago = 1440,
            [Description(
                "Filter by user display name (contains match). " +
                "Examples: 'John', 'admin', 'sync@contoso.com'. " +
                "Leave empty for all users."
            )] string user_filter = "",
            [Description(
                "Filter by operation type. " +
                "Values: 'Create', 'Update', 'Delete'. " +
                "Leave empty for all operations."
            )] string operation = "",
            [Description(
                "Filter to only show changes for a specific attribute logical name. " +
                "Examples: 'revenue', 'statuscode', 'name'. " +
                "Leave empty for all attributes."
            )] string attribute_name = "",
            [Description(
                "Maximum number of audit entries to return. " +
                "Default: 50. Max: 500."
            )] int max_records = 50)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return "Error: entity_name is required.";

            if (string.IsNullOrWhiteSpace(record_id))
                return "Error: record_id is required.";

            if (!Guid.TryParse(record_id.Trim(), out var id))
                return $"Error: '{record_id}' is not a valid GUID.";

            if (minutes_ago < 1) minutes_ago = 1440;
            if (minutes_ago > 43200) minutes_ago = 43200;
            if (max_records < 1) max_records = 50;
            if (max_records > 500) max_records = 500;

            entity_name = entity_name.Trim().ToLowerInvariant();

            try
            {
                var request = new RetrieveRecordChangeHistoryRequest
                {
                    Target = new EntityReference(entity_name, id),
                    PagingInfo = new Microsoft.Xrm.Sdk.Query.PagingInfo
                    {
                        PageNumber = 1,
                        Count = max_records
                    }
                };

                var response = (RetrieveRecordChangeHistoryResponse)_serviceClient.Execute(request);
                var auditDetails = response.AuditDetailCollection;

                if (auditDetails == null || auditDetails.AuditDetails.Count == 0)
                    return FormatNoResults(entity_name, id, minutes_ago);

                return FormatAuditEntries(entity_name, id, auditDetails, minutes_ago, user_filter, operation, attribute_name);
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
                if (msg.Contains("auditing is not enabled", StringComparison.OrdinalIgnoreCase) ||
                    msg.Contains("audit", StringComparison.OrdinalIgnoreCase) && msg.Contains("not enabled", StringComparison.OrdinalIgnoreCase))
                {
                    return $"[Error] Audit is not enabled\n" +
                           $"Entity: {entity_name}\n" +
                           $"Message: {msg}\n" +
                           "Tip: Enable auditing: Settings > Administration > System Settings > Auditing tab";
                }
                return $"Error: Failed to retrieve audit history: {msg}";
            }
        }

        private static string FormatNoResults(string entityName, Guid recordId, int minutesAgo)
        {
            var sb = new StringBuilder(256);
            sb.AppendLine($"[AuditHistory] {entityName}: {recordId}");
            sb.AppendLine($"Entries: 0 (last {FormatTimeWindow(minutesAgo)})");
            sb.AppendLine("Tip: Audit may not be enabled for this entity. Check System Settings > Auditing.");
            return sb.ToString();
        }

        private static string FormatAuditEntries(
            string entityName, Guid recordId,
            AuditDetailCollection auditDetails,
            int minutesAgo, string userFilter, string operationFilter, string attributeFilter)
        {
            var sinceUtc = DateTime.UtcNow.AddMinutes(-minutesAgo);
            var entries = new List<AuditEntry>();

            foreach (var auditDetail in auditDetails.AuditDetails)
            {
                if (auditDetail is not AttributeAuditDetail attrAudit)
                    continue;

                var audit = attrAudit.AuditRecord;
                var createdOn = audit.GetAttributeValue<DateTime?>("createdon");

                if (createdOn.HasValue && createdOn.Value.ToUniversalTime() < sinceUtc)
                    continue;

                var actionValue = audit.GetAttributeValue<OptionSetValue>("action")?.Value ?? 0;
                var actionStr = FormatAction(actionValue);

                if (!string.IsNullOrWhiteSpace(operationFilter) &&
                    !actionStr.Equals(operationFilter.Trim(), StringComparison.OrdinalIgnoreCase))
                    continue;

                var userRef = audit.GetAttributeValue<EntityReference>("userid");
                var userName = userRef?.Name ?? userRef?.Id.ToString() ?? "";

                if (!string.IsNullOrWhiteSpace(userFilter) &&
                    userName.IndexOf(userFilter.Trim(), StringComparison.OrdinalIgnoreCase) < 0)
                    continue;

                var oldValues = attrAudit.OldValue?.Attributes;
                var newValues = attrAudit.NewValue?.Attributes;

                if (actionStr == "Create" && newValues != null && newValues.Count > 0)
                {
                    foreach (var attr in newValues)
                    {
                        if (!string.IsNullOrWhiteSpace(attributeFilter) &&
                            !attr.Key.Equals(attributeFilter.Trim(), StringComparison.OrdinalIgnoreCase))
                            continue;

                        entries.Add(new AuditEntry
                        {
                            Timestamp = createdOn?.ToString("yyyy-MM-dd HH:mm:ss", CultureInfo.InvariantCulture) ?? "",
                            User = userName,
                            Action = actionStr,
                            Field = attr.Key,
                            OldValue = "-",
                            NewValue = FormatAttributeValue(attr.Value, attrAudit.NewValue, attr.Key)
                        });
                    }
                }
                else if (oldValues != null || newValues != null)
                {
                    var changedFields = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
                    if (oldValues != null) foreach (var a in oldValues) changedFields.Add(a.Key);
                    if (newValues != null) foreach (var a in newValues) changedFields.Add(a.Key);

                    foreach (var field in changedFields)
                    {
                        if (!string.IsNullOrWhiteSpace(attributeFilter) &&
                            !field.Equals(attributeFilter.Trim(), StringComparison.OrdinalIgnoreCase))
                            continue;

                        var oldVal = oldValues != null && oldValues.TryGetValue(field, out var ov)
                            ? FormatAttributeValue(ov, attrAudit.OldValue, field)
                            : "-";
                        var newVal = newValues != null && newValues.TryGetValue(field, out var nv)
                            ? FormatAttributeValue(nv, attrAudit.NewValue, field)
                            : "-";

                        entries.Add(new AuditEntry
                        {
                            Timestamp = createdOn?.ToString("yyyy-MM-dd HH:mm:ss", CultureInfo.InvariantCulture) ?? "",
                            User = userName,
                            Action = actionStr,
                            Field = field,
                            OldValue = oldVal,
                            NewValue = newVal
                        });
                    }
                }
                else
                {
                    if (!string.IsNullOrWhiteSpace(attributeFilter))
                        continue;

                    entries.Add(new AuditEntry
                    {
                        Timestamp = createdOn?.ToString("yyyy-MM-dd HH:mm:ss", CultureInfo.InvariantCulture) ?? "",
                        User = userName,
                        Action = actionStr,
                        Field = "-",
                        OldValue = "-",
                        NewValue = actionStr == "Create" ? "(record created)" : "-"
                    });
                }
            }

            var sb = new StringBuilder(entries.Count * 100 + 256);
            sb.AppendLine($"[AuditHistory] {entityName}: {recordId}");
            sb.AppendLine($"Entries: {entries.Count} (last {FormatTimeWindow(minutesAgo)})");
            sb.AppendLine();

            if (entries.Count == 0)
            {
                sb.AppendLine("No matching audit entries found for the specified filters.");
                return sb.ToString();
            }

            sb.AppendLine("timestamp\tuser\taction\tfield\toldValue\tnewValue");
            foreach (var e in entries)
            {
                sb.AppendLine($"{e.Timestamp}\t{EscapeTab(e.User)}\t{e.Action}\t{e.Field}\t{EscapeTab(e.OldValue)}\t{EscapeTab(e.NewValue)}");
            }

            return sb.ToString();
        }

        private static string FormatAttributeValue(object value, Entity entity, string attributeName)
        {
            if (value == null) return "-";

            if (entity != null && entity.FormattedValues.TryGetValue(attributeName, out var formatted) && !string.IsNullOrEmpty(formatted))
                return formatted;

            return value switch
            {
                EntityReference er => string.IsNullOrWhiteSpace(er.Name) ? er.Id.ToString() : er.Name,
                OptionSetValue osv => osv.Value.ToString(),
                Money money => money.Value.ToString("N2", CultureInfo.InvariantCulture),
                DateTime dt => dt.ToString("yyyy-MM-dd HH:mm:ss", CultureInfo.InvariantCulture),
                bool b => b ? "Yes" : "No",
                Guid g => g.ToString(),
                _ => value.ToString()
            };
        }

        private static string FormatAction(int actionValue) => actionValue switch
        {
            1 => "Create",
            2 => "Update",
            3 => "Delete",
            4 => "Activate",
            5 => "Deactivate",
            11 => "Cascade",
            12 => "Merge",
            13 => "Assign",
            41 => "SetState",
            _ => $"Action({actionValue})"
        };

        private static string FormatTimeWindow(int minutesAgo)
        {
            if (minutesAgo <= 60) return $"{minutesAgo} min";
            if (minutesAgo <= 1440) return $"{minutesAgo / 60}h";
            return $"{minutesAgo / 1440}d";
        }

        private static string EscapeTab(string value) =>
            value.Replace("\t", " ").Replace("\n", " ").Replace("\r", "");

        private sealed class AuditEntry
        {
            public string Timestamp { get; set; }
            public string User { get; set; }
            public string Action { get; set; }
            public string Field { get; set; }
            public string OldValue { get; set; }
            public string NewValue { get; set; }
        }
    }
}
