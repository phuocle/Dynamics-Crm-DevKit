using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

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

        [McpServerTool(Name = "whoami", Title = "Get current user identity & environment info",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(WhoAmIResult)),
        Description(
            "Get the identity of the currently authenticated user, environment info, and access token.\n\n" +

            "RETURNS:\n" +
            "- UserId, FullName, DomainName, Email (the authenticated user)\n" +
            "- BusinessUnitId (the user's business unit)\n" +
            "- OrganizationId (the Dataverse organization)\n" +
            "- Security Roles assigned to the user\n" +
            "- Environment URL, version, friendly name, unique name\n" +
            "- TenantId, EnvironmentId\n" +
            "- AccessToken (current OAuth bearer token, only when include_token=true)\n" +
            "- Base language, base currency, fiscal settings, audit status\n\n" +

            "WHEN TO USE:\n" +
            "- At the start of a session to confirm which user and environment you are connected to\n" +
            "- When troubleshooting permission errors to check which security roles the user has\n" +
            "- When you need the current user's ID for FetchXML filters (e.g. records owned by me)\n" +
            "- To verify the connection is working before running other tools\n" +
            "- When you need the Dataverse version for feature compatibility\n" +
            "- When troubleshooting locale or currency issues\n" +
            "- When you need the access token for direct Web API calls")]
        public CallToolResult whoami(
            [Description(
                "true: include the OAuth access token in the response (adds ~400 tokens). " +
                "false (default): omit access token. " +
                "Only set to true when you need to make direct Web API calls."
            )] bool include_token = false)
        {
            try
            {
                var response = (WhoAmIResponse)_serviceClient.Execute(new WhoAmIRequest());

                var structured = new WhoAmIResult
                {
                    UserId = response.UserId.ToString(),
                    BusinessUnitId = response.BusinessUnitId.ToString(),
                    OrganizationId = response.OrganizationId.ToString(),
                    EnvironmentUrl = _serviceClient.ConnectedOrgUriActual?.ToString(),
                    Version = _serviceClient.ConnectedOrgVersion?.ToString(),
                    OrgFriendlyName = _serviceClient.ConnectedOrgFriendlyName,
                    OrgUniqueName = _serviceClient.ConnectedOrgUniqueName,
                    OrgId = _serviceClient.ConnectedOrgId.ToString(),
                    TenantId = _serviceClient.TenantId.ToString(),
                    EnvironmentId = _serviceClient.EnvironmentId.ToString()
                };

                // User details
                PopulateUserDetails(structured, response.UserId);

                // Organization details
                PopulateOrgDetails(structured);

                // Access token
                if (include_token)
                {
                    try { structured.AccessToken = _serviceClient.CurrentAccessToken; }
                    catch { }
                }

                // Security roles
                PopulateRoles(structured, response.UserId);

                // Build compact text
                var text = BuildCompactText(structured);

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = text }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }
            catch (Exception ex)
            {
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = $"Error: Failed to execute WhoAmI: {ex.Message}" }],
                    IsError = true
                };
            }
        }

        private void PopulateUserDetails(WhoAmIResult result, Guid userId)
        {
            try
            {
                var user = _serviceClient.Retrieve("systemuser", userId,
                    new ColumnSet("fullname", "domainname", "internalemailaddress"));
                result.FullName = user.GetAttributeValue<string>("fullname") ?? "";
                result.DomainName = user.GetAttributeValue<string>("domainname") ?? "";
                result.Email = user.GetAttributeValue<string>("internalemailaddress") ?? "";
            }
            catch { }
        }

        private void PopulateOrgDetails(WhoAmIResult result)
        {
            try
            {
                var query = new QueryExpression("organization")
                {
                    ColumnSet = new ColumnSet(
                        "name", "languagecode", "basecurrencyid",
                        "fiscalcalendarstart", "isauditenabled"),
                    TopCount = 1
                };

                var qResult = _serviceClient.RetrieveMultiple(query);
                if (qResult.Entities.Count == 0) return;

                var org = qResult.Entities[0];

                var languageCode = org.GetAttributeValue<int?>("languagecode");
                if (languageCode.HasValue)
                    result.Language = $"{languageCode} ({GetLanguageName(languageCode.Value)})";

                var currency = org.GetAttributeValue<EntityReference>("basecurrencyid");
                if (currency != null)
                    result.Currency = currency.Name ?? currency.Id.ToString();

                var fiscalStart = org.GetAttributeValue<DateTime?>("fiscalcalendarstart");
                if (fiscalStart.HasValue)
                    result.FiscalStart = fiscalStart.Value.ToString("yyyy-MM-dd");

                result.AuditEnabled = org.GetAttributeValue<bool?>("isauditenabled");
            }
            catch { }
        }

        private void PopulateRoles(WhoAmIResult result, Guid userId)
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

                var qResult = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                foreach (var role in qResult.Entities)
                {
                    var name = role.GetAttributeValue<string>("name") ?? "";
                    if (!string.IsNullOrEmpty(name))
                        result.Roles.Add(name);
                }
            }
            catch { }
        }

        private static string BuildCompactText(WhoAmIResult r)
        {
            var sb = new StringBuilder(1024);

            sb.AppendLine("[User]");
            sb.AppendLine($"UserId: {r.UserId}");
            sb.AppendLine($"BusinessUnitId: {r.BusinessUnitId}");
            sb.AppendLine($"OrganizationId: {r.OrganizationId}");
            if (!string.IsNullOrEmpty(r.FullName)) sb.AppendLine($"FullName: {r.FullName}");
            if (!string.IsNullOrEmpty(r.DomainName)) sb.AppendLine($"DomainName: {r.DomainName}");
            if (!string.IsNullOrEmpty(r.Email)) sb.AppendLine($"Email: {r.Email}");
            sb.AppendLine();

            sb.AppendLine("[Environment]");
            if (!string.IsNullOrEmpty(r.EnvironmentUrl)) sb.AppendLine($"Url: {r.EnvironmentUrl}");
            if (!string.IsNullOrEmpty(r.Version)) sb.AppendLine($"Version: {r.Version}");
            sb.AppendLine($"OrgName: {r.OrgFriendlyName} ({r.OrgUniqueName})");
            sb.AppendLine($"OrgId: {r.OrgId}");
            sb.AppendLine($"TenantId: {r.TenantId}");
            sb.AppendLine($"EnvironmentId: {r.EnvironmentId}");
            if (!string.IsNullOrEmpty(r.AccessToken)) sb.AppendLine($"AccessToken: {r.AccessToken}");
            if (!string.IsNullOrEmpty(r.Language)) sb.AppendLine($"Language: {r.Language}");
            if (!string.IsNullOrEmpty(r.Currency)) sb.AppendLine($"Currency: {r.Currency}");
            if (!string.IsNullOrEmpty(r.FiscalStart)) sb.AppendLine($"FiscalStart: {r.FiscalStart}");
            if (r.AuditEnabled.HasValue) sb.AppendLine($"AuditEnabled: {(r.AuditEnabled.Value ? "Yes" : "No")}");
            sb.AppendLine();

            if (r.Roles.Count > 0)
            {
                sb.AppendLine($"[Roles] {r.Roles.Count} total");
                foreach (var role in r.Roles)
                    sb.AppendLine($"- {role}");
            }

            return sb.ToString();
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
