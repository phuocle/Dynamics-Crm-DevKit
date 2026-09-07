using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Logic;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using static DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure.TestMetadata;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Shared;

/// <summary>
/// TsForm code generation over pre-seeded XrmHelper static state (forms,
/// process forms, metadata) so no SDK call is needed. The FormXml fixtures
/// exercise every control class id, tab/section interface generation, header
/// fields, navigation links, control-description remapping, duplicate
/// schema-name suffixing, quick-create forms, and BPF process fields.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class TsFormFakeXrmEasyCoverageTests
{
    private const string Logical = "tsform_ent";

    [TestInitialize]
    public void Setup()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        XrmHelper.EntitiesFormXml = new List<SystemForm>();
        XrmHelper.EntitiesProcessForm = new List<ProcessForm>
        {
            new()
            {
                EntityLogicalName = Logical,
                Name = "BPF Process",
                xaml = BpfXaml()
            }
        };
        XrmHelper.EntitiesMetadata.Add(BuildEntityMetadata());
    }

    private static EntityMetadata BuildEntityMetadata()
    {
        var attributes = new List<AttributeMetadata>
        {
            WithDescription(String("name", "Name"), "The account name"),
            Money("revenue", "Revenue"),
            Boolean("creditonhold", "Credit On Hold"),
            Integer("numberofemployees", "Employees"),
            Double("address1_latitude", "Latitude"),
            Decimal("new_dec", "Dec"),
            DateOnly("new_dateonly", "Important Date"),
            DateTime("createdon", "Created On"),
            Memo("description", "Description"),
            Lookup("parentaccountid", "Parent Account"),
            WithType(Lookup("primarycontactid", "Primary Contact"), AttributeTypeCode.Customer),
            Picklist("industrycode", "Industry", (1, "Accounting"), (2, "Agriculture")),
            WithType(Picklist("statecode", "Status"), AttributeTypeCode.State),
            WithType(Picklist("statuscode", "Status Reason"), AttributeTypeCode.Status),
            WithType(Lookup("customers", "Customers"), AttributeTypeCode.PartyList),
            String("emailaddress1", "Email"),
            String("websiteurl", "Website"),
            String("telephone1", "Phone"),
            String("tickersymbol", "Ticker"),
            Integer("new_duration", "Duration"),
            Integer("new_language", "Language"),
            Integer("new_timezone", "Time Zone"),
            Integer("new_otc", "Object Type"),
            Integer("new_mask", "Mask"),
            String("new_image", "Image"),
            String("new_file", "File"),
            Memo("new_memo2", "Memo Two"),
            String("new_memo3", "Memo Three")
        };
        return Entity(Logical, "TsForm Ent", attributes.ToArray());
    }

    private static string Control(string id, string classId, string? datafieldname = null, string? uniqueid = null)
    {
        var data = datafieldname != null ? $" datafieldname=\"{datafieldname}\"" : "";
        var uid = uniqueid != null ? $" uniqueid=\"{uniqueid}\"" : "";
        return $"<cell><control id=\"{id}\" classid=\"{{{classId}}}\"{data}{uid} /></cell>";
    }

    private static string Section(string name, string label, params string[] cells) =>
        $@"<section name=""{name}"" showlabel=""true"">
             <labels><label description=""{label}"" languagecode=""1033"" /></labels>
             <rows>{string.Join("", cells.Select(c => $"<row>{c}</row>"))}</rows>
           </section>";

    private static string Tab(string name, string label, string sections) =>
        $@"<tab name=""{name}"" expanded=""true"">
             <labels><label description=""{label}"" languagecode=""1033"" /></labels>
             <columns><column width=""100%""><sections>{sections}</sections></column></columns>
           </tab>";

    private static string MainFormXml() =>
        $@"<form>
          <tabs>
            {Tab("tab_general", "General",
                Section("section_general", "General Section",
                    Control("name", ControlClassId.SINGLE_LINE_OF_TEXT, "name"),
                    Control("emailaddress1", ControlClassId.SINGLE_LINE_OF_TEXT_EMAIL, "emailaddress1"),
                    Control("websiteurl", ControlClassId.SINGLE_LINE_OF_TEXT_URL, "websiteurl"),
                    Control("telephone1", ControlClassId.SINGLE_LINE_OF_TEXT_PHONE, "telephone1"),
                    Control("tickersymbol", ControlClassId.SINGLE_LINE_OF_TEXT_TICKER_SYMBOL, "tickersymbol"),
                    Control("revenue", ControlClassId.CURRENCY, "revenue"),
                    Control("creditonhold", ControlClassId.TWO_OPTIONS, "creditonhold"),
                    Control("creditonhold2", ControlClassId.TWO_OPTIONS_2, "creditonhold"),
                    Control("numberofemployees", ControlClassId.WHOLE_NUMBER, "numberofemployees"),
                    Control("new_duration", ControlClassId.WHOLE_NUMBER_DURATION, "new_duration"),
                    Control("new_language", ControlClassId.WHOLE_NUMBER_LANGUAGE, "new_language"),
                    Control("new_language2", ControlClassId.WHOLE_NUMBER_LANGUAGE_2, "new_language"),
                    Control("new_timezone", ControlClassId.WHOLE_NUMBER_TIMEZONE, "new_timezone"),
                    Control("new_otc", ControlClassId.WHOLE_NUMBER_OBJECT_TYPE_CODE, "new_otc"),
                    Control("new_mask", ControlClassId.WHOLE_NUMBER_ACCESS_RIGHT_MASK, "new_mask"),
                    Control("address1_latitude", ControlClassId.FLOATING_POINT_NUMBER, "address1_latitude"),
                    Control("new_dec", ControlClassId.DECIMAL_NUMBER, "new_dec"),
                    Control("createdon", ControlClassId.DATE_TIME, "createdon"),
                    Control("new_dateonly", ControlClassId.DATE_TIME, "new_dateonly"),
                    Control("description", ControlClassId.MULTI_LINES_OF_TEXT, "description"),
                    Control("new_memo2", ControlClassId.MULTI_LINES_OF_TEXT_MEMO, "new_memo2"),
                    Control("new_memo3", ControlClassId.MULTI_LINES_OF_TEXT_DESCRIPTION, "new_memo3"),
                    Control("new_multiline", ControlClassId.MULTI_LINES_OF_TEXT_MAX, "new_memo2"),
                    Control("new_multimemo", ControlClassId.MULTI_LINES_OF_TEXT_MEMO_2, "new_memo2"),
                    Control("parentaccountid", ControlClassId.LOOKUP, "parentaccountid"),
                    Control("primarycontactid", ControlClassId.LOOKUP_2, "primarycontactid"),
                    Control("parentaccountid2", ControlClassId.LOOKUP_3, "parentaccountid"),
                    Control("primarycontactid2", ControlClassId.LOOKUP_4, "primarycontactid"),
                    Control("customers", ControlClassId.PARTY_LISTS, "customers"),
                    Control("industrycode", ControlClassId.STATUS_CODE, "industrycode"),
                    Control("statecode", ControlClassId.STATE_CODE, "statecode"),
                    Control("statuscode", ControlClassId.STATUS_CODE, "statuscode"),
                    Control("new_multioption", ControlClassId.MULTI_OPTIONSET, "industrycode"),
                    Control("new_regrade", ControlClassId.REGRADING, "industrycode"),
                    Control("new_file", ControlClassId.FILE, "new_file"),
                    Control("new_image", ControlClassId.IMAGE, "new_image"),
                    Control("WebResource_TS", ControlClassId.WEB_RESOURCE, null, "WebResource_TS"),
                    Control("WebResource_Plain", ControlClassId.WEB_RESOURCE, null),
                    Control("IFRAME_TS", ControlClassId.IFRAME, null, "IFRAME_TS"),
                    Control("notes_control", ControlClassId.NOTE),
                    Control("timer_control", ControlClassId.TIMER, null, "timer_control"),
                    Control("map_control", ControlClassId.MAP_CONTROL, null, "map_control"),
                    Control("action_cards", ControlClassId.ACTION_CARDS, null, "action_cards"),
                    Control("powerbi_control", ControlClassId.POWERBI, null, "powerbi_control"),
                    Control("email_engagement", ControlClassId.EMAIL_ENGAGEMENT_ACTIONS, null, "email_engagement"),
                    Control("email_recipient", ControlClassId.EMAIL_RECIPIENT_ACTIVITY, null, "email_recipient"),
                    Control("aci_widget", ControlClassId.ACI_WIDGET, null, "aci_widget"),
                    Control("name_again", ControlClassId.SINGLE_LINE_OF_TEXT, "name")))},
            {Tab("tab_details", "Details",
                Section("ref_pan_bogus", "Ref Panel",
                    Control("name_ref", ControlClassId.SINGLE_LINE_OF_TEXT, "name"))
                + Section("section_details", "Details Section",
                    Control("primarycontactid", ControlClassId.LOOKUP, "primarycontactid")))}
          </tabs>
          <header>
            <rows>
              <row>{Control("header_name", ControlClassId.SINGLE_LINE_OF_TEXT, "name")}</row>
              <row>{Control("header_revenue", ControlClassId.CURRENCY, "revenue")}</row>
            </rows>
          </header>
          <Navigation>
            <NavBar>
              <NavBarByRelationshipItem Id=""nav_contacts"">
                <Titles><Title Text=""Contacts"" LCID=""1033"" /></Titles>
              </NavBarByRelationshipItem>
              <NavBarByRelationshipItem Id=""nav_opportunities"">
                <Titles><Title Text=""Opportunities"" LCID=""1033"" /></Titles>
              </NavBarByRelationshipItem>
            </NavBar>
          </Navigation>
          <controlDescriptions>
            <controlDescription forControl=""WebResource_TS"">
              <customControl id=""{ControlClassId.IFRAME.ToLowerInvariant()}"" />
            </controlDescription>
          </controlDescriptions>
        </form>";

    private static string QuickCreateFormXml() =>
        $@"<form>
          <tabs>
            {Tab("tab_general", "General",
                Section("section_general", "General",
                    Control("qc_name", ControlClassId.SINGLE_LINE_OF_TEXT, "name"),
                    Control("qc_revenue", ControlClassId.CURRENCY, "revenue")))}
          </tabs>
          <header />
        </form>";

    private static string BpfXaml() =>
        $@"<Activity xmlns:mxswa=""http://schemas.microsoft.com/crm/2014/workflow/activities"" xmlns:x=""http://schemas.microsoft.com/winfx/2006/xaml"">
          <mxswa:Workflow>
            <mxswa:ActivityReference DisplayName=""Set tsform_ent revenue"">
              <mxswa:Property DataFieldName=""revenue"" />
            </mxswa:ActivityReference>
            <mxswa:ActivityReference DisplayName=""Set tsform_ent industrycode"">
              <mxswa:Property DataFieldName=""industrycode"" />
            </mxswa:ActivityReference>
            <mxswa:ActivityReference DisplayName=""Set other_entity name"">
              <mxswa:Property DataFieldName=""name"" />
            </mxswa:ActivityReference>
            <mxswa:ActivityReference DisplayName=""SingleToken"">
              <mxswa:Property DataFieldName=""name"" />
            </mxswa:ActivityReference>
          </mxswa:Workflow>
        </Activity>";

    private SystemForm Main => new()
    {
        Name = "TsForm Main",
        EntityLogicalName = Logical,
        FormType = FormType.Main,
        FormXml = MainFormXml()
    };

    private SystemForm QuickCreate => new()
    {
        Name = "Quick Create",
        EntityLogicalName = Logical,
        FormType = FormType.QuickCreate,
        IsQuickCreate = true,
        FormXml = QuickCreateFormXml()
    };

    [TestMethod]
    public async Task Generate_MainForm_WithEveryControlType_AndBpfFields()
    {
        XrmHelper.EntitiesFormXml.Add(Main);

        var code = await TsForm.GetTsFormCodeAsync(null, XrmHelper.EntitiesMetadata[0]);

        Assert.IsNotNull(code);
        StringAssert.Contains(code, "export namespace", "entity namespace is emitted");
        StringAssert.Contains(code, "Itab_generalTabSections", "tab section interfaces are generated");
        StringAssert.Contains(code, "Itab_generalTab", "tab interfaces are generated");
        StringAssert.Contains(code, "Itab_detailsTabSections", "second tab interfaces are generated");
        StringAssert.Contains(code, "ITabs", "ITabs interface is generated");

        // attribute-backed control types
        StringAssert.Contains(code, "DevKit.Controls.Money", "currency control");
        StringAssert.Contains(code, "DevKit.Controls.Boolean", "two-option control");
        StringAssert.Contains(code, "DevKit.Controls.Integer", "whole number control");
        StringAssert.Contains(code, "DevKit.Controls.Double", "floating point control");
        StringAssert.Contains(code, "DevKit.Controls.Decimal", "decimal control");
        StringAssert.Contains(code, "DevKit.Controls.DateTime", "date-and-time control");
        StringAssert.Contains(code, "DevKit.Controls.DateOnly", "date-only control");
        StringAssert.Contains(code, "DevKit.Controls.Lookup", "lookup/customer/partylist controls");
        StringAssert.Contains(code, "DevKit.Controls.OptionSet", "picklist/state/status controls");
        StringAssert.Contains(code, "DevKit.Controls.Memo", "memo controls");

        // virtual controls
        StringAssert.Contains(code, "DevKit.Controls.WebResource");
        StringAssert.Contains(code, "DevKit.Controls.IFrame", "both the iframe control and the remapped web resource");
        StringAssert.Contains(code, "DevKit.Controls.Note");
        StringAssert.Contains(code, "DevKit.Controls.Timer");
        StringAssert.Contains(code, "DevKit.Controls.Map");
        StringAssert.Contains(code, "DevKit.Controls.ActionCards");
        StringAssert.Contains(code, "DevKit.Controls.PowerBi");
        StringAssert.Contains(code, "DevKit.Controls.EmailEngagement");
        StringAssert.Contains(code, "DevKit.Controls.EmailRecipient");
        StringAssert.Contains(code, "DevKit.Controls.AciWidget");
        StringAssert.Contains(code, "DevKit.Controls.File");
        StringAssert.Contains(code, "DevKit.Controls.Image");

        // duplicate attribute gets a suffixed schema name
        StringAssert.Contains(code, "Name1:", "second control bound to 'name' gets Name1");

        // field comments come from Description, then DisplayName
        StringAssert.Contains(code, "The account name");

        // BPF process fields surface as a process interface
        StringAssert.Contains(code, "IBPF_Process", "business process flow interface is emitted");

        // header + navigation
        StringAssert.Contains(code, "IHeader");
        StringAssert.Contains(code, "nav_contacts");
        StringAssert.Contains(code, "nav_opportunities");
    }

    [TestMethod]
    public async Task Generate_QuickCreate_NestsInterfaces()
    {
        XrmHelper.EntitiesFormXml.Add(QuickCreate);

        var code = await TsForm.GetTsFormCodeAsync(null, XrmHelper.EntitiesMetadata[0]);

        Assert.IsNotNull(code);
        var expectedNs = Helper.SafeIdentifier(Helper.GetFormName("Quick Create", XrmHelper.EntitiesMetadata[0].SchemaName));
        StringAssert.Contains(code, $"export namespace {expectedNs}", "quick create gets its own nested namespace");
        StringAssert.Contains(code, "DevKit.Controls.Money");
    }

    [TestMethod]
    public async Task Generate_MainAndQuickCreate_Together_GeneratesAggregateForm()
    {
        XrmHelper.EntitiesFormXml.Add(Main);
        XrmHelper.EntitiesFormXml.Add(QuickCreate);

        var code = await TsForm.GetTsFormCodeAsync(null, XrmHelper.EntitiesMetadata[0]);

        Assert.IsNotNull(code);
        StringAssert.Contains(code, "export class AllInOne", "aggregate Form class when a main form exists");
        StringAssert.Contains(code, "Itab_generalTabSections");
    }

    [TestMethod]
    public async Task Generate_NoForms_ReturnsNull()
    {
        // EntitiesFormXml is empty for this entity → the (detoured) service
        // answers the systemform query with zero rows → generation is skipped.
        using var fake = new DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure.FakeSdkClient();
        fake.OnRetrieveMultiple = _ => new Microsoft.Xrm.Sdk.EntityCollection();

        var code = await TsForm.GetTsFormCodeAsync(fake.Client, XrmHelper.EntitiesMetadata[0]);

        Assert.IsNull(code, "No forms → generation is skipped.");
    }

    [TestMethod]
    public async Task Generate_FormNamedAllInOne_IsRenamedAgainstAggregateReservation()
    {
        var form = new SystemForm
        {
            Name = "AllInOne",
            EntityLogicalName = Logical,
            FormType = FormType.Main,
            FormXml = MainFormXml()
        };
        XrmHelper.EntitiesFormXml.Add(form);

        var code = await TsForm.GetTsFormCodeAsync(null, XrmHelper.EntitiesMetadata[0]);

        Assert.IsNotNull(code);
        StringAssert.Contains(code, "AllInOne2", "user form named 'AllInOne' is renamed because the aggregate reserves 'AllInOne'");
    }
}
