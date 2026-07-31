using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using SysConsole = System.Console;

namespace Dev.AllInOne.Console
{
    // ============================================================================
    //  manage_deleted_records — Probes + End-to-end proof
    //  Generated for plan: DynamicsCrm.DevKit.Docs/manage_deleted_records.plan.md
    //
    //  Microsoft confirmed API (from learn.microsoft.com — 2026-04-21):
    //    - List deleted records: FetchExpression with `datasource='bin'`
    //      OR QueryExpression with DataSource = "bin".
    //    - Restore: OrganizationRequest("Restore") late-bound, Target = Entity with Id.
    //    - Status: query entity `recyclebinconfig` (logical = "recyclebinconfig")
    //      with filter statecode=0 AND isreadyforrecyclebin=true, link to entity.
    //
    //  Sequence (all probes best-effort, isolated try/catch per probe):
    //    Probe A — RecycleBinConfig (which entities enabled + cleanupintervalindays)
    //    Probe B — FetchXml with datasource='bin' for soft-deleted account records
    //    Probe C — Web API GET for soft-deleted GUID (404 body shape)
    //    Probe D — Web API GET for fake GUID (control: 404 body shape — match or differ?)
    //    Probe E — Entity metadata (displayName + optionSet cache pattern)
    //    Probe F — End-to-end happy-path: create → delete → list (bin) → detail → restore
    // ============================================================================
    public class Program
    {
        static int Main()
        {
            SysConsole.OutputEncoding = Encoding.UTF8;
            SysConsole.WriteLine("===============================================================");
            SysConsole.WriteLine(" manage_deleted_records — probes + end-to-end");
            SysConsole.WriteLine(" Started: " + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));
            SysConsole.WriteLine("===============================================================");
            SysConsole.WriteLine();

            SysConsole.WriteLine("Connecting via App.Service ...");
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
            if (!svc.IsReady)
            {
                SysConsole.WriteLine("[FATAL] App.Service not ready: " + svc.LastError);
                return 2;
            }
            SysConsole.WriteLine("Connected OK to " + svc.ConnectedOrgUriActual);
            SysConsole.WriteLine("  Version: " + svc.ConnectedOrgVersion);
            SysConsole.WriteLine("  Org: " + svc.ConnectedOrgFriendlyName + " (" + svc.ConnectedOrgUniqueName + ")");
            SysConsole.WriteLine();

            // ── AltProbe — try multiple FetchXml forms first (no main sequence yet) ─
            try
            {
                AltProbe.Run(svc);
            }
            catch (Exception ex)
            {
                SysConsole.WriteLine("[AltProbe FATAL] " + ex.GetType().Name + ": " + ex.Message);
            }

            SysConsole.WriteLine();
            SysConsole.WriteLine("=== End of AltProbe; main sequence below ===");
            SysConsole.WriteLine();

            var summary = new List<(string Probe, string Status, string Note)>();

            // ── Probe A — RecycleBinConfig (status) ───────────────────────────
            SafeRun("A — RecycleBinConfig (status)", () => ProbeRecycleBinConfig(svc), summary);

            // ── Probe B — existing soft-deleted account (if any) ───────────────
            SafeRun("B — FetchXml datasource='bin' (list existing)", () => ProbeListBin(svc, null), summary);

            // ── Probe F-step1+2 — synthesize a real soft-deleted account ───────
            Guid? testDeletedId = null;
            SafeRun("F-step1 — Create test account", () => testDeletedId = CreateTestAccount(svc), summary);

            if (testDeletedId.HasValue)
            {
                SafeRun("F-step2 — Delete the test account", () => DeleteTestAccount(svc, testDeletedId.Value), summary);

                // ── Probe C — Web API GET for soft-deleted GUID (real) ──────────
                SafeRun("C — Web API GET for soft-deleted GUID", () => ProbeWebApiForGuid(svc, testDeletedId.Value, label: "soft-deleted"), summary);

                // ── Probe D — Web API GET for fake GUID (control) ───────────────
                var fakeId = new Guid("00000000-0000-0000-0000-000000000001");
                SafeRun("D — Web API GET for fake (never-existed) GUID", () => ProbeWebApiForGuid(svc, fakeId, label: "fake"), summary);

                // ── Probe B-step2 — list again to see our record ────────────────
                SafeRun("B-step2 — FetchXml datasource='bin' (after delete)", () => ProbeListBin(svc, testDeletedId.Value), summary);

                // ── Probe E — Entity metadata ───────────────────────────────────
                SafeRun("E — Entity metadata (displayName + optionSet cache)", () => ProbeEntityMetadata(svc, "account"), summary);

                // ── Probe F-step3 — detail of soft-deleted record ──────────────
                SafeRun("F-step3 — Detail of soft-deleted (via FetchXml)", () => ProbeDetailBin(svc, testDeletedId.Value), summary);

                // ── Probe F-step4 — restore via OrganizationRequest("Restore") ──
                SafeRun("F-step4 — Restore (OrganizationRequest late-bound)", () => ProbeRestore(svc, testDeletedId.Value), summary);

                // ── Probe F-step5 — verify restored record exists ───────────────
                SafeRun("F-step5 — Verify restored record exists", () => ProbeVerifyRestored(svc, testDeletedId.Value), summary);
            }

            SysConsole.WriteLine();
            SysConsole.WriteLine("===============================================================");
            SysConsole.WriteLine(" manage_recycle_bin — probes (per-table soft-delete config)");
            SysConsole.WriteLine("===============================================================");

