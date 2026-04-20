using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class McpHelper
    {
        /// <summary>
        /// Fires PublishAllXml in a background thread and returns immediately.
        /// PublishAllXml is resource-heavy and slow — blocking the MCP response for it
        /// causes timeouts and poor UX. The caller should tell the AI that publishing
        /// is running in the background.
        /// </summary>
        internal static void FireAndForgetPublishAll(ServiceClient serviceClient)
        {
            Task.Run(() =>
            {
                try { serviceClient.Execute(new PublishAllXmlRequest()); }
                catch { /* intentionally ignored */ }
            });
        }
    }
}
