using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.ModelBuilderLib.Status;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public sealed class TaskOfflineCoverageTests
{
    [TestMethod]
    public async Task DataSourceValidation_RejectsRequiredAndInvalidNamesBeforeDataverse()
    {
        foreach (var json in new[]
        {
            new JsonDataSource { solution = "???", displayname = "Name", pluralname = "Names" },
            new JsonDataSource { solution = "solution", displayname = "???", pluralname = "Names" },
            new JsonDataSource { solution = "solution", displayname = "Name", pluralname = "???" },
            new JsonDataSource { solution = "solution", displayname = "Invalid!", pluralname = "Names" },
            new JsonDataSource { solution = "solution", displayname = "Name", pluralname = "Invalid!" }
        })
            Assert.IsFalse(await new TaskDataSource(Args(), json).IsValidAsync());
    }

    [TestMethod]
    public async Task ModelBuilderValidation_RejectsMissingValuesAndAcceptsConfiguredValues()
    {
        Assert.IsFalse(await new TaskModelBuilder(Args(), new JsonModelBuilder { @namespace = "???", output = "models.cs" }).IsValidAsync());
        Assert.IsFalse(await new TaskModelBuilder(Args(), new JsonModelBuilder { @namespace = "Models", output = " " }).IsValidAsync());
        Assert.IsTrue(await new TaskModelBuilder(Args(), new JsonModelBuilder { @namespace = "Models", output = "models.cs" }).IsValidAsync());
    }

    [TestMethod]
    public void ModelBuilderArguments_CoverAllAndFilteredEntityModes()
    {
        var all = new TaskModelBuilder(Args(), new JsonModelBuilder { @namespace = "Demo.Models", output = "generated/models.cs", entities = "all" }) { CurrentDirectory = Environment.CurrentDirectory };
        var allArgs = Invoke<string[]>(all, "BuildModelBuilderArgs");
        CollectionAssert.Contains(allArgs, "/nologo");
        CollectionAssert.Contains(allArgs, "/namespace:Demo.Models");
        Assert.IsFalse(allArgs.Any(x => x.StartsWith("/entitynamesfilter:")));

        var filtered = new TaskModelBuilder(Args(), new JsonModelBuilder { @namespace = "Demo", output = "models.cs", entities = "Account,Contact" }) { CurrentDirectory = Environment.CurrentDirectory };
        var filteredArgs = Invoke<string[]>(filtered, "BuildModelBuilderArgs");
        CollectionAssert.Contains(filteredArgs, "/entitynamesfilter:account;contact");
        CollectionAssert.Contains(filteredArgs, "/emitFieldsClasses");
        CollectionAssert.Contains(filteredArgs, "/generateGlobalOptionSets");
    }

    [TestMethod]
    public async Task SolutionPackagerValidation_RejectsInvalidSettingsBeforePacOrDataverse()
    {
        foreach (var json in new[]
        {
            new JsonSolutionPackager { solution = "???", solutiontype = "Managed", folder = "folder", type = "Extract" },
            new JsonSolutionPackager { solution = "solution", solutiontype = "invalid", folder = "folder", type = "Extract" },
            new JsonSolutionPackager { solution = "solution", solutiontype = "Managed", folder = "???", type = "Extract" },
            new JsonSolutionPackager { solution = "solution", solutiontype = "Managed", folder = "folder", type = "invalid" }
        })
            Assert.IsFalse(await new TaskPacSolutionPackager(Args(), json).IsValidAsync());
    }

    [TestMethod]
    public void SolutionPackagerFilename_FormatsBuildAndManagedSuffix()
    {
        var task = new TaskPacSolutionPackager(Args(), new JsonSolutionPackager());
        Assert.AreEqual("demo_4.44.0007.9_managed.zip", Invoke<string>(task, "FormatSolutionVersionString", "demo", new Version(4, 44, 7, 9), "managed"));
        Assert.AreEqual("demo_4.44.0123.9.zip", Invoke<string>(task, "FormatSolutionVersionString", "demo", new Version(4, 44, 123, 9), "Unmanaged"));
    }

    [TestMethod]
    public async Task SolutionPackager_PackReadsVersionAndBuildsExpectedZipPathOffline()
    {
        var root = Path.Combine(Path.GetTempPath(), "DevKitCliPack", Guid.NewGuid().ToString("N"));
        try
        {
            var json = new JsonSolutionPackager { solution = "demo", folder = "source", solutiontype = "Managed", type = "Pack" };
            var solutionXml = Path.Combine(root, json.folder, json.solutiontype, "Other", "Solution.xml");
            Directory.CreateDirectory(Path.GetDirectoryName(solutionXml)!);
            await File.WriteAllTextAsync(solutionXml, "<ImportExportXml><Version>4.44.7.9</Version></ImportExportXml>");

            var task = new TaskPacSolutionPackager(Args(), json) { CurrentDirectory = root };
            var version = await Invoke<Task<string>>(task, "GetCrmVersionFromSolutionFolderAsync");
            Assert.AreEqual("4.44.7.9", version);
            var zip = await Invoke<Task<string>>(task, "GetSolutionZipFileAsync");
            Assert.AreEqual(Path.Combine(root, "source", "Solutions-Pack", "demo_4.44.0007.9_managed.zip"), zip);
        }
        finally
        {
            if (Directory.Exists(root)) Directory.Delete(root, true);
        }
    }

    private static CommandLineArgs Args() => new();

    private static T Invoke<T>(object target, string name, params object[] args) =>
        (T)target.GetType().GetMethod(name, BindingFlags.Instance | BindingFlags.NonPublic)!.Invoke(target, args)!;
}
