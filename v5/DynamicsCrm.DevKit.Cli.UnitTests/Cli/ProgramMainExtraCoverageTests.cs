using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// Wave-2 entry-point coverage: Program.Main dispatch paths that run the
/// CommandApp Configure lambda ('new-item list', 'generator --help'), the
/// removed-'devkit new' guard, and the DEVKIT_NO_COLOR project-.env plain
/// mode detection (IsPlainFromProjectEnvironment). The .env probe uses an
/// isolated temp root OUTSIDE the repository tree because ProjectEnvironment
/// walks up from the current directory to the drive root.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ProgramMainExtraCoverageTests
{
    [TestMethod]
    public async Task Main_NewCommand_Removed_ReportsTheSplitAndReturnsOne()
    {
        // 'devkit new' was removed — the error branch returns 1 directly.
        var exit = await Program.Main(new[] { "new" });
        Assert.AreEqual(1, exit, "'devkit new' reports the scaffold split and exits 1.");
        SpectreLog.IsPlain = false;
    }

    [TestMethod]
    public async Task Main_NewItemList_RunsTheCommandAppConfigureLambda()
    {
        // A real command dispatch: the Configure lambda (every AddCommand)
        // runs and the CommandApp executes 'new-item list' offline.
        var exit = await Program.Main(new[] { "new-item", "list" });
        Assert.AreEqual(0, exit, "'new-item list' is an offline catalog print.");
    }

    [TestMethod]
    public async Task Main_GeneratorHelp_RunsConfigureAndShowsCommandHelp()
    {
        var exit = await Program.Main(new[] { "generator", "--help" });
        Assert.AreEqual(0, exit, "command help exits 0.");
    }

    // ────────────────────────────────────────────────────────────────────
    // IsPlainFromProjectEnvironment — the DEVKIT_NO_COLOR project-.env probe.
    // ────────────────────────────────────────────────────────────────────

    private string _originalCwd = null!;

    private string NewIsolatedTempRoot()
    {
        // The .env walk-up goes to the drive root: the fixture must live
        // OUTSIDE the repository tree so no repo-level .env is found.
        var root = Path.Combine(Path.GetTempPath(), "DevKitCli_PlainEnv_" + Guid.NewGuid().ToString("N"), "work");
        Directory.CreateDirectory(root);
        return root;
    }

    [TestMethod]
    public void IsPlainFromProjectEnvironment_NoEnvFile_ReturnsFalse()
    {
        _originalCwd = Directory.GetCurrentDirectory();
        var root = NewIsolatedTempRoot();
        try
        {
            Directory.SetCurrentDirectory(root);
            Assert.IsFalse(Program.IsPlainFromProjectEnvironment(), "no .env on the walk-up — rich output stays.");
        }
        finally
        {
            Directory.SetCurrentDirectory(_originalCwd);
            Directory.Delete(Path.GetDirectoryName(root)!, true);
        }
    }

    [TestMethod]
    public async Task Main_EnvFileWithNoColor_SwitchesToPlainMode()
    {
        _originalCwd = Directory.GetCurrentDirectory();
        var root = NewIsolatedTempRoot();
        try
        {
            Directory.SetCurrentDirectory(root);
            File.WriteAllText(Path.Combine(root, ProjectEnvironment.FileName), "DEVKIT_NO_COLOR=1\n");
            Assert.IsTrue(Program.IsPlainFromProjectEnvironment(), "DEVKIT_NO_COLOR in the project .env enables plain mode.");

            // Through Main: the probe branch runs before the help dispatch.
            var exit = await Program.Main(Array.Empty<string>());
            Assert.AreEqual(0, exit);
            Assert.IsTrue(SpectreLog.IsPlain, "Main switched the logger to plain mode from the project .env.");
            SpectreLog.IsPlain = false;
        }
        finally
        {
            SpectreLog.IsPlain = false;
            Directory.SetCurrentDirectory(_originalCwd);
            Directory.Delete(Path.GetDirectoryName(root)!, true);
        }
    }

    [TestMethod]
    public void IsPlainFromProjectEnvironment_EmptyNoColorValue_ReturnsFalse()
    {
        _originalCwd = Directory.GetCurrentDirectory();
        var root = NewIsolatedTempRoot();
        try
        {
            Directory.SetCurrentDirectory(root);
            File.WriteAllText(Path.Combine(root, ProjectEnvironment.FileName), "DEVKIT_NO_COLOR=\n");
            Assert.IsFalse(Program.IsPlainFromProjectEnvironment(), "a whitespace value does not enable plain mode.");
        }
        finally
        {
            Directory.SetCurrentDirectory(_originalCwd);
            Directory.Delete(Path.GetDirectoryName(root)!, true);
        }
    }

    // NOTE (skipped branch): the catch inside IsPlainFromProjectEnvironment
    // (ProjectEnvironment.Read/FindFile throwing) has no reachable trigger —
    // FindFile catches its own IO failures and Read parses plain text, so a
    // deterministic fixture cannot force it. Left uncovered by design.
}
