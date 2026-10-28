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
    /// P.9 acceptance tests for the Test project template: the two payload
    /// files of CSharpTestProjectTemplate.vstemplate (csproj + README), the
    /// three blocking prerequisites of the VSIX wizard in its order —
    /// Shared, ProxyTypes, SharedTest, each refused with its scaffold hint
    /// before any file is written —, the solution opt-in (create-only
    /// without --solution, csproj entry plus one SharedMSBuildProjectFiles
    /// consumer line per imported shared project — Shared and SharedTest —
    /// with it), the idempotency rules, the BOM-less payload and the golden
    /// proof: the generated net462 project builds with plain 'dotnet
    /// build' on top of the scaffolded Shared/SharedTest/ProxyTypes chain.
    /// (The P.9 bug round: the payload originally imported only the
    /// SharedTest .projitems — aP hit the missing
    /// Shared import in the real VSIX (DevKitJson is internal to the
    /// assembly that compiles the Shared code) and the payload gained the
    /// second Import + the second consumer line.)
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class TestProjectTemplateHandlerTests
    {
        private static readonly Regex TokenPattern = new Regex(@"\$[A-Za-z][A-Za-z0-9.]*\$", RegexOptions.Compiled);

        private string _directory;
        private string _solutionFile;
        private string _projectDirectory;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-test-handler-tests", Guid.NewGuid().ToString("N"));
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
            _projectDirectory = Path.Combine(_directory, "Contoso.Test");

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

        private ProjectTemplateInput Input(bool force = false)
        {
            return new ProjectTemplateInput
            {
                TemplateId = "Test",
                ProjectName = "Contoso.Test",
                OutputDirectory = _directory,
                // The solution to register in is now explicit (--solution):
                // the walk-up auto-pick is gone.
                SolutionFile = _solutionFile,
                Force = force,
                // Deterministic NuGet stamps: the DefaultVersions table,
                // not the live nuget.org query the online path performs.
                Offline = true,
            };
        }

        [TestMethod]
        public void CreateManifest_MirrorsVstemplateTwoFiles()
        {
            var manifest = TestProjectTemplateHandler.CreateManifest();

            Assert.AreEqual("Test", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Project, manifest.Kind);

            // The vstemplate declares exactly the csproj and README.md —
            // no script, no key.snk, no placeholder sources.
            Assert.AreEqual(2, manifest.Files.Count);
            Assert.AreEqual("$SafeProjectName$.csproj", manifest.Files[0].TargetFileName);
            Assert.AreEqual("README.md", manifest.Files[1].TargetFileName);
            Assert.IsTrue(manifest.Files[0].ReplaceParameters);
            Assert.IsFalse(manifest.Files[1].ReplaceParameters);
        }

        [TestMethod]
        public async Task ScaffoldAsync_MissingSharedProject_FailsWithHint()
        {
            // VSIX parity, first blocking check: the Test wizard aborts with
            // "Please add DynamicsCrm.DevKit Shared project." — the handler
            // refuses the same way (the generated .csproj imports the Shared
            // .projitems), with the Shared scaffold as the hint, and leaves
            // no debris behind.
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input());

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "requires the Shared project");
            StringAssert.Contains(result.Errors[0], "the generated .csproj imports its .projitems");
            StringAssert.Contains(result.Errors[0], "devkit new --kind project --type Shared --name Contoso.Shared");
            Assert.IsFalse(Directory.Exists(_projectDirectory), "no project folder may be created without Shared");
        }

        [TestMethod]
        public async Task ScaffoldAsync_MissingProxyTypesProject_FailsWithHint()
        {
            // VSIX parity, second blocking check: "Please add DynamicsCrm.
            // DevKit ProxyTypes project." — the generated .csproj
            // project-references the ProxyTypes project.
            await ScaffoldChainAsync(shared: true, sharedTest: true, proxyTypes: false);

            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input());

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "requires the ProxyTypes project");
            StringAssert.Contains(result.Errors[0], "devkit new --kind project --type ProxyTypes --name Contoso.ProxyTypes");
            Assert.IsFalse(Directory.Exists(_projectDirectory), "no project folder may be created without ProxyTypes");
        }

        [TestMethod]
        public async Task ScaffoldAsync_MissingSharedTestProject_FailsWithHint()
        {
            // VSIX parity, third blocking check: "Please add DynamicsCrm.
            // DevKit Shared Test project." — the generated .csproj imports
            // the SharedTest .projitems.
            await ScaffoldChainAsync(shared: true, sharedTest: false, proxyTypes: true);

            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input());

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "requires the SharedTest project");
            StringAssert.Contains(result.Errors[0], "devkit new --kind project --type SharedTest --name Contoso.Shared.Test");
            Assert.IsFalse(Directory.Exists(_projectDirectory), "no project folder may be created without SharedTest");
        }

        [TestMethod]
        public async Task ScaffoldAsync_SolutionFileNotFound_FailsBeforeCreatingFiles()
        {
            // --solution names the file to register in; a typo must fail
            // BEFORE any project file is created (the engine validates it
            // while building the workspace, ahead of the handler).
            await ScaffoldChainAsync(shared: true, sharedTest: true, proxyTypes: true);
            var input = Input();
            input.SolutionFile = Path.Combine(_directory, "Missing.sln");
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "solution file not found");
            Assert.IsFalse(Directory.Exists(_projectDirectory));
        }

        [TestMethod]
        public async Task ScaffoldAsync_InvalidProjectName_Fails()
        {
            await ScaffoldChainAsync(shared: true, sharedTest: true, proxyTypes: true);
            var input = Input();
            input.ProjectName = "Bad:Name";
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "invalid project name");
            Assert.IsFalse(Directory.Exists(Path.Combine(_directory, "Bad:Name")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_CreatesTheTwoPayloadFiles()
        {
            await ScaffoldChainAsync(shared: true, sharedTest: true, proxyTypes: true);
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            await AssertCommonPayloadAsync(result);
        }

        [TestMethod]
        public async Task ScaffoldAsync_ConnectionIsIgnoredByPayload()
        {
            // The Test template prompts for no connection and no payload
            // file consumes one (no deploy script, no App.cs variant) — a
            // full connection object changes nothing in the rendered csproj.
            await ScaffoldChainAsync(shared: true, sharedTest: true, proxyTypes: true);
            var input = Input();
            input.CrmConnection = new CrmConnection
            {
                Type = "ClientSecret",
                Url = "https://contoso.crm.dynamics.com",
                ClientId = "00000000-0000-0000-0000-000000000000",
                ClientSecret = "plain-secret",
            };
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(input);

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            var csproj = File.ReadAllText(Path.Combine(_projectDirectory, "Contoso.Test.csproj"));
            Assert.IsFalse(csproj.Contains("plain-secret"));
            Assert.IsFalse(csproj.Contains("--auth"));
            Assert.IsFalse(csproj.Contains("$CliConnectionArgs$"));
            await AssertCommonPayloadAsync(result);
        }

        [TestMethod]
        public async Task ScaffoldAsync_WithoutSolution_CreatesProjectOnly()
        {
            // No --solution = create-only: the project lands under --out,
            // no solution file is touched. Without a solution name the
            // scanner derives the prerequisite names unprefixed ("Shared",
            // "Shared.Test", "ProxyTypes") — the chain below matches.
            var isolated = Path.Combine(Path.GetTempPath(), "devkit-test-nosln", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(isolated);
            try
            {
                foreach (var (templateId, projectName) in new[]
                {
                    ("Shared", "Shared"),
                    ("SharedTest", "Shared.Test"),
                    ("ProxyTypes", "ProxyTypes"),
                })
                {
                    var prerequisite = await ScaffoldingEngine.ScaffoldProjectAsync(new ProjectTemplateInput
                    {
                        TemplateId = templateId,
                        ProjectName = projectName,
                        OutputDirectory = isolated,
                        Offline = true,
                    });
                    Assert.IsTrue(prerequisite.Success, $"{templateId}: {string.Join("; ", prerequisite.Errors)}");
                }

                var result = await ScaffoldingEngine.ScaffoldProjectAsync(new ProjectTemplateInput
                {
                    TemplateId = "Test",
                    ProjectName = "My.Tests",
                    OutputDirectory = isolated,
                    Offline = true,
                });

                Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
                Assert.IsTrue(File.Exists(Path.Combine(isolated, "My.Tests", "My.Tests.csproj")));
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
        public async Task ScaffoldAsync_RegistersSolutionEntryAndConsumerLine()
        {
            await ScaffoldChainAsync(shared: true, sharedTest: true, proxyTypes: true);
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input())).Success);

            var solution = File.ReadAllText(_solutionFile);

            // The csproj entry (SDK-style project type guid) + configuration
            // entries, sharing the GUID with the consumer line below.
            var entry = Regex.Match(solution,
                $"Project\\(\"{SolutionMutator.SdkCSharpProjectTypeGuid}\"\\) = \"Contoso\\.Test\", \"Contoso\\.Test\\\\Contoso\\.Test\\.csproj\", \"\\{{([0-9A-Fa-f-]+)\\}}\"");
            Assert.IsTrue(entry.Success, "missing Test project entry");
            var guid = entry.Groups[1].Value;
            StringAssert.Contains(solution, $"{{{guid}}}.Debug|Any CPU.ActiveCfg = Debug|Any CPU");
            StringAssert.Contains(solution, $"{{{guid}}}.Release|Any CPU.Build.0 = Release|Any CPU");

            // Consumer lines of BOTH imported shared projects (v4 evidence:
            // {path}.projitems*{guid-lowercase}*SharedItemsImports = 5 — the
            // consuming project's solution GUID, one line per import) plus
            // the owner lines the Shared/SharedTest scaffolds wrote (= 13).
            StringAssert.Contains(solution, $"Contoso.Shared\\Contoso.Shared.projitems*{{{guid.ToLowerInvariant()}}}*SharedItemsImports = 5");
            StringAssert.Contains(solution, $"Contoso.Shared.Test\\Contoso.Shared.Test.projitems*{{{guid.ToLowerInvariant()}}}*SharedItemsImports = 5");
            Assert.AreEqual(2, Regex.Matches(solution, "SharedItemsImports = 5").Count, "exactly two consumer lines");
            Assert.AreEqual(2, Regex.Matches(solution, "SharedItemsImports = 13").Count, "exactly two owner lines");
        }

        [TestMethod]
        public async Task ScaffoldAsync_Slnx_WritesPlainProjectEntry()
        {
            await ScaffoldChainAsync(shared: true, sharedTest: true, proxyTypes: true);
            var slnx = Path.Combine(_directory, "Contoso.slnx");
            File.WriteAllText(slnx, "<Solution>\n</Solution>\n");
            File.Delete(_solutionFile);
            // --solution anchors at the named file: retarget the helper's
            // solution to the slnx that replaces the deleted .sln.
            _solutionFile = slnx;

            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input())).Success);

            var content = File.ReadAllText(slnx);
            StringAssert.Contains(content, "<Project Path=\"Contoso.Test/Contoso.Test.csproj\" />");
            // The .slnx format has no SharedMSBuildProjectFiles section.
            Assert.IsFalse(content.Contains("SharedItemsImports"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_PreservesPayloadBomState()
        {
            await ScaffoldChainAsync(shared: true, sharedTest: true, proxyTypes: true);
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input())).Success);

            // Visual Studio keeps the per-file encoding of the payload:
            // both 09 payload files are BOM-less.
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "Contoso.Test.csproj")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "README.md")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_RerunSkipsExistingFiles()
        {
            await ScaffoldChainAsync(shared: true, sharedTest: true, proxyTypes: true);
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input())).Success);

            var userFile = Path.Combine(_projectDirectory, "README.md");
            File.WriteAllText(userFile, "customized by user");

            var second = await ScaffoldingEngine.ScaffoldProjectAsync(Input());

            // Run-once (aP): the second scaffold over an existing project
            // fails - the CLI has no --force and nothing is touched.
            Assert.IsFalse(second.Success);
            StringAssert.Contains(second.Errors.Single(), "already exists");
            Assert.AreEqual("customized by user", File.ReadAllText(userFile));
        }

        [TestMethod]
        public async Task ScaffoldAsync_ForceOverwritesFiles()
        {
            await ScaffoldChainAsync(shared: true, sharedTest: true, proxyTypes: true);
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input())).Success);

            var userFile = Path.Combine(_projectDirectory, "README.md");
            File.WriteAllText(userFile, "customized by user");

            var forced = await ScaffoldingEngine.ScaffoldProjectAsync(Input(force: true));

            Assert.IsTrue(forced.Success);
            Assert.AreEqual("Updated", forced.Files.Single(file => file.FilePath == userFile).Action);
            Assert.AreNotEqual("customized by user", File.ReadAllText(userFile));
        }

        [TestMethod]
        public async Task ScaffoldAsync_GeneratedProject_BuildsNet462()
        {
            // The golden proof of P.9: the generated net462 project compiles
            // with plain 'dotnet build' on top of the scaffolded chain — the
            // ProjectReference to the ProxyTypes project resolves, BOTH
            // .projitems imports compile through $(MSBuildThisFileDirectory)
            // (the Shared import is what makes DevKitJson internal-visible)
            // and the pinned packages restore (FakeXrmEasy stays floating
            // "2.*" like the VSIX emits).
            await ScaffoldChainAsync(shared: true, sharedTest: true, proxyTypes: true);
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input())).Success);

            var (exitCode, output) = DotnetBuild(Path.Combine(_projectDirectory, "Contoso.Test.csproj"));
            Assert.AreEqual(0, exitCode, output);
        }

        /// <summary>
        /// The realistic workspace sequence: the Test wizard's three
        /// prerequisites, scaffolded in devkit order (Shared, SharedTest,
        /// ProxyTypes) into the solution named by --solution.
        /// </summary>
        private async Task ScaffoldChainAsync(bool shared, bool sharedTest, bool proxyTypes)
        {
            foreach (var (templateId, projectName, wanted) in new[]
            {
                ("Shared", "Contoso.Shared", shared),
                ("SharedTest", "Contoso.Shared.Test", sharedTest),
                ("ProxyTypes", "Contoso.ProxyTypes", proxyTypes),
            })
            {
                if (!wanted) continue;
                var result = await ScaffoldingEngine.ScaffoldProjectAsync(new ProjectTemplateInput
                {
                    TemplateId = templateId,
                    ProjectName = projectName,
                    OutputDirectory = _directory,
                    SolutionFile = _solutionFile,
                    Offline = true,
                });
                Assert.IsTrue(result.Success, $"{templateId}: {string.Join("; ", result.Errors)}");
            }
        }

        /// <summary>
        /// Assertions shared by every successful scaffold: exactly the two
        /// payload files exist (no .snk, no script, no folder), README.md is
        /// copied verbatim, the csproj is net462 without signing, references
        /// the ProxyTypes project, imports the SharedTest .projitems, carries
        /// the offline DefaultVersions NuGet set with the floating
        /// FakeXrmEasy "2.*" and no tokens survive anywhere.
        /// </summary>
        private async Task AssertCommonPayloadAsync(ScaffoldResult result)
        {
            var expectedFiles = new[]
            {
                Path.Combine(_projectDirectory, "Contoso.Test.csproj"),
                Path.Combine(_projectDirectory, "README.md"),
            };
            Assert.AreEqual(expectedFiles.Length, Directory.GetFiles(_projectDirectory, "*", SearchOption.AllDirectories).Length, "unexpected extra files");
            Assert.AreEqual(0, Directory.GetDirectories(_projectDirectory, "*", SearchOption.AllDirectories).Length, "unexpected folders");
            foreach (var file in expectedFiles)
            {
                Assert.IsTrue(File.Exists(file), $"missing {file}");
            }

            // README.md is copied verbatim (ReplaceParameters=false in the
            // .vstemplate).
            var readmePayload = await TemplatePayload.ReadContentAsync(TemplatePayload.Prefix(TemplateKind.Project, "test") + "README.md");
            Assert.IsNotNull(readmePayload, "the 09 README.md payload must be embedded (Resources.templates.project.test.README.md)");
            Assert.AreEqual(readmePayload.Content, File.ReadAllText(Path.Combine(_projectDirectory, "README.md")));

            var csproj = File.ReadAllText(Path.Combine(_projectDirectory, "Contoso.Test.csproj"));
            StringAssert.Contains(csproj, "<TargetFramework>net462</TargetFramework>");
            StringAssert.Contains(csproj, "<RootNamespace>Contoso.Test</RootNamespace>");
            StringAssert.Contains(csproj, "<AssemblyName>Contoso.Test</AssemblyName>");
            StringAssert.Contains(csproj, "<PlatformTarget>x64</PlatformTarget>");
            StringAssert.Contains(csproj, "<IsTestProject>true</IsTestProject>");
            StringAssert.Contains(csproj, "<NoWarn>MSTEST0001</NoWarn>");
            StringAssert.Contains(csproj, $"<Copyright>Copyright © {DateTime.Now.Year}</Copyright>");
            // No strong-name key in this template.
            Assert.IsFalse(csproj.Contains("<SignAssembly>"));
            Assert.IsFalse(csproj.Contains("<AssemblyOriginatorKeyFile>"));
            // The inter-project wiring: the ProxyTypes ProjectReference and
            // BOTH .projitems imports (Shared first, then SharedTest — the
            // Shared import is the P.9 bug round fix: DevKitJson is
            // internal to the assembly that compiles the Shared code).
            StringAssert.Contains(csproj, "<ProjectReference Include=\"..\\Contoso.ProxyTypes\\Contoso.ProxyTypes.csproj\" />");
            StringAssert.Contains(csproj, "<Import Project=\"..\\Contoso.Shared\\Contoso.Shared.projitems\" Label=\"Shared\" Condition=\"Exists('..\\Contoso.Shared\\Contoso.Shared.projitems')\" />");
            StringAssert.Contains(csproj, "<Import Project=\"..\\Contoso.Shared.Test\\Contoso.Shared.Test.projitems\" Label=\"Shared\" Condition=\"Exists('..\\Contoso.Shared.Test\\Contoso.Shared.Test.projitems')\" />");
            // The offline DefaultVersions NuGet set (FakeXrmEasy stays
            // floating "2.*" — the VSIX emits the same literal).
            StringAssert.Contains(csproj, "Include=\"Bogus\" Version=\"35.6.5\"");
            StringAssert.Contains(csproj, "Include=\"DynamicsCrm.DevKit.Analyzers\" Version=\"4.44.44.44\"");
            StringAssert.Contains(csproj, "Include=\"FakeXrmEasy.v9\" Version=\"2.*\"");
            StringAssert.Contains(csproj, "Include=\"Microsoft.CrmSdk.CoreAssemblies\" Version=\"9.0.2.60\"");
            StringAssert.Contains(csproj, "Include=\"Microsoft.CrmSdk.Workflow\" Version=\"9.0.2.60\"");
            StringAssert.Contains(csproj, "Include=\"MSTest.TestAdapter\" Version=\"4.1.0\"");
            StringAssert.Contains(csproj, "Include=\"MSTest.TestFramework\" Version=\"4.1.0\"");
            StringAssert.Contains(csproj, "Include=\"NSubstitute\" Version=\"6.2.0\"");
            StringAssert.Contains(csproj, $"Generated by DynamicsCrm.DevKit - {Const.VersionBuild}");
            // The README stays visible in Solution Explorer and the trailing
            // build-stamp comment of the payload.
            StringAssert.Contains(csproj, "<None Include=\"README.md\" />");
            StringAssert.Contains(csproj, $"<!-- {Const.VersionBuild} -->");

            // The scaffold reports no post-scaffold hint (the project is
            // complete once rendered — nothing to run afterwards).
            Assert.AreEqual(0, result.Warnings.Count, string.Join("; ", result.Warnings));

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
