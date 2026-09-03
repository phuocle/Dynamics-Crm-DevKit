using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public sealed class TaskServerPackageCoverageTests
{
    private string _root = null!;

    [TestInitialize]
    public void Setup()
    {
        _root = Path.Combine(Path.GetTempPath(), "DevKitCli_TaskServerPackage", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_root);
    }

    [TestCleanup]
    public void Cleanup()
    {
        if (Directory.Exists(_root)) Directory.Delete(_root, true);
    }

    [TestMethod]
    public void NugetPackageHelper_ExtractsAndSelectsAssemblyOffline()
    {
        var repositoryRoot = Path.GetFullPath(Path.Combine(AppContext.BaseDirectory, "..", "..", "..", ".."));
        var package = Path.Combine(repositoryRoot, "DynamicsCrm.DevKit.Tests", "TestAllInOne", "Dev.AllInOne.SolutionPackager", "all_in_one", "Both", "pluginpackages", "all_Dev.AllInOne.Package", "package", "all_Dev.AllInOne.Package.nupkg");
        Assert.IsTrue(File.Exists(package), "Expected checked-in package fixture was not found.");

        var task = new TaskServer(new CommandLineArgs { Type = "servers", Profile = "p" }, new Json
        {
            servers = new List<JsonServer> { new() { profile = "p", folder = "plugins", solution = "solution" } }
        }) { CurrentDirectory = _root };
        var method = typeof(TaskServer).GetMethod("GetDllFileFromNugetPackage", BindingFlags.Instance | BindingFlags.NonPublic)!;
        var dll = (string)method.Invoke(task, new object[] { package })!;

        // The fixture contains more than one matching assembly, so the helper
        // deliberately refuses to choose a deployment DLL. Its extraction and
        // dependency-loading path must still complete without a live service.
        Assert.AreEqual(string.Empty, dll);
        Assert.IsTrue(Directory.GetFiles(_root, "*.dll", SearchOption.AllDirectories).Length > 0);
    }
}
