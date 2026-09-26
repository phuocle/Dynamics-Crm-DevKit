#nullable enable
using Spectre.Console.Cli;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tool.Commands;

/// <summary>
/// <c>devkit tool describe &lt;tool&gt;</c>: renders the tool's contract from the
/// shared catalog. No connection is created.
/// <list type="bullet">
/// <item>text — name/title/category/annotations plus one line per input property
/// (type, default, enum, required-ness, description; nested properties and array
/// items get their own lines).</item>
/// <item>json — the canonical MCP protocol tool definition, serialized with the
/// SDK's own conventions (name/title/description/inputSchema/outputSchema/annotations).</item>
/// <item>schema — the raw input schema only.</item>
/// </list>
/// </summary>
public sealed class ToolDescribeCommand : ToolCommand<ToolDescribeSettings>
{
    protected override Task<int> ExecuteAsyncCore(CommandContext context, ToolDescribeSettings settings, CancellationToken cancellationToken)
    {
        var output = ValidateOutputMode(settings.Output, "text", "json", "schema");
        var entry = ResolveEntry(settings.ToolName, settings.Category);

        switch (output)
        {
            case "json":
                WriteCanonicalJson(entry);
                break;
            case "schema":
                ToolOutput.WriteStdoutLine(ToolOutput.Compact(JsonNode.Parse(entry.InputSchema.GetRawText())!));
                break;
            default:
                ToolOutput.RenderDescribeText(entry);
                break;
        }

        return Task.FromResult(ToolExitCodes.Success);
    }

    private static void WriteCanonicalJson(ToolCatalogEntry entry)
    {
        var node = ToolOutput.SerializeProtocolTool(entry.Tool.ProtocolTool);
        ToolOutput.WriteStdoutLine(node is null ? "{}" : ToolOutput.Compact(node));
    }

    protected override int ReportCliError(ToolDescribeSettings settings, ToolCliException exception)
    {
        var output = settings.Output?.Trim().ToLowerInvariant() ?? "text";
        return output is "json" or "schema"
            ? ReportCliErrorAsJson(settings.ToolName, exception)
            : base.ReportCliError(settings, exception);
    }
}
