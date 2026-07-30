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
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetAuditHistoryTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;

        public GetAuditHistoryTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        // Action name → int for the audit 'action' field
        private static readonly Dictionary<string, int> ActionNameMap = new(StringComparer.OrdinalIgnoreCase)
        {
            ["create"] = 1,
            ["update"] = 2,
            ["delete"] = 3,
            ["activate"] = 4,
            ["deactivate"] = 5,
            ["cascade"] = 11,
            ["merge"] = 12,
            ["assign"] = 13,
            ["setstate"] = 41
        };

        [McpServerTool(Name = "get_audit_history", Title = "Get record audit history",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetAuditHistoryResult)),
        Description(
            "Audit history (who/what/when/old/new). record_id set = detail (field-level, entity_name REQUIRED). " +
            "Empty = browse list. Audit must be enabled at org AND entity. " +
            "from_date/to_date override minutes_ago. attribute_name requires record_id. " +
            "Empty result usually means auditing not enabled. " +
            "For plugin traces → get_plugin_trace_logs. For async failures → get_system_jobs.")]
        public CallToolResult get_audit_history(
            [Description("Entity Display/logical name. Required with record_id. Optional in browse mode.")] string entity_name = "",
            [Description("GUID → detail mode. Empty = browse list.")] string record_id = "",
            [Description("Last N min. Default 1440 (24h). Max 43200. Ignored if from_date set.")] int minutes_ago = 1440,
            [Description("User name (contains) or email. Empty = all users.")] string user_filter = "",
            [Description("Create, Update, Delete, Activate, Deactivate, Assign, Merge, Cascade, SetState. Empty = all.")] string operation = "",
            [Description("Detail mode only. Filter one field. Ignored in browse mode.")] string attribute_name = "",
            [Description("Default 50. Max 500.")] int max_records = 50,
            [Description("ISO 8601. Overrides minutes_ago.")] string from_date = "",
            [Description("ISO 8601. With from_date. Default = now.")] string to_date = "")
        {
            try
            {
                return Execute(entity_name, record_id, minutes_ago, user_filter,
                    operation, attribute_name, max_records, from_date, to_date);
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        // ── Main flow ────────────────────────────────────────────────────────────

        private CallToolResult Execute(
            string entityName, string recordId, int minutesAgo, string userFilter,
            string operation, string attributeName, int maxRecords,
            string fromDate, string toDate)
        {
            // ── Validation ──────────────────────────────────────────────────────
            if (!string.IsNullOrWhiteSpace(recordId) && string.IsNullOrWhiteSpace(entityName))
                return Error("entity_name is required when record_id is provided.",
                    "Pass entity_name (Display Name or logical name, e.g. 'Account' or 'account') + record_id GUID.");

            if (string.IsNullOrWhiteSpace(recordId) && !string.IsNullOrWhiteSpace(attributeName))
                return Error("attribute_name requires record_id (detail mode).",
                    "Browse mode does not support attribute-level filtering.");

            if (!string.IsNullOrWhiteSpace(recordId) && !Guid.TryParse(recordId.Trim(), out _))
                return Error($"'{recordId}' is not a valid GUID.");

            if (minutesAgo < 1) minutesAgo = 1440;
            if (minutesAgo > 43200) minutesAgo = 43200;
            if (maxRecords < 1) maxRecords = 50;
            if (maxRecords > 500) maxRecords = 500;

            entityName = entityName?.Trim() ?? "";
            attributeName = attributeName?.Trim() ?? "";
            operation = operation?.Trim() ?? "";

            // ── Resolve entity → logical name ───────────────────────────────────
            if (!string.IsNullOrWhiteSpace(entityName))
            {
                var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entityName, "get_audit_history");
                if (!entityResult.IsSuccess)
                    return Error($"entity_name '{entityName}': {entityResult.Error}");
                entityName = entityResult.Value.LogicalName;
            }

            // ── Resolve attribute → logical name (detail mode only) ─────────────
            if (!string.IsNullOrWhiteSpace(recordId) && !string.IsNullOrWhiteSpace(attributeName))
            {
                var attributeResult = DisplayNameFirstResolver.ResolveAttribute(_serviceClient, entityName, attributeName, "get_audit_history");
                if (!attributeResult.IsSuccess)
                    return Error($"attribute_name '{attributeName}': {attributeResult.Error}");
                attributeName = attributeResult.Value.LogicalName;
            }

            // ── Validate operation ──────────────────────────────────────────────
            if (!string.IsNullOrWhiteSpace(operation) && !ActionNameMap.ContainsKey(operation))
                return Error($"'{operation}' is not a valid operation.",
                    "Valid values: Create, Update, Delete, Activate, Deactivate, Assign, Merge, Cascade, SetState.");

            // ── Parse dates ─────────────────────────────────────────────────────
            if (!TryParseDate(fromDate, "from_date", out var fromUtc, out var fromError))
                return Error(fromError);
            if (!TryParseDate(toDate, "to_date", out var toUtc, out var toError))
                return Error(toError);

            if (fromUtc.HasValue && toUtc.HasValue && fromUtc.Value > toUtc.Value)
                return Error($"from_date '{fromDate}' is after to_date '{toDate}'.",
                    "Swap the values or correct the range.");

            // ── Resolve user filter ─────────────────────────────────────────────
            var resolvedUserFilter = ResolveUserFilter(userFilter);
            if (resolvedUserFilter.StartsWith("[AMBIGUOUS_USER]"))
                return Error(resolvedUserFilter.Substring("[AMBIGUOUS_USER]".Length));

            // ── Compute time window ─────────────────────────────────────────────
            bool usedFromDate = fromUtc.HasValue;
            var sinceUtc = fromUtc ?? DateTime.UtcNow.AddMinutes(-minutesAgo);
            var untilUtc = toUtc ?? DateTime.UtcNow;

            var timeScope = usedFromDate
                ? $"{sinceUtc:yyyy-MM-dd} to {untilUtc:yyyy-MM-dd}"
                : $"last {FormatTimeWindow(minutesAgo)}";

            // ── Dispatch ────────────────────────────────────────────────────────
            if (!string.IsNullOrWhiteSpace(recordId))
                return ExecuteDetailMode(entityName, Guid.Parse(recordId.Trim()), sinceUtc, untilUtc,
                    resolvedUserFilter, operation, attributeName, maxRecords, timeScope);

            return ExecuteBrowseMode(entityName, sinceUtc, untilUtc,
                resolvedUserFilter, operation, maxRecords, timeScope);
        }

        // ── Detail mode ─────────────────────────────────────────────────────────

        private CallToolResult ExecuteDetailMode(string entityName, Guid id,
            DateTime sinceUtc, DateTime untilUtc,
            string userFilter, string operationFilter, string attributeFilter,
            int maxRecords, string timeScope)
        {
            // Audit response only gives logical names of touched fields (no display
            // name, no option-set label). Fetch the entity's attribute metadata
            // ONCE so we can attach a human-readable displayName to every change
            // and resolve option-set values to their labels. Falls back to
            // empty maps on failure -- in that case the JSON simply omits the
            // fields (WhenWritingNull) so AI can still fall back to the
            // logical name / raw value.
            var metadata = GetEntityAttributeMetadata(entityName);

            var request = new RetrieveRecordChangeHistoryRequest
            {
                Target = new EntityReference(entityName, id),
                PagingInfo = new PagingInfo { PageNumber = 1, Count = maxRecords }
            };
            var response = (RetrieveRecordChangeHistoryResponse)_serviceClient.Execute(request);
            var auditDetails = response.AuditDetailCollection;

            var entries = new List<AuditHistoryEntry>();
            if (auditDetails?.AuditDetails != null && auditDetails.AuditDetails.Count > 0)
                entries = FormatDetailEntries(auditDetails, sinceUtc, untilUtc,
                    userFilter, operationFilter, attributeFilter, metadata);

            var structured = new GetAuditHistoryResult
            {
                Mode = "detail",
                EntityName = NullIfEmpty(entityName),
                RecordId = id.ToString(),
                TimeScope = timeScope,
                TotalCount = entries.Count,
                Entries = entries
            };

            return Success(BuildDetailText(entityName, id, entries, timeScope), structured);
        }

        /// <summary>
        /// One-shot fetch of attribute metadata for the target entity:
        ///   - Display Name per attribute (user-localized label, fallback to SchemaName)
        ///   - OptionSet value -> label for every local picklist attribute
        /// Both maps are keyed by attribute logical name. On failure returns
        /// empty maps so the tool still works (displayName becomes null, and
        /// option-set values fall back to their raw int).
        /// </summary>
        private AttributeMetadataCache GetEntityAttributeMetadata(string entityName)
        {
            var empty = new AttributeMetadataCache();
            if (string.IsNullOrWhiteSpace(entityName)) return empty;

            try
            {
                var response = (RetrieveEntityResponse)_serviceClient.Execute(new RetrieveEntityRequest
                {
                    LogicalName = entityName,
                    EntityFilters = EntityFilters.Attributes
                });

                foreach (var a in response.EntityMetadata.Attributes ?? Array.Empty<AttributeMetadata>())
                {
                    if (string.IsNullOrWhiteSpace(a.LogicalName)) continue;

                    var label = a.DisplayName?.UserLocalizedLabel?.Label;
                    if (string.IsNullOrWhiteSpace(label)) label = a.SchemaName;
                    if (!string.IsNullOrWhiteSpace(label))
                        empty.DisplayNames[a.LogicalName] = label;

                    // Local picklist: PicklistAttributeMetadata.OptionSet.Options
                    // Global picklist: doesn't carry options here, but the audit
                    // record's OldValue/NewValue .FormattedValues already maps
                    // the int to the label, so FormatAttributeValue uses that
                    // first and never reaches the int fallback for global sets.
                    if (a is PicklistAttributeMetadata pick && pick.OptionSet?.Options != null)
                    {
                        var optionMap = new Dictionary<int, string>();
                        foreach (var opt in pick.OptionSet.Options)
                        {
                            var optLabel = opt.Label?.UserLocalizedLabel?.Label;
                            if (!string.IsNullOrWhiteSpace(optLabel) && opt.Value.HasValue)
                                optionMap[opt.Value.Value] = optLabel;
                        }
                        if (optionMap.Count > 0)
                            empty.OptionSetLabels[a.LogicalName] = optionMap;
                    }
                    else if (a is StateAttributeMetadata stateAttr && stateAttr.OptionSet?.Options != null)
                    {
                        var optionMap = new Dictionary<int, string>();
                        foreach (var opt in stateAttr.OptionSet.Options)
                        {
                            var optLabel = opt.Label?.UserLocalizedLabel?.Label;
                            if (!string.IsNullOrWhiteSpace(optLabel) && opt.Value.HasValue)
                                optionMap[opt.Value.Value] = optLabel;
                        }
                        if (optionMap.Count > 0)
                            empty.OptionSetLabels[a.LogicalName] = optionMap;
                    }
                    else if (a is StatusAttributeMetadata statusAttr && statusAttr.OptionSet?.Options != null)
                    {
                        var optionMap = new Dictionary<int, string>();
                        foreach (var opt in statusAttr.OptionSet.Options)
                        {
                            var optLabel = opt.Label?.UserLocalizedLabel?.Label;
                            if (!string.IsNullOrWhiteSpace(optLabel) && opt.Value.HasValue)
                                optionMap[opt.Value.Value] = optLabel;
                        }
                        if (optionMap.Count > 0)
                            empty.OptionSetLabels[a.LogicalName] = optionMap;
                    }
                    else if (a is BooleanAttributeMetadata)
                    {
                        // True/False labels for Two-Option fields
                        var boolMap = new Dictionary<int, string>();
                        if (!string.IsNullOrWhiteSpace(a.DisplayName?.UserLocalizedLabel?.Label))
                        {
                            // handled above; nothing extra to do here
                        }
                        var trueLabel = ((BooleanAttributeMetadata)a).OptionSet?.TrueOption?.Label?.UserLocalizedLabel?.Label;
                        var falseLabel = ((BooleanAttributeMetadata)a).OptionSet?.FalseOption?.Label?.UserLocalizedLabel?.Label;
                        if (!string.IsNullOrWhiteSpace(trueLabel)) boolMap[1] = trueLabel;
                        if (!string.IsNullOrWhiteSpace(falseLabel)) boolMap[0] = falseLabel;
                        if (boolMap.Count > 0)
                            empty.OptionSetLabels[a.LogicalName] = boolMap;
                    }
                }
            }
            catch
            {
                // ignore -- empty cache
            }

            return empty;
        }

        private static List<AuditHistoryEntry> FormatDetailEntries(
            AuditDetailCollection auditDetails,
            DateTime sinceUtc, DateTime untilUtc,
            string userFilter, string operationFilter, string attributeFilter,
            AttributeMetadataCache metadata)
        {
            var entries = new List<AuditHistoryEntry>();

            foreach (var auditDetail in auditDetails.AuditDetails)
            {
                var audit = auditDetail.AuditRecord;

                var createdOn = audit.GetAttributeValue<DateTime?>("createdon");
                if (createdOn.HasValue)
                {
                    var utc = createdOn.Value.ToUniversalTime();
                    if (utc < sinceUtc || utc > untilUtc) continue;
                }

                var actionValue = audit.GetAttributeValue<OptionSetValue>("action")?.Value ?? 0;
                var actionStr = FormatAction(actionValue);

                if (!string.IsNullOrWhiteSpace(operationFilter) &&
                    !actionStr.Equals(operationFilter, StringComparison.OrdinalIgnoreCase))
                    continue;

                var userRef = audit.GetAttributeValue<EntityReference>("userid");
                var userName = userRef?.Name ?? userRef?.Id.ToString() ?? "";

                if (!string.IsNullOrWhiteSpace(userFilter) &&
                    userName.IndexOf(userFilter, StringComparison.OrdinalIgnoreCase) < 0)
                    continue;

                var timestamp = createdOn?.ToString("yyyy-MM-dd HH:mm:ss", CultureInfo.InvariantCulture) ?? "";

                // Build one entry per audit event; collect all field changes inside it.
                var entry = new AuditHistoryEntry
                {
                    Timestamp = timestamp,
                    User = userName,
                    Action = actionStr
                };

                if (auditDetail is AttributeAuditDetail attrAudit)
                    entry.Changes = ExtractAttributeChanges(attrAudit, attributeFilter, metadata);
                else
                    entry.Event = ExtractNonAttributeEventName(auditDetail);

                // If user asked to filter on attribute_name and this event has no matching
                // changes, drop the whole event from the result.
                if (!string.IsNullOrWhiteSpace(attributeFilter))
                {
                    if (entry.Changes == null || entry.Changes.Count == 0) continue;
                }

                entries.Add(entry);
            }

            return entries;
        }

        /// <summary>
        /// Build the <c>changes</c> array for one <see cref="AttributeAuditDetail"/> event.
        /// One event can produce many changes (each touched field = 1 change).
        /// OldValue and NewValue are paired by attribute logical name.
        /// </summary>
        private static List<AuditHistoryChange> ExtractAttributeChanges(
            AttributeAuditDetail attrAudit, string attributeFilter,
            AttributeMetadataCache metadata)
        {
            var oldValues = attrAudit.OldValue?.Attributes;
            var newValues = attrAudit.NewValue?.Attributes;
            var changes = new List<AuditHistoryChange>();

            // Collect the union of attribute names touched by this event.
            var touched = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            if (oldValues != null) foreach (var a in oldValues) touched.Add(a.Key);
            if (newValues != null) foreach (var a in newValues) touched.Add(a.Key);

            foreach (var field in touched)
            {
                if (!string.IsNullOrWhiteSpace(attributeFilter) &&
                    !field.Equals(attributeFilter, StringComparison.OrdinalIgnoreCase))
                    continue;

                object oldRaw = null, newRaw = null;
                var hasOld = oldValues != null && oldValues.TryGetValue(field, out oldRaw);
                var hasNew = newValues != null && newValues.TryGetValue(field, out newRaw);

                string displayName = null;
                metadata.DisplayNames.TryGetValue(field, out displayName);

                var change = new AuditHistoryChange
                {
                    LogicalName = field,
                    DisplayName = string.IsNullOrWhiteSpace(displayName) ? null : displayName,
                    OldValue = hasOld ? FormatAttributeValue(oldRaw, attrAudit.OldValue, field, metadata) : null,
                    NewValue = hasNew ? FormatAttributeValue(newRaw, attrAudit.NewValue, field, metadata) : null
                };
                changes.Add(change);
            }

            return changes;
        }

        /// <summary>
        /// Human-readable label for non-attribute audit details (system/relationship/share events).
        /// </summary>
        private static string ExtractNonAttributeEventName(AuditDetail auditDetail)
        {
            return auditDetail.GetType().Name switch
            {
                "RelationshipAuditDetail" => "Relationship",
                "ShareAuditDetail" => "Share",
                "RolePrivilegeAuditDetail" => "RolePrivilege",
                _ => "Activity"
            };
        }

        // ── Browse mode ─────────────────────────────────────────────────────────

        private CallToolResult ExecuteBrowseMode(string entityName,
            DateTime sinceUtc, DateTime untilUtc,
            string userFilter, string operation,
            int maxRecords, string timeScope)
        {
            int? objectTypeCode = null;
            if (!string.IsNullOrWhiteSpace(entityName))
            {
                var otc = ResolveObjectTypeCode(entityName);
                if (otc == null)
                    return Error($"Entity '{entityName}' has no ObjectTypeCode.");
                objectTypeCode = otc;
            }

            var fetchXml = BuildBrowseFetchXml(objectTypeCode, sinceUtc, untilUtc, operation, maxRecords);
            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));

            // Apply user_filter in-memory (audit 'useridname' isn't FetchXML-queryable)
            var filtered = new List<Entity>();
            if (!string.IsNullOrWhiteSpace(userFilter))
            {
                foreach (var e in result.Entities)
                {
                    var userRef = e.GetAttributeValue<EntityReference>("userid");
                    var userName = userRef?.Name ?? userRef?.Id.ToString() ?? "";
                    if (userName.IndexOf(userFilter, StringComparison.OrdinalIgnoreCase) >= 0)
                        filtered.Add(e);
                }
            }
            else
            {
                filtered.AddRange(result.Entities);
            }

            var entries = filtered.Select(BuildBrowseEntry).ToList();

            var structured = new GetAuditHistoryResult
            {
                Mode = "browse",
                EntityName = NullIfEmpty(entityName),
                TimeScope = timeScope,
                TotalCount = entries.Count,
                Entries = entries
            };

            return Success(BuildBrowseText(entityName, timeScope, userFilter, operation, entries.Count), structured);
        }

        private static AuditHistoryEntry BuildBrowseEntry(Entity e)
        {
            var created = e.GetAttributeValue<DateTime?>("createdon");
            var userRef = e.GetAttributeValue<EntityReference>("userid");
            var objectRef = e.GetAttributeValue<EntityReference>("objectid");
            var objectTypeCode = e.GetAttributeValue<string>("objecttypecode") ?? "";
            var actionValue = e.GetAttributeValue<OptionSetValue>("action")?.Value ?? 0;
            var operationValue = e.GetAttributeValue<OptionSetValue>("operation")?.Value ?? 0;

            return new AuditHistoryEntry
            {
                Timestamp = created?.ToString("yyyy-MM-dd HH:mm:ss", CultureInfo.InvariantCulture),
                User = NullIfEmpty(userRef?.Name ?? userRef?.Id.ToString()),
                Entity = NullIfEmpty(objectTypeCode),
                RecordName = NullIfEmpty(objectRef?.Name ?? objectRef?.Id.ToString()),
                RecordId = objectRef?.Id.ToString(),
                Action = FormatAction(actionValue),
                Operation = FormatOperation(operationValue)
            };
        }

        // ── User filter resolution ──────────────────────────────────────────────

        private string ResolveUserFilter(string userFilter)
        {
            if (string.IsNullOrWhiteSpace(userFilter)) return "";
            if (!userFilter.Contains('@')) return userFilter;

            var query = new QueryExpression("systemuser")
            {
                ColumnSet = new ColumnSet("fullname", "internalemailaddress", "isdisabled", "businessunitid")
            };
            query.Criteria.AddCondition("internalemailaddress", ConditionOperator.Equal, userFilter);

            var result = _serviceClient.RetrieveMultiple(query);
            if (result.Entities.Count > 1)
                return "[AMBIGUOUS_USER]" + FormatMultipleUsers(userFilter, result.Entities);
            if (result.Entities.Count == 1)
            {
                var fullName = result.Entities[0].GetAttributeValue<string>("fullname");
                if (!string.IsNullOrWhiteSpace(fullName)) return fullName;
            }
            return userFilter;
        }

        private static string FormatMultipleUsers(string input, DataCollection<Entity> users)
        {
            var sb = new StringBuilder(users.Count * 120 + 256);
            sb.AppendLine($"{users.Count} users match '{input}'. Re-call with the exact display name:");
            sb.AppendLine();
            sb.AppendLine("systemuserid\tfullname\temail\tstatus\tbusinessunit");
            foreach (var u in users)
            {
                var id = u.GetAttributeValue<Guid>("systemuserid");
                var name = u.GetAttributeValue<string>("fullname") ?? "";
                var email = u.GetAttributeValue<string>("internalemailaddress") ?? "";
                var disabled = u.GetAttributeValue<bool>("isdisabled");
                var buName = u.GetAttributeValue<EntityReference>("businessunitid")?.Name ?? "";
                sb.AppendLine($"{id}\t{EscapeTab(name)}\t{EscapeTab(email)}\t{(disabled ? "Disabled" : "Active")}\t{EscapeTab(buName)}");
            }
            return sb.ToString();
        }

        // ── ObjectTypeCode resolution ───────────────────────────────────────────

        private int? ResolveObjectTypeCode(string entityName)
        {
            var response = (RetrieveEntityResponse)_serviceClient.Execute(new RetrieveEntityRequest
            {
                LogicalName = entityName,
                EntityFilters = EntityFilters.Entity
            });
            return response.EntityMetadata.ObjectTypeCode;
        }

        // ── FetchXML builder ────────────────────────────────────────────────────

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
            sb.Append($"<condition attribute='createdon' operator='ge' value='{sinceUtc:yyyy-MM-ddTHH:mm:ssZ}'/>");
            sb.Append($"<condition attribute='createdon' operator='le' value='{untilUtc:yyyy-MM-ddTHH:mm:ssZ}'/>");

            if (objectTypeCode.HasValue)
                sb.Append($"<condition attribute='objecttypecode' operator='eq' value='{objectTypeCode.Value}'/>");

            if (!string.IsNullOrWhiteSpace(operation) && ActionNameMap.TryGetValue(operation, out var actionValue))
                sb.Append($"<condition attribute='action' operator='eq' value='{actionValue}'/>");

            sb.Append("</filter>");
            sb.Append("<order attribute='createdon' descending='true'/>");
            sb.Append("</entity>");
            sb.Append("</fetch>");
            return sb.ToString();
        }

        // ── Text builders (1 line, concise) ─────────────────────────────────────

        private static string BuildDetailText(string entityName, Guid recordId,
            List<AuditHistoryEntry> entries, string timeScope)
        {
            var n = entries.Count;
            if (n == 0)
                return $"[Success] {entityName} {recordId}: 0 audit entries ({timeScope}).";
            var word = n == 1 ? "entry" : "entries";
            return $"[Success] {entityName} {recordId}: {n} {word} ({timeScope}).";
        }

        private static string BuildBrowseText(string entityName, string timeScope,
            string userFilter, string operation, int count)
        {
            var scope = string.IsNullOrWhiteSpace(entityName) ? "all entities" : entityName;
            var word = count == 1 ? "entry" : "entries";
            var suffix = (string.IsNullOrWhiteSpace(userFilter) ? "" : $", user contains \"{userFilter}\"") +
                         (string.IsNullOrWhiteSpace(operation) ? "" : $", op={operation}");
            return $"[Success] {scope} ({timeScope}{suffix}): {count} {word}.";
        }

        // ── Static formatting helpers ───────────────────────────────────────────

        private static string FormatAttributeValue(object value, Entity entity, string attributeName, AttributeMetadataCache metadata)
        {
            if (value == null) return "-";

            // 1. Entity's own FormattedValues (Dataverse-provided label for picklist
            //    / status / boolean / lookup display-name etc.) -- highest priority
            //    because it reflects what the user actually saw at audit time
            //    (covers global option sets, FormattedValues come for free).
            if (entity != null && entity.FormattedValues.TryGetValue(attributeName, out var formatted) && !string.IsNullOrEmpty(formatted))
                return formatted;

            // 2. Local picklist / state / status / boolean -- use cached value->label
            //    map built from the attribute's own OptionSet.
            if (value is OptionSetValue osv
                && metadata.OptionSetLabels.TryGetValue(attributeName, out var labels)
                && labels.TryGetValue(osv.Value, out var label))
            {
                return label;
            }

            return value switch
            {
                EntityReference er => string.IsNullOrWhiteSpace(er.Name) ? er.Id.ToString() : er.Name,
                OptionSetValue osvFallback => osvFallback.Value.ToString(CultureInfo.InvariantCulture),
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

        private static bool TryParseDate(string input, string fieldName, out DateTime? result, out string error)
        {
            result = null;
            error = null;
            if (string.IsNullOrWhiteSpace(input)) return true;

            if (!DateTime.TryParse(input.Trim(), CultureInfo.InvariantCulture,
                    DateTimeStyles.AssumeUniversal | DateTimeStyles.AdjustToUniversal, out var parsed))
            {
                error = $"'{input}' is not a valid ISO 8601 date for {fieldName}. " +
                        "Expected format: 'YYYY-MM-DD' or 'YYYY-MM-DDTHH:mm:ssZ'.";
                return false;
            }
            result = parsed;
            return true;
        }

        private static string NullIfEmpty(string value) =>
            string.IsNullOrWhiteSpace(value) ? null : value.Trim();

        private static string EscapeTab(string value) =>
            value?.Replace("\t", " ").Replace("\n", " ").Replace("\r", "") ?? "";
    }

    /// <summary>
    /// Per-request cache of an entity's attribute metadata. Built once per
    /// detail-mode call so every <c>change</c> in the response can carry
    /// a human-readable display name and option-set label.
    /// </summary>
    internal sealed class AttributeMetadataCache
    {
        public Dictionary<string, string> DisplayNames { get; } =
            new(StringComparer.OrdinalIgnoreCase);

        // attribute logical name -> (option-set int value -> user-localized label)
        public Dictionary<string, Dictionary<int, string>> OptionSetLabels { get; } =
            new(StringComparer.OrdinalIgnoreCase);
    }
}
