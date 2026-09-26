#nullable enable
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace DynamicsCrm.DevKit.Cli.Tool;

/// <summary>
/// Builds the final public argument object for a <c>devkit tool</c> invocation from raw
/// CLI input options (<see cref="ToolInputRequest"/>) and the tool's MCP input schema.
///
/// Stages, applied in this exact order regardless of command-line placement:
/// <list type="number">
/// <item><c>--input</c> document: one UTF-8 JSON object (file or stdin). Malformed JSON,
/// a non-object root and duplicate property names are rejected. <c>$file</c> references
/// inside the document are replaced with file text before merging.</item>
/// <item><c>--set path=value</c> occurrences, in order (schema-aware scalar conversion).</item>
/// <item><c>--add path=value</c> occurrences, in order (append scalars to schema arrays).</item>
/// <item><c>--file path=file-path</c> occurrences, in order (file text into string properties).</item>
/// </list>
/// Modifier splitting happens at the FIRST equals sign; the value keeps further equals
/// signs verbatim. No quotes, escapes, or expressions are interpreted.
///
/// Paths for modifiers are dot-separated object property paths without array indexes,
/// wildcards, or escaped dots — such cases belong in an --input document.
///
/// After all stages the final object is validated with <see cref="ToolSchemaValidator"/>.
/// Every accumulated <see cref="ToolValidationError"/> is carried by the thrown
/// <see cref="ToolInputException"/>; independent errors are collected instead of stopping
/// at the first one. Relative paths resolve against <see cref="Environment.CurrentDirectory"/>
/// at call time, except <c>$file</c> references inside a file-backed --input document,
/// which resolve against that document's directory. Absolute paths stay absolute.
/// </summary>
public static class ToolInputBuilder
{
    private static readonly UTF8Encoding StrictUtf8 = new(encoderShouldEmitUTF8Identifier: false, throwOnInvalidBytes: true);

    public static ToolInputResult Build(JsonElement inputSchema, ToolInputRequest request)
    {
        var effectiveRequest = request ?? new ToolInputRequest();
        var errors = new List<ToolValidationError>();
        var warnings = new List<string>();

        // Reject unsupported schema constructs before any argument processing.
        var schemaErrors = ToolSchemaValidator.CheckSchemaSupport(inputSchema);
        if (schemaErrors.Count > 0)
            throw NewException("the tool input schema uses constructs the CLI does not support", schemaErrors);

        var rootSchema = (JsonObject)JsonNode.Parse(inputSchema.GetRawText())!;

        // Stage 1: --input document (file or stdin).
        JsonObject arguments;
        if (effectiveRequest.InputPath is null)
        {
            arguments = new JsonObject();
        }
        else
        {
            var documentBase = ReadInputDocument(effectiveRequest.InputPath, out var document, errors);
            if (document is null)
                throw NewException("the --input document could not be read", errors);
            var resolved = ResolveFileReferences(document, rootSchema, documentBase, path: "", errors);
            if (resolved is not JsonObject resolvedObject)
            {
                errors.Add(new ToolValidationError
                {
                    Path = "",
                    Message = "the --input document must resolve to a JSON object"
                });
                throw NewException("the --input document could not be read", errors);
            }

            arguments = resolvedObject;
        }

        // Stages 2-4 in precedence order; occurrences within each stage keep their order.
        var assignments = new List<Assignment>();
        foreach (var raw in effectiveRequest.Set)
            ApplySet(rootSchema, arguments, raw, assignments, errors);
        foreach (var raw in effectiveRequest.Add)
            ApplyAdd(rootSchema, arguments, raw, errors);
        foreach (var raw in effectiveRequest.File)
            ApplyFile(rootSchema, arguments, raw, assignments, errors);

        if (errors.Count > 0)
            throw NewException("the tool input could not be built", errors);

        // Final gate: contract validation of the resolved arguments.
        var validationErrors = ToolSchemaValidator.Validate(inputSchema, arguments);
        if (validationErrors.Count > 0)
        {
            errors.AddRange(validationErrors);
            throw NewException("the tool input does not match the published input contract", errors);
        }

        return new ToolInputResult
        {
            Arguments = arguments,
            Warnings = warnings.ToArray()
        };
    }

