using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.GetPluginTraceLogs;

[TestClass]
public sealed class GetPluginTraceLogsAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(GetPluginTraceLogsTool);

    [TestMethod]
    public void BuildEntry_CoversFormattedValuesOptionalFieldsAndDetails()
    {
        var correlation = Guid.NewGuid();
        var entity = new Entity("plugintracelog", Guid.NewGuid())
        {
            ["typename"] = "Contoso.Plugin",
            ["messagename"] = " Create ",
            ["primaryentity"] = " account ",
            ["depth"] = 2,
            ["performanceexecutionduration"] = 42,
            ["correlationid"] = correlation,
            ["pluginstepid"] = Guid.NewGuid(),
            ["requestid"] = Guid.NewGuid(),
            ["createdon"] = new DateTime(2026, 1, 2, 3, 4, 5),
            ["messageblock"] = " trace ",
            ["exceptiondetails"] = " exception "
        };
        entity.FormattedValues["mode"] = "Async";
        entity.FormattedValues["operationtype"] = "Plug-in";
        entity.FormattedValues["issystemcreated"] = "No";

        var detail = InvokeStatic("BuildEntry", entity, true);
        var summary = InvokeStatic("BuildEntry", entity, false);

        Assert.IsNotNull(detail);
        Assert.IsNotNull(summary);
        Assert.AreEqual("trace", detail.GetType().GetProperty("MessageBlock")!.GetValue(detail));
        Assert.IsNull(summary.GetType().GetProperty("MessageBlock")!.GetValue(summary));
    }

    [TestMethod]
    public void FormatTimeScope_CoversDaysHoursAndMinutes()
    {
        Assert.AreEqual("last 2d", InvokeStatic<string>("FormatTimeScope", 2880));
        Assert.AreEqual("last 2h", InvokeStatic<string>("FormatTimeScope", 120));
        Assert.AreEqual("last 90min", InvokeStatic<string>("FormatTimeScope", 90));
        Assert.IsNull(InvokeStatic<string>("NullIfEmpty", " "));
    }

    private static object InvokeStatic(string methodName, params object?[] args) =>
        ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;

    private static T InvokeStatic<T>(string methodName, params object?[] args) =>
        (T)ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
}
