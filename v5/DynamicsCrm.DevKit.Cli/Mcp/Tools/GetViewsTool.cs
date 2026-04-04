using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Xml;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetViewsTool
    {
        private readonly ServiceClient _serviceClient;

        public GetViewsTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "get_views", Title = "Get view definitions for an entity",
            Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Retrieve view (saved query) definitions for a Dataverse entity. Returns view " +
            "names, types, FetchXML queries, and LayoutXML column definitions.\n\n" +

            "TWO MODES:\n" +
            "- If view_id is EMPTY: list all active views for the entity with name, type, status\n" +
            "- If view_id is PROVIDED: get full FetchXML, LayoutXML, and metadata for a specific view\n\n" +

            "PARAMETERS:\n" +
            "- entity_name (required): Entity logical name (e.g., 'account', 'contact'). " +
            "Call get_metadata_entities first if unsure of the logical name.\n" +
            "- view_id: GUID of a specific view to get full details including FetchXML/LayoutXML. " +
            "Leave empty to list all views for the entity.\n" +
            "- query_type: Filter by view type: 0=Public, 1=Lookup, 2=AdvancedSearch, 4=QuickFind, 64=SubGrid. " +
            "Leave empty for all view types.\n" +
            "- include_fetchxml: In list mode, also include FetchXML/LayoutXML for each view (default: false to save tokens). " +
            "In detail mode: always included regardless.\n" +
            "- include_personal: Also include personal views (userquery) owned by current user (default: false, system views only).\n\n" +

            "RETURNS:\n" +
            "- List mode: Table of views with ID, name, type, default status, activation state\n" +
            "- Detail mode: Full view metadata + FetchXML query + LayoutXML column layout\n\n" +

            "WHEN TO USE:\n" +
            "- To understand how data is displayed in an entity's grid/list\n" +
            "- To find which columns are shown in the default view\n" +
            "- To get the FetchXML query behind a view for analysis or modification\n" +
            "- Before modifying a view via upsert_view\n" +
            "- To help users create or customize views\n\n" +

            "TIPS:\n" +
            "- querytype=0 (Public) views are what users see in the view selector\n" +
            "- querytype=4 (QuickFind) defines what columns are searched\n" +
            "- The default Public view (isdefault=true, querytype=0) is shown by default\n" +
            "- LayoutXML defines column order and widths in the grid\n" +
            "- To UPDATE a view: use upsert_view tool (auto-backup + sync validation + publish)\n" +
            "- DO NOT use execute_webapi for view updates -- use upsert_view for safety")]
        public string get_views(
            [Description(
                "The entity logical name (always lowercase). " +
                "Examples: 'account', 'contact', 'lead', 'opportunity', 'incident'. " +
                "If unsure, call get_metadata_entities first."
            )] string entity_name,
            [Description(
                "GUID of a specific view to get full details including FetchXML and LayoutXML. " +
                "Leave empty to list all views for the entity. " +
                "Format: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'. " +
                "Use list mode first to discover view IDs."
            )] string view_id = "",
            [Description(
                "Filter by view type: 0=Public, 1=Lookup, 2=AdvancedSearch, 4=QuickFind, 64=SubGrid. " +
                "Leave empty for all view types. Use -1 (default) to return all types. " +
                "Common types: 0 (Public), 4 (QuickFind), 64 (SubGrid)."
            )] int query_type = -1,
            [Description(
                "In list mode, also include FetchXML/LayoutXML for each view (default: false to save tokens). " +
                "In detail mode: always included regardless of this setting."
            )] bool include_fetchxml = false,
            [Description(
                "Also include personal views (userquery table) owned by the current user. " +
                "Default: false (system views only). " +
                "Set to true to see both system and personal views."
            )] bool include_personal = false)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return "Error: entity_name is required.";

            try
            {
                if (!string.IsNullOrWhiteSpace(view_id))
                {
                    if (!Guid.TryParse(view_id.Trim(), out var id))
                        return $"Error: '{view_id}' is not a valid GUID.";

                    return GetViewDetail(id);
                }

                return ListViews(entity_name.Trim().ToLowerInvariant(), query_type, include_fetchxml, include_personal);
            }
            catch (Exception ex)
            {
                return $"Error: Failed to retrieve views: {ex.Message}";
            }
        }

        private string ListViews(string entityName, int queryType, bool includeFetchXml, bool includePersonal)
        {
            var systemViews = GetSystemViews(entityName, queryType, includeFetchXml);
            var personalViews = includePersonal
                ? GetPersonalViews(entityName, queryType, includeFetchXml)
                : new EntityCollection().Entities;

            var totalSystem = systemViews.Count;
            var totalPersonal = personalViews.Count;

            if (totalSystem == 0 && totalPersonal == 0)
            {
                var typeHint = queryType >= 0 ? $" with querytype={queryType}" : "";
                return $"[Views] {entityName} — 0 views found{typeHint}";
            }

            var sb = new StringBuilder((totalSystem + totalPersonal) * 120 + 256);

            if (totalSystem > 0)
            {
                var personalNote = includePersonal ? " system" : "";
                var viewLabel = totalSystem == 1 ? "view" : "views";
                sb.AppendLine($"[Views] {entityName} ({totalSystem}{personalNote} {viewLabel})");
                sb.AppendLine();
                sb.AppendLine("viewid\tname\ttype\tdefault\tactive\tmanaged");

                foreach (var view in systemViews)
                {
                    var viewId = view.GetAttributeValue<Guid>("savedqueryid");
                    var name = view.GetAttributeValue<string>("name") ?? "";
                    var qt = view.GetAttributeValue<int>("querytype");
                    var isDefault = view.GetAttributeValue<bool>("isdefault");
                    var stateCode = view.GetAttributeValue<OptionSetValue>("statecode")?.Value ?? 0;
                    var isManaged = view.GetAttributeValue<bool>("ismanaged");

                    sb.AppendLine($"{viewId}\t{EscapeTab(name)}\t{MapQueryType(qt)}\t{(isDefault ? "yes" : "no")}\t{(stateCode == 0 ? "Active" : "Inactive")}\t{(isManaged ? "yes" : "no")}");

                    if (includeFetchXml)
                        AppendViewXml(sb, name, view.GetAttributeValue<string>("fetchxml"), view.GetAttributeValue<string>("layoutxml"));
                }
            }

            if (totalPersonal > 0)
            {
                if (totalSystem > 0)
                    sb.AppendLine();

                var personalLabel = totalPersonal == 1 ? "view" : "views";
                sb.AppendLine($"[Personal Views] {entityName} ({totalPersonal} {personalLabel})");
                sb.AppendLine();
                sb.AppendLine("viewid\tname\ttype\tactive");

                foreach (var view in personalViews)
                {
                    var viewId = view.GetAttributeValue<Guid>("userqueryid");
                    var name = view.GetAttributeValue<string>("name") ?? "";
                    var qt = view.GetAttributeValue<int>("querytype");
                    var stateCode = view.GetAttributeValue<OptionSetValue>("statecode")?.Value ?? 0;

                    sb.AppendLine($"{viewId}\t{EscapeTab(name)}\t{MapQueryType(qt)}\t{(stateCode == 0 ? "Active" : "Inactive")}");

                    if (includeFetchXml)
                        AppendViewXml(sb, name, view.GetAttributeValue<string>("fetchxml"), view.GetAttributeValue<string>("layoutxml"));
                }
            }

            return sb.ToString();
        }

        private string GetViewDetail(Guid viewId)
        {
            var view = TryGetSystemView(viewId) ?? TryGetPersonalView(viewId);

            if (view == null)
                return $"Error: No view found with ID '{viewId}'.";

            var isSystem = view.LogicalName == "savedquery";
            var name = view.GetAttributeValue<string>("name") ?? "";
            var qt = view.GetAttributeValue<int>("querytype");
            var stateCode = view.GetAttributeValue<OptionSetValue>("statecode")?.Value ?? 0;
            var description = view.GetAttributeValue<string>("description") ?? "";
            var fetchXml = view.GetAttributeValue<string>("fetchxml") ?? "";
            var layoutXml = view.GetAttributeValue<string>("layoutxml") ?? "";
            var layoutJson = view.GetAttributeValue<string>("layoutjson") ?? "";
            var conditionalFormatting = view.GetAttributeValue<string>("conditionalformatting") ?? "";

            var sb = new StringBuilder(fetchXml.Length + layoutXml.Length + 1024);

            sb.AppendLine($"[View] {name} ({MapQueryType(qt)})");
            sb.AppendLine($"ViewId: {viewId}");
            sb.AppendLine($"Source: {(isSystem ? "System (savedquery)" : "Personal (userquery)")}");
            sb.AppendLine($"Type: {MapQueryType(qt)} ({qt})");
            sb.AppendLine($"Active: {(stateCode == 0 ? "yes" : "no")}");

            if (isSystem)
            {
                var isDefault = view.GetAttributeValue<bool>("isdefault");
                var isManaged = view.GetAttributeValue<bool>("ismanaged");
                var returnedTypeCode = view.GetAttributeValue<string>("returnedtypecode") ?? "";
                sb.AppendLine($"Entity: {returnedTypeCode}");
                sb.AppendLine($"Default: {(isDefault ? "yes" : "no")}");
                sb.AppendLine($"Managed: {(isManaged ? "yes" : "no")}");
            }
            else
            {
                var returnedTypeCode = view.GetAttributeValue<string>("returnedtypecode") ?? "";
                sb.AppendLine($"Entity: {returnedTypeCode}");
            }

            if (!string.IsNullOrEmpty(description))
                sb.AppendLine($"Description: {description}");

            sb.AppendLine();

            // Quick Find: extract Find Columns (search columns) before showing raw XML
            if (qt == 4 && !string.IsNullOrEmpty(fetchXml))
            {
                try
                {
                    var fetchDoc = XDocument.Parse(fetchXml);
                    var qfFilter = fetchDoc.Descendants("filter")
                        .FirstOrDefault(f => f.Attribute("isquickfindfields")?.Value == "1");

                    if (qfFilter != null)
                    {
                        var findColumns = qfFilter.Elements("condition")
                            .Select(c => c.Attribute("attribute")?.Value)
                            .Where(a => a != null)
                            .ToList();

                        if (findColumns.Count > 0)
                        {
                            sb.AppendLine($"[FindColumns] {findColumns.Count} fields (searched when user types in search bar)");
                            foreach (var col in findColumns)
                                sb.AppendLine($"  {col}");
                            sb.AppendLine();
                        }
                    }
                }
                catch
                {
                    // Silently skip if FetchXML can't be parsed
                }
            }

            // Column summary (parsed from LayoutXML)
            if (!string.IsNullOrEmpty(layoutXml))
            {
                try
                {
                    var layoutDoc = XDocument.Parse(layoutXml);
                    var rowId = layoutDoc.Descendants("row")
                        .Select(r => r.Attribute("id")?.Value)
                        .FirstOrDefault();
                    var cells = layoutDoc.Descendants("cell").ToList();
                    var visibleCount = 0;
                    var hiddenCount = 0;
                    var columnLines = new System.Collections.Generic.List<string>();

                    foreach (var cell in cells)
                    {
                        var cellName = cell.Attribute("name")?.Value ?? "";
                        var width = cell.Attribute("width")?.Value;
                        var isHidden = cell.Attribute("ishidden")?.Value == "1";

                        if (isHidden)
                            hiddenCount++;
                        else
                            visibleCount++;

                        var parts = new System.Collections.Generic.List<string>();
                        if (width != null) parts.Add($"{width}px");
                        if (isHidden) parts.Add("hidden");
                        if (string.Equals(cellName, rowId, StringComparison.OrdinalIgnoreCase)) parts.Add("row key");

                        var suffix = parts.Count > 0 ? $" ({string.Join(", ", parts)})" : "";
                        columnLines.Add($"  {cellName}{suffix}");
                    }

                    var hiddenNote = hiddenCount > 0 ? $" ({hiddenCount} hidden)" : "";
                    sb.AppendLine($"[Columns] {cells.Count} columns{hiddenNote}");
                    foreach (var line in columnLines)
                        sb.AppendLine(line);
                    sb.AppendLine();
                }
                catch
                {
                    // Skip column summary if LayoutXML can't be parsed
                }
            }

            if (!string.IsNullOrEmpty(fetchXml))
            {
                sb.AppendLine("[FetchXML]");
                sb.AppendLine(PrettyPrintXml(fetchXml));
                sb.AppendLine();
            }

            if (!string.IsNullOrEmpty(layoutXml))
            {
                sb.AppendLine("[LayoutXML]");
                sb.AppendLine(PrettyPrintXml(layoutXml));
            }

            if (!string.IsNullOrEmpty(layoutJson))
            {
                sb.AppendLine();
                sb.AppendLine("[LayoutJSON]");
                sb.AppendLine(layoutJson);
            }

            if (!string.IsNullOrEmpty(conditionalFormatting))
            {
                sb.AppendLine();
                sb.AppendLine("[ConditionalFormatting]");
                sb.AppendLine(PrettyPrintXml(conditionalFormatting));
            }

            return sb.ToString();
        }

        private DataCollection<Entity> GetSystemViews(string entityName, int queryType, bool includeFetchXml)
        {
            var columns = new ColumnSet(
                "savedqueryid", "name", "querytype", "isdefault",
                "statecode", "ismanaged", "description");

            if (includeFetchXml)
            {
                columns.AddColumn("fetchxml");
                columns.AddColumn("layoutxml");
            }

            var query = new QueryExpression("savedquery")
            {
                ColumnSet = columns
            };

            query.Criteria.AddCondition("returnedtypecode", ConditionOperator.Equal, entityName);
            query.Criteria.AddCondition("statecode", ConditionOperator.Equal, 0);

            if (queryType >= 0)
                query.Criteria.AddCondition("querytype", ConditionOperator.Equal, queryType);

            query.AddOrder("querytype", OrderType.Ascending);
            query.AddOrder("name", OrderType.Ascending);

            return _serviceClient.RetrieveMultiple(query).Entities;
        }

        private DataCollection<Entity> GetPersonalViews(string entityName, int queryType, bool includeFetchXml)
        {
            var columns = new ColumnSet(
                "userqueryid", "name", "querytype", "statecode", "description");

            if (includeFetchXml)
            {
                columns.AddColumn("fetchxml");
                columns.AddColumn("layoutxml");
            }

            var query = new QueryExpression("userquery")
            {
                ColumnSet = columns
            };

            query.Criteria.AddCondition("returnedtypecode", ConditionOperator.Equal, entityName);
            query.Criteria.AddCondition("statecode", ConditionOperator.Equal, 0);

            if (queryType >= 0)
                query.Criteria.AddCondition("querytype", ConditionOperator.Equal, queryType);

            query.AddOrder("querytype", OrderType.Ascending);
            query.AddOrder("name", OrderType.Ascending);

            return _serviceClient.RetrieveMultiple(query).Entities;
        }

        private Entity TryGetSystemView(Guid viewId)
        {
            var query = new QueryExpression("savedquery")
            {
                ColumnSet = new ColumnSet(true)
            };
            query.Criteria.AddCondition("savedqueryid", ConditionOperator.Equal, viewId);

            var result = _serviceClient.RetrieveMultiple(query);
            return result.Entities.Count > 0 ? result.Entities[0] : null;
        }

        private Entity TryGetPersonalView(Guid viewId)
        {
            try
            {
                var query = new QueryExpression("userquery")
                {
                    ColumnSet = new ColumnSet(true)
                };
                query.Criteria.AddCondition("userqueryid", ConditionOperator.Equal, viewId);

                var result = _serviceClient.RetrieveMultiple(query);
                return result.Entities.Count > 0 ? result.Entities[0] : null;
            }
            catch
            {
                return null;
            }
        }

        private static void AppendViewXml(StringBuilder sb, string viewName, string fetchXml, string layoutXml)
        {
            if (string.IsNullOrEmpty(fetchXml) && string.IsNullOrEmpty(layoutXml))
                return;

            sb.AppendLine();
            if (!string.IsNullOrEmpty(fetchXml))
            {
                sb.AppendLine($"[FetchXML: {viewName}]");
                sb.AppendLine(PrettyPrintXml(fetchXml));
            }
            if (!string.IsNullOrEmpty(layoutXml))
            {
                sb.AppendLine($"[LayoutXML: {viewName}]");
                sb.AppendLine(PrettyPrintXml(layoutXml));
            }
            sb.AppendLine();
        }

        private static string MapQueryType(int queryType) => queryType switch
        {
            0 => "Public",
            1 => "Lookup",
            2 => "AdvancedSearch",
            4 => "QuickFind",
            64 => "SubGrid",
            131072 => "Custom",
            _ => $"Other({queryType})"
        };

        private static string PrettyPrintXml(string xml)
        {
            try
            {
                var doc = XDocument.Parse(xml);
                var settings = new XmlWriterSettings
                {
                    Indent = true,
                    IndentChars = "  ",
                    OmitXmlDeclaration = true
                };
                var sb = new StringBuilder(xml.Length + 256);
                using (var writer = XmlWriter.Create(sb, settings))
                {
                    doc.WriteTo(writer);
                }
                return sb.ToString();
            }
            catch
            {
                return xml;
            }
        }

        private static string EscapeTab(string value) =>
            value.Replace("\t", " ").Replace("\n", " ").Replace("\r", "");
    }
}
