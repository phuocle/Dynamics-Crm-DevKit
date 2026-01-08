'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_pmsimulation_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["msdyn_description", "msdyn_end", "msdyn_generatelog", "msdyn_name", "msdyn_psesimulationid", "msdyn_result", "msdyn_setting", "msdyn_start", "msdyn_state", "msdyn_version", "OwnerId"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: []
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_pmsimulation = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		msdyn_state: { Cancelled: 4, Completed: 3, Failed: 5, InProgress: 2, NotStarted: 1, QueuedForStart: 6 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));