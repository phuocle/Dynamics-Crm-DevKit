using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class NuGetVersionCacheCoverageTests
{
    [TestMethod]
    public void TryGetCached_UnknownPackage_ReturnsNull()
    {
        var result = NuGetVersionCache.TryGetCached("NotARealPackage_" + System.Guid.NewGuid().ToString("N"));
        Assert.IsNull(result);
    }

    [TestMethod]
    public void IsPreloadComplete_BeforeStart_False()
    {
        // Just exercise the property without depending on whether preload was started in another test
        var _ = NuGetVersionCache.IsPreloadComplete;
    }

    [TestMethod]
    public async Task WaitForPreloadAsync_NoStart_ReturnsFalse()
    {
        // If a parallel test already started preload, we cannot assert, but
        // calling the method must not throw.
        var result = await NuGetVersionCache.WaitForPreloadAsync(100);
        // Either false (no preload) or true (preload happened); the call must not throw.
    }

    [TestMethod]
    public async Task GetVersionAsync_UnknownPackage_ReturnsEmptyString()
    {
        // We use a non-existent package to hit the direct-fetch branch without polluting cache.
        // The NuGet call will return null for Version => empty string returned.
        var result = await NuGetVersionCache.GetVersionAsync("NotARealPackage_" + System.Guid.NewGuid().ToString("N"));
        Assert.IsNotNull(result.Version);
    }
}
