using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.CrossTool;

[TestClass]
public sealed class PublishHelperCoverageTests
{
    private static ServiceClient Service() =>
        (ServiceClient)RuntimeHelpers.GetUninitializedObject(typeof(ServiceClient));

    [TestMethod]
    public void EmptyPublishInputs_AreNoOps()
    {
        var context = DryRunTestHelpers.BlockedContext();
        var service = Service();

        Assert.IsTrue(PublishHelper.PublishEntities(context, service, Array.Empty<string>(), 0));
        Assert.IsTrue(PublishHelper.PublishOptionSets(context, service, Array.Empty<string>(), 0));
        Assert.IsTrue(PublishHelper.PublishWebResources(context, service, new[] { Guid.Empty }, 0));
        Assert.IsTrue(PublishHelper.PublishAppModules(context, service, new[] { Guid.Empty }, 0));
        Assert.IsTrue(PublishHelper.PublishDashboards(context, service, new[] { Guid.Empty }, 0));
        Assert.IsTrue(PublishHelper.PublishTargeted(context, service, new PublishTargetedPayload(), 0));
    }

    [TestMethod]
    public void BlockedPublishOperations_ReturnFalseWithoutCallingDataverse()
    {
        var context = DryRunTestHelpers.BlockedContext();
        var service = Service();
        var id = Guid.NewGuid();

        Assert.IsFalse(PublishHelper.PublishEntity(context, service, "account", 0));
        Assert.IsFalse(PublishHelper.PublishOptionSet(context, service, "sample", 0));
        Assert.IsFalse(PublishHelper.PublishWebResource(context, service, id, 0));
        Assert.IsFalse(PublishHelper.PublishAppModule(context, service, id, 0));
        Assert.IsFalse(PublishHelper.PublishRibbon(context, service, 0));
        Assert.IsFalse(PublishHelper.PublishDashboard(context, service, id, 0));
        Assert.IsFalse(PublishHelper.PublishSiteMap(context, service, 0));
        Assert.IsFalse(PublishHelper.PublishAllXml(context, service, 0));
    }

    [TestMethod]
    public void TargetedPublish_BuildsAllRequestedSectionsBeforeDryRunGate()
    {
        var id = Guid.NewGuid();
        var payload = new PublishTargetedPayload
        {
            EntityNames = new[] { "account", "  ", "contact & special" },
            AppModuleIds = new[] { Guid.Empty, id, id },
            OptionSetNames = new[] { "sample", "" },
            DashboardIds = new[] { Guid.Empty, id, id },
            WebResourceIds = new[] { Guid.Empty, id, id },
            IncludeRibbons = true,
            IncludeSiteMap = true
        };

        Assert.IsFalse(PublishHelper.PublishTargeted(
            DryRunTestHelpers.BlockedContext(), Service(), payload, 0));

        Assert.IsFalse(PublishHelper.PublishTargeted(
            DryRunTestHelpers.BlockedContext(), Service(),
            new PublishTargetedPayload { IncludeGlobalOptionSets = true }, 0));
    }

    [TestMethod]
    public void InvalidArguments_AreRejectedBeforeMutation()
    {
        var service = Service();
        var context = DryRunTestHelpers.NormalContext();

        Expect<ArgumentNullException>(() => PublishHelper.PublishEntities(null!, service, null));
        Expect<ArgumentNullException>(() => PublishHelper.PublishEntities(context, null!, null));
        Expect<ArgumentException>(() => PublishHelper.PublishEntity(context, service, " "));
        Expect<ArgumentException>(() => PublishHelper.PublishOptionSet(context, service, ""));
        Expect<ArgumentException>(() => PublishHelper.PublishWebResource(context, service, Guid.Empty));
        Expect<ArgumentException>(() => PublishHelper.PublishAppModule(context, service, Guid.Empty));
        Expect<ArgumentException>(() => PublishHelper.PublishDashboard(context, service, Guid.Empty));
        Expect<ArgumentNullException>(() => PublishHelper.PublishTargeted(context, service, null!));
        Expect<ArgumentNullException>(() => PublishHelper.PublishRibbon(context, null!, 0));
        Expect<ArgumentNullException>(() => PublishHelper.PublishSiteMap(context, null!, 0));
        Expect<ArgumentNullException>(() => PublishHelper.PublishAllXml(context, null!, 0));
    }

    [TestMethod]
    public void PublishAllAsync_BlockedContextThrowsAtMutationBoundary()
    {
        var exception = Expect<InvalidOperationException>(() =>
            PublishHelper.PublishAllAsync(DryRunTestHelpers.BlockedContext(), Service()));

        StringAssert.Contains(exception.Message, "Mutation blocked");
    }

    private static TException Expect<TException>(Action action)
        where TException : Exception
    {
        try
        {
            action();
        }
        catch (TException exception)
        {
            return exception;
        }

        Assert.Fail($"Expected {typeof(TException).Name}.");
        return null!;
    }
}
