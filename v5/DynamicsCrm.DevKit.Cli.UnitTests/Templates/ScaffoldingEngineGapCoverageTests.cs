using DynamicsCrm.DevKit.Cli.Templates;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.T4;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates;

/// <summary>
/// Second-pass coverage for the ScaffoldingEngine and the small template
/// catalog seams: the null-input guards of ScaffoldProjectAsync /
/// ScaffoldItemAsync, the manifest renderer's error and Skipped paths,
/// the "handler returned no result" fallback, the corrupt-csproj
/// RootNamespace fallback, plus TemplateCatalog.Exists,
/// TemplateManifests.Registered, TemplateDescriptor.ToString, the RSA
/// CSP field guard of SigningService, WorkspaceScanner.FromSolution /
/// ReadRootNamespace, T4TemplateResolver.GetCustomTemplateTitles and the
/// empty-T4 guard of MonoTextTransformer.
/// </summary>
[TestClass]
[DoNotParallelize]
public class ScaffoldingEngineGapCoverageTests
{
    private string _directory = null!;

    [TestInitialize]
    public void Initialize()
    {
        _directory = Path.Combine(Path.GetTempPath(), "devkit-engine-gap-tests", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_directory);
        ScaffoldingEngine.ClearHandlers();
        TemplateManifests.Clear();
        TemplateHandlers.RegisterAll();
    }

    [TestCleanup]
    public void Cleanup()
    {
        ScaffoldingEngine.ClearHandlers();
        TemplateManifests.Clear();
        TemplateHandlers.RegisterAll();
        try { Directory.Delete(_directory, true); } catch { }
    }

    // ── Engine null-input guards ─────────────────────────────────────────────

    [TestMethod]
    public async Task ScaffoldProjectAsync_NullInput_ReportsInputRequired()
    {
        var result = await ScaffoldingEngine.ScaffoldProjectAsync(null!);
        Assert.IsFalse(result.Success);
        StringAssert.Contains(result.Errors[0], "input: required");
    }

    [TestMethod]
    public async Task ScaffoldItemAsync_NullInput_ReportsInputRequired()
    {
        var result = await ScaffoldingEngine.ScaffoldItemAsync(null!);
        Assert.IsFalse(result.Success);
        StringAssert.Contains(result.Errors[0], "input: required");
    }

    // ── RenderManifestFilesAsync ─────────────────────────────────────────────

    [TestMethod]
    public async Task RenderManifestFilesAsync_NullManifest_ReportsManifestRequired()
    {
        var result = new ScaffoldResult { TemplateId = "X" };
        await ScaffoldingEngine.RenderManifestFilesAsync(null!, new System.Collections.Generic.Dictionary<string, string>(), _directory, false, result);
        Assert.IsFalse(result.Success);
        StringAssert.Contains(result.Errors[0], "manifest: required");
    }

    [TestMethod]
    public async Task RenderManifestFilesAsync_MissingResource_ReportsResourceNotFound()
    {
        var manifest = new TemplateManifest
        {
            TemplateId = "Ghost",
            Kind = TemplateKind.Item,
        };
        manifest.Files.Add(new TemplatePayloadFile { ResourceName = "no.such.resource", TargetFileName = "Ghost.txt" });

        var result = new ScaffoldResult { TemplateId = "Ghost" };
        await ScaffoldingEngine.RenderManifestFilesAsync(manifest, new System.Collections.Generic.Dictionary<string, string>(), _directory, false, result);

        StringAssert.Contains(result.Errors[0], "resource not found: no.such.resource");
    }

    [TestMethod]
    public async Task RenderManifestFilesAsync_ExistingUserFile_SkipsUnlessForced()
    {
        var resourceName = PluginItemTemplateHandler.CreateManifest().Files[0].ResourceName;
        var target = Path.Combine(_directory, "UserFile.txt");
        await File.WriteAllTextAsync(target, "user edited content");

        var manifest = new TemplateManifest { TemplateId = "Plugin", Kind = TemplateKind.Item };
        manifest.Files.Add(new TemplatePayloadFile { ResourceName = resourceName, TargetFileName = "UserFile.txt" });

        var result = new ScaffoldResult { TemplateId = "Plugin" };
        await ScaffoldingEngine.RenderManifestFilesAsync(manifest, new System.Collections.Generic.Dictionary<string, string>(), _directory, false, result);
        Assert.AreEqual("Skipped", result.Files.Single().Action);
        Assert.AreEqual("user edited content", await File.ReadAllTextAsync(target));

        var forced = new ScaffoldResult { TemplateId = "Plugin" };
        await ScaffoldingEngine.RenderManifestFilesAsync(manifest, new System.Collections.Generic.Dictionary<string, string>(), _directory, true, forced);
        Assert.AreEqual("Updated", forced.Files.Single().Action);
        Assert.AreNotEqual("user edited content", await File.ReadAllTextAsync(target));
    }

