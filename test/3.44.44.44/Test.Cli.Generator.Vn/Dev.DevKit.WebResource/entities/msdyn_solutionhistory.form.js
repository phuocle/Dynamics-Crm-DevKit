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
			msdyn_errorcode: {},
			msdyn_exceptionmessage: {},
			msdyn_ismanaged: {},
			msdyn_isoverwritecustomizations: {},
			msdyn_ispatch: {},
			msdyn_name: {},
			msdyn_operation: {},
			msdyn_publishername: {},
			msdyn_solutionversion: {},
			msdyn_suboperation: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyn_endtime: {},
			msdyn_result: {},
			msdyn_starttime: {},
			msdyn_totaltime: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
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
	OptionSet.msdyn_solutionhistory = {
		msdyn_operation : {
			Cung_cap_Ngon_ngu: 5,
			Do_cai_dat: 1,
			Khong_co: 9,
			Nhap: 0,
			Nhap_Ban_dich: 6,
			Phat_hanh: 3,
			Phat_hanh_Tat_ca: 4,
			Thao_tac_Sieu_du_lieu_trong_Ruy_bang: 7,
			Trang_thai_Dat_Quy_trinh_lam_viec: 8,
			Xuat: 2
		},
		msdyn_status : {
			Da_bat_dau: 0,
			Da_hoan_thanh: 1
		},
		msdyn_suboperation : {
			Cap_nhat: 3,
			Khong_co: 0,
			Moi: 1,
			Nang_cap: 2,
			Xoa: 4
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