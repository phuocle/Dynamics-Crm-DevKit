using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using ModelContextProtocol.Protocol;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageCommand;

[TestClass]
public sealed class ManageCommandHelperCoverageTests
{
    private static readonly Type ToolType = typeof(ManageCommandTool);
    private static readonly BindingFlags PrivateStatic = BindingFlags.NonPublic | BindingFlags.Static;
    private static readonly BindingFlags PrivateInstance = BindingFlags.NonPublic | BindingFlags.Instance;

    private static object InvokeStatic(string name, params object[] args) =>
        ToolType.GetMethod(name, PrivateStatic)!.Invoke(null, args);

    private static T InvokeStatic<T>(string name, params object[] args) => (T)InvokeStatic(name, args)!;

    private static object InvokeInstance(ManageCommandTool tool, string name, params object[] args) =>
        ToolType.GetMethod(name, PrivateInstance)!.Invoke(tool, args);

    [TestMethod]
    public void CommandMapping_CoversDefaultsAndKnownValues()
    {
        var entity = new Entity("appaction", Guid.NewGuid())
        {
            ["name"] = "devkit.account.Save",
            ["uniquename"] = "devkit_account_save",
            ["buttonlabeltext"] = " Save ",
            ["contextvalue"] = "account",
            ["location"] = new OptionSetValue(0),
            ["type"] = new OptionSetValue(0),
            ["onclickeventtype"] = new OptionSetValue(2),
            ["visibilitytype"] = new OptionSetValue(1),
            ["origin"] = new OptionSetValue(0),
            ["fonticon"] = "Accept",
            ["sequence"] = 12m,
            ["hidden"] = true,
            ["isdisabled"] = false,
            ["parentappactionid"] = new EntityReference("appaction", Guid.NewGuid()),
            ["clienttype"] = "Web"
        };
        var mapped = InvokeStatic<object>("MapCommandEntry", entity);
        Assert.AreEqual(entity.Id.ToString(), Property<string>(mapped, "CommandId"));
        Assert.AreEqual("Form", Property<string>(mapped, "Location"));
        Assert.AreEqual("Standard", Property<string>(mapped, "Type"));
        Assert.AreEqual("JavaScript", Property<string>(mapped, "OnClickEventType"));
        Assert.AreEqual("Formula", Property<string>(mapped, "VisibilityType"));
        Assert.AreEqual("Default", Property<string>(mapped, "Origin"));
        Assert.AreEqual("Save", Property<string>(mapped, "ButtonLabel"));

        var unknown = InvokeStatic<object>("MapCommandEntry", new Entity("appaction")
        {
            ["location"] = new OptionSetValue(999),
            ["type"] = new OptionSetValue(999),
            ["onclickeventtype"] = new OptionSetValue(999),
            ["visibilitytype"] = new OptionSetValue(999),
            ["origin"] = new OptionSetValue(999),
            ["sequence"] = 0
        });
        Assert.AreEqual("999", Property<string>(unknown, "Location"));
        Assert.AreEqual("999", Property<string>(unknown, "Type"));
        Assert.AreEqual("999", Property<string>(unknown, "OnClickEventType"));
        Assert.AreEqual("999", Property<string>(unknown, "VisibilityType"));
        Assert.AreEqual("999", Property<string>(unknown, "Origin"));
    }

    [TestMethod]
    public void TextAndJsonHelpers_CoverAllBranches()
    {
        Assert.AreEqual("safe", InvokeStatic<string>("DeriveFlyoutSafeLabel", "devkit.account.safe.Form.Dropdown", "devkit", "account", "Form"));
        Assert.AreEqual("Form", InvokeStatic<string>("DeriveFlyoutSafeLabel", "other.safe.Form.Dropdown", "devkit", "account", "Form"));
        Assert.AreEqual("Name", InvokeStatic<string>("DeriveFlyoutSafeLabel", "Name", "devkit", "account", "Form"));

        using var json = JsonDocument.Parse("{\"label\":\"Hello\",\"number\":3}");
        Assert.AreEqual("Hello", InvokeStatic<string>("GetJsonString", json.RootElement, "label"));
        Assert.AreEqual("", InvokeStatic<string>("GetJsonString", json.RootElement, "number"));
        Assert.AreEqual("", InvokeStatic<string>("GetJsonString", json.RootElement, "missing"));

        Assert.AreEqual("$clientsvg:Accept", InvokeStatic<string>("NormalizeFontIcon", " Accept "));
        Assert.AreEqual("$clientsvg:Accept", InvokeStatic<string>("NormalizeFontIcon", "$clientsvg:Accept"));
        Assert.AreEqual("$webresource:icon.svg", InvokeStatic<string>("NormalizeFontIcon", "$webresource:icon.svg"));
        Assert.AreEqual("  ", InvokeStatic<string>("NormalizeFontIcon", "  "));
        Assert.IsNull(InvokeStatic<string>("NullIfEmpty", "  "));
        Assert.AreEqual("value", InvokeStatic<string>("NullIfEmpty", " value "));
        Assert.AreEqual("", InvokeStatic<string>("Truncate", null, 3));
        Assert.AreEqual("abc", InvokeStatic<string>("Truncate", "abc", 3));
        Assert.AreEqual("abc...", InvokeStatic<string>("Truncate", "abcdef", 3));
        Assert.AreEqual("&amp;&lt;&gt;&apos;&quot;", InvokeStatic<string>("EscapeXml", "&<>\'\""));
        Assert.AreEqual("a b c", InvokeStatic<string>("EscapeTab", "a\tb\nc"));
        Assert.AreEqual("", InvokeStatic<string>("EscapeTab", "\r"));
    }

