using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

[TestClass]
public class McpMultiConnectionTests
{
    private static Dictionary<string, string> Values() => new(StringComparer.OrdinalIgnoreCase)
    {
        ["DEVKIT_ALIAS"] = "dev", ["DEVKIT_URL"] = "https://dev.example.invalid",
        ["DEVKIT_1_ALIAS"] = "prod", ["DEVKIT_1_DRY_RUN"] = "true",
        ["DEVKIT_1_URL"] = "https://prod.example.invalid"
    };
    private static ConnectionBundle Bundle(string id, bool dryRun = false, StubService? service = null, Action? dispose = null) =>
        new(id, null!, dryRun, null!, service ?? new StubService(id), null!, null!, null!, null!, dispose!);
    private static McpConnectionRegistry Registry(McpConnectionSnapshot snapshot, ConnectionBundle startup,
        Func<string, McpCommandArgs, CancellationToken, Task<ConnectionBundle>>? factory = null) =>
        new(snapshot, new McpCommandArgs { Url = "https://cli.example.invalid", DryRun = startup.Options.DryRun, ResolvedConnectionSource = "command-line arguments" }, false, startup, factory!);
    private static string Text(CallToolResult result) => ((TextContentBlock)result.Content[0]).Text;
    private static async Task<T> Throws<T>(Func<Task> action) where T : Exception
    {
        try { await action(); } catch (T ex) { return ex; }
        Assert.Fail("Expected " + typeof(T).Name); return null!;
    }

    [TestMethod]
    public void Snapshot_AliasAndStartupAreIndependent_AndValuesAreFrozen()
    {
        var values = Values();
        var snapshot = new McpConnectionSnapshot(values, "PROD");
        values["DEVKIT_1_DRY_RUN"] = "false";
        Assert.AreEqual("1", snapshot.ResolveId(null!));
        Assert.AreEqual("1", snapshot.ResolveId(" prod "));
        Assert.AreEqual("default", snapshot.ResolveId("default"));
        Assert.AreEqual("default", snapshot.ResolveId("DEV"));
        Assert.IsTrue(snapshot.DryRun("1", false));
        Assert.IsFalse(snapshot.DryRun("default", false));
    }

    [TestMethod]
    [DataRow(false, null, null, false, false)]
    [DataRow(true, null, null, true, true)]
    [DataRow(true, null, "false", true, true)]
    [DataRow(false, null, "true", false, true)]
    [DataRow(false, "true", null, true, true)]
    [DataRow(false, "true", "false", true, false)]
    public void DryRun_CascadeAtoF(bool flag, string? baseValue, string? groupValue, bool expectedDefault, bool expectedGroup)
    {
        var values = new Dictionary<string, string>();
        if (baseValue != null) values["DEVKIT_DRY_RUN"] = baseValue;
        if (groupValue != null) values["DEVKIT_1_DRY_RUN"] = groupValue;
        var snapshot = new McpConnectionSnapshot(values);
        Assert.AreEqual(expectedDefault, snapshot.DryRun("default", flag));
        Assert.AreEqual(expectedGroup, snapshot.DryRun("1", flag));
    }

    [TestMethod]
    [DataRow("DEVKIT_1_DRY_RUN", "")]
    [DataRow("DEVKIT_1_DRY_RUN", "yes")]
    [DataRow("DEVKIT_1_DRY_RUN", "1")]
    [DataRow("DEVKIT_1_ALIAS", "default")]
    [DataRow("DEVKIT_1_ALIAS", "1prod")]
    [DataRow("DEVKIT_1_ALIAS", "_prod")]
    public void Snapshot_RejectsInvalidPolicyBeforeConnection(string key, string value)
    {
        try { _ = new McpConnectionSnapshot(new Dictionary<string, string> { [key] = value }); Assert.Fail("Expected configuration error"); }
        catch (McpConnectionConfigurationException ex) { StringAssert.Contains(ex.Message, key); }
    }

