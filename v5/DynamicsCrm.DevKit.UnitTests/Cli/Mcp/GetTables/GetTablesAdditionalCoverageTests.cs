using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.GetTables;

[TestClass]
public sealed class GetTablesAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(GetTablesTool);

    [TestMethod]
    public void DetailFilterAndWordBoundaryHelpers_CoverSingleAndMultiValueFilters()
    {
        var noFilter = InvokeStatic("ParseDetailFilter", "");
        var multi = InvokeStatic("ParseDetailFilter", "name|email; statuscode");
        var single = InvokeStatic("ParseDetailFilter", "new_");
        var attribute = new StringAttributeMetadata { LogicalName = "new_name", SchemaName = "New_Name" };

        Assert.IsTrue(InvokeStatic<bool>("MatchesDetailFilter", attribute, single));
        Assert.IsTrue(InvokeStatic<bool>("MatchesDetailFilter", attribute, multi));
        Assert.IsTrue(InvokeStatic<bool>("MatchesDetailFilter", attribute, noFilter));
        Assert.IsTrue(InvokeStatic<bool>("IsWordBoundaryMatch", "regardingobjectid", "regarding"));
        Assert.IsFalse(InvokeStatic<bool>("IsWordBoundaryMatch", "attachmentopencount", "to"));
        Assert.IsFalse(InvokeStatic<bool>("IsWordBoundaryMatch", null, "name"));
    }

    [TestMethod]
    public void AuxiliaryAndAttributeTypeHelpers_CoverMetadataVariants()
    {
        var outArgs = new object?[] { "revenue_base", null };
        Assert.IsTrue((bool)ToolType.GetMethod("IsAutoAuxiliaryField", BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, outArgs)!);
        Assert.AreEqual("revenue", outArgs[1]);
        outArgs = new object?[] { "custom_field", null };
        Assert.IsFalse((bool)ToolType.GetMethod("IsAutoAuxiliaryField", BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, outArgs)!);

        Assert.AreEqual("Required", InvokeStatic<string>("MapRequiredLevel", AttributeRequiredLevel.SystemRequired));
        Assert.AreEqual("Required", InvokeStatic<string>("MapRequiredLevel", AttributeRequiredLevel.ApplicationRequired));
        Assert.AreEqual("Recommended", InvokeStatic<string>("MapRequiredLevel", AttributeRequiredLevel.Recommended));
        Assert.IsNull(InvokeStatic<string>("MapRequiredLevel", (object?)null));

        Assert.AreEqual("Picklist", InvokeStatic<string>("FormatAttributeType", new PicklistAttributeMetadata()));
        Assert.AreEqual("MultiSelect", InvokeStatic<string>("FormatAttributeType", new MultiSelectPicklistAttributeMetadata()));
        Assert.AreEqual("Polymorphic", InvokeStatic<string>("FormatAttributeType", new LookupAttributeMetadata { Targets = new[] { "account", "contact" } }));
        Assert.AreEqual("Lookup", InvokeStatic<string>("FormatAttributeType", new LookupAttributeMetadata { Targets = new[] { "account" } }));
    }

    [TestMethod]
    public void BuildAttributeAndClosestMatches_CoverCompactFullAndSuggestionPaths()
    {
        var name = new StringAttributeMetadata
        {
            LogicalName = "new_name",
            SchemaName = "new_Name",
            DisplayName = new Microsoft.Xrm.Sdk.Label("Name", 1033),
            RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.ApplicationRequired),
            MaxLength = 100,
            IsValidForCreate = true,
            IsValidForUpdate = true
        };
        var compact = InvokeStatic("BuildAttribute", "account", name, "compact");
        var standard = InvokeStatic("BuildAttribute", "account", name, "standard");
        Assert.IsNotNull(compact);
        Assert.IsNotNull(standard);

        var filter = InvokeStatic("ParseDetailFilter", "name");
        var matches = (IList)InvokeStatic("FindClosestAttributeMatches",
            new AttributeMetadata[] { name }, filter, 5);
        Assert.AreEqual(1, matches.Count);
    }

    [TestMethod]
    public void BuildAttribute_CoversMetadataDetailSwitchVariants()
    {
        AttributeMetadata[] attributes =
        {
            new MemoAttributeMetadata { LogicalName = "memo", MaxLength = 200 },
            new IntegerAttributeMetadata { LogicalName = "whole", MinValue = -2, MaxValue = 9 },
            new BigIntAttributeMetadata { LogicalName = "big" },
            new DecimalAttributeMetadata { LogicalName = "decimal", MinValue = 0m, MaxValue = 99m, Precision = 2 },
            new DoubleAttributeMetadata { LogicalName = "double", MinValue = 0, MaxValue = 10, Precision = 3 },
            new MoneyAttributeMetadata { LogicalName = "money", MinValue = 0, MaxValue = 100, Precision = 2 },
            new DateTimeAttributeMetadata { LogicalName = "when" },
            new BooleanAttributeMetadata { LogicalName = "flag" },
            new LookupAttributeMetadata { LogicalName = "owner", Targets = new[] { "systemuser", "team" } },
            new ImageAttributeMetadata { LogicalName = "image" },
            new FileAttributeMetadata { LogicalName = "file", MaxSizeInKB = 512 }
        };

        foreach (var attribute in attributes)
        {
            attribute.SchemaName = attribute.LogicalName;
            Assert.IsNotNull(InvokeStatic("BuildAttribute", "account", attribute, "full"));
        }

        var optionSet = new OptionSetMetadata
        {
            IsGlobal = true,
            Name = "new_choices",
            Options =
            {
                new OptionMetadata(new Microsoft.Xrm.Sdk.Label("Two", 1033), 2) { Color = "#222222" },
                new OptionMetadata(new Microsoft.Xrm.Sdk.Label("One", 1033), 1)
            }
        };
        var picklist = new PicklistAttributeMetadata { LogicalName = "choice", OptionSet = optionSet, DefaultFormValue = -1 };
        Assert.IsNotNull(InvokeStatic("BuildAttribute", "account", picklist, "standard"));
        var multi = new MultiSelectPicklistAttributeMetadata { LogicalName = "choices", OptionSet = optionSet };
        Assert.IsNotNull(InvokeStatic("BuildAttribute", "account", multi, "full"));
    }

    private static object InvokeStatic(string methodName, params object?[] args) =>
        ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;

    private static T InvokeStatic<T>(string methodName, params object?[] args) =>
        (T)ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
}
