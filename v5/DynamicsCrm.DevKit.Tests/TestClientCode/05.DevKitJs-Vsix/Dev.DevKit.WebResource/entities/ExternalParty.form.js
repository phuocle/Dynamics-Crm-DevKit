'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormExternalParty_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["CorrelationKey", "EmailAddress", "externalPartyItemsGrid", "FullName", "LastDisabledOn", "LastEnabledOn"],
			bpf: [],
			dialog: [],
			grid: ["externalPartyItemsGrid"],
			header: ["OwnerId", "StatusCode"],
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
	OptionSet.ExternalParty = {
		StateCode: { Disabled: 1, Enabled: 0 },
		StatusCode: { Disabled: 2, Enabled: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));