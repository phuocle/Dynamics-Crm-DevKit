using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageChoice;

/// <summary>
/// Rare-branch coverage for <see cref="ManageChoiceTool"/>: option-set create
/// under lock contention (retry exhaustion), the defensive request-parameter
/// initializer, and the public parse helpers' empty-input contracts.
/// </summary>
[TestClass]
public sealed class ManageChoiceErrorPathCoverageTests
{
    private static readonly BindingFlags PrivateStatic = BindingFlags.Static | BindingFlags.NonPublic;

    [TestInitialize]
    public void Setup() => MetadataOperationWaitHelper.WaitScalePercent = 0;

    [TestMethod]
    public void Create_LockContentionExhausted_ReportsRetryFailure()
    {
        using var harness = new ChoiceHarness();
        harness.CreateOptionSetException = new InvalidOperationException(
            "Another metadata operation is already running for this solution.");
        var result = harness.NewTool().manage_choice(
            action: "create", display_name: "Fruit", options: "Draft;Confirmed", solution_name: "DevKit");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "after multiple retry attempts");
        Assert.AreEqual(0, harness.PublishedCount, "publish must not run after a failed create");
    }

    [TestMethod]
    public void SetRequestParameter_InitializesMissingParameterCollection()
    {
        var setParameter = typeof(ManageChoiceTool).GetMethod("SetRequestParameter", PrivateStatic)!;
        var request = new InsertOptionValueRequest
        {
            Parameters = null!
        };

        setParameter.Invoke(null, new object?[] { request, "Color", "#FF0000" });

        Assert.IsNotNull(request.Parameters, "InitializeRequest must create a ParameterCollection");
        Assert.AreEqual("#FF0000", request.Parameters["Color"]);
    }

    [TestMethod]
    public void ParseOptionsWithAutoValue_WhitespaceInput_ReturnsEmptyList()
    {
        Assert.AreEqual(0, ManageChoiceTool.ParseOptionsWithAutoValue("   ", 0)!.Count);
        Assert.AreEqual(0, ManageChoiceTool.ParseOptionsWithAutoValue("", 500)!.Count);
    }

    [TestMethod]
    public void ParseOptionsWithAutoValue_NegativeExplicitValue_ReturnsNull()
    {
        Assert.IsNull(ManageChoiceTool.ParseOptionsWithAutoValue("-3:Bad", 100));
    }

    [TestMethod]
    public void DerivePortalOptionSetName_EmptyDisplayName_Throws()
    {
        var derive = typeof(ManageChoiceTool).GetMethod("DerivePortalOptionSetName", PrivateStatic)!;

        var exception = Assert.ThrowsExactly<TargetInvocationException>(
            () => derive.Invoke(null, new object?[] { "", "dev" }));

        StringAssert.Contains(exception.InnerException!.Message, "displayName is required");
    }

    // ──────────────────────────────────────────────
    // harness
    // ──────────────────────────────────────────────

    /// <summary>
    /// FakeSdkClient wired for manage_choice create flows: option-set reads,
    /// CreateOptionSetRequest (with fault injection), publish, solution/publisher
    /// resolution and the organization language row.
    /// </summary>
    private sealed class ChoiceHarness : IDisposable
    {
        public FakeSdkClient Fake { get; } = new();
        public List<OptionSetMetadataBase> Sets { get; } = new();
        public int PublishedCount { get; private set; }
        public Exception? CreateOptionSetException;

        public ChoiceHarness()
        {
            var publisherId = Guid.NewGuid();
            var solution = new Entity("solution", Guid.NewGuid())
            {
                ["friendlyname"] = "DevKit Solution",
                ["uniquename"] = "DevKit",
                ["publisherid"] = new EntityReference("publisher", publisherId)
            };

            Fake.OnExecute = request => request switch
            {
                RetrieveAllOptionSetsRequest => new RetrieveAllOptionSetsResponse
                {
                    Results = { ["OptionSetMetadata"] = Sets.ToArray() }
                },
                RetrieveOptionSetRequest r => new RetrieveOptionSetResponse
                {
                    Results = { ["OptionSetMetadata"] = Sets.FirstOrDefault(s =>
                            string.Equals(s.Name, r.Name, StringComparison.OrdinalIgnoreCase))
                        ?? new OptionSetMetadata { Name = r.Name } }
                },
                CreateOptionSetRequest => CreateOptionSetException != null
                    ? throw CreateOptionSetException
                    : CreatedOptionSet(),
                UpdateOptionSetRequest => new UpdateOptionSetResponse(),
                InsertOptionValueRequest => new OrganizationResponse(),
                UpdateOptionValueRequest => new OrganizationResponse(),
                DeleteOptionValueRequest => new OrganizationResponse(),
                PublishXmlRequest => Publish(),
                _ => throw new InvalidOperationException($"Unexpected request '{request.RequestName}'")
            };
            Fake.OnRetrieveMultiple = query => query switch
            {
                QueryExpression qe when qe.EntityName == "solution" => new EntityCollection(new[] { solution }),
                FetchExpression => new EntityCollection(new[] { new Entity("organization") { ["languagecode"] = 1033 } }),
                _ => new EntityCollection()
            };
            Fake.OnRetrieve = (entityName, id, _) => entityName == "publisher"
                ? new Entity("publisher", id)
                {
                    ["customizationprefix"] = "dev",
                    ["customizationoptionvalueprefix"] = 10000
                }
                : throw new InvalidOperationException($"Unexpected retrieve of '{entityName}'");
        }

        public ManageChoiceTool NewTool(bool dryRun = false) =>
            new(Fake.Client, new McpDryRunOptions { DryRun = dryRun }, DryRunTestHelpers.NormalContext());

        private OrganizationResponse CreatedOptionSet()
        {
            var response = new CreateOptionSetResponse();
            response.Results["OptionSetId"] = Guid.NewGuid();
            return response;
        }

        private OrganizationResponse Publish()
        {
            PublishedCount++;
            return new PublishXmlResponse();
        }

        public void Dispose() => Fake.Dispose();
    }
}
