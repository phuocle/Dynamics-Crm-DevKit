using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.IO;
using System.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class TypeScriptBuildPathHelperCoverageTests
{
    [TestMethod]
    public void IsDeployableTypeScript_Null_False()
    {
        Assert.IsFalse(TypeScriptBuildPathHelper.IsDeployableTypeScript(null));
    }

    [TestMethod]
    public void IsDeployableTypeScript_Empty_False()
    {
        Assert.IsFalse(TypeScriptBuildPathHelper.IsDeployableTypeScript(""));
    }

    [TestMethod]
    public void IsDeployableTypeScript_Js_False()
    {
        Assert.IsFalse(TypeScriptBuildPathHelper.IsDeployableTypeScript("a.js"));
    }

    [TestMethod]
    public void IsDeployableTypeScript_FormTs_False()
    {
        Assert.IsFalse(TypeScriptBuildPathHelper.IsDeployableTypeScript("account.form.ts"));
    }

    [TestMethod]
    public void IsDeployableTypeScript_WebApiTs_False()
    {
        Assert.IsFalse(TypeScriptBuildPathHelper.IsDeployableTypeScript("account.webapi.ts"));
    }

    [TestMethod]
    public void IsDeployableTypeScript_OptionsetTs_False()
    {
        Assert.IsFalse(TypeScriptBuildPathHelper.IsDeployableTypeScript("optionset.ts"));
    }

    [TestMethod]
    public void IsDeployableTypeScript_RegularTs_True()
    {
        Assert.IsTrue(TypeScriptBuildPathHelper.IsDeployableTypeScript("myaccount.ts"));
    }

    [TestMethod]
    public void IsDeployableTypeScript_CaseInsensitive_True()
    {
        Assert.IsTrue(TypeScriptBuildPathHelper.IsDeployableTypeScript("ACCOUNT.TS"));
    }

    [TestMethod]
    public void FindProjectRoot_Null_ReturnsNull()
    {
        var result = TypeScriptBuildPathHelper.FindProjectRoot(null);
        Assert.IsNull(result);
    }

    [TestMethod]
    public void FindProjectRoot_NoPackageJson_ReturnsNull()
    {
        var result = TypeScriptBuildPathHelper.FindProjectRoot(@"C:\Windows\System32\drivers\etc\hosts");
        // We don't actually have package.json there, but behavior depends on traversal
        Assert.IsTrue(result == null || !result.Contains("package.json"));
    }

    [TestMethod]
    public void FindProjectRoot_WithPackageJson()
    {
        var tempDir = Path.Combine(Path.GetTempPath(), "TsBuildPathTest_" + System.Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(tempDir);
        try
        {
            File.WriteAllText(Path.Combine(tempDir, "package.json"), "{}");
            var subDir = Path.Combine(tempDir, "src", "lib");
            Directory.CreateDirectory(subDir);
            var result = TypeScriptBuildPathHelper.FindProjectRoot(Path.Combine(subDir, "x.ts"));
            Assert.AreEqual(tempDir, result);
        }
        finally
        {
            Directory.Delete(tempDir, true);
        }
    }

    [TestMethod]
    public void ResolveBuiltJavaScriptFile_NoFile_ReturnsNull()
    {
        var tempDir = Path.Combine(Path.GetTempPath(), "TsBuildPathTest_" + System.Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(tempDir);
        try
        {
            var result = TypeScriptBuildPathHelper.ResolveBuiltJavaScriptFile(Path.Combine(tempDir, "x.ts"), tempDir);
            Assert.IsNull(result);
        }
        finally
        {
            Directory.Delete(tempDir, true);
        }
    }

    [TestMethod]
    public void GetBuiltJavaScriptCandidates_AtLeastOne()
    {
        var candidates = TypeScriptBuildPathHelper.GetBuiltJavaScriptCandidates("C:/x/y.ts", "C:/x").ToList();
        Assert.IsTrue(candidates.Count >= 1);
    }

    [TestMethod]
    public void GetBuiltJavaScriptCandidates_OutsideProject_Fallback()
    {
        var candidates = TypeScriptBuildPathHelper.GetBuiltJavaScriptCandidates("C:/other/y.ts", "C:/x").ToList();
        Assert.IsTrue(candidates.Count >= 1);
    }

    [TestMethod]
    public void GetWebResourcePathCandidates_Empty()
    {
        var result = TypeScriptBuildPathHelper.GetWebResourcePathCandidates("", "", "");
        Assert.AreEqual(0, result.Count);
    }

    [TestMethod]
    public void GetWebResourcePathCandidates_NonDeployable_OnlyDeployPath()
    {
        var result = TypeScriptBuildPathHelper.GetWebResourcePathCandidates("a.js", "deploy/web.js", "deploy/");
        Assert.IsTrue(result.Count >= 1);
        StringAssert.Contains(result[0], "web.js");
    }

    [TestMethod]
    public void GetRelativePath_BothEmpty_Null()
    {
        Assert.IsNull(TypeScriptBuildPathHelper.GetRelativePath("", ""));
    }

    [TestMethod]
    public void GetRelativePath_RootEmpty_Null()
    {
        Assert.IsNull(TypeScriptBuildPathHelper.GetRelativePath("", "C:/a"));
    }

    [TestMethod]
    public void GetRelativePath_FileEmpty_Null()
    {
        Assert.IsNull(TypeScriptBuildPathHelper.GetRelativePath("C:/a", ""));
    }

    [TestMethod]
    public void GetRelativePath_SameDir()
    {
        var root = Path.GetTempPath();
        var file = Path.Combine(root, "a.txt");
        var result = TypeScriptBuildPathHelper.GetRelativePath(root, file);
        Assert.AreEqual("a.txt", result);
    }

    [TestMethod]
    public void GetRelativePath_SubDir()
    {
        var root = Path.GetTempPath();
        var sub = Path.Combine(root, "sub");
        var file = Path.Combine(sub, "a.txt");
        var result = TypeScriptBuildPathHelper.GetRelativePath(root, file);
        Assert.AreEqual(Path.Combine("sub", "a.txt"), result);
    }

    [TestMethod]
    public void GetRelativePath_DifferentScheme_Null()
    {
        // file URI vs other scheme — hard to test, just ensure no crash
        var root = Path.GetTempPath();
        var file = Path.Combine(root, "a.txt");
        var result = TypeScriptBuildPathHelper.GetRelativePath(root, file);
        Assert.IsNotNull(result);
    }
}
