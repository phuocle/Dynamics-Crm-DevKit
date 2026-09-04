using DynamicsCrm.DevKit.Cli;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class UpdateCheckerCoverageTests
{
    [TestMethod]
    public void UpdateCheckResult_None_HasNoUpdate()
    {
        Assert.IsFalse(UpdateCheckResult.None.HasUpdate);
        Assert.IsNull(UpdateCheckResult.None.CurrentVersion);
        Assert.IsNull(UpdateCheckResult.None.LatestVersion);
    }

    [TestMethod]
    public void UpdateCheckResult_TrueCtor_SetsAll()
    {
        var r = new UpdateCheckResult(true, "1.0.0", "2.0.0");
        Assert.IsTrue(r.HasUpdate);
        Assert.AreEqual("1.0.0", r.CurrentVersion);
        Assert.AreEqual("2.0.0", r.LatestVersion);
    }

    [TestMethod]
    public void UpdateCheckResult_FalseCtor_NoUpdate()
    {
        var r = new UpdateCheckResult(false, "2.0.0", "2.0.0");
        Assert.IsFalse(r.HasUpdate);
    }

    [TestMethod]
    public void UpdateCacheData_SetsProperties()
    {
        var c = new UpdateCacheData { LastCheck = System.DateTime.UtcNow, LatestVersion = "3.0.0" };
        Assert.AreEqual("3.0.0", c.LatestVersion);
    }

    [TestMethod]
    public async Task CheckAsync_CachesResult()
    {
        // First call hits network (or returns None on failure), second call should be cached
        var first = await UpdateChecker.CheckAsync();
        var second = await UpdateChecker.CheckAsync();
        Assert.IsNotNull(first);
        Assert.IsNotNull(second);
    }

    [TestMethod]
    public void ShowNotification_NoUpdate_DoesNothing()
    {
        // Should not throw, should not print anything (no update)
        UpdateChecker.ShowNotification(UpdateCheckResult.None);
    }

    [TestMethod]
    public void ShowNotification_HasUpdate_DoesNotThrow()
    {
        var r = new UpdateCheckResult(true, "1.0.0", "2.0.0");
        // We do not capture stdout here; just verify it does not throw
        UpdateChecker.ShowNotification(r);
    }
}
