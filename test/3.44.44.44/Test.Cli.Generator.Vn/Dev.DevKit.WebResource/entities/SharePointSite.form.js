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
			AbsoluteURL: {},
			Description: {},
			IsGridPresent: {},
			IsPowerBISite: {},
			LastValidated: {},
			Name: {},
			OwnerId: {},
			ParentSite: {},
			RelativeUrl: {},
			urloption: {},
			ValidationStatus: {},
			ValidationStatusErrorCode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					section_1: {},
					url_option: {},
					url_validation: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			sharepointsite_parentsite_sharepointsite: {}
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
	OptionSet.SharePointSite = {
		FolderStructureEntity : {
			Khong: 0,
			Nguoi_lien_he: 2,
			Tai_khoan: 1
		},
		ParentSiteObjectTypeCode : {
		},
		ServiceType : {
			Cac_nhom_MS: 3,
			Duoc_chia_se_voi_toi: 2,
			OneDrive: 1,
			SharePoint: 0
		},
		StateCode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		StatusCode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
		},
		ValidationStatus : {
			Chua_xac_thuc: 1,
			Dang_tien_hanh: 2,
			Hop_le: 4,
			Khong_hop_le: 3,
			Khong_the_xac_thuc: 5
		},
		ValidationStatusErrorCode : {
			Chua_xac_thuc_URL_cua_ban_ghi_nay: 1,
			Chung_chi_khong_hop_le: 7,
			Khong_the_truy_cap_URL_do_thiet_dat_bao_mat_cua_Internet_Explorer: 5,
			Loi_xac_thuc: 6,
			So_do_URL_cua_Microsoft_Dynamics_365_va_SharePoint_khac_nhau: 4,
			URL_cua_ban_ghi_nay_co_hop_le: 2,
			URL_cua_ban_ghi_nay_khong_hop_le: 3
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