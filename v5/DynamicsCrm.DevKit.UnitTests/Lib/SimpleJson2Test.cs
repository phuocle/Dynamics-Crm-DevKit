using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using Microsoft.Xrm.Sdk;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Lib
{
    public class SimpleJson2Test
    {
        #region Primitives

        [Fact]
        public void Serialize_Null_ReturnsNullString()
        {
            Assert.Equal("null", SimpleJson2.Serialize(null));
        }

        [Fact]
        public void Serialize_String_QuotesAndEscapes()
        {
            Assert.Equal("\"hello\"", SimpleJson2.Serialize("hello"));
            Assert.Equal("\"hello\\nworld\"", SimpleJson2.Serialize("hello\nworld"));
            Assert.Equal("\"he said \\\"hi\\\"\"", SimpleJson2.Serialize("he said \"hi\""));
            Assert.Equal("\"tab\\there\"", SimpleJson2.Serialize("tab\there"));
            Assert.Equal("\"back\\\\slash\"", SimpleJson2.Serialize("back\\slash"));
        }

        [Fact]
        public void Serialize_Bool_LowercaseTrueFalse()
        {
            Assert.Equal("true", SimpleJson2.Serialize(true));
            Assert.Equal("false", SimpleJson2.Serialize(false));
        }

        [Fact]
        public void Serialize_Int_Roundtrip()
        {
            Assert.Equal("42", SimpleJson2.Serialize(42));
            Assert.Equal("-100", SimpleJson2.Serialize(-100));
            Assert.Equal("0", SimpleJson2.Serialize(0));
        }

        [Fact]
        public void Serialize_Long_Roundtrip()
        {
            var big = 9999999999L;
            Assert.Equal("9999999999", SimpleJson2.Serialize(big));
        }

        [Fact]
        public void Serialize_Double_Roundtrip()
        {
            var json = SimpleJson2.Serialize(3.14);
            Assert.Contains("3.14", json);
        }

        [Fact]
        public void Serialize_Decimal_Roundtrip()
        {
            Assert.Equal("123.45", SimpleJson2.Serialize(123.45m));
        }

        [Fact]
        public void Serialize_Float_Roundtrip()
        {
            var json = SimpleJson2.Serialize(2.5f);
            Assert.Contains("2.5", json);
        }

        [Fact]
        public void Serialize_Byte_Roundtrip()
        {
            Assert.Equal("255", SimpleJson2.Serialize((byte)255));
            Assert.Equal("0", SimpleJson2.Serialize((byte)0));
        }

        [Fact]
        public void Serialize_Short_Roundtrip()
        {
            Assert.Equal("32767", SimpleJson2.Serialize((short)32767));
            Assert.Equal("-100", SimpleJson2.Serialize((short)-100));
        }

        [Fact]
        public void Deserialize_Null_ReturnsNull()
        {
            Assert.Null(SimpleJson2.Deserialize("null"));
        }

        [Fact]
        public void Deserialize_String_RemovesQuotes()
        {
            Assert.Equal("hello", SimpleJson2.Deserialize("\"hello\""));
        }

        [Fact]
        public void Deserialize_StringWithEscapes_Unescapes()
        {
            Assert.Equal("hello\nworld", SimpleJson2.Deserialize("\"hello\\nworld\""));
            Assert.Equal("he said \"hi\"", SimpleJson2.Deserialize("\"he said \\\"hi\\\"\""));
            Assert.Equal("tab\there", SimpleJson2.Deserialize("\"tab\\there\""));
        }

        [Fact]
        public void Deserialize_Bool_ReturnsCorrectType()
        {
            Assert.Equal(true, SimpleJson2.Deserialize("true"));
            Assert.Equal(false, SimpleJson2.Deserialize("false"));
        }

        [Fact]
        public void Deserialize_Int_ReturnsInt()
        {
            var result = SimpleJson2.Deserialize("42");
            Assert.IsType<int>(result);
            Assert.Equal(42, result);
        }

        [Fact]
        public void Deserialize_LargeNumber_ReturnsLong()
        {
            var result = SimpleJson2.Deserialize("9999999999");
            Assert.IsType<long>(result);
            Assert.Equal(9999999999L, result);
        }

        [Fact]
        public void Deserialize_Double_ReturnsDouble()
        {
            var result = SimpleJson2.Deserialize("3.14");
            Assert.IsType<double>(result);
            Assert.Equal(3.14, (double)result, 10);
        }

        [Fact]
        public void Deserialize_NegativeNumber()
        {
            Assert.Equal(-42, SimpleJson2.Deserialize("-42"));
        }

        [Fact]
        public void Deserialize_Generic_ConvertsTypes()
        {
            Assert.Equal(42, SimpleJson2.Deserialize<int>("42"));
            Assert.Equal(42L, SimpleJson2.Deserialize<long>("42"));
            Assert.Equal(42.0, SimpleJson2.Deserialize<double>("42"));
            Assert.Equal(42m, SimpleJson2.Deserialize<decimal>("42"));
            Assert.Equal("hello", SimpleJson2.Deserialize<string>("\"hello\""));
            Assert.True(SimpleJson2.Deserialize<bool>("true"));
        }

        #endregion

        #region DateTime and Guid

        [Fact]
        public void DateTime_Roundtrip()
        {
            var dt = new DateTime(2025, 3, 15, 14, 30, 0, DateTimeKind.Utc);
            var json = SimpleJson2.Serialize(dt);
            Assert.Contains("\"__type\":\"DateTime\"", json);
            Assert.Contains("2025-03-15T14:30:00.000Z", json);

            var result = SimpleJson2.Deserialize<DateTime>(json);
            Assert.Equal(dt, result);
        }

        [Fact]
        public void Guid_Roundtrip()
        {
            var guid = Guid.Parse("a1b2c3d4-e5f6-7890-abcd-ef1234567890");
            var json = SimpleJson2.Serialize(guid);
            Assert.Contains("\"__type\":\"Guid\"", json);

            var result = SimpleJson2.Deserialize<Guid>(json);
            Assert.Equal(guid, result);
        }

        [Fact]
        public void ByteArray_Roundtrip_File()
        {
            var data = new byte[] { 0x48, 0x65, 0x6C, 0x6C, 0x6F };
            var json = SimpleJson2.Serialize(data);
            Assert.Contains("\"__type\":\"File\"", json);

            var result = (byte[])SimpleJson2.Deserialize(json);
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
            var json = SimpleJson2.Serialize(dict);
            var result = SimpleJson2.Deserialize(json) as Dictionary<string, object>;

            Assert.NotNull(result);
            Assert.Equal("test", result["name"]);
            Assert.Equal(42, result["count"]);
            Assert.Equal(true, result["active"]);
        }

        [Fact]
        public void List_Roundtrip()
        {
            var list = new List<object> { 1, "two", true, null };
            var json = SimpleJson2.Serialize(list);
            var result = SimpleJson2.Deserialize(json) as List<object>;

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
            var json = SimpleJson2.Serialize(dict);
            Assert.Contains("\"first\":\"John\"", json);
            Assert.Contains("\"last\":\"Doe\"", json);
        }

        [Fact]
        public void EmptyObject_Roundtrip()
        {
            var json = SimpleJson2.Serialize(new Dictionary<string, object>());
            Assert.Equal("{}", json);
            var result = SimpleJson2.Deserialize(json) as Dictionary<string, object>;
            Assert.NotNull(result);
            Assert.Empty(result);
        }

        [Fact]
        public void EmptyArray_Roundtrip()
        {
            var json = SimpleJson2.Serialize(new List<object>());
            Assert.Equal("[]", json);
            var result = SimpleJson2.Deserialize(json) as List<object>;
            Assert.NotNull(result);
            Assert.Empty(result);
        }

        #endregion

        #region Money

        [Fact]
        public void Money_Roundtrip()
        {
            var money = new Money(1234.56m);
            var json = SimpleJson2.Serialize(money);
            Assert.Contains("\"__type\":\"Money\"", json);
            Assert.Contains("\"Value\":1234.56", json);

            var result = SimpleJson2.Deserialize<Money>(json);
            Assert.Equal(1234.56m, result.Value);
        }

        [Fact]
        public void Money_Zero()
        {
            var money = new Money(0m);
            var json = SimpleJson2.Serialize(money);
            var result = SimpleJson2.Deserialize<Money>(json);
            Assert.Equal(0m, result.Value);
        }

        [Fact]
        public void Money_Negative()
        {
            var money = new Money(-500.99m);
            var json = SimpleJson2.Serialize(money);
            var result = SimpleJson2.Deserialize<Money>(json);
            Assert.Equal(-500.99m, result.Value);
        }

        #endregion

        #region OptionSetValue

        [Fact]
        public void OptionSetValue_Roundtrip()
        {
            var osv = new OptionSetValue(100000001);
            var json = SimpleJson2.Serialize(osv);
            Assert.Contains("\"__type\":\"OptionSetValue\"", json);

            var result = SimpleJson2.Deserialize<OptionSetValue>(json);
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
            var json = SimpleJson2.Serialize(osvc);
            Assert.Contains("\"__type\":\"OptionSetValueCollection\"", json);

            var result = SimpleJson2.Deserialize<OptionSetValueCollection>(json);
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
            var json = SimpleJson2.Serialize(er);
            Assert.Contains("\"__type\":\"EntityReference\"", json);
            Assert.Contains("\"LogicalName\":\"account\"", json);
            Assert.Contains("\"Name\":\"Contoso\"", json);

            var result = SimpleJson2.Deserialize<EntityReference>(json);
            Assert.Equal("account", result.LogicalName);
            Assert.Equal(id, result.Id);
            Assert.Equal("Contoso", result.Name);
        }

        [Fact]
        public void EntityReference_WithoutName()
        {
            var id = Guid.NewGuid();
            var er = new EntityReference("contact", id);
            var json = SimpleJson2.Serialize(er);
            Assert.DoesNotContain("\"Name\"", json);

            var result = SimpleJson2.Deserialize<EntityReference>(json);
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
            var json = SimpleJson2.Serialize(av);
            Assert.Contains("\"__type\":\"AliasedValue\"", json);

            var result = SimpleJson2.Deserialize<AliasedValue>(json);
            Assert.Equal("contact", result.EntityLogicalName);
            Assert.Equal("fullname", result.AttributeLogicalName);
            Assert.Equal("John Doe", result.Value);
        }

        [Fact]
        public void AliasedValue_WithMoney()
        {
            var av = new AliasedValue("account", "revenue", new Money(50000m));
            var json = SimpleJson2.Serialize(av);

            var result = SimpleJson2.Deserialize<AliasedValue>(json);
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
            var json = SimpleJson2.Serialize(av);

            var result = SimpleJson2.Deserialize<AliasedValue>(json);
            Assert.IsType<EntityReference>(result.Value);
            var er = (EntityReference)result.Value;
            Assert.Equal("contact", er.LogicalName);
            Assert.Equal(id, er.Id);
        }

        [Fact]
        public void AliasedValue_WithOptionSetValue()
        {
            var av = new AliasedValue("account", "statuscode", new OptionSetValue(3));
            var json = SimpleJson2.Serialize(av);
            var result = SimpleJson2.Deserialize<AliasedValue>(json);
            Assert.IsType<OptionSetValue>(result.Value);
            Assert.Equal(3, ((OptionSetValue)result.Value).Value);
        }

        [Fact]
        public void AliasedValue_WithBool()
        {
            var av = new AliasedValue("contact", "donotphone", true);
            var json = SimpleJson2.Serialize(av);
            var result = SimpleJson2.Deserialize<AliasedValue>(json);
            Assert.Equal(true, result.Value);
        }

        [Fact]
        public void AliasedValue_WithInt()
        {
            var av = new AliasedValue("account", "numberofemployees", 250);
            var json = SimpleJson2.Serialize(av);
            var result = SimpleJson2.Deserialize<AliasedValue>(json);
            Assert.Equal(250, result.Value);
        }

        [Fact]
        public void AliasedValue_WithDateTime()
        {
            var dt = new DateTime(2025, 12, 25, 0, 0, 0, DateTimeKind.Utc);
            var av = new AliasedValue("account", "createdon", dt);
            var json = SimpleJson2.Serialize(av);
            var result = SimpleJson2.Deserialize<AliasedValue>(json);
            Assert.IsType<DateTime>(result.Value);
            Assert.Equal(dt, (DateTime)result.Value);
        }

        [Fact]
        public void AliasedValue_WithGuid()
        {
            var guid = Guid.NewGuid();
            var av = new AliasedValue("account", "accountid", guid);
            var json = SimpleJson2.Serialize(av);
            var result = SimpleJson2.Deserialize<AliasedValue>(json);
            Assert.IsType<Guid>(result.Value);
            Assert.Equal(guid, (Guid)result.Value);
        }

        [Fact]
        public void AliasedValue_WithNull()
        {
            var av = new AliasedValue("account", "description", null);
            var json = SimpleJson2.Serialize(av);
            var result = SimpleJson2.Deserialize<AliasedValue>(json);
            Assert.Equal("account", result.EntityLogicalName);
            Assert.Equal("description", result.AttributeLogicalName);
            Assert.Null(result.Value);
        }

        [Fact]
        public void AliasedValue_WithDouble()
        {
            var av = new AliasedValue("account", "new_latitude", 47.6062);
            var json = SimpleJson2.Serialize(av);
            var result = SimpleJson2.Deserialize<AliasedValue>(json);
            Assert.IsType<double>(result.Value);
            Assert.Equal(47.6062, (double)result.Value, 4);
        }

        [Fact]
        public void AliasedValue_WithLong()
        {
            var av = new AliasedValue("account", "versionnumber", 9876543210L);
            var json = SimpleJson2.Serialize(av);
            var result = SimpleJson2.Deserialize<AliasedValue>(json);
            Assert.IsType<long>(result.Value);
            Assert.Equal(9876543210L, (long)result.Value);
        }

        #endregion

        #region BooleanManagedProperty

        [Fact]
        public void BooleanManagedProperty_Roundtrip()
        {
            var bmp = new BooleanManagedProperty(true) { CanBeChanged = false };
            var json = SimpleJson2.Serialize(bmp);
            Assert.Contains("\"__type\":\"BooleanManagedProperty\"", json);
            Assert.Contains("\"Value\":true", json);
            Assert.Contains("\"CanBeChanged\":false", json);

            var result = SimpleJson2.Deserialize<BooleanManagedProperty>(json);
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

            var json = SimpleJson2.Serialize(entity);
            Assert.Contains("\"__type\":\"Entity\"", json);
            Assert.Contains("\"LogicalName\":\"account\"", json);

            var result = SimpleJson2.Deserialize<Entity>(json);
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

            var json = SimpleJson2.Serialize(entity);
            Assert.Contains("\"FormattedValues\"", json);
            Assert.Contains("\"statuscode\":\"Active\"", json);

            var result = SimpleJson2.Deserialize<Entity>(json);
            Assert.Equal("Active", result.FormattedValues["statuscode"]);
        }

        [Fact]
        public void Entity_WithNullAttribute()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = null;
            entity["description"] = "test";

            var json = SimpleJson2.Serialize(entity);
            var result = SimpleJson2.Deserialize<Entity>(json);
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

            var json = SimpleJson2.Serialize(entity);
            var result = SimpleJson2.Deserialize<Entity>(json);

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
            var json = SimpleJson2.Serialize(entity);
            var result = SimpleJson2.Deserialize<Entity>(json);
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

            var json = SimpleJson2.Serialize(ec);
            Assert.Contains("\"__type\":\"EntityCollection\"", json);

            var result = SimpleJson2.Deserialize<EntityCollection>(json);
            Assert.Equal("account", result.EntityName);
            Assert.Equal(2, result.Entities.Count);
            Assert.Equal("Contoso", result.Entities[0]["name"]);
            Assert.Equal("Fabrikam", result.Entities[1]["name"]);
        }

        [Fact]
        public void EntityCollection_Empty()
        {
            var ec = new EntityCollection();
            var json = SimpleJson2.Serialize(ec);
            var result = SimpleJson2.Deserialize<EntityCollection>(json);
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

            var json = SimpleJson2.Serialize(pc);
            Assert.Contains("\"__type\":\"ParameterCollection\"", json);

            var result = SimpleJson2.Deserialize<ParameterCollection>(json);
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

            var json = SimpleJson2.Serialize(pc);
            var result = SimpleJson2.Deserialize<ParameterCollection>(json);
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

            var json = SimpleJson2.Serialize(eic);
            Assert.Contains("\"__type\":\"EntityImageCollection\"", json);

            var result = SimpleJson2.Deserialize<EntityImageCollection>(json);
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

            var json = SimpleJson2.Serialize(ctx);
            Assert.Contains("\"__type\":\"RemoteExecutionContext\"", json);
            Assert.Contains("\"MessageName\":\"Create\"", json);

            var result = SimpleJson2.Deserialize<RemoteExecutionContext>(json);
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

            var json = SimpleJson2.Serialize(ctx);
            var result = SimpleJson2.Deserialize<RemoteExecutionContext>(json);
            Assert.NotNull(result.OwningExtension);
            Assert.Equal("sdkmessageprocessingstep", result.OwningExtension.LogicalName);
            Assert.Equal("MyPlugin", result.OwningExtension.Name);
        }

        [Fact]
        public void RemoteExecutionContext_MinimalEmpty()
        {
            var ctx = new RemoteExecutionContext();
            var json = SimpleJson2.Serialize(ctx);
            var result = SimpleJson2.Deserialize<RemoteExecutionContext>(json);
            Assert.NotNull(result);
            Assert.Equal(Guid.Empty, result.BusinessUnitId);
            Assert.Equal(0, result.Depth);
        }

        #endregion

        #region Edge Cases

        [Fact]
        public void Serialize_Enum_AsInt()
        {
            var json = SimpleJson2.Serialize(DayOfWeek.Wednesday);
            Assert.Equal("3", json);
        }

        [Fact]
        public void Unicode_Roundtrip()
        {
            var json = SimpleJson2.Serialize("Vi\u1EC7t Nam");
            var result = SimpleJson2.Deserialize<string>(json);
            Assert.Equal("Vi\u1EC7t Nam", result);
        }

        [Fact]
        public void UnicodeEscape_InJson()
        {
            var result = SimpleJson2.Deserialize<string>("\"\\u0041\\u0042\"");
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

            var json = SimpleJson2.Serialize(av);
            var result = SimpleJson2.Deserialize<AliasedValue>(json);
            Assert.IsType<EntityCollection>(result.Value);
            var resEc = (EntityCollection)result.Value;
            Assert.Single(resEc.Entities);
            Assert.Equal("John", resEc.Entities[0]["fullname"]);
        }

        [Fact]
        public void WhitespaceInJson_ParsedCorrectly()
        {
            var json = "  {  \"name\"  :  \"test\"  ,  \"value\"  :  42  }  ";
            var result = SimpleJson2.Deserialize(json) as Dictionary<string, object>;
            Assert.NotNull(result);
            Assert.Equal("test", result["name"]);
            Assert.Equal(42, result["value"]);
        }

        [Fact]
        public void EmptyString_Deserialize()
        {
            Assert.Null(SimpleJson2.Deserialize(null));
            Assert.Equal("", SimpleJson2.Deserialize<string>("\"\""));
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

            var json = SimpleJson2.Serialize(entity);
            var result = SimpleJson2.Deserialize<Entity>(json);
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

            var json = SimpleJson2.Serialize(ctx);
            var restored = SimpleJson2.Deserialize<RemoteExecutionContext>(json);

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

            var json = SimpleJson2.Serialize(ctx);
            var restored = SimpleJson2.Deserialize<RemoteExecutionContext>(json);

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

            var json = SimpleJson2.Serialize(ctx);
            var restored = SimpleJson2.Deserialize<RemoteExecutionContext>(json);

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

            var json = SimpleJson2.Serialize(email);
            var result = SimpleJson2.Deserialize<Entity>(json);

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
            var json = SimpleJson2.Serialize(entity);
            var result = SimpleJson2.Deserialize<Entity>(json);
            Assert.Equal(long.MaxValue, (long)result["versionnumber"]);
        }

        [Fact]
        public void Int_MinMax_Roundtrip()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["min_val"] = int.MinValue;
            entity["max_val"] = int.MaxValue;
            var json = SimpleJson2.Serialize(entity);
            var result = SimpleJson2.Deserialize<Entity>(json);
            Assert.Equal(int.MinValue, result["min_val"]);
            Assert.Equal(int.MaxValue, result["max_val"]);
        }

        [Fact]
        public void Money_LargeValue_Roundtrip()
        {
            var money = new Money(999999999999.9999m);
            var json = SimpleJson2.Serialize(money);
            var result = SimpleJson2.Deserialize<Money>(json);
            Assert.Equal(999999999999.9999m, result.Value, 2);
        }

        [Fact]
        public void Double_ScientificNotation()
        {
            var result = SimpleJson2.Deserialize("1.5e2");
            Assert.IsType<double>(result);
            Assert.Equal(150.0, (double)result);
        }

        [Fact]
        public void Double_NegativeExponent()
        {
            var result = SimpleJson2.Deserialize("2.5e-3");
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
            var json = SimpleJson2.Serialize(entity);
            var result = SimpleJson2.Deserialize<Entity>(json);
            Assert.Equal("", result["name"]);
        }

        [Fact]
        public void String_SpecialChars_Roundtrip()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["description"] = "Line1\nLine2\tTabbed\r\nWindows\"Quoted\"Back\\slash";
            var json = SimpleJson2.Serialize(entity);
            var result = SimpleJson2.Deserialize<Entity>(json);
            Assert.Equal("Line1\nLine2\tTabbed\r\nWindows\"Quoted\"Back\\slash", result["description"]);
        }

        [Fact]
        public void String_Vietnamese_Roundtrip()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = "Công ty TNHH Động lực Việt Nam";
            var json = SimpleJson2.Serialize(entity);
            var result = SimpleJson2.Deserialize<Entity>(json);
            Assert.Equal("Công ty TNHH Động lực Việt Nam", result["name"]);
        }

        [Fact]
        public void String_Chinese_Japanese_Korean()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = "日本語テスト 한국어 中文测试";
            var json = SimpleJson2.Serialize(entity);
            var result = SimpleJson2.Deserialize<Entity>(json);
            Assert.Equal("日本語テスト 한국어 中文测试", result["name"]);
        }

        [Fact]
        public void String_SurrogatePair_Emoji()
        {
            var result = SimpleJson2.Deserialize<string>("\"\\uD83D\\uDE00\"");
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

            var json = SimpleJson2.Serialize(entity);
            var result = SimpleJson2.Deserialize<Entity>(json);

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

            var jsonSerialize = SimpleJson2.Serialize(ctx);
            var jsonSerializeContext = SimpleJson2.SerializeContext(ctx);

            Assert.Equal(jsonSerialize, jsonSerializeContext);
        }

        [Fact]
        public void SerializeContext_NullReturnsNull()
        {
            Assert.Equal("null", SimpleJson2.SerializeContext(null));
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

            var json = SimpleJson2.SerializeContext(mock);

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

            var json = SimpleJson2.SerializeContext(mock);
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(json);

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

            var json = SimpleJson2.SerializeContext(child);

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

            var json = SimpleJson2.SerializeContext(mock);

            Assert.Contains("\"IsPortalsClientCall\":true", json);
            Assert.Contains("\"InitiatingUserAgent\":\"TestAgent/1.0\"", json);
            Assert.Contains("\"IsApplicationUser\":true", json);
            Assert.Contains(envId.ToString("D"), json);
            Assert.Contains(tenantId.ToString("D"), json);

            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(json);
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
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(json);
            Assert.NotNull(ctx);
            Assert.IsType<RemoteExecutionContext>(ctx);
        }

        [Fact]
        public void JsonFile_ContextProperties()
        {
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(ReadJsonFile());

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
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(ReadJsonFile());

            Assert.NotNull(ctx.OwningExtension);
            Assert.Equal("sdkmessageprocessingstep", ctx.OwningExtension.LogicalName);
            Assert.Equal(Guid.Parse("22222222-3333-4444-5555-666666666666"), ctx.OwningExtension.Id);
            Assert.Equal("AccountPlugin: Update of account", ctx.OwningExtension.Name);
        }

        [Fact]
        public void JsonFile_TargetEntity_BasicAttributes()
        {
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(ReadJsonFile());
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
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(ReadJsonFile());
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
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var revenue = (Money)target["revenue"];
            Assert.Equal(1500000.50m, revenue.Value);

            var creditLimit = (Money)target["creditlimit"];
            Assert.Equal(250000.75m, creditLimit.Value);
        }

        [Fact]
        public void JsonFile_TargetEntity_OptionSetValue()
        {
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var status = (OptionSetValue)target["statuscode"];
            Assert.Equal(1, status.Value);

            var industry = (OptionSetValue)target["industrycode"];
            Assert.Equal(100000001, industry.Value);
        }

        [Fact]
        public void JsonFile_TargetEntity_EntityReference()
        {
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var contact = (EntityReference)target["primarycontactid"];
            Assert.Equal("contact", contact.LogicalName);
            Assert.Equal(Guid.Parse("e5f6a7b8-c9d0-1234-efab-345678901234"), contact.Id);
            Assert.Equal("John Smith", contact.Name);
        }

        [Fact]
        public void JsonFile_TargetEntity_BooleanManagedProperty()
        {
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var bmp = (BooleanManagedProperty)target["ismanaged"];
            Assert.True(bmp.Value);
            Assert.False(bmp.CanBeChanged);
        }

        [Fact]
        public void JsonFile_TargetEntity_DateTime()
        {
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var created = (DateTime)target["createdon"];
            Assert.Equal(new DateTime(2025, 1, 15, 10, 30, 0, DateTimeKind.Utc), created);
        }

        [Fact]
        public void JsonFile_TargetEntity_Guid()
        {
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var id = (Guid)target["accountid"];
            Assert.Equal(Guid.Parse("d4e5f6a7-b8c9-0123-defa-234567890123"), id);
        }

        [Fact]
        public void JsonFile_TargetEntity_File()
        {
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(ReadJsonFile());
            var target = (Entity)ctx.InputParameters["Target"];

            var bytes = (byte[])target["entityimage"];
            Assert.Equal("Hello World", System.Text.Encoding.UTF8.GetString(bytes));
        }

        [Fact]
        public void JsonFile_TargetEntity_OptionSetValueCollection()
        {
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(ReadJsonFile());
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
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(ReadJsonFile());
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
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(ReadJsonFile());
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
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(ReadJsonFile());
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
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(ReadJsonFile());
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
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(ReadJsonFile());

            Assert.Single(ctx.PreEntityImages);
            var preImage = ctx.PreEntityImages["PreImage"];
            Assert.Equal("account", preImage.LogicalName);
            Assert.Equal("Contoso Ltd", preImage["name"]);
            Assert.Equal(1500000.50m, ((Money)preImage["revenue"]).Value);
        }

        [Fact]
        public void JsonFile_PostEntityImages()
        {
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(ReadJsonFile());

            Assert.Single(ctx.PostEntityImages);
            var postImage = ctx.PostEntityImages["PostImage"];
            Assert.Equal("account", postImage.LogicalName);
            Assert.Equal("Contoso Ltd (Updated)", postImage["name"]);
            Assert.Equal(2000000.00m, ((Money)postImage["revenue"]).Value);
        }

        [Fact]
        public void JsonFile_OutputParameters()
        {
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(ReadJsonFile());

            Assert.Single(ctx.OutputParameters);
            var id = (Guid)ctx.OutputParameters["id"];
            Assert.Equal(Guid.Parse("d4e5f6a7-b8c9-0123-defa-234567890123"), id);
        }

        [Fact]
        public void JsonFile_SharedVariables()
        {
            var ctx = SimpleJson2.Deserialize<RemoteExecutionContext>(ReadJsonFile());

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
            var ctx1 = SimpleJson2.Deserialize<RemoteExecutionContext>(json1);

            var json2 = SimpleJson2.Serialize(ctx1);
            var ctx2 = SimpleJson2.Deserialize<RemoteExecutionContext>(json2);

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
            var ctx1 = SimpleJson2.Deserialize<RemoteExecutionContext>(json1);

            var json2 = SimpleJson2.Serialize(ctx1);
            var ctx2 = SimpleJson2.Deserialize<RemoteExecutionContext>(json2);

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
