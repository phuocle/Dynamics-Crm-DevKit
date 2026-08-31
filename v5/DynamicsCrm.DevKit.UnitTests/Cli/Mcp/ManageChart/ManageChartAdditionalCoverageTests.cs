using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageChart;

[TestClass]
public sealed class ManageChartAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(ManageChartTool);

    [TestMethod]
    public void ParseMeasuresAndFilters_CoverValidAndInvalidBranches()
    {
        var parsedMeasures = InvokeStatic("ParseMeasures", "revenue:sum:Revenue; count:count");
        var measures = (IList)parsedMeasures.GetType().GetField("Item1")!.GetValue(parsedMeasures)!;
        Assert.AreEqual(2, measures.Count);
        Assert.AreEqual("revenue:sum:Revenue; count:count", InvokeStatic<string>("FormatMeasures", measures));
        Assert.IsNotNull(InvokeStatic("ParseMeasures", "bad"));
        Assert.IsNotNull(InvokeStatic("ParseMeasures", "revenue:median"));
        Assert.IsNotNull(InvokeStatic("ParseMeasuresInput", "revenue:sum", "amount", ""));

        var parsedFilter = InvokeStatic("ParseFilter", "statecode=0; name like Contoso; category in (1,2); description null; ownerid not-null");
        var conditions = (IList)parsedFilter.GetType().GetField("Item1")!.GetValue(parsedFilter)!;
        Assert.AreEqual(5, conditions.Count);
        Assert.IsNotNull(InvokeStatic<string>("FormatConditions", conditions));
        Assert.IsNotNull(InvokeStatic<string>("BuildFilterFragment", conditions));
        Assert.IsNotNull(InvokeStatic("ParseFilter", "in ()"));
        Assert.IsNotNull(InvokeStatic("ParseFilter", "not valid"));
    }

    [TestMethod]
    public void ChartDescriptionAndValidation_CoverFiltersTemplatesAndErrors()
    {
        var parsed = InvokeStatic("ParseMeasures", "revenue:sum:Revenue;count:count");
        var measures = (IList)parsed.GetType().GetField("Item1")!.GetValue(parsed)!;
        var filters = (IList)InvokeStatic("ParseFilter", "statecode=0").GetType().GetField("Item1")!.GetValue(InvokeStatic("ParseFilter", "statecode=0"))!;
        Assert.IsNotNull(InvokeStatic("BuildDataDescriptionMulti", "account", "statuscode", measures, filters));
        Assert.IsNotNull(InvokeStatic("BuildDataDescriptionMulti", "", "statuscode", measures, null));
        Assert.AreEqual("Doughnut", InvokeStaticWithOut<string>("ResolveChartType", "donut", out _));
        Assert.AreEqual("Radar", InvokeStaticWithOut<string>("ResolveChartType", "radar", out _));
        Assert.AreEqual("custom", InvokeStaticWithOut<string>("ResolveChartType", " custom ", out _));

        var invalid = InvokeStatic("ValidateChartXmls", "<bad", "<Chart><Series ChartType=\"Unknown\" /></Chart>");
        var errors = (IList)invalid.GetType().GetField("Item1")!.GetValue(invalid)!;
        Assert.IsTrue(errors.Count >= 2);
        Assert.AreEqual("<Chart />", InvokeStatic<string>("ResolveXmlInput", "<Chart />"));
    }

    [TestMethod]
    public void ResolveXmlInput_ReadsExistingFileAndPreservesMissingInput()
    {
        var path = Path.Combine(Path.GetTempPath(), "devkit-chart-" + Guid.NewGuid().ToString("N") + ".xml");
        try
        {
            File.WriteAllText(path, "  <Chart />  ");
            Assert.AreEqual("<Chart />", InvokeStatic<string>("ResolveXmlInput", path));
            Assert.AreEqual(path + "-missing", InvokeStatic<string>("ResolveXmlInput", path + "-missing"));
        }
        finally
        {
            if (File.Exists(path)) File.Delete(path);
        }
    }

    private static object InvokeStatic(string methodName, params object?[] args) =>
        ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;

    private static T InvokeStatic<T>(string methodName, params object?[] args) =>
        (T)ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;

    private static T InvokeStaticWithOut<T>(string methodName, string input, out bool defaulted)
    {
        var args = new object?[] { input, false };
        var value = (T)ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
        defaulted = (bool)args[1]!;
        return value;
    }
}
