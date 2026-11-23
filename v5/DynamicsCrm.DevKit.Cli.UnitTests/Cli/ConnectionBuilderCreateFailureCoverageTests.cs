using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// Failure paths of the connection builders' CreateServiceClientAsync: with a
/// shortened ConnectionTimeout and a bogus URL the wait loop deterministically
/// throws "Failed to connect" without touching a live organization.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ConnectionBuilderCreateFailureCoverageTests
{
    private TimeSpan _originalTimeout;

    [TestInitialize]
    public void Setup() => _originalTimeout = ClientSecretConnectionBuilder.ConnectionTimeout;

    [TestCleanup]
    public void Cleanup() => ClientSecretConnectionBuilder.ConnectionTimeout = _originalTimeout;

    [TestMethod]
    public async Task ClientSecret_Bogus_Url_Throws_FailedToConnect()
    {
        ClientSecretConnectionBuilder.ConnectionTimeout = TimeSpan.FromMilliseconds(50);
        var builder = new ClientSecretConnectionBuilder();
        var exception = await Assert.ThrowsExactlyAsync<Microsoft.PowerPlatform.Dataverse.Client.Utils.DataverseConnectionException>(() =>
            builder.CreateServiceClientAsync(new CrmConnection
            {
                Url = "https://no-such-org.invalid",
                ClientId = "00000000-0000-0000-0000-000000000000",
                ClientSecret = "secret"
            }));
        StringAssert.Contains(exception.Message, "Failed to connect");
    }

    [TestMethod]
    public async Task Ad_Bogus_Url_Throws_FailedToConnect()
    {
        ClientSecretConnectionBuilder.ConnectionTimeout = TimeSpan.FromMilliseconds(50);
        var builder = new ADConnectionBuilder();
        var exception = await Assert.ThrowsExactlyAsync<Microsoft.PowerPlatform.Dataverse.Client.Utils.DataverseConnectionException>(() =>
            builder.CreateServiceClientAsync(new CrmConnection
            {
                Url = "https://no-such-onprem.invalid",
                UserName = "CORP\\alice",
                Password = "pwd"
            }));
        StringAssert.Contains(exception.Message, "Failed to connect");
    }

    [TestMethod]
    public async Task OAuth_Bogus_Url_Throws_FailedToConnect()
    {
        ClientSecretConnectionBuilder.ConnectionTimeout = TimeSpan.FromMilliseconds(50);
        var builder = new OAuthConnectionBuilder();
        var exception = await Assert.ThrowsExactlyAsync<Microsoft.PowerPlatform.Dataverse.Client.Utils.DataverseConnectionException>(() =>
            builder.CreateServiceClientAsync(new CrmConnection
            {
                Url = "https://no-such-org.invalid",
                ClientId = "00000000-0000-0000-0000-000000000000",
                UserName = "user@example.invalid",
                Password = "pwd"
            }));
        StringAssert.Contains(exception.Message, "Failed to connect");
    }
}
