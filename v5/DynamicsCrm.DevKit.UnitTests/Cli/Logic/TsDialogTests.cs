using DynamicsCrm.DevKit.Shared.Logic;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Logic;

/// <summary>
/// Unit tests for TsDialog.cs — exercises GetDialogClassName, GetTsDialogCodeAsync,
/// GetAllDialogControls (via public API), GetDialogControlType, and GetParameterControlType.
/// The AllControlTypesFormXml fixture is designed to hit every branch of the private methods
/// to achieve 100% code coverage.
/// </summary>
[TestClass]
public class TsDialogTests
{
    #region Test Fixtures

    /// <summary>
    /// A single FormXml document that covers every code path in TsDialog:
    /// — All 23 GetDialogControlType classId branches (Label → Regarding)
    /// — Unknown GUID fallthrough → Unknown
    /// — Missing classid attr (null classId) → Unknown via IsNullOrEmpty
    /// — Control without label element → id used as JSDoc comment
    /// — Skipped cells: null-control cell, empty-id control
    /// — Header, body, footer, and formparameters sections
    /// — All 9 GetParameterControlType branches + empty type=""
    /// </summary>
    private static readonly string AllControlTypesFormXml = """
        <form>
          <header>
            <rows>
              <row>
                <cell>
                  <label description="Header Label"/>
                  <control id="header_label" classid="{39354E4A-5015-4D74-8031-EA9EB73A1322}"/>
                </cell>
                <cell>
                  <control id="header_nolabel" classid="{39354E4A-5015-4D74-8031-EA9EB73A1322}"/>
                </cell>
                <cell/>
                <cell>
                  <control id="" classid="{39354E4A-5015-4D74-8031-EA9EB73A1322}"/>
                </cell>
              </row>
            </rows>
          </header>
          <tabs>
            <tab>
              <columns>
                <column>
                  <sections>
                    <section>
                      <rows>
                        <row>
                          <cell><label description="Button"/><control id="ctrl_btn" classid="{00AD73DA-BD4D-49C6-88A8-2F4F4CAD4A20}"/></cell>
                          <cell><label description="Text"/><control id="ctrl_text" classid="{4273EDBD-AC1D-40D3-9FB2-095C621B552D}"/></cell>
                          <cell><label description="Email"/><control id="ctrl_email" classid="{ADA2203E-B4CD-49BE-9DDF-234642B43B52}"/></cell>
                          <cell><label description="Ticker"/><control id="ctrl_ticker" classid="{1E1FC551-F7A8-43AF-AC34-A8DC35C7B6D4}"/></cell>
                          <cell><label description="Url"/><control id="ctrl_url" classid="{71716B6C-711E-476C-8AB8-5D11542BFB47}"/></cell>
                          <cell><label description="TextArea"/><control id="ctrl_textarea" classid="{E0DECE4B-6FC8-4A8F-A065-082708572369}"/></cell>
                          <cell><label description="DateTime"/><control id="ctrl_dt" classid="{5B773807-9FB2-42DB-97C3-7A91EFF8ADFF}"/></cell>
                          <cell><label description="WholeNumber"/><control id="ctrl_int" classid="{C6D124CA-7EDA-4A60-AEA9-7FB8D318B68F}"/></cell>
                          <cell><label description="Decimal"/><control id="ctrl_dec" classid="{C3EFE0C3-0EC6-42BE-8349-CBD9079DFD8E}"/></cell>
                          <cell><label description="Float"/><control id="ctrl_float" classid="{0D2C745A-E5A8-4C8F-BA63-C6D3BB604660}"/></cell>
                          <cell><label description="Currency"/><control id="ctrl_money" classid="{533B9E00-756B-4312-95A0-DC888637AC78}"/></cell>
                          <cell><label description="Lookup"/><control id="ctrl_lookup" classid="{270BD3DB-D9AF-4782-9025-509E298DEC0A}"/></cell>
                          <cell><label description="IFrame"/><control id="ctrl_iframe" classid="{FD2A7985-3187-444E-908D-6624B21F69C0}"/></cell>
                          <cell><label description="Language"/><control id="ctrl_lang" classid="{671A9387-CA5A-4D1E-8AB7-06E39DDCF6B5}"/></cell>
                          <cell><label description="Timezone"/><control id="ctrl_tz" classid="{7C624A0B-F59E-493D-9583-638D34759266}"/></cell>
                          <cell><label description="Duration"/><control id="ctrl_dur" classid="{AA987274-CE4E-4271-A803-66164311A958}"/></cell>
                          <cell><label description="OptionSet"/><control id="ctrl_os" classid="{3EF39988-22BB-4F0B-BBBE-64B5A3748AEE}"/></cell>
                          <cell><label description="MultiOptionSet"/><control id="ctrl_mos" classid="{4AA28AB7-9C13-4F57-A73D-AD894D048B5F}"/></cell>
                          <cell><label description="Grid"/><control id="ctrl_grid" classid="{E7A81278-8635-4D9E-8D4D-59480B391C5B}"/></cell>
                          <cell><label description="DropdownBool"/><control id="ctrl_dd_bool" classid="{67FAC785-CD58-4F9F-ABB3-4B7DDC6ED5ED}"/></cell>
                          <cell><label description="CheckboxBool"/><control id="ctrl_cb_bool" classid="{B0C6723A-8503-4FD7-BB28-C8A06AC933C2}"/></cell>
                          <cell><label description="Regarding"/><control id="ctrl_regarding" classid="{F3015350-44A2-4AA0-97B5-00166532B5E9}"/></cell>
                          <cell><label description="Unknown"/><control id="ctrl_unknown" classid="{FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF}"/></cell>
                          <cell><label description="NoClassId"/><control id="ctrl_noclassid"/></cell>
                          <cell><control id="ctrl_without_label" classid="{00AD73DA-BD4D-49C6-88A8-2F4F4CAD4A20}"/></cell>
                          <cell/>
                        </row>
                      </rows>
                    </section>
                  </sections>
                </column>
              </columns>
            </tab>
          </tabs>
          <footer>
            <rows>
              <row>
                <cell><label description="Footer Button"/><control id="footer_ok" classid="{00AD73DA-BD4D-49C6-88A8-2F4F4CAD4A20}"/></cell>
                <cell/>
                <cell><control id="" classid="{00AD73DA-BD4D-49C6-88A8-2F4F4CAD4A20}"/></cell>
              </row>
            </rows>
          </footer>
          <formparameters>
            <querystringparameter name="param_safe"        type="SafeString"/>
            <querystringparameter name="param_bool"        type="Boolean"/>
            <querystringparameter name="param_int"         type="Integer"/>
            <querystringparameter name="param_posint"      type="PositiveInteger"/>
            <querystringparameter name="param_dt"          type="DateTime"/>
            <querystringparameter name="param_uid"         type="UniqueId"/>
            <querystringparameter name="param_obj"         type="Object"/>
            <querystringparameter name="param_entity"      type="EntityType"/>
            <querystringparameter name="param_other"       type="UnknownParamType"/>
            <querystringparameter name="param_empty_type"  type=""/>
            <querystringparameter name=""                  type="SafeString"/>
          </formparameters>
        </form>
        """;

