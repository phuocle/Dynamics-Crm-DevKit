using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// The interactive half of 'devkit new-project': the type/name/solution
/// prompt chain, the connection dialog (skipped with its lead choice), and
/// the Server template's missing-Shared-project confirm that scaffolds the
/// Shared twin into the same solution. Also pins the private helpers
/// (FindNearestSolutionFile / GetDefaultProjectName) through reflection.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class TaskNewProjectInteractiveWizardTests
{
    private string _root = null!;
    private ScriptedConsole _console = null!;

    [TestInitialize]
    public void Setup()
    {
        _root = Path.Combine(Path.GetTempPath(), "DevKitCli_NewProjectWizard", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_root);
        File.WriteAllText(Path.Combine(_root, "Contoso.sln"),
            "Microsoft Visual Studio Solution File, Format Version 12.00\r\n" +
            "# Visual Studio Version 17\r\n" +
            "Global\r\nEndGlobal\r\n");
        InteractiveConsoleUnlock.Install();
        _console = ScriptedConsole.Install();
        SpectreLog.IsPlain = false;
    }

    [TestCleanup]
    public void Cleanup()
    {
        SpectreLog.IsPlain = false;
        ScriptedConsole.Restore();
        InteractiveConsoleUnlock.Uninstall();
        if (Directory.Exists(_root)) Directory.Delete(_root, true);
    }

    private NewProjectCommandArgs Args() => new() { Out = _root };

    [TestMethod]
    public async Task Wizard_PromptsTypeThenNameThenSolution_WithSuggestedDefaults()
    {
        var args = Args();
        _console.Input
            .PushKey(ConsoleKey.Enter)   // type: first choice (Shared)
            .PushKey(ConsoleKey.Enter)   // name: the "Contoso.Shared" default
            .PushKey(ConsoleKey.Enter);  // solution: the nearest Contoso.sln
        await TaskNewProject.RunAsync(args);
        Assert.AreEqual("Shared", args.Type, "the template combo's first choice was picked.");
        Assert.AreEqual("Contoso.Shared", args.Name, "GetDefaultProjectName seeded the name default.");
        Assert.AreEqual(Path.Combine(_root, "Contoso.sln"), args.Solution, "FindNearestSolutionFile seeded the solution default.");
        Assert.IsTrue(Directory.Exists(Path.Combine(_root, "Contoso.Shared")), "the Shared project scaffolded.");
    }

    [TestMethod]
    public async Task Wizard_ConsoleTemplate_SkipsConnectionDialogWithLeadChoice()
    {
        var args = Args();
        args.Type = "Console";
        args.Name = "Contoso.Console";
        args.Solution = Path.Combine(_root, "Contoso.sln");
        _console.Input.PushKey(ConsoleKey.Enter); // "(skip — configure later)" leads with no .env
        await TaskNewProject.RunAsync(args);
        Assert.IsTrue(Directory.Exists(Path.Combine(_root, "Contoso.Console")), "the Console project scaffolded with the skipped connection.");
    }

    [TestMethod]
    public async Task Wizard_ServerTemplate_OffersTheMissingSharedProject()
    {
        var args = Args();
        args.Type = "Server";
        args.Name = "Contoso.Server";
        args.Solution = Path.Combine(_root, "Contoso.sln");
        _console.Input
            .PushKey(ConsoleKey.Enter)   // connection dialog: skip
            .PushKey(ConsoleKey.Enter);  // "No Shared project found. Scaffold ... now?" → yes
        await TaskNewProject.RunAsync(args);
        Assert.IsTrue(Directory.Exists(Path.Combine(_root, "Contoso.Shared")),
            "the confirm scaffolded the Shared twin first.");
        Assert.IsTrue(Directory.Exists(Path.Combine(_root, "Contoso.Server")),
            "the Server project scaffolded after the Shared twin.");
    }

    // ────────────────────────────────────────────────────────────────────
    // Reflection coverage of the private solution helpers.
    // ────────────────────────────────────────────────────────────────────

    [TestMethod]
    public void FindNearestSolutionFile_PrefersSlnxThenSlnThenNull()
    {
        var method = typeof(TaskNewProject).GetMethod("FindNearestSolutionFile", BindingFlags.NonPublic | BindingFlags.Static)!;

        Assert.AreEqual(Path.Combine(_root, "Contoso.sln"), method.Invoke(null, new object?[] { _root }));

        var deep = Directory.CreateDirectory(Path.Combine(_root, "src", "deep"));
        Assert.AreEqual(Path.Combine(_root, "Contoso.sln"), method.Invoke(null, new object?[] { deep.FullName }),
            "the walk-up finds the solution above the start directory.");

        var slnxRoot = Path.Combine(_root, "slnx");
        Directory.CreateDirectory(slnxRoot);
        File.WriteAllText(Path.Combine(slnxRoot, "Other.slnx"), "<Solution/>");
        Assert.AreEqual(Path.Combine(slnxRoot, "Other.slnx"), method.Invoke(null, new object?[] { slnxRoot }),
            "a .slnx wins over a .sln at the same level.");

        // An isolated tree OUTSIDE _root — inside it the walk-up would find
        // Contoso.sln one level up.
        var empty = Path.Combine(Path.GetTempPath(), "DevKitCli_NoSolution", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(empty);
        try
        {
            Assert.IsNull(method.Invoke(null, new object?[] { empty }), "no solution anywhere — null.");
        }
        finally
        {
            Directory.Delete(empty, true);
        }
    }

    [TestMethod]
    public void GetDefaultProjectName_ComposesSolutionAndTemplateKind()
    {
        var method = typeof(TaskNewProject).GetMethod("GetDefaultProjectName", BindingFlags.NonPublic | BindingFlags.Static)!;
        var sharedTest = TemplateCatalog.Find("SharedTest", TemplateKind.Project)!;
        var shared = TemplateCatalog.Find("Shared", TemplateKind.Project)!;

        Assert.AreEqual("Contoso.Shared.Test", method.Invoke(null, new object?[] { sharedTest, _root }),
            "SharedTest composes {solution}.Shared.Test.");
        Assert.AreEqual("Contoso.Shared", method.Invoke(null, new object?[] { shared, _root }),
            "every other template composes {solution}.{template}.");

        // Isolated tree OUTSIDE _root — inside it the workspace scan finds
        // Contoso.sln one level up.
        var noSolution = Path.Combine(Path.GetTempPath(), "DevKitCli_NoSolution", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(noSolution);
        try
        {
            Assert.IsNull(method.Invoke(null, new object?[] { shared, noSolution }),
                "no workspace solution — no default name.");
        }
        finally
        {
            Directory.Delete(noSolution, true);
        }
    }
}
