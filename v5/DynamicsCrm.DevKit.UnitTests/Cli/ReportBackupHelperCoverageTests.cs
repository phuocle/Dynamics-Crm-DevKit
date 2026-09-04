using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class ReportBackupHelperCoverageTests
{
    [TestMethod]
    public void SaveBackup_CreatesBackup()
    {
        var tempDir = Path.Combine(Path.GetTempPath(), "dkbackup_" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(tempDir);
        try
        {
            var rdl = Path.Combine(tempDir, "myreport.rdl");
            File.WriteAllText(rdl, "<Report>content</Report>");

            var backup = ReportBackupHelper.SaveBackup(rdl, "MyDataset", tempDir);
            Assert.IsTrue(File.Exists(backup));
            StringAssert.Contains(backup, "myreport");
            StringAssert.Contains(backup, "MyDataset");
            StringAssert.Contains(backup, ".rdl");
        }
        finally { Directory.Delete(tempDir, true); }
    }

    [TestMethod]
    public void SaveBackup_SanitizesDatasetName()
    {
        var tempDir = Path.Combine(Path.GetTempPath(), "dkbackup_" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(tempDir);
        try
        {
            var rdl = Path.Combine(tempDir, "r.rdl");
            File.WriteAllText(rdl, "x");
            var backup = ReportBackupHelper.SaveBackup(rdl, "My/BadName", tempDir);
            Assert.IsTrue(File.Exists(backup));
            Assert.IsFalse(backup.Contains("/"));
        }
        finally { Directory.Delete(tempDir, true); }
    }

    [TestMethod]
    public void SaveBackup_TwoCalls_DifferentTimestamps()
    {
        var tempDir = Path.Combine(Path.GetTempPath(), "dkbackup_" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(tempDir);
        try
        {
            var rdl = Path.Combine(tempDir, "r.rdl");
            File.WriteAllText(rdl, "x");
            var b1 = ReportBackupHelper.SaveBackup(rdl, "ds", tempDir);
            System.Threading.Thread.Sleep(10);
            var b2 = ReportBackupHelper.SaveBackup(rdl, "ds", tempDir);
            // Same source content - second one should be a different file (different timestamp)
            Assert.AreNotEqual(b1, b2);
        }
        finally { Directory.Delete(tempDir, true); }
    }
}