    private static SystemForm CreateDialogForm(string uniqueName, string? formXml, string name = "Test Dialog")
        => new SystemForm { UniqueName = uniqueName, Name = name, FormXml = formXml! };

    #endregion

    // =========================================================================
    // GetDialogClassName
    // =========================================================================
    #region GetDialogClassName

    [TestMethod]
    public void GetDialogClassName_Null_ReturnsNull()
    {
        Assert.IsNull(TsDialog.GetDialogClassName(null!));
    }

    [TestMethod]
    public void GetDialogClassName_Empty_ReturnsEmpty()
    {
        Assert.AreEqual(string.Empty, TsDialog.GetDialogClassName(string.Empty));
    }

    [TestMethod]
    public void GetDialogClassName_SingleWord_Capitalizes()
    {
        Assert.AreEqual("Hello", TsDialog.GetDialogClassName("hello"));
    }

    [TestMethod]
    public void GetDialogClassName_AlreadyPascalCase_Unchanged()
    {
        Assert.AreEqual("MyDialog", TsDialog.GetDialogClassName("MyDialog"));
    }

    [TestMethod]
    public void GetDialogClassName_UnderscoreSeparated_ReturnsPascalCase()
    {
        Assert.AreEqual("MyDialogForm", TsDialog.GetDialogClassName("my_dialog_form"));
    }

