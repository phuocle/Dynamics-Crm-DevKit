using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon
{
    internal sealed class RibbonFlyoutOperations
    {
        private readonly IRibbonValidation _validation;
        private readonly int _lcid;

        public RibbonFlyoutOperations(IRibbonValidation validation, int lcid)
        {
            _validation = validation;
            _lcid = lcid;
        }

        public (string error, string hint, string summary) ExecuteAddSplitButton(XDocument ribbonDoc, string entityName, JsonElement op)
        {
            var surface = RibbonXmlHelpers.GetJsonString(op, "surface");
            var label = RibbonXmlHelpers.GetJsonString(op, "label");
            var library = RibbonXmlHelpers.GetJsonString(op, "library");
            var function = RibbonXmlHelpers.GetJsonString(op, "function");
            var enableLibrary = RibbonXmlHelpers.GetJsonString(op, "enable_library");
            var enableFunction = RibbonXmlHelpers.GetJsonString(op, "enable_function");

            if (string.IsNullOrWhiteSpace(surface))
                return ("add_split_button requires 'surface' (form, main_grid, or sub_grid).", null, null);
            if (string.IsNullOrWhiteSpace(label))
                return ("add_split_button requires 'label' (button display text).", null, null);
            if (string.IsNullOrWhiteSpace(library))
                return ("add_split_button requires 'library' (main button JS web resource).", null, null);
            if (string.IsNullOrWhiteSpace(function))
                return ("add_split_button requires 'function' (main button JS function name).", null, null);
            if (string.IsNullOrWhiteSpace(enableLibrary))
                return ("add_split_button requires 'enable_library' (main button enable JS web resource).", null, null);
            if (string.IsNullOrWhiteSpace(enableFunction))
                return ("add_split_button requires 'enable_function' (main button enable JS function name).", null, null);

            surface = surface.Trim().ToLowerInvariant();
            if (!RibbonXmlHelpers.SurfaceLocationMap.ContainsKey(surface))
                return ($"Invalid surface '{surface}'.", "Valid: form, main_grid, sub_grid.", null);

            if (!op.TryGetProperty("items", out var itemsProp) || itemsProp.ValueKind != JsonValueKind.Array)
                return ("add_split_button requires 'items' array with at least 1 item.", null, null);

            var items = itemsProp.EnumerateArray().ToList();
            if (items.Count == 0)
                return ("add_split_button requires 'items' array with at least 1 item.", null, null);

            var libErr = _validation.ValidateWebResourceExists(library);
            if (libErr != null) return (libErr, null, null);
            var enLibErr = _validation.ValidateWebResourceExists(enableLibrary);
            if (enLibErr != null) return (enLibErr, null, null);

            var slugSet = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var item in items)
            {
                var itemLabel = RibbonXmlHelpers.GetJsonString(item, "label");
                var itemLib = RibbonXmlHelpers.GetJsonString(item, "library");
                var itemFunc = RibbonXmlHelpers.GetJsonString(item, "function");
                var itemEnLib = RibbonXmlHelpers.GetJsonString(item, "enable_library");
                var itemEnFunc = RibbonXmlHelpers.GetJsonString(item, "enable_function");

                if (string.IsNullOrWhiteSpace(itemLabel))
                    return ("Each item requires 'label'.", null, null);
                if (string.IsNullOrWhiteSpace(itemLib))
                    return ($"Item '{itemLabel}' requires 'library'.", null, null);
                if (string.IsNullOrWhiteSpace(itemFunc))
                    return ($"Item '{itemLabel}' requires 'function'.", null, null);
                if (string.IsNullOrWhiteSpace(itemEnLib))
                    return ($"Item '{itemLabel}' requires 'enable_library'.", null, null);
                if (string.IsNullOrWhiteSpace(itemEnFunc))
                    return ($"Item '{itemLabel}' requires 'enable_function'.", null, null);

                var itemLibErr2 = _validation.ValidateWebResourceExists(itemLib);
                if (itemLibErr2 != null) return (itemLibErr2, null, null);
                var itemEnLibErr2 = _validation.ValidateWebResourceExists(itemEnLib);
                if (itemEnLibErr2 != null) return (itemEnLibErr2, null, null);

                var itemImage = RibbonXmlHelpers.GetJsonString(item, "modern_image");
                if (!string.IsNullOrWhiteSpace(itemImage))
                {
                    var imgErr = _validation.ValidateWebResourceExists(itemImage);
                    if (imgErr != null) return (imgErr, null, null);
                }

                var itemSlug = RibbonXmlHelpers.GenerateSlug(itemLabel);
                if (!slugSet.Add(itemSlug))
                    return ($"Duplicate item slug '{itemSlug}' — two items resolve to the same ID.", "Use different labels.", null);
            }

            var modernImage = RibbonXmlHelpers.GetJsonString(op, "modern_image");
            var tooltipTitle = RibbonXmlHelpers.GetJsonString(op, "tooltip_title");
            var tooltipDesc = RibbonXmlHelpers.GetJsonString(op, "tooltip_description");
            var sequence = RibbonXmlHelpers.GetJsonInt(op, "sequence", 85);

            if (!string.IsNullOrWhiteSpace(modernImage))
            {
                var imgErr = _validation.ValidateWebResourceExists(modernImage);
                if (imgErr != null) return (imgErr, null, null);
            }

            var slug = RibbonXmlHelpers.GenerateSlug(label);
            var surfaceSuffix = surface == "form" ? "Form" : surface == "main_grid" ? "HomepageGrid" : "SubGrid";
            var customActionId = $"devkit.{entityName}.{slug}.{surfaceSuffix}.CustomAction";
            var splitButtonId = $"devkit.{entityName}.{slug}.{surfaceSuffix}.SplitButton";
            var mainCommandId = $"devkit.{entityName}.{slug}.{surfaceSuffix}.Command";
            var mainEnRuleId = $"devkit.{entityName}.{slug}.{surfaceSuffix}.EnableRule";
            var menuId = $"devkit.{entityName}.{slug}.{surfaceSuffix}.SplitButton.Menu";
            var menuSectionId = $"devkit.{entityName}.{slug}.{surfaceSuffix}.MenuSection";
            var controlsId = $"devkit.{entityName}.{slug}.{surfaceSuffix}.MenuSection.Controls";
            string selectionEnableRuleId = null;

            var location = RibbonXmlHelpers.SurfaceLocationMap[surface].Replace("{entity}", entityName);

            RibbonXmlHelpers.RemoveCustomActionByInnerElementId(ribbonDoc.Root, splitButtonId);
            RibbonXmlHelpers.RemoveById(ribbonDoc.Root, "CommandDefinitions", "CommandDefinition", mainCommandId);
            var ruleDefsClean = ribbonDoc.Root.Element("RuleDefinitions");
            if (ruleDefsClean != null)
            {
                RibbonXmlHelpers.RemoveByIdInChild(ruleDefsClean, "EnableRules", "EnableRule", mainEnRuleId);
                if (selectionEnableRuleId != null)
                    RibbonXmlHelpers.RemoveByIdInChild(ruleDefsClean, "EnableRules", "EnableRule", selectionEnableRuleId);
            }

            foreach (var item in items)
            {
                var itemSlug = RibbonXmlHelpers.GenerateSlug(RibbonXmlHelpers.GetJsonString(item, "label"));
                var itemCommandId = $"devkit.{entityName}.{slug}.{surfaceSuffix}.{itemSlug}.Command";
                var itemEnRuleId = $"devkit.{entityName}.{slug}.{surfaceSuffix}.{itemSlug}.EnableRule";
                RibbonXmlHelpers.RemoveById(ribbonDoc.Root, "CommandDefinitions", "CommandDefinition", itemCommandId);
                if (ruleDefsClean != null)
                    RibbonXmlHelpers.RemoveByIdInChild(ruleDefsClean, "EnableRules", "EnableRule", itemEnRuleId);
            }

            XElement[] MakeCrmParams() => surface == "form"
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

            var customActionsEl = RibbonXmlHelpers.GetOrCreateElement(ribbonDoc.Root, "CustomActions");
            var controlsEl = new XElement("Controls", new XAttribute("Id", controlsId));
            var autoSeq = 10;

            foreach (var item in items)
            {
                var itemLabel = RibbonXmlHelpers.GetJsonString(item, "label");
                var itemSlug = RibbonXmlHelpers.GenerateSlug(itemLabel);
                var itemBtnId = $"devkit.{entityName}.{slug}.{surfaceSuffix}.{itemSlug}.Button";
                var itemCmdId = $"devkit.{entityName}.{slug}.{surfaceSuffix}.{itemSlug}.Command";
                var itemSeq = RibbonXmlHelpers.GetJsonInt(item, "sequence", autoSeq);
                var itemImage = RibbonXmlHelpers.GetJsonString(item, "modern_image");

                var btnEl = new XElement("Button",
                    new XAttribute("Alt", $"$LocLabels:{itemBtnId}.Alt"),
                    new XAttribute("Command", itemCmdId),
                    new XAttribute("Id", itemBtnId),
                    new XAttribute("LabelText", $"$LocLabels:{itemBtnId}.LabelText"),
                    new XAttribute("Sequence", itemSeq));

                var itemTooltipTitle = RibbonXmlHelpers.GetJsonString(item, "tooltip_title");
                if (!string.IsNullOrWhiteSpace(itemTooltipTitle))
                    btnEl.Add(new XAttribute("ToolTipTitle", $"$LocLabels:{itemBtnId}.ToolTipTitle"));

                if (!string.IsNullOrWhiteSpace(itemImage))
                {
                    btnEl.Add(new XAttribute("Image16by16", $"$webresource:{itemImage}"));
                    btnEl.Add(new XAttribute("Image32by32", $"$webresource:{itemImage}"));
                    btnEl.Add(new XAttribute("ModernImage", $"$webresource:{itemImage}"));
                }

                controlsEl.Add(btnEl);
                autoSeq += 10;
            }

            var menuSectionEl = new XElement("MenuSection",
                new XAttribute("Id", menuSectionId),
                new XAttribute("Sequence", "10"),
                new XAttribute("DisplayMode", "Menu16"),
                controlsEl);

            var menuEl = new XElement("Menu",
                new XAttribute("Id", menuId),
                menuSectionEl);

            var splitButtonEl = new XElement("SplitButton",
                new XAttribute("Alt", $"$LocLabels:{splitButtonId}.Alt"),
                new XAttribute("Command", mainCommandId),
                new XAttribute("Id", splitButtonId),
                new XAttribute("LabelText", $"$LocLabels:{splitButtonId}.LabelText"),
                new XAttribute("PopulateOnlyOnce", "true"),
                new XAttribute("Sequence", sequence),
                new XAttribute("TemplateAlias", "isv"));

            if (!string.IsNullOrWhiteSpace(tooltipTitle))
                splitButtonEl.Add(new XAttribute("ToolTipTitle", $"$LocLabels:{splitButtonId}.ToolTipTitle"));

            if (!string.IsNullOrWhiteSpace(tooltipDesc))
                splitButtonEl.Add(new XAttribute("ToolTipDescription", $"$LocLabels:{splitButtonId}.ToolTipDescription"));

            if (!string.IsNullOrWhiteSpace(modernImage))
            {
                splitButtonEl.Add(new XAttribute("Image16by16", $"$webresource:{modernImage}"));
                splitButtonEl.Add(new XAttribute("Image32by32", $"$webresource:{modernImage}"));
                splitButtonEl.Add(new XAttribute("ModernImage", $"$webresource:{modernImage}"));
            }

            splitButtonEl.Add(menuEl);

            customActionsEl.Add(new XElement("CustomAction",
                new XAttribute("Id", customActionId),
                new XAttribute("Location", location),
                new XAttribute("Sequence", sequence),
                new XElement("CommandUIDefinition", splitButtonEl)));

            var commandDefsEl = RibbonXmlHelpers.GetOrCreateElement(ribbonDoc.Root, "CommandDefinitions");

            var mainEnableRulesEl = new XElement("EnableRules",
                new XElement("EnableRule", new XAttribute("Id", mainEnRuleId)));
            if (selectionEnableRuleId != null)
                mainEnableRulesEl.Add(new XElement("EnableRule", new XAttribute("Id", selectionEnableRuleId)));

            var mainJsFuncEl = new XElement("JavaScriptFunction",
                new XAttribute("FunctionName", function),
                new XAttribute("Library", $"$webresource:{library}"));
            foreach (var p in MakeCrmParams()) mainJsFuncEl.Add(p);

            commandDefsEl.Add(new XElement("CommandDefinition",
                new XAttribute("Id", mainCommandId),
                mainEnableRulesEl,
                new XElement("DisplayRules"),
                new XElement("Actions", mainJsFuncEl)));

            foreach (var item in items)
            {
                var itemLabel = RibbonXmlHelpers.GetJsonString(item, "label");
                var itemSlug = RibbonXmlHelpers.GenerateSlug(itemLabel);
                var itemCmdId = $"devkit.{entityName}.{slug}.{surfaceSuffix}.{itemSlug}.Command";
                var itemEnRuleId = $"devkit.{entityName}.{slug}.{surfaceSuffix}.{itemSlug}.EnableRule";
                var itemLib = RibbonXmlHelpers.GetJsonString(item, "library");
                var itemFunc = RibbonXmlHelpers.GetJsonString(item, "function");

                var jsFuncEl = new XElement("JavaScriptFunction",
                    new XAttribute("FunctionName", itemFunc),
                    new XAttribute("Library", $"$webresource:{itemLib}"));
                foreach (var p in MakeCrmParams()) jsFuncEl.Add(p);

                var itemEnableRulesEl = new XElement("EnableRules",
                    new XElement("EnableRule", new XAttribute("Id", itemEnRuleId)));
                if (selectionEnableRuleId != null)
                    itemEnableRulesEl.Add(new XElement("EnableRule", new XAttribute("Id", selectionEnableRuleId)));

                commandDefsEl.Add(new XElement("CommandDefinition",
                    new XAttribute("Id", itemCmdId),
                    itemEnableRulesEl,
                    new XElement("DisplayRules"),
                    new XElement("Actions", jsFuncEl)));
            }

            var ruleDefsEl = RibbonXmlHelpers.GetOrCreateElement(ribbonDoc.Root, "RuleDefinitions");
            var enableRulesEl = RibbonXmlHelpers.GetOrCreateElement(ruleDefsEl, "EnableRules");

            var mainCustomRuleEl = new XElement("CustomRule",
                new XAttribute("FunctionName", enableFunction),
                new XAttribute("Library", $"$webresource:{enableLibrary}"));
            foreach (var p in MakeCrmParams()) mainCustomRuleEl.Add(new XElement(p));

            enableRulesEl.Add(new XElement("EnableRule",
                new XAttribute("Id", mainEnRuleId),
                mainCustomRuleEl));

            foreach (var item in items)
            {
                var itemLabel = RibbonXmlHelpers.GetJsonString(item, "label");
                var itemSlug = RibbonXmlHelpers.GenerateSlug(itemLabel);
                var itemEnRuleId = $"devkit.{entityName}.{slug}.{surfaceSuffix}.{itemSlug}.EnableRule";
                var itemEnLib = RibbonXmlHelpers.GetJsonString(item, "enable_library");
                var itemEnFunc = RibbonXmlHelpers.GetJsonString(item, "enable_function");

                RibbonXmlHelpers.RemoveByIdInChild(ruleDefsEl, "EnableRules", "EnableRule", itemEnRuleId);

                var customRuleEl = new XElement("CustomRule",
                    new XAttribute("FunctionName", itemEnFunc),
                    new XAttribute("Library", $"$webresource:{itemEnLib}"));
                foreach (var p in MakeCrmParams()) customRuleEl.Add(new XElement(p));

                enableRulesEl.Add(new XElement("EnableRule",
                    new XAttribute("Id", itemEnRuleId),
                    customRuleEl));
            }

            if (selectionEnableRuleId != null)
            {
                enableRulesEl.Add(new XElement("EnableRule",
                    new XAttribute("Id", selectionEnableRuleId),
                    new XElement("SelectionCountRule", new XAttribute("Minimum", "1"))));
            }

            RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{splitButtonId}.LabelText", label);
            RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{splitButtonId}.Alt", label);
            if (!string.IsNullOrWhiteSpace(tooltipTitle))
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{splitButtonId}.ToolTipTitle", tooltipTitle);
            if (!string.IsNullOrWhiteSpace(tooltipDesc))
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{splitButtonId}.ToolTipDescription", tooltipDesc);

            foreach (var item in items)
            {
                var itemLabel = RibbonXmlHelpers.GetJsonString(item, "label");
                var itemSlug = RibbonXmlHelpers.GenerateSlug(itemLabel);
                var itemBtnId = $"devkit.{entityName}.{slug}.{surfaceSuffix}.{itemSlug}.Button";
                var itemTT = RibbonXmlHelpers.GetJsonString(item, "tooltip_title");

                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{itemBtnId}.LabelText", itemLabel);
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{itemBtnId}.Alt", itemLabel);
                if (!string.IsNullOrWhiteSpace(itemTT))
                    RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{itemBtnId}.ToolTipTitle", itemTT);
            }

            var itemLabels = string.Join(", ", items.Select(i => RibbonXmlHelpers.GetJsonString(i, "label")));
            return (null, null, $"add_split_button: '{label}' [{surface}] main_fn={function} items=[{itemLabels}]");
        }

        public (string error, string hint, string summary) ExecuteUpdateSplitButton(XDocument ribbonDoc, string entityName, JsonElement op)
        {
            var splitButtonId = RibbonXmlHelpers.GetJsonString(op, "split_button_id");
            var labelHint = RibbonXmlHelpers.GetJsonString(op, "label");

            XElement splitButtonEl = null;
            if (!string.IsNullOrWhiteSpace(splitButtonId))
            {
                splitButtonEl = ribbonDoc.Root
                    ?.Element("CustomActions")
                    ?.Descendants("SplitButton")
                    .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, splitButtonId, StringComparison.OrdinalIgnoreCase));
            }
            else
            {
                if (string.IsNullOrWhiteSpace(labelHint))
                    return ("update_split_button requires 'split_button_id' or 'label' to identify the split button.", null, null);
                var slug = RibbonXmlHelpers.GenerateSlug(labelHint);
                splitButtonEl = ribbonDoc.Root
                    ?.Element("CustomActions")
                    ?.Descendants("SplitButton")
                    .FirstOrDefault(e =>
                        string.Equals(e.Attribute("LabelText")?.Value, labelHint, StringComparison.OrdinalIgnoreCase) ||
                        (e.Attribute("Id")?.Value?.Contains($".{slug}.", StringComparison.OrdinalIgnoreCase) == true &&
                         e.Attribute("Id")?.Value?.EndsWith(".SplitButton", StringComparison.OrdinalIgnoreCase) == true));
                if (splitButtonEl != null)
                    splitButtonId = splitButtonEl.Attribute("Id")?.Value;
            }

            if (splitButtonEl == null)
                return ($"SplitButton '{splitButtonId ?? labelHint}' not found in existing RibbonDiffXml.",
                        "Use add_split_button to create it first.",
                        null);

            var splitPrefix = splitButtonId;
            var prefixStrip = $"devkit.{entityName}.";
            if (splitPrefix.StartsWith(prefixStrip, StringComparison.OrdinalIgnoreCase))
                splitPrefix = splitPrefix.Substring(prefixStrip.Length);
            if (splitPrefix.EndsWith(".SplitButton", StringComparison.OrdinalIgnoreCase))
                splitPrefix = splitPrefix.Substring(0, splitPrefix.Length - ".SplitButton".Length);

            var mainCommandId = $"devkit.{entityName}.{splitPrefix}.Command";
            var mainEnRuleId = $"devkit.{entityName}.{splitPrefix}.EnableRule";

            var updatedFields = new List<string>();

            var newLabel = RibbonXmlHelpers.GetJsonString(op, "label");
            if (!string.IsNullOrWhiteSpace(newLabel) && !string.IsNullOrWhiteSpace(RibbonXmlHelpers.GetJsonString(op, "split_button_id")))
            {
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{splitButtonId}.LabelText", newLabel);
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{splitButtonId}.Alt", newLabel);
                updatedFields.Add("label");
            }
            else if (!string.IsNullOrWhiteSpace(RibbonXmlHelpers.GetJsonString(op, "new_label")))
            {
                var newLbl = RibbonXmlHelpers.GetJsonString(op, "new_label");
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{splitButtonId}.LabelText", newLbl);
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{splitButtonId}.Alt", newLbl);
                updatedFields.Add("label");
            }

            var newTT = RibbonXmlHelpers.GetJsonString(op, "tooltip_title");
            if (!string.IsNullOrWhiteSpace(newTT))
            {
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{splitButtonId}.ToolTipTitle", newTT);
                updatedFields.Add("tooltip_title");
            }

            var newTD = RibbonXmlHelpers.GetJsonString(op, "tooltip_description");
            if (!string.IsNullOrWhiteSpace(newTD))
            {
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{splitButtonId}.ToolTipDescription", newTD);
                updatedFields.Add("tooltip_description");
            }

            var newImage = RibbonXmlHelpers.GetJsonString(op, "modern_image");
            if (!string.IsNullOrWhiteSpace(newImage))
            {
                var imgErr = _validation.ValidateWebResourceExists(newImage);
                if (imgErr != null) return (imgErr, null, null);
                splitButtonEl.SetAttributeValue("Image16by16", $"$webresource:{newImage}");
                splitButtonEl.SetAttributeValue("Image32by32", $"$webresource:{newImage}");
                splitButtonEl.SetAttributeValue("ModernImage", $"$webresource:{newImage}");
                updatedFields.Add("modern_image");
            }

            if (op.TryGetProperty("sequence", out _))
            {
                var newSeq = RibbonXmlHelpers.GetJsonInt(op, "sequence", 85);
                splitButtonEl.SetAttributeValue("Sequence", newSeq);
                splitButtonEl.Parent?.Parent?.SetAttributeValue("Sequence", newSeq);
                updatedFields.Add($"sequence={newSeq}");
            }

            var newLibrary = RibbonXmlHelpers.GetJsonString(op, "library");
            if (!string.IsNullOrWhiteSpace(newLibrary))
            {
                var libErr = _validation.ValidateWebResourceExists(newLibrary);
                if (libErr != null) return (libErr, null, null);
                var cmdDefEl = ribbonDoc.Root?.Element("CommandDefinitions")
                    ?.Elements("CommandDefinition")
                    .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, mainCommandId, StringComparison.OrdinalIgnoreCase));
                cmdDefEl?.Element("Actions")?.Element("JavaScriptFunction")
                    ?.SetAttributeValue("Library", $"$webresource:{newLibrary}");
                updatedFields.Add("library");
            }

            var newFunction = RibbonXmlHelpers.GetJsonString(op, "function");
            if (!string.IsNullOrWhiteSpace(newFunction))
            {
                var cmdDefEl = ribbonDoc.Root?.Element("CommandDefinitions")
                    ?.Elements("CommandDefinition")
                    .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, mainCommandId, StringComparison.OrdinalIgnoreCase));
                cmdDefEl?.Element("Actions")?.Element("JavaScriptFunction")
                    ?.SetAttributeValue("FunctionName", newFunction);
                updatedFields.Add("function");
            }

            var newEnLib = RibbonXmlHelpers.GetJsonString(op, "enable_library");
            if (!string.IsNullOrWhiteSpace(newEnLib))
            {
                var libErr = _validation.ValidateWebResourceExists(newEnLib);
                if (libErr != null) return (libErr, null, null);
                var enRuleEl = ribbonDoc.Root?.Element("RuleDefinitions")?.Element("EnableRules")
                    ?.Elements("EnableRule")
                    .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, mainEnRuleId, StringComparison.OrdinalIgnoreCase));
                enRuleEl?.Element("CustomRule")?.SetAttributeValue("Library", $"$webresource:{newEnLib}");
                updatedFields.Add("enable_library");
            }

            var newEnFunc = RibbonXmlHelpers.GetJsonString(op, "enable_function");
            if (!string.IsNullOrWhiteSpace(newEnFunc))
            {
                var enRuleEl = ribbonDoc.Root?.Element("RuleDefinitions")?.Element("EnableRules")
                    ?.Elements("EnableRule")
                    .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, mainEnRuleId, StringComparison.OrdinalIgnoreCase));
                enRuleEl?.Element("CustomRule")?.SetAttributeValue("FunctionName", newEnFunc);
                updatedFields.Add("enable_function");
            }

            if (op.TryGetProperty("items", out var itemsProp) && itemsProp.ValueKind == JsonValueKind.Array)
            {
                foreach (var item in itemsProp.EnumerateArray())
                {
                    var itemLabel = RibbonXmlHelpers.GetJsonString(item, "item_label");
                    if (string.IsNullOrWhiteSpace(itemLabel))
                        return ("Each item in update_split_button requires 'item_label' to identify which button to update.", null, null);

                    var itemSlug = RibbonXmlHelpers.GenerateSlug(itemLabel);
                    var itemBtnId = $"devkit.{entityName}.{splitPrefix}.{itemSlug}.Button";
                    var itemCmdId = $"devkit.{entityName}.{splitPrefix}.{itemSlug}.Command";
                    var itemEnRuleId = $"devkit.{entityName}.{splitPrefix}.{itemSlug}.EnableRule";

                    var btnEl = splitButtonEl.Descendants("Button")
                        .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemBtnId, StringComparison.OrdinalIgnoreCase));
                    if (btnEl == null)
                    {
                        var existing = string.Join(", ", splitButtonEl.Descendants("Button").Select(b => b.Attribute("Id")?.Value ?? "?"));
                        return ($"Item button '{itemBtnId}' not found in split button.\nExisting items: {existing}", null, null);
                    }

                    var itemUpdated = new List<string>();

                    var newItemLabel = RibbonXmlHelpers.GetJsonString(item, "label");
                    if (!string.IsNullOrWhiteSpace(newItemLabel))
                    {
                        RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{itemBtnId}.LabelText", newItemLabel);
                        RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{itemBtnId}.Alt", newItemLabel);
                        itemUpdated.Add("label");
                    }

                    var newItemTT = RibbonXmlHelpers.GetJsonString(item, "tooltip_title");
                    if (!string.IsNullOrWhiteSpace(newItemTT))
                    {
                        RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{itemBtnId}.ToolTipTitle", newItemTT);
                        itemUpdated.Add("tooltip_title");
                    }

                    var newItemImage = RibbonXmlHelpers.GetJsonString(item, "modern_image");
                    if (!string.IsNullOrWhiteSpace(newItemImage))
                    {
                        var imgErr = _validation.ValidateWebResourceExists(newItemImage);
                        if (imgErr != null) return (imgErr, null, null);
                        btnEl.SetAttributeValue("Image16by16", $"$webresource:{newItemImage}");
                        btnEl.SetAttributeValue("Image32by32", $"$webresource:{newItemImage}");
                        btnEl.SetAttributeValue("ModernImage", $"$webresource:{newItemImage}");
                        itemUpdated.Add("modern_image");
                    }

                    if (item.TryGetProperty("sequence", out _))
                    {
                        btnEl.SetAttributeValue("Sequence", RibbonXmlHelpers.GetJsonInt(item, "sequence", 10));
                        itemUpdated.Add("sequence");
                    }

                    var newItemLib = RibbonXmlHelpers.GetJsonString(item, "library");
                    if (!string.IsNullOrWhiteSpace(newItemLib))
                    {
                        var libErr = _validation.ValidateWebResourceExists(newItemLib);
                        if (libErr != null) return (libErr, null, null);
                        var cmdDefEl = ribbonDoc.Root?.Element("CommandDefinitions")
                            ?.Elements("CommandDefinition")
                            .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemCmdId, StringComparison.OrdinalIgnoreCase));
                        cmdDefEl?.Element("Actions")?.Element("JavaScriptFunction")
                            ?.SetAttributeValue("Library", $"$webresource:{newItemLib}");
                        itemUpdated.Add("library");
                    }

                    var newItemFunc = RibbonXmlHelpers.GetJsonString(item, "function");
                    if (!string.IsNullOrWhiteSpace(newItemFunc))
                    {
                        var cmdDefEl = ribbonDoc.Root?.Element("CommandDefinitions")
                            ?.Elements("CommandDefinition")
                            .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemCmdId, StringComparison.OrdinalIgnoreCase));
                        cmdDefEl?.Element("Actions")?.Element("JavaScriptFunction")
                            ?.SetAttributeValue("FunctionName", newItemFunc);
                        itemUpdated.Add("function");
                    }

                    var newItemEnLib = RibbonXmlHelpers.GetJsonString(item, "enable_library");
                    if (!string.IsNullOrWhiteSpace(newItemEnLib))
                    {
                        var libErr = _validation.ValidateWebResourceExists(newItemEnLib);
                        if (libErr != null) return (libErr, null, null);
                        var enRuleEl = ribbonDoc.Root?.Element("RuleDefinitions")?.Element("EnableRules")
                            ?.Elements("EnableRule")
                            .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemEnRuleId, StringComparison.OrdinalIgnoreCase));
                        enRuleEl?.Element("CustomRule")?.SetAttributeValue("Library", $"$webresource:{newItemEnLib}");
                        itemUpdated.Add("enable_library");
                    }

                    var newItemEnFunc = RibbonXmlHelpers.GetJsonString(item, "enable_function");
                    if (!string.IsNullOrWhiteSpace(newItemEnFunc))
                    {
                        var enRuleEl = ribbonDoc.Root?.Element("RuleDefinitions")?.Element("EnableRules")
                            ?.Elements("EnableRule")
                            .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemEnRuleId, StringComparison.OrdinalIgnoreCase));
                        enRuleEl?.Element("CustomRule")?.SetAttributeValue("FunctionName", newItemEnFunc);
                        itemUpdated.Add("enable_function");
                    }

                    if (itemUpdated.Count > 0)
                        updatedFields.Add($"item[{itemLabel}]: {string.Join(", ", itemUpdated)}");
                }
            }

            if (updatedFields.Count == 0)
                return ("No fields to update.", "Provide at least one field to change.", null);

            return (null, null, $"update_split_button: '{splitButtonId}' updated [{string.Join(", ", updatedFields)}]");
        }

        public (string error, string hint, string summary) ExecuteAddFlyoutStatic(XDocument ribbonDoc, string entityName, JsonElement op)
        {
            var surface = RibbonXmlHelpers.GetJsonString(op, "surface");
            var label = RibbonXmlHelpers.GetJsonString(op, "label");

            if (string.IsNullOrWhiteSpace(surface))
                return ("add_flyout_static requires 'surface' (form, main_grid, or sub_grid).", null, null);
            if (string.IsNullOrWhiteSpace(label))
                return ("add_flyout_static requires 'label' (flyout display text).", null, null);

            surface = surface.Trim().ToLowerInvariant();
            if (!RibbonXmlHelpers.SurfaceLocationMap.ContainsKey(surface))
                return ($"Invalid surface '{surface}'.", "Valid: form, main_grid, sub_grid.", null);

            if (!op.TryGetProperty("items", out var itemsProp) || itemsProp.ValueKind != JsonValueKind.Array)
                return ("add_flyout_static requires 'items' array with at least 1 item.", null, null);

            var items = itemsProp.EnumerateArray().ToList();
            if (items.Count == 0)
                return ("add_flyout_static requires 'items' array with at least 1 item.", null, null);

            var slugSet = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var item in items)
            {
                var itemLabel = RibbonXmlHelpers.GetJsonString(item, "label");
                var itemLib = RibbonXmlHelpers.GetJsonString(item, "library");
                var itemFunc = RibbonXmlHelpers.GetJsonString(item, "function");
                var itemEnLib = RibbonXmlHelpers.GetJsonString(item, "enable_library");
                var itemEnFunc = RibbonXmlHelpers.GetJsonString(item, "enable_function");

                if (string.IsNullOrWhiteSpace(itemLabel))
                    return ("Each item requires 'label'.", null, null);
                if (string.IsNullOrWhiteSpace(itemLib))
                    return ($"Item '{itemLabel}' requires 'library'.", null, null);
                if (string.IsNullOrWhiteSpace(itemFunc))
                    return ($"Item '{itemLabel}' requires 'function'.", null, null);
                if (string.IsNullOrWhiteSpace(itemEnLib))
                    return ($"Item '{itemLabel}' requires 'enable_library'.", null, null);
                if (string.IsNullOrWhiteSpace(itemEnFunc))
                    return ($"Item '{itemLabel}' requires 'enable_function'.", null, null);

                var libErr = _validation.ValidateWebResourceExists(itemLib);
                if (libErr != null) return (libErr, null, null);
                var enLibErr = _validation.ValidateWebResourceExists(itemEnLib);
                if (enLibErr != null) return (enLibErr, null, null);

                var itemImage = RibbonXmlHelpers.GetJsonString(item, "modern_image");
                if (!string.IsNullOrWhiteSpace(itemImage))
                {
                    var imgErr = _validation.ValidateWebResourceExists(itemImage);
                    if (imgErr != null) return (imgErr, null, null);
                }

                var itemSlug = RibbonXmlHelpers.GenerateSlug(itemLabel);
                if (!slugSet.Add(itemSlug))
                    return ($"Duplicate item slug '{itemSlug}' — two items resolve to the same ID.", "Use different labels.", null);
            }

            var modernImage = RibbonXmlHelpers.GetJsonString(op, "modern_image");
            var tooltipTitle = RibbonXmlHelpers.GetJsonString(op, "tooltip_title");
            var tooltipDesc = RibbonXmlHelpers.GetJsonString(op, "tooltip_description");
            var sequence = RibbonXmlHelpers.GetJsonInt(op, "sequence", 85);

            if (!string.IsNullOrWhiteSpace(modernImage))
            {
                var imgErr = _validation.ValidateWebResourceExists(modernImage);
                if (imgErr != null) return (imgErr, null, null);
            }

            var flyoutSlug = RibbonXmlHelpers.GenerateSlug(label);
            var surfaceSuffix = surface == "form" ? "Form" : surface == "main_grid" ? "HomepageGrid" : "SubGrid";
            var customActionId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.CustomAction";
            var flyoutAnchorId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.FlyoutAnchor";
            var flyoutCommandId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.Command";
            var menuId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.FlyoutAnchor.Menu";
            var menuSectionId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.MenuSection";
            var controlsId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.MenuSection.Controls";
            string selectionEnableRuleId = null;

            var location = RibbonXmlHelpers.SurfaceLocationMap[surface].Replace("{entity}", entityName);

            RibbonXmlHelpers.RemoveCustomActionByInnerElementId(ribbonDoc.Root, flyoutAnchorId);
            RibbonXmlHelpers.RemoveById(ribbonDoc.Root, "CommandDefinitions", "CommandDefinition", flyoutCommandId);
            var ruleDefsClean = ribbonDoc.Root.Element("RuleDefinitions");
            if (ruleDefsClean != null && selectionEnableRuleId != null)
                RibbonXmlHelpers.RemoveByIdInChild(ruleDefsClean, "EnableRules", "EnableRule", selectionEnableRuleId);

            foreach (var item in items)
            {
                var itemSlug = RibbonXmlHelpers.GenerateSlug(RibbonXmlHelpers.GetJsonString(item, "label"));
                var itemCommandId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.{itemSlug}.Command";
                var itemEnRuleId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.{itemSlug}.EnableRule";

                RibbonXmlHelpers.RemoveById(ribbonDoc.Root, "CommandDefinitions", "CommandDefinition", itemCommandId);
                if (ruleDefsClean != null)
                    RibbonXmlHelpers.RemoveByIdInChild(ruleDefsClean, "EnableRules", "EnableRule", itemEnRuleId);
            }

            XElement[] MakeCrmParams() => surface == "form"
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

            var customActionsEl = RibbonXmlHelpers.GetOrCreateElement(ribbonDoc.Root, "CustomActions");
            var controlsEl = new XElement("Controls", new XAttribute("Id", controlsId));
            var autoSeq = 10;

            foreach (var item in items)
            {
                var itemLabel = RibbonXmlHelpers.GetJsonString(item, "label");
                var itemSlug = RibbonXmlHelpers.GenerateSlug(itemLabel);
                var itemBtnId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.{itemSlug}.Button";
                var itemCmdId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.{itemSlug}.Command";
                var itemSeq = RibbonXmlHelpers.GetJsonInt(item, "sequence", autoSeq);
                var itemImage = RibbonXmlHelpers.GetJsonString(item, "modern_image");
                var itemTT = RibbonXmlHelpers.GetJsonString(item, "tooltip_title");

                var btnEl = new XElement("Button",
                    new XAttribute("Alt", $"$LocLabels:{itemBtnId}.Alt"),
                    new XAttribute("Command", itemCmdId),
                    new XAttribute("Id", itemBtnId),
                    new XAttribute("LabelText", $"$LocLabels:{itemBtnId}.LabelText"),
                    new XAttribute("Sequence", itemSeq));

                if (!string.IsNullOrWhiteSpace(itemTT))
                    btnEl.Add(new XAttribute("ToolTipTitle", $"$LocLabels:{itemBtnId}.ToolTipTitle"));

                if (!string.IsNullOrWhiteSpace(itemImage))
                {
                    btnEl.Add(new XAttribute("Image16by16", $"$webresource:{itemImage}"));
                    btnEl.Add(new XAttribute("Image32by32", $"$webresource:{itemImage}"));
                    btnEl.Add(new XAttribute("ModernImage", $"$webresource:{itemImage}"));
                }

                controlsEl.Add(btnEl);
                autoSeq += 10;
            }

            var menuSectionEl = new XElement("MenuSection",
                new XAttribute("Id", menuSectionId),
                new XAttribute("Sequence", "10"),
                new XAttribute("DisplayMode", "Menu16"),
                controlsEl);

            var menuEl = new XElement("Menu",
                new XAttribute("Id", menuId),
                menuSectionEl);

            var flyoutEl = new XElement("FlyoutAnchor",
                new XAttribute("Alt", $"$LocLabels:{flyoutAnchorId}.Alt"),
                new XAttribute("Command", flyoutCommandId),
                new XAttribute("Id", flyoutAnchorId),
                new XAttribute("LabelText", $"$LocLabels:{flyoutAnchorId}.LabelText"),
                new XAttribute("PopulateOnlyOnce", "true"),
                new XAttribute("Sequence", sequence),
                new XAttribute("TemplateAlias", "isv"));

            if (!string.IsNullOrWhiteSpace(tooltipTitle))
                flyoutEl.Add(new XAttribute("ToolTipTitle", $"$LocLabels:{flyoutAnchorId}.ToolTipTitle"));

            if (!string.IsNullOrWhiteSpace(tooltipDesc))
                flyoutEl.Add(new XAttribute("ToolTipDescription", $"$LocLabels:{flyoutAnchorId}.ToolTipDescription"));

            if (!string.IsNullOrWhiteSpace(modernImage))
            {
                flyoutEl.Add(new XAttribute("Image16by16", $"$webresource:{modernImage}"));
                flyoutEl.Add(new XAttribute("Image32by32", $"$webresource:{modernImage}"));
                flyoutEl.Add(new XAttribute("ModernImage", $"$webresource:{modernImage}"));
            }

            flyoutEl.Add(menuEl);

            customActionsEl.Add(new XElement("CustomAction",
                new XAttribute("Id", customActionId),
                new XAttribute("Location", location),
                new XAttribute("Sequence", sequence),
                new XElement("CommandUIDefinition", flyoutEl)));

            var commandDefsEl = RibbonXmlHelpers.GetOrCreateElement(ribbonDoc.Root, "CommandDefinitions");

            var flyoutEnableRulesEl = new XElement("EnableRules");
            if (selectionEnableRuleId != null)
                flyoutEnableRulesEl.Add(new XElement("EnableRule", new XAttribute("Id", selectionEnableRuleId)));

            commandDefsEl.Add(new XElement("CommandDefinition",
                new XAttribute("Id", flyoutCommandId),
                flyoutEnableRulesEl,
                new XElement("DisplayRules"),
                new XElement("Actions")));

            foreach (var item in items)
            {
                var itemLabel = RibbonXmlHelpers.GetJsonString(item, "label");
                var itemSlug = RibbonXmlHelpers.GenerateSlug(itemLabel);
                var itemCmdId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.{itemSlug}.Command";
                var itemEnRuleId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.{itemSlug}.EnableRule";
                var itemLib = RibbonXmlHelpers.GetJsonString(item, "library");
                var itemFunc = RibbonXmlHelpers.GetJsonString(item, "function");

                var jsFuncEl = new XElement("JavaScriptFunction",
                    new XAttribute("FunctionName", itemFunc),
                    new XAttribute("Library", $"$webresource:{itemLib}"));
                foreach (var p in MakeCrmParams()) jsFuncEl.Add(p);

                var itemEnableRulesEl = new XElement("EnableRules",
                    new XElement("EnableRule", new XAttribute("Id", itemEnRuleId)));
                if (selectionEnableRuleId != null)
                    itemEnableRulesEl.Add(new XElement("EnableRule", new XAttribute("Id", selectionEnableRuleId)));

                commandDefsEl.Add(new XElement("CommandDefinition",
                    new XAttribute("Id", itemCmdId),
                    itemEnableRulesEl,
                    new XElement("DisplayRules"),
                    new XElement("Actions", jsFuncEl)));
            }

            var ruleDefsEl = RibbonXmlHelpers.GetOrCreateElement(ribbonDoc.Root, "RuleDefinitions");
            var enableRulesEl = RibbonXmlHelpers.GetOrCreateElement(ruleDefsEl, "EnableRules");

            foreach (var item in items)
            {
                var itemLabel = RibbonXmlHelpers.GetJsonString(item, "label");
                var itemSlug = RibbonXmlHelpers.GenerateSlug(itemLabel);
                var itemEnRuleId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.{itemSlug}.EnableRule";
                var itemEnLib = RibbonXmlHelpers.GetJsonString(item, "enable_library");
                var itemEnFunc = RibbonXmlHelpers.GetJsonString(item, "enable_function");

                RibbonXmlHelpers.RemoveByIdInChild(ruleDefsEl, "EnableRules", "EnableRule", itemEnRuleId);

                var customRuleEl = new XElement("CustomRule",
                    new XAttribute("FunctionName", itemEnFunc),
                    new XAttribute("Library", $"$webresource:{itemEnLib}"));
                foreach (var p in MakeCrmParams()) customRuleEl.Add(new XElement(p));

                enableRulesEl.Add(new XElement("EnableRule",
                    new XAttribute("Id", itemEnRuleId),
                    customRuleEl));
            }

            if (selectionEnableRuleId != null)
            {
                enableRulesEl.Add(new XElement("EnableRule",
                    new XAttribute("Id", selectionEnableRuleId),
                    new XElement("SelectionCountRule", new XAttribute("Minimum", "1"))));
            }

            RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{flyoutAnchorId}.LabelText", label);
            RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{flyoutAnchorId}.Alt", label);
            if (!string.IsNullOrWhiteSpace(tooltipTitle))
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{flyoutAnchorId}.ToolTipTitle", tooltipTitle);
            if (!string.IsNullOrWhiteSpace(tooltipDesc))
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{flyoutAnchorId}.ToolTipDescription", tooltipDesc);

            foreach (var item in items)
            {
                var itemLabel = RibbonXmlHelpers.GetJsonString(item, "label");
                var itemSlug = RibbonXmlHelpers.GenerateSlug(itemLabel);
                var itemBtnId = $"devkit.{entityName}.{flyoutSlug}.{surfaceSuffix}.{itemSlug}.Button";
                var itemTT = RibbonXmlHelpers.GetJsonString(item, "tooltip_title");

                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{itemBtnId}.LabelText", itemLabel);
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{itemBtnId}.Alt", itemLabel);
                if (!string.IsNullOrWhiteSpace(itemTT))
                    RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{itemBtnId}.ToolTipTitle", itemTT);
            }

            var itemLabels = string.Join(", ", items.Select(i => RibbonXmlHelpers.GetJsonString(i, "label")));
            return (null, null, $"add_flyout_static: '{label}' [{surface}] items=[{itemLabels}]");
        }

        public (string error, string hint, string summary) ExecuteUpdateFlyoutStatic(XDocument ribbonDoc, string entityName, JsonElement op)
        {
            var flyoutId = RibbonXmlHelpers.GetJsonString(op, "flyout_id");
            var labelHint = RibbonXmlHelpers.GetJsonString(op, "label");

            XElement flyoutEl = null;
            if (!string.IsNullOrWhiteSpace(flyoutId))
            {
                flyoutEl = ribbonDoc.Root
                    ?.Element("CustomActions")
                    ?.Descendants("FlyoutAnchor")
                    .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, flyoutId, StringComparison.OrdinalIgnoreCase));
            }
            else
            {
                if (string.IsNullOrWhiteSpace(labelHint))
                    return ("update_flyout_static requires 'flyout_id' or 'label' to identify the flyout.", null, null);
                var slug = RibbonXmlHelpers.GenerateSlug(labelHint);
                flyoutEl = ribbonDoc.Root
                    ?.Element("CustomActions")
                    ?.Descendants("FlyoutAnchor")
                    .FirstOrDefault(e =>
                        string.Equals(e.Attribute("LabelText")?.Value, labelHint, StringComparison.OrdinalIgnoreCase) ||
                        (e.Attribute("Id")?.Value?.Contains($".{slug}.", StringComparison.OrdinalIgnoreCase) == true &&
                         e.Attribute("Id")?.Value?.EndsWith(".FlyoutAnchor", StringComparison.OrdinalIgnoreCase) == true));
                if (flyoutEl != null)
                    flyoutId = flyoutEl.Attribute("Id")?.Value;
            }

            if (flyoutEl == null)
                return ($"FlyoutAnchor '{flyoutId}' not found in existing RibbonDiffXml.",
                        "Use add_flyout_static to create it first.",
                        null);

            var flyoutPrefix = flyoutId;
            var prefixStrip = $"devkit.{entityName}.";
            if (flyoutPrefix.StartsWith(prefixStrip, StringComparison.OrdinalIgnoreCase))
                flyoutPrefix = flyoutPrefix.Substring(prefixStrip.Length);
            if (flyoutPrefix.EndsWith(".FlyoutAnchor", StringComparison.OrdinalIgnoreCase))
                flyoutPrefix = flyoutPrefix.Substring(0, flyoutPrefix.Length - ".FlyoutAnchor".Length);
            var flyoutSlug = flyoutPrefix;

            var updatedFields = new List<string>();

            if (!string.IsNullOrWhiteSpace(labelHint) && !string.IsNullOrWhiteSpace(RibbonXmlHelpers.GetJsonString(op, "flyout_id")))
            {
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{flyoutId}.LabelText", labelHint);
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{flyoutId}.Alt", labelHint);
                updatedFields.Add("label");
            }
            else if (!string.IsNullOrWhiteSpace(RibbonXmlHelpers.GetJsonString(op, "new_label")))
            {
                var newLabel = RibbonXmlHelpers.GetJsonString(op, "new_label");
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{flyoutId}.LabelText", newLabel);
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{flyoutId}.Alt", newLabel);
                updatedFields.Add("label");
            }

            var newTT = RibbonXmlHelpers.GetJsonString(op, "tooltip_title");
            if (!string.IsNullOrWhiteSpace(newTT))
            {
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{flyoutId}.ToolTipTitle", newTT);
                updatedFields.Add("tooltip_title");
            }

            var newTD = RibbonXmlHelpers.GetJsonString(op, "tooltip_description");
            if (!string.IsNullOrWhiteSpace(newTD))
            {
                RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{flyoutId}.ToolTipDescription", newTD);
                updatedFields.Add("tooltip_description");
            }

            var newImage = RibbonXmlHelpers.GetJsonString(op, "modern_image");
            if (!string.IsNullOrWhiteSpace(newImage))
            {
                var imgErr = _validation.ValidateWebResourceExists(newImage);
                if (imgErr != null) return (imgErr, null, null);
                flyoutEl.SetAttributeValue("Image16by16", $"$webresource:{newImage}");
                flyoutEl.SetAttributeValue("Image32by32", $"$webresource:{newImage}");
                flyoutEl.SetAttributeValue("ModernImage", $"$webresource:{newImage}");
                updatedFields.Add("modern_image");
            }

            if (op.TryGetProperty("sequence", out _))
            {
                var newSeq = RibbonXmlHelpers.GetJsonInt(op, "sequence", 85);
                flyoutEl.SetAttributeValue("Sequence", newSeq);
                flyoutEl.Parent?.Parent?.SetAttributeValue("Sequence", newSeq);
                updatedFields.Add($"sequence={newSeq}");
            }

            if (op.TryGetProperty("items", out var itemsProp) && itemsProp.ValueKind == JsonValueKind.Array)
            {
                var items = itemsProp.EnumerateArray().ToList();
                foreach (var item in items)
                {
                    var itemLabel = RibbonXmlHelpers.GetJsonString(item, "item_label");
                    if (string.IsNullOrWhiteSpace(itemLabel))
                        return ("Each item in update_flyout_static requires 'item_label' to identify which button to update.", null, null);

                    var itemSlug = RibbonXmlHelpers.GenerateSlug(itemLabel);
                    var itemBtnId = $"devkit.{entityName}.{flyoutSlug}.{itemSlug}.Button";
                    var itemCmdId = $"devkit.{entityName}.{flyoutSlug}.{itemSlug}.Command";
                    var itemEnRuleId = $"devkit.{entityName}.{flyoutSlug}.{itemSlug}.EnableRule";

                    var btnEl = flyoutEl.Descendants("Button")
                        .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemBtnId, StringComparison.OrdinalIgnoreCase));

                    if (btnEl == null)
                        return ($"Item button '{itemBtnId}' not found in flyout.\nExisting items: {string.Join(", ", flyoutEl.Descendants("Button").Select(b => b.Attribute("LabelText")?.Value ?? b.Attribute("Id")?.Value))}",
                                "Check item_label matches an existing item.",
                                null);

                    var itemUpdated = new List<string>();

                    var newItemLabel = RibbonXmlHelpers.GetJsonString(item, "label");
                    if (!string.IsNullOrWhiteSpace(newItemLabel))
                    {
                        RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{itemBtnId}.LabelText", newItemLabel);
                        RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{itemBtnId}.Alt", newItemLabel);
                        itemUpdated.Add("label");
                    }

                    var newItemTT = RibbonXmlHelpers.GetJsonString(item, "tooltip_title");
                    if (!string.IsNullOrWhiteSpace(newItemTT))
                    {
                        RibbonXmlHelpers.UpsertLocLabel(ribbonDoc.Root, _lcid, $"{itemBtnId}.ToolTipTitle", newItemTT);
                        itemUpdated.Add("tooltip_title");
                    }

                    var newItemImage = RibbonXmlHelpers.GetJsonString(item, "modern_image");
                    if (!string.IsNullOrWhiteSpace(newItemImage))
                    {
                        var imgErr = _validation.ValidateWebResourceExists(newItemImage);
                        if (imgErr != null) return (imgErr, null, null);
                        btnEl.SetAttributeValue("Image16by16", $"$webresource:{newItemImage}");
                        btnEl.SetAttributeValue("Image32by32", $"$webresource:{newItemImage}");
                        btnEl.SetAttributeValue("ModernImage", $"$webresource:{newItemImage}");
                        itemUpdated.Add("modern_image");
                    }

                    if (item.TryGetProperty("sequence", out _))
                    {
                        var newItemSeq = RibbonXmlHelpers.GetJsonInt(item, "sequence", 10);
                        btnEl.SetAttributeValue("Sequence", newItemSeq);
                        itemUpdated.Add($"sequence={newItemSeq}");
                    }

                    var newItemLib = RibbonXmlHelpers.GetJsonString(item, "library");
                    if (!string.IsNullOrWhiteSpace(newItemLib))
                    {
                        var libErr = _validation.ValidateWebResourceExists(newItemLib);
                        if (libErr != null) return (libErr, null, null);
                        var cmdDefEl = ribbonDoc.Root?.Element("CommandDefinitions")
                            ?.Elements("CommandDefinition")
                            .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemCmdId, StringComparison.OrdinalIgnoreCase));
                        cmdDefEl?.Element("Actions")?.Element("JavaScriptFunction")?.SetAttributeValue("Library", $"$webresource:{newItemLib}");
                        itemUpdated.Add("library");
                    }

                    var newItemFunc = RibbonXmlHelpers.GetJsonString(item, "function");
                    if (!string.IsNullOrWhiteSpace(newItemFunc))
                    {
                        var cmdDefEl = ribbonDoc.Root?.Element("CommandDefinitions")
                            ?.Elements("CommandDefinition")
                            .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemCmdId, StringComparison.OrdinalIgnoreCase));
                        cmdDefEl?.Element("Actions")?.Element("JavaScriptFunction")?.SetAttributeValue("FunctionName", newItemFunc);
                        itemUpdated.Add("function");
                    }

                    var newItemEnLib = RibbonXmlHelpers.GetJsonString(item, "enable_library");
                    if (!string.IsNullOrWhiteSpace(newItemEnLib))
                    {
                        var libErr = _validation.ValidateWebResourceExists(newItemEnLib);
                        if (libErr != null) return (libErr, null, null);
                        var enRuleEl = ribbonDoc.Root?.Element("RuleDefinitions")
                            ?.Element("EnableRules")
                            ?.Elements("EnableRule")
                            .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemEnRuleId, StringComparison.OrdinalIgnoreCase));
                        enRuleEl?.Element("CustomRule")?.SetAttributeValue("Library", $"$webresource:{newItemEnLib}");
                        itemUpdated.Add("enable_library");
                    }

                    var newItemEnFunc = RibbonXmlHelpers.GetJsonString(item, "enable_function");
                    if (!string.IsNullOrWhiteSpace(newItemEnFunc))
                    {
                        var enRuleEl = ribbonDoc.Root?.Element("RuleDefinitions")
                            ?.Element("EnableRules")
                            ?.Elements("EnableRule")
                            .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemEnRuleId, StringComparison.OrdinalIgnoreCase));
                        enRuleEl?.Element("CustomRule")?.SetAttributeValue("FunctionName", newItemEnFunc);
                        itemUpdated.Add("enable_function");
                    }

                    if (itemUpdated.Count > 0)
                        updatedFields.Add($"item[{itemLabel}]: {string.Join(", ", itemUpdated)}");
                }
            }

            if (updatedFields.Count == 0)
                return ("No fields to update.", "Provide at least one field to change.", null);

            return (null, null, $"update_flyout_static: '{flyoutId}' updated [{string.Join(", ", updatedFields)}]");
        }

        public (string error, string hint, string summary) ExecuteHideFlyoutItem(XDocument ribbonDoc, string entityName, JsonElement op)
        {
            var (flyoutId, itemBtnId, itemCmdId, err) = ResolveFlyoutItemIds(ribbonDoc, entityName, op);
            if (err != null) return (err, null, null);

            var commandDefEl = ribbonDoc.Root
                ?.Element("CommandDefinitions")
                ?.Elements("CommandDefinition")
                .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemCmdId, StringComparison.OrdinalIgnoreCase));

            if (commandDefEl == null)
                return ($"CommandDefinition '{itemCmdId}' not found for item '{itemBtnId}'.", null, null);

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

            return (null, null, $"hide_flyout_item: '{itemBtnId}' → AlwaysDisabled EnableRule injected into '{itemCmdId}'");
        }

        public (string error, string hint, string summary) ExecuteShowFlyoutItem(XDocument ribbonDoc, string entityName, JsonElement op)
        {
            var (flyoutId, itemBtnId, itemCmdId, err) = ResolveFlyoutItemIds(ribbonDoc, entityName, op);
            if (err != null) return (err, null, null);

            var alwaysDisabledRuleId = $"devkit.{entityName}.AlwaysDisabled.EnableRule";

            var commandDefEl = ribbonDoc.Root
                ?.Element("CommandDefinitions")
                ?.Elements("CommandDefinition")
                .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemCmdId, StringComparison.OrdinalIgnoreCase));

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

            return (null, null, $"show_flyout_item: '{itemBtnId}' → AlwaysDisabled EnableRule removed from '{itemCmdId}'");
        }

        private (string flyoutId, string itemBtnId, string itemCmdId, string error) ResolveFlyoutItemIds(
            XDocument ribbonDoc, string entityName, JsonElement op)
        {
            var flyoutIdParam = RibbonXmlHelpers.GetJsonString(op, "flyout_id");
            var flyoutLabel = RibbonXmlHelpers.GetJsonString(op, "flyout_label");
            var itemLabel = RibbonXmlHelpers.GetJsonString(op, "item_label");

            if (string.IsNullOrWhiteSpace(itemLabel))
                return (null, null, null, "'item_label' is required to identify the flyout item.");

            string flyoutId;
            XElement flyoutEl2;
            if (!string.IsNullOrWhiteSpace(flyoutIdParam))
            {
                flyoutId = flyoutIdParam.Trim();
                flyoutEl2 = ribbonDoc.Root?.Element("CustomActions")?.Descendants("FlyoutAnchor")
                    .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, flyoutId, StringComparison.OrdinalIgnoreCase));
            }
            else if (!string.IsNullOrWhiteSpace(flyoutLabel))
            {
                var slug = RibbonXmlHelpers.GenerateSlug(flyoutLabel);
                flyoutEl2 = ribbonDoc.Root?.Element("CustomActions")?.Descendants("FlyoutAnchor")
                    .FirstOrDefault(e =>
                        string.Equals(e.Attribute("LabelText")?.Value, flyoutLabel, StringComparison.OrdinalIgnoreCase) ||
                        (e.Attribute("Id")?.Value?.Contains($".{slug}.", StringComparison.OrdinalIgnoreCase) == true &&
                         e.Attribute("Id")?.Value?.EndsWith(".FlyoutAnchor", StringComparison.OrdinalIgnoreCase) == true));
                flyoutId = flyoutEl2?.Attribute("Id")?.Value ?? $"devkit.{entityName}.{RibbonXmlHelpers.GenerateSlug(flyoutLabel)}.FlyoutAnchor";
            }
            else
                return (null, null, null, "'flyout_id' or 'flyout_label' is required to identify the flyout.");

            if (flyoutEl2 == null)
                return (null, null, null, $"FlyoutAnchor '{flyoutId}' not found.");

            var flyoutPrefix2 = flyoutId;
            var prefixStrip2 = $"devkit.{entityName}.";
            if (flyoutPrefix2.StartsWith(prefixStrip2, StringComparison.OrdinalIgnoreCase))
                flyoutPrefix2 = flyoutPrefix2.Substring(prefixStrip2.Length);
            if (flyoutPrefix2.EndsWith(".FlyoutAnchor", StringComparison.OrdinalIgnoreCase))
                flyoutPrefix2 = flyoutPrefix2.Substring(0, flyoutPrefix2.Length - ".FlyoutAnchor".Length);
            var itemSlug = RibbonXmlHelpers.GenerateSlug(itemLabel);
            var itemBtnId = $"devkit.{entityName}.{flyoutPrefix2}.{itemSlug}.Button";
            var itemCmdId = $"devkit.{entityName}.{flyoutPrefix2}.{itemSlug}.Command";

            var btnEl = flyoutEl2.Descendants("Button")
                .FirstOrDefault(e => string.Equals(e.Attribute("Id")?.Value, itemBtnId, StringComparison.OrdinalIgnoreCase));

            if (btnEl == null)
            {
                var existing = string.Join(", ", flyoutEl2.Descendants("Button").Select(b => b.Attribute("Id")?.Value ?? "?"));
                return (null, null, null, $"Item button '{itemBtnId}' not found in flyout.\nExisting items: {existing}");
            }

            return (flyoutId, itemBtnId, itemCmdId, null);
        }
    }
}
