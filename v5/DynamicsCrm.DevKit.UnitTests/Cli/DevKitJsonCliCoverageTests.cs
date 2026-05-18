using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class DevKitJsonCliCoverageTests
{
    private sealed class SampleDto
    {
        public string Name { get; set; } = "";
        public int Count { get; set; }
        public bool Enabled { get; set; }
    }

    [TestMethod]
    public void Serialize_PrimitivesAndEscapes_UseJsonLiterals()
    {
        Assert.AreEqual("null", DevKitJson.Serialize(null));
        Assert.AreEqual("\"hello\\nworld\"", DevKitJson.Serialize("hello\nworld"));
        Assert.AreEqual("\"quote \\\" slash \\\\ tab\\t\"", DevKitJson.Serialize("quote \" slash \\ tab\t"));
        Assert.AreEqual("true", DevKitJson.Serialize(true));
        Assert.AreEqual("42", DevKitJson.Serialize(42));
        Assert.AreEqual("9999999999", DevKitJson.Serialize(9999999999L));
        Assert.AreEqual("123.45", DevKitJson.Serialize(123.45m));
        Assert.AreEqual("255", DevKitJson.Serialize((byte)255));
        Assert.AreEqual("-12", DevKitJson.Serialize((short)-12));
        Assert.IsTrue(DevKitJson.Serialize(3.14d).Contains("3.14"));
        Assert.IsTrue(DevKitJson.Serialize(2.5f).Contains("2.5"));
    }

    [TestMethod]
    public void Deserialize_PrimitivesAndGenericConversions_ReturnExpectedTypes()
    {
        Assert.IsNull(DevKitJson.Deserialize(null));
        Assert.IsNull(DevKitJson.Deserialize("null"));
        Assert.AreEqual("hello\nworld", DevKitJson.Deserialize("\"hello\\nworld\""));
        Assert.AreEqual(true, DevKitJson.Deserialize("true"));
        Assert.AreEqual(false, DevKitJson.Deserialize("false"));
        Assert.AreEqual(42, DevKitJson.Deserialize("42"));
        Assert.AreEqual(9999999999L, DevKitJson.Deserialize("9999999999"));
        Assert.AreEqual(-42, DevKitJson.Deserialize("-42"));
        Assert.AreEqual(3.14d, (double)DevKitJson.Deserialize("3.14"), 0.0001d);

        Assert.AreEqual(42, DevKitJson.Deserialize<int>("42"));
        Assert.AreEqual(42L, DevKitJson.Deserialize<long>("42"));
        Assert.AreEqual(42d, DevKitJson.Deserialize<double>("42"));
        Assert.AreEqual(42m, DevKitJson.Deserialize<decimal>("42"));
        Assert.AreEqual(42f, DevKitJson.Deserialize<float>("42"));
        Assert.IsTrue(DevKitJson.Deserialize<bool>("true"));
        Assert.AreEqual("42", DevKitJson.Deserialize<string>("42"));
    }

    [TestMethod]
    public void TypedValues_RoundTrip_DateTimeGuidAndBytes()
    {
        var when = new DateTime(2026, 5, 18, 1, 2, 3, DateTimeKind.Utc);
        var id = Guid.Parse("11111111-2222-3333-4444-555555555555");
        var bytes = new byte[] { 1, 2, 3, 4 };

        Assert.AreEqual(when, DevKitJson.Deserialize<DateTime>(DevKitJson.Serialize(when)));
        Assert.AreEqual(id, DevKitJson.Deserialize<Guid>(DevKitJson.Serialize(id)));
        CollectionAssert.AreEqual(bytes, (byte[])DevKitJson.Deserialize(DevKitJson.Serialize(bytes)));

        var compactDate = DevKitJson.SerializeCompact(when);
        Assert.IsTrue(compactDate.Contains("\"_t\":\"DT\""));
        Assert.AreEqual(when, DevKitJson.Deserialize<DateTime>(compactDate));
    }

    [TestMethod]
    public void CollectionsAndPocos_RoundTrip()
    {
        var dictionary = new Dictionary<string, object>
        {
            ["name"] = "Contoso",
            ["count"] = 7,
            ["enabled"] = true,
            ["items"] = new List<object> { 1, "two", null }
        };

        var parsed = (Dictionary<string, object>)DevKitJson.Deserialize(DevKitJson.Serialize(dictionary));
        Assert.AreEqual("Contoso", parsed["name"]);
        Assert.AreEqual(7, parsed["count"]);
        Assert.AreEqual(true, parsed["enabled"]);
        Assert.AreEqual(3, ((List<object>)parsed["items"]).Count);

        var strings = new Dictionary<string, string> { ["first"] = "Ada", ["last"] = "Lovelace" };
        var stringsJson = DevKitJson.Serialize(strings);
        Assert.IsTrue(stringsJson.Contains("\"first\":\"Ada\""));
        Assert.IsTrue(stringsJson.Contains("\"last\":\"Lovelace\""));

        var dtoJson = DevKitJson.Serialize(new SampleDto { Name = "Alpha", Count = 3, Enabled = true });
        var dto = DevKitJson.Deserialize<SampleDto>(dtoJson);
        Assert.AreEqual("Alpha", dto.Name);
        Assert.AreEqual(3, dto.Count);
        Assert.IsTrue(dto.Enabled);
    }

    [TestMethod]
    public void DataverseTypes_RoundTrip_InFullAndCompactForms()
    {
        var accountId = Guid.Parse("aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee");
        var contactId = Guid.Parse("99999999-8888-7777-6666-555555555555");
        var entity = new Entity("account", accountId)
        {
            ["name"] = "Contoso",
            ["revenue"] = new Money(123.45m),
            ["primarycontactid"] = new EntityReference("contact", contactId) { Name = "Ada" },
            ["statuscode"] = new OptionSetValue(1),
            ["categories"] = new OptionSetValueCollection { new(2), new(3) },
            ["alias"] = new AliasedValue("contact", "fullname", "Ada Lovelace"),
            ["managed"] = new BooleanManagedProperty(true)
        };
        entity.FormattedValues["statuscode"] = "Active";

        var full = DevKitJson.Serialize(entity);
        var compact = DevKitJson.SerializeCompact(entity);
        Assert.IsTrue(compact.Length < full.Length);

        var fullEntity = DevKitJson.Deserialize<Entity>(full);
        var compactEntity = DevKitJson.Deserialize<Entity>(compact);

        Assert.AreEqual("account", fullEntity.LogicalName);
        Assert.AreEqual(accountId, compactEntity.Id);
        Assert.AreEqual("Contoso", compactEntity["name"]);
        Assert.AreEqual(123.45m, ((Money)compactEntity["revenue"]).Value);
        Assert.AreEqual("Ada", ((EntityReference)compactEntity["primarycontactid"]).Name);
        Assert.AreEqual(1, ((OptionSetValue)compactEntity["statuscode"]).Value);
        Assert.AreEqual("Active", compactEntity.FormattedValues["statuscode"]);
    }

    [TestMethod]
    public void EntityCollectionsAndParameterCollections_RoundTrip()
    {
        var entity = new Entity("account", Guid.NewGuid()) { ["name"] = "Contoso" };
        var collection = new EntityCollection(new List<Entity> { entity })
        {
            EntityName = "account",
            MoreRecords = true,
            PagingCookie = "<cookie />",
            TotalRecordCount = 1,
            TotalRecordCountLimitExceeded = false
        };

        var parsedCollection = DevKitJson.Deserialize<EntityCollection>(DevKitJson.SerializeCompact(collection));
        Assert.AreEqual("account", parsedCollection.EntityName);
        Assert.AreEqual(1, parsedCollection.Entities.Count);
        Assert.AreEqual(entity.Id, parsedCollection.Entities[0].Id);

        var parameters = new ParameterCollection
        {
            ["Target"] = entity,
            ["Amount"] = new Money(10m)
        };
        var parsedParameters = (ParameterCollection)DevKitJson.Deserialize(DevKitJson.Serialize(parameters));
        Assert.IsTrue(parsedParameters.ContainsKey("Target"));
        Assert.AreEqual(10m, ((Money)parsedParameters["Amount"]).Value);
    }

    [TestMethod]
    public void ExecutionContextSerialization_UsesKnownContextProperties()
    {
        var ctx = new RemoteExecutionContext();
        SetPrivateField(ctx, "_messageName", "Update");
        SetPrivateField(ctx, "_primaryEntityName", "account");
        SetPrivateField(ctx, "_primaryEntityId", Guid.Parse("aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"));
        SetPrivateField(ctx, "_depth", 2);
        SetPrivateField(ctx, "_stage", 40);
        SetPrivateField(ctx, "_mode", 0);
        ctx.InputParameters["Target"] = new Entity("account") { ["name"] = "Contoso" };
        ctx.SharedVariables["Flag"] = true;

        var full = DevKitJson.SerializeContextFull(ctx);
        var compact = DevKitJson.SerializeContext(ctx);

        Assert.IsTrue(full.Contains("\"MessageName\":\"Update\""));
        Assert.IsTrue(full.Contains("\"InputParameters\""));
        Assert.IsTrue(compact.Contains("\"mn\":\"Update\""));
        Assert.IsTrue(compact.Length < full.Length);
    }

    [TestMethod]
    public void MapTo_HandlesNullTypedValueAndDictionary()
    {
        Assert.IsNull(DevKitJson.MapTo<SampleDto>(null));

        var existing = new SampleDto { Name = "Existing", Count = 1 };
        Assert.AreSame(existing, DevKitJson.MapTo<SampleDto>(existing));

        var mapped = DevKitJson.MapTo<SampleDto>(new Dictionary<string, object>
        {
            ["Name"] = "Mapped",
            ["Count"] = 9,
            ["Enabled"] = true
        });

        Assert.AreEqual("Mapped", mapped.Name);
        Assert.AreEqual(9, mapped.Count);
        Assert.IsTrue(mapped.Enabled);
    }

    private static void SetPrivateField(object target, string name, object value)
    {
        var field = target.GetType().GetField(name, BindingFlags.NonPublic | BindingFlags.Instance);
        Assert.IsNotNull(field, $"Field {name} was not found.");
        field.SetValue(target, value);
    }
}
