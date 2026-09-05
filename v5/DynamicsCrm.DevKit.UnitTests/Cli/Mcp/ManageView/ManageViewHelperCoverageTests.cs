using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Collections;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageView;

[TestClass]
public sealed class ManageViewHelperCoverageTests
{
    private static readonly Type ToolType = typeof(ManageViewTool);
    private static readonly BindingFlags PrivateStatic = BindingFlags.NonPublic | BindingFlags.Static;
    private static readonly BindingFlags PrivateInstance = BindingFlags.NonPublic | BindingFlags.Instance;

    private static object InvokeStatic(string name, params object[] args) =>
        ToolType.GetMethod(name, PrivateStatic)!.Invoke(null, args);

    private static T InvokeStatic<T>(string name, params object[] args) =>
        (T)InvokeStatic(name, args)!;

    private static object InvokeInstance(ManageViewTool tool, string name, params object[] args) =>
        ToolType.GetMethod(name, PrivateInstance)!.Invoke(tool, args);

    [TestMethod]
    public void ViewFormatters_CoverListsDetailsAndColumnBranches()
    {
        var systemViews = new EntityCollection().Entities;
        var systemId = Guid.NewGuid();
        systemViews.Add(new Entity("savedquery", systemId)
        {
            ["savedqueryid"] = systemId,
            ["name"] = "Active Accounts",
            ["querytype"] = 4,
            ["isdefault"] = true,
            ["statecode"] = new OptionSetValue(0),
            ["ismanaged"] = false,
            ["description"] = "Searchable accounts"
        });
        var personalViews = new EntityCollection().Entities;
        var personalId = Guid.NewGuid();
        personalViews.Add(new Entity("userquery", personalId)
        {
            ["userqueryid"] = personalId,
            ["name"] = "My Accounts",
            ["querytype"] = 64,
            ["statecode"] = new OptionSetValue(1),
            ["description"] = "Personal"
        });

        var entries = (IEnumerable)InvokeStatic("BuildViewListEntries", systemViews, personalViews);
        var list = entries.Cast<object>().ToList();
        Assert.AreEqual(2, list.Count);
        Assert.AreEqual("system", Property<string>(list[0], "Source"));
        Assert.AreEqual("personal", Property<string>(list[1], "Source"));
        Assert.AreEqual("QuickFind", Property<string>(list[0], "QueryTypeName"));
        Assert.IsNull(Property<object>(list[1], "IsDefault"));

        var layout = "<grid><row name='result' id='accountid'><cell name='name' width='150' ishidden='1' imageproviderwebresource='icon.js' imageproviderfunctionname='getIcon' /></row></grid>";
        var columns = (IEnumerable)InvokeStatic("ParseViewColumns", layout);
        var column = columns.Cast<object>().Single();
        Assert.AreEqual("name", Property<string>(column, "Name"));
        Assert.AreEqual("150", Property<string>(column, "Width"));
        Assert.IsTrue(Property<bool>(column, "IsHidden"));
        Assert.IsNull(InvokeStatic("ParseViewColumns", ""));

        Assert.AreEqual(systemId, InvokeStatic<Guid>("GetViewId", systemViews[0]));
        Assert.AreEqual(personalId, InvokeStatic<Guid>("GetViewId", personalViews[0]));
        Assert.AreEqual("system", InvokeStatic<string>("GetViewSource", systemViews[0]));
        Assert.AreEqual("personal", InvokeStatic<string>("GetViewSource", personalViews[0]));
        Assert.AreEqual("Public", InvokeStatic<string>("MapQueryType", 0));
        Assert.AreEqual("Other(77)", InvokeStatic<string>("MapQueryType", 77));
    }

