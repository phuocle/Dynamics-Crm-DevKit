#nullable enable
using System;

namespace DynamicsCrm.DevKit.Cli.Tool;

/// <summary>
/// Command-level failure carrying its new-branch exit code, thrown by the
/// <c>devkit tool</c> commands for syntax/category/output problems (exit 2) and
/// output-path preflight rejections (exit 3). Caught by the shared command base,
/// which prints the message on stderr and returns the code.
/// </summary>
public sealed class ToolCliException : Exception
{
    public int ExitCode { get; }

    public ToolCliException(int exitCode, string message) : base(message)
    {
        ExitCode = exitCode;
    }
}
