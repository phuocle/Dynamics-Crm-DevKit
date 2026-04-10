using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text.Json;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for StructuredResults model classes — POCO types used as JSON payloads in MCP tool responses.
/// All classes are internal, so we construct and serialize/deserialize them via reflection.
/// </summary>
[TestClass]
public class StructuredResultsTests
{
    private static readonly Assembly CliAssembly = typeof(DynamicsCrm.DevKit.Cli.Mcp.McpServerHost).Assembly;

    private static readonly Type WhoAmIResultType = CliAssembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Models.WhoAmIResult")!;

    private static readonly Type CrudResultType = CliAssembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Models.CrudResult")!;

    private static readonly Type PublishResultType = CliAssembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Models.PublishResult")!;

    private static readonly Type WebApiResultType = CliAssembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Models.WebApiResult")!;

    // ──────────────────────────────────────────────
    // WhoAmIResult
    // ──────────────────────────────────────────────

    [TestMethod]
    public void WhoAmIResult_SerializesWithCorrectJsonPropertyNames()
    {
        var instance = Activator.CreateInstance(WhoAmIResultType)!;
        WhoAmIResultType.GetProperty("UserId")!.SetValue(instance, "user-id-123");
        WhoAmIResultType.GetProperty("FullName")!.SetValue(instance, "John Doe");
        WhoAmIResultType.GetProperty("DomainName")!.SetValue(instance, "domain\\john");
        WhoAmIResultType.GetProperty("Email")!.SetValue(instance, "john@contoso.com");
        WhoAmIResultType.GetProperty("EnvironmentUrl")!.SetValue(instance, "https://org.crm.dynamics.com");
        WhoAmIResultType.GetProperty("Version")!.SetValue(instance, "9.2.26032.168");

        var json = JsonSerializer.Serialize(instance, WhoAmIResultType);

        Assert.IsTrue(json.Contains("\"userId\":\"user-id-123\""));
        Assert.IsTrue(json.Contains("\"fullName\":\"John Doe\""));
        Assert.IsTrue(json.Contains("\"domainName\":\"domain\\\\john\""));
        Assert.IsTrue(json.Contains("\"email\":\"john@contoso.com\""));
        Assert.IsTrue(json.Contains("\"environmentUrl\":\"https://org.crm.dynamics.com\""));
        Assert.IsTrue(json.Contains("\"version\":\"9.2.26032.168\""));
    }

    [TestMethod]
    public void WhoAmIResult_RolesDefaultToEmptyList()
    {
        var instance = Activator.CreateInstance(WhoAmIResultType)!;
        var roles = WhoAmIResultType.GetProperty("Roles")!.GetValue(instance) as System.Collections.IList;

        Assert.IsNotNull(roles);
        Assert.AreEqual(0, roles.Count);
    }

    [TestMethod]
    public void WhoAmIResult_RoundTrip_DeserializesCorrectly()
    {
        var instance = Activator.CreateInstance(WhoAmIResultType)!;
        WhoAmIResultType.GetProperty("UserId")!.SetValue(instance, "abc-123");
        WhoAmIResultType.GetProperty("FullName")!.SetValue(instance, "Test User");
        WhoAmIResultType.GetProperty("AuditEnabled")!.SetValue(instance, true);

        var roles = WhoAmIResultType.GetProperty("Roles")!.GetValue(instance) as System.Collections.IList;
        var roleInfoType = CliAssembly.GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Models.RoleInfo")!;
        
        var role1 = Activator.CreateInstance(roleInfoType)!;
        roleInfoType.GetProperty("Name")!.SetValue(role1, "System Administrator");
        roles!.Add(role1);

        var role2 = Activator.CreateInstance(roleInfoType)!;
        roleInfoType.GetProperty("Name")!.SetValue(role2, "Custom Role");
        roles.Add(role2);

        var json = JsonSerializer.Serialize(instance, WhoAmIResultType);
        var deserialized = JsonSerializer.Deserialize(json, WhoAmIResultType)!;

        Assert.AreEqual("abc-123", WhoAmIResultType.GetProperty("UserId")!.GetValue(deserialized));
        Assert.AreEqual("Test User", WhoAmIResultType.GetProperty("FullName")!.GetValue(deserialized));
        Assert.AreEqual(true, WhoAmIResultType.GetProperty("AuditEnabled")!.GetValue(deserialized));

        var deserializedRoles = WhoAmIResultType.GetProperty("Roles")!.GetValue(deserialized) as System.Collections.IList;
        Assert.AreEqual(2, deserializedRoles!.Count);
    }

    // ──────────────────────────────────────────────
    // CrudResult
    // ──────────────────────────────────────────────

    [TestMethod]
    public void CrudResult_FieldsUpdated_OmittedWhenNull()
    {
        var instance = Activator.CreateInstance(CrudResultType)!;
        CrudResultType.GetProperty("Entity")!.SetValue(instance, "account");
        CrudResultType.GetProperty("Id")!.SetValue(instance, "id-123");
        CrudResultType.GetProperty("Status")!.SetValue(instance, "Created");
        // FieldsUpdated is null by default

        var json = JsonSerializer.Serialize(instance, CrudResultType);

        Assert.IsTrue(json.Contains("\"entity\":\"account\""));
        Assert.IsTrue(json.Contains("\"status\":\"Created\""));
        // fieldsUpdated should be omitted (JsonIgnoreCondition.WhenWritingNull)
        Assert.IsFalse(json.Contains("fieldsUpdated"), "fieldsUpdated should be omitted when null");
    }

