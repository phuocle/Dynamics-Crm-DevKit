using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Linq;
using System.Reflection;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.CrossTool;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageColumn;

[TestClass]
public class ManageColumnToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageColumnTool);

    [TestMethod]
    public void RewriteFormulaReferences_RewritesCalculatedOwnerAndTargetAttribute()
    {
        const string raw = "EntityName=\"source_entity\" Value=\"[New Entity(&quot;source_entity&quot;)]\" Attribute=\"source_total\"";

        var rewritten = FormulaReferenceHelper.RewriteFormulaReferences(
            raw, "source_entity", "target_entity", "source_total", "target_total", null);

        StringAssert.Contains(rewritten, "EntityName=\"target_entity\"");
        StringAssert.Contains(rewritten, "New Entity(&quot;target_entity&quot;)");
        StringAssert.Contains(rewritten, "Attribute=\"target_total\"");
    }

    [TestMethod]
    public void RewriteFormulaReferences_RewritesToDerivedTargetAttribute()
    {
        const string raw = "EntityName=\"source_entity\" Attribute=\"source_total\"";
        const string derivedTargetAttribute = "publisher_40a";

        var rewritten = FormulaReferenceHelper.RewriteFormulaReferences(
            raw, "source_entity", "target_entity", "source_total", derivedTargetAttribute, null);

        StringAssert.Contains(rewritten, $"Attribute=\"{derivedTargetAttribute}\"");
        Assert.IsFalse(rewritten.Contains("Attribute=\"\""));
    }

    [TestMethod]
    public void RewriteFormulaReferences_RewritesRollupRelationshipAndLookup()
    {
        const string raw = "relatedlinked_source_entity_SourceRelationship#source_lookup#child# Attribute=\"source_total\"";
        var mapping = new FormulaRelationshipMapping(
            "SourceRelationship", "TargetRelationship", "source_lookup", "target_lookup");

        var rewritten = FormulaReferenceHelper.RewriteFormulaReferences(
            raw, "source_entity", "target_entity", "source_total", "target_total", mapping);

        StringAssert.Contains(rewritten, "relatedlinked_target_entity_TargetRelationship#target_lookup#child#");
        StringAssert.Contains(rewritten, "Attribute=\"target_total\"");
    }

    // ──────────────────────────────────────────────
    // Helper: invoke private static methods via reflection
    // ──────────────────────────────────────────────

    private static (DateTimeBehavior Result, string? Error) CallResolveDateTimeBehavior(string? behavior)
    {
        var method = ToolType.GetMethod("ResolveDateTimeBehavior", BindingFlags.NonPublic | BindingFlags.Static)!;
        var args = new object?[] { behavior, null };
        var result = (DateTimeBehavior)method.Invoke(null, args)!;
        return (result, (string?)args[1]);
    }

    private static (StringFormatName Result, string? Error) CallResolveStringFormat(string? format)
    {
        var method = ToolType.GetMethod("ResolveStringFormat", BindingFlags.NonPublic | BindingFlags.Static)!;
        var args = new object?[] { format, null };
        var result = (StringFormatName)method.Invoke(null, args)!;
        return (result, (string?)args[1]);
    }

    private static (IntegerFormat Result, string? Error) CallResolveIntegerFormat(string? format)
    {
        var method = ToolType.GetMethod("ResolveIntegerFormat", BindingFlags.NonPublic | BindingFlags.Static)!;
        var args = new object?[] { format, null };
        var result = (IntegerFormat)method.Invoke(null, args)!;
        return (result, (string?)args[1]);
    }

    private static (MemoFormatName Result, string? Error) CallResolveMemoFormat(string? format)
    {
        var method = ToolType.GetMethod("ResolveMemoFormat", BindingFlags.NonPublic | BindingFlags.Static)!;
        var args = new object?[] { format, null };
        var result = (MemoFormatName)method.Invoke(null, args)!;
        return (result, (string?)args[1]);
    }

    private static AttributeRequiredLevel? CallParseRequiredLevel(string value)
    {
        var method = ToolType.GetMethod("ParseRequiredLevel", BindingFlags.NonPublic | BindingFlags.Static)!;
        return (AttributeRequiredLevel?)method.Invoke(null, new object[] { value });
    }

    // ──────────────────────────────────────────────
    // ResolveDateTimeBehavior
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ResolveDateTimeBehavior_Empty_ReturnsUserLocal()
    {
        var (result, error) = CallResolveDateTimeBehavior("");
        Assert.IsNull(error);
        Assert.AreEqual(DateTimeBehavior.UserLocal.Value, result.Value);
    }

    [TestMethod]
    public void ResolveDateTimeBehavior_Null_ReturnsUserLocal()
    {
        var (result, error) = CallResolveDateTimeBehavior(null);
        Assert.IsNull(error);
        Assert.AreEqual(DateTimeBehavior.UserLocal.Value, result.Value);
    }

    [TestMethod]
    public void ResolveDateTimeBehavior_DateOnly_ReturnsDateOnly()
    {
        var (result, error) = CallResolveDateTimeBehavior("DateOnly");
        Assert.IsNull(error);
        Assert.AreEqual(DateTimeBehavior.DateOnly.Value, result.Value);
    }

    [TestMethod]
    public void ResolveDateTimeBehavior_TimeZoneIndependent_Works()
    {
        var (result, error) = CallResolveDateTimeBehavior("TimeZoneIndependent");
        Assert.IsNull(error);
        Assert.AreEqual(DateTimeBehavior.TimeZoneIndependent.Value, result.Value);
    }

    [TestMethod]
    public void ResolveDateTimeBehavior_UserLocal_Works()
    {
        var (result, error) = CallResolveDateTimeBehavior("UserLocal");
        Assert.IsNull(error);
        Assert.AreEqual(DateTimeBehavior.UserLocal.Value, result.Value);
    }

    [TestMethod]
    public void ResolveDateTimeBehavior_CaseInsensitive_Works()
    {
        var (result, error) = CallResolveDateTimeBehavior("DATEONLY");
        Assert.IsNull(error);
        Assert.AreEqual(DateTimeBehavior.DateOnly.Value, result.Value);
    }

    [TestMethod]
    public void ResolveDateTimeBehavior_Invalid_ReturnsError()
    {
        var (_, error) = CallResolveDateTimeBehavior("InvalidBehavior");
        Assert.IsNotNull(error);
        Assert.IsTrue(error.Contains("InvalidBehavior"));
    }

    // ──────────────────────────────────────────────
    // ResolveStringFormat
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ResolveStringFormat_Empty_ReturnsText()
    {
        var (result, error) = CallResolveStringFormat("");
        Assert.IsNull(error);
        Assert.AreEqual(StringFormatName.Text.Value, result.Value);
    }

    [TestMethod]
    public void ResolveStringFormat_Email_ReturnsEmail()
    {
        var (result, error) = CallResolveStringFormat("Email");
        Assert.IsNull(error);
        Assert.AreEqual(StringFormatName.Email.Value, result.Value);
    }

    [TestMethod]
    public void ResolveStringFormat_Url_ReturnsUrl()
    {
        var (result, error) = CallResolveStringFormat("Url");
        Assert.IsNull(error);
        Assert.AreEqual(StringFormatName.Url.Value, result.Value);
    }

    [TestMethod]
    public void ResolveStringFormat_Phone_ReturnsPhone()
    {
        var (result, error) = CallResolveStringFormat("Phone");
        Assert.IsNull(error);
        Assert.AreEqual(StringFormatName.Phone.Value, result.Value);
    }

    [TestMethod]
    public void ResolveStringFormat_RichText_ReturnsRichText()
    {
        var (result, error) = CallResolveStringFormat("RichText");
        Assert.IsNull(error);
        Assert.AreEqual(StringFormatName.RichText.Value, result.Value);
    }

    [TestMethod]
    public void ResolveStringFormat_CaseInsensitive_Works()
    {
        var (result, error) = CallResolveStringFormat("EMAIL");
        Assert.IsNull(error);
        Assert.AreEqual(StringFormatName.Email.Value, result.Value);
    }

    [TestMethod]
    public void ResolveStringFormat_Invalid_ReturnsError()
    {
        var (_, error) = CallResolveStringFormat("InvalidFormat");
        Assert.IsNotNull(error);
        Assert.IsTrue(error.Contains("InvalidFormat"));
    }

    // ──────────────────────────────────────────────
    // ResolveIntegerFormat
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ResolveIntegerFormat_Empty_ReturnsNone()
    {
        var (result, error) = CallResolveIntegerFormat("");
        Assert.IsNull(error);
        Assert.AreEqual(IntegerFormat.None, result);
    }

    [TestMethod]
    public void ResolveIntegerFormat_Duration_ReturnsDuration()
    {
        var (result, error) = CallResolveIntegerFormat("Duration");
        Assert.IsNull(error);
        Assert.AreEqual(IntegerFormat.Duration, result);
    }

    [TestMethod]
    public void ResolveIntegerFormat_TimeZone_ReturnsTimeZone()
    {
        var (result, error) = CallResolveIntegerFormat("TimeZone");
        Assert.IsNull(error);
        Assert.AreEqual(IntegerFormat.TimeZone, result);
    }

    [TestMethod]
    public void ResolveIntegerFormat_Language_ReturnsLanguage()
    {
        var (result, error) = CallResolveIntegerFormat("Language");
        Assert.IsNull(error);
        Assert.AreEqual(IntegerFormat.Language, result);
    }

    [TestMethod]
    public void ResolveIntegerFormat_CaseInsensitive_Works()
    {
        var (result, error) = CallResolveIntegerFormat("DURATION");
        Assert.IsNull(error);
        Assert.AreEqual(IntegerFormat.Duration, result);
    }

    [TestMethod]
    public void ResolveIntegerFormat_Invalid_ReturnsError()
    {
        var (_, error) = CallResolveIntegerFormat("BadFormat");
        Assert.IsNotNull(error);
        Assert.IsTrue(error.Contains("BadFormat"));
    }

    // ──────────────────────────────────────────────
    // ResolveMemoFormat
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ResolveMemoFormat_Empty_ReturnsText()
    {
        var (result, error) = CallResolveMemoFormat("");
        Assert.IsNull(error);
        Assert.AreEqual(MemoFormatName.Text.Value, result.Value);
    }

    [TestMethod]
    public void ResolveMemoFormat_RichText_ReturnsRichText()
    {
        var (result, error) = CallResolveMemoFormat("RichText");
        Assert.IsNull(error);
        Assert.AreEqual(MemoFormatName.RichText.Value, result.Value);
    }

    [TestMethod]
    public void ResolveMemoFormat_Text_ReturnsText()
    {
        var (result, error) = CallResolveMemoFormat("Text");
        Assert.IsNull(error);
        Assert.AreEqual(MemoFormatName.Text.Value, result.Value);
    }

    [TestMethod]
    public void ResolveMemoFormat_CaseInsensitive_Works()
    {
        var (result, error) = CallResolveMemoFormat("RICHTEXT");
        Assert.IsNull(error);
        Assert.AreEqual(MemoFormatName.RichText.Value, result.Value);
    }

    [TestMethod]
    public void ResolveMemoFormat_Invalid_ReturnsError()
    {
        var (_, error) = CallResolveMemoFormat("BadMemoFormat");
        Assert.IsNotNull(error);
        Assert.IsTrue(error.Contains("BadMemoFormat"));
    }

    // ──────────────────────────────────────────────
    // ParseRequiredLevel
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ParseRequiredLevel_None_ReturnsNone()
    {
        Assert.AreEqual(AttributeRequiredLevel.None, CallParseRequiredLevel("None"));
    }

    [TestMethod]
    public void ParseRequiredLevel_Required_ReturnsApplicationRequired()
    {
        Assert.AreEqual(AttributeRequiredLevel.ApplicationRequired, CallParseRequiredLevel("Required"));
    }

    [TestMethod]
    public void ParseRequiredLevel_Recommended_ReturnsRecommended()
    {
        Assert.AreEqual(AttributeRequiredLevel.Recommended, CallParseRequiredLevel("Recommended"));
    }

    [TestMethod]
    public void ParseRequiredLevel_Empty_ReturnsNone()
    {
        Assert.AreEqual(AttributeRequiredLevel.None, CallParseRequiredLevel(""));
    }

    [TestMethod]
    public void ParseRequiredLevel_Invalid_ReturnsNull()
    {
        Assert.IsNull(CallParseRequiredLevel("InvalidLevel"));
    }

    // ──────────────────────────────────────────────
    // Input validation via public method
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ManageColumn_EmptyEntityName_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageColumnTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_column(entity_name: "", logical_name: "new_test", attribute_type: "string", display_name: "Test");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("entity_name is required"));
    }

    [TestMethod]
    public void ManageColumn_InvalidAttributeType_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageColumnTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_column(entity_name: "account", logical_name: "new_test", attribute_type: "invalidtype", display_name: "Test");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("Unknown attribute_type"));
    }

    [TestMethod]
    public void ManageColumn_InvalidRequiredLevel_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageColumnTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_column(entity_name: "account", logical_name: "new_test", attribute_type: "string", display_name: "Test", required_level: "bogus");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("Invalid required_level"));
    }

    [TestMethod]
    public void ManageColumn_InvalidStringFormat_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageColumnTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_column(entity_name: "account", logical_name: "new_test", attribute_type: "string", display_name: "Test", format: "BadFormat");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("[Error]"));
        Assert.IsTrue(text.Contains("Invalid format"));
    }

    [TestMethod]
    public void ManageColumn_InvalidIntegerFormat_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageColumnTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_column(entity_name: "account", logical_name: "new_test", attribute_type: "integer", display_name: "Test", format: "BadFormat");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("[Error]"));
        Assert.IsTrue(text.Contains("Invalid format for integer"));
    }

    [TestMethod]
    public void ManageColumn_InvalidMemoFormat_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageColumnTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_column(entity_name: "account", logical_name: "new_test", attribute_type: "memo", display_name: "Test", format: "BadFormat");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("[Error]"));
        Assert.IsTrue(text.Contains("Invalid format for memo"));
    }

    [TestMethod]
    public void ManageColumn_InvalidDateTimeBehavior_ReturnsError()
    {
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageColumnTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_column(entity_name: "account", logical_name: "new_test", attribute_type: "datetime", display_name: "Test", behavior: "BadBehavior");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        Assert.IsTrue(text.Contains("[Error]"));
        Assert.IsTrue(text.Contains("Invalid behavior"));
    }

    // ──────────────────────────────────────────────
    // Description accuracy
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ManageColumn_DescriptionMentionsMoneyPrecisionCap()
    {
        var method = ToolType.GetMethod("manage_column")!;
        var precisionParam = method.GetParameters().First(p => p.Name == "precision");
        var desc = precisionParam.GetCustomAttribute<System.ComponentModel.DescriptionAttribute>()?.Description ?? "";
        Assert.IsTrue(desc.Contains("money max is 4"), "Precision description should mention money max is 4");
    }

    [TestMethod]
    public void ManageColumn_HasAllExpectedParameters()
    {
        var method = ToolType.GetMethod("manage_column")!;
        var paramNames = method.GetParameters().Select(p => p.Name).ToArray();
        CollectionAssert.Contains(paramNames, "entity_name");
        CollectionAssert.Contains(paramNames, "logical_name");
        CollectionAssert.Contains(paramNames, "attribute_type");
        CollectionAssert.Contains(paramNames, "display_name");
        CollectionAssert.Contains(paramNames, "description");
        CollectionAssert.Contains(paramNames, "required_level");
        CollectionAssert.Contains(paramNames, "max_length");
        CollectionAssert.Contains(paramNames, "min_value");
        CollectionAssert.Contains(paramNames, "max_value");
        CollectionAssert.Contains(paramNames, "precision");
        CollectionAssert.Contains(paramNames, "format");
        CollectionAssert.Contains(paramNames, "behavior");
        CollectionAssert.Contains(paramNames, "precision_source");
        CollectionAssert.Contains(paramNames, "options");
        CollectionAssert.Contains(paramNames, "global_optionset_name");
        CollectionAssert.Contains(paramNames, "lookup_target");
        CollectionAssert.Contains(paramNames, "lookup_relationship_name");
        CollectionAssert.Contains(paramNames, "true_label");
        CollectionAssert.Contains(paramNames, "false_label");
        CollectionAssert.Contains(paramNames, "add_options");
        CollectionAssert.Contains(paramNames, "update_options");
        CollectionAssert.Contains(paramNames, "delete_options");
        CollectionAssert.Contains(paramNames, "is_audit_enabled");
        CollectionAssert.Contains(paramNames, "is_valid_for_advanced_find");
        CollectionAssert.Contains(paramNames, "solution_name");
        CollectionAssert.Contains(paramNames, "schema_name");
        CollectionAssert.Contains(paramNames, "formula_definition");
        CollectionAssert.Contains(paramNames, "formula_source_type");
        CollectionAssert.DoesNotContain(paramNames, "source_entity_name");
        CollectionAssert.DoesNotContain(paramNames, "source_attribute_name");
        // 'state' is inside the add_options JSON payload, not a top-level parameter
        CollectionAssert.DoesNotContain(paramNames, "state");
    }

    // ──────────────────────────────────────────────
    // StatusCode (statuscode) support
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ManageColumn_StatusCode_NoOptionParams_ReturnsNoChangesError()
    {
        // Pass logical_name="statuscode" with no option params and no other changes.
        // The tool resolves entity_name before reaching Dataverse (null serviceClient
        // causes the resolve to fail with entity_name error), so we verify early-exit.
        var tool = new DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageColumnTool(null!, new DynamicsCrm.DevKit.Cli.Mcp.McpDryRunOptions(), DryRunTestHelpers.BlockedContext());
        var result = tool.manage_column(entity_name: "", logical_name: "statuscode");
        Assert.IsTrue(result.IsError);
        var text = ((ModelContextProtocol.Protocol.TextContentBlock)result.Content[0]).Text;
        // entity_name is the first guard — empty entity_name is caught before any Dataverse call
        Assert.IsTrue(text.Contains("entity_name is required"));
    }

    [TestMethod]
    public void ManageColumn_StatusCode_DescriptionMentionsStatecode()
    {
        var method = ToolType.GetMethod("manage_column")!;
        var desc = method.GetCustomAttribute<System.ComponentModel.DescriptionAttribute>()?.Description ?? "";
        StringAssert.Contains(desc, "statuscode");
        StringAssert.Contains(desc, "state");
        StringAssert.Contains(desc, "statecode");
    }

    [TestMethod]
    public void ManageColumn_AddOptions_DescriptionMentionsStateField()
    {
        var method = ToolType.GetMethod("manage_column")!;
        var addOptionsParam = method.GetParameters().First(p => p.Name == "add_options");
        var desc = addOptionsParam.GetCustomAttribute<System.ComponentModel.DescriptionAttribute>()?.Description ?? "";
        StringAssert.Contains(desc, "state");
        StringAssert.Contains(desc, "StatusType");
    }
}
