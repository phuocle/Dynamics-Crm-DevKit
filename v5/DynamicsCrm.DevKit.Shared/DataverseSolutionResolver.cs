using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Linq;

namespace DynamicsCrm.DevKit.Shared
{
    /// <summary>
    /// Shared helper for resolving a Dataverse solution's publisher prefix from a solution name input.
    /// Supports exact uniquename match, exact friendlyname match, and fuzzy contains match.
    /// Used by MCP tools (upsert_table, upsert_column) and any component that needs to resolve
    /// a publisher prefix from a solution name.
    /// </summary>
    public static class DataverseSolutionResolver
    {
        /// <summary>
        /// Resolves the publisher prefix and unique name from a solution input string.
        /// Search order: exact uniquename → exact friendlyname → contains friendlyname.
        /// </summary>
        /// <param name="service">An IOrganizationService instance (e.g., ServiceClient).</param>
        /// <param name="solutionInput">Solution unique name or display name (partial match supported).</param>
        /// <returns>
        /// (Prefix, UniqueName, Error):
        ///   - On success: Prefix = publisher customization prefix, UniqueName = solution unique name, Error = null
        ///   - On failure: Prefix = null, UniqueName = null, Error = descriptive error message
        /// </returns>
        public static (string Prefix, string UniqueName, string Error) ResolveSolution(
            IOrganizationService service, string solutionInput)
        {
            if (service == null)
                return (null, null, "IOrganizationService is null.");
            if (string.IsNullOrWhiteSpace(solutionInput))
                return (null, null, "Solution name cannot be empty.");

            try
            {
                // Step 1: Exact match by uniquename
                var byUniqueName = new QueryExpression("solution")
                {
                    ColumnSet = new ColumnSet("publisherid", "uniquename", "friendlyname"),
                    Criteria = new FilterExpression
                    {
                        Conditions =
                        {
                            new ConditionExpression("uniquename", ConditionOperator.Equal, solutionInput)
                        }
                    }
                };
                var uniqueResults = service.RetrieveMultiple(byUniqueName).Entities;
                if (uniqueResults.Count == 1)
                {
                    var prefix = GetPublisherPrefix(service, uniqueResults[0]);
                    if (prefix == null)
                        return (null, null, $"Solution '{solutionInput}' found but has no publisher.");
                    return (prefix, uniqueResults[0].GetAttributeValue<string>("uniquename"), null);
                }

                // Step 2: Exact match by friendlyname (display name)
                var byDisplayName = new QueryExpression("solution")
                {
                    ColumnSet = new ColumnSet("publisherid", "uniquename", "friendlyname"),
                    Criteria = new FilterExpression
                    {
                        Conditions =
                        {
                            new ConditionExpression("friendlyname", ConditionOperator.Equal, solutionInput)
                        }
                    }
                };
                var displayResults = service.RetrieveMultiple(byDisplayName).Entities;

                // Step 3: Fuzzy contains match if no exact display name found
                if (displayResults.Count == 0)
                {
                    var byContains = new QueryExpression("solution")
                    {
                        ColumnSet = new ColumnSet("publisherid", "uniquename", "friendlyname"),
                        Criteria = new FilterExpression
                        {
                            Conditions =
                            {
                                new ConditionExpression("friendlyname", ConditionOperator.Like, $"%{solutionInput}%")
                            }
                        }
                    };
                    displayResults = service.RetrieveMultiple(byContains).Entities;
                }

                if (displayResults.Count == 0)
                    return (null, null,
                        $"Solution '{solutionInput}' not found (searched by unique name and display name).\n" +
                        $"Tip: Use get_solution_components to list available solutions.");

                if (displayResults.Count > 1)
                {
                    var names = string.Join(", ", displayResults.Select(e =>
                        $"'{e.GetAttributeValue<string>("uniquename")}' ({e.GetAttributeValue<string>("friendlyname")})"));
                    return (null, null,
                        $"Multiple solutions match '{solutionInput}': {names}.\n" +
                        $"Tip: Provide the exact unique name to disambiguate.");
                }

                var sol = displayResults[0];
                var resolvedPrefix = GetPublisherPrefix(service, sol);
                if (resolvedPrefix == null)
                    return (null, null, $"Solution '{solutionInput}' found but has no publisher.");

                return (resolvedPrefix, sol.GetAttributeValue<string>("uniquename"), null);
            }
            catch (Exception ex)
            {
                return (null, null, $"Failed to resolve solution '{solutionInput}': {ex.Message}");
            }
        }

        private static string GetPublisherPrefix(IOrganizationService service, Entity solutionEntity)
        {
            var publisherRef = solutionEntity.GetAttributeValue<EntityReference>("publisherid");
            if (publisherRef == null) return null;
            try
            {
                var publisher = service.Retrieve("publisher", publisherRef.Id,
                    new ColumnSet("customizationprefix"));
                return publisher.GetAttributeValue<string>("customizationprefix");
            }
            catch
            {
                return null;
            }
        }
    }
}
