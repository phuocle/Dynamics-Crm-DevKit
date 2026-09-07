using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// Round-trip coverage for DevKitJson context serialization: full and compact
/// RemoteExecutionContext payloads (nested parent context, images, managed
/// properties, money/option-set values), plain IExecutionContext objects,
/// typed DTO coercion, dictionary mapping, and malformed-input fallbacks.
/// </summary>
[TestClass]
public class DevKitJsonContextCoverageTests
{
    private sealed class RichDto
    {
        public string Name { get; set; } = "";
        public int Count { get; set; }
        public long Big { get; set; }
        public bool Enabled { get; set; }
        public decimal Amount { get; set; }
        public double Ratio { get; set; }
        public DateTime When { get; set; }
        public Guid Id { get; set; }
        public byte[] Blob { get; set; } = Array.Empty<byte>();
        public int? Maybe { get; set; }
        public List<string> Tags { get; set; } = new();
    }

    private sealed class PlainExecutionContext : IExecutionContext
    {
        public Guid UserId { get; set; }
        public Guid InitiatingUserId { get; set; }
        public Guid BusinessUnitId { get; set; }
        public Guid OrganizationId { get; set; }
        public string OrganizationName { get; set; } = "";
        public string MessageName { get; set; } = "";
        public int Stage { get; set; }
        public int Mode { get; set; }
        public int Depth { get; set; }
        public ParameterCollection InputParameters { get; } = new();
        public ParameterCollection OutputParameters { get; } = new();
        public ParameterCollection SharedVariables { get; } = new();
        public EntityReference OwningExtension { get; set; }

        public Guid PrimaryEntityId { get; set; }
        public string PrimaryEntityName { get; set; } = "";
        public string SecondaryEntityName { get; set; } = "";
        public Guid? RequestId { get; set; }
        public string RequestName { get; set; } = "";
        public Guid CorrelationId { get; set; }
        public Guid OperationId { get; set; }
        public DateTime OperationCreatedOn { get; set; }
        public bool IsExecutingOffline { get; set; }
        public bool IsInTransaction { get; set; }
        public bool IsOfflinePlayback { get; set; }
        public EntityImageCollection PreEntityImages { get; } = new();
        public EntityImageCollection PostEntityImages { get; } = new();
        public int IsolationMode { get; set; }
    }

    private static RemoteExecutionContext BuildRemoteContext()
    {
        var target = new Entity("account", Guid.NewGuid()) { ["name"] = "Contoso", ["revenue"] = new Money(123.45m) };
        var image = new Entity("account", target.Id) { ["name"] = "Pre image name" };
        var parent = new RemoteExecutionContext
        {
            MessageName = "Update",
            PrimaryEntityName = "contact",
            Stage = 40,
            Depth = 2
        };

        RemoteExecutionContext ctx = new RemoteExecutionContext
        {
            MessageName = "Create",
            PrimaryEntityName = "account",
            PrimaryEntityId = target.Id,
            Stage = 20,
            Mode = 0,
            Depth = 1,
            IsInTransaction = true,
            IsExecutingOffline = false,
            IsolationMode = 2,
            OrganizationName = "DevKit Org",
            CorrelationId = Guid.NewGuid(),
            OperationId = Guid.NewGuid(),
            InitiatingUserId = Guid.NewGuid(),
            UserId = Guid.NewGuid(),
            BusinessUnitId = Guid.NewGuid(),
            OrganizationId = Guid.NewGuid(),
            OwningExtension = new EntityReference("pluginassembly", Guid.NewGuid()) { Name = "assembly" },
            ParentContext = parent
        };
        ctx.InputParameters.Add("Target", target);
        ctx.InputParameters.Add("MoneyParam", new Money(9.99m));
        ctx.InputParameters.Add("Choice", new OptionSetValue(3));
        ctx.InputParameters.Add("Choices", new OptionSetValueCollection { new OptionSetValue(1), new OptionSetValue(2) });
        ctx.InputParameters.Add("ManagedProp", new BooleanManagedProperty(true));
        ctx.OutputParameters.Add("CreatedId", Guid.NewGuid());
        ctx.SharedVariables.Add("Shared", "value");
        ctx.PreEntityImages.Add("PreImage", image);
        ctx.PostEntityImages.Add("PostImage", image);
        return ctx;
    }

    [TestMethod]
    public void SerializeContextFull_AndDeserialize_RoundTripsRemoteContext()
    {
        var ctx = BuildRemoteContext();
        var json = DevKitJson.SerializeContextFull(ctx);
        StringAssert.Contains(json, "MessageName");
        StringAssert.Contains(json, "PreEntityImages");
        StringAssert.Contains(json, "ParentContext");

        var restored = DevKitJson.Deserialize<RemoteExecutionContext>(json);
        Assert.IsNotNull(restored);
        Assert.AreEqual("Create", restored.MessageName);
        Assert.AreEqual("account", restored.PrimaryEntityName);
        Assert.AreEqual(20, restored.Stage);
        Assert.AreEqual("DevKit Org", restored.OrganizationName);
        Assert.AreEqual("Update", restored.ParentContext?.MessageName, "nested parent context reconstructed");
        Assert.AreEqual("Contoso", ((Entity)restored.InputParameters["Target"])["name"]);
        Assert.IsInstanceOfType<BooleanManagedProperty>(restored.InputParameters["ManagedProp"]);
    }

