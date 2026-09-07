using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

/// <summary>
/// Builders for EntityMetadata/AttributeMetadata test doubles. Metadata
/// properties are sealed, so every setter goes through reflection — the same
/// technique the existing suites (e.g. GetTablesToolTests) use, extracted
/// here so tool tests can assemble realistic metadata in one call.
/// </summary>
public static class TestMetadata
{
    public static EntityMetadata Entity(string logicalName, string? displayName = null, params AttributeMetadata[] attributes)
    {
        var meta = new EntityMetadata();
        Set(meta, nameof(EntityMetadata.LogicalName), logicalName);
        Set(meta, nameof(EntityMetadata.SchemaName), ToPascal(logicalName));
        Set(meta, nameof(EntityMetadata.PrimaryIdAttribute), $"{logicalName}id");
        Set(meta, nameof(EntityMetadata.PrimaryNameAttribute), "name");
        Set(meta, nameof(EntityMetadata.EntitySetName), logicalName + "s");
        Set(meta, nameof(EntityMetadata.LogicalCollectionName), logicalName + "s");
        Set(meta, nameof(EntityMetadata.ObjectTypeCode), (int?)10000);
        Set(meta, nameof(EntityMetadata.OwnershipType), (OwnershipTypes?)OwnershipTypes.UserOwned);
        Set(meta, nameof(EntityMetadata.IsActivity), (bool?)false);
        Set(meta, nameof(EntityMetadata.IsCustomEntity), (bool?)true);
        Set(meta, nameof(EntityMetadata.Attributes), attributes);
        Set(meta, nameof(EntityMetadata.Keys), Array.Empty<EntityKeyMetadata>());
        Set(meta, nameof(EntityMetadata.OneToManyRelationships), Array.Empty<OneToManyRelationshipMetadata>());
        Set(meta, nameof(EntityMetadata.ManyToOneRelationships), Array.Empty<OneToManyRelationshipMetadata>());
        Set(meta, nameof(EntityMetadata.ManyToManyRelationships), Array.Empty<ManyToManyRelationshipMetadata>());
        if (displayName != null)
        {
            Set(meta, nameof(EntityMetadata.DisplayName), Lbl(displayName));
            Set(meta, nameof(EntityMetadata.DisplayCollectionName), Lbl(displayName + "s"));
        }
        return meta;
    }

    public static StringAttributeMetadata String(string logicalName, string? displayName = null, int maxLength = 200) =>
        Finish(new StringAttributeMetadata { MaxLength = maxLength },
            logicalName, displayName, AttributeTypeCode.String);

    public static MemoAttributeMetadata Memo(string logicalName, string? displayName = null) =>
        Finish(new MemoAttributeMetadata(), logicalName, displayName, AttributeTypeCode.Memo);

    public static IntegerAttributeMetadata Integer(string logicalName, string? displayName = null) =>
        Finish(new IntegerAttributeMetadata(), logicalName, displayName, AttributeTypeCode.Integer);

    public static BigIntAttributeMetadata BigInt(string logicalName, string? displayName = null) =>
        Finish(new BigIntAttributeMetadata(), logicalName, displayName, AttributeTypeCode.BigInt);

    public static DecimalAttributeMetadata Decimal(string logicalName, string? displayName = null) =>
        Finish(new DecimalAttributeMetadata { Precision = 2 }, logicalName, displayName, AttributeTypeCode.Decimal);

    public static DoubleAttributeMetadata Double(string logicalName, string? displayName = null) =>
        Finish(new DoubleAttributeMetadata { Precision = 2 }, logicalName, displayName, AttributeTypeCode.Double);

    public static MoneyAttributeMetadata Money(string logicalName, string? displayName = null) =>
        Finish(new MoneyAttributeMetadata { Precision = 2 }, logicalName, displayName, AttributeTypeCode.Money);

    public static BooleanAttributeMetadata Boolean(string logicalName, string? displayName = null) =>
        Finish(new BooleanAttributeMetadata(), logicalName, displayName, AttributeTypeCode.Boolean);