    // ── Handler contract ─────────────────────────────────────────────────────

    private sealed class NullReturningHandler : ITemplateHandler
    {
        public string TemplateId => ItemType.Plugin.ToString();
        public Task<ScaffoldResult> ScaffoldAsync(ScaffoldRequest request) => Task.FromResult<ScaffoldResult>(null!);
    }

    [TestMethod]
    public async Task ScaffoldItemAsync_HandlerReturnsNull_ReportsNoResult()
    {
        ScaffoldingEngine.ClearHandlers();
        ScaffoldingEngine.RegisterHandler(TemplateKind.Item, new NullReturningHandler());

        var projectDirectory = Path.Combine(_directory, "Dev.Contoso.Server");
        Directory.CreateDirectory(projectDirectory);
        File.WriteAllText(Path.Combine(projectDirectory, "Dev.Contoso.Server.csproj"), "<Project Sdk=\"Microsoft.NET.Sdk\" />");

        var result = await ScaffoldingEngine.ScaffoldItemAsync(new ItemTemplateInput
        {
            TemplateId = "Plugin",
            Name = "PreAccountUpdate",
            Entity = "Account",
            Message = "Update",
            Stage = "PreOperation",
            OutputDirectory = projectDirectory,
            Offline = true,
        });

        Assert.IsFalse(result.Success);
        StringAssert.Contains(result.Errors[0], "handler returned no result");
    }

    [TestMethod]
    public async Task ScaffoldItemAsync_CorruptProjectFile_FallsBackToFileNameNamespace()
    {
        // ReadProjectRootNamespace's catch → the file name names the
        // namespace, exactly like the scanner's fallback.
        var projectDirectory = Path.Combine(_directory, "Corrupt");
        Directory.CreateDirectory(projectDirectory);
        File.WriteAllText(Path.Combine(projectDirectory, "Corrupt.csproj"), "<Project><Unclosed>");

        var result = await ScaffoldingEngine.ScaffoldItemAsync(new ItemTemplateInput
        {
            TemplateId = "Plugin",
            Name = "PreAccountUpdate",
            Entity = "Account",
            Message = "Update",
            Stage = "PreOperation",
            OutputDirectory = projectDirectory,
            Offline = true,
            Transformer = new MonoTextTransformer(),
        });

        Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
        var code = await File.ReadAllTextAsync(Path.Combine(projectDirectory, "PreAccountUpdate.cs"));
        StringAssert.Contains(code, "namespace Corrupt");
    }

    [TestMethod]
    public void ScaffoldRequest_ManifestRoundTrips()
    {
        var manifest = new TemplateManifest { TemplateId = "Plugin", Kind = TemplateKind.Item };
        var request = new ScaffoldRequest { Manifest = manifest };
        Assert.AreSame(manifest, request.Manifest);
    }

    // ── Platform-only no-ops (documented for the Windows test host) ─────────
    // MarkExecutable and RewritePlatformScriptReferences return before any
    // statement when running on Windows; their bodies are only reachable on
    // macOS/Linux hosts, so they stay uncovered here by design.

    [TestMethod]
    public void MarkExecutable_MissingFile_IsSafeNoOp()
    {
        ScaffoldingEngine.MarkExecutable(null);
        ScaffoldingEngine.MarkExecutable(Path.Combine(_directory, "Ghost.sh"));
    }

    [TestMethod]
    public void RewritePlatformScriptReferences_MissingFile_IsSafeNoOp()
    {
        ScaffoldingEngine.RewritePlatformScriptReferences(null);
        ScaffoldingEngine.RewritePlatformScriptReferences(Path.Combine(_directory, "Ghost.csproj"));
    }

    // ── Catalog / manifest registry seams ────────────────────────────────────

    [TestMethod]
    public void TemplateCatalog_Exists_MatchesKnownTemplatesOnly()
    {
        Assert.IsTrue(TemplateCatalog.Exists("Plugin", TemplateKind.Item));
        Assert.IsTrue(TemplateCatalog.Exists("plugin", TemplateKind.Item)); // case-insensitive
        Assert.IsFalse(TemplateCatalog.Exists("Ghost", TemplateKind.Item));
        Assert.IsFalse(TemplateCatalog.Exists("", TemplateKind.Item));
        Assert.IsFalse(TemplateCatalog.Exists(null, TemplateKind.Item));
    }

    [TestMethod]
    public void TemplateManifests_Registered_ListsEveryRegisteredManifest()
    {
        TemplateManifests.Clear();
        TemplateHandlers.RegisterAll();
        var registered = TemplateManifests.Registered.ToList();
        Assert.IsTrue(registered.Any(x => x.TemplateId == "Plugin"));
        Assert.IsTrue(registered.All(x => x.Files.Count > 0));
    }

