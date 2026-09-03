using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using System;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Net;
using System.Net.Sockets;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageRecordFile;

[TestClass]
public sealed class ManageRecordFileCoverageTests
{
    private static ServiceClient UninitializedService() =>
        (ServiceClient)RuntimeHelpers.GetUninitializedObject(typeof(ServiceClient));

    private static ManageRecordFileTool CreateTool() =>
        new(UninitializedService(), new McpDryRunOptions { DryRun = true }, new McpExecutionContext(true));

    [TestMethod]
    public void BaseResult_ContainsFileAndImageMetadata()
    {
        var file = new FileAttributeMetadata { LogicalName = "devkit_file", MaxSizeInKB = 32 };
        var image = new ImageAttributeMetadata
        {
            LogicalName = "devkit_image",
            MaxSizeInKB = 64,
            IsPrimaryImage = true,
            CanStoreFullImage = true
        };
        var id = Guid.Parse("77777777-7777-7777-7777-777777777777");
        var fileResult = (ManageRecordFileResult)InvokeStatic("BaseResult", "info", "account", id, "Contoso", "devkit_file", file, null!);
        var imageResult = (ManageRecordFileResult)InvokeStatic("BaseResult", "info", "account", id, "Contoso", "devkit_image", null!, image);

        Assert.AreEqual("file", fileResult.ColumnType);
        Assert.AreEqual(32, fileResult.MaxSizeInKB);
        Assert.AreEqual("image", imageResult.ColumnType);
        Assert.AreEqual(true, imageResult.IsPrimaryImage);
        Assert.AreEqual(true, imageResult.CanStoreFullImage);
    }

    [TestMethod]
    public void ImageAndNameHelpers_HandleKnownAndUnknownInputs()
    {
        Assert.AreEqual(".png", Detect(new byte[] { 0x89, 0x50, 0, 0 }));
        Assert.AreEqual(".jpg", Detect(new byte[] { 0xff, 0xd8, 0, 0 }));
        Assert.AreEqual(".gif", Detect(new byte[] { 0x47, 0x49, 0, 0 }));
        Assert.AreEqual(".bmp", Detect(new byte[] { 0x42, 0x4d, 0, 0 }));
        Assert.AreEqual(".tiff", Detect(new byte[] { 0x49, 0x49, 0, 0 }));
        Assert.AreEqual(".tiff", Detect(new byte[] { 0x4d, 0x4d, 0, 0 }));
        Assert.AreEqual(".png", Detect(new byte[] { 1, 2, 3, 4 }));
        Assert.AreEqual(".png", Detect(new byte[] { 1, 2 }));
        Assert.AreEqual(" chosen.txt ", InvokeStatic("FirstNonEmpty", (object)new string[] { null!, "", " chosen.txt ", "fallback" }));
    }

    [TestMethod]
    public async Task PublicValidation_StopsBeforeMetadataOrNetwork()
    {
        var tool = CreateTool();
        var id = "88888888-8888-8888-8888-888888888888";

        Assert.IsTrue((await tool.manage_record_file(null!, "")).Contains("action is required"));
        Assert.IsTrue((await tool.manage_record_file(null!, "info")).Contains("entity_name is required"));
        Assert.IsTrue((await tool.manage_record_file(null!, "info", "account")).Contains("column_name is required"));
        Assert.IsTrue((await tool.manage_record_file(null!, "info", "account", "devkit_file")).Contains("record_id must be a valid GUID"));
        Assert.IsTrue((await tool.manage_record_file(null!, "info", "account", "devkit_file", id)).IsError);
    }

    [TestMethod]
    public void HandleUpload_RejectsInvalidInMemoryInputs()
    {
        var tool = CreateTool();
        var file = new FileAttributeMetadata { LogicalName = "devkit_file", MaxSizeInKB = 1 };
        var image = new ImageAttributeMetadata { LogicalName = "devkit_image", MaxSizeInKB = 1, CanStoreFullImage = false };

        Assert.IsTrue(InvokeUpload(tool, file, null!, "path.bin", "AQIDBA==", "file.bin").Contains("either file_path or content_base64"));
        Assert.IsTrue(InvokeUpload(tool, file, null!, "", "", "").Contains("upload requires file_path"));
        Assert.IsTrue(InvokeUpload(tool, file, null!, "", "AQIDBA==", "").Contains("file_name is required"));
        Assert.IsTrue(InvokeUpload(tool, file, null!, "", "not-base64", "file.bin").Contains("not valid base64"));
        Assert.IsTrue(InvokeUpload(tool, null!, image, "", "AQIDBA==", "document.txt").Contains("not a supported image type"));
        Assert.IsTrue(InvokeUpload(tool, file, null!, "missing.bin", "", "").Contains("File not found"));

        var oneMegabyte = Convert.ToBase64String(new byte[1024 * 1024]);
        Assert.IsTrue(InvokeUpload(tool, file, null!, "", oneMegabyte, "large.bin").Contains("supports files < 1 MB"));

        var oversized = Convert.ToBase64String(new byte[1025]);
        Assert.IsTrue(InvokeUpload(tool, file, null!, "", oversized, "large.bin").Contains("exceeds the column limit"));
        Assert.IsTrue(InvokeUpload(tool, null!, image, "", oversized, "large.png").Contains("exceeds the column limit"));
    }