    [TestMethod]
    public void GetDialogClassName_SpaceSeparated_ReturnsPascalCase()
    {
        Assert.AreEqual("MyDialogForm", TsDialog.GetDialogClassName("my dialog form"));
    }

    [TestMethod]
    public void GetDialogClassName_MixedUnderscoreAndSpace_ReturnsPascalCase()
    {
        Assert.AreEqual("NewCaseTestForm", TsDialog.GetDialogClassName("new_case test_form"));
    }

    #endregion

    // =========================================================================
    // GetTsDialogCodeAsync — Empty / Null FormXml
    // (covers GetAllDialogControls early-return branch)
    // =========================================================================
    #region Empty FormXml

    [TestMethod]
    public async Task GetTsDialogCodeAsync_NullFormXml_GeneratesValidCodeWithNoControls()
    {
        var form = CreateDialogForm("MyDialog", null);

        // serviceClient is never used by the method — null! is intentional
        var code = await TsDialog.GetTsDialogCodeAsync(null!, form);

        Assert.IsTrue(code.Contains("export namespace DevKitDialog"),          "code should declare namespace");
        Assert.IsTrue(code.Contains("export namespace MyDialog"),              "code should declare inner namespace");
        Assert.IsTrue(code.Contains("export interface IDialog extends DevKit.IDialog"), "code should have IDialog interface");
        Assert.IsTrue(code.Contains("export class MyDialog extends DialogFormBase"), "code should have class declaration");
        Assert.IsTrue(code.Contains("constructor(executionContext: any"),      "code should have constructor");
        Assert.IsTrue(code.Contains("import { DialogFormBase } from '../lib/devkit'"), "code should import DialogFormBase");
        Assert.IsTrue(code.Contains("/// <reference path=\"../lib/devkit.d.ts\" />"), "code should have reference directive");
    }

    [TestMethod]
    public async Task GetTsDialogCodeAsync_EmptyFormXml_GeneratesValidCodeWithNoControls()
    {
        var form = CreateDialogForm("EmptyDialog", string.Empty);

        var code = await TsDialog.GetTsDialogCodeAsync(null!, form);

        Assert.IsTrue(code.Contains("export namespace EmptyDialog"));
        Assert.IsTrue(code.Contains("export class EmptyDialog extends DialogFormBase"));
        // No control ids in super() call
        Assert.IsTrue(code.Contains("super(executionContext, [], defaultWebResourceName)"));
    }

    #endregion

    // =========================================================================
    // GetTsDialogCodeAsync — All control types
    // (covers every GetDialogControlType and GetParameterControlType branch)
    // =========================================================================
    #region All Control Types