    private static ToolInputException NewException(string message, IReadOnlyList<ToolValidationError> errors) =>
        new($"{message} ({errors.Count} error{(errors.Count == 1 ? "" : "s")}).", errors);

    private readonly record struct Assignment(string Path, string Stage);

    // ------------------------------------------------------------------
    // Stage 1: --input document
    // ------------------------------------------------------------------

    /// <summary>Reads the --input document; returns its base directory for $file references.</summary>
    private static string ReadInputDocument(string inputPath, out JsonObject? document, List<ToolValidationError> errors)
    {
        document = null;
        string text;
        string baseDirectory;

        if (inputPath == "-")
        {
            text = Console.In.ReadToEnd();
            baseDirectory = Environment.CurrentDirectory;
        }
        else
        {
            var resolvedPath = ResolveAgainstCurrentDirectory(inputPath);
            if (ReadTextFile(resolvedPath, out text, out var readError))
            {
                baseDirectory = Path.GetDirectoryName(Path.GetFullPath(resolvedPath)) ?? Environment.CurrentDirectory;
            }
            else
            {
                errors.Add(new ToolValidationError { Path = "", Message = $"--input failed: {readError}" });
                return Environment.CurrentDirectory;
            }
        }

        try
        {
            using var parsed = JsonDocument.Parse(
                text,
                new JsonDocumentOptions { CommentHandling = JsonCommentHandling.Disallow, AllowTrailingCommas = false });

            if (parsed.RootElement.ValueKind != JsonValueKind.Object)
            {
                errors.Add(new ToolValidationError
                {
                    Path = "",
                    Message = $"--input must contain a JSON object but got {DescribeRootElement(parsed.RootElement.ValueKind)}"
                });
                return baseDirectory;
            }

            if (FindDuplicateProperty(parsed.RootElement, "", out var duplicatePath, out var duplicateName))
            {
                errors.Add(new ToolValidationError
                {
                    Path = duplicatePath,
                    Message = $"--input contains duplicate JSON property name \"{duplicateName}\""
                });
                return baseDirectory;
            }
        }
        catch (JsonException exception)
        {
            errors.Add(new ToolValidationError
            {
                Path = "",
                Message = $"--input is not valid JSON: {exception.Message}"
            });
            return baseDirectory;
        }

        document = (JsonObject)JsonNode.Parse(text)!;
        return baseDirectory;
    }

    /// <summary>Token walk that detects duplicate JSON property names, which System.Text.Json otherwise tolerates.</summary>
    private static bool FindDuplicateProperty(JsonElement element, string path, out string duplicatePath, out string duplicateName)
    {
        duplicatePath = "";
        duplicateName = "";
        switch (element.ValueKind)
        {
            case JsonValueKind.Object:
            {
                var seen = new HashSet<string>(StringComparer.Ordinal);
                foreach (var property in element.EnumerateObject())
                {
                    if (!seen.Add(property.Name))
                    {
                        duplicatePath = path;
                        duplicateName = property.Name;
                        return true;
                    }

                    var childPath = ToolSchemaValidator.Join(path, property.Name);
                    if (FindDuplicateProperty(property.Value, childPath, out duplicatePath, out duplicateName))
                        return true;
                }

                break;
            }
            case JsonValueKind.Array:
            {
                var index = 0;
                foreach (var item in element.EnumerateArray())
                {
                    if (FindDuplicateProperty(item, $"{path}[{index}]", out duplicatePath, out duplicateName))
                        return true;
                    index++;
                }

                break;
            }
        }

        return false;
    }

    private static string DescribeRootElement(JsonValueKind kind) => kind switch
    {
        JsonValueKind.Array => "an array",
        JsonValueKind.String => "a string",
        JsonValueKind.Number => "a number",
        JsonValueKind.True or JsonValueKind.False => "a boolean",
        _ => kind.ToString()
    };

    // ------------------------------------------------------------------
    // $file references in input documents
    // ------------------------------------------------------------------

