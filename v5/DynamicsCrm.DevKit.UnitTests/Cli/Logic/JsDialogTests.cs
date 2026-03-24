using DynamicsCrm.DevKit.Shared.Logic;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Logic;

/// <summary>
/// Unit tests for JsDialog.cs — exercises GetDialogClassName, GetJsDialogCodeAsync,
/// GetAllDialogControls (via public API), GetDialogControlType, and GetParameterControlType.
/// The AllControlTypesFormXml fixture is designed to hit every branch of the private methods
/// to achieve 100% code coverage.
/// </summary>
[TestClass]
public class JsDialogTests
{
    #region Test Fixtures

    /// <summary>
    /// A single FormXml document that covers:
    /// Header controls: with label, without label, empty-id (skipped), null-control cell (skipped)
    /// Body controls : all 23 classIds (Label, Button, SLT_TEXT, SLT_EMAIL, SLT_TICKER_SYMBOL,
    ///                  SLT_URL, SLT_TEXT_AREA, DATETIME, NUMBER_WHOLE_NUMBER,
    ///                  NUMBER_DECIMAL_NUMBER, NUMBER_FLOATING_POINT_NUMBER,
    ///                  NUMBER_CURRENCY, LOOKUP, IFRAME, DROPDOWN_LANGUAGE,
    ///                  DROPDOWN_TIMEZONE, DROPDOWN_DURATION, OPTIONSET_OPTIONSET,
    ///                  OPTIONSET_MULTISELECT_OPTIONSET, SUBGRID_CHART,
    ///                  TWOOPTIONS_DROPDOWN, TWOOPTIONS_CHECKBOX, REGARDING)
    ///                 + unknown GUID (fallthrough → Unknown)
    ///                 + missing classid attr (null → Unknown via IsNullOrEmpty)
    ///                 + control without label (falls back to id as comment)
    ///                 + empty cell (null control, skipped)
    /// Footer controls: with label, empty cell (skipped), empty-id (skipped)
    /// Form parameters: SafeString, Boolean, Integer, PositiveInteger, DateTime,
    ///                  UniqueId, Object, EntityType, UnknownParamType (fallthrough),
    ///                  empty type="" (IsNullOrEmpty → String), empty name (skipped)
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
        Assert.IsNull(JsDialog.GetDialogClassName(null!));
    }

    [TestMethod]
    public void GetDialogClassName_Empty_ReturnsEmpty()
    {
        Assert.AreEqual(string.Empty, JsDialog.GetDialogClassName(string.Empty));
    }

    [TestMethod]
    public void GetDialogClassName_SingleWord_Capitalizes()
    {
        Assert.AreEqual("Hello", JsDialog.GetDialogClassName("hello"));
    }

    [TestMethod]
    public void GetDialogClassName_AlreadyPascalCase_Unchanged()
    {
        Assert.AreEqual("MyDialog", JsDialog.GetDialogClassName("MyDialog"));
    }

    [TestMethod]
    public void GetDialogClassName_UnderscoreSeparated_ReturnsPascalCase()
    {
        Assert.AreEqual("MyDialogForm", JsDialog.GetDialogClassName("my_dialog_form"));
    }

    [TestMethod]
    public void GetDialogClassName_SpaceSeparated_ReturnsPascalCase()
    {
        Assert.AreEqual("MyDialogForm", JsDialog.GetDialogClassName("my dialog form"));
    }

    [TestMethod]
    public void GetDialogClassName_MixedUnderscoreAndSpace_ReturnsPascalCase()
    {
        Assert.AreEqual("NewCaseTestForm", JsDialog.GetDialogClassName("new_case test_form"));
    }

    #endregion

    // =========================================================================
    // GetJsDialogCodeAsync — Empty / Null FormXml
    // (covers GetAllDialogControls early-return branch)
    // =========================================================================
    #region Empty FormXml

    [TestMethod]
    public async Task GetJsDialogCodeAsync_NullFormXml_GeneratesValidCodeWithNoControls()
    {
        var form = CreateDialogForm("MyDialog", null);

        // serviceClient is never used by the method — null! is intentional
        var (code, dts) = await JsDialog.GetJsDialogCodeAsync(null!, form);

        Assert.IsTrue(code.Contains("var DevKitDialog;"), "code should declare namespace");
        Assert.IsTrue(code.Contains("DevKitDialog.MyDialog"), "code should declare dialog function");
        Assert.IsTrue(code.Contains("devKit.LoadFormDialog"), "code should call LoadFormDialog");
        Assert.IsTrue(dts.Contains("declare namespace DevKitDialog"), "dts should declare namespace");
        Assert.IsTrue(dts.Contains("interface IDialog"), "dts should have IDialog interface");
        Assert.IsTrue(dts.Contains("class MyDialog"), "dts should have class declaration");
        Assert.IsTrue(dts.Contains("Utility: DevKit.Utility"), "dts should have Utility property");
        Assert.IsTrue(dts.Contains("Close(): void"), "dts should have Close method");
    }

    [TestMethod]
    public async Task GetJsDialogCodeAsync_EmptyFormXml_GeneratesValidCodeWithNoControls()
    {
        var form = CreateDialogForm("EmptyDialog", string.Empty);

        var (code, dts) = await JsDialog.GetJsDialogCodeAsync(null!, form);

        Assert.IsTrue(code.Contains("DevKitDialog.EmptyDialog"));
        Assert.IsTrue(dts.Contains("class EmptyDialog"));
        Assert.IsTrue(dts.Contains("constructor(executionContext: any"));
        Assert.IsTrue(dts.Contains("Dialog: EmptyDialog.IDialog"));
    }

    #endregion

    // =========================================================================
    // GetJsDialogCodeAsync — All control types
    // (covers every GetDialogControlType and GetParameterControlType branch)
    // =========================================================================
    #region All Control Types

    [TestMethod]
    public async Task GetJsDialogCodeAsync_AllControlTypes_JsCodeContainsAllControlIds()
    {
        var form = CreateDialogForm("AllControlDialog", AllControlTypesFormXml);

        var (code, _) = await JsDialog.GetJsDialogCodeAsync(null!, form);

        // Verify JS code structure
        Assert.IsTrue(code.Contains("var DevKitDialog;"));
        Assert.IsTrue(code.Contains("DevKitDialog.AllControlDialog"));
        Assert.IsTrue(code.Contains("devKit.LoadFormDialog"));

        // Header controls
        Assert.IsTrue(code.Contains("\"header_label\""), "header_label should appear in id list");
        Assert.IsTrue(code.Contains("\"header_nolabel\""), "header_nolabel should appear in id list");

        // Body controls — spot-check a subset
        Assert.IsTrue(code.Contains("\"ctrl_btn\""));
        Assert.IsTrue(code.Contains("\"ctrl_text\""));
        Assert.IsTrue(code.Contains("\"ctrl_email\""));
        Assert.IsTrue(code.Contains("\"ctrl_ticker\""));
        Assert.IsTrue(code.Contains("\"ctrl_url\""));
        Assert.IsTrue(code.Contains("\"ctrl_textarea\""));
        Assert.IsTrue(code.Contains("\"ctrl_dt\""));
        Assert.IsTrue(code.Contains("\"ctrl_int\""));
        Assert.IsTrue(code.Contains("\"ctrl_dec\""));
        Assert.IsTrue(code.Contains("\"ctrl_float\""));
        Assert.IsTrue(code.Contains("\"ctrl_money\""));
        Assert.IsTrue(code.Contains("\"ctrl_lookup\""));
        Assert.IsTrue(code.Contains("\"ctrl_iframe\""));
        Assert.IsTrue(code.Contains("\"ctrl_lang\""));
        Assert.IsTrue(code.Contains("\"ctrl_tz\""));
        Assert.IsTrue(code.Contains("\"ctrl_dur\""));
        Assert.IsTrue(code.Contains("\"ctrl_os\""));
        Assert.IsTrue(code.Contains("\"ctrl_mos\""));
        Assert.IsTrue(code.Contains("\"ctrl_grid\""));
        Assert.IsTrue(code.Contains("\"ctrl_dd_bool\""));
        Assert.IsTrue(code.Contains("\"ctrl_cb_bool\""));
        Assert.IsTrue(code.Contains("\"ctrl_regarding\""));
        Assert.IsTrue(code.Contains("\"ctrl_unknown\""));
        Assert.IsTrue(code.Contains("\"ctrl_noclassid\""));
        Assert.IsTrue(code.Contains("\"ctrl_without_label\""));

        // Footer control
        Assert.IsTrue(code.Contains("\"footer_ok\""), "footer_ok should appear in id list");

        // Form parameters
        Assert.IsTrue(code.Contains("\"param_safe\""));
        Assert.IsTrue(code.Contains("\"param_bool\""));
        Assert.IsTrue(code.Contains("\"param_int\""));
        Assert.IsTrue(code.Contains("\"param_posint\""));
        Assert.IsTrue(code.Contains("\"param_dt\""));
        Assert.IsTrue(code.Contains("\"param_uid\""));
        Assert.IsTrue(code.Contains("\"param_obj\""));
        Assert.IsTrue(code.Contains("\"param_entity\""));
        Assert.IsTrue(code.Contains("\"param_other\""));
        Assert.IsTrue(code.Contains("\"param_empty_type\""));

        // Empty-name param should NOT appear (skipped)
        // Empty-id controls should NOT appear (skipped)
    }

    [TestMethod]
    public async Task GetJsDialogCodeAsync_AllControlTypes_DtsContainsAllDialogControlTypes()
    {
        var form = CreateDialogForm("AllControlDialog", AllControlTypesFormXml);

        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, form);

        // GetDialogControlType branches
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Label"),           "Label type missing");
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Button"),          "Button type missing");
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.String"),          "String type missing");
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Memo"),            "Memo type missing");
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.DateTime"),        "DateTime type missing");
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Integer"),         "Integer type missing");
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Decimal"),         "Decimal type missing");
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Double"),          "Double type missing");
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Money"),           "Money type missing");
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Lookup"),          "Lookup type missing");
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.IFrame"),          "IFrame type missing");
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.OptionSet"),       "OptionSet type missing");
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.MultiOptionSet"),  "MultiOptionSet type missing");
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Grid"),            "Grid type missing");
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Boolean"),         "Boolean type missing");
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Unknown"),         "Unknown type missing");

        // GetParameterControlType branches — params appear as String/Boolean/Integer/DateTime
        // param_bool → Boolean; param_int/param_posint → Integer; param_dt → DateTime
        // All other param types → String (already covered by Dialog.String assertion above)
    }

    [TestMethod]
    public async Task GetJsDialogCodeAsync_AllControlTypes_DtsClassStructureIsComplete()
    {
        var form = CreateDialogForm("AllControlDialog", AllControlTypesFormXml);

        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, form);

        Assert.IsTrue(dts.Contains("declare namespace DevKitDialog"));
        Assert.IsTrue(dts.Contains("export namespace AllControlDialog"));
        Assert.IsTrue(dts.Contains("interface IDialog"));
        Assert.IsTrue(dts.Contains("class AllControlDialog"));
        Assert.IsTrue(dts.Contains("constructor(executionContext: any, defaultWebResourceName?: string)"));
        Assert.IsTrue(dts.Contains("Dialog: AllControlDialog.IDialog"));
        Assert.IsTrue(dts.Contains("Utility: DevKit.Utility"));
        Assert.IsTrue(dts.Contains("Close(): void"));
    }

    [TestMethod]
    public async Task GetJsDialogCodeAsync_AllControlTypes_LabelUsedAsCommentWhenPresent()
    {
        var form = CreateDialogForm("AllControlDialog", AllControlTypesFormXml);

        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, form);

        // Controls with explicit labels use the label text as JSDoc comment
        Assert.IsTrue(dts.Contains("/** Header Label */"),   "Header label text should be used as comment");
        Assert.IsTrue(dts.Contains("/** Button */"),          "Button label should be used as comment");
        Assert.IsTrue(dts.Contains("/** Footer Button */"),   "Footer label should be used as comment");
    }

    [TestMethod]
    public async Task GetJsDialogCodeAsync_ControlWithoutLabel_FallsBackToIdAsComment()
    {
        var form = CreateDialogForm("AllControlDialog", AllControlTypesFormXml);

        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, form);

        // ctrl_without_label has no <label> element → id is used as comment
        Assert.IsTrue(dts.Contains("/** ctrl_without_label */"), "Control id should be used as comment when label is absent");
        // header_nolabel has no <label> element → id is used as comment
        Assert.IsTrue(dts.Contains("/** header_nolabel */"), "Header control id should be used as comment when label is absent");
    }

    #endregion

    // =========================================================================
    // GetJsDialogCodeAsync — Form parameters type mapping
    // (covers each GetParameterControlType branch)
    // =========================================================================
    #region Form Parameter Types

    [TestMethod]
    public async Task GetJsDialogCodeAsync_FormParameters_BooleanType_MapsToBoolean()
    {
        const string xml = """
            <form>
              <formparameters>
                <querystringparameter name="is_active" type="Boolean"/>
              </formparameters>
            </form>
            """;
        var form = CreateDialogForm("BoolParamDialog", xml);

        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, form);

        Assert.IsTrue(dts.Contains("is_active: DevKit.Controls.Dialog.Boolean"));
    }

    [TestMethod]
    public async Task GetJsDialogCodeAsync_FormParameters_IntegerType_MapsToInteger()
    {
        const string xml = """
            <form>
              <formparameters>
                <querystringparameter name="count" type="Integer"/>
              </formparameters>
            </form>
            """;
        var form = CreateDialogForm("IntParamDialog", xml);

        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, form);

        Assert.IsTrue(dts.Contains("count: DevKit.Controls.Dialog.Integer"));
    }

    [TestMethod]
    public async Task GetJsDialogCodeAsync_FormParameters_PositiveIntegerType_MapsToInteger()
    {
        const string xml = """
            <form>
              <formparameters>
                <querystringparameter name="qty" type="PositiveInteger"/>
              </formparameters>
            </form>
            """;
        var form = CreateDialogForm("PosIntDialog", xml);

        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, form);

        Assert.IsTrue(dts.Contains("qty: DevKit.Controls.Dialog.Integer"));
    }

    [TestMethod]
    public async Task GetJsDialogCodeAsync_FormParameters_DateTimeType_MapsToDateTime()
    {
        const string xml = """
            <form>
              <formparameters>
                <querystringparameter name="event_date" type="DateTime"/>
              </formparameters>
            </form>
            """;
        var form = CreateDialogForm("DtParamDialog", xml);

        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, form);

        Assert.IsTrue(dts.Contains("event_date: DevKit.Controls.Dialog.DateTime"));
    }

    [TestMethod]
    public async Task GetJsDialogCodeAsync_FormParameters_SafeStringUniqueIdObjectEntityType_MapToString()
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
        var form = CreateDialogForm("StringParamDialog", xml);

        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, form);

        Assert.IsTrue(dts.Contains("p_safe: DevKit.Controls.Dialog.String"),   "SafeString → String");
        Assert.IsTrue(dts.Contains("p_uid: DevKit.Controls.Dialog.String"),    "UniqueId → String");
        Assert.IsTrue(dts.Contains("p_obj: DevKit.Controls.Dialog.String"),    "Object → String");
        Assert.IsTrue(dts.Contains("p_entity: DevKit.Controls.Dialog.String"), "EntityType → String");
        Assert.IsTrue(dts.Contains("p_other: DevKit.Controls.Dialog.String"),  "Unknown → String fallback");
        Assert.IsTrue(dts.Contains("p_empty: DevKit.Controls.Dialog.String"),  "Empty type → String");
    }

    #endregion

    // =========================================================================
    // GetJsDialogCodeAsync — GetDialogControlType individual branches
    // (individual focused tests for each classId → type mapping)
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
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "39354E4A-5015-4D74-8031-EA9EB73A1322")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Label"));
    }

    [TestMethod]
    public async Task GetDialogControlType_Button_ReturnsButton()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "00AD73DA-BD4D-49C6-88A8-2F4F4CAD4A20")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Button"));
    }

    [TestMethod]
    public async Task GetDialogControlType_SltText_ReturnsString()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "4273EDBD-AC1D-40D3-9FB2-095C621B552D")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.String"));
    }

    [TestMethod]
    public async Task GetDialogControlType_SltEmail_ReturnsString()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "ADA2203E-B4CD-49BE-9DDF-234642B43B52")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.String"));
    }

    [TestMethod]
    public async Task GetDialogControlType_SltTickerSymbol_ReturnsString()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "1E1FC551-F7A8-43AF-AC34-A8DC35C7B6D4")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.String"));
    }

    [TestMethod]
    public async Task GetDialogControlType_SltUrl_ReturnsString()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "71716B6C-711E-476C-8AB8-5D11542BFB47")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.String"));
    }

    [TestMethod]
    public async Task GetDialogControlType_SltTextArea_ReturnsMemo()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "E0DECE4B-6FC8-4A8F-A065-082708572369")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Memo"));
    }

    [TestMethod]
    public async Task GetDialogControlType_DateTime_ReturnsDateTime()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "5B773807-9FB2-42DB-97C3-7A91EFF8ADFF")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.DateTime"));
    }

    [TestMethod]
    public async Task GetDialogControlType_WholeNumber_ReturnsInteger()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "C6D124CA-7EDA-4A60-AEA9-7FB8D318B68F")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Integer"));
    }

    [TestMethod]
    public async Task GetDialogControlType_DecimalNumber_ReturnsDecimal()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "C3EFE0C3-0EC6-42BE-8349-CBD9079DFD8E")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Decimal"));
    }

    [TestMethod]
    public async Task GetDialogControlType_FloatingPoint_ReturnsDouble()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "0D2C745A-E5A8-4C8F-BA63-C6D3BB604660")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Double"));
    }

    [TestMethod]
    public async Task GetDialogControlType_Currency_ReturnsMoney()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "533B9E00-756B-4312-95A0-DC888637AC78")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Money"));
    }

    [TestMethod]
    public async Task GetDialogControlType_Lookup_ReturnsLookup()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "270BD3DB-D9AF-4782-9025-509E298DEC0A")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Lookup"));
    }

    [TestMethod]
    public async Task GetDialogControlType_IFrame_ReturnsIFrame()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "FD2A7985-3187-444E-908D-6624B21F69C0")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.IFrame"));
    }

    [TestMethod]
    public async Task GetDialogControlType_DropdownLanguage_ReturnsInteger()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "671A9387-CA5A-4D1E-8AB7-06E39DDCF6B5")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Integer"));
    }

    [TestMethod]
    public async Task GetDialogControlType_DropdownTimezone_ReturnsInteger()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "7C624A0B-F59E-493D-9583-638D34759266")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Integer"));
    }

    [TestMethod]
    public async Task GetDialogControlType_DropdownDuration_ReturnsInteger()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "AA987274-CE4E-4271-A803-66164311A958")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Integer"));
    }

    [TestMethod]
    public async Task GetDialogControlType_OptionSet_ReturnsOptionSet()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "3EF39988-22BB-4F0B-BBBE-64B5A3748AEE")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.OptionSet"));
    }

    [TestMethod]
    public async Task GetDialogControlType_MultiSelectOptionSet_ReturnsMultiOptionSet()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "4AA28AB7-9C13-4F57-A73D-AD894D048B5F")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.MultiOptionSet"));
    }

    [TestMethod]
    public async Task GetDialogControlType_SubgridChart_ReturnsGrid()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "E7A81278-8635-4D9E-8D4D-59480B391C5B")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Grid"));
    }

    [TestMethod]
    public async Task GetDialogControlType_TwoOptionsDropdown_ReturnsBoolean()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "67FAC785-CD58-4F9F-ABB3-4B7DDC6ED5ED")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Boolean"));
    }

    [TestMethod]
    public async Task GetDialogControlType_TwoOptionsCheckbox_ReturnsBoolean()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "B0C6723A-8503-4FD7-BB28-C8A06AC933C2")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Boolean"));
    }

    [TestMethod]
    public async Task GetDialogControlType_Regarding_ReturnsLookup()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "F3015350-44A2-4AA0-97B5-00166532B5E9")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Lookup"));
    }

    [TestMethod]
    public async Task GetDialogControlType_UnknownGuid_ReturnsUnknown()
    {
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", MakeBodyFormXml("c", "FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF")));
        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Unknown"));
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
        var (_, dts) = await JsDialog.GetJsDialogCodeAsync(null!, CreateDialogForm("D", xml));

        Assert.IsTrue(dts.Contains("DevKit.Controls.Dialog.Unknown"), "Missing classid should map to Unknown");
    }

    #endregion
}
