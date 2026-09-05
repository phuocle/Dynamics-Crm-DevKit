using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public sealed class TaskWebResourceDependencyCoverageTests
{
    [TestMethod]
    public async Task TransformPatternAsync_ExpandsEntityTokensFromFormsAndApis()
    {
        var root = Path.Combine(Path.GetTempPath(), "DevKitCliDependency", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(root);
        try
        {
            var task = new TaskWebResource(new CommandLineArgs(), new JsonWebResource()) { CurrentDirectory = root };
            var resources = new List<WebResourceFile>
            {
                new() { file = Path.Combine(root, "Account.form.js") },
                new() { file = Path.Combine(root, "Contact.webapi.js") }
            };
            var input = new List<Dependency>
            {
                new() { webresources = ["[entity].form.js"], dependencies = ["[entity].webapi.js"] },
                new() { webresources = ["shared.js"], dependencies = ["common.css"] }
            };

            var result = await Invoke<Task<List<Dependency>>>(task, "TransformPatternAsync", input, resources);

            Assert.AreEqual(3, result.Count);
            CollectionAssert.AreEquivalent(new[] { "Account.form.js", "Contact.form.js", "shared.js" }, result.SelectMany(x => x.webresources).ToArray());
            CollectionAssert.Contains(result.SelectMany(x => x.dependencies).ToArray(), "Account.webapi.js");
            CollectionAssert.Contains(result.SelectMany(x => x.dependencies).ToArray(), "Contact.webapi.js");
        }
        finally
        {
            if (Directory.Exists(root)) Directory.Delete(root, true);
        }
    }

    [TestMethod]
    public async Task GetDependenciesAsync_ReturnsEmptyForFastDeployAndCachesConfiguredDependencies()
    {
        var fast = new TaskWebResource(new CommandLineArgs { File = "single.js" }, new JsonWebResource { includefiles = [], excludefiles = [], dependencies = [] });
        var empty = await Invoke<Task<List<Dependency>>>(fast, "GetDependenciesAsync");
        Assert.AreEqual(0, empty.Count);

        var root = Path.Combine(Path.GetTempPath(), "DevKitCliDependency", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(root);
        try
        {
            File.WriteAllText(Path.Combine(root, "Account.form.js"), "// form");
            var json = new JsonWebResource
            {
                rootfolder = ".",
                includefiles = ["Account.form.js"],
                excludefiles = [],
                dependencies = [new Dependency { webresources = ["shared.js"], dependencies = ["common.css"] }]
            };
            var configured = new TaskWebResource(new CommandLineArgs(), json) { CurrentDirectory = root, SolutionPrefix = "devkit" };
            var first = await Invoke<Task<List<Dependency>>>(configured, "GetDependenciesAsync");
            var second = await Invoke<Task<List<Dependency>>>(configured, "GetDependenciesAsync");
            Assert.AreSame(first, second);
            Assert.AreEqual(1, first.Count);
        }
        finally
        {
            if (Directory.Exists(root)) Directory.Delete(root, true);
        }
    }

    private static T Invoke<T>(object target, string name, params object[] args) =>
        (T)target.GetType().GetMethod(name, BindingFlags.Instance | BindingFlags.NonPublic)!.Invoke(target, args)!;
}
