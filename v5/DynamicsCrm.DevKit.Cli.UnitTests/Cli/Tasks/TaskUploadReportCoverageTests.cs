using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using FakeItEasy;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Tasks;

/// <summary>
/// Coverage for TaskUploadReport: the IsValidAsync validation ladder, the
/// fast-deploy (single .rdl file) decision matrix and the pattern-mode
/// (language folder) deploy loop, driven by an A.Fake IOrganizationServiceAsync2
/// answering solution, languagelocale and report fetches by content.
/// </summary>
[TestClass]
public sealed class TaskUploadReportCoverageTests
{
    private IOrganizationServiceAsync2 _service = null!;
    private string _tempDir = null!;
    private int _updates;
    private bool _solutionExists = true;
    private bool _localeExists = true;
    private Entity? _lastUpdated;
    private List<Entity> _reportRows = new();
    private Entity? _reportRecord;
    private string _reportBodyText = "old report";

    [TestInitialize]
    public void Setup()
    {
        _service = A.Fake<IOrganizationServiceAsync2>();
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit_tur_" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        _updates = 0;
        _solutionExists = true;
        _localeExists = true;
        _lastUpdated = null;
        _reportRows = new List<Entity>();
        _reportRecord = null;
        _reportBodyText = "old report";

        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsLazily(call => Task.FromResult(OnRetrieveMultiple((QueryBase)call.Arguments[0])));
        A.CallTo(() => _service.RetrieveAsync(A<string>.Ignored, A<Guid>.Ignored, A<ColumnSet>.Ignored))
            .ReturnsLazily(call => Task.FromResult(_reportRecord ?? new Entity("report", (Guid)call.Arguments[1])));
        A.CallTo(() => _service.RetrieveAsync(A<string>.Ignored, A<Guid>.Ignored, A<ColumnSet>.Ignored, A<CancellationToken>.Ignored))
            .ReturnsLazily(call => Task.FromResult(_reportRecord ?? new Entity("report", (Guid)call.Arguments[1])));
        A.CallTo(() => _service.UpdateAsync(A<Entity>.Ignored))
            .Invokes(call => { _updates++; _lastUpdated = (Entity)call.Arguments[0]; })
            .Returns(Task.CompletedTask);
    }

    [TestCleanup]
    public void Cleanup()
    {
        try { Directory.Delete(_tempDir, recursive: true); } catch { /* best effort */ }
    }

    private EntityCollection OnRetrieveMultiple(QueryBase query)
    {
        if (query is FetchExpression fe)
        {
            var q = fe.Query;
            // order + angle brackets matter: "link-entity name='languagelocale'" would
            // otherwise substring-match the report fetches
            if (q.Contains("<entity name='solution'"))
            {
                if (!_solutionExists) return new EntityCollection();
                var solution = new Entity("solution", Guid.NewGuid()) { ["solutionid"] = Guid.NewGuid() };
                solution["p.customizationprefix"] = new AliasedValue("publisher", "customizationprefix", "dev");
                return new EntityCollection(new List<Entity> { solution });
            }
            if (q.Contains("<entity name='languagelocale'>"))
            {
                if (!_localeExists) return new EntityCollection();
                return new EntityCollection(new List<Entity>
                {
                    new Entity("languagelocale", Guid.NewGuid()) { ["localeid"] = 1033, ["language"] = "English" }
                });
            }
            if (q.Contains("<entity name='report'>") && q.Contains("solutioncomponent"))
            {
                // GetReportsBySolutionAsync: filename, bodytext, languagecode + l.language alias
                return new EntityCollection(_reportRows.Select(r =>
                {
                    var row = new Entity("report", r.Id);
                    row["filename"] = r["filename"];
                    row["bodytext"] = r["bodytext"];
                    row["languagecode"] = 1033;
                    row["l.language"] = new AliasedValue("languagelocale", "language", r["filename"].ToString()!.Contains("French") ? "French" : "English");
                    return row;
                }).ToList());
            }
            if (q.Contains("<entity name='report'>"))
            {
                // GetReportsAsync: name, filename, languagecode, ismanaged + l.language alias
                return new EntityCollection(_reportRows.Select(r =>
                {
                    var row = new Entity("report", r.Id);
                    row["name"] = r["name"];
                    row["filename"] = r["filename"];
                    row["languagecode"] = 1033;
                    row["ismanaged"] = r.Contains("ismanaged") ? r["ismanaged"] : false;
                    row["l.language"] = new AliasedValue("languagelocale", "language", "English");
                    return row;
                }).ToList());
            }
        }
        return new EntityCollection();
    }

    private TaskUploadReport NewTask(JsonUploadReport? json = null, string? file = null, string? language = null, string? report = null)
    {
        var arg = new CommandLineArgs
        {
            Profile = "UPLOADREPORT",
            Type = "uploadreports",
            File = file,
            Language = language,
            Report = report
        };
        var task = new TaskUploadReport(arg, json ?? new JsonUploadReport
        {
            solution = "DevKit",
            languages = new List<string> { "English" }
        });
        task.CurrentDirectory = _tempDir;
        task.OrgServiceAsync = _service;
        return task;
    }

