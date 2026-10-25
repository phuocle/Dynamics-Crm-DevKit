using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates
{
    /// <summary>
    /// P.7 acceptance tests for the SharedTest project template: the 12
    /// payload files of CSharpSharedTestProjectTemplate.vstemplate rendered
    /// with tokens applied, the .shproj registered in the solution the way
    /// Visual Studio does, DynamicsCrm.DevKit.Cli.json (+ the VSIX
    /// connection store) at the solution root and the idempotency rules on
    /// re-runs.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class SharedTestProjectTemplateHandlerTests
    {
        private static readonly Regex TokenPattern = new Regex(@"\$[A-Za-z][A-Za-z0-9]*\$", RegexOptions.Compiled);

        private string _directory;
        private string _solutionFile;
        private string _projectDirectory;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-sharedtest-handler-tests", Guid.NewGuid().ToString("N"));
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
            _projectDirectory = Path.Combine(_directory, "Contoso.Shared.Test");

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
                TemplateId = "SharedTest",
                ProjectName = "Contoso.Shared.Test",
                OutputDirectory = _directory,
                // The solution to register in is now explicit (--solution):
                // the walk-up auto-pick is gone.
                SolutionFile = _solutionFile,
                Force = force,
                Offline = true,
            };
        }

        [TestMethod]
        public void CreateManifest_MirrorsVstemplateTwelveFiles()
        {
            var manifest = SharedTestProjectTemplateHandler.CreateManifest();

            Assert.AreEqual("SharedTest", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Project, manifest.Kind);
            Assert.AreEqual(12, manifest.Files.Count);

            var targets = manifest.Files.Select(file => file.TargetFileName.Replace('\\', '/')).ToList();
            CollectionAssert.Contains(targets, "$SafeProjectName$.shproj");
            CollectionAssert.Contains(targets, "$NameSpace$.projitems");
            CollectionAssert.Contains(targets, "README.md");
            CollectionAssert.Contains(targets, "Lib/Guids.cs");
            CollectionAssert.Contains(targets, "Lib/Extension.cs");
            CollectionAssert.Contains(targets, "Lib/FakerHelper.cs");
            CollectionAssert.Contains(targets, "Lib/TestHelper.cs");
            CollectionAssert.Contains(targets, "Lib/TestTracingService.cs");
            CollectionAssert.Contains(targets, "Lib/PluginContextBuilder.cs");
            CollectionAssert.Contains(targets, "Lib/TestDataLoader.cs");
            CollectionAssert.Contains(targets, "FakeXrmEasyTestBase.cs");
            CollectionAssert.Contains(targets, "Executor/CalculateRollupFieldRequestExecutor.cs");

            // ReplaceParameters flags follow the .vstemplate declaration:
            // only README.md is copied verbatim.
            Assert.IsFalse(manifest.Files.Single(file => file.TargetFileName == "README.md").ReplaceParameters);
            Assert.IsTrue(manifest.Files.Where(file => file.TargetFileName != "README.md").All(file => file.ReplaceParameters));

            // Properties/AssemblyInfo.cs builds the template dll only and is
            // not part of the .vstemplate — it scaffolds nowhere.
            CollectionAssert.DoesNotContain(targets, "Properties/AssemblyInfo.cs");
        }

        [TestMethod]
        public async Task ScaffoldAsync_CreatesPayloadSolutionAndCliJson()
        {
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual(0, result.Errors.Count);

            // The 12 payload files, renamed after the project.
            var expected = new[]
            {
                Path.Combine(_projectDirectory, "Contoso.Shared.Test.shproj"),
                Path.Combine(_projectDirectory, "Contoso.Shared.Test.projitems"),
                Path.Combine(_projectDirectory, "README.md"),
                Path.Combine(_projectDirectory, "Lib", "Guids.cs"),
                Path.Combine(_projectDirectory, "Lib", "Extension.cs"),
                Path.Combine(_projectDirectory, "Lib", "FakerHelper.cs"),
                Path.Combine(_projectDirectory, "Lib", "TestHelper.cs"),
                Path.Combine(_projectDirectory, "Lib", "TestTracingService.cs"),
                Path.Combine(_projectDirectory, "Lib", "PluginContextBuilder.cs"),
                Path.Combine(_projectDirectory, "Lib", "TestDataLoader.cs"),
                Path.Combine(_projectDirectory, "FakeXrmEasyTestBase.cs"),
                Path.Combine(_projectDirectory, "Executor", "CalculateRollupFieldRequestExecutor.cs"),
            };
            foreach (var file in expected)
            {
                Assert.IsTrue(File.Exists(file), $"missing {file}");
            }

            // DynamicsCrm.DevKit.Cli.json at the solution root (wizard
            // parity: SharedTest.cs calls AddDynamicsCrmDevKitCliJsonAsync).
            var cliJson = Path.Combine(_directory, "DynamicsCrm.DevKit.Cli.json");
            Assert.IsTrue(File.Exists(cliJson));

            // DynamicsCrm.DevKit.json (VSIX connection store) at the solution
            // root as well — empty store here because the fixture has no .env.
            var devKitJson = Path.Combine(_directory, "DynamicsCrm.DevKit.json");
            Assert.IsTrue(File.Exists(devKitJson));
            StringAssert.Contains(File.ReadAllText(devKitJson), "\"CrmConnections\"");

            // No $token$ may survive in any generated file.
            foreach (var file in Directory.GetFiles(_projectDirectory, "*", SearchOption.AllDirectories))
            {
                var content = File.ReadAllText(file);
                var leftover = TokenPattern.Match(content);
                Assert.IsFalse(leftover.Success, $"{file} still contains {leftover.Value}");
            }

            // The .shproj/.projitems pair shares one GUID (lower case, no braces).
            var shprojContent = File.ReadAllText(expected[0]);
            var projitemsContent = File.ReadAllText(expected[1]);
            var guid = Regex.Match(shprojContent, "<ProjectGuid>([0-9a-f-]{36})</ProjectGuid>").Groups[1].Value;
            Assert.AreNotEqual(string.Empty, guid);
            StringAssert.Contains(projitemsContent, $"<SharedGUID>{guid}</SharedGUID>");
            StringAssert.Contains(projitemsContent, "<Import_RootNamespace>Contoso.Shared.Test</Import_RootNamespace>");
            StringAssert.Contains(shprojContent, "<Import Project=\"Contoso.Shared.Test.projitems\" Label=\"Shared\" />");

            // The FakeXrmEasy base imports the solution's ProxyTypes project.
            var testBase = File.ReadAllText(Path.Combine(_projectDirectory, "FakeXrmEasyTestBase.cs"));
            StringAssert.Contains(testBase, "using Contoso.ProxyTypes;");
            StringAssert.Contains(testBase, "namespace Contoso.Shared.Test");

            // The solution references the shared project the way VS does.
            var solution = File.ReadAllText(_solutionFile);
            StringAssert.Contains(solution, $"Project(\"{SolutionMutator.SharedProjectTypeGuid}\") = \"Contoso.Shared.Test\", \"Contoso.Shared.Test\\Contoso.Shared.Test.shproj\", \"{{{guid.ToUpperInvariant()}}}\"");
            StringAssert.Contains(solution, $"Contoso.Shared.Test\\Contoso.Shared.Test.projitems*{{{guid}}}*SharedItemsImports = 13");
            Assert.IsFalse(solution.Contains($"{{{guid.ToUpperInvariant()}}}.Debug"), "shared project must not get configuration entries");
        }

        [TestMethod]
        public async Task ScaffoldAsync_PreservesPayloadBomState()
        {
            // Visual Studio keeps the per-file encoding of the payload:
            // Shared.projitems and the rollup executor carry a UTF-8 BOM,
            // every other payload file has none.
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input())).Success);

            CollectionAssert.AreEqual(new byte[] { 0xEF, 0xBB, 0xBF }, ReadHead(Path.Combine(_projectDirectory, "Contoso.Shared.Test.projitems"), 3));
            CollectionAssert.AreEqual(new byte[] { 0xEF, 0xBB, 0xBF }, ReadHead(Path.Combine(_projectDirectory, "Executor", "CalculateRollupFieldRequestExecutor.cs"), 3));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "Contoso.Shared.Test.shproj")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "README.md")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "Lib", "TestHelper.cs")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "FakeXrmEasyTestBase.cs")));
        }

        private static byte[] ReadHead(string file, int count)
        {
            using (var stream = File.OpenRead(file))
            {
                var buffer = new byte[count];
                var read = 0;
                while (read < count)
                {
                    var chunk = stream.Read(buffer, read, count - read);
                    if (chunk == 0) break;
                    read += chunk;
                }
                return buffer;
            }
        }

        private static bool HasBom(string file)
        {
            return ReadHead(file, 3).SequenceEqual(new byte[] { 0xEF, 0xBB, 0xBF });
        }

        [TestMethod]
        public async Task ScaffoldAsync_RerunSkipsAndNeverTouchesUserFiles()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input())).Success);

            var userFile = Path.Combine(_projectDirectory, "Lib", "Guids.cs");
            File.WriteAllText(userFile, "// customized by user");

            var second = await ScaffoldingEngine.ScaffoldProjectAsync(Input());

            Assert.IsTrue(second.Success);
            Assert.IsTrue(second.Warnings.Any(warning => warning.Contains("already exists")));
            Assert.IsTrue(second.Files.All(file => file.Action == "Skipped" || file.Action == "Unchanged"));
            Assert.AreEqual("// customized by user", File.ReadAllText(userFile));
        }

        [TestMethod]
        public async Task ScaffoldAsync_ForceOverwritesChangedFiles()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input())).Success);

            var userFile = Path.Combine(_projectDirectory, "Lib", "Guids.cs");
            File.WriteAllText(userFile, "// customized by user");

            var forced = await ScaffoldingEngine.ScaffoldProjectAsync(Input(force: true));

            Assert.IsTrue(forced.Success);
            Assert.AreEqual("Updated", forced.Files.Single(file => file.FilePath == userFile).Action);
            Assert.AreNotEqual("// customized by user", File.ReadAllText(userFile));
        }

        [TestMethod]
        public async Task ScaffoldAsync_WithoutSolution_CreatesProjectOnly()
        {
            // No --solution = create-only: the SharedTest project lands
            // under --out (Cli.json still ensured at --out) and NO solution
            // file is touched — with several solutions in one tree the CLI
            // cannot pick one.
            var isolated = Path.Combine(Path.GetTempPath(), "devkit-sharedtest-nosln", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(isolated);
            try
            {
                var input = new ProjectTemplateInput
                {
                    TemplateId = "SharedTest",
                    ProjectName = "Contoso.Shared.Test",
                    OutputDirectory = isolated,
                    Offline = true,
                };
                var result = await ScaffoldingEngine.ScaffoldProjectAsync(input);

                Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
                Assert.IsTrue(File.Exists(Path.Combine(isolated, "Contoso.Shared.Test", "Contoso.Shared.Test.shproj")));
                Assert.IsTrue(File.Exists(Path.Combine(isolated, "DynamicsCrm.DevKit.Cli.json")));
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
            var input = Input();
            input.SolutionFile = Path.Combine(_directory, "Missing.sln");
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "solution file not found");
            Assert.IsFalse(Directory.Exists(Path.Combine(_directory, "Contoso.Shared.Test")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_InvalidProjectName_Fails()
        {
            var input = Input();
            input.ProjectName = "Bad:Name";
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(input);

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "invalid project name");
            Assert.IsFalse(Directory.Exists(Path.Combine(_directory, "Bad:Name")));
        }
    }
}
