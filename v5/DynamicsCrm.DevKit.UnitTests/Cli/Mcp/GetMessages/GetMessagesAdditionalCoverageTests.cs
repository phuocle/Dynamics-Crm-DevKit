using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.GetMessages;

[TestClass]
public sealed class GetMessagesAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(GetMessagesTool);

    [TestMethod]
    public void NormalizeScope_CoversGlobalEmptyAndTrimmedValues()
    {
        Assert.AreEqual("none", InvokeStatic<string>("NormalizeScope", (object?)null));
        Assert.AreEqual("none", InvokeStatic<string>("NormalizeScope", " global "));
        Assert.AreEqual("account", InvokeStatic<string>("NormalizeScope", " Account "));
    }

    [TestMethod]
    public void SplitXamlProperties_CoversAttributeAndSelfClosingProperties()
    {
        var xaml = "<root><x:Property Name=\"A\" /><x:Property Name=\"B\"><x:Property.Attributes><x:Property Name=\"C\" /></x:Property.Attributes></x:Property></root>";
        var segments = InvokeStatic<List<string>>("SplitXamlProperties", xaml);

        Assert.AreEqual(2, segments.Count);
        StringAssert.Contains(segments[0], "Name=\"A\"");
        StringAssert.Contains(segments[1], "</x:Property>");
    }

    [TestMethod]
    public void ExtractAttribute_HandlesCompoundNamespaceAndMalformedValues()
    {
        Assert.AreEqual("True", InvokeStatic<string>("ExtractAttribute",
            "<mxsw:ArgumentRequiredAttribute Value=\"True\" />", "ArgumentRequiredAttribute Value="));
        Assert.IsNull(InvokeStatic<string>("ExtractAttribute", "<mxsw:ArgumentRequiredAttribute />", "ArgumentRequiredAttribute Value="));
        Assert.AreEqual("abc", InvokeStatic<string>("ExtractAttribute", "<x:Property Name=\"abc\" />", "Name"));
        Assert.IsNull(InvokeStatic<string>("ExtractAttribute", "<x:Property Name=\"\" />", "Name"));
        Assert.AreEqual(-1, InvokeStatic<int>("FindElementStart", "<root><x:Other /></root>", "Target"));
    }

    [TestMethod]
    public void SimplifyType_CoversColonDotAndPlainTypes()
    {
        Assert.AreEqual("String", InvokeStatic<string>("SimplifyType", "x:String"));
        Assert.AreEqual("String", InvokeStatic<string>("SimplifyType", "System.String"));
        Assert.AreEqual("EntityReference", InvokeStatic<string>("SimplifyType", "mxs:EntityReference"));
        Assert.AreEqual("Unknown", InvokeStatic<string>("SimplifyType", (object?)null));
    }

    private static T InvokeStatic<T>(string methodName, params object?[] args) =>
        (T)ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
}
