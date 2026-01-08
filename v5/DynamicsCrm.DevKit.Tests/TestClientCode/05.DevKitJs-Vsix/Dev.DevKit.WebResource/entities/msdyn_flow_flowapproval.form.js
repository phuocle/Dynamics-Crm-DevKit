'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_flow_flowapproval_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["msdyn_flow_flowapproval_name", "OwnerId"],
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
	OptionSet.msdyn_flow_flowapproval = {
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Completed: 192350003, Created: 192350000, NotifyingFlow: 192350002, WaitingForApproval: 192350001 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));