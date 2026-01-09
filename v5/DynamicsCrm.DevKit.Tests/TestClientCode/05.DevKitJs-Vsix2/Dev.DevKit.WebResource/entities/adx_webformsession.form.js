'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormInformation_Enhanced = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["adx_anonymousidentification", "adx_contact", "adx_currentstepindex", "adx_name", "adx_primaryrecordentitykeyname", "adx_primaryrecordentitylogicalname", "adx_primaryrecordid", "adx_stephistory", "adx_systemuser", "adx_userhostaddress", "adx_useridentityname", "mspp_webformid", "mspp_webformstepid"],
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
	OptionSet.adx_webformsession = {
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));