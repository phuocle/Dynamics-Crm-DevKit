using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System.Reflection;
using System.Xml.Linq;
using System.Xml.Schema;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageForm;

public sealed partial class ManageFormFakeXrmEasyFullCoverageTests
{
    private const string WebResourceClassId = "{9FDF5F91-88B1-47F4-AD53-C11EFC01A01D}";
    private const string HtmlResourceName = "abiz_/html/Preview-Xtl.html";
    private const string ImageResourceName = "abiz_/images/Preview.png";
    private const string AddHtmlResource = """
        {"action":"manage_webresource","manage_action":"add","tab":"General","section":"General",
         "webresource_name":"abiz_/html/Preview-Xtl.html","data":"mode=mapping&embedded=true"}
        """;

    [TestMethod]
    public async Task WebResource_HtmlAddPatchAndReplaceWithImage_ValidatesAndPublishes()
    {
        var htmlId = SeedWebResource(HtmlResourceName, 1, "XTL Preview");
        var imageId = SeedWebResource(ImageResourceName, 5);
        var formId = SeedForm("Preview");

        await ApplyValidatedWebResource(formId, AddHtmlResource);
        var form = ReadFormXml(formId);
        StringAssert.Contains(form.ToString(), "<Data>mode=mapping&amp;embedded=true</Data>");
        var control = form.Descendants("control").Single();
        var cell = control.Parent!;
        Assert.AreEqual("WebResource_Preview_Xtl", (string?)control.Attribute("id"));
        Assert.AreEqual(WebResourceClassId, (string?)control.Attribute("classid"));
        Assert.AreEqual("XTL Preview", (string?)cell.Descendants("label").Single().Attribute("description"));
        Assert.AreEqual("false", (string?)cell.Attribute("showlabel"));
        Assert.AreEqual(10, (int?)cell.Attribute("rowspan"));
        Assert.AreEqual(1, (int?)cell.Attribute("colspan"));
        Assert.AreEqual(true, (bool?)cell.Attribute("visible"));
        Assert.AreEqual(true, (bool?)cell.Attribute("availableforphone"));
        Assert.AreEqual(HtmlResourceName, ReadParameter(control, "Url"));
        Assert.AreEqual(htmlId.ToString("B").ToUpperInvariant(), ReadParameter(control, "WebResourceId"));
        Assert.AreEqual("mode=mapping&embedded=true", ReadParameter(control, "Data"));
        Assert.AreEqual("auto", ReadParameter(control, "Scrolling"));
        Assert.AreEqual("false", ReadParameter(control, "PassParameters"));
        Assert.AreEqual("false", ReadParameter(control, "Security"));
        Assert.AreEqual("false", ReadParameter(control, "Border"));
        Assert.AreEqual("false", ReadParameter(control, "ShowOnMobileClient"));
        Assert.IsNull(ReadParameter(control, "Preload"));

        await ApplyValidatedWebResource(formId, """
            {"action":"manage_webresource","manage_action":"update","url":"abiz_/html/Preview-Xtl.html",
             "pass_parameters":true,"security":true,"border":true,"scrolling":"no","preload":false,
             "show_on_mobile_client":true,"showlabel":true,"label":"Updated preview","rowspan":22,"colspan":2,
             "visible":false,"hide_on_phone":true}
            """);
        control = ReadFormXml(formId).Descendants("control").Single();
        cell = control.Parent!;
        Assert.AreEqual("Updated preview", (string?)cell.Descendants("label").Single().Attribute("description"));
        Assert.AreEqual(true, (bool?)cell.Attribute("showlabel"));
        Assert.AreEqual(22, (int?)cell.Attribute("rowspan"));
        Assert.AreEqual(2, (int?)cell.Attribute("colspan"));
        Assert.AreEqual(false, (bool?)cell.Attribute("visible"));
        Assert.AreEqual(false, (bool?)cell.Attribute("availableforphone"));
        Assert.AreEqual("true", ReadParameter(control, "PassParameters"));
        Assert.AreEqual("true", ReadParameter(control, "Security"));
        Assert.AreEqual("true", ReadParameter(control, "Border"));
        Assert.AreEqual("no", ReadParameter(control, "Scrolling"));
        Assert.AreEqual("false", ReadParameter(control, "Preload"));
        Assert.AreEqual("true", ReadParameter(control, "ShowOnMobileClient"));
        Assert.AreEqual("mode=mapping&embedded=true", ReadParameter(control, "Data"));

        await ApplyValidatedWebResource(formId, """
            {"action":"manage_webresource","manage_action":"update","control_id":"WebResource_Preview_Xtl",
             "webresource":"abiz_/images/Preview.png","alt_text":"Preview image","size_type":"Specific",
             "height":120,"width":260,"horizontal_alignment":"Center","vertical_alignment":"Middle"}
            """);
        control = ReadFormXml(formId).Descendants("control").Single();
        Assert.AreEqual(ImageResourceName, ReadParameter(control, "Url"));
        Assert.AreEqual(imageId.ToString("B").ToUpperInvariant(), ReadParameter(control, "WebResourceId"));
        Assert.AreEqual("Preview image", ReadParameter(control, "AltText"));
        Assert.AreEqual("Specific", ReadParameter(control, "SizeType"));
        Assert.AreEqual("120", ReadParameter(control, "Height"));
        Assert.AreEqual("260", ReadParameter(control, "Width"));
        Assert.AreEqual("Center", ReadParameter(control, "HorizontalAlignment"));
        Assert.AreEqual("Middle", ReadParameter(control, "VerticalAlignment"));
        Assert.AreEqual("true", ReadParameter(control, "PassParameters"));
        Assert.AreEqual("mode=mapping&embedded=true", ReadParameter(control, "Data"));
        Assert.AreEqual("Updated preview", (string?)control.Parent!.Descendants("label").Single().Attribute("description"));
        Assert.AreEqual(3, _service.Publishes);
    }

