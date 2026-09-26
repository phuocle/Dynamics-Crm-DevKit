using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Tool;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Tool;

/// <summary>
/// Read-only catalog tests: discovery completeness, determinism, category
/// membership, infrastructure-parameter exclusion, and equivalence with the
/// SDK's own WithToolsFromAssembly registration. Tests that mutate
/// McpServerHost.DisabledToolSet live in ToolCatalogDisabledToolTests.
/// </summary>
[TestClass]
public sealed class ToolCatalogTests
{
    [TestMethod]
    public void GetEntries_All_NonEmptyCompleteAndOrdinalOrdered()
    {
        var entries = ToolCatalog.GetEntries("all");

        Assert.IsGreaterThan(0, entries.Count);
        Assert.HasCount(McpServerHost.GetToolCount(2), entries, "catalog and host must agree on availability");
        Assert.AreEqual(entries.Select(e => e.Name).Distinct().Count(), entries.Count, "each tool discovered exactly once");
        Assert.IsTrue(
            entries.Select(e => e.Name).SequenceEqual(entries.Select(e => e.Name).OrderBy(n => n, StringComparer.Ordinal)),
            "entries must be ordered by name (Ordinal)");

        foreach (var entry in entries)
        {
            Assert.IsFalse(string.IsNullOrWhiteSpace(entry.Name), "Name");
            Assert.IsFalse(string.IsNullOrWhiteSpace(entry.Description), $"Description of {entry.Name}");
            Assert.IsTrue(entry.Category is "readonly" or "all", $"Category of {entry.Name}");
            Assert.IsNotNull(entry.Tool, $"Tool of {entry.Name}");
            Assert.IsNotNull(entry.ToolType, $"ToolType of {entry.Name}");
            Assert.IsNotNull(entry.Method, $"Method of {entry.Name}");
            Assert.AreEqual(JsonValueKind.Object, entry.InputSchema.ValueKind, $"InputSchema of {entry.Name}");
            Assert.IsTrue(entry.InputSchema.TryGetProperty("properties", out _), $"InputSchema.properties of {entry.Name}");
        }
    }

    [TestMethod]
    public void GetEntries_ReadOnly_IsSubsetOfAllAndOnlyReadOnlyHints()
    {
        var all = ToolCatalog.GetEntries("all");
        var readOnly = ToolCatalog.GetEntries("readonly");

        Assert.IsGreaterThan(0, readOnly.Count);
        Assert.IsLessThan(all.Count, readOnly.Count);
        Assert.HasCount(McpServerHost.GetToolCount(1), readOnly);
        Assert.IsTrue(readOnly.All(r => all.Any(a => a.Name == r.Name)), "readonly must be a subset of all");
        Assert.IsTrue(all.Except(readOnly).Any(), "all must contain tools beyond readonly");

        foreach (var entry in readOnly)
        {
            Assert.AreEqual("readonly", entry.Category, $"Category of {entry.Name}");
            Assert.AreEqual(true, entry.Annotations?.ReadOnlyHint, $"ReadOnlyHint annotation of {entry.Name}");
        }
    }

    [TestMethod]
    public void Find_ExactOrdinalMatchScopedToCategory()
    {
        Assert.IsNotNull(ToolCatalog.Find("manage_view"));
        Assert.IsNull(ToolCatalog.Find("manage_view "), "no trimming — exact ordinal match only");
        Assert.IsNull(ToolCatalog.Find("manage_viewx"));
        Assert.IsNull(ToolCatalog.Find(""));
        Assert.IsNull(ToolCatalog.Find("   "));
        Assert.IsNull(ToolCatalog.Find(null));
        Assert.IsNull(ToolCatalog.Find("manage_view", "readonly"), "manage_view is not in the readonly category");
        Assert.IsNotNull(ToolCatalog.Find("execute_sql", "readonly"));
    }

    [TestMethod]
    public void GetEntries_UnknownCategory_ThrowsWithValidValues()
    {
        var exception = Assert.ThrowsExactly<ArgumentException>(
            () => ToolCatalog.GetEntries("basic"));

        StringAssert.Contains(exception.Message, "readonly");
        StringAssert.Contains(exception.Message, "all");
        Assert.ThrowsExactly<ArgumentException>(() => ToolCatalog.Find("manage_view", "basic"));
    }

