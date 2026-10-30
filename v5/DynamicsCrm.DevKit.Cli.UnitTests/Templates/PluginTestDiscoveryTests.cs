using DynamicsCrm.DevKit.Shared.Templates;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates
{
    /// <summary>
    /// I.9 acceptance tests for the PluginTestDiscovery port — the
    /// test-plugin combo of the Test item template. The scan is a regex
    /// walk of the test project's ProjectReference folders (bin, obj,
    /// .vs and packages excluded) for non-abstract classes inheriting
    /// IPlugin or CodeActivity (transitively), carrying their
    /// [CrmPluginRegistration] message, entity, stage and execution into
    /// the candidate, flagging the default-template-shaped ones as
    /// guard-capable and skipping the classes whose {ClassName}Test
    /// already exists in the test project.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class PluginTestDiscoveryTests
    {
        private string _directory;
        private string _testProjectFile;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-plugin-test-discovery", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(_directory);
        }

        [TestCleanup]
        public void Cleanup()
        {
            Directory.Delete(_directory, true);
        }

        /// <summary>
        /// A test project referencing one server project; the server
        /// sources are given by the caller. Returns the server directory.
        /// </summary>
        private string WriteWorkspace((string FileName, string Source)[] serverSources)
        {
            var serverDirectory = Path.Combine(_directory, "Dev.Contoso.Server");
            Directory.CreateDirectory(serverDirectory);
            var testDirectory = Path.Combine(_directory, "Dev.Contoso.Test");
            Directory.CreateDirectory(testDirectory);

            File.WriteAllText(Path.Combine(testDirectory, "Dev.Contoso.Test.csproj"),
                "<Project Sdk=\"Microsoft.NET.Sdk\">\r\n  <ItemGroup>\r\n    <ProjectReference Include=\"..\\Dev.Contoso.Server\\Dev.Contoso.Server.csproj\" />\r\n  </ItemGroup>\r\n</Project>");
            foreach (var source in serverSources)
            {
                File.WriteAllText(Path.Combine(serverDirectory, source.FileName), source.Source);
            }

            _testProjectFile = Path.Combine(testDirectory, "Dev.Contoso.Test.csproj");
            return serverDirectory;
        }

        private const string GuardPluginSource = @"using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;

namespace Dev.Contoso.Server
{
    [CrmPluginRegistration(""Update"", ""account"", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, """", ""Dev.Contoso.Server.PreAccountUpdate"", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class PreAccountUpdate : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetExecutionContext7();
            if (!int.Equals(context.Stage, (int)StageEnum.PreOperation)) throw new InvalidPluginExecutionException(""Stage does not equals PreOperation"");
            if (!string.Equals(context.MessageName, ""Update"", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException(""MessageName does not equals Update"");
            if (!string.Equals(context.PrimaryEntityName, ""account"", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException(""PrimaryEntityName does not equals account"");
            if (!int.Equals(context.Mode, (int)ExecutionModeEnum.Synchronous)) throw new InvalidPluginExecutionException(""Execution does not equals Synchronous"");
        }
    }
}";

        private const string CustomPluginSource = @"using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;

namespace Dev.Contoso.Server
{
    [CrmPluginRegistration(""Create"", ""lead"", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, """", ""Dev.Contoso.Server.CustomLeadPlugin"", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin)]
    public class CustomLeadPlugin : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var service = serviceProvider.GetService<IOrganizationService>();
        }
    }
}";

        private const string WorkflowSource = @"using System.Activities;

namespace Dev.Contoso.Server
{
    public class MyWorkflowActivity : CodeActivity
    {
        protected override void Execute(CodeActivityContext context)
        {
        }
    }
}";

        private const string AbstractPluginSource = @"using Microsoft.Xrm.Sdk;

namespace Dev.Contoso.Server
{
    public abstract class PluginBase : IPlugin
    {
        public abstract void Execute(IServiceProvider serviceProvider);
    }
}";

        [TestMethod]
        public async Task GetTestCandidatesAsync_FindsPluginAndWorkflow_CarriesRegistration()
        {
            WriteWorkspace(new[]
            {
                ("PreAccountUpdate.cs", GuardPluginSource),
                ("MyWorkflowActivity.cs", WorkflowSource),
            });

            var candidates = await PluginTestDiscovery.GetTestCandidatesAsync(_testProjectFile);

            // Ordered by full class name.
            CollectionAssert.AreEqual(
                new[] { "Dev.Contoso.Server.MyWorkflowActivity", "Dev.Contoso.Server.PreAccountUpdate" },
                candidates.Select(x => x.FullClassName).ToArray());

            var plugin = candidates.Single(x => x.ClassName == "PreAccountUpdate");
            Assert.AreEqual("Update", plugin.MessageName);
            Assert.AreEqual("account", plugin.EntityLogicalName);
            Assert.AreEqual("PreOperation", plugin.Stage);
            Assert.AreEqual("Synchronous", plugin.ExecutionMode);
            Assert.AreEqual("Dev.Contoso.Server", plugin.Namespace);
            Assert.AreEqual("PreAccountUpdate", plugin.SuggestedTestClassBaseName);
        }

        [TestMethod]
        public async Task GetTestCandidatesAsync_FlagsGuardCapableCandidates()
        {
            WriteWorkspace(new[]
            {
                ("PreAccountUpdate.cs", GuardPluginSource),
                ("CustomLeadPlugin.cs", CustomPluginSource),
            });

            var candidates = await PluginTestDiscovery.GetTestCandidatesAsync(_testProjectFile);

            var guard = candidates.Single(x => x.ClassName == "PreAccountUpdate");
            Assert.IsTrue(guard.SupportsGuardTest);
            // The guard-capable combo shows the registration: full name
            // (stage, message, entity, execution).
            StringAssert.StartsWith(guard.DisplayName, "Dev.Contoso.Server.PreAccountUpdate (PreOperation, Update, account, Synchronous)");

            var custom = candidates.Single(x => x.ClassName == "CustomLeadPlugin");
            Assert.IsFalse(custom.SupportsGuardTest);
            Assert.AreEqual("Dev.Contoso.Server.CustomLeadPlugin", custom.DisplayName);
        }

        [TestMethod]
        public async Task GetTestCandidatesAsync_SkipsAbstractAndConventionTestClasses()
        {
            var serverDirectory = WriteWorkspace(new[]
            {
                ("PreAccountUpdate.cs", GuardPluginSource),
                ("PluginBase.cs", AbstractPluginSource),
            });

            // The conventional test class of a candidate — the wizard
            // drops the candidate from the combo (the test already
            // exists). It lives in the TEST project, not the server.
            var testDirectory = Path.GetDirectoryName(_testProjectFile);
            File.WriteAllText(Path.Combine(testDirectory, "CustomLeadPluginTest.cs"),
                "namespace Dev.Contoso.Test\r\n{\r\n    public class CustomLeadPluginTest\r\n    {\r\n    }\r\n}");
            File.WriteAllText(Path.Combine(serverDirectory, "CustomLeadPlugin.cs"), CustomPluginSource);

            var candidates = await PluginTestDiscovery.GetTestCandidatesAsync(_testProjectFile);

            Assert.IsFalse(candidates.Any(x => x.ClassName == "PluginBase"), "abstract classes never surface");
            Assert.IsFalse(candidates.Any(x => x.ClassName == "CustomLeadPlugin"), "a class with an existing {ClassName}Test leaves the combo");
            Assert.AreEqual("Dev.Contoso.Server.PreAccountUpdate", candidates.Single().FullClassName);

            // The unfiltered scan keeps the class for an explicit
            // --test-target (a rerun never loses its target).
            var all = await PluginTestDiscovery.GetAllTestCandidatesAsync(_testProjectFile);
            Assert.IsFalse(all.Any(x => x.ClassName == "PluginBase"), "abstract classes never surface, not even unfiltered");
            Assert.AreEqual(2, all.Count);
            Assert.IsTrue(all.Any(x => x.ClassName == "CustomLeadPlugin"));
        }

        [TestMethod]
        public async Task GetTestCandidatesAsync_NoProjectReferences_YieldsEmptyList()
        {
            // The standard DevKit test project references only the
            // ProxyTypes project — the wizard's empty combo.
            var testDirectory = Path.Combine(_directory, "Dev.Contoso.Test");
            Directory.CreateDirectory(testDirectory);
            File.WriteAllText(_testProjectFile = Path.Combine(testDirectory, "Dev.Contoso.Test.csproj"),
                "<Project Sdk=\"Microsoft.NET.Sdk\">\r\n</Project>");

            var candidates = await PluginTestDiscovery.GetTestCandidatesAsync(_testProjectFile);

            Assert.AreEqual(0, candidates.Count);
        }

        [TestMethod]
        public async Task GetTestCandidatesAsync_MissingProjectFile_YieldsEmptyList()
        {
            var candidates = await PluginTestDiscovery.GetTestCandidatesAsync(Path.Combine(_directory, "Ghost.csproj"));

            Assert.AreEqual(0, candidates.Count);
        }
    }
}
