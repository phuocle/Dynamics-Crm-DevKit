'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmspp_webpageaccesscontrolrule_Information = function(executionContext, defaultWebResourceName) {
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
			grid_webroles: {},
			mspp_description: {},
			mspp_name: {},
			mspp_right: {},
			mspp_scope: {},
			mspp_webpageid: {},
			mspp_websiteid: {},
			publishing_states: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_300B9BF7_0715_4AE2_8C50_A8C82541E3A9: {
				Section: {
					_9CE2EE20_11E4_4D93_9F2A_C5B20F77791F: {}
				}
			},
			tab_3: {
				Section: {
					tab_3_section_1: {}
				}
			},
			tab_webroles: {
				Section: {
					tab_4_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			grid_webroles: {},
			publishing_states: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {

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
	OptionSet.mspp_webpageaccesscontrolrule = {
		mspp_right : {
			Cho_phep_thay_doi: 1,
			Han_che_doc: 2
		},
		mspp_scope : {
			Loai_tru_cac_tep_web_con_truc_tiep: 2,
			Tat_ca_noi_dung: 1
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