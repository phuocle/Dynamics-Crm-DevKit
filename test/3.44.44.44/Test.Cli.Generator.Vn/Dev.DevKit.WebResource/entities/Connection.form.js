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
			Description: {},
			EffectiveEnd: {},
			EffectiveStart: {},
			OwnerId: {},
			Record1Id: {},
			Record1RoleId: {},
			Record2Id: {},
			Record2RoleId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			details: {
				Section: {
					connect_from: {},
					details: {}
				}
			},
			info: {
				Section: {
					description: {},
					info_s: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			Record1Id: {}
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
	OptionSet.Connection = {
		Record1IdObjectTypeCode : {
		},
		Record1ObjectTypeCode : {
			Bai_viet_trong_co_so_kien_thuc: 9953,
			Ban_ghi_co_so_kien_thuc: 9930,
			Cuoc_goi_dien_thoai: 4210,
			Cuoc_hen: 4201,
			Cuoc_hen_lap_lai: 4251,
			Email: 4202,
			Fax: 4204,
			Giao_dich_quy_trinh: 4710,
			Ho_so_Mang_xa_hoi: 99,
			Hoat_dong: 4200,
			Hoat_dong_mang_xa_hoi: 4216,
			Loi_moi: 10309,
			Loi_tat: 10331,
			Muc_tieu: 9600,
			Nguoi_dung: 8,
			Nguoi_lien_he: 2,
			Nhiem_vu: 4212,
			Nhom: 9,
			Quy_doi_Loi_moi: 10310,
			Quy_tac_Cau_hinh_Truy_cap_Kenh: 9400,
			Quy_tac_chuyen_tiep_trang_thai_phat_hanh: 10329,
			Tai_khoan: 1,
			Thu_tin: 4207,
			Vi_tri: 50,
			Vung_lanh_tho: 2013,
			Website: 10343
		},
		Record2IdObjectTypeCode : {
		},
		Record2ObjectTypeCode : {
			Bai_viet_trong_co_so_kien_thuc: 9953,
			Ban_ghi_co_so_kien_thuc: 9930,
			Cuoc_goi_dien_thoai: 4210,
			Cuoc_hen: 4201,
			Cuoc_hen_lap_lai: 4251,
			Email: 4202,
			Fax: 4204,
			Giao_dich_quy_trinh: 4710,
			Ho_so_Mang_xa_hoi: 99,
			Hoat_dong: 4200,
			Hoat_dong_mang_xa_hoi: 4216,
			Loi_moi: 10309,
			Loi_tat: 10331,
			Muc_tieu: 9600,
			Nguoi_dung: 8,
			Nguoi_lien_he: 2,
			Nhiem_vu: 4212,
			Nhom: 9,
			Quy_doi_Loi_moi: 10310,
			Quy_tac_Cau_hinh_Truy_cap_Kenh: 9400,
			Quy_tac_chuyen_tiep_trang_thai_phat_hanh: 10329,
			Tai_khoan: 1,
			Thu_tin: 4207,
			Vi_tri: 50,
			Vung_lanh_tho: 2013,
			Website: 10343
		},
		StateCode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		StatusCode : {
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