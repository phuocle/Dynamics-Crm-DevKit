using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Logic;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

using static DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure.TestMetadata;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Shared;

/// <summary>
/// JsTypeScriptDeclaration coverage for the remaining gaps: the WebApi d.ts
/// MultiSelect-as-Picklist branch, UserLocal + DateOnly (_UtcDateOnly) entries,
/// the default Virtual fallback line, quick-create form namespaces with
/// duplicate form names, duplicate field suffixes in Get_d_ts_ForListFields
/// (BPF and non-BPF), DisplayName-only jsdoc fallback, DateOnly/DateTime
/// control mapping, BPF process field parsing, quick-view body jsdoc
/// priorities, a quick-view FormId that has no seeded QuickView form, and a
/// controlDescription customControl id that is not a Guid.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class JsTypeScriptDeclarationGapCoverageTests
{
    private const string Logical = "jsdec_gap_ent";
    private const string QuickViewLogical = "jsdec_gap_qv";
    private static readonly Guid QuickViewFormId = new("44444444-4444-4444-4444-444444444444");
    private const string MissingQuickViewFormId = "55555555-5555-5555-5555-555555555555";

    [TestInitialize]
    public void Setup()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        XrmHelper.EntitiesFormXml = new List<SystemForm>();
        XrmHelper.EntitiesProcessForm = new List<ProcessForm>();
    }

    [TestCleanup]
    public void Cleanup()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        XrmHelper.EntitiesFormXml = new List<SystemForm>();
        XrmHelper.EntitiesProcessForm = new List<ProcessForm>();
    }

    private static EntityMetadata BuildEntity() =>
        Entity(Logical, "JsDec Gap Ent",
            WithDescription(String("name", "Name"), "The name field"),
            Money("revenue", "Revenue"));

    private static string QuickViewControl(string controlId, Guid formId) =>
        $"<cell><control id=\"{controlId}\" classid=\"{{{ControlClassId.QUICK_VIEW_FORM}}}\" uniqueid=\"{controlId}\">" +
        $"<parameters><QuickForms>&lt;QuickFormIds&gt;&lt;QuickFormId entityname=\"{QuickViewLogical}\"&gt;{formId}&lt;/QuickFormId&gt;&lt;/QuickFormIds&gt;</QuickForms></parameters>" +
        "</control></cell>";

    private static SystemForm QuickViewForm(Guid formId, string formXml) => new()
    {
        Name = "QV Form",
        EntityLogicalName = QuickViewLogical,
        FormType = FormType.QuickView,
        FormId = formId,
        FormXml = formXml
    };

    [TestMethod]
    public async Task GetCodeAsync_WebApiTypes_MultiSelectAsPicklist_UtcDateOnly_VirtualFallback()
    {
        var meta = Entity(Logical, "JsDec Gap Ent",
            WithType(MultiSelect("devkit_tags", "Tags", (1, "One"), (2, "Two")), AttributeTypeCode.Picklist),
            WithType(new DateTimeAttributeMetadata
            {
                LogicalName = "new_userlocal_dateonly",
                SchemaName = "new_UserlocalDateonly",
                DateTimeBehavior = DateTimeBehavior.UserLocal,
                Format = DateTimeFormat.DateOnly
            }, AttributeTypeCode.DateTime),
            WithType(new AttributeMetadata
            {
                LogicalName = "new_virtual",
                SchemaName = "new_Virtual"
            }, AttributeTypeCode.Virtual));

        var dts = await JsTypeScriptDeclaration.GetCodeAsync(null, meta, "Dev.DevKit.JsDecGap", isJsFormExist: false, isJsWebApiExist: true);

        Assert.IsNotNull(dts);
        StringAssert.Contains(dts, "Devkittags: Array<OptionSet.Jsdecgapent.Devkittags> | null;",
            "MultiSelect typed as Picklist renders the array option-set entry");
        StringAssert.Contains(dts, "Devkittags: Array<string>;",
            "... and the FormattedValue array entry");
        StringAssert.Contains(dts, "new_UserlocalDateonly_UtcDateOnly: Date | null;",
            "UserLocal + DateOnly format appends the _UtcDateOnly suffix");
        StringAssert.Contains(dts, "new_UserlocalDateonly_UtcDateOnly: string;",
            "... and its FormattedValue entry");
        StringAssert.Contains(dts, "Virtual-new_Virtual-new_virtual | null;",
            "a Virtual attribute that is not Image/File/MultiSelect falls through to the debug default");
        StringAssert.Contains(dts, "Virtual-new_Virtual-new_virtual;",
            "... in the FormattedValue section as well");
    }

    [TestMethod]
    public async Task GetCodeAsync_TwoQuickCreateForms_WithSameName_SecondGetsSuffixed()
    {
        var meta = BuildEntity();
        var formXml = $@"<form>
          <tabs>
            <tab name=""tab_general"">
              <columns><column><sections>
                <section name=""section_general"">
                  <rows><row><cell><control id=""name_ctrl"" datafieldname=""name"" classid=""{{{ControlClassId.SINGLE_LINE_OF_TEXT}}}"" /></cell></row></rows>
                </section>
              </sections></column></columns>
            </tab>
          </tabs>
        </form>";
        XrmHelper.EntitiesFormXml.Add(new SystemForm
        {
            Name = "Quick Create",
            EntityLogicalName = Logical,
            FormType = FormType.QuickCreate,
            IsQuickCreate = true,
            FormXml = formXml
        });
        XrmHelper.EntitiesFormXml.Add(new SystemForm
        {
            Name = "quick create",
            EntityLogicalName = Logical,
            FormType = FormType.QuickCreate,
            IsQuickCreate = true,
            FormXml = formXml
        });

        var dts = await JsTypeScriptDeclaration.GetCodeAsync(null, meta, "Dev.DevKit.JsDecGap", isJsFormExist: true, isJsWebApiExist: false);

        Assert.IsNotNull(dts);
        StringAssert.Contains(dts, "namespace FormJsdecgapent_Quick_Create", "quick create form gets its own namespace");
        StringAssert.Contains(dts, "namespace FormJsdecgapent_Quick_Create2", "second form with the same name gets a numeric suffix");
        StringAssert.Contains(dts, "Name: DevKit.Controls.String;", "quick create body interface is generated");
    }

    [TestMethod]
    public void Get_d_ts_ForListFields_DuplicateNames_DisplayNameFallback_AndDateTime()
    {
        var meta = Entity(Logical, "JsDec Gap Ent",
            WithDescription(String("name", "Name"), "The name field"),
            String("phone", "Phone Label"),
            WithType(new DateTimeAttributeMetadata
            {
                LogicalName = "createdon",
                SchemaName = "CreatedOn",
                Format = DateTimeFormat.DateAndTime
            }, AttributeTypeCode.DateTime));
        SetJsDeclarationState(meta);

        const string formXml = "<form><controlDescriptions /></form>";
        var fields = new List<IdName>
        {
            Field("name"),
            Field("name"),
            Field("phone"),
            Field("createdon")
        };

        var dts = InvokePrivateStatic<string>(typeof(JsTypeScriptDeclaration), "Get_d_ts_ForListFields", formXml, fields, false);

        Assert.IsNotNull(dts);
        StringAssert.Contains(dts, "Name1: DevKit.Controls.String;", "duplicate field gets a numeric suffix (non-BPF)");
        StringAssert.Contains(dts, "/** Phone Label */", "jsdoc falls back to DisplayName when Description is missing");
        StringAssert.Contains(dts, "CreatedOn: DevKit.Controls.DateTime;", "DateTime with DateAndTime format maps to DevKit.Controls.DateTime");
    }

    [TestMethod]
    public async Task GetForm_d_ts_ProcessAsync_ParsesBpfFields_WithDuplicateSuffix()
    {
        var meta = BuildEntity();
        SetJsDeclarationState(meta);
        XrmHelper.EntitiesProcessForm.Add(new ProcessForm
        {
            EntityLogicalName = Logical,
            Name = "BPF_Process",
            xaml = $@"<Activity xmlns:mxswa=""http://schemas.microsoft.com/crm/2014/workflow/activities"" xmlns:x=""http://schemas.microsoft.com/winfx/2006/xaml"">
              <mxswa:Workflow>
                <mxswa:ActivityReference DisplayName=""Set jsdec_gap_ent revenue"">
                  <mxswa:Property DataFieldName=""revenue"" />
                  <mxswa:Property DataFieldName=""revenue"" />
                </mxswa:ActivityReference>
                <mxswa:ActivityReference DisplayName=""Set jsdec_gap_ent name"">
                  <mxswa:Property DataFieldName=""name"" />
                </mxswa:ActivityReference>
              </mxswa:Workflow>
            </Activity>"
        });

        var task = (Task<string>)typeof(JsTypeScriptDeclaration)
            .GetMethod("GetForm_d_ts_ProcessAsync", BindingFlags.NonPublic | BindingFlags.Static)!
            .Invoke(null, new object[] { "<form />" })!;
        var dts = await task;

        Assert.IsNotNull(dts);
        StringAssert.Contains(dts, "interface ProcessBPF_Process", "BPF process interface is generated");
        StringAssert.Contains(dts, "Revenue_1: DevKit.Controls.Money;", "duplicate BPF field gets a _1 suffix (BPF mode)");
        StringAssert.Contains(dts, "BPF_Process: ProcessBPF_Process;", "process interface is referenced from Process");
    }

    [TestMethod]
    public async Task GetBodyOfQuickViewAsync_CommentPriority_AndMissingFormId()
    {
        var meta = BuildEntity();
        SetJsDeclarationState(meta);
        var qvMetadata = Entity(QuickViewLogical, "Quick View Ent",
            WithDescription(String("qv_name", "QV Name"), "Quick View Name"),
            String("qv_phone", "Quick Phone"));
        XrmHelper.EntitiesMetadata.Add(qvMetadata);
        XrmHelper.EntitiesFormXml.Add(QuickViewForm(QuickViewFormId, $@"<form>
          <tabs>
            <tab name=""tab_general"">
              <columns><column><sections>
                <section name=""section_general"">
                  <rows>
                    <row><cell><control id=""qv_name"" datafieldname=""qv_name"" classid=""{{{ControlClassId.SINGLE_LINE_OF_TEXT}}}"" /></cell></row>
                    <row><cell><control id=""qv_phone"" datafieldname=""qv_phone"" classid=""{{{ControlClassId.SINGLE_LINE_OF_TEXT}}}"" /></cell></row>
                  </rows>
                </section>
              </sections></column></columns>
            </tab>
          </tabs>
        </form>"));

        var mainFormXml = $@"<form>
          <tabs>
            <tab name=""tab_general"">
              <columns><column><sections>
                <section name=""section_general"">
                  <rows>
                    <row>{QuickViewControl("quickView1", QuickViewFormId)}</row>
                    <row>{QuickViewControl("quickView2", new Guid(MissingQuickViewFormId))}</row>
                  </rows>
                </section>
              </sections></column></columns>
            </tab>
          </tabs>
        </form>";

        var method = typeof(JsTypeScriptDeclaration).GetMethod("GetBodyOfQuickViewAsync", BindingFlags.NonPublic | BindingFlags.Static)!;
        var body1 = await (Task<string>)method.Invoke(null, new object[] { mainFormXml, "quickView1" })!;
        var body2 = await (Task<string>)method.Invoke(null, new object[] { mainFormXml, "quickView2" })!;

        Assert.IsNotNull(body1);
        StringAssert.Contains(body1, "interface quickForm_quickView1_Body", "quick view body interface is generated");
        StringAssert.Contains(body1, "/** Quick View Name */", "jsdoc comes from Description (priority 1)");
        StringAssert.Contains(body1, "/** Quick Phone */", "jsdoc falls back to DisplayName (priority 2)");
        StringAssert.Contains(body1, "Qvname: DevKit.Controls.QuickView;");
        Assert.AreEqual(string.Empty, body2, "quick view referencing a missing FormId yields an empty body");
    }

    [TestMethod]
    public void GetARealClassId_NonGuidCustomControlId_ReturnsOriginalClassId()
    {
        SetJsDeclarationState(BuildEntity());
        const string formXml = @"<form>
          <controlDescriptions>
            <controlDescription forControl=""ctrl_uid"">
              <customControl id=""not-a-guid"" />
            </controlDescription>
          </controlDescriptions>
        </form>";

        var classId = InvokePrivateStatic<string>(typeof(JsTypeScriptDeclaration), "GetARealClassId", formXml, "ORIGINAL-CLASS", "ctrl_uid");

        Assert.AreEqual("ORIGINAL-CLASS", classId, "a controlDescription whose customControl id is not a Guid keeps the original class id");
    }

    private static IdName Field(string logicalName) => new()
    {
        Id = logicalName,
        Name = logicalName,
        ClassId = ControlClassId.SINGLE_LINE_OF_TEXT
    };

    private static void SetJsDeclarationState(EntityMetadata metadata)
    {
        var type = typeof(JsTypeScriptDeclaration);
        type.GetProperty("EntityMetadata", BindingFlags.NonPublic | BindingFlags.Static)!.SetValue(null, metadata);
        type.GetField("FormNames", BindingFlags.NonPublic | BindingFlags.Static)!.SetValue(null, new List<string>());
    }

    private static T InvokePrivateStatic<T>(Type type, string methodName, params object[] args)
        => (T)type.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
}