            // ── Probe G — Org row + count enabled tables ────────────────────
            SafeRun("G — Org row + count enabled tables", () => ProbeRecycleBinOrgStatus(svc), summary);

            // ── Probe H — list_tables (default 10, page 1) ──────────────────
            SafeRun("H — list_tables (default 10/page, page 1)", () => ProbeListTables(svc, entityFilter: "", includeSystem: false, page: 1, pageSize: 10), summary);

            // ── Probe H-step2 — list_tables page 2 ───────────────────────────
            SafeRun("H-step2 — list_tables page 2", () => ProbeListTables(svc, entityFilter: "", includeSystem: false, page: 2, pageSize: 10), summary);

            // ── Probe I — list_tables with filter 'account' ──────────────────
            SafeRun("I — list_tables (filter='account')", () => ProbeListTables(svc, entityFilter: "account", includeSystem: false, page: 1, pageSize: 10), summary);

            // ── Probe J — ParseIntent: 'tất cả trừ Account, Contact' ───────
            SafeRun("J — ParseIntent (trừ Account, Contact)", () => ProbeParseIntent("soft delete cho tất cả trừ Account, Contact"), summary);

            // ── Probe J-step2 — ParseIntent: 'chỉ Lead' ─────────────────────
            SafeRun("J-step2 — ParseIntent (chỉ Lead)", () => ProbeParseIntent("chỉ Lead"), summary);

            // ── Probe J-step3 — ParseIntent: 'tắt Account' ───────────────────
            SafeRun("J-step3 — ParseIntent (tắt Account)", () => ProbeParseIntent("tắt Account"), summary);

            // ── Probe K — set dry-run, no actual change ─────────────────────
            SafeRun("K — set dry-run (enable Account, cleanup=7)", () => ProbeSetDryRun(svc, "account", "enable", cleanupIntervalDays: 7), summary);

            // ── Probe L — set real apply, enable a custom entity (low-risk) ─
            SafeRun("L — set real apply (enable small custom entity)", () => ProbeSetRealApply(svc), summary);

            // ── Summary ────────────────────────────────────────────────────────
            SysConsole.WriteLine();
            SysConsole.WriteLine("===============================================================");
            SysConsole.WriteLine(" SUMMARY");
            SysConsole.WriteLine("===============================================================");
            foreach (var (probe, status, note) in summary)
            {
                SysConsole.WriteLine(string.Format("  [{0,-7}] {1}  {2}",
                    status,
                    probe,
                    string.IsNullOrEmpty(note) ? "" : "— " + note));
            }
            var failed = summary.Count(s => s.Status == "FAIL");
            var passed = summary.Count(s => s.Status == "PASS");
            SysConsole.WriteLine();
            SysConsole.WriteLine("Total: " + summary.Count + " | PASS: " + passed + " | FAIL: " + failed);
            return failed == 0 ? 0 : 1;
        }

        // ====================================================================
        //  Helpers
        // ====================================================================

        private static void SafeRun(string name, Action body, List<(string, string, string)> summary)
        {
            SysConsole.WriteLine();
            SysConsole.WriteLine("===============================================================");
            SysConsole.WriteLine(" " + name);
            SysConsole.WriteLine("===============================================================");
            try
            {
                body();
                summary.Add((name, "PASS", ""));
            }
            catch (Exception ex)
            {
                SysConsole.WriteLine("[PROBE-FAIL] " + ex.GetType().Name + ": " + ex.Message);
                if (ex.InnerException != null)
                    SysConsole.WriteLine("  inner: " + ex.InnerException.GetType().Name + ": " + ex.InnerException.Message);
                summary.Add((name, "FAIL", ex.GetType().Name + ": " + Truncate(ex.Message, 80)));
            }
        }

        private static string Truncate(string s, int max) =>
            string.IsNullOrEmpty(s) ? "" : (s.Length <= max ? s : s.Substring(0, max) + "…");

        private static string ShortVal(object v)
        {
            if (v == null) return "null";
            return v switch
            {
                EntityReference er => "[ER " + er.LogicalName + "/" + er.Id + (string.IsNullOrEmpty(er.Name) ? "" : " name='" + er.Name + "'") + "]",
                OptionSetValue osv => "[OSV " + osv.Value + "]",
                Money m => "[$" + m.Value + "]",
                _ => v.ToString()
            };
        }

        // ====================================================================
        //  Probe A — RecycleBinConfig (status check)
        // ====================================================================
        private static void ProbeRecycleBinConfig(ServiceClient svc)
        {
            // First, the org-level config (Name = "organization")
            var orgRow = RetrieveRecycleBinConfigForName(svc, "organization");
            if (orgRow != null)
            {
                SysConsole.WriteLine("Org-level config (name='organization'):");
                SysConsole.WriteLine("  cleanupintervalindays = " + (orgRow.GetAttributeValue<int?>("cleanupintervalindays")?.ToString() ?? "(null)"));
                SysConsole.WriteLine("  isreadyforrecyclebin  = " + (orgRow.GetAttributeValue<bool?>("isreadyforrecyclebin")?.ToString() ?? "(null)"));
                SysConsole.WriteLine("  statecode             = " + (orgRow.GetAttributeValue<OptionSetValue>("statecode")?.Value.ToString() ?? "(null)"));
            }
            else
            {
                SysConsole.WriteLine("Org-level RecycleBinConfig row NOT FOUND (deleted record keeping may be disabled).");
            }

            // Now, all entities with RecycleBin enabled
            SysConsole.WriteLine();
            SysConsole.WriteLine("Tables with deleted record keeping enabled (statecode=0 + isreadyforrecyclebin=true):");
            var enabled = QueryEnabledEntities(svc);
            SysConsole.WriteLine("  count = " + enabled.Count);
            foreach (var e in enabled.Take(20))
                SysConsole.WriteLine("    " + e);
            if (enabled.Count > 20)
                SysConsole.WriteLine("    ... and " + (enabled.Count - 20) + " more");
        }