    /// <summary>
    /// Replaces <c>{"$file": "path"}</c> references with the referenced file's UTF-8 text.
    /// A reference is recognized only as an object with exactly one property named
    /// <c>$file</c> whose value is a string, at a destination whose schema permits a
    /// string. Ordinary objects at object destinations are preserved untouched. File
    /// contents are never parsed for further references, expressions, or substitutions.
    /// Returns the node to store at the location (the original node when nothing changed).
    /// </summary>
    private static JsonNode? ResolveFileReferences(JsonNode? node, JsonObject schema, string baseDirectory, string path, List<ToolValidationError> errors)
    {
        switch (node)
        {
            case JsonObject objectNode:
            {
                var permitsString = ToolSchemaValidator.PermitsString(schema);
                if (objectNode.ContainsKey("$file") && permitsString)
                {
                    if (objectNode.Count == 1 && objectNode["$file"] is JsonValue fileValue &&
                        fileValue.GetValueKind() == JsonValueKind.String)
                    {
                        var resolvedPath = ResolvePathAgainst(fileValue.GetValue<string>(), baseDirectory);
                        if (ReadTextFile(resolvedPath, out var text, out var readError))
                            return text;
                        errors.Add(new ToolValidationError
                        {
                            Path = path,
                            Message = $"$file reference could not be resolved: {readError}"
                        });
                    }
                    else
                    {
                        errors.Add(new ToolValidationError
                        {
                            Path = path,
                            Message = "malformed $file reference: the object must be exactly {\"$file\": \"<file path>\"} with a string value"
                        });
                    }

                    return objectNode;
                }

                if (!ToolSchemaValidator.PermitsObject(schema))
                    return objectNode; // Not a valid object location; the final validation reports the type mismatch.

                foreach (var (name, child) in objectNode.ToArray())
                {
                    var childSchema = ToolSchemaValidator.PropertySchema(schema, name) ?? EmptySchema;
                    var replacement = ResolveFileReferences(child, childSchema, baseDirectory, ToolSchemaValidator.Join(path, name), errors);
                    if (!ReferenceEquals(replacement, child))
                        objectNode[name] = replacement;
                }

                return objectNode;
            }
            case JsonArray array:
            {
                var itemsSchema = schema.TryGetPropertyValue("items", out var itemsNode) && itemsNode is JsonObject itemsObject
                    ? itemsObject
                    : EmptySchema;
                for (var index = 0; index < array.Count; index++)
                {
                    var replacement = ResolveFileReferences(array[index], itemsSchema, baseDirectory, $"{path}[{index}]", errors);
                    if (!ReferenceEquals(replacement, array[index]))
                        array[index] = replacement; // JsonArray rejects assigning a node back into itself.
                }

                return array;
            }
            default:
                return node;
        }
    }

    /// <summary>Shared unconstrained schema for values the schema does not declare.</summary>
    private static readonly JsonObject EmptySchema = new();

    // ------------------------------------------------------------------
    // Modifier parsing and path resolution
    // ------------------------------------------------------------------

    private static bool TrySplitModifier(string raw, string option, out string path, out string value, List<ToolValidationError> errors)
    {
        path = "";
        value = "";
        var separator = raw.IndexOf('=');
        if (separator < 0)
        {
            errors.Add(new ToolValidationError
            {
                Path = "",
                Message = $"invalid --{option} argument \"{raw}\": expected path=value"
            });
            return false;
        }

        path = raw[..separator].Trim();
        value = raw[(separator + 1)..];
        if (path.Length == 0)
        {
            errors.Add(new ToolValidationError
            {
                Path = "",
                Message = $"invalid --{option} argument \"{raw}\": the path before '=' is empty"
            });
            return false;
        }

        return true;
    }

