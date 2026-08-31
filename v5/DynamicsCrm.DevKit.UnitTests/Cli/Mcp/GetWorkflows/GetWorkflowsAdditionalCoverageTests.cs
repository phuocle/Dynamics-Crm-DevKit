using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.GetWorkflows;

[TestClass]
public sealed class GetWorkflowsAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(GetWorkflowsTool);

    [TestMethod]
    public void MapEntity_CoversFieldsAndStageMappings()
    {
        var entity = new Entity("workflow", Guid.NewGuid())
        {
            ["name"] = "Workflow",
            ["description"] = " description ",
            ["primaryentity"] = "account",
            ["statecode"] = new OptionSetValue(1),
            ["statuscode"] = new OptionSetValue(2),
            ["ownerid"] = new EntityReference("systemuser", Guid.NewGuid()) { Name = "Owner" },
            ["ismanaged"] = true,
            ["uniquename"] = "new_workflow",
            ["createdon"] = new DateTime(2026, 1, 2),
            ["modifiedon"] = new DateTime(2026, 1, 3),
            ["createstage"] = new OptionSetValue(20),
            ["updatestage"] = new OptionSetValue(40),
            ["triggeroncreate"] = true,
            ["triggeronupdateattribute"] = "name"
        };
        entity.FormattedValues["statecode"] = "Activated";
        entity.FormattedValues["statuscode"] = "Succeeded";

        var result = InvokeStatic("MapEntity", entity, true);
        Assert.IsNotNull(result);
        StringAssert.Contains(InvokeStatic<string>("SanitizeDescription", " description "), "description");
    }

    [TestMethod]
    public void MapStageAndScope_CoverFormattedFallbackAndUnknowns()
    {
        var entity = new Entity("workflow") { ["createstage"] = new OptionSetValue(20) };
        entity.FormattedValues["createstage"] = "Pre Operation";
        Assert.AreEqual("Pre Operation", InvokeStatic<string>("MapStage", entity, "createstage"));
        entity.FormattedValues.Clear();
        Assert.AreEqual("Pre", InvokeStatic<string>("MapStage", entity, "createstage"));
        Assert.IsNull(InvokeStatic<string>("MapStage", new Entity("workflow"), "createstage"));
        Assert.IsNull(InvokeStatic<string>("MapStage", new Entity("workflow") { ["createstage"] = new OptionSetValue(99) }, "createstage"));
    }

    private static object InvokeStatic(string methodName, params object?[] args) =>
        ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;

    private static T InvokeStatic<T>(string methodName, params object?[] args) =>
        (T)ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
}
