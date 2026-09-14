using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class DevKitJsonDeepCoverageTests
{
    private class ComplexSample
    {
        public Guid? NullableGuid { get; set; }
        public int? NullableInt { get; set; }
        public bool? NullableBool { get; set; }
        public double? NullableDouble { get; set; }
        public decimal? NullableDecimal { get; set; }
        public float? NullableFloat { get; set; }
        public long? NullableLong { get; set; }
        public string[] StringArray { get; set; } = Array.Empty<string>();
        public int[] IntArray { get; set; } = Array.Empty<int>();
        public Dictionary<string, int> IntMap { get; set; } = new();
        public Dictionary<string, string> StringMap { get; set; } = new();
        public List<string> StringList { get; set; } = new();
        public IList<int> IntIList { get; set; } = new List<int>();
        public IEnumerable<string> StringEnum { get; set; } = new List<string>();
        public IReadOnlyList<double> DoubleReadOnly { get; set; } = new List<double>();
    }

    [TestMethod]
    public void TryDeserialize_ValidAndInvalidJson()
    {
        Assert.IsTrue(DevKitJson.TryDeserialize<int>("42", out var num));
        Assert.AreEqual(42, num);

        Assert.IsFalse(DevKitJson.TryDeserialize<int>("not a number", out _));
        Assert.IsFalse(DevKitJson.TryDeserialize<ComplexSample>("[1, 2, 3]", out _));
        Assert.IsFalse(DevKitJson.TryDeserialize<int>("", out _));
    }

    [TestMethod]
    public void Deserialize_ComplexType_CoercesAllCollectionAndNullableTypes()
    {
        var guid = Guid.NewGuid();
        var json = $@"{{
            ""NullableGuid"": ""{guid}"",
            ""NullableInt"": ""123"",
            ""NullableBool"": ""true"",
            ""NullableDouble"": ""3.14"",
            ""NullableDecimal"": ""99.95"",
            ""NullableFloat"": ""1.5"",
            ""NullableLong"": ""9999999999"",
            ""StringArray"": [""one"", ""two""],
            ""IntArray"": [1, 2, 3],
            ""IntMap"": {{ ""k1"": 10, ""k2"": 20 }},
            ""StringMap"": {{ ""hello"": ""world"" }},
            ""StringList"": [""alpha"", ""beta""],
            ""IntIList"": [100, 200],
            ""StringEnum"": [""a"", ""b""],
            ""DoubleReadOnly"": [1.1, 2.2]
        }}";

        var result = DevKitJson.Deserialize<ComplexSample>(json);
        Assert.IsNotNull(result);
        Assert.AreEqual(guid, result.NullableGuid);
        Assert.AreEqual(123, result.NullableInt);
        Assert.AreEqual(true, result.NullableBool);
        Assert.AreEqual(3.14, result.NullableDouble!.Value, 0.001);
        Assert.AreEqual(99.95m, result.NullableDecimal);
        Assert.AreEqual(1.5f, result.NullableFloat!.Value, 0.001f);
        Assert.AreEqual(9999999999L, result.NullableLong);
        Assert.AreEqual(2, result.StringArray.Length);
        Assert.AreEqual("one", result.StringArray[0]);
        Assert.AreEqual(3, result.IntArray.Length);
        Assert.AreEqual(2, result.IntMap.Count);
        Assert.AreEqual(10, result.IntMap["k1"]);
        Assert.AreEqual("world", result.StringMap["hello"]);
        Assert.AreEqual(2, result.StringList.Count);
        Assert.AreEqual(2, result.IntIList.Count);
    }

    [TestMethod]
    public void ParseString_EscapeSequences()
    {
        // Test escape sequences: \b, \f, \r, \n, \t, \", \\, \/, \u0041
        var json = "\"test\\b\\f\\r\\n\\t\\\"\\\\\\/\\u0041done\"";
        var result = DevKitJson.Deserialize<string>(json);
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("A")); // \u0041 is 'A'
        Assert.IsTrue(result.EndsWith("done"));
    }

    [TestMethod]
    public void ReconstructBooleanManagedProperty_RoundTrip()
    {
        var json = "{\"__type\":\"BooleanManagedProperty\",\"Value\":true,\"CanBeChanged\":true,\"ManagedPropertyLogicalName\":\"canbechanged\"}";
        var reconstructed = DevKitJson.Deserialize<BooleanManagedProperty>(json);
        Assert.IsNotNull(reconstructed);
        Assert.AreEqual(true, reconstructed.Value);
        Assert.AreEqual(true, reconstructed.CanBeChanged);
    }

    [TestMethod]
    public void Deserialize_InvalidRootType_ThrowsInvalidOperationException()
    {
        // Try to deserialize an array to an int
        Assert.Throws<InvalidOperationException>(() =>
        {
            DevKitJson.Deserialize<int>("[1, 2, 3]");
        });

        // Try to deserialize an object into an int
        Assert.Throws<InvalidOperationException>(() =>
        {
            DevKitJson.Deserialize<int>("{\"key\": \"val\"}");
        });
    }

    [TestMethod]
    public void CreateDeserializationException_ViaReflection_FormatsCorrectMessage()
    {
        var method = typeof(DevKitJson).GetMethod("CreateDeserializationException", BindingFlags.NonPublic | BindingFlags.Static)!;
        var ex = (InvalidOperationException)method.Invoke(null, new object?[] { typeof(int), new string('x', 600), "sampleResult", new Exception("inner") })!;
        Assert.IsNotNull(ex);
        Assert.IsTrue(ex.Message.Contains("Unable to deserialize JSON"));
        Assert.IsTrue(ex.Message.Contains("...")); // Long string preview truncated
        Assert.IsNotNull(ex.InnerException);
    }
}
