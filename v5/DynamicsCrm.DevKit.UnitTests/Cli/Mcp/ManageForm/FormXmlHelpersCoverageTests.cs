using DynamicsCrm.DevKit.Cli.Mcp.Tools.Form;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageForm;

[TestClass]
public sealed class FormXmlHelpersCoverageTests
{
    [TestMethod]
    public void ResolveClassId_CoversMetadataTypesAndFormats()
    {
        Assert.AreEqual(ControlClassId.SINGLE_LINE_OF_TEXT_EMAIL,
            FormXmlHelpers.ResolveClassId(new StringAttributeMetadata { FormatName = StringFormatName.Email }));
        Assert.AreEqual(ControlClassId.SINGLE_LINE_OF_TEXT_URL,
            FormXmlHelpers.ResolveClassId(new StringAttributeMetadata { FormatName = StringFormatName.Url }));
        Assert.AreEqual(ControlClassId.SINGLE_LINE_OF_TEXT_TICKER_SYMBOL,
            FormXmlHelpers.ResolveClassId(new StringAttributeMetadata { FormatName = StringFormatName.TickerSymbol }));
        Assert.AreEqual(ControlClassId.MULTI_LINES_OF_TEXT,
            FormXmlHelpers.ResolveClassId(new StringAttributeMetadata { FormatName = StringFormatName.TextArea }));
        Assert.AreEqual(ControlClassId.SINGLE_LINE_OF_TEXT,
            FormXmlHelpers.ResolveClassId(new StringAttributeMetadata { FormatName = StringFormatName.Text }));
        Assert.AreEqual(ControlClassId.WHOLE_NUMBER_DURATION,
            FormXmlHelpers.ResolveClassId(new IntegerAttributeMetadata { Format = IntegerFormat.Duration }));
        Assert.AreEqual(ControlClassId.WHOLE_NUMBER_LANGUAGE,
            FormXmlHelpers.ResolveClassId(new IntegerAttributeMetadata { Format = IntegerFormat.Language }));
        Assert.AreEqual(ControlClassId.WHOLE_NUMBER_TIMEZONE,
            FormXmlHelpers.ResolveClassId(new IntegerAttributeMetadata { Format = IntegerFormat.TimeZone }));

        var remaining = new AttributeMetadata[]
        {
            new MemoAttributeMetadata(), new DateTimeAttributeMetadata(), new BooleanAttributeMetadata(),
            new PicklistAttributeMetadata(), new StateAttributeMetadata(), new StatusAttributeMetadata(),
            new DoubleAttributeMetadata(), new DecimalAttributeMetadata(), new MoneyAttributeMetadata(),
            new LookupAttributeMetadata(), new MultiSelectPicklistAttributeMetadata(), new ImageAttributeMetadata(),
            new FileAttributeMetadata(), new EntityNameAttributeMetadata(), new UniqueIdentifierAttributeMetadata(),
            new BigIntAttributeMetadata()
        };

        foreach (var attribute in remaining)
            Assert.IsFalse(string.IsNullOrWhiteSpace(FormXmlHelpers.ResolveClassId(attribute)), attribute.GetType().Name);
        Assert.AreEqual(ControlClassId.SINGLE_LINE_OF_TEXT, FormXmlHelpers.ResolveClassId(null!));
    }

    [TestMethod]
    public void ControlIdsRowsAndNames_HandleDuplicatesAndPartialRows()
    {
        var form = XDocument.Parse("<form><control id='name'/><control id='NAME1'/><control /></form>");
        var ids = FormXmlHelpers.CollectExistingControlIds(form);
        Assert.AreEqual(2, ids.Count);
        Assert.AreEqual("name2", FormXmlHelpers.DeduplicateControlId("name", ids));
        Assert.AreEqual("description", FormXmlHelpers.DeduplicateControlId("description", ids));

        var rows = FormXmlHelpers.BuildRows(new List<XElement>
        {
            new("cell", new XAttribute("id", "a")),
            new("cell", new XAttribute("id", "b")),
            new("cell", new XAttribute("id", "c"))
        }, 2);
        Assert.AreEqual(2, rows.Count);
        Assert.AreEqual(2, rows[0].Elements("cell").Count());
        Assert.AreEqual(2, rows[1].Elements("cell").Count());
        Assert.IsTrue(rows[1].Elements("cell").Last().Attribute("id")!.Value.StartsWith("{"));
        Assert.AreEqual(0, FormXmlHelpers.BuildRows(new List<XElement>(), 2).Count);
    }