    [TestMethod]
    public async Task GetTsDialogCodeAsync_AllControlTypes_CodeContainsAllControlIds()
    {
        var form = CreateDialogForm("AllControlDialog", AllControlTypesFormXml, "All Control Dialog");

        var code = await TsDialog.GetTsDialogCodeAsync(null!, form);

        // Verify TS code structure
        Assert.IsTrue(code.Contains("export namespace DevKitDialog"));
        Assert.IsTrue(code.Contains("export namespace AllControlDialog"));
        Assert.IsTrue(code.Contains("export interface IDialog extends DevKit.IDialog"));
        Assert.IsTrue(code.Contains("export class AllControlDialog extends DialogFormBase<AllControlDialog.IDialog>"));

        // Header controls in super() call
        Assert.IsTrue(code.Contains("'header_label'"),   "header_label should appear in super() call");
        Assert.IsTrue(code.Contains("'header_nolabel'"), "header_nolabel should appear in super() call");

        // Body controls — spot-check
        Assert.IsTrue(code.Contains("'ctrl_btn'"));
        Assert.IsTrue(code.Contains("'ctrl_text'"));
        Assert.IsTrue(code.Contains("'ctrl_email'"));
        Assert.IsTrue(code.Contains("'ctrl_ticker'"));
        Assert.IsTrue(code.Contains("'ctrl_url'"));
        Assert.IsTrue(code.Contains("'ctrl_textarea'"));
        Assert.IsTrue(code.Contains("'ctrl_dt'"));
        Assert.IsTrue(code.Contains("'ctrl_int'"));
        Assert.IsTrue(code.Contains("'ctrl_dec'"));
        Assert.IsTrue(code.Contains("'ctrl_float'"));
        Assert.IsTrue(code.Contains("'ctrl_money'"));
        Assert.IsTrue(code.Contains("'ctrl_lookup'"));
        Assert.IsTrue(code.Contains("'ctrl_iframe'"));
        Assert.IsTrue(code.Contains("'ctrl_lang'"));
        Assert.IsTrue(code.Contains("'ctrl_tz'"));
        Assert.IsTrue(code.Contains("'ctrl_dur'"));
        Assert.IsTrue(code.Contains("'ctrl_os'"));
        Assert.IsTrue(code.Contains("'ctrl_mos'"));
        Assert.IsTrue(code.Contains("'ctrl_grid'"));
        Assert.IsTrue(code.Contains("'ctrl_dd_bool'"));
        Assert.IsTrue(code.Contains("'ctrl_cb_bool'"));
        Assert.IsTrue(code.Contains("'ctrl_regarding'"));
        Assert.IsTrue(code.Contains("'ctrl_unknown'"));
        Assert.IsTrue(code.Contains("'ctrl_noclassid'"));
        Assert.IsTrue(code.Contains("'ctrl_without_label'"));

        // Footer control
        Assert.IsTrue(code.Contains("'footer_ok'"), "footer_ok should appear in super() call");

        // Form parameters
        Assert.IsTrue(code.Contains("'param_safe'"));
        Assert.IsTrue(code.Contains("'param_bool'"));
        Assert.IsTrue(code.Contains("'param_int'"));
        Assert.IsTrue(code.Contains("'param_posint'"));
        Assert.IsTrue(code.Contains("'param_dt'"));
        Assert.IsTrue(code.Contains("'param_uid'"));
        Assert.IsTrue(code.Contains("'param_obj'"));
        Assert.IsTrue(code.Contains("'param_entity'"));
        Assert.IsTrue(code.Contains("'param_other'"));
        Assert.IsTrue(code.Contains("'param_empty_type'"));
    }

    [TestMethod]
    public async Task GetTsDialogCodeAsync_AllControlTypes_InterfaceContainsAllDialogTypes()
    {
        var form = CreateDialogForm("AllControlDialog", AllControlTypesFormXml);

        var code = await TsDialog.GetTsDialogCodeAsync(null!, form);

        // GetDialogControlType branches
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Label"),           "Label type missing");
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Button"),          "Button type missing");
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.String"),          "String type missing");
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Memo"),            "Memo type missing");
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.DateTime"),        "DateTime type missing");
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Integer"),         "Integer type missing");
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Decimal"),         "Decimal type missing");
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Double"),          "Double type missing");
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Money"),           "Money type missing");
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Lookup"),          "Lookup type missing");
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.IFrame"),          "IFrame type missing");
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.OptionSet"),       "OptionSet type missing");
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.MultiOptionSet"),  "MultiOptionSet type missing");
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Grid"),            "Grid type missing");
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Boolean"),         "Boolean type missing");
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Unknown"),         "Unknown type missing");
    }

