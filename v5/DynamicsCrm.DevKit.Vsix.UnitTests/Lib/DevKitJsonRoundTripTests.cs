using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;

namespace DynamicsCrm.DevKit.UnitTests.Lib
{
    // Also link-compiled by the CLI suite to exercise the same contracts on .NET 10.
    [TestClass]
    public class DevKitJsonRoundTripTests
    {
        private static string Save(object value, bool compact)
        {
            var json = compact ? DevKitJson.SerializeCompact(value) : DevKitJson.Serialize(value);
            using (var reader = JsonReaderWriterFactory.CreateJsonReader(Encoding.UTF8.GetBytes(json), XmlDictionaryReaderQuotas.Max))
                while (reader.Read()) { }
            return json;
        }

        private static TestContext7 Context()
        {
            var context = new TestContext7();
            foreach (var property in typeof(TestContext7).GetProperties())
            {
                if (property.PropertyType == typeof(Guid)) property.SetValue(context, Guid.NewGuid());
                else if (property.PropertyType == typeof(Guid?)) property.SetValue(context, (Guid?)Guid.NewGuid());
                else if (property.PropertyType == typeof(string)) property.SetValue(context, property.Name + "-value");
                else if (property.PropertyType == typeof(int)) property.SetValue(context, 23);
                else if (property.PropertyType == typeof(bool)) property.SetValue(context, true);
            }
            context.MessageName = "UpdateMultiple";
            context.Stage = 20;
            context.OperationCreatedOn = new DateTime(2026, 11, 10, 8, 9, 10, DateTimeKind.Utc).AddTicks(1234567);
            context.InputParameters = new ParameterCollection();
            context.OutputParameters = new ParameterCollection { { "Ids", new[] { Guid.NewGuid() } } };
            context.SharedVariables = new ParameterCollection { { "SmallLong", 1L } };
            context.PreEntityImages = new EntityImageCollection { { "before", new Entity("account") { ["name"] = "old" } } };
            context.PostEntityImages = new EntityImageCollection { { "after", new Entity("account") { ["name"] = "new" } } };
            context.PreEntityImagesCollection = new[] { context.PreEntityImages, new EntityImageCollection() };
            context.PostEntityImagesCollection = new[] { new EntityImageCollection(), context.PostEntityImages };
            context.OwningExtension = new EntityReference("sdkmessageprocessingstep", Guid.NewGuid());
            context.InputParameters["Targets"] = new EntityCollection(new[] { new Entity("account", Guid.NewGuid()), new Entity("account", Guid.NewGuid()) });
            return context;
        }

        [TestMethod]
        [DataRow(false)]
        [DataRow(true)]
        public void Context7_AllContractPropertiesAndParent_RoundTrip(bool compact)
        {
            var original = Context();
            original.ParentContext = Context();
            var json = Save(original, compact);
            var restored = DevKitJson.DeserializeContext7(json);
            AssertContext(original, restored);
            AssertContext((TestContext7)original.ParentContext, (DevKitJson.ExecutionContextSnapshot)restored.ParentContext);
            Assert.IsInstanceOfType<IPluginExecutionContext2>(restored);
            Assert.IsInstanceOfType<IPluginExecutionContext3>(restored);
            Assert.IsInstanceOfType<IPluginExecutionContext4>(restored);
            Assert.IsInstanceOfType<IPluginExecutionContext5>(restored);
            Assert.IsInstanceOfType<IPluginExecutionContext6>(restored);
            Assert.IsInstanceOfType<IPluginExecutionContext7>(restored);
            AssertContext(original, (DevKitJson.ExecutionContextSnapshot)DevKitJson.Deserialize<IPluginExecutionContext7>(json));
            AssertContext(original, DevKitJson.DeserializeContext7(Save(restored, compact)));
        }

        [TestMethod]
        public void TraceFallback_OmitsOnlyParentContext_AndRemainingContextRoundTrips()
        {
            var original = Context();
            original.ParentContext = Context();

            var complete = DevKitJson.SerializeContext(original);
            var traceFallback = DevKitJson.SerializeContextWithoutParentContext(original);

            StringAssert.Contains(complete, "\"pc\":");
            Assert.IsFalse(traceFallback.Contains("\"pc\":"));
            var restored = DevKitJson.DeserializeContext7(traceFallback);
            Assert.IsNull(restored.ParentContext);
            Assert.AreEqual(original.MessageName, restored.MessageName);
            Assert.AreEqual(original.UserId, restored.UserId);
            Assert.AreEqual(original.IsApplicationUser, restored.IsApplicationUser);
            Assert.AreEqual(original.InitiatingUserAgent, restored.InitiatingUserAgent);
            Assert.AreEqual(2, ((EntityCollection)restored.InputParameters["Targets"]).Entities.Count);
            Assert.AreEqual("new", restored.PostEntityImages["after"]["name"]);
            Assert.AreEqual("old", restored.PreEntityImages["before"]["name"]);
        }

