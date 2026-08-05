using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.App;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json.Nodes;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class McpFormattingCoverageTests
{
    private static readonly Type ManageViewType = typeof(ManageViewTool);
    private static readonly Type ManageAppType = typeof(ManageAppTool);
    private static readonly Type ManageCommandType = typeof(ManageCommandTool);
    private static readonly Type ManageRibbonType = typeof(ManageRibbonTool);

    [TestMethod]
    public void ManageView_FormatViewList_RendersSystemPersonalAndXmlSections()
    {
        var tool = new ManageViewTool(null!, new McpDryRunOptions(), new McpExecutionContext(true));
        var systemViews = new EntityCollection().Entities;
        systemViews.Add(new Entity("savedquery")
        {
            Id = Guid.NewGuid(),
            ["savedqueryid"] = Guid.NewGuid(),
            ["name"] = "Active\tAccounts",
            ["querytype"] = 0,
            ["isdefault"] = true,
            ["statecode"] = new OptionSetValue(0),
            ["ismanaged"] = false,
            ["fetchxml"] = "<fetch><entity name='account'><attribute name='name'/></entity></fetch>",
            ["layoutxml"] = "<grid><row name='result' id='name'><cell name='name' width='150'/></row></grid>"
        });
        var personalViews = new EntityCollection().Entities;
        personalViews.Add(new Entity("userquery")
        {
            Id = Guid.NewGuid(),
            ["userqueryid"] = Guid.NewGuid(),
            ["name"] = "My Accounts",
            ["querytype"] = 64,
            ["statecode"] = new OptionSetValue(1),
            ["fetchxml"] = "<fetch><entity name='account'><attribute name='accountnumber'/></entity></fetch>",
            ["layoutxml"] = "<grid><row name='result' id='accountnumber'><cell name='accountnumber' width='120'/></row></grid>"
        });

        var text = InvokeInstance<string>(tool, ManageViewType, "FormatViewList",
            "account", systemViews, true, true, "Accounts", personalViews);

        StringAssert.Contains(text, "[Views] account");
        StringAssert.Contains(text, "Active Accounts");
        StringAssert.Contains(text, "[Personal Views]");
        StringAssert.Contains(text, "[FetchXML: Active");
        StringAssert.Contains(text, "[LayoutXML: My Accounts]");
    }

    [TestMethod]
    public void ManageView_ValidationAndCellUpdateHelpers_ReturnDetailedErrors()
    {
        var result = InvokeStatic<object>(ManageViewType, "RunValidation",
            "<grid><row name='result' id='name'><cell name='name' width='100'/></row></grid>",
            "<fetch><entity name='account'><attribute name='accountnumber'/></entity></fetch>",
            "<fetch><entity name='account'><attribute name='accountnumber'/></entity></fetch>",
            4,
            "<fetch><entity name='account'><filter isquickfindfields='1'><condition attribute='name'/></filter></entity></fetch>");

        Assert.IsNotNull(result);

        var blocked = InvokeStatic<CallToolResult>(ManageViewType, "BuildValidationBlockedResult",
            "ViewUpdate", "account", Guid.NewGuid(), "Active Accounts",
            new List<string> { "layout missing cell" },
            new List<string> { "schema warning" },
            "fetch.bak", "layout.bak", "update");
        StringAssert.Contains(blocked.GetText(), "BLOCKED");
        StringAssert.Contains(blocked.GetText(), "schema warning");

        var serverBlocked = InvokeStatic<CallToolResult>(ManageViewType, "BuildServerValidationBlockedResult",
            "ViewUndo", "account", Guid.NewGuid(), "Active Accounts",
            "FetchXML is invalid", "fetch.bak", "layout.bak", "undo", "layout.restore.bak", "fetch.restore.bak");
        StringAssert.Contains(serverBlocked.GetText(), "server-side");

        var validCellUpdates = InvokeStatic<object>(ManageViewType, "ParseCellUpdates", """
[
  { "cell_name": "name", "set_attributes": { "width": "200", "ishidden": "0" }, "remove_attributes": ["imageproviderwebresource"] }
]
""");
        Assert.IsNull(GetTupleField<string>(validCellUpdates, "Item2"));

        var invalidCellUpdates = InvokeStatic<object>(ManageViewType, "ParseCellUpdates", """
[
  { "cell_name": "name", "remove_attributes": ["width"] }
]
""");
        StringAssert.Contains(GetTupleField<string>(invalidCellUpdates, "Item2"), "cannot remove protected attribute");
    }

    [TestMethod]
    public void ManageView_StaticXmlHelpers_HandleAliasesAndNameExtraction()
    {
        var aliasMap = InvokeStatic<Dictionary<string, string>>(ManageViewType, "BuildFetchAliasEntityMap",
            "<fetch><entity name='account'><link-entity name='contact' alias='c'><attribute name='fullname'/></link-entity></entity></fetch>");

        Assert.AreEqual("contact", aliasMap["c"]);

        var splitArgs = new object?[] { "c.fullname", null, null };
        var split = InvokeStaticWithArgs<bool>(ManageViewType, "TrySplitAliasedField", splitArgs);
        Assert.IsTrue(split);
        Assert.AreEqual("c", splitArgs[1]);
        Assert.AreEqual("fullname", splitArgs[2]);

        var entity = XElement.Parse("<entity name='account'><attribute name='name'/><order attribute='accountnumber'/><filter><condition attribute='statecode'/></filter></entity>");
        var names = InvokeStatic<HashSet<string>>(ManageViewType, "ExtractFieldNames", entity);
        CollectionAssert.IsSubsetOf(new[] { "name", "accountnumber", "statecode" }, names.ToArray());
    }

    [TestMethod]
    public void ManageApp_StaticFormatters_RenderNavigationValidationAndSanitizedNames()
    {
        var appId = Guid.NewGuid();
        var appUniqueId = Guid.NewGuid();
        var siteMapId = Guid.NewGuid();
        var app = new Entity("appmodule", appId)
        {
            ["name"] = "Sales App",
            ["uniquename"] = "devkit_salesapp"
        };
        var validation = CreateAppValidation("validation_failed",
            new List<string> { "missing component" },
            new List<string> { "minor issue" });
        var navResult = new AppNavigationOperationsResult
        {
            ModifiedSiteMapXml = "<SiteMap />",
            OperationSummaries = ["add_area: Sales", "add_item: account"],
            AddedEntities = ["account"],
            ChangedOperations = 2,
            NoOpOperations = 1
        };

        var createText = InvokeStatic<string>(ManageAppType, "BuildCreateUpdateText",
            "Created", "Sales App", "devkit_salesapp", appId, appUniqueId, siteMapId,
            "devkit", "backup.app.json", validation, new List<string> { "xsd warning" });
        var navText = InvokeStatic<string>(ManageAppType, "BuildNavigationText",
            "Updated", app, appUniqueId, siteMapId, "backup.app.json", validation, navResult,
            new List<string> { "xsd warning" }, true, true);
        var undoText = InvokeStatic<string>(ManageAppType, "BuildUndoText",
            "Restored", app, appUniqueId, siteMapId, "current.app.json", "restore.app.json",
            validation, new List<string> { "xsd warning" });

        StringAssert.Contains(createText, "ValidationError: missing component");
        StringAssert.Contains(navText, "AddedAppComponents: account");
        StringAssert.Contains(undoText, "RestoredFromBackup: restore.app.json");
        Assert.AreEqual("SalesApp", InvokeStatic<string>(ManageAppType, "SanitizeUniqueName", "Sales App!"));
        Assert.AreEqual("sales_app_.json", InvokeStatic<string>(ManageAppType, "SanitizeFileName", "Sales App?.json"));
        Assert.AreEqual("A \\| B", InvokeStatic<string>(ManageAppType, "EscapeTable", "A | B"));
    }

    [TestMethod]
    public void ManageApp_SiteMapHelpers_ParseTreeAreasValidationAndComponentDescriptions()
    {
        var xml = InvokeStatic<string>(ManageAppType, "BuildStarterSiteMapXml", 1033);
        var tree = InvokeStatic<string>(ManageAppType, "FormatNavigationTree", xml);
        var areas = InvokeStatic<System.Collections.IEnumerable>(ManageAppType, "ParseNavigationAreas", xml)
            .Cast<object>()
            .ToList();
        var validation = InvokeStatic<object>(ManageAppType, "ValidateSiteMapXml", xml);
        var components = new EntityReferenceCollection
        {
            new("sitemap", Guid.NewGuid()),
            new("account", Guid.NewGuid())
        };
        var descriptions = InvokeStatic<List<string>>(ManageAppType, "DescribeEntityAppComponents", "account", components, true);

        StringAssert.Contains(tree, "Area: Workspace");
        Assert.AreEqual(1, areas.Count);
        Assert.AreEqual(0, GetTupleField<List<string>>(validation, "Item1").Count);
        CollectionAssert.Contains(descriptions, "sitemap");
        CollectionAssert.Contains(descriptions, "account");
        Assert.IsTrue(InvokeStatic<bool>(ManageAppType, "IsImageWebResourceType", 10));
        Assert.IsFalse(InvokeStatic<bool>(ManageAppType, "IsImageWebResourceType", 3));
    }

    [TestMethod]
    public void ManageCommand_StaticRibbonAndMappingHelpers_ParseCommandMetadata()
    {
        var ribbonXml = """
<RibbonDiffXml>
  <LocLabels>
    <LocLabel Id="account.open.LabelText"><Titles><Title languagecode="1033" description="Open Account" /></Titles></LocLabel>
  </LocLabels>
  <Groups>
    <Group Id="Mscrm.HomepageGrid.account.MainTab.Actions">
      <Controls>
        <Button Id="Mscrm.HomepageGrid.account.Open" Sequence="20" LabelText="$LocLabels:account.open.LabelText" SolutionUniqueName="System" />
        <FlyoutAnchor Id="devkit.account.More.HomepageGrid.FlyoutAnchor" Sequence="10" LabelText="$Resources:Ribbon.More" SolutionUniqueName="devkit" />
        <SplitButton Id="devkit.account.Actions.HomepageGrid.SplitButton" Sequence="30" LabelText="{!EntityDisplayName:Account}" SolutionUniqueName="devkit" />
      </Controls>
    </Group>
  </Groups>
</RibbonDiffXml>
""";
        var locLabels = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
        {
            ["account.open.LabelText"] = "Open Account"
        };

        var buttons = InvokeStatic<System.Collections.IEnumerable>(ManageCommandType, "ParseButtonsFromRibbon",
            ribbonXml, "account", "MainTab.Actions", locLabels).Cast<object>().ToList();

        Assert.AreEqual(3, buttons.Count);
        Assert.AreEqual("devkit.account.More.HomepageGrid.FlyoutAnchor", GetTupleField<string>(buttons[0], "Item1"));
        Assert.AreEqual("Open Account", GetTupleField<string>(buttons[1], "Item3"));
        Assert.IsTrue(GetTupleField<bool>(buttons[1], "Item4"));
        Assert.IsTrue(GetTupleField<bool>(buttons[0], "Item5"));

        var zipped = ZipRibbonXml(ribbonXml);
        var unzipped = InvokeStatic<string>(ManageCommandType, "UnzipRibbonXml", zipped);
        StringAssert.Contains(unzipped, "RibbonDiffXml");

        var command = new Entity("appaction", Guid.NewGuid())
        {
            ["name"] = "devkit.account.Open.HomepageGrid.Button",
            ["uniquename"] = "devkit__open",
            ["buttonlabeltext"] = "Open",
            ["contextvalue"] = "account",
            ["type"] = new OptionSetValue(2),
            ["location"] = new OptionSetValue(1),
            ["onclickeventtype"] = new OptionSetValue(2),
            ["visibilitytype"] = new OptionSetValue(1),
            ["origin"] = new OptionSetValue(0),
            ["sequence"] = 25m,
            ["hidden"] = true,
            ["isdisabled"] = false,
            ["fonticon"] = "OpenPane",
            ["parentappactionid"] = new EntityReference("appaction", Guid.NewGuid()),
            ["clienttype"] = "Web",
            ["app.name"] = new AliasedValue("appmodule", "name", "Sales Hub")
        };
        var entry = InvokeStatic<object>(ManageCommandType, "MapCommandEntry", command);

        Assert.AreEqual("Split", GetProperty<string>(entry, "Type"));
        Assert.AreEqual("MainGrid", GetProperty<string>(entry, "Location"));
        Assert.AreEqual("JavaScript", GetProperty<string>(entry, "OnClickEventType"));
        Assert.AreEqual("Sales Hub", GetProperty<string>(entry, "AppName"));
        Assert.AreEqual("$clientsvg:Accept", InvokeStatic<string>(ManageCommandType, "NormalizeFontIcon", "Accept"));
        Assert.AreEqual("$webresource:icon.svg", InvokeStatic<string>(ManageCommandType, "NormalizeFontIcon", "$webresource:icon.svg"));
    }

    [TestMethod]
    public void ManageRibbon_StaticHelpers_ParseRibbonLabelsJobsAndZipPayloads()
    {
        var job = new Entity("asyncoperation")
        {
            ["operationtype"] = new OptionSetValue(54),
            ["messagename"] = "PublishAllAsync",
            ["name"] = "PublishAll"
        };
        Assert.AreEqual("PublishAll", InvokeStatic<string>(ManageRibbonType, "GetRibbonJobOperationType", job));
        Assert.AreEqual("ImportSolution", InvokeStatic<string>(ManageRibbonType, "MapAsyncOperationType", 203));
        Assert.AreEqual("System(999)", InvokeStatic<string>(ManageRibbonType, "MapAsyncOperationType", 999));
        Assert.AreEqual("Succeeded", InvokeStatic<string>(ManageRibbonType, "MapAsyncStatus", 30));
        Assert.AreEqual("99", InvokeStatic<string>(ManageRibbonType, "MapAsyncStatus", 99));
        Assert.IsTrue(InvokeStatic<bool>(ManageRibbonType, "IsWebResourceOperationProperty", "library"));
        Assert.IsFalse(InvokeStatic<bool>(ManageRibbonType, "IsWebResourceOperationProperty", "function"));

        var errorsText = InvokeStatic<string>(ManageRibbonType, "FormatOperationNameResolutionErrors", new List<string> { "missing.js" });
        StringAssert.Contains(errorsText, "operation name resolution failed");

        var json = InvokeStatic<System.Text.Json.JsonElement>(ManageRibbonType, "ToJsonElement", JsonNode.Parse("""{ "library": "devkit_/x.js" }""")!);
        Assert.AreEqual("devkit_/x.js", json.GetProperty("library").GetString());

        Assert.AreEqual("form", InvokeStatic<string>(ManageRibbonType, "DetectSurfaceFromButtonId", "Mscrm.Form.account.Custom", "account"));
        Assert.AreEqual("main_grid", InvokeStatic<string>(ManageRibbonType, "DetectSurfaceFromButtonId", "Mscrm.HomepageGrid.account.Custom", "account"));
        Assert.AreEqual("sub_grid", InvokeStatic<string>(ManageRibbonType, "DetectSurfaceFromButtonId", "Mscrm.SubGrid.account.Custom", "account"));
        Assert.IsNull(InvokeStatic<string>(ManageRibbonType, "DetectSurfaceFromButtonId", "Mscrm.Other.account.Custom", "account"));

        var ribbonXml = """
<RibbonDiffXml>
  <Groups>
    <Group Id="Mscrm.HomepageGrid.account.MainTab.Actions">
      <Controls>
        <Button Id="Mscrm.HomepageGrid.account.Open" Sequence="20" LabelText="$LocLabels:account.open.LabelText" SolutionUniqueName="System" />
        <FlyoutAnchor Id="devkit.account.More.HomepageGrid.FlyoutAnchor" Sequence="10" LabelText="$Resources:Ribbon.More" SolutionUniqueName="devkit" />
        <SplitButton Id="devkit.account.Actions.HomepageGrid.SplitButton" Sequence="30" LabelText="{!EntityDisplayName:Account}" SolutionUniqueName="devkit" />
        <Menu Id="ignored" />
      </Controls>
    </Group>
  </Groups>
</RibbonDiffXml>
""";
        var locLabels = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
        {
            ["account.open.LabelText"] = "Open Account"
        };
        var buttons = InvokeStatic<System.Collections.IEnumerable>(ManageRibbonType, "ParseButtonsFromRibbon",
            ribbonXml, "account", "MainTab.Actions", locLabels).Cast<object>().ToList();

        Assert.AreEqual(3, buttons.Count);
        Assert.AreEqual("devkit.account.More.HomepageGrid.FlyoutAnchor", GetProperty<string>(buttons[0], "Id"));
        Assert.AreEqual("Open Account", GetProperty<string>(buttons[1], "Label"));
        Assert.IsTrue(GetProperty<bool>(buttons[1], "IsOob"));
        Assert.IsTrue(GetProperty<bool>(buttons[0], "IsCustom"));

        Assert.AreEqual("Fallback", InvokeStatic<string>(ManageRibbonType, "ResolveLabel", "$LocLabels:missing.Fallback", "button", null));
        Assert.AreEqual("Save", InvokeStatic<string>(ManageRibbonType, "ResolveLabel", "$Resources:Ribbon.Form.Save", "button", null));
        Assert.AreEqual("email", InvokeStatic<string>(ManageRibbonType, "ResolveLabel", "{!EntityDisplayName:email}", "button", null));
        Assert.AreEqual("Custom", InvokeStatic<string>(ManageRibbonType, "ExtractReadableNameFromId", "Mscrm.Form.account.Custom"));

        var zipped = ZipRibbonXml(ribbonXml);
        var unzipped = InvokeStatic<string>(ManageRibbonType, "UnzipRibbonXml", zipped);
        StringAssert.Contains(unzipped, "RibbonDiffXml");
    }

    private static object CreateAppValidation(string status, List<string> errors, List<string> warnings)
    {
        var type = ManageAppType.GetNestedType("AppValidationResult", BindingFlags.NonPublic)!;
        var instance = Activator.CreateInstance(type)!;
        type.GetProperty("Status")!.SetValue(instance, status);
        type.GetProperty("Errors")!.SetValue(instance, errors);
        type.GetProperty("Warnings")!.SetValue(instance, warnings);
        return instance;
    }

    private static byte[] ZipRibbonXml(string ribbonXml)
    {
        using var ms = new MemoryStream();
        using (var zip = new ZipArchive(ms, ZipArchiveMode.Create, true))
        {
            var entry = zip.CreateEntry("RibbonXml.xml");
            using var stream = entry.Open();
            var bytes = Encoding.UTF8.GetBytes(ribbonXml);
            stream.Write(bytes, 0, bytes.Length);
        }
        return ms.ToArray();
    }

    private static T InvokeStatic<T>(Type type, string methodName, params object?[] args)
    {
        var method = type.GetMethod(methodName, BindingFlags.Static | BindingFlags.NonPublic)!;
        return (T)method.Invoke(null, args)!;
    }

    private static T InvokeStaticWithArgs<T>(Type type, string methodName, object?[] args)
    {
        var method = type.GetMethod(methodName, BindingFlags.Static | BindingFlags.NonPublic)!;
        return (T)method.Invoke(null, args)!;
    }

    private static T InvokeInstance<T>(object instance, Type type, string methodName, params object?[] args)
    {
        var method = type.GetMethod(methodName, BindingFlags.Instance | BindingFlags.NonPublic)!;
        return (T)method.Invoke(instance, args)!;
    }

    private static T GetTupleField<T>(object tuple, string fieldName)
        => (T)tuple.GetType().GetField(fieldName)!.GetValue(tuple)!;

    private static T GetProperty<T>(object instance, string propertyName)
        => (T)instance.GetType().GetProperty(propertyName)!.GetValue(instance)!;
}
