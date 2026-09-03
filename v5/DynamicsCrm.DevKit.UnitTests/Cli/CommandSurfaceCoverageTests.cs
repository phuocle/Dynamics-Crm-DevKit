using DynamicsCrm.DevKit.Cli.Commands;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class CommandSurfaceCoverageTests
{
    [TestMethod]
    public void ServerCommand_BuildArgRows_AndAliases_ExposeExpectedTypes()
    {
        var rows = new ServerCommandProbe().Rows(new ServerCommandArgs { ServerType = "plugins", OnlyUpdateAssembly = true });
        Assert.HasCount(2, rows);
        CollectionAssert.AreEqual(new[] { "            --type", "plugins" }, rows[0]);
        CollectionAssert.AreEqual(new[] { "           --only-assembly", "yes" }, rows[1]);
        Assert.AreEqual("plugins", new PluginCommandProbe().DefaultType());
        Assert.AreEqual("workflows", new WorkflowCommandProbe().DefaultType());
        Assert.AreEqual("dataproviders", new DataProviderCommandProbe().DefaultType());
    }

    [TestMethod]
    public void WebResourceAndUploadReport_FastDeployFlagsAndRows_AreCovered()
    {
        var web = new WebResourceCommandProbe();
        var webSettings = new WebResourceCommandArgs { File = "account.js", WebResource = "new_/account.js" };
        Assert.IsFalse(web.ProfileRequired(webSettings));
        Assert.IsFalse(web.JsonRequired(webSettings));
        Assert.HasCount(2, web.Rows(webSettings));

        var report = new UploadReportCommandProbe();
        var reportSettings = new UploadReportCommandArgs { File = "report.rdl", Report = "Revenue", Language = "1033" };
        Assert.IsFalse(report.ProfileRequired(reportSettings));
        Assert.IsFalse(report.JsonRequired(reportSettings));
        Assert.HasCount(3, report.Rows(reportSettings));
    }

    [TestMethod]
    public async Task BaseCommand_StopsAtProfileOrJsonValidationBeforeConnection()
    {
        var command = new DevKitCommandProbe();
        Assert.AreEqual(1, await command.Execute(new DevKitCommandArgs { Json = "missing.json" }));
        Assert.AreEqual(1, await command.Execute(new DevKitCommandArgs { Profile = "default" }));
    }

    private sealed class ServerCommandProbe : ServerCommand
    {
        public List<string[]> Rows(ServerCommandArgs settings) => BuildArgRows(settings);
    }
    private sealed class PluginCommandProbe : PluginCommand { public string DefaultType() => GetDefaultServerType(); }
    private sealed class WorkflowCommandProbe : WorkflowCommand { public string DefaultType() => GetDefaultServerType(); }
    private sealed class DataProviderCommandProbe : DataProviderCommand { public string DefaultType() => GetDefaultServerType(); }
    private sealed class WebResourceCommandProbe : WebResourceCommand
    {
        public bool ProfileRequired(WebResourceCommandArgs settings) => IsProfileRequired(settings);
        public bool JsonRequired(WebResourceCommandArgs settings) => IsJsonRequired(settings);
        public List<string[]> Rows(WebResourceCommandArgs settings) => BuildArgRows(settings);
    }
    private sealed class UploadReportCommandProbe : UploadReportCommand
    {
        public bool ProfileRequired(UploadReportCommandArgs settings) => IsProfileRequired(settings);
        public bool JsonRequired(UploadReportCommandArgs settings) => IsJsonRequired(settings);
        public List<string[]> Rows(UploadReportCommandArgs settings) => BuildArgRows(settings);
    }
    private sealed class DevKitCommandProbe : DevKitCommand<DevKitCommandArgs>
    {
        public Task<int> Execute(DevKitCommandArgs settings) => ExecuteAsync(null!, settings, CancellationToken.None);
        protected override Task RunTaskAsync(DevKitCommandArgs settings) => Task.CompletedTask;
    }
}
