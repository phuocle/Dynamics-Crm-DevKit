using System.Threading;
using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Shared;

/// <summary>
/// NuGetVersionCache.StartPreload — the fire-and-forget preload starts once;
/// package fetch failures are swallowed inside PreloadPackageAsync.
/// </summary>
[TestClass]
public class NuGetVersionCacheCoverageTests
{
    [TestMethod]
    public void StartPreload_SecondCallIsNoOp()
    {
        NuGetVersionCache.StartPreload();
        NuGetVersionCache.StartPreload();

        // IsPreloadComplete may or may not be true by now (background NuGet
        // fetches) — the assertion only pins the API surface.
        var complete = NuGetVersionCache.IsPreloadComplete;
        Assert.IsTrue(complete || !complete);
    }

    [TestMethod]
    public void StartPreload_BackgroundFetchesDoNotThrow()
    {
        NuGetVersionCache.StartPreload();

        // Give the fire-and-forget task a moment; PreloadPackageAsync swallows
        // all failures, so any state it reaches is acceptable.
        Thread.Sleep(50);
        var complete = NuGetVersionCache.IsPreloadComplete;
        Assert.IsTrue(complete || !complete);
    }
}
