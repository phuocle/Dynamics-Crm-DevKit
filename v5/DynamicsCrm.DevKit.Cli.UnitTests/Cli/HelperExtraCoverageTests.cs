using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// Extra coverage for Helper.cs utility surface: embedded-resource reading,
/// namespace sanitising, best-effort deletion helpers, content slicing, and
/// sign-tool discovery.
/// </summary>
[TestClass]
public sealed class HelperExtraCoverageTests
{
    [TestMethod]
    public async Task ReadEmbeddedResource_ReturnsEmbeddedContent()
    {
        var resources = typeof(Helper).Assembly.GetManifestResourceNames();
        if (resources.Length == 0) Assert.Inconclusive("No embedded resources in the CLI assembly.");

        var sync = Helper.ReadEmbeddedResource(resources[0]);
        Assert.IsNotNull(sync);

        var async = await Helper.ReadEmbeddedResourceAsync(resources[0]);
        Assert.AreEqual(sync, async);

        Assert.IsNull(Helper.ReadEmbeddedResource("Definitely.Not.A.Resource"));
    }

    [TestMethod]
    public void SafeNamespace_PrefixesNumericSegments()
    {
        Assert.AreEqual(string.Empty, Helper.SafeNamespace(""));
        Assert.AreEqual(string.Empty, Helper.SafeNamespace(null!));
        Assert.AreEqual("_2026.DevKit", Helper.SafeNamespace("2026.DevKit"));
        Assert.AreEqual("DevKit._2026.Core", Helper.SafeNamespace("DevKit.2026.Core"));
        Assert.AreEqual("DevKit.Cli", Helper.SafeNamespace("DevKit.Cli"));
    }

    [TestMethod]
    public void TryDeleteDirectory_RemovesTree_AndToleratesMissing()
    {
        var dir = Path.Combine(Path.GetTempPath(), "devkit-del-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(dir);
        File.WriteAllText(Path.Combine(dir, "a.txt"), "x");

        Helper.TryDeleteDirectory(dir);
        Assert.IsFalse(Directory.Exists(dir));

        Helper.TryDeleteDirectory(dir);
        Assert.IsFalse(Directory.Exists(dir), "second call is a no-op.");

        Helper.TryDeleteDirectory(null!);
    }

    [TestMethod]
    public void GetContentFromLine6_SkipsHeaderLines()
    {
        var content = string.Join("\r\n", Enumerable.Range(1, 12).Select(i => $"line {i}"));
        var result = Helper.GetContentFromLine6(content);
        StringAssert.Contains(result, "line 8");
        Assert.IsFalse(result.Contains("line 7"));

        Assert.AreEqual(string.Empty, Helper.GetContentFromLine6(""));
        Assert.AreEqual(string.Empty, Helper.GetContentFromLine6(null!));
        Assert.AreEqual(string.Empty, Helper.GetContentFromLine6("short"));
    }

    [TestMethod]
    public void FindSignTool_FindsToolOrReturnsNull_WithoutThrowing()
    {
        var result = Helper.FindSignTool();
        Assert.IsTrue(result == null || File.Exists(result));
    }

    [TestMethod]
    public void IsTheSame_ComparesCaseInsensitive()
    {
        Assert.IsTrue(Helper.IsTheSame("abc", "ABC"));
        Assert.IsFalse(Helper.IsTheSame("abc", "abd"));
        Assert.IsFalse(Helper.IsTheSame(null!, "x"));
    }
}
