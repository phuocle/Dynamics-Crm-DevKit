using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.WhoAmI;

[TestClass]
public sealed class WhoAmIAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(WhoAmITool);

    [TestMethod]
    public void ComputeSha256AndBaseUrl_CoverMissingPathAndUriVariants()
    {
        Assert.IsNull(InvokeStatic<string>("ComputeSha256", "Z:\\missing-devkit-file"));
        Assert.IsNull(InvokeStatic<string>("GetBaseUrl", (object?)null));
        Assert.AreEqual("https://org.crm.dynamics.com", InvokeStatic<string>("GetBaseUrl",
            new Uri("https://org.crm.dynamics.com/api/data/v9.2")));
    }

    [TestMethod]
    public void GetLanguageName_UnknownLcidUsesFallback()
    {
        Assert.AreEqual("LCID 999999", InvokeStatic<string>("GetLanguageName", 999999));
    }

    private static T InvokeStatic<T>(string methodName, params object?[] args) =>
        (T)ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
}
