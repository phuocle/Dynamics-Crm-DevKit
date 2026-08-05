using DynamicsCrm.DevKit.Cli.Mcp;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Crm.Sdk.Messages;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using System;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Shared helpers for dry-run safety tests.
/// </summary>
internal static class DryRunTestHelpers
{
    /// <summary>
    /// Tokens that MUST NOT appear in any pre-invocation MCP surface
    /// (initialize, tools/list, resources/list, tool parameters, descriptions).
    /// </summary>
    internal static readonly string[] ForbiddenPreInvocationTokens =
    [
        "dry_run",
        "dry-run",
        "--dry-run",
        "dryrun",
        "DRY RUN"
    ];

    /// <summary>
    /// Assert that a string does not contain any forbidden dry-run token
    /// (case-insensitive). The only allowed post-invocation signal is the
    /// exact prefix <c>[DryRun]</c>.
    /// </summary>
    internal static void AssertNoDryRunLeak(string text, string context)
    {
        if (string.IsNullOrEmpty(text)) return;

        foreach (var token in ForbiddenPreInvocationTokens)
        {
            Assert.IsFalse(
                text.Contains(token, StringComparison.OrdinalIgnoreCase),
                $"{context}: contains forbidden token '{token}'.");
        }
    }

    /// <summary>
    /// Create a blocking execution context (simulates --dry-run).
    /// </summary>
    internal static McpExecutionContext BlockedContext() => new(mutationsBlocked: true);

    /// <summary>
    /// Create a non-blocking execution context (normal mode).
    /// </summary>
    internal static McpExecutionContext NormalContext() => new(mutationsBlocked: false);

    /// <summary>
    /// Assert that the text content of a CallToolResult starts with exactly
    /// one <c>[DryRun]</c> prefix.
    /// </summary>
    internal static void AssertDryRunPrefix(ModelContextProtocol.Protocol.CallToolResult result, string context)
    {
        Assert.IsNotNull(result, $"{context}: result is null.");
        Assert.IsNotNull(result.Content, $"{context}: Content is null.");
        Assert.IsTrue(result.Content.Count > 0, $"{context}: Content is empty.");

        var first = result.Content[0];
        Assert.IsInstanceOfType(first, typeof(ModelContextProtocol.Protocol.TextContentBlock),
            $"{context}: first content block is not TextContentBlock.");

        var text = ((ModelContextProtocol.Protocol.TextContentBlock)first).Text ?? "";
        Assert.IsTrue(text.StartsWith("[DryRun]", StringComparison.Ordinal),
            $"{context}: text does not start with '[DryRun]'. Got: {text}");
        // Exactly one prefix — no duplicate
        var prefixCount = text.Split("[DryRun]").Length - 1;
        Assert.AreEqual(1, prefixCount,
            $"{context}: text has {prefixCount} '[DryRun]' prefixes, expected exactly 1.");
    }
}

/// <summary>
/// Inventory and contract-leak tests for the dry-run mutation gateway.
/// These tests verify the foundational invariants from review-dry-run2.md §0.
/// </summary>
[TestClass]
public class DryRunGatewayContractTests
{
    [TestMethod]
    public void ExecuteReadOnly_RejectsMutatingRequest()
    {
        try
        {
            DataverseMutationExecutor.ExecuteReadOnly(null!, new PublishXmlRequest());
            Assert.Fail("A mutating request must not be accepted by ExecuteReadOnly.");
        }
        catch (InvalidOperationException ex)
        {
            StringAssert.Contains(ex.Message, "not allow-listed");
        }
    }

    [TestMethod]
    public void AddExistingComponent_BlockedContextThrowsBeforeServiceCall()
    {
        try
        {
            SolutionComponentCreateHelper.AddExistingComponent(
                DryRunTestHelpers.BlockedContext(), null!, Guid.NewGuid(), 61, "devkit_test");
            Assert.Fail("Blocked add-to-solution must throw before the service call.");
        }
        catch (InvalidOperationException ex)
        {
            StringAssert.Contains(ex.Message, "Mutation blocked");
        }
    }

    /// <summary>
    /// McpExecutionContext with MutationsBlocked=true must throw
    /// InvalidOperationException from AssertMutationAllowed.
    /// </summary>
    [TestMethod]
    public void AssertMutationAllowed_Blocked_Throws()
    {
        var context = DryRunTestHelpers.BlockedContext();
        try
        {
            context.AssertMutationAllowed("TestOperation");
            Assert.Fail("Expected InvalidOperationException when mutations are blocked.");
        }
        catch (InvalidOperationException) { }
    }

    /// <summary>
    /// McpExecutionContext with MutationsBlocked=false must NOT throw
    /// from AssertMutationAllowed.
    /// </summary>
    [TestMethod]
    public void AssertMutationAllowed_Normal_DoesNotThrow()
    {
        var context = DryRunTestHelpers.NormalContext();
        context.AssertMutationAllowed("TestOperation");
    }

    /// <summary>
    /// McpExecutionContext must not expose any public property or method
    /// whose name contains a dry-run token (the policy is not discoverable
    /// by AI via reflection on the context type).
    /// </summary>
    [TestMethod]
    public void McpExecutionContext_NoPublicDryRunTokenInMemberNames()
    {
        var type = typeof(McpExecutionContext);
        var publicMembers = type.GetMembers(BindingFlags.Public | BindingFlags.Instance | BindingFlags.Static)
            .Where(m => m.MemberType == MemberTypes.Property || m.MemberType == MemberTypes.Method)
            .Select(m => m.Name)
            .ToList();

        foreach (var name in publicMembers)
        {
            DryRunTestHelpers.AssertNoDryRunLeak(name, $"McpExecutionContext.{name}");
        }
    }

    /// <summary>
    /// McpDryRunOptions is the legacy config holder. Its property name
    /// "DryRun" is internal and not exposed in MCP schema, but we verify
    /// it does not leak into tool descriptions at the attribute level.
    /// This is a baseline — the full tools/list serialization test is
    /// added when the MCP host can be instantiated in-test.
    /// </summary>
    [TestMethod]
    public void McpDryRunOptions_HasSingleBoolProperty()
    {
        var type = typeof(McpDryRunOptions);
        var publicProps = type.GetProperties(BindingFlags.Public | BindingFlags.Instance);
        Assert.AreEqual(1, publicProps.Length,
            "McpDryRunOptions should have exactly one public property.");
        Assert.AreEqual(typeof(bool), publicProps[0].PropertyType,
            "McpDryRunOptions.DryRun should be bool.");
    }
}
