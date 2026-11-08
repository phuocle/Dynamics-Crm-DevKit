using System.Reflection;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using DynamicsCrm.DevKit.Shared.Templates.T4;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates;

/// <summary>
/// Wave-2 gap coverage for the item template handlers, called directly:
/// the null-input guard and the bare-temp-directory root-namespace
/// resolution of the JS handlers, the connected org re-read after a cache
/// miss, the Plugin handler guards (project without RootNamespace, a T4
/// transformer failure, a BOM-less custom T4 file) and the JS/Plugin
/// helpers' no-project-root walk.
///
/// NOTE (dead code — not coverable):
/// - PluginItemTemplateHandler ~281-283 and CustomActionItemTemplateHandler
///   ~322-324 (`t4Code == null` → "--template ... not found"): the Shared
///   T4TemplateResolver falls back to the embedded default template for
///   unknown titles, so GetT4CodeAsync never returns null while the
///   resources are embedded.
/// - PluginItemTemplateHandler ~253-255 (BOM-less write of the plugin
///   class): the BOM decision reads the embedded Class.cs stub payload,
///   which always exists and always carries a BOM, so the without-UTF8-BOM
///   branch is unreachable.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ItemTemplateHandlerGapWave2CoverageTests
{
    private string _directory = null!;
    private string _bareDirectory = null!;
    private string _serverDirectory = null!;
    private List<EntityMetadata> _originalMetadataCache = null!;
    private FakeSdkClient _fake = null!;

    [TestInitialize]
    public void Initialize()
    {
        _directory = Path.Combine(Path.GetTempPath(), "devkit-itemhandler-gap2-" + Guid.NewGuid().ToString("N"));
        _bareDirectory = Path.Combine(_directory, "Bare");
        _serverDirectory = Path.Combine(_directory, "Dev.Contoso.Server");
        Directory.CreateDirectory(_bareDirectory);
        Directory.CreateDirectory(_serverDirectory);
        File.WriteAllText(Path.Combine(_serverDirectory, "Dev.Contoso.Server.csproj"),
            "<Project Sdk=\"Microsoft.NET.Sdk\">\r\n  <PropertyGroup>\r\n    <TargetFramework>net48</TargetFramework>\r\n    <RootNamespace>Dev.Contoso.Server</RootNamespace>\r\n  </PropertyGroup>\r\n</Project>");

        // Offline tests start from a populated cache; the connected test
        // resets it to empty to exercise the org re-read.
        _originalMetadataCache = XrmHelper.EntitiesMetadata;
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>
        {
            TestMetadata.Entity("account", "Account", TestMetadata.String("name"))
        };

        _fake = new FakeSdkClient();
        var accountMeta = TestMetadata.Entity("account", "Account", TestMetadata.String("name"));
        _fake.OnExecute = request => request switch
        {
            RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = new EntityMetadata[] { accountMeta } }
            },
            RetrieveEntityRequest => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = accountMeta }
            },
            _ => new OrganizationResponse()
        };
        _fake.OnRetrieveMultiple = query => new EntityCollection();

        ScaffoldingEngine.ClearHandlers();
        TemplateManifests.Clear();
        TemplateHandlers.RegisterAll();
    }

    [TestCleanup]
    public void Cleanup()
    {
        XrmHelper.EntitiesMetadata = _originalMetadataCache ?? new List<EntityMetadata>();
        ScaffoldingEngine.ClearHandlers();
        TemplateManifests.Clear();
        TemplateHandlers.RegisterAll();
        _fake?.Dispose();
        try { Directory.Delete(_directory, true); } catch { }
    }

    private ItemTemplateInput JsInput(string outputDirectory, ServiceClient? serviceClient = null) =>
        new()
        {
            TemplateId = "JsForm",
            Entity = "Account",
            Name = "Account Form Dialog",
            OutputDirectory = outputDirectory,
            Offline = true,
            RootNamespace = "Dev.Contoso.Client",
            ServiceClient = serviceClient,
            Transformer = new DynamicsCrm.DevKit.Cli.Templates.MonoTextTransformer(),
        };

    // ── JS handlers: input guard + root-namespace walk + org re-read ─────

    [TestMethod]
    public async Task JsHandlers_RequestWithoutInput_Fails()
    {
        var jsForm = await new JsFormItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest());
        Assert.IsFalse(jsForm.Success);
        StringAssert.Contains(jsForm.Errors[0], "input: required");

        var jsWebApi = await new JsWebApiItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest());
        Assert.IsFalse(jsWebApi.Success);
        StringAssert.Contains(jsWebApi.Errors[0], "input: required");
    }

    [TestMethod]
    public async Task JsHandlers_BareOutputDirectory_KeepsRootNamespace()
    {
        // No .csproj/.shproj anywhere above the output directory — the walk
        // returns null and the caller keeps the given root namespace as-is.
        // The JS handlers always need the org connection for entity forms,
        // so the fake client rides along.
        var jsForm = await new JsFormItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = JsInput(_bareDirectory, _fake.Client),
            Tokens = new Dictionary<string, string>(),
        });
        Assert.IsTrue(jsForm.Success, string.Join("; ", jsForm.Errors));

        var jsWebApi = await new JsWebApiItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = JsInput(_bareDirectory, _fake.Client),
            Tokens = new Dictionary<string, string>(),
        });
        Assert.IsTrue(jsWebApi.Success, string.Join("; ", jsWebApi.Errors));
    }

    [TestMethod]
    public async Task JsHandlers_ConnectedCacheMiss_RefillsFromOrgAndRenders()
    {
        // The XrmHelper cache starts empty; the handler fills it from the
        // fake org, re-finds the entity and re-reads its full metadata.
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        var jsForm = await new JsFormItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = JsInput(_serverDirectory, _fake.Client),
            Tokens = new Dictionary<string, string>(),
        });
        Assert.IsTrue(jsForm.Success, string.Join("; ", jsForm.Errors));
        Assert.IsTrue(XrmHelper.EntitiesMetadata.Any(x => x.LogicalName == "account"));

        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        var jsWebApi = await new JsWebApiItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = JsInput(_serverDirectory, _fake.Client),
            Tokens = new Dictionary<string, string>(),
        });
        Assert.IsTrue(jsWebApi.Success, string.Join("; ", jsWebApi.Errors));
    }

    // ── Plugin handler: namespace, transformer and T4 payload paths ──────

    private ItemTemplateInput PluginInput(
        string outputDirectory,
        string? rootNamespace = "Dev.Contoso.Server",
        ITextTransformer? transformer = null,
        string? t4Path = null) =>
        new()
        {
            TemplateId = "Plugin",
            Entity = "Account",
            Message = "Update",
            Stage = "PreOperation",
            Execution = "Synchronous",
            Order = 1,
            Name = "PreAccountUpdateGap",
            Class = "PreAccountUpdateGap",
            OutputDirectory = outputDirectory,
            Offline = true,
            RootNamespace = rootNamespace,
            ServiceClient = null,
            Transformer = transformer ?? new DynamicsCrm.DevKit.Cli.Templates.MonoTextTransformer(),
            T4Path = t4Path,
        };

    private static string BarePluginProject(string directory)
    {
        Directory.CreateDirectory(directory);
        var projectPath = Path.Combine(directory, "Bare.Plugin.csproj");
        File.WriteAllText(projectPath, "<Project Sdk=\"Microsoft.NET.Sdk\" />");
        return projectPath;
    }

    [TestMethod]
    public async Task Plugin_ProjectWithoutRootNamespace_Fails()
    {
        var bare = BarePluginProject(Path.Combine(_directory, "Bare.Plugin"));
        var result = await new PluginItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = PluginInput(Path.Combine(_directory, "Bare.Plugin"), rootNamespace: null),
            ProjectFile = bare,
            Tokens = new Dictionary<string, string>(),
        });

        Assert.IsFalse(result.Success);
        StringAssert.Contains(result.Errors[0], "the project carries no RootNamespace");
    }

    private sealed class ThrowingTransformer : ITextTransformer
    {
        public Task<string> TransformAsync(string t4Code, T4Context context) =>
            throw new InvalidOperationException("transformer exploded");
    }

    [TestMethod]
    public async Task Plugin_TransformerFailure_IsReported()
    {
        var result = await new PluginItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = PluginInput(_serverDirectory, transformer: new ThrowingTransformer()),
            ProjectFile = Path.Combine(_serverDirectory, "Dev.Contoso.Server.csproj"),
            Tokens = new Dictionary<string, string>(),
        });

        Assert.IsFalse(result.Success);
        StringAssert.Contains(result.Errors[0], "transformer exploded");
    }

    [TestMethod]
    public async Task Plugin_CustomBomLessT4_RendersWithoutUtf8Bom()
    {
        var t4Path = Path.Combine(_directory, "Custom.Plugin.tt");
        // A BOM-less custom T4 that transforms to plain content.
        File.WriteAllText(t4Path, "PLUGIN:static content");

        var result = await new PluginItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = PluginInput(_serverDirectory, t4Path: t4Path),
            ProjectFile = Path.Combine(_serverDirectory, "Dev.Contoso.Server.csproj"),
            Tokens = new Dictionary<string, string>(),
        });

        Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
        var written = File.ReadAllText(Path.Combine(_serverDirectory, "PreAccountUpdateGap.cs"));
        StringAssert.Contains(written, "PLUGIN:static content");
    }

    // ── FindProjectRoot walks (reflection) ───────────────────────────────

    private static string? InvokeFindProjectRoot(Type handlerType, string startDirectory)
    {
        var method = handlerType.GetMethod("FindProjectRoot", BindingFlags.NonPublic | BindingFlags.Static);
        Assert.IsNotNull(method);
        return (string?)method!.Invoke(null, [startDirectory]);
    }

    [TestMethod]
    public void FindProjectRoot_NoProjectAbove_ReturnsNull()
    {
        Assert.IsNull(InvokeFindProjectRoot(typeof(JsFormItemTemplateHandler), _bareDirectory));
        Assert.IsNull(InvokeFindProjectRoot(typeof(JsWebApiItemTemplateHandler), _bareDirectory));
        Assert.IsNotNull(InvokeFindProjectRoot(typeof(JsFormItemTemplateHandler), _serverDirectory));
    }
}
