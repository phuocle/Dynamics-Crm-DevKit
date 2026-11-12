using DynamicsCrm.DevKit.Cli.Commands;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

[TestClass]
[DoNotParallelize]
public class McpConnectionResolutionTests
{
    private string _directory = null!;
    private string _originalDirectory = null!;
    private string _jsonPath = null!;

    [TestInitialize]
    public void Initialize()
    {
        _originalDirectory = Environment.CurrentDirectory;
        _directory = Path.Combine(Path.GetTempPath(), "devkit-mcp-resolution-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_directory);
        _jsonPath = Path.Combine(_directory, "test.json");
        File.WriteAllText(_jsonPath, "{}");
        Environment.CurrentDirectory = _directory;
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = _originalDirectory;
        Directory.Delete(_directory, recursive: true);
    }

    // Expected values follow the pre--env resolver at commit 5160d4c7.
    // No connection is opened; these fixtures never read PAC/MSAL caches.
    [TestMethod]
    [DataRow("ClientSecret", "default")]
    [DataRow("Interactive", "default")]
    [DataRow("DeviceCode", "default")]
    [DataRow("OAuth", "default")]
    [DataRow("AD", "default")]
    [DataRow("FromPac", "default")]
    [DataRow("", "legacy")]
    [DataRow("ClientSecret", "override-url")]
    [DataRow("ClientSecret", "override-clientid")]
    [DataRow("ClientSecret", "override-secret")]
    [DataRow("ClientSecret", "partial")]
    [DataRow("ClientSecret", "complete")]
    [DataRow("ClientSecret", "complete-no-default")]
    [DataRow("FromPac", "auth-only")]
    [DataRow("FromPac", "override-profile")]
    [DataRow("FromPac", "active-no-default")]
    [DataRow("Interactive", "auth-only")]
    [DataRow("OAuth", "auth-url")]
    [DataRow("AD", "domain-fallback")]
    [DataRow("", "numbered-only")]
    [DataRow("Interactive", "auth-url")]
    [DataRow("DeviceCode", "auth-url")]
    [DataRow("ClientSecret", "explicit-conn")]
    [DataRow("ClientSecret", "aliases")]
    public void NoSelector_MatchesOriginalConnectionMerge(string authType, string scenario)
    {
        var args = new McpCommandArgs { Json = _jsonPath };
        var expected = new DevKitCommandArgs
        {
            AuthType = authType,
            Url = "https://default.example.invalid",
            ClientId = "default-id",
            ClientSecret = "default-secret",
            PacProfile = "default-profile",
            Username = "intended@example.invalid",
            Password = "default-password",
            Domain = "DEFAULT"
        };
        if (scenario == "legacy") expected.Connection = "AuthType=AD;Url=https://legacy.example.invalid;";
        WriteDefaults(expected);
        if (authType is "Interactive" or "DeviceCode" or "OAuth") expected.ClientId = "";

        switch (scenario)
        {
            case "override-url": args.Url = expected.Url = "https://override.example.invalid"; break;
            case "override-clientid": args.ClientId = expected.ClientId = "explicit-id"; break;
            case "override-secret": args.ClientSecret = expected.ClientSecret = "explicit-secret"; break;
            case "partial":
                args.AuthType = authType;
                args.Url = expected.Url = "https://override.example.invalid";
                args.ClientId = expected.ClientId = "explicit-id";
                break;
            case "complete":
            case "complete-no-default":
                args.AuthType = authType;
                args.Url = "https://explicit.example.invalid";
                args.ClientId = "explicit-id";
                args.ClientSecret = "explicit-secret";
                if (scenario == "complete-no-default")
                {
                    WriteDefaults(null);
                    expected = new DevKitCommandArgs();
                }
                expected.AuthType = args.AuthType;
                expected.Url = args.Url;
                expected.ClientId = args.ClientId;
                expected.ClientSecret = args.ClientSecret;
                break;
            case "auth-only": args.AuthType = authType; break;
            case "override-profile":
                args.AuthType = authType;
                args.PacProfile = expected.PacProfile = "explicit-profile";
                break;
            case "active-no-default":
                WriteDefaults(null);
                args.AuthType = authType;
                expected = new DevKitCommandArgs { AuthType = authType };
                break;
            case "auth-url":
                args.AuthType = authType;
                args.Url = expected.Url = "https://override.example.invalid";
                break;
            case "domain-fallback":
                args.AuthType = authType;
                args.Url = expected.Url = "https://override.example.invalid";
                args.Username = expected.Username = "explicit-user";
                args.Password = expected.Password = "explicit-password";
                break;
            case "numbered-only":
                WriteDefaults(null);
                expected = new DevKitCommandArgs();
                break;
            case "explicit-conn":
                args.Connection = expected.Connection = "AuthType=AD;Url=https://explicit.example.invalid;";
                break;
            case "aliases":
                args.AuthType = authType;
                args.Url = expected.Url = "https://override.example.invalid";
                args.Username = expected.Username = "alias-id";
                args.Password = expected.Password = "alias-secret";
                // Standard ClientId/ClientSecret from .env still win in the builder.
                break;
        }

        var hadExplicitValue = ConnectionProperties.Where(p => p.Name != "AuthType")
            .Any(p => !string.IsNullOrEmpty((string?)p.GetValue(args)));
        Assert.IsTrue(Resolve(args));
        foreach (var property in ConnectionProperties)
            Assert.AreEqual(property.GetValue(expected), property.GetValue(args), $"{scenario}: {property.Name}");
        Assert.AreEqual(!hadExplicitValue, args.ConnectionFromProjectEnvironment);
    }

    [TestMethod]
    [DataRow("Interactive")]
    [DataRow("DeviceCode")]
    public void NoSelector_CompleteArgs_KeepExplicitUsernameAndFillOtherOptionalFields(string authType)
    {
        WriteDefaults(new DevKitCommandArgs { Username = "env-user", Password = "env-password", Domain = "env-domain", PacProfile = "env-profile" });
        var args = new McpCommandArgs { Json = _jsonPath, AuthType = authType, Url = "https://explicit.example.invalid", Username = "explicit-user" };
        Assert.IsTrue(Resolve(args));
        Assert.AreEqual("explicit-user", args.Username);
        Assert.AreEqual("env-password", args.Password);
        Assert.AreEqual("env-domain", args.Domain);
        Assert.AreEqual("env-profile", args.PacProfile);
    }

    [TestMethod]
    public void NoSelector_ExplicitAuth_StillFillsLegacyConnection()
    {
        WriteDefaults(new DevKitCommandArgs { Connection = "env-connection", AuthType = "ClientSecret" });
        var args = new McpCommandArgs { Json = _jsonPath, AuthType = "AD" };
        Assert.IsTrue(Resolve(args));
        Assert.AreEqual("AD", args.AuthType);
        Assert.AreEqual("env-connection", args.Connection);
        Assert.IsTrue(args.ConnectionFromProjectEnvironment);
    }

    [TestMethod]
    [DataRow("FromPac", false)]
    [DataRow("FromPac", true)]
    [DataRow("AD", false)]
    [DataRow("AD", true)]
    public void Selector_OptionalProfileOrDomain_DoesNotRequireMissingGroup(string authType, bool hasFile)
    {
        if (hasFile) WriteDefaults(new DevKitCommandArgs { PacProfile = "must-not-inherit", Domain = "must-not-inherit" });
        var args = new McpCommandArgs { Json = _jsonPath, Env = "99", AuthType = authType };
        if (authType == "AD")
        {
            args.Url = "https://explicit.example.invalid";
            args.Username = "user@example.invalid";
            args.Password = "placeholder";
        }
        Assert.IsTrue(Resolve(args));
        Assert.IsFalse(args.UsedEnvironmentFallback);
        Assert.IsFalse(args.UsedEnvironmentGroupFallback);
        Assert.AreEqual("", args.PacProfile);
        Assert.AreEqual("", args.Domain);
    }

    [TestMethod]
    [DataRow("ClientSecret")]
    [DataRow("Interactive")]
    public void NoSelector_CompleteArgs_DoNotRequireEnvFile(string authType)
    {
        var args = new McpCommandArgs { Json = _jsonPath, AuthType = authType, Url = "https://explicit.example.invalid", ClientId = "id", ClientSecret = "secret" };
        Assert.IsTrue(Resolve(args));
        Assert.AreEqual(authType, args.AuthType);
        Assert.AreEqual("https://explicit.example.invalid", args.Url);
        Assert.IsFalse(args.UsedEnvironmentFallback);
    }

    [TestMethod]
    public async Task OptionalProfileAndDomain_MatchBuilderContracts()
    {
        var fromPac = new CrmConnection { Type = "FromPac" };
        StringAssert.Contains(new FromPacConnectionBuilder().BuildConnectionString(fromPac), "Profile=(active)");
        var ad = new CrmConnection { Type = "AD", Url = "https://explicit.example.invalid", UserName = "user@example.invalid", Password = "placeholder" };
        var (valid, error) = await new ADConnectionBuilder().ValidateAsync(ad);
        Assert.IsTrue(valid, error);
        Assert.IsFalse(new ADConnectionBuilder().BuildConnectionString(ad).Contains("Domain="));
    }

    [TestMethod]
    public void NoSelector_ResolvedJsonDirectory_SelectsDefaultsBeforeWorkingDirectory()
    {
        WriteDefaults(new DevKitCommandArgs { AuthType = "Interactive", Username = "json-user" });
        var child = Path.Combine(_directory, "child");
        Directory.CreateDirectory(child);
        File.WriteAllText(Path.Combine(child, ".env"), "DEVKIT_USERNAME=wrong-cwd-user\n");
        Environment.CurrentDirectory = child;
        var args = new McpCommandArgs { Json = _jsonPath, AuthType = "Interactive", Url = "https://explicit.example.invalid" };
        Assert.IsTrue(Resolve(args));
        Assert.AreEqual("json-user", args.Username);
    }

    private static readonly PropertyInfo[] ConnectionProperties = new[]
    {
        "Connection", "AuthType", "Url", "ClientId", "ClientSecret", "PacProfile", "Username", "Password", "Domain"
    }.Select(name => typeof(DevKitCommandArgs).GetProperty(name)!).ToArray();

    private void WriteDefaults(DevKitCommandArgs? defaults)
    {
        // Use explicit key mapping; CLI property names and .env fields differ.
        var values = defaults == null ? "" : string.Join("\n", new[]
        {
            "DEVKIT_CONNECTION=" + defaults.Connection, "DEVKIT_AUTH_TYPE=" + defaults.AuthType,
            "DEVKIT_URL=" + defaults.Url, "DEVKIT_CLIENT_ID=" + defaults.ClientId,
            "DEVKIT_CLIENT_SECRET=" + defaults.ClientSecret, "DEVKIT_PAC_PROFILE=" + defaults.PacProfile,
            "DEVKIT_USERNAME=" + defaults.Username, "DEVKIT_PASSWORD=" + defaults.Password,
            "DEVKIT_DOMAIN=" + defaults.Domain
        });
        File.WriteAllText(Path.Combine(_directory, ".env"), values + "\nDEVKIT_1_AUTH_TYPE=ClientSecret\nDEVKIT_1_URL=https://other.example.invalid\nDEVKIT_1_CLIENT_SECRET=other-secret\n");
    }

    private static bool Resolve(McpCommandArgs args) => (bool)typeof(McpCommand)
        .GetMethod("ResolveConnectionSettings", BindingFlags.NonPublic | BindingFlags.Static)!
        .Invoke(null, new object[] { args })!;
}
