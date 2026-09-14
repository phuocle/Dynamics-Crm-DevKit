using FakeItEasy;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.IO;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class TaskDownloadCoverageTests
{
    private IXrmFakedContext _ctx = null!;
    private IOrganizationServiceAsync2 _service = null!;

    [TestInitialize]
    public void Setup()
    {
        _ctx = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.RPL_1_5)
            .Build();

        var inner = _ctx.GetOrganizationService();
        _service = A.Fake<IOrganizationServiceAsync2>();
        A.CallTo(() => _service.RetrieveMultiple(A<QueryBase>.Ignored))
            .ReturnsLazily(call => inner.RetrieveMultiple((QueryBase)call.Arguments[0]));
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsLazily(call =>
            {
                var q = (QueryBase)call.Arguments[0];
                if (q is FetchExpression fe && fe.Query.Contains("<entity name='solution'"))
                {
                    var solRows = inner.RetrieveMultiple(new QueryExpression("solution") { ColumnSet = new ColumnSet("uniquename") });
                    var match = solRows.Entities.FirstOrDefault(e => fe.Query.Contains($"value='{e.GetAttributeValue<string>("uniquename")}'"));
                    if (match != null)
                    {
                        var res = new EntityCollection();
                        var sol = new Entity("solution", match.Id);
                        sol["solutionid"] = match.Id;
                        sol["p.customizationprefix"] = new AliasedValue("publisher", "customizationprefix", "devkit");
                        res.Entities.Add(sol);
                        return Task.FromResult(res);
                    }
                }
                return Task.FromResult(inner.RetrieveMultiple(q));
            });
    }

    [TestMethod]
    public async Task TaskDownloadReport_IsValidAsync_ValidatesInputCorrectly()
    {
        var args = new CommandLineArgs { Json = "x" };

        // Null Json
        var taskNull = new TaskDownloadReport(args, null!) { OrgServiceAsync = _service };
        Assert.IsFalse(await taskNull.IsValidAsync());

        // Empty / ??? solution
        var taskEmptySol = new TaskDownloadReport(args, new JsonDownloadReport { solution = "" }) { OrgServiceAsync = _service };
        Assert.IsFalse(await taskEmptySol.IsValidAsync());

        var taskPlaceholderSol = new TaskDownloadReport(args, new JsonDownloadReport { solution = "???" }) { OrgServiceAsync = _service };
        Assert.IsFalse(await taskPlaceholderSol.IsValidAsync());

        // Solution not found in Dataverse
        var taskMissingSol = new TaskDownloadReport(args, new JsonDownloadReport { solution = "NonExistentSol" }) { OrgServiceAsync = _service };
        Assert.IsFalse(await taskMissingSol.IsValidAsync());

        // Solution exists
        _ctx.GetOrganizationService().Create(new Entity("solution") { ["uniquename"] = "ExistingSolReport" });

        // Folder has existing files
        var folderName = "ExistingSolReport";
        var fullFolder = Path.Combine(Directory.GetCurrentDirectory(), folderName);
        Directory.CreateDirectory(fullFolder);
        File.WriteAllText(Path.Combine(fullFolder, "dummy.txt"), "hello");
        try
        {
            var taskWithFiles = new TaskDownloadReport(args, new JsonDownloadReport { solution = "ExistingSolReport" }) { OrgServiceAsync = _service };
            Assert.IsFalse(await taskWithFiles.IsValidAsync());
        }
        finally
        {
            try { Directory.Delete(fullFolder, true); } catch { }
        }

        // Folder clean -> returns true
        try
        {
            var taskOk = new TaskDownloadReport(args, new JsonDownloadReport { solution = "ExistingSolReport" }) { OrgServiceAsync = _service };
            Assert.IsTrue(await taskOk.IsValidAsync());
        }
        finally
        {
            try { Directory.Delete(fullFolder, true); } catch { }
        }

        Assert.AreEqual("[DOWNLOADREPORTS]", taskNull.TaskType);
    }

    [TestMethod]
    public async Task TaskDownloadWebResource_IsValidAsync_ValidatesInputCorrectly()
    {
        var args = new CommandLineArgs { Json = "x" };

        // Null Json
        var taskNull = new TaskDownloadWebResource(args, null!) { OrgServiceAsync = _service };
        Assert.IsFalse(await taskNull.IsValidAsync());

        // Empty / ??? solution
        var taskEmptySol = new TaskDownloadWebResource(args, new JsonDownloadWebResource { solution = "" }) { OrgServiceAsync = _service };
        Assert.IsFalse(await taskEmptySol.IsValidAsync());

        var taskPlaceholderSol = new TaskDownloadWebResource(args, new JsonDownloadWebResource { solution = "???" }) { OrgServiceAsync = _service };
        Assert.IsFalse(await taskPlaceholderSol.IsValidAsync());

        // Solution not found in Dataverse
        var taskMissingSol = new TaskDownloadWebResource(args, new JsonDownloadWebResource { solution = "NonExistentSol" }) { OrgServiceAsync = _service };
        Assert.IsFalse(await taskMissingSol.IsValidAsync());

        // Solution exists
        _ctx.GetOrganizationService().Create(new Entity("solution") { ["uniquename"] = "ExistingSolWebRes" });

        // Folder has existing files
        var folderName = "ExistingSolWebRes";
        var fullFolder = Path.Combine(Directory.GetCurrentDirectory(), folderName);
        Directory.CreateDirectory(fullFolder);
        File.WriteAllText(Path.Combine(fullFolder, "dummy.txt"), "hello");
        try
        {
            var taskWithFiles = new TaskDownloadWebResource(args, new JsonDownloadWebResource { solution = "ExistingSolWebRes" }) { OrgServiceAsync = _service };
            Assert.IsFalse(await taskWithFiles.IsValidAsync());
        }
        finally
        {
            try { Directory.Delete(fullFolder, true); } catch { }
        }

        // Folder clean -> returns true
        try
        {
            var taskOk = new TaskDownloadWebResource(args, new JsonDownloadWebResource { solution = "ExistingSolWebRes" }) { OrgServiceAsync = _service };
            Assert.IsTrue(await taskOk.IsValidAsync());
        }
        finally
        {
            try { Directory.Delete(fullFolder, true); } catch { }
        }

        Assert.AreEqual("[DOWNLOADWEBRESOURCES]", taskNull.TaskType);
    }
}
