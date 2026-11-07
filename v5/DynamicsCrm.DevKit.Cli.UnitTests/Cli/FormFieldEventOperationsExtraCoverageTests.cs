using DynamicsCrm.DevKit.Cli.Mcp.Tools.Form;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public class FormFieldEventOperationsExtraCoverageTests
{
    private static readonly Dictionary<string, AttributeMetadata> AttrMap = new()
    {
        ["name"] = new StringAttributeMetadata { LogicalName = "name", DisplayName = new Label("Name", 1033) },
        ["revenue"] = new MoneyAttributeMetadata { LogicalName = "revenue", DisplayName = new Label("Revenue", 1033) }
    };

    private static FormFieldEventOperations CreateOps() =>
        new(null, new FormXmlBuilder(null));

    private static JsonElement Op(string json) => JsonDocument.Parse(json).RootElement;

    private static XDocument MakeForm() => XDocument.Parse("""
        <?xml version="1.0" encoding="utf-16"?>
        <form>
          <tabs>
            <tab name="general" expanded="true">
              <labels><label description="General" languagecode="1033" /></labels>
              <columns><column width="100"><sections>
                <section name="info" showlabel="true">
                  <labels><label description="Info" languagecode="1033" /></labels>
                  <rows>
                    <row><cell id="{c1}"><control id="name" classid="{4273ed8a-83c1-4e3e-a1b1-b1be5d0d0000}" datafieldname="name" /></cell></row>
                  </rows>
                </section>
                <section name="other"><labels /><rows /></section>
              </sections></column></columns>
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
    public void AddFields_IntoSectionWithRows_AddsCellsAndReports()
    {
        var ops = CreateOps();
        var form = MakeForm();
        var result = ops.ExecuteAddFields(form, Op("""
        { "tab": "general", "section": "info", "fields": ["revenue"], "position": "last" }
        """), AttrMap, new Dictionary<string, string>());

        StringAssert.Contains(result, "add_fields");
        StringAssert.Contains(result, "1 field(s)");
        var control = FormXmlHelpers.FindSection(FormXmlHelpers.FindTab(form, "general"), "info")
            .Element("rows").Descendants("control")
            .FirstOrDefault(c => c.Attribute("datafieldname")?.Value == "revenue");
        Assert.IsNotNull(control, "revenue control must be added");
    }

    [TestMethod]
    public void AddFields_IntoSectionWithoutRows_CreatesRowsElement()
    {
        var ops = CreateOps();
        var form = MakeForm();
        var result = ops.ExecuteAddFields(form, Op("""
        { "tab": "general", "section": "other", "fields": ["name"] }
        """), AttrMap, new Dictionary<string, string>());

        StringAssert.Contains(result, "add_fields");
        var section = FormXmlHelpers.FindSection(FormXmlHelpers.FindTab(form, "general"), "other");
        Assert.IsNotNull(section.Element("rows"));
        Assert.IsNotNull(section.Element("rows").Descendants("control").FirstOrDefault());
    }

    [TestMethod]
    public void AddFields_ErrorPaths_Throw()
    {
        var ops = CreateOps();
        AssertThrows(() => ops.ExecuteAddFields(MakeForm(), Op("""{"section":"info","fields":["name"]}"""), AttrMap, new Dictionary<string, string>()),
            "add_fields requires 'tab'");
        AssertThrows(() => ops.ExecuteAddFields(MakeForm(), Op("""{"tab":"general","fields":["name"]}"""), AttrMap, new Dictionary<string, string>()),
            "add_fields requires 'section'");
        AssertThrows(() => ops.ExecuteAddFields(MakeForm(), Op("""{"tab":"general","section":"info"}"""), AttrMap, new Dictionary<string, string>()),
            "add_fields requires 'fields' array");
        AssertThrows(() => ops.ExecuteAddFields(MakeForm(), Op("""{"tab":"general","section":"info","fields":[]}"""), AttrMap, new Dictionary<string, string>()),
            "at least one field");
        AssertThrows(() => ops.ExecuteAddFields(MakeForm(), Op("""{"tab":"nope","section":"info","fields":["name"]}"""), AttrMap, new Dictionary<string, string>()),
            "Tab 'nope' not found");
        AssertThrows(() => ops.ExecuteAddFields(MakeForm(), Op("""{"tab":"general","section":"nope","fields":["name"]}"""), AttrMap, new Dictionary<string, string>()),
            "Section 'nope' not found in tab 'general'");
    }

    [TestMethod]
    public void MoveFields_CrossSection_MovesControls()
    {
        var form = MakeForm();
        var result = FormFieldEventOperations.ExecuteMoveFields(form, Op("""
        { "tab": "general", "section": "info", "target_section": "other", "fields": ["name"], "position": "first" }
        """));

        StringAssert.Contains(result, "move_fields");
        Assert.IsNull(FormXmlHelpers.FindSection(FormXmlHelpers.FindTab(form, "general"), "info")
            .Element("rows").Descendants("control").FirstOrDefault(c => c.Attribute("datafieldname")?.Value == "name"));
        Assert.IsNotNull(FormXmlHelpers.FindSection(FormXmlHelpers.FindTab(form, "general"), "other")
            .Descendants("control").FirstOrDefault(c => c.Attribute("datafieldname")?.Value == "name"));
    }

    [TestMethod]
    public void MoveFields_ErrorPaths_Throw()
    {
        AssertThrows(() => FormFieldEventOperations.ExecuteMoveFields(MakeForm(), Op("""{"section":"info","fields":["name"]}""")),
            "move_fields requires 'tab'");
        AssertThrows(() => FormFieldEventOperations.ExecuteMoveFields(MakeForm(), Op("""{"tab":"general","fields":["name"]}""")),
            "move_fields requires 'section'");
        AssertThrows(() => FormFieldEventOperations.ExecuteMoveFields(MakeForm(), Op("""{"tab":"general","section":"info"}""")),
            "move_fields requires 'fields' array");
        AssertThrows(() => FormFieldEventOperations.ExecuteMoveFields(MakeForm(), Op("""{"tab":"general","section":"info","fields":[]}""")),
            "at least one field name");
        AssertThrows(() => FormFieldEventOperations.ExecuteMoveFields(MakeForm(), Op("""{"tab":"nope","section":"info","fields":["name"]}""")),
            "Tab 'nope' not found");
        AssertThrows(() => FormFieldEventOperations.ExecuteMoveFields(MakeForm(), Op("""{"tab":"general","section":"nope","fields":["name"]}""")),
            "Section 'nope' not found in tab 'general'");
        AssertThrows(() => FormFieldEventOperations.ExecuteMoveFields(MakeForm(), Op("""{"tab":"general","section":"info","target_tab":"nope2","fields":["name"]}""")),
            "Target tab 'nope2' not found");
        AssertThrows(() => FormFieldEventOperations.ExecuteMoveFields(MakeForm(), Op("""{"tab":"general","section":"info","target_section":"nope2","fields":["name"]}""")),
            "Target section 'nope2' not found in tab 'general'");
    }

    [TestMethod]
    public void AddHeaderFields_CreatesHeaderAndAddsCells()
    {
        var ops = CreateOps();
        var form = MakeForm();
        var result = ops.ExecuteAddHeaderFields(form, Op("""
        { "fields": ["name", "revenue"] }
        """), AttrMap, new Dictionary<string, string>());

        StringAssert.Contains(result, "add_header_fields");
        var header = form.Root.Element("header");
        Assert.IsNotNull(header, "header must be created");
        Assert.AreEqual(2, header.Element("rows").Descendants("control").Count());
    }

    [TestMethod]
    public void AddHeaderFields_ErrorPaths_Throw()
    {
        var ops = CreateOps();
        AssertThrows(() => ops.ExecuteAddHeaderFields(MakeForm(), Op("{}"), AttrMap, new Dictionary<string, string>()),
            "add_header_fields requires 'fields' array");
        AssertThrows(() => ops.ExecuteAddHeaderFields(MakeForm(), Op("""{"fields":[]}"""), AttrMap, new Dictionary<string, string>()),
            "add_header_fields requires at least one field");
    }

    [TestMethod]
    public void AddLibrary_AddsThenSkipsDuplicate()
    {
        var form = MakeForm();
        StringAssert.Contains(FormFieldEventOperations.ExecuteAddLibrary(form, Op("""{"library":"new_/js/util.js"}""")),
            "added to formLibraries");
        StringAssert.Contains(FormFieldEventOperations.ExecuteAddLibrary(form, Op("""{"library":"new_/js/util.js"}""")),
            "already exists in formLibraries (skipped)");
        Assert.AreEqual(1, form.Root.Element("formLibraries").Elements("Library").Count());
    }

    [TestMethod]
    public void RemoveLibrary_HandlesMissingNotFoundAndDependencyRemoval()
    {
        AssertThrows(() => FormFieldEventOperations.ExecuteRemoveLibrary(MakeForm(), Op("{}")),
            "remove_library requires 'library_name'");

        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveLibrary(MakeForm(), Op("""{"library":"nope.js"}""")),
            "no formLibraries element found");

        var form = MakeForm();
        FormFieldEventOperations.ExecuteAddLibrary(form, Op("""{"library":"new_/js/util.js"}"""));
        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveLibrary(form, Op("""{"library":"other.js"}""")),
            "not found. Available: new_/js/util.js");

        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveLibrary(form, Op("""{"library":"new_/js/util.js"}""")),
            "remove_library: \"new_/js/util.js\" removed");
    }

    [TestMethod]
    public void AddEvent_OnFormTabAndFieldTargets()
    {
        var form = MakeForm();

        StringAssert.Contains(FormFieldEventOperations.ExecuteAddEvent(form, Op("""
        { "event": "OnLoad", "function": "onLoadFn", "library": "new_/js/util.js", "parameters": "a,b", "enabled": false }
        """)), "add_event");

        StringAssert.Contains(FormFieldEventOperations.ExecuteAddEvent(form, Op("""
        { "event": "OnChange", "function": "tabFn", "library": "new_/js/util.js", "target": "tab:general" }
        """)), "add_event");

        StringAssert.Contains(FormFieldEventOperations.ExecuteAddEvent(form, Op("""
        { "event": "OnChange", "function": "fieldFn", "library": "new_/js/util.js", "target": "field:name" }
        """)), "add_event");

        AssertThrows(() => FormFieldEventOperations.ExecuteAddEvent(form, Op("""
        { "event": "OnChange", "function": "fn2", "library": "new_/js/util.js", "target": "tab:nope" }
        """)), "Tab 'nope' not found");

        AssertThrows(() => FormFieldEventOperations.ExecuteAddEvent(form, Op("""{"event":"OnLoad"}""")),
            "add_event requires");
    }

    [TestMethod]
    public void RemoveEvent_NoEventsNotFoundAndHandlerRemoval()
    {
        AssertThrows(() => FormFieldEventOperations.ExecuteRemoveEvent(MakeForm(), Op("{}")),
            "remove_event requires");

        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveEvent(MakeForm(), Op("""{"event":"OnLoad"}""")),
            "no events element found on form");

        var form = MakeForm();
        FormFieldEventOperations.ExecuteAddEvent(form, Op("""
        { "event": "OnLoad", "function": "onLoadFn", "library": "new_/js/util.js" }
        """));

        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveEvent(form, Op("""
        { "event": "OnSave", "target": "field:name" }
        """)), "event \"onsave\" not found on field:name");

        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveEvent(form, Op("""{"event":"OnSave"}""")),
            "event \"onsave\" not found on form");

        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveEvent(form, Op("""
        { "event": "OnLoad", "function": "onLoadFn", "library": "new_/js/util.js" }
        """)), "remove_event");
    }

    [TestMethod]
    public void RemoveEvent_TabTarget_NotFoundReportsTabName()
    {
        var form = MakeForm();
        FormFieldEventOperations.ExecuteAddEvent(form, Op("""
        { "event": "OnChange", "function": "tabFn", "library": "new_/js/util.js", "target": "tab:general" }
        """));

        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveEvent(form, Op("""
        { "event": "OnLoad", "target": "tab:general" }
        """)), "event \"onload\" not found on tab:general");

        AssertThrows(() => FormFieldEventOperations.ExecuteRemoveEvent(form, Op("""
        { "event": "OnLoad", "target": "tab:nope" }
        """)), "Tab 'nope' not found");
    }
}
