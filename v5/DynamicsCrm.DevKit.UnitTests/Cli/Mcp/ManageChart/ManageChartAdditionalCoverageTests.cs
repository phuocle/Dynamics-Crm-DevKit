using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Xml.Linq;

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

    [TestMethod]
    public void TemplateAndPresentationBuilders_CoverAllSupportedTemplates()
    {
        var supportedTypes = new[] { "Column", "Bar", "Line", "Pie", "Doughnut", "Donut", "Funnel", "Area", "Bubble", "Radar", "unknown" };
        foreach (var chartType in supportedTypes)
        {
            var xml = InvokeStatic<string>("LoadChartTemplateXml", chartType);
            var doc = XDocument.Parse(xml);
            Assert.AreEqual("Chart", doc.Root!.Name.LocalName, chartType);
            Assert.IsNotNull(InvokeStatic<string>("BuildPresentationDescription", chartType, "My chart", "aggregate_column"));
        }

        Assert.IsNull(InvokeStatic("ReadChartTemplateXml", "does-not-exist"));
    }

    [TestMethod]
    public void MultiSeriesPresentationAndDataDescription_UseSeriesAliasesAndFilters()
    {
        var parsed = InvokeStatic("ParseMeasures", "revenue:sum:Revenue;count:count");
        var measures = (IList)parsed.GetType().GetField("Item1")!.GetValue(parsed)!;
        var filtersTuple = InvokeStatic("ParseFilter", "name like A&B; statecode!=1");
        var filters = (IList)filtersTuple.GetType().GetField("Item1")!.GetValue(filtersTuple)!;

        var multiXml = InvokeStatic<string>("BuildPresentationDescriptionMulti", "Column", measures);
        var multiDoc = XDocument.Parse(multiXml);
        Assert.AreEqual(2, multiDoc.Descendants("Series").Count(s => s.Attribute("Name") != null));
        Assert.IsNotNull(multiDoc.Descendants("Legend").FirstOrDefault());

        var data = InvokeStatic("BuildDataDescriptionMulti", "account", "statecode", measures, filters);
        var dataXml = (string)data.GetType().GetField("Item1")!.GetValue(data)!;
        StringAssert.Contains(dataXml, "aggregate_column_1");
        StringAssert.Contains(dataXml, "A&amp;B");

        var missingGroup = InvokeStatic("BuildDataDescriptionMulti", "account", "", measures, null!);
        Assert.IsNotNull(missingGroup);
    }

    [TestMethod]
    public void DataDescriptionAndValidation_CoverRemainingBranches()
    {
        var missingEntity = InvokeStatic("BuildDataDescriptionFromEntity", "", "statecode", "count", "count", null!);
        var missingCategory = InvokeStatic("BuildDataDescriptionFromEntity", "account", "", "count", "count", null!);
        var missingLegend = InvokeStatic("BuildDataDescriptionFromEntity", "account", "statecode", "", "count", null!);
        Assert.IsNotNull(missingEntity);
        Assert.IsNotNull(missingCategory);
        Assert.IsNotNull(missingLegend);

        var warnings = InvokeStatic("ValidateChartXmls", "<datadefinition />", "<Chart><Series ChartType='Pie' /></Chart>");
        Assert.AreEqual(0, ((IList)warnings.GetType().GetField("Item1")!.GetValue(warnings)!).Count);
        Assert.IsNull(InvokeStatic<string>("ResolveXmlInput", new object?[] { null }));
        Assert.AreEqual("", InvokeStatic<string>("ResolveXmlInput", ""));
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
