#nullable enable
using Spectre.Console.Cli;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tool.Commands;

/// <summary>
/// <c>devkit tool example &lt;tool&gt;</c>: emits the generated JSON request
/// template (pretty-printed). Incomplete placeholder paths are diagnostics on
/// stderr only — the document itself stays valid JSON. A template is not a
/// guaranteed executable request. No connection is created.
/// </summary>
public sealed class ToolExampleCommand : ToolCommand<ToolExampleSettings>
{
    protected override Task<int> ExecuteAsyncCore(CommandContext context, ToolExampleSettings settings, CancellationToken cancellationToken)
    {
        var entry = ResolveEntry(settings.ToolName, settings.Category);
        var example = ToolTemplate.BuildExample(entry.InputSchema);

        var template = ToolOutput.Pretty(example.Template);

        if (!string.IsNullOrEmpty(settings.OutputFile))
        {
            // No input options exist on this command, so only writability applies.
            ToolOutput.PreflightOutputFile(settings.OutputFile, new ToolInputRequest());
            ToolOutput.WriteOutputFile(settings.OutputFile, template);
        }
        else
        {
            ToolOutput.WriteStdoutLine(template);
        }

        if (example.Placeholders.Count > 0)
            ToolOutput.Info(
                $"the template contains clearly-incomplete placeholder values at: {string.Join(", ", example.Placeholders)}");

        return Task.FromResult(ToolExitCodes.Success);
    }
}
