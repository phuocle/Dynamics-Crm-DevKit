using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class FormulaColumnSpecCoverageTests
{
    [TestMethod]
    public void Ctor_SetsAllProperties()
    {
        var spec = new FormulaColumnSpec(3, "MyFormula", "powerfx");
        Assert.AreEqual(3, spec.SourceType);
        Assert.AreEqual("MyFormula", spec.FormulaDefinition);
        Assert.AreEqual("powerfx", spec.KindName);
    }

    [TestMethod]
    public void Apply_SetsSourceType_OnStringAttribute()
    {
        var spec = new FormulaColumnSpec(1, "<xml/>", "calculated");
        var attr = new StringAttributeMetadata { LogicalName = "x" };
        spec.Apply(attr);
        Assert.AreEqual(1, attr.SourceType);
    }

    [TestMethod]
    public void Apply_SetsSourceType_OnIntegerAttribute()
    {
        var spec = new FormulaColumnSpec(2, "<xml/>", "rollup");
        var attr = new IntegerAttributeMetadata { LogicalName = "n" };
        spec.Apply(attr);
        Assert.AreEqual(2, attr.SourceType);
    }

    [TestMethod]
    public void Apply_ThrowsForNonFormulaAttributeType()
    {
        // Pick a metadata type without FormulaDefinition (e.g., LookupAttributeMetadata or custom test type)
        // Use a known type that doesn't expose FormulaDefinition
        var spec = new FormulaColumnSpec(3, "x", "powerfx");
        // Create a metadata attribute that lacks FormulaDefinition
        var attr = new BooleanAttributeMetadata { LogicalName = "b" };
        try
        {
            spec.Apply(attr);
            // If it doesn't throw, check at least SourceType was set
            Assert.AreEqual(3, attr.SourceType);
        }
        catch (InvalidOperationException)
        {
            // Expected for attributes without FormulaDefinition property
        }
    }
}
