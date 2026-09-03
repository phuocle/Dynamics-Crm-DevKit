using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public sealed class TaskWebResourceCoverageTests
{
    private string _root = null!;

    [TestInitialize]
    public void Setup()
    {
        _root = Path.Combine(Path.GetTempPath(), "DevKitCli_TaskWebResource", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_root);
    }

    [TestCleanup]
    public void Cleanup()
    {
        if (Directory.Exists(_root)) Directory.Delete(_root, true);
    }

    [TestMethod]
    public async Task IsValidAsync_BypassesProfileForExplicitFileAndWebResource()
    {
        var task = Task(new CommandLineArgs { File = "x.js", WebResource = "prefix_x" }, null);
        Assert.IsTrue(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValidAsync_RejectsMissingAndInvalidProfileWithoutDataverse()
    {
        Assert.IsFalse(await Task(new CommandLineArgs(), null).IsValidAsync());
        Assert.IsFalse(await Task(new CommandLineArgs(), new JsonWebResource { solution = "???" }).IsValidAsync());
        Assert.IsFalse(await Task(new CommandLineArgs(), new JsonWebResource { solution = " " }).IsValidAsync());
    }

    [TestMethod]
    public void FileAndConfigurationHelpers_HandlePatternsExtensionsAndRelativePaths()
    {
        var task = Task(new CommandLineArgs(), new JsonWebResource { solution = "sol" });
        var nested = Path.Combine(_root, "nested");
        Directory.CreateDirectory(nested);
        File.WriteAllText(Path.Combine(_root, "a.js"), "a");
        File.WriteAllText(Path.Combine(nested, "b.js"), "b");

        Assert.IsTrue((bool)Instance(task, "IsSupportedExtensions", "a.js"));
        Assert.IsFalse((bool)Instance(task, "IsSupportedExtensions", "a.JS"));
        Assert.IsFalse((bool)Instance(task, "IsSupportedExtensions", "a.txt"));
        Assert.AreEqual(1, ((IEnumerable)Instance(task, "GetFiles", Path.Combine(_root, "*.js"))).Cast<object>().Count());
        Assert.AreEqual(2, ((IEnumerable)Instance(task, "GetFiles", Path.Combine(_root, "**.js"))).Cast<object>().Count());
        Assert.AreEqual("\\a.js", Instance(task, "GetConfigFileValue", Path.Combine(_root, "a.js")));
        Assert.AreEqual(_root, Instance(task, "GetConfigDirectory"));
    }

    [TestMethod]
    public void MappingState_IsRememberedAndEmptyIdsAreIgnored()
    {
        var task = Task(new CommandLineArgs(), new JsonWebResource { solution = "sol" });
        var file = new WebResourceFile { file = Path.Combine(_root, "a.js"), uniquename = "sol/a.js" };
        Instance(task, "SetWebResourceManagedState", file, true);
        Assert.IsTrue((bool)Instance(task, "GetWebResourceManagedState", file));
        Instance(task, "AddWebResourceMapping", file, Guid.Empty);
        var mappings = (IList)Field(task, "DeployedWebResourceMappings");
        Assert.AreEqual(0, mappings.Count);
    }

    private TaskWebResource Task(CommandLineArgs args, JsonWebResource json)
        => new(args, json) { CurrentDirectory = _root };

    private static object Instance(TaskWebResource task, string name, params object[] args) =>
        typeof(TaskWebResource).GetMethod(name, BindingFlags.NonPublic | BindingFlags.Instance)!.Invoke(task, args)!;

    private static object Field(TaskWebResource task, string name) =>
        typeof(TaskWebResource).GetField("<" + name + ">k__BackingField", BindingFlags.NonPublic | BindingFlags.Instance)?.GetValue(task)
        ?? typeof(TaskWebResource).GetProperty(name, BindingFlags.NonPublic | BindingFlags.Instance)!.GetValue(task)!;
}
