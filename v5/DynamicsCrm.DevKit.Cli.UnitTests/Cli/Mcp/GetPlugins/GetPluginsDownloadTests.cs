using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System.IO.Compression;
using System.Security.Cryptography;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GetPlugins;

[TestClass]
[DoNotParallelize]
public sealed class GetPluginsDownloadTests
{
    private string _originalCwd = null!;
    private string _workspace = null!;
    private DownloadOrgService _orgService = null!;
    private static readonly byte[] DllBytes = [0x4d, 0x5a, 1, 2, 3, 4];

    [TestInitialize]
    public void Setup()
    {
        _originalCwd = Environment.CurrentDirectory;
        _workspace = Path.Combine(Path.GetTempPath(), "devkit-plugin-download-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_workspace);
        Environment.CurrentDirectory = _workspace;
        _orgService = new DownloadOrgService();
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = _originalCwd;
        Directory.Delete(_workspace, recursive: true);
    }

    private Entity SeedAssembly(string name = "Contoso.Plugin", string? content = null)
    {
        var row = new Entity("pluginassembly", Guid.NewGuid())
        {
            ["name"] = name,
            ["version"] = "1.2.3.4",
            ["sourcetype"] = new OptionSetValue(0),
            ["content"] = content
        };
        _orgService.Rows.Add(row);
        return row;
    }

    private Entity SeedPackage(Entity assembly, string[] paths, bool fileStorage = false, string fileColumn = "fileid")
    {
        using var buffer = new MemoryStream();
        using (var zip = new ZipArchive(buffer, ZipArchiveMode.Create, leaveOpen: true))
            foreach (var path in paths)
            {
                using var entry = zip.CreateEntry(path).Open();
                entry.Write(DllBytes);
            }
        var row = new Entity("pluginpackage", Guid.NewGuid())
        {
            ["name"] = "all_Contoso.Plugin",
            ["version"] = "1.2.3.4"
        };
        _orgService.PackageBytes = buffer.ToArray();
        if (fileStorage)
        {
            row[fileColumn] = Guid.NewGuid();
            _orgService.PackageBytes = buffer.ToArray();
        }
        else
            row["content"] = Convert.ToBase64String(buffer.ToArray());
        _orgService.Rows.Add(row);
        assembly["packageid"] = row.ToEntityReference();
        assembly["sourcetype"] = new OptionSetValue(4);
        return row;
    }

    [TestMethod]
    public async Task Download_DatabaseDll_ReturnsBytesPathAndHash_WithoutOverwriting()
    {
        var row = SeedAssembly(content: Convert.ToBase64String(DllBytes));
        var tool = new GetPluginsTool(_orgService);
        var first = await tool.get_plugins(download: true, assembly_name: "Contoso.Plugin");
        var path = AssertDownload(first, row.Id);
        var second = await tool.get_plugins(download: true, assembly_id: row.Id.ToString());
        var secondPath = AssertDownload(second, row.Id);

        Assert.AreNotEqual(path, secondPath);
        CollectionAssert.AreEqual(DllBytes, File.ReadAllBytes(path));
        StringAssert.Contains(first.GetText(), path);
        Assert.IsFalse(first.StructuredContent!.Value.GetRawText().Contains(Convert.ToBase64String(DllBytes)));
    }

    [TestMethod]
    [DataRow(false)]
    [DataRow(true)]
    public async Task Download_Package_ExtractsOnlyMatchingDll(bool fileStorage)
    {
        var row = SeedAssembly();
        SeedPackage(row, ["lib/net462/Contoso.Plugin.dll", "lib/net462/Dependency.dll", "../../outside.txt"], fileStorage);

        var result = await new GetPluginsTool(_orgService).get_plugins(download: true, assembly_id: row.Id.ToString());

        AssertDownload(result, row.Id);
        Assert.AreEqual(1, Directory.GetFiles(_workspace, "*", SearchOption.AllDirectories).Length);
        if (fileStorage)
        {
            Assert.AreEqual(2, _orgService.Requests.Count);
            var init = (InitializeFileBlocksDownloadRequest)_orgService.Requests[0];
            Assert.AreEqual("fileid", init.FileAttributeName);
            Assert.AreEqual(row.GetAttributeValue<EntityReference>("packageid").Id, init.Target.Id);
        }
    }

    [TestMethod]
    [DataRow(null)]
    [DataRow("fileid")]
    [DataRow("package")]
    public async Task Download_PackageSelector_PreservesOriginalNupkgAndAllEntries(string? fileColumn)
    {
        var row = SeedAssembly();
        var package = SeedPackage(row, ["lib/net462/Contoso.Plugin.dll", "lib/net462/Dependency.dll", "Contoso.nuspec"], fileColumn != null, fileColumn ?? "fileid");
        var tool = new GetPluginsTool(_orgService);

        var result = await tool.get_plugins(download: true, package_id: package.Id.ToString());
        var firstPath = AssertPackageDownload(result, package.Id);
        using (var archive = ZipFile.OpenRead(firstPath))
            CollectionAssert.AreEquivalent(new[] { "lib/net462/Contoso.Plugin.dll", "lib/net462/Dependency.dll", "Contoso.nuspec" }, archive.Entries.Select(e => e.FullName).ToArray());

        var repeat = await tool.get_plugins(download: true, package_name: "all_Contoso.Plugin");
        Assert.AreNotEqual(firstPath, AssertPackageDownload(repeat, package.Id));
        StringAssert.Contains(result.GetText(), ".nupkg");
        Assert.IsFalse(result.StructuredContent!.Value.TryGetProperty("assemblies", out _));
        Assert.AreEqual(package.Id.ToString(), result.StructuredContent.Value.GetProperty("packages")[0].GetProperty("packageId").GetString());
        if (fileColumn != null)
            Assert.IsTrue(_orgService.Requests.OfType<InitializeFileBlocksDownloadRequest>().All(r => r.FileAttributeName == fileColumn));
    }

    [TestMethod]
    public async Task Download_PackageAssembly_UsesPackageFileColumn()
    {
        var row = SeedAssembly();
        SeedPackage(row, ["lib/net462/Contoso.Plugin.dll"], fileStorage: true, fileColumn: "package");
        var result = await new GetPluginsTool(_orgService).get_plugins(download: true, assembly_id: row.Id.ToString());
        AssertDownload(result, row.Id);
        Assert.AreEqual("package", ((InitializeFileBlocksDownloadRequest)_orgService.Requests[0]).FileAttributeName);
    }

    [TestMethod]
    public async Task Download_PackageNameAmbiguous_WithMaxRecordsOne_RequiresId()
    {
        SeedPackage(SeedAssembly(), ["Plugin.dll"]);
        var package = SeedPackage(SeedAssembly("Other.Plugin"), ["Plugin.dll"]);
        package["name"] = "all_Contoso.Plugin2";
        var tool = new GetPluginsTool(_orgService);
        var result = await tool.get_plugins(download: true, package_name: "all_Contoso.Plugin", max_records: 1);
        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "Multiple plugin packages");
        Assert.AreEqual(0, _orgService.RetrieveCalls);
        Assert.IsFalse(Directory.Exists(Path.Combine(_workspace, ".devkit")));

        AssertPackageDownload(await tool.get_plugins(download: true, package_id: package.Id.ToString()), package.Id);
    }

