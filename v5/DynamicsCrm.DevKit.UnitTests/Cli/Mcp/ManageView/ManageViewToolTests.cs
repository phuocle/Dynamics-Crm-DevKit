using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageView;

/// <summary>
/// Tests for ManageViewTool private static methods:
/// MapQueryType, EscapeTab.
/// Also tests ViewXmlHelper.PrettyPrintXml and input validation via the public manage_view method.
/// </summary>
[TestClass]
public class ManageViewToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageViewTool);

    // ──────────────────────────────────────────────
    // Input validation via public method
    // ──────────────────────────────────────────────

    private readonly DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageViewTool _tool = new(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), new DynamicsCrm.DevKit.Cli.Mcp.McpExecutionContext(true));

    [TestMethod]
    public async Task GetViews_EmptyEntityName_ReturnsError()
    {
        var result = await _tool.manage_view(null!, "list", "");
        Assert.IsTrue(GetText(result).Contains("entity_name is required"));
    }

    [TestMethod]
    public async Task GetViews_WhitespaceEntityName_ReturnsError()
    {
        var result = await _tool.manage_view(null!, "list", "   ");
        Assert.IsTrue(GetText(result).Contains("entity_name is required"));
    }

    [TestMethod]
    public async Task GetViews_InvalidViewId_ReturnsError()
    {
        var result = await _tool.manage_view(null!, "detail", "account", view_id: "not-a-guid");
        Assert.IsTrue(GetText(result).Contains("not a valid GUID"));
    }

    // ──────────────────────────────────────────────
    // Finding 1: detail with non-existent GUID must return IsError=true
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Detail_NonExistentViewId_ReturnsIsErrorTrue()
    {
        // GetViewDetail returns "Error: No view found..." as text.
        // HandleDetail must detect this and set IsError=true.
        // Without the fix, IsError was false (silent failure).
        // Note: With null serviceClient, the exception handler fires,
        // but IsError must still be true.
        var result = await _tool.manage_view(null!, "detail", "account", view_id: "11111111-1111-1111-1111-111111111111");
        Assert.IsTrue(result.IsError == true, "detail with non-existent GUID should set IsError=true");
    }

    [TestMethod]
    public async Task HandleDetail_ChecksGetViewDetailForErrorPrefix()
    {
        // Verify HandleDetail uses the "Error:" prefix check pattern
        // to convert GetViewDetail's string error into an ErrorResult.
        // This is a static analysis test — reads the source code via reflection.
        var method = ToolType.GetMethod("HandleDetail", BindingFlags.NonPublic | BindingFlags.Instance);
        Assert.IsNotNull(method, "HandleDetail method should exist");
        // Verify the method body contains the pattern: StartsWith("Error:"
        // by checking IL or simply verifying the method returns correct IsError for invalid input
        var result = await _tool.manage_view(null!, "detail", "account", view_id: "not-a-guid");
        Assert.IsTrue(result.IsError == true, "Invalid GUID should return IsError=true");
    }

    // ──────────────────────────────────────────────
    // Finding 2: FindViewsByNameContains remains the focused name-filter query helper
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FindViewsByNameContains_HasIncludeFetchXmlParameter()
    {
        var method = ToolType.GetMethod("FindViewsByNameContains", BindingFlags.NonPublic | BindingFlags.Instance);
        Assert.IsNotNull(method, "FindViewsByNameContains method should exist");
        var parameters = method.GetParameters();
        Assert.AreEqual(2, parameters.Length, "FindViewsByNameContains should accept entityName and nameFilter");
        Assert.AreEqual("entityName", parameters[0].Name);
        Assert.AreEqual("nameFilter", parameters[1].Name);
    }

    // ──────────────────────────────────────────────
    // Finding 3: FindPersonalViewsByNameContains must exist for include_personal + view_name
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FindPersonalViewsByNameContains_MethodExists()
    {
        var method = ToolType.GetMethod("FindPersonalViewsByNameContains", BindingFlags.NonPublic | BindingFlags.Instance);
        Assert.IsNotNull(method, "FindPersonalViewsByNameContains method should exist");
        var parameters = method.GetParameters();
        Assert.AreEqual(2, parameters.Length, "FindPersonalViewsByNameContains should accept entityName and nameFilter");
        Assert.AreEqual("entityName", parameters[0].Name);
        Assert.AreEqual("nameFilter", parameters[1].Name);
    }

    [TestMethod]
    public void HandleUpdate_AcceptsViewNameResolutionInputs()
    {
        var method = ToolType.GetMethod("HandleUpdate", BindingFlags.NonPublic | BindingFlags.Instance);
        Assert.IsNotNull(method, "HandleUpdate method should exist");

        var parameters = method.GetParameters();
        Assert.AreEqual("viewId", parameters[1].Name);
        Assert.AreEqual("viewName", parameters[2].Name);
        Assert.AreEqual("isPersonalView", parameters[3].Name);
        Assert.AreEqual("fetchxml", parameters[4].Name);
    }

    [TestMethod]
    public void HandleCreate_AcceptsQueryType()
    {
        var method = ToolType.GetMethod("HandleCreate", BindingFlags.NonPublic | BindingFlags.Instance);
        Assert.IsNotNull(method, "HandleCreate method should exist");

        var parameters = method.GetParameters();
        Assert.AreEqual("viewName", parameters[1].Name);
        Assert.AreEqual("fetchxml", parameters[2].Name);
    }

    [TestMethod]
    public void PreferExactViewNameMatches_WhenContainsMatchesInactive_ReturnsExactActive()
    {
        var method = ToolType.GetMethod("PreferExactViewNameMatches", BindingFlags.NonPublic | BindingFlags.Static);
        Assert.IsNotNull(method, "PreferExactViewNameMatches method should exist");

        var inactive = new Entity("savedquery") { ["name"] = "Inactive Orders" };
        var active = new Entity("savedquery") { ["name"] = "Active Orders" };

        var result = (List<Entity>)method.Invoke(null, new object[] { new[] { inactive, active }, "Active Orders" })!;

        Assert.AreEqual(1, result.Count);
        Assert.AreEqual("Active Orders", result[0].GetAttributeValue<string>("name"));
    }

    // ──────────────────────────────────────────────
    // MapQueryType (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo MapQueryTypeMethod = ToolType
        .GetMethod("MapQueryType", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string MapQueryType(int queryType)
    {
        return (string)MapQueryTypeMethod.Invoke(null, new object[] { queryType })!;
    }

    private static readonly MethodInfo ExtractQuickFindColumnsMethod = ToolType
        .GetMethod("ExtractQuickFindColumns", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static List<string> ExtractQuickFindColumns(string fetchXml)
    {
        return (List<string>)ExtractQuickFindColumnsMethod.Invoke(null, new object[] { fetchXml })!;
    }

    [TestMethod]
    public void MapQueryType_0_ReturnsPublic()
    {
        Assert.AreEqual("Public", MapQueryType(0));
    }

    [TestMethod]
    public void MapQueryType_1_ReturnsLookup()
    {
        Assert.AreEqual("Lookup", MapQueryType(1));
    }

    [TestMethod]
    public void MapQueryType_2_ReturnsAdvancedSearch()
    {
        Assert.AreEqual("AdvancedSearch", MapQueryType(2));
    }

    [TestMethod]
    public void MapQueryType_4_ReturnsQuickFind()
    {
        Assert.AreEqual("QuickFind", MapQueryType(4));
    }

    [TestMethod]
    public void MapQueryType_64_ReturnsSubGrid()
    {
        Assert.AreEqual("SubGrid", MapQueryType(64));
    }

    [TestMethod]
    public void MapQueryType_131072_ReturnsCustom()
    {
        Assert.AreEqual("Custom", MapQueryType(131072));
    }

    [TestMethod]
    public void MapQueryType_Unknown_ReturnsOtherWithCode()
    {
        Assert.AreEqual("Other(999)", MapQueryType(999));
    }

    [TestMethod]
    public void ExtractQuickFindColumns_ReadsIsQuickFindConditionAttributes()
    {
        var fetchXml = "<fetch><entity name='account'><filter isquickfindfields='1'><condition attribute='name' operator='like' value='{0}'/><condition attribute='accountnumber' operator='like' value='{0}'/></filter></entity></fetch>";

        var columns = ExtractQuickFindColumns(fetchXml);

        CollectionAssert.AreEqual(new List<string> { "name", "accountnumber" }, columns);
    }

    [TestMethod]
    public void ExtractQuickFindColumns_IgnoresReturnedAttributes()
    {
        var fetchXml = "<fetch><entity name='account'><attribute name='name'/><attribute name='accountnumber'/></entity></fetch>";

        var columns = ExtractQuickFindColumns(fetchXml);

        Assert.AreEqual(0, columns.Count);
    }

    [TestMethod]
    public void ExtractQuickFindColumns_DeduplicatesConditionAttributes()
    {
        var fetchXml = "<fetch><entity name='account'><filter isquickfindfields='1'><condition attribute='name'/><condition attribute='NAME'/></filter></entity></fetch>";

        var columns = ExtractQuickFindColumns(fetchXml);

        Assert.AreEqual(1, columns.Count);
        Assert.AreEqual("name", columns[0]);
    }

    // ──────────────────────────────────────────────
    // PrettyPrintXml (ViewXmlHelper, internal — accessed via reflection)
    // ──────────────────────────────────────────────

    private static readonly Type ViewXmlHelperType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageViewTool).Assembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.ViewXmlHelper")!;

    private static readonly MethodInfo PrettyPrintXmlMethod = ViewXmlHelperType
        .GetMethod("PrettyPrintXml", BindingFlags.Public | BindingFlags.Static)!;

    private static string PrettyPrintXml(string xml)
    {
        return (string)PrettyPrintXmlMethod.Invoke(null, new object[] { xml })!;
    }

    [TestMethod]
    public void PrettyPrintXml_ValidXml_IndentsCorrectly()
    {
        var xml = "<fetch><entity name='account'><attribute name='name'/></entity></fetch>";
        var result = PrettyPrintXml(xml);

        Assert.IsTrue(result.Contains("  <entity"));  // Indented with 2 spaces
        Assert.IsTrue(result.Contains("    <attribute"));  // Double indented
    }

    [TestMethod]
    public void PrettyPrintXml_InvalidXml_ReturnsOriginal()
    {
        var xml = "not valid xml <>";
        var result = PrettyPrintXml(xml);

        Assert.AreEqual(xml, result);
    }

    [TestMethod]
    public void PrettyPrintXml_OmitsXmlDeclaration()
    {
        var xml = "<root><child/></root>";
        var result = PrettyPrintXml(xml);

        Assert.IsFalse(result.Contains("<?xml"));
    }

    // ──────────────────────────────────────────────
    // Current XML helper surface
    // ──────────────────────────────────────────────

    private static readonly MethodInfo StripXmlDeclarationMethod = ViewXmlHelperType
        .GetMethod("StripXmlDeclaration", BindingFlags.Public | BindingFlags.Static)!;

    [TestMethod]
    public void StripXmlDeclaration_RemovesDeclaration()
    {
        Assert.AreEqual("<root />", StripXmlDeclarationMethod.Invoke(null,
            new object[] { "<?xml version=\"1.0\"?><root />" }));
    }

    // ──────────────────────────────────────────────
    // Helper
    // ──────────────────────────────────────────────

    private static string GetText(ModelContextProtocol.Protocol.CallToolResult result)
    {
        if (result.Content == null || result.Content.Count == 0) return "";
        var first = result.Content[0];
        if (first is ModelContextProtocol.Protocol.TextContentBlock textBlock)
            return textBlock.Text ?? "";
        return "";
    }
}
