'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Comment = {
		ArtifactType : {
			Bot: 4,
			Mo_dun_ung_dung: 3,
			Quy_trinh_lam_viec: 0,
			Thanh_phan_bot: 2,
			Trang_web_Power_Pages: 5,
			Ung_dung_canvas: 1
		},
		Kind : {
			Bo_chua: 0,
			Chuoi_chu_de: 1,
			Tra_loi: 2
		},
		ParentIdType : {
		},
		State : {
			Da_giai_quyet: 1,
			Mo: 0
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