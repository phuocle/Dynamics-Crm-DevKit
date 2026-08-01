using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Net.Http;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>
    /// Helper for reading and toggling the org-level "Keep deleted Dataverse
    /// records" setting via the <c>recyclebinconfig</c> table (logical name
    /// = "recyclebinconfig", org row identified by <c>name='organization'</c>).
    ///
    /// <para>
    /// OFF path (per Microsoft Learn docs, restore-deleted-records.md):
    /// DELETE the org row. Dataverse cascade-deletes per-table rows and
    /// schedules a system job (operationtype=104 "Process Table For
    /// RecycleBin") to clean up.
    /// </para>
    ///
    /// <para>
    /// ON path (captured from Power Platform admin center Web API call):
    /// POST <c>/api/data/v9.0/recyclebinconfigs</c> with payload
    /// <c>{ extensionofrecordid@odata.bind: "/entities(<guid>)",
    ///        cleanupintervalindays: 1..30 }</c>.
    /// </para>
    /// </summary>
    internal static class RecycleBinConfigHelper
    {
        public const string RecycleBinConfigTable = "recyclebinconfig";
        public const string OrgRowName = "organization";
        public const int MinRetentionDays = 1;
        public const int MaxRetentionDays = 30;
        public const int DefaultRetentionDays = 30;

        /// <summary>
        /// The entity table lookup target for <c>extensionofrecordid</c>.
        /// Looked up at runtime by <see cref="GetOrganizationEntityId"/>;
        /// cached statically after the first successful lookup.
        /// </summary>
        private static Guid? _cachedOrganizationEntityId;

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
                "\"extensionofrecordid@odata.bind\":\"/entities(" + entityId.ToString() + ")\"," +
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
    }
}