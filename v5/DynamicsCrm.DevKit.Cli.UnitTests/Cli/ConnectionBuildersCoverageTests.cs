using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class ConnectionBuildersCoverageTests
{
    [TestMethod]
    public void LegacyConnectionBuilder_ParseConnectionString_CoversAllBranches()
    {
        var parser = new LegacyConnectionBuilder();

        // 1. null or whitespace
        Assert.IsNull(parser.ParseConnectionString(null!));
        Assert.IsNull(parser.ParseConnectionString("   "));

        // 2. AD with separate domain and username
        var adConn = parser.ParseConnectionString("AuthType=AD;Url=https://crm.local;Domain=CORP;Username=alice;Password=secretpass;");
        Assert.IsNotNull(adConn);
        Assert.AreEqual("AD", adConn.Type);
        Assert.AreEqual("https://crm.local", adConn.Url);
        Assert.AreEqual("CORP\\alice", adConn.UserName);

        // 3. ClientSecret auth type
        var csConn = parser.ParseConnectionString("AuthType=ClientSecret;Url=https://org.crm.dynamics.com;ClientId=client-123;ClientSecret=sec-456;");
        Assert.IsNotNull(csConn);
        Assert.AreEqual("ClientSecret", csConn.Type);
        Assert.AreEqual("client-123", csConn.ClientId);
        Assert.IsNull(csConn.UserName);

        // 4. Default to OAuth when auth type omitted, with malformed segment
        var defaultConn = parser.ParseConnectionString("invalid-part-without-equals;Url=https://org.crm.dynamics.com;Username=bob;Password=pass;");
        Assert.IsNotNull(defaultConn);
        Assert.AreEqual("OAuth", defaultConn.Type);
        Assert.AreEqual("bob", defaultConn.UserName);

        // 5. Already encrypted password
        var encryptedPass = Helper.EncryptString("test_password");
        var encryptedConn = parser.ParseConnectionString($"AuthType=OAuth;Url=https://org.crm.dynamics.com;Username=bob;Password={encryptedPass};");
        Assert.IsNotNull(encryptedConn);
        Assert.AreEqual(encryptedPass, encryptedConn.Password);
    }

    [TestMethod]
    public async Task InteractiveConnectionBuilder_CoversValidateAndBuild()
    {
        var builder = new InteractiveConnectionBuilder();
        Assert.AreEqual(ConnectionType.Interactive, builder.Type);

        // BuildConnectionString
        var defaultStr = builder.BuildConnectionString(new CrmConnection { Url = "https://test.crm.dynamics.com" });
        StringAssert.Contains(defaultStr, "AuthType=Interactive");
        StringAssert.Contains(defaultStr, "51f81489-12ee-4a9e-aaae-a2591f45987d");

        var customGuid = Guid.NewGuid().ToString();
        var customStr = builder.BuildConnectionString(new CrmConnection { Url = "https://test.crm.dynamics.com", ClientId = customGuid });
        StringAssert.Contains(customStr, customGuid);

        // ValidateAsync
        var (v1, e1) = await builder.ValidateAsync(new CrmConnection { Url = null! });
        Assert.IsFalse(v1);
        Assert.AreEqual("URL is required", e1);

        var (v2, e2) = await builder.ValidateAsync(new CrmConnection { Url = "not a valid url" });
        Assert.IsFalse(v2);
        Assert.AreEqual("Invalid URL format", e2);

        var (v3, e3) = await builder.ValidateAsync(new CrmConnection { Url = "http://insecure.crm.dynamics.com" });
        Assert.IsFalse(v3);
        Assert.AreEqual("URL must use HTTPS", e3);

        var (v4, e4) = await builder.ValidateAsync(new CrmConnection { Url = "https://test.crm.dynamics.com", ClientId = "not-a-guid" });
        Assert.IsFalse(v4);
        Assert.AreEqual("ClientId must be a valid GUID", e4);

        var (v5, e5) = await builder.ValidateAsync(new CrmConnection { Url = "https://test.crm.dynamics.com", ClientId = Guid.NewGuid().ToString() });
        Assert.IsTrue(v5);
        Assert.IsNull(e5);
    }

    [TestMethod]
    public async Task DeviceCodeConnectionBuilder_CoversValidateAndBuild()
    {
        var builder = new DeviceCodeConnectionBuilder();
        Assert.AreEqual(ConnectionType.DeviceCode, builder.Type);

        // BuildConnectionString
        var defaultStr = builder.BuildConnectionString(new CrmConnection { Url = "https://test.crm.dynamics.com" });
        StringAssert.Contains(defaultStr, "AuthType=DeviceCode");

        var customGuid = Guid.NewGuid().ToString();
        var customStr = builder.BuildConnectionString(new CrmConnection { Url = "https://test.crm.dynamics.com", ClientId = customGuid });
        StringAssert.Contains(customStr, customGuid);

        // ValidateAsync
        var (v1, e1) = await builder.ValidateAsync(new CrmConnection { Url = "" });
        Assert.IsFalse(v1);
        Assert.AreEqual("URL is required", e1);

        var (v2, e2) = await builder.ValidateAsync(new CrmConnection { Url = "http://insecure.url" });
        Assert.IsFalse(v2);
        Assert.AreEqual("URL must use HTTPS", e2);

        var (v3, e3) = await builder.ValidateAsync(new CrmConnection { Url = "https://test.crm.dynamics.com", ClientId = "invalid-guid" });
        Assert.IsFalse(v3);
        Assert.AreEqual("ClientId must be a valid GUID", e3);

        var (v4, e4) = await builder.ValidateAsync(new CrmConnection { Url = "https://test.crm.dynamics.com", ClientId = Guid.NewGuid().ToString() });
        Assert.IsTrue(v4);
        Assert.IsNull(e4);
    }
}
