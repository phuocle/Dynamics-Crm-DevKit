using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;

namespace Dev.AllInOne.Console
{
    public class Program
    {
        private const string EntityLogicalName = "all_in_one";
        private const string AttributeLogicalName = "all_15bigint";

        static void Main()
        {
            WriteHeader();
            PrintCurrent("BEFORE");
            System.Console.WriteLine();

            // 1. Audit: SDK + Web API
            TestFlag("Audit(SDK)",  () => SetAuditSdk(false),    () => GetAudit());
            TestFlag("Audit(WebAPI)", () => SetAuditWebApi(false), () => GetAudit());
            TestFlag("Audit(WebAPI)", () => SetAuditWebApi(true),  () => GetAudit());

            // 2. Required: SDK + Web API
            TestFlag("Required(SDK)",    () => SetRequiredSdk("Recommended"),       () => GetRequired());
            TestFlag("Required(WebAPI)", () => SetRequiredWebApi("Recommended"),     () => GetRequired());
            TestFlag("Required(WebAPI)", () => SetRequiredWebApi("ApplicationRequired"), () => GetRequired());
            TestFlag("Required(WebAPI)", () => SetRequiredWebApi("None"),            () => GetRequired());

            // 3. AdvFind: SDK + Web API
            TestFlag("AdvFind(SDK)",    () => SetAdvFindSdk(true),    () => GetAdvFind());
            TestFlag("AdvFind(WebAPI)", () => SetAdvFindWebApi(true),  () => GetAdvFind());
            TestFlag("AdvFind(WebAPI)", () => SetAdvFindWebApi(false), () => GetAdvFind());

            // 4. Sort: SDK + Web API
            TestFlag("Sort(SDK)",    () => SetSortSdk(true),    () => GetSort());
            TestFlag("Sort(WebAPI)", () => SetSortWebApi(true),  () => GetSort());
            TestFlag("Sort(WebAPI)", () => SetSortWebApi(false), () => GetSort());

            // 5. Secured: SDK + Web API
            TestFlag("Secured(SDK)",    () => SetSecuredSdk(true),    () => GetSecured());
            TestFlag("Secured(WebAPI)", () => SetSecuredWebApi(true),  () => GetSecured());
            TestFlag("Secured(WebAPI)", () => SetSecuredWebApi(false), () => GetSecured());

            System.Console.WriteLine();
            PrintCurrent("FINAL");
            System.Console.WriteLine();
            System.Console.WriteLine("=== Done ===");
        }

        private static void TestFlag(string flagName, Action setAction, Func<string> getCurrent)
        {
            var before = getCurrent();
            System.Console.WriteLine($"-- {flagName}: before={before} --");
            try
            {
                setAction();
                System.Console.WriteLine("  Execute: OK");
            }
            catch (System.Exception ex)
            {
                System.Console.WriteLine($"  THREW: {ex.Message.Split('\n', '\r')[0]}");
            }
            var after = getCurrent();
            var ok = after != before ? "CHANGED" : "NOT CHANGED";
            System.Console.WriteLine($"  after={after}  {ok}");
            System.Console.WriteLine();
        }

        // ── SDK setters ──────────────────────────────────────────────
        private static void SetAuditSdk(bool value)
        {
            var attr = RetrieveAttribute();
            attr.IsAuditEnabled = new BooleanManagedProperty(value);
            UpdateAttribute(attr);
        }

        private static void SetRequiredSdk(string level)
        {
            var attr = RetrieveAttribute();
            attr.RequiredLevel = new AttributeRequiredLevelManagedProperty(ParseRequiredLevel(level));
            UpdateAttribute(attr);
        }

        private static void SetAdvFindSdk(bool value)
        {
            var attr = RetrieveAttribute();
            attr.IsValidForAdvancedFind = new BooleanManagedProperty(value);
            UpdateAttribute(attr);
        }

        private static void SetSortSdk(bool value)
        {
            var attr = RetrieveAttribute();
            attr.IsSortableEnabled = new BooleanManagedProperty(value);
            UpdateAttribute(attr);
        }

        private static void SetSecuredSdk(bool value)
        {
            var attr = RetrieveAttribute();
            attr.IsSecured = value;
            UpdateAttribute(attr);
        }

