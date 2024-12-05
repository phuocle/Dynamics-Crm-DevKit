'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.listoperation = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Completed: 100000002,
			Created: 100000001,
			Failed: 100000003,
			In_Progress: 100000000,
			Inactive: 2
		},
		Type : {
			Add_members_by_id: 100000001,
			Add_members_by_query: 100000000,
			Remove_members_by_id: 100000003,
			Remove_members_by_query: 100000002
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