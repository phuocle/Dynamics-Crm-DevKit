using DynamicsCrm.DevKit.Shared.Templates;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates;

/// <summary>
/// Second-pass coverage for the regex-based PluginTestDiscovery: the
/// comment/string-aware class-source stripping behind the guard-test
/// detection, constructor visibility, base-type resolution through the
/// class map (same-namespace, cross-namespace unique-name and
/// generic/global:: spellings), the two-level inheritance recursion and
/// the failure paths of the project scans (locked files, unbalanced
/// braces, unreadable project file).
/// </summary>
[TestClass]
[DoNotParallelize]
public class PluginTestDiscoveryGapCoverageTests
{
    private string _directory = null!;
    private string _pluginProjectDirectory = null!;
    private string _testProjectFile = null!;

    [TestInitialize]
    public void Initialize()
    {
        _directory = Path.Combine(Path.GetTempPath(), "devkit-plugintestdiscovery-gap", Guid.NewGuid().ToString("N"));
        _pluginProjectDirectory = Path.Combine(_directory, "Contoso.Server");
        Directory.CreateDirectory(_pluginProjectDirectory);
        Directory.CreateDirectory(Path.Combine(_directory, "Contoso.Tests"));
        _testProjectFile = Path.Combine(_directory, "Contoso.Tests", "Contoso.Tests.csproj");
        File.WriteAllText(_testProjectFile,
            "<Project Sdk=\"Microsoft.NET.Sdk\">\r\n  <ItemGroup>\r\n    <ProjectReference Include=\"..\\Contoso.Server\\Contoso.Server.csproj\" />\r\n  </ItemGroup>\r\n</Project>");
        File.WriteAllText(Path.Combine(_pluginProjectDirectory, "Contoso.Server.csproj"), "<Project Sdk=\"Microsoft.NET.Sdk\" />");
    }

    [TestCleanup]
    public void Cleanup()
    {
        try { Directory.Delete(_directory, true); } catch { }
    }

    private const string GuardPluginTemplate = """
        using System;
        using Microsoft.Xrm.Sdk;

        namespace Contoso.Server
        {
            [CrmPluginRegistration("Update", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, "", "Contoso.Server.$NAME$", 1, IsolationModeEnum.Sandbox)]
            public class $NAME$ : IPlugin
            {
                public $NAME$()
                {
                }

                // A comment that would confuse a naive parser:
                // Stage does not equals Never
                /* MessageName does not equals Never
                   PrimaryEntityName does not equals Never */
                public void Execute(IServiceProvider serviceProvider)
                {
                    var marker = "Stage does not equals PreOperation";
                    var path = @"MessageName does not equals Update";
                    var c = '\'';
                    var tricky = "quote \" and brace { inside a string }";
                    var after = "PrimaryEntityName does not equals account";
                    var last = "Execution does not equals Synchronous";
                }
            }
        }
        """;

    private void WritePlugin(string fileName, string source) =>
        File.WriteAllText(Path.Combine(_pluginProjectDirectory, fileName), source, Encoding.UTF8);

    [TestMethod]
    public async Task GuardTestClass_StripsCommentsAndStrings_SupportsGuardTest()
    {
        WritePlugin("SimplePlugin.cs", GuardPluginTemplate.Replace("$NAME$", "SimplePlugin"));

        var candidates = await PluginTestDiscovery.GetAllTestCandidatesAsync(_testProjectFile);

        var plugin = candidates.Single(x => x.ClassName == "SimplePlugin");
        Assert.IsTrue(plugin.SupportsGuardTest, plugin.DisplayName);
        Assert.AreEqual("Update", plugin.MessageName);
        Assert.AreEqual("account", plugin.EntityLogicalName);
        Assert.AreEqual("PreOperation", plugin.Stage);
        Assert.AreEqual("Synchronous", plugin.ExecutionMode);
        Assert.AreEqual("Contoso.Server.SimplePlugin (PreOperation, Update, account, Synchronous)", plugin.DisplayName);
        Assert.IsFalse(plugin.HasPostImage);
        Assert.IsFalse(plugin.HasPreImage);
    }

