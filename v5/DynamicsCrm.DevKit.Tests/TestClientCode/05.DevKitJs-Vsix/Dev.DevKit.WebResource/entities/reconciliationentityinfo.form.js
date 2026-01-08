'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formreconciliationentityinfo_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["name", "OwnerId"],
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
	OptionSet.reconciliationentityinfo = {
		statecode: { Completed: 2, InProgress: 1, Submitted: 0 },
		statuscode: { CompletedNoMatchingRecords: 31, Failed: 32, InProgress: 20, PartialRecordsIdentified: 33, Submitted: 10, Succeeded: 30 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));