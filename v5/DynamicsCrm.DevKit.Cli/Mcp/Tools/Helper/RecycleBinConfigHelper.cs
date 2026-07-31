using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>
    /// Shared helpers for the recyclebinconfig entity used by
    /// <c>manage_deleted_records</c> (status) and <c>manage_recycle_bin</c>
    /// (list / set / preview).
    ///
    /// Per Microsoft Learn (recyclebinconfig entity reference), the table holds
    /// one row per (org, table) pair plus a special <c>name='organization'</c>
    /// org-default row. <c>isreadyforrecyclebin</c> is the per-table readiness
    /// flag; <c>cleanupintervalindays</c> is per-table (1..30, -1 = inherit).
    /// </summary>
    internal static class RecycleBinConfigHelper
    {
        public const string EntityLogicalName = "recyclebinconfig";
        public const string OrganizationRowName = "organization";

        public const int HardCapRetentionDays = 30;
        public const int InheritRetentionSentinel = -1;

        public sealed class OrgRecycleBinConfig
        {
            public Guid? Id { get; set; }
            public int? CleanupIntervalInDays { get; set; }
            public bool? IsReadyForRecycleBin { get; set; }
        }

        public static OrgRecycleBinConfig GetOrgRecycleBinConfig(ServiceClient serviceClient)
        {
            var qe = new QueryExpression(EntityLogicalName)
            {
                ColumnSet = new ColumnSet("recyclebinconfigid", "cleanupintervalindays", "isreadyforrecyclebin"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions = { new ConditionExpression("name", ConditionOperator.Equal, OrganizationRowName) }
                },
                TopCount = 1
            };
            var ec = serviceClient.RetrieveMultiple(qe);
            var row = ec.Entities.FirstOrDefault();
            if (row == null) return null;
            return new OrgRecycleBinConfig
            {
                Id = row.Id,
                CleanupIntervalInDays = row.GetAttributeValue<int?>("cleanupintervalindays"),
                IsReadyForRecycleBin = row.GetAttributeValue<bool?>("isreadyforrecyclebin")
            };
        }

        public static int GetMaxRetentionDays(ServiceClient serviceClient)
        {
            var c = GetOrgRecycleBinConfig(serviceClient);
            return c?.CleanupIntervalInDays is int d && d > 0 ? d : HardCapRetentionDays;
        }

        /// <summary>
        /// Count recyclebinconfig rows where the per-table readiness flag is true,
        /// excluding the org-default <c>name='organization'</c> row.
        /// </summary>
        public static int CountEnabledTables(ServiceClient serviceClient)
        {
            var fetch = @"<fetch aggregate='true'>
  <entity name='recyclebinconfig'>
    <attribute name='recyclebinconfigid' aggregate='count' alias='count_enabled'/>
    <filter type='and'>
      <condition attribute='statecode' operator='eq' value='0'/>
      <condition attribute='isreadyforrecyclebin' operator='eq' value='1'/>
      <condition attribute='name' operator='ne' value='" + OrganizationRowName + @"'/>
    </filter>
  </entity>
</fetch>";
            var ec = serviceClient.RetrieveMultiple(new FetchExpression(fetch));
            var row = ec.Entities.FirstOrDefault();
            if (row != null && row.Attributes.ContainsKey("count_enabled"))
            {
                var aliased = row["count_enabled"] as AliasedValue;
                if (aliased?.Value is int n) return n;
                if (aliased?.Value is long l) return (int)l;
            }
            return 0;
        }

        /// <summary>
        /// Lightweight projection of a recyclebinconfig row joined to the
        /// underlying <c>entity</c> metadata row, used by
        /// <c>manage_recycle_bin list_tables</c>. The query intentionally joins
        /// <c>entity.logicalname</c> so callers can filter / paginate by
        /// table name without an extra round-trip.
        /// </summary>
        public sealed class RecycleBinConfigEntry
        {
            public Guid ConfigId { get; set; }
            public string LogicalName { get; set; }
            public string DisplayName { get; set; }
            public int? CleanupIntervalInDays { get; set; }
            public bool IsReadyForRecycleBin { get; set; }
            public bool IsOrgRow { get; set; }
        }

        public static List<RecycleBinConfigEntry> QueryConfigEntries(
            ServiceClient serviceClient,
            string nameFilter,
            bool includeSystem,
            bool onlyCustom,
            int page,
            int pageSize)
        {
            _ = onlyCustom;
            if (page < 1) page = 1;
            if (pageSize < 1) pageSize = 10;
            if (pageSize > 100) pageSize = 100;

            var sb = new System.Text.StringBuilder();
            sb.AppendLine("<fetch distinct='false'>");
            sb.AppendLine($"  <entity name='recyclebinconfig'>");
            sb.AppendLine($"    <attribute name='recyclebinconfigid' />");
            sb.AppendLine($"    <attribute name='name' />");
            sb.AppendLine($"    <attribute name='cleanupintervalindays' />");
            sb.AppendLine($"    <attribute name='isreadyforrecyclebin' />");
            sb.AppendLine($"    <attribute name='extensionofrecordid' />");
            sb.AppendLine($"    <filter type='and'>");
            sb.AppendLine($"      <condition attribute='statecode' operator='eq' value='0' />");
            if (!string.IsNullOrWhiteSpace(nameFilter))
            {
                var safe = EscapeXml(nameFilter.Trim());
                sb.AppendLine($"      <condition attribute='name' operator='like' value='%{safe}%' />");
            }
            sb.AppendLine($"    </filter>");
            sb.AppendLine($"    <order attribute='recyclebinconfigid' descending='false' />");
            sb.AppendLine($"  </entity>");
            sb.AppendLine($"</fetch>");

            var ec = serviceClient.RetrieveMultiple(new FetchExpression(sb.ToString()));
            var displayLookup = BuildDisplayNameLookup(serviceClient);
            var all = new List<RecycleBinConfigEntry>();
            foreach (var e in ec.Entities)
            {
                var name = e.GetAttributeValue<string>("name");
                var isOrgRow = string.Equals(name, OrganizationRowName, StringComparison.OrdinalIgnoreCase);
                if (isOrgRow) continue;
                var entRef = e.GetAttributeValue<EntityReference>("extensionofrecordid");
                if (entRef == null) continue;
                var logical = ResolveEntityLogicalNameByMetadataId(serviceClient, entRef.Id, displayLookup);
                if (string.IsNullOrEmpty(logical)) continue;
                var display = displayLookup.TryGetValue(logical, out var dn) ? dn : logical;
                if (!includeSystem && IsSystemTable(logical)) continue;
                all.Add(new RecycleBinConfigEntry
                {
                    ConfigId = e.Id,
                    LogicalName = logical,
                    DisplayName = display,
                    CleanupIntervalInDays = e.GetAttributeValue<int?>("cleanupintervalindays"),
                    IsReadyForRecycleBin = e.GetAttributeValue<bool>("isreadyforrecyclebin"),
                    IsOrgRow = false
                });
            }

            var start = (page - 1) * pageSize;
            if (start >= all.Count) return new List<RecycleBinConfigEntry>();
            return all.Skip(start).Take(pageSize).ToList();
        }

        public static int CountAllEnabledRows(ServiceClient serviceClient)
        {
            var fetch = @"<fetch aggregate='true'>
  <entity name='recyclebinconfig'>
    <attribute name='recyclebinconfigid' aggregate='count' alias='count_total'/>
    <filter type='and'>
      <condition attribute='statecode' operator='eq' value='0'/>
      <condition attribute='name' operator='ne' value='" + OrganizationRowName + @"'/>
    </filter>
  </entity>
</fetch>";
            var ec = serviceClient.RetrieveMultiple(new FetchExpression(fetch));
            var row = ec.Entities.FirstOrDefault();
            if (row != null && row.Attributes.ContainsKey("count_total"))
            {
                var aliased = row["count_total"] as AliasedValue;
                if (aliased?.Value is int n) return n;
                if (aliased?.Value is long l) return (int)l;
            }
            return 0;
        }

        /// <summary>
        /// Fetch a logical→displayName lookup for ALL entities in the org via a
        /// single <see cref="RetrieveAllEntitiesRequest"/>. Used to enrich the
        /// recyclebinconfig listing (the <c>entity</c> metadata table does NOT
        /// expose a <c>displayname</c> column in FetchXml link-entity, so we
        /// can't join it from the query — the cache sidesteps that limitation
        /// at the cost of one extra round-trip per <c>list_tables</c> call).
        /// </summary>
        public static Dictionary<string, string> BuildDisplayNameLookup(ServiceClient serviceClient)
        {
            var lookup = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            try
            {
                var req = new RetrieveAllEntitiesRequest
                {
                    EntityFilters = EntityFilters.Entity,
                    RetrieveAsIfPublished = true
                };
                var resp = (RetrieveAllEntitiesResponse)serviceClient.Execute(req);
                foreach (var em in resp.EntityMetadata)
                {
                    if (string.IsNullOrEmpty(em?.LogicalName)) continue;
                    var display = em.DisplayName?.UserLocalizedLabel?.Label;
                    lookup[em.LogicalName] = !string.IsNullOrEmpty(display) ? display : em.LogicalName;
                }
            }
            catch
            {
                // Best-effort — fall back to logical names if metadata fetch fails.
            }
            return lookup;
        }

        /// <summary>
        /// Resolve an entity's logical name from its metadata id (the
        /// <c>extensionofrecordid</c> lookup on recyclebinconfig returns a
        /// MetadataId but not always a populated LogicalName for activity tables).
        /// Scans the BuildDisplayNameLookup cache and falls back to
        /// RetrieveEntityRequest by MetadataId if the cache is missing the entry.
        /// </summary>
        public static string ResolveEntityLogicalNameByMetadataId(
            ServiceClient serviceClient,
            Guid metadataId,
            Dictionary<string, string> displayLookup)
        {
            if (metadataId == Guid.Empty) return null;
            try
            {
                var req = new RetrieveEntityRequest
                {
                    MetadataId = metadataId,
                    EntityFilters = EntityFilters.Entity
                };
                var resp = (RetrieveEntityResponse)serviceClient.Execute(req);
                var logical = resp.EntityMetadata?.LogicalName;
                if (!string.IsNullOrEmpty(logical) && displayLookup != null)
                {
                    var display = resp.EntityMetadata.DisplayName?.UserLocalizedLabel?.Label;
                    if (!string.IsNullOrEmpty(display))
                        displayLookup[logical] = display;
                }
                return logical;
            }
            catch
            {
                return null;
            }
        }

        private static readonly HashSet<string> SystemTablePrefixes = new(StringComparer.OrdinalIgnoreCase)
        {
            "system", "business", "attribute", "entity", "option", "role", "team",
            "user", "queue", "mail", "import", "sdkmessage", "plugin", "workflow",
            "process", "stage", "connection", "post", "activity", "calendar", "subject",
            "resource", "equipment", "service", "site", "booking", "knowledge",
        };

        public static bool IsSystemTable(string logicalName)
        {
            if (string.IsNullOrEmpty(logicalName)) return true;
            if (logicalName.Equals("account", StringComparison.OrdinalIgnoreCase)) return true;
            if (logicalName.Equals("contact", StringComparison.OrdinalIgnoreCase)) return true;
            if (logicalName.Equals("lead", StringComparison.OrdinalIgnoreCase)) return true;
            if (logicalName.Equals("opportunity", StringComparison.OrdinalIgnoreCase)) return true;
            if (logicalName.Equals("incident", StringComparison.OrdinalIgnoreCase)) return true;
            if (logicalName.Equals("campaign", StringComparison.OrdinalIgnoreCase)) return true;
            if (logicalName.Equals("campaignactivity", StringComparison.OrdinalIgnoreCase)) return true;
            if (logicalName.Equals("campaignresponse", StringComparison.OrdinalIgnoreCase)) return true;
            if (logicalName.Equals("quote", StringComparison.OrdinalIgnoreCase)) return true;
            if (logicalName.Equals("salesorder", StringComparison.OrdinalIgnoreCase)) return true;
            if (logicalName.Equals("invoice", StringComparison.OrdinalIgnoreCase)) return true;
            return SystemTablePrefixes.Any(p => logicalName.StartsWith(p, StringComparison.OrdinalIgnoreCase));
        }

        private static string EscapeXml(string s) =>
            string.IsNullOrEmpty(s) ? s : s
                .Replace("&", "&amp;")
                .Replace("<", "&lt;")
                .Replace(">", "&gt;")
                .Replace("\"", "&quot;")
                .Replace("'", "&apos;");
    }
}
