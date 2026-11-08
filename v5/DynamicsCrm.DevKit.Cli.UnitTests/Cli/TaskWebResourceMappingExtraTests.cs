using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// TaskWebResource's config-file helpers that the deploy flow leans on:
/// the config-directory search overloads (json directory hit, source-file
/// walk-up), the relative/full file-value conversion, the mapping lookup's
/// filename and web-resource-suffix fallbacks (the TypeScript candidate
/// pass needs an npm build — unreachable), the corrupt-config guard, and
/// the in-memory mapping update when the same file deploys twice.
/// </summary>
[TestClass]
public sealed class TaskWebResourceMappingExtraTests
{
    private string _root = null!;

    [TestInitialize]
    public void Setup()
    {
        _root = Path.Combine(Path.GetTempPath(), "DevKitCli_WebResourceMapping", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_root);
    }

    [TestCleanup]
    public void Cleanup()
    {
        if (Directory.Exists(_root)) Directory.Delete(_root, true);
    }

    private static TaskWebResource NewTask(string currentDirectory, string? file = null) => new(
        new CommandLineArgs { File = file },
        new JsonWebResource { solution = "TestSolution" }) { CurrentDirectory = currentDirectory };

    // ── GetConfigDirectory ─────────────────────────────────────────────

    [TestMethod]
    public void GetConfigDirectory_ReturnsTheJsonDirectoryWhenConfigSitsThere()
    {
        File.WriteAllText(Path.Combine(_root, Const.DynamicsCrmDevKitConfigJson), "{}");
        Assert.AreEqual(_root, TaskWebResource.GetConfigDirectory(_root, @"C:\elsewhere", null),
            "a config next to the resolved json wins over the current directory.");
    }

    [TestMethod]
    public void GetConfigDirectory_WalksUpFromTheSourceFile()
    {
        var parent = Path.Combine(_root, "project");
        var deep = Path.Combine(parent, "src", "webresources");
        Directory.CreateDirectory(deep);
        File.WriteAllText(Path.Combine(parent, Const.DynamicsCrmDevKitConfigJson), "{}");

        Assert.AreEqual(parent, TaskWebResource.GetConfigDirectory(null, deep, Path.Combine(deep, "a.js")),
            "the config above the source file is found when no json directory is given.");

        Assert.AreEqual(parent, TaskWebResource.GetConfigDirectory(null, deep, null),
            "the current-directory walk-up also finds it.");
    }

    [TestMethod]
    public void GetConfigDirectory_FallsBackToTheCurrentDirectory()
    {
        Assert.AreEqual(_root, TaskWebResource.GetConfigDirectory(null, _root, null),
            "no config anywhere — the current directory is the answer.");
    }

    // ── GetConfigFileValue ─────────────────────────────────────────────

    [TestMethod]
    public void GetConfigFileValue_ConvertsInsideRootToRelativeAndKeepsOutsideFull()
    {
        var inside = Path.Combine(_root, "web", "a.js");
        Assert.AreEqual("\\web\\a.js", TaskWebResource.GetConfigFileValue(inside, _root));

        var outside = Path.Combine(Path.GetTempPath(), "elsewhere-a.js");
        Assert.AreEqual(Path.GetFullPath(outside), TaskWebResource.GetConfigFileValue(outside, _root),
            "a file outside the config root keeps its full path.");
    }

    // ── GetWebResourceMapping fallbacks ────────────────────────────────

    private string WriteConfig(string json)
    {
        File.WriteAllText(Path.Combine(_root, Const.DynamicsCrmDevKitConfigJson), json);
        return _root;
    }

    [TestMethod]
    public void GetWebResourceMapping_MatchesByFileNameWithoutExtension()
    {
        var configDir = WriteConfig("""
            {
              "WebResources": [
                { "File": "\\\\unrelated\\path\\myscript.js", "WebResource": "pub_/other/name.js", "WebResourceId": "44444444-4444-4444-4444-444444444444" }
              ]
            }
            """);
        var mapping = TaskWebResource.GetWebResourceMapping(Path.Combine(_root, "deep", "MyScript.js"), configDir, null);
        Assert.IsNotNull(mapping, "fallback 3: the file name without extension matched.");
        Assert.AreEqual("pub_/other/name.js", mapping.WebResource);
    }

