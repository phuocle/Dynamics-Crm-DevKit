using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Query;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class McpHelper
    {
        internal static void FireAndForgetPublishAll(ServiceClient serviceClient)
        {
            Task.Run(() =>
            {
                try { serviceClient.Execute(new PublishAllXmlRequest()); }
                catch { /* intentionally ignored */ }
            });
        }

        internal static int GetBaseLanguageCode(ServiceClient serviceClient)
        {
            try
            {
                var fetch = "<fetch top='1'><entity name='organization'><attribute name='languagecode' /></entity></fetch>";
                var results = serviceClient.RetrieveMultiple(new FetchExpression(fetch));
                if (results.Entities.Count > 0)
                {
                    var lang = results.Entities[0].GetAttributeValue<int?>("languagecode");
                    if (lang.HasValue && lang.Value > 0)
                        return lang.Value;
                }
            }
            catch { }
            return 1033;
        }
    }
}