    /// <summary>
    /// Splits a modifier path into segments and walks to the target's parent, creating
    /// missing object parents only where the schema permits an object. Returns the leaf
    /// property schema (null when the schema does not declare it) and the containing object.
    /// </summary>
    private static bool TryResolveTarget(
        JsonObject rootSchema,
        JsonObject arguments,
        string path,
        string option,
        [NotNullWhen(true)] out JsonObject? leafSchema,
        out JsonObject parent,
        out string leafName,
        List<ToolValidationError> errors)
    {
        leafSchema = null;
        parent = arguments;
        leafName = "";

        var segments = path.Split('.');
        foreach (var segment in segments)
        {
            if (segment.Length == 0)
            {
                errors.Add(new ToolValidationError
                {
                    Path = "",
                    Message = $"invalid --{option} path \"{path}\": empty path segment"
                });
                return false;
            }

            if (segment.IndexOfAny(ArraySeparatorChars) >= 0)
            {
                errors.Add(new ToolValidationError
                {
                    Path = "",
                    Message = $"invalid --{option} path \"{path}\": array indexes, wildcards, and escaped dots are not supported in modifier paths; use --input for those cases"
                });
                return false;
            }
        }

        var currentSchema = rootSchema;
        var current = arguments;
        var currentPath = "";

        for (var index = 0; index < segments.Length - 1; index++)
        {
            var segment = segments[index];
            currentPath = ToolSchemaValidator.Join(currentPath, segment);
            var segmentSchema = ToolSchemaValidator.PropertySchema(currentSchema, segment);
            if (segmentSchema is null)
            {
                errors.Add(new ToolValidationError
                {
                    Path = currentPath,
                    Message = $"property \"{currentPath}\" is not declared by the tool schema; modifier paths may only address schema properties (use --input for complete documents)"
                });
                return false;
            }

            if (!ToolSchemaValidator.PermitsObject(segmentSchema))
            {
                var declaredType = DescribeDeclaredType(segmentSchema);
                errors.Add(new ToolValidationError
                {
                    Path = currentPath,
                    Message = $"cannot descend into \"{currentPath}\": the schema declares it as {declaredType}, not object; use --input"
                });
                return false;
            }

            if (current.TryGetPropertyValue(segment, out var existing))
            {
                if (existing is JsonObject existingObject)
                {
                    current = existingObject;
                }
                else
                {
                    errors.Add(new ToolValidationError
                    {
                        Path = currentPath,
                        Message = $"cannot descend into \"{currentPath}\": the input contains {ToolSchemaValidator.DescribeValue(existing)} there; use --input"
                    });
                    return false;
                }
            }
            else
            {
                var created = new JsonObject();
                current[segment] = created;
                current = created;
            }

            currentSchema = segmentSchema;
        }

        leafName = segments[^1];
        if (leafName.Length == 0)
        {
            errors.Add(new ToolValidationError
            {
                Path = "",
                Message = $"invalid --{option} path \"{path}\": empty path segment"
            });
            return false;
        }

        if (leafName.IndexOfAny(ArraySeparatorChars) >= 0)
        {
            errors.Add(new ToolValidationError
            {
                Path = "",
                Message = $"invalid --{option} path \"{path}\": array indexes, wildcards, and escaped dots are not supported in modifier paths; use --input for those cases"
            });
            return false;
        }

        var leafPath = ToolSchemaValidator.Join(currentPath, leafName);
        leafSchema = ToolSchemaValidator.PropertySchema(currentSchema, leafName);
        if (leafSchema is null)
        {
            errors.Add(new ToolValidationError
            {
                Path = leafPath,
                Message = $"property \"{leafPath}\" is not declared by the tool schema; modifier paths may only address schema properties (use --input for complete documents)"
            });
            return false;
        }

        parent = current;
        return true;
    }

    private static readonly char[] ArraySeparatorChars = { '[', ']', '*', '\\' };

    // ------------------------------------------------------------------
    // Stage 2: --set
    // ------------------------------------------------------------------

    private static void ApplySet(JsonObject rootSchema, JsonObject arguments, string raw, List<Assignment> assignments, List<ToolValidationError> errors)
    {
        if (!TrySplitModifier(raw, "set", out var path, out var value, errors))
            return;

        if (!TryResolveTarget(rootSchema, arguments, path, "set", out var leafSchema, out var parent, out var leafName, errors))
            return;

        // Conflict checking comes before conversion so ancestor/descendant overlap is
        // reported even when the earlier assignment makes the new value unconvertible.
        if (!CheckAssignmentConflicts(path, "set", assignments, errors))
            return;

        if (!TryConvertScalar(value, leafSchema, path, "set", out var converted, errors))
            return;

        if (parent[leafName] is JsonObject or JsonArray)
        {
            errors.Add(new ToolValidationError
            {
                Path = path,
                Message = $"cannot replace the existing object or array at \"{path}\" with a scalar; it would silently discard values (edit the --input document instead)"
            });
            return;
        }

        parent[leafName] = converted;
        assignments.Add(new Assignment(path, "set"));
    }

    // ------------------------------------------------------------------
    // Stage 3: --add
    // ------------------------------------------------------------------

