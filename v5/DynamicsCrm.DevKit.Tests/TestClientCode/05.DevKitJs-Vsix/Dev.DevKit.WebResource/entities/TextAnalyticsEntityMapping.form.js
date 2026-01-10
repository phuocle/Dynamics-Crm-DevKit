'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormTextAnalyticsEntityMapping_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["EntityPickList", "FieldPickList", "IsTextMatchMapping"],
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
	OptionSet.TextAnalyticsEntityMapping = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		EntityPickList: { No: 1, Yes: 2 },
		FieldPickList: { No: 1, Yes: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));