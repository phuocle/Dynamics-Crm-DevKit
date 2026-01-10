'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.Formmsdyn_flow_approvalrequest_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["msdyn_flow_approvalrequest_name", "OwnerId"],
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
	OptionSet.msdyn_flow_approvalrequest = {
		msdyn_flow_approvalrequest_responseoptionstype: { BasicApproveReject: 192350001, CustomOptions: 192350002, NotSpecified: 192350000 },
		msdyn_flow_approvalrequest_stage: { Basic: 192350001, Complete: 192351000, Not_Specified: 192350000 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2, Reassigned: 192350000 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));