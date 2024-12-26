'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_workstreamhmmigrationstatus = {
		msdyn_errortype : {
			Critical: 192350002,
			None: 192350000,
			Warning: 192350001
		},
		msdyn_operationtype : {
			None: 192350000,
			Revert: 192350002,
			Update: 192350001
		},
		msdyn_status : {
			Complete: 192350002,
			Failed: 192350003,
			In_progress: 192350001,
			None: 192350000
		},
		msdyn_validationstatus : {
			Failed: 192350002,
			In_progress: 192350003,
			Not_tested: 192350000,
			Passed: 192350001
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