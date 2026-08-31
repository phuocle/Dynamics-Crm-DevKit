using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageChoice;

[TestClass]
public sealed class ManageChoiceBranchCoverageTests
{
    private static readonly Type ToolType = typeof(ManageChoiceTool);

    [TestMethod]
    public void BuildProjectedOptions_RemovesRenamesAndAppendsNewOptions()
    {
        var metadata = new OptionSetMetadata
        {
            Options =
            {
                new OptionMetadata(MakeLabel("Draft"), 1),
                new OptionMetadata(MakeLabel("Active"), 2),
                new OptionMetadata(MakeLabel("Closed"), 3)
            }
        };

        var result = (List<(int value, string label)>)Invoke(
            "BuildProjectedOptions",
            metadata,
            new List<int> { 3 },
            new List<(int value, string newLabel)> { (2, "Open") },
            new List<(int value, string label)> { (4, "Pending") });

        Assert.AreEqual(3, result.Count);
        Assert.AreEqual((1, "Draft"), result[0]);
        Assert.AreEqual((2, "Open"), result[1]);
        Assert.AreEqual((4, "Pending"), result[2]);
    }

    [TestMethod]
    public void FindOptionByLabel_IsCaseInsensitiveAndHandlesMissingMetadata()
    {
        var method = ToolType.GetMethod("FindOptionByLabel", BindingFlags.NonPublic | BindingFlags.Static)!;
        var metadata = new OptionSetMetadata
        {
            Options = { new OptionMetadata(MakeLabel("Draft"), 1) }
        };

        var found = (OptionMetadata)method.Invoke(null, new object?[] { metadata, "draft" })!;
        Assert.AreEqual(1, found.Value);
        Assert.IsNull(method.Invoke(null, new object?[] { metadata, "missing" }));
        Assert.IsNull(method.Invoke(null, new object?[] { null, "draft" }));
    }

    private static object Invoke(string name, params object?[] args) =>
        ToolType.GetMethod(name, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;

    private static Label MakeLabel(string text)
    {
        var label = new Label();
        label.UserLocalizedLabel = new LocalizedLabel(text, 1033);
        return label;
    }
}
