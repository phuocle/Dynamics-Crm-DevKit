using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// Non-interactive gates of TaskNewItem.RunAsync: the Test template's
/// no-candidates name requirement and the missing-project walk-up failure.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class TaskNewItemGateWave3Tests
{
    private string _root = null!;
    private string _originalCwd = null!;

    [TestInitialize]
    public void Setup()
    {
        _root = Path.Combine(Path.GetTempPath(), "DevKitCli_NewItemGate", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_root);
        File.WriteAllText(Path.Combine(_root, "MyProj.csproj"),
            "<Project Sdk=\"Microsoft.NET.Sdk\">\n  <PropertyGroup>\n    <TargetFramework>net48</TargetFramework>\n  </PropertyGroup>\n</Project>\n");
        _originalCwd = Environment.CurrentDirectory;
        Environment.CurrentDirectory = _root;
        ScriptedConsole.Install();
        SpectreLog.IsPlain = true;
    }

    [TestCleanup]
    public void Cleanup()
    {
        SpectreLog.IsPlain = false;
        ScriptedConsole.Restore();
        Environment.CurrentDirectory = _originalCwd;
        if (Directory.Exists(_root)) Directory.Delete(_root, true);
    }

    [TestMethod]
    public async Task Test_Item_Without_Candidates_Requires_Name()
    {
        var args = new NewItemCommandArgs { Type = "Test", Project = "MyProj" };
        var exception = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        StringAssert.Contains(exception.Message, "--name");
    }

    [TestMethod]
    public async Task Missing_Project_Throws_Validation_Exception()
    {
        var args = new NewItemCommandArgs { Type = "Plugin", Project = "NoSuchProject" };
        var exception = await Assert.ThrowsExactlyAsync<DevKitValidationException>(() => TaskNewItem.RunAsync(args));
        Assert.IsFalse(string.IsNullOrWhiteSpace(exception.Message));
    }
}
