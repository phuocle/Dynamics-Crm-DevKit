#nullable enable
using Spectre.Console.Cli;
using ModelContextProtocol.Protocol;
using System;
using System.ComponentModel;
using System.IO;
using System.Text.Json.Nodes;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tool.Commands;

/// <summary>
/// <c>devkit tool call &lt;tool&gt;</c>: builds and validates input through the
/// shared pipeline, preflights the output path, establishes one connection
/// (project .env walk-up, no environment variables), invokes the handler once
/// in process, renders the preserved result, and disposes the execution scope
/// after rendering. Success comes from the result's error signal — a null
/// result or a thrown exception is never a handler error.
/// </summary>
[Description("Invoke a tool in process against Dataverse. Connection comes from explicit arguments, falling back to a project .env file searched from the current directory upward to the drive root. OS environment variables are never read.")]
public sealed class ToolCallCommand : ToolCommand<ToolCallSettings>
{
    /// <summary>
    /// Test seam: when set, replaces connection establishment and invocation-scope
    /// creation entirely (offline command-pipeline tests). Production behavior is
    /// unchanged: Spectre creates the command without touching this property.
    /// </summary>
    internal Func<ToolCallSettings, CancellationToken, Task<IServiceProvider>>? InvocationServicesResolver { get; set; }

    protected override async Task<int> ExecuteAsyncCore(CommandContext context, ToolCallSettings settings, CancellationToken cancellationToken)
    {
        var jsonOutput = ValidateOutputMode(settings.Output, "text", "json") == "json";
        var entry = ResolveEntry(settings.ToolName, settings.Category);
        var request = BuildInputRequest(settings);

        var built = ToolInputBuilder.Build(entry.InputSchema, request);
        EmitWarnings(built.Warnings);

        // Preflight before a potentially mutating call.
        if (!string.IsNullOrEmpty(settings.OutputFile))
            ToolOutput.PreflightOutputFile(settings.OutputFile, request);

        var services = await CreateInvocationServicesAsync(settings, cancellationToken);
        try
        {
            var outcome = await ToolInvoker.InvokeAsync(entry, built.Arguments, services, cancellationToken);

            if (outcome.Exception is not null)
                return ReportInvocationFailure(settings, entry, outcome.Exception, jsonOutput);

            var result = outcome.Result!;
            var success = result.IsError != true;

            string representation;
            try
            {
                representation = jsonOutput
                    ? ToolOutput.Compact(ToolOutput.BuildEnvelope(
                        entry.Name,
                        success,
                        ToolOutput.SerializeCallToolResult(result),
                        error: null))
                    : ToolOutput.RenderCallResult(result);
            }
            catch (Exception exception) when (exception is not OperationCanceledException)
            {
                return ReportOutputFailure(settings, entry, result, jsonOutput,
                    $"the tool result could not be serialized: {exception.Message}");
            }

            if (!string.IsNullOrEmpty(settings.OutputFile))
            {
                try
                {
                    ToolOutput.WriteOutputFile(settings.OutputFile, representation);
                }
                catch (Exception exception) when (exception is IOException or UnauthorizedAccessException)
                {
                    return ReportOutputFailure(settings, entry, result, jsonOutput,
                        $"could not write the output file \"{settings.OutputFile}\": {exception.Message}");
                }
            }
            else if (jsonOutput)
            {
                ToolOutput.WriteStdoutLine(representation);
            }
            else
            {
                Console.Out.Write(representation);
            }

            if (!success)
            {
                ToolOutput.Warn(
                    $"the tool reported an error (exit {ToolExitCodes.HandlerError}); the full result is preserved" +
                    (string.IsNullOrEmpty(settings.OutputFile)
                        ? " above."
                        : $" in \"{settings.OutputFile}\". Do not re-invoke to regenerate it."));
            }

            return success ? ToolExitCodes.Success : ToolExitCodes.HandlerError;
        }
        finally
        {
            await DisposeServicesAsync(services);
        }
    }

    private async Task<IServiceProvider> CreateInvocationServicesAsync(ToolCallSettings settings, CancellationToken cancellationToken)
    {
        if (InvocationServicesResolver is not null)
            return await InvocationServicesResolver(settings, cancellationToken);

        var connection = await ToolConnection.ConnectAsync(settings, cancellationToken);
        return ToolServices.CreateInvocationServices(
            connection.ServiceClient,
            settings.DryRun,
            connection.ImpersonatedUserDisplay);
    }

