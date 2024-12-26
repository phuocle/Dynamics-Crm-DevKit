'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.DuplicateRuleCondition = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		OperatorCode : {
			Khop_Chinh_xac: 0,
			Khop_Chinh_xac_Gia_tri_Danh_sach_Chon: 6,
			Khop_Chinh_xac_Nhan_Danh_sach_Chon: 5,
			Ky_tu_Cuoi_cung_Giong_nhau: 2,
			Ky_tu_Dau_tien_Giong_nhau: 1,
			Ngay_Giong_nhau: 3,
			Ngay_va_Gio_Giong_nhau: 4
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