    [TestMethod]
    public async Task WebResource_MoveAcrossSectionsAndDelete_PreservesSiblingCellAndResource()
    {
        var imageId = SeedWebResource(ImageResourceName, 5);
        var formId = SeedForm("Preview", formXml: ValidFormXml.Replace("<rows /></section>", """
            <rows><row><cell><control id="firstAnchor" classid="{4273EDBD-AC1D-40D3-9FB2-095C621B552D}" /></cell></row></rows>
            </section>
            <section name="destination"><labels><label description="Destination" languagecode="1033" /></labels>
              <rows><row><cell><control id="secondAnchor" classid="{4273EDBD-AC1D-40D3-9FB2-095C621B552D}" /></cell></row></rows>
            </section>
            """));
        await ApplyValidatedWebResource(formId, """
            {"action":"manage_webresource","manage_action":"add","tab":"General","section":"general_section",
             "url":"abiz_/images/Preview.png","position":"before:firstAnchor","alt_text":"Preview image"}
            """);
        var form = ReadFormXml(formId);
        var originalCell = form.Descendants("control").First().Parent!;
        Assert.AreEqual("WebResource_Preview", (string?)originalCell.Element("control")?.Attribute("id"));
        Assert.AreEqual("Preview.png", (string?)originalCell.Descendants("label").Single().Attribute("description"));
        Assert.AreEqual("firstAnchor", (string?)originalCell.Parent!.ElementsAfterSelf().Single().Descendants("control").Single().Attribute("id"));

        // Model a pre-existing form with another cell in the same row.
        var sibling = originalCell.Parent!.ElementsAfterSelf().Single().Element("cell")!;
        var oldRow = sibling.Parent!;
        sibling.Remove();
        originalCell.AddAfterSelf(sibling);
        oldRow.Remove();
        _ctx.GetOrganizationService().Update(new Entity("systemform", formId) { ["formxml"] = form.ToString() });

        await ApplyValidatedWebResource(formId, """
            {"action":"manage_webresource","manage_action":"move","webresource_name":"abiz_/images/Preview.png",
             "target_tab":"tab_general","target_section":"Destination","position":"after:secondAnchor"}
            """);
        form = ReadFormXml(formId);
        var sections = form.Descendants("section").ToArray();
        Assert.AreEqual("firstAnchor", (string?)sections[0].Descendants("control").Single().Attribute("id"));
        var destinationRows = sections[1].Descendants("row").ToArray();
        Assert.AreEqual(2, destinationRows.Length);
        Assert.AreEqual("secondAnchor", (string?)destinationRows[0].Descendants("control").Single().Attribute("id"));
        Assert.IsTrue(XNode.DeepEquals(originalCell, destinationRows[1].Element("cell")));

        await ApplyValidatedWebResource(formId, """
            {"action":"manage_webresource","manage_action":"move","control_id":"WebResource_Preview","position":"first"}
            """);
        var firstRow = ReadFormXml(formId).Descendants("section").Last().Descendants("row").First();
        Assert.IsTrue(XNode.DeepEquals(originalCell, firstRow.Element("cell")));

        await ApplyValidatedWebResource(formId, """
            {"action":"manage_webresource","manage_action":"delete","control_id":"WebResource_Preview"}
            """);
        var destination = ReadFormXml(formId).Descendants("section").Last();
        Assert.HasCount(1, destination.Descendants("row"));
        Assert.AreEqual("secondAnchor", (string?)destination.Descendants("control").Single().Attribute("id"));
        Assert.AreEqual(imageId, _service.Retrieve("webresource", imageId, new ColumnSet("name")).Id);
    }

