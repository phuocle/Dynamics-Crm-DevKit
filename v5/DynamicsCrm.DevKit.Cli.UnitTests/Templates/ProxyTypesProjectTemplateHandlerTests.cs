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
using System.Runtime.InteropServices;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates
{
    /// <summary>
    /// P.8 acceptance tests for the ProxyTypes project template: the payload
    /// files of CSharpProxyTypesProjectTemplate.vstemplate rendered with the
    /// modelbuilder runner script of the platform (run.bat on Windows, the
    /// bash twin run.sh elsewhere), the placeholder sources
    /// GeneratedCode.cs / ProxyTypesAssembly.cs, no strong-name key, no
    /// Shared requirement (the csproj imports no .projitems), the solution
    /// opt-in (create-only without --solution, plain csproj entry with it —
    /// no SharedMSBuildProjectFiles consumer line), the idempotency rules,
    /// the post-scaffold modelbuilder hint and the golden proof: the
    /// generated net462 project builds with plain 'dotnet build'.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class ProxyTypesProjectTemplateHandlerTests
    {
        private static readonly Regex TokenPattern = new Regex(@"\$[A-Za-z][A-Za-z0-9.]*\$", RegexOptions.Compiled);

        private string _directory;
        private string _solutionFile;
        private string _projectDirectory;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-proxytypes-handler-tests", Guid.NewGuid().ToString("N"));
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
            _projectDirectory = Path.Combine(_directory, "Contoso.ProxyTypes");

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
                TemplateId = "ProxyTypes",
                ProjectName = "Contoso.ProxyTypes",
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
        public void CreateManifest_MirrorsVstemplateFiveFiles()
        {
            var manifest = ProxyTypesProjectTemplateHandler.CreateManifest();

            Assert.AreEqual("ProxyTypes", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Project, manifest.Kind);

            // The vstemplate declares the csproj, README.md, the modelbuilder
            // runner script of the running platform and the two placeholder
            // sources — no key.snk.
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                Assert.AreEqual(5, manifest.Files.Count);
                Assert.AreEqual("$SafeProjectName$.csproj", manifest.Files[0].TargetFileName);
                Assert.AreEqual("README.md", manifest.Files[1].TargetFileName);
                Assert.AreEqual("run.bat", manifest.Files[2].TargetFileName);
            }
            else
            {
                Assert.AreEqual(5, manifest.Files.Count);
                Assert.AreEqual("$SafeProjectName$.csproj", manifest.Files[0].TargetFileName);
                Assert.AreEqual("README.md", manifest.Files[1].TargetFileName);
                Assert.AreEqual("run.sh", manifest.Files[2].TargetFileName);
            }
            Assert.AreEqual("GeneratedCode.cs", manifest.Files[3].TargetFileName);
            Assert.AreEqual("ProxyTypesAssembly.cs", manifest.Files[4].TargetFileName);

            // ReplaceParameters flags follow the .vstemplate declaration.
            Assert.IsFalse(manifest.Files.Single(file => file.TargetFileName == "README.md").ReplaceParameters);
            Assert.IsTrue(manifest.Files.All(file => file.ReplaceParameters || file.TargetFileName == "README.md"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_WithoutSolution_CreatesProjectOnly()
        {
            // No --solution = create-only: the project lands under --out,
            // NO solution file is needed — the wizard checks nothing else
            // (the csproj imports no Shared .projitems).
            var isolated = Path.Combine(Path.GetTempPath(), "devkit-proxytypes-nosln", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(isolated);
            try
            {
                var input = new ProjectTemplateInput
                {
                    TemplateId = "ProxyTypes",
                    ProjectName = "Contoso.ProxyTypes",
                    OutputDirectory = isolated,
                    Offline = true,
                };
                var result = await ScaffoldingEngine.ScaffoldProjectAsync(input);

                Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
                Assert.IsTrue(File.Exists(Path.Combine(isolated, "Contoso.ProxyTypes", "Contoso.ProxyTypes.csproj")));
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
            Assert.IsFalse(Directory.Exists(Path.Combine(_directory, "Contoso.ProxyTypes")));
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
            // engine token pass calls CliArgsBuilder.Build, which throws
            // exactly like the VSIX Replacement pipeline would.
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
            // FormProject filters no connection type for ProxyTypes —
            // unlike Console (no DeviceCode/FromPac) and Console Core
            // (no AD), every registry type scaffolds.
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker(type)));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            await AssertCommonPayloadAsync(result);
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
            await AssertCommonPayloadAsync(result);
        }

        [TestMethod]
        public async Task ScaffoldAsync_NoConnection_BakesClientSecretPlaceholders()
        {
            // No connection, no .env: the runner script carries ClientSecret
            // placeholders (the CLI connection form with empty values) so
            // the file parses once the user fills them in.
            var isolated = Path.Combine(Path.GetTempPath(), "devkit-proxytypes-noenv", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(isolated);
            try
            {
                var result = await ScaffoldingEngine.ScaffoldProjectAsync(new ProjectTemplateInput
                {
                    TemplateId = "ProxyTypes",
                    ProjectName = "Contoso.ProxyTypes",
                    OutputDirectory = isolated,
                    Offline = true,
                });
                Assert.IsTrue(result.Success, string.Join("; ", result.Errors));

                var runScript = File.ReadAllText(Path.Combine(isolated, "Contoso.ProxyTypes", RunScriptName()));
                StringAssert.Contains(runScript, "devkit modelbuilder --auth ClientSecret --url \"\" --clientid \"\" --clientsecret \"\"");
                StringAssert.Contains(runScript, "--json \"DynamicsCrm.DevKit.Cli.json\" --profile \"ALL\"");
            }
            finally
            {
                Directory.Delete(isolated, true);
            }
        }

        [TestMethod]
        public async Task ScaffoldAsync_GeneratesNoSnk()
        {
            // VSIX parity: the ProxyTypes wizard calls no SigningHelper and
            // the vstemplate copies no key.snk — the CLI generates none
            // either, and the csproj carries no SignAssembly.
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.IsFalse(Directory.GetFiles(_projectDirectory, "*.snk", SearchOption.AllDirectories).Any());
            Assert.IsFalse(result.Files.Any(file => file.FilePath.EndsWith(".snk", StringComparison.OrdinalIgnoreCase)));
            var csproj = File.ReadAllText(Path.Combine(_projectDirectory, "Contoso.ProxyTypes.csproj"));
            Assert.IsFalse(csproj.Contains("<SignAssembly>"));
            Assert.IsFalse(csproj.Contains("<AssemblyOriginatorKeyFile>"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_RunScript_EmbedsCliConnectionArgs()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(new CrmConnection
            {
                Type = "ClientSecret",
                Url = "https://contoso.crm.dynamics.com",
                ClientId = "00000000-0000-0000-0000-000000000000",
                ClientSecret = "plain-secret",
            }))).Success);

            // The runner script embeds the CLI connection args of the
            // connection (secrets encrypted by Helper.EncryptString — the
            // script never carries the plain secret).
            var runScript = File.ReadAllText(Path.Combine(_projectDirectory, RunScriptName()));
            StringAssert.Contains(runScript, "devkit modelbuilder --auth ClientSecret --url \"https://contoso.crm.dynamics.com\" --clientid \"00000000-0000-0000-0000-000000000000\" --clientsecret \"");
            StringAssert.Contains(runScript, "--json \"DynamicsCrm.DevKit.Cli.json\" --profile \"ALL\"");
            Assert.IsFalse(runScript.Contains("plain-secret"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_RunScript_MarkerConnection_OmitsArgs()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            // UseProjectEnvironment connections build empty args (the
            // script falls back to the project .env) — ApplyCliConnectionArgs
            // also collapses the leading space, so no double space remains.
            var runScript = File.ReadAllText(Path.Combine(_projectDirectory, RunScriptName()));
            StringAssert.Contains(runScript, "devkit modelbuilder --json \"DynamicsCrm.DevKit.Cli.json\" --profile \"ALL\"");
            Assert.IsFalse(runScript.Contains("--auth"));
            Assert.IsFalse(runScript.Contains("  devkit"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_RunShResource_CarriesTheBashTwin()
        {
            // The macOS/Linux twin of the runner script: the embedded bash
            // resource exists and carries the same devkit call (TokenEngine
            // stamps it only when present, like the other script twins).
            var runSh = await TemplatePayload.ReadSharedResourceAsync("sh.proxytypes.run.sh");
            Assert.IsNotNull(runSh);
            StringAssert.Contains(runSh, "#!/usr/bin/env bash");
            StringAssert.Contains(runSh, "devkit modelbuilder $CliConnectionArgs$ --json \"DynamicsCrm.DevKit.Cli.json\" --profile \"ALL\"");
            // Lean contract (aP 2026-10-25): no install-check block in the
            // bash twin — shebang + the devkit call only.
            Assert.IsFalse(runSh.Contains("where devkit"));
            Assert.IsFalse(runSh.Contains("command -v devkit"));

            // The payload stub of the bash twin resolves through the
            // project payload naming (deployed on non-Windows hosts).
            var prefix = TemplatePayload.Prefix(TemplateKind.Project, "proxytypes");
            var stub = await TemplatePayload.ReadContentAsync(prefix + "run.sh");
            Assert.IsNotNull(stub);
            Assert.AreEqual("$run.sh$", stub.Content.Trim());
        }

        [TestMethod]
        public async Task ScaffoldAsync_CreatesNoVstemplateFolders()
        {
            // The 08 vstemplate declares no Folder elements — unlike
            // WebResource, the project directory carries files only.
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            Assert.AreEqual(0, Directory.GetDirectories(_projectDirectory).Length);
        }

        [TestMethod]
        public async Task ScaffoldAsync_RegistersPlainSolutionEntry()
        {
            // The ProxyTypes csproj imports no Shared .projitems — even
            // with a Shared project in the workspace the .sln gains ONLY
            // the csproj entry (no SharedMSBuildProjectFiles consumer line).
            await ScaffoldSharedAsync();
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var solution = File.ReadAllText(_solutionFile);
            StringAssert.Contains(solution, $"\"Contoso.ProxyTypes\", \"Contoso.ProxyTypes\\Contoso.ProxyTypes.csproj\"");
            StringAssert.Contains(solution, "Contoso.Shared\\Contoso.Shared.shproj");
            Assert.IsFalse(solution.Contains("SharedItemsImports = 5"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_SolutionEntryWithoutShared()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var solution = File.ReadAllText(_solutionFile);
            StringAssert.Contains(solution, $"\"Contoso.ProxyTypes\", \"Contoso.ProxyTypes\\Contoso.ProxyTypes.csproj\"");
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

            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var content = File.ReadAllText(slnx);
            StringAssert.Contains(content, "<Project Path=\"Contoso.ProxyTypes/Contoso.ProxyTypes.csproj\" />");
            // The .slnx format has no SharedMSBuildProjectFiles section.
            Assert.IsFalse(content.Contains("SharedItemsImports"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_PreservesPayloadBomState()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            // Visual Studio keeps the per-file encoding of the payload: the
            // two placeholder sources carry a BOM (the rendered files keep
            // it) — every other payload file is BOM-less.
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "Contoso.ProxyTypes.csproj")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "README.md")));
            Assert.IsTrue(HasBom(Path.Combine(_projectDirectory, "GeneratedCode.cs")));
            Assert.IsTrue(HasBom(Path.Combine(_projectDirectory, "ProxyTypesAssembly.cs")));
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "run.bat")));
            }
            else
            {
                Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "run.sh")));
            }
        }

        [TestMethod]
        public async Task ScaffoldAsync_RerunSkipsExistingFiles()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var userFile = Path.Combine(_projectDirectory, "README.md");
            File.WriteAllText(userFile, "customized by user");

            var second = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")));

            Assert.IsTrue(second.Success);
            Assert.IsTrue(second.Warnings.Any(warning => warning.Contains("already exists")));
            Assert.IsTrue(second.Files.All(file => file.Action == "Skipped" || file.Action == "Unchanged"));
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

        [TestMethod]
        public async Task ScaffoldAsync_WarnsToRunTheModelbuilderScript()
        {
            // Work-unit P.8: the scaffold only lays down the runner — the
            // hint tells the user how the early-bound types appear.
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var runnerScript = RuntimeInformation.IsOSPlatform(OSPlatform.Windows) ? "run.bat" : "./run.sh";
            StringAssert.Contains(result.Warnings.Single(), $"Run {runnerScript} — or 'devkit modelbuilder' — to generate the early-bound types.");
        }

        [TestMethod]
        public async Task ScaffoldAsync_GeneratedProject_BuildsNet462()
        {
            // The golden proof of P.8: the generated net462 project compiles
            // with plain 'dotnet build' — its only PackageReference
            // (Microsoft.CrmSdk.CoreAssemblies) resolves from the NuGet cache.
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var (exitCode, output) = DotnetBuild(Path.Combine(_projectDirectory, "Contoso.ProxyTypes.csproj"));
            Assert.AreEqual(0, exitCode, output);
        }

        /// <summary>
        /// The runner script file name of the running platform.
        /// </summary>
        private static string RunScriptName()
        {
            return RuntimeInformation.IsOSPlatform(OSPlatform.Windows) ? "run.bat" : "run.sh";
        }

        /// <summary>
        /// The realistic workspace sequence: Shared first, then ProxyTypes
        /// on top (only to prove the ProxyTypes .sln entry stays plain).
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
        /// csproj is net462 without signing, without a Shared import, with
        /// the offline DefaultVersions NuGet set and the platform runner
        /// script, the placeholder sources carry the project namespace, the
        /// modelbuilder hint is reported, and no $token$ survives anywhere.
        /// </summary>
        private async Task AssertCommonPayloadAsync(ScaffoldResult result)
        {
            var isWindows = RuntimeInformation.IsOSPlatform(OSPlatform.Windows);
            var runScript = isWindows ? "run.bat" : "run.sh";
            var expectedFiles = new[]
            {
                Path.Combine(_projectDirectory, "Contoso.ProxyTypes.csproj"),
                Path.Combine(_projectDirectory, "README.md"),
                Path.Combine(_projectDirectory, runScript),
                Path.Combine(_projectDirectory, "GeneratedCode.cs"),
                Path.Combine(_projectDirectory, "ProxyTypesAssembly.cs"),
            };
            foreach (var file in expectedFiles)
            {
                Assert.IsTrue(File.Exists(file), $"missing {file}");
            }

            // README.md is copied verbatim (ReplaceParameters=false in the
            // .vstemplate).
            var readmePayload = await TemplatePayload.ReadContentAsync(TemplatePayload.Prefix(TemplateKind.Project, "proxytypes") + "README.md");
            Assert.AreEqual(readmePayload.Content, File.ReadAllText(Path.Combine(_projectDirectory, "README.md")));

            var csproj = File.ReadAllText(Path.Combine(_projectDirectory, "Contoso.ProxyTypes.csproj"));
            StringAssert.Contains(csproj, "<TargetFramework>net462</TargetFramework>");
            StringAssert.Contains(csproj, "<RootNamespace>Contoso.ProxyTypes</RootNamespace>");
            StringAssert.Contains(csproj, "<AssemblyName>Contoso.ProxyTypes</AssemblyName>");
            StringAssert.Contains(csproj, "<PlatformTarget>x64</PlatformTarget>");
            StringAssert.Contains(csproj, $"<Copyright>Copyright © {DateTime.Now.Year}</Copyright>");
            // No strong-name key and no Shared import in this template.
            Assert.IsFalse(csproj.Contains("<SignAssembly>"));
            Assert.IsFalse(csproj.Contains(".projitems"));
            // The only PackageReference resolves offline through the
            // DefaultVersions fallback of NuGetHelper.
            StringAssert.Contains(csproj, "Include=\"Microsoft.CrmSdk.CoreAssemblies\" Version=\"9.0.2.60\"");
            StringAssert.Contains(csproj, $"Generated by DynamicsCrm.DevKit - {Const.VersionBuild}");
            // The runner script and README stay visible in Solution Explorer.
            StringAssert.Contains(csproj, "<None Include=\"run.bat\" />");
            StringAssert.Contains(csproj, "<None Include=\"README.md\" />");
            // The trailing build-stamp comment of the payload.
            StringAssert.Contains(csproj, $"<!-- {Const.VersionBuild} -->");

            // The two placeholder sources carry the project namespace.
            StringAssert.Contains(File.ReadAllText(Path.Combine(_projectDirectory, "GeneratedCode.cs")), "namespace Contoso.ProxyTypes");
            StringAssert.Contains(File.ReadAllText(Path.Combine(_projectDirectory, "ProxyTypesAssembly.cs")), "namespace Contoso.ProxyTypes");

            // The scaffold only lays down the runner — the hint tells how
            // the early-bound types appear.
            StringAssert.Contains(result.Warnings.Single(), "devkit modelbuilder");

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
