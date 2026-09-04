using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class ConnectionBuilderCoverageTests
{
    private static CrmConnection MakeConnection(string type = "ClientSecret") => new()
    {
        Type = type,
        Url = "https://x.crm.dynamics.com",
        ClientId = "cid",
        ClientSecret = "plain-secret",
        UserName = "DOMAIN\\user",
        Password = "plain-pwd",
        TenantId = "tid",
        PacProfile = "myprof"
    };

    [TestMethod]
    public void ClientSecret_Type()
    {
        Assert.AreEqual("ClientSecret", new ClientSecretConnectionBuilder().Type);
    }

    [TestMethod]
    public void ClientSecret_BuildConnectionString()
    {
        var b = new ClientSecretConnectionBuilder();
        var s = b.BuildConnectionString(MakeConnection());
        StringAssert.Contains(s, "AuthType=ClientSecret");
        StringAssert.Contains(s, "Url=https://x.crm.dynamics.com");
        StringAssert.Contains(s, "ClientId=cid");
        StringAssert.Contains(s, "TenantId=tid");
    }

    [TestMethod]
    public void ClientSecret_BuildConnectionString_Mask()
    {
        var b = new ClientSecretConnectionBuilder();
        var s = b.BuildConnectionString(MakeConnection(), true);
        StringAssert.Contains(s, "ClientSecret=***");
    }

    [TestMethod]
    public void ClientSecret_BuildConnectionString_LegacyFallback()
    {
        var c = new CrmConnection
        {
            Type = "ClientSecret",
            Url = "https://x",
            UserName = "u",
            Password = "p"
        };
        var s = new ClientSecretConnectionBuilder().BuildConnectionString(c);
        StringAssert.Contains(s, "ClientId=u");
        StringAssert.Contains(s, "ClientSecret=p");
    }

    [TestMethod]
    public async Task ClientSecret_Validate_OK()
    {
        var (ok, err) = await new ClientSecretConnectionBuilder().ValidateAsync(MakeConnection());
        Assert.IsTrue(ok);
        Assert.IsNull(err);
    }

    [TestMethod]
    public async Task ClientSecret_Validate_MissingUrl()
    {
        var c = MakeConnection(); c.Url = "";
        var (ok, err) = await new ClientSecretConnectionBuilder().ValidateAsync(c);
        Assert.IsFalse(ok);
        StringAssert.Contains(err, "URL");
    }

    [TestMethod]
    public async Task ClientSecret_Validate_MissingClientId()
    {
        var c = new CrmConnection { Type = "ClientSecret", Url = "https://x" };
        var (ok, err) = await new ClientSecretConnectionBuilder().ValidateAsync(c);
        Assert.IsFalse(ok);
        StringAssert.Contains(err, "ClientId");
    }

    [TestMethod]
    public async Task ClientSecret_Validate_MissingSecret()
    {
        var c = new CrmConnection { Type = "ClientSecret", Url = "https://x", ClientId = "c" };
        var (ok, err) = await new ClientSecretConnectionBuilder().ValidateAsync(c);
        Assert.IsFalse(ok);
        StringAssert.Contains(err, "ClientSecret");
    }

    [TestMethod]
    public async Task ClientSecret_Validate_BadUrl()
    {
        var c = MakeConnection(); c.Url = "not-a-url";
        var (ok, err) = await new ClientSecretConnectionBuilder().ValidateAsync(c);
        Assert.IsFalse(ok);
    }

    [TestMethod]
    public void AD_Type()
    {
        Assert.AreEqual("AD", new ADConnectionBuilder().Type);
    }

    [TestMethod]
    public void AD_BuildConnectionString()
    {
        var s = new ADConnectionBuilder().BuildConnectionString(MakeConnection("AD"));
        StringAssert.Contains(s, "AuthType=AD");
        StringAssert.Contains(s, "Domain=DOMAIN");
        StringAssert.Contains(s, "Username=user");
    }

    [TestMethod]
    public void AD_BuildConnectionString_NoDomain()
    {
        var c = new CrmConnection { Type = "AD", Url = "https://x", UserName = "user", Password = "p" };
        var s = new ADConnectionBuilder().BuildConnectionString(c);
        StringAssert.Contains(s, "Username=user");
        Assert.IsFalse(s.Contains("Domain="));
    }

    [TestMethod]
    public void AD_BuildConnectionString_Mask()
    {
        var s = new ADConnectionBuilder().BuildConnectionString(MakeConnection("AD"), true);
        StringAssert.Contains(s, "Password=***");
    }

    [TestMethod]
    public async Task AD_Validate_OK()
    {
        var (ok, err) = await new ADConnectionBuilder().ValidateAsync(MakeConnection("AD"));
        Assert.IsTrue(ok);
        Assert.IsNull(err);
    }

    [TestMethod]
    public async Task AD_Validate_MissingUrl()
    {
        var c = MakeConnection("AD"); c.Url = "";
        var (ok, err) = await new ADConnectionBuilder().ValidateAsync(c);
        Assert.IsFalse(ok);
    }

    [TestMethod]
    public async Task AD_Validate_MissingUser()
    {
        var c = new CrmConnection { Type = "AD", Url = "https://x", Password = "p" };
        var (ok, err) = await new ADConnectionBuilder().ValidateAsync(c);
        Assert.IsFalse(ok);
    }

    [TestMethod]
    public async Task AD_Validate_MissingPassword()
    {
        var c = new CrmConnection { Type = "AD", Url = "https://x", UserName = "u" };
        var (ok, err) = await new ADConnectionBuilder().ValidateAsync(c);
        Assert.IsFalse(ok);
    }

    [TestMethod]
    public void OAuth_Type()
    {
        Assert.AreEqual("OAuth", new OAuthConnectionBuilder().Type);
    }

    [TestMethod]
    public void OAuth_BuildConnectionString_WithClientId()
    {
        var c = MakeConnection("OAuth");
        c.UserName = "u";
        c.Password = "p";
        var s = new OAuthConnectionBuilder().BuildConnectionString(c);
        StringAssert.Contains(s, "AuthType=OAuth");
        StringAssert.Contains(s, "Username=u");
        StringAssert.Contains(s, "AppId=cid");
    }

    [TestMethod]
    public void OAuth_BuildConnectionString_DefaultAppId()
    {
        var c = new CrmConnection { Type = "OAuth", Url = "https://x", UserName = "u", Password = "p" };
        var s = new OAuthConnectionBuilder().BuildConnectionString(c);
        StringAssert.Contains(s, "AppId=51f81489-12ee-4a9e-aaae-a2591f45987d");
    }

    [TestMethod]
    public void OAuth_BuildConnectionString_Mask()
    {
        var c = new CrmConnection { Type = "OAuth", Url = "https://x", UserName = "u", Password = "p" };
        var s = new OAuthConnectionBuilder().BuildConnectionString(c, true);
        StringAssert.Contains(s, "Password=***");
    }

    [TestMethod]
    public async Task OAuth_Validate_OK()
    {
        var c = new CrmConnection { Type = "OAuth", Url = "https://x", UserName = "u", Password = "p" };
        var (ok, _) = await new OAuthConnectionBuilder().ValidateAsync(c);
        Assert.IsTrue(ok);
    }

    [TestMethod]
    public async Task OAuth_Validate_MissingUrl()
    {
        var c = new CrmConnection { Type = "OAuth", UserName = "u", Password = "p" };
        var (ok, _) = await new OAuthConnectionBuilder().ValidateAsync(c);
        Assert.IsFalse(ok);
    }

    [TestMethod]
    public async Task OAuth_Validate_MissingUser()
    {
        var c = new CrmConnection { Type = "OAuth", Url = "https://x", Password = "p" };
        var (ok, _) = await new OAuthConnectionBuilder().ValidateAsync(c);
        Assert.IsFalse(ok);
    }

    [TestMethod]
    public async Task OAuth_Validate_MissingPassword()
    {
        var c = new CrmConnection { Type = "OAuth", Url = "https://x", UserName = "u" };
        var (ok, _) = await new OAuthConnectionBuilder().ValidateAsync(c);
        Assert.IsFalse(ok);
    }

    [TestMethod]
    public async Task OAuth_Validate_BadUrl()
    {
        var c = new CrmConnection { Type = "OAuth", Url = "bad", UserName = "u", Password = "p" };
        var (ok, _) = await new OAuthConnectionBuilder().ValidateAsync(c);
        Assert.IsFalse(ok);
    }

    [TestMethod]
    public void DeviceCode_Type()
    {
        Assert.AreEqual("DeviceCode", new DeviceCodeConnectionBuilder().Type);
    }

    [TestMethod]
    public void DeviceCode_BuildConnectionString_DefaultClientId()
    {
        var c = new CrmConnection { Type = "DeviceCode", Url = "https://x" };
        var s = new DeviceCodeConnectionBuilder().BuildConnectionString(c);
        StringAssert.Contains(s, "ClientId=51f81489-12ee-4a9e-aaae-a2591f45987d");
    }

    [TestMethod]
    public void DeviceCode_BuildConnectionString_CustomClientId()
    {
        var c = new CrmConnection { Type = "DeviceCode", Url = "https://x", ClientId = "mycid" };
        var s = new DeviceCodeConnectionBuilder().BuildConnectionString(c);
        StringAssert.Contains(s, "ClientId=mycid");
    }

    [TestMethod]
    public async Task DeviceCode_Validate_OK()
    {
        var c = new CrmConnection { Type = "DeviceCode", Url = "https://x" };
        var (ok, _) = await new DeviceCodeConnectionBuilder().ValidateAsync(c);
        Assert.IsTrue(ok);
    }

    [TestMethod]
    public async Task DeviceCode_Validate_MissingUrl()
    {
        var c = new CrmConnection { Type = "DeviceCode" };
        var (ok, _) = await new DeviceCodeConnectionBuilder().ValidateAsync(c);
        Assert.IsFalse(ok);
    }

    [TestMethod]
    public async Task DeviceCode_Validate_NonHttps()
    {
        var c = new CrmConnection { Type = "DeviceCode", Url = "http://x" };
        var (ok, _) = await new DeviceCodeConnectionBuilder().ValidateAsync(c);
        Assert.IsFalse(ok);
    }

    [TestMethod]
    public async Task DeviceCode_Validate_BadClientId()
    {
        var c = new CrmConnection { Type = "DeviceCode", Url = "https://x", ClientId = "not-a-guid" };
        var (ok, _) = await new DeviceCodeConnectionBuilder().ValidateAsync(c);
        Assert.IsFalse(ok);
    }

    [TestMethod]
    public void Interactive_Type()
    {
        Assert.AreEqual("Interactive", new InteractiveConnectionBuilder().Type);
    }

    [TestMethod]
    public void Interactive_BuildConnectionString_DefaultClientId()
    {
        var c = new CrmConnection { Type = "Interactive", Url = "https://x" };
        var s = new InteractiveConnectionBuilder().BuildConnectionString(c);
        StringAssert.Contains(s, "ClientId=51f81489-12ee-4a9e-aaae-a2591f45987d");
    }

    [TestMethod]
    public void Interactive_BuildConnectionString_CustomClientId()
    {
        var c = new CrmConnection { Type = "Interactive", Url = "https://x", ClientId = "mycid" };
        var s = new InteractiveConnectionBuilder().BuildConnectionString(c);
        StringAssert.Contains(s, "ClientId=mycid");
    }

    [TestMethod]
    public async Task Interactive_Validate_OK()
    {
        var c = new CrmConnection { Type = "Interactive", Url = "https://x" };
        var (ok, _) = await new InteractiveConnectionBuilder().ValidateAsync(c);
        Assert.IsTrue(ok);
    }

    [TestMethod]
    public async Task Interactive_Validate_MissingUrl()
    {
        var c = new CrmConnection { Type = "Interactive" };
        var (ok, _) = await new InteractiveConnectionBuilder().ValidateAsync(c);
        Assert.IsFalse(ok);
    }

    [TestMethod]
    public async Task Interactive_Validate_NonHttps()
    {
        var c = new CrmConnection { Type = "Interactive", Url = "http://x" };
        var (ok, _) = await new InteractiveConnectionBuilder().ValidateAsync(c);
        Assert.IsFalse(ok);
    }

    [TestMethod]
    public async Task Interactive_Validate_BadClientId()
    {
        var c = new CrmConnection { Type = "Interactive", Url = "https://x", ClientId = "not-a-guid" };
        var (ok, _) = await new InteractiveConnectionBuilder().ValidateAsync(c);
        Assert.IsFalse(ok);
    }
}