    private string WriteReport(string relativePath, string content)
    {
        var fullPath = Path.Combine(_tempDir, relativePath.Replace('/', Path.DirectorySeparatorChar));
        Directory.CreateDirectory(Path.GetDirectoryName(fullPath)!);
        File.WriteAllText(fullPath, content);
        return fullPath;
    }

    private static Entity ReportRow(Guid id, string fileName, string bodyText, string name = "Sales Report")
    {
        return new Entity("report", id)
        {
            ["filename"] = fileName,
            ["bodytext"] = bodyText,
            ["name"] = name
        };
    }

    // ──────────────────────────────────────────────
    // IsValidAsync ladder (pattern mode)
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task IsValid_NullJson_Fails()
    {
        var arg = new CommandLineArgs { Profile = "UPLOADREPORT", Type = "uploadreports" };
        var task = new TaskUploadReport(arg, null!);
        task.OrgServiceAsync = _service;
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_SolutionPlaceholder_Fails()
    {
        var task = NewTask(new JsonUploadReport { solution = "???", languages = new List<string> { "English" } });
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_EmptySolution_Fails()
    {
        var task = NewTask(new JsonUploadReport { solution = " ", languages = new List<string> { "English" } });
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_SolutionNotFound_Fails()
    {
        _solutionExists = false;
        var task = NewTask();
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_LanguagesNull_Fails()
    {
        _solutionExists = true;
        var task = NewTask(new JsonUploadReport { solution = "DevKit", languages = null! });
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_LanguagesAllPlaceholder_Fails()
    {
        var task = NewTask(new JsonUploadReport { solution = "DevKit", languages = new List<string> { "???", "???" } });
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_LanguageFolderMissing_Fails()
    {
        var task = NewTask(new JsonUploadReport { solution = "DevKit", languages = new List<string> { "1033" } });
        Assert.IsFalse(await task.IsValidAsync());
    }

    [TestMethod]
    public async Task IsValid_ValidFolders_True()
    {
        Directory.CreateDirectory(Path.Combine(_tempDir, "DevKit", "English"));
        var task = NewTask();
        Assert.IsTrue(await task.IsValidAsync());
    }

    // ──────────────────────────────────────────────
    // RunAsync: fast deploy (single .rdl file)
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task FastDeploy_FileMissing_Error()
    {
        var task = NewTask(file: Path.Combine(_tempDir, "missing.rdl"));
        await task.RunAsync();
        Assert.AreEqual(0, _updates);
    }

    [TestMethod]
    public async Task FastDeploy_NotRdlFile_Error()
    {
        var file = WriteReport("Sales.txt", "not a report");
        var task = NewTask(file: file);
        await task.RunAsync();
        Assert.AreEqual(0, _updates);
    }

    [TestMethod]
    public async Task FastDeploy_LanguageNotFound_Error()
    {
        var file = WriteReport("Sales.rdl", "<Report/>");
        _localeExists = false;
        var task = NewTask(file: file, language: "Klingon");
        await task.RunAsync();
        Assert.AreEqual(0, _updates);
    }

    [TestMethod]
    public async Task FastDeploy_NoReportFound_Error()
    {
        var file = WriteReport("Sales.rdl", "<Report/>");
        var task = NewTask(file: file);
        await task.RunAsync();
        Assert.AreEqual(0, _updates);
    }

    [TestMethod]
    public async Task FastDeploy_MultipleReports_Error()
    {
        var file = WriteReport("Sales.rdl", "<Report/>");
        _reportRows.Add(ReportRow(Guid.NewGuid(), "Sales.rdl", "one"));
        _reportRows.Add(ReportRow(Guid.NewGuid(), "Sales.rdl", "two"));
        var task = NewTask(file: file);
        await task.RunAsync();
        Assert.AreEqual(0, _updates);
    }

    [TestMethod]
    public async Task FastDeploy_ManagedReport_Error()
    {
        var file = WriteReport("Sales.rdl", "<Report/>");
        _reportRows.Add(new Entity("report", Guid.NewGuid())
        {
            ["filename"] = "Sales.rdl",
            ["bodytext"] = "managed",
            ["name"] = "Sales Report",
            ["ismanaged"] = true
        });
        var task = NewTask(file: file);
        await task.RunAsync();
        Assert.AreEqual(0, _updates);
    }

    [TestMethod]
    public async Task FastDeploy_NotCustomizable_Error()
    {
        var file = WriteReport("Sales.rdl", "<Report/>");
        var reportId = Guid.NewGuid();
        _reportRows.Add(ReportRow(reportId, "Sales.rdl", "content"));
        _reportRecord = new Entity("report", reportId)
        {
            ["bodytext"] = "content",
            ["iscustomizable"] = new BooleanManagedProperty(false)
        };
        var task = NewTask(file: file);
        await task.RunAsync();
        Assert.AreEqual(0, _updates);
    }

    [TestMethod]
    public async Task FastDeploy_SameContent_DoNothing()
    {
        var file = WriteReport("Sales.rdl", "<Report>same</Report>");
        var reportId = Guid.NewGuid();
        _reportRows.Add(ReportRow(reportId, "Sales.rdl", "<Report>same</Report>"));
        _reportRecord = new Entity("report", reportId)
        {
            ["bodytext"] = "<Report>same</Report>",
            ["iscustomizable"] = new BooleanManagedProperty(true)
        };
        var task = NewTask(file: file);

        await task.RunAsync();

        Assert.AreEqual(0, _updates);
        // mapping still saved
        Assert.IsTrue(File.Exists(Path.Combine(_tempDir, Const.DynamicsCrmDevKitConfigJson)));
    }

    [TestMethod]
    public async Task FastDeploy_DifferentContent_DeploysAndSavesMapping()
    {
        var file = WriteReport("Sales.rdl", "<Report>new</Report>");
        var reportId = Guid.NewGuid();
        _reportRows.Add(ReportRow(reportId, "Sales.rdl", "completely different"));
        _reportRecord = new Entity("report", reportId)
        {
            ["bodytext"] = "completely different",
            ["iscustomizable"] = new BooleanManagedProperty(true)
        };
        var task = NewTask(file: file);

        await task.RunAsync();

        Assert.AreEqual(1, _updates);
        Assert.IsNotNull(_lastUpdated);
        Assert.AreEqual("<Report>new</Report>", _lastUpdated!["bodytext"]);
        var config = File.ReadAllText(Path.Combine(_tempDir, Const.DynamicsCrmDevKitConfigJson));
        StringAssert.Contains(config, "Sales.rdl");
    }

    [TestMethod]
    public async Task FastDeploy_WithMapping_ReportMissing_Error()
    {
        var file = WriteReport("Sales.rdl", "<Report>new</Report>");
        var reportId = Guid.NewGuid();
        _reportRows.Add(ReportRow(reportId, "Sales.rdl", "old"));
        _reportRecord = new Entity("report", reportId)
        {
            ["bodytext"] = "old",
            ["iscustomizable"] = new BooleanManagedProperty(true)
        };
        // First run deploys + saves mapping
        var task = NewTask(file: file);
        await task.RunAsync();
        Assert.AreEqual(1, _updates);

        // Second run: report disappears from Dataverse → mapping points nowhere
        _reportRows.Clear();
        _updates = 0;
        task = NewTask(file: file);
        await task.RunAsync();
        Assert.AreEqual(0, _updates);
    }

    [TestMethod]
    public async Task FastDeploy_WithArgReport_UsesIdentifier()
    {
        var file = WriteReport("Sales.rdl", "<Report>new</Report>");
        _reportRows.Add(ReportRow(Guid.NewGuid(), "Sales.rdl", "old"));
        _reportRecord = new Entity("report", Guid.NewGuid())
        {
            ["bodytext"] = "old",
            ["iscustomizable"] = new BooleanManagedProperty(true)
        };
        var task = NewTask(file: file, report: "Sales.rdl");
        await task.RunAsync();
        Assert.AreEqual(1, _updates);
    }

    // ──────────────────────────────────────────────
    // RunAsync: pattern mode (language folders)
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Pattern_NoRdlFiles_NoDeploy()
    {
        Directory.CreateDirectory(Path.Combine(_tempDir, "DevKit", "English"));
        var task = NewTask();
        await task.RunAsync();
        Assert.AreEqual(0, _updates);
    }

    [TestMethod]
    public async Task Pattern_ReportNotMatched_Error()
    {
        Directory.CreateDirectory(Path.Combine(_tempDir, "DevKit", "English"));
        WriteReport("DevKit/English/Sales.rdl", "<Report/>");
        // solution reports exist but filename does not match
        _reportRows.Add(ReportRow(Guid.NewGuid(), "Other.rdl", "other"));
        var task = NewTask();
        await task.RunAsync();
        Assert.AreEqual(0, _updates);
    }

    [TestMethod]
    public async Task Pattern_SameAndDifferentContent_Mixed()
    {
        Directory.CreateDirectory(Path.Combine(_tempDir, "DevKit", "English"));
        WriteReport("DevKit/English/Sales.rdl", "<Report>same</Report>");
        WriteReport("DevKit/English/Marketing.rdl", "<Report>new</Report>");
        _reportRows.Add(ReportRow(Guid.NewGuid(), "Sales.rdl", "<Report>same</Report>"));
        _reportRows.Add(ReportRow(Guid.NewGuid(), "Marketing.rdl", "stale"));
        var task = NewTask();

        await task.RunAsync();

        Assert.AreEqual(1, _updates); // only Marketing.rdl is stale
        Assert.IsNotNull(_lastUpdated);
        Assert.AreEqual("<Report>new</Report>", _lastUpdated!["bodytext"]);
    }

    [TestMethod]
    public async Task Pattern_Invalid_FoldersMissing_NoDeploy()
    {
        // solution exists but language folder missing → IsValid fails inside RunAsync
        _reportRows.Add(ReportRow(Guid.NewGuid(), "Sales.rdl", "x"));
        var task = NewTask();
        await task.RunAsync();
        Assert.AreEqual(0, _updates);
    }
}