    [TestMethod]
    public void TemplateDescriptor_ToString_ShowsIdAndKind()
    {
        var descriptor = TemplateCatalog.Find("Plugin", TemplateKind.Item)!;
        Assert.AreEqual($"Plugin ({TemplateKind.Item})", descriptor.ToString());
    }

    // ── SigningService CSP field guard ───────────────────────────────────────

    [TestMethod]
    public void SigningService_FixedLengthLittleEndian_RejectsOversizedParameter()
    {
        var method = typeof(SigningService).GetMethod("FixedLengthLittleEndian", BindingFlags.NonPublic | BindingFlags.Static);
        Assert.IsNotNull(method);

        var error = Assert.ThrowsExactly<TargetInvocationException>(() =>
            method!.Invoke(null, [new byte[] { 1, 2, 3, 4, 5 }, 2]));
        StringAssert.Contains(error.InnerException!.Message, "longer than the CSP field");
    }

    // ── WorkspaceScanner seams ───────────────────────────────────────────────

    [TestMethod]
    public void WorkspaceScanner_FromSolution_AnchorsAtNamedSolution()
    {
        var solutionDirectory = Path.Combine(_directory, "Src");
        var projectDirectory = Path.Combine(solutionDirectory, "Dev.Contoso.Server");
        Directory.CreateDirectory(projectDirectory);
        var solutionFile = Path.Combine(solutionDirectory, "Contoso.sln");
        File.WriteAllText(solutionFile, string.Empty);

        var context = WorkspaceScanner.FromSolution(solutionFile, projectDirectory);
        Assert.AreEqual(solutionFile, context.SolutionFile);
        Assert.AreEqual("Contoso", context.SolutionName);
        Assert.AreEqual(solutionDirectory, context.SolutionDirectory);

        // A missing solution file yields the walk-up context instead.
        var fallback = WorkspaceScanner.FromSolution(Path.Combine(_directory, "Ghost.sln"), projectDirectory);
        Assert.IsNull(fallback.SolutionFile);
    }

    [TestMethod]
    public void WorkspaceScanner_ReadRootNamespace_ReadsProjectElement()
    {
        var method = typeof(WorkspaceScanner).GetMethod("ReadRootNamespace", BindingFlags.NonPublic | BindingFlags.Static);
        Assert.IsNotNull(method);

        var csproj = Path.Combine(_directory, "Named.csproj");
        File.WriteAllText(csproj, "<Project Sdk=\"Microsoft.NET.Sdk\"><PropertyGroup><RootNamespace>Contoso.Named</RootNamespace></PropertyGroup></Project>");
        Assert.AreEqual("Contoso.Named", method!.Invoke(null, [csproj]));

        var plain = Path.Combine(_directory, "Plain.csproj");
        File.WriteAllText(plain, "<Project Sdk=\"Microsoft.NET.Sdk\" />");
        Assert.IsNull(method.Invoke(null, [plain]));
    }

    // ── T4 resolver / transformer guards ─────────────────────────────────────

    [TestMethod]
    public void T4TemplateResolver_GetCustomTemplateTitles_ListsConfiguredTitles()
    {
        Assert.HasCount(0, T4TemplateResolver.GetCustomTemplateTitles(ItemType.Plugin, _directory));

        var configJson = new ConfigJson
        {
            CustomTemplates = new System.Collections.Generic.List<CustomTemplate>
            {
                new() { Type = "Plugin", Title = "Mine", IsDefault = false },
                new() { Type = "Plugin", Title = "  " }, // whitespace titles are skipped
                new() { Type = "CustomApi", Title = "ApiMine", IsDefault = false },
            },
        };
        File.WriteAllText(Path.Combine(_directory, Const.DynamicsCrmDevKitCliJson), JsonHelper.Serialize(configJson));

        var titles = T4TemplateResolver.GetCustomTemplateTitles(ItemType.Plugin, _directory);
        CollectionAssert.AreEqual(new[] { "Mine" }, titles);
        // The lookup walks UP: a sub-directory without its own Cli.json still
        // finds the parent config and lists the CustomApi title.
        CollectionAssert.AreEqual(new[] { "ApiMine" }, T4TemplateResolver.GetCustomTemplateTitles(ItemType.CustomApi, Path.Combine(_directory, "nowhere")));
    }

    [TestMethod]
    public async Task MonoTextTransformer_EmptyT4Code_Throws()
    {
        var transformer = new MonoTextTransformer();
        var error = await Assert.ThrowsExactlyAsync<InvalidOperationException>(() =>
            transformer.TransformAsync("  ", new T4Context()));
        StringAssert.Contains(error.Message, "t4Code: required");
    }
}
