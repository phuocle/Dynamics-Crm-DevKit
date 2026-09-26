#nullable enable
using ModelContextProtocol;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace DynamicsCrm.DevKit.Cli.Tool;

/// <summary>
/// Rendering helpers for the <c>devkit tool</c> branch: stdout carries machine
/// output only, stderr carries diagnostics only. All writes go through
/// <see cref="Console.Out"/>/<see cref="Console.Error"/> — never AnsiConsole,
/// which snapshots the original stdout stream and would bypass redirection.
/// JSON output is compact (single line) except the <c>example</c> template,
/// which is pretty-printed. Secrets, tokens and connection strings are never
/// written by this class.
/// </summary>
internal static class ToolOutput
{
    private static readonly UTF8Encoding Utf8NoBom = new(encoderShouldEmitUTF8Identifier: false);

    // ──────────────────────────────────────────────
    // Stream writers
    // ──────────────────────────────────────────────

    public static void WriteStdoutLine(string line) => Console.Out.WriteLine(line);

    /// <summary>Diagnostic line on stderr with the branch prefix.</summary>
    public static void Info(string message) => Console.Error.WriteLine($"[DevKit Tool] {message}");

    /// <summary>Warning diagnostic on stderr with the branch prefix; never suppressed.</summary>
    public static void Warn(string message) => Console.Error.WriteLine($"[DevKit Tool] WARNING: {message}");

    /// <summary>Error diagnostic on stderr in the same "Error: ..." style the CLI prints elsewhere.</summary>
    public static void Error(string message) => Console.Error.WriteLine($"Error: {message}");

    // ──────────────────────────────────────────────
    // JSON helpers
    // ──────────────────────────────────────────────

    /// <summary>Compact single-line JSON, the format for every JSON output except the example template.</summary>
    public static string Compact(JsonNode node) => node.ToJsonString();

    /// <summary>Pretty-printed JSON, used for the example request template.</summary>
    public static string Pretty(JsonNode node) => node.ToJsonString(new JsonSerializerOptions { WriteIndented = true });

    /// <summary>
    /// Serializes a <see cref="CallToolResult"/> with the SDK's own serialization
    /// conventions, preserving <c>content</c>, <c>structuredContent</c>,
    /// <c>isError</c> and any other returned protocol fields.
    /// </summary>
    public static JsonNode? SerializeCallToolResult(CallToolResult result) =>
        JsonSerializer.SerializeToNode(result, McpJsonUtilities.DefaultOptions);

    /// <summary>Serializes the canonical MCP protocol tool definition for <c>describe --output json</c>.</summary>
    public static JsonNode? SerializeProtocolTool(ModelContextProtocol.Protocol.Tool protocolTool) =>
        JsonSerializer.SerializeToNode(protocolTool, McpJsonUtilities.DefaultOptions);

    /// <summary>
    /// The CLI-only result envelope for <c>call --output json</c>. <paramref name="result"/>
    /// carries the complete handler result (null when the invocation failed without one);
    /// <paramref name="error"/> is present only for adapter failures — success metadata is
    /// never manufactured.
    /// </summary>
    public static JsonObject BuildEnvelope(string? toolName, bool success, JsonNode? result, ToolEnvelopeError? error)
    {
        var envelope = new JsonObject
        {
            ["tool"] = toolName,
            ["success"] = success,
            ["result"] = result?.DeepClone(),
            ["error"] = error is null ? null : error.ToJson(),
        };
        return envelope;
    }

    /// <summary>Adapter-failure description inside the CLI envelope.</summary>
    public sealed class ToolEnvelopeError
    {
        public required string Code { get; init; }
        public required string Stage { get; init; }
        public required string Message { get; init; }
        public IReadOnlyList<ToolValidationError> Details { get; init; } = Array.Empty<ToolValidationError>();

        public JsonObject ToJson()
        {
            var details = new JsonArray();
            foreach (var detail in Details)
                details.Add(new JsonObject { ["path"] = detail.Path, ["message"] = detail.Message });
            return new JsonObject
            {
                ["code"] = Code,
                ["stage"] = Stage,
                ["message"] = Message,
                ["details"] = details,
            };
        }
    }

    // ──────────────────────────────────────────────
    // Error rendering
    // ──────────────────────────────────────────────

    public static void WriteValidationErrors(string headline, IReadOnlyList<ToolValidationError> errors)
    {
        Error($"{headline} ({errors.Count} error{(errors.Count == 1 ? "" : "s")}).");
        foreach (var error in errors)
            Console.Error.WriteLine(error.ToString());
    }

