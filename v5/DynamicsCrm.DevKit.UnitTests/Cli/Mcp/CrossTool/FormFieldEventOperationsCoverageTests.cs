using DynamicsCrm.DevKit.Cli.Mcp.Tools.Form;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.CrossTool;

[TestClass]
public sealed class FormFieldEventOperationsCoverageTests
{
    [TestMethod]
    public void AddAndUpdateFields_CoversMetadataAndAllCellOptions()
    {
        var form = FormWithSection("source", "details", columns: "2");
        var operations = new FormFieldEventOperations(null!, new FormXmlBuilder(null!));
        var attributes = Attributes("name");
        var classIds = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);

        using var addJson = JsonDocument.Parse("""
        {
          "tab": "source",
          "section": "details",
          "position": "first",
          "fields": [
            { "field": "name", "label": "Display Name", "disabled": true, "visible": false,
              "colspan": 2, "rowspan": 2, "showlabel": false, "hide_on_phone": true }
          ]
        }
        """);

        StringAssert.Contains(operations.ExecuteAddFields(form, addJson.RootElement, attributes, classIds),
            "add_fields: 1 field(s)");
        StringAssert.Contains(form.ToString(), "datafieldname=\"name\"");
        StringAssert.Contains(form.ToString(), "availableforphone=\"false\"");

        using var updateJson = JsonDocument.Parse("""
        {
          "fields": [
            { "field": "name", "label": "Updated", "visible": false, "showlabel": false,
              "hide_on_phone": true, "disabled": true, "colspan": 2, "rowspan": 2 },
            { "field": "not_on_form" },
            {}
          ]
        }
        """);

        StringAssert.Contains(operations.ExecuteUpdateFields(form, updateJson.RootElement, attributes, classIds),
            "1 field(s) updated (name)");

        using var clearJson = JsonDocument.Parse("""
        {
          "fields": [
            { "field": "name", "visible": true, "showlabel": true, "hide_on_phone": false,
              "disabled": false, "colspan": 1, "rowspan": 1 }
          ]
        }
        """);

        operations.ExecuteUpdateFields(form, clearJson.RootElement, attributes, classIds);
        var cell = form.Root!.Descendants("cell").First();
        Assert.IsNull(cell.Attribute("visible"));
        Assert.AreEqual("true", cell.Attribute("showlabel")!.Value);
        Assert.IsNull(cell.Attribute("availableforphone"));
        Assert.IsNull(cell.Element("control")!.Attribute("disabled"));
        Assert.IsNull(cell.Attribute("colspan"));
        Assert.IsNull(cell.Attribute("rowspan"));

