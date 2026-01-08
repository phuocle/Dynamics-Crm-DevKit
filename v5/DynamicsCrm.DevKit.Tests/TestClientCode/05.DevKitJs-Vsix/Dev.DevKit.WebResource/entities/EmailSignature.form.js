'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormEmail_signature = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["IsDefault", "LanguageCode", "LanguageCode1", "OwnerId", "SafeHtml", "Title", "Title1"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["OwnerId"],
			navigation: [],
			quick: [],
			tab: ["general___Details", "general___Details_UCI", "general___Signature_Editor"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.EmailSignature = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));