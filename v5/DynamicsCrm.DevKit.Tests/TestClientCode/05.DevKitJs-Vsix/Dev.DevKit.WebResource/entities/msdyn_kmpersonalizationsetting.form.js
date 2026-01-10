'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.Formmsdyn_kmpersonalizationsetting_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["msdyn_filtercontroldata", "msdyn_languagecontrol", "msdyn_name"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["knowledge_authoring_language_settings___tab_3_section_1", "knowledge_filter_settings___tab_2_section_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.msdyn_kmpersonalizationsetting = {
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));