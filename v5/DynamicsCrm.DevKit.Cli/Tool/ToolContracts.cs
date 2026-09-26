#nullable enable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.Json;
using System.Text.Json.Nodes;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;

namespace DynamicsCrm.DevKit.Cli.Tool;

/// <summary>
/// One available tool in the shared catalog used by both the MCP stdio host and the
/// <c>devkit tool</c> CLI branch. Definitions come from the same MCP SDK-generated
/// tool instances created by the <c>WithToolsFromAssembly</c> scan; nothing here is
/// hand-written per tool.
/// </summary>
public sealed class ToolCatalogEntry
{
    /// <summary>Public tool name, e.g. <c>manage_view</c>.</summary>
    public required string Name { get; init; }

    public string? Title { get; init; }

    public string Description { get; init; } = "";

    /// <summary><c>readonly</c> when the tool declares <c>ReadOnly = true</c>, otherwise <c>all</c>.</summary>
    public string Category { get; init; } = "all";

    public ToolAnnotations? Annotations { get; init; }

    /// <summary>MCP input schema exactly as <c>tools/list</c> would advertise it.</summary>
    public JsonElement InputSchema { get; init; }

    public JsonElement? OutputSchema { get; init; }

    /// <summary>The SDK tool instance used for in-process invocation.</summary>
    public required McpServerTool Tool { get; init; }

    /// <summary>Class declaring the tool method; <c>McpServerHost.DisabledToolSet</c> keys are these names.</summary>
    public required Type ToolType { get; init; }

    /// <summary>The attributed tool method backing this entry (schema and invocation source).</summary>
    public required MethodInfo Method { get; init; }
}

/// <summary>One path-specific input or validation failure.</summary>
public sealed class ToolValidationError
{
    public required string Path { get; init; }

    public required string Message { get; init; }

    public override string ToString() => string.IsNullOrEmpty(Path) ? Message : $"{Path}: {Message}";
}

/// <summary>
/// Local input construction or contract validation failure. Never carries tool
/// results: it happens before invocation, so the caller maps it to the
/// invalid-input exit code.
/// </summary>
public sealed class ToolInputException : Exception
{
    public IReadOnlyList<ToolValidationError> Errors { get; }

    public ToolInputException(string message, IEnumerable<ToolValidationError> errors)
        : base(message)
    {
        Errors = errors.ToList().AsReadOnly();
    }
}

/// <summary>Resolved CLI input: the final public argument object plus non-fatal warnings.</summary>
public sealed class ToolInputResult
{
    public required JsonObject Arguments { get; init; }

    public IReadOnlyList<string> Warnings { get; init; } = Array.Empty<string>();
}

/// <summary>
/// Raw CLI input options for <c>devkit tool</c> input construction, before schema-aware
/// processing. Modifier splitting at the first equals sign and merge precedence are
/// applied by <see cref="ToolInputBuilder"/>, never by the option parser.
/// </summary>
public sealed class ToolInputRequest
{
    /// <summary>File path, "-" for stdin, or null for no input document.</summary>
    public string? InputPath { get; init; }

    /// <summary><c>--set path=value</c> occurrences, in order.</summary>
    public IReadOnlyList<string> Set { get; init; } = Array.Empty<string>();

    /// <summary><c>--add path=value</c> occurrences, in order.</summary>
    public IReadOnlyList<string> Add { get; init; } = Array.Empty<string>();

    /// <summary><c>--file path=file-path</c> occurrences, in order.</summary>
    public IReadOnlyList<string> File { get; init; } = Array.Empty<string>();
}

/// <summary>Generated request template plus the paths that were filled with placeholders.</summary>
public sealed class ToolExampleResult
{
    public required JsonObject Template { get; init; }

    /// <summary>Dotted paths (array items as <c>name[0]</c>) filled with clearly-incomplete placeholder values.</summary>
    public IReadOnlyList<string> Placeholders { get; init; } = Array.Empty<string>();
}

/// <summary>
/// Outcome of one in-process tool invocation. Either the handler returned a
/// <see cref="CallToolResult"/> (including its own error signal), or the invocation
/// itself failed with an exception and no result exists.
/// </summary>
public sealed class ToolInvocationOutcome
{
    public CallToolResult? Result { get; init; }

    public Exception? Exception { get; init; }

    public static ToolInvocationOutcome FromResult(CallToolResult result) => new() { Result = result };

    public static ToolInvocationOutcome FromException(Exception exception) => new() { Exception = exception };
}
