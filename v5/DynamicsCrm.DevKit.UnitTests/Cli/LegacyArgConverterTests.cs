using DynamicsCrm.DevKit.Cli;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class LegacyArgConverterTests
{
    #region IsLegacyFormat Tests

    [TestMethod]
    public void IsLegacyFormat_SlashColonArgs_ReturnsTrue()
    {
        var args = new[] { "/type:generators", "/json:cli.json" };

        Assert.IsTrue(LegacyArgConverter.IsLegacyFormat(args));
    }

    [TestMethod]
    public void IsLegacyFormat_DoubleDashArgs_ReturnsFalse()
    {
        var args = new[] { "generator", "--json", "cli.json", "--profile", "PROD" };

        Assert.IsFalse(LegacyArgConverter.IsLegacyFormat(args));
    }

    [TestMethod]
    public void IsLegacyFormat_EmptyArgs_ReturnsFalse()
    {
        var args = new string[] { };

        Assert.IsFalse(LegacyArgConverter.IsLegacyFormat(args));
    }

    #endregion

    #region --sdk-login Tests

    [TestMethod]
    public void SdkLogin_Yes_EmitsFlag()
    {
        var args = new[] { "/type:generators", "/json:cli.json", "/sdklogin:yes" };

        var result = LegacyArgConverter.Convert(args);

        CollectionAssert.Contains(result, "--sdk-login");
    }

    [TestMethod]
    public void SdkLogin_No_DoesNotEmitFlag()
    {
        var args = new[] { "/type:generators", "/json:cli.json", "/sdklogin:no" };

        var result = LegacyArgConverter.Convert(args);

        CollectionAssert.DoesNotContain(result, "--sdk-login");
    }

    [TestMethod]
    public void SdkLogin_Yes_CaseInsensitive_EmitsFlag()
    {
        var args = new[] { "/type:generators", "/json:cli.json", "/sdklogin:YES" };

        var result = LegacyArgConverter.Convert(args);

        CollectionAssert.Contains(result, "--sdk-login");
    }

    #endregion

    #region Full Conversion Tests

    [TestMethod]
    public void Convert_LegacyGeneratorArgs_ProducesValidCommandLine()
    {
        var args = new[]
        {
            "/type:generators",
            "/json:DynamicsCrm.DevKit.Cli.json",
            "/profile:JsForm"
        };

        var result = LegacyArgConverter.Convert(args);

        Assert.AreEqual("generator", result[0]);
        CollectionAssert.Contains(result, "--json");
        CollectionAssert.Contains(result, "DynamicsCrm.DevKit.Cli.json");
        CollectionAssert.Contains(result, "--profile");
        CollectionAssert.Contains(result, "JsForm");
    }

    [TestMethod]
    public void Convert_LegacySdkLoginArgs_EmitsFlagWithUrl()
    {
        var args = new[]
        {
            "/type:servers",
            "/json:DynamicsCrm.DevKit.Cli.json",
            "/url:https://contoso.crm.dynamics.com",
            "/sdklogin:yes"
        };

        var result = LegacyArgConverter.Convert(args);

        Assert.AreEqual("server", result[0]);
        CollectionAssert.Contains(result, "--sdk-login");
        CollectionAssert.Contains(result, "--url");
    }

    [TestMethod]
    public void Convert_ModernArgs_ReturnedAsIs()
    {
        var args = new[] { "server", "--conn", "AuthType=Office365;Url=https://org.crm.dynamics.com", "--json", "cli.json" };

        var result = LegacyArgConverter.Convert(args);

        CollectionAssert.AreEqual(args, result);
    }

    #endregion
}
