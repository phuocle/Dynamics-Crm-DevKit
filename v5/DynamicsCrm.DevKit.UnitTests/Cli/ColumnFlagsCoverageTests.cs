using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class ColumnFlagsCoverageTests
{
    [TestMethod]
    public void Ctor_AllFlags_NoneSet()
    {
        var flags = new ColumnFlags(
            AttributeRequiredLevel.None,
            null, null, null, null);
        Assert.AreEqual(AttributeRequiredLevel.None, flags.RequiredLevel);
        Assert.IsFalse(flags.IsAuditEnabled.HasValue);
        Assert.IsFalse(flags.IsValidForAdvancedFind.HasValue);
        Assert.IsFalse(flags.IsSecured.HasValue);
        Assert.IsFalse(flags.IsSortable.HasValue);
        Assert.IsTrue(flags.RequiredLevelExplicit);
    }

    [TestMethod]
    public void Ctor_RequiredLevelExplicitFalse()
    {
        var flags = new ColumnFlags(
            AttributeRequiredLevel.ApplicationRequired,
            null, null, null, null,
            requiredLevelExplicit: false);
        Assert.IsFalse(flags.RequiredLevelExplicit);
    }

    [TestMethod]
    public void Apply_RequiredLevel_AlwaysSets()
    {
        var flags = new ColumnFlags(
            AttributeRequiredLevel.Recommended,
            null, null, null, null);
        var attr = new StringAttributeMetadata { LogicalName = "x" };
        flags.Apply(attr);
        Assert.IsNotNull(attr.RequiredLevel);
        Assert.AreEqual(AttributeRequiredLevel.Recommended, attr.RequiredLevel.Value);
    }

    [TestMethod]
    public void Apply_AllBooleanFlags_SetWhenProvided()
    {
        var flags = new ColumnFlags(
            AttributeRequiredLevel.None,
            isAuditEnabled: true,
            isValidForAdvancedFind: false,
            isSecured: true,
            isSortable: false);
        var attr = new StringAttributeMetadata { LogicalName = "x" };
        flags.Apply(attr);
        Assert.AreEqual(true, attr.IsAuditEnabled.Value);
        Assert.AreEqual(false, attr.IsValidForAdvancedFind.Value);
        Assert.AreEqual(true, attr.IsSecured);
        Assert.AreEqual(false, attr.IsSortableEnabled.Value);
    }

    [TestMethod]
    public void Apply_NullFlags_DoNotSet()
    {
        var flags = new ColumnFlags(AttributeRequiredLevel.None, null, null, null, null);
        var attr = new StringAttributeMetadata { LogicalName = "x" };
        // Set non-null defaults to ensure Apply leaves them alone
        attr.IsAuditEnabled = new BooleanManagedProperty(true);
        attr.IsValidForAdvancedFind = new BooleanManagedProperty(true);
        attr.IsSecured = true;
        attr.IsSortableEnabled = new BooleanManagedProperty(true);
        flags.Apply(attr);
        Assert.AreEqual(true, attr.IsAuditEnabled.Value);
        Assert.AreEqual(true, attr.IsValidForAdvancedFind.Value);
        Assert.AreEqual(true, attr.IsSecured);
        Assert.AreEqual(true, attr.IsSortableEnabled.Value);
    }

    [TestMethod]
    public void TryApplyForUpdate_RequiredLevelExplicitFalse_Skips()
    {
        var flags = new ColumnFlags(
            AttributeRequiredLevel.ApplicationRequired,
            null, null, null, null,
            requiredLevelExplicit: false);
        var attr = new StringAttributeMetadata { LogicalName = "x" };
        var changes = new List<string>();
        var structured = new Dictionary<string, UpdateAttributeChange>();
        var applied = flags.TryApplyForUpdate(attr, changes, structured);
        Assert.AreEqual(0, applied);
        Assert.AreEqual(0, changes.Count);
        Assert.AreEqual(0, structured.Count);
    }

    [TestMethod]
    public void TryApplyForUpdate_RequiredLevelChange_Applies()
    {
        var flags = new ColumnFlags(
            AttributeRequiredLevel.ApplicationRequired,
            null, null, null, null);
        var attr = new StringAttributeMetadata { LogicalName = "x" };
        attr.RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.None);
        var changes = new List<string>();
        var structured = new Dictionary<string, UpdateAttributeChange>();
        var applied = flags.TryApplyForUpdate(attr, changes, structured);
        Assert.AreEqual(1, applied);
        Assert.AreEqual(1, changes.Count);
        Assert.IsTrue(structured.ContainsKey("requiredLevel"));
    }

    [TestMethod]
    public void TryApplyForUpdate_RequiredLevelSame_NoChange()
    {
        var flags = new ColumnFlags(
            AttributeRequiredLevel.None,
            null, null, null, null);
        var attr = new StringAttributeMetadata { LogicalName = "x" };
        attr.RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.None);
        var changes = new List<string>();
        var structured = new Dictionary<string, UpdateAttributeChange>();
        var applied = flags.TryApplyForUpdate(attr, changes, structured);
        Assert.AreEqual(0, applied);
    }

    [TestMethod]
    public void TryApplyForUpdate_RequiredLevelNullOld_DefaultsToNone()
    {
        var flags = new ColumnFlags(
            AttributeRequiredLevel.ApplicationRequired,
            null, null, null, null);
        var attr = new StringAttributeMetadata { LogicalName = "x" };
        attr.RequiredLevel = null;
        var changes = new List<string>();
        var structured = new Dictionary<string, UpdateAttributeChange>();
        var applied = flags.TryApplyForUpdate(attr, changes, structured);
        Assert.AreEqual(1, applied);
    }

    [TestMethod]
    public void TryApplyForUpdate_IsAuditEnabled_Change()
    {
        var flags = new ColumnFlags(AttributeRequiredLevel.None, isAuditEnabled: true, null, null, null);
        var attr = new StringAttributeMetadata { LogicalName = "x" };
        attr.IsAuditEnabled = new BooleanManagedProperty(false);
        var changes = new List<string>();
        var structured = new Dictionary<string, UpdateAttributeChange>();
        var applied = flags.TryApplyForUpdate(attr, changes, structured);
        Assert.AreEqual(1, applied);
    }

    [TestMethod]
    public void TryApplyForUpdate_IsAuditEnabled_NullOld_NoChange()
    {
        // oldVal defaults to "false" (null?.Value == true ? "true" : "false")
        // Use newVal = false to skip applying
        var flags = new ColumnFlags(AttributeRequiredLevel.None, isAuditEnabled: false, null, null, null);
        var attr = new StringAttributeMetadata { LogicalName = "x" };
        attr.IsAuditEnabled = null;
        var changes = new List<string>();
        var structured = new Dictionary<string, UpdateAttributeChange>();
        var applied = flags.TryApplyForUpdate(attr, changes, structured);
        Assert.AreEqual(0, applied);
    }

    [TestMethod]
    public void TryApplyForUpdate_IsAuditEnabled_SameValue_NoChange()
    {
        var flags = new ColumnFlags(AttributeRequiredLevel.None, isAuditEnabled: true, null, null, null);
        var attr = new StringAttributeMetadata { LogicalName = "x" };
        attr.IsAuditEnabled = new BooleanManagedProperty(true);
        var changes = new List<string>();
        var structured = new Dictionary<string, UpdateAttributeChange>();
        var applied = flags.TryApplyForUpdate(attr, changes, structured);
        Assert.AreEqual(0, applied);
    }

    [TestMethod]
    public void TryApplyForUpdate_IsValidForAdvancedFind_Change()
    {
        var flags = new ColumnFlags(AttributeRequiredLevel.None, null, isValidForAdvancedFind: true, null, null);
        var attr = new StringAttributeMetadata { LogicalName = "x" };
        attr.IsValidForAdvancedFind = new BooleanManagedProperty(false);
        var changes = new List<string>();
        var structured = new Dictionary<string, UpdateAttributeChange>();
        var applied = flags.TryApplyForUpdate(attr, changes, structured);
        Assert.AreEqual(1, applied);
    }

    [TestMethod]
    public void TryApplyForUpdate_IsValidForAdvancedFind_NullOld_NoChange()
    {
        var flags = new ColumnFlags(AttributeRequiredLevel.None, null, isValidForAdvancedFind: false, null, null);
        var attr = new StringAttributeMetadata { LogicalName = "x" };
        attr.IsValidForAdvancedFind = null;
        var changes = new List<string>();
        var structured = new Dictionary<string, UpdateAttributeChange>();
        var applied = flags.TryApplyForUpdate(attr, changes, structured);
        Assert.AreEqual(0, applied);
    }

    [TestMethod]
    public void TryApplyForUpdate_IsSecured_Change()
    {
        var flags = new ColumnFlags(AttributeRequiredLevel.None, null, null, isSecured: true, null);
        var attr = new StringAttributeMetadata { LogicalName = "x" };
        attr.IsSecured = false;
        var changes = new List<string>();
        var structured = new Dictionary<string, UpdateAttributeChange>();
        var applied = flags.TryApplyForUpdate(attr, changes, structured);
        Assert.AreEqual(1, applied);
    }

    [TestMethod]
    public void TryApplyForUpdate_IsSecured_NullOld_NoChange()
    {
        // IsSecured: oldVal = IsSecured == true ? "true" : "false"
        // When IsSecured = null, oldVal = "false" -> use newVal=false
        var flags = new ColumnFlags(AttributeRequiredLevel.None, null, null, isSecured: false, null);
        var attr = new StringAttributeMetadata { LogicalName = "x" };
        attr.IsSecured = null;
        var changes = new List<string>();
        var structured = new Dictionary<string, UpdateAttributeChange>();
        var applied = flags.TryApplyForUpdate(attr, changes, structured);
        Assert.AreEqual(0, applied);
    }

    [TestMethod]
    public void TryApplyForUpdate_IsSortable_Change()
    {
        var flags = new ColumnFlags(AttributeRequiredLevel.None, null, null, null, isSortable: true);
        var attr = new StringAttributeMetadata { LogicalName = "x" };
        attr.IsSortableEnabled = new BooleanManagedProperty(false);
        var changes = new List<string>();
        var structured = new Dictionary<string, UpdateAttributeChange>();
        var applied = flags.TryApplyForUpdate(attr, changes, structured);
        Assert.AreEqual(1, applied);
    }

    [TestMethod]
    public void TryApplyForUpdate_IsSortable_NullOld_NoChange()
    {
        var flags = new ColumnFlags(AttributeRequiredLevel.None, null, null, null, isSortable: false);
        var attr = new StringAttributeMetadata { LogicalName = "x" };
        attr.IsSortableEnabled = null;
        var changes = new List<string>();
        var structured = new Dictionary<string, UpdateAttributeChange>();
        var applied = flags.TryApplyForUpdate(attr, changes, structured);
        Assert.AreEqual(0, applied);
    }

    [TestMethod]
    public void TryApplyForUpdate_AllFlags_ChangeTogether()
    {
        var flags = new ColumnFlags(
            AttributeRequiredLevel.ApplicationRequired,
            isAuditEnabled: true,
            isValidForAdvancedFind: true,
            isSecured: true,
            isSortable: true);
        var attr = new StringAttributeMetadata { LogicalName = "x" };
        attr.RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.None);
        attr.IsAuditEnabled = new BooleanManagedProperty(false);
        attr.IsValidForAdvancedFind = new BooleanManagedProperty(false);
        attr.IsSecured = false;
        attr.IsSortableEnabled = new BooleanManagedProperty(false);
        var changes = new List<string>();
        var structured = new Dictionary<string, UpdateAttributeChange>();
        var applied = flags.TryApplyForUpdate(attr, changes, structured);
        Assert.AreEqual(5, applied);
    }
}
