using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>
    /// Resolves the caller's workspace folder. Chain: MCP roots/list (first root)
    /// → Environment.CurrentDirectory (always has a value; server is spawned with
    /// cwd = project root by clients that do not support roots, e.g. Codex).
    /// </summary>
    public static class WorkspaceFolderHelper
    {
        public static async Task<string> GetAsync(McpServer server, CancellationToken cancellationToken = default)
        {
            try
            {
                // MCP9005: Roots deprecated by SEP-2577 (spec 2026-07-28). Advisory only —
                // guaranteed functional in spec versions until ~2027-07-28. When the SDK removes
                // this API, delete this branch; the cwd fallback below keeps the chain working.
#pragma warning disable MCP9005
                if (server?.ClientCapabilities?.Roots != null)
                {
                    var result = await server.RequestRootsAsync(new ListRootsRequestParams(), cancellationToken);
                    var first = result.Roots?.FirstOrDefault();
                    if (first != null)
                    {
                        var path = new Uri(first.Uri).LocalPath;
                        if (!string.IsNullOrWhiteSpace(path))
                            return path;
                    }
                }
#pragma warning restore MCP9005
            }
            catch
            {
                // roots request failed (client rejected/unsupported) — fall through to cwd
            }
            return Environment.CurrentDirectory;
        }
    }
}
