using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Schema;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.SiteMap
{
    /// <summary>
    /// Utility class for managing SiteMap XML operations.
    /// Provides helpers for validation, formatting, and file resolution.
    /// </summary>
    public static class SiteMapXmlOperations
    {
        private static XmlSchemaSet _cachedSchemaSet;
        private static readonly object _schemaLock = new();

        /// <summary>
        /// Strips the XML declaration (<?xml ...?>) from the start of an XML string.
        /// </summary>
        private static string StripXmlDeclaration(string xml)
        {
            if (string.IsNullOrEmpty(xml)) return xml ?? "";

            if (xml.StartsWith("<?xml", StringComparison.OrdinalIgnoreCase))
            {
                var endIndex = xml.IndexOf("?>", StringComparison.Ordinal);
                if (endIndex >= 0)
                    return xml.Substring(endIndex + 2).TrimStart();
            }
            return xml;
        }

        /// <summary>
        /// Pretty-prints an XML string with indentation. Returns the original string on parse failure.
        /// </summary>
        private static string PrettyPrintXml(string xml)
        {
            if (string.IsNullOrEmpty(xml)) return xml ?? "";
            try
            {
                var doc = XDocument.Parse(xml);
                var settings = new XmlWriterSettings
                {
                    Indent = true,
                    IndentChars = "  ",
                    OmitXmlDeclaration = true
                };
                var sb = new StringBuilder(xml.Length + 256);
                using (var writer = XmlWriter.Create(sb, settings))
                {
                    doc.WriteTo(writer);
                }
                return sb.ToString();
            }
            catch
            {
                return xml;
            }
        }

        /// <summary>
        /// Sanitizes a string for use as a file name.
        /// Null/empty/whitespace → "unknown". Replaces spaces with '_', lowercases, replaces invalid chars with '_'.
        /// </summary>
        private static string SanitizeFileName(string name)
        {
            if (string.IsNullOrWhiteSpace(name)) return "unknown";
            var invalid = Path.GetInvalidFileNameChars();
            var chars = name.Select(ch => invalid.Contains(ch) ? '_' : ch).ToArray();
            return new string(chars).Replace(' ', '_').ToLowerInvariant();
        }

        /// <summary>
        /// Validates SiteMap XML against the SiteMap XSD schema.
        /// Returns (Errors, Warnings) lists.
        /// </summary>
        private static (List<string> Errors, List<string> Warnings) ValidateSiteMapXml(string siteMapXml)
        {
            var errors = new List<string>();
            var warnings = new List<string>();

            try
            {
                var schemaSet = GetSchemaSet();
                if (schemaSet == null || schemaSet.Count == 0)
                    return (errors, warnings);

                var settings = new XmlReaderSettings
                {
                    ValidationType = ValidationType.Schema,
                    Schemas = schemaSet
                };

                settings.ValidationEventHandler += (_, e) =>
                {
                    var location = e.Exception?.LineNumber > 0
                        ? $"Line {e.Exception.LineNumber}, Col {e.Exception.LinePosition}: "
                        : "";
                    var message = $"{location}{e.Message}";
                    if (IsSchemaEvolutionError(e.Message) || e.Severity == XmlSeverityType.Warning)
                        warnings.Add(message);
                    else
                        errors.Add(message);
                };

                using var stringReader = new StringReader(siteMapXml);
                using var xmlReader = XmlReader.Create(stringReader, settings);
                while (xmlReader.Read()) { }
            }
            catch (XmlException ex)
            {
                errors.Add($"XML parsing error at Line {ex.LineNumber}, Col {ex.LinePosition}: {ex.Message}");
            }
            catch (Exception ex)
            {
                errors.Add($"Validation failed: {ex.Message}");
            }

            return (errors, warnings);
        }

        /// <summary>
        /// Returns true if the XSD validation message is a schema evolution/compatibility error
        /// that can be safely ignored (attribute or element not declared).
        /// </summary>
        private static bool IsSchemaEvolutionError(string message) =>
            message.Contains("attribute is not declared") ||
            message.Contains("is not declared");

        /// <summary>
        /// Resolves a SiteMap XML input: if it starts with '&lt;', returns as-is (inline XML).
        /// Otherwise treats it as a file path: reads and returns file content, or null if not found.
        /// </summary>
        private static string ResolveSiteMapXmlInput(string sitemapxml)
        {
            if (sitemapxml == null) return null;

            // Inline XML — return as-is (preserve leading whitespace)
            if (sitemapxml.TrimStart().StartsWith("<", StringComparison.Ordinal))
                return sitemapxml;

            // File path
            if (!File.Exists(sitemapxml)) return null;

            return File.ReadAllText(sitemapxml, Encoding.UTF8);
        }

        private static XmlSchemaSet GetSchemaSet()
        {
            if (_cachedSchemaSet != null) return _cachedSchemaSet;

            lock (_schemaLock)
            {
                if (_cachedSchemaSet != null) return _cachedSchemaSet;

                var schemas = new XmlSchemaSet();
                var assembly = Assembly.GetExecutingAssembly();
                var resourceNames = assembly.GetManifestResourceNames();

                foreach (var schemaFile in new[] { "SiteMap.xsd", "SiteMapType.xsd" })
                {
                    var resourceName = resourceNames.FirstOrDefault(n => n.EndsWith(schemaFile));
                    if (resourceName == null) continue;

                    using var stream = assembly.GetManifestResourceStream(resourceName);
                    if (stream == null) continue;

                    var schema = XmlSchema.Read(stream, null);
                    if (schema != null) schemas.Add(schema);
                }

                if (schemas.Count > 0)
                {
                    schemas.Compile();
                    _cachedSchemaSet = schemas;
                }

                return _cachedSchemaSet;
            }
        }
    }
}
