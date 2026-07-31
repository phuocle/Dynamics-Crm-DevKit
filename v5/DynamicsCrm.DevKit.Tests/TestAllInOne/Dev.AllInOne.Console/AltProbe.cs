using System;
using System.Linq;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using SysConsole = System.Console;

namespace Dev.AllInOne.Console
{
    // Probe utility: try multiple FetchXml / QueryExpression forms to find one
    // that actually returns soft-deleted records on this org.
    public class AltProbe
    {
        public static void Run(ServiceClient svc)
        {
            SysConsole.OutputEncoding = System.Text.Encoding.UTF8;
            SysConsole.WriteLine("=== AltProbe: find a working way to list deleted records ===");
            SysConsole.WriteLine();

            // Re-create + delete a test account first.
            var account = new Entity("account")
            {
                Attributes = { ["name"] = "DEVKIT-MDR-ALTPROBE-" + DateTime.UtcNow.ToString("HHmmssfff") }
            };
            var id = svc.Create(account);
            svc.Delete("account", id);
            SysConsole.WriteLine("Soft-deleted GUID: " + id);
            SysConsole.WriteLine();

            // Test 1: FetchXml datasource='bin'
            TryFetch(svc, "Test 1: FetchXml datasource='bin'", @"<fetch top='5' datasource='bin'>
  <entity name='account'><attribute name='accountid'/></entity>
</fetch>");

            // Test 2: FetchXml datasource='recyclebin'
            TryFetch(svc, "Test 2: FetchXml datasource='recyclebin'", @"<fetch top='5' datasource='recyclebin'>
  <entity name='account'><attribute name='accountid'/></entity>
</fetch>");

            // Test 3: QueryExpression with DataSource='bin'
            TryQuery(svc, "Test 3: QueryExpression DataSource='bin'", "bin");

            // Test 4: QueryExpression with DataSource='recyclebin'
            TryQuery(svc, "Test 4: QueryExpression DataSource='recyclebin'", "recyclebin");

            // Test 5: Plain QueryExpression no DataSource — should return only live records
            TryQuery(svc, "Test 5: QueryExpression no DataSource (control)", null);

            // Test 6: FetchXml no datasource (control)
            TryFetch(svc, "Test 6: FetchXml no datasource (control)", @"<fetch top='5'>
  <entity name='account'>
    <attribute name='accountid'/>
    <attribute name='name'/>
    <attribute name='statecode'/>
  </entity>
</fetch>");

            // Test 7: Restore the record to clean up
            try
            {
                var req = new OrganizationRequest("Restore")
                {
                    Parameters = { { "Target", new Entity("account", id) } }
                };
                svc.Execute(req);
                SysConsole.WriteLine();
                SysConsole.WriteLine("Cleanup: restored test record " + id);
            }
            catch (Exception ex)
            {
                SysConsole.WriteLine("Cleanup failed: " + ex.Message);
            }
        }

        private static void TryFetch(ServiceClient svc, string label, string fetch)
        {
            SysConsole.WriteLine(label);
            try
            {
                var ec = svc.RetrieveMultiple(new FetchExpression(fetch));
                SysConsole.WriteLine("  OK — " + ec.Entities.Count + " records returned");
                if (ec.Entities.Count > 0)
                {
                    var first = ec.Entities[0];
                    SysConsole.WriteLine("  First Id = " + first.Id);
                    SysConsole.WriteLine("  Attrs = [" + string.Join(",", first.Attributes.Keys) + "]");
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message.Split('\n')[0];
                if (msg.Length > 250) msg = msg.Substring(0, 250) + "…";
                SysConsole.WriteLine("  FAIL — " + ex.GetType().Name + ": " + msg);
            }
            SysConsole.WriteLine();
        }

        private static void TryQuery(ServiceClient svc, string label, string dataSource)
        {
            SysConsole.WriteLine(label);
            try
            {
                var qe = new QueryExpression("account")
                {
                    ColumnSet = new ColumnSet("accountid"),
                    TopCount = 5
                };
                if (!string.IsNullOrEmpty(dataSource))
                {
                    // Try setting via reflection (property might not exist on this SDK version)
                    var prop = typeof(QueryExpression).GetProperty("DataSource");
                    if (prop != null)
                    {
                        prop.SetValue(qe, dataSource);
                    }
                    else
                    {
                        SysConsole.WriteLine("  QueryExpression.DataSource property NOT FOUND on this SDK version — skipping");
                        return;
                    }
                }
                var ec = svc.RetrieveMultiple(qe);
                SysConsole.WriteLine("  OK — " + ec.Entities.Count + " records returned");
                if (ec.Entities.Count > 0)
                {
                    var first = ec.Entities[0];
                    SysConsole.WriteLine("  First Id = " + first.Id);
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message.Split('\n')[0];
                if (msg.Length > 250) msg = msg.Substring(0, 250) + "…";
                SysConsole.WriteLine("  FAIL — " + ex.GetType().Name + ": " + msg);
            }
            SysConsole.WriteLine();
        }
    }
}
