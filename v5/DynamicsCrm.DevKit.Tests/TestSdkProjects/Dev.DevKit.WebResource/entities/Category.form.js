'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormCategory = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["AssociatedCategoriesGrid", "CategoryNumber", "Description", "ParentCategoryId", "SequenceNumber", "Title"],
			bpf: [],
			dialog: [],
			grid: ["AssociatedCategoriesGrid"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["AssociatedCategories___Associated_Categories"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormCategory_Main_Interactive = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Description", "ParentCategoryId", "SequenceNumber", "Title"],
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
	DevKit.FormCategory_Quick_Create = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["CategoryNumber", "Description", "ParentCategoryId", "SequenceNumber", "Title"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["tab_1___tab_1_column_1_section_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.Category = {
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));