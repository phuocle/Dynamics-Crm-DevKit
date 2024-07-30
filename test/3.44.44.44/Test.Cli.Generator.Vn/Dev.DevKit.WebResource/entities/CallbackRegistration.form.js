'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.CallbackRegistration = {
		Message : {
			Cap_nhat: 3,
			Cap_nhat_hoac_Xoa: 6,
			Tao: 1,
			Tao_hoac_Cap_nhat: 4,
			Tao_hoac_Cap_nhat_hoac_Xoa: 7,
			Tao_hoac_Xoa: 5,
			Xoa: 2
		},
		RunAs : {
			Chu_so_huu_Ban_ghi: 2,
			Chu_so_huu_Quy_trinh: 3,
			Dang_kich_hoat_Nguoi_dung: 1
		},
		Scope : {
			Don_vi_Kinh_doanh: 2,
			Nguoi_dung: 1,
			ParentChildBusinessUnit: 3,
			To_chuc: 4
		},
		Version : {
			V1: 1,
			V2: 2,
			V3: 3
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