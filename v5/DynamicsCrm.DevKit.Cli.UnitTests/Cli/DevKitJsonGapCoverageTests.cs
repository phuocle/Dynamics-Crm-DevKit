using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Reflection;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// Targets the remaining uncovered DevKitJson branches: trailing-content
/// errors, string escapes, compact Guid/File typed writes, BooleanManagedProperty
/// with a logical name, context reflection fallbacks (throwing properties and
/// non-remote parents), parser edge cases (bad literals, surrogate pairs,
/// number overflow), dictionary mapping nulls and CoerceValue fallbacks.
/// </summary>
[TestClass]
public sealed class DevKitJsonGapCoverageTests
{
    private sealed class Poco
    {
        public string? Name { get; set; }
        public int Age { get; set; }
        public int? Score { get; set; }
        public EntityReference? Ref { get; set; }
        public Dictionary<int, string> Numbered { get; set; } = new();
        public string[]? Tags { get; set; }
        public List<string>? Items { get; set; }
        public DateTime When { get; set; }
        public Dictionary<string, string> Map { get; set; } = new();
    }

    private sealed class CustomExecutionContext : IExecutionContext
    {
        public object? ParentContext { get; set; }
        public bool ThrowOnRead { get; set; }
        public string ExplodingValue => ThrowOnRead ? throw new InvalidOperationException("explode") : "readable";

        public ParameterCollection InputParameters { get; } = new();
        public ParameterCollection OutputParameters { get; } = new();
        public ParameterCollection SharedVariables { get; } = new();
        public EntityImageCollection PreEntityImages { get; } = new();
        public EntityImageCollection PostEntityImages { get; } = new();
        public EntityReference? OwningExtension { get; set; }
        public Guid BusinessUnitId { get; set; } = Guid.NewGuid();
        public Guid CorrelationId { get; set; } = Guid.NewGuid();
        public Guid InitiatingUserId { get; set; } = Guid.NewGuid();
        public Guid OrganizationId { get; set; } = Guid.NewGuid();
        public string OrganizationName { get; set; } = "org";
        public Guid PrimaryEntityId { get; set; } = Guid.NewGuid();
        public string PrimaryEntityName { get; set; } = "account";
        public string SecondaryEntityName { get; set; } = "none";
        public Guid UserId { get; set; } = Guid.NewGuid();
        public string MessageName { get; set; } = "Create";
        public int Mode { get; set; }
        public int IsolationMode { get; set; }
        public int Depth { get; set; } = 1;
        public int Stage { get; set; } = 10;
        public bool IsExecutingOffline { get; set; }
        public bool IsInTransaction { get; set; }
        public bool IsOfflinePlayback { get; set; }
        public Guid OperationId { get; set; } = Guid.NewGuid();
        public DateTime OperationCreatedOn { get; set; } = new DateTime(2024, 1, 2, 3, 4, 5, DateTimeKind.Utc);
        public Guid? RequestId { get; set; }
    }

