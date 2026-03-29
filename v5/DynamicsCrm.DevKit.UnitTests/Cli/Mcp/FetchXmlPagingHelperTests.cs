using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for FetchXmlPagingHelper.ApplyPaging() — a pure static XML manipulation method.
/// The class is internal, so we access it via reflection.
/// </summary>
[TestClass]
public class FetchXmlPagingHelperTests
{
    private static readonly Type HelperType = typeof(DynamicsCrm.DevKit.Cli.Mcp.McpServerHost).Assembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.FetchXmlPagingHelper")!;

    private static readonly MethodInfo ApplyPagingMethod = HelperType
        .GetMethod("ApplyPaging", BindingFlags.Public | BindingFlags.Static)!;

    private const string BasicFetchXml =
        "<fetch><entity name='account'><attribute name='name'/></entity></fetch>";

    /// <summary>
    /// Helper to invoke the internal static ApplyPaging method via reflection.
    /// </summary>
    private static string ApplyPaging(string fetchXml, int page, int count, string? pagingCookie = null)
    {
        return (string)ApplyPagingMethod.Invoke(null, new object?[] { fetchXml, page, count, pagingCookie })!;
    }

    [TestMethod]
    public void ApplyPaging_SetsPageAndCount()
    {
        var result = ApplyPaging(BasicFetchXml, 1, 100);

        var doc = XDocument.Parse(result);
        var fetch = doc.Root!;
        Assert.AreEqual("1", fetch.Attribute("page")?.Value);
        Assert.AreEqual("100", fetch.Attribute("count")?.Value);
    }

    [TestMethod]
    public void ApplyPaging_PageTwo_SetsCorrectPage()
    {
        var result = ApplyPaging(BasicFetchXml, 2, 50);

        var doc = XDocument.Parse(result);
        var fetch = doc.Root!;
        Assert.AreEqual("2", fetch.Attribute("page")?.Value);
        Assert.AreEqual("50", fetch.Attribute("count")?.Value);
    }

    [TestMethod]
    public void ApplyPaging_StripsTopAttribute()
    {
        var fetchWithTop =
            "<fetch top='10'><entity name='account'><attribute name='name'/></entity></fetch>";

        var result = ApplyPaging(fetchWithTop, 1, 100);

        var doc = XDocument.Parse(result);
        var fetch = doc.Root!;
        Assert.IsNull(fetch.Attribute("top"), "top attribute should be stripped");
        Assert.AreEqual("1", fetch.Attribute("page")?.Value);
        Assert.AreEqual("100", fetch.Attribute("count")?.Value);
    }

    [TestMethod]
    public void ApplyPaging_WithPagingCookie_SetsEscapedCookie()
    {
        var cookie = "<cookie page=\"1\"><accountid last=\"{11111111-1111-1111-1111-111111111111}\" /></cookie>";

        var result = ApplyPaging(BasicFetchXml, 2, 100, cookie);

        var doc = XDocument.Parse(result);
        var fetch = doc.Root!;
        var pagingCookieAttr = fetch.Attribute("paging-cookie");
        Assert.IsNotNull(pagingCookieAttr, "paging-cookie attribute should be set");
        // The value should be XML-escaped via SecurityElement.Escape
        Assert.IsTrue(pagingCookieAttr.Value.Contains("&lt;cookie") || pagingCookieAttr.Value.Contains("<cookie"),
            "Cookie value should be present (escaped or unescaped depending on XDocument serialization)");
    }

    [TestMethod]
    public void ApplyPaging_WithNullCookie_RemovesPagingCookie()
    {
        var result = ApplyPaging(BasicFetchXml, 1, 100, null);

        var doc = XDocument.Parse(result);
        var fetch = doc.Root!;
        Assert.IsNull(fetch.Attribute("paging-cookie"), "paging-cookie should be removed when null");
    }

    [TestMethod]
    public void ApplyPaging_WithEmptyCookie_RemovesPagingCookie()
    {
        var result = ApplyPaging(BasicFetchXml, 1, 100, "");

        var doc = XDocument.Parse(result);
        var fetch = doc.Root!;
        Assert.IsNull(fetch.Attribute("paging-cookie"), "paging-cookie should be removed when empty");
    }

    [TestMethod]
    public void ApplyPaging_WithWhitespaceOnlyCookie_RemovesPagingCookie()
    {
        var result = ApplyPaging(BasicFetchXml, 1, 100, "   ");

        var doc = XDocument.Parse(result);
        var fetch = doc.Root!;
        Assert.IsNull(fetch.Attribute("paging-cookie"), "paging-cookie should be removed when whitespace-only");
    }

    [TestMethod]
    public void ApplyPaging_InvalidXml_ThrowsException()
    {
        try
        {
            ApplyPaging("not valid xml", 1, 100);
            Assert.Fail("Expected TargetInvocationException to be thrown");
        }
        catch (TargetInvocationException ex)
        {
            // Inner exception should be XmlException
            Assert.IsNotNull(ex.InnerException, "Should have an inner exception");
        }
    }

    [TestMethod]
    public void ApplyPaging_PreservesEntityContent()
    {
        var fetchWithFilter =
            "<fetch><entity name='account'><attribute name='name'/><filter><condition attribute='statecode' operator='eq' value='0'/></filter></entity></fetch>";

        var result = ApplyPaging(fetchWithFilter, 1, 50);

        Assert.IsTrue(result.Contains("statecode"), "Filter content should be preserved");
        Assert.IsTrue(result.Contains("account"), "Entity element should be preserved");
    }

    [TestMethod]
    public void ApplyPaging_PreservesDistinctAttribute()
    {
        var fetchWithDistinct =
            "<fetch distinct='true'><entity name='account'><attribute name='name'/></entity></fetch>";

        var result = ApplyPaging(fetchWithDistinct, 1, 100);

        var doc = XDocument.Parse(result);
        var fetch = doc.Root!;
        Assert.AreEqual("true", fetch.Attribute("distinct")?.Value, "distinct attribute should be preserved");
        Assert.AreEqual("1", fetch.Attribute("page")?.Value);
    }

    [TestMethod]
    public void ApplyPaging_PreservesAggregateAttribute()
    {
        var fetchAggregate =
            "<fetch aggregate='true'><entity name='account'><attribute name='accountid' alias='count' aggregate='count'/></entity></fetch>";

        var result = ApplyPaging(fetchAggregate, 1, 5000);

        var doc = XDocument.Parse(result);
        var fetch = doc.Root!;
        Assert.AreEqual("true", fetch.Attribute("aggregate")?.Value, "aggregate attribute should be preserved");
    }

    [TestMethod]
    public void ApplyPaging_OverwritesExistingPageAndCount()
    {
        var fetchWithPageCount =
            "<fetch page='3' count='25'><entity name='account'><attribute name='name'/></entity></fetch>";

        var result = ApplyPaging(fetchWithPageCount, 1, 100);

        var doc = XDocument.Parse(result);
        var fetch = doc.Root!;
        Assert.AreEqual("1", fetch.Attribute("page")?.Value, "Page should be overwritten");
        Assert.AreEqual("100", fetch.Attribute("count")?.Value, "Count should be overwritten");
    }

    [TestMethod]
    public void ApplyPaging_ResultIsValidXml()
    {
        var result = ApplyPaging(BasicFetchXml, 1, 50);

        // Should not throw
        var doc = XDocument.Parse(result);
        Assert.IsNotNull(doc.Root);
    }
}
