using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using CliParseRecordUrlTool = DynamicsCrm.DevKit.Cli.Mcp.Tools.ParseRecordUrlTool;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using static DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure.TestMetadata;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ParseRecordUrl;

/// <summary>
/// Wave-2 ParseRecordUrlTool coverage: the etc+id and id-only main.aspx
/// branches, Web API entity-set resolution, the maker-portal malformed-GUID
/// rejections, the legacy URL parsers, and the InvokeAsync routing paths.
/// </summary>
[TestClass]
public class ParseRecordUrlResolutionCoverageTests
{
    private const string Guid1 = "11111111-2222-3333-4444-555555555555";
    private const string Guid2 = "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee";

    private static IOrganizationService MetadataService(params EntityMetadata[] entities)
        => new FakeMetadataOrgService(entities);

    // ──────────────────────────────────────────────
    // main.aspx — etc+id and id-only branches
    // ──────────────────────────────────────────────

    [TestMethod]
    public void MainAspx_EtcPlusId_ResolvesLogicalName()
    {
        var tool = new CliParseRecordUrlTool(MetadataService(Meta("account")));

        var result = tool.parse_record_url($"https://org.example/main.aspx?pagetype=entityrecord&etc=10000&id={Guid1}");

        StringAssert.Contains(Text(result), "account");
        StringAssert.Contains(Text(result), "etc+id, resolved");
    }

    [TestMethod]
    public void MainAspx_EtcPlusId_UnresolvedObjectTypeCode()
    {
        var tool = new CliParseRecordUrlTool(MetadataService(Meta("account")));

        var result = tool.parse_record_url($"https://org.example/main.aspx?pagetype=entityrecord&etc=999999&id={Guid1}");

        StringAssert.Contains(Text(result), "(etc=999999)");
        StringAssert.Contains(Text(result), "etc+id, unresolved");
    }

    [TestMethod]
    public void MainAspx_IdOnly_ReturnsUnknownEntity()
    {
        var tool = new CliParseRecordUrlTool(MetadataService());

        var result = tool.parse_record_url($"https://org.example/main.aspx?pagetype=entityrecord&id={Guid1}");

        StringAssert.Contains(Text(result), "(unknown)");
        StringAssert.Contains(Text(result), "main.aspx (id only)");
    }

    // ──────────────────────────────────────────────
    // Web API — entity-set resolution
    // ──────────────────────────────────────────────

    [TestMethod]
    public void WebApi_KnownEntitySetName_ResolvesLogicalName()
    {
        var tool = new CliParseRecordUrlTool(MetadataService(Meta("account")));

        var result = tool.parse_record_url($"https://org.example/api/data/v9.2/accounts({Guid1})");

        StringAssert.Contains(Text(result), "account");
        StringAssert.Contains(Text(result), "Web API (resolved)");
    }

    [TestMethod]
    public void WebApi_UnknownEntitySetName_KeepsSetNameOnly()
    {
        var tool = new CliParseRecordUrlTool(MetadataService(Meta("account")));

        var result = tool.parse_record_url($"https://org.example/api/data/v9.2/fooes({Guid1})");

        var json = result.StructuredContent?.ToString() ?? string.Empty;
        StringAssert.Contains(json, "fooes");
    }

    // ──────────────────────────────────────────────
    // Maker portal — malformed GUID rejections + admin portal
    // ──────────────────────────────────────────────

    [TestMethod]
    public void MakerPortal_MalformedRunGuid_RejectsAndFallsBackToRawGuid()
    {
        var tool = new CliParseRecordUrlTool(MetadataService());

        var result = tool.parse_record_url(
            $"https://make.powerautomate.com/environments/{Guid1}/flows/{Guid2}/runs/11111111");

        StringAssert.Contains(Text(result), "raw GUID");
        StringAssert.Contains(Text(result), Guid1);
    }

    [TestMethod]
    public void MakerPortal_MalformedFlowGuid_FallsBackToRawGuid()
    {
        var tool = new CliParseRecordUrlTool(MetadataService());

        var result = tool.parse_record_url(
            $"https://make.powerautomate.com/environments/{Guid1}/flows/zzzz");

        StringAssert.Contains(Text(result), "raw GUID");
        StringAssert.Contains(Text(result), Guid1);
    }

    [TestMethod]
    public void MakerPortal_MalformedEnvironmentGuid_FallsBackToRawGuid()
    {
        var tool = new CliParseRecordUrlTool(MetadataService());

        var result = tool.parse_record_url(
            $"https://make.powerapps.com/environments/zzzz/solutions/{Guid2}");

        StringAssert.Contains(Text(result), "raw GUID");
        StringAssert.Contains(Text(result), Guid2);
    }

    [TestMethod]
    public void AdminPortal_ValidEnvironmentGuid_ReturnsEnvironment()
    {
        var tool = new CliParseRecordUrlTool(MetadataService());

        var result = tool.parse_record_url(
            $"https://admin.powerplatform.microsoft.com/environments/{Guid1}/hub");

        StringAssert.Contains(Text(result), "environment");
        StringAssert.Contains(Text(result), "admin.powerplatform.microsoft.com");
    }

