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
/// Wave-2 TaskPacSolutionPackager coverage: the single-type Extract zip
/// resolution (GetSolutionZipFileAsync's else branch), and the Pack flow of
/// IsValidAsync with a real Solution.xml (the closing branches of the
/// Pack/mapfile checks). The full RunAsync Pack flow tolerates both worlds:
/// with the pac CLI present it drives a real local 'pac solution pack' (no
/// org, no network), without it the validation gate stops the run — the
/// test only asserts the task completed its validation ladder.
/// </summary>
[TestClass]
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

    /// <summary>
    /// Builds a minimal VALID pack source folder: Other/Solution.xml (with
    /// the required generatedBy attribute and the Version element the
    /// version reader's regex targets) plus Other/Customizations.xml —
    /// exactly what a real 'pac solution pack' accepts.
    /// </summary>
    private string WritePackSource(string solution)
    {
        var dir = Path.Combine(_tempDir, "src", "Unmanaged", "Other");
        Directory.CreateDirectory(dir);
        File.WriteAllText(Path.Combine(dir, "Solution.xml"), $"""
            <?xml version="1.0" encoding="utf-8"?>
            <ImportExportXml version="9.2" SolutionPackageVersion="9.2" languagecode="1033" generatedBy="CrmLive" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
              <SolutionManifest>
                <UniqueName>{solution.ToLowerInvariant()}</UniqueName>
                <LocalizedNames>
                  <LocalizedName description="{solution}" languagecode="1033" />
                </LocalizedNames>
                <Descriptions />
                <Version>1.2.3.4</Version>
                <Managed>2</Managed>
                <Publisher>
                  <UniqueName>{solution.ToLowerInvariant()}</UniqueName>
                  <LocalizedNames>
                    <LocalizedName description="{solution}" languagecode="1033" />
                  </LocalizedNames>
                  <Descriptions />
                  <EMailAddress xsi:nil="true"></EMailAddress>
                  <SupportingWebsiteUrl xsi:nil="true"></SupportingWebsiteUrl>
                  <CustomizationPrefix>mys</CustomizationPrefix>
                  <CustomizationOptionValuePrefix>99999</CustomizationOptionValuePrefix>
                  <Addresses />
                </Publisher>
                <RootComponents />
                <MissingDependencies />
              </SolutionManifest>
            </ImportExportXml>
            """);
        File.WriteAllText(Path.Combine(dir, "Customizations.xml"), """
            <?xml version="1.0" encoding="utf-8"?>
            <ImportExportXml xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
              <Entities />
              <Roles />
              <Workflows />
              <Reports />
              <MissingDependencies />
            </ImportExportXml>
            """);
        return dir;
    }

    private bool IsPacInstalled(TaskPacSolutionPackager task)
    {
        var method = typeof(TaskPacSolutionPackager).GetMethod("IsPacInstalled", InstancePrivate)!;
        return (bool)method.Invoke(task, null)!;
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

    [TestMethod]
    public async Task IsValidAsync_PackWithRealSolutionXmlAndMapfile_PassesWhenPacIsAvailable()
    {
        WritePackSource("MySolution");
        File.WriteAllText(Path.Combine(_tempDir, "map.xml"), "<mapping />");
        var task = CreateTask(new JsonSolutionPackager
        {
            solution = "MySolution",
            solutiontype = "Unmanaged",
            folder = "src",
            type = "Pack",
            mapfile = "map.xml"
        });

        var valid = await task.IsValidAsync();

        Assert.AreEqual(IsPacInstalled(task), valid,
            "the Pack ladder (Solution.xml present, mapfile present) succeeds exactly when pac is installed.");
    }

    [TestMethod]
    public async Task RunAsync_Pack_CompletesTheValidationAndLadder()
    {
        // Full RunAsync for Pack: with pac present the local 'pac solution
        // pack' runs (no org, no network) against the minimal valid pack
        // source and the versioned zip name is derived from Solution.xml
        // (1.2.3.4 → MySolution_1.2.0003.4.zip); without pac the run stops
        // at the gate. No mapfile — the map directives schema is
        // version-specific and the wave-1 RunPacAsync test covers the --map
        // argument path.
        WritePackSource("MySolution");
        var task = CreateTask(new JsonSolutionPackager
        {
            solution = "MySolution",
            solutiontype = "Unmanaged",
            folder = "src",
            type = "Pack"
        });

        await task.RunAsync();

        var packFolder = Path.Combine(_tempDir, "src", "Solutions-Pack");
        if (IsPacInstalled(task))
        {
            Assert.IsTrue(Directory.Exists(packFolder) && Directory.GetFiles(packFolder, "*.zip").Length > 0,
                "pac packed the solution into the Solutions-Pack folder.");
        }
        else
        {
            Assert.IsFalse(Directory.Exists(packFolder), "without pac the run stops before packing.");
        }
    }

    [TestMethod]
    public async Task RunPacAsync_InvalidMap_ErrorPathWithoutCrashing()
    {
        // A valid pack source plus a malformed map file: pac (when installed)
        // rejects the map ('Incorrect Xml format specified for mapping
        // directives'), exits non-zero and the error path logs; without pac
        // the process start throws and the test documents that environment
        // difference. This also drives the mapfile-exists --map branch.
        WritePackSource("MySolution");
        File.WriteAllText(Path.Combine(_tempDir, "map.xml"), "<not-a-mapping />");
        var task = CreateTask(new JsonSolutionPackager
        {
            solution = "MySolution",
            solutiontype = "Unmanaged",
            folder = "src",
            type = "Pack",
            mapfile = "map.xml"
        });
        var runPac = typeof(TaskPacSolutionPackager).GetMethod("RunPacAsync", InstancePrivate)!;
        var zipFile = Path.Combine(_tempDir, "never.zip");
        try
        {
            await (Task)runPac.Invoke(task, [zipFile])!;
        }
        catch (Exception ex) when (ex is System.ComponentModel.Win32Exception
                                   || ex.InnerException is System.ComponentModel.Win32Exception)
        {
            Assert.IsFalse(IsPacInstalled(task), "a Win32Exception means pac is not on this machine.");
        }
    }

    // NOTE (skipped branches):
    // - IsPacInstalled's catch (and the 'pac not found' guidance block of
    //   IsValidAsync) is only reachable on a machine WITHOUT the pac CLI;
    //   on the coverage machine pac is installed, so the branch depends on
    //   the environment. The RunPacAsync test above covers the catch when
    //   the environment allows it.
    // - RunPacAsync's stderr line loop (352-361) needs pac to write to
    //   stderr; the success message (370-372) runs when the local pack
    //   succeeds — both are exercised by RunAsync_Pack (the valid-source
    //   pack) and RunPacAsync_InvalidMap (the error path).
    // - ExportSolutionAsync's Both-type second export is covered by the
    //   wave-1 Both test.
    // All left uncovered by design.
}
