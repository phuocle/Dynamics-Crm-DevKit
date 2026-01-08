'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormProcessSession_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["CanceledBy", "CanceledOn", "Comments", "CompletedBy", "CompletedOn", "CreatedOn", "Name", "NextLinkedSessionId", "OriginatingSessionId", "OwnerId", "PreviousLinkedSessionId", "ProcessId", "RegardingObjectId", "StartedBy", "StartedOn", "StatusCode"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["_474B8A52_CB22_4194_A5A6_F21FD40B7417___Details", "Comments___Comments", "Details___Details_2", "Linked_Sessions___Linked_Sessions", "Summary___Summary"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ProcessSession = {
		RegardingObjectTypeCode: { },
		StateCode: { Complete: 1, Incomplete: 0 },
		StatusCode: { Canceled: 5, Completed: 4, Failed: 6, In_Progress: 2, Not_Started: 1, Paused: 3 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));