    [TestMethod]
    public void UpdatedPartsAndResolutionDtos_CoverAllCombinations()
    {
        Assert.AreEqual("LayoutXML (regenerated from FetchXML) + FetchXML", InvokeStatic<string>("DetermineUpdatedParts", false, true, true));
        Assert.AreEqual("LayoutXML (cell patch) + FetchXML", InvokeStatic<string>("DetermineUpdatedParts", true, true, false));
        Assert.AreEqual("LayoutXML only", InvokeStatic<string>("DetermineUpdatedParts", false, false, false));
        Assert.AreEqual("LayoutXML (cell patch)", InvokeStatic<string>("DetermineUpdatedParts", true, false, false));

        Assert.AreEqual("manage_view action='update' blocked on 'account' — name resolution failed (1 error(s)). First: missing",
            InvokeStatic<string>("NameResolutionMessage", "update", "account", new List<string> { "missing" }));

        var dto = InvokeStatic<object>("BuildBlockedValidationDto", "update", "account", Guid.Empty, "My View",
            new List<string> { "bad layout" }, new List<string> { "warning" });
        Assert.AreEqual("blocked_validation", Property<string>(dto, "Status"));
        Assert.IsNull(Property<object>(dto, "ViewId"));
        CollectionAssert.AreEqual(new[] { "bad layout", "warning" }, Property<List<string>>(dto, "ValidationErrors"));

        var dtoWithId = InvokeStatic<object>("BuildBlockedValidationDto", "rename", "account", Guid.NewGuid(), "Renamed",
            new List<string>(), null);
        Assert.IsNotNull(Property<string>(dtoWithId, "ViewId"));
        Assert.IsNull(Property<List<string>>(dtoWithId, "ValidationErrors"));
    }

    [TestMethod]
    public void XmlParsingHelpers_CoverQuickFindAliasesAndFieldCollections()
    {
        Assert.AreEqual(0, InvokeStatic<List<string>>("ExtractQuickFindColumns", "").Count);
        Assert.AreEqual(0, InvokeStatic<List<string>>("ExtractQuickFindColumns", "<fetch><entity name='account' /></fetch>").Count);
        var qf = InvokeStatic<List<string>>("ExtractQuickFindColumns",
            "<fetch><entity name='account'><filter isquickfindfields='1'><condition attribute='name'/><condition attribute='NAME'/><condition /></filter></entity></fetch>");
        CollectionAssert.AreEqual(new[] { "name" }, qf);

        var aliases = InvokeStatic<Dictionary<string, string>>("BuildFetchAliasEntityMap",
            "<fetch><entity name='account'><link-entity name='contact' alias='c'><link-entity name='systemuser' alias='u' /></link-entity></entity></fetch>");
        Assert.AreEqual("contact", aliases["c"]);
        Assert.AreEqual("systemuser", aliases["u"]);
        Assert.AreEqual(0, InvokeStatic<Dictionary<string, string>>("BuildFetchAliasEntityMap", "").Count);

        var args = new object[] { "c.fullname", null, null };
        Assert.IsTrue(InvokeStatic<bool>("TrySplitAliasedField", args));
        Assert.AreEqual("c", args[1]);
        Assert.AreEqual("fullname", args[2]);
        foreach (var value in new[] { "", ".name", "c.", "name" })
        {
            var invalidArgs = new object[] { value, null, null };
            Assert.IsFalse(InvokeStatic<bool>("TrySplitAliasedField", invalidArgs));
        }

        var entity = XElement.Parse("<entity name='account'><attribute name='name'/><attribute /><order attribute='accountnumber'/><filter><condition attribute='statecode'/></filter><link-entity name='contact'><filter><condition attribute='fullname'/></filter></link-entity></entity>");
        var names = InvokeStatic<HashSet<string>>("ExtractFieldNames", entity);
        CollectionAssert.AreEquivalent(new[] { "name", "accountnumber", "statecode", "fullname" }, names.ToArray());
        Assert.IsTrue(InvokeStatic<bool>("IsLocalName", new XElement("NAME"), "name"));
        Assert.IsFalse(InvokeStatic<bool>("IsLocalName", null, "name"));
    }

