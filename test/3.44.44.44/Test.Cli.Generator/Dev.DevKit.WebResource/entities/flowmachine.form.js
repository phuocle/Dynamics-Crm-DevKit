'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.flowmachine = {
		HostedMachineState : {
			Disabled: 0,
			Enabled: 1,
			Error: 2
		},
		HostingType : {
			CloudPc: 2,
			Customer: 0,
			Hosted: 1
		},
		KeyDeliveryStatus : {
			Default: 1,
			KeyExpired: 3,
			PendingNewKey: 2
		},
		LastKnownPictureInPictureSupport : {
			Disabled: 1,
			Enabled: 2,
			Unknown: 0
		},
		statecode : {
			Active: 0,
			Inactive: 1,
			Maintenance: 2
		},
		statuscode : {
			Active: 1,
			Disabled: 9,
			DrainMode: 5,
			Error: 8,
			HostedMachineOvercapacity: 13,
			HostedMachineOvercapacityDeleted: 14,
			HostedMachineOvercapacityDisabled: 15,
			Inactive: 2,
			ManualMaintenance: 4,
			ProvisionedWithError: 12,
			Provisioning: 10,
			RequiresGroupKey: 11,
			RequiresReconnection: 3,
			Temporary: 7,
			ToDelete: 6
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