    [TestMethod]
    public void Discovery_RecognizedKeysOnly_LargeNumericIds_AndDuplicateAliases()
    {
        var values = new Dictionary<string, string> { ["DEVKIT_10_ALIAS"] = "ten", ["DEVKIT_2_AS_USER"] = "user@example.invalid",
            ["DEVKIT_999999999999999999999999_DRY_RUN"] = "TRUE", ["DEVKIT_01_URL"] = "ignored", ["DEVKIT_1_NOTE"] = "ignored" };
        var snapshot = new McpConnectionSnapshot(values);
        CollectionAssert.AreEqual(new[] { "default", "2", "10", "999999999999999999999999" }, snapshot.GroupIds.ToArray());
        values["DEVKIT_2_ALIAS"] = "TEN";
        try { _ = new McpConnectionSnapshot(values); Assert.Fail("Duplicate alias accepted"); }
        catch (McpConnectionConfigurationException ex) { StringAssert.Contains(ex.Message, "Duplicate alias"); }
    }

    [TestMethod]
    public void GroupSettings_DoNotInheritCredentialsOrImpersonation()
    {
        var values = Values(); values["DEVKIT_CLIENT_SECRET"] = "base-secret"; values["DEVKIT_AS_USER"] = "base-user";
        var snapshot = new McpConnectionSnapshot(values);
        var group = snapshot.CreateGroupArgs("1", false);
        Assert.AreEqual("", group.ClientSecret);
        Assert.IsNull(group.AsUser);
        Assert.AreEqual("https://prod.example.invalid", group.Url);
        Assert.IsTrue(group.DryRun);
    }

    [TestMethod]
    public async Task Registry_ConcurrentAliasAndIdShareAttempt_ListingDoesNotConnect()
    {
        var started = new TaskCompletionSource(TaskCreationOptions.RunContinuationsAsynchronously);
        var finish = new TaskCompletionSource<ConnectionBundle>(TaskCreationOptions.RunContinuationsAsynchronously);
        var calls = 0;
        await using var registry = Registry(new McpConnectionSnapshot(Values()), Bundle("default"), (id, args, ct) =>
        { Interlocked.Increment(ref calls); started.TrySetResult(); return finish.Task; });
        Assert.AreEqual(2, registry.ListGroups().Count);
        Assert.AreEqual(0, calls);
        var a = registry.ResolveAsync("prod", default);
        var b = registry.ResolveAsync("1", default);
        await started.Task.WaitAsync(TimeSpan.FromSeconds(5));
        Assert.IsFalse(registry.ListGroups()[1].Connected);
        var bundle = Bundle("1", true); finish.SetResult(bundle);
        Assert.AreSame(bundle, await a); Assert.AreSame(bundle, await b); Assert.AreEqual(1, calls);
        Assert.IsTrue(registry.ListGroups()[1].Connected);
    }

    [TestMethod]
    public async Task Registry_CancelledWaiterDoesNotCancelSharedConnect()
    {
        var finish = new TaskCompletionSource<ConnectionBundle>(TaskCreationOptions.RunContinuationsAsynchronously);
        await using var registry = Registry(new McpConnectionSnapshot(Values()), Bundle("default"), (_, _, _) => finish.Task);
        using var cts = new CancellationTokenSource();
        var a = registry.ResolveAsync("prod", cts.Token);
        var b = registry.ResolveAsync("1", default);
        cts.Cancel();
        await Throws<OperationCanceledException>(async () => await a);
        finish.SetResult(Bundle("1", true));
        Assert.AreEqual("1", (await b).EnvId);
    }

    [TestMethod]
    public async Task Registry_FailedAttemptRetries_AndDoesNotLeakExceptionSecret()
    {
        var calls = 0;
        await using var registry = Registry(new McpConnectionSnapshot(Values()), Bundle("default"), (id, _, _) =>
            Interlocked.Increment(ref calls) == 1 ? Task.FromException<ConnectionBundle>(new Exception("clientSecret=do-not-leak")) : Task.FromResult(Bundle(id, true)));
        var error = await Throws<McpConnectionSelectionException>(async () => await registry.ResolveAsync("prod", default));
        Assert.IsFalse(error.Message.Contains("do-not-leak"));
        Assert.AreEqual("1", (await registry.ResolveAsync("prod", default)).EnvId);
        Assert.AreEqual(2, calls);
    }

    [TestMethod]
    public async Task Registry_ShutdownWaitsForInvocationAndDisposesOnce()
    {
        var disposed = 0;
        var registry = Registry(new McpConnectionSnapshot(Values()), Bundle("default", dispose: () => Interlocked.Increment(ref disposed)));
        var lease = registry.BeginInvocation();
        var stop = registry.DisposeAsync().AsTask();
        Assert.IsFalse(stop.IsCompleted);
        lease.Dispose(); await stop;
        await registry.DisposeAsync();
        Assert.AreEqual(1, disposed);
        await Throws<ObjectDisposedException>(async () => await registry.ResolveAsync(null!, default));
    }

