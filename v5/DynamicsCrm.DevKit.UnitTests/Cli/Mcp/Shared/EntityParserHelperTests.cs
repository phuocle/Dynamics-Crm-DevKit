using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;
using System.Text.Json;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

/// <summary>
/// Tests for EntityParserHelper private static methods: ParseFieldKey, ParseFieldName, FallbackConvert.
/// The class is internal, so we access it via reflection.
/// </summary>
[TestClass]
public class EntityParserHelperTests
{
    private static readonly Type HelperType = typeof(DynamicsCrm.DevKit.Cli.Mcp.McpServerHost).Assembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.EntityParserHelper")!;

    // ──────────────────────────────────────────────
    // ParseFieldKey
    // ──────────────────────────────────────────────

    private static readonly MethodInfo ParseFieldKeyMethod = HelperType
        .GetMethod("ParseFieldKey", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static (string fieldName, string targetEntity) ParseFieldKey(string key)
    {
        // Returns a ValueTuple
        var result = ParseFieldKeyMethod.Invoke(null, new object[] { key })!;
        var tuple = ((string, string))result;
        return tuple;
    }

    [TestMethod]
    public void ParseFieldKey_SimpleField_ReturnsFieldWithNullTarget()
    {
        var (field, target) = ParseFieldKey("name");
        Assert.AreEqual("name", field);
        Assert.IsNull(target);
    }

    [TestMethod]
    public void ParseFieldKey_PolymorphicLookup_SplitsCorrectly()
    {
        var (field, target) = ParseFieldKey("customerid@account");
        Assert.AreEqual("customerid", field);
        Assert.AreEqual("account", target);
    }

    [TestMethod]
    public void ParseFieldKey_OwnerLookup_SplitsCorrectly()
    {
        var (field, target) = ParseFieldKey("ownerid@systemuser");
        Assert.AreEqual("ownerid", field);
        Assert.AreEqual("systemuser", target);
    }

    [TestMethod]
    public void ParseFieldKey_AtSignAtStart_ReturnsFullKeyNoTarget()
    {
        // '@' at index 0 → atIndex > 0 is false → returns (key, null)
        var (field, target) = ParseFieldKey("@field");
        Assert.AreEqual("@field", field);
        Assert.IsNull(target);
    }

    [TestMethod]
    public void ParseFieldKey_AtSignAtEnd_ReturnsFullKeyNoTarget()
    {
        // '@' at last position → atIndex < key.Length - 1 is false → returns (key, null)
        var (field, target) = ParseFieldKey("field@");
        Assert.AreEqual("field@", field);
        Assert.IsNull(target);
    }

    [TestMethod]
    public void ParseFieldKey_MultipleAtSigns_SplitsAtFirstAt()
    {
        var (field, target) = ParseFieldKey("field@entity@extra");
        Assert.AreEqual("field", field);
        Assert.AreEqual("entity@extra", target);
    }

    // ──────────────────────────────────────────────
    // ParseFieldName
    // ──────────────────────────────────────────────

    private static readonly MethodInfo ParseFieldNameMethod = HelperType
        .GetMethod("ParseFieldName", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string ParseFieldName(string key)
    {
        return (string)ParseFieldNameMethod.Invoke(null, new object[] { key })!;
    }

    [TestMethod]
    public void ParseFieldName_SimpleField_ReturnsAsIs()
    {
        Assert.AreEqual("name", ParseFieldName("name"));
    }

    [TestMethod]
    public void ParseFieldName_PolymorphicField_ReturnsPart()
    {
        Assert.AreEqual("customerid", ParseFieldName("customerid@account"));
    }

    [TestMethod]
    public void ParseFieldName_AtStart_ReturnsFullKey()
    {
        Assert.AreEqual("@field", ParseFieldName("@field"));
    }

    // ──────────────────────────────────────────────
    // FallbackConvert
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FallbackConvertMethod = HelperType
        .GetMethod("FallbackConvert", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static object FallbackConvert(JsonElement jsonVal)
    {
        return FallbackConvertMethod.Invoke(null, new object[] { jsonVal })!;
    }

    [TestMethod]
    public void FallbackConvert_String_ReturnsString()
    {
        var doc = JsonDocument.Parse("\"hello\"");
        var result = FallbackConvert(doc.RootElement);
        Assert.AreEqual("hello", result);
    }

    [TestMethod]
    public void FallbackConvert_Number_ReturnsDecimal()
    {
        var doc = JsonDocument.Parse("42.5");
        var result = FallbackConvert(doc.RootElement);
        Assert.AreEqual(42.5m, result);
    }

    [TestMethod]
    public void FallbackConvert_True_ReturnsTrue()
    {
        var doc = JsonDocument.Parse("true");
        var result = FallbackConvert(doc.RootElement);
        Assert.AreEqual(true, result);
    }

    [TestMethod]
    public void FallbackConvert_False_ReturnsFalse()
    {
        var doc = JsonDocument.Parse("false");
        var result = FallbackConvert(doc.RootElement);
        Assert.AreEqual(false, result);
    }

    [TestMethod]
    public void FallbackConvert_IntegerNumber_ReturnsDecimal()
    {
        var doc = JsonDocument.Parse("100");
        var result = FallbackConvert(doc.RootElement);
        Assert.AreEqual(100m, result);
    }

    // ──────────────────────────────────────────────
    // ClearCache
    // ──────────────────────────────────────────────

    private static readonly MethodInfo ClearCacheMethod = HelperType
        .GetMethod("ClearCache", BindingFlags.Public | BindingFlags.Static)!;

    [TestMethod]
    public void ClearCache_DoesNotThrow()
    {
        // Simply verify ClearCache runs without error
        ClearCacheMethod.Invoke(null, null);
    }
}
