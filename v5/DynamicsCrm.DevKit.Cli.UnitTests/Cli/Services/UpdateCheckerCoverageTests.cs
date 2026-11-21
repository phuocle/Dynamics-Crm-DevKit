using System;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NuGet.Versioning;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Services;

/// <summary>
/// UpdateChecker cache plumbing — Read/Write/BuildResult against a temporary
/// cache location, never touching nuget.org (only the cached-fresh branch of
/// CheckAsync runs offline).
/// </summary>
[TestClass]
[DoNotParallelize]
public class UpdateCheckerCoverageTests
{
    private string _tempDir = null!;
    private string _originalCacheDir = null!;
    private string _originalCacheFile = null!;

    [TestInitialize]
    public void RedirectCacheToTemp()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "UpdateCheckerTests", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        _originalCacheDir = UpdateChecker.CacheDir;
        _originalCacheFile = UpdateChecker.CacheFile;
        UpdateChecker.CacheDir = _tempDir;
        UpdateChecker.CacheFile = Path.Combine(_tempDir, ".update-check");
    }

    [TestCleanup]
    public void RestoreCache()
    {
        UpdateChecker.CacheDir = _originalCacheDir;
        UpdateChecker.CacheFile = _originalCacheFile;
        if (Directory.Exists(_tempDir)) Directory.Delete(_tempDir, true);
    }

    private static void InvokePrivate(string method, params object[] args)
    {
        var m = typeof(UpdateChecker).GetMethod(method, BindingFlags.NonPublic | BindingFlags.Static);
        Assert.IsNotNull(m, $"{method} not found");
        m.Invoke(null, args);
    }

    private static object InvokePrivateFunc(string method, params object[] args)
    {
        var m = typeof(UpdateChecker).GetMethod(method, BindingFlags.NonPublic | BindingFlags.Static);
        Assert.IsNotNull(m, $"{method} not found");
        return m.Invoke(null, args);
    }

    private void WriteCacheFile(string latestVersion) => InvokePrivate("WriteCache", latestVersion);

    // ──────────────────────────────────────────────
    // WriteCache
    // ──────────────────────────────────────────────

    [TestMethod]
    public void WriteCache_WritesParseableJsonWithTimestamp()
    {
        var before = DateTime.UtcNow.AddMinutes(-1);
        WriteCacheFile("9.9.9");
        var after = DateTime.UtcNow.AddMinutes(1);

        Assert.IsTrue(File.Exists(UpdateChecker.CacheFile), "cache file should exist after WriteCache");
        var json = File.ReadAllText(UpdateChecker.CacheFile);
        var data = System.Text.Json.JsonSerializer.Deserialize<UpdateCacheData>(json);
        Assert.IsNotNull(data);
        Assert.AreEqual("9.9.9", data.LatestVersion);
        Assert.IsTrue(data.LastCheck >= before && data.LastCheck <= after, "LastCheck should be ~UtcNow");
    }

    [TestMethod]
    public void WriteCache_CreatesMissingCacheDirectory()
    {
        UpdateChecker.CacheDir = Path.Combine(_tempDir, "nested", "deeper");
        UpdateChecker.CacheFile = Path.Combine(UpdateChecker.CacheDir, ".update-check");

        WriteCacheFile("9.9.9");

        Assert.IsTrue(File.Exists(UpdateChecker.CacheFile));
    }

    // ──────────────────────────────────────────────
    // ReadCache
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ReadCache_MissingFile_ReturnsNull()
    {
        Assert.IsNull(InvokePrivateFunc("ReadCache"));
    }

    [TestMethod]
    public void ReadCache_ValidJson_ReturnsData()
    {
        WriteCacheFile("8.8.8");

        var cached = (UpdateCacheData)InvokePrivateFunc("ReadCache");
        Assert.IsNotNull(cached);
        Assert.AreEqual("8.8.8", cached.LatestVersion);
    }

    [TestMethod]
    public void ReadCache_CorruptedJson_ReturnsNull()
    {
        File.WriteAllText(UpdateChecker.CacheFile, "{ not valid json !!!");

        Assert.IsNull(InvokePrivateFunc("ReadCache"));
    }

    // ──────────────────────────────────────────────
    // CheckAsync — cached-fresh branch only (offline)
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task CheckAsync_FreshCache_NewerLatest_ReturnsHasUpdate()
    {
        WriteCacheFile("9.9.9");

        var result = await UpdateChecker.CheckAsync();

        Assert.IsTrue(result.HasUpdate);
        Assert.AreEqual("9.9.9", result.LatestVersion);
        Assert.AreEqual(Const.Version, result.CurrentVersion);
    }

    [TestMethod]
    public async Task CheckAsync_FreshCache_OlderLatest_ReturnsNone()
    {
        WriteCacheFile("0.0.1");

        var result = await UpdateChecker.CheckAsync();

        Assert.IsFalse(result.HasUpdate);
    }

    [TestMethod]
    public async Task CheckAsync_FreshCache_UnparseableLatest_ReturnsNone()
    {
        WriteCacheFile("not-a-version");

        var result = await UpdateChecker.CheckAsync();

        Assert.IsFalse(result.HasUpdate);
    }

    // ──────────────────────────────────────────────
    // GetCurrentVersion + ShowNotification
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetCurrentVersion_ParsesConstVersion()
    {
        var version = (NuGetVersion)InvokePrivateFunc("GetCurrentVersion");

        Assert.IsNotNull(version);
        Assert.AreEqual(Const.Version, version.ToNormalizedString());
    }

    [TestMethod]
    public void ShowNotification_NoUpdate_WritesNothing()
    {
        using var writer = new StringWriter();
        var original = Console.Out;
        Console.SetOut(writer);
        try
        {
            UpdateChecker.ShowNotification(UpdateCheckResult.None);
        }
        finally
        {
            Console.SetOut(original);
        }

        Assert.AreEqual(string.Empty, writer.ToString());
    }

    [TestMethod]
    public void ShowNotification_PlainMode_WritesUpdateNotice()
    {
        var original = SpectreLog.IsPlain;
        SpectreLog.IsPlain = true;
        using var writer = new StringWriter();
        var originalOut = Console.Out;
        Console.SetOut(writer);
        try
        {
            UpdateChecker.ShowNotification(new UpdateCheckResult(true, "4.44.44.44", "9.9.9"));
        }
        finally
        {
            Console.SetOut(originalOut);
            SpectreLog.IsPlain = original;
        }

        var output = writer.ToString();
        StringAssert.Contains(output, "[UPDATE]");
        StringAssert.Contains(output, "dotnet tool update -g DynamicsCrm.DevKit.Cli");
    }
}
