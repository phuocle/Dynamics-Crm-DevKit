using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text.Json;
using System.Text.Json.Nodes;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageApp;

[TestClass]
public class ManageAppEntryCoverageTests
{
    private static readonly Type ToolType = typeof(ManageAppTool);

    [TestMethod]
    public void ManageApp_EntryValidation_CoversActionsBeforeDataverse()
    {
        var tool = new ManageAppTool(null!, new McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var invalid = tool.manage_app(null!, action: "unknown").GetAwaiter().GetResult();
        Assert.IsTrue(invalid.IsError);
        StringAssert.Contains(invalid.GetText(), "Invalid action");

        var detail = tool.manage_app(null!, action: "detail", app: "").GetAwaiter().GetResult();
        StringAssert.Contains(detail.GetText(), "app is required");
        var create = tool.manage_app(null!, action: "create", solution_name: "", display_name: "").GetAwaiter().GetResult();
        StringAssert.Contains(create.GetText(), "solution_name is required");
        var validate = tool.manage_app(null!, action: "validate", app: "").GetAwaiter().GetResult();
        StringAssert.Contains(validate.GetText(), "app is required");

        var updateNavigation = tool.manage_app(null!, action: "update_navigation", app: "", operations: "").GetAwaiter().GetResult();
        StringAssert.Contains(updateNavigation.GetText(), "app is required");
        var undo = tool.manage_app(null!, action: "undo", app: "", operations: "").GetAwaiter().GetResult();
        StringAssert.Contains(undo.GetText(), "app is required");
    }

    [TestMethod]
    public void ManageApp_OperationInputValidation_CoversNavigationAndUndoBranches()
    {
        var tool = new ManageAppTool(null!, new McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var missingNavigationOps = tool.manage_app(null!, action: "update_navigation", app: "missing", operations: "").GetAwaiter().GetResult();
        StringAssert.Contains(missingNavigationOps.GetText(), "operations is required");
        var rawNavigation = tool.manage_app(null!, action: "update_navigation", app: "missing", operations: "<SiteMap />").GetAwaiter().GetResult();
        StringAssert.Contains(rawNavigation.GetText(), "only accepts operation JSON arrays");
        var missingUndoOps = tool.manage_app(null!, action: "undo", app: "missing", operations: "").GetAwaiter().GetResult();
        StringAssert.Contains(missingUndoOps.GetText(), "operations is required");
        var xmlUndo = tool.manage_app(null!, action: "undo", app: "missing", operations: "<SiteMap />").GetAwaiter().GetResult();
        StringAssert.Contains(xmlUndo.GetText(), "Raw sitemap XML is not supported");
        var arrayUndo = tool.manage_app(null!, action: "undo", app: "missing", operations: "[]").GetAwaiter().GetResult();
        StringAssert.Contains(arrayUndo.GetText(), "not a navigation operations JSON array");
    }

    [TestMethod]
    public void NavigationNormalization_CoversNonObjectAndLabelBranches()
    {
        var normalize = ToolType.GetMethod("NormalizeNavigationEntityReferences", BindingFlags.NonPublic | BindingFlags.Instance)!;
        var tool = new ManageAppTool(null!, new McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var operations = new List<JsonElement>
        {
            JsonDocument.Parse("1").RootElement.Clone(),
            JsonDocument.Parse("{\"action\":\"other\",\"entity\":\"account\"}").RootElement.Clone()
        };
        var result = normalize.Invoke(tool, new object[] { operations })!;
        var errors = (List<string>)result.GetType().GetField("Item2")!.GetValue(result)!;
        Assert.AreEqual(0, errors.Count);

        var hasLabel = ToolType.GetMethod("HasNavigationLabel", BindingFlags.NonPublic | BindingFlags.Static)!;
        var getString = ToolType.GetMethod("GetJsonString", BindingFlags.NonPublic | BindingFlags.Static)!;
        Assert.IsTrue((bool)hasLabel.Invoke(null, new object[] { new JsonObject { ["title"] = "Title" } })!);
        Assert.IsTrue((bool)hasLabel.Invoke(null, new object[] { new JsonObject { ["name"] = "Name" } })!);
        Assert.IsFalse((bool)hasLabel.Invoke(null, new object[] { new JsonObject { ["count"] = 1 } })!);
        Assert.IsNull(getString.Invoke(null, new object[] { new JsonObject { ["count"] = 1 }, "count" }));
    }

    [TestMethod]
    public void AppValidationResult_CoversSuccessWarningOnlyAndNullResponses()
    {
        var nested = ToolType.GetNestedType("AppValidationResult", BindingFlags.NonPublic)!;
        var fromResponse = nested.GetMethod("FromResponse", BindingFlags.Public | BindingFlags.Static)!;
        var clean = fromResponse.Invoke(null, new object[] { null! })!;
        Assert.AreEqual("validated", nested.GetProperty("Status")!.GetValue(clean));

        var response = new OrganizationResponse();
        response.Results["AppValidationResponse"] = new IssueContainer
        {
            ValidationIssueList = new List<Issue>
            {
                new() { Message = "warning", ErrorType = "Warning" },
            }
        };
        var validation = fromResponse.Invoke(null, new object[] { response })!;
        Assert.AreEqual("validated", nested.GetProperty("Status")!.GetValue(validation));
        Assert.AreEqual(1, ((List<string>)nested.GetProperty("Warnings")!.GetValue(validation)!).Count);
        Assert.AreEqual(0, ((List<string>?)nested.GetProperty("Errors")!.GetValue(validation) ?? new List<string>()).Count);
    }

    [TestMethod]
    public void AppFormattingHelpers_CoverFallbackAndOptionalValues()
    {
        Assert.AreEqual("App", Invoke("SanitizeUniqueName", "!!!"));
        Assert.AreEqual("A_B", Invoke("SanitizeUniqueName", "A_B"));
        Assert.AreEqual("app", Invoke("SanitizeFileName", (object?)null));
        Assert.AreEqual("", Invoke("EscapeTable", (object?)null));
        Assert.AreEqual("Unknown error", Invoke("FormatException", (object?)null));

        var app = new Entity("appmodule") { ["name"] = "Sales" };
        var text = (string)Invoke("BuildNavigationText", "updated", app, Guid.NewGuid(), Guid.NewGuid(), "backup", null!, null!, new List<string>(), true, false)!;
        StringAssert.Contains(text, "Published: yes");
        Assert.IsFalse(text.Contains("AddedAppComponents"));
        var undo = (string)Invoke("BuildUndoText", "restored", app, Guid.NewGuid(), Guid.NewGuid(), "current", "previous", null!, null!)!;
        StringAssert.Contains(undo, "RestoredFromBackup: previous");
    }

    private static object? Invoke(string name, params object?[] args)
    {
        var methods = ToolType.GetMethods(BindingFlags.NonPublic | BindingFlags.Static)
            .Where(m => m.Name == name && m.GetParameters().Length == args.Length)
            .ToList();
        var method = methods.Count == 1
            ? methods[0]
            : methods.Single(m => m.GetParameters().Select(p => p.ParameterType).Zip(args, (t, a) => a == null || t.IsInstanceOfType(a)).All(x => x));
        return method.Invoke(null, args);
    }

    private sealed class IssueContainer
    {
        public List<Issue> ValidationIssueList { get; set; } = [];
    }

    private sealed class Issue
    {
        public string Message { get; set; } = "";
        public string ErrorType { get; set; } = "";
    }
}
