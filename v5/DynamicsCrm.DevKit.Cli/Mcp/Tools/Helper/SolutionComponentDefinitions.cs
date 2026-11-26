using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Runtime.CompilerServices;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal sealed record ComponentDefinition(string Label, string PrimaryEntityName);

    internal static class SolutionComponentDefinitions
    {
        internal const int FirstDynamicComponentType = 10000;
        private static readonly ConditionalWeakTable<IOrganizationService, DefinitionCache> Cache = new();

        // Display names for the fixed Dataverse component types.
        internal static readonly IReadOnlyDictionary<int, string> FixedTypeNames = new Dictionary<int, string>()
        {
            { 1,   "Entity" },
            { 2,   "Attribute" },
            { 3,   "Relationship" },
            { 4,   "Attribute Picklist Value" },
            { 5,   "Attribute Lookup Value" },
            { 6,   "View Attribute" },
            { 7,   "Localized Label" },
            { 9,   "Option Set" },
            { 10,  "Entity Relationship" },
            { 13,  "Managed Property" },
            { 14,  "Entity Key" },
            { 16,  "Privilege" },
            { 18,  "Index" },
            { 20,  "Role" },
            { 21,  "Role Privilege" },
            { 22,  "Display String" },
            { 23,  "Display String Map" },
            { 24,  "Form" },
            { 25,  "Organization" },
            { 26,  "Saved Query (View)" },
            { 29,  "Workflow" },
            { 31,  "Report" },
            { 32,  "Report Entity" },
            { 33,  "Report Category" },
            { 34,  "Report Visibility" },
            { 35,  "Attachment" },
            { 36,  "Email Template" },
            { 37,  "Contract Template" },
            { 38,  "KB Article Template" },
            { 39,  "Mail Merge Template" },
            { 44,  "Duplicate Rule" },
            { 45,  "Duplicate Rule Condition" },
            { 46,  "Entity Map" },
            { 47,  "Attribute Map" },
            { 48,  "Ribbon Command" },
            { 49,  "Ribbon Context Group" },
            { 50,  "Ribbon Customization" },
            { 52,  "Ribbon Rule" },
            { 53,  "Ribbon Tab To Command Map" },
            { 55,  "Ribbon Diff" },
            { 59,  "Chart (Visualization)" },
            { 60,  "System Form" },
            { 61,  "Web Resource" },
            { 62,  "Site Map" },
            { 63,  "Connection Role" },
            { 64,  "Complex Control" },
            { 65,  "Hierarchy Rule" },
            { 66,  "Custom Control" },
            { 68,  "Custom Control Default Config" },
            { 70,  "Field Security Profile" },
            { 71,  "Field Permission" },
            { 80,  "Model Driven App" },
            { 90,  "Plugin Type" },
            { 91,  "Plugin Assembly" },
            { 92,  "SDK Message Processing Step" },
            { 93,  "SDK Message Processing Step Image" },
            { 95,  "Service Endpoint" },
            { 150, "Routing Rule" },
            { 151, "Routing Rule Item" },
            { 152, "SLA" },
            { 153, "SLA Item" },
            { 154, "Convert Rule" },
            { 155, "Convert Rule Item" },
            { 161, "Mobile Offline Profile" },
            { 162, "Mobile Offline Profile Item" },
            { 165, "Similarity Rule" },
            { 166, "Data Source Mapping" },
            { 201, "SDK Message" },
            { 202, "SDK Message Filter" },
            { 208, "Import Map" },
            { 300, "Canvas App" },
            { 371, "Connector" },
            { 380, "Environment Variable Definition" },
            { 381, "Environment Variable Value" },
            { 400, "AI Configuration" },
            { 401, "AI Project" },
            { 402, "AI Project Type" },
            { 418, "Dataflow" },
            { 430, "Entity Analytics Config" },
            { 431, "Attribute Image Config" },
            { 432, "Entity Image Config" },
            { 181,   "SDK Message Pair" },
        };

        // Invocation workers share the organization service for the lifetime of a connection.
        internal static IReadOnlyDictionary<int, ComponentDefinition> Get(IOrganizationService orgService) =>
            Cache.GetValue(orgService, _ => new DefinitionCache()).Get(orgService);

        internal static (int TypeId, string PrimaryEntityName) ResolveType(IOrganizationService orgService, string input)
        {
            if (int.TryParse(input, NumberStyles.Integer, CultureInfo.InvariantCulture, out var typeId))
            {
                if (typeId < FirstDynamicComponentType)
                    return typeId > 0 ? (typeId, FixedRecordEntity(typeId)) : default;
                return Get(orgService).TryGetValue(typeId, out var definition)
                    ? (typeId, definition.PrimaryEntityName)
                    : default;
            }

            var normalized = NormalizeTypeName(input);
            if (normalized.Length == 0)
                return default;

            // Recognize common names that differ from the Dataverse component labels.
            normalized = normalized switch
            {
                "cloudflow" => "workflow",
                "securityrole" => "role",
                "table" => "entity",
                "globaloptionset" or "globalchoice" => "optionset",
                _ => normalized
            };
            var fixedIds = FixedTypeNames.Where(pair => NormalizeTypeName(pair.Value) == normalized)
                .Select(pair => pair.Key).Take(2).ToArray();
            if (fixedIds.Length == 1)
                return (fixedIds[0], FixedRecordEntity(fixedIds[0]));
            if (fixedIds.Length > 1)
                return default;

            var matches = Get(orgService).Where(pair => NormalizeTypeName(pair.Value.Label) == normalized ||
                NormalizeTypeName(pair.Value.PrimaryEntityName) == normalized).Take(2).ToArray();
            return matches.Length == 1 ? (matches[0].Key, matches[0].Value.PrimaryEntityName) : default;
        }

        private static string FixedRecordEntity(int typeId) => typeId switch
        {
            20 => "role",
            29 => "workflow",
            _ => null
        };

        private static string NormalizeTypeName(string value) => value == null
            ? ""
            : new string(value.Where(char.IsLetterOrDigit).ToArray()).ToLowerInvariant();

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