    [TestMethod]
    public async Task GetTsDialogCodeAsync_AllControlTypes_LabelUsedAsCommentWhenPresent()
    {
        var form = CreateDialogForm("AllControlDialog", AllControlTypesFormXml);

        var code = await TsDialog.GetTsDialogCodeAsync(null!, form);

        Assert.IsTrue(code.Contains("/** Header Label */"),  "Header label text should be used as comment");
        Assert.IsTrue(code.Contains("/** Button */"),         "Button label should be used as comment");
        Assert.IsTrue(code.Contains("/** Footer Button */"),  "Footer label should be used as comment");
    }

    [TestMethod]
    public async Task GetTsDialogCodeAsync_ControlWithoutLabel_FallsBackToIdAsComment()
    {
        var form = CreateDialogForm("AllControlDialog", AllControlTypesFormXml);

        var code = await TsDialog.GetTsDialogCodeAsync(null!, form);

        // ctrl_without_label has no <label> element → id is used as comment
        Assert.IsTrue(code.Contains("/** ctrl_without_label */"), "Control id should be used as comment when label is absent");
        // header_nolabel has no <label> element → id is used as comment
        Assert.IsTrue(code.Contains("/** header_nolabel */"), "Header control id should be used as comment when label is absent");
    }

    [TestMethod]
    public async Task GetTsDialogCodeAsync_AllControlTypes_FileHeaderAndCommentsPresent()
    {
        var form = CreateDialogForm("AllControlDialog", AllControlTypesFormXml, "All Control Dialog");

        var code = await TsDialog.GetTsDialogCodeAsync(null!, form);

        Assert.IsTrue(code.Contains("AllControlDialog.dialog.ts"), "File header should mention dialog ts name");
        Assert.IsTrue(code.Contains("Generated file - DO NOT MODIFY MANUALLY"), "Header should include generation notice");
        Assert.IsTrue(code.Contains("Dialog controls interface"),  "IDialog section comment should be present");
        Assert.IsTrue(code.Contains("// Dialog: AllControlDialog"), "Dialog section divider comment should be present");
    }

    #endregion

    // =========================================================================
    // GetTsDialogCodeAsync — Form parameters type mapping
    // (covers each GetParameterControlType branch)
    // =========================================================================
    #region Form Parameter Types

    [TestMethod]
    public async Task GetTsDialogCodeAsync_FormParameters_BooleanType_MapsToBoolean()
    {
        const string xml = """
            <form>
              <formparameters>
                <querystringparameter name="is_active" type="Boolean"/>
              </formparameters>
            </form>
            """;
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("BoolParamDialog", xml));