    private static void ApplyAdd(JsonObject rootSchema, JsonObject arguments, string raw, List<ToolValidationError> errors)
    {
        if (!TrySplitModifier(raw, "add", out var path, out var value, errors))
            return;

        if (!TryResolveTarget(rootSchema, arguments, path, "add", out var leafSchema, out var parent, out var leafName, errors))
            return;

        var declaredTypes = ToolSchemaValidator.DeclaredTypes(leafSchema);
        var nonNullTypes = declaredTypes.Where(t => t != "null").ToHashSet();

        if (nonNullTypes.Count != 1 || !nonNullTypes.Contains("array"))
        {
            if (declaredTypes.Count > 0 && nonNullTypes.Count == 1 && nonNullTypes.Contains("string"))
            {
                errors.Add(new ToolValidationError
                {
                    Path = path,
                    Message = $"cannot --add to \"{path}\": the schema declares it as string, not array; supply its JSON or text content with --file (or --set for a plain string)"
                });
            }
            else
            {
                errors.Add(new ToolValidationError
                {
                    Path = path,
                    Message = $"cannot --add to \"{path}\": the schema declares it as {DescribeDeclaredType(leafSchema)}, not array; use --input"
                });
            }

            return;
        }

        if (!leafSchema.TryGetPropertyValue("items", out var itemsNode) || itemsNode is not JsonObject itemsSchema)
        {
            errors.Add(new ToolValidationError
            {
                Path = path,
                Message = $"cannot --add to \"{path}\": the array items are not constrained by a scalar schema; use --input"
            });
            return;
        }

        var itemTypes = ToolSchemaValidator.DeclaredTypes(itemsSchema).Where(t => t != "null").ToHashSet();
        if (itemTypes.Count != 1 || !IsScalarType(itemTypes.Single()))
        {
            errors.Add(new ToolValidationError
            {
                Path = path,
                Message = $"cannot --add to \"{path}\": array items are declared as {DescribeDeclaredType(itemsSchema)}, not a scalar; use --input"
            });
            return;
        }

        if (parent.TryGetPropertyValue(leafName, out var existing))
        {
            if (existing is not JsonArray existingArray)
            {
                errors.Add(new ToolValidationError
                {
                    Path = path,
                    Message = $"cannot --add to \"{path}\": the input contains {ToolSchemaValidator.DescribeValue(existing)} there, not an array; use --input"
                });
                return;
            }

            if (!TryConvertScalar(value, itemsSchema, path, "add", out var converted, errors))
                return;

            existingArray.Add(converted);
            return;
        }

        if (!TryConvertScalar(value, itemsSchema, path, "add", out var firstValue, errors))
            return;

        parent[leafName] = new JsonArray(firstValue);
    }

    // ------------------------------------------------------------------
    // Stage 4: --file
    // ------------------------------------------------------------------

    private static void ApplyFile(JsonObject rootSchema, JsonObject arguments, string raw, List<Assignment> assignments, List<ToolValidationError> errors)
    {
        if (!TrySplitModifier(raw, "file", out var path, out var filePath, errors))
            return;

        if (!TryResolveTarget(rootSchema, arguments, path, "file", out var leafSchema, out var parent, out var leafName, errors))
            return;

        var nonNullTypes = ToolSchemaValidator.DeclaredTypes(leafSchema).Where(t => t != "null").ToHashSet();
        if (nonNullTypes.Count != 1 || !nonNullTypes.Contains("string"))
        {
            errors.Add(new ToolValidationError
            {
                Path = path,
                Message = $"cannot --file \"{path}\": the schema declares it as {DescribeDeclaredType(leafSchema)}, not string; --file assigns file CONTENTS — to pass a file path use --set, for structured content use --input"
            });
            return;
        }

        if (!CheckAssignmentConflicts(path, "file", assignments, errors))
            return;

        if (parent[leafName] is JsonObject or JsonArray)
        {
            errors.Add(new ToolValidationError
            {
                Path = path,
                Message = $"cannot replace the existing object or array at \"{path}\" with a string; it would silently discard values (edit the --input document instead)"
            });
            return;
        }

        var resolvedPath = ResolveAgainstCurrentDirectory(filePath);
        if (!ReadTextFile(resolvedPath, out var text, out var readError))
        {
            errors.Add(new ToolValidationError
            {
                Path = path,
                Message = $"--file failed for \"{path}\": {readError}"
            });
            return;
        }

        parent[leafName] = text;
        assignments.Add(new Assignment(path, "file"));
    }

