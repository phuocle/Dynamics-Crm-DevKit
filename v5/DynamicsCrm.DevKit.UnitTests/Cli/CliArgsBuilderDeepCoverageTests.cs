using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class CliArgsBuilderDeepCoverageTests
{
    [TestMethod]
    public void Build_NullConnection_ReturnsEmpty()
    {
        var result = CliArgsBuilder.Build(null);
        Assert.AreEqual(string.Empty, result);
    }

    [TestMethod]
    public void Build_UseProjectEnvironment_ReturnsEmpty()
    {
        var conn = new CrmConnection { Type = "ClientSecret", UseProjectEnvironment = true };
        var result = CliArgsBuilder.Build(conn);
        Assert.AreEqual(string.Empty, result);
    }

    [TestMethod]
    public void Build_ClientSecret_AllFieldsPresent()
    {
        var conn = new CrmConnection
        {
            Type = "ClientSecret",
            Url = "https://org.crm.dynamics.com",
            ClientId = "cid",
            ClientSecret = "csec"
        };
        var result = CliArgsBuilder.Build(conn);
        StringAssert.Contains(result, "--auth ClientSecret");
        StringAssert.Contains(result, "--url");
        StringAssert.Contains(result, "--clientid");
        StringAssert.Contains(result, "--clientsecret");
    }

    [TestMethod]
    public void Build_ClientSecret_ClientIdFallbackToUserName()
    {
        var conn = new CrmConnection
        {
            Type = "ClientSecret",
            Url = "https://x",
            ClientId = null,
            UserName = "u1"
        };
        var result = CliArgsBuilder.Build(conn);
        StringAssert.Contains(result, "--clientid \"u1\"");
    }

    [TestMethod]
    public void Build_ClientSecret_PasswordFallback()
    {
        var conn = new CrmConnection
        {
            Type = "ClientSecret",
            Url = "https://x",
            ClientId = "cid",
            ClientSecret = null,
            Password = "pw"
        };
        var result = CliArgsBuilder.Build(conn);
        StringAssert.Contains(result, "--clientsecret");
    }

    [TestMethod]
    public void Build_ClientSecret_EncryptSecretsTrue()
    {
        var conn = new CrmConnection
        {
            Type = "ClientSecret",
            Url = "https://x",
            ClientId = "cid",
            ClientSecret = "secret"
        };
        var result = CliArgsBuilder.Build(conn, encryptSecrets: true);
        StringAssert.Contains(result, "--clientsecret");
    }

    [TestMethod]
    public void Build_Interactive_AllArgs()
    {
        var conn = new CrmConnection { Type = "Interactive", Url = "https://x", ClientId = "cid" };
        var result = CliArgsBuilder.Build(conn);
        StringAssert.Contains(result, "--auth Interactive");
        StringAssert.Contains(result, "--clientid \"cid\"");
    }

    [TestMethod]
    public void Build_Interactive_NoClientId_OmitsClientId()
    {
        var conn = new CrmConnection { Type = "Interactive", Url = "https://x" };
        var result = CliArgsBuilder.Build(conn);
        StringAssert.Contains(result, "--auth Interactive");
        Assert.IsFalse(result.Contains("--clientid"));
    }

    [TestMethod]
    public void Build_DeviceCode_AllArgs()
    {
        var conn = new CrmConnection { Type = "DeviceCode", Url = "https://x", ClientId = "cid" };
        var result = CliArgsBuilder.Build(conn);
        StringAssert.Contains(result, "--auth DeviceCode");
        StringAssert.Contains(result, "--clientid");
    }

    [TestMethod]
    public void Build_DeviceCode_NoClientId_Omits()
    {
        var conn = new CrmConnection { Type = "DeviceCode", Url = "https://x" };
        var result = CliArgsBuilder.Build(conn);
        Assert.IsFalse(result.Contains("--clientid"));
    }

    [TestMethod]
    public void Build_OAuth_AllArgs()
    {
        var conn = new CrmConnection
        {
            Type = "OAuth",
            Url = "https://x",
            UserName = "u",
            Password = "p",
            ClientId = "cid"
        };
        var result = CliArgsBuilder.Build(conn);
        StringAssert.Contains(result, "--auth OAuth");
        StringAssert.Contains(result, "--username");
        StringAssert.Contains(result, "--password");
        StringAssert.Contains(result, "--clientid");
    }

    [TestMethod]
    public void Build_OAuth_NoPassword_Omits()
    {
        var conn = new CrmConnection { Type = "OAuth", Url = "https://x", UserName = "u" };
        var result = CliArgsBuilder.Build(conn);
        Assert.IsFalse(result.Contains("--password"));
    }

    [TestMethod]
    public void Build_OAuth_NoUsername_Omits()
    {
        var conn = new CrmConnection { Type = "OAuth", Url = "https://x", Password = "p" };
        var result = CliArgsBuilder.Build(conn);
        Assert.IsFalse(result.Contains("--username"));
    }

    [TestMethod]
    public void Build_OAuth_NoClientId_Omits()
    {
        var conn = new CrmConnection { Type = "OAuth", Url = "https://x", UserName = "u", Password = "p" };
        var result = CliArgsBuilder.Build(conn);
        Assert.IsFalse(result.Contains("--clientid"));
    }

    [TestMethod]
    public void Build_OAuth_EncryptSecretsTrue()
    {
        var conn = new CrmConnection
        {
            Type = "OAuth",
            Url = "https://x",
            UserName = "u",
            Password = "p"
        };
        var result = CliArgsBuilder.Build(conn, encryptSecrets: true);
        StringAssert.Contains(result, "--password");
    }

    [TestMethod]
    public void Build_FromPac_PacProfile_Used()
    {
        var conn = new CrmConnection { Type = "FromPac", PacProfile = "profile1" };
        var result = CliArgsBuilder.Build(conn);
        Assert.AreEqual("--auth FromPac --pacprofile \"profile1\"", result);
    }

    [TestMethod]
    public void Build_FromPac_PacProfileEmpty_FallbackToUserName()
    {
        var conn = new CrmConnection { Type = "FromPac", UserName = "u1" };
        var result = CliArgsBuilder.Build(conn);
        Assert.AreEqual("--auth FromPac --pacprofile \"u1\"", result);
    }

    [TestMethod]
    public void Build_FromPac_NullProfile_Throws()
    {
        var conn = new CrmConnection { Type = "FromPac" };
        try
        {
            CliArgsBuilder.Build(conn);
            Assert.Fail("Expected ArgumentException");
        }
        catch (ArgumentException) { }
    }

    [TestMethod]
    public void Build_AD_WithDomainInUsername()
    {
        var conn = new CrmConnection
        {
            Type = "AD",
            Url = "https://onprem",
            UserName = "DOMAIN\\user",
            Password = "pw"
        };
        var result = CliArgsBuilder.Build(conn);
        StringAssert.Contains(result, "--auth AD");
        StringAssert.Contains(result, "--domain \"DOMAIN\"");
        StringAssert.Contains(result, "--username \"user\"");
        StringAssert.Contains(result, "--password");
    }

    [TestMethod]
    public void Build_AD_NoDomainInUsername()
    {
        var conn = new CrmConnection
        {
            Type = "AD",
            Url = "https://onprem",
            UserName = "user",
            Password = "pw"
        };
        var result = CliArgsBuilder.Build(conn);
        Assert.IsFalse(result.Contains("--domain"));
        StringAssert.Contains(result, "--username \"user\"");
    }

    [TestMethod]
    public void Build_AD_DomainBackslashFormatWrong_StillIncludes()
    {
        var conn = new CrmConnection
        {
            Type = "AD",
            Url = "https://onprem",
            UserName = "DOMAIN\\user\\extra",
            Password = "pw"
        };
        var result = CliArgsBuilder.Build(conn);
        StringAssert.Contains(result, "--auth AD");
    }

    [TestMethod]
    public void Build_AD_NoPassword_Omits()
    {
        var conn = new CrmConnection { Type = "AD", Url = "https://x", UserName = "u" };
        var result = CliArgsBuilder.Build(conn);
        Assert.IsFalse(result.Contains("--password"));
    }

    [TestMethod]
    public void Build_AD_EncryptSecretsTrue()
    {
        var conn = new CrmConnection
        {
            Type = "AD",
            Url = "https://x",
            UserName = "u",
            Password = "p"
        };
        var result = CliArgsBuilder.Build(conn, encryptSecrets: true);
        StringAssert.Contains(result, "--password");
    }

    [TestMethod]
    public void Build_UnsupportedType_Throws()
    {
        var conn = new CrmConnection { Type = "UnknownType" };
        try
        {
            CliArgsBuilder.Build(conn);
            Assert.Fail("Expected NotSupportedException");
        }
        catch (NotSupportedException) { }
    }

    [TestMethod]
    public void Build_LowerCaseType_Accepted()
    {
        var conn = new CrmConnection { Type = "interactive", Url = "https://x" };
        var result = CliArgsBuilder.Build(conn);
        StringAssert.Contains(result, "--auth Interactive");
    }

    [TestMethod]
    public void Build_NullType_DefaultsToOauth()
    {
        var conn = new CrmConnection { Type = null, Url = "https://x" };
        var result = CliArgsBuilder.Build(conn);
        StringAssert.Contains(result, "--auth OAuth");
    }
}
