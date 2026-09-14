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
public sealed class FromPacConnectionBuilderCoverageTests
{
    private static readonly BindingFlags StaticPrivate = BindingFlags.NonPublic | BindingFlags.Static;

    [TestMethod]
    public void FromPacConnectionBuilder_Type_ReturnsFromPac()
    {
        var builder = new FromPacConnectionBuilder();
        Assert.AreEqual(ConnectionType.FromPac, builder.Type);
    }

    [TestMethod]
    public void BuildConnectionString_HandlesActiveAndNamedProfile()
    {
        var builder = new FromPacConnectionBuilder();
        var active = builder.BuildConnectionString(new CrmConnection { PacProfile = null });
        Assert.AreEqual("AuthType=FromPac;Profile=(active);", active);

        var empty = builder.BuildConnectionString(new CrmConnection { PacProfile = "   " });
        Assert.AreEqual("AuthType=FromPac;Profile=(active);", empty);

        var named = builder.BuildConnectionString(new CrmConnection { PacProfile = "DEV_ENV" });
        Assert.AreEqual("AuthType=FromPac;Profile=DEV_ENV;", named);
    }

    [TestMethod]
    public async Task ValidateAsync_ReturnsFalseWhenProfilesFileNotFound()
    {
        var builder = new FromPacConnectionBuilder();
        // If file doesn't exist or profile doesn't exist, ValidateAsync catches exception and returns (false, error)
        var result = await builder.ValidateAsync(new CrmConnection { PacProfile = "non_existent_profile_999999" });
        Assert.IsFalse(result.isValid);
        Assert.IsNotNull(result.error);
    }

    [TestMethod]
    public void PacProfileInfo_PropertiesFormatCorrectly()
    {
        var info1 = new PacProfileInfo
        {
            Index = 1,
            Name = "MyProfile",
            FriendlyName = "My Org",
            Resource = "https://org.crm.dynamics.com"
        };
        Assert.AreEqual("MyProfile", info1.Identifier);
        Assert.AreEqual("MyProfile", info1.ConnectionName);
        Assert.AreEqual("[1] MyProfile (https://org.crm.dynamics.com)", info1.DisplayText);
        Assert.AreEqual("[1] MyProfile (https://org.crm.dynamics.com)", info1.ToString());

        var info2 = new PacProfileInfo
        {
            Index = 2,
            Name = null!,
            FriendlyName = "FriendlyOrg",
            Resource = "https://org2.crm.dynamics.com"
        };
        Assert.AreEqual("2", info2.Identifier);
        Assert.AreEqual("FriendlyOrg", info2.ConnectionName);
        Assert.AreEqual("[2] FriendlyOrg (https://org2.crm.dynamics.com)", info2.DisplayText);

        var info3 = new PacProfileInfo
        {
            Index = 3,
            Name = "",
            FriendlyName = "",
            Resource = "https://org3.crm.dynamics.com"
        };
        Assert.AreEqual("org3.crm.dynamics.com", info3.ConnectionName);

        var info4 = new PacProfileInfo
        {
            Index = 4,
            Name = null!,
            FriendlyName = null!,
            Resource = null!
        };
        Assert.AreEqual("PAC Profile 4", info4.ConnectionName);
        Assert.AreEqual("[4] PAC Profile 4 (no env)", info4.DisplayText);
    }

    [TestMethod]
    public void PacProfileHelper_MethodsExecuteWithoutThrowing()
    {
        var path = PacProfileHelper.ProfilesPath;
        Assert.IsFalse(string.IsNullOrWhiteSpace(path));

        var hasProfiles = PacProfileHelper.HasPacProfiles();
        var profiles = PacProfileHelper.GetPacProfiles();
        Assert.IsNotNull(profiles);
        if (!hasProfiles)
        {
            Assert.AreEqual(0, profiles.Count);
        }
    }

    [TestMethod]
    public void GetJsonString_HandlesStringAndNonString()
    {
        var method = typeof(FromPacConnectionBuilder).GetMethod("GetJsonString", StaticPrivate);
        Assert.IsNotNull(method);

        using var doc = JsonDocument.Parse("{\"str\":\"hello\",\"num\":123,\"nullVal\":null}");
        var root = doc.RootElement;

        var strVal = (string?)method.Invoke(null, [root, "str"]);
        Assert.AreEqual("hello", strVal);

        var numVal = (string?)method.Invoke(null, [root, "num"]);
        Assert.IsNull(numVal);

        var missingVal = (string?)method.Invoke(null, [root, "missing"]);
        Assert.IsNull(missingVal);
    }