        using var invalidJson = JsonDocument.Parse("{}");
        Throws<InvalidOperationException>(() => operations.ExecuteAddFields(form, invalidJson.RootElement, attributes, classIds));
        Throws<InvalidOperationException>(() => operations.ExecuteUpdateFields(form, invalidJson.RootElement, attributes, classIds));
    }

    [TestMethod]
    public void AddAndUpdateHeaderFields_CoversCreationExistingRowsAndNoHeader()
    {
        var operations = new FormFieldEventOperations(null!, new FormXmlBuilder(null!));
        var attributes = Attributes("name");
        var classIds = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
        var form = XDocument.Parse("<form><tabs /></form>");

        using var addJson = JsonDocument.Parse("""
        {
          "fields": [
            { "field": "name", "label": "Header Name", "visible": false, "showlabel": false,
              "disabled": true, "colspan": 2, "rowspan": 2, "hide_on_phone": true }
          ]
        }
        """);
        StringAssert.Contains(operations.ExecuteAddHeaderFields(form, addJson.RootElement, attributes, classIds),
            "add_header_fields: 1 field(s)");

        using var updateJson = JsonDocument.Parse("""
        {
          "fields": [
            { "field": "name", "label": "Header Updated", "visible": false, "showlabel": false,
              "hide_on_phone": true, "disabled": true, "colspan": 2, "rowspan": 2 },
            { "field": "missing" },
            {}
          ]
        }
        """);
        StringAssert.Contains(operations.ExecuteUpdateHeaderFields(form, updateJson.RootElement, attributes, classIds),
            "1 field(s) updated (name)");

        using var clearJson = JsonDocument.Parse("""
        {
          "fields": [
            { "field": "name", "visible": true, "showlabel": true, "hide_on_phone": false,
              "disabled": false, "colspan": 1, "rowspan": 1 }
          ]
        }
        """);
        operations.ExecuteUpdateHeaderFields(form, clearJson.RootElement, attributes, classIds);

        var noHeader = XDocument.Parse("<form />");
        StringAssert.Contains(operations.ExecuteUpdateHeaderFields(noHeader, clearJson.RootElement, attributes, classIds),
            "has no header");

        using var emptyJson = JsonDocument.Parse("{\"fields\":[]}");
        Throws<InvalidOperationException>(() => operations.ExecuteAddHeaderFields(form, emptyJson.RootElement, attributes, classIds));
        Throws<InvalidOperationException>(() => operations.ExecuteUpdateHeaderFields(form, emptyJson.RootElement, attributes, classIds));
        using var missingFieldJson = JsonDocument.Parse("{\"fields\":[{\"field\":\"missing\"}]}");
        Throws<InvalidOperationException>(() => operations.ExecuteAddHeaderFields(form, missingFieldJson.RootElement, attributes, classIds));
    }

    [TestMethod]
    public void RemoveAndMoveFields_CoversPartialRowsDeletedRowsAndNotFoundSummaries()
    {
        var form = XDocument.Parse("""
        <form><tabs>
          <tab name="source"><columns><column><sections><section name="from" columns="2"><rows>
            <row><cell><control datafieldname="one" /></cell><cell><control datafieldname="two" /></cell></row>
            <row><cell><control datafieldname="three" /></cell></row>
          </rows></section></sections></column></columns></tab>
          <tab name="target"><columns><column><sections><section name="to" columns="2" /></sections></column></columns></tab>
        </tabs></form>
        """);

        using var removePartial = JsonDocument.Parse("""
        { "tab": "source", "section": "from", "fields": ["one", "missing"] }
        """);
        var removeResult = FormFieldEventOperations.ExecuteRemoveFields(form, removePartial.RootElement);
        StringAssert.Contains(removeResult, "1 field(s) removed");
        StringAssert.Contains(removeResult, "not found: [missing]");

        using var removeRow = JsonDocument.Parse("""
        { "tab": "source", "section": "from", "fields": ["two", "three"] }
        """);
        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveFields(form, removeRow.RootElement),
            "2 field(s) removed");

        using var move = JsonDocument.Parse("""
        {
          "tab": "source", "section": "from", "target_tab": "target", "target_section": "to",
          "position": "first", "fields": ["one", { "field": "missing" }]
        }
        """);
        StringAssert.Contains(FormFieldEventOperations.ExecuteMoveFields(form, move.RootElement),
            "0 field(s) moved");

        var moveForm = XDocument.Parse("""
        <form><tabs>
          <tab name="source"><columns><column><sections><section name="from"><rows>
            <row><cell><control datafieldname="one" /></cell><cell><control datafieldname="two" /></cell></row>
          </rows></section></sections></column></columns></tab>
          <tab name="target"><columns><column><sections><section name="to" columns="2" /></sections></column></columns></tab>
        </tabs></form>
        """);
        using var moveOne = JsonDocument.Parse("""
        {
          "tab": "source", "section": "from", "target_tab": "target", "target_section": "to",
          "position": "last", "fields": ["one", { "field": "absent" }]
        }
        """);
        var movedResult = FormFieldEventOperations.ExecuteMoveFields(moveForm, moveOne.RootElement);
        StringAssert.Contains(movedResult, "1 field(s) moved");
        StringAssert.Contains(movedResult, "not found: [absent]");
        Assert.IsNotNull(moveForm.Root!.Descendants("section").Last().Element("rows"));

        using var moveTwo = JsonDocument.Parse("""
        { "tab": "source", "section": "from", "target_tab": "target", "target_section": "to", "fields": ["two"] }
        """);
        StringAssert.Contains(FormFieldEventOperations.ExecuteMoveFields(moveForm, moveTwo.RootElement),
            "1 field(s) moved");

        var noRows = XDocument.Parse("<form><tabs><tab name='t'><columns><column><sections><section name='s' /></sections></column></columns></tab></tabs></form>");
        using var noRowsJson = JsonDocument.Parse("{\"tab\":\"t\",\"section\":\"s\",\"fields\":[\"name\"]}");
        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveFields(noRows, noRowsJson.RootElement), "no rows");
        StringAssert.Contains(FormFieldEventOperations.ExecuteMoveFields(noRows, noRowsJson.RootElement), "no rows");

        using var invalidJson = JsonDocument.Parse("{}");
        Throws<InvalidOperationException>(() => FormFieldEventOperations.ExecuteRemoveFields(noRows, invalidJson.RootElement));
        Throws<InvalidOperationException>(() => FormFieldEventOperations.ExecuteMoveFields(noRows, invalidJson.RootElement));
    }

    [TestMethod]
    public void HeaderRemoval_CoversMissingHeaderRowsSpacersAndMissingFields()
    {
        using var fieldsJson = JsonDocument.Parse("{\"fields\":[\"name\",\"missing\",1]}");
        var noHeader = XDocument.Parse("<form />");
        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveHeaderFields(noHeader, fieldsJson.RootElement), "no <header>");

        var noRows = XDocument.Parse("<form><header /></form>");
        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveHeaderFields(noRows, fieldsJson.RootElement), "no rows");

        var form = XDocument.Parse("""
        <form><header><rows><row>
          <cell><control datafieldname="name" /></cell><cell />
        </row></rows></header></form>
        """);
        var result = FormFieldEventOperations.ExecuteRemoveHeaderFields(form, fieldsJson.RootElement);
        StringAssert.Contains(result, "1 field(s) removed");
        StringAssert.Contains(result, "Not found: missing");
        Assert.IsNull(form.Root!.Descendants("cell").First().Element("control"));

        using var invalidJson = JsonDocument.Parse("{\"fields\":[]}");
        Throws<InvalidOperationException>(() => FormFieldEventOperations.ExecuteRemoveHeaderFields(form, invalidJson.RootElement));
    }

    [TestMethod]
    public void LibraryLifecycle_CoversAliasesOrderingDependenciesHandlersAndNoOps()
    {
        var form = XDocument.Parse("<form><tabs /><Navigation /></form>");
        using var add = JsonDocument.Parse("{\"library\":\"lib.one\"}");
        StringAssert.Contains(FormFieldEventOperations.ExecuteAddLibrary(form, add.RootElement), "added");
        StringAssert.Contains(FormFieldEventOperations.ExecuteAddLibrary(form, add.RootElement), "already exists");
        Assert.IsTrue(form.Root!.Elements().Select(e => e.Name.LocalName).SequenceEqual(new[] { "tabs", "formLibraries", "Navigation" }));

        var noLibraries = XDocument.Parse("<form />");
        using var remove = JsonDocument.Parse("{\"libraryName\":\"lib.one\"}");
        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveLibrary(noLibraries, remove.RootElement), "no formLibraries");

        var emptyLibraries = XDocument.Parse("<form><formLibraries /></form>");
        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveLibrary(emptyLibraries, remove.RootElement), "Available: (none)");

        var dependencies = XDocument.Parse("""
        <form><formLibraries>
          <Library name="lib.one" libraryUniqueId="id-one" />
          <Library name="lib.two" />
        </formLibraries><events><event><Handlers>
          <Handler libraryName="lib.one" /><Handler libraryName="lib.two" />
        </Handlers><dependencies><dependency id="id-one" /></dependencies></event></events></form>
        """);
        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveLibrary(dependencies, remove.RootElement),
            "also removed 1 handler(s)");
        Assert.IsNull(dependencies.Root!.Descendants("Library").FirstOrDefault(l => (string)l.Attribute("name")! == "lib.one"));
        Assert.IsNull(dependencies.Root.Descendants("dependency").FirstOrDefault());

        using var removeSecond = JsonDocument.Parse("{\"library_name\":\"lib.two\"}");
        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveLibrary(dependencies, removeSecond.RootElement), "removed");
        Assert.IsNull(dependencies.Root.Element("formLibraries"));
        using var missing = JsonDocument.Parse("{}");
        Throws<InvalidOperationException>(() => FormFieldEventOperations.ExecuteAddLibrary(form, missing.RootElement));
    }

    [TestMethod]
    public void EventLifecycle_CoversFormFieldTabHandlersUpdatesAndCleanup()
    {
        var form = XDocument.Parse("<form><tabs><tab name=\"main\" /></tabs><externaldependencies /></form>");

        using var addForm = JsonDocument.Parse("""
        { "event_name": " OnLoad ", "function_name": "fn.one", "library_name": "lib.one",
          "parameters": "x", "enabled": false, "pass_execution_context": false }
        """);
        StringAssert.Contains(FormFieldEventOperations.ExecuteAddEvent(form, addForm.RootElement), "->");

        using var updateForm = JsonDocument.Parse("""
        { "eventName": "OnLoad", "functionName": "fn.one", "libraryName": "lib.one",
          "parameters": "y", "enabled": true, "passExecutionContext": true }
        """);
        StringAssert.Contains(FormFieldEventOperations.ExecuteAddEvent(form, updateForm.RootElement), "(updated)");
        StringAssert.Contains(FormFieldEventOperations.ExecuteAddEvent(form, updateForm.RootElement), "(skipped)");

        using var addField = JsonDocument.Parse("""
        { "event": "onchange", "function": "fn.field", "library": "lib.field", "target": "field:subject" }
        """);
        StringAssert.Contains(FormFieldEventOperations.ExecuteAddEvent(form, addField.RootElement), "field:subject");

        using var addTab = JsonDocument.Parse("""
        { "event": "ontabstatechange", "function": "fn.tab", "library": "lib.tab", "target": "tab:main" }
        """);
        StringAssert.Contains(FormFieldEventOperations.ExecuteAddEvent(form, addTab.RootElement), "tab:main");

        using var badTab = JsonDocument.Parse("""
        { "event": "onload", "function": "fn", "library": "lib", "target": "tab:missing" }
        """);
        Throws<InvalidOperationException>(() => FormFieldEventOperations.ExecuteAddEvent(form, badTab.RootElement));
        using var badEvent = JsonDocument.Parse("""
        { "event": "invalid", "function": "fn", "library": "lib" }
        """);
        Throws<InvalidOperationException>(() => FormFieldEventOperations.ExecuteAddEvent(form, badEvent.RootElement));

        using var removeFieldHandler = JsonDocument.Parse("""
        { "event_name": "onchange", "function_name": "fn.field", "library_name": "lib.field", "target": "field:subject" }
        """);
        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveEvent(form, removeFieldHandler.RootElement), "handler");

        using var removeTab = JsonDocument.Parse("""
        { "event": "ontabstatechange", "target": "tab:main" }
        """);
        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveEvent(form, removeTab.RootElement), "entire");

        using var missingHandler = JsonDocument.Parse("""
        { "event": "onload", "function": "missing", "target": "form" }
        """);
        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveEvent(form, missingHandler.RootElement), "Available:");

        using var removeFormHandler = JsonDocument.Parse("""
        { "eventName": "onload", "functionName": "fn.one", "target": "form" }
        """);
        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveEvent(form, removeFormHandler.RootElement), "handler");

        using var addWhole = JsonDocument.Parse("""
        { "event": "onsave", "function": "fn.save", "library": "lib.save" }
        """);
        FormFieldEventOperations.ExecuteAddEvent(form, addWhole.RootElement);
        using var removeWhole = JsonDocument.Parse("{\"event\":\"onsave\"}");
        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveEvent(form, removeWhole.RootElement), "entire");

        var noHandlers = XDocument.Parse("<form><events><event name=\"onsave\" /></events></form>");
        using var removeNoHandlers = JsonDocument.Parse("{\"event\":\"onsave\",\"function\":\"fn\"}");
        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveEvent(noHandlers, removeNoHandlers.RootElement), "no handlers");

        using var missingEvents = JsonDocument.Parse("{\"event\":\"onsave\"}");
        StringAssert.Contains(FormFieldEventOperations.ExecuteRemoveEvent(XDocument.Parse("<form />"), missingEvents.RootElement), "no events");
        using var missingTab = JsonDocument.Parse("{\"event\":\"onsave\",\"target\":\"tab:missing\"}");
        Throws<InvalidOperationException>(() => FormFieldEventOperations.ExecuteRemoveEvent(form, missingTab.RootElement));
        using var missingRequired = JsonDocument.Parse("{}");
        Throws<InvalidOperationException>(() => FormFieldEventOperations.ExecuteAddEvent(form, missingRequired.RootElement));
        Throws<InvalidOperationException>(() => FormFieldEventOperations.ExecuteRemoveEvent(form, missingRequired.RootElement));
    }

    private static XDocument FormWithSection(string tabName, string sectionName, string columns)
        => XDocument.Parse($"<form><tabs><tab name=\"{tabName}\"><columns><column><sections><section name=\"{sectionName}\" columns=\"{columns}\"><rows /></section></sections></column></columns></tab></tabs></form>");

    private static Dictionary<string, AttributeMetadata> Attributes(string fieldName)
        => new(StringComparer.OrdinalIgnoreCase)
        {
            [fieldName] = new StringAttributeMetadata
            {
                LogicalName = fieldName,
                DisplayName = new Label("Default Label", 1033)
            }
        };

    private static T Throws<T>(Action action) where T : Exception
    {
        try
        {
            action();
        }
        catch (T exception)
        {
            return exception;
        }

        Assert.Fail($"Expected {typeof(T).Name}.");
        return null!;
    }
}
