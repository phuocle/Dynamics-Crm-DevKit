using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class FetchXmlPagingHelperCoverageTests
{
    [TestMethod]
    public void ApplyPaging_StripsTop_AddsPage()
    {
        var fetchXml = "<fetch top=\"10\"><entity name=\"account\"></entity></fetch>";
        var result = FetchXmlPagingHelper.ApplyPaging(fetchXml, 2, 50);
        StringAssert.Contains(result, "page=\"2\"");
        StringAssert.Contains(result, "count=\"50\"");
        Assert.IsFalse(result.Contains("top="), "Expected top attribute to be removed");
    }

    [TestMethod]
    public void ApplyPaging_NoCookie_StripsPagingCookie()
    {
        var fetchXml = "<fetch paging-cookie=\"old\"><entity name=\"account\"></entity></fetch>";
        var result = FetchXmlPagingHelper.ApplyPaging(fetchXml, 1, 10);
        Assert.IsFalse(result.Contains("paging-cookie="));
    }

    [TestMethod]
    public void ApplyPaging_WithCookie_AddsIt()
    {
        var fetchXml = "<fetch><entity name=\"account\"></entity></fetch>";
        var result = FetchXmlPagingHelper.ApplyPaging(fetchXml, 1, 10, "cookie123");
        StringAssert.Contains(result, "paging-cookie=\"cookie123\"");
    }

    [TestMethod]
    public void ApplyPaging_EmptyCookie_StripsPagingCookie()
    {
        var fetchXml = "<fetch><entity name=\"account\"></entity></fetch>";
        var result = FetchXmlPagingHelper.ApplyPaging(fetchXml, 1, 10, "");
        Assert.IsFalse(result.Contains("paging-cookie="));
    }

    [TestMethod]
    public void ApplyPaging_WhitespaceCookie_StripsPagingCookie()
    {
        var fetchXml = "<fetch><entity name=\"account\"></entity></fetch>";
        var result = FetchXmlPagingHelper.ApplyPaging(fetchXml, 1, 10, "   ");
        Assert.IsFalse(result.Contains("paging-cookie="));
    }

    [TestMethod]
    public void ApplyPaging_InvalidXml_Throws()
    {
        try { FetchXmlPagingHelper.ApplyPaging("not xml", 1, 10); Assert.Fail("expected"); }
        catch (Exception) { }
    }
}
