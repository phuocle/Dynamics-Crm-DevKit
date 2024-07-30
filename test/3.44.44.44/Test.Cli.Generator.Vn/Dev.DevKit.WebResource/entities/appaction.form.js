'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.appaction = {
		ClientType : {
			Thiet_bi_di_dong: 1,
			Trinh_duyet: 0,
			Ung_dung_thu: 2
		},
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		Context : {
			Tat_ca: 0,
			Thuc_the: 1
		},
		Location : {
			Bang_thong_tin: 6,
			Bieu_mau: 0,
			Bieu_mau_nhanh: 4,
			Luoi_chinh: 1,
			Luoi_con: 2,
			Luoi_lien_ket: 3,
			Tieu_de_chung: 5
		},
		OnClickEventType : {
			Cong_thuc: 1,
			JavaScript: 2,
			Khong_co: 0
		},
		Origin : {
			Da_di_chuyen: 1,
			Da_di_chuyen_o_cap_do_nang_cao: 2,
			Mac_dinh: 0
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
		},
		Type : {
			Nhom: 3,
			Nut_chia_tach: 2,
			Nut_tha_xuong: 1,
			Nut_tieu_chuan: 0
		},
		VisibilityType : {
			Cong_thuc: 1,
			Khong_co: 0,
			Quy_tac_co_dien: 2
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