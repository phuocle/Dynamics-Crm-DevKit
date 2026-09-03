using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public sealed class TaskUploadReportCoverageTests
{
    private string _root = null!;

    [TestInitialize]
    public void Setup()
    {
        _root = Path.Combine(Path.GetTempPath(), "DevKitCli_TaskUploadReport", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_root);
    }

    [TestCleanup]
    public void Cleanup()
    {
        if (Directory.Exists(_root)) Directory.Delete(_root, true);
    }

    [TestMethod]
    public async Task IsValidAsync_HandlesFastDeployAndOfflineProfileErrors()
    {
        Assert.IsTrue(await Task(new CommandLineArgs { File = "report.rdl" }, null).IsValidAsync());
        Assert.IsFalse(await Task(new CommandLineArgs(), null).IsValidAsync());
        Assert.IsFalse(await Task(new CommandLineArgs(), new JsonUploadReport { solution = "???" }).IsValidAsync());
        Assert.IsFalse(await Task(new CommandLineArgs(), new JsonUploadReport { solution = " " }).IsValidAsync());
    }

    [TestMethod]
    public async Task MappingAndPathHelpers_UseConfigDirectoryAndUpdateMappings()
    {
        var task = Task(new CommandLineArgs(), new JsonUploadReport { solution = "sol" });
        var reportFile = Path.Combine(_root, "reports", "account.rdl");
        Directory.CreateDirectory(Path.GetDirectoryName(reportFile)!);
        File.WriteAllText(reportFile, "content");

        Assert.AreEqual("\\reports\\account.rdl", Instance(task, "GetConfigFileValue", reportFile));
        Assert.AreEqual("..\\reports\\account.rdl", Instance(task, "GetDisplayFile", reportFile));
        Assert.IsNull(await InvokeTask<object>(task, "GetReportMappingAsync", reportFile));

        var report = new DeployReport { ReportId = Guid.NewGuid(), ReportName = "Account", ReportFileName = "account.rdl", Language = "en", LanguageCode = 1033 };
        await InvokeTask(task, "SaveReportMappingAsync", reportFile, report);
        var mapping = await InvokeTask<DeployReport>(task, "GetReportMappingAsync", reportFile);
        Assert.IsNotNull(mapping);
        Assert.AreEqual(report.ReportId, mapping.ReportId);
    }

    [TestMethod]
    public async Task RunAsync_FastDeployRejectsMissingAndNonRdlFilesBeforeDataverse()
    {
        var missing = Task(new CommandLineArgs { File = Path.Combine(_root, "missing.rdl") }, new JsonUploadReport());
        await missing.RunAsync();
        var text = Path.Combine(_root, "not-report.txt");
        File.WriteAllText(text, "x");
        await Task(new CommandLineArgs { File = text }, new JsonUploadReport()).RunAsync();
    }

    private TaskUploadReport Task(CommandLineArgs args, JsonUploadReport json) => new(args, json) { CurrentDirectory = _root };

    private static object Instance(TaskUploadReport task, string name, params object[] args) =>
        typeof(TaskUploadReport).GetMethod(name, BindingFlags.NonPublic | BindingFlags.Instance)!.Invoke(task, args)!;

    private static async Task<T> InvokeTask<T>(TaskUploadReport task, string name, params object[] args)
    {
        var invoked = (Task)Instance(task, name, args);
        await invoked;
        return (T)invoked.GetType().GetProperty("Result")!.GetValue(invoked)!;
    }

    private static async Task InvokeTask(TaskUploadReport task, string name, params object[] args) =>
        await (Task)Instance(task, name, args);
}
