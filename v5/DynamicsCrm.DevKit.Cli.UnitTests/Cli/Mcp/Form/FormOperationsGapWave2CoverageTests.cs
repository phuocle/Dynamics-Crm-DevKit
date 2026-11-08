using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Form;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Xml.Linq;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Form;

/// <summary>
/// Wave-2 gap coverage for the form operation helpers: subgrid insertion
/// positions and the rows/parameters defaults, tab/section creation into
/// documents missing their container elements, the section move column
/// detection, the form library/events schema-order repairs, the header
/// field guards, the image backing-field alias in the attribute map and
/// the FormXmlHelpers class-id/insert/hint helpers.
///
/// NOTE (dead code — not coverable):
/// - FormTabSectionOperations.ExecuteMoveTab ~202-203 ("Tab has no parent
///   &lt;tabs&gt; element."): FindTab only returns tabs nested inside
///   &lt;tabs&gt;, so the parent is never null.
/// - FormFieldMetadata.BuildFieldCandidates ~218-227 (alias candidates):
///   the attribute map is keyed by logical name at the only call site —
///   display-name aliases are added after the candidates were built.
/// - FormFieldEventOperations.EnsureEventsElement ~989-992 (child
///   formparameters/externaldependencies insert point): non-root targets
///   (tabs) never carry those children.
/// - FormFieldEventOperations.EnsureEventsElement ~985 (bare root append):
///   ExecuteAddEvent always runs EnsureLibrary first, which guarantees a
///   formLibraries element exists — the root-level insert-before branch
///   always finds one.
/// - PluginItemTemplateHandler — see the Templates gap tests.
/// </summary>
[TestClass]
public sealed class FormOperationsGapWave2CoverageTests
{
    private FakeSdkClient _fake = null!;
    private EntityMetadata _account = null!;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _account = TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Account Name"));
        _fake.OnExecute = request => request switch
        {
            RetrieveEntityRequest => new RetrieveEntityResponse { Results = { ["EntityMetadata"] = _account } },
            _ => new OrganizationResponse()
        };
        _fake.OnRetrieve = (entityName, id, columnSet) =>
            new Entity("systemform", id) { ["name"] = "Account Form", ["formxml"] = "<form />" };
    }

    public void Dispose() => _fake.Dispose();

    private static JsonElement Op(string json) => JsonSerializer.Deserialize<JsonElement>(json);

    private static Dictionary<string, AttributeMetadata> AttrMap() =>
        new(StringComparer.OrdinalIgnoreCase) { ["name"] = TestMetadata.String("name", "Account Name") };

    private const string SubgridBaseForm =
        "<form><tabs><tab name=\"general\" id=\"{8e1d2a1c-1111-4a4a-9a9a-111111111111}\">" +
        "<columns><column width=\"100%\"><sections>" +
        "<section name=\"section1\" showlabel=\"false\" id=\"{8e1d2a1c-2222-4a4a-9a9a-222222222222}\">" +
        "<labels><label description=\"General\" languagecode=\"1033\" /></labels>" +
        "<rows>" +
        "<row><cell id=\"{8e1d2a1c-3333-4a4a-9a9a-333333333333}\" showlabel=\"false\">" +
        "<labels><label description=\"Account Name\" languagecode=\"1033\" /></labels>" +
        "<control id=\"name\" classid=\"{4273edbd-ac1d-40d3-9fb2-095c6217197a}\" datafieldname=\"name\" /></cell></row>" +
        "</rows>" +
        "</section>" +
        "</sections></column></columns>" +
        "</tab></tabs></form>";

    private static JsonElement AddSubgridOp(string extra = "") => Op($$"""
{
  "tab": "general",
  "section": "section1",
  "label": "Contacts",
  "control_id": "subgrid_contacts",
  "relationship_name": "account_primary_contact",
  "target_entity": "contact",
  "view_id": "{2B2B2B2B-2222-2222-2222-222222222222}"{{extra}}
}
""");

    // ── FormSubgridOperations ────────────────────────────────────────────

    [TestMethod]
    public void AddSubgrid_WithoutServiceAndViewId_RequiresViewId()
    {
        var ops = new FormSubgridOperations(null!);
        var error = Assert.ThrowsExactly<InvalidOperationException>(() =>
            ops.ExecuteAddSubgrid(XDocument.Parse(SubgridBaseForm),
                Op("""{"tab":"general","section":"section1","label":"C","control_id":"g1","relationship_name":"r","target_entity":"contact"}""")));
        StringAssert.Contains(error.Message, "view_id is required when no Dataverse service client is available");
    }

    [TestMethod]
    public void AddSubgrid_InvalidViewIdGuid_IsRejected()
    {
        var ops = new FormSubgridOperations(_fake.Client);
        var error = Assert.ThrowsExactly<InvalidOperationException>(() =>
            ops.ExecuteAddSubgrid(XDocument.Parse(SubgridBaseForm),
                Op("""{"tab":"general","section":"section1","label":"C","control_id":"g1","relationship_name":"r","target_entity":"contact","view_id":"not-a-guid"}""")));
        StringAssert.Contains(error.Message, "view_id 'not-a-guid' is not a valid GUID");
    }

    [TestMethod]
    public void AddSubgrid_SectionWithoutRows_CreatesRowsElement()
    {
        const string noRowsForm =
            "<form><tabs><tab name=\"general\"><columns><column width=\"100%\"><sections>" +
            "<section name=\"section1\" showlabel=\"false\"><labels><label description=\"G\" languagecode=\"1033\" /></labels>" +
            "</section></sections></column></columns></tab></tabs></form>";
        var doc = XDocument.Parse(noRowsForm);
        var ops = new FormSubgridOperations(_fake.Client);

        var summary = ops.ExecuteAddSubgrid(doc, AddSubgridOp());

        StringAssert.Contains(summary, "add_subgrid");
        Assert.IsNotNull(doc.Descendants("control").First(c => c.Attribute("id")?.Value == "subgrid_contacts"));
    }

    [TestMethod]
    public void AddSubgrid_PositionVariants_InsertRowRelatively()
    {
        var ops = new FormSubgridOperations(_fake.Client);

        var afterFound = XDocument.Parse(SubgridBaseForm);
        ops.ExecuteAddSubgrid(afterFound, AddSubgridOp(", \"position\": \"after:name\""));
        var rowsAfter = afterFound.Descendants("section").First().Element("rows")!.Elements("row").ToList();
        Assert.AreEqual("name", rowsAfter[0].Descendants("control").First().Attribute("datafieldname")?.Value);
        Assert.AreEqual("subgrid_contacts", rowsAfter[1].Descendants("control").First().Attribute("id")?.Value);

        var afterMissing = XDocument.Parse(SubgridBaseForm);
        ops.ExecuteAddSubgrid(afterMissing, AddSubgridOp(", \"position\": \"after:missing_field\""));
        var rowsAfterMissing = afterMissing.Descendants("section").First().Element("rows")!.Elements("row").ToList();
        Assert.AreEqual("subgrid_contacts", rowsAfterMissing.Last().Descendants("control").First().Attribute("id")?.Value);

        var beforeFound = XDocument.Parse(SubgridBaseForm);
        ops.ExecuteAddSubgrid(beforeFound, AddSubgridOp(", \"position\": \"before:name\""));
        var rowsBefore = beforeFound.Descendants("section").First().Element("rows")!.Elements("row").ToList();
        Assert.AreEqual("subgrid_contacts", rowsBefore[0].Descendants("control").First().Attribute("id")?.Value);

        var beforeMissing = XDocument.Parse(SubgridBaseForm);
        ops.ExecuteAddSubgrid(beforeMissing, AddSubgridOp(", \"position\": \"before:missing_field\""));
        var rowsBeforeMissing = beforeMissing.Descendants("section").First().Element("rows")!.Elements("row").ToList();
        Assert.AreEqual("subgrid_contacts", rowsBeforeMissing.Last().Descendants("control").First().Attribute("id")?.Value);

        var first = XDocument.Parse(SubgridBaseForm);
        ops.ExecuteAddSubgrid(first, AddSubgridOp(", \"position\": \"first\""));
        var rowsFirst = first.Descendants("section").First().Element("rows")!.Elements("row").ToList();
        Assert.AreEqual("subgrid_contacts", rowsFirst[0].Descendants("control").First().Attribute("id")?.Value);
    }

    [TestMethod]
    public void UpdateSubgrid_RemovesVisibleFlagAndCreatesParameters()
    {
        const string withVisible =
            "<form><tabs><tab name=\"general\"><columns><column width=\"100%\"><sections>" +
            "<section name=\"s1\"><rows>" +
            "<row><cell id=\"{8e1d2a1c-3333-4a4a-9a9a-333333333333}\" visible=\"false\">" +
            "<labels /><control id=\"sub1\" classid=\"{E7A81278-8635-4d9e-8d4a-707e585e9c5c}\">" +
            "<parameters><TargetEntityType>contact</TargetEntityType></parameters>" +
            "</control></cell></row>" +
            "</rows></section>" +
            "</sections></column></columns></tab></tabs></form>";
        var doc = XDocument.Parse(withVisible);

        var summary = FormSubgridOperations.ExecuteUpdateSubgrid(doc, Op("""
        { "control_id": "sub1", "visible": true, "rows_per_page": 25, "enable_view_picker": true }
        """));

        StringAssert.Contains(summary, "update_subgrid");
        var cell = doc.Descendants("cell").First();
        Assert.IsNull(cell.Attribute("visible"), "visible=true removes the attribute.");
        Assert.AreEqual("25", cell.Descendants("RecordsPerPage").First().Value);
        Assert.AreEqual("true", cell.Descendants("EnableViewPicker").First().Value);
    }

    [TestMethod]
    public void UpdateSubgrid_ControlWithoutParameters_CreatesParameters()
    {
        const string withoutParameters =
            "<form><tabs><tab name=\"general\"><columns><column width=\"100%\"><sections>" +
            "<section name=\"s1\"><rows>" +
            "<row><cell id=\"{8e1d2a1c-3333-4a4a-9a9a-333333333333}\"><labels />" +
            "<control id=\"sub1\" classid=\"{E7A81278-8635-4d9e-8d4a-707e585e9c5c}\" /></cell></row>" +
            "</rows></section>" +
            "</sections></column></columns></tab></tabs></form>";
        var doc = XDocument.Parse(withoutParameters);

        FormSubgridOperations.ExecuteUpdateSubgrid(doc, Op("""{ "control_id": "sub1", "rows_per_page": 50 }"""));

        var control = doc.Descendants("control").First(c => c.Attribute("id")?.Value == "sub1");
        Assert.IsNotNull(control.Element("parameters"));
        Assert.AreEqual("50", control.Element("parameters")!.Element("RecordsPerPage")!.Value);
    }

    // ── FormTabSectionOperations ─────────────────────────────────────────

    [TestMethod]
    public void AddTab_FormWithoutTabs_CreatesTabsElement()
    {
        var doc = XDocument.Parse("<form />");
        var ops = new FormTabSectionOperations(_fake.Client, new FormXmlBuilder(_fake.Client));

        var summary = ops.ExecuteAddTab(doc, Op(
            """{"label":"Details","name":"details","sections":[{"label":"Info","fields":[{"field":"name"}]}]}"""),
            AttrMap(), new Dictionary<string, string>());

        StringAssert.Contains(summary, "add_tab");
        Assert.IsNotNull(doc.Root!.Element("tabs"));
        Assert.IsNotNull(doc.Root.Element("tabs")!.Element("tab"));
    }

    [TestMethod]
    public void AddSection_ColumnWithoutSections_CreatesSectionsElement()
    {
        const string emptyColumn =
            "<form><tabs><tab name=\"general\"><columns><column width=\"100%\" /></columns></tab></tabs></form>";
        var doc = XDocument.Parse(emptyColumn);
        var ops = new FormTabSectionOperations(_fake.Client, new FormXmlBuilder(_fake.Client));

        var summary = ops.ExecuteAddSection(doc, Op(
            """{"tab":"general","label":"Info","fields":[{"field":"name"}]}"""),
            AttrMap(), new Dictionary<string, string>());

        StringAssert.Contains(summary, "add_section");
        Assert.IsNotNull(doc.Descendants("section").First());
    }

    [TestMethod]
    public void MoveSection_SameTabAcrossColumns_LandsInSectionColumn()
    {
        // A same-tab move repositions the section within its OWN column
        // (the loop resolves the target column from the section's home).
        const string twoColumns =
            "<form><tabs><tab name=\"general\"><columns>" +
            "<column width=\"50%\"><sections>" +
            "<section name=\"intro\" showlabel=\"false\"><labels /><rows /></section>" +
            "<section name=\"details\" showlabel=\"false\"><labels /><rows /></section>" +
            "</sections></column>" +
            "<column width=\"50%\"><sections><section name=\"other\" showlabel=\"false\"><labels /><rows /></section></sections></column>" +
            "</columns></tab></tabs></form>";
        var doc = XDocument.Parse(twoColumns);

        var summary = FormTabSectionOperations.ExecuteMoveSection(doc, Op(
            """{"tab":"general","section":"details","position":"first"}"""));

        StringAssert.Contains(summary, "move_section");
        var columns = doc.Descendants("tab").First().Element("columns")!.Elements("column").ToList();
        var homeColumnSections = columns[0].Descendants("section")
            .Select(s => s.Attribute("name")?.Value).ToList();
        CollectionAssert.AreEqual(new[] { "details", "intro" }, homeColumnSections);
        Assert.AreEqual("other", columns[1].Descendants("section").First().Attribute("name")?.Value);
    }

    [TestMethod]
    public void MoveSection_TargetColumnWithoutSections_CreatesSections()
    {
        const string secondColumnEmpty =
            "<form><tabs><tab name=\"general\"><columns>" +
            "<column width=\"50%\"><sections><section name=\"details\" showlabel=\"false\"><labels /><rows /></section></sections></column>" +
            "<column width=\"50%\" />" +
            "</columns></tab></tabs></form>";
        var doc = XDocument.Parse(secondColumnEmpty);

        var summary = FormTabSectionOperations.ExecuteMoveSection(doc, Op(
            """{"tab":"general","section":"details","position":"last","target_tab":"general","tab_column":2}"""));

        StringAssert.Contains(summary, "move_section");
        var columns = doc.Descendants("tab").First().Element("columns")!.Elements("column").ToList();
        Assert.AreEqual("details", columns[1].Descendants("section").First().Attribute("name")?.Value);
        Assert.AreEqual(0, columns[0].Descendants("section").Count());
    }

    // ── FormFieldEventOperations ─────────────────────────────────────────

    [TestMethod]
    public void AddLibrary_MinimalForm_AppendsFormLibraries()
    {
        var doc = XDocument.Parse("<form><forms><form id=\"{8e1d2a1c-6666-4a4a-9a9a-666666666666}\" /></forms></form>");

        var summary = FormFieldEventOperations.ExecuteAddLibrary(doc, Op(
            """{"library_name":"devkit_/actions.js"}"""));

        StringAssert.Contains(summary, "add_library");
        var formLibraries = doc.Root!.Element("formLibraries");
        Assert.IsNotNull(formLibraries);
        Assert.AreEqual("devkit_/actions.js", formLibraries.Elements("Library").First().Attribute("name")?.Value);
    }

    [TestMethod]
    public void AddEvent_MinimalForm_AppendsEventsElement()
    {
        var doc = XDocument.Parse("<form><forms><form id=\"{8e1d2a1c-6666-4a4a-9a9a-666666666666}\" /></forms></form>");

        var summary = FormFieldEventOperations.ExecuteAddEvent(doc, Op(
            """{"event_name":"onload","function_name":"Actions.run","library_name":"devkit_/actions.js"}"""));

        StringAssert.Contains(summary, "add_event");
        Assert.IsNotNull(doc.Root!.Element("events"));
        Assert.IsNotNull(doc.Root.Element("events")!.Descendants("Handler").First());
    }

    [TestMethod]
    public void AddEvent_RootChildrenOutOfSchemaOrder_AreRepaired()
    {
        // clientresources sits before events and formLibraries — the repair
        // moves formLibraries after events, then events in front of
        // clientresources, ending at the schema order.
        var doc = XDocument.Parse(
            "<form><clientresources />" +
            "<formLibraries><Library name=\"devkit_/old.js\" libraryUniqueId=\"{8e1d2a1c-7777-4a4a-9a9a-777777777777}\" /></formLibraries>" +
            "<events><event name=\"onsave\" application=\"false\" active=\"false\" eventType=\"ControlEvent\" /></events>" +
            "<tabs /></form>");

        var summary = FormFieldEventOperations.ExecuteAddEvent(doc, Op(
            """{"event_name":"onload","function_name":"Actions.run","library_name":"devkit_/actions.js"}"""));

        StringAssert.Contains(summary, "add_event");
        var names = doc.Root!.Elements().Select(e => e.Name.LocalName).ToList();
        CollectionAssert.AreEqual(new[] { "events", "clientresources", "formLibraries", "tabs" }, names);
    }

    [TestMethod]
    public void AddLibrary_FormLibrariesAfterClientResources_IsReordered()
    {
        var doc = XDocument.Parse(
            "<form><events><event name=\"onload\" application=\"false\" active=\"false\" eventType=\"ControlEvent\" /></events>" +
            "<clientresources /><formLibraries><Library name=\"devkit_/old.js\" libraryUniqueId=\"{8e1d2a1c-7777-4a4a-9a9a-777777777777}\" /></formLibraries>" +
            "<tabs /></form>");

        var summary = FormFieldEventOperations.ExecuteAddLibrary(doc, Op(
            """{"library_name":"devkit_/actions.js"}"""));

        StringAssert.Contains(summary, "add_library");
        // formLibraries was moved between events and clientresources.
        var names = doc.Root!.Elements().Select(e => e.Name.LocalName).ToList();
        CollectionAssert.AreEqual(new[] { "events", "formLibraries", "clientresources", "tabs" }, names);
    }

    [TestMethod]
    public void AddEvent_ExistingHandlerWithoutDependency_AddsDependency()
    {
        var doc = XDocument.Parse(
            "<form><events><event name=\"onload\" application=\"false\" active=\"true\" eventType=\"ControlEvent\">" +
            "<Handlers><Handler functionName=\"Actions.run\" libraryName=\"devkit_/actions.js\" handlerUniqueId=\"{8e1d2a1c-8888-4a4a-9a9a-888888888888}\" enabled=\"false\" passExecutionContext=\"false\">" +
            "<dependencies><dependency id=\"{8e1d2a1c-9999-4a4a-9a9a-999999999999}\" /></dependencies>" +
            "</Handler></Handlers></event></events></form>");

        var summary = FormFieldEventOperations.ExecuteAddEvent(doc, Op(
            """{"event_name":"onload","function_name":"Actions.run","library_name":"devkit_/actions.js","enabled":true,"pass_execution_context":true}"""));

        StringAssert.Contains(summary, "add_event");
        var handler = doc.Descendants("Handler").First();
        Assert.AreEqual("true", handler.Attribute("enabled")?.Value);
        Assert.AreEqual(2, handler.Element("dependencies")!.Elements("dependency").Count());
    }

    [TestMethod]
    public void AddHeaderFields_HeaderRowsWithoutRow_CreatesFirstRow()
    {
        var doc = XDocument.Parse(
            "<form><header id=\"{8e1d2a1c-4444-4a4a-9a9a-444444444444}\" celllabelposition=\"Top\" columns=\"111\" labelwidth=\"115\" celllabelalignment=\"Left\">" +
            "<rows /></header><tabs /></form>");
        var ops = new FormFieldEventOperations(_fake.Client, new FormXmlBuilder(_fake.Client));

        var summary = ops.ExecuteAddHeaderFields(doc, Op(
            """{"fields":[{"field":"name"}]}"""), AttrMap(), new Dictionary<string, string>());

        StringAssert.Contains(summary, "add_header_fields: 1 field(s)");
        Assert.IsNotNull(doc.Descendants("control").First(c => c.Attribute("datafieldname")?.Value == "name"));
    }

    [TestMethod]
    public void UpdateHeaderFields_FieldsNotArray_IsRejected()
    {
        var doc = XDocument.Parse("<form><header id=\"{8e1d2a1c-4444-4a4a-9a9a-444444444444}\"><rows /></header></form>");
        var ops = new FormFieldEventOperations(_fake.Client, new FormXmlBuilder(_fake.Client));

        var error = Assert.ThrowsExactly<InvalidOperationException>(() =>
            ops.ExecuteUpdateHeaderFields(doc, Op("""{"fields":"name"}"""), AttrMap(), new Dictionary<string, string>()));
        StringAssert.Contains(error.Message, "update_header requires 'fields' array");
    }

    [TestMethod]
    public void RemoveHeaderFields_FieldsNotArray_IsRejected()
    {
        var doc = XDocument.Parse("<form><header id=\"{8e1d2a1c-4444-4a4a-9a9a-444444444444}\"><rows /></header></form>");

        var error = Assert.ThrowsExactly<InvalidOperationException>(() =>
            FormFieldEventOperations.ExecuteRemoveHeaderFields(doc, Op("""{"fields":"name"}""")));
        StringAssert.Contains(error.Message, "remove_header_fields requires 'fields' array");
    }

    // ── FormFieldMetadata ────────────────────────────────────────────────

    [TestMethod]
    public void LoadEntityAttributeMap_ImageBackingField_IsReplacedByImageAttribute()
    {
        var image = new ImageAttributeMetadata();
        TestMetadata.Set(image, nameof(AttributeMetadata.AttributeOf), "entityimageid");
        TestMetadata.Set(image, nameof(AttributeMetadata.LogicalName), "entityimage");
        TestMetadata.Set(image, nameof(AttributeMetadata.SchemaName), "EntityImage");
        TestMetadata.Set(image, nameof(AttributeMetadata.AttributeType), (AttributeTypeCode?)AttributeTypeCode.Virtual);
        var backing = new UniqueIdentifierAttributeMetadata { LogicalName = "entityimageid" };
        TestMetadata.Set(backing, nameof(AttributeMetadata.SchemaName), "EntityImageId");
        // The Setup fake serves this field — swap in the image/backing shape.
        _account = TestMetadata.Entity("account", "Account", image, backing);

        var fieldMeta = new FormFieldMetadata(_fake.Client);
        var map = fieldMeta.LoadEntityAttributeMap("account");

        // The backing GUID field entry now resolves to the image attribute so
        // references to either name build image controls.
        Assert.AreSame(image, map["entityimageid"]);
        Assert.AreSame(image, map["entityimage"]);
    }

    // ── FormXmlHelpers ───────────────────────────────────────────────────

    [TestMethod]
    public void ResolveClassId_IntegerWithNoneFormat_UsesWholeNumber()
    {
        var integer = TestMetadata.Integer("numberofemployees", "Employees");
        TestMetadata.Set(integer, nameof(IntegerAttributeMetadata.Format), (IntegerFormat?)IntegerFormat.None);

        Assert.AreEqual(ControlClassId.WHOLE_NUMBER, FormXmlHelpers.ResolveClassId(integer));
    }

    [TestMethod]
    public void InsertFieldRows_BeforeMissingTarget_AppendsRows()
    {
        var rows = new XElement("rows", new XElement("row", new XElement("cell")));
        var newRows = new List<XElement> { new("row", new XElement("cell", new XAttribute("id", "new"))) };

        FormXmlHelpers.InsertFieldRows(rows, newRows, "before:missing_field");

        Assert.AreEqual(2, rows.Elements("row").Count());
        Assert.AreEqual("new", rows.Elements("row").Last().Elements("cell").First().Attribute("id")?.Value);
    }

    [TestMethod]
    public void BuildProvidedKeysHint_NearMissKey_SuggestsCorrection()
    {
        var op = Op("""{"tabb": "general", "label": "X"}""");

        var hint = FormXmlHelpers.BuildProvidedKeysHint(op, "tab", "name");

        StringAssert.Contains(hint, "Provided key(s): tabb");
        StringAssert.Contains(hint, "Did you mean: 'tabb'?");
    }

    // ── FormXmlOperations tool ───────────────────────────────────────────

    [TestMethod]
    public void BuildFormXml_ExistingForm_ReportsSuccess()
    {
        var tool = new FormXmlOperations(_fake.Client);

        var result = tool.build_form_xml("Account", Guid.NewGuid().ToString(),
            """[{"action":"manage_tab","manage_action":"update","tab":"general","label":"X"}]""");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Account Form");
    }
}
