using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Cli.CodeSigning;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public sealed class UtilityCoverageTests
{
    [TestMethod]
    public void UpdateChecker_BuildResultHandlesInvalidCurrentAndNewerVersions()
    {
        var build = typeof(UpdateChecker).GetMethod("BuildResult", BindingFlags.NonPublic | BindingFlags.Static)!;
        var invalid = (UpdateCheckResult)build.Invoke(null, new object[] { "not-a-version" })!;
        Assert.IsFalse(invalid.HasUpdate);

        var current = DynamicsCrm.DevKit.Shared.Const.Version;
        var same = (UpdateCheckResult)build.Invoke(null, new object[] { current })!;
        Assert.IsFalse(same.HasUpdate);

        var newer = (UpdateCheckResult)build.Invoke(null, new object[] { "999.0.0" })!;
        Assert.IsTrue(newer.HasUpdate);
        Assert.AreEqual("999.0.0", newer.LatestVersion);
    }

    [TestMethod]
    public void UpdateResultAndCacheData_ExposeStoredValues()
    {
        var result = new UpdateCheckResult(true, "4.0.0", "5.0.0");
        Assert.IsTrue(result.HasUpdate);
        Assert.AreEqual("4.0.0", result.CurrentVersion);
        Assert.AreEqual("5.0.0", result.LatestVersion);
        Assert.IsFalse(UpdateCheckResult.None.HasUpdate);

        var cache = new UpdateCacheData { LastCheck = new DateTime(2026, 1, 2), LatestVersion = "5.0.0" };
        Assert.AreEqual("5.0.0", cache.LatestVersion);
        Assert.AreEqual(2026, cache.LastCheck.Year);
    }

    [TestMethod]
    public void CodeSigner_InvalidCertificateReturnsFriendlyExceptionWithoutExecutingTool()
    {
        var method = typeof(CodeSigner).GetMethod("GetThumbprintFromPfx", BindingFlags.NonPublic | BindingFlags.Static)!;
        var exception = Assert.Throws<TargetInvocationException>(() => method.Invoke(null, new object[] { "missing-test-certificate.pfx", "password" }));
        StringAssert.Contains(exception.InnerException!.Message, "Failed to read certificate");
        StringAssert.Contains(exception.InnerException.Message, "missing-test-certificate.pfx");
    }
}
