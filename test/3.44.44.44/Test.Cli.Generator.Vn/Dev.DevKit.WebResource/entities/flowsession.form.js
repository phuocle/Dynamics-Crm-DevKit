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
			Name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			flowevent_flowsession: {},
			flowsession_flowlog_flowsessionid: {},
			flowsession_flowlog_parentobjectid: {},
			flowsession_workflowbinary_FlowSessionId: {}
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
	OptionSet.flowsession = {
		RegardingObjectTypeCode : {
		},
		RunMode : {
			Co_giam_sat: 1,
			Cuc_bo: 0,
			Khong_giam_sat: 2
		},
		RunSessionMode : {
			Hinh_trong_hinh: 2,
			Khong_the_ap_dung: 0,
			Mac_dinh: 1
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Bi_loi: 9,
			Da_bo_qua_12: 12,
			Da_bo_qua_5: 5,
			Da_cham_dut: 14,
			Da_het_thoi_gian_cho: 10,
			Da_huy: 7,
			Da_huy_bo: 11,
			Da_tam_dung: 1,
			Da_thanh_cong: 4,
			Da_treo: 6,
			Da_xoa: 13,
			Dang_chay: 2,
			Dang_cho: 3,
			Khong_chi_dinh: 0,
			Khong_thanh_cong: 8
		},
		TriggerType : {
			ApiFlow: 0,
			Cuc_bo: 2,
			DesktopFlow: 1,
			RunDesktopFlowDataverseApi: 3
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