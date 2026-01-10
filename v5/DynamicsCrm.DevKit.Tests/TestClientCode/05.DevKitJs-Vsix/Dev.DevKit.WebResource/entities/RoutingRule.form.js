'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormRouting_Rule_Set = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Description", "Name", "notescontrol", "OwnerId", "RuleItems"],
			bpf: [],
			dialog: [],
			grid: ["RuleItems"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["general___routing_rule_set_information", "notes___notes"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.RoutingRule = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		StateCode: { Active: 1, Draft: 0 },
		StatusCode: { Active: 2, Draft: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));