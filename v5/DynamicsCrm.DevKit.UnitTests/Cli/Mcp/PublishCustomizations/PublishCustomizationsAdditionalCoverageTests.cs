using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Xml.Linq;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.PublishCustomizations;

[TestClass]
public sealed class PublishCustomizationsAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.PublishCustomizationsTool);
    private static readonly MethodInfo ParseSimpleListMethod = ToolType.GetMethod(
        "ParseSimpleList", BindingFlags.NonPublic | BindingFlags.Static)!;
    private static readonly MethodInfo ParseGuidListMethod = ToolType.GetMethod(
        "ParseGuidList", BindingFlags.NonPublic | BindingFlags.Static)!;
    private static readonly MethodInfo BuildTargetSummaryMethod = ToolType.GetMethod(
        "BuildTargetSummary", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static DynamicsCrm.DevKit.Cli.Mcp.Tools.PublishCustomizationsTool CreateTool()
        => new(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(),
            new DynamicsCrm.DevKit.Cli.Mcp.McpExecutionContext(true));

    [TestMethod]
    public void BuildParameterXml_SkipsBlankEntitiesAndEscapesXml()
    {
        var method = ToolType.GetMethod("BuildParameterXml", BindingFlags.NonPublic | BindingFlags.Static)!;
        var result = (string)method.Invoke(null, new object?[]
        {
            new List<string> { "account & contact", " ", null! }, false, false
        })!;

        var document = XDocument.Parse(result);
        Assert.AreEqual("account & contact", document.Root!.Element("entities")!.Element("entity")!.Value);
        Assert.AreEqual(1, document.Root.Element("entities")!.Elements("entity").Count());
    }

    [TestMethod]
    public void ParseSimpleList_EmptyAndDuplicateValuesAreHandled()
    {
        CollectionAssert.AreEqual(Array.Empty<string>(), InvokeList(ParseSimpleListMethod, "  "));

        var values = InvokeList(ParseSimpleListMethod, " Account, contact, account, ,CONTACT ");
        CollectionAssert.AreEqual(new[] { "Account", "contact" }, values);
    }

    [TestMethod]
    public void ParseGuidList_EmptyBracedAndDuplicateValuesAreHandled()
    {
        CollectionAssert.AreEqual(Array.Empty<string>(), InvokeList(ParseGuidListMethod, null));

        var id = "11111111-1111-1111-1111-111111111111";
        var values = InvokeList(ParseGuidListMethod, $"{{{id}}}, {id.ToUpperInvariant()}");
        CollectionAssert.AreEqual(new[] { id }, values);
    }

    [TestMethod]
    public void ParseGuidList_InvalidValueReturnsNull()
    {
        Assert.IsNull(ParseGuidListMethod.Invoke(null, new object?[] { "not-a-guid" }));
    }

    [TestMethod]
    public void BuildTargetSummary_CoversTargetKindsAndSingularPluralLabels()
    {
        var summary = (string)BuildTargetSummaryMethod.Invoke(null, new object?[]
        {
            new List<string> { "account" },
            new List<string> { "app-one", "app-two" },
            true,
            true,
            true,
            new List<string> { "new_priority" },
            new List<string> { "dashboard" },
            new List<string> { "webresource" }
        })!;

        StringAssert.Contains(summary, "1 entity: account");
        StringAssert.Contains(summary, "2 appmodules: app-one, app-two");
        StringAssert.Contains(summary, "optionsets: new_priority");
        StringAssert.Contains(summary, "application ribbon");
        StringAssert.Contains(summary, "1 dashboard(s)");
        StringAssert.Contains(summary, "1 web resource(s)");
        StringAssert.Contains(summary, "sitemap");
    }

    [TestMethod]
    public void BuildTargetSummary_EmptyTargetsReturnsFallback()
    {
        var summary = (string)BuildTargetSummaryMethod.Invoke(null, new object?[]
        {
            new List<string>(), new List<string>(), false, false, false, null, null, null
        })!;

        Assert.AreEqual("specific customizations", summary);
    }

    [TestMethod]
    public void BuildTargetSummary_GlobalOptionSetUsesAllLabelWhenNoNamedSets()
    {
        var summary = (string)BuildTargetSummaryMethod.Invoke(null, new object?[]
        {
            new List<string>(), new List<string>(), true, false, false, new List<string>(),
            new List<string>(), new List<string>()
        })!;

        Assert.AreEqual("all global option sets", summary);
    }

    [TestMethod]
    public void PublishCustomizations_WithoutServiceClient_ReturnsRoleGateError()
    {
        var result = CreateTool().publish_customizations();

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "requires the 'System Administrator' role");
        StringAssert.Contains(result.GetText(), "(no roles assigned)");
    }

    [TestMethod]
    public void Constructor_NullOptionsAndContextAreRejected()
    {
        AssertArgumentNull(() =>
            new DynamicsCrm.DevKit.Cli.Mcp.Tools.PublishCustomizationsTool(
                null!, null!, new DynamicsCrm.DevKit.Cli.Mcp.McpExecutionContext(true)));
        AssertArgumentNull(() =>
            new DynamicsCrm.DevKit.Cli.Mcp.Tools.PublishCustomizationsTool(
                null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), null!));
    }

    private static List<string> InvokeList(MethodInfo method, string? input)
        => (List<string>)method.Invoke(null, new object?[] { input })!;

    private static void AssertArgumentNull(Action action)
    {
        try
        {
            action();
            Assert.Fail("Expected ArgumentNullException.");
        }
        catch (ArgumentNullException)
        {
            // Expected.
        }
    }
}
