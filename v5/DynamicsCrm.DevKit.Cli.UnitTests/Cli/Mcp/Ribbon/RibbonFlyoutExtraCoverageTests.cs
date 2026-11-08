using DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Ribbon;

/// <summary>
/// Extra coverage for <see cref="RibbonFlyoutOperations"/>: invalid surface,
/// modern-image validation failures and duplicate item slugs on
/// add_split_button / add_flyout_static, and the missing-CommandDefinition
/// branch of hide_flyout_item.
/// </summary>
[TestClass]
public sealed class RibbonFlyoutExtraCoverageTests
{
    private readonly FakeRibbonValidation _validation = new();

    private static XDocument EmptyRibbon() => XDocument.Parse(RibbonXmlHelpers.GetEmptyRibbonDiffXml());

    private static JsonElement Json(string json) =>
        JsonSerializer.Deserialize<JsonElement>(json);

    private static System.Text.Json.JsonElement SplitButtonJson(string surface, string extraItemFields = "", string extraOpFields = "") => Json($$"""
{
  "action": "add_split_button",
  "surface": "{{surface}}",
  "label": "Actions",
  "library": "devkit_/actions.js",
  "function": "Actions.run",
  "enable_library": "devkit_/actions.enable.js",
  "enable_function": "Actions.canRun"{{extraOpFields}},
  "items": [
    { "label": "Print", "library": "devkit_/print.js", "function": "Print.run", "enable_library": "devkit_/print.enable.js", "enable_function": "Print.canRun"{{extraItemFields}} }
  ]
}
""");

    [TestMethod]
    public void ExecuteAddSplitButton_InvalidSurface_ReturnsError()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonFlyoutOperations(_validation, 1033);

        var json = JsonSerializer.Deserialize<JsonElement>($$"""
{
  "surface": "sidebar",
  "label": "Actions",
  "library": "devkit_/actions.js",
  "function": "Actions.run",
  "enable_library": "devkit_/actions.enable.js",
  "enable_function": "Actions.canRun",
  "items": [ { "label": "Print", "library": "devkit_/print.js", "function": "Print.run", "enable_library": "devkit_/print.enable.js", "enable_function": "Print.canRun" } ]
}
""");

        var (error, hint, _) = ops.ExecuteAddSplitButton(doc, "account", json);

