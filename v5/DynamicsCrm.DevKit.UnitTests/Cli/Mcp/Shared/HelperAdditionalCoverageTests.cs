using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Reflection;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

[TestClass]
public class HelperAdditionalCoverageTests
{
    private static readonly Type EntityParserType = typeof(McpServerHost).Assembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.EntityParserHelper")!;

    private static readonly MethodInfo ConvertValueMethod = EntityParserType
        .GetMethod("ConvertValue", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo AttributeIndexFromMethod = EntityParserType
        .GetNestedType("AttributeMetadataIndex", BindingFlags.NonPublic)!
        .GetMethod("From", BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly Type McpToolResultsType = typeof(McpServerHost).Assembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.McpToolResults")!;

    private static readonly MethodInfo ExtractODataErrorMessageMethod = McpToolResultsType
        .GetMethod("ExtractODataErrorMessage", BindingFlags.NonPublic | BindingFlags.Static)!;

    [TestMethod]
    public void FileColumnTransferHelper_MapsCommonMimeTypesAndSanitizesNames()
    {
        var mimeTypes = new Dictionary<string, string>
        {
            ["note.txt"] = "text/plain",
            ["data.json"] = "application/json",
            ["data.xml"] = "application/xml",
            ["page.html"] = "text/html",
            ["document.pdf"] = "application/pdf",
            ["archive.zip"] = "application/zip",
            ["image.png"] = "image/png",
            ["image.jpg"] = "image/jpeg",
            ["image.gif"] = "image/gif",
            ["image.bmp"] = "image/bmp",
            ["image.tiff"] = "image/tiff",
            ["document.doc"] = "application/msword",
            ["document.docx"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ["sheet.xls"] = "application/vnd.ms-excel",
            ["sheet.xlsx"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            ["slides.ppt"] = "application/vnd.ms-powerpoint",
            ["slides.pptx"] = "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            ["unknown.bin"] = "application/octet-stream"
        };

        foreach (var pair in mimeTypes)
            Assert.AreEqual(pair.Value, FileColumnTransferHelper.GetMimeType(pair.Key));

        Assert.AreEqual("My folder", FileColumnTransferHelper.SanitizeFolderName("  My folder  "));
        Assert.AreEqual("_", FileColumnTransferHelper.SanitizeFolderName("   "));
        Assert.AreEqual("a_b", FileColumnTransferHelper.SanitizeFolderName("a:b"));
    }

    [TestMethod]
    public void FileColumnTransferHelper_FindsNextFreePath()
    {
        var directory = Path.Combine(Path.GetTempPath(), "devkit-mcp-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(directory);

        try
        {
            File.WriteAllText(Path.Combine(directory, "report.txt"), "one");
            File.WriteAllText(Path.Combine(directory, "report (2).txt"), "two");

            var path = FileColumnTransferHelper.GetUniqueFilePath(directory, "report.txt");

            Assert.AreEqual(Path.Combine(directory, "report (3).txt"), path);
        }
        finally
        {
            Directory.Delete(directory, true);
        }
    }

    [TestMethod]
    public void FileColumnTransferHelper_UploadsBlocksAndCommitsInMemory()
    {
        var service = new RecordingOrganizationService
        {
            UploadFileId = Guid.NewGuid()
        };
        var context = new McpExecutionContext(false);
        var data = new byte[FileColumnTransferHelper.BlockSize + 1];
        data[0] = 1;
        data[data.Length - 1] = 2;

        var result = FileColumnTransferHelper.Upload(
            context,
            service,
            new EntityReference("account", Guid.NewGuid()),
            "devkit_file",
            "report.txt",
            data);

        Assert.AreEqual(service.UploadFileId, result.FileId);
        Assert.AreEqual(2, result.BlockCount);
        Assert.AreEqual(2, service.Requests.OfType<UploadBlockRequest>().Count());
        var commit = service.Requests.OfType<CommitFileBlocksUploadRequest>().Single();
        Assert.AreEqual(2, commit.BlockList.Length);
        Assert.AreEqual("text/plain", commit.MimeType);
    }

    [TestMethod]
    public void FileColumnTransferHelper_DownloadsBlocksInMemory()
    {
        var service = new RecordingOrganizationService
        {
            DownloadBytes = new byte[] { 3, 4, 5 },
            DownloadFileName = "photo.png"
        };

        var result = FileColumnTransferHelper.Download(
            service,
            new EntityReference("account", Guid.NewGuid()),
            "devkit_image");

        CollectionAssert.AreEqual(service.DownloadBytes, result.Data);
        Assert.AreEqual("photo.png", result.FileName);
        Assert.AreEqual(1, service.Requests.OfType<DownloadBlockRequest>().Count());
    }

    [TestMethod]
    public void EntityParserHelper_ConvertsSupportedMetadataTypes()
    {
        Assert.AreEqual(7, ((OptionSetValue)ConvertValue(new PicklistAttributeMetadata(), "7")).Value);
        Assert.AreEqual(8, ((OptionSetValue)ConvertValue(new StateAttributeMetadata(), "8")).Value);
        Assert.AreEqual(9, ((OptionSetValue)ConvertValue(new StatusAttributeMetadata(), "9")).Value);

        var multi = (OptionSetValueCollection)ConvertValue(
            new MultiSelectPicklistAttributeMetadata(), "[1,2]");
        CollectionAssert.AreEqual(new[] { 1, 2 }, multi.Select(x => x.Value).ToArray());

        Assert.AreEqual(12.5m, ((Money)ConvertValue(new MoneyAttributeMetadata(), "12.5")).Value);
        Assert.AreEqual(true, ConvertValue(new BooleanAttributeMetadata(), "true"));
        Assert.AreEqual(new DateTime(2026, 8, 31), ConvertValue(new DateTimeAttributeMetadata(), "\"2026-08-31\""));
        Assert.AreEqual(12, ConvertValue(new IntegerAttributeMetadata(), "12"));
        Assert.AreEqual(12.5m, ConvertValue(new DecimalAttributeMetadata(), "12.5"));
        Assert.AreEqual(12.5d, ConvertValue(new DoubleAttributeMetadata(), "12.5"));
        Assert.AreEqual(12L, ConvertValue(new BigIntAttributeMetadata(), "12"));
        Assert.AreEqual("hello", ConvertValue(new StringAttributeMetadata(), "\"hello\""));
        Assert.AreEqual("notes", ConvertValue(new MemoAttributeMetadata(), "\"notes\""));
    }

    [TestMethod]
    public void EntityParserHelper_ConvertsLookupsAndPartyLists()
    {
        var id = Guid.NewGuid();
        var lookup = new LookupAttributeMetadata { Targets = new[] { "account" } };
        var reference = (EntityReference)ConvertValue(lookup, $"\"{id}\"");
        Assert.AreEqual("account", reference.LogicalName);
        Assert.AreEqual(id, reference.Id);

        var overrideReference = (EntityReference)ConvertValue(lookup, $"\"{id}\"", "contact");
        Assert.AreEqual("contact", overrideReference.LogicalName);

        var partyList = new LookupAttributeMetadata();
        typeof(AttributeMetadata).GetProperty("AttributeType")!.SetValue(partyList, AttributeTypeCode.PartyList);
        var parties = (EntityCollection)ConvertValue(
            partyList,
            "[{\"id\":\"" + id + "\",\"type\":\"systemuser\",\"addressused\":\"user@contoso.com\"}]",
            "requiredattendees");
        Assert.AreEqual(1, parties.Entities.Count);
        Assert.AreEqual("systemuser", ((EntityReference)parties.Entities[0]["partyid"]).LogicalName);
        Assert.AreEqual("user@contoso.com", parties.Entities[0]["addressused"]);

        var singleParty = (EntityCollection)ConvertValue(
            partyList,
            "{\"id\":\"" + id + "\",\"type\":\"contact\"}",
            "to");
        Assert.AreEqual("contact", ((EntityReference)singleParty.Entities[0]["partyid"]).LogicalName);

        Assert.Throws<ArgumentException>(() => ConvertValue(
            partyList, "[]", "to"));
        Assert.Throws<ArgumentException>(() => ConvertValue(
            partyList, "{\"id\":\"bad\",\"type\":\"contact\"}", "to"));
        Assert.Throws<ArgumentException>(() => ConvertValue(
            partyList, "[{\"id\":\"" + id + "\"}]", "to"));
    }

    [TestMethod]
    public void EntityParserHelper_BuildsAttributeCandidateIndex()
    {
        var attributes = new AttributeMetadata[]
        {
            new StringAttributeMetadata
            {
                LogicalName = "name",
                SchemaName = "Name",
                DisplayName = new Label("Name", 1033)
            },
            null!,
            new IntegerAttributeMetadata { LogicalName = "count" }
        };

        var index = AttributeIndexFromMethod.Invoke(null, new object[] { attributes })!;
        var candidates = (System.Collections.IEnumerable)index.GetType().GetProperty("Candidates")!.GetValue(index)!;
        Assert.AreEqual(2, candidates.Cast<object>().Count());
    }

    [TestMethod]
    public void DataverseMutationExecutor_EnforcesDryRunAndReadOnlyAllowList()
    {
        var service = new RecordingOrganizationService();
        var id = Guid.NewGuid();
        var entity = new Entity("account", id) { ["name"] = "Contoso" };
        var relationship = new Relationship("account_contact");
        var related = new EntityReferenceCollection(new[] { new EntityReference("contact", id) });

        Assert.AreEqual(id, DataverseMutationExecutor.Create(new McpExecutionContext(false), service, entity));
        DataverseMutationExecutor.Update(new McpExecutionContext(false), service, entity);
        DataverseMutationExecutor.Delete(new McpExecutionContext(false), service, "account", id);
        DataverseMutationExecutor.Associate(new McpExecutionContext(false), service, "account", id, relationship, related);
        DataverseMutationExecutor.Disassociate(new McpExecutionContext(false), service, "account", id, relationship, related);
        DataverseMutationExecutor.Execute(new McpExecutionContext(false), service, new OrganizationRequest("TestMutation"));

        Assert.Throws<InvalidOperationException>(() =>
            DataverseMutationExecutor.Create(new McpExecutionContext(true), service, entity));

        var readResponse = DataverseMutationExecutor.ExecuteReadOnly(service, new RetrieveRequest());
        Assert.IsNotNull(readResponse);
        Assert.Throws<InvalidOperationException>(() =>
            DataverseMutationExecutor.ExecuteReadOnly(service, new OrganizationRequest("Write")));
        Assert.Throws<ArgumentNullException>(() =>
            DataverseMutationExecutor.ExecuteReadOnly(service, null!));
        Assert.Throws<ArgumentNullException>(() =>
            DataverseMutationExecutor.ExecuteReadOnly(null!, new RetrieveRequest()));
    }

    [TestMethod]
    public void MetadataHelpers_CoverFastPathsAndClassification()
    {
        MetadataOperationWaitHelper.WaitAfterMutation(0);
        MetadataOperationWaitHelper.WaitAfterMutation(-1);
        var attempts = 0;
        Assert.IsTrue(MetadataRetryHelper.RetryOnLockContention(() => { attempts++; }, "test"));
        Assert.AreEqual(1, attempts);
        Assert.AreEqual(42, MetadataRetryHelper.RetryOnLockContention(() => 42, "value"));
        Assert.Throws<InvalidOperationException>(() =>
            MetadataRetryHelper.RetryOnLockContention(() => throw new InvalidOperationException("not transient"), "test"));

        var classifier = typeof(MetadataRetryHelper).GetMethod(
            "IsLockContentionError", BindingFlags.NonPublic | BindingFlags.Static)!;
        foreach (var message in new[]
        {
            "another operation is running",
            "metadata lock",
            "failure 0x80040216",
            "failure 0x80060891"
        })
        {
            Assert.IsTrue((bool)classifier.Invoke(null, new object[] { new Exception(message) })!);
        }
        Assert.IsFalse((bool)classifier.Invoke(null, new object[] { new Exception("ordinary failure") })!);
    }

    [TestMethod]
    public void FileAndSolutionHelpers_ValidateInputsAndBackups()
    {
        Assert.Throws<ArgumentNullException>(() => SolutionImportHelper.Import(null!, null!, new byte[] { 1 }));
        Assert.Throws<ArgumentException>(() => SolutionImportHelper.Import(
            new McpExecutionContext(false), null!, Array.Empty<byte>()));
        Assert.Throws<InvalidOperationException>(() => SolutionImportHelper.Import(
            new McpExecutionContext(true), null!, new byte[] { 1 }));

        var root = Path.Combine(Path.GetTempPath(), "devkit-mcp-backup-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(root);
        var source = Path.Combine(root, "report.rdl");
        File.WriteAllText(source, "<Report />");
        try
        {
            var roleId = Guid.NewGuid();
            var rolePath = RoleBackupHelper.SaveBackup(
                roleId,
                "Test Role",
                Guid.NewGuid(),
                new List<RoleBackupPrivilege>
                {
                    new RoleBackupPrivilege { Name = "prvReadAccount", Depth = "Global" }
                },
                root);
            var role = RoleBackupHelper.LoadBackup(rolePath);
            Assert.AreEqual(roleId.ToString(), role.RoleId);
            Assert.AreEqual("Test Role", role.RoleName);
            Assert.AreEqual(1, role.Privileges.Count);

            var reportPath = ReportBackupHelper.SaveBackup(source, "Sales: Europe", root);
            Assert.IsTrue(File.Exists(reportPath));
            StringAssert.Contains(reportPath, "Sales_ Europe");

            var views = ViewBackupHelper.SaveBackup(
                "account",
                Guid.NewGuid(),
                "Accounts",
                "<fetch><entity name='account' /></fetch>",
                "<grid><row><cell name='name' /></row></grid>",
                root);
            Assert.IsTrue(File.ReadAllText(views.FetchBackupPath).Contains("<fetch>"));
            Assert.IsTrue(File.ReadAllText(views.LayoutBackupPath).Contains("<grid>"));

            var emptyViews = ViewBackupHelper.SaveBackup("contact", Guid.NewGuid(), "Contacts", null!, null!, root);
            Assert.IsTrue(File.ReadAllText(emptyViews.FetchBackupPath).Contains("empty — no FetchXML"));
            Assert.IsTrue(File.ReadAllText(emptyViews.LayoutBackupPath).Contains("empty — no LayoutXML"));
        }
        finally
        {
            Directory.Delete(root, true);
        }
    }

    [TestMethod]
    public void RoleGateAndResultHelpers_HandleNullAndErrorBranches()
    {
        Assert.IsFalse(RoleGateHelper.IsSystemAdministrator(null!));
        Assert.AreEqual(0, RoleGateHelper.GetCurrentRoleNames(null!).Count);
        var gate = RoleGateHelper.EnsureSystemAdministrator(null!);
        Assert.IsTrue(gate.IsError);
        Assert.IsTrue(gate.Content.Count > 0);

        var partial = McpToolResults.Partial("partial", new { failed = 1 });
        var failed = McpToolResults.Failed("failed", new { failed = 2 });
        Assert.IsTrue(partial.IsError);
        Assert.IsTrue(failed.IsError);
        StringAssert.Contains(((TextContentBlock)partial.Content[0]).Text, "[Detail]");
        StringAssert.Contains(((TextContentBlock)failed.Content[0]).Text, "[Detail]");
    }

    [TestMethod]
    public void McpToolResults_ExtractsODataMessagesAndFriendlyRewrites()
    {
        var valid = (string)ExtractODataErrorMessageMethod.Invoke(null,
            new object[] { "{\"error\":{\"message\":\"bad request\"}}" })!;
        Assert.AreEqual("bad request", valid);
        Assert.IsNull(ExtractODataErrorMessageMethod.Invoke(null, new object[] { "" }));
        Assert.IsNull(ExtractODataErrorMessageMethod.Invoke(null, new object[] { "not-json" }));
        Assert.IsNull(ExtractODataErrorMessageMethod.Invoke(null, new object[] { "{\"value\":1}" }));

        var longMessage = new string('x', 301);
        var capped = (string)ExtractODataErrorMessageMethod.Invoke(null,
            new object[] { "{\"error\":{\"message\":\"" + longMessage + "\"}}" })!;
        Assert.AreEqual(303, capped.Length);

        foreach (var message in new[]
        {
            "entity doesn't contain attribute with name 'missing'",
            "with a name = 'account' with NameMapping = 'Logical' was not found",
            "Unknown condition operator: nope",
            "The fetch is missing entityName",
            "could not find a relationship with name 'x'",
            "cannot create another parental relation",
            "custom label must have a value",
            "canChangeHierarchicalRelationship is locked",
            "navigation property name cannot be the same on both sides",
            "name is invalid or missing and must start with a valid customization prefix",
            "0x80072522",
            "0x80072521",
            "0x80072553",
            "DataverseFault: Entity 'account' With Id = 11111111-1111-1111-1111-111111111111 Does Not Exist",
            "ordinary failure"
        })
        {
            var result = McpToolResults.ThrowExceptionFriendly(new Exception(message));
            Assert.IsTrue(result.IsError);
            Assert.IsTrue(((TextContentBlock)result.Content[0]).Text.StartsWith("[Error]"));
        }

        foreach (var exception in new Exception[]
        {
            new HttpRequestException("network"),
            new TaskCanceledException("cancelled"),
            new UriFormatException("bad uri")
        })
        {
            var result = McpToolResults.ThrowExceptionFriendly(exception);
            StringAssert.Contains(((TextContentBlock)result.Content[0]).Text, "UrlDownloadFailed");
        }
    }

    private static object ConvertValue(AttributeMetadata metadata, string json, string? targetEntityOverride = null)
    {
        using var document = JsonDocument.Parse(json);
        try
        {
            return ConvertValueMethod.Invoke(null, new object[] { metadata, document.RootElement, metadata.GetType().Name, targetEntityOverride! })!;
        }
        catch (TargetInvocationException exception) when (exception.InnerException != null)
        {
            throw exception.InnerException;
        }
    }

    private sealed class RecordingOrganizationService : IOrganizationService
    {
        public readonly List<OrganizationRequest> Requests = new();
        public Guid UploadFileId { get; set; } = Guid.NewGuid();
        public byte[] DownloadBytes { get; set; } = new byte[] { 1 };
        public string DownloadFileName { get; set; } = "download.bin";

        public Guid Create(Entity entity) => entity.Id == Guid.Empty ? Guid.NewGuid() : entity.Id;
        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => new Entity(entityName, id);
        public void Update(Entity entity) { }
        public void Delete(string entityName, Guid id) { }
        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) { }
        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) { }
        public EntityCollection RetrieveMultiple(QueryBase query) => new EntityCollection();

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            Requests.Add(request);
            if (request is InitializeFileBlocksUploadRequest)
            {
                var response = new InitializeFileBlocksUploadResponse();
                response.Results["FileContinuationToken"] = "upload-token";
                return response;
            }
            if (request is CommitFileBlocksUploadRequest)
            {
                var response = new CommitFileBlocksUploadResponse();
                response.Results["FileId"] = UploadFileId;
                return response;
            }
            if (request is InitializeFileBlocksDownloadRequest)
            {
                var response = new InitializeFileBlocksDownloadResponse();
                response.Results["FileContinuationToken"] = "download-token";
                response.Results["FileName"] = DownloadFileName;
                response.Results["FileSizeInBytes"] = (long)DownloadBytes.Length;
                return response;
            }
            if (request is DownloadBlockRequest)
            {
                var response = new DownloadBlockResponse();
                response.Results["Data"] = DownloadBytes;
                return response;
            }
            if (request is RetrieveRequest)
            {
                var response = new RetrieveResponse();
                response.Results["Entity"] = new Entity("account");
                return response;
            }
            return new OrganizationResponse();
        }
    }
}
