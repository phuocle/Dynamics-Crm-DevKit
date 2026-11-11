/// <reference path="devkit.d.ts" />
declare namespace DevKitDialog {
	export namespace pl_dataversedialogbuilder_demo {
		interface IDialog {
			/** Dataverse Dialog Builder */
			pl_header_label1: DevKit.Controls.Dialog.Label;
			/** v.1.0 */
			pl_header_label2: DevKit.Controls.Dialog.Label;
			/** Tab  1/20: LABEL */
			pl_label1: DevKit.Controls.Dialog.Label;
			/** Tab  2/20: TEXTBOX */
			pl_label2: DevKit.Controls.Dialog.Label;
			/** Tab  3/20: TEXTAREA */
			pl_label3: DevKit.Controls.Dialog.Label;
			/** Tab  4/20: DATETIME */
			pl_label4: DevKit.Controls.Dialog.Label;
			/** Tab  5/20: NUMBER */
			pl_label5: DevKit.Controls.Dialog.Label;
			/** Tab  6/20: LOOKUP */
			pl_label6: DevKit.Controls.Dialog.Label;
			/** Tab  7/20: REGARDING */
			pl_label7: DevKit.Controls.Dialog.Label;
			/** Tab  8/20: IFRAME */
			pl_label8: DevKit.Controls.Dialog.Label;
			/** Tab  9/20: DROPDOWN */
			pl_label9: DevKit.Controls.Dialog.Label;
			/** Tab 10/20: OPTIONSET */
			pl_label10: DevKit.Controls.Dialog.Label;
			/** Tab 11/20: TWOOPTIONS */
			pl_label11: DevKit.Controls.Dialog.Label;
			/** Tab 12/20: SUBGRID */
			pl_label12: DevKit.Controls.Dialog.Label;
			/** Tab 13/20: CHART */
			pl_label13: DevKit.Controls.Dialog.Label;
			/** Tab 14/20: RICH TEXT BOX */
			pl_label14: DevKit.Controls.Dialog.Label;
			/** Tab 15/20: ENTITY OPTION SET */
			pl_label15: DevKit.Controls.Dialog.Label;
			/** Tab 16/20: ADVANCED FIND */
			pl_label16: DevKit.Controls.Dialog.Label;
			/** Tab 17/20: ADVANCED FIND RESULT */
			pl_label17: DevKit.Controls.Dialog.Label;
			/** Tab 18/20: UPLOAD */
			pl_label18: DevKit.Controls.Dialog.Label;
			/** Tab 19/20: ADVANCED FIND AND RESULT */
			pl_label19: DevKit.Controls.Dialog.Label;
			/** Tab 20/20: MULTISELECT LOOKUP */
			pl_label20: DevKit.Controls.Dialog.Label;
			/** HIDE */
			pl_label_hide: DevKit.Controls.Dialog.Label;
			/** Text */
			pl_textbox1: DevKit.Controls.Dialog.String;
			/** Email */
			pl_textbox2: DevKit.Controls.Dialog.String;
			/** URL */
			pl_textbox3: DevKit.Controls.Dialog.String;
			/** Ticker Symbol */
			pl_textbox4: DevKit.Controls.Dialog.String;
			/** Phone */
			pl_textbox5: DevKit.Controls.Dialog.String;
			/** HIDE */
			pl_textbox_hide: DevKit.Controls.Dialog.String;
			/** Text Area */
			pl_textarea1: DevKit.Controls.Dialog.Memo;
			/** HIDE */
			pl_textarea_hide: DevKit.Controls.Dialog.Memo;
			/** Date Time */
			pl_datetime1: DevKit.Controls.Dialog.DateTime;
			/** Date */
			pl_datetime2: DevKit.Controls.Dialog.DateTime;
			/** Time */
			pl_datetime3: DevKit.Controls.Dialog.DateTime;
			/** HIDE */
			pl_datetime_hide: DevKit.Controls.Dialog.DateTime;
			/** Whole Number */
			pl_number1: DevKit.Controls.Dialog.Integer;
			/** Decimal Number */
			pl_number2: DevKit.Controls.Dialog.Decimal;
			/** Floating Point Number */
			pl_number3: DevKit.Controls.Dialog.Double;
			/** Currency */
			pl_number4: DevKit.Controls.Dialog.Money;
			/** HIDE */
			pl_number_hide: DevKit.Controls.Dialog.Money;
			/** Lookup */
			pl_lookup1: DevKit.Controls.Dialog.Lookup;
			/** Multiselect Lookup */
			pl_lookup2: DevKit.Controls.Dialog.Lookup;
			/** HIDE */
			pl_lookup_hide: DevKit.Controls.Dialog.Lookup;
			/** Regarding */
			pl_regarding1: DevKit.Controls.Dialog.Lookup;
			/** HIDE */
			pl_regarding_hide: DevKit.Controls.Dialog.Lookup;
			/** pl_iframe1 */
			pl_iframe1: DevKit.Controls.Dialog.IFrame;
			/** HIDE */
			pl_iframe_hide: DevKit.Controls.Dialog.IFrame;
			/** Language */
			pl_dropdown1: DevKit.Controls.Dialog.Integer;
			/** TimeZone */
			pl_dropdown2: DevKit.Controls.Dialog.Integer;
			/** Duration */
			pl_dropdown3: DevKit.Controls.Dialog.Integer;
			/** HIDE */
			pl_dropdown_hide: DevKit.Controls.Dialog.Integer;
			/** OptionSet Dynamic */
			pl_optionset1: DevKit.Controls.Dialog.OptionSet;
			/** OptionSet Local */
			pl_optionset2: DevKit.Controls.Dialog.OptionSet;
			/** OptionSet Global */
			pl_optionset3: DevKit.Controls.Dialog.OptionSet;
			/** MultiSelect OptionSet Dynamic */
			pl_optionset4: DevKit.Controls.Dialog.MultiOptionSet;
			/** MultiSelect OptionSet Local */
			pl_optionset5: DevKit.Controls.Dialog.MultiOptionSet;
			/** MultiSelect OptionSet Global */
			pl_optionset6: DevKit.Controls.Dialog.MultiOptionSet;
			/** HIDE */
			pl_optionset_hide: DevKit.Controls.Dialog.OptionSet;
			/** TwoOptions Dropdown */
			pl_twooptions1: DevKit.Controls.Dialog.Boolean;
			/** TwoOptions Checkbox */
			pl_twooptions2: DevKit.Controls.Dialog.Boolean;
			/** TwoOptions Toggle */
			pl_twooptions3: DevKit.Controls.Dialog.Boolean;
			/** HIDE */
			pl_twooptions_hide: DevKit.Controls.Dialog.Boolean;
			/** Accounts */
			pl_subgrid1: DevKit.Controls.Dialog.Grid;
			/** HIDE */
			pl_subgrid_hide: DevKit.Controls.Dialog.Grid;
			/** Chart */
			pl_chart1: DevKit.Controls.Dialog.Grid;
			/** HIDE */
			pl_chart_hide: DevKit.Controls.Dialog.Grid;
			/** pl_rtb1 */
			pl_rtb1: DevKit.Controls.Dialog.Unknown;
			/** pl_rtb2 */
			pl_rtb2: DevKit.Controls.Dialog.Unknown;
			/** pl_rtb_hide */
			pl_rtb_hide: DevKit.Controls.Dialog.Unknown;
			/** Entity OptionSet */
			pl_entity_optionset1: DevKit.Controls.Dialog.Unknown;
			/** HIDE */
			pl_entity_optionset_hide: DevKit.Controls.Dialog.Unknown;
			/** pl_advfind1 */
			pl_advfind1: DevKit.Controls.Dialog.Unknown;
			/** pl_advfind_hide */
			pl_advfind_hide: DevKit.Controls.Dialog.Unknown;
			/** pl_advfind_result1 */
			pl_advfind_result1: DevKit.Controls.Dialog.Unknown;
			/** pl_advfind_result_hide */
			pl_advfind_result_hide: DevKit.Controls.Dialog.Unknown;
			/** Upload File */
			pl_upload1: DevKit.Controls.Dialog.Unknown;
			/** HIDE */
			pl_upload_hide: DevKit.Controls.Dialog.Unknown;
			/** pl_advfind_and_result1 */
			pl_advfind_and_result1: DevKit.Controls.Dialog.Unknown;
			/** pl_advfind_and_result_hide */
			pl_advfind_and_result_hide: DevKit.Controls.Dialog.Unknown;
			/** MULTISELECT LOOKUP */
			pl_multiselect_lookup1: DevKit.Controls.Dialog.Unknown;
			/** HIDE */
			pl_multiselect_lookup_hide: DevKit.Controls.Dialog.Unknown;
			/** pl_parameter_input */
			pl_parameter_input: DevKit.Controls.Dialog.String;
			/** pl_para_fetchxml */
			pl_para_fetchxml: DevKit.Controls.Dialog.String;
			/** pl_para_entitylogicalname */
			pl_para_entitylogicalname: DevKit.Controls.Dialog.String;
			/** pl_para_validationerrormessage */
			pl_para_validationerrormessage: DevKit.Controls.Dialog.String;
			/** pl_para_isvalid */
			pl_para_isvalid: DevKit.Controls.Dialog.Boolean;
			/** pl_para_layout_xml */
			pl_para_layout_xml: DevKit.Controls.Dialog.String;
			/** pl_para_selected_records */
			pl_para_selected_records: DevKit.Controls.Dialog.String;
			/** pl_para_entity_type */
			pl_para_entity_type: DevKit.Controls.Dialog.String;
			/** pl_para_attachment_file_name */
			pl_para_attachment_file_name: DevKit.Controls.Dialog.String;
			/** pl_para_uploaded_file_size */
			pl_para_uploaded_file_size: DevKit.Controls.Dialog.Integer;
			/** pl_para_entity_records */
			pl_para_entity_records: DevKit.Controls.Dialog.String;
			/** pl_para_targetentities */
			pl_para_targetentities: DevKit.Controls.Dialog.String;
			/** pl_para_selectedentities */
			pl_para_selectedentities: DevKit.Controls.Dialog.String;
			/** pl_para_isdisabled */
			pl_para_isdisabled: DevKit.Controls.Dialog.String;
			/** pl_para_disablemru */
			pl_para_disablemru: DevKit.Controls.Dialog.String;
		}
	}
	export class pl_dataversedialogbuilder_demo {
		constructor(executionContext: any, defaultWebResourceName?: string);
		Dialog: pl_dataversedialogbuilder_demo.IDialog;
		Utility: DevKit.Utility;
		Close(): void;
	}
}

