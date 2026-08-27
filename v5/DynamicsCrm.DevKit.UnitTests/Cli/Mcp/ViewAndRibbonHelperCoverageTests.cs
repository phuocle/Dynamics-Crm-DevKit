using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class ViewAndRibbonHelperCoverageTests
{
    [TestMethod]
    public void ViewXmlHelper_StripsCommentsDeclarationAndPrettyPrints()
    {
        var xml = "<?xml version=\"1.0\"?><root><child /></root>";
        Assert.AreEqual("<root><child /></root>", ViewXmlHelper.StripXmlDeclaration(xml));

        var withoutComments = ViewXmlHelper.StripXmlComments("""
<!-- remove me -->
<root>
  <!-- keep inline? -->
  <child />
</root>
""");
        Assert.IsFalse(withoutComments.Contains("remove me"));
        StringAssert.Contains(withoutComments, "<child />");

        var pretty = ViewXmlHelper.PrettyPrintXml("<root><child /></root>");
        StringAssert.Contains(pretty, "  <child");
        Assert.AreEqual("<notxml", ViewXmlHelper.PrettyPrintXml("<notxml"));
    }

    [TestMethod]
    public void ViewXmlHelper_ValidateSync_ReturnsExpectedErrors()
    {
        var fetch = """
<fetch>
  <entity name="account">
    <attribute name="accountid" />
    <attribute name="name" />
    <attribute name="revenue" />
    <order attribute="createdon" />
    <link-entity name="contact" from="contactid" to="primarycontactid" alias="pc">
      <attribute name="fullname" />
    </link-entity>
  </entity>
</fetch>
""";
        var layout = """
<grid>
  <row id="accountid">
    <cell name="name" />
    <cell name="missing" />
    <cell name="bad.fullname" />
    <cell name="pc.fullname" />
  </row>
</grid>
""";

        var errors = ViewXmlHelper.ValidateSync(fetch, layout);
        Assert.IsTrue(errors.Any(e => e.Contains("revenue")));
        Assert.IsTrue(errors.Any(e => e.Contains("missing")));
        Assert.IsTrue(errors.Any(e => e.Contains("bad")));
        Assert.IsTrue(errors.Any(e => e.Contains("createdon")));

        var parseErrors = ViewXmlHelper.ValidateSync("<fetch>", layout);
        Assert.IsTrue(parseErrors.Single().Contains("Failed to parse"));
    }

    [TestMethod]
    public void ViewXmlHelper_ValidateQuickFindPreservation_DetectsRemovedQuickFindFilter()
    {
        var current = """<fetch><entity name="account"><filter isquickfindfields="1" /></entity></fetch>""";
        var next = """<fetch><entity name="account" /></fetch>""";

        Assert.IsTrue(ViewXmlHelper.ValidateQuickFindPreservation(current, next).Single().Contains("REMOVED"));
        Assert.AreEqual(0, ViewXmlHelper.ValidateQuickFindPreservation(current, current).Count);
    }

    [TestMethod]
    public void ViewXmlHelper_ApplyCellAttributeUpdates_SetsRemovesWarnsAndErrors()
    {
        var layout = """
<grid>
  <row id="accountid">
    <cell name="name" width="100" old="x" />
    <cell name="revenue" imageproviderwebresource="devkit_/icons.js" />
  </row>
</grid>
""";
        var updates = new List<CellUpdateInstruction>
        {
            new()
            {
                CellName = "name",
                SetAttributes = new Dictionary<string, string> { ["width"] = "200", ["ishidden"] = "1" },
                RemoveAttributes = ["old"]
            },
            new()
            {
                CellName = "revenue",
                SetAttributes = new Dictionary<string, string> { ["imageproviderfunctionname"] = "Icons.revenue" }
            }
        };

        var patched = ViewXmlHelper.ApplyCellAttributeUpdates(layout, updates);
        Assert.AreEqual(0, patched.Errors.Count);
        Assert.AreEqual(0, patched.Warnings.Count);
        StringAssert.Contains(patched.PatchedXml, "width=\"200\"");
        StringAssert.Contains(patched.PatchedXml, "ishidden=\"1\"");
        Assert.IsFalse(patched.PatchedXml.Contains("old="));

        var missing = ViewXmlHelper.ApplyCellAttributeUpdates(layout,
        [
            new CellUpdateInstruction { CellName = "missing" }
        ]);
        Assert.IsNull(missing.PatchedXml);
        Assert.IsTrue(missing.Errors.Single().Contains("not found"));

        var invalid = ViewXmlHelper.ApplyCellAttributeUpdates("<grid>", updates);
        Assert.IsNull(invalid.PatchedXml);
        Assert.IsTrue(invalid.Errors.Single().Contains("Failed to parse"));
    }

    [TestMethod]
    public void ViewXmlHelper_MergeCellAttributes_CarriesAllAttrsExceptName()
    {
        var regen = """
<grid name="resultset" object="1" jump="name" select="1" icon="1" preview="1">
  <row name="result" id="accountid">
    <cell name="name" width="300" />
    <cell name="revenue" width="125" />
    <cell name="createdon" width="150" />
  </row>
</grid>
""";
        var current = """
<grid name="resultset" object="1" jump="name" select="1" icon="1" preview="1">
  <row name="result" id="accountid">
    <cell name="NAME" width="180" ishidden="1" label="Custom" desc="d" />
    <cell name="revenue" width="100" imageproviderwebresource="$webresource:devkit_/icons.js" imageproviderfunctionname="Icons.revenue" cellType="Crm.X" disableMetaDataBinding="1" />
    <cell name="droppedcol" width="90" imageproviderwebresource="$webresource:devkit_/icons.js" />
  </row>
</grid>
""";

        var merged = ViewXmlHelper.MergeCellAttributes(regen, current);

        // case-insensitive match: NAME → name; all attrs carried except name
        StringAssert.Contains(merged, "cell name=\"name\" width=\"180\"");
        StringAssert.Contains(merged, "ishidden=\"1\"");
        StringAssert.Contains(merged, "label=\"Custom\"");
        // icon pair + cellType + disableMetaDataBinding carried
        StringAssert.Contains(merged, "imageproviderwebresource=\"$webresource:devkit_/icons.js\"");
        StringAssert.Contains(merged, "imageproviderfunctionname=\"Icons.revenue\"");
        StringAssert.Contains(merged, "cellType=\"Crm.X\"");
        StringAssert.Contains(merged, "disableMetaDataBinding=\"1\"");
        // regen-only cell keeps defaults
        StringAssert.Contains(merged, "cell name=\"createdon\" width=\"150\"");
        // dropped cell's attrs do not leak
        Assert.AreEqual(1, CountOccurrences(merged, "imageproviderwebresource="));

        // empty/unparseable current → regen passthrough
        Assert.AreEqual(regen, ViewXmlHelper.MergeCellAttributes(regen, ""));
        Assert.AreEqual(regen, ViewXmlHelper.MergeCellAttributes(regen, "<grid>"));
    }

    private static int CountOccurrences(string haystack, string needle)
    {
        var count = 0;
        var idx = 0;
        while ((idx = haystack.IndexOf(needle, idx, StringComparison.Ordinal)) >= 0) { count++; idx += needle.Length; }
        return count;
    }

    [TestMethod]
    public void ViewXmlHelper_Validation_InvalidXmlReturnsParseErrors()
    {
        Assert.IsTrue(ViewXmlHelper.ValidateLayoutXml("<grid>").Errors.Any(e => e.Contains("XML Parsing Error")));
        Assert.IsTrue(ViewXmlHelper.ValidateFetchXml("<fetch>").Errors.Any(e => e.Contains("XML Parsing Error")));
    }

    [TestMethod]
    public void RibbonValidation_DetectRibbonFilter_MapsButtonIds()
    {
        Assert.AreEqual(RibbonLocationFilters.HomepageGrid, RibbonValidation.DetectRibbonFilter("Mscrm.HomepageGrid.account.NewRecord"));
        Assert.AreEqual(RibbonLocationFilters.HomepageGrid, RibbonValidation.DetectRibbonFilter("devkit.account.HomepageGrid.Button"));
        Assert.AreEqual(RibbonLocationFilters.SubGrid, RibbonValidation.DetectRibbonFilter("Mscrm.SubGrid.account.AddExisting"));
        Assert.AreEqual(RibbonLocationFilters.SubGrid, RibbonValidation.DetectRibbonFilter("devkit.account.SubGrid.Button"));
        Assert.AreEqual(RibbonLocationFilters.Form, RibbonValidation.DetectRibbonFilter("Mscrm.Form.account.Activate"));
    }

    [TestMethod]
    public void RibbonValidation_ValidateRibbonXml_HandlesValidAndInvalidXml()
    {
        var valid = RibbonValidation.ValidateRibbonXml("<RibbonDiffXml />");
        Assert.AreEqual(0, valid.Errors.Count);

        var invalid = RibbonValidation.ValidateRibbonXml("<RibbonDiffXml>");
        Assert.IsTrue(invalid.Errors.Any(e => e.Contains("XML parse error")));
    }
}
