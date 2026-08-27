using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Schema;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class ViewXmlHelper
    {
        private static XmlSchemaSet _cachedLayoutSchemaSet;
        private static XmlSchemaSet _cachedFetchSchemaSet;
        private static readonly object _layoutSchemaLock = new();
        private static readonly object _fetchSchemaLock = new();

        // ── XML Utilities ─────────────────────────────────────────────────

        public static string StripXmlDeclaration(string xml)
        {
            if (xml.StartsWith("<?xml", StringComparison.OrdinalIgnoreCase))
            {
                var endIndex = xml.IndexOf("?>", StringComparison.Ordinal);
                if (endIndex >= 0)
                    return xml.Substring(endIndex + 2).TrimStart();
            }
            return xml;
        }

        public static string StripXmlComments(string content)
        {
            var sb = new StringBuilder(content.Length);
            foreach (var line in content.Split('\n'))
            {
                var trimmed = line.Trim();
                if (trimmed.StartsWith("<!--") && trimmed.EndsWith("-->"))
                    continue;
                if (!string.IsNullOrWhiteSpace(trimmed))
                    sb.AppendLine(line.TrimEnd('\r'));
            }
            return sb.ToString().Trim();
        }

        public static string PrettyPrintXml(string xml)
        {
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

        // ── XSD Validation ────────────────────────────────────────────────

        public static (List<string> Errors, List<string> Warnings) ValidateLayoutXml(string layoutXml)
        {
            return ValidateXml(layoutXml, GetLayoutSchemaSet(), "LayoutXML");
        }

        public static (List<string> Errors, List<string> Warnings) ValidateFetchXml(string fetchXml)
        {
            return ValidateXml(fetchXml, GetFetchSchemaSet(), "FetchXML");
        }

        private static (List<string> Errors, List<string> Warnings) ValidateXml(
            string xml, XmlSchemaSet schemaSet, string xmlType)
        {
            var errors = new List<string>();
            var warnings = new List<string>();

            try
            {
                if (schemaSet == null || schemaSet.Count == 0)
                    return (errors, warnings);

                var settings = new XmlReaderSettings
                {
                    ValidationType = ValidationType.Schema,
                    Schemas = schemaSet
                };

                settings.ValidationEventHandler += (sender, e) =>
                {
                    var location = "";
                    if (e.Exception?.LineNumber > 0)
                        location = $"Line {e.Exception.LineNumber}, Col {e.Exception.LinePosition}: ";

                    var message = e.Message;

                    if (IsSchemaEvolutionError(message))
                    {
                        warnings.Add($"{xmlType} Warning: {location}{message}");
                    }
                    else if (e.Severity == XmlSeverityType.Warning)
                    {
                        warnings.Add($"{xmlType} Warning: {location}{message}");
                    }
                    else
                    {
                        errors.Add($"{xmlType} Error: {location}{message}");
                    }
                };

                using var stringReader = new StringReader(xml);
                using var xmlReader = XmlReader.Create(stringReader, settings);
                while (xmlReader.Read()) { }
            }
            catch (XmlException xmlEx)
            {
                errors.Add($"{xmlType} Error: XML Parsing Error at Line {xmlEx.LineNumber}, Col {xmlEx.LinePosition}: {xmlEx.Message}");
            }
            catch (Exception ex)
            {
                errors.Add($"{xmlType} Error: Validation failed: {ex.Message}");
            }

            return (errors, warnings);
        }

        private static bool IsSchemaEvolutionError(string message)
        {
            return message.Contains("attribute is not declared") ||
                   message.Contains("is not declared");
        }

        // ── Sync Validation ───────────────────────────────────────────────

        public static List<string> ValidateSync(string fetchXml, string layoutXml)
        {
            var errors = new List<string>();

            try
            {
                var fetchDoc = XDocument.Parse(fetchXml);
                var layoutDoc = XDocument.Parse(layoutXml);

                var mainEntity = fetchDoc.Root?.Element("entity");
                var fetchAttributes = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
                if (mainEntity != null)
                {
                    foreach (var attr in mainEntity.Elements("attribute"))
                    {
                        var name = attr.Attribute("name")?.Value;
                        if (name != null)
                            fetchAttributes.Add(name);
                    }
                }

                var layoutCells = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
                foreach (var cell in layoutDoc.Descendants("cell"))
                {
                    var name = cell.Attribute("name")?.Value;
                    if (name != null)
                        layoutCells.Add(name);
                }

                var rowId = layoutDoc.Descendants("row")
                    .Select(r => r.Attribute("id")?.Value)
                    .FirstOrDefault();

                foreach (var attr in fetchAttributes)
                {
                    if (string.Equals(attr, rowId, StringComparison.OrdinalIgnoreCase))
                        continue;
                    if (!layoutCells.Contains(attr))
                        errors.Add($"Sync: '{attr}' in FetchXML has no matching <cell> in LayoutXML — column will be fetched but not displayed");
                }

                var linkAliases = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
                if (mainEntity != null)
                {
                    foreach (var link in mainEntity.Descendants("link-entity"))
                    {
                        var alias = link.Attribute("alias")?.Value;
                        if (alias != null)
                            linkAliases.Add(alias);
                    }
                }

                foreach (var cell in layoutCells)
                {
                    if (string.Equals(cell, rowId, StringComparison.OrdinalIgnoreCase))
                        continue;
                    if (cell.Contains("."))
                    {
                        var alias = cell.Substring(0, cell.IndexOf('.'));
                        if (!linkAliases.Contains(alias))
                            errors.Add($"Sync: '{cell}' in LayoutXML references alias '{alias}' but no <link-entity alias=\"{alias}\"> exists in FetchXML");
                        continue;
                    }
                    if (!fetchAttributes.Contains(cell))
                        errors.Add($"Sync: '{cell}' in LayoutXML has no matching <attribute> in FetchXML — column header shows but data is empty");
                }

                if (mainEntity != null)
                {
                    foreach (var order in mainEntity.Elements("order"))
                    {
                        var orderAttr = order.Attribute("attribute")?.Value;
                        if (orderAttr != null && !layoutCells.Contains(orderAttr) &&
                            !string.Equals(orderAttr, rowId, StringComparison.OrdinalIgnoreCase))
                        {
                            errors.Add($"Sync: <order attribute=\"{orderAttr}\"> in FetchXML but '{orderAttr}' has no <cell> in LayoutXML — sort column must be visible");
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                errors.Add($"Sync: Failed to parse XMLs for sync check — {ex.Message}");
            }

            return errors;
        }

        // ── Quick Find Validation ─────────────────────────────────────────

        public static List<string> ValidateQuickFindPreservation(string currentFetchXml, string newFetchXml)
        {
            var errors = new List<string>();
            try
            {
                var currentHasQF = currentFetchXml.Contains("isquickfindfields");
                var newHasQF = newFetchXml.Contains("isquickfindfields");

                if (currentHasQF && !newHasQF)
                {
                    errors.Add(
                        "QuickFind: The isquickfindfields filter was REMOVED from FetchXML. " +
                        "This will BREAK the search bar for all users. Quick Find views MUST have a " +
                        "<filter type=\"or\" isquickfindfields=\"1\"> block. " +
                        "Restore the filter and retry.");
                }
            }
            catch (Exception ex)
            {
                errors.Add($"QuickFind: Failed to check isquickfindfields preservation — {ex.Message}");
            }
            return errors;
        }

        // ── Cell Attribute Patching ───────────────────────────────────────

        public static (string PatchedXml, List<string> Errors, List<string> Warnings) ApplyCellAttributeUpdates(
            string layoutXml, IReadOnlyList<CellUpdateInstruction> updates)
        {
            var errors = new List<string>();
            var warnings = new List<string>();

            XDocument doc;
            try
            {
                doc = XDocument.Parse(layoutXml);
            }
            catch (Exception ex)
            {
                errors.Add($"Failed to parse LayoutXML: {ex.Message}");
                return (null, errors, warnings);
            }

            var cells = doc.Descendants("cell").ToList();

            foreach (var update in updates)
            {
                var cell = cells.FirstOrDefault(c =>
                    string.Equals(c.Attribute("name")?.Value, update.CellName, StringComparison.OrdinalIgnoreCase));

                if (cell == null)
                {
                    errors.Add($"Cell '{update.CellName}' not found in LayoutXML");
                    continue;
                }

                if (update.SetAttributes != null)
                {
                    foreach (var kvp in update.SetAttributes)
                        cell.SetAttributeValue(kvp.Key, kvp.Value);
                }

                if (update.RemoveAttributes != null)
                {
                    foreach (var attrName in update.RemoveAttributes)
                        cell.Attribute(attrName)?.Remove();
                }
            }

            if (errors.Count > 0)
                return (null, errors, warnings);

            foreach (var cell in cells)
            {
                var hasIconWr = cell.Attribute("imageproviderwebresource") != null;
                var hasIconFn = cell.Attribute("imageproviderfunctionname") != null;
                var cellName = cell.Attribute("name")?.Value ?? "";

                if (hasIconWr && !hasIconFn)
                    warnings.Add($"Warning: cell '{cellName}' has imageproviderwebresource without imageproviderfunctionname");
                else if (hasIconFn && !hasIconWr)
                    warnings.Add($"Warning: cell '{cellName}' has imageproviderfunctionname without imageproviderwebresource");
            }

            var patchedXml = doc.Root.ToString(SaveOptions.DisableFormatting);
            return (patchedXml, errors, warnings);
        }

        // ── Schema Loading ────────────────────────────────────────────────

        /// <summary>
        /// Carry over all cell attributes (except name — the match key) from the current LayoutXML
        /// onto a regenerated LayoutXML, matching cells by name (case-insensitive, incl. alias.field).
        /// Preserves user-set attrs (width, ishidden, label, desc, cellType, imageproviderwebresource, ...)
        /// that regen would otherwise drop. Cells absent from the current layout keep regen defaults.
        /// </summary>
        public static string MergeCellAttributes(string regeneratedLayoutXml, string currentLayoutXml)
        {
            if (string.IsNullOrWhiteSpace(regeneratedLayoutXml) || string.IsNullOrWhiteSpace(currentLayoutXml))
                return regeneratedLayoutXml;
            try
            {
                var regenDoc = XDocument.Parse(regeneratedLayoutXml);
                var currentDoc = XDocument.Parse(currentLayoutXml);
                var oldCells = currentDoc.Descendants("cell")
                    .Where(c => !string.IsNullOrWhiteSpace(c.Attribute("name")?.Value))
                    .GroupBy(c => c.Attribute("name").Value, StringComparer.OrdinalIgnoreCase)
                    .ToDictionary(g => g.Key, g => g.First(), StringComparer.OrdinalIgnoreCase);
                if (oldCells.Count == 0)
                    return regeneratedLayoutXml;

                foreach (var cell in regenDoc.Descendants("cell"))
                {
                    var name = cell.Attribute("name")?.Value;
                    if (string.IsNullOrWhiteSpace(name) || !oldCells.TryGetValue(name, out var oldCell))
                        continue;
                    foreach (var attr in oldCell.Attributes())
                    {
                        if (string.Equals(attr.Name.LocalName, "name", StringComparison.OrdinalIgnoreCase))
                            continue;
                        cell.SetAttributeValue(attr.Name.LocalName, attr.Value);
                    }
                }
                return regenDoc.ToString(SaveOptions.DisableFormatting);
            }
            catch
            {
                return regeneratedLayoutXml;
            }
        }

        private static XmlSchemaSet GetLayoutSchemaSet()
        {
            if (_cachedLayoutSchemaSet != null) return _cachedLayoutSchemaSet;

            lock (_layoutSchemaLock)
            {
                if (_cachedLayoutSchemaSet != null) return _cachedLayoutSchemaSet;

                var schemas = LoadSchema("LayoutXml.xsd");
                if (schemas != null && schemas.Count > 0)
                {
                    schemas.Compile();
                    _cachedLayoutSchemaSet = schemas;
                }

                return _cachedLayoutSchemaSet;
            }
        }

        private static XmlSchemaSet GetFetchSchemaSet()
        {
            if (_cachedFetchSchemaSet != null) return _cachedFetchSchemaSet;

            lock (_fetchSchemaLock)
            {
                if (_cachedFetchSchemaSet != null) return _cachedFetchSchemaSet;

                var schemas = LoadSchema("Fetch.xsd");
                if (schemas != null && schemas.Count > 0)
                {
                    schemas.Compile();
                    _cachedFetchSchemaSet = schemas;
                }

                return _cachedFetchSchemaSet;
            }
        }

        private static XmlSchemaSet LoadSchema(string schemaFileName)
        {
            var assembly = Assembly.GetExecutingAssembly();
            var resourceNames = assembly.GetManifestResourceNames();
            var resourceName = resourceNames.FirstOrDefault(n => n.EndsWith(schemaFileName));

            if (resourceName == null) return null;

            using var stream = assembly.GetManifestResourceStream(resourceName);
            if (stream == null) return null;

            var schema = XmlSchema.Read(stream, null);
            if (schema == null) return null;

            var schemas = new XmlSchemaSet();
            schemas.Add(schema);
            return schemas;
        }
    }
}
