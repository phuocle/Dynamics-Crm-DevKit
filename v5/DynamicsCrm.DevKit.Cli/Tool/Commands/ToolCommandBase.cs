#nullable enable
using Spectre.Console.Cli;
using System.Reflection;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tool.Commands;

/// <summary>
/// Shared execution shell for the <c>devkit tool</c> commands. Maps local
/// failures to the new-branch exit codes, writes machine output to stdout and
/// diagnostics to stderr, and never calls <c>SpectreLog.WriteHeader</c> or any
/// Spectre <c>AnsiConsole</c>-based rendering (Spectre's AnsiConsole snapshots the
/// original stdout stream and would bypass redirection). Subclasses override the
/// <c>Report*</c> hooks when a command needs JSON envelope rendering.
/// </summary>
public abstract class ToolCommand<TSettings> : AsyncCommand<TSettings> where TSettings : ToolSettings
{
    /// <summary>Public test accessor; ExecuteAsync itself is protected per the Spectre contract.</summary>
    public Task<int> ExecuteAsyncForTesting(CommandContext context, TSettings settings, CancellationToken cancellationToken)
        => ExecuteAsync(context, settings, cancellationToken);

    protected sealed override Task<int> ExecuteAsync(CommandContext context, TSettings settings, CancellationToken cancellationToken)
        => ExecuteAsyncSafe(context, settings, cancellationToken);

    private async Task<int> ExecuteAsyncSafe(CommandContext context, TSettings settings, CancellationToken cancellationToken)
    {
        try
        {
            RejectUnknownOptions(context);
            return await ExecuteAsyncCore(context, settings, cancellationToken);
        }
        catch (ToolCliException exception)
        {
            return ReportCliError(settings, exception);
        }
        catch (ToolInputException exception)
        {
            return ReportInvalidInput(settings, exception);
        }
        catch (OperationCanceledException)
        {
            return ReportCancelled(settings);
        }
        catch (Exception exception)
        {
            return ReportUnexpectedFailure(settings, exception);
        }
    }

    /// <summary>
    /// Rejects option tokens the executed command does not declare as CLI syntax
    /// errors (exit 2). Spectre's default parser silently DROPS unknown options,
    /// and its <c>UseStrictParsing</c> empirically rejects inherited branch/base
    /// options as well, so the branch enforces this itself: every
    /// <c>[CommandOption]</c> on the settings type hierarchy is known; anything
    /// else option-shaped in the raw arguments is a syntax error.
    /// </summary>
    protected static void RejectUnknownOptions(CommandContext? context)
    {
        if (context is null)
            return;

        var arguments = context.Arguments;
        if (arguments is null || arguments.Count == 0)
            return;

        var known = KnownOptionsCache.GetOrAdd(typeof(TSettings), CollectKnownOptionNames);
        var afterSeparator = false;
        foreach (var token in arguments)
        {
            if (token == "--")
            {
                afterSeparator = true;
                continue;
            }

            if (afterSeparator || token.Length <= 1 || token[0] != '-')
                continue;

            var name = token;
            var assignment = token.IndexOf('=');
            if (assignment > 0)
                name = token[..assignment];

            if (!known.Contains(name))
                throw new ToolCliException(ToolExitCodes.SyntaxError,
                    $"Unknown option '{name.TrimStart('-')}'.");
        }
    }

    private static readonly System.Collections.Concurrent.ConcurrentDictionary<Type, HashSet<string>> KnownOptionsCache = new();

    private static HashSet<string> CollectKnownOptionNames(Type settingsType)
    {
        var names = new HashSet<string>(StringComparer.OrdinalIgnoreCase) { "--help", "-h", "--version" };
        for (var type = settingsType; type is not null && typeof(CommandSettings).IsAssignableFrom(type); type = type.BaseType)
        {
            foreach (var property in type.GetProperties(InstanceDeclaredOnly))
            {
                if (property.GetCustomAttribute<CommandOptionAttribute>() is not { } option)
                    continue;

                foreach (var longName in option.LongNames)
                    names.Add($"--{longName}");
                foreach (var shortName in option.ShortNames)
                    names.Add($"-{shortName}");
            }
        }

        return names;
    }

    private const BindingFlags InstanceDeclaredOnly =
        BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly;

    protected abstract Task<int> ExecuteAsyncCore(CommandContext context, TSettings settings, CancellationToken cancellationToken);

    protected virtual int ReportCliError(TSettings settings, ToolCliException exception)
    {
        ToolOutput.Error(exception.Message);
        return exception.ExitCode;
    }

