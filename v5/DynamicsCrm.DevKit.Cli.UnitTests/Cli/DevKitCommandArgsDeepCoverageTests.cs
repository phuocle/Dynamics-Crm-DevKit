using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class DevKitCommandArgsDeepCoverageTests
{
    [TestMethod]
    public void CommandLineArgs_AllProperties_CanBeReadAndWritten()
    {
        var args = new CommandLineArgs
        {
            Type = "generators",
            Version = "5.0.0.0",
            Command = "custom",
            OnlyUpdateAssembly = true,
            File = "file.js",
            WebResource = "new_webres",
            Report = "report.rdl",
            Language = "1033",
            ClientId = "client-id",
            ClientSecret = "client-secret",
            PacProfile = "pac-profile",
            Username = "user@org.com",
            Password = "password",
            Domain = "CORP",
            SdkLogin = true
        };

        Assert.AreEqual("generators", args.Type);
        Assert.AreEqual("5.0.0.0", args.Version);
        Assert.AreEqual("custom", args.Command);
        Assert.IsTrue(args.OnlyUpdateAssembly);
        Assert.AreEqual("file.js", args.File);
        Assert.AreEqual("new_webres", args.WebResource);
        Assert.AreEqual("report.rdl", args.Report);
        Assert.AreEqual("1033", args.Language);
        Assert.AreEqual("client-id", args.ClientId);
        Assert.AreEqual("client-secret", args.ClientSecret);
        Assert.AreEqual("pac-profile", args.PacProfile);
        Assert.AreEqual("user@org.com", args.Username);
        Assert.AreEqual("password", args.Password);
        Assert.AreEqual("CORP", args.Domain);
        Assert.IsTrue(args.SdkLogin);
    }

    [TestMethod]
    public void McpCommandArgs_AllProperties_CanBeReadAndWritten()
    {
        var args = new McpCommandArgs
        {
            Name = "MyMcpServer",
            Transport = "sse",
            Category = "readonly",
            DryRun = true,
            AsUser = "admin@org.com",
            SetupGuide = true,
            ListTools = true
        };

        Assert.AreEqual("MyMcpServer", args.Name);
        Assert.AreEqual("sse", args.Transport);
        Assert.AreEqual("readonly", args.Category);
        Assert.IsTrue(args.DryRun);
        Assert.AreEqual("admin@org.com", args.AsUser);
        Assert.IsTrue(args.SetupGuide);
        Assert.IsTrue(args.ListTools);
    }

    [TestMethod]
    public void DevKitCommandArgs_JsonResolvedDirectory_ReturnsExpectedPath()
    {
        var args = new CommandLineArgs { Json = null };
        Assert.IsNull(args.JsonResolvedDirectory);

        // Rooted non-existent path returns null
        args.Json = Path.Combine(Path.GetTempPath(), "NonExistentDir_" + Guid.NewGuid().ToString("N"), "file.json");
        Assert.IsNull(args.JsonResolvedDirectory);

        // Rooted existing file
        var tempFile = Path.Combine(Path.GetTempPath(), "test_" + Guid.NewGuid().ToString("N") + ".json");
        File.WriteAllText(tempFile, "{}");
        try
        {
            args.Json = tempFile;
            Assert.AreEqual(Path.GetTempPath().TrimEnd(Path.DirectorySeparatorChar), args.JsonResolvedDirectory?.TrimEnd(Path.DirectorySeparatorChar));
            Assert.IsFalse(args.IsJsonResolvedBySearch);
        }
        finally
        {
            try { File.Delete(tempFile); } catch { }
        }
    }
}
