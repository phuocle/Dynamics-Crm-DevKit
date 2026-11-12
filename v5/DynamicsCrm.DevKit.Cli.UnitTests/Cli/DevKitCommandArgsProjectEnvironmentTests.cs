using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli
{
    /// <summary>
    /// The project-environment connection merge (aP ruling 2026-11-01):
    /// every connection VALUE field resolves per-field — the CLI argument
    /// wins when provided, the project .env fills whatever is missing.
    /// --auth is a TYPE selector, not a value: passing --auth OAuth with a
    /// ClientSecret .env keeps the project-environment bake (the values
    /// still come from the .env), which is what lets the UiTest project
    /// template accept an OAuth type over a ClientSecret .env.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class DevKitCommandArgsProjectEnvironmentTests
    {
        private string _tempDir;
        private string _originalDirectory;

        [TestInitialize]
        public void Initialize()
        {
            _originalDirectory = Environment.CurrentDirectory;
            _tempDir = Path.Combine(Path.GetTempPath(), $"devkit-args-merge-{Guid.NewGuid():N}");
            Directory.CreateDirectory(_tempDir);
            Environment.CurrentDirectory = _tempDir;
        }

        [TestCleanup]
        public void Cleanup()
        {
            Environment.CurrentDirectory = _originalDirectory;
            if (Directory.Exists(_tempDir))
                Directory.Delete(_tempDir, recursive: true);
        }

        private static void WriteEnv()
        {
            File.WriteAllText(Path.Combine(Environment.CurrentDirectory, ".env"),
                "DEVKIT_AUTH_TYPE=ClientSecret\n" +
                "DEVKIT_URL=https://env.crm.dynamics.com\n" +
                "DEVKIT_CLIENT_ID=00000000-0000-0000-0000-000000000001\n" +
                "DEVKIT_CLIENT_SECRET=env-secret");
        }

        [TestMethod]
        public void AuthTypeArgOnly_KeepsProjectEnvironment()
        {
            WriteEnv();
            var args = new DevKitCommandArgs { AuthType = "OAuth" };
            args.ResolveProjectEnvironmentDefaults();

            Assert.AreEqual("OAuth", args.AuthType, "--auth wins for the type");
            Assert.AreEqual("https://env.crm.dynamics.com", args.Url, "values still come from the .env");
            Assert.AreEqual(string.Empty, args.ClientId, "OAuth has a built-in AppId default");
            Assert.IsTrue(args.ConnectionFromProjectEnvironment, "--auth alone keeps the project-environment bake");
        }

        [TestMethod]
        public void NoArgs_AllFromProjectEnvironment()
        {
            WriteEnv();
            var args = new DevKitCommandArgs();
            args.ResolveProjectEnvironmentDefaults();

            Assert.AreEqual("ClientSecret", args.AuthType);
            Assert.AreEqual("https://env.crm.dynamics.com", args.Url);
            Assert.AreEqual("00000000-0000-0000-0000-000000000001", args.ClientId);
            Assert.IsTrue(args.ConnectionFromProjectEnvironment);
        }

        [TestMethod]
        public void UrlArg_MakesConnectionExplicit()
        {
            WriteEnv();
            var args = new DevKitCommandArgs { Url = "https://arg.crm.dynamics.com" };
            args.ResolveProjectEnvironmentDefaults();

            Assert.AreEqual("https://arg.crm.dynamics.com", args.Url, "the value argument wins");
            Assert.AreEqual("ClientSecret", args.AuthType, "the missing fields still fill from the .env");
            Assert.AreEqual("00000000-0000-0000-0000-000000000001", args.ClientId);
            Assert.IsFalse(args.ConnectionFromProjectEnvironment, "an explicit value rides into the artifacts");
        }

        [TestMethod]
        public void FullValueArgs_ArgsWinPerField()
        {
            WriteEnv();
            var args = new DevKitCommandArgs
            {
                AuthType = "ClientSecret",
                Url = "https://arg.crm.dynamics.com",
                ClientId = "00000000-0000-0000-0000-000000000002",
                ClientSecret = "arg-secret"
            };
            args.ResolveProjectEnvironmentDefaults();

            Assert.AreEqual("ClientSecret", args.AuthType);
            Assert.AreEqual("https://arg.crm.dynamics.com", args.Url);
            Assert.AreEqual("00000000-0000-0000-0000-000000000002", args.ClientId);
            Assert.AreEqual("arg-secret", args.ClientSecret);
            Assert.IsFalse(args.ConnectionFromProjectEnvironment);
        }

        [TestMethod]
        public void NumberedGroup_ResolvesOnlySelectedGroupAndNeverBorrowsDefaultKeys()
        {
            File.WriteAllText(Path.Combine(Environment.CurrentDirectory, ".env"),
                "DEVKIT_AUTH_TYPE=ClientSecret\n" +
                "DEVKIT_URL=https://default.crm.dynamics.com\n" +
                "DEVKIT_CLIENT_ID=00000000-0000-0000-0000-000000000001\n" +
                "DEVKIT_CLIENT_SECRET=default-secret\n" +
                "DEVKIT_1_AUTH_TYPE=ClientSecret\n" +
                "DEVKIT_1_URL=https://one.crm.dynamics.com\n" +
                "DEVKIT_1_CLIENT_ID=00000000-0000-0000-0000-000000000011\n" +
                "DEVKIT_100_AUTH_TYPE=FromPac\n" +
                "DEVKIT_100_PAC_PROFILE=UAT\n");

            var group1 = new DevKitCommandArgs { Url = "https://override.crm.dynamics.com" };
            group1.ResolveProjectEnvironmentDefaults("1");

            Assert.AreEqual("ClientSecret", group1.AuthType);
            Assert.AreEqual("https://override.crm.dynamics.com", group1.Url, "Explicit CLI arg overrides DEVKIT_1_URL");
            Assert.AreEqual("00000000-0000-0000-0000-000000000011", group1.ClientId);
            Assert.AreEqual(string.Empty, group1.ClientSecret, "Group 1 must never borrow DEVKIT_CLIENT_SECRET from default group");

            var group100 = new DevKitCommandArgs();
            group100.ResolveProjectEnvironmentDefaults("100");
            Assert.AreEqual("FromPac", group100.AuthType);
            Assert.AreEqual("UAT", group100.PacProfile);
            Assert.AreEqual(string.Empty, group100.Url);
        }

        [TestMethod]
        public void DefaultResolver_ExplicitLegacyConnection_StillMergesProjectEnvAuthType()
        {
            WriteEnv();
            var args = new DevKitCommandArgs
            {
                Connection = "AuthType=ClientSecret;Url=https://explicit.crm.dynamics.com;ClientId=11111111-1111-1111-1111-111111111111;ClientSecret=sec;"
            };
            args.ResolveProjectEnvironmentDefaults();

            Assert.AreEqual("ClientSecret", args.AuthType, "No selector keeps the pre-feature per-property merge");
        }

        [TestMethod]
        public void NumberedResolver_PreservesExplicitConnectionMode()
        {
            var values = new System.Collections.Generic.Dictionary<string, string>
            {
                ["DEVKIT_1_AUTH_TYPE"] = "ClientSecret",
                ["DEVKIT_1_CONNECTION"] = "group-connection"
            };
            var legacy = new DevKitCommandArgs { Connection = "explicit-connection" };
            legacy.ResolveProjectEnvironmentDefaults(values, "1");
            Assert.AreEqual(string.Empty, legacy.AuthType);
            Assert.AreEqual("explicit-connection", legacy.Connection);

            var modern = new DevKitCommandArgs { AuthType = "AD" };
            modern.ResolveProjectEnvironmentDefaults(values, "1");
            Assert.AreEqual(string.Empty, modern.Connection);
            Assert.AreEqual("AD", modern.AuthType);
        }

        [TestMethod]
        public void HasCompleteExplicitConnectionArgs_EvaluatesPerAuthType()
        {
            Assert.IsFalse(new DevKitCommandArgs().HasExplicitConnectionArgs());
            Assert.IsFalse(new DevKitCommandArgs().HasCompleteExplicitConnectionArgs());

            Assert.IsTrue(new DevKitCommandArgs { Connection = "AuthType=OAuth;Url=https://x" }.HasCompleteExplicitConnectionArgs());
            Assert.IsTrue(new DevKitCommandArgs { AuthType = "ClientSecret", Url = "https://x", ClientId = "id", ClientSecret = "sec" }.HasCompleteExplicitConnectionArgs());
            Assert.IsFalse(new DevKitCommandArgs { AuthType = "ClientSecret", Url = "https://x", ClientId = "id" }.HasCompleteExplicitConnectionArgs());
            Assert.IsTrue(new DevKitCommandArgs { AuthType = "FromPac", PacProfile = "default" }.HasCompleteExplicitConnectionArgs());
            Assert.IsTrue(new DevKitCommandArgs { AuthType = "FromPac" }.HasCompleteExplicitConnectionArgs());
            Assert.IsTrue(new DevKitCommandArgs { AuthType = "Interactive", Url = "https://x" }.HasCompleteExplicitConnectionArgs());
            Assert.IsTrue(new DevKitCommandArgs { AuthType = "DeviceCode", Url = "https://x" }.HasCompleteExplicitConnectionArgs());
            Assert.IsFalse(new DevKitCommandArgs { AuthType = "Interactive" }.HasCompleteExplicitConnectionArgs());
            Assert.IsTrue(new DevKitCommandArgs { AuthType = "OAuth", Url = "https://x", Username = "u", Password = "p" }.HasCompleteExplicitConnectionArgs());
            Assert.IsFalse(new DevKitCommandArgs { AuthType = "OAuth", Url = "https://x", Username = "u" }.HasCompleteExplicitConnectionArgs());
            Assert.IsTrue(new DevKitCommandArgs { AuthType = "AD", Url = "https://x", Username = "u", Password = "p", Domain = "CONTOSO" }.HasCompleteExplicitConnectionArgs());
            Assert.IsTrue(new DevKitCommandArgs { AuthType = "AD", Url = "https://x", Username = "CONTOSO\\u", Password = "p" }.HasCompleteExplicitConnectionArgs());
            Assert.IsTrue(new DevKitCommandArgs { AuthType = "AD", Url = "https://x", Username = "u", Password = "p" }.HasCompleteExplicitConnectionArgs());
            Assert.IsTrue(new DevKitCommandArgs { AuthType = "UnsupportedType" }.HasCompleteExplicitConnectionArgs());
        }
    }
}
