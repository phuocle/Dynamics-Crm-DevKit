using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reflection;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Schema;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon
{
    internal sealed class RibbonValidation
    {
        private readonly ServiceClient _serviceClient;
        private static XmlSchemaSet _cachedSchemaSet;
        private static readonly object _schemaLock = new();

        public RibbonValidation(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        public string ValidateEntityExists(string entityName)
        {
            try
            {
                var fetch = $@"<fetch top='1'>
                    <entity name='entity'>
                        <attribute name='logicalname'/>
                        <filter>
                            <condition attribute='logicalname' operator='eq' value='{RibbonXmlHelpers.EscapeXml(entityName)}'/>
                        </filter>
                    </entity>
                </fetch>";
                var results = _serviceClient.RetrieveMultiple(new FetchExpression(fetch));
                if (results.Entities.Count == 0)
                    return $"Error: Entity '{entityName}' not found in Dataverse.\nTip: Use get_tables to find valid entity names.";
                return null;
            }
            catch (Exception ex)
            {
                return $"Error: Failed to validate entity '{entityName}': {ex.Message}";
            }
        }

        public string ValidateWebResourceExists(string webResourceName)
        {
            if (string.IsNullOrWhiteSpace(webResourceName)) return null;

            var name = webResourceName.TrimStart();
            if (name.StartsWith("$webresource:", StringComparison.OrdinalIgnoreCase))
                name = name.Substring("$webresource:".Length);

            try
            {
                var fetch = $@"<fetch top='1'>
                    <entity name='webresource'>
                        <attribute name='name'/>
                        <filter>
                            <condition attribute='name' operator='eq' value='{RibbonXmlHelpers.EscapeXml(name)}'/>
                        </filter>
                    </entity>
                </fetch>";
                var results = _serviceClient.RetrieveMultiple(new FetchExpression(fetch));
                if (results.Entities.Count == 0)
                    return $"Error: Web resource '{name}' not found in Dataverse.\nTip: Use manage_webresource(action='list') to find valid web resources.";
                return null;
            }
            catch (Exception ex)
            {
                return $"Error: Failed to validate web resource '{name}': {ex.Message}";
            }
        }

        public static (List<string> Errors, List<string> Warnings) ValidateRibbonXml(string ribbonXml)
        {
            var errors = new List<string>();
            var warnings = new List<string>();

            try
            {
                var schemaSet = GetRibbonSchemaSet();
                if (schemaSet == null || schemaSet.Count == 0)
                    return (errors, warnings);

                var settings = new XmlReaderSettings
                {
                    ValidationType = ValidationType.Schema,
                    Schemas = schemaSet
                };

                settings.ValidationEventHandler += (sender, e) =>
                {
                    var location = e.Exception?.LineNumber > 0
                        ? $"Line {e.Exception.LineNumber}, Col {e.Exception.LinePosition}: "
                        : "";
                    var msg = $"{location}{e.Message}";

                    if (e.Message.Contains("not declared") || e.Severity == XmlSeverityType.Warning)
                        warnings.Add($"Warning: {msg}");
                    else
                        errors.Add($"Error: {msg}");
                };

                using var stringReader = new StringReader(ribbonXml);
                using var xmlReader = XmlReader.Create(stringReader, settings);
                while (xmlReader.Read()) { }
            }
            catch (XmlException xmlEx)
            {
                errors.Add($"Error: XML parse error at Line {xmlEx.LineNumber}, Col {xmlEx.LinePosition}: {xmlEx.Message}");
            }
            catch (Exception ex)
            {
                errors.Add($"Error: Validation failed: {ex.Message}");
            }

            return (errors, warnings);
        }

        private static XmlSchemaSet GetRibbonSchemaSet()
        {
            if (_cachedSchemaSet != null) return _cachedSchemaSet;

            lock (_schemaLock)
            {
                if (_cachedSchemaSet != null) return _cachedSchemaSet;

                var assembly = Assembly.GetExecutingAssembly();
                var resourceNames = assembly.GetManifestResourceNames();

                string[] schemaFiles = ["RibbonCore.xsd", "RibbonTypes.xsd", "RibbonWSS.xsd"];

                var schemas = new XmlSchemaSet();
                foreach (var schemaFile in schemaFiles)
                {
                    var resourceName = resourceNames.FirstOrDefault(n => n.EndsWith(schemaFile));
                    if (resourceName == null) continue;

                    using var stream = assembly.GetManifestResourceStream(resourceName);
                    if (stream == null) continue;

                    var schema = XmlSchema.Read(stream, null);
                    if (schema != null)
                        schemas.Add(schema);
                }

                if (schemas.Count > 0)
                {
                    schemas.Compile();
                    _cachedSchemaSet = schemas;
                }

                return _cachedSchemaSet;
            }
        }

        public bool IsOobButton(string entityName, string buttonId)
        {
            try
            {
                var filter = DetectRibbonFilter(buttonId);
                var request = new RetrieveEntityRibbonRequest
                {
                    EntityName = entityName,
                    RibbonLocationFilter = filter
                };
                var response = (RetrieveEntityRibbonResponse)_serviceClient.Execute(request);

                using var ms = new MemoryStream(response.CompressedEntityXml);
                using var zip = new ZipArchive(ms, ZipArchiveMode.Read);
                var entry = zip.GetEntry("RibbonXml.xml");
                using var strm = entry.Open();
                var doc = XDocument.Load(strm);

                var buttonEl = doc.Descendants("Button")
                    .Concat(doc.Descendants("FlyoutAnchor"))
                    .Concat(doc.Descendants("SplitButton"))
                    .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, buttonId, StringComparison.OrdinalIgnoreCase));

                if (buttonEl == null) return true;

                var solutionName = (string)buttonEl.Attribute("SolutionUniqueName") ?? "";
                return solutionName.Equals("System", StringComparison.OrdinalIgnoreCase);
            }
            catch
            {
                return true;
            }
        }

        public static RibbonLocationFilters DetectRibbonFilter(string buttonId)
        {
            if (buttonId.StartsWith("Mscrm.HomepageGrid.", StringComparison.OrdinalIgnoreCase) ||
                buttonId.StartsWith("Mscrm.Form.", StringComparison.OrdinalIgnoreCase) == false &&
                buttonId.Contains(".HomepageGrid.", StringComparison.OrdinalIgnoreCase))
                return RibbonLocationFilters.HomepageGrid;

            if (buttonId.StartsWith("Mscrm.SubGrid.", StringComparison.OrdinalIgnoreCase) ||
                buttonId.Contains(".SubGrid.", StringComparison.OrdinalIgnoreCase))
                return RibbonLocationFilters.SubGrid;

            return RibbonLocationFilters.Form;
        }
    }
}
