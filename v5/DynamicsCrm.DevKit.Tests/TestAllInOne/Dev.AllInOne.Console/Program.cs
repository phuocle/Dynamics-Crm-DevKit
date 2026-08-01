using System;
using System.Globalization;
using System.Linq;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using SysConsole = System.Console;

namespace Dev.AllInOne.Console
{
    // ============================================================================
    //  Toggle the org-level "Keep deleted Dataverse records" setting
    //  via `recyclebinconfig` (logical name = "recyclebinconfig").
    //
    //  Microsoft Learn (developer docs, restore-deleted-records.md):
    //    Turn OFF = DELETE the row where name = 'organization'.
    //      "This action deletes all the records in the RecycleBinConfig table
    //       and disables deleted record keeping for the environment."
    //    Turn ON  = If a row with name='organization' exists, PATCH
    //               isreadyforrecyclebin=true. If DELETE removed it, Create a
    //               new row { name='organization', isreadyforrecyclebin=true,
    //               cleanupintervalindays=30 }.
    //
    //  Both directions trigger a system job (operationtype=104 "Process Table
    //  For RecycleBin"). If we try to turn on/off while one is still running,
    //  Dataverse returns 0x80090011 "Cannot start another [RecycleBinOperation]
    //  because there is a previous [RecycleBinOperation] running at this moment".
    //  Before every action we wait for any pending operation to finish.
    //
    //  This program runs once and exits. It does NOT poll for status after
    //  success -- the user verifies the result via MCP `manage_deleted_records
    //  action=status` or admin center.
    // ============================================================================
    public class Program
    {
        // operationtype = 104 in asyncoperation = "Process Table For RecycleBin"
        private const int RecycleBinOperationType = 104;

        private const int StatusHardCapRetentionDays = 30;

        // How long to wait for a pending RecycleBin operation to finish.
        private static readonly TimeSpan PollInterval = TimeSpan.FromSeconds(15);
        private static readonly TimeSpan PollMaxWait = TimeSpan.FromMinutes(45);

        static int Main()
        {
            SysConsole.OutputEncoding = System.Text.Encoding.UTF8;
            SysConsole.WriteLine("===============================================================");
            SysConsole.WriteLine(" recyclebinconfig toggle (turn_on / turn_off) -- single action");
            SysConsole.WriteLine(" Started: " + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));
            SysConsole.WriteLine("===============================================================");

            // ── Connect via App.Service ──────────────────────────────────────
            ServiceClient svc;
            try
            {
                svc = App.Service;
            }
            catch (Exception ex)
            {
                SysConsole.WriteLine("[FATAL] App.Service threw: " + ex.GetType().Name + ": " + ex.Message);
                return 2;
            }
            if (svc == null || !svc.IsReady)
            {
                SysConsole.WriteLine("[FATAL] App.Service not ready: " + (svc == null ? "null" : svc.LastError));
                return 2;
            }
            SysConsole.WriteLine("Connected OK to " + svc.ConnectedOrgUriActual);
            SysConsole.WriteLine("  Version: " + svc.ConnectedOrgVersion);
            SysConsole.WriteLine("  Org: " + svc.ConnectedOrgFriendlyName + " (" + svc.ConnectedOrgUniqueName + ")");
            SysConsole.WriteLine();

            // ── 1. Read current state ───────────────────────────────────────
            Entity orgRow = GetOrgRecycleBinConfig(svc);
            bool currentlyOn = orgRow != null && orgRow.GetAttributeValue<bool?>("isreadyforrecyclebin") == true;

            SysConsole.WriteLine("[Current]  soft-delete = " + (currentlyOn ? "ON" : "OFF"));
            if (orgRow != null)
            {
                SysConsole.WriteLine("[Current]  org row id            = " + orgRow.Id);
                SysConsole.WriteLine("[Current]  isreadyforrecyclebin = " + (orgRow.GetAttributeValue<bool?>("isreadyforrecyclebin")?.ToString() ?? "null"));
                SysConsole.WriteLine("[Current]  cleanupintervalindays = " + (orgRow.GetAttributeValue<int?>("cleanupintervalindays")?.ToString() ?? "null"));
            }
            else
            {
                SysConsole.WriteLine("[Current]  org row = MISSING (already turned off)");
            }
            SysConsole.WriteLine();

