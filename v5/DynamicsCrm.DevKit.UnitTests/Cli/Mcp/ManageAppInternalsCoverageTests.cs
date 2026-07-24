using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.App;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text.Json.Nodes;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class ManageAppInternalsCoverageTests
{
    private static readonly Type ToolType = typeof(ManageAppTool);

    [TestMethod]
    public void NavigationXmlHelpers_FormatAndParseTree()
    {
        var xml = (string)Invoke("BuildStarterSiteMapXml", 1033)!;
        StringAssert.Contains(xml, "Workspace");
        StringAssert.Contains(xml, "Accounts");

        var tree = (string)Invoke("FormatNavigationTree", xml)!;
        StringAssert.Contains(tree, "Area: Workspace");
        StringAssert.Contains(tree, "Group: Default");
        StringAssert.Contains(tree, "Entity: account");

        var areas = (List<ManageAppNavigationAreaResult>)Invoke("ParseNavigationAreas", xml)!;
        Assert.AreEqual(1, areas.Count);
        Assert.AreEqual("Workspace", areas[0].Title);
        Assert.AreEqual("Default", areas[0].Groups[0].Title);
        Assert.AreEqual("account", areas[0].Groups[0].Items[0].Entity);

        Assert.AreEqual("", Invoke("FormatNavigationTree", ""));
        Assert.AreEqual(0, ((List<ManageAppNavigationAreaResult>)Invoke("ParseNavigationAreas", "<bad>")!).Count);
        StringAssert.Contains((string)Invoke("FormatNavigationTree", "<bad>")!, "failed to parse");
    }

    [TestMethod]
    public void SiteMapValidation_HandlesValidInvalidAndSchemaEvolutionMessages()
    {
        var valid = InvokeTuple("ValidateSiteMapXml", "<SiteMap />");
        Assert.AreEqual(0, ((List<string>)valid.GetType().GetField("Item1")!.GetValue(valid)!).Count);

        var invalid = InvokeTuple("ValidateSiteMapXml", "<SiteMap>");
        Assert.IsTrue(((List<string>)invalid.GetType().GetField("Item1")!.GetValue(invalid)!).Exists(e => e.Contains("XML parsing error")));

        Assert.IsTrue((bool)Invoke("IsSchemaEvolutionError", "The 'newattr' attribute is not declared.")!);
        Assert.IsTrue((bool)Invoke("IsSchemaEvolutionError", "Element 'x' is not declared.")!);
        Assert.IsFalse((bool)Invoke("IsSchemaEvolutionError", "Some other validation failure.")!);
    }

    [TestMethod]
    public void FormattingHelpers_SanitizeEscapeAndExtractGuids()
    {
        Assert.AreEqual("MyApp_01", Invoke("SanitizeUniqueName", "My App!_01"));
        Assert.AreEqual("App", Invoke("SanitizeUniqueName", "!!!"));
        Assert.AreEqual("my_app_.json", Invoke("SanitizeFileName", "My App?.json"));
        Assert.AreEqual("a\\|b  c  d", Invoke("EscapeTable", "a|b\r c\n d"));
        Assert.AreEqual("", Invoke("EscapeTable", ""));

        var id = Guid.Parse("11111111-2222-3333-4444-555555555555");
        var entity = new Entity("appmodule") { ["webresourceid"] = new EntityReference("webresource", id), ["plainid"] = id };
        Assert.AreEqual(id, Invoke("GetGuidAttribute", entity, "webresourceid"));
        Assert.AreEqual(id, Invoke("GetGuidAttribute", entity, "plainid"));
        Assert.IsNull(Invoke("GetGuidAttribute", entity, "missing"));
        Assert.IsNull(Invoke("GetGuidAttribute", null!, "missing"));
    }

    [TestMethod]
    public void TextBuilders_ReturnOperationalSummaries()
    {
        var appId = Guid.Parse("11111111-2222-3333-4444-555555555555");
        var appUniqueId = Guid.Parse("22222222-3333-4444-5555-666666666666");
        var siteMapId = Guid.Parse("33333333-4444-5555-6666-777777777777");
        var validation = CreateValidation("validated", ["Broken"], ["Careful"]);

        var createText = (string)Invoke("BuildCreateUpdateText",
            "created", "Sales Hub", "devkit_saleshub", appId, appUniqueId, siteMapId,
            "devkit", "backup.json", validation, new List<string> { "xsd warning" })!;
        StringAssert.Contains(createText, "[ManageApp] created");
        StringAssert.Contains(createText, "ValidationError: Broken");
        StringAssert.Contains(createText, "SiteMap XSD: xsd warning");
        StringAssert.Contains(createText, "publish_customizations");

        var app = new Entity("appmodule", appId)
        {
            ["name"] = "Sales Hub",
            ["uniquename"] = "devkit_saleshub"
        };
        var navResult = new AppNavigationOperationsResult
        {
            ChangedOperations = 2,
            NoOpOperations = 1,
            OperationSummaries = ["added area", "added group"],
            AddedEntities = ["account", "contact"]
        };

        var navText = (string)Invoke("BuildNavigationText", "updated", app, appUniqueId, siteMapId,
            "backup.json", validation, navResult, new List<string>(), false, true)!;
        StringAssert.Contains(navText, "[ManageAppNavigation] updated");
        StringAssert.Contains(navText, "AddedAppComponents: account, contact");
        StringAssert.Contains(navText, "Published: no");

        var undoText = (string)Invoke("BuildUndoText", "restored", app, appUniqueId, siteMapId,
            "current.json", "previous.json", validation, new List<string> { "schema" })!;
        StringAssert.Contains(undoText, "[ManageAppUndo] restored");
        StringAssert.Contains(undoText, "RestoredFromBackup: previous.json");
    }

    [TestMethod]
    public void WarningAndComponentHelpers_CombineValues()
    {
        var merged = (List<string>)Invoke("MergeWarnings", new List<string> { "validation" }, new List<string> { "schema" })!;
        CollectionAssert.AreEqual(new List<string> { "validation", "SiteMap XSD: schema" }, merged);
        Assert.IsNull(Invoke("MergeWarnings", null!, null!));

        var refs = new EntityReferenceCollection
        {
            new("sitemap", Guid.NewGuid()),
            new("entity", Guid.NewGuid())
        };
        var withSiteMap = (List<string>)Invoke("DescribeEntityAppComponents", "account", refs, true)!;
        CollectionAssert.AreEqual(new List<string> { "sitemap", "account" }, withSiteMap);
        var withoutSiteMap = (List<string>)Invoke("DescribeEntityAppComponents", "account", refs, false)!;
        CollectionAssert.AreEqual(new List<string> { "account" }, withoutSiteMap);
    }

    [TestMethod]
    public void NavigationJsonHelpers_ReadLabelsAndFormatResolutionErrors()
    {
        var labeled = new JsonObject { ["label"] = "Accounts", ["count"] = 5, ["enabled"] = true };
        Assert.IsTrue((bool)Invoke("HasNavigationLabel", labeled)!);
        Assert.AreEqual("Accounts", Invoke("GetJsonString", labeled, "label"));
        Assert.IsNull(Invoke("GetJsonString", labeled, "count"));
        Assert.IsNull(Invoke("GetJsonString", labeled, "enabled"));
        Assert.IsNull(Invoke("GetJsonString", labeled, "missing"));

        var unlabeled = new JsonObject { ["entity"] = "account" };
        Assert.IsFalse((bool)Invoke("HasNavigationLabel", unlabeled)!);

        var element = (System.Text.Json.JsonElement)Invoke("ToJsonElement", labeled)!;
        Assert.AreEqual("Accounts", element.GetProperty("label").GetString());

        var formatted = (string)Invoke("FormatNavigationNameResolutionErrors", new List<string> { "ambiguous account", "missing contact" })!;
        StringAssert.Contains(formatted, "BLOCKED");
        StringAssert.Contains(formatted, "Errors: 2");
        StringAssert.Contains(formatted, "ambiguous account");
        StringAssert.Contains(formatted, "logical/schema");
    }

    [TestMethod]
    public void AppValidationResult_FromResponse_StatusAndIssues()
    {
        var nested = ToolType.GetNestedType("AppValidationResult", BindingFlags.NonPublic)!;
        var skipped = nested.GetMethod("Skipped", BindingFlags.Public | BindingFlags.Static)!.Invoke(null, [])!;
        Assert.AreEqual("skipped", nested.GetProperty("Status")!.GetValue(skipped));
        Assert.IsFalse((bool)nested.GetProperty("Validated")!.GetValue(skipped)!);
        Assert.AreEqual("success", nested.GetMethod("StatusForMutation")!.Invoke(skipped, ["success"]));

        var cleanResponse = new OrganizationResponse();
        var clean = nested.GetMethod("FromResponse", BindingFlags.Public | BindingFlags.Static)!.Invoke(null, [cleanResponse])!;
        Assert.AreEqual("validated", nested.GetProperty("Status")!.GetValue(clean));
        Assert.IsTrue((bool)nested.GetProperty("Validated")!.GetValue(clean)!);

        var response = new OrganizationResponse();
        response.Results["AppValidationResponse"] = new ValidationResponseStub
        {
            ValidationIssueList =
            [
                new ValidationIssueStub { Message = "Broken app", ErrorType = "Error" },
                new ValidationIssueStub { Message = "Careful app", ErrorType = "Warning" }
            ]
        };

        var validation = nested.GetMethod("FromResponse", BindingFlags.Public | BindingFlags.Static)!.Invoke(null, [response])!;
        Assert.AreEqual("validation_failed", nested.GetProperty("Status")!.GetValue(validation));
        Assert.AreEqual("success_validation_failed", nested.GetMethod("StatusForMutation")!.Invoke(validation, ["success"]));
        CollectionAssert.AreEqual(new List<string> { "Broken app" },
            (List<string>)nested.GetProperty("Errors")!.GetValue(validation)!);
        CollectionAssert.AreEqual(new List<string> { "Careful app" },
            (List<string>)nested.GetProperty("Warnings")!.GetValue(validation)!);
    }

    [TestMethod]
    public void FormatException_IncludesInnerException()
    {
        var formatted = (string)Invoke("FormatException",
            new InvalidOperationException("outer", new ApplicationException("inner")))!;
        StringAssert.Contains(formatted, "outer");
        StringAssert.Contains(formatted, "InnerException: inner");

        var simple = (string)Invoke("FormatException", new InvalidOperationException("simple"))!;
        Assert.AreEqual("simple", simple);
    }

    [TestMethod]
    public void ErrorAndStructuredResults_ReturnCallToolResults()
    {
        var error = DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.McpToolResults.Error("bad");
        Assert.IsTrue(error.IsError);
        StringAssert.Contains(((ModelContextProtocol.Protocol.TextContentBlock)error.Content[0]).Text, "bad");

        var result = DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.McpToolResults.Success("ok", new ManageAppResult
        {
            Action = "detail",
            Status = "success",
            AppName = "Sales Hub"
        });
        StringAssert.Contains(((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text, "ok");
        Assert.IsNotNull(result.StructuredContent);
    }

    private static object CreateValidation(string status, List<string>? errors, List<string>? warnings)
    {
        var nested = ToolType.GetNestedType("AppValidationResult", BindingFlags.NonPublic)!;
        var instance = Activator.CreateInstance(nested)!;
        nested.GetProperty("Status")!.SetValue(instance, status);
        nested.GetProperty("Errors")!.SetValue(instance, errors);
        nested.GetProperty("Warnings")!.SetValue(instance, warnings);
        return instance;
    }

    private static object? Invoke(string methodName, params object?[] args) =>
        ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args);

    private static dynamic InvokeTuple(string methodName, params object?[] args) =>
        Invoke(methodName, args)!;

    private sealed class ValidationResponseStub
    {
        public List<ValidationIssueStub> ValidationIssueList { get; set; } = [];
    }

    private sealed class ValidationIssueStub
    {
        public string Message { get; set; } = "";
        public string ErrorType { get; set; } = "";
    }
}
