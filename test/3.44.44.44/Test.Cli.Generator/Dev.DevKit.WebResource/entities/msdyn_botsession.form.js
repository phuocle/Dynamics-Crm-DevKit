'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_botsession = {
		msdyn_outcome : {
			abandoned: 419550003,
			escalated: 419550002,
			none: 419550000,
			resolved: 419550001
		},
		msdyn_outcomereason : {
			agentTransferConfiguredByAuthor: 419560007,
			agentTransferFromQuestionMaxAttempts: 419560008,
			agentTransferRequestedByUser: 419560005,
			agentTransferWithoutError: 419560004,
			noError: 419560000,
			resolved: 419560006,
			systemError: 419560002,
			userError: 419560001,
			userExit: 419560003
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