#nullable enable
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tool;

/// <summary>
/// In-process tool invocation over the SDK's own <see cref="McpServerTool"/>
/// dispatch: no stdio process, no re-implementation of argument binding or
/// result handling. The McpServer stub and the service scope come from the
/// caller; both are expected to be disposed by the caller of this method.
/// </summary>
public static class ToolInvoker
{
    public static async Task<ToolInvocationOutcome> InvokeAsync(
        ToolCatalogEntry entry,
        JsonObject? arguments,
        IServiceProvider services,
        CancellationToken cancellationToken = default)
    {
        var server = ToolServer.Create(services);
        try
        {
            var request = new RequestContext<CallToolRequestParams>(
                server,
                new JsonRpcRequest
                {
                    Id = new RequestId("1"),
                    Method = "tools/call",
                },
                new CallToolRequestParams
                {
                    Name = entry.Name,
                    Arguments = ConvertArguments(arguments),
                });

            var result = await entry.Tool.InvokeAsync(request, cancellationToken);
            return ToolInvocationOutcome.FromResult(result);
        }
        catch (OperationCanceledException)
        {
            // Caller maps cancellation to its own exit path (e.g. 130); do not
            // turn it into a tool error outcome.
            throw;
        }
        catch (Exception exception)
        {
            return ToolInvocationOutcome.FromException(exception);
        }
        finally
        {
            await server.DisposeAsync();
        }
    }

    /// <summary>
    /// Converts the CLI argument document to the SDK's argument dictionary.
    /// Property names pass through verbatim (they already match schema names)
    /// and values are cloned out of the parsed document, so number/string/bool
    /// fidelity is preserved exactly as written by the input pipeline.
    /// </summary>
    private static Dictionary<string, JsonElement> ConvertArguments(JsonObject? arguments)
    {
        var result = new Dictionary<string, JsonElement>(StringComparer.Ordinal);
        if (arguments is null) return result;

        using var document = JsonDocument.Parse(arguments.ToJsonString());
        if (document.RootElement.ValueKind != JsonValueKind.Object) return result;
        foreach (var property in document.RootElement.EnumerateObject())
            result[property.Name] = property.Value.Clone();
        return result;
    }
}
