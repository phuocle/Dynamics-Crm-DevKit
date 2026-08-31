using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.GetFlows;

[TestClass]
public sealed class GetFlowsAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(GetFlowsTool);

    [TestMethod]
    public void MapFlowEntry_CoversAllStateValuesAndOptionalFields()
    {
        foreach (var state in new[] { 0, 1, 2, 99 })
        {
            var entity = new Entity("workflow", Guid.NewGuid())
            {
                ["name"] = "Flow",
                ["statecode"] = new OptionSetValue(state),
                ["ownerid"] = new EntityReference("systemuser", Guid.NewGuid()) { Name = "Owner" },
                ["ismanaged"] = true,
                ["modifiedon"] = new DateTime(2026, 2, 3)
            };
            var result = InvokeStatic("MapFlowEntry", entity);
            Assert.IsNotNull(result);
        }
    }

    [TestMethod]
    public void MapRunEntry_CoversKnownUnknownStatusesAndDurationBranches()
    {
        var start = new DateTime(2026, 1, 1, 0, 0, 0);
        foreach (var status in new[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 99 })
        {
            var entity = new Entity("flowsession", Guid.NewGuid())
            {
                ["statuscode"] = new OptionSetValue(status),
                ["startedon"] = start,
                ["completedon"] = start.AddHours(2).AddMinutes(3),
                ["errorcode"] = " ",
                ["errormessage"] = " failed ",
                ["triggertype"] = " manual "
            };
            Assert.IsNotNull(InvokeStatic("MapRunEntry", entity));
        }

        Assert.AreEqual("<1s", InvokeStatic<string>("FormatDuration", start, start.AddMilliseconds(500)));
        Assert.AreEqual("5s", InvokeStatic<string>("FormatDuration", start, start.AddSeconds(5)));
        Assert.AreEqual("2m 3s", InvokeStatic<string>("FormatDuration", start, start.AddMinutes(2).AddSeconds(3)));
        Assert.AreEqual("2h 3m", InvokeStatic<string>("FormatDuration", start, start.AddHours(2).AddMinutes(3)));
    }

    [TestMethod]
    public void BuildStatusFilter_CoversEveryKnownStatus()
    {
        foreach (var status in new[] { "succeeded", "failed", "running", "cancelled", "waiting", "paused", "skipped", "suspended", "other" })
            Assert.IsNotNull(InvokeStatic<string>("BuildStatusFilter", status));
        Assert.AreEqual("", InvokeStatic<string>("BuildStatusFilter", (object?)null));
        Assert.AreEqual("&lt;&amp;&gt;", InvokeStatic<string>("EscapeXml", "<&>"));
    }

    private static object InvokeStatic(string methodName, params object?[] args) =>
        ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;

    private static T InvokeStatic<T>(string methodName, params object?[] args) =>
        (T)ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
}
