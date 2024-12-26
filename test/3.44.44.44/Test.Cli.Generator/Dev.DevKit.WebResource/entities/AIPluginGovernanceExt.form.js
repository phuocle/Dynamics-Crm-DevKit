'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.AIPluginGovernanceExt = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
		},
		TargetSubType : {
			Certified_Connector: 1,
			Conversational: 5,
			Custom_Api: 6,
			Custom_Connector: 8,
			Dataverse: 0,
			Flow: 3,
			Prompt: 4,
			QA: 2,
			Rest_Api: 7
		},
		TargetType : {
			Connector: 2,
			CustomConnector: 1,
			Dataverse: 0,
			Flow: 3
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