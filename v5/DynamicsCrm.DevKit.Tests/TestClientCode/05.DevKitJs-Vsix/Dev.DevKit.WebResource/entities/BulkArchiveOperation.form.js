'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormBulkArchiveOperation_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Name", "OwnerId"],
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
	OptionSet.BulkArchiveOperation = {
		statecode: { Completed: 3, Inprogress: 2, Scheduled: 0 },
		statuscode: { Cancelled: 32, Copying: 21, Deleting: 22, Failed: 31, InComplete: 33, Marking: 20, Succeeded: 30, Waiting: 0 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));