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
			msdyn_name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_pminferredtask_msdyn_pmanalysishistory_parenttask: {},
			msdyn_msdyn_pminferredtask_msdyn_pmbusinessruleautomationconfig_PMInferredTaskId: {},
			msdyn_msdyn_pminferredtask_msdyn_pmprocesstemplate_pmnferredtaskid: {},
			msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask: {},
			msdyn_pminferredtask_msdyn_pmprocessusersettings_parenttask: {},
			msdyn_pminferredtask_msdyn_pmprocessversion: {},
			msdyn_pmsimulation_pminferredtaskid_msdyn_pminferredtask: {}
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
	OptionSet.msdyn_pminferredtask = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		msdyn_automationstatus : {
			Chua_bat_dau: 200000000,
			Dang_tien_hanh: 200000002,
			Hoan_thanh: 200000003,
			Khong_duoc_de_xuat: 200000001
		},
		msdyn_reportprovisioningstatus : {
			Chua_bat_dau: 193350000,
			Da_bo_qua: 193350004,
			Da_cung_cap: 193350002,
			Dang_cung_cap: 193350001,
			Khong_thanh_cong: 193350003
		},
		msdyn_source : {
			Dang_ghi: 0,
			Kho_du_lieu: 1
		},
		statecode : {
			Ban_nhap: 0,
			Da_nhap: 4,
			Dang_tien_hanh: 1,
			Hoan_tat: 2,
			Khong_thanh_cong: 3
		},
		statuscode : {
			Ban_nhap: 0,
			Da_nhap: 7,
			Da_phan_tich: 4,
			Da_xep_hang_doi: 1,
			Dang_phan_tich: 2,
			Dang_xoa: 3,
			Khong_phan_tich_duoc: 5,
			Khong_xoa_duoc: 6
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