using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>
    /// Centralized helper for resolving a Dataverse solution's publisher prefix from a solution name input.
    /// Search order: contains friendlyname (display name) -> contains uniquename (logical/unique name).
    /// Returns both string prefix (customizationprefix) and integer prefix (customizationoptionvalueprefix).
    /// </summary>
    internal static class SolutionResolverHelper
    {
        internal static SolutionResolveResult Resolve(ServiceClient serviceClient, string solutionInput)
        {
            if (serviceClient == null)
                return SolutionResolveResult.Fail("IOrganizationService is null.");
            if (string.IsNullOrWhiteSpace(solutionInput))
                return SolutionResolveResult.Fail("Solution name cannot be empty.");

            solutionInput = solutionInput.Trim();

            try
            {
                var resolved = DisplayNameFirstResolver.ResolveDataverseRecord(
                    serviceClient,
                    solutionInput,
                    entityName: "solution",
                    idColumn: "solutionid",
                    columns: new ColumnSet("solutionid", "publisherid", "uniquename", "friendlyname"),
                    displayColumn: "friendlyname",
                    logicalColumn: null,
                    uniqueColumn: "uniquename",
                    schemaColumn: null,
                    kind: "solution",
                    ambiguousTag: "[AmbiguousSolution]",
                    notFoundTag: "[NotFoundSolution]",
                    notFoundTip: "Tip: Use get_solution_components to list available solutions.",
                    retryParameterName: "solution_name");

                if (!resolved.IsSuccess)
                    return SolutionResolveResult.Fail(resolved.Error);

                return BuildResult(serviceClient, resolved.Value, solutionInput);
            }
            catch (Exception ex)
            {
                return SolutionResolveResult.Fail($"Failed to resolve solution '{solutionInput}': {ex.Message}");
            }
        }

        private static SolutionResolveResult BuildResult(ServiceClient serviceClient, Entity sol, string solutionInput)
        {
            var publisherRef = sol.GetAttributeValue<EntityReference>("publisherid");
            if (publisherRef == null)
                return SolutionResolveResult.Fail($"Solution '{solutionInput}' found but has no publisher.");

            try
            {
                var publisher = serviceClient.Retrieve("publisher", publisherRef.Id,
                    new ColumnSet("customizationprefix", "customizationoptionvalueprefix"));
                var prefix = publisher.GetAttributeValue<string>("customizationprefix");
                var optionValuePrefix = publisher.GetAttributeValue<int>("customizationoptionvalueprefix");
                if (string.IsNullOrWhiteSpace(prefix))
                    return SolutionResolveResult.Fail($"Solution '{solutionInput}' found but publisher has no customization prefix.");

                return SolutionResolveResult.Ok(
                    prefix,
                    optionValuePrefix,
                    publisherRef.Id,
                    sol.GetAttributeValue<string>("uniquename"),
                    sol.GetAttributeValue<string>("friendlyname"));
            }
            catch (Exception ex)
            {
                return SolutionResolveResult.Fail($"Solution '{solutionInput}' found but failed to retrieve publisher: {ex.Message}");
            }
        }
    }

    internal sealed class SolutionResolveResult
    {
        /// <summary>Publisher customization prefix (e.g. "v4").</summary>
        public string Prefix { get; private set; }

        /// <summary>Publisher option value prefix (e.g. 10000). Used for auto-assigning picklist values.</summary>
        public int OptionValuePrefix { get; private set; }

        /// <summary>Publisher record id for components that require publisherid.</summary>
        public Guid PublisherId { get; private set; }

        /// <summary>Solution unique name (logical name).</summary>
        public string UniqueName { get; private set; }

        /// <summary>Solution friendly name (display name).</summary>
        public string FriendlyName { get; private set; }

        /// <summary>Error message if resolution failed; null on success.</summary>
        public string Error { get; private set; }

        /// <summary>True if resolution succeeded.</summary>
        public bool IsSuccess => Error == null;

        internal static SolutionResolveResult Ok(string prefix, int optionValuePrefix, Guid publisherId, string uniqueName, string friendlyName) =>
            new()
            {
                Prefix = prefix,
                OptionValuePrefix = optionValuePrefix,
                PublisherId = publisherId,
                UniqueName = uniqueName,
                FriendlyName = friendlyName
            };

        internal static SolutionResolveResult Fail(string error) =>
            new() { Error = error };
    }
}
