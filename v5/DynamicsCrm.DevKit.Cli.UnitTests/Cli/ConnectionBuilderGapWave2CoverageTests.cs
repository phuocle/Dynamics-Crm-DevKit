using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// Wave-2 gap coverage for the pure ConnectionBuilder surfaces: the
/// connection-timeout static initializers, the DeviceCode callback hook
/// and the remaining ValidateAsync branches of DeviceCode and AD.
///
/// NOTE (MSAL / network — not coverable, per the wave-2 ground rules):
/// - InteractiveConnectionBuilder, DeviceCodeConnectionBuilder.
///   CreateServiceClientAsync/GetTokenWithDeviceCodeAsync (including the
///   device-code display callback body ~102-122), FromPacConnectionBuilder.
///   CreateServiceClientAsync/GetTokenFromPacCacheAsync/
///   TryGetUserTokenFromMsalAsync/GetApplicationTokenFromPacSecretAsync and
///   ClientSecret/OAuth/AD CreateServiceClientAsync all run real MSAL or
///   real ServiceClient connection flows.
/// - FromPacConnectionBuilder.GetPacProfile's file-missing (~46-50),
///   parse-error (~61-64) and empty-profiles (~68-70) guards and
///   PacProfileHelper.GetPacProfiles' file-missing (~72-73) /
///   Profiles-null (~87-88) / parse-error (~107-110) guards read the real
///   %LOCALAPPDATA%\Microsoft\PowerAppsCLI files — the outcomes depend on
///   the machine state (the coverage machine has a valid authprofiles_v2.json)
///   and the known-folder path cannot be redirected from a test.
/// </summary>
[TestClass]
public sealed class ConnectionBuilderGapWave2CoverageTests
{
    [TestMethod]
    public void ConnectionTimeouts_StaticInitializers_Run()
    {
        // Reading the internal static fields forces the cctors.
        Assert.IsTrue(ClientSecretConnectionBuilder.ConnectionTimeout > TimeSpan.Zero);
        Assert.IsTrue(OAuthConnectionBuilder.ConnectionTimeout > TimeSpan.Zero);
        Assert.IsTrue(ADConnectionBuilder.ConnectionTimeout > TimeSpan.Zero);
    }

    [TestMethod]
    public void DeviceCodeCallback_GetterAndSetter_RoundTrip()
    {
        var builder = new DeviceCodeConnectionBuilder();
        Assert.IsNull(builder.DeviceCodeCallback, "no callback is wired by default.");

        string? displayed = null;
        builder.DeviceCodeCallback = message => displayed = message;
        Assert.IsNotNull(builder.DeviceCodeCallback);
        builder.DeviceCodeCallback("enter this code");
        Assert.AreEqual("enter this code", displayed);
    }

    [TestMethod]
    public async Task DeviceCodeConnectionBuilder_ValidateAsync_InvalidUrlFormat()
    {
        var builder = new DeviceCodeConnectionBuilder();
        var (isValid, error) = await builder.ValidateAsync(new CrmConnection { Url = "not a url" });
        Assert.IsFalse(isValid);
        Assert.AreEqual("Invalid URL format", error);
    }

    [TestMethod]
    public async Task ADConnectionBuilder_ValidateAsync_InvalidUrlFormat()
    {
        var builder = new ADConnectionBuilder();
        var (isValid, error) = await builder.ValidateAsync(new CrmConnection
        {
            Url = "not a url",
            UserName = "CORP\\alice",
            Password = "secret",
        });
        Assert.IsFalse(isValid);
        Assert.AreEqual("Invalid URL format: not a url", error);
    }

}
