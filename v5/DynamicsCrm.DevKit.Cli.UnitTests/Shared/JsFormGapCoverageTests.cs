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
/// JsForm coverage for the remaining gaps: quick-create form generation with
/// its quick-view body fields, duplicate form-name suffixing, duplicate body
/// field names, BPF process field parsing with duplicate fields, grid class-id
/// remapping through controlDescriptions (Guid and non-Guid), the synthetic
/// navActivities navigation entry for activity-party entities, and quick-view
/// controls referencing a FormId that has no seeded QuickView form.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class JsFormGapCoverageTests
{
    private const string Logical = "jsform_gap_ent";
    private const string QuickViewLogical = "jsform_gap_qv";
    private static readonly Guid MissingQuickViewFormId = new("33333333-3333-3333-3333-333333333333");

    [TestInitialize]
    public void Setup()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        XrmHelper.EntitiesFormXml = new List<SystemForm>();
        // A process form is seeded so GetJsProcessCodeAsync never needs a service;
        // its only ActivityReference has a single-token DisplayName so it adds no fields.
        XrmHelper.EntitiesProcessForm = new List<ProcessForm>
        {
            new()
            {
                EntityLogicalName = Logical,
                Name = "Default_Process",
                xaml = $@"<Activity xmlns:mxswa=""http://schemas.microsoft.com/crm/2014/workflow/activities"" xmlns:x=""http://schemas.microsoft.com/winfx/2006/xaml"">
                  <mxswa:Workflow>
                    <mxswa:ActivityReference DisplayName=""SingleToken"">
                      <mxswa:Property DataFieldName=""name"" />
                    </mxswa:ActivityReference>
                  </mxswa:Workflow>
                </Activity>"
            }
        };
    }

    [TestCleanup]
    public void Cleanup()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        XrmHelper.EntitiesFormXml = new List<SystemForm>();
        XrmHelper.EntitiesProcessForm = new List<ProcessForm>();
    }

    private static EntityMetadata BuildEntity() =>
        Entity(Logical, "JsForm Gap Ent",
            WithDescription(String("name", "Name"), "The name field"),
            WithDescription(Money("revenue", "Revenue"), "Revenue Field"));

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

    [TestMethod]
    public async Task Generate_MainAndQuickCreate_DuplicateBodyFields_GridRemap_AndQuickViewBody()
    {
        var meta = BuildEntity();
        XrmHelper.EntitiesMetadata.Add(meta);
        var mainFormXml = $@"<form>
              <tabs>{Tab("tab_general", "General", Section("section_general", "General",
                  Control("name_ctrl1", ControlClassId.SINGLE_LINE_OF_TEXT, "name"),
                  Control("name_ctrl2", ControlClassId.SINGLE_LINE_OF_TEXT, "name"),
                  Control("revenue_ctrl", ControlClassId.CURRENCY, "revenue"),
                  Control("grid_one", ControlClassId.SUB_GRID, null, "grid_one_uid"),
                  Control("grid_two", ControlClassId.SUB_GRID, null, "grid_two_uid")))}</tabs>
              <header>
                <rows><row>{Control("header_name", ControlClassId.SINGLE_LINE_OF_TEXT, "name")}</row></rows>
              </header>
              <Navigation>
                <NavBar>
                  <NavBarByRelationshipItem Id=""nav_contacts"">
                    <Titles><Title Text=""Contacts"" LCID=""1033"" /></Titles>
                  </NavBarByRelationshipItem>
                </NavBar>
              </Navigation>
              <controlDescriptions>
                <controlDescription forControl=""grid_one_uid"">
                  <customControl id=""{ControlClassId.SUB_GRID.ToLowerInvariant()}"" />
                </controlDescription>
                <controlDescription forControl=""grid_two_uid"">
                  <customControl id=""not-a-guid"" />
                </controlDescription>
              </controlDescriptions>
            </form>";
        XrmHelper.EntitiesFormXml.Add(new SystemForm
        {
            Name = "Main Form",
            EntityLogicalName = Logical,
            FormType = FormType.Main,
            FormXml = mainFormXml
        });
        XrmHelper.EntitiesFormXml.Add(new SystemForm
        {
            Name = "Quick Create",
            EntityLogicalName = Logical,
            FormType = FormType.QuickCreate,
            IsQuickCreate = true,
            FormXml = $@"<form>
              <tabs>{Tab("tab_general", "General", Section("section_general", "General",
                  Control("qc_name", ControlClassId.SINGLE_LINE_OF_TEXT, "name"),
                  Control("qc_revenue", ControlClassId.CURRENCY, "revenue")))}</tabs>
              <header />
            </form>"
        });

        var (code, dts) = await JsForm.GetJsFormCodeAsync(null, meta, "Dev.DevKit.JsGapEnt", false);

        Assert.IsNotNull(code);
        // quick create form function is generated (GetQuickCreateFormCode)
        StringAssert.Contains(code, "Quick_Create = function", "quick create form function is generated");
        // quick-view body fields sorted and quoted (GetJsQuickViewCodeBody)
        StringAssert.Contains(code, "body: [\"Name\", \"Revenue\"]", "quick create body lists schema names");
        // duplicate body field names get numeric suffixes (GetJsForListFields, isBPF = false)
        StringAssert.Contains(code, "\"Name1\"", "second control bound to 'name' gets a suffixed schema name");
        // grid remapped by a Guid control description stays a grid; non-Guid id keeps the original class
        StringAssert.Contains(code, "grid: [\"grid_one\", \"grid_two\"]", "both sub-grids are listed as grid fields");
        // header fields
        StringAssert.Contains(code, "header: [\"Name\"]");
        Assert.IsNotNull(dts);
    }

    [TestMethod]
    public async Task Generate_ActivityPartyEntity_AddsNavActivitiesNavigation()
    {
        var meta = BuildEntity();
        Set(meta, nameof(EntityMetadata.IsActivityParty), (bool?)true);
        XrmHelper.EntitiesMetadata.Add(meta);
        XrmHelper.EntitiesFormXml.Add(new SystemForm
        {
            Name = "Main Form",
            EntityLogicalName = Logical,
            FormType = FormType.Main,
            FormXml = $@"<form>
              <tabs>{Tab("tab_general", "General", Section("section_general", "General", Control("name", ControlClassId.SINGLE_LINE_OF_TEXT, "name")))}</tabs>
              <header />
              <Navigation>
                <NavBar>
                  <NavBarByRelationshipItem Id=""nav_contacts"">
                    <Titles><Title Text=""Contacts"" LCID=""1033"" /></Titles>
                  </NavBarByRelationshipItem>
                </NavBar>
              </Navigation>
            </form>"
        });

        var (code, _) = await JsForm.GetJsFormCodeAsync(null, meta, "Dev.DevKit.JsGapEnt", false);

        Assert.IsNotNull(code);
        StringAssert.Contains(code, "navigation: [\"nav_contacts\", \"navActivities\"]",
            "activity-party entity gets the synthetic navActivities navigation entry");
    }

    [TestMethod]
    public async Task Generate_DuplicateFormNames_SecondGetsSuffixedFunctionName()
    {
        var meta = BuildEntity();
        XrmHelper.EntitiesMetadata.Add(meta);
        var formXml = $@"<form>
          <tabs>{Tab("tab_general", "General", Section("section_general", "General", Control("name", ControlClassId.SINGLE_LINE_OF_TEXT, "name")))}</tabs>
          <header />
        </form>";
        XrmHelper.EntitiesFormXml.Add(new SystemForm
        {
            Name = "Information",
            EntityLogicalName = Logical,
            FormType = FormType.Main,
            FormXml = formXml
        });
        XrmHelper.EntitiesFormXml.Add(new SystemForm
        {
            Name = "information",
            EntityLogicalName = Logical,
            FormType = FormType.Main,
            FormXml = formXml
        });

        var (code, _) = await JsForm.GetJsFormCodeAsync(null, meta, "Dev.DevKit.JsGapEnt", false);

        Assert.IsNotNull(code);
        StringAssert.Contains(code, "FormJsformgapent_Information = function", "first form keeps its name");
        StringAssert.Contains(code, "FormJsformgapent_Information2 = function", "second form with the same name gets a numeric suffix");
    }

    [TestMethod]
    public async Task Generate_BpfProcessFields_WithDuplicates_GetsPrefixedAndSuffixedNames()
    {
        var meta = BuildEntity();
        XrmHelper.EntitiesMetadata.Add(meta);
        XrmHelper.EntitiesProcessForm.Add(new ProcessForm
        {
            EntityLogicalName = Logical,
            Name = "BPF Process",
            xaml = $@"<Activity xmlns:mxswa=""http://schemas.microsoft.com/crm/2014/workflow/activities"" xmlns:x=""http://schemas.microsoft.com/winfx/2006/xaml"">
              <mxswa:Workflow>
                <mxswa:ActivityReference DisplayName=""Set jsform_gap_ent revenue"">
                  <mxswa:Property DataFieldName=""revenue"" />
                  <mxswa:Property DataFieldName=""revenue"" />
                </mxswa:ActivityReference>
              </mxswa:Workflow>
            </Activity>"
        });
        XrmHelper.EntitiesFormXml.Add(new SystemForm
        {
            Name = "Main Form",
            EntityLogicalName = Logical,
            FormType = FormType.Main,
            FormXml = $@"<form>
              <tabs>{Tab("tab_general", "General", Section("section_general", "General", Control("name", ControlClassId.SINGLE_LINE_OF_TEXT, "name")))}</tabs>
              <header />
            </form>"
        });

        var (code, _) = await JsForm.GetJsFormCodeAsync(null, meta, "Dev.DevKit.JsGapEnt", false);

        Assert.IsNotNull(code);
        StringAssert.Contains(code, "bpf: [\"BPF_Process___Revenue\", \"BPF_Process___Revenue_1\"]",
            "BPF fields are prefixed with the process name and duplicate fields get a _1 suffix");
    }

    [TestMethod]
    public async Task Generate_QuickViewWithMissingFormId_YieldsEmptyQuickArray()
    {
        var meta = BuildEntity();
        var qvMetadata = Entity(QuickViewLogical, "Quick View Ent", String("qv_name", "QV Name"));
        XrmHelper.EntitiesMetadata.Add(meta);
        XrmHelper.EntitiesMetadata.Add(qvMetadata);
        var quickViewCell =
            $"<cell><control id=\"quickView1\" classid=\"{{{ControlClassId.QUICK_VIEW_FORM}}}\" uniqueid=\"quickView1\">" +
            $"<parameters><QuickForms>&lt;QuickFormIds&gt;&lt;QuickFormId entityname=\"{QuickViewLogical}\"&gt;{MissingQuickViewFormId}&lt;/QuickFormId&gt;&lt;/QuickFormIds&gt;</QuickForms></parameters>" +
            "</control></cell>";
        XrmHelper.EntitiesFormXml.Add(new SystemForm
        {
            Name = "Main Form",
            EntityLogicalName = Logical,
            FormType = FormType.Main,
            FormXml = $@"<form>
              <tabs>{Tab("tab_general", "General", Section("section_general", "General", quickViewCell))}</tabs>
              <header />
            </form>"
        });
        // The quick view entity has a form, but not one matching the referenced FormId
        XrmHelper.EntitiesFormXml.Add(new SystemForm
        {
            Name = "QV Other Form",
            EntityLogicalName = QuickViewLogical,
            FormType = FormType.QuickView,
            FormId = Guid.NewGuid(),
            FormXml = "<form />"
        });

        var (code, _) = await JsForm.GetJsFormCodeAsync(null, meta, "Dev.DevKit.JsGapEnt", false);

        Assert.IsNotNull(code);
        Assert.IsFalse(code.Contains("quickView1___"), "quick view referencing a missing FormId contributes no quick fields");
        StringAssert.Contains(code, "quick: []", "the quick array stays empty for that form");
    }
}
