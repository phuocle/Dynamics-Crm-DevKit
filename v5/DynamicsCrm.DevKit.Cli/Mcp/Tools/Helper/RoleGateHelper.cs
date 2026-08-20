using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>
    /// Re-query role membership on demand for dangerous/destructive MCP tools.
    /// Caching is intentionally avoided to keep the check honest: an admin's roles
    /// may be revoked mid-session and a stale positive cache would let the action
    /// through. The cost is one small FetchXml per gated call.
    /// </summary>
    internal static class RoleGateHelper
    {
        /// <summary>
        /// True iff the calling user (resolved via <see cref="Microsoft.Xrm.Sdk.Messages.WhoAmIRequest"/>)
        /// is directly assigned to a role whose name equals
        /// <see cref="DynamicsCrm.DevKit.Shared.Const.SystemAdministratorRoleName"/>.
        /// Comparison is case-insensitive and trimmed, matching how Dataverse stores role names.
        /// </summary>
        public static bool IsSystemAdministrator(ServiceClient serviceClient)
        {
            if (serviceClient == null) return false;

            var who = (WhoAmIResponse)serviceClient.Execute(new WhoAmIRequest());
            var userId = who.UserId;

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
                    </entity>
                </fetch>";

            var qResult = serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (qResult?.Entities == null) return false;

            var required = (DynamicsCrm.DevKit.Shared.Const.SystemAdministratorRoleName ?? "").Trim();
            if (required.Length == 0) return false;

            foreach (var role in qResult.Entities)
            {
                var name = role.GetAttributeValue<string>("name");
                if (string.IsNullOrEmpty(name)) continue;
                if (string.Equals(name.Trim(), required, System.StringComparison.OrdinalIgnoreCase))
                    return true;
            }
            return false;
        }

        /// <summary>
        /// Returns the directly-assigned role names for the calling user.
        /// Used by error messages to tell the user what they DO have when a gate rejects them.
        /// </summary>
        public static List<string> GetCurrentRoleNames(ServiceClient serviceClient)
        {
            var names = new List<string>();
            if (serviceClient == null) return names;

            var who = (WhoAmIResponse)serviceClient.Execute(new WhoAmIRequest());
            var userId = who.UserId;

            var fetchXml = $@"
                <fetch>
                    <entity name='role'>
                        <attribute name='name'/>
                        <link-entity name='systemuserroles' from='roleid' to='roleid'>
                            <filter>
                                <condition attribute='systemuserid' operator='eq' value='{userId}'/>
                            </filter>
                        </link-entity>
                        <order attribute='name'/>
                    </entity>
                </fetch>";

            var qResult = serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (qResult?.Entities == null) return names;

            foreach (var role in qResult.Entities)
            {
                var name = role.GetAttributeValue<string>("name");
                if (string.IsNullOrEmpty(name)) continue;
                names.Add(name.Trim());
            }
            return names;
        }

        /// <summary>
        /// One-call guard for mutation tools. Returns null when the calling user
        /// IS a System Administrator (caller proceeds); returns a pre-built
        /// <see cref="CallToolResult"/> error when not (caller returns it).
        /// Usage: <code>if (RoleGateHelper.EnsureSystemAdministrator(_serviceClient) is { } gate) return gate;</code>
        /// </summary>
        internal static CallToolResult EnsureSystemAdministrator(ServiceClient serviceClient)
        {
            if (IsSystemAdministrator(serviceClient))
                return null;

            const string requiredRoleName = DynamicsCrm.DevKit.Shared.Const.SystemAdministratorRoleName;
            var haveRoles = GetCurrentRoleNames(serviceClient);
            var haveList = haveRoles.Count > 0
                ? string.Join(", ", haveRoles)
                : "(no roles assigned)";

            return McpToolResults.Error(
                $"This action requires the '{requiredRoleName}' role. The calling user does not have it.",
                $"Ask a System Administrator to assign the '{requiredRoleName}' role to your user, then retry. Current roles on the calling user: {haveList}.");
        }
    }
}
