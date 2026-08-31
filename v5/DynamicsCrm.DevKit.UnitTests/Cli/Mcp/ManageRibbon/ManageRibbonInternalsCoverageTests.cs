using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Xml.Linq;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageRibbon;

[TestClass]
public class ManageRibbonInternalsCoverageTests
{
    private static readonly Type ToolType = typeof(ManageRibbonTool);

    [TestMethod]
    public void RibbonXmlHelpers_CoversJsonSlugAndXmlBranches()
    {
        var json = JsonDocument.Parse("{\"text\":\"value\",\"true\":true,\"false\":false,\"number\":7,\"badNumber\":\"7\"}").RootElement;
        Assert.AreEqual("value", RibbonXmlHelpers.GetJsonString(json, "text"));
        Assert.IsNull(RibbonXmlHelpers.GetJsonString(json, "number"));
        Assert.IsTrue(RibbonXmlHelpers.GetJsonBool(json, "true", false));
        Assert.IsFalse(RibbonXmlHelpers.GetJsonBool(json, "false", true));
        Assert.IsTrue(RibbonXmlHelpers.GetJsonBool(json, "missing", true));
        Assert.AreEqual(7, RibbonXmlHelpers.GetJsonInt(json, "number", -1));
        Assert.AreEqual(-1, RibbonXmlHelpers.GetJsonInt(json, "missing", -1));

        Assert.AreEqual("Button", RibbonXmlHelpers.GenerateSlug(null));
        Assert.AreEqual("Button", RibbonXmlHelpers.GenerateSlug("___"));
        Assert.AreEqual("OpenDialogNow", RibbonXmlHelpers.GenerateSlug(" open-dialog_now "));
        Assert.AreEqual("a&amp;b&lt;c&gt;&quot;&apos;", RibbonXmlHelpers.EscapeXml("a&b<c>\"'"));
    }

    [TestMethod]
    public void RibbonXmlHelpers_CoversElementMutationAndPreservationBranches()
    {
        Assert.AreEqual(0, RibbonXmlHelpers.CountExistingButtons(new XDocument(new XElement("Root"))));

        var root = new XElement("Root");
        var created = RibbonXmlHelpers.GetOrCreateElement(root, "Items");
        Assert.AreSame(created, RibbonXmlHelpers.GetOrCreateElement(root, "Items"));
        RibbonXmlHelpers.UpsertLocLabel(root, 1033, "label.one", "First");
        RibbonXmlHelpers.UpsertLocLabel(root, 1033, "label.one", "Updated");
        Assert.AreEqual(1, root.Elements("LocLabels").Single().Elements("LocLabel").Count());
        StringAssert.Contains(root.ToString(), "Updated");

        var target = XDocument.Parse("<RibbonDiffXml><CustomActions><CustomAction Id='keep' /></CustomActions></RibbonDiffXml>");
        var existing = XDocument.Parse("""
<RibbonDiffXml>
  <CustomActions>
    <CustomAction Id="add-id" />
    <CustomAction HideActionId="add-hide" />
    <CustomAction Location="add-location" />
    <CustomAction />
  </CustomActions>
  <Templates><RibbonTemplates Id="old-template" /></Templates>
  <CommandDefinitions><CommandDefinition Id="old-command" /></CommandDefinitions>
  <RuleDefinitions>
    <TabDisplayRules><TabDisplayRule Id="old-tab" /></TabDisplayRules>
    <DisplayRules><DisplayRule Id="old-display" /></DisplayRules>
    <EnableRules><EnableRule Id="old-enable" /></EnableRules>
  </RuleDefinitions>
  <LocLabels><LocLabel Id="old-label" /></LocLabels>
</RibbonDiffXml>
""");
        RibbonXmlHelpers.PreserveMissingRibbonDiffElements(target, existing);
        StringAssert.Contains(target.ToString(), "add-id");
        StringAssert.Contains(target.ToString(), "add-hide");
        StringAssert.Contains(target.ToString(), "add-location");
        StringAssert.Contains(target.ToString(), "old-template");
        StringAssert.Contains(target.ToString(), "old-command");
        StringAssert.Contains(target.ToString(), "old-tab");
        StringAssert.Contains(target.ToString(), "old-display");
        StringAssert.Contains(target.ToString(), "old-enable");
        StringAssert.Contains(target.ToString(), "old-label");
        RibbonXmlHelpers.PreserveMissingRibbonDiffElements(null!, existing);

        var custom = XDocument.Parse("<RibbonDiffXml><CustomActions><CustomAction Id='one'><Button Id='inner' /></CustomAction><CustomAction Id='two' /></CustomActions><CommandDefinitions><CommandDefinition Id='b' /><CommandDefinition Id='a' /></CommandDefinitions></RibbonDiffXml>");
        RibbonXmlHelpers.RemoveCustomActionByInnerElementId(custom.Root, "inner");
        Assert.AreEqual(1, custom.Root!.Element("CustomActions")!.Elements("CustomAction").Count());
        RibbonXmlHelpers.RemoveById(custom.Root, "CustomActions", "CustomAction", "TWO");
        Assert.AreEqual(0, custom.Root.Element("CustomActions")!.Elements("CustomAction").Count());
        RibbonXmlHelpers.RemoveByIdInChild(custom.Root, "CommandDefinitions", "CommandDefinition", "missing");
        RibbonXmlHelpers.SortChildrenById(custom.Root.Element("CommandDefinitions"), "CommandDefinition");
        Assert.AreEqual("a", custom.Root.Element("CommandDefinitions")!.Elements("CommandDefinition").First().Attribute("Id")!.Value);
        RibbonXmlHelpers.SortChildrenById(null!, "CommandDefinition");
        RibbonXmlHelpers.RemoveById(null!, "CustomActions", "CustomAction", "x");
    }