        private static void AssertContext(TestContext7 expected, DevKitJson.ExecutionContextSnapshot actual)
        {
            foreach (var prop in typeof(TestContext7).GetProperties())
            {
                Assert.IsTrue(actual.HasProperty(prop.Name), prop.Name);
                if (prop.PropertyType.IsValueType || prop.PropertyType == typeof(string))
                    Assert.AreEqual(prop.GetValue(expected), actual.GetType().GetProperty(prop.Name).GetValue(actual), prop.Name);
            }
            Assert.AreEqual(expected.OwningExtension.Id, actual.OwningExtension.Id);
            Assert.AreEqual(2, ((EntityCollection)actual.InputParameters["Targets"]).Entities.Count);
            Assert.AreEqual(((EntityCollection)expected.InputParameters["Targets"])[1].Id, ((EntityCollection)actual.InputParameters["Targets"])[1].Id);
            CollectionAssert.AreEqual((Guid[])expected.OutputParameters["Ids"], (Guid[])actual.OutputParameters["Ids"]);
            Assert.AreEqual(1L, actual.SharedVariables["SmallLong"]);
            Assert.AreEqual("old", actual.PreEntityImages["before"]["name"]);
            Assert.AreEqual("new", actual.PostEntityImages["after"]["name"]);
            Assert.AreEqual(2, actual.PreEntityImagesCollection.Length);
            Assert.AreEqual(2, actual.PostEntityImagesCollection.Length);
            Assert.AreEqual("old", actual.PreEntityImagesCollection[0]["before"]["name"]);
            Assert.AreEqual(0, actual.PreEntityImagesCollection[1].Count);
            Assert.AreEqual(0, actual.PostEntityImagesCollection[0].Count);
            Assert.AreEqual("new", actual.PostEntityImagesCollection[1]["after"]["name"]);
        }

        [TestMethod]
        [DataRow(false)]
        [DataRow(true)]
        public void RemoteContext_KeepsAvailableAndUnknownFieldsAcrossReserialization(bool compact)
        {
            var source = Context();
            source.ParentContext = Context();
            var remote = DevKitJson.Deserialize<RemoteExecutionContext>(Save(source, compact));
            Assert.AreEqual(source.UserAzureActiveDirectoryObjectId, remote.UserAzureActiveDirectoryObjectId);
            Assert.AreEqual(source.InitiatingUserAzureActiveDirectoryObjectId, remote.InitiatingUserAzureActiveDirectoryObjectId);
            Assert.AreEqual(source.InitiatingUserAgent, remote.InitiatingUserAgent);
            Assert.AreEqual(1, remote.InputParameters.Count);
            var restored = DevKitJson.DeserializeContext7(Save(remote, compact));
            AssertContext(source, restored);
            AssertContext((TestContext7)source.ParentContext, (DevKitJson.ExecutionContextSnapshot)restored.ParentContext);
        }

        [TestMethod]
        public void ContextSnapshot_DistinguishesMissingNullAndFalse()
        {
            var context = DevKitJson.DeserializeContext7("{\"__type\":\"RemoteExecutionContext\",\"IsApplicationUser\":false,\"InitiatingUserAgent\":null,\"Future\":{\"hello\":\"world\"}}");
            Assert.IsTrue(context.HasProperty("IsApplicationUser"));
            Assert.IsFalse(context.IsApplicationUser);
            Assert.IsTrue(context.HasProperty("InitiatingUserAgent"));
            Assert.IsNull(context.InitiatingUserAgent);
            Assert.IsFalse(context.HasProperty("TenantId"));
            Assert.AreEqual(Guid.Empty, context.TenantId);
            var again = DevKitJson.DeserializeContext7(Save(context, true));
            Assert.IsFalse(again.HasProperty("TenantId"));
            Assert.AreEqual("world", ((Dictionary<string, object>)again.Properties["Future"])["hello"]);
        }

        [TestMethod]
        public void ExplicitInterfaceProperty_IsCapturedFromContract()
        {
            var context = new ExplicitContext7 { MessageName = "public-value" };
            Assert.AreEqual("interface-value", DevKitJson.DeserializeContext7(Save(context, false)).MessageName);
        }

