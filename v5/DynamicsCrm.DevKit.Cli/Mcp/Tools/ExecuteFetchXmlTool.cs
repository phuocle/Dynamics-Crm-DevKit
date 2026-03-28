using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ExecuteFetchXmlTool
    {
        private readonly ServiceClient _serviceClient;
        private const int DataversePageLimit = 5000;

        public ExecuteFetchXmlTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "execute_fetchxml", Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Execute a FetchXML query against Microsoft Dataverse and return results as a markdown table. " +
            "Supports auto-paging to retrieve large datasets. Max 5000 records per call.\n\n" +

            "FETCHXML STRUCTURE:\n" +
            "- Root: <fetch [distinct='true'] [aggregate='true']>\n" +
            "- Entity: <entity name='logical_name'> (exactly one, use logical name like 'account', not 'Account')\n" +
            "- Columns: <attribute name='col'/> for each column. Omit all <attribute> to get all columns.\n" +
            "- Order: <order attribute='col' [descending='true']/>\n" +
            "- DO NOT use top/count/page attributes in <fetch> — use the max_records parameter instead\n\n" +

            "FILTERING:\n" +
            "- <filter [type='and|or']> wraps <condition> elements\n" +
            "- <condition attribute='col' operator='op' [value='val']/>\n" +
            "- Operators: eq, ne, gt, ge, lt, le, like (use % wildcard), not-like, begins-with, ends-with, " +
            "in, not-in, between, not-between, null, not-null, " +
            "today, yesterday, tomorrow, last-x-days, next-x-days, last-x-months, this-year, last-year\n" +
            "- For 'in' operator: <condition attribute='col' operator='in'><value>v1</value><value>v2</value></condition>\n\n" +

            "JOINS (link-entity):\n" +
            "- <link-entity name='related_entity' from='related_col' to='this_col' link-type='inner|outer' [alias='a']>\n" +
            "- from = column on the related (linked) entity, to = column on the parent entity\n" +
            "- Use get_entity_metadata to find correct relationship columns\n" +
            "- For N:N joins, use the intersectEntityName as an intermediate link-entity\n\n" +

            "AGGREGATION (set aggregate='true' on <fetch>):\n" +
            "- <attribute name='col' alias='alias_name' aggregate='count|countcolumn|sum|avg|min|max'/>\n" +
            "- For counting all rows: <attribute name='primaryid' alias='total' aggregate='count'/>\n" +
            "- Group by: <attribute name='col' alias='alias_name' groupby='true'/>\n" +
            "- Distinct count: <attribute name='col' alias='alias_name' aggregate='countcolumn' distinct='true'/>\n\n" +

            "IMPORTANT RULES:\n" +
            "- DO NOT use top='N' in FetchXML — it will be stripped. Use the max_records parameter to limit results\n" +
            "- Always use entity logical names (lowercase): 'account' not 'Account', 'contact' not 'Contact'\n" +
            "- Always use attribute logical names (lowercase): 'accountid' not 'AccountId'\n" +
            "- If unsure of entity/attribute names, call get_entity_metadata first\n" +
            "- If query fails, read the error message, fix the FetchXML, and retry\n\n" +

            "EXAMPLES:\n" +
            "Count accounts: <fetch aggregate='true'><entity name='account'><attribute name='accountid' alias='count' aggregate='count'/></entity></fetch>\n" +
            "Top 5 contacts (use max_records=5): <fetch><entity name='contact'><attribute name='fullname'/><order attribute='fullname'/></entity></fetch>\n" +
            "Active accounts: <fetch><entity name='account'><attribute name='name'/><filter><condition attribute='statecode' operator='eq' value='0'/></filter></entity></fetch>")]
        public string execute_fetchxml(
            [Description(
                "The FetchXML query string. Must be valid XML starting with <fetch> root element. " +
                "Use single quotes for XML attribute values. " +
                "Entity and attribute names must be logical names (lowercase). " +
                "Example: <fetch><entity name='account'><attribute name='name'/></entity></fetch>"
            )] string fetchxml,
            [Description(
                "Maximum records to return. Default: 5000. Capped at 5000. " +
                "Use a smaller value (e.g. 10, 50, 100) when you only need a sample or top-N results."
            )] int max_records = 5000,
            [Description(
                "true: automatically page through all results until max_records is reached or no more rows exist. " +
                "false: return first page only (default). " +
                "Use true when you need complete datasets (e.g. reporting, counting all records)."
            )] bool get_all = false)
        {
            if (string.IsNullOrWhiteSpace(fetchxml))
                return "Error: fetchxml is required.";

            if (max_records <= 0)
                max_records = DataversePageLimit;
            if (max_records > DataversePageLimit)
                max_records = DataversePageLimit;

            try
            {
                return get_all
                    ? ExecuteAllPages(fetchxml, max_records)
                    : ExecuteSinglePage(fetchxml, max_records);
            }
            catch (Exception ex)
            {
                return $"Error: Failed to execute FetchXML: {ex.Message}";
            }
        }

        private string ExecuteSinglePage(string fetchxml, int maxRecords)
        {
            var effectiveFetchXml = FetchXmlPagingHelper.ApplyPaging(fetchxml, 1, maxRecords);
            var result = _serviceClient.RetrieveMultiple(new FetchExpression(effectiveFetchXml));
            var records = ConvertEntities(result.Entities.Take(maxRecords));

            return CompactFormatter.FormatFetchXmlResults(records, records.Count, result.MoreRecords);
        }

        private string ExecuteAllPages(string fetchxml, int maxRecords)
        {
            var allRecords = new List<Dictionary<string, string>>();
            var page = 1;
            string pagingCookie = null;
            var hasMore = false;

            while (allRecords.Count < maxRecords)
            {
                var remaining = maxRecords - allRecords.Count;
                var count = Math.Min(DataversePageLimit, remaining);
                var effectiveFetchXml = FetchXmlPagingHelper.ApplyPaging(fetchxml, page, count, pagingCookie);

                var result = _serviceClient.RetrieveMultiple(new FetchExpression(effectiveFetchXml));
                allRecords.AddRange(ConvertEntities(result.Entities));

                hasMore = result.MoreRecords;
                if (!result.MoreRecords || result.Entities.Count == 0)
                    break;

                pagingCookie = result.PagingCookie;
                page++;
            }

            var finalHasMore = hasMore && allRecords.Count < maxRecords;
            return CompactFormatter.FormatFetchXmlResults(allRecords, allRecords.Count, finalHasMore);
        }

        private static List<Dictionary<string, string>> ConvertEntities(IEnumerable<Entity> entities)
        {
            return entities
                .Select(entity =>
                {
                    var dict = new Dictionary<string, string>
                    {
                        ["_entity"] = entity.LogicalName,
                        ["_id"] = entity.Id.ToString()
                    };
                    foreach (var attr in entity.Attributes.OrderBy(x => x.Key))
                    {
                        dict[attr.Key] = DataverseValueFormatter.FormatValue(entity, attr.Key);
                    }
                    return dict;
                })
                .ToList();
        }
    }
}
