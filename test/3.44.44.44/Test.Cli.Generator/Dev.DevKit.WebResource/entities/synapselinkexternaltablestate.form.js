'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.synapselinkexternaltablestate = {
		LakehouseShortcutState : {
			Created: 1,
			Deleted: 3,
			Failed: 2,
			In_Progress: 4,
			Not_Created: 0
		},
		LastSyncState : {
			Created: 1,
			Deleted: 3,
			Failed: 2,
			In_Progress: 4,
			Not_Created: 0
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
		},
		TableState : {
			Created: 1,
			Deleted: 3,
			Failed: 2,
			In_Progress: 4,
			Not_Created: 0
		},
		TrinoState : {
			Created: 1,
			Deleted: 3,
			Failed: 2,
			In_Progress: 4,
			Not_Created: 0
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