    [TestMethod]
    [DataRow(null)]
    [DataRow("not-base64")]
    [DataRow("TUoBAgME")]
    public async Task Download_PackageEmptyOrMalformed_ReturnsErrorWithoutFiles(string? content)
    {
        var package = SeedPackage(SeedAssembly(), ["Plugin.dll"]);
        package["content"] = content;
        var result = await new GetPluginsTool(_orgService).get_plugins(download: true, package_id: package.Id.ToString());
        Assert.IsTrue(result.IsError);
        Assert.IsFalse(Directory.Exists(Path.Combine(_workspace, ".devkit")));
    }

    [TestMethod]
    public async Task Download_PackageNotFound_ReturnsErrorWithoutFiles()
    {
        var tool = new GetPluginsTool(_orgService);
        Assert.IsTrue((await tool.get_plugins(download: true, package_id: Guid.NewGuid().ToString())).IsError);
        Assert.IsTrue((await tool.get_plugins(download: true, package_name: "not-found")).IsError);
        Assert.AreEqual(0, _orgService.RetrieveCalls);
        Assert.IsFalse(Directory.Exists(Path.Combine(_workspace, ".devkit")));
    }

    [TestMethod]
    public async Task Download_AmbiguousName_WithMaxRecordsOne_DoesNotDownload()
    {
        SeedAssembly("Contoso.Plugin", Convert.ToBase64String(DllBytes));
        var selected = SeedAssembly("Contoso.Plugin2", Convert.ToBase64String(DllBytes));
        var tool = new GetPluginsTool(_orgService);

        var result = await tool.get_plugins(download: true, assembly_name: "Contoso.Plugin", max_records: 1);

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "Multiple plugin assemblies");
        Assert.AreEqual(0, _orgService.RetrieveCalls);
        Assert.IsFalse(Directory.Exists(Path.Combine(_workspace, ".devkit")));
        AssertDownload(await tool.get_plugins(download: true, assembly_id: selected.Id.ToString()), selected.Id);
    }

    [TestMethod]
    [DataRow(null)]
    [DataRow("not-base64")]
    public async Task Download_MissingOrInvalidContent_ReturnsErrorWithoutFiles(string? content)
    {
        SeedAssembly(content: content);
        var result = await new GetPluginsTool(_orgService).get_plugins(download: true, assembly_name: "Contoso.Plugin");

        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), content == null ? "no downloadable content" : "not valid Base64");
        Assert.IsFalse(Directory.Exists(Path.Combine(_workspace, ".devkit")));
    }

    [TestMethod]
    public async Task Download_PackageDuplicateNames_UsesRegisteredPath_OrErrors()
    {
        var row = SeedAssembly();
        SeedPackage(row, ["lib/net462/Contoso.Plugin.dll", "lib/net48/Contoso.Plugin.dll"]);
        var tool = new GetPluginsTool(_orgService);
        var ambiguous = await tool.get_plugins(download: true, assembly_id: row.Id.ToString());
        Assert.IsTrue(ambiguous.IsError);
        Assert.IsFalse(Directory.Exists(Path.Combine(_workspace, ".devkit")));

        row["path"] = "lib\\net48\\Contoso.Plugin.dll";
        AssertDownload(await tool.get_plugins(download: true, assembly_id: row.Id.ToString()), row.Id);
    }

    [TestMethod]
    public async Task Download_PackageWithoutMatchingDll_ReturnsError()
    {
        var row = SeedAssembly();
        SeedPackage(row, ["lib/net462/Other.dll"]);
        var result = await new GetPluginsTool(_orgService).get_plugins(download: true, assembly_id: row.Id.ToString());
        Assert.IsTrue(result.IsError);
        StringAssert.Contains(result.GetText(), "found 0");
        Assert.IsFalse(Directory.Exists(Path.Combine(_workspace, ".devkit")));
    }

    [TestMethod]
    public async Task Download_UnsafeAssemblyName_StaysWithinAssemblyFolder()
    {
        var row = SeedAssembly("../bad\\name:plugin", Convert.ToBase64String(DllBytes));
        var result = await new GetPluginsTool(_orgService).get_plugins(download: true, assembly_id: row.Id.ToString());
        AssertDownload(result, row.Id);
    }

    [TestMethod]
    public async Task Download_InvalidSelectorsAndStepFilters_AreRejectedBeforeQuery()
    {
        var tool = new GetPluginsTool(null!);
        var results = new[]
        {
            await tool.get_plugins(download: true),
            await tool.get_plugins(download: true, assembly_id: "bad"),
            await tool.get_plugins(download: true, assembly_id: Guid.Empty.ToString()),
            await tool.get_plugins(download: true, assembly_id: Guid.NewGuid().ToString(), assembly_name: "Both"),
            await tool.get_plugins(download: true, assembly_name: "Plugin", entity_name: "account"),
            await tool.get_plugins(download: true, assembly_name: "Plugin", stage: "postoperation"),
            await tool.get_plugins(assembly_id: Guid.NewGuid().ToString()),
            await tool.get_plugins(package_id: Guid.NewGuid().ToString()),
            await tool.get_plugins(package_name: "Package"),
            await tool.get_plugins(download: true, package_id: "bad"),
            await tool.get_plugins(download: true, package_id: Guid.Empty.ToString()),
            await tool.get_plugins(download: true, package_id: Guid.NewGuid().ToString(), package_name: "Both"),
            await tool.get_plugins(download: true, package_name: "Package", assembly_name: "Assembly"),
            await tool.get_plugins(download: true, package_name: "Package", assembly_id: Guid.NewGuid().ToString()),
            await tool.get_plugins(download: true, package_name: "Package", entity_name: "account")
        };
        Assert.IsTrue(results.All(r => r.IsError == true));
        Assert.IsFalse(Directory.Exists(Path.Combine(_workspace, ".devkit")));
    }

    [TestMethod]
    public async Task List_DoesNotRetrieveContentOrWriteFiles()
    {
        SeedAssembly(content: Convert.ToBase64String(DllBytes));
        var result = await new GetPluginsTool(_orgService).get_plugins();
        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual("assemblies", result.StructuredContent!.Value.GetProperty("mode").GetString());
        Assert.IsFalse(result.StructuredContent.Value.TryGetProperty("savedPath", out _));
        Assert.AreEqual(0, _orgService.RetrieveCalls);
        Assert.IsFalse(Directory.Exists(Path.Combine(_workspace, ".devkit")));
    }

    private string AssertPackageDownload(CallToolResult result, Guid packageId)
    {
        Assert.IsFalse(result.IsError == true, result.GetText());
        var data = result.StructuredContent!.Value;
        Assert.AreEqual("download", data.GetProperty("mode").GetString());
        var savedPath = data.GetProperty("savedPath").GetString()!;
        Assert.AreEqual(Path.Combine(_workspace, ".devkit", "get_plugins", "packages", packageId.ToString("N")), Path.GetDirectoryName(savedPath));
        Assert.AreEqual(".nupkg", Path.GetExtension(savedPath));
        Assert.AreEqual(Path.GetFileName(savedPath), data.GetProperty("fileName").GetString());
        CollectionAssert.AreEqual(_orgService.PackageBytes, File.ReadAllBytes(savedPath));
        Assert.AreEqual(_orgService.PackageBytes.LongLength, data.GetProperty("sizeBytes").GetInt64());
        Assert.AreEqual(Convert.ToHexString(SHA256.HashData(_orgService.PackageBytes)).ToLowerInvariant(), data.GetProperty("sha256").GetString());
        return savedPath;
    }

    private string AssertDownload(CallToolResult result, Guid assemblyId)
    {
        Assert.IsFalse(result.IsError == true, result.GetText());
        var data = result.StructuredContent!.Value;
        Assert.AreEqual("download", data.GetProperty("mode").GetString());
        var path = data.GetProperty("savedPath").GetString()!;
        Assert.AreEqual(Path.Combine(_workspace, ".devkit", "get_plugins", assemblyId.ToString("N")), Path.GetDirectoryName(path));
        Assert.AreEqual(Path.GetFileName(path), data.GetProperty("fileName").GetString());
        Assert.AreEqual(".dll", Path.GetExtension(path));
        Assert.AreEqual(DllBytes.LongLength, data.GetProperty("sizeBytes").GetInt64());
        Assert.AreEqual(Convert.ToHexString(SHA256.HashData(DllBytes)).ToLowerInvariant(), data.GetProperty("sha256").GetString());
        CollectionAssert.AreEqual(DllBytes, File.ReadAllBytes(path));
        return path;
    }

    private sealed class DownloadOrgService : IOrganizationService
    {
        public List<Entity> Rows { get; } = [];
        public List<OrganizationRequest> Requests { get; } = [];
        public byte[] PackageBytes { get; set; } = [];
        public int RetrieveCalls { get; private set; }

        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet)
        {
            RetrieveCalls++;
            var source = Rows.Single(r => r.LogicalName == entityName && r.Id == id);
            var result = new Entity(entityName, id);
            foreach (var column in columnSet.Columns.Where(source.Contains))
                result[column] = source[column];
            return result;
        }

        public EntityCollection RetrieveMultiple(QueryBase query)
        {
            var xml = XElement.Parse(((FetchExpression)query).Query);
            var entity = xml.Element("entity")!;
            var entityName = (string?)entity.Attribute("name");
            if (entityName is not ("pluginassembly" or "pluginpackage")) return new EntityCollection();
            IEnumerable<Entity> rows = Rows.Where(r => r.LogicalName == entityName);
            foreach (var condition in entity.Descendants("condition"))
            {
                var attribute = (string?)condition.Attribute("attribute");
                var value = (string?)condition.Attribute("value");
                if (attribute == "name") rows = rows.Where(r => r.GetAttributeValue<string>("name").Contains(value!.Trim('%'), StringComparison.OrdinalIgnoreCase));
                if (attribute is "pluginassemblyid" or "pluginpackageid") rows = rows.Where(r => r.Id == Guid.Parse(value!));
                if (attribute == "packageid") rows = rows.Where(r => r.Contains("packageid"));
                if (attribute == "ishidden") rows = rows.Where(r => !r.GetAttributeValue<bool>("ishidden"));
            }
            var columns = entity.Elements("attribute").Select(a => (string)a.Attribute("name")!).ToArray();
            Assert.IsFalse(columns.Contains("content"), "List queries must not fetch DLL Base64.");
            return new EntityCollection(rows.Take((int?)xml.Attribute("top") ?? 100).Select(r =>
            {
                var result = new Entity(entityName, r.Id);
                foreach (var column in columns.Where(r.Contains)) result[column] = r[column];
                return result;
            }).ToList());
        }

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            Requests.Add(request);
            if (request is InitializeFileBlocksDownloadRequest)
                return new InitializeFileBlocksDownloadResponse { Results = new ParameterCollection { ["FileContinuationToken"] = "token", ["FileSizeInBytes"] = (long)PackageBytes.Length, ["FileName"] = "plugins.nupkg" } };
            if (request is DownloadBlockRequest block)
                return new DownloadBlockResponse { Results = new ParameterCollection { ["Data"] = PackageBytes.Skip((int)block.Offset).Take((int)block.BlockLength).ToArray() } };
            throw new NotSupportedException(request.RequestName);
        }

        public Guid Create(Entity entity) => throw new NotSupportedException();
        public void Update(Entity entity) => throw new NotSupportedException();
        public void Delete(string entityName, Guid id) => throw new NotSupportedException();
        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => throw new NotSupportedException();
        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => throw new NotSupportedException();
    }
}
