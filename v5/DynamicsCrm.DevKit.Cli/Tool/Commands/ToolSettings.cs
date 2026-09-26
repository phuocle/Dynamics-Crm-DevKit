#nullable enable
using DynamicsCrm.DevKit.Shared.Models;
using Spectre.Console.Cli;
using System.ComponentModel;
using System;

namespace DynamicsCrm.DevKit.Cli.Tool.Commands;

/// <summary>
/// Branch-level settings for <c>devkit tool</c>. Inherits the connection
/// options of <see cref="DevKitCommandArgs"/> (used by <c>tool call</c> only);
/// list/describe/example/validate never build a connection.
/// </summary>
public class ToolSettings : DevKitCommandArgs
{
    [CommandOption("--category")]
    [Description("Tool category: readonly (read-only tools only) or all (default).")]
    public string Category { get; set; } = "all";
}

/// <summary>Settings for <c>devkit tool list [filter]</c>.</summary>
public class ToolListSettings : ToolSettings
{
    [CommandArgument(0, "[filter]")]
    [Description("Case-insensitive substring matched against tool names and descriptions.")]
    public string? Filter { get; set; }

    [CommandOption("--output")]
    [Description("Output mode: text (default) or json.")]
    public string Output { get; set; } = "text";
}

/// <summary>Settings for <c>devkit tool describe &lt;tool&gt;</c>.</summary>
public class ToolDescribeSettings : ToolSettings
{
    [CommandArgument(0, "<tool>")]
    [Description("Name of the tool to describe, e.g. manage_view. Run 'devkit tool list' to see all tools.")]
    public string ToolName { get; set; } = string.Empty;

    [CommandOption("--output")]
    [Description("Output mode: text (default), json (canonical tool definition) or schema (raw input schema).")]
    public string Output { get; set; } = "text";
}

/// <summary>Settings for <c>devkit tool example &lt;tool&gt;</c>.</summary>
public class ToolExampleSettings : ToolSettings
{
    [CommandArgument(0, "<tool>")]
    [Description("Name of the tool to generate a request template for, e.g. manage_view. Run 'devkit tool list' to see all tools.")]
    public string ToolName { get; set; } = string.Empty;

    [CommandOption("--output-file")]
    [Description("Write the request template to this file instead of stdout.")]
    public string? OutputFile { get; set; }
}

/// <summary>
/// Shared settings for <c>devkit tool validate &lt;tool&gt;</c> and
/// <c>devkit tool call &lt;tool&gt;</c>: both build tool input through the same
/// pipeline (input document plus --set/--add/--file modifiers).
/// </summary>
public class ToolValidateSettings : ToolSettings
{
    [CommandArgument(0, "<tool>")]
    [Description("Name of the tool to validate or call, e.g. manage_view. Run 'devkit tool list' to see all tools.")]
    public string ToolName { get; set; } = string.Empty;

    [CommandOption("--input")]
    [Description("UTF-8 JSON object to use as the request document (a file path, or '-' for stdin).")]
    public string? Input { get; set; }

    [CommandOption("--set")]
    [Description("Assign one scalar at a dotted schema path (path=value). Repeatable.")]
    public string[] Set { get; set; } = Array.Empty<string>();

    [CommandOption("--add")]
    [Description("Append one scalar to a schema-declared array (path=value). Repeatable.")]
    public string[] Add { get; set; } = Array.Empty<string>();

    [CommandOption("--file")]
    [Description("Assign UTF-8 file CONTENTS to a string property (path=file-path). Repeatable.")]
    public string[] File { get; set; } = Array.Empty<string>();

    [CommandOption("--output")]
    [Description("Output mode: text (default) or json.")]
    public string Output { get; set; } = "text";

    [CommandOption("--output-file")]
    [Description("Write the selected representation to this file instead of stdout.")]
    public string? OutputFile { get; set; }
}

/// <summary>Settings for <c>devkit tool call &lt;tool&gt;</c>; adds connection and invocation options.</summary>
public class ToolCallSettings : ToolValidateSettings
{
    [CommandOption("--dry-run")]
    [Description("Invoke under the mutation-blocking policy: mutating operations are NOT executed (reads still run).")]
    public bool DryRun { get; set; }

    [CommandOption("--as-user")]
    [Description("Impersonate this user (systemuserid GUID or email). Requires the connecting user to be a System Administrator; otherwise ignored with a warning on stderr.")]
    public string? AsUser { get; set; }
}
