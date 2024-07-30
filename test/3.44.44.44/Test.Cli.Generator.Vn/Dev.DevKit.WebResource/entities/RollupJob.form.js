'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RollupJob = {
		RegardingObjectTypeCode : {
		},
		StateCode : {
			Da_hoan_thanh: 3,
			Da_khoa: 2,
			Da_treo: 1,
			San_sang: 0
		},
		StatusCode : {
			Da_huy: 32,
			Da_thanh_cong: 30,
			Dang_cho: 10,
			Dang_cho_nguon_luc: 0,
			Dang_huy: 22,
			Dang_tam_dung: 21,
			Dang_tien_hanh: 20,
			Khong_thanh_cong: 31
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