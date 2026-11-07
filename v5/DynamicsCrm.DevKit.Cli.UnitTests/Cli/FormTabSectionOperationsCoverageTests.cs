using DynamicsCrm.DevKit.Cli.Mcp.Tools.Form;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public class FormTabSectionOperationsCoverageTests
{
    private static readonly Dictionary<string, AttributeMetadata> AttrMap = new()
    {
        ["name"] = new StringAttributeMetadata { LogicalName = "name", DisplayName = new Label("Name", 1033) },
        ["revenue"] = new MoneyAttributeMetadata { LogicalName = "revenue", DisplayName = new Label("Revenue", 1033) }
    };

    private static FormTabSectionOperations CreateOps() =>
        new(null, new FormXmlBuilder(null));

    private static JsonElement Op(string json) => JsonDocument.Parse(json).RootElement;

    private static XDocument MakeForm() => XDocument.Parse("""
        <?xml version="1.0" encoding="utf-16"?>
        <form>
          <tabs>
            <tab name="general" expanded="true">
              <labels><label description="General" languagecode="1033" /></labels>
              <columns>
                <column width="60"><sections>
                  <section name="info" showlabel="true">
                    <labels><label description="Info" languagecode="1033" /></labels>
                    <rows><row><cell id="{c1}"><control id="name" classid="{4273ed8a-83c1-4e3e-a1b1-b1be5d0d0000}" datafieldname="name" /></cell></row></rows>
                  </section>
                </sections></column>
                <column width="40"><sections /></column>
              </columns>
            </tab>
            <tab name="details">
              <labels><label description="Details" languagecode="1033" /></labels>
              <columns><column width="100"><sections /></column></columns>
            </tab>
          </tabs>
        </form>
        """);

    private static void AssertThrows(Action act, string messagePart)
    {
        try
        {
            act();
            Assert.Fail("Expected InvalidOperationException");
        }
        catch (InvalidOperationException ex)
        {
            StringAssert.Contains(ex.Message, messagePart);
        }
    }

    [TestMethod]
    public void AddTab_WithSectionsAndFields_BuildsTabAndReturnsSummary()
    {
        var ops = CreateOps();
        var form = MakeForm();
        var result = ops.ExecuteAddTab(form, Op("""
        {
          "label": "Marketing",
          "name": "marketing",
          "tab_columns": 2,
          "sections": [
            { "name": "leads", "label": "Leads", "section_columns": 1, "tab_column": 1 },
            { "label": "Notes", "section_columns": 2, "tab_column": 2, "fields": ["name"], "show_label": false, "visible": false, "hide_on_phone": true }
          ]
        }
        """), AttrMap, new Dictionary<string, string>());

        StringAssert.Contains(result, "add_tab: \"Marketing\"");
        StringAssert.Contains(result, "2 column(s)");
        StringAssert.Contains(result, "2 section(s)");
        StringAssert.Contains(result, "1 field(s)");

        var tab = FormXmlHelpers.FindTab(form, "marketing");
        Assert.IsNotNull(tab, "add_tab must insert the new tab");
        Assert.AreEqual(3, form.Root.Element("tabs").Elements("tab").Count());
        Assert.AreEqual(2, tab.Element("columns").Elements("column").Count());
    }

    [TestMethod]
    public void AddTab_WithoutName_AutoNamesFromLabel()
    {
        var ops = CreateOps();
        var form = MakeForm();
        var result = ops.ExecuteAddTab(form, Op("""{"label": "Extra Info"}"""), AttrMap, new Dictionary<string, string>());

        StringAssert.Contains(result, "add_tab:");
        Assert.IsNotNull(FormXmlHelpers.FindTab(form, "tab_extra_info"));
    }

    [TestMethod]
    public void AddTab_MissingLabel_Throws()
    {
        var ops = CreateOps();
        AssertThrows(() => ops.ExecuteAddTab(MakeForm(), Op("{}"), AttrMap, new Dictionary<string, string>()), "add_tab requires 'label'");
    }

    [TestMethod]
    public void UpdateTab_AllPropertyVariants_UpdateAttributesAndRename()
    {
        var ops = CreateOps();
        var form = MakeForm();
        var result = ops.ExecuteUpdateTab(form, Op("""
        {
          "tab": "general",
          "new_name": "main",
          "visible": false,
          "show_label": true,
          "hide_on_phone": true,
          "expanded": false
        }
        """));

        StringAssert.Contains(result, "renamed to \"main\"");
        var tab = FormXmlHelpers.FindTab(form, "main");
        Assert.AreEqual("false", tab.Attribute("visible")?.Value);
        Assert.AreEqual("true", tab.Attribute("showlabel")?.Value);
        Assert.AreEqual("false", tab.Attribute("availableforphone")?.Value);
        Assert.AreEqual("false", tab.Attribute("expanded")?.Value);
    }

    [TestMethod]
    public void UpdateTab_TrueVariants_RemoveOrSetAttributes()
    {
        var ops = CreateOps();
        var form = MakeForm();
        var result = ops.ExecuteUpdateTab(form, Op("""
        { "tab": "general", "visible": true, "show_label": false, "hide_on_phone": false, "expanded": true }
        """));

        StringAssert.Contains(result, "update_tab: \"general\" updated");
        var tab = FormXmlHelpers.FindTab(form, "general");
        Assert.IsNull(tab.Attribute("visible"));
        Assert.AreEqual("false", tab.Attribute("showlabel")?.Value);
        Assert.IsNull(tab.Attribute("availableforphone"));
        Assert.AreEqual("true", tab.Attribute("expanded")?.Value);
    }

    [TestMethod]
    public void UpdateTab_RenameToExistingTab_Throws()
    {
        var ops = CreateOps();
        AssertThrows(
            () => ops.ExecuteUpdateTab(MakeForm(), Op("""{"tab":"general","new_name":"details"}""")),
            "already exists");
    }

    [TestMethod]
    public void UpdateTab_EmptyNewName_Throws()
    {
        var ops = CreateOps();
        AssertThrows(
            () => ops.ExecuteUpdateTab(MakeForm(), Op("""{"tab":"general","new_name":"  "}""")),
            "cannot be empty");
    }

    [TestMethod]
    public void UpdateTab_MissingTabReference_Throws()
    {
        var ops = CreateOps();
        AssertThrows(() => ops.ExecuteUpdateTab(MakeForm(), Op("{}")), "update_tab requires 'tab' or 'name'");
    }

    [TestMethod]
    public void UpdateTab_UnknownTab_Throws()
    {
        var ops = CreateOps();
        AssertThrows(() => ops.ExecuteUpdateTab(MakeForm(), Op("""{"tab":"nope"}""")), "Tab 'nope' not found");
    }

    [TestMethod]
    public void MoveTab_FirstAndLast_ReordersTabs()
    {
        var ops = CreateOps();
        var form = MakeForm();
        StringAssert.Contains(FormTabSectionOperations.ExecuteMoveTab(form, Op("""{"tab":"details","position":"first"}""")), "moved to position \"first\"");
        Assert.AreEqual("details", form.Root.Element("tabs").Elements("tab").First().Attribute("name").Value);

        StringAssert.Contains(FormTabSectionOperations.ExecuteMoveTab(form, Op("""{"tab":"details","position":"last"}""")), "moved to position \"last\"");
        Assert.AreEqual("details", form.Root.Element("tabs").Elements("tab").Last().Attribute("name").Value);
    }

    [TestMethod]
    public void MoveTab_MissingPosition_Throws()
    {
        AssertThrows(
            () => FormTabSectionOperations.ExecuteMoveTab(MakeForm(), Op("""{"tab":"details"}""")),
            "move_tab requires 'position'");
    }

    [TestMethod]
    public void MoveTab_UnknownTab_Throws()
    {
        AssertThrows(
            () => FormTabSectionOperations.ExecuteMoveTab(MakeForm(), Op("""{"tab":"nope","position":"first"}""")),
            "Tab 'nope' not found");
    }

    [TestMethod]
    public void MoveTab_MissingTabReference_Throws()
    {
        AssertThrows(
            () => FormTabSectionOperations.ExecuteMoveTab(MakeForm(), Op("""{"position":"first"}""")),
            "move_tab requires 'tab'");
    }

    [TestMethod]
    public void RemoveTab_RemovesAndReports()
    {
        var form = MakeForm();
        StringAssert.Contains(FormTabSectionOperations.ExecuteRemoveTab(form, Op("""{"tab":"details"}""")), "remove_tab: \"details\"");
        Assert.IsNull(FormXmlHelpers.FindTab(form, "details"));
        AssertThrows(
            () => FormTabSectionOperations.ExecuteRemoveTab(MakeForm(), Op("""{"tab":"nope"}""")),
            "Tab 'nope' not found");
    }

    [TestMethod]
    public void AddSection_WithFieldAndPosition_InsertsSection()
    {
        var ops = CreateOps();
        var form = MakeForm();
        var result = ops.ExecuteAddSection(form, Op("""
        {
          "tab": "general",
          "label": "Extras",
          "name": "extras",
          "section_columns": 2,
          "tab_column": 2,
          "position": "last",
          "fields": ["revenue"],
          "show_label": false,
          "visible": false,
          "hide_on_phone": true
        }
        """), AttrMap, new Dictionary<string, string>());

        StringAssert.Contains(result, "add_section: \"Extras\" in tab \"general\"");
        StringAssert.Contains(result, "2 column(s)");
        StringAssert.Contains(result, "1 field(s)");
        var section = FormXmlHelpers.FindSection(FormXmlHelpers.FindTab(form, "general"), "extras");
        Assert.IsNotNull(section);
        Assert.AreEqual("false", section.Attribute("visible")?.Value);
        Assert.AreEqual("false", section.Attribute("availableforphone")?.Value);
        Assert.IsNotNull(section.Element("rows").Descendants("control").FirstOrDefault(c => c.Attribute("datafieldname")?.Value == "revenue"));
    }

    [TestMethod]
    public void AddSection_MissingTab_ThrowsWithAvailableTabs()
    {
        var ops = CreateOps();
        AssertThrows(
            () => ops.ExecuteAddSection(MakeForm(), Op("""{"tab":"nope","label":"X"}"""), AttrMap, new Dictionary<string, string>()),
            "Tab 'nope' not found");
    }

    [TestMethod]
    public void AddSection_TabWithoutColumns_Throws()
    {
        var ops = CreateOps();
        var form = XDocument.Parse("""<form><tabs><tab name="empty"><labels /></tab></tabs></form>""");
        AssertThrows(
            () => ops.ExecuteAddSection(form, Op("""{"tab":"empty","label":"X"}"""), AttrMap, new Dictionary<string, string>()),
            "has no columns");
    }

    [TestMethod]
    public void AddSection_MissingRequiredProps_Throws()
    {
        var ops = CreateOps();
        AssertThrows(
            () => ops.ExecuteAddSection(MakeForm(), Op("""{"label":"X"}"""), AttrMap, new Dictionary<string, string>()),
            "add_section requires 'tab'");
        AssertThrows(
            () => ops.ExecuteAddSection(MakeForm(), Op("""{"tab":"general"}"""), AttrMap, new Dictionary<string, string>()),
            "add_section requires 'label'");
    }

    [TestMethod]
    public void UpdateSection_AllPropertyVariants_UpdateAttributesAndRename()
    {
        var ops = CreateOps();
        var form = MakeForm();
        var result = ops.ExecuteUpdateSection(form, Op("""
        {
          "tab": "general",
          "section": "info",
          "new_name": "overview",
          "label": "Overview",
          "visible": false,
          "show_label": false,
          "hide_on_phone": true
        }
        """));

        StringAssert.Contains(result, "renamed to \"overview\"");
        var section = FormXmlHelpers.FindSection(FormXmlHelpers.FindTab(form, "general"), "overview");
        Assert.AreEqual("Overview", section.Element("labels")?.Element("label")?.Attribute("description")?.Value);
        Assert.AreEqual("false", section.Attribute("visible")?.Value);
        Assert.AreEqual("false", section.Attribute("showlabel")?.Value);
        Assert.AreEqual("false", section.Attribute("availableforphone")?.Value);
    }

    [TestMethod]
    public void UpdateSection_TrueVariants_ResetAttributes()
    {
        var ops = CreateOps();
        var form = MakeForm();
        var result = ops.ExecuteUpdateSection(form, Op("""
        { "tab": "general", "section": "info", "visible": true, "show_label": true, "hide_on_phone": false }
        """));

        StringAssert.Contains(result, "update_section: \"info\" in tab \"general\" updated");
        var section = FormXmlHelpers.FindSection(FormXmlHelpers.FindTab(form, "general"), "info");
        Assert.IsNull(section.Attribute("visible"));
        Assert.AreEqual("true", section.Attribute("showlabel")?.Value);
        Assert.IsNull(section.Attribute("availableforphone"));
    }

    [TestMethod]
    public void UpdateSection_RenameConflictsAndMissingTargets_Throw()
    {
        var ops = CreateOps();
        var twoSections = XDocument.Parse("""
            <form><tabs><tab name="general"><columns><column width="100"><sections>
              <section name="info" showlabel="true"><labels><label description="Info" languagecode="1033" /></labels><rows /></section>
              <section name="other"><labels /><rows /></section>
            </sections></column></columns></tab></tabs></form>
            """);
        AssertThrows(
            () => ops.ExecuteUpdateSection(twoSections, Op("""{"tab":"general","section":"info","new_name":"other"}""")),
            "Section 'other' already exists in tab 'general'");
        AssertThrows(
            () => ops.ExecuteUpdateSection(MakeForm(), Op("""{"tab":"general","section":"info","new_name":" "}""")),
            "cannot be empty");
        AssertThrows(
            () => ops.ExecuteUpdateSection(MakeForm(), Op("""{"tab":"nope","section":"info"}""")),
            "Tab 'nope' not found");
        AssertThrows(
            () => ops.ExecuteUpdateSection(MakeForm(), Op("""{"tab":"general"}""")),
            "update_section requires 'section' or 'name'");
        AssertThrows(
            () => ops.ExecuteUpdateSection(MakeForm(), Op("""{"tab":"general","section":"nope"}""")),
            "Section 'nope' not found in tab 'general'");
    }

    [TestMethod]
    public void MoveSection_WithinTabAndCrossTab_ReordersSections()
    {
        var form = MakeForm();
        StringAssert.Contains(
            FormTabSectionOperations.ExecuteMoveSection(form, Op("""{"tab":"general","section":"info","position":"last"}""")),
            "move_section: \"info\" moved to position \"last\"");

        StringAssert.Contains(
            FormTabSectionOperations.ExecuteMoveSection(form, Op("""{"tab":"general","section":"info","position":"first","target_tab":"details","tab_column":1}""")),
            "(moved to tab \"details\")");
        Assert.IsNotNull(FormXmlHelpers.FindSection(FormXmlHelpers.FindTab(form, "details"), "info"));
    }

    [TestMethod]
    public void MoveSection_MissingPositionOrTargets_Throw()
    {
        AssertThrows(
            () => FormTabSectionOperations.ExecuteMoveSection(MakeForm(), Op("""{"tab":"general","section":"info"}""")),
            "move_section requires 'position'");
        AssertThrows(
            () => FormTabSectionOperations.ExecuteMoveSection(MakeForm(), Op("""{"tab":"nope","section":"info","position":"first"}""")),
            "Tab 'nope' not found");
        AssertThrows(
            () => FormTabSectionOperations.ExecuteMoveSection(MakeForm(), Op("""{"tab":"general","section":"nope","position":"first"}""")),
            "Section 'nope' not found in tab 'general'");
        AssertThrows(
            () => FormTabSectionOperations.ExecuteMoveSection(MakeForm(), Op("""{"tab":"general","position":"first"}""")),
            "move_section requires 'section'");
        AssertThrows(
            () => FormTabSectionOperations.ExecuteMoveSection(MakeForm(), Op("""{"section":"info","position":"first"}""")),
            "move_section requires 'tab'");
        AssertThrows(
            () => FormTabSectionOperations.ExecuteMoveSection(MakeForm(), Op("""{"tab":"general","section":"info","position":"first","target_tab":"nope2"}""")),
            "Target tab 'nope2' not found");
    }

    [TestMethod]
    public void MoveSection_TargetTabWithoutColumns_Throws()
    {
        var form = XDocument.Parse("""
            <form><tabs>
              <tab name="a"><columns><column width="100"><sections><section name="s1" /></sections></column></columns></tab>
              <tab name="b"><labels /></tab>
            </tabs></form>
            """);
        AssertThrows(
            () => FormTabSectionOperations.ExecuteMoveSection(form, Op("""{"tab":"a","section":"s1","position":"first","target_tab":"b"}""")),
            "has no columns");
    }

    [TestMethod]
    public void RemoveSection_RemovesAndReports()
    {
        var form = MakeForm();
        StringAssert.Contains(
            FormTabSectionOperations.ExecuteRemoveSection(form, Op("""{"tab":"general","section":"info"}""")),
            "remove_section: \"info\" from tab \"general\"");
        Assert.IsNull(FormXmlHelpers.FindSection(FormXmlHelpers.FindTab(form, "general"), "info"));
    }

    [TestMethod]
    public void RemoveSection_MissingArgs_Throw()
    {
        AssertThrows(
            () => FormTabSectionOperations.ExecuteRemoveSection(MakeForm(), Op("""{"section":"info"}""")),
            "remove_section requires 'tab'");
        AssertThrows(
            () => FormTabSectionOperations.ExecuteRemoveSection(MakeForm(), Op("""{"tab":"general"}""")),
            "remove_section requires 'section'");
        AssertThrows(
            () => FormTabSectionOperations.ExecuteRemoveSection(MakeForm(), Op("""{"tab":"nope","section":"info"}""")),
            "Tab 'nope' not found");
        AssertThrows(
            () => FormTabSectionOperations.ExecuteRemoveSection(MakeForm(), Op("""{"tab":"general","section":"nope"}""")),
            "Section 'nope' not found in tab 'general'");
    }
}
