using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates
{
    /// <summary>
    /// P.12 acceptance tests for the Report (SSRS) project template: the
    /// three payload files of CSharpReportProjectTemplate.vstemplate
    /// rendered with the report scripts of the platform (bats on Windows,
    /// the bash twins elsewhere), README.md carrying ReplaceParameters=true
    /// (the only project template payload of the catalog that does), the
    /// handler-side {ProjectName}.rptproj written from the Shared
    /// ReportProjectTemplate.rptproj resource with $DevKitVersion$ stamped
    /// and a UTF-8 BOM (the writer of the VSIX wizard), NO bootstrap csproj
    /// emitted (the .rptproj IS the project — the wizard deletes the
    /// bootstrap once its Reporting Services project factory loaded the
    /// .rptproj, aP ruling P.12 ROUND 2), the solution gaining the
    /// Reporting Services entry the way Visual Studio writes it (the RS
    /// type GUID plus Deploy.0 configuration lines in .sln, the Deploy
    /// child element in .slnx), the idempotency rules for both the payload
    /// and the .rptproj user file, and NO golden build (no C# project is
    /// generated at all — the payload content asserts cover the shape).
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class ReportProjectTemplateHandlerTests
    {
        private static readonly Regex TokenPattern = new Regex(@"\$[A-Za-z][A-Za-z0-9.]*\$", RegexOptions.Compiled);

        private string _directory;
        private string _solutionFile;
        private string _projectDirectory;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-report-handler-tests", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(_directory);
            _solutionFile = Path.Combine(_directory, "Contoso.sln");
            File.WriteAllText(_solutionFile,
                "Microsoft Visual Studio Solution File, Format Version 12.00\r\n" +
                "# Visual Studio Version 17\r\n" +
                "Global\r\n" +
                "\tGlobalSection(SolutionConfigurationPlatforms) = preSolution\r\n" +
                "\t\tDebug|Any CPU = Debug|Any CPU\r\n" +
                "\t\tRelease|Any CPU = Release|Any CPU\r\n" +
                "\tEndGlobalSection\r\n" +
                "\tGlobalSection(ProjectConfigurationPlatforms) = postSolution\r\n" +
                "\tEndGlobalSection\r\n" +
                "EndGlobal\r\n");
            _projectDirectory = Path.Combine(_directory, "Contoso.Report");

            ScaffoldingEngine.ClearHandlers();
            TemplateManifests.Clear();
            TemplateHandlers.RegisterAll();
        }

        [TestCleanup]
        public void Cleanup()
        {
            ScaffoldingEngine.ClearHandlers();
            TemplateManifests.Clear();
            Directory.Delete(_directory, true);
        }

        private ProjectTemplateInput Input(CrmConnection connection = null, bool force = false)
        {
            return new ProjectTemplateInput
            {
                TemplateId = "Report",
                ProjectName = "Contoso.Report",
                OutputDirectory = _directory,
                // The solution to register in is now explicit (--solution):
                // the walk-up auto-pick is gone.
                SolutionFile = _solutionFile,
                CrmConnection = connection,
                Force = force,
                // Deterministic NuGet stamps: the DefaultVersions table,
                // not the live nuget.org query the online path performs.
                Offline = true,
            };
        }

        /// <summary>
        /// A UseProjectEnvironment marker connection; FromPac always carries
        /// a profile (the prompt and the PAC picker never produce one without).
        /// </summary>
        private static CrmConnection Marker(string type)
        {
            var connection = new CrmConnection { Name = type, Type = type, UseProjectEnvironment = true };
            if (type == "FromPac")
            {
                connection.PacProfile = "my-profile";
            }
            return connection;
        }

        [TestMethod]
        public void CreateManifest_MirrorsVstemplateThreeFiles()
        {
            var manifest = ReportProjectTemplateHandler.CreateManifest();

            Assert.AreEqual("Report", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Project, manifest.Kind);

            // The vstemplate declares README.md and the two report scripts
            // of the running platform — no key.snk. The wizard bootstrap
            // ProjectTemplate.csproj is NOT a manifest entry: the CLI never
            // emits it (the .rptproj IS the project — the wizard deletes
            // the bootstrap once its Reporting Services factory loaded).
            // The .rptproj is NOT a manifest entry either: the handler
            // writes it itself, like the wizard's RunFinished.
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                Assert.AreEqual(3, manifest.Files.Count);
                Assert.AreEqual("README.md", manifest.Files[0].TargetFileName);
                Assert.AreEqual("download.reports.bat", manifest.Files[1].TargetFileName);
                Assert.AreEqual("upload.reports.bat", manifest.Files[2].TargetFileName);
            }
            else
            {
                Assert.AreEqual(3, manifest.Files.Count);
                Assert.AreEqual("README.md", manifest.Files[0].TargetFileName);
                Assert.AreEqual("download.reports.sh", manifest.Files[1].TargetFileName);
                Assert.AreEqual("upload.reports.sh", manifest.Files[2].TargetFileName);
            }
            Assert.IsFalse(manifest.Files.Any(file => file.TargetFileName.EndsWith(".csproj", StringComparison.OrdinalIgnoreCase)));

            // ReplaceParameters flags follow the .vstemplate declaration:
            // README.md carries ReplaceParameters=true — the only project
            // template payload of the catalog that does (every other README
            // is a plain copy).
            Assert.IsTrue(manifest.Files.Single(file => file.TargetFileName == "README.md").ReplaceParameters);
            Assert.IsTrue(manifest.Files.All(file => file.ReplaceParameters));
        }

        [TestMethod]
        public async Task ScaffoldAsync_WithoutSolution_CreatesProjectOnly()
        {
            // No --solution = create-only: the project lands under --out,
            // NO solution file is needed.
            var isolated = Path.Combine(Path.GetTempPath(), "devkit-report-nosln", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(isolated);
            try
            {
                var input = new ProjectTemplateInput
                {
                    TemplateId = "Report",
                    ProjectName = "Contoso.Report",
                    OutputDirectory = isolated,
                    Offline = true,
                };
                var result = await ScaffoldingEngine.ScaffoldProjectAsync(input);

                Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
                Assert.IsFalse(Directory.GetFiles(isolated, "*.csproj", SearchOption.AllDirectories).Any());
                Assert.IsTrue(File.Exists(Path.Combine(isolated, "Contoso.Report", "Contoso.Report.rptproj")));
                Assert.IsFalse(Directory.GetFiles(isolated, "*.sln").Any());
                Assert.IsFalse(Directory.GetFiles(isolated, "*.slnx").Any());
                Assert.IsFalse(result.Files.Any(file => file.FileName.EndsWith(".sln", StringComparison.OrdinalIgnoreCase) || file.FileName.EndsWith(".slnx", StringComparison.OrdinalIgnoreCase)));
            }
            finally
            {
                Directory.Delete(isolated, true);
            }
        }

        [TestMethod]
        public async Task ScaffoldAsync_SolutionFileNotFound_FailsBeforeCreatingFiles()
        {
            // --solution names the file to register in; a typo must fail
            // BEFORE any project file is created (the engine validates it
            // while building the workspace, ahead of the handler).
            var input = Input(Marker("ClientSecret"));
            input.SolutionFile = Path.Combine(_directory, "Missing.sln");
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "solution file not found");
            Assert.IsFalse(Directory.Exists(Path.Combine(_directory, "Contoso.Report")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_InvalidProjectName_Fails()
        {
            var input = Input(Marker("ClientSecret"));
            input.ProjectName = "Bad:Name";
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "invalid project name");
            Assert.IsFalse(Directory.Exists(Path.Combine(_directory, "Bad:Name")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_UnknownConnectionType_ThrowsLikeVsix()
        {
            // A completely unknown type never reaches the handler: the
            // engine token pass calls CliArgsBuilder, which throws exactly
            // like the VSIX Replacement pipeline would.
            await Assert.ThrowsExactlyAsync<NotSupportedException>(() => ScaffoldingEngine.ScaffoldProjectAsync(Input(new CrmConnection { Type = "Bogus" })));
        }

        [TestMethod]
        public async Task ScaffoldAsync_UnknownEnvAuthType_Fails()
        {
            // The .env marker path has no CliArgsBuilder pass — the handler
            // validation rejects the unknown type with the supported list.
            File.WriteAllText(Path.Combine(_directory, ".env"), "DEVKIT_AUTH_TYPE=Bogus\r\n");

            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input());
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "not supported for the Report project template");
            StringAssert.Contains(result.Errors[0], "Supported types: Interactive, DeviceCode, ClientSecret, FromPac, OAuth, AD");
        }

        [TestMethod]
        [DataRow("ClientSecret")]
        [DataRow("Interactive")]
        [DataRow("OAuth")]
        [DataRow("DeviceCode")]
        [DataRow("FromPac")]
        [DataRow("AD")]
        public async Task ScaffoldAsync_AcceptsEveryConnectionType(string type)
        {
            // FormProject filters no connection type for Report — every
            // registry type scaffolds.
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker(type)));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            await AssertCommonPayloadAsync();
        }

        [TestMethod]
        public async Task ScaffoldAsync_NullConnection_UsesEnvMarker()
        {
            // Non-interactive hosts pass no connection: the handler derives
            // the .env marker like SolutionMutator.EnsureDevKitJsonAsync.
            File.WriteAllText(Path.Combine(_directory, ".env"),
                "DEVKIT_AUTH_TYPE=Interactive\r\n" +
                "DEVKIT_URL=https://contoso.crm.dynamics.com\r\n");

            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input());
            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            await AssertCommonPayloadAsync();
        }

        [TestMethod]
        public async Task ScaffoldAsync_NoConnection_BakesClientSecretPlaceholders()
        {
            // No connection, no .env: the report scripts carry ClientSecret
            // placeholders (the CLI connection form with empty values) so
            // the file parses once the user fills them in.
            var isolated = Path.Combine(Path.GetTempPath(), "devkit-report-noenv", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(isolated);
            try
            {
                var result = await ScaffoldingEngine.ScaffoldProjectAsync(new ProjectTemplateInput
                {
                    TemplateId = "Report",
                    ProjectName = "Contoso.Report",
                    OutputDirectory = isolated,
                    Offline = true,
                });
                Assert.IsTrue(result.Success, string.Join("; ", result.Errors));

                var download = File.ReadAllText(IsolatedScriptPath(isolated, "download.reports.bat", "download.reports.sh"));
                StringAssert.Contains(download, "devkit downloadreport --auth ClientSecret --url \"\" --clientid \"\" --clientsecret \"\"");
                StringAssert.Contains(download, "--profile \"DEBUG\"");

                var upload = File.ReadAllText(IsolatedScriptPath(isolated, "upload.reports.bat", "upload.reports.sh"));
                StringAssert.Contains(upload, "devkit uploadreport --auth ClientSecret --url \"\" --clientid \"\" --clientsecret \"\"");
                StringAssert.Contains(upload, "--profile \"DEBUG\"");
            }
            finally
            {
                Directory.Delete(isolated, true);
            }
        }

        [TestMethod]
        public async Task ScaffoldAsync_Scripts_EmbedCliConnectionArgs()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(new CrmConnection
            {
                Type = "ClientSecret",
                Url = "https://contoso.crm.dynamics.com",
                ClientId = "00000000-0000-0000-0000-000000000000",
                ClientSecret = "plain-secret",
            }))).Success);

            // The report scripts embed the CLI connection args of the
            // connection (secrets encrypted by Helper.EncryptString — the
            // scripts never carry the plain secret).
            var download = File.ReadAllText(ScriptPath("download.reports.bat", "download.reports.sh"));
            StringAssert.Contains(download, "devkit downloadreport --auth ClientSecret --url \"https://contoso.crm.dynamics.com\" --clientid \"00000000-0000-0000-0000-000000000000\" --clientsecret \"");
            StringAssert.Contains(download, "--json \"DynamicsCrm.DevKit.Cli.json\" --profile \"DEBUG\"");
            Assert.IsFalse(download.Contains("plain-secret"));

            var upload = File.ReadAllText(ScriptPath("upload.reports.bat", "upload.reports.sh"));
            StringAssert.Contains(upload, "devkit uploadreport --auth ClientSecret");
            StringAssert.Contains(upload, "--profile \"DEBUG\"");
            Assert.IsFalse(upload.Contains("plain-secret"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_Scripts_MarkerConnection_OmitArgs()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            // UseProjectEnvironment connections build empty args (the
            // scripts fall back to the project .env) — ApplyCliConnectionArgs
            // also collapses the leading space, so no double space remains.
            var download = File.ReadAllText(ScriptPath("download.reports.bat", "download.reports.sh"));
            StringAssert.Contains(download, "devkit downloadreport --json \"DynamicsCrm.DevKit.Cli.json\" --profile \"DEBUG\"");
            Assert.IsFalse(download.Contains("--auth"));
            Assert.IsFalse(download.Contains("  devkit"));

            var upload = File.ReadAllText(ScriptPath("upload.reports.bat", "upload.reports.sh"));
            StringAssert.Contains(upload, "devkit uploadreport --json \"DynamicsCrm.DevKit.Cli.json\" --profile \"DEBUG\"");
            Assert.IsFalse(upload.Contains("--auth"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_ScriptShResources_CarryTheBashTwins()
        {
            // The macOS/Linux twins of the report scripts: the embedded bash
            // resources exist and carry the same devkit call (TokenEngine
            // stamps them only when present).
            var downloadReportsSh = await TemplatePayload.ReadSharedResourceAsync("sh.download.reports.sh");
            Assert.IsNotNull(downloadReportsSh);
            StringAssert.Contains(downloadReportsSh, "#!/usr/bin/env bash");
            StringAssert.Contains(downloadReportsSh, "devkit downloadreport $CliConnectionArgs$ --json \"DynamicsCrm.DevKit.Cli.json\" --profile \"DEBUG\"");

            var uploadReportsSh = await TemplatePayload.ReadSharedResourceAsync("sh.upload.reports.sh");
            Assert.IsNotNull(uploadReportsSh);
            StringAssert.Contains(uploadReportsSh, "devkit uploadreport $CliConnectionArgs$ --json \"DynamicsCrm.DevKit.Cli.json\" --profile \"DEBUG\"");

            // Lean contract (aP 2026-10-25): shebang + the devkit call only,
            // like every other bash twin.
            Assert.IsFalse(downloadReportsSh.Contains("command -v devkit"));
            Assert.IsFalse(uploadReportsSh.Contains("command -v devkit"));

            // The payload stubs of the bash twins resolve through the
            // project payload naming (deployed on non-Windows hosts).
            var prefix = TemplatePayload.Prefix(TemplateKind.Project, "report");
            var downloadStub = await TemplatePayload.ReadContentAsync(prefix + "download.reports.sh");
            Assert.IsNotNull(downloadStub);
            Assert.AreEqual("$download.reports.sh$", downloadStub.Content.Trim());
            var uploadStub = await TemplatePayload.ReadContentAsync(prefix + "upload.reports.sh");
            Assert.AreEqual("$upload.reports.sh$", uploadStub.Content.Trim());
        }

        [TestMethod]
        public async Task ScaffoldAsync_WritesReportProjectWithBomAndVersion()
        {
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")));
            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));

            // The handler-side .rptproj of the VSIX RunFinished: the Shared
            // resource with $DevKitVersion$ stamped, nothing else changed,
            // written with a UTF-8 BOM (ForceWriteAllTextAsync — the writer
            // the wizard uses; the resource itself is BOM-less).
            var reportFile = Path.Combine(_projectDirectory, "Contoso.Report.rptproj");
            Assert.IsTrue(File.Exists(reportFile));

            var resource = await TemplatePayload.ReadSharedResourceAsync("ReportProjectTemplate.rptproj");
            var expected = resource.Replace("$DevKitVersion$", Const.VersionBuild);
            Assert.AreEqual(expected, File.ReadAllText(reportFile));
            Assert.IsFalse(File.ReadAllText(reportFile).Contains("$DevKitVersion$"));
            StringAssert.Contains(File.ReadAllText(reportFile), Const.VersionBuild);
            Assert.IsTrue(HasBom(reportFile));

            // The scaffold reports the .rptproj like any payload file.
            Assert.AreEqual("Created", result.Files.Single(file => file.FilePath == reportFile).Action);
        }

        [TestMethod]
        public async Task ScaffoldAsync_ReportProject_RerunFails_ForcedRegenerates()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            // The .rptproj is user territory (reports, datasets and data
            // sources are registered there). Run-once (aP): a rerun over an
            // existing project is an error; the engine-level Force is the
            // only regeneration path.
            var reportFile = Path.Combine(_projectDirectory, "Contoso.Report.rptproj");
            File.WriteAllText(reportFile, "<Project ToolsVersion=\"Current\" user-edited />");

            var second = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")));
            Assert.IsFalse(second.Success);
            StringAssert.Contains(second.Errors.Single(), "already exists");
            Assert.AreEqual("<Project ToolsVersion=\"Current\" user-edited />", File.ReadAllText(reportFile));

            var forced = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret"), force: true));
            Assert.IsTrue(forced.Success);
            Assert.AreEqual("Updated", forced.Files.Single(file => file.FilePath == reportFile).Action);
            Assert.IsTrue(File.ReadAllText(reportFile).Contains(Const.VersionBuild));
        }

        [TestMethod]
        public async Task ScaffoldAsync_DoesNotEmitBootstrapCsproj()
        {
            // The .rptproj IS the project (aP ruling P.12 ROUND 2): the
            // vstemplate's ProjectTemplate.csproj is a wizard bootstrap only
            // — Visual Studio removes it once its Reporting Services project
            // factory loaded the .rptproj — so the CLI emits none either and
            // the scaffolded folder holds no C# project at all.
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            Assert.IsFalse(Directory.GetFiles(_projectDirectory, "*.csproj", SearchOption.AllDirectories).Any());
            Assert.IsFalse(Directory.GetFiles(_projectDirectory, "*.snk", SearchOption.AllDirectories).Any());
        }

        [TestMethod]
        public async Task ScaffoldAsync_ReadmeIsTokenReplacedNotVerbatim()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            // README.md carries ReplaceParameters=true in this vstemplate —
            // the CLI renders it through the token engine (unlike every
            // other project template's plain copy). The payload has no
            // tokens today, so the render equals the payload; the contract
            // is "tokens applied", asserted via the version stamp and the
            // absence of leftovers rather than a byte-equality with the
            // raw payload.
            var readme = File.ReadAllText(Path.Combine(_projectDirectory, "README.md"));
            var prefix = TemplatePayload.Prefix(TemplateKind.Project, "report");
            var readmePayload = await TemplatePayload.ReadContentAsync(prefix + "README.md");
            Assert.AreEqual(readmePayload.Content, readme);
            StringAssert.Contains(readme, "# DynamicsCrm.DevKit Report Project");
            StringAssert.Contains(readme, "4.44.44.44");
            Assert.IsFalse(TokenPattern.Match(readme).Success);
        }

        [TestMethod]
        public async Task ScaffoldAsync_RegistersReportingServicesSolutionEntry()
        {
            // The .rptproj IS the project: the .sln gains the Reporting
            // Services entry Visual Studio writes — the RS project factory
            // type GUID, the .rptproj path and the Debug/Release platform
            // configuration entries with their Deploy.0 lines. Even with a
            // Shared project in the workspace there is no
            // SharedMSBuildProjectFiles consumer line (nothing imports
            // .projitems).
            await ScaffoldSharedAsync();
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var solution = File.ReadAllText(_solutionFile);
            StringAssert.Contains(solution, $"Project(\"{SolutionMutator.ReportProjectTypeGuid}\") = \"Contoso.Report\", \"Contoso.Report\\Contoso.Report.rptproj\"");
            StringAssert.Contains(solution, ".ActiveCfg = Debug");
            StringAssert.Contains(solution, ".Deploy.0 = Debug");
            StringAssert.Contains(solution, ".Deploy.0 = Release");
            StringAssert.Contains(solution, "Contoso.Shared\\Contoso.Shared.shproj");
            Assert.IsFalse(solution.Contains("SharedItemsImports = 5"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_Slnx_WritesReportProjectEntryWithDeploy()
        {
            var slnx = Path.Combine(_directory, "Contoso.slnx");
            File.WriteAllText(slnx, "<Solution>\n</Solution>\n");
            File.Delete(_solutionFile);
            // --solution anchors at the named file: retarget the helper's
            // solution to the slnx that replaces the deleted .sln.
            _solutionFile = slnx;

            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            // The slnx counterpart of the .sln Deploy.0 lines: the empty
            // Deploy child element under the .rptproj entry (no Id — the
            // .rptproj stores no project GUID of its own), exactly what
            // Visual Studio wrote in TestAllInOne2.
            var content = File.ReadAllText(slnx);
            StringAssert.Contains(content, "<Project Path=\"Contoso.Report/Contoso.Report.rptproj\">");
            StringAssert.Contains(content, "<Deploy />");
            Assert.IsFalse(content.Contains("Contoso.Report.csproj"));
            // The .slnx format has no SharedMSBuildProjectFiles section.
            Assert.IsFalse(content.Contains("SharedItemsImports"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_PreservesPayloadBomState()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            // Every payload file is BOM-less — the rendered files keep that
            // state; ONLY the handler-written .rptproj carries the BOM the
            // wizard's writer produces.
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "README.md")));
            Assert.IsFalse(HasBom(ScriptPath("download.reports.bat", "download.reports.sh")));
            Assert.IsFalse(HasBom(ScriptPath("upload.reports.bat", "upload.reports.sh")));
            Assert.IsTrue(HasBom(Path.Combine(_projectDirectory, "Contoso.Report.rptproj")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_RerunSkipsExistingFiles()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var userFile = Path.Combine(_projectDirectory, "README.md");
            File.WriteAllText(userFile, "customized by user");

            var second = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")));

            // Run-once (aP): the second scaffold over an existing project
            // fails - the CLI has no --force and nothing is touched.
            Assert.IsFalse(second.Success);
            StringAssert.Contains(second.Errors.Single(), "already exists");
            Assert.AreEqual("customized by user", File.ReadAllText(userFile));
        }

        [TestMethod]
        public async Task ScaffoldAsync_ForceOverwritesFiles()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var userFile = Path.Combine(_projectDirectory, "README.md");
            File.WriteAllText(userFile, "customized by user");

            var forced = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret"), force: true));

            Assert.IsTrue(forced.Success);
            Assert.AreEqual("Updated", forced.Files.Single(file => file.FilePath == userFile).Action);
            Assert.AreNotEqual("customized by user", File.ReadAllText(userFile));
        }

        /// <summary>
        /// The script path of the running platform (bat on Windows, the
        /// bash twin elsewhere).
        /// </summary>
        private string ScriptPath(string windowsPath, string unixPath)
        {
            return Path.Combine(_projectDirectory, RuntimeInformation.IsOSPlatform(OSPlatform.Windows) ? windowsPath : unixPath);
        }

        /// <summary>
        /// The script path of the running platform under an isolated output
        /// directory (the NoConnection tests scaffold outside _directory).
        /// </summary>
        private static string IsolatedScriptPath(string isolated, string windowsPath, string unixPath)
        {
            return Path.Combine(isolated, "Contoso.Report", RuntimeInformation.IsOSPlatform(OSPlatform.Windows) ? windowsPath : unixPath);
        }

        /// <summary>
        /// The realistic workspace sequence: Shared first, then Report on
        /// top (only to prove the .sln entry stays plain).
        /// </summary>
        private async Task ScaffoldSharedAsync()
        {
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(new ProjectTemplateInput
            {
                TemplateId = "Shared",
                ProjectName = "Contoso.Shared",
                OutputDirectory = _directory,
                SolutionFile = _solutionFile,
                Offline = true,
            });
            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
        }

        /// <summary>
        /// Assertions shared by every successful scaffold: the payload files
        /// plus the .rptproj exist, NO csproj is generated, tokens are fully
        /// applied and no $token$ survives anywhere.
        /// </summary>
        private async Task AssertCommonPayloadAsync()
        {
            var isWindows = RuntimeInformation.IsOSPlatform(OSPlatform.Windows);
            var download = isWindows ? "download.reports.bat" : "download.reports.sh";
            var upload = isWindows ? "upload.reports.bat" : "upload.reports.sh";
            var expectedFiles = new[]
            {
                Path.Combine(_projectDirectory, "Contoso.Report.rptproj"),
                Path.Combine(_projectDirectory, "README.md"),
                Path.Combine(_projectDirectory, download),
                Path.Combine(_projectDirectory, upload),
            };
            foreach (var file in expectedFiles)
            {
                Assert.IsTrue(File.Exists(file), $"missing {file}");
            }
            Assert.IsFalse(Directory.GetFiles(_projectDirectory, "*.csproj", SearchOption.AllDirectories).Any());

            foreach (var file in Directory.GetFiles(_projectDirectory, "*", SearchOption.AllDirectories))
            {
                var leftover = TokenPattern.Match(File.ReadAllText(file));
                Assert.IsFalse(leftover.Success, $"{file} still contains {leftover.Value}");
            }
        }

        private static bool HasBom(string file)
        {
            using (var stream = File.OpenRead(file))
            {
                var head = new byte[3];
                var read = 0;
                while (read < head.Length)
                {
                    var count = stream.Read(head, read, head.Length - read);
                    if (count <= 0) break;
                    read += count;
                }
                return head[0] == 0xEF && head[1] == 0xBB && head[2] == 0xBF;
            }
        }
    }
}
