using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageRecordFile;

/// <summary>
/// manage_record_file rare-branch coverage on a FakeSdkClient: local-file
/// uploads, oversized image handling with CanStoreFullImage, full-size image
/// download validation, thumbnail downloads, empty-column delete errors, and
/// invalid-URL exception handling.
/// </summary>
[TestClass]
public sealed class ManageRecordFileErrorPathCoverageTests
{
    private const string EntityName = "filerecordtarget";
    private const string FileColumn = "documentbody";
    private const string ImageColumn = "entityimage";

    private FakeSdkClient _fake = null!;
    private Entity _record;
    private EntityMetadata _metadata;
    private byte[] _blockData;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _record = null;
        _blockData = null;
        _metadata = TestMetadata.Entity(EntityName, null,
            FileAttribute(),
            ImageAttribute(canStoreFullImage: true, maxSizeKb: 100),
            TestMetadata.String("name", "Name"),
            TestMetadata.String(FileColumn + "_name", "File Name"));
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
                    ["FileSizeInBytes"] = (long)(_blockData?.Length ?? 0),
                    ["FileName"] = "server-file.png",
                    ["FileContinuationToken"] = "token"
                }
            },
            DownloadBlockRequest => new DownloadBlockResponse
            {
                Results = { ["Data"] = _blockData ?? Array.Empty<byte>() }
            },
            _ => new OrganizationResponse()
        };
        _fake.OnRetrieve = (_, _, _) => _record;
    }

    [TestCleanup]
    public void Cleanup() => _fake.Dispose();

    private static FileAttributeMetadata FileAttribute() =>
        WithLogicalName(new FileAttributeMetadata { MaxSizeInKB = 1024 }, FileColumn);

    private static ImageAttributeMetadata ImageAttribute(bool canStoreFullImage, int maxSizeKb) =>
        WithLogicalName(new ImageAttributeMetadata { CanStoreFullImage = canStoreFullImage, MaxSizeInKB = maxSizeKb }, ImageColumn);

    private static T WithLogicalName<T>(T attribute, string logicalName) where T : AttributeMetadata
    {
        TestMetadata.Set(attribute, nameof(AttributeMetadata.LogicalName), logicalName);
        TestMetadata.Set(attribute, nameof(AttributeMetadata.SchemaName), char.ToUpperInvariant(logicalName[0]) + logicalName[1..]);
        TestMetadata.Set(attribute, nameof(AttributeMetadata.AttributeType), FileOrImageType(attribute));
        TestMetadata.Set(attribute, nameof(AttributeMetadata.MetadataId), Guid.NewGuid());
        return attribute;
    }

    private static AttributeTypeCode? FileOrImageType(AttributeMetadata attribute) =>
        attribute is FileAttributeMetadata ? AttributeTypeCode.Virtual : AttributeTypeCode.Virtual;

    private ManageRecordFileTool NewDryRunTool() =>
        new(_fake.Client, new McpDryRunOptions { DryRun = true }, DryRunTestHelpers.NormalContext());

    private ManageRecordFileTool NewTool() =>
        new(_fake.Client, new McpDryRunOptions(), DryRunTestHelpers.NormalContext());

    private static string WriteTempFile(string fileName, byte[] content)
    {
        var path = Path.Combine(Path.GetTempPath(), $"devkit-{Guid.NewGuid():N}-{fileName}");
        File.WriteAllBytes(path, content);
        return path;
    }

    private void SeedRecord()
    {
        var id = Guid.NewGuid();
        _record = new Entity(EntityName, id)
        {
            [EntityName + "id"] = id,
            ["name"] = "Target Record"
        };
    }

    // ── upload ──────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Upload_FromLocalFilePath_DryRun_PreviewsUpload()
    {
        SeedRecord();
        var path = WriteTempFile("photo.png", new byte[] { 1, 2, 3, 4, 5 });

        try
        {
            var result = await NewDryRunTool().manage_record_file(null!, action: "upload",
                entity_name: EntityName, column_name: FileColumn, record_id: _record.Id.ToString(),
                file_path: path, file_name: "photo.png");

            Assert.IsFalse(result.IsError == true, result.GetText());
            StringAssert.Contains(result.GetText(), "Would upload 'photo.png' (5 bytes, 1 block(s))");
            var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
            Assert.AreEqual("not_executed", json.GetProperty("status").GetString());
            Assert.AreEqual("file", json.GetProperty("columnType").GetString());
        }
        finally { File.Delete(path); }
    }

    [TestMethod]
    public async Task Upload_ImageOversizedWithFullImageStorage_ContinuesToPreview()
    {
        SeedRecord();
        _metadata = TestMetadata.Entity(EntityName, null,
            FileAttribute(),
            ImageAttribute(canStoreFullImage: true, maxSizeKb: 2),
            TestMetadata.String("name", "Name"));
        var path = WriteTempFile("big.png", new byte[3000]);

        try
        {
            var result = await NewDryRunTool().manage_record_file(null!, action: "upload",
                entity_name: EntityName, column_name: ImageColumn, record_id: _record.Id.ToString(),
                file_path: path, file_name: "big.png");

            Assert.IsFalse(result.IsError == true, result.GetText());
            StringAssert.Contains(result.GetText(), "Would upload 'big.png' (3,000 bytes");
            var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
            Assert.AreEqual("image", json.GetProperty("columnType").GetString());
        }
        finally { File.Delete(path); }
    }

    [TestMethod]
    public async Task Upload_InvalidHttpsUrl_ReturnsFriendlyError()
    {
        SeedRecord();

        var result = await NewTool().manage_record_file(null!, action: "upload",
            entity_name: EntityName, column_name: FileColumn, record_id: _record.Id.ToString(),
            file_path: "https://");

        Assert.IsTrue(result.IsError == true);
    }

    // ── download ────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Download_FullSizeWithoutStorage_ReturnsError()
    {
        SeedRecord();
        var meta = TestMetadata.Entity(EntityName, null,
            FileAttribute(),
            ImageAttribute(canStoreFullImage: false, maxSizeKb: 100),
            TestMetadata.String("name", "Name"));
        _metadata = meta;

        var result = await NewDryRunTool().manage_record_file(null!, action: "download",
            entity_name: EntityName, column_name: ImageColumn, record_id: _record.Id.ToString(),
            full_size: true);

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "does not store the full-sized image");
        StringAssert.Contains(result.GetText(), "Call again with full_size=false");
    }

    [TestMethod]
    public async Task Download_FullSizeEmptyColumn_ReturnsError()
    {
        SeedRecord();

        var result = await NewDryRunTool().manage_record_file(null!, action: "download",
            entity_name: EntityName, column_name: ImageColumn, record_id: _record.Id.ToString(),
            full_size: true);

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "is empty — nothing to download");
    }

    [TestMethod]
    public async Task Download_FullSizeWithImage_DryRun_PreviewsDownload()
    {
        SeedRecord();
        _blockData = Encoding.ASCII.GetBytes("\x89PNG-mock-image-bytes");
        _record[ImageColumn] = _blockData;

        var result = await NewDryRunTool().manage_record_file(null!, action: "download",
            entity_name: EntityName, column_name: ImageColumn, record_id: _record.Id.ToString(),
            full_size: true);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Would download");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual("image", json.GetProperty("columnType").GetString());
        Assert.AreEqual("not_executed", json.GetProperty("status").GetString());
        Assert.IsTrue(json.GetProperty("fullSize").GetBoolean());
    }

    [TestMethod]
    public async Task Download_Thumbnail_DryRun_PreviewsDownload()
    {
        SeedRecord();
        _record[ImageColumn] = new byte[] { 0x89, 0x50, 0x4E, 0x47 };

        var result = await NewDryRunTool().manage_record_file(null!, action: "download",
            entity_name: EntityName, column_name: ImageColumn, record_id: _record.Id.ToString(),
            full_size: false);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Would download");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual("entityimage.png", json.GetProperty("fileName").GetString());
    }

    // ── delete ──────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Delete_FileColumnEmpty_ReturnsError()
    {
        SeedRecord();

        var result = await NewTool().manage_record_file(null!, action: "delete",
            entity_name: EntityName, column_name: FileColumn, record_id: _record.Id.ToString());

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "is empty — nothing to delete");
        StringAssert.Contains(result.GetText(), "check the current value with action='info'");
    }

    [TestMethod]
    public async Task Delete_ImageColumnEmpty_ReturnsError()
    {
        SeedRecord();

        var result = await NewTool().manage_record_file(null!, action: "delete",
            entity_name: EntityName, column_name: ImageColumn, record_id: _record.Id.ToString());

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "is empty — nothing to delete");
    }
}
