'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.Formmspp_weblinkset_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["grid_webpages", "mspp_copy", "mspp_copy1", "mspp_display_name", "mspp_name", "mspp_publishingstateid", "mspp_title", "mspp_websiteid", "mspp_websitelanguageid", "weblinkset"],
			bpf: [],
			dialog: [],
			grid: ["grid_webpages", "weblinkset"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["_8C794036_9DC7_4C14_B3F1_705DA097C5EF____0907E05B_70C7_4463_80BD_ED65C2911934", "_8C794036_9DC7_4C14_B3F1_705DA097C5EF___mspp_weblinkset_description_monacoEditor", "tab_3___tab_3_section_1", "tab_4___tab_4_section_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.mspp_weblinkset = {
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));