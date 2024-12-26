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
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		processortype : {
			Cloud_Flow: 1,
			Flow_Machine: 2,
			None: 0
		},
		statecode : {
			Error: 4,
			OnHold: 3,
			Processed: 2,
			Processing: 1,
			Queued: 0
		},
		statuscode : {
			BusinessException: 6,
			DeadLetter: 7,
			GenericException: 4,
			ITException: 5,
			Paused: 3,
			Processed: 2,
			Processing: 1,
			ProcessingTimeout: 8,
			Queued: 0
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