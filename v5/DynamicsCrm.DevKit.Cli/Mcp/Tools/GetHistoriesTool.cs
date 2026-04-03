using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
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
    public class GetHistoriesTool
    {
        private readonly ServiceClient _serviceClient;

        public GetHistoriesTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "get_histories", Title = "Retrieve audit history for Dataverse records (who changed what, when)",
            Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Retrieve audit history for Dataverse records. " +
            "Shows who changed what fields, when, with old and new values.\n\n" +

            "TWO MODES:\n" +
            "- record_id PROVIDED → Detail mode: field-level old/new values for a single record\n" +
            "  Requires: entity_name + record_id\n" +
            "- record_id EMPTY → Browse mode: summary list of audit entries across records/entities\n" +
            "  entity_name is optional (empty = all entities)\n\n" +

            "PARAMETERS:\n" +
            "- entity_name: Entity logical name. Required in detail mode. Optional in browse mode (empty = all entities).\n" +
            "- record_id: GUID of the record. Empty = browse mode, provided = detail mode.\n" +
            "- minutes_ago: Return entries from last N minutes (default: 1440 = 24h, max: 43200 = 30 days). Ignored when from_date is set.\n" +
            "- from_date: ISO 8601 start date (e.g., '2026-03-01'). Overrides minutes_ago when set.\n" +
            "- to_date: ISO 8601 end date (e.g., '2026-03-15'). Used with from_date. Defaults to now.\n" +
            "- user_filter: Filter by user display name (contains match) or email address (auto-resolved to display name).\n" +
            "- operation: Filter by operation type. Values: 'Create', 'Update', 'Delete', 'Activate', 'Deactivate', 'Assign', 'Merge', 'Cascade', 'SetState'.\n" +
            "- attribute_name: Detail mode only. Show changes only for a specific field.\n" +
            "- max_records: Maximum entries to return (default: 50, max: 500).\n\n" +

            "RETURNS:\n" +
            "- With record_id: Table of audit entries: timestamp, user, action, field, old value, new value\n" +
            "- Without record_id: Summary table: timestamp, user, entity, record, action, operation\n\n" +

            "WHEN TO USE:\n" +
            "- When a user asks 'who changed this field?' or 'when was this record modified?'\n" +
            "- To debug unexpected data changes (e.g., integration overwriting values)\n" +
            "- For compliance auditing (GDPR, SOX data change trails)\n" +
            "- To investigate data disputes ('the deal was supposed to be $1M')\n" +
            "- To find all changes to an entity ('what changed on any account today?')\n" +
            "- To audit deleted records ('show all deleted accounts this week')\n" +
            "- To track user activity across entities ('what did the sync service change?')\n\n" +

            "TIPS:\n" +
            "- Audit must be enabled at organization level AND entity level to work\n" +
            "- Not all field changes are audited - only fields with auditing enabled\n" +
            "- Create actions show all initial field values\n" +
            "- Use user_filter to find changes made by a specific user or integration account\n" +
            "- Use attribute_name to focus on a specific field's change history (detail mode only)\n" +
            "- Browse first (no record_id) to find records, then get detail (with record_id)")]
        public string get_histories(
            [Description(
                "Entity logical name (always lowercase). " +
                "Required when record_id is provided (detail mode). " +
                "Optional in browse mode (empty = search across all entities). " +
                "Examples: 'account', 'contact', 'lead', 'opportunity', 'incident'. " +
                "If unsure, call get_metadata_entities first."
            )] string entity_name = "",
            [Description(
                "GUID of the record. When provided: detail mode (field-level changes). " +
                "When empty: browse mode (summary list). " +
                "Format: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'. " +
                "Use execute_fetchxml or search to find the correct ID."
            )] string record_id = "",
            [Description(
                "Return audit entries from the last N minutes. " +
                "Default: 1440 (24 hours). Max: 43200 (30 days). " +
                "Ignored when from_date is provided."
            )] int minutes_ago = 1440,
            [Description(
                "Filter by user display name (contains match) or email address. " +
                "When value contains '@', resolves email to display name via systemuser lookup. " +
                "Examples: 'John', 'admin', 'sync@contoso.com'. " +
                "Leave empty for all users."
            )] string user_filter = "",
            [Description(
                "Filter by operation type. " +
                "Values: 'Create', 'Update', 'Delete', 'Activate', 'Deactivate', " +
                "'Assign', 'Merge', 'Cascade', 'SetState'. " +
                "Leave empty for all operations."
            )] string operation = "",
            [Description(
                "Detail mode only. Filter to show changes for a specific attribute logical name. " +
                "Examples: 'revenue', 'statuscode', 'name'. " +
                "Leave empty for all attributes. Ignored in browse mode."
            )] string attribute_name = "",
            [Description(
                "Maximum number of audit entries to return. " +
                "Default: 50. Max: 500."
            )] int max_records = 50,
            [Description(
                "ISO 8601 start date/datetime for the audit query range. " +
                "When provided, overrides minutes_ago. " +
                "Examples: '2026-03-01', '2026-03-01T00:00:00'. " +
                "Leave empty to use minutes_ago."
            )] string from_date = "",
            [Description(
                "ISO 8601 end date/datetime for the audit query range. " +
                "Used together with from_date. " +
                "Examples: '2026-03-15', '2026-03-15T23:59:59'. " +
                "Leave empty to use current time as end."
            )] string to_date = "")
        {
            if (!string.IsNullOrWhiteSpace(record_id) && string.IsNullOrWhiteSpace(entity_name))
                return "Error: entity_name is required when record_id is provided.";

            if (!string.IsNullOrWhiteSpace(record_id) && !Guid.TryParse(record_id.Trim(), out _))
                return $"Error: '{record_id}' is not a valid GUID.";

            if (minutes_ago < 1) minutes_ago = 1440;
            if (minutes_ago > 43200) minutes_ago = 43200;
            if (max_records < 1) max_records = 50;
            if (max_records > 500) max_records = 500;

            entity_name = entity_name?.Trim().ToLowerInvariant() ?? "";

            DateTime? fromUtc = null, toUtc = null;
            if (!string.IsNullOrWhiteSpace(from_date))
            {
                if (!DateTime.TryParse(from_date.Trim(), CultureInfo.InvariantCulture,
                        DateTimeStyles.AssumeUniversal | DateTimeStyles.AdjustToUniversal, out var fd))
                    return $"Error: '{from_date}' is not a valid ISO 8601 date.";
                fromUtc = fd;
            }
            if (!string.IsNullOrWhiteSpace(to_date))
            {
                if (!DateTime.TryParse(to_date.Trim(), CultureInfo.InvariantCulture,
                        DateTimeStyles.AssumeUniversal | DateTimeStyles.AdjustToUniversal, out var td))
                    return $"Error: '{to_date}' is not a valid ISO 8601 date.";
                toUtc = td;
            }

            var resolvedUserFilter = ResolveUserFilter(user_filter?.Trim() ?? "");
            if (resolvedUserFilter.StartsWith("[AMBIGUOUS_USER]"))
                return resolvedUserFilter.Substring("[AMBIGUOUS_USER]".Length);

            DateTime sinceUtc, untilUtc;
            if (fromUtc.HasValue)
            {
                sinceUtc = fromUtc.Value;
                untilUtc = toUtc ?? DateTime.UtcNow;
            }
            else
            {
                sinceUtc = DateTime.UtcNow.AddMinutes(-minutes_ago);
                untilUtc = toUtc ?? DateTime.UtcNow;
            }

            if (!string.IsNullOrWhiteSpace(record_id))
            {
                var id = Guid.Parse(record_id.Trim());
                return ExecuteDetailMode(entity_name, id, sinceUtc, untilUtc,
                    resolvedUserFilter, operation, attribute_name, max_records, minutes_ago);
            }

            return ExecuteBrowseMode(entity_name, sinceUtc, untilUtc,
                resolvedUserFilter, operation, max_records, minutes_ago);
        }

        private string ResolveUserFilter(string userFilter)
        {
            if (string.IsNullOrWhiteSpace(userFilter))
                return "";

            if (userFilter.Contains('@'))
            {
                try
                {
                    var userQuery = new QueryExpression("systemuser")
                    {
                        ColumnSet = new ColumnSet("fullname", "internalemailaddress", "isdisabled", "businessunitid")
                    };
                    userQuery.Criteria.AddCondition("internalemailaddress", ConditionOperator.Equal, userFilter);

                    var result = _serviceClient.RetrieveMultiple(userQuery);
                    if (result.Entities.Count > 1)
                        return $"[AMBIGUOUS_USER]{FormatMultipleUsers(userFilter, result.Entities)}";
                    if (result.Entities.Count == 1)
                    {
                        var fullName = result.Entities[0].GetAttributeValue<string>("fullname");
                        if (!string.IsNullOrWhiteSpace(fullName))
                            return fullName;
                    }
                }
                catch
                {
                    // Fall through to use the original filter
                }
            }

            return userFilter;
        }

        private static string FormatMultipleUsers(string input, DataCollection<Entity> users)
        {
            var sb = new StringBuilder(users.Count * 120 + 256);
            sb.AppendLine($"[Multiple Users] {users.Count} users match '{input}'. Re-call with the exact display name:");
            sb.AppendLine();
            sb.AppendLine("systemuserid\tfullname\temail\tstatus\tbusinessunit");
            foreach (var u in users)
            {
                var id = u.GetAttributeValue<Guid>("systemuserid");
                var name = u.GetAttributeValue<string>("fullname") ?? "";
                var email = u.GetAttributeValue<string>("internalemailaddress") ?? "";
                var disabled = u.GetAttributeValue<bool>("isdisabled");
                var buRef = u.GetAttributeValue<EntityReference>("businessunitid");
                var buName = buRef?.Name ?? "";
                sb.AppendLine($"{id}\t{EscapeTab(name)}\t{EscapeTab(email)}\t{(disabled ? "Disabled" : "Active")}\t{EscapeTab(buName)}");
            }
            return sb.ToString();
        }

        private string ExecuteDetailMode(string entityName, Guid id,
            DateTime sinceUtc, DateTime untilUtc,
            string userFilter, string operation, string attributeName,
            int maxRecords, int minutesAgo)
        {
            try
            {
                var request = new RetrieveRecordChangeHistoryRequest
                {
                    Target = new EntityReference(entityName, id),
                    PagingInfo = new Microsoft.Xrm.Sdk.Query.PagingInfo
                    {
                        PageNumber = 1,
                        Count = maxRecords
                    }
                };

                var response = (RetrieveRecordChangeHistoryResponse)_serviceClient.Execute(request);
                var auditDetails = response.AuditDetailCollection;

                if (auditDetails == null || auditDetails.AuditDetails.Count == 0)
                    return FormatNoResults(entityName, id, minutesAgo);

                return FormatAuditEntries(entityName, id, auditDetails,
                    sinceUtc, untilUtc, userFilter, operation, attributeName);
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
                if (msg.Contains("auditing is not enabled", StringComparison.OrdinalIgnoreCase) ||
                    msg.Contains("audit", StringComparison.OrdinalIgnoreCase) && msg.Contains("not enabled", StringComparison.OrdinalIgnoreCase))
                {
                    return $"[Error] Audit is not enabled\n" +
                           $"Entity: {entityName}\n" +
                           $"Message: {msg}\n" +
                           "Tip: Enable auditing: Settings > Administration > System Settings > Auditing tab";
                }
                return $"Error: Failed to retrieve audit history: {msg}";
            }
        }

        private string ExecuteBrowseMode(string entityName,
            DateTime sinceUtc, DateTime untilUtc,
            string userFilter, string operation,
            int maxRecords, int minutesAgo)
        {
            try
            {
                int? objectTypeCode = null;
                if (!string.IsNullOrWhiteSpace(entityName))
                {
                    objectTypeCode = ResolveObjectTypeCode(entityName);
                    if (!objectTypeCode.HasValue)
                        return $"Error: Could not resolve entity '{entityName}' to an ObjectTypeCode. Verify the entity name is correct.";
                }

                var fetchXml = BuildBrowseFetchXml(objectTypeCode, sinceUtc, untilUtc, operation, maxRecords);
                var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));

                if (result.Entities.Count == 0)
                    return FormatBrowseNoResults(entityName, minutesAgo, userFilter, operation);

                return FormatBrowseResults(result.Entities, entityName, minutesAgo, userFilter);
            }
            catch (Exception ex)
            {
                return $"Error: Failed to retrieve audit entries: {ex.Message}";
            }
        }

        private int? ResolveObjectTypeCode(string entityName)
        {
            try
            {
                var request = new RetrieveEntityRequest
                {
                    LogicalName = entityName,
                    EntityFilters = EntityFilters.Entity
                };
                var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
                return response.EntityMetadata.ObjectTypeCode;
            }
            catch
            {
                return null;
            }
        }

        private static string BuildBrowseFetchXml(int? objectTypeCode,
            DateTime sinceUtc, DateTime untilUtc,
            string operation, int maxRecords)
        {
            var sb = new StringBuilder(512);
            sb.Append($"<fetch top='{maxRecords}'>");
            sb.Append("<entity name='audit'>");
            sb.Append("<attribute name='auditid'/>");
            sb.Append("<attribute name='createdon'/>");
            sb.Append("<attribute name='userid'/>");
            sb.Append("<attribute name='objectid'/>");
            sb.Append("<attribute name='action'/>");
            sb.Append("<attribute name='operation'/>");
            sb.Append("<attribute name='objecttypecode'/>");
            sb.Append("<filter type='and'>");

            sb.Append($"<condition attribute='createdon' operator='ge' value='{sinceUtc.ToString("yyyy-MM-ddTHH:mm:ssZ", CultureInfo.InvariantCulture)}'/>");
            sb.Append($"<condition attribute='createdon' operator='le' value='{untilUtc.ToString("yyyy-MM-ddTHH:mm:ssZ", CultureInfo.InvariantCulture)}'/>");

            if (objectTypeCode.HasValue)
                sb.Append($"<condition attribute='objecttypecode' operator='eq' value='{objectTypeCode.Value}'/>");

            if (!string.IsNullOrWhiteSpace(operation))
            {
                var actionValue = ParseActionName(operation.Trim());
                if (actionValue.HasValue)
                    sb.Append($"<condition attribute='action' operator='eq' value='{actionValue.Value}'/>");
            }

            sb.Append("</filter>");
            sb.Append("<order attribute='createdon' descending='true'/>");
            sb.Append("</entity>");
            sb.Append("</fetch>");
            return sb.ToString();
        }

        private static int? ParseActionName(string operation) => operation.ToLowerInvariant() switch
        {
            "create" => 1,
            "update" => 2,
            "delete" => 3,
            "activate" => 4,
            "deactivate" => 5,
            "cascade" => 11,
            "merge" => 12,
            "assign" => 13,
            "setstate" => 41,
            _ => null
        };

        private static string FormatBrowseResults(DataCollection<Entity> entities,
            string entityName, int minutesAgo, string userFilter)
        {
            var scope = string.IsNullOrWhiteSpace(entityName) ? "all entities" : entityName;
            var filtered = new List<Entity>();

            foreach (var e in entities)
            {
                if (!string.IsNullOrWhiteSpace(userFilter))
                {
                    var userRef = e.GetAttributeValue<EntityReference>("userid");
                    var userName = userRef?.Name ?? userRef?.Id.ToString() ?? "";
                    if (userName.IndexOf(userFilter, StringComparison.OrdinalIgnoreCase) < 0)
                        continue;
                }
                filtered.Add(e);
            }

            if (filtered.Count == 0)
            {
                var sb2 = new StringBuilder(256);
                sb2.AppendLine($"[AuditBrowse] 0 entries found after user filter");
                sb2.AppendLine($"Scope: {scope}, last {FormatTimeWindow(minutesAgo)}");
                sb2.AppendLine($"user_filter: \"{userFilter}\"");
                sb2.AppendLine("Tip: Check if auditing is enabled at System Settings > Auditing tab");
                return sb2.ToString();
            }

            var sb = new StringBuilder(filtered.Count * 120 + 256);
            sb.AppendLine($"[AuditBrowse] {filtered.Count} entries ({scope}, last {FormatTimeWindow(minutesAgo)})");
            sb.AppendLine();
            sb.AppendLine("timestamp\tuser\tentity\trecord\taction\toperation");

            foreach (var e in filtered)
            {
                var created = e.GetAttributeValue<DateTime?>("createdon");
                var createdStr = created?.ToString("yyyy-MM-dd HH:mm:ss", CultureInfo.InvariantCulture) ?? "";
                var userRef = e.GetAttributeValue<EntityReference>("userid");
                var userName = userRef?.Name ?? userRef?.Id.ToString() ?? "";
                var objectRef = e.GetAttributeValue<EntityReference>("objectid");
                var recordName = objectRef?.Name ?? objectRef?.Id.ToString() ?? "";
                var objectTypeCode = e.GetAttributeValue<string>("objecttypecode") ?? "";
                var actionValue = e.GetAttributeValue<OptionSetValue>("action")?.Value ?? 0;
                var actionStr = FormatAction(actionValue);
                var operationValue = e.GetAttributeValue<OptionSetValue>("operation")?.Value ?? 0;
                var operationStr = FormatOperation(operationValue);

                sb.AppendLine($"{createdStr}\t{EscapeTab(userName)}\t{EscapeTab(objectTypeCode)}\t{EscapeTab(recordName)}\t{actionStr}\t{operationStr}");
            }

            return sb.ToString();
        }

        private static string FormatBrowseNoResults(string entityName, int minutesAgo,
            string userFilter, string operation)
        {
            var sb = new StringBuilder(256);
            sb.AppendLine("[AuditBrowse] 0 entries found");

            var filters = new List<string>();
            if (!string.IsNullOrWhiteSpace(entityName))
                filters.Add($"entity = \"{entityName}\"");
            if (!string.IsNullOrWhiteSpace(userFilter))
                filters.Add($"user contains \"{userFilter}\"");
            if (!string.IsNullOrWhiteSpace(operation))
                filters.Add($"operation = \"{operation}\"");
            filters.Add($"last {FormatTimeWindow(minutesAgo)}");

            sb.AppendLine($"Filters: {string.Join(", ", filters)}");
            sb.AppendLine("Tip: Check if auditing is enabled at System Settings > Auditing tab");
            return sb.ToString();
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
            DateTime sinceUtc, DateTime untilUtc,
            string userFilter, string operationFilter, string attributeFilter)
        {
            var entries = new List<AuditEntry>();

            foreach (var auditDetail in auditDetails.AuditDetails)
            {
                Entity audit;
                AttributeAuditDetail attrAudit = null;

                if (auditDetail is AttributeAuditDetail aad)
                {
                    attrAudit = aad;
                    audit = aad.AuditRecord;
                }
                else
                {
                    audit = auditDetail.AuditRecord;
                }

                var createdOn = audit.GetAttributeValue<DateTime?>("createdon");

                if (createdOn.HasValue)
                {
                    var utc = createdOn.Value.ToUniversalTime();
                    if (utc < sinceUtc || utc > untilUtc)
                        continue;
                }

                var actionValue = audit.GetAttributeValue<OptionSetValue>("action")?.Value ?? 0;
                var actionStr = FormatAction(actionValue);

                if (!string.IsNullOrWhiteSpace(operationFilter) &&
                    !actionStr.Equals(operationFilter.Trim(), StringComparison.OrdinalIgnoreCase))
                    continue;

                var userRef = audit.GetAttributeValue<EntityReference>("userid");
                var userName = userRef?.Name ?? userRef?.Id.ToString() ?? "";

                if (!string.IsNullOrWhiteSpace(userFilter) &&
                    userName.IndexOf(userFilter, StringComparison.OrdinalIgnoreCase) < 0)
                    continue;

                if (attrAudit != null)
                {
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
                else
                {
                    if (!string.IsNullOrWhiteSpace(attributeFilter))
                        continue;

                    var detailType = auditDetail.GetType().Name switch
                    {
                        "RelationshipAuditDetail" => "Relationship",
                        "ShareAuditDetail" => "Share",
                        "RolePrivilegeAuditDetail" => "RolePrivilege",
                        _ => "Activity"
                    };

                    entries.Add(new AuditEntry
                    {
                        Timestamp = createdOn?.ToString("yyyy-MM-dd HH:mm:ss", CultureInfo.InvariantCulture) ?? "",
                        User = userName,
                        Action = actionStr,
                        Field = $"({detailType})",
                        OldValue = "-",
                        NewValue = "-"
                    });
                }
            }

            var sb = new StringBuilder(entries.Count * 100 + 256);
            sb.AppendLine($"[AuditHistory] {entityName}: {recordId}");
            sb.AppendLine($"Entries: {entries.Count}");
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

        private static string FormatOperation(int operationValue) => operationValue switch
        {
            1 => "Create",
            2 => "Update",
            3 => "Delete",
            4 => "Access",
            _ => $"Op({operationValue})"
        };

        private static string FormatTimeWindow(int minutesAgo)
        {
            if (minutesAgo <= 60) return $"{minutesAgo} min";
            if (minutesAgo <= 1440) return $"{minutesAgo / 60}h";
            return $"{minutesAgo / 1440}d";
        }

        private static string EscapeTab(string value) =>
            value.Replace("\t", " ").Replace("\n", " ").Replace("\r", "");

        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;")
                 .Replace("'", "&apos;").Replace("\"", "&quot;");

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
