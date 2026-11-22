using DynamicsCrm.DevKit.Cli.Mcp.Resources;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ReadInstructionTool : McpToolBase
    {
        // Single source of truth for the resource catalog: each entry delegates to the
        // same method the matching [McpServerResource] serves, so the tool output and the
        // resource content can never drift apart. Referencing tools are discovered by
        // scanning tool descriptions at first use (never hand-maintained).
        private static readonly List<CatalogEntry> CatalogEntries = new()
        {
            new("docs://data_operations_guide", "data_operations_guide", "Guide for Dataverse data operations (manage_record, execute_fetchxml, search_records)", "instruction", () => Task.FromResult(InstructionResources.DataOperationsGuide())),
            new("docs://instructions_for_sql", "instructions_for_sql", "Instructions for Dataverse SQL queries", "instruction", () => Task.FromResult(InstructionResources.SqlInstructions())),
            new("docs://instructions_for_manage_ribbon", "instructions_for_manage_ribbon", "Instructions for classic ribbon operations", "instruction", () => Task.FromResult(InstructionResources.ManageRibbonInstructions())),
            new("docs://instructions_for_manage_report", "instructions_for_manage_report", "Instructions for SSRS reports and local RDL datasets", "instruction", () => Task.FromResult(InstructionResources.ManageReportInstructions())),
            new("docs://instructions_for_manage_app", "instructions_for_manage_app", "Instructions for manage_app", "instruction", () => Task.FromResult(InstructionResources.ManageAppInstructions())),
            new("docs://instructions_for_formxml", "instructions_for_formxml", "Instructions for manipulating Dataverse FormXML", "instruction", () => Task.FromResult(InstructionResources.FormXmlInstructions())),
            new("docs://instructions_for_views", "instructions_for_views", "Instructions for manipulating Dataverse view LayoutXML", "instruction", () => Task.FromResult(InstructionResources.ViewInstructions())),
            new("docs://schema_tools_guide", "schema_tools_guide", "Guide for Dataverse schema tools (manage_table, manage_column, manage_relationship)", "instruction", () => Task.FromResult(InstructionResources.SchemaToolsGuide())),
            new("docs://server_logic_guide", "server_logic_guide", "Guide for server-side logic tools (plugins, workflows, flows, BPFs, business rules, custom APIs)", "instruction", () => Task.FromResult(InstructionResources.ServerLogicGuide())),
            new("schema://formxml", "formxml_schema", "Dataverse FormXML Schema", "schema", () => new SchemaResources().FormXmlSchema()),
            new("schema://layoutxml", "layoutxml_schema", "Dataverse LayoutXML Schema", "schema", () => new SchemaResources().LayoutXmlSchema()),
            new("schema://fetchxml", "fetchxml_schema", "Dataverse FetchXML Schema", "schema", () => new SchemaResources().FetchXmlSchema()),
            new("schema://sitemapxml", "sitemapxml_schema", "Dataverse SiteMap XML Schema and Instructions", "schema", () => new SchemaResources().SiteMapXmlSchema()),
        };

        private static Dictionary<string, List<string>> _references;

        [McpServerTool(Name = "read_instruction", Title = "Read instruction and schema resource content",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(ReadInstructionResult)),
        Description(
            "Fetch the markdown/XML content behind the docs:// and schema:// resources referenced by tool descriptions. Use this when your client cannot read MCP resources (resources/read unsupported) — it returns the same content as tool output.\n\n" +
            "name empty → returns the catalog of all instructions and schemas with the tools that reference them; name set → returns the full content of that one resource. Accepts a bare resource name ('instructions_for_manage_ribbon') or a full URI ('docs://instructions_for_manage_ribbon', 'schema://fetchxml'); case-insensitive.\n\n" +
            "WHEN TO USE:\n" +
            "- A tool description says 'Read docs://X' but your client has no resource reader\n" +
            "- Check which instructions/schemas exist before a complex operation\n" +
            "- Re-read a guide on demand (FetchXML syntax, FormXML rules, schema tool contracts, server-logic modes)\n\n" +
            "RELATED TOOLS:\n" +
            "- get_tables → entity/attribute metadata (live data, not instructions)\n" +
            "- every tool whose description references docs:// — see the catalog returned when name is empty")]
        public async Task<CallToolResult> read_instruction(
            [Description("Resource name or URI: 'instructions_for_manage_ribbon', 'docs://instructions_for_views', 'schema://fetchxml'. Empty = return the catalog of all instructions and schemas.")] string name = "")
        {
            try
            {
                if (string.IsNullOrWhiteSpace(name))
                    return BuildCatalogResult();

                var entry = ResolveEntry(name);
                if (entry == null)
                    return Error(
                        $"Unknown instruction or schema '{name.Trim()}'.",
                        "Call read_instruction with no name to list the 13 available resources (9 docs:// instructions, 4 schema:// schemas). " +
                        $"Valid names: {string.Join(", ", CatalogEntries.Select(e => $"{e.Name} ({e.Uri})"))}.");

                var content = await entry.Load();
                var referencedBy = GetReferences()[entry.Uri] ?? new List<string>();

                var structured = new ReadInstructionResult
                {
                    Kind = entry.Kind,
                    Name = entry.Name,
                    Title = entry.Title,
                    Uri = entry.Uri,
                    ReferencedBy = referencedBy.Count > 0 ? referencedBy : null,
                    Lines = CountLines(content),
                    Content = content
                };

                var text = $"{entry.Name} ({entry.Uri}) — {structured.Lines} line(s)" +
                           (referencedBy.Count > 0 ? $", referenced by: {string.Join(", ", referencedBy)}" : "") + ".";
                return Success(text, structured);
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        private CallToolResult BuildCatalogResult()
        {
            var references = GetReferences();
            var instructions = CatalogEntries
                .Where(e => e.Kind == "instruction")
                .Select(e => ToEntry(e, references))
                .ToList();
            var schemas = CatalogEntries
                .Where(e => e.Kind == "schema")
                .Select(e => ToEntry(e, references))
                .ToList();

            var structured = new ReadInstructionResult
            {
                Kind = "catalog",
                Instructions = instructions,
                Schemas = schemas
            };

            var text = $"{instructions.Count} instruction(s) (docs://) and {schemas.Count} schema(s) (schema://) available. " +
                       "Pass a resource name or URI (e.g. 'docs://instructions_for_views') to read its full content.";
            return Success(text, structured);
        }

        private static ReadInstructionEntry ToEntry(CatalogEntry entry, Dictionary<string, List<string>> references) =>
            new()
            {
                Name = entry.Name,
                Title = entry.Title,
                Uri = entry.Uri,
                ReferencedBy = references.TryGetValue(entry.Uri, out var list) && list.Count > 0 ? list : null
            };

        private static CatalogEntry ResolveEntry(string name)
        {
            var normalized = name.Trim().TrimEnd('/');
            if (normalized.StartsWith("docs://", StringComparison.OrdinalIgnoreCase))
                normalized = normalized.Substring("docs://".Length);
            else if (normalized.StartsWith("schema://", StringComparison.OrdinalIgnoreCase))
                normalized = normalized.Substring("schema://".Length);
            normalized = normalized.Trim();

            return CatalogEntries.FirstOrDefault(e =>
                string.Equals(e.Name, normalized, StringComparison.OrdinalIgnoreCase) ||
                string.Equals(e.Uri, normalized, StringComparison.OrdinalIgnoreCase) ||
                string.Equals(e.Uri.Substring(e.Uri.IndexOf("://", StringComparison.Ordinal) + 3), normalized, StringComparison.OrdinalIgnoreCase));
        }

        private static Dictionary<string, List<string>> GetReferences()
        {
            if (_references != null) return _references;

            var uris = CatalogEntries.Select(e => e.Uri).ToArray();
            var references = new Dictionary<string, List<string>>(StringComparer.OrdinalIgnoreCase);
            foreach (var type in typeof(ReadInstructionTool).Assembly.GetTypes())
            {
                if (type.GetCustomAttribute<McpServerToolTypeAttribute>() == null) continue;
                if (type == typeof(ReadInstructionTool)) continue;

                foreach (var method in type.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.Static))
                {
                    var toolAttr = method.GetCustomAttribute<McpServerToolAttribute>();
                    if (toolAttr == null) continue;

                    var description = method.GetCustomAttribute<DescriptionAttribute>()?.Description ?? "";
                    var toolName = toolAttr.Name ?? method.Name;
                    foreach (var uri in uris)
                    {
                        if (!description.Contains(uri, StringComparison.OrdinalIgnoreCase)) continue;
                        if (!references.TryGetValue(uri, out var list))
                            references[uri] = list = new List<string>();
                        list.Add(toolName);
                    }
                }
            }

            _references = references;
            return _references;
        }

        private static int CountLines(string content)
        {
            if (string.IsNullOrEmpty(content)) return 0;
            var lines = 0;
            var index = 0;
            while ((index = content.IndexOf('\n', index)) >= 0)
            {
                lines++;
                index++;
            }
            if (content.Length > 0 && !content.EndsWith("\n", StringComparison.Ordinal)) lines++;
            return lines;
        }

        private sealed record CatalogEntry(
            string Uri,
            string Name,
            string Title,
            string Kind,
            Func<Task<string>> Load);
    }
}