            // ── 2. Wait for any pending RecycleBin operation to finish ──────
            try
            {
                WaitForRecycleBinOperation(svc, orgRow);
            }
            catch (TimeoutException ex)
            {
                SysConsole.WriteLine("[FATAL] " + ex.Message);
                return 3;
            }
            SysConsole.WriteLine();

            // ── 3. Toggle ────────────────────────────────────────────────────
            try
            {
                if (currentlyOn)
                {
                    SysConsole.WriteLine("--- Turn OFF (DELETE org row) ---");
                    SysConsole.WriteLine(TurnOff(svc));
                }
                else
                {
                    SysConsole.WriteLine("--- Turn ON (Create or PATCH org row) ---");
                    SysConsole.WriteLine(TurnOn(svc));
                }
            }
            catch (Exception ex)
            {
                SysConsole.WriteLine("[FATAL] " + ex.GetType().Name + ": " + ex.Message);
                if (ex.InnerException != null)
                    SysConsole.WriteLine("  inner: " + ex.InnerException.GetType().Name + ": " + ex.InnerException.Message);
                return 1;
            }

            SysConsole.WriteLine();
            SysConsole.WriteLine("Done. Verify with MCP `manage_deleted_records action=status` " +
                "(turn_on/turn_off: 1 message, then status re-check after ~30 min for the background job).");
            return 0;
        }

