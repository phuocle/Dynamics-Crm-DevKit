'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormContent_Page = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["mspp_alloworigin", "mspp_category", "mspp_copy", "mspp_copy1", "mspp_customcss", "mspp_customcss1", "mspp_customjavascript", "mspp_customjavascript1", "mspp_displaydate", "mspp_displayorder", "mspp_editorialcomments", "mspp_enablerating", "mspp_entityform", "mspp_entitylist", "mspp_excludefromsearch", "mspp_expirationdate", "mspp_feedbackpolicy", "mspp_hiddenfromsitemap", "mspp_image", "mspp_imageurl", "mspp_isroot", "mspp_masterwebpageid", "mspp_meta_description", "mspp_name", "mspp_navigation", "mspp_pagetemplateid", "mspp_parentpageid", "mspp_partialurl", "mspp_publishingstateid", "mspp_releasedate", "mspp_rootwebpageid", "mspp_summary", "mspp_summary1", "mspp_title", "mspp_webform", "mspp_webpagelanguageid", "mspp_websiteid", "subgrid_localized_content"],
			bpf: [],
			dialog: [],
			grid: ["subgrid_localized_content"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0____2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_2", "_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0____2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_3", "_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0____2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_4", "_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0____CC6684CC_049C_4371_9AE1_58682459A75F", "_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0___mspp_webpage_copy_monacoEditor_text_section", "_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0___mspp_webpage_summary_monacoEditor_text_section", "_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0___section_localized_content", "tab_7___mspp_customcss_MonacoEditor_mspp_webpage_text_section", "tab_7___tab_7_section_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.Formmspp_webpage_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["childPages", "grid_accesscontrolrules", "grid_childfiles", "mspp_alloworigin", "mspp_category", "mspp_customcss", "mspp_customcss1", "mspp_customjavascript", "mspp_customjavascript1", "mspp_displaydate", "mspp_displayorder", "mspp_editorialcomments", "mspp_enablerating", "mspp_entityform", "mspp_entitylist", "mspp_excludefromsearch", "mspp_expirationdate", "mspp_feedbackpolicy", "mspp_hiddenfromsitemap", "mspp_image", "mspp_imageurl", "mspp_isroot", "mspp_masterwebpageid", "mspp_meta_description", "mspp_name", "mspp_pagetemplateid", "mspp_parentpageid", "mspp_partialurl", "mspp_publishingstateid", "mspp_releasedate", "mspp_rootwebpageid", "mspp_webform", "mspp_websiteid", "subgrid_localized_content"],
			bpf: [],
			dialog: [],
			grid: ["childPages", "grid_accesscontrolrules", "grid_childfiles", "subgrid_localized_content"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0____2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_3", "_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0____2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_4", "_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0____CC6684CC_049C_4371_9AE1_58682459A75F", "_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0___section_localized_content", "tab_5___tab_5_section_1", "tab_7___mspp_webpage_customcss_MonacoEditor", "tab_7___tab_7_section_1", "tab_accesscontrolrules___tab_6_section_2", "tab_childfiles___tab_6_section_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_webpage = {
		mspp_category: { News: 1 },
		mspp_feedbackpolicy: { Closed: 756150005, Inherit: 756150000, Item: 756150003, Moderated: 756150004, None: 756150001, Open: 756150002 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));