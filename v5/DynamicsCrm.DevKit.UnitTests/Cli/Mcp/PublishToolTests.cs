using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for PublishTool.BuildParameterXml() — generates XML parameter for PublishXml request.
/// This method is private static, accessed via reflection.
/// </summary>
[TestClass]
public class PublishToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.PublishCustomizationsTool);

    private static readonly MethodInfo BuildParameterXmlMethod = ToolType
        .GetMethod("BuildParameterXml", BindingFlags.NonPublic | BindingFlags.Static, null,
            new[] { typeof(List<string>), typeof(bool), typeof(bool) }, null)!;

    private static string BuildParameterXml(List<string> entities, bool includeGlobalOptionSets, bool includeSiteMap)
    {
        return (string)BuildParameterXmlMethod.Invoke(null, new object[] { entities, includeGlobalOptionSets, includeSiteMap })!;
    }

    [TestMethod]
    public void BuildParameterXml_SingleEntity_CorrectXml()
    {
        var result = BuildParameterXml(new List<string> { "account" }, false, false);

        Assert.IsTrue(result.Contains("<importexportxml>"));
        Assert.IsTrue(result.Contains("<entity>account</entity>"));
        Assert.IsTrue(result.Contains("</entities>"));
        Assert.IsTrue(result.Contains("<optionsets />"));
        Assert.IsTrue(result.Contains("<sitemaps />"));
        Assert.IsTrue(result.Contains("</importexportxml>"));
    }

    [TestMethod]
    public void BuildParameterXml_MultipleEntities_AllIncluded()
    {
        var result = BuildParameterXml(new List<string> { "account", "contact", "lead" }, false, false);

        Assert.IsTrue(result.Contains("<entity>account</entity>"));
        Assert.IsTrue(result.Contains("<entity>contact</entity>"));
        Assert.IsTrue(result.Contains("<entity>lead</entity>"));
    }

    [TestMethod]
    public void BuildParameterXml_WithGlobalOptionSets_IncludesOptionsets()
    {
        var result = BuildParameterXml(new List<string> { "account" }, true, false);

        Assert.IsTrue(result.Contains("<optionsets><optionset>all</optionset></optionsets>"));
        Assert.IsTrue(result.Contains("<sitemaps />"));
    }

    [TestMethod]
    public void BuildParameterXml_WithSiteMap_IncludesSitemaps()
    {
        var result = BuildParameterXml(new List<string> { "account" }, false, true);

        Assert.IsTrue(result.Contains("<optionsets />"));
        Assert.IsTrue(result.Contains("<sitemaps><sitemap /></sitemaps>"));
    }

    [TestMethod]
    public void BuildParameterXml_WithBothExtras_IncludesBoth()
    {
        var result = BuildParameterXml(new List<string> { "account" }, true, true);

        Assert.IsTrue(result.Contains("<optionsets><optionset>all</optionset></optionsets>"));
        Assert.IsTrue(result.Contains("<sitemaps><sitemap /></sitemaps>"));
    }

    [TestMethod]
    public void BuildParameterXml_NoExtras_EmptyElements()
    {
        var result = BuildParameterXml(new List<string> { "account" }, false, false);

        Assert.IsTrue(result.Contains("<optionsets />"));
        Assert.IsTrue(result.Contains("<sitemaps />"));
    }

    [TestMethod]
    public void BuildParameterXml_EmptyEntityList_EmptyEntitiesElement()
    {
        var result = BuildParameterXml(new List<string>(), false, false);

        Assert.IsTrue(result.Contains("<entities></entities>"));
    }

    [TestMethod]
    public void BuildParameterXml_IsValidXml()
    {
        var result = BuildParameterXml(new List<string> { "account", "contact" }, true, true);

        // Should be parseable XML
        var doc = System.Xml.Linq.XDocument.Parse(result);
        Assert.IsNotNull(doc.Root);
        Assert.AreEqual("importexportxml", doc.Root.Name.LocalName);
    }
}