    [TestMethod]
    public void ResolutionHelpers_ValidateGuidInputsWithoutNetwork()
    {
        var tool = new ManageCommandTool(null!, new McpDryRunOptions(), new McpExecutionContext(true));
        var errorArgs = new object[] { Guid.NewGuid().ToString(), "ignored", null };
        var resolved = (Guid?)InvokeInstance(tool, "ResolveAppId", errorArgs);
        Assert.IsTrue(resolved.HasValue);
        Assert.IsNull(errorArgs[2]);

        errorArgs = new object[] { "bad-guid", "ignored", null };
        Assert.IsNull(InvokeInstance(tool, "ResolveAppId", errorArgs));
        StringAssert.Contains((string)errorArgs[2], "not a valid app_id GUID");

        errorArgs = new object[] { "", "", null };
        Assert.IsNull(InvokeInstance(tool, "ResolveAppId", errorArgs));
        StringAssert.Contains((string)errorArgs[2], "app_id or app_name is required");
        Assert.AreEqual(Guid.Empty, InvokeInstance(tool, "ResolveWebResourceId", Guid.Empty.ToString()));
    }

    [TestMethod]
    public void RibbonXmlHelpers_ParseLabelsButtonsAndArchivesInMemory()
    {
        var labels = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) { ["$foo"] = "Localized Foo" };
        Assert.AreEqual("Button", InvokeStatic<string>("ResolveLabel", "", "a.b.Button", labels));
        Assert.AreEqual("Localized Foo", InvokeStatic<string>("ResolveLabel", "$LocLabels:$foo", "id", labels));
        Assert.AreEqual("Missing", InvokeStatic<string>("ResolveLabel", "$LocLabels:a.b.Missing", "id", labels));
        Assert.AreEqual("Text", InvokeStatic<string>("ResolveLabel", "$Resources:a.b.Text", "id", labels));
        Assert.AreEqual("Value", InvokeStatic<string>("ResolveLabel", "{!String:Value}", "id", labels));
        Assert.AreEqual("plain", InvokeStatic<string>("ResolveLabel", "plain", "id", labels));