        private static Entity RetrieveRecycleBinConfigForName(ServiceClient svc, string name)
        {
            var qe = new QueryExpression("recyclebinconfig")
            {
                ColumnSet = new ColumnSet("recyclebinconfigid", "name", "cleanupintervalindays", "isreadyforrecyclebin", "statecode", "statuscode"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions = { new ConditionExpression("name", ConditionOperator.Equal, name) }
                },
                TopCount = 1
            };
            var ec = svc.RetrieveMultiple(qe);
            return ec.Entities.FirstOrDefault();
        }

        private static List<string> QueryEnabledEntities(ServiceClient svc)
        {
            // FetchXml with link-entity from recyclebinconfig → entity
            var fetch = @"<fetch>
  <entity name='recyclebinconfig'>
    <attribute name='name' />
    <attribute name='cleanupintervalindays' />
    <filter type='and'>
      <condition attribute='statecode' operator='eq' value='0' />
      <condition attribute='isreadyforrecyclebin' operator='eq' value='1' />
    </filter>
    <link-entity name='entity' from='entityid' to='extensionofrecordid' link-type='inner' alias='ent'>
      <attribute name='logicalname' />
    </link-entity>
  </entity>
</fetch>";
            var result = new List<string>();
            var ec = svc.RetrieveMultiple(new FetchExpression(fetch));
            foreach (var e in ec.Entities)
            {
                var name = e.GetAttributeValue<string>("name") ?? "";
                var aliasLogical = e.GetAttributeValue<AliasedValue>("ent.logicalname")?.Value as string ?? "";
                var days = e.GetAttributeValue<int?>("cleanupintervalindays");
                result.Add($"{name,-30}  logical={aliasLogical,-25}  days={days?.ToString() ?? "default"}");
            }
            return result;
        }

        // ====================================================================
        //  Probe B — List via FetchXml datasource='bin'
        // ====================================================================
        //  VERIFIED 2026-07-31: FetchXml with datasource='bin' works.
        //  VERIFIED 2026-07-31: 'recyclebin' is INVALID — only 'bin' or 'retained'.
        //  VERIFIED 2026-07-31: bin records do NOT contain 'deletedon'/'deletedby'
        //  attributes — only attributes that belong to the original entity.
        //  System fields like deletedon/deletedby are NOT exposed via FetchXml on the bin.
        // ====================================================================
        private static void ProbeListBin(ServiceClient svc, Guid? expectId)
        {
            var fetch = @"<fetch top='50' datasource='bin'>
  <entity name='account'>
    <attribute name='accountid' />
    <attribute name='name' />
    <attribute name='telephone1' />
    <attribute name='websiteurl' />
    <attribute name='creditlimit' />
    <attribute name='createdon' />
    <attribute name='modifiedon' />
  </entity>
</fetch>";
            var ec = svc.RetrieveMultiple(new FetchExpression(fetch));
            SysConsole.WriteLine("Bin records (page 1, top=50) = " + ec.Entities.Count);
            SysConsole.WriteLine("EntityName = " + ec.EntityName);
            foreach (var e in ec.Entities.Take(15))
            {
                var id = e.Id;
                var name = e.GetAttributeValue<string>("name") ?? "";
                var createdOn = e.GetAttributeValue<DateTime?>("createdon")?.ToString("yyyy-MM-dd HH:mm:ss") ?? "(null)";
                var marker = (expectId.HasValue && expectId.Value == id) ? "  <-- EXPECTED" : "";
                SysConsole.WriteLine($"  {id}  name='{name}'  createdOn={createdOn}{marker}");
            }
            if (ec.Entities.Count > 15)
                SysConsole.WriteLine("  ... and " + (ec.Entities.Count - 15) + " more");
        }

        // ====================================================================
        //  Probe C/D — Web API GET for a GUID (soft-deleted vs fake)
        // ====================================================================
        private static void ProbeWebApiForGuid(ServiceClient svc, Guid id, string label)
        {
            SysConsole.WriteLine("Type: " + label);
            SysConsole.WriteLine("GUID: " + id);

            // Try SDK Retrieve
            try
            {
                var e = svc.Retrieve("account", id, new ColumnSet("accountid", "name"));
                SysConsole.WriteLine("  SDK Retrieve: OK (record exists)");
                SysConsole.WriteLine("    name = " + (e.GetAttributeValue<string>("name") ?? ""));
            }
            catch (Exception ex)
            {
                SysConsole.WriteLine("  SDK Retrieve: " + ex.GetType().Name);
                SysConsole.WriteLine("    message (truncated) = " + Truncate(ex.Message, 250));
                if (ex is System.ServiceModel.FaultException<OrganizationServiceFault> fex && fex.Detail != null)
                {
                    SysConsole.WriteLine("    ErrorCode = 0x" + fex.Detail.ErrorCode.ToString("X8"));
                    SysConsole.WriteLine("    ErrorMessage = " + Truncate(fex.Detail.Message, 200));
                }
            }

            // Try Web API GET
            try
            {
                var url = "accounts(" + id + ")";
                var resp = svc.ExecuteWebRequest(System.Net.Http.HttpMethod.Get, url, "", null, "application/json");
                var body = resp.Content.ReadAsStringAsync().GetAwaiter().GetResult();
                SysConsole.WriteLine("  Web API GET: " + (int)resp.StatusCode + " " + resp.ReasonPhrase);
                SysConsole.WriteLine("    body (truncated 400) = " + Truncate(body, 400));
            }
            catch (Exception ex)
            {
                SysConsole.WriteLine("  Web API GET: " + ex.GetType().Name);
                SysConsole.WriteLine("    message = " + Truncate(ex.Message, 400));
            }
        }

