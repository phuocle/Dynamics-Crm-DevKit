'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_OptimizationRequest = {
		msdyn_OptimizationStatus : {
			Canceled: 772020003,
			Failed: 772020002,
			Running: 772020000,
			Succeeded: 772020001
		},
		msdyn_OptimizationType : {
			Single_Resource_Optimization: 772020000
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