    [TestMethod]
    public void ManageView_InputSchema_HasExactPublicProperties()
    {
        var entry = ToolCatalog.Find("manage_view");
        Assert.IsNotNull(entry);

        var propertyNames = entry.InputSchema.GetProperty("properties")
            .EnumerateObject()
            .Select(p => p.Name)
            .OrderBy(n => n, StringComparer.Ordinal)
            .ToArray();

        CollectionAssert.AreEqual(
            new[]
            {
                "action", "cell_updates_json", "entity_name", "fetchxml",
                "is_personal_view", "layoutxml", "view_id", "view_name",
            },
            propertyNames,
            "manage_view InputSchema properties must exactly match the public arguments (no infrastructure leakage)");
    }

    [TestMethod]
    public void Catalog_Wide_NoInfrastructureParameterAppearsInAnySchema()
    {
        var registeredSchemaServices = ToolServices.GetSchemaServiceTypes().ToHashSet();

        foreach (var entry in ToolCatalog.GetEntries("all"))
        {
            var schemaPropertyNames = entry.InputSchema.GetProperty("properties")
                .EnumerateObject()
                .Select(p => p.Name)
                .ToHashSet(StringComparer.Ordinal);

            foreach (var parameter in entry.Method.GetParameters())
            {
                if (!IsInfrastructureParameter(parameter)) continue;

                Assert.IsFalse(
                    schemaPropertyNames.Contains(parameter.Name ?? string.Empty),
                    $"{entry.Name}: infrastructure parameter '{parameter.Name}' ({parameter.ParameterType.Name}) leaked into InputSchema");
                Assert.IsTrue(
                    registeredSchemaServices.Contains(parameter.ParameterType),
                    $"{entry.Name}: infrastructure parameter '{parameter.Name}' type {parameter.ParameterType} is not registered by ToolServices");
            }
        }
    }

    [TestMethod]
    public void Catalog_Wide_InputSchemasUseOnlySupportedSchemaKeywords()
    {
        var unsupportedKeywords = new HashSet<string>(StringComparer.Ordinal)
        {
            "anyOf", "oneOf", "allOf", "not", "$ref", "$defs", "$schema", "$id",
            "definitions", "if", "then", "else", "patternProperties",
            "dependentRequired", "dependentSchemas", "prefixItems", "unevaluatedProperties",
        };
        var findings = new List<string>();

        foreach (var entry in ToolCatalog.GetEntries("all"))
            CollectUnsupported(entry.InputSchema, entry.Name, unsupportedKeywords, findings);

        Assert.HasCount(0, findings, "schemas must not use keywords the input pipeline cannot handle: " + string.Join("; ", findings));
    }

    [TestMethod]
    public void Catalog_MatchesSdkRegistration_NamesSchemasAndAnnotations()
    {
        var services = new ServiceCollection();
        ToolServices.AddSchemaServices(services);
        services
            .AddMcpServer()
            .WithToolsFromAssembly(typeof(McpServerHost).Assembly, null);

        using var provider = services.BuildServiceProvider();
        var options = provider.GetRequiredService<IOptions<McpServerOptions>>().Value;
        var sdkTools = options.ToolCollection!.ToList();

        var catalog = ToolCatalog.GetEntries("all");
        Assert.HasCount(catalog.Count, sdkTools, "SDK registration and catalog must expose the same tool count");

        var sdkByName = sdkTools.ToDictionary(t => t.ProtocolTool.Name!, StringComparer.Ordinal);
        foreach (var entry in catalog)
        {
            Assert.IsTrue(sdkByName.TryGetValue(entry.Name, out var sdkTool), $"SDK registration is missing '{entry.Name}'");
            Assert.AreEqual(sdkTool!.ProtocolTool.Description, entry.Description, $"Description of {entry.Name}");
            Assert.AreEqual(sdkTool.ProtocolTool.Title, entry.Title, $"Title of {entry.Name}");
            Assert.AreEqual(
                sdkTool.ProtocolTool.InputSchema.GetRawText(),
                entry.InputSchema.GetRawText(),
                $"InputSchema of {entry.Name} must be byte-identical to tools/list output");
            Assert.AreEqual(
                sdkTool.ProtocolTool.Annotations?.ReadOnlyHint == true,
                entry.Category == "readonly",
                $"Category derivation of {entry.Name}");
        }
    }

