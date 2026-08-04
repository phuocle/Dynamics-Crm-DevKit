// ----------------------------------------------------------------------------
//  Timed probe: bulk per-table soft-delete (Recycle Bin) turn-off.
//  A/B: parallel UpdateAsync vs ExecuteMultiple batch -> pick winner to port
//  back into DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRecycleBinTool.cs
// ----------------------------------------------------------------------------
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using SysConsole = System.Console;

namespace Dev.AllInOne.Console
{
    internal static class BulkProbe
    {
        private const string RecycleBinConfigTable = "recyclebinconfig";
        private const string OrgRowName            = "organization";
        private const int    PageSize              = 5000;
        private const int    BatchSize             = 100;
        private const int    BatchParallelism      = 4;

        private sealed class RowInfo
        {
            public Guid   Id;
            public string Name;
            public int    StateCode;
        }

        public static async Task RunTurnOffAllAsync(ServiceClient svc)
        {
            var swTotal = Stopwatch.StartNew();
            var sw      = Stopwatch.StartNew();

            // P1 — one paged query: row id + name + state. NO metadata retrieve at all.
            var rows = LoadAllRows(svc);
            sw.Stop();
            var activeCount = rows.Count(r => r.StateCode == 0);
            SysConsole.WriteLine($"[P1] Loaded {rows.Count} per-table rows ({activeCount} ACTIVE, {rows.Count - activeCount} INACTIVE) in {sw.ElapsedMilliseconds} ms");
            if (rows.Count == 0) { SysConsole.WriteLine("Nothing to do."); return; }

            // P2 — micro A/B on up to 3 ACTIVE rows: parallel Execute vs ExecuteMultiple.
            var sample = rows.Where(r => r.StateCode == 0).Take(3).ToList();
            if (sample.Count > 0)
            {
                sw.Restart();
                await Task.WhenAll(sample.Select(r => svc.ExecuteAsync(SetState(r.Id, false))));
                sw.Stop();
                SysConsole.WriteLine($"[P2-A] {sample.Count} x parallel SetState (Execute)   -> {sw.ElapsedMilliseconds} ms");

                sw.Restart();
                var resp = ExecuteBatch(svc, sample.Select(r => SetState(r.Id, true)).ToList());
                sw.Stop();
                SysConsole.WriteLine($"[P2-B] {sample.Count} x ExecuteMultiple (1 batch)      -> {sw.ElapsedMilliseconds} ms, faults={CountFaults(resp)}");
            }
            else
            {
                SysConsole.WriteLine("[P2] skipped (no ACTIVE rows to sample)");
            }

            // P3 — full turn-off via ExecuteMultiple batches of SetStateRequest(Inactive).
            sw.Restart();
            var batches = rows.Select((r, i) => new { r, i })
                .GroupBy(x => x.i / BatchSize)
                .Select(g => g.Select(x => SetState(x.r.Id, false)).ToList())
                .ToList();
            var faults = new ConcurrentBag<string>();
            Parallel.ForEach(batches, new ParallelOptions { MaxDegreeOfParallelism = BatchParallelism }, batch =>
            {
                var resp = ExecuteBatch(svc, batch);
                if (resp == null) { faults.Add("batch returned null response"); return; }
                foreach (var item in resp.Responses.Where(x => x.Fault != null))
                    faults.Add($"request {item.RequestIndex}: {item.Fault.Message}");
            });
            sw.Stop();
            SysConsole.WriteLine($"[P3] ExecuteMultiple: {rows.Count} rows / {batches.Count} batches x{BatchParallelism} -> {sw.ElapsedMilliseconds} ms, faults={faults.Count}");
            foreach (var f in faults.Take(10)) SysConsole.WriteLine("   fault: " + f);

            // P3b — parallel individual Execute over ALL rows (idempotent re-run same state).
            var dop = Math.Max(1, svc.RecommendedDegreesOfParallelism);
            sw.Restart();
            var faults2 = new ConcurrentBag<string>();
            Parallel.ForEach(rows, new ParallelOptions { MaxDegreeOfParallelism = dop }, r =>
            {
                try { svc.Execute(SetState(r.Id, false)); }
                catch (Exception ex) { faults2.Add(ex.Message); }
            });
            sw.Stop();
            SysConsole.WriteLine($"[P3b] parallel Execute x{dop}: {rows.Count} rows -> {sw.ElapsedMilliseconds} ms, faults={faults2.Count}");
            foreach (var f in faults2.Take(10)) SysConsole.WriteLine("   fault: " + f);

            // P4 — verify with aggregate on statecode (0=Active/enabled, 1=Inactive/disabled).
            sw.Restart();
            var (active, inactive) = CountByState(svc);
            sw.Stop();
            SysConsole.WriteLine($"[P4] verify: Active(enabled)={active} Inactive(disabled)={inactive} (aggregate {sw.ElapsedMilliseconds} ms)");
            SysConsole.WriteLine($"[DONE] total {swTotal.ElapsedMilliseconds} ms");
        }

