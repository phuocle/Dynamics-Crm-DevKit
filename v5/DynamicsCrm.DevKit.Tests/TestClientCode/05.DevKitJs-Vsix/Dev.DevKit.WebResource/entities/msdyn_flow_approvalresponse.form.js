'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_flow_approvalresponse_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["msdyn_flow_approvalresponse_name", "OwnerId"],
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
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_flow_approvalresponse = {
		msdyn_flow_approvalresponse_stage: { Basic: 192350001, Complete: 192351000, Not_Specified: 192350000 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Committed: 192350002, Reviewing: 192350000, Saved: 192350001 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));