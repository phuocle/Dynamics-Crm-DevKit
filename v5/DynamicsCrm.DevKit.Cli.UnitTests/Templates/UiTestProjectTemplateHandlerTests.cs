using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates
{
    /// <summary>
    /// P.10 acceptance tests for the UiTest project template: the six
    /// payload files of CSharpTestUiProjectTemplate.vstemplate (csproj,
    /// README verbatim, TestSettings, the runsettings retargeted to
    /// $SafeProjectName$.runsettings, App.cs, App.config), the OAuth-only
    /// connection rule of FormProject (every other registry type rejected
    /// with the EasyRepro message), the connection values baked into
    /// App.config, no strong-name key, no Shared requirement (the csproj
    /// imports no .projitems), no empty folders, the solution opt-in
    /// (create-only without --solution, plain csproj entry with it — no
    /// SharedMSBuildProjectFiles consumer line), the idempotency rules and
    /// the golden proof: the generated net462 project builds with plain
    /// 'dotnet build' (Selenium/UIAutomation/MSTest resolve from the NuGet
    /// cache).
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class UiTestProjectTemplateHandlerTests
    {
        private static readonly Regex TokenPattern = new Regex(@"\$[A-Za-z][A-Za-z0-9.]*\$", RegexOptions.Compiled);

        private string _directory;
        private string _solutionFile;
        private string _projectDirectory;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-uitest-handler-tests", Guid.NewGuid().ToString("N"));
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
            _projectDirectory = Path.Combine(_directory, "Contoso.UiTest");

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
                TemplateId = "UiTest",
                ProjectName = "Contoso.UiTest",
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
        /// A UseProjectEnvironment marker connection — the OAuth-only rule
        /// leaves this template no other marker type.
        /// </summary>
        private static CrmConnection Marker()
        {
            return new CrmConnection { Name = "OAuth", Type = "OAuth", UseProjectEnvironment = true };
        }

        [TestMethod]
        public void CreateManifest_MirrorsVstemplateSixFiles()
        {
            var manifest = UiTestProjectTemplateHandler.CreateManifest();

            Assert.AreEqual("UiTest", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Project, manifest.Kind);

            // The vstemplate declares the csproj, README.md, TestSettings.cs,
            // the runsettings (retargeted to $SafeProjectName$.runsettings),
            // App.cs and App.config — no folders, no key.snk.
            Assert.AreEqual(6, manifest.Files.Count);
            Assert.AreEqual("$SafeProjectName$.csproj", manifest.Files[0].TargetFileName);
            Assert.AreEqual("README.md", manifest.Files[1].TargetFileName);
            Assert.AreEqual("TestSettings.cs", manifest.Files[2].TargetFileName);
            Assert.AreEqual("$SafeProjectName$.runsettings", manifest.Files[3].TargetFileName);
            Assert.AreEqual("App.cs", manifest.Files[4].TargetFileName);
            Assert.AreEqual("App.config", manifest.Files[5].TargetFileName);

            // ReplaceParameters flags follow the .vstemplate declaration.
            Assert.IsFalse(manifest.Files.Single(file => file.TargetFileName == "README.md").ReplaceParameters);
            Assert.IsTrue(manifest.Files.Where(file => file.TargetFileName != "README.md").All(file => file.ReplaceParameters));
        }

        [TestMethod]
        public async Task ScaffoldAsync_WithoutSolution_CreatesProjectOnly()
        {
            // No --solution = create-only: the project lands under --out,
            // NO solution file is needed — the wizard checks nothing else
            // (the csproj imports no Shared .projitems).
            var isolated = Path.Combine(Path.GetTempPath(), "devkit-uitest-nosln", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(isolated);
            try
            {
                var input = new ProjectTemplateInput
                {
                    TemplateId = "UiTest",
                    ProjectName = "Contoso.UiTest",
                    OutputDirectory = isolated,
                    Offline = true,
                };
                var result = await ScaffoldingEngine.ScaffoldProjectAsync(input);

                Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
                Assert.IsTrue(File.Exists(Path.Combine(isolated, "Contoso.UiTest", "Contoso.UiTest.csproj")));
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
            var input = Input(Marker());
            input.SolutionFile = Path.Combine(_directory, "Missing.sln");
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "solution file not found");
            Assert.IsFalse(Directory.Exists(Path.Combine(_directory, "Contoso.UiTest")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_InvalidProjectName_Fails()
        {
            var input = Input(Marker());
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
            // validation rejects the unknown type with the OAuth-only rule.
            File.WriteAllText(Path.Combine(_directory, ".env"), "DEVKIT_AUTH_TYPE=Bogus\r\n");

            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input());
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "not supported for the UI Test project template");
            StringAssert.Contains(result.Errors[0], "Supported types: OAuth");
        }

        [TestMethod]
        public async Task ScaffoldAsync_EnvMarkerClientSecret_Fails()
        {
            // The aP-chốt rule under test (P.1..P.13 review P3): the
            // non-interactive .env marker is validated like any explicit
            // connection — a ClientSecret marker from the project .env is
            // rejected by the OAuth-only rule, not silently accepted.
            File.WriteAllText(Path.Combine(_directory, ".env"), "DEVKIT_AUTH_TYPE=ClientSecret\r\n");

            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input());
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "The connection type 'ClientSecret' is not supported for the UI Test project template");
            StringAssert.Contains(result.Errors[0], "Supported types: OAuth");
            Assert.IsFalse(Directory.Exists(_projectDirectory));
        }

        [TestMethod]
        [DataRow("ClientSecret")]
        [DataRow("Interactive")]
        [DataRow("DeviceCode")]
        [DataRow("FromPac")]
        [DataRow("AD")]
        public async Task ScaffoldAsync_RejectsNonOAuthConnections(string type)
        {
            // FormProject rejects every non-OAuth connection for the UI
            // Test template: EasyRepro logs in through the browser with
            // OAuth username/password credentials.
            var connection = Marker();
            connection.Type = type;
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(connection));

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], $"The connection type '{type}' is not supported for the UI Test project template");
            StringAssert.Contains(result.Errors[0], "requires OAuth username/password credentials");
            StringAssert.Contains(result.Errors[0], "Please select an OAuth connection");
            Assert.IsFalse(Directory.Exists(_projectDirectory));
        }

        [TestMethod]
        public async Task ScaffoldAsync_AcceptsOAuth()
        {
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker()));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            await AssertCommonPayloadAsync();
        }

        [TestMethod]
        public async Task ScaffoldAsync_NullConnection_UsesEnvMarker()
        {
            // Non-interactive hosts pass no connection: the handler derives
            // the .env marker like SolutionMutator.EnsureDevKitJsonAsync.
            // The marker carries no values (they live in the project .env —
            // App.cs reads DEVKIT_URL/USERNAME/PASSWORD at runtime), so the
            // App.config placeholders render empty, like the VSIX renders
            // them for a UseProjectEnvironment connection.
            File.WriteAllText(Path.Combine(_directory, ".env"),
                "DEVKIT_AUTH_TYPE=OAuth\r\n" +
                "DEVKIT_URL=https://contoso.crm.dynamics.com\r\n");

            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input());
            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));

            var appConfig = File.ReadAllText(Path.Combine(_projectDirectory, "App.config"));
            StringAssert.Contains(appConfig, "<add key=\"Url\" value=\"\" />");
            StringAssert.Contains(appConfig, "<add key=\"UserName\" value=\"\" />");
            StringAssert.Contains(appConfig, "<add key=\"Password\" value=\"\" />");
            await AssertCommonPayloadAsync();
        }

        [TestMethod]
        public async Task ScaffoldAsync_NoConnection_RendersEmptyOAuthPlaceholders()
        {
            // No connection, no .env: the empty OAuth placeholders render
            // (the VSIX renders the same empty values when the user skips
            // the connection) — the user fills App.config or the project
            // .env in later (App.cs reads DEVKIT_URL/USERNAME/PASSWORD).
            var isolated = Path.Combine(Path.GetTempPath(), "devkit-uitest-noenv", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(isolated);
            try
            {
                var result = await ScaffoldingEngine.ScaffoldProjectAsync(new ProjectTemplateInput
                {
                    TemplateId = "UiTest",
                    ProjectName = "Contoso.UiTest",
                    OutputDirectory = isolated,
                    Offline = true,
                });
                Assert.IsTrue(result.Success, string.Join("; ", result.Errors));

                var appConfig = File.ReadAllText(Path.Combine(isolated, "Contoso.UiTest", "App.config"));
                StringAssert.Contains(appConfig, "<add key=\"Url\" value=\"\" />");
                StringAssert.Contains(appConfig, "<add key=\"UserName\" value=\"\" />");
                StringAssert.Contains(appConfig, "<add key=\"Password\" value=\"\" />");
            }
            finally
            {
                Directory.Delete(isolated, true);
            }
        }

        [TestMethod]
        public async Task ScaffoldAsync_AppConfig_CarriesConnectionValues()
        {
            // The OAuth username/password land in App.config for EasyRepro
            // (the password decrypted — the connection stores it encrypted,
            // App.config reads it plain like the VSIX Replacement writes it).
            var connection = new CrmConnection
            {
                Type = "OAuth",
                Url = "https://contoso.crm.dynamics.com",
                UserName = "admin@contoso.com",
                Password = Helper.EncryptString("ui-test-secret"),
            };
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(connection))).Success);

            var appConfig = File.ReadAllText(Path.Combine(_projectDirectory, "App.config"));
            StringAssert.Contains(appConfig, "<add key=\"Url\" value=\"https://contoso.crm.dynamics.com\" />");
            StringAssert.Contains(appConfig, "<add key=\"UserName\" value=\"admin@contoso.com\" />");
            StringAssert.Contains(appConfig, "<add key=\"Password\" value=\"ui-test-secret\" />");
        }

        [TestMethod]
        public async Task ScaffoldAsync_GeneratesNoSnk()
        {
            // VSIX parity: the UiTest wizard calls no SigningHelper and the
            // vstemplate copies no key.snk — the CLI generates none either,
            // and the csproj carries no SignAssembly.
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker()));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.IsFalse(Directory.GetFiles(_projectDirectory, "*.snk", SearchOption.AllDirectories).Any());
            Assert.IsFalse(result.Files.Any(file => file.FilePath.EndsWith(".snk", StringComparison.OrdinalIgnoreCase)));
            var csproj = File.ReadAllText(Path.Combine(_projectDirectory, "Contoso.UiTest.csproj"));
            Assert.IsFalse(csproj.Contains("<SignAssembly>"));
            Assert.IsFalse(csproj.Contains("<AssemblyOriginatorKeyFile>"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_RegistersPlainSolutionEntry()
        {
            // The UiTest csproj imports no Shared .projitems — even with a
            // Shared project in the workspace the .sln gains ONLY the csproj
            // entry (no SharedMSBuildProjectFiles consumer line).
            await ScaffoldSharedAsync();
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker()))).Success);

            var solution = File.ReadAllText(_solutionFile);
            StringAssert.Contains(solution, $"\"Contoso.UiTest\", \"Contoso.UiTest\\Contoso.UiTest.csproj\"");
            StringAssert.Contains(solution, "Contoso.Shared\\Contoso.Shared.shproj");
            Assert.IsFalse(solution.Contains("SharedItemsImports = 5"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_SolutionEntryWithoutShared()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker()))).Success);

            var solution = File.ReadAllText(_solutionFile);
            StringAssert.Contains(solution, $"\"Contoso.UiTest\", \"Contoso.UiTest\\Contoso.UiTest.csproj\"");
            Assert.IsFalse(solution.Contains("SharedItemsImports"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_Slnx_WritesPlainProjectEntry()
        {
            var slnx = Path.Combine(_directory, "Contoso.slnx");
            File.WriteAllText(slnx, "<Solution>\n</Solution>\n");
            File.Delete(_solutionFile);
            // --solution anchors at the named file: retarget the helper's
            // solution to the slnx that replaces the deleted .sln.
            _solutionFile = slnx;

            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker()))).Success);

            var content = File.ReadAllText(slnx);
            StringAssert.Contains(content, "<Project Path=\"Contoso.UiTest/Contoso.UiTest.csproj\" />");
            // The .slnx format has no SharedMSBuildProjectFiles section.
            Assert.IsFalse(content.Contains("SharedItemsImports"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_PreservesPayloadBomState()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker()))).Success);

            // Every payload file of this template is BOM-less — the
            // rendered files keep it that way.
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "Contoso.UiTest.csproj")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "README.md")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "TestSettings.cs")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "Contoso.UiTest.runsettings")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "App.cs")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "App.config")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_RerunSkipsExistingFiles()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker()))).Success);

            var userFile = Path.Combine(_projectDirectory, "README.md");
            File.WriteAllText(userFile, "customized by user");

            var second = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker()));

            // Run-once (aP): the second scaffold over an existing project
            // fails - the CLI has no --force and nothing is touched.
            Assert.IsFalse(second.Success);
            StringAssert.Contains(second.Errors.Single(), "already exists");
            Assert.AreEqual("customized by user", File.ReadAllText(userFile));
        }

        [TestMethod]
        public async Task ScaffoldAsync_ForceOverwritesFiles()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker()))).Success);

            var userFile = Path.Combine(_projectDirectory, "README.md");
            File.WriteAllText(userFile, "customized by user");

            var forced = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker(), force: true));

            Assert.IsTrue(forced.Success);
            Assert.AreEqual("Updated", forced.Files.Single(file => file.FilePath == userFile).Action);
            Assert.AreNotEqual("customized by user", File.ReadAllText(userFile));
        }

        [TestMethod]
        public async Task ScaffoldAsync_GeneratedProject_BuildsNet462()
        {
            // The golden proof of P.10: the generated net462 EasyRepro
            // project compiles with plain 'dotnet build' — the pinned
            // Selenium/UIAutomation/MSTest versions resolve from the NuGet
            // cache (no network).
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker()))).Success);

            var (exitCode, output) = DotnetBuild(Path.Combine(_projectDirectory, "Contoso.UiTest.csproj"));
            Assert.AreEqual(0, exitCode, output);
        }

        /// <summary>
        /// The realistic workspace sequence: Shared first, then UiTest on
        /// top (only to prove the UiTest .sln entry stays plain).
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
        /// exist (and no .snk is generated), tokens are fully applied, the
        /// csproj is net462 with IsTestProject, without signing, without a
        /// Shared import, with the offline DefaultVersions stamps plus the
        /// hardcoded Selenium/UIAutomation/MSTest set, and no $token$
        /// survives anywhere.
        /// </summary>
        private async Task AssertCommonPayloadAsync()
        {
            var expectedFiles = new[]
            {
                Path.Combine(_projectDirectory, "Contoso.UiTest.csproj"),
                Path.Combine(_projectDirectory, "README.md"),
                Path.Combine(_projectDirectory, "TestSettings.cs"),
                Path.Combine(_projectDirectory, "Contoso.UiTest.runsettings"),
                Path.Combine(_projectDirectory, "App.cs"),
                Path.Combine(_projectDirectory, "App.config"),
            };
            foreach (var file in expectedFiles)
            {
                Assert.IsTrue(File.Exists(file), $"missing {file}");
            }

            // README.md is copied verbatim (ReplaceParameters=false in the
            // .vstemplate).
            var prefix = TemplatePayload.Prefix(TemplateKind.Project, "uitest");
            var readmePayload = await TemplatePayload.ReadContentAsync(prefix + "README.md");
            Assert.AreEqual(readmePayload.Content, File.ReadAllText(Path.Combine(_projectDirectory, "README.md")));

            var csproj = File.ReadAllText(Path.Combine(_projectDirectory, "Contoso.UiTest.csproj"));
            StringAssert.Contains(csproj, "<TargetFramework>net462</TargetFramework>");
            StringAssert.Contains(csproj, "<IsTestProject>true</IsTestProject>");
            StringAssert.Contains(csproj, "<RootNamespace>Contoso.UiTest</RootNamespace>");
            StringAssert.Contains(csproj, "<AssemblyName>Contoso.UiTest</AssemblyName>");
            StringAssert.Contains(csproj, $"<Copyright>Copyright © {DateTime.Now.Year}</Copyright>");
            // The Release output feeds the UI test drop folder.
            StringAssert.Contains(csproj, "<OutputPath>..\\Release\\uitest\\</OutputPath>");
            // No strong-name key and no Shared import in this template.
            Assert.IsFalse(csproj.Contains("<SignAssembly>"));
            Assert.IsFalse(csproj.Contains(".projitems"));
            // The token packages resolve offline through the
            // DefaultVersions fallback of NuGetHelper; the EasyRepro
            // toolchain versions are hardcoded in the payload (VSIX parity,
            // bumped to aP's NuGet-latest set 2026-10-26).
            StringAssert.Contains(csproj, "Include=\"DynamicsCrm.DevKit.Analyzers\" Version=\"4.44.44.44\"");
            StringAssert.Contains(csproj, "Include=\"Microsoft.PowerPlatform.Dataverse.Client\" Version=\"1.2.27\"");
            StringAssert.Contains(csproj, "Include=\"Dynamics365.UIAutomation.Api\" Version=\"9.2.21084.148\"");
            StringAssert.Contains(csproj, "Include=\"MSTest.TestAdapter\" Version=\"4.5.1\"");
            StringAssert.Contains(csproj, "Include=\"MSTest.TestFramework\" Version=\"4.5.1\"");
            StringAssert.Contains(csproj, "Include=\"Selenium.WebDriver\" Version=\"4.51.0\"");
            StringAssert.Contains(csproj, "Include=\"Selenium.Support\" Version=\"4.51.0\"");
            StringAssert.Contains(csproj, "Include=\"Selenium.WebDriver.ChromeDriver\" Version=\"156.0.8078.4700\"");
            StringAssert.Contains(csproj, $"Generated by DynamicsCrm.DevKit - {Const.VersionBuild}");
            StringAssert.Contains(csproj, "<None Include=\"Contoso.UiTest.runsettings\" />");

            // App.cs and TestSettings.cs carry the project namespace; App.cs
            // builds the OAuth connection string EasyRepro logs in with.
            var appCs = File.ReadAllText(Path.Combine(_projectDirectory, "App.cs"));
            StringAssert.Contains(appCs, "namespace Contoso.UiTest");
            StringAssert.Contains(appCs, "AuthType=OAuth");
            var testSettings = File.ReadAllText(Path.Combine(_projectDirectory, "TestSettings.cs"));
            StringAssert.Contains(testSettings, "namespace Contoso.UiTest");

            // The runsettings keeps the net462 target of the run configuration.
            var runsettings = File.ReadAllText(Path.Combine(_projectDirectory, "Contoso.UiTest.runsettings"));
            StringAssert.Contains(runsettings, "<TargetFrameworkVersion>.NETFramework,Version=v4.6.2</TargetFrameworkVersion>");

            foreach (var file in Directory.GetFiles(_projectDirectory, "*", SearchOption.AllDirectories))
            {
                var leftover = TokenPattern.Match(File.ReadAllText(file));
                Assert.IsFalse(leftover.Success, $"{file} still contains {leftover.Value}");
            }
        }

        /// <summary>
        /// Runs 'dotnet build' on a scaffolded project, draining both output
        /// pipes before WaitForExit (a full pipe deadlocks the child).
        /// </summary>
        private static (int ExitCode, string Output) DotnetBuild(string projectPath)
        {
            var startInfo = new ProcessStartInfo
            {
                FileName = "dotnet",
                Arguments = $"build \"{projectPath}\" --nologo --verbosity quiet",
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                UseShellExecute = false,
                CreateNoWindow = true,
            };
            using (var process = Process.Start(startInfo))
            {
                var output = process.StandardOutput.ReadToEnd() + process.StandardError.ReadToEnd();
                process.WaitForExit();
                return (process.ExitCode, output);
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