    public static DateTimeAttributeMetadata DateTime(string logicalName, string? displayName = null) =>
        Finish(new DateTimeAttributeMetadata { Format = DateTimeFormat.DateAndTime }, logicalName, displayName, AttributeTypeCode.DateTime);

    public static DateTimeAttributeMetadata DateOnly(string logicalName, string? displayName = null) =>
        Finish(new DateTimeAttributeMetadata { Format = DateTimeFormat.DateOnly }, logicalName, displayName, AttributeTypeCode.DateTime);

    public static PicklistAttributeMetadata Picklist(string logicalName, string? displayName, params (int value, string label)[] options) =>
        Finish(new PicklistAttributeMetadata { OptionSet = new OptionSetMetadata(Options(options)) },
            logicalName, displayName, AttributeTypeCode.Picklist);

    public static MultiSelectPicklistAttributeMetadata MultiSelect(string logicalName, string? displayName, params (int value, string label)[] options) =>
        Finish(new MultiSelectPicklistAttributeMetadata { OptionSet = new OptionSetMetadata(Options(options)) },
            logicalName, displayName, AttributeTypeCode.Picklist);

    public static LookupAttributeMetadata Lookup(string logicalName, string? displayName, params string[] targets) =>
        Finish(new LookupAttributeMetadata { Targets = targets }, logicalName, displayName, AttributeTypeCode.Lookup);

    /// <summary>Override the attribute type code (e.g. State/Status/PartyList on picklist/lookup doubles).</summary>
    public static T WithType<T>(T attr, AttributeTypeCode code) where T : AttributeMetadata
    {
        Set(attr, nameof(AttributeMetadata.AttributeType), (AttributeTypeCode?)code);
        return attr;
    }

    /// <summary>Attach a Description label (priority 1 for tool comments).</summary>
    public static T WithDescription<T>(T attr, string description) where T : AttributeMetadata
    {
        Set(attr, nameof(AttributeMetadata.Description), Lbl(description));
        return attr;
    }

    private static OptionMetadataCollection Options((int value, string label)[] options)
    {
        var collection = new OptionMetadataCollection();
        foreach (var (value, label) in options)
        {
            collection.Add(new OptionMetadata
            {
                Value = value,
                Label = Lbl(label)
            });
        }
        return collection;
    }

    private static T Finish<T>(T attr, string logicalName, string? displayName, AttributeTypeCode type) where T : AttributeMetadata
    {
        Set(attr, nameof(AttributeMetadata.LogicalName), logicalName);
        Set(attr, nameof(AttributeMetadata.SchemaName), ToPascal(logicalName));
        Set(attr, nameof(AttributeMetadata.AttributeType), (AttributeTypeCode?)type);
        Set(attr, nameof(AttributeMetadata.IsLogical), (bool?)false);
        Set(attr, nameof(AttributeMetadata.IsValidForCreate), (bool?)true);
        Set(attr, nameof(AttributeMetadata.IsValidForUpdate), (bool?)true);
        if (displayName != null)
            Set(attr, nameof(AttributeMetadata.DisplayName), Lbl(displayName));
        Set(attr, nameof(AttributeMetadata.MetadataId), Guid.NewGuid());
        return attr;
    }

    /// <summary>
    /// A Label whose UserLocalizedLabel is actually populated — the
    /// Label(string, int) constructor only fills LocalizedLabels, leaving
    /// UserLocalizedLabel null, which breaks every display-name resolver.
    /// </summary>
    public static Label Lbl(string text)
    {
        var label = new Label();
        var localized = new LocalizedLabel(text, 1033);
        label.LocalizedLabels.Add(localized);
        label.UserLocalizedLabel = localized;
        return label;
    }

    private static void Set<T>(T target, string property, object? value)
    {
        typeof(T).GetProperty(property, BindingFlags.Public | BindingFlags.Instance | BindingFlags.FlattenHierarchy)!
            .SetValue(target, value);
    }

    private static string ToPascal(string logicalName) =>
        char.ToUpperInvariant(logicalName[0]) + logicalName[1..].Replace("_", "");
}
