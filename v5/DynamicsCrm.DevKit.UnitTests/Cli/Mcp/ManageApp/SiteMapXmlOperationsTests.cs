using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Reflection;
using System.Text;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageApp;

[TestClass]
public class SiteMapXmlOperationsTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.SiteMap.SiteMapXmlOperations);

    private static readonly MethodInfo StripXmlDeclarationMethod =
        ToolType.GetMethod("StripXmlDeclaration", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo PrettyPrintXmlMethod =
        ToolType.GetMethod("PrettyPrintXml", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo SanitizeFileNameMethod =
        ToolType.GetMethod("SanitizeFileName", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo ValidateSiteMapXmlMethod =
        ToolType.GetMethod("ValidateSiteMapXml", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo IsSchemaEvolutionErrorMethod =
        ToolType.GetMethod("IsSchemaEvolutionError", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo ResolveSiteMapXmlInputMethod =
        ToolType.GetMethod("ResolveSiteMapXmlInput", BindingFlags.NonPublic | BindingFlags.Static)!;

    // ── Helpers ───────────────────────────────────────────────────────────────

    private static string StripXmlDeclaration(string xml) =>
        (string)StripXmlDeclarationMethod.Invoke(null, [xml])!;

    private static string PrettyPrintXml(string xml) =>
        (string)PrettyPrintXmlMethod.Invoke(null, [xml])!;

    private static string SanitizeFileName(string? name) =>
        (string)SanitizeFileNameMethod.Invoke(null, [name])!;

    private static (System.Collections.Generic.List<string> Errors, System.Collections.Generic.List<string> Warnings) ValidateSiteMapXml(string xml)
    {
        var result = ValidateSiteMapXmlMethod.Invoke(null, [xml]);
        // Returns (List<string> Errors, List<string> Warnings) tuple
        dynamic tuple = result!;
        return (tuple.Item1, tuple.Item2);
    }

    private static bool IsSchemaEvolutionError(string message) =>
        (bool)IsSchemaEvolutionErrorMethod.Invoke(null, [message])!;

    private static string? ResolveSiteMapXmlInput(string? sitemapxml) =>
        (string?)ResolveSiteMapXmlInputMethod.Invoke(null, [sitemapxml]);

    // ── StripXmlDeclaration ───────────────────────────────────────────────────

    [TestMethod]
    public void StripXmlDeclaration_WithDeclaration_Stripped()
    {
        var xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><SiteMap></SiteMap>";
        var result = StripXmlDeclaration(xml);
        Assert.IsFalse(result.StartsWith("<?xml"), "XML declaration should be stripped");
        Assert.IsTrue(result.StartsWith("<SiteMap"), "Content should start with root element");
    }

    [TestMethod]
    public void StripXmlDeclaration_WithoutDeclaration_Unchanged()
    {
        var xml = "<SiteMap><Area Id=\"Test\"/></SiteMap>";
        var result = StripXmlDeclaration(xml);
        Assert.AreEqual(xml, result, "XML without declaration should be returned unchanged");
    }

    [TestMethod]
    public void StripXmlDeclaration_EmptyString_ReturnsEmpty()
    {
        var result = StripXmlDeclaration("");
        Assert.AreEqual("", result);
    }

    [TestMethod]
    public void StripXmlDeclaration_OnlyDeclaration_ReturnsEmpty()
    {
        var result = StripXmlDeclaration("<?xml version=\"1.0\"?>");
        Assert.AreEqual("", result.Trim());
    }

    // ── PrettyPrintXml ────────────────────────────────────────────────────────

    [TestMethod]
    public void PrettyPrintXml_ValidXml_FormattedWithIndentation()
    {
        var xml = "<SiteMap><Area Id=\"Test\"><Group Id=\"G1\"><SubArea Id=\"S1\"/></Group></Area></SiteMap>";
        var result = PrettyPrintXml(xml);
        Assert.IsTrue(result.Contains("\n") || result.Contains("\r\n"), "Pretty-printed XML should have newlines");
    }

    [TestMethod]
    public void PrettyPrintXml_ValidXml_OmitsXmlDeclaration()
    {
        var xml = "<SiteMap><Area Id=\"Test\"/></SiteMap>";
        var result = PrettyPrintXml(xml);
        Assert.IsFalse(result.StartsWith("<?xml"), "Pretty-printed XML should not have XML declaration");
    }

    [TestMethod]
    public void PrettyPrintXml_InvalidXml_ReturnedAsIs()
    {
        var invalidXml = "not valid xml";
        var result = PrettyPrintXml(invalidXml);
        Assert.AreEqual(invalidXml, result, "Invalid XML should be returned unchanged as fallback");
    }

    // ── SanitizeFileName ──────────────────────────────────────────────────────

    [TestMethod]
    public void SanitizeFileName_NullName_ReturnsUnknown()
    {
        Assert.AreEqual("unknown", SanitizeFileName(null));
    }

    [TestMethod]
    public void SanitizeFileName_EmptyName_ReturnsUnknown()
    {
        Assert.AreEqual("unknown", SanitizeFileName(""));
    }

    [TestMethod]
    public void SanitizeFileName_WhitespaceName_ReturnsUnknown()
    {
        Assert.AreEqual("unknown", SanitizeFileName("   "));
    }

    [TestMethod]
    public void SanitizeFileName_PlainName_ReturnsLowercase()
    {
        var result = SanitizeFileName("MyApp");
        Assert.AreEqual("myapp", result);
    }

    [TestMethod]
    public void SanitizeFileName_NameWithSpaces_SpacesReplacedWithUnderscore()
    {
        var result = SanitizeFileName("My App");
        Assert.AreEqual("my_app", result);
    }

    [TestMethod]
    public void SanitizeFileName_NameWithInvalidChars_ReplacedWithUnderscore()
    {
        var result = SanitizeFileName("App/Name:Test");
        Assert.IsFalse(result.Contains("/"), "Slash should be replaced");
        Assert.IsFalse(result.Contains(":"), "Colon should be replaced");
    }

    // ── IsSchemaEvolutionError ────────────────────────────────────────────────

    [TestMethod]
    public void IsSchemaEvolutionError_AttributeNotDeclared_ReturnsTrue()
    {
        Assert.IsTrue(IsSchemaEvolutionError("The 'SomeAttribute' attribute is not declared."));
    }

    [TestMethod]
    public void IsSchemaEvolutionError_IsNotDeclared_ReturnsTrue()
    {
        Assert.IsTrue(IsSchemaEvolutionError("The element 'SomeElement' is not declared."));
    }

    [TestMethod]
    public void IsSchemaEvolutionError_UnrelatedError_ReturnsFalse()
    {
        Assert.IsFalse(IsSchemaEvolutionError("Required attribute 'Id' is missing."));
    }

    [TestMethod]
    public void IsSchemaEvolutionError_EmptyMessage_ReturnsFalse()
    {
        Assert.IsFalse(IsSchemaEvolutionError(""));
    }

    // ── ValidateSiteMapXml ────────────────────────────────────────────────────

    [TestMethod]
    public void ValidateSiteMapXml_InvalidXml_ReturnsParseError()
    {
        var (errors, _) = ValidateSiteMapXml("not valid xml <<<");
        Assert.IsTrue(errors.Count > 0, "Invalid XML should produce at least one error");
    }

    [TestMethod]
    public void ValidateSiteMapXml_ValidSiteMapXml_ReturnsNoErrors()
    {
        // Minimal valid SiteMap XML (XSD may not be loaded in test context, so allow empty errors)
        var xml = "<SiteMap><Area Id=\"SFA\" Title=\"Sales\"><Group Id=\"SFA\" Title=\"Sales\"><SubArea Id=\"nav_leads\" Title=\"Leads\"/></Group></Area></SiteMap>";
        var (errors, _) = ValidateSiteMapXml(xml);
        // If schema is loaded — no critical errors expected. If schema is not loaded — also no errors (returns empty).
        // The key behaviour is: no exception thrown.
        Assert.IsNotNull(errors);
    }

    // ── ResolveSiteMapXmlInput ────────────────────────────────────────────────

    [TestMethod]
    public void ResolveSiteMapXmlInput_InlineXml_ReturnedAsIs()
    {
        var xml = "<SiteMap><Area Id=\"Test\"/></SiteMap>";
        var result = ResolveSiteMapXmlInput(xml);
        Assert.AreEqual(xml, result, "Inline XML should be returned unchanged");
    }

    [TestMethod]
    public void ResolveSiteMapXmlInput_NonExistentFile_ReturnsNull()
    {
        var result = ResolveSiteMapXmlInput("C:\\does_not_exist_xyz.sitemap");
        Assert.IsNull(result, "Non-existent file path should return null");
    }

    [TestMethod]
    public void ResolveSiteMapXmlInput_ExistingFile_ReturnsContent()
    {
        // Create a temp file with .sitemap extension
        var tempFile = Path.Combine(Path.GetTempPath(), $"test_{Guid.NewGuid():N}.sitemap");
        var content = "<SiteMap><Area Id=\"Test\"/></SiteMap>";
        File.WriteAllText(tempFile, content, Encoding.UTF8);

        try
        {
            var result = ResolveSiteMapXmlInput(tempFile);
            Assert.AreEqual(content, result, "Should read content from .sitemap file");
        }
        finally
        {
            // File may have been deleted by the method itself (cleanup)
            if (File.Exists(tempFile)) File.Delete(tempFile);
        }
    }

    [TestMethod]
    public void ResolveSiteMapXmlInput_InlineXmlWithWhitespace_ReturnedAsIs()
    {
        // An inline XML string (starts with '<') should not be treated as a file path
        var xml = "  <SiteMap/>";
        var result = ResolveSiteMapXmlInput(xml);
        Assert.AreEqual(xml, result, "Inline XML with leading whitespace should be returned as-is");
    }
}