    [TestMethod]
    public async Task WebResource_RepeatedNamesRequireControlId_AndGeneratedIdsAreUnique()
    {
        SeedWebResource(HtmlResourceName, 1);
        var formId = SeedForm("Preview");
        await ApplyValidatedWebResource(formId, $"{AddHtmlResource},{AddHtmlResource}");
        var form = ReadFormXml(formId);
        CollectionAssert.AreEqual(new[] { "WebResource_Preview_Xtl", "WebResource_Preview_Xtl1" },
            form.Descendants("control").Select(c => (string?)c.Attribute("id")).ToArray());

        var result = await ApplyWebResource(formId, """
            {"action":"manage_webresource","manage_action":"remove","webresource_name":"abiz_/html/Preview-Xtl.html"}
            """);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Multiple WebResource controls");
        Assert.AreEqual(1, _service.Updates);
        Assert.IsTrue(XNode.DeepEquals(form, ReadFormXml(formId)));

        await ApplyValidatedWebResource(formId, """
            {"action":"manage_webresource","manage_action":"remove","control_id":"WebResource_Preview_Xtl1"}
            """);
        Assert.HasCount(1, ReadFormXml(formId).Descendants("row"));
    }

    [TestMethod]
    [DataRow("""{"webresource_name":"abiz_/missing.html"}""", "was not found in Dataverse")]
    [DataRow("""{"webresource_name":"abiz_/script.js"}""", "must be HTML or an image")]
    [DataRow("""{"rowspan":0}""", "rowspan")]
    [DataRow("""{"position":"after:missing"}""", "not found in the target section")]
    [DataRow("""{"vertical_alignment":"invalid"}""", "FormXML validation failed")]
    public async Task WebResource_InvalidAddDoesNotSaveOrPublish(string properties, string error)
    {
        SeedWebResource(ImageResourceName, 5);
        SeedWebResource("abiz_/script.js", 3);
        var formId = SeedForm("Preview");
        var op = System.Text.Json.Nodes.JsonNode.Parse(properties)!.AsObject();
        op["action"] = "manage_webresource";
        op["manage_action"] = "add";
        op["tab"] = "General";
        op["section"] = "General";
        op["webresource_name"] ??= ImageResourceName;
        var result = await ApplyWebResource(formId, op.ToJsonString());

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), error);
        Assert.AreEqual(0, _service.Updates);
        Assert.AreEqual(0, _service.Publishes);
    }

    [TestMethod]
    public async Task WebResource_UpdateRejectsUnknownKeysWithoutWriting()
    {
        SeedWebResource(HtmlResourceName, 1);
        var formId = SeedForm("Preview");
        await ApplyValidatedWebResource(formId, AddHtmlResource);
        var result = await ApplyWebResource(formId, """
            {"action":"manage_webresource","manage_action":"update","control_id":"WebResource_Preview_Xtl","border":true,
             "position":"first"}
            """);

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Unsupported key 'position'");
        StringAssert.Contains(Text(result), "Valid keys:");
        StringAssert.Contains(Text(result), "pass_parameters");
        Assert.AreEqual("false", ReadParameter(ReadFormXml(formId).Descendants("control").Single(), "Border"));
        Assert.AreEqual(1, _service.Updates);
        Assert.AreEqual(1, _service.Publishes);
    }

    [TestMethod]
    public async Task WebResource_UpdateRejectsMissingReplacementWithoutWriting()
    {
        SeedWebResource(HtmlResourceName, 1);
        var formId = SeedForm("Preview");
        await ApplyValidatedWebResource(formId, AddHtmlResource);
        var form = ReadFormXml(formId);
        var result = await ApplyWebResource(formId, """
            {"action":"manage_webresource","manage_action":"update","control_id":"WebResource_Preview_Xtl",
             "webresource_name":"abiz_/missing.html","label":"New label"}
            """);

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "was not found in Dataverse");
        Assert.IsTrue(XNode.DeepEquals(form, ReadFormXml(formId)));
        Assert.AreEqual(1, _service.Updates);
        Assert.AreEqual(1, _service.Publishes);
    }

    private Guid SeedWebResource(string name, int type, string? displayName = null)
    {
        var resource = new Entity("webresource", Guid.NewGuid())
        {
            ["name"] = name,
            ["webresourcetype"] = new OptionSetValue(type)
        };
        if (displayName != null)
            resource["displayname"] = displayName;
        return _ctx.GetOrganizationService().Create(resource);
    }

    private Task<CallToolResult> ApplyWebResource(Guid id, string operations) =>
        NewTool().manage_form(null!, "update", "account", id.ToString(), operations: $"[{operations}]");

    private async Task ApplyValidatedWebResource(Guid id, string operations)
    {
        var result = await ApplyWebResource(id, operations);
        Assert.IsFalse(result.IsError == true, Text(result));
        Assert.IsTrue(Structured(result).GetProperty("validated").GetBoolean());
        Assert.IsTrue(Structured(result).GetProperty("published").GetBoolean());
        var getSchemaSet = typeof(ManageFormTool).GetMethod("GetSchemaSet", BindingFlags.NonPublic | BindingFlags.Static)!;
        var schemas = (XmlSchemaSet)getSchemaSet.Invoke(null, null)!;
        ReadFormXml(id).Validate(schemas, null);
    }

    private static string? ReadParameter(XElement control, string name) => (string?)control.Element("parameters")?.Element(name);
}
