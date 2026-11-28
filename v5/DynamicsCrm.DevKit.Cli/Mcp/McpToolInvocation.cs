using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using ModelContextProtocol.Protocol;
using System;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp
{
    /// <summary>Resolve once, execute with invocation-local dependencies, then attribute existing output.</summary>
    internal static class McpToolInvocation
    {
        internal const string EnvDescription = "Optional .env connection group: numeric id (\"1\"), alias (\"prod\"), or \"default\". Omit for startup connection. Call get_context(action='connections') to list groups.";

        internal static async Task<CallToolResult> InvokeAsync(IMcpConnectionResolver connections, string env,
            Func<ConnectionBundle, Task<CallToolResult>> invoke, CancellationToken cancellationToken)
        {
            try
            {
                if (connections == null) return McpToolResults.Error("Connection routing is not configured.", "Start this tool through the MCP server.");
                using var lease = connections.BeginInvocation();
                var bundle = await connections.ResolveAsync(env, cancellationToken).ConfigureAwait(false);
                cancellationToken.ThrowIfCancellationRequested();
                var result = await invoke(bundle).ConfigureAwait(false);
                return bundle.EnvId == connections.StartupEnvId ? result : Attribute(result, env.Trim());
            }
            catch (McpConnectionSelectionException ex) { return McpToolResults.Error(ex.Message, ex.Hint, ex.Details); }
            catch (OperationCanceledException) { return McpToolResults.Error("Connection invocation cancelled.", "Retry if you still need the result."); }
            catch (Exception) { return McpToolResults.Error("Connection invocation failed.", "Check the MCP server connection and retry."); }
        }

        internal static CallToolResult Attribute(CallToolResult result, string selector)
        {
            var block = result.Content.OfType<TextContentBlock>().FirstOrDefault();
            if (block == null) return result;
            var tag = " | env " + selector;
            var newline = block.Text.IndexOf('\n');
            block.Text = newline < 0 ? block.Text + tag : block.Text.Insert(newline > 0 && block.Text[newline - 1] == '\r' ? newline - 1 : newline, tag);
            if (result.StructuredContent is JsonElement element && JsonNode.Parse(element.GetRawText()) is JsonObject json)
            {
                var key = json.ContainsKey("summary") ? "summary" : json.ContainsKey("error") ? "error" : null;
                if (key != null && json[key] is JsonValue value && value.TryGetValue<string>(out var text))
                {
                    var split = text.IndexOf('\n');
                    json[key] = split < 0 ? text + tag : text.Insert(split > 0 && text[split - 1] == '\r' ? split - 1 : split, tag);
                    result.StructuredContent = JsonSerializer.SerializeToElement(json);
                }
            }
            return result;
        }
    }
}
