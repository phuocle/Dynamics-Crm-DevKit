'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormSearch_provider_Main_form = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ConnectionId", "msdyn_Description", "msdyn_Name", "Organization", "OwnerId", "SearchType", "SharepointURL", "WebResource_Disclaimer"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["_AB87433A_5CC0_4BCF_B306_F697B6B56F37____2D5C8850_749F_4FCA_807A_E58949695F92", "_AB87433A_5CC0_4BCF_B306_F697B6B56F37____AB87433A_5CC0_4BCF_B306_F697B6B56F37_SECTION_3"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.msdyn_kmfederatedsearchconfig = {
		SearchType: { Cross_Organizational_Search: 100000000, Microsoft_Graph_Connector: 100000002, Sharepoint: 100000001 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));