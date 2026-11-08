using DynamicsCrm.DevKit.Cli.Mcp.Tools.Form;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Form;

/// <summary>
/// Extra coverage for the form XML operations: header-field add/update/remove
/// branches, section rows creation, library and event element creation with
/// schema-order repositioning, handler updates without dependencies, and the
/// FormSubgridOperations add/update paths including the default-view lookup.
/// </summary>
[TestClass]
public sealed class FormSubgridAndHeaderFieldExtraCoverageTests
{
    private FakeSdkClient _fake = null!;
    private Entity? _defaultView;
    private EntityMetadata _accountMeta = null!;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _defaultView = null;
        _accountMeta = TestMetadata.Entity("account", "Account",
            TestMetadata.String("name", "Account Name"),
            TestMetadata.Lookup("primarycontactid", "Primary Contact", "contact"));

        _fake.OnExecute = request => request switch
        {
            RetrieveEntityRequest => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = _accountMeta }
            },
            _ => new OrganizationResponse()
        };
        _fake.OnRetrieveMultiple = query =>
        {
            if (query is QueryExpression qe && qe.EntityName == "savedquery" && _defaultView != null)
                return new EntityCollection(new[] { _defaultView });
            return new EntityCollection();
        };
    }

    public void Dispose() => _fake.Dispose();

    private static JsonElement Json(string json) => JsonDocument.Parse(json).RootElement;

    private static Dictionary<string, AttributeMetadata> Attributes(params AttributeMetadata[] attrs) =>
        attrs.ToDictionary(a => a.LogicalName, a => a, StringComparer.OrdinalIgnoreCase);

    private static XDocument FormWithHeaderSpacer()
    {
        return XDocument.Parse("""
<form>
  <tabs>
    <tab name="general" verticallayout="1">
      <sections>
        <section name="details" columns="1" />
      </sections>
    </tab>
  </tabs>
  <header>
    <rows>
      <row>
        <cell />
      </row>
    </rows>
  </header>
</form>
""");
    }

    private FormFieldEventOperations NewFieldOps() =>
        new(_fake.Client, new FormXmlBuilder(_fake.Client));

    // ── FormFieldEventOperations: header fields ──

    [TestMethod]
    public void AddFields_WithHeaderTarget_DelegatesToHeaderFields()
    {
        var form = FormWithHeaderSpacer();
        var ops = NewFieldOps();
        var classIds = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);

        var summary = ops.ExecuteAddFields(form, Json("""
{ "target": "header", "fields": [ { "field": "name" } ] }
"""), Attributes(_accountMeta.Attributes![0]), classIds);

        StringAssert.Contains(summary, "add_header_fields: 1 field(s) added to header");
        StringAssert.Contains(form.ToString(), "header_name");
        Assert.IsTrue(classIds.ContainsKey("name"));
    }

    [TestMethod]
    public void AddHeaderFields_SecondAdd_AppendsAfterSpacerConsumed()
    {
        var form = FormWithHeaderSpacer();
        var ops = NewFieldOps();
        var classIds = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);

        var first = ops.ExecuteAddHeaderFields(form, Json("""
{ "fields": [ { "field": "name" } ] }
"""), Attributes(_accountMeta.Attributes!), classIds);
        StringAssert.Contains(first, "1 field(s) added to header (name)");

        var second = ops.ExecuteAddHeaderFields(form, Json("""
{ "fields": [ { "field": "primarycontactid", "label": "Contact" } ] }
"""), Attributes(_accountMeta.Attributes!), classIds);
        StringAssert.Contains(second, "1 field(s) added to header (primarycontactid)");

        var headerCells = form.Root!.Element("header")!.Descendants("cell")
            .Where(c => c.Element("control") != null).ToList();
        Assert.AreEqual(2, headerCells.Count);
        Assert.AreEqual("Contact", headerCells[1].Element("labels")?.Element("label")?.Attribute("description")?.Value);
    }

    [TestMethod]
    public void AddHeaderFields_UnknownField_Throws()
    {
        var form = FormWithHeaderSpacer();
        var ops = NewFieldOps();

        var ex = Assert.ThrowsExactly<InvalidOperationException>(() => ops.ExecuteAddHeaderFields(form,
            Json("""{ "fields": [ { "field": "missing_field" } ] }"""),
            Attributes(_accountMeta.Attributes!), new Dictionary<string, string>()));

        StringAssert.Contains(ex.Message, "add_header_fields: field 'missing_field' not found in entity metadata.");
    }

    [TestMethod]
    public void AddHeaderFields_NoHeader_CreatesHeaderAfterTabs()
    {
        var form = XDocument.Parse("""
<form>
  <tabs><tab name="general"><sections><section name="details" columns="1" /></sections></tab></tabs>
</form>
""");
        var ops = NewFieldOps();

        var summary = ops.ExecuteAddHeaderFields(form, Json("""
{ "fields": [ { "field": "name" } ] }
"""), Attributes(_accountMeta.Attributes!), new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase));

        StringAssert.Contains(summary, "add_header_fields: 1 field(s) added to header (name)");
        var root = form.Root!;
        Assert.AreEqual("tabs", root.Elements().First().Name.LocalName);
        Assert.AreEqual("header", root.Elements().Skip(1).First().Name.LocalName);
        Assert.IsNotNull(root.Element("header")!.Descendants("control").First());
    }

    [TestMethod]
    public void AddHeaderFields_NoTabs_AppendsHeaderToRoot()
    {
        var form = XDocument.Parse("<form />");
        var ops = NewFieldOps();

        var summary = ops.ExecuteAddHeaderFields(form, Json("""
{ "fields": [ { "field": "name" } ] }
"""), Attributes(_accountMeta.Attributes!), new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase));

        StringAssert.Contains(summary, "add_header_fields: 1 field(s) added to header (name)");
        Assert.AreEqual("header", form.Root!.Elements().Single().Name.LocalName);
    }

    [TestMethod]
    public void AddHeaderFields_HeaderWithoutRows_CreatesRowsAndFirstRow()
    {
        var form = XDocument.Parse("<form><header /><tabs /></form>");
        var ops = NewFieldOps();

        var summary = ops.ExecuteAddHeaderFields(form, Json("""
{ "fields": [ { "field": "name" } ] }
"""), Attributes(_accountMeta.Attributes!), new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase));

        StringAssert.Contains(summary, "add_header_fields: 1 field(s) added to header (name)");
        var header = form.Root!.Element("header")!;
        Assert.IsNotNull(header.Element("rows"));
        Assert.IsNotNull(header.Element("rows")!.Element("row"));
        Assert.IsNotNull(header.Descendants("control").First());
    }

    [TestMethod]
    public void UpdateFields_EmptyArray_Throws()
    {
        var ops = NewFieldOps();

        var ex = Assert.ThrowsExactly<InvalidOperationException>(() => ops.ExecuteUpdateFields(FormWithHeaderSpacer(),
            Json("""{ "fields": [] }"""),
            Attributes(_accountMeta.Attributes!), new Dictionary<string, string>()));

        StringAssert.Contains(ex.Message, "update_fields requires at least one field.");
    }

    [TestMethod]
    public void UpdateHeaderFields_NoHeader_ReturnsNotice()
    {
        var form = XDocument.Parse("""
<form>
  <tabs><tab name="general"><sections><section name="details"><rows /></section></sections></tab></tabs>
</form>
""");
        var ops = NewFieldOps();

        var summary = ops.ExecuteUpdateHeaderFields(form, Json("""
{ "fields": [ { "field": "name", "label": "Renamed" } ] }
"""), Attributes(_accountMeta.Attributes!), new Dictionary<string, string>());

        Assert.AreEqual("update_header: form has no header elements to update.", summary);
    }

    [TestMethod]
    public void UpdateHeaderFields_UpdatesLabelsAndVisibility()
    {
        var form = FormWithHeaderSpacer();
        var ops = NewFieldOps();
        var classIds = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);

        ops.ExecuteAddHeaderFields(form, Json("""
{ "fields": [ { "field": "name" } ] }
"""), Attributes(_accountMeta.Attributes!), classIds);

        var summary = ops.ExecuteUpdateHeaderFields(form, Json("""
{ "fields": [ { "field": "name", "label": "Renamed", "visible": false } ] }
"""), Attributes(_accountMeta.Attributes!), classIds);

        StringAssert.Contains(summary, "update_header: 1 field(s) updated (name)");
        StringAssert.Contains(form.ToString(), "Renamed");
    }

    [TestMethod]
    public void RemoveHeaderFields_NoStringEntries_Throws()
    {
        var ex = Assert.ThrowsExactly<InvalidOperationException>(() =>
            FormFieldEventOperations.ExecuteRemoveHeaderFields(FormWithHeaderSpacer(),
                Json("""{ "fields": [ { "field": "name" } ] } """)));

        StringAssert.Contains(ex.Message, "remove_header_fields requires at least one field name string.");
    }

    // ── FormFieldEventOperations: section rows ──

    [TestMethod]
    public void AddFields_SectionWithoutRows_CreatesRows()
    {
        var form = FormWithHeaderSpacer();
        var ops = NewFieldOps();

        var summary = ops.ExecuteAddFields(form, Json("""
{ "tab": "general", "section": "details", "fields": [ { "field": "name" } ] }
"""), Attributes(_accountMeta.Attributes!), new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase));

        StringAssert.Contains(summary, "add_fields: 1 field(s) to section \"details\" in tab \"general\"");
        Assert.IsNotNull(form.Descendants("section").First().Element("rows"));
    }

    // ── FormFieldEventOperations: libraries and events ──

    [TestMethod]
    public void AddLibrary_CreatesFormLibrariesBeforeExternalDependencies()
    {
        var form = XDocument.Parse("<form><externaldependencies /><tabs /></form>");

        var summary = FormFieldEventOperations.ExecuteAddLibrary(form, Json("""{ "library_name": "devkit_/form.js" }"""));

        StringAssert.Contains(summary, "added to formLibraries");
        var root = form.Root!;
        Assert.AreEqual("formLibraries", root.Elements().First().Name.LocalName);
        Assert.AreEqual("externaldependencies", root.Elements().Skip(1).First().Name.LocalName);
    }

    [TestMethod]
    public void AddLibrary_ExistingLibrary_IsSkippedAndUniqueIdBackfilled()
    {
        var form = XDocument.Parse("<form><formLibraries><Library name=\"devkit_/form.js\" /></formLibraries></form>");

        var summary = FormFieldEventOperations.ExecuteAddLibrary(form, Json("""{ "library": "devkit_/form.js" }"""));

        StringAssert.Contains(summary, "already exists in formLibraries (skipped)");
        var lib = form.Root!.Element("formLibraries")!.Element("Library")!;
        Assert.IsNotNull(lib.Attribute("libraryUniqueId")?.Value);
    }

    [TestMethod]
    public void AddLibrary_FormWithOnlyTabs_InsertsAfterTabs()
    {
        var form = XDocument.Parse("<form><tabs /></form>");

        var summary = FormFieldEventOperations.ExecuteAddLibrary(form, Json("""{ "library_name": "devkit_/form.js" }"""));

        StringAssert.Contains(summary, "added to formLibraries");
        var root = form.Root!;
        Assert.AreEqual("tabs", root.Elements().First().Name.LocalName);
        Assert.AreEqual("formLibraries", root.Elements().Last().Name.LocalName);
    }

    [TestMethod]
    public void AddEvent_CreatesEventsAndLibraryThenRepositions()
    {
        var form = XDocument.Parse("<form><tabs><tab name=\"general\" /></tabs></form>");

        var summary = FormFieldEventOperations.ExecuteAddEvent(form, Json("""
{ "event_name": "onload", "function_name": "Contoso.onLoad", "library_name": "devkit_/form.js" }
"""));

        StringAssert.Contains(summary, "add_event: \"onload\" -> \"Contoso.onLoad\"");
        var root = form.Root!;
        var childNames = root.Elements().Select(e => e.Name.LocalName).ToList();
        // Schema order: events before formLibraries, formLibraries after tabs.
        Assert.AreEqual("tabs", childNames[0]);
        CollectionAssert.AreEqual(new[] { "tabs", "events", "formLibraries" }, childNames);
    }

    [TestMethod]
    public void AddEvent_ExistingHandlerWithoutDependencies_BackfillsDependencies()
    {
        var form = XDocument.Parse("""
<form>
  <events>
    <event name="onload" application="false" active="true">
      <Handlers>
        <Handler functionName="Contoso.onLoad" libraryName="devkit_/form.js" handlerUniqueId="h1"
                 enabled="true" passExecutionContext="false" />
      </Handlers>
    </event>
  </events>
  <formLibraries>
    <Library name="devkit_/form.js" libraryUniqueId="lib1" />
  </formLibraries>
  <tabs />
</form>
""");

        var summary = FormFieldEventOperations.ExecuteAddEvent(form, Json("""
{ "event_name": "onload", "function_name": "Contoso.onLoad", "library_name": "devkit_/form.js",
  "pass_execution_context": true, "parameters": "extra" }
"""));

        StringAssert.Contains(summary, "already exists (updated)");
        var handler = form.Descendants("Handler").First();
        Assert.AreEqual("true", handler.Attribute("passExecutionContext")?.Value);
        Assert.AreEqual("extra", handler.Attribute("parameters")?.Value);
        Assert.IsNotNull(handler.Element("dependencies"));
        Assert.AreEqual("lib1", handler.Element("dependencies")!.Element("dependency")!.Attribute("id")?.Value);
    }

    [TestMethod]
    public void AddEvent_InvalidEventName_Throws()
    {
        var ex = Assert.ThrowsExactly<InvalidOperationException>(() =>
            FormFieldEventOperations.ExecuteAddEvent(XDocument.Parse("<form />"),
                Json("""{ "event_name": "onchange2", "function_name": "F", "library_name": "L" }""")));

        StringAssert.Contains(ex.Message, "Invalid event_name 'onchange2'");
    }

    // ── FormSubgridOperations ──

    [TestMethod]
    public void AddSubgrid_WithoutViewId_ResolvesDefaultView()
    {
        var viewId = Guid.NewGuid();
        _defaultView = new Entity("savedquery", viewId) { ["name"] = "Account Default" };

        var form = XDocument.Parse("""
<form>
  <tabs>
    <tab name="general">
      <sections>
        <section name="details">
          <rows />
        </section>
      </sections>
    </tab>
  </tabs>
</form>
""");
        var ops = new FormSubgridOperations(_fake.Client);

        var summary = ops.ExecuteAddSubgrid(form, Json("""
{ "tab": "general", "section": "details", "label": "Contacts", "control_id": "subgrid_contacts",
  "relationship_name": "account_primary_contact", "target_entity": "contact" }
"""));

        StringAssert.Contains(summary, "add_subgrid: \"Contacts\" (subgrid_contacts)");
        var control = form.Descendants("control").First();
        Assert.AreEqual("subgrid_contacts", control.Attribute("id")?.Value);
        StringAssert.Contains(control.ToString(), viewId.ToString());
    }

    [TestMethod]
    public void AddSubgrid_WithoutViewId_NoDefaultView_Throws()
    {
        var form = XDocument.Parse("""
<form>
  <tabs><tab name="general"><sections><section name="details"><rows /></section></sections></tab></tabs>
</form>
""");
        var ops = new FormSubgridOperations(_fake.Client);

        var ex = Assert.ThrowsExactly<InvalidOperationException>(() => ops.ExecuteAddSubgrid(form, Json("""
{ "tab": "general", "section": "details", "label": "Contacts", "control_id": "subgrid_contacts",
  "relationship_name": "account_primary_contact", "target_entity": "contact" }
""")));

        StringAssert.Contains(ex.Message, "No active public view found for target_entity 'contact'");
    }

    [TestMethod]
    public void AddSubgrid_Positions_InsertsRelativeAndFirst()
    {
        var form = XDocument.Parse("""
<form>
  <tabs>
    <tab name="general">
      <sections>
        <section name="details">
          <rows>
            <row><cell><control id="field_name" classid="{4273EDBD-AC1D-40d3-B0B6-FF3FC2B7C9C3}" datafieldname="name" /></cell></row>
            <row><cell><control id="field_phone" classid="{4273EDBD-AC1D-40d3-B0B6-FF3FC2B7C9C3}" datafieldname="telephone1" /></cell></row>
          </rows>
        </section>
      </sections>
    </tab>
  </tabs>
</form>
""");
        var ops = new FormSubgridOperations(_fake.Client);
        var viewId = Guid.NewGuid();

        var afterSummary = ops.ExecuteAddSubgrid(form, Json($$"""
{ "tab": "general", "section": "details", "label": "After", "control_id": "subgrid_after",
  "relationship_name": "r1", "target_entity": "contact", "view_id": "{{viewId}}",
  "position": "after:field_name" }
"""));
        StringAssert.Contains(afterSummary, "add_subgrid: \"After\"");

        var firstSummary = ops.ExecuteAddSubgrid(form, Json($$"""
{ "tab": "general", "section": "details", "label": "First", "control_id": "subgrid_first",
  "relationship_name": "r2", "target_entity": "contact", "view_id": "{{viewId}}",
  "position": "first" }
"""));
        StringAssert.Contains(firstSummary, "add_subgrid: \"First\"");

        var controlIds = form.Descendants("control")
            .Where(c => c.Attribute("id")?.Value.StartsWith("subgrid_", StringComparison.Ordinal) == true)
            .Select(c => c.Attribute("id")!.Value).ToList();
        CollectionAssert.AreEqual(new[] { "subgrid_first", "subgrid_after" }, controlIds);
    }

    [TestMethod]
    public void AddSubgrid_DuplicateControlId_Throws()
    {
        var form = XDocument.Parse("""
<form>
  <tabs><tab name="general"><sections><section name="details">
    <rows><row><cell><control id="subgrid_contacts" classid="{E7A8ACC5-7F89-459c-B6E9-591C1BFCAFEF}" /></cell></row></rows>
  </section></sections></tab></tabs>
</form>
""");
        var ops = new FormSubgridOperations(_fake.Client);

        var ex = Assert.ThrowsExactly<InvalidOperationException>(() => ops.ExecuteAddSubgrid(form, Json($$"""
{ "tab": "general", "section": "details", "label": "Contacts", "control_id": "subgrid_contacts",
  "relationship_name": "r", "target_entity": "contact", "view_id": "{{Guid.NewGuid()}}" }
""")));

        StringAssert.Contains(ex.Message, "Subgrid control_id 'subgrid_contacts' already exists");
    }

    [TestMethod]
    public void AddSubgrid_MissingTabAndSection_ThrowWithAvailableNames()
    {
        var form = XDocument.Parse("""
<form>
  <tabs><tab name="general"><sections><section name="details"><rows /></section></sections></tab></tabs>
</form>
""");
        var ops = new FormSubgridOperations(_fake.Client);

        var tabEx = Assert.ThrowsExactly<InvalidOperationException>(() => ops.ExecuteAddSubgrid(form, Json("""
{ "tab": "nope", "section": "details", "label": "L", "control_id": "c1",
  "relationship_name": "r", "target_entity": "contact", "view_id": "{11111111-1111-1111-1111-111111111111}" }
""")));
        StringAssert.Contains(tabEx.Message, "Tab 'nope' not found. Available tabs: general");

        var sectionEx = Assert.ThrowsExactly<InvalidOperationException>(() => ops.ExecuteAddSubgrid(form, Json("""
{ "tab": "general", "section": "nope", "label": "L", "control_id": "c1",
  "relationship_name": "r", "target_entity": "contact", "view_id": "{11111111-1111-1111-1111-111111111111}" }
""")));
        StringAssert.Contains(sectionEx.Message, "Section 'nope' not found in tab 'general'");
    }

    [TestMethod]
    public void UpdateSubgrid_UpdatesLabelVisibilityAndParameters()
    {
        var form = XDocument.Parse("""
<form>
  <tabs><tab name="general"><sections><section name="details">
    <rows><row><cell id="cell1" visible="true">
      <labels><label description="Old" languagecode="1033" /></labels>
      <control id="subgrid_contacts" classid="{E7A8ACC5-7F89-459c-B6E9-591C1BFCAFEF}">
        <parameters><TargetEntityType>contact</TargetEntityType></parameters>
      </control>
    </cell></row></rows>
  </section></sections></tab></tabs>
</form>
""");

        var summary = FormSubgridOperations.ExecuteUpdateSubgrid(form, Json("""
{ "control_id": "subgrid_contacts", "label": "Team Members", "visible": false,
  "rows_per_page": 25, "enable_view_picker": true, "enable_quick_find": true }
"""));

        StringAssert.Contains(summary, "update_subgrid: \"subgrid_contacts\" updated");
        var control = form.Descendants("control").First();
        var parameters = control.Element("parameters")!;
        Assert.AreEqual("Team Members", form.Descendants("label").First().Attribute("description")?.Value);
        Assert.AreEqual("false", form.Descendants("cell").First().Attribute("visible")?.Value);
        Assert.AreEqual("25", parameters.Element("RecordsPerPage")?.Value);
        Assert.AreEqual("true", parameters.Element("EnableViewPicker")?.Value);
        Assert.AreEqual("true", parameters.Element("EnableQuickFind")?.Value);
    }

    [TestMethod]
    public void UpdateSubgrid_UnknownControl_Throws()
    {
        var form = XDocument.Parse("<form><tabs><tab><sections><section><rows /></section></sections></tab></tabs></form>");

        var ex = Assert.ThrowsExactly<InvalidOperationException>(() => FormSubgridOperations.ExecuteUpdateSubgrid(form,
            Json("""{ "control_id": "nope" }""")));

        StringAssert.Contains(ex.Message, "Subgrid control_id 'nope' not found.");
    }
}
