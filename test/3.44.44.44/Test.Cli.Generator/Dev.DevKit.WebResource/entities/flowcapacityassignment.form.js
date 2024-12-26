'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.flowcapacityassignment = {
		AllocationOrigin : {
			System: 1,
			User: 0
		},
		CapacitySource : {
			AddOn: 0,
			FailOpen: 3,
			UserTrial: 2,
			ViralAdoption: 1
		},
		CapacityType : {
			PowerAutomateHostedRpa: 0,
			PowerAutomatePerProcess: 1
		},
		regardingIdType : {
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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