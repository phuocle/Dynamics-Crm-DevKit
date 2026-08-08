using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for WhoAmITool private static helpers: BuildCompactText and GetLanguageName.
/// Both are private static methods, accessed via reflection.
/// </summary>
[TestClass]
public class WhoAmIToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.WhoAmITool);
    private static readonly Assembly CliAssembly = ToolType.Assembly;

    private static readonly Type WhoAmIResultType = CliAssembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Models.WhoAmIResult")!;

    private static readonly Type RoleInfoType = CliAssembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Models.RoleInfo")!;

    private static readonly MethodInfo GetLanguageNameMethod = ToolType
        .GetMethod("GetLanguageName", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo BuildCompactTextMethod = ToolType
        .GetMethod("BuildCompactText", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo GetBaseUrlMethod = ToolType
        .GetMethod("GetBaseUrl", BindingFlags.NonPublic | BindingFlags.Static)!;

    // ──────────────────────────────────────────────
    // GetLanguageName
    // ──────────────────────────────────────────────

    private static string GetLanguageName(int lcid)
    {
        return (string)GetLanguageNameMethod.Invoke(null, new object[] { lcid })!;
    }

    [TestMethod]
    public void GetLanguageName_English_ReturnsEnglish()
    {
        Assert.AreEqual("English", GetLanguageName(1033));
    }

    [TestMethod]
    public void GetLanguageName_French_ReturnsFrench()
    {
        Assert.AreEqual("French", GetLanguageName(1036));
    }

    [TestMethod]
    public void GetLanguageName_German_ReturnsGerman()
    {
        Assert.AreEqual("German", GetLanguageName(1031));
    }

    [TestMethod]
    public void GetLanguageName_Spanish_ReturnsSpanish()
    {
        Assert.AreEqual("Spanish", GetLanguageName(1034));
    }

    [TestMethod]
    public void GetLanguageName_Japanese_ReturnsJapanese()
    {
        Assert.AreEqual("Japanese", GetLanguageName(1041));
    }

    [TestMethod]
    public void GetLanguageName_Korean_ReturnsKorean()
    {
        Assert.AreEqual("Korean", GetLanguageName(1042));
    }

    [TestMethod]
    public void GetLanguageName_ChineseTraditional_ReturnsCorrect()
    {
        Assert.AreEqual("Chinese (Traditional)", GetLanguageName(1028));
    }

    [TestMethod]
    public void GetLanguageName_ChineseSimplified_ReturnsCorrect()
    {
        Assert.AreEqual("Chinese (Simplified)", GetLanguageName(2052));
    }

    [TestMethod]
    public void GetLanguageName_PortugueseBrazil_ReturnsCorrect()
    {
        Assert.AreEqual("Portuguese (Brazil)", GetLanguageName(1046));
    }

    [TestMethod]
    public void GetLanguageName_Russian_ReturnsRussian()
    {
        Assert.AreEqual("Russian", GetLanguageName(1049));
    }

    [TestMethod]
    public void GetLanguageName_Arabic_ReturnsArabic()
    {
        Assert.AreEqual("Arabic", GetLanguageName(1025));
    }

    [TestMethod]
    public void GetLanguageName_Vietnamese_ReturnsVietnamese()
    {
        Assert.AreEqual("Vietnamese", GetLanguageName(1066));
    }

    [TestMethod]
    public void GetLanguageName_Unknown_ReturnsLcidText()
    {
        Assert.AreEqual("LCID 9999", GetLanguageName(9999));
    }

    // ──────────────────────────────────────────────
    // BuildCompactText
    // ──────────────────────────────────────────────

    private static object CreateWhoAmIResult()
    {
        return Activator.CreateInstance(WhoAmIResultType)!;
    }

    private static void SetProperty(object instance, string name, object? value)
    {
        WhoAmIResultType.GetProperty(name)!.SetValue(instance, value);
    }

    private static string BuildCompactText(object result)
    {
        return (string)BuildCompactTextMethod.Invoke(null, new[] { result })!;
    }

    private static object CreateRoleInfo(string name, string roleId)
    {
        var role = Activator.CreateInstance(RoleInfoType)!;
        RoleInfoType.GetProperty("Name")!.SetValue(role, name);
        RoleInfoType.GetProperty("RoleId")!.SetValue(role, roleId);
        return role;
    }

    [TestMethod]
    public void BuildCompactText_FullResult_ShortSummary()
    {
        var r = CreateWhoAmIResult();
        SetProperty(r, "UserId", "user-id-123");
        SetProperty(r, "BusinessUnitId", "bu-id-456");
        SetProperty(r, "OrganizationId", "org-id-789");
        SetProperty(r, "FullName", "John Doe");
        SetProperty(r, "DomainName", "domain\\john");
        SetProperty(r, "Email", "john@contoso.com");
        SetProperty(r, "EnvironmentUrl", "https://org.crm.dynamics.com");
        SetProperty(r, "Version", "9.2.26032.168");
        SetProperty(r, "OrgFriendlyName", "SANDBOX");
        SetProperty(r, "OrgUniqueName", "sandbox123");
        SetProperty(r, "TenantId", "tenant-id");
        SetProperty(r, "EnvironmentId", "env-id");
        SetProperty(r, "Language", "1033 (English)");
        SetProperty(r, "Currency", "US Dollar");
        SetProperty(r, "AuditEnabled", (bool?)true);

        var roles = WhoAmIResultType.GetProperty("Roles")!.GetValue(r) as System.Collections.IList;
        roles!.Add(CreateRoleInfo("System Administrator", "role-id-1"));
        roles.Add(CreateRoleInfo("Custom Role", "role-id-2"));

        var text = BuildCompactText(r);

        Assert.IsTrue(text.StartsWith("[Success] Connected to "));
        Assert.IsTrue(text.Contains("SANDBOX"));
        Assert.IsTrue(text.Contains("https://org.crm.dynamics.com"));
        Assert.IsTrue(text.Contains("as John Doe"));
        Assert.IsTrue(text.Contains("Dataverse 9.2.26032.168"));
        Assert.IsTrue(text.Contains("2 security role(s)"));

        // Detailed fields must live in StructuredContent, not in the text summary.
        Assert.IsFalse(text.Contains("UserId:"));
        Assert.IsFalse(text.Contains("TenantId:"));
        Assert.IsFalse(text.Contains("EnvironmentId:"));
        Assert.IsFalse(text.Contains("[Roles]"));
    }

    [TestMethod]
    public void BuildCompactText_EmptyOptionals_FallsBackToUserId()
    {
        var r = CreateWhoAmIResult();
        SetProperty(r, "UserId", "user-id");
        SetProperty(r, "BusinessUnitId", "bu-id");
        SetProperty(r, "OrganizationId", "org-id");
        // FullName, DomainName, Email left empty/null
        SetProperty(r, "OrgFriendlyName", "Test");
        SetProperty(r, "OrgUniqueName", "test");
        SetProperty(r, "TenantId", "tenant");
        SetProperty(r, "EnvironmentId", "env");

        var text = BuildCompactText(r);

        Assert.IsTrue(text.StartsWith("[Success] Connected to "));
        Assert.IsTrue(text.Contains("as user-id"));
        Assert.IsFalse(text.Contains("security role"));
        Assert.IsFalse(text.Contains("warning"));
    }

    [TestMethod]
    public void BuildCompactText_NoRoles_OmitsRoleCount()
    {
        var r = CreateWhoAmIResult();
        SetProperty(r, "UserId", "user-id");
        SetProperty(r, "BusinessUnitId", "bu-id");
        SetProperty(r, "OrganizationId", "org-id");
        SetProperty(r, "OrgFriendlyName", "Test");
        SetProperty(r, "OrgUniqueName", "test");
        SetProperty(r, "TenantId", "tenant");
        SetProperty(r, "EnvironmentId", "env");
        // Roles list is empty by default

        var text = BuildCompactText(r);

        Assert.IsFalse(text.Contains("role"));
    }

    [TestMethod]
    public void BuildCompactText_AuditDisabled_NotInTextSummary()
    {
        var r = CreateWhoAmIResult();
        SetProperty(r, "UserId", "user-id");
        SetProperty(r, "BusinessUnitId", "bu-id");
        SetProperty(r, "OrganizationId", "org-id");
        SetProperty(r, "OrgFriendlyName", "Test");
        SetProperty(r, "OrgUniqueName", "test");
        SetProperty(r, "TenantId", "tenant");
        SetProperty(r, "EnvironmentId", "env");
        SetProperty(r, "AuditEnabled", (bool?)false);

        var text = BuildCompactText(r);

        Assert.IsFalse(text.Contains("AuditEnabled"));
    }

    // ──────────────────────────────────────────────
    // GetBaseUrl
    // ──────────────────────────────────────────────

    private static string GetBaseUrl(Uri uri)
    {
        return (string)GetBaseUrlMethod.Invoke(null, new object[] { uri })!;
    }

    [TestMethod]
    public void GetBaseUrl_NullUri_ReturnsNull()
    {
        var result = GetBaseUrlMethod.Invoke(null, new object[] { null! });
        Assert.IsNull(result);
    }

    [TestMethod]
    public void GetBaseUrl_StandardUrl_ReturnsSchemeAndHost()
    {
        var uri = new Uri("https://org.crm.dynamics.com/api/data/v9.2");
        Assert.AreEqual("https://org.crm.dynamics.com", GetBaseUrl(uri));
    }

    // ──────────────────────────────────────────────
    // BuildCompactText — Warnings
    // ──────────────────────────────────────────────

    [TestMethod]
    public void BuildCompactText_WithWarnings_ShowsWarningCount()
    {
        var r = CreateWhoAmIResult();
        SetProperty(r, "UserId", "user-id");
        SetProperty(r, "BusinessUnitId", "bu-id");
        SetProperty(r, "OrganizationId", "org-id");
        SetProperty(r, "OrgFriendlyName", "Test");
        SetProperty(r, "OrgUniqueName", "test");
        SetProperty(r, "TenantId", "tenant");
        SetProperty(r, "EnvironmentId", "env");

        var warnings = new System.Collections.Generic.List<string> { "Failed to retrieve roles: timeout" };
        SetProperty(r, "Warnings", warnings);

        var text = BuildCompactText(r);

        Assert.IsTrue(text.Contains("1 warning(s)"));
        // Warning details remain in StructuredContent only.
        Assert.IsFalse(text.Contains("Failed to retrieve roles"));
    }

    [TestMethod]
    public void BuildCompactText_NullWarnings_OmitsWarningCount()
    {
        var r = CreateWhoAmIResult();
        SetProperty(r, "UserId", "user-id");
        SetProperty(r, "BusinessUnitId", "bu-id");
        SetProperty(r, "OrganizationId", "org-id");
        SetProperty(r, "OrgFriendlyName", "Test");
        SetProperty(r, "OrgUniqueName", "test");
        SetProperty(r, "TenantId", "tenant");
        SetProperty(r, "EnvironmentId", "env");
        // Warnings is null by default

        var text = BuildCompactText(r);

        Assert.IsFalse(text.Contains("warning"));
    }
}