    // ──────────────────────────────────────────────
    // Describe text rendering
    // ──────────────────────────────────────────────

    /// <summary>
    /// Deterministic text rendering for <c>describe</c>: header fields, then one
    /// line per input property (dotted paths for nested objects, <c>path[]</c> for
    /// array items) with type, default, enum, required-ness and description.
    /// </summary>
    public static void RenderDescribeText(ToolCatalogEntry entry)
    {
        WriteStdoutLine($"name: {entry.Name}");
        if (!string.IsNullOrEmpty(entry.Title))
            WriteStdoutLine($"title: {entry.Title}");
        WriteStdoutLine($"category: {entry.Category}");
        WriteStdoutLine("description:");
        foreach (var line in entry.Description.Split('\n'))
            WriteStdoutLine("  " + line.TrimEnd('\r'));

        if (entry.Annotations is not null)
        {
            var hints = new List<string>();
            if (entry.Annotations.ReadOnlyHint is { } readOnlyHint) hints.Add($"readOnlyHint={readOnlyHint.ToString().ToLowerInvariant()}");
            if (entry.Annotations.DestructiveHint is { } destructiveHint) hints.Add($"destructiveHint={destructiveHint.ToString().ToLowerInvariant()}");
            if (entry.Annotations.IdempotentHint is { } idempotentHint) hints.Add($"idempotentHint={idempotentHint.ToString().ToLowerInvariant()}");
            if (entry.Annotations.OpenWorldHint is { } openWorldHint) hints.Add($"openWorldHint={openWorldHint.ToString().ToLowerInvariant()}");
            if (hints.Count > 0)
                WriteStdoutLine($"annotations: {string.Join(", ", hints)}");
        }

        var properties = entry.InputSchema.TryGetProperty("properties", out var propertiesElement) &&
                         propertiesElement.ValueKind == JsonValueKind.Object
            ? propertiesElement
            : default;
        if (properties.ValueKind != JsonValueKind.Object || !properties.EnumerateObject().Any())
        {
            WriteStdoutLine("inputs: (none — this tool takes no parameters)");
            return;
        }

        WriteStdoutLine("inputs:");
        var requiredNames = RequiredNames(entry.InputSchema);
        foreach (var property in properties.EnumerateObject())
            RenderInputProperty(property.Value, property.Name, requiredNames, indent: "  ");
    }

    private static void RenderInputProperty(JsonElement schema, string path, HashSet<string> requiredNames, string indent)
    {
        if (schema.ValueKind != JsonValueKind.Object)
            return;

        var types = DeclaredTypes(schema);
        var parts = new List<string> { $"type={types}" };
        parts.Add($"required={(requiredNames.Contains(path) ? "yes" : "no")}");
        if (schema.TryGetProperty("default", out var defaultElement) && defaultElement.ValueKind != JsonValueKind.Undefined)
            parts.Add($"default={CompactJson(defaultElement)}");
        if (schema.TryGetProperty("enum", out var enumElement) && enumElement.ValueKind == JsonValueKind.Array)
            parts.Add($"enum=[{string.Join(", ", enumElement.EnumerateArray().Select(item => CompactJson(item)))}]");

        var description = schema.TryGetProperty("description", out var descriptionElement) &&
                          descriptionElement.ValueKind == JsonValueKind.String
            ? CollapseWhitespace(descriptionElement.GetString() ?? "")
            : "";
        var suffix = description.Length > 0 ? $" — {description}" : "";

        WriteStdoutLine($"{indent}{path}: {string.Join(" ", parts)}{suffix}");

        // Nested objects and array item schemas get their own lines.
        if (types.Contains("object") && schema.TryGetProperty("properties", out var nested) && nested.ValueKind == JsonValueKind.Object)
        {
            foreach (var property in nested.EnumerateObject())
                RenderInputProperty(property.Value, $"{path}.{property.Name}", RequiredNames(schema), indent + "  ");
        }
        else if (types.Contains("array") && schema.TryGetProperty("items", out var items) && items.ValueKind == JsonValueKind.Object)
        {
            RenderInputProperty(items, $"{path}[]", new HashSet<string>(StringComparer.Ordinal), indent + "  ");
        }
    }

    private static string DeclaredTypes(JsonElement schema)
    {
        if (!schema.TryGetProperty("type", out var typeElement))
            return "unconstrained";
        return typeElement.ValueKind switch
        {
            JsonValueKind.String => typeElement.GetString() ?? "unconstrained",
            JsonValueKind.Array => string.Join("|", typeElement.EnumerateArray()
                .Where(entry => entry.ValueKind == JsonValueKind.String)
                .Select(entry => entry.GetString())),
            _ => "unconstrained",
        };
    }

