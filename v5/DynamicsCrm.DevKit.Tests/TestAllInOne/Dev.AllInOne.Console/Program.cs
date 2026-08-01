// ----------------------------------------------------------------------------
//  Turn-org-soft-delete-ON debug console.
// ----------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using SysConsole = System.Console;

namespace Dev.AllInOne.Console
{
    public class Program
    {
        private const string RecycleBinConfigTable = "recyclebinconfig";
        private const string OrgRowName            = "organization";
        private const int    MinRetentionDays      = 1;
        private const int    MaxRetentionDays      = 30;
        private const int    DefaultRetentionDays  = 30;

        static async Task<int> Main(string[] args)
        {
            SysConsole.OutputEncoding = Encoding.UTF8;

            ServiceClient svc;
            try { svc = App.Service; }
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

            try
            {
                await TurnOnAsync(svc, DefaultRetentionDays);
                return 0;
            }
            catch (Exception ex)
            {
                SysConsole.WriteLine();
                SysConsole.WriteLine("[FATAL] " + ex.GetType().FullName + ": " + ex.Message);
                if (ex.InnerException != null)
                    SysConsole.WriteLine("  inner: " + ex.InnerException.GetType().FullName + ": " + ex.InnerException.Message);
                SysConsole.WriteLine();
                SysConsole.WriteLine(ex.ToString());
                return 1;
            }
        }

        private static Entity GetOrgRecycleBinConfigRow(ServiceClient svc)
        {
            var qe = new QueryExpression(RecycleBinConfigTable)
            {
                ColumnSet = new ColumnSet(
                    "recyclebinconfigid",
                    "name",
                    "isreadyforrecyclebin",
                    "cleanupintervalindays",
                    "statecode",
                    "statuscode"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("name", ConditionOperator.Equal, OrgRowName)
                    }
                }
            };
            var result = svc.RetrieveMultiple(qe);
            return result.Entities.Count > 0 ? result.Entities[0] : null;
        }

        private static Guid GetOrganizationEntityId(ServiceClient svc)
        {
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
            return result.Entities[0].Id;
        }

        private static async Task TurnOnAsync(ServiceClient svc, int retentionDays)
        {
            if (retentionDays < MinRetentionDays) retentionDays = MinRetentionDays;
            if (retentionDays > MaxRetentionDays) retentionDays = MaxRetentionDays;

            SysConsole.WriteLine("[TurnOn] retention_days = " + retentionDays);

            // Step 1 — DELETE old row if present.
            var row = GetOrgRecycleBinConfigRow(svc);
            if (row != null)
            {
                SysConsole.WriteLine("[TurnOn] existing org row id=" + row.Id +
                    " isreadyforrecyclebin=" + (row.GetAttributeValue<bool?>("isreadyforrecyclebin")?.ToString() ?? "null") +
                    " statecode=" + row.GetAttributeValue<OptionSetValue>("statecode")?.Value);
                SysConsole.WriteLine("[TurnOn] DELETE existing org row...");
                svc.Delete(RecycleBinConfigTable, row.Id);
                SysConsole.WriteLine("[TurnOn] DELETE ok.");
            }
            else
            {
                SysConsole.WriteLine("[TurnOn] no existing org row.");
            }

            // Step 2 — lookup entity id.
            var entityId = GetOrganizationEntityId(svc);
            SysConsole.WriteLine("[TurnOn] organization entity id = " + entityId);

            // Step 3 — POST Web API.
            var payload = "{" +
                "\"cleanupintervalindays\":" + retentionDays.ToString(CultureInfo.InvariantCulture) + "," +
                "\"extensionofrecordid@OData.Community.Display.V1.FormattedValue\":\"OrganizationId\"," +
                "\"extensionofrecordid@odata.bind\":\"entities(" + entityId.ToString() + ")\"" +
                "}";
            var headers = new Dictionary<string, List<string>>
            {
                { "Accept", new List<string> { "application/json" } },
                { "OData-MaxVersion", new List<string> { "4.0" } },
                { "OData-Version", new List<string> { "4.0" } },
                { "Prefer", new List<string> { "return=representation", "odata.include-annotations=\"*\"" } }
            };

            SysConsole.WriteLine("[TurnOn] POST /recyclebinconfigs (via ExecuteWebRequest)");

            // Force Web API mode so the SDK uses /api/data/v9.2 instead of SOAP.
            bool prevUseWebApi = svc.UseWebApi;
            svc.UseWebApi = true;
            try
            {
                using var resp = svc.ExecuteWebRequest(
                    HttpMethod.Post,
                    "recyclebinconfigs",
                    payload,
                    headers,
                    "application/json");

            var body = resp.Content != null
                ? await resp.Content.ReadAsStringAsync()
                : "";
            int code = (int)resp.StatusCode;

            SysConsole.WriteLine("[TurnOn] HTTP " + code + " " + resp.ReasonPhrase);
            SysConsole.WriteLine("[TurnOn] body = " + body);

            if (code < 200 || code >= 300)
                throw new InvalidOperationException("POST /recyclebinconfigs returned HTTP " + code + ": " + body);

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
            SysConsole.WriteLine("[TurnOn] new row id = " + newId);
            }
            finally
            {
                svc.UseWebApi = prevUseWebApi;
            }
        }
    }
}