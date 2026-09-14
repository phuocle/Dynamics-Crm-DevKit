using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageRecordFile;

[TestClass]
public sealed class ManageRecordFileExtraCoverageTests
{
    private FakeSdkClient _fake = null!;
    private readonly List<EntityMetadata> _entities = new();
    private readonly List<OrganizationRequest> _requests = new();

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _entities.Clear();
        _requests.Clear();

        var fileAttr = new FileAttributeMetadata { LogicalName = "document", MaxSizeInKB = 4096 };
        TestMetadata.WithType(fileAttr, AttributeTypeCode.String);

        var imageAttr = new ImageAttributeMetadata { LogicalName = "entityimage", MaxSizeInKB = 4096, CanStoreFullImage = true, IsPrimaryImage = true };
        TestMetadata.WithType(imageAttr, AttributeTypeCode.String);

        var accountMeta = TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Name"), fileAttr, imageAttr);
        _entities.Add(accountMeta);

        _fake.OnCreate = entity => Guid.NewGuid();
        _fake.OnUpdate = entity => { };
        _fake.OnDelete = (entityName, id) => { };

        _fake.OnExecute = request =>
        {
            _requests.Add(request);
            return request switch
            {
                RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
                {
                    Results = { ["EntityMetadata"] = _entities.ToArray() }
                },
                RetrieveEntityRequest => new RetrieveEntityResponse
                {
                    Results = { ["EntityMetadata"] = accountMeta }
                },
                InitializeFileBlocksDownloadRequest => new InitializeFileBlocksDownloadResponse
                {
                    Results = { ["FileSizeInBytes"] = 100L, ["FileName"] = "test.txt" }
                },
                InitializeFileBlocksUploadRequest => new InitializeFileBlocksUploadResponse
                {
                    Results = { ["FileContinuationToken"] = "token-123" }
                },
                UploadBlockRequest => new UploadBlockResponse(),
                CommitFileBlocksUploadRequest => new CommitFileBlocksUploadResponse
                {
                    Results = { ["FileId"] = Guid.NewGuid() }
                },
                DownloadBlockRequest => new DownloadBlockResponse { Results = { ["Data"] = new byte[] { 1, 2, 3 } } },
                DeleteFileRequest => new DeleteFileResponse(),
                UpdateRequest => new UpdateResponse(),
                _ => new OrganizationResponse()
            };
        };
        _fake.OnRetrieve = (entityName, id, columnSet) =>
        {
            var entity = new Entity(entityName, id);
            entity["name"] = "Account With File";
            entity["document"] = Guid.NewGuid();
            entity["document_name"] = "test.txt";
            entity["entityimage"] = new byte[] { 0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A }; // PNG header
            entity["entityimage_timestamp"] = 123456789L;
            return entity;
        };
    }

    [TestCleanup]
    public void Cleanup()
    {
        _fake.Dispose();
    }

    private ManageRecordFileTool CreateTool(bool dryRun = false) =>
        new(_fake.Client, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(mutationsBlocked: false));

    [TestMethod]
    public async Task ManageRecordFile_Info_ReturnsFileAndImageDetails()
    {
        var tool = CreateTool(dryRun: false);
        var recordId = Guid.NewGuid().ToString("D");

        var fileInfo = await tool.manage_record_file(null!, action: "info", entity_name: "account", column_name: "document", record_id: recordId);
        Assert.IsFalse(fileInfo.IsError == true, fileInfo.GetText());
        StringAssert.Contains(fileInfo.GetText(), "File column 'document'");

        var imageInfo = await tool.manage_record_file(null!, action: "info", entity_name: "account", column_name: "entityimage", record_id: recordId);
        Assert.IsFalse(imageInfo.IsError == true, imageInfo.GetText());
        StringAssert.Contains(imageInfo.GetText(), "Image column 'entityimage'");
    }

    [TestMethod]
    public async Task ManageRecordFile_UploadBase64_DryRunAndLive()
    {
        var toolDry = CreateTool(dryRun: true);
        var recordId = Guid.NewGuid().ToString("D");
        var base64Png = Convert.ToBase64String(new byte[] { 0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A });

        var dryRes = await toolDry.manage_record_file(null!, action: "upload", entity_name: "account", column_name: "entityimage", record_id: recordId, content_base64: base64Png, file_name: "logo.png");
        Assert.IsFalse(dryRes.IsError == true, dryRes.GetText());
        StringAssert.Contains(dryRes.GetText(), "[DryRun]");

        var toolLive = CreateTool(dryRun: false);
        var liveRes = await toolLive.manage_record_file(null!, action: "upload", entity_name: "account", column_name: "entityimage", record_id: recordId, content_base64: base64Png, file_name: "logo.png");
        Assert.IsFalse(liveRes.IsError == true, liveRes.GetText());
        StringAssert.Contains(liveRes.GetText(), "Uploaded 'logo.png'");
    }

    [TestMethod]
    public async Task ManageRecordFile_Delete_DryRunAndLive()
    {
        var toolDry = CreateTool(dryRun: true);
        var recordId = Guid.NewGuid().ToString("D");

        var fileDeleteDry = await toolDry.manage_record_file(null!, action: "delete", entity_name: "account", column_name: "document", record_id: recordId);
        Assert.IsFalse(fileDeleteDry.IsError == true, fileDeleteDry.GetText());
        StringAssert.Contains(fileDeleteDry.GetText(), "[DryRun]");

        var imageDeleteDry = await toolDry.manage_record_file(null!, action: "delete", entity_name: "account", column_name: "entityimage", record_id: recordId);
        Assert.IsFalse(imageDeleteDry.IsError == true, imageDeleteDry.GetText());
        StringAssert.Contains(imageDeleteDry.GetText(), "[DryRun]");

        var toolLive = CreateTool(dryRun: false);
        var fileDeleteLive = await toolLive.manage_record_file(null!, action: "delete", entity_name: "account", column_name: "document", record_id: recordId);
        Assert.IsFalse(fileDeleteLive.IsError == true, fileDeleteLive.GetText());

        var imageDeleteLive = await toolLive.manage_record_file(null!, action: "delete", entity_name: "account", column_name: "entityimage", record_id: recordId);
        Assert.IsFalse(imageDeleteLive.IsError == true, imageDeleteLive.GetText());
    }

    [TestMethod]
    public async Task ManageRecordFile_ValidationErrors()
    {
        var tool = CreateTool(dryRun: false);
        var recordId = Guid.NewGuid().ToString("D");

        var noAction = await tool.manage_record_file(null!, action: "");
        Assert.IsTrue(noAction.IsError == true);

        var noEntity = await tool.manage_record_file(null!, action: "info");
        Assert.IsTrue(noEntity.IsError == true);

        var noColumn = await tool.manage_record_file(null!, action: "info", entity_name: "account");
        Assert.IsTrue(noColumn.IsError == true);

        var badId = await tool.manage_record_file(null!, action: "info", entity_name: "account", column_name: "document", record_id: "not-guid");
        Assert.IsTrue(badId.IsError == true);

        var notFileAttr = await tool.manage_record_file(null!, action: "info", entity_name: "account", column_name: "name", record_id: recordId);
        Assert.IsTrue(notFileAttr.IsError == true);

        var uploadBoth = await tool.manage_record_file(null!, action: "upload", entity_name: "account", column_name: "document", record_id: recordId, file_path: "path.txt", content_base64: "b25l");
        Assert.IsTrue(uploadBoth.IsError == true);

        var uploadNeither = await tool.manage_record_file(null!, action: "upload", entity_name: "account", column_name: "document", record_id: recordId);
        Assert.IsTrue(uploadNeither.IsError == true);

        var base64NoName = await tool.manage_record_file(null!, action: "upload", entity_name: "account", column_name: "document", record_id: recordId, content_base64: "b25l");
        Assert.IsTrue(base64NoName.IsError == true);

        var invalidBase64 = await tool.manage_record_file(null!, action: "upload", entity_name: "account", column_name: "document", record_id: recordId, content_base64: "!!!notbase64!!!", file_name: "f.txt");
        Assert.IsTrue(invalidBase64.IsError == true);

        var invalidImageExt = await tool.manage_record_file(null!, action: "upload", entity_name: "account", column_name: "entityimage", record_id: recordId, content_base64: "b25l", file_name: "file.pdf");
        Assert.IsTrue(invalidImageExt.IsError == true);
    }
}
