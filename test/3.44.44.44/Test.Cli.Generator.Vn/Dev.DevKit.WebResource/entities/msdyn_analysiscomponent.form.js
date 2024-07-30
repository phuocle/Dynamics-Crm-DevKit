'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormThong_tin = function(executionContext, defaultWebResourceName) {
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
			msdyn_AnalysisComponentType: {},
			msdyn_AnalysisJobId: {},
			msdyn_ComponentId: {},
			msdyn_ComponentName: {},
			msdyn_ComponentType: {},
			msdyn_ErrorCount: {},
			msdyn_name: {},
			msdyn_RetryCount: {},
			msdyn_RuleFailCount: {},
			msdyn_RulePassCount: {},
			msdyn_RulePassRate: {},
			msdyn_SolutionHealthRuleSetId: {},
			msdyn_WarningCount: {},
			OwnerId: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_2: {
				Section: {
					tab_2_section_1: {},
					tab_2_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_analysiscomponent_msdyn_analysisresult: {}
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
	OptionSet.msdyn_analysiscomponent = {
		msdyn_AnalysisComponentType : {
			Tinh_trang_doi_tuong: 192350002,
			Tinh_trang_Thanh_phan: 192350001,
			Tinh_trang_To_chuc: 192350000
		},
		msdyn_ComponentType : {
			Bieu_mau: 192350003,
			Cau_hinh: 192350005,
			Dang_xem: 192350002,
			Giai_phap: 192350000,
			Phan_bo_tro: 192350004,
			Thuc_the: 192350001
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Da_hoan_thanh_kem_theo_Ngoai_le: 192350003,
			Da_huy: 2,
			Dang_chay: 192350000,
			Dang_cho_xu_ly: 1,
			Hoan_thanh: 192350001,
			Ngoai_le: 192350002
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