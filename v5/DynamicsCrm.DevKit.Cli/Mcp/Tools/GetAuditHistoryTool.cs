using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

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

        [McpServerTool(Name = "get_audit_history", Title = "Get record audit history",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetAuditHistoryResult)),
        Description(
            "Retrieve audit history for Dataverse records. Shows who changed what, when, with old/new values.\n\n" +

            "TWO MODES:\n" +
            "- record_id PROVIDED: field-level old/new values for one record (requires entity_name)\n" +
            "- record_id EMPTY: summary list across records/entities (entity_name optional)\n\n" +

            "WHEN TO USE:\n" +
            "- 'Who changed this field?' or debug unexpected data changes\n" +
            "- Compliance auditing or track user/integration activity\n\n" +

            "TIPS:\n" +
            "- Audit must be enabled at org AND entity level\n" +
            "- Use from_date/to_date for date ranges (overrides minutes_ago)")]
        public CallToolResult get_audit_history(
            [Description("Entity logical name. Required with record_id. Optional in browse mode."
            )] string entity_name = "",
            [Description("Record GUID for detail mode. Empty = browse mode."
            )] string record_id = "",
            [Description("Entries from last N minutes. Default: 1440 (24h). Max: 43200. Ignored with from_date."
            )] int minutes_ago = 1440,
            [Description("Filter by user name (contains) or email (auto-resolved)."
            )] string user_filter = "",
            [Description("Filter by operation: Create, Update, Delete, Activate, Deactivate, Assign, Merge, SetState."
            )] string operation = "",
            [Description("Detail mode only: filter to one field's changes."
            )] string attribute_name = "",
            [Description("Max entries. Default: 50, max: 500."
            )] int max_records = 50,
            [Description("ISO 8601 start date (e.g., '2026-03-01'). Overrides minutes_ago."
            )] string from_date = "",
            [Description("ISO 8601 end date. Used with from_date. Default: now."
            )] string to_date = "")
        {
            if (!string.IsNullOrWhiteSpace(record_id) && string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required when record_id is provided.");

            if (string.IsNullOrWhiteSpace(record_id) && !string.IsNullOrWhiteSpace(attribute_name))
                return ErrorResult("Error: attribute_name requires record_id (detail mode). In browse mode, attribute-level filtering is not available.");

            if (!string.IsNullOrWhiteSpace(record_id) && !Guid.TryParse(record_id.Trim(), out _))
                return ErrorResult($"Error: '{record_id}' is not a valid GUID.");

            if (minutes_ago < 1) minutes_ago = 1440;
            if (minutes_ago > 43200) minutes_ago = 43200;
            if (max_records < 1) max_records = 50;
            if (max_records > 500) max_records = 500;

            entity_name = entity_name?.Trim().ToLowerInvariant() ?? "";

            operation = operation?.Trim() ?? "";
            if (!string.IsNullOrWhiteSpace(operation) && !ParseActionName(operation).HasValue)
                return ErrorResult($"Error: '{operation}' is not a valid operation. Valid values: Create, Update, Delete, Activate, Deactivate, Assign, Merge, Cascade, SetState.");

            DateTime? fromUtc = null, toUtc = null;
            if (!string.IsNullOrWhiteSpace(from_date))
            {
                if (!DateTime.TryParse(from_date.Trim(), CultureInfo.InvariantCulture,
                        DateTimeStyles.AssumeUniversal | DateTimeStyles.AdjustToUniversal, out var fd))
                    return ErrorResult($"Error: '{from_date}' is not a valid ISO 8601 date.");
                fromUtc = fd;
            }
            if (!string.IsNullOrWhiteSpace(to_date))
            {
                if (!DateTime.TryParse(to_date.Trim(), CultureInfo.InvariantCulture,
                        DateTimeStyles.AssumeUniversal | DateTimeStyles.AdjustToUniversal, out var td))
                    return ErrorResult($"Error: '{to_date}' is not a valid ISO 8601 date.");
                toUtc = td;
            }

            if (fromUtc.HasValue && toUtc.HasValue && fromUtc.Value > toUtc.Value)
                return ErrorResult($"Error: from_date '{from_date}' is after to_date '{to_date}'. Swap the values or correct the range.");

            var resolvedUserFilter = ResolveUserFilter(user_filter?.Trim() ?? "");
            if (resolvedUserFilter.StartsWith("[AMBIGUOUS_USER]"))
                return ErrorResult(resolvedUserFilter.Substring("[AMBIGUOUS_USER]".Length));

            DateTime sinceUtc, untilUtc;
            bool usedFromDate = fromUtc.HasValue;
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

            var timeScope = usedFromDate
                ? $"{sinceUtc.ToString("yyyy-MM-dd", CultureInfo.InvariantCulture)} to {untilUtc.ToString("yyyy-MM-dd", CultureInfo.InvariantCulture)}"
                : $"last {FormatTimeWindow(minutes_ago)}";

            try
            {
                if (!string.IsNullOrWhiteSpace(record_id))
                {
                    var id = Guid.Parse(record_id.Trim());
                    return ExecuteDetailMode(entity_name, id, sinceUtc, untilUtc,
                        resolvedUserFilter, operation, attribute_name, max_records, timeScope);
                }

                return ExecuteBrowseMode(entity_name, sinceUtc, untilUtc,
                    resolvedUserFilter, operation, max_records, timeScope);
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
                if (msg.Contains("auditing is not enabled", StringComparison.OrdinalIgnoreCase) ||
                    (msg.Contains("audit", StringComparison.OrdinalIgnoreCase) && msg.Contains("not enabled", StringComparison.OrdinalIgnoreCase)))
                {
                    return ErrorResult(
                        $"[Error] Audit is not enabled\n" +
                        $"Entity: {entity_name}\n" +
                        $"Message: {msg}\n" +
                        "Tip: Enable auditing: Settings > Administration > System Settings > Auditing tab");
                }
                return ErrorResult($"Error: Failed to retrieve audit history: {msg}");
            }
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

        private CallToolResult ExecuteDetailMode(string entityName, Guid id,
            DateTime sinceUtc, DateTime untilUtc,
            string userFilter, string operation, string attributeName,
            int maxRecords, string timeScope)
        {
            var request = new RetrieveRecordChangeHistoryRequest
            {
                Target = new EntityReference(entityName, id),
                PagingInfo = new PagingInfo
                {
                    PageNumber = 1,
                    Count = maxRecords
                }
            };

            var response = (RetrieveRecordChangeHistoryResponse)_serviceClient.Execute(request);
            var auditDetails = response.AuditDetailCollection;

            if (auditDetails == null || auditDetails.AuditDetails.Count == 0)
            {
                var text = $"[AuditHistory] {entityName}: {id}\nEntries: 0 ({timeScope})\nTip: Audit may not be enabled for this entity. Check System Settings > Auditing.";
                var emptyResult = new GetAuditHistoryResult
                {
                    Mode = "detail",
                    EntityName = NullIfEmpty(entityName),
                    RecordId = id.ToString(),
                    TimeScope = timeScope,
                    TotalCount = 0,
                    Entries = []
                };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = text }],
                    StructuredContent = JsonSerializer.SerializeToElement(emptyResult)
                };
            }

            return FormatAuditEntries(entityName, id, auditDetails,
                sinceUtc, untilUtc, userFilter, operation, attributeName, timeScope);
        }

        private CallToolResult ExecuteBrowseMode(string entityName,
            DateTime sinceUtc, DateTime untilUtc,
            string userFilter, string operation,
            int maxRecords, string timeScope)
        {
            int? objectTypeCode = null;
            if (!string.IsNullOrWhiteSpace(entityName))
            {
                objectTypeCode = ResolveObjectTypeCode(entityName);
                if (!objectTypeCode.HasValue)
                    return ErrorResult($"Error: Could not resolve entity '{entityName}' to an ObjectTypeCode. Verify the entity name is correct.");
            }

            var fetchXml = BuildBrowseFetchXml(objectTypeCode, sinceUtc, untilUtc, operation, maxRecords);
            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));

            if (result.Entities.Count == 0)
            {
                var text = FormatBrowseNoResults(entityName, timeScope, userFilter, operation);
                var emptyResult = new GetAuditHistoryResult
                {
                    Mode = "browse",
                    EntityName = NullIfEmpty(entityName),
                    TimeScope = timeScope,
                    TotalCount = 0,
                    Entries = []
                };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = text }],
                    StructuredContent = JsonSerializer.SerializeToElement(emptyResult)
                };
            }

            return FormatBrowseResults(result.Entities, entityName, timeScope, userFilter);
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

        private static CallToolResult FormatBrowseResults(DataCollection<Entity> entities,
            string entityName, string timeScope, string userFilter)
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
                var text = $"[AuditBrowse] 0 entries found after user filter\nScope: {scope}, {timeScope}\nuser_filter: \"{userFilter}\"\nTip: Check if auditing is enabled at System Settings > Auditing tab";
                var emptyResult = new GetAuditHistoryResult
                {
                    Mode = "browse",
                    EntityName = NullIfEmpty(entityName),
                    TimeScope = timeScope,
                    TotalCount = 0,
                    Entries = []
                };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = text }],
                    StructuredContent = JsonSerializer.SerializeToElement(emptyResult)
                };
            }

            var entries = new List<AuditHistoryEntry>();
            var sb = new StringBuilder(filtered.Count * 120 + 256);
            sb.AppendLine($"[AuditBrowse] {filtered.Count} {(filtered.Count == 1 ? "entry" : "entries")} ({scope}, {timeScope})");
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
                var recordId = objectRef?.Id.ToString();
                var objectTypeCode = e.GetAttributeValue<string>("objecttypecode") ?? "";
                var actionValue = e.GetAttributeValue<OptionSetValue>("action")?.Value ?? 0;
                var actionStr = FormatAction(actionValue);
                var operationValue = e.GetAttributeValue<OptionSetValue>("operation")?.Value ?? 0;
                var operationStr = FormatOperation(operationValue);

                sb.AppendLine($"{createdStr}\t{EscapeTab(userName)}\t{EscapeTab(objectTypeCode)}\t{EscapeTab(recordName)}\t{actionStr}\t{operationStr}");

                entries.Add(new AuditHistoryEntry
                {
                    Timestamp = createdStr,
                    User = NullIfEmpty(userName),
                    Entity = NullIfEmpty(objectTypeCode),
                    RecordName = NullIfEmpty(recordName),
                    RecordId = recordId,
                    Action = actionStr,
                    Operation = operationStr
                });
            }

            var structured = new GetAuditHistoryResult
            {
                Mode = "browse",
                EntityName = NullIfEmpty(entityName),
                TimeScope = timeScope,
                TotalCount = filtered.Count,
                Entries = entries
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private static string FormatBrowseNoResults(string entityName, string timeScope,
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
            filters.Add(timeScope);

            sb.AppendLine($"Filters: {string.Join(", ", filters)}");
            sb.AppendLine("Tip: Check if auditing is enabled at System Settings > Auditing tab");
            return sb.ToString();
        }

        private static CallToolResult FormatAuditEntries(
            string entityName, Guid recordId,
            AuditDetailCollection auditDetails,
            DateTime sinceUtc, DateTime untilUtc,
            string userFilter, string operationFilter, string attributeFilter,
            string timeScope)
        {
            var entries = new List<AuditHistoryEntry>();

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

                var timestamp = createdOn?.ToString("yyyy-MM-dd HH:mm:ss", CultureInfo.InvariantCulture) ?? "";

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

                            entries.Add(new AuditHistoryEntry
                            {
                                Timestamp = timestamp,
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

                            entries.Add(new AuditHistoryEntry
                            {
                                Timestamp = timestamp,
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

                        entries.Add(new AuditHistoryEntry
                        {
                            Timestamp = timestamp,
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

                    entries.Add(new AuditHistoryEntry
                    {
                        Timestamp = timestamp,
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
            sb.AppendLine($"{(entries.Count == 1 ? "Entry" : "Entries")}: {entries.Count}");
            sb.AppendLine();

            if (entries.Count == 0)
            {
                sb.AppendLine("No matching audit entries found for the specified filters.");
            }
            else
            {
                sb.AppendLine("timestamp\tuser\taction\tfield\toldValue\tnewValue");
                foreach (var e in entries)
                {
                    sb.AppendLine($"{e.Timestamp}\t{EscapeTab(e.User)}\t{e.Action}\t{e.Field}\t{EscapeTab(e.OldValue)}\t{EscapeTab(e.NewValue)}");
                }
            }

            var structured = new GetAuditHistoryResult
            {
                Mode = "detail",
                EntityName = NullIfEmpty(entityName),
                RecordId = recordId.ToString(),
                TimeScope = timeScope,
                TotalCount = entries.Count,
                Entries = entries
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
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
            if (minutesAgo <= 1440)
            {
                var hours = minutesAgo / 60;
                var remainder = minutesAgo % 60;
                return remainder == 0 ? $"{hours}h" : $"{hours}h {remainder}min";
            }
            var days = minutesAgo / 1440;
            var remainingHours = (minutesAgo % 1440) / 60;
            return remainingHours == 0 ? $"{days}d" : $"{days}d {remainingHours}h";
        }

        private static string NullIfEmpty(string value) =>
            string.IsNullOrWhiteSpace(value) ? null : value.Trim();

        private static string EscapeTab(string value) =>
            value?.Replace("\t", " ").Replace("\n", " ").Replace("\r", "") ?? "";

        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;")
                 .Replace("'", "&apos;").Replace("\"", "&quot;");

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
