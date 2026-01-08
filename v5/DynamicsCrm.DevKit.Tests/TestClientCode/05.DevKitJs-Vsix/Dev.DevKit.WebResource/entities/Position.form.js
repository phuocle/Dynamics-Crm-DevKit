'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormPosition = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Description", "Members", "Name", "ParentPositionId"],
			bpf: [],
			dialog: [],
			grid: ["Members"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["general___Description", "general___General", "general___Users"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Position = {
		statecode: { Active: 0, Inactive: 1 },
		StatusCode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));