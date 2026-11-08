using DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Ribbon;

/// <summary>
/// Pins the ribbon flyout/split-button success shape and documents the
/// remaining uncovered branches of <see cref="RibbonFlyoutOperations"/>.
///
/// NOTE (dead code — not coverable): ExecuteAddSplitButton and
/// ExecuteAddFlyoutStatic declare `string selectionEnableRuleId = null;`
/// and never assign it, so every `selectionEnableRuleId != null` branch
/// (split-button: the removal guard ~139, the EnableRules ~245 / ~275
/// additions and the SelectionCountRule block ~317-321; flyout: the
/// removal guard ~696, the EnableRules ~801 / ~826 additions and the
/// SelectionCountRule block ~859-863) is unreachable with the current
/// product code. No test can execute those lines without a product change.
/// </summary>
[TestClass]
public sealed class RibbonFlyoutDeadBranchNoteTests
{
    private readonly FakeRibbonValidation _validation = new();

    private static XDocument EmptyRibbon() => XDocument.Parse(RibbonXmlHelpers.GetEmptyRibbonDiffXml());

    private static JsonElement Json(string json) => JsonSerializer.Deserialize<JsonElement>(json);

    [TestMethod]
    public void AddSplitButton_DoesNotCreateSelectionCountRule()
    {
        // selectionEnableRuleId is always null, so the SelectionCountRule
        // block (and the extra EnableRule entries) never materialize.
        var doc = EmptyRibbon();
        var ops = new RibbonFlyoutOperations(_validation, 1033);

        var (error, _, summary) = ops.ExecuteAddSplitButton(doc, "account", SplitButtonJson());

        Assert.IsNull(error);
        StringAssert.Contains(summary!, "add_split_button");
        Assert.IsFalse(doc.Root!.Descendants("SelectionCountRule").Any(),
            "selectionEnableRuleId is always null — no SelectionCountRule is emitted.");
    }

    [TestMethod]
    public void AddFlyoutStatic_DoesNotCreateSelectionCountRule()
    {
        var doc = EmptyRibbon();
        var ops = new RibbonFlyoutOperations(_validation, 1033);

        var (error, _, summary) = ops.ExecuteAddFlyoutStatic(doc, "account", FlyoutJson());

        Assert.IsNull(error);
        StringAssert.Contains(summary!, "add_flyout_static");
        Assert.IsFalse(doc.Root!.Descendants("SelectionCountRule").Any());
        Assert.IsNotNull(doc.Descendants("FlyoutAnchor")
            .FirstOrDefault(e => e.Attribute("Id")?.Value == "devkit.account.More.Form.FlyoutAnchor"));
    }

    private static JsonElement SplitButtonJson() => Json("""
{
  "surface": "form",
  "label": "Actions",
  "library": "devkit_/actions.js",
  "function": "Actions.run",
  "enable_library": "devkit_/actions.enable.js",
  "enable_function": "Actions.canRun",
  "items": [
    { "label": "Print", "library": "devkit_/print.js", "function": "Print.run", "enable_library": "devkit_/print.enable.js", "enable_function": "Print.canRun" }
  ]
}
""");

    private static JsonElement FlyoutJson() => Json("""
{
  "surface": "form",
  "label": "More",
  "items": [
    { "label": "Print", "library": "devkit_/print.js", "function": "Print.run", "enable_library": "devkit_/print.enable.js", "enable_function": "Print.canRun" }
  ]
}
""");

    private sealed class FakeRibbonValidation : IRibbonValidation
    {
        public string ValidateWebResourceExists(string webResourceName) => null!;
        public bool IsOobButton(string entityName, string buttonId) => false;
    }
}
