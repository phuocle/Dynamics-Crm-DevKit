using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class TaskWebResourceFileListCoverageTests
{
    private string _root = null!;

    [TestInitialize]
    public void Setup()
    {
        _root = Path.Combine(Path.GetTempPath(), "DevKitCli_WebResourceFiles", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_root);
    }

    [TestCleanup]
    public void Cleanup()
    {
        if (Directory.Exists(_root)) Directory.Delete(_root, true);
    }

    [TestMethod]
    public void WebResourceFiles_ExplicitSupportedFileUsesProvidedUniqueName()
    {
        var file = Path.Combine(_root, "script.js");
        File.WriteAllText(file, "console.log('test');");
        var task = NewTask(new CommandLineArgs { File = file, WebResource = "prefix/script.js", Version = "1.2.3" });

        var files = Files(task);
        Assert.AreEqual(1, files.Count);
        Assert.AreEqual("prefix/script.js", files[0].uniquename);
        Assert.AreEqual("1.2.3", files[0].version);
    }

    [TestMethod]
    public void WebResourceFiles_ExplicitUnsupportedFileIsIgnored()
    {
        var file = Path.Combine(_root, "notes.txt");
        File.WriteAllText(file, "not deployable");
        Assert.AreEqual(0, Files(NewTask(new CommandLineArgs { File = file, WebResource = "prefix/notes.txt" })).Count);
    }

    [TestMethod]
    public void WebResourceFiles_IncludeExcludePatternsBuildSortedResourceNames()
    {
        var source = Path.Combine(_root, "web");
        Directory.CreateDirectory(Path.Combine(source, "nested"));
        File.WriteAllText(Path.Combine(source, "z.js"), "z");
        File.WriteAllText(Path.Combine(source, "nested", "a.css"), "a");
        File.WriteAllText(Path.Combine(source, "nested", "skip.js"), "skip");

        var task = NewTask(new CommandLineArgs(), new JsonWebResource
        {
            solution = "solution", rootfolder = "web",
            includefiles = ["**.*"], excludefiles = ["nested\\skip.js"]
        });
        SetPrivateProperty(task, "SolutionPrefix", "prefix");
        var files = Files(task);

        CollectionAssert.AreEqual(new[] { "prefix/nested/a.css", "prefix/z.js" }, files.Select(f => f.uniquename).ToArray());
    }

    [TestMethod]
    public void WebResourceFiles_TypeScriptFile_BuildsInDebugOrReleaseModeAndResolvesOutput()
    {
        var entitiesDir = Path.Combine(_root, "entities");
        var buildDir = Path.Combine(_root, "build", "entities");
        Directory.CreateDirectory(entitiesDir);
        Directory.CreateDirectory(buildDir);
        File.WriteAllText(Path.Combine(_root, "package.json"), "{}");
        var tsFile = Path.Combine(entitiesDir, "Account.ts");
        var jsFile = Path.Combine(buildDir, "Account.js");
        File.WriteAllText(tsFile, "export class Account {}");
        File.WriteAllText(jsFile, "console.log('built');");

        string? capturedMode = null;
        string? capturedEntity = null;

        // Default (no --build) -> debug
        var debugTask = NewTask(new CommandLineArgs { File = tsFile, WebResource = "dev_/entities/Account.js" });
        debugTask.TypeScriptBuildRunner = (root, mode, entity) =>
        {
            capturedMode = mode;
            capturedEntity = entity;
            return 0;
        };
        var debugFiles = Files(debugTask);
        Assert.HasCount(1, debugFiles);
        Assert.AreEqual("debug", capturedMode);
        Assert.AreEqual("Account", capturedEntity);
        Assert.AreEqual(jsFile, debugFiles[0].file);

        // Explicit --build release -> release
        var releaseTask = NewTask(new CommandLineArgs { File = tsFile, Build = "release", WebResource = "dev_/entities/Account.js" });
        releaseTask.TypeScriptBuildRunner = (root, mode, entity) =>
        {
            capturedMode = mode;
            capturedEntity = entity;
            return 0;
        };
        var releaseFiles = Files(releaseTask);
        Assert.HasCount(1, releaseFiles);
        Assert.AreEqual("release", capturedMode);
        Assert.AreEqual("Account", capturedEntity);
        Assert.AreEqual(jsFile, releaseFiles[0].file);

        // Explicit --build release + WebResourceId (-wid) -> release, placeholder uniquename
        var widId = Guid.NewGuid();
        var releaseWidTask = NewTask(new CommandLineArgs { File = tsFile, Build = "release", WebResourceId = widId });
        releaseWidTask.TypeScriptBuildRunner = (root, mode, entity) =>
        {
            capturedMode = mode;
            capturedEntity = entity;
            return 0;
        };
        var releaseWidFiles = Files(releaseWidTask);
        Assert.HasCount(1, releaseWidFiles);
        Assert.AreEqual("release", capturedMode);
        Assert.AreEqual(jsFile, releaseWidFiles[0].file);
        Assert.AreEqual("Account.js", releaseWidFiles[0].uniquename);

        // Non-zero exit code -> returns empty list
        var failedTask = NewTask(new CommandLineArgs { File = tsFile, Build = "release", WebResource = "dev_/entities/Account.js" });
        failedTask.TypeScriptBuildRunner = (_, _, _) => 1;
        Assert.HasCount(0, Files(failedTask));
    }

    private TaskWebResource NewTask(CommandLineArgs args, JsonWebResource? json = null) =>
        new(args, json ?? new JsonWebResource { solution = "solution", rootfolder = "web", includefiles = [], excludefiles = [] }) { CurrentDirectory = _root };

    private static List<WebResourceFile> Files(TaskWebResource task) =>
        ((IEnumerable)typeof(TaskWebResource).GetProperty("WebResourceFiles", BindingFlags.Instance | BindingFlags.NonPublic)!.GetValue(task)!).Cast<WebResourceFile>().ToList();

    private static void SetPrivateProperty(object target, string name, object value) =>
        target.GetType().GetProperty(name, BindingFlags.Instance | BindingFlags.NonPublic | BindingFlags.Public)!.SetValue(target, value);
}
