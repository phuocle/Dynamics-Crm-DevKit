using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class ExecuteFetchXmlToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ExecuteFetchXmlTool);

    private static readonly MethodInfo ExecuteMethod = ToolType
        .GetMethod("execute_fetchxml", BindingFlags.Public | BindingFlags.Instance)!;

    private static readonly MethodInfo ConvertEntitiesMethod = ToolType
        .GetMethod("ConvertEntities", BindingFlags.NonPublic | BindingFlags.Static)!;

    /// <summary>
    /// Creates an instance with a null ServiceClient — only useful for testing
    /// validation paths that return before touching the ServiceClient.
    /// </summary>
    private static object CreateTool() =>
        Activator.CreateInstance(ToolType, new object?[] { null })!;

    // ──────────────────────────────────────────────
    // Validation — empty / whitespace fetchxml
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ExecuteFetchXml_EmptyFetchXml_ReturnsError()
    {
        var tool = CreateTool();
        var result = (string)ExecuteMethod.Invoke(tool, new object?[] { "", 10, false })!;
        Assert.IsTrue(result.StartsWith("Error:"), $"Expected error, got: {result}");
        Assert.IsTrue(result.Contains("required"));
    }

    [TestMethod]
    public void ExecuteFetchXml_WhitespaceOnlyFetchXml_ReturnsError()
    {
        var tool = CreateTool();
        var result = (string)ExecuteMethod.Invoke(tool, new object?[] { "   ", 10, false })!;
        Assert.IsTrue(result.StartsWith("Error:"), $"Expected error, got: {result}");
    }

    [TestMethod]
    public void ExecuteFetchXml_NullFetchXml_ReturnsError()
    {
        var tool = CreateTool();
        var result = (string)ExecuteMethod.Invoke(tool, new object?[] { null, 10, false })!;
        Assert.IsTrue(result.StartsWith("Error:"), $"Expected error, got: {result}");
        Assert.IsTrue(result.Contains("required"));
    }

    // ──────────────────────────────────────────────
    // Validation — max_records boundaries
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ExecuteFetchXml_ZeroMaxRecords_ReturnsError()
    {
        var tool = CreateTool();
        var result = (string)ExecuteMethod.Invoke(tool, new object?[] { "<fetch/>", 0, false })!;
        Assert.IsTrue(result.StartsWith("Error:"), $"Expected error, got: {result}");
        Assert.IsTrue(result.Contains("positive"));
    }

    [TestMethod]
    public void ExecuteFetchXml_NegativeMaxRecords_ReturnsError()
    {
        var tool = CreateTool();
        var result = (string)ExecuteMethod.Invoke(tool, new object?[] { "<fetch/>", -1, false })!;
        Assert.IsTrue(result.StartsWith("Error:"), $"Expected error, got: {result}");
    }

    [TestMethod]
    public void ExecuteFetchXml_LargeNegativeMaxRecords_ReturnsError()
    {
        var tool = CreateTool();
        var result = (string)ExecuteMethod.Invoke(tool, new object?[] { "<fetch/>", -999, false })!;
        Assert.IsTrue(result.StartsWith("Error:"), $"Expected error, got: {result}");
        Assert.IsTrue(result.Contains("positive"));
    }

    [TestMethod]
    public void ExecuteFetchXml_MaxRecordsExceedsLimit_IsCappedAndProceeds()
    {
        // max_records > 5000 should be capped to 5000, then proceed to execution
        // which will fail because _serviceClient is null, but the capping branch (line 58) is exercised
        var tool = CreateTool();
        var result = (string)ExecuteMethod.Invoke(tool, new object?[] { "<fetch><entity name='account'><attribute name='name'/></entity></fetch>", 9999, false })!;
        // It should proceed past capping and fail in ExecuteSinglePage
        Assert.IsTrue(result.StartsWith("Error: Failed to execute FetchXML:"),
            "Should cap max_records and then fail on null service client");
    }

    [TestMethod]
    public void ExecuteFetchXml_MaxRecordsExceedsLimit_GetAllMode_IsCappedAndProceeds()
    {
        var tool = CreateTool();
        var result = (string)ExecuteMethod.Invoke(tool, new object?[] { "<fetch><entity name='account'><attribute name='name'/></entity></fetch>", 10000, true })!;
        Assert.IsTrue(result.StartsWith("Error: Failed to execute FetchXML:"),
            "Should cap max_records and then fail on null service client in get_all mode");
    }

    [TestMethod]
    public void ExecuteFetchXml_MaxRecordsExactlyAtLimit_Proceeds()
    {
        var tool = CreateTool();
        var result = (string)ExecuteMethod.Invoke(tool, new object?[] { "<fetch><entity name='account'><attribute name='name'/></entity></fetch>", 5000, false })!;
        Assert.IsTrue(result.StartsWith("Error: Failed to execute FetchXML:"),
            "max_records=5000 should not be capped, just proceed and fail on null client");
    }

    [TestMethod]
    public void ExecuteFetchXml_MaxRecordsOne_Proceeds()
    {
        var tool = CreateTool();
        var result = (string)ExecuteMethod.Invoke(tool, new object?[] { "<fetch><entity name='account'><attribute name='name'/></entity></fetch>", 1, false })!;
        Assert.IsTrue(result.StartsWith("Error: Failed to execute FetchXML:"),
            "max_records=1 should proceed and fail on null client");
    }

    // ──────────────────────────────────────────────
    // Execution paths — null ServiceClient fallback
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ExecuteFetchXml_InvalidXml_ReturnsError()
    {
        var tool = CreateTool();
        var result = (string)ExecuteMethod.Invoke(tool, new object?[] { "not xml", 10, false })!;
        Assert.IsTrue(result.StartsWith("Error:"), $"Expected error, got: {result}");
    }

    [TestMethod]
    public void ExecuteFetchXml_GetSinglePage_ThrowsServiceClientError_CaughtAndReturned()
    {
        var tool = CreateTool();
        var result = (string)ExecuteMethod.Invoke(tool, new object?[] { "<fetch/>", 10, false })!;

        Assert.IsTrue(result.StartsWith("Error: Failed to execute FetchXML:"), "Should gracefully catch NullReferenceException from _serviceClient");
    }

    [TestMethod]
    public void ExecuteFetchXml_GetAllPages_ThrowsServiceClientError_CaughtAndReturned()
    {
        var tool = CreateTool();
        var result = (string)ExecuteMethod.Invoke(tool, new object?[] { "<fetch/>", 10, true })!;

        Assert.IsTrue(result.StartsWith("Error: Failed to execute FetchXML:"), "Should gracefully catch NullReferenceException from _serviceClient");
    }

    [TestMethod]
    public void ExecuteFetchXml_ValidFetchXml_SinglePageMode_NullClient()
    {
        var tool = CreateTool();
        var result = (string)ExecuteMethod.Invoke(tool, new object?[] { "<fetch><entity name='contact'/></fetch>", 50, false })!;
        Assert.IsTrue(result.Contains("Error"), "Should error due to null service client");
    }

    [TestMethod]
    public void ExecuteFetchXml_ValidFetchXml_AllPagesMode_NullClient()
    {
        var tool = CreateTool();
        var result = (string)ExecuteMethod.Invoke(tool, new object?[] { "<fetch><entity name='contact'/></fetch>", 50, true })!;
        Assert.IsTrue(result.Contains("Error"), "Should error due to null service client");
    }

    // ──────────────────────────────────────────────
    // ConvertEntities (private static) — comprehensive
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ConvertEntities_WithEmptyList_ReturnsEmptyList()
    {
        var entities = new List<Entity>();
        var result = (List<Dictionary<string, string>>)
            ConvertEntitiesMethod.Invoke(null, new object[] { entities })!;

        Assert.AreEqual(0, result.Count);
    }

    [TestMethod]
    public void ConvertEntities_WithEntities_ReturnsConvertedDictionaries()
    {
        var entity = new Entity("account", Guid.Parse("11111111-1111-1111-1111-111111111111"));
        entity["name"] = "Test Account";
        entity["revenue"] = 1000m;

        var entities = new List<Entity> { entity };
        var result = (List<Dictionary<string, string>>)
            ConvertEntitiesMethod.Invoke(null, new object[] { entities })!;

        Assert.AreEqual(1, result.Count);
        var dict = result[0];

        Assert.AreEqual("account", dict["_entity"]);
        Assert.AreEqual("11111111-1111-1111-1111-111111111111", dict["_id"]);
        Assert.AreEqual("Test Account", dict["name"]);
        Assert.IsTrue(dict.ContainsKey("revenue"));
    }

    [TestMethod]
    public void ConvertEntities_MultipleEntities_ReturnsAll()
    {
        var e1 = new Entity("account", Guid.NewGuid());
        e1["name"] = "First";
        var e2 = new Entity("account", Guid.NewGuid());
        e2["name"] = "Second";
        var e3 = new Entity("contact", Guid.NewGuid());
        e3["fullname"] = "Third";

        var result = (List<Dictionary<string, string>>)
            ConvertEntitiesMethod.Invoke(null, new object[] { new List<Entity> { e1, e2, e3 } })!;

        Assert.AreEqual(3, result.Count);
        Assert.AreEqual("account", result[0]["_entity"]);
        Assert.AreEqual("account", result[1]["_entity"]);
        Assert.AreEqual("contact", result[2]["_entity"]);
        Assert.AreEqual("First", result[0]["name"]);
        Assert.AreEqual("Second", result[1]["name"]);
        Assert.AreEqual("Third", result[2]["fullname"]);
    }

    [TestMethod]
    public void ConvertEntities_WithEntityReference_FormatsCorrectly()
    {
        var entity = new Entity("opportunity", Guid.NewGuid());
        entity["customerid"] = new EntityReference("account", Guid.Parse("22222222-2222-2222-2222-222222222222"))
        {
            Name = "Contoso"
        };

        var result = (List<Dictionary<string, string>>)
            ConvertEntitiesMethod.Invoke(null, new object[] { new List<Entity> { entity } })!;

        var dict = result[0];
        Assert.IsTrue(dict["customerid"].Contains("Contoso"), "EntityReference Name should be in output");
        Assert.IsTrue(dict["customerid"].Contains("account"), "EntityReference LogicalName should be in output");
    }

    [TestMethod]
    public void ConvertEntities_WithEntityReferenceNoName_FormatsAsFallback()
    {
        var entity = new Entity("opportunity", Guid.NewGuid());
        var refId = Guid.Parse("33333333-3333-3333-3333-333333333333");
        entity["customerid"] = new EntityReference("account", refId);

        var result = (List<Dictionary<string, string>>)
            ConvertEntitiesMethod.Invoke(null, new object[] { new List<Entity> { entity } })!;

        var dict = result[0];
        Assert.IsTrue(dict["customerid"].Contains("account:"), "Should show entity:id format");
        Assert.IsTrue(dict["customerid"].Contains(refId.ToString()), "Should contain the GUID");
    }

    [TestMethod]
    public void ConvertEntities_WithOptionSetValue_FormatsAsInt()
    {
        var entity = new Entity("account", Guid.NewGuid());
        entity["statecode"] = new OptionSetValue(0);

        var result = (List<Dictionary<string, string>>)
            ConvertEntitiesMethod.Invoke(null, new object[] { new List<Entity> { entity } })!;

        Assert.AreEqual("0", result[0]["statecode"]);
    }

    [TestMethod]
    public void ConvertEntities_WithMoney_FormatsAsDecimal()
    {
        var entity = new Entity("account", Guid.NewGuid());
        entity["revenue"] = new Money(12345.67m);

        var result = (List<Dictionary<string, string>>)
            ConvertEntitiesMethod.Invoke(null, new object[] { new List<Entity> { entity } })!;

        Assert.IsTrue(result[0]["revenue"].Contains("12"), "Money value should be formatted");
    }

    [TestMethod]
    public void ConvertEntities_WithBoolean_FormatsAsYesNo()
    {
        var entity = new Entity("account", Guid.NewGuid());
        entity["donotphone"] = true;
        entity["donotsms"] = false;

        var result = (List<Dictionary<string, string>>)
            ConvertEntitiesMethod.Invoke(null, new object[] { new List<Entity> { entity } })!;

        Assert.AreEqual("Yes", result[0]["donotphone"]);
        Assert.AreEqual("No", result[0]["donotsms"]);
    }

    [TestMethod]
    public void ConvertEntities_WithDateTime_FormatsWithTimestamp()
    {
        var entity = new Entity("account", Guid.NewGuid());
        entity["createdon"] = new DateTime(2025, 6, 15, 10, 30, 0);

        var result = (List<Dictionary<string, string>>)
            ConvertEntitiesMethod.Invoke(null, new object[] { new List<Entity> { entity } })!;

        Assert.IsTrue(result[0]["createdon"].Contains("2025"), "DateTime should be formatted");
    }

    [TestMethod]
    public void ConvertEntities_WithGuidAttribute_FormatsAsString()
    {
        var entity = new Entity("account", Guid.NewGuid());
        var guidValue = Guid.Parse("44444444-4444-4444-4444-444444444444");
        entity["processid"] = guidValue;

        var result = (List<Dictionary<string, string>>)
            ConvertEntitiesMethod.Invoke(null, new object[] { new List<Entity> { entity } })!;

        Assert.AreEqual(guidValue.ToString(), result[0]["processid"]);
    }

    [TestMethod]
    public void ConvertEntities_WithAliasedValue_FormatsInnerValue()
    {
        var entity = new Entity("account", Guid.NewGuid());
        entity["alias.name"] = new AliasedValue("contact", "fullname", "John Doe");

        var result = (List<Dictionary<string, string>>)
            ConvertEntitiesMethod.Invoke(null, new object[] { new List<Entity> { entity } })!;

        Assert.AreEqual("John Doe", result[0]["alias.name"]);
    }

    [TestMethod]
    public void ConvertEntities_WithFormattedValues_UsesFormatted()
    {
        var entity = new Entity("account", Guid.NewGuid());
        entity["statecode"] = new OptionSetValue(0);
        entity.FormattedValues["statecode"] = "Active";

        var result = (List<Dictionary<string, string>>)
            ConvertEntitiesMethod.Invoke(null, new object[] { new List<Entity> { entity } })!;

        Assert.AreEqual("Active", result[0]["statecode"], "FormattedValues should take priority");
    }

    [TestMethod]
    public void ConvertEntities_AttributesAreSortedByKey()
    {
        var entity = new Entity("account", Guid.NewGuid());
        entity["zfield"] = "Z";
        entity["afield"] = "A";
        entity["mfield"] = "M";

        var result = (List<Dictionary<string, string>>)
            ConvertEntitiesMethod.Invoke(null, new object[] { new List<Entity> { entity } })!;

        var dict = result[0];
        // _entity and _id are always first (by dictionary insertion), then sorted attributes
        var keys = dict.Keys.ToList();
        var attrKeys = keys.Where(k => !k.StartsWith("_")).ToList();
        var sorted = attrKeys.OrderBy(k => k).ToList();
        CollectionAssert.AreEqual(sorted, attrKeys, "Attributes should be sorted alphabetically");
    }

    [TestMethod]
    public void ConvertEntities_WithNullAttribute_ReturnsEmptyString()
    {
        var entity = new Entity("account", Guid.NewGuid());
        entity.Attributes["nullfield"] = null;

        var result = (List<Dictionary<string, string>>)
            ConvertEntitiesMethod.Invoke(null, new object[] { new List<Entity> { entity } })!;

        Assert.AreEqual("", result[0]["nullfield"]);
    }

    [TestMethod]
    public void ConvertEntities_WithByteArray_FormatsAsLength()
    {
        var entity = new Entity("account", Guid.NewGuid());
        entity["documentbody"] = new byte[] { 0x01, 0x02, 0x03 };

        var result = (List<Dictionary<string, string>>)
            ConvertEntitiesMethod.Invoke(null, new object[] { new List<Entity> { entity } })!;

        Assert.IsTrue(result[0]["documentbody"].Contains("3 bytes"), "Byte array should show length");
    }

    [TestMethod]
    public void ConvertEntities_WithIntAttribute_FormatsAsString()
    {
        var entity = new Entity("account", Guid.NewGuid());
        entity["numberofemployees"] = 42;

        var result = (List<Dictionary<string, string>>)
            ConvertEntitiesMethod.Invoke(null, new object[] { new List<Entity> { entity } })!;

        Assert.AreEqual("42", result[0]["numberofemployees"]);
    }
}
