'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.DelveActionHub = {
		CardType : {
			Mac_dinh: 0,
			MeetingRequest: 3,
			SendContentRequest: 1,
			YesNo: 2
		},
		RecordIdObjectTypeCode : {
		},
		RegardingObjectTypeCode : {
		},
		StateCode : {
			Da_hoan_thanh: 1,
			Dang_cho_xu_ly: 0,
			Loai_bo: 2
		},
		StatusCode : {
			Da_hoan_thanh: 2,
			Dang_cho_xu_ly: 1,
			Loai_bo: 3
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