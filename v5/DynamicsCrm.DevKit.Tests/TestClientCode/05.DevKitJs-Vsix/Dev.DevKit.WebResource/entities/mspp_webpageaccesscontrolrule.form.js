'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.Formmspp_webpageaccesscontrolrule_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["grid_webroles", "mspp_description", "mspp_name", "mspp_right", "mspp_scope", "mspp_webpageid", "mspp_websiteid", "publishing_states"],
			bpf: [],
			dialog: [],
			grid: ["grid_webroles", "publishing_states"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["_300B9BF7_0715_4AE2_8C50_A8C82541E3A9____9CE2EE20_11E4_4D93_9F2A_C5B20F77791F", "tab_3___tab_3_section_1", "tab_webroles___tab_4_section_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.mspp_webpageaccesscontrolrule = {
		mspp_right: { Grant_Change: 1, Restrict_Read: 2 },
		mspp_scope: { All_content: 1, Exclude_direct_child_web_files: 2 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));