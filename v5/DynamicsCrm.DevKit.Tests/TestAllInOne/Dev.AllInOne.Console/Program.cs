using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Net.Http;

namespace Dev.AllInOne.Console
{
    public class Program
    {
        // Field created earlier with RequiredLevel=ApplicationRequired (CREATE worked).
        // We now try to UPDATE it to Recommended via raw Web API PUT.
        private const string EntityLogicalName = "all_in_one";
        private const string AttributeLogicalName = "all_testrequiredverify";
        private const string AttributeSchemaName = "all_TestRequiredVerify";
        private const string TargetLevelWebApi = "Recommended";

        static void Main()
        {
            WriteHeader();
            System.Console.WriteLine();
            PrintCurrentRequiredLevel("BEFORE");
            System.Console.WriteLine();
            ResetToApplicationRequired();
            System.Console.WriteLine();
            PrintCurrentRequiredLevel("AFTER RESET");
            System.Console.WriteLine();
            TrySdkVariants();
            System.Console.WriteLine();
            PrintCurrentRequiredLevel("FINAL");
            System.Console.WriteLine();
            System.Console.WriteLine("=== Done ===");
        }

        /// <summary>
        /// Reset the field to ApplicationRequired via Web API PUT (which we
        /// know works) so the SDK variants below start from a non-Recommended
        /// state and we can clearly see if they flip it.
        /// </summary>
        private static void ResetToApplicationRequired()
        {
            System.Console.WriteLine("=== Reset to ApplicationRequired via Web API PUT ===");
            var route = $"EntityDefinitions(LogicalName='{EntityLogicalName}')/Attributes(LogicalName='{AttributeLogicalName}')";
            var bodyJson = "{\"LogicalName\":\"" + AttributeLogicalName + "\",\"RequiredLevel\":{\"Value\":\"ApplicationRequired\",\"CanBeChanged\":true}}";
            try
            {
                var response = App.Service.ExecuteWebRequest(
                    method: new HttpMethod("PUT"),
                    queryString: route,
                    body: bodyJson,
                    customHeaders: new Dictionary<string, List<string>>(),
                    contentType: "application/json",
                    cancellationToken: System.Threading.CancellationToken.None);
                System.Console.WriteLine($"  PUT StatusCode: {response?.StatusCode}");
            }
            catch (System.Exception ex) { System.Console.WriteLine($"  PUT threw: {ex.Message.Split('\n', '\r')[0]}"); }
        }

        private static void WriteHeader()
        {
            System.Console.WriteLine($"Web API PUT test on '{EntityLogicalName}.{AttributeLogicalName}'");
            System.Console.WriteLine($"Target Level: {TargetLevelWebApi}");
            System.Console.WriteLine();
        }

        private static void CheckWhoAmI()
        {
            var userId = ((WhoAmIResponse)App.Service.Execute(new WhoAmIRequest())).UserId;
            System.Console.WriteLine($"WhoAmI: {userId}");
            System.Console.WriteLine($"UseWebApi: {App.Service.UseWebApi}");
        }

        /// <summary>
        /// Test SDK UpdateAttributeRequest with various combinations of
        /// SchemaName / LogicalName / MetadataId to see which one makes
        /// RequiredLevel actually persist (like the Web API PUT needed
        /// LogicalName in the body).
        /// </summary>
        private static void TrySdkVariants()
        {
            var target = AttributeRequiredLevel.Recommended;

            // Q: DON'T create a new RequiredLevel object — instead modify the
            // .Value directly on the EXISTING retrieved object. This preserves
            // ManagedPropertyLogicalName and all other internal state that a
            // "new" AttributeRequiredLevelManagedProperty(value) would lose.
            TrySdk("Q: modify .Value on existing RequiredLevel",
                () =>
                {
                    var attr = RetrieveAttribute();
                    // Directly set the Value — keep the existing managed property object.
                    attr.RequiredLevel.Value = target;
                    App.Service.Execute(new UpdateAttributeRequest
                    {
                        EntityName = EntityLogicalName,
                        Attribute = attr,
                        MergeLabels = true
                    });
                });

            // R: same as Q but also force IsValueModified=true
            TrySdk("R: modify .Value + force IsValueModified",
                () =>
                {
                    var attr = RetrieveAttribute();
                    attr.RequiredLevel.Value = target;
                    var t = typeof(AttributeRequiredLevelManagedProperty);
                    t.GetProperty("IsValueModified")?.SetValue(attr.RequiredLevel, true);
                    App.Service.Execute(new UpdateAttributeRequest
                    {
                        EntityName = EntityLogicalName,
                        Attribute = attr,
                        MergeLabels = true
                    });
                });
        }

        private static void TrySdk(string label, Action action)
        {
            System.Console.WriteLine($"--- {label} ---");
            try
            {
                action();
                System.Console.WriteLine("  Execute: OK");
            }
            catch (System.Exception ex)
            {
                System.Console.WriteLine($"  THREW: {ex.Message.Split('\n', '\r')[0]}");
            }
            var after = RetrieveAttribute();
            var val = after.RequiredLevel?.Value.ToString() ?? "(null)";
            var ok = val == "Recommended" ? "✅ PERSISTED" : "❌ NOT PERSISTED";
            System.Console.WriteLine($"  RequiredLevel.Value = {val}  {ok}");
            System.Console.WriteLine();
        }

        private static Guid RetrieveMetadataId()
        {
            return RetrieveAttribute().MetadataId ?? Guid.Empty;
        }

        private static void PrintCurrentRequiredLevel(string label)
        {
            var req = new RetrieveAttributeRequest
            {
                EntityLogicalName = EntityLogicalName,
                LogicalName = AttributeLogicalName,
                RetrieveAsIfPublished = false
            };
            var attr = ((RetrieveAttributeResponse)App.Service.Execute(req)).AttributeMetadata;
            var rl = attr.RequiredLevel;
            System.Console.WriteLine($"=== {label} ===");
            System.Console.WriteLine($"  RequiredLevel.Value           = {rl?.Value}");
            System.Console.WriteLine($"  RequiredLevel.CanBeChanged    = {rl?.CanBeChanged}");
            System.Console.WriteLine($"  RequiredLevel.IsValueModified = {rl?.IsValueModified}");
        }

        private static AttributeMetadata RetrieveAttribute()
        {
            var req = new RetrieveAttributeRequest
            {
                EntityLogicalName = EntityLogicalName,
                LogicalName = AttributeLogicalName,
                RetrieveAsIfPublished = false
            };
            return ((RetrieveAttributeResponse)App.Service.Execute(req)).AttributeMetadata;
        }
    }
}