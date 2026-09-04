using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class CliArgsBuilderCoverageTests
{
    [TestMethod]
    public void Build_Null_Empty()
    {
        Assert.AreEqual(string.Empty, CliArgsBuilder.Build(null));
    }

    [TestMethod]
    public void Build_UseProjectEnvironment_Empty()
    {
        var c = new CrmConnection { Type = "ClientSecret", UseProjectEnvironment = true };
        Assert.AreEqual(string.Empty, CliArgsBuilder.Build(c));
    }

    [TestMethod]
    public void Build_ClientSecret_Basic()
    {
        var c = new CrmConnection
        {
            Type = "ClientSecret",
            Url = "https://x.crm.dynamics.com",
            ClientId = "cid",
            ClientSecret = "csecret"
        };
        var result = CliArgsBuilder.Build(c);
        StringAssert.Contains(result, "--auth ClientSecret");
        StringAssert.Contains(result, "--url");
        StringAssert.Contains(result, "--clientid");
        StringAssert.Contains(result, "--clientsecret");
    }

    [TestMethod]
    public void Build_ClientSecret_FallbackUsername()
    {
        var c = new CrmConnection
        {
            Type = "ClientSecret",
            Url = "https://x",
            UserName = "u",
            Password = "p"
        };
        var result = CliArgsBuilder.Build(c);
        StringAssert.Contains(result, "--clientid \"u\"");
        StringAssert.Contains(result, "--clientsecret \"p\"");
    }

    [TestMethod]
    public void Build_ClientSecret_EncryptSecrets()
    {
        var c = new CrmConnection
        {
            Type = "ClientSecret",
            Url = "https://x",
            ClientId = "cid",
            ClientSecret = "secret123"
        };
        var result = CliArgsBuilder.Build(c, true);
        StringAssert.Contains(result, "--clientsecret");
        Assert.IsFalse(result.Contains("secret123"), "expected to be encrypted");
    }

    [TestMethod]
    public void Build_Interactive_WithClientId()
    {
        var c = new CrmConnection
        {
            Type = "Interactive",
            Url = "https://x",
            ClientId = "icid"
        };
        var result = CliArgsBuilder.Build(c);
        StringAssert.Contains(result, "--auth Interactive");
        StringAssert.Contains(result, "--clientid \"icid\"");
    }

    [TestMethod]
    public void Build_Interactive_NoClientId()
    {
        var c = new CrmConnection
        {
            Type = "Interactive",
            Url = "https://x"
        };
        var result = CliArgsBuilder.Build(c);
        StringAssert.Contains(result, "--auth Interactive");
        Assert.IsFalse(result.Contains("--clientid"));
    }

    [TestMethod]
    public void Build_DeviceCode_WithClientId()
    {
        var c = new CrmConnection
        {
            Type = "DeviceCode",
            Url = "https://x",
            ClientId = "dcid"
        };
        var result = CliArgsBuilder.Build(c);
        StringAssert.Contains(result, "--auth DeviceCode");
        StringAssert.Contains(result, "--clientid \"dcid\"");
    }

    [TestMethod]
    public void Build_DeviceCode_NoClientId()
    {
        var c = new CrmConnection
        {
            Type = "DeviceCode",
            Url = "https://x"
        };
        var result = CliArgsBuilder.Build(c);
        StringAssert.Contains(result, "--auth DeviceCode");
        Assert.IsFalse(result.Contains("--clientid"));
    }

    [TestMethod]
    public void Build_FromPac_WithProfile()
    {
        var c = new CrmConnection { Type = "FromPac", PacProfile = "myprof" };
        var result = CliArgsBuilder.Build(c);
        StringAssert.Contains(result, "--auth FromPac");
        StringAssert.Contains(result, "--pacprofile \"myprof\"");
    }

    [TestMethod]
    public void Build_FromPac_FallbackToUserName()
    {
        var c = new CrmConnection { Type = "FromPac", UserName = "fallbackprofile" };
        var result = CliArgsBuilder.Build(c);
        StringAssert.Contains(result, "fallbackprofile");
    }

    [TestMethod]
    public void Build_FromPac_NoProfile_Throws()
    {
        var c = new CrmConnection { Type = "FromPac" };
        try { CliArgsBuilder.Build(c); Assert.Fail("expected"); }
        catch (ArgumentException) { }
    }

    [TestMethod]
    public void Build_OAuth_Basic()
    {
        var c = new CrmConnection
        {
            Type = "OAuth",
            Url = "https://x",
            UserName = "u@x.com",
            Password = "p",
            ClientId = "cid"
        };
        var result = CliArgsBuilder.Build(c);
        StringAssert.Contains(result, "--auth OAuth");
        StringAssert.Contains(result, "--username \"u@x.com\"");
        StringAssert.Contains(result, "--password \"p\"");
        StringAssert.Contains(result, "--clientid \"cid\"");
    }

    [TestMethod]
    public void Build_OAuth_Encrypt()
    {
        var c = new CrmConnection
        {
            Type = "OAuth",
            Url = "https://x",
            UserName = "u",
            Password = "myplaintext"
        };
        var result = CliArgsBuilder.Build(c, true);
        Assert.IsFalse(result.Contains("myplaintext"));
    }

    [TestMethod]
    public void Build_OAuth_NoPassword()
    {
        var c = new CrmConnection
        {
            Type = "OAuth",
            Url = "https://x",
            UserName = "u"
        };
        var result = CliArgsBuilder.Build(c);
        StringAssert.Contains(result, "--username \"u\"");
        Assert.IsFalse(result.Contains("--password"));
    }

    [TestMethod]
    public void Build_AD_WithDomain()
    {
        var c = new CrmConnection
        {
            Type = "AD",
            Url = "https://x",
            UserName = "DOMAIN\\user",
            Password = "p"
        };
        var result = CliArgsBuilder.Build(c);
        StringAssert.Contains(result, "--auth AD");
        StringAssert.Contains(result, "--domain \"DOMAIN\"");
        StringAssert.Contains(result, "--username \"user\"");
        StringAssert.Contains(result, "--password \"p\"");
    }

    [TestMethod]
    public void Build_AD_NoDomain()
    {
        var c = new CrmConnection
        {
            Type = "AD",
            Url = "https://x",
            UserName = "user",
            Password = "p"
        };
        var result = CliArgsBuilder.Build(c);
        StringAssert.Contains(result, "--auth AD");
        StringAssert.Contains(result, "--username \"user\"");
    }

    [TestMethod]
    public void Build_AD_Encrypt()
    {
        var c = new CrmConnection
        {
            Type = "AD",
            Url = "https://x",
            UserName = "DOMAIN\\user",
            Password = "plainpwd"
        };
        var result = CliArgsBuilder.Build(c, true);
        Assert.IsFalse(result.Contains("plainpwd"));
    }

    [TestMethod]
    public void Build_UnknownType_Throws()
    {
        var c = new CrmConnection { Type = "Unknown" };
        try { CliArgsBuilder.Build(c); Assert.Fail("expected"); }
        catch (NotSupportedException) { }
    }
}