        // ====================================================================
        //  GetOrgRecycleBinConfig -- fetch the org row (name='organization')
        // ====================================================================
        private static Entity GetOrgRecycleBinConfig(ServiceClient svc)
        {
            var qe = new QueryExpression("recyclebinconfig")
            {
                ColumnSet = new ColumnSet("recyclebinconfigid", "name", "isreadyforrecyclebin", "cleanupintervalindays"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("name", ConditionOperator.Equal, "organization")
                    }
                }
            };
            var result = svc.RetrieveMultiple(qe);
            return result.Entities.Count == 1 ? result.Entities[0] : null;
        }

        // ====================================================================
        //  WaitForRecycleBinOperation -- poll asyncoperation until no pending
        //  "Process Table For RecycleBin" (operationtype=104) jobs exist.
        // ====================================================================
        private static void WaitForRecycleBinOperation(ServiceClient svc, Entity orgRow)
        {
            var startedAt = DateTime.UtcNow;
            int attempt = 0;
            while (true)
            {
                var pending = FindPendingRecycleBinOperations(svc, orgRow);
                if (pending.Count == 0)
                {
                    SysConsole.WriteLine("[Wait]    No pending RecycleBinOperation. Safe to proceed.");
                    return;
                }

                if (DateTime.UtcNow - startedAt > PollMaxWait)
                {
                    throw new TimeoutException(
                        "RecycleBinOperation still running after " + PollMaxWait.TotalMinutes + " min. " +
                        "Pending jobs: " + string.Join(", ", pending.Select(e =>
                            (e.GetAttributeValue<string>("name") ?? "?") + " (#" + e.Id + ")"
                        )) +
                        ". Check Solution History in Power Platform admin center.");
                }

                attempt++;
                SysConsole.WriteLine("[Wait]    Pending RecycleBinOperation: " + pending.Count +
                    " (attempt " + attempt + "). Sleeping " + PollInterval.TotalSeconds + "s ...");
                System.Threading.Thread.Sleep(PollInterval);
            }
        }

        // ====================================================================
        //  FindPendingRecycleBinOperations -- query asyncoperation
        //      operationtype = 104 (Process Table For RecycleBin)
        //      statecode != 3 (Completed)  -- includes Suspended / Locked
        //  If orgRow is provided, also filter by regardingobjectid = orgRow.Id.
        //  When orgRow is null (already turned off), we look at ALL recyclebin
        //  operations still in flight -- covers provisioning rows that came
        //  back automatically after a previous turn_off.
        // ====================================================================
        private static System.Collections.Generic.List<Entity> FindPendingRecycleBinOperations(ServiceClient svc, Entity orgRow)
        {
            var qe = new QueryExpression("asyncoperation")
            {
                ColumnSet = new ColumnSet("asyncoperationid", "name", "statecode", "statuscode", "messagename", "startedon", "completedon"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("operationtype", ConditionOperator.Equal, RecycleBinOperationType),
                        new ConditionExpression("statecode", ConditionOperator.NotEqual, 3) // not Completed
                    }
                },
                Orders =
                {
                    new OrderExpression("createdon", OrderType.Descending)
                }
            };
            var result = svc.RetrieveMultiple(qe);
            return result.Entities.ToList();
        }

        // ====================================================================
        //  Turn OFF -- DELETE the org row (per Microsoft Learn).
        //  This action deletes all the RecycleBinConfig rows and disables
        //  deleted record keeping for the environment.
        // ====================================================================
        private static string TurnOff(ServiceClient svc)
        {
            var row = GetOrgRecycleBinConfig(svc);
            if (row == null)
                return "[TurnOff] (no-op) Org row already absent. Soft-delete was already OFF.";

            svc.Delete("recyclebinconfig", row.Id);
            return "[TurnOff] SUCCESS: Deleted recyclebinconfig id=" + row.Id +
                ". Per-table rows cascade-deleted by Dataverse in the background." +
                " Dataverse will start a [RecycleBinOperation] (operationtype=104) to clean up internally.";
        }

        // ====================================================================
        //  Turn ON -- POST Web API /api/data/v9.0/recyclebinconfigs with
        //  payload captured from Power Platform admin center ("Keep deleted
        //  Dataverse records" toggle):
        //
        //    {
        //      "extensionofrecordid@odata.bind": "entities(<entityid for 'organization'>)",
        //      "cleanupintervalindays": <1..30>
        //    }
        //
        //  We look up the entityid for logical name 'organization' from the
        //  `entity` table (it is the same in every Dataverse env:
        //  e1bd1119-6e9d-45a4-bc15-12051e65a0bd). If a row already exists
        //  with isreadyforrecyclebin=true we no-op. Otherwise we DELETE the
        //  old row (if any) and POST a new one -- Dataverse then schedules
        //  an async op "Enable keeping deleted data for Organization"
        //  (operationtype=104) to provision per-table rows (~30 min).
        //
        //  We use ServiceClient.ExecuteAsync(HttpRequestMessage) which
        //  issues a real Web API call (OData v9) against the connected org.
        //  The OData @odata.bind annotation resolves the polymorphic lookup
        //  to entity table. No need to set isreadyforrecyclebin -- Dataverse
        //  sets it implicitly when the row is created via this endpoint.
        // ====================================================================
        private static string TurnOn(ServiceClient svc)
        {
            var row = GetOrgRecycleBinConfig(svc);

            if (row != null && row.GetAttributeValue<bool?>("isreadyforrecyclebin") == true)
                return "[TurnOn]  (no-op) Org row already has isreadyforrecyclebin=true. Soft-delete was already ON.";

            // If an old row exists (isreadyforrecyclebin=false), DELETE it first
            // so the new POST creates a fresh row that triggers the async op.
            if (row != null)
            {
                SysConsole.WriteLine("[TurnOn]  Step 1/3: DELETE existing org row id=" + row.Id);
                svc.Delete("recyclebinconfig", row.Id);
                SysConsole.WriteLine("[TurnOn]  Step 1/3: DELETE OK.");
            }
            else
            {
                SysConsole.WriteLine("[TurnOn]  Step 1/3: no existing org row to DELETE.");
            }

            // Look up entityid for logical name 'organization' from `entity` table
            SysConsole.WriteLine("[TurnOn]  Step 2/3: lookup entityid for 'organization' ...");
            var entityId = GetEntityIdByLogicalName(svc, "organization");
            SysConsole.WriteLine("[TurnOn]  Step 2/3: entityid=" + entityId);

            // Build payload (matches Power Platform admin center exactly)
            int cleanupDays = StatusHardCapRetentionDays; // 30
            var payload = "{" +
                "\"extensionofrecordid@odata.bind\":\"/entities(" + entityId + ")\"," +
                "\"extensionofrecordid@OData.Community.Display.V1.FormattedValue\":\"OrganizationId\"," +
                "\"cleanupintervalindays\":" + cleanupDays +
                "}";

            // POST via Web API (ServiceClient.ExecuteWebRequest -- same helper
            // the MCP tools use for raw Web API calls, e.g. ExecuteWebApiTool.cs).
            // Signature: (HttpMethod method, string url, string body,
            // IDictionary<string,string> customHeaders, string contentType)
            SysConsole.WriteLine("[TurnOn]  Step 3/3: POST /api/data/v9.0/recyclebinconfigs");
            var headers = new System.Collections.Generic.Dictionary<string, System.Collections.Generic.List<string>>
            {
                { "Accept", new System.Collections.Generic.List<string> { "application/json" } },
                { "OData-MaxVersion", new System.Collections.Generic.List<string> { "4.0" } },
                { "OData-Version", new System.Collections.Generic.List<string> { "4.0" } },
                { "Prefer", new System.Collections.Generic.List<string> { "return=representation" } }
            };
            using var resp = svc.ExecuteWebRequest(
                System.Net.Http.HttpMethod.Post,
                "recyclebinconfigs",
                payload,
                headers,
                "application/json");
            var body = resp.Content != null ? resp.Content.ReadAsStringAsync().GetAwaiter().GetResult() : "";
            int code = (int)resp.StatusCode;

            if (code < 200 || code >= 300)
                throw new InvalidOperationException("POST /recyclebinconfigs returned HTTP " + code + ": " + body);

            // Extract new recyclebinconfig id from OData-EntityId header
            string newId = "?";
            if (resp.Headers != null && resp.Headers.TryGetValues("OData-EntityId", out var vals))
            {
                var entId = string.Join("", vals);
                int idx = entId.LastIndexOf('(');
                if (idx > 0 && entId.EndsWith(")"))
                    newId = entId.Substring(idx + 1, entId.Length - idx - 2);
            }
            if (newId == "?")
            {
                // Some envs don't return OData-EntityId -- parse from body (OData entity reference)
                int iStart = body.IndexOf("recyclebinconfigs(", StringComparison.OrdinalIgnoreCase);
                if (iStart >= 0)
                {
                    int iEnd = body.IndexOf(')', iStart);
                    if (iEnd > iStart)
                        newId = body.Substring(iStart + "recyclebinconfigs(".Length, iEnd - iStart - "recyclebinconfigs(".Length);
                }
            }
            if (newId == "?") newId = "(see response body)";

            return "[TurnOn]  SUCCESS: Created recyclebinconfig id=" + newId +
                " via Web API POST (extensionofrecordid -> entities(" + entityId + "), cleanupintervalindays=" + cleanupDays + ")." +
                " Dataverse starts [RecycleBinOperation] (operationtype=104) to provision per-table rows (~30 min).";
        }

        // ====================================================================
        //  GetEntityIdByLogicalName -- query `entity` table for entityid.
        //  Used to resolve the lookup target for recyclebinconfig.extensionofrecordid.
        // ====================================================================
        private static Guid GetEntityIdByLogicalName(ServiceClient svc, string logicalName)
        {
            var qe = new QueryExpression("entity")
            {
                ColumnSet = new ColumnSet("entityid"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("logicalname", ConditionOperator.Equal, logicalName)
                    }
                }
            };
            var result = svc.RetrieveMultiple(qe);
            if (result.Entities.Count == 0)
                throw new InvalidOperationException("entity row not found for logicalname='" + logicalName + "'");
            return result.Entities[0].Id;
        }
    }
}
