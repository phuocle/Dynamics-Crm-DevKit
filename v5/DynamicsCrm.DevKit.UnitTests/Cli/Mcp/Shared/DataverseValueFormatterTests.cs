using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Globalization;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

/// <summary>
/// Tests for DataverseValueFormatter.FormatValue() — formats Dataverse Entity attribute values
/// for display. The class is internal, so we access it via reflection.
/// </summary>
[TestClass]
public class DataverseValueFormatterTests
{
    private static readonly Type FormatterType = typeof(DynamicsCrm.DevKit.Cli.Mcp.McpServerHost).Assembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.DataverseValueFormatter")!;

    private static readonly MethodInfo FormatValueMethod = FormatterType
        .GetMethod("FormatValue", BindingFlags.Public | BindingFlags.Static)!;

    /// <summary>
    /// Helper to invoke the internal static FormatValue method via reflection.
    /// </summary>
    private static string FormatValue(Entity entity, string attributeName)
    {
        return (string)FormatValueMethod.Invoke(null, new object[] { entity, attributeName })!;
    }

    // ──────────────────────────────────────────────
    // Basic types
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatValue_String_ReturnsString()
    {
        var entity = new Entity("account");
        entity["name"] = "Contoso Ltd";

        var result = FormatValue(entity, "name");

        Assert.AreEqual("Contoso Ltd", result);
    }

    [TestMethod]
    public void FormatValue_Int_ReturnsToString()
    {
        var entity = new Entity("account");
        entity["numberofemployees"] = 42;

        var result = FormatValue(entity, "numberofemployees");

        Assert.AreEqual("42", result);
    }

    [TestMethod]
    public void FormatValue_MissingAttribute_ReturnsEmpty()
    {
        var entity = new Entity("account");

        var result = FormatValue(entity, "nonexistent");

        Assert.AreEqual("", result);
    }

    [TestMethod]
    public void FormatValue_NullAttributeValue_ReturnsEmpty()
    {
        var entity = new Entity("account");
        entity["name"] = null;

        var result = FormatValue(entity, "name");

        Assert.AreEqual("", result);
    }

    // ──────────────────────────────────────────────
    // EntityReference
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatValue_EntityReference_WithName_ReturnsFormatted()
    {
        var id = Guid.NewGuid();
        var entity = new Entity("account");
        entity["primarycontactid"] = new EntityReference("contact", id) { Name = "John Doe" };

        var result = FormatValue(entity, "primarycontactid");

        Assert.AreEqual($"John Doe (contact:{id})", result);
    }

    [TestMethod]
    public void FormatValue_EntityReference_WithoutName_ReturnsIdOnly()
    {
        var id = Guid.NewGuid();
        var entity = new Entity("account");
        entity["primarycontactid"] = new EntityReference("contact", id);

        var result = FormatValue(entity, "primarycontactid");

        Assert.AreEqual($"contact:{id}", result);
    }

    [TestMethod]
    public void FormatValue_EntityReference_EmptyName_ReturnsIdOnly()
    {
        var id = Guid.NewGuid();
        var entity = new Entity("account");
        entity["ownerid"] = new EntityReference("systemuser", id) { Name = "  " };

        var result = FormatValue(entity, "ownerid");

        Assert.AreEqual($"systemuser:{id}", result);
    }

    // ──────────────────────────────────────────────
    // OptionSetValue
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatValue_OptionSetValue_ReturnsValueString()
    {
        var entity = new Entity("account");
        entity["industrycode"] = new OptionSetValue(100000001);

        var result = FormatValue(entity, "industrycode");

        Assert.AreEqual("100000001", result);
    }

    // ──────────────────────────────────────────────
    // Money
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatValue_Money_ReturnsFormattedDecimal()
    {
        var entity = new Entity("account");
        entity["revenue"] = new Money(1234567.89m);

        var result = FormatValue(entity, "revenue");

        Assert.AreEqual("1,234,567.89", result);
    }

    [TestMethod]
    public void FormatValue_Money_Zero_ReturnsZeroFormatted()
    {
        var entity = new Entity("account");
        entity["revenue"] = new Money(0m);

        var result = FormatValue(entity, "revenue");

        Assert.AreEqual("0.00", result);
    }

    // ──────────────────────────────────────────────
    // DateTime
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatValue_DateTime_ReturnsIsoFormat()
    {
        var entity = new Entity("account");
        entity["createdon"] = new DateTime(2025, 6, 15, 14, 30, 45);

        var result = FormatValue(entity, "createdon");

        Assert.AreEqual("2025-06-15 14:30:45", result);
    }

    // ──────────────────────────────────────────────
    // Boolean
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatValue_Boolean_True_ReturnsYes()
    {
        var entity = new Entity("account");
        entity["donotphone"] = true;

        var result = FormatValue(entity, "donotphone");

        Assert.AreEqual("Yes", result);
    }

    [TestMethod]
    public void FormatValue_Boolean_False_ReturnsNo()
    {
        var entity = new Entity("account");
        entity["donotphone"] = false;

        var result = FormatValue(entity, "donotphone");

        Assert.AreEqual("No", result);
    }

