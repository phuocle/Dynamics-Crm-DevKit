using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageView;

[TestClass]
public sealed class ManageViewXmlBranchCoverageTests
{
    [TestMethod]
    public void XmlUtilities_CoverDeclarationAndCommentBranches()
    {
        Assert.AreEqual("<grid />", ViewXmlHelper.StripXmlDeclaration("<?xml version=\"1.0\"?><grid />"));
        Assert.AreEqual("<?xml", ViewXmlHelper.StripXmlDeclaration("<?xml"));

        var content = "<!-- remove -->\n <grid>\n   <!-- remove too -->\n   <row />\n </grid>";
        var stripped = ViewXmlHelper.StripXmlComments(content);
        StringAssert.Contains(stripped, "<grid>");
        StringAssert.Contains(stripped, "<row />");
        Assert.IsFalse(stripped.Contains("remove"));
    }

    [TestMethod]
    public void SyncValidation_CoversMissingCellsAliasesAndSortColumns()
    {
        var fetch = "<fetch><entity name='account'><attribute name='accountid'/><attribute name='name'/><order attribute='createdon'/><link-entity name='contact' alias='c'><attribute name='fullname'/></link-entity></entity></fetch>";
        var layout = "<grid><row id='accountid'><cell name='name'/><cell name='c.fullname'/><cell name='missing'/><cell name='unknown.fullname'/></row></grid>";

        var errors = ViewXmlHelper.ValidateSync(fetch, layout);

        Assert.IsTrue(errors.Any(error => error.Contains("createdon")));
        Assert.IsTrue(errors.Any(error => error.Contains("missing")));
        Assert.IsTrue(errors.Any(error => error.Contains("unknown")));
    }

    [TestMethod]
    public void CellPatching_CoversSetRemoveWarningsAndFailures()
    {
        var layout = "<grid><row><cell name='name' width='100' imageproviderwebresource='icon.js'/><cell name='phone' imageproviderfunctionname='getIcon'/></row></grid>";
        var updates = new List<CellUpdateInstruction>
        {
            new()
            {
                CellName = "name",
                SetAttributes = new Dictionary<string, string> { ["ishidden"] = "1" },
                RemoveAttributes = new List<string> { "width" }
            },
            new()
            {
                CellName = "phone",
                SetAttributes = new Dictionary<string, string> { ["width"] = "120" }
            }
        };

        var patched = ViewXmlHelper.ApplyCellAttributeUpdates(layout, updates);
        Assert.IsNotNull(patched.PatchedXml);
        Assert.AreEqual(2, patched.Warnings.Count);
        StringAssert.Contains(patched.PatchedXml, "ishidden=\"1\"");
        Assert.IsFalse(patched.PatchedXml.Contains("width=\"100\""));

        var missing = ViewXmlHelper.ApplyCellAttributeUpdates(layout,
            new[] { new CellUpdateInstruction { CellName = "doesnotexist" } });
        Assert.IsNull(missing.PatchedXml);
        Assert.AreEqual(1, missing.Errors.Count);

        var malformed = ViewXmlHelper.ApplyCellAttributeUpdates("<grid>", updates);
        Assert.IsNull(malformed.PatchedXml);
        Assert.AreEqual(1, malformed.Errors.Count);
    }

    [TestMethod]
    public void MergeAndQuickFindValidation_CoverEarlyReturnsAndWarnings()
    {
        const string regenerated = "<grid><row><cell name='name' width='150'/></row></grid>";
        Assert.AreEqual(regenerated, ViewXmlHelper.MergeCellAttributes(regenerated, ""));
        Assert.AreEqual(regenerated, ViewXmlHelper.MergeCellAttributes(regenerated, "<grid><row /></grid>"));
        Assert.AreEqual("<grid>", ViewXmlHelper.MergeCellAttributes("<grid>", "<grid><row /></grid>"));

        var current = "<fetch><entity name='account'><filter isquickfindfields='1'><condition attribute='name'/></filter></entity></fetch>";
        var removed = ViewXmlHelper.ValidateQuickFindPreservation(current, "<fetch><entity name='account'/></fetch>");
        Assert.AreEqual(1, removed.Count);
        Assert.AreEqual(0, ViewXmlHelper.ValidateQuickFindPreservation(current, current).Count);
        var nullInput = ViewXmlHelper.ValidateQuickFindPreservation(null!, current);
        Assert.AreEqual(1, nullInput.Count);
    }
}