    // ------------------------------------------------------------------
    // Shared conversion and conflict helpers
    // ------------------------------------------------------------------

    private static bool IsScalarType(string type) =>
        type is "string" or "boolean" or "integer" or "number";

    /// <summary>
    /// Converts one --set/--add value to the JSON node the target schema declares.
    /// The string value is interpreted strictly by the schema type; enum membership,
    /// bounds, and the resulting JSON kind are checked against the schema afterwards.
    /// </summary>
    private static bool TryConvertScalar(string value, JsonObject targetSchema, string path, string option, out JsonNode? converted, List<ToolValidationError> errors)
    {
        converted = null;
        var declaredTypes = ToolSchemaValidator.DeclaredTypes(targetSchema);
        var nonNullTypes = declaredTypes.Where(t => t != "null").ToHashSet();

        if (declaredTypes.Count == 0)
        {
            errors.Add(new ToolValidationError
            {
                Path = path,
                Message = $"cannot --{option} \"{path}\": the schema declares no type for it; provide typed JSON with --input"
            });
            return false;
        }

        if (nonNullTypes.Count == 0)
        {
            errors.Add(new ToolValidationError
            {
                Path = path,
                Message = $"cannot --{option} \"{path}\": the schema only permits null; provide JSON with --input"
            });
            return false;
        }

        if (nonNullTypes.Count > 1)
        {
            var typeList = string.Join(", ", nonNullTypes.OrderBy(t => t, StringComparer.Ordinal).Select(t => $"\"{t}\""));
            errors.Add(new ToolValidationError
            {
                Path = path,
                Message = $"cannot --{option} \"{path}\": the schema permits multiple types ({typeList}); provide typed JSON with --input"
            });
            return false;
        }

        JsonNode? node;
        switch (nonNullTypes.Single())
        {
            case "string":
                // Verbatim, including empty values; "null" stays the literal string.
                node = value;
                break;

            case "boolean":
                if (value == "true")
                    node = true;
                else if (value == "false")
                    node = false;
                else
                {
                    errors.Add(new ToolValidationError
                    {
                        Path = path,
                        Message = $"invalid boolean value \"{value}\" for \"{path}\": only true or false are accepted"
                    });
                    return false;
                }

                break;

            case "integer":
                if (HasWhitespace(value))
                {
                    errors.Add(NewScalarError(option, path, value, "an integral number without whitespace"));
                    return false;
                }

                if (!long.TryParse(value, NumberStyles.AllowLeadingSign, CultureInfo.InvariantCulture, out var integerValue))
                {
                    errors.Add(NewScalarError(option, path, value, "an integral number within the Int64 range"));
                    return false;
                }

                node = integerValue;
                break;

            case "number":
                if (HasWhitespace(value))
                {
                    errors.Add(NewScalarError(option, path, value, "a JSON number without whitespace"));
                    return false;
                }

                if (!double.TryParse(value, NumberStyles.Float, CultureInfo.InvariantCulture, out var numberValue))
                {
                    errors.Add(NewScalarError(option, path, value, "a JSON number"));
                    return false;
                }

                if (!double.IsFinite(numberValue))
                {
                    errors.Add(NewScalarError(option, path, value, "a finite JSON number"));
                    return false;
                }

                if (!ToolSchemaValidator.IsRoundTripSafe(value))
                {
                    errors.Add(NewScalarError(option, path, value, "a JSON number that keeps its precision when carried as a double"));
                    return false;
                }

                node = numberValue;
                break;

            case "object":
                errors.Add(new ToolValidationError
                {
                    Path = path,
                    Message = $"cannot --{option} \"{path}\": the schema declares it as object; provide the complete object with --input"
                });
                return false;

            case "array":
                errors.Add(new ToolValidationError
                {
                    Path = path,
                    Message = option == "set"
                        ? $"cannot --set \"{path}\": the schema declares it as array; provide the array with --input, or append scalar items with --add"
                        : $"cannot --add \"{path}\": nested arrays are not supported by the modifier syntax; use --input"
                });
                return false;

            default:
                errors.Add(new ToolValidationError
                {
                    Path = path,
                    Message = $"cannot --{option} \"{path}\": the schema declares the unsupported type \"{nonNullTypes.Single()}\"; provide JSON with --input"
                });
                return false;
        }

        // Schema-aware checks for the converted value: exact JSON kind, enum membership, bounds.
        var valueErrors = ToolSchemaValidator.ValidateNodeAgainstSchema(
            JsonDocument.Parse(targetSchema.ToJsonString()).RootElement, node, path);
        if (valueErrors.Count > 0)
        {
            errors.AddRange(valueErrors);
            return false;
        }

        converted = node;
        return true;
    }