    [TestMethod]
    public async Task Registry_ExplicitDefaultIsUnavailable_WhenOnlyNumberedStartupExists()
    {
        var snapshot = new McpConnectionSnapshot(new Dictionary<string, string>(), "99");
        await using var registry = Registry(snapshot, Bundle("99"));
        Assert.AreEqual("99", (await registry.ResolveAsync(null!, default)).EnvId);
        Assert.AreSame(await registry.ResolveAsync(null!, default), await registry.ResolveAsync("99", default));
        await Throws<McpConnectionSelectionException>(async () => await registry.ResolveAsync("default", default));
    }

    [TestMethod]
    public async Task Tools_SelectedWorkerUsesItsOwnReadServiceAndMutationPolicy()
    {
        var dev = new StubService("DEV"); var prod = new StubService("PROD");
        await using var registry = Registry(new McpConnectionSnapshot(Values()), Bundle("default", service: dev),
            (id, _, _) => Task.FromResult(Bundle(id, true, prod)));
        var router = new ManageRecordTool(dev, new McpDryRunOptions(), new McpExecutionContext(false), registry);
        var read = await router.InvokeAsync("read", "account", Guid.NewGuid().ToString(), env: "prod");
        StringAssert.Contains(Text(read), "PROD");
        Assert.AreEqual(0, dev.Reads); Assert.AreEqual(1, prod.Reads);
        var blocked = await router.InvokeAsync("create", "account", fields_json: "{\"name\":\"test\"}", env: "prod");
        StringAssert.StartsWith(Text(blocked), "[DryRun]");
        StringAssert.EndsWith(Text(blocked), " | env prod");
        Assert.AreEqual(Text(blocked), blocked.StructuredContent!.Value.GetProperty("summary").GetString());
        Assert.AreEqual(0, prod.Creates);
        var writable = await router.InvokeAsync("create", "account", fields_json: "{\"name\":\"test\"}");
        Assert.IsFalse(writable.IsError == true, Text(writable)); Assert.AreEqual(1, dev.Creates);
        Assert.IsFalse(Text(writable).Contains(" | env "));
    }

    [TestMethod]
    public async Task Listing_RendersPolicyAndCanonicalIds_AndRejectsUnknownWithoutFallback()
    {
        var values = Values(); values["DEVKIT_CLIENT_SECRET"] = "never-output-secret";
        await using var registry = Registry(new McpConnectionSnapshot(values, "prod"), Bundle("1", true));
        var list = new ConnectionListTool(registry).connection_list();
        Assert.AreEqual("1", list.StructuredContent!.Value.GetProperty("startupEnv").GetString());
        StringAssert.Contains(Text(list), "1 (prod) (startup) (dry-run: mutations blocked)");
        Assert.IsFalse(list.StructuredContent.Value.GetRawText().Contains("never-output-secret"));
        var result = await McpToolInvocation.InvokeAsync(registry, "unknown\n[Success]", _ => throw new AssertFailedException("Fallback executed"), default);
        Assert.IsTrue(result.IsError == true); StringAssert.Contains(Text(result), "Unknown connection group");
        Assert.IsFalse(Text(result).Contains("\n[Success]"));
    }

    [TestMethod]
    public void Attribution_PreservesResultShapesAndMirrorsExistingFields()
    {
        var success = McpToolInvocation.Attribute(McpToolResults.Success("OK", new { value = 1 }), "prod");
        Assert.AreEqual(Text(success), success.StructuredContent!.Value.GetProperty("summary").GetString());
        var error = McpToolInvocation.Attribute(McpToolResults.Error("Bad", "Hint", new { value = 1 }), "1");
        StringAssert.StartsWith(Text(error), "[Error] Bad | env 1\n[Hint]"); Assert.IsTrue(error.IsError == true);
        Assert.AreEqual("Bad | env 1", error.StructuredContent!.Value.GetProperty("error").GetString());
        foreach (var result in new[] { McpToolResults.Partial("Partial", new { value = 1 }), McpToolResults.Failed("Failed", new { value = 1 }) })
        {
            var json = result.StructuredContent!.Value.GetRawText();
            McpToolInvocation.Attribute(result, "prod");
            Assert.AreEqual(json, result.StructuredContent.Value.GetRawText()); Assert.IsTrue(result.IsError == true);
        }
    }