    [TestMethod]
    public void CellUpdateParserAndIconValidation_CoverValidationBranches()
    {
        Assert.IsNull(TupleField(InvokeStatic("ParseCellUpdates", "not json"), "Item1"));
        StringAssert.Contains(TupleField<string>(InvokeStatic("ParseCellUpdates", "not json"), "Item2"), "not valid JSON");
        StringAssert.Contains(TupleField<string>(InvokeStatic("ParseCellUpdates", "[]"), "Item2"), "empty");
        StringAssert.Contains(TupleField<string>(InvokeStatic("ParseCellUpdates", "[{\"cell_name\":\" \" ,\"set_attributes\":{\"width\":\"100\"}}]"), "Item2"), "missing required");
        StringAssert.Contains(TupleField<string>(InvokeStatic("ParseCellUpdates", "[{\"cell_name\":\"name\",\"set_attributes\":{\"width\":\"100\"}},{\"cell_name\":\"NAME\",\"remove_attributes\":[\"x\"]}]"), "Item2"), "duplicate");
        StringAssert.Contains(TupleField<string>(InvokeStatic("ParseCellUpdates", "[{\"cell_name\":\"name\"}]"), "Item2"), "at least one");
        StringAssert.Contains(TupleField<string>(InvokeStatic("ParseCellUpdates", "[{\"cell_name\":\"name\",\"set_attributes\":{\"name\":\"x\"}}]"), "Item2"), "protected");
        StringAssert.Contains(TupleField<string>(InvokeStatic("ParseCellUpdates", "[{\"cell_name\":\"name\",\"remove_attributes\":[\"width\"]}]"), "Item2"), "protected");
        Assert.IsNull(TupleField<string>(InvokeStatic("ParseCellUpdates", "[{\"cell_name\":\"name\",\"set_attributes\":{\"width\":\"100\"}}]"), "Item2"));

        var tool = new ManageViewTool(null!, new McpDryRunOptions(), new McpExecutionContext(true), null!);
        var fnError = (string)InvokeInstance(tool, "NormalizeAndValidateIconUpdates", new List<CellUpdateInstruction>
        {
            new() { CellName = "name", SetAttributes = new Dictionary<string, string> { ["imageproviderfunctionname"] = "bad function" } }
        });
        StringAssert.Contains(fnError, "without whitespace");
        var emptyWrError = (string)InvokeInstance(tool, "NormalizeAndValidateIconUpdates", new List<CellUpdateInstruction>
        {
            new() { CellName = "name", SetAttributes = new Dictionary<string, string> { ["imageproviderwebresource"] = "  " } }
        });
        StringAssert.Contains(emptyWrError, "is empty");
        var missingNameError = (string)InvokeInstance(tool, "NormalizeAndValidateIconUpdates", new List<CellUpdateInstruction>
        {
            new() { CellName = "name", SetAttributes = new Dictionary<string, string> { ["imageproviderwebresource"] = "$webresource:" } }
        });
        StringAssert.Contains(missingNameError, "prefix but no web resource");
        Assert.IsNull(InvokeInstance(tool, "NormalizeAndValidateIconUpdates", new List<CellUpdateInstruction>()));
    }

