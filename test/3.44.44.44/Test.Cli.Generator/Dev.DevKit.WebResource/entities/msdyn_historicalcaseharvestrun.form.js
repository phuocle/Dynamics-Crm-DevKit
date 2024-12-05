'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_historicalcaseharvestrun = {
		statecode : {
			Completed: 1,
			Failed: 2,
			InProgress: 0
		},
		statuscode : {
			CaseIdentificationCompleted: 3,
			CaseIdentificationFailed: 5,
			CaseIndentificationInProgress: 2,
			Completed: 4,
			Ready: 1
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