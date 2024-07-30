'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.workqueueitem = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		processortype : {
			Dong_dam_may: 1,
			Khong_co: 0,
			May_trong_dong_quy_trinh: 2
		},
		statecode : {
			Da_xep_hang: 0,
			Da_xu_ly: 2,
			Dang_xu_ly: 1,
			Loi: 4,
			Tam_hoan: 3
		},
		statuscode : {
			Da_tam_dung: 3,
			Da_xep_hang: 0,
			Da_xu_ly: 2,
			Dang_xu_ly: 1,
			Khong_gui_duoc: 7,
			Ngoai_le_chung: 4,
			Ngoai_le_doi_voi_IT: 5,
			Ngoai_le_kinh_doanh: 6,
			ProcessingTimeout: 8
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