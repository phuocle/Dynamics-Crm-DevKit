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
using System.Linq;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Shared.Models;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class DeploymentValidatorCoverageTests
{
    private string _tempDir = null!;
    private IXrmFakedContext _ctx = null!;
    private IOrganizationServiceAsync2 _service = null!;

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit-depval-tests-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);

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

    [TestCleanup]
    public void Cleanup()
    {
        try { Directory.Delete(_tempDir, true); } catch { }
    }

    [TestMethod]
    public async Task ValidateServerDeployment_EmptySolutionAndFolder_ReturnsBothIssues()
    {
        var validator = new DeploymentValidator(_service);
        var args = new CommandLineArgs { Json = "x" };
        var json = new JsonServer { solution = "", folder = "" };

        var issues = await validator.ValidateServerDeploymentAsync(args, json);
        Assert.AreEqual(2, issues.Count);
        StringAssert.Contains(issues[0], "'solution' is empty");
        StringAssert.Contains(issues[1], "'folder' is empty");
    }

    [TestMethod]
    public async Task ValidateServerDeployment_PlaceholderSolutionAndFolder_ReturnsBothIssues()
    {
        var validator = new DeploymentValidator(_service);
        var args = new CommandLineArgs { Json = "x" };
        var json = new JsonServer { solution = "???", folder = "???" };

        var issues = await validator.ValidateServerDeploymentAsync(args, json);
        Assert.AreEqual(2, issues.Count);
        StringAssert.Contains(issues[0], "'solution' is empty or placeholder");
        StringAssert.Contains(issues[1], "'folder' is empty or placeholder");
    }

    [TestMethod]
    public async Task ValidateServerDeployment_SolutionNotFoundAndFolderMissing_ReturnsIssues()
    {
        var validator = new DeploymentValidator(_service);
        var args = new CommandLineArgs { Json = "x" };
        var nonExistentFolder = "SubFolder_" + Guid.NewGuid().ToString("N");
        var json = new JsonServer { solution = "MissingSolution", folder = nonExistentFolder };

        var issues = await validator.ValidateServerDeploymentAsync(args, json);
        Assert.IsTrue(issues.Any(i => i.Contains("does not exist in the target environment")));
        Assert.IsTrue(issues.Any(i => i.Contains("Folder") && i.Contains("does not exist")));
    }

    [TestMethod]
    public async Task ValidateServerDeployment_SolutionExists_FolderEmpty_ReturnsNoMatchingFiles()
    {
        _ctx.GetOrganizationService().Create(new Entity("solution") { ["uniquename"] = "MySol" });

        var folderName = "EmptyFolder_" + Guid.NewGuid().ToString("N");
        var fullPath = Path.Combine(Directory.GetCurrentDirectory(), folderName);
        Directory.CreateDirectory(fullPath);
        try
        {
            var validator = new DeploymentValidator(_service);
            var args = new CommandLineArgs { Json = "x" };
            var json = new JsonServer { solution = "MySol", folder = folderName };

            var issues = await validator.ValidateServerDeploymentAsync(args, json);
            Assert.AreEqual(1, issues.Count);
            StringAssert.Contains(issues[0], "No matching files found in");
        }
        finally
        {
            try { Directory.Delete(fullPath, true); } catch { }
        }
    }

    [TestMethod]
    public async Task ValidateServerDeployment_ValidDeployment_ReturnsNoIssues()
    {
        _ctx.GetOrganizationService().Create(new Entity("solution") { ["uniquename"] = "MySol" });

        var folderName = "DllFolder_" + Guid.NewGuid().ToString("N");
        var fullPath = Path.Combine(Directory.GetCurrentDirectory(), folderName);
        Directory.CreateDirectory(fullPath);
        var dummyDll = Path.Combine(fullPath, "TestPlugin.dll");
        File.WriteAllText(dummyDll, "dummy binary");
        try
        {
            var validator = new DeploymentValidator(_service);
            var args = new CommandLineArgs { Json = "x" };
            var json = new JsonServer
            {
                solution = "MySol",
                folder = folderName,
                includefiles = new List<string> { "*.dll" },
                excludefiles = new List<string>()
            };

            var issues = await validator.ValidateServerDeploymentAsync(args, json);
            Assert.AreEqual(0, issues.Count);
        }
        finally
        {
            try { Directory.Delete(fullPath, true); } catch { }
        }
    }

    [TestMethod]
    public async Task ValidateWebResourceDeployment_EmptySolutionAndRootFolder_ReturnsBothIssues()
    {
        var validator = new DeploymentValidator(_service);
        var args = new CommandLineArgs { Json = "x" };
        var json = new JsonWebResource { solution = "", rootfolder = "" };

        var issues = await validator.ValidateWebResourceDeploymentAsync(args, json);
        Assert.AreEqual(2, issues.Count);
        StringAssert.Contains(issues[0], "'solution' is empty");
        StringAssert.Contains(issues[1], "'rootfolder' is empty");
    }

    [TestMethod]
    public async Task ValidateWebResourceDeployment_PlaceholderSolutionAndRootFolder_ReturnsBothIssues()
    {
        var validator = new DeploymentValidator(_service);
        var args = new CommandLineArgs { Json = "x" };
        var json = new JsonWebResource { solution = "???", rootfolder = "???" };

        var issues = await validator.ValidateWebResourceDeploymentAsync(args, json);
        Assert.AreEqual(2, issues.Count);
        StringAssert.Contains(issues[0], "'solution' is empty or placeholder");
        StringAssert.Contains(issues[1], "'rootfolder' is empty or placeholder");
    }

    [TestMethod]
    public async Task ValidateWebResourceDeployment_SolutionMissingAndFolderMissing_ReturnsIssues()
    {
        var validator = new DeploymentValidator(_service);
        var args = new CommandLineArgs { Json = "x" };
        var nonExistentFolder = "WebResFolder_" + Guid.NewGuid().ToString("N");
        var json = new JsonWebResource { solution = "MissingSol", rootfolder = nonExistentFolder };

        var issues = await validator.ValidateWebResourceDeploymentAsync(args, json);
        Assert.IsTrue(issues.Any(i => i.Contains("does not exist in the target environment")));
        Assert.IsTrue(issues.Any(i => i.Contains("Folder") && i.Contains("does not exist")));
    }

    [TestMethod]
    public async Task ValidateWebResourceDeployment_UnsupportedExtension_ReturnsIssue()
    {
        _ctx.GetOrganizationService().Create(new Entity("solution") { ["uniquename"] = "MyWebSol" });

        var folderName = "WebFolder_" + Guid.NewGuid().ToString("N");
        var fullPath = Path.Combine(Directory.GetCurrentDirectory(), folderName);
        Directory.CreateDirectory(fullPath);
        File.WriteAllText(Path.Combine(fullPath, "test.unsupportedext"), "content");
        try
        {
            var validator = new DeploymentValidator(_service);
            var args = new CommandLineArgs { Json = "x" };
            var json = new JsonWebResource { solution = "MyWebSol", rootfolder = folderName };

            var issues = await validator.ValidateWebResourceDeploymentAsync(args, json);
            Assert.AreEqual(1, issues.Count);
            StringAssert.Contains(issues[0], "unsupported web resource extensions");
        }
        finally
        {
            try { Directory.Delete(fullPath, true); } catch { }
        }
    }

    [TestMethod]
    public async Task ValidateWebResourceDeployment_ValidFiles_ReturnsNoIssues()
    {
        _ctx.GetOrganizationService().Create(new Entity("solution") { ["uniquename"] = "MyWebSol" });

        var folderName = "WebFolderValid_" + Guid.NewGuid().ToString("N");
        var fullPath = Path.Combine(Directory.GetCurrentDirectory(), folderName);
        Directory.CreateDirectory(fullPath);
        File.WriteAllText(Path.Combine(fullPath, "script.js"), "console.log(1);");
        File.WriteAllText(Path.Combine(fullPath, "page.html"), "<html></html>");
        try
        {
            var validator = new DeploymentValidator(_service);
            var args = new CommandLineArgs { Json = "x" };
            var json = new JsonWebResource { solution = "MyWebSol", rootfolder = folderName };

            var issues = await validator.ValidateWebResourceDeploymentAsync(args, json);
            Assert.AreEqual(0, issues.Count);
        }
        finally
        {
            try { Directory.Delete(fullPath, true); } catch { }
        }
    }
}