    [TestMethod]
    public void FindHelpers_ResolveByLogicalNameLabelAndAttribute()
    {
        var xml = XDocument.Parse("""
            <form><tabs>
              <tab name='tab_logical'><labels><label description='Logical Tab' /></labels>
                <columns><column><sections>
                  <section name='sec_logical'><labels><label description='Pretty Section' /></labels><rows>
                    <row><cell><control datafieldname='name' /></cell></row>
                  </rows></section>
                </sections></column></columns>
              </tab>
              <tab name='tab_empty' />
            </tabs></form>
            """);
        var tabs = xml.Root!.Element("tabs")!;
        var tab = tabs.Elements("tab").First();
        var section = tab.Descendants("section").First();

        Assert.AreSame(tab, FormXmlHelpers.FindTab(xml, "TAB_LOGICAL"));
        Assert.AreSame(tab, FormXmlHelpers.FindTab(xml, "logical tab"));
        Assert.IsNull(FormXmlHelpers.FindTab(xml, "missing"));
        Assert.AreSame(section, FormXmlHelpers.FindSection(tab, "SEC_LOGICAL"));
        Assert.AreSame(section, FormXmlHelpers.FindSection(tab, "pretty section"));
        Assert.IsNull(FormXmlHelpers.FindSection(tab, "missing"));
        Assert.IsNotNull(FormXmlHelpers.FindRowByFieldName(section.Element("rows")!, "NAME"));
        Assert.IsNull(FormXmlHelpers.FindRowByFieldName(section.Element("rows")!, "missing"));
        CollectionAssert.AreEqual(new[] { "tab_logical", "tab_empty" }, FormXmlHelpers.GetTabNames(xml));
        CollectionAssert.AreEqual(new[] { "sec_logical" }, FormXmlHelpers.GetSectionNames(tab));
        CollectionAssert.AreEqual(Array.Empty<string>(), FormXmlHelpers.GetTabNames(XDocument.Parse("<form />")));

        var events = new XElement("events",
            new XElement("event", new XAttribute("name", "OnLoad")),
            new XElement("event", new XAttribute("name", "OnChange"), new XAttribute("attribute", "name")));
        Assert.IsNotNull(FormXmlHelpers.FindEvent(events, "onload", null));
        Assert.IsNotNull(FormXmlHelpers.FindEvent(events, "onchange", "NAME"));
        Assert.IsNull(FormXmlHelpers.FindEvent(events, "onchange", null));
    }

    [TestMethod]
    public void ResolvePosition_ReadsCombinedBareAndFallbackReferences()
    {
        Assert.AreEqual("after:tab_two", ResolvePosition("{\"position\":\"after:tab_two\"}"));
        Assert.AreEqual("before:tab_two", ResolvePosition("{\"position\":\"BEFORE\",\"reference_tab\":\" tab_two \"}"));
        Assert.AreEqual("after:section_two", ResolvePosition("{\"position\":\"after\",\"reference_section\":\"section_two\"}"));
        Assert.AreEqual("before:explicit", ResolvePosition("{\"position\":\"before\",\"ref\":\"explicit\",\"reference\":\"fallback\"}", "position", "ref"));
        Assert.AreEqual("last", ResolvePosition("{\"position\":\"before\"}"));
        Assert.AreEqual("first", ResolvePosition("{\"position\":\"first\"}"));
        Assert.AreEqual("last", ResolvePosition("{}"));
    }

    [TestMethod]
    public void InsertHelpers_CoverPositionsAndMissingTargets()
    {
        var parent = XElement.Parse("<tabs><tab name='one' /><tab name='Two'><labels><label description='Second' /></labels></tab></tabs>");
        FormXmlHelpers.InsertElement(parent, new XElement("tab", new XAttribute("name", "zero")), "first", "tab", "name");
        FormXmlHelpers.InsertElement(parent, new XElement("tab", new XAttribute("name", "after")), "after:one", "tab", "name");
        FormXmlHelpers.InsertElement(parent, new XElement("tab", new XAttribute("name", "before")), "before:second", "tab", "name");
        FormXmlHelpers.InsertElement(parent, new XElement("tab", new XAttribute("name", "last")), "last", "tab", "name");
        CollectionAssert.AreEqual(new[] { "zero", "one", "after", "before", "Two", "last" },
            parent.Elements("tab").Select(t => (string)t.Attribute("name")).ToArray());

        InvalidOperationException ex = null;
        try
        {
            FormXmlHelpers.InsertElement(parent, new XElement("tab"), "after:nope", "tab", "name");
            Assert.Fail("Expected a missing-position exception.");
        }
        catch (InvalidOperationException caught)
        {
            ex = caught;
        }
        StringAssert.Contains(ex.Message, "Available:");

        var rows = XElement.Parse("<rows><row><control datafieldname='one' /></row><row><control datafieldname='two' /></row></rows>");
        FormXmlHelpers.InsertFieldRows(rows, new List<XElement> { new("row", new XAttribute("id", "a")) }, "after:one");
        FormXmlHelpers.InsertFieldRows(rows, new List<XElement> { new("row", new XAttribute("id", "b")) }, "before:two");
        FormXmlHelpers.InsertFieldRows(rows, new List<XElement> { new("row", new XAttribute("id", "c")) }, "first");
        FormXmlHelpers.InsertFieldRows(rows, new List<XElement> { new("row", new XAttribute("id", "d")) }, "after:missing");
        FormXmlHelpers.InsertFieldRows(rows, new List<XElement> { new("row", new XAttribute("id", "e")) }, "last");
        FormXmlHelpers.InsertFieldRows(rows, new List<XElement>(), "first");
        CollectionAssert.AreEqual(new[] { "c", "field", "a", "b", "field", "d", "e" },
            rows.Elements("row").Select(r => (string)r.Attribute("id") ?? "field").ToArray());
    }

    [TestMethod]
    public void PrimitivePropertiesAndHints_CoverDefaultsNearMatchesAndFormatting()
    {
        using var doc = JsonDocument.Parse("{\"text\":\"value\",\"number\":3,\"flag\":true,\"other\":false}");
        var root = doc.RootElement;
        Assert.AreEqual("value", FormXmlHelpers.GetStringProp(root, "text"));
        Assert.IsNull(FormXmlHelpers.GetStringProp(root, "number"));
        Assert.AreEqual(3, FormXmlHelpers.GetIntProp(root, "number", 9));
        Assert.AreEqual(9, FormXmlHelpers.GetIntProp(root, "missing", 9));
        Assert.IsTrue(FormXmlHelpers.GetBoolProp(root, "flag", false));
        Assert.AreEqual(false, FormXmlHelpers.GetBoolProp(root, "missing", false));

        Assert.AreEqual("account_sec_primary_contact", FormXmlHelpers.AutoSectionName("tab_account", "Primary Contact"));
        Assert.AreEqual("tab_primary_contact", FormXmlHelpers.AutoTabName("Primary Contact"));
        Assert.AreEqual("abc_def", FormXmlHelpers.Sanitize(" ABC---Def "));
        CollectionAssert.AreEqual(new[] { "50%", "50%" }, FormXmlHelpers.GetTabColumnWidths(2));
        CollectionAssert.AreEqual(new[] { "33%", "34%", "33%" }, FormXmlHelpers.GetTabColumnWidths(3));
        CollectionAssert.AreEqual(new[] { "100%" }, FormXmlHelpers.GetTabColumnWidths(4));
        Assert.AreEqual("name", FormXmlHelpers.CorrectFieldName("display", new StringAttributeMetadata { LogicalName = "name" }));
        Assert.AreEqual("display", FormXmlHelpers.CorrectFieldName("display", null));

        Assert.IsTrue(FormXmlHelpers.LevenshteinClose("name", "nAme"));
        Assert.IsTrue(FormXmlHelpers.LevenshteinClose("name", "naxe"));
        Assert.IsFalse(FormXmlHelpers.LevenshteinClose("name", "a very long field"));
        Assert.IsFalse(FormXmlHelpers.LevenshteinClose("name", "zzzzzz"));

        Assert.AreEqual("", FormXmlHelpers.BuildProvidedKeysHint(JsonDocument.Parse("[]").RootElement, "tab"));
        Assert.AreEqual("", FormXmlHelpers.BuildProvidedKeysHint(JsonDocument.Parse("{}").RootElement, "tab"));
        var hint = FormXmlHelpers.BuildProvidedKeysHint(JsonDocument.Parse("{\"tab_name\":1}").RootElement, "tab", "section");
        StringAssert.Contains(hint, "Provided key(s): tab_name");
        StringAssert.Contains(hint, "Valid: tab, section");
    }

    private static string ResolvePosition(string json, string positionKey = "position", string referenceKey = null)
    {
        using var doc = JsonDocument.Parse(json);
        return FormXmlHelpers.ResolvePosition(doc.RootElement, positionKey, referenceKey);
    }
}