    [TestMethod]
    public async Task NonPublicConstructorPlugin_DoesNotSupportGuardTest()
    {
        WritePlugin("NonPublicCtorPlugin.cs", GuardPluginTemplate.Replace("$NAME$", "NonPublicCtorPlugin").Replace("public NonPublicCtorPlugin()", "internal NonPublicCtorPlugin()"));

        var candidates = await PluginTestDiscovery.GetAllTestCandidatesAsync(_testProjectFile);

        var plugin = candidates.Single(x => x.ClassName == "NonPublicCtorPlugin");
        Assert.IsFalse(plugin.SupportsGuardTest);
        // No guard support → the display name is the bare full class name.
        Assert.AreEqual("Contoso.Server.NonPublicCtorPlugin", plugin.DisplayName);
    }

    [TestMethod]
    public async Task SameNamespaceBaseClass_ResolvesThroughClassMap()
    {
        WritePlugin("PluginBase2.cs", """
            namespace Contoso.Server
            {
                public abstract class PluginBase2 : IPlugin
                {
                    public abstract void Execute(IServiceProvider serviceProvider);
                }
            }
            """);
        WritePlugin("SameNsPlugin.cs", """
            namespace Contoso.Server
            {
                [CrmPluginRegistration("Create", "lead", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "", "Contoso.Server.SameNsPlugin", 1, IsolationModeEnum.Sandbox)]
                public class SameNsPlugin : PluginBase2
                {
                    public void Execute(IServiceProvider serviceProvider)
                    {
                    }
                }
            }
            """);

        var candidates = await PluginTestDiscovery.GetAllTestCandidatesAsync(_testProjectFile);

        var plugin = candidates.Single(x => x.ClassName == "SameNsPlugin");
        Assert.AreEqual("Contoso.Server.SameNsPlugin", plugin.FullClassName);
        Assert.IsFalse(plugin.SupportsGuardTest); // no Execute(IServiceProvider) guard body
    }

    [TestMethod]
    public async Task CrossNamespaceUniqueBaseName_ResolvesByClassName()
    {
        WritePlugin("OtherBase.cs", """
            namespace Contoso.Other
            {
                public abstract class PluginBase : Microsoft.Xrm.Sdk.IPlugin
                {
                    public abstract void Execute(IServiceProvider serviceProvider);
                }
            }
            """);
        WritePlugin("CrossPlugin.cs", """
            using Microsoft.Xrm.Sdk;

            namespace Contoso.Server
            {
                [CrmPluginRegistration("Delete", "task", StageEnum.PreValidation, ExecutionModeEnum.Asynchronous, "", "Contoso.Server.CrossPlugin", 1, IsolationModeEnum.Sandbox)]
                public class CrossPlugin : PluginBase
                {
                    public void Execute(IServiceProvider serviceProvider)
                    {
                    }
                }
            }
            """);

        var candidates = await PluginTestDiscovery.GetAllTestCandidatesAsync(_testProjectFile);

        var plugin = candidates.Single(x => x.ClassName == "CrossPlugin");
        Assert.AreEqual("Contoso.Server.CrossPlugin", plugin.FullClassName);
        Assert.AreEqual("Delete", plugin.MessageName);
    }

    [TestMethod]
    public async Task GenericAndGlobalBaseSpellings_AreNormalized()
    {
        WritePlugin("MixedPlugin.cs", """
            using System;
            using Microsoft.Xrm.Sdk;

            namespace Contoso.Server
            {
                public class MixedPlugin : global::System.Collections.Generic.List<int>, global::Microsoft.Xrm.Sdk.IPlugin
                {
                    public void Execute(IServiceProvider serviceProvider)
                    {
                    }
                }
            }
            """);

        var candidates = await PluginTestDiscovery.GetAllTestCandidatesAsync(_testProjectFile);

        Assert.IsTrue(candidates.Any(x => x.ClassName == "MixedPlugin"));
    }

