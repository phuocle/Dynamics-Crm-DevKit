using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class FileColumnTransferHelperCoverageTests
{
    [TestMethod]
    public void GetUniqueFilePath_DoesNotExist()
    {
        var tempDir = Path.Combine(Path.GetTempPath(), "dktest_" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(tempDir);
        try
        {
            var result = FileColumnTransferHelper.GetUniqueFilePath(tempDir, "test.txt");
            Assert.AreEqual(Path.Combine(tempDir, "test.txt"), result);
        }
        finally { Directory.Delete(tempDir, true); }
    }

    [TestMethod]
    public void GetUniqueFilePath_Exists_AddsCounter()
    {
        var tempDir = Path.Combine(Path.GetTempPath(), "dktest_" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(tempDir);
        try
        {
            File.WriteAllText(Path.Combine(tempDir, "test.txt"), "x");
            var result = FileColumnTransferHelper.GetUniqueFilePath(tempDir, "test.txt");
            Assert.AreEqual(Path.Combine(tempDir, "test (2).txt"), result);
        }
        finally { Directory.Delete(tempDir, true); }
    }

    [TestMethod]
    public void GetUniqueFilePath_MultipleExists()
    {
        var tempDir = Path.Combine(Path.GetTempPath(), "dktest_" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(tempDir);
        try
        {
            File.WriteAllText(Path.Combine(tempDir, "test.txt"), "x");
            File.WriteAllText(Path.Combine(tempDir, "test (2).txt"), "x");
            File.WriteAllText(Path.Combine(tempDir, "test (3).txt"), "x");
            var result = FileColumnTransferHelper.GetUniqueFilePath(tempDir, "test.txt");
            Assert.AreEqual(Path.Combine(tempDir, "test (4).txt"), result);
        }
        finally { Directory.Delete(tempDir, true); }
    }

    [TestMethod]
    public void GetMimeType_Common()
    {
        Assert.AreEqual("text/plain", FileColumnTransferHelper.GetMimeType("x.txt"));
        Assert.AreEqual("application/json", FileColumnTransferHelper.GetMimeType("x.json"));
        Assert.AreEqual("application/xml", FileColumnTransferHelper.GetMimeType("x.xml"));
        Assert.AreEqual("text/html", FileColumnTransferHelper.GetMimeType("x.html"));
        Assert.AreEqual("text/html", FileColumnTransferHelper.GetMimeType("x.htm"));
        Assert.AreEqual("application/pdf", FileColumnTransferHelper.GetMimeType("x.pdf"));
        Assert.AreEqual("application/zip", FileColumnTransferHelper.GetMimeType("x.zip"));
        Assert.AreEqual("image/png", FileColumnTransferHelper.GetMimeType("x.png"));
        Assert.AreEqual("image/jpeg", FileColumnTransferHelper.GetMimeType("x.jpg"));
        Assert.AreEqual("image/jpeg", FileColumnTransferHelper.GetMimeType("x.jpeg"));
        Assert.AreEqual("image/gif", FileColumnTransferHelper.GetMimeType("x.gif"));
        Assert.AreEqual("image/bmp", FileColumnTransferHelper.GetMimeType("x.bmp"));
        Assert.AreEqual("image/tiff", FileColumnTransferHelper.GetMimeType("x.tif"));
        Assert.AreEqual("image/tiff", FileColumnTransferHelper.GetMimeType("x.tiff"));
    }

    [TestMethod]
    public void GetMimeType_OfficeDocs()
    {
        Assert.AreEqual("application/msword", FileColumnTransferHelper.GetMimeType("a.doc"));
        Assert.AreEqual("application/vnd.openxmlformats-officedocument.wordprocessingml.document", FileColumnTransferHelper.GetMimeType("a.docx"));
        Assert.AreEqual("application/vnd.ms-excel", FileColumnTransferHelper.GetMimeType("a.xls"));
        Assert.AreEqual("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", FileColumnTransferHelper.GetMimeType("a.xlsx"));
        Assert.AreEqual("application/vnd.ms-powerpoint", FileColumnTransferHelper.GetMimeType("a.ppt"));
        Assert.AreEqual("application/vnd.openxmlformats-officedocument.presentationml.presentation", FileColumnTransferHelper.GetMimeType("a.pptx"));
    }

    [TestMethod]
    public void GetMimeType_Unknown_OctetStream()
    {
        Assert.AreEqual("application/octet-stream", FileColumnTransferHelper.GetMimeType("a.unknownext"));
    }

    [TestMethod]
    public void GetMimeType_NoExtension_OctetStream()
    {
        Assert.AreEqual("application/octet-stream", FileColumnTransferHelper.GetMimeType("a"));
    }

    [TestMethod]
    public void SanitizeFolderName_NullEmpty()
    {
        Assert.AreEqual("_", FileColumnTransferHelper.SanitizeFolderName(null));
        Assert.AreEqual("_", FileColumnTransferHelper.SanitizeFolderName(""));
        Assert.AreEqual("_", FileColumnTransferHelper.SanitizeFolderName("   "));
    }

    [TestMethod]
    public void SanitizeFolderName_Valid()
    {
        Assert.AreEqual("Hello", FileColumnTransferHelper.SanitizeFolderName("Hello"));
    }

    [TestMethod]
    public void SanitizeFolderName_ReplacesInvalid()
    {
        var result = FileColumnTransferHelper.SanitizeFolderName("a/b\\c:d");
        Assert.AreEqual("a_b_c_d", result);
    }

    [TestMethod]
    public void SanitizeFolderName_TrimsWhitespace()
    {
        Assert.AreEqual("Hello", FileColumnTransferHelper.SanitizeFolderName("  Hello  "));
    }

    [TestMethod]
    public void SanitizeFolderName_AllInvalid_Underscore()
    {
        // Each invalid char is replaced with '_' so "///" becomes "___" (non-empty),
        // not "_". The "_" fallback only fires for null/empty/whitespace/cleaned.
        Assert.AreEqual("___", FileColumnTransferHelper.SanitizeFolderName("///"));
    }
}
