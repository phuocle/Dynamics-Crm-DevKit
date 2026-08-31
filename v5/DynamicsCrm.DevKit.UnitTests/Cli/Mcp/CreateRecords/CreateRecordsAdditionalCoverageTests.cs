using DynamicsCrm.DevKit.Cli.Mcp;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Reflection;

using CliCreateRecordsTool = DynamicsCrm.DevKit.Cli.Mcp.Tools.CreateRecordsTool;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.CrossTool;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.CreateRecords;

[TestClass]
public sealed class CreateRecordsAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(CliCreateRecordsTool);

    [TestMethod]
    public void ParseCsvLine_HandlesUnquotedEmptyAndTrailingFields()
    {
        var values = (string[])InvokeStatic("ParseCsvLine", "a,,c,");

        CollectionAssert.AreEqual(new[] { "a", "", "c", "" }, values);
    }

    [TestMethod]
    public void ConvertCsvValue_MultiSelectWithOnlyUnknownLabels_ReturnsNull()
    {
        var tool = new CliCreateRecordsTool(null!, new McpDryRunOptions(), DryRunTestHelpers.NormalContext());
        var warnings = new List<string>();
        var cache = new Dictionary<string, Guid?>(StringComparer.OrdinalIgnoreCase);
        var metadata = new MultiSelectPicklistAttributeMetadata
        {
            OptionSet = new OptionSetMetadata
            {
                Options =
                {
                    new OptionMetadata(new Label("Known", 1033), 1)
                }
            }
        };

        var result = InvokeInstance(tool, "ConvertCsvValue", metadata, "Missing", "tags", 3, "account", cache, warnings);

        Assert.IsNull(result);
        Assert.AreEqual(1, warnings.Count);
    }

    [TestMethod]
    public void ResolveLookupByName_WithTargetAndUnavailableMetadata_ReturnsNullAndWarning()
    {
        var tool = new CliCreateRecordsTool(null!, new McpDryRunOptions(), DryRunTestHelpers.NormalContext());
        var warnings = new List<string>();
        var cache = new Dictionary<string, Guid?>(StringComparer.OrdinalIgnoreCase);
        var metadata = new LookupAttributeMetadata { Targets = new[] { "account", "contact" } };

        var result = InvokeInstance(tool, "ResolveLookupByName", metadata, "Contoso", "customerid", 4, cache, warnings);

        Assert.IsNull(result);
        Assert.IsTrue(warnings[0].Contains("not found or ambiguous", StringComparison.OrdinalIgnoreCase));
        Assert.AreEqual(2, cache.Count);
    }

    [TestMethod]
    public void LoadEntityMetadata_NullServiceClient_ReturnsNull()
    {
        var tool = new CliCreateRecordsTool(null!, new McpDryRunOptions(), DryRunTestHelpers.NormalContext());

        Assert.IsNull(InvokeInstance(tool, "LoadEntityMetadata", "account"));
    }

    private static object? InvokeStatic(string methodName, params object?[] args) =>
        ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args);

    private static object? InvokeInstance(object target, string methodName, params object?[] args) =>
        ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Instance)!.Invoke(target, args);
}