        private static SetStateRequest SetState(Guid id, bool active)
            => new SetStateRequest
            {
                EntityMoniker = new EntityReference(RecycleBinConfigTable, id),
                State  = new OptionSetValue(active ? 0 : 1),
                Status = new OptionSetValue(active ? 1 : 2)
            };

        private static ExecuteMultipleResponse ExecuteBatch(ServiceClient svc, List<SetStateRequest> requests)
        {
            var req = new ExecuteMultipleRequest
            {
                Settings = new ExecuteMultipleSettings { ContinueOnError = true, ReturnResponses = true },
                Requests = new OrganizationRequestCollection()
            };
            foreach (var r in requests) req.Requests.Add(r);
            return (ExecuteMultipleResponse)svc.Execute(req);
        }

        private static int CountFaults(ExecuteMultipleResponse resp)
            => resp?.Responses?.Count(r => r.Fault != null) ?? -1;

        private static List<RowInfo> LoadAllRows(ServiceClient svc)
        {
            var rows = new List<RowInfo>();
            var qe = new QueryExpression(RecycleBinConfigTable)
            {
                ColumnSet = new ColumnSet("recyclebinconfigid", "name", "statecode"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions = { new ConditionExpression("name", ConditionOperator.NotEqual, OrgRowName) }
                },
                PageInfo = new PagingInfo { PageNumber = 1, Count = PageSize }
            };
            while (true)
            {
                var result = svc.RetrieveMultiple(qe);
                foreach (var e in result.Entities)
                {
                    rows.Add(new RowInfo
                    {
                        Id        = e.Id,
                        Name      = e.GetAttributeValue<string>("name"),
                        StateCode = e.GetAttributeValue<OptionSetValue>("statecode")?.Value ?? 0
                    });
                }
                if (!result.MoreRecords) break;
                qe.PageInfo.PageNumber++;
                qe.PageInfo.PagingCookie = result.PagingCookie;
            }
            return rows;
        }

        private static (int active, int inactive) CountByState(ServiceClient svc)
        {
            var fetch = @"<fetch aggregate='true'>
  <entity name='recyclebinconfig'>
    <attribute name='statecode' alias='state' groupby='true' />
    <attribute name='recyclebinconfigid' alias='cnt' aggregate='count' />
    <filter><condition attribute='name' operator='neq' value='" + OrgRowName + @"' /></filter>
  </entity>
</fetch>";
            var result = svc.RetrieveMultiple(new FetchExpression(fetch));
            int active = 0, inactive = 0;
            foreach (var e in result.Entities)
            {
                var cnt   = (int)((AliasedValue)e["cnt"]).Value;
                var state = ((OptionSetValue)((AliasedValue)e["state"]).Value).Value;
                if (state == 0) active = cnt; else inactive = cnt;
            }
            return (active, inactive);
        }
    }
}