    [TestMethod]
    public void RibbonXmlHelpers_BuildButtonElement_CoversOptionalAttributes()
    {
        var plain = RibbonXmlHelpers.BuildButtonElement("button", "command", "", 1, "", "");
        Assert.IsNull(plain.Attribute("ToolTipTitle"));
        Assert.IsNull(plain.Attribute("Image16by16"));

        var full = RibbonXmlHelpers.BuildButtonElement("button", "command", "Tip", 2, "icon.svg", "Description");
        Assert.AreEqual("$LocLabels:button.ToolTipTitle", full.Attribute("ToolTipTitle")!.Value);
        Assert.AreEqual("$webresource:icon.svg", full.Attribute("ModernImage")!.Value);
        Assert.AreEqual(2, RibbonXmlHelpers.CountExistingButtons(XDocument.Parse("<RibbonDiffXml><CustomActions><CustomAction /><CustomAction /></CustomActions></RibbonDiffXml>")));
    }

    [TestMethod]
    public void RibbonValidation_CoversFilterAndXmlValidationBranches()
    {
        Assert.AreEqual(RibbonLocationFilters.Form, RibbonValidation.DetectRibbonFilter("Mscrm.Form.account.Save"));
        Assert.AreEqual(RibbonLocationFilters.HomepageGrid, RibbonValidation.DetectRibbonFilter("Mscrm.HomepageGrid.account.Save"));
        Assert.AreEqual(RibbonLocationFilters.HomepageGrid, RibbonValidation.DetectRibbonFilter("custom.HomepageGrid.account.Save"));
        Assert.AreEqual(RibbonLocationFilters.SubGrid, RibbonValidation.DetectRibbonFilter("Mscrm.SubGrid.account.Save"));
        Assert.AreEqual(RibbonLocationFilters.SubGrid, RibbonValidation.DetectRibbonFilter("custom.SubGrid.account.Save"));
        Assert.AreEqual(RibbonLocationFilters.Form, RibbonValidation.DetectRibbonFilter("other.button"));

        var valid = RibbonValidation.ValidateRibbonXml(RibbonXmlHelpers.GetEmptyRibbonDiffXml());
        Assert.IsNotNull(valid.Errors);
        Assert.IsNotNull(valid.Warnings);
        var invalid = RibbonValidation.ValidateRibbonXml("<RibbonDiffXml>");
        Assert.IsTrue(invalid.Errors.Count > 0);
    }

    [TestMethod]
    public void ManageRibbon_EntryValidation_CoversActionBranches()
    {
        var tool = new ManageRibbonTool(null!, new McpDryRunOptions(), DryRunTestHelpers.BlockedContext());

        var missing = tool.manage_ribbon(null!, action: "  ").GetAwaiter().GetResult();
        Assert.IsTrue(missing.IsError);
        StringAssert.Contains(missing.GetText(), "action is required");

        var invalid = tool.manage_ribbon(null!, action: "unknown").GetAwaiter().GetResult();
        Assert.IsTrue(invalid.IsError);
        StringAssert.Contains(invalid.GetText(), "Invalid action");

        var buttons = tool.manage_ribbon(null!, action: "buttons").GetAwaiter().GetResult();
        StringAssert.Contains(buttons.GetText(), "entity_name is required");
        var detail = tool.manage_ribbon(null!, action: "detail").GetAwaiter().GetResult();
        StringAssert.Contains(detail.GetText(), "entity_name is required");
        var update = tool.manage_ribbon(null!, action: "update").GetAwaiter().GetResult();
        StringAssert.Contains(update.GetText(), "entity_name is required");
        var undo = tool.manage_ribbon(null!, action: "undo").GetAwaiter().GetResult();
        StringAssert.Contains(undo.GetText(), "entity_name is required");
    }

