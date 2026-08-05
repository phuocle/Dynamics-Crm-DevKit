using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Reflection;
using System.Text.Json;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for ExecuteWebApiTool private static methods:
/// ParseHttpMethod, ParseHeaders, GetBlockedReason, TryFormatJson.
/// Input validation is tested via the public execute_webapi method.
/// </summary>
[TestClass]
public class ExecuteWebApiToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ExecuteWebApiTool);

    private readonly DynamicsCrm.DevKit.Cli.Mcp.Tools.ExecuteWebApiTool _tool = new(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());

    // ──────────────────────────────────────────────
    // Input validation via public method
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ExecuteWebApi_EmptyMethod_ReturnsError()
    {
        var result = _tool.execute_webapi("", "accounts");
        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("method is required"));
    }

    [TestMethod]
    public void ExecuteWebApi_EmptyUrl_ReturnsError()
    {
        var result = _tool.execute_webapi("GET", "");
        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("url is required"));
    }

    [TestMethod]
    public void ExecuteWebApi_InvalidMethod_ReturnsError()
    {
        var result = _tool.execute_webapi("INVALID", "accounts");
        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("Invalid HTTP method"));
    }

    [TestMethod]
    public void ExecuteWebApi_AbsoluteUrl_ReturnsRelativeUrlError()
    {
        var result = _tool.execute_webapi("POST", "https://evil.example/api/data/v9.2/accounts", "{}");
        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("relative Dataverse Web API path"));
    }

    // ──────────────────────────────────────────────
    // ParseHttpMethod (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo ParseHttpMethodMethod = ToolType
        .GetMethod("ParseHttpMethod", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static HttpMethod? ParseHttpMethod(string method)
    {
        return (HttpMethod?)ParseHttpMethodMethod.Invoke(null, new object[] { method });
    }

    [TestMethod]
    public void ParseHttpMethod_GET_ReturnsGet()
    {
        Assert.AreEqual(HttpMethod.Get, ParseHttpMethod("GET"));
    }

    [TestMethod]
    public void ParseHttpMethod_POST_ReturnsPost()
    {
        Assert.AreEqual(HttpMethod.Post, ParseHttpMethod("POST"));
    }

    [TestMethod]
    public void ParseHttpMethod_PUT_ReturnsPut()
    {
        Assert.AreEqual(HttpMethod.Put, ParseHttpMethod("PUT"));
    }

    [TestMethod]
    public void ParseHttpMethod_PATCH_ReturnsPatch()
    {
        Assert.AreEqual(HttpMethod.Patch, ParseHttpMethod("PATCH"));
    }

    [TestMethod]
    public void ParseHttpMethod_DELETE_ReturnsDelete()
    {
        Assert.AreEqual(HttpMethod.Delete, ParseHttpMethod("DELETE"));
    }

    [TestMethod]
    public void ParseHttpMethod_Unknown_ReturnsNull()
    {
        Assert.IsNull(ParseHttpMethod("OPTIONS"));
    }

    // ──────────────────────────────────────────────
    // ParseHeaders (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo ParseHeadersMethod = ToolType
        .GetMethod("ParseHeaders", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static Dictionary<string, List<string>>? ParseHeaders(string headersJson, out string? error)
    {
        var args = new object[] { headersJson, null! };
        var result = (Dictionary<string, List<string>>?)ParseHeadersMethod.Invoke(null, args);
        error = (string?)args[1];
        return result;
    }

    [TestMethod]
    public void ParseHeaders_Empty_ReturnsNull()
    {
        Assert.IsNull(ParseHeaders("", out var error));
        Assert.IsNull(error);
    }

    [TestMethod]
    public void ParseHeaders_Null_ReturnsNull()
    {
        Assert.IsNull(ParseHeaders(null!, out var error));
        Assert.IsNull(error);
    }

    [TestMethod]
    public void ParseHeaders_ValidJson_ReturnsDictionary()
    {
        var result = ParseHeaders("{\"MSCRM.MergeLabels\": \"true\", \"If-Match\": \"*\"}", out var error);

        Assert.IsNull(error);
        Assert.IsNotNull(result);
        Assert.AreEqual(2, result.Count);
        Assert.AreEqual("true", result["MSCRM.MergeLabels"][0]);
        Assert.AreEqual("*", result["If-Match"][0]);
    }

    [TestMethod]
    public void ParseHeaders_InvalidJson_ReturnsNullWithError()
    {
        var result = ParseHeaders("not json", out var error);
        Assert.IsNull(result);
        Assert.IsNotNull(error);
        Assert.IsTrue(error.Contains("Invalid JSON"));
    }

    [TestMethod]
    public void ParseHeaders_EmptyObject_ReturnsNull()
    {
        Assert.IsNull(ParseHeaders("{}", out var error));
        Assert.IsNull(error);
    }

    // ──────────────────────────────────────────────
    // GetBlockedReason (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo GetBlockedReasonMethod = ToolType
        .GetMethod("GetBlockedReason", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string? GetBlockedReason(HttpMethod method, string url)
    {
        return (string?)GetBlockedReasonMethod.Invoke(null, new object[] { method, url });
    }

    // ── Existing: UI / Forms / Views / SiteMaps ──

    [TestMethod]
    public void GetBlockedReason_PATCH_SystemForms_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "systemforms(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("manage_form"));
    }

    [TestMethod]
    public void GetBlockedReason_PUT_SavedQueries_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Put, "savedqueries(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("manage_view"));
    }

    [TestMethod]
    public void GetBlockedReason_DELETE_UserQueries_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Delete, "userqueries(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("manage_view"));
    }

    [TestMethod]
    public void GetBlockedReason_PATCH_Sitemaps_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "sitemaps(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("manage_sitemap"));
    }

    [TestMethod]
    public void GetBlockedReason_PATCH_EnvVarDefinitions_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "environmentvariabledefinitions(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("manage_environment_variable"));
    }

    [TestMethod]
    public void GetBlockedReason_DELETE_EnvVarValues_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Delete, "environmentvariablevalues(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("manage_environment_variable"));
    }

    // ── NEW: Schema / Metadata ──

    [TestMethod]
    public void GetBlockedReason_PATCH_EntityDefinitions_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "EntityDefinitions(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("upsert_table"));
        Assert.IsTrue(result.Contains("IRREVERSIBLE"), "Should warn about irreversible flags");
    }

    [TestMethod]
    public void GetBlockedReason_PUT_EntityDefinitions_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Put, "EntityDefinitions(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
    }

    [TestMethod]
    public void GetBlockedReason_DELETE_EntityDefinitions_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Delete, "EntityDefinitions(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
    }

    [TestMethod]
    public void GetBlockedReason_PATCH_EntityDefinitions_Attributes_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "EntityDefinitions(guid)/Attributes(guid)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("upsert_column"), $"Expected 'upsert_column' but got: {result}");
    }

    [TestMethod]
    public void GetBlockedReason_DELETE_RelationshipDefinitions_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Delete, "RelationshipDefinitions(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("upsert_relationship"), $"Expected 'upsert_relationship' but got: {result}");
    }

    [TestMethod]
    public void GetBlockedReason_PATCH_ManagedPropertyDefinitions_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "ManagedPropertyDefinitions(guid)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
    }

    // ── NEW: Choice / OptionSet ──

    [TestMethod]
    public void GetBlockedReason_PATCH_GlobalOptionSetDefinitions_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "GlobalOptionSetDefinitions(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("manage_choice"), $"Expected 'manage_choice' but got: {result}");
    }

    [TestMethod]
    public void GetBlockedReason_DELETE_GlobalOptionSetDefinitions_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Delete, "GlobalOptionSetDefinitions(guid)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("manage_choice"));
    }

    [TestMethod]
    public void GetBlockedReason_PATCH_OptionSetDefinitions_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "OptionSetDefinitions(guid)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
    }

    // ── NEW: Web Resources ──

    [TestMethod]
    public void GetBlockedReason_PATCH_WebResources_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "webresources(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("manage_webresource"), $"Expected 'manage_webresource' but got: {result}");
    }

    [TestMethod]
    public void GetBlockedReason_DELETE_WebResources_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Delete, "webresources(guid)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("manage_webresource"));
    }

    // ── NEW: Security ──

    [TestMethod]
    public void GetBlockedReason_PATCH_Roles_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "roles(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("manage_role"), $"Expected 'manage_role' but got: {result}");
    }

    [TestMethod]
    public void GetBlockedReason_DELETE_Roles_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Delete, "roles(guid)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("manage_role"));
    }

    // ── NEW: Solution Management ──

    [TestMethod]
    public void GetBlockedReason_DELETE_Solutions_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Delete, "solutions(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("Power Apps UI"), $"Expected UI redirect but got: {result}");
    }

    [TestMethod]
    public void GetBlockedReason_PATCH_SolutionComponents_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "solutioncomponents(guid)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
    }

    // ── NEW: Plugin / Server-side ──

    [TestMethod]
    public void GetBlockedReason_PATCH_PluginAssemblies_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "pluginassemblies(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
    }

    [TestMethod]
    public void GetBlockedReason_DELETE_SdkMessageProcessingSteps_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Delete, "sdkmessageprocessingsteps(guid)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
    }

    [TestMethod]
    public void GetBlockedReason_PATCH_PluginTypes_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "plugintypes(guid)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
    }

    // ── NEW: Workflows / Processes ──

    [TestMethod]
    public void GetBlockedReason_PATCH_Workflows_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "workflows(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
    }

    [TestMethod]
    public void GetBlockedReason_DELETE_Processes_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Delete, "processes(guid)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
    }

    // ── NEW: Apps ──

    [TestMethod]
    public void GetBlockedReason_DELETE_CanvasApps_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Delete, "canvasapps(guid)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
    }

    [TestMethod]
    public void GetBlockedReason_PATCH_AppModules_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "appmodules(guid)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
    }

    // ── NEW: Connections ──

    [TestMethod]
    public void GetBlockedReason_PATCH_ConnectionReferences_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "connectionreferences(guid)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
    }

    // ── NEW: POST metadata actions blocked ──

    [TestMethod]
    public void GetBlockedReason_POST_PublishXml_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Post, "PublishXml");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("publish"));
    }

    [TestMethod]
    public void GetBlockedReason_POST_PublishAllXml_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Post, "PublishAllXml");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("publish"));
    }

    [TestMethod]
    public void GetBlockedReason_POST_PublishXml_CaseInsensitive_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Post, "publishxml");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
    }

    [TestMethod]
    public void GetBlockedReason_POST_CreateOptionSet_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Post, "CreateOptionSet");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("manage_choice"));
    }

    [TestMethod]
    public void GetBlockedReason_POST_InsertOptionValue_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Post, "InsertOptionValue");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
    }

    [TestMethod]
    public void GetBlockedReason_POST_UpdateOptionValue_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Post, "UpdateOptionValue");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
    }

    [TestMethod]
    public void GetBlockedReason_POST_DeleteOptionValue_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Post, "DeleteOptionValue");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
    }

    [TestMethod]
    public void GetBlockedReason_POST_WebResources_Create_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Post, "webresources");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("manage_webresource"));
    }

    [TestMethod]
    public void GetBlockedReason_POST_Roles_Create_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Post, "roles");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("manage_role"));
    }

    // ── Data record CRUD: must remain ALLOWED ──

    [TestMethod]
    public void GetBlockedReason_PATCH_Accounts_Allowed()
    {
        Assert.IsNull(GetBlockedReason(HttpMethod.Patch, "accounts(00000000-0000-0000-0000-000000000001)"));
    }

    [TestMethod]
    public void GetBlockedReason_DELETE_Accounts_Allowed()
    {
        Assert.IsNull(GetBlockedReason(HttpMethod.Delete, "accounts(00000000-0000-0000-0000-000000000001)"));
    }

    [TestMethod]
    public void GetBlockedReason_PATCH_Contacts_Allowed()
    {
        Assert.IsNull(GetBlockedReason(HttpMethod.Patch, "contacts(00000000-0000-0000-0000-000000000001)"));
    }

    [TestMethod]
    public void GetBlockedReason_POST_Accounts_Create_Allowed()
    {
        Assert.IsNull(GetBlockedReason(HttpMethod.Post, "accounts"));
    }

    [TestMethod]
    public void GetBlockedReason_PATCH_CustomEntity_Allowed()
    {
        Assert.IsNull(GetBlockedReason(HttpMethod.Patch, "new_customentity(00000000-0000-0000-0000-000000000001)"));
    }

    [TestMethod]
    public void GetBlockedReason_DELETE_CustomEntity_Allowed()
    {
        Assert.IsNull(GetBlockedReason(HttpMethod.Delete, "cr_mytable(00000000-0000-0000-0000-000000000001)"));
    }

    // ── GET metadata endpoints are redirected to dedicated tools ──

    [TestMethod]
    public void GetBlockedReason_GET_EntityDefinitions_Redirected()
    {
        var result = GetBlockedReason(HttpMethod.Get, "EntityDefinitions");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("REDIRECT"));
        Assert.IsTrue(result.Contains("get_tables"));
    }

    [TestMethod]
    public void GetBlockedReason_GET_AttributeDefinitions_Redirected()
    {
        var result = GetBlockedReason(HttpMethod.Get, "AttributeDefinitions");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("REDIRECT"));
        Assert.IsTrue(result.Contains("get_tables"));
    }

    [TestMethod]
    public void GetBlockedReason_GET_RelationshipDefinitions_Redirected()
    {
        var result = GetBlockedReason(HttpMethod.Get, "RelationshipDefinitions");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("REDIRECT"));
        Assert.IsTrue(result.Contains("get_tables") || result.Contains("upsert_relationship"));
    }

    [TestMethod]
    public void GetBlockedReason_GET_GlobalOptionSetDefinitions_Redirected()
    {
        var result = GetBlockedReason(HttpMethod.Get, "GlobalOptionSetDefinitions");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("REDIRECT"));
        Assert.IsTrue(result.Contains("manage_choice"));
    }

    [TestMethod]
    public void GetBlockedReason_GET_OptionSetDefinitions_Redirected()
    {
        var result = GetBlockedReason(HttpMethod.Get, "OptionSetDefinitions");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("REDIRECT"));
        Assert.IsTrue(result.Contains("manage_choice"));
    }

    // ── GET data endpoints remain allowed ──

    [TestMethod]
    public void GetBlockedReason_GET_Roles_Allowed()
    {
        Assert.IsNull(GetBlockedReason(HttpMethod.Get, "roles"));
    }

    [TestMethod]
    public void GetBlockedReason_GET_WebResources_Allowed()
    {
        Assert.IsNull(GetBlockedReason(HttpMethod.Get, "webresources"));
    }

    [TestMethod]
    public void GetBlockedReason_GET_SystemForms_Allowed()
    {
        Assert.IsNull(GetBlockedReason(HttpMethod.Get, "systemforms(guid)"));
    }

    [TestMethod]
    public void GetBlockedReason_GET_EnvVarDefinitions_Allowed()
    {
        Assert.IsNull(GetBlockedReason(HttpMethod.Get, "environmentvariabledefinitions(guid)"));
    }

    [TestMethod]
    public void GetBlockedReason_GET_Solutions_Allowed()
    {
        Assert.IsNull(GetBlockedReason(HttpMethod.Get, "solutions"));
    }

    [TestMethod]
    public void GetBlockedReason_GET_PluginAssemblies_Allowed()
    {
        Assert.IsNull(GetBlockedReason(HttpMethod.Get, "pluginassemblies"));
    }

    // ── POST custom actions: must remain ALLOWED ──

    [TestMethod]
    public void GetBlockedReason_POST_CustomAction_Allowed()
    {
        Assert.IsNull(GetBlockedReason(HttpMethod.Post, "new_MyCustomAction"));
    }

    [TestMethod]
    public void GetBlockedReason_POST_WhoAmI_Allowed()
    {
        Assert.IsNull(GetBlockedReason(HttpMethod.Post, "WhoAmI"));
    }

    [TestMethod]
    public void GetBlockedReason_POST_Contacts_Create_Allowed()
    {
        Assert.IsNull(GetBlockedReason(HttpMethod.Post, "contacts"));
    }

    // ── Case insensitivity ──

    [TestMethod]
    public void GetBlockedReason_CaseInsensitive_EntityDefinitions_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "ENTITYDEFINITIONS(guid)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
    }

    [TestMethod]
    public void GetBlockedReason_CaseInsensitive_SystemForms_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "SystemForms(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
    }

    // ── Redirect tool correctness (adversarial) ──

    [TestMethod]
    public void GetBlockedReason_PATCH_SavedQueries_RedirectsToManageView()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "savedqueries(guid)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("manage_view"), $"Expected 'manage_view' but got: {result}");
        Assert.IsFalse(result.Contains("upsert_view"), "Should not reference old tool name 'upsert_view'");
    }

    [TestMethod]
    public void GetBlockedReason_DELETE_UserQueries_RedirectsToManageView()
    {
        var result = GetBlockedReason(HttpMethod.Delete, "userqueries(guid)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("manage_view"), $"Expected 'manage_view' but got: {result}");
        Assert.IsFalse(result.Contains("upsert_view"), "Should not reference old tool name 'upsert_view'");
    }

    [TestMethod]
    public void GetBlockedReason_PATCH_EnvVarDefinitions_RedirectsToManageEnvironmentVariable()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "environmentvariabledefinitions(guid)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("manage_environment_variable"), $"Expected 'manage_environment_variable' but got: {result}");
        Assert.IsFalse(result.Contains("upsert_variable"), "Should not reference old tool name 'upsert_variable'");
    }

    [TestMethod]
    public void GetBlockedReason_DELETE_EnvVarValues_RedirectsToManageEnvironmentVariable()
    {
        var result = GetBlockedReason(HttpMethod.Delete, "environmentvariablevalues(guid)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("manage_environment_variable"), $"Expected 'manage_environment_variable' but got: {result}");
        Assert.IsFalse(result.Contains("upsert_variable"), "Should not reference old tool name 'upsert_variable'");
    }

    [TestMethod]
    public void GetBlockedReason_PATCH_SystemForms_RedirectsToManageForm()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "systemforms(guid)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("manage_form"), $"Expected 'manage_form' but got: {result}");
    }

    // ──────────────────────────────────────────────
    // TryFormatJson (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo TryFormatJsonMethod = ToolType
        .GetMethod("TryFormatJson", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string TryFormatJson(string json)
    {
        return (string)TryFormatJsonMethod.Invoke(null, new object[] { json })!;
    }

    [TestMethod]
    public void TryFormatJson_ValidJson_ReturnsIndented()
    {
        var result = TryFormatJson("{\"name\":\"test\"}");
        Assert.IsTrue(result.Contains("  \"name\": \"test\""));
    }

    [TestMethod]
    public void TryFormatJson_InvalidJson_ReturnsOriginal()
    {
        var result = TryFormatJson("not json at all");
        Assert.AreEqual("not json at all", result);
    }

    [TestMethod]
    public void TryFormatJson_EmptyObject_ReturnsFormatted()
    {
        var result = TryFormatJson("{}");
        Assert.AreEqual("{}", result);
    }

    // ──────────────────────────────────────────────
    // Helper
    // ──────────────────────────────────────────────

    private static string GetText(ModelContextProtocol.Protocol.CallToolResult result)
    {
        if (result.Content == null || result.Content.Count == 0) return "";
        return result.Content[0] is ModelContextProtocol.Protocol.TextContentBlock tb ? tb.Text ?? "" : "";
    }
}

