using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Reflection;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageView;

[TestClass]
public class ViewBackupHelperTests
{
    private static readonly Assembly CliAssembly =
        typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetSystemJobsTool).Assembly;

    private static readonly Type HelperType =
        CliAssembly.GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.ViewBackupHelper")!;

    private static readonly MethodInfo SaveBackupMethod =
        HelperType.GetMethod("SaveBackup", BindingFlags.Public | BindingFlags.Static)!;

    private const string SampleFetch = "<fetch><entity name='account'></entity></fetch>";
    private const string SampleLayout = "<grid name='resultset'><row name='result' id='accountid'><cell name='name' width='300' /></row></grid>";

    private static (string FetchPath, string LayoutPath) InvokeSaveBackup(
        string entity, Guid viewId, string viewName, string fetchXml, string layoutXml, string workspaceFolder)
    {
        var result = SaveBackupMethod.Invoke(null, [entity, viewId, viewName, fetchXml, layoutXml, workspaceFolder]);
        var tuple = ((string FetchBackupPath, string LayoutBackupPath))result!;
        return (tuple.FetchBackupPath, tuple.LayoutBackupPath);
    }

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

            var (fetchPath, layoutPath) = InvokeSaveBackup("account", viewId, "Test View", SampleFetch, SampleLayout, "");

            Assert.IsTrue(File.Exists(fetchPath), "FetchXML backup file should be created");
            Assert.IsTrue(File.Exists(layoutPath), "LayoutXML backup file should be created");

            var fetchFileName = Path.GetFileName(fetchPath);
            Assert.IsTrue(fetchFileName.StartsWith(viewId.ToString("N") + "_"), "Backup file should start with the view id (folder already carries the entity name)");
            Assert.IsTrue(fetchFileName.EndsWith(".fetchxml.xml"), "FetchXML backup should have .fetchxml.xml extension");

            var layoutFileName = Path.GetFileName(layoutPath);
            Assert.IsTrue(layoutFileName.EndsWith(".layoutxml.xml"), "LayoutXML backup should have .layoutxml.xml extension");
            Assert.AreEqual(
                fetchFileName.Replace(".fetchxml.xml", ""),
                layoutFileName.Replace(".layoutxml.xml", ""),
                "Pair files must share the same {viewId}_{timestamp} stem");
        }
        finally
        {
            Directory.SetCurrentDirectory(originalDir);
            if (Directory.Exists(tempDir))
                Directory.Delete(tempDir, recursive: true);
        }
    }

    [TestMethod]
    public void SaveBackup_BackupContainsViewIdComment()
    {
        var originalDir = Directory.GetCurrentDirectory();
        var tempDir = Path.Combine(Path.GetTempPath(), $"devkit_test_{Guid.NewGuid():N}");
        Directory.CreateDirectory(tempDir);
        Directory.SetCurrentDirectory(tempDir);

        try
        {
            var viewId = Guid.NewGuid();
            var (fetchPath, layoutPath) = InvokeSaveBackup("account", viewId, "Test View", SampleFetch, SampleLayout, "");

            Assert.IsTrue(File.ReadAllText(fetchPath).Contains(viewId.ToString()), "FetchXML backup should contain ViewId comment");
            Assert.IsTrue(File.ReadAllText(layoutPath).Contains(viewId.ToString()), "LayoutXML backup should contain ViewId comment");
            Assert.IsTrue(File.ReadAllText(layoutPath).Contains("cell name="), "LayoutXML backup should keep the layout content");
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
            InvokeSaveBackup("account", viewId, "Test", "<fetch/>", "<grid/>", tempDir);

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
    public void SaveBackup_EmptyXml_WritesPlaceholderComment()
    {
        var originalDir = Directory.GetCurrentDirectory();
        var tempDir = Path.Combine(Path.GetTempPath(), $"devkit_test_{Guid.NewGuid():N}");
        Directory.CreateDirectory(tempDir);
        Directory.SetCurrentDirectory(tempDir);

        try
        {
            var viewId = Guid.NewGuid();
            var (fetchPath, layoutPath) = InvokeSaveBackup("account", viewId, "Test View", "", "", "");

            Assert.IsTrue(File.ReadAllText(fetchPath).Contains("empty"), "Empty FetchXML should write placeholder comment mentioning 'empty'");
            Assert.IsTrue(File.ReadAllText(layoutPath).Contains("empty"), "Empty LayoutXML should write placeholder comment mentioning 'empty'");
        }
        finally
        {
            Directory.SetCurrentDirectory(originalDir);
            if (Directory.Exists(tempDir))
                Directory.Delete(tempDir, recursive: true);
        }
    }
}
