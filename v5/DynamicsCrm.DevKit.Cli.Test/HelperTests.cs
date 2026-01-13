using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Cli.Test;

[TestClass]
public class HelperTests
{
    [TestMethod]
    public void EncryptDecryptString_Works()
    {
        var original = "secret_password";
        var encrypted = Helper.EncryptString(original);
        var decrypted = Helper.DecryptString(encrypted);
        
        Assert.AreNotEqual(original, encrypted);
        Assert.AreEqual(original, decrypted);
    }

    [TestMethod]
    public void SafeIdentifier_ReplacesInvalidChars()
    {
        Assert.AreEqual("ValidName", Helper.SafeIdentifier("ValidName"));
        Assert.AreEqual("Invalid_Name", Helper.SafeIdentifier("Invalid Name"));
        Assert.AreEqual("Invalid_Name", Helper.SafeIdentifier("Invalid-Name"));
        Assert.AreEqual("_123Number", Helper.SafeIdentifier("123Number")); // Starts with digit
    }

    [TestMethod]
    public void SafeDeclareName_HandlesReservedNames()
    {
        // "EntityName" is a reserved name in SAFE_DECLARE_NAME list
        Assert.AreEqual("EntityName2", Helper.SafeDeclareName("EntityName", GeneratorType.csharp));
        
        // "normalName" is not reserved
        Assert.AreEqual("normalName", Helper.SafeDeclareName("normalName", GeneratorType.csharp));
    }

    [TestMethod]
    public void TrimGuid_FormatsCorrectly()
    {
        var guid = Guid.NewGuid();
        var expected = guid.ToString(); // Helper.TrimGuid does not change case
        Assert.AreEqual(expected, Helper.TrimGuid(guid.ToString()));
        Assert.AreEqual(expected, Helper.TrimGuid(guid.ToString("B"))); // With braces
    }

    [TestMethod]
    public void GetExtension_ReturnsValues()
    {
        Assert.AreEqual(".js", Helper.GetExtension(WebResourceWebResourceType.ScriptJScript));
        Assert.AreEqual(".html", Helper.GetExtension(WebResourceWebResourceType.WebpageHtml));
        Assert.AreEqual(".css", Helper.GetExtension(WebResourceWebResourceType.StyleSheetCss));
        Assert.AreEqual(".xml", Helper.GetExtension(WebResourceWebResourceType.DataXml));
    }
}
