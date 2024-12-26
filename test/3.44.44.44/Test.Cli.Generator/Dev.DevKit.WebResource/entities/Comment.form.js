'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Comment = {
		ArtifactType : {
			AppModule: 3,
			Bot: 4,
			BotComponent: 2,
			CanvasApp: 1,
			PowerPageSite: 5,
			Workflow: 0
		},
		Kind : {
			Container: 0,
			Reply: 2,
			Thread: 1
		},
		ParentIdType : {
		},
		State : {
			Open: 0,
			Resolved: 1
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