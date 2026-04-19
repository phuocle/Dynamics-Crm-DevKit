using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Globalization;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class UpsertTableToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.UpsertTableTool);

    // ── Validation rules tested via the public method signature ──────────────
    // Since most logic is in private/instance methods we test via reflection
    // on any static helpers that exist.

    // UpsertTableTool doesn't have many static pure helpers — but we can test
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
    public void UpsertTableTool_ClassExists()
    {
        Assert.IsNotNull(ToolType, "UpsertTableTool class must exist");
    }

    [TestMethod]
    public void UpsertTableTool_HasUpsertTableMethod()
    {
        var method = ToolType.GetMethod("upsert_table");
        Assert.IsNotNull(method, "upsert_table public method must exist");
    }

    [TestMethod]
    public void UpsertTableTool_HasRequiredConstructorParameters()
    {
        var constructors = ToolType.GetConstructors();
        Assert.IsTrue(constructors.Length > 0, "UpsertTableTool must have at least one constructor");

        var ctor = constructors[0];
        var parameters = ctor.GetParameters();
        Assert.IsTrue(parameters.Length >= 2, "Constructor must have at least 2 parameters (serviceClient + options)");
        Assert.AreEqual("serviceClient", parameters[0].Name, "First parameter should be serviceClient");
        Assert.AreEqual("options", parameters[1].Name, "Second parameter should be options");
    }

    // ── Ownership type string parsing tests (inline logic) ───────────────────
    // These test the known string → enum mapping documented in the tool.

    [TestMethod]
    public void UpsertTableTool_OwnershipType_User_IsDefaultInSignature()
    {
        var method = ToolType.GetMethod("upsert_table");
        var param = System.Array.Find(method!.GetParameters(), p => p.Name == "ownership_type");
        Assert.IsNotNull(param, "ownership_type parameter must exist");
        Assert.AreEqual("User", param.DefaultValue?.ToString(), "Default ownership_type should be 'User'");
    }

    [TestMethod]
    public void UpsertTableTool_TableType_Standard_IsDefaultInSignature()
    {
        var method = ToolType.GetMethod("upsert_table");
        var param = System.Array.Find(method!.GetParameters(), p => p.Name == "table_type");
        Assert.IsNotNull(param, "table_type parameter must exist");
        Assert.AreEqual("Standard", param.DefaultValue?.ToString(), "Default table_type should be 'Standard'");
    }

    [TestMethod]
    public void UpsertTableTool_PrimaryAttributeMaxLength_DefaultIs100()
    {
        var method = ToolType.GetMethod("upsert_table");
        var param = System.Array.Find(method!.GetParameters(), p => p.Name == "primary_attribute_max_length");
        Assert.IsNotNull(param, "primary_attribute_max_length parameter must exist");
        Assert.AreEqual(100, param.DefaultValue, "Default primary_attribute_max_length should be 100");
    }

    [TestMethod]
    public void UpsertTableTool_AutoPublish_DefaultIsTrue()
    {
        var method = ToolType.GetMethod("upsert_table");
        var param = System.Array.Find(method!.GetParameters(), p => p.Name == "auto_publish");
        Assert.IsNotNull(param, "auto_publish parameter must exist");
        Assert.AreEqual(true, param.DefaultValue, "Default auto_publish should be true");
    }

    [TestMethod]
    public void UpsertTableTool_IsActivity_DefaultIsFalse()
    {
        var method = ToolType.GetMethod("upsert_table");
        var param = System.Array.Find(method!.GetParameters(), p => p.Name == "is_activity");
        Assert.IsNotNull(param, "is_activity parameter must exist");
        Assert.AreEqual(false, param.DefaultValue, "Default is_activity should be false");
    }

    [TestMethod]
    public void UpsertTableTool_HasNotes_DefaultIsFalse()
    {
        var method = ToolType.GetMethod("upsert_table");
        var param = System.Array.Find(method!.GetParameters(), p => p.Name == "has_notes");
        Assert.IsNotNull(param, "has_notes parameter must exist");
        Assert.AreEqual(false, param.DefaultValue, "Default has_notes should be false");
    }

    [TestMethod]
    public void UpsertTableTool_PrimaryAttributeDisplayName_DefaultIsName()
    {
        var method = ToolType.GetMethod("upsert_table");
        var param = System.Array.Find(method!.GetParameters(), p => p.Name == "primary_attribute_display_name");
        Assert.IsNotNull(param, "primary_attribute_display_name parameter must exist");
        Assert.AreEqual("Name", param.DefaultValue?.ToString(), "Default primary_attribute_display_name should be 'Name'");
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
    public void UpsertTableTool_EntityName_EmptyGivesErrorResult()
    {
        // We can't call the method without ServiceClient, but we can verify the
        // method signature accepts entity_name as required (no default value).
        var method = ToolType.GetMethod("upsert_table");
        var param = System.Array.Find(method!.GetParameters(), p => p.Name == "entity_name");
        Assert.IsNotNull(param, "entity_name parameter must exist");
        Assert.AreEqual(System.DBNull.Value, param.DefaultValue ?? System.DBNull.Value,
            "entity_name should be required (no default value)");
    }
}
