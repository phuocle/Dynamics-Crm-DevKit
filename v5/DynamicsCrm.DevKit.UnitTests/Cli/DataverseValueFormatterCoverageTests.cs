using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class DataverseValueFormatterCoverageTests
{
    [TestMethod]
    public void FormatValue_MissingAttribute()
    {
        var e = new Entity("account");
        Assert.AreEqual("", DataverseValueFormatter.FormatValue(e, "name"));
    }

    [TestMethod]
    public void FormatValue_NullAttribute()
    {
        var e = new Entity("account");
        e["name"] = null;
        Assert.AreEqual("", DataverseValueFormatter.FormatValue(e, "name"));
    }

    [TestMethod]
    public void FormatValue_FormattedValueUsed()
    {
        var e = new Entity("account");
        e["statecode"] = new OptionSetValue(1);
        e.FormattedValues["statecode"] = "Active";
        Assert.AreEqual("Active", DataverseValueFormatter.FormatValue(e, "statecode"));
    }

    [TestMethod]
    public void FormatValue_EntityReference_WithName()
    {
        var e = new Entity("account");
        e["parentcustomerid"] = new EntityReference("contact", Guid.NewGuid()) { Name = "Alice" };
        var s = DataverseValueFormatter.FormatValue(e, "parentcustomerid");
        StringAssert.Contains(s, "Alice");
        StringAssert.Contains(s, "contact");
    }

    [TestMethod]
    public void FormatValue_EntityReference_NoName()
    {
        var id = Guid.NewGuid();
        var e = new Entity("account");
        e["parentcustomerid"] = new EntityReference("contact", id);
        var s = DataverseValueFormatter.FormatValue(e, "parentcustomerid");
        StringAssert.Contains(s, "contact:" + id);
    }

    [TestMethod]
    public void FormatValue_OptionSet()
    {
        var e = new Entity("account");
        e["opt"] = new OptionSetValue(100);
        Assert.AreEqual("100", DataverseValueFormatter.FormatValue(e, "opt"));
    }

    [TestMethod]
    public void FormatValue_Money()
    {
        var e = new Entity("account");
        e["revenue"] = new Money(123.45m);
        var s = DataverseValueFormatter.FormatValue(e, "revenue");
        StringAssert.Contains(s, "123");
    }

    [TestMethod]
    public void FormatValue_DateTime()
    {
        var e = new Entity("account");
        e["d"] = new DateTime(2026, 5, 15, 10, 30, 0);
        var s = DataverseValueFormatter.FormatValue(e, "d");
        StringAssert.Contains(s, "2026-05-15");
    }

    [TestMethod]
    public void FormatValue_Bool()
    {
        var e = new Entity("account");
        e["b"] = true;
        Assert.AreEqual("Yes", DataverseValueFormatter.FormatValue(e, "b"));
        e["b"] = false;
        Assert.AreEqual("No", DataverseValueFormatter.FormatValue(e, "b"));
    }

    [TestMethod]
    public void FormatValue_Guid()
    {
        var g = Guid.NewGuid();
        var e = new Entity("account");
        e["g"] = g;
        Assert.AreEqual(g.ToString(), DataverseValueFormatter.FormatValue(e, "g"));
    }

    [TestMethod]
    public void FormatValue_Bytes()
    {
        var e = new Entity("account");
        e["data"] = new byte[] { 1, 2, 3, 4, 5 };
        var s = DataverseValueFormatter.FormatValue(e, "data");
        StringAssert.Contains(s, "5 bytes");
    }

    [TestMethod]
    public void FormatValue_EntityCollection_Empty()
    {
        var e = new Entity("email");
        e["to"] = new EntityCollection(new List<Entity>());
        Assert.AreEqual("[]", DataverseValueFormatter.FormatValue(e, "to"));
    }

    [TestMethod]
    public void FormatValue_EntityCollection_PartyIdName()
    {
        var party = new Entity("activityparty") { Id = Guid.NewGuid() };
        party["partyid"] = new EntityReference("contact", Guid.NewGuid()) { Name = "Bob" };
        var ec = new EntityCollection(new List<Entity> { party });
        var e = new Entity("email");
        e["to"] = ec;
        var s = DataverseValueFormatter.FormatValue(e, "to");
        StringAssert.Contains(s, "Bob");
    }

    [TestMethod]
    public void FormatValue_EntityCollection_PartyIdWithAddress()
    {
        var party = new Entity("activityparty") { Id = Guid.NewGuid() };
        party["partyid"] = new EntityReference("contact", Guid.NewGuid()) { Name = "Carol" };
        party["addressused"] = "carol@x.com";
        var ec = new EntityCollection(new List<Entity> { party });
        var e = new Entity("email");
        e["to"] = ec;
        var s = DataverseValueFormatter.FormatValue(e, "to");
        StringAssert.Contains(s, "Carol");
        StringAssert.Contains(s, "carol@x.com");
    }

    [TestMethod]
    public void FormatValue_Aliased_EntityReference()
    {
        var e = new Entity("opportunity");
        e["a.ownerid"] = new AliasedValue("systemuser", "ownerid", new EntityReference("systemuser", Guid.NewGuid()) { Name = "Dan" });
        var s = DataverseValueFormatter.FormatValue(e, "a.ownerid");
        StringAssert.Contains(s, "Dan");
        StringAssert.Contains(s, "systemuser");
    }

    [TestMethod]
    public void FormatValue_Aliased_Null()
    {
        var e = new Entity("account");
        e["a.x"] = new AliasedValue("account", "x", null);
        Assert.AreEqual("", DataverseValueFormatter.FormatValue(e, "a.x"));
    }

    [TestMethod]
    public void FormatValue_Aliased_Other()
    {
        var e = new Entity("account");
        e["a.x"] = new AliasedValue("account", "x", "raw");
        Assert.AreEqual("raw", DataverseValueFormatter.FormatValue(e, "a.x"));
    }
}
