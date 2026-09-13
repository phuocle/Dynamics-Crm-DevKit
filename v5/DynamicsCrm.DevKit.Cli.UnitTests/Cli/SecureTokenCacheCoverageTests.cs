using DynamicsCrm.DevKit.Shared;
using FakeItEasy;
using Microsoft.Identity.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class SecureTokenCacheCoverageTests
{
    private static readonly BindingFlags InstancePrivate = BindingFlags.NonPublic | BindingFlags.Instance;

    [TestMethod]
    public void CacheLocation_ReturnsValidDirectory()
    {
        var cache = new SecureTokenCache();
        var location = cache.GetCacheLocation();
        Assert.IsFalse(string.IsNullOrWhiteSpace(location));
        Assert.IsTrue(Directory.Exists(location));
    }

    [TestMethod]
    public void SaveAndLoad_RoundTripsEncryptedData()
    {
        var cache = new SecureTokenCache();
        var connName = "TestConnection_" + Guid.NewGuid().ToString("N");

        Assert.IsFalse(cache.HasCache(connName));

        var saveMethod = typeof(SecureTokenCache).GetMethod("SaveCacheData", InstancePrivate);
        var loadMethod = typeof(SecureTokenCache).GetMethod("LoadCacheData", InstancePrivate);
        Assert.IsNotNull(saveMethod);
        Assert.IsNotNull(loadMethod);

        var originalBytes = Encoding.UTF8.GetBytes("secret-token-payload");
        saveMethod.Invoke(cache, [connName, originalBytes]);

        Assert.IsTrue(cache.HasCache(connName));

        var loadedBytes = (byte[]?)loadMethod.Invoke(cache, [connName]);
        Assert.IsNotNull(loadedBytes);
        CollectionAssert.AreEqual(originalBytes, loadedBytes);

        // Clear single cache
        cache.Clear(connName);
        Assert.IsFalse(cache.HasCache(connName));

        // Load non-existent returns null
        var afterClear = (byte[]?)loadMethod.Invoke(cache, [connName]);
        Assert.IsNull(afterClear);
    }

    [TestMethod]
    public void LoadCacheData_ReturnsNullOnCorruptedData()
    {
        var cache = new SecureTokenCache();
        var connName = "CorruptConn_" + Guid.NewGuid().ToString("N");
        var getFilePath = typeof(SecureTokenCache).GetMethod("GetCacheFilePath", InstancePrivate);
        Assert.IsNotNull(getFilePath);

        var filePath = (string)getFilePath.Invoke(cache, [connName])!;
        File.WriteAllText(filePath, "invalid corrupt encrypted bytes");

        var loadMethod = typeof(SecureTokenCache).GetMethod("LoadCacheData", InstancePrivate);
        var loaded = (byte[]?)loadMethod!.Invoke(cache, [connName]);
        Assert.IsNull(loaded);

        cache.Clear(connName);
    }

    [TestMethod]
    public void ClearAll_DoesNotThrow()
    {
        var cache = new SecureTokenCache();
        cache.ClearAll();
    }

    [TestMethod]
    public void RegisterCache_RegistersCallbacksWithMsalApp()
    {
        var cache = new SecureTokenCache();
        var app = A.Fake<IPublicClientApplication>();
        var userTokenCache = A.Fake<ITokenCache>();

        A.CallTo(() => app.UserTokenCache).Returns(userTokenCache);

        TokenCacheCallback? beforeCallback = null;
        TokenCacheCallback? afterCallback = null;

        A.CallTo(() => userTokenCache.SetBeforeAccess(A<TokenCacheCallback>.Ignored))
            .Invokes((TokenCacheCallback cb) => beforeCallback = cb);
        A.CallTo(() => userTokenCache.SetAfterAccess(A<TokenCacheCallback>.Ignored))
            .Invokes((TokenCacheCallback cb) => afterCallback = cb);

        cache.RegisterCache(app, "MyTestConnection");

        Assert.IsNotNull(beforeCallback);
        Assert.IsNotNull(afterCallback);

        var serializer = A.Fake<ITokenCacheSerializer>();
        A.CallTo(() => serializer.SerializeMsalV3()).Returns(Encoding.UTF8.GetBytes("token-bytes"));

        // Create an uninitialized TokenCacheNotificationArgs and set fields via reflection
        var notificationArgs = (TokenCacheNotificationArgs)System.Runtime.CompilerServices.RuntimeHelpers.GetUninitializedObject(typeof(TokenCacheNotificationArgs));
        var fields = typeof(TokenCacheNotificationArgs).GetFields(BindingFlags.Instance | BindingFlags.NonPublic | BindingFlags.Public);
        foreach (var field in fields)
        {
            if (field.FieldType.IsAssignableFrom(typeof(ITokenCacheSerializer)))
                field.SetValue(notificationArgs, serializer);
            if (field.FieldType == typeof(bool) && field.Name.Contains("StateChanged", StringComparison.OrdinalIgnoreCase))
                field.SetValue(notificationArgs, true);
        }

        // Invoke after callback (saves cache)
        afterCallback(notificationArgs);

        // Invoke before callback (loads and deserializes)
        beforeCallback(notificationArgs);

        A.CallTo(() => serializer.DeserializeMsalV3(A<byte[]>.Ignored)).MustHaveHappened();

        cache.Clear("MyTestConnection");
    }
}
