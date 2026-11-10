using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Logic;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using static DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure.TestMetadata;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Shared;

/// <summary>
/// TsForm coverage for the remaining gaps: duplicate header-field schema-name
/// suffixing, aggregate tab/section merging across main forms, BPF duplicate
/// field names with Description comments, quick-view body comments
/// (Description then DisplayName priority), metadata fetch for quick-view
/// entities seeded with null Attributes, missing quick-view form ids,
/// activity-party navigation injection, JS reserved schema names, virtual
/// control types (MultiOptionSet / File fallback), grid-typed header controls,
/// and control-description class-id remapping that is not a Guid.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class TsFormGapCoverageTests
{
    private const string Logical = "tsform_gap_ent";
    private const string QuickViewLogical = "tsform_gap_qv";
    private static readonly Guid QuickViewFormId = new("11111111-1111-1111-1111-111111111111");
    private const string MissingQuickViewFormId = "22222222-2222-2222-2222-222222222222";

    [TestInitialize]
    public void Setup()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        XrmHelper.EntitiesFormXml = new List<SystemForm>();
        // A process form is seeded so GetProcessFieldsAsync never needs a service;
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

    private static EntityMetadata BuildEntity(string schemaName = "TsformGapEnt")
    {
        var attributes = new AttributeMetadata[]
        {
            WithDescription(String("name", "Name"), "The name field"),
            WithDescription(Money("revenue", "Revenue"), "Revenue Field"),
            Picklist("industrycode", "Industry", (1, "Accounting"), (2, "Agriculture"))
        };
        var meta = Entity("tsform_gap_ent", "TsForm Gap Ent", attributes);
        Set(meta, nameof(EntityMetadata.SchemaName), schemaName);
        return meta;
    }

    private static MultiSelectPicklistAttributeMetadata VirtualMultiSelect() =>
        WithType(MultiSelect("new_choices", "Choices", (1, "One"), (2, "Two")), AttributeTypeCode.Virtual);

    private static FileAttributeMetadata VirtualFile() =>
        WithType(new FileAttributeMetadata
        {
            LogicalName = "new_docfile",
            SchemaName = "new_Docfile",
            MaxSizeInKB = 10240
        }, AttributeTypeCode.Virtual);

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

    private static SystemForm CreateMainForm(EntityMetadata meta, string formXml, string name = "Gap Main") => new()
    {
        Name = name,
        EntityLogicalName = meta.LogicalName,
        FormType = FormType.Main,
        FormXml = formXml
    };

    [TestMethod]
    public async Task Generate_ActivityPartyEntity_AddsNavActivitiesNavigation()
    {
        var meta = BuildEntity();
        Set(meta, nameof(EntityMetadata.IsActivityParty), (bool?)true);
        XrmHelper.EntitiesMetadata.Add(meta);
        XrmHelper.EntitiesFormXml.Add(CreateMainForm(meta, $@"<form>
          <tabs>{Tab("tab_general", "General", Section("section_general", "General", Control("name", ControlClassId.SINGLE_LINE_OF_TEXT, "name")))}</tabs>
          <header />
          <Navigation>
            <NavBar>
              <NavBarByRelationshipItem Id=""nav_contacts"">
                <Titles><Title Text=""Contacts"" LCID=""1033"" /></Titles>
              </NavBarByRelationshipItem>
            </NavBar>
          </Navigation>
        </form>"));

        var code = await TsForm.GetTsFormCodeAsync(null, meta);

        Assert.IsNotNull(code);
        StringAssert.Contains(code, "navActivities", "activity-party entity gets the synthetic navActivities item");
        StringAssert.Contains(code, "nav_contacts");
    }

    [TestMethod]
    public async Task Generate_ReservedSchemaName_IsPrefixedWithUnderscore()
    {
        var meta = BuildEntity("Static");
        XrmHelper.EntitiesMetadata.Add(meta);
        XrmHelper.EntitiesFormXml.Add(CreateMainForm(meta, $@"<form>
          <tabs>{Tab("tab_general", "General", Section("section_general", "General", Control("name", ControlClassId.SINGLE_LINE_OF_TEXT, "name")))}</tabs>
          <header />
        </form>"));

        var code = await TsForm.GetTsFormCodeAsync(null, meta);

        Assert.IsNotNull(code);
        StringAssert.Contains(code, "export namespace _Static {", "JS reserved word schema name is escaped with a leading underscore");
    }

    [TestMethod]
    public async Task Generate_DuplicateHeaderFields_SecondGetsSuffixedSchemaName()
    {
        var meta = BuildEntity();
        XrmHelper.EntitiesMetadata.Add(meta);
        XrmHelper.EntitiesFormXml.Add(CreateMainForm(meta, $@"<form>
          <tabs>{Tab("tab_general", "General", Section("section_general", "General", Control("name", ControlClassId.SINGLE_LINE_OF_TEXT, "name")))}</tabs>
          <header>
            <rows>
              <row>{Control("header_name1", ControlClassId.SINGLE_LINE_OF_TEXT, "name")}</row>
              <row>{Control("header_name2", ControlClassId.SINGLE_LINE_OF_TEXT, "name")}</row>
            </rows>
          </header>
        </form>"));

        var code = await TsForm.GetTsFormCodeAsync(null, meta);

        Assert.IsNotNull(code);
        var headerIdx = code.IndexOf("export interface IHeader");
        Assert.IsTrue(headerIdx > 0, "IHeader interface is generated");
        var headerSection = code.Substring(headerIdx, code.IndexOf("}", headerIdx) - headerIdx);
        StringAssert.Contains(headerSection, "Name: DevKit.Controls.String;");
        StringAssert.Contains(headerSection, "Name1: DevKit.Controls.String;", "duplicate header attribute gets a numeric suffix");
    }

    [TestMethod]
    public async Task Generate_VirtualControlTypes_SubGridHeader_AndNonGuidControlDescription()
    {
        var meta = BuildEntity("TsformGapEnt");
        var metaAttributes = new List<AttributeMetadata>(meta.Attributes!) { VirtualMultiSelect(), VirtualFile() };
        Set(meta, nameof(EntityMetadata.Attributes), metaAttributes.ToArray());
        XrmHelper.EntitiesMetadata.Add(meta);
        XrmHelper.EntitiesFormXml.Add(CreateMainForm(meta, $@"<form>
          <tabs>{Tab("tab_general", "General", Section("section_general", "General",
              Control("choices", ControlClassId.MULTI_OPTIONSET, "new_choices"),
              Control("docfile", ControlClassId.SINGLE_LINE_OF_TEXT, "new_docfile"),
              Control("grid_two", ControlClassId.SUB_GRID, null, "grid_two_uid")))}</tabs>
          <header>
            <rows><row>{Control("header_grid", ControlClassId.SUB_GRID, "name")}</row></rows>
          </header>
          <controlDescriptions>
            <controlDescription forControl=""grid_two_uid"">
              <customControl id=""not-a-guid"" />
            </controlDescription>
          </controlDescriptions>
        </form>"));

        var code = await TsForm.GetTsFormCodeAsync(null, meta);

        Assert.IsNotNull(code);
        var headerIdx = code.IndexOf("export interface IHeader");
        var headerSection = code.Substring(headerIdx, code.IndexOf("}", headerIdx) - headerIdx);
        StringAssert.Contains(headerSection, "Name: DevKit.Controls.Grid;", "header control carrying the sub-grid class id maps to Grid");
        StringAssert.Contains(code, "DevKit.Controls.MultiOptionSet;", "virtual MultiSelectPicklistAttributeMetadata maps to MultiOptionSet");
        var gridIdx = code.IndexOf("export interface IGrid");
        Assert.IsTrue(gridIdx > 0, "IGrid interface is generated");
        var gridSection = code.Substring(gridIdx, code.IndexOf("}", gridIdx) - gridIdx);
        StringAssert.Contains(gridSection, "grid_two:", "grid control whose controlDescription id is not a Guid keeps its original class id and stays a grid");
    }

    [TestMethod]
    public async Task Generate_QuickViewForms_DescriptionPriority_MissingFormId_AndMetadataFetch()
    {
        var meta = BuildEntity();
        var qvMetadata = Entity(QuickViewLogical, "Quick View Ent",
            WithDescription(String("qv_name", "QV Name"), "Quick View Name"),
            String("qv_phone", "Quick Phone"));
        Set(qvMetadata, nameof(EntityMetadata.Attributes), null);

        var fake = new FakeSdkClient();
        fake.OnExecute = request => request switch
        {
            RetrieveEntityRequest => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = Entity(QuickViewLogical, "Quick View Ent",
                    WithDescription(String("qv_name", "QV Name"), "Quick View Name"),
                    String("qv_phone", "Quick Phone")) }
            },
            _ => throw new InvalidOperationException($"Unexpected request {request.RequestName}")
        };

        XrmHelper.EntitiesMetadata.Add(meta);
        XrmHelper.EntitiesMetadata.Add(qvMetadata); // Attributes == null -> forces Metadata.FetchEntityMetadataAsync
        var quickView1Cell =
            $"<cell><control id=\"quickView1\" classid=\"{{{ControlClassId.QUICK_VIEW_FORM}}}\" uniqueid=\"quickView1\">" +
            $"<parameters><QuickForms>&lt;QuickFormIds&gt;&lt;QuickFormId entityname=\"{QuickViewLogical}\"&gt;{QuickViewFormId}&lt;/QuickFormId&gt;&lt;/QuickFormIds&gt;</QuickForms></parameters>" +
            "</control></cell>";
        var quickView2Cell =
            $"<cell><control id=\"quickView2\" classid=\"{{{ControlClassId.QUICK_VIEW_FORM}}}\" uniqueid=\"quickView2\">" +
            $"<parameters><QuickForms>&lt;QuickFormIds&gt;&lt;QuickFormId entityname=\"{QuickViewLogical}\"&gt;{MissingQuickViewFormId}&lt;/QuickFormId&gt;&lt;/QuickFormIds&gt;</QuickForms></parameters>" +
            "</control></cell>";
        XrmHelper.EntitiesFormXml.Add(CreateMainForm(meta, $@"<form>
          <tabs>{Tab("tab_general", "General", Section("section_general", "General", quickView1Cell, quickView2Cell))}</tabs>
          <header />
        </form>"));
        XrmHelper.EntitiesFormXml.Add(new SystemForm
        {
            Name = "QV Form",
            EntityLogicalName = QuickViewLogical,
            FormType = FormType.QuickView,
            FormId = QuickViewFormId,
            FormXml = $@"<form>
              <tabs>{Tab("tab_general", "General", Section("section_general", "General",
                  Control("qv_name", ControlClassId.SINGLE_LINE_OF_TEXT, "qv_name"),
                  Control("qv_phone", ControlClassId.SINGLE_LINE_OF_TEXT, "qv_phone")))}</tabs>
            </form>"
        });

        try
        {
            var code = await TsForm.GetTsFormCodeAsync(fake.Client, meta);

            Assert.IsNotNull(code);
            StringAssert.Contains(code, "IquickView1Body", "quick view form interface is generated");
            StringAssert.Contains(code, "Quick View Name", "field comment from Description (priority 1)");
            StringAssert.Contains(code, "Quick Phone", "field comment from DisplayName (priority 2)");
            StringAssert.Contains(code, "quickView1___Qvname", "quick form field names surface in the quick array");
            Assert.IsFalse(code.Contains("quickView2___"), "quick view referencing a missing FormId contributes no fields");
        }
        finally
        {
            fake.Dispose();
        }
    }

    [TestMethod]
    public async Task Generate_TwoMainForms_SharedTabName_MergesSectionsInAggregate()
    {
        var meta = BuildEntity();
        XrmHelper.EntitiesMetadata.Add(meta);
        XrmHelper.EntitiesFormXml.Add(CreateMainForm(meta, $@"<form>
          <tabs>{Tab("tab_general", "General", Section("section_one", "One", Control("name", ControlClassId.SINGLE_LINE_OF_TEXT, "name")))}</tabs>
          <header />
        </form>", "First Form"));
        XrmHelper.EntitiesFormXml.Add(CreateMainForm(meta, $@"<form>
          <tabs>{Tab("tab_general", "General", Section("section_two", "Two", Control("revenue", ControlClassId.CURRENCY, "revenue")))}</tabs>
          <header />
        </form>", "Second Form"));

        var code = await TsForm.GetTsFormCodeAsync(null, meta);

        Assert.IsNotNull(code);
        StringAssert.Contains(code, "tab_general___section_one", "first form section is in the aggregate tab array");
        StringAssert.Contains(code, "tab_general___section_two", "second form section is merged into the existing aggregate tab");
    }

    [TestMethod]
    public async Task Generate_BpfDuplicateFields_DescriptionComment_AndSuffixes()
    {
        var meta = BuildEntity();
        XrmHelper.EntitiesMetadata.Add(meta);
        XrmHelper.EntitiesProcessForm.Add(new ProcessForm
        {
            EntityLogicalName = Logical,
            Name = "BPF_Process",
            xaml = $@"<Activity xmlns:mxswa=""http://schemas.microsoft.com/crm/2014/workflow/activities"" xmlns:x=""http://schemas.microsoft.com/winfx/2006/xaml"">
              <mxswa:Workflow>
                <mxswa:ActivityReference DisplayName=""Set tsform_gap_ent revenue"">
                  <mxswa:Property DataFieldName=""revenue"" />
                  <mxswa:Property DataFieldName=""revenue"" />
                </mxswa:ActivityReference>
              </mxswa:Workflow>
            </Activity>"
        });
        XrmHelper.EntitiesFormXml.Add(CreateMainForm(meta, $@"<form>
          <tabs>{Tab("tab_general", "General", Section("section_general", "General", Control("name", ControlClassId.SINGLE_LINE_OF_TEXT, "name")))}</tabs>
          <header />
        </form>"));

        var code = await TsForm.GetTsFormCodeAsync(null, meta);

        Assert.IsNotNull(code);
        StringAssert.Contains(code, "/** Revenue Field */", "process field comment comes from the attribute Description");
        StringAssert.Contains(code, "Revenue_1: DevKit.Controls.Money;", "duplicate BPF field gets a suffix in the process interface");
        StringAssert.Contains(code, "BPF_Process___Revenue_1", "duplicate BPF field gets a suffix in the bpf array");
    }
}
