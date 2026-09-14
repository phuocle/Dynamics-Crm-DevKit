using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class SecureTokenCacheCoverageTests
{
    [TestMethod]
    public void SecureTokenCache_BasicOperationsAndRoundTrip_WorkCorrectly()
    {
        var cache = new SecureTokenCache();
        Assert.IsFalse(string.IsNullOrWhiteSpace(cache.GetCacheLocation()));

        var dummyConn = "DummyNonExistent_" + Guid.NewGuid().ToString("N");
        Assert.IsFalse(cache.HasCache(dummyConn));
        cache.Clear(dummyConn);
        Assert.IsFalse(cache.HasCache(dummyConn));

        // Round-trip save and load via reflection
        var saveMethod = typeof(SecureTokenCache).GetMethod("SaveCacheData", BindingFlags.NonPublic | BindingFlags.Instance)!;
        var loadMethod = typeof(SecureTokenCache).GetMethod("LoadCacheData", BindingFlags.NonPublic | BindingFlags.Instance)!;

        var testConn = "UnitTestConn_" + Guid.NewGuid().ToString("N");
        var testData = Encoding.UTF8.GetBytes("TokenCacheSecretData_" + Guid.NewGuid().ToString());

        saveMethod.Invoke(cache, new object[] { testConn, testData });
        Assert.IsTrue(cache.HasCache(testConn));

        var loaded = (byte[])loadMethod.Invoke(cache, new object[] { testConn })!;
        Assert.IsNotNull(loaded);
        CollectionAssert.AreEqual(testData, loaded);

        cache.Clear(testConn);
        Assert.IsFalse(cache.HasCache(testConn));

        var afterClear = loadMethod.Invoke(cache, new object[] { testConn });
        Assert.IsNull(afterClear);
    }
}
