using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class MessageDiscoveryHelperCoverageTests
{
    [TestMethod]
    public void NormalizeScope_Null_DefaultsToNone()
    {
        Assert.AreEqual("none", MessageDiscoveryHelper.NormalizeScope(null));
    }

    [TestMethod]
    public void NormalizeScope_Empty_DefaultsToNone()
    {
        Assert.AreEqual("none", MessageDiscoveryHelper.NormalizeScope(""));
    }

    [TestMethod]
    public void NormalizeScope_Whitespace_DefaultsToNone()
    {
        Assert.AreEqual("none", MessageDiscoveryHelper.NormalizeScope("   "));
    }

    [TestMethod]
    public void NormalizeScope_Global_BecomesNone()
    {
        Assert.AreEqual("none", MessageDiscoveryHelper.NormalizeScope("global"));
        Assert.AreEqual("none", MessageDiscoveryHelper.NormalizeScope("GLOBAL"));
    }

    [TestMethod]
    public void NormalizeScope_Entity_StaysEntity()
    {
        Assert.AreEqual("entity", MessageDiscoveryHelper.NormalizeScope("entity"));
        Assert.AreEqual("entity", MessageDiscoveryHelper.NormalizeScope("  entity  "));
    }

    [TestMethod]
    public void NormalizeScope_Lowercase_Trimmed()
    {
        Assert.AreEqual("entity", MessageDiscoveryHelper.NormalizeScope("Entity"));
    }
}
