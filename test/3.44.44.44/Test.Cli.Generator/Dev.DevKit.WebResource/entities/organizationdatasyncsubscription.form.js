'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.organizationdatasyncsubscription = {
		BlobPartitionBy : {
			Day: 1,
			Month: 2,
			None: 0,
			Year: 3
		},
		DataEndpointPostingType : {
			DefaultEndpoint: 0,
			HTTPS: 2,
			ServiceBusEventHub: 3,
			ServiceBusTopic: 1
		},
		DataProcessingType : {
			Batch: 2,
			Mixed: 3,
			NotificationOnly: 4,
			Streaming: 1,
			Unknown: 0
		},
		MigrationState : {
			DsfCloudService: 0,
			DsfSdk: 1
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Activated: 4,
			Deactivated: 5,
			Uninitialized: 3
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