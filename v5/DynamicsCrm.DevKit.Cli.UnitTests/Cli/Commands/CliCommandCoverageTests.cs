using DynamicsCrm.DevKit.Cli.Commands;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Commands;

[TestClass]
[DoNotParallelize]
public sealed class CliCommandCoverageTests
{
    private static readonly BindingFlags InstancePrivate = BindingFlags.NonPublic | BindingFlags.Instance;
    private string _tempDir = null!;
    private string _origCwd = null!;

    [TestInitialize]
    public void Setup()
    {
        _origCwd = Environment.CurrentDirectory;
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit_cmd_cov_" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        Environment.CurrentDirectory = _tempDir;
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = _origCwd;
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    [TestMethod]
    public async Task ProxyTypeCommand_CoversDeprecationAndProfileBranches()
    {
        var cmd = new ProxyTypeCommand();
        var buildArgRows = typeof(ProxyTypeCommand).GetMethod("BuildArgRows", InstancePrivate);
        var runTaskAsync = typeof(ProxyTypeCommand).GetMethod("RunTaskAsync", InstancePrivate);
        Assert.IsNotNull(buildArgRows);
        Assert.IsNotNull(runTaskAsync);

        var rows = (List<string[]>?)buildArgRows.Invoke(cmd, [new ProxyTypeCommandArgs()]);
        Assert.IsNotNull(rows);
        Assert.AreEqual(0, rows.Count);

        // 1. JSON file without proxytypes section
        var jsonFile1 = Path.Combine(_tempDir, "cli1.json");
        File.WriteAllText(jsonFile1, "{}");
        var args1 = new ProxyTypeCommandArgs { Json = jsonFile1, Profile = "TEST" };
        await (Task)runTaskAsync.Invoke(cmd, [args1])!;

        // 2. JSON file with proxytypes section but missing profile
        var jsonFile2 = Path.Combine(_tempDir, "cli2.json");
        File.WriteAllText(jsonFile2, "{\"proxytypes\":[{\"profile\":\"OTHER\"}]}");
        var args2 = new ProxyTypeCommandArgs { Json = jsonFile2, Profile = "TEST" };
        await (Task)runTaskAsync.Invoke(cmd, [args2])!;

        // 3. JSON file with matching profile (redirects to TaskModelBuilder.RunAsync)
        var jsonFile3 = Path.Combine(_tempDir, "cli3.json");
        File.WriteAllText(jsonFile3, "{\"proxytypes\":[{\"profile\":\"TEST\",\"namespace\":\"Demo\",\"output\":\"out.cs\"}]}");
        var args3 = new ProxyTypeCommandArgs { Json = jsonFile3, Profile = "TEST" };
        await (Task)runTaskAsync.Invoke(cmd, [args3])!;
    }

    [TestMethod]
    public async Task SolutionPackagerCommands_CoversBuildArgRowsAndProfileBranches()
    {
        // SolutionPackagerCommand
        var cmd1 = new SolutionPackagerCommand();
        var rows1 = (List<string[]>?)typeof(SolutionPackagerCommand).GetMethod("BuildArgRows", InstancePrivate)!
            .Invoke(cmd1, [new PacSolutionPackagerCommandArgs()]);
        Assert.IsNotNull(rows1);

        var run1 = typeof(SolutionPackagerCommand).GetMethod("RunTaskAsync", InstancePrivate)!;
        var jsonFile1 = Path.Combine(_tempDir, "sp1.json");
        File.WriteAllText(jsonFile1, "{}");
        await (Task)run1.Invoke(cmd1, [new PacSolutionPackagerCommandArgs { Json = jsonFile1, Profile = "MISSING" }])!;

        File.WriteAllText(jsonFile1, "{\"solutionpackagers\":[{\"profile\":\"OTHER\"}]}");
        await (Task)run1.Invoke(cmd1, [new PacSolutionPackagerCommandArgs { Json = jsonFile1, Profile = "MISSING" }])!;

        // PacSolutionPackagerCommand
        var cmd2 = new PacSolutionPackagerCommand();
        var rows2 = (List<string[]>?)typeof(PacSolutionPackagerCommand).GetMethod("BuildArgRows", InstancePrivate)!
            .Invoke(cmd2, [new PacSolutionPackagerCommandArgs()]);
        Assert.IsNotNull(rows2);

        var run2 = typeof(PacSolutionPackagerCommand).GetMethod("RunTaskAsync", InstancePrivate)!;
        await (Task)run2.Invoke(cmd2, [new PacSolutionPackagerCommandArgs { Json = jsonFile1, Profile = "MISSING" }])!;
    }

    [TestMethod]
    public async Task DownloadCommands_CoversBuildArgRowsAndProfileBranches()
    {
        var jsonFile = Path.Combine(_tempDir, "dl.json");
        File.WriteAllText(jsonFile, "{}");

        // DownloadReportCommand
        var cmdReport = new DownloadReportCommand();
        var rowsReport = (List<string[]>?)typeof(DownloadReportCommand).GetMethod("BuildArgRows", InstancePrivate)!
            .Invoke(cmdReport, [new DownloadReportCommandArgs()]);
        Assert.IsNotNull(rowsReport);

        var runReport = typeof(DownloadReportCommand).GetMethod("RunTaskAsync", InstancePrivate)!;
        await (Task)runReport.Invoke(cmdReport, [new DownloadReportCommandArgs { Json = jsonFile, Profile = "TEST" }])!;

        File.WriteAllText(jsonFile, "{\"downloadreports\":[{\"profile\":\"OTHER\"}]}");
        await (Task)runReport.Invoke(cmdReport, [new DownloadReportCommandArgs { Json = jsonFile, Profile = "TEST" }])!;

        // DownloadWebResourceCommand
        File.WriteAllText(jsonFile, "{}");
        var cmdWr = new DownloadWebResourceCommand();
        var rowsWr = (List<string[]>?)typeof(DownloadWebResourceCommand).GetMethod("BuildArgRows", InstancePrivate)!
            .Invoke(cmdWr, [new DownloadWebResourceCommandArgs()]);
        Assert.IsNotNull(rowsWr);

        var runWr = typeof(DownloadWebResourceCommand).GetMethod("RunTaskAsync", InstancePrivate)!;
        await (Task)runWr.Invoke(cmdWr, [new DownloadWebResourceCommandArgs { Json = jsonFile, Profile = "TEST" }])!;

        File.WriteAllText(jsonFile, "{\"downloadwebresources\":[{\"profile\":\"OTHER\"}]}");
        await (Task)runWr.Invoke(cmdWr, [new DownloadWebResourceCommandArgs { Json = jsonFile, Profile = "TEST" }])!;
    }

    [TestMethod]
    public async Task OtherCommands_CoversBuildArgRowsAndProfileBranches()
    {
        var jsonFile = Path.Combine(_tempDir, "other.json");
        File.WriteAllText(jsonFile, "{}");

        // DataSourceCommand
        var cmdDs = new DataSourceCommand();
        var rowsDs = (List<string[]>?)typeof(DataSourceCommand).GetMethod("BuildArgRows", InstancePrivate)!
            .Invoke(cmdDs, [new DataSourceCommandArgs()]);
        Assert.IsNotNull(rowsDs);

        var runDs = typeof(DataSourceCommand).GetMethod("RunTaskAsync", InstancePrivate)!;
        await (Task)runDs.Invoke(cmdDs, [new DataSourceCommandArgs { Json = jsonFile, Profile = "TEST" }])!;

        File.WriteAllText(jsonFile, "{\"datasources\":[{\"profile\":\"OTHER\"}]}");
        await (Task)runDs.Invoke(cmdDs, [new DataSourceCommandArgs { Json = jsonFile, Profile = "TEST" }])!;

        // UploadReportCommand
        File.WriteAllText(jsonFile, "{}");
        var cmdUr = new UploadReportCommand();
        var rowsUr = (List<string[]>?)typeof(UploadReportCommand).GetMethod("BuildArgRows", InstancePrivate)!
            .Invoke(cmdUr, [new UploadReportCommandArgs()]);
        Assert.IsNotNull(rowsUr);

        var runUr = typeof(UploadReportCommand).GetMethod("RunTaskAsync", InstancePrivate)!;
        await (Task)runUr.Invoke(cmdUr, [new UploadReportCommandArgs { Json = jsonFile, Profile = "TEST" }])!;

        File.WriteAllText(jsonFile, "{\"uploadreports\":[{\"profile\":\"OTHER\"}]}");
        await (Task)runUr.Invoke(cmdUr, [new UploadReportCommandArgs { Json = jsonFile, Profile = "TEST" }])!;

        // WebResourceCommand
        File.WriteAllText(jsonFile, "{}");
        var cmdWrc = new WebResourceCommand();
        var rowsWrc = (List<string[]>?)typeof(WebResourceCommand).GetMethod("BuildArgRows", InstancePrivate)!
            .Invoke(cmdWrc, [new WebResourceCommandArgs()]);
        Assert.IsNotNull(rowsWrc);

        var runWrc = typeof(WebResourceCommand).GetMethod("RunTaskAsync", InstancePrivate)!;
        await (Task)runWrc.Invoke(cmdWrc, [new WebResourceCommandArgs { Json = jsonFile, Profile = "TEST" }])!;

        File.WriteAllText(jsonFile, "{\"webresources\":[{\"profile\":\"OTHER\"}]}");
        await (Task)runWrc.Invoke(cmdWrc, [new WebResourceCommandArgs { Json = jsonFile, Profile = "TEST" }])!;

        // ModelBuilderCommand
        File.WriteAllText(jsonFile, "{}");
        var cmdMb = new ModelBuilderCommand();
        var rowsMb = (List<string[]>?)typeof(ModelBuilderCommand).GetMethod("BuildArgRows", InstancePrivate)!
            .Invoke(cmdMb, [new ModelBuilderCommandArgs()]);
        Assert.IsNotNull(rowsMb);

        var runMb = typeof(ModelBuilderCommand).GetMethod("RunTaskAsync", InstancePrivate)!;
        await (Task)runMb.Invoke(cmdMb, [new ModelBuilderCommandArgs { Json = jsonFile, Profile = "TEST" }])!;

        File.WriteAllText(jsonFile, "{\"modelbuilders\":[{\"profile\":\"OTHER\"}]}");
        await (Task)runMb.Invoke(cmdMb, [new ModelBuilderCommandArgs { Json = jsonFile, Profile = "TEST" }])!;

        // ServerCommand
        File.WriteAllText(jsonFile, "{\"servers\":[]}");
        var cmdSrv = new ServerCommand();
        var rowsSrv = (List<string[]>?)typeof(ServerCommand).GetMethod("BuildArgRows", InstancePrivate)!
            .Invoke(cmdSrv, [new ServerCommandArgs()]);
        Assert.IsNotNull(rowsSrv);

        var runSrv = typeof(ServerCommand).GetMethod("RunTaskAsync", InstancePrivate)!;
        await (Task)runSrv.Invoke(cmdSrv, [new ServerCommandArgs { Json = jsonFile, Profile = "TEST" }])!;

        File.WriteAllText(jsonFile, "{\"servers\":[{\"profile\":\"OTHER\"}]}");
        await (Task)runSrv.Invoke(cmdSrv, [new ServerCommandArgs { Json = jsonFile, Profile = "TEST" }])!;
    }
}
