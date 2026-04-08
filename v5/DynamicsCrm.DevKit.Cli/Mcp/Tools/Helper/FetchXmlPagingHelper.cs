using System;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class FetchXmlPagingHelper
    {
        public static string ApplyPaging(string fetchXml, int page, int count, string pagingCookie = null)
        {
            var document = XDocument.Parse(fetchXml);
            var fetch = document.Root ?? throw new InvalidOperationException("Invalid FetchXML.");

            // Strip 'top' from the FetchXML because Dataverse does not allow
            // 'top' together with 'page'/'count'. The MCP tool uses the
            // max_records parameter for limiting results instead.
            fetch.SetAttributeValue("top", null);

            fetch.SetAttributeValue("page", page);
            fetch.SetAttributeValue("count", count);

            if (string.IsNullOrWhiteSpace(pagingCookie))
            {
                fetch.SetAttributeValue("paging-cookie", null);
            }
            else
            {
                fetch.SetAttributeValue("paging-cookie", pagingCookie);
            }

            return document.ToString(SaveOptions.DisableFormatting);
        }
    }
}