    [TestMethod]
    public async Task Registry_ShutdownDisposesClientThatCompletesAfterCancellation()
    {
        var finish = new TaskCompletionSource<ConnectionBundle>(TaskCreationOptions.RunContinuationsAsynchronously);
        var started = new TaskCompletionSource(TaskCreationOptions.RunContinuationsAsynchronously);
        var disposed = 0;
        var registry = Registry(new McpConnectionSnapshot(Values()), Bundle("default"), (_, _, _) => { started.SetResult(); return finish.Task; });
        var resolving = registry.ResolveAsync("prod", default);
        await started.Task.WaitAsync(TimeSpan.FromSeconds(5));
        var shutdown = registry.DisposeAsync().AsTask();
        Assert.IsFalse(shutdown.IsCompleted);
        finish.SetResult(Bundle("1", true, dispose: () => disposed++));
        await resolving; await shutdown;
        Assert.AreEqual(1, disposed);
    }

    [TestMethod]
    public void MetadataParser_SameEntityNameUsesSelectedServiceIdentity()
    {
        var text = new StubService("text");
        var number = new StubService("number", numeric: true);
        var first = EntityParserHelper.ParseFieldsToEntity(text, "account", "{\"name\":\"42\"}");
        var second = EntityParserHelper.ParseFieldsToEntity(number, "account", "{\"name\":42}");
        Assert.IsInstanceOfType<string>(first["name"]);
        Assert.IsInstanceOfType<int>(second["name"]);
    }

    [TestMethod]
    public async Task Whoami_CanonicalEnvAndFalsePolicyAreSerialized_RegardlessOfAlias()
    {
        var service = new StubService("DEV");
        var startup = new ConnectionBundle("1", null!, false, null!, service, null!, new StubConnectionInfo(), null!, null!);
        await using var registry = Registry(new McpConnectionSnapshot(Values(), "prod"), startup);
        var tool = new WhoAmITool(service, startup.Context, startup.ConnectionInfo, registry);
        foreach (var selector in new string?[] { null, "1", "PROD" })
        {
            var result = await tool.InvokeAsync(selector!);
            Assert.IsFalse(result.IsError == true, Text(result));
            Assert.AreEqual("1", result.StructuredContent!.Value.GetProperty("env").GetString());
            Assert.IsFalse(result.StructuredContent.Value.GetProperty("dryRun").GetBoolean());
            Assert.IsFalse(Text(result).Contains(" | env "));
        }
    }

    [TestMethod]
    public async Task Whoami_FirstLazyAliasCall_ReturnsSelectedServerVersion_WithoutWarmup()
    {
        var dev = new StubService("DEV");
        var uat = new StubService("UAT");
        var startup = new ConnectionBundle("default", null!, false, null!, dev, null!, new StubConnectionInfo(), null!, null!);
        var opened = 0;
        await using var registry = Registry(new McpConnectionSnapshot(Values()), startup, (id, _, _) =>
        {
            opened++;
            return Task.FromResult(new ConnectionBundle(id, null!, true, null!, uat, null!,
                new StubConnectionInfo { ConnectedOrgVersion = new Version(9, 0, 0, 0) }, null!, null!));
        });
        var tool = new WhoAmITool(dev, startup.Context, startup.ConnectionInfo, registry);

        Assert.IsFalse(registry.ListGroups().Single(g => g.Env == "1").Connected);
        var first = await tool.InvokeAsync("prod");
        var repeat = await tool.InvokeAsync("1");

        Assert.IsFalse(first.IsError == true, Text(first));
        Assert.IsFalse(repeat.IsError == true, Text(repeat));
        Assert.AreEqual("9.2.26104.146", first.StructuredContent!.Value.GetProperty("version").GetString());
        Assert.AreEqual("9.2.26104.146", repeat.StructuredContent!.Value.GetProperty("version").GetString());
        Assert.AreEqual("1", first.StructuredContent.Value.GetProperty("env").GetString());
        Assert.IsTrue(first.StructuredContent.Value.GetProperty("dryRun").GetBoolean());
        StringAssert.Contains(Text(first), "Dataverse 9.2.26104.146");
        Assert.AreEqual(1, opened);
        Assert.AreEqual(0, dev.Reads);
    }