    private static ToolValidationError NewScalarError(string option, string path, string value, string expected) =>
        new()
        {
            Path = path,
            Message = $"invalid --{option} value \"{value}\" for \"{path}\": expected {expected}"
        };

    private static bool HasWhitespace(string value) =>
        value.Any(char.IsWhiteSpace);

    /// <summary>
    /// Enforces assignment overlap rules: the same exact path twice within one stage is
    /// an error (a --file assignment MAY override a --set at the same path), and
    /// ancestor/descendant assignments are always errors — a subtree is never silently
    /// discarded.
    /// </summary>
    private static bool CheckAssignmentConflicts(string path, string stage, List<Assignment> assignments, List<ToolValidationError> errors)
    {
        foreach (var assignment in assignments)
        {
            if (assignment.Path == path)
            {
                if (assignment.Stage == stage)
                {
                    errors.Add(new ToolValidationError
                    {
                        Path = path,
                        Message = $"duplicate --{stage} assignment for path \"{path}\""
                    });
                    return false;
                }

                continue; // --file explicitly overrides an earlier --set at the same path.
            }

            if (IsAncestorOf(assignment.Path, path) || IsAncestorOf(path, assignment.Path))
            {
                errors.Add(new ToolValidationError
                {
                    Path = path,
                    Message = $"conflicting assignments \"{assignment.Path}\" and \"{path}\" overlap; remove one of them"
                });
                return false;
            }
        }

        return true;
    }

    private static bool IsAncestorOf(string ancestor, string descendant) =>
        descendant.Length > ancestor.Length &&
        descendant.StartsWith(ancestor, StringComparison.Ordinal) &&
        descendant[ancestor.Length] == '.';

    // ------------------------------------------------------------------
    // File system helpers
    // ------------------------------------------------------------------

    private static string ResolveAgainstCurrentDirectory(string path) =>
        Path.IsPathRooted(path) ? path : Path.Combine(Environment.CurrentDirectory, path);

    private static string ResolvePathAgainst(string path, string baseDirectory) =>
        Path.IsPathRooted(path) ? path : Path.Combine(baseDirectory, path);

    /// <summary>
    /// Reads a file as UTF-8 TEXT (never parsed as JSON). Rejects missing files,
    /// directories, unreadable files, and invalid UTF-8 with a local error reason.
    /// </summary>
    private static bool ReadTextFile(string path, out string text, out string error)
    {
        text = "";
        error = "";

        try
        {
            if (Directory.Exists(path))
            {
                error = $"\"{path}\" is a directory, not a file";
                return false;
            }

            if (!File.Exists(path))
            {
                error = $"file not found: {path}";
                return false;
            }

            var bytes = File.ReadAllBytes(path);
            try
            {
                text = StrictUtf8.GetString(bytes);
                return true;
            }
            catch (DecoderFallbackException)
            {
                error = $"\"{path}\" is not valid UTF-8";
                return false;
            }
        }
        catch (UnauthorizedAccessException)
        {
            error = $"\"{path}\" is not readable";
            return false;
        }
        catch (IOException exception)
        {
            error = $"\"{path}\" could not be read: {exception.Message}";
            return false;
        }
    }

    private static string DescribeDeclaredType(JsonObject schema)
    {
        var declaredTypes = ToolSchemaValidator.DeclaredTypes(schema);
        if (declaredTypes.Count == 0)
            return "an unconstrained value";
        var ordered = declaredTypes.OrderBy(t => t, StringComparer.Ordinal).Select(t => $"\"{t}\"");
        return declaredTypes.Count == 1 ? ordered.Single() : $"one of {string.Join(", ", ordered)}";
    }
}
