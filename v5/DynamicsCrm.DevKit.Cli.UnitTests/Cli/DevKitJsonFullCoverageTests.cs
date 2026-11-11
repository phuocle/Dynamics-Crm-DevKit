using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reflection;
using System.Runtime.ExceptionServices;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class DevKitJsonFullCoverageTests
{
    private enum LocalChoice { One = 1, Two = 2 }

    private sealed class NoProperties
    {
        public override string ToString() => "fallback";
    }

    private sealed class PlainType { }

    private sealed class HasReadOnlyCollection
    {
        public List<int> Values { get; } = new();
        public int Number { get; private set; } = 7;
    }

    private sealed class NoAddCollection : IEnumerable<int>
    {
        public IEnumerator<int> GetEnumerator() => ((IEnumerable<int>)Array.Empty<int>()).GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }

    private static object? Invoke(string name, params object?[] args)
    {
        var method = typeof(DevKitJson).GetMethod(name, BindingFlags.NonPublic | BindingFlags.Static)
            ?? throw new AssertFailedException("Missing DevKitJson method: " + name);
        try { return method.Invoke(null, args); }
        catch (TargetInvocationException ex) when (ex.InnerException != null)
        {
            ExceptionDispatchInfo.Capture(ex.InnerException).Throw();
            throw;
        }
    }

    [TestMethod]
    public void Serialize_CoreFallbacks_AndSpecialNumbers()
    {
        Assert.AreEqual("\"fallback\"", DevKitJson.Serialize(new NoProperties()));
        StringAssert.Contains(DevKitJson.Serialize(double.NaN), "NaN");
        StringAssert.Contains(DevKitJson.Serialize(double.PositiveInfinity), "Infinity");
        StringAssert.Contains(DevKitJson.Serialize(float.NegativeInfinity), "-Infinity");
        Assert.AreEqual(1, DevKitJson.Deserialize(DevKitJson.Serialize(LocalChoice.One)));
        Assert.ThrowsExactly<NotSupportedException>(() => DevKitJson.Serialize(new Entity("test") { ["matrix"] = new[,] { { 1, 2 } } }));

        var map = new Dictionary<string, string> { ["__type"] = "user", ["x"] = "y" };
        StringAssert.Contains(DevKitJson.Serialize(map), "\"Values\"");
        var date = new DateTime(2026, 1, 2, 3, 4, 5, DateTimeKind.Utc);
        StringAssert.Contains(DevKitJson.SerializeCompact(date), "\"_t\":\"DT\"");
        Assert.IsInstanceOfType<TimeSpan>(DevKitJson.Deserialize(DevKitJson.Serialize(TimeSpan.FromMinutes(3))));
        Assert.IsInstanceOfType<DateTimeOffset>(DevKitJson.Deserialize(DevKitJson.Serialize(DateTimeOffset.UtcNow)));
        Assert.AreEqual('x', DevKitJson.Deserialize<char>(DevKitJson.Serialize('x')));
    }

    [TestMethod]
    public void Deserialize_ParserEdgesAndTypedDateTimeVariants()
    {
        Assert.IsNull(DevKitJson.Deserialize("  \t\r\n"));
        Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("["));
        Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("{\"x\" 1}"));
        Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("{\"x\":1,}"));
        Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("[1"));
        Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("\"bad\nstring\""));
        Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("\"bad\\"));
        Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("\"\\u12"));
        Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("01"));
        Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("1."));
        Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("1e"));
        Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("-"));

        var fromTicks = DevKitJson.Deserialize<DateTime>("{\"__type\":\"DateTime\",\"Ticks\":638712864000000000,\"Kind\":1}");
        Assert.AreEqual(DateTimeKind.Utc, fromTicks.Kind);
        var fromValue = DevKitJson.Deserialize<DateTime>("{\"__type\":\"DateTime\",\"Value\":\"2024-01-02T03:04:05Z\"}");
        Assert.AreEqual(2024, fromValue.Year);
        Assert.IsInstanceOfType(DevKitJson.Deserialize("{\"__type\":\"UnknownEnvelope\",\"x\":1}"), typeof(Dictionary<string, object>));
        Assert.ThrowsExactly<NotSupportedException>(() => DevKitJson.Deserialize("{\"__type\":\"RemoteExecutionContext\",\"SnapshotVersion\":2}"));
        Assert.ThrowsExactly<NotSupportedException>(() => DevKitJson.Deserialize("{\"__type\":\"RemoteExecutionContext\",\"SnapshotVersion\":\"1\"}"));
    }

    [TestMethod]
    public void Deserialize_ContextAdditionalPropertyValidation()
    {
        Assert.ThrowsExactly<InvalidOperationException>(() => DevKitJson.DeserializeContext7(
            "{\"__type\":\"RemoteExecutionContext\",\"SnapshotVersion\":1,\"AdditionalProperties\":[]}"));
        Assert.ThrowsExactly<InvalidOperationException>(() => DevKitJson.DeserializeContext7(
            "{\"__type\":\"RemoteExecutionContext\",\"SnapshotVersion\":1,\"MessageName\":\"Create\",\"AdditionalProperties\":{\"MessageName\":\"Update\"}}"));

        var parent = new RemoteExecutionContext { MessageName = "Update", Depth = 2 };
        var child = new RemoteExecutionContext { MessageName = "Create", ParentContext = parent };
        var withoutParent = DevKitJson.SerializeContextWithoutParentContext(child);
        Assert.IsFalse(withoutParent.Contains("ParentContext", StringComparison.Ordinal));
        var full = DevKitJson.SerializeContext(child);
        StringAssert.Contains(full, "\"pc\"");
    }

    [TestMethod]
    public void ReconstructSdkValues_MalformedAndOptionalShapes()
    {
        var emptyEntity = DevKitJson.Deserialize<Entity>("{\"__type\":\"Entity\",\"LogicalName\":\"account\"}");
        Assert.AreEqual("account", emptyEntity.LogicalName);
        Assert.ThrowsExactly<InvalidOperationException>(() => DevKitJson.Deserialize<Entity>("{\"__type\":\"Entity\",\"Attributes\":[]}"));
        Assert.ThrowsExactly<InvalidOperationException>(() => DevKitJson.Deserialize<EntityReference>("{\"__type\":\"EntityReference\",\"KeyAttributes\":[]}"));
        Assert.ThrowsExactly<InvalidOperationException>(() => DevKitJson.Deserialize<EntityCollection>("{\"__type\":\"EntityCollection\",\"Entities\":[1]}"));
        Assert.ThrowsExactly<InvalidOperationException>(() => DevKitJson.Deserialize<EntityImageCollection>("{\"__type\":\"EntityImageCollection\",\"Values\":{\"pre\":1}}"));

        var mixedOptions = DevKitJson.Deserialize<OptionSetValueCollection>(
            "{\"__type\":\"OptionSetValueCollection\",\"Values\":[1,{\"__type\":\"OptionSetValue\",\"Value\":2},null]}");
        Assert.AreEqual(3, mixedOptions.Count);
        Assert.AreEqual(2, mixedOptions[1].Value);
        Assert.IsNull(mixedOptions[2]);
        var parameterCollection = DevKitJson.Deserialize<ParameterCollection>("{\"__type\":\"ParameterCollection\",\"Values\":{}}");
        Assert.AreEqual(0, parameterCollection.Count);
        Assert.ThrowsExactly<InvalidOperationException>(() => DevKitJson.Deserialize<ParameterCollection>("{\"__type\":\"ParameterCollection\",\"Values\":[1]}"));
        Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("{\"__type\":\"ClrCollection\",\"Type\":\"System.Int32\",\"Items\":[]}"));
        Assert.IsInstanceOfType(DevKitJson.Deserialize("{\"__type\":\"not-real\"}"), typeof(Dictionary<string, object>));
    }

    [TestMethod]
    public void PrivateHelpers_CoverCollectionCoercionAndTypeGuards()
    {
        Assert.ThrowsExactly<InvalidOperationException>(() => Invoke("PopulateCollection", null, Array.Empty<object>()));
        Assert.ThrowsExactly<NotSupportedException>(() => Invoke("PopulateCollection", new NoAddCollection(), new object[] { 1 }));
        Assert.AreEqual(typeof(object), Invoke("GetElementType", typeof(PlainType)));
        Assert.AreEqual(typeof(int), Invoke("GetElementType", typeof(int[])));
        Assert.IsFalse((bool)Invoke("IsNumberType", typeof(string))!);
        Assert.IsTrue((bool)Invoke("IsNumberType", typeof(int))!);
        Assert.IsFalse((bool)Invoke("IsSdkType", (object?)null)!);
        Assert.IsFalse((bool)Invoke("IsSdkType", typeof(string))!);
        Assert.IsFalse((bool)Invoke("IsSafeValueType", typeof(HashSet<int>))!);
        Assert.IsTrue((bool)Invoke("IsSafeValueType", typeof(List<int>))!);
        Assert.ThrowsExactly<NotSupportedException>(() => Invoke("ResolveValueType", "UnsupportedType"));
        Assert.ThrowsExactly<NotSupportedException>(() => Invoke("ResolveValueType", "Nope<Int32>"));
        Assert.ThrowsExactly<NotSupportedException>(() => Invoke("ValueTypeName", typeof(HashSet<int>)));
        Assert.ThrowsExactly<NotSupportedException>(() => Invoke("CreateSdkInstance", typeof(IDisposable)));
        Assert.ThrowsExactly<NotSupportedException>(() => Invoke("ReadSdkObject", new Dictionary<string, object> { ["Type"] = "System.String" }));
        Assert.ThrowsExactly<FormatException>(() => Invoke("ParseNativeJsonObject", "[]"));
        Assert.ThrowsExactly<FormatException>(() => Invoke("ParseNativeJsonObject", "{} false"));
        Assert.ThrowsExactly<FormatException>(() => Invoke("WriteRawJson", new object(), new StringBuilder()));
    }

    [TestMethod]
    public void PrivateHelpers_ExtensionDataAndObjectPopulation()
    {
        const string extensionJson = "{\"future\":\"value\"}";
        string compressed;
        using (var output = new MemoryStream())
        {
            using (var compressor = new DeflateStream(output, CompressionMode.Compress, true))
                compressor.Write(Encoding.UTF8.GetBytes(extensionJson));
            compressed = "~DKJ1:" + Convert.ToBase64String(output.ToArray());
        }
        Assert.AreEqual(extensionJson, Invoke("DecodeExtensionData", compressed));
        Assert.IsNull(Invoke("DecodeExtensionData", (object?)null));
        Assert.AreEqual("plain", Invoke("DecodeExtensionData", "plain"));
        Assert.ThrowsExactly<FormatException>(() => Invoke("CopyKeyAttributes", new KeyAttributeCollection(), 1));
        Assert.AreEqual(0, Invoke("GetInt", new Dictionary<string, object>(), "missing"));
        Assert.AreEqual(false, Invoke("GetBool", new Dictionary<string, object> { ["b"] = "true" }, "b"));

        var target = new HasReadOnlyCollection();
        var input = new Dictionary<string, object> { ["Values"] = new List<object> { 4, 5 }, ["Number"] = null };
        Invoke("PopulateObject", target, input);
        CollectionAssert.AreEqual(new[] { 4, 5 }, target.Values);
        Assert.AreEqual(7, target.Number);
        Assert.IsFalse((bool)Invoke("TryGetDictValue", input, "missing", new object[1])!);
        Assert.IsTrue((bool)Invoke("TryGetDictValue", new Dictionary<string, object> { ["name"] = 1 }, "Name", new object[1])!);

        Assert.AreEqual(5, Invoke("CoerceValue", "5", typeof(int)));
        Assert.AreEqual(LocalChoice.Two, Invoke("CoerceValue", "Two", typeof(LocalChoice)));
        Assert.AreEqual(LocalChoice.Two, Invoke("CoerceValue", 2, typeof(LocalChoice)));
        Assert.AreEqual("5", Invoke("CoerceValue", 5, typeof(string)));
        Assert.AreEqual(Guid.Empty, Invoke("CoerceValue", Guid.Empty.ToString(), typeof(Guid)));
        Assert.AreEqual(DateTimeKind.Utc, ((DateTime)Invoke("CoerceValue", "2024-01-02T03:04:05Z", typeof(DateTime))!).Kind);
        Assert.IsNull(Invoke("CoerceValue", null, typeof(int)));
    }

    [TestMethod]
    public void Serialization_OptionalDataverseFieldsAndCompactTypes()
    {
        _ = DevKitJson.Deserialize<int>(" ");
        _ = DevKitJson.Serialize(float.NaN);
        _ = DevKitJson.SerializeCompact(new Entity("account")
        {
            ["list"] = new List<int> { 1, 2 },
            ["date"] = new DateTime(2025, 2, 3, 4, 5, 6, DateTimeKind.Utc)
        });
        _ = DevKitJson.Serialize(new Dictionary<string, string> { ["_t"] = "custom" });

        var entity = new Entity(null);
        entity.FormattedValues = null;
        typeof(Entity).GetField("_formattedValues", BindingFlags.NonPublic | BindingFlags.Instance)!.SetValue(entity, null);
        Assert.IsFalse(DevKitJson.Serialize(entity).Contains("FormattedValues", StringComparison.Ordinal));
        entity.FormattedValues = new FormattedValueCollection();
        entity.FormattedValues.Add("first", "one");
        entity.FormattedValues.Add("second", "two");
        _ = DevKitJson.Serialize(entity);
        _ = DevKitJson.Serialize(new EntityReference(null, Guid.NewGuid()));
        _ = DevKitJson.Serialize(new AliasedValue(null, null, null));
        _ = DevKitJson.Serialize(new BooleanManagedProperty(false));
        var entityCollection = new EntityCollection();
        entityCollection.Entities.Add(new Entity("account"));
        entityCollection.Entities.Add(new Entity("contact"));
        Assert.AreEqual(2, entityCollection.Entities.Count);
        StringAssert.Contains(DevKitJson.Serialize(entityCollection), "contact");

        var context = new RemoteExecutionContext { MessageName = "Create" };
        context.PreEntityImages["first"] = new Entity("account");
        context.PreEntityImages["second"] = new Entity("contact");
        context.InputParameters["SnapshotVersion"] = 1;
        context.InputParameters["_t"] = "anything";
        context.InputParameters["__type"] = "anything";
        _ = DevKitJson.SerializeContext(context);
        _ = DevKitJson.SerializeContext(DispatchProxy.Create<IReservedContext, ReservedContextProxy>());
    }

    [TestMethod]
    public void PrivateHelpers_CoverNativeBranchesAndCoercionShapes()
    {
        Assert.AreEqual(typeof(int[]), Invoke("ResolveValueType", "Int32[]"));
        Assert.AreEqual(typeof(List<int>), Invoke("ResolveValueType", "List<System.Int32>"));
        Assert.AreEqual(typeof(Dictionary<string, int>), Invoke("ResolveValueType", "Dictionary<System.String;System.Int32>"));
        Assert.AreEqual(typeof(KeyValuePair<string, int>), Invoke("ResolveValueType", "KeyValuePair<System.String;System.Int32>"));
        Assert.AreEqual(typeof(int?), Invoke("ResolveValueType", "Nullable<System.Int32>"));
        Assert.AreEqual(typeof(Dictionary<string, List<int>>), Invoke("ResolveValueType", "Dictionary<System.String;List<System.Int32>>"));
        Assert.ThrowsExactly<NotSupportedException>(() => Invoke("ResolveValueType", (object?)null));
        Assert.ThrowsExactly<NotSupportedException>(() => Invoke("ResolveValueType", ""));
        Assert.ThrowsExactly<NotSupportedException>(() => Invoke("ResolveValueType", "List<Int32"));
        Assert.AreEqual(typeof(Entity), Invoke("ResolveValueType", typeof(Entity).FullName));
        Assert.AreEqual("System.Int32[]", Invoke("ValueTypeName", typeof(int[])));
        Assert.IsFalse((bool)Invoke("IsNumberType", (object?)null)!);
        Assert.IsFalse((bool)Invoke("IsNumberType", typeof(LocalChoice))!);
        Assert.IsFalse((bool)Invoke("IsSafeValueType", typeof(List<NoProperties>))!);

        Assert.IsInstanceOfType(Invoke("CreateSdkInstance", typeof(List<int>)), typeof(List<int>));
        var oneAdd = new OneAddCollection();
        Invoke("PopulateCollection", oneAdd, new object[] { 4, 5 });
        CollectionAssert.AreEqual(new[] { 4, 5 }, oneAdd.Items);
        var twoAdd = new Dictionary<int, string>();
        Invoke("PopulateCollection", twoAdd, new object[]
        {
            new Dictionary<string, object> { ["Key"] = 1, ["Value"] = "one" },
            new KeyValuePair<int, string>(2, "two")
        });
        Assert.AreEqual("two", twoAdd[2]);

        var remote = new RemoteExecutionContext { MessageName = "Update", Depth = 4 };
        Assert.IsInstanceOfType(Invoke("CoerceValue", remote, typeof(IPluginExecutionContext7)), typeof(DevKitJson.ExecutionContextSnapshot));
        var entityData = new Dictionary<string, object>
        {
            ["__type"] = "Entity", ["LogicalName"] = "account", ["Id"] = Guid.Empty.ToString("D")
        };
        Assert.IsInstanceOfType(Invoke("CoerceValue", entityData, typeof(Entity)), typeof(Entity));
        Assert.IsInstanceOfType(Invoke("CoerceValue", new List<object> { 1, 2 }, typeof(IReadOnlyList<int>)), typeof(List<int>));
        Assert.IsInstanceOfType(Invoke("CoerceValue", new Dictionary<string, object> { ["a"] = 1 }, typeof(IDictionary<string, int>)), typeof(Dictionary<string, int>));
        Assert.ThrowsExactly<FormatException>(() => Invoke("CoerceValue", new Dictionary<string, object> { ["a"] = 1 }, typeof(Dictionary<int, int>)));
        Assert.AreEqual(5, Invoke("CoerceValue", new List<object> { 5 }, typeof(int[])) is int[] array ? array[0] : -1);

        var noSetter = new HasReadOnlyCollection();
        Invoke("PopulateObject", noSetter, new Dictionary<string, object> { ["Number"] = 9, ["Values"] = "not a collection" });
        var error = (InvalidOperationException)Invoke("CreateDeserializationException", typeof(int), null, null, new FormatException("bad"))!;
        StringAssert.Contains(error.Message, "<null>");
        StringAssert.Contains(error.Message, "<null>");

        var contextProperties = new Dictionary<string, object> { ["__type"] = "RemoteExecutionContext", ["Unknown"] = 1, ["MessageName"] = null };
        _ = Invoke("ReadNativeContextProperties", new RemoteExecutionContext(), contextProperties);
        Assert.AreEqual("{}", Invoke("SerializeRawJson", new Dictionary<string, object>()));
    }

    private sealed class OneAddCollection
    {
        public List<int> Items { get; } = new();
        public void Clear() => Items.Clear();
        public void Add(int value) => Items.Add(value);
    }

    private sealed class UnsafeGenericSdkCollection<TKey, TValue> : DataCollection<TKey, TValue> { }
    private sealed class ReadOnlyShapes
    {
        public int Scalar => 4;
        public List<int> Items { get; } = new();
    }
    public interface IReservedContext : IExecutionContext
    {
        string __type { get; }
        string _t { get; }
        int SnapshotVersion { get; }
    }
    public class ReservedContextProxy : DispatchProxy
    {
        protected override object? Invoke(MethodInfo? targetMethod, object?[]? args)
        {
            if (targetMethod!.Name == "get___type" || targetMethod.Name == "get__t") return "skip";
            if (targetMethod.Name == "get_SnapshotVersion") return 1;
            var type = targetMethod.ReturnType;
            if (type == typeof(ParameterCollection)) return new ParameterCollection();
            if (type == typeof(EntityImageCollection)) return new EntityImageCollection();
            return type.IsValueType ? Activator.CreateInstance(type) : null;
        }
    }

    [TestMethod]
    public void PrivateWriterAndSdkHelpers_CoverOtherwiseUnreachableBranches()
    {
        var writerField = typeof(DevKitJson).GetField("_writer", BindingFlags.NonPublic | BindingFlags.Static)!;
        var priorWriter = writerField.GetValue(null);
        var writerType = typeof(DevKitJson).GetNestedType("WriterState", BindingFlags.NonPublic)!;
        var writer = Activator.CreateInstance(writerType, nonPublic: true)!;
        writerType.GetField("Compact", BindingFlags.NonPublic | BindingFlags.Instance)!.SetValue(writer, true);
        writerType.GetField("PreserveTypes", BindingFlags.NonPublic | BindingFlags.Instance)!.SetValue(writer, true);
        writerField.SetValue(null, writer);
        try
        {
            var typedDate = new StringBuilder();
            Invoke("WriteTyped", "DateTime", "2024-01-02T03:04:05Z", typedDate);
            StringAssert.Contains(typedDate.ToString(), "\"_t\":\"DT\"");

            var safeGeneric = new StringBuilder();
            Invoke("WriteValueCore", new List<int> { 1 }, safeGeneric);
            StringAssert.Contains(safeGeneric.ToString(), "ClrCollection");
            var unsafeGeneric = new StringBuilder();
            Invoke("WriteValueCore", new HashSet<int> { 1 }, unsafeGeneric);
            Assert.AreEqual("[1]", unsafeGeneric.ToString());

            Assert.ThrowsExactly<NotSupportedException>(() => Invoke("WriteSdkObject", new UnsafeGenericSdkCollection<string, NoProperties>(), new StringBuilder()));
            _ = Invoke("IsSdkType", Assembly.Load("Microsoft.Crm.Sdk.Proxy").GetExportedTypes()[0]);
        }
        finally { writerField.SetValue(null, priorWriter); }

        Assert.ThrowsExactly<InvalidOperationException>(() => Invoke("CreateSdkInstance", typeof(Span<int>)));
    }

    [TestMethod]
    public void RemainingDecisionOutcomes_AreCoveredWithBoundaryInputs()
    {
        var emptyEntity = new Entity("account");
        _ = DevKitJson.Serialize(emptyEntity);
        var withTwoFormatted = new Entity("account");
        withTwoFormatted.FormattedValues.Add("a", "1");
        withTwoFormatted.FormattedValues.Add("b", "2");
        _ = DevKitJson.Serialize(withTwoFormatted);

        _ = DevKitJson.Deserialize<RemoteExecutionContext>("{\"__type\":\"RemoteExecutionContext\",\"SnapshotVersion\":1,\"MessageName\":\"Create\",\"Future\":1}");
        var extensionContext = DevKitJson.Deserialize<RemoteExecutionContext>("{\"__type\":\"RemoteExecutionContext\",\"SnapshotVersion\":1,\"AdditionalProperties\":{\"Future\":1}}");
        _ = DevKitJson.Serialize(extensionContext);
        Assert.AreEqual(0, DevKitJson.Deserialize<Entity>("{\"__type\":\"Entity\",\"Attributes\":null}").Attributes.Count);

        Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("{\"x\""));
        Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("{\"x\":1]"));
        Assert.AreEqual("/", DevKitJson.Deserialize<string>("\"\\/\""));
        Assert.AreEqual("\f", DevKitJson.Deserialize<string>("\"\\f\""));
        Assert.AreEqual("\b\r", DevKitJson.Deserialize<string>("\"\\b\\r\""));
        var allEscapesJson = "\"" + "\\\"" + "\\\\" + "\\/" + "\\b" + "\\f" + "\\n" + "\\r" + "\\t" + "\"";
        Assert.AreEqual("\"\\/\b\f\n\r\t", DevKitJson.Deserialize<string>(allEscapesJson));
        Assert.ThrowsExactly<FormatException>(() => DevKitJson.Deserialize("\"\\q\""));
        Assert.AreEqual("\uABCD", DevKitJson.Deserialize<string>("\"\\uABCD\""));
        Assert.AreEqual("\uABCD", DevKitJson.Deserialize<string>("\"\\uabcd\""));
        _ = DevKitJson.Deserialize("1.25e+2");
        _ = DevKitJson.DeserializeContext7("{\"__type\":\"RemoteExecutionContext\",\"SnapshotVersion\":1}");

        _ = Invoke("ReconstructOptionSetValueCollection", new Dictionary<string, object> { ["Values"] = "not a list" });
        _ = Invoke("ReconstructOptionSetValueCollection", new Dictionary<string, object>());
        _ = Invoke("ReconstructAliasedValue", new Dictionary<string, object>());
        _ = Invoke("ReconstructBooleanManagedProperty", new Dictionary<string, object> { ["Value"] = "true", ["CanBeChanged"] = 1 });
        _ = Invoke("ReconstructBooleanManagedProperty", new Dictionary<string, object> { ["Value"] = true, ["CanBeChanged"] = false });
        _ = Invoke("ReconstructBooleanManagedProperty", new Dictionary<string, object>());
        _ = Invoke("ReconstructEntityCollection", new Dictionary<string, object> { ["Entities"] = "not a list" });
        _ = Invoke("ReconstructEntityCollection", new Dictionary<string, object>());
        _ = Invoke("ReconstructParameterCollection", new Dictionary<string, object>());
        _ = Invoke("ReconstructParameterCollection", new Dictionary<string, object> { ["Values"] = "not a dictionary" });
        _ = Invoke("ReconstructEntityImageCollection", new Dictionary<string, object>());
        _ = Invoke("ReconstructEntityImageCollection", new Dictionary<string, object> { ["Values"] = "not a dictionary" });

        var contextData = new Dictionary<string, object>
        {
            ["InputParameters"] = new List<object> { new KeyValuePair<string, object>("x", 1) },
            ["MessageName"] = "Create"
        };
        _ = Invoke("ReconstructRemoteExecutionContext", contextData);
        _ = Invoke("ReconstructRemoteExecutionContext", new Dictionary<string, object> { ["InputParameters"] = 1 });

        var getter = typeof(ExplodingGetter).GetProperty(nameof(ExplodingGetter.Value))!;
        var readWriterField = typeof(DevKitJson).GetField("_writer", BindingFlags.NonPublic | BindingFlags.Static)!;
        var readWriter = readWriterField.GetValue(null);
        readWriterField.SetValue(null, Activator.CreateInstance(typeof(DevKitJson).GetNestedType("WriterState", BindingFlags.NonPublic)!, nonPublic: true));
        try { Assert.ThrowsExactly<InvalidOperationException>(() => Invoke("ReadProperty", getter, new object())); }
        finally { readWriterField.SetValue(null, readWriter); }

        foreach (var allowed in new[] { typeof(object), typeof(string), typeof(bool), typeof(char), typeof(Guid), typeof(DateTime),
            typeof(DateTimeOffset), typeof(TimeSpan), typeof(byte), typeof(sbyte), typeof(short), typeof(ushort), typeof(int),
            typeof(uint), typeof(long), typeof(ulong), typeof(float), typeof(double), typeof(decimal), typeof(Entity), typeof(int[]) })
            Assert.IsTrue((bool)Invoke("IsSafeValueType", allowed)!, allowed.FullName);
        _ = Invoke("ResolveValueType", typeof(Entity).FullName);
        Assert.ThrowsExactly<NotSupportedException>(() => Invoke("ResolveValueType", "Microsoft.Crm.Sdk.TypeThatDoesNotExist"));
        var proxyAssembly = Assembly.Load("Microsoft.Crm.Sdk.Proxy");
        var sdkProxyType = proxyAssembly.GetExportedTypes().FirstOrDefault(type => (bool)Invoke("IsSdkType", type)!);
        if (sdkProxyType != null) _ = Invoke("ResolveValueType", sdkProxyType.FullName);

        var writerField = typeof(DevKitJson).GetField("_writer", BindingFlags.NonPublic | BindingFlags.Static)!;
        var previous = writerField.GetValue(null);
        var writerType = typeof(DevKitJson).GetNestedType("WriterState", BindingFlags.NonPublic)!;
        var writer = Activator.CreateInstance(writerType, nonPublic: true)!;
        writerType.GetField("PreserveTypes", BindingFlags.NonPublic | BindingFlags.Instance)!.SetValue(writer, true);
        writerField.SetValue(null, writer);
        try
        {
            _ = Invoke("WriteSdkObject", new UnsafeGenericSdkCollection<string, int>(), new StringBuilder());
            _ = Invoke("WriteSdkObject", new List<object> { null, new KeyValuePair<int, int>(1, 2) }, new StringBuilder());
            _ = Invoke("WriteSdkObject", new ReadOnlyShapes(), new StringBuilder());
            foreach (var raw in new object[] { new List<object>(), new List<object> { "one" }, new List<object> { "one", "two" } })
                _ = Invoke("WriteRawJson", raw, new StringBuilder());
        }
        finally { writerField.SetValue(null, previous); }

        _ = Invoke("PopulateObject", new ReadOnlyShapes(), new Dictionary<string, object>
        {
            ["Items"] = new List<object> { 3 }, ["Scalar"] = 9
        });
        _ = Invoke("PopulateObject", new ReadOnlyShapes(), new Dictionary<string, object> { ["Items"] = "skip" });
        Assert.IsTrue((bool)Invoke("GetBool", new Dictionary<string, object> { ["v"] = true }, "v")!);
        Assert.IsFalse((bool)Invoke("GetBool", new Dictionary<string, object>(), "missing")!);
        _ = Invoke("CoerceValue", new Dictionary<string, object> { ["a"] = 1 }, typeof(IReadOnlyDictionary<string, int>));
        _ = Invoke("CoerceValue", new Dictionary<string, object> { ["a"] = 1 }, typeof(string));
        _ = Invoke("CoerceValue", new Dictionary<string, object> { ["a"] = 1 }, typeof(object));
        Assert.IsInstanceOfType(Invoke("CoerceValue", new Dictionary<string, object> { ["Value"] = 1 }, typeof(NoProperties)), typeof(NoProperties));
        Assert.ThrowsExactly<NotSupportedException>(() => Invoke("CoerceValue", new Dictionary<string, object> { ["a"] = 1 }, typeof(NoAddCollection)));
        Assert.ThrowsExactly<InvalidCastException>(() => Invoke("CoerceValue", new Dictionary<string, object> { ["a"] = 1 }, typeof(int)));
        _ = Invoke("CoerceValue", new List<object> { new Entity("account") }, typeof(DataCollection<Entity>));
    }

    private sealed class ExplodingGetter
    {
        public int Value => throw new InvalidOperationException("exploded");
    }
}
