'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormGoalRollupQuery_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Name", "Name1", "OwnerId", "queryeditor_uc", "QueryEntityType", "QueryEntityType1", "ruleconditioncontrol"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["rule___criteria", "rule___Rule_Conditions", "rule___section_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.GoalRollupQuery = {
		QueryEntityType: { },
		StateCode: { Active: 0, Inactive: 1 },
		StatusCode: { Closed: 1, Open: 0 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));