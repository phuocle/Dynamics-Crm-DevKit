'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SocialInsightsConfiguration = {
		FormTypeCode : {
			Bieu_mau_he_thong: 1030,
			Bieu_mau_nguoi_dung: 1031
		},
		RegardingObjectTypeCode : {
		},
		SocialDataItemType : {
			Lop: 2,
			Muc_tim_kiem: 1
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