using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using FakeItEasy;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Tasks;

[TestClass]
public sealed class TaskPacSolutionPackagerCoverageTests
{
    private static readonly BindingFlags InstancePrivate = BindingFlags.NonPublic | BindingFlags.Instance;
    private IOrganizationServiceAsync2 _service = null!;
    private string _tempDir = null!;

    [TestInitialize]
    public void Setup()
    {
        _service = A.Fake<IOrganizationServiceAsync2>();
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit_pac_sp_" + Guid.NewGuid().ToString("N"));
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
    public async Task TaskPacSolutionPackager_IsValidAsync_FullLadder()
    {
        // 1. solution empty
        Assert.IsFalse(await CreateTask(new JsonSolutionPackager { solution = "" }).IsValidAsync());
        Assert.IsFalse(await CreateTask(new JsonSolutionPackager { solution = "???" }).IsValidAsync());

        // 3. solutiontype empty or invalid
        Assert.IsFalse(await CreateTask(new JsonSolutionPackager { solution = "s", solutiontype = "" }).IsValidAsync());
        Assert.IsFalse(await CreateTask(new JsonSolutionPackager { solution = "s", solutiontype = "???" }).IsValidAsync());
        Assert.IsFalse(await CreateTask(new JsonSolutionPackager { solution = "s", solutiontype = "invalid" }).IsValidAsync());

        // 4. folder empty
        Assert.IsFalse(await CreateTask(new JsonSolutionPackager { solution = "s", solutiontype = "Managed", folder = "" }).IsValidAsync());
        Assert.IsFalse(await CreateTask(new JsonSolutionPackager { solution = "s", solutiontype = "Managed", folder = "???" }).IsValidAsync());

        // 5. type empty or invalid
        Assert.IsFalse(await CreateTask(new JsonSolutionPackager { solution = "s", solutiontype = "Managed", folder = "f", type = "" }).IsValidAsync());
        Assert.IsFalse(await CreateTask(new JsonSolutionPackager { solution = "s", solutiontype = "Managed", folder = "f", type = "???" }).IsValidAsync());
        Assert.IsFalse(await CreateTask(new JsonSolutionPackager { solution = "s", solutiontype = "Managed", folder = "f", type = "invalid" }).IsValidAsync());

        // 6. Pack when SolutionXmlFile missing
        Assert.IsFalse(await CreateTask(new JsonSolutionPackager { solution = "s", solutiontype = "Managed", folder = "f", type = "Pack" }).IsValidAsync());

        // 7. Mapfile missing
        Assert.IsFalse(await CreateTask(new JsonSolutionPackager { solution = "s", solutiontype = "Managed", folder = "f", type = "Extract", mapfile = "missing_map.xml" }).IsValidAsync());

        // 8. Extract when solution does not exist in Dataverse
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .Returns(Task.FromResult(new EntityCollection()));
        Assert.IsFalse(await CreateTask(new JsonSolutionPackager { solution = "MissingSol", solutiontype = "Managed", folder = "f", type = "Extract" }).IsValidAsync());
    }

    [TestMethod]
    public async Task ExportSolutionAsync_DownloadsSolutionFile()
    {
        var json = new JsonSolutionPackager
        {
            solution = "MySolution",
            solutiontype = "Managed",
            folder = "src",
            type = "Extract"
        };

        var solutionEntity = new Entity("solution", Guid.NewGuid())
        {
            ["version"] = "1.2.3.4"
        };

        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .Returns(Task.FromResult(new EntityCollection([solutionEntity])));

        var exportResp = new ExportSolutionResponse();
        exportResp.Results["ExportSolutionFile"] = new byte[] { 0x50, 0x4B, 0x05, 0x06 }; // zip header bytes

        A.CallTo(() => _service.ExecuteAsync(A<OrganizationRequest>.Ignored))
            .Returns(Task.FromResult<OrganizationResponse>(exportResp));

        var task = CreateTask(json);
        var exportMethod = typeof(TaskPacSolutionPackager).GetMethod("ExportSolutionAsync", InstancePrivate);
        Assert.IsNotNull(exportMethod);

        var taskRes = (Task<string>)exportMethod.Invoke(task, ["Managed"])!;
        var path = await taskRes;

        Assert.IsTrue(File.Exists(path));
        Assert.IsTrue(path.EndsWith("_managed.zip"));
    }

    [TestMethod]
    public async Task GetSolutionZipFileAsync_HandlesBothAndUnmanaged()
    {
        var json = new JsonSolutionPackager
        {
            solution = "MySolution",
            solutiontype = "Both",
            folder = "src",
            type = "Extract"
        };

        var solutionEntity = new Entity("solution", Guid.NewGuid())
        {
            ["version"] = "2.0.0.1"
        };

        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .Returns(Task.FromResult(new EntityCollection([solutionEntity])));

        var exportResp = new ExportSolutionResponse();
        exportResp.Results["ExportSolutionFile"] = new byte[] { 0x50, 0x4B, 0x03, 0x04 };

        A.CallTo(() => _service.ExecuteAsync(A<OrganizationRequest>.Ignored))
            .Returns(Task.FromResult<OrganizationResponse>(exportResp));

        var task = CreateTask(json);
        var zipMethod = typeof(TaskPacSolutionPackager).GetMethod("GetSolutionZipFileAsync", InstancePrivate);
        Assert.IsNotNull(zipMethod);

        var taskRes = (Task<string>)zipMethod.Invoke(task, null)!;
        var unmanagedZip = await taskRes;

        Assert.IsTrue(File.Exists(unmanagedZip));
        Assert.IsFalse(unmanagedZip.EndsWith("_managed.zip"));
    }

    [TestMethod]
    public async Task RunPacAsync_ExecutesPacCommand()
    {
        var mapFile = Path.Combine(_tempDir, "map.xml");
        File.WriteAllText(mapFile, "<mapping />");

        var json = new JsonSolutionPackager
        {
            solution = "MySolution",
            solutiontype = "Managed",
            folder = "src",
            type = "Extract",
            mapfile = "map.xml"
        };

        var zipFile = Path.Combine(_tempDir, "fake.zip");
        File.WriteAllBytes(zipFile, [0x50, 0x4B, 0x05, 0x06]);

        var task = CreateTask(json);
        var runPacMethod = typeof(TaskPacSolutionPackager).GetMethod("RunPacAsync", InstancePrivate);
        Assert.IsNotNull(runPacMethod);

        // RunPacAsync executes "pac solution unpack ...", which will run pac (or fail gracefully with exit code)
        var t = (Task)runPacMethod.Invoke(task, [zipFile])!;
        await t;
    }
}