    private static HashSet<string> RequiredNames(JsonElement schema)
    {
        var names = new HashSet<string>(StringComparer.Ordinal);
        if (schema.ValueKind == JsonValueKind.Object &&
            schema.TryGetProperty("required", out var required) &&
            required.ValueKind == JsonValueKind.Array)
        {
            foreach (var entry in required.EnumerateArray())
            {
                if (entry.ValueKind == JsonValueKind.String)
                    names.Add(entry.GetString() ?? "");
            }
        }

        return names;
    }

    private static string CompactJson(JsonElement element) => element.GetRawText();

    private static string CollapseWhitespace(string text) =>
        string.Join(' ', text.Split((char[]?)null, StringSplitOptions.RemoveEmptyEntries));

    // ──────────────────────────────────────────────
    // CallToolResult text rendering
    // ──────────────────────────────────────────────

    /// <summary>
    /// Text rendering of a returned tool result: text content blocks verbatim,
    /// other block kinds as compact protocol JSON, then any structured content
    /// pretty-printed. Deterministic and free of adapter-added metadata.
    /// Returns the rendered text (newline-terminated) so callers can route it to
    /// stdout or to an output file.
    /// </summary>
    public static string RenderCallResult(CallToolResult result)
    {
        var builder = new StringBuilder();
        foreach (var block in result.Content)
        {
            if (block is TextContentBlock text)
                builder.AppendLine(text.Text);
            else
                builder.AppendLine(Compact(SerializeBlock(block)));
        }

        if (result.StructuredContent is JsonElement structured &&
            structured.ValueKind is not (JsonValueKind.Undefined or JsonValueKind.Null))
        {
            var node = JsonSerializer.SerializeToNode(structured, McpJsonUtilities.DefaultOptions);
            if (node is not null)
                builder.AppendLine(Pretty(node));
        }

        return builder.ToString();
    }

    /// <summary>Writes the text rendering to stdout.</summary>
    public static void RenderCallResultText(CallToolResult result) =>
        Console.Out.Write(RenderCallResult(result));

    /// <summary>Text-block excerpt of a result, used to preserve outcome information in stderr diagnostics.</summary>
    public static string Excerpt(CallToolResult result, int maxLength = 2000)
    {
        var text = string.Join(
            Environment.NewLine,
            result.Content.OfType<TextContentBlock>().Select(block => block.Text));
        text = CollapseWhitespace(text);
        return text.Length <= maxLength ? text : text[..maxLength] + "…";
    }

    private static JsonNode SerializeBlock(ContentBlock block)
    {
        var serialized = JsonSerializer.SerializeToNode(block, block.GetType(), McpJsonUtilities.DefaultOptions);
        return serialized ?? new JsonObject();
    }

    // ──────────────────────────────────────────────
    // Output file support (example/validate/call)
    // ──────────────────────────────────────────────

    /// <summary>
    /// Preflight for <c>--output-file</c>, run before a potentially mutating call:
    /// the target must not be a directory, its parent must be creatable/writable,
    /// and the target must not collide with the input document or any file
    /// referenced by <c>--file</c> or a file-backed input document's <c>$file</c>
    /// references. Any rejection maps to the invalid-input exit code.
    /// </summary>
    public static void PreflightOutputFile(string outputFile, ToolInputRequest request)
    {
        var target = FullPath(outputFile);

        if (Directory.Exists(target))
            throw new ToolCliException(ToolExitCodes.InvalidInput,
                $"--output-file \"{outputFile}\" is a directory.");

        foreach (var referenced in CollectReferencedFiles(request))
        {
            if (SameFile(target, referenced))
                throw new ToolCliException(ToolExitCodes.InvalidInput,
                    $"--output-file \"{outputFile}\" would overwrite referenced file \"{referenced}\"; choose a different output path.");
        }

        try
        {
            var parent = Path.GetDirectoryName(target);
            if (!string.IsNullOrEmpty(parent))
                Directory.CreateDirectory(parent);

            // Writability probe: open without truncating, then release.
            using (new FileStream(target, FileMode.OpenOrCreate, FileAccess.Write, FileShare.None))
            {
            }
        }
        catch (Exception exception) when (exception is IOException or UnauthorizedAccessException
                                              or System.Security.SecurityException or NotSupportedException)
        {
            throw new ToolCliException(ToolExitCodes.InvalidInput,
                $"--output-file \"{outputFile}\" is not writable: {exception.Message}");
        }
    }

