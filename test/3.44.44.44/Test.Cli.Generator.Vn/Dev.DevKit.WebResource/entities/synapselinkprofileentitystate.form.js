'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.synapselinkprofileentitystate = {
		EntitySource : {
			Dataverse: 0,
			FnOTables: 1
		},
		EntityType : {
			Requested: 0
		},
		InitialSyncState : {
			Completed: 4,
			CompletedWithFailures: 8,
			InProgress: 2,
			None: 0,
			NotStarted: 1,
			Paused: 32,
			PostProcessing: 64,
			RequestedInitialData: 16
		},
		MetadataState : {
			Created: 8,
			Failure: 16,
			MetadataCreating: 2,
			None: 0,
			NotCreated: 1,
			RelationshipCreating: 4
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
		},
		SynapseTableCreationState : {
			Completed: 2,
			Failed: 3,
			InProgress: 1,
			NotStarted: 0
		},
		SyncState : {
			Completed: 4,
			CompletedWithFailures: 8,
			InProgress: 2,
			None: 0,
			NotStarted: 1,
			Paused: 32,
			PostProcessing: 64,
			RequestedInitialData: 16
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