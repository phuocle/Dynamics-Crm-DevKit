#nullable enable
using Spectre.Console.Cli;
using System;
using System.IO;
using System.Text.Json.Nodes;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tool.Commands;

/// <summary>
/// <c>devkit tool validate &lt;tool&gt;</c>: builds tool input through the same
/// pipeline as <c>call</c> and validates it against the published input contract.
/// Never connects and never invokes the handler. Text output labels success as
/// contract validation; JSON output reports validity and path-specific errors
/// without echoing the resolved payload.
/// </summary>
public sealed class ToolValidateCommand : ToolCommand<ToolValidateSettings>
{
    protected override Task<int> ExecuteAsyncCore(CommandContext context, ToolValidateSettings settings, CancellationToken cancellationToken)
    {
        var output = ValidateOutputMode(settings.Output, "text", "json");
        var entry = ResolveEntry(settings.ToolName, settings.Category);

        if (!string.IsNullOrEmpty(settings.OutputFile))
            ToolOutput.PreflightOutputFile(settings.OutputFile, BuildInputRequest(settings));

        var built = ToolInputBuilder.Build(entry.InputSchema, BuildInputRequest(settings));
        EmitWarnings(built.Warnings);

        if (output == "json")
        {
            var report = new JsonObject
            {
                ["tool"] = entry.Name,
                ["valid"] = true,
                ["errors"] = new JsonArray(),
            };
            WriteRepresentation(settings, ToolOutput.Compact(report));
        }
        else
        {
            WriteRepresentation(settings, $"Contract validation passed for {entry.Name}.");
        }

        return Task.FromResult(ToolExitCodes.Success);
    }

    protected override int ReportCliError(ToolValidateSettings settings, ToolCliException exception)
    {
        // Syntax-level failures (unknown tool/category/output/option) keep the
        // validate report shape in JSON mode: valid=false with the reason.
        if (settings.Output?.Trim().ToLowerInvariant() == "json")
        {
            var report = new JsonObject
            {
                ["tool"] = settings.ToolName,
                ["valid"] = false,
                ["errors"] = new JsonArray { new JsonObject { ["path"] = "", ["message"] = exception.Message } },
            };
            ToolOutput.WriteStdoutLine(ToolOutput.Compact(report));
            ToolOutput.Error(exception.Message);
            return exception.ExitCode;
        }

        return base.ReportCliError(settings, exception);
    }

    protected override int ReportInvalidInput(ToolValidateSettings settings, ToolInputException exception)
    {
        var output = settings.Output?.Trim().ToLowerInvariant() ?? "text";
        if (output == "json")
        {
            var errors = new JsonArray();
            foreach (var error in exception.Errors)
                errors.Add(new JsonObject { ["path"] = error.Path, ["message"] = error.Message });

            var report = new JsonObject
            {
                ["tool"] = settings.ToolName,
                ["valid"] = false,
                ["errors"] = errors,
            };
            ToolOutput.WriteStdoutLine(ToolOutput.Compact(report));
            return ToolExitCodes.InvalidInput;
        }

        ToolOutput.WriteValidationErrors($"Contract validation failed for '{settings.ToolName}'", exception.Errors);
        return ToolExitCodes.InvalidInput;
    }

    /// <summary>
    /// Routes the representation to the output file when requested; stdout stays
    /// empty. A persistence failure maps to exit 9 — validation itself succeeded.
    /// </summary>
    private static void WriteRepresentation(ToolValidateSettings settings, string representation)
    {
        if (string.IsNullOrEmpty(settings.OutputFile))
        {
            ToolOutput.WriteStdoutLine(representation);
            return;
        }

        try
        {
            ToolOutput.WriteOutputFile(settings.OutputFile, representation);
        }
        catch (Exception exception) when (exception is IOException or UnauthorizedAccessException)
        {
            throw new ToolCliException(ToolExitCodes.OutputFailure,
                $"could not write the output file \"{settings.OutputFile}\": {exception.Message}");
        }
    }
}
