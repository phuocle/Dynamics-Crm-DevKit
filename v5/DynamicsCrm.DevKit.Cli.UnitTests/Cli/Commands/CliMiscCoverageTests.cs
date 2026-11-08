using DynamicsCrm.DevKit.Cli.Commands;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// Assorted narrow gaps: the webresource argument rows and the download
/// validation rules, the shared MCP service registrations, and the
/// plain-output .env switch with its failure fallback.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class CliMiscCoverageTests
{
    private ScriptedConsole _console = null!;

    [TestInitialize]
    public void Setup()
    {
        _console = ScriptedConsole.Install();
    }

    [TestCleanup]
    public void Cleanup()
    {
        SpectreLog.IsPlain = false;
        ScriptedConsole.Restore();
        _console.Dispose();
    }

    // ------------------------------------------------------------------
    // WebResourceCommand
    // ------------------------------------------------------------------

    private sealed class WebResourceArgsProbe : WebResourceCommand
    {
        public void Rules(WebResourceCommandArgs settings) => ValidateTypeAndOptions(settings);
        public List<string[]> Rows(WebResourceCommandArgs settings) => BuildArgRows(settings);
    }

    [TestMethod]
    public void ValidateTypeAndOptions_Download_RejectsFile()
    {
        var ex = Assert.ThrowsExactly<DevKitValidationException>(
            () => new WebResourceArgsProbe().Rules(new WebResourceCommandArgs { Type = "download", File = "x.js" }));
        StringAssert.Contains(ex.Message, "--file: not valid for --type download");
    }

    [TestMethod]
    public void ValidateTypeAndOptions_Download_RejectsWebResource()
    {
        var ex = Assert.ThrowsExactly<DevKitValidationException>(
            () => new WebResourceArgsProbe().Rules(new WebResourceCommandArgs { Type = "download", WebResource = "new_/x.js" }));
        StringAssert.Contains(ex.Message, "--webresource: not valid for --type download");
    }

    [TestMethod]
    public void ValidateTypeAndOptions_Download_RejectsWebResourceId()
    {
        var ex = Assert.ThrowsExactly<DevKitValidationException>(
            () => new WebResourceArgsProbe().Rules(new WebResourceCommandArgs { Type = "download", WebResourceId = Guid.NewGuid().ToString() }));
        StringAssert.Contains(ex.Message, "--webresourceid: not valid for --type download");
    }

    [TestMethod]
    public void ValidateTypeAndOptions_Upload_WebResourceIdNotGuid_Throws()
    {
        var ex = Assert.ThrowsExactly<DevKitValidationException>(
            () => new WebResourceArgsProbe().Rules(new WebResourceCommandArgs { Type = "upload", WebResourceId = "not-a-guid" }));
        StringAssert.Contains(ex.Message, "not a valid GUID");
    }

    [TestMethod]
    public void ValidateTypeAndOptions_Upload_WebResourceIdWithoutFile_Throws()
    {
        var ex = Assert.ThrowsExactly<DevKitValidationException>(
            () => new WebResourceArgsProbe().Rules(new WebResourceCommandArgs { Type = "upload", WebResourceId = Guid.NewGuid().ToString() }));
        StringAssert.Contains(ex.Message, "--webresourceid: requires --file");
    }

    [TestMethod]
    public void ValidateTypeAndOptions_Upload_WebResourceIdWithWebResource_Throws()
    {
        var ex = Assert.ThrowsExactly<DevKitValidationException>(
            () => new WebResourceArgsProbe().Rules(new WebResourceCommandArgs
            {
                Type = "upload",
                WebResourceId = Guid.NewGuid().ToString(),
                File = "x.js",
                WebResource = "new_/x.js",
            }));
        StringAssert.Contains(ex.Message, "use only one");
    }

    [TestMethod]
    public void BuildArgRows_WebResourceIdRow()
    {
        var rows = new WebResourceArgsProbe().Rows(new WebResourceCommandArgs
        {
            Type = "Upload",
            File = "scripts/x.js",
            WebResourceId = "11111111-2222-3333-4444-555555555555",
        });
        Assert.HasCount(3, rows);
        StringAssert.Contains(rows[0][1], "upload");
        StringAssert.Contains(rows[2][0], "--webresourceid");
    }

    // ------------------------------------------------------------------
    // McpServerHost.RegisterSharedServices
    // ------------------------------------------------------------------

    [TestMethod]
    public void RegisterSharedServices_RegistersEveryProjection()
    {
        using var fake = new FakeSdkClient();
        var services = new ServiceCollection();
        McpServerHost.RegisterSharedServices(services, fake.Client, dryRun: true, "Impersonated User");
        using var provider = services.BuildServiceProvider();

        Assert.AreSame(fake.Client, provider.GetRequiredService<Microsoft.PowerPlatform.Dataverse.Client.ServiceClient>());
        Assert.AreSame(fake.Client, provider.GetRequiredService<Microsoft.Xrm.Sdk.IOrganizationService>());
        Assert.AreSame(fake.Client, provider.GetRequiredService<Microsoft.PowerPlatform.Dataverse.Client.IOrganizationServiceAsync2>());

        var policy = provider.GetRequiredService<McpExecutionPolicy>();
        Assert.IsTrue(policy.MutationsBlocked, "dryRun=true blocks mutations.");
        Assert.IsNotNull(provider.GetRequiredService<DynamicsCrm.DevKit.Shared.Services.MetadataService>());
        Assert.IsNotNull(provider.GetRequiredService<IMcpConnectionInfo>());
        Assert.IsNotNull(provider.GetRequiredService<DynamicsCrm.DevKit.Shared.Services.IWebApiExecutor>());
    }

    // ------------------------------------------------------------------
    // Program.IsPlainFromProjectEnvironment
    // ------------------------------------------------------------------

    [TestMethod]
    public void IsPlainFromProjectEnvironment_NoEnv_ReturnsFalse()
    {
        var previous = Environment.CurrentDirectory;
        var root = Path.Combine(Path.GetTempPath(), "DevKitCli_IsPlain", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(root);
        try
        {
            Environment.CurrentDirectory = root;
            Assert.IsFalse(Program.IsPlainFromProjectEnvironment());
        }
        finally
        {
            Environment.CurrentDirectory = previous;
            Directory.Delete(root, true);
        }
    }

    [TestMethod]
    public void IsPlainFromProjectEnvironment_NoColorSet_ReturnsTrue()
    {
        var previous = Environment.CurrentDirectory;
        var root = Path.Combine(Path.GetTempPath(), "DevKitCli_IsPlain", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(root);
        File.WriteAllText(Path.Combine(root, ProjectEnvironment.FileName), "DEVKIT_NO_COLOR=1\n");
        try
        {
            Environment.CurrentDirectory = root;
            Assert.IsTrue(Program.IsPlainFromProjectEnvironment());
        }
        finally
        {
            Environment.CurrentDirectory = previous;
            Directory.Delete(root, true);
        }
    }

    // The catch-all inside Program.IsPlainFromProjectEnvironment is
    // defensive: Directory.GetCurrentDirectory() is read outside the try
    // and FindFile/Read on an existing working directory do not throw, so
    // the fallback cannot be driven from a test.
}
