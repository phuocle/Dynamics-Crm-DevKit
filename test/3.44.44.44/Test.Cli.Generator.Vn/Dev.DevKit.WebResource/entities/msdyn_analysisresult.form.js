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
			AnalysisResultDetails: {},
			msdyn_AnalysisComponentType: {},
			msdyn_AnalysisJobId: {},
			msdyn_Category: {},
			msdyn_EntityName: {},
			msdyn_FileUri: {},
			msdyn_helplink: {},
			msdyn_Level: {},
			msdyn_Line: {},
			msdyn_Member: {},
			msdyn_Message: {},
			msdyn_Module: {},
			msdyn_name: {},
			msdyn_ReturnStatus: {},
			msdyn_RuleId: {},
			msdyn_RuleReferenceUri: {},
			msdyn_Severity: {},
			msdyn_Snippet: {},
			msdyn_SolutionHealthMessage: {},
			msdyn_Type: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			AnalysisResultDetails: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult: {}
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
	OptionSet.msdyn_analysisresult = {
		msdyn_AnalysisComponentType : {
			Tinh_trang_Thanh_phan: 192350001,
			Tinh_trang_To_chuc: 192350000
		},
		msdyn_Category : {
			Bao_mat: 192350003,
			Di_chuyen_Truc_tuyen: 192350005,
			Hieu_suat: 192350000,
			Kha_nang_duy_tri: 192350006,
			Kha_nang_ho_tro: 192350007,
			Kha_nang_truy_nhap: 192350008,
			Licensing: 192350009,
			San_sang_Nang_cap: 192350001,
			Su_dung: 192350002,
			Thiet_ke: 192350004
		},
		msdyn_ComponentType : {
			Cau_hinh: 192350002,
			Phan_bo_tro: 192350001,
			Tai_nguyen_web: 192350000
		},
		msdyn_Level : {
			Canh_bao: 192350001,
			Loi: 192350000
		},
		msdyn_ReturnStatus : {
			Canh_bao: 192350004,
			Da_giai_quyet: 192350003,
			Dat: 192350000,
			Goi_y: 192350006,
			Loi: 192350005,
			Loi_Cau_hinh: 192350002,
			That_bai: 192350001
		},
		msdyn_Severity : {
			Cao: 192350002,
			Nghiem_trong: 192350003,
			Thap: 192350000,
			Trung_binh: 192350001
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