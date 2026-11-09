using Microsoft.PowerPlatform.Dataverse.Client;
using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using FakeItEasy;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// Checks single-type Extract zip resolution using a fake organization service.
/// </summary>
[TestClass]
// The export tests share temporary filenames with the other packager test class.
[DoNotParallelize]
public sealed class TaskPacSolutionPackagerWave2Tests
{
    private static readonly BindingFlags InstancePrivate = BindingFlags.NonPublic | BindingFlags.Instance;
    private IOrganizationServiceAsync2 _service = null!;
    private string _tempDir = null!;

    [TestInitialize]
    public void Setup()
    {
        _service = A.Fake<IOrganizationServiceAsync2>();
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit_pac_sp_w2_" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
    }

    [TestCleanup]
    public void Cleanup()
    {
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    private TaskPacSolutionPackager CreateTask(JsonSolutionPackager json)
    {
        return new TaskPacSolutionPackager(new CommandLineArgs(), json)
        {
            CurrentDirectory = _tempDir,
            OrgServiceAsync = _service
        };
    }

    [TestMethod]
    public async Task GetSolutionZipFileAsync_SingleType_ExportsWithoutManagedSuffix()
    {
        var solutionEntity = new Entity("solution", Guid.NewGuid()) { ["version"] = "2.0.0.1" };
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .Returns(Task.FromResult(new EntityCollection([solutionEntity])));
        var exportResp = new ExportSolutionResponse();
        exportResp.Results["ExportSolutionFile"] = new byte[] { 0x50, 0x4B, 0x03, 0x04 };
        A.CallTo(() => _service.ExecuteAsync(A<OrganizationRequest>.Ignored))
            .Returns(Task.FromResult<OrganizationResponse>(exportResp));

        var task = CreateTask(new JsonSolutionPackager
        {
            solution = "MySolution",
            solutiontype = "Unmanaged",
            folder = "src",
            type = "Extract"
        });
        var zipMethod = typeof(TaskPacSolutionPackager).GetMethod("GetSolutionZipFileAsync", InstancePrivate)!;
        var zip = await (Task<string>)zipMethod.Invoke(task, null)!;

        Assert.IsTrue(File.Exists(zip), "the exported zip was written.");
        Assert.IsFalse(zip.EndsWith("_managed.zip"), "a single Unmanaged export carries no managed suffix.");
        StringAssert.Contains(zip, "Solutions-Extract", "the extract folder holds the download.");
    }




}
