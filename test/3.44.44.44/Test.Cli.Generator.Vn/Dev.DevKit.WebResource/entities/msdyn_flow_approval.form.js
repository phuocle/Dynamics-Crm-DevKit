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
			msdyn_flow_approval_name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_flow_approvalrelationship_approvalrequests: {},
			msdyn_flow_approvalrelationship_approvalresponses: {},
			msdyn_flow_approvalrelationship_approvalsteps: {},
			msdyn_flow_approvalrelationship_flowapprovals: {}
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
	OptionSet.msdyn_flow_approval = {
		msdyn_flow_approval_priority : {
			Khan_cap: 192350000,
			Quan_trong: 192350001,
			Thap: 192350003,
			Trung_binh: 192350002
		},
		msdyn_flow_approval_requesttype : {
			Co_ban: 192350001,
			Khac: 192350000,
			Ky_dien_tu: 192350002,
			Mau: 192350003
		},
		msdyn_flow_approval_stage : {
			Co_ban: 192350001,
			Hoan_thanh: 192351000,
			Khong_chi_dinh: 192350000
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Da_het_han: 192350005,
			Da_hoan_thanh: 192350004,
			Da_huy: 192350006,
			Da_huy_bo: 192350007,
			Da_tao: 192350000,
			Da_treo: 192350002,
			Dang_cho_xu_ly: 192350001
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