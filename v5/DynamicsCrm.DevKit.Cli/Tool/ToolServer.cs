#nullable enable
using DynamicsCrm.DevKit.Shared;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Threading;
using System.Threading.Channels;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tool;

/// <summary>
/// Never-completed transport stub so an <see cref="McpServer"/> can be constructed
/// in process without stdio. Nothing is ever written to the reader and no session
/// runs; the server exists only to carry the invocation services (and its own
/// identity) into <see cref="McpServerTool.InvokeAsync(RequestContext{CallToolRequestParams}, CancellationToken)"/>.
/// </summary>
internal sealed class NullTransport : ITransport
{
    private readonly Channel<JsonRpcMessage> _messages = Channel.CreateUnbounded<JsonRpcMessage>();

    public ChannelReader<JsonRpcMessage> MessageReader => _messages.Reader;

    public string? SessionId => null;

    public Task SendMessageAsync(JsonRpcMessage message, CancellationToken cancellationToken = default) => Task.CompletedTask;

    public ValueTask DisposeAsync() => default;
}

/// <summary>
/// Builds the in-process MCP server used by <c>devkit tool</c> invocations.
/// <see cref="McpServer.RunAsync"/> is never called, so no transport I/O happens.
/// </summary>
public static class ToolServer
{
    public const string ServerName = "devkit-tool";

    public static McpServer Create(IServiceProvider services)
    {
        var options = new McpServerOptions
        {
            ServerInfo = new Implementation
            {
                Name = ServerName,
                Version = Const.Version,
            },
        };

        return McpServer.Create(new NullTransport(), options, loggerFactory: null, serviceProvider: services);
    }
}
