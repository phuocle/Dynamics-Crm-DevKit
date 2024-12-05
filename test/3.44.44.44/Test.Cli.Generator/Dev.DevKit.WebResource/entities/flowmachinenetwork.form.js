'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.flowmachinenetwork = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		ProvisioningState : {
			Created: 0,
			Error: 3,
			Provisioned: 2,
			Provisioning: 1
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Error: 3,
			Inactive: 2
		},
		SupportedScenario : {
			HostedMachineGroup: 1,
			HostedMachineGroupdAndRpaBox: 3,
			RpaBox: 2
		},
		type : {
			azureAdJoin: 100000000,
			hybridAdJoin: 100000001
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