    [TestMethod]
    public void Constructor_RejectsMissingDependencies()
    {
        var service = UninitializedService();
        AssertArgumentNull(() => new ManageRecordFileTool(null!, new McpDryRunOptions(), new McpExecutionContext(true)));
        AssertArgumentNull(() => new ManageRecordFileTool(service, null!, new McpExecutionContext(true)));
        AssertArgumentNull(() => new ManageRecordFileTool(service, new McpDryRunOptions(), null!));
    }

    [TestMethod]
    [Ignore("HttpListener is unavailable in the restricted test environment.")]
    public async Task DownloadFromUrl_ReturnsContentAndDecodedFinalPathSegment()
    {
        using var listener = new HttpListener();
        using var portProbe = new TcpListener(System.Net.IPAddress.Loopback, 0);
        portProbe.Start();
        var port = ((IPEndPoint)portProbe.LocalEndpoint).Port;
        portProbe.Stop();
        listener.Prefixes.Add($"http://127.0.0.1:{port}/");
        listener.Start();

        var serve = Task.Run(async () =>
        {
            var request = await listener.GetContextAsync();
            request.Response.StatusCode = 200;
            var body = new byte[] { 7, 8, 9 };
            await request.Response.OutputStream.WriteAsync(body, 0, body.Length);
            request.Response.Close();
        });

        var result = ((byte[] data, string fileName))Invoke(CreateTool(), "DownloadFromUrl", $"http://127.0.0.1:{port}/folder/report%20one.bin");
        await serve;

        CollectionAssert.AreEqual(new byte[] { 7, 8, 9 }, result.data);
        Assert.AreEqual("report one.bin", result.fileName);
    }

    [TestMethod]
    [Ignore("HttpListener is unavailable in the restricted test environment.")]
    public async Task DownloadFromUrl_ReportsHttpFailure()
    {
        using var listener = new HttpListener();
        using var portProbe = new TcpListener(System.Net.IPAddress.Loopback, 0);
        portProbe.Start();
        var port = ((IPEndPoint)portProbe.LocalEndpoint).Port;
        portProbe.Stop();
        listener.Prefixes.Add($"http://127.0.0.1:{port}/");
        listener.Start();
        var serve = Task.Run(async () =>
        {
            var request = await listener.GetContextAsync();
            request.Response.StatusCode = 404;
            request.Response.StatusDescription = "Not Found";
            request.Response.Close();
        });

        try
        {
            Invoke(CreateTool(), "DownloadFromUrl", $"http://127.0.0.1:{port}/missing.bin");
            Assert.Fail("Expected HTTP failure.");
        }
        catch (TargetInvocationException ex)
        {
            Assert.IsInstanceOfType(ex.InnerException, typeof(System.Net.Http.HttpRequestException));
            StringAssert.Contains(ex.InnerException!.Message, "404");
        }
        await serve;
    }

    private static CallToolResult InvokeUpload(ManageRecordFileTool tool, FileAttributeMetadata file, ImageAttributeMetadata image, string path, string base64, string name) =>
        (CallToolResult)Invoke(tool, "HandleUpload", "account", Guid.NewGuid(), file, image, path, base64, name, "");

    private static string Detect(byte[] data) => (string)InvokeStatic("DetectImageExtension", data);

    private static object Invoke(object instance, string name, params object[] arguments) =>
        typeof(ManageRecordFileTool).GetMethod(name, BindingFlags.Instance | BindingFlags.NonPublic)!
            .Invoke(instance, arguments)!;

    private static object InvokeStatic(string name, params object[] arguments) =>
        typeof(ManageRecordFileTool).GetMethod(name, BindingFlags.Static | BindingFlags.NonPublic)!
            .Invoke(null, arguments)!;

    private static void AssertArgumentNull(Action action)
    {
        try
        {
            action();
            Assert.Fail("Expected ArgumentNullException.");
        }
        catch (ArgumentNullException)
        {
        }
    }
}
