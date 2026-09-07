using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using ModelContextProtocol.Protocol;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageRecordFile;

/// <summary>
/// manage_record_file info/download/upload flows on a FakeSdkClient: record
/// retrieval, file-block download/upload protocols, empty-column errors, and
/// dry-run behaviour.
/// </summary>
[TestClass]
public sealed class ManageRecordFileFakeSdkCoverageTests
{
    private FakeSdkClient _fake = null!;
    private EntityMetadata _metadata = null!;
    private Entity? _record;
    private readonly List<byte[]> _downloadBlocks = new() { new byte[] { 1, 2, 3, 4 } };
    private Guid? _uploadedFileId;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _record = null;
        var attributes = new List<AttributeMetadata>
        {
            TestMetadata.String("name", "Name"),
            new FileAttributeMetadata { MaxSizeInKB = 100 }
        };
        typeof(AttributeMetadata).GetProperty(nameof(AttributeMetadata.LogicalName))!.SetValue(attributes[1], "myfile");
        _metadata = TestMetadata.Entity("mrf_acc", "Mrf Acc", attributes.ToArray());

        _fake.OnExecute = request => request switch
        {
            RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = new[] { _metadata } }
            },
            RetrieveEntityRequest => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = _metadata }
            },
            InitializeFileBlocksDownloadRequest => new InitializeFileBlocksDownloadResponse
            {
                Results =
                {
                    ["FileSizeInBytes"] = (long)_downloadBlocks.Sum(b => b.Length),
                    ["FileName"] = "server-file.bin",
                    ["FileContinuationToken"] = "token-1"
                }
            },
            DownloadBlockRequest b => BuildResponse(() =>
            {
                var chunk = _downloadBlocks[(int)(b.Offset / 4) % _downloadBlocks.Count];
                var resp = new DownloadBlockResponse();
                resp.Results["Data"] = chunk;
                return resp;
            }),
            InitializeFileBlocksUploadRequest => new InitializeFileBlocksUploadResponse
            {
                Results = { ["FileUploadId"] = Guid.NewGuid(), ["BlockSizeInBytes"] = 4194304L }
            },
            CommitFileBlocksUploadRequest => BuildResponse(() =>
            {
                _uploadedFileId = Guid.NewGuid();
                var resp = new CommitFileBlocksUploadResponse();
                resp.Results["FileId"] = _uploadedFileId.Value;
                return resp;
            }),
            UpdateRequest => new UpdateResponse(),
            _ => new OrganizationResponse()
        };
        _fake.OnRetrieve = (entityName, id, _) => _record ?? new Entity(entityName, id);
        _fake.OnUpdate = _ => { };
    }

    public void Dispose() => _fake.Dispose();

    private static OrganizationResponse BuildResponse(Func<OrganizationResponse> factory) => factory();

    private void SeedRecord()
    {
        _record = new Entity("mrf_acc", Guid.NewGuid())
        {
            ["name"] = "Widget Record",
            ["myfile"] = Guid.NewGuid(),
            ["myfile_name"] = "server-file.bin"
        };
    }

    private ManageRecordFileTool NewTool() =>
        new(_fake.Client, new McpDryRunOptions(), DryRunTestHelpers.NormalContext());

    private static JsonElement Structured(CallToolResult result) =>
        JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;

    [TestMethod]
    public async Task Info_ShowsFileColumnState()
    {
        SeedRecord();

        var result = await NewTool().manage_record_file(null!, action: "info",
            entity_name: "mrf_acc", column_name: "myfile", record_id: _record!.Id.ToString());

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = Structured(result);
        Assert.AreEqual("info", json.GetProperty("action").GetString());
        Assert.IsTrue(json.GetProperty("hasValue").GetBoolean());
    }

    [TestMethod]
    public async Task Download_WritesFileToWorkspace()
    {
        SeedRecord();

        var result = await NewTool().manage_record_file(null!, action: "download",
            entity_name: "mrf_acc", column_name: "myfile", record_id: _record!.Id.ToString());

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = Structured(result);
        Assert.AreEqual("download", json.GetProperty("action").GetString());
        StringAssert.StartsWith(json.GetProperty("fileName").GetString()!, "server-file", "unique file name derives from the server file name.");
        Assert.AreEqual(4, json.GetProperty("fileSizeInBytes").GetInt32());
    }

    [TestMethod]
    public async Task Download_EmptyColumn_ReturnsError()
    {
        SeedRecord();
        _record!["myfile"] = (Guid?)null;

        var result = await NewTool().manage_record_file(null!, action: "download",
            entity_name: "mrf_acc", column_name: "myfile", record_id: _record.Id.ToString());

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "nothing to download");
    }

    [TestMethod]
    public async Task Upload_FromBase64_CommitsFileBlocks()
    {
        SeedRecord();
        var payload = Convert.ToBase64String(new byte[] { 9, 8, 7, 6 });

        var result = await NewTool().manage_record_file(null!, action: "upload",
            entity_name: "mrf_acc", column_name: "myfile", record_id: _record!.Id.ToString(),
            content_base64: payload, file_name: "hello.bin");

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsNotNull(_uploadedFileId, "CommitFileBlocksUpload executed.");
    }

    [TestMethod]
    public async Task Upload_MissingSource_ReturnsError()
    {
        SeedRecord();

        var result = await NewTool().manage_record_file(null!, action: "upload",
            entity_name: "mrf_acc", column_name: "myfile", record_id: _record!.Id.ToString(),
            file_path: "Z:\\no-such-file.bin");

        Assert.IsTrue(result.IsError == true);
    }
}
