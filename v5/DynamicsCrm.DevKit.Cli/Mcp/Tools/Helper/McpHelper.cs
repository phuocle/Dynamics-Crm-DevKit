using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Query;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class McpHelper
    {
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
            catch { /* caller reports the connection/query failure instead of guessing a language */ }
            return 0;
        }
    }
}
