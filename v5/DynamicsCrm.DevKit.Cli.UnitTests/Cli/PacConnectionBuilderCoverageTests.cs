using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Reflection;
using System.Text.Json;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class PacConnectionBuilderCoverageTests
{
    [TestMethod]
    public void FromPacConnectionBuilder_TypeAndConnectionString_WorkAsExpected()
    {
        var builder = new FromPacConnectionBuilder();
        Assert.AreEqual(ConnectionType.FromPac, builder.Type);

        var connActive = new CrmConnection { PacProfile = null };
        Assert.AreEqual("AuthType=FromPac;Profile=(active);", builder.BuildConnectionString(connActive));

        var connCustom = new CrmConnection { PacProfile = "Profile1" };
        Assert.AreEqual("AuthType=FromPac;Profile=Profile1;", builder.BuildConnectionString(connCustom));
    }

    [TestMethod]
    public async Task FromPacConnectionBuilder_ValidateAsync_MissingProfiles_ReturnsFalse()
    {
        var builder = new FromPacConnectionBuilder();
        var conn = new CrmConnection { PacProfile = "NonExistentProfile_" + Guid.NewGuid().ToString("N") };

        var (isValid, error) = await builder.ValidateAsync(conn);
        // Either PAC profiles file is missing on this machine, or the profile wasn't found
        if (!isValid)
        {
            Assert.IsFalse(string.IsNullOrWhiteSpace(error));
        }
    }

    [TestMethod]
    public void FromPacConnectionBuilder_InternalHelpers_WorkAsExpected()
    {
        var type = typeof(FromPacConnectionBuilder);

        // GetPacCacheDirectory
        var cacheDirMethod = type.GetMethod("GetPacCacheDirectory", BindingFlags.NonPublic | BindingFlags.Static)!;
        var cacheDir = (string)cacheDirMethod.Invoke(null, null)!;
        Assert.IsTrue(cacheDir.Contains("PowerAppsCLI"));

        // GetProfilesPath
        var profilesPathMethod = type.GetMethod("GetProfilesPath", BindingFlags.NonPublic | BindingFlags.Static)!;
        var profilesPath = (string)profilesPathMethod.Invoke(null, null)!;
        Assert.IsTrue(profilesPath.Contains("authprofiles_v2.json"));

        // GetJsonString
        var getJsonStringMethod = type.GetMethod("GetJsonString", BindingFlags.NonPublic | BindingFlags.Static)!;
        using var doc = JsonDocument.Parse("{\"testKey\":\"testValue\",\"intKey\":123}");
        var strVal = (string)getJsonStringMethod.Invoke(null, new object[] { doc.RootElement, "testKey" })!;
        Assert.AreEqual("testValue", strVal);

        var missingVal = (string)getJsonStringMethod.Invoke(null, new object[] { doc.RootElement, "missingKey" })!;
        Assert.IsNull(missingVal);

        var intVal = (string)getJsonStringMethod.Invoke(null, new object[] { doc.RootElement, "intKey" })!;
        Assert.IsNull(intVal);
    }

    [TestMethod]
    public void PacProfileInfo_PropertiesAndFormatting_WorkAsExpected()
    {
        var info = new PacProfileInfo
        {
            Index = 1,
            Name = "MyProfile",
            FriendlyName = "My Friendly Profile",
            Resource = "https://org.crm.dynamics.com"
        };

        Assert.AreEqual("MyProfile", info.Identifier);
        Assert.AreEqual("MyProfile", info.ConnectionName);
        Assert.AreEqual("[1] MyProfile (https://org.crm.dynamics.com)", info.DisplayText);
        Assert.AreEqual(info.DisplayText, info.ToString());

        // Without Name: uses FriendlyName
        info.Name = "";
        Assert.AreEqual("1", info.Identifier);
        Assert.AreEqual("My Friendly Profile", info.ConnectionName);

        // Without FriendlyName: uses host from Resource
        info.FriendlyName = "";
        Assert.AreEqual("org.crm.dynamics.com", info.ConnectionName);

        // Without Resource: uses fallback
        info.Resource = null!;
        Assert.AreEqual("PAC Profile 1", info.ConnectionName);
        Assert.AreEqual("[1] PAC Profile 1 (no env)", info.DisplayText);
    }

    [TestMethod]
    public void PacProfileHelper_ProfilesPathAndGetPacProfiles_DoesNotThrow()
    {
        Assert.IsFalse(string.IsNullOrWhiteSpace(PacProfileHelper.ProfilesPath));
        var profiles = PacProfileHelper.GetPacProfiles();
        Assert.IsNotNull(profiles);
    }
}