        // ====================================================================
        //  Probe E — Entity metadata cache pattern
        // ====================================================================
        private static void ProbeEntityMetadata(ServiceClient svc, string entityName)
        {
            var req = new RetrieveEntityRequest { LogicalName = entityName, EntityFilters = EntityFilters.Attributes };
            var resp = (RetrieveEntityResponse)svc.Execute(req);
            int picklists = 0, lookups = 0, moneys = 0, datetimes = 0;
            foreach (var a in resp.EntityMetadata.Attributes)
            {
                if (a is PicklistAttributeMetadata) picklists++;
                if (a is LookupAttributeMetadata) lookups++;
                if (a is MoneyAttributeMetadata) moneys++;
                if (a is DateTimeAttributeMetadata) datetimes++;
            }
            SysConsole.WriteLine("entity = " + entityName);
            SysConsole.WriteLine("  total attrs = " + resp.EntityMetadata.Attributes.Length);
            SysConsole.WriteLine("  picklists   = " + picklists);
            SysConsole.WriteLine("  lookups     = " + lookups);
            SysConsole.WriteLine("  moneys      = " + moneys);
            SysConsole.WriteLine("  datetimes   = " + datetimes);
        }

        // ====================================================================
        //  Probe F (end-to-end) — create → delete → list → detail → restore
        // ====================================================================
        private const string TestAccountPrefix = "DEVKIT-MDR-PROBE-";

        private static Guid CreateTestAccount(ServiceClient svc)
        {
            var qe = new QueryExpression("account")
            {
                ColumnSet = new ColumnSet("accountid"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions = { new ConditionExpression("name", ConditionOperator.BeginsWith, TestAccountPrefix) }
                },
                TopCount = 5
            };
            var existing = svc.RetrieveMultiple(qe);
            if (existing.Entities.Count > 0)
            {
                var first = existing.Entities[0];
                SysConsole.WriteLine("Reusing existing probe account: " + first.Id);
                return first.Id;
            }

            var account = new Entity("account")
            {
                Attributes =
                {
                    ["name"] = TestAccountPrefix + DateTime.UtcNow.ToString("HHmmss"),
                    ["telephone1"] = "0900000000",
                    ["websiteurl"] = "https://probe.example.com",
                    ["creditlimit"] = new Money(12345m)
                }
            };
            var id = svc.Create(account);
            SysConsole.WriteLine("Created probe account: " + id);
            return id;
        }

        private static void DeleteTestAccount(ServiceClient svc, Guid id)
        {
            svc.Delete("account", id);
            SysConsole.WriteLine("Deleted (soft-delete via IOrganizationService.Delete): " + id);
        }

        private static void ProbeDetailBin(ServiceClient svc, Guid id)
        {
            // FetchXml on the bin — uses ColumnSet(true) (all attributes) instead of explicit list,
            // since the bin table does NOT expose system fields like 'deletedon'/'deletedby'.
            var fetch = $@"<fetch top='1' datasource='bin'>
  <entity name='account'>
    <all-attributes />
    <filter type='and'>
      <condition attribute='accountid' operator='eq' value='{id}' />
    </filter>
  </entity>
</fetch>";
            var ec = svc.RetrieveMultiple(new FetchExpression(fetch));
            if (ec.Entities.Count == 0)
            {
                SysConsole.WriteLine("Record NOT found in bin (cannot show detail).");
                return;
            }
            var e = ec.Entities[0];
            SysConsole.WriteLine("LogicalName = " + e.LogicalName);
            SysConsole.WriteLine("Id = " + e.Id);
            SysConsole.WriteLine("Attribute count = " + e.Attributes.Count);
            foreach (var kv in e.Attributes.OrderBy(k => k.Key))
            {
                var fmt = e.FormattedValues.ContainsKey(kv.Key) ? "  [FMT=" + e.FormattedValues[kv.Key] + "]" : "";
                SysConsole.WriteLine("  " + kv.Key + " = " + ShortVal(kv.Value) + fmt);
            }
        }

        private static void ProbeRestore(ServiceClient svc, Guid id)
        {
            // Microsoft pattern (2026-04 docs): late-bound OrganizationRequest("Restore"),
            // Target = Entity with Id (and optional attribute overrides).
            var target = new Entity("account", id);
            var request = new OrganizationRequest("Restore")
            {
                Parameters = { { "Target", target } }
            };
            try
            {
                var response = svc.Execute(request);
                SysConsole.WriteLine("Restore executed. Status = " + response.ResponseName);
                SysConsole.WriteLine("Results:");
                foreach (var kv in response.Results)
                    SysConsole.WriteLine("  " + kv.Key + " = " + ShortVal(kv.Value));
            }
            catch (Exception ex)
            {
                SysConsole.WriteLine("Restore threw: " + ex.GetType().Name);
                SysConsole.WriteLine("  message = " + Truncate(ex.Message, 400));
                if (ex is System.ServiceModel.FaultException<OrganizationServiceFault> fex && fex.Detail != null)
                {
                    SysConsole.WriteLine("  ErrorCode = 0x" + fex.Detail.ErrorCode.ToString("X8"));
                }
                throw;
            }
        }

