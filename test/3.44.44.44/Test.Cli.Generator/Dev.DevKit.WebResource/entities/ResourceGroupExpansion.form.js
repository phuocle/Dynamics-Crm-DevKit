'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ResourceGroupExpansion = {
		MethodCode : {
			All_Resources: 5,
			All_Subgroups: 8,
			None: 0,
			Parent_Groups: 7,
			Participating_Resources: 1,
			Resources: 4,
			Schedulable_Resources: 2,
			Subgroups: 6,
			Supported_Services: 3
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