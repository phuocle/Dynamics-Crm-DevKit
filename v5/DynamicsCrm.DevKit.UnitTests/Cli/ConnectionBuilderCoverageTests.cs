using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder.Metadata;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class ConnectionBuilderCoverageTests
{
    [TestMethod]
    public void ConnectionTypeRegistry_ReturnsAllRegisteredMetadata()
    {
        var all = ConnectionTypeRegistry.GetSupportedTypes();
        Assert.IsTrue(all.Count >= 6);

        foreach (var metadata in all)
        {
            Assert.IsFalse(string.IsNullOrWhiteSpace(metadata.Type));
            Assert.IsFalse(string.IsNullOrWhiteSpace(metadata.DisplayName));
            Assert.IsFalse(string.IsNullOrWhiteSpace(metadata.Description));
            Assert.IsTrue(metadata.Fields.All(f => !string.IsNullOrWhiteSpace(f.FieldName)));
            Assert.AreSame(metadata, ConnectionTypeRegistry.GetMetadata(metadata.Type));
            Assert.IsTrue(ConnectionTypeRegistry.IsRegistered(metadata.Type.ToLowerInvariant()));
        }

        var vsixOnly = ConnectionTypeRegistry.GetSupportedTypes(vsixOnly: true);
        Assert.IsTrue(vsixOnly.All(t => t.SupportedInVsix));
        Assert.IsNull(ConnectionTypeRegistry.GetMetadata(null));
        Assert.IsNull(ConnectionTypeRegistry.GetMetadata(""));
        Assert.IsFalse(ConnectionTypeRegistry.IsRegistered("missing"));
    }

    [TestMethod]
    public void ConnectionBuilderFactory_ResolvesKnownBuildersAndRejectsUnknownTypes()
    {
        Assert.IsInstanceOfType(ConnectionBuilderFactory.GetBuilder("Interactive"), typeof(InteractiveConnectionBuilder));
        Assert.IsInstanceOfType(ConnectionBuilderFactory.GetBuilder("devicecode"), typeof(DeviceCodeConnectionBuilder));
        Assert.IsInstanceOfType(ConnectionBuilderFactory.GetBuilder("OAuth"), typeof(OAuthConnectionBuilder));
        Assert.IsInstanceOfType(ConnectionBuilderFactory.GetBuilder("ClientSecret"), typeof(ClientSecretConnectionBuilder));
        Assert.IsInstanceOfType(ConnectionBuilderFactory.GetBuilder("AD"), typeof(ADConnectionBuilder));
        Assert.IsInstanceOfType(ConnectionBuilderFactory.GetBuilder("FromPac"), typeof(FromPacConnectionBuilder));

        Assert.IsTrue(ConnectionBuilderFactory.IsSupported("clientsecret"));
        Assert.IsFalse(ConnectionBuilderFactory.IsSupported(""));
        Assert.IsFalse(ConnectionBuilderFactory.IsSupported("future"));

        try
        {
            ConnectionBuilderFactory.GetBuilder("");
            Assert.Fail("Expected ArgumentNullException was not thrown.");
        }
        catch (ArgumentNullException) { }

        try
        {
            ConnectionBuilderFactory.GetBuilder("future");
            Assert.Fail("Expected NotSupportedException was not thrown.");
        }
        catch (NotSupportedException) { }

        var planning = ConnectionBuilderFactory.GetFuturePlanning("managedidentity");
        Assert.IsFalse(planning.planned);
        Assert.IsNull(planning.phase);
    }

    [TestMethod]
    public async Task ClientSecretConnectionBuilder_ValidatesAndBuildsConnectionStrings()
    {
        var builder = new ClientSecretConnectionBuilder();
        Assert.AreEqual("ClientSecret", builder.Type);

        var connection = new CrmConnection
        {
            Url = "https://contoso.crm.dynamics.com",
            ClientId = "client-id",
            ClientSecret = "secret",
            TenantId = "tenant"
        };

        var connectionString = builder.BuildConnectionString(connection);
        Assert.IsTrue(connectionString.Contains("AuthType=ClientSecret"));
        Assert.IsTrue(connectionString.Contains("ClientId=client-id"));
        Assert.IsTrue(connectionString.Contains("ClientSecret=secret"));
        Assert.IsTrue(connectionString.Contains("TenantId=tenant"));
        Assert.IsTrue(builder.BuildConnectionString(connection, shouldMaskPassword: true).Contains("ClientSecret=***"));

        Assert.IsTrue((await builder.ValidateAsync(connection)).isValid);
        Assert.IsFalse((await builder.ValidateAsync(new CrmConnection())).isValid);
        Assert.IsFalse((await builder.ValidateAsync(new CrmConnection { Url = "https://contoso.crm.dynamics.com", ClientSecret = "secret" })).isValid);
        Assert.IsFalse((await builder.ValidateAsync(new CrmConnection { Url = "https://contoso.crm.dynamics.com", ClientId = "client-id" })).isValid);
        Assert.IsFalse((await builder.ValidateAsync(new CrmConnection { Url = "not a url", ClientId = "client-id", ClientSecret = "secret" })).isValid);

        var legacy = new CrmConnection { Url = connection.Url, UserName = "legacy-id", Password = "legacy-secret" };
        Assert.IsTrue(builder.BuildConnectionString(legacy).Contains("ClientId=legacy-id"));
    }

    [TestMethod]
    public async Task OAuthAndAdConnectionBuilders_ValidateAndMaskPasswords()
    {
        var oauth = new OAuthConnectionBuilder();
        var oauthConnection = new CrmConnection
        {
            Url = "https://contoso.crm.dynamics.com",
            UserName = "user@contoso.com",
            Password = "password"
        };

        Assert.AreEqual("OAuth", oauth.Type);
        Assert.IsTrue(oauth.BuildConnectionString(oauthConnection).Contains("LoginPrompt=Auto"));
        Assert.IsTrue(oauth.BuildConnectionString(oauthConnection, shouldMaskPassword: true).Contains("Password=***"));
        Assert.IsTrue((await oauth.ValidateAsync(oauthConnection)).isValid);
        Assert.IsFalse((await oauth.ValidateAsync(new CrmConnection())).isValid);
        Assert.IsFalse((await oauth.ValidateAsync(new CrmConnection { Url = oauthConnection.Url, Password = "password" })).isValid);
        Assert.IsFalse((await oauth.ValidateAsync(new CrmConnection { Url = oauthConnection.Url, UserName = "user" })).isValid);
        Assert.IsFalse((await oauth.ValidateAsync(new CrmConnection { Url = "not a url", UserName = "user", Password = "password" })).isValid);

        var ad = new ADConnectionBuilder();
        var adConnection = new CrmConnection
        {
            Url = "https://onprem.contoso.local",
            UserName = @"CONTOSO\user",
            Password = "password"
        };

        Assert.AreEqual("AD", ad.Type);
        var adString = ad.BuildConnectionString(adConnection);
        Assert.IsTrue(adString.Contains("Domain=CONTOSO"));
        Assert.IsTrue(adString.Contains("Username=user"));
        Assert.IsTrue(ad.BuildConnectionString(adConnection, shouldMaskPassword: true).Contains("Password=***"));
        Assert.IsTrue((await ad.ValidateAsync(adConnection)).isValid);
        Assert.IsFalse((await ad.ValidateAsync(new CrmConnection())).isValid);
        Assert.IsFalse((await ad.ValidateAsync(new CrmConnection { Url = adConnection.Url, Password = "password" })).isValid);
        Assert.IsFalse((await ad.ValidateAsync(new CrmConnection { Url = adConnection.Url, UserName = "user" })).isValid);
        Assert.IsFalse((await ad.ValidateAsync(new CrmConnection { Url = "not a url", UserName = "user", Password = "password" })).isValid);
    }

    [TestMethod]
    public async Task InteractiveAndDeviceCodeBuilders_ValidateHttpsAndClientIds()
    {
        var valid = new CrmConnection { Url = "https://contoso.crm.dynamics.com" };
        var invalidClient = new CrmConnection { Url = valid.Url, ClientId = "not-a-guid" };
        var http = new CrmConnection { Url = "http://contoso.crm.dynamics.com" };

        var interactive = new InteractiveConnectionBuilder();
        Assert.AreEqual(ConnectionType.Interactive, interactive.Type);
        Assert.IsTrue(interactive.BuildConnectionString(valid).Contains("AuthType=Interactive"));
        Assert.IsTrue((await interactive.ValidateAsync(valid)).isValid);
        Assert.IsFalse((await interactive.ValidateAsync(new CrmConnection())).isValid);
        Assert.IsFalse((await interactive.ValidateAsync(new CrmConnection { Url = "not a url" })).isValid);
        Assert.IsFalse((await interactive.ValidateAsync(http)).isValid);
        Assert.IsFalse((await interactive.ValidateAsync(invalidClient)).isValid);

        var device = new DeviceCodeConnectionBuilder();
        var callbackMessage = "";
        device.DeviceCodeCallback = message => callbackMessage = message;
        device.DeviceCodeCallback("Use code 123");
        Assert.AreEqual("Use code 123", callbackMessage);
        Assert.AreEqual(ConnectionType.DeviceCode, device.Type);
        Assert.IsTrue(device.BuildConnectionString(valid).Contains("AuthType=DeviceCode"));
        Assert.IsTrue((await device.ValidateAsync(valid)).isValid);
        Assert.IsFalse((await device.ValidateAsync(new CrmConnection())).isValid);
        Assert.IsFalse((await device.ValidateAsync(new CrmConnection { Url = "not a url" })).isValid);
        Assert.IsFalse((await device.ValidateAsync(http)).isValid);
        Assert.IsFalse((await device.ValidateAsync(invalidClient)).isValid);
    }

    [TestMethod]
    public async Task FromPacBuilder_ValidatesProfileAndBuildsDiagnosticString()
    {
        var builder = new FromPacConnectionBuilder();
        Assert.AreEqual(ConnectionType.FromPac, builder.Type);
        Assert.AreEqual("AuthType=FromPac;Profile=Default;", builder.BuildConnectionString(new CrmConnection { PacProfile = "Default" }));

        var missing = await builder.ValidateAsync(new CrmConnection());
        Assert.IsFalse(missing.isValid);
        Assert.IsTrue(missing.error.Contains("PAC CLI profile name is required"));

        var notFound = await builder.ValidateAsync(new CrmConnection { PacProfile = $"missing-{Guid.NewGuid():N}" });
        Assert.IsFalse(notFound.isValid);
        Assert.IsFalse(string.IsNullOrWhiteSpace(notFound.error));
    }

    [TestMethod]
    public void ConnectionMetadata_FieldDefinitions_HaveExpectedShape()
    {
        IConnectionTypeMetadata[] metadata =
        [
            new ClientSecretTypeMetadata(),
            new OAuthTypeMetadata(),
            new InteractiveTypeMetadata(),
            new ADTypeMetadata(),
            new DeviceCodeTypeMetadata(),
            new FromPacTypeMetadata()
        ];

        foreach (var item in metadata)
        {
            Assert.IsFalse(string.IsNullOrWhiteSpace(item.Type));
            Assert.IsFalse(string.IsNullOrWhiteSpace(item.DisplayName));
            Assert.IsFalse(string.IsNullOrWhiteSpace(item.Description));
            foreach (var field in item.Fields)
            {
                Assert.IsFalse(string.IsNullOrWhiteSpace(field.FieldName));
                Assert.IsFalse(string.IsNullOrWhiteSpace(field.Label));
                Assert.IsTrue(field.DisplayOrder > 0);
                _ = field.IsRequired;
                _ = field.IsPassword;
                _ = field.Placeholder;
            }
        }
    }
}
