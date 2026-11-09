using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// 'devkit solution' validation branches that run offline (every profile
/// check that fires before the pac CLI or Dataverse is touched), the pac
/// detection probe, the Solution.xml version reader and the task getters.
/// The Extract/Pack executions themselves shell out to the pac CLI and a
/// connected org — unreachable from a unit test.
/// </summary>
[TestClass]
public sealed class TaskPacSolutionPackagerOfflineTests
{
    private string _root = null!;

    [TestInitialize]
    public void Setup()
    {
        _root = Path.Combine(Path.GetTempPath(), "DevKitCli_PacPackager", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_root);
    }

    [TestCleanup]
    public void Cleanup()
    {
        if (Directory.Exists(_root)) Directory.Delete(_root, true);
    }

    private static TaskPacSolutionPackager NewTask(string currentDirectory, JsonSolutionPackager? json) => new(
        new CommandLineArgs { Profile = "test" },
        json!) { CurrentDirectory = currentDirectory };

    private static JsonSolutionPackager Json(
        string solution = "MySolution",
        string solutiontype = "Unmanaged",
        string folder = "pack",
        string type = "Pack",
        string? mapfile = null) => new()
        {
            profile = "test",
            solution = solution,
            solutiontype = solutiontype,
            folder = folder,
            type = type,
            mapfile = mapfile
        };

    [TestMethod]
    public async Task Getters_And_IsValidAsync_NullProfile()
    {
        var task = NewTask(_root, null);
        Assert.AreEqual("[SOLUTIONPACKAGERS]", task.TaskType);
        Assert.IsFalse(task.IsOk);
        Assert.AreEqual(Guid.Empty, task.SolutionId);
        Assert.IsNull(task.SolutionPrefix);
        Assert.IsFalse(await task.IsValidAsync(), "'profile' not found — the null json gate fires first.");
    }

    [TestMethod]
    public async Task IsValidAsync_RejectsBadSolutionAndSolutionType()
    {
        Assert.IsFalse(await NewTask(_root, Json(solution: "???")).IsValidAsync());
        Assert.IsFalse(await NewTask(_root, Json(solution: " ")).IsValidAsync());
        Assert.IsFalse(await NewTask(_root, Json(solutiontype: "???")).IsValidAsync());
        Assert.IsFalse(await NewTask(_root, Json(solutiontype: "Bogus")).IsValidAsync());
        Assert.IsFalse(await NewTask(_root, Json(solutiontype: " ")).IsValidAsync());
    }

    [TestMethod]
    public async Task IsValidAsync_RejectsBadFolderAndType()
    {
        Assert.IsFalse(await NewTask(_root, Json(folder: "???")).IsValidAsync());
        Assert.IsFalse(await NewTask(_root, Json(type: "???")).IsValidAsync());
        Assert.IsFalse(await NewTask(_root, Json(type: "Bogus")).IsValidAsync());
        Assert.IsFalse(await NewTask(_root, Json(type: " ")).IsValidAsync());
    }

    [TestMethod]
    public async Task IsValidAsync_PackWithoutSolutionXml_Fails()
    {
        // The Solution.xml the Pack branch requires is missing in the temp
        // workspace; the pac probe never runs.
        Assert.IsFalse(await NewTask(_root, Json()).IsValidAsync());
    }

    [TestMethod]
    public async Task IsValidAsync_MissingMapfile_Fails()
    {
        // Extract skips the Pack Solution.xml check, so the mapfile gate is
        // the one that fires here.
        Assert.IsFalse(await NewTask(_root, Json(type: "Extract", mapfile: "no-such-map.xml")).IsValidAsync());
    }



    [TestMethod]
    public void Deployment_Getter_BuildsTheServiceOnce()
    {
        var task = NewTask(_root, Json());
        var property = typeof(TaskPacSolutionPackager).GetProperty("Deployment", BindingFlags.NonPublic | BindingFlags.Instance)!;
        var first = property.GetValue(task);
        var second = property.GetValue(task);
        Assert.IsNotNull(first, "the expression-bodied getter builds on first read.");
        Assert.AreSame(first, second, "the built service is cached.");
    }

    [TestMethod]
    public async Task GetCrmVersionFromSolutionFolderAsync_ReadsThePackagedVersion()
    {
        var task = NewTask(_root, Json());
        var method = typeof(TaskPacSolutionPackager).GetMethod("GetCrmVersionFromSolutionFolderAsync", BindingFlags.NonPublic | BindingFlags.Instance)!;

        var missing = await (Task<string>)method.Invoke(task, Array.Empty<object?>())!;
        Assert.AreEqual("4.44.44.44", missing, "no Solution.xml — the stable source version is the fallback.");

        var solutionXml = Path.Combine(_root, "pack", "Unmanaged", "Other", "Solution.xml");
        Directory.CreateDirectory(Path.GetDirectoryName(solutionXml)!);
        await File.WriteAllTextAsync(solutionXml,
            "<ImportExportXml><SolutionManifest><Version>7.8.9.10</Version></SolutionManifest></ImportExportXml>");
        var version = await (Task<string>)method.Invoke(task, Array.Empty<object?>())!;
        Assert.AreEqual("7.8.9.10", version);

        await File.WriteAllTextAsync(solutionXml, "<ImportExportXml><SolutionManifest /></ImportExportXml>");
        var fallback = await (Task<string>)method.Invoke(task, Array.Empty<object?>())!;
        Assert.AreEqual("4.44.44.44", fallback, "no <Version> element — the fallback applies again.");
    }
}
