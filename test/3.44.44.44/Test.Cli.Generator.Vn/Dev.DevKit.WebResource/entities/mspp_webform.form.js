﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmspp_webform_Information = function(executionContext, defaultWebResourceName) {
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
			grid_webformsessions: {},
			grid_webformsteps: {},
			grid_webpages: {},
			mspp_authenticationrequired: {},
			mspp_editexpiredmessage: {},
			mspp_editexpiredstatecode: {},
			mspp_editexpiredstatuscode: {},
			mspp_multiplerecordsperuserpermitted: {},
			mspp_name: {},
			mspp_progressindicatorenabled: {},
			mspp_progressindicatorignorelaststep: {},
			mspp_progressindicatorposition: {},
			mspp_progressindicatorprependstepnum: {},
			mspp_progressindicatortype: {},
			mspp_provisionedlanguages: {},
			mspp_savechangeswarningmessage: {},
			mspp_savechangeswarningonclose: {},
			mspp_startnewsessiononload: {},
			mspp_startstep: {},
			mspp_websiteid: {},
			WebResource_localize_editexpiredmessage: {},
			WebResource_localize_savechangeswarningmessage: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_sessions: {
				Section: {
					tab_4_section_1: {}
				}
			},
			tab_webformsteps: {
				Section: {
					tab_2_section_1: {}
				}
			},
			tab_webpages: {
				Section: {
					tab_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			grid_webformsessions: {},
			grid_webformsteps: {},
			grid_webpages: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			mspp_webform_webformmetadata_entityformforcreate: {},
			mspp_webformstep_webform: {},
			mspp_webpage_webform: {}
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
	OptionSet.mspp_webform = {
		mspp_progressindicatorposition : {
			Duoi_cung: 756150001,
			Phai: 756150003,
			Trai: 756150002,
			Tren_cung: 756150000
		},
		mspp_progressindicatortype : {
			Chuc_danh: 756150000,
			Dang_so_Buoc_1N: 756150001,
			Thanh_tien_trinh: 756150002
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