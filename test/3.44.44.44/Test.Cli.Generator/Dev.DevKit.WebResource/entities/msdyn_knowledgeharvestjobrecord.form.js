'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_knowledgeharvestjobrecord = {
		msdyn_entityname : {
			Incident: 0
		},
		statecode : {
			Completed: 2,
			Failed: 3,
			MavenInvoked: 1,
			Ready: 0
		},
		statuscode : {
			ArticleCreated: 3,
			ArticleNOTCreated: 4,
			KBCreateFailed: 5,
			MavenInvoked: 2,
			Ready: 1
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