using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon
{
    internal sealed class RibbonButtonOperations
    {
        private readonly RibbonValidation _validation;
        private readonly int _lcid;

        public RibbonButtonOperations(RibbonValidation validation, int lcid)
        {
            _validation = validation;
            _lcid = lcid;
        }

        public (string error, string summary) ExecuteAddButton(XDocument ribbonDoc, string entityName, JsonElement op)
        {
            var surface = RibbonXmlHelpers.GetJsonString(op, "surface");
            var label = RibbonXmlHelpers.GetJsonString(op, "label");
            var library = RibbonXmlHelpers.GetJsonString(op, "library");
            var function = RibbonXmlHelpers.GetJsonString(op, "function");
            var enableLibrary = RibbonXmlHelpers.GetJsonString(op, "enable_library");
            var enableFunction = RibbonXmlHelpers.GetJsonString(op, "enable_function");

            if (string.IsNullOrWhiteSpace(surface))
                return ("Error: add_button requires 'surface' (form, main_grid, or sub_grid).", null);
            if (string.IsNullOrWhiteSpace(label))
                return ("Error: add_button requires 'label' (button display text).", null);
            if (string.IsNullOrWhiteSpace(library))
                return ("Error: add_button requires 'library' (web resource JS file for button click).", null);
            if (string.IsNullOrWhiteSpace(function))
                return ("Error: add_button requires 'function' (JavaScript function name for button click).", null);
            if (string.IsNullOrWhiteSpace(enableLibrary))
                return ("Error: add_button requires 'enable_library' (web resource JS file for enable rule).", null);
            if (string.IsNullOrWhiteSpace(enableFunction))
                return ("Error: add_button requires 'enable_function' (JavaScript function name for enable rule).", null);

            surface = surface.Trim().ToLowerInvariant();
            if (!RibbonXmlHelpers.SurfaceLocationMap.ContainsKey(surface))
                return ($"Error: Invalid surface '{surface}'. Valid: form, main_grid, sub_grid.", null);

            var libError = _validation.ValidateWebResourceExists(library);
            if (libError != null) return (libError, null);
            var enableLibError = _validation.ValidateWebResourceExists(enableLibrary);
            if (enableLibError != null) return (enableLibError, null);

            var modernImage = RibbonXmlHelpers.GetJsonString(op, "modern_image");
            var tooltipTitle = RibbonXmlHelpers.GetJsonString(op, "tooltip_title") ?? label;
            var tooltipDesc = RibbonXmlHelpers.GetJsonString(op, "tooltip_description");
            var sequence = RibbonXmlHelpers.GetJsonInt(op, "sequence", 85);

            if (!string.IsNullOrWhiteSpace(modernImage))
            {
                var imgError = _validation.ValidateWebResourceExists(modernImage);
                if (imgError != null) return (imgError, null);
            }

            var slug = RibbonXmlHelpers.GenerateSlug(label);
            var btnSurfaceSuffix = surface == "form" ? "Form" : surface == "main_grid" ? "HomepageGrid" : "SubGrid";
            var customActionId = $"devkit.{entityName}.{slug}.{btnSurfaceSuffix}.CustomAction";
            var buttonId = $"devkit.{entityName}.{slug}.{btnSurfaceSuffix}.Button";
            var commandId = $"devkit.{entityName}.{slug}.{btnSurfaceSuffix}.Command";
            var enableRuleId = $"devkit.{entityName}.{slug}.{btnSurfaceSuffix}.EnableRule";

            var location = RibbonXmlHelpers.SurfaceLocationMap[surface].Replace("{entity}", entityName);

            RibbonXmlHelpers.RemoveCustomActionByInnerElementId(ribbonDoc.Root, buttonId);
            RibbonXmlHelpers.RemoveById(ribbonDoc.Root, "CommandDefinitions", "CommandDefinition", commandId);

            var customActionsEl = RibbonXmlHelpers.GetOrCreateElement(ribbonDoc.Root, "CustomActions");
            var buttonEl = RibbonXmlHelpers.BuildButtonElement(buttonId, commandId, tooltipTitle, sequence, modernImage, tooltipDesc);

            customActionsEl.Add(new XElement("CustomAction",
                new XAttribute("Id", customActionId),
                new XAttribute("Location", location),
                new XAttribute("Sequence", sequence),
                new XElement("CommandUIDefinition", buttonEl)));

            XElement[] crmParams = surface == "form"
                ? [
                    new XElement("CrmParameter", new XAttribute("Value", "PrimaryControl")),
                    new XElement("CrmParameter", new XAttribute("Value", "PrimaryEntityTypeName")),
                    new XElement("CrmParameter", new XAttribute("Value", "PrimaryItemIds"))
                  ]
                : [
                    new XElement("CrmParameter", new XAttribute("Value", "SelectedControl")),
                    new XElement("CrmParameter", new XAttribute("Value", "SelectedEntityTypeName")),
                    new XElement("CrmParameter", new XAttribute("Value", "FirstSelectedItemId")),
                    new XElement("CrmParameter", new XAttribute("Value", "SelectedControlSelectedItemIds"))
                  ];

            var commandDefsEl = RibbonXmlHelpers.GetOrCreateElement(ribbonDoc.Root, "CommandDefinitions");
            var jsFunctionEl = new XElement("JavaScriptFunction",
                new XAttribute("FunctionName", function),
                new XAttribute("Library", $"$webresource:{library}"));
            foreach (var p in crmParams) jsFunctionEl.Add(p);

            var selectionEnableRuleId = surface == "sub_grid" ? $"devkit.{entityName}.{slug}.{btnSurfaceSuffix}.SelectionEnableRule" : null;

            var displayRulesInCommand = new XElement("DisplayRules");
            var enableRulesInCommand = new XElement("EnableRules",
                new XElement("EnableRule", new XAttribute("Id", enableRuleId)));
            if (selectionEnableRuleId != null)
                enableRulesInCommand.Add(new XElement("EnableRule", new XAttribute("Id", selectionEnableRuleId)));

            commandDefsEl.Add(new XElement("CommandDefinition",
                new XAttribute("Id", commandId),
                enableRulesInCommand,
                displayRulesInCommand,
                new XElement("Actions", jsFunctionEl)));

            var ruleDefsEl = RibbonXmlHelpers.GetOrCreateElement(ribbonDoc.Root, "RuleDefinitions");
            RibbonXmlHelpers.RemoveByIdInChild(ruleDefsEl, "EnableRules", "EnableRule", enableRuleId);
            var enableRulesEl = RibbonXmlHelpers.GetOrCreateElement(ruleDefsEl, "EnableRules");
            var enableCustomRuleEl = new XElement("CustomRule",
                new XAttribute("FunctionName", enableFunction),
                new XAttribute("Library", $"$webresource:{enableLibrary}"));
            foreach (var p in crmParams) enableCustomRuleEl.Add(new XElement(p));
            enableRulesEl.Add(new XElement("EnableRule",
                new XAttribute("Id", enableRuleId),
                enableCustomRuleEl));

            if (selectionEnableRuleId != null)
            {
                RibbonXmlHelpers.RemoveByIdInChild(ruleDefsEl, "EnableRules", "EnableRule", selectionEnableRuleId);
                enableRulesEl.Add(new XElement("EnableRule",
                    new XAttribute("Id", selectionEnableRuleId),
                    new XElement("SelectionCountRule", new XAttribute("Minimum", "1"))));
            }

            RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{buttonId}.LabelText", label);
            RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{buttonId}.ToolTipTitle", tooltipTitle);
            if (!string.IsNullOrWhiteSpace(tooltipDesc))
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{buttonId}.ToolTipDescription", tooltipDesc);

            return (null, $"add_button: '{label}' [{surface}] click={function} enable={enableFunction}");
        }

        public (string error, string summary) ExecuteUpdateButton(XDocument ribbonDoc, string entityName, JsonElement op)
        {
            var buttonId = RibbonXmlHelpers.GetJsonString(op, "button_id");
            var labelHint = RibbonXmlHelpers.GetJsonString(op, "label");

            if (string.IsNullOrWhiteSpace(buttonId))
            {
                if (string.IsNullOrWhiteSpace(labelHint))
                    return ("Error: update_button requires 'button_id' or 'label' to identify the button.", null);

                var labelResolution = ResolveCustomButtonIdByLabel(ribbonDoc, labelHint);
                if (labelResolution.error != null)
                    return (labelResolution.error, null);

                buttonId = labelResolution.buttonId;
                if (string.IsNullOrWhiteSpace(buttonId))
                {
                    var slug = RibbonXmlHelpers.GenerateSlug(labelHint);
                    buttonId = $"devkit.{entityName}.{slug}.Button";
                }
            }

            var buttonEl = ribbonDoc.Root
                ?.Element("CustomActions")
                ?.Descendants("Button")
                .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, buttonId, StringComparison.OrdinalIgnoreCase));

            if (buttonEl == null)
                return ($"Error: Button '{buttonId}' not found in existing RibbonDiffXml. " +
                        "This is likely an OOB (out-of-the-box) button. " +
                        "update_button only supports custom buttons defined in RibbonDiffXml. " +
                        "For OOB buttons, only hide_button and show_button are supported.", null);

            var commandId = buttonId.Replace(".Button", ".Command");
            var enableRuleId = buttonId.Replace(".Button", ".EnableRule");

            var commandDefEl = ribbonDoc.Root
                ?.Element("CommandDefinitions")
                ?.Elements("CommandDefinition")
                .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, commandId, StringComparison.OrdinalIgnoreCase));

            var ruleDefsEl = ribbonDoc.Root?.Element("RuleDefinitions");
            var enableRuleEl = ruleDefsEl
                ?.Element("EnableRules")
                ?.Elements("EnableRule")
                .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, enableRuleId, StringComparison.OrdinalIgnoreCase));

            var updatedFields = new List<string>();

            var newLabel = RibbonXmlHelpers.GetJsonString(op, "label");
            if (!string.IsNullOrWhiteSpace(newLabel))
            {
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{buttonId}.LabelText", newLabel);
                updatedFields.Add("label");
            }

            var newTooltipTitle = RibbonXmlHelpers.GetJsonString(op, "tooltip_title");
            if (!string.IsNullOrWhiteSpace(newTooltipTitle))
            {
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{buttonId}.ToolTipTitle", newTooltipTitle);
                updatedFields.Add("tooltip_title");
            }

            var newTooltipDesc = RibbonXmlHelpers.GetJsonString(op, "tooltip_description");
            if (!string.IsNullOrWhiteSpace(newTooltipDesc))
            {
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{buttonId}.ToolTipDescription", newTooltipDesc);
                if (buttonEl.Attribute("ToolTipDescription") == null)
                    buttonEl.Add(new XAttribute("ToolTipDescription", $"$LocLabels:{buttonId}.ToolTipDescription"));
                updatedFields.Add("tooltip_description");
            }

            if (op.TryGetProperty("sequence", out _))
            {
                var newSeq = RibbonXmlHelpers.GetJsonInt(op, "sequence", 85);
                buttonEl.SetAttributeValue("Sequence", newSeq);
                buttonEl.Parent?.Parent?.SetAttributeValue("Sequence", newSeq);
                updatedFields.Add($"sequence={newSeq}");
            }

            var newModernImage = RibbonXmlHelpers.GetJsonString(op, "modern_image");
            if (!string.IsNullOrWhiteSpace(newModernImage))
            {
                var imgError = _validation.ValidateWebResourceExists(newModernImage);
                if (imgError != null) return (imgError, null);
                buttonEl.SetAttributeValue("Image16by16", $"$webresource:{newModernImage}");
                buttonEl.SetAttributeValue("Image32by32", $"$webresource:{newModernImage}");
                buttonEl.SetAttributeValue("ModernImage", $"$webresource:{newModernImage}");
                updatedFields.Add("modern_image");
            }

            var newLibrary = RibbonXmlHelpers.GetJsonString(op, "library");
            if (!string.IsNullOrWhiteSpace(newLibrary))
            {
                var libError = _validation.ValidateWebResourceExists(newLibrary);
                if (libError != null) return (libError, null);
                if (commandDefEl != null)
                    commandDefEl.Element("Actions")?.Element("JavaScriptFunction")?.SetAttributeValue("Library", $"$webresource:{newLibrary}");
                updatedFields.Add("library");
            }

            var newFunction = RibbonXmlHelpers.GetJsonString(op, "function");
            if (!string.IsNullOrWhiteSpace(newFunction))
            {
                if (commandDefEl != null)
                    commandDefEl.Element("Actions")?.Element("JavaScriptFunction")?.SetAttributeValue("FunctionName", newFunction);
                updatedFields.Add("function");
            }

            var newEnableLibrary = RibbonXmlHelpers.GetJsonString(op, "enable_library");
            if (!string.IsNullOrWhiteSpace(newEnableLibrary))
            {
                var libError = _validation.ValidateWebResourceExists(newEnableLibrary);
                if (libError != null) return (libError, null);
                enableRuleEl?.Element("CustomRule")?.SetAttributeValue("Library", $"$webresource:{newEnableLibrary}");
                updatedFields.Add("enable_library");
            }

            var newEnableFunction = RibbonXmlHelpers.GetJsonString(op, "enable_function");
            if (!string.IsNullOrWhiteSpace(newEnableFunction))
            {
                enableRuleEl?.Element("CustomRule")?.SetAttributeValue("FunctionName", newEnableFunction);
                updatedFields.Add("enable_function");
            }

            if (updatedFields.Count == 0)
                return ("Error: update_button requires at least one updatable field: " +
                        "label, library, function, enable_library, enable_function, modern_image, tooltip_title, tooltip_description, sequence.", null);

            return (null, $"update_button: '{buttonId}' updated [{string.Join(", ", updatedFields)}]");
        }

        private static (string buttonId, string error) ResolveCustomButtonIdByLabel(XDocument ribbonDoc, string label)
        {
            var buttons = ribbonDoc.Root
                ?.Element("CustomActions")
                ?.Descendants("Button")
                .Where(e => ButtonLabelMatches(ribbonDoc, e, label))
                .Select(e => e.Attribute("Id")?.Value)
                .Where(id => !string.IsNullOrWhiteSpace(id))
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .ToList() ?? [];

            if (buttons.Count == 1)
                return (buttons[0], null);

            if (buttons.Count > 1)
                return (null, $"Error: Multiple custom buttons with label '{label}' found in existing RibbonDiffXml. Use 'button_id' to identify the button. Matches: {string.Join(", ", buttons)}");

            return (null, null);
        }

        private static bool ButtonLabelMatches(XDocument ribbonDoc, XElement buttonEl, string label)
        {
            var labelText = buttonEl.Attribute("LabelText")?.Value;
            if (string.Equals(labelText, label, StringComparison.OrdinalIgnoreCase))
                return true;

            const string locLabelPrefix = "$LocLabels:";
            if (string.IsNullOrWhiteSpace(labelText) ||
                !labelText.StartsWith(locLabelPrefix, StringComparison.OrdinalIgnoreCase))
                return false;

            var locLabelId = labelText.Substring(locLabelPrefix.Length);
            return ribbonDoc.Root
                ?.Element("LocLabels")
                ?.Elements("LocLabel")
                .Where(e => string.Equals(e.Attribute("Id")?.Value, locLabelId, StringComparison.OrdinalIgnoreCase))
                .Elements("Titles")
                .Elements("Title")
                .Any(e => string.Equals(e.Attribute("description")?.Value, label, StringComparison.OrdinalIgnoreCase)) == true;
        }

        public (string error, string summary) ExecuteHideButton(XDocument ribbonDoc, string entityName, JsonElement op)
        {
            var buttonId = RibbonXmlHelpers.GetJsonString(op, "button_id");
            if (string.IsNullOrWhiteSpace(buttonId))
                return ("Error: hide_button requires 'button_id' (e.g. 'Mscrm.Form.v4_mcp.Deactivate').\n" +
                        "Tip: Use manage_ribbon(action='buttons') to see Button Id column.", null);

            buttonId = buttonId.Trim();
            var isOob = _validation.IsOobButton(entityName, buttonId);

            if (isOob)
            {
                var safeId = buttonId.Replace(".", "_").Replace(" ", "_");
                var hideActionId = $"devkit.{safeId}.Hide";

                ribbonDoc.Root
                    ?.Descendants("HideCustomAction")
                    .Where(e => string.Equals(e.Attribute("Location")?.Value, buttonId, StringComparison.OrdinalIgnoreCase))
                    .ToList()
                    .ForEach(e => e.Remove());

                var customActionsEl = RibbonXmlHelpers.GetOrCreateElement(ribbonDoc.Root, "CustomActions");
                customActionsEl.Add(new XElement("HideCustomAction",
                    new XAttribute("HideActionId", hideActionId),
                    new XAttribute("Location", buttonId)));

                return (null, $"hide_button (OOB): '{buttonId}' → HideCustomAction added");
            }
            else
            {
                var buttonEl = ribbonDoc.Root
                    ?.Descendants("Button")
                    .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, buttonId, StringComparison.OrdinalIgnoreCase));

                if (buttonEl == null)
                    return ($"Error: Button '{buttonId}' not found in RibbonDiffXml.\n" +
                            "Tip: Use manage_ribbon(action='buttons') to verify the Button Id.", null);

                var commandId = buttonEl.Attribute("Command")?.Value;
                if (string.IsNullOrWhiteSpace(commandId))
                    return ($"Error: Button '{buttonId}' has no Command attribute.", null);

                var commandDefEl = ribbonDoc.Root
                    ?.Element("CommandDefinitions")
                    ?.Elements("CommandDefinition")
                    .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, commandId, StringComparison.OrdinalIgnoreCase));

                if (commandDefEl == null)
                    return ($"Error: CommandDefinition '{commandId}' not found for button '{buttonId}'.", null);

                var alwaysDisabledRuleId = $"devkit.{entityName}.AlwaysDisabled.EnableRule";

                var enableRulesInCmd = RibbonXmlHelpers.GetOrCreateElement(commandDefEl, "EnableRules");
                if (!enableRulesInCmd.Elements("EnableRule").Any(e =>
                    string.Equals(e.Attribute("Id")?.Value, alwaysDisabledRuleId, StringComparison.OrdinalIgnoreCase)))
                {
                    enableRulesInCmd.Add(new XElement("EnableRule", new XAttribute("Id", alwaysDisabledRuleId)));
                }

                var ruleDefsEl = RibbonXmlHelpers.GetOrCreateElement(ribbonDoc.Root, "RuleDefinitions");
                var enableRulesDefEl = RibbonXmlHelpers.GetOrCreateElement(ruleDefsEl, "EnableRules");
                if (!enableRulesDefEl.Elements("EnableRule").Any(e =>
                    string.Equals(e.Attribute("Id")?.Value, alwaysDisabledRuleId, StringComparison.OrdinalIgnoreCase)))
                {
                    enableRulesDefEl.Add(new XElement("EnableRule",
                        new XAttribute("Id", alwaysDisabledRuleId),
                        new XElement("SelectionCountRule",
                            new XAttribute("Minimum", "9999"),
                            new XAttribute("Maximum", "9999"))));
                }

                return (null, $"hide_button (custom): '{buttonId}' → AlwaysDisabled EnableRule injected into '{commandId}'");
            }
        }

        public (string error, string summary) ExecuteShowButton(XDocument ribbonDoc, string entityName, JsonElement op)
        {
            var buttonId = RibbonXmlHelpers.GetJsonString(op, "button_id");
            if (string.IsNullOrWhiteSpace(buttonId))
                return ("Error: show_button requires 'button_id' (e.g. 'Mscrm.Form.v4_mcp.Deactivate').\n" +
                        "Tip: Use manage_ribbon(action='buttons') to see Button Id column.", null);

            buttonId = buttonId.Trim();
            var isOob = _validation.IsOobButton(entityName, buttonId);

            if (isOob)
            {
                var removed = ribbonDoc.Root
                    ?.Descendants("HideCustomAction")
                    .Where(e => string.Equals(e.Attribute("Location")?.Value, buttonId, StringComparison.OrdinalIgnoreCase))
                    .ToList();

                if (removed == null || removed.Count == 0)
                    return (null, $"show_button (OOB): '{buttonId}' — no HideCustomAction found (button already visible)");

                removed.ForEach(e => e.Remove());
                return (null, $"show_button (OOB): '{buttonId}' → HideCustomAction removed");
            }
            else
            {
                var buttonEl = ribbonDoc.Root
                    ?.Descendants("Button")
                    .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, buttonId, StringComparison.OrdinalIgnoreCase));

                if (buttonEl == null)
                    return ($"Error: Button '{buttonId}' not found in RibbonDiffXml.", null);

                var commandId = buttonEl.Attribute("Command")?.Value;
                var commandDefEl = ribbonDoc.Root
                    ?.Element("CommandDefinitions")
                    ?.Elements("CommandDefinition")
                    .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, commandId, StringComparison.OrdinalIgnoreCase));

                var alwaysDisabledRuleId = $"devkit.{entityName}.AlwaysDisabled.EnableRule";

                commandDefEl?.Element("EnableRules")
                    ?.Elements("EnableRule")
                    .Where(e => string.Equals(e.Attribute("Id")?.Value, alwaysDisabledRuleId, StringComparison.OrdinalIgnoreCase))
                    .ToList()
                    .ForEach(e => e.Remove());

                var stillReferenced = ribbonDoc.Root
                    ?.Descendants("CommandDefinition")
                    .Any(cd => cd.Element("EnableRules")
                        ?.Elements("EnableRule")
                        .Any(er => string.Equals(er.Attribute("Id")?.Value, alwaysDisabledRuleId, StringComparison.OrdinalIgnoreCase)) == true) == true;

                if (!stillReferenced)
                {
                    ribbonDoc.Root
                        ?.Element("RuleDefinitions")
                        ?.Element("EnableRules")
                        ?.Elements("EnableRule")
                        .Where(e => string.Equals(e.Attribute("Id")?.Value, alwaysDisabledRuleId, StringComparison.OrdinalIgnoreCase))
                        .ToList()
                        .ForEach(e => e.Remove());
                }

                return (null, $"show_button (custom): '{buttonId}' → AlwaysDisabled EnableRule removed from '{commandId}'");
            }
        }
    }
}