    [TestMethod]
    public void BuildLayoutHelpers_CoverAliasesMissingColumnsAndWidths()
    {
        var meta = new EntityMetadata { LogicalName = "account" };
        SetMetadata(meta, "PrimaryIdAttribute", "accountid");
        SetMetadata(meta, "PrimaryNameAttribute", "name");
        SetMetadata(meta, "ObjectTypeCode", (int?)1);
        var attributes = new AttributeMetadata[]
        {
            Attribute(new StringAttributeMetadata { LogicalName = "name", Format = StringFormat.Text }, AttributeTypeCode.String),
            Attribute(new StringAttributeMetadata { LogicalName = "email", Format = StringFormat.Email }, AttributeTypeCode.String),
            Attribute(new BooleanAttributeMetadata { LogicalName = "active" }, AttributeTypeCode.Boolean),
            Attribute(new DateTimeAttributeMetadata { LogicalName = "createdon" }, AttributeTypeCode.DateTime)
        };
        SetMetadata(meta, "Attributes", attributes);

        var normalized = InvokeStatic<string>("EnsureLayoutBuildableFetchXml",
            "<fetch><entity name='account'><attribute name='accountid'/><link-entity name='contact'><attribute name='fullname'/></link-entity><link-entity name='contact'><attribute name='emailaddress1'/></link-entity></entity></fetch>", meta);
        StringAssert.Contains(normalized, "alias=\"contact\"");
        StringAssert.Contains(normalized, "alias=\"contact2\"");
        var unchanged = InvokeStatic<string>("EnsureLayoutBuildableFetchXml", "<fetch><entity name='account' /></fetch>", meta);
        StringAssert.Contains(unchanged, "name=\"name\"");

        var tool = new ManageViewTool(null!, new McpDryRunOptions(), new McpExecutionContext(true), null!);
        var built = InvokeInstance(tool, "BuildLayoutXmlFromFetch", "account",
            "<fetch><entity name='account'><attribute name='accountid'/><attribute name='name'/><attribute name='email'/><attribute name='active'/><attribute name='createdon'/></entity></fetch>", meta);
        Assert.AreEqual(4, TupleField<int>(built, "Item2"));
        StringAssert.Contains(TupleField<string>(built, "Item1"), "name=\"email\"");
        var noEntity = InvokeInstance(tool, "BuildLayoutXmlFromFetch", "account", "<fetch />", meta);
        StringAssert.Contains(TupleField<string>(noEntity, "Item3"), "no <entity>");
        var noColumns = InvokeInstance(tool, "BuildLayoutXmlFromFetch", "account", "<fetch><entity name='account'><attribute name='accountid'/></entity></fetch>", meta);
        StringAssert.Contains(TupleField<string>(noColumns, "Item3"), "no displayable");

        Assert.AreEqual(300, InvokeStatic<int>("GetColumnWidth", new StringAttributeMetadata { LogicalName = "name" }, "name", "name"));
        Assert.AreEqual(100, InvokeStatic<int>("GetColumnWidth", new StringAttributeMetadata { Format = StringFormat.Phone }, "phone", null));
        Assert.AreEqual(200, InvokeStatic<int>("GetColumnWidth", new StringAttributeMetadata { Format = StringFormat.Email }, "email", null));
        Assert.AreEqual(75, InvokeStatic<int>("GetColumnWidth", new BooleanAttributeMetadata(), "active", null));
        Assert.AreEqual(250, InvokeStatic<int>("GetColumnWidth", new MemoAttributeMetadata(), "notes", null));
        Assert.AreEqual(150, InvokeStatic<int>("GetColumnWidth", null, "unknown", null));
    }

    [TestMethod]
    public async Task PublicValidation_ReturnsErrorsBeforeDataverse()
    {
        var tool = new ManageViewTool(null!, new McpDryRunOptions(), new McpExecutionContext(true), null!);
        var missingAction = await tool.manage_view(null!, "", "account");
        StringAssert.Contains(Text(missingAction), "action is required");
        var missingEntity = await tool.manage_view(null!, "list", "");
        StringAssert.Contains(Text(missingEntity), "entity_name is required");
        var badGuid = await tool.manage_view(null!, "detail", "account", view_id: "not-guid");
        StringAssert.Contains(Text(badGuid), "not a valid GUID");
    }

    private static T Property<T>(object value, string name) => (T)value.GetType().GetProperty(name)!.GetValue(value)!;

    private static T TupleField<T>(object value, string name) => (T)value.GetType().GetField(name)!.GetValue(value)!;

    private static object TupleField(object value, string name) => value.GetType().GetField(name)!.GetValue(value);

    private static string Text(CallToolResult result) =>
        result.Content?.FirstOrDefault() is TextContentBlock block ? block.Text ?? "" : "";

    private static AttributeMetadata Attribute(AttributeMetadata attribute, AttributeTypeCode type)
    {
        typeof(AttributeMetadata).GetProperty(nameof(AttributeMetadata.AttributeType))!.SetValue(attribute, (AttributeTypeCode?)type);
        return attribute;
    }

    private static void SetMetadata(EntityMetadata metadata, string propertyName, object value) =>
        typeof(EntityMetadata).GetProperty(propertyName)!.SetValue(metadata, value);
}
