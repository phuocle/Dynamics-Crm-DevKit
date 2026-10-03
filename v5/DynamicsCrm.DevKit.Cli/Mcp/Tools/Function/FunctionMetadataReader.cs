using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Function
{
    /// <summary>
    /// Read-only graph reader for Dataverse Power Fx functions. A function is a
    /// Custom API row (customapi) linked to an FxExpression row (fxexpression)
    /// through customapi.fxexpressionid; its signature lives in
    /// customapirequestparameter / customapiresponseproperty rows.
    ///
    /// Discovery is membership-driven: only Custom APIs that actually have a
    /// linked expression are listed. The reader never infers "Function" from
    /// names, categories, or the isfunction flag alone.
    /// </summary>
    internal static class FunctionMetadataReader
    {
        internal const string SupportedActions = "list, detail, validate, invoke";

        // Custom API parameter types (same numbering as GetCustomApisTool).
        internal static readonly Dictionary<int, string> ParameterTypeMap = new()
        {
            [0] = "Boolean",
            [1] = "DateTime",
            [2] = "Decimal",
            [3] = "Entity",
            [4] = "EntityCollection",
            [5] = "EntityReference",
            [6] = "Float",
            [7] = "Integer",
            [8] = "Money",
            [9] = "Picklist",
            [10] = "String",
            [11] = "StringArray",
            [12] = "Guid"
        };

        // Types manage_function invoke can convert from JSON. Everything else
        // (Entity, EntityCollection, Money, Picklist, StringArray, ...) is
        // rejected at invoke time instead of guessed.
        internal static readonly HashSet<string> InvokableTypes = new(StringComparer.Ordinal)
        {
            "Boolean", "DateTime", "Decimal", "Float", "Integer", "String"
        };

        /// <summary>
        /// Query the function graph: Custom APIs that have a linked FxExpression.
        /// Returns up to <paramref name="limit"/> + 1 rows; callers use the extra
        /// row to compute hasMore and then truncate.
        /// </summary>
        internal static EntityCollection QueryFunctionCandidates(IOrganizationService orgService, int limit, bool includeManaged)
        {
            var filters = new StringBuilder();
            if (!includeManaged)
                filters.AppendLine("      <condition attribute='ismanaged' operator='eq' value='0'/>");

            var fetchXml = $@"<fetch top='{limit + 1}'>
  <entity name='customapi'>
    <attribute name='customapiid'/>
    <attribute name='uniquename'/>
    <attribute name='displayname'/>
    <attribute name='isfunction'/>
    <attribute name='bindingtype'/>
    <attribute name='boundentitylogicalname'/>
    <attribute name='ismanaged'/>
    <attribute name='statuscode'/>
    <filter type='and'>
      <condition attribute='fxexpressionid' operator='not-null'/>
{filters}    </filter>
    <order attribute='uniquename'/>
    <link-entity name='fxexpression' from='fxexpressionid' to='fxexpressionid' alias='fx'>
      <attribute name='fxexpressionid'/>
      <attribute name='uniquename'/>
    </link-entity>
  </entity>
</fetch>";

            return orgService.RetrieveMultiple(new FetchExpression(fetchXml));
        }

        /// <summary>
        /// Filter candidates by solution membership (solutioncomponent → solution),
        /// not by name prefix. Returns the ids of Custom APIs in the solution.
        /// </summary>
        internal static HashSet<Guid> QuerySolutionMemberIds(IOrganizationService orgService, string solutionUniqueName)
        {
            var fetchXml = $@"<fetch>
  <entity name='solutioncomponent'>
    <attribute name='objectid'/>
    <link-entity name='solution' from='solutionid' to='solutionid'>
      <filter>
        <condition attribute='uniquename' operator='eq' value='{EscapeXml(solutionUniqueName)}'/>
      </filter>
    </link-entity>
    <filter>
      <condition attribute='componenttype' operator='eq' value='10036'/>
    </filter>
  </entity>
</fetch>";

            var result = orgService.RetrieveMultiple(new FetchExpression(fetchXml));
            return result.Entities
                .Select(e => e.GetAttributeValue<Guid?>("objectid") ?? Guid.Empty)
                .Where(id => id != Guid.Empty)
                .ToHashSet();
        }

        /// <summary>
        /// Read the full detail graph for one Custom API: the API row, its linked
        /// FxExpression, request parameters, response properties, and how many
        /// sdkmessageprocessingstep rows reference the expression (shared/legacy
        /// signal).
        /// </summary>
        internal static FunctionGraph ReadGraph(IOrganizationService orgService, Guid customApiId)
        {
            var api = orgService.Retrieve("customapi", customApiId, new ColumnSet(
                "customapiid", "uniquename", "name", "displayname", "description",
                "isfunction", "bindingtype", "boundentitylogicalname", "ismanaged",
                "statuscode", "solutionid", "createdon", "modifiedon", "fxexpressionid"));

            var graph = new FunctionGraph { Api = api };

            var fxRef = api.GetAttributeValue<EntityReference>("fxexpressionid");
            if (fxRef != null)
            {
                graph.Expression = orgService.Retrieve("fxexpression", fxRef.Id, new ColumnSet(
                    "fxexpressionid", "name", "uniquename", "expression", "compiledexpression",
                    "parameters", "context", "dependencies", "statecode", "statuscode"));
            }

            graph.RequestParameters = orgService.RetrieveMultiple(new FetchExpression($@"<fetch>
  <entity name='customapirequestparameter'>
    <attribute name='uniquename'/>
    <attribute name='name'/>
    <attribute name='type'/>
    <attribute name='isoptional'/>
    <attribute name='description'/>
    <filter>
      <condition attribute='customapiid' operator='eq' value='{customApiId}'/>
    </filter>
    <order attribute='uniquename'/>
  </entity>
</fetch>")).Entities.ToList();

            graph.ResponseProperties = orgService.RetrieveMultiple(new FetchExpression($@"<fetch>
  <entity name='customapiresponseproperty'>
    <attribute name='uniquename'/>
    <attribute name='name'/>
    <attribute name='type'/>
    <attribute name='description'/>
    <filter>
      <condition attribute='customapiid' operator='eq' value='{customApiId}'/>
    </filter>
    <order attribute='uniquename'/>
  </entity>
</fetch>")).Entities.ToList();

            graph.SharedStepCount = fxRef == null
                ? 0
                : GetAggregateCount(orgService, fxRef.Id);

            return graph;
        }

        /// <summary>
        /// Count sdkmessageprocessingstep rows referencing an FxExpression.
        /// Aggregate queries return the count in an aliased value.
        /// </summary>
        private static int GetAggregateCount(IOrganizationService orgService, Guid fxExpressionId)
        {
            var result = orgService.RetrieveMultiple(new FetchExpression($@"<fetch aggregate='true'>
  <entity name='sdkmessageprocessingstep'>
    <attribute name='sdkmessageprocessingstepid' aggregate='count' alias='count'/>
    <filter>
      <condition attribute='fxexpressionid' operator='eq' value='{fxExpressionId}'/>
    </filter>
  </entity>
</fetch>"));
            if (result.Entities.Count == 0) return 0;
            var aliased = result.Entities[0].GetAttributeValue<AliasedValue>("count");
            return aliased?.Value is int i ? i : 0;
        }

        internal static string MapBindingType(int value) => value switch
        {
            0 => "Global",
            1 => "Entity",
            2 => "EntityCollection",
            _ => value.ToString()
        };

        internal static string MapParameterType(int value) =>
            ParameterTypeMap.TryGetValue(value, out var label) ? label : value.ToString();

        internal static string MapStatus(OptionSetValue statusCode) =>
            statusCode?.Value == 2 ? "Inactive" : "Active";

        internal static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;")
                 .Replace("'", "&apos;").Replace("\"", "&quot;");
    }

    /// <summary>
    /// The read graph of one function: Custom API row + linked FxExpression +
    /// signature rows + shared-step count.
    /// </summary>
    internal sealed class FunctionGraph
    {
        public Entity Api { get; set; }
        public Entity Expression { get; set; }
        public List<Entity> RequestParameters { get; set; } = [];
        public List<Entity> ResponseProperties { get; set; } = [];
        public int SharedStepCount { get; set; }

        public bool HasExpression => Expression != null;
    }
}
