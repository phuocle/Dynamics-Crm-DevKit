#nullable enable
using DynamicsCrm.DevKit.Cli.Tool;
using DynamicsCrm.DevKit.Cli.Tool.Commands;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Tool;

/// <summary>
/// Offline coverage for <see cref="ToolConnection"/>: the modern-auth validation
/// branches, the fallback-modern decision branch, and impersonation gating
/// against a FakeSdkClient-backed ServiceClient. The network-bound connect
/// success paths are intentionally not covered by unit tests (they need a live
/// org); they are exercised by the integration matrix instead.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ToolConnectionTests
{
    private static readonly string OrigCwd = Environment.CurrentDirectory;
    private string _tempDir = null!;

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit-tool-connection-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        Environment.CurrentDirectory = _tempDir;
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = OrigCwd;
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    [TestMethod]
    public async Task ConnectAsync_UnsupportedAuth_ReturnsConnectionFailure()
    {
        var settings = new ToolCallSettings { AuthType = "Future", Url = "https://org.example.test" };

        var ex = await Assert.ThrowsExactlyAsync<ToolCliException>(
            () => ToolConnection.ConnectAsync(settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.ConnectionFailure, ex.ExitCode);
        StringAssert.Contains(ex.Message, "Authentication type 'Future' is not supported");
    }

    [TestMethod]
    public async Task ConnectAsync_DeviceCodeWithoutUrl_ReturnsConnectionFailure()
    {
        // DeviceCode (unlike FromPac) requires --url; the branch-specific check
        // in ToolConnection catches it before any builder work.
        var settings = new ToolCallSettings { AuthType = "DeviceCode" };

        var ex = await Assert.ThrowsExactlyAsync<ToolCliException>(
            () => ToolConnection.ConnectAsync(settings, CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.ConnectionFailure, ex.ExitCode);
        StringAssert.Contains(ex.Message, "--url is required for modern authentication");
    }

    [TestMethod]
    public async Task ConnectAsync_FallbackModernFromEnvFile_MissingSecret_FailsValidation()
    {
        // No explicit args; the .env fallback fills only AUTH_TYPE + URL, so the
        // fallback-modern branch runs and the builder rejects the missing secret.
        await File.WriteAllTextAsync(Path.Combine(_tempDir, ".env"),
            $"{ProjectEnvironment.AuthType}=ClientSecret\n{ProjectEnvironment.Url}=https://org.example.test");

        var ex = await Assert.ThrowsExactlyAsync<ToolCliException>(
            () => ToolConnection.ConnectAsync(new ToolCallSettings(), CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.ConnectionFailure, ex.ExitCode);
        StringAssert.Contains(ex.Message, "Validation failed");
    }

    [TestMethod]
    public async Task ConnectAsync_FallbackLegacyFromEnvFile_InvalidString_FailsValidation()
    {
        // .env fills DEVKIT_CONNECTION with a non-connection string: the
        // fallback-legacy branch runs and reports the local failure.
        await File.WriteAllTextAsync(Path.Combine(_tempDir, ".env"),
            $"{ProjectEnvironment.Connection}=this is not a connection string");

        var ex = await Assert.ThrowsExactlyAsync<ToolCliException>(
            () => ToolConnection.ConnectAsync(new ToolCallSettings(), CancellationToken.None));

        Assert.AreEqual(ToolExitCodes.ConnectionFailure, ex.ExitCode);
        StringAssert.Contains(ex.Message, "Connection failed");
    }

    // ──────────────────────────────────────────────
    // Impersonation gating (private ApplyImpersonation, via reflection)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ApplyImpersonation_AdminWithValidGuid_Impersonates()
    {
        var userId = Guid.NewGuid();
        using var fake = CreateFake(
            roleNames: new[] { "System Administrator" },
            systemUsers: UserCollection(userId, enabled: true));

        var settings = new ToolCallSettings { AsUser = userId.ToString() };
        var result = new ToolConnection.ToolConnectionResult { ServiceClient = fake.Client };

        InvokeApplyImpersonation(settings, fake.Client, result);

        Assert.AreEqual(userId, result.ImpersonatedUserId);
        Assert.IsFalse(string.IsNullOrEmpty(result.ImpersonatedUserDisplay));
        // CallerId itself is set on the real ServiceClient; the Harmony double
        // does not round-trip that property, so the outcome object is the assert.
    }

    [TestMethod]
    public void ApplyImpersonation_NonAdmin_IgnoredWithNullImpersonation()
    {
        var userId = Guid.NewGuid();
        using var fake = CreateFake(
            roleNames: new[] { "Salesperson" },
            systemUsers: UserCollection(userId, enabled: true));

        var settings = new ToolCallSettings { AsUser = userId.ToString() };
        var result = new ToolConnection.ToolConnectionResult { ServiceClient = fake.Client };

        InvokeApplyImpersonation(settings, fake.Client, result);

        Assert.IsNull(result.ImpersonatedUserId);
        Assert.IsNull(result.ImpersonatedUserDisplay);
        Assert.AreNotEqual(userId, fake.Client.CallerId);
    }

    [TestMethod]
    public void ApplyImpersonation_AdminWithUnknownUser_Ignored()
    {
        using var fake = CreateFake(
            roleNames: new[] { "System Administrator" },
            systemUsers: new EntityCollection()); // no such user

        var settings = new ToolCallSettings { AsUser = Guid.NewGuid().ToString() };
        var result = new ToolConnection.ToolConnectionResult { ServiceClient = fake.Client };

        InvokeApplyImpersonation(settings, fake.Client, result);

        Assert.IsNull(result.ImpersonatedUserId);
        Assert.IsNull(result.ImpersonatedUserDisplay);
    }

    [TestMethod]
    public void ApplyImpersonation_NoAsUser_IsNoOp()
    {
        using var fake = CreateFake(roleNames: new[] { "System Administrator" });

        var settings = new ToolCallSettings();
        var result = new ToolConnection.ToolConnectionResult { ServiceClient = fake.Client };

        InvokeApplyImpersonation(settings, fake.Client, result);

        Assert.IsNull(result.ImpersonatedUserId);
        Assert.AreEqual(Guid.Empty, fake.Client.CallerId);
    }

    // ──────────────────────────────────────────────
    // helpers
    // ──────────────────────────────────────────────

    private static void InvokeApplyImpersonation(ToolCallSettings settings, ServiceClient client, ToolConnection.ToolConnectionResult result)
    {
        var method = typeof(ToolConnection).GetMethod(
            "ApplyImpersonation", BindingFlags.NonPublic | BindingFlags.Static);
        Assert.IsNotNull(method, "ApplyImpersonation should exist");
        method.Invoke(null, new object?[] { settings, client, result });
    }

    private static FakeSdkClient CreateFake(IEnumerable<string> roleNames, EntityCollection? systemUsers = null)
    {
        var fake = new FakeSdkClient();
        var userId = Guid.NewGuid();
        fake.OnExecute = request => request is WhoAmIRequest
            ? new WhoAmIResponse
            {
                Results =
                {
                    ["UserId"] = userId,
                    ["BusinessUnitId"] = Guid.NewGuid(),
                    ["OrganizationId"] = Guid.NewGuid()
                }
            }
            : throw new InvalidOperationException($"Unexpected request '{request.RequestName}'");
        fake.OnRetrieveMultiple = query => query switch
        {
            // RoleGateHelper fetches roles through a FetchExpression whose entity
            // is 'role'; user lookups are QueryExpression on 'systemuser'.
            FetchExpression fetch when fetch.Query.Contains("name='role'") => RoleCollection(roleNames),
            _ => systemUsers ?? new EntityCollection(),
        };
        return fake;
    }

    private static EntityCollection RoleCollection(IEnumerable<string> roleNames)
    {
        var collection = new EntityCollection();
        foreach (var name in roleNames)
            collection.Entities.Add(new Entity("role") { ["name"] = name });
        return collection;
    }

    private static EntityCollection UserCollection(Guid userId, bool enabled) => new()
    {
        Entities =
        {
            new Entity("systemuser", userId)
            {
                ["fullname"] = "Test User",
                ["internalemailaddress"] = "test.user@example.test",
                ["isdisabled"] = !enabled
            }
        }
    };
}
