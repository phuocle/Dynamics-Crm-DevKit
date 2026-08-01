using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Net.Http;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>
    /// Helper for the Dataverse <c>recyclebinconfig</c> table, used by:
    /// <list type="bullet">
    ///   <item><description><c>ManageDeletedRecordsTool</c> — toggle the org-level
    ///     "Keep deleted Dataverse records" setting on/off (the row where
    ///     <c>name='organization'</c>).</description></item>
    ///   <item><description><c>ManageRecycleBinTool</c> — list / preview / set
    ///     the per-table soft-delete readiness flag (one row per entity, where
    ///     <c>name</c> = the entity's logical name).</description></item>
    /// </list>
    /// <para>
    /// OFF path (per Microsoft Learn docs, restore-deleted-records.md):
    /// DELETE the org row. Dataverse cascade-deletes per-table rows and
    /// schedules a system job (operationtype=104 "Process Table For
    /// RecycleBin") to clean up.
    /// </para>
    /// <para>
    /// ON path (captured from Power Platform admin center Web API call):
    /// POST <c>/api/data/v9.0/recyclebinconfigs</c> with payload
    /// <c>{ extensionofrecordid@odata.bind: "/entities(&lt;guid&gt;)",
    ///        cleanupintervalindays: 1..30 }</c>.
    /// </para>
    /// </summary>
    internal static class RecycleBinConfigHelper
    {
        // ------------------------------------------------------------------
        // Constants
        // ------------------------------------------------------------------

        /// <summary>Logical name of the recyclebinconfig table.</summary>
        public const string RecycleBinConfigTable = "recyclebinconfig";
        public const string EntityLogicalName = RecycleBinConfigTable;

        /// <summary>Special <c>name</c> value of the single org-level row.</summary>
        public const string OrgRowName = "organization";

        public const int MinRetentionDays = 1;
        public const int MaxRetentionDays = 30;
        public const int DefaultRetentionDays = 30;

        /// <summary>
        /// Per-table rows use <c>cleanupintervalindays = -1</c> to mean
        /// "inherit from the org row". Sentinels &lt; 1 must be treated as
        /// inherit (never as a real retention value).
        /// </summary>
        public const int InheritRetentionSentinel = -1;

        /// <summary>
        /// Dataverse hard cap for <c>cleanupintervalindays</c> (1..30). Used
        /// for input validation in <c>ManageRecycleBinTool</c>.
        /// </summary>
        public const int HardCapRetentionDays = MaxRetentionDays;

        // ------------------------------------------------------------------
        // POCOs
        // ------------------------------------------------------------------

        /// <summary>
        /// Lightweight DTO for <see cref="QueryConfigEntries"/> — one row per
        /// per-table <c>recyclebinconfig</c> entry, enriched with the entity's
        /// display name (resolved via a link to the <c>entity</c> table).
        /// </summary>
        public sealed class RecycleBinConfigEntry
        {
            public string LogicalName { get; set; }
            public string DisplayName { get; set; }
            public bool IsReadyForRecycleBin { get; set; }
            public int? CleanupIntervalInDays { get; set; }
        }

        /// <summary>
        /// Strongly-typed view of the single org row (<c>name='organization'</c>).
        /// Returned by <see cref="GetOrgRecycleBinConfig"/>. Null = row missing
        /// (soft-delete is disabled at the org level).
        /// </summary>
        public sealed class RecycleBinOrgConfig
        {
            public Guid? Id { get; set; }
            public bool? IsReadyForRecycleBin { get; set; }
            public int? CleanupIntervalInDays { get; set; }
        }

        // ------------------------------------------------------------------
        // Cached lookups
        // ------------------------------------------------------------------

        /// <summary>
        /// The entity table lookup target for <c>extensionofrecordid</c>.
        /// Looked up at runtime by <see cref="GetOrganizationEntityId"/>;
        /// cached statically after the first successful lookup.
        /// </summary>
        private static Guid? _cachedOrganizationEntityId;

        // ------------------------------------------------------------------
        // Org-row helpers (used by ManageDeletedRecordsTool)
        // ------------------------------------------------------------------

        /// <summary>
        /// Returns the max retention days from the org <c>recyclebinconfig</c>
        /// row, or <c>MaxRetentionDays</c> if the row is missing or has the
        /// sentinel value (-1, set by Dataverse before provisioning completes).
        /// </summary>
        public static int GetMaxRetentionDays(ServiceClient svc)
        {
            var row = GetOrgRecycleBinConfigRow(svc);
            if (row == null) return MaxRetentionDays;
            int? days = row.GetAttributeValue<int?>("cleanupintervalindays");
            if (!days.HasValue || days.Value < 1) return MaxRetentionDays;
            return Math.Min(days.Value, MaxRetentionDays);
        }

        /// <summary>
        /// Returns the current "isreadyforrecyclebin" value of the org row,
        /// or <c>null</c> if the row is missing (soft-delete disabled).
        /// </summary>
        public static bool? GetCurrentTurnOnState(ServiceClient svc)
        {
            var row = GetOrgRecycleBinConfigRow(svc);
            if (row == null) return null;
            return row.GetAttributeValue<bool?>("isreadyforrecyclebin");
        }

        /// <summary>
        /// Returns the full org row (or null if missing). Read-only — callers
        /// should not modify the entity. Used by TurnOn/TurnOff to inspect
        /// existing state.
        /// </summary>
        public static Entity GetOrgRecycleBinConfigRow(ServiceClient svc)
        {
            var qe = new QueryExpression(RecycleBinConfigTable)
            {
                ColumnSet = new ColumnSet("recyclebinconfigid", "name", "isreadyforrecyclebin", "cleanupintervalindays"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("name", ConditionOperator.Equal, OrgRowName)
                    }
                }
            };
            var result = svc.RetrieveMultiple(qe);
            return result.Entities.Count == 1 ? result.Entities[0] : null;
        }

        /// <summary>
        /// Strongly-typed view of the org row, used by
        /// <c>ManageRecycleBinTool</c> (status + set's org-row update).
        /// </summary>
        public static RecycleBinOrgConfig GetOrgRecycleBinConfig(ServiceClient svc)
        {
            var row = GetOrgRecycleBinConfigRow(svc);
            if (row == null) return null;
            return new RecycleBinOrgConfig
            {
                Id = row.Id,
                IsReadyForRecycleBin = row.GetAttributeValue<bool?>("isreadyforrecyclebin"),
                CleanupIntervalInDays = row.GetAttributeValue<int?>("cleanupintervalindays")
            };
        }

        /// <summary>
        /// Turn OFF: DELETE the org <c>recyclebinconfig</c> row (Microsoft
        /// Learn documented path). Dataverse will schedule a background
        /// job to cascade-delete per-table rows.
        /// Returns the deleted row id; returns null if there was nothing to
        /// delete (already OFF).
        /// </summary>
        public static Guid? TurnOff(ServiceClient svc)
        {
            var row = GetOrgRecycleBinConfigRow(svc);
            if (row == null) return null;
            var id = row.Id;
            svc.Delete(RecycleBinConfigTable, id);
            return id;
        }

        /// <summary>
        /// Turn ON: Web API POST <c>/api/data/v9.0/recyclebinconfigs</c>
        /// with the same payload the Power Platform admin center uses.
        /// Returns the new row id parsed from the OData-EntityId header (or
        /// "(see response body)" if not present).
        ///
        /// <para>
        /// Pre-step: if an old row already exists with isreadyforrecyclebin
        /// = false, DELETE it first -- UPDATE on an existing row is silently
        /// rolled back by Dataverse and never triggers the provisioning job.
        /// </para>
        /// </summary>
        /// <param name="retentionDays">1..30 inclusive. Clamped silently.</param>
        public static string TurnOn(ServiceClient svc, int retentionDays)
        {
            if (retentionDays < MinRetentionDays) retentionDays = MinRetentionDays;
            if (retentionDays > MaxRetentionDays) retentionDays = MaxRetentionDays;

            // 1. DELETE old row if present (Dataverse silently rolls back UPDATEs).
            var row = GetOrgRecycleBinConfigRow(svc);
            if (row != null)
            {
                svc.Delete(RecycleBinConfigTable, row.Id);
            }

            // 2. Lookup entityid for the `entity` table row whose logical name
            //    is `organization` (the target of extensionofrecordid lookup).
            var entityId = GetOrganizationEntityId(svc);

            // 3. POST Web API (matches Power Platform admin center exactly).
            var payload = "{" +
                "\"extensionofrecordid@odata.bind\":\"/entities(" + entityId.ToString() + "\")," +
                "\"extensionofrecordid@OData.Community.Display.V1.FormattedValue\":\"OrganizationId\"," +
                "\"cleanupintervalindays\":" + retentionDays.ToString(CultureInfo.InvariantCulture) +
                "}";
            var headers = new Dictionary<string, List<string>>
            {
                { "Accept", new List<string> { "application/json" } },
                { "OData-MaxVersion", new List<string> { "4.0" } },
                { "OData-Version", new List<string> { "4.0" } },
                { "Prefer", new List<string> { "return=representation" } }
            };

            using var resp = svc.ExecuteWebRequest(
                HttpMethod.Post,
                "recyclebinconfigs",
                payload,
                headers,
                "application/json");

            var body = resp.Content != null ? resp.Content.ReadAsStringAsync().GetAwaiter().GetResult() : "";
            int code = (int)resp.StatusCode;
            if (code < 200 || code >= 300)
                throw new InvalidOperationException("POST /recyclebinconfigs returned HTTP " + code + ": " + body);

            // Extract the new row id from OData-EntityId header (some envs).
            string newId = "(see response body)";
            if (resp.Headers != null && resp.Headers.TryGetValues("OData-EntityId", out var vals))
            {
                var entId = string.Join("", vals);
                int idx = entId.LastIndexOf('(');
                if (idx > 0 && entId.EndsWith(")"))
                    newId = entId.Substring(idx + 1, entId.Length - idx - 2);
            }
            if (newId == "(see response body)")
            {
                int iStart = body.IndexOf("recyclebinconfigs(", StringComparison.OrdinalIgnoreCase);
                if (iStart >= 0)
                {
                    int iEnd = body.IndexOf(')', iStart);
                    if (iEnd > iStart)
                        newId = body.Substring(iStart + "recyclebinconfigs(".Length, iEnd - iStart - "recyclebinconfigs(".Length);
                }
            }

            return newId;
        }

        /// <summary>
        /// Lookup the entityid for the `entity` table row whose logical name
        /// is `organization`. Cached after first successful lookup.
        /// </summary>
        public static Guid GetOrganizationEntityId(ServiceClient svc)
        {
            if (_cachedOrganizationEntityId.HasValue) return _cachedOrganizationEntityId.Value;
            var qe = new QueryExpression("entity")
            {
                ColumnSet = new ColumnSet("entityid"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("logicalname", ConditionOperator.Equal, "organization")
                    }
                }
            };
            var result = svc.RetrieveMultiple(qe);
            if (result.Entities.Count == 0)
                throw new InvalidOperationException("entity row not found for logicalname='organization'");
            _cachedOrganizationEntityId = result.Entities[0].Id;
            return _cachedOrganizationEntityId.Value;
        }

        // ------------------------------------------------------------------
        // Per-table helpers (used by ManageRecycleBinTool)
        // ------------------------------------------------------------------

        /// <summary>
        /// Query the per-table <c>recyclebinconfig</c> rows (every row where
        /// <c>name &lt;&gt; 'organization'</c>), linked to the <c>entity</c>
        /// table to resolve a display name.
        /// </summary>
        /// <param name="svc">Dataverse connection.</param>
        /// <param name="nameFilter">Optional contains filter on <c>recyclebinconfig.name</c>.</param>
        /// <param name="includeSystem">If true, also include rows where the linked entity is managed.</param>
        /// <param name="onlyCustom">If true, only return rows where the linked entity is custom (unmanaged + customisable).</param>
        /// <param name="page">1-based page number. Values &lt; 1 are treated as 1.</param>
        /// <param name="pageSize">Rows per page. Caller is expected to clamp to 1..100.</param>
        public static List<RecycleBinConfigEntry> QueryConfigEntries(
            ServiceClient svc,
            string nameFilter,
            bool includeSystem,
            bool onlyCustom,
            int page,
            int pageSize)
        {
            if (page < 1) page = 1;
            if (pageSize < 1) pageSize = 10;

            var qe = new QueryExpression(RecycleBinConfigTable)
            {
                ColumnSet = new ColumnSet("recyclebinconfigid", "name", "isreadyforrecyclebin", "cleanupintervalindays"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    // Skip the org row — list_tables only shows per-table entries.
                    Conditions =
                    {
                        new ConditionExpression("name", ConditionOperator.NotEqual, OrgRowName)
                    }
                },
                Orders = { new OrderExpression("name", OrderType.Ascending) },
                PageInfo = new PagingInfo
                {
                    PageNumber = page,
                    Count = pageSize
                }
            };

            if (!string.IsNullOrWhiteSpace(nameFilter))
            {
                qe.Criteria.AddCondition("name", ConditionOperator.Like, "%" + nameFilter.Trim() + "%");
            }

            // Join entity (for DisplayName only — entity table has NO ismanaged / iscustomizable).
            // INNER join: only rows that have a valid entity reference are listed.
            // CRITICAL: do NOT request `displayname`, `ismanaged`, `iscustomizable` from the
            // `entity` table — they don't exist. The entity table exposes:
            //   logicalname, name (DisplayName), collectionname, logicalcollectionname,
            //   entityid, objecttypecode, isactivity, basetablename, ...
            var entityLink = qe.AddLink("entity", "extensionofrecordid", "entityid", JoinOperator.Inner);
            entityLink.Columns = new ColumnSet("logicalname", "name", "collectionname");
            entityLink.EntityAlias = "ent";

            // ismanaged / iscustomizable live on the recyclebinconfig row itself
            // (Boolean and BooleanManagedProperty respectively). They are NOT
            // fields of the joined `entity` table.
            if (onlyCustom)
            {
                // Custom only: NOT ismanaged on the recyclebinconfig row.
                qe.Criteria.AddCondition("ismanaged", ConditionOperator.Equal, false);
            }
            else if (!includeSystem)
            {
                // Default: skip managed (system) entities.
                qe.Criteria.AddCondition("ismanaged", ConditionOperator.Equal, false);
            }

            var result = svc.RetrieveMultiple(qe);
            var entries = new List<RecycleBinConfigEntry>(result.Entities.Count);
            foreach (var row in result.Entities)
            {
                entries.Add(new RecycleBinConfigEntry
                {
                    LogicalName = row.GetAttributeValue<string>("name"),
                    DisplayName = ReadAliasedDisplayName(row, "ent"),
                    IsReadyForRecycleBin = row.GetAttributeValue<bool?>("isreadyforrecyclebin") ?? false,
                    CleanupIntervalInDays = row.GetAttributeValue<int?>("cleanupintervalindays")
                });
            }
            return entries;
        }

        /// <summary>
        /// Total number of PER-TABLE <c>recyclebinconfig</c> rows (excludes
        /// the org row <c>name='organization'</c>). Used by
        /// <c>ManageRecycleBinTool.list_tables</c> to compute total pages
        /// and the "còn N tables nữa" truncation note.
        /// </summary>
        public static int CountAllEnabledRows(ServiceClient svc)
        {
            var qe = new QueryExpression(RecycleBinConfigTable)
            {
                ColumnSet = new ColumnSet("recyclebinconfigid"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("name", ConditionOperator.NotEqual, OrgRowName)
                    }
                },
                PageInfo = new PagingInfo
                {
                    PageNumber = 1,
                    Count = 5000,
                    ReturnTotalRecordCount = true
                }
            };
            var result = svc.RetrieveMultiple(qe);
            return result.TotalRecordCount;
        }

        /// <summary>
        /// Extract the display name from an AliasedResult. <c>displayname</c>
        /// on the <c>entity</c> table is surfaced as a plain string when read
        /// through ServiceClient; we still unwrap it via <see cref="AliasedValue"/>
        /// to be safe across SDK versions.
        /// </summary>
        private static string ReadAliasedDisplayName(Entity row, string alias)
        {
            // The entity table's display name is exposed as the `name` attribute
            // (a PascalCase string like "Account"), NOT `displayname` (which
            // doesn't exist on the `entity` table).
            var aliased = row.GetAttributeValue<AliasedValue>(alias + ".name");
            if (aliased == null) return null;
            return aliased.Value as string;
        }
    }
}
