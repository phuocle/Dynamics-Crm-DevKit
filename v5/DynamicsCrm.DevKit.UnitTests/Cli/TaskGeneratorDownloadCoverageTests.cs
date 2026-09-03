using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public sealed class TaskGeneratorDownloadCoverageTests
{
    [TestMethod]
    public async Task GeneratorValidation_RejectsInvalidConfigurationOffline()
    {
        foreach (var json in new[]
        {
            new JsonGenerator { rootfolder = "???", type = "csharp", rootnamespace = "Demo" },
            new JsonGenerator { rootfolder = "src", type = "???", rootnamespace = "Demo" },
            new JsonGenerator { rootfolder = "src", type = "unknown", rootnamespace = "Demo" },
            new JsonGenerator { rootfolder = "src", type = "jsform", rootnamespace = " " }
        })
            Assert.IsFalse(await new TaskGenerator(Args(), json).IsValidAsync());
    }

    [TestMethod]
    public async Task GeneratorValidation_AllowsTypescriptWithoutRootNamespace()
    {
        Assert.IsTrue(await new TaskGenerator(Args(), new JsonGenerator { rootfolder = "src", type = "tsform", rootnamespace = "???" }).IsValidAsync());
        Assert.IsTrue(await new TaskGenerator(Args(), new JsonGenerator { rootfolder = "src", type = "tswebapi", rootnamespace = "" }).IsValidAsync());
    }

    [TestMethod]
    public async Task GeneratorSchemaNames_UsesExplicitListWithoutFilesystemOrDataverse()
    {
        var task = new TaskGenerator(Args(), new JsonGenerator
        {
            rootfolder = "unused",
            rootnamespace = "Demo",
            type = "jswebapi",
            entities = "account,contact, lead"
        });
        var result = await Invoke<Task<List<string>>>(task, "GetSchemaNamesAsync");
        CollectionAssert.AreEqual(new[] { "account", "contact", " lead" }, result);
    }

    [TestMethod]
    public async Task DownloadTasks_RejectMissingSolutionBeforeDataverse()
    {
        foreach (var solution in new[] { "???", " " })
        {
            Assert.IsFalse(await new TaskDownloadReport(Args(), new JsonDownloadReport { solution = solution }).IsValidAsync());
            Assert.IsFalse(await new TaskDownloadWebResource(Args(), new JsonDownloadWebResource { solution = solution }).IsValidAsync());
        }
    }

    private static CommandLineArgs Args() => new() { Profile = "test" };

    private static T Invoke<T>(object target, string method) =>
        (T)target.GetType().GetMethod(method, BindingFlags.Instance | BindingFlags.NonPublic)!.Invoke(target, null)!;
}
