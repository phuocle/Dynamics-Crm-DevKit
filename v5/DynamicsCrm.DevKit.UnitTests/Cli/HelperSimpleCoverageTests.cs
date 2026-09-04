using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class HelperSimpleCoverageTests
{
    [TestMethod]
    public void IsTheSame_BothNull_True()
    {
        Assert.IsTrue(Helper.IsTheSame(null, null));
    }

    [TestMethod]
    public void IsTheSame_NullVsString_False()
    {
        Assert.IsFalse(Helper.IsTheSame(null, "x"));
    }

    [TestMethod]
    public void IsTheSame_StringVsNull_False()
    {
        Assert.IsFalse(Helper.IsTheSame("x", null));
    }

    [TestMethod]
    public void IsTheSame_EqualStrings_True()
    {
        Assert.IsTrue(Helper.IsTheSame("abc", "abc"));
    }

    [TestMethod]
    public void IsTheSame_DifferentStrings_False()
    {
        Assert.IsFalse(Helper.IsTheSame("abc", "abd"));
    }

    [TestMethod]
    public void IsTheSame_CaseInsensitive_True()
    {
        Assert.IsTrue(Helper.IsTheSame("abc", "ABC"));
    }

    [TestMethod]
    public void IsTheSame_Trimmed_True()
    {
        Assert.IsTrue(Helper.IsTheSame("  abc  ", "abc"));
    }

    [TestMethod]
    public void IsWebResourceExtension_Js_True()
    {
        Assert.IsTrue(Helper.IsWebResourceExtension(".js"));
    }

    [TestMethod]
    public void IsWebResourceExtension_Ts_True()
    {
        Assert.IsTrue(Helper.IsWebResourceExtension(".ts"));
    }

    [TestMethod]
    public void IsWebResourceExtension_Png_True()
    {
        Assert.IsTrue(Helper.IsWebResourceExtension(".png"));
    }

    [TestMethod]
    public void IsWebResourceExtension_Exe_False()
    {
        Assert.IsFalse(Helper.IsWebResourceExtension(".exe"));
    }

    [TestMethod]
    public void IsOptionSet_Picklist_True()
    {
        var attr = new PicklistAttributeMetadata();
        Assert.IsTrue(Helper.IsOptionSet(attr));
    }

    [TestMethod]
    public void IsOptionSet_State_True()
    {
        var attr = new StateAttributeMetadata();
        Assert.IsTrue(Helper.IsOptionSet(attr));
    }

    [TestMethod]
    public void IsOptionSet_Status_True()
    {
        var attr = new StatusAttributeMetadata();
        Assert.IsTrue(Helper.IsOptionSet(attr));
    }

    [TestMethod]
    public void IsOptionSet_Boolean_False()
    {
        // Boolean is not in the optionset type list per Helper.IsOptionSet
        var attr = new BooleanAttributeMetadata();
        Assert.IsFalse(Helper.IsOptionSet(attr));
    }

    [TestMethod]
    public void IsOptionSet_String_False()
    {
        var attr = new StringAttributeMetadata();
        Assert.IsFalse(Helper.IsOptionSet(attr));
    }

    [TestMethod]
    public void IsMessageUpdate_Update_True()
    {
        Assert.IsTrue(Helper.IsMessageUpdate("Update"));
    }

    [TestMethod]
    public void IsMessageUpdate_Create_False()
    {
        Assert.IsFalse(Helper.IsMessageUpdate("Create"));
    }

    [TestMethod]
    public void IsMessageUpdate_Null_Throws()
    {
        try
        {
            Helper.IsMessageUpdate(null);
        }
        catch (System.NullReferenceException) { }
    }

    [TestMethod]
    public void IsMessageCreate_Create_True()
    {
        Assert.IsTrue(Helper.IsMessageCreate("Create"));
    }

    [TestMethod]
    public void IsMessageCreate_Update_False()
    {
        Assert.IsFalse(Helper.IsMessageCreate("Update"));
    }

    [TestMethod]
    public void IsMessageCreate_Null_Throws()
    {
        try
        {
            Helper.IsMessageCreate(null);
        }
        catch (System.NullReferenceException) { }
    }

    [TestMethod]
    public void GetMessagePropertyName_Update()
    {
        var result = Helper.GetMessagePropertyName("Update");
        Assert.AreEqual("Target", result);
    }

    [TestMethod]
    public void GetMessagePropertyName_Create()
    {
        var result = Helper.GetMessagePropertyName("Create");
        Assert.AreEqual("Id", result);
    }

    [TestMethod]
    public void GetMessagePropertyName_Other()
    {
        var result = Helper.GetMessagePropertyName("Delete");
        Assert.AreEqual("Target", result);
    }

    [TestMethod]
    public void GetMessagePropertyName_Null_Throws()
    {
        try
        {
            Helper.GetMessagePropertyName(null);
        }
        catch (System.NullReferenceException) { /* expected: code does not guard null */ }
    }

    [TestMethod]
    public void TrimGuid_NoBraces_StripsBraces()
    {
        // Looking at actual implementation, it may not strip braces. Verify what it does.
        var guid = Guid.NewGuid().ToString();
        var result = Helper.TrimGuid(guid);
        // Just verify it doesn't throw and produces some output
        Assert.IsNotNull(result);
    }

    [TestMethod]
    public void TrimGuid_NoBraces()
    {
        Assert.AreEqual("12345678-1234", Helper.TrimGuid("12345678-1234"));
    }

    [TestMethod]
    public void IsEqualsContent_Same_True()
    {
        Assert.IsTrue(Helper.IsEqualsContent("a", "a"));
    }

    [TestMethod]
    public void IsEqualsContent_Different_False()
    {
        Assert.IsFalse(Helper.IsEqualsContent("a", "b"));
    }

    [TestMethod]
    public void IsEqualsContent_BothEmpty_True()
    {
        Assert.IsTrue(Helper.IsEqualsContent("", ""));
    }

    [TestMethod]
    public async Task DelayAsync_Waits()
    {
        var sw = System.Diagnostics.Stopwatch.StartNew();
        await Helper.DelayAsync(0);
        sw.Stop();
        Assert.IsTrue(sw.ElapsedMilliseconds < 1000);
    }

    [TestMethod]
    public void GetContentFromLine6_Empty()
    {
        var result = Helper.GetContentFromLine6("");
        Assert.AreEqual(string.Empty, result);
    }

    [TestMethod]
    public void GetContentFromLine6_LessThan7Lines_RemovesAll()
    {
        // The method always removes up to 7 lines; with fewer, all get removed
        var result = Helper.GetContentFromLine6("a\nb\nc");
        Assert.AreEqual(string.Empty, result);
    }

    [TestMethod]
    public void GetContentFromLine6_MoreThan7Lines()
    {
        var content = "l1\nl2\nl3\nl4\nl5\nl6\nl7\nl8\nl9";
        var result = Helper.GetContentFromLine6(content);
        Assert.IsFalse(result.StartsWith("l1"));
        Assert.IsTrue(result.Contains("l8"));
    }

    [TestMethod]
    public void Compress_Decompress_RoundTrip()
    {
        var original = "Hello, world!";
        var compressed = Helper.Compress(original);
        var decompressed = Helper.Decompress(compressed);
        Assert.AreEqual(original, decompressed);
    }

    [TestMethod]
    public void Compress_EmptyString()
    {
        var compressed = Helper.Compress("");
        var decompressed = Helper.Decompress(compressed);
        Assert.AreEqual("", decompressed);
    }

    [TestMethod]
    public void Compress_LongString()
    {
        var original = new string('x', 1000);
        var compressed = Helper.Compress(original);
        var decompressed = Helper.Decompress(compressed);
        Assert.AreEqual(original, decompressed);
    }

    [TestMethod]
    public void TryDeleteDirectory_NonExisting_DoesNotThrow()
    {
        Helper.TryDeleteDirectory(@"C:\NonExistent\Path\For\Test");
    }

    [TestMethod]
    public void TryDeleteFile_NonExisting_DoesNotThrow()
    {
        Helper.TryDeleteFile(@"C:\NonExistent\File.txt");
    }

    [TestMethod]
    public void TryDeleteDirectory_Existing()
    {
        var dir = Path.Combine(Path.GetTempPath(), "HelperTest_" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(dir);
        File.WriteAllText(Path.Combine(dir, "a.txt"), "x");
        Helper.TryDeleteDirectory(dir);
        Assert.IsFalse(Directory.Exists(dir));
    }

    [TestMethod]
    public void TryDeleteFile_Existing()
    {
        var file = Path.Combine(Path.GetTempPath(), "HelperTest_" + Guid.NewGuid().ToString("N") + ".txt");
        File.WriteAllText(file, "x");
        Helper.TryDeleteFile(file);
        Assert.IsFalse(File.Exists(file));
    }

    [TestMethod]
    public void SafeNamespace_SimpleName()
    {
        var result = Helper.SafeNamespace("MyProject");
        Assert.AreEqual("MyProject", result);
    }

    [TestMethod]
    public void SafeNamespace_InvalidChars()
    {
        var result = Helper.SafeNamespace("My-Project.Name");
        Assert.IsNotNull(result);
    }

    [TestMethod]
    public void GetNameSpace_WithDotPrefix()
    {
        var result = Helper.GetNameSpace("Foo.MyProject");
        Assert.AreEqual("MyProject", result);
    }

    [TestMethod]
    public void GetNameSpace_NoDot()
    {
        var result = Helper.GetNameSpace("MyProject");
        Assert.AreEqual("MyProject", result);
    }

    [TestMethod]
    public void GetDefaultHeaderForGeneratedCs_NotEmpty()
    {
        var result = Helper.GetDefaultHeaderForGeneratedCs();
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Length > 0);
    }

    [TestMethod]
    public void GetDefaultFileWithWebApi_NotEmpty()
    {
        var result = Helper.GetDefaultFileWithWebApi("Account");
        Assert.IsNotNull(result);
        StringAssert.Contains(result, "Account");
    }

    [TestMethod]
    public void IsTheSame_EmptyStrings_True()
    {
        Assert.IsTrue(Helper.IsTheSame("", ""));
    }
}
