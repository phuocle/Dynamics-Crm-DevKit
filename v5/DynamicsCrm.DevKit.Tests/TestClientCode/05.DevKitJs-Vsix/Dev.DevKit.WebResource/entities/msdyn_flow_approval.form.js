'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_flow_approval_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["msdyn_flow_approval_name", "OwnerId"],
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
	OptionSet.msdyn_flow_approval = {
		msdyn_flow_approval_priority: { Important: 192350001, Low: 192350003, Medium: 192350002, Urgent: 192350000 },
		msdyn_flow_approval_requesttype: { Basic: 192350001, eSign: 192350002, Other: 192350000, Templates: 192350003 },
		msdyn_flow_approval_stage: { Basic: 192350001, Complete: 192351000, Not_Specified: 192350000 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Abandoned: 192350007, Canceled: 192350006, Completed: 192350004, Created: 192350000, Expired: 192350005, Pending: 192350001, Suspended: 192350002 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));