        [TestMethod]
        [DataRow(false)]
        [DataRow(true)]
        public void BoxedNumbersAndArrays_PreserveRuntimeTypeAndExactValue(bool compact)
        {
            var values = new object[] { 1L, 1d, Math.PI, 1f, 1.2345678f, 1234567890.123456789m, (byte)1,
                (sbyte)-1, (short)-2, (ushort)2, uint.MaxValue, ulong.MaxValue, double.NaN, double.PositiveInfinity,
                float.NegativeInfinity, new DateTimeOffset(2026, 11, 10, 12, 0, 0, TimeSpan.FromHours(7)), TimeSpan.FromTicks(1234567) };
            var parameters = new ParameterCollection();
            for (var i = 0; i < values.Length; i++) parameters[i.ToString()] = values[i];
            parameters["Money"] = new Money(999999999999.9999m);
            parameters["Ids"] = new[] { Guid.NewGuid(), Guid.NewGuid() };
            parameters["Names"] = new[] { "a", null, "b" };
            parameters["Entities"] = new[] { new Entity("account"), null };
            var restored = DevKitJson.Deserialize<ParameterCollection>(Save(parameters, compact));
            for (var i = 0; i < values.Length; i++)
            {
                Assert.AreEqual(values[i].GetType(), restored[i.ToString()].GetType());
                Assert.AreEqual(values[i], restored[i.ToString()]);
            }
            Assert.AreEqual(999999999999.9999m, ((Money)restored["Money"]).Value);
            CollectionAssert.AreEqual((Guid[])parameters["Ids"], (Guid[])restored["Ids"]);
            CollectionAssert.AreEqual((string[])parameters["Names"], (string[])restored["Names"]);
            Assert.IsInstanceOfType<Entity[]>(restored["Entities"]);
            Assert.IsNull(((Entity[])restored["Entities"])[1]);
        }

        [TestMethod]
        [DataRow(DateTimeKind.Utc)]
        [DataRow(DateTimeKind.Local)]
        [DataRow(DateTimeKind.Unspecified)]
        public void DateTime_PreservesTicksAndKind(DateTimeKind kind)
        {
            var value = new DateTime(2026, 11, 10, 12, 34, 56, kind).AddTicks(1234567);
            foreach (var compact in new[] { false, true })
            {
                var restored = DevKitJson.Deserialize<DateTime>(Save(value, compact));
                Assert.AreEqual(value.Ticks, restored.Ticks);
                Assert.AreEqual(value.Kind, restored.Kind);
            }
        }

        [TestMethod]
        public void Decimal_FromPlainJson_DoesNotPassThroughDouble()
        {
            const decimal value = 1234567890.123456789m;
            Assert.AreEqual(value, DevKitJson.Deserialize<decimal>("1234567890.123456789"));
            Assert.AreEqual(value, DevKitJson.Deserialize<DecimalDto>("{\"Amount\":1234567890.123456789}").Amount);
            Assert.AreEqual(value, DevKitJson.Deserialize<List<decimal>>("[1234567890.123456789]")[0]);
            Assert.AreEqual(value, DevKitJson.Deserialize<Dictionary<string, decimal>>("{\"amount\":1234567890.123456789}")["amount"]);
        }

        [TestMethod]
        [DataRow(false)]
        [DataRow(true)]
        public void EntityAndCollectionMetadata_AlternateKeysRelatedEntitiesAndPaging_RoundTrip(bool compact)
        {
            var original = new Entity("account", new KeyAttributeCollection { { "accountnumber", "ABC" } })
            {
                RowVersion = "123", EntityState = EntityState.Changed,
                ["amount"] = 1234567890.123456789m,
                ["reference"] = new EntityReference("contact", new KeyAttributeCollection { { "emailaddress1", "a@example.test" } }) { RowVersion = "456" }
            };
            original.RelatedEntities.Add(new Relationship("account_contacts") { PrimaryEntityRole = EntityRole.Referenced },
                new EntityCollection(new[] { new Entity("contact") { ["firstname"] = "Ada" } }));
            original.FormattedValues.Add("amount", "formatted");
            var source = new EntityCollection(new[] { original })
            {
                EntityName = "account", MoreRecords = true, PagingCookie = "<cookie page=\"1\" />",
                TotalRecordCount = 23, TotalRecordCountLimitExceeded = true, MinActiveRowVersion = "789"
            };
            var restored = DevKitJson.Deserialize<EntityCollection>(Save(source, compact));
            Assert.IsTrue(restored.MoreRecords);
            Assert.IsTrue(restored.TotalRecordCountLimitExceeded);
            Assert.AreEqual(23, restored.TotalRecordCount);
            Assert.AreEqual(source.PagingCookie, restored.PagingCookie);
            Assert.AreEqual("789", restored.MinActiveRowVersion);
            var entity = restored[0];
            Assert.AreEqual("ABC", entity.KeyAttributes["accountnumber"]);
            Assert.AreEqual("123", entity.RowVersion);
            Assert.AreEqual(EntityState.Changed, entity.EntityState);
            Assert.AreEqual(1234567890.123456789m, entity.GetAttributeValue<decimal>("amount"));
            Assert.AreEqual("formatted", entity.FormattedValues["amount"]);
            var reference = entity.GetAttributeValue<EntityReference>("reference");
            Assert.AreEqual("456", reference.RowVersion);
            Assert.AreEqual("a@example.test", reference.KeyAttributes["emailaddress1"]);
            var related = entity.RelatedEntities.Single();
            Assert.AreEqual("account_contacts", related.Key.SchemaName);
            Assert.AreEqual(EntityRole.Referenced, related.Key.PrimaryEntityRole);
            Assert.AreEqual("Ada", related.Value[0]["firstname"]);
        }

