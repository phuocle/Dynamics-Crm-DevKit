using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates;

/// <summary>
/// Wave-2 gap coverage for the project template handlers, called directly:
/// the null-input guard and the "already exists — existing files are
/// skipped" re-run warning of every project handler (plus the Report
/// handler's .rptproj skip path).
///
/// NOTE (not coverable on Windows): the CreateManifest else-branches that
/// register the .sh deploy/generator scripts (SharedProject ~56-58,
/// ServerProject ~65-68, PackageProject ~60-63, WebResourceProject ~75-77
/// and ~88-91, WebResourceTsProject ~77-80 and ~93-96, ProxyTypesProject
/// ~66-68, SolutionPackagerProject ~66-69, ReportProject ~76-79) run only
/// when the OS is not Windows — the manifest tests run on the build OS.
/// ReportProjectTemplateHandler.WriteReportProjectAsync ~166-168
/// ("resource not found") is unreachable — the .rptproj resource is
/// embedded in the Shared assembly.
/// </summary>
[TestClass]
public sealed class ProjectTemplateHandlerGapWave2CoverageTests
{
    private string _directory = null!;

    [TestInitialize]
    public void Initialize()
    {
        _directory = Path.Combine(Path.GetTempPath(), "devkit-projhandler-gap2-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_directory);

    }

    [TestCleanup]
    public void Cleanup()
    {
        try { Directory.Delete(_directory, true); } catch { }
    }

    private static (ITemplateHandler Handler, string ProjectFile, bool IsReport)[] Handlers() =>
    [
        (new ConsoleProjectTemplateHandler(), "Contoso.Console.csproj", false),
        (new ConsoleCoreProjectTemplateHandler(), "Contoso.ConsoleCore.csproj", false),
        (new SharedProjectTemplateHandler(), "Contoso.Shared.shproj", false),
        (new SharedTestProjectTemplateHandler(), "Contoso.SharedTest.shproj", false),
        (new ServerProjectTemplateHandler(), "Contoso.Server.csproj", false),
        (new PackageProjectTemplateHandler(), "Contoso.Package.csproj", false),
        (new WebResourceProjectTemplateHandler(), "Contoso.WebResource.csproj", false),
        (new WebResourceTsProjectTemplateHandler(), "Contoso.WebResourceTs.csproj", false),
        (new ProxyTypesProjectTemplateHandler(), "Contoso.ProxyTypes.csproj", false),
        (new TestProjectTemplateHandler(), "Contoso.Test.csproj", false),
        (new UiTestProjectTemplateHandler(), "Contoso.UiTest.csproj", false),
        (new SolutionPackagerProjectTemplateHandler(), "Contoso.SolutionPackager.csproj", false),
        (new ReportProjectTemplateHandler(), "Contoso.Report.rptproj", true),
    ];

    private static ProjectTemplateInput Input(string directory, string projectFile, string? solutionFile = null) =>
        new()
        {
            TemplateId = Path.GetFileNameWithoutExtension(projectFile).Split('.').Last(),
            ProjectName = Path.GetFileNameWithoutExtension(projectFile),
            OutputDirectory = directory,
            SolutionFile = solutionFile,
            Offline = true,
        };

    [TestMethod]
    public async Task EveryProjectHandler_RequestWithoutInput_Fails()
    {
        foreach (var (handler, _, _) in Handlers())
        {
            var result = await handler.ScaffoldAsync(new ScaffoldRequest());
            Assert.IsFalse(result.Success, handler.GetType().Name);
            StringAssert.Contains(result.Errors[0], "input: required", handler.GetType().Name);
        }
    }

    [TestMethod]
    public async Task EveryProjectHandler_ExistingProject_WarnsAndSkips()
    {
        foreach (var (handler, projectFile, isReport) in Handlers())
        {
            var directory = Path.Combine(_directory, Path.GetFileNameWithoutExtension(projectFile));
            var projectName = Path.GetFileNameWithoutExtension(projectFile);
            // The handlers check the project file inside the project
            // sub-directory: {out}/{ProjectName}/{ProjectName}.{ext}.
            var projectDirectory = Path.Combine(directory, projectName);
            Directory.CreateDirectory(projectDirectory);
            var projectPath = Path.Combine(projectDirectory, projectFile);
            // Pre-create the project file so the re-run guard fires (and for
            // the Report handler, WriteReportProjectAsync takes the skip path).
            File.WriteAllText(projectPath, isReport ? "<Project />" : "<Project Sdk=\"Microsoft.NET.Sdk\" />");

            // The Server handler skips an existing strong-name key as well.
            var isServer = handler is ServerProjectTemplateHandler;
            if (isServer)
                File.WriteAllText(Path.Combine(projectDirectory, projectName + ".snk"), "not-a-real-key");

            // Server and Test hard-require a workspace carrying the Shared,
            // ProxyTypes and SharedTest projects (the generated .csproj
            // references/imports them).
            var needsSharedWorkspace = handler is ServerProjectTemplateHandler or TestProjectTemplateHandler;
            var request = new ScaffoldRequest
            {
                ProjectInput = Input(directory, projectFile),
                Tokens = new Dictionary<string, string>(),
            };
            if (needsSharedWorkspace)
            {
                request.Workspace = new WorkspaceContext
                {
                    SolutionDirectory = directory,
                    ProjectDirectory = projectDirectory,
                    SharedProjectName = "Contoso.Shared",
                    SharedProjectFile = Path.Combine(directory, "Contoso.Shared", "Contoso.Shared.shproj"),
                    SharedProjectNameSpace = "Contoso.Shared",
                    SharedTestProjectName = "Contoso.SharedTest",
                    SharedTestProjectFile = Path.Combine(directory, "Contoso.SharedTest", "Contoso.SharedTest.shproj"),
                    ProxyTypesProjectName = "Contoso.ProxyTypes",
                    ProxyTypesProjectFile = Path.Combine(directory, "Contoso.ProxyTypes", "Contoso.ProxyTypes.csproj"),
                    RootNamespace = "Contoso.Shared",
                };
            }

            var result = await handler.ScaffoldAsync(request);

            Assert.IsTrue(result.Success, $"{handler.GetType().Name}: {string.Join("; ", result.Errors)}");
            var existsWarning = result.Warnings.FirstOrDefault(w => w.Contains("already exists"));
            Assert.IsNotNull(existsWarning,
                $"{handler.GetType().Name}: no exists warning. Warnings: [{string.Join(" | ", result.Warnings)}]. Files: [{string.Join(" | ", result.Files.Select(f => $"{f.FileName}:{f.Action}"))}]");
            StringAssert.Contains(existsWarning, "existing files are skipped", handler.GetType().Name);

            if (isReport)
            {
                // The pre-created .rptproj is user territory: not rewritten.
                StringAssert.Contains(File.ReadAllText(projectPath), "<Project />", handler.GetType().Name);
                Assert.IsTrue(result.Files.Any(f => f.Action is "Skipped" or "Unchanged"),
                    $"{handler.GetType().Name}: the rptproj status must record the skip.");
            }

            if (isServer)
            {
                Assert.IsTrue(result.Files.Any(f => f.FileName == "Contoso.Server.snk" && f.Action == "Skipped"),
                    $"{handler.GetType().Name}: the existing .snk must be reported as skipped.");
            }
        }
    }
}
