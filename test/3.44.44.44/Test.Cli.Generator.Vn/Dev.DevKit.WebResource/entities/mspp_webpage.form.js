'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormContent_Page = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			mspp_alloworigin: {},
			mspp_category: {},
			mspp_copy: {},
			mspp_customcss: {},
			mspp_customjavascript: {},
			mspp_displaydate: {},
			mspp_displayorder: {},
			mspp_editorialcomments: {},
			mspp_enablerating: {},
			mspp_entityform: {},
			mspp_entitylist: {},
			mspp_excludefromsearch: {},
			mspp_expirationdate: {},
			mspp_feedbackpolicy: {},
			mspp_hiddenfromsitemap: {},
			mspp_image: {},
			mspp_imageurl: {},
			mspp_isroot: {},
			mspp_masterwebpageid: {},
			mspp_meta_description: {},
			mspp_name: {},
			mspp_navigation: {},
			mspp_pagetemplateid: {},
			mspp_parentpageid: {},
			mspp_partialurl: {},
			mspp_publishingstateid: {},
			mspp_releasedate: {},
			mspp_rootwebpageid: {},
			mspp_summary: {},
			mspp_title: {},
			mspp_webform: {},
			mspp_webpagelanguageid: {},
			mspp_websiteid: {},
			subgrid_localized_content: {},
			WebResource_mspp_copy_monaco: {},
			WebResource_mspp_customcss_editor: {},
			WebResource_mspp_customjavascript_editor: {},
			WebResource_mspp_summary_monaco: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0: {
				Section: {
					_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_2: {},
					_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_3: {},
					_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_4: {},
					_CC6684CC_049C_4371_9AE1_58682459A75F: {},
					section_localized_content: {}
				}
			},
			tab_7: {
				Section: {
					tab_7_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			subgrid_localized_content: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			mspp_entityform_redirectwebpage: {},
			mspp_entitylist_webpageforcreate: {},
			mspp_entitylist_webpagefordetailsview: {},
			mspp_parentwebpage_shortcut: {},
			mspp_webformstep_redirectwebpage: {},
			mspp_webpage_masterwebpage: {},
			mspp_webpage_redirect: {},
			mspp_webpage_shortcut: {},
			mspp_webpage_sitemarker: {},
			mspp_webpage_webfile: {},
			mspp_webpage_weblink: {},
			mspp_webpage_webpage: {},
			mspp_webpage_webpage_rootwebpageid: {},
			mspp_webpage_webpageaccesscontrolrule: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmspp_webpage_Information = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			childPages: {},
			grid_accesscontrolrules: {},
			grid_childfiles: {},
			mspp_alloworigin: {},
			mspp_category: {},
			mspp_customcss: {},
			mspp_customjavascript: {},
			mspp_displaydate: {},
			mspp_displayorder: {},
			mspp_editorialcomments: {},
			mspp_enablerating: {},
			mspp_entityform: {},
			mspp_entitylist: {},
			mspp_excludefromsearch: {},
			mspp_expirationdate: {},
			mspp_feedbackpolicy: {},
			mspp_hiddenfromsitemap: {},
			mspp_image: {},
			mspp_imageurl: {},
			mspp_isroot: {},
			mspp_masterwebpageid: {},
			mspp_meta_description: {},
			mspp_name: {},
			mspp_pagetemplateid: {},
			mspp_parentpageid: {},
			mspp_partialurl: {},
			mspp_publishingstateid: {},
			mspp_releasedate: {},
			mspp_rootwebpageid: {},
			mspp_webform: {},
			mspp_websiteid: {},
			subgrid_localized_content: {},
			WebResource_mspp_customcss_editor: {},
			WebResource_mspp_customjavascript_editor: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0: {
				Section: {
					_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_3: {},
					_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_4: {},
					_CC6684CC_049C_4371_9AE1_58682459A75F: {},
					section_localized_content: {}
				}
			},
			tab_5: {
				Section: {
					tab_5_section_1: {}
				}
			},
			tab_7: {
				Section: {
					tab_7_section_1: {}
				}
			},
			tab_accesscontrolrules: {
				Section: {
					tab_6_section_2: {}
				}
			},
			tab_childfiles: {
				Section: {
					tab_6_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			childPages: {},
			grid_accesscontrolrules: {},
			grid_childfiles: {},
			subgrid_localized_content: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			mspp_entityform_redirectwebpage: {},
			mspp_entitylist_webpageforcreate: {},
			mspp_entitylist_webpagefordetailsview: {},
			mspp_parentwebpage_shortcut: {},
			mspp_webformstep_redirectwebpage: {},
			mspp_webpage_masterwebpage: {},
			mspp_webpage_redirect: {},
			mspp_webpage_shortcut: {},
			mspp_webpage_sitemarker: {},
			mspp_webpage_webfile: {},
			mspp_webpage_weblink: {},
			mspp_webpage_webpage: {},
			mspp_webpage_webpage_rootwebpageid: {},
			mspp_webpage_webpageaccesscontrolrule: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_webpage = {
		mspp_category : {
			Tin_tuc: 1
		},
		mspp_feedbackpolicy : {
			Da_dong: 756150005,
			Da_kiem_duyet: 756150004,
			Ke_thua: 756150000,
			Khong_co: 756150001,
			Mo: 756150002,
			Muc: 756150003
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));