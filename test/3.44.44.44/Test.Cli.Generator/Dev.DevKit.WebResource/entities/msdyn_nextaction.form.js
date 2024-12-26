'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_nextaction = {
		msdyn_actiontype : {
			EmailFollowup: 100000002,
			KnowledgeArticleDraftReview: 100000000,
			ReplyToCustomer: 100000003,
			ResolveCase: 100000001
		},
		msdyn_regardingIdType : {
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Completed: 3,
			In_progress: 2,
			Invalid: 4,
			New: 1,
			Rejected: 5
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