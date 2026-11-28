using DynamicsCrm.DevKit.Cli;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Form;
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
/// Wave-2 gap coverage for FormXmlOperationsRunner: the metadata-load and
/// FormXML-parse failure wraps, the unknown-action/unknown-manage_action
/// dispatch errors for every operation family, the manage_action aliases
/// (rename → update, delete → remove, delete_header → remove_header) and
/// the display-name position normalization of manage_fields.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class FormXmlOperationsRunnerGapWave2CoverageTests
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
    }

    public void Dispose() => _fake.Dispose();

    private static List<JsonElement> Ops(params string[] jsonOps) =>
        jsonOps.Select(o => JsonSerializer.Deserialize<JsonElement>(o)).ToList();

    private const string BaseForm =
        "<form>" +
        "<tabs>" +
        "<tab name=\"general\" verticallayout=\"true\" id=\"{8e1d2a1c-1111-4a4a-9a9a-111111111111}\">" +
        "<labels><label description=\"General\" languagecode=\"1033\" /></labels>" +
        "<columns><column width=\"100%\"><sections>" +
        "<section name=\"section1\" showlabel=\"false\" showbar=\"false\" id=\"{8e1d2a1c-2222-4a4a-9a9a-222222222222}\">" +
        "<labels><label description=\"General\" languagecode=\"1033\" /></labels>" +
        "<rows>" +
        "<row><cell id=\"{8e1d2a1c-3333-4a4a-9a9a-333333333333}\" showlabel=\"false\"><labels><label description=\"Account Name\" languagecode=\"1033\" /></labels>" +
        "<control id=\"name\" classid=\"{4273edbd-ac1d-40d3-9fb2-095c6217197a}\" datafieldname=\"name\" disabled=\"false\" /></cell></row>" +
        "</rows>" +
        "</section>" +
        "</sections></column></columns>" +
        "</tab>" +
        "</tabs>" +
        "</form>";

    [TestMethod]
    [DataRow("add", "showlabel")]
    [DataRow("add", "show_label")]
    [DataRow("add", "showLabel")]
    [DataRow("update", "showlabel")]
    [DataRow("update", "show_label")]
    [DataRow("update", "showLabel")]
    [DataRow("add_header", "showlabel")]
    [DataRow("add_header", "show_label")]
    [DataRow("add_header", "showLabel")]
    [DataRow("update_header", "showlabel")]
    [DataRow("update_header", "show_label")]
    [DataRow("update_header", "showLabel")]
    public void Run_FieldActions_WriteShowLabelAndLockLevel(string action, string showLabelKey)
    {
        var runner = new FormXmlOperationsRunner(_fake.Client);
        var form = XDocument.Parse(BaseForm);
        var bodyCell = form.Descendants("cell").Single();
        bodyCell.SetAttributeValue("showlabel", "true");
        if (action == "update_header")
            form.Root!.Add(new XElement("header", new XElement("rows", new XElement("row", new XElement(bodyCell)))));

        var (xml, _, _) = runner.Run(form.ToString(), "account", Ops($$"""
            {"action":"manage_fields","manage_action":"{{action}}","tab":"general","section":"section1",
             "fields":[{"field":"name","{{showLabelKey}}":false,"locklevel":1}]}
            """));

        var result = XDocument.Parse(xml);
        var scope = result.Root!.Element(action.EndsWith("_header") ? "header" : "tabs");
        var cell = scope!.Descendants("cell").Last(c => c.Element("control") != null);
        Assert.AreEqual("false", cell.Attribute("showlabel")?.Value);
        Assert.AreEqual("1", cell.Attribute("locklevel")?.Value);
    }

    [TestMethod]
    [DataRow("update", "")]
    [DataRow("update", ",\"visible\":false")]
    [DataRow("update_header", "")]
    public void Run_FieldUpdate_RejectsUnknownKeys(string action, string additionalProperties)
    {
        var runner = new FormXmlOperationsRunner(_fake.Client);
        var error = Assert.ThrowsExactly<InvalidOperationException>(() => runner.Run(BaseForm, "account", Ops($$"""
            {"action":"manage_fields","manage_action":"{{action}}","fields":[{"field":"name","show_lable":false{{additionalProperties}}}]}
            """)));

        StringAssert.Contains(error.Message, "field 'name'");
        StringAssert.Contains(error.Message, "unsupported properties: show_lable");
        StringAssert.Contains(error.Message, "Supported keys:");
        StringAssert.Contains(error.Message, "show_label");
    }

    [TestMethod]
    [DataRow("add", "2", "11", true)]
    [DataRow("update", "2", "11", true)]
    [DataRow("add", "\"111\"", "111", false)]
    [DataRow("update", "\"11\"", "11", false)]
    [DataRow("add", "3", "111", true)]
    [DataRow("update", "\"1\"", "1", false)]
    public void Run_SectionActions_WriteLayoutAttributes(string action, string inputColumns, string expectedColumns,
        bool useSnakeCase)
    {
        var runner = new FormXmlOperationsRunner(_fake.Client);
        var form = XDocument.Parse(BaseForm);
        form.Descendants("section").Single().SetAttributeValue("showlabel", "true");
        var sectionName = action == "add" ? "section2" : "section1";
        var showLabel = useSnakeCase ? "show_label" : "showlabel";
        var showBar = useSnakeCase ? "show_bar" : "showbar";
        var labelPosition = useSnakeCase ? "cell_label_position" : "celllabelposition";
        var labelWidth = useSnakeCase ? "label_width" : "labelwidth";
        var (xml, _, _) = runner.Run(form.ToString(), "account", Ops($$"""
            {"action":"manage_section","manage_action":"{{action}}","tab":"general","name":"{{sectionName}}",
             "label":"Details","columns":{{inputColumns}},"{{showLabel}}":false,"{{showBar}}":true,
             "{{labelPosition}}":"Top","{{labelWidth}}":140}
            """));

        var section = XDocument.Parse(xml).Descendants("section").Single(s => (string?)s.Attribute("name") == sectionName);
        Assert.AreEqual(expectedColumns, section.Attribute("columns")?.Value);
        Assert.AreEqual("false", section.Attribute("showlabel")?.Value);
        Assert.AreEqual("true", section.Attribute("showbar")?.Value);
        Assert.AreEqual("Top", section.Attribute("celllabelposition")?.Value);
        Assert.AreEqual("140", section.Attribute("labelwidth")?.Value);
    }

    [TestMethod]
    [DataRow("add")]
    [DataRow("update")]
    public void Run_SectionActions_RejectUnknownKeys(string action)
    {
        var runner = new FormXmlOperationsRunner(_fake.Client);
        var error = Assert.ThrowsExactly<InvalidOperationException>(() => runner.Run(BaseForm, "account", Ops($$"""
            {"action":"manage_section","manage_action":"{{action}}","tab":"general","name":"section1",
             "label":"Details","column_count":2}
            """)));

        StringAssert.Contains(error.Message, "unsupported properties: column_count");
        StringAssert.Contains(error.Message, "Supported keys:");
        StringAssert.Contains(error.Message, "columns");
    }

    [TestMethod]
    public void Run_AddFields_UsesEncodedSectionColumnCount()
    {
        var runner = new FormXmlOperationsRunner(_fake.Client);
        var (xml, _, _) = runner.Run(BaseForm, "account", Ops(
            """{"action":"manage_section","manage_action":"update","tab":"general","section":"section1","columns":2}""",
            """{"action":"manage_fields","manage_action":"add","tab":"general","section":"section1","fields":["name"]}"""));

        var addedRow = XDocument.Parse(xml).Descendants("row").Last();
        Assert.AreEqual(2, addedRow.Elements("cell").Count());
    }

    [TestMethod]
    public void Run_MetadataLoadFailure_IsWrapped()
    {
        _fake.OnExecute = request => throw new InvalidOperationException("connection gone");
        var runner = new FormXmlOperationsRunner(_fake.Client);

        var error = Assert.ThrowsExactly<InvalidOperationException>(() =>
            runner.Run(BaseForm, "account", Ops("""{"action":"manage_fields","manage_action":"add","tab":"general","section":"section1","fields":[{"field":"name"}]}""")));

        StringAssert.Contains(error.Message, "Failed to retrieve metadata for entity 'account'");
        StringAssert.Contains(error.Message, "connection gone");
    }

    [TestMethod]
    public void Run_InvalidFormXml_IsWrapped()
    {
        var runner = new FormXmlOperationsRunner(_fake.Client);

        var error = Assert.ThrowsExactly<InvalidOperationException>(() =>
            runner.Run("<form><broken", "account", Ops("""{"action":"manage_tab","manage_action":"update","tab":"general","label":"X"}""")));

        StringAssert.Contains(error.Message, "Failed to parse current FormXML");
    }

    [TestMethod]
    public void Run_UnknownManageAction_FailsForEveryFamily()
    {
        var runner = new FormXmlOperationsRunner(_fake.Client);

        var tabError = Assert.ThrowsExactly<InvalidOperationException>(() =>
            runner.Run(BaseForm, "account", Ops("""{"action":"manage_tab","manage_action":"bogus","tab":"general"}""")));
        StringAssert.Contains(tabError.Message, "Unknown manage_action 'bogus' for manage_tab");

        var sectionError = Assert.ThrowsExactly<InvalidOperationException>(() =>
            runner.Run(BaseForm, "account", Ops("""{"action":"manage_section","manage_action":"bogus","tab":"general","section":"section1"}""")));
        StringAssert.Contains(sectionError.Message, "Unknown manage_action 'bogus' for manage_section");

        var fieldsError = Assert.ThrowsExactly<InvalidOperationException>(() =>
            runner.Run(BaseForm, "account", Ops("""{"action":"manage_fields","manage_action":"bogus","tab":"general","section":"section1"}""")));
        StringAssert.Contains(fieldsError.Message, "Unknown manage_action 'bogus' for manage_fields");

        var subgridError = Assert.ThrowsExactly<InvalidOperationException>(() =>
            runner.Run(BaseForm, "account", Ops("""{"action":"manage_subgrid","manage_action":"bogus","tab":"general","section":"section1"}""")));
        StringAssert.Contains(subgridError.Message, "Unknown manage_action 'bogus' for manage_subgrid");

        var libraryError = Assert.ThrowsExactly<InvalidOperationException>(() =>
            runner.Run(BaseForm, "account", Ops("""{"action":"manage_library","manage_action":"bogus"}""")));
        StringAssert.Contains(libraryError.Message, "Unknown manage_action 'bogus' for manage_library");

        var eventError = Assert.ThrowsExactly<InvalidOperationException>(() =>
            runner.Run(BaseForm, "account", Ops("""{"action":"manage_event","manage_action":"bogus"}""")));
        StringAssert.Contains(eventError.Message, "Unknown manage_action 'bogus' for manage_event");
    }

    [TestMethod]
    public void Run_UnknownActionFamily_Fails()
    {
        var runner = new FormXmlOperationsRunner(_fake.Client);

        var error = Assert.ThrowsExactly<InvalidOperationException>(() =>
            runner.Run(BaseForm, "account", Ops("""{"action":"manage_widget","manage_action":"add"}""")));

        StringAssert.Contains(error.Message, "Unknown action 'manage_widget'");
        StringAssert.Contains(error.Message, "manage_tab | manage_section | manage_fields | manage_subgrid | manage_library | manage_event");
    }

    [TestMethod]
    public void Run_ManageActionAliases_AreNormalized()
    {
        var runner = new FormXmlOperationsRunner(_fake.Client);

        // rename → update on a tab
        var renamed = runner.Run(BaseForm, "account", Ops(
            """{"action":"manage_tab","manage_action":"rename","tab":"general","new_name":"summary"}"""));
        Assert.AreEqual(1, renamed.OperationSummaries.Count);
        StringAssert.Contains(renamed.ModifiedFormXml, "name=\"summary\"");

        // delete → remove on a section
        var removed = runner.Run(BaseForm, "account", Ops(
            """{"action":"manage_section","manage_action":"delete","tab":"general","section":"section1"}"""));
        Assert.IsFalse(removed.ModifiedFormXml.Contains("section1"));

        // delete_header → remove_header on a form with a header cell
        const string headerForm =
            "<form><header id=\"{8e1d2a1c-4444-4a4a-9a9a-444444444444}\" celllabelposition=\"Top\" columns=\"111\" labelwidth=\"115\" celllabelalignment=\"Left\">" +
            "<rows><row>" +
            "<cell id=\"{8e1d2a1c-5555-4a4a-9a9a-555555555555}\" showlabel=\"false\"><labels><label description=\"Account Name\" languagecode=\"1033\" /></labels>" +
            "<control id=\"header_name\" classid=\"{4273edbd-ac1d-40d3-9fb2-095c6217197a}\" datafieldname=\"name\" disabled=\"false\" /></cell>" +
            "</row></rows></header><tabs /></form>";
        var headerRemoved = runner.Run(headerForm, "account", Ops(
            """{"action":"manage_fields","manage_action":"delete_header","fields":["name"]}"""));
        Assert.IsFalse(headerRemoved.ModifiedFormXml.Contains("header_name"));
    }

    [TestMethod]
    public void Run_ManageFields_DisplayNamePosition_IsNormalized()
    {
        var runner = new FormXmlOperationsRunner(_fake.Client);

        var result = runner.Run(BaseForm, "account", Ops(
            """{"action":"manage_fields","manage_action":"add","tab":"general","section":"section1","position":"before:Account Name","fields":[{"field":"name"}]}"""));

        Assert.AreEqual(1, result.OperationSummaries.Count);
        // The cell for the (already existing) name field was re-inserted
        // before itself — the position was normalized from the display name.
        Assert.IsTrue(result.ClassIdMap.ContainsKey("name"));
    }
}
