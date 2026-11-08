using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageApp;

/// <summary>
/// Extra coverage for <see cref="DynamicsCrm.DevKit.Cli.Mcp.Tools.App.AppNavigationOperationsHelper"/>:
/// the one-based-index InsertAt path (plain number and index: prefix), root-less
/// documents, MoveItem/RemoveItem ambiguity errors, and the numeric/boolean
/// JsonValueKind paths of GetStringProp and GetBoolString.
/// </summary>
[TestClass]
public sealed class AppNavigationOperationsExtraCoverageTests
{
    private static readonly Type HelperType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageAppTool).Assembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.App.AppNavigationOperationsHelper")!;

    private static readonly MethodInfo ApplyOperationsMethod = HelperType
        .GetMethod("ApplyOperations", BindingFlags.NonPublic | BindingFlags.Public | BindingFlags.Static)!;

    private static object ApplyOperations(XDocument doc, string operationsJson)
    {
        var operations = JsonSerializer.Deserialize<List<JsonElement>>(operationsJson)!;
        return ApplyOperationsMethod.Invoke(null, new object[] { doc, operations, 1033 })!;
    }

    private static List<string> Summaries(object result) =>
        (List<string>)result.GetType().GetProperty("OperationSummaries")!.GetValue(result)!;

    // ── Root-less document ──

    [TestMethod]
    public void ApplyOperations_DocumentWithoutRoot_CreatesSiteMapRoot()
    {
        var doc = new XDocument();

        var result = ApplyOperations(doc, """[{"action":"add_area","label":"Sales"}]""");

        Assert.IsNotNull(doc.Root);
        Assert.AreEqual("SiteMap", doc.Root.Name.LocalName);
        Assert.AreEqual(1, (int)result.GetType().GetProperty("ChangedOperations")!.GetValue(result)!);
        Assert.IsNotNull(doc.Root.Element("Area"));
    }

    // ── InsertAt via one-based numeric positions (plain and index: prefixed) ──

    [TestMethod]
    public void ApplyOperations_NumericPosition_InsertsAtOneBasedIndex()
    {
        var doc = XDocument.Parse("""
<SiteMap>
  <Area Id="area_a"><Titles><Title LCID='1033' Title='A' /></Titles>
    <Group Id="g1" />
    <Group Id="g2" />
  </Area>
</SiteMap>
""");

        var result = ApplyOperations(doc, """
[
  { "action": "add_group", "area": "A", "label": "Middle", "id": "g_mid", "position": "2" },
  { "action": "add_group", "area": "A", "label": "Tail", "id": "g_tail", "position": "99" },
  { "action": "add_group", "area": "A", "label": "IndexPrefixed", "id": "g_idx", "position": "index:2" }
]
""");

        var groups = doc.Root!.Element("Area")!.Elements("Group")
            .Select(g => g.Attribute("Id")?.Value).ToList();
        CollectionAssert.AreEqual(new[] { "g1", "g_idx", "g_mid", "g2", "g_tail" }, groups);
        Assert.AreEqual(3, (int)result.GetType().GetProperty("ChangedOperations")!.GetValue(result)!);
    }

    [TestMethod]
    public void ApplyOperations_NumericPositionOne_InsertsFirst()
    {
        var doc = XDocument.Parse("""
<SiteMap>
  <Area Id="area_a"><Titles><Title LCID='1033' Title='A' /></Titles><Group Id="g1" /></Area>
</SiteMap>
""");

        ApplyOperations(doc, """[{"action":"add_group","area":"A","label":"Top","id":"g_top","position":"1"}]""");

        Assert.AreEqual("g_top", doc.Root!.Element("Area")!.Elements("Group").First().Attribute("Id")?.Value);
    }

    // ── GetStringProp / GetBoolString numeric and boolean kinds ──

    [TestMethod]
    public void ApplyOperations_NumberAndBooleanProps_AreCoerced()
    {
        var doc = XDocument.Parse("<SiteMap />");

        var result = ApplyOperations(doc, """
[
  { "action": "add_area", "label": true, "id": "area_bool", "show_groups": true },
  { "action": "add_area", "label": 123, "id": "area_num", "show_groups": "true" },
  { "action": "add_area", "label": "Off", "id": "area_off", "show_groups": false }
]
""");

        var areas = doc.Root!.Elements("Area").ToList();
        Assert.AreEqual("true", areas.Single(a => a.Attribute("Id")?.Value == "area_bool").Attribute("ShowGroups")?.Value);
        Assert.AreEqual("true", areas.Single(a => a.Attribute("Id")?.Value == "area_num").Attribute("ShowGroups")?.Value);
        Assert.AreEqual("false", areas.Single(a => a.Attribute("Id")?.Value == "area_off").Attribute("ShowGroups")?.Value);
        Assert.AreEqual(3, Summaries(result).Count);
    }

    [TestMethod]
    public void ApplyOperations_AddItem_NumberEntity_IsCoerced()
    {
        var doc = XDocument.Parse("""
<SiteMap>
  <Area Id="area_a"><Titles><Title LCID='1033' Title='A' /></Titles>
    <Group Id="g1" />
  </Area>
</SiteMap>
""");

        ApplyOperations(doc, """[{"action":"add_item","area":"A","group":"g1","entity":123}]""");

        Assert.AreEqual("123", doc.Root!.Element("Area")!.Element("Group")!.Element("SubArea")!.Attribute("Entity")?.Value);
    }

    // ── MoveItem / RemoveItem ambiguity and missing-item errors ──

    private static XDocument SiteMapWithTwoEntityItems() => XDocument.Parse("""
<SiteMap>
  <Area Id="area_a"><Titles><Title LCID='1033' Title='A' /></Titles>
    <Group Id="g1"><SubArea Id="sa_x1" Entity="account" /></Group>
    <Group Id="g2"><SubArea Id="sa_x2" Entity="account" /></Group>
  </Area>
</SiteMap>
""");

    [TestMethod]
    public void ApplyOperations_MoveItem_MissingItem_Throws()
    {
        var doc = SiteMapWithTwoEntityItems();

        var ex = Assert.ThrowsExactly<System.Reflection.TargetInvocationException>(
            () => ApplyOperations(doc, """[{"action":"move_item","item":"ghost","to_area":"A","to_group":"g1"}]"""));
        StringAssert.Contains(ex.InnerException!.Message, "Item 'ghost' not found.");
    }

    [TestMethod]
    public void ApplyOperations_MoveItem_AmbiguousItem_Throws()
    {
        var doc = SiteMapWithTwoEntityItems();

        var ex = Assert.ThrowsExactly<System.Reflection.TargetInvocationException>(
            () => ApplyOperations(doc, """[{"action":"move_item","item":"account","to_area":"A","to_group":"g1"}]"""));
        StringAssert.Contains(ex.InnerException!.Message, "Multiple items match 'account'");
    }

    [TestMethod]
    public void ApplyOperations_RemoveItem_AmbiguousWithinGroup_Throws()
    {
        var doc = XDocument.Parse("""
<SiteMap>
  <Area Id="area_a"><Titles><Title LCID='1033' Title='A' /></Titles>
    <Group Id="g1">
      <SubArea Id="sa_1" Entity="account" />
      <SubArea Id="sa_2" Entity="account" />
    </Group>
  </Area>
</SiteMap>
""");

        var ex = Assert.ThrowsExactly<System.Reflection.TargetInvocationException>(
            () => ApplyOperations(doc, """[{"action":"remove_item","area":"A","group":"g1","item":"account"}]"""));
        StringAssert.Contains(ex.InnerException!.Message, "Multiple items match 'account'");
    }

    [TestMethod]
    public void ApplyOperations_UnknownAction_Throws()
    {
        var doc = XDocument.Parse("<SiteMap />");

        var ex = Assert.ThrowsExactly<System.Reflection.TargetInvocationException>(
            () => ApplyOperations(doc, """[{"action":"rename_area","area":"A"}]"""));
        StringAssert.Contains(ex.InnerException!.Message, "Unknown action 'rename_area'");
    }

    [TestMethod]
    public void ApplyOperations_OperationWithoutAction_Throws()
    {
        var doc = XDocument.Parse("<SiteMap />");

        var ex = Assert.ThrowsExactly<System.Reflection.TargetInvocationException>(
            () => ApplyOperations(doc, """[{"label":"NoAction"}]"""));
        StringAssert.Contains(ex.InnerException!.Message, "must have an 'action' field");
    }
}
