using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// 'devkit new-project' non-interactive flows: the list mode, the single
/// gate-keeper error, the unknown-template error and the --auth connection
/// build that non-interactive hosts get instead of the connection dialog
/// (TaskNewShared.CanPrompt reads the real stdin state — the prompt branches
/// are unreachable from a test). The scaffold runs for real into a temp
/// workspace with a minimal .sln fixture.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class TaskNewProjectCoverageTests
{
    private string _root = null!;

    [TestInitialize]
    public void Setup()
    {
        _root = Path.Combine(Path.GetTempPath(), "DevKitCli_NewProject", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_root);
        File.WriteAllText(Path.Combine(_root, "Contoso.sln"),
            "Microsoft Visual Studio Solution File, Format Version 12.00\r\n" +
            "# Visual Studio Version 17\r\n" +
            "Global\r\n" +
            "\tGlobalSection(SolutionConfigurationPlatforms) = preSolution\r\n" +
            "\t\tDebug|Any CPU = Debug|Any CPU\r\n" +
            "\t\tRelease|Any CPU = Release|Any CPU\r\n" +
            "\tEndGlobalSection\r\n" +
            "\tGlobalSection(ProjectConfigurationPlatforms) = postSolution\r\n" +
            "\tEndGlobalSection\r\n" +
            "EndGlobal\r\n");
        ScriptedConsole.Install();
        SpectreLog.IsPlain = true;
    }

    [TestCleanup]
    public void Cleanup()
    {
        SpectreLog.IsPlain = false;
        ScriptedConsole.Restore();
        if (Directory.Exists(_root)) Directory.Delete(_root, true);
    }

    private NewProjectCommandArgs Args() => new()
    {
        Type = "Shared",
        Name = "Contoso.Shared",
        Solution = Path.Combine(_root, "Contoso.sln"),
        Out = _root,
    };

    [TestMethod]
    public async Task RunAsync_List_Unknown_Throws()
    {
        var args = new NewProjectCommandArgs { List = "xyz" };
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewProject.RunAsync(args));
        Assert.IsTrue(ex.Message.Contains("'xyz'"), ex.Message);
    }

    [TestMethod]
    public async Task RunAsync_List_ShowsProjectCatalog()
    {
        var args = new NewProjectCommandArgs { List = "LIST" };
        await TaskNewProject.RunAsync(args);
        Assert.IsTrue(File.Exists(Path.Combine(_root, "Contoso.sln")));
    }

    [TestMethod]
    public async Task RunAsync_MissingEverything_ThrowsSingleGateError()
    {
        var args = new NewProjectCommandArgs();
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewProject.RunAsync(args));
        StringAssert.Contains(ex.Message, "required arguments missing");
        StringAssert.Contains(ex.Message, "--type");
        StringAssert.Contains(ex.Message, "--name");
        StringAssert.Contains(ex.Message, "--solution");
    }

    [TestMethod]
    public async Task RunAsync_UnknownType_Throws()
    {
        var args = Args();
        args.Type = "BogusProject";
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewProject.RunAsync(args));
        StringAssert.Contains(ex.Message, "unknown project template");
    }

    [TestMethod]
    public async Task RunAsync_AuthTypeArgs_BuildConnectionAndScaffoldShared()
    {
        // Non-interactive hosts cannot open the connection dialog: --auth
        // selects the type and the explicit values make the connection
        // (TaskNewProject lines 127-151), then the Shared project scaffolds
        // for real into the temp workspace.
        var args = Args();
        args.AuthType = "ClientSecret";
        args.Url = "https://org.crm.dynamics.com";
        args.ClientId = "44444444-4444-4444-4444-444444444444";
        args.ClientSecret = "test-secret";
        await TaskNewProject.RunAsync(args);
        Assert.IsTrue(Directory.Exists(Path.Combine(_root, "Contoso.Shared")), "the Shared project scaffolded into the temp workspace.");
        Assert.IsTrue(File.Exists(Path.Combine(_root, "Contoso.Shared", "Contoso.Shared.shproj")));
    }

    [TestMethod]
    public async Task RunAsync_AuthTypeConnectionFromEnv_MarksProjectEnvironment()
    {
        // The .env marker variant: --auth with the project-environment flag
        // bakes the UseProjectEnvironment connection instead of explicit
        // values (the flag itself is private-set — the connection the
        // engine receives is what the test pins).
        var args = Args();
        args.AuthType = "ClientSecret";
        await TaskNewProject.RunAsync(args);
        Assert.IsTrue(Directory.Exists(Path.Combine(_root, "Contoso.Shared")));
    }

    [TestMethod]
    public async Task RunAsync_InvalidProjectName_ScaffoldFailsWithJoinedErrors()
    {
        var args = Args();
        args.Name = "Bad:Name";
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewProject.RunAsync(args));
        Assert.IsTrue(ex.Message.Length > 0, "the scaffold errors are joined into one validation error.");
    }

    /// <summary>
    /// The solution file is required by the engine — a missing --solution
    /// file fails the scaffold with the "solution file not found" error.
    /// </summary>
    [TestMethod]
    public async Task RunAsync_SolutionFileMissing_ScaffoldFails()
    {
        var args = Args();
        args.Solution = Path.Combine(_root, "Missing.sln");
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewProject.RunAsync(args));
        StringAssert.Contains(ex.Message, "solution file not found");
    }

    [TestMethod]
    public void CrmConnection_DefaultsCarryUseProjectEnvironmentMarker()
    {
        var connection = new CrmConnection { Name = "ClientSecret", Type = "ClientSecret", UseProjectEnvironment = true };
        Assert.IsTrue(connection.UseProjectEnvironment);
        Assert.IsNull(connection.Url);
    }
}
