using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// The connection factory's full type map (every supported builder, the
/// unknown-type rejection and the retired future-planning shim), the
/// registry's IsRegistered, the DeviceCode callback/static-init members the
/// auth flow only touches mid-flight, and FromPac's profile resolution plus
/// the token-cache loader that reads (or misses) the local PAC CLI cache.
/// The MSAL token acquisition paths need network — unreachable.
/// </summary>
[TestClass]
public sealed class ConnectionBuilderFactoryAndPacCacheTests
{
    // ── ConnectionBuilderFactory ───────────────────────────────────────

    [TestMethod]
    public void GetBuilder_ReturnsTheBuilderForEachSupportedType()
    {
        Assert.IsInstanceOfType(ConnectionBuilderFactory.GetBuilder("Interactive"), typeof(InteractiveConnectionBuilder));
        Assert.IsInstanceOfType(ConnectionBuilderFactory.GetBuilder("interactive"), typeof(InteractiveConnectionBuilder), "the match is case-insensitive.");
        Assert.IsInstanceOfType(ConnectionBuilderFactory.GetBuilder("DeviceCode"), typeof(DeviceCodeConnectionBuilder));
        Assert.IsInstanceOfType(ConnectionBuilderFactory.GetBuilder("OAuth"), typeof(OAuthConnectionBuilder));
        Assert.IsInstanceOfType(ConnectionBuilderFactory.GetBuilder("ClientSecret"), typeof(ClientSecretConnectionBuilder));
        Assert.IsInstanceOfType(ConnectionBuilderFactory.GetBuilder("AD"), typeof(ADConnectionBuilder));
        Assert.IsInstanceOfType(ConnectionBuilderFactory.GetBuilder("FromPac"), typeof(FromPacConnectionBuilder));
    }

    [TestMethod]
    public void GetBuilder_RejectsEmptyAndUnknownTypes()
    {
        Assert.ThrowsExactly<ArgumentNullException>(() => ConnectionBuilderFactory.GetBuilder(null!));
        Assert.ThrowsExactly<ArgumentNullException>(() => ConnectionBuilderFactory.GetBuilder(string.Empty));
        var unknown = Assert.ThrowsExactly<NotSupportedException>(() => ConnectionBuilderFactory.GetBuilder("Certificate"));
        StringAssert.Contains(unknown.Message, "Certificate");
        StringAssert.Contains(unknown.Message, "Supported types: Interactive, DeviceCode, ClientSecret, OAuth, AD, FromPac");
    }

    [TestMethod]
    public void IsSupported_MatchesTheFactoryMap()
    {
        foreach (var type in new[] { "Interactive", "DeviceCode", "OAuth", "ClientSecret", "AD", "FromPac" })
            Assert.IsTrue(ConnectionBuilderFactory.IsSupported(type), type);

        Assert.IsFalse(ConnectionBuilderFactory.IsSupported("Certificate"));
        Assert.IsFalse(ConnectionBuilderFactory.IsSupported(null!));
        Assert.IsFalse(ConnectionBuilderFactory.IsSupported(string.Empty));
    }

    [TestMethod]
    public void GetFuturePlanning_EveryTypeIsImplementedNow()
    {
        var (planned, phase) = ConnectionBuilderFactory.GetFuturePlanning("Interactive");
        Assert.IsFalse(planned);
        Assert.IsNull(phase);
        Assert.IsFalse(ConnectionBuilderFactory.GetFuturePlanning("Whatever").planned);
        Assert.IsFalse(ConnectionBuilderFactory.GetFuturePlanning(null!).planned);
    }

    // ── ConnectionTypeRegistry ─────────────────────────────────────────