    [TestMethod]
    public void CrudResult_FieldsUpdated_IncludedWhenSet()
    {
        var instance = Activator.CreateInstance(CrudResultType)!;
        CrudResultType.GetProperty("Entity")!.SetValue(instance, "account");
        CrudResultType.GetProperty("Id")!.SetValue(instance, "id-456");
        CrudResultType.GetProperty("Status")!.SetValue(instance, "Updated");
        CrudResultType.GetProperty("FieldsUpdated")!.SetValue(instance, (int?)5);

        var json = JsonSerializer.Serialize(instance, CrudResultType);

        Assert.IsTrue(json.Contains("\"fieldsUpdated\":5"));
    }

    // ──────────────────────────────────────────────
    // PublishResult
    // ──────────────────────────────────────────────

    [TestMethod]
    public void PublishResult_SpecificMode_IncludesEntities()
    {
        var instance = Activator.CreateInstance(PublishResultType)!;
        PublishResultType.GetProperty("Mode")!.SetValue(instance, "specific");
        PublishResultType.GetProperty("Status")!.SetValue(instance, "Completed");
        PublishResultType.GetProperty("DurationSeconds")!.SetValue(instance, 2.5);
        PublishResultType.GetProperty("EntityCount")!.SetValue(instance, (int?)2);
        PublishResultType.GetProperty("Entities")!.SetValue(instance, new List<string> { "account", "contact" });
        PublishResultType.GetProperty("IncludeGlobalOptionSets")!.SetValue(instance, true);

        var json = JsonSerializer.Serialize(instance, PublishResultType);

        Assert.IsTrue(json.Contains("\"mode\":\"specific\""));
        Assert.IsTrue(json.Contains("\"entities\":[\"account\",\"contact\"]"));
        Assert.IsTrue(json.Contains("\"entityCount\":2"));
        Assert.IsTrue(json.Contains("\"includeGlobalOptionSets\":true"));
        Assert.IsTrue(json.Contains("\"durationSeconds\":2.5"));
    }

    [TestMethod]
    public void PublishResult_AllMode_EntitiesOmittedWhenNull()
    {
        var instance = Activator.CreateInstance(PublishResultType)!;
        PublishResultType.GetProperty("Mode")!.SetValue(instance, "all");
        PublishResultType.GetProperty("Status")!.SetValue(instance, "Completed");
        PublishResultType.GetProperty("DurationSeconds")!.SetValue(instance, 30.0);
        // Entities and EntityCount are null

        var json = JsonSerializer.Serialize(instance, PublishResultType);

        Assert.IsTrue(json.Contains("\"mode\":\"all\""));
        Assert.IsFalse(json.Contains("\"entities\""), "entities should be omitted when null");
        Assert.IsFalse(json.Contains("\"entityCount\""), "entityCount should be omitted when null");
        // includeSiteMap/includeGlobalOptionSets default false → should be omitted (WhenWritingDefault)
        Assert.IsFalse(json.Contains("\"includeSiteMap\""), "includeSiteMap should be omitted when false");
        Assert.IsFalse(json.Contains("\"includeGlobalOptionSets\""), "includeGlobalOptionSets should be omitted when false");
    }

    // ──────────────────────────────────────────────
    // WebApiResult
    // ──────────────────────────────────────────────

    [TestMethod]
    public void WebApiResult_SerializesCorrectly()
    {
        var instance = Activator.CreateInstance(WebApiResultType)!;
        WebApiResultType.GetProperty("Method")!.SetValue(instance, "GET");
        WebApiResultType.GetProperty("Url")!.SetValue(instance, "accounts(id)");
        WebApiResultType.GetProperty("StatusCode")!.SetValue(instance, 200);
        WebApiResultType.GetProperty("StatusText")!.SetValue(instance, "OK");
        WebApiResultType.GetProperty("IsSuccess")!.SetValue(instance, true);

        var json = JsonSerializer.Serialize(instance, WebApiResultType);

        Assert.IsTrue(json.Contains("\"method\":\"GET\""));
        Assert.IsTrue(json.Contains("\"url\":\"accounts(id)\""));
        Assert.IsTrue(json.Contains("\"statusCode\":200"));
        Assert.IsTrue(json.Contains("\"statusText\":\"OK\""));
        Assert.IsTrue(json.Contains("\"isSuccess\":true"));
    }

    [TestMethod]
    public void WebApiResult_FailedRequest_SerializesCorrectly()
    {
        var instance = Activator.CreateInstance(WebApiResultType)!;
        WebApiResultType.GetProperty("Method")!.SetValue(instance, "POST");
        WebApiResultType.GetProperty("Url")!.SetValue(instance, "accounts");
        WebApiResultType.GetProperty("StatusCode")!.SetValue(instance, 500);
        WebApiResultType.GetProperty("StatusText")!.SetValue(instance, "Internal Server Error");
        WebApiResultType.GetProperty("IsSuccess")!.SetValue(instance, false);

        var json = JsonSerializer.Serialize(instance, WebApiResultType);

        Assert.IsTrue(json.Contains("\"statusCode\":500"));
        Assert.IsTrue(json.Contains("\"isSuccess\":false"));
    }
}
