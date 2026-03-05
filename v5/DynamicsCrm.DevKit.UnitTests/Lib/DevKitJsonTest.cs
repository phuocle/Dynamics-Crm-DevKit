using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using Microsoft.Xrm.Sdk;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Lib
{
    public class DevKitJsonTest
    {
        #region Primitives

        [Fact]
        public void Serialize_Null_ReturnsNullString()
        {
            Assert.Equal("null", DevKitJson.Serialize(null));
        }

        [Fact]
        public void Serialize_String_QuotesAndEscapes()
        {
            Assert.Equal("\"hello\"", DevKitJson.Serialize("hello"));
            Assert.Equal("\"hello\\nworld\"", DevKitJson.Serialize("hello\nworld"));
            Assert.Equal("\"he said \\\"hi\\\"\"", DevKitJson.Serialize("he said \"hi\""));
            Assert.Equal("\"tab\\there\"", DevKitJson.Serialize("tab\there"));
            Assert.Equal("\"back\\\\slash\"", DevKitJson.Serialize("back\\slash"));
        }

        [Fact]
        public void Serialize_Bool_LowercaseTrueFalse()
        {
            Assert.Equal("true", DevKitJson.Serialize(true));
            Assert.Equal("false", DevKitJson.Serialize(false));
        }

        [Fact]
        public void Serialize_Int_Roundtrip()
        {
            Assert.Equal("42", DevKitJson.Serialize(42));
            Assert.Equal("-100", DevKitJson.Serialize(-100));
            Assert.Equal("0", DevKitJson.Serialize(0));
        }

        [Fact]
        public void Serialize_Long_Roundtrip()
        {
            var big = 9999999999L;
            Assert.Equal("9999999999", DevKitJson.Serialize(big));
        }

        [Fact]
        public void Serialize_Double_Roundtrip()
        {
            var json = DevKitJson.Serialize(3.14);
            Assert.Contains("3.14", json);
        }

        [Fact]
        public void Serialize_Decimal_Roundtrip()
        {
            Assert.Equal("123.45", DevKitJson.Serialize(123.45m));
        }

        [Fact]
        public void Serialize_Float_Roundtrip()
        {
            var json = DevKitJson.Serialize(2.5f);
            Assert.Contains("2.5", json);
        }

        [Fact]
        public void Serialize_Byte_Roundtrip()
        {
            Assert.Equal("255", DevKitJson.Serialize((byte)255));
            Assert.Equal("0", DevKitJson.Serialize((byte)0));
        }

        [Fact]
        public void Serialize_Short_Roundtrip()
        {
            Assert.Equal("32767", DevKitJson.Serialize((short)32767));
            Assert.Equal("-100", DevKitJson.Serialize((short)-100));
        }

        [Fact]
        public void Deserialize_Null_ReturnsNull()
        {
            Assert.Null(DevKitJson.Deserialize("null"));
        }

        [Fact]
        public void Deserialize_String_RemovesQuotes()
        {
            Assert.Equal("hello", DevKitJson.Deserialize("\"hello\""));
        }

        [Fact]
        public void Deserialize_StringWithEscapes_Unescapes()
        {
            Assert.Equal("hello\nworld", DevKitJson.Deserialize("\"hello\\nworld\""));
            Assert.Equal("he said \"hi\"", DevKitJson.Deserialize("\"he said \\\"hi\\\"\""));
            Assert.Equal("tab\there", DevKitJson.Deserialize("\"tab\\there\""));
        }

        [Fact]
        public void Deserialize_Bool_ReturnsCorrectType()
        {
            Assert.Equal(true, DevKitJson.Deserialize("true"));
            Assert.Equal(false, DevKitJson.Deserialize("false"));
        }

        [Fact]
        public void Deserialize_Int_ReturnsInt()
        {
            var result = DevKitJson.Deserialize("42");
            Assert.IsType<int>(result);
            Assert.Equal(42, result);
        }

        [Fact]
        public void Deserialize_LargeNumber_ReturnsLong()
        {
            var result = DevKitJson.Deserialize("9999999999");
            Assert.IsType<long>(result);
            Assert.Equal(9999999999L, result);
        }

        [Fact]
        public void Deserialize_Double_ReturnsDouble()
        {
            var result = DevKitJson.Deserialize("3.14");
            Assert.IsType<double>(result);
            Assert.Equal(3.14, (double)result, 10);
        }

        [Fact]
        public void Deserialize_NegativeNumber()
        {
            Assert.Equal(-42, DevKitJson.Deserialize("-42"));
        }

        [Fact]
        public void Deserialize_Generic_ConvertsTypes()
        {
            Assert.Equal(42, DevKitJson.Deserialize<int>("42"));
            Assert.Equal(42L, DevKitJson.Deserialize<long>("42"));
            Assert.Equal(42.0, DevKitJson.Deserialize<double>("42"));
            Assert.Equal(42m, DevKitJson.Deserialize<decimal>("42"));
            Assert.Equal("hello", DevKitJson.Deserialize<string>("\"hello\""));
            Assert.True(DevKitJson.Deserialize<bool>("true"));
        }

        #endregion

        #region DateTime and Guid

        [Fact]
        public void DateTime_Roundtrip()
        {
            var dt = new DateTime(2025, 3, 15, 14, 30, 0, DateTimeKind.Utc);
            var json = DevKitJson.Serialize(dt);
            Assert.Contains("\"__type\":\"DateTime\"", json);
            Assert.Contains("2025-03-15T14:30:00.000Z", json);

            var result = DevKitJson.Deserialize<DateTime>(json);
            Assert.Equal(dt, result);
        }

        [Fact]
        public void Guid_Roundtrip()
        {
            var guid = Guid.Parse("a1b2c3d4-e5f6-7890-abcd-ef1234567890");
            var json = DevKitJson.Serialize(guid);
            Assert.Contains("\"__type\":\"Guid\"", json);

            var result = DevKitJson.Deserialize<Guid>(json);
            Assert.Equal(guid, result);
        }

        [Fact]
        public void ByteArray_Roundtrip_File()
        {
            var data = new byte[] { 0x48, 0x65, 0x6C, 0x6C, 0x6F };
            var json = DevKitJson.Serialize(data);
            Assert.Contains("\"__type\":\"File\"", json);

            var result = (byte[])DevKitJson.Deserialize(json);
            Assert.Equal(data, result);
        }

        #endregion

        #region Collections

        [Fact]
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

            Assert.NotNull(result);
            Assert.Equal("test", result["name"]);
            Assert.Equal(42, result["count"]);
            Assert.Equal(true, result["active"]);
        }

        [Fact]
        public void List_Roundtrip()
        {
            var list = new List<object> { 1, "two", true, null };
            var json = DevKitJson.Serialize(list);
            var result = DevKitJson.Deserialize(json) as List<object>;

            Assert.NotNull(result);
            Assert.Equal(4, result.Count);
            Assert.Equal(1, result[0]);
            Assert.Equal("two", result[1]);
            Assert.Equal(true, result[2]);
            Assert.Null(result[3]);
        }

        [Fact]
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

        [Fact]
        public void EmptyObject_Roundtrip()
        {
            var json = DevKitJson.Serialize(new Dictionary<string, object>());
            Assert.Equal("{}", json);
            var result = DevKitJson.Deserialize(json) as Dictionary<string, object>;
            Assert.NotNull(result);
            Assert.Empty(result);
        }

        [Fact]
        public void EmptyArray_Roundtrip()
        {
            var json = DevKitJson.Serialize(new List<object>());
            Assert.Equal("[]", json);
            var result = DevKitJson.Deserialize(json) as List<object>;
            Assert.NotNull(result);
            Assert.Empty(result);
        }

        #endregion

        #region Money

        [Fact]
        public void Money_Roundtrip()
        {
            var money = new Money(1234.56m);
            var json = DevKitJson.Serialize(money);
            Assert.Contains("\"__type\":\"Money\"", json);
            Assert.Contains("\"Value\":1234.56", json);

            var result = DevKitJson.Deserialize<Money>(json);
            Assert.Equal(1234.56m, result.Value);
        }

        [Fact]
        public void Money_Zero()
        {
            var money = new Money(0m);
            var json = DevKitJson.Serialize(money);
            var result = DevKitJson.Deserialize<Money>(json);
            Assert.Equal(0m, result.Value);
        }

        [Fact]
        public void Money_Negative()
        {
            var money = new Money(-500.99m);
            var json = DevKitJson.Serialize(money);
            var result = DevKitJson.Deserialize<Money>(json);
            Assert.Equal(-500.99m, result.Value);
        }

        #endregion

        #region OptionSetValue

        [Fact]
        public void OptionSetValue_Roundtrip()
        {
            var osv = new OptionSetValue(100000001);
            var json = DevKitJson.Serialize(osv);
            Assert.Contains("\"__type\":\"OptionSetValue\"", json);

            var result = DevKitJson.Deserialize<OptionSetValue>(json);
            Assert.Equal(100000001, result.Value);
        }

        [Fact]
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
            Assert.Equal(3, result.Count);
            Assert.Equal(1, result[0].Value);
            Assert.Equal(2, result[1].Value);
            Assert.Equal(3, result[2].Value);
        }

        #endregion

        #region EntityReference

        [Fact]
        public void EntityReference_Roundtrip()
        {
            var id = Guid.NewGuid();
            var er = new EntityReference("account", id) { Name = "Contoso" };
            var json = DevKitJson.Serialize(er);
            Assert.Contains("\"__type\":\"EntityReference\"", json);
            Assert.Contains("\"LogicalName\":\"account\"", json);
            Assert.Contains("\"Name\":\"Contoso\"", json);

            var result = DevKitJson.Deserialize<EntityReference>(json);
            Assert.Equal("account", result.LogicalName);
            Assert.Equal(id, result.Id);
            Assert.Equal("Contoso", result.Name);
        }

        [Fact]
        public void EntityReference_WithoutName()
        {
            var id = Guid.NewGuid();
            var er = new EntityReference("contact", id);
            var json = DevKitJson.Serialize(er);
            Assert.DoesNotContain("\"Name\"", json);

            var result = DevKitJson.Deserialize<EntityReference>(json);
            Assert.Equal("contact", result.LogicalName);
            Assert.Equal(id, result.Id);
            Assert.Null(result.Name);
        }

        #endregion

        #region AliasedValue

        [Fact]
        public void AliasedValue_WithString()
        {
            var av = new AliasedValue("contact", "fullname", "John Doe");
            var json = DevKitJson.Serialize(av);
            Assert.Contains("\"__type\":\"AliasedValue\"", json);

            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.Equal("contact", result.EntityLogicalName);
            Assert.Equal("fullname", result.AttributeLogicalName);
            Assert.Equal("John Doe", result.Value);
        }

        [Fact]
        public void AliasedValue_WithMoney()
        {
            var av = new AliasedValue("account", "revenue", new Money(50000m));
            var json = DevKitJson.Serialize(av);

            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.Equal("account", result.EntityLogicalName);
            Assert.Equal("revenue", result.AttributeLogicalName);
            Assert.IsType<Money>(result.Value);
            Assert.Equal(50000m, ((Money)result.Value).Value);
        }

        [Fact]
        public void AliasedValue_WithEntityReference()
        {
            var id = Guid.NewGuid();
            var av = new AliasedValue("account", "primarycontactid", new EntityReference("contact", id));
            var json = DevKitJson.Serialize(av);

            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.IsType<EntityReference>(result.Value);
            var er = (EntityReference)result.Value;
            Assert.Equal("contact", er.LogicalName);
            Assert.Equal(id, er.Id);
        }

        [Fact]
        public void AliasedValue_WithOptionSetValue()
        {
            var av = new AliasedValue("account", "statuscode", new OptionSetValue(3));
            var json = DevKitJson.Serialize(av);
            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.IsType<OptionSetValue>(result.Value);
            Assert.Equal(3, ((OptionSetValue)result.Value).Value);
        }

        [Fact]
        public void AliasedValue_WithBool()
        {
            var av = new AliasedValue("contact", "donotphone", true);
            var json = DevKitJson.Serialize(av);
            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.Equal(true, result.Value);
        }

        [Fact]
        public void AliasedValue_WithInt()
        {
            var av = new AliasedValue("account", "numberofemployees", 250);
            var json = DevKitJson.Serialize(av);
            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.Equal(250, result.Value);
        }

        [Fact]
        public void AliasedValue_WithDateTime()
        {
            var dt = new DateTime(2025, 12, 25, 0, 0, 0, DateTimeKind.Utc);
            var av = new AliasedValue("account", "createdon", dt);
            var json = DevKitJson.Serialize(av);
            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.IsType<DateTime>(result.Value);
            Assert.Equal(dt, (DateTime)result.Value);
        }

        [Fact]
        public void AliasedValue_WithGuid()
        {
            var guid = Guid.NewGuid();
            var av = new AliasedValue("account", "accountid", guid);
            var json = DevKitJson.Serialize(av);
            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.IsType<Guid>(result.Value);
            Assert.Equal(guid, (Guid)result.Value);
        }

        [Fact]
        public void AliasedValue_WithNull()
        {
            var av = new AliasedValue("account", "description", null);
            var json = DevKitJson.Serialize(av);
            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.Equal("account", result.EntityLogicalName);
            Assert.Equal("description", result.AttributeLogicalName);
            Assert.Null(result.Value);
        }

        [Fact]
        public void AliasedValue_WithDouble()
        {
            var av = new AliasedValue("account", "new_latitude", 47.6062);
            var json = DevKitJson.Serialize(av);
            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.IsType<double>(result.Value);
            Assert.Equal(47.6062, (double)result.Value, 4);
        }

        [Fact]
        public void AliasedValue_WithLong()
        {
            var av = new AliasedValue("account", "versionnumber", 9876543210L);
            var json = DevKitJson.Serialize(av);
            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.IsType<long>(result.Value);
            Assert.Equal(9876543210L, (long)result.Value);
        }

        #endregion

        #region BooleanManagedProperty

        [Fact]
        public void BooleanManagedProperty_Roundtrip()
        {
            var bmp = new BooleanManagedProperty(true) { CanBeChanged = false };
            var json = DevKitJson.Serialize(bmp);
            Assert.Contains("\"__type\":\"BooleanManagedProperty\"", json);
            Assert.Contains("\"Value\":true", json);
            Assert.Contains("\"CanBeChanged\":false", json);

            var result = DevKitJson.Deserialize<BooleanManagedProperty>(json);
            Assert.True(result.Value);
            Assert.False(result.CanBeChanged);
        }

        #endregion

        #region Entity

        [Fact]
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
            Assert.Equal("account", result.LogicalName);
            Assert.Equal(id, result.Id);
            Assert.Equal("Contoso", result["name"]);
            Assert.Equal(500, result["numberofemployees"]);
            Assert.IsType<Money>(result["revenue"]);
            Assert.Equal(1000000m, ((Money)result["revenue"]).Value);
            Assert.IsType<EntityReference>(result["primarycontactid"]);
            Assert.Equal("John", ((EntityReference)result["primarycontactid"]).Name);
        }

        [Fact]
        public void Entity_WithFormattedValues()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["statuscode"] = new OptionSetValue(1);
            entity.FormattedValues["statuscode"] = "Active";

            var json = DevKitJson.Serialize(entity);
            Assert.Contains("\"FormattedValues\"", json);
            Assert.Contains("\"statuscode\":\"Active\"", json);

            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.Equal("Active", result.FormattedValues["statuscode"]);
        }

        [Fact]
        public void Entity_WithNullAttribute()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = null;
            entity["description"] = "test";

            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.Null(result["name"]);
            Assert.Equal("test", result["description"]);
        }

        [Fact]
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
            Assert.Equal("Contoso Ltd", result["name"]);
            // int
            Assert.Equal(500, result["numberofemployees"]);
            // long - JSON parser returns int if fits, otherwise long
            var vn = result["versionnumber"];
            Assert.IsType<long>(vn);
            Assert.Equal(9876543210L, (long)vn);
            // double
            Assert.Equal(47.6062, (double)result["new_latitude"], 4);
            // decimal - comes back as double from JSON parser, verified via Money for exact decimal
            Assert.IsType<double>(result["exchangerate"]);
            Assert.Equal(1.2345, (double)result["exchangerate"], 4);
            // float - serialized as float, parsed back as double
            Assert.IsType<double>(result["new_temperature"]);
            Assert.Equal(36.6, (double)result["new_temperature"], 1);
            // byte - serialized as number, parsed as int
            Assert.Equal(5, result["new_priority"]);
            // bool
            Assert.Equal(true, result["donotphone"]);
            // DateTime
            Assert.IsType<DateTime>(result["createdon"]);
            Assert.Equal(new DateTime(2025, 6, 15, 10, 30, 0, DateTimeKind.Utc), (DateTime)result["createdon"]);
            // Guid
            Assert.IsType<Guid>(result["processid"]);
            Assert.Equal(rawGuid, (Guid)result["processid"]);
            // Money
            Assert.IsType<Money>(result["revenue"]);
            Assert.Equal(5000000.99m, ((Money)result["revenue"]).Value);
            // OptionSetValue
            Assert.IsType<OptionSetValue>(result["statuscode"]);
            Assert.Equal(1, ((OptionSetValue)result["statuscode"]).Value);
            // OptionSetValueCollection
            Assert.IsType<OptionSetValueCollection>(result["new_industries"]);
            var osvc = (OptionSetValueCollection)result["new_industries"];
            Assert.Equal(3, osvc.Count);
            Assert.Equal(100, osvc[0].Value);
            Assert.Equal(200, osvc[1].Value);
            Assert.Equal(300, osvc[2].Value);
            // EntityReference
            Assert.IsType<EntityReference>(result["primarycontactid"]);
            var er = (EntityReference)result["primarycontactid"];
            Assert.Equal("contact", er.LogicalName);
            Assert.Equal(contactId, er.Id);
            Assert.Equal("John Doe", er.Name);
            // AliasedValue
            Assert.IsType<AliasedValue>(result["contact.fullname"]);
            var av = (AliasedValue)result["contact.fullname"];
            Assert.Equal("contact", av.EntityLogicalName);
            Assert.Equal("fullname", av.AttributeLogicalName);
            Assert.Equal("Jane Smith", av.Value);
            // BooleanManagedProperty
            Assert.IsType<BooleanManagedProperty>(result["iscustomizable"]);
            var bmp = (BooleanManagedProperty)result["iscustomizable"];
            Assert.True(bmp.Value);
            Assert.False(bmp.CanBeChanged);
            // EntityCollection (Activity Party)
            Assert.IsType<EntityCollection>(result["to"]);
            var ec = (EntityCollection)result["to"];
            Assert.Single(ec.Entities);
            Assert.IsType<EntityReference>(ec.Entities[0]["partyid"]);
            // byte[] (File)
            Assert.IsType<byte[]>(result["entityimage"]);
            Assert.Equal(fileData, (byte[])result["entityimage"]);
            // null
            Assert.Null(result["description"]);
        }

        [Fact]
        public void Entity_Empty()
        {
            var entity = new Entity("account");
            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.Equal("account", result.LogicalName);
            Assert.Empty(result.Attributes);
        }

        #endregion

        #region EntityCollection

        [Fact]
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
            Assert.Equal("account", result.EntityName);
            Assert.Equal(2, result.Entities.Count);
            Assert.Equal("Contoso", result.Entities[0]["name"]);
            Assert.Equal("Fabrikam", result.Entities[1]["name"]);
        }

        [Fact]
        public void EntityCollection_Empty()
        {
            var ec = new EntityCollection();
            var json = DevKitJson.Serialize(ec);
            var result = DevKitJson.Deserialize<EntityCollection>(json);
            Assert.Empty(result.Entities);
        }

        #endregion

        #region ParameterCollection

        [Fact]
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
            Assert.IsType<Entity>(result["Target"]);
            Assert.Equal("Contoso", ((Entity)result["Target"])["name"]);
            Assert.Equal(true, result["SuppressDuplicateDetection"]);
        }

        [Fact]
        public void ParameterCollection_WithEntityReference()
        {
            var pc = new ParameterCollection();
            pc["Target"] = new EntityReference("account", Guid.NewGuid());
            pc["id"] = Guid.NewGuid();

            var json = DevKitJson.Serialize(pc);
            var result = DevKitJson.Deserialize<ParameterCollection>(json);
            Assert.IsType<EntityReference>(result["Target"]);
            Assert.IsType<Guid>(result["id"]);
        }

        #endregion

        #region EntityImageCollection

        [Fact]
        public void EntityImageCollection_Roundtrip()
        {
            var eic = new EntityImageCollection();
            var preImage = new Entity("account", Guid.NewGuid());
            preImage["name"] = "Old Name";
            eic["PreImage"] = preImage;

            var json = DevKitJson.Serialize(eic);
            Assert.Contains("\"__type\":\"EntityImageCollection\"", json);

            var result = DevKitJson.Deserialize<EntityImageCollection>(json);
            Assert.True(result.ContainsKey("PreImage"));
            Assert.Equal("Old Name", result["PreImage"]["name"]);
        }

        #endregion

        #region RemoteExecutionContext

        [Fact]
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
            Assert.Equal(buId, result.BusinessUnitId);
            Assert.Equal(corrId, result.CorrelationId);
            Assert.Equal(1, result.Depth);
            Assert.Equal(initUserId, result.InitiatingUserId);
            Assert.Equal("Create", result.MessageName);
            Assert.Equal(0, result.Mode);
            Assert.Equal(orgId, result.OrganizationId);
            Assert.Equal("TestOrg", result.OrganizationName);
            Assert.Equal(primaryId, result.PrimaryEntityId);
            Assert.Equal("account", result.PrimaryEntityName);
            Assert.Equal(40, result.Stage);
            Assert.Equal(userId, result.UserId);

            Assert.IsType<Entity>(result.InputParameters["Target"]);
            Assert.Equal("Contoso", ((Entity)result.InputParameters["Target"])["name"]);
            Assert.Equal("Old Contoso", result.PreEntityImages["PreImage"]["name"]);
        }

        [Fact]
        public void RemoteExecutionContext_WithOwningExtension()
        {
            var ctx = new RemoteExecutionContext();
            var fields = ctx.GetType().GetFields(System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);
            foreach (var f in fields)
                if (f.Name == "_owningExtension")
                    f.SetValue(ctx, new EntityReference("sdkmessageprocessingstep", Guid.NewGuid()) { Name = "MyPlugin" });

            var json = DevKitJson.Serialize(ctx);
            var result = DevKitJson.Deserialize<RemoteExecutionContext>(json);
            Assert.NotNull(result.OwningExtension);
            Assert.Equal("sdkmessageprocessingstep", result.OwningExtension.LogicalName);
            Assert.Equal("MyPlugin", result.OwningExtension.Name);
        }

        [Fact]
        public void RemoteExecutionContext_MinimalEmpty()
        {
            var ctx = new RemoteExecutionContext();
            var json = DevKitJson.Serialize(ctx);
            var result = DevKitJson.Deserialize<RemoteExecutionContext>(json);
            Assert.NotNull(result);
            Assert.Equal(Guid.Empty, result.BusinessUnitId);
            Assert.Equal(0, result.Depth);
        }

        #endregion

        #region Edge Cases

        [Fact]
        public void Serialize_Enum_AsInt()
        {
            var json = DevKitJson.Serialize(DayOfWeek.Wednesday);
            Assert.Equal("3", json);
        }

        [Fact]
        public void Unicode_Roundtrip()
        {
            var json = DevKitJson.Serialize("Vi\u1EC7t Nam");
            var result = DevKitJson.Deserialize<string>(json);
            Assert.Equal("Vi\u1EC7t Nam", result);
        }

        [Fact]
        public void UnicodeEscape_InJson()
        {
            var result = DevKitJson.Deserialize<string>("\"\\u0041\\u0042\"");
            Assert.Equal("AB", result);
        }

        [Fact]
        public void NestedEntity_InEntityCollection_InAliasedValue()
        {
            var innerEntity = new Entity("contact", Guid.NewGuid());
            innerEntity["fullname"] = "John";
            var ec = new EntityCollection();
            ec.Entities.Add(innerEntity);
            var av = new AliasedValue("account", "contacts", ec);

            var json = DevKitJson.Serialize(av);
            var result = DevKitJson.Deserialize<AliasedValue>(json);
            Assert.IsType<EntityCollection>(result.Value);
            var resEc = (EntityCollection)result.Value;
            Assert.Single(resEc.Entities);
            Assert.Equal("John", resEc.Entities[0]["fullname"]);
        }

        [Fact]
        public void WhitespaceInJson_ParsedCorrectly()
        {
            var json = "  {  \"name\"  :  \"test\"  ,  \"value\"  :  42  }  ";
            var result = DevKitJson.Deserialize(json) as Dictionary<string, object>;
            Assert.NotNull(result);
            Assert.Equal("test", result["name"]);
            Assert.Equal(42, result["value"]);
        }

        [Fact]
        public void EmptyString_Deserialize()
        {
            Assert.Null(DevKitJson.Deserialize(null));
            Assert.Equal("", DevKitJson.Deserialize<string>("\"\""));
        }

        [Fact]
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
            Assert.Equal(100, resChildren.Entities.Count);
            Assert.Equal("Contact 50", resChildren.Entities[50]["fullname"]);
            Assert.Equal(5000m, ((Money)resChildren.Entities[50]["revenue"]).Value);
        }

        #endregion

        #region Integration - Simulate Plugin Context

        [Fact]
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

            Assert.Equal("Create", restored.MessageName);
            Assert.Equal("account", restored.PrimaryEntityName);
            Assert.Equal(accountId, restored.PrimaryEntityId);
            Assert.Equal(1, restored.Depth);
            Assert.Equal(40, restored.Stage);

            var restoredTarget = (Entity)restored.InputParameters["Target"];
            Assert.Equal("Contoso Ltd", restoredTarget["name"]);
            Assert.Equal(5000000m, ((Money)restoredTarget["revenue"]).Value);
            Assert.Equal(1000, restoredTarget["numberofemployees"]);
            Assert.Equal("Jane Smith", ((EntityReference)restoredTarget["primarycontactid"]).Name);
            Assert.Equal(1, ((OptionSetValue)restoredTarget["statuscode"]).Value);
            Assert.IsType<DateTime>(restoredTarget["createdon"]);
            Assert.Equal(true, restoredTarget["isactive"]);

            Assert.Equal(accountId, restored.OutputParameters["id"]);
            Assert.Equal("CustomValue", restored.SharedVariables["CustomKey"]);
        }

        [Fact]
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

            Assert.Equal("Update", restored.MessageName);
            Assert.Equal(20, restored.Stage);

            var restoredTarget = (Entity)restored.InputParameters["Target"];
            Assert.Equal("New Name", restoredTarget["name"]);

            var restoredPreImage = restored.PreEntityImages["PreImage"];
            Assert.Equal("Old Name", restoredPreImage["name"]);
            Assert.Equal(500m, ((Money)restoredPreImage["revenue"]).Value);
            Assert.Equal("Active", restoredPreImage.FormattedValues["statuscode"]);
        }

        [Fact]
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

            Assert.Equal("Delete", restored.MessageName);
            Assert.IsType<EntityReference>(restored.InputParameters["Target"]);
            Assert.Equal(accountId, ((EntityReference)restored.InputParameters["Target"]).Id);
        }

        #endregion

        #region Activity Party Pattern (EntityCollection as attribute)

        [Fact]
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

            Assert.Equal("Test Email", result["subject"]);

            var to = (EntityCollection)result["to"];
            Assert.Equal(2, to.Entities.Count);
            Assert.Equal("john@contoso.com", to.Entities[0]["addressused"]);
            Assert.Equal("Jane", ((EntityReference)to.Entities[1]["partyid"]).Name);

            var from = (EntityCollection)result["from"];
            Assert.Single(from.Entities);
            Assert.IsType<EntityReference>(from.Entities[0]["partyid"]);
        }

        #endregion

        #region Numeric Edge Cases

        [Fact]
        public void Long_MaxValue_Roundtrip()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["versionnumber"] = long.MaxValue;
            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.Equal(long.MaxValue, (long)result["versionnumber"]);
        }

        [Fact]
        public void Int_MinMax_Roundtrip()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["min_val"] = int.MinValue;
            entity["max_val"] = int.MaxValue;
            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.Equal(int.MinValue, result["min_val"]);
            Assert.Equal(int.MaxValue, result["max_val"]);
        }

        [Fact]
        public void Money_LargeValue_Roundtrip()
        {
            var money = new Money(999999999999.9999m);
            var json = DevKitJson.Serialize(money);
            var result = DevKitJson.Deserialize<Money>(json);
            Assert.Equal(999999999999.9999m, result.Value, 2);
        }

        [Fact]
        public void Double_ScientificNotation()
        {
            var result = DevKitJson.Deserialize("1.5e2");
            Assert.IsType<double>(result);
            Assert.Equal(150.0, (double)result);
        }

        [Fact]
        public void Double_NegativeExponent()
        {
            var result = DevKitJson.Deserialize("2.5e-3");
            Assert.IsType<double>(result);
            Assert.Equal(0.0025, (double)result, 10);
        }

        #endregion

        #region String Edge Cases

        [Fact]
        public void String_Empty_Roundtrip()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = "";
            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.Equal("", result["name"]);
        }

        [Fact]
        public void String_SpecialChars_Roundtrip()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["description"] = "Line1\nLine2\tTabbed\r\nWindows\"Quoted\"Back\\slash";
            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.Equal("Line1\nLine2\tTabbed\r\nWindows\"Quoted\"Back\\slash", result["description"]);
        }

        [Fact]
        public void String_Vietnamese_Roundtrip()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = "Công ty TNHH Động lực Việt Nam";
            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.Equal("Công ty TNHH Động lực Việt Nam", result["name"]);
        }

        [Fact]
        public void String_Chinese_Japanese_Korean()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = "日本語テスト 한국어 中文测试";
            var json = DevKitJson.Serialize(entity);
            var result = DevKitJson.Deserialize<Entity>(json);
            Assert.Equal("日本語テスト 한국어 中文测试", result["name"]);
        }

        [Fact]
        public void String_SurrogatePair_Emoji()
        {
            var result = DevKitJson.Deserialize<string>("\"\\uD83D\\uDE00\"");
            Assert.Equal("\uD83D\uDE00", result);
        }

        #endregion

        #region FormattedValues Patterns

        [Fact]
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

            Assert.Equal(5, result.FormattedValues.Count);
            Assert.Equal("Active", result.FormattedValues["statuscode"]);
            Assert.Equal("Active", result.FormattedValues["statecode"]);
            Assert.Equal("Technology", result.FormattedValues["industrycode"]);
            Assert.Equal("$5,000,000.00", result.FormattedValues["revenue"]);
            Assert.Equal("1/1/2025 12:00 AM", result.FormattedValues["createdon"]);
        }

        #endregion

        #region SerializeContext & v2-v7+ Auto-Discovery

        [Fact]
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

            Assert.Equal(jsonSerialize, jsonSerializeContext);
        }

        [Fact]
        public void SerializeContext_NullReturnsNull()
        {
            Assert.Equal("null", DevKitJson.SerializeContextFull(null));
        }

        [Fact]
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

        [Fact]
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

            Assert.Equal("Create", ctx.MessageName);
            Assert.Equal("account", ctx.PrimaryEntityName);
            Assert.Equal(orgId, ctx.OrganizationId);
            Assert.Equal("MyOrg", ctx.OrganizationName);
            Assert.Equal(1, ctx.Depth);
            Assert.Equal(40, ctx.Stage);
        }

        [Fact]
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

        [Fact]
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
            Assert.Equal("Retrieve", ctx.MessageName);
            Assert.Equal("account", ctx.PrimaryEntityName);
        }

        #endregion

        #region JSON File - All Dataverse Types (AllDataverseTypes.json)

        private static string ReadJsonFile()
        {
            var basePath = AppDomain.CurrentDomain.BaseDirectory;
            var path = Path.Combine(basePath, "Lib", "AllDataverseTypes.json");
            return File.ReadAllText(path);
        }

        [Fact]
        public void JsonFile_DeserializesToRemoteExecutionContext()
        {
            var json = ReadJsonFile();
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(json);
            Assert.NotNull(ctx);
            Assert.IsType<RemoteExecutionContext>(ctx);
        }

        [Fact]
        public void JsonFile_ContextProperties()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());

            Assert.Equal(Guid.Parse("a1b2c3d4-e5f6-7890-abcd-ef1234567890"), ctx.BusinessUnitId);
            Assert.Equal(Guid.Parse("b2c3d4e5-f6a7-8901-bcde-f12345678901"), ctx.CorrelationId);
            Assert.Equal(1, ctx.Depth);
            Assert.Equal(Guid.Parse("c3d4e5f6-a7b8-9012-cdef-123456789012"), ctx.InitiatingUserId);
            Assert.False(ctx.IsExecutingOffline);
            Assert.True(ctx.IsInTransaction);
            Assert.False(ctx.IsOfflinePlayback);
            Assert.Equal(2, ctx.IsolationMode);
            Assert.Equal("Update", ctx.MessageName);
            Assert.Equal(0, ctx.Mode);
            Assert.Equal(new DateTime(2025, 6, 15, 14, 30, 0, DateTimeKind.Utc), ctx.OperationCreatedOn);
            Assert.Equal(Guid.Parse("f6a7b8c9-d0e1-2345-fabc-456789012345"), ctx.OperationId);
            Assert.Equal(Guid.Parse("11111111-2222-3333-4444-555555555555"), ctx.OrganizationId);
            Assert.Equal("ContosoOrg", ctx.OrganizationName);
            Assert.Equal(Guid.Parse("d4e5f6a7-b8c9-0123-defa-234567890123"), ctx.PrimaryEntityId);
            Assert.Equal("account", ctx.PrimaryEntityName);
            Assert.Equal(Guid.Parse("33333333-4444-5555-6666-777777777777"), ctx.RequestId);
            Assert.Equal("none", ctx.SecondaryEntityName);
            Assert.Equal(40, ctx.Stage);
            Assert.Equal(Guid.Parse("44444444-5555-6666-7777-888888888888"), ctx.UserId);
        }

        [Fact]
        public void JsonFile_OwningExtension()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());

            Assert.NotNull(ctx.OwningExtension);
            Assert.Equal("sdkmessageprocessingstep", ctx.OwningExtension.LogicalName);
            Assert.Equal(Guid.Parse("22222222-3333-4444-5555-666666666666"), ctx.OwningExtension.Id);
            Assert.Equal("AccountPlugin: Update of account", ctx.OwningExtension.Name);
        }

        [Fact]
        public void JsonFile_TargetEntity_BasicAttributes()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            Assert.Equal("account", target.LogicalName);
            Assert.Equal(Guid.Parse("d4e5f6a7-b8c9-0123-defa-234567890123"), target.Id);

            // string
            Assert.Equal("Contoso Ltd", target["name"]);

            // int
            Assert.Equal(500, target["numberofemployees"]);

            // long (value > int.MaxValue)
            Assert.IsType<long>(target["versionnumber"]);
            Assert.Equal(3000000000L, target["versionnumber"]);

            // double
            Assert.IsType<double>(target["exchangerate"]);
            Assert.Equal(1.234567, (double)target["exchangerate"], 6);
            Assert.Equal(106.6297, (double)target["address1_longitude"], 4);
            Assert.Equal(10.8231, (double)target["address1_latitude"], 4);

            // bool
            Assert.Equal(true, target["donotphone"]);
            Assert.Equal(false, target["donotemail"]);

            // null
            Assert.Null(target["nullfield"]);
        }

        [Fact]
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

        [Fact]
        public void JsonFile_TargetEntity_Money()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var revenue = (Money)target["revenue"];
            Assert.Equal(1500000.50m, revenue.Value);

            var creditLimit = (Money)target["creditlimit"];
            Assert.Equal(250000.75m, creditLimit.Value);
        }

        [Fact]
        public void JsonFile_TargetEntity_OptionSetValue()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var status = (OptionSetValue)target["statuscode"];
            Assert.Equal(1, status.Value);

            var industry = (OptionSetValue)target["industrycode"];
            Assert.Equal(100000001, industry.Value);
        }

        [Fact]
        public void JsonFile_TargetEntity_EntityReference()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var contact = (EntityReference)target["primarycontactid"];
            Assert.Equal("contact", contact.LogicalName);
            Assert.Equal(Guid.Parse("e5f6a7b8-c9d0-1234-efab-345678901234"), contact.Id);
            Assert.Equal("John Smith", contact.Name);
        }

        [Fact]
        public void JsonFile_TargetEntity_BooleanManagedProperty()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var bmp = (BooleanManagedProperty)target["ismanaged"];
            Assert.True(bmp.Value);
            Assert.False(bmp.CanBeChanged);
        }

        [Fact]
        public void JsonFile_TargetEntity_DateTime()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var created = (DateTime)target["createdon"];
            Assert.Equal(new DateTime(2025, 1, 15, 10, 30, 0, DateTimeKind.Utc), created);
        }

        [Fact]
        public void JsonFile_TargetEntity_Guid()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var id = (Guid)target["accountid"];
            Assert.Equal(Guid.Parse("d4e5f6a7-b8c9-0123-defa-234567890123"), id);
        }

        [Fact]
        public void JsonFile_TargetEntity_File()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var bytes = (byte[])target["entityimage"];
            Assert.Equal("Hello World", System.Text.Encoding.UTF8.GetString(bytes));
        }

        [Fact]
        public void JsonFile_TargetEntity_OptionSetValueCollection()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var osvc = (OptionSetValueCollection)target["preferredcontactmethodcode"];
            Assert.Equal(3, osvc.Count);
            Assert.Equal(1, osvc[0].Value);
            Assert.Equal(2, osvc[1].Value);
            Assert.Equal(3, osvc[2].Value);
        }

        [Fact]
        public void JsonFile_TargetEntity_AliasedValue_AllInnerTypes()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            // Key uses dot notation: "c.fullname" where "c" is the LinkEntity EntityAlias
            var aliasStr = (AliasedValue)target["c.fullname"];
            Assert.Equal("contact", aliasStr.EntityLogicalName);
            Assert.Equal("fullname", aliasStr.AttributeLogicalName);
            Assert.Equal("Jane Doe", aliasStr.Value);

            var aliasInt = (AliasedValue)target["c.age"];
            Assert.Equal(35, aliasInt.Value);

            var aliasMoney = (AliasedValue)target["c.annualincome"];
            Assert.IsType<Money>(aliasMoney.Value);
            Assert.Equal(75000.00m, ((Money)aliasMoney.Value).Value);

            var aliasOsv = (AliasedValue)target["c.statuscode"];
            Assert.IsType<OptionSetValue>(aliasOsv.Value);
            Assert.Equal(2, ((OptionSetValue)aliasOsv.Value).Value);

            var aliasDate = (AliasedValue)target["c.createdon"];
            Assert.IsType<DateTime>(aliasDate.Value);
            Assert.Equal(new DateTime(2024, 6, 15, 8, 0, 0, DateTimeKind.Utc), (DateTime)aliasDate.Value);

            // Guid value (NOT EntityReference) - Dataverse returns lookup IDs as Guid in AliasedValue
            var aliasGuid = (AliasedValue)target["c.contactid"];
            Assert.IsType<Guid>(aliasGuid.Value);
            Assert.Equal(Guid.Parse("e5f6a7b8-c9d0-1234-efab-345678901234"), (Guid)aliasGuid.Value);

            var aliasBool = (AliasedValue)target["c.isactive"];
            Assert.Equal(true, aliasBool.Value);

            var aliasDbl = (AliasedValue)target["c.address1_longitude"];
            Assert.IsType<double>(aliasDbl.Value);
            Assert.Equal(106.6297, (double)aliasDbl.Value, 4);

            // AliasedValue with EntityReference (lookup field from linked entity)
            var aliasRef = (AliasedValue)target["c.parentcustomerid"];
            Assert.Equal("contact", aliasRef.EntityLogicalName);
            Assert.Equal("parentcustomerid", aliasRef.AttributeLogicalName);
            Assert.IsType<EntityReference>(aliasRef.Value);
            var refValue = (EntityReference)aliasRef.Value;
            Assert.Equal("account", refValue.LogicalName);
            Assert.Equal(Guid.Parse("d4e5f6a7-b8c9-0123-4567-890123456789"), refValue.Id);
            Assert.Equal("Contoso Ltd", refValue.Name);

            var aliasNull = (AliasedValue)target["c.middlename"];
            Assert.Null(aliasNull.Value);
        }

        [Fact]
        public void JsonFile_AliasedValue_GetAliasedValue_LateBoundPattern()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            // Simulate EntityBase.GetAliasedValue<T> pattern (used by late-bound generated classes)
            // e.g.: public string ContactFullname => GetAliasedValue<string>("c.fullname");

            // GetAliasedValue<string>
            var aliasedFullname = target.GetAttributeValue<AliasedValue>("c.fullname");
            Assert.NotNull(aliasedFullname);
            string fullname = (string)aliasedFullname.Value;
            Assert.Equal("Jane Doe", fullname);

            // GetAliasedValue<Money> → .Value for decimal
            var aliasedIncome = target.GetAttributeValue<AliasedValue>("c.annualincome");
            Assert.NotNull(aliasedIncome);
            decimal income = ((Money)aliasedIncome.Value).Value;
            Assert.Equal(75000.00m, income);

            // GetAliasedValue<OptionSetValue> → .Value for int
            var aliasedStatus = target.GetAttributeValue<AliasedValue>("c.statuscode");
            Assert.NotNull(aliasedStatus);
            int statusValue = ((OptionSetValue)aliasedStatus.Value).Value;
            Assert.Equal(2, statusValue);

            // GetAliasedValue<EntityReference> from Guid
            // This is the crucial pattern: Dataverse returns lookup as Guid in AliasedValue,
            // EntityBase.GetAliasedValue<EntityReference> converts it using EntityLogicalName
            var aliasedContact = target.GetAttributeValue<AliasedValue>("c.contactid");
            Assert.NotNull(aliasedContact);
            Assert.IsType<Guid>(aliasedContact.Value);
            Assert.Equal("contact", aliasedContact.EntityLogicalName);
            var contactRef = new EntityReference(aliasedContact.EntityLogicalName, (Guid)aliasedContact.Value);
            Assert.Equal("contact", contactRef.LogicalName);
            Assert.Equal(Guid.Parse("e5f6a7b8-c9d0-1234-efab-345678901234"), contactRef.Id);

            // GetAliasedValue<DateTime?>
            var aliasedDate = target.GetAttributeValue<AliasedValue>("c.createdon");
            Assert.NotNull(aliasedDate);
            DateTime createdOn = (DateTime)aliasedDate.Value;
            Assert.Equal(new DateTime(2024, 6, 15, 8, 0, 0, DateTimeKind.Utc), createdOn);

            // GetAliasedValue<Guid> from EntityReference
            // EntityBase.GetAliasedValue handles: if (typeof(T) == typeof(Guid) && aliased.Value is EntityReference) → .Id
            var aliasedLookup = target.GetAttributeValue<AliasedValue>("c.parentcustomerid");
            Assert.NotNull(aliasedLookup);
            Assert.IsType<EntityReference>(aliasedLookup.Value);
            var lookupRef = (EntityReference)aliasedLookup.Value;
            Guid lookupId = lookupRef.Id;
            Assert.Equal(Guid.Parse("d4e5f6a7-b8c9-0123-4567-890123456789"), lookupId);
            Assert.Equal("account", lookupRef.LogicalName);
            Assert.Equal("Contoso Ltd", lookupRef.Name);

            // Null value → GetAliasedValue returns AliasedValue but Value is null
            var aliasedNull = target.GetAttributeValue<AliasedValue>("c.middlename");
            Assert.NotNull(aliasedNull);
            Assert.Null(aliasedNull.Value);

            // Non-existing key → GetAttributeValue returns null
            var aliasedMissing = target.GetAttributeValue<AliasedValue>("c.doesnotexist");
            Assert.Null(aliasedMissing);
        }

        [Fact]
        public void JsonFile_TargetEntity_EntityCollection_ActivityParty()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var emailTo = (EntityCollection)target["email_to"];
            Assert.Equal("activityparty", emailTo.EntityName);
            Assert.Equal(2, emailTo.Entities.Count);

            var party1 = (EntityReference)emailTo.Entities[0]["partyid"];
            Assert.Equal("contact", party1.LogicalName);
            Assert.Equal("Alice", party1.Name);

            var party2 = (EntityReference)emailTo.Entities[1]["partyid"];
            Assert.Equal("Bob", party2.Name);
        }

        [Fact]
        public void JsonFile_TargetEntity_FormattedValues()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            Assert.Equal(7, target.FormattedValues.Count);
            Assert.Equal("Active", target.FormattedValues["statuscode"]);
            Assert.Equal("Technology", target.FormattedValues["industrycode"]);
            Assert.Equal("$1,500,000.50", target.FormattedValues["revenue"]);
            Assert.Equal("$250,000.75", target.FormattedValues["creditlimit"]);
            Assert.Equal("1/15/2025 10:30 AM", target.FormattedValues["createdon"]);
            Assert.Equal("Do Not Allow", target.FormattedValues["donotphone"]);
            Assert.Equal("Allow", target.FormattedValues["donotemail"]);
        }

        [Fact]
        public void JsonFile_PreEntityImages()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());

            Assert.Single(ctx.PreEntityImages);
            var preImage = ctx.PreEntityImages["PreImage"];
            Assert.Equal("account", preImage.LogicalName);
            Assert.Equal("Contoso Ltd", preImage["name"]);
            Assert.Equal(1500000.50m, ((Money)preImage["revenue"]).Value);
        }

        [Fact]
        public void JsonFile_PostEntityImages()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());

            Assert.Single(ctx.PostEntityImages);
            var postImage = ctx.PostEntityImages["PostImage"];
            Assert.Equal("account", postImage.LogicalName);
            Assert.Equal("Contoso Ltd (Updated)", postImage["name"]);
            Assert.Equal(2000000.00m, ((Money)postImage["revenue"]).Value);
        }

        [Fact]
        public void JsonFile_OutputParameters()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());

            Assert.Single(ctx.OutputParameters);
            var id = (Guid)ctx.OutputParameters["id"];
            Assert.Equal(Guid.Parse("d4e5f6a7-b8c9-0123-defa-234567890123"), id);
        }

        [Fact]
        public void JsonFile_SharedVariables()
        {
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadJsonFile());

            Assert.Equal(4, ctx.SharedVariables.Count);
            Assert.Equal(true, ctx.SharedVariables["IsAutoTransact"]);
            Assert.Equal("PostUpdate", ctx.SharedVariables["PluginStep"]);
            Assert.Equal(3, ctx.SharedVariables["RetryCount"]);
            Assert.IsType<DateTime>(ctx.SharedVariables["Timestamp"]);
        }

        [Fact]
        public void JsonFile_Roundtrip_SerializeAndDeserializeBack()
        {
            var json1 = ReadJsonFile();
            var ctx1 = DevKitJson.Deserialize<RemoteExecutionContext>(json1);

            var json2 = DevKitJson.Serialize(ctx1);
            var ctx2 = DevKitJson.Deserialize<RemoteExecutionContext>(json2);

            Assert.Equal(ctx1.MessageName, ctx2.MessageName);
            Assert.Equal(ctx1.PrimaryEntityName, ctx2.PrimaryEntityName);
            Assert.Equal(ctx1.OrganizationId, ctx2.OrganizationId);
            Assert.Equal(ctx1.Depth, ctx2.Depth);
            Assert.Equal(ctx1.Stage, ctx2.Stage);

            var target1 = (Entity)ctx1.InputParameters["Target"];
            var target2 = (Entity)ctx2.InputParameters["Target"];
            Assert.Equal(target1.LogicalName, target2.LogicalName);
            Assert.Equal(target1.Id, target2.Id);
            Assert.Equal(target1["name"], target2["name"]);
            Assert.Equal(((Money)target1["revenue"]).Value, ((Money)target2["revenue"]).Value);
            Assert.Equal(((OptionSetValue)target1["statuscode"]).Value, ((OptionSetValue)target2["statuscode"]).Value);
        }

        [Fact]
        public void JsonFile_Roundtrip_AliasedValue_DotKeys_Preserved()
        {
            var json1 = ReadJsonFile();
            var ctx1 = DevKitJson.Deserialize<RemoteExecutionContext>(json1);

            var json2 = DevKitJson.Serialize(ctx1);
            var ctx2 = DevKitJson.Deserialize<RemoteExecutionContext>(json2);

            var target = (Entity)ctx2.InputParameters["Target"];

            // Dot-notation keys survive roundtrip
            var aliasStr = target.GetAttributeValue<AliasedValue>("c.fullname");
            Assert.NotNull(aliasStr);
            Assert.Equal("contact", aliasStr.EntityLogicalName);
            Assert.Equal("fullname", aliasStr.AttributeLogicalName);
            Assert.Equal("Jane Doe", aliasStr.Value);

            // EntityReference inside AliasedValue survives roundtrip
            var aliasRef = target.GetAttributeValue<AliasedValue>("c.parentcustomerid");
            Assert.NotNull(aliasRef);
            Assert.Equal("contact", aliasRef.EntityLogicalName);
            var refVal = (EntityReference)aliasRef.Value;
            Assert.Equal("account", refVal.LogicalName);
            Assert.Equal(Guid.Parse("d4e5f6a7-b8c9-0123-4567-890123456789"), refVal.Id);
            Assert.Equal("Contoso Ltd", refVal.Name);

            // Guid inside AliasedValue → EntityReference conversion pattern
            var aliasGuid = target.GetAttributeValue<AliasedValue>("c.contactid");
            Assert.NotNull(aliasGuid);
            Assert.IsType<Guid>(aliasGuid.Value);
            var contactRef = new EntityReference(aliasGuid.EntityLogicalName, (Guid)aliasGuid.Value);
            Assert.Equal("contact", contactRef.LogicalName);
            Assert.Equal(Guid.Parse("e5f6a7b8-c9d0-1234-efab-345678901234"), contactRef.Id);
        }

        #endregion

        #region POCO Serialization/Deserialization

        [Fact]
        public void Deserialize_SimplePoco_MapsFromDictionary()
        {
            var json = "{\"QuoteId\":\"abc-123\"}";
            var result = DevKitJson.Deserialize<InputCloneQuote>(json);
            Assert.NotNull(result);
            Assert.Equal("abc-123", result.QuoteId);
        }

        [Fact]
        public void Deserialize_PocoWithMultipleTypes()
        {
            var json = "{\"Name\":\"Test\",\"Count\":42,\"IsActive\":true,\"Amount\":99.5}";
            var result = DevKitJson.Deserialize<SamplePoco>(json);
            Assert.NotNull(result);
            Assert.Equal("Test", result.Name);
            Assert.Equal(42, result.Count);
            Assert.True(result.IsActive);
            Assert.Equal(99.5, result.Amount, 1);
        }

        [Fact]
        public void Deserialize_PocoWithNullProperty()
        {
            var json = "{\"QuoteId\":null}";
            var result = DevKitJson.Deserialize<InputCloneQuote>(json);
            Assert.NotNull(result);
            Assert.Null(result.QuoteId);
        }

        [Fact]
        public void Deserialize_PocoWithNestedObject()
        {
            var json = "{\"OrderId\":\"order-1\",\"Customer\":{\"Name\":\"John\",\"Count\":5,\"IsActive\":true,\"Amount\":100.0}}";
            var result = DevKitJson.Deserialize<OrderPoco>(json);
            Assert.NotNull(result);
            Assert.Equal("order-1", result.OrderId);
            Assert.NotNull(result.Customer);
            Assert.Equal("John", result.Customer.Name);
            Assert.Equal(5, result.Customer.Count);
        }

        [Fact]
        public void Serialize_SimplePoco_WritesProperties()
        {
            var input = new InputCloneQuote { QuoteId = "abc-123" };
            var json = DevKitJson.Serialize(input);
            Assert.Contains("\"QuoteId\":\"abc-123\"", json);
        }

        [Fact]
        public void Serialize_Poco_Roundtrip()
        {
            var original = new SamplePoco { Name = "Test", Count = 42, IsActive = true, Amount = 99.5 };
            var json = DevKitJson.Serialize(original);
            var result = DevKitJson.Deserialize<SamplePoco>(json);
            Assert.Equal(original.Name, result.Name);
            Assert.Equal(original.Count, result.Count);
            Assert.Equal(original.IsActive, result.IsActive);
            Assert.Equal(original.Amount, result.Amount, 1);
        }

        [Fact]
        public void Serialize_NestedPoco_Roundtrip()
        {
            var original = new OrderPoco
            {
                OrderId = "order-1",
                Customer = new SamplePoco { Name = "John", Count = 5, IsActive = true, Amount = 100.0 }
            };
            var json = DevKitJson.Serialize(original);
            var result = DevKitJson.Deserialize<OrderPoco>(json);
            Assert.Equal("order-1", result.OrderId);
            Assert.NotNull(result.Customer);
            Assert.Equal("John", result.Customer.Name);
            Assert.Equal(5, result.Customer.Count);
        }

        [Fact]
        public void MapTo_FromDictionary_MapsCorrectly()
        {
            var dict = new Dictionary<string, object>
            {
                { "QuoteId", "abc-123" }
            };
            var result = DevKitJson.MapTo<InputCloneQuote>(dict);
            Assert.NotNull(result);
            Assert.Equal("abc-123", result.QuoteId);
        }

        [Fact]
        public void MapTo_CaseInsensitive()
        {
            var dict = new Dictionary<string, object>
            {
                { "quoteid", "abc-123" }
            };
            var result = DevKitJson.MapTo<InputCloneQuote>(dict);
            Assert.Equal("abc-123", result.QuoteId);
        }

        [Fact]
        public void MapTo_Null_ReturnsDefault()
        {
            var result = DevKitJson.MapTo<InputCloneQuote>(null);
            Assert.Null(result);
        }

        [Fact]
        public void MapTo_AlreadyCorrectType_ReturnsSame()
        {
            var original = new InputCloneQuote { QuoteId = "abc" };
            var result = DevKitJson.MapTo<InputCloneQuote>(original);
            Assert.Same(original, result);
        }

        [Fact]
        public void Poco_InParameterCollection_Roundtrip()
        {
            var pc = new ParameterCollection();
            pc["Input"] = new InputCloneQuote { QuoteId = "quote-guid-123" };

            var json = DevKitJson.Serialize(pc);
            var restored = DevKitJson.Deserialize<ParameterCollection>(json);

            var input = DevKitJson.MapTo<InputCloneQuote>(restored["Input"]);
            Assert.Equal("quote-guid-123", input.QuoteId);
        }

        [Fact]
        public void Poco_WithGuidProperty_Roundtrip()
        {
            var id = Guid.NewGuid();
            var json = "{\"Id\":\"" + id.ToString("D") + "\",\"Name\":\"Test\"}";
            var result = DevKitJson.Deserialize<GuidPoco>(json);
            Assert.Equal(id, result.Id);
            Assert.Equal("Test", result.Name);
        }

        [Fact]
        public void Deserialize_PocoWithListString()
        {
            var json = "{\"PriceListLines\":[\"f3905a0e-5e18-f111-8342-70a8a502738b\",\"f8905a0e-5e18-f111-8342-70a8a502738b\"]}";
            var result = DevKitJson.Deserialize<Input_CreateQuote>(json);
            Assert.NotNull(result);
            Assert.NotNull(result.PriceListLines);
            Assert.Equal(2, result.PriceListLines.Count);
            Assert.Equal("f3905a0e-5e18-f111-8342-70a8a502738b", result.PriceListLines[0]);
            Assert.Equal("f8905a0e-5e18-f111-8342-70a8a502738b", result.PriceListLines[1]);
        }

        [Fact]
        public void Deserialize_PocoWithListInt()
        {
            var json = "{\"Values\":[1,2,3,4,5]}";
            var result = DevKitJson.Deserialize<ListIntPoco>(json);
            Assert.NotNull(result);
            Assert.Equal(5, result.Values.Count);
            Assert.Equal(1, result.Values[0]);
            Assert.Equal(5, result.Values[4]);
        }

        [Fact]
        public void Deserialize_PocoWithListGuid()
        {
            var g1 = Guid.NewGuid();
            var g2 = Guid.NewGuid();
            var json = "{\"Ids\":[\"" + g1.ToString("D") + "\",\"" + g2.ToString("D") + "\"]}";
            var result = DevKitJson.Deserialize<ListGuidPoco>(json);
            Assert.NotNull(result);
            Assert.Equal(2, result.Ids.Count);
            Assert.Equal(g1, result.Ids[0]);
            Assert.Equal(g2, result.Ids[1]);
        }

        [Fact]
        public void Deserialize_PocoWithArrayString()
        {
            var json = "{\"Tags\":[\"tag1\",\"tag2\",\"tag3\"]}";
            var result = DevKitJson.Deserialize<ArrayStringPoco>(json);
            Assert.NotNull(result);
            Assert.Equal(3, result.Tags.Length);
            Assert.Equal("tag1", result.Tags[0]);
            Assert.Equal("tag3", result.Tags[2]);
        }

        [Fact]
        public void Serialize_PocoWithListString_Roundtrip()
        {
            var original = new Input_CreateQuote
            {
                PriceListLines = new List<string> { "aaa-bbb", "ccc-ddd" }
            };
            var json = DevKitJson.Serialize(original);
            var result = DevKitJson.Deserialize<Input_CreateQuote>(json);
            Assert.NotNull(result.PriceListLines);
            Assert.Equal(2, result.PriceListLines.Count);
            Assert.Equal("aaa-bbb", result.PriceListLines[0]);
            Assert.Equal("ccc-ddd", result.PriceListLines[1]);
        }

        [Fact]
        public void Deserialize_PocoWithEmptyList()
        {
            var json = "{\"PriceListLines\":[]}";
            var result = DevKitJson.Deserialize<Input_CreateQuote>(json);
            Assert.NotNull(result);
            Assert.NotNull(result.PriceListLines);
            Assert.Empty(result.PriceListLines);
        }

        [Fact]
        public void MapTo_PocoWithListString()
        {
            var dict = new Dictionary<string, object>
            {
                { "PriceListLines", new List<object> { "guid-1", "guid-2" } }
            };
            var result = DevKitJson.MapTo<Input_CreateQuote>(dict);
            Assert.NotNull(result);
            Assert.NotNull(result.PriceListLines);
            Assert.Equal(2, result.PriceListLines.Count);
            Assert.Equal("guid-1", result.PriceListLines[0]);
        }

        [Fact]
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
            Assert.NotNull(input.PriceListLines);
            Assert.Equal(2, input.PriceListLines.Count);
            Assert.Equal("f3905a0e-5e18-f111-8342-70a8a502738b", input.PriceListLines[0]);
        }

        #endregion

        #region Advanced Collection & POCO Stress Tests

        [Fact]
        public void Deserialize_PocoWithListListString()
        {
            var json = "{\"Matrix\":[[\"a\",\"b\"],[\"c\",\"d\",\"e\"],[\"f\"]]}";
            var result = DevKitJson.Deserialize<ListListStringPoco>(json);
            Assert.NotNull(result);
            Assert.NotNull(result.Matrix);
            Assert.Equal(3, result.Matrix.Count);
            Assert.Equal(2, result.Matrix[0].Count);
            Assert.Equal("a", result.Matrix[0][0]);
            Assert.Equal("b", result.Matrix[0][1]);
            Assert.Equal(3, result.Matrix[1].Count);
            Assert.Equal("c", result.Matrix[1][0]);
            Assert.Equal("e", result.Matrix[1][2]);
            Assert.Single(result.Matrix[2]);
            Assert.Equal("f", result.Matrix[2][0]);
        }

        [Fact]
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
            Assert.Equal(2, result.Matrix.Count);
            Assert.Equal("x", result.Matrix[0][0]);
            Assert.Equal("y", result.Matrix[0][1]);
            Assert.Equal("z", result.Matrix[1][0]);
        }

        [Fact]
        public void Deserialize_PocoWithListListInt()
        {
            var json = "{\"Grid\":[[1,2,3],[4,5],[6]]}";
            var result = DevKitJson.Deserialize<ListListIntPoco>(json);
            Assert.NotNull(result);
            Assert.Equal(3, result.Grid.Count);
            Assert.Equal(3, result.Grid[0].Count);
            Assert.Equal(1, result.Grid[0][0]);
            Assert.Equal(3, result.Grid[0][2]);
            Assert.Equal(2, result.Grid[1].Count);
            Assert.Single(result.Grid[2]);
            Assert.Equal(6, result.Grid[2][0]);
        }

        [Fact]
        public void Deserialize_PocoWithListPoco()
        {
            var json = "{\"Items\":[{\"Name\":\"A\",\"Count\":1,\"IsActive\":true,\"Amount\":10.5},{\"Name\":\"B\",\"Count\":2,\"IsActive\":false,\"Amount\":20.0}]}";
            var result = DevKitJson.Deserialize<ListPocoPoco>(json);
            Assert.NotNull(result);
            Assert.Equal(2, result.Items.Count);
            Assert.Equal("A", result.Items[0].Name);
            Assert.Equal(1, result.Items[0].Count);
            Assert.True(result.Items[0].IsActive);
            Assert.Equal(10.5, result.Items[0].Amount, 1);
            Assert.Equal("B", result.Items[1].Name);
            Assert.False(result.Items[1].IsActive);
        }

        [Fact]
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
            Assert.Equal(2, result.Items.Count);
            Assert.Equal("X", result.Items[0].Name);
            Assert.Equal(99, result.Items[0].Count);
            Assert.Equal("Y", result.Items[1].Name);
        }

        [Fact]
        public void Deserialize_PocoWithDictionaryStringString()
        {
            var json = "{\"Labels\":{\"en\":\"Hello\",\"vi\":\"Xin chào\",\"ja\":\"こんにちは\"}}";
            var result = DevKitJson.Deserialize<DictStringStringPoco>(json);
            Assert.NotNull(result);
            Assert.NotNull(result.Labels);
            Assert.Equal(3, result.Labels.Count);
            Assert.Equal("Hello", result.Labels["en"]);
            Assert.Equal("Xin chào", result.Labels["vi"]);
            Assert.Equal("こんにちは", result.Labels["ja"]);
        }

        [Fact]
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
            Assert.NotNull(result.Labels);
            Assert.Equal(2, result.Labels.Count);
            Assert.Equal("value1", result.Labels["key1"]);
            Assert.Equal("value2", result.Labels["key2"]);
        }

        [Fact]
        public void Deserialize_PocoWithDictionaryStringInt()
        {
            var json = "{\"Scores\":{\"math\":95,\"physics\":88,\"chemistry\":72}}";
            var result = DevKitJson.Deserialize<DictStringIntPoco>(json);
            Assert.NotNull(result);
            Assert.NotNull(result.Scores);
            Assert.Equal(3, result.Scores.Count);
            Assert.Equal(95, result.Scores["math"]);
            Assert.Equal(88, result.Scores["physics"]);
            Assert.Equal(72, result.Scores["chemistry"]);
        }

        [Fact]
        public void Deserialize_PocoWithDictionaryStringObject()
        {
            var json = "{\"Meta\":{\"name\":\"test\",\"count\":42,\"active\":true}}";
            var result = DevKitJson.Deserialize<DictStringObjectPoco>(json);
            Assert.NotNull(result);
            Assert.NotNull(result.Meta);
            Assert.Equal("test", result.Meta["name"]);
            Assert.Equal(42, result.Meta["count"]);
            Assert.Equal(true, result.Meta["active"]);
        }

        [Fact]
        public void Deserialize_PocoWithNullableInt()
        {
            var json = "{\"Value\":42}";
            var result = DevKitJson.Deserialize<NullableIntPoco>(json);
            Assert.NotNull(result);
            Assert.True(result.Value.HasValue);
            Assert.Equal(42, result.Value.Value);
        }

        [Fact]
        public void Deserialize_PocoWithNullableInt_Null()
        {
            var json = "{\"Value\":null}";
            var result = DevKitJson.Deserialize<NullableIntPoco>(json);
            Assert.NotNull(result);
            Assert.False(result.Value.HasValue);
        }

        [Fact]
        public void Deserialize_PocoWithNullableGuid()
        {
            var g = Guid.NewGuid();
            var json = "{\"Id\":\"" + g.ToString("D") + "\"}";
            var result = DevKitJson.Deserialize<NullableGuidPoco>(json);
            Assert.NotNull(result);
            Assert.True(result.Id.HasValue);
            Assert.Equal(g, result.Id.Value);
        }

        [Fact]
        public void Deserialize_PocoWithNullableGuid_Null()
        {
            var json = "{\"Id\":null}";
            var result = DevKitJson.Deserialize<NullableGuidPoco>(json);
            Assert.NotNull(result);
            Assert.False(result.Id.HasValue);
        }

        [Fact]
        public void Deserialize_PocoWithNullableBool()
        {
            var json = "{\"Flag\":true}";
            var result = DevKitJson.Deserialize<NullableBoolPoco>(json);
            Assert.NotNull(result);
            Assert.True(result.Flag.HasValue);
            Assert.True(result.Flag.Value);
        }

        [Fact]
        public void Deserialize_PocoWithNullableBool_Null()
        {
            var json = "{\"Flag\":null}";
            var result = DevKitJson.Deserialize<NullableBoolPoco>(json);
            Assert.NotNull(result);
            Assert.False(result.Flag.HasValue);
        }

        [Fact]
        public void Deserialize_PocoWithNullableDecimal()
        {
            var json = "{\"Amount\":123.45}";
            var result = DevKitJson.Deserialize<NullableDecimalPoco>(json);
            Assert.NotNull(result);
            Assert.True(result.Amount.HasValue);
            Assert.Equal(123.45m, result.Amount.Value, 2);
        }

        [Fact]
        public void Deserialize_PocoWithNullableDateTime()
        {
            var json = "{\"Date\":{\"__type\":\"DateTime\",\"Value\":\"2025-06-15T10:30:00.000Z\"}}";
            var result = DevKitJson.Deserialize<NullableDateTimePoco>(json);
            Assert.NotNull(result);
            Assert.True(result.Date.HasValue);
            Assert.Equal(new DateTime(2025, 6, 15, 10, 30, 0, DateTimeKind.Utc), result.Date.Value);
        }

        [Fact]
        public void Deserialize_PocoWithNullableDateTime_Null()
        {
            var json = "{\"Date\":null}";
            var result = DevKitJson.Deserialize<NullableDateTimePoco>(json);
            Assert.NotNull(result);
            Assert.False(result.Date.HasValue);
        }

        [Fact]
        public void Deserialize_PocoWithArrayInt()
        {
            var json = "{\"Numbers\":[10,20,30,40]}";
            var result = DevKitJson.Deserialize<ArrayIntPoco>(json);
            Assert.NotNull(result);
            Assert.Equal(4, result.Numbers.Length);
            Assert.Equal(10, result.Numbers[0]);
            Assert.Equal(40, result.Numbers[3]);
        }

        [Fact]
        public void Deserialize_PocoWithArrayGuid()
        {
            var g1 = Guid.NewGuid();
            var g2 = Guid.NewGuid();
            var json = "{\"Ids\":[\"" + g1.ToString("D") + "\",\"" + g2.ToString("D") + "\"]}";
            var result = DevKitJson.Deserialize<ArrayGuidPoco>(json);
            Assert.NotNull(result);
            Assert.Equal(2, result.Ids.Length);
            Assert.Equal(g1, result.Ids[0]);
            Assert.Equal(g2, result.Ids[1]);
        }

        [Fact]
        public void Deserialize_PocoWithListDouble()
        {
            var json = "{\"Values\":[1.1,2.2,3.3]}";
            var result = DevKitJson.Deserialize<ListDoublePoco>(json);
            Assert.NotNull(result);
            Assert.Equal(3, result.Values.Count);
            Assert.Equal(1.1, result.Values[0], 1);
            Assert.Equal(2.2, result.Values[1], 1);
            Assert.Equal(3.3, result.Values[2], 1);
        }

        [Fact]
        public void Deserialize_PocoWithListBool()
        {
            var json = "{\"Flags\":[true,false,true,false]}";
            var result = DevKitJson.Deserialize<ListBoolPoco>(json);
            Assert.NotNull(result);
            Assert.Equal(4, result.Flags.Count);
            Assert.True(result.Flags[0]);
            Assert.False(result.Flags[1]);
            Assert.True(result.Flags[2]);
            Assert.False(result.Flags[3]);
        }

        [Fact]
        public void Deserialize_PocoWithListDecimal()
        {
            var json = "{\"Amounts\":[100.50,200.75,300.00]}";
            var result = DevKitJson.Deserialize<ListDecimalPoco>(json);
            Assert.NotNull(result);
            Assert.Equal(3, result.Amounts.Count);
            Assert.Equal(100.50m, result.Amounts[0], 2);
            Assert.Equal(200.75m, result.Amounts[1], 2);
            Assert.Equal(300.00m, result.Amounts[2], 2);
        }

        [Fact]
        public void Deserialize_PocoWithMixedProperties()
        {
            var g = Guid.NewGuid();
            var json = "{\"Name\":\"Test\",\"Tags\":[\"a\",\"b\"],\"Ids\":[\"" + g.ToString("D") + "\"],\"Score\":99,\"Active\":true,\"Rate\":4.5}";
            var result = DevKitJson.Deserialize<MixedPoco>(json);
            Assert.NotNull(result);
            Assert.Equal("Test", result.Name);
            Assert.Equal(2, result.Tags.Count);
            Assert.Equal("a", result.Tags[0]);
            Assert.Single(result.Ids);
            Assert.Equal(g, result.Ids[0]);
            Assert.Equal(99, result.Score);
            Assert.True(result.Active);
            Assert.Equal(4.5, result.Rate, 1);
        }

        [Fact]
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
            Assert.Equal("Roundtrip", result.Name);
            Assert.Equal(3, result.Tags.Count);
            Assert.Equal(g, result.Ids[0]);
            Assert.Equal(42, result.Score);
            Assert.False(result.Active);
            Assert.Equal(9.99, result.Rate, 2);
        }

        [Fact]
        public void Deserialize_PocoWithNestedPocoAndLists()
        {
            var json = "{\"Order\":\"ORD-001\",\"Lines\":[{\"Product\":\"Widget\",\"Qty\":10,\"Prices\":[100.0,95.0]},{\"Product\":\"Gadget\",\"Qty\":5,\"Prices\":[200.0]}]}";
            var result = DevKitJson.Deserialize<OrderWithLinesPoco>(json);
            Assert.NotNull(result);
            Assert.Equal("ORD-001", result.Order);
            Assert.Equal(2, result.Lines.Count);
            Assert.Equal("Widget", result.Lines[0].Product);
            Assert.Equal(10, result.Lines[0].Qty);
            Assert.Equal(2, result.Lines[0].Prices.Count);
            Assert.Equal(100.0, result.Lines[0].Prices[0], 1);
            Assert.Equal(95.0, result.Lines[0].Prices[1], 1);
            Assert.Equal("Gadget", result.Lines[1].Product);
            Assert.Single(result.Lines[1].Prices);
        }

        [Fact]
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
            Assert.Equal("ORD-002", result.Order);
            Assert.Equal(2, result.Lines.Count);
            Assert.Equal("A", result.Lines[0].Product);
            Assert.Single(result.Lines[0].Prices);
            Assert.Equal(2, result.Lines[1].Prices.Count);
        }

        [Fact]
        public void Deserialize_PocoWithListNullableInt()
        {
            var json = "{\"Values\":[1,null,3,null,5]}";
            var result = DevKitJson.Deserialize<ListNullableIntPoco>(json);
            Assert.NotNull(result);
            Assert.Equal(5, result.Values.Count);
            Assert.Equal(1, result.Values[0]);
            Assert.Null(result.Values[1]);
            Assert.Equal(3, result.Values[2]);
            Assert.Null(result.Values[3]);
            Assert.Equal(5, result.Values[4]);
        }

        [Fact]
        public void Deserialize_PocoWithEmptyNestedLists()
        {
            var json = "{\"Matrix\":[]}";
            var result = DevKitJson.Deserialize<ListListStringPoco>(json);
            Assert.NotNull(result);
            Assert.NotNull(result.Matrix);
            Assert.Empty(result.Matrix);
        }

        [Fact]
        public void Deserialize_PocoWithListContainingEmptyList()
        {
            var json = "{\"Matrix\":[[],[\"a\"],[],[\"\"]]}";
            var result = DevKitJson.Deserialize<ListListStringPoco>(json);
            Assert.NotNull(result);
            Assert.Equal(4, result.Matrix.Count);
            Assert.Empty(result.Matrix[0]);
            Assert.Single(result.Matrix[1]);
            Assert.Equal("a", result.Matrix[1][0]);
            Assert.Empty(result.Matrix[2]);
            Assert.Single(result.Matrix[3]);
            Assert.Equal("", result.Matrix[3][0]);
        }

        [Fact]
        public void Deserialize_PocoWithAllNullProperties()
        {
            var json = "{\"Name\":null,\"Tags\":null,\"Ids\":null,\"Score\":0,\"Active\":false,\"Rate\":0}";
            var result = DevKitJson.Deserialize<MixedPoco>(json);
            Assert.NotNull(result);
            Assert.Null(result.Name);
            Assert.Null(result.Tags);
            Assert.Null(result.Ids);
            Assert.Equal(0, result.Score);
            Assert.False(result.Active);
        }

        [Fact]
        public void Deserialize_PocoWithExtraJsonProperties_IgnoresThem()
        {
            var json = "{\"QuoteId\":\"abc\",\"ExtraField\":\"ignored\",\"AnotherExtra\":123}";
            var result = DevKitJson.Deserialize<InputCloneQuote>(json);
            Assert.NotNull(result);
            Assert.Equal("abc", result.QuoteId);
        }

        [Fact]
        public void Deserialize_PocoWithMissingJsonProperties_DefaultValues()
        {
            var json = "{\"Name\":\"OnlyName\"}";
            var result = DevKitJson.Deserialize<MixedPoco>(json);
            Assert.NotNull(result);
            Assert.Equal("OnlyName", result.Name);
            Assert.Null(result.Tags);
            Assert.Null(result.Ids);
            Assert.Equal(0, result.Score);
            Assert.False(result.Active);
            Assert.Equal(0, result.Rate, 1);
        }

        [Fact]
        public void Deserialize_PocoWithListMixedNullAndValues()
        {
            var json = "{\"PriceListLines\":[\"guid-1\",null,\"guid-3\"]}";
            var result = DevKitJson.Deserialize<Input_CreateQuote>(json);
            Assert.NotNull(result);
            Assert.Equal(3, result.PriceListLines.Count);
            Assert.Equal("guid-1", result.PriceListLines[0]);
            Assert.Null(result.PriceListLines[1]);
            Assert.Equal("guid-3", result.PriceListLines[2]);
        }

        [Fact]
        public void Deserialize_DeeplyNestedPoco()
        {
            var json = "{\"Level\":1,\"Child\":{\"Level\":2,\"Child\":{\"Level\":3,\"Child\":null}}}";
            var result = DevKitJson.Deserialize<RecursivePoco>(json);
            Assert.NotNull(result);
            Assert.Equal(1, result.Level);
            Assert.NotNull(result.Child);
            Assert.Equal(2, result.Child.Level);
            Assert.NotNull(result.Child.Child);
            Assert.Equal(3, result.Child.Child.Level);
            Assert.Null(result.Child.Child.Child);
        }

        [Fact]
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
            Assert.Equal(1, result.Level);
            Assert.Equal(2, result.Child.Level);
            Assert.Equal(3, result.Child.Child.Level);
            Assert.Null(result.Child.Child.Child);
        }

        [Fact]
        public void MapTo_ComplexPoco_WithLists()
        {
            var json = "{\"Order\":\"ORD-X\",\"Lines\":[{\"Product\":\"P1\",\"Qty\":3,\"Prices\":[10.0,20.0]}]}";
            var raw = DevKitJson.Deserialize(json);
            var result = DevKitJson.MapTo<OrderWithLinesPoco>((Dictionary<string, object>)raw);
            Assert.Equal("ORD-X", result.Order);
            Assert.Single(result.Lines);
            Assert.Equal("P1", result.Lines[0].Product);
            Assert.Equal(2, result.Lines[0].Prices.Count);
        }

        [Fact]
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
            Assert.Equal("ORD-100", input.Order);
            Assert.Single(input.Lines);
            Assert.Equal("Widget", input.Lines[0].Product);
            Assert.Equal(5, input.Lines[0].Qty);
            Assert.Equal(2, input.Lines[0].Prices.Count);
            Assert.Equal(99.99, input.Lines[0].Prices[0], 2);
        }

        [Fact]
        public void Deserialize_PocoWithListLong()
        {
            var json = "{\"BigNumbers\":[9999999999,8888888888,7777777777]}";
            var result = DevKitJson.Deserialize<ListLongPoco>(json);
            Assert.NotNull(result);
            Assert.Equal(3, result.BigNumbers.Count);
            Assert.Equal(9999999999L, result.BigNumbers[0]);
            Assert.Equal(8888888888L, result.BigNumbers[1]);
            Assert.Equal(7777777777L, result.BigNumbers[2]);
        }

        [Fact]
        public void Deserialize_PocoWithDateTimeProperty_String()
        {
            var json = "{\"Name\":\"Meeting\",\"When\":{\"__type\":\"DateTime\",\"Value\":\"2025-12-25T10:00:00.000Z\"}}";
            var result = DevKitJson.Deserialize<DateTimePoco>(json);
            Assert.NotNull(result);
            Assert.Equal("Meeting", result.Name);
            Assert.Equal(new DateTime(2025, 12, 25, 10, 0, 0, DateTimeKind.Utc), result.When);
        }

        [Fact]
        public void Deserialize_PocoWithListEntityReference()
        {
            var id1 = Guid.NewGuid();
            var id2 = Guid.NewGuid();
            var json = "{\"Refs\":[" +
                "{\"__type\":\"EntityReference\",\"LogicalName\":\"contact\",\"Id\":\"" + id1.ToString("D") + "\",\"Name\":\"John\"}," +
                "{\"__type\":\"EntityReference\",\"LogicalName\":\"account\",\"Id\":\"" + id2.ToString("D") + "\",\"Name\":\"Contoso\"}" +
                "]}";
            var result = DevKitJson.Deserialize<ListEntityRefPoco>(json);
            Assert.NotNull(result);
            Assert.Equal(2, result.Refs.Count);
            Assert.Equal("contact", result.Refs[0].LogicalName);
            Assert.Equal(id1, result.Refs[0].Id);
            Assert.Equal("John", result.Refs[0].Name);
            Assert.Equal("account", result.Refs[1].LogicalName);
        }

        [Fact]
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
            Assert.Single(result.Refs);
            Assert.Equal("contact", result.Refs[0].LogicalName);
            Assert.Equal(id1, result.Refs[0].Id);
            Assert.Equal("Jane", result.Refs[0].Name);
        }

        [Fact]
        public void Deserialize_PocoWithListMoney()
        {
            var json = "{\"Amounts\":[{\"__type\":\"Money\",\"Value\":100.50},{\"__type\":\"Money\",\"Value\":200.75}]}";
            var result = DevKitJson.Deserialize<ListMoneyPoco>(json);
            Assert.NotNull(result);
            Assert.Equal(2, result.Amounts.Count);
            Assert.Equal(100.50m, result.Amounts[0].Value);
            Assert.Equal(200.75m, result.Amounts[1].Value);
        }

        [Fact]
        public void Deserialize_EmptyJson_ReturnsDefaultPoco()
        {
            var json = "{}";
            var result = DevKitJson.Deserialize<MixedPoco>(json);
            Assert.NotNull(result);
            Assert.Null(result.Name);
            Assert.Null(result.Tags);
            Assert.Equal(0, result.Score);
        }

        [Fact]
        public void Deserialize_SingleItemList()
        {
            var json = "{\"PriceListLines\":[\"only-one\"]}";
            var result = DevKitJson.Deserialize<Input_CreateQuote>(json);
            Assert.Single(result.PriceListLines);
            Assert.Equal("only-one", result.PriceListLines[0]);
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

        [Fact]
        public void JsonInJson_Level1_SimpleObjectAsString()
        {
            // Outer JSON: { "PropertyA": "OK", "Json": "{\"Name\":\"John\",\"Count\":30}" }
            var json = "{\"PropertyA\":\"OK\",\"Json\":\"{\\\"Name\\\":\\\"John\\\",\\\"Count\\\":30}\"}";

            var result = DevKitJson.Deserialize<JsonInJsonPoco>(json);
            Assert.NotNull(result);
            Assert.Equal("OK", result.PropertyA);

            // Json property is a string containing escaped JSON
            Assert.Equal("{\"Name\":\"John\",\"Count\":30}", result.Json);

            // Second pass: deserialize the inner JSON string
            var inner = DevKitJson.Deserialize<SamplePoco>(result.Json);
            Assert.Equal("John", inner.Name);
            Assert.Equal(30, inner.Count);
        }

        [Fact]
        public void JsonInJson_Level1_ObjectWithQuotesInValue()
        {
            // Inner object: {"Description":"He said \"hello\" to her"}
            // Escaped once: "{\"Description\":\"He said \\\"hello\\\" to her\"}"
            var json = "{\"PropertyA\":\"test\",\"Json\":\"{\\\"Description\\\":\\\"He said \\\\\\\"hello\\\\\\\" to her\\\"}\"}";

            var result = DevKitJson.Deserialize<JsonInJsonPoco>(json);
            Assert.NotNull(result);
            Assert.Equal("{\"Description\":\"He said \\\"hello\\\" to her\"}", result.Json);

            var inner = DevKitJson.Deserialize(result.Json) as Dictionary<string, object>;
            Assert.NotNull(inner);
            Assert.Equal("He said \"hello\" to her", inner["Description"]);
        }

        [Fact]
        public void JsonInJson_Level1_WithList()
        {
            // Inner: {"Items":["a","b","c"]}
            // Escaped: "{\"Items\":[\"a\",\"b\",\"c\"]}"
            var json = "{\"PropertyA\":\"list-test\",\"Json\":\"{\\\"Items\\\":[\\\"a\\\",\\\"b\\\",\\\"c\\\"]}\"}";

            var result = DevKitJson.Deserialize<JsonInJsonPoco>(json);
            Assert.Equal("{\"Items\":[\"a\",\"b\",\"c\"]}", result.Json);

            var inner = DevKitJson.Deserialize<ListStringJsonPoco>(result.Json);
            Assert.Equal(3, inner.Items.Count);
            Assert.Equal("a", inner.Items[0]);
            Assert.Equal("c", inner.Items[2]);
        }

        [Fact]
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
            Assert.Equal("L2", result0.PropertyA);

            // Parse level 1
            var result1 = DevKitJson.Deserialize<JsonInJsonPoco>(result0.Json);
            Assert.NotNull(result1);

            // result1.Json should be the level-2 string: {"Value":"deep"}
            // But result1 is mapped from dict, PropertyA and Json are property names
            // Let's use raw dict instead
            var dict1 = DevKitJson.Deserialize(result0.Json) as Dictionary<string, object>;
            Assert.NotNull(dict1);
            var nestedStr = (string)dict1["Nested"];
            Assert.Equal("{\"Value\":\"deep\"}", nestedStr);

            // Parse level 2
            var dict2 = DevKitJson.Deserialize(nestedStr) as Dictionary<string, object>;
            Assert.NotNull(dict2);
            Assert.Equal("deep", dict2["Value"]);
        }

        [Fact]
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
            Assert.Equal("wrapper", restored.PropertyA);
            Assert.Equal(innerJson, restored.Json);

            // Deserialize inner
            var restoredInner = DevKitJson.Deserialize<SamplePoco>(restored.Json);
            Assert.Equal("Test", restoredInner.Name);
            Assert.Equal(42, restoredInner.Count);
            Assert.True(restoredInner.IsActive);
            Assert.Equal(99.5, restoredInner.Amount, 1);
        }

        [Fact]
        public void JsonInJson_Level2_Serialize_Roundtrip()
        {
            // 3 levels of nesting via Serialize
            var level2 = DevKitJson.Serialize(new Dictionary<string, object> { { "Secret", "password123" } });
            var level1 = DevKitJson.Serialize(new JsonInJsonPoco { PropertyA = "mid", Json = level2 });
            var level0 = DevKitJson.Serialize(new JsonInJsonPoco { PropertyA = "top", Json = level1 });

            // Unwrap level 0
            var r0 = DevKitJson.Deserialize<JsonInJsonPoco>(level0);
            Assert.Equal("top", r0.PropertyA);

            // Unwrap level 1
            var r1 = DevKitJson.Deserialize<JsonInJsonPoco>(r0.Json);
            Assert.Equal("mid", r1.PropertyA);

            // Unwrap level 2
            var r2 = DevKitJson.Deserialize(r1.Json) as Dictionary<string, object>;
            Assert.NotNull(r2);
            Assert.Equal("password123", r2["Secret"]);
        }

        [Fact]
        public void JsonInJson_WithSingleQuotesInValue()
        {
            // Single quotes don't need escaping in JSON, but let's verify
            // Inner: {"Msg":"It's a test with 'quotes'"}
            var json = "{\"PropertyA\":\"sq\",\"Json\":\"{\\\"Msg\\\":\\\"It's a test with 'quotes'\\\"}\"}";

            var result = DevKitJson.Deserialize<JsonInJsonPoco>(json);
            var inner = DevKitJson.Deserialize(result.Json) as Dictionary<string, object>;
            Assert.NotNull(inner);
            Assert.Equal("It's a test with 'quotes'", inner["Msg"]);
        }

        [Fact]
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
            Assert.Equal("{\"Msg\":\"He said 'hi' and she said \\\"bye\\\"\"}", innerJson);

            var outerObj = new JsonInJsonPoco { PropertyA = "mixed", Json = innerJson };
            var outerJson = DevKitJson.Serialize(outerObj);

            var restored = DevKitJson.Deserialize<JsonInJsonPoco>(outerJson);
            Assert.Equal(innerJson, restored.Json);

            var restoredInner = DevKitJson.Deserialize(restored.Json) as Dictionary<string, object>;
            Assert.Equal("He said 'hi' and she said \"bye\"", restoredInner["Msg"]);
        }

        [Fact]
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
            Assert.Equal("C:\\Users\\\"Admin\"\\file.txt", restoredInner["Path"]);
        }

        [Fact]
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
            Assert.Equal("Line1\nLine2\tTabbed", restoredInner["Text"]);
        }

        [Fact]
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
            Assert.Equal("Nguyễn Văn A", restoredInner["Name"]);
            Assert.Equal("Tổng tiền: 1.000.000đ - \"đã thanh toán\"", restoredInner["Note"]);
        }

        [Fact]
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
            Assert.Equal("ORD-001", restoredInner.Order);
            Assert.Equal(2, restoredInner.Lines.Count);
            Assert.Equal("Widget \"Pro\"", restoredInner.Lines[0].Product);
            Assert.Equal("Gadget's Best", restoredInner.Lines[1].Product);
            Assert.Equal(2, restoredInner.Lines[0].Prices.Count);
        }

        [Fact]
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
            Assert.Equal(innerJson, inputStr);

            // Deserialize the string to get the actual object
            var input = DevKitJson.Deserialize<Input_CreateQuote>(inputStr);
            Assert.NotNull(input.PriceListLines);
            Assert.Equal(2, input.PriceListLines.Count);
        }

        [Fact]
        public void JsonInJson_Level3_TripleNesting()
        {
            // 4 levels of nesting to push escape limits
            var l3 = DevKitJson.Serialize(new Dictionary<string, object> { { "Deep", "value with \"quotes\" and 'apostrophe'" } });
            var l2 = DevKitJson.Serialize(new JsonInJsonPoco { PropertyA = "L2", Json = l3 });
            var l1 = DevKitJson.Serialize(new JsonInJsonPoco { PropertyA = "L1", Json = l2 });
            var l0 = DevKitJson.Serialize(new JsonInJsonPoco { PropertyA = "L0", Json = l1 });

            // Unwrap all levels
            var r0 = DevKitJson.Deserialize<JsonInJsonPoco>(l0);
            Assert.Equal("L0", r0.PropertyA);

            var r1 = DevKitJson.Deserialize<JsonInJsonPoco>(r0.Json);
            Assert.Equal("L1", r1.PropertyA);

            var r2 = DevKitJson.Deserialize<JsonInJsonPoco>(r1.Json);
            Assert.Equal("L2", r2.PropertyA);

            var r3 = DevKitJson.Deserialize(r2.Json) as Dictionary<string, object>;
            Assert.NotNull(r3);
            Assert.Equal("value with \"quotes\" and 'apostrophe'", r3["Deep"]);
        }

        [Fact]
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
            Assert.Equal("data", l1["Outer"]);
            Assert.Equal("{\"Val\":\"hello\"}", l1["Inner"]);

            var l0 = DevKitJson.Deserialize((string)l1["Inner"]) as Dictionary<string, object>;
            Assert.Equal("hello", l0["Val"]);
        }

        [Fact]
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
            Assert.NotNull(p2);
            var bVal = (string)p2["B"];

            var p1 = DevKitJson.Deserialize(bVal) as Dictionary<string, object>;
            Assert.NotNull(p1);
            var aVal = (string)p1["A"];

            var p0 = DevKitJson.Deserialize(aVal) as Dictionary<string, object>;
            Assert.NotNull(p0);
            Assert.Equal("Y", p0["X"]);
        }

        [Fact]
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
            Assert.Equal("SELECT * FROM account WHERE name = 'Contoso'", restoredInner["SQL"]);
            Assert.Equal("It's John's account", restoredInner["Note"]);
        }

        [Fact]
        public void JsonInJson_ValueContainsMixedQuotesAndBackslashes()
        {
            // Extreme case: value has both " and ' and \ and \n
            var nastyValue = "Path: C:\\Users\\\"Admin\"\\It's a 'test'\nLine2";
            var innerObj = new Dictionary<string, object> { { "Data", nastyValue } };
            var innerJson = DevKitJson.Serialize(innerObj);
            var outerJson = DevKitJson.Serialize(new JsonInJsonPoco { PropertyA = "nasty", Json = innerJson });

            var restored = DevKitJson.Deserialize<JsonInJsonPoco>(outerJson);
            var restoredInner = DevKitJson.Deserialize(restored.Json) as Dictionary<string, object>;
            Assert.Equal(nastyValue, restoredInner["Data"]);
        }

        [Fact]
        public void JsonInJson_EmptyInnerJson()
        {
            var outerJson = DevKitJson.Serialize(new JsonInJsonPoco { PropertyA = "empty", Json = "{}" });
            var restored = DevKitJson.Deserialize<JsonInJsonPoco>(outerJson);
            Assert.Equal("{}", restored.Json);

            var inner = DevKitJson.Deserialize(restored.Json) as Dictionary<string, object>;
            Assert.NotNull(inner);
            Assert.Empty(inner);
        }

        [Fact]
        public void JsonInJson_InnerIsArray()
        {
            var innerJson = DevKitJson.Serialize(new List<string> { "a", "b", "c" });
            var outerJson = DevKitJson.Serialize(new JsonInJsonPoco { PropertyA = "arr", Json = innerJson });

            var restored = DevKitJson.Deserialize<JsonInJsonPoco>(outerJson);
            Assert.Equal("[\"a\",\"b\",\"c\"]", restored.Json);

            var inner = DevKitJson.Deserialize(restored.Json) as List<object>;
            Assert.Equal(3, inner.Count);
            Assert.Equal("a", inner[0]);
        }

        [Fact]
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
            Assert.Equal(inputJson, inputStr);

            // Parse the inner JSON
            var parsed = DevKitJson.Deserialize(inputStr) as Dictionary<string, object>;
            Assert.Equal("abc-123", parsed["QuoteId"]);
            Assert.Equal("Công ty TNHH \"Phước\" & Son's", parsed["CustomerName"]);

            var lineIds = parsed["LineIds"] as List<object>;
            Assert.Equal(2, lineIds.Count);
            Assert.Equal("line-1", lineIds[0]);

            var config = parsed["Config"] as Dictionary<string, object>;
            Assert.Equal(true, config["AutoApprove"]);
            Assert.Equal("Quote_'Standard'_v2", config["Template"]);
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