    /// <summary>
    /// Renders a CLI-level failure for commands whose selected output mode
    /// promises machine-readable stdout: the envelope goes to stdout and the
    /// human diagnostic to stderr, so a JSON consumer never faces an empty or
    /// unparseable stdout together with a nonzero exit code.
    /// </summary>
    protected static int ReportCliErrorAsJson(string? toolName, ToolCliException exception)
    {
        var (code, stage) = exception.ExitCode switch
        {
            ToolExitCodes.ConnectionFailure => ("AUTH", "connection"),
            ToolExitCodes.InvalidInput => ("OUTPUT", "output"),
            _ => ("CLI_SYNTAX", "cli-parsing"),
        };
        ToolOutput.WriteStdoutLine(ToolOutput.Compact(ToolOutput.BuildEnvelope(
            toolName,
            success: false,
            result: null,
            new ToolOutput.ToolEnvelopeError
            {
                Code = code,
                Stage = stage,
                Message = exception.Message,
            })));
        ToolOutput.Error(exception.Message);
        return exception.ExitCode;
    }

    protected virtual int ReportInvalidInput(TSettings settings, ToolInputException exception)
    {
        ToolOutput.WriteValidationErrors($"Invalid tool input for '{ToolNameOf(settings)}'", exception.Errors);
        return ToolExitCodes.InvalidInput;
    }

    protected virtual int ReportCancelled(TSettings settings)
    {
        ToolOutput.Error("Operation cancelled.");
        return ToolExitCodes.Cancelled;
    }

    protected virtual int ReportUnexpectedFailure(TSettings settings, Exception exception)
    {
        ToolOutput.Error(exception.Message);
        return ToolExitCodes.InvocationFailed;
    }

    protected static string ValidateOutputMode(string output, params string[] allowed)
    {
        var normalized = output?.Trim().ToLowerInvariant() ?? "";
        foreach (var candidate in allowed)
        {
            if (candidate == normalized) return normalized;
        }

        throw new ToolCliException(ToolExitCodes.SyntaxError,
            $"Unknown output mode '{output}'. Supported: {string.Join(", ", allowed)}.");
    }

    /// <summary>
    /// Resolves a tool by exact name within the category. Unknown category, an
    /// unknown tool, or a tool filtered out by the category (for example a
    /// mutation tool under <c>--category readonly</c>) all map to exit 2;
    /// disabled tools are never in the catalog.
    /// </summary>
    protected static ToolCatalogEntry ResolveEntry(string toolName, string category)
    {
        ToolCatalogEntry? entry;
        try
        {
            entry = ToolCatalog.Find(toolName, category);
        }
        catch (ArgumentException exception)
        {
            throw new ToolCliException(ToolExitCodes.SyntaxError, CleanCategoryError(exception.Message));
        }

        if (entry is not null)
            return entry;

        var knownWithoutCategoryFilter = ToolCatalog.Find(toolName, "all");
        if (knownWithoutCategoryFilter is not null)
            throw new ToolCliException(ToolExitCodes.SyntaxError,
                $"Tool '{toolName}' is not available in category '{category}'. It is not a read-only tool; use --category all.");

        throw new ToolCliException(ToolExitCodes.SyntaxError,
            $"Unknown tool '{toolName}'. Run 'devkit tool list' to see available tools.");
    }

    /// <summary>Category validation for <c>list</c> (which has no tool-name argument).</summary>
    protected static IReadOnlyList<ToolCatalogEntry> ResolveEntries(string category)
    {
        try
        {
            return ToolCatalog.GetEntries(category);
        }
        catch (ArgumentException exception)
        {
            throw new ToolCliException(ToolExitCodes.SyntaxError, CleanCategoryError(exception.Message));
        }
    }

    /// <summary>Strips the ArgumentException parameter suffix from the catalog's category error text.</summary>
    private static string CleanCategoryError(string message)
    {
        var suffix = message.IndexOf(" (Parameter '", StringComparison.Ordinal);
        return suffix > 0 ? message[..suffix] : message;
    }

    protected static ToolInputRequest BuildInputRequest(ToolValidateSettings settings) => new()
    {
        // ToolProgram rewrites "--input -" to a marker that survives Spectre's
        // tokenizer; translate it back to the stdin convention here.
        InputPath = settings.Input == ToolProgram.StdinMarker ? "-" : settings.Input,
        Set = settings.Set,
        Add = settings.Add,
        File = settings.File,
    };

    protected static void EmitWarnings(IReadOnlyList<string> warnings)
    {
        foreach (var warning in warnings)
            ToolOutput.Warn(warning);
    }

    private static string ToolNameOf(TSettings settings) => settings switch
    {
        ToolValidateSettings validate => validate.ToolName,
        ToolDescribeSettings describe => describe.ToolName,
        ToolExampleSettings example => example.ToolName,
        _ => "tool",
    };
}
