'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormKnowledgeSearchModel_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Description", "MaxKeyWords", "Name", "SourceEntity", "textanalyticsentitymappings"],
			bpf: [],
			dialog: [],
			grid: ["textanalyticsentitymappings"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["_6A04C119_906C_4D8D_84D6_A470E79CBFCC____87C466A2_37F3_4CDE_A484_C6C75EFF544D"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.KnowledgeSearchModel = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		SourceEntity: { Case: 112 },
		StateCode: { Active: 0, Inactive: 1 },
		StatusCode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));