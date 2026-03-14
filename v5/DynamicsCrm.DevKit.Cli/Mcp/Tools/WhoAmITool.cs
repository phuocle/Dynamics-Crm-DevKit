using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Text;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;

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
            "Get the identity and environment info of the currently authenticated user.\n\n" +

            "RETURNS:\n" +
            "- UserId, FullName, DomainName (the authenticated user)\n" +
            "- BusinessUnitId (the user's business unit)\n" +
            "- OrganizationId (the Dataverse organization)\n" +
            "- Security Roles assigned to the user\n" +
            "- Environment URL currently connected to\n\n" +

            "WHEN TO USE:\n" +
            "- At the start of a session to confirm which user and environment you are connected to\n" +
            "- When troubleshooting permission errors to check which security roles the user has\n" +
            "- When you need the current user's ID for FetchXML filters (e.g. records owned by me)\n" +
            "- To verify the connection is working before running other tools")]
        public string whoami()
        {
            try
            {
                var response = (WhoAmIResponse)_serviceClient.Execute(new WhoAmIRequest());

                var sb = new StringBuilder(512);
                sb.AppendLine("# Who Am I");
                sb.AppendLine();
                sb.AppendLine("| Property | Value |");
                sb.AppendLine("| --- | --- |");
                sb.AppendLine($"| UserId | {response.UserId} |");
                sb.AppendLine($"| BusinessUnitId | {response.BusinessUnitId} |");
                sb.AppendLine($"| OrganizationId | {response.OrganizationId} |");

                AppendUserDetails(sb, response.UserId);
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
                sb.AppendLine($"| EnvironmentUrl | {_serviceClient.ConnectedOrgUriActual} |");
                sb.AppendLine();
            }
            catch
            {
                sb.AppendLine($"| EnvironmentUrl | {_serviceClient.ConnectedOrgUriActual} |");
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
    }
}