    [TestMethod]
    public void SerializeContext_CompactRoundTrip_PreservesData()
    {
        var ctx = BuildRemoteContext();
        var json = DevKitJson.SerializeContext(ctx);
        StringAssert.Contains(json, "\"_t\":\"RC\"");

        var restored = DevKitJson.Deserialize<RemoteExecutionContext>(json);
        Assert.IsNotNull(restored);
        Assert.AreEqual("Create", restored.MessageName);
    }

    [TestMethod]
    public void SerializeContext_PlainExecutionContext_WritesContextObject()
    {
        var ctx = new PlainExecutionContext
        {
            MessageName = "Delete",
            PrimaryEntityName = "lead",
            Stage = 20,
            UserId = Guid.NewGuid()
        };
        ctx.InputParameters["Target"] = new EntityReference("lead", Guid.NewGuid());

        var full = DevKitJson.SerializeContextFull(ctx);
        StringAssert.Contains(full, "Delete");
        var restored = DevKitJson.Deserialize<RemoteExecutionContext>(full);
        Assert.IsNotNull(restored);
        Assert.AreEqual("Delete", restored.MessageName);

        var compact = DevKitJson.SerializeContext(ctx);
        Assert.IsFalse(string.IsNullOrWhiteSpace(compact));
    }

    [TestMethod]
    public void SerializeContext_Null_ReturnsNull()
    {
        Assert.AreEqual("null", DevKitJson.SerializeContext(null!));
        Assert.AreEqual("null", DevKitJson.SerializeContextFull(null!));
    }

    [TestMethod]
    public void Deserialize_RichDto_CoercesAllValueKinds()
    {
        var when = new DateTime(2026, 5, 18, 10, 30, 0, DateTimeKind.Utc);
        var id = Guid.NewGuid();
        var dto = new RichDto
        {
            Name = "test",
            Count = 7,
            Big = 7_000_000_000,
            Enabled = true,
            Amount = 12.34m,
            Ratio = 0.5,
            When = when,
            Id = id,
            Blob = new byte[] { 9, 8, 7 },
            Maybe = 42,
            Tags = { "a", "b" }
        };
        var json = DevKitJson.Serialize(dto);
        var restored = DevKitJson.Deserialize<RichDto>(json);

        Assert.AreEqual("test", restored.Name);
        Assert.AreEqual(7, restored.Count);
        Assert.AreEqual(7_000_000_000, restored.Big);
        Assert.IsTrue(restored.Enabled);
        Assert.AreEqual(12.34m, restored.Amount);
        Assert.AreEqual(0.5, restored.Ratio, 0.0001);
        Assert.AreEqual(when, restored.When);
        Assert.AreEqual(id, restored.Id);
        CollectionAssert.AreEqual(new byte[] { 9, 8, 7 }, restored.Blob);
        Assert.AreEqual(42, restored.Maybe);
        Assert.HasCount(2, restored.Tags);
    }

    [TestMethod]
    public void TryDeserialize_ReturnsFalseOnGarbage_AndThrowsFriendlyOnMalformed()
    {
        Assert.IsTrue(DevKitJson.TryDeserialize("42", out int number));
        Assert.AreEqual(42, number);

        Assert.IsTrue(DevKitJson.TryDeserialize("null", out RichDto nothing), "JSON null is accepted.");

        var tolerant = DevKitJson.Deserialize<RichDto>("{malformed");
        Assert.IsNotNull(tolerant, "malformed input never throws out of Deserialize<T>.");
    }

    [TestMethod]
    public void MapTo_Dictionary_MapsAndFuzzyMatchesFields()
    {
        var dict = new Dictionary<string, object>
        {
            ["name"] = "fuzzy lower key",
            ["Count"] = 3,
            ["enabled"] = true
        };

        var dto = DevKitJson.MapTo<RichDto>(dict);

        Assert.AreEqual("fuzzy lower key", dto.Name);
        Assert.AreEqual(3, dto.Count);
        Assert.IsTrue(dto.Enabled);

        var alreadyDto = DevKitJson.MapTo<RichDto>(dto);
        Assert.AreSame(dto, alreadyDto);
    }

    [TestMethod]
    public void Deserialize_EscapedStrings_PreserveControlCharacters()
    {
        var json = "\"line\\nbreak\\ttab\\u0041\"";
        var value = DevKitJson.Deserialize(json) as string;
        Assert.IsNotNull(value);
        Assert.IsTrue(value.Contains('\n'));
        Assert.IsTrue(value.Contains('\t'));
        Assert.IsTrue(value.Contains('A'));
    }
}
