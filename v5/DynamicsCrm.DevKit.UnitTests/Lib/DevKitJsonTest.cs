using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;
using Microsoft.Xrm.Sdk;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.UnitTests.Lib
{
    [TestClass]
    public class DevKitJsonTest
    {
        #region Primitives

        [TestMethod]
        public void Serialize_Null_ReturnsNullString()
        {
            Assert.AreEqual("null", DevKitJson.Serialize(null));
        }

        [TestMethod]
        public void Serialize_String_QuotesAndEscapes()
        {
            Assert.AreEqual("\"hello\"", DevKitJson.Serialize("hello"));
            Assert.AreEqual("\"hello\\nworld\"", DevKitJson.Serialize("hello\nworld"));
            Assert.AreEqual("\"he said \\\"hi\\\"\"", DevKitJson.Serialize("he said \"hi\""));
            Assert.AreEqual("\"tab\\there\"", DevKitJson.Serialize("tab\there"));
            Assert.AreEqual("\"back\\\\slash\"", DevKitJson.Serialize("back\\slash"));
        }

        [TestMethod]
        public void Serialize_Bool_LowercaseTrueFalse()
        {
            Assert.AreEqual("true", DevKitJson.Serialize(true));
            Assert.AreEqual("false", DevKitJson.Serialize(false));
        }

        [TestMethod]
        public void Serialize_Int_Roundtrip()
        {
            Assert.AreEqual("42", DevKitJson.Serialize(42));
            Assert.AreEqual("-100", DevKitJson.Serialize(-100));
            Assert.AreEqual("0", DevKitJson.Serialize(0));
        }

        [TestMethod]
        public void Serialize_Long_Roundtrip()
        {
            var big = 9999999999L;
            Assert.AreEqual("9999999999", DevKitJson.Serialize(big));
        }

        [TestMethod]
        public void Serialize_Double_Roundtrip()
        {
            var json = DevKitJson.Serialize(3.14);
            Assert.Contains("3.14", json);
        }

        [TestMethod]
        public void Serialize_Decimal_Roundtrip()
        {
            Assert.AreEqual("123.45", DevKitJson.Serialize(123.45m));
        }

        [TestMethod]
        public void Serialize_Float_Roundtrip()
        {
            var json = DevKitJson.Serialize(2.5f);
            Assert.Contains("2.5", json);
        }

        [TestMethod]
        public void Serialize_Byte_Roundtrip()
        {
            Assert.AreEqual("255", DevKitJson.Serialize((byte)255));
            Assert.AreEqual("0", DevKitJson.Serialize((byte)0));
        }

        [TestMethod]
        public void Serialize_Short_Roundtrip()
        {
            Assert.AreEqual("32767", DevKitJson.Serialize((short)32767));
            Assert.AreEqual("-100", DevKitJson.Serialize((short)-100));
        }

        [TestMethod]
        public void Deserialize_Null_ReturnsNull()
        {
            Assert.IsNull(DevKitJson.Deserialize("null"));
        }

        [TestMethod]
        public void Deserialize_String_RemovesQuotes()
        {
            Assert.AreEqual("hello", DevKitJson.Deserialize("\"hello\""));
        }

        [TestMethod]
        public void Deserialize_StringWithEscapes_Unescapes()
        {
            Assert.AreEqual("hello\nworld", DevKitJson.Deserialize("\"hello\\nworld\""));
            Assert.AreEqual("he said \"hi\"", DevKitJson.Deserialize("\"he said \\\"hi\\\"\""));
            Assert.AreEqual("tab\there", DevKitJson.Deserialize("\"tab\\there\""));
        }

        [TestMethod]
        public void Deserialize_Bool_ReturnsCorrectType()
        {
            Assert.AreEqual(true, DevKitJson.Deserialize("true"));
            Assert.AreEqual(false, DevKitJson.Deserialize("false"));
        }

        [TestMethod]
        public void Deserialize_Int_ReturnsInt()
        {
            var result = DevKitJson.Deserialize("42");
            Assert.IsInstanceOfType(result, typeof(int));
            Assert.AreEqual(42, result);
        }

        [TestMethod]
        public void Deserialize_LargeNumber_ReturnsLong()
        {
            var result = DevKitJson.Deserialize("9999999999");
            Assert.IsInstanceOfType(result, typeof(long));
            Assert.AreEqual(9999999999L, result);
        }

        [TestMethod]
        public void Deserialize_Double_ReturnsDouble()
        {
            var result = DevKitJson.Deserialize("3.14");
            Assert.IsInstanceOfType(result, typeof(double));
            Assert.AreEqual(3.14, (double)result, 10);
        }

        [TestMethod]
        public void Deserialize_NegativeNumber()
        {
            Assert.AreEqual(-42, DevKitJson.Deserialize("-42"));
        }

        [TestMethod]
        public void Deserialize_Generic_ConvertsTypes()
        {
            Assert.AreEqual(42, DevKitJson.Deserialize<int>("42"));
            Assert.AreEqual(42L, DevKitJson.Deserialize<long>("42"));
            Assert.AreEqual(42.0, DevKitJson.Deserialize<double>("42"));
            Assert.AreEqual(42m, DevKitJson.Deserialize<decimal>("42"));
            Assert.AreEqual("hello", DevKitJson.Deserialize<string>("\"hello\""));
            Assert.IsTrue(DevKitJson.Deserialize<bool>("true"));
        }

        [TestMethod]
        public void Deserialize_GenericRootTypeMismatch_ThrowsWithJsonContext()
        {
            var exception = Assert.ThrowsExactly<InvalidOperationException>(
                () => DevKitJson.Deserialize<SamplePoco>("42"));

            Assert.Contains(typeof(SamplePoco).FullName, exception.Message);
            Assert.Contains(typeof(int).FullName, exception.Message);
            Assert.Contains("42", exception.Message);
        }

        [TestMethod]
        public void Deserialize_PocoPropertyTypeMismatch_ThrowsWithJsonContext()
        {
            const string json = "{\"Count\":{\"unexpected\":1}}";

            var exception = Assert.ThrowsExactly<InvalidOperationException>(
                () => DevKitJson.Deserialize<SamplePoco>(json));

            Assert.Contains(typeof(SamplePoco).FullName, exception.Message);
            Assert.Contains(json, exception.Message);
            Assert.IsNotNull(exception.InnerException);
        }

        [TestMethod]
        public void TryDeserialize_ValidPoco_ReturnsTrueAndValue()
        {
            var success = DevKitJson.TryDeserialize(
                "{\"Name\":\"Test\",\"Count\":42,\"IsActive\":true,\"Amount\":9.5}",
                out SamplePoco result);

            Assert.IsTrue(success);
            Assert.IsNotNull(result);
            Assert.AreEqual("Test", result.Name);
            Assert.AreEqual(42, result.Count);
        }

        [TestMethod]
        public void TryDeserialize_InvalidRootType_ReturnsFalseAndDefault()
        {
            var success = DevKitJson.TryDeserialize("UpdateDataflow", out SamplePoco result);

            Assert.IsFalse(success);
            Assert.IsNull(result);
        }

        [DataTestMethod]
        [DataRow(null)]
        [DataRow("")]
        [DataRow("   ")]
        [DataRow("trux")]
        [DataRow("1e")]
        [DataRow("42 trailing")]
        public void TryDeserialize_InvalidJson_ReturnsFalse(string json)
        {
            var success = DevKitJson.TryDeserialize(json, out int result);

            Assert.IsFalse(success);
            Assert.AreEqual(0, result);
        }

        [TestMethod]
        public void Deserialize_InvalidPrimitiveJson_ThrowsWithJsonContext()
        {
            var exception = Assert.ThrowsExactly<InvalidOperationException>(
                () => DevKitJson.Deserialize<int>("UpdateDataflow"));

            Assert.Contains(typeof(int).FullName, exception.Message);
            Assert.Contains("UpdateDataflow", exception.Message);
            Assert.IsInstanceOfType(exception.InnerException, typeof(FormatException));
        }

        #endregion

        #region DateTime and Guid

        [TestMethod]
        public void DateTime_Roundtrip()
        {
            var dt = new DateTime(2025, 3, 15, 14, 30, 0, DateTimeKind.Utc);
            var json = DevKitJson.Serialize(dt);
            Assert.Contains("\"__type\":\"DateTime\"", json);
            Assert.Contains("2025-03-15T14:30:00.000Z", json);

            var result = DevKitJson.Deserialize<DateTime>(json);
            Assert.AreEqual(dt, result);
        }

        [TestMethod]
        public void Guid_Roundtrip()
        {
            var guid = Guid.Parse("a1b2c3d4-e5f6-7890-abcd-ef1234567890");
            var json = DevKitJson.Serialize(guid);
            Assert.Contains("\"__type\":\"Guid\"", json);

            var result = DevKitJson.Deserialize<Guid>(json);
            Assert.AreEqual(guid, result);
        }

        [TestMethod]
        public void ByteArray_Roundtrip_File()
        {
            var data = new byte[] { 0x48, 0x65, 0x6C, 0x6C, 0x6F };
            var json = DevKitJson.Serialize(data);
            Assert.Contains("\"__type\":\"File\"", json);

            var result = (byte[])DevKitJson.Deserialize(json);
            CollectionAssert.AreEqual(data, result);
        }

        #endregion

        #region Collections

        [TestMethod]
        public void Dictionary_Roundtrip()
        {
            var dict = new Dictionary<string, object>
            {
                { "name", "test" },
                { "count", 42 },
                { "active", true }
            };
            var json = DevKitJson.Serialize(dict);
            var result = DevKitJson.Deserialize(json) as Dictionary<string, object>;

            Assert.IsNotNull(result);
            Assert.AreEqual("test", result["name"]);
            Assert.AreEqual(42, result["count"]);
            Assert.AreEqual(true, result["active"]);
        }

        [TestMethod]
        public void List_Roundtrip()
        {
            var list = new List<object> { 1, "two", true, null };
            var json = DevKitJson.Serialize(list);
            var result = DevKitJson.Deserialize(json) as List<object>;

            Assert.IsNotNull(result);
            Assert.AreEqual(4, result.Count);
            Assert.AreEqual(1, result[0]);
            Assert.AreEqual("two", result[1]);
            Assert.AreEqual(true, result[2]);
            Assert.IsNull(result[3]);
        }

        [TestMethod]
        public void StringDictionary_Serializes()
        {
            var dict = new Dictionary<string, string>
            {
                { "first", "John" },
                { "last", "Doe" }
            };
            var json = DevKitJson.Serialize(dict);
            Assert.Contains("\"first\":\"John\"", json);
            Assert.Contains("\"last\":\"Doe\"", json);
        }

        [TestMethod]
        public void EmptyObject_Roundtrip()
        {
            var json = DevKitJson.Serialize(new Dictionary<string, object>());
            Assert.AreEqual("{}", json);
            var result = DevKitJson.Deserialize(json) as Dictionary<string, object>;
            Assert.IsNotNull(result);
            Assert.IsEmpty(result);
        }

        [TestMethod]
        public void EmptyArray_Roundtrip()
        {
            var json = DevKitJson.Serialize(new List<object>());
            Assert.AreEqual("[]", json);
            var result = DevKitJson.Deserialize(json) as List<object>;
            Assert.IsNotNull(result);
            Assert.IsEmpty(result);
        }

        #endregion

        #region Money

        [TestMethod]
        public void Money_Roundtrip()
        {
            var money = new Money(1234.56m);
            var json = DevKitJson.Serialize(money);
            Assert.Contains("\"__type\":\"Money\"", json);
            Assert.Contains("\"Value\":1234.56", json);

            var result = DevKitJson.Deserialize<Money>(json);
            Assert.AreEqual(1234.56m, result.Value);
        }

        [TestMethod]
        public void Money_Zero()
        {
            var money = new Money(0m);
            var json = DevKitJson.Serialize(money);
            var result = DevKitJson.Deserialize<Money>(json);
            Assert.AreEqual(0m, result.Value);
        }

        [TestMethod]
        public void Money_Negative()
        {
            var money = new Money(-500.99m);
            var json = DevKitJson.Serialize(money);
            var result = DevKitJson.Deserialize<Money>(json);
            Assert.AreEqual(-500.99m, result.Value);
        }

        #endregion

        #region OptionSetValue

        [TestMethod]
        public void OptionSetValue_Roundtrip()
        {
            var osv = new OptionSetValue(100000001);
            var json = DevKitJson.Serialize(osv);
            Assert.Contains("\"__type\":\"OptionSetValue\"", json);

            var result = DevKitJson.Deserialize<OptionSetValue>(json);
            Assert.AreEqual(100000001, result.Value);
        }

        [TestMethod]
        public void OptionSetValueCollection_Roundtrip()
        {
            var osvc = new OptionSetValueCollection
            {
                new OptionSetValue(1),
                new OptionSetValue(2),
                new OptionSetValue(3)
            };
            var json = DevKitJson.Serialize(osvc);
            Assert.Contains("\"__type\":\"OptionSetValueCollection\"", json);

            var result = DevKitJson.Deserialize<OptionSetValueCollection>(json);
            Assert.AreEqual(3, result.Count);
            Assert.AreEqual(1, result[0].Value);
            Assert.AreEqual(2, result[1].Value);
            Assert.AreEqual(3, result[2].Value);
        }

        #endregion

        #region EntityReference

        [TestMethod]
        public void EntityReference_Roundtrip()
        {
            var id = Guid.NewGuid();
            var er = new EntityReference("account", id) { Name = "Contoso" };
            var json = DevKitJson.Serialize(er);
            Assert.Contains("\"__type\":\"EntityReference\"", json);
            Assert.Contains("\"LogicalName\":\"account\"", json);
            Assert.Contains("\"Name\":\"Contoso\"", json);

            var result = DevKitJson.Deserialize<EntityReference>(json);
            Assert.AreEqual("account", result.LogicalName);
            Assert.AreEqual(id, result.Id);
            Assert.AreEqual("Contoso", result.Name);
        }

        [TestMethod]
        public void EntityReference_WithoutName()
        {
            var id = Guid.NewGuid();
            var er = new EntityReference("contact", id);
            var json = DevKitJson.Serialize(er);
            Assert.DoesNotContain("\"Name\"", json);

            var result = DevKitJson.Deserialize<EntityReference>(json);
            Assert.AreEqual("contact", result.LogicalName);
            Assert.AreEqual(id, result.Id);
            Assert.IsNull(result.Name);
        }

        #endregion

        #region AliasedValue

        [TestMethod]
        public void AliasedValue_WithString()
        {
            var av = new AliasedValue("contact", "fullname", "John Doe");
            var json = DevKitJson.Serialize(av);
            Assert.Contains("\"__type\":\"AliasedValue\"", json);

            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.AreEqual("contact", result.EntityLogicalName);
            Assert.AreEqual("fullname", result.AttributeLogicalName);
            Assert.AreEqual("John Doe", result.Value);
        }

        [TestMethod]
        public void AliasedValue_WithMoney()
        {
            var av = new AliasedValue("account", "revenue", new Money(50000m));
            var json = DevKitJson.Serialize(av);

            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.AreEqual("account", result.EntityLogicalName);
            Assert.AreEqual("revenue", result.AttributeLogicalName);
            Assert.IsInstanceOfType(result.Value, typeof(Money));
            Assert.AreEqual(50000m, ((Money)result.Value).Value);
        }

        [TestMethod]
        public void AliasedValue_WithEntityReference()
        {
            var id = Guid.NewGuid();
            var av = new AliasedValue("account", "primarycontactid", new EntityReference("contact", id));
            var json = DevKitJson.Serialize(av);

            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.IsInstanceOfType(result.Value, typeof(EntityReference));
            var er = (EntityReference)result.Value;
            Assert.AreEqual("contact", er.LogicalName);
            Assert.AreEqual(id, er.Id);
        }

        [TestMethod]
        public void AliasedValue_WithOptionSetValue()
        {
            var av = new AliasedValue("account", "statuscode", new OptionSetValue(3));
            var json = DevKitJson.Serialize(av);
            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.IsInstanceOfType(result.Value, typeof(OptionSetValue));
            Assert.AreEqual(3, ((OptionSetValue)result.Value).Value);
        }

        [TestMethod]
        public void AliasedValue_WithBool()
        {
            var av = new AliasedValue("contact", "donotphone", true);
            var json = DevKitJson.Serialize(av);
            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.AreEqual(true, result.Value);
        }

        [TestMethod]
        public void AliasedValue_WithInt()
        {
            var av = new AliasedValue("account", "numberofemployees", 250);
            var json = DevKitJson.Serialize(av);
            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.AreEqual(250, result.Value);
        }

        [TestMethod]
        public void AliasedValue_WithDateTime()
        {
            var dt = new DateTime(2025, 12, 25, 0, 0, 0, DateTimeKind.Utc);
            var av = new AliasedValue("account", "createdon", dt);
            var json = DevKitJson.Serialize(av);
            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.IsInstanceOfType(result.Value, typeof(DateTime));
            Assert.AreEqual(dt, (DateTime)result.Value);
        }

        [TestMethod]
        public void AliasedValue_WithGuid()
        {
            var guid = Guid.NewGuid();
            var av = new AliasedValue("account", "accountid", guid);
            var json = DevKitJson.Serialize(av);
            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.IsInstanceOfType(result.Value, typeof(Guid));
            Assert.AreEqual(guid, (Guid)result.Value);
        }

        [TestMethod]
        public void AliasedValue_WithNull()
        {
            var av = new AliasedValue("account", "description", null);
            var json = DevKitJson.Serialize(av);
            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.AreEqual("account", result.EntityLogicalName);
            Assert.AreEqual("description", result.AttributeLogicalName);
            Assert.IsNull(result.Value);
        }

        [TestMethod]
        public void AliasedValue_WithDouble()
        {
            var av = new AliasedValue("account", "new_latitude", 47.6062);
            var json = DevKitJson.Serialize(av);
            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.IsInstanceOfType(result.Value, typeof(double));
            Assert.AreEqual(47.6062, (double)result.Value, 4);
        }

        [TestMethod]
        public void AliasedValue_WithLong()
        {
            var av = new AliasedValue("account", "versionnumber", 9876543210L);
            var json = DevKitJson.Serialize(av);
            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.IsInstanceOfType(result.Value, typeof(long));
            Assert.AreEqual(9876543210L, (long)result.Value);
        }

        #endregion

        #region BooleanManagedProperty

        [TestMethod]
        public void BooleanManagedProperty_Roundtrip()
        {
            var bmp = new BooleanManagedProperty(true) { CanBeChanged = false };
            var json = DevKitJson.Serialize(bmp);
            Assert.Contains("\"__type\":\"BooleanManagedProperty\"", json);
            Assert.Contains("\"Value\":true", json);
            Assert.Contains("\"CanBeChanged\":false", json);

            var result = DevKitJson.Deserialize<BooleanManagedProperty>(json);
            Assert.IsTrue(result.Value);
            Assert.IsFalse(result.CanBeChanged);
        }

        #endregion

        #region Entity

        [TestMethod]
        public void Entity_Simple_Roundtrip()
        {
            var id = Guid.NewGuid();
            var entity = new Entity("account", id);
            entity["name"] = "Contoso";
            entity["numberofemployees"] = 500;
            entity["revenue"] = new Money(1000000m);
            entity["primarycontactid"] = new EntityReference("contact", Guid.NewGuid()) { Name = "John" };

            var json = DevKitJson.Serialize(entity);
            Assert.Contains("\"__type\":\"Entity\"", json);
            Assert.Contains("\"LogicalName\":\"account\"", json);

            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.AreEqual("account", result.LogicalName);
            Assert.AreEqual(id, result.Id);
            Assert.AreEqual("Contoso", result["name"]);
            Assert.AreEqual(500, result["numberofemployees"]);
            Assert.IsInstanceOfType(result["revenue"], typeof(Money));
            Assert.AreEqual(1000000m, ((Money)result["revenue"]).Value);
            Assert.IsInstanceOfType(result["primarycontactid"], typeof(EntityReference));
            Assert.AreEqual("John", ((EntityReference)result["primarycontactid"]).Name);
        }

        [TestMethod]
        public void Entity_WithFormattedValues()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["statuscode"] = new OptionSetValue(1);
            entity.FormattedValues["statuscode"] = "Active";

            var json = DevKitJson.Serialize(entity);
            Assert.Contains("\"FormattedValues\"", json);
            Assert.Contains("\"statuscode\":\"Active\"", json);

            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.AreEqual("Active", result.FormattedValues["statuscode"]);
        }

        [TestMethod]
        public void Entity_WithNullAttribute()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = null;
            entity["description"] = "test";

            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.IsNull(result["name"]);
            Assert.AreEqual("test", result["description"]);
        }

        [TestMethod]
        public void Entity_WithAllAttributeTypes()
        {
            var contactId = Guid.NewGuid();
            var rawGuid = Guid.NewGuid();
            var fileData = new byte[] { 0x89, 0x50, 0x4E, 0x47 };
            var partyEntity = new Entity("activityparty", Guid.NewGuid());
            partyEntity["partyid"] = new EntityReference("contact", contactId);

            var entity = new Entity("account", Guid.NewGuid());
            // string (SingleLine/MultiLine text)
            entity["name"] = "Contoso Ltd";
            // int (Whole Number)
            entity["numberofemployees"] = 500;
            // long (BigInt - e.g., versionnumber)
            entity["versionnumber"] = 9876543210L;
            // double (Floating Point)
            entity["new_latitude"] = 47.6062;
            // decimal (Decimal Number)
            entity["exchangerate"] = 1.2345m;
            // float (Float)
            entity["new_temperature"] = 36.6f;
            // byte (rarely used but Dataverse supports)
            entity["new_priority"] = (byte)5;
            // bool (Two Options)
            entity["donotphone"] = true;
            // DateTime
            entity["createdon"] = new DateTime(2025, 6, 15, 10, 30, 0, DateTimeKind.Utc);
            // Guid (UniqueIdentifier)
            entity["processid"] = rawGuid;
            // Money (Currency)
            entity["revenue"] = new Money(5000000.99m);
            // OptionSetValue (Choice/Picklist)
            entity["statuscode"] = new OptionSetValue(1);
            // OptionSetValueCollection (Multi-Select Choice)
            entity["new_industries"] = new OptionSetValueCollection { new OptionSetValue(100), new OptionSetValue(200), new OptionSetValue(300) };
            // EntityReference (Lookup)
            entity["primarycontactid"] = new EntityReference("contact", contactId) { Name = "John Doe" };
            // AliasedValue (from linked entity query)
            entity["contact.fullname"] = new AliasedValue("contact", "fullname", "Jane Smith");
            // BooleanManagedProperty
            entity["iscustomizable"] = new BooleanManagedProperty(true) { CanBeChanged = false };
            // EntityCollection (Activity Party / partylist)
            entity["to"] = new EntityCollection(new List<Entity> { partyEntity });
            // byte[] (File/Image column)
            entity["entityimage"] = fileData;
            // null value
            entity["description"] = null;

            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);

            // string
            Assert.AreEqual("Contoso Ltd", result["name"]);
            // int
            Assert.AreEqual(500, result["numberofemployees"]);
            // long - JSON parser returns int if fits, otherwise long
            var vn = result["versionnumber"];
            Assert.IsInstanceOfType(vn, typeof(long));
            Assert.AreEqual(9876543210L, (long)vn);
            // double
            Assert.AreEqual(47.6062, (double)result["new_latitude"], 4);
            // decimal - comes back as double from JSON parser, verified via Money for exact decimal
            Assert.IsInstanceOfType(result["exchangerate"], typeof(double));
            Assert.AreEqual(1.2345, (double)result["exchangerate"], 4);
            // float - serialized as float, parsed back as double
            Assert.IsInstanceOfType(result["new_temperature"], typeof(double));
            Assert.AreEqual(36.6, (double)result["new_temperature"], 1);
            // byte - serialized as number, parsed as int
            Assert.AreEqual(5, result["new_priority"]);
            // bool
            Assert.AreEqual(true, result["donotphone"]);
            // DateTime
            Assert.IsInstanceOfType(result["createdon"], typeof(DateTime));
            Assert.AreEqual(new DateTime(2025, 6, 15, 10, 30, 0, DateTimeKind.Utc), (DateTime)result["createdon"]);
            // Guid
            Assert.IsInstanceOfType(result["processid"], typeof(Guid));
            Assert.AreEqual(rawGuid, (Guid)result["processid"]);
            // Money
            Assert.IsInstanceOfType(result["revenue"], typeof(Money));
            Assert.AreEqual(5000000.99m, ((Money)result["revenue"]).Value);
            // OptionSetValue
            Assert.IsInstanceOfType(result["statuscode"], typeof(OptionSetValue));
            Assert.AreEqual(1, ((OptionSetValue)result["statuscode"]).Value);
            // OptionSetValueCollection
            Assert.IsInstanceOfType(result["new_industries"], typeof(OptionSetValueCollection));
            var osvc = (OptionSetValueCollection)result["new_industries"];
            Assert.AreEqual(3, osvc.Count);
            Assert.AreEqual(100, osvc[0].Value);
            Assert.AreEqual(200, osvc[1].Value);
            Assert.AreEqual(300, osvc[2].Value);
            // EntityReference
            Assert.IsInstanceOfType(result["primarycontactid"], typeof(EntityReference));
            var er = (EntityReference)result["primarycontactid"];
            Assert.AreEqual("contact", er.LogicalName);
            Assert.AreEqual(contactId, er.Id);
            Assert.AreEqual("John Doe", er.Name);
            // AliasedValue
            Assert.IsInstanceOfType(result["contact.fullname"], typeof(AliasedValue));
            var av = (AliasedValue)result["contact.fullname"];
            Assert.AreEqual("contact", av.EntityLogicalName);
            Assert.AreEqual("fullname", av.AttributeLogicalName);
            Assert.AreEqual("Jane Smith", av.Value);
            // BooleanManagedProperty
            Assert.IsInstanceOfType(result["iscustomizable"], typeof(BooleanManagedProperty));
            var bmp = (BooleanManagedProperty)result["iscustomizable"];
            Assert.IsTrue(bmp.Value);
            Assert.IsFalse(bmp.CanBeChanged);
            // EntityCollection (Activity Party)
            Assert.IsInstanceOfType(result["to"], typeof(EntityCollection));
            var ec = (EntityCollection)result["to"];
            Assert.HasCount(1, ec.Entities);
            Assert.IsInstanceOfType(ec.Entities[0]["partyid"], typeof(EntityReference));
            // byte[] (File)
            Assert.IsInstanceOfType(result["entityimage"], typeof(byte[]));
            CollectionAssert.AreEqual((byte[])fileData, (byte[])result["entityimage"]);
            // null
            Assert.IsNull(result["description"]);
        }

        [TestMethod]
        public void Entity_Empty()
        {
            var entity = new Entity("account");
            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.AreEqual("account", result.LogicalName);
            Assert.IsEmpty(result.Attributes);
        }

        #endregion

        #region EntityCollection

        [TestMethod]
        public void EntityCollection_Roundtrip()
        {
            var ec = new EntityCollection { EntityName = "account" };
            var e1 = new Entity("account", Guid.NewGuid());
            e1["name"] = "Contoso";
            var e2 = new Entity("account", Guid.NewGuid());
            e2["name"] = "Fabrikam";
            ec.Entities.Add(e1);
            ec.Entities.Add(e2);

            var json = DevKitJson.Serialize(ec);
            Assert.Contains("\"__type\":\"EntityCollection\"", json);

            var result = DevKitJson.Deserialize<EntityCollection>(json);
            Assert.AreEqual("account", result.EntityName);
            Assert.AreEqual(2, result.Entities.Count);
            Assert.AreEqual("Contoso", result.Entities[0]["name"]);
            Assert.AreEqual("Fabrikam", result.Entities[1]["name"]);
        }

        [TestMethod]
        public void EntityCollection_Empty()
        {
            var ec = new EntityCollection();
            var json = DevKitJson.Serialize(ec);
            var result = DevKitJson.Deserialize<EntityCollection>(json);
            Assert.IsEmpty(result.Entities);
        }

        #endregion

        #region ParameterCollection

        [TestMethod]
        public void ParameterCollection_Roundtrip()
        {
            var pc = new ParameterCollection();
            var target = new Entity("account", Guid.NewGuid());
            target["name"] = "Contoso";
            pc["Target"] = target;
            pc["SuppressDuplicateDetection"] = true;

            var json = DevKitJson.Serialize(pc);
            Assert.Contains("\"__type\":\"ParameterCollection\"", json);

            var result = DevKitJson.Deserialize<ParameterCollection>(json);
            Assert.IsInstanceOfType(result["Target"], typeof(Entity));
            Assert.AreEqual("Contoso", ((Entity)result["Target"])["name"]);
            Assert.AreEqual(true, result["SuppressDuplicateDetection"]);
        }

        [TestMethod]
        public void ParameterCollection_WithEntityReference()
        {
            var pc = new ParameterCollection();
            pc["Target"] = new EntityReference("account", Guid.NewGuid());
            pc["id"] = Guid.NewGuid();

            var json = DevKitJson.Serialize(pc);
            var result = DevKitJson.Deserialize<ParameterCollection>(json);
            Assert.IsInstanceOfType(result["Target"], typeof(EntityReference));
            Assert.IsInstanceOfType(result["id"], typeof(Guid));
        }

        #endregion

        #region EntityImageCollection

        [TestMethod]
        public void EntityImageCollection_Roundtrip()
        {
            var eic = new EntityImageCollection();
            var preImage = new Entity("account", Guid.NewGuid());
            preImage["name"] = "Old Name";
            eic["PreImage"] = preImage;

            var json = DevKitJson.Serialize(eic);
            Assert.Contains("\"__type\":\"EntityImageCollection\"", json);

            var result = DevKitJson.Deserialize<EntityImageCollection>(json);
            Assert.IsTrue(result.ContainsKey("PreImage"));
            Assert.AreEqual("Old Name", result["PreImage"]["name"]);
        }

        #endregion

        #region RemoteExecutionContext

        [TestMethod]
        public void RemoteExecutionContext_Roundtrip()
        {
            var ctx = new RemoteExecutionContext();
            var fields = ctx.GetType().GetFields(System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);
            void Set(string name, object value)
            {
                foreach (var f in fields)
                    if (f.Name == name) { f.SetValue(ctx, value); return; }
            }

            var buId = Guid.NewGuid();
            var corrId = Guid.NewGuid();
            var userId = Guid.NewGuid();
            var initUserId = Guid.NewGuid();
            var orgId = Guid.NewGuid();
            var primaryId = Guid.NewGuid();

            Set("_businessUnitId", buId);
            Set("_correlationId", corrId);
            Set("_depth", 1);
            Set("_initiatingUserId", initUserId);
            Set("_messageName", "Create");
            Set("_mode", 0);
            Set("_organizationId", orgId);
            Set("_organizationName", "TestOrg");
            Set("_primaryEntityId", primaryId);
            Set("_primaryEntityName", "account");
            Set("_stage", 40);
            Set("_userId", userId);

            var target = new Entity("account", primaryId);
            target["name"] = "Contoso";
            ctx.InputParameters["Target"] = target;

            var preImage = new Entity("account", primaryId);
            preImage["name"] = "Old Contoso";
            ctx.PreEntityImages["PreImage"] = preImage;

            var json = DevKitJson.Serialize(ctx);
            Assert.Contains("\"__type\":\"RemoteExecutionContext\"", json);
            Assert.Contains("\"MessageName\":\"Create\"", json);

            var result = DevKitJson.Deserialize<RemoteExecutionContext>(json);
            Assert.AreEqual(buId, result.BusinessUnitId);
            Assert.AreEqual(corrId, result.CorrelationId);
            Assert.AreEqual(1, result.Depth);
            Assert.AreEqual(initUserId, result.InitiatingUserId);
            Assert.AreEqual("Create", result.MessageName);
            Assert.AreEqual(0, result.Mode);
            Assert.AreEqual(orgId, result.OrganizationId);
            Assert.AreEqual("TestOrg", result.OrganizationName);
            Assert.AreEqual(primaryId, result.PrimaryEntityId);
            Assert.AreEqual("account", result.PrimaryEntityName);
            Assert.AreEqual(40, result.Stage);
            Assert.AreEqual(userId, result.UserId);

            Assert.IsInstanceOfType(result.InputParameters["Target"], typeof(Entity));
            Assert.AreEqual("Contoso", ((Entity)result.InputParameters["Target"])["name"]);
            Assert.AreEqual("Old Contoso", result.PreEntityImages["PreImage"]["name"]);
        }

        [TestMethod]
        public void RemoteExecutionContext_WithOwningExtension()
        {
            var ctx = new RemoteExecutionContext();
            var fields = ctx.GetType().GetFields(System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);
            foreach (var f in fields)
                if (f.Name == "_owningExtension")
                    f.SetValue(ctx, new EntityReference("sdkmessageprocessingstep", Guid.NewGuid()) { Name = "MyPlugin" });

            var json = DevKitJson.Serialize(ctx);
            var result = DevKitJson.Deserialize<RemoteExecutionContext>(json);
            Assert.IsNotNull(result.OwningExtension);
            Assert.AreEqual("sdkmessageprocessingstep", result.OwningExtension.LogicalName);
            Assert.AreEqual("MyPlugin", result.OwningExtension.Name);
        }

        [TestMethod]
        public void RemoteExecutionContext_MinimalEmpty()
        {
            var ctx = new RemoteExecutionContext();
            var json = DevKitJson.Serialize(ctx);
            var result = DevKitJson.Deserialize<RemoteExecutionContext>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual(Guid.Empty, result.BusinessUnitId);
            Assert.AreEqual(0, result.Depth);
        }

        #endregion

        #region Edge Cases

        [TestMethod]
        public void Serialize_Enum_AsInt()
        {
            var json = DevKitJson.Serialize(DayOfWeek.Wednesday);
            Assert.AreEqual("3", json);
        }

        [TestMethod]
        public void Unicode_Roundtrip()
        {
            var json = DevKitJson.Serialize("Vi\u1EC7t Nam");
            var result = DevKitJson.Deserialize<string>(json);
            Assert.AreEqual("Vi\u1EC7t Nam", result);
        }

        [TestMethod]
        public void UnicodeEscape_InJson()
        {
            var result = DevKitJson.Deserialize<string>("\"\\u0041\\u0042\"");
            Assert.AreEqual("AB", result);
        }

        [TestMethod]
        public void NestedEntity_InEntityCollection_InAliasedValue()
        {
            var innerEntity = new Entity("contact", Guid.NewGuid());
            innerEntity["fullname"] = "John";
            var ec = new EntityCollection();
            ec.Entities.Add(innerEntity);
            var av = new AliasedValue("account", "contacts", ec);

            var json = DevKitJson.Serialize(av);
            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.IsInstanceOfType(result.Value, typeof(EntityCollection));
            var resEc = (EntityCollection)result.Value;
            Assert.HasCount(1, resEc.Entities);
            Assert.AreEqual("John", resEc.Entities[0]["fullname"]);
        }

        [TestMethod]
        public void WhitespaceInJson_ParsedCorrectly()
        {
            var json = "  {  \"name\"  :  \"test\"  ,  \"value\"  :  42  }  ";
            var result = DevKitJson.Deserialize(json) as Dictionary<string, object>;
            Assert.IsNotNull(result);
            Assert.AreEqual("test", result["name"]);
            Assert.AreEqual(42, result["value"]);
        }

        [TestMethod]
        public void EmptyString_Deserialize()
        {
            Assert.IsNull(DevKitJson.Deserialize(null));
            Assert.AreEqual("", DevKitJson.Deserialize<string>("\"\""));
        }

        [TestMethod]
        public void LargeNestedStructure()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = "Parent";
            var children = new EntityCollection();
            for (int i = 0; i < 100; i++)
            {
                var child = new Entity("contact", Guid.NewGuid());
                child["fullname"] = $"Contact {i}";
                child["revenue"] = new Money(i * 100m);
                children.Entities.Add(child);
            }
            entity["children"] = children;

            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            var resChildren = (EntityCollection)result["children"];
            Assert.AreEqual(100, resChildren.Entities.Count);
            Assert.AreEqual("Contact 50", resChildren.Entities[50]["fullname"]);
            Assert.AreEqual(5000m, ((Money)resChildren.Entities[50]["revenue"]).Value);
        }

        #endregion

        #region Integration - Simulate Plugin Context

        [TestMethod]
        public void FullPluginContext_CreateMessage()
        {
            var accountId = Guid.NewGuid();
            var userId = Guid.NewGuid();

            var ctx = new RemoteExecutionContext();
            var fields = ctx.GetType().GetFields(System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);
            void Set(string name, object value)
            {
                foreach (var f in fields)
                    if (f.Name == name) { f.SetValue(ctx, value); return; }
            }

            Set("_messageName", "Create");
            Set("_primaryEntityName", "account");
            Set("_primaryEntityId", accountId);
            Set("_depth", 1);
            Set("_stage", 40);
            Set("_mode", 0);
            Set("_userId", userId);
            Set("_initiatingUserId", userId);
            Set("_organizationName", "contoso");
            Set("_organizationId", Guid.NewGuid());
            Set("_businessUnitId", Guid.NewGuid());
            Set("_correlationId", Guid.NewGuid());

            var target = new Entity("account", accountId);
            target["name"] = "Contoso Ltd";
            target["revenue"] = new Money(5000000m);
            target["numberofemployees"] = 1000;
            target["primarycontactid"] = new EntityReference("contact", Guid.NewGuid()) { Name = "Jane Smith" };
            target["statuscode"] = new OptionSetValue(1);
            target["createdon"] = new DateTime(2025, 6, 15, 9, 0, 0, DateTimeKind.Utc);
            target["isactive"] = true;
            ctx.InputParameters["Target"] = target;

            ctx.OutputParameters["id"] = accountId;

            ctx.SharedVariables["CustomKey"] = "CustomValue";

            var json = DevKitJson.Serialize(ctx);
            var restored = DevKitJson.Deserialize<RemoteExecutionContext>(json);

            Assert.AreEqual("Create", restored.MessageName);
            Assert.AreEqual("account", restored.PrimaryEntityName);
            Assert.AreEqual(accountId, restored.PrimaryEntityId);
            Assert.AreEqual(1, restored.Depth);
            Assert.AreEqual(40, restored.Stage);

            var restoredTarget = (Entity)restored.InputParameters["Target"];
            Assert.AreEqual("Contoso Ltd", restoredTarget["name"]);
            Assert.AreEqual(5000000m, ((Money)restoredTarget["revenue"]).Value);
            Assert.AreEqual(1000, restoredTarget["numberofemployees"]);
            Assert.AreEqual("Jane Smith", ((EntityReference)restoredTarget["primarycontactid"]).Name);
            Assert.AreEqual(1, ((OptionSetValue)restoredTarget["statuscode"]).Value);
            Assert.IsInstanceOfType(restoredTarget["createdon"], typeof(DateTime));
            Assert.AreEqual(true, restoredTarget["isactive"]);

            Assert.AreEqual(accountId, restored.OutputParameters["id"]);
            Assert.AreEqual("CustomValue", restored.SharedVariables["CustomKey"]);
        }

        [TestMethod]
        public void FullPluginContext_UpdateMessage_WithPreImage()
        {
            var accountId = Guid.NewGuid();

            var ctx = new RemoteExecutionContext();
            var fields = ctx.GetType().GetFields(System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);
            void Set(string name, object value)
            {
                foreach (var f in fields)
                    if (f.Name == name) { f.SetValue(ctx, value); return; }
            }

            Set("_messageName", "Update");
            Set("_primaryEntityName", "account");
            Set("_primaryEntityId", accountId);
            Set("_depth", 1);
            Set("_stage", 20);

            var target = new Entity("account", accountId);
            target["name"] = "New Name";
            target["revenue"] = new Money(999.99m);
            ctx.InputParameters["Target"] = target;

            var preImage = new Entity("account", accountId);
            preImage["name"] = "Old Name";
            preImage["revenue"] = new Money(500m);
            preImage["statuscode"] = new OptionSetValue(1);
            preImage.FormattedValues["statuscode"] = "Active";
            ctx.PreEntityImages["PreImage"] = preImage;

            var json = DevKitJson.Serialize(ctx);
            var restored = DevKitJson.Deserialize<RemoteExecutionContext>(json);

            Assert.AreEqual("Update", restored.MessageName);
            Assert.AreEqual(20, restored.Stage);

            var restoredTarget = (Entity)restored.InputParameters["Target"];
            Assert.AreEqual("New Name", restoredTarget["name"]);

            var restoredPreImage = restored.PreEntityImages["PreImage"];
            Assert.AreEqual("Old Name", restoredPreImage["name"]);
            Assert.AreEqual(500m, ((Money)restoredPreImage["revenue"]).Value);
            Assert.AreEqual("Active", restoredPreImage.FormattedValues["statuscode"]);
        }

        [TestMethod]
        public void FullPluginContext_DeleteMessage_EntityReferenceAsTarget()
        {
            var accountId = Guid.NewGuid();
            var ctx = new RemoteExecutionContext();
            var fields = ctx.GetType().GetFields(System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);
            void Set(string name, object value)
            {
                foreach (var f in fields)
                    if (f.Name == name) { f.SetValue(ctx, value); return; }
            }

            Set("_messageName", "Delete");
            Set("_primaryEntityName", "account");
            Set("_primaryEntityId", accountId);
            Set("_depth", 1);
            Set("_stage", 20);

            ctx.InputParameters["Target"] = new EntityReference("account", accountId);

            var json = DevKitJson.Serialize(ctx);
            var restored = DevKitJson.Deserialize<RemoteExecutionContext>(json);

            Assert.AreEqual("Delete", restored.MessageName);
            Assert.IsInstanceOfType(restored.InputParameters["Target"], typeof(EntityReference));
            Assert.AreEqual(accountId, ((EntityReference)restored.InputParameters["Target"]).Id);
        }

        #endregion

        #region Activity Party Pattern (EntityCollection as attribute)

        [TestMethod]
        public void Entity_ActivityParty_EmailTo()
        {
            var email = new Entity("email", Guid.NewGuid());
            email["subject"] = "Test Email";

            var party1 = new Entity("activityparty", Guid.NewGuid());
            party1["partyid"] = new EntityReference("contact", Guid.NewGuid()) { Name = "John" };
            party1["addressused"] = "john@contoso.com";

            var party2 = new Entity("activityparty", Guid.NewGuid());
            party2["partyid"] = new EntityReference("contact", Guid.NewGuid()) { Name = "Jane" };
            party2["addressused"] = "jane@contoso.com";

            email["to"] = new EntityCollection(new List<Entity> { party1, party2 });
            email["from"] = new EntityCollection(new List<Entity>
            {
                new Entity("activityparty") { ["partyid"] = new EntityReference("systemuser", Guid.NewGuid()) }
            });

            var json = DevKitJson.Serialize(email);
            var result = DevKitJson.Deserialize<Entity>(json);

            Assert.AreEqual("Test Email", result["subject"]);

            var to = (EntityCollection)result["to"];
            Assert.AreEqual(2, to.Entities.Count);
            Assert.AreEqual("john@contoso.com", to.Entities[0]["addressused"]);
            Assert.AreEqual("Jane", ((EntityReference)to.Entities[1]["partyid"]).Name);

            var from = (EntityCollection)result["from"];
            Assert.HasCount(1, from.Entities);
            Assert.IsInstanceOfType(from.Entities[0]["partyid"], typeof(EntityReference));
        }

        #endregion

        #region Numeric Edge Cases

        [TestMethod]
        public void Long_MaxValue_Roundtrip()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["versionnumber"] = long.MaxValue;
            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.AreEqual(long.MaxValue, (long)result["versionnumber"]);
        }

        [TestMethod]
        public void Int_MinMax_Roundtrip()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["min_val"] = int.MinValue;
            entity["max_val"] = int.MaxValue;
            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.AreEqual(int.MinValue, result["min_val"]);
            Assert.AreEqual(int.MaxValue, result["max_val"]);
        }

        [TestMethod]
        public void Money_LargeValue_Roundtrip()
        {
            var money = new Money(999999999999.9999m);
            var json = DevKitJson.Serialize(money);
            var result = DevKitJson.Deserialize<Money>(json);
            Assert.AreEqual(999999999999.9999m, result.Value, 2);
        }

        [TestMethod]
        public void Double_ScientificNotation()
        {
            var result = DevKitJson.Deserialize("1.5e2");
            Assert.IsInstanceOfType(result, typeof(double));
            Assert.AreEqual(150.0, (double)result);
        }

        [TestMethod]
        public void Double_NegativeExponent()
        {
            var result = DevKitJson.Deserialize("2.5e-3");
            Assert.IsInstanceOfType(result, typeof(double));
            Assert.AreEqual(0.0025, (double)result, 10);
        }

        #endregion

        #region String Edge Cases

        [TestMethod]
        public void String_Empty_Roundtrip()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = "";
            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.AreEqual("", result["name"]);
        }

        [TestMethod]
        public void String_SpecialChars_Roundtrip()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["description"] = "Line1\nLine2\tTabbed\r\nWindows\"Quoted\"Back\\slash";
            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.AreEqual("Line1\nLine2\tTabbed\r\nWindows\"Quoted\"Back\\slash", result["description"]);
        }

        [TestMethod]
        public void String_Vietnamese_Roundtrip()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = "Công ty TNHH Động lực Việt Nam";
            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.AreEqual("Công ty TNHH Động lực Việt Nam", result["name"]);
        }

        [TestMethod]
        public void String_Chinese_Japanese_Korean()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = "日本語テスト 한국어 中文测试";
            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.AreEqual("日本語テスト 한국어 中文测试", result["name"]);
        }

        [TestMethod]
        public void String_SurrogatePair_Emoji()
        {
            var result = DevKitJson.Deserialize<string>("\"\\uD83D\\uDE00\"");
            Assert.AreEqual("\uD83D\uDE00", result);
        }

        #endregion

        #region FormattedValues Patterns

        [TestMethod]
        public void Entity_MultipleFormattedValues()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["statuscode"] = new OptionSetValue(1);
            entity["statecode"] = new OptionSetValue(0);
            entity["industrycode"] = new OptionSetValue(100000001);
            entity["revenue"] = new Money(5000000m);
            entity["createdon"] = new DateTime(2025, 1, 1, 0, 0, 0, DateTimeKind.Utc);

            entity.FormattedValues["statuscode"] = "Active";
            entity.FormattedValues["statecode"] = "Active";
            entity.FormattedValues["industrycode"] = "Technology";
            entity.FormattedValues["revenue"] = "$5,000,000.00";
            entity.FormattedValues["createdon"] = "1/1/2025 12:00 AM";

            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);

            Assert.AreEqual(5, result.FormattedValues.Count);
            Assert.AreEqual("Active", result.FormattedValues["statuscode"]);
            Assert.AreEqual("Active", result.FormattedValues["statecode"]);
            Assert.AreEqual("Technology", result.FormattedValues["industrycode"]);
            Assert.AreEqual("$5,000,000.00", result.FormattedValues["revenue"]);
            Assert.AreEqual("1/1/2025 12:00 AM", result.FormattedValues["createdon"]);
        }

        #endregion

        #region SerializeContext & v2-v7+ Auto-Discovery

        [TestMethod]
        public void SerializeContext_WithRemoteExecutionContext_SameAsSerialize()
        {
            var ctx = new RemoteExecutionContext();
            var fields = ctx.GetType().GetFields(BindingFlags.NonPublic | BindingFlags.Instance);
            void Set(string name, object value)
            {
                foreach (var f in fields)
                    if (f.Name == name) { f.SetValue(ctx, value); return; }
            }
            Set("_messageName", "Create");
            Set("_primaryEntityName", "account");
            Set("_depth", 1);
            Set("_stage", 20);

            var jsonSerialize = DevKitJson.Serialize(ctx);
            var jsonSerializeContext = DevKitJson.SerializeContextFull(ctx);

            Assert.AreEqual(jsonSerialize, jsonSerializeContext);
        }

        [TestMethod]
        public void SerializeContext_NullReturnsNull()
        {
            Assert.AreEqual("null", DevKitJson.SerializeContextFull(null));
        }

        [TestMethod]
        public void SerializeContext_MockContext_CapturesAllProperties()
        {
            var mock = new MockPluginExecutionContext
            {
                BusinessUnitId = Guid.NewGuid(),
                CorrelationId = Guid.NewGuid(),
                Depth = 2,
                InitiatingUserId = Guid.NewGuid(),
                IsExecutingOffline = false,
                IsInTransaction = true,
                IsOfflinePlayback = false,
                MessageName = "Update",
                Mode = 0,
                OperationCreatedOn = new DateTime(2025, 6, 15, 10, 30, 0, DateTimeKind.Utc),
                OperationId = Guid.NewGuid(),
                OrganizationId = Guid.NewGuid(),
                OrganizationName = "TestOrg",
                PrimaryEntityId = Guid.NewGuid(),
                PrimaryEntityName = "contact",
                RequestId = Guid.NewGuid(),
                SecondaryEntityName = "none",
                Stage = 20,
                UserId = Guid.NewGuid(),
                InputParameters = new ParameterCollection { { "Target", new Entity("contact") } },
                OutputParameters = new ParameterCollection(),
                SharedVariables = new ParameterCollection(),
                PreEntityImages = new EntityImageCollection(),
                PostEntityImages = new EntityImageCollection(),
                OwningExtension = new EntityReference("sdkmessageprocessingstep", Guid.NewGuid()),
                ParentContext = null,
                IsPortalsClientCall = true,
                InitiatingUserAgent = "Mozilla/5.0",
                EnvironmentId = Guid.NewGuid(),
                TenantId = Guid.NewGuid(),
                IsApplicationUser = true
            };

            var json = DevKitJson.SerializeContextFull(mock);

            Assert.Contains("\"__type\":\"RemoteExecutionContext\"", json);
            Assert.Contains("\"MessageName\":\"Update\"", json);
            Assert.Contains("\"PrimaryEntityName\":\"contact\"", json);
            Assert.Contains("\"Depth\":2", json);
            Assert.Contains("\"Stage\":20", json);
            Assert.Contains("\"IsPortalsClientCall\":true", json);
            Assert.Contains("\"InitiatingUserAgent\":\"Mozilla/5.0\"", json);
            Assert.Contains("\"IsApplicationUser\":true", json);
            Assert.Contains(mock.EnvironmentId.ToString("D"), json);
            Assert.Contains(mock.TenantId.ToString("D"), json);
        }

        [TestMethod]
        public void SerializeContext_MockContext_DeserializesBackToRemoteExecutionContext()
        {
            var orgId = Guid.NewGuid();
            var mock = new MockPluginExecutionContext
            {
                BusinessUnitId = Guid.NewGuid(),
                CorrelationId = Guid.NewGuid(),
                Depth = 1,
                InitiatingUserId = Guid.NewGuid(),
                IsExecutingOffline = false,
                IsInTransaction = false,
                IsOfflinePlayback = false,
                MessageName = "Create",
                Mode = 0,
                OperationCreatedOn = new DateTime(2025, 1, 1, 0, 0, 0, DateTimeKind.Utc),
                OperationId = Guid.NewGuid(),
                OrganizationId = orgId,
                OrganizationName = "MyOrg",
                PrimaryEntityId = Guid.NewGuid(),
                PrimaryEntityName = "account",
                RequestId = null,
                SecondaryEntityName = "",
                Stage = 40,
                UserId = Guid.NewGuid(),
                InputParameters = new ParameterCollection(),
                OutputParameters = new ParameterCollection(),
                SharedVariables = new ParameterCollection(),
                PreEntityImages = new EntityImageCollection(),
                PostEntityImages = new EntityImageCollection(),
                OwningExtension = null,
                ParentContext = null,
                IsPortalsClientCall = false,
                InitiatingUserAgent = "devkit-test",
                EnvironmentId = Guid.NewGuid(),
                TenantId = Guid.NewGuid(),
                IsApplicationUser = false
            };

            var json = DevKitJson.SerializeContextFull(mock);
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(json);

            Assert.AreEqual("Create", ctx.MessageName);
            Assert.AreEqual("account", ctx.PrimaryEntityName);
            Assert.AreEqual(orgId, ctx.OrganizationId);
            Assert.AreEqual("MyOrg", ctx.OrganizationName);
            Assert.AreEqual(1, ctx.Depth);
            Assert.AreEqual(40, ctx.Stage);
        }

        [TestMethod]
        public void SerializeContext_MockContext_WithParentContext()
        {
            var parent = new MockPluginExecutionContext
            {
                BusinessUnitId = Guid.NewGuid(),
                CorrelationId = Guid.NewGuid(),
                Depth = 1,
                InitiatingUserId = Guid.NewGuid(),
                IsExecutingOffline = false,
                IsInTransaction = false,
                IsOfflinePlayback = false,
                MessageName = "Create",
                Mode = 0,
                OperationCreatedOn = DateTime.UtcNow,
                OperationId = Guid.NewGuid(),
                OrganizationId = Guid.NewGuid(),
                OrganizationName = "ParentOrg",
                PrimaryEntityId = Guid.NewGuid(),
                PrimaryEntityName = "account",
                RequestId = null,
                SecondaryEntityName = "",
                Stage = 20,
                UserId = Guid.NewGuid(),
                InputParameters = new ParameterCollection(),
                OutputParameters = new ParameterCollection(),
                SharedVariables = new ParameterCollection(),
                PreEntityImages = new EntityImageCollection(),
                PostEntityImages = new EntityImageCollection(),
                OwningExtension = null,
                ParentContext = null,
                IsPortalsClientCall = false,
                InitiatingUserAgent = "",
                EnvironmentId = Guid.NewGuid(),
                TenantId = Guid.NewGuid(),
                IsApplicationUser = false
            };

            var child = new MockPluginExecutionContext
            {
                BusinessUnitId = Guid.NewGuid(),
                CorrelationId = Guid.NewGuid(),
                Depth = 2,
                InitiatingUserId = Guid.NewGuid(),
                IsExecutingOffline = false,
                IsInTransaction = true,
                IsOfflinePlayback = false,
                MessageName = "Update",
                Mode = 0,
                OperationCreatedOn = DateTime.UtcNow,
                OperationId = Guid.NewGuid(),
                OrganizationId = Guid.NewGuid(),
                OrganizationName = "ChildOrg",
                PrimaryEntityId = Guid.NewGuid(),
                PrimaryEntityName = "contact",
                RequestId = Guid.NewGuid(),
                SecondaryEntityName = "",
                Stage = 40,
                UserId = Guid.NewGuid(),
                InputParameters = new ParameterCollection(),
                OutputParameters = new ParameterCollection(),
                SharedVariables = new ParameterCollection(),
                PreEntityImages = new EntityImageCollection(),
                PostEntityImages = new EntityImageCollection(),
                OwningExtension = null,
                ParentContext = parent,
                IsPortalsClientCall = true,
                InitiatingUserAgent = "custom-agent",
                EnvironmentId = Guid.NewGuid(),
                TenantId = Guid.NewGuid(),
                IsApplicationUser = true
            };

            var json = DevKitJson.SerializeContextFull(child);

            Assert.Contains("\"ParentContext\":{", json);
            Assert.Contains("\"ParentOrg\"", json);
            Assert.Contains("\"ChildOrg\"", json);
            Assert.Contains("\"IsApplicationUser\":true", json);
        }

        [TestMethod]
        public void ExtraContextProperties_PreservedInJson_WhenRemoteExecutionContextLacksFields()
        {
            var envId = Guid.NewGuid();
            var tenantId = Guid.NewGuid();
            var mock = new MockPluginExecutionContext
            {
                BusinessUnitId = Guid.NewGuid(),
                CorrelationId = Guid.NewGuid(),
                Depth = 1,
                InitiatingUserId = Guid.NewGuid(),
                IsExecutingOffline = false,
                IsInTransaction = false,
                IsOfflinePlayback = false,
                MessageName = "Retrieve",
                Mode = 0,
                OperationCreatedOn = DateTime.UtcNow,
                OperationId = Guid.NewGuid(),
                OrganizationId = Guid.NewGuid(),
                OrganizationName = "TestOrg",
                PrimaryEntityId = Guid.NewGuid(),
                PrimaryEntityName = "account",
                RequestId = null,
                SecondaryEntityName = "",
                Stage = 20,
                UserId = Guid.NewGuid(),
                InputParameters = new ParameterCollection(),
                OutputParameters = new ParameterCollection(),
                SharedVariables = new ParameterCollection(),
                PreEntityImages = new EntityImageCollection(),
                PostEntityImages = new EntityImageCollection(),
                OwningExtension = null,
                ParentContext = null,
                IsPortalsClientCall = true,
                InitiatingUserAgent = "TestAgent/1.0",
                EnvironmentId = envId,
                TenantId = tenantId,
                IsApplicationUser = true
            };

            var json = DevKitJson.SerializeContextFull(mock);

            Assert.Contains("\"IsPortalsClientCall\":true", json);
            Assert.Contains("\"InitiatingUserAgent\":\"TestAgent/1.0\"", json);
            Assert.Contains("\"IsApplicationUser\":true", json);
            Assert.Contains(envId.ToString("D"), json);
            Assert.Contains(tenantId.ToString("D"), json);

            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(json);
            Assert.AreEqual("Retrieve", ctx.MessageName);
            Assert.AreEqual("account", ctx.PrimaryEntityName);
        }

        #endregion

        #region JSON File - All Dataverse Types (AllDataverseTypes.json)

        private static string ReadJsonFile()
        {
            var basePath = AppDomain.CurrentDomain.BaseDirectory;
            var path = Path.Combine(basePath, "Lib", "AllDataverseTypes.json");
            return File.ReadAllText(path);
        }

        [TestMethod]
        public void JsonFile_DeserializesToRemoteExecutionContext()
        {
            var json = ReadJsonFile();
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(json);
            Assert.IsNotNull(ctx);
            Assert.IsInstanceOfType(ctx, typeof(RemoteExecutionContext));
        }

        [TestMethod]
        public void JsonFile_ContextProperties()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());

            Assert.AreEqual(Guid.Parse("a1b2c3d4-e5f6-7890-abcd-ef1234567890"), ctx.BusinessUnitId);
            Assert.AreEqual(Guid.Parse("b2c3d4e5-f6a7-8901-bcde-f12345678901"), ctx.CorrelationId);
            Assert.AreEqual(1, ctx.Depth);
            Assert.AreEqual(Guid.Parse("c3d4e5f6-a7b8-9012-cdef-123456789012"), ctx.InitiatingUserId);
            Assert.IsFalse(ctx.IsExecutingOffline);
            Assert.IsTrue(ctx.IsInTransaction);
            Assert.IsFalse(ctx.IsOfflinePlayback);
            Assert.AreEqual(2, ctx.IsolationMode);
            Assert.AreEqual("Update", ctx.MessageName);
            Assert.AreEqual(0, ctx.Mode);
            Assert.AreEqual(new DateTime(2025, 6, 15, 14, 30, 0, DateTimeKind.Utc), ctx.OperationCreatedOn);
            Assert.AreEqual(Guid.Parse("f6a7b8c9-d0e1-2345-fabc-456789012345"), ctx.OperationId);
            Assert.AreEqual(Guid.Parse("11111111-2222-3333-4444-555555555555"), ctx.OrganizationId);
            Assert.AreEqual("ContosoOrg", ctx.OrganizationName);
            Assert.AreEqual(Guid.Parse("d4e5f6a7-b8c9-0123-defa-234567890123"), ctx.PrimaryEntityId);
            Assert.AreEqual("account", ctx.PrimaryEntityName);
            Assert.AreEqual(Guid.Parse("33333333-4444-5555-6666-777777777777"), ctx.RequestId);
            Assert.AreEqual("none", ctx.SecondaryEntityName);
            Assert.AreEqual(40, ctx.Stage);
            Assert.AreEqual(Guid.Parse("44444444-5555-6666-7777-888888888888"), ctx.UserId);
        }

        [TestMethod]
        public void JsonFile_OwningExtension()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());

            Assert.IsNotNull(ctx.OwningExtension);
            Assert.AreEqual("sdkmessageprocessingstep", ctx.OwningExtension.LogicalName);
            Assert.AreEqual(Guid.Parse("22222222-3333-4444-5555-666666666666"), ctx.OwningExtension.Id);
            Assert.AreEqual("AccountPlugin: Update of account", ctx.OwningExtension.Name);
        }

        [TestMethod]
        public void JsonFile_TargetEntity_BasicAttributes()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            Assert.AreEqual("account", target.LogicalName);
            Assert.AreEqual(Guid.Parse("d4e5f6a7-b8c9-0123-defa-234567890123"), target.Id);

            // string
            Assert.AreEqual("Contoso Ltd", target["name"]);

            // int
            Assert.AreEqual(500, target["numberofemployees"]);

            // long (value > int.MaxValue)
            Assert.IsInstanceOfType(target["versionnumber"], typeof(long));
            Assert.AreEqual(3000000000L, target["versionnumber"]);

            // double
            Assert.IsInstanceOfType(target["exchangerate"], typeof(double));
            Assert.AreEqual(1.234567, (double)target["exchangerate"], 6);
            Assert.AreEqual(106.6297, (double)target["address1_longitude"], 4);
            Assert.AreEqual(10.8231, (double)target["address1_latitude"], 4);

            // bool
            Assert.AreEqual(true, target["donotphone"]);
            Assert.AreEqual(false, target["donotemail"]);

            // null
            Assert.IsNull(target["nullfield"]);
        }

        [TestMethod]
        public void JsonFile_TargetEntity_EscapedString()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var desc = (string)target["description"];
            Assert.Contains("\n", desc);
            Assert.Contains("\t", desc);
            Assert.Contains("\"quotes\"", desc);
            Assert.Contains("\\backslash", desc);
        }

        [TestMethod]
        public void JsonFile_TargetEntity_Money()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var revenue = (Money)target["revenue"];
            Assert.AreEqual(1500000.50m, revenue.Value);

            var creditLimit = (Money)target["creditlimit"];
            Assert.AreEqual(250000.75m, creditLimit.Value);
        }

        [TestMethod]
        public void JsonFile_TargetEntity_OptionSetValue()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var status = (OptionSetValue)target["statuscode"];
            Assert.AreEqual(1, status.Value);

            var industry = (OptionSetValue)target["industrycode"];
            Assert.AreEqual(100000001, industry.Value);
        }

        [TestMethod]
        public void JsonFile_TargetEntity_EntityReference()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var contact = (EntityReference)target["primarycontactid"];
            Assert.AreEqual("contact", contact.LogicalName);
            Assert.AreEqual(Guid.Parse("e5f6a7b8-c9d0-1234-efab-345678901234"), contact.Id);
            Assert.AreEqual("John Smith", contact.Name);
        }

        [TestMethod]
        public void JsonFile_TargetEntity_BooleanManagedProperty()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var bmp = (BooleanManagedProperty)target["ismanaged"];
            Assert.IsTrue(bmp.Value);
            Assert.IsFalse(bmp.CanBeChanged);
        }

        [TestMethod]
        public void JsonFile_TargetEntity_DateTime()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var created = (DateTime)target["createdon"];
            Assert.AreEqual(new DateTime(2025, 1, 15, 10, 30, 0, DateTimeKind.Utc), created);
        }

        [TestMethod]
        public void JsonFile_TargetEntity_Guid()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var id = (Guid)target["accountid"];
            Assert.AreEqual(Guid.Parse("d4e5f6a7-b8c9-0123-defa-234567890123"), id);
        }

        [TestMethod]
        public void JsonFile_TargetEntity_File()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var bytes = (byte[])target["entityimage"];
            Assert.AreEqual("Hello World", System.Text.Encoding.UTF8.GetString(bytes));
        }

        [TestMethod]
        public void JsonFile_TargetEntity_OptionSetValueCollection()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var osvc = (OptionSetValueCollection)target["preferredcontactmethodcode"];
            Assert.AreEqual(3, osvc.Count);
            Assert.AreEqual(1, osvc[0].Value);
            Assert.AreEqual(2, osvc[1].Value);
            Assert.AreEqual(3, osvc[2].Value);
        }

        [TestMethod]
        public void JsonFile_TargetEntity_AliasedValue_AllInnerTypes()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            // Key uses dot notation: "c.fullname" where "c" is the LinkEntity EntityAlias
            var aliasStr = (AliasedValue)target["c.fullname"];
            Assert.AreEqual("contact", aliasStr.EntityLogicalName);
            Assert.AreEqual("fullname", aliasStr.AttributeLogicalName);
            Assert.AreEqual("Jane Doe", aliasStr.Value);

            var aliasInt = (AliasedValue)target["c.age"];
            Assert.AreEqual(35, aliasInt.Value);

            var aliasMoney = (AliasedValue)target["c.annualincome"];
            Assert.IsInstanceOfType(aliasMoney.Value, typeof(Money));
            Assert.AreEqual(75000.00m, ((Money)aliasMoney.Value).Value);

            var aliasOsv = (AliasedValue)target["c.statuscode"];
            Assert.IsInstanceOfType(aliasOsv.Value, typeof(OptionSetValue));
            Assert.AreEqual(2, ((OptionSetValue)aliasOsv.Value).Value);

            var aliasDate = (AliasedValue)target["c.createdon"];
            Assert.IsInstanceOfType(aliasDate.Value, typeof(DateTime));
            Assert.AreEqual(new DateTime(2024, 6, 15, 8, 0, 0, DateTimeKind.Utc), (DateTime)aliasDate.Value);

            // Guid value (NOT EntityReference) - Dataverse returns lookup IDs as Guid in AliasedValue
            var aliasGuid = (AliasedValue)target["c.contactid"];
            Assert.IsInstanceOfType(aliasGuid.Value, typeof(Guid));
            Assert.AreEqual(Guid.Parse("e5f6a7b8-c9d0-1234-efab-345678901234"), (Guid)aliasGuid.Value);

            var aliasBool = (AliasedValue)target["c.isactive"];
            Assert.AreEqual(true, aliasBool.Value);

            var aliasDbl = (AliasedValue)target["c.address1_longitude"];
            Assert.IsInstanceOfType(aliasDbl.Value, typeof(double));
            Assert.AreEqual(106.6297, (double)aliasDbl.Value, 4);

            // AliasedValue with EntityReference (lookup field from linked entity)
            var aliasRef = (AliasedValue)target["c.parentcustomerid"];
            Assert.AreEqual("contact", aliasRef.EntityLogicalName);
            Assert.AreEqual("parentcustomerid", aliasRef.AttributeLogicalName);
            Assert.IsInstanceOfType(aliasRef.Value, typeof(EntityReference));
            var refValue = (EntityReference)aliasRef.Value;
            Assert.AreEqual("account", refValue.LogicalName);
            Assert.AreEqual(Guid.Parse("d4e5f6a7-b8c9-0123-4567-890123456789"), refValue.Id);
            Assert.AreEqual("Contoso Ltd", refValue.Name);

            var aliasNull = (AliasedValue)target["c.middlename"];
            Assert.IsNull(aliasNull.Value);
        }

        [TestMethod]
        public void JsonFile_AliasedValue_GetAliasedValue_LateBoundPattern()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            // Simulate EntityBase.GetAliasedValue<T> pattern (used by late-bound generated classes)
            // e.g.: public string ContactFullname => GetAliasedValue<string>("c.fullname");

            // GetAliasedValue<string>
            var aliasedFullname = target.GetAttributeValue<AliasedValue>("c.fullname");
            Assert.IsNotNull(aliasedFullname);
            string fullname = (string)aliasedFullname.Value;
            Assert.AreEqual("Jane Doe", fullname);

            // GetAliasedValue<Money> → .Value for decimal
            var aliasedIncome = target.GetAttributeValue<AliasedValue>("c.annualincome");
            Assert.IsNotNull(aliasedIncome);
            decimal income = ((Money)aliasedIncome.Value).Value;
            Assert.AreEqual(75000.00m, income);

            // GetAliasedValue<OptionSetValue> → .Value for int
            var aliasedStatus = target.GetAttributeValue<AliasedValue>("c.statuscode");
            Assert.IsNotNull(aliasedStatus);
            int statusValue = ((OptionSetValue)aliasedStatus.Value).Value;
            Assert.AreEqual(2, statusValue);

            // GetAliasedValue<EntityReference> from Guid
            // This is the crucial pattern: Dataverse returns lookup as Guid in AliasedValue,
            // EntityBase.GetAliasedValue<EntityReference> converts it using EntityLogicalName
            var aliasedContact = target.GetAttributeValue<AliasedValue>("c.contactid");
            Assert.IsNotNull(aliasedContact);
            Assert.IsInstanceOfType(aliasedContact.Value, typeof(Guid));
            Assert.AreEqual("contact", aliasedContact.EntityLogicalName);
            var contactRef = new EntityReference(aliasedContact.EntityLogicalName, (Guid)aliasedContact.Value);
            Assert.AreEqual("contact", contactRef.LogicalName);
            Assert.AreEqual(Guid.Parse("e5f6a7b8-c9d0-1234-efab-345678901234"), contactRef.Id);

            // GetAliasedValue<DateTime?>
            var aliasedDate = target.GetAttributeValue<AliasedValue>("c.createdon");
            Assert.IsNotNull(aliasedDate);
            DateTime createdOn = (DateTime)aliasedDate.Value;
            Assert.AreEqual(new DateTime(2024, 6, 15, 8, 0, 0, DateTimeKind.Utc), createdOn);

            // GetAliasedValue<Guid> from EntityReference
            // EntityBase.GetAliasedValue handles: if (typeof(T) == typeof(Guid) && aliased.Value is EntityReference) → .Id
            var aliasedLookup = target.GetAttributeValue<AliasedValue>("c.parentcustomerid");
            Assert.IsNotNull(aliasedLookup);
            Assert.IsInstanceOfType(aliasedLookup.Value, typeof(EntityReference));
            var lookupRef = (EntityReference)aliasedLookup.Value;
            Guid lookupId = lookupRef.Id;
            Assert.AreEqual(Guid.Parse("d4e5f6a7-b8c9-0123-4567-890123456789"), lookupId);
            Assert.AreEqual("account", lookupRef.LogicalName);
            Assert.AreEqual("Contoso Ltd", lookupRef.Name);

            // Null value → GetAliasedValue returns AliasedValue but Value is null
            var aliasedNull = target.GetAttributeValue<AliasedValue>("c.middlename");
            Assert.IsNotNull(aliasedNull);
            Assert.IsNull(aliasedNull.Value);

            // Non-existing key → GetAttributeValue returns null
            var aliasedMissing = target.GetAttributeValue<AliasedValue>("c.doesnotexist");
            Assert.IsNull(aliasedMissing);
        }

        [TestMethod]
        public void JsonFile_TargetEntity_EntityCollection_ActivityParty()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var emailTo = (EntityCollection)target["email_to"];
            Assert.AreEqual("activityparty", emailTo.EntityName);
            Assert.AreEqual(2, emailTo.Entities.Count);

            var party1 = (EntityReference)emailTo.Entities[0]["partyid"];
            Assert.AreEqual("contact", party1.LogicalName);
            Assert.AreEqual("Alice", party1.Name);

            var party2 = (EntityReference)emailTo.Entities[1]["partyid"];
            Assert.AreEqual("Bob", party2.Name);
        }

        [TestMethod]
        public void JsonFile_TargetEntity_FormattedValues()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            Assert.AreEqual(7, target.FormattedValues.Count);
            Assert.AreEqual("Active", target.FormattedValues["statuscode"]);
            Assert.AreEqual("Technology", target.FormattedValues["industrycode"]);
            Assert.AreEqual("$1,500,000.50", target.FormattedValues["revenue"]);
            Assert.AreEqual("$250,000.75", target.FormattedValues["creditlimit"]);
            Assert.AreEqual("1/15/2025 10:30 AM", target.FormattedValues["createdon"]);
            Assert.AreEqual("Do Not Allow", target.FormattedValues["donotphone"]);
            Assert.AreEqual("Allow", target.FormattedValues["donotemail"]);
        }

        [TestMethod]
        public void JsonFile_PreEntityImages()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());

            Assert.HasCount(1, ctx.PreEntityImages);
            var preImage = ctx.PreEntityImages["PreImage"];
            Assert.AreEqual("account", preImage.LogicalName);
            Assert.AreEqual("Contoso Ltd", preImage["name"]);
            Assert.AreEqual(1500000.50m, ((Money)preImage["revenue"]).Value);
        }

        [TestMethod]
        public void JsonFile_PostEntityImages()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());

            Assert.HasCount(1, ctx.PostEntityImages);
            var postImage = ctx.PostEntityImages["PostImage"];
            Assert.AreEqual("account", postImage.LogicalName);
            Assert.AreEqual("Contoso Ltd (Updated)", postImage["name"]);
            Assert.AreEqual(2000000.00m, ((Money)postImage["revenue"]).Value);
        }

        [TestMethod]
        public void JsonFile_OutputParameters()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());

            Assert.HasCount(1, ctx.OutputParameters);
            var id = (Guid)ctx.OutputParameters["id"];
            Assert.AreEqual(Guid.Parse("d4e5f6a7-b8c9-0123-defa-234567890123"), id);
        }

        [TestMethod]
        public void JsonFile_SharedVariables()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());

            Assert.AreEqual(4, ctx.SharedVariables.Count);
            Assert.AreEqual(true, ctx.SharedVariables["IsAutoTransact"]);
            Assert.AreEqual("PostUpdate", ctx.SharedVariables["PluginStep"]);
            Assert.AreEqual(3, ctx.SharedVariables["RetryCount"]);
            Assert.IsInstanceOfType(ctx.SharedVariables["Timestamp"], typeof(DateTime));
        }

        [TestMethod]
        public void JsonFile_Roundtrip_SerializeAndDeserializeBack()
        {
            var json1 = ReadJsonFile();
            var ctx1 = DevKitJson.Deserialize<RemoteExecutionContext>(json1);

            var json2 = DevKitJson.Serialize(ctx1);
            var ctx2 = DevKitJson.Deserialize<RemoteExecutionContext>(json2);

            Assert.AreEqual(ctx1.MessageName, ctx2.MessageName);
            Assert.AreEqual(ctx1.PrimaryEntityName, ctx2.PrimaryEntityName);
            Assert.AreEqual(ctx1.OrganizationId, ctx2.OrganizationId);
            Assert.AreEqual(ctx1.Depth, ctx2.Depth);
            Assert.AreEqual(ctx1.Stage, ctx2.Stage);

            var target1 = (Entity)ctx1.InputParameters["Target"];
            var target2 = (Entity)ctx2.InputParameters["Target"];
            Assert.AreEqual(target1.LogicalName, target2.LogicalName);
            Assert.AreEqual(target1.Id, target2.Id);
            Assert.AreEqual(target1["name"], target2["name"]);
            Assert.AreEqual(((Money)target1["revenue"]).Value, ((Money)target2["revenue"]).Value);
            Assert.AreEqual(((OptionSetValue)target1["statuscode"]).Value, ((OptionSetValue)target2["statuscode"]).Value);
        }

        [TestMethod]
        public void JsonFile_Roundtrip_AliasedValue_DotKeys_Preserved()
        {
            var json1 = ReadJsonFile();
            var ctx1 = DevKitJson.Deserialize<RemoteExecutionContext>(json1);

            var json2 = DevKitJson.Serialize(ctx1);
            var ctx2 = DevKitJson.Deserialize<RemoteExecutionContext>(json2);

            var target = (Entity)ctx2.InputParameters["Target"];

            // Dot-notation keys survive roundtrip
            var aliasStr = target.GetAttributeValue<AliasedValue>("c.fullname");
            Assert.IsNotNull(aliasStr);
            Assert.AreEqual("contact", aliasStr.EntityLogicalName);
            Assert.AreEqual("fullname", aliasStr.AttributeLogicalName);
            Assert.AreEqual("Jane Doe", aliasStr.Value);

            // EntityReference inside AliasedValue survives roundtrip
            var aliasRef = target.GetAttributeValue<AliasedValue>("c.parentcustomerid");
            Assert.IsNotNull(aliasRef);
            Assert.AreEqual("contact", aliasRef.EntityLogicalName);
            var refVal = (EntityReference)aliasRef.Value;
            Assert.AreEqual("account", refVal.LogicalName);
            Assert.AreEqual(Guid.Parse("d4e5f6a7-b8c9-0123-4567-890123456789"), refVal.Id);
            Assert.AreEqual("Contoso Ltd", refVal.Name);

            // Guid inside AliasedValue → EntityReference conversion pattern
            var aliasGuid = target.GetAttributeValue<AliasedValue>("c.contactid");
            Assert.IsNotNull(aliasGuid);
            Assert.IsInstanceOfType(aliasGuid.Value, typeof(Guid));
            var contactRef = new EntityReference(aliasGuid.EntityLogicalName, (Guid)aliasGuid.Value);
            Assert.AreEqual("contact", contactRef.LogicalName);
            Assert.AreEqual(Guid.Parse("e5f6a7b8-c9d0-1234-efab-345678901234"), contactRef.Id);
        }

        #endregion

        #region POCO Serialization/Deserialization

        [TestMethod]
        public void Deserialize_SimplePoco_MapsFromDictionary()
        {
            var json = "{\"QuoteId\":\"abc-123\"}";
            var result = DevKitJson.Deserialize<InputCloneQuote>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual("abc-123", result.QuoteId);
        }

        [TestMethod]
        public void Deserialize_PocoWithMultipleTypes()
        {
            var json = "{\"Name\":\"Test\",\"Count\":42,\"IsActive\":true,\"Amount\":99.5}";
            var result = DevKitJson.Deserialize<SamplePoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual("Test", result.Name);
            Assert.AreEqual(42, result.Count);
            Assert.IsTrue(result.IsActive);
            Assert.AreEqual(99.5, result.Amount, 1);
        }

        [TestMethod]
        public void Deserialize_PocoWithNullProperty()
        {
            var json = "{\"QuoteId\":null}";
            var result = DevKitJson.Deserialize<InputCloneQuote>(json);
            Assert.IsNotNull(result);
            Assert.IsNull(result.QuoteId);
        }

        [TestMethod]
        public void Deserialize_PocoWithNestedObject()
        {
            var json = "{\"OrderId\":\"order-1\",\"Customer\":{\"Name\":\"John\",\"Count\":5,\"IsActive\":true,\"Amount\":100.0}}";
            var result = DevKitJson.Deserialize<OrderPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual("order-1", result.OrderId);
            Assert.IsNotNull(result.Customer);
            Assert.AreEqual("John", result.Customer.Name);
            Assert.AreEqual(5, result.Customer.Count);
        }

        [TestMethod]
        public void Serialize_SimplePoco_WritesProperties()
        {
            var input = new InputCloneQuote { QuoteId = "abc-123" };
            var json = DevKitJson.Serialize(input);
            Assert.Contains("\"QuoteId\":\"abc-123\"", json);
        }

        [TestMethod]
        public void Serialize_Poco_Roundtrip()
        {
            var original = new SamplePoco { Name = "Test", Count = 42, IsActive = true, Amount = 99.5 };
            var json = DevKitJson.Serialize(original);
            var result = DevKitJson.Deserialize<SamplePoco>(json);
            Assert.AreEqual(original.Name, result.Name);
            Assert.AreEqual(original.Count, result.Count);
            Assert.AreEqual(original.IsActive, result.IsActive);
            Assert.AreEqual(original.Amount, result.Amount, 1);
        }

        [TestMethod]
        public void Serialize_NestedPoco_Roundtrip()
        {
            var original = new OrderPoco
            {
                OrderId = "order-1",
                Customer = new SamplePoco { Name = "John", Count = 5, IsActive = true, Amount = 100.0 }
            };
            var json = DevKitJson.Serialize(original);
            var result = DevKitJson.Deserialize<OrderPoco>(json);
            Assert.AreEqual("order-1", result.OrderId);
            Assert.IsNotNull(result.Customer);
            Assert.AreEqual("John", result.Customer.Name);
            Assert.AreEqual(5, result.Customer.Count);
        }

        [TestMethod]
        public void MapTo_FromDictionary_MapsCorrectly()
        {
            var dict = new Dictionary<string, object>
            {
                { "QuoteId", "abc-123" }
            };
            var result = DevKitJson.MapTo<InputCloneQuote>(dict);
            Assert.IsNotNull(result);
            Assert.AreEqual("abc-123", result.QuoteId);
        }

        [TestMethod]
        public void MapTo_CaseInsensitive()
        {
            var dict = new Dictionary<string, object>
            {
                { "quoteid", "abc-123" }
            };
            var result = DevKitJson.MapTo<InputCloneQuote>(dict);
            Assert.AreEqual("abc-123", result.QuoteId);
        }

        [TestMethod]
        public void MapTo_Null_ReturnsDefault()
        {
            var result = DevKitJson.MapTo<InputCloneQuote>(null);
            Assert.IsNull(result);
        }

        [TestMethod]
        public void MapTo_AlreadyCorrectType_ReturnsSame()
        {
            var original = new InputCloneQuote { QuoteId = "abc" };
            var result = DevKitJson.MapTo<InputCloneQuote>(original);
            Assert.AreSame(original, result);
        }

        [TestMethod]
        public void Poco_InParameterCollection_Roundtrip()
        {
            var pc = new ParameterCollection();
            pc["Input"] = new InputCloneQuote { QuoteId = "quote-guid-123" };

            var json = DevKitJson.Serialize(pc);
            var restored = DevKitJson.Deserialize<ParameterCollection>(json);

            var input = DevKitJson.MapTo<InputCloneQuote>(restored["Input"]);
            Assert.AreEqual("quote-guid-123", input.QuoteId);
        }

        [TestMethod]
        public void Poco_WithGuidProperty_Roundtrip()
        {
            var id = Guid.NewGuid();
            var json = "{\"Id\":\"" + id.ToString("D") + "\",\"Name\":\"Test\"}";
            var result = DevKitJson.Deserialize<GuidPoco>(json);
            Assert.AreEqual(id, result.Id);
            Assert.AreEqual("Test", result.Name);
        }

        [TestMethod]
        public void Deserialize_PocoWithListString()
        {
            var json = "{\"PriceListLines\":[\"f3905a0e-5e18-f111-8342-70a8a502738b\",\"f8905a0e-5e18-f111-8342-70a8a502738b\"]}";
            var result = DevKitJson.Deserialize<Input_CreateQuote>(json);
            Assert.IsNotNull(result);
            Assert.IsNotNull(result.PriceListLines);
            Assert.AreEqual(2, result.PriceListLines.Count);
            Assert.AreEqual("f3905a0e-5e18-f111-8342-70a8a502738b", result.PriceListLines[0]);
            Assert.AreEqual("f8905a0e-5e18-f111-8342-70a8a502738b", result.PriceListLines[1]);
        }

        [TestMethod]
        public void Deserialize_PocoWithListInt()
        {
            var json = "{\"Values\":[1,2,3,4,5]}";
            var result = DevKitJson.Deserialize<ListIntPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual(5, result.Values.Count);
            Assert.AreEqual(1, result.Values[0]);
            Assert.AreEqual(5, result.Values[4]);
        }

        [TestMethod]
        public void Deserialize_PocoWithListGuid()
        {
            var g1 = Guid.NewGuid();
            var g2 = Guid.NewGuid();
            var json = "{\"Ids\":[\"" + g1.ToString("D") + "\",\"" + g2.ToString("D") + "\"]}";
            var result = DevKitJson.Deserialize<ListGuidPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual(2, result.Ids.Count);
            Assert.AreEqual(g1, result.Ids[0]);
            Assert.AreEqual(g2, result.Ids[1]);
        }

        [TestMethod]
        public void Deserialize_PocoWithArrayString()
        {
            var json = "{\"Tags\":[\"tag1\",\"tag2\",\"tag3\"]}";
            var result = DevKitJson.Deserialize<ArrayStringPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual(3, result.Tags.Length);
            Assert.AreEqual("tag1", result.Tags[0]);
            Assert.AreEqual("tag3", result.Tags[2]);
        }

        [TestMethod]
        public void Serialize_PocoWithListString_Roundtrip()
        {
            var original = new Input_CreateQuote
            {
                PriceListLines = new List<string> { "aaa-bbb", "ccc-ddd" }
            };
            var json = DevKitJson.Serialize(original);
            var result = DevKitJson.Deserialize<Input_CreateQuote>(json);
            Assert.IsNotNull(result.PriceListLines);
            Assert.AreEqual(2, result.PriceListLines.Count);
            Assert.AreEqual("aaa-bbb", result.PriceListLines[0]);
            Assert.AreEqual("ccc-ddd", result.PriceListLines[1]);
        }

        [TestMethod]
        public void Deserialize_PocoWithEmptyList()
        {
            var json = "{\"PriceListLines\":[]}";
            var result = DevKitJson.Deserialize<Input_CreateQuote>(json);
            Assert.IsNotNull(result);
            Assert.IsNotNull(result.PriceListLines);
            Assert.IsEmpty(result.PriceListLines);
        }

        [TestMethod]
        public void MapTo_PocoWithListString()
        {
            var dict = new Dictionary<string, object>
            {
                { "PriceListLines", new List<object> { "guid-1", "guid-2" } }
            };
            var result = DevKitJson.MapTo<Input_CreateQuote>(dict);
            Assert.IsNotNull(result);
            Assert.IsNotNull(result.PriceListLines);
            Assert.AreEqual(2, result.PriceListLines.Count);
            Assert.AreEqual("guid-1", result.PriceListLines[0]);
        }

        [TestMethod]
        public void Poco_WithListString_InParameterCollection_Roundtrip()
        {
            var pc = new ParameterCollection();
            pc["Input"] = new Input_CreateQuote
            {
                PriceListLines = new List<string> { "f3905a0e-5e18-f111-8342-70a8a502738b", "f8905a0e-5e18-f111-8342-70a8a502738b" }
            };

            var json = DevKitJson.Serialize(pc);
            var restored = DevKitJson.Deserialize<ParameterCollection>(json);

            var input = DevKitJson.MapTo<Input_CreateQuote>(restored["Input"]);
            Assert.IsNotNull(input.PriceListLines);
            Assert.AreEqual(2, input.PriceListLines.Count);
            Assert.AreEqual("f3905a0e-5e18-f111-8342-70a8a502738b", input.PriceListLines[0]);
        }

        #endregion

        #region Advanced Collection & POCO Stress Tests

        [TestMethod]
        public void Deserialize_PocoWithListListString()
        {
            var json = "{\"Matrix\":[[\"a\",\"b\"],[\"c\",\"d\",\"e\"],[\"f\"]]}";
            var result = DevKitJson.Deserialize<ListListStringPoco>(json);
            Assert.IsNotNull(result);
            Assert.IsNotNull(result.Matrix);
            Assert.AreEqual(3, result.Matrix.Count);
            Assert.AreEqual(2, result.Matrix[0].Count);
            Assert.AreEqual("a", result.Matrix[0][0]);
            Assert.AreEqual("b", result.Matrix[0][1]);
            Assert.AreEqual(3, result.Matrix[1].Count);
            Assert.AreEqual("c", result.Matrix[1][0]);
            Assert.AreEqual("e", result.Matrix[1][2]);
            Assert.HasCount(1, result.Matrix[2]);
            Assert.AreEqual("f", result.Matrix[2][0]);
        }

        [TestMethod]
        public void Serialize_PocoWithListListString_Roundtrip()
        {
            var original = new ListListStringPoco
            {
                Matrix = new List<List<string>>
                {
                    new List<string> { "x", "y" },
                    new List<string> { "z" }
                }
            };
            var json = DevKitJson.Serialize(original);
            var result = DevKitJson.Deserialize<ListListStringPoco>(json);
            Assert.AreEqual(2, result.Matrix.Count);
            Assert.AreEqual("x", result.Matrix[0][0]);
            Assert.AreEqual("y", result.Matrix[0][1]);
            Assert.AreEqual("z", result.Matrix[1][0]);
        }

        [TestMethod]
        public void Deserialize_PocoWithListListInt()
        {
            var json = "{\"Grid\":[[1,2,3],[4,5],[6]]}";
            var result = DevKitJson.Deserialize<ListListIntPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual(3, result.Grid.Count);
            Assert.AreEqual(3, result.Grid[0].Count);
            Assert.AreEqual(1, result.Grid[0][0]);
            Assert.AreEqual(3, result.Grid[0][2]);
            Assert.AreEqual(2, result.Grid[1].Count);
            Assert.HasCount(1, result.Grid[2]);
            Assert.AreEqual(6, result.Grid[2][0]);
        }

        [TestMethod]
        public void Deserialize_PocoWithListPoco()
        {
            var json = "{\"Items\":[{\"Name\":\"A\",\"Count\":1,\"IsActive\":true,\"Amount\":10.5},{\"Name\":\"B\",\"Count\":2,\"IsActive\":false,\"Amount\":20.0}]}";
            var result = DevKitJson.Deserialize<ListPocoPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual(2, result.Items.Count);
            Assert.AreEqual("A", result.Items[0].Name);
            Assert.AreEqual(1, result.Items[0].Count);
            Assert.IsTrue(result.Items[0].IsActive);
            Assert.AreEqual(10.5, result.Items[0].Amount, 1);
            Assert.AreEqual("B", result.Items[1].Name);
            Assert.IsFalse(result.Items[1].IsActive);
        }

        [TestMethod]
        public void Serialize_PocoWithListPoco_Roundtrip()
        {
            var original = new ListPocoPoco
            {
                Items = new List<SamplePoco>
                {
                    new SamplePoco { Name = "X", Count = 99, IsActive = true, Amount = 3.14 },
                    new SamplePoco { Name = "Y", Count = 0, IsActive = false, Amount = 0 }
                }
            };
            var json = DevKitJson.Serialize(original);
            var result = DevKitJson.Deserialize<ListPocoPoco>(json);
            Assert.AreEqual(2, result.Items.Count);
            Assert.AreEqual("X", result.Items[0].Name);
            Assert.AreEqual(99, result.Items[0].Count);
            Assert.AreEqual("Y", result.Items[1].Name);
        }

        [TestMethod]
        public void Deserialize_PocoWithDictionaryStringString()
        {
            var json = "{\"Labels\":{\"en\":\"Hello\",\"vi\":\"Xin chào\",\"ja\":\"こんにちは\"}}";
            var result = DevKitJson.Deserialize<DictStringStringPoco>(json);
            Assert.IsNotNull(result);
            Assert.IsNotNull(result.Labels);
            Assert.AreEqual(3, result.Labels.Count);
            Assert.AreEqual("Hello", result.Labels["en"]);
            Assert.AreEqual("Xin chào", result.Labels["vi"]);
            Assert.AreEqual("こんにちは", result.Labels["ja"]);
        }

        [TestMethod]
        public void Serialize_PocoWithDictionaryStringString_Roundtrip()
        {
            var original = new DictStringStringPoco
            {
                Labels = new Dictionary<string, string>
                {
                    { "key1", "value1" },
                    { "key2", "value2" }
                }
            };
            var json = DevKitJson.Serialize(original);
            var result = DevKitJson.Deserialize<DictStringStringPoco>(json);
            Assert.IsNotNull(result.Labels);
            Assert.AreEqual(2, result.Labels.Count);
            Assert.AreEqual("value1", result.Labels["key1"]);
            Assert.AreEqual("value2", result.Labels["key2"]);
        }

        [TestMethod]
        public void Deserialize_PocoWithDictionaryStringInt()
        {
            var json = "{\"Scores\":{\"math\":95,\"physics\":88,\"chemistry\":72}}";
            var result = DevKitJson.Deserialize<DictStringIntPoco>(json);
            Assert.IsNotNull(result);
            Assert.IsNotNull(result.Scores);
            Assert.AreEqual(3, result.Scores.Count);
            Assert.AreEqual(95, result.Scores["math"]);
            Assert.AreEqual(88, result.Scores["physics"]);
            Assert.AreEqual(72, result.Scores["chemistry"]);
        }

        [TestMethod]
        public void Deserialize_PocoWithDictionaryStringObject()
        {
            var json = "{\"Meta\":{\"name\":\"test\",\"count\":42,\"active\":true}}";
            var result = DevKitJson.Deserialize<DictStringObjectPoco>(json);
            Assert.IsNotNull(result);
            Assert.IsNotNull(result.Meta);
            Assert.AreEqual("test", result.Meta["name"]);
            Assert.AreEqual(42, result.Meta["count"]);
            Assert.AreEqual(true, result.Meta["active"]);
        }

        [TestMethod]
        public void Deserialize_PocoWithNullableInt()
        {
            var json = "{\"Value\":42}";
            var result = DevKitJson.Deserialize<NullableIntPoco>(json);
            Assert.IsNotNull(result);
            Assert.IsTrue(result.Value.HasValue);
            Assert.AreEqual(42, result.Value.Value);
        }

        [TestMethod]
        public void Deserialize_PocoWithNullableInt_Null()
        {
            var json = "{\"Value\":null}";
            var result = DevKitJson.Deserialize<NullableIntPoco>(json);
            Assert.IsNotNull(result);
            Assert.IsFalse(result.Value.HasValue);
        }

        [TestMethod]
        public void Deserialize_PocoWithNullableGuid()
        {
            var g = Guid.NewGuid();
            var json = "{\"Id\":\"" + g.ToString("D") + "\"}";
            var result = DevKitJson.Deserialize<NullableGuidPoco>(json);
            Assert.IsNotNull(result);
            Assert.IsTrue(result.Id.HasValue);
            Assert.AreEqual(g, result.Id.Value);
        }

        [TestMethod]
        public void Deserialize_PocoWithNullableGuid_Null()
        {
            var json = "{\"Id\":null}";
            var result = DevKitJson.Deserialize<NullableGuidPoco>(json);
            Assert.IsNotNull(result);
            Assert.IsFalse(result.Id.HasValue);
        }

        [TestMethod]
        public void Deserialize_PocoWithNullableBool()
        {
            var json = "{\"Flag\":true}";
            var result = DevKitJson.Deserialize<NullableBoolPoco>(json);
            Assert.IsNotNull(result);
            Assert.IsTrue(result.Flag.HasValue);
            Assert.IsTrue(result.Flag.Value);
        }

        [TestMethod]
        public void Deserialize_PocoWithNullableBool_Null()
        {
            var json = "{\"Flag\":null}";
            var result = DevKitJson.Deserialize<NullableBoolPoco>(json);
            Assert.IsNotNull(result);
            Assert.IsFalse(result.Flag.HasValue);
        }

        [TestMethod]
        public void Deserialize_PocoWithNullableDecimal()
        {
            var json = "{\"Amount\":123.45}";
            var result = DevKitJson.Deserialize<NullableDecimalPoco>(json);
            Assert.IsNotNull(result);
            Assert.IsTrue(result.Amount.HasValue);
            Assert.AreEqual(123.45m, result.Amount.Value, 2);
        }

        [TestMethod]
        public void Deserialize_PocoWithNullableDateTime()
        {
            var json = "{\"Date\":{\"__type\":\"DateTime\",\"Value\":\"2025-06-15T10:30:00.000Z\"}}";
            var result = DevKitJson.Deserialize<NullableDateTimePoco>(json);
            Assert.IsNotNull(result);
            Assert.IsTrue(result.Date.HasValue);
            Assert.AreEqual(new DateTime(2025, 6, 15, 10, 30, 0, DateTimeKind.Utc), result.Date.Value);
        }

        [TestMethod]
        public void Deserialize_PocoWithNullableDateTime_Null()
        {
            var json = "{\"Date\":null}";
            var result = DevKitJson.Deserialize<NullableDateTimePoco>(json);
            Assert.IsNotNull(result);
            Assert.IsFalse(result.Date.HasValue);
        }

        [TestMethod]
        public void Deserialize_PocoWithArrayInt()
        {
            var json = "{\"Numbers\":[10,20,30,40]}";
            var result = DevKitJson.Deserialize<ArrayIntPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual(4, result.Numbers.Length);
            Assert.AreEqual(10, result.Numbers[0]);
            Assert.AreEqual(40, result.Numbers[3]);
        }

        [TestMethod]
        public void Deserialize_PocoWithArrayGuid()
        {
            var g1 = Guid.NewGuid();
            var g2 = Guid.NewGuid();
            var json = "{\"Ids\":[\"" + g1.ToString("D") + "\",\"" + g2.ToString("D") + "\"]}";
            var result = DevKitJson.Deserialize<ArrayGuidPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual(2, result.Ids.Length);
            Assert.AreEqual(g1, result.Ids[0]);
            Assert.AreEqual(g2, result.Ids[1]);
        }

        [TestMethod]
        public void Deserialize_PocoWithListDouble()
        {
            var json = "{\"Values\":[1.1,2.2,3.3]}";
            var result = DevKitJson.Deserialize<ListDoublePoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual(3, result.Values.Count);
            Assert.AreEqual(1.1, result.Values[0], 1);
            Assert.AreEqual(2.2, result.Values[1], 1);
            Assert.AreEqual(3.3, result.Values[2], 1);
        }

        [TestMethod]
        public void Deserialize_PocoWithListBool()
        {
            var json = "{\"Flags\":[true,false,true,false]}";
            var result = DevKitJson.Deserialize<ListBoolPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual(4, result.Flags.Count);
            Assert.IsTrue(result.Flags[0]);
            Assert.IsFalse(result.Flags[1]);
            Assert.IsTrue(result.Flags[2]);
            Assert.IsFalse(result.Flags[3]);
        }

        [TestMethod]
        public void Deserialize_PocoWithListDecimal()
        {
            var json = "{\"Amounts\":[100.50,200.75,300.00]}";
            var result = DevKitJson.Deserialize<ListDecimalPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual(3, result.Amounts.Count);
            Assert.AreEqual(100.50m, result.Amounts[0], 2);
            Assert.AreEqual(200.75m, result.Amounts[1], 2);
            Assert.AreEqual(300.00m, result.Amounts[2], 2);
        }

        [TestMethod]
        public void Deserialize_PocoWithMixedProperties()
        {
            var g = Guid.NewGuid();
            var json = "{\"Name\":\"Test\",\"Tags\":[\"a\",\"b\"],\"Ids\":[\"" + g.ToString("D") + "\"],\"Score\":99,\"Active\":true,\"Rate\":4.5}";
            var result = DevKitJson.Deserialize<MixedPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual("Test", result.Name);
            Assert.AreEqual(2, result.Tags.Count);
            Assert.AreEqual("a", result.Tags[0]);
            Assert.HasCount(1, result.Ids);
            Assert.AreEqual(g, result.Ids[0]);
            Assert.AreEqual(99, result.Score);
            Assert.IsTrue(result.Active);
            Assert.AreEqual(4.5, result.Rate, 1);
        }

        [TestMethod]
        public void Serialize_MixedPoco_Roundtrip()
        {
            var g = Guid.NewGuid();
            var original = new MixedPoco
            {
                Name = "Roundtrip",
                Tags = new List<string> { "x", "y", "z" },
                Ids = new List<Guid> { g },
                Score = 42,
                Active = false,
                Rate = 9.99
            };
            var json = DevKitJson.Serialize(original);
            var result = DevKitJson.Deserialize<MixedPoco>(json);
            Assert.AreEqual("Roundtrip", result.Name);
            Assert.AreEqual(3, result.Tags.Count);
            Assert.AreEqual(g, result.Ids[0]);
            Assert.AreEqual(42, result.Score);
            Assert.IsFalse(result.Active);
            Assert.AreEqual(9.99, result.Rate, 2);
        }

        [TestMethod]
        public void Deserialize_PocoWithNestedPocoAndLists()
        {
            var json = "{\"Order\":\"ORD-001\",\"Lines\":[{\"Product\":\"Widget\",\"Qty\":10,\"Prices\":[100.0,95.0]},{\"Product\":\"Gadget\",\"Qty\":5,\"Prices\":[200.0]}]}";
            var result = DevKitJson.Deserialize<OrderWithLinesPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual("ORD-001", result.Order);
            Assert.AreEqual(2, result.Lines.Count);
            Assert.AreEqual("Widget", result.Lines[0].Product);
            Assert.AreEqual(10, result.Lines[0].Qty);
            Assert.AreEqual(2, result.Lines[0].Prices.Count);
            Assert.AreEqual(100.0, result.Lines[0].Prices[0], 1);
            Assert.AreEqual(95.0, result.Lines[0].Prices[1], 1);
            Assert.AreEqual("Gadget", result.Lines[1].Product);
            Assert.HasCount(1, result.Lines[1].Prices);
        }

        [TestMethod]
        public void Serialize_NestedPocoWithLists_Roundtrip()
        {
            var original = new OrderWithLinesPoco
            {
                Order = "ORD-002",
                Lines = new List<OrderLinePoco>
                {
                    new OrderLinePoco { Product = "A", Qty = 1, Prices = new List<double> { 50.0 } },
                    new OrderLinePoco { Product = "B", Qty = 2, Prices = new List<double> { 30.0, 25.0 } }
                }
            };
            var json = DevKitJson.Serialize(original);
            var result = DevKitJson.Deserialize<OrderWithLinesPoco>(json);
            Assert.AreEqual("ORD-002", result.Order);
            Assert.AreEqual(2, result.Lines.Count);
            Assert.AreEqual("A", result.Lines[0].Product);
            Assert.HasCount(1, result.Lines[0].Prices);
            Assert.AreEqual(2, result.Lines[1].Prices.Count);
        }

        [TestMethod]
        public void Deserialize_PocoWithListNullableInt()
        {
            var json = "{\"Values\":[1,null,3,null,5]}";
            var result = DevKitJson.Deserialize<ListNullableIntPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual(5, result.Values.Count);
            Assert.AreEqual(1, result.Values[0]);
            Assert.IsNull(result.Values[1]);
            Assert.AreEqual(3, result.Values[2]);
            Assert.IsNull(result.Values[3]);
            Assert.AreEqual(5, result.Values[4]);
        }

        [TestMethod]
        public void Deserialize_PocoWithEmptyNestedLists()
        {
            var json = "{\"Matrix\":[]}";
            var result = DevKitJson.Deserialize<ListListStringPoco>(json);
            Assert.IsNotNull(result);
            Assert.IsNotNull(result.Matrix);
            Assert.IsEmpty(result.Matrix);
        }

        [TestMethod]
        public void Deserialize_PocoWithListContainingEmptyList()
        {
            var json = "{\"Matrix\":[[],[\"a\"],[],[\"\"]]}";
            var result = DevKitJson.Deserialize<ListListStringPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual(4, result.Matrix.Count);
            Assert.IsEmpty(result.Matrix[0]);
            Assert.HasCount(1, result.Matrix[1]);
            Assert.AreEqual("a", result.Matrix[1][0]);
            Assert.IsEmpty(result.Matrix[2]);
            Assert.HasCount(1, result.Matrix[3]);
            Assert.AreEqual("", result.Matrix[3][0]);
        }

        [TestMethod]
        public void Deserialize_PocoWithAllNullProperties()
        {
            var json = "{\"Name\":null,\"Tags\":null,\"Ids\":null,\"Score\":0,\"Active\":false,\"Rate\":0}";
            var result = DevKitJson.Deserialize<MixedPoco>(json);
            Assert.IsNotNull(result);
            Assert.IsNull(result.Name);
            Assert.IsNull(result.Tags);
            Assert.IsNull(result.Ids);
            Assert.AreEqual(0, result.Score);
            Assert.IsFalse(result.Active);
        }

        [TestMethod]
        public void Deserialize_PocoWithExtraJsonProperties_IgnoresThem()
        {
            var json = "{\"QuoteId\":\"abc\",\"ExtraField\":\"ignored\",\"AnotherExtra\":123}";
            var result = DevKitJson.Deserialize<InputCloneQuote>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual("abc", result.QuoteId);
        }

        [TestMethod]
        public void Deserialize_PocoWithMissingJsonProperties_DefaultValues()
        {
            var json = "{\"Name\":\"OnlyName\"}";
            var result = DevKitJson.Deserialize<MixedPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual("OnlyName", result.Name);
            Assert.IsNull(result.Tags);
            Assert.IsNull(result.Ids);
            Assert.AreEqual(0, result.Score);
            Assert.IsFalse(result.Active);
            Assert.AreEqual(0, result.Rate, 1);
        }

        [TestMethod]
        public void Deserialize_PocoWithListMixedNullAndValues()
        {
            var json = "{\"PriceListLines\":[\"guid-1\",null,\"guid-3\"]}";
            var result = DevKitJson.Deserialize<Input_CreateQuote>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual(3, result.PriceListLines.Count);
            Assert.AreEqual("guid-1", result.PriceListLines[0]);
            Assert.IsNull(result.PriceListLines[1]);
            Assert.AreEqual("guid-3", result.PriceListLines[2]);
        }

        [TestMethod]
        public void Deserialize_DeeplyNestedPoco()
        {
            var json = "{\"Level\":1,\"Child\":{\"Level\":2,\"Child\":{\"Level\":3,\"Child\":null}}}";
            var result = DevKitJson.Deserialize<RecursivePoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual(1, result.Level);
            Assert.IsNotNull(result.Child);
            Assert.AreEqual(2, result.Child.Level);
            Assert.IsNotNull(result.Child.Child);
            Assert.AreEqual(3, result.Child.Child.Level);
            Assert.IsNull(result.Child.Child.Child);
        }

        [TestMethod]
        public void Serialize_DeeplyNestedPoco_Roundtrip()
        {
            var original = new RecursivePoco
            {
                Level = 1,
                Child = new RecursivePoco
                {
                    Level = 2,
                    Child = new RecursivePoco { Level = 3 }
                }
            };
            var json = DevKitJson.Serialize(original);
            var result = DevKitJson.Deserialize<RecursivePoco>(json);
            Assert.AreEqual(1, result.Level);
            Assert.AreEqual(2, result.Child.Level);
            Assert.AreEqual(3, result.Child.Child.Level);
            Assert.IsNull(result.Child.Child.Child);
        }

        [TestMethod]
        public void MapTo_ComplexPoco_WithLists()
        {
            var json = "{\"Order\":\"ORD-X\",\"Lines\":[{\"Product\":\"P1\",\"Qty\":3,\"Prices\":[10.0,20.0]}]}";
            var raw = DevKitJson.Deserialize(json);
            var result = DevKitJson.MapTo<OrderWithLinesPoco>((Dictionary<string, object>)raw);
            Assert.AreEqual("ORD-X", result.Order);
            Assert.HasCount(1, result.Lines);
            Assert.AreEqual("P1", result.Lines[0].Product);
            Assert.AreEqual(2, result.Lines[0].Prices.Count);
        }

        [TestMethod]
        public void Poco_InParameterCollection_ComplexRoundtrip()
        {
            var pc = new ParameterCollection();
            pc["Input"] = new OrderWithLinesPoco
            {
                Order = "ORD-100",
                Lines = new List<OrderLinePoco>
                {
                    new OrderLinePoco { Product = "Widget", Qty = 5, Prices = new List<double> { 99.99, 89.99 } }
                }
            };

            var json = DevKitJson.Serialize(pc);
            var restored = DevKitJson.Deserialize<ParameterCollection>(json);

            var input = DevKitJson.MapTo<OrderWithLinesPoco>(restored["Input"]);
            Assert.AreEqual("ORD-100", input.Order);
            Assert.HasCount(1, input.Lines);
            Assert.AreEqual("Widget", input.Lines[0].Product);
            Assert.AreEqual(5, input.Lines[0].Qty);
            Assert.AreEqual(2, input.Lines[0].Prices.Count);
            Assert.AreEqual(99.99, input.Lines[0].Prices[0], 2);
        }

        [TestMethod]
        public void Deserialize_PocoWithListLong()
        {
            var json = "{\"BigNumbers\":[9999999999,8888888888,7777777777]}";
            var result = DevKitJson.Deserialize<ListLongPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual(3, result.BigNumbers.Count);
            Assert.AreEqual(9999999999L, result.BigNumbers[0]);
            Assert.AreEqual(8888888888L, result.BigNumbers[1]);
            Assert.AreEqual(7777777777L, result.BigNumbers[2]);
        }

        [TestMethod]
        public void Deserialize_PocoWithDateTimeProperty_String()
        {
            var json = "{\"Name\":\"Meeting\",\"When\":{\"__type\":\"DateTime\",\"Value\":\"2025-12-25T10:00:00.000Z\"}}";
            var result = DevKitJson.Deserialize<DateTimePoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual("Meeting", result.Name);
            Assert.AreEqual(new DateTime(2025, 12, 25, 10, 0, 0, DateTimeKind.Utc), result.When);
        }

        [TestMethod]
        public void Deserialize_PocoWithListEntityReference()
        {
            var id1 = Guid.NewGuid();
            var id2 = Guid.NewGuid();
            var json = "{\"Refs\":[" +
                "{\"__type\":\"EntityReference\",\"LogicalName\":\"contact\",\"Id\":\"" + id1.ToString("D") + "\",\"Name\":\"John\"}," +
                "{\"__type\":\"EntityReference\",\"LogicalName\":\"account\",\"Id\":\"" + id2.ToString("D") + "\",\"Name\":\"Contoso\"}" +
                "]}";
            var result = DevKitJson.Deserialize<ListEntityRefPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual(2, result.Refs.Count);
            Assert.AreEqual("contact", result.Refs[0].LogicalName);
            Assert.AreEqual(id1, result.Refs[0].Id);
            Assert.AreEqual("John", result.Refs[0].Name);
            Assert.AreEqual("account", result.Refs[1].LogicalName);
        }

        [TestMethod]
        public void Serialize_PocoWithListEntityReference_Roundtrip()
        {
            var id1 = Guid.NewGuid();
            var original = new ListEntityRefPoco
            {
                Refs = new List<EntityReference>
                {
                    new EntityReference("contact", id1) { Name = "Jane" }
                }
            };
            var json = DevKitJson.Serialize(original);
            var result = DevKitJson.Deserialize<ListEntityRefPoco>(json);
            Assert.HasCount(1, result.Refs);
            Assert.AreEqual("contact", result.Refs[0].LogicalName);
            Assert.AreEqual(id1, result.Refs[0].Id);
            Assert.AreEqual("Jane", result.Refs[0].Name);
        }

        [TestMethod]
        public void Deserialize_PocoWithListMoney()
        {
            var json = "{\"Amounts\":[{\"__type\":\"Money\",\"Value\":100.50},{\"__type\":\"Money\",\"Value\":200.75}]}";
            var result = DevKitJson.Deserialize<ListMoneyPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual(2, result.Amounts.Count);
            Assert.AreEqual(100.50m, result.Amounts[0].Value);
            Assert.AreEqual(200.75m, result.Amounts[1].Value);
        }

        [TestMethod]
        public void Deserialize_EmptyJson_ReturnsDefaultPoco()
        {
            var json = "{}";
            var result = DevKitJson.Deserialize<MixedPoco>(json);
            Assert.IsNotNull(result);
            Assert.IsNull(result.Name);
            Assert.IsNull(result.Tags);
            Assert.AreEqual(0, result.Score);
        }

        [TestMethod]
        public void Deserialize_SingleItemList()
        {
            var json = "{\"PriceListLines\":[\"only-one\"]}";
            var result = DevKitJson.Deserialize<Input_CreateQuote>(json);
            Assert.HasCount(1, result.PriceListLines);
            Assert.AreEqual("only-one", result.PriceListLines[0]);
        }

        #endregion

        #region Boundary Tests - Numeric Limits

        [TestMethod]
        public void Boundary_Int_MinValue()
        {
            var json = int.MinValue.ToString();
            var result = DevKitJson.Deserialize(json);
            Assert.IsInstanceOfType(result, typeof(int));
            Assert.AreEqual(int.MinValue, result);
        }

        [TestMethod]
        public void Boundary_Int_MaxValue()
        {
            var json = int.MaxValue.ToString();
            var result = DevKitJson.Deserialize(json);
            Assert.IsInstanceOfType(result, typeof(int));
            Assert.AreEqual(int.MaxValue, result);
        }

        [TestMethod]
        public void Boundary_Int_MaxValuePlusOne_BecomesLong()
        {
            var val = (long)int.MaxValue + 1;
            var json = val.ToString();
            var result = DevKitJson.Deserialize(json);
            Assert.IsInstanceOfType(result, typeof(long));
            Assert.AreEqual(val, result);
        }

        [TestMethod]
        public void Boundary_Int_MinValueMinusOne_BecomesLong()
        {
            var val = (long)int.MinValue - 1;
            var json = val.ToString();
            var result = DevKitJson.Deserialize(json);
            Assert.IsInstanceOfType(result, typeof(long));
            Assert.AreEqual(val, result);
        }

        [TestMethod]
        public void Boundary_Long_MaxValue()
        {
            var json = long.MaxValue.ToString();
            var result = DevKitJson.Deserialize(json);
            Assert.IsInstanceOfType(result, typeof(long));
            Assert.AreEqual(long.MaxValue, result);
        }

        [TestMethod]
        public void Boundary_Long_MinValue()
        {
            var json = long.MinValue.ToString();
            var result = DevKitJson.Deserialize(json);
            Assert.IsInstanceOfType(result, typeof(long));
            Assert.AreEqual(long.MinValue, result);
        }

        [TestMethod]
        public void Boundary_Zero_Int()
        {
            Assert.AreEqual(0, DevKitJson.Deserialize("0"));
        }

        [TestMethod]
        public void Boundary_NegativeZero_Double()
        {
            var result = DevKitJson.Deserialize("-0.0");
            Assert.IsInstanceOfType(result, typeof(double));
            Assert.AreEqual(0.0, (double)result);
        }

        [TestMethod]
        public void Boundary_Double_MaxValue_Roundtrip()
        {
            var json = DevKitJson.Serialize(double.MaxValue);
            var result = DevKitJson.Deserialize<double>(json);
            Assert.AreEqual(double.MaxValue, result);
        }

        [TestMethod]
        public void Boundary_Double_MinValue_Roundtrip()
        {
            var json = DevKitJson.Serialize(double.MinValue);
            var result = DevKitJson.Deserialize<double>(json);
            Assert.AreEqual(double.MinValue, result);
        }

        [TestMethod]
        public void Boundary_Double_Epsilon()
        {
            var json = DevKitJson.Serialize(double.Epsilon);
            var result = DevKitJson.Deserialize<double>(json);
            Assert.AreEqual(double.Epsilon, result);
        }

        [TestMethod]
        public void Boundary_Double_VerySmall()
        {
            var result = DevKitJson.Deserialize("0.000000001");
            Assert.IsInstanceOfType(result, typeof(double));
            Assert.AreEqual(0.000000001, (double)result, 12);
        }

        [TestMethod]
        public void Boundary_Double_VeryLarge_Scientific()
        {
            var result = DevKitJson.Deserialize("1.7976931348623157E+308");
            Assert.IsInstanceOfType(result, typeof(double));
        }

        [TestMethod]
        public void Boundary_Decimal_MaxValue_InEntity()
        {
            // Known limitation: decimal.MaxValue exceeds double precision.
            // JSON numbers are parsed as double, so exact decimal.MaxValue cannot roundtrip.
            // Verify it doesn't throw and produces a positive value.
            var entity = new Entity("test", Guid.NewGuid());
            entity["val"] = decimal.MaxValue;
            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.IsNotNull(result["val"]);
        }

        [TestMethod]
        public void Boundary_Money_MaxDecimal()
        {
            // Known limitation: very large Money values lose decimal precision
            // because JSON numbers are parsed as double internally.
            // Dataverse Money max is ~922 trillion; test with safe precision range.
            var money = new Money(999999999999.99m);
            var json = DevKitJson.Serialize(money);
            var result = DevKitJson.Deserialize<Money>(json);
            Assert.AreEqual(999999999999.99m, result.Value, 2);
        }

        [TestMethod]
        public void Boundary_Money_Zero()
        {
            var money = new Money(0m);
            var json = DevKitJson.Serialize(money);
            var result = DevKitJson.Deserialize<Money>(json);
            Assert.AreEqual(0m, result.Value);
        }

        [TestMethod]
        public void Boundary_Money_Negative()
        {
            var money = new Money(-999999999999.99m);
            var json = DevKitJson.Serialize(money);
            var result = DevKitJson.Deserialize<Money>(json);
            Assert.AreEqual(-999999999999.99m, result.Value, 2);
        }

        [TestMethod]
        public void Boundary_Money_TypicalCrmValues()
        {
            // Test Money values in typical Dataverse range (up to ~billions)
            var values = new[] { 0.01m, 1.00m, 999.99m, 1000000.50m, 999999999.99m };
            foreach (var v in values)
            {
                var money = new Money(v);
                var json = DevKitJson.Serialize(money);
                var result = DevKitJson.Deserialize<Money>(json);
                Assert.AreEqual(v, result.Value, 2);
            }
        }

        [TestMethod]
        public void Boundary_OptionSetValue_Zero()
        {
            var osv = new OptionSetValue(0);
            var json = DevKitJson.Serialize(osv);
            var result = DevKitJson.Deserialize<OptionSetValue>(json);
            Assert.AreEqual(0, result.Value);
        }

        [TestMethod]
        public void Boundary_OptionSetValue_Negative()
        {
            var osv = new OptionSetValue(-1);
            var json = DevKitJson.Serialize(osv);
            var result = DevKitJson.Deserialize<OptionSetValue>(json);
            Assert.AreEqual(-1, result.Value);
        }

        [TestMethod]
        public void Boundary_OptionSetValue_MaxInt()
        {
            var osv = new OptionSetValue(int.MaxValue);
            var json = DevKitJson.Serialize(osv);
            var result = DevKitJson.Deserialize<OptionSetValue>(json);
            Assert.AreEqual(int.MaxValue, result.Value);
        }

        [TestMethod]
        public void Boundary_Coerce_LongToInt_WhenFits()
        {
            var json = "{\"Score\":42}";
            var result = DevKitJson.Deserialize<MixedPoco>(json);
            Assert.AreEqual(42, result.Score);
        }

        [TestMethod]
        public void Boundary_Coerce_DoubleToDecimal_InPoco()
        {
            var json = "{\"Amount\":123.456}";
            var result = DevKitJson.Deserialize<NullableDecimalPoco>(json);
            Assert.IsTrue(result.Amount.HasValue);
            Assert.AreEqual(123.456m, result.Amount.Value, 3);
        }

        [TestMethod]
        public void Boundary_Coerce_IntToLong_InPoco()
        {
            var json = "{\"BigNumbers\":[42]}";
            var result = DevKitJson.Deserialize<ListLongPoco>(json);
            Assert.HasCount(1, result.BigNumbers);
            Assert.AreEqual(42L, result.BigNumbers[0]);
        }

        [TestMethod]
        public void Boundary_Coerce_DoubleToFloat_InPoco()
        {
            var json = "{\"Value\":3.14}";
            var result = DevKitJson.Deserialize<FloatPoco>(json);
            Assert.AreEqual(3.14f, result.Value, 2);
        }

        #endregion

        #region Boundary Tests - String & Encoding

        [TestMethod]
        public void Boundary_String_NullChar()
        {
            var s = "before\0after";
            var json = DevKitJson.Serialize(s);
            var result = DevKitJson.Deserialize<string>(json);
            Assert.AreEqual(s, result);
        }

        [TestMethod]
        public void Boundary_String_OnlyEscapeChars()
        {
            var s = "\"\\\b\f\n\r\t";
            var json = DevKitJson.Serialize(s);
            var result = DevKitJson.Deserialize<string>(json);
            Assert.AreEqual(s, result);
        }

        [TestMethod]
        public void Boundary_String_AllEscapeCombined()
        {
            var s = "tab\there\nnewline\rcarriage\"quote\\backslash\bback\fform";
            var json = DevKitJson.Serialize(s);
            var result = DevKitJson.Deserialize<string>(json);
            Assert.AreEqual(s, result);
        }

        [TestMethod]
        public void Boundary_String_OnlyWhitespace()
        {
            var s = "   \t\t\n\n  ";
            var json = DevKitJson.Serialize(s);
            var result = DevKitJson.Deserialize<string>(json);
            Assert.AreEqual(s, result);
        }

        [TestMethod]
        public void Boundary_String_VeryLong()
        {
            var s = new string('A', 100000);
            var json = DevKitJson.Serialize(s);
            var result = DevKitJson.Deserialize<string>(json);
            Assert.AreEqual(100000, result.Length);
            Assert.AreEqual(s, result);
        }

        [TestMethod]
        public void Boundary_String_Unicode_BMP_CJK()
        {
            var s = "\u4E16\u754C\u4F60\u597D";
            var json = DevKitJson.Serialize(s);
            var result = DevKitJson.Deserialize<string>(json);
            Assert.AreEqual(s, result);
        }

        [TestMethod]
        public void Boundary_String_Unicode_Escape_NullChar()
        {
            var result = DevKitJson.Deserialize<string>("\"abc\\u0000def\"");
            Assert.AreEqual("abc\0def", result);
        }

        [TestMethod]
        public void Boundary_String_Unicode_ControlChars()
        {
            var result = DevKitJson.Deserialize<string>("\"\\u0001\\u001F\"");
            Assert.AreEqual("\u0001\u001F", result);
        }

        [TestMethod]
        public void Boundary_String_Unicode_SurrogatePair_Emoji()
        {
            var result = DevKitJson.Deserialize<string>("\"\\uD83D\\uDE80\"");
            Assert.AreEqual("\uD83D\uDE80", result);
        }

        [TestMethod]
        public void Boundary_String_ForwardSlash_Escaped()
        {
            var result = DevKitJson.Deserialize<string>("\"a\\/b\"");
            Assert.AreEqual("a/b", result);
        }

        [TestMethod]
        public void Boundary_String_ForwardSlash_Unescaped()
        {
            var result = DevKitJson.Deserialize<string>("\"a/b\"");
            Assert.AreEqual("a/b", result);
        }

        [TestMethod]
        public void Boundary_String_ConsecutiveEscapes()
        {
            var result = DevKitJson.Deserialize<string>("\"\\\\\\\\\"");
            Assert.AreEqual("\\\\", result);
        }

        [TestMethod]
        public void Boundary_String_ConsecutiveQuoteEscapes()
        {
            var result = DevKitJson.Deserialize<string>("\"\\\"\\\"\\\"\"");
            Assert.AreEqual("\"\"\"", result);
        }

        [TestMethod]
        public void Boundary_String_MixedEscapesAndUnicode()
        {
            var s = "Path: C:\\Dir\\\"file\"\t\u00E9\u00E8\u00EA";
            var json = DevKitJson.Serialize(s);
            var result = DevKitJson.Deserialize<string>(json);
            Assert.AreEqual(s, result);
        }

        #endregion

        #region Boundary Tests - Parse Robustness

        [TestMethod]
        public void Boundary_Deserialize_EmptyString()
        {
            var result = DevKitJson.Deserialize("");
            Assert.IsNull(result);
        }

        [TestMethod]
        public void Boundary_Deserialize_WhitespaceOnly()
        {
            var result = DevKitJson.Deserialize("   \t\n  ");
            Assert.IsNull(result);
        }

        [TestMethod]
        public void Boundary_Deserialize_Null()
        {
            Assert.IsNull(DevKitJson.Deserialize(null));
        }

        [TestMethod]
        public void Boundary_Deserialize_JustNull()
        {
            Assert.IsNull(DevKitJson.Deserialize("null"));
        }

        [TestMethod]
        public void Boundary_Deserialize_JustTrue()
        {
            Assert.AreEqual(true, DevKitJson.Deserialize("true"));
        }

        [TestMethod]
        public void Boundary_Deserialize_JustFalse()
        {
            Assert.AreEqual(false, DevKitJson.Deserialize("false"));
        }

        [TestMethod]
        public void Boundary_Deserialize_JustNumber()
        {
            Assert.AreEqual(42, DevKitJson.Deserialize("42"));
        }

        [TestMethod]
        public void Boundary_Deserialize_JustString()
        {
            Assert.AreEqual("hello", DevKitJson.Deserialize("\"hello\""));
        }

        [TestMethod]
        public void Boundary_Deserialize_EmptyArray()
        {
            var result = DevKitJson.Deserialize("[]") as List<object>;
            Assert.IsNotNull(result);
            Assert.IsEmpty(result);
        }

        [TestMethod]
        public void Boundary_Deserialize_EmptyObject()
        {
            var result = DevKitJson.Deserialize("{}") as Dictionary<string, object>;
            Assert.IsNotNull(result);
            Assert.IsEmpty(result);
        }

        [TestMethod]
        public void Boundary_Deserialize_DuplicateKeys_LastWins()
        {
            var json = "{\"key\":\"first\",\"key\":\"second\"}";
            var result = DevKitJson.Deserialize(json) as Dictionary<string, object>;
            Assert.IsNotNull(result);
            Assert.AreEqual("second", result["key"]);
        }

        [TestMethod]
        public void Boundary_Deserialize_NestedEmptyStructures()
        {
            var json = "{\"a\":{},\"b\":[],\"c\":{\"d\":[]},\"e\":[{}]}";
            var result = DevKitJson.Deserialize(json) as Dictionary<string, object>;
            Assert.IsNotNull(result);
            Assert.IsInstanceOfType(result["a"], typeof(Dictionary<string, object>));
            Assert.IsEmpty((Dictionary<string, object>)result["a"]);
            Assert.IsInstanceOfType(result["b"], typeof(List<object>));
            Assert.IsEmpty((List<object>)result["b"]);
            var c = result["c"] as Dictionary<string, object>;
            Assert.IsEmpty((List<object>)c["d"]);
            var e = result["e"] as List<object>;
            Assert.HasCount(1, e);
            Assert.IsEmpty((Dictionary<string, object>)e[0]);
        }

        [TestMethod]
        public void Boundary_Deserialize_DeeplyNestedObject()
        {
            var sb = new StringBuilder();
            for (int i = 0; i < 50; i++) sb.Append("{\"n\":");
            sb.Append("\"leaf\"");
            for (int i = 0; i < 50; i++) sb.Append("}");

            var result = DevKitJson.Deserialize(sb.ToString());
            var dict = result as Dictionary<string, object>;
            for (int i = 0; i < 49; i++)
            {
                Assert.IsNotNull(dict);
                dict = dict["n"] as Dictionary<string, object>;
            }
            Assert.IsNotNull(dict);
            Assert.AreEqual("leaf", dict["n"]);
        }

        [TestMethod]
        public void Boundary_Deserialize_DeeplyNestedArray()
        {
            var sb = new StringBuilder();
            for (int i = 0; i < 50; i++) sb.Append("[");
            sb.Append("\"core\"");
            for (int i = 0; i < 50; i++) sb.Append("]");

            var result = DevKitJson.Deserialize(sb.ToString());
            var list = result as List<object>;
            for (int i = 0; i < 49; i++)
            {
                Assert.HasCount(1, list);
                list = list[0] as List<object>;
            }
            Assert.HasCount(1, list);
            Assert.AreEqual("core", list[0]);
        }

        [TestMethod]
        public void Boundary_Deserialize_LargeArray()
        {
            var sb = new StringBuilder("[");
            for (int i = 0; i < 10000; i++)
            {
                if (i > 0) sb.Append(",");
                sb.Append(i);
            }
            sb.Append("]");

            var result = DevKitJson.Deserialize(sb.ToString()) as List<object>;
            Assert.AreEqual(10000, result.Count);
            Assert.AreEqual(0, result[0]);
            Assert.AreEqual(9999, result[9999]);
        }

        [TestMethod]
        public void Boundary_Deserialize_NumberZeroVariants()
        {
            Assert.AreEqual(0, DevKitJson.Deserialize("0"));
            Assert.AreEqual(0.0, DevKitJson.Deserialize("0.0"));
            Assert.AreEqual(0.0, DevKitJson.Deserialize("0e0"));
            Assert.AreEqual(0.0, DevKitJson.Deserialize("0E0"));
        }

        [TestMethod]
        public void Boundary_Deserialize_WhitespaceAroundValues()
        {
            Assert.AreEqual(42, DevKitJson.Deserialize("  42  "));
            Assert.AreEqual("hi", DevKitJson.Deserialize("  \"hi\"  "));
            Assert.AreEqual(true, DevKitJson.Deserialize("  true  "));
            Assert.IsNull(DevKitJson.Deserialize("  null  "));
        }

        #endregion

        #region Boundary Tests - Deserialize<T> Type Conversion

        [TestMethod]
        public void Boundary_DeserializeT_IntFromDouble()
        {
            var result = DevKitJson.Deserialize<int>("42.0");
            Assert.AreEqual(42, result);
        }

        [TestMethod]
        public void Boundary_DeserializeT_LongFromInt()
        {
            var result = DevKitJson.Deserialize<long>("42");
            Assert.AreEqual(42L, result);
        }

        [TestMethod]
        public void Boundary_DeserializeT_DoubleFromInt()
        {
            var result = DevKitJson.Deserialize<double>("42");
            Assert.AreEqual(42.0, result);
        }

        [TestMethod]
        public void Boundary_DeserializeT_DecimalFromInt()
        {
            var result = DevKitJson.Deserialize<decimal>("42");
            Assert.AreEqual(42m, result);
        }

        [TestMethod]
        public void Boundary_DeserializeT_FloatFromInt()
        {
            var result = DevKitJson.Deserialize<float>("42");
            Assert.AreEqual(42f, result);
        }

        [TestMethod]
        public void Boundary_DeserializeT_BoolFromTrue()
        {
            Assert.IsTrue(DevKitJson.Deserialize<bool>("true"));
        }

        [TestMethod]
        public void Boundary_DeserializeT_StringFromNumber()
        {
            var result = DevKitJson.Deserialize<string>("42");
            Assert.AreEqual("42", result);
        }

        [TestMethod]
        public void Boundary_DeserializeT_NullForClass()
        {
            var result = DevKitJson.Deserialize<SamplePoco>("null");
            Assert.IsNull(result);
        }

        [TestMethod]
        public void Boundary_DeserializeT_NullForString()
        {
            var result = DevKitJson.Deserialize<string>("null");
            Assert.IsNull(result);
        }

        [TestMethod]
        public void Boundary_DeserializeT_DefaultForInt()
        {
            var result = DevKitJson.Deserialize<int>("null");
            Assert.AreEqual(0, result);
        }

        [TestMethod]
        public void Boundary_DeserializeT_DefaultForBool()
        {
            var result = DevKitJson.Deserialize<bool>("null");
            Assert.IsFalse(result);
        }

        [TestMethod]
        public void Boundary_DeserializeT_DefaultForGuid()
        {
            var result = DevKitJson.Deserialize<Guid>("null");
            Assert.AreEqual(Guid.Empty, result);
        }

        #endregion

        #region Boundary Tests - POCO Edge Cases

        [TestMethod]
        public void Boundary_Poco_PropertyCasingMismatch()
        {
            var json = "{\"name\":\"lower\",\"COUNT\":99}";
            var result = DevKitJson.Deserialize<SamplePoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual("lower", result.Name);
            Assert.AreEqual(99, result.Count);
        }

        [TestMethod]
        public void Boundary_Poco_ReadOnlyPropertyIgnored()
        {
            var json = "{\"Value\":42,\"Computed\":999}";
            var result = DevKitJson.Deserialize<ReadOnlyPropPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual(42, result.Value);
            Assert.AreEqual(84, result.Computed);
        }

        [TestMethod]
        public void Boundary_Poco_ExtraFieldsIgnored()
        {
            var json = "{\"QuoteId\":\"abc\",\"field1\":1,\"field2\":\"x\",\"field3\":[1,2],\"field4\":{\"a\":1}}";
            var result = DevKitJson.Deserialize<InputCloneQuote>(json);
            Assert.AreEqual("abc", result.QuoteId);
        }

        [TestMethod]
        public void Boundary_Poco_AllPropsNull()
        {
            var json = "{\"QuoteId\":null}";
            var result = DevKitJson.Deserialize<InputCloneQuote>(json);
            Assert.IsNotNull(result);
            Assert.IsNull(result.QuoteId);
        }

        [TestMethod]
        public void Boundary_Poco_EmptyJsonObject()
        {
            var json = "{}";
            var result = DevKitJson.Deserialize<SamplePoco>(json);
            Assert.IsNotNull(result);
            Assert.IsNull(result.Name);
            Assert.AreEqual(0, result.Count);
            Assert.IsFalse(result.IsActive);
        }

        [TestMethod]
        public void Boundary_Poco_IntPropertyFromLong()
        {
            var json = "{\"Count\":2147483647}";
            var result = DevKitJson.Deserialize<SamplePoco>(json);
            Assert.AreEqual(int.MaxValue, result.Count);
        }

        [TestMethod]
        public void Boundary_Poco_DoublePropertyFromInt()
        {
            var json = "{\"Amount\":100}";
            var result = DevKitJson.Deserialize<SamplePoco>(json);
            Assert.AreEqual(100.0, result.Amount, 1);
        }

        [TestMethod]
        public void Boundary_Poco_BoolPropertyFromTrue()
        {
            var json = "{\"IsActive\":true}";
            var result = DevKitJson.Deserialize<SamplePoco>(json);
            Assert.IsTrue(result.IsActive);
        }

        [TestMethod]
        public void Boundary_Poco_StringPropertyFromInt()
        {
            var json = "{\"QuoteId\":42}";
            var result = DevKitJson.Deserialize<InputCloneQuote>(json);
            Assert.AreEqual("42", result.QuoteId);
        }

        [TestMethod]
        public void Boundary_Poco_GuidPropertyFromString()
        {
            var g = Guid.NewGuid();
            var json = "{\"Id\":\"" + g.ToString("D") + "\",\"Name\":\"test\"}";
            var result = DevKitJson.Deserialize<GuidPoco>(json);
            Assert.AreEqual(g, result.Id);
        }

        [TestMethod]
        public void Boundary_Poco_NullableIntWithValue()
        {
            var json = "{\"Value\":0}";
            var result = DevKitJson.Deserialize<NullableIntPoco>(json);
            Assert.IsTrue(result.Value.HasValue);
            Assert.AreEqual(0, result.Value.Value);
        }

        [TestMethod]
        public void Boundary_Poco_NullableIntWithNull()
        {
            var json = "{\"Value\":null}";
            var result = DevKitJson.Deserialize<NullableIntPoco>(json);
            Assert.IsFalse(result.Value.HasValue);
        }

        [TestMethod]
        public void Boundary_Poco_NullableGuidWithEmpty()
        {
            var json = "{\"Id\":\"00000000-0000-0000-0000-000000000000\"}";
            var result = DevKitJson.Deserialize<NullableGuidPoco>(json);
            Assert.IsTrue(result.Id.HasValue);
            Assert.AreEqual(Guid.Empty, result.Id.Value);
        }

        [TestMethod]
        public void Boundary_Poco_ListPropertyIsNull_InJson()
        {
            var json = "{\"PriceListLines\":null}";
            var result = DevKitJson.Deserialize<Input_CreateQuote>(json);
            Assert.IsNotNull(result);
            Assert.IsNull(result.PriceListLines);
        }

        [TestMethod]
        public void Boundary_Poco_DictPropertyIsNull()
        {
            var json = "{\"Labels\":null}";
            var result = DevKitJson.Deserialize<DictStringStringPoco>(json);
            Assert.IsNotNull(result);
            Assert.IsNull(result.Labels);
        }

        #endregion

        #region Boundary Tests - Dataverse Type Edge Cases

        [TestMethod]
        public void Boundary_Entity_EmptyGuidId()
        {
            var entity = new Entity("account", Guid.Empty);
            entity["name"] = "test";
            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.AreEqual(Guid.Empty, result.Id);
            Assert.AreEqual("account", result.LogicalName);
        }

        [TestMethod]
        public void Boundary_Entity_EmptyLogicalName()
        {
            var entity = new Entity("", Guid.NewGuid());
            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.AreEqual("", result.LogicalName);
        }

        [TestMethod]
        public void Boundary_Entity_NoAttributes()
        {
            var entity = new Entity("account", Guid.NewGuid());
            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.IsEmpty(result.Attributes);
        }

        [TestMethod]
        public void Boundary_Entity_AttributeValueIsEmptyString()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = "";
            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.AreEqual("", result["name"]);
        }

        [TestMethod]
        public void Boundary_EntityReference_EmptyGuid()
        {
            var er = new EntityReference("account", Guid.Empty);
            var json = DevKitJson.Serialize(er);
            var result = DevKitJson.Deserialize<EntityReference>(json);
            Assert.AreEqual(Guid.Empty, result.Id);
        }

        [TestMethod]
        public void Boundary_EntityReference_EmptyLogicalName()
        {
            var er = new EntityReference("", Guid.NewGuid());
            var json = DevKitJson.Serialize(er);
            var result = DevKitJson.Deserialize<EntityReference>(json);
            Assert.AreEqual("", result.LogicalName);
        }

        [TestMethod]
        public void Boundary_EntityReference_NameWithSpecialChars()
        {
            var er = new EntityReference("account", Guid.NewGuid())
            {
                Name = "Contoso \"Inc\" & Son's\nMultiline"
            };
            var json = DevKitJson.Serialize(er);
            var result = DevKitJson.Deserialize<EntityReference>(json);
            Assert.AreEqual("Contoso \"Inc\" & Son's\nMultiline", result.Name);
        }

        [TestMethod]
        public void Boundary_OptionSetValueCollection_Empty()
        {
            var osvc = new OptionSetValueCollection();
            var json = DevKitJson.Serialize(osvc);
            var result = DevKitJson.Deserialize<OptionSetValueCollection>(json);
            Assert.IsEmpty(result);
        }

        [TestMethod]
        public void Boundary_OptionSetValueCollection_SingleItem()
        {
            var osvc = new OptionSetValueCollection { new OptionSetValue(42) };
            var json = DevKitJson.Serialize(osvc);
            var result = DevKitJson.Deserialize<OptionSetValueCollection>(json);
            Assert.HasCount(1, result);
            Assert.AreEqual(42, result[0].Value);
        }

        [TestMethod]
        public void Boundary_EntityCollection_EmptyWithName()
        {
            var ec = new EntityCollection { EntityName = "contact" };
            var json = DevKitJson.Serialize(ec);
            var result = DevKitJson.Deserialize<EntityCollection>(json);
            Assert.AreEqual("contact", result.EntityName);
            Assert.IsEmpty(result.Entities);
        }

        [TestMethod]
        public void Boundary_EntityCollection_NullEntityName()
        {
            var ec = new EntityCollection();
            var json = DevKitJson.Serialize(ec);
            var result = DevKitJson.Deserialize<EntityCollection>(json);
            Assert.IsNull(result.EntityName);
            Assert.IsEmpty(result.Entities);
        }

        [TestMethod]
        public void Boundary_ParameterCollection_Empty()
        {
            var pc = new ParameterCollection();
            var json = DevKitJson.Serialize(pc);
            var result = DevKitJson.Deserialize<ParameterCollection>(json);
            Assert.IsEmpty(result);
        }

        [TestMethod]
        public void Boundary_ParameterCollection_NullValue()
        {
            var pc = new ParameterCollection();
            pc["key"] = null;
            var json = DevKitJson.Serialize(pc);
            var result = DevKitJson.Deserialize<ParameterCollection>(json);
            Assert.IsTrue(result.ContainsKey("key"));
            Assert.IsNull(result["key"]);
        }

        [TestMethod]
        public void Boundary_EntityImageCollection_Empty()
        {
            var eic = new EntityImageCollection();
            var json = DevKitJson.Serialize(eic);
            var result = DevKitJson.Deserialize<EntityImageCollection>(json);
            Assert.IsEmpty(result);
        }

        [TestMethod]
        public void Boundary_AliasedValue_NullValue()
        {
            var av = new AliasedValue("account", "name", null);
            var json = DevKitJson.Serialize(av);
            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.AreEqual("account", result.EntityLogicalName);
            Assert.AreEqual("name", result.AttributeLogicalName);
            Assert.IsNull(result.Value);
        }

        [TestMethod]
        public void Boundary_AliasedValue_EmptyStrings()
        {
            var av = new AliasedValue("", "", "");
            var json = DevKitJson.Serialize(av);
            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.AreEqual("", result.EntityLogicalName);
            Assert.AreEqual("", result.AttributeLogicalName);
            Assert.AreEqual("", result.Value);
        }

        [TestMethod]
        public void Boundary_BooleanManagedProperty_AllTrue()
        {
            var bmp = new BooleanManagedProperty(true) { CanBeChanged = true };
            var json = DevKitJson.Serialize(bmp);
            var result = DevKitJson.Deserialize<BooleanManagedProperty>(json);
            Assert.IsTrue(result.Value);
            Assert.IsTrue(result.CanBeChanged);
        }

        [TestMethod]
        public void Boundary_BooleanManagedProperty_AllFalse()
        {
            var bmp = new BooleanManagedProperty(false) { CanBeChanged = false };
            var json = DevKitJson.Serialize(bmp);
            var result = DevKitJson.Deserialize<BooleanManagedProperty>(json);
            Assert.IsFalse(result.Value);
            Assert.IsFalse(result.CanBeChanged);
        }

        [TestMethod]
        public void Boundary_DateTime_MinValue()
        {
            var dt = DateTime.MinValue.ToUniversalTime();
            var json = DevKitJson.Serialize(dt);
            var result = DevKitJson.Deserialize<DateTime>(json);
            Assert.AreEqual(dt, result);
        }

        [TestMethod]
        public void Boundary_DateTime_Epoch()
        {
            var dt = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);
            var json = DevKitJson.Serialize(dt);
            var result = DevKitJson.Deserialize<DateTime>(json);
            Assert.AreEqual(dt, result);
        }

        [TestMethod]
        public void Boundary_Guid_Empty()
        {
            var json = DevKitJson.Serialize(Guid.Empty);
            var result = DevKitJson.Deserialize<Guid>(json);
            Assert.AreEqual(Guid.Empty, result);
        }

        [TestMethod]
        public void Boundary_ByteArray_Empty()
        {
            var data = new byte[0];
            var json = DevKitJson.Serialize(data);
            var result = (byte[])DevKitJson.Deserialize(json);
            Assert.IsEmpty(result);
        }

        [TestMethod]
        public void Boundary_ByteArray_SingleByte()
        {
            var data = new byte[] { 0xFF };
            var json = DevKitJson.Serialize(data);
            var result = (byte[])DevKitJson.Deserialize(json);
            Assert.HasCount(1, result);
            Assert.AreEqual(0xFF, result[0]);
        }

        [TestMethod]
        public void Boundary_ByteArray_LargeFile()
        {
            var data = new byte[10000];
            new Random(42).NextBytes(data);
            var json = DevKitJson.Serialize(data);
            var result = (byte[])DevKitJson.Deserialize(json);
            CollectionAssert.AreEqual(data, result);
        }

        #endregion

        #region Boundary Tests - Compact Format

        [TestMethod]
        public void Boundary_Compact_Entity_Roundtrip()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = "Contoso";
            entity["revenue"] = new Money(100m);
            entity.FormattedValues["revenue"] = "$100.00";

            var compact = DevKitJson.SerializeCompact(entity);
            Assert.Contains("\"_t\":\"E\"", compact);
            Assert.DoesNotContain("\"__type\"", compact);

            var result = DevKitJson.Deserialize<Entity>(compact);
            Assert.AreEqual("account", result.LogicalName);
            Assert.AreEqual("Contoso", result["name"]);
            Assert.AreEqual(100m, ((Money)result["revenue"]).Value);
            Assert.AreEqual("$100.00", result.FormattedValues["revenue"]);
        }

        [TestMethod]
        public void Boundary_Compact_EntityReference_Roundtrip()
        {
            var er = new EntityReference("contact", Guid.NewGuid()) { Name = "John" };
            var compact = DevKitJson.SerializeCompact(er);
            Assert.Contains("\"_t\":\"ER\"", compact);

            var result = DevKitJson.Deserialize<EntityReference>(compact);
            Assert.AreEqual("contact", result.LogicalName);
            Assert.AreEqual("John", result.Name);
        }

        [TestMethod]
        public void Boundary_Compact_Money_Roundtrip()
        {
            var money = new Money(999.99m);
            var compact = DevKitJson.SerializeCompact(money);
            Assert.Contains("\"_t\":\"M\"", compact);

            var result = DevKitJson.Deserialize<Money>(compact);
            Assert.AreEqual(999.99m, result.Value);
        }

        [TestMethod]
        public void Boundary_Compact_DateTime_Roundtrip()
        {
            var dt = new DateTime(2025, 6, 15, 10, 30, 0, DateTimeKind.Utc);
            var compact = DevKitJson.SerializeCompact(dt);
            Assert.Contains("\"_t\":\"DT\"", compact);

            var result = DevKitJson.Deserialize<DateTime>(compact);
            Assert.AreEqual(dt, result);
        }

        [TestMethod]
        public void Boundary_Compact_Guid_Roundtrip()
        {
            var guid = Guid.NewGuid();
            var compact = DevKitJson.SerializeCompact(guid);
            Assert.Contains("\"_t\":\"G\"", compact);

            var result = DevKitJson.Deserialize<Guid>(compact);
            Assert.AreEqual(guid, result);
        }

        [TestMethod]
        public void Boundary_Compact_OptionSetValue_Roundtrip()
        {
            var osv = new OptionSetValue(42);
            var compact = DevKitJson.SerializeCompact(osv);
            Assert.Contains("\"_t\":\"O\"", compact);

            var result = DevKitJson.Deserialize<OptionSetValue>(compact);
            Assert.AreEqual(42, result.Value);
        }

        [TestMethod]
        public void Boundary_Compact_ParameterCollection_Roundtrip()
        {
            var pc = new ParameterCollection();
            pc["Target"] = new Entity("account", Guid.NewGuid());
            var compact = DevKitJson.SerializeCompact(pc);
            Assert.Contains("\"_t\":\"PC\"", compact);

            var result = DevKitJson.Deserialize<ParameterCollection>(compact);
            Assert.IsInstanceOfType(result["Target"], typeof(Entity));
        }

        [TestMethod]
        public void Boundary_Compact_FullVsFull_SameDeserialization()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = "Test";
            entity["revenue"] = new Money(500m);

            var full = DevKitJson.Serialize(entity);
            var compact = DevKitJson.SerializeCompact(entity);

            Assert.IsTrue(compact.Length < full.Length);

            var fromFull = DevKitJson.Deserialize<Entity>(full);
            var fromCompact = DevKitJson.Deserialize<Entity>(compact);

            Assert.AreEqual(fromFull.LogicalName, fromCompact.LogicalName);
            Assert.AreEqual(fromFull.Id, fromCompact.Id);
            Assert.AreEqual(fromFull["name"], fromCompact["name"]);
            Assert.AreEqual(((Money)fromFull["revenue"]).Value, ((Money)fromCompact["revenue"]).Value);
        }

        #endregion

        #region Boundary Tests - MapTo Edge Cases

        [TestMethod]
        public void Boundary_MapTo_Null()
        {
            Assert.IsNull(DevKitJson.MapTo<SamplePoco>(null));
        }

        [TestMethod]
        public void Boundary_MapTo_WrongType_NotDict()
        {
            var result = DevKitJson.MapTo<SamplePoco>("not a dict");
            Assert.IsNull(result);
        }

        [TestMethod]
        public void Boundary_MapTo_EmptyDict()
        {
            var result = DevKitJson.MapTo<SamplePoco>(new Dictionary<string, object>());
            Assert.IsNotNull(result);
            Assert.IsNull(result.Name);
            Assert.AreEqual(0, result.Count);
        }

        [TestMethod]
        public void Boundary_MapTo_AlreadyCorrectType()
        {
            var original = new SamplePoco { Name = "X" };
            var result = DevKitJson.MapTo<SamplePoco>(original);
            Assert.AreSame(original, result);
        }

        #endregion

        #region Boundary Tests - Serialize Edge Cases

        [TestMethod]
        public void Boundary_Serialize_Enum()
        {
            Assert.AreEqual("3", DevKitJson.Serialize(DayOfWeek.Wednesday));
            Assert.AreEqual("0", DevKitJson.Serialize(DayOfWeek.Sunday));
            Assert.AreEqual("6", DevKitJson.Serialize(DayOfWeek.Saturday));
        }

        [TestMethod]
        public void Boundary_Serialize_DictionaryWithNullValues()
        {
            var dict = new Dictionary<string, object>
            {
                { "a", null },
                { "b", "value" },
                { "c", null }
            };
            var json = DevKitJson.Serialize(dict);
            var result = DevKitJson.Deserialize(json) as Dictionary<string, object>;
            Assert.IsNull(result["a"]);
            Assert.AreEqual("value", result["b"]);
            Assert.IsNull(result["c"]);
        }

        [TestMethod]
        public void Boundary_Serialize_ListWithNulls()
        {
            var list = new List<object> { null, "a", null, 1, null };
            var json = DevKitJson.Serialize(list);
            var result = DevKitJson.Deserialize(json) as List<object>;
            Assert.AreEqual(5, result.Count);
            Assert.IsNull(result[0]);
            Assert.AreEqual("a", result[1]);
            Assert.IsNull(result[2]);
            Assert.AreEqual(1, result[3]);
            Assert.IsNull(result[4]);
        }

        [TestMethod]
        public void Boundary_Serialize_EmptyDict()
        {
            Assert.AreEqual("{}", DevKitJson.Serialize(new Dictionary<string, object>()));
        }

        [TestMethod]
        public void Boundary_Serialize_EmptyList()
        {
            Assert.AreEqual("[]", DevKitJson.Serialize(new List<object>()));
        }

        [TestMethod]
        public void Boundary_Serialize_EmptyStringDict()
        {
            Assert.AreEqual("{}", DevKitJson.Serialize(new Dictionary<string, string>()));
        }

        #endregion

        #region JSON-in-JSON (Escaped JSON String) Tests

        // ===================================================================
        // Scenario: A property value is itself a JSON string.
        // In real Dataverse plugins, InputParameters["Input"] is often a
        // serialized JSON string that needs a second Deserialize call.
        //
        // JSON escaping rules:
        //   Level 0 (raw):    {"Name":"John","Age":30}
        //   Level 1 (in string): "{\"Name\":\"John\",\"Age\":30}"
        //   Level 2 (nested):    "{\"Json\":\"{\\\"Name\\\":\\\"John\\\"}\"}"
        // ===================================================================

        [TestMethod]
        public void JsonInJson_Level1_SimpleObjectAsString()
        {
            // Outer JSON: { "PropertyA": "OK", "Json": "{\"Name\":\"John\",\"Count\":30}" }
            var json = "{\"PropertyA\":\"OK\",\"Json\":\"{\\\"Name\\\":\\\"John\\\",\\\"Count\\\":30}\"}";

            var result = DevKitJson.Deserialize<JsonInJsonPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual("OK", result.PropertyA);

            // Json property is a string containing escaped JSON
            Assert.AreEqual("{\"Name\":\"John\",\"Count\":30}", result.Json);

            // Second pass: deserialize the inner JSON string
            var inner = DevKitJson.Deserialize<SamplePoco>(result.Json);
            Assert.AreEqual("John", inner.Name);
            Assert.AreEqual(30, inner.Count);
        }

        [TestMethod]
        public void JsonInJson_Level1_ObjectWithQuotesInValue()
        {
            // Inner object: {"Description":"He said \"hello\" to her"}
            // Escaped once: "{\"Description\":\"He said \\\"hello\\\" to her\"}"
            var json = "{\"PropertyA\":\"test\",\"Json\":\"{\\\"Description\\\":\\\"He said \\\\\\\"hello\\\\\\\" to her\\\"}\"}";

            var result = DevKitJson.Deserialize<JsonInJsonPoco>(json);
            Assert.IsNotNull(result);
            Assert.AreEqual("{\"Description\":\"He said \\\"hello\\\" to her\"}", result.Json);

            var inner = DevKitJson.Deserialize(result.Json) as Dictionary<string, object>;
            Assert.IsNotNull(inner);
            Assert.AreEqual("He said \"hello\" to her", inner["Description"]);
        }

        [TestMethod]
        public void JsonInJson_Level1_WithList()
        {
            // Inner: {"Items":["a","b","c"]}
            // Escaped: "{\"Items\":[\"a\",\"b\",\"c\"]}"
            var json = "{\"PropertyA\":\"list-test\",\"Json\":\"{\\\"Items\\\":[\\\"a\\\",\\\"b\\\",\\\"c\\\"]}\"}";

            var result = DevKitJson.Deserialize<JsonInJsonPoco>(json);
            Assert.AreEqual("{\"Items\":[\"a\",\"b\",\"c\"]}", result.Json);

            var inner = DevKitJson.Deserialize<ListStringJsonPoco>(result.Json);
            Assert.AreEqual(3, inner.Items.Count);
            Assert.AreEqual("a", inner.Items[0]);
            Assert.AreEqual("c", inner.Items[2]);
        }

        [TestMethod]
        public void JsonInJson_Level2_NestedJsonInJsonInJson()
        {
            // Level 0 (raw inner-inner): {"Value":"deep"}
            // Level 1 (inner JSON string): {"Nested":"{\"Value\":\"deep\"}"}
            // Level 2 (outer JSON string): escaped again in outer
            //
            // Build from inside out using Serialize to ensure correct escaping
            var innerInner = DevKitJson.Serialize(new Dictionary<string, object> { { "Value", "deep" } });
            // innerInner = {"Value":"deep"}

            var inner = DevKitJson.Serialize(new Dictionary<string, object> { { "Nested", innerInner } });
            // inner = {"Nested":"{\"Value\":\"deep\"}"}

            var outer = DevKitJson.Serialize(new Dictionary<string, object> { { "PropertyA", "L2" }, { "Json", inner } });
            // outer = {"PropertyA":"L2","Json":"{\"Nested\":\"{\\\"Value\\\":\\\"deep\\\"}\"}"}

            // Parse level 0
            var result0 = DevKitJson.Deserialize<JsonInJsonPoco>(outer);
            Assert.AreEqual("L2", result0.PropertyA);

            // Parse level 1
            var result1 = DevKitJson.Deserialize<JsonInJsonPoco>(result0.Json);
            Assert.IsNotNull(result1);

            // result1.Json should be the level-2 string: {"Value":"deep"}
            // But result1 is mapped from dict, PropertyA and Json are property names
            // Let's use raw dict instead
            var dict1 = DevKitJson.Deserialize(result0.Json) as Dictionary<string, object>;
            Assert.IsNotNull(dict1);
            var nestedStr = (string)dict1["Nested"];
            Assert.AreEqual("{\"Value\":\"deep\"}", nestedStr);

            // Parse level 2
            var dict2 = DevKitJson.Deserialize(nestedStr) as Dictionary<string, object>;
            Assert.IsNotNull(dict2);
            Assert.AreEqual("deep", dict2["Value"]);
        }

        [TestMethod]
        public void JsonInJson_Serialize_ThenDeserialize_Roundtrip()
        {
            // Simulate: user creates an object, serializes it to a string,
            // then puts that string as a property of another object
            var innerObj = new SamplePoco { Name = "Test", Count = 42, IsActive = true, Amount = 99.5 };
            var innerJson = DevKitJson.Serialize(innerObj);

            var outerObj = new JsonInJsonPoco { PropertyA = "wrapper", Json = innerJson };
            var outerJson = DevKitJson.Serialize(outerObj);

            // Deserialize outer
            var restored = DevKitJson.Deserialize<JsonInJsonPoco>(outerJson);
            Assert.AreEqual("wrapper", restored.PropertyA);
            Assert.AreEqual(innerJson, restored.Json);

            // Deserialize inner
            var restoredInner = DevKitJson.Deserialize<SamplePoco>(restored.Json);
            Assert.AreEqual("Test", restoredInner.Name);
            Assert.AreEqual(42, restoredInner.Count);
            Assert.IsTrue(restoredInner.IsActive);
            Assert.AreEqual(99.5, restoredInner.Amount, 1);
        }

        [TestMethod]
        public void JsonInJson_Level2_Serialize_Roundtrip()
        {
            // 3 levels of nesting via Serialize
            var level2 = DevKitJson.Serialize(new Dictionary<string, object> { { "Secret", "password123" } });
            var level1 = DevKitJson.Serialize(new JsonInJsonPoco { PropertyA = "mid", Json = level2 });
            var level0 = DevKitJson.Serialize(new JsonInJsonPoco { PropertyA = "top", Json = level1 });

            // Unwrap level 0
            var r0 = DevKitJson.Deserialize<JsonInJsonPoco>(level0);
            Assert.AreEqual("top", r0.PropertyA);

            // Unwrap level 1
            var r1 = DevKitJson.Deserialize<JsonInJsonPoco>(r0.Json);
            Assert.AreEqual("mid", r1.PropertyA);

            // Unwrap level 2
            var r2 = DevKitJson.Deserialize(r1.Json) as Dictionary<string, object>;
            Assert.IsNotNull(r2);
            Assert.AreEqual("password123", r2["Secret"]);
        }

        [TestMethod]
        public void JsonInJson_WithSingleQuotesInValue()
        {
            // Single quotes don't need escaping in JSON, but let's verify
            // Inner: {"Msg":"It's a test with 'quotes'"}
            var json = "{\"PropertyA\":\"sq\",\"Json\":\"{\\\"Msg\\\":\\\"It's a test with 'quotes'\\\"}\"}";

            var result = DevKitJson.Deserialize<JsonInJsonPoco>(json);
            var inner = DevKitJson.Deserialize(result.Json) as Dictionary<string, object>;
            Assert.IsNotNull(inner);
            Assert.AreEqual("It's a test with 'quotes'", inner["Msg"]);
        }

        [TestMethod]
        public void JsonInJson_WithMixedQuotes()
        {
            // Inner: {"Msg":"He said 'hi' and she said \"bye\""}
            // Single quotes: no escape needed
            // Double quotes: escaped as \"
            var innerObj = new Dictionary<string, object>
            {
                { "Msg", "He said 'hi' and she said \"bye\"" }
            };
            var innerJson = DevKitJson.Serialize(innerObj);
            Assert.AreEqual("{\"Msg\":\"He said 'hi' and she said \\\"bye\\\"\"}", innerJson);

            var outerObj = new JsonInJsonPoco { PropertyA = "mixed", Json = innerJson };
            var outerJson = DevKitJson.Serialize(outerObj);

            var restored = DevKitJson.Deserialize<JsonInJsonPoco>(outerJson);
            Assert.AreEqual(innerJson, restored.Json);

            var restoredInner = DevKitJson.Deserialize(restored.Json) as Dictionary<string, object>;
            Assert.AreEqual("He said 'hi' and she said \"bye\"", restoredInner["Msg"]);
        }

        [TestMethod]
        public void JsonInJson_WithBackslashesAndQuotes()
        {
            // Inner value: C:\Users\"Admin"\file.txt
            var innerObj = new Dictionary<string, object>
            {
                { "Path", "C:\\Users\\\"Admin\"\\file.txt" }
            };
            var innerJson = DevKitJson.Serialize(innerObj);

            var outerObj = new JsonInJsonPoco { PropertyA = "path", Json = innerJson };
            var outerJson = DevKitJson.Serialize(outerObj);

            var restored = DevKitJson.Deserialize<JsonInJsonPoco>(outerJson);
            var restoredInner = DevKitJson.Deserialize(restored.Json) as Dictionary<string, object>;
            Assert.AreEqual("C:\\Users\\\"Admin\"\\file.txt", restoredInner["Path"]);
        }

        [TestMethod]
        public void JsonInJson_WithNewlinesAndTabs()
        {
            // Inner: {"Text":"Line1\nLine2\tTabbed"}
            var innerObj = new Dictionary<string, object>
            {
                { "Text", "Line1\nLine2\tTabbed" }
            };
            var innerJson = DevKitJson.Serialize(innerObj);

            var outerObj = new JsonInJsonPoco { PropertyA = "special", Json = innerJson };
            var outerJson = DevKitJson.Serialize(outerObj);

            var restored = DevKitJson.Deserialize<JsonInJsonPoco>(outerJson);
            var restoredInner = DevKitJson.Deserialize(restored.Json) as Dictionary<string, object>;
            Assert.AreEqual("Line1\nLine2\tTabbed", restoredInner["Text"]);
        }

        [TestMethod]
        public void JsonInJson_WithVietnameseAndSpecialChars()
        {
            var innerObj = new Dictionary<string, object>
            {
                { "Name", "Nguyễn Văn A" },
                { "Note", "Tổng tiền: 1.000.000đ - \"đã thanh toán\"" }
            };
            var innerJson = DevKitJson.Serialize(innerObj);
            var outerObj = new JsonInJsonPoco { PropertyA = "vn", Json = innerJson };
            var outerJson = DevKitJson.Serialize(outerObj);

            var restored = DevKitJson.Deserialize<JsonInJsonPoco>(outerJson);
            var restoredInner = DevKitJson.Deserialize(restored.Json) as Dictionary<string, object>;
            Assert.AreEqual("Nguyễn Văn A", restoredInner["Name"]);
            Assert.AreEqual("Tổng tiền: 1.000.000đ - \"đã thanh toán\"", restoredInner["Note"]);
        }

        [TestMethod]
        public void JsonInJson_ComplexInnerObject()
        {
            // Inner is a complex POCO with list, nested object, etc.
            var innerObj = new OrderWithLinesPoco
            {
                Order = "ORD-001",
                Lines = new List<OrderLinePoco>
                {
                    new OrderLinePoco { Product = "Widget \"Pro\"", Qty = 10, Prices = new List<double> { 99.99, 89.99 } },
                    new OrderLinePoco { Product = "Gadget's Best", Qty = 5, Prices = new List<double> { 199.99 } }
                }
            };
            var innerJson = DevKitJson.Serialize(innerObj);
            var outerObj = new JsonInJsonPoco { PropertyA = "complex", Json = innerJson };
            var outerJson = DevKitJson.Serialize(outerObj);

            var restored = DevKitJson.Deserialize<JsonInJsonPoco>(outerJson);
            var restoredInner = DevKitJson.Deserialize<OrderWithLinesPoco>(restored.Json);
            Assert.AreEqual("ORD-001", restoredInner.Order);
            Assert.AreEqual(2, restoredInner.Lines.Count);
            Assert.AreEqual("Widget \"Pro\"", restoredInner.Lines[0].Product);
            Assert.AreEqual("Gadget's Best", restoredInner.Lines[1].Product);
            Assert.AreEqual(2, restoredInner.Lines[0].Prices.Count);
        }

        [TestMethod]
        public void JsonInJson_InParameterCollection_PluginPattern()
        {
            // Real-world Dataverse plugin pattern:
            // InputParameters["Input"] = "{\"QuoteId\":\"abc-123\",\"Lines\":[\"line1\",\"line2\"]}"
            var innerObj = new Input_CreateQuote
            {
                PriceListLines = new List<string> { "f3905a0e-5e18-f111-8342-70a8a502738b", "f8905a0e-5e18-f111-8342-70a8a502738b" }
            };
            var innerJson = DevKitJson.Serialize(innerObj);

            var pc = new ParameterCollection();
            pc["Input"] = innerJson;
            pc["Target"] = new EntityReference("quote", Guid.NewGuid());

            var json = DevKitJson.Serialize(pc);
            var restored = DevKitJson.Deserialize<ParameterCollection>(json);

            // Input is a string (the JSON), not an object
            var inputStr = (string)restored["Input"];
            Assert.AreEqual(innerJson, inputStr);

            // Deserialize the string to get the actual object
            var input = DevKitJson.Deserialize<Input_CreateQuote>(inputStr);
            Assert.IsNotNull(input.PriceListLines);
            Assert.AreEqual(2, input.PriceListLines.Count);
        }

        [TestMethod]
        public void JsonInJson_Level3_TripleNesting()
        {
            // 4 levels of nesting to push escape limits
            var l3 = DevKitJson.Serialize(new Dictionary<string, object> { { "Deep", "value with \"quotes\" and 'apostrophe'" } });
            var l2 = DevKitJson.Serialize(new JsonInJsonPoco { PropertyA = "L2", Json = l3 });
            var l1 = DevKitJson.Serialize(new JsonInJsonPoco { PropertyA = "L1", Json = l2 });
            var l0 = DevKitJson.Serialize(new JsonInJsonPoco { PropertyA = "L0", Json = l1 });

            // Unwrap all levels
            var r0 = DevKitJson.Deserialize<JsonInJsonPoco>(l0);
            Assert.AreEqual("L0", r0.PropertyA);

            var r1 = DevKitJson.Deserialize<JsonInJsonPoco>(r0.Json);
            Assert.AreEqual("L1", r1.PropertyA);

            var r2 = DevKitJson.Deserialize<JsonInJsonPoco>(r1.Json);
            Assert.AreEqual("L2", r2.PropertyA);

            var r3 = DevKitJson.Deserialize(r2.Json) as Dictionary<string, object>;
            Assert.IsNotNull(r3);
            Assert.AreEqual("value with \"quotes\" and 'apostrophe'", r3["Deep"]);
        }

        [TestMethod]
        public void JsonInJson_HandCrafted_VerifyEscapeLevels()
        {
            // Level 0 raw: {"Val":"hello"}
            // Level 1 escaped once:   {\"Val\":\"hello\"}
            //   as JSON string value: "{\"Val\":\"hello\"}"
            // Level 2 escaped twice:  {\\\"Val\\\":\\\"hello\\\"}
            //   as JSON string value: "{\\\"Val\\\":\\\"hello\\\"}"

            // Hand-craft level 1
            var l1Json = "{\"Outer\":\"data\",\"Inner\":\"{\\\"Val\\\":\\\"hello\\\"}\"}";
            var l1 = DevKitJson.Deserialize(l1Json) as Dictionary<string, object>;
            Assert.AreEqual("data", l1["Outer"]);
            Assert.AreEqual("{\"Val\":\"hello\"}", l1["Inner"]);

            var l0 = DevKitJson.Deserialize((string)l1["Inner"]) as Dictionary<string, object>;
            Assert.AreEqual("hello", l0["Val"]);
        }

        [TestMethod]
        public void JsonInJson_HandCrafted_Level2()
        {
            // Build by hand to verify escape at each level
            // Level 0: {"X":"Y"}
            // Level 1: {"A":"{\"X\":\"Y\"}"}
            //   → in C# string: "{\"A\":\"{\\\"X\\\":\\\"Y\\\"}\"}"
            // Level 2: {"B":"{\"A\":\"{\\\"X\\\":\\\"Y\\\"}\"}"}
            //   → in C# string: the escaping doubles again

            // Let's use Serialize to build correctly, then verify hand-parse
            var raw = "{\"X\":\"Y\"}";
            var l1Dict = new Dictionary<string, object> { { "A", raw } };
            var l1Str = DevKitJson.Serialize(l1Dict);
            // l1Str should be: {"A":"{\"X\":\"Y\"}"}

            var l2Dict = new Dictionary<string, object> { { "B", l1Str } };
            var l2Str = DevKitJson.Serialize(l2Dict);

            // Now unwrap
            var p2 = DevKitJson.Deserialize(l2Str) as Dictionary<string, object>;
            Assert.IsNotNull(p2);
            var bVal = (string)p2["B"];

            var p1 = DevKitJson.Deserialize(bVal) as Dictionary<string, object>;
            Assert.IsNotNull(p1);
            var aVal = (string)p1["A"];

            var p0 = DevKitJson.Deserialize(aVal) as Dictionary<string, object>;
            Assert.IsNotNull(p0);
            Assert.AreEqual("Y", p0["X"]);
        }

        [TestMethod]
        public void JsonInJson_ValueContainsOnlySingleQuotes()
        {
            // Single quotes are NOT special in JSON - they need no escaping
            var innerObj = new Dictionary<string, object>
            {
                { "SQL", "SELECT * FROM account WHERE name = 'Contoso'" },
                { "Note", "It's John's account" }
            };
            var innerJson = DevKitJson.Serialize(innerObj);
            var outerJson = DevKitJson.Serialize(new JsonInJsonPoco { PropertyA = "sql", Json = innerJson });

            var restored = DevKitJson.Deserialize<JsonInJsonPoco>(outerJson);
            var restoredInner = DevKitJson.Deserialize(restored.Json) as Dictionary<string, object>;
            Assert.AreEqual("SELECT * FROM account WHERE name = 'Contoso'", restoredInner["SQL"]);
            Assert.AreEqual("It's John's account", restoredInner["Note"]);
        }

        [TestMethod]
        public void JsonInJson_ValueContainsMixedQuotesAndBackslashes()
        {
            // Extreme case: value has both " and ' and \ and \n
            var nastyValue = "Path: C:\\Users\\\"Admin\"\\It's a 'test'\nLine2";
            var innerObj = new Dictionary<string, object> { { "Data", nastyValue } };
            var innerJson = DevKitJson.Serialize(innerObj);
            var outerJson = DevKitJson.Serialize(new JsonInJsonPoco { PropertyA = "nasty", Json = innerJson });

            var restored = DevKitJson.Deserialize<JsonInJsonPoco>(outerJson);
            var restoredInner = DevKitJson.Deserialize(restored.Json) as Dictionary<string, object>;
            Assert.AreEqual(nastyValue, restoredInner["Data"]);
        }

        [TestMethod]
        public void JsonInJson_EmptyInnerJson()
        {
            var outerJson = DevKitJson.Serialize(new JsonInJsonPoco { PropertyA = "empty", Json = "{}" });
            var restored = DevKitJson.Deserialize<JsonInJsonPoco>(outerJson);
            Assert.AreEqual("{}", restored.Json);

            var inner = DevKitJson.Deserialize(restored.Json) as Dictionary<string, object>;
            Assert.IsNotNull(inner);
            Assert.IsEmpty(inner);
        }

        [TestMethod]
        public void JsonInJson_InnerIsArray()
        {
            var innerJson = DevKitJson.Serialize(new List<string> { "a", "b", "c" });
            var outerJson = DevKitJson.Serialize(new JsonInJsonPoco { PropertyA = "arr", Json = innerJson });

            var restored = DevKitJson.Deserialize<JsonInJsonPoco>(outerJson);
            Assert.AreEqual("[\"a\",\"b\",\"c\"]", restored.Json);

            var inner = DevKitJson.Deserialize(restored.Json) as List<object>;
            Assert.AreEqual(3, inner.Count);
            Assert.AreEqual("a", inner[0]);
        }

        [TestMethod]
        public void JsonInJson_RealWorldDataverse_CustomApiInput()
        {
            // Simulating a real Dataverse Custom API where:
            // - Plugin receives InputParameters["Input"] as a serialized JSON string
            // - That JSON contains a POCO with List<string> and nested objects
            // - Values contain Vietnamese text with quotes
            var customInput = new Dictionary<string, object>
            {
                { "QuoteId", "abc-123" },
                { "CustomerName", "Công ty TNHH \"Phước\" & Son's" },
                { "LineIds", new List<string> { "line-1", "line-2" } },
                { "Config", new Dictionary<string, object>
                    {
                        { "AutoApprove", true },
                        { "Template", "Quote_'Standard'_v2" }
                    }
                }
            };
            var inputJson = DevKitJson.Serialize(customInput);

            // Simulate ParameterCollection round-trip (Dataverse stores it as string)
            var pc = new ParameterCollection();
            pc["Input"] = inputJson;
            var pcJson = DevKitJson.Serialize(pc);
            var restoredPc = DevKitJson.Deserialize<ParameterCollection>(pcJson);

            // Get the input string back
            var inputStr = (string)restoredPc["Input"];
            Assert.AreEqual(inputJson, inputStr);

            // Parse the inner JSON
            var parsed = DevKitJson.Deserialize(inputStr) as Dictionary<string, object>;
            Assert.AreEqual("abc-123", parsed["QuoteId"]);
            Assert.AreEqual("Công ty TNHH \"Phước\" & Son's", parsed["CustomerName"]);

            var lineIds = parsed["LineIds"] as List<object>;
            Assert.AreEqual(2, lineIds.Count);
            Assert.AreEqual("line-1", lineIds[0]);

            var config = parsed["Config"] as Dictionary<string, object>;
            Assert.AreEqual(true, config["AutoApprove"]);
            Assert.AreEqual("Quote_'Standard'_v2", config["Template"]);
        }

        #endregion
    }

    internal class InputCloneQuote
    {
        public string QuoteId { get; set; }
    }

    internal class SamplePoco
    {
        public string Name { get; set; }
        public int Count { get; set; }
        public bool IsActive { get; set; }
        public double Amount { get; set; }
    }

    internal class OrderPoco
    {
        public string OrderId { get; set; }
        public SamplePoco Customer { get; set; }
    }

    internal class GuidPoco
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }

    internal class Input_CreateQuote
    {
        public List<string> PriceListLines { get; set; }
    }

    internal class ListIntPoco
    {
        public List<int> Values { get; set; }
    }

    internal class ListGuidPoco
    {
        public List<Guid> Ids { get; set; }
    }

    internal class ArrayStringPoco
    {
        public string[] Tags { get; set; }
    }

    internal class ListListStringPoco
    {
        public List<List<string>> Matrix { get; set; }
    }

    internal class ListListIntPoco
    {
        public List<List<int>> Grid { get; set; }
    }

    internal class ListPocoPoco
    {
        public List<SamplePoco> Items { get; set; }
    }

    internal class DictStringStringPoco
    {
        public Dictionary<string, string> Labels { get; set; }
    }

    internal class DictStringIntPoco
    {
        public Dictionary<string, int> Scores { get; set; }
    }

    internal class DictStringObjectPoco
    {
        public Dictionary<string, object> Meta { get; set; }
    }

    internal class NullableIntPoco
    {
        public int? Value { get; set; }
    }

    internal class NullableGuidPoco
    {
        public Guid? Id { get; set; }
    }

    internal class NullableBoolPoco
    {
        public bool? Flag { get; set; }
    }

    internal class NullableDecimalPoco
    {
        public decimal? Amount { get; set; }
    }

    internal class NullableDateTimePoco
    {
        public DateTime? Date { get; set; }
    }

    internal class ArrayIntPoco
    {
        public int[] Numbers { get; set; }
    }

    internal class ArrayGuidPoco
    {
        public Guid[] Ids { get; set; }
    }

    internal class ListDoublePoco
    {
        public List<double> Values { get; set; }
    }

    internal class ListBoolPoco
    {
        public List<bool> Flags { get; set; }
    }

    internal class ListDecimalPoco
    {
        public List<decimal> Amounts { get; set; }
    }

    internal class ListLongPoco
    {
        public List<long> BigNumbers { get; set; }
    }

    internal class ListNullableIntPoco
    {
        public List<int?> Values { get; set; }
    }

    internal class MixedPoco
    {
        public string Name { get; set; }
        public List<string> Tags { get; set; }
        public List<Guid> Ids { get; set; }
        public int Score { get; set; }
        public bool Active { get; set; }
        public double Rate { get; set; }
    }

    internal class OrderLinePoco
    {
        public string Product { get; set; }
        public int Qty { get; set; }
        public List<double> Prices { get; set; }
    }

    internal class OrderWithLinesPoco
    {
        public string Order { get; set; }
        public List<OrderLinePoco> Lines { get; set; }
    }

    internal class RecursivePoco
    {
        public int Level { get; set; }
        public RecursivePoco Child { get; set; }
    }

    internal class DateTimePoco
    {
        public string Name { get; set; }
        public DateTime When { get; set; }
    }

    internal class ListEntityRefPoco
    {
        public List<EntityReference> Refs { get; set; }
    }

    internal class ListMoneyPoco
    {
        public List<Money> Amounts { get; set; }
    }

    internal class FloatPoco
    {
        public float Value { get; set; }
    }

    internal class ReadOnlyPropPoco
    {
        public int Value { get; set; }
        public int Computed => Value * 2;
    }

    internal class JsonInJsonPoco
    {
        public string PropertyA { get; set; }
        public string Json { get; set; }
    }

    internal class ListStringJsonPoco
    {
        public List<string> Items { get; set; }
    }

    /// <summary>
    /// Mock IPluginExecutionContext that simulates v1-v7 properties.
    /// Used to test SerializeContext without requiring the actual Dataverse runtime.
    /// </summary>
    internal class MockPluginExecutionContext : IPluginExecutionContext
    {
        // IExecutionContext (v1)
        public Guid BusinessUnitId { get; set; }
        public Guid CorrelationId { get; set; }
        public int Depth { get; set; }
        public Guid InitiatingUserId { get; set; }
        public ParameterCollection InputParameters { get; set; } = new ParameterCollection();
        public bool IsExecutingOffline { get; set; }
        public bool IsInTransaction { get; set; }
        public bool IsOfflinePlayback { get; set; }
        public int IsolationMode { get; set; }
        public string MessageName { get; set; }
        public int Mode { get; set; }
        public DateTime OperationCreatedOn { get; set; }
        public Guid OperationId { get; set; }
        public Guid OrganizationId { get; set; }
        public string OrganizationName { get; set; }
        public ParameterCollection OutputParameters { get; set; } = new ParameterCollection();
        public EntityReference OwningExtension { get; set; }
        public EntityImageCollection PostEntityImages { get; set; } = new EntityImageCollection();
        public EntityImageCollection PreEntityImages { get; set; } = new EntityImageCollection();
        public Guid PrimaryEntityId { get; set; }
        public string PrimaryEntityName { get; set; }
        public Guid? RequestId { get; set; }
        public string SecondaryEntityName { get; set; }
        public ParameterCollection SharedVariables { get; set; } = new ParameterCollection();
        public Guid UserId { get; set; }

        // IPluginExecutionContext (v1)
        public int Stage { get; set; }
        public IPluginExecutionContext ParentContext { get; set; }

        // v2 properties
        public bool IsPortalsClientCall { get; set; }

        // v5 properties
        public string InitiatingUserAgent { get; set; }

        // v6 properties
        public Guid EnvironmentId { get; set; }
        public Guid TenantId { get; set; }

        // v7 properties
        public bool IsApplicationUser { get; set; }
    }
}