        private static void ProbeVerifyRestored(ServiceClient svc, Guid id)
        {
            try
            {
                var e = svc.Retrieve("account", id, new ColumnSet("accountid", "name", "statecode", "statuscode"));
                SysConsole.WriteLine("OK — restored record is retrievable:");
                SysConsole.WriteLine("  name      = " + e.GetAttributeValue<string>("name"));
                SysConsole.WriteLine("  statecode = " + e.GetAttributeValue<OptionSetValue>("statecode")?.Value);
                SysConsole.WriteLine("  statuscode= " + e.GetAttributeValue<OptionSetValue>("statuscode")?.Value);
            }
            catch (Exception ex)
            {
                SysConsole.WriteLine("FAIL — restored record NOT retrievable: " + ex.Message);
            }
        }

        // ====================================================================
        //  manage_recycle_bin — Probes G through L
        //  Mirrors the public API of the MCP tool: list_tables / preview / set.
        //  Each probe is best-effort and isolated; failures are reported in summary.
        // ====================================================================

        // ── Probe G — Org-level recyclebinconfig row + enabled-table count ─
        private static void ProbeRecycleBinOrgStatus(ServiceClient svc)
        {
            var qe = new QueryExpression("recyclebinconfig")
            {
                ColumnSet = new ColumnSet("recyclebinconfigid", "name", "cleanupintervalindays", "isreadyforrecyclebin", "statecode"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions = { new ConditionExpression("name", ConditionOperator.Equal, "organization") }
                },
                TopCount = 1
            };
            var orgRow = svc.RetrieveMultiple(qe).Entities.FirstOrDefault();
            if (orgRow != null)
            {
                SysConsole.WriteLine("Org row (name='organization'):");
                SysConsole.WriteLine("  id                    = " + orgRow.Id);
                SysConsole.WriteLine("  cleanupintervalindays = " + (orgRow.GetAttributeValue<int?>("cleanupintervalindays")?.ToString() ?? "(null)"));
                SysConsole.WriteLine("  isreadyforrecyclebin  = " + (orgRow.GetAttributeValue<bool?>("isreadyforrecyclebin")?.ToString() ?? "(null)"));
                SysConsole.WriteLine("  statecode             = " + (orgRow.GetAttributeValue<OptionSetValue>("statecode")?.Value.ToString() ?? "(null)"));
            }
            else
            {
                SysConsole.WriteLine("Org row NOT FOUND (deleted record keeping may be disabled at env level).");
            }

            SysConsole.WriteLine();
            SysConsole.WriteLine("Counting per-table enabled rows (statecode=0, isreadyforrecyclebin=true, name!='organization')...");
            var fetch = @"<fetch aggregate='true'>
  <entity name='recyclebinconfig'>
    <attribute name='recyclebinconfigid' aggregate='count' alias='count_enabled'/>
    <filter type='and'>
      <condition attribute='statecode' operator='eq' value='0'/>
      <condition attribute='isreadyforrecyclebin' operator='eq' value='1'/>
      <condition attribute='name' operator='ne' value='organization'/>
    </filter>
  </entity>
</fetch>";
            var ec = svc.RetrieveMultiple(new FetchExpression(fetch));
            var row = ec.Entities.FirstOrDefault();
            var aliased = row?["count_enabled"] as AliasedValue;
            var count = (aliased?.Value is int n) ? n : (aliased?.Value is long l ? (int)l : 0);
            SysConsole.WriteLine("  count_enabled = " + count);
        }

