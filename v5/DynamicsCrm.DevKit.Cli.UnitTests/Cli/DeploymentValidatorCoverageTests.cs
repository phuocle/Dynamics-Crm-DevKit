using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Shared.Models;
using FakeItEasy;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
[DoNotParallelize]
public sealed class DeploymentValidatorCoverageTests
{
    private IOrganizationServiceAsync2 _service = null!;
    private string _tempDir = null!;
    private string _origCwd = null!;

    [TestInitialize]
    public void Setup()
    {
        _origCwd = Environment.CurrentDirectory;
        _service = A.Fake<IOrganizationServiceAsync2>();
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit_val_" + Guid.NewGuid().ToString("N"));
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
    public async Task ValidateServerDeploymentAsync_ChecksAllIssueConditions()
    {
        var validator = new DeploymentValidator(_service);
        var args = new CommandLineArgs();

        // 1. Solution and folder empty / ???
        var issues1 = await validator.ValidateServerDeploymentAsync(args, new JsonServer
        {
            solution = "???",
            folder = ""
        });
        CollectionAssert.Contains(issues1, "'solution' is empty or placeholder '???'");
        CollectionAssert.Contains(issues1, "'folder' is empty or placeholder '???'");

        // 2. Solution not found in CRM (returns empty collection)
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .Returns(Task.FromResult(new EntityCollection()));

        var issues2 = await validator.ValidateServerDeploymentAsync(args, new JsonServer
        {
            solution = "MySolution",
            folder = "NonExistentFolder"
        });
        Assert.IsTrue(issues2.Exists(x => x.Contains("does not exist in the target environment")));
        Assert.IsTrue(issues2.Exists(x => x.Contains("does not exist")));

        // 3. Solution exists, folder exists but no matching dlls
        var solutionEntity = new Entity("solution", Guid.NewGuid()) { ["solutionid"] = Guid.NewGuid() };
        solutionEntity["p.customizationprefix"] = new AliasedValue("publisher", "customizationprefix", "dev");
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .Returns(Task.FromResult(new EntityCollection([solutionEntity])));

        var emptyFolder = Path.Combine(_tempDir, "EmptyBin");
        Directory.CreateDirectory(emptyFolder);

        var issues3 = await validator.ValidateServerDeploymentAsync(args, new JsonServer
        {
            solution = "MySolution",
            folder = "EmptyBin"
        });
        Assert.IsTrue(issues3.Exists(x => x.Contains("No matching files found")));

        // 4. Valid deployment with matching dll file
        File.WriteAllText(Path.Combine(emptyFolder, "Plugin.dll"), "fake dll content");
        var issues4 = await validator.ValidateServerDeploymentAsync(args, new JsonServer
        {
            solution = "MySolution",
            folder = "EmptyBin"
        });
        Assert.AreEqual(0, issues4.Count);
    }

    [TestMethod]
    public async Task ValidateWebResourceDeploymentAsync_ChecksAllIssueConditions()
    {
        var validator = new DeploymentValidator(_service);
        var args = new CommandLineArgs();

        // 1. Empty / ???
        var issues1 = await validator.ValidateWebResourceDeploymentAsync(args, new JsonWebResource
        {
            solution = "",
            rootfolder = "???"
        });
        CollectionAssert.Contains(issues1, "'solution' is empty or placeholder '???'");
        CollectionAssert.Contains(issues1, "'rootfolder' is empty or placeholder '???'");

        // 2. Solution not found & rootfolder not exist
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .Returns(Task.FromResult(new EntityCollection()));

        var issues2 = await validator.ValidateWebResourceDeploymentAsync(args, new JsonWebResource
        {
            solution = "WebSolution",
            rootfolder = "MissingWebDir"
        });
        Assert.IsTrue(issues2.Exists(x => x.Contains("does not exist in the target environment")));
        Assert.IsTrue(issues2.Exists(x => x.Contains("does not exist")));

        // 3. Solution exists, rootfolder has unsupported files
        var solutionEntity = new Entity("solution", Guid.NewGuid()) { ["solutionid"] = Guid.NewGuid() };
        solutionEntity["p.customizationprefix"] = new AliasedValue("publisher", "customizationprefix", "dev");
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .Returns(Task.FromResult(new EntityCollection([solutionEntity])));

        var webFolder = Path.Combine(_tempDir, "Web");
        Directory.CreateDirectory(webFolder);
        File.WriteAllText(Path.Combine(webFolder, "unsupported.exe"), "test");

        var issues3 = await validator.ValidateWebResourceDeploymentAsync(args, new JsonWebResource
        {
            solution = "WebSolution",
            rootfolder = "Web"
        });
        Assert.IsTrue(issues3.Exists(x => x.Contains("unsupported web resource extensions")));

        // 4. Valid web resources (e.g. .js)
        File.Delete(Path.Combine(webFolder, "unsupported.exe"));
        File.WriteAllText(Path.Combine(webFolder, "script.js"), "console.log('ok');");

        var issues4 = await validator.ValidateWebResourceDeploymentAsync(args, new JsonWebResource
        {
            solution = "WebSolution",
            rootfolder = "Web"
        });
        Assert.AreEqual(0, issues4.Count);
    }
}
