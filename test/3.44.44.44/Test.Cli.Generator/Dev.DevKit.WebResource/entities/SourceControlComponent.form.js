'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SourceControlComponent = {
		Action : {
			Conflict: 3,
			None: 0,
			Pull: 2,
			Push: 1
		},
		SolutionComponentState : {
			Create: 0,
			Delete: 2,
			Update: 1
		},
		UserAction : {
			None: 0,
			Pull: 2,
			Push: 1
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