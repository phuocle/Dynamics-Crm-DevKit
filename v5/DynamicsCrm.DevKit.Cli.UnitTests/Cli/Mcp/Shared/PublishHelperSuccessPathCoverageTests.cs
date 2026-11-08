using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

/// <summary>
/// Success-path coverage for <see cref="PublishHelper"/> publish methods that
/// only had their dry-run/empty/error branches exercised elsewhere: the happy
/// Execute → wait → true flow for app modules, ribbon, dashboards, sitemap and
/// PublishAllXml, plus the PublishOptionSets null-service guard.
/// </summary>
[TestClass]
public sealed class PublishHelperSuccessPathCoverageTests
{
    [TestInitialize]
    public void Setup() => MetadataOperationWaitHelper.WaitScalePercent = 0;

    [TestMethod]
    public void PublishOptionSets_NullService_ThrowsBeforeMutation()
    {
        Assert.ThrowsExactly<ArgumentNullException>(() =>
            PublishHelper.PublishOptionSets(DryRunTestHelpers.NormalContext(), null!, new[] { "sample" }));
    }

    [TestMethod]
    public void PublishAppModules_Success_ExecutesPublishXmlAndReturnsTrue()
    {
        using var fake = new FakeSdkClient { OnExecute = _ => new PublishXmlResponse() };

        var published = PublishHelper.PublishAppModules(
            DryRunTestHelpers.NormalContext(), fake.Client, new[] { Guid.NewGuid(), Guid.NewGuid() });

        Assert.IsTrue(published);
    }

    [TestMethod]
    public void PublishRibbon_Success_ExecutesPublishXmlAndReturnsTrue()
    {
        using var fake = new FakeSdkClient { OnExecute = _ => new PublishXmlResponse() };

        Assert.IsTrue(PublishHelper.PublishRibbon(DryRunTestHelpers.NormalContext(), fake.Client));
    }

    [TestMethod]
    public void PublishDashboards_Success_ExecutesPublishXmlAndReturnsTrue()
    {
        using var fake = new FakeSdkClient { OnExecute = _ => new PublishXmlResponse() };
        var ids = new List<Guid> { Guid.NewGuid(), Guid.Empty, Guid.NewGuid() };

        Assert.IsTrue(PublishHelper.PublishDashboards(DryRunTestHelpers.NormalContext(), fake.Client, ids));
    }

    [TestMethod]
    public void PublishSiteMap_Success_ExecutesPublishXmlAndReturnsTrue()
    {
        using var fake = new FakeSdkClient { OnExecute = _ => new PublishXmlResponse() };

        Assert.IsTrue(PublishHelper.PublishSiteMap(DryRunTestHelpers.NormalContext(), fake.Client));
    }

    [TestMethod]
    public void PublishAllXml_Success_ExecutesPublishAllAndReturnsTrue()
    {
        using var fake = new FakeSdkClient { OnExecute = _ => new PublishAllXmlResponse() };

        Assert.IsTrue(PublishHelper.PublishAllXml(DryRunTestHelpers.NormalContext(), fake.Client));
    }

    [TestMethod]
    public void PublishAllAsync_Success_ReturnsAsyncOperationId()
    {
        var asyncOperationId = Guid.NewGuid();
        using var fake = new FakeSdkClient
        {
            OnExecute = _ =>
            {
                var response = new PublishAllXmlAsyncResponse();
                response.Results["AsyncOperationId"] = asyncOperationId;
                return response;
            }
        };

        var result = PublishHelper.PublishAllAsync(DryRunTestHelpers.NormalContext(), fake.Client);

        Assert.AreEqual(asyncOperationId, result);
    }

    [TestMethod]
    public void PublishWebResources_Success_ExecutesPublishXmlAndReturnsTrue()
    {
        using var fake = new FakeSdkClient { OnExecute = _ => new PublishXmlResponse() };

        Assert.IsTrue(PublishHelper.PublishWebResources(
            DryRunTestHelpers.NormalContext(), fake.Client, new[] { Guid.NewGuid() }));
    }
}