    [TestMethod]
    public async Task TwoLevelInheritance_ReachesIPlugin()
    {
        WritePlugin("RootBase.cs", """
            namespace Contoso.Server
            {
                public abstract class RootBase : Microsoft.Xrm.Sdk.IPlugin
                {
                }
            }
            """);
        WritePlugin("MidBase.cs", """
            namespace Contoso.Server
            {
                public abstract class MidBase : RootBase
                {
                }
            }
            """);
        WritePlugin("DeepPlugin.cs", """
            namespace Contoso.Server
            {
                [CrmPluginRegistration("Assign", "queue", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "", "Contoso.Server.DeepPlugin", 1, IsolationModeEnum.Sandbox)]
                public class DeepPlugin : MidBase
                {
                    public void Execute(IServiceProvider serviceProvider)
                    {
                    }
                }
            }
            """);

        var candidates = await PluginTestDiscovery.GetAllTestCandidatesAsync(_testProjectFile);

        Assert.IsTrue(candidates.Any(x => x.ClassName == "DeepPlugin"));
        // The abstract bases themselves never surface as candidates.
        Assert.IsFalse(candidates.Any(x => x.ClassName is "MidBase" or "RootBase"));
    }

    [TestMethod]
    public async Task ConventionTestClassInTestProject_IsExcludedFromCombo()
    {
        WritePlugin("SimplePlugin.cs", GuardPluginTemplate.Replace("$NAME$", "SimplePlugin"));
        File.WriteAllText(Path.Combine(_directory, "Contoso.Tests", "SimplePluginTest.cs"), """
            namespace Contoso.Tests
            {
                public class SimplePluginTest
                {
                }
            }
            """);

        var combo = await PluginTestDiscovery.GetTestCandidatesAsync(_testProjectFile);
        Assert.IsFalse(combo.Any(x => x.ClassName == "SimplePlugin"));

        var everything = await PluginTestDiscovery.GetAllTestCandidatesAsync(_testProjectFile);
        Assert.IsTrue(everything.Any(x => x.ClassName == "SimplePlugin"));
    }

    [TestMethod]
    public async Task LockedSourceFile_IsSkippedByTheScan()
    {
        var lockedPath = Path.Combine(_pluginProjectDirectory, "LockedPlugin.cs");
        WritePlugin("LockedPlugin.cs", GuardPluginTemplate.Replace("$NAME$", "LockedPlugin"));
        await using var locked = new FileStream(lockedPath, FileMode.Open, FileAccess.Read, FileShare.None);

        var candidates = await PluginTestDiscovery.GetAllTestCandidatesAsync(_testProjectFile);

        Assert.IsFalse(candidates.Any(x => x.ClassName == "LockedPlugin"));
    }

    [TestMethod]
    public async Task UnbalancedBraceInsideString_SourceIsTakenVerbatim()
    {
        WritePlugin("Unbalanced.cs", """
            namespace Contoso.Server
            {
                public class UnbalancedPlugin : Microsoft.Xrm.Sdk.IPlugin
                {
                    public void Execute(IServiceProvider serviceProvider)
                    {
                        var text = "{";
                    }
                }
            }
            """);

        var candidates = await PluginTestDiscovery.GetAllTestCandidatesAsync(_testProjectFile);

        Assert.IsTrue(candidates.Any(x => x.ClassName == "UnbalancedPlugin"));
    }

    [TestMethod]
    public async Task UnreadableProjectFile_YieldsEmptyCandidateList()
    {
        // The file exists but is exclusively locked → the project scan's
        // catch path runs and the result is the wizard's empty combo.
        var lockedProject = Path.Combine(_directory, "Locked.Tests.csproj");
        File.WriteAllText(lockedProject, "<Project />");
        await using var locked = new FileStream(lockedProject, FileMode.Open, FileAccess.Read, FileShare.None);

        var combo = await PluginTestDiscovery.GetTestCandidatesAsync(lockedProject);
        Assert.HasCount(0, combo);

        var missing = await PluginTestDiscovery.GetTestCandidatesAsync(Path.Combine(_directory, "Ghost.Tests.csproj"));
        Assert.HasCount(0, missing);

        var noReferences = Path.Combine(_directory, "Contoso.Tests", "Bare.csproj");
        File.WriteAllText(noReferences, "<Project Sdk=\"Microsoft.NET.Sdk\" />");
        var empty = await PluginTestDiscovery.GetTestCandidatesAsync(noReferences);
        Assert.HasCount(0, empty);
    }

    // NOTE: GetSourceFilesCacheKey's FileInfo catch and GetTestClassNames'
    // missing-directory guard are unreachable through the public API — the
    // scanned files are enumerated right before hashing and the test
    // folder is derived from an existing project file.
}