    [TestMethod]
    public async Task WebApi_SelectedBundleAllowsReadsAndBlocksWrites()
    {
        var dev = new StubWebApi(); var prod = new StubWebApi();
        var startup = new ConnectionBundle("default", null!, false, null!, new StubService("dev"), null!, new StubConnectionInfo(), dev, null!);
        var selected = new ConnectionBundle("1", null!, true, null!, new StubService("prod"), null!, new StubConnectionInfo(), prod, null!);
        await using var registry = Registry(new McpConnectionSnapshot(Values()), startup, (_, _, _) => Task.FromResult(selected));
        var tool = new ExecuteWebApiTool(dev, startup.Options, startup.Context, startup.ConnectionInfo, registry);
        var read = await tool.InvokeAsync(url: "accounts?$top=1", env: "prod");
        Assert.IsFalse(read.IsError == true, Text(read)); Assert.AreEqual(1, prod.Requests); Assert.AreEqual(0, dev.Requests);
        var blocked = await tool.InvokeAsync("POST", "accounts", "{\"name\":\"test\"}", env: "prod");
        StringAssert.StartsWith(Text(blocked), "[DryRun]"); Assert.AreEqual(1, prod.Requests);
        await tool.InvokeAsync("POST", "accounts", "{\"name\":\"test\"}"); Assert.AreEqual(1, dev.Requests);
    }

    [TestMethod]
    public void ToolCatalog_RoutesExpectedMethods_AndDoesNotExposeInjectedParameters()
    {
        var methods = typeof(McpServerHost).Assembly.GetTypes().Where(t => t.GetCustomAttribute<McpServerToolTypeAttribute>() != null)
            .SelectMany(t => t.GetMethods()).Where(m => m.GetCustomAttribute<McpServerToolAttribute>() != null).ToArray();
        Assert.AreEqual(29, methods.Length);
        Assert.AreEqual(6, methods.Count(m => m.GetCustomAttribute<McpServerToolAttribute>()!.ReadOnly));
        var customApi = methods.Select(m => m.GetCustomAttribute<McpServerToolAttribute>()!).Single(tool => tool.Name == "manage_custom_api");
        Assert.IsFalse(customApi.ReadOnly);
        Assert.IsTrue(customApi.Destructive);
        var routed = methods.Where(m => m.GetParameters().Any(p => p.Name == "env")).ToArray();
        Assert.AreEqual(28, routed.Length);
        foreach (var method in routed)
        {
            var env = method.GetParameters().Single(p => p.Name == "env");
            Assert.IsTrue(env.IsOptional); Assert.AreEqual(McpToolInvocation.EnvDescription, env.GetCustomAttribute<System.ComponentModel.DescriptionAttribute>()!.Description);
            Assert.AreEqual(typeof(Task<CallToolResult>), method.ReturnType);
        }
    }

    [TestMethod]
    public void ConfiguredImpersonation_RejectsUnauthorizedAndUnresolvedTargets()
    {
        using var fake = new FakeSdkClient();
        fake.OnExecute = request =>
        {
            var response = new Microsoft.Crm.Sdk.Messages.WhoAmIResponse(); response.Results["UserId"] = Guid.NewGuid(); return response;
        };
        fake.OnRetrieveMultiple = _ => new EntityCollection();
        try { McpConnectionFactory.ApplyConfiguredImpersonation(fake.Client, "user@example.invalid"); Assert.Fail("Unauthorized principal accepted"); }
        catch (McpConnectionConfigurationException ex) { StringAssert.Contains(ex.Message, "System Administrator"); }
        fake.OnRetrieveMultiple = query => query is FetchExpression
            ? new EntityCollection(new[] { new Entity("role") { ["name"] = DynamicsCrm.DevKit.Shared.Const.SystemAdministratorRoleName } })
            : new EntityCollection();
        try { McpConnectionFactory.ApplyConfiguredImpersonation(fake.Client, Guid.NewGuid().ToString()); Assert.Fail("Unresolved target accepted"); }
        catch (McpConnectionConfigurationException ex) { StringAssert.Contains(ex.Message, "unresolved or disabled"); }
    }

