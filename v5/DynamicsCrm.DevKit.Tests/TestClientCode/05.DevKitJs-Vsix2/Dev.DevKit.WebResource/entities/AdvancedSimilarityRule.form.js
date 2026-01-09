'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormAdvancedSimilarityRule_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Description", "FilterResultByStatus", "IsAzureMLRequired", "MaxNumberKeyphrases", "name", "SourceEntity", "textanalyticsentitymappings"],
			bpf: [],
			dialog: [],
			grid: ["textanalyticsentitymappings"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["_3D17A623_BFEB_49F9_83C4_B5A02B96CAC0____0CBFC71F_6EFF_4583_9B38_7A9AE69C3AE1", "_67E8B341_A89A_4207_9BCC_4C1F9CC8B89D____29B6CE18_08E1_4B87_B532_B18A6987BBB2", "_67E8B341_A89A_4207_9BCC_4C1F9CC8B89D____89397326_037F_4A43_B362_6B9B04E7917B"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.AdvancedSimilarityRule = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		FilterResultByStatus: { Active: 0, Inactive: 1 },
		SourceEntity: { Case: 112 },
		StateCode: { Active: 0, Inactive: 1 },
		StatusCode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));