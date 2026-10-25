using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates
{
    /// <summary>
    /// P.3 acceptance tests for the Console Core project template: the 7
    /// payload files of CSharpConsoleCoreProjectTemplate.vstemplate rendered
    /// with the connection-type-specific App.cs/AppSettings.json variant,
    /// the .csproj registered in the solution with the
    /// SharedMSBuildProjectFiles consumer line, the net10 AD connection-type
    /// restriction, the idempotency rules on re-runs and the golden
    /// end-to-end proof of the CLI effort: the generated SDK-style net10
    /// project compiles with plain 'dotnet build'.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class ConsoleCoreProjectTemplateHandlerTests
    {
        private static readonly Regex TokenPattern = new Regex(@"\$[A-Za-z][A-Za-z0-9.]*\$", RegexOptions.Compiled);

        private string _directory;
        private string _solutionFile;
        private string _projectDirectory;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-consolecore-handler-tests", Guid.NewGuid().ToString("N"));
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
            _projectDirectory = Path.Combine(_directory, "Contoso.ConsoleCore");

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
                TemplateId = "ConsoleCore",
                ProjectName = "Contoso.ConsoleCore",
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
        /// The realistic workspace sequence: Shared first (gives the solution
        /// its .shproj), then Console Core on top.
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
        public void CreateManifest_MirrorsVstemplateSevenFiles()
        {
            var manifest = ConsoleCoreProjectTemplateHandler.CreateManifest();

            Assert.AreEqual("ConsoleCore", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Project, manifest.Kind);
            Assert.AreEqual(7, manifest.Files.Count);

            // Target names follow CSharpConsoleCoreProjectTemplate.vstemplate.
            Assert.AreEqual("$SafeProjectName$.csproj", manifest.Files[0].TargetFileName);
            Assert.AreEqual("README.md", manifest.Files[1].TargetFileName);
            Assert.AreEqual("App.cs", manifest.Files[2].TargetFileName);
            Assert.AreEqual("AppSettings.json", manifest.Files[3].TargetFileName);
            Assert.AreEqual("Program.cs", manifest.Files[4].TargetFileName);
            Assert.AreEqual(Path.Combine("Lib", "Helper.cs"), manifest.Files[5].TargetFileName);
            Assert.AreEqual(Path.Combine("Lib", "TracingServiceFake.cs"), manifest.Files[6].TargetFileName);

            // ReplaceParameters flags follow the .vstemplate declaration.
            Assert.IsFalse(manifest.Files.Single(file => file.TargetFileName == "README.md").ReplaceParameters);
            Assert.IsTrue(manifest.Files.All(file => file.ReplaceParameters || file.TargetFileName == "README.md"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_WithoutSolution_CreatesProjectOnly()
        {
            // No --solution = create-only: the project lands under --out
            // and NO solution file is touched (the caller adds it by hand,
            // or several solutions in the tree make the pick ambiguous).
            var isolated = Path.Combine(Path.GetTempPath(), "devkit-consolecore-nosln", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(isolated);
            try
            {
                var input = new ProjectTemplateInput
                {
                    TemplateId = "ConsoleCore",
                    ProjectName = "Contoso.ConsoleCore",
                    OutputDirectory = isolated,
                    Offline = true,
                };
                var result = await ScaffoldingEngine.ScaffoldProjectAsync(input);

                Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
                Assert.IsTrue(File.Exists(Path.Combine(isolated, "Contoso.ConsoleCore", "Contoso.ConsoleCore.csproj")));
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
            Assert.IsFalse(Directory.Exists(Path.Combine(_directory, "Contoso.ConsoleCore")));
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
        public async Task ScaffoldAsync_AdConnection_Fails()
        {
            // FormProject parity — mirrored restriction of the net462
            // Console template: AD needs WCF/ServiceModel which is not
            // fully supported on .NET, so Console Core rejects it (and the
            // error points at the .NET Framework Console template).
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("AD")));

            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "The connection type 'AD' is not supported for Console Core project template (.NET Core)");
            StringAssert.Contains(result.Errors[0], "WCF/ServiceModel");
            StringAssert.Contains(result.Errors[0], "Console project template (.NET Framework)");
            Assert.IsFalse(Directory.Exists(_projectDirectory));
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
            StringAssert.Contains(result.Errors[0], "Supported types: Interactive, DeviceCode, ClientSecret, FromPac, OAuth");
        }

        [TestMethod]
        [DataRow("ClientSecret")]
        [DataRow("Interactive")]
        [DataRow("OAuth")]
        [DataRow("DeviceCode")]
        [DataRow("FromPac")]
        public async Task ScaffoldAsync_RendersConnectionTypePayload(string type)
        {
            await ScaffoldSharedAsync();
            var connection = Marker(type);
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(connection));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));

            // App.cs is the connection-type resource variant with the
            // namespace applied — the standard is payload source + token.
            var expectedAppCs = (await TemplatePayload.ReadSharedResourceAsync($"cs.consolecore.App.{type}.cs"))
                .Replace("$NameSpace$", "Contoso.ConsoleCore");
            var appCs = File.ReadAllText(Path.Combine(_projectDirectory, "App.cs"));
            Assert.AreEqual(expectedAppCs, appCs, type);

            // AppSettings.json carries the empty values of the
            // UseProjectEnvironment marker connection (reference: the VSIX
            // output of Dev.AllInOne.ConsoleCore).
            Assert.AreEqual(await ExpectedAppSettingsAsync(connection), File.ReadAllText(Path.Combine(_projectDirectory, "AppSettings.json")), type);

            await AssertCommonPayloadAsync(type);
        }

        [TestMethod]
        public async Task ScaffoldAsync_ExplicitConnectionValues_ReplaceAppSettingsValues()
        {
            await ScaffoldSharedAsync();
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(new CrmConnection
            {
                Type = "ClientSecret",
                Url = "https://contoso.crm.dynamics.com",
                ClientId = "00000000-0000-0000-0000-000000000000",
                ClientSecret = "plain-secret",
            }));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));

            var appSettings = File.ReadAllText(Path.Combine(_projectDirectory, "AppSettings.json"));
            StringAssert.Contains(appSettings, "\"Url\": \"https://contoso.crm.dynamics.com\"");
            StringAssert.Contains(appSettings, "\"ClientId\": \"00000000-0000-0000-0000-000000000000\"");
            StringAssert.Contains(appSettings, "\"ClientSecret\": \"plain-secret\"");
        }

        [TestMethod]
        public async Task ScaffoldAsync_NullConnection_UsesEnvMarker()
        {
            // Non-interactive hosts pass no connection: the handler derives
            // the .env marker like SolutionMutator.EnsureDevKitJsonAsync.
            await ScaffoldSharedAsync();
            var envFile = Path.Combine(_directory, ".env");
            File.WriteAllText(envFile,
                "DEVKIT_AUTH_TYPE=Interactive\r\n" +
                "DEVKIT_URL=https://contoso.crm.dynamics.com\r\n");

            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input());
            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));

            var expectedAppCs = (await TemplatePayload.ReadSharedResourceAsync("cs.consolecore.App.Interactive.cs"))
                .Replace("$NameSpace$", "Contoso.ConsoleCore");
            Assert.AreEqual(expectedAppCs, File.ReadAllText(Path.Combine(_projectDirectory, "App.cs")));
            Assert.AreEqual(await ExpectedAppSettingsAsync(Marker("Interactive")), File.ReadAllText(Path.Combine(_projectDirectory, "AppSettings.json")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_NullConnectionEnvAD_Fails()
        {
            // A .env with an unsupported type must hard-error, not silently
            // fall back.
            await ScaffoldSharedAsync();
            File.WriteAllText(Path.Combine(_directory, ".env"), "DEVKIT_AUTH_TYPE=AD\r\n");

            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input());
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "'AD' is not supported for Console Core project template");
        }

        [TestMethod]
        public async Task ScaffoldAsync_NoConnectionNoEnv_BakesClientSecretPlaceholders()
        {
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input());
            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));

            var expectedAppCs = (await TemplatePayload.ReadSharedResourceAsync("cs.consolecore.App.ClientSecret.cs"))
                .Replace("$NameSpace$", "Contoso.ConsoleCore");
            Assert.AreEqual(expectedAppCs, File.ReadAllText(Path.Combine(_projectDirectory, "App.cs")));
            Assert.AreEqual(await ExpectedAppSettingsAsync(new CrmConnection { Type = "ClientSecret" }), File.ReadAllText(Path.Combine(_projectDirectory, "AppSettings.json")));
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
                $"Project\\(\"{SolutionMutator.SdkCSharpProjectTypeGuid}\"\\) = \"Contoso\\.ConsoleCore\", \"Contoso\\.ConsoleCore\\\\Contoso\\.ConsoleCore\\.csproj\", \"\\{{([0-9A-Fa-f-]+)\\}}\"");
            Assert.IsTrue(entry.Success, "missing Console Core project entry");
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
        public async Task ScaffoldAsync_ConsoleCoreBeforeShared_AddsConsumerLineOnRerun()
        {
            // The project entry may exist before the shared project does:
            // the rerun must attach the consumer line to the EXISTING entry
            // GUID, not mint a second one.
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);
            var before = File.ReadAllText(_solutionFile);
            var guid = Regex.Match(before, "Contoso\\.ConsoleCore\\\\Contoso\\.ConsoleCore\\.csproj\", \"\\{([0-9A-Fa-f-]+)\\}\"").Groups[1].Value;

            await ScaffoldSharedAsync();
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")));
            Assert.IsTrue(result.Success);

            var after = File.ReadAllText(_solutionFile);
            StringAssert.Contains(after, $"Contoso.Shared\\Contoso.Shared.projitems*{{{guid.ToLowerInvariant()}}}*SharedItemsImports = 5");
            Assert.AreEqual(1, after.Split('\n').Count(line => line.Contains("Contoso.ConsoleCore.csproj\",")));
            Assert.AreEqual(1, after.Split('\n').Count(line => line.Contains("Contoso.Shared.shproj\",")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_NoSharedProject_ScaffoldsWithoutConsumerLine()
        {
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")));
            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));

            // The csproj still imports the fallback shared project name and
            // guards it with Condition Exists; the solution has no shared
            // project, so no SharedMSBuildProjectFiles line is written. The
            // VSIX Console Core wizard does not create the DevKit json
            // stores either (that belongs to the Shared wizard).
            var csproj = File.ReadAllText(Path.Combine(_projectDirectory, "Contoso.ConsoleCore.csproj"));
            StringAssert.Contains(csproj, "..\\Contoso.Shared\\Contoso.Shared.projitems");
            var solution = File.ReadAllText(_solutionFile);
            Assert.IsFalse(solution.Contains("SharedItemsImports"));
            Assert.IsFalse(File.Exists(Path.Combine(_directory, "DynamicsCrm.DevKit.Cli.json")));
            Assert.IsFalse(File.Exists(Path.Combine(_directory, "DynamicsCrm.DevKit.json")));
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
            StringAssert.Contains(content, "<Project Path=\"Contoso.ConsoleCore/Contoso.ConsoleCore.csproj\" />");
            // The .slnx format has no SharedMSBuildProjectFiles section.
            Assert.IsFalse(content.Contains("SharedItemsImports"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_PreservesPayloadBomState()
        {
            await ScaffoldSharedAsync();
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            // Visual Studio keeps the per-file encoding of the payload:
            // App.cs/Program.cs/Helper.cs/TracingServiceFake.cs carry a BOM,
            // AppSettings.json/csproj/README.md do not.
            Assert.IsTrue(HasBom(Path.Combine(_projectDirectory, "App.cs")));
            Assert.IsTrue(HasBom(Path.Combine(_projectDirectory, "Program.cs")));
            Assert.IsTrue(HasBom(Path.Combine(_projectDirectory, "Lib", "Helper.cs")));
            Assert.IsTrue(HasBom(Path.Combine(_projectDirectory, "Lib", "TracingServiceFake.cs")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "AppSettings.json")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "Contoso.ConsoleCore.csproj")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "README.md")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_RerunSkipsAndNeverTouchesUserFiles()
        {
            await ScaffoldSharedAsync();
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var userFile = Path.Combine(_projectDirectory, "App.cs");
            File.WriteAllText(userFile, "// customized by user");

            var second = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")));

            Assert.IsTrue(second.Success);
            Assert.IsTrue(second.Warnings.Any(warning => warning.Contains("already exists")));
            Assert.IsTrue(second.Files.All(file => file.Action == "Skipped" || file.Action == "Unchanged"));
            Assert.AreEqual("// customized by user", File.ReadAllText(userFile));
        }

        [TestMethod]
        public async Task ScaffoldAsync_ForceOverwritesChangedFiles()
        {
            await ScaffoldSharedAsync();
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var userFile = Path.Combine(_projectDirectory, "App.cs");
            File.WriteAllText(userFile, "// customized by user");

            var forced = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret"), force: true));

            Assert.IsTrue(forced.Success);
            Assert.AreEqual("Updated", forced.Files.Single(file => file.FilePath == userFile).Action);
            Assert.AreNotEqual("// customized by user", File.ReadAllText(userFile));
        }

        [TestMethod]
        public async Task ScaffoldAsync_GeneratedProject_BuildsWithDotnetBuild()
        {
            // The golden proof of the whole CLI effort: the generated net10
            // SDK-style project (including the imported Shared sources)
            // compiles with plain 'dotnet build' — the one template that
            // builds natively on every platform.
            await ScaffoldSharedAsync();
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var (exitCode, output) = DotnetBuild(Path.Combine(_projectDirectory, "Contoso.ConsoleCore.csproj"));
            Assert.AreEqual(0, exitCode, output);
        }

        /// <summary>
        /// Assertions shared by every successful scaffold: the 7 payload
        /// files exist, tokens are fully applied, the csproj is net10.0 with
        /// the TAB indentation of the payload, the offline DefaultVersions
        /// NuGet set and the shared import, and no $token$ survives
        /// anywhere.
        /// </summary>
        private async Task AssertCommonPayloadAsync(string type)
        {
            var expectedFiles = new[]
            {
                Path.Combine(_projectDirectory, "Contoso.ConsoleCore.csproj"),
                Path.Combine(_projectDirectory, "README.md"),
                Path.Combine(_projectDirectory, "App.cs"),
                Path.Combine(_projectDirectory, "AppSettings.json"),
                Path.Combine(_projectDirectory, "Program.cs"),
                Path.Combine(_projectDirectory, "Lib", "Helper.cs"),
                Path.Combine(_projectDirectory, "Lib", "TracingServiceFake.cs"),
            };
            foreach (var file in expectedFiles)
            {
                Assert.IsTrue(File.Exists(file), $"missing {file}");
            }

            // README.md is copied verbatim (ReplaceParameters=false in the
            // .vstemplate) — build-date placeholder included.
            var readmePayload = await TemplatePayload.ReadContentAsync(TemplatePayload.Prefix(TemplateKind.Project, "consolecore") + "README.md");
            Assert.AreEqual(readmePayload.Content, File.ReadAllText(Path.Combine(_projectDirectory, "README.md")));

            // Lib payload files expand their nested resource tokens.
            var expectedHelper = (await TemplatePayload.ReadSharedResourceAsync("Helper.cs"))
                .Replace("$NameSpace$", "Contoso.ConsoleCore");
            Assert.AreEqual(expectedHelper, File.ReadAllText(Path.Combine(_projectDirectory, "Lib", "Helper.cs")));
            var expectedTracing = (await TemplatePayload.ReadSharedResourceAsync("TracingServiceFake.cs"))
                .Replace("$NameSpace$", "Contoso.ConsoleCore");
            Assert.AreEqual(expectedTracing, File.ReadAllText(Path.Combine(_projectDirectory, "Lib", "TracingServiceFake.cs")));
            var expectedProgram = (await TemplatePayload.ReadSharedResourceAsync("Program.cs"))
                .Replace("$NameSpace$", "Contoso.ConsoleCore");
            Assert.AreEqual(expectedProgram, File.ReadAllText(Path.Combine(_projectDirectory, "Program.cs")));

            var csproj = File.ReadAllText(Path.Combine(_projectDirectory, "Contoso.ConsoleCore.csproj"));
            StringAssert.Contains(csproj, "<TargetFramework>net10.0</TargetFramework>");
            // The ConsoleCore payload indents with TABs (the net462 Console
            // template uses spaces) — keep the payload bytes intact.
            StringAssert.Contains(csproj, "\n\t<PropertyGroup>");
            StringAssert.Contains(csproj, "<RootNamespace>Contoso.ConsoleCore</RootNamespace>");
            StringAssert.Contains(csproj, "<AssemblyName>Contoso.ConsoleCore</AssemblyName>");
            StringAssert.Contains(csproj, $"<Copyright>Copyright © {DateTime.Now.Year}</Copyright>");
            StringAssert.Contains(csproj, "..\\Contoso.Shared\\Contoso.Shared.projitems");
            // NuGet versions resolve offline through the DefaultVersions
            // fallback of NuGetHelper.
            StringAssert.Contains(csproj, "Include=\"Azure.Identity\" Version=\"1.21.0\"");
            StringAssert.Contains(csproj, "Include=\"DynamicsCrm.DevKit.Analyzers\" Version=\"4.44.44.44\"");
            StringAssert.Contains(csproj, "Include=\"Microsoft.Extensions.Configuration\" Version=\"10.0.13\"");
            StringAssert.Contains(csproj, "Include=\"Microsoft.Extensions.Configuration.Json\" Version=\"10.0.13\"");
            StringAssert.Contains(csproj, "Include=\"Microsoft.Identity.Client.Extensions.Msal\" Version=\"4.91.1\"");
            StringAssert.Contains(csproj, "Include=\"Microsoft.PowerPlatform.Dataverse.Client\" Version=\"1.2.27\"");
            StringAssert.Contains(csproj, "Include=\"NSubstitute\" Version=\"6.2.0\"");
            StringAssert.Contains(csproj, $"Generated by DynamicsCrm.DevKit - {Const.VersionBuild}");

            foreach (var file in Directory.GetFiles(_projectDirectory, "*", SearchOption.AllDirectories))
            {
                var leftover = TokenPattern.Match(File.ReadAllText(file));
                Assert.IsFalse(leftover.Success, $"{file} still contains {leftover.Value}");
            }
        }

        /// <summary>
        /// The expected AppSettings.json text for a connection: the value
        /// tokens of the type's resource variant filled the same way
        /// TokenEngine.SetConnectionValues fills them (marker connections
        /// carry empty values, FromPac keeps its profile).
        /// </summary>
        private static async Task<string> ExpectedAppSettingsAsync(CrmConnection connection)
        {
            var content = await TemplatePayload.ReadSharedResourceAsync($"cs.consolecore.AppSettings.{connection.Type}.json");
            return content
                .Replace("$UrlValue$", connection.Url ?? string.Empty)
                .Replace("$UserNameValue$", connection.UserName ?? string.Empty)
                .Replace("$PasswordValue$", connection.Password == null ? string.Empty : Helper.DecryptString(connection.Password) ?? string.Empty)
                .Replace("$ClientIdValue$", connection.ClientId ?? string.Empty)
                .Replace("$ClientSecretValue$", connection.ClientSecret == null ? string.Empty : Helper.DecryptString(connection.ClientSecret) ?? string.Empty)
                .Replace("$PacProfileValue$", connection.PacProfile ?? string.Empty);
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
