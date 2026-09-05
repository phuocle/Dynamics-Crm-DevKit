using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageColumn;

[TestClass]
public sealed class ManageColumnBranchCoverageTests
{
    private static readonly Type ToolType = typeof(ManageColumnTool);
    private static readonly BindingFlags PrivateInstance = BindingFlags.Instance | BindingFlags.NonPublic;

    [TestMethod]
    public void ManageColumn_EarlyValidation_CoversTypeFormatAndBehaviorErrors()
    {
        var tool = new ManageColumnTool(null!, new McpDryRunOptions { DryRun = true }, new McpExecutionContext(true), null!);

        AssertError(tool.manage_column(entity_name: "account", attribute_type: "unsupported"), "Unknown attribute_type");
        AssertError(tool.manage_column(entity_name: "account", required_level: "Mandatory"), "Invalid required_level");
        AssertError(tool.manage_column(entity_name: "account", attribute_type: "string", format: "NoSuchFormat"), "Invalid format");
        AssertError(tool.manage_column(entity_name: "account", attribute_type: "integer", format: "NoSuchFormat"), "Invalid format");
        AssertError(tool.manage_column(entity_name: "account", attribute_type: "memo", format: "NoSuchFormat"), "Invalid format");
        AssertError(tool.manage_column(entity_name: "account", attribute_type: "datetime", behavior: "NoSuchBehavior"), "Invalid behavior");
    }

    [TestMethod]
    public void ApplyTypeSpecificUpdates_CoversAllMetadataBranchesAndClamps()
    {
        var tool = new ManageColumnTool(null!, new McpDryRunOptions { DryRun = true }, new McpExecutionContext(true), null!);

        var stringMeta = new StringAttributeMetadata { MaxLength = 20, FormatName = StringFormatName.Text };
        var stringResult = Apply(tool, stringMeta, 5000, null, null, -1, "Email");
        Assert.IsNull(stringResult);
        Assert.AreEqual(4000, stringMeta.MaxLength);
        Assert.AreEqual(StringFormatName.Email.Value, stringMeta.FormatName.Value);

        var memoMeta = new MemoAttributeMetadata { MaxLength = 20 };
        Assert.IsNull(Apply(tool, memoMeta, 2_000_000, null, null, -1, ""));
        Assert.AreEqual(1_048_576, memoMeta.MaxLength);

        var integerMeta = new IntegerAttributeMetadata { MinValue = 0, MaxValue = 1 };
        Assert.IsNull(Apply(tool, integerMeta, 0, -5, 50, -1, ""));
        Assert.AreEqual(-5, integerMeta.MinValue);
        Assert.AreEqual(50, integerMeta.MaxValue);

        var decimalMeta = new DecimalAttributeMetadata { MinValue = 0, MaxValue = 1, Precision = 2 };
        Assert.IsNull(Apply(tool, decimalMeta, 0, -1.5, 2.5, 99, ""));
        Assert.AreEqual(10, decimalMeta.Precision);

        var moneyMeta = new MoneyAttributeMetadata { MinValue = 0, MaxValue = 1, Precision = 2, PrecisionSource = 0 };
        Assert.IsNull(Apply(tool, moneyMeta, 0, -2.5, 3.5, 99, "", precisionSource: 2));
        Assert.AreEqual(4, moneyMeta.Precision);
        Assert.AreEqual(2, moneyMeta.PrecisionSource);

        var doubleMeta = new DoubleAttributeMetadata { MinValue = 0, MaxValue = 1, Precision = 2 };
        Assert.IsNull(Apply(tool, doubleMeta, 0, -3.5, 4.5, 99, ""));
        Assert.AreEqual(10, doubleMeta.Precision);

        var booleanMeta = new BooleanAttributeMetadata
        {
            OptionSet = new BooleanOptionSetMetadata
            {
                TrueOption = new OptionMetadata(MakeLabel("Yes"), 1),
                FalseOption = new OptionMetadata(MakeLabel("No"), 0)
            }
        };
        Assert.IsNull(Apply(tool, booleanMeta, 0, null, null, -1, "", trueLabel: "Enabled", falseLabel: "Disabled"));
        Assert.AreEqual("Enabled", booleanMeta.OptionSet.TrueOption.Label.LocalizedLabels[0].Label);
        Assert.AreEqual("Disabled", booleanMeta.OptionSet.FalseOption.Label.LocalizedLabels[0].Label);

        var dateTimeMeta = new DateTimeAttributeMetadata
        {
            DateTimeBehavior = DateTimeBehavior.UserLocal,
            Format = DateTimeFormat.DateAndTime
        };
        var dateTimeResult = Apply(tool, dateTimeMeta, 0, null, null, -1, "DateAndTime", behavior: "DateOnly");
        Assert.IsNull(dateTimeResult);
        Assert.AreEqual(DateTimeBehavior.DateOnly.Value, dateTimeMeta.DateTimeBehavior.Value);
        Assert.AreEqual(DateTimeFormat.DateOnly, dateTimeMeta.Format);

        var invalidBehavior = Apply(tool, new DateTimeAttributeMetadata(), 0, null, null, -1, "", behavior: "invalid");
        StringAssert.Contains(invalidBehavior, "Invalid behavior");

        var imageMeta = new ImageAttributeMetadata { CanStoreFullImage = false };
        Assert.IsNull(Apply(tool, imageMeta, 0, null, null, -1, "", canStoreFullImage: true));
        Assert.IsTrue(imageMeta.CanStoreFullImage == true);
    }

