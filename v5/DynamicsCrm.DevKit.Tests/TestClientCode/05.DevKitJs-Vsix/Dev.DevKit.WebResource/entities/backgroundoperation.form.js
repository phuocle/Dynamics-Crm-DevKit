'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.Formbackgroundoperation_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["StateCode", "StatusCode", "CreatedBy", "CreatedOn", "DisplayName", "EndTime", "ErrorCode", "ErrorMessage", "InputParameters", "Name", "OutputParameters", "RetryCount", "StartTime", "TTLInSeconds"],
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
	OptionSet.backgroundoperation = {
		StateCode: { Completed: 3, Locked: 2, Ready: 0 },
		StatusCode: { Canceled: 32, Canceling: 22, Failed: 31, In_Progress: 20, Succeeded: 30, Waiting_For_Resources: 0 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));