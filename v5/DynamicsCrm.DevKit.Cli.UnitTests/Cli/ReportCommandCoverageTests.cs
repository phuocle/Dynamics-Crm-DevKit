using DynamicsCrm.DevKit.Cli.Commands;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public class ReportCommandCoverageTests
{
    private const string FetchXml = "<fetch><entity name=\"account\" /></fetch>";

    [TestMethod]
    public void NormalizeType_MissingOrUnknown_ThrowsWithValidValues()
    {
        var missing = Assert.ThrowsExactly<DevKitValidationException>(() => ReportCommand.NormalizeType(null, validate: true));
        StringAssert.Contains(missing.Message, "--type: required");
        StringAssert.Contains(missing.Message, "dataset, upload, download");

        var unknown = Assert.ThrowsExactly<DevKitValidationException>(() => ReportCommand.NormalizeType("graph", validate: true));
        StringAssert.Contains(unknown.Message, "--type 'graph': unknown");

        Assert.IsNull(ReportCommand.NormalizeType(null, validate: false));
        Assert.IsNull(ReportCommand.NormalizeType("graph", validate: false));
        Assert.AreEqual("dataset", ReportCommand.NormalizeType(" DATASET ", validate: false));
    }

    [TestMethod]
    public void ValidateOptionsForType_FlagsOptionsOutsideTheTypeSet()
    {
        var uploadWithName = new ReportCommandArgs { Type = "upload", Name = "X" };
        var uploadError = Assert.ThrowsExactly<DevKitValidationException>(
            () => ReportCommand.ValidateOptionsForType(uploadWithName, "upload"));
        StringAssert.Contains(uploadError.Message, "--name: not valid for --type upload");

        var datasetWithReport = new ReportCommandArgs { Type = "dataset", Report = "R" };
        var datasetError = Assert.ThrowsExactly<DevKitValidationException>(
            () => ReportCommand.ValidateOptionsForType(datasetWithReport, "dataset"));
        StringAssert.Contains(datasetError.Message, "--report: not valid for --type dataset");

        var downloadWithFile = new ReportCommandArgs { Type = "download", File = "a.rdl" };
        var downloadError = Assert.ThrowsExactly<DevKitValidationException>(
            () => ReportCommand.ValidateOptionsForType(downloadWithFile, "download"));
        StringAssert.Contains(downloadError.Message, "--file: not valid for --type download");

        // Valid combinations pass silently.
        ReportCommand.ValidateOptionsForType(
            new ReportCommandArgs { Type = "upload", File = "a.rdl", Report = "R", Language = "1033" }, "upload");
        ReportCommand.ValidateOptionsForType(
            new ReportCommandArgs { Type = "dataset", File = "a.rdl", Name = "N", NewName = "N2", FetchXml = FetchXml, PreFilter = "account=on", Force = true }, "dataset");
    }

    [TestMethod]
    public async Task Execute_MissingUnknownTypeOrInvalidOption_FailsValidationBeforeConnection()
    {
        var probe = new ReportCommandProbe();
        Assert.AreEqual(1, await probe.Execute(new ReportCommandArgs()));
        Assert.AreEqual(1, await probe.Execute(new ReportCommandArgs { Type = "graph" }));
        Assert.AreEqual(1, await probe.Execute(new ReportCommandArgs { Type = "upload", Name = "X" }));
        Assert.AreEqual(1, await probe.Execute(new ReportCommandArgs { Type = "dataset", Report = "R" }));
    }

    [TestMethod]
    public void ProfileAndJsonRequired_FollowTheType()
    {
        var probe = new ReportCommandProbe();
        Assert.IsFalse(probe.ProfileRequired(new ReportCommandArgs { Type = "dataset" }));
        Assert.IsFalse(probe.JsonRequired(new ReportCommandArgs { Type = "dataset" }));

        Assert.IsTrue(probe.ProfileRequired(new ReportCommandArgs { Type = "upload" }));
        Assert.IsTrue(probe.JsonRequired(new ReportCommandArgs { Type = "upload" }));
        Assert.IsFalse(probe.ProfileRequired(new ReportCommandArgs { Type = "upload", File = "Account.rdl" }));
        Assert.IsFalse(probe.JsonRequired(new ReportCommandArgs { Type = "upload", File = "Account.rdl" }));

        Assert.IsTrue(probe.ProfileRequired(new ReportCommandArgs { Type = "download" }));
        Assert.IsTrue(probe.JsonRequired(new ReportCommandArgs { Type = "download" }));
    }

    [TestMethod]
    public void BuildArgRows_ListsProvidedOptionsAndMasksInlineFetchXml()
    {
        var probe = new ReportCommandProbe();
        var rows = probe.Rows(new ReportCommandArgs
        {
            Type = "dataset",
            File = "Account.rdl",
            FetchXml = FetchXml,
            Force = true
        });
        Assert.HasCount(4, rows);
        CollectionAssert.AreEqual(new[] { "           --type", "dataset" }, rows[0]);
        CollectionAssert.AreEqual(new[] { "           --file", "Account.rdl" }, rows[1]);
        StringAssert.Contains(rows[2][0], "--fetchxml");
        StringAssert.Contains(rows[2][1], "(inline, ");
        StringAssert.Contains(rows[2][1], "chars)");
        Assert.IsFalse(rows[2][1].Contains(FetchXml));
        CollectionAssert.AreEqual(new[] { "           --force", "yes" }, rows[3]);

        // Nothing provided (unknown type path) → no rows.
        Assert.HasCount(0, probe.Rows(new ReportCommandArgs()));
    }

    [TestMethod]
    public void ReportId_Rules_AreEnforced()
    {
        // --reportid requires --file
        var noFile = Assert.ThrowsExactly<DevKitValidationException>(
            () => ReportCommand.ValidateReportIdRules(new ReportCommandArgs { ReportId = "11111111-1111-1111-1111-111111111111" }, "upload"));
        StringAssert.Contains(noFile.Message, "--reportid: requires --file");

        // exclusive with --report
        var both = Assert.ThrowsExactly<DevKitValidationException>(
            () => ReportCommand.ValidateReportIdRules(new ReportCommandArgs
            {
                File = "Account.rdl",
                Report = "Account",
                ReportId = "11111111-1111-1111-1111-111111111111"
            }, "upload"));
        StringAssert.Contains(both.Message, "use only one");

        // GUID check
        var badGuid = Assert.ThrowsExactly<DevKitValidationException>(
            () => ReportCommand.ValidateReportIdRules(new ReportCommandArgs { File = "Account.rdl", ReportId = "nope" }, "upload"));
        StringAssert.Contains(badGuid.Message, "not a valid GUID");

        // download is rejected
        var download = Assert.ThrowsExactly<DevKitValidationException>(
            () => ReportCommand.ValidateReportIdRules(new ReportCommandArgs { ReportId = "11111111-1111-1111-1111-111111111111" }, "download"));
        StringAssert.Contains(download.Message, "not valid for --type download");

        // valid combination (with surrounding whitespace) passes silently
        ReportCommand.ValidateReportIdRules(new ReportCommandArgs
        {
            File = "Account.rdl",
            ReportId = " 11111111-1111-1111-1111-111111111111 "
        }, "upload");
    }

    [TestMethod]
    public void BuildArgRows_IncludesReportIdWithoutReportName()
    {
        var probe = new ReportCommandProbe();
        var rows = probe.Rows(new ReportCommandArgs
        {
            Type = "upload",
            File = "Account.rdl",
            ReportId = "11111111-1111-1111-1111-111111111111"
        });
        CollectionAssert.Contains(rows.Select(r => r[0]).ToList(), "           --reportid");
        CollectionAssert.DoesNotContain(rows.Select(r => r[0]).ToList(), "           --report");
    }

    private sealed class ReportCommandProbe : ReportCommand
    {
        public Task<int> Execute(ReportCommandArgs settings) => ExecuteAsync(null!, settings, CancellationToken.None);
        public bool ProfileRequired(ReportCommandArgs settings) => IsProfileRequired(settings);
        public bool JsonRequired(ReportCommandArgs settings) => IsJsonRequired(settings);
        public List<string[]> Rows(ReportCommandArgs settings) => BuildArgRows(settings);
    }
}
