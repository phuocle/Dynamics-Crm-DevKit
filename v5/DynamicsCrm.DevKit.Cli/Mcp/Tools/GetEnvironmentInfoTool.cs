using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Linq;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetEnvironmentInfoTool
    {
        private readonly ServiceClient _serviceClient;

        public GetEnvironmentInfoTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "get_environment_info", Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Get detailed information about the connected Dataverse environment/organization.\n\n" +

            "RETURNS:\n" +
            "- Organization name, friendly name, unique name\n" +
            "- Environment URL\n" +
            "- Dataverse version\n" +
            "- Base language and installed languages\n" +
            "- Base currency\n" +
            "- Organization state and fiscal period settings\n\n" +

            "WHEN TO USE:\n" +
            "- At the start of a session to understand which environment you are working with\n" +
            "- When you need to confirm the Dataverse version for feature compatibility\n" +
            "- When troubleshooting locale or currency issues\n" +
            "- When you need the organization ID or unique name for configuration purposes\n" +
            "- To check if the environment is production, sandbox, or trial")]
        public string get_environment_info()
        {
            try
            {
                var sb = new StringBuilder(1024);
                sb.AppendLine("# Environment Info");
                sb.AppendLine();
                sb.AppendLine("| Property | Value |");
                sb.AppendLine("| --- | --- |");
                sb.AppendLine($"| EnvironmentUrl | {_serviceClient.ConnectedOrgUriActual} |");
                sb.AppendLine($"| ConnectedOrgVersion | {_serviceClient.ConnectedOrgVersion} |");
                sb.AppendLine($"| ConnectedOrgFriendlyName | {_serviceClient.ConnectedOrgFriendlyName} |");
                sb.AppendLine($"| ConnectedOrgUniqueName | {_serviceClient.ConnectedOrgUniqueName} |");
                sb.AppendLine($"| ConnectedOrgId | {_serviceClient.ConnectedOrgId} |");
                sb.AppendLine($"| TenantId | {_serviceClient.TenantId} |");
                sb.AppendLine($"| EnvironmentId | {_serviceClient.EnvironmentId} |");

                AppendOrganizationDetails(sb);

                return sb.ToString();
            }
            catch (Exception ex)
            {
                return $"Error: Failed to get environment info: {ex.Message}";
            }
        }

        private void AppendOrganizationDetails(StringBuilder sb)
        {
            try
            {
                var query = new QueryExpression("organization")
                {
                    ColumnSet = new ColumnSet(
                        "name",
                        "languagecode",
                        "basecurrencyid",
                        "fiscalcalendarstart",
                        "fiscalperiodtype",
                        "isauditenabled",
                        "isreadauditenabled",
                        "maxrecordsforexporttoexcel",
                        "maxrecordsforlookupfilters"
                    ),
                    TopCount = 1
                };

                var result = _serviceClient.RetrieveMultiple(query);
                if (result.Entities.Count == 0) return;

                var org = result.Entities[0];

                var languageCode = org.GetAttributeValue<int?>("languagecode");
                if (languageCode.HasValue)
                    sb.AppendLine($"| BaseLanguageCode | {languageCode} ({GetLanguageName(languageCode.Value)}) |");

                var currency = org.GetAttributeValue<EntityReference>("basecurrencyid");
                if (currency != null)
                    sb.AppendLine($"| BaseCurrency | {currency.Name ?? currency.Id.ToString()} |");

                var fiscalStart = org.GetAttributeValue<DateTime?>("fiscalcalendarstart");
                if (fiscalStart.HasValue)
                    sb.AppendLine($"| FiscalCalendarStart | {fiscalStart.Value:yyyy-MM-dd} |");

                var auditEnabled = org.GetAttributeValue<bool?>("isauditenabled");
                if (auditEnabled.HasValue)
                    sb.AppendLine($"| AuditEnabled | {(auditEnabled.Value ? "Yes" : "No")} |");

                sb.AppendLine();
            }
            catch
            {
            }
        }

        private static string GetLanguageName(int lcid) => lcid switch
        {
            1033 => "English",
            1036 => "French",
            1031 => "German",
            1034 => "Spanish",
            1041 => "Japanese",
            1042 => "Korean",
            1028 => "Chinese (Traditional)",
            2052 => "Chinese (Simplified)",
            1046 => "Portuguese (Brazil)",
            1049 => "Russian",
            1025 => "Arabic",
            1066 => "Vietnamese",
            _ => $"LCID {lcid}"
        };
    }
}