    [TestMethod]
    public void GetWebResourceMapping_MatchesByWebResourceSuffix()
    {
        var configDir = WriteConfig("""
            {
              "WebResources": [
                { "File": "\\\\something\\else.js", "WebResource": "pub_/forms/Contact/myscript.ts", "WebResourceId": "44444444-4444-4444-4444-444444444444" }
              ]
            }
            """);
        var mapping = TaskWebResource.GetWebResourceMapping(Path.Combine(_root, "MyScript.js"), configDir, null);
        Assert.IsNotNull(mapping, "fallback 4: the web resource name suffix matched.");
        Assert.AreEqual("44444444-4444-4444-4444-444444444444", mapping.WebResourceId.ToString());
    }

    [TestMethod]
    public void GetWebResourceMapping_EmptyAndMissingSections_ReturnNull()
    {
        var empty = WriteConfig("""{ "WebResources": [] }""");
        Assert.IsNull(TaskWebResource.GetWebResourceMapping(Path.Combine(_root, "a.js"), empty));

        var directory = Path.Combine(_root, "no-config");
        Directory.CreateDirectory(directory);
        Assert.IsNull(TaskWebResource.GetWebResourceMapping(Path.Combine(_root, "a.js"), directory),
            "no config file — no mapping.");
        Assert.IsNull(TaskWebResource.GetWebResourceMapping(Path.Combine(_root, "a.js"), null!),
            "an empty config directory short-circuits.");
    }

    [TestMethod]
    public void GetWebResourceMapping_CorruptConfig_ReturnsNull()
    {
        var configDir = WriteConfig("{ this is not json ");
        Assert.IsNull(TaskWebResource.GetWebResourceMapping(Path.Combine(_root, "a.js"), configDir),
            "the corrupt config is swallowed by the catch.");
    }

    [TestMethod]
    public void GetWebResourceMapping_UnmatchedConfig_YieldsNull()
    {
        var configDir = WriteConfig("""
            {
              "WebResources": [
                { "File": "\\web\\other.js", "WebResource": "pub_/other.js", "WebResourceId": "44444444-4444-4444-4444-444444444444" }
              ]
            }
            """);
        Assert.IsNull(TaskWebResource.GetWebResourceMapping(Path.Combine(_root, "zzz.js"), configDir));
    }

    // ── AddWebResourceMapping (in-memory state) ────────────────────────

    [TestMethod]
    public void AddWebResourceMapping_UpdatesTheEntryWhenTheFileDeploysAgain()
    {
        var task = NewTask(_root);
        var method = typeof(TaskWebResource).GetMethod("AddWebResourceMapping", BindingFlags.NonPublic | BindingFlags.Instance)!;
        var file = new WebResourceFile { file = "web\\a.js", uniquename = "pub_/a.js" };
        var firstId = Guid.NewGuid();
        var secondId = Guid.NewGuid();

        method.Invoke(task, new object?[] { file, firstId });
        method.Invoke(task, new object?[] { file, secondId }); // same file → update, not duplicate

        var mappings = (List<DeployWebResource>)typeof(TaskWebResource)
            .GetProperty("DeployedWebResourceMappings", BindingFlags.NonPublic | BindingFlags.Instance)!
            .GetValue(task)!;
        Assert.HasCount(1, mappings, "the second deploy updated the existing entry.");
        Assert.AreEqual(secondId, mappings[0].WebResourceId);
        Assert.AreEqual("pub_/a.js", mappings[0].WebResource);
        Assert.AreEqual("TestSolution", mappings[0].SolutionUniqueName);
    }

    // ── GetConfigFileValue instance pass-through ───────────────────────

    [TestMethod]
    public void AddWebResourceMapping_EmptyId_IsIgnored()
    {
        var task = NewTask(_root);
        var method = typeof(TaskWebResource).GetMethod("AddWebResourceMapping", BindingFlags.NonPublic | BindingFlags.Instance)!;
        method.Invoke(task, new object?[] { new WebResourceFile { file = "a.js" }, Guid.Empty });
        var mappings = (List<DeployWebResource>)typeof(TaskWebResource)
            .GetProperty("DeployedWebResourceMappings", BindingFlags.NonPublic | BindingFlags.Instance)!
            .GetValue(task)!;
        Assert.IsEmpty(mappings, "Guid.Empty mappings are never recorded.");
    }
}
