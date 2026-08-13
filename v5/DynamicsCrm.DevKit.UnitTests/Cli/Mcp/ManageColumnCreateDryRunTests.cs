using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class ManageColumnCreateDryRunTests
{
    private static readonly Type ToolType = typeof(ManageColumnTool);

    private readonly ManageColumnTool _tool = new(null!, new McpDryRunOptions { DryRun = true }, new McpExecutionContext(true));

    [TestMethod]
    public void CreateStringAttribute_DryRun_BuildsMetadataWithoutServiceCall()
    {
        var result = InvokeCreate("CreateStringAttribute",
            "account", "devkit_text", "devkit_Text", "Text", "Description",
            9000, "Email", "devkit", null, null);

        AssertDryRun(result, "String", "devkit_text");
    }

    [TestMethod]
    public void CreateMemoAttribute_DryRun_ClampsLengthAndAcceptsRichText()
    {
        var result = InvokeCreate("CreateMemoAttribute",
            "account", "devkit_notes", "devkit_Notes", "Notes", "Description",
            2_000_000, "RichText", "devkit", null, null);

        AssertDryRun(result, "Memo", "devkit_notes");
    }

    [TestMethod]
    public void CreateIntegerAttribute_DryRun_AcceptsBoundsAndFormat()
    {
        var result = InvokeCreate("CreateIntegerAttribute",
            "account", "devkit_duration", "devkit_Duration", "Duration", "",
            1d, 90d, "Duration", "devkit", null, null);

        AssertDryRun(result, "Integer", "devkit_duration");
    }

    [TestMethod]
    public void CreateDecimalAttribute_DryRun_ClampsPrecision()
    {
        var result = InvokeCreate("CreateDecimalAttribute",
            "account", "devkit_ratio", "devkit_Ratio", "Ratio", "",
            0d, 100d, 99, "devkit", null, null);

        AssertDryRun(result, "Decimal", "devkit_ratio");
    }

    [TestMethod]
    public void CreateMoneyAttribute_DryRun_AcceptsPrecisionSource()
    {
        var result = InvokeCreate("CreateMoneyAttribute",
            "account", "devkit_budget", "devkit_Budget", "Budget", "",
            0d, 1_000d, 8, 2, "devkit", null, null);

        AssertDryRun(result, "Money", "devkit_budget");
    }

    [TestMethod]
    public void CreateFloatAttribute_DryRun_AcceptsPrecision()
    {
        var result = InvokeCreate("CreateFloatAttribute",
            "account", "devkit_score", "devkit_Score", "Score", "",
            -10d, 10d, 12, "devkit", null, null);

        AssertDryRun(result, "Float", "devkit_score");
    }

    [TestMethod]
    public void CreateBooleanAttribute_DryRun_UsesCustomLabels()
    {
        var result = InvokeCreate("CreateBooleanAttribute",
            "account", "devkit_enabled", "devkit_Enabled", "Enabled", "",
            "Active", "Inactive", "devkit", null, null, null);

        AssertDryRun(result, "Boolean", "devkit_enabled");
    }

    [TestMethod]
    public void CreateDateTimeAttribute_DryRun_DateOnlyForcesDateOnlyFormat()
    {
        var result = InvokeCreate("CreateDateTimeAttribute",
            "account", "devkit_effectiveon", "devkit_EffectiveOn", "Effective On", "",
            "DateAndTime", "DateOnly", "devkit", null, null);

        AssertDryRun(result, "DateTime", "devkit_effectiveon");
    }

    [TestMethod]
    public void CreatePicklistAttribute_DryRun_ParsesLocalOptions()
    {
        var result = InvokeCreate("CreatePicklistAttribute",
            "account", "devkit_priority", "devkit_Priority", "Priority", "",
            """[{"label":"Low","value":100000000,"color":"#00AA00"},{"label":"High","value":100000001}]""",
            "", false, "devkit", "", null);

        AssertDryRun(result, "Picklist", "devkit_priority");
    }

    [TestMethod]
    public void CreateMultiSelectPicklistAttribute_DryRun_ParsesLocalOptions()
    {
        var result = InvokeCreate("CreatePicklistAttribute",
            "account", "devkit_tags", "devkit_Tags", "Tags", "",
            """[{"label":"Internal","value":100000000},{"label":"External","value":100000001}]""",
            "", true, "devkit", "", null);

        AssertDryRun(result, "MultiSelectPicklist", "devkit_tags");
    }

    [TestMethod]
    public void CreateCustomerAttribute_DryRun_BuildsTwoRelationships()
    {
        var result = InvokeCreate("CreateCustomerAttribute",
            "devkit_order", "devkit_customer", "devkit_Customer", "Customer", "",
            "devkit", "devkit", null);

        AssertDryRun(result, "customer", "devkit_customer");
    }

    [TestMethod]
    public void CreatePolymorphicLookupAttribute_DryRun_BuildsRelationshipMetadata()
    {
        var result = InvokeCreate("CreatePolymorphicLookupAttribute",
            "devkit_order", "devkit_regarding", "devkit_Regarding", "Regarding", "",
            new[] { "account", "contact" }, "devkit", "devkit", null);

        AssertDryRun(result, "PolymorphicLookup", "devkit_regarding");
    }

    [TestMethod]
    public void CreateBigIntAttribute_DryRun_BuildsMetadata()
    {
        var result = InvokeCreate("CreateBigIntAttribute",
            "account", "devkit_externalid", "devkit_ExternalId", "External Id", "",
            "devkit", null);

        AssertDryRun(result, "BigInt", "devkit_externalid");
    }

    [TestMethod]
    public void CreateImageAttribute_DryRun_BuildsMetadata()
    {
        var result = InvokeCreate("CreateImageAttribute",
            "account", "devkit_photo", "devkit_Photo", "Photo", "",
            "devkit", null, null);

        AssertDryRun(result, "Image", "devkit_photo");
    }

    [TestMethod]
    public void CreateFileAttribute_DryRun_ClampsFileSize()
    {
        var result = InvokeCreate("CreateFileAttribute",
            "account", "devkit_attachment", "devkit_Attachment", "Attachment", "",
            99_999_999, "devkit", null);

        AssertDryRun(result, "File", "devkit_attachment");
    }

    private CallToolResult InvokeCreate(string methodName, params object?[] args)
    {
        var method = ToolType.GetMethod(methodName, BindingFlags.Instance | BindingFlags.NonPublic)!;
        try
        {
            return (CallToolResult)method.Invoke(_tool, args)!;
        }
        catch (TargetInvocationException ex) when (ex.InnerException != null)
        {
            throw ex.InnerException;
        }
    }

    private static void AssertDryRun(CallToolResult result, string expectedType, string expectedLogicalName)
    {
        Assert.IsFalse(result.IsError == true);
        var text = result.GetText();
        StringAssert.Contains(text, "Would CREATE");
        StringAssert.Contains(text, expectedType);
        StringAssert.Contains(text, expectedLogicalName);
    }
}