    [TestMethod]
    public void RibbonCore_PrivateFormattingHelpers_CoverAllBranches()
    {
        Assert.AreEqual("ExportSolution", InvokeStatic("MapAsyncOperationType", 202));
        Assert.AreEqual("ImportSolution", InvokeStatic("MapAsyncOperationType", 203));
        Assert.AreEqual("PublishAll", InvokeStatic("MapAsyncOperationType", 204));
        Assert.AreEqual("CustomAction", InvokeStatic("MapAsyncOperationType", 54));
        Assert.AreEqual("System(99)", InvokeStatic("MapAsyncOperationType", 99));

        foreach (var pair in new[] { (0, "WaitingForResources"), (10, "Waiting"), (20, "InProgress"), (21, "Pausing"), (22, "Canceling"), (30, "Succeeded"), (31, "Failed"), (32, "Canceled"), (99, "99") })
            Assert.AreEqual(pair.Item2, InvokeStatic("MapAsyncStatus", pair.Item1));

        Assert.AreEqual("Save", InvokeStatic("ResolveLabel", "$LocLabels:key", "button.id", new Dictionary<string, string> { ["key"] = "Save" }));
        Assert.AreEqual("id", InvokeStatic("ResolveLabel", "$LocLabels:Ribbon.Form.id", "button.id", null!));
        Assert.AreEqual("Save", InvokeStatic("ResolveLabel", "$Resources:x.Save", "button.id", null!));
        Assert.AreEqual("email", InvokeStatic("ResolveLabel", "{!EntityDisplayName:email}", "button.id", null!));
        Assert.AreEqual("email", InvokeStatic("ResolveLabel", "email", "button.id", null!));
        Assert.AreEqual("id", InvokeStatic("ResolveLabel", "", "button.id", null!));
        Assert.AreEqual("", InvokeStatic("ExtractReadableNameFromId", ""));

        var schedule = (List<int>)InvokeStatic("NewPublishPollScheduleSeconds");
        CollectionAssert.AreEqual(new List<int> { 30, 60, 120 }, schedule);
        var sb = new StringBuilder();
        InvokeStatic("AppendPublishWaitGuidance", sb);
        StringAssert.Contains(sb.ToString(), "third poll");
    }

    [TestMethod]
    public void RibbonCore_BuildFunctionSignatures_CoversClickEnableAndSurfaceInference()
    {
        var xml = """
<RibbonDiffXml>
  <CommandDefinitions>
    <CommandDefinition Id="Mscrm.Form.account.Command">
      <Actions><JavaScriptFunction Library="$webresource:a.js" FunctionName="Click.run"><CrmParameter Value="PrimaryControl" /><CrmParameter Value="" /></JavaScriptFunction><JavaScriptFunction /></Actions>
    </CommandDefinition>
    <CommandDefinition Id="custom.command"><Actions><JavaScriptFunction FunctionName="Custom.run"><CrmParameter Value="SelectedControl" /></JavaScriptFunction></Actions></CommandDefinition>
  </CommandDefinitions>
  <RuleDefinitions><EnableRules><EnableRule Id="Mscrm.SubGrid.account.Enable"><CustomRule Library="b.js" FunctionName="Can.run"><CrmParameter Value="SelectedControl" /></CustomRule></EnableRule><EnableRule Id="unknown"><CustomRule FunctionName="Unknown.run" /></EnableRule></EnableRules></RuleDefinitions>
</RibbonDiffXml>
""";
        var signatures = (List<RibbonFunctionSignature>)InvokeStatic("BuildFunctionSignatures", xml);
        Assert.AreEqual(4, signatures.Count);
        Assert.IsTrue(signatures.Any(s => s.Role == "click" && s.Surface == "form" && s.ParameterCount == 1));
        Assert.IsTrue(signatures.Any(s => s.Role == "click" && s.Surface == "grid"));
        Assert.IsTrue(signatures.Any(s => s.Role == "enable" && s.ExpectedReturn == "boolean" && s.Surface == "sub_grid"));
        Assert.IsTrue(signatures.Any(s => s.Role == "enable" && s.Surface == "unknown"));
        var sb = new StringBuilder();
        InvokeStatic("AppendFunctionSignatures", sb, signatures);
        StringAssert.Contains(sb.ToString(), "returns boolean");
        StringAssert.Contains(sb.ToString(), "1. PrimaryControl");
        InvokeStatic("AppendFunctionSignatures", new StringBuilder(), new List<RibbonFunctionSignature>());
    }