    // ──────────────────────────────────────────────
    // Legacy URLs
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Legacy_RunDialog_EntityNameAndObjectId()
    {
        var tool = new CliParseRecordUrlTool(MetadataService());

        var result = tool.parse_record_url(
            $"https://org.example/rundialog.aspx?DialogId={Guid1}&EntityName=Account&ObjectId={Guid2}");

        StringAssert.Contains(Text(result), "account");
        StringAssert.Contains(Text(result), "rundialog.aspx (EntityName+ObjectId)");
    }

    [TestMethod]
    public void Legacy_WorkflowEdit_ReturnsWorkflow()
    {
        var tool = new CliParseRecordUrlTool(MetadataService());

        var result = tool.parse_record_url($"https://org.example/sfa/workflow/edit.aspx?id={Guid1}");

        StringAssert.Contains(Text(result), "workflow");
        StringAssert.Contains(Text(result), "sfa/workflow/edit.aspx");
    }

    [TestMethod]
    public void Legacy_ReportViewer_ReturnsReport()
    {
        var tool = new CliParseRecordUrlTool(MetadataService());

        var result = tool.parse_record_url($"https://org.example/crmreports/viewer/viewer.aspx?id={Guid1}");

        StringAssert.Contains(Text(result), "report");
        StringAssert.Contains(Text(result), "crmreports/viewer");
    }

    [TestMethod]
    public void Legacy_SolutionEdit_ReturnsSolution()
    {
        var tool = new CliParseRecordUrlTool(MetadataService());

        var result = tool.parse_record_url($"https://org.example/tools/solution/edit.aspx?id={Guid1}");

        StringAssert.Contains(Text(result), "solution");
        StringAssert.Contains(Text(result), "tools/solution/edit.aspx");
    }

    // ──────────────────────────────────────────────
    // InvokeAsync routing
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task InvokeAsync_NullResolver_ReturnsRoutingError()
    {
        var tool = new CliParseRecordUrlTool(MetadataService());

        var result = await tool.InvokeAsync(Guid1);

        StringAssert.Contains(Text(result), "Connection routing is not configured.");
    }

    [TestMethod]
    public async Task InvokeAsync_WithResolver_ExecutesParse()
    {
        var fakeService = MetadataService(Meta("account"));
        var resolver = new FakeResolver(new ConnectionBundle("1", null, false, null,
            fakeService, null, null, null, null, null));
        var tool = new CliParseRecordUrlTool(fakeService, resolver);

        var result = await tool.InvokeAsync(Guid1, env: null, cancellationToken: CancellationToken.None);

        StringAssert.Contains(Text(result), "raw GUID");
    }

    [TestMethod]
    public async Task InvokeAsync_WithResolver_NonStartupEnv_TagsOutputWithEnv()
    {
        var fakeService = MetadataService(Meta("account"));
        var resolver = new FakeResolver(new ConnectionBundle("2", null, false, null,
            fakeService, null, null, null, null, null));
        var tool = new CliParseRecordUrlTool(fakeService, resolver);

        var result = await tool.InvokeAsync(Guid1, env: "2", cancellationToken: CancellationToken.None);

        StringAssert.Contains(Text(result), "| env 2");
    }

    // ──────────────────────────────────────────────
    // Fixtures
    // ──────────────────────────────────────────────

    private static string Text(ModelContextProtocol.Protocol.CallToolResult result) => result.Content.OfType<ModelContextProtocol.Protocol.TextContentBlock>().First().Text;

    private static EntityMetadata Meta(string logicalName) => Entity(logicalName);

    private sealed class FakeResolver : IMcpConnectionResolver
    {
        private readonly ConnectionBundle _bundle;

        public FakeResolver(ConnectionBundle bundle) => _bundle = bundle;

        public string StartupEnvId => "1";

        public Task<ConnectionBundle> ResolveAsync(string env, CancellationToken cancellationToken)
            => Task.FromResult(_bundle);

        public IReadOnlyList<ConnectionGroupInfo> ListGroups() => Array.Empty<ConnectionGroupInfo>();

        public IDisposable BeginInvocation() => new NoopLease();

        private sealed class NoopLease : IDisposable
        {
            public void Dispose() { }
        }
    }

    private sealed class FakeMetadataOrgService : IOrganizationService
    {
        private readonly EntityMetadata[] _entities;

        public FakeMetadataOrgService(params EntityMetadata[] entities) => _entities = entities;

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            if (request is RetrieveAllEntitiesRequest)
            {
                return new RetrieveAllEntitiesResponse
                {
                    Results = { ["EntityMetadata"] = _entities }
                };
            }
            throw new NotSupportedException(request.RequestName);
        }

        public Guid Create(Entity entity) => throw new NotSupportedException();

        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => throw new NotSupportedException();

        public void Update(Entity entity) => throw new NotSupportedException();

        public void Delete(string entityName, Guid id) => throw new NotSupportedException();

        public EntityCollection RetrieveMultiple(QueryBase query) => throw new NotSupportedException();

        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities)
            => throw new NotSupportedException();

        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities)
            => throw new NotSupportedException();
    }
}
