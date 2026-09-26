#nullable enable
using DynamicsCrm.DevKit.Cli.Mcp;
using Microsoft.Extensions.DependencyInjection;
using ModelContextProtocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.Cli.Tool;

/// <summary>
/// Shared catalog of available MCP tools, built once per process from the same
/// assembly scan and SDK <see cref="McpServerTool"/> creation the stdio host
/// performs, so the MCP host and the <c>devkit tool</c> CLI branch can never
/// drift. Entries are immutable; availability filtering re-runs per call so it
/// always reflects <see cref="McpServerHost.DisabledToolSet"/> and the requested
/// category level.
/// </summary>
public static class ToolCatalog
{
    private const string ReadOnlyCategory = "readonly";
    private const string AllCategory = "all";

    private static readonly object BuildLock = new();
    private static IReadOnlyList<ToolCatalogEntry>? _allEntries;

    /// <summary>
    /// Available entries for the requested category, ordered deterministically by
    /// name (<see cref="StringComparer.Ordinal"/>).
    /// </summary>
    /// <param name="category">
    /// null or "all" → every available tool; "readonly" → only tools whose
    /// <c>[McpServerTool]</c> declares <c>ReadOnly = true</c>. Unknown values throw.
    /// </param>
    public static IReadOnlyList<ToolCatalogEntry> GetEntries(string? category = null)
    {
        var requestedLevel = ResolveCategoryLevel(category);
        var allowedNames = McpServerHost.GetFilteredToolTypeNames(requestedLevel);
        return AllEntries
            .Where(e => allowedNames.Contains(e.Name))
            .OrderBy(e => e.Name, StringComparer.Ordinal)
            .ToList();
    }

    /// <summary>
    /// Exact ordinal match by tool name among the entries available for the
    /// requested category; null when the tool is unknown or unavailable.
    /// </summary>
    public static ToolCatalogEntry? Find(string name, string? category = null)
    {
        if (string.IsNullOrWhiteSpace(name)) return null;
        var requestedLevel = ResolveCategoryLevel(category);
        var allowedNames = McpServerHost.GetFilteredToolTypeNames(requestedLevel);
        return AllEntries.FirstOrDefault(e =>
            string.Equals(e.Name, name, StringComparison.Ordinal) &&
            allowedNames.Contains(e.Name));
    }

    internal static IEnumerable<MethodInfo> GetAttributedToolMethods(Type toolType) =>
        toolType
            .GetMethods(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Static)
            .Where(m => m.GetCustomAttribute<McpServerToolAttribute>() is not null);

    private static IReadOnlyList<ToolCatalogEntry> AllEntries
    {
        get
        {
            if (_allEntries is not null) return _allEntries;
            lock (BuildLock)
            {
                _allEntries ??= BuildAllEntries();
                return _allEntries;
            }
        }
    }

    /// <summary>
    /// Rebuilds the <c>WithToolsFromAssembly</c> scan so catalog definitions are
    /// exactly what <c>tools/list</c> would advertise. The schema-services
    /// provider is disposed after creation; SDK tool instances keep no reference
    /// to it (invocation resolves services from the request scope instead).
    /// </summary>
    private static IReadOnlyList<ToolCatalogEntry> BuildAllEntries()
    {
        var schemaServices = ToolServices.CreateSchemaServices();
        try
        {
            var entries = new List<ToolCatalogEntry>();
            foreach (var toolType in ToolServices.GetToolTypes())
            {
                foreach (var method in GetAttributedToolMethods(toolType))
                {
                    var attribute = method.GetCustomAttribute<McpServerToolAttribute>()!;
                    var createOptions = new McpServerToolCreateOptions
                    {
                        Services = schemaServices,
                        SerializerOptions = McpJsonUtilities.DefaultOptions,
                    };
                    var tool = method.IsStatic
                        ? McpServerTool.Create(method, (object?)null, createOptions)
                        : McpServerTool.Create(
                            method,
                            request => ActivatorUtilities.CreateInstance(request.Services!, toolType),
                            createOptions);

                    entries.Add(new ToolCatalogEntry
                    {
                        Name = attribute.Name ?? method.Name,
                        Title = tool.ProtocolTool.Title,
                        Description = tool.ProtocolTool.Description ?? "",
                        Category = attribute.ReadOnly ? ReadOnlyCategory : AllCategory,
                        Annotations = tool.ProtocolTool.Annotations,
                        InputSchema = tool.ProtocolTool.InputSchema,
                        OutputSchema = tool.ProtocolTool.OutputSchema,
                        Tool = tool,
                        ToolType = toolType,
                        Method = method,
                    });
                }
            }

            return entries;
        }
        finally
        {
            (schemaServices as IDisposable)?.Dispose();
        }
    }

    private static int ResolveCategoryLevel(string? category)
    {
        if (category is null) return McpServerHost.CategoryLevel[AllCategory];
        var normalized = category.Trim().ToLowerInvariant();
        if (!McpServerHost.CategoryLevel.TryGetValue(normalized, out var level))
            throw new ArgumentException(
                $"Unknown tool category '{category}'. Valid values: {ReadOnlyCategory}, {AllCategory}.",
                nameof(category));
        return level;
    }
}
