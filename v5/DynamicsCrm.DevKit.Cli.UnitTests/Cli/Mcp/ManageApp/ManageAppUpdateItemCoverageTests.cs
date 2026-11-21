using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Reflection;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageApp;

/// <summary>
/// update_item navigation operation — every branch: label change, no-op,
/// entity target write + duplicate detection, dashboard targets, icon
/// misuse, multi-target and blank-entity rejections, zero matches.
/// </summary>
[TestClass]
public class ManageAppUpdateItemCoverageTests
{
    private static readonly Type HelperType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageAppTool).Assembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.App.AppNavigationOperationsHelper")!;

    private static readonly MethodInfo ApplyOperationsMethod = HelperType
        .GetMethod("ApplyOperations", BindingFlags.NonPublic | BindingFlags.Public | BindingFlags.Static)!;

    private const string SeedDoc = """
<SiteMap>
  <Area Id="area1">
    <Group Id="group1">
      <SubArea Id="item1"><Titles><Title LCID="1033" Title="Old" /></Titles></SubArea>
    </Group>
  </Area>
</SiteMap>
""";

    private static object Apply(XDocument doc, string operationsJson)
    {
        var operations = JsonSerializer.Deserialize<List<JsonElement>>(operationsJson)!;
        return ApplyOperationsMethod.Invoke(null, new object[] { doc, operations, 1033 })!;
    }

    private static (int Changed, int NoOp, bool HasChanges) Summary(object result)
        => ((int)result.GetType().GetProperty("ChangedOperations")!.GetValue(result)!,
            (int)result.GetType().GetProperty("NoOpOperations")!.GetValue(result)!,
            (bool)result.GetType().GetProperty("HasChanges")!.GetValue(result)!);

    private static string AssertOpError(XDocument doc, string operationsJson, string expected)
    {
        var ex = Assert.ThrowsExactly<TargetInvocationException>(() => Apply(doc, operationsJson));
        StringAssert.Contains(ex.InnerException!.Message, expected);
        return ex.InnerException.Message;
    }

    // ──────────────────────────────────────────────
    // Label paths
    // ──────────────────────────────────────────────

    [TestMethod]
    public void UpdateItem_LabelChange_RewritesExistingTitle()
    {
        var doc = XDocument.Parse(SeedDoc);

        var result = Apply(doc, """[{"action":"update_item","area":"area1","group":"group1","item":"item1","label":"New"}]""");

        var (changed, noOp, hasChanges) = Summary(result);
        Assert.AreEqual(1, changed);
        Assert.AreEqual(0, noOp);
        Assert.IsTrue(hasChanges);
        Assert.AreEqual("New", (string)doc.Descendants("Title").Single(t => (int)t.Attribute("LCID") == 1033).Attribute("Title")!);
    }

    [TestMethod]
    public void UpdateItem_SameLabel_IsNoOp()
    {
        var doc = XDocument.Parse(SeedDoc);

        var result = Apply(doc, """[{"action":"update_item","area":"area1","group":"group1","item":"item1","label":"Old"}]""");

        var (changed, noOp, hasChanges) = Summary(result);
        Assert.AreEqual(0, changed);
        Assert.AreEqual(1, noOp);
        Assert.AreEqual(false, hasChanges);
    }

    [TestMethod]
    public void UpdateItem_LabelWithoutExistingTitles_BuildsTitles()
    {
        var doc = XDocument.Parse("<SiteMap><Area Id='area1'><Group Id='group1'><SubArea Id='item1' /></Group></Area></SiteMap>");

        var result = Apply(doc, """[{"action":"update_item","area":"area1","group":"group1","item":"item1","label":"Fresh"}]""");

        Assert.AreEqual(1, Summary(result).Changed);
        Assert.AreEqual("Fresh", (string)doc.Descendants("Title").Single().Attribute("Title")!);
    }

    // ──────────────────────────────────────────────
    // Entity target paths
    // ──────────────────────────────────────────────

    [TestMethod]
    public void UpdateItem_EntityTarget_WritesSubAreaAndTracksAddedEntity()
    {
        var doc = XDocument.Parse(SeedDoc);

        var result = Apply(doc, """[{"action":"update_item","area":"area1","group":"group1","item":"item1","entity":"account"}]""");

        Assert.AreEqual(1, Summary(result).Changed);
        var added = (IEnumerable<string>)result.GetType().GetProperty("AddedEntities")!.GetValue(result)!;
        CollectionAssert.Contains(added.ToList(), "account");
        Assert.AreEqual("account", (string)doc.Descendants("SubArea").Single().Attribute("Entity")!);
    }

    [TestMethod]
    public void UpdateItem_EntityAlreadyInGroup_Throws()
    {
        var doc = XDocument.Parse("""
<SiteMap>
  <Area Id="area1">
    <Group Id="group1">
      <SubArea Id="item1" />
      <SubArea Id="other" Entity="account" />
    </Group>
  </Area>
</SiteMap>
""");

        AssertOpError(doc, """[{"action":"update_item","area":"area1","group":"group1","item":"item1","entity":"account"}]""",
            "Entity item 'account' already exists in Group 'group1'");
    }

    // ──────────────────────────────────────────────
    // Dashboard target paths
    // ──────────────────────────────────────────────

    [TestMethod]
    public void UpdateItem_DashboardId_WritesDefaultDashboard()
    {
        var doc = XDocument.Parse(SeedDoc);
        var guid = "11111111-2222-3333-4444-555555555555";

        var result = Apply(doc, $$"""[{"action":"update_item","area":"area1","group":"group1","item":"item1","dashboard_id":"{{guid}}"}]""");

        Assert.AreEqual(1, Summary(result).Changed);
        Assert.AreEqual(guid, (string)doc.Descendants("SubArea").Single().Attribute("DefaultDashboard")!);
    }

    [TestMethod]
    public void UpdateItem_DashboardIdAndDefaultDashboard_Throws()
    {
        var doc = XDocument.Parse(SeedDoc);

        AssertOpError(doc,
            """[{"action":"update_item","area":"area1","group":"group1","item":"item1","dashboard_id":"11111111-2222-3333-4444-555555555555","default_dashboard":"11111111-2222-3333-4444-555555555555"}]""",
            "accepts only one of 'dashboard_id' or 'default_dashboard'");
    }

    [TestMethod]
    public void UpdateItem_TwoTargets_Throws()
    {
        var doc = XDocument.Parse(SeedDoc);

        AssertOpError(doc,
            """[{"action":"update_item","area":"area1","group":"group1","item":"item1","entity":"account","url":"https://example.invalid"}]""",
            "accepts only one target");
    }

    [TestMethod]
    public void UpdateItem_BadDashboardGuid_Throws()
    {
        var doc = XDocument.Parse(SeedDoc);

        AssertOpError(doc,
            """[{"action":"update_item","area":"area1","group":"group1","item":"item1","dashboard_id":"not-a-guid"}]""",
            "requires a non-empty dashboard GUID");
    }

    // ──────────────────────────────────────────────
    // Icon, blank entity, matches
    // ──────────────────────────────────────────────

    [TestMethod]
    public void UpdateItem_IconWithoutDashboardOrWebResource_Throws()
    {
        var doc = XDocument.Parse(SeedDoc);

        AssertOpError(doc,
            """[{"action":"update_item","area":"area1","group":"group1","item":"item1","label":"New","icon":"icon.svg"}]""",
            "supports 'icon' on Dashboard and WebResource items only");
    }

    [TestMethod]
    public void UpdateItem_NoTargetNoLabel_Throws()
    {
        var doc = XDocument.Parse(SeedDoc);

        AssertOpError(doc,
            """[{"action":"update_item","area":"area1","group":"group1","item":"item1"}]""",
            "requires a target or a 'label'");
    }

    [TestMethod]
    public void UpdateItem_BlankEntity_Throws()
    {
        var doc = XDocument.Parse(SeedDoc);

        AssertOpError(doc,
            """[{"action":"update_item","area":"area1","group":"group1","item":"item1","entity":"  "}]""",
            "requires 'entity'");
    }

    [TestMethod]
    public void UpdateItem_ZeroMatches_Throws()
    {
        var doc = XDocument.Parse(SeedDoc);

        AssertOpError(doc,
            """[{"action":"update_item","area":"area1","group":"group1","item":"nope","label":"New"}]""",
            "Expected one item matching 'nope' in Group 'group1' / Area 'area1'. Found 0.");
    }
}