    /// <summary>
    /// Writes the representation through a temporary sibling file and moves it over
    /// the target only after a complete write, replacing any existing file. The
    /// caller decides what happens on failure — the tool may already have executed.
    /// </summary>
    public static void WriteOutputFile(string outputFile, string content)
    {
        var target = FullPath(outputFile);
        var parent = Path.GetDirectoryName(target);
        if (!string.IsNullOrEmpty(parent))
            Directory.CreateDirectory(parent);

        var temporary = Path.Combine(
            string.IsNullOrEmpty(parent) ? Environment.CurrentDirectory : parent,
            $".{Path.GetFileName(target)}.{Guid.NewGuid():N}.tmp");
        try
        {
            File.WriteAllText(temporary, content, Utf8NoBom);
            File.Move(temporary, target, overwrite: true);
        }
        catch
        {
            try { File.Delete(temporary); } catch { /* best-effort temp cleanup */ }
            throw;
        }
    }

    /// <summary>
    /// Files the output write must never clobber: the <c>--input</c> document
    /// (file-backed only), every <c>--file</c> value path, and every
    /// <c>{"$file": "..."}</c> reference found in a file-backed input document.
    /// Stdin input cannot be re-read, so its <c>$file</c> references (resolved
    /// against the current directory) are not part of this list.
    /// </summary>
    public static IReadOnlyList<string> CollectReferencedFiles(ToolInputRequest request)
    {
        var referenced = new List<string>();

        if (request.InputPath is not null && request.InputPath != "-")
        {
            var document = FullPath(request.InputPath);
            referenced.Add(document);
            CollectInputDocumentFileReferences(document, referenced);
        }

        foreach (var raw in request.File)
        {
            var separator = raw.IndexOf('=');
            if (separator <= 0) continue;
            var value = raw[(separator + 1)..];
            if (value.Length > 0)
                referenced.Add(FullPath(value));
        }

        return referenced.Distinct(StringComparer.Ordinal).ToList();
    }

    /// <summary>Re-reads a file-backed input document and collects its $file reference targets.</summary>
    private static void CollectInputDocumentFileReferences(string documentPath, List<string> referenced)
    {
        try
        {
            if (!File.Exists(documentPath)) return;
            var text = File.ReadAllText(documentPath);
            if (JsonNode.Parse(text) is not JsonObject root) return;

            var baseDirectory = Path.GetDirectoryName(documentPath) ?? Environment.CurrentDirectory;
            CollectFileReferenceTargets(root, baseDirectory, referenced);
        }
        catch
        {
            // The input builder reports malformed documents; a scan failure here
            // must not mask that. Collision coverage is best-effort for this path.
        }
    }

    /// <summary>
    /// Walks an input document collecting targets of recognized $file references
    /// (an object with exactly one string-valued <c>$file</c> property). Over-approximating
    /// here only rejects more writes, never accepts a dangerous one.
    /// </summary>
    private static void CollectFileReferenceTargets(JsonNode? node, string baseDirectory, List<string> referenced)
    {
        switch (node)
        {
            case JsonObject objectNode when objectNode.Count == 1 &&
                                            objectNode.TryGetPropertyValue("$file", out var fileNode) &&
                                            fileNode is JsonValue value &&
                                            value.GetValueKind() == JsonValueKind.String:
                var target = FullPath(ResolveAgainst(value.GetValue<string>(), baseDirectory));
                referenced.Add(target);
                break;

            case JsonObject objectNode:
                foreach (var (_, child) in objectNode)
                    CollectFileReferenceTargets(child, baseDirectory, referenced);
                break;

            case JsonArray array:
                foreach (var item in array)
                    CollectFileReferenceTargets(item, baseDirectory, referenced);
                break;
        }
    }

    // ──────────────────────────────────────────────
    // Path helpers
    // ──────────────────────────────────────────────

    private static string FullPath(string path) => Path.GetFullPath(path);

    private static string ResolveAgainst(string path, string baseDirectory) =>
        Path.IsPathRooted(path) ? path : Path.Combine(baseDirectory, path);

    /// <summary>Invariant, deterministic comparisons across file systems; rejecting a harmless match is the safe direction.</summary>
    private static bool SameFile(string left, string right)
    {
        var leftTrimmed = left.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar);
        var rightTrimmed = right.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar);
        return string.Equals(leftTrimmed, rightTrimmed, StringComparison.OrdinalIgnoreCase);
    }
}
