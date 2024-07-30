'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formpowerpagecomponent_Information = function(executionContext, defaultWebResourceName) {
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
			content: {},
			filecontent: {},
			name: {},
			OwnerId: {},
			powerpagecomponenttype: {},
			powerpageparentcomponentid: {},
			powerpagesiteid: {},
			powerpagesitelanguageid: {},
			statecode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			powerpagecomponent_mspp_webformid_adx_webformsession: {},
			powerpagecomponent_mspp_webformstepid_adx_webformsession: {}
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
	OptionSet.powerpagecomponent = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		powerpagecomponenttype : {
			Bieu_mau_co_ban: 15,
			Bieu_mau_nang_cao: 19,
			Bo_lien_ket_web: 4,
			Buoc_bieu_mau_nang_cao: 20,
			Chuyen_huong: 30,
			Cong_cu_danh_dau_trang: 13,
			Danh_sach: 17,
			Doan_noi_dung: 7,
			Dong_dam_may: 33,
			Ho_so_quyen_doi_voi_cot: 28,
			Lien_ket_web: 5,
			Loi_tat: 32,
			Mau_trang: 6,
			Mau_web: 8,
			Nguoi_tieu_dung_bot: 27,
			Quy_tac_chuyen_tiep_trang_thai_phat_hanh: 31,
			Quy_tac_kiem_soat_quyen_truy_cap_trang_web: 10,
			Quyen_doi_voi_bang: 18,
			Quyen_doi_voi_cot: 29,
			Sieu_du_lieu_bieu_mau_co_ban: 16,
			Sieu_du_lieu_bieu_mau_nang_cao: 21,
			Tep_web: 3,
			Thanh_phan_UX: 34,
			Thiet_dat_trang: 9,
			Trang_thai_phat_hanh: 1,
			Trang_web: 2,
			Truy_cap_website: 12,
			Vai_tro_web: 11,
			Vi_tri_quang_cao: 26,
			Vi_tri_tham_do_y_kien: 24
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