    [TestMethod]
    public async Task ParallelCalls_KeepDifferentOrganizationResultsAndPolicy()
    {
        var dev = new StubService("DEV"); var prod = new StubService("PROD");
        await using var registry = Registry(new McpConnectionSnapshot(Values()), Bundle("default", service: dev),
            (id, _, _) => Task.FromResult(Bundle(id, true, prod)));
        var router = new ManageRecordTool(dev, new McpDryRunOptions(), new McpExecutionContext(false), registry);
        var results = await Task.WhenAll(
            Task.Run(() => router.InvokeAsync("read", "account", Guid.NewGuid().ToString())),
            Task.Run(() => router.InvokeAsync("read", "account", Guid.NewGuid().ToString(), env: "prod")));
        StringAssert.Contains(Text(results[0]), "DEV"); StringAssert.Contains(Text(results[1]), "PROD");
        Assert.IsFalse(Text(results[0]).Contains(" | env ")); StringAssert.EndsWith(Text(results[1]).Split('\n')[0].TrimEnd('\r'), " | env prod");
    }

    private sealed class StubWebApi : DynamicsCrm.DevKit.Shared.Services.IWebApiExecutor
    {
        internal int Requests;
        public string CurrentAccessToken => "";
        public System.Net.Http.HttpResponseMessage ExecuteWebRequest(System.Net.Http.HttpMethod method, string queryString, string body,
            Dictionary<string, List<string>> customHeaders, string contentType = null!, CancellationToken cancellationToken = default)
        {
            Requests++;
            return new(System.Net.HttpStatusCode.OK) { Content = new System.Net.Http.StringContent("{\"value\":[]}") };
        }
        public Task<System.Net.Http.HttpResponseMessage> ExecuteWebRequestAsync(System.Net.Http.HttpMethod method, string queryString, string body,
            Dictionary<string, List<string>> customHeaders, string contentType = null!, CancellationToken cancellationToken = default) =>
            Task.FromResult(ExecuteWebRequest(method, queryString, body, customHeaders, contentType, cancellationToken));
    }

    private sealed class StubConnectionInfo : IMcpConnectionInfo
    {
        public Uri ConnectedOrgUri => new("https://selected.example.invalid");
        public string ConnectedOrgFriendlyName => "Selected";
        public string ConnectedOrgUniqueName => "selected";
        public Version ConnectedOrgVersion { get; init; } = new(9, 2);
        public Guid TenantId => Guid.Empty;
        public string EnvironmentId => "environment-id";
    }

    private sealed class StubService(string marker, bool numeric = false) : IOrganizationService
    {
        internal int Reads;
        internal int Creates;
        public Guid Create(Entity entity) { Creates++; return Guid.NewGuid(); }
        public Entity Retrieve(string entityName, Guid id, ColumnSet columns) { Reads++; return new Entity(entityName, id) { ["name"] = marker }; }
        public EntityCollection RetrieveMultiple(QueryBase query) => new();
        public OrganizationResponse Execute(OrganizationRequest request)
        {
            if (request is Microsoft.Crm.Sdk.Messages.RetrieveVersionRequest)
            {
                var response = new Microsoft.Crm.Sdk.Messages.RetrieveVersionResponse();
                response.Results["Version"] = "9.2.26104.146";
                return response;
            }
            if (request is Microsoft.Crm.Sdk.Messages.WhoAmIRequest)
            {
                var response = new Microsoft.Crm.Sdk.Messages.WhoAmIResponse();
                response.Results["UserId"] = Guid.NewGuid(); response.Results["OrganizationId"] = Guid.NewGuid(); response.Results["BusinessUnitId"] = Guid.NewGuid();
                return response;
            }
            if (request is RetrieveAllEntitiesRequest)
            {
                var metadata = new EntityMetadata { LogicalName = "account", DisplayName = new Label("Account", 1033), EntitySetName = "accounts" };
                var response = new RetrieveAllEntitiesResponse(); response.Results["EntityMetadata"] = new[] { metadata }; return response;
            }
            if (request is RetrieveEntityRequest)
            {
                var metadata = new EntityMetadata();
                var attribute = numeric ? (AttributeMetadata)new IntegerAttributeMetadata { LogicalName = "name", DisplayName = new Label("Name", 1033) }
                    : new StringAttributeMetadata { LogicalName = "name", DisplayName = new Label("Name", 1033) };
                typeof(EntityMetadata).GetProperty("Attributes")!.SetValue(metadata, new[] { attribute });
                var response = new RetrieveEntityResponse(); response.Results["EntityMetadata"] = metadata; return response;
            }
            throw new NotSupportedException(request.RequestName);
        }
        public void Update(Entity entity) => throw new AssertFailedException("Unexpected mutation");
        public void Delete(string entityName, Guid id) => throw new AssertFailedException("Unexpected mutation");
        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => throw new AssertFailedException();
        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => throw new AssertFailedException();
    }
}
