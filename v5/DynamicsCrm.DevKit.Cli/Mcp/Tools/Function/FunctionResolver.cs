using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using System;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Function
{
    /// <summary>
    /// Resolves a manage_function function_name input to a Custom API row.
    /// A GUID input means customapiid and nothing else (never the FxExpression
    /// id); otherwise resolution follows the shared display-name-first order:
    /// exact unique name, exact display name, contains display name, contains
    /// unique name — ambiguity is reported, never silently resolved.
    /// </summary>
    internal static class FunctionResolver
    {
        internal static ResolveResult<Entity> Resolve(IOrganizationService orgService, string functionName, string toolName)
        {
            var trimmed = functionName?.Trim();
            if (string.IsNullOrWhiteSpace(trimmed))
                return new ResolveResult<Entity> { Status = ResolveStatus.Error, Error = "function_name is required." };

            if (Guid.TryParse(trimmed, out var guid))
            {
                try
                {
                    var byId = orgService.Retrieve("customapi", guid,
                        new ColumnSet("customapiid", "uniquename", "displayname"));
                    return new ResolveResult<Entity>
                    {
                        Status = ResolveStatus.Ok,
                        Value = byId,
                        CanonicalName = byId.GetAttributeValue<string>("uniquename") ?? trimmed
                    };
                }
                catch (Exception)
                {
                    return new ResolveResult<Entity>
                    {
                        Status = ResolveStatus.NotFound,
                        Error = $"Custom API '{trimmed}' not found."
                    };
                }
            }

            return DisplayNameFirstResolver.ResolveDataverseRecord(
                orgService,
                trimmed,
                entityName: "customapi",
                idColumn: "customapiid",
                columns: new ColumnSet("customapiid", "uniquename", "displayname"),
                displayColumn: "displayname",
                logicalColumn: null,
                uniqueColumn: "uniquename",
                schemaColumn: null,
                kind: "customapi",
                ambiguousTag: null,
                notFoundTag: null,
                notFoundTip: null,
                retryParameterName: "function_name");
        }
    }
}