        Assert.IsTrue(code.Contains("is_active: DevKit.Controls.Dialog.Boolean"));
    }

    [TestMethod]
    public async Task GetTsDialogCodeAsync_FormParameters_IntegerType_MapsToInteger()
    {
        const string xml = """
            <form>
              <formparameters>
                <querystringparameter name="count" type="Integer"/>
              </formparameters>
            </form>
            """;
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("IntParamDialog", xml));

        Assert.IsTrue(code.Contains("count: DevKit.Controls.Dialog.Integer"));
    }

    [TestMethod]
    public async Task GetTsDialogCodeAsync_FormParameters_PositiveIntegerType_MapsToInteger()
    {
        const string xml = """
            <form>
              <formparameters>
                <querystringparameter name="qty" type="PositiveInteger"/>
              </formparameters>
            </form>
            """;
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("PosIntDialog", xml));

        Assert.IsTrue(code.Contains("qty: DevKit.Controls.Dialog.Integer"));
    }

    [TestMethod]
    public async Task GetTsDialogCodeAsync_FormParameters_DateTimeType_MapsToDateTime()
    {
        const string xml = """
            <form>
              <formparameters>
                <querystringparameter name="event_date" type="DateTime"/>
              </formparameters>
            </form>
            """;
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("DtParamDialog", xml));

        Assert.IsTrue(code.Contains("event_date: DevKit.Controls.Dialog.DateTime"));
    }

    [TestMethod]
    public async Task GetTsDialogCodeAsync_FormParameters_SafeStringUniqueIdObjectEntityType_MapToString()
    {
        const string xml = """
            <form>
              <formparameters>
                <querystringparameter name="p_safe"   type="SafeString"/>
                <querystringparameter name="p_uid"    type="UniqueId"/>
                <querystringparameter name="p_obj"    type="Object"/>
                <querystringparameter name="p_entity" type="EntityType"/>
                <querystringparameter name="p_other"  type="Whatever"/>
                <querystringparameter name="p_empty"  type=""/>
              </formparameters>
            </form>
            """;
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("StringParamDialog", xml));

        Assert.IsTrue(code.Contains("p_safe: DevKit.Controls.Dialog.String"),   "SafeString → String");
        Assert.IsTrue(code.Contains("p_uid: DevKit.Controls.Dialog.String"),    "UniqueId → String");
        Assert.IsTrue(code.Contains("p_obj: DevKit.Controls.Dialog.String"),    "Object → String");
        Assert.IsTrue(code.Contains("p_entity: DevKit.Controls.Dialog.String"), "EntityType → String");
        Assert.IsTrue(code.Contains("p_other: DevKit.Controls.Dialog.String"),  "Unknown → String fallback");
        Assert.IsTrue(code.Contains("p_empty: DevKit.Controls.Dialog.String"),  "Empty type → String");
    }

    #endregion

    // =========================================================================
    // GetTsDialogCodeAsync — GetDialogControlType individual branches
    // =========================================================================
    #region Dialog Control Type Mappings

    private static string MakeBodyFormXml(string controlId, string classId)
        => $$"""
            <form>
              <tabs><tab><columns><column><sections><section>
                <rows><row>
                  <cell><label description="test"/><control id="{{controlId}}" classid="{{{classId}}}"/></cell>
                </row></rows>
              </section></sections></column></columns></tab></tabs>
            </form>
            """;

    [TestMethod]
    public async Task GetDialogControlType_Label_ReturnsLabel()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "39354E4A-5015-4D74-8031-EA9EB73A1322")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Label"));
    }

    [TestMethod]
    public async Task GetDialogControlType_Button_ReturnsButton()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "00AD73DA-BD4D-49C6-88A8-2F4F4CAD4A20")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Button"));
    }

    [TestMethod]
    public async Task GetDialogControlType_SltText_ReturnsString()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "4273EDBD-AC1D-40D3-9FB2-095C621B552D")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.String"));
    }

    [TestMethod]
    public async Task GetDialogControlType_SltEmail_ReturnsString()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "ADA2203E-B4CD-49BE-9DDF-234642B43B52")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.String"));
    }

    [TestMethod]
    public async Task GetDialogControlType_SltTickerSymbol_ReturnsString()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "1E1FC551-F7A8-43AF-AC34-A8DC35C7B6D4")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.String"));
    }

    [TestMethod]
    public async Task GetDialogControlType_SltUrl_ReturnsString()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "71716B6C-711E-476C-8AB8-5D11542BFB47")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.String"));
    }

    [TestMethod]
    public async Task GetDialogControlType_SltTextArea_ReturnsMemo()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "E0DECE4B-6FC8-4A8F-A065-082708572369")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Memo"));
    }

    [TestMethod]
    public async Task GetDialogControlType_DateTime_ReturnsDateTime()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "5B773807-9FB2-42DB-97C3-7A91EFF8ADFF")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.DateTime"));
    }

    [TestMethod]
    public async Task GetDialogControlType_WholeNumber_ReturnsInteger()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "C6D124CA-7EDA-4A60-AEA9-7FB8D318B68F")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Integer"));
    }

    [TestMethod]
    public async Task GetDialogControlType_DecimalNumber_ReturnsDecimal()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "C3EFE0C3-0EC6-42BE-8349-CBD9079DFD8E")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Decimal"));
    }

    [TestMethod]
    public async Task GetDialogControlType_FloatingPoint_ReturnsDouble()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "0D2C745A-E5A8-4C8F-BA63-C6D3BB604660")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Double"));
    }

    [TestMethod]
    public async Task GetDialogControlType_Currency_ReturnsMoney()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "533B9E00-756B-4312-95A0-DC888637AC78")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Money"));
    }

    [TestMethod]
    public async Task GetDialogControlType_Lookup_ReturnsLookup()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "270BD3DB-D9AF-4782-9025-509E298DEC0A")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Lookup"));
    }

    [TestMethod]
    public async Task GetDialogControlType_IFrame_ReturnsIFrame()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "FD2A7985-3187-444E-908D-6624B21F69C0")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.IFrame"));
    }

    [TestMethod]
    public async Task GetDialogControlType_DropdownLanguage_ReturnsInteger()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "671A9387-CA5A-4D1E-8AB7-06E39DDCF6B5")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Integer"));
    }

    [TestMethod]
    public async Task GetDialogControlType_DropdownTimezone_ReturnsInteger()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "7C624A0B-F59E-493D-9583-638D34759266")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Integer"));
    }

    [TestMethod]
    public async Task GetDialogControlType_DropdownDuration_ReturnsInteger()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "AA987274-CE4E-4271-A803-66164311A958")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Integer"));
    }

    [TestMethod]
    public async Task GetDialogControlType_OptionSet_ReturnsOptionSet()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "3EF39988-22BB-4F0B-BBBE-64B5A3748AEE")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.OptionSet"));
    }

    [TestMethod]
    public async Task GetDialogControlType_MultiSelectOptionSet_ReturnsMultiOptionSet()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "4AA28AB7-9C13-4F57-A73D-AD894D048B5F")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.MultiOptionSet"));
    }

    [TestMethod]
    public async Task GetDialogControlType_SubgridChart_ReturnsGrid()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "E7A81278-8635-4D9E-8D4D-59480B391C5B")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Grid"));
    }

    [TestMethod]
    public async Task GetDialogControlType_TwoOptionsDropdown_ReturnsBoolean()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "67FAC785-CD58-4F9F-ABB3-4B7DDC6ED5ED")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Boolean"));
    }

    [TestMethod]
    public async Task GetDialogControlType_TwoOptionsCheckbox_ReturnsBoolean()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "B0C6723A-8503-4FD7-BB28-C8A06AC933C2")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Boolean"));
    }

    [TestMethod]
    public async Task GetDialogControlType_Regarding_ReturnsLookup()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "F3015350-44A2-4AA0-97B5-00166532B5E9")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Lookup"));
    }

    [TestMethod]
    public async Task GetDialogControlType_UnknownGuid_ReturnsUnknown()
    {
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF")));
        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Unknown"));
    }

    [TestMethod]
    public async Task GetDialogControlType_MissingClassidAttr_ReturnsUnknown()
    {
        const string xml = """
            <form>
              <tabs><tab><columns><column><sections><section>
                <rows><row>
                  <cell><label description="test"/><control id="ctrl_noclass"/></cell>
                </row></rows>
              </section></sections></column></columns></tab></tabs>
            </form>
            """;
        var code = await TsDialog.GetTsDialogCodeAsync(null!, CreateDialogForm("D", xml));

        Assert.IsTrue(code.Contains("DevKit.Controls.Dialog.Unknown"), "Missing classid should map to Unknown");
    }

    #endregion
}
