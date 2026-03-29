using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for MessageDiscoveryHelper.NormalizeScope() — normalizes entity scope for message discovery.
/// The class is internal, so we access it via reflection.
/// Other methods (GetMessageMarkdownAsync) depend on MetadataService and are skipped.
/// </summary>
[TestClass]
public class MessageDiscoveryHelperTests
{
    private static readonly Type HelperType = typeof(DynamicsCrm.DevKit.Cli.Mcp.McpServerHost).Assembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.MessageDiscoveryHelper")!;

    private static readonly MethodInfo NormalizeScopeMethod = HelperType
        .GetMethod("NormalizeScope", BindingFlags.Public | BindingFlags.Static)!;

    private static string NormalizeScope(string? scope)
    {
        return (string)NormalizeScopeMethod.Invoke(null, new object?[] { scope })!;
    }

    [TestMethod]
    public void NormalizeScope_Null_ReturnsNone()
    {
        Assert.AreEqual("none", NormalizeScope(null));
    }

    [TestMethod]
    public void NormalizeScope_Empty_ReturnsNone()
    {
        Assert.AreEqual("none", NormalizeScope(""));
    }

    [TestMethod]
    public void NormalizeScope_Whitespace_ReturnsNone()
    {
        Assert.AreEqual("none", NormalizeScope("   "));
    }

    [TestMethod]
    public void NormalizeScope_Global_ReturnsNone()
    {
        Assert.AreEqual("none", NormalizeScope("global"));
    }

    [TestMethod]
    public void NormalizeScope_GlobalMixedCase_ReturnsNone()
    {
        Assert.AreEqual("none", NormalizeScope("Global"));
    }

    [TestMethod]
    public void NormalizeScope_GlobalUpperCase_ReturnsNone()
    {
        Assert.AreEqual("none", NormalizeScope("GLOBAL"));
    }

    [TestMethod]
    public void NormalizeScope_EntityName_ReturnsLowercase()
    {
        Assert.AreEqual("account", NormalizeScope("Account"));
    }

    [TestMethod]
    public void NormalizeScope_EntityNameUpperCase_ReturnsLowercase()
    {
        Assert.AreEqual("contact", NormalizeScope("CONTACT"));
    }

    [TestMethod]
    public void NormalizeScope_AlreadyLowercase_ReturnsSame()
    {
        Assert.AreEqual("opportunity", NormalizeScope("opportunity"));
    }

    [TestMethod]
    public void NormalizeScope_WithWhitespace_ReturnsTrimmed()
    {
        Assert.AreEqual("account", NormalizeScope("  account  "));
    }

    [TestMethod]
    public void NormalizeScope_GlobalWithWhitespace_ReturnsNone()
    {
        Assert.AreEqual("none", NormalizeScope("  global  "));
    }

    [TestMethod]
    public void NormalizeScope_NoneInput_ReturnsNone()
    {
        Assert.AreEqual("none", NormalizeScope("none"));
    }
}