        [TestMethod]
        [DataRow(false)]
        [DataRow(true)]
        public void EntityReferenceWithoutName_UsesDataversePlaceholderOnDeserialize(bool compact)
        {
            var unnamed = new EntityReference("contact", Guid.NewGuid());
            var restoredUnnamed = DevKitJson.Deserialize<EntityReference>(Save(unnamed, compact));
            Assert.AreEqual("(No Name)", restoredUnnamed.Name);
            Assert.AreEqual(unnamed.Id, restoredUnnamed.Id);
            Assert.AreEqual(unnamed.LogicalName, restoredUnnamed.LogicalName);

            var named = new EntityReference("contact", Guid.NewGuid()) { Name = "Ada Lovelace" };
            Assert.AreEqual("Ada Lovelace", DevKitJson.Deserialize<EntityReference>(Save(named, compact)).Name);
        }

        [TestMethod]
        [DataRow(false)]
        [DataRow(true)]
        public void QueryRelationshipAndRequests_RestoreSdkTypesAndReadonlyCollections(bool compact)
        {
            var query = new QueryExpression("account") { ColumnSet = new ColumnSet("name", "revenue"), TopCount = 7 };
            query.Criteria.AddCondition("revenue", ConditionOperator.GreaterThan, 1234567890.123456789m);
            query.Criteria.AddCondition("versionnumber", ConditionOperator.Equal, 1L);
            query.Orders.Add(new OrderExpression("name", OrderType.Descending));
            query.AddLink("contact", "primarycontactid", "contactid", JoinOperator.LeftOuter).EntityAlias = "primary";
            var request = new UpdateRequest { Target = new Entity("account", Guid.NewGuid()) { ["name"] = "new" }, ConcurrencyBehavior = ConcurrencyBehavior.IfRowVersionMatches };
            request.Target.RowVersion = "123";
            var relationship = new Relationship("account_contacts") { PrimaryEntityRole = EntityRole.Referenced };
            var parameters = new ParameterCollection
            {
                { "Query", query }, { "Relationship", relationship },
                { "RelatedEntities", new EntityReferenceCollection { new EntityReference("contact", Guid.NewGuid()) } },
                { "Request", request }
            };
            var restored = DevKitJson.Deserialize<ParameterCollection>(Save(parameters, compact));
            var restoredQuery = (QueryExpression)restored["Query"];
            CollectionAssert.AreEqual(query.ColumnSet.Columns.ToArray(), restoredQuery.ColumnSet.Columns.ToArray());
            Assert.AreEqual(7, restoredQuery.TopCount);
            Assert.AreEqual(1234567890.123456789m, restoredQuery.Criteria.Conditions[0].Values[0]);
            Assert.AreEqual(1L, restoredQuery.Criteria.Conditions[1].Values[0]);
            Assert.AreEqual(OrderType.Descending, restoredQuery.Orders[0].OrderType);
            Assert.AreEqual(JoinOperator.LeftOuter, restoredQuery.LinkEntities[0].JoinOperator);
            Assert.AreEqual("primary", restoredQuery.LinkEntities[0].EntityAlias);
            Assert.AreEqual(EntityRole.Referenced, ((Relationship)restored["Relationship"]).PrimaryEntityRole);
            Assert.IsInstanceOfType<EntityReferenceCollection>(restored["RelatedEntities"]);
            var restoredRequest = (UpdateRequest)restored["Request"];
            Assert.AreEqual(request.Target.Id, restoredRequest.Target.Id);
            Assert.AreEqual("123", restoredRequest.Target.RowVersion);
            Assert.AreEqual("new", restoredRequest.Target["name"]);
            Assert.AreEqual(ConcurrencyBehavior.IfRowVersionMatches, restoredRequest.ConcurrencyBehavior);
        }

