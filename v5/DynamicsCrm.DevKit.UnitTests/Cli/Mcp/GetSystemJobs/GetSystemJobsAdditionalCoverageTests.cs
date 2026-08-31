using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.GetSystemJobs;

[TestClass]
public sealed class GetSystemJobsAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(GetSystemJobsTool);

    [TestMethod]
    public void BuildEntry_CoversDetailFieldsAndFormattedValues()
    {
        var entity = new Entity("asyncoperation", Guid.NewGuid())
        {
            ["name"] = " Job ",
            ["primaryentitytype"] = "account",
            ["messagename"] = "Create",
            ["startedon"] = new DateTime(2026, 1, 1, 1, 2, 3),
            ["completedon"] = new DateTime(2026, 1, 1, 1, 3, 3),
            ["createdon"] = new DateTime(2026, 1, 1),
            ["executiontimespan"] = 61.5d,
            ["retrycount"] = 2,
            ["depth"] = 1,
            ["errorcode"] = 42,
            ["correlationid"] = Guid.NewGuid(),
            ["ownerid"] = new EntityReference("systemuser", Guid.NewGuid()) { Name = "Owner" },
            ["owningextensionid"] = new EntityReference("sdkmessageprocessingstep", Guid.NewGuid()) { Name = "Step" },
            ["workflowactivationid"] = new EntityReference("workflow", Guid.NewGuid()) { Name = "Workflow" },
            ["regardingobjectid"] = new EntityReference("account", Guid.NewGuid()) { Name = "Account" },
            ["postponeuntil"] = new DateTime(2026, 1, 2),
            ["friendlymessage"] = " Friendly ",
            ["message"] = " Error details "
        };
        entity.FormattedValues["operationtype"] = "System Event";
        entity.FormattedValues["statecode"] = "Completed";
        entity.FormattedValues["statuscode"] = "Failed";

        var result = InvokeStatic("BuildEntry", entity, true);
        Assert.IsNotNull(result);
        Assert.AreEqual("1m 1s", InvokeStatic<string>("FormatExecutionTime", 61.5d));
        Assert.AreEqual("2h 1m", InvokeStatic<string>("FormatExecutionTime", 7260d));
        Assert.IsNull(InvokeStatic<string>("FormatExecutionTime", (object?)null));
        StringAssert.Contains(InvokeStatic<string>("BuildDetailText", (SystemJobEntry)result), "ErrorCode: 42");
    }

    [TestMethod]
    public void BuildListAndDetailText_CoversPluralAndOptionalParts()
    {
        Assert.AreEqual("1 active system job on account (last 1h).",
            InvokeStatic<string>("BuildListText", 1, "last 1h", "active", "account"));
        Assert.AreEqual("2 system jobs (last 1d).",
            InvokeStatic<string>("BuildListText", 2, "last 1d", "all", null));
        Assert.AreEqual("last 2d", InvokeStatic<string>("FormatTimeScope", 2880));
        Assert.AreEqual("last 2h", InvokeStatic<string>("FormatTimeScope", 120));
        Assert.AreEqual("last 90min", InvokeStatic<string>("FormatTimeScope", 90));
    }

    private static object InvokeStatic(string methodName, params object?[] args) =>
        ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;

    private static T InvokeStatic<T>(string methodName, params object?[] args) =>
        (T)ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
}
