'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SolutionHistoryData = {
		Operation : {
			Do_cai_dat: 1,
			Nhap: 0,
			Xuat: 2
		},
		Status : {
			Bat_dau: 0,
			Ket_thuc: 1
		},
		SubOperation : {
			Cap_nhat: 3,
			Khong_co: 0,
			Moi: 1,
			Nang_cap: 2,
			Xoa: 4
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