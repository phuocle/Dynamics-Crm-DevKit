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
    }
}
