using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class DisplayNameFirstResolverCoverageTests
{
    private static List<DisplayNameFirstCandidate<string>> SampleCandidates() =>
        new()
        {
            new() { Value = "a", DisplayName = "Account", LogicalName = "account", SchemaName = "Account" },
            new() { Value = "c", DisplayName = "Contact", LogicalName = "contact", SchemaName = "Contact" },
            new() { Value = "u", DisplayName = "User", LogicalName = "systemuser", SchemaName = "SystemUser" }
        };

    [TestMethod]
    public void Resolve_EmptyInput_ReturnsError()
    {
        var result = DisplayNameFirstResolver.Resolve<string>("", SampleCandidates(), "[Amb]", "[NF]", null, "x");
        Assert.AreEqual(ResolveStatus.Error, result.Status);
    }

    [TestMethod]
    public void Resolve_NullInput_ReturnsError()
    {
        var result = DisplayNameFirstResolver.Resolve<string>(null!, SampleCandidates(), "[Amb]", "[NF]", null, "x");
        Assert.AreEqual(ResolveStatus.Error, result.Status);
    }

    [TestMethod]
    public void Resolve_WhitespaceInput_ReturnsError()
    {
        var result = DisplayNameFirstResolver.Resolve<string>("   ", SampleCandidates(), "[Amb]", "[NF]", null, "x");
        Assert.AreEqual(ResolveStatus.Error, result.Status);
    }

    [TestMethod]
    public void Resolve_ExactLogicalMatch_Ok()
    {
        var result = DisplayNameFirstResolver.Resolve<string>("account", SampleCandidates(), "[Amb]", "[NF]", null, "x");
        Assert.AreEqual(ResolveStatus.Ok, result.Status);
        Assert.AreEqual("a", result.Value);
    }

    [TestMethod]
    public void Resolve_ExactSchemaMatch_Ok()
    {
        var result = DisplayNameFirstResolver.Resolve<string>("Account", SampleCandidates(), "[Amb]", "[NF]", null, "x");
        Assert.AreEqual(ResolveStatus.Ok, result.Status);
    }

    [TestMethod]
    public void Resolve_DisplayExactMatch_Ok()
    {
        var result = DisplayNameFirstResolver.Resolve<string>("Contact", SampleCandidates(), "[Amb]", "[NF]", null, "x");
        Assert.AreEqual(ResolveStatus.Ok, result.Status);
    }

    [TestMethod]
    public void Resolve_DisplayContains_Ok()
    {
        var result = DisplayNameFirstResolver.Resolve<string>("Acc", SampleCandidates(), "[Amb]", "[NF]", null, "x");
        Assert.AreEqual(ResolveStatus.Ok, result.Status);
        Assert.AreEqual("a", result.Value);
    }

    [TestMethod]
    public void Resolve_LogicalContains_Ok()
    {
        var result = DisplayNameFirstResolver.Resolve<string>("system", SampleCandidates(), "[Amb]", "[NF]", null, "x");
        Assert.AreEqual(ResolveStatus.Ok, result.Status);
        Assert.AreEqual("u", result.Value);
    }

    [TestMethod]
    public void Resolve_AmbiguousMultiple_AmbiguousStatus()
    {
        var candidates = new List<DisplayNameFirstCandidate<string>>
        {
            new() { Value = "a1", DisplayName = "Foo", LogicalName = "a1" },
            new() { Value = "a2", DisplayName = "Foo", LogicalName = "a2" }
        };
        var result = DisplayNameFirstResolver.Resolve<string>("Foo", candidates, "[Amb]", "[NF]", null, "x");
        Assert.AreEqual(ResolveStatus.Ambiguous, result.Status);
    }

    [TestMethod]
    public void Resolve_CompositeDisplayPlusIdentifier_Ok()
    {
        var result = DisplayNameFirstResolver.Resolve<string>("Account (account)", SampleCandidates(), "[Amb]", "[NF]", null, "x");
        Assert.AreEqual(ResolveStatus.Ok, result.Status);
        Assert.AreEqual("a", result.Value);
    }

    [TestMethod]
    public void Resolve_CompositeDisplayPlusIdentifierMismatch_NotFound()
    {
        var result = DisplayNameFirstResolver.Resolve<string>("Account (xyz)", SampleCandidates(), "[Amb]", "[NF]", "tip", "x");
        Assert.AreEqual(ResolveStatus.NotFound, result.Status);
    }

    [TestMethod]
    public void Resolve_NotFound_ReturnsNotFound()
    {
        var result = DisplayNameFirstResolver.Resolve<string>("nothing", SampleCandidates(), "[Amb]", "[NF]", "Tip here", "x");
        Assert.AreEqual(ResolveStatus.NotFound, result.Status);
        StringAssert.Contains(result.Error, "Tip here");
    }

    [TestMethod]
    public void Resolve_CaseInsensitive_Ok()
    {
        var result = DisplayNameFirstResolver.Resolve<string>("ACCOUNT", SampleCandidates(), "[Amb]", "[NF]", null, "x");
        Assert.AreEqual(ResolveStatus.Ok, result.Status);
    }

    [TestMethod]
    public void Resolve_EmptyCandidates_NotFound()
    {
        var result = DisplayNameFirstResolver.Resolve<string>("account", new List<DisplayNameFirstCandidate<string>>(), "[Amb]", "[NF]", null, "x");
        Assert.AreEqual(ResolveStatus.NotFound, result.Status);
    }

    [TestMethod]
    public void Resolve_NullCandidates_ThrowsOrNotFound()
    {
        try
        {
            var result = DisplayNameFirstResolver.Resolve<string>("account", null!, "[Amb]", "[NF]", null, "x");
            // If no throw, NotFound or Error is acceptable
            Assert.IsTrue(result.Status == ResolveStatus.NotFound || result.Status == ResolveStatus.Error);
        }
        catch (System.ArgumentNullException) { /* acceptable: production throws on null IEnumerable */ }
    }

    [TestMethod]
    public void Resolve_CompositeBad_NotNullDisplayName_NotFound()
    {
        var result = DisplayNameFirstResolver.Resolve<string>("(account)", SampleCandidates(), "[Amb]", "[NF]", null, "x");
        // openParen=0, returns null
        Assert.AreEqual(ResolveStatus.NotFound, result.Status);
    }

    [TestMethod]
    public void Resolve_CompositeBad_EmptyInsideParens_NotFound()
    {
        var result = DisplayNameFirstResolver.Resolve<string>("Account ()", SampleCandidates(), "[Amb]", "[NF]", null, "x");
        Assert.AreEqual(ResolveStatus.NotFound, result.Status);
    }

    [TestMethod]
    public void Resolve_UniqueNameMatch_Ok()
    {
        var candidates = new List<DisplayNameFirstCandidate<string>>
        {
            new() { Value = "a", DisplayName = "Foo", UniqueName = "ufoo" }
        };
        var result = DisplayNameFirstResolver.Resolve<string>("ufoo", candidates, "[Amb]", "[NF]", null, "x");
        Assert.AreEqual(ResolveStatus.Ok, result.Status);
    }

    [TestMethod]
    public void ResolveCandidate_ToResolveCandidate_MapsAll()
    {
        var c = new DisplayNameFirstCandidate<string>
        {
            Value = "x",
            DisplayName = "d",
            LogicalName = "l",
            UniqueName = "u",
            SchemaName = "s",
            Id = System.Guid.NewGuid(),
            Kind = "k"
        };
        var rc = c.ToResolveCandidate();
        Assert.AreEqual("d", rc.DisplayName);
        Assert.AreEqual("l", rc.LogicalName);
        Assert.AreEqual("u", rc.UniqueName);
        Assert.AreEqual("s", rc.SchemaName);
        Assert.AreEqual("k", rc.Kind);
    }

    [TestMethod]
    public void Resolve_IsSuccess_TrueOnOk()
    {
        var result = DisplayNameFirstResolver.Resolve<string>("account", SampleCandidates(), "[Amb]", "[NF]", null, "x");
        Assert.IsTrue(result.IsSuccess);
    }

    [TestMethod]
    public void Resolve_AmbiguousLogicalName_Ambiguous()
    {
        var candidates = new List<DisplayNameFirstCandidate<string>>
        {
            new() { Value = "a1", DisplayName = "X1", LogicalName = "foo" },
            new() { Value = "a2", DisplayName = "X2", LogicalName = "foo" }
        };
        var result = DisplayNameFirstResolver.Resolve<string>("foo", candidates, "[Amb]", "[NF]", null, "x");
        Assert.AreEqual(ResolveStatus.Ambiguous, result.Status);
    }

    [TestMethod]
    public void Resolve_FilterNullCandidates()
    {
        var candidates = new List<DisplayNameFirstCandidate<string>>
        {
            null!,
            new() { Value = "a", LogicalName = "account", DisplayName = "Account" }
        };
        var result = DisplayNameFirstResolver.Resolve<string>("account", candidates, "[Amb]", "[NF]", null, "x");
        Assert.AreEqual(ResolveStatus.Ok, result.Status);
    }
}