    // ──────────────────────────────────────────────
    // AliasedValue
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatValue_AliasedValue_String_ReturnsInnerValue()
    {
        var entity = new Entity("account");
        entity["pub.friendlyname"] = new AliasedValue("publisher", "friendlyname", "My Publisher");

        var result = FormatValue(entity, "pub.friendlyname");

        Assert.AreEqual("My Publisher", result);
    }

    [TestMethod]
    public void FormatValue_AliasedValue_NullValue_ReturnsEmpty()
    {
        var entity = new Entity("account");
        entity["alias.field"] = new AliasedValue("other", "field", null);

        var result = FormatValue(entity, "alias.field");

        Assert.AreEqual("", result);
    }

    [TestMethod]
    public void FormatValue_AliasedValue_EntityReference_ReturnsFormatted()
    {
        var id = Guid.NewGuid();
        var er = new EntityReference("contact", id) { Name = "Jane" };
        var entity = new Entity("account");
        entity["alias.contactid"] = new AliasedValue("contact", "contactid", er);

        var result = FormatValue(entity, "alias.contactid");

        Assert.AreEqual($"Jane (contact:{id})", result);
    }

    [TestMethod]
    public void FormatValue_AliasedValue_OptionSetValue_ReturnsValue()
    {
        var entity = new Entity("account");
        entity["alias.statuscode"] = new AliasedValue("account", "statuscode", new OptionSetValue(1));

        var result = FormatValue(entity, "alias.statuscode");

        Assert.AreEqual("1", result);
    }

    [TestMethod]
    public void FormatValue_AliasedValue_Money_ReturnsFormatted()
    {
        var entity = new Entity("account");
        entity["alias.revenue"] = new AliasedValue("account", "revenue", new Money(99.50m));

        var result = FormatValue(entity, "alias.revenue");

        Assert.AreEqual("99.50", result);
    }

    [TestMethod]
    public void FormatValue_AliasedValue_DateTime_ReturnsFormatted()
    {
        var entity = new Entity("account");
        entity["alias.createdon"] = new AliasedValue("account", "createdon", new DateTime(2024, 1, 1, 0, 0, 0));

        var result = FormatValue(entity, "alias.createdon");

        Assert.AreEqual("2024-01-01 00:00:00", result);
    }

    [TestMethod]
    public void FormatValue_AliasedValue_Guid_ReturnsString()
    {
        var id = Guid.Parse("11111111-1111-1111-1111-111111111111");
        var entity = new Entity("account");
        entity["alias.id"] = new AliasedValue("account", "accountid", id);

        var result = FormatValue(entity, "alias.id");

        Assert.AreEqual("11111111-1111-1111-1111-111111111111", result);
    }

    // ──────────────────────────────────────────────
    // Guid (direct)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatValue_Guid_ReturnsString()
    {
        var id = Guid.Parse("aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee");
        var entity = new Entity("account");
        entity["accountid"] = id;

        var result = FormatValue(entity, "accountid");

        Assert.AreEqual("aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee", result);
    }

    // ──────────────────────────────────────────────
    // byte[]
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatValue_ByteArray_ReturnsBytesCount()
    {
        var entity = new Entity("annotation");
        entity["documentbody"] = new byte[1024];

        var result = FormatValue(entity, "documentbody");

        Assert.AreEqual("[1024 bytes]", result);
    }

    [TestMethod]
    public void FormatValue_ByteArray_Empty_ReturnsZeroBytes()
    {
        var entity = new Entity("annotation");
        entity["documentbody"] = Array.Empty<byte>();

        var result = FormatValue(entity, "documentbody");

        Assert.AreEqual("[0 bytes]", result);
    }

    // ──────────────────────────────────────────────
    // FormattedValues takes precedence
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatValue_FormattedValue_TakesPrecedence()
    {
        var entity = new Entity("account");
        entity["statuscode"] = new OptionSetValue(1);
        entity.FormattedValues["statuscode"] = "Active";

        var result = FormatValue(entity, "statuscode");

        Assert.AreEqual("Active", result);
    }

    [TestMethod]
    public void FormatValue_FormattedValue_EmptyString_FallsBackToRaw()
    {
        var entity = new Entity("account");
        entity["statuscode"] = new OptionSetValue(99);
        entity.FormattedValues["statuscode"] = "";

        var result = FormatValue(entity, "statuscode");

        // Empty formatted value should fall back to raw formatting
        Assert.AreEqual("99", result);
    }

    // ──────────────────────────────────────────────
    // Other / fallback
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatValue_Decimal_ReturnsToString()
    {
        var entity = new Entity("account");
        entity["exchangerate"] = 1.5m;

        var result = FormatValue(entity, "exchangerate");

        Assert.AreEqual("1.5", result);
    }

    [TestMethod]
    public void FormatValue_Double_ReturnsToString()
    {
        var entity = new Entity("account");
        entity["latitude"] = 47.6062;

        var result = FormatValue(entity, "latitude");

        Assert.AreEqual(47.6062.ToString(), result);
    }
}