        var ribbon = """
            <Ribbon>
              <Group Id="devkit.account.Form">
                <Controls>
                  <Button Id="b.late" Sequence="bad" LabelText="$LocLabels:$foo" SolutionUniqueName="System" />
                  <FlyoutAnchor Id="b.flyout" Sequence="2" LabelText="$Resources:res.Flyout" SolutionUniqueName="custom" />
                  <SplitButton Id="b.split" Sequence="1" LabelText="{!String:Split}" SolutionUniqueName="custom" />
                  <Control Id="ignored" Sequence="0" LabelText="ignored" />
                </Controls>
              </Group>
            </Ribbon>
            """;
        var buttons = (IEnumerable)InvokeStatic("ParseButtonsFromRibbon", ribbon, "account", "Form", labels);
        var list = buttons.Cast<object>().ToList();
        Assert.AreEqual(3, list.Count);
        Assert.AreEqual("b.late", TupleItem<string>(list[0], 0));
        Assert.AreEqual(0, TupleItem<int>(list[0], 1));
        Assert.IsTrue(TupleItem<bool>(list[0], 3));
        Assert.AreEqual("b.split", TupleItem<string>(list[1], 0));
        Assert.AreEqual("b.flyout", TupleItem<string>(list[2], 0));
        Assert.IsFalse(TupleItem<bool>(list[1], 3));
        Assert.IsFalse(TupleItem<bool>(list[2], 3));
        Assert.AreEqual(0, ((IEnumerable)InvokeStatic("ParseButtonsFromRibbon", ribbon, "contact", "Form", labels)).Cast<object>().Count());
        Assert.AreEqual(0, ((IEnumerable)InvokeStatic("ParseButtonsFromRibbon", "<Ribbon />", "account", "Form", labels)).Cast<object>().Count());
    }

    [TestMethod]
    public void RibbonZipHelpers_FindEntityAndReadRibbonEntry()
    {
        var customizations = "<ImportExportXml><Entities><Entity><Name>account</Name><RibbonDiffXml><Custom>yes</Custom></RibbonDiffXml></Entity></Entities></ImportExportXml>";
        var withCustomization = Zip(new Dictionary<string, string> { ["customizations.xml"] = customizations });
        var extracted = InvokeStatic<string>("ExtractRibbonDiffXmlForEntity", withCustomization, "ACCOUNT");
        StringAssert.Contains(extracted, "Custom");
        Assert.IsNull(InvokeStatic<string>("ExtractRibbonDiffXmlForEntity", withCustomization, "contact"));
        Assert.IsNull(InvokeStatic<string>("ExtractRibbonDiffXmlForEntity", Zip(new Dictionary<string, string>()), "account"));

        var ribbon = "<Ribbon><Button Id='one' /></Ribbon>";
        var ribbonZip = Zip(new Dictionary<string, string> { ["RibbonXml.xml"] = ribbon });
        Assert.AreEqual(ribbon, InvokeStatic<string>("UnzipRibbonXml", ribbonZip));
    }

    [TestMethod]
    public void RibbonClassification_CoversOobAndLocationNames()
    {
        Assert.IsTrue(InvokeStatic<bool>("IsOobOverrideCommand", new Entity("appaction")
        {
            ["origin"] = new OptionSetValue(2),
            ["name"] = "Mscrm.Save.{!EntityLogicalName}"
        }));
        Assert.IsFalse(InvokeStatic<bool>("IsOobOverrideCommand", new Entity("appaction")
        {
            ["origin"] = new OptionSetValue(0),
            ["name"] = "Mscrm.Save.{!EntityLogicalName}"
        }));
        Assert.IsFalse(InvokeStatic<bool>("IsOobOverrideCommand", new Entity("appaction")
        {
            ["origin"] = new OptionSetValue(2),
            ["name"] = "Custom.Save"
        }));
        var expected = new[] { "Form", "HomepageGrid", "SubGrid", "SubGrid", "QuickForm", "GlobalHeader", "Dashboard", "Form" };
        for (var i = 0; i < expected.Length; i++)
            Assert.AreEqual(expected[i], InvokeStatic<string>("LocationOobNamePrefix", i));
    }

    [TestMethod]
    public async Task PublicValidation_ReturnsErrorsBeforeNetwork()
    {
        var tool = new ManageCommandTool(null!, new McpDryRunOptions(), new McpExecutionContext(true));
        var missingAction = tool.manage_command();
        StringAssert.Contains(Text(missingAction), "action is required");
        var missingDetail = tool.manage_command(action: "detail");
        StringAssert.Contains(Text(missingDetail), "command_id or label is required");
        var badDetail = tool.manage_command(action: "detail", command_id: "bad-guid");
        StringAssert.Contains(Text(badDetail), "not a valid GUID");
        var invalid = tool.manage_command(action: "unknown");
        StringAssert.Contains(Text(invalid), "Invalid action");
        await Task.CompletedTask;
    }

    private static T Property<T>(object value, string name) => (T)value.GetType().GetProperty(name)!.GetValue(value)!;

    private static T TupleItem<T>(object value, int index) => (T)value.GetType().GetField($"Item{index + 1}")!.GetValue(value)!;

    private static byte[] Zip(Dictionary<string, string> entries)
    {
        using var stream = new MemoryStream();
        using (var archive = new ZipArchive(stream, ZipArchiveMode.Create, true))
        {
            foreach (var pair in entries)
            {
                using var writer = new StreamWriter(archive.CreateEntry(pair.Key).Open(), Encoding.UTF8);
                writer.Write(pair.Value);
            }
        }
        return stream.ToArray();
    }

    private static string Text(CallToolResult result) =>
        result.Content?.FirstOrDefault() is TextContentBlock block ? block.Text ?? "" : "";
}
