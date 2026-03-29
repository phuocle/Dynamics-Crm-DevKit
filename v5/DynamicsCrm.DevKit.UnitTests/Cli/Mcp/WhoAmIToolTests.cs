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

    private static readonly MethodInfo GetLanguageNameMethod = ToolType
        .GetMethod("GetLanguageName", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo BuildCompactTextMethod = ToolType
        .GetMethod("BuildCompactText", BindingFlags.NonPublic | BindingFlags.Static)!;

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

    [TestMethod]
    public void BuildCompactText_FullResult_AllSectionsPresent()
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
        SetProperty(r, "OrgId", "org-id");
        SetProperty(r, "TenantId", "tenant-id");
        SetProperty(r, "EnvironmentId", "env-id");
        SetProperty(r, "Language", "1033 (English)");
        SetProperty(r, "Currency", "US Dollar");
        SetProperty(r, "AuditEnabled", (bool?)true);

        var roles = WhoAmIResultType.GetProperty("Roles")!.GetValue(r) as System.Collections.IList;
        roles!.Add("System Administrator");
        roles.Add("Custom Role");

        var text = BuildCompactText(r);

        Assert.IsTrue(text.Contains("[User]"));
        Assert.IsTrue(text.Contains("UserId: user-id-123"));
        Assert.IsTrue(text.Contains("FullName: John Doe"));
        Assert.IsTrue(text.Contains("Email: john@contoso.com"));

        Assert.IsTrue(text.Contains("[Environment]"));
        Assert.IsTrue(text.Contains("Url: https://org.crm.dynamics.com"));
        Assert.IsTrue(text.Contains("Version: 9.2.26032.168"));
        Assert.IsTrue(text.Contains("OrgName: SANDBOX (sandbox123)"));
        Assert.IsTrue(text.Contains("Language: 1033 (English)"));
        Assert.IsTrue(text.Contains("Currency: US Dollar"));
        Assert.IsTrue(text.Contains("AuditEnabled: Yes"));

        Assert.IsTrue(text.Contains("[Roles] 2 total"));
        Assert.IsTrue(text.Contains("- System Administrator"));
        Assert.IsTrue(text.Contains("- Custom Role"));
    }

    [TestMethod]
    public void BuildCompactText_EmptyOptionals_OmitsFields()
    {
        var r = CreateWhoAmIResult();
        SetProperty(r, "UserId", "user-id");
        SetProperty(r, "BusinessUnitId", "bu-id");
        SetProperty(r, "OrganizationId", "org-id");
        // FullName, DomainName, Email left empty/null
        SetProperty(r, "OrgFriendlyName", "Test");
        SetProperty(r, "OrgUniqueName", "test");
        SetProperty(r, "OrgId", "org");
        SetProperty(r, "TenantId", "tenant");
        SetProperty(r, "EnvironmentId", "env");

        var text = BuildCompactText(r);

        Assert.IsTrue(text.Contains("[User]"));
        Assert.IsFalse(text.Contains("FullName:"));
        Assert.IsFalse(text.Contains("DomainName:"));
        Assert.IsFalse(text.Contains("Email:"));
        Assert.IsFalse(text.Contains("[Roles]"), "Roles section should be omitted when empty");
    }

    [TestMethod]
    public void BuildCompactText_NoRoles_OmitsRolesSection()
    {
        var r = CreateWhoAmIResult();
        SetProperty(r, "UserId", "user-id");
        SetProperty(r, "BusinessUnitId", "bu-id");
        SetProperty(r, "OrganizationId", "org-id");
        SetProperty(r, "OrgFriendlyName", "Test");
        SetProperty(r, "OrgUniqueName", "test");
        SetProperty(r, "OrgId", "org");
        SetProperty(r, "TenantId", "tenant");
        SetProperty(r, "EnvironmentId", "env");
        // Roles list is empty by default

        var text = BuildCompactText(r);

        Assert.IsFalse(text.Contains("[Roles]"));
    }

    [TestMethod]
    public void BuildCompactText_WithAccessToken_ShowsToken()
    {
        var r = CreateWhoAmIResult();
        SetProperty(r, "UserId", "user-id");
        SetProperty(r, "BusinessUnitId", "bu-id");
        SetProperty(r, "OrganizationId", "org-id");
        SetProperty(r, "OrgFriendlyName", "Test");
        SetProperty(r, "OrgUniqueName", "test");
        SetProperty(r, "OrgId", "org");
        SetProperty(r, "TenantId", "tenant");
        SetProperty(r, "EnvironmentId", "env");
        SetProperty(r, "AccessToken", "eyJ0eXAiOiJKV1Q...");

        var text = BuildCompactText(r);

        Assert.IsTrue(text.Contains("AccessToken: eyJ0eXAiOiJKV1Q..."));
    }

    [TestMethod]
    public void BuildCompactText_AuditDisabled_ShowsNo()
    {
        var r = CreateWhoAmIResult();
        SetProperty(r, "UserId", "user-id");
        SetProperty(r, "BusinessUnitId", "bu-id");
        SetProperty(r, "OrganizationId", "org-id");
        SetProperty(r, "OrgFriendlyName", "Test");
        SetProperty(r, "OrgUniqueName", "test");
        SetProperty(r, "OrgId", "org");
        SetProperty(r, "TenantId", "tenant");
        SetProperty(r, "EnvironmentId", "env");
        SetProperty(r, "AuditEnabled", (bool?)false);

        var text = BuildCompactText(r);

        Assert.IsTrue(text.Contains("AuditEnabled: No"));
    }
}