    [TestMethod]
    public void OptionManagement_InvalidAndIgnoredPaths_DoNotCallDataverse()
    {
        var tool = new ManageColumnTool(null!, new McpDryRunOptions { DryRun = true }, new McpExecutionContext(true), null!);

        var warning = Invoke<List<string>>(tool, "ManagePicklistOptions", "account", "name",
            new StringAttributeMetadata(), "[{}]", "", "");
        StringAssert.Contains(warning.Single(), "Option management ignored");

        var statusIgnored = Invoke<List<string>>(tool, "ManagePicklistOptions", "account", "statuscode",
            new StatusAttributeMetadata(), "[{}]", "", "");
        Assert.AreEqual(0, statusIgnored.Count);

        var picklist = new PicklistAttributeMetadata { OptionSet = new OptionSetMetadata() };
        var picklistErrors = Invoke<List<string>>(tool, "ManagePicklistOptions", "account", "choice", picklist,
            "{bad", "{bad", "{bad");
        Assert.AreEqual(3, picklistErrors.Count);
        Assert.IsTrue(picklistErrors.All(e => e.StartsWith("[Error]")));

        var statusErrors = Invoke<List<string>>(tool, "ManageStatusCodeOptions", "account", "statuscode",
            new StatusAttributeMetadata(), "{bad", "{bad", "{bad");
        Assert.AreEqual(3, statusErrors.Count);
        Assert.IsTrue(statusErrors.All(e => e.StartsWith("[Error]")));

        var nonStatus = Invoke<List<string>>(tool, "ManageStatusCodeOptions", "account", "name",
            new StringAttributeMetadata(), "[{}]", "[{}]", "[]");
        Assert.AreEqual(0, nonStatus.Count);
    }

    [TestMethod]
    public void LookupAndRollupHelpers_CoverValidationWithoutServiceCalls()
    {
        var tool = new ManageColumnTool(null!, new McpDryRunOptions { DryRun = true }, new McpExecutionContext(true), null!);
        var lookupError = Invoke<CallToolResult>(tool, "CreateLookupAttribute", "account", "devkit_contact", "devkit_Contact",
            "Contact", "", "", "", "", "devkit", (object?)null);
        AssertError(lookupError, "lookup_target is required");

        var mapping = Invoke<object>(tool, "TryResolveRollupRelationshipMapping",
            new object?[] { "not-a-rollup", "account", "contact", null });
        StringAssert.Contains(mapping.ToString(), "Could not find the Rollup relationship reference");

        var previewMethod = ToolType.GetMethods(PrivateInstance)
            .Single(method => method.Name == "DryRunCreatePreview" && method.GetParameters().Length == 7 &&
                method.GetParameters()[3].ParameterType == typeof(AttributeMetadata));
        var preview = (CallToolResult)previewMethod.Invoke(tool, new object?[]
        {
            "account", "devkit_name", "devkit_Name", new StringAttributeMetadata(), "Name",
            AttributeRequiredLevel.None, "devkit"
        })!;
        StringAssert.Contains(Text(preview), "Would CREATE String column");
    }

    private static string Apply(ManageColumnTool tool, AttributeMetadata metadata, int maxLength,
        double? minValue, double? maxValue, int precision, string format,
        string trueLabel = "", string falseLabel = "", string behavior = "", int precisionSource = -1,
        bool? canStoreFullImage = null)
    {
        var changes = new List<string>();
        var structured = new Dictionary<string, UpdateAttributeChange>();
        return Invoke<string>(tool, "ApplyTypeSpecificUpdates", metadata, maxLength, minValue, maxValue, precision,
            format, trueLabel, falseLabel, behavior, precisionSource, changes, structured, canStoreFullImage);
    }

    private static void AssertError(CallToolResult result, string expected)
    {
        Assert.IsTrue(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), expected);
    }

    private static string Text(CallToolResult result) =>
        result.Content?.FirstOrDefault() is TextContentBlock block ? block.Text ?? "" : "";

    private static Label MakeLabel(string text)
    {
        var label = new Label();
        label.UserLocalizedLabel = new LocalizedLabel(text, 1033);
        return label;
    }

    private static T Invoke<T>(object target, string methodName, params object?[] args)
    {
        var method = target.GetType().GetMethod(methodName, PrivateInstance)!;
        try
        {
            return (T)method.Invoke(target, args)!;
        }
        catch (TargetInvocationException ex) when (ex.InnerException != null)
        {
            throw ex.InnerException;
        }
    }
}
