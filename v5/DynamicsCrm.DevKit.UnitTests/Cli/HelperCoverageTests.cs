using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class HelperCoverageTests
{
    [TestMethod]
    public void IsTheSame_Same()
    {
        Assert.IsTrue(Helper.IsTheSame("abc", "abc"));
    }

    [TestMethod]
    public void IsTheSame_DifferentCase()
    {
        Assert.IsTrue(Helper.IsTheSame("abc", "ABC"));
    }

    [TestMethod]
    public void IsTheSame_BothEmpty()
    {
        Assert.IsTrue(Helper.IsTheSame("", ""));
        Assert.IsTrue(Helper.IsTheSame(null, null));
    }

    [TestMethod]
    public void IsTheSame_OneEmpty()
    {
        Assert.IsFalse(Helper.IsTheSame("abc", ""));
        Assert.IsFalse(Helper.IsTheSame("", "abc"));
    }

    [TestMethod]
    public void IsTheSame_IgnoresWhitespace()
    {
        Assert.IsTrue(Helper.IsTheSame("a b c", "abc"));
        Assert.IsTrue(Helper.IsTheSame("  abc  ", "abc"));
        Assert.IsTrue(Helper.IsTheSame("a\tb\nc", "abc"));
    }

    [TestMethod]
    public void IsTheSame_TrailingWhitespace()
    {
        Assert.IsTrue(Helper.IsTheSame("abc ", "abc"));
        Assert.IsTrue(Helper.IsTheSame("  abc", "abc"));
    }

    [TestMethod]
    public void IsTheSame_Different()
    {
        Assert.IsFalse(Helper.IsTheSame("abc", "abd"));
    }

    [TestMethod]
    public void TrimGuid_RemovesBraces()
    {
        var g = Guid.NewGuid();
        Assert.AreEqual(g.ToString(), Helper.TrimGuid("{" + g + "}"));
    }

    [TestMethod]
    public void TrimGuid_PassesThrough()
    {
        var g = Guid.NewGuid();
        Assert.AreEqual(g.ToString(), Helper.TrimGuid(g.ToString()));
    }

    [TestMethod]
    public void TrimGuid_Empty()
    {
        Assert.AreEqual("", Helper.TrimGuid(""));
    }

    [TestMethod]
    public void IsWebResourceExtension_True()
    {
        Assert.IsTrue(Helper.IsWebResourceExtension(".js"));
        Assert.IsTrue(Helper.IsWebResourceExtension(".html"));
        Assert.IsTrue(Helper.IsWebResourceExtension(".css"));
        Assert.IsTrue(Helper.IsWebResourceExtension(".xml"));
        Assert.IsTrue(Helper.IsWebResourceExtension(".png"));
    }

    [TestMethod]
    public void IsWebResourceExtension_False()
    {
        Assert.IsFalse(Helper.IsWebResourceExtension(".cs"));
        Assert.IsFalse(Helper.IsWebResourceExtension(".exe"));
    }

    [TestMethod]
    public void GetNameSpace_SinglePart()
    {
        Assert.AreEqual("Foo", Helper.GetNameSpace("Foo"));
    }

    [TestMethod]
    public void GetNameSpace_TwoParts()
    {
        Assert.AreEqual("Foo", Helper.GetNameSpace("X.Foo"));
    }

    [TestMethod]
    public void GetNameSpace_ThreeParts()
    {
        Assert.AreEqual("Foo", Helper.GetNameSpace("X.Foo.Bar"));
    }

    [TestMethod]
    public void SafeIdentifier_NullEmpty()
    {
        Assert.AreEqual("", Helper.SafeIdentifier(null));
    }

    [TestMethod]
    public void SafeIdentifier_Normal()
    {
        Assert.AreEqual("Hello", Helper.SafeIdentifier("Hello"));
    }

    [TestMethod]
    public void SafeIdentifier_RemovesDiacritics()
    {
        Assert.AreEqual("e", Helper.SafeIdentifier("é"));
    }

    [TestMethod]
    public void SafeIdentifier_GuidPrefixed()
    {
        var g = Guid.NewGuid();
        var s = Helper.SafeIdentifier(g.ToString());
        Assert.IsTrue(s.StartsWith("_"));
    }

    [TestMethod]
    public void SafeIdentifier_ReplacesSpaces()
    {
        Assert.AreEqual("hello_world", Helper.SafeIdentifier("hello world"));
    }

    [TestMethod]
    public void SafeIdentifier_ReplacesDashes()
    {
        Assert.AreEqual("hello_world", Helper.SafeIdentifier("hello-world"));
    }

    [TestMethod]
    public void SafeIdentifier_ReplacesD()
    {
        Assert.AreEqual("Dang", Helper.SafeIdentifier("Đang"));
    }

    [TestMethod]
    public void SafeIdentifier_OnlyInvalidChars()
    {
        Assert.AreEqual("_", Helper.SafeIdentifier("---"));
    }

    [TestMethod]
    public void SafeIdentifier_JsKeyword_Prefixed()
    {
        var s = Helper.SafeIdentifier("import");
        Assert.AreEqual("_import", s);
    }

    [TestMethod]
    public void SafeIdentifier_StartsWithDigit_Prefixed()
    {
        var s = Helper.SafeIdentifier("1abc");
        Assert.IsTrue(s.StartsWith("_"));
    }

    [TestMethod]
    public void GetFormName_Information()
    {
        Assert.AreEqual("Account Information", Helper.GetFormName("Information", "Account"));
    }

    [TestMethod]
    public void GetFormName_Wizard()
    {
        Assert.AreEqual("Account Wizard", Helper.GetFormName("Wizard", "Account"));
    }

    [TestMethod]
    public void GetFormName_AiForSales()
    {
        Assert.AreEqual("Account AI for Sales", Helper.GetFormName("AI for Sales", "Account"));
    }

    [TestMethod]
    public void GetFormName_QuickCreate()
    {
        Assert.AreEqual("Account Quick Create", Helper.GetFormName("Quick Create", "Account"));
    }

    [TestMethod]
    public void GetFormName_Quickcreate()
    {
        Assert.AreEqual("Account QuickCreate", Helper.GetFormName("QuickCreate", "Account"));
    }

    [TestMethod]
    public void GetFormName_NewForm()
    {
        Assert.AreEqual("Account New_Form", Helper.GetFormName("New Form", "Account"));
    }

    [TestMethod]
    public void GetFormName_AdobeSign()
    {
        Assert.AreEqual("Account Adobe_Sign", Helper.GetFormName("Adobe Sign", "Account"));
    }

    [TestMethod]
    public void GetFormName_SalesInsights()
    {
        Assert.AreEqual("Account Sales_Insights", Helper.GetFormName("Sales Insights", "Account"));
    }

    [TestMethod]
    public void GetFormName_Agreement()
    {
        Assert.AreEqual("Account Agreement", Helper.GetFormName("Agreement", "Account"));
    }

    [TestMethod]
    public void GetFormName_ProjectInformation()
    {
        Assert.AreEqual("Account Project Information", Helper.GetFormName("Project Information", "Account"));
    }

    [TestMethod]
    public void GetFormName_MainForm()
    {
        Assert.AreEqual("Account Main Form", Helper.GetFormName("Main Form", "Account"));
    }

    [TestMethod]
    public void GetFormName_OmnichannelInformation()
    {
        Assert.AreEqual("Account Omnichannel Information", Helper.GetFormName("Omnichannel Information", "Account"));
    }

    [TestMethod]
    public void GetFormName_FieldServiceInformation()
    {
        Assert.AreEqual("Account Field Service Information", Helper.GetFormName("Field Service Information", "Account"));
    }

    [TestMethod]
    public void GetFormName_QuickCreateForm()
    {
        Assert.AreEqual("Account Quick Create Form", Helper.GetFormName("Quick Create Form", "Account"));
    }

    [TestMethod]
    public void GetFormName_ProjectQuickCreate()
    {
        Assert.AreEqual("Account Project Quick Create", Helper.GetFormName("Project Quick Create", "Account"));
    }

    [TestMethod]
    public void GetFormName_QuickCreateFromRequirement()
    {
        Assert.AreEqual("Account Quick Create from Requirement", Helper.GetFormName("Quick Create from Requirement", "Account"));
    }

    [TestMethod]
    public void GetFormName_Unknown()
    {
        Assert.AreEqual("CustomForm", Helper.GetFormName("CustomForm", "Account"));
    }

    [TestMethod]
    public void EncryptString_Empty()
    {
        Assert.AreEqual("", Helper.EncryptString(""));
        Assert.AreEqual("", Helper.EncryptString(null));
    }

    [TestMethod]
    public void EncryptDecrypt_RoundTrip()
    {
        var plain = "mysecret";
        var enc = Helper.EncryptString(plain);
        Assert.AreNotEqual(plain, enc);
        Assert.AreEqual(plain, Helper.DecryptString(enc));
    }

    [TestMethod]
    public void DecryptString_Empty()
    {
        Assert.AreEqual("", Helper.DecryptString(""));
        Assert.AreEqual("", Helper.DecryptString(null));
    }

    [TestMethod]
    public void DecryptString_InvalidInput_ReturnsInput()
    {
        var bad = "not-valid-base64";
        Assert.AreEqual(bad, Helper.DecryptString(bad));
    }
}