        Assert.IsNotNull(error);
        StringAssert.Contains(error, "Invalid surface 'sidebar'");
        StringAssert.Contains(hint!, "Valid: form, main_grid, sub_grid");
    }

    [TestMethod]
    public void ExecuteAddSplitButton_ItemModernImageMissing_ReturnsWebResourceError()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonFlyoutOperations(_validation, 1033);

        var (error, hint, _) = ops.ExecuteAddSplitButton(doc, "account",
            SplitButtonJson("form", extraItemFields: ", \"modern_image\": \"devkit_/icons/missing.svg\""));

        Assert.IsNotNull(error);
        StringAssert.Contains(error, "devkit_/icons/missing.svg");
        StringAssert.Contains(hint!, "image web resources");
    }

    [TestMethod]
    public void ExecuteAddSplitButton_OpModernImageMissing_ReturnsWebResourceError()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonFlyoutOperations(_validation, 1033);

        var (error, hint, _) = ops.ExecuteAddSplitButton(doc, "account",
            SplitButtonJson("form", extraOpFields: ", \"modern_image\": \"devkit_/icons/missing.svg\""));

        Assert.IsNotNull(error);
        StringAssert.Contains(error, "devkit_/icons/missing.svg");
    }

    [TestMethod]
    public void ExecuteAddSplitButton_ItemModernImagePresent_BuildsSplitButton()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonFlyoutOperations(_validation, 1033);

        var (error, _, summary) = ops.ExecuteAddSplitButton(doc, "account",
            SplitButtonJson("form", extraItemFields: ", \"modern_image\": \"devkit_/icons/print.svg\"",
                extraOpFields: ", \"modern_image\": \"devkit_/icons/actions.svg\", \"tooltip_title\": \"Do it\", \"tooltip_description\": \"Run actions\""));

        Assert.IsNull(error);
        StringAssert.Contains(summary!, "add_split_button");
        Assert.AreEqual("Do it", doc.Root!.Descendants("LocLabel")
            .First(l => l.Attribute("Id")?.Value?.EndsWith(".ToolTipTitle") == true)
            .Element("Titles")!.Element("Title")!.Attribute("description")?.Value);
    }

    [TestMethod]
    public void ExecuteAddFlyoutStatic_DuplicateItemSlug_ReturnsError()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonFlyoutOperations(_validation, 1033);

        var json = Json("""
{
  "surface": "form",
  "label": "More",
  "library": "devkit_/ignored.js",
  "function": "Ignored.run",
  "enable_library": "devkit_/ignored.enable.js",
  "enable_function": "Ignored.canRun",
  "items": [
    { "label": "Same Label", "library": "devkit_/a.js", "function": "A.run", "enable_library": "devkit_/a.enable.js", "enable_function": "A.can" },
    { "label": "Same Label", "library": "devkit_/b.js", "function": "B.run", "enable_library": "devkit_/b.enable.js", "enable_function": "B.can" }
  ]
}
""");

        var (error, hint, _) = ops.ExecuteAddFlyoutStatic(doc, "account", json);

        Assert.IsNotNull(error);
        StringAssert.Contains(error, "Duplicate item slug");
        StringAssert.Contains(hint!, "Use different labels");
    }

    [TestMethod]
    public void ExecuteAddFlyoutStatic_WithTooltipAndImage_BuildsFlyout()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonFlyoutOperations(_validation, 1033);

        var json = Json("""
{
  "surface": "form",
  "label": "More",
  "library": "devkit_/ignored.js",
  "function": "Ignored.run",
  "enable_library": "devkit_/ignored.enable.js",
  "enable_function": "Ignored.canRun",
  "modern_image": "devkit_/icons/more.svg",
  "tooltip_title": "More actions",
  "tooltip_description": "All the actions",
  "sequence": 60,
  "items": [
    { "label": "Print", "library": "devkit_/print.js", "function": "Print.run", "enable_library": "devkit_/print.enable.js", "enable_function": "Print.canRun" }
  ]
}
""");

        var (error, _, summary) = ops.ExecuteAddFlyoutStatic(doc, "account", json);

        Assert.IsNull(error);
        StringAssert.Contains(summary!, "add_flyout_static");
        Assert.IsNotNull(doc.Descendants("FlyoutAnchor")
            .FirstOrDefault(e => e.Attribute("Id")?.Value == "devkit.account.More.Form.FlyoutAnchor"));
        Assert.AreEqual("60", doc.Descendants("FlyoutAnchor")
            .First(e => e.Attribute("Id")?.Value == "devkit.account.More.Form.FlyoutAnchor")
            .Attribute("Sequence")?.Value);
    }

    [TestMethod]
    public void ExecuteHideFlyoutItem_MissingCommandDefinition_ReturnsError()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonFlyoutOperations(_validation, 1033);

        var (addError, _, _) = ops.ExecuteAddFlyoutStatic(doc, "account", AddFlyoutStaticJson());
        Assert.IsNull(addError);

        // Remove the item CommandDefinition so hide_flyout_item cannot resolve it.
        doc.Root!.Element("CommandDefinitions")!
            .Elements("CommandDefinition")
            .Where(e => e.Attribute("Id")?.Value == "devkit.account.More.Form.Print.Command")
            .ToList()
            .ForEach(e => e.Remove());

        var (error, hint, _) = ops.ExecuteHideFlyoutItem(doc, "account", Json("""
{ "flyout_label": "More", "item_label": "Print" }
"""));

        Assert.IsNotNull(error);
        StringAssert.Contains(error, "CommandDefinition 'devkit.account.More.Form.Print.Command' not found for item");
        StringAssert.Contains(hint!, "manage_ribbon(action='buttons')");
    }

    [TestMethod]
    public void ExecuteHideFlyoutItem_HidesThenShowRemovesRule()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonFlyoutOperations(_validation, 1033);
        var (addError, _, _) = ops.ExecuteAddFlyoutStatic(doc, "account", AddFlyoutStaticJson());
        Assert.IsNull(addError);

        var (hideError, _, hideSummary) = ops.ExecuteHideFlyoutItem(doc, "account", Json("""
{ "flyout_label": "More", "item_label": "Print" }
"""));
        Assert.IsNull(hideError);
        StringAssert.Contains(hideSummary!, "hide_flyout_item");
        Assert.IsTrue(doc.Root!.Descendants("CommandDefinition")
            .Any(cd => cd.Attribute("Id")?.Value == "devkit.account.More.Form.Print.Command"
                       && cd.Element("EnableRules")!.Elements("EnableRule")
                           .Any(er => er.Attribute("Id")?.Value == "devkit.account.AlwaysDisabled.EnableRule")));

        var (showError, _, showSummary) = ops.ExecuteShowFlyoutItem(doc, "account", Json("""
{ "flyout_label": "More", "item_label": "Print" }
"""));
        Assert.IsNull(showError);
        StringAssert.Contains(showSummary!, "show_flyout_item");
        Assert.IsFalse(doc.Root!.Descendants("EnableRule")
            .Any(er => er.Attribute("Id")?.Value == "devkit.account.AlwaysDisabled.EnableRule"));
    }

    private static JsonElement AddFlyoutStaticJson() => Json("""
{
  "surface": "form",
  "label": "More",
  "library": "devkit_/ignored.js",
  "function": "Ignored.run",
  "enable_library": "devkit_/ignored.enable.js",
  "enable_function": "Ignored.canRun",
  "items": [
    { "label": "Print", "library": "devkit_/print.js", "function": "Print.run", "enable_library": "devkit_/print.enable.js", "enable_function": "Print.canRun" }
  ]
}
""");

    private sealed class FakeRibbonValidation : IRibbonValidation
    {
        public string ValidateWebResourceExists(string webResourceName) =>
            webResourceName?.Contains("missing", StringComparison.OrdinalIgnoreCase) == true
                ? $"Error: Web resource '{webResourceName}' not found in Dataverse."
                : null!;

        public bool IsOobButton(string entityName, string buttonId) => false;
    }
}
