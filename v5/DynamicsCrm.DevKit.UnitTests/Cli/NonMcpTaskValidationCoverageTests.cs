using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class NonMcpTaskValidationCoverageTests
{
    [TestMethod]
    public async Task FastDeployTasks_BypassProfileValidationWhenTheirExplicitArgumentsArePresent()
    {
        Assert.IsTrue(await new TaskUploadReport(new CommandLineArgs { File = "report.rdl" }, null!).IsValidAsync());
        Assert.IsTrue(await new TaskWebResource(new CommandLineArgs { File = "account.js", WebResource = "new_/account.js" }, null!).IsValidAsync());
    }

    [TestMethod]
    public async Task DownloadTasks_RejectMissingProfilesAndPlaceholderSolutionsBeforeDataverseCalls()
    {
        var args = new CommandLineArgs { Profile = "test" };
        Assert.IsFalse(await new TaskDownloadReport(args, null!).IsValidAsync());
        Assert.IsFalse(await new TaskDownloadReport(args, new JsonDownloadReport { solution = "???" }).IsValidAsync());
        Assert.IsFalse(await new TaskDownloadWebResource(args, null!).IsValidAsync());
        Assert.IsFalse(await new TaskDownloadWebResource(args, new JsonDownloadWebResource { solution = "???" }).IsValidAsync());
    }

    [TestMethod]
    public async Task ModelBuilderAndDataSource_RejectInvalidInputsBeforeDataverseCalls()
    {
        var args = new CommandLineArgs();
        Assert.IsFalse(await new TaskModelBuilder(args, new JsonModelBuilder { @namespace = "???", output = "Models.cs" }).IsValidAsync());
        Assert.IsFalse(await new TaskDataSource(args, new JsonDataSource { solution = "???", displayname = "Valid", pluralname = "Valids" }).IsValidAsync());
        Assert.IsFalse(await new TaskDataSource(args, new JsonDataSource { solution = "solution", displayname = "bad!", pluralname = "Valids" }).IsValidAsync());
    }

    [TestMethod]
    public async Task SolutionPackager_RejectsInvalidConfigurationBeforePacAndDataverseCalls()
    {
        var args = new CommandLineArgs();
        Assert.IsFalse(await new TaskPacSolutionPackager(args, new JsonSolutionPackager { solution = "???" }).IsValidAsync());
        Assert.IsFalse(await new TaskPacSolutionPackager(args, new JsonSolutionPackager { solution = "solution", solutiontype = "invalid" }).IsValidAsync());
    }
}