        // ── Web API setters (PUT) ────────────────────────────────────
        private static string WebApiRoute =>
            $"EntityDefinitions(LogicalName='{EntityLogicalName}')/Attributes(LogicalName='{AttributeLogicalName}')";

        private static void WebApiPut(string bodyJson)
        {
            var response = App.Service.ExecuteWebRequest(
                method: new HttpMethod("PUT"),
                queryString: WebApiRoute,
                body: bodyJson,
                customHeaders: new Dictionary<string, List<string>>(),
                contentType: "application/json",
                cancellationToken: System.Threading.CancellationToken.None);
            System.Console.WriteLine($"  PUT StatusCode: {response?.StatusCode}");
        }

        private static void SetAuditWebApi(bool value)
        {
            WebApiPut($"{{\"LogicalName\":\"{AttributeLogicalName}\",\"IsAuditEnabled\":{{\"Value\":{value.ToString().ToLower()},\"CanBeChanged\":true}}}}");
        }

        private static void SetRequiredWebApi(string level)
        {
            WebApiPut($"{{\"LogicalName\":\"{AttributeLogicalName}\",\"RequiredLevel\":{{\"Value\":\"{level}\",\"CanBeChanged\":true}}}}");
        }

        private static void SetAdvFindWebApi(bool value)
        {
            WebApiPut($"{{\"LogicalName\":\"{AttributeLogicalName}\",\"IsValidForAdvancedFind\":{{\"Value\":{value.ToString().ToLower()},\"CanBeChanged\":true}}}}");
        }

        private static void SetSortWebApi(bool value)
        {
            WebApiPut($"{{\"LogicalName\":\"{AttributeLogicalName}\",\"IsSortableEnabled\":{{\"Value\":{value.ToString().ToLower()},\"CanBeChanged\":true}}}}");
        }

        private static void SetSecuredWebApi(bool value)
        {
            WebApiPut($"{{\"LogicalName\":\"{AttributeLogicalName}\",\"IsSecured\":{value.ToString().ToLower()}}}");
        }

        private static string GetAudit()
        {
            return RetrieveAttribute().IsAuditEnabled?.Value.ToString() ?? "(null)";
        }

        private static string GetRequired()
        {
            return RetrieveAttribute().RequiredLevel?.Value.ToString() ?? "(null)";
        }

        private static string GetAdvFind()
        {
            return RetrieveAttribute().IsValidForAdvancedFind?.Value.ToString() ?? "(null)";
        }

        private static string GetSort()
        {
            return RetrieveAttribute().IsSortableEnabled?.Value.ToString() ?? "(null)";
        }

        private static string GetSecured()
        {
            return RetrieveAttribute().IsSecured.ToString();
        }

        private static void UpdateAttribute(AttributeMetadata attr)
        {
            App.Service.Execute(new UpdateAttributeRequest
            {
                EntityName = EntityLogicalName,
                Attribute = attr,
                MergeLabels = true
            });
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

        private static AttributeRequiredLevel ParseRequiredLevel(string level)
        {
            return level switch
            {
                "None" => AttributeRequiredLevel.None,
                "Recommended" => AttributeRequiredLevel.Recommended,
                "Required" => AttributeRequiredLevel.ApplicationRequired,
                _ => AttributeRequiredLevel.None
            };
        }

        private static void PrintCurrent(string label)
        {
            var attr = RetrieveAttribute();
            System.Console.WriteLine($"=== {label} ===");
            System.Console.WriteLine($"  Audit    = {attr.IsAuditEnabled?.Value}");
            System.Console.WriteLine($"  Required = {attr.RequiredLevel?.Value}");
            System.Console.WriteLine($"  AdvFind  = {attr.IsValidForAdvancedFind?.Value}");
            System.Console.WriteLine($"  Sort     = {attr.IsSortableEnabled?.Value}");
            System.Console.WriteLine($"  Secured  = {attr.IsSecured}");
        }

        private static void WriteHeader()
        {
            System.Console.WriteLine($"BigInt flag test on '{EntityLogicalName}.{AttributeLogicalName}'");
            System.Console.WriteLine();
        }
    }
}
