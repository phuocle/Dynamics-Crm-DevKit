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
    /// P.4 acceptance tests for the Server project template: the payload
    /// files of CSharpServerProjectTemplate.vstemplate rendered with the
    /// deploy scripts of the platform (bats on Windows, the bash twins
    /// elsewhere), the fresh RSA2 strong-name key of the cross-platform
    /// SigningService (the payload key.snk is never copied), the
    /// Shared-project requirement with its scaffold hint, the .csproj
    /// registered in the solution with the SharedMSBuildProjectFiles
    /// consumer line, the idempotency rules on re-runs (an existing .snk
    /// is kept) and the golden proof: the generated net462 project builds
    /// with SignAssembly on — the end-to-end evidence that SigningService
    /// replaces the Windows-only mscoree StrongNameKeyGen.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class ServerProjectTemplateHandlerTests
    {
        private static readonly Regex TokenPattern = new Regex(@"\$[A-Za-z][A-Za-z0-9.]*\$", RegexOptions.Compiled);

        private string _directory;
        private string _solutionFile;
        private string _projectDirectory;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-server-handler-tests", Guid.NewGuid().ToString("N"));
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
            _projectDirectory = Path.Combine(_directory, "Contoso.Server");

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
                TemplateId = "Server",
                ProjectName = "Contoso.Server",
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
        /// The realistic workspace sequence: Shared first (the Server wizard
        /// refuses without it), then Server on top.
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
        public void CreateManifest_MirrorsVstemplateFourFiles()
        {
            var manifest = ServerProjectTemplateHandler.CreateManifest();

            Assert.AreEqual("Server", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Project, manifest.Kind);

            // The vstemplate declares the csproj, key.snk (the CLI generates
            // a fresh key instead — not a manifest entry), README.md and the
            // two deploy scripts of the running platform.
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                Assert.AreEqual(4, manifest.Files.Count);
                Assert.AreEqual("$SafeProjectName$.csproj", manifest.Files[0].TargetFileName);
                Assert.AreEqual("README.md", manifest.Files[1].TargetFileName);
                Assert.AreEqual("deploy.debug.bat", manifest.Files[2].TargetFileName);
                Assert.AreEqual("deploy.debug.only.bat", manifest.Files[3].TargetFileName);
                Assert.IsTrue(manifest.Files.All(file => file.ResourceName.EndsWith(".bat", StringComparison.Ordinal)) || manifest.Files[0].ResourceName.EndsWith(".template", StringComparison.Ordinal));
            }
            else
            {
                Assert.AreEqual(4, manifest.Files.Count);
                Assert.AreEqual("$SafeProjectName$.csproj", manifest.Files[0].TargetFileName);
                Assert.AreEqual("README.md", manifest.Files[1].TargetFileName);
                Assert.AreEqual("deploy.debug.sh", manifest.Files[2].TargetFileName);
                Assert.AreEqual("deploy.debug.only.sh", manifest.Files[3].TargetFileName);
            }

            // ReplaceParameters flags follow the .vstemplate declaration.
            Assert.IsFalse(manifest.Files.Single(file => file.TargetFileName == "README.md").ReplaceParameters);
            Assert.IsTrue(manifest.Files.All(file => file.ReplaceParameters || file.TargetFileName == "README.md"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_WithoutSolution_CreatesProjectOnly()
        {
            // No --solution = create-only: the project lands under --out,
            // the Shared requirement is satisfied by the workspace lookup
            // (not a solution file), and NO solution file is touched.
            var isolated = Path.Combine(Path.GetTempPath(), "devkit-server-nosln", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(isolated);
            try
            {
                var shared = await ScaffoldingEngine.ScaffoldProjectAsync(new ProjectTemplateInput
                {
                    TemplateId = "Shared",
                    ProjectName = "Contoso.Shared",
                    OutputDirectory = isolated,
                    Offline = true,
                });
                Assert.IsTrue(shared.Success, string.Join("; ", shared.Errors));

                var input = new ProjectTemplateInput
                {
                    TemplateId = "Server",
                    ProjectName = "Contoso.Server",
                    OutputDirectory = isolated,
                    Offline = true,
                };
                var result = await ScaffoldingEngine.ScaffoldProjectAsync(input);

                Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
                Assert.IsTrue(File.Exists(Path.Combine(isolated, "Contoso.Server", "Contoso.Server.csproj")));
                Assert.IsTrue(File.Exists(Path.Combine(isolated, "Contoso.Server", "Contoso.Server.snk")));
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
            Assert.IsFalse(Directory.Exists(Path.Combine(_directory, "Contoso.Server")));
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
        public async Task ScaffoldAsync_MissingSharedProject_FailsWithHint()
        {
            // VSIX parity: the Server wizard aborts with "Please add Shared
            // project" — the handler refuses the same way, with the P.1
            // scaffold as the hint, and leaves no debris behind.
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")));

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "requires the Shared project");
            StringAssert.Contains(result.Errors[0], "devkit new --kind project --type Shared --name Contoso.Shared");
            Assert.IsFalse(Directory.Exists(_projectDirectory), "no project folder may be created without Shared");
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
            await ScaffoldSharedAsync();
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
            // FormProject filters no connection type for Server — unlike
            // Console (no DeviceCode/FromPac) and Console Core (no AD),
            // every registry type scaffolds.
            await ScaffoldSharedAsync();
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker(type)));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            await AssertCommonPayloadAsync();
        }

        [TestMethod]
        public async Task ScaffoldAsync_NullConnection_UsesEnvMarker()
        {
            // Non-interactive hosts pass no connection: the handler derives
            // the .env marker like SolutionMutator.EnsureDevKitJsonAsync.
            await ScaffoldSharedAsync();
            File.WriteAllText(Path.Combine(_directory, ".env"),
                "DEVKIT_AUTH_TYPE=Interactive\r\n" +
                "DEVKIT_URL=https://contoso.crm.dynamics.com\r\n");

            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input());
            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            await AssertCommonPayloadAsync();
        }

        [TestMethod]
        public async Task ScaffoldAsync_GeneratesFreshSnk_NotThePayloadKey()
        {
            await ScaffoldSharedAsync();
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));

            // The vstemplate copies the 596-byte payload key.snk; the CLI
            // port generates a fresh RSA2 key with SigningService — the
            // 1172-byte CSP blob (0x07 PRIVATEKEYBLOB + "RSA2").
            var snkPath = Path.Combine(_projectDirectory, "Contoso.Server.snk");
            Assert.IsTrue(File.Exists(snkPath));
            var snk = File.ReadAllBytes(snkPath);
            Assert.AreEqual(1172, snk.Length, "fresh SigningService key, not the payload key.snk");
            Assert.AreEqual(0x07, snk[0]);
            Assert.AreEqual(0x02, snk[1]);
            Assert.AreEqual(0x52, snk[8]);
            Assert.AreEqual(0x53, snk[9]);
            Assert.AreEqual(0x41, snk[10]);
            Assert.AreEqual(0x32, snk[11]);
            Assert.AreEqual("Created", result.Files.Single(file => file.FilePath == snkPath).Action);
        }

        [TestMethod]
        public async Task ScaffoldAsync_DeployScripts_EmbedCliConnectionArgs()
        {
            await ScaffoldSharedAsync();
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(new CrmConnection
            {
                Type = "ClientSecret",
                Url = "https://contoso.crm.dynamics.com",
                ClientId = "00000000-0000-0000-0000-000000000000",
                ClientSecret = "plain-secret",
            }))).Success);

            // The deploy scripts embed the CLI connection args of the
            // connection (secrets encrypted by Helper.EncryptString — the
            // bat never carries the plain secret).
            var deploy = File.ReadAllText(Path.Combine(_projectDirectory, "deploy.debug.bat"));
            StringAssert.Contains(deploy, "devkit server --auth ClientSecret --url \"https://contoso.crm.dynamics.com\" --clientid \"00000000-0000-0000-0000-000000000000\" --clientsecret \"");
            StringAssert.Contains(deploy, "--json \"DynamicsCrm.DevKit.Cli.json\" --profile \"DEBUG\"");
            Assert.IsFalse(deploy.Contains("plain-secret"));
            // Lean contract (aP 2026-10-25, same call as the P.1 generator
            // bats): no "is devkit installed" check block — the script is
            // just @echo off + the devkit call.
            Assert.IsFalse(deploy.Contains("where devkit"));

            var deployOnly = File.ReadAllText(Path.Combine(_projectDirectory, "deploy.debug.only.bat"));
            StringAssert.Contains(deployOnly, "--profile \"DEBUG\" --onlyupdateassembly");
        }

        [TestMethod]
        public async Task ScaffoldAsync_DeployScripts_MarkerConnection_OmitsArgs()
        {
            await ScaffoldSharedAsync();
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            // UseProjectEnvironment connections build empty args (the deploy
            // falls back to the project .env) — ApplyCliConnectionArgs also
            // collapses the leading space, so no double space remains.
            var deploy = File.ReadAllText(Path.Combine(_projectDirectory, "deploy.debug.bat"));
            StringAssert.Contains(deploy, "devkit server --json \"DynamicsCrm.DevKit.Cli.json\" --profile \"DEBUG\"");
            Assert.IsFalse(deploy.Contains("--auth"));
            Assert.IsFalse(deploy.Contains("  devkit"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_DeployShResources_CarryTheBashTwin()
        {
            // The macOS/Linux twins of the deploy scripts: the embedded
            // bash resources exist and carry the same devkit server call
            // (TokenEngine stamps them only when present, like the Shared
            // generator twin).
            var deploySh = await TemplatePayload.ReadSharedResourceAsync("sh.plugin.deploy.debug.sh");
            Assert.IsNotNull(deploySh);
            StringAssert.Contains(deploySh, "#!/usr/bin/env bash");
            StringAssert.Contains(deploySh, "devkit server $CliConnectionArgs$ --json \"DynamicsCrm.DevKit.Cli.json\" --profile \"DEBUG\"");
            // Lean contract (aP 2026-10-25): no install-check block in the
            // bash twin either — shebang + the devkit call only.
            Assert.IsFalse(deploySh.Contains("command -v devkit"));

            var deployOnlySh = await TemplatePayload.ReadSharedResourceAsync("sh.plugin.deploy.debug.only.sh");
            Assert.IsNotNull(deployOnlySh);
            StringAssert.Contains(deployOnlySh, "--profile \"DEBUG\" --onlyupdateassembly");

            // The payload stubs of the bash twins resolve through the
            // project payload naming (deployed on non-Windows hosts).
            var stub = await TemplatePayload.ReadContentAsync(TemplatePayload.Prefix(TemplateKind.Project, "server") + "deploy.debug.sh");
            Assert.IsNotNull(stub);
            Assert.AreEqual("$deploy.debug.sh$", stub.Content.Trim());
        }

        [TestMethod]
        public async Task ScaffoldAsync_RegistersSolutionEntryAndConsumerLine()
        {
            await ScaffoldSharedAsync();
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var solution = File.ReadAllText(_solutionFile);

            // The csproj entry (SDK-style project type guid) + configuration
            // entries, sharing the GUID with the consumer line below.
            var entry = Regex.Match(solution,
                $"Project\\(\"{SolutionMutator.SdkCSharpProjectTypeGuid}\"\\) = \"Contoso\\.Server\", \"Contoso\\.Server\\\\Contoso\\.Server\\.csproj\", \"\\{{([0-9A-Fa-f-]+)\\}}\"");
            Assert.IsTrue(entry.Success, "missing Server project entry");
            var guid = entry.Groups[1].Value;
            StringAssert.Contains(solution, $"{{{guid}}}.Debug|Any CPU.ActiveCfg = Debug|Any CPU");
            StringAssert.Contains(solution, $"{{{guid}}}.Release|Any CPU.Build.0 = Release|Any CPU");

            // Consumer line of the imported shared project (v4 evidence:
            // {path}.projitems*{guid-lowercase}*SharedItemsImports = 5) plus
            // the owner line the Shared scaffold wrote (= 13).
            StringAssert.Contains(solution, $"Contoso.Shared\\Contoso.Shared.projitems*{{{guid.ToLowerInvariant()}}}*SharedItemsImports = 5");
            Assert.IsTrue(solution.Contains("SharedItemsImports = 13"), "owner line missing");
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

            await ScaffoldSharedAsync();
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var content = File.ReadAllText(slnx);
            StringAssert.Contains(content, "<Project Path=\"Contoso.Server/Contoso.Server.csproj\" />");
            // The .slnx format has no SharedMSBuildProjectFiles section.
            Assert.IsFalse(content.Contains("SharedItemsImports"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_PreservesPayloadBomState()
        {
            await ScaffoldSharedAsync();
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            // Visual Studio keeps the per-file encoding of the payload: no
            // Server payload file carries a BOM (csproj, README, bats).
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "Contoso.Server.csproj")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "README.md")));
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "deploy.debug.bat")));
                Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "deploy.debug.only.bat")));
            }
            else
            {
                Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "deploy.debug.sh")));
                Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "deploy.debug.only.sh")));
            }
        }

        [TestMethod]
        public async Task ScaffoldAsync_RerunFailsAndKeepsSnk()
        {
            await ScaffoldSharedAsync();
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var userFile = Path.Combine(_projectDirectory, "README.md");
            File.WriteAllText(userFile, "customized by user");
            var snkPath = Path.Combine(_projectDirectory, "Contoso.Server.snk");
            var snkBefore = File.ReadAllBytes(snkPath);

            var second = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")));

            // Run-once (aP): the second scaffold over an existing project
            // fails - the CLI has no --force and nothing is touched.
            Assert.IsFalse(second.Success);
            StringAssert.Contains(second.Errors.Single(), "already exists");
            // The key is kept: regenerating would silently change the
            // assembly identity of an already-deployed plugin.
            CollectionAssert.AreEqual(snkBefore, File.ReadAllBytes(snkPath));
            Assert.AreEqual("customized by user", File.ReadAllText(userFile));
        }

        [TestMethod]
        public async Task ScaffoldAsync_ForceRegeneratesSnkAndOverwritesFiles()
        {
            await ScaffoldSharedAsync();
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var snkPath = Path.Combine(_projectDirectory, "Contoso.Server.snk");
            var snkBefore = File.ReadAllBytes(snkPath);

            var forced = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret"), force: true));

            Assert.IsTrue(forced.Success);
            Assert.AreEqual("Updated", forced.Files.Single(file => file.FilePath == snkPath).Action);
            CollectionAssert.AreNotEqual(snkBefore, File.ReadAllBytes(snkPath));
        }

        [TestMethod]
        public async Task ScaffoldAsync_GeneratedProject_BuildsSignedNet462()
        {
            // The golden proof of P.4: the generated net462 project with
            // SignAssembly=true compiles (and signs) with plain 'dotnet
            // build' using the SigningService key — the end-to-end
            // replacement of the Windows-only mscoree StrongNameKeyGen.
            await ScaffoldSharedAsync();
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var (exitCode, output) = DotnetBuild(Path.Combine(_projectDirectory, "Contoso.Server.csproj"));
            Assert.AreEqual(0, exitCode, output);
        }

        /// <summary>
        /// Assertions shared by every successful scaffold: the payload files
        /// exist (plus the fresh .snk), tokens are fully applied, the csproj
        /// is net462 with signing on, the offline DefaultVersions NuGet set,
        /// the shared import and the platform deploy scripts, and no $token$
        /// survives anywhere.
        /// </summary>
        private async Task AssertCommonPayloadAsync()
        {
            var isWindows = RuntimeInformation.IsOSPlatform(OSPlatform.Windows);
            var deployFiles = isWindows
                ? new[] { "deploy.debug.bat", "deploy.debug.only.bat" }
                : new[] { "deploy.debug.sh", "deploy.debug.only.sh" };
            var expectedFiles = new[]
            {
                Path.Combine(_projectDirectory, "Contoso.Server.csproj"),
                Path.Combine(_projectDirectory, "README.md"),
                Path.Combine(_projectDirectory, "Contoso.Server.snk"),
            }.Concat(deployFiles.Select(name => Path.Combine(_projectDirectory, name))).ToArray();
            foreach (var file in expectedFiles)
            {
                Assert.IsTrue(File.Exists(file), $"missing {file}");
            }

            // README.md is copied verbatim (ReplaceParameters=false in the
            // .vstemplate).
            var readmePayload = await TemplatePayload.ReadContentAsync(TemplatePayload.Prefix(TemplateKind.Project, "server") + "README.md");
            Assert.AreEqual(readmePayload.Content, File.ReadAllText(Path.Combine(_projectDirectory, "README.md")));

            var csproj = File.ReadAllText(Path.Combine(_projectDirectory, "Contoso.Server.csproj"));
            StringAssert.Contains(csproj, "<TargetFramework>net462</TargetFramework>");
            StringAssert.Contains(csproj, "<OutputType>Library</OutputType>");
            StringAssert.Contains(csproj, "<PlatformTarget>x64</PlatformTarget>");
            // The strong-name contract of the Server template.
            StringAssert.Contains(csproj, "<SignAssembly>true</SignAssembly>");
            StringAssert.Contains(csproj, "<AssemblyOriginatorKeyFile>Contoso.Server.snk</AssemblyOriginatorKeyFile>");
            StringAssert.Contains(csproj, "<None Include=\"Contoso.Server.snk\" />");
            // The Server payload indents with 2 spaces (the net10 Console
            // Core template uses TABs) — keep the payload bytes intact.
            StringAssert.Contains(csproj, "\n  <PropertyGroup>");
            StringAssert.Contains(csproj, "<RootNamespace>Contoso.Server</RootNamespace>");
            StringAssert.Contains(csproj, "<AssemblyName>Contoso.Server</AssemblyName>");
            StringAssert.Contains(csproj, $"<Copyright>Copyright © {DateTime.Now.Year}</Copyright>");
            StringAssert.Contains(csproj, "..\\Contoso.Shared\\Contoso.Shared.projitems");
            // NuGet versions resolve offline through the DefaultVersions
            // fallback of NuGetHelper.
            StringAssert.Contains(csproj, "Include=\"Microsoft.CrmSdk.CoreAssemblies\" Version=\"9.0.2.60\"");
            StringAssert.Contains(csproj, "Include=\"Microsoft.CrmSdk.Workflow\" Version=\"9.0.2.60\"");
            StringAssert.Contains(csproj, "Include=\"DynamicsCrm.DevKit.Analyzers\" Version=\"4.44.44.44\"");
            StringAssert.Contains(csproj, $"Generated by DynamicsCrm.DevKit - {Const.VersionBuild}");

            foreach (var file in Directory.GetFiles(_projectDirectory, "*", SearchOption.AllDirectories))
            {
                if (file.EndsWith(".snk", StringComparison.OrdinalIgnoreCase))
                {
                    // Binary key material — not token text.
                    continue;
                }
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
