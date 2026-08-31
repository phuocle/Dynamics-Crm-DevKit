using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Reflection;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.GetAuditHistory;

[TestClass]
public sealed class GetAuditHistoryAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(GetAuditHistoryTool);

    [TestMethod]
    public void FormatActionAndOperation_CoverKnownAndFallbackValues()
    {
        foreach (var pair in new[] { (1, "Create"), (2, "Update"), (3, "Delete"), (4, "Activate"),
            (5, "Deactivate"), (11, "Cascade"), (12, "Merge"), (13, "Assign"), (41, "SetState"), (999, "Action(999)") })
            Assert.AreEqual(pair.Item2, InvokeStatic<string>("FormatAction", pair.Item1));

        foreach (var pair in new[] { (1, "Create"), (2, "Update"), (3, "Delete"), (4, "Access"), (999, "Op(999)") })
            Assert.AreEqual(pair.Item2, InvokeStatic<string>("FormatOperation", pair.Item1));
    }

    [TestMethod]
    public void FormatTimeWindow_CoversMinutesHoursAndDays()
    {
        Assert.AreEqual("30 min", InvokeStatic<string>("FormatTimeWindow", 30));
        Assert.AreEqual("2h 5min", InvokeStatic<string>("FormatTimeWindow", 125));
        Assert.AreEqual("2h", InvokeStatic<string>("FormatTimeWindow", 120));
        Assert.AreEqual("2d 3h", InvokeStatic<string>("FormatTimeWindow", 3060));
        Assert.AreEqual("2d", InvokeStatic<string>("FormatTimeWindow", 2880));
    }

    [TestMethod]
    public void FormatAttributeValue_UsesFormattedValuesAndFallbackTypes()
    {
        var cacheType = ToolType.Assembly.GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.AttributeMetadataCache")!;
        var cache = Activator.CreateInstance(cacheType)!;
        var labels = (Dictionary<string, Dictionary<int, string>>)cacheType.GetProperty("OptionSetLabels")!.GetValue(cache)!;
        labels["statuscode"] = new Dictionary<int, string> { [1] = "Active" };

        var entity = new Entity("account");
        entity.FormattedValues["statuscode"] = "Formatted Active";
        Assert.AreEqual("-", InvokeStatic<string>("FormatAttributeValue", null, entity, "name", cache));
        Assert.AreEqual("Formatted Active", InvokeStatic<string>("FormatAttributeValue", new OptionSetValue(1), entity, "statuscode", cache));
        Assert.AreEqual("Active", InvokeStatic<string>("FormatAttributeValue", new OptionSetValue(1), new Entity("account"), "statuscode", cache));
        Assert.AreEqual("Contoso", InvokeStatic<string>("FormatAttributeValue", new EntityReference("account", Guid.NewGuid()) { Name = "Contoso" }, null, "name", cache));
        Assert.AreEqual("2.50", InvokeStatic<string>("FormatAttributeValue", new Money(2.5m), null, "revenue", cache));
        Assert.AreEqual("Yes", InvokeStatic<string>("FormatAttributeValue", true, null, "active", cache));
        Assert.AreEqual("No", InvokeStatic<string>("FormatAttributeValue", false, null, "active", cache));
        Assert.AreEqual("7", InvokeStatic<string>("FormatAttributeValue", new OptionSetValue(7), null, "other", cache));
    }

    [TestMethod]
    public void BuildTextAndTryParseDate_CoverEmptyAndFilteredVariants()
    {
        Assert.IsTrue(InvokeStatic<string>("BuildDetailText", "account", Guid.Empty,
            new List<AuditHistoryEntry>(), "last 1h").Contains("0 audit entries"));
        Assert.AreEqual("all entities (last 1h, user contains \"alice\", op=Update): 1 entry.",
            InvokeStatic<string>("BuildBrowseText", null, "last 1h", "alice", "Update", 1));

        var args = new object?[] { "", "from_date", null, null };
        Assert.IsTrue((bool)ToolType.GetMethod("TryParseDate", BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!);
        Assert.IsNull(args[2]);

        args = new object?[] { "not-date", "to_date", null, null };
        Assert.IsFalse((bool)ToolType.GetMethod("TryParseDate", BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!);
        Assert.IsNotNull(args[3]);
    }

    [TestMethod]
    public void EscapeHelpers_HandleNullAndXmlCharacters()
    {
        Assert.AreEqual("a b c", InvokeStatic<string>("EscapeTab", "a\tb\nc"));
        Assert.AreEqual("", InvokeStatic<string>("EscapeTab", (object?)null));
        Assert.AreEqual("&lt;&amp;&gt;&quot;&apos;", InvokeStatic<string>("EscapeXml", "<&>\"'"));
    }

    private static T InvokeStatic<T>(string methodName, params object?[] args) =>
        (T)ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
}
