'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RollupProperties = {
		AggregateType : {
			Average: 2,
			Count: 0,
			Max: 4,
			Min: 3,
			Sum: 1
		},
		InitialValueCalculationStatus : {
			Completed: 3,
			Failed: 4,
			In_Progress: 1,
			Paused: 2,
			Pending: 0
		},
		StateCode : {
			Invalid: 1,
			Valid: 0
		},
		StatusCode : {
			Invalid: 2,
			Valid: 1
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