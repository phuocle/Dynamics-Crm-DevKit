'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.synapselinkprofile = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		DestinationSyncState : {
			Completed: 2,
			None: 0,
			NotCompleted: 1
		},
		ProfileState : {
			Aborted: 5,
			Aborting: 4,
			Active: 1,
			Deactivated: 8,
			Deleted: 3,
			Error: 2,
			Inactive: 0,
			Suspended: 6,
			Suspending: 7
		},
		ProfileType : {
			EventAnalytics: 1,
			SynapseLink: 0
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