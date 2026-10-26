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
    /// P.2 acceptance tests for the Console project template: the 7 payload
    /// files of CSharpConsoleProjectTemplate.vstemplate rendered with the
    /// connection-type-specific App.cs/App.config variant, the .csproj
    /// registered in the solution with the SharedMSBuildProjectFiles
    /// consumer line, the net462 connection-type restriction and the
    /// idempotency rules on re-runs.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class ConsoleProjectTemplateHandlerTests
    {
        private static readonly Regex TokenPattern = new Regex(@"\$[A-Za-z][A-Za-z0-9.]*\$", RegexOptions.Compiled);

        private string _directory;
        private string _solutionFile;
        private string _projectDirectory;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-console-handler-tests", Guid.NewGuid().ToString("N"));
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
            _projectDirectory = Path.Combine(_directory, "Contoso.Console");

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
                TemplateId = "Console",
                ProjectName = "Contoso.Console",
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
        /// its .shproj), then Console on top.
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

        private static CrmConnection Marker(string type)
        {
            return new CrmConnection { Name = type, Type = type, UseProjectEnvironment = true };
        }

        [TestMethod]
        public void CreateManifest_MirrorsVstemplateSevenFiles()
        {
            var manifest = ConsoleProjectTemplateHandler.CreateManifest();

            Assert.AreEqual("Console", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Project, manifest.Kind);
            Assert.AreEqual(7, manifest.Files.Count);

            // Target names follow CSharpConsoleProjectTemplate.vstemplate.
            Assert.AreEqual("$SafeProjectName$.csproj", manifest.Files[0].TargetFileName);
            Assert.AreEqual("README.md", manifest.Files[1].TargetFileName);
            Assert.AreEqual("App.cs", manifest.Files[2].TargetFileName);
            Assert.AreEqual("Program.cs", manifest.Files[3].TargetFileName);
            Assert.AreEqual("App.config", manifest.Files[4].TargetFileName);
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
            var isolated = Path.Combine(Path.GetTempPath(), "devkit-console-nosln", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(isolated);
            try
            {
                var input = new ProjectTemplateInput
                {
                    TemplateId = "Console",
                    ProjectName = "Contoso.Console",
                    OutputDirectory = isolated,
                    Offline = true,
                };
                var result = await ScaffoldingEngine.ScaffoldProjectAsync(input);

                Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
                Assert.IsTrue(File.Exists(Path.Combine(isolated, "Contoso.Console", "Contoso.Console.csproj")));
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
            Assert.IsFalse(Directory.Exists(Path.Combine(_directory, "Contoso.Console")));
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
        public async Task ScaffoldAsync_DeviceCodeOrFromPacConnection_Fails()
        {
            // FormProject parity: the net462 Console template cannot host
            // DeviceCode/FromPac (they need Azure.Identity / modern .NET).
            // FromPac carries a profile so the engine token pass (CliArgsBuilder,
            // same throw as the VSIX Replacement pipeline) stays happy and the
            // handler validation is what fails.
            var connections = new[]
            {
                new CrmConnection { Type = "DeviceCode" },
                new CrmConnection { Type = "FromPac", PacProfile = "my-profile" },
            };
            foreach (var connection in connections)
            {
                var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(connection));
                Assert.IsFalse(result.Success, connection.Type);
                StringAssert.Contains(result.Errors[0], $"The connection type '{connection.Type}' is not supported for Console project template (.NET Framework)");
                StringAssert.Contains(result.Errors[0], "Console Core project template");
            }
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
            StringAssert.Contains(result.Errors[0], "Supported types: Interactive, ClientSecret, OAuth, AD");
        }

        [TestMethod]
        [DataRow("ClientSecret")]
        [DataRow("Interactive")]
        [DataRow("OAuth")]
        [DataRow("AD")]
        public async Task ScaffoldAsync_RendersConnectionTypePayload(string type)
        {
            await ScaffoldSharedAsync();
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker(type)));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));

            // App.cs is the connection-type resource variant with the
            // namespace applied — the standard is payload source + token.
            var expectedAppCs = (await TemplatePayload.ReadSharedResourceAsync($"cs.console.App.{type}.cs"))
                .Replace("$NameSpace$", "Contoso.Console");
            var appCs = File.ReadAllText(Path.Combine(_projectDirectory, "App.cs"));
            Assert.AreEqual(expectedAppCs, appCs, type);

            // App.config carries empty values plus the .env comments of the
            // UseProjectEnvironment marker connection (reference: the VSIX
            // output of Dev.AllInOne.Console).
            var expectedAppConfig = await ExpectedAppConfigAsync(type, useProjectEnvironment: true);
            Assert.AreEqual(expectedAppConfig, File.ReadAllText(Path.Combine(_projectDirectory, "App.config")), type);

            await AssertCommonPayloadAsync(type);
        }

        [TestMethod]
        public async Task ScaffoldAsync_ExplicitConnectionValues_ReplaceAppConfigValues()
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

            var appConfig = File.ReadAllText(Path.Combine(_projectDirectory, "App.config"));
            StringAssert.Contains(appConfig, "<add key=\"Url\" value=\"https://contoso.crm.dynamics.com\" />");
            StringAssert.Contains(appConfig, "<add key=\"ClientId\" value=\"00000000-0000-0000-0000-000000000000\" />");
            StringAssert.Contains(appConfig, "<add key=\"ClientSecret\" value=\"plain-secret\" />");
            Assert.IsFalse(appConfig.Contains("Value is read from project .env"));
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

            var expectedAppCs = (await TemplatePayload.ReadSharedResourceAsync("cs.console.App.Interactive.cs"))
                .Replace("$NameSpace$", "Contoso.Console");
            Assert.AreEqual(expectedAppCs, File.ReadAllText(Path.Combine(_projectDirectory, "App.cs")));
            var expectedAppConfig = await ExpectedAppConfigAsync("Interactive", useProjectEnvironment: true);
            Assert.AreEqual(expectedAppConfig, File.ReadAllText(Path.Combine(_projectDirectory, "App.config")));
        }

        [TestMethod]
        public async Task ScaffoldAsync_NullConnectionEnvDeviceCode_Fails()
        {
            // A .env with an unsupported type must hard-error, not silently
            // fall back.
            await ScaffoldSharedAsync();
            File.WriteAllText(Path.Combine(_directory, ".env"), "DEVKIT_AUTH_TYPE=DeviceCode\r\n");

            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input());
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors[0], "DeviceCode");
        }

        [TestMethod]
        public async Task ScaffoldAsync_NoConnectionNoEnv_BakesClientSecretPlaceholders()
        {
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input());
            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));

            var expectedAppCs = (await TemplatePayload.ReadSharedResourceAsync("cs.console.App.ClientSecret.cs"))
                .Replace("$NameSpace$", "Contoso.Console");
            Assert.AreEqual(expectedAppCs, File.ReadAllText(Path.Combine(_projectDirectory, "App.cs")));
            var expectedAppConfig = await ExpectedAppConfigAsync("ClientSecret", useProjectEnvironment: false);
            Assert.AreEqual(expectedAppConfig, File.ReadAllText(Path.Combine(_projectDirectory, "App.config")));
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
                $"Project\\(\"{SolutionMutator.SdkCSharpProjectTypeGuid}\"\\) = \"Contoso\\.Console\", \"Contoso\\.Console\\\\Contoso\\.Console\\.csproj\", \"\\{{([0-9A-Fa-f-]+)\\}}\"");
            Assert.IsTrue(entry.Success, "missing Console project entry");
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
        public async Task ScaffoldAsync_ConsoleBeforeShared_AddsConsumerLineOnRerun()
        {
            // The project entry may exist before the shared project does:
            // the rerun must attach the consumer line to the EXISTING entry
            // GUID, not mint a second one.
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);
            var before = File.ReadAllText(_solutionFile);
            var guid = Regex.Match(before, "Contoso\\.Console\\\\Contoso\\.Console\\.csproj\", \"\\{([0-9A-Fa-f-]+)\\}\"").Groups[1].Value;

            await ScaffoldSharedAsync();
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")));
            Assert.IsTrue(result.Success);

            var after = File.ReadAllText(_solutionFile);
            StringAssert.Contains(after, $"Contoso.Shared\\Contoso.Shared.projitems*{{{guid.ToLowerInvariant()}}}*SharedItemsImports = 5");
            Assert.AreEqual(1, after.Split('\n').Count(line => line.Contains("Contoso.Console.csproj\",")));
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
            // VSIX Console wizard does not create the DevKit json stores
            // either (that belongs to the Shared wizard).
            var csproj = File.ReadAllText(Path.Combine(_projectDirectory, "Contoso.Console.csproj"));
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
            StringAssert.Contains(content, "<Project Path=\"Contoso.Console/Contoso.Console.csproj\" />");
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
            // App.config/csproj/README.md do not.
            Assert.IsTrue(HasBom(Path.Combine(_projectDirectory, "App.cs")));
            Assert.IsTrue(HasBom(Path.Combine(_projectDirectory, "Program.cs")));
            Assert.IsTrue(HasBom(Path.Combine(_projectDirectory, "Lib", "Helper.cs")));
            Assert.IsTrue(HasBom(Path.Combine(_projectDirectory, "Lib", "TracingServiceFake.cs")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "App.config")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "Contoso.Console.csproj")));
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

        /// <summary>
        /// Assertions shared by every successful scaffold: the 7 payload
        /// files exist, tokens are fully applied, the csproj is net462 with
        /// the fallback-free NuGet versions (offline DefaultVersions) and
        /// the shared import, and no $token$ survives anywhere.
        /// </summary>
        private async Task AssertCommonPayloadAsync(string type)
        {
            var expectedFiles = new[]
            {
                Path.Combine(_projectDirectory, "Contoso.Console.csproj"),
                Path.Combine(_projectDirectory, "README.md"),
                Path.Combine(_projectDirectory, "App.cs"),
                Path.Combine(_projectDirectory, "Program.cs"),
                Path.Combine(_projectDirectory, "App.config"),
                Path.Combine(_projectDirectory, "Lib", "Helper.cs"),
                Path.Combine(_projectDirectory, "Lib", "TracingServiceFake.cs"),
            };
            foreach (var file in expectedFiles)
            {
                Assert.IsTrue(File.Exists(file), $"missing {file}");
            }

            // README.md is copied verbatim (ReplaceParameters=false in the
            // .vstemplate) — build-date placeholder included.
            var readmePayload = await TemplatePayload.ReadContentAsync(TemplatePayload.Prefix(TemplateKind.Project, "console") + "README.md");
            Assert.AreEqual(readmePayload.Content, File.ReadAllText(Path.Combine(_projectDirectory, "README.md")));

            // Lib payload files expand their nested resource tokens.
            var expectedHelper = (await TemplatePayload.ReadSharedResourceAsync("Helper.cs"))
                .Replace("$NameSpace$", "Contoso.Console");
            Assert.AreEqual(expectedHelper, File.ReadAllText(Path.Combine(_projectDirectory, "Lib", "Helper.cs")));
            var expectedTracing = (await TemplatePayload.ReadSharedResourceAsync("TracingServiceFake.cs"))
                .Replace("$NameSpace$", "Contoso.Console");
            Assert.AreEqual(expectedTracing, File.ReadAllText(Path.Combine(_projectDirectory, "Lib", "TracingServiceFake.cs")));
            var expectedProgram = (await TemplatePayload.ReadSharedResourceAsync("Program.cs"))
                .Replace("$NameSpace$", "Contoso.Console");
            Assert.AreEqual(expectedProgram, File.ReadAllText(Path.Combine(_projectDirectory, "Program.cs")));

            var csproj = File.ReadAllText(Path.Combine(_projectDirectory, "Contoso.Console.csproj"));
            StringAssert.Contains(csproj, "<TargetFramework>net462</TargetFramework>");
            StringAssert.Contains(csproj, "<RootNamespace>Contoso.Console</RootNamespace>");
            StringAssert.Contains(csproj, "<AssemblyName>Contoso.Console</AssemblyName>");
            StringAssert.Contains(csproj, $"<Copyright>Copyright © {DateTime.Now.Year}</Copyright>");
            StringAssert.Contains(csproj, "..\\Contoso.Shared\\Contoso.Shared.projitems");
            // NuGet versions resolve offline through the DefaultVersions
            // fallback of NuGetHelper.
            StringAssert.Contains(csproj, "Include=\"DynamicsCrm.DevKit.Analyzers\" Version=\"4.44.44.44\"");
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
        /// The expected App.config text for a connection type: values from a
        /// marker connection are empty with .env comments, an explicit
        /// connection has none of the comments.
        /// </summary>
        private static async Task<string> ExpectedAppConfigAsync(string type, bool useProjectEnvironment)
        {
            var content = await TemplatePayload.ReadSharedResourceAsync($"cs.console.App.config.{type}");
            content = content.Replace("$UrlValue$", string.Empty);
            switch (type)
            {
                case "ClientSecret":
                    content = content
                        .Replace("$ClientIdValue$", string.Empty)
                        .Replace("$ClientSecretValue$", string.Empty)
                        .Replace("$ClientIdConfigComment$", Comment("DEVKIT_CLIENT_ID", useProjectEnvironment))
                        .Replace("$ClientSecretConfigComment$", Comment("DEVKIT_CLIENT_SECRET", useProjectEnvironment));
                    break;
                case "OAuth":
                case "AD":
                    content = content
                        .Replace("$UserNameValue$", string.Empty)
                        .Replace("$PasswordValue$", string.Empty)
                        .Replace("$UserNameConfigComment$", Comment("DEVKIT_USERNAME", useProjectEnvironment))
                        .Replace("$PasswordConfigComment$", Comment("DEVKIT_PASSWORD", useProjectEnvironment));
                    break;
            }
            return content.Replace("$UrlConfigComment$", Comment("DEVKIT_URL", useProjectEnvironment));
        }

        private static string Comment(string environmentVariable, bool useProjectEnvironment)
        {
            return useProjectEnvironment ? $"<!-- Value is read from project .env: {environmentVariable} -->" : string.Empty;
        }

        [TestMethod]
        public async Task ScaffoldAsync_GeneratedProject_BuildsNet462()
        {
            // The golden proof of P.2 (added after the P.1..P.13 review, the
            // only project template whose golden build was demo-only): the
            // generated net462 Console project compiles with plain
            // 'dotnet build'. Shared must be scaffolded first — Lib/Helper.cs
            // consumes DevKitJson, which compiles into the Console assembly
            // through the Shared .projitems import (the realistic workspace
            // sequence, same as the original P.2 demo in TestAllInOneCli).
            await ScaffoldSharedAsync();
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var (exitCode, output) = DotnetBuild(Path.Combine(_projectDirectory, "Contoso.Console.csproj"));
            Assert.AreEqual(0, exitCode, output);
        }

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
