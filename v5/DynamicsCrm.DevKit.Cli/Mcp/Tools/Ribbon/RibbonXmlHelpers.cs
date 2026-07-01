using System;
using System.Collections.Generic;
using System.IO.Compression;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.RegularExpressions;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon
{
    internal static class RibbonXmlHelpers
    {
        internal static readonly Dictionary<string, string> SurfaceLocationMap = new()
        {
            ["form"]      = "Mscrm.Form.{entity}.MainTab.Save.Controls._children",
            ["main_grid"] = "Mscrm.HomepageGrid.{entity}.MainTab.Actions.Controls._children",
            ["sub_grid"]  = "Mscrm.SubGrid.{entity}.MainTab.Actions.Controls._children",
        };

        internal static string GetEmptyRibbonDiffXml() =>
            @"<RibbonDiffXml>
  <CustomActions />
  <Templates>
    <RibbonTemplates Id=""Mscrm.Templates""></RibbonTemplates>
  </Templates>
  <CommandDefinitions />
  <RuleDefinitions>
    <TabDisplayRules />
    <DisplayRules />
    <EnableRules />
  </RuleDefinitions>
  <LocLabels />
</RibbonDiffXml>";

        internal static int CountExistingButtons(XDocument ribbonDoc)
        {
            var customActions = ribbonDoc.Root?.Element("CustomActions");
            if (customActions == null) return 0;
            return customActions.Elements("CustomAction").Count();
        }

        internal static XElement BuildButtonElement(string buttonId, string commandId, string tooltipTitle, int sequence, string modernImage, string tooltipDesc)
        {
            var el = new XElement("Button",
                new XAttribute("Command", commandId),
                new XAttribute("Id", buttonId),
                new XAttribute("LabelText", $"$LocLabels:{buttonId}.LabelText"),
                new XAttribute("Sequence", sequence),
                new XAttribute("TemplateAlias", "isv"));

            if (!string.IsNullOrWhiteSpace(tooltipTitle))
                el.Add(new XAttribute("ToolTipTitle", $"$LocLabels:{buttonId}.ToolTipTitle"));

            if (!string.IsNullOrWhiteSpace(tooltipDesc))
                el.Add(new XAttribute("ToolTipDescription", $"$LocLabels:{buttonId}.ToolTipDescription"));

            if (!string.IsNullOrWhiteSpace(modernImage))
            {
                el.Add(new XAttribute("Image16by16", $"$webresource:{modernImage}"));
                el.Add(new XAttribute("Image32by32", $"$webresource:{modernImage}"));
                el.Add(new XAttribute("ModernImage", $"$webresource:{modernImage}"));
            }

            return el;
        }

        internal static void UpsertLocLabel(XElement root, int lcid, string locLabelId, string description)
        {
            var locLabelsEl = GetOrCreateElement(root, "LocLabels");

            var existing = locLabelsEl.Elements("LocLabel")
                .Where(e => string.Equals(e.Attribute("Id")?.Value, locLabelId, StringComparison.OrdinalIgnoreCase))
                .ToList();
            foreach (var e in existing) e.Remove();

            locLabelsEl.Add(new XElement("LocLabel",
                new XAttribute("Id", locLabelId),
                new XElement("Titles",
                    new XElement("Title",
                        new XAttribute("description", description),
                        new XAttribute("languagecode", lcid)))));
        }

        internal static XElement GetOrCreateElement(XElement parent, string name)
        {
            var el = parent.Element(name);
            if (el == null)
            {
                el = new XElement(name);
                parent.Add(el);
            }
            return el;
        }

        internal static void RemoveById(XElement root, string parentName, string childName, string id)
        {
            var parent = root?.Element(parentName);
            if (parent == null) return;
            parent.Elements(childName)
                .Where(e => string.Equals(e.Attribute("Id")?.Value, id, StringComparison.OrdinalIgnoreCase))
                .ToList()
                .ForEach(e => e.Remove());
        }

        internal static void RemoveCustomActionByInnerElementId(XElement root, string innerElementId)
        {
            var customActions = root?.Element("CustomActions");
            if (customActions == null) return;
            customActions.Elements("CustomAction")
                .Where(ca => ca.Descendants()
                    .Any(d => string.Equals(d.Attribute("Id")?.Value, innerElementId, StringComparison.OrdinalIgnoreCase)))
                .ToList()
                .ForEach(e => e.Remove());
        }

        internal static void RemoveByIdInChild(XElement parent, string childContainerName, string childName, string id)
        {
            var container = parent?.Element(childContainerName);
            if (container == null) return;
            container.Elements(childName)
                .Where(e => string.Equals(e.Attribute("Id")?.Value, id, StringComparison.OrdinalIgnoreCase))
                .ToList()
                .ForEach(e => e.Remove());
        }

        internal static void SortChildrenById(XElement container, string childName)
        {
            if (container == null) return;
            var elements = container.Elements(childName).ToList();
            if (elements.Count < 2) return;
            foreach (var e in elements) e.Remove();
            foreach (var e in elements.OrderBy(e => e.Attribute("Id")?.Value ?? "", StringComparer.Ordinal))
                container.Add(e);
        }

        internal static string GenerateSlug(string label)
        {
            if (string.IsNullOrWhiteSpace(label)) return "Button";
            var words = Regex.Split(label.Trim(), @"[\s_\-]+");
            var sb = new StringBuilder();
            foreach (var word in words)
            {
                if (string.IsNullOrWhiteSpace(word)) continue;
                sb.Append(char.ToUpperInvariant(word[0]));
                if (word.Length > 1) sb.Append(word.Substring(1));
            }
            return sb.Length > 0 ? sb.ToString() : "Button";
        }

        internal static string GetJsonString(JsonElement el, string propertyName)
        {
            if (el.TryGetProperty(propertyName, out var prop) && prop.ValueKind == JsonValueKind.String)
                return prop.GetString();
            return null;
        }

        internal static bool GetJsonBool(JsonElement el, string propertyName, bool defaultValue)
        {
            if (el.TryGetProperty(propertyName, out var prop))
            {
                if (prop.ValueKind == JsonValueKind.True) return true;
                if (prop.ValueKind == JsonValueKind.False) return false;
            }
            return defaultValue;
        }

        internal static int GetJsonInt(JsonElement el, string propertyName, int defaultValue)
        {
            if (el.TryGetProperty(propertyName, out var prop) && prop.TryGetInt32(out var value))
                return value;
            return defaultValue;
        }

        internal static void PreserveMissingRibbonDiffElements(XDocument targetDoc, XDocument existingDoc)
        {
            if (targetDoc?.Root == null || existingDoc?.Root == null) return;

            EnsureRibbonDiffShape(targetDoc.Root);
            EnsureRibbonDiffShape(existingDoc.Root);

            PreserveMissingChildren(
                targetDoc.Root.Element("CustomActions"),
                existingDoc.Root.Element("CustomActions"),
                GetCustomActionKey);

            PreserveMissingChildrenById(
                targetDoc.Root.Element("Templates"),
                existingDoc.Root.Element("Templates"),
                "RibbonTemplates");

            PreserveMissingChildrenById(
                targetDoc.Root.Element("CommandDefinitions"),
                existingDoc.Root.Element("CommandDefinitions"),
                "CommandDefinition");

            var targetRules = targetDoc.Root.Element("RuleDefinitions");
            var existingRules = existingDoc.Root.Element("RuleDefinitions");
            PreserveMissingChildrenById(
                targetRules?.Element("TabDisplayRules"),
                existingRules?.Element("TabDisplayRules"),
                "TabDisplayRule");
            PreserveMissingChildrenById(
                targetRules?.Element("DisplayRules"),
                existingRules?.Element("DisplayRules"),
                "DisplayRule");
            PreserveMissingChildrenById(
                targetRules?.Element("EnableRules"),
                existingRules?.Element("EnableRules"),
                "EnableRule");

            PreserveMissingChildrenById(
                targetDoc.Root.Element("LocLabels"),
                existingDoc.Root.Element("LocLabels"),
                "LocLabel");
        }

        private static void EnsureRibbonDiffShape(XElement root)
        {
            GetOrCreateElement(root, "CustomActions");
            GetOrCreateElement(root, "Templates");
            GetOrCreateElement(root, "CommandDefinitions");

            var ruleDefs = GetOrCreateElement(root, "RuleDefinitions");
            GetOrCreateElement(ruleDefs, "TabDisplayRules");
            GetOrCreateElement(ruleDefs, "DisplayRules");
            GetOrCreateElement(ruleDefs, "EnableRules");

            GetOrCreateElement(root, "LocLabels");
        }

        private static void PreserveMissingChildrenById(XElement targetContainer, XElement existingContainer, string childName)
        {
            PreserveMissingChildren(targetContainer, existingContainer, e =>
            {
                if (!string.Equals(e.Name.LocalName, childName, StringComparison.OrdinalIgnoreCase))
                    return null;
                var id = e.Attribute("Id")?.Value;
                return string.IsNullOrWhiteSpace(id) ? null : $"{childName}:{id}";
            });
        }

        private static void PreserveMissingChildren(
            XElement targetContainer,
            XElement existingContainer,
            Func<XElement, string> keySelector)
        {
            if (targetContainer == null || existingContainer == null) return;

            var targetKeys = new HashSet<string>(
                targetContainer.Elements()
                    .Select(keySelector)
                    .Where(k => !string.IsNullOrWhiteSpace(k)),
                StringComparer.OrdinalIgnoreCase);

            foreach (var existingChild in existingContainer.Elements())
            {
                var key = keySelector(existingChild);
                if (string.IsNullOrWhiteSpace(key) || targetKeys.Contains(key))
                    continue;

                targetContainer.Add(new XElement(existingChild));
                targetKeys.Add(key);
            }
        }

        private static string GetCustomActionKey(XElement element)
        {
            var elementName = element.Name.LocalName;
            var id = element.Attribute("Id")?.Value;
            if (string.IsNullOrWhiteSpace(id))
                id = element.Attribute("HideActionId")?.Value;
            if (string.IsNullOrWhiteSpace(id))
                id = element.Attribute("Location")?.Value;
            return string.IsNullOrWhiteSpace(id) ? null : $"{elementName}:{id}";
        }

        internal static string EscapeXml(string value) =>
            value?.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;")
                .Replace("\"", "&quot;").Replace("'", "&apos;");
    }
}
