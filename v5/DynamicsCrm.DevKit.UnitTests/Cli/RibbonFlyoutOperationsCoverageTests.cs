using DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class RibbonFlyoutOperationsCoverageTests
{
    private sealed class NoopValidation : IRibbonValidation
    {
        public string ValidateWebResourceExists(string webResourceName) => null;
        public bool IsOobButton(string entityName, string buttonId) => false;
    }

    private static XDocument MakeRibbon() => XDocument.Parse(@"<?xml version=""1.0"" encoding=""utf-16""?>
<RibbonDiffXml>
  <CustomActions />
  <Templates>
    <RibbonTemplates Id=""mwtemplates""></RibbonTemplates>
  </Templates>
  <ContextualTabs />
  <LocLabels></LocLabels>
  <CommandDefinitions />
  <RuleDefinitions />
  <TabDefinitions />
  <EntityOverrides>
    <Entity Name=""account""></Entity>
  </EntityOverrides>
</RibbonDiffXml>");

    [TestMethod]
    public void ExecuteAddSplitButton_MissingSurface_ReturnsError()
    {
        var ops = new RibbonFlyoutOperations(new NoopValidation(), 1033);
        var json = JsonDocument.Parse("{\"label\":\"L\"}").RootElement;
        var (error, _, _) = ops.ExecuteAddSplitButton(MakeRibbon(), "account", json);
        Assert.IsNotNull(error);
        StringAssert.Contains(error, "surface");
    }

    [TestMethod]
    public void ExecuteAddSplitButton_InvalidSurface_ReturnsError()
    {
        var ops = new RibbonFlyoutOperations(new NoopValidation(), 1033);
        var json = JsonDocument.Parse("{\"surface\":\"oops\",\"label\":\"L\"}").RootElement;
        var (error, _, _) = ops.ExecuteAddSplitButton(MakeRibbon(), "account", json);
        Assert.IsNotNull(error);
    }

    [TestMethod]
    public void ExecuteUpdateSplitButton_MissingCommandId_ReturnsError()
    {
        var ops = new RibbonFlyoutOperations(new NoopValidation(), 1033);
        var json = JsonDocument.Parse("{\"label\":\"L\"}").RootElement;
        var (error, _, _) = ops.ExecuteUpdateSplitButton(MakeRibbon(), "account", json);
        Assert.IsNotNull(error);
    }

    [TestMethod]
    public void ExecuteUpdateSplitButton_NoChanges_ReturnsError()
    {
        var ops = new RibbonFlyoutOperations(new NoopValidation(), 1033);
        var json = JsonDocument.Parse("{\"commandId\":\"x\"}").RootElement;
        var (error, _, _) = ops.ExecuteUpdateSplitButton(MakeRibbon(), "account", json);
        Assert.IsNotNull(error);
    }

    [TestMethod]
    public void ExecuteAddFlyoutStatic_MissingSurface()
    {
        var ops = new RibbonFlyoutOperations(new NoopValidation(), 1033);
        var json = JsonDocument.Parse("{\"label\":\"L\"}").RootElement;
        var (error, _, _) = ops.ExecuteAddFlyoutStatic(MakeRibbon(), "account", json);
        Assert.IsNotNull(error);
    }

    [TestMethod]
    public void ExecuteAddFlyoutStatic_InvalidSurface()
    {
        var ops = new RibbonFlyoutOperations(new NoopValidation(), 1033);
        var json = JsonDocument.Parse("{\"surface\":\"xx\",\"label\":\"L\"}").RootElement;
        var (error, _, _) = ops.ExecuteAddFlyoutStatic(MakeRibbon(), "account", json);
        Assert.IsNotNull(error);
    }

    [TestMethod]
    public void ExecuteAddFlyoutStatic_NoItems()
    {
        var ops = new RibbonFlyoutOperations(new NoopValidation(), 1033);
        var json = JsonDocument.Parse("{\"surface\":\"form\",\"label\":\"L\"}").RootElement;
        var (error, _, _) = ops.ExecuteAddFlyoutStatic(MakeRibbon(), "account", json);
        Assert.IsNotNull(error);
        StringAssert.Contains(error, "item");
    }

    [TestMethod]
    public void ExecuteUpdateFlyoutStatic_MissingCommandId()
    {
        var ops = new RibbonFlyoutOperations(new NoopValidation(), 1033);
        var json = JsonDocument.Parse("{\"label\":\"L\"}").RootElement;
        var (error, _, _) = ops.ExecuteUpdateFlyoutStatic(MakeRibbon(), "account", json);
        Assert.IsNotNull(error);
    }

    [TestMethod]
    public void ExecuteHideFlyoutItem_MissingCommandId()
    {
        var ops = new RibbonFlyoutOperations(new NoopValidation(), 1033);
        var json = JsonDocument.Parse("{}").RootElement;
        var (error, _, _) = ops.ExecuteHideFlyoutItem(MakeRibbon(), "account", json);
        Assert.IsNotNull(error);
    }

    [TestMethod]
    public void ExecuteShowFlyoutItem_MissingCommandId()
    {
        var ops = new RibbonFlyoutOperations(new NoopValidation(), 1033);
        var json = JsonDocument.Parse("{}").RootElement;
        var (error, _, _) = ops.ExecuteShowFlyoutItem(MakeRibbon(), "account", json);
        Assert.IsNotNull(error);
    }
}
