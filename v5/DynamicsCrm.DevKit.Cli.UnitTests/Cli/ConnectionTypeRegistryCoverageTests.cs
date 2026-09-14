using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder.Metadata;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class ConnectionTypeRegistryCoverageTests
{
    [TestMethod]
    public void GetSupportedTypes_All_ReturnsRegisteredTypes()
    {
        var all = ConnectionTypeRegistry.GetSupportedTypes(vsixOnly: false);
        Assert.IsTrue(all.Count >= 6);

        var vsix = ConnectionTypeRegistry.GetSupportedTypes(vsixOnly: true);
        Assert.IsTrue(vsix.Count >= 1);
        Assert.IsTrue(vsix.All(t => t.SupportedInVsix));
    }

    [TestMethod]
    public void GetMetadata_KnownTypes_ReturnsExpectedMetadata()
    {
        var clientSecret = ConnectionTypeRegistry.GetMetadata("ClientSecret");
        Assert.IsNotNull(clientSecret);
        Assert.AreEqual("ClientSecret", clientSecret.Type);
        Assert.IsFalse(string.IsNullOrWhiteSpace(clientSecret.DisplayName));
        Assert.IsFalse(string.IsNullOrWhiteSpace(clientSecret.Description));
        Assert.IsTrue(clientSecret.SupportedInVsix);
        Assert.AreEqual(3, clientSecret.Fields.Count);

        var oauth = ConnectionTypeRegistry.GetMetadata("OAuth");
        Assert.IsNotNull(oauth);
        Assert.AreEqual("OAuth", oauth.Type);
        Assert.AreEqual(3, oauth.Fields.Count);

        var interactive = ConnectionTypeRegistry.GetMetadata("Interactive");
        Assert.IsNotNull(interactive);
        Assert.AreEqual("Interactive", interactive.Type);
        Assert.AreEqual(1, interactive.Fields.Count);

        var ad = ConnectionTypeRegistry.GetMetadata("AD");
        Assert.IsNotNull(ad);
        Assert.AreEqual("AD", ad.Type);
        Assert.AreEqual(3, ad.Fields.Count);

        var deviceCode = ConnectionTypeRegistry.GetMetadata("DeviceCode");
        Assert.IsNotNull(deviceCode);
        Assert.AreEqual("DeviceCode", deviceCode.Type);
        Assert.AreEqual(1, deviceCode.Fields.Count);

        var fromPac = ConnectionTypeRegistry.GetMetadata("FromPac");
        Assert.IsNotNull(fromPac);
        Assert.AreEqual("FromPac", fromPac.Type);
        Assert.AreEqual(0, fromPac.Fields.Count);

        var unknown = ConnectionTypeRegistry.GetMetadata("NoSuchType");
        Assert.IsNull(unknown);
    }

    [TestMethod]
    public void AllMetadataClasses_DirectInstantiation_VerifiesFieldProperties()
    {
        IConnectionTypeMetadata[] list = new IConnectionTypeMetadata[]
        {
            new ClientSecretTypeMetadata(),
            new OAuthTypeMetadata(),
            new InteractiveTypeMetadata(),
            new ADTypeMetadata(),
            new DeviceCodeTypeMetadata(),
            new FromPacTypeMetadata()
        };

        foreach (var meta in list)
        {
            Assert.IsFalse(string.IsNullOrWhiteSpace(meta.Type));
            Assert.IsFalse(string.IsNullOrWhiteSpace(meta.DisplayName));
            Assert.IsFalse(string.IsNullOrWhiteSpace(meta.Description));
            Assert.IsNotNull(meta.Fields);

            foreach (var field in meta.Fields)
            {
                Assert.IsFalse(string.IsNullOrWhiteSpace(field.FieldName));
                Assert.IsFalse(string.IsNullOrWhiteSpace(field.Label));
                Assert.IsTrue(field.DisplayOrder >= 1);
            }
        }
    }
}
