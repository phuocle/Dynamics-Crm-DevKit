using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Reflection;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

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
}
