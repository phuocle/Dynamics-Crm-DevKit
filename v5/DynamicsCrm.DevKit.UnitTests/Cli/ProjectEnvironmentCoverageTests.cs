using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.IO;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class ProjectEnvironmentCoverageTests
{
    private string _tempDir = null!;

    [TestInitialize]
    public void Init()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "ProjectEnvTest_" + System.Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
    }

    [TestCleanup]
    public void Cleanup()
    {
        if (Directory.Exists(_tempDir)) Directory.Delete(_tempDir, true);
    }

    [TestMethod]
    public void FindFile_Null_Null()
    {
        Assert.IsNull(ProjectEnvironment.FindFile(null));
    }

    [TestMethod]
    public void FindFile_Empty_Null()
    {
        Assert.IsNull(ProjectEnvironment.FindFile(""));
    }

    [TestMethod]
    public void FindFile_Whitespace_Null()
    {
        Assert.IsNull(ProjectEnvironment.FindFile("   "));
    }

    [TestMethod]
    public void FindFile_NotFound_Null()
    {
        Assert.IsNull(ProjectEnvironment.FindFile(@"C:\Windows\System32"));
    }

    [TestMethod]
    public void FindFile_Exists_ReturnsPath()
    {
        var envPath = Path.Combine(_tempDir, ".env");
        File.WriteAllText(envPath, "DEVKIT_URL=test");
        var result = ProjectEnvironment.FindFile(_tempDir);
        Assert.AreEqual(envPath, result);
    }

    [TestMethod]
    public void FindFile_ExistsInParent()
    {
        var envPath = Path.Combine(_tempDir, ".env");
        File.WriteAllText(envPath, "x");
        var sub = Path.Combine(_tempDir, "sub");
        Directory.CreateDirectory(sub);
        var result = ProjectEnvironment.FindFile(sub);
        Assert.AreEqual(envPath, result);
    }

    [TestMethod]
    public void ResolveFileFromJsonOrDirectory_NullJson_UsesDirectory()
    {
        var envPath = Path.Combine(_tempDir, ".env");
        File.WriteAllText(envPath, "x");
        var result = ProjectEnvironment.ResolveFileFromJsonOrDirectory(null, _tempDir);
        Assert.AreEqual(envPath, result);
    }

    [TestMethod]
    public void ResolveFileFromJsonOrDirectory_WithJsonFile_UsesJsonDir()
    {
        var envPath = Path.Combine(_tempDir, ".env");
        File.WriteAllText(envPath, "x");
        var sub = Path.Combine(_tempDir, "sub");
        Directory.CreateDirectory(sub);
        var jsonPath = Path.Combine(sub, "x.json");
        File.WriteAllText(jsonPath, "{}");
        var result = ProjectEnvironment.ResolveFileFromJsonOrDirectory(jsonPath, _tempDir);
        Assert.AreEqual(envPath, result);
    }

    [TestMethod]
    public void ResolveFileFromJsonOrDirectory_NonExistingJson_UsesDirectory()
    {
        var envPath = Path.Combine(_tempDir, ".env");
        File.WriteAllText(envPath, "x");
        var result = ProjectEnvironment.ResolveFileFromJsonOrDirectory("nonexistent.json", _tempDir);
        Assert.AreEqual(envPath, result);
    }

    [TestMethod]
    public void Read_EmptyPath_EmptyDict()
    {
        var result = ProjectEnvironment.Read("");
        Assert.AreEqual(0, result.Count);
    }

    [TestMethod]
    public void Read_NonExistingFile_EmptyDict()
    {
        var result = ProjectEnvironment.Read(@"C:\NonExistent\.env");
        Assert.AreEqual(0, result.Count);
    }

    [TestMethod]
    public void Read_ParsesKeyValue()
    {
        var path = Path.Combine(_tempDir, ".env");
        File.WriteAllText(path, "DEVKIT_URL=https://x.com\nDEVKIT_AUTH_TYPE=ClientSecret");
        var result = ProjectEnvironment.Read(path);
        Assert.AreEqual(2, result.Count);
        Assert.AreEqual("https://x.com", result["DEVKIT_URL"]);
        Assert.AreEqual("ClientSecret", result["DEVKIT_AUTH_TYPE"]);
    }

    [TestMethod]
    public void Read_SkipsComments()
    {
        var path = Path.Combine(_tempDir, ".env");
        File.WriteAllText(path, "# Comment\nDEVKIT_URL=https://x.com");
        var result = ProjectEnvironment.Read(path);
        Assert.AreEqual(1, result.Count);
    }

    [TestMethod]
    public void Read_SkipsEmptyLines()
    {
        var path = Path.Combine(_tempDir, ".env");
        File.WriteAllText(path, "\n\nDEVKIT_URL=https://x.com\n\n");
        var result = ProjectEnvironment.Read(path);
        Assert.AreEqual(1, result.Count);
    }

    [TestMethod]
    public void Read_SkipsMalformedLines()
    {
        var path = Path.Combine(_tempDir, ".env");
        File.WriteAllText(path, "noequals\n=novalue\nDEVKIT_URL=https://x.com");
        var result = ProjectEnvironment.Read(path);
        Assert.AreEqual(1, result.Count);
    }

    [TestMethod]
    public void Read_UnquotesValues()
    {
        var path = Path.Combine(_tempDir, ".env");
        File.WriteAllText(path, "DEVKIT_URL=\"https://x.com\"");
        var result = ProjectEnvironment.Read(path);
        Assert.AreEqual("https://x.com", result["DEVKIT_URL"]);
    }

    [TestMethod]
    public void Read_CaseInsensitive()
    {
        var path = Path.Combine(_tempDir, ".env");
        File.WriteAllText(path, "DEVKIT_URL=https://x.com");
        var result = ProjectEnvironment.Read(path);
        Assert.AreEqual("https://x.com", result["devkit_url"]);
    }

    [TestMethod]
    public void GetValue_NullDict_Null()
    {
        Assert.IsNull(ProjectEnvironment.GetValue(null, "key"));
    }

    [TestMethod]
    public void GetValue_NullKey_Null()
    {
        Assert.IsNull(ProjectEnvironment.GetValue(new Dictionary<string, string>(), null));
    }

    [TestMethod]
    public void GetValue_KeyExists()
    {
        var dict = new Dictionary<string, string> { { "key1", "val1" } };
        Assert.AreEqual("val1", ProjectEnvironment.GetValue(dict, "key1"));
    }

    [TestMethod]
    public void GetValue_KeyMissing_Null()
    {
        var dict = new Dictionary<string, string>();
        Assert.IsNull(ProjectEnvironment.GetValue(dict, "missing"));
    }

    [TestMethod]
    public void EnsureFile_Null_Nothing()
    {
        ProjectEnvironment.EnsureFile(null);
    }

    [TestMethod]
    public void EnsureFile_Empty_Nothing()
    {
        ProjectEnvironment.EnsureFile("");
    }

    [TestMethod]
    public void EnsureFile_NewDirectory_CreatesFiles()
    {
        var subDir = Path.Combine(_tempDir, "newdir");
        Directory.CreateDirectory(subDir);
        ProjectEnvironment.EnsureFile(subDir);
        Assert.IsTrue(File.Exists(Path.Combine(subDir, ".env")));
        Assert.IsTrue(File.Exists(Path.Combine(subDir, ".env.example")));
    }

    [TestMethod]
    public void EnsureFile_Existing_DoesNotOverwrite()
    {
        var envPath = Path.Combine(_tempDir, ".env");
        File.WriteAllText(envPath, "DEVKIT_URL=existing");
        ProjectEnvironment.EnsureFile(_tempDir);
        var content = File.ReadAllText(envPath);
        StringAssert.Contains(content, "existing");
    }

    [TestMethod]
    public void WriteOrUpdate_NullPath_Nothing()
    {
        ProjectEnvironment.WriteOrUpdate(null, new Dictionary<string, string>());
    }

    [TestMethod]
    public void WriteOrUpdate_NullValues_Nothing()
    {
        ProjectEnvironment.WriteOrUpdate(Path.Combine(_tempDir, "x.env"), null);
    }

    [TestMethod]
    public void WriteOrUpdate_EmptyPath_Nothing()
    {
        ProjectEnvironment.WriteOrUpdate("", new Dictionary<string, string>());
    }

    [TestMethod]
    public void WriteOrUpdate_CreatesFile()
    {
        var path = Path.Combine(_tempDir, "test.env");
        var values = new Dictionary<string, string> { { "KEY1", "val1" } };
        ProjectEnvironment.WriteOrUpdate(path, values);
        Assert.IsTrue(File.Exists(path));
        var content = File.ReadAllText(path);
        StringAssert.Contains(content, "KEY1=val1");
    }

    [TestMethod]
    public void WriteOrUpdate_UpdatesExisting()
    {
        var path = Path.Combine(_tempDir, ".env");
        File.WriteAllText(path, "KEY1=old");
        var values = new Dictionary<string, string> { { "KEY1", "new" } };
        ProjectEnvironment.WriteOrUpdate(path, values);
        var content = File.ReadAllText(path);
        StringAssert.Contains(content, "KEY1=new");
        Assert.IsFalse(content.Contains("KEY1=old"));
    }

    [TestMethod]
    public void WriteOrUpdate_AppendsNewKey()
    {
        var path = Path.Combine(_tempDir, ".env");
        File.WriteAllText(path, "KEY1=val1");
        var values = new Dictionary<string, string> { { "KEY2", "val2" } };
        ProjectEnvironment.WriteOrUpdate(path, values);
        var content = File.ReadAllText(path);
        StringAssert.Contains(content, "KEY1=val1");
        StringAssert.Contains(content, "KEY2=val2");
    }
}
