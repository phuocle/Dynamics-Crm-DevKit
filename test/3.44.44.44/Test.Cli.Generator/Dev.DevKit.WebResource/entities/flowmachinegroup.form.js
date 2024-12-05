'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.flowmachinegroup = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		DomainSetting : {
			AadJoined: 1,
			HybridEntraJoined: 2,
			None: 0
		},
		FlowGroupType : {
			Default: 545940002,
			Keyless: 545940000,
			Standard: 545940001
		},
		ManagementType : {
			Customer: 0,
			Managed: 1
		},
		PreferredQueuingType : {
			ExtendedQueuePrioritization: 1,
			FIFO: 0
		},
		ProvisioningState : {
			Created: 0,
			Error: 3,
			Provisioned: 2,
			Provisioning: 1
		},
		statecode : {
			Active: 0,
			Inactive: 1,
			Maintenance: 2
		},
		statuscode : {
			Active: 1,
			HmgCmkOperation: 7,
			HmgIslandMove: 5,
			Inactive: 2,
			KeyExpired: 4,
			ManualMaintenance: 3,
			Quarantined: 6
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