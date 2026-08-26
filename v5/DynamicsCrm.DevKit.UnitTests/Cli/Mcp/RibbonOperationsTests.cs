using DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class RibbonOperationsTests
{
    private readonly FakeRibbonValidation _validation = new();

    [TestMethod]
    public void ExecuteAddButton_Form_BuildsButtonCommandRulesAndLabels()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonButtonOperations(_validation, 1033);

        var (error, _, summary) = ops.ExecuteAddButton(doc, "account", Json("""
{
  "surface": "form",
  "label": "Open Dialog",
  "library": "devkit_/account.js",
  "function": "Account.openDialog",
  "enable_library": "devkit_/account.enable.js",
  "enable_function": "Account.canOpen",
  "modern_image": "devkit_/icons/open.svg",
  "tooltip_title": "Open",
  "tooltip_description": "Open dialog",
  "sequence": 42
}
"""));

        Assert.IsNull(error);
        StringAssert.Contains(summary!, "add_button");
        AssertElement(doc, "Button", "devkit.account.OpenDialog.Form.Button");
        AssertElement(doc, "CommandDefinition", "devkit.account.OpenDialog.Form.Command");
        AssertElement(doc, "EnableRule", "devkit.account.OpenDialog.Form.EnableRule");
        StringAssert.Contains(doc.ToString(), "PrimaryControl");
        StringAssert.Contains(doc.ToString(), "$webresource:devkit_/icons/open.svg");
        Assert.AreEqual(1, doc.Descendants("CustomAction").Count());
    }

    [TestMethod]
    public void ExecuteAddButton_SubGrid_AddsSelectionCountRuleAndGridParameters()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonButtonOperations(_validation, 1033);

        var (error, _, _) = ops.ExecuteAddButton(doc, "account", Json("""
{
  "surface": "sub_grid",
  "label": "Bulk Approve",
  "library": "devkit_/bulk.js",
  "function": "Bulk.approve",
  "enable_library": "devkit_/bulk.enable.js",
  "enable_function": "Bulk.canApprove",
  "selection_min": 1
}
"""));

        Assert.IsNull(error);
        AssertSelectionCountRule(doc, "devkit.account.BulkApprove.SubGrid.EnableRuleSelectCount", "1", null);
        AssertCommandEnableRuleOrder(
            doc,
            "devkit.account.BulkApprove.SubGrid.Command",
            "devkit.account.BulkApprove.SubGrid.EnableRuleSelectCount",
            "devkit.account.BulkApprove.SubGrid.EnableRule");
        StringAssert.Contains(doc.ToString(), "SelectedControlSelectedItemIds");
    }

    [TestMethod]
    public void ExecuteAddButton_MainGrid_AddsSelectionCountRuleBeforeJavascriptEnableRule()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonButtonOperations(_validation, 1033);

        var (error, _, _) = ops.ExecuteAddButton(doc, "ab_shipment", Json("""
{
  "surface": "main_grid",
  "label": "Check Invent Sum",
  "library": "devkit_/shipment.js",
  "function": "Shipment.checkInventSum",
  "enable_library": "devkit_/shipment.enable.js",
  "enable_function": "Shipment.canCheckInventSum",
  "selection_min": 1,
  "selection_max": 1
}
"""));

        Assert.IsNull(error);
        AssertSelectionCountRule(doc, "devkit.ab_shipment.CheckInventSum.HomepageGrid.EnableRuleSelectCount", "1", "1");
        AssertCommandEnableRuleOrder(
            doc,
            "devkit.ab_shipment.CheckInventSum.HomepageGrid.Command",
            "devkit.ab_shipment.CheckInventSum.HomepageGrid.EnableRuleSelectCount",
            "devkit.ab_shipment.CheckInventSum.HomepageGrid.EnableRule");
    }

    [TestMethod]
    public void ExecuteAddButton_MainGrid_DefaultDoesNotAddSelectionCountRule()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonButtonOperations(_validation, 1033);

        var (setupError, _, _) = ops.ExecuteAddButton(doc, "account", Json("""
{
  "surface": "main_grid",
  "label": "Open Dialog",
  "library": "devkit_/account.js",
  "function": "Account.open",
  "enable_library": "devkit_/account.enable.js",
  "enable_function": "Account.canOpen",
  "selection_min": 1
}
"""));
        Assert.IsNull(setupError);
        AssertSelectionCountRule(doc, "devkit.account.OpenDialog.HomepageGrid.EnableRuleSelectCount", "1", null);

        var (error, _, _) = ops.ExecuteAddButton(doc, "account", AddButtonJson("main_grid", "Open Dialog"));

        Assert.IsNull(error);
        AssertNoRuleDefinition(doc, "devkit.account.OpenDialog.HomepageGrid.EnableRuleSelectCount");
        var enableRules = GetElement(doc, "CommandDefinition", "devkit.account.OpenDialog.HomepageGrid.Command")
            .Element("EnableRules")!
            .Elements("EnableRule")
            .ToList();
        Assert.AreEqual(1, enableRules.Count);
        Assert.AreEqual("devkit.account.OpenDialog.HomepageGrid.EnableRule", enableRules[0].Attribute("Id")?.Value);
    }

    [TestMethod]
    public void ExecuteUpdateButton_CustomButton_UpdatesCommandAndVisualFields()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonButtonOperations(_validation, 1033);
        ops.ExecuteAddButton(doc, "account", AddButtonJson("form", "Open Dialog"));

        var buttonId = "devkit.account.OpenDialog.Form.Button";
        var (error, _, summary) = ops.ExecuteUpdateButton(doc, "account", Json($$"""
{
  "button_id": "{{buttonId}}",
  "label": "Open Now",
  "library": "devkit_/account.v2.js",
  "function": "Account.openNow",
  "enable_library": "devkit_/account.enable.v2.js",
  "enable_function": "Account.canOpenNow",
  "modern_image": "devkit_/icons/open-now.svg",
  "tooltip_title": "Open now",
  "tooltip_description": "Open immediately",
  "sequence": 7
}
"""));

        Assert.IsNull(error);
        StringAssert.Contains(summary!, "update_button");
        var button = GetElement(doc, "Button", buttonId);
        Assert.AreEqual("7", button.Attribute("Sequence")?.Value);
        StringAssert.Contains(doc.ToString(), "Account.openNow");
        StringAssert.Contains(doc.ToString(), "$webresource:devkit_/account.enable.v2.js");
        StringAssert.Contains(doc.ToString(), "Open Now");
    }

    [TestMethod]
    public void ExecuteHideShowButton_CustomButton_TogglesAlwaysDisabledRule()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonButtonOperations(_validation, 1033);
        ops.ExecuteAddButton(doc, "account", AddButtonJson("form", "Open Dialog"));

        var buttonId = "devkit.account.OpenDialog.Form.Button";
        var (hideError, _, _) = ops.ExecuteHideButton(doc, "account", Json($$"""{ "button_id": "{{buttonId}}" }"""));

        Assert.IsNull(hideError);
        AssertElement(doc, "EnableRule", "devkit.account.AlwaysDisabled.EnableRule");

        var (showError, _, _) = ops.ExecuteShowButton(doc, "account", Json($$"""{ "button_id": "{{buttonId}}" }"""));

        Assert.IsNull(showError);
        Assert.IsFalse(doc.Descendants("EnableRule").Any(e => e.Attribute("Id")?.Value == "devkit.account.AlwaysDisabled.EnableRule"));
    }

    [TestMethod]
    public void ExecuteHideShowButton_OobButton_TogglesHideCustomAction()
    {
        var doc = EmptyRibbon();
        var validation = new FakeRibbonValidation { TreatAsOob = true };
        var ops = new RibbonButtonOperations(validation, 1033);

        var (hideError, _, _) = ops.ExecuteHideButton(doc, "account", Json("""{ "button_id": "Mscrm.Form.account.Activate" }"""));

        Assert.IsNull(hideError);
        Assert.AreEqual("Mscrm.Form.account.Activate", doc.Descendants("HideCustomAction").Single().Attribute("Location")?.Value);

        var (showError, _, _) = ops.ExecuteShowButton(doc, "account", Json("""{ "button_id": "Mscrm.Form.account.Activate" }"""));

        Assert.IsNull(showError);
        Assert.AreEqual(0, doc.Descendants("HideCustomAction").Count());
    }

    [TestMethod]
    public void ExecuteAddSplitButton_MainGrid_BuildsSplitButtonItemsCommandsAndRules()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonFlyoutOperations(_validation, 1033);

        var (error, _, summary) = ops.ExecuteAddSplitButton(doc, "account", Json("""
{
  "surface": "main_grid",
  "label": "Actions",
  "library": "devkit_/actions.js",
  "function": "Actions.run",
  "enable_library": "devkit_/actions.enable.js",
  "enable_function": "Actions.canRun",
  "items": [
    { "label": "Print", "library": "devkit_/print.js", "function": "Print.run", "enable_library": "devkit_/print.enable.js", "enable_function": "Print.canRun", "sequence": 20 },
    { "label": "Email", "library": "devkit_/email.js", "function": "Email.run", "enable_library": "devkit_/email.enable.js", "enable_function": "Email.canRun" }
  ]
}
"""));

        Assert.IsNull(error);
        StringAssert.Contains(summary!, "add_split_button");
        AssertElement(doc, "SplitButton", "devkit.account.Actions.HomepageGrid.SplitButton");
        AssertElement(doc, "Button", "devkit.account.Actions.HomepageGrid.Print.Button");
        AssertElement(doc, "Button", "devkit.account.Actions.HomepageGrid.Email.Button");
        AssertElement(doc, "CommandDefinition", "devkit.account.Actions.HomepageGrid.Print.Command");
        AssertElement(doc, "EnableRule", "devkit.account.Actions.HomepageGrid.Email.EnableRule");
        StringAssert.Contains(doc.ToString(), "SelectedControlSelectedItemIds");
    }

    [TestMethod]
    public void ExecuteUpdateSplitButton_UpdatesMainAndItemFields()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonFlyoutOperations(_validation, 1033);
        ops.ExecuteAddSplitButton(doc, "account", AddSplitJson("form", "Actions"));

        var splitId = "devkit.account.Actions.Form.SplitButton";
        var (error, _, summary) = ops.ExecuteUpdateSplitButton(doc, "account", Json($$"""
{
  "split_button_id": "{{splitId}}",
  "label": "Actions Updated",
  "library": "devkit_/actions.v2.js",
  "function": "Actions.runV2",
  "enable_library": "devkit_/actions.enable.v2.js",
  "enable_function": "Actions.canRunV2",
  "modern_image": "devkit_/icons/actions.svg",
  "sequence": 55,
  "items": [
    { "item_label": "Print", "label": "Print Now", "library": "devkit_/print.v2.js", "function": "Print.runV2", "enable_library": "devkit_/print.enable.v2.js", "enable_function": "Print.canRunV2", "sequence": 5 }
  ]
}
"""));

        Assert.IsNull(error);
        StringAssert.Contains(summary!, "update_split_button");
        Assert.AreEqual("55", GetElement(doc, "SplitButton", splitId).Attribute("Sequence")?.Value);
        StringAssert.Contains(doc.ToString(), "Actions.runV2");
        StringAssert.Contains(doc.ToString(), "Print.runV2");
        StringAssert.Contains(doc.ToString(), "Print Now");
    }

    [TestMethod]
    public void ExecuteAddFlyoutStatic_SubGrid_BuildsFlyoutAnchorItemsCommandsAndRules()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonFlyoutOperations(_validation, 1033);

        var (error, _, summary) = ops.ExecuteAddFlyoutStatic(doc, "account", AddFlyoutJson("sub_grid", "More Actions"));

        Assert.IsNull(error);
        StringAssert.Contains(summary!, "add_flyout_static");
        AssertElement(doc, "FlyoutAnchor", "devkit.account.MoreActions.SubGrid.FlyoutAnchor");
        AssertElement(doc, "Button", "devkit.account.MoreActions.SubGrid.Print.Button");
        AssertElement(doc, "Button", "devkit.account.MoreActions.SubGrid.Email.Button");
        StringAssert.Contains(doc.ToString(), "SelectedControlSelectedItemIds");
    }

    [TestMethod]
    public void ExecuteUpdateFlyoutStatic_UpdatesFlyoutAndItemFields()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonFlyoutOperations(_validation, 1033);
        ops.ExecuteAddFlyoutStatic(doc, "account", AddFlyoutJson("form", "More Actions"));

        var flyoutId = "devkit.account.MoreActions.Form.FlyoutAnchor";
        var (error, _, summary) = ops.ExecuteUpdateFlyoutStatic(doc, "account", Json($$"""
{
  "flyout_id": "{{flyoutId}}",
  "label": "More Updated",
  "tooltip_title": "Updated",
  "tooltip_description": "Updated description",
  "modern_image": "devkit_/icons/more.svg",
  "sequence": 33,
  "items": [
    { "item_label": "Print", "label": "Print Updated", "library": "devkit_/print.v2.js", "function": "Print.runV2", "enable_library": "devkit_/print.enable.v2.js", "enable_function": "Print.canRunV2", "sequence": 11 }
  ]
}
"""));

        Assert.IsNull(error);
        StringAssert.Contains(summary!, "update_flyout_static");
        Assert.AreEqual("33", GetElement(doc, "FlyoutAnchor", flyoutId).Attribute("Sequence")?.Value);
        StringAssert.Contains(doc.ToString(), "Print Updated");
        StringAssert.Contains(doc.ToString(), "Print.runV2");
    }

    [TestMethod]
    public void ExecuteHideShowFlyoutItem_TogglesAlwaysDisabledRule()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonFlyoutOperations(_validation, 1033);
        ops.ExecuteAddFlyoutStatic(doc, "account", AddFlyoutJson("form", "More Actions"));

        var identifyPrint = Json("""{ "flyout_label": "More Actions", "item_label": "Print" }""");
        var (hideError, _, _) = ops.ExecuteHideFlyoutItem(doc, "account", identifyPrint);

        Assert.IsNull(hideError);
        AssertElement(doc, "EnableRule", "devkit.account.AlwaysDisabled.EnableRule");

        var (showError, _, _) = ops.ExecuteShowFlyoutItem(doc, "account", identifyPrint);

        Assert.IsNull(showError);
        Assert.IsFalse(doc.Descendants("EnableRule").Any(e => e.Attribute("Id")?.Value == "devkit.account.AlwaysDisabled.EnableRule"));
    }

    [TestMethod]
    public void ExecuteAddSplitButton_DuplicateItemSlug_ReturnsValidationError()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonFlyoutOperations(_validation, 1033);

        var (error, _, summary) = ops.ExecuteAddSplitButton(doc, "account", Json("""
{
  "surface": "form",
  "label": "Actions",
  "library": "devkit_/actions.js",
  "function": "Actions.run",
  "enable_library": "devkit_/actions.enable.js",
  "enable_function": "Actions.canRun",
  "items": [
    { "label": "Print", "library": "devkit_/print.js", "function": "Print.run", "enable_library": "devkit_/print.enable.js", "enable_function": "Print.canRun" },
    { "label": "Print", "library": "devkit_/print2.js", "function": "Print2.run", "enable_library": "devkit_/print2.enable.js", "enable_function": "Print2.canRun" }
  ]
}
"""));

        Assert.IsNotNull(error);
        Assert.IsNull(summary);
        StringAssert.Contains(error!, "Duplicate item slug");
    }

    private static XDocument EmptyRibbon() => XDocument.Parse(RibbonXmlHelpers.GetEmptyRibbonDiffXml());

    private static JsonElement AddButtonJson(string surface, string label) => Json($$"""
{
  "surface": "{{surface}}",
  "label": "{{label}}",
  "library": "devkit_/account.js",
  "function": "Account.open",
  "enable_library": "devkit_/account.enable.js",
  "enable_function": "Account.canOpen"
}
""");

    private static JsonElement AddSplitJson(string surface, string label) => Json($$"""
{
  "surface": "{{surface}}",
  "label": "{{label}}",
  "library": "devkit_/actions.js",
  "function": "Actions.run",
  "enable_library": "devkit_/actions.enable.js",
  "enable_function": "Actions.canRun",
  "items": [
    { "label": "Print", "library": "devkit_/print.js", "function": "Print.run", "enable_library": "devkit_/print.enable.js", "enable_function": "Print.canRun" }
  ]
}
""");

    private static JsonElement AddFlyoutJson(string surface, string label) => Json($$"""
{
  "surface": "{{surface}}",
  "label": "{{label}}",
  "library": "devkit_/ignored.js",
  "function": "Ignored.run",
  "enable_library": "devkit_/ignored.enable.js",
  "enable_function": "Ignored.canRun",
  "items": [
    { "label": "Print", "library": "devkit_/print.js", "function": "Print.run", "enable_library": "devkit_/print.enable.js", "enable_function": "Print.canRun" },
    { "label": "Email", "library": "devkit_/email.js", "function": "Email.run", "enable_library": "devkit_/email.enable.js", "enable_function": "Email.canRun" }
  ]
}
""");

    private static JsonElement Json(string json)
    {
        using var doc = JsonDocument.Parse(json);
        return doc.RootElement.Clone();
    }

    private static XElement GetElement(XDocument doc, string elementName, string id)
    {
        return doc.Descendants(elementName)
            .Single(e => string.Equals(e.Attribute("Id")?.Value, id, StringComparison.OrdinalIgnoreCase));
    }

    private static void AssertElement(XDocument doc, string elementName, string id)
    {
        Assert.IsTrue(doc.Descendants(elementName).Any(e =>
            string.Equals(e.Attribute("Id")?.Value, id, StringComparison.OrdinalIgnoreCase)), $"{elementName} '{id}' not found.");
    }

    private static void AssertSelectionCountRule(XDocument doc, string ruleId, string? min, string? max)
    {
        var rule = GetRuleDefinition(doc, ruleId);
        var countRule = rule.Element("SelectionCountRule");

        Assert.IsNotNull(countRule);
        Assert.AreEqual(min, countRule.Attribute("Minimum")?.Value);
        Assert.AreEqual(max, countRule.Attribute("Maximum")?.Value);
    }

    private static void AssertCommandEnableRuleOrder(XDocument doc, string commandId, string selectRuleId, string jsRuleId)
    {
        var enableRules = GetElement(doc, "CommandDefinition", commandId)
            .Element("EnableRules")!
            .Elements("EnableRule")
            .ToList();

        Assert.AreEqual(2, enableRules.Count);
        Assert.AreEqual(selectRuleId, enableRules[0].Attribute("Id")?.Value);
        Assert.AreEqual("1", enableRules[0].Attribute("Order")?.Value);
        Assert.AreEqual(jsRuleId, enableRules[1].Attribute("Id")?.Value);
        Assert.AreEqual("2", enableRules[1].Attribute("Order")?.Value);
    }

    private static XElement GetRuleDefinition(XDocument doc, string ruleId)
    {
        return doc.Root!
            .Element("RuleDefinitions")!
            .Element("EnableRules")!
            .Elements("EnableRule")
            .Single(e => string.Equals(e.Attribute("Id")?.Value, ruleId, StringComparison.OrdinalIgnoreCase));
    }

    private static void AssertNoRuleDefinition(XDocument doc, string ruleId)
    {
        Assert.IsFalse(doc.Root!
            .Element("RuleDefinitions")!
            .Element("EnableRules")!
            .Elements("EnableRule")
            .Any(e => string.Equals(e.Attribute("Id")?.Value, ruleId, StringComparison.OrdinalIgnoreCase)));
    }

    private sealed class FakeRibbonValidation : IRibbonValidation
    {
        public bool TreatAsOob { get; set; }

        public string ValidateWebResourceExists(string webResourceName)
        {
            return webResourceName?.Contains("missing", StringComparison.OrdinalIgnoreCase) == true
                ? $"Error: Web resource '{webResourceName}' not found in Dataverse."
                : null!;
        }

        public bool IsOobButton(string entityName, string buttonId) => TreatAsOob;
    }
}
