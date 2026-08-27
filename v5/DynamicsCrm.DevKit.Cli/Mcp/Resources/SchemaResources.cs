using ModelContextProtocol.Server;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Resources
{
    [McpServerResourceType]
    public class SchemaResources
    {
        [McpServerResource(
            MimeType = "application/xml",
            Name = "formxml_schema",
            Title = "Dataverse FormXML Schema",
            UriTemplate = "schema://formxml"),
        Description(
            "Returns the XML schema defining the structure of Dataverse forms. " +
            "FormType is the root element. Structure: form > tabs > tab > columns > column > " +
            "sections > section > rows > row > cell > control. " +
            "Read this schema before creating or modifying FormXML.")]
        public async Task<string> FormXmlSchema()
        {
            return await ReadEmbeddedResourceAsync("FormXml.xsd") ?? "Schema not found";
        }

        [McpServerResource(
            MimeType = "application/xml",
            Name = "layoutxml_schema",
            Title = "Dataverse LayoutXML Schema",
            UriTemplate = "schema://layoutxml"),
        Description(
            "Returns the XML schema defining the column layout of Dataverse views. " +
            "Structure: grid > row > cell (with name and width attributes). " +
            "Read this schema before creating or modifying view column layouts.")]
        public async Task<string> LayoutXmlSchema()
        {
            return await ReadEmbeddedResourceAsync("LayoutXml.xsd") ?? "Schema not found";
        }

        [McpServerResource(
            MimeType = "application/xml",
            Name = "fetchxml_schema",
            Title = "Dataverse FetchXML Schema",
            UriTemplate = "schema://fetchxml"),
        Description(
            "Returns the XML schema defining the FetchXML query language. " +
            "Structure: fetch > entity > attribute, filter, link-entity, order. " +
            "Note: The execute_fetchxml tool description already provides a curated guide. " +
            "This schema is for advanced/edge cases.")]
        public async Task<string> FetchXmlSchema()
        {
            return await ReadEmbeddedResourceAsync("Fetch.xsd") ?? "Schema not found";
        }

        [McpServerResource(
            MimeType = "text/markdown",
            Name = "sitemapxml_schema",
            Title = "Dataverse SiteMap XML Schema and Instructions",
            UriTemplate = "schema://sitemapxml"),
        Description(
            "Returns XML schemas and instructions for Dataverse sitemap (app navigation). " +
            "Includes SiteMap.xsd, SiteMapType.xsd, and generation rules with examples.")]
        public async Task<string> SiteMapXmlSchema()
        {
            var sb = new StringBuilder(4096);
            sb.AppendLine("# Dataverse SiteMap Definition");
            sb.AppendLine();
            sb.AppendLine("## CRITICAL: Backup Before ANY Modification");
            sb.AppendLine("- ALWAYS retrieve the current SiteMap XML BEFORE making changes");
            sb.AppendLine("- Save to: {appmodule}_{yyyyMMddHHmmss}.sitemap.bak");
            sb.AppendLine("- Backup location: {working_directory}/.devkit/manage_app/{app}/backups/");
            sb.AppendLine("- A broken SiteMap makes the entire app UNNAVIGABLE");
            sb.AppendLine();
            sb.AppendLine("## Rules");
            sb.AppendLine("- Each Area, Group, SubArea MUST have a unique Id");
            sb.AppendLine("- Area Ids: start with 'area_'");
            sb.AppendLine("- Group Ids: start with 'group_'");
            sb.AppendLine("- SubArea Ids: start with 'sa_'");
            sb.AppendLine();
            sb.AppendLine("## Schema 1 - SiteMap.xsd");
            sb.AppendLine(await ReadEmbeddedResourceAsync("SiteMap.xsd") ?? "Not found");
            sb.AppendLine();
            sb.AppendLine("## Schema 2 - SiteMapType.xsd");
            sb.AppendLine(await ReadEmbeddedResourceAsync("SiteMapType.xsd") ?? "Not found");
            sb.AppendLine();
            sb.AppendLine("## SubArea Types");
            sb.AppendLine("1. Entity: `Entity=\"account\"`");
            sb.AppendLine("2. WebResource: `Url=\"$webresource:name.html\"`");
            sb.AppendLine("3. Url: `Url=\"https://example.com\"`");
            sb.AppendLine("4. Dashboard: `Url=\"/workplace/home_dashboards.aspx\" DefaultDashboard=\"guid\"`");
            sb.AppendLine("5. Page: `Page=\"pagename\"`");
            return sb.ToString();
        }

        internal static async Task<string> ReadEmbeddedResourceAsync(string fileName)
        {
            var assembly = Assembly.GetExecutingAssembly();
            var resourceName = assembly.GetManifestResourceNames()
                .FirstOrDefault(n => n.EndsWith(fileName));
            if (resourceName == null) return null;

            using var stream = assembly.GetManifestResourceStream(resourceName);
            if (stream == null) return null;

            using var reader = new StreamReader(stream);
            return await reader.ReadToEndAsync();
        }
    }
}
