using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>
    /// Centralized helper for resolving a Dataverse solution's publisher prefix from a solution name input.
    /// Search order: exact uniquename → exact friendlyname → contains friendlyname → contains uniquename.
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
                // Step 1: Exact match by uniquename (logical name)
                var sol = QuerySingle(serviceClient, "uniquename", ConditionOperator.Equal, solutionInput);
                if (sol != null)
                    return BuildResult(serviceClient, sol, solutionInput);

                // Step 2: Exact match by friendlyname (display name)
                sol = QuerySingle(serviceClient, "friendlyname", ConditionOperator.Equal, solutionInput);
                if (sol != null)
                    return BuildResult(serviceClient, sol, solutionInput);

                // Step 3: Contains match by friendlyname (display name)
                var results = QueryMultiple(serviceClient, "friendlyname", ConditionOperator.Like, $"%{solutionInput}%");
                if (results.Length == 1)
                    return BuildResult(serviceClient, results[0], solutionInput);
                if (results.Length > 1)
                    return AmbiguousResult(solutionInput, results);

                // Step 4: Contains match by uniquename (logical name)
                results = QueryMultiple(serviceClient, "uniquename", ConditionOperator.Like, $"%{solutionInput}%");
                if (results.Length == 1)
                    return BuildResult(serviceClient, results[0], solutionInput);
                if (results.Length > 1)
                    return AmbiguousResult(solutionInput, results);

                // Not found
                return SolutionResolveResult.Fail(
                    $"Solution '{solutionInput}' not found (searched by unique name and display name).\n" +
                    "Tip: Use get_solution_components to list available solutions.");
            }
            catch (Exception ex)
            {
                return SolutionResolveResult.Fail($"Failed to resolve solution '{solutionInput}': {ex.Message}");
            }
        }

        private static Entity QuerySingle(ServiceClient serviceClient, string field, ConditionOperator op, string value)
        {
            var query = new QueryExpression("solution")
            {
                ColumnSet = new ColumnSet("publisherid", "uniquename", "friendlyname"),
                Criteria = new FilterExpression
                {
                    Conditions = { new ConditionExpression(field, op, value) }
                }
            };
            var entities = serviceClient.RetrieveMultiple(query).Entities;
            return entities.Count == 1 ? entities[0] : null;
        }

        private static Entity[] QueryMultiple(ServiceClient serviceClient, string field, ConditionOperator op, string value)
        {
            var query = new QueryExpression("solution")
            {
                ColumnSet = new ColumnSet("publisherid", "uniquename", "friendlyname"),
                Criteria = new FilterExpression
                {
                    Conditions = { new ConditionExpression(field, op, value) }
                }
            };
            return serviceClient.RetrieveMultiple(query).Entities.ToArray();
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

        private static SolutionResolveResult AmbiguousResult(string solutionInput, Entity[] matches)
        {
            var names = string.Join(", ", matches.Select(e =>
                $"'{e.GetAttributeValue<string>("uniquename")}' ({e.GetAttributeValue<string>("friendlyname")})"));
            return SolutionResolveResult.Fail(
                $"Multiple solutions match '{solutionInput}': {names}.\n" +
                "Tip: Provide the exact unique name to disambiguate.");
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
