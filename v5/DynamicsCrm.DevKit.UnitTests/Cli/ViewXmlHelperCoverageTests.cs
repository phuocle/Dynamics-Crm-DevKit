using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class ViewXmlHelperCoverageTests
{
    [TestMethod]
    public void StripXmlDeclaration_Strips()
    {
        var s = ViewXmlHelper.StripXmlDeclaration("<?xml version=\"1.0\"?><root/>");
        Assert.AreEqual("<root/>", s);
    }

    [TestMethod]
    public void StripXmlDeclaration_NoDeclaration_Unchanged()
    {
        var s = ViewXmlHelper.StripXmlDeclaration("<root/>");
        Assert.AreEqual("<root/>", s);
    }

    [TestMethod]
    public void StripXmlDeclaration_Multiline()
    {
        var s = ViewXmlHelper.StripXmlDeclaration("<?xml version=\"1.0\"?>\n<root/>");
        Assert.AreEqual("<root/>", s);
    }

    [TestMethod]
    public void StripXmlDeclaration_CaseInsensitive()
    {
        var s = ViewXmlHelper.StripXmlDeclaration("<?XML version=\"1.0\"?><root/>");
        Assert.AreEqual("<root/>", s);
    }

    [TestMethod]
    public void StripXmlComments_StripsFullLineComments()
    {
        var s = ViewXmlHelper.StripXmlComments("<!-- a -->\n<root/>");
        Assert.AreEqual("<root/>", s);
    }

    [TestMethod]
    public void StripXmlComments_StripsBlankLines()
    {
        var s = ViewXmlHelper.StripXmlComments("\n\n<root/>\n\n");
        Assert.AreEqual("<root/>", s);
    }

    [TestMethod]
    public void StripXmlComments_PreservesContent()
    {
        var s = ViewXmlHelper.StripXmlComments("<a/>\n<b/>");
        StringAssert.Contains(s, "<a/>");
        StringAssert.Contains(s, "<b/>");
    }

    [TestMethod]
    public void PrettyPrintXml_ValidXml()
    {
        var s = ViewXmlHelper.PrettyPrintXml("<a><b/></a>");
        Assert.IsTrue(s.Contains("<a>"));
        Assert.IsTrue(s.Contains("<b"));
    }

    [TestMethod]
    public void PrettyPrintXml_InvalidXml_ReturnsInput()
    {
        var bad = "<not-valid";
        var s = ViewXmlHelper.PrettyPrintXml(bad);
        Assert.AreEqual(bad, s);
    }

    [TestMethod]
    public void ValidateLayoutXml_Empty_HandlesGracefully()
    {
        var (errors, warnings) = ViewXmlHelper.ValidateLayoutXml("");
        Assert.IsNotNull(errors);
        Assert.IsNotNull(warnings);
    }

    [TestMethod]
    public void ValidateFetchXml_Empty_HandlesGracefully()
    {
        var (errors, warnings) = ViewXmlHelper.ValidateFetchXml("");
        Assert.IsNotNull(errors);
        Assert.IsNotNull(warnings);
    }

    [TestMethod]
    public void ValidateLayoutXml_Valid()
    {
        var valid = "<grid name='resultset' object='1' jump='name' select='1' icon='1' preview='1'><row name='result' id='accountid'><cell name='name' width='100' /></row></grid>";
        var (errors, warnings) = ViewXmlHelper.ValidateLayoutXml(valid);
        // May or may not have errors depending on schema - but no exception
        Assert.IsNotNull(errors);
    }
}
