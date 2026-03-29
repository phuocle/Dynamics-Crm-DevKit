using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for metadata tool input validation:
/// GetEntityMetadataTool — the only metadata tool with a testable validation path.
/// Other metadata tools (GetEntitiesMetadata, GetGlobalOptionSets, GetMessages, GetSolutionComponents)
/// have no static methods and no input validation — they depend entirely on MetadataService/ServiceClient.
/// </summary>
[TestClass]
public class MetadataToolValidationTests
{
    // ──────────────────────────────────────────────
    // GetEntityMetadataTool
    // ──────────────────────────────────────────────

    private static readonly Type GetEntityMetadataToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.McpServerHost).Assembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.GetEntityMetadataTool")!;

    private static object CreateGetEntityMetadataTool()
    {
        return Activator.CreateInstance(GetEntityMetadataToolType, new object?[] { null })!;
    }

    private static string InvokeGetEntityMetadata(object tool, string entityName, string attributePrefix)
    {
        var method = GetEntityMetadataToolType.GetMethod("get_entity_metadata")!;
        var task = (System.Threading.Tasks.Task<string>)method.Invoke(tool, new object[] { entityName, attributePrefix })!;
        return task.GetAwaiter().GetResult();
    }

    [TestMethod]
    public void GetEntityMetadata_EmptyEntityName_ReturnsError()
    {
        var tool = CreateGetEntityMetadataTool();
        var result = InvokeGetEntityMetadata(tool, "", "");

        Assert.IsTrue(result.Contains("entity_name is required"));
    }

    [TestMethod]
    public void GetEntityMetadata_WhitespaceEntityName_ReturnsError()
    {
        var tool = CreateGetEntityMetadataTool();
        var result = InvokeGetEntityMetadata(tool, "   ", "");

        Assert.IsTrue(result.Contains("entity_name is required"));
    }

    [TestMethod]
    public void GetEntityMetadata_NullEntityName_ReturnsError()
    {
        var tool = CreateGetEntityMetadataTool();
        var result = InvokeGetEntityMetadata(tool, null!, "");

        Assert.IsTrue(result.Contains("entity_name is required"));
    }
}
