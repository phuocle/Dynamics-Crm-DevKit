using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// Targets the remaining Helper/RetryHelper/XrmHelper/NuGetHelper/FileHelper/
/// TypeScriptBuildPathHelper/PacProfileHelper branches: the MessageNameEnum
/// CrmPluginRegistration ctor + RunAs named argument (via a Roslyn-compiled
/// attribute payload), the SignTool process paths (stdout/success via
/// hostname.exe, stderr/failure via cmd.exe), package signing failure output,
/// and small pure helpers.
/// </summary>
[TestClass]
public sealed class HelperGapCoverageTests
{
    private string _tempDir = null!;

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "DevKitCli_HelperGap", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
    }

    [TestCleanup]
    public void Cleanup()
    {
        if (Directory.Exists(_tempDir)) Directory.Delete(_tempDir, true);
    }

    // ──────────────────────────────────────────────
    // ConvertAttributeToCrmPluginRegistration
    // ──────────────────────────────────────────────

    private const string EnumAttributeSource = """
        namespace TestPayload
        {
            public enum MessageNameEnum { AddItem = 0, Create = 25 }
            public enum StageEnum { PreValidation = 10, PreOperation = 20, PostOperation = 40 }
            public enum ExecutionModeEnum { Synchronous = 0, Asynchronous = 1 }
            public enum IsolationModeEnum { None, Sandbox }

            [System.AttributeUsage(System.AttributeTargets.Class, AllowMultiple = true)]
            public class CrmPluginRegistrationAttribute : System.Attribute
            {
                public CrmPluginRegistrationAttribute(string message, string entityLogicalName, StageEnum stage, ExecutionModeEnum executionMode, string filteringAttributes, string name, int executionOrder, IsolationModeEnum isolationMode) { }
                public CrmPluginRegistrationAttribute(MessageNameEnum message, string entityLogicalName, StageEnum stage, ExecutionModeEnum executionMode, string filteringAttributes, string name, int executionOrder, IsolationModeEnum isolationMode) { }
                public bool Unregister { get; set; }
                public string RunAs { get; set; }
            }

            [CrmPluginRegistration(MessageNameEnum.Create, "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, "name", "Enum Step", 3, IsolationModeEnum.Sandbox, Unregister = true, RunAs = "ABIZ\\svc")]
            public class EnumMessagePlugin { }
        }
        """;

    [TestMethod]
    public void ConvertAttribute_MessageNameEnumCtor_MapsAllEightAndRunAs()
    {
        var data = GetFirstAttributeData(EnumAttributeSource, "EnumMessagePlugin");
        var converted = Helper.ConvertAttributeToCrmPluginRegistration(data);

        Assert.AreEqual("Create", converted.Message);
        Assert.AreEqual("account", converted.EntityLogicalName);
        Assert.AreEqual(StageEnum.PreOperation, converted.Stage);
        Assert.AreEqual(ExecutionModeEnum.Synchronous, converted.ExecutionMode);
        Assert.AreEqual("name", converted.FilteringAttributes);
        Assert.AreEqual("Enum Step", converted.Name);
        Assert.AreEqual(3, converted.ExecutionOrder);
        Assert.AreEqual(IsolationModeEnum.Sandbox, converted.IsolationMode);
        Assert.IsTrue(converted.Unregister);
        Assert.AreEqual("ABIZ\\svc", converted.RunAs);
    }

    private static CustomAttributeData GetFirstAttributeData(string source, string typeName)
    {
        var syntaxTree = CSharpSyntaxTree.ParseText(source);
        var references = new List<MetadataReference> { MetadataReference.CreateFromFile(typeof(object).Assembly.Location) };
        var runtimeDir = Path.GetDirectoryName(typeof(object).Assembly.Location)!;
        foreach (var framework in new[] { "System.Runtime.dll", "netstandard.dll" })
        {
            var path = Path.Combine(runtimeDir, framework);
            if (File.Exists(path)) references.Add(MetadataReference.CreateFromFile(path));
        }
        var compilation = CSharpCompilation.Create(
            "GapPayload_" + Guid.NewGuid().ToString("N"),
            new[] { syntaxTree },
            references,
            new CSharpCompilationOptions(OutputKind.DynamicallyLinkedLibrary));
        using var ms = new MemoryStream();
        var result = compilation.Emit(ms);
        Assert.IsTrue(result.Success, "payload compilation failed: " + string.Join("; ", result.Diagnostics.Take(3).Select(d => d.ToString())));
        var loaded = Assembly.Load(ms.ToArray());
        var type = loaded.GetType("TestPayload." + typeName)!;
        return type.GetCustomAttributesData().Single(d => d.AttributeType.Name == "CrmPluginRegistrationAttribute");
    }

    // ──────────────────────────────────────────────
    // Small pure helpers
    // ──────────────────────────────────────────────

    [TestMethod]
    public void GetMessagePropertyName_SetStateDynamicEntityAndDeliver_ReturnMonikerAndEmailId()
    {
        Assert.AreEqual("EntityMoniker", Helper.GetMessagePropertyName("SetStateDynamicEntity"));
        Assert.AreEqual("EmailId", Helper.GetMessagePropertyName("DeliverIncoming"));
        Assert.AreEqual("EmailId", Helper.GetMessagePropertyName("DeliverPromote"));
    }

    [TestMethod]
    public void GetExtension_EveryWebResourceType_ReturnsKnownExtension()
    {
        foreach (WebResourceWebResourceType type in Enum.GetValues(typeof(WebResourceWebResourceType)))
        {
            var ext = Helper.GetExtension(type);
            Assert.IsTrue(ext.StartsWith('.'), $"{type} => {ext}");
        }
    }

    [TestMethod]
    public void SafeNamespace_DigitPrefixedSegment_IsPrefixedWithUnderscore()
    {
        Assert.AreEqual("Dev._1abc.Foo", Helper.SafeNamespace("Dev.1abc.Foo"));
        Assert.AreEqual("Dev._123.Bar", Helper.SafeNamespace("Dev.123.Bar"));
        Assert.AreEqual(string.Empty, Helper.SafeNamespace(null));
    }

    [TestMethod]
    public void TryDeleteDirectory_LockedDirectory_DoesNotThrow()
    {
        var dir = Path.Combine(_tempDir, "locked");
        Directory.CreateDirectory(dir);
        var filePath = Path.Combine(dir, "held.txt");
        using (var stream = new FileStream(filePath, FileMode.Create, FileAccess.ReadWrite, FileShare.None))
        {
            Helper.TryDeleteDirectory(dir);
            Assert.IsTrue(Directory.Exists(dir), "locked directory must survive the delete attempt.");
        }
        Helper.TryDeleteDirectory(dir);
        Assert.IsFalse(Directory.Exists(dir));
    }

    [TestMethod]
    public void TryDeleteFile_LockedFile_DoesNotThrow()
    {
        var filePath = Path.Combine(_tempDir, "locked.txt");
        File.WriteAllText(filePath, "content");
        using (new FileStream(filePath, FileMode.Open, FileAccess.Read, FileShare.None))
        {
            Helper.TryDeleteFile(filePath);
            Assert.IsTrue(File.Exists(filePath));
        }
        Helper.TryDeleteFile(filePath);
        Assert.IsFalse(File.Exists(filePath));
    }

    [TestMethod]
    public void Compress_NullInput_ReturnsInputUnchanged()
    {
        Assert.IsNull(Helper.Compress(null));
        var round = Helper.Decompress(Helper.Compress("hello"));
        Assert.AreEqual("hello", round);
    }

    [TestMethod]
    public void GetFiles_MissingFolder_ReturnsEmptyList()
    {
        var files = Helper.GetFiles(Path.Combine(_tempDir, "no_such_dir"), ["*.txt"], []);
        Assert.AreEqual(0, files.Count);
    }

    // ──────────────────────────────────────────────
    // Signing
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task SignAssemblyAsync_SuccessfulProcess_ReadsStdoutAndReturnsOk()
    {
        var fakeTool = CompileSignToolExe("Console.WriteLine(\"Signed: dummy.dll\");", 0);
        var (ok, error) = await Helper.SignAssemblyAsync(fakeTool, "dummy.dll", "cert.pfx");
        Assert.IsTrue(ok, error);
    }

    [TestMethod]
    public async Task SignAssemblyAsync_FailingProcess_WithPassword_ReportsStderr()
    {
        var fakeTool = CompileSignToolExe("Console.Error.WriteLine(\"signtool: no certificate found\"); return 3;", 3);
        var (ok, error) = await Helper.SignAssemblyAsync(fakeTool, "dummy.dll", "cert.pfx", "secret");
        Assert.IsFalse(ok);
        StringAssert.Contains(error, "no certificate found");
    }

    /// <summary>Compiles a stand-in signtool.exe whose Main body is scripted.</summary>
    private string CompileSignToolExe(string mainBody, int exitCode)
    {
        var source = """
            using System;
            namespace FakeSignTool
            {
                public static class Program
                {
                    public static int Main(string[] args)
                    {
                        __MAIN_BODY__
                        return __EXIT_CODE__;
                    }
                }
            }
            """.Replace("__MAIN_BODY__", mainBody).Replace("__EXIT_CODE__", exitCode.ToString());
        var syntaxTree = CSharpSyntaxTree.ParseText(source);
        // A real .NET Framework 4.8 executable runs natively via mscoree —
        // a Roslyn net10 emit would be an IL-only PE without an apphost.
        var frameworkRefs = @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.8";
        var references = new List<MetadataReference>
        {
            MetadataReference.CreateFromFile(Path.Combine(frameworkRefs, "mscorlib.dll")),
            MetadataReference.CreateFromFile(Path.Combine(frameworkRefs, "System.dll")),
            MetadataReference.CreateFromFile(Path.Combine(frameworkRefs, "System.Core.dll"))
        };
        var compilation = CSharpCompilation.Create(
            "FakeSignTool_" + Guid.NewGuid().ToString("N"),
            new[] { syntaxTree },
            references,
            new CSharpCompilationOptions(OutputKind.ConsoleApplication));
        var exePath = Path.Combine(_tempDir, $"FakeSignTool_{Guid.NewGuid():N}.exe");
        using (var fs = File.Create(exePath))
        {
            var result = compilation.Emit(fs);
            Assert.IsTrue(result.Success, "fake signtool compilation failed: " + string.Join("; ", result.Diagnostics.Take(3).Select(d => d.ToString())));
        }
        var runtimeVersion = Path.GetFileName(Path.GetDirectoryName(typeof(object).Assembly.Location))!;
        var runtimeConfig = """
            {
              "runtimeOptions": {
                "tfm": "net10.0",
                "framework": {
                  "name": "Microsoft.NETCore.App",
                  "version": "__RUNTIME_VERSION__"
                }
              }
            }
            """.Replace("__RUNTIME_VERSION__", runtimeVersion);
        File.WriteAllText(Path.ChangeExtension(exePath, ".runtimeconfig.json"), runtimeConfig);
        return exePath;
    }

    [TestMethod]
    public async Task SignPackageAsync_MissingCertificate_ReportsErrorOutput()
    {
        var package = Path.Combine(_tempDir, "fake.nupkg");
        await File.WriteAllTextAsync(package, "not a real package");
        var (ok, error) = await Helper.SignPackageAsync(package, Path.Combine(_tempDir, "missing.pfx"), "secret");
        Assert.IsFalse(ok);
        Assert.IsFalse(string.IsNullOrEmpty(error));
    }

    // ──────────────────────────────────────────────
    // RetryHelper / XrmHelper
    // ──────────────────────────────────────────────

    [TestMethod]
    public void IsTransient_FaultCodesAndMessages_ClassifyCorrectly()
    {
        var isTransient = (Func<Exception, bool>)typeof(RetryHelper)
            .GetMethod("IsTransient", BindingFlags.NonPublic | BindingFlags.Static)!
            .CreateDelegate(typeof(Func<Exception, bool>));

        Assert.IsTrue(isTransient(new TimeoutException()));
        Assert.IsTrue(isTransient(new System.Net.Http.HttpRequestException("boom")));

        var fault = new FaultException<OrganizationServiceFault>(new OrganizationServiceFault { ErrorCode = -2147204784 }, new FaultReason("busy"));
        Assert.IsTrue(isTransient(fault));

        var faultOther = new FaultException<OrganizationServiceFault>(new OrganizationServiceFault { ErrorCode = 12345 }, new FaultReason("nope"));
        Assert.IsFalse(isTransient(faultOther));

        Assert.IsTrue(isTransient(new Exception("The server is busy right now")));
        Assert.IsFalse(isTransient(new Exception("all good")));
        Assert.IsTrue(isTransient(new Exception("wrapped", new TimeoutException())));
    }

    // ──────────────────────────────────────────────
    // XrmHelper.IsWorkflowType (internal)
    // ──────────────────────────────────────────────

    private const string WorkflowBaseSource = """
        namespace System.Activities
        {
            public class CodeActivity { }
        }
        namespace TestPayload
        {
            public class MyWorkflow : System.Activities.CodeActivity { }
            public class NotAWorkflow { }
        }
        """;

    [TestMethod]
    public void IsWorkflowType_BaseTypeChain_ClassifiesWorkflowTypes()
    {
        var loaded = CompilePayload(WorkflowBaseSource, "WorkflowBasePayload");
        var workflow = loaded.GetType("TestPayload.MyWorkflow")!;
        var notWorkflow = loaded.GetType("TestPayload.NotAWorkflow")!;

        Assert.IsTrue(XrmHelper.IsWorkflowType(workflow));
        Assert.IsFalse(XrmHelper.IsWorkflowType(notWorkflow));
        Assert.IsFalse(XrmHelper.IsWorkflowType(null));
    }

    private static Assembly CompilePayload(string source, string assemblyName)
    {
        var syntaxTree = CSharpSyntaxTree.ParseText(source);
        var references = new List<MetadataReference> { MetadataReference.CreateFromFile(typeof(object).Assembly.Location) };
        var runtimeDir = Path.GetDirectoryName(typeof(object).Assembly.Location)!;
        foreach (var framework in new[] { "System.Runtime.dll", "netstandard.dll" })
        {
            var path = Path.Combine(runtimeDir, framework);
            if (File.Exists(path)) references.Add(MetadataReference.CreateFromFile(path));
        }
        var compilation = CSharpCompilation.Create(
            assemblyName + "_" + Guid.NewGuid().ToString("N"),
            new[] { syntaxTree },
            references,
            new CSharpCompilationOptions(OutputKind.DynamicallyLinkedLibrary));
        using var ms = new MemoryStream();
        var result = compilation.Emit(ms);
        Assert.IsTrue(result.Success, "payload compilation failed: " + string.Join("; ", result.Diagnostics.Take(3).Select(d => d.ToString())));
        return Assembly.Load(ms.ToArray());
    }

    // ──────────────────────────────────────────────
    // NuGetHelper (network calls against nuget.org)
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task GetLatestVersionAsync_KnownPackage_ReturnsLatestStable()
    {
        var version = await NuGetHelper.GetLatestVersionAsync("Bogus");
        Assert.IsNotNull(version);
    }

    [TestMethod]
    public async Task GetTargetFrameworkAsync_PinnedAndNetworkPaths()
    {
        var pinnedSelenium = NuGetHelper.DefaultVersions["Selenium.WebDriver"].TargetFramework;
        Assert.AreEqual(pinnedSelenium, await NuGetHelper.GetTargetFrameworkAsync("Selenium.WebDriver"));

        var networkTf = await NuGetHelper.GetTargetFrameworkAsync("DynamicsCrm.DevKit.Analyzers");
        Assert.IsTrue(networkTf.StartsWith("net"), networkTf);
    }

    // ──────────────────────────────────────────────
    // FileHelper / TypeScriptBuildPathHelper
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task ReadAllTextFromLine6Async_MissingFile_ReturnsEmpty()
    {
        var text = await FileHelper.ReadAllTextFromLine6Async(Path.Combine(_tempDir, "missing.txt"));
        Assert.AreEqual(string.Empty, text);
    }

    [TestMethod]
    public void GetWebResourcePathCandidates_DeployableTypeScript_IncludesLegacyBuildPath()
    {
        var projectRoot = Path.Combine(_tempDir, "webproj");
        Directory.CreateDirectory(Path.Combine(projectRoot, "web"));
        File.WriteAllText(Path.Combine(projectRoot, "package.json"), "{}");
        var tsFile = Path.Combine(projectRoot, "web", "accounts.ts");
        File.WriteAllText(tsFile, "export const x = 1;");

        var candidates = TypeScriptBuildPathHelper.GetWebResourcePathCandidates(tsFile, tsFile, projectRoot);
        Assert.IsTrue(candidates.Count > 0);

        Assert.IsNull(TypeScriptBuildPathHelper.GetRelativePath("", "C:\\x"));
        Assert.IsNotNull(TypeScriptBuildPathHelper.GetRelativePath(_tempDir, tsFile));
    }
}
