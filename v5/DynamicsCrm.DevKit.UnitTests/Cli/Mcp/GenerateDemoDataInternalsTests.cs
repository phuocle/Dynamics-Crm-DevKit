using Bogus;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.Json;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class GenerateDemoDataInternalsTests
{
    private static readonly Type ToolType = typeof(GenerateDemoDataTool);

    [TestMethod]
    public void SelectFields_ExplicitFields_ResolvesDisplayNamesAndReportsInvalidFields()
    {
        var metadata = BuildMetadata();
        var warnings = new List<string>();

        var selected = InvokeStatic<List<AttributeMetadata>>("SelectFields", metadata, "Account Name,Email,missing,statuscode", "account", warnings);

        CollectionAssert.AreEqual(new[] { "name", "emailaddress1" }, selected.Select(a => a.LogicalName).ToArray());
        Assert.IsTrue(warnings.Any(w => w.Contains("missing", StringComparison.OrdinalIgnoreCase)));
        Assert.IsTrue(warnings.Any(w => w.Contains("statuscode", StringComparison.OrdinalIgnoreCase)));
    }

    [TestMethod]
    public void SelectFields_AutoSelect_SkipsSystemUnsupportedAndPatternFields()
    {
        var metadata = BuildMetadata();
        var warnings = new List<string>();

        var selected = InvokeStatic<List<AttributeMetadata>>("SelectFields", metadata, "", "account", warnings);

        CollectionAssert.Contains(selected.Select(a => a.LogicalName).ToList(), "name");
        CollectionAssert.Contains(selected.Select(a => a.LogicalName).ToList(), "ownerid");
        CollectionAssert.DoesNotContain(selected.Select(a => a.LogicalName).ToList(), "accountid");
        CollectionAssert.DoesNotContain(selected.Select(a => a.LogicalName).ToList(), "adx_portalfield");
        CollectionAssert.DoesNotContain(selected.Select(a => a.LogicalName).ToList(), "revenue_base");
    }

    [TestMethod]
    public void NormalizeOverrides_ResolvesDisplayNamesAndPolymorphicTargets()
    {
        var metadata = BuildMetadata();
        var overrides = new List<FieldOverride>
        {
            Override("Account Name", "eq", "\"Contoso\""),
            Override("Customer@Contact", "eq", "\"11111111-1111-1111-1111-111111111111\"")
        };

        var error = InvokeStatic<string>("NormalizeOverrides", metadata, overrides, "account");

        Assert.IsNull(error);
        Assert.AreEqual("name", overrides[0].LogicalName);
        Assert.AreEqual("customerid@contact", overrides[1].LogicalName);
    }

    [TestMethod]
    public void NormalizeOverrides_InvalidPolymorphicTarget_ReturnsActionableError()
    {
        var metadata = BuildMetadata();
        var overrides = new List<FieldOverride>
        {
            Override("Customer@lead", "eq", "\"11111111-1111-1111-1111-111111111111\"")
        };

        var error = InvokeStatic<string>("NormalizeOverrides", metadata, overrides, "account");

        Assert.IsNotNull(error);
        StringAssert.Contains(error, "Valid targets: account, contact");
    }

    [TestMethod]
    public void ApplyOverrides_SupportsAllOperatorsAndPolymorphicReplacement()
    {
        var faker = new Faker { Random = new Randomizer(123) };
        var record = new Dictionary<string, object>(StringComparer.OrdinalIgnoreCase)
        {
            ["customerid@account"] = Guid.NewGuid().ToString()
        };
        var warnings = new List<string>();
        var overrides = new List<FieldOverride>
        {
            Override("name", "eq", "\"Contoso\""),
            Override("prioritycode", "in", "\"100000000\"", "\"100000001\""),
            Override("accountnumber", "startswith", "\"ACC-\""),
            Override("emailaddress1", "endswith", "\"@example.com\""),
            Override("jobtitle", "contains", "\"Manager\""),
            Override("telephone1", "regex", "\"+84[0-9]{9}\""),
            Override("customerid@contact", "eq", "\"22222222-2222-2222-2222-222222222222\"")
        };

        InvokeStatic<object>("ApplyOverrides", faker, record, overrides, warnings);

        Assert.AreEqual("Contoso", record["name"]);
        Assert.IsInstanceOfType(record["prioritycode"], typeof(int));
        StringAssert.StartsWith((string)record["accountnumber"], "ACC-");
        StringAssert.EndsWith((string)record["emailaddress1"], "@example.com");
        StringAssert.Contains((string)record["jobtitle"], "Manager");
        Assert.IsTrue(record.ContainsKey("customerid@contact"));
        Assert.IsFalse(record.ContainsKey("customerid@account"));
    }

    [TestMethod]
    public void GenerateRecord_GeneratesSupportedPrimitiveChoiceAndLookupValues()
    {
        var tool = new GenerateDemoDataTool(null!);
        var faker = new Faker { Random = new Randomizer(321) };
        var warnings = new List<string>();
        var accountId = Guid.NewGuid();
        var contactId = Guid.NewGuid();
        var lookupPools = new Dictionary<string, List<Guid>>(StringComparer.OrdinalIgnoreCase)
        {
            ["account"] = [accountId],
            ["contact"] = [contactId]
        };
        var attrs = new List<AttributeMetadata>
        {
            new StringAttributeMetadata { LogicalName = "emailaddress1", MaxLength = 64 },
            new MemoAttributeMetadata { LogicalName = "description", MaxLength = 40 },
            new IntegerAttributeMetadata { LogicalName = "numberofemployees", MinValue = 5, MaxValue = 10 },
            BigInt("devkit_big", 100, 200),
            new DecimalAttributeMetadata { LogicalName = "devkit_ratio", MinValue = 1, MaxValue = 2, Precision = 2 },
            new DoubleAttributeMetadata { LogicalName = "devkit_score", MinValue = 0, MaxValue = 1 },
            new MoneyAttributeMetadata { LogicalName = "revenue", MinValue = 10, MaxValue = 20, Precision = 2 },
            new BooleanAttributeMetadata { LogicalName = "devkit_enabled" },
            new DateTimeAttributeMetadata { LogicalName = "devkit_on" },
            Picklist("prioritycode", 1, 2),
            MultiPicklist("devkit_tags", 3, 4, 5),
            new LookupAttributeMetadata { LogicalName = "customerid", Targets = ["account", "contact"] }
        };

        var result = InvokeInstance<Dictionary<string, object>>(tool, "GenerateRecord",
            faker, "account", attrs, lookupPools, new DateTime(2026, 1, 1), new DateTime(2026, 1, 31), warnings);

        Assert.IsTrue(result.ContainsKey("overriddencreatedon"));
        Assert.IsTrue(((string)result["emailaddress1"]).Contains("@"));
        Assert.IsInstanceOfType(result["numberofemployees"], typeof(int));
        Assert.IsInstanceOfType(result["prioritycode"], typeof(int));
        Assert.IsInstanceOfType(result["devkit_tags"], typeof(List<int>));
        Assert.IsTrue(result.Keys.Any(k => k.StartsWith("customerid@", StringComparison.OrdinalIgnoreCase)));
        Assert.AreEqual(0, warnings.Count);
    }

    [TestMethod]
    public void GenerateStringValue_UsesDomainSpecificGeneratorsAndMaxLength()
    {
        var faker = new Faker { Random = new Randomizer(456) };

        var values = new[]
        {
            GenerateString(faker, "contact", "firstname", 50),
            GenerateString(faker, "contact", "lastname", 50),
            GenerateString(faker, "contact", "fullname", 50),
            GenerateString(faker, "account", "name", 50),
            GenerateString(faker, "account", "websiteurl", 80),
            GenerateString(faker, "account", "telephone1", 30),
            GenerateString(faker, "account", "address1_city", 50),
            GenerateString(faker, "account", "address1_stateorprovince", 50),
            GenerateString(faker, "account", "address1_country", 50),
            GenerateString(faker, "account", "address1_postalcode", 20),
            GenerateString(faker, "account", "jobtitle", 50),
            GenerateString(faker, "account", "accountnumber", 8),
            GenerateString(faker, "account", "description", 12)
        };

        Assert.IsTrue(values.All(v => !string.IsNullOrWhiteSpace(v)));
        Assert.IsTrue(values.Last().Length <= 12);
    }

    private static EntityMetadata BuildMetadata()
    {
        var metadata = new EntityMetadata { LogicalName = "account" };
        SetMetadata(metadata, nameof(EntityMetadata.Attributes), new AttributeMetadata[]
        {
            PrimaryId("accountid"),
            new StringAttributeMetadata
            {
                LogicalName = "name",
                SchemaName = "Name",
                DisplayName = L("Account Name"),
                IsValidForCreate = true
            },
            new StringAttributeMetadata
            {
                LogicalName = "emailaddress1",
                SchemaName = "EmailAddress1",
                DisplayName = L("Email"),
                IsValidForCreate = true
            },
            new LookupAttributeMetadata
            {
                LogicalName = "customerid",
                SchemaName = "CustomerId",
                DisplayName = L("Customer"),
                Targets = ["account", "contact"],
                IsValidForCreate = true
            },
            new LookupAttributeMetadata
            {
                LogicalName = "ownerid",
                SchemaName = "OwnerId",
                DisplayName = L("Owner"),
                Targets = ["systemuser", "team"],
                IsValidForCreate = true
            },
            new StatusAttributeMetadata { LogicalName = "statuscode", DisplayName = L("Status"), IsValidForCreate = true },
            new StringAttributeMetadata { LogicalName = "adx_portalfield", IsValidForCreate = true },
            new MoneyAttributeMetadata { LogicalName = "revenue_base", IsValidForCreate = true }
        });
        return metadata;
    }

    private static PicklistAttributeMetadata Picklist(string name, params int[] values)
    {
        var optionSet = new OptionSetMetadata();
        foreach (var value in values)
            optionSet.Options.Add(new OptionMetadata(L($"Option {value}"), value));
        return new PicklistAttributeMetadata { LogicalName = name, OptionSet = optionSet };
    }

    private static MultiSelectPicklistAttributeMetadata MultiPicklist(string name, params int[] values)
    {
        var optionSet = new OptionSetMetadata();
        foreach (var value in values)
            optionSet.Options.Add(new OptionMetadata(L($"Option {value}"), value));
        return new MultiSelectPicklistAttributeMetadata { LogicalName = name, OptionSet = optionSet };
    }

    private static BigIntAttributeMetadata BigInt(string name, long minValue, long maxValue)
    {
        var attr = new BigIntAttributeMetadata { LogicalName = name };
        SetMetadata(attr, nameof(BigIntAttributeMetadata.MinValue), minValue);
        SetMetadata(attr, nameof(BigIntAttributeMetadata.MaxValue), maxValue);
        return attr;
    }

    private static UniqueIdentifierAttributeMetadata PrimaryId(string name)
    {
        var attr = new UniqueIdentifierAttributeMetadata { LogicalName = name };
        SetMetadata(attr, nameof(AttributeMetadata.IsPrimaryId), true);
        return attr;
    }

    private static FieldOverride Override(string logicalName, string op, params string[] rawValues)
    {
        var values = new List<JsonElement>();
        foreach (var raw in rawValues)
        {
            using var doc = JsonDocument.Parse(raw);
            values.Add(doc.RootElement.Clone());
        }
        return new FieldOverride { LogicalName = logicalName, Operator = op, Values = values };
    }

    private static Label L(string text)
    {
        var label = new Label();
        label.UserLocalizedLabel = new LocalizedLabel(text, 1033);
        return label;
    }

    private static string GenerateString(Faker faker, string entityName, string logicalName, int maxLength)
        => InvokeStatic<string>("GenerateStringValue", faker, entityName, logicalName, maxLength);

    private static T InvokeStatic<T>(string methodName, params object?[] args)
    {
        var method = ToolType.GetMethod(methodName, BindingFlags.Static | BindingFlags.NonPublic)!;
        return (T)method.Invoke(null, args)!;
    }

    private static T InvokeInstance<T>(object instance, string methodName, params object?[] args)
    {
        var method = ToolType.GetMethod(methodName, BindingFlags.Instance | BindingFlags.NonPublic)!;
        return (T)method.Invoke(instance, args)!;
    }

    private static void SetMetadata(object target, string propertyName, object value)
    {
        target.GetType().GetProperty(propertyName)!.SetValue(target, value);
    }
}
