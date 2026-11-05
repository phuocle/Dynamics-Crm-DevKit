using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.IO;

namespace DynamicsCrm.DevKit.Cli.Mcp.Resources
{
    [McpServerResourceType]
    public class InstructionResources
    {
        private static string ReadInstruction(string fileName)
        {
            var resourceName = $"DynamicsCrm.DevKit.Cli.Mcp.Resources.Instructions.{fileName}";
            using var stream = typeof(InstructionResources).Assembly.GetManifestResourceStream(resourceName)
                ?? throw new InvalidOperationException($"Embedded instruction resource not found: {resourceName}");
            using var reader = new StreamReader(stream);
            return reader.ReadToEnd();
        }

        [McpServerResource(
            MimeType = "text/markdown",
            Name = "instructions_for_manage_ribbon",
            Title = "Instructions for classic ribbon operations",
            UriTemplate = "docs://instructions_for_manage_ribbon"),
        Description("Operation fields, examples, and publish workflow for manage_ribbon. Read before updating classic ribbon buttons.")]
        public static string ManageRibbonInstructions() => ReadInstruction("instructions_for_manage_ribbon.md");

        [McpServerResource(
            MimeType = "text/markdown",
            Name = "instructions_for_manage_report",
            Title = "Instructions for SSRS reports and local RDL datasets",
            UriTemplate = "docs://instructions_for_manage_report"),
        Description("Local RDL and dataset workflows, FetchXML support, and Dataverse report deployment for manage_report.")]
        public static string ManageReportInstructions() => ReadInstruction("instructions_for_manage_report.md");

        [McpServerResource(
            MimeType = "text/markdown",
            Name = "instructions_for_manage_app",
            Title = "Instructions for manage_app",
            UriTemplate = "docs://instructions_for_manage_app"),
        Description(
            "Rules and examples for managing model-driven apps and app navigation through manage_app. " +
            "Read this before creating or modifying model-driven apps, sitemaps, or app navigation.")]
        public static string ManageAppInstructions() => ReadInstruction("instructions_for_manage_app.md");

        [McpServerResource(
            MimeType = "text/markdown",
            Name = "formxml_instructions",
            Title = "Instructions for manipulating Dataverse FormXML",
            UriTemplate = "docs://instructions_for_formxml"),
        Description(
            "Rules and best practices for modifying Dataverse form XML definitions. " +
            "Read this before making any changes to FormXML via manage_form.")]
        public static string FormXmlInstructions() => ReadInstruction("instructions_for_formxml.md");

        [McpServerResource(
            MimeType = "text/markdown",
            Name = "layoutxml_instructions",
            Title = "Instructions for manipulating Dataverse View LayoutXML",
            UriTemplate = "docs://instructions_for_views"),
        Description(
            "Rules and best practices for modifying Dataverse view definitions. " +
            "Read this before creating or modifying views via manage_view.")]
        public static string ViewInstructions() => ReadInstruction("instructions_for_views.md");

        [McpServerResource(
            MimeType = "text/markdown",
            Name = "schema_tools_guide",
            Title = "Guide for Dataverse schema tools (manage_table, manage_column, manage_relationship)",
            UriTemplate = "docs://schema_tools_guide"),
        Description(
            "Rules, type matrices, and immutable property lists for schema tools. " +
            "Read before complex table, column, or relationship changes and when resolving schema errors.")]
        public static string SchemaToolsGuide() => ReadInstruction("schema_tools_guide.md");

        [McpServerResource(
            MimeType = "text/markdown",
            Name = "data_operations_guide",
            Title = "Guide for Dataverse data operations (manage_record, execute_fetchxml, search_records)",
            UriTemplate = "docs://data_operations_guide"),
        Description(
            "Field type formats, FetchXML relationship joins, and search syntax. " +
            "Read when constructing record values, FetchXML joins, or Dataverse Search queries.")]
        public static string DataOperationsGuide() => ReadInstruction("data_operations_guide.md");

        [McpServerResource(
            MimeType = "text/markdown",
            Name = "server_logic_guide",
            Title = "Guide for server-side logic tools (plugins, workflows, flows, BPFs, business rules, custom APIs)",
            UriTemplate = "docs://server_logic_guide"),
        Description(
            "Filtering patterns, list/detail modes, and entity scoping for server-logic tools. " +
            "Read when selecting list/detail modes or filters for these tools.")]
        public static string ServerLogicGuide() => ReadInstruction("server_logic_guide.md");

        [McpServerResource(
            MimeType = "text/markdown",
            Name = "instructions_for_sql",
            Title = "Instructions for Dataverse SQL queries",
            UriTemplate = "docs://instructions_for_sql"),
        Description(
            "Rules, supported operators, and T-SQL conversion cheat sheet for execute_sql. " +
            "Read this before writing complex SQL SELECT queries against Dataverse.")]
        public static string SqlInstructions() => ReadInstruction("instructions_for_sql.md");
    }
}