        // ── Probe H/I — list_tables with pagination + filter ────────────────
        private static void ProbeListTables(ServiceClient svc, string entityFilter, bool includeSystem, int page, int pageSize)
        {
            var sb = new StringBuilder();
            sb.AppendLine("<fetch distinct='false'>");
            sb.AppendLine("  <entity name='recyclebinconfig'>");
            sb.AppendLine("    <attribute name='recyclebinconfigid' />");
            sb.AppendLine("    <attribute name='name' />");
            sb.AppendLine("    <attribute name='cleanupintervalindays' />");
            sb.AppendLine("    <attribute name='isreadyforrecyclebin' />");
            sb.AppendLine("    <filter type='and'>");
            sb.AppendLine("      <condition attribute='statecode' operator='eq' value='0' />");
            if (!string.IsNullOrWhiteSpace(entityFilter))
            {
                var safe = entityFilter.Trim().Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("\"", "&quot;").Replace("'", "&apos;");
                sb.AppendLine($"      <condition attribute='name' operator='like' value='%{safe}%' />");
            }
            sb.AppendLine("    </filter>");
            sb.AppendLine("    <order attribute='name' descending='false' />");
            sb.AppendLine("  </entity>");
            sb.AppendLine("</fetch>");

            var all = svc.RetrieveMultiple(new FetchExpression(sb.ToString())).Entities.ToList();
            // Build logical→displayName lookup once (the `entity` table doesn't expose displayname in link-entity)
            var displayLookup = BuildDisplayNameLookup(svc);

            SysConsole.WriteLine("Total matching rows in recyclebinconfig (no page cap): " + all.Count);
            if (all.Count > 0)
            {
                var start = (page - 1) * pageSize;
                var paged = all.Skip(start).Take(pageSize).ToList();
                SysConsole.WriteLine($"Returning page {page}, size {pageSize} → {paged.Count} rows:");
                foreach (var e in paged)
                {
                    var name = e.GetAttributeValue<string>("name") ?? "";
                    var ready = e.GetAttributeValue<bool>("isreadyforrecyclebin");
                    var days = e.GetAttributeValue<int?>("cleanupintervalindays");
                    var entRef = e.GetAttributeValue<EntityReference>("extensionofrecordid");
                    var logical = name;
                    if (string.IsNullOrEmpty(logical)) logical = entRef?.LogicalName ?? "(unknown)";
                    var display = displayLookup.TryGetValue(logical, out var dn) ? dn : logical;
                    SysConsole.WriteLine($"  - {name,-30}  logical={logical,-25}  ready={ready}  days={days?.ToString() ?? "inherit"}  display='{display}'");
                }
                var totalPages = Math.Max(1, (int)Math.Ceiling(all.Count / (double)pageSize));
                if (page < totalPages)
                {
                    var remaining = all.Count - (page * pageSize);
                    SysConsole.WriteLine();
                    SysConsole.WriteLine($"... còn {Math.Max(0, remaining)} tables nữa. Nói \"show page {page + 1}\" để xem tiếp.");
                }
            }
        }

        private static Dictionary<string, string> BuildDisplayNameLookup(ServiceClient svc)
        {
            var lookup = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            try
            {
                var req = new RetrieveAllEntitiesRequest { EntityFilters = EntityFilters.Entity, RetrieveAsIfPublished = true };
                var resp = (RetrieveAllEntitiesResponse)svc.Execute(req);
                foreach (var em in resp.EntityMetadata)
                {
                    if (string.IsNullOrEmpty(em?.LogicalName)) continue;
                    var display = em.DisplayName?.UserLocalizedLabel?.Label;
                    lookup[em.LogicalName] = !string.IsNullOrEmpty(display) ? display : em.LogicalName;
                }
            }
            catch (Exception ex)
            {
                SysConsole.WriteLine("  (displayName lookup best-effort failed: " + Truncate(ex.Message, 100) + ")");
            }
            return lookup;
        }

        // ── Probe J — ParseIntent (mirror of MCP tool's rule-based parser) ──
        //  Kept intentionally simple here — confirms the keyword set is enough
        //  for the 3 most common Vietnamese negation patterns.
        private static void ProbeParseIntent(string intent)
        {
            SysConsole.WriteLine("Intent: " + intent);
            var lower = intent.ToLowerInvariant();
            string mode;
            List<string> names = ExtractCsvTail(intent);
            if (lower.Contains("trừ") || lower.Contains("ngoại trừ") || lower.Contains("except") || lower.Contains("excluding"))
                mode = "trừ → enable ALL, skip=" + string.Join(",", names);
            else if (lower.StartsWith("chỉ ") || lower.StartsWith("only ") || lower.Contains(" chỉ ") || lower.Contains(" only "))
                mode = "chỉ → enable=[" + string.Join(",", names) + "], disable REST";
            else if (lower.StartsWith("tắt ") || lower.StartsWith("remove ") || lower.StartsWith("disable "))
                mode = "tắt → disable=[" + string.Join(",", names) + "]";
            else if (lower.StartsWith("bật ") || lower.StartsWith("add ") || lower.StartsWith("enable "))
                mode = "bật → enable=[" + string.Join(",", names) + "]";
            else
                mode = "(unparseable)";
            SysConsole.WriteLine("  parsed mode: " + mode);
        }

        private static List<string> ExtractCsvTail(string intent)
        {
            var idx = intent.IndexOfAny(new[] { ':', '"' });
            var tail = idx >= 0 ? intent.Substring(idx + 1) : intent;
            foreach (var kw in new[] { "trừ ", "ngoại trừ ", "except ", "excluding ", "chỉ ", "only ", "tắt ", "remove ", "disable ", "off ", "bật ", "add ", "enable ", "on " })
            {
                var ki = tail.IndexOf(kw, StringComparison.OrdinalIgnoreCase);
                if (ki >= 0) { tail = tail.Substring(ki + kw.Length); break; }
            }
            return tail.Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(s => s.Trim().TrimEnd('.', ';'))
                .Where(s => !string.IsNullOrEmpty(s))
                .ToList();
        }

        // ── Probe K — set dry-run, no actual change ─────────────────────────
        private static void ProbeSetDryRun(ServiceClient svc, string entityName, string mode, int cleanupIntervalDays)
        {
            SysConsole.WriteLine("Mode: " + mode);
            SysConsole.WriteLine("Entity: " + entityName);
            SysConsole.WriteLine("cleanup_interval_days: " + cleanupIntervalDays);
            SysConsole.WriteLine("dry_run: true  → NO actual change applied.");

            // Read current state to compare
            var req = new RetrieveEntityRequest { LogicalName = entityName, EntityFilters = EntityFilters.Entity };
            var resp = (RetrieveEntityResponse)svc.Execute(req);
            var entityId = resp.EntityMetadata.MetadataId ?? Guid.Empty;
            SysConsole.WriteLine("Entity metadataId: " + entityId);

            var existing = FindConfigByEntityId(svc, entityId);
            SysConsole.WriteLine("Existing recyclebinconfig row for this entity: " + (existing.HasValue ? existing.Value.ToString() : "(none — would CREATE)"));
            SysConsole.WriteLine("[DRY-RUN OK] — no write performed.");
        }

