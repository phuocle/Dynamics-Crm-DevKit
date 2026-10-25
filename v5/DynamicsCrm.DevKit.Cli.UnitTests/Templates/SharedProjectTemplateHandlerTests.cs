using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates
{
    /// <summary>
    /// P.1 acceptance tests for the Shared project template: the 11 payload
    /// files of CSharpSharedProjectTemplate.vstemplate rendered with tokens
    /// applied, the .shproj registered in the solution the way Visual
    /// Studio does, DynamicsCrm.DevKit.Cli.json at the solution root and
    /// the idempotency rules on re-runs.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class SharedProjectTemplateHandlerTests
    {
        private static readonly Regex TokenPattern = new Regex(@"\$[A-Za-z][A-Za-z0-9]*\$", RegexOptions.Compiled);

        private string _directory;
        private string _solutionFile;
        private string _projectDirectory;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-shared-handler-tests", Guid.NewGuid().ToString("N"));
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
            _projectDirectory = Path.Combine(_directory, "Contoso.Shared");

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
                TemplateId = "Shared",
                ProjectName = "Contoso.Shared",
                OutputDirectory = _directory,
                Force = force,
            };
        }

        private static string GeneratorTarget()
        {
            var isWindows = System.Runtime.InteropServices.RuntimeInformation.IsOSPlatform(System.Runtime.InteropServices.OSPlatform.Windows);
            return isWindows ? Path.Combine("Entities", "generator.bat") : Path.Combine("Entities", "generator.sh");
        }

        [TestMethod]
        public void CreateManifest_MirrorsVstemplateElevenFiles()
        {
            var manifest = SharedProjectTemplateHandler.CreateManifest();

            Assert.AreEqual("Shared", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Project, manifest.Kind);
            Assert.AreEqual(11, manifest.Files.Count);

            var targets = manifest.Files.Select(file => file.TargetFileName.Replace('\\', '/')).ToList();
            CollectionAssert.Contains(targets, "Contoso.Shared.shproj".Replace("Contoso.Shared", "$SafeProjectName$"));
            CollectionAssert.Contains(targets, "$NameSpace$.projitems");
            CollectionAssert.Contains(targets, "README.md");
            CollectionAssert.Contains(targets, "Lib/Date.cs");
            CollectionAssert.Contains(targets, "Lib/PluginCore.cs");
            CollectionAssert.Contains(targets, "Lib/Extension.cs");
            CollectionAssert.Contains(targets, "Lib/EntityBase.cs");
            CollectionAssert.Contains(targets, "Lib/DevKitJson.cs");
            CollectionAssert.Contains(targets, "Lib/PluginExecutionContext7Wrapper.cs");
            CollectionAssert.Contains(targets, "Lib/DocumentMethodAttribute.cs");
            CollectionAssert.Contains(targets, "Entities/generator.bat");

            // ReplaceParameters flags follow the .vstemplate declaration.
            Assert.IsFalse(manifest.Files.Single(file => file.TargetFileName == "README.md").ReplaceParameters);
            Assert.IsFalse(manifest.Files.Single(file => file.TargetFileName.EndsWith("Date.cs")).ReplaceParameters);
            Assert.IsFalse(manifest.Files.Single(file => file.TargetFileName.EndsWith("PluginExecutionContext7Wrapper.cs")).ReplaceParameters);

            // Exactly one platform-specific generator runner: .bat on
            // Windows, executable .sh on macOS/Linux.
            var isWindows = System.Runtime.InteropServices.RuntimeInformation.IsOSPlatform(System.Runtime.InteropServices.OSPlatform.Windows);
            var generator = manifest.Files.Single(file => file.TargetFileName.StartsWith("Entities" + Path.DirectorySeparatorChar + "generator."));
            Assert.AreEqual(isWindows ? Path.Combine("Entities", "generator.bat") : Path.Combine("Entities", "generator.sh"), generator.TargetFileName);
        }

        [TestMethod]
        public async Task LateBoundGeneratorResources_AreCrossPlatformAndClean()
        {
            // The bat is the single source of truth shared with the VSIX —
            // the interactive "devkit not installed" block was removed.
            var bat = await TemplatePayload.ReadSharedResourceAsync("bat.generator.latebound.bat");
            StringAssert.Contains(bat, "devkit generator");
            Assert.IsFalse(bat.Contains("where devkit"));

            // The bash twin runs on macOS/Linux and must stay LF-only.
            var sh = await TemplatePayload.ReadSharedResourceAsync("sh.generator.latebound.sh");
            StringAssert.Contains(sh, "#!/usr/bin/env bash");
            StringAssert.Contains(sh, "devkit generator");
            Assert.IsFalse(sh.Contains("\r"));

            // TokenEngine exposes it as a resource token (null connection
            // strips the CLI connection args, .env is the fallback).
            var tokens = new Dictionary<string, string>();
            await TokenEngine.SetEmbeddedResourceTokensAsync(tokens, null);
            Assert.IsTrue(tokens.ContainsKey("$generator.latebound.sh$"));
            StringAssert.Contains(tokens["$generator.latebound.sh$"], "devkit generator");
            Assert.IsFalse(tokens["$generator.latebound.sh$"].Contains("$CliConnectionArgs$"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_CreatesPayloadSolutionAndCliJson()
        {
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input());

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.AreEqual(0, result.Errors.Count);

            // The 11 payload files, renamed after the project.
            var expected = new[]
            {
                Path.Combine(_projectDirectory, "Contoso.Shared.shproj"),
                Path.Combine(_projectDirectory, "Contoso.Shared.projitems"),
                Path.Combine(_projectDirectory, "README.md"),
                Path.Combine(_projectDirectory, "Lib", "Date.cs"),
                Path.Combine(_projectDirectory, "Lib", "PluginCore.cs"),
                Path.Combine(_projectDirectory, "Lib", "Extension.cs"),
                Path.Combine(_projectDirectory, "Lib", "EntityBase.cs"),
                Path.Combine(_projectDirectory, "Lib", "DevKitJson.cs"),
                Path.Combine(_projectDirectory, "Lib", "PluginExecutionContext7Wrapper.cs"),
                Path.Combine(_projectDirectory, "Lib", "DocumentMethodAttribute.cs"),
                Path.Combine(_projectDirectory, GeneratorTarget()),
            };
            foreach (var file in expected)
            {
                Assert.IsTrue(File.Exists(file), $"missing {file}");
            }

            // DynamicsCrm.DevKit.Cli.json at the solution root.
            var cliJson = Path.Combine(_directory, "DynamicsCrm.DevKit.Cli.json");
            Assert.IsTrue(File.Exists(cliJson));
            StringAssert.Contains(File.ReadAllText(cliJson), "Contoso.*.Test.dll");

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
            StringAssert.Contains(projitemsContent, "<Import_RootNamespace>Contoso.Shared</Import_RootNamespace>");
            StringAssert.Contains(shprojContent, "<Import Project=\"Contoso.Shared.projitems\" Label=\"Shared\" />");
            StringAssert.Contains(File.ReadAllText(Path.Combine(_projectDirectory, "Lib", "Extension.cs")), "using Contoso.Shared;");

            // The solution references the shared project the way VS does.
            var solution = File.ReadAllText(_solutionFile);
            StringAssert.Contains(solution, $"Project(\"{SolutionMutator.SharedProjectTypeGuid}\") = \"Contoso.Shared\", \"Contoso.Shared\\Contoso.Shared.shproj\", \"{{{guid.ToUpperInvariant()}}}\"");
            StringAssert.Contains(solution, $"Contoso.Shared\\Contoso.Shared.projitems*{{{guid}}}*SharedItemsImports = 13");
            Assert.IsFalse(solution.Contains($"{{{guid.ToUpperInvariant()}}}.Debug"), "shared project must not get configuration entries");

            // The late-bound generator runner was expanded from the resource
            // (bat on Windows, bash script elsewhere) and carries no leftover
            // connection token.
            var generator = File.ReadAllText(Path.Combine(_projectDirectory, GeneratorTarget()));
            StringAssert.Contains(generator, "devkit generator");
            Assert.IsFalse(generator.Contains("$CliConnectionArgs$"));
            Assert.IsFalse(generator.Contains("where devkit"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_PreservesPayloadBomState()
        {
            // Visual Studio keeps the per-file encoding of the payload:
            // most template files have no BOM, PluginExecutionContext7Wrapper.cs
            // (added to the payload later) carries a UTF-8 BOM.
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input())).Success);

            CollectionAssert.AreEqual(new byte[] { 0xEF, 0xBB, 0xBF }, ReadHead(Path.Combine(_projectDirectory, "Lib", "PluginExecutionContext7Wrapper.cs"), 3));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "Lib", "Date.cs")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "Contoso.Shared.shproj")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "Contoso.Shared.projitems")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "Entities", "generator.bat")));
        }

        private static byte[] ReadHead(string file, int count)
        {
            using (var stream = File.OpenRead(file))
            {
                var buffer = new byte[count];
                stream.Read(buffer, 0, count);
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

            var userFile = Path.Combine(_projectDirectory, "Lib", "Date.cs");
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

            var userFile = Path.Combine(_projectDirectory, "Lib", "Date.cs");
            File.WriteAllText(userFile, "// customized by user");

            var forced = await ScaffoldingEngine.ScaffoldProjectAsync(Input(force: true));

            Assert.IsTrue(forced.Success);
            Assert.AreEqual("Updated", forced.Files.Single(file => file.FilePath == userFile).Action);
            Assert.AreNotEqual("// customized by user", File.ReadAllText(userFile));
        }

        [TestMethod]
        public async Task ScaffoldAsync_WithoutSolution_Fails()
        {
            var isolated = Path.Combine(Path.GetTempPath(), "devkit-shared-nosln", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(isolated);
            try
            {
                var input = new ProjectTemplateInput
                {
                    TemplateId = "Shared",
                    ProjectName = "Contoso.Shared",
                    OutputDirectory = isolated,
                };
                var result = await ScaffoldingEngine.ScaffoldProjectAsync(input);

                Assert.IsFalse(result.Success);
                StringAssert.Contains(result.Errors[0], "no .sln");
            }
            finally
            {
                Directory.Delete(isolated, true);
            }
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

        [TestMethod]
        public void IsValidProjectName_PortsVsixRules()
        {
            Assert.IsTrue(SharedProjectTemplateHandler.IsValidProjectName("Contoso.Shared"));
            Assert.IsFalse(SharedProjectTemplateHandler.IsValidProjectName("Contoso:Shared"));
            Assert.IsFalse(SharedProjectTemplateHandler.IsValidProjectName("Contoso?Shared"));
            Assert.IsFalse(SharedProjectTemplateHandler.IsValidProjectName("Contoso*Shared"));
            Assert.IsFalse(SharedProjectTemplateHandler.IsValidProjectName(null));
        }
    }
}