    [TestMethod]
    public void RibbonReadHelpers_ParseButtonsAndZipBranches()
    {
        var ribbonXml = """
<Ribbon><Group Id="Mscrm.Form.account.MainTab.Save"><Controls>
  <Button Id="b2" Sequence="bad" LabelText="$LocLabels:key" SolutionUniqueName="System" />
  <FlyoutAnchor Id="b1" Sequence="1" LabelText="Friendly" />
  <SplitButton Id="skip" Sequence="2" />
  <Control Id="ignored" />
</Controls></Group></Ribbon>
""";
        var parse = ToolType.GetMethod("ParseButtonsFromRibbon", BindingFlags.NonPublic | BindingFlags.Static)!;
        var buttons = (List<RibbonButtonInfo>)parse.Invoke(null, new object[] { ribbonXml, "account", "MainTab.Save", new Dictionary<string, string> { ["key"] = "Localized" } })!;
        Assert.AreEqual(3, buttons.Count);
        Assert.AreEqual("b2", buttons[0].Id);
        Assert.AreEqual("Localized", buttons[0].Label);
        Assert.IsTrue(buttons[0].IsOob);
        Assert.IsFalse(((List<RibbonButtonInfo>)parse.Invoke(null, new object[] { ribbonXml, "contact", "MainTab.Save", null! })!).Any());

        var detect = ToolType.GetMethod("DetectSurfaceFromButtonId", BindingFlags.NonPublic | BindingFlags.Static)!;
        Assert.AreEqual("form", detect.Invoke(null, new object[] { "Mscrm.Form.account.Save", "account" }));
        Assert.AreEqual("main_grid", detect.Invoke(null, new object[] { "Mscrm.HomepageGrid.account.Save", "account" }));
        Assert.AreEqual("sub_grid", detect.Invoke(null, new object[] { "Mscrm.SubGrid.account.Save", "account" }));
        Assert.IsNull(detect.Invoke(null, new object[] { "other", "account" }));

        var zip = CreateZip(("RibbonXml.xml", ribbonXml));
        var unzip = ToolType.GetMethod("UnzipRibbonXml", BindingFlags.NonPublic | BindingFlags.Static)!;
        Assert.AreEqual(ribbonXml, unzip.Invoke(null, new object[] { zip }));
        Assert.IsNull(unzip.Invoke(null, new object[] { CreateZip(("other.xml", "x")) }));

        var customizations = "<ImportExportXml><Entities><Entity><Name>account</Name><RibbonDiffXml><CustomActions><CustomAction /></CustomActions></RibbonDiffXml></Entity><Entity><Name>contact</Name></Entity><Entity><RibbonDiffXml /></Entity></Entities></ImportExportXml>";
        var extract = ToolType.GetMethod("ExtractEntitiesFromSolution", BindingFlags.NonPublic | BindingFlags.Static)!;
        var entities = (System.Collections.IEnumerable)extract.Invoke(null, new object[] { CreateZip(("customizations.xml", customizations)) })!;
        Assert.AreEqual(2, entities.Cast<object>().Count());
        Assert.AreEqual(0, ((System.Collections.IEnumerable)extract.Invoke(null, new object[] { CreateZip(("other.xml", "x")) })!).Cast<object>().Count());
    }

    private static object InvokeStatic(string name, params object[] args)
    {
        var methods = ToolType.GetMethods(BindingFlags.NonPublic | BindingFlags.Static)
            .Where(m => m.Name == name && m.GetParameters().Length == args.Length)
            .ToList();
        var method = methods.Count == 1
            ? methods[0]
            : methods.Single(m => m.GetParameters().Select(p => p.ParameterType).Zip(args, (t, a) => a == null || t.IsInstanceOfType(a)).All(x => x));
        return method.Invoke(null, args)!;
    }

    private static byte[] CreateZip(params (string Name, string Content)[] entries)
    {
        using var ms = new MemoryStream();
        using (var zip = new ZipArchive(ms, ZipArchiveMode.Create, true))
        {
            foreach (var (name, content) in entries)
            {
                using var writer = new StreamWriter(zip.CreateEntry(name).Open(), Encoding.UTF8);
                writer.Write(content);
            }
        }
        return ms.ToArray();
    }
}
