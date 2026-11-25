using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Server;
using System;
using System.Globalization;
using System.Reflection;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageTable;

[TestClass]
public class ManageTableToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageTableTool);

    // ── Validation rules tested via the public method signature ──────────────
    // Since most logic is in private/instance methods we test via reflection
    // on any static helpers that exist.

    // ManageTableTool doesn't have many static pure helpers — but we can test
    // the ownership type parsing logic that maps strings → OwnershipTypes enum.
    // We'll test this by inspecting what the tool does with known inputs via
    // constructed instances using a null ServiceClient + DryRun mode,
    // OR we test static helpers if any exist.
    //
    // The safest approach without live Dataverse: test static helper methods.

    private static readonly MethodInfo? SanitizeFileNameMethod = ToolType
        .GetMethod("SanitizeFileName", BindingFlags.NonPublic | BindingFlags.Static);

    // ── EntityName prefix extraction (via public surface via reflection) ──────

    [TestMethod]
    public void ManageTableTool_ClassExists()
    {
        Assert.IsNotNull(ToolType, "ManageTableTool class must exist");
    }

    [TestMethod]
    public void ManageTableTool_HasManageTableMethod()
    {
        var method = ToolType.GetMethod("manage_table");
        Assert.IsNotNull(method, "manage_table public method must exist");
    }

    [TestMethod]
    public void ManageTableTool_HasRequiredConstructorParameters()
    {
        var constructors = ToolType.GetConstructors();
        Assert.IsTrue(constructors.Length > 0, "ManageTableTool must have at least one constructor");

        var ctor = constructors[0];
        var parameters = ctor.GetParameters();
        Assert.IsTrue(parameters.Length >= 2, "Constructor must have at least 2 parameters (orgService + options)");
        Assert.AreEqual("orgService", parameters[0].Name, "First parameter should be orgService");
        Assert.AreEqual("options", parameters[1].Name, "Second parameter should be options");
    }

    [TestMethod]
    [DataRow("ownership_type")]
    [DataRow("table_type")]
    [DataRow("primary_attribute_display_name")]
    public void ManageTableTool_CreateDefaultsAreAbsentFromSignatures(string parameterName)
    {
        foreach (var methodName in new[] { "InvokeAsync", "manage_table" })
        {
            var method = ToolType.GetMethod(methodName);
            Assert.IsNotNull(method);
            var parameter = Array.Find(method.GetParameters(), p => p.Name == parameterName);
            Assert.IsNotNull(parameter);
            Assert.AreEqual("", parameter.DefaultValue, $"{methodName}.{parameterName} must be empty when omitted.");
        }
    }

    [TestMethod]
    public void ManageTableTool_PrimaryAttributeMaxLength_DefaultIs100()
    {
        var method = ToolType.GetMethod("manage_table");
        var param = System.Array.Find(method!.GetParameters(), p => p.Name == "primary_attribute_max_length");
        Assert.IsNotNull(param, "primary_attribute_max_length parameter must exist");
        Assert.AreEqual(100, param.DefaultValue, "Default primary_attribute_max_length should be 100");
    }

    [TestMethod]
    public void ManageTableTool_IsSearchEnabled_DefaultIsNull()
    {
        var method = ToolType.GetMethod("manage_table");
        var param = System.Array.Find(method!.GetParameters(), p => p.Name == "is_search_enabled");
        Assert.IsNotNull(param, "is_search_enabled parameter must exist");
        Assert.IsNull(param.DefaultValue, "Default is_search_enabled should be null");
    }

    [TestMethod]
    public void ManageTableTool_InputSchemaExposesSupportedSettings()
    {
        var method = ToolType.GetMethod(nameof(ManageTableTool.InvokeAsync))!;
        var target = new ManageTableTool(null!, new McpDryRunOptions { DryRun = true }, new McpExecutionContext(true));
        var tool = McpServerTool.Create(method, target, new McpServerToolCreateOptions());
        var properties = tool.ProtocolTool.InputSchema.GetProperty("properties");

        Assert.IsFalse(properties.TryGetProperty("is_activity", out _));
        Assert.IsFalse(properties.TryGetProperty("has_notes", out _));
        Assert.IsTrue(properties.TryGetProperty("is_duplicate_detection_enabled", out _));
        StringAssert.Contains(properties.GetProperty("table_type").GetProperty("description").GetString(), "'Activity'");
        Assert.IsTrue(properties.TryGetProperty("is_access_teams_enabled", out _));
        Assert.IsTrue(properties.TryGetProperty("is_document_management_enabled", out _));
        Assert.IsTrue(properties.TryGetProperty("is_onenote_integration_enabled", out _));
        Assert.IsTrue(properties.TryGetProperty("is_mail_merge_enabled", out _));
        Assert.IsTrue(properties.TryGetProperty("is_custom_help_enabled", out _));
        Assert.IsTrue(properties.TryGetProperty("custom_help_url", out _));
        Assert.IsTrue(properties.TryGetProperty("is_mobile_offline_enabled", out _));
        Assert.IsTrue(properties.TryGetProperty("is_available_offline", out _));
        Assert.IsTrue(properties.TryGetProperty("is_visible_in_mobile", out _));
        Assert.IsTrue(properties.TryGetProperty("is_visible_in_mobile_client", out _));
        Assert.IsTrue(properties.TryGetProperty("is_read_only_in_mobile_client", out _));
        Assert.IsTrue(properties.TryGetProperty("is_retention_enabled", out _));
    }

    // ── SchemaName derivation logic via DataverseNamer ────────────────────────
    // The tool uses DataverseNamer.Resolve to derive schema names from display names.
    // We verify the DataverseNamer exists and works for common inputs.

    [TestMethod]
    public void DataverseNamer_Resolve_WithPrefixAndDisplayName_ReturnsExpectedSchema()
    {
        var namerType = typeof(DynamicsCrm.DevKit.Shared.DataverseNamer);
        var resolveMethod = namerType.GetMethod("Resolve", BindingFlags.Public | BindingFlags.Static,
            null, [typeof(string), typeof(string)], null);
        Assert.IsNotNull(resolveMethod, "DataverseNamer.Resolve method must exist");

        var result = resolveMethod.Invoke(null, ["Project", "cr123"]);
        // Result is (string SchemaName, string LogicalName)
        dynamic tuple = result!;
        string schemaName = tuple.Item1;
        string logicalName = tuple.Item2;

        Assert.IsTrue(schemaName.StartsWith("cr123_", StringComparison.OrdinalIgnoreCase),
            $"SchemaName should start with prefix 'cr123_', got: {schemaName}");
        Assert.AreEqual(schemaName.ToLowerInvariant(), logicalName,
            "LogicalName should be lowercase version of SchemaName");
    }

    // ── Entity name validation edge cases (inline prefix logic) ──────────────

    [TestMethod]
    public void ManageTableTool_DisplayName_ExistsOnSignature()
    {
        var method = ToolType.GetMethod("manage_table");
        var param = System.Array.Find(method!.GetParameters(), p => p.Name == "display_name");
        Assert.IsNotNull(param, "display_name parameter must exist");
    }
}
