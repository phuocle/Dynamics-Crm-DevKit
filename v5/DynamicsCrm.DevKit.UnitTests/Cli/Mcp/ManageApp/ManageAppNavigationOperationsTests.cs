using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Reflection;
using System.Text.Json;
using System.Xml.Linq;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageApp;

[TestClass]
public class ManageAppNavigationOperationsTests
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

    [TestMethod]
    public void ApplyOperations_DuplicateArea_IsNoOp()
    {
        var doc = XDocument.Parse("<SiteMap><Area Id='area_Quotes'><Titles><Title LCID='1033' Title='Quotes' /></Titles></Area></SiteMap>");

        var result = ApplyOperations(doc, """[{"action":"add_area","title":"Quotes"}]""");

        Assert.AreEqual(0, (int)result.GetType().GetProperty("ChangedOperations")!.GetValue(result)!);
        Assert.AreEqual(1, (int)result.GetType().GetProperty("NoOpOperations")!.GetValue(result)!);
        Assert.AreEqual(false, (bool)result.GetType().GetProperty("HasChanges")!.GetValue(result)!);
    }

    [TestMethod]
    public void ApplyOperations_AddArea_TracksChangedOperation()
    {
        var doc = XDocument.Parse("<SiteMap />");

        var result = ApplyOperations(doc, """[{"action":"add_area","title":"Quotes"}]""");

        Assert.AreEqual(1, (int)result.GetType().GetProperty("ChangedOperations")!.GetValue(result)!);
        Assert.AreEqual(0, (int)result.GetType().GetProperty("NoOpOperations")!.GetValue(result)!);
        Assert.AreEqual(true, (bool)result.GetType().GetProperty("HasChanges")!.GetValue(result)!);
    }

    [TestMethod]
    public void ApplyOperations_AddOrderMoveAndRemoveNavigationElements()
    {
        var doc = XDocument.Parse("<SiteMap />");

        var result = ApplyOperations(doc, """
[
  { "action": "add_area", "label": "Sales", "id": "area_sales", "show_groups": false, "icon": "$webresource:icon.svg" },
  { "action": "add_area", "label": "Service", "id": "area_service", "position": "first" },
  { "action": "order_area", "area": "Sales", "position": "after:area_service" },
  { "action": "add_group", "area": "Sales", "label": "Customers", "id": "group_customers" },
  { "action": "add_group", "area": "Sales", "label": "Activity", "id": "group_activity", "position": "first" },
  { "action": "order_group", "area": "Sales", "group": "Customers", "position": "after:Activity" },
  { "action": "add_item", "area": "Sales", "group": "Customers", "entity": "account", "label": "Accounts" },
  { "action": "add_item", "area": "Sales", "group": "Activity", "entity": "contact", "id": "sa_contact", "position": "1" },
  { "action": "move_item", "item": "contact", "from_area": "Sales", "from_group": "Activity", "to_area": "Sales", "to_group": "Customers", "position": "before:account" },
  { "action": "remove_item", "area": "Sales", "group": "Customers", "item": "contact" },
  { "action": "remove_group", "area": "Sales", "group": "Activity" },
  { "action": "remove_area", "area": "Service" }
]
""");

        Assert.AreEqual(12, (int)result.GetType().GetProperty("ChangedOperations")!.GetValue(result)!);
        Assert.AreEqual(0, (int)result.GetType().GetProperty("NoOpOperations")!.GetValue(result)!);
        var summaries = (List<string>)result.GetType().GetProperty("OperationSummaries")!.GetValue(result)!;
        Assert.IsTrue(summaries.Exists(s => s.Contains("Added Area")));
        Assert.IsTrue(summaries.Exists(s => s.Contains("Moved item")));
        Assert.IsTrue(summaries.Exists(s => s.Contains("Removed Group")));
        var added = (List<string>)result.GetType().GetProperty("AddedEntities")!.GetValue(result)!;
        CollectionAssert.AreEqual(new List<string> { "account", "contact" }, added);

        var xml = doc.ToString();
        StringAssert.Contains(xml, "area_sales");
        StringAssert.Contains(xml, "group_customers");
        StringAssert.Contains(xml, "Entity=\"account\"");
        Assert.IsFalse(xml.Contains("area_service"));
        Assert.IsFalse(xml.Contains("group_activity"));
        Assert.IsFalse(xml.Contains("sa_contact"));
    }

    [TestMethod]
    public void ApplyOperations_DuplicateGroupAndItem_AreNoOps()
    {
        var doc = XDocument.Parse("""
<SiteMap>
  <Area Id="area_sales"><Titles><Title LCID="1033" Title="Sales" /></Titles>
    <Group Id="group_customers"><Titles><Title LCID="1033" Title="Customers" /></Titles>
      <SubArea Id="sa_account" Entity="account" />
    </Group>
  </Area>
</SiteMap>
""");

        var result = ApplyOperations(doc, """
[
  { "action": "add_group", "area": "Sales", "label": "Customers", "id": "group_customers" },
  { "action": "add_item", "area": "Sales", "group": "Customers", "entity": "account" }
]
""");

        Assert.AreEqual(0, (int)result.GetType().GetProperty("ChangedOperations")!.GetValue(result)!);
        Assert.AreEqual(2, (int)result.GetType().GetProperty("NoOpOperations")!.GetValue(result)!);
    }

    [TestMethod]
    public void ApplyOperations_InvalidOperations_ReportActionSpecificErrors()
    {
        AssertOperationFails("<SiteMap />", """[{ "label": "Missing Action" }]""", "Each operation must have an 'action'");
        AssertOperationFails("<SiteMap />", """[{ "action": "unknown" }]""", "Unknown action");
        AssertOperationFails("<SiteMap />", """[{ "action": "add_area" }]""", "add_area requires 'label'");
        AssertOperationFails("<SiteMap />", """[{ "action": "add_group", "area": "missing", "label": "Group" }]""", "Area 'missing' not found");
        AssertOperationFails("<SiteMap />", """[{ "action": "order_area", "area": "missing", "position": "first" }]""", "Area 'missing' not found");
    }

    [TestMethod]
    public void ApplyOperations_InvalidPositionsAndDuplicateSubAreaIds_ReportErrors()
    {
        var doc = """
<SiteMap>
  <Area Id="area_sales"><Titles><Title LCID="1033" Title="Sales" /></Titles>
    <Group Id="group_one"><Titles><Title LCID="1033" Title="One" /></Titles>
      <SubArea Id="sa_account" Entity="account" />
    </Group>
    <Group Id="group_two"><Titles><Title LCID="1033" Title="Two" /></Titles></Group>
  </Area>
</SiteMap>
""";

        AssertOperationFails(doc, """[{ "action": "add_group", "area": "Sales", "label": "Bad", "position": "middle" }]""", "Unsupported position");
        AssertOperationFails(doc, """[{ "action": "add_group", "area": "Sales", "label": "Bad", "position": "before:missing" }]""", "Reference 'missing' not found");
        AssertOperationFails(doc, """[{ "action": "add_item", "area": "Sales", "group": "Two", "entity": "contact", "id": "sa_account" }]""", "already exists elsewhere");
        AssertOperationFails(doc, """[{ "action": "remove_item", "area": "Sales", "group": "Two", "item": "missing" }]""", "Item 'missing' not found");
    }

    private static void AssertOperationFails(string siteMapXml, string operationsJson, string expected)
    {
        try
        {
            ApplyOperations(XDocument.Parse(siteMapXml), operationsJson);
            Assert.Fail("Expected navigation operation to fail.");
        }
        catch (TargetInvocationException ex)
        {
            StringAssert.Contains(ex.InnerException!.Message, expected);
        }
    }
}
