'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormCopilotExampleQuestion_main_form = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["AppContext", "Comment", "DynamicKnowledge", "EntityScope", "EntityScopeColumn", "knowledgetype", "Question", "Rephrase", "SkillId", "SQLCorrectness", "StandardSQL"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: []
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormCopilotExampleQuestion_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Question"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: []
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.CopilotExampleQuestion = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		knowledgetype: { Example_Knowledge: 1, Example_Question: 0 },
		SQLCorrectness: { Invalid: 2, NotSure: 3, Pending_Validation: 0, Valid: 1 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));