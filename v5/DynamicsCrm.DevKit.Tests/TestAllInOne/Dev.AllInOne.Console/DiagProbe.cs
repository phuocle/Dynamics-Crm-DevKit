// ----------------------------------------------------------------------------
//  Diagnostic probe: find the REAL mechanism to disable per-table Recycle Bin.
//  Each test runs on ONE row and restores state afterwards. Prints fault codes.
// ----------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using SysConsole = System.Console;

namespace Dev.AllInOne.Console
{
    internal static class DiagProbe
    {
        private const string RecycleBinConfigTable = "recyclebinconfig";
        private const string OrgRowName            = "organization";

        public static async Task RunAsync(ServiceClient svc)
        {
            // Locate one ON per-table row (name != 'organization', isreadyforrecyclebin = true).
            var qe = new QueryExpression(RecycleBinConfigTable)
            {
                ColumnSet = new ColumnSet("recyclebinconfigid", "name", "isreadyforrecyclebin",
                    "cleanupintervalindays", "statecode", "statuscode", "extensionofrecordid"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("name", ConditionOperator.NotEqual, OrgRowName),
                        new ConditionExpression("isreadyforrecyclebin", ConditionOperator.Equal, true)
                    }
                },
                PageInfo = new PagingInfo { PageNumber = 1, Count = 1 }
            };
            var row = svc.RetrieveMultiple(qe).Entities.FirstOrDefault();
            if (row == null) { SysConsole.WriteLine("[DIAG] No ON per-table row found to test."); return; }

            var id       = row.Id;
            var name     = row.GetAttributeValue<string>("name");
            var entityId = row.GetAttributeValue<EntityReference>("extensionofrecordid")?.Id ?? Guid.Empty;
            SysConsole.WriteLine($"[DIAG] test row: name={name} id={id} entityId={entityId} " +
                $"statecode={row.GetAttributeValue<OptionSetValue>("statecode")?.Value} " +
                $"statuscode={row.GetAttributeValue<OptionSetValue>("statuscode")?.Value} " +
                $"cleanup={row.GetAttributeValue<int?>("cleanupintervalindays")}");
            SysConsole.WriteLine();

            // T0 (control): documented cleanupintervalindays update.
            TrySync("T0  Update cleanupintervalindays=7 (control, documented)",
                () => svc.Update(Cfg(id, "cleanupintervalindays", 7)));
            TrySync("T0r Update cleanupintervalindays=-1 (restore)",
                () => svc.Update(Cfg(id, "cleanupintervalindays", -1)));

            // T1: Update isready=true on an already-ON row -> expect 'already enabled'.
            TrySync("T1  Update isreadyforrecyclebin=true  (row already ON)",
                () => svc.Update(Cfg(id, "isreadyforrecyclebin", true)));

            // T2: Update isready=false via SOAP -> P2-A faulted with 0x80097578; re-verify single call.
            TrySync("T2  Update isreadyforrecyclebin=false (SOAP)",
                () => svc.Update(Cfg(id, "isreadyforrecyclebin", false)));
            PrintState(svc, id, "after T2");

            // T3: Web API PATCH isready=false.
            await TryWebApiAsync(svc, "T3  PATCH isreadyforrecyclebin=false (Web API)", id,
                "{\"isreadyforrecyclebin\":false}");
            PrintState(svc, id, "after T3");

            // T4: SetState -> Inactive, then check docs 'enabled' detection query, then restore Active.
            TrySync("T4  SetStateRequest statecode=1 (Inactive)",
                () => svc.Execute(new SetStateRequest
                {
                    EntityMoniker = new EntityReference(RecycleBinConfigTable, id),
                    State  = new OptionSetValue(1),
                    Status = new OptionSetValue(2)
                }));
            PrintState(svc, id, "after T4");
            SysConsole.WriteLine($"      docs-enabled-query contains '{name}': {IsDetectedEnabled(svc, entityId)}");
            TrySync("T4r SetStateRequest statecode=0 (restore Active)",
                () => svc.Execute(new SetStateRequest
                {
                    EntityMoniker = new EntityReference(RecycleBinConfigTable, id),
                    State  = new OptionSetValue(0),
                    Status = new OptionSetValue(1)
                }));
            PrintState(svc, id, "after T4r");

