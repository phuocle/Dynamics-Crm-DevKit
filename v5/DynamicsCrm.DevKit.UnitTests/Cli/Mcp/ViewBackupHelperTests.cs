using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class ViewBackupHelperTests
{
    private static readonly Assembly CliAssembly =
        typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetSystemJobsTool).Assembly;

    private static readonly Type HelperType =
        CliAssembly.GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.ViewBackupHelper")!;

    private static readonly MethodInfo SaveBackupMethod =
        HelperType.GetMethod("SaveBackup", BindingFlags.Public | BindingFlags.Static)!;

    // ── SaveBackup ────────────────────────────────────────────────────────────

    [TestMethod]
    public void SaveBackup_CreatesBackupFiles()
    {
        var originalDir = Directory.GetCurrentDirectory();
        var tempDir = Path.Combine(Path.GetTempPath(), $"devkit_test_{Guid.NewGuid():N}");
        Directory.CreateDirectory(tempDir);
        Directory.SetCurrentDirectory(tempDir);

        try
        {
            var viewId = Guid.NewGuid();
            var fetchXml = "<fetch><entity name='account'></entity></fetch>";
            var layoutXml = "<grid name='resultset'><row name='result'/></grid>";

            var result = SaveBackupMethod.Invoke(null, ["account", viewId, "Test View", fetchXml, layoutXml, ""]);
            dynamic tuple = result!;
            string? fetchPath = tuple.Item1;
            string? layoutPath = tuple.Item2;

            Assert.IsTrue(File.Exists(fetchPath), "FetchXML backup file should be created");
            Assert.IsTrue(File.Exists(layoutPath), "LayoutXML backup file should be created");

            var fetchFileName = Path.GetFileName(fetchPath);
            Assert.IsTrue(fetchFileName.StartsWith("account"), "Backup file should start with entity name");
            Assert.IsTrue(fetchFileName.EndsWith(".fetchxml.xml"), "FetchXML backup should have .fetchxml.xml extension");

            var layoutFileName = Path.GetFileName(layoutPath);
            Assert.IsTrue(layoutFileName.EndsWith(".layoutxml.xml"), "LayoutXML backup should have .layoutxml.xml extension");
        }
        finally
        {
            Directory.SetCurrentDirectory(originalDir);
            if (Directory.Exists(tempDir))
                Directory.Delete(tempDir, recursive: true);
        }
    }

    [TestMethod]
    public void SaveBackup_FetchBackupContainsViewIdComment()
    {
        var originalDir = Directory.GetCurrentDirectory();
        var tempDir = Path.Combine(Path.GetTempPath(), $"devkit_test_{Guid.NewGuid():N}");
        Directory.CreateDirectory(tempDir);
        Directory.SetCurrentDirectory(tempDir);

        try
        {
            var viewId = Guid.NewGuid();
            var result = SaveBackupMethod.Invoke(null, ["account", viewId, "Test View",
                "<fetch><entity name='account'></entity></fetch>", "<grid/>", ""]);
            dynamic tuple = result!;
            string? fetchPath = tuple.Item1;

            var content = File.ReadAllText(fetchPath);
            Assert.IsTrue(content.Contains(viewId.ToString()), "FetchXML backup should contain ViewId comment");
        }
        finally
        {
            Directory.SetCurrentDirectory(originalDir);
            if (Directory.Exists(tempDir))
                Directory.Delete(tempDir, recursive: true);
        }
    }

    [TestMethod]
    public void SaveBackup_BackupDirectoryCreatedUnderDevkit()
    {
        var originalDir = Directory.GetCurrentDirectory();
        var tempDir = Path.Combine(Path.GetTempPath(), $"devkit_test_{Guid.NewGuid():N}");
        Directory.CreateDirectory(tempDir);
        Directory.SetCurrentDirectory(tempDir);

        try
        {
            var viewId = Guid.NewGuid();
            SaveBackupMethod.Invoke(null, ["account", viewId, "Test", "<fetch/>", "<grid/>", tempDir]);

            var backupDir = Path.Combine(tempDir, ".devkit", "manage_view", "account");
            Assert.IsTrue(Directory.Exists(backupDir), "Backup directory .devkit/manage_view/account should be created");
        }
        finally
        {
            Directory.SetCurrentDirectory(originalDir);
            if (Directory.Exists(tempDir))
                Directory.Delete(tempDir, recursive: true);
        }
    }

    [TestMethod]
    public void SaveBackup_EmptyFetchXml_WritesPlaceholderComment()
    {
        var originalDir = Directory.GetCurrentDirectory();
        var tempDir = Path.Combine(Path.GetTempPath(), $"devkit_test_{Guid.NewGuid():N}");
        Directory.CreateDirectory(tempDir);
        Directory.SetCurrentDirectory(tempDir);

        try
        {
            var viewId = Guid.NewGuid();
            var result = SaveBackupMethod.Invoke(null, ["account", viewId, "Test View", "", "<grid/>", ""]);
            dynamic tuple = result!;
            string? fetchPath = tuple.Item1;

            var content = File.ReadAllText(fetchPath);
            Assert.IsTrue(content.Contains("empty"), "Empty FetchXML should write placeholder comment mentioning 'empty'");
        }
        finally
        {
            Directory.SetCurrentDirectory(originalDir);
            if (Directory.Exists(tempDir))
                Directory.Delete(tempDir, recursive: true);
        }
    }
}
