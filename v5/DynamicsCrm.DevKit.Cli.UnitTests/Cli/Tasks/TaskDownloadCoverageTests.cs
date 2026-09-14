using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using FakeItEasy;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Tasks;

[TestClass]
public sealed class TaskDownloadCoverageTests
{
    private IOrganizationServiceAsync2 _service = null!;
    private string _tempDir = null!;

    [TestInitialize]
    public void Setup()
    {
        _service = A.Fake<IOrganizationServiceAsync2>();
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit_dl_" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
    }

    [TestCleanup]
    public void Cleanup()
    {
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    [TestMethod]
    public async Task TaskDownloadReport_Validation_RejectsInvalidScenarios()
    {
        var args = new CommandLineArgs { Profile = "TEST" };

        // 1. Json is null
        var t1 = new TaskDownloadReport(args, null!) { CurrentDirectory = _tempDir, OrgServiceAsync = _service };
        Assert.IsFalse(await t1.IsValidAsync());

        // 2. Solution empty or ???
        var t2 = new TaskDownloadReport(args, new JsonDownloadReport { solution = "???" }) { CurrentDirectory = _tempDir, OrgServiceAsync = _service };
        Assert.IsFalse(await t2.IsValidAsync());
        var t2b = new TaskDownloadReport(args, new JsonDownloadReport { solution = "" }) { CurrentDirectory = _tempDir, OrgServiceAsync = _service };
        Assert.IsFalse(await t2b.IsValidAsync());

        // 3. Solution does not exist in CRM
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .Returns(Task.FromResult(new EntityCollection()));
        var t3 = new TaskDownloadReport(args, new JsonDownloadReport { solution = "MissingSolution" }) { CurrentDirectory = _tempDir, OrgServiceAsync = _service };
        Assert.IsFalse(await t3.IsValidAsync());

        // 4. Folder exists and has files
        var solutionEntity = new Entity("solution", Guid.NewGuid()) { ["solutionid"] = Guid.NewGuid() };
        solutionEntity["p.customizationprefix"] = new AliasedValue("publisher", "customizationprefix", "dev");
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .Returns(Task.FromResult(new EntityCollection([solutionEntity])));

        var folder = Path.Combine(_tempDir, "ExistingFilesSolution");
        Directory.CreateDirectory(folder);
        File.WriteAllText(Path.Combine(folder, "dummy.txt"), "content");

        var t4 = new TaskDownloadReport(args, new JsonDownloadReport { solution = "ExistingFilesSolution" }) { CurrentDirectory = _tempDir, OrgServiceAsync = _service };
        Assert.IsFalse(await t4.IsValidAsync());

        // 5. Valid (empty folder)
        var t5 = new TaskDownloadReport(args, new JsonDownloadReport { solution = "ValidSolution" }) { CurrentDirectory = _tempDir, OrgServiceAsync = _service };
        Assert.IsTrue(await t5.IsValidAsync());
    }

    [TestMethod]
    public async Task TaskDownloadReport_RunAsync_DownloadsReportsAndHandlesDuplicates()
    {
        var args = new CommandLineArgs();
        var solutionEntity = new Entity("solution", Guid.NewGuid()) { ["solutionid"] = Guid.NewGuid() };
        solutionEntity["p.customizationprefix"] = new AliasedValue("publisher", "customizationprefix", "dev");

        // First query in IsValidAsync checks solution
        // Second query in GetReportsBySolutionAsync retrieves reports
        var report1 = new Entity("report", Guid.NewGuid())
        {
            ["filename"] = "AccountReport.rdl",
            ["bodytext"] = "<Report>Account</Report>",
            ["languagecode"] = 1033
        };
        var report2 = new Entity("report", Guid.NewGuid())
        {
            ["filename"] = "AccountReport.rdl", // Duplicate name to trigger GeNextFileName
            ["bodytext"] = "<Report>Account 2</Report>",
            ["languagecode"] = 1033
        };

        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsNextFromSequence(
                Task.FromResult(new EntityCollection([solutionEntity])), // IsExistSolution
                Task.FromResult(new EntityCollection([report1, report2])) // GetReportsBySolution
            );

        var task = new TaskDownloadReport(args, new JsonDownloadReport { solution = "DemoSolution" })
        {
            CurrentDirectory = _tempDir,
            OrgServiceAsync = _service
        };
        await task.RunAsync();

        var reportDir = Path.Combine(_tempDir, "DemoSolution", "English");
        Assert.IsTrue(File.Exists(Path.Combine(reportDir, "AccountReport.rdl")));
        Assert.IsTrue(File.Exists(Path.Combine(reportDir, "AccountReport(1).rdl")));
    }


    [TestMethod]
    public async Task TaskDownloadReport_RunAsync_HandlesZeroReports()
    {
        var args = new CommandLineArgs();
        var solutionEntity = new Entity("solution", Guid.NewGuid()) { ["solutionid"] = Guid.NewGuid() };
        solutionEntity["p.customizationprefix"] = new AliasedValue("publisher", "customizationprefix", "dev");

        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsNextFromSequence(
                Task.FromResult(new EntityCollection([solutionEntity])),
                Task.FromResult(new EntityCollection()) // No reports
            );

        var task = new TaskDownloadReport(args, new JsonDownloadReport { solution = "EmptyReportsSolution" })
        {
            CurrentDirectory = _tempDir,
            OrgServiceAsync = _service
        };
        await task.RunAsync();
    }

    [TestMethod]
    public async Task TaskDownloadWebResource_Validation_RejectsInvalidScenarios()
    {
        var args = new CommandLineArgs { Profile = "TEST" };

        // 1. Json null
        var t1 = new TaskDownloadWebResource(args, null!) { CurrentDirectory = _tempDir, OrgServiceAsync = _service };
        Assert.IsFalse(await t1.IsValidAsync());

        // 2. Solution empty or ???
        var t2 = new TaskDownloadWebResource(args, new JsonDownloadWebResource { solution = "???" }) { CurrentDirectory = _tempDir, OrgServiceAsync = _service };
        Assert.IsFalse(await t2.IsValidAsync());

        // 3. Solution does not exist in CRM
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .Returns(Task.FromResult(new EntityCollection()));
        var t3 = new TaskDownloadWebResource(args, new JsonDownloadWebResource { solution = "MissingSol" }) { CurrentDirectory = _tempDir, OrgServiceAsync = _service };
        Assert.IsFalse(await t3.IsValidAsync());

        // 4. Folder exists with files
        var solutionEntity = new Entity("solution", Guid.NewGuid()) { ["solutionid"] = Guid.NewGuid() };
        solutionEntity["p.customizationprefix"] = new AliasedValue("publisher", "customizationprefix", "dev");
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .Returns(Task.FromResult(new EntityCollection([solutionEntity])));

        var folder = Path.Combine(_tempDir, "SolWithFiles");
        Directory.CreateDirectory(folder);
        File.WriteAllText(Path.Combine(folder, "existing.js"), "// code");

        var t4 = new TaskDownloadWebResource(args, new JsonDownloadWebResource { solution = "SolWithFiles" }) { CurrentDirectory = _tempDir, OrgServiceAsync = _service };
        Assert.IsFalse(await t4.IsValidAsync());

        // 5. Valid
        var t5 = new TaskDownloadWebResource(args, new JsonDownloadWebResource { solution = "ValidWebSol" }) { CurrentDirectory = _tempDir, OrgServiceAsync = _service };
        Assert.IsTrue(await t5.IsValidAsync());
    }

    [TestMethod]
    public async Task TaskDownloadWebResource_RunAsync_DownloadsFilesSuccessfully()
    {
        var args = new CommandLineArgs();
        var solutionEntity = new Entity("solution", Guid.NewGuid()) { ["solutionid"] = Guid.NewGuid() };
        solutionEntity["p.customizationprefix"] = new AliasedValue("publisher", "customizationprefix", "dev");

        var base64Script = Convert.ToBase64String(Encoding.UTF8.GetBytes("console.log('hi');"));
        var wr1 = new Entity("webresource", Guid.NewGuid())
        {
            ["name"] = "devkit_/js/main.js",
            ["webresourcetype"] = new OptionSetValue(3),
            ["content"] = base64Script
        };

        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsNextFromSequence(
                Task.FromResult(new EntityCollection([solutionEntity])), // IsExistSolution
                Task.FromResult(new EntityCollection([wr1])) // GetWebResourcesBySolution
            );

        var task = new TaskDownloadWebResource(args, new JsonDownloadWebResource { solution = "DownloadSol" })
        {
            CurrentDirectory = _tempDir,
            OrgServiceAsync = _service
        };
        await task.RunAsync();

        var downloadedPath = Path.Combine(_tempDir, "DownloadSol", "devkit_", "js", "main.js");
        Assert.IsTrue(File.Exists(downloadedPath));
        Assert.AreEqual("console.log('hi');", File.ReadAllText(downloadedPath));
    }

    [TestMethod]
    public async Task TaskDownloadWebResource_RunAsync_HandlesZeroWebResources()
    {
        var args = new CommandLineArgs();
        var solutionEntity = new Entity("solution", Guid.NewGuid()) { ["solutionid"] = Guid.NewGuid() };
        solutionEntity["p.customizationprefix"] = new AliasedValue("publisher", "customizationprefix", "dev");

        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsNextFromSequence(
                Task.FromResult(new EntityCollection([solutionEntity])),
                Task.FromResult(new EntityCollection()) // empty web resources
            );

        var task = new TaskDownloadWebResource(args, new JsonDownloadWebResource { solution = "ZeroSol" })
        {
            CurrentDirectory = _tempDir,
            OrgServiceAsync = _service
        };
        await task.RunAsync();
    }
}
