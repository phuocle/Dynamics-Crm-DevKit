using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.CompilerServices;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.CrossTool;

[TestClass]
public sealed class HelperEdgeCoverageTests
{
    [TestMethod]
    public void RoleBackup_SaveAndLoad_RoundTripsJsonSnapshot()
    {
        var directory = Path.Combine(Path.GetTempPath(), "devkit-mcp-tests-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(directory);
        try
        {
            var roleId = Guid.NewGuid();
            var businessUnitId = Guid.NewGuid();
            var path = RoleBackupHelper.SaveBackup(
                roleId,
                "Sales & Service",
                businessUnitId,
                new List<RoleBackupPrivilege>
                {
                    new() { PrivilegeId = "p1", Name = "Read Account", Depth = "Global" }
                },
                directory);

            Assert.IsTrue(File.Exists(path));
            var snapshot = RoleBackupHelper.LoadBackup(path);
            Assert.AreEqual(roleId.ToString(), snapshot.RoleId);
            Assert.AreEqual("Sales & Service", snapshot.RoleName);
            Assert.AreEqual(businessUnitId.ToString(), snapshot.BusinessUnitId);
            Assert.AreEqual(1, snapshot.Privileges.Count);
            Assert.AreEqual("Read Account", snapshot.Privileges[0].Name);
        }
        finally
        {
            if (Directory.Exists(directory))
                Directory.Delete(directory, recursive: true);
        }
    }

    [TestMethod]
    public void SolutionResolveResult_FactoryMethodsSetStatusAndPayload()
    {
        var publisherId = Guid.NewGuid();
        var success = SolutionResolveResult.Ok("new", 10000, publisherId, "new_solution", "New Solution");
        Assert.IsTrue(success.IsSuccess);
        Assert.AreEqual("new", success.Prefix);
        Assert.AreEqual(10000, success.OptionValuePrefix);
        Assert.AreEqual(publisherId, success.PublisherId);
        Assert.AreEqual("new_solution", success.UniqueName);

        var failed = SolutionResolveResult.Fail("not found", ResolveStatus.NotFound);
        Assert.IsFalse(failed.IsSuccess);
        Assert.AreEqual("not found", failed.Error);
        Assert.AreEqual(ResolveStatus.NotFound, failed.Status);
    }

    [TestMethod]
    public void SolutionResolver_InvalidInputsFailClosed()
    {
        var service = (ServiceClient)RuntimeHelpers.GetUninitializedObject(typeof(ServiceClient));
        Assert.IsFalse(SolutionResolverHelper.Resolve(null!, "solution").IsSuccess);
        Assert.IsFalse(SolutionResolverHelper.Resolve(service, " ").IsSuccess);
        Assert.IsFalse(SolutionResolverHelper.Resolve(service, "solution").IsSuccess);
    }

    [TestMethod]
    public void MetadataWait_NonPositiveInputReturnsImmediately()
    {
        MetadataOperationWaitHelper.WaitAfterMutation(0);
        MetadataOperationWaitHelper.WaitAfterMutation(-1);
        Assert.AreEqual(15, MetadataOperationWaitHelper.DefaultWaitSeconds);
        Assert.AreEqual(4 * 1024 * 1024, FileColumnTransferHelper.BlockSize);
    }

    [TestMethod]
    public void FileTransferHelpers_HandleMimeNamesAndUniquePaths()
    {
        var mimeCases = new Dictionary<string, string>
        {
            ["file.txt"] = "text/plain", ["file.log"] = "text/plain", ["file.csv"] = "text/plain",
            ["file.json"] = "application/json", ["file.xml"] = "application/xml",
            ["file.html"] = "text/html", ["file.htm"] = "text/html", ["file.pdf"] = "application/pdf",
            ["file.zip"] = "application/zip", ["file.png"] = "image/png", ["file.jpg"] = "image/jpeg",
            ["file.jpeg"] = "image/jpeg", ["file.gif"] = "image/gif", ["file.bmp"] = "image/bmp",
            ["file.tif"] = "image/tiff", ["file.tiff"] = "image/tiff", ["file.doc"] = "application/msword",
            ["file.docx"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ["file.xls"] = "application/vnd.ms-excel", ["file.xlsx"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            ["file.ppt"] = "application/vnd.ms-powerpoint", ["file.pptx"] = "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            ["file.unknown"] = "application/octet-stream"
        };

        foreach (var pair in mimeCases)
            Assert.AreEqual(pair.Value, FileColumnTransferHelper.GetMimeType(pair.Key));

        Assert.AreEqual("_", FileColumnTransferHelper.SanitizeFolderName(null!));
        Assert.AreEqual("_", FileColumnTransferHelper.SanitizeFolderName("   "));
        Assert.AreEqual("Account Name", FileColumnTransferHelper.SanitizeFolderName(" Account Name "));

        var directory = Path.Combine(Path.GetTempPath(), "devkit-mcp-files-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(directory);
        try
        {
            File.WriteAllText(Path.Combine(directory, "report.txt"), "existing");
            File.WriteAllText(Path.Combine(directory, "report (2).txt"), "existing");
            Assert.AreEqual(
                Path.Combine(directory, "report (3).txt"),
                FileColumnTransferHelper.GetUniqueFilePath(directory, "report.txt"));
            Assert.AreEqual(
                Path.Combine(directory, "new.bin"),
                FileColumnTransferHelper.GetUniqueFilePath(directory, "new.bin"));
        }
        finally
        {
            if (Directory.Exists(directory))
                Directory.Delete(directory, recursive: true);
        }
    }
}
