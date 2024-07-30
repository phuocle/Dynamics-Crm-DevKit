'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ActionCard = {
		ParentRegardingObjectTypeCode : {
		},
		RecordIdObjectTypeCode : {
		},
		RegardingObjectTypeCode : {
		},
		Source : {
			CRM: 1,
			Exchange: 2
		},
		State : {
			Da_hoan_thanh: 2,
			Da_loai_bo: 1,
			Hien_hoat: 0
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