        // ── Probe L — set real apply, toggle a small custom entity ─────────
        //  Strategy: pick a small/cheap custom table (not Account) that already
        //  has a recyclebinconfig row, toggle isreadyforrecyclebin, then restore
        //  to its original value so this probe is non-destructive on the org.
        private static void ProbeSetRealApply(ServiceClient svc)
        {
            // Find a custom entity to test against (skip system entities like account/contact).
            EnabledTableProbe custom = null;
            for (var attempt = 0; attempt < 30; attempt++)
            {
                var candidate = FindFirstEnabledRecycleBinTable(svc);
                if (candidate == null) break;
                if (!IsLikelyCustomTable(candidate.LogicalName))
                {
                    SysConsole.WriteLine("  (skipping system table: " + candidate.LogicalName + ")");
                    continue;
                }
                custom = candidate;
                break;
            }
            if (custom == null)
            {
                SysConsole.WriteLine("No suitable custom table found after 30 attempts — skipping real apply.");
                return;
            }
            SysConsole.WriteLine("Test target: " + custom.LogicalName + " (display: " + custom.DisplayName + ")");
            SysConsole.WriteLine("  current isready = " + custom.IsReady);
            SysConsole.WriteLine("  current days    = " + (custom.IntervalDays?.ToString() ?? "inherit"));

            // Apply: flip isready, then verify, then restore.
            var entityId = custom.EntityMetadataId;
            var existingId = FindConfigByEntityId(svc, entityId);

            var update = new Entity("recyclebinconfig", existingId ?? Guid.NewGuid())
            {
                ["extensionofrecordid"] = new EntityReference("entity", entityId),
                ["name"] = custom.LogicalName,
                ["isreadyforrecyclebin"] = !custom.IsReady
            };
            if (existingId.HasValue)
            {
                svc.Update(update);
                SysConsole.WriteLine("UPDATEd recyclebinconfig row " + existingId.Value + " → isready=" + (!custom.IsReady));
            }
            else
            {
                var newId = svc.Create(update);
                SysConsole.WriteLine("CREATEd new recyclebinconfig row " + newId + " → isready=" + (!custom.IsReady));
            }

            // Verify by re-reading
            var verify = FindConfigByEntityId(svc, entityId);
            if (verify.HasValue)
            {
                var row = svc.Retrieve("recyclebinconfig", verify.Value, new ColumnSet("isreadyforrecyclebin"));
                SysConsole.WriteLine("Verify: isready = " + row.GetAttributeValue<bool>("isreadyforrecyclebin"));
            }
            else
            {
                SysConsole.WriteLine("Verify: row not found after write!");
            }

            // Restore original state
            var restore = new Entity("recyclebinconfig", verify ?? existingId ?? Guid.NewGuid())
            {
                ["extensionofrecordid"] = new EntityReference("entity", entityId),
                ["name"] = custom.LogicalName,
                ["isreadyforrecyclebin"] = custom.IsReady
            };
            if (existingId.HasValue)
            {
                svc.Update(restore);
                SysConsole.WriteLine("RESTOREd to original state: isready=" + custom.IsReady);
            }
            else
            {
                svc.Delete("recyclebinconfig", verify.Value);
                SysConsole.WriteLine("DELETEd the row we just created (to keep org clean).");
            }
        }

        private sealed class EnabledTableProbe
        {
            public string LogicalName;
            public string DisplayName;
            public bool IsReady;
            public int? IntervalDays;
            public Guid EntityMetadataId;
        }

        private static EnabledTableProbe FindFirstEnabledRecycleBinTable(ServiceClient svc)
        {
            var fetch = @"<fetch>
  <entity name='recyclebinconfig'>
    <attribute name='recyclebinconfigid' />
    <attribute name='isreadyforrecyclebin' />
    <attribute name='cleanupintervalindays' />
    <attribute name='extensionofrecordid' />
    <filter type='and'>
      <condition attribute='statecode' operator='eq' value='0' />
      <condition attribute='name' operator='ne' value='organization' />
    </filter>
  </entity>
</fetch>";
            var ec = svc.RetrieveMultiple(new FetchExpression(fetch));
            // Take rows in order; caller will retry via attempt counter to find a custom one.
            foreach (var row in ec.Entities)
            {
                var entRef = row.GetAttributeValue<EntityReference>("extensionofrecordid");
                if (entRef == null) continue;
                // Resolve entity logical name from entityId via RetrieveEntityRequest by MetadataId
                var logical = ResolveLogicalNameByMetadataId(svc, entRef.Id);
                if (string.IsNullOrEmpty(logical)) continue;
                var displayLookup = BuildDisplayNameLookup(svc);
                var display = displayLookup.TryGetValue(logical, out var dn) ? dn : logical;
                return new EnabledTableProbe
                {
                    LogicalName = logical,
                    DisplayName = display,
                    IsReady = row.GetAttributeValue<bool>("isreadyforrecyclebin"),
                    IntervalDays = row.GetAttributeValue<int?>("cleanupintervalindays"),
                    EntityMetadataId = entRef.Id
                };
            }
            return null;
        }

