using Microsoft.PowerPlatform.Dataverse.Client;
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
            "Get information about the connected Dataverse environment. " +
            "Returns organization name, URL, version, language, currency, and current user details. " +
            "Use this to understand which environment you are connected to.")]
        public string get_environment_info()
        {
            try
            {
                var sb = new StringBuilder();
                sb.AppendLine("## Environment Information");
                sb.AppendLine();

                sb.AppendLine($"- **Organization URL**: {_serviceClient.ConnectedOrgUriActual}");
                sb.AppendLine($"- **Organization ID**: {_serviceClient.ConnectedOrgId}");
                sb.AppendLine($"- **Organization Name**: {_serviceClient.ConnectedOrgFriendlyName}");
                sb.AppendLine($"- **Organization Unique Name**: {_serviceClient.ConnectedOrgUniqueName}");
                sb.AppendLine($"- **Organization Version**: {_serviceClient.ConnectedOrgVersion}");
                sb.AppendLine($"- **Tenant ID**: {_serviceClient.TenantId}");
                sb.AppendLine($"- **Environment ID**: {_serviceClient.EnvironmentId}");

                try
                {
                    var orgFetch = @"
<fetch top='1'>
  <entity name='organization'>
    <attribute name='name' />
    <attribute name='languagecode' />
    <attribute name='basecurrencyid' />
    <attribute name='isauditenabled' />
    <attribute name='fiscalcalendarstart' />
  </entity>
</fetch>";
                    var orgResult = _serviceClient.RetrieveMultiple(new FetchExpression(orgFetch));
                    if (orgResult.Entities.Count > 0)
                    {
                        var org = orgResult.Entities[0];
                        var langCode = org.GetAttributeValue<int?>("languagecode");
                        var currency = org.GetAttributeValue<EntityReference>("basecurrencyid");
                        var auditEnabled = org.GetAttributeValue<bool?>("isauditenabled");

                        if (langCode != null) sb.AppendLine($"- **Language Code**: {langCode}");
                        if (currency != null) sb.AppendLine($"- **Base Currency**: {currency.Name ?? currency.Id.ToString()}");
                        if (auditEnabled != null) sb.AppendLine($"- **Audit Enabled**: {(auditEnabled.Value ? "Yes" : "No")}");
                    }
                }
                catch { }

                sb.AppendLine();
                sb.AppendLine("### Current User");

                try
                {
                    var whoAmI = _serviceClient.Execute(new Microsoft.Crm.Sdk.Messages.WhoAmIRequest()) as Microsoft.Crm.Sdk.Messages.WhoAmIResponse;
                    if (whoAmI != null)
                    {
                        sb.AppendLine($"- **User ID**: {whoAmI.UserId}");
                        sb.AppendLine($"- **Business Unit ID**: {whoAmI.BusinessUnitId}");
                        sb.AppendLine($"- **Organization ID**: {whoAmI.OrganizationId}");

                        try
                        {
                            var user = _serviceClient.Retrieve("systemuser", whoAmI.UserId,
                                new ColumnSet("fullname", "internalemailaddress", "domainname"));
                            var fullName = user.GetAttributeValue<string>("fullname");
                            var email = user.GetAttributeValue<string>("internalemailaddress");
                            var domain = user.GetAttributeValue<string>("domainname");
                            if (fullName != null) sb.AppendLine($"- **Full Name**: {fullName}");
                            if (email != null) sb.AppendLine($"- **Email**: {email}");
                            if (domain != null) sb.AppendLine($"- **Domain Name**: {domain}");
                        }
                        catch { }
                    }
                }
                catch { }

                sb.AppendLine();
                sb.AppendLine("### Installed Solutions (custom)");
                sb.AppendLine();

                try
                {
                    var solFetch = @"
<fetch top='50'>
  <entity name='solution'>
    <attribute name='friendlyname' />
    <attribute name='uniquename' />
    <attribute name='version' />
    <attribute name='ismanaged' />
    <attribute name='installedon' />
    <filter>
      <condition attribute='isvisible' operator='eq' value='1' />
      <condition attribute='uniquename' operator='ne' value='System' />
      <condition attribute='uniquename' operator='ne' value='Active' />
      <condition attribute='uniquename' operator='ne' value='Basic' />
      <condition attribute='uniquename' operator='ne' value='ActivityFeedsCore' />
    </filter>
    <order attribute='friendlyname' />
  </entity>
</fetch>";
                    var solResult = _serviceClient.RetrieveMultiple(new FetchExpression(solFetch));

                    if (solResult.Entities.Count > 0)
                    {
                        sb.AppendLine("| Name | Unique Name | Version | Managed | Installed On |");
                        sb.AppendLine("| --- | --- | --- | --- | --- |");

                        foreach (var sol in solResult.Entities)
                        {
                            var friendlyName = sol.GetAttributeValue<string>("friendlyname") ?? "";
                            var uniqueName = sol.GetAttributeValue<string>("uniquename") ?? "";
                            var version = sol.GetAttributeValue<string>("version") ?? "";
                            var isManaged = sol.GetAttributeValue<bool?>("ismanaged") == true ? "Yes" : "No";
                            var installedOn = sol.GetAttributeValue<DateTime?>("installedon")?.ToString("yyyy-MM-dd") ?? "";
                            sb.AppendLine($"| {friendlyName} | {uniqueName} | {version} | {isManaged} | {installedOn} |");
                        }
                    }
                    else
                    {
                        sb.AppendLine("No custom solutions found.");
                    }
                }
                catch { }

                return sb.ToString();
            }
            catch (Exception ex)
            {
                return $"Error getting environment info: {ex.Message}";
            }
        }
    }
}
