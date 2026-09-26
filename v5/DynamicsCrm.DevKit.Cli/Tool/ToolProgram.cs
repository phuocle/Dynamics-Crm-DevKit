#nullable enable
using DynamicsCrm.DevKit.Cli.Tool.Commands;
using Spectre.Console.Cli;
using System;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tool;

/// <summary>
/// Runs the <c>devkit tool</c> branch in its own <see cref="CommandApp"/> so the
/// branch's lifecycle can differ from existing commands without touching their
/// behavior byte-for-byte:
/// <list type="bullet">
/// <item>no update check and no notification (stdout stays machine-clean),</item>
/// <item>no <c>SpectreLog.WaitForKeyPress</c>,</item>
/// <item>an exception handler that maps Spectre parse failures to exit 2 — with a
/// parseable JSON error object on stdout when the raw arguments conservatively
/// request <c>--output json</c>, and Spectre's human error text on stderr,</item>
/// <item>bare <c>devkit tool</c> shows branch help and exits 2 (incomplete syntax).</item>
/// </list>
/// </summary>
public static class ToolProgram
{
    /// <summary>
    /// Replaces a bare <c>-</c> stdin marker before Spectre's tokenizer runs: the
    /// tokenizer hard-rejects a lone dash ("Option does not have a name."), so
    /// <c>devkit tool ... --input -</c> could never reach the command otherwise.
    /// The commands translate the marker back to <c>-</c> (stdin) when building
    /// the input request.
    /// </summary>
    internal const string StdinMarker = "__devkit-tool-stdin__";

    public static async Task<int> RunAsync(string[] args)
    {
        args = NormalizeStdinMarker(args);
        var jsonOutput = RequestsJsonOutput(args);
        var toolName = PeekToolName(args);

        var app = new CommandApp();
        app.Configure(config =>
        {
            config.SetApplicationName("devkit");
            config.SetApplicationVersion($"{DynamicsCrm.DevKit.Shared.Const.Version} Build: {DynamicsCrm.DevKit.Shared.Const.Build}");
            // Bind the app's own console to the CURRENT Console.Out so Spectre's
            // help rendering honors redirection exactly like the branch's own
            // Console.Out writes (the default factory snapshots the process stdout).
            var appConsole = Spectre.Console.AnsiConsole.Create(new Spectre.Console.AnsiConsoleSettings
            {
                Out = new Spectre.Console.AnsiConsoleOutput(Console.Out),
                Interactive = Spectre.Console.InteractionSupport.No,
            });
            appConsole.Profile.Width = 8000;
            config.ConfigureConsole(appConsole);
            config.SetExceptionHandler((exception, _) => HandleCliException(exception, jsonOutput, toolName));

            // NOTE: the branch is registered against CommandSettings, not
            // ToolSettings, ON PURPOSE. Spectre shadows leaf options whose backing
            // property is also declared on a parent command (HaveParentWithOption):
            // with AddBranch<ToolSettings> every option of the shared base
            // (--category, --conn, --auth, ...) became unbindable on the leaves —
            // `--category readonly` was silently ignored. CommandSettings declares
            // no options, so the leaves bind their full (inherited) option set.
            config.AddBranch<CommandSettings>("tool", branch =>
            {
                branch.AddCommand<ToolListCommand>("list")
                      .WithDescription("List available tools");
                branch.AddCommand<ToolDescribeCommand>("describe")
                      .WithDescription("Describe a tool's input contract");
                branch.AddCommand<ToolExampleCommand>("example")
                      .WithDescription("Generate a JSON request template for a tool");
                branch.AddCommand<ToolValidateCommand>("validate")
                      .WithDescription("Validate input against a tool's contract without invoking it");
                branch.AddCommand<ToolCallCommand>("call")
                      .WithDescription("Invoke a tool in process against Dataverse. Connection: explicit args first, then a project .env found by walking up from the current directory to the drive root (environment variables are never read)");
            });
        });

        // Bare `devkit tool` (no subcommand, no help flag): show branch help but
        // exit 2 for incomplete syntax. `devkit tool --help`/`-h` keeps Spectre's
        // normal help and exit 0.
        var bareBranch = args.Length == 1;
        var runArgs = bareBranch ? new[] { args[0], "--help" } : args;

        var result = await app.RunAsync(runArgs);
        return bareBranch && result == 0 ? ToolExitCodes.SyntaxError : result;
    }

    /// <summary>Rewrites <c>--input -</c> and <c>--input=-</c> to the internal stdin marker.</summary>
    private static string[] NormalizeStdinMarker(string[] args)
    {
        var normalized = (string[])args.Clone();
        for (var index = 0; index < normalized.Length; index++)
        {
            var argument = normalized[index];
            if (argument.Equals("--input", StringComparison.OrdinalIgnoreCase) &&
                index + 1 < normalized.Length &&
                normalized[index + 1] == "-")
            {
                normalized[index + 1] = StdinMarker;
            }
            else if (argument.StartsWith("--input=", StringComparison.OrdinalIgnoreCase) &&
                     argument["--input=".Length..] == "-")
            {
                normalized[index] = $"--input={StdinMarker}";
            }
        }

        return normalized;
    }

    private static int HandleCliException(Exception exception, bool jsonOutput, string? toolName)
    {
        var message = exception.Message ?? exception.GetType().Name;
        if (jsonOutput)
        {
            var envelope = ToolOutput.BuildEnvelope(
                toolName,
                success: false,
                result: null,
                new ToolOutput.ToolEnvelopeError
                {
                    Code = "CLI_SYNTAX",
                    Stage = "cli-parsing",
                    Message = message,
                });
            ToolOutput.WriteStdoutLine(ToolOutput.Compact(envelope));
            ToolOutput.Error(message);
        }
        else
        {
            ToolOutput.Error(message);
        }

        return ToolExitCodes.SyntaxError;
    }

    /// <summary>Conservative peek: only an explicit `--output json` / `--output=json` token pair enables JSON errors.</summary>
    private static bool RequestsJsonOutput(string[] args)    {
        for (var index = 0; index < args.Length; index++)
        {
            var argument = args[index];
            if (argument.Equals("--output", StringComparison.OrdinalIgnoreCase) &&
                index + 1 < args.Length &&
                args[index + 1].Equals("json", StringComparison.OrdinalIgnoreCase))
            {
                return true;
            }

            if (argument.StartsWith("--output=", StringComparison.OrdinalIgnoreCase) &&
                argument["--output=".Length..].Equals("json", StringComparison.OrdinalIgnoreCase))
            {
                return true;
            }
        }

        return false;
    }

    /// <summary>
    /// The tool argument of <c>describe/example/validate/call</c> when the raw
    /// argument shape is unambiguous (third token present and not an option);
    /// null otherwise, including for <c>list</c>.
    /// </summary>
    private static string? PeekToolName(string[] args)
    {
        if (args.Length < 3) return null;
        if (args[2].StartsWith('-')) return null;
        return args[1].ToLowerInvariant() switch
        {
            "describe" or "example" or "validate" or "call" => args[2],
            _ => null,
        };
    }
}