            // Final aggregate sanity.
            var fetch = @"<fetch aggregate='true'>
  <entity name='recyclebinconfig'>
    <attribute name='isreadyforrecyclebin' alias='ready' groupby='true' />
    <attribute name='recyclebinconfigid' alias='cnt' aggregate='count' />
    <filter><condition attribute='name' operator='neq' value='" + OrgRowName + @"' /></filter>
  </entity>
</fetch>";
            var agg = svc.RetrieveMultiple(new FetchExpression(fetch));
            SysConsole.WriteLine();
            SysConsole.WriteLine("[DIAG] final aggregate:");
            foreach (var e in agg.Entities)
                SysConsole.WriteLine($"      ready={((AliasedValue)e["ready"]).Value} cnt={((AliasedValue)e["cnt"]).Value}");
        }

        private static Entity Cfg(Guid id, string attr, object value)
            => new Entity(RecycleBinConfigTable, id) { [attr] = value };

        private static void PrintState(ServiceClient svc, Guid id, string tag)
        {
            var r = svc.Retrieve(RecycleBinConfigTable, id,
                new ColumnSet("isreadyforrecyclebin", "statecode", "statuscode", "cleanupintervalindays"));
            SysConsole.WriteLine($"      state {tag}: isready={r.GetAttributeValue<bool?>("isreadyforrecyclebin")} " +
                $"statecode={r.GetAttributeValue<OptionSetValue>("statecode")?.Value} " +
                $"statuscode={r.GetAttributeValue<OptionSetValue>("statuscode")?.Value} " +
                $"cleanup={r.GetAttributeValue<int?>("cleanupintervalindays")}");
        }

        private static bool IsDetectedEnabled(ServiceClient svc, Guid entityId)
        {
            // Official docs query: statecode=0 AND isreadyforrecyclebin=true, by extensionofrecordid.
            var qe = new QueryExpression(RecycleBinConfigTable)
            {
                ColumnSet = new ColumnSet("recyclebinconfigid"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("extensionofrecordid", ConditionOperator.Equal, entityId),
                        new ConditionExpression("statecode", ConditionOperator.Equal, 0),
                        new ConditionExpression("isreadyforrecyclebin", ConditionOperator.Equal, true)
                    }
                }
            };
            return svc.RetrieveMultiple(qe).Entities.Count > 0;
        }

        private static void TrySync(string label, Action action)
        {
            try { action(); SysConsole.WriteLine($"[OK]   {label}"); }
            catch (FaultException<Microsoft.Xrm.Sdk.OrganizationServiceFault> ex)
            {
                SysConsole.WriteLine($"[FAULT {ex.Detail.ErrorCode}] {label}");
                SysConsole.WriteLine($"       {ex.Detail.Message}");
            }
            catch (Exception ex)
            {
                SysConsole.WriteLine($"[EX {ex.GetType().Name}] {label}: {ex.Message}");
            }
        }

        private static async Task TryWebApiAsync(ServiceClient svc, string label, Guid id, string payload)
        {
            var headers = new Dictionary<string, List<string>>
            {
                { "Accept", new List<string> { "application/json" } },
                { "OData-MaxVersion", new List<string> { "4.0" } },
                { "OData-Version", new List<string> { "4.0" } },
                { "If-Match", new List<string> { "*" } }
            };
            bool prev = svc.UseWebApi;
            svc.UseWebApi = true;
            try
            {
                using var resp = svc.ExecuteWebRequest(
                    new HttpMethod("PATCH"),
                    $"recyclebinconfigs({id})",
                    payload,
                    headers,
                    "application/json");
                var body = resp.Content != null ? await resp.Content.ReadAsStringAsync() : "";
                SysConsole.WriteLine($"[HTTP {(int)resp.StatusCode}] {label}");
                if (!string.IsNullOrWhiteSpace(body)) SysConsole.WriteLine($"       {body}");
            }
            catch (Exception ex)
            {
                SysConsole.WriteLine($"[EX {ex.GetType().Name}] {label}: {ex.Message}");
            }
            finally { svc.UseWebApi = prev; }
        }
    }
}
