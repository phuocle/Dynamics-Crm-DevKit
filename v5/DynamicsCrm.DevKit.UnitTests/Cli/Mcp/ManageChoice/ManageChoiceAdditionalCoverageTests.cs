using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageChoice;

[TestClass]
public sealed class ManageChoiceAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(ManageChoiceTool);

    [TestMethod]
    public void TryNormalizeHexColor_CoversAcceptedAndRejectedInputs()
    {
        var method = ToolType.GetMethod("TryNormalizeHexColor", BindingFlags.NonPublic | BindingFlags.Static)!;
        var args = new object?[] { " #aBc123 ", null };
        Assert.IsTrue((bool)method.Invoke(null, args)!);
        Assert.AreEqual("#ABC123", args[1]);
        Assert.IsFalse((bool)method.Invoke(null, new object?[] { "", null })!);
        Assert.IsFalse((bool)method.Invoke(null, new object?[] { "#12345", null })!);
        Assert.IsFalse((bool)method.Invoke(null, new object?[] { "#GGGGGG", null })!);
    }

    [TestMethod]
    public void ParseOptionColorsAndResolveOptionColors_CoverSuccessAndErrors()
    {
        var parsed = InvokeStatic("ParseOptionColors", "Draft:#00ff00;2:ABCDEF");
        var colors = (IDictionary)parsed.GetType().GetField("Item1")!.GetValue(parsed)!;
        Assert.AreEqual(2, colors.Count);
        Assert.IsNotNull(InvokeStatic("ParseOptionColors", "Draft:not-a-color"));
        Assert.IsNotNull(InvokeStatic("ParseOptionColors", "Draft:#FFFFFF;Draft:#000000"));

        var options = new List<(int value, string label)> { (1, "Draft"), (2, "Active") };
        var resolved = InvokeStatic("ResolveOptionColors", options,
            new Dictionary<string, string> { ["Draft"] = "#00FF00", ["2"] = "#0000FF" }, "statuscode");
        var result = (IDictionary)resolved.GetType().GetField("Item1")!.GetValue(resolved)!;
        Assert.AreEqual(2, result.Count);
        Assert.IsNotNull(InvokeStatic("ResolveOptionColors", options,
            new Dictionary<string, string> { ["99"] = "#000000" }, "statuscode"));
    }

    [TestMethod]
    public void PublicOptionParsers_CoverAutoValuesLabelsAndRemoveValues()
    {
        var toolType = typeof(ManageChoiceTool);
        var auto = (List<(int value, string label)>)toolType.GetMethod("ParseOptionsWithAutoValue")!.Invoke(null, new object?[] { "Draft;10:Active;Closed", 5 })!;
        Assert.AreEqual(3, auto.Count);
        Assert.AreEqual(5, auto[0].value);
        Assert.AreEqual(11, auto[2].value);
        Assert.IsNull(toolType.GetMethod("ParseOptionsWithAutoValue")!.Invoke(null, new object?[] { "bad:", 1 }));

        var pairs = (List<(string oldLabel, string newLabel)>)toolType.GetMethod("ParseLabelPairs")!.Invoke(null, new object?[] { "Old:New;A:B" })!;
        Assert.AreEqual(2, pairs.Count);
        CollectionAssert.AreEqual(new[] { "One", "Two" }, (List<string>)toolType.GetMethod("ParseLabelList")!.Invoke(null, new object?[] { " One,Two," })!);
        CollectionAssert.AreEqual(new[] { 1, 2 }, (List<int>)toolType.GetMethod("ParseRemoveValues")!.Invoke(null, new object?[] { "1, 2," })!);
    }

    private static object InvokeStatic(string methodName, params object?[] args) =>
        ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
}
