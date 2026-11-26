using DynamicsCrm.DevKit.Cli.Templates;
using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
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
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates
{
    [TestClass]
    [DoNotParallelize]
    public sealed class DataverseTestTemplateTests
    {
        private const string ProjectName = "Contoso.Server.DataverseTests";
        private const string Target = "Contoso.Server.UpdateAccount";
        private string _root;
        private string _solution;
        private string _projectDirectory;

        [TestInitialize]
        public void Initialize()
        {
            _root = Path.Combine(Path.GetTempPath(), "devkit-dataverse-test", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(_root);
            _solution = Path.Combine(_root, "Contoso.slnx");
            File.WriteAllText(_solution, "<Solution />");
            _projectDirectory = Path.Combine(_root, "Test Projects", ProjectName);
            TemplateHandlers.RegisterAll();
        }

        [TestCleanup]
        public void Cleanup() => Directory.Delete(_root, recursive: true);

        [TestMethod]
        public void DefaultItemBytesMatchAcrossT4Layouts()
        {
            const string marker = "// DevKit DataverseTest target: Contoso.Server.UpdateAccount";
            const string cliOutput = "using Contoso.Framework;\nusing Microsoft.VisualStudio.TestTools.UnitTesting;\n\nnamespace Contoso\n{\n}\n";
            const string vsixOutput = "using Microsoft.VisualStudio.TestTools.UnitTesting;\r\n\r\nusing Contoso.Framework;\r\n\r\n\r\nnamespace Contoso\r\n{\r\n    \r\n}\r\n\r\n";
            var input = new ItemTemplateInput();
            using var cli = new MemoryStream();
            using var vsix = new MemoryStream();
            DataverseTestItemHandler.WriteItemContent(cli, DataverseTestItemHandler.GetItemContent(marker, cliOutput, input));
            DataverseTestItemHandler.WriteItemContent(vsix, DataverseTestItemHandler.GetItemContent(marker, vsixOutput, input));

            var expected = Encoding.UTF8.GetPreamble().Concat(Encoding.UTF8.GetBytes(marker + "\n" + cliOutput)).ToArray();
            CollectionAssert.AreEqual(expected, cli.ToArray());
            CollectionAssert.AreEqual(expected, vsix.ToArray());
        }

        [TestMethod]
        public void SharedPathResolutionMatchesNativePaths()
        {
            var parent = Path.Combine(_root, "Server");
            var project = Path.Combine(_root, "server", "Server.csproj");
            Assert.AreEqual(Path.GetRelativePath(parent, project), DataverseTestProjectHandler.RelativePath(parent, project));
            Assert.AreEqual(".", DataverseTestProjectHandler.RelativePath(parent, parent));
            Assert.AreEqual(project, DataverseTestProjectHandler.ResolvePath(_root, @"server\Server.csproj"));

            if (!OperatingSystem.IsWindows()) return;

            const string baseDirectory = @"E:\Solution";
            Assert.AreEqual(@"E:\Solution\Server.csproj", DataverseTestProjectHandler.ResolvePath(baseDirectory, @"E:Server.csproj"));
            Assert.AreEqual(@"E:\Server.csproj", DataverseTestProjectHandler.ResolvePath(baseDirectory, @"\Server.csproj"));
            Assert.AreEqual(@"C:\Server.csproj", DataverseTestProjectHandler.ResolvePath(baseDirectory, @"C:Server.csproj"));
            Assert.AreEqual(@"C:\Server.csproj", DataverseTestProjectHandler.RelativePath(baseDirectory, @"C:\Server.csproj"));
        }

        [TestMethod]
        [DataRow(".slnx")]
        [DataRow(".sln")]
        public async Task ProjectUsesActualReferencesAndAddsOneEntry(string extension)
        {
            if (extension == ".sln")
            {
                _solution = Path.ChangeExtension(_solution, extension);
                File.WriteAllText(_solution, "Microsoft Visual Studio Solution File, Format Version 12.00\r\nGlobal\r\nEndGlobal\r\n");
            }
            await CreatePrerequisitesAsync();
            var input = Project(ProjectName);
            input.OutputDirectory = Path.GetDirectoryName(_projectDirectory);
            input.ServerProjectFile = "Contoso.Server/Contoso.Server.csproj";
            EnsureSuccess(await ScaffoldingEngine.ScaffoldProjectAsync(input));
            var project = XDocument.Load(Path.Combine(_projectDirectory, ProjectName + ".csproj"));
            var references = project.Descendants("ProjectReference").Select(element => (string)element.Attribute("Include")).ToArray();
            CollectionAssert.AreEquivalent(new[]
            {
                "../../Contoso.Server/Contoso.Server.csproj", "../../Contoso.ProxyTypes/Contoso.ProxyTypes.csproj"
            }, references);
            Assert.AreEqual("../../Contoso.Shared/Contoso.Shared.projitems", (string)project.Descendants("Import").Single().Attribute("Project"));
            Assert.AreEqual("DataverseFakes.Community", project.Descendants("DevKitTestFramework").Single().Value);
            var facade = File.ReadAllText(Path.Combine(_projectDirectory, "Framework", "PluginTestBase.cs"));
            StringAssert.Contains(facade, "Contoso.ProxyTypes.ProxyTypesAssembly");
            var solutionBeforeRetry = File.ReadAllText(_solution);
            StringAssert.Contains(solutionBeforeRetry, ProjectName + ".csproj");
            if (extension == ".sln")
                StringAssert.Contains(solutionBeforeRetry, "SharedMSBuildProjectFiles");
            Assert.IsFalse((await ScaffoldingEngine.ScaffoldProjectAsync(input)).Success);
            Assert.AreEqual(solutionBeforeRetry, File.ReadAllText(_solution));
        }

        [TestMethod]
        public async Task MissingOrAmbiguousServerDoesNotCreateOutput()
        {
            var input = Project(ProjectName);
            input.OutputDirectory = Path.GetDirectoryName(_projectDirectory);
            Assert.IsFalse((await ScaffoldingEngine.ScaffoldProjectAsync(input)).Success);
            Assert.IsFalse(Directory.Exists(input.OutputDirectory));

            await CreatePrerequisitesAsync();
            EnsureSuccess(await ScaffoldingEngine.ScaffoldProjectAsync(Project("Contoso.Server2", "Server")));
            var model = XDocument.Load(_solution);
            var server = model.Descendants("Project").Single(element => ((string)element.Attribute("Path")).EndsWith("Contoso.Server.csproj"));
            server.Remove();
            model.Save(_solution);
            EnsureSuccess(await ScaffoldingEngine.ScaffoldProjectAsync(Project("Contoso.Server3", "Server")));
            var result = await ScaffoldingEngine.ScaffoldProjectAsync(input);
            Assert.IsFalse(result.Success);
            StringAssert.Contains(result.Errors.Single(), "--server-project");
            Assert.IsFalse(Directory.Exists(input.OutputDirectory));
        }

        [TestMethod]
        public async Task GeneratedItemValidatesTargetAndPreservesUserFile()
        {
            await CreateFixtureAsync();
            var item = Item();
            item.Order = 2;
            item.RootNamespace = "Review.Cases";
            item.OutputDirectory = Path.Combine(_projectDirectory, "NewPlugins");
            EnsureSuccess(await ScaffoldingEngine.ScaffoldItemAsync(item));
            var path = Path.Combine(item.OutputDirectory, "UpdateAccount2Test.cs");
            var initial = File.ReadAllBytes(path);
            CollectionAssert.AreEqual(Encoding.UTF8.GetPreamble(), initial[..3]);
            var source = File.ReadAllText(path);
            StringAssert.Contains(source, "namespace Review.Cases");
            StringAssert.Contains(source, "using Contoso.Server.DataverseTests.Framework;");
            StringAssert.Contains(source, "public class UpdateAccount2Test");
            StringAssert.Contains(source, "AssertStandardPluginGuards<TargetComponent>();");

            var retry = await ScaffoldingEngine.ScaffoldItemAsync(item);
            Assert.AreEqual("Skipped", retry.Files.Single().Action);
            CollectionAssert.AreEqual(initial, File.ReadAllBytes(path));
            item.TestTarget = "Contoso.Server.Another.UpdateAccount";
            Assert.IsFalse((await ScaffoldingEngine.ScaffoldItemAsync(item)).Success);

            item.TestTarget = "Contoso.Server.Missing";
            Assert.IsFalse((await ScaffoldingEngine.ScaffoldItemAsync(item)).Success);
            item.TestTarget = Target;
            item.TemplateTitle = "Missing title";
            Assert.IsFalse((await ScaffoldingEngine.ScaffoldItemAsync(item)).Success);
            CollectionAssert.AreEqual(initial, File.ReadAllBytes(path));

            item = Item();
            item.ProjectName = "Contoso.Server";
            item.OutputDirectory = Path.Combine(_root, "Contoso.Server");
            Assert.IsFalse((await ScaffoldingEngine.ScaffoldItemAsync(item)).Success);

            item = Item();
            item.Name = "Custom";
            item.T4Path = Path.Combine(_root, "Custom.tt");
            File.WriteAllText(item.T4Path, "// <#=Context.TestTargetFullClassName#>");
            EnsureSuccess(await ScaffoldingEngine.ScaffoldItemAsync(item));
            StringAssert.Contains(File.ReadAllText(Path.Combine(_projectDirectory, "CustomTest.cs")), "// " + Target);

            var config = new ConfigJson { CustomTemplates = new System.Collections.Generic.List<CustomTemplate>
            {
                new CustomTemplate { Type = "Test", Title = "Named", Body = Helper.Compress("// legacy") },
                new CustomTemplate { Type = "DataverseTest", Title = "Named", Body = Helper.Compress("// new <#=Context.DataverseTestComponentKind#>") }
            }};
            File.WriteAllText(Path.Combine(_root, Const.DynamicsCrmDevKitCliJson), JsonHelper.Serialize(config));
            item = Item();
            item.Name = "Named";
            item.TemplateTitle = "Named";
            EnsureSuccess(await ScaffoldingEngine.ScaffoldItemAsync(item));
            StringAssert.Contains(File.ReadAllText(Path.Combine(_projectDirectory, "NamedTest.cs")), "// new Plugin");
        }

        [TestMethod]
        [DataRow(null, "Dev.AllInOne.DataverseTests")]
        [DataRow("", "Dev.AllInOne.DataverseTests")]
        [DataRow(" Account ", "Dev.AllInOne.Account.DataverseTests")]
        public void ProjectNameUsesSolutionAndOptionalQualifier(string name, string expected)
        {
            Assert.AreEqual(expected, DataverseTestProjectHandler.GetProjectName("Dev.AllInOne", name));
        }

        [TestMethod]
        [DataRow(true)]
        [DataRow(false)]
        public async Task InteractiveCommandsSuggestProjectNameAndPickFullTargetName(bool specifySolution)
        {
            await CreateFixtureAsync(createTestProject: false);
            var previousPlain = SpectreLog.IsPlain;
            InteractiveConsoleUnlock.Install();
            try
            {
                var console = ScriptedConsole.Install();
                SpectreLog.IsPlain = false;
                console.Input.PushKey(ConsoleKey.Enter);
                if (!specifySolution)
                    console.Input.PushKey(ConsoleKey.Enter);
                var project = new NewProjectCommandArgs { Type = "DataverseTest", Solution = specifySolution ? _solution : string.Empty, Out = _root };
                await TaskNewProject.RunAsync(project);
                Assert.AreEqual("Contoso.DataverseTests", project.Name);
                Assert.AreEqual(_solution, project.Solution);

                console.Input.PushKey(ConsoleKey.DownArrow).PushKey(ConsoleKey.DownArrow).PushKey(ConsoleKey.Enter);
                var item = new NewItemCommandArgs
                {
                    Type = "DataverseTest", Project = project.Name, Out = Path.Combine(_root, project.Name)
                };
                await TaskNewItem.RunAsync(item);
                Assert.AreEqual(Target, item.TestTarget);
                Assert.IsTrue(File.Exists(Path.Combine(item.Out, "UpdateAccountTest.cs")));
            }
            finally
            {
                SpectreLog.IsPlain = previousPlain;
                ScriptedConsole.Restore();
                InteractiveConsoleUnlock.Uninstall();
            }
        }

        [TestMethod]
        public async Task ScaffoldedPluginAndTestExecuteOnNet462()
        {
            if (!OperatingSystem.IsWindows()) Assert.Inconclusive("The generated x64 .NET Framework suite runs on Windows.");
            await CreateFixtureAsync();
            EnsureSuccess(await ScaffoldingEngine.ScaffoldItemAsync(Item()));
            var test = Path.Combine(_projectDirectory, "UpdateAccountTest.cs");
            var source = File.ReadAllText(test).Replace(
                "Assert.Inconclusive(\"Add an arrangement and an assertion for the expected behavior.\");",
                """
                var id = System.Guid.NewGuid();
                            Seed(new Microsoft.Xrm.Sdk.Entity("account", id) { ["name"] = "before" });
                            Seed(new Microsoft.Xrm.Sdk.Entity("account", id) { ["name"] = "after" });
                            var target = Query("account").Single();
                            Assert.AreEqual("after", target["name"]);
                            RunPlugin<TargetComponent>().WithTarget(target).Execute();
                            Assert.AreEqual("updated", target["description"]);
                """);
            File.WriteAllText(test, "using System.Linq;" + Environment.NewLine + source);
            File.WriteAllText(Path.Combine(_projectDirectory, "ReplayAndPipelineTests.cs"), """
                using System;
                using System.Collections.Generic;
                using Contoso.Server;
                using Contoso.Server.DataverseTests.Framework;
                using Contoso.Shared;
                using Microsoft.VisualStudio.TestTools.UnitTesting;
                using Microsoft.Xrm.Sdk;
                using Microsoft.Xrm.Sdk.Metadata;
                using Microsoft.Xrm.Sdk.Query;

                namespace Contoso.Server.DataverseTests
                {
                    [TestClass]
                    public class ReplayAndPipelineTests : PluginTestBase
                    {
                        [TestMethod]
                        public void ReplaysRequestIdAndParentContext()
                        {
                            var id = Guid.NewGuid();
                            var snapshot = new DevKitJson.ExecutionContextSnapshot(new Dictionary<string, object>
                            {
                                ["RequestId"] = id,
                                ["ParentContext"] = new DevKitJson.ExecutionContextSnapshot(new Dictionary<string, object>
                                {
                                    ["MessageName"] = "Create"
                                })
                            });
                            var json = DevKitJson.SerializeContextFull(snapshot);
                            var replay = ReplayCompressedPlugin<TraceProbe>(json.Compress());
                            Assert.AreEqual(id, replay.OutputParameters["Request"]);
                            Assert.AreEqual("Create", replay.OutputParameters["Parent"]);
                        }

                        [TestMethod]
                        public void UpdatePipelineHonorsFilteringAttributes()
                        {
                            var metadata = new EntityMetadata { LogicalName = "account" };
                            typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.ObjectTypeCode)).SetValue(metadata, 1);
                            SetEntityMetadata(metadata);
                            RegisterPluginStep<UpdateAccount>();
                            EnablePipelineSimulation();
                            var id = Guid.NewGuid();
                            Seed(new Entity("account", id) { ["name"] = "before" });
                            Service.Update(new Entity("account", id) { ["telephone1"] = "123" });
                            Assert.IsFalse(Service.Retrieve("account", id, new ColumnSet("description")).Contains("description"));
                            Service.Update(new Entity("account", id) { ["name"] = "after" });
                            Assert.AreEqual("updated", Service.Retrieve("account", id, new ColumnSet("description"))["description"]);
                        }
                    }
                }
                """);

            var start = new ProcessStartInfo("dotnet")
            {
                WorkingDirectory = _projectDirectory, RedirectStandardOutput = true, RedirectStandardError = true,
                UseShellExecute = false, CreateNoWindow = true
            };
            foreach (var argument in new[] { "test", ProjectName + ".csproj", "--nologo", "--logger", "trx;LogFileName=dataverse.trx" })
                start.ArgumentList.Add(argument);
            using var process = Process.Start(start);
            var stdout = process.StandardOutput.ReadToEndAsync();
            var stderr = process.StandardError.ReadToEndAsync();
            using var timeout = new CancellationTokenSource(TimeSpan.FromMinutes(2));
            try { await process.WaitForExitAsync(timeout.Token); }
            catch (OperationCanceledException) { process.Kill(entireProcessTree: true); await process.WaitForExitAsync(); throw; }
            Assert.AreEqual(0, process.ExitCode, (await stdout) + (await stderr));
            var trx = XDocument.Load(Path.Combine(_projectDirectory, "TestResults", "dataverse.trx"));
            var counters = trx.Descendants().Single(element => element.Name.LocalName == "Counters");
            Assert.AreEqual(4, (int)counters.Attribute("executed"));
            Assert.AreEqual(4, (int)counters.Attribute("passed"));
        }

        private async Task CreateFixtureAsync(bool createTestProject = true)
        {
            await CreatePrerequisitesAsync();
            const string plugin = """
                using Microsoft.Xrm.Sdk;
                using Contoso.Shared;
                using System;

                namespace Contoso.Server
                {
                    [CrmPluginRegistration("Update", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, "name",
                        "Update Account", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
                    public class UpdateAccount : IPlugin
                    {
                        public void Execute(IServiceProvider serviceProvider)
                        {
                            var context = serviceProvider.GetExecutionContext7();
                            if (context.Stage != 20) throw new InvalidPluginExecutionException("Stage does not equals PreOperation");
                            if (context.MessageName != "Update") throw new InvalidPluginExecutionException("MessageName does not equals Update");
                            if (context.PrimaryEntityName != "account") throw new InvalidPluginExecutionException("PrimaryEntityName does not equals account");
                            if (context.Mode != 0) throw new InvalidPluginExecutionException("Execution does not equals Synchronous");
                            ((Entity)context.InputParameters["Target"])["description"] = "updated";
                        }
                    }

                    public class TraceProbe : IPlugin
                    {
                        public void Execute(IServiceProvider serviceProvider)
                        {
                            var context = serviceProvider.GetExecutionContext7();
                            context.OutputParameters["Request"] = context.RequestId;
                            context.OutputParameters["Parent"] = context.ParentContext?.MessageName;
                        }
                    }
                }
                namespace Contoso.Server.Another
                {
                    public class UpdateAccount : IPlugin
                    {
                        public void Execute(IServiceProvider serviceProvider) { }
                    }
                }
                """;
            File.WriteAllText(Path.Combine(_root, "Contoso.Server", "UpdateAccount.cs"), plugin);
            if (!createTestProject) return;
            var input = Project(ProjectName);
            input.OutputDirectory = Path.GetDirectoryName(_projectDirectory);
            EnsureSuccess(await ScaffoldingEngine.ScaffoldProjectAsync(input));
        }

        private async Task CreatePrerequisitesAsync()
        {
            EnsureSuccess(await ScaffoldingEngine.ScaffoldProjectAsync(Project("Contoso.Shared", "Shared")));
            EnsureSuccess(await ScaffoldingEngine.ScaffoldProjectAsync(Project("Contoso.ProxyTypes", "ProxyTypes")));
            EnsureSuccess(await ScaffoldingEngine.ScaffoldProjectAsync(Project("Contoso.Server", "Server")));
        }

        private ProjectTemplateInput Project(string name, string type = "DataverseTest") => new()
        {
            TemplateId = type, ProjectName = name, SolutionFile = _solution, OutputDirectory = _root, Offline = true
        };

        private ItemTemplateInput Item() => new()
        {
            TemplateId = "DataverseTest", ProjectName = ProjectName, TestTarget = Target,
            OutputDirectory = _projectDirectory, Transformer = new MonoTextTransformer(), Offline = true
        };

        private static void EnsureSuccess(ScaffoldResult result)
            => Assert.IsTrue(result.Success, string.Join(Environment.NewLine, result.Errors));
    }
}
