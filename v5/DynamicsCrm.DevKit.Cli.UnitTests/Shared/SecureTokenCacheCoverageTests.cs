using System;
using System.IO;
using System.Reflection;
using System.Text;
using Microsoft.Identity.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Shared;

/// <summary>
/// SecureTokenCache — DPAPI-backed MSAL token cache. Cache location is
/// redirected to a temporary directory via the private _cacheLocation field,
/// so no test ever touches the real profile token cache.
/// </summary>
[TestClass]
public class SecureTokenCacheCoverageTests
{
    private static readonly FieldInfo LocationField =
        typeof(DynamicsCrm.DevKit.Shared.SecureTokenCache)
            .GetField("_cacheLocation", BindingFlags.Instance | BindingFlags.NonPublic)!;

    private string _tempDir = null!;

    [TestInitialize]
    public void CreateTempDir()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "SecureTokenCacheTests", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
    }

    [TestCleanup]
    public void DeleteTempDir()
    {
        if (Directory.Exists(_tempDir)) Directory.Delete(_tempDir, true);
    }

    private DynamicsCrm.DevKit.Shared.SecureTokenCache NewCache()
    {
        var cache = new DynamicsCrm.DevKit.Shared.SecureTokenCache();
        LocationField.SetValue(cache, _tempDir);
        return cache;
    }

    // ──────────────────────────────────────────────
    // Save/Load round-trip (private methods via reflection)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void SaveThenLoad_RoundTripsPlaintext()
    {
        var cache = NewCache();
        var connection = "Conn_" + Guid.NewGuid().ToString("N");

        var testData = Encoding.UTF8.GetBytes("secret-" + Guid.NewGuid().ToString());
        InvokeSave(cache, connection, testData);
        Assert.IsTrue(cache.HasCache(connection));

        var loaded = (byte[])InvokeLoad(cache, connection);
        CollectionAssert.AreEqual(testData, loaded);
    }

    [TestMethod]
    public void Load_MissingFile_ReturnsNull()
    {
        var cache = NewCache();

        Assert.IsNull(InvokeLoad(cache, "Conn_" + Guid.NewGuid().ToString("N")));
    }

    [TestMethod]
    public void Load_CorruptedFile_ReturnsNull()
    {
        var cache = NewCache();
        var connection = "Conn_" + Guid.NewGuid().ToString("N");
        File.WriteAllBytes(Path.Combine(_tempDir, $"{connection}.msalcache"), new byte[] { 0x01, 0x02, 0x03 });

        Assert.IsNull(InvokeLoad(cache, connection));
    }

    // ──────────────────────────────────────────────
    // GetCacheFilePath sanitization
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetCacheFilePath_ReplacesInvalidFileNameChars()
    {
        var cache = NewCache();
        var method = typeof(DynamicsCrm.DevKit.Shared.SecureTokenCache).GetMethod(
            "GetCacheFilePath", BindingFlags.Instance | BindingFlags.NonPublic);
        Assert.IsNotNull(method);

        // '_' is the replacement char used by string.Join; connection names
        // with path separators must not escape the cache directory.
        var path = (string)method.Invoke(cache, new object[] { "conn/with\\bad:chars" });

        Assert.AreEqual(Path.Combine(_tempDir, "conn_with_bad_chars.msalcache"), path);
    }

    // ──────────────────────────────────────────────
    // RegisterCache + ClearAll
    // ──────────────────────────────────────────────

    [TestMethod]
    public void RegisterCache_AttachesMsalCallbacks()
    {
        var cache = NewCache();
        var app = PublicClientApplicationBuilder.Create(Guid.NewGuid().ToString()).Build();

        cache.RegisterCache(app, "Conn_" + Guid.NewGuid().ToString("N"));

        Assert.IsNotNull(app.UserTokenCache);
    }

    [TestMethod]
    public void ClearAll_DeletesCacheDirectory()
    {
        var cache = NewCache();
        var connection = "Conn_" + Guid.NewGuid().ToString("N");
        InvokeSave(cache, connection, new byte[] { 0x01 });
        Assert.IsTrue(cache.HasCache(connection));

        cache.ClearAll();

        Assert.IsFalse(Directory.Exists(_tempDir));
        Assert.IsFalse(cache.HasCache(connection));
    }

    [TestMethod]
    public void ClearAll_MissingDirectory_DoesNotThrow()
    {
        var cache = NewCache();
        LocationField.SetValue(cache, Path.Combine(_tempDir, "does-not-exist"));

        cache.ClearAll();
    }

    [TestMethod]
    public void ClearAll_FailsSilently_WhenLocationIsAFile()
    {
        var cache = NewCache();
        var blockerFile = Path.Combine(_tempDir, "blocker.txt");
        File.WriteAllText(blockerFile, "a file, not a directory");
        LocationField.SetValue(cache, blockerFile);

        cache.ClearAll();
    }

    [TestMethod]
    public void Clear_MissingFile_DoesNotThrow()
    {
        var cache = NewCache();

        cache.Clear("Conn_" + Guid.NewGuid().ToString("N"));
    }

    // ──────────────────────────────────────────────
    // Helpers
    // ──────────────────────────────────────────────

    private static object InvokeLoad(DynamicsCrm.DevKit.Shared.SecureTokenCache cache, string connection)
    {
        var method = typeof(DynamicsCrm.DevKit.Shared.SecureTokenCache).GetMethod(
            "LoadCacheData", BindingFlags.Instance | BindingFlags.NonPublic);
        Assert.IsNotNull(method);
        return method.Invoke(cache, new object[] { connection });
    }

    private static void InvokeSave(DynamicsCrm.DevKit.Shared.SecureTokenCache cache, string connection, byte[] data)
    {
        var method = typeof(DynamicsCrm.DevKit.Shared.SecureTokenCache).GetMethod(
            "SaveCacheData", BindingFlags.Instance | BindingFlags.NonPublic);
        Assert.IsNotNull(method);
        method.Invoke(cache, new object[] { connection, data });
    }
}