    [TestMethod]
    public void Deserialize_TrailingContent_ThrowsFormatException()
    {
        var ex = Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("{} trailing"));
        StringAssert.Contains(ex.Message, "Unexpected content at JSON index");
    }

    [TestMethod]
    public void MapTo_NullAndNonDictionary_ReturnDefault()
    {
        Assert.IsNull(DevKitJson.MapTo<Poco>(null));
        Assert.IsNull(DevKitJson.MapTo<Poco>(42));
        Assert.IsNull(DevKitJson.MapTo<Poco>("text"));
        var typed = new Poco();
        Assert.AreSame(typed, DevKitJson.MapTo<Poco>(typed));
    }

    [TestMethod]
    public void Serialize_StringEscapes_BackslashFormfeedCarriageReturn()
    {
        var json = DevKitJson.Serialize("a\bb\fc\nd\re\tf\"g\\h/i");
        StringAssert.Contains(json, "\\b");
        StringAssert.Contains(json, "\\f");
        StringAssert.Contains(json, "\\n");
        StringAssert.Contains(json, "\\r");
        StringAssert.Contains(json, "\\t");
        StringAssert.Contains(json, "\\\"");
        StringAssert.Contains(json, "\\\\");
        var round = DevKitJson.Deserialize<string>(json);
        Assert.AreEqual("a\bb\fc\nd\re\tf\"g\\h/i", round);
    }

    [TestMethod]
    public void SerializeCompact_GuidAndFile_UseShortTypeAndReconstruct()
    {
        var guid = Guid.NewGuid();
        var guidJson = DevKitJson.SerializeCompact(guid);
        StringAssert.Contains(guidJson, "\"_t\":\"G\"");
        Assert.AreEqual(guid, DevKitJson.Deserialize<Guid>(guidJson));

        var bytes = Encoding.UTF8.GetBytes("hello file");
        var fileJson = DevKitJson.SerializeCompact(bytes);
        StringAssert.Contains(fileJson, "\"_t\":\"F\"");
        CollectionAssert.AreEqual(bytes, DevKitJson.Deserialize<byte[]>(fileJson));
    }

    [TestMethod]
    public void Serialize_BooleanManagedProperty_WithLogicalName_RoundTrips()
    {
        var bmp = new BooleanManagedProperty { Value = true };
        typeof(ManagedProperty<bool>).GetProperty("ManagedPropertyLogicalName", BindingFlags.Public | BindingFlags.Instance)!
            .SetValue(bmp, "new_managed_field");
        var json = DevKitJson.Serialize(bmp);
        StringAssert.Contains(json, "ManagedPropertyLogicalName");
        var round = DevKitJson.Deserialize<BooleanManagedProperty>(json);
        Assert.IsTrue(round.Value);

        var compactJson = DevKitJson.SerializeCompact(bmp);
        StringAssert.Contains(compactJson, "\"ml\"");
        var compactRound = DevKitJson.Deserialize<BooleanManagedProperty>(compactJson);
        Assert.IsTrue(compactRound.Value);
    }

    [TestMethod]
    public void SerializeContext_CustomContext_ReportsThrowingProperty()
    {
        var ctx = new CustomExecutionContext { MessageName = "Update", ThrowOnRead = true };
        var error = Assert.ThrowsExactly<InvalidOperationException>(() => DevKitJson.SerializeContext(ctx));
        StringAssert.Contains(error.Message, "$.ExplodingValue");
        Assert.ThrowsExactly<InvalidOperationException>(() => DevKitJson.Serialize(ctx));
    }

    [TestMethod]
    public void SerializeContext_CustomContext_WithParentContexts_SerializesBothKinds()
    {
        var remoteParent = new RemoteExecutionContext { MessageName = "Create", Depth = 2 };
        var child = new CustomExecutionContext { ParentContext = remoteParent };
        var json = DevKitJson.Serialize(child);
        StringAssert.Contains(json, "ParentContext");
        StringAssert.Contains(json, "\"Create\"");

        var nestedParent = new CustomExecutionContext { MessageName = "Nested" };
        var child2 = new CustomExecutionContext { ParentContext = nestedParent };
        var json2 = DevKitJson.Serialize(child2);
        StringAssert.Contains(json2, "Nested");
    }

    [TestMethod]
    public void Serialize_RemoteExecutionContext_ParentContextVariants()
    {
        var ctx = new RemoteExecutionContext { MessageName = "Create" };
        var customParent = new CustomExecutionContext { MessageName = "CustomParent" };
        try
        {
            typeof(RemoteExecutionContext).GetProperty("ParentContext")!.SetValue(ctx, customParent);
        }
        catch (ArgumentException)
        {
            // SDK property may be strongly typed; the remote-parent branch below still covers the writer.
        }
        var json = DevKitJson.Serialize(ctx);
        Assert.IsFalse(string.IsNullOrEmpty(json));

        var ctx2 = new RemoteExecutionContext { MessageName = "Delete" };
        ctx2.ParentContext = new RemoteExecutionContext { MessageName = "RemoteParent" };
        var json2 = DevKitJson.Serialize(ctx2);
        StringAssert.Contains(json2, "RemoteParent");
    }

    [TestMethod]
    public void Deserialize_BadTrueFalseLiterals_Throw()
    {
        Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("tru"));
        Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("fals"));
        Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("xyz"));
    }

    [TestMethod]
    public void Deserialize_UnicodeEscapes_PairsLoneAndInvalidHex()
    {
        Assert.AreEqual("\U0001F600", DevKitJson.Deserialize<string>("\"\\uD83D\\uDE00\""));
        Assert.AreEqual("\uD83D", DevKitJson.Deserialize<string>("\"\\uD83D\""));
        Assert.ThrowsExactly<InvalidOperationException>(() => DevKitJson.Deserialize<string>("\"\\uD83D\\uZZZZ\""));
    }

    [TestMethod]
    public void Deserialize_NumberVariants_DoubleLongDecimalAndErrors()
    {
        Assert.AreEqual(1.5d, DevKitJson.Deserialize<double>("1.5"));
        Assert.AreEqual(3000000000L, DevKitJson.Deserialize<long>("3000000000"));
        Assert.AreEqual(42, DevKitJson.Deserialize<int>("42"));

        var big = DevKitJson.Deserialize("99999999999999999999999");
        Assert.IsInstanceOfType(big, typeof(decimal));

        Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("1.2.3"));
        Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("--"));
    }

    [TestMethod]
    public void Deserialize_PocoNullValues_SetsReferenceAndSkipsValueTypes()
    {
        var poco = DevKitJson.Deserialize<Poco>("{\"Name\":null,\"Age\":null,\"Score\":null}");
        Assert.IsNull(poco.Name);
        Assert.AreEqual(0, poco.Age);
        Assert.IsNull(poco.Score);
    }

    [TestMethod]
    public void Deserialize_PocoNestedTypedAndCollections_CoercesAllShapes()
    {
        var refId = Guid.NewGuid();
        var json =
            "{\"Ref\":{\"__type\":\"EntityReference\",\"LogicalName\":\"account\",\"Id\":\"" + refId + "\",\"Name\":\"AC\"}," +
            "\"Tags\":[\"a\",\"b\"]," +
            "\"Items\":[\"x\",\"y\"]," +
            "\"When\":\"2024-01-02T03:04:05Z\"}";
        var poco = DevKitJson.Deserialize<Poco>(json);
        Assert.IsNotNull(poco.Ref);
        Assert.AreEqual(refId, poco.Ref.Id);
        Assert.AreEqual("account", poco.Ref.LogicalName);
        CollectionAssert.AreEqual(new[] { "a", "b" }, poco.Tags);
        Assert.AreEqual(2, poco.Items!.Count);
        Assert.AreEqual(2024, poco.When.Year);
    }

    [TestMethod]
    public void Deserialize_PocoDictionaryAndNumberedDictionary_CoerceDictionaries()
    {
        var json = "{\"Map\":{\"k\":\"v\"},\"Numbered\":{\"1\":\"one\"}}";
        var poco = DevKitJson.Deserialize<Poco>(json);
        Assert.AreEqual("v", poco.Map["k"]);
        Assert.AreEqual(1, poco.Numbered.Count);
        Assert.AreEqual("one", poco.Numbered[1]);
    }

    [TestMethod]
    public void Deserialize_PocoListIntoDictionaryProperty_ThrowsWrapped()
    {
        var ex = Assert.ThrowsExactly<InvalidOperationException>(() =>
            DevKitJson.Deserialize<Poco>("{\"Map\":[\"not\",\"a\",\"dict\"]}"));
        StringAssert.Contains(ex.Message, "Poco");
    }
}
