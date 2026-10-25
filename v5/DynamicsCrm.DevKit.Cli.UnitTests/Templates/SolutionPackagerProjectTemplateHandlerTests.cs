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
    /// P.11 acceptance tests for the Solution Packager project template:
    /// the five payload files of CSharpSolutionPackagerProjectTemplate
    /// .vstemplate rendered with the packager scripts of the platform (bats
    /// on Windows, the bash twins elsewhere), README.md and mapping.xml
    /// copied verbatim (ReplaceParameters=false — mapping.xml keeps its BOM
    /// like the payload), the scripts baking the CLI connection arguments
    /// for `devkit solution` through the profiles "Extract-Both"/
    /// "Pack-Both", no strong-name key, no Shared requirement (the csproj
    /// imports no .projitems), the solution opt-in (create-only without
    /// --solution, plain csproj entry with it — no SharedMSBuildProjectFiles
    /// consumer line), the idempotency rules and the golden proof: the
    /// generated net462 project builds with plain 'dotnet build'.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class SolutionPackagerProjectTemplateHandlerTests
    {
        private static readonly Regex TokenPattern = new Regex(@"\$[A-Za-z][A-Za-z0-9.]*\$", RegexOptions.Compiled);

        private string _directory;
        private string _solutionFile;
        private string _projectDirectory;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-solutionpackager-handler-tests", Guid.NewGuid().ToString("N"));
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
            _projectDirectory = Path.Combine(_directory, "Contoso.SolutionPackager");

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
                TemplateId = "SolutionPackager",
                ProjectName = "Contoso.SolutionPackager",
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
            var manifest = SolutionPackagerProjectTemplateHandler.CreateManifest();

            Assert.AreEqual("SolutionPackager", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Project, manifest.Kind);

            // The vstemplate declares the csproj, README.md, mapping.xml and
            // the two packager scripts of the running platform — no key.snk.
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                Assert.AreEqual(5, manifest.Files.Count);
                Assert.AreEqual("$SafeProjectName$.csproj", manifest.Files[0].TargetFileName);
                Assert.AreEqual("README.md", manifest.Files[1].TargetFileName);
                Assert.AreEqual("mapping.xml", manifest.Files[2].TargetFileName);
                Assert.AreEqual("Extract-Both.bat", manifest.Files[3].TargetFileName);
                Assert.AreEqual("Pack-Both.bat", manifest.Files[4].TargetFileName);
            }
            else
            {
                Assert.AreEqual(5, manifest.Files.Count);
                Assert.AreEqual("$SafeProjectName$.csproj", manifest.Files[0].TargetFileName);
                Assert.AreEqual("README.md", manifest.Files[1].TargetFileName);
                Assert.AreEqual("mapping.xml", manifest.Files[2].TargetFileName);
                Assert.AreEqual("Extract-Both.sh", manifest.Files[3].TargetFileName);
                Assert.AreEqual("Pack-Both.sh", manifest.Files[4].TargetFileName);
            }

            // ReplaceParameters flags follow the .vstemplate declaration:
            // README.md and mapping.xml are plain copies, everything else is
            // token-replaced.
            Assert.IsFalse(manifest.Files.Single(file => file.TargetFileName == "README.md").ReplaceParameters);
            Assert.IsFalse(manifest.Files.Single(file => file.TargetFileName == "mapping.xml").ReplaceParameters);
            Assert.IsTrue(manifest.Files.All(file => file.ReplaceParameters || file.TargetFileName == "README.md" || file.TargetFileName == "mapping.xml"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_WithoutSolution_CreatesProjectOnly()
        {
            // No --solution = create-only: the project lands under --out,
            // NO solution file is needed — the wizard checks nothing else
            // (the csproj imports no Shared .projitems).
            var isolated = Path.Combine(Path.GetTempPath(), "devkit-solutionpackager-nosln", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(isolated);
            try
            {
                var input = new ProjectTemplateInput
                {
                    TemplateId = "SolutionPackager",
                    ProjectName = "Contoso.SolutionPackager",
                    OutputDirectory = isolated,
                    Offline = true,
                };
                var result = await ScaffoldingEngine.ScaffoldProjectAsync(input);

                Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
                Assert.IsTrue(File.Exists(Path.Combine(isolated, "Contoso.SolutionPackager", "Contoso.SolutionPackager.csproj")));
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
            Assert.IsFalse(Directory.Exists(Path.Combine(_directory, "Contoso.SolutionPackager")));
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
            StringAssert.Contains(result.Errors[0], "not supported for the Solution Packager project template");
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
            // FormProject filters no connection type for SolutionPackager —
            // every registry type scaffolds.
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
            // No connection, no .env: the packager scripts carry
            // ClientSecret placeholders (the CLI connection form with empty
            // values) so the file parses once the user fills them in.
            var isolated = Path.Combine(Path.GetTempPath(), "devkit-solutionpackager-noenv", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(isolated);
            try
            {
                var result = await ScaffoldingEngine.ScaffoldProjectAsync(new ProjectTemplateInput
                {
                    TemplateId = "SolutionPackager",
                    ProjectName = "Contoso.SolutionPackager",
                    OutputDirectory = isolated,
                    Offline = true,
                });
                Assert.IsTrue(result.Success, string.Join("; ", result.Errors));

                var extractBoth = File.ReadAllText(IsolatedScriptPath(isolated, "Extract-Both.bat", "Extract-Both.sh"));
                StringAssert.Contains(extractBoth, "devkit solution --auth ClientSecret --url \"\" --clientid \"\" --clientsecret \"\"");
                StringAssert.Contains(extractBoth, "--profile \"Extract-Both\"");

                var packBoth = File.ReadAllText(IsolatedScriptPath(isolated, "Pack-Both.bat", "Pack-Both.sh"));
                StringAssert.Contains(packBoth, "devkit solution --auth ClientSecret --url \"\" --clientid \"\" --clientsecret \"\"");
                StringAssert.Contains(packBoth, "--profile \"Pack-Both\"");
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

            // The packager scripts embed the CLI connection args of the
            // connection (secrets encrypted by Helper.EncryptString — the
            // scripts never carry the plain secret).
            var extractBoth = File.ReadAllText(ScriptPath("Extract-Both.bat", "Extract-Both.sh"));
            StringAssert.Contains(extractBoth, "devkit solution --auth ClientSecret --url \"https://contoso.crm.dynamics.com\" --clientid \"00000000-0000-0000-0000-000000000000\" --clientsecret \"");
            StringAssert.Contains(extractBoth, "--json \"DynamicsCrm.DevKit.Cli.json\" --profile \"Extract-Both\"");
            Assert.IsFalse(extractBoth.Contains("plain-secret"));

            var packBoth = File.ReadAllText(ScriptPath("Pack-Both.bat", "Pack-Both.sh"));
            StringAssert.Contains(packBoth, "devkit solution --auth ClientSecret");
            StringAssert.Contains(packBoth, "--profile \"Pack-Both\"");
            Assert.IsFalse(packBoth.Contains("plain-secret"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_Scripts_MarkerConnection_OmitArgs()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            // UseProjectEnvironment connections build empty args (the
            // scripts fall back to the project .env) — ApplyCliConnectionArgs
            // also collapses the leading space, so no double space remains.
            var extractBoth = File.ReadAllText(ScriptPath("Extract-Both.bat", "Extract-Both.sh"));
            StringAssert.Contains(extractBoth, "devkit solution --json \"DynamicsCrm.DevKit.Cli.json\" --profile \"Extract-Both\"");
            Assert.IsFalse(extractBoth.Contains("--auth"));
            Assert.IsFalse(extractBoth.Contains("  devkit"));

            var packBoth = File.ReadAllText(ScriptPath("Pack-Both.bat", "Pack-Both.sh"));
            StringAssert.Contains(packBoth, "devkit solution --json \"DynamicsCrm.DevKit.Cli.json\" --profile \"Pack-Both\"");
            Assert.IsFalse(packBoth.Contains("--auth"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_ScriptShResources_CarryTheBashTwins()
        {
            // The macOS/Linux twins of the packager scripts: the embedded
            // bash resources exist and carry the same devkit call
            // (TokenEngine stamps them only when present).
            var extractBothSh = await TemplatePayload.ReadSharedResourceAsync("sh.solutionpackager.extract.both.sh");
            Assert.IsNotNull(extractBothSh);
            StringAssert.Contains(extractBothSh, "#!/usr/bin/env bash");
            StringAssert.Contains(extractBothSh, "devkit solution $CliConnectionArgs$ --json \"DynamicsCrm.DevKit.Cli.json\" --profile \"Extract-Both\"");

            var packBothSh = await TemplatePayload.ReadSharedResourceAsync("sh.solutionpackager.pack.both.sh");
            Assert.IsNotNull(packBothSh);
            StringAssert.Contains(packBothSh, "devkit solution $CliConnectionArgs$ --json \"DynamicsCrm.DevKit.Cli.json\" --profile \"Pack-Both\"");

            // Lean contract (aP 2026-10-25): shebang + the devkit call only,
            // like every other bash twin.
            Assert.IsFalse(extractBothSh.Contains("command -v devkit"));
            Assert.IsFalse(packBothSh.Contains("command -v devkit"));

            // The payload stubs of the bash twins resolve through the
            // project payload naming (deployed on non-Windows hosts).
            var prefix = TemplatePayload.Prefix(TemplateKind.Project, "solutionpackager");
            var extractStub = await TemplatePayload.ReadContentAsync(prefix + "Extract-Both.sh");
            Assert.IsNotNull(extractStub);
            Assert.AreEqual("$Extract-Both.sh$", extractStub.Content.Trim());
            var packStub = await TemplatePayload.ReadContentAsync(prefix + "Pack-Both.sh");
            Assert.AreEqual("$Pack-Both.sh$", packStub.Content.Trim());
        }

        [TestMethod]
        public async Task ScaffoldAsync_MappingXmlAndReadme_CopiedVerbatim()
        {
            // README.md and mapping.xml are plain copies (ReplaceParameters
            // =false in the .vstemplate) — byte-faithful to the payload.
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var prefix = TemplatePayload.Prefix(TemplateKind.Project, "solutionpackager");
            var readmePayload = await TemplatePayload.ReadContentAsync(prefix + "README.md");
            Assert.AreEqual(readmePayload.Content, File.ReadAllText(Path.Combine(_projectDirectory, "README.md")));

            var mappingPayload = await TemplatePayload.ReadContentAsync(prefix + "mapping.xml");
            Assert.AreEqual(mappingPayload.Content, File.ReadAllText(Path.Combine(_projectDirectory, "mapping.xml")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_PreservesPayloadBomState()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            // Every payload file is BOM-less except mapping.xml — the
            // rendered files keep exactly that (VS preserves the per-file
            // encoding of the .vstemplate payload).
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "Contoso.SolutionPackager.csproj")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "README.md")));
            Assert.IsFalse(HasBom(ScriptPath("Extract-Both.bat", "Extract-Both.sh")));
            Assert.IsFalse(HasBom(ScriptPath("Pack-Both.bat", "Pack-Both.sh")));
            Assert.IsTrue(HasBom(Path.Combine(_projectDirectory, "mapping.xml")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_RegistersPlainSolutionEntry()
        {
            // The SolutionPackager csproj imports no Shared .projitems —
            // even with a Shared project in the workspace the .sln gains
            // ONLY the csproj entry (no SharedMSBuildProjectFiles consumer
            // line).
            await ScaffoldSharedAsync();
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var solution = File.ReadAllText(_solutionFile);
            StringAssert.Contains(solution, $"\"Contoso.SolutionPackager\", \"Contoso.SolutionPackager\\Contoso.SolutionPackager.csproj\"");
            StringAssert.Contains(solution, "Contoso.Shared\\Contoso.Shared.shproj");
            Assert.IsFalse(solution.Contains("SharedItemsImports = 5"));
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
            StringAssert.Contains(content, "<Project Path=\"Contoso.SolutionPackager/Contoso.SolutionPackager.csproj\" />");
            // The .slnx format has no SharedMSBuildProjectFiles section.
            Assert.IsFalse(content.Contains("SharedItemsImports"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_RerunSkipsExistingFiles()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var userFile = Path.Combine(_projectDirectory, "mapping.xml");
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

            var userFile = Path.Combine(_projectDirectory, "mapping.xml");
            File.WriteAllText(userFile, "customized by user");

            var forced = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret"), force: true));

            Assert.IsTrue(forced.Success);
            Assert.AreEqual("Updated", forced.Files.Single(file => file.FilePath == userFile).Action);
            Assert.AreNotEqual("customized by user", File.ReadAllText(userFile));
        }

        [TestMethod]
        public async Task ScaffoldAsync_GeneratedProject_BuildsNet462()
        {
            // The golden proof of P.11: the generated net462 packager project
            // compiles with plain 'dotnet build' — it carries no
            // PackageReference at all (an empty library wrapping the scripts
            // and the mapping).
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var (exitCode, output) = DotnetBuild(Path.Combine(_projectDirectory, "Contoso.SolutionPackager.csproj"));
            Assert.AreEqual(0, exitCode, output);
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
            return Path.Combine(isolated, "Contoso.SolutionPackager", RuntimeInformation.IsOSPlatform(OSPlatform.Windows) ? windowsPath : unixPath);
        }

        /// <summary>
        /// The realistic workspace sequence: Shared first, then
        /// SolutionPackager on top (only to prove the .sln entry stays
        /// plain).
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
        /// exist, tokens are fully applied, the csproj is net462 without
        /// signing, without a Shared import, with the platform scripts and
        /// no $token$ surviving anywhere.
        /// </summary>
        private async Task AssertCommonPayloadAsync()
        {
            var isWindows = RuntimeInformation.IsOSPlatform(OSPlatform.Windows);
            var extractBoth = isWindows ? "Extract-Both.bat" : "Extract-Both.sh";
            var packBoth = isWindows ? "Pack-Both.bat" : "Pack-Both.sh";
            var expectedFiles = new[]
            {
                Path.Combine(_projectDirectory, "Contoso.SolutionPackager.csproj"),
                Path.Combine(_projectDirectory, "README.md"),
                Path.Combine(_projectDirectory, "mapping.xml"),
                Path.Combine(_projectDirectory, extractBoth),
                Path.Combine(_projectDirectory, packBoth),
            };
            foreach (var file in expectedFiles)
            {
                Assert.IsTrue(File.Exists(file), $"missing {file}");
            }
            Assert.IsFalse(Directory.GetFiles(_projectDirectory, "*.snk", SearchOption.AllDirectories).Any());

            var csproj = File.ReadAllText(Path.Combine(_projectDirectory, "Contoso.SolutionPackager.csproj"));
            StringAssert.Contains(csproj, "<TargetFramework>net462</TargetFramework>");
            StringAssert.Contains(csproj, "<RootNamespace>Contoso.SolutionPackager</RootNamespace>");
            StringAssert.Contains(csproj, "<AssemblyName>Contoso.SolutionPackager</AssemblyName>");
            StringAssert.Contains(csproj, $"<Copyright>Copyright © {DateTime.Now.Year}</Copyright>");
            StringAssert.Contains(csproj, "<None Include=\"mapping.xml\" />");
            Assert.IsFalse(csproj.Contains("<SignAssembly>"));
            Assert.IsFalse(csproj.Contains(".projitems"));
            StringAssert.Contains(csproj, $"Generated by DynamicsCrm.DevKit - {Const.VersionBuild}");

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
