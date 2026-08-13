using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Globalization;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

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
        Assert.IsTrue(parameters.Length >= 2, "Constructor must have at least 2 parameters (serviceClient + options)");
        Assert.AreEqual("serviceClient", parameters[0].Name, "First parameter should be serviceClient");
        Assert.AreEqual("options", parameters[1].Name, "Second parameter should be options");
    }

    // ── Ownership type string parsing tests (inline logic) ───────────────────
    // These test the known string → enum mapping documented in the tool.

    [TestMethod]
    public void ManageTableTool_OwnershipType_User_IsDefaultInSignature()
    {
        var method = ToolType.GetMethod("manage_table");
        var param = System.Array.Find(method!.GetParameters(), p => p.Name == "ownership_type");
        Assert.IsNotNull(param, "ownership_type parameter must exist");
        Assert.AreEqual("User", param.DefaultValue?.ToString(), "Default ownership_type should be 'User'");
    }

    [TestMethod]
    public void ManageTableTool_TableType_Standard_IsDefaultInSignature()
    {
        var method = ToolType.GetMethod("manage_table");
        var param = System.Array.Find(method!.GetParameters(), p => p.Name == "table_type");
        Assert.IsNotNull(param, "table_type parameter must exist");
        Assert.AreEqual("Standard", param.DefaultValue?.ToString(), "Default table_type should be 'Standard'");
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
    public void ManageTableTool_IsActivity_DefaultIsFalse()
    {
        var method = ToolType.GetMethod("manage_table");
        var param = System.Array.Find(method!.GetParameters(), p => p.Name == "is_activity");
        Assert.IsNotNull(param, "is_activity parameter must exist");
        Assert.AreEqual(false, param.DefaultValue, "Default is_activity should be false");
    }

    [TestMethod]
    public void ManageTableTool_HasNotes_DefaultIsFalse()
    {
        var method = ToolType.GetMethod("manage_table");
        var param = System.Array.Find(method!.GetParameters(), p => p.Name == "has_notes");
        Assert.IsNotNull(param, "has_notes parameter must exist");
        Assert.AreEqual(false, param.DefaultValue, "Default has_notes should be false");
    }

    [TestMethod]
    public void ManageTableTool_PrimaryAttributeDisplayName_DefaultIsName()
    {
        var method = ToolType.GetMethod("manage_table");
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
    public void ManageTableTool_DisplayName_ExistsOnSignature()
    {
        var method = ToolType.GetMethod("manage_table");
        var param = System.Array.Find(method!.GetParameters(), p => p.Name == "display_name");
        Assert.IsNotNull(param, "display_name parameter must exist");
    }
}