    private static async Task DisposeServicesAsync(IServiceProvider services)
    {
        try
        {
            if (services is IAsyncDisposable asyncDisposable)
                await asyncDisposable.DisposeAsync();
            else
                (services as IDisposable)?.Dispose();
        }
        catch
        {
            // Best-effort disposal on every exit path; a disposal failure never
            // changes the command's exit code or masks the invocation outcome.
        }
    }

    // ──────────────────────────────────────────────
    // Reporters (text + JSON envelope rendering)
    // ──────────────────────────────────────────────

    protected override int ReportCliError(ToolCallSettings settings, ToolCliException exception)
    {
        if (IsJsonOutput(settings))
        {
            var (code, stage) = exception.ExitCode switch
            {
                ToolExitCodes.ConnectionFailure => ("AUTH", "connection"),
                ToolExitCodes.InvalidInput => ("OUTPUT", "output"),
                _ => ("CLI_SYNTAX", "cli-parsing"),
            };
            WriteEnvelope(settings.ToolName, success: false, result: null, new ToolOutput.ToolEnvelopeError
            {
                Code = code,
                Stage = stage,
                Message = exception.Message,
            });
            ToolOutput.Error(exception.Message);
            return exception.ExitCode;
        }

        return base.ReportCliError(settings, exception);
    }

    protected override int ReportInvalidInput(ToolCallSettings settings, ToolInputException exception)
    {
        if (!IsJsonOutput(settings))
        {
            ToolOutput.WriteValidationErrors($"Invalid tool input for '{settings.ToolName}'", exception.Errors);
            return ToolExitCodes.InvalidInput;
        }

        WriteEnvelope(settings.ToolName, success: false, result: null, new ToolOutput.ToolEnvelopeError
        {
            Code = "INVALID_INPUT",
            Stage = "schema-validation",
            Message = exception.Message,
            Details = exception.Errors,
        });
        return ToolExitCodes.InvalidInput;
    }

    private int ReportInvocationFailure(ToolCallSettings settings, ToolCatalogEntry entry, Exception exception, bool jsonOutput)
    {
        if (jsonOutput)
        {
            WriteEnvelope(entry.Name, success: false, result: null, new ToolOutput.ToolEnvelopeError
            {
                Code = "INVOCATION_FAILED",
                Stage = "invocation",
                Message = exception.Message,
            });
        }
        else
        {
            ToolOutput.Error($"Invocation failed: {exception.Message}");
            if (exception.InnerException is not null)
                ToolOutput.Error($"Inner: {exception.InnerException.Message}");
        }

        ToolOutput.Warn(
            $"the invocation failed without a returned tool result (exit {ToolExitCodes.InvocationFailed}); the mutation outcome may be unknown. Do not automatically repeat the call.");
        return ToolExitCodes.InvocationFailed;
    }

    private int ReportOutputFailure(ToolCallSettings settings, ToolCatalogEntry entry, CallToolResult result, bool jsonOutput, string reason)
    {
        if (jsonOutput)
        {
            WriteEnvelope(entry.Name, success: false, result: null, new ToolOutput.ToolEnvelopeError
            {
                Code = "OUTPUT",
                Stage = "output",
                Message = reason,
            });
        }
        else
        {
            ToolOutput.Error(reason);
        }

        ToolOutput.Warn(
            $"execution already occurred; do not re-invoke the tool to regenerate its result (exit {ToolExitCodes.OutputFailure}). " +
            $"Preserved outcome: tool={entry.Name} success={(result.IsError == true ? "false" : "true")}; result text: {ToolOutput.Excerpt(result)}");
        return ToolExitCodes.OutputFailure;
    }

    private static bool IsJsonOutput(ToolCallSettings settings) =>
        string.Equals(settings.Output?.Trim(), "json", StringComparison.OrdinalIgnoreCase);

    private static void WriteEnvelope(string? toolName, bool success, JsonNode? result, ToolOutput.ToolEnvelopeError? error) =>
        ToolOutput.WriteStdoutLine(ToolOutput.Compact(ToolOutput.BuildEnvelope(toolName, success, result, error)));
}
