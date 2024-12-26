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
			Default: 0,
			MeetingRequest: 3,
			SendContentRequest: 1,
			YesNo: 2
		},
		RecordIdObjectTypeCode : {
		},
		RegardingObjectTypeCode : {
		},
		StateCode : {
			Completed: 1,
			Dismiss: 2,
			Pending: 0
		},
		StatusCode : {
			Completed: 2,
			Dismiss: 3,
			Pending: 1
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