using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageForm;

[TestClass]
public sealed class ManageFormAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(ManageFormTool);

    [TestMethod]
    public void Constructor_RequiresOptionsAndContext()
    {
        Assert.Throws<ArgumentNullException>(() => new ManageFormTool(null!, null!, new McpExecutionContext(true)));
        Assert.Throws<ArgumentNullException>(() => new ManageFormTool(null!, new McpDryRunOptions(), null!));
    }

    [TestMethod]
    public async Task PublicValidation_RejectsMissingActionAndEntityBeforeDataverse()
    {
        var tool = new ManageFormTool(null!, new McpDryRunOptions(), new McpExecutionContext(true));
        Assert.IsTrue((await tool.manage_form(null!, action: "")).IsError);
        Assert.IsTrue((await tool.manage_form(null!, action: "list", entity_name: " ")).IsError);
    }

    [TestMethod]
    public void QueryXmlAndFormXmlHelpers_CoverOfflineBranches()
    {
        var all = (Microsoft.Xrm.Sdk.Query.QueryExpression)InstanceStatic("BuildListQuery", "account", 0, false);
        var typed = (Microsoft.Xrm.Sdk.Query.QueryExpression)InstanceStatic("BuildListQuery", "account", 2, true);
        Assert.AreEqual(2, all.Criteria.Conditions.Count);
        Assert.AreEqual("objecttypecode", all.Criteria.Conditions[0].AttributeName);
        Assert.AreEqual(3, typed.Criteria.Conditions.Count);
        CollectionAssert.Contains(typed.ColumnSet.Columns.ToList(), "formxml");
        StringAssert.Contains((string)InstanceStatic("PrettyPrintXml", "<form><tabs /></form>"), "<tabs />");
        Assert.Throws<TargetInvocationException>(() => InstanceStatic("PrettyPrintXml", "not xml"));
    }

    [TestMethod]
    public void ResolveFormXmlInput_ReadsAndOptionallyDeletesTempFiles()
    {
        var file = Path.GetTempFileName() + ".formxml";
        File.WriteAllText(file, "<form />");
        Assert.AreEqual("<form />", InstanceStatic("ResolveFormXmlInput", file, true));
        Assert.IsFalse(File.Exists(file));
        Assert.AreEqual("<form />", InstanceStatic("ResolveFormXmlInput", "<form />", true));
    }

    private static object InstanceStatic(string name, params object[] args) =>
        ToolType.GetMethod(name, BindingFlags.Static | BindingFlags.NonPublic)!.Invoke(null, args)!;
}
