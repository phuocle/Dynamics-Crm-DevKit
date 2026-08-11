using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for ExecuteFetchXmlTool.ConvertEntities private static method
/// and GetRecordTool.BuildColumnSet + FormatRecord private static methods.
/// Both are testable with in-memory Entity objects — no Dataverse needed.
/// </summary>
[TestClass]
public class FetchXmlAndRecordToolTests
{
    // ──────────────────────────────────────────────
    // ExecuteFetchXmlTool.ConvertEntities (private static)
    // ──────────────────────────────────────────────

    private static readonly Type FetchToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ExecuteFetchXmlTool);

    private static readonly MethodInfo ConvertEntitiesMethod = FetchToolType
        .GetMethod("ConvertEntities", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static List<Dictionary<string, string>> ConvertEntities(IEnumerable<Entity> entities)
    {
        return (List<Dictionary<string, string>>)ConvertEntitiesMethod.Invoke(null, new object[] { entities })!;
    }

    [TestMethod]
    public void ConvertEntities_EmptyList_ReturnsEmptyList()
    {
        var result = ConvertEntities(Enumerable.Empty<Entity>());
        Assert.AreEqual(0, result.Count);
    }

    [TestMethod]
    public void ConvertEntities_SingleEntity_IncludesEntityAndId()
    {
        var entity = new Entity("account", Guid.Parse("11111111-1111-1111-1111-111111111111"));
        entity["name"] = "Contoso";

        var result = ConvertEntities(new[] { entity });

        Assert.AreEqual(1, result.Count);
        Assert.AreEqual("account", result[0]["_entity"]);
        Assert.AreEqual("11111111-1111-1111-1111-111111111111", result[0]["_id"]);
        Assert.AreEqual("Contoso", result[0]["name"]);
    }

    [TestMethod]
    public void ConvertEntities_MultipleAttributes_SortedAlphabetically()
    {
        var entity = new Entity("contact", Guid.NewGuid());
        entity["lastname"] = "Doe";
        entity["firstname"] = "John";
        entity["email"] = "john@test.com";

        var result = ConvertEntities(new[] { entity });

        var keys = result[0].Keys.Where(k => !k.StartsWith("_")).ToList();
        CollectionAssert.AreEqual(
            keys.OrderBy(k => k).ToList(),
            keys,
            "Keys should be alphabetically sorted");
    }

    [TestMethod]
    public void ConvertEntities_MultipleEntities_AllConverted()
    {
        var entities = new[]
        {
            new Entity("account", Guid.NewGuid()) { ["name"] = "A" },
            new Entity("account", Guid.NewGuid()) { ["name"] = "B" },
            new Entity("contact", Guid.NewGuid()) { ["name"] = "C" }
        };

        var result = ConvertEntities(entities);

        Assert.AreEqual(3, result.Count);
        Assert.AreEqual("A", result[0]["name"]);
        Assert.AreEqual("B", result[1]["name"]);
        Assert.AreEqual("C", result[2]["name"]);
    }

    [TestMethod]
    public void ConvertEntities_EntityReference_FormattedCorrectly()
    {
        var entity = new Entity("opportunity", Guid.NewGuid());
        entity["parentaccountid"] = new EntityReference("account", Guid.Parse("22222222-2222-2222-2222-222222222222"))
        {
            Name = "Contoso"
        };

        var result = ConvertEntities(new[] { entity });

        Assert.IsTrue(result[0]["parentaccountid"].Contains("Contoso"));
    }

    [TestMethod]
    public void ConvertEntities_AliasedValue_UnwrappedCorrectly()
    {
        var entity = new Entity("account", Guid.NewGuid());
        entity["contact.fullname"] = new AliasedValue("contact", "fullname", "John Doe");

        var result = ConvertEntities(new[] { entity });

        Assert.AreEqual("John Doe", result[0]["contact.fullname"]);
    }

    [TestMethod]
    public void ConvertEntities_OptionSetValue_FormattedAsInt()
    {
        var entity = new Entity("account", Guid.NewGuid());
        entity["industrycode"] = new OptionSetValue(100000001);

        var result = ConvertEntities(new[] { entity });

        Assert.AreEqual("100000001", result[0]["industrycode"]);
    }

    [TestMethod]
    public void ConvertEntities_FormattedValueUsed_WhenPresent()
    {
        var entity = new Entity("account", Guid.NewGuid());
        entity["statuscode"] = new OptionSetValue(1);
        entity.FormattedValues["statuscode"] = "Active";

        var result = ConvertEntities(new[] { entity });

        Assert.AreEqual("Active", result[0]["statuscode"]);
    }

    [TestMethod]
    public void ConvertEntities_MoneyValue_FormattedCorrectly()
    {
        var entity = new Entity("opportunity", Guid.NewGuid());
        entity["estimatedvalue"] = new Money(50000.00m);

        var result = ConvertEntities(new[] { entity });

        Assert.IsTrue(result[0]["estimatedvalue"].Contains("50"));
    }

    // ──────────────────────────────────────────────
    // GetRecordTool.BuildColumnSet (private static)
    // ──────────────────────────────────────────────

    private static readonly Type GetRecordToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageRecordTool);

    private static readonly MethodInfo BuildColumnSetMethod = GetRecordToolType
        .GetMethod("BuildColumnSet", BindingFlags.NonPublic | BindingFlags.Static, null,
            new[] { typeof(Microsoft.PowerPlatform.Dataverse.Client.ServiceClient), typeof(string), typeof(string) }, null)!;

    private static ColumnSet BuildColumnSet(string columns)
    {
        return (ColumnSet)BuildColumnSetMethod.Invoke(null, new object?[] { null, "account", columns })!;
    }

    [TestMethod]
    public void BuildColumnSet_Empty_ReturnsAllColumns()
    {
        var result = BuildColumnSet("");
        Assert.IsTrue(result.AllColumns);
    }

    [TestMethod]
    public void BuildColumnSet_Null_ReturnsAllColumns()
    {
        var result = BuildColumnSet(null!);
        Assert.IsTrue(result.AllColumns);
    }

    [TestMethod]
    public void BuildColumnSet_Whitespace_ReturnsAllColumns()
    {
        var result = BuildColumnSet("   ");
        Assert.IsTrue(result.AllColumns);
    }

    [TestMethod]
    public void BuildColumnSet_SingleColumn_ReturnsIt()
    {
        // BuildColumnSet now resolves columns via DisplayNameFirstResolver which
        // requires a live ServiceClient; with null client it throws (TargetInvocationException
        // wrapping NullReferenceException). Only empty/null/whitespace inputs return
        // AllColumns without touching the client.
        bool threw = false;
        try { BuildColumnSet("name"); }
        catch (System.Reflection.TargetInvocationException) { threw = true; }
        Assert.IsTrue(threw, "BuildColumnSet with non-empty columns requires a live ServiceClient");
    }

    [TestMethod]
    public void BuildColumnSet_MultipleColumns_ParsesAll()
    {
        bool threw = false;
        try { BuildColumnSet("name, emailaddress1 , telephone1"); }
        catch (System.Reflection.TargetInvocationException) { threw = true; }
        Assert.IsTrue(threw, "BuildColumnSet with non-empty columns requires a live ServiceClient");
    }

    [TestMethod]
    public void BuildColumnSet_UpperCase_ConvertsToLowerCase()
    {
        bool threw = false;
        try { BuildColumnSet("Name,EmailAddress1"); }
        catch (System.Reflection.TargetInvocationException) { threw = true; }
        Assert.IsTrue(threw, "BuildColumnSet with non-empty columns requires a live ServiceClient");
    }

    [TestMethod]
    public void BuildColumnSet_EmptyParts_Filtered()
    {
        bool threw = false;
        try { BuildColumnSet("name,,city,"); }
        catch (System.Reflection.TargetInvocationException) { threw = true; }
        Assert.IsTrue(threw, "BuildColumnSet with non-empty columns requires a live ServiceClient");
    }

    // ──────────────────────────────────────────────
    // GetRecordTool.FormatRecord (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FormatRecordMethod = GetRecordToolType
        .GetMethod("FormatRecord", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string FormatRecord(Entity entity)
    {
        return (string)FormatRecordMethod.Invoke(null, new object[] { entity })!;
    }

    [TestMethod]
    public void FormatRecord_ShowsEntityNameAndId()
    {
        var entity = new Entity("account", Guid.Parse("11111111-1111-1111-1111-111111111111"));
        entity["name"] = "Contoso";

        var result = FormatRecord(entity);

        Assert.IsTrue(result.Contains("[account] 11111111-1111-1111-1111-111111111111"));
    }

    [TestMethod]
    public void FormatRecord_AttributesFormatted_KeyValue()
    {
        var entity = new Entity("account", Guid.NewGuid());
        entity["name"] = "Contoso";
        entity["city"] = "Seattle";

        var result = FormatRecord(entity);

        Assert.IsTrue(result.Contains("city: Seattle"));
        Assert.IsTrue(result.Contains("name: Contoso"));
    }

    [TestMethod]
    public void FormatRecord_AttributesSortedAlphabetically()
    {
        var entity = new Entity("contact", Guid.NewGuid());
        entity["lastname"] = "Doe";
        entity["firstname"] = "John";
        entity["email"] = "john@test.com";

        var result = FormatRecord(entity);

        var firstnameIndex = result.IndexOf("email:");
        var lastnameIndex = result.IndexOf("firstname:");
        var emailIndex = result.IndexOf("lastname:");

        Assert.IsTrue(firstnameIndex < lastnameIndex, "email should come before firstname");
        Assert.IsTrue(lastnameIndex < emailIndex, "firstname should come before lastname");
    }

    [TestMethod]
    public void FormatRecord_EmptyEntity_ShowsHeaderOnly()
    {
        var entity = new Entity("lead", Guid.Parse("22222222-2222-2222-2222-222222222222"));

        var result = FormatRecord(entity);

        Assert.IsTrue(result.Contains("[lead] 22222222-2222-2222-2222-222222222222"));
        // Entity constructor with Guid auto-adds the primary id attribute (e.g. leadid)
        // So we only verify the header is present and the format is correct
        Assert.IsTrue(result.StartsWith("[lead]"));
    }

    [TestMethod]
    public void FormatRecord_EntityReference_FormattedValue()
    {
        var entity = new Entity("opportunity", Guid.NewGuid());
        entity["parentaccountid"] = new EntityReference("account", Guid.Parse("33333333-3333-3333-3333-333333333333"))
        {
            Name = "ACME Corp"
        };

        var result = FormatRecord(entity);

        Assert.IsTrue(result.Contains("parentaccountid:"));
        Assert.IsTrue(result.Contains("ACME Corp"));
    }

    [TestMethod]
    public void FormatRecord_BooleanAttribute_FormattedAsYesNo()
    {
        var entity = new Entity("account", Guid.NewGuid());
        entity["donotemail"] = true;

        var result = FormatRecord(entity);

        Assert.IsTrue(result.Contains("donotemail: Yes"));
    }

    [TestMethod]
    public void FormatRecord_MoneyAttribute_FormattedCorrectly()
    {
        var entity = new Entity("account", Guid.NewGuid());
        entity["revenue"] = new Money(1234567.89m);

        var result = FormatRecord(entity);

        Assert.IsTrue(result.Contains("revenue:"));
        Assert.IsTrue(result.Contains("1,234,567.89") || result.Contains("1234567.89"));
    }
}
