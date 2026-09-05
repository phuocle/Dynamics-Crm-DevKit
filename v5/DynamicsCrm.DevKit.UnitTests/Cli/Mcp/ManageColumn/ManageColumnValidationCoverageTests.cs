using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using System;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageColumn;

[TestClass]
public sealed class ManageColumnValidationCoverageTests
{
    private readonly ManageColumnTool _tool = new(null!, new McpDryRunOptions { DryRun = true }, new McpExecutionContext(true), null!);

    [TestMethod]
    public void Constructor_RequiresOptionsAndContext()
    {
        Assert.Throws<ArgumentNullException>(() => new ManageColumnTool(null!, null!, new McpExecutionContext(true), null!));
        Assert.Throws<ArgumentNullException>(() => new ManageColumnTool(null!, new McpDryRunOptions(), null!, null!));
    }

    [TestMethod]
    public void ManageColumn_RejectsAllEarlyInvalidInputsWithoutDataverse()
    {
        AssertError(_tool.manage_column(), "entity_name is required");
        AssertError(_tool.manage_column("account", attribute_type: "unsupported"), "Unknown attribute_type");
        AssertError(_tool.manage_column("account", required_level: "sometimes"), "Invalid required_level");
        AssertError(_tool.manage_column("account", attribute_type: "string", format: "xml"), "Invalid format");
        AssertError(_tool.manage_column("account", attribute_type: "integer", format: "currency"), "Invalid format");
        AssertError(_tool.manage_column("account", attribute_type: "memo", format: "html"), "Invalid format");
        AssertError(_tool.manage_column("account", attribute_type: "datetime", behavior: "localish"), "Invalid behavior");
    }

    [TestMethod]
    public void DateTimeBehaviorResolver_MapsKnownAndUnknownValues()
    {
        var type = typeof(ManageColumnTool);
        var method = type.GetMethod("ResolveDateTimeBehavior", BindingFlags.NonPublic | BindingFlags.Static)!;
        foreach (var input in new[] { "UserLocal", "DateOnly", "TimeZoneIndependent" })
        {
            var args = new object?[] { input, null };
            Assert.IsNotNull(method.Invoke(null, args));
            Assert.IsNull(args[1]);
        }

        var invalid = new object?[] { "invalid", null };
        Assert.IsNotNull(method.Invoke(null, invalid));
        StringAssert.Contains((string)invalid[1]!, "Invalid behavior");
    }

    [TestMethod]
    public void CreateMethods_RejectInvalidFormatsBeforeAnyServiceOperation()
    {
        AssertError(Invoke("CreateStringAttribute", "account", "devkit_name", "devkit_Name", "Name", "", 100, "bad", "devkit", null, null), "Invalid format");
        AssertError(Invoke("CreateMemoAttribute", "account", "devkit_notes", "devkit_Notes", "Notes", "", 100, "bad", "devkit", null, null), "Invalid format");
        AssertError(Invoke("CreateIntegerAttribute", "account", "devkit_duration", "devkit_Duration", "Duration", "", null, null, "bad", "devkit", null, null), "Invalid format");
    }

    [TestMethod]
    public void UpdateExistingAttribute_DryRunPlansGenericFlagsAndTypeSpecificChanges()
    {
        var metadata = new StringAttributeMetadata
        {
            LogicalName = "devkit_name",
            DisplayName = new Label("Old name", 1033),
            Description = new Label("Old description", 1033),
            MaxLength = 10,
            FormatName = StringFormatName.Text,
            RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.None),
            IsAuditEnabled = new BooleanManagedProperty(false),
            IsValidForAdvancedFind = new BooleanManagedProperty(false),
            IsSecured = false,
            IsSortableEnabled = new BooleanManagedProperty(false)
        };

        var result = Invoke("UpdateExistingAttribute", "account", "devkit_name", metadata,
            "New name", "New description", "Required", 5000, null, null, -1, "Email", "", "",
            "", "", "", true, true, true, true, "", -1, "", null);

        Assert.IsFalse(result.IsError == true);
        var text = result.Content!.OfType<TextContentBlock>().Single().Text!;
        StringAssert.Contains(text, "Would UPDATE column 'account.devkit_name'");
        StringAssert.Contains(text, "DisplayName");
        StringAssert.Contains(text, "RequiredLevel");
        StringAssert.Contains(text, "MaxLength");
        StringAssert.Contains(text, "Format");
        Assert.AreEqual(4000, metadata.MaxLength);
        Assert.AreEqual(StringFormatName.Email.Value, metadata.FormatName.Value);
    }

    [TestMethod]
    public void UpdateExistingAttribute_DryRunPlansPicklistAndBooleanDefaults()
    {
        var picklist = new PicklistAttributeMetadata { LogicalName = "devkit_choice", DefaultFormValue = 1 };
        var picklistResult = Invoke("UpdateExistingAttribute", "account", "devkit_choice", picklist,
            "", "", "", 0, null, null, -1, "", "", "", "[]", "", "", null, null, null, null, "", -1, "2", null);
        Assert.IsFalse(picklistResult.IsError == true);
        StringAssert.Contains(picklistResult.Content!.OfType<TextContentBlock>().Single().Text!, "DefaultFormValue");
        StringAssert.Contains(picklistResult.Content!.OfType<TextContentBlock>().Single().Text!, "add options");

        var boolean = new BooleanAttributeMetadata { LogicalName = "devkit_enabled", DefaultValue = false };
        var booleanResult = Invoke("UpdateExistingAttribute", "account", "devkit_enabled", boolean,
            "", "", "", 0, null, null, -1, "", "", "", "", "", "", null, null, null, null, "", -1, "true", null);
        Assert.IsFalse(booleanResult.IsError == true);
        Assert.IsTrue(boolean.DefaultValue == true);
    }

    [TestMethod]
    public void UpdateExistingAttribute_RejectsUnsupportedDefaultsBeforeMutation()
    {
        var multi = new MultiSelectPicklistAttributeMetadata { LogicalName = "devkit_tags" };
        var result = Invoke("UpdateExistingAttribute", "account", "devkit_tags", multi,
            "", "", "", 0, null, null, -1, "", "", "", "", "", "", null, null, null, null, "", -1, "1", null);
        AssertError(result, "not supported for multipicklist");
    }

    private CallToolResult Invoke(string name, params object?[] args)
    {
        var method = typeof(ManageColumnTool).GetMethod(name, BindingFlags.NonPublic | BindingFlags.Instance)!;
        return (CallToolResult)method.Invoke(_tool, args)!;
    }

    private static void AssertError(CallToolResult result, string text)
    {
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.Content!.OfType<TextContentBlock>().Single().Text!, text);
    }
}