    [TestMethod]
    public void IsRegistered_MatchesTheMetadataRegistry()
    {
        foreach (var metadata in ConnectionTypeRegistry.GetSupportedTypes())
            Assert.IsTrue(ConnectionTypeRegistry.IsRegistered(metadata.Type), metadata.Type);

        foreach (var vsixType in ConnectionTypeRegistry.GetSupportedTypes(vsixOnly: true))
            Assert.IsTrue(ConnectionTypeRegistry.IsRegistered(vsixType.Type),
                "every vsix-filtered type is part of the full registry.");

        Assert.IsFalse(ConnectionTypeRegistry.IsRegistered("Certificate"));
        Assert.IsFalse(ConnectionTypeRegistry.IsRegistered(string.Empty));
        Assert.IsNull(ConnectionTypeRegistry.GetMetadata(null!));
    }

    // ── DeviceCode members reached only mid-auth ───────────────────────

    [TestMethod]
    public void DeviceCodeCallback_RoundTripsAndStaticInitializes()
    {
        var builder = new DeviceCodeConnectionBuilder();
        Assert.IsNull(builder.DeviceCodeCallback);
        Action<string> callback = _ => { };
        builder.DeviceCodeCallback = callback;
        Assert.AreSame(callback, builder.DeviceCodeCallback, "the host installs its banner before the flow starts.");

        var timeout = typeof(DeviceCodeConnectionBuilder)
            .GetField("DefaultTimeout", BindingFlags.NonPublic | BindingFlags.Static)!
            .GetValue(null);
        Assert.AreEqual(TimeSpan.FromMinutes(5), timeout, "the static initializer ran.");
    }

    // ── FromPac profile resolution and cache loading ───────────────────

    [TestMethod]
    public async Task FromPac_ValidateAsync_ReportsUnresolvableProfiles()
    {
        var builder = new FromPacConnectionBuilder();
        var (isValid, error) = await builder.ValidateAsync(new CrmConnection { PacProfile = "zz-no-such-profile-zz" });
        Assert.IsFalse(isValid);
        Assert.IsFalse(string.IsNullOrEmpty(error), "either the profiles file or the profile itself is missing.");
    }

    [TestMethod]
    public void FromPac_GetPacProfile_UnknownName_ThrowsWithAvailableList()
    {
        var method = typeof(FromPacConnectionBuilder).GetMethod("GetPacProfile", BindingFlags.NonPublic | BindingFlags.Static)!;
        try
        {
            method.Invoke(null, new object?[] { "zz-no-such-profile-zz" });
            Assert.Fail("an unknown profile cannot resolve.");
        }
        catch (TargetInvocationException ex) when (ex.InnerException is InvalidOperationException or FileNotFoundException)
        {
            var message = ex.InnerException!.Message;
            var fileMissing = message.Contains("profiles file not found");
            var profileMissing = message.Contains("PAC CLI profile 'zz-no-such-profile-zz' not found");
            Assert.IsTrue(fileMissing || profileMissing, message);
            if (profileMissing)
                StringAssert.Contains(message, "Available profiles:", "the resolution error lists what pac offers.");
        }
    }

    [TestMethod]
    public void FromPac_LoadPacCacheAsync_MissingCacheThrows()
    {
        var method = typeof(FromPacConnectionBuilder).GetMethod("LoadPacCacheAsync", BindingFlags.NonPublic | BindingFlags.Static)!;

        var missing = Assert.ThrowsExactly<FileNotFoundException>(
            () => ((Task)method.Invoke(null, new object?[] { "no-such-cache-file.dat" })!).GetAwaiter().GetResult());
        StringAssert.Contains(missing.Message, "PAC CLI token cache not found");

        // Reading the live PAC CLI cache (tokencache_msalv3.dat) is left to
        // real usage: it locks the user's token cache via the MSAL storage
        // helper, so the unit test only pins the deterministic miss.
    }

    [TestMethod]
    public void FromPac_TypeAndConnectionString_AreStable()
    {
        var builder = new FromPacConnectionBuilder();
        Assert.AreEqual("FromPac", builder.Type);
        Assert.AreEqual("AuthType=FromPac;Profile=(active);", builder.BuildConnectionString(new CrmConnection()));
        Assert.AreEqual("AuthType=FromPac;Profile=default;", builder.BuildConnectionString(new CrmConnection { PacProfile = "default" }));
    }
}
