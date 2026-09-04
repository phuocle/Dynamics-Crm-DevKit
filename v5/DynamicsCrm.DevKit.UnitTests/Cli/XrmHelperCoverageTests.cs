using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class XrmHelperCoverageTests
{
    [TestInitialize]
    public void Init()
    {
        XrmHelper.ResetCounts();
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
    }

    [TestMethod]
    public void ResetCounts_AllZero()
    {
        XrmHelper.COUNT_CreateAsync = 5;
        XrmHelper.COUNT_UpdateAsync = 3;
        XrmHelper.COUNT_DeleteAsync = 2;
        XrmHelper.COUNT_RetrieveAsync = 7;
        XrmHelper.COUNT_RetrieveMultipleAsync = 11;
        XrmHelper.COUNT_ExecuteAsync = 13;
        XrmHelper.ResetCounts();
        Assert.AreEqual(0, XrmHelper.GetTotalCount());
    }

    [TestMethod]
    public void GetTotalCount_SumsAll()
    {
        XrmHelper.COUNT_CreateAsync = 1;
        XrmHelper.COUNT_UpdateAsync = 2;
        XrmHelper.COUNT_DeleteAsync = 3;
        XrmHelper.COUNT_RetrieveAsync = 4;
        XrmHelper.COUNT_RetrieveMultipleAsync = 5;
        XrmHelper.COUNT_ExecuteAsync = 6;
        Assert.AreEqual(21, XrmHelper.GetTotalCount());
    }

    [TestMethod]
    public void GetTotalCount_AllZero()
    {
        Assert.AreEqual(0, XrmHelper.GetTotalCount());
    }

    [TestMethod]
    public void EntitiesMetadata_DefaultEmpty()
    {
        Assert.IsNotNull(XrmHelper.EntitiesMetadata);
        Assert.AreEqual(0, XrmHelper.EntitiesMetadata.Count);
    }

    [TestMethod]
    public void EntitiesMetadata_CanSet()
    {
        var list = new List<EntityMetadata> { new EntityMetadata { LogicalName = "x" } };
        XrmHelper.EntitiesMetadata = list;
        Assert.AreEqual(1, XrmHelper.EntitiesMetadata.Count);
    }
}
