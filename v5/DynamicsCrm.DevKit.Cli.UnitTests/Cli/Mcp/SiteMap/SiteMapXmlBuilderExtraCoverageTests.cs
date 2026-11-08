using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;
using System.Reflection;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.SiteMap;

/// <summary>
/// Extra coverage for <see cref="DynamicsCrm.DevKit.Cli.Mcp.Tools.SiteMap.SiteMapXmlBuilder"/>:
/// InsertElement position modes that the existing suite does not reach (last / empty,
/// first with no siblings, before:ID found and missing), the url and default_dashboard
/// BuildSubAreaElement branches, and the numeric / boolean / unsupported JsonValueKind
/// paths of GetStringProp and NormalizeBoolProp.
/// </summary>
[TestClass]
public sealed class SiteMapXmlBuilderExtraCoverageTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.SiteMap.SiteMapXmlBuilder);

    private static readonly MethodInfo GetStringPropMethod = ToolType.GetMethod("GetStringProp", BindingFlags.NonPublic | BindingFlags.Static)!;
    private static readonly MethodInfo NormalizeBoolPropMethod = ToolType.GetMethod("NormalizeBoolProp", BindingFlags.NonPublic | BindingFlags.Static)!;
    private static readonly MethodInfo BuildSubAreaElementMethod = ToolType.GetMethod("BuildSubAreaElement", BindingFlags.NonPublic | BindingFlags.Static)!;
    private static readonly MethodInfo InsertElementMethod = ToolType.GetMethod("InsertElement", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static JsonElement Root(string json) => JsonDocument.Parse(json).RootElement;

    private static string GetStringProp(string json, string name) =>
        (string)GetStringPropMethod.Invoke(null, new object[] { Root(json), name })!;

    private static string NormalizeBoolProp(string json, string name)
    {
        try
        {
            return (string)NormalizeBoolPropMethod.Invoke(null, new object[] { Root(json), name })!;
        }
        catch (TargetInvocationException ex)
        {
            throw ex.InnerException!;
        }
    }

    private static XElement BuildSubAreaElement(string json)
    {
        try
        {
            return (XElement)BuildSubAreaElementMethod.Invoke(null, new object[] { Root(json) })!;
        }
        catch (TargetInvocationException ex)
        {
            throw ex.InnerException!;
        }
    }

    private static void InsertElement(XElement parent, XElement newElement, string position, string childName)
    {
        try
        {
            InsertElementMethod.Invoke(null, new object[] { parent, newElement, position, childName });
        }
        catch (TargetInvocationException ex)
        {
            throw ex.InnerException!;
        }
    }

    // ── GetStringProp: numeric / boolean / unsupported kinds ──

    [TestMethod]
    public void GetStringProp_Number_ReturnsRawText()
    {
        Assert.AreEqual("42", GetStringProp("{\"entity\":42}", "entity"));
        Assert.AreEqual("42.5", GetStringProp("{\"entity\":42.5}", "entity"));
    }

    [TestMethod]
    public void GetStringProp_BooleanKinds_ReturnTrueFalse()
    {
        Assert.AreEqual("true", GetStringProp("{\"entity\":true}", "entity"));
        Assert.AreEqual("false", GetStringProp("{\"entity\":false}", "entity"));
    }

    [TestMethod]
    public void GetStringProp_UnsupportedKind_ReturnsNull()
    {
        Assert.IsNull(GetStringProp("{\"entity\":{\"x\":1}}", "entity"));
        Assert.IsNull(GetStringProp("{\"entity\":[1,2]}", "entity"));
    }

    // ── NormalizeBoolProp: missing property and unsupported kind ──

    [TestMethod]
    public void NormalizeBoolProp_MissingProperty_ReturnsNull()
    {
        Assert.IsNull(NormalizeBoolProp("{}", "pass_params"));
    }

    [TestMethod]
    public void NormalizeBoolProp_BoolKinds_ReturnNormalized()
    {
        Assert.AreEqual("true", NormalizeBoolProp("{\"flag\":true}", "flag"));
        Assert.AreEqual("false", NormalizeBoolProp("{\"flag\":false}", "flag"));
    }

    [TestMethod]
    public void NormalizeBoolProp_NonStringValue_Throws()
    {
        var ex = Assert.ThrowsExactly<InvalidOperationException>(() => NormalizeBoolProp("{\"flag\":42}", "flag"));
        StringAssert.Contains(ex.Message, "must be a boolean value");
    }

    // ── BuildSubAreaElement: icon, url and default_dashboard branches ──

    [TestMethod]
    public void BuildSubAreaElement_EntityWithIconAndPassParams()
    {
        var elem = BuildSubAreaElement("""{"entity":"Account","pass_params":"no","icon":"$webresource:icon.svg"}""");
        Assert.AreEqual("sa_account", elem.Attribute("Id")?.Value);
        Assert.AreEqual("Account", elem.Attribute("Entity")?.Value);
        Assert.AreEqual("false", elem.Attribute("PassParams")?.Value);
        Assert.AreEqual("$webresource:icon.svg", elem.Attribute("Icon")?.Value);
    }

    [TestMethod]
    public void BuildSubAreaElement_Url_UsesUrlAttribute()
    {
        var elem = BuildSubAreaElement("""{"url":"https://contoso.com","id":"sa_wiki"}""");
        Assert.AreEqual("sa_wiki", elem.Attribute("Id")?.Value);
        Assert.AreEqual("https://contoso.com", elem.Attribute("Url")?.Value);
        Assert.IsNull(elem.Attribute("Entity"));
    }

    [TestMethod]
    public void BuildSubAreaElement_DefaultDashboard_UsesDashboardAttribute()
    {
        var elem = BuildSubAreaElement("""{"default_dashboard":"sales-dashboard"}""");
        Assert.AreEqual("sa_dashboard", elem.Attribute("Id")?.Value);
        Assert.AreEqual("sales-dashboard", elem.Attribute("DefaultDashboard")?.Value);
        Assert.IsNull(elem.Attribute("Entity"));
        Assert.IsNull(elem.Attribute("Url"));
    }

    [TestMethod]
    public void BuildSubAreaElement_EntityTrueNumberCoercion()
    {
        // GetStringProp coerces numbers and booleans, so entity:1 builds an Entity subarea.
        var elem = BuildSubAreaElement("""{"entity":1}""");
        Assert.AreEqual("1", elem.Attribute("Entity")?.Value);
    }

    // ── InsertElement: position modes the existing suite misses ──

    private static XElement ParentWithChildren(params string[] ids)
    {
        var parent = new XElement("Area");
        foreach (var id in ids)
            parent.Add(new XElement("Group", new XAttribute("Id", id)));
        return parent;
    }

    [TestMethod]
    public void InsertElement_Last_AndEmptyPosition_Appends()
    {
        var parent = ParentWithChildren("g1");
        InsertElement(parent, new XElement("Group", new XAttribute("Id", "g2")), "last", "Group");
        InsertElement(parent, new XElement("Group", new XAttribute("Id", "g3")), "", "Group");
        Assert.AreEqual("g1", parent.Elements("Group").First().Attribute("Id")?.Value);
        Assert.AreEqual("g2", parent.Elements("Group").Skip(1).First().Attribute("Id")?.Value);
        Assert.AreEqual("g3", parent.Elements("Group").Last().Attribute("Id")?.Value);
    }

    [TestMethod]
    public void InsertElement_First_WithNoChildren_Appends()
    {
        var parent = ParentWithChildren();
        InsertElement(parent, new XElement("Group", new XAttribute("Id", "only")), "first", "Group");
        Assert.AreEqual("only", parent.Elements("Group").Single().Attribute("Id")?.Value);
    }

    [TestMethod]
    public void InsertElement_First_WithChildren_InsertsBeforeFirstChild()
    {
        var parent = ParentWithChildren("g1", "g2");
        InsertElement(parent, new XElement("Group", new XAttribute("Id", "g0")), "first", "Group");
        Assert.AreEqual("g0", parent.Elements("Group").First().Attribute("Id")?.Value);
        Assert.AreEqual(3, parent.Elements("Group").Count());
    }

    [TestMethod]
    public void InsertElement_BeforeRef_InsertsBeforeReferencedElement()
    {
        var parent = ParentWithChildren("g1", "g2", "g3");
        InsertElement(parent, new XElement("Group", new XAttribute("Id", "gX")), "before:g3", "Group");
        CollectionAssert.AreEqual(
            new[] { "g1", "g2", "gX", "g3" },
            parent.Elements("Group").Select(e => e.Attribute("Id")?.Value).ToList());
    }

    [TestMethod]
    public void InsertElement_BeforeRef_Missing_Throws()
    {
        var parent = ParentWithChildren("g1");
        var ex = Assert.ThrowsExactly<InvalidOperationException>(
            () => InsertElement(parent, new XElement("Group", new XAttribute("Id", "gX")), "before:missing", "Group"));
        StringAssert.Contains(ex.Message, "Element 'missing' not found for insertion.");
    }

    [TestMethod]
    public void InsertElement_AfterRef_InsertsAfterReferencedElement()
    {
        var parent = ParentWithChildren("g1", "g2");
        InsertElement(parent, new XElement("Group", new XAttribute("Id", "gX")), "after:g1", "Group");
        CollectionAssert.AreEqual(
            new[] { "g1", "gX", "g2" },
            parent.Elements("Group").Select(e => e.Attribute("Id")?.Value).ToList());
    }

    [TestMethod]
    public void InsertElement_PositionIsCaseInsensitive()
    {
        var parent = ParentWithChildren("g1", "g2");
        InsertElement(parent, new XElement("Group", new XAttribute("Id", "g0")), "  FIRST  ", "Group");
        Assert.AreEqual("g0", parent.Elements("Group").First().Attribute("Id")?.Value);
    }

    [TestMethod]
    public void InsertElement_IndexZero_WithAndWithoutChildren()
    {
        var empty = ParentWithChildren();
        InsertElement(empty, new XElement("Group", new XAttribute("Id", "only")), "index:0", "Group");
        Assert.AreEqual("only", empty.Elements("Group").Single().Attribute("Id")?.Value);

        var parent = ParentWithChildren("g1", "g2");
        InsertElement(parent, new XElement("Group", new XAttribute("Id", "gX")), "index:0", "Group");
        Assert.AreEqual("gX", parent.Elements("Group").First().Attribute("Id")?.Value);
    }

    [TestMethod]
    public void InsertElement_IndexBeyondCount_AppendsAtEnd()
    {
        var parent = ParentWithChildren("g1", "g2");
        InsertElement(parent, new XElement("Group", new XAttribute("Id", "gX")), "index:99", "Group");
        Assert.AreEqual("gX", parent.Elements("Group").Last().Attribute("Id")?.Value);
    }

    [TestMethod]
    public void InsertElement_IndexMid_InsertsBeforeZeroBasedPosition()
    {
        var parent = ParentWithChildren("g1", "g2", "g3");
        // children[index].AddBeforeSelf — zero-based, so index:2 inserts before g3.
        InsertElement(parent, new XElement("Group", new XAttribute("Id", "gX")), "index:2", "Group");
        CollectionAssert.AreEqual(
            new[] { "g1", "g2", "gX", "g3" },
            parent.Elements("Group").Select(e => e.Attribute("Id")?.Value).ToList());
    }

    [TestMethod]
    public void InsertElement_InvalidPosition_Throws()
    {
        var parent = ParentWithChildren("g1");
        Assert.ThrowsExactly<InvalidOperationException>(
            () => InsertElement(parent, new XElement("Group", new XAttribute("Id", "gX")), "middle", "Group"));
        Assert.ThrowsExactly<InvalidOperationException>(
            () => InsertElement(parent, new XElement("Group", new XAttribute("Id", "gX")), "before", "Group"));
    }
}