    private static void CollectUnsupported(JsonElement element, string toolName, HashSet<string> unsupported, List<string> findings)
    {
        switch (element.ValueKind)
        {
            case JsonValueKind.Object:
                foreach (var property in element.EnumerateObject())
                {
                    if (unsupported.Contains(property.Name))
                        findings.Add($"{toolName}: {property.Name}");
                    CollectUnsupported(property.Value, toolName, unsupported, findings);
                }
                break;
            case JsonValueKind.Array:
                foreach (var item in element.EnumerateArray())
                    CollectUnsupported(item, toolName, unsupported, findings);
                break;
        }
    }

    /// <summary>
    /// Mirrors the SDK's binding rule from the CLI side: a parameter is
    /// infrastructure when the SDK binds it from services (or special-cases it)
    /// instead of from the JSON arguments.
    /// </summary>
    private static bool IsInfrastructureParameter(ParameterInfo parameter)
    {
        var type = parameter.ParameterType;
        if (type == typeof(CancellationToken)) return true;
        if (type == typeof(McpServer)) return true;
        if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(ModelContextProtocol.Server.RequestContext<>)) return true;
        if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(IProgress<>)) return true;
        return !IsJsonSchemaRepresentable(type);
    }

    private static bool IsJsonSchemaRepresentable(Type type)
    {
        var t = Nullable.GetUnderlyingType(type) ?? type;
        if (t.IsPrimitive || t.IsEnum) return true;
        if (t == typeof(string) || t == typeof(decimal) || t == typeof(object)) return true;
        if (t == typeof(Guid) || t == typeof(DateTime) || t == typeof(DateTimeOffset) || t == typeof(TimeSpan)) return true;
        if (t == typeof(Uri) || t == typeof(JsonElement)) return true;
        if (t.IsArray) return IsJsonSchemaRepresentable(t.GetElementType()!);
        if (t.IsGenericType)
        {
            var definition = t.GetGenericTypeDefinition();
            if (definition == typeof(IEnumerable<>) || definition == typeof(ICollection<>) ||
                definition == typeof(IList<>) || definition == typeof(IReadOnlyCollection<>) ||
                definition == typeof(IReadOnlyList<>))
                return IsJsonSchemaRepresentable(t.GetGenericArguments()[0]);
            if (definition == typeof(IDictionary<,>) || definition == typeof(Dictionary<,>))
                return t.GetGenericArguments()[0] == typeof(string) &&
                       IsJsonSchemaRepresentable(t.GetGenericArguments()[1]);
        }

        return false;
    }
}

/// <summary>
/// Mutates the process-wide <see cref="McpServerHost.DisabledToolSet"/>, so it
/// must never overlap any other test.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ToolCatalogDisabledToolTests
{
    [TestMethod]
    public void DisabledToolType_VanishesFromCatalogAndHostAgrees()
    {
        var baseline = ToolCatalog.GetEntries("all").Count;

        Assert.IsTrue(McpServerHost.DisabledToolSet.Add(nameof(ManageViewTool)));
        try
        {
            var entries = ToolCatalog.GetEntries("all");
            Assert.IsFalse(entries.Any(e => e.ToolType.Name == nameof(ManageViewTool)), "manage_view must vanish from GetEntries");
            Assert.IsNull(ToolCatalog.Find("manage_view"), "manage_view must be unavailable via Find");
            Assert.HasCount(baseline - 1, entries);
            Assert.AreEqual(entries.Count, McpServerHost.GetToolCount(2), "host and catalog must agree while filtering");

            var readOnly = ToolCatalog.GetEntries("readonly");
            Assert.IsTrue(readOnly.All(e => e.ToolType.Name != nameof(ManageViewTool)));
        }
        finally
        {
            McpServerHost.DisabledToolSet.Remove(nameof(ManageViewTool));
        }

        Assert.IsNotNull(ToolCatalog.Find("manage_view"), "removing the disabled entry must restore availability");
        Assert.HasCount(baseline, ToolCatalog.GetEntries("all"));
    }
}
