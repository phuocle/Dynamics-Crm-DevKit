using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System.Collections.Generic;
using System.Runtime.CompilerServices;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal sealed record ComponentDefinition(string Label, string PrimaryEntityName);

    internal static class SolutionComponentDefinitions
    {
        internal const int FirstDynamicComponentType = 10000;
        private static readonly ConditionalWeakTable<IOrganizationService, DefinitionCache> Cache = new();

        // Invocation workers share the organization service for the lifetime of a connection.
        internal static IReadOnlyDictionary<int, ComponentDefinition> Get(IOrganizationService orgService) =>
            Cache.GetValue(orgService, _ => new DefinitionCache()).Get(orgService);

        private sealed class DefinitionCache
        {
            private readonly object _gate = new();
            private IReadOnlyDictionary<int, ComponentDefinition> _definitions;

            internal IReadOnlyDictionary<int, ComponentDefinition> Get(IOrganizationService orgService)
            {
                lock (_gate)
                    return _definitions ??= Load(orgService);
            }
        }

        private static Dictionary<int, ComponentDefinition> Load(IOrganizationService orgService)
        {
            var definitions = new Dictionary<int, ComponentDefinition>();
            var query = new QueryExpression("solutioncomponentdefinition")
            {
                ColumnSet = new ColumnSet("solutioncomponenttype", "primaryentityname", "name"),
                PageInfo = new PagingInfo { Count = 5000, PageNumber = 1 }
            };

            while (true)
            {
                var page = orgService.RetrieveMultiple(query);
                foreach (var row in page.Entities)
                {
                    var typeId = row.GetAttributeValue<int>("solutioncomponenttype");
                    if (typeId >= FirstDynamicComponentType)
                    {
                        definitions.TryAdd(typeId, new ComponentDefinition(row.GetAttributeValue<string>("name")?.Trim(),
                            row.GetAttributeValue<string>("primaryentityname")?.Trim().ToLowerInvariant()));
                    }
                }

                if (!page.MoreRecords)
                    return definitions;
                query.PageInfo.PageNumber++;
                query.PageInfo.PagingCookie = page.PagingCookie;
            }
        }
    }
}
