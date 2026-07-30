using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using Microsoft.PowerPlatform.Dataverse.Client;
using SysConsole = System.Console;

namespace Dev.AllInOne.Console
{
    // Probes Dataverse Relevance Search raw response shapes so we can update
    // the MCP SearchRecordsTool models to match what the server actually sends.
    //
    // Uses App.Service (reads URL/ClientId/ClientSecret from App.config or .env,
    // never hard-coded) -- same ServiceClient the MCP tool uses.
    public class Program
    {
        static void Main()
        {
            SysConsole.OutputEncoding = Encoding.UTF8;

            SysConsole.WriteLine("Connecting via App.Service ...");
            var svc = App.Service;
            if (!svc.IsReady)
            {
                SysConsole.WriteLine("ERROR: " + svc.LastError);
                return;
            }
            SysConsole.WriteLine("Connected OK to " + svc.ConnectedOrgUriActual + Environment.NewLine);

            RunSearch(svc, "Boyle", top: 3);
            RunSearch(svc, "Inc", top: 5);
            RunSearch(svc, "Boyle", top: 3, entities: new List<string> { "account", "contact" });
            RunStatus(svc);
        }

        // Raw POST to /api/search/v1.0/searchquery -- exact endpoint the MCP tool uses.
        private static void RunSearch(ServiceClient svc, string term, int top, List<string> entities = null)
        {
            SysConsole.WriteLine("===============================================================");
            SysConsole.WriteLine("SEARCH  term='" + term + "'  top=" + top +
                                "  entities=" + (entities == null ? "(all)" : string.Join(",", entities)));
            SysConsole.WriteLine("===============================================================");

            var body = new Dictionary<string, object>
            {
                ["search"] = term,
                ["count"] = true,
                ["top"] = top
            };
            if (entities != null && entities.Count > 0)
            {
                // Match the MCP tool's exact body shape: "entities" is a JSON-encoded
                // STRING (not an inline array) containing objects with a "name" field.
                var entityList = entities.Select(e => new { name = e }).ToList();
                body["entities"] = JsonSerializer.Serialize(entityList);
            }

            var requestBody = JsonSerializer.Serialize(body);
            SysConsole.WriteLine("--- REQUEST BODY ---" + Environment.NewLine + requestBody + Environment.NewLine);

            var response = svc.ExecuteWebRequest(
                HttpMethod.Post, "searchquery", requestBody, null, "application/json");

            var json = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();
            SysConsole.WriteLine("--- HTTP " + (int)response.StatusCode + " " + response.ReasonPhrase + " ---");
            Dump(json);
            SysConsole.WriteLine();
        }

        private static void RunStatus(ServiceClient svc)
        {
            SysConsole.WriteLine("===============================================================");
            SysConsole.WriteLine("STATUS  GET /api/search/v1.0/searchstatus");
            SysConsole.WriteLine("===============================================================");
            var resp = svc.ExecuteWebRequest(
                HttpMethod.Get, "searchstatus", string.Empty, null, "application/json");
            var json = resp.Content.ReadAsStringAsync().GetAwaiter().GetResult();
            SysConsole.WriteLine("--- HTTP " + (int)resp.StatusCode + " " + resp.ReasonPhrase + " ---");
            Dump(json);
            SysConsole.WriteLine();

            SysConsole.WriteLine("===============================================================");
            SysConsole.WriteLine("STATUS  GET /api/search/v1.0/searchstatistics");
            SysConsole.WriteLine("===============================================================");
            resp = svc.ExecuteWebRequest(
                HttpMethod.Get, "searchstatistics", string.Empty, null, "application/json");
            json = resp.Content.ReadAsStringAsync().GetAwaiter().GetResult();
            SysConsole.WriteLine("--- HTTP " + (int)resp.StatusCode + " " + resp.ReasonPhrase + " ---");
            Dump(json);
            SysConsole.WriteLine();
        }

        // Dataverse wraps everything in { "response": "<JSON string>" }.
        // Print the outer wrapper, then pretty-print the inner JSON if present.
        private static void Dump(string json)
        {
            if (string.IsNullOrWhiteSpace(json))
            {
                SysConsole.WriteLine("(empty)");
                return;
            }

            using var doc = JsonDocument.Parse(json);
            var root = doc.RootElement;

            if (root.ValueKind == JsonValueKind.Object &&
                root.TryGetProperty("response", out var respProp) &&
                respProp.ValueKind == JsonValueKind.String)
            {
                var inner = respProp.GetString();
                if (string.IsNullOrWhiteSpace(inner))
                {
                    SysConsole.WriteLine("(inner response is empty)");
                    return;
                }

                try
                {
                    using var innerDoc = JsonDocument.Parse(inner);
                    SysConsole.WriteLine("--- INNER (pretty) ---");
                    SysConsole.WriteLine(JsonSerializer.Serialize(innerDoc.RootElement,
                        new JsonSerializerOptions { WriteIndented = true }));
                    SysConsole.WriteLine("--- INNER (compact) ---");
                    SysConsole.WriteLine(JsonSerializer.Serialize(innerDoc.RootElement));
                }
                catch (JsonException)
                {
                    SysConsole.WriteLine("--- INNER (raw, not JSON) ---");
                    SysConsole.WriteLine(inner);
                }
            }
            else
            {
                SysConsole.WriteLine("--- BODY ---");
                SysConsole.WriteLine(JsonSerializer.Serialize(root,
                    new JsonSerializerOptions { WriteIndented = true }));
            }
        }
    }
}
