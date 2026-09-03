using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

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

    private TaskWebResource NewTask(CommandLineArgs args, JsonWebResource? json = null) =>
        new(args, json ?? new JsonWebResource { solution = "solution", rootfolder = "web", includefiles = [], excludefiles = [] }) { CurrentDirectory = _root };

    private static List<WebResourceFile> Files(TaskWebResource task) =>
        ((IEnumerable)typeof(TaskWebResource).GetProperty("WebResourceFiles", BindingFlags.Instance | BindingFlags.NonPublic)!.GetValue(task)!).Cast<WebResourceFile>().ToList();

    private static void SetPrivateProperty(object target, string name, object value) =>
        target.GetType().GetProperty(name, BindingFlags.Instance | BindingFlags.NonPublic | BindingFlags.Public)!.SetValue(target, value);
}
