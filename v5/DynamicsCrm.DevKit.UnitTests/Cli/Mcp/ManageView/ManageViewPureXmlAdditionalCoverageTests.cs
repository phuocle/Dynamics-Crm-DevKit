using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections;
using System.Linq;
using System.Reflection;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageView;

[TestClass]
public sealed class ManageViewPureXmlAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(ManageViewTool);
    private const BindingFlags PrivateStatic = BindingFlags.NonPublic | BindingFlags.Static;
    private const BindingFlags PrivateInstance = BindingFlags.NonPublic | BindingFlags.Instance;

    [TestMethod]
    public void XmlTraversalHelpers_KeepConditionsScopedToTheirOwningEntity()
    {
        var entity = XElement.Parse("<entity><filter><condition attribute='name'/></filter><link-entity name='contact'><filter><condition attribute='fullname'/></filter><link-entity name='systemuser'><condition attribute='internalemailaddress'/></link-entity></link-entity></entity>");
        var link = entity.Element("link-entity")!;

        var mainConditions = ((IEnumerable)InvokeStatic("ConditionsOwnedBy", entity)).Cast<XElement>().ToList();
        CollectionAssert.AreEqual(new[] { "name" }, mainConditions.Select(c => c.Attribute("attribute")!.Value).ToList());
        var linkConditions = ((IEnumerable)InvokeStatic("ConditionsOwnedBy", link)).Cast<XElement>().ToList();
        CollectionAssert.AreEqual(new[] { "fullname" }, linkConditions.Select(c => c.Attribute("attribute")!.Value).ToList());

        var direct = ((IEnumerable)InvokeStatic("ElementsByLocalName", entity, "filter")).Cast<XElement>().ToList();
        Assert.AreEqual(1, direct.Count);
        Assert.AreEqual(2, ((IEnumerable)InvokeStatic("DescendantsByLocalName", entity, "link-entity")).Cast<XElement>().Count());
        Assert.AreEqual(0, ((IEnumerable)InvokeStatic("ElementsByLocalName", null!, "filter")).Cast<XElement>().Count());
    }

    [TestMethod]
    public void ViewXmlHelpers_CoverDistanceCellsAndQueryTypeMappings()
    {
        Assert.IsTrue(InvokeStatic<bool>("LevenshteinClose", "Account", "accounts"));
        Assert.IsTrue(InvokeStatic<bool>("LevenshteinClose", "name", "nane"));
        Assert.IsFalse(InvokeStatic<bool>("LevenshteinClose", "account", "very-long-unrelated-name"));
        Assert.IsFalse(InvokeStatic<bool>("LevenshteinClose", "account", "contact"));

        var sortable = (XElement)InvokeStatic("BuildCell", "name", 150, false)!;
        Assert.IsNull(sortable.Attribute("disableSorting"));
        var unsortable = (XElement)InvokeStatic("BuildCell", "statecode", 125, true)!;
        Assert.AreEqual("1", unsortable.Attribute("disableSorting")!.Value);
        Assert.AreEqual("Custom", InvokeStatic<string>("MapQueryType", 131072));
        Assert.AreEqual("Lookup", InvokeStatic<string>("MapQueryType", 1));
        Assert.AreEqual("AdvancedSearch", InvokeStatic<string>("MapQueryType", 2));
    }

    [TestMethod]
    public void DetailFormatter_CoversSystemQuickFindAndPersonalEmptyValues()
    {
        var systemId = Guid.NewGuid();
        var system = new Entity("savedquery", systemId)
        {
            ["savedqueryid"] = systemId,
            ["name"] = "Quick accounts",
            ["querytype"] = 4,
            ["isdefault"] = true,
            ["ismanaged"] = true,
            ["returnedtypecode"] = "account",
            ["statecode"] = new OptionSetValue(0),
            ["description"] = "Find accounts",
            ["fetchxml"] = "<fetch><entity name='account'><filter isquickfindfields='1'><condition attribute='name'/></filter></entity></fetch>",
            ["layoutxml"] = "<grid><row><cell name='name' width='200'/><cell name='accountnumber' ishidden='1'/></row></grid>",
            ["layoutjson"] = "{ }"
        };
        var tool = new ManageViewTool(null!, new McpDryRunOptions(), new McpExecutionContext(true));
        var systemResult = InvokeInstance(tool, "BuildViewDetailResult", system);
        StringAssert.Contains(Text(systemResult), "QuickFind view, system, default, active, 2 columns (1 hidden)");

        var personalId = Guid.NewGuid();
        var personal = new Entity("userquery", personalId)
        {
            ["userqueryid"] = personalId,
            ["name"] = "My view",
            ["querytype"] = 64,
            ["returnedtypecode"] = "contact",
            ["statecode"] = new OptionSetValue(1)
        };
        var personalResult = InvokeInstance(tool, "BuildViewDetailResult", personal);
        StringAssert.Contains(Text(personalResult), "SubGrid view, personal, inactive");
    }

    private static object? InvokeStatic(string name, params object?[] args) =>
        ToolType.GetMethods(PrivateStatic).Single(m => m.Name == name && m.GetParameters().Length == args.Length).Invoke(null, args);

    private static T InvokeStatic<T>(string name, params object?[] args) => (T)InvokeStatic(name, args)!;

    private static ModelContextProtocol.Protocol.CallToolResult InvokeInstance(ManageViewTool tool, string name, params object?[] args) =>
        (ModelContextProtocol.Protocol.CallToolResult)ToolType.GetMethods(PrivateInstance)
            .Single(m => m.Name == name && m.GetParameters().Length == args.Length).Invoke(tool, args)!;

    private static string Text(ModelContextProtocol.Protocol.CallToolResult result) =>
        ((ModelContextProtocol.Protocol.TextContentBlock)result.Content.First()).Text ?? "";
}
