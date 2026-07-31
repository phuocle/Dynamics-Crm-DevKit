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
    }
}
