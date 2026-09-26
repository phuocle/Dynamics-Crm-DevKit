#nullable enable
using Spectre.Console.Cli;
using System;
using System.Linq;
using System.Text.Json.Nodes;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tool.Commands;

/// <summary>
/// <c>devkit tool list [filter]</c>: available tool names with concise
/// descriptions, ordered by name. No connection is created. The filter is a
/// case-insensitive substring match against name or description.
/// </summary>
public sealed class ToolListCommand : ToolCommand<ToolListSettings>
{
    protected override Task<int> ExecuteAsyncCore(CommandContext context, ToolListSettings settings, CancellationToken cancellationToken)
    {
        var output = ValidateOutputMode(settings.Output, "text", "json");
        var entries = ResolveEntries(settings.Category);

        var filtered = entries.AsEnumerable();
        if (!string.IsNullOrWhiteSpace(settings.Filter))
        {
            var filter = settings.Filter.Trim();
            filtered = filtered.Where(entry =>
                entry.Name.Contains(filter, StringComparison.OrdinalIgnoreCase) ||
                entry.Description.Contains(filter, StringComparison.OrdinalIgnoreCase));
        }

        var visible = filtered.ToList();

        if (output == "json")
        {
            var array = new JsonArray();
            foreach (var entry in visible)
            {
                array.Add(new JsonObject
                {
                    ["name"] = entry.Name,
                    ["title"] = entry.Title,
                    ["description"] = entry.Description,
                    ["category"] = entry.Category,
                });
            }

            ToolOutput.WriteStdoutLine(ToolOutput.Compact(array));
            return Task.FromResult(ToolExitCodes.Success);
        }

        var nameWidth = Math.Max(
            20,
            visible.Count == 0 ? 20 : visible.Max(entry => entry.Name.Length));
        foreach (var entry in visible)
            ToolOutput.WriteStdoutLine($"{entry.Name.PadRight(nameWidth)}{ConciseDescription(entry)}");

        return Task.FromResult(ToolExitCodes.Success);
    }

    private static string ConciseDescription(ToolCatalogEntry entry) =>
        entry.Title
        ?? entry.Description.Split('\n', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries)
            .FirstOrDefault()
        ?? string.Empty;

    protected override int ReportCliError(ToolListSettings settings, ToolCliException exception) =>
        settings.Output?.Trim().ToLowerInvariant() == "json"
            ? ReportCliErrorAsJson(null, exception)
            : base.ReportCliError(settings, exception);
}
