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
    /// P.13 acceptance tests for the WebResource TypeScript project
    /// template: the payload files of CSharpWebResourceTsProjectTemplate
    /// .vstemplate rendered with the deploy/generator scripts of the
    /// platform (bats on Windows, the bash twins elsewhere), the build.js/
    /// devkit.ts/devkit.d.ts contents resolved through the Shared ts.*
    /// resources (the same source the VSIX Replacement pipeline reads), the
    /// seven empty folders of the vstemplate created physically, no
    /// strong-name key, no Shared requirement (the csproj imports no
    /// .projitems), the solution opt-in (create-only without --solution,
    /// plain csproj entry with it — no SharedMSBuildProjectFiles consumer
    /// line), the idempotency rules, the npm install hint and the golden
    /// proof: the generated net462 project builds with plain 'dotnet build'.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class WebResourceTsProjectTemplateHandlerTests
    {
        private static readonly Regex TokenPattern = new Regex(@"\$[A-Za-z][A-Za-z0-9.]*\$", RegexOptions.Compiled);

        private string _directory;
        private string _solutionFile;
        private string _projectDirectory;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-webresourcets-handler-tests", Guid.NewGuid().ToString("N"));
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
            _projectDirectory = Path.Combine(_directory, "Contoso.WebResourceTs");

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
                TemplateId = "WebResourceTs",
                ProjectName = "Contoso.WebResourceTs",
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
        public void CreateManifest_MirrorsVstemplateTwelveFiles()
        {
            var manifest = WebResourceTsProjectTemplateHandler.CreateManifest();

            Assert.AreEqual("WebResourceTs", manifest.TemplateId);
            Assert.AreEqual(TemplateKind.Project, manifest.Kind);

            // The vstemplate declares the csproj, README.md, the two deploy
            // scripts, package.json + .eslintrc.json + tsconfig.json, the
            // build.js toolchain, the lib/devkit typing + library and the
            // two generator scripts of the running platform — no key.snk.
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                Assert.AreEqual(12, manifest.Files.Count);
                Assert.AreEqual("$SafeProjectName$.csproj", manifest.Files[0].TargetFileName);
                Assert.AreEqual("README.md", manifest.Files[1].TargetFileName);
                Assert.AreEqual("deploy.debug.bat", manifest.Files[2].TargetFileName);
                Assert.AreEqual("deploy.release.bat", manifest.Files[3].TargetFileName);
                Assert.AreEqual("package.json", manifest.Files[4].TargetFileName);
                Assert.AreEqual(".eslintrc.json", manifest.Files[5].TargetFileName);
                Assert.AreEqual("tsconfig.json", manifest.Files[6].TargetFileName);
                Assert.AreEqual("build.js", manifest.Files[7].TargetFileName);
                Assert.AreEqual("lib/devkit.d.ts", manifest.Files[8].TargetFileName);
                Assert.AreEqual("lib/devkit.ts", manifest.Files[9].TargetFileName);
                Assert.AreEqual("entities/generator.form.bat", manifest.Files[10].TargetFileName);
                Assert.AreEqual("entities/generator.webapi.bat", manifest.Files[11].TargetFileName);
            }
            else
            {
                Assert.AreEqual(12, manifest.Files.Count);
                Assert.AreEqual("$SafeProjectName$.csproj", manifest.Files[0].TargetFileName);
                Assert.AreEqual("README.md", manifest.Files[1].TargetFileName);
                Assert.AreEqual("deploy.debug.sh", manifest.Files[2].TargetFileName);
                Assert.AreEqual("deploy.release.sh", manifest.Files[3].TargetFileName);
                Assert.AreEqual("package.json", manifest.Files[4].TargetFileName);
                Assert.AreEqual(".eslintrc.json", manifest.Files[5].TargetFileName);
                Assert.AreEqual("tsconfig.json", manifest.Files[6].TargetFileName);
                Assert.AreEqual("build.js", manifest.Files[7].TargetFileName);
                Assert.AreEqual("lib/devkit.d.ts", manifest.Files[8].TargetFileName);
                Assert.AreEqual("lib/devkit.ts", manifest.Files[9].TargetFileName);
                Assert.AreEqual("entities/generator.form.sh", manifest.Files[10].TargetFileName);
                Assert.AreEqual("entities/generator.webapi.sh", manifest.Files[11].TargetFileName);
            }

            // ReplaceParameters flags follow the .vstemplate declaration.
            Assert.IsFalse(manifest.Files.Single(file => file.TargetFileName == "README.md").ReplaceParameters);
            Assert.IsFalse(manifest.Files.Single(file => file.TargetFileName == ".eslintrc.json").ReplaceParameters);
            Assert.IsTrue(manifest.Files.All(file => file.ReplaceParameters || file.TargetFileName == "README.md" || file.TargetFileName == ".eslintrc.json"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_WithoutSolution_CreatesProjectOnly()
        {
            // No --solution = create-only: the project lands under --out,
            // NO solution file is needed — the wizard checks nothing else
            // (the csproj imports no Shared .projitems).
            var isolated = Path.Combine(Path.GetTempPath(), "devkit-webresourcets-nosln", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(isolated);
            try
            {
                var input = new ProjectTemplateInput
                {
                    TemplateId = "WebResourceTs",
                    ProjectName = "Contoso.WebResourceTs",
                    OutputDirectory = isolated,
                    Offline = true,
                };
                var result = await ScaffoldingEngine.ScaffoldProjectAsync(input);

                Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
                Assert.IsTrue(File.Exists(Path.Combine(isolated, "Contoso.WebResourceTs", "Contoso.WebResourceTs.csproj")));
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
            Assert.IsFalse(Directory.Exists(Path.Combine(_directory, "Contoso.WebResourceTs")));
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
            StringAssert.Contains(result.Errors[0], "not supported for the WebResource TypeScript project template");
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
            // FormProject filters no connection type for WebResourceTs —
            // unlike Console (no DeviceCode/FromPac) and Console Core
            // (no AD), every registry type scaffolds.
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
            // No connection, no .env: the deploy scripts carry ClientSecret
            // placeholders (the CLI connection form with empty values) so
            // the file parses once the user fills them in.
            var isolated = Path.Combine(Path.GetTempPath(), "devkit-webresourcets-noenv", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(isolated);
            try
            {
                var result = await ScaffoldingEngine.ScaffoldProjectAsync(new ProjectTemplateInput
                {
                    TemplateId = "WebResourceTs",
                    ProjectName = "Contoso.WebResourceTs",
                    OutputDirectory = isolated,
                    Offline = true,
                });
                Assert.IsTrue(result.Success, string.Join("; ", result.Errors));

                var deployDebug = File.ReadAllText(Path.Combine(isolated, "Contoso.WebResourceTs", DeployScriptName("debug")));
                StringAssert.Contains(deployDebug, "devkit webresource --auth ClientSecret --url \"\" --clientid \"\" --clientsecret \"\"");
                StringAssert.Contains(deployDebug, "--profile \"DEBUGTS\"");

                var deployRelease = File.ReadAllText(Path.Combine(isolated, "Contoso.WebResourceTs", DeployScriptName("release")));
                StringAssert.Contains(deployRelease, "devkit webresource --auth ClientSecret --url \"\" --clientid \"\" --clientsecret \"\"");
            }
            finally
            {
                Directory.Delete(isolated, true);
            }
        }

        [TestMethod]
        public async Task ScaffoldAsync_GeneratesNoSnk()
        {
            // VSIX parity: the WebResourceTs wizard calls no SigningHelper
            // and the vstemplate copies no key.snk — the CLI generates none
            // either, and the csproj carries no SignAssembly.
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.IsFalse(Directory.GetFiles(_projectDirectory, "*.snk", SearchOption.AllDirectories).Any());
            Assert.IsFalse(result.Files.Any(file => file.FilePath.EndsWith(".snk", StringComparison.OrdinalIgnoreCase)));
            var csproj = File.ReadAllText(Path.Combine(_projectDirectory, "Contoso.WebResourceTs.csproj"));
            Assert.IsFalse(csproj.Contains("<SignAssembly>"));
            Assert.IsFalse(csproj.Contains("<AssemblyOriginatorKeyFile>"));
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

            // The deploy/generator scripts embed the CLI connection args of
            // the connection (secrets encrypted by Helper.EncryptString —
            // the scripts never carry the plain secret). The release script
            // mirrors its VSIX bat verbatim — profile DEBUGTS, like debug.
            var deployDebug = File.ReadAllText(ScriptPath("deploy.debug.bat", "deploy.debug.sh"));
            StringAssert.Contains(deployDebug, "devkit webresource --auth ClientSecret --url \"https://contoso.crm.dynamics.com\" --clientid \"00000000-0000-0000-0000-000000000000\" --clientsecret \"");
            StringAssert.Contains(deployDebug, "--json \"DynamicsCrm.DevKit.Cli.json\" --profile \"DEBUGTS\"");
            Assert.IsFalse(deployDebug.Contains("plain-secret"));

            var deployRelease = File.ReadAllText(ScriptPath("deploy.release.bat", "deploy.release.sh"));
            StringAssert.Contains(deployRelease, "devkit webresource --auth ClientSecret");
            StringAssert.Contains(deployRelease, "--profile \"DEBUGTS\"");
            Assert.IsFalse(deployRelease.Contains("plain-secret"));

            var generatorForm = File.ReadAllText(ScriptPath(Path.Combine("entities", "generator.form.bat"), Path.Combine("entities", "generator.form.sh")));
            StringAssert.Contains(generatorForm, "devkit generator --auth ClientSecret");
            StringAssert.Contains(generatorForm, "--profile \"TS-FORM\"");
            Assert.IsFalse(generatorForm.Contains("plain-secret"));

            var generatorWebApi = File.ReadAllText(ScriptPath(Path.Combine("entities", "generator.webapi.bat"), Path.Combine("entities", "generator.webapi.sh")));
            StringAssert.Contains(generatorWebApi, "devkit generator --auth ClientSecret");
            StringAssert.Contains(generatorWebApi, "--profile \"TS-WEBAPI\"");
        }

        [TestMethod]
        public async Task ScaffoldAsync_Scripts_MarkerConnection_OmitArgs()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            // UseProjectEnvironment connections build empty args (the
            // scripts fall back to the project .env) — ApplyCliConnectionArgs
            // also collapses the leading space, so no double space remains.
            var deployDebug = File.ReadAllText(ScriptPath("deploy.debug.bat", "deploy.debug.sh"));
            StringAssert.Contains(deployDebug, "devkit webresource --json \"DynamicsCrm.DevKit.Cli.json\" --profile \"DEBUGTS\"");
            Assert.IsFalse(deployDebug.Contains("--auth"));
            Assert.IsFalse(deployDebug.Contains("  devkit"));

            var deployRelease = File.ReadAllText(ScriptPath("deploy.release.bat", "deploy.release.sh"));
            StringAssert.Contains(deployRelease, "devkit webresource --json \"DynamicsCrm.DevKit.Cli.json\" --profile \"DEBUGTS\"");
            Assert.IsFalse(deployRelease.Contains("--auth"));

            var generatorForm = File.ReadAllText(ScriptPath(Path.Combine("entities", "generator.form.bat"), Path.Combine("entities", "generator.form.sh")));
            StringAssert.Contains(generatorForm, "devkit generator --json \"DynamicsCrm.DevKit.Cli.json\" --profile \"TS-FORM\"");
        }

        [TestMethod]
        public async Task ScaffoldAsync_ScriptShResources_CarryTheBashTwins()
        {
            // The macOS/Linux twins of the deploy/generator scripts: the
            // embedded bash resources exist and carry the same devkit call
            // (TokenEngine stamps them only when present, like the Server
            // deploy twins).
            var deployDebugSh = await TemplatePayload.ReadSharedResourceAsync("sh.webresource.deploy.debug.ts.sh");
            Assert.IsNotNull(deployDebugSh);
            StringAssert.Contains(deployDebugSh, "#!/usr/bin/env bash");
            StringAssert.Contains(deployDebugSh, "devkit webresource $CliConnectionArgs$ --json \"DynamicsCrm.DevKit.Cli.json\" --profile \"DEBUGTS\"");

            var deployReleaseSh = await TemplatePayload.ReadSharedResourceAsync("sh.webresource.deploy.release.ts.sh");
            Assert.IsNotNull(deployReleaseSh);
            StringAssert.Contains(deployReleaseSh, "devkit webresource $CliConnectionArgs$ --json \"DynamicsCrm.DevKit.Cli.json\" --profile \"DEBUGTS\"");

            var generatorFormSh = await TemplatePayload.ReadSharedResourceAsync("sh.generator.form.ts.sh");
            Assert.IsNotNull(generatorFormSh);
            StringAssert.Contains(generatorFormSh, "devkit generator $CliConnectionArgs$ --json \"DynamicsCrm.DevKit.Cli.json\" --profile \"TS-FORM\"");

            var generatorWebApiSh = await TemplatePayload.ReadSharedResourceAsync("sh.generator.webapi.ts.sh");
            Assert.IsNotNull(generatorWebApiSh);
            StringAssert.Contains(generatorWebApiSh, "devkit generator $CliConnectionArgs$ --json \"DynamicsCrm.DevKit.Cli.json\" --profile \"TS-WEBAPI\"");

            // Lean contract (aP 2026-10-25): no install-check block in the
            // bash twins — shebang + the devkit call only (the deploy bats
            // keep the node/npm checks; the bash twins stay lean like the
            // WebResource ones).
            Assert.IsFalse(deployDebugSh.Contains("command -v devkit"));
            Assert.IsFalse(deployDebugSh.Contains("where node"));
            Assert.IsFalse(deployReleaseSh.Contains("command -v devkit"));
            Assert.IsFalse(generatorFormSh.Contains("command -v devkit"));
            Assert.IsFalse(generatorWebApiSh.Contains("command -v devkit"));

            // The payload stubs of the bash twins resolve through the
            // project payload naming (deployed on non-Windows hosts).
            var prefix = TemplatePayload.Prefix(TemplateKind.Project, "webresourcets");
            var deployDebugStub = await TemplatePayload.ReadContentAsync(prefix + "deploy.debug.sh");
            Assert.IsNotNull(deployDebugStub);
            Assert.AreEqual("$webresource.deploy.debug.ts.sh$", deployDebugStub.Content.Trim());
            var deployReleaseStub = await TemplatePayload.ReadContentAsync(prefix + "deploy.release.sh");
            Assert.AreEqual("$webresource.deploy.release.ts.sh$", deployReleaseStub.Content.Trim());
            var formStub = await TemplatePayload.ReadContentAsync(prefix + "generator.form.sh");
            Assert.AreEqual("$generator.form.ts.sh$", formStub.Content.Trim());
            var webApiStub = await TemplatePayload.ReadContentAsync(prefix + "generator.webapi.sh");
            Assert.AreEqual("$generator.webapi.ts.sh$", webApiStub.Content.Trim());
        }

        [TestMethod]
        public async Task ScaffoldAsync_CreatesTheSevenVstemplateFolders()
        {
            // The vstemplate Folder elements are created physically by
            // Visual Studio — the CLI does the same (no .gitkeep markers;
            // the payload has none).
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            foreach (var folder in WebResourceTsProjectTemplateHandler.Folders)
            {
                Assert.IsTrue(Directory.Exists(Path.Combine(_projectDirectory, folder)), $"missing folder {folder}");
            }
            Assert.IsFalse(Directory.GetFiles(_projectDirectory, ".gitkeep", SearchOption.AllDirectories).Any());
        }

        [TestMethod]
        public async Task ScaffoldAsync_LibCarriesResourceContent()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            // lib/devkit.ts, lib/devkit.d.ts and build.js resolve through
            // the Shared ts.* resources — the same source the VSIX
            // Replacement pipeline reads (no duplicated payload). The
            // payload stubs carry a trailing CRLF (the VSIX original does),
            // so the rendered file is the resource plus that newline.
            var devkitTsResource = await TemplatePayload.ReadSharedResourceAsync("ts.devkit.ts");
            Assert.AreEqual(devkitTsResource + "\r\n", File.ReadAllText(Path.Combine(_projectDirectory, "lib", "devkit.ts")));

            var devkitDtsResource = await TemplatePayload.ReadSharedResourceAsync("ts.devkit.d.ts");
            Assert.AreEqual(devkitDtsResource + "\r\n", File.ReadAllText(Path.Combine(_projectDirectory, "lib", "devkit.d.ts")));

            var buildJsResource = await TemplatePayload.ReadSharedResourceAsync("ts.build.js");
            Assert.AreEqual(buildJsResource + "\r\n", File.ReadAllText(Path.Combine(_projectDirectory, "build.js")));

            // package.json carries the $LogicalProjectName$ stamp.
            var packageJson = File.ReadAllText(Path.Combine(_projectDirectory, "package.json"));
            StringAssert.Contains(packageJson, "\"name\": \"contoso.webresourcets\"");
        }

        [TestMethod]
        public async Task ScaffoldAsync_RegistersPlainSolutionEntry()
        {
            // The WebResourceTs csproj imports no Shared .projitems — even
            // with a Shared project in the workspace the .sln gains ONLY
            // the csproj entry (no SharedMSBuildProjectFiles consumer line).
            await ScaffoldSharedAsync();
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var solution = File.ReadAllText(_solutionFile);
            StringAssert.Contains(solution, $"\"Contoso.WebResourceTs\", \"Contoso.WebResourceTs\\Contoso.WebResourceTs.csproj\"");
            StringAssert.Contains(solution, "Contoso.Shared\\Contoso.Shared.shproj");
            Assert.IsFalse(solution.Contains("SharedItemsImports = 5"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_SolutionEntryWithoutShared()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var solution = File.ReadAllText(_solutionFile);
            StringAssert.Contains(solution, $"\"Contoso.WebResourceTs\", \"Contoso.WebResourceTs\\Contoso.WebResourceTs.csproj\"");
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
            StringAssert.Contains(content, "<Project Path=\"Contoso.WebResourceTs/Contoso.WebResourceTs.csproj\" />");
            // The .slnx format has no SharedMSBuildProjectFiles section.
            Assert.IsFalse(content.Contains("SharedItemsImports"));
        }

        [TestMethod]
        public async Task ScaffoldAsync_PreservesPayloadBomState()
        {
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            // Every payload file of this template is BOM-less (unlike the
            // WebResource typing) — the rendered files keep it that way.
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "Contoso.WebResourceTs.csproj")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "README.md")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "package.json")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "tsconfig.json")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, ".eslintrc.json")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "build.js")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "lib", "devkit.ts")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, "lib", "devkit.d.ts")));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, DeployScriptName("debug"))));
            Assert.IsFalse(HasBom(Path.Combine(_projectDirectory, DeployScriptName("release"))));
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
        public async Task ScaffoldAsync_HintsNpmInstall()
        {
            // The TypeScript toolchain lives in node_modules — the scaffold
            // reminds the user (and AI agents) that the first build needs
            // npm install (the deploy scripts install it automatically).
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")));

            Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
            Assert.IsTrue(result.Warnings.Any(warning => warning.Contains("npm install")), string.Join("; ", result.Warnings));
        }

        [TestMethod]
        public async Task ScaffoldAsync_GeneratedProject_BuildsNet462()
        {
            // The golden proof of P.13: the generated net462 TypeScript
            // project compiles with plain 'dotnet build' — its only
            // PackageReference (DynamicsCrm.DevKit.Analyzers) resolves from
            // the NuGet cache (TypeScriptCompileBlocked keeps the .ts files
            // out of the compilation).
            Assert.IsTrue((await ScaffoldingEngine.ScaffoldProjectAsync(Input(Marker("ClientSecret")))).Success);

            var (exitCode, output) = DotnetBuild(Path.Combine(_projectDirectory, "Contoso.WebResourceTs.csproj"));
            Assert.AreEqual(0, exitCode, output);
        }

        /// <summary>
        /// The deploy script file name of the running platform.
        /// </summary>
        private static string DeployScriptName(string flavor)
        {
            return RuntimeInformation.IsOSPlatform(OSPlatform.Windows) ? $"deploy.{flavor}.bat" : $"deploy.{flavor}.sh";
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
        /// The realistic workspace sequence: Shared first, then WebResourceTs
        /// on top (only to prove the WebResourceTs .sln entry stays plain).
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
        /// the offline DefaultVersions NuGet set and the platform scripts,
        /// and no $token$ survives anywhere.
        /// </summary>
        private async Task AssertCommonPayloadAsync()
        {
            var isWindows = RuntimeInformation.IsOSPlatform(OSPlatform.Windows);
            var deployDebug = isWindows ? "deploy.debug.bat" : "deploy.debug.sh";
            var deployRelease = isWindows ? "deploy.release.bat" : "deploy.release.sh";
            var generatorForm = isWindows ? "entities/generator.form.bat" : "entities/generator.form.sh";
            var generatorWebApi = isWindows ? "entities/generator.webapi.bat" : "entities/generator.webapi.sh";
            var expectedFiles = new[]
            {
                Path.Combine(_projectDirectory, "Contoso.WebResourceTs.csproj"),
                Path.Combine(_projectDirectory, "README.md"),
                Path.Combine(_projectDirectory, deployDebug),
                Path.Combine(_projectDirectory, deployRelease),
                Path.Combine(_projectDirectory, "package.json"),
                Path.Combine(_projectDirectory, ".eslintrc.json"),
                Path.Combine(_projectDirectory, "tsconfig.json"),
                Path.Combine(_projectDirectory, "build.js"),
                Path.Combine(_projectDirectory, "lib", "devkit.d.ts"),
                Path.Combine(_projectDirectory, "lib", "devkit.ts"),
                Path.Combine(_projectDirectory, generatorForm.Replace('/', '\\')),
                Path.Combine(_projectDirectory, generatorWebApi.Replace('/', '\\')),
            };
            foreach (var file in expectedFiles)
            {
                Assert.IsTrue(File.Exists(file), $"missing {file}");
            }

            // README.md and .eslintrc.json are copied verbatim
            // (ReplaceParameters=false in the .vstemplate).
            var prefix = TemplatePayload.Prefix(TemplateKind.Project, "webresourcets");
            var readmePayload = await TemplatePayload.ReadContentAsync(prefix + "README.md");
            Assert.AreEqual(readmePayload.Content, File.ReadAllText(Path.Combine(_projectDirectory, "README.md")));
            var eslintPayload = await TemplatePayload.ReadContentAsync(prefix + ".eslintrc.json");
            Assert.AreEqual(eslintPayload.Content, File.ReadAllText(Path.Combine(_projectDirectory, ".eslintrc.json")));

            var csproj = File.ReadAllText(Path.Combine(_projectDirectory, "Contoso.WebResourceTs.csproj"));
            StringAssert.Contains(csproj, "<TargetFramework>net462</TargetFramework>");
            StringAssert.Contains(csproj, "<OutputType>Library</OutputType>");
            StringAssert.Contains(csproj, "<RootNamespace>Contoso.WebResourceTs</RootNamespace>");
            StringAssert.Contains(csproj, "<AssemblyName>Contoso.WebResourceTs</AssemblyName>");
            StringAssert.Contains(csproj, "<TypeScriptCompileBlocked>True</TypeScriptCompileBlocked>");
            StringAssert.Contains(csproj, $"<Copyright>Copyright © {DateTime.Now.Year}</Copyright>");
            // The Release output of a webresource project feeds the deploy.
            StringAssert.Contains(csproj, "<OutputPath>..\\Release\\web\\Contoso.WebResourceTs</OutputPath>");
            // No strong-name key and no Shared import in this template.
            Assert.IsFalse(csproj.Contains("<SignAssembly>"));
            Assert.IsFalse(csproj.Contains(".projitems"));
            // The only PackageReference resolves offline through the
            // DefaultVersions fallback of NuGetHelper.
            StringAssert.Contains(csproj, "Include=\"DynamicsCrm.DevKit.Analyzers\" Version=\"4.44.44.44\"");
            StringAssert.Contains(csproj, $"Generated by DynamicsCrm.DevKit - {Const.VersionBuild}");
            // The empty folders stay visible in Solution Explorer.
            StringAssert.Contains(csproj, "<Folder Include=\"html\\\" />");
            StringAssert.Contains(csproj, "<TypeScriptCompile Include=\"lib\\devkit.ts\" />");

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
