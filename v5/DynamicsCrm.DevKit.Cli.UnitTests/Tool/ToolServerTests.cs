#nullable enable
using DynamicsCrm.DevKit.Cli.Tool;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Tool;

/// <summary>
/// The in-process invocation server stack: NullTransport behavior (never
/// written, no session) and ToolServer.Create over the schema services.
/// </summary>
[TestClass]
public sealed class ToolServerTests
{
    [TestMethod]
    public void NullTransport_SessionIdIsNullAndReaderIsAvailable()
    {
        ITransport transport = new DynamicsCrm.DevKit.Cli.Tool.NullTransport();

        Assert.IsNull(transport.SessionId);
        Assert.IsNotNull(transport.MessageReader);
    }

    [TestMethod]
    public async Task NullTransport_SendCompletesWithoutWriting()
    {
        ITransport transport = new DynamicsCrm.DevKit.Cli.Tool.NullTransport();

        var send = transport.SendMessageAsync(new JsonRpcRequest { Id = new RequestId("1"), Method = "ping" });
        Assert.IsTrue(send.IsCompleted);
        await send;

        ((IAsyncDisposable)transport).DisposeAsync().GetAwaiter().GetResult();
    }

    [TestMethod]
    public async Task ToolServer_Create_ReturnsServerBoundToServices()
    {
        var services = ToolServices.CreateSchemaServices();
        try
        {
            await using var server = ToolServer.Create(services);

            Assert.IsNotNull(server);
            Assert.IsNull(server.SessionId);
            await server.DisposeAsync();
        }
        finally
        {
            (services as IDisposable)?.Dispose();
        }
    }
}
