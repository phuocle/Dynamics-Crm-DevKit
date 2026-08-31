using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using CliCreateRecordsTool = DynamicsCrm.DevKit.Cli.Mcp.Tools.CreateRecordsTool;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.CrossTool;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.CreateRecords;

/// <summary>
/// Tests for create_records (review-dry-run2.md §1).
///
/// These tests verify the hardened constructor (null-options fail-fast,
/// McpExecutionContext injection) and the mutation gateway in TryCreateAsync.
/// The full dry-run preview path requires a live ServiceClient for
/// DisplayNameFirstResolver.ResolveEntity and is covered by integration tests.
/// </summary>
[TestClass]
public class CreateRecordsDryRunTests
{
    [TestMethod]
    public void Constructor_NullOptions_Throws()
    {
        try
        {
            new CliCreateRecordsTool(null!, null!, null!);
            Assert.Fail("Expected ArgumentNullException when options is null.");
        }
        catch (ArgumentNullException) { }
    }

    [TestMethod]
    public void Constructor_NullContext_Throws()
    {
        try
        {
            new CliCreateRecordsTool(null!, new McpDryRunOptions(), null!);
            Assert.Fail("Expected ArgumentNullException when context is null.");
        }
        catch (ArgumentNullException) { }
    }

    [TestMethod]
    public void Constructor_BlockedContext_DoesNotThrow()
    {
        var tool = new CliCreateRecordsTool(null!, new McpDryRunOptions { DryRun = true },
            DryRunTestHelpers.BlockedContext());
        Assert.IsNotNull(tool);
    }

    /// <summary>
    /// ExecuteChunkAsync (the per-record TryCreateAsync replacement after the
    /// ExecuteMultiple refactor) routes the batch through
    /// DataverseMutationExecutor.ExecuteAsync, which asserts mutation is
    /// allowed. In blocked mode the gateway must throw before any SDK call —
    /// even if the action-level preview was bypassed.
    /// </summary>
    [TestMethod]
    public async Task TryCreateAsync_BlockedContext_ThrowsBeforeSdkCall()
    {
        // Arrange: tool with blocked context and null ServiceClient.
        // If the gateway works, it throws before serviceClient.ExecuteAsync
        // is reached (which would NullRef).
        var tool = new CliCreateRecordsTool(null!, new McpDryRunOptions { DryRun = true },
            DryRunTestHelpers.BlockedContext());

        var method = typeof(CliCreateRecordsTool)
            .GetMethod("ExecuteChunkAsync", BindingFlags.NonPublic | BindingFlags.Instance);

        Assert.IsNotNull(method, "ExecuteChunkAsync method not found via reflection.");

        var chunk = new List<(int index, Entity entity)> { (0, new Entity("account")) };
        var task = (Task<List<BatchCreateItem>>)method.Invoke(tool,
            new object?[] { null, chunk, false, CancellationToken.None })!;

        // The gateway throws, the chunk-level catch marks every item failed
        // with the gateway message.
        var items = await task;

        Assert.AreEqual(1, items.Count);
        Assert.AreEqual("failed", items[0].Status);
        Assert.IsFalse(string.IsNullOrEmpty(items[0].Error),
            "ExecuteChunkAsync should return an error message when the gateway blocks the mutation.");
        Assert.IsTrue(items[0].Error.Contains("Mutation blocked", StringComparison.OrdinalIgnoreCase),
            $"Error message should mention 'Mutation blocked'. Got: {items[0].Error}");
    }

    /// <summary>
    /// ExecuteChunkAsync with a non-blocking context and null ServiceClient
    /// should reach the SDK call and return a NullReferenceException-derived
    /// error (proving the gateway allowed the call through).
    /// </summary>
    [TestMethod]
    public async Task TryCreateAsync_NormalContext_AllowsSdkCall()
    {
        var tool = new CliCreateRecordsTool(null!, new McpDryRunOptions { DryRun = false },
            DryRunTestHelpers.NormalContext());

        var method = typeof(CliCreateRecordsTool)
            .GetMethod("ExecuteChunkAsync", BindingFlags.NonPublic | BindingFlags.Instance);

        Assert.IsNotNull(method, "ExecuteChunkAsync method not found via reflection.");

        var chunk = new List<(int index, Entity entity)> { (0, new Entity("account")) };
        var task = (Task<List<BatchCreateItem>>)method.Invoke(tool,
            new object?[] { null, chunk, false, CancellationToken.None })!;
        var items = await task;

        Assert.AreEqual(1, items.Count);
        Assert.AreEqual("failed", items[0].Status);
        // With null ServiceClient, the SDK call throws — but NOT "Mutation blocked".
        Assert.IsFalse(items[0].Error.Contains("Mutation blocked", StringComparison.OrdinalIgnoreCase),
            $"Normal context should not block. Got: {items[0].Error}");
    }

    /// <summary>
    /// create_records with empty entity_name must return Error before reaching
    /// the dry-run check or any service call.
    /// </summary>
    [TestMethod]
    public async Task CreateRecords_EmptyEntityName_ReturnsError()
    {
        var tool = new CliCreateRecordsTool(null!, new McpDryRunOptions { DryRun = true },
            DryRunTestHelpers.BlockedContext());

        var result = await tool.create_records("", "[{}]", 1);

        Assert.IsTrue(result.IsError, "Empty entity_name should return an error.");
        Assert.IsFalse(result.GetText().StartsWith("[DryRun]"),
            "Validation error should not produce a dry-run preview.");
    }

    /// <summary>
    /// create_records with empty records_json must return Error before reaching
    /// the dry-run check or any service call.
    /// </summary>
    [TestMethod]
    public async Task CreateRecords_EmptyRecordsJson_ReturnsError()
    {
        var tool = new CliCreateRecordsTool(null!, new McpDryRunOptions { DryRun = true },
            DryRunTestHelpers.BlockedContext());

        var result = await tool.create_records("account", "", 1);

        Assert.IsTrue(result.IsError, "Empty records_json should return an error.");
        Assert.IsFalse(result.GetText().StartsWith("[DryRun]"),
            "Validation error should not produce a dry-run preview.");
    }

    /// <summary>
    /// create_records with non-array records_json must return Error.
    /// This validation runs after entity resolution, so it requires a service.
    /// With null ServiceClient, ResolveEntity fails first — still an error,
    /// not a dry-run preview.
    /// </summary>
    [TestMethod]
    public async Task CreateRecords_NullService_ReturnsErrorNotDryRun()
    {
        var tool = new CliCreateRecordsTool(null!, new McpDryRunOptions { DryRun = true },
            DryRunTestHelpers.BlockedContext());

        var result = await tool.create_records("account", "[{}]", 1);

        // With null ServiceClient, ResolveEntity throws → ThrowException → IsError.
        // The key assertion: it must NOT produce a [DryRun] preview, because
        // the gateway prevents any mutation path from being reached.
        Assert.IsFalse(result.GetText().StartsWith("[DryRun]"),
            "Null service should not produce a dry-run preview — it should error before the preview.");
    }
}
