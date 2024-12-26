'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.AppModuleComponent = {
		ComponentType : {
			Bieu_do: 59,
			Bieu_mau: 60,
			Dang_xem: 26,
			Dong_quy_trinh_cong_viec: 29,
			Lenh_Ruy_bang_cho_Bieu_mau_Luoi_luoi_con: 48,
			So_do_trang: 62,
			Thuc_the: 1
		},
		RootComponentBehavior : {
			Bao_gom_cac_thanh_phan_phu: 0,
			Chi_bao_gom_duoi_dang_vo: 2,
			Khong_bao_gom_cac_thanh_phan_phu: 1
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