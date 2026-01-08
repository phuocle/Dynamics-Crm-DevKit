'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormBulkDeleteOperation_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["advfindcontrol", "CreatedBy", "CreatedOn", "FailureCount", "IsRecurring", "ModifiedBy", "ModifiedOn", "Name", "NextRun", "OwnerId", "querylist", "rdNotify", "recipients", "StatusCode", "SuccessCount", "totalcount"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["properties___details", "properties___querydetails"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormNew_bulk_record = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["advfindcontrol", "CreatedBy", "CreatedOn", "FailureCount", "IsRecurring", "ModifiedBy", "ModifiedOn", "msdyn_pcfcolumn", "Name", "NextRun", "OwnerId", "querylist", "rdNotify", "recipients", "StatusCode", "SuccessCount", "totalcount"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["Legacy_1___general", "Legacy_1___options", "Legacy_1___result", "Legacy_2___details", "Legacy_2___querydetails", "Modern_1___New_Section"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormNew_bulk_record2 = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["advfindcontrol", "CreatedBy", "CreatedOn", "FailureCount", "IsRecurring", "ModifiedBy", "ModifiedOn", "msdyn_pcfcolumn", "Name", "NextRun", "OwnerId", "querylist", "rdNotify", "recipients", "StatusCode", "SuccessCount", "totalcount"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["Legacy_1___general", "Legacy_1___options", "Legacy_1___result", "Legacy_2___details", "Legacy_2___querydetails", "Modern_1___New_Section"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormView_bulk_record = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["advfindcontrol", "CreatedBy", "CreatedOn", "FailureCount", "IsRecurring", "ModifiedBy", "ModifiedOn", "msdyn_pcfcolumn", "Name", "NextRun", "OwnerId", "querylist", "rdNotify", "recipients", "StatusCode", "SuccessCount", "totalcount"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["Legacy_1___general", "Legacy_1___options", "Legacy_1___result", "Legacy_2___details", "Legacy_2___querydetails", "Modern_1___PCF_Section"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.BulkDeleteOperation = {
		StateCode: { Completed: 3, Locked: 2, Ready: 0, Suspended: 1 },
		StatusCode: { Canceled: 32, Canceling: 22, Failed: 31, In_Progress: 20, Paused: 12, Pausing: 21, Retrying: 11, Succeeded: 30, Waiting: 10, Waiting_For_Resources: 0 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));