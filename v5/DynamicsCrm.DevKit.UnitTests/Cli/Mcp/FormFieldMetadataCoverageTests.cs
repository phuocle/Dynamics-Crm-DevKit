using DynamicsCrm.DevKit.Cli.Mcp.Tools.Form;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class FormFieldMetadataCoverageTests
{
    [TestMethod]
    public void CollectFieldNames_ReadsFieldsSectionsTargetsAndPositions()
    {
        var ops = ParseOps("""
[
  { "action": "manage_fields", "fields": ["Account Name", { "field": "Revenue" }], "position": "before:Primary Contact" },
  { "action": "manage_tab", "sections": [ { "fields": ["Description"] } ] },
  { "action": "manage_event", "target": "field:Status Reason" },
  { "action": "add_header_fields", "fields": ["Owner"] },
  { "action": "remove_fields", "fields": ["Ignored"] }
]
""");

        var names = FormFieldMetadata.CollectFieldNames(ops);

        CollectionAssert.AreEquivalent(new[]
        {
            "Account Name",
            "Revenue",
            "Primary Contact",
            "Description",
            "Status Reason",
            "Owner"
        }, names.ToArray());
    }

    [TestMethod]
    public void ResolveAndNormalizeFieldReferences_MapDisplayNamesAliasesAndPrefixedValues()
    {
        var attrMap = AttributeMap();
        var referenced = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
        {
            "Account Name",
            "Revenue",
            "Primary Contact",
            "Status Reason",
            "Owner"
        };

        var map = FormFieldMetadata.ResolveFieldReferences("account", referenced, attrMap);
        Assert.AreEqual("name", map["Account Name"]);
        Assert.AreEqual("revenue", map["Revenue"]);
        Assert.AreEqual("primarycontactid", map["Primary Contact"]);
        Assert.AreEqual("statuscode", map["Status Reason"]);
        Assert.AreEqual("ownerid", map["Owner"]);

        var ops = ParseOps("""
[
  { "action": "manage_fields", "fields": ["Account Name", { "field": "Revenue" }], "position": "after:Primary Contact" },
  { "action": "manage_event", "target": "field:Status Reason" },
  { "action": "manage_tab", "sections": [ { "fields": [ { "field": "Owner" } ] } ] }
]
""");

        var normalized = FormFieldMetadata.NormalizeFieldReferences(ops, map);
        var json = "[" + string.Join(",", normalized.Select(e => e.GetRawText())) + "]";
        StringAssert.Contains(json, "\"name\"");
        StringAssert.Contains(json, "\"revenue\"");
        StringAssert.Contains(json, "after:primarycontactid");
        StringAssert.Contains(json, "field:statuscode");
        StringAssert.Contains(json, "\"ownerid\"");
    }

    [TestMethod]
    public void NormalizeFieldReferences_EmptyMapOrNonObject_ReturnsOriginalShape()
    {
        var ops = ParseOps("""["literal", { "field": "Name" }]""");

        Assert.AreSame(ops, FormFieldMetadata.NormalizeFieldReferences(ops, new Dictionary<string, string>()));

        var normalized = FormFieldMetadata.NormalizeFieldReferences(ops, new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
        {
            ["Name"] = "name"
        });
        Assert.AreEqual(JsonValueKind.String, normalized[0].ValueKind);
        Assert.AreEqual("name", normalized[1].GetProperty("field").GetString());
    }

    [TestMethod]
    public void ParseFieldSpec_StringAndObject_ReturnExpectedDefaultsAndValues()
    {
        var textSpec = FormFieldMetadata.ParseFieldSpec(JsonDocument.Parse("\"name\"").RootElement);
        Assert.AreEqual("name", textSpec.fieldName);
        Assert.IsNull(textSpec.label);
        Assert.IsFalse(textSpec.disabled);
        Assert.IsTrue(textSpec.visible);
        Assert.AreEqual(1, textSpec.colspan);
        Assert.AreEqual(1, textSpec.rowspan);
        Assert.IsTrue(textSpec.showlabel);
        Assert.IsFalse(textSpec.hideOnPhone);

        var objectSpec = FormFieldMetadata.ParseFieldSpec(JsonDocument.Parse("""
{ "field": "revenue", "label": "Revenue", "disabled": true, "visible": false, "colspan": 2, "rowspan": 3, "showlabel": false, "hide_on_phone": true }
""").RootElement);
        Assert.AreEqual("revenue", objectSpec.fieldName);
        Assert.AreEqual("Revenue", objectSpec.label);
        Assert.IsTrue(objectSpec.disabled);
        Assert.IsFalse(objectSpec.visible);
        Assert.AreEqual(2, objectSpec.colspan);
        Assert.AreEqual(3, objectSpec.rowspan);
        Assert.IsFalse(objectSpec.showlabel);
        Assert.IsTrue(objectSpec.hideOnPhone);

        try
        {
            FormFieldMetadata.ParseFieldSpec(JsonDocument.Parse("""{ "label": "Missing" }""").RootElement);
            Assert.Fail("Expected InvalidOperationException was not thrown.");
        }
        catch (InvalidOperationException) { }
    }

    [TestMethod]
    public void ValidateFieldsExist_ThrowsWithSimilarNamesForMissingFields()
    {
        var missing = new HashSet<string>(StringComparer.OrdinalIgnoreCase) { "nam", "missing" };
        FormXmlOperationsException ex;
        try
        {
            FormFieldMetadata.ValidateFieldsExist("account", missing, AttributeMap());
            Assert.Fail("Expected FormXmlOperationsException was not thrown.");
            return;
        }
        catch (FormXmlOperationsException caught)
        {
            ex = caught;
        }

        StringAssert.Contains(ex.Message, "Field(s) not found");
        StringAssert.Contains(ex.Message, "'nam' not found");
        StringAssert.Contains(ex.Message, "Similar: name");
        StringAssert.Contains(ex.Message, "Use get_tables");
    }

    [TestMethod]
    public void PrivateFieldReferenceHelpers_HandlePrefixesAndStringValues()
    {
        var map = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
        {
            ["Display Name"] = "name"
        };

        Assert.AreEqual("before:name", Invoke("NormalizePrefixedFieldName", "before:Display Name", map, new[] { "before:", "after:" }));
        Assert.IsNull(Invoke("NormalizePrefixedFieldName", "middle:Display Name", map, new[] { "before:", "after:" }));
        Assert.AreEqual("Display Name", Invoke("GetPrefixedFieldName", "after:Display Name", new[] { "before:", "after:" }));
        Assert.IsNull(Invoke("GetPrefixedFieldName", "last", new[] { "before:", "after:" }));

        var tryMapArgs = new object?[] { " Display Name ", map, null };
        Assert.AreEqual(true, Invoke("TryMapFieldName", tryMapArgs));
        Assert.AreEqual("name", tryMapArgs[2]);

        Assert.AreEqual(true, Invoke("IsFieldReferenceProperty", "field"));
        Assert.AreEqual(true, Invoke("IsFieldReferenceProperty", "fields"));
        Assert.AreEqual(false, Invoke("IsFieldReferenceProperty", "label"));

        var obj = new JsonObject { ["field"] = "Display Name", ["number"] = 1 };
        Assert.AreEqual("Display Name", Invoke("GetStringValue", obj, "field"));
        Assert.IsNull(Invoke("GetStringValue", obj, "number"));

        var element = (JsonElement)Invoke("ToJsonElement", obj)!;
        Assert.AreEqual("Display Name", element.GetProperty("field").GetString());
    }

    private static List<JsonElement> ParseOps(string json)
    {
        using var doc = JsonDocument.Parse(json);
        return doc.RootElement.EnumerateArray().Select(e => e.Clone()).ToList();
    }

    private static Dictionary<string, AttributeMetadata> AttributeMap()
    {
        return new Dictionary<string, AttributeMetadata>(StringComparer.OrdinalIgnoreCase)
        {
            ["name"] = Attr("name", "Name", "Account Name"),
            ["revenue"] = Attr("revenue", "Revenue", "Revenue"),
            ["primarycontactid"] = Attr("primarycontactid", "PrimaryContactId", "Primary Contact"),
            ["statuscode"] = Attr("statuscode", "StatusCode", "Status Reason"),
            ["ownerid"] = Attr("ownerid", "OwnerId", "Owner")
        };
    }

    private static StringAttributeMetadata Attr(string logicalName, string schemaName, string label)
    {
        var localized = new Microsoft.Xrm.Sdk.LocalizedLabel(label, 1033);
        return new StringAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = schemaName,
            DisplayName = new Microsoft.Xrm.Sdk.Label
            {
                UserLocalizedLabel = localized,
                LocalizedLabels = { localized }
            }
        };
    }

    private static object? Invoke(string methodName, params object?[] args) =>
        typeof(FormFieldMetadata).GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args);
}
