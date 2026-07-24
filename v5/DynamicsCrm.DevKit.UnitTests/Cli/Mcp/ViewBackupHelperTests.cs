using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Reflection;
using System.Text;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class ViewBackupHelperTests
{
    private static readonly Assembly CliAssembly =
        typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.GetSystemJobsTool).Assembly;

    private static readonly Type HelperType =
        CliAssembly.GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.ViewBackupHelper")!;

    private static readonly MethodInfo BuildSuccessTextMethod =
        HelperType.GetMethod("BuildSuccessText", BindingFlags.Public | BindingFlags.Static)!;

    private static readonly MethodInfo AppendRollbackInfoMethod =
        HelperType.GetMethod("AppendRollbackInfo", BindingFlags.Public | BindingFlags.Static)!;

    private static readonly MethodInfo SaveBackupMethod =
        HelperType.GetMethod("SaveBackup", BindingFlags.Public | BindingFlags.Static)!;

    // ── Helpers ───────────────────────────────────────────────────────────────

    private static StringBuilder BuildSuccessText(
        string entityName, Guid viewId, string viewName,
        string? fetchBackupPath, string? layoutBackupPath,
        bool validated, bool fetchXmlUpdated, bool published)
    {
        return (StringBuilder)BuildSuccessTextMethod.Invoke(null,
            [entityName, viewId, viewName, fetchBackupPath, layoutBackupPath, validated, fetchXmlUpdated, published])!;
    }

    private static string AppendRollbackInfo(string? fetchBackupPath, string? layoutBackupPath, Guid viewId)
    {
        var sb = new StringBuilder();
        AppendRollbackInfoMethod.Invoke(null, [sb, fetchBackupPath, layoutBackupPath, viewId]);
        return sb.ToString();
    }

    // ── BuildSuccessText ──────────────────────────────────────────────────────

    [TestMethod]
    public void BuildSuccessText_ContainsEntityNameAndViewName()
    {
        var viewId = Guid.NewGuid();
        var result = BuildSuccessText("account", viewId, "Active Accounts",
            "/backup/fetch.bak", "/backup/layout.bak", true, true, true);

        var text = result.ToString();
        Assert.IsTrue(text.Contains("account"), "Output should contain entity name");
        Assert.IsTrue(text.Contains("Active Accounts"), "Output should contain view name");
    }

    [TestMethod]
    public void BuildSuccessText_ContainsViewId()
    {
        var viewId = Guid.NewGuid();
        var result = BuildSuccessText("contact", viewId, "My Contacts",
            null, null, false, false, false);

        Assert.IsTrue(result.ToString().Contains(viewId.ToString()), "Output should contain ViewId");
    }

    [TestMethod]
    public void BuildSuccessText_Validated_ShowsYes()
    {
        var result = BuildSuccessText("account", Guid.NewGuid(), "Test",
            "/backup/fetch.bak", "/backup/layout.bak", true, true, true);

        Assert.IsTrue(result.ToString().Contains("yes"), "Validated=true should show 'yes'");
    }

    [TestMethod]
    public void BuildSuccessText_NotValidated_ShowsSkipped()
    {
        var result = BuildSuccessText("account", Guid.NewGuid(), "Test",
            null, null, false, false, false);

        Assert.IsTrue(result.ToString().Contains("skipped"), "Validated=false should show 'skipped'");
    }

    [TestMethod]
    public void BuildSuccessText_Published_ShowsYes()
    {
        var result = BuildSuccessText("account", Guid.NewGuid(), "Test",
            null, null, true, true, true);

        var text = result.ToString();
        var found = false;
        foreach (var line in text.Split('\n'))
        {
            if (line.Contains("Published") && line.Contains("yes")) { found = true; break; }
        }
        Assert.IsTrue(found, "Published=true should output 'yes'");
    }

    [TestMethod]
    public void BuildSuccessText_FetchXmlUpdated_ShowsBothLayouts()
    {
        var result = BuildSuccessText("account", Guid.NewGuid(), "Test",
            "/backup/fetch.bak", "/backup/layout.bak", true, true, true);

        Assert.IsTrue(result.ToString().Contains("FetchXML"), "fetchXmlUpdated=true should mention FetchXML");
    }

    [TestMethod]
    public void BuildSuccessText_FetchXmlNotUpdated_ShowsLayoutOnly()
    {
        var result = BuildSuccessText("account", Guid.NewGuid(), "Test",
            "/backup/fetch.bak", "/backup/layout.bak", true, false, true);

        Assert.IsTrue(result.ToString().Contains("LayoutXML"), "fetchXmlUpdated=false should mention LayoutXML");
    }

    [TestMethod]
    public void BuildSuccessText_WithBackupPaths_ShowsPaths()
    {
        var fetchPath = "/backup/account_fetch.bak";
        var layoutPath = "/backup/account_layout.bak";
        var result = BuildSuccessText("account", Guid.NewGuid(), "Test",
            fetchPath, layoutPath, true, true, false);

        var text = result.ToString();
        Assert.IsTrue(text.Contains(fetchPath), "Output should contain fetch backup path");
        Assert.IsTrue(text.Contains(layoutPath), "Output should contain layout backup path");
    }

    [TestMethod]
    public void BuildSuccessText_NullBackupPaths_ShowsSkipped()
    {
        var result = BuildSuccessText("account", Guid.NewGuid(), "Test",
            null, null, false, false, false);

        Assert.IsTrue(result.ToString().Contains("skipped"), "Null backup paths should show 'skipped'");
    }

    // ── AppendRollbackInfo ────────────────────────────────────────────────────

    [TestMethod]
    public void AppendRollbackInfo_WithBackupPaths_ContainsDevkitBackupsFolder()
    {
        var viewId = Guid.NewGuid();
        var result = AppendRollbackInfo("/backup/fetch.bak", "/backup/layout.bak", viewId);

        Assert.IsTrue(result.Contains(".devkit/backups/views"), "Rollback info should reference .devkit/backups/views folder");
    }

    [TestMethod]
    public void AppendRollbackInfo_WithBackupPaths_MentionsManageView()
    {
        var viewId = Guid.NewGuid();
        var result = AppendRollbackInfo("/backup/fetch.bak", "/backup/layout.bak", viewId);

        Assert.IsTrue(result.Contains("manage_view"), "Rollback info should reference manage_view");
    }

    [TestMethod]
    public void AppendRollbackInfo_NullBackupPaths_MentionsNoBackup()
    {
        var viewId = Guid.NewGuid();
        var result = AppendRollbackInfo(null, null, viewId);

        Assert.IsTrue(result.Contains("no backup"), "Rollback info without backup should mention 'no backup'");
    }

    [TestMethod]
    public void AppendRollbackInfo_NullBackupPaths_ContainsViewId()
    {
        var viewId = Guid.NewGuid();
        var result = AppendRollbackInfo(null, null, viewId);

        Assert.IsTrue(result.Contains(viewId.ToString()), "Rollback info should contain the view ID");
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
            Assert.IsTrue(fetchFileName.EndsWith(".fetchxml.bak"), "FetchXML backup should have .fetchxml.bak extension");

            var layoutFileName = Path.GetFileName(layoutPath);
            Assert.IsTrue(layoutFileName.EndsWith(".layoutxml.bak"), "LayoutXML backup should have .layoutxml.bak extension");
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
            SaveBackupMethod.Invoke(null, ["account", viewId, "Test", "<fetch/>", "<grid/>", ""]);

            var backupDir = Path.Combine(tempDir, ".devkit", "backups", "views");
            Assert.IsTrue(Directory.Exists(backupDir), "Backup directory .devkit/backups/views should be created");
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
