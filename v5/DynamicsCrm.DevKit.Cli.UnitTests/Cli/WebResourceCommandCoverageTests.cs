using DynamicsCrm.DevKit.Cli.Commands;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public class WebResourceCommandCoverageTests
{
    [TestMethod]
    public void NormalizeType_DefaultsToUpload()
    {
        Assert.AreEqual("upload", WebResourceCommand.NormalizeType(null));
        Assert.AreEqual("upload", WebResourceCommand.NormalizeType(""));
        Assert.AreEqual("upload", WebResourceCommand.NormalizeType(" UPLOAD "));
        Assert.AreEqual("download", WebResourceCommand.NormalizeType("download"));
    }

    [TestMethod]
    public void ProfileAndJsonRequired_UploadFollowsFile_DownloadAlways()
    {
        var probe = new WebResourceCommandProbe();
        Assert.IsTrue(probe.ProfileRequired(new WebResourceCommandArgs()));
        Assert.IsTrue(probe.JsonRequired(new WebResourceCommandArgs()));
        Assert.IsFalse(probe.ProfileRequired(new WebResourceCommandArgs { File = "account.js" }));
        Assert.IsFalse(probe.JsonRequired(new WebResourceCommandArgs { File = "account.js" }));

        Assert.IsTrue(probe.ProfileRequired(new WebResourceCommandArgs { Type = "download" }));
        Assert.IsTrue(probe.JsonRequired(new WebResourceCommandArgs { Type = "download" }));
    }

    [TestMethod]
    public async Task Execute_DownloadWithUploadOptions_FailsValidationBeforeConnection()
    {
        var probe = new WebResourceCommandProbe();
        Assert.AreEqual(1, await probe.Execute(new WebResourceCommandArgs { Type = "download", File = "account.js" }));
        Assert.AreEqual(1, await probe.Execute(new WebResourceCommandArgs { Type = "download", WebResource = "new_/account.js" }));
        Assert.AreEqual(1, await probe.Execute(new WebResourceCommandArgs { Type = "download", WebResourceId = "11111111-1111-1111-1111-111111111111" }));
    }

    [TestMethod]
    public async Task Execute_WebResourceId_Rules_AreEnforcedBeforeConnection()
    {
        var probe = new WebResourceCommandProbe();

        // --webresourceid without --file
        Assert.AreEqual(1, await probe.Execute(new WebResourceCommandArgs { WebResourceId = "11111111-1111-1111-1111-111111111111" }));

        // --webresourceid + --webresource → use only one
        Assert.AreEqual(1, await probe.Execute(new WebResourceCommandArgs
        {
            File = "account.js",
            WebResource = "new_/account.js",
            WebResourceId = "11111111-1111-1111-1111-111111111111"
        }));

        // invalid GUID
        Assert.AreEqual(1, await probe.Execute(new WebResourceCommandArgs { File = "account.js", WebResourceId = "not-a-guid" }));

        // valid combination passes the pre-connection checks (checked directly —
        // running it to completion would attempt a real connection via .env walk-up)
        probe.Rules(new WebResourceCommandArgs
        {
            File = "account.js",
            WebResourceId = "11111111-1111-1111-1111-111111111111"
        });
    }

    [TestMethod]
    public void BuildArgRows_ListsProvidedOptions()
    {
        var probe = new WebResourceCommandProbe();
        Assert.HasCount(0, probe.Rows(new WebResourceCommandArgs()));

        var rows = probe.Rows(new WebResourceCommandArgs { Type = "download" });
        Assert.HasCount(1, rows);
        CollectionAssert.AreEqual(new[] { "           --type", "download" }, rows[0]);

        var uploadRows = probe.Rows(new WebResourceCommandArgs { File = "account.js", WebResource = "new_/account.js" });
        Assert.HasCount(2, uploadRows);
        CollectionAssert.AreEqual(new[] { "           --file", "account.js" }, uploadRows[0]);
        CollectionAssert.AreEqual(new[] { "           --webresource", "new_/account.js" }, uploadRows[1]);
    }

    private sealed class WebResourceCommandProbe : WebResourceCommand
    {
        public Task<int> Execute(WebResourceCommandArgs settings) => ExecuteAsync(null!, settings, CancellationToken.None);
        public void Rules(WebResourceCommandArgs settings) => ValidateTypeAndOptions(settings);
        public bool ProfileRequired(WebResourceCommandArgs settings) => IsProfileRequired(settings);
        public bool JsonRequired(WebResourceCommandArgs settings) => IsJsonRequired(settings);
        public List<string[]> Rows(WebResourceCommandArgs settings) => BuildArgRows(settings);
    }
}
