'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.WorkflowLog = {
		ChildWorkflowInstanceObjectTypeCode : {
			Cong_viec_He_thong: 4700,
			Giao_dich_quy_trinh_lam_viec: 4710,
			Phien_dong: 4720
		},
		ObjectTypeCode : {
			Cong_viec_He_thong: 4700,
			Giao_dich_quy_trinh_lam_viec: 4710,
			Phien_dong: 4720
		},
		RegardingObjectTypeCode : {
		},
		Status : {
			Da_huy: 4,
			Da_thanh_cong: 2,
			Dang_cho: 5,
			Dang_tien_hanh: 1,
			Khong_thanh_cong: 3
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