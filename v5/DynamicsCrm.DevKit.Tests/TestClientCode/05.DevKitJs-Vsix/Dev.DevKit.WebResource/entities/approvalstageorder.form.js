'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formapprovalstageorder_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Name", "OrderNumber", "OwnerId", "StageApproval", "StageCondition", "Type"],
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
	OptionSet.approvalstageorder = {
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Completed: 192350002, Inactive: 2, Initialized: 192350001, Skipped: 192350003 },
		Type: { AI: 192350002, Approval: 192350000, Condition: 192350001 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));