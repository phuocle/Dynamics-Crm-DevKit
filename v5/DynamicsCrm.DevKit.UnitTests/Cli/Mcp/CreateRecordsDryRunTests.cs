using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using ModelContextProtocol.Protocol;
using System;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

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
            new CreateRecordsTool(null!, null!, null!);
            Assert.Fail("Expected ArgumentNullException when options is null.");
        }
        catch (ArgumentNullException) { }
    }

    [TestMethod]
    public void Constructor_NullContext_Throws()
    {
        try
        {
            new CreateRecordsTool(null!, new McpDryRunOptions(), null!);
            Assert.Fail("Expected ArgumentNullException when context is null.");
        }
        catch (ArgumentNullException) { }
    }

    [TestMethod]
    public void Constructor_BlockedContext_DoesNotThrow()
    {
        var tool = new CreateRecordsTool(null!, new McpDryRunOptions { DryRun = true },
            DryRunTestHelpers.BlockedContext());
        Assert.IsNotNull(tool);
    }

    /// <summary>
    /// TryCreateAsync must call DataverseMutationExecutor.CreateAsync which
    /// asserts mutation is allowed. In blocked mode, the gateway must throw
    /// before any SDK call — even if the action-level preview was bypassed.
    /// </summary>
    [TestMethod]
    public async Task TryCreateAsync_BlockedContext_ThrowsBeforeSdkCall()
    {
        // Arrange: tool with blocked context and null ServiceClient.
        // If the gateway works, it throws InvalidOperationException before
        // _serviceClient.CreateAsync is reached (which would NullRef).
        var tool = new CreateRecordsTool(null!, new McpDryRunOptions { DryRun = true },
            DryRunTestHelpers.BlockedContext());

        var entity = new Entity("account");
        var method = typeof(CreateRecordsTool)
            .GetMethod("TryCreateAsync",
                BindingFlags.NonPublic | BindingFlags.Instance,
                null,
                [typeof(Entity), typeof(CancellationToken)],
                null);

        Assert.IsNotNull(method, "TryCreateAsync method not found via reflection.");

        var task = (Task<(Guid id, string error)>)method.Invoke(tool, [entity, CancellationToken.None])!;

        // The gateway should throw InvalidOperationException, which TryCreateAsync
        // catches and returns as (Guid.Empty, errorMessage).
        var result = await task;

        Assert.AreEqual(Guid.Empty, result.id);
        Assert.IsFalse(string.IsNullOrEmpty(result.error),
            "TryCreateAsync should return an error message when the gateway blocks the mutation.");
        Assert.IsTrue(result.error.Contains("Mutation blocked", StringComparison.OrdinalIgnoreCase),
            $"Error message should mention 'Mutation blocked'. Got: {result.error}");
    }

    /// <summary>
    /// TryCreateAsync with a non-blocking context and null ServiceClient should
    /// reach the SDK call and return a NullReferenceException-derived error
    /// (proving the gateway allowed the call through).
    /// </summary>
    [TestMethod]
    public async Task TryCreateAsync_NormalContext_AllowsSdkCall()
    {
        var tool = new CreateRecordsTool(null!, new McpDryRunOptions { DryRun = false },
            DryRunTestHelpers.NormalContext());

        var entity = new Entity("account");
        var method = typeof(CreateRecordsTool)
            .GetMethod("TryCreateAsync",
                BindingFlags.NonPublic | BindingFlags.Instance,
                null,
                [typeof(Entity), typeof(CancellationToken)],
                null);

        Assert.IsNotNull(method, "TryCreateAsync method not found via reflection.");

        var task = (Task<(Guid id, string error)>)method.Invoke(tool, [entity, CancellationToken.None])!;
        var result = await task;

        Assert.AreEqual(Guid.Empty, result.id);
        // With null ServiceClient, the SDK call throws — but NOT "Mutation blocked".
        Assert.IsFalse(result.error.Contains("Mutation blocked", StringComparison.OrdinalIgnoreCase),
            $"Normal context should not block. Got: {result.error}");
    }

    /// <summary>
    /// create_records with empty entity_name must return Error before reaching
    /// the dry-run check or any service call.
    /// </summary>
    [TestMethod]
    public async Task CreateRecords_EmptyEntityName_ReturnsError()
    {
        var tool = new CreateRecordsTool(null!, new McpDryRunOptions { DryRun = true },
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
        var tool = new CreateRecordsTool(null!, new McpDryRunOptions { DryRun = true },
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
        var tool = new CreateRecordsTool(null!, new McpDryRunOptions { DryRun = true },
            DryRunTestHelpers.BlockedContext());

        var result = await tool.create_records("account", "[{}]", 1);

        // With null ServiceClient, ResolveEntity throws → ThrowException → IsError.
        // The key assertion: it must NOT produce a [DryRun] preview, because
        // the gateway prevents any mutation path from being reached.
        Assert.IsFalse(result.GetText().StartsWith("[DryRun]"),
            "Null service should not produce a dry-run preview — it should error before the preview.");
    }
}
