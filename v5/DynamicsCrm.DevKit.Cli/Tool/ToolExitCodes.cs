#nullable enable

namespace DynamicsCrm.DevKit.Cli.Tool;

/// <summary>
/// Exit codes for the <c>devkit tool</c> branch (list/describe/example/validate/call).
/// New-branch contract only: existing commands keep <see cref="DynamicsCrm.DevKit.Cli.ExitCodes"/>
/// (or their own) values, and a nonzero code here never implies that no writes occurred.
/// </summary>
public static class ToolExitCodes
{
    /// <summary>Command completed successfully; a dry-run result keeps its original non-execution status.</summary>
    public const int Success = 0;

    /// <summary>CLI syntax, unsupported option, unknown/unavailable tool, category, or output mode.</summary>
    public const int SyntaxError = 2;

    /// <summary>Invalid input, file-reference resolution, schema validation, or unsupported input-schema conversion.</summary>
    public const int InvalidInput = 3;

    /// <summary>Authentication or connection establishment failed.</summary>
    public const int ConnectionFailure = 4;

    /// <summary>Handler returned <c>IsError = true</c> (domain or partial failure); the result is preserved.</summary>
    public const int HandlerError = 5;

    /// <summary>Invocation or adapter execution failed without a returned tool result; mutation outcome may be unknown.</summary>
    public const int InvocationFailed = 6;

    /// <summary>Result serialization or output-file persistence failed; the tool may already have executed.</summary>
    public const int OutputFailure = 9;

    /// <summary>Cancellation. Inspect available outcome information before retrying.</summary>
    public const int Cancelled = 130;
}
