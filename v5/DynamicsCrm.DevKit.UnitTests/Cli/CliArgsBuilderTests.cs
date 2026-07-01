using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class CliArgsBuilderTests
{
    #region FromPac Tests

    [TestMethod]
    public void FromPac_WithPacProfile_IncludesAuthFromPac()
    {
        var conn = new CrmConnection { Type = "FromPac", PacProfile = "DEVKIT_TEST_PROFILE" };

        var result = CliArgsBuilder.Build(conn);

        StringAssert.Contains(result, "--auth FromPac");
    }

    [TestMethod]
    public void FromPac_WithPacProfile_IncludesPacProfileArg()
    {
        var conn = new CrmConnection { Type = "FromPac", PacProfile = "DEVKIT_TEST_PROFILE" };

        var result = CliArgsBuilder.Build(conn);

        StringAssert.Contains(result, "--pacprofile \"DEVKIT_TEST_PROFILE\"");
    }

    [TestMethod]
    public void FromPac_WithPacProfile_OutputMatchesFullContract()
    {
        var conn = new CrmConnection { Type = "FromPac", PacProfile = "DEVKIT_TEST_PROFILE" };

        var result = CliArgsBuilder.Build(conn);

        Assert.AreEqual("--auth FromPac --pacprofile \"DEVKIT_TEST_PROFILE\"", result);
    }

    [TestMethod]
    public void FromPac_ProfileNameWithSpaces_IsQuoted()
    {
        var conn = new CrmConnection { Type = "FromPac", PacProfile = "my profile with spaces" };

        var result = CliArgsBuilder.Build(conn);

        Assert.AreEqual("--auth FromPac --pacprofile \"my profile with spaces\"", result);
    }

    [TestMethod]
    public void FromPac_FallsBackToUserName_WhenPacProfileEmpty()
    {
        var conn = new CrmConnection { Type = "FromPac", PacProfile = "", UserName = "fallback-profile" };

        var result = CliArgsBuilder.Build(conn);

        Assert.AreEqual("--auth FromPac --pacprofile \"fallback-profile\"", result);
    }

    [TestMethod]
    public void FromPac_NullProfile_ThrowsArgumentException()
    {
        var conn = new CrmConnection { Type = "FromPac", PacProfile = null, UserName = null };

        try
        {
            CliArgsBuilder.Build(conn);
            Assert.Fail("Expected ArgumentException was not thrown");
        }
        catch (ArgumentException) { }
    }

    #endregion

    #region ClientSecret Tests

    [TestMethod]
    public void ClientSecret_OutputContainsAuthClientSecret()
    {
        var conn = new CrmConnection
        {
            Type = "ClientSecret",
            Url = "https://org.crm.dynamics.com",
            ClientId = "app-id",
            ClientSecret = "secret"
        };

        var result = CliArgsBuilder.Build(conn);

        StringAssert.Contains(result, "--auth ClientSecret");
        StringAssert.Contains(result, "--url \"https://org.crm.dynamics.com\"");
        StringAssert.Contains(result, "--clientid \"app-id\"");
        StringAssert.Contains(result, "--clientsecret");
    }

    #endregion

    #region Interactive / DeviceCode Tests

    [TestMethod]
    public void Interactive_OutputContainsAuthInteractive()
    {
        var conn = new CrmConnection { Type = "Interactive", Url = "https://org.crm.dynamics.com" };

        var result = CliArgsBuilder.Build(conn);

        StringAssert.Contains(result, "--auth Interactive");
        StringAssert.Contains(result, "--url \"https://org.crm.dynamics.com\"");
    }

    [TestMethod]
    public void DeviceCode_OutputContainsAuthDeviceCode()
    {
        var conn = new CrmConnection { Type = "DeviceCode", Url = "https://org.crm.dynamics.com" };

        var result = CliArgsBuilder.Build(conn);

        StringAssert.Contains(result, "--auth DeviceCode");
    }

    #endregion

    #region Null / UnsupportedType Tests

    [TestMethod]
    public void NullConnection_ReturnsEmptyString()
    {
        var result = CliArgsBuilder.Build(null);

        Assert.AreEqual(string.Empty, result);
    }

    [TestMethod]
    public void UnsupportedType_ThrowsNotSupportedException()
    {
        var conn = new CrmConnection { Type = "UnknownType" };

        try
        {
            CliArgsBuilder.Build(conn);
            Assert.Fail("Expected NotSupportedException was not thrown");
        }
        catch (NotSupportedException) { }
    }

    #endregion
}