        private static string ResolveLogicalNameByMetadataId(ServiceClient svc, Guid metadataId)
        {
            try
            {
                var req = new RetrieveEntityRequest
                {
                    MetadataId = metadataId,
                    EntityFilters = EntityFilters.Entity
                };
                var resp = (RetrieveEntityResponse)svc.Execute(req);
                return resp.EntityMetadata?.LogicalName;
            }
            catch
            {
                return null;
            }
        }

        private static Guid? FindConfigByEntityId(ServiceClient svc, Guid entityMetadataId)
        {
            var qe = new QueryExpression("recyclebinconfig")
            {
                ColumnSet = new ColumnSet("recyclebinconfigid"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions = { new ConditionExpression("extensionofrecordid", ConditionOperator.Equal, entityMetadataId) }
                },
                TopCount = 1
            };
            return svc.RetrieveMultiple(qe).Entities.FirstOrDefault()?.Id;
        }

        private static readonly HashSet<string> CommonCustomPrefixes = new(StringComparer.OrdinalIgnoreCase)
        {
            "new_", "v4_", "v5_", "devkit_", "cr_", "crc_", "mbs_", "adx_", "mspp_", "msdyn_", "rh_", "contoso_"
        };

        private static bool IsLikelyCustomTable(string logicalName)
        {
            if (string.IsNullOrEmpty(logicalName)) return false;
            // Hard skip: tables where Microsoft refuses soft-delete
            var blocked = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
            {
                "entity", "entityrelationship", "entityrelationshiprole", "attributemap",
                "organization", "systemuser", "businessunit", "team", "queue",
                "solution", "solutioncomponent", "publisher", "importjob", "importmap",
                "sdkmessage", "sdkmessageprocessingstep", "sdkmessageprocessingstepimage",
                "pluginassembly", "plugintype", "plugin", "plugintracelog", "eventhandler",
                "workflow", "process", "processstage", "processlog",
                "ribboncustomization", "ribbonrule", "ribbontabtocommandmap", "ribboncontextgroup", "ribbondiff", "ribboncommand",
                "sitemap", "appmodule", "appmodulecomponent", "form", "systemform", "savedquery", "userquery", "view", "chart",
                "report", "reportcategory", "reportvisibility", "reportlink",
                "template", "documenttemplate", "emailtemplate", "contracttemplate", "kbarticletemplate",
                "connectionrole", "connection", "connectionroleobjecttypecode",
                "goal", "goalrollupquery", "metric", "rollupfield",
                "transformationparametermapping", "transformationmapping",
                "post", "postcomment", "postlike", "postfollow", "postregarding", "postrole",
                "activitypointer", "activityparty", "activitymimeattachment",
                "owner", "ownermapping", "principal", "principalobjectaccess", "role", "roleprivilege", "privilege",
                "asyncoperation", "bulkdeleteoperation", "bulkdelete", "bulkdeletefailure",
                "duplicate", "duplicaterule", "duplicaterulecondition", "duplicaterecord",
                "picklist", "optionset", "globaloptionset", "attribute", "entityattribute", "entitykey", "entityindex", "entityrelationship",
                "dependency", "dependencynode", "invaliddependency", "dependencyfeature",
                "tracing", "trace", "traceregarding",
                "recommendationmodel", "recommendationmodelversion",
                "subscription", "subscriptionstatisticsoffline", "subscriptiontrackinginfo",
                "syncerror", "mailbox", "mailboxstatistics", "mailboxtrackingfolder", "mailboxfolder",
                "importfile", "importcolumnmapping", "importentitymapping", "importlog", "importmap",
                "columnmapping", "entityimage", "image", "file", "attachment",
                "calendar", "calendarrule", "businessclosure", "holidaywrapper",
                "subject", "subjectbaserule", "subjectbinding", "subjectrule",
                "service", "serviceappointment", "site", "equipment", "resource", "resourcegroup", "resourcegroupexpansion", "scheduling",
                "bookingstatus", "bookableresource", "bookableresourcebooking", "bookableresourcebookingheader", "bookableresourcecategory", "bookableresourcecategoryassn", "bookableresourcecharacteristic", "bookableresourcegroup", "bookableresourceskill",
                "characteristic", "ratingmodel", "ratingvalue",
                "knowledgearticle", "knowledgebaserecord", "knowledgearticleincident", "knowledgearticleview", "knowledgearticlecategory", "knowledgearticleprincipalobjectaccess", "knowledgearticlescategories", "knowledgearticlelink", "knowledgeinteraction", "knowledge search",
                "slakpi", "slaitem", "sla", "slakpiinstance", "slarelatedcase", "slarelatedactivity", "slarelateditem",
                "entitlement", "entitlementchannel", "entitlementproduct", "entitlementtemplate", "entitlementtemplatechannel", "entitlementtemplateproduct",
                "queueitem", "case", "caseorigin", "casecreationrule", "casecreationruleitem", "casesolution", "caseroutingrule", "caseroutingruleitem", "casefollow", "incidentknowledgeassociation",
                "msdyn_", "mspcat_", "mspp_", "mbs_", "adx_", "adx_invitation", "adx_portalcomment",
            };
            if (blocked.Contains(logicalName)) return false;
            if (logicalName == "entity") return false;
            // Custom prefix is a strong signal
            return CommonCustomPrefixes.Any(p => logicalName.StartsWith(p, StringComparison.OrdinalIgnoreCase));
        }
    }
}
