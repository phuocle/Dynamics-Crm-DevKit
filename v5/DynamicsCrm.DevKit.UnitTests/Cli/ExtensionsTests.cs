using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class ExtensionsTests
{
    [TestMethod]
    public void TrimNewLine_RemovesNewLines()
    {
        var input = "Line1\r\nLine2\rLine3\nLine4";
        var expected = "Line1Line2Line3Line4";
        var result = input.TrimNewLine();
        Assert.AreEqual(expected, result);
    }

    [TestMethod]
    public void TrimNewLine_Null_ReturnsNull()
    {
        string? input = null;
        var result = input.TrimNewLine();
        Assert.IsNull(result);
    }

    [TestMethod]
    public void GetMaxLength_StringAttribute_ReturnsValue()
    {
        var attr = new StringAttributeMetadata { MaxLength = 100 };
        Assert.AreEqual(100, attr.GetMaxLength());
    }

    [TestMethod]
    public void GetMaxLength_MemoAttribute_ReturnsValue()
    {
        var attr = new MemoAttributeMetadata { MaxLength = 2000 };
        Assert.AreEqual(2000, attr.GetMaxLength());
    }

    [TestMethod]
    public void GetMaxLength_OtherAttribute_ReturnsNull()
    {
        var attr = new IntegerAttributeMetadata();
        Assert.IsNull(attr.GetMaxLength());
    }

    [TestMethod]
    public void GetMinValue_IntegerAttribute_ReturnsValue()
    {
        var attr = new IntegerAttributeMetadata { MinValue = 10 };
        Assert.AreEqual(10m, attr.GetMinValue());
    }

    [TestMethod]
    public void GetMinValue_DecimalAttribute_ReturnsValue()
    {
        var attr = new DecimalAttributeMetadata { MinValue = 10.5m };
        Assert.AreEqual(10.5m, attr.GetMinValue());
    }

    [TestMethod]
    public void GetMinValue_MoneyAttribute_ReturnsValue()
    {
        var attr = new MoneyAttributeMetadata { MinValue = 100.0 };
        Assert.AreEqual(100.0m, attr.GetMinValue());
    }

    [TestMethod]
    public void GetMaxValue_IntegerAttribute_ReturnsValue()
    {
        var attr = new IntegerAttributeMetadata { MaxValue = 100 };
        Assert.AreEqual(100m, attr.GetMaxValue());
    }

    [TestMethod]
    public void IsReadOnly_SourceType1Or2_ReturnsTrue()
    {
        var attr1 = new StringAttributeMetadata();
        typeof(AttributeMetadata).GetProperty(nameof(AttributeMetadata.SourceType))!.SetValue(attr1, 1);
        Assert.IsTrue(attr1.IsReadOnly());

        var attr2 = new StringAttributeMetadata();
        typeof(AttributeMetadata).GetProperty(nameof(AttributeMetadata.SourceType))!.SetValue(attr2, 2);
        Assert.IsTrue(attr2.IsReadOnly());
    }

    [TestMethod]
    public void IsReadOnly_SourceType0_ReturnsFalse()
    {
        var attr = new StringAttributeMetadata();
        typeof(AttributeMetadata).GetProperty(nameof(AttributeMetadata.SourceType))!.SetValue(attr, 0);
        Assert.IsFalse(attr.IsReadOnly());
    }

    [TestMethod]
    public void ForEach_IteratesAllItems()
    {
        var list = new List<int> { 1, 2, 3 };
        var sum = 0;
        list.ForEach(x => sum += x);
        Assert.AreEqual(6, sum);
    }
}
