using System;
using System.IO;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Commands;

/// <summary>
/// TaskNewItem.RunAsync gate keeper — every item type reports ALL missing
/// required arguments in one DevKitValidationException when the run cannot
/// prompt (plain mode). Pure argument validation: no connection, no prompts.
/// </summary>
[TestClass]
public class NewItemArgsGateTests
{
    private bool _originalPlain;

    [TestInitialize]
    public void ForcePlainMode()
    {
        // CanPrompt() = !Console.IsInputRedirected && !SpectreLog.IsPlain —
        // the test host's console is interactive-looking, so pin plain mode
        // to exercise the same non-interactive gate the --plain CLI runs use.
        _originalPlain = SpectreLog.IsPlain;
        SpectreLog.IsPlain = true;
    }

    [TestCleanup]
    public void RestorePlainMode()
    {
        SpectreLog.IsPlain = _originalPlain;
    }

    private static async Task<string> MissingAsync(NewItemCommandArgs args)
    {
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(
            () => TaskNewItem.RunAsync(args));
        return ex.Message;
    }

    private static Task<string> MissingOfType(string type, Action<NewItemCommandArgs>? configure = null)
    {
        var args = new NewItemCommandArgs { Type = type };
        configure?.Invoke(args);
        return MissingAsync(args);
    }

    // ──────────────────────────────────────────────
    // Per-type required-argument branches
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Gate_Plugin_ReportsEntityMessageStageNameProject()
    {
        var missing = await MissingOfType("Plugin");
        StringAssert.Contains(missing, "--entity <schema-name>");
        StringAssert.Contains(missing, "--message <message>");
        StringAssert.Contains(missing, "--stage <PreValidation|PreOperation|PostOperation>");
        StringAssert.Contains(missing, "--name <class-name>");
        StringAssert.Contains(missing, "--project <project-name>");
    }

    [TestMethod]
    public async Task Gate_CustomAction_ReportsNoneEntityAndCustomActionMessage()
    {
        var missing = await MissingOfType("CustomAction");
        StringAssert.Contains(missing, "--entity <schema-name|none>");
        StringAssert.Contains(missing, "--message <custom-action>");
        StringAssert.Contains(missing, "--stage <PreValidation|PreOperation|PostOperation>");
    }

    [TestMethod]
    public async Task Gate_CustomApi_ReportsEntityAndCustomApiMessage()
    {
        var missing = await MissingOfType("CustomApi");
        StringAssert.Contains(missing, "--entity <schema-name|none>");
        StringAssert.Contains(missing, "--message <custom-api>");
    }

    [TestMethod]
    public async Task Gate_Workflow_ReportsClassNameOnly()
    {
        var missing = await MissingOfType("Workflow");
        StringAssert.Contains(missing, "--name <class-name>");
        StringAssert.Contains(missing, "--project <project-name>");
        Assert.IsFalse(missing.Contains("--entity"), "workflow collapses the entity combo");
    }

    [TestMethod]
    public async Task Gate_DataProvider_ReportsDatasource()
    {
        var missing = await MissingOfType("DataProvider");
        StringAssert.Contains(missing, "--datasource <data-source-logical-name>");
        Assert.IsFalse(missing.Contains("--name"), "the data source combo names the file itself");
    }

    [TestMethod]
    public async Task Gate_UiTest_ReportsClassName()
    {
        var missing = await MissingOfType("UiTest");
        StringAssert.Contains(missing, "--name <class-name>");
    }

    [TestMethod]
    public async Task Gate_ResourceString_ReportsLanguageAndClassName()
    {
        var missing = await MissingOfType("ResourceString");
        StringAssert.Contains(missing, "--language <lcid>");
        StringAssert.Contains(missing, "--name <class-name>");
    }

    [TestMethod]
    public async Task Gate_BatFile_ReportsUtilityFile()
    {
        var missing = await MissingOfType("BatFile");
        StringAssert.Contains(missing, "--name <utility-file>");
    }

    [TestMethod]
    public async Task Gate_TsDialog_ReportsDialogName()
    {
        var missing = await MissingOfType("TsDialog");
        StringAssert.Contains(missing, "--name <dialog-name>");
    }

    // ──────────────────────────────────────────────
    // Missing --type and unknown list value
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Gate_NoType_ReportsTemplateId()
    {
        var missing = await MissingAsync(new NewItemCommandArgs());
        StringAssert.Contains(missing, "--type <template-id>");
    }

    [TestMethod]
    public async Task Gate_BadListValue_ThrowsUnknownList()
    {
        var ex = await Assert.ThrowsExactlyAsync<DevKitValidationException>(
            () => TaskNewItem.RunAsync(new NewItemCommandArgs { List = "garbage" }));
        StringAssert.Contains(ex.Message, "'garbage': unknown");
    }

    // ──────────────────────────────────────────────
    // Test type — project-resolution sub-branches
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Gate_Test_WithoutProject_ReportsProjectOnly()
    {
        var missing = await MissingOfType("Test");
        StringAssert.Contains(missing, "--project <project-name>");
        Assert.IsFalse(missing.Contains("--name"), "no project to scan, nothing else required");
        Assert.IsFalse(missing.Contains("--test-target"));
    }

    [TestMethod]
    public async Task Gate_Test_ProjectWithCsproj_NoCandidates_ReportsClassName()
    {
        var dir = Path.Combine(Path.GetTempPath(), "newitem-gate-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(dir);
        File.WriteAllText(Path.Combine(dir, "Test.Project.csproj"), "<Project Sdk=\"Microsoft.NET.Sdk\" />");
        try
        {
            var missing = await MissingOfType("Test", a => a.Project = dir);
            StringAssert.Contains(missing, "--name <test-class-name>");
        }
        finally
        {
            Directory.Delete(dir, true);
        }
    }

    [TestMethod]
    public async Task Gate_Test_ProjectWithoutCsproj_ReportsClassName()
    {
        var dir = Path.Combine(Path.GetTempPath(), "newitem-gate-empty-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(dir);
        try
        {
            var missing = await MissingOfType("Test", a => a.Project = dir);
            StringAssert.Contains(missing, "--name <test-class-name>");
        }
        finally
        {
            Directory.Delete(dir, true);
        }
    }

    [TestMethod]
    public async Task Gate_Test_NonexistentProject_ReportsClassName()
    {
        var missing = await MissingOfType("Test",
            a => a.Project = Path.Combine(Path.GetTempPath(), "no-such-" + Guid.NewGuid().ToString("N")));

        StringAssert.Contains(missing, "--name <test-class-name>");
    }
}