    [TestMethod]
    public void GetHomeAccountId_FindsMatchingAccount()
    {
        var method = typeof(FromPacConnectionBuilder).GetMethod("GetHomeAccountId", StaticPrivate);
        Assert.IsNotNull(method);

        var pacProfileDataType = typeof(FromPacConnectionBuilder).GetNestedType("PacProfileData", BindingFlags.NonPublic);
        Assert.IsNotNull(pacProfileDataType);

        var profileData = Activator.CreateInstance(pacProfileDataType)!;
        pacProfileDataType.GetProperty("User")!.SetValue(profileData, "user@test.com");
        pacProfileDataType.GetProperty("TenantId")!.SetValue(profileData, "tenant-123");

        var json = @"{
            ""Account"": {
                ""acc1"": {
                    ""username"": ""other@test.com"",
                    ""realm"": ""tenant-123"",
                    ""home_account_id"": ""id1""
                },
                ""acc2"": {
                    ""username"": ""user@test.com"",
                    ""realm"": ""tenant-123"",
                    ""home_account_id"": ""id2""
                }
            }
        }";
        using var doc = JsonDocument.Parse(json);
        var result = (string?)method.Invoke(null, [doc, profileData]);
        Assert.AreEqual("id2", result);

        // Test without Account property
        using var emptyDoc = JsonDocument.Parse("{}");
        var emptyResult = (string?)method.Invoke(null, [emptyDoc, profileData]);
        Assert.IsNull(emptyResult);

        // Test non-matching user
        pacProfileDataType.GetProperty("User")!.SetValue(profileData, "nobody@test.com");
        var noMatchResult = (string?)method.Invoke(null, [doc, profileData]);
        Assert.IsNull(noMatchResult);
    }

    [TestMethod]
    public void FindAccessToken_FindsValidMatchingToken()
    {
        var method = typeof(FromPacConnectionBuilder).GetMethod("FindAccessToken", StaticPrivate);
        Assert.IsNotNull(method);

        var pacProfileDataType = typeof(FromPacConnectionBuilder).GetNestedType("PacProfileData", BindingFlags.NonPublic);
        Assert.IsNotNull(pacProfileDataType);

        var profileData = Activator.CreateInstance(pacProfileDataType)!;
        pacProfileDataType.GetProperty("User")!.SetValue(profileData, "user@test.com");
        pacProfileDataType.GetProperty("TenantId")!.SetValue(profileData, "tenant-123");

        var futureUnix = DateTimeOffset.UtcNow.AddHours(2).ToUnixTimeSeconds().ToString();
        var pastUnix = DateTimeOffset.UtcNow.AddHours(-2).ToUnixTimeSeconds().ToString();

        var json = $@"{{
            ""tokenExpired"": {{
                ""client_id"": ""user@test.com"",
                ""realm"": ""tenant-123"",
                ""target"": ""https://org.crm.dynamics.com/.default"",
                ""home_account_id"": ""home1"",
                ""expires_on"": ""{pastUnix}"",
                ""secret"": ""expired-secret""
            }},
            ""tokenValid"": {{
                ""client_id"": ""user@test.com"",
                ""realm"": ""tenant-123"",
                ""target"": ""https://org.crm.dynamics.com/.default"",
                ""home_account_id"": ""home1"",
                ""expires_on"": ""{futureUnix}"",
                ""secret"": ""valid-secret""
            }}
        }}";

        using var doc = JsonDocument.Parse(json);
        var accessTokens = doc.RootElement;

        var token = (string?)method.Invoke(null, [
            accessTokens,
            profileData,
            "https://org.crm.dynamics.com",
            "home1",
            false,
            "err"
        ]);
        Assert.AreEqual("valid-secret", token);
    }

    [TestMethod]
    public void FindAccessToken_ThrowsWhenNoMatchFound()
    {
        var method = typeof(FromPacConnectionBuilder).GetMethod("FindAccessToken", StaticPrivate);
        Assert.IsNotNull(method);

        var pacProfileDataType = typeof(FromPacConnectionBuilder).GetNestedType("PacProfileData", BindingFlags.NonPublic);
        Assert.IsNotNull(pacProfileDataType);

        var profileData = Activator.CreateInstance(pacProfileDataType)!;
        pacProfileDataType.GetProperty("User")!.SetValue(profileData, "user@test.com");
        pacProfileDataType.GetProperty("TenantId")!.SetValue(profileData, "tenant-123");

        using var doc = JsonDocument.Parse("{}");
        var accessTokens = doc.RootElement;

        var ex = Assert.Throws<TargetInvocationException>(() =>
        {
            method.Invoke(null, [
                accessTokens,
                profileData,
                "https://org.crm.dynamics.com",
                "home1",
                true,
                "Custom token error message"
            ]);
        });

        Assert.IsInstanceOfType(ex.InnerException, typeof(InvalidOperationException));
        Assert.AreEqual("Custom token error message", ex.InnerException!.Message);
    }
}
