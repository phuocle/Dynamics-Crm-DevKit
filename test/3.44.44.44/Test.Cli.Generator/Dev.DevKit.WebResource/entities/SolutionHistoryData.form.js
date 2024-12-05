'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SolutionHistoryData = {
		Operation : {
			Export: 2,
			Import: 0,
			Uninstall: 1
		},
		Status : {
			End: 1,
			Start: 0
		},
		SubOperation : {
			Delete: 4,
			New: 1,
			None: 0,
			Update: 3,
			Upgrade: 2
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