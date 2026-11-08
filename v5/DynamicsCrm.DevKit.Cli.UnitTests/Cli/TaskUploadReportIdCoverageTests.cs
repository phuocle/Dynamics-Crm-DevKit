using FakeItEasy;
using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// --reportid fast-path coverage for <see cref="TaskUploadReport"/>: the id
/// resolves with one report query and NO language lookup, then the normal
/// DO_NOTHING / mapping flow runs.
/// </summary>
[TestClass]
public sealed class TaskUploadReportIdCoverageTests
{
    private string _root = null!;
    private IOrganizationServiceAsync2 _service = null!;
    private EntityCollection _reportRows = new();
    private Entity? _reportEntity;
    private readonly List<Entity> _updated = new();

    [TestInitialize]
    public void Setup()
    {
        _root = Path.Combine(Path.GetTempPath(), "DevKitCli_TaskUploadReportId", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_root);
        _reportRows = new EntityCollection();
        _updated.Clear();

        _service = A.Fake<IOrganizationServiceAsync2>();
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsLazily(call => Task.FromResult(OnRetrieve((QueryBase)call.Arguments[0])));
        A.CallTo(() => _service.RetrieveAsync(A<string>.Ignored, A<Guid>.Ignored, A<ColumnSet>.Ignored))
            .ReturnsLazily(call => Task.FromResult(_reportEntity ?? new Entity("report")));
        A.CallTo(() => _service.UpdateAsync(A<Entity>.Ignored))
            .ReturnsLazily(call =>
            {
                _updated.Add((Entity)call.Arguments[0]);
                return Task.CompletedTask;
            });
    }

    [TestCleanup]
    public void Cleanup()
    {
        if (Directory.Exists(_root)) Directory.Delete(_root, true);
    }

    private EntityCollection OnRetrieve(QueryBase query)
    {
        var fetch = (query as FetchExpression)?.Query ?? string.Empty;
        if (fetch.Contains("entity name='report'")) return _reportRows;
        return new EntityCollection();
    }

    private async Task<string> WriteRdlAsync(string content)
    {
        var file = Path.Combine(_root, "Account.rdl");
        await File.WriteAllTextAsync(file, content);
        return file;
    }

    private static Entity ReportRow(Guid id, string plainContent) => new("report", id)
    {
        ["name"] = "Account",
        ["filename"] = "Account.rdl",
        ["languagecode"] = 1033,
        ["ismanaged"] = false,
        ["content"] = plainContent
    };

    [TestMethod]
    public async Task RunAsync_ReportId_ContentSame_DoesNothingAndSavesMapping()
    {
        var file = await WriteRdlAsync("<fetch>same</fetch>");
        var reportId = Guid.NewGuid();
        var row = ReportRow(reportId, "<fetch>same</fetch>");
        _reportRows = new EntityCollection(new List<Entity> { row });
        _reportEntity = new Entity("report", reportId)
        {
            ["bodytext"] = "<fetch>same</fetch>",
            ["iscustomizable"] = new BooleanManagedProperty(true)
        };

        var task = new TaskUploadReport(
            new CommandLineArgs { File = file, ReportId = reportId },
            new JsonUploadReport())
        {
            CurrentDirectory = _root,
            OrgServiceAsync = _service
        };
        await task.RunAsync();

        // Id path: exactly one report query, no language lookup fetch.
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .MustHaveHappenedOnceExactly();
        Assert.AreEqual(0, _updated.Count); // DO_NOTHING — content matches

        var configPath = Path.Combine(_root, Const.DynamicsCrmDevKitConfigJson);
        Assert.IsTrue(File.Exists(configPath));
        var config = JsonHelper.Deserialize<ConfigJson>(await FileHelper.ReadAllTextAsync(configPath));
        var mapping = config.Reports.Single();
        Assert.AreEqual(reportId, mapping.ReportId);
        Assert.AreEqual("Account", mapping.ReportName);
    }

    [TestMethod]
    public async Task RunAsync_ReportId_NotFound_ErrorsWithoutTouchingReport()
    {
        var file = await WriteRdlAsync("<fetch>x</fetch>");
        var missingId = Guid.NewGuid();
        _reportRows = new EntityCollection(); // id query returns nothing

        var task = new TaskUploadReport(
            new CommandLineArgs { File = file, ReportId = missingId },
            new JsonUploadReport())
        {
            CurrentDirectory = _root,
            OrgServiceAsync = _service
        };
        await task.RunAsync();

        A.CallTo(() => _service.RetrieveAsync(A<string>.Ignored, A<Guid>.Ignored, A<ColumnSet>.Ignored))
            .MustNotHaveHappened();
        Assert.AreEqual(0, _updated.Count);
        Assert.IsFalse(File.Exists(Path.Combine(_root, Const.DynamicsCrmDevKitConfigJson)));
    }
}
