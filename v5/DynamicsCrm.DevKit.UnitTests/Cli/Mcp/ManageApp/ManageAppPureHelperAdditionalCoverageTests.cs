using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageApp;

/// <summary>
/// Tests helpers which have no Dataverse dependency.  Keeping these direct makes
/// the XML/result-contract behaviour executable without manufacturing a ServiceClient.
/// </summary>
[TestClass]
public sealed class ManageAppPureHelperAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(ManageAppTool);
    private const BindingFlags StaticPrivate = BindingFlags.Static | BindingFlags.NonPublic;

    [TestMethod]
    public void SiteMapHelpers_CoverStarterFallbackTitlesAndComponentVariants()
    {
        var starter = Invoke<string>("BuildStarterSiteMapXml", 1033);
        StringAssert.Contains(starter, "LCID=\"1033\"");
        StringAssert.Contains(starter, "Entity=\"account\"");

        var tree = Invoke<string>("FormatNavigationTree",
            "<SiteMap><Area Id='a'><Group Id='g'><SubArea Id='unlabelled'/><SubArea Id='website' Url='https://example.test'/></Group></Area></SiteMap>");
        StringAssert.Contains(tree, "Area: a");
        StringAssert.Contains(tree, "Group: g");
        StringAssert.Contains(tree, "Item: unlabelled");
        StringAssert.Contains(tree, "Item: website");

        var noSitemap = Invoke<List<string>>("DescribeEntityAppComponents", "contact",
            new EntityReferenceCollection { new("entity", Guid.NewGuid()) }, false);
        CollectionAssert.AreEqual(new[] { "contact" }, noSitemap);

        Assert.IsTrue(Invoke<bool>("IsImageWebResourceType", 10));
        Assert.IsTrue(Invoke<bool>("IsImageWebResourceType", 11));
        Assert.IsFalse(Invoke<bool>("IsImageWebResourceType", -1));
    }

    [TestMethod]
    public void GetGuidAttribute_HandlesGuidReferenceMissingAndWrongType()
    {
        var id = Guid.NewGuid();
        var entity = new Entity("appmodule")
        {
            ["direct"] = id,
            ["reference"] = new EntityReference("webresource", id),
            ["wrong"] = "not-a-guid",
            ["null"] = null
        };

        Assert.AreEqual(id, Invoke<Guid?>("GetGuidAttribute", entity, "direct"));
        Assert.AreEqual(id, Invoke<Guid?>("GetGuidAttribute", entity, "reference"));
        Assert.IsNull(Invoke<Guid?>("GetGuidAttribute", entity, "wrong"));
        Assert.IsNull(Invoke<Guid?>("GetGuidAttribute", entity, "null"));
        Assert.IsNull(Invoke<Guid?>("GetGuidAttribute", entity, "missing"));
        Assert.IsNull(Invoke<Guid?>("GetGuidAttribute", null!, "anything"));
    }

    [TestMethod]
    public void AppValidationResult_CoversErrorAndMutationStatusBranches()
    {
        var resultType = ToolType.GetNestedType("AppValidationResult", BindingFlags.NonPublic)!;
        var fromResponse = resultType.GetMethod("FromResponse", BindingFlags.Public | BindingFlags.Static)!;
        var statusForMutation = resultType.GetMethod("StatusForMutation", BindingFlags.Public | BindingFlags.Instance)!;
        var skipped = resultType.GetMethod("Skipped", BindingFlags.Public | BindingFlags.Static)!;

        var response = new OrganizationResponse();
        response.Results["AppValidationResponse"] = new Issues
        {
            ValidationIssueList = new List<Issue>
            {
                new() { Message = "must have a sitemap", ErrorType = "Error" },
                new() { Message = "legacy setting", ErrorType = "warning" }
            }
        };
        var validation = fromResponse.Invoke(null, new object[] { response })!;
        Assert.AreEqual("validation_failed", resultType.GetProperty("Status")!.GetValue(validation));
        Assert.AreEqual(1, ((IEnumerable<string>)resultType.GetProperty("Errors")!.GetValue(validation)!).Count());
        Assert.AreEqual(1, ((IEnumerable<string>)resultType.GetProperty("Warnings")!.GetValue(validation)!).Count());
        Assert.AreEqual("updated_validation_failed", statusForMutation.Invoke(validation, new object[] { "updated" }));

        var noIssues = skipped.Invoke(null, null)!;
        Assert.AreEqual("skipped", resultType.GetProperty("Status")!.GetValue(noIssues));
        Assert.AreEqual("updated", statusForMutation.Invoke(noIssues, new object[] { "updated" }));
        Assert.AreEqual(false, resultType.GetProperty("Validated")!.GetValue(noIssues));
    }

    [TestMethod]
    public void TextHelpers_CoverEscapingAndInnerException()
    {
        Assert.AreEqual("AB9", Invoke<string>("SanitizeUniqueName", "A B-9"));
        Assert.AreEqual("line\\|one  line two", Invoke<string>("EscapeTable", "line|one\r\nline two"));
        Assert.AreEqual("outer\nInnerException: inner", Invoke<string>("FormatException", new InvalidOperationException("outer", new Exception("inner"))));
    }

    private static T Invoke<T>(string name, params object?[] arguments) =>
        (T)ToolType.GetMethods(StaticPrivate)
            .Single(m => m.Name == name && m.GetParameters().Length == arguments.Length)
            .Invoke(null, arguments)!;

    private sealed class Issues
    {
        public List<Issue> ValidationIssueList { get; set; } = [];
    }

    private sealed class Issue
    {
        public string Message { get; set; } = "";
        public string ErrorType { get; set; } = "";
    }
}