        [TestMethod]
        [DataRow(false)]
        [DataRow(true)]
        public void ReservedTypeKeys_InUserDictionariesAndAttributeNames_AreData(bool compact)
        {
            var data = new Dictionary<string, object> { { "_t", "M" }, { "v", 12 }, { "keep", "hello" } };
            var round = DevKitJson.Deserialize<Dictionary<string, object>>(Save(data, compact));
            Assert.AreEqual("M", round["_t"]);
            Assert.AreEqual("hello", round["keep"]);
            var entity = new Entity("account") { ["_t"] = "M", ["v"] = 12, ["nested"] = data };
            var restored = DevKitJson.Deserialize<Entity>(Save(entity, compact));
            Assert.AreEqual(3, restored.Attributes.Count);
            Assert.AreEqual("M", restored["_t"]);
            Assert.AreEqual("hello", ((Dictionary<string, object>)restored["nested"])["keep"]);
            var full = new Dictionary<string, string> { { "__type", "Money" }, { "Value", "hello" } };
            Assert.AreEqual("hello", DevKitJson.Deserialize<Dictionary<string, string>>(Save(full, compact))["Value"]);
        }

        [TestMethod]
        [DataRow(false)]
        [DataRow(true)]
        public void TypedListsDictionariesAndPairs_InParameters_RoundTrip(bool compact)
        {
            var parameters = new ParameterCollection
            {
                { "Names", new List<string> { "a", null, "b" } },
                { "Decimals", new List<decimal> { 1234567890.123456789m } },
                { "Nested", new List<List<Guid>> { new List<Guid> { Guid.NewGuid() } } },
                { "Map", new Dictionary<int, string> { { 1, "one" } } },
                { "ChangedEntityTypes", new List<KeyValuePair<string, string>> { new KeyValuePair<string, string>("account", "Update") } },
                { "Lists", new[] { new List<string> { "one" } } },
                { "Nullable", new List<int?> { 1, null } },
                { "Char", 'x' }
            };
            var restored = DevKitJson.Deserialize<ParameterCollection>(Save(parameters, compact));
            CollectionAssert.AreEqual((List<string>)parameters["Names"], (List<string>)restored["Names"]);
            Assert.AreEqual(1234567890.123456789m, ((List<decimal>)restored["Decimals"])[0]);
            Assert.AreEqual(((List<List<Guid>>)parameters["Nested"])[0][0], ((List<List<Guid>>)restored["Nested"])[0][0]);
            Assert.AreEqual("one", ((Dictionary<int, string>)restored["Map"])[1]);
            var pair = ((List<KeyValuePair<string, string>>)restored["ChangedEntityTypes"])[0];
            Assert.AreEqual("account", pair.Key);
            Assert.AreEqual("Update", pair.Value);
            Assert.AreEqual("one", ((List<string>[])restored["Lists"])[0][0]);
            Assert.IsNull(((List<int?>)restored["Nullable"])[1]);
            Assert.AreEqual('x', restored["Char"]);
        }

        [TestMethod]
        public void ContextExtraProperties_KeepNamesThatCollideWithCompactKeys()
        {
            var context = DevKitJson.DeserializeContext7("{\"__type\":\"RemoteExecutionContext\",\"MessageName\":\"Update\",\"mn\":\"extra\",\"v\":\"value\"}");
            var restored = DevKitJson.DeserializeContext7(Save(context, true));
            Assert.AreEqual("Update", restored.MessageName);
            Assert.AreEqual("extra", restored.Properties["mn"]);
            Assert.AreEqual("value", restored.Properties["v"]);
        }

        [TestMethod]
        public void UnknownSnapshotVersion_IsRejected()
        {
            Assert.IsFalse(DevKitJson.TryDeserialize<IPluginExecutionContext7>("{\"__type\":\"RemoteExecutionContext\",\"SnapshotVersion\":99}", out _));
            Assert.IsFalse(DevKitJson.TryDeserialize<IPluginExecutionContext7>("{\"__type\":\"RemoteExecutionContext\",\"SnapshotVersion\":1.4}", out _));
        }

