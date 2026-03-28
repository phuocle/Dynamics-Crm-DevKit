using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class WhoAmITool
    {
        private readonly ServiceClient _serviceClient;

        public WhoAmITool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "whoami", Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Get the identity of the currently authenticated user, environment info, and access token.\n\n" +

            "RETURNS:\n" +
            "- UserId, FullName, DomainName, Email (the authenticated user)\n" +
            "- BusinessUnitId (the user's business unit)\n" +
            "- OrganizationId (the Dataverse organization)\n" +
            "- Security Roles assigned to the user\n" +
            "- Environment URL, version, friendly name, unique name\n" +
            "- TenantId, EnvironmentId\n" +
            "- AccessToken (current OAuth bearer token)\n" +
            "- Base language, base currency, fiscal settings, audit status\n\n" +

            "WHEN TO USE:\n" +
            "- At the start of a session to confirm which user and environment you are connected to\n" +
            "- When troubleshooting permission errors to check which security roles the user has\n" +
            "- When you need the current user's ID for FetchXML filters (e.g. records owned by me)\n" +
            "- To verify the connection is working before running other tools\n" +
            "- When you need the Dataverse version for feature compatibility\n" +
            "- When troubleshooting locale or currency issues\n" +
            "- When you need the access token for direct Web API calls")]
        public string whoami()
        {
            try
            {
                var response = (WhoAmIResponse)_serviceClient.Execute(new WhoAmIRequest());

                var sb = new StringBuilder(1024);
                sb.AppendLine("# Who Am I");
                sb.AppendLine();

                sb.AppendLine("## User Info");
                sb.AppendLine();
                sb.AppendLine("| Property | Value |");
                sb.AppendLine("| --- | --- |");
                sb.AppendLine($"| UserId | {response.UserId} |");
                sb.AppendLine($"| BusinessUnitId | {response.BusinessUnitId} |");
                sb.AppendLine($"| OrganizationId | {response.OrganizationId} |");

                AppendUserDetails(sb, response.UserId);
                AppendEnvironmentInfo(sb);
                AppendSecurityRoles(sb, response.UserId);

                return sb.ToString();
            }
            catch (Exception ex)
            {
                return $"Error: Failed to execute WhoAmI: {ex.Message}";
            }
        }

        private void AppendUserDetails(StringBuilder sb, Guid userId)
        {
            try
            {
                var user = _serviceClient.Retrieve("systemuser", userId,
                    new ColumnSet("fullname", "domainname", "internalemailaddress"));

                var fullName = user.GetAttributeValue<string>("fullname") ?? "";
                var domain = user.GetAttributeValue<string>("domainname") ?? "";
                var email = user.GetAttributeValue<string>("internalemailaddress") ?? "";

                sb.AppendLine($"| FullName | {fullName} |");
                sb.AppendLine($"| DomainName | {domain} |");
                if (!string.IsNullOrEmpty(email))
                    sb.AppendLine($"| Email | {email} |");
                sb.AppendLine();
            }
            catch
            {
                sb.AppendLine();
            }
        }

        private void AppendEnvironmentInfo(StringBuilder sb)
        {
            try
            {
                sb.AppendLine("## Environment Info");
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

                try
                {
                    var token = _serviceClient.CurrentAccessToken;
                    if (!string.IsNullOrEmpty(token))
                        sb.AppendLine($"| AccessToken | {token} |");
                }
                catch
                {
                }

                AppendOrganizationDetails(sb);
            }
            catch
            {
                sb.AppendLine();
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
                if (result.Entities.Count == 0)
                {
                    sb.AppendLine();
                    return;
                }

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
                sb.AppendLine();
            }
        }

        private void AppendSecurityRoles(StringBuilder sb, Guid userId)
        {
            try
            {
                var fetchXml = $@"
                    <fetch>
                        <entity name='role'>
                            <attribute name='name'/>
                            <attribute name='roleid'/>
                            <link-entity name='systemuserroles' from='roleid' to='roleid'>
                                <filter>
                                    <condition attribute='systemuserid' operator='eq' value='{userId}'/>
                                </filter>
                            </link-entity>
                            <order attribute='name'/>
                        </entity>
                    </fetch>";

                var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));

                if (result.Entities.Count > 0)
                {
                    sb.AppendLine($"## Security Roles — {result.Entities.Count}");
                    sb.AppendLine();
                    foreach (var role in result.Entities)
                    {
                        var name = role.GetAttributeValue<string>("name") ?? "";
                        sb.AppendLine($"- {name}");
                    }
                    sb.AppendLine();
                }
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
