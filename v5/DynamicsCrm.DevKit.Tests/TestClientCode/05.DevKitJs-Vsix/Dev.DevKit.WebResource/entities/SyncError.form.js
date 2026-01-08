'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSync_Error = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Action", "Description", "ErrorCode", "ErrorDetail", "ErrorMessage", "ErrorTime", "ErrorType", "Name", "RegardingObjectId"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["OwnerId", "StatusCode"],
			navigation: [],
			quick: [],
			tab: ["General_Tab___SYNCERROR_INFORMATION"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SyncError = {
		ErrorType: { Conflict: 0, Others: 3, Record_already_exists: 2, Record_not_found: 1 },
		RegardingObjectTypeCode: { },
		StateCode: { Active: 0, Resolved: 1 },
		StatusCode: { Active: 0, Fixed: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));