        [TestMethod]
        public void NullCollectionEntries_ArePreserved()
        {
            var parameters = new ParameterCollection
            {
                { "Entities", new EntityCollection(new Entity[] { null, new Entity("account") }) },
                { "Images", new EntityImageCollection { { "missing", null } } },
                { "Options", new OptionSetValueCollection { null, new OptionSetValue(1) } }
            };
            var restored = DevKitJson.Deserialize<ParameterCollection>(Save(parameters, true));
            Assert.AreEqual(2, ((EntityCollection)restored["Entities"]).Entities.Count);
            Assert.IsNull(((EntityCollection)restored["Entities"])[0]);
            Assert.IsTrue(((EntityImageCollection)restored["Images"]).Contains("missing"));
            Assert.IsNull(((EntityImageCollection)restored["Images"])["missing"]);
            Assert.IsNull(((OptionSetValueCollection)restored["Options"])[0]);
        }

        [TestMethod]
        [DataRow("{")]
        [DataRow("{\"x\":1")]
        [DataRow("{\"x\" 1}")]
        [DataRow("{,\"x\":1,}")]
        [DataRow("[1 2]")]
        [DataRow("[1,]")]
        [DataRow("\"abc")]
        [DataRow("\"a\\q\"")]
        [DataRow("\"\\uZZZZ\"")]
        [DataRow("01")]
        [DataRow("1.")]
        [DataRow("1e+")]
        [DataRow("[1e9999]")]
        public void InvalidOrTruncatedJson_IsRejected(string json)
        {
            Assert.IsFalse(DevKitJson.TryDeserialize<object>(json, out _));
        }

        [TestMethod]
        public void TruncatedContext_IsRejected()
        {
            var json = Save(Context(), false);
            Assert.IsFalse(DevKitJson.TryDeserialize<RemoteExecutionContext>(json.Substring(0, json.Length - 1), out _));
            Assert.IsFalse(DevKitJson.TryDeserialize<IPluginExecutionContext7>(json.Substring(0, json.Length - 1), out _));
        }

        [TestMethod]
        public void ControlCharactersAndSurrogates_EscapeAndRoundTrip()
        {
            var value = string.Concat(Enumerable.Range(0, 32).Select(i => (char)i)) + "\U0001F600\uD800";
            var json = DevKitJson.Serialize(value);
            Assert.IsFalse(json.Any(c => c < 32));
            Assert.AreEqual(value, DevKitJson.Deserialize<string>(json));
            var dictionary = new Dictionary<string, string> { { "null", null } };
            Assert.IsNull(DevKitJson.Deserialize<Dictionary<string, string>>(Save(dictionary, false))["null"]);
        }

        [TestMethod]
        public void GetterFailureAndCycles_ReportFailureWithoutPoisoningNextCall()
        {
            var error = Assert.ThrowsExactly<InvalidOperationException>(() => DevKitJson.SerializeCompact(new ThrowingDto()));
            StringAssert.Contains(error.Message, "$.Broken");
            var entity = new Entity("account");
            entity["cycle"] = entity;
            error = Assert.ThrowsExactly<InvalidOperationException>(() => DevKitJson.Serialize(entity));
            StringAssert.Contains(error.Message, "$.cycle");
            var context = Context();
            context.ParentContext = context;
            Assert.ThrowsExactly<InvalidOperationException>(() => DevKitJson.SerializeContext(context));
            StringAssert.Contains(Save(new Money(1), false), "\"__type\":\"Money\"");
        }

        [TestMethod]
        public void MaximumDepth_IsBoundedForReadAndWrite()
        {
            Assert.IsFalse(DevKitJson.TryDeserialize<object>(new string('[', 256) + "0" + new string(']', 256), out _));
            object value = 0;
            for (var i = 0; i < 256; i++) value = new List<object> { value };
            Assert.ThrowsExactly<InvalidOperationException>(() => DevKitJson.Serialize(value));
        }

        [TestMethod]
        public void CompactMode_IsReentrantAndThreadIsolated()
        {
            Parallel.For(0, 32, i =>
            {
                var json = Save(new ReentrantDto(), i % 2 == 0);
                StringAssert.Contains(json, i % 2 == 0 ? "\"_t\":\"M\"" : "\"__type\":\"Money\"");
            });
        }

        [TestMethod]
        [DataRow(false)]
        [DataRow(true)]
        public void NativeMicrosoftContextJson_IsAccepted(bool isoDates)
        {
            var source = new RemoteExecutionContext
            {
                MessageName = "Update", BusinessUnitId = Guid.NewGuid(), UserId = Guid.NewGuid(),
                OperationCreatedOn = new DateTime(2026, 11, 10, 12, 0, 0, DateTimeKind.Utc),
                InitiatingUserAgent = "native-agent", ParentContext = new RemoteExecutionContext
                { MessageName = "Create", OperationCreatedOn = new DateTime(2026, 11, 10, 11, 0, 0, DateTimeKind.Utc) }
            };
            source.InputParameters["Target"] = new Entity("account", Guid.NewGuid()) { ["name"] = "native" };
            var settings = new DataContractJsonSerializerSettings();
            if (isoDates) settings.DateTimeFormat = new DateTimeFormat("yyyy-MM-dd'T'HH:mm:ss.FFFFFFFK");
            string json;
            using (var stream = new MemoryStream())
            {
                new DataContractJsonSerializer(typeof(RemoteExecutionContext), settings).WriteObject(stream, source);
                json = Encoding.UTF8.GetString(stream.ToArray());
            }
            var restored = DevKitJson.DeserializeContext7(json);
            Assert.AreEqual(source.OperationCreatedOn, restored.OperationCreatedOn);
            Assert.AreEqual(source.UserId, restored.UserId);
            Assert.AreEqual("native-agent", restored.InitiatingUserAgent);
            Assert.AreEqual("native", ((Entity)restored.InputParameters["Target"])["name"]);
            Assert.AreEqual("Create", restored.ParentContext.MessageName);
            Assert.AreEqual(1, DevKitJson.Deserialize<RemoteExecutionContext>(json).InputParameters.Count);
        }

        [TestMethod]
        public void NativeExtensionData_AndManagedPropertyLogicalName_AreRetained()
        {
            var futureValue = new string('x', 512);
            var native = "{\"FutureProperty\":\"" + futureValue + "\",\"MessageName\":\"Update\",\"BusinessUnitId\":\"00000000-0000-0000-0000-000000000000\"}";
            var source = DevKitJson.Deserialize<RemoteExecutionContext>(native);
            Assert.IsNotNull(source.ExtensionData);
            var compactJson = Save(source, true);
            StringAssert.Contains(compactJson, "FutureProperty");
            Assert.IsFalse(compactJson.Contains("~DKJ1:"));
            var restored = DevKitJson.Deserialize<RemoteExecutionContext>(compactJson);
            using (var stream = new MemoryStream())
            {
                new DataContractJsonSerializer(typeof(RemoteExecutionContext), new DataContractJsonSerializerSettings
                { DateTimeFormat = new DateTimeFormat("yyyy-MM-dd'T'HH:mm:ss.FFFFFFFK") }).WriteObject(stream, restored);
                StringAssert.Contains(Encoding.UTF8.GetString(stream.ToArray()), futureValue);
            }
            var managed = DevKitJson.Deserialize<BooleanManagedProperty>("{\"__type\":\"BooleanManagedProperty\",\"Value\":true,\"CanBeChanged\":false,\"ManagedPropertyLogicalName\":\"logical\"}");
            Assert.AreEqual("logical", managed.ManagedPropertyLogicalName);
            Assert.AreEqual("logical", DevKitJson.Deserialize<BooleanManagedProperty>(Save(managed, true)).ManagedPropertyLogicalName);
        }

        [TestMethod]
        public void NativeContext_RecoversV2ToV7FieldsMissingFromRemoteSdkContract()
        {
            const string id = "11111111-2222-3333-4444-555555555555";
            var native = "{\"BusinessUnitId\":\"" + id + "\",\"MessageName\":\"UpdateMultiple\",\"InputParameters\":[]," +
                "\"EnvironmentId\":\"environment\",\"TenantId\":\"" + id + "\",\"IsApplicationUser\":true," +
                "\"InitiatingUserApplicationId\":\"" + id + "\",\"AuthenticatedUserId\":\"" + id + "\"," +
                "\"IsPortalsClientCall\":true,\"PortalsContactId\":\"" + id + "\",\"FutureNull\":null," +
                "\"PreEntityImagesCollection\":[[{\"key\":\"before\",\"value\":{\"__type\":\"Entity:http://schemas.microsoft.com/xrm/2011/Contracts\"," +
                "\"LogicalName\":\"account\",\"Id\":\"" + id + "\",\"Attributes\":[{\"key\":\"name\",\"value\":\"old\"}]}}]]," +
                "\"PostEntityImagesCollection\":[[]],\"ParentContext\":{\"BusinessUnitId\":\"" + id + "\",\"MessageName\":\"Update\",\"IsApplicationUser\":true}}";
            var snapshot = DevKitJson.DeserializeContext7(native);
            Assert.IsFalse(snapshot.HasProperty("OperationCreatedOn"));
            Assert.IsTrue(snapshot.HasProperty("FutureNull"));
            Assert.IsNull(snapshot.Properties["FutureNull"]);
            Assert.AreEqual("environment", snapshot.EnvironmentId);
            Assert.AreEqual(Guid.Parse(id), snapshot.TenantId);
            Assert.AreEqual(Guid.Parse(id), snapshot.InitiatingUserApplicationId);
            Assert.AreEqual(Guid.Parse(id), snapshot.AuthenticatedUserId);
            Assert.AreEqual(Guid.Parse(id), snapshot.PortalsContactId);
            Assert.IsTrue(snapshot.IsPortalsClientCall);
            Assert.IsTrue(snapshot.IsApplicationUser);
            Assert.AreEqual("old", snapshot.PreEntityImagesCollection[0]["before"]["name"]);
            Assert.AreEqual(0, snapshot.PostEntityImagesCollection[0].Count);
            Assert.IsTrue(((IPluginExecutionContext7)snapshot.ParentContext).IsApplicationUser);
            var projected = DevKitJson.Deserialize<RemoteExecutionContext>(native);
            var restored = DevKitJson.DeserializeContext7(Save(projected, true));
            Assert.IsTrue(restored.IsApplicationUser);
            Assert.IsTrue(restored.HasProperty("FutureNull"));
            Assert.AreEqual("old", restored.PreEntityImagesCollection[0]["before"]["name"]);
            Assert.IsTrue(((IPluginExecutionContext7)restored.ParentContext).IsApplicationUser);
        }

        [TestMethod]
        [DataRow("System.IO.FileInfo")]
        [DataRow("Microsoft.Xrm.Sdk.Client.OrganizationServiceProxy")]
        [DataRow("Microsoft.Xrm.Sdk.Entity, Microsoft.Xrm.Sdk")]
        public void TypeNames_CannotInstantiateArbitraryClrClasses(string type)
        {
            var json = "{\"__type\":\"SdkObject\",\"Type\":\"" + type + "\",\"Properties\":{}}";
            Assert.IsFalse(DevKitJson.TryDeserialize<object>(json, out _));
        }

        public class DecimalDto { public decimal Amount { get; set; } }
        public class ThrowingDto { public string Broken => throw new InvalidOperationException("getter failed"); }
        public class ReentrantDto
        {
            public string Nested => DevKitJson.SerializeCompact(Guid.Empty);
            public Money Amount => new Money(2);
        }
        public class ExplicitContext7 : TestContext7, IPluginExecutionContext7
        {
            string IExecutionContext.MessageName => "interface-value";
        }

        public class TestContext7 : IPluginExecutionContext7
        {
            public int Mode { get; set; }
            public int IsolationMode { get; set; }
            public int Depth { get; set; }
            public string MessageName { get; set; }
            public string PrimaryEntityName { get; set; }
            public Guid? RequestId { get; set; }
            public string SecondaryEntityName { get; set; }
            public ParameterCollection InputParameters { get; set; }
            public ParameterCollection OutputParameters { get; set; }
            public ParameterCollection SharedVariables { get; set; }
            public Guid UserId { get; set; }
            public Guid InitiatingUserId { get; set; }
            public Guid BusinessUnitId { get; set; }
            public Guid OrganizationId { get; set; }
            public string OrganizationName { get; set; }
            public Guid PrimaryEntityId { get; set; }
            public EntityImageCollection PreEntityImages { get; set; }
            public EntityImageCollection PostEntityImages { get; set; }
            public EntityReference OwningExtension { get; set; }
            public Guid CorrelationId { get; set; }
            public bool IsExecutingOffline { get; set; }
            public bool IsOfflinePlayback { get; set; }
            public bool IsInTransaction { get; set; }
            public Guid OperationId { get; set; }
            public DateTime OperationCreatedOn { get; set; }
            public IPluginExecutionContext ParentContext { get; set; }
            public int Stage { get; set; }
            public Guid UserAzureActiveDirectoryObjectId { get; set; }
            public Guid InitiatingUserAzureActiveDirectoryObjectId { get; set; }
            public Guid InitiatingUserApplicationId { get; set; }
            public Guid PortalsContactId { get; set; }
            public bool IsPortalsClientCall { get; set; }
            public Guid AuthenticatedUserId { get; set; }
            public EntityImageCollection[] PreEntityImagesCollection { get; set; }
            public EntityImageCollection[] PostEntityImagesCollection { get; set; }
            public string InitiatingUserAgent { get; set; }
            public string EnvironmentId { get; set; }
            public Guid TenantId { get; set; }
            public bool IsApplicationUser { get; set; }
        }
    }
}
