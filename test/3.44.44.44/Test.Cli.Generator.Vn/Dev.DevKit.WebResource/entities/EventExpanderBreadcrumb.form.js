'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.EventExpanderBreadcrumb = {
		StateCode : {
			Bi_khoa: 2,
			Da_hoan_tat: 3,
			San_sang: 0
		},
		StatusCode : {
			Da_huy: 32,
			Dang_cho_tai_nguyen: 0,
			Dang_huy: 22,
			Dang_thuc_hien: 20,
			Khong_thanh_cong: 31,
			Thanh_cong: 30
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