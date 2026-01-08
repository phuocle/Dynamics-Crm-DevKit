'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formflowsession_Information = function(executionContext, defaultWebResourceName) {
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
	OptionSet.flowsession = {
		RegardingObjectTypeCode: { },
		RunMode: { Attended: 1, Local: 0, Unattended: 2 },
		RunSessionMode: { Default: 1, PictureInPicture: 2, Unapplicable: 0 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Aborted: 11, Cancelled: 7, Deleted: 13, Failed: 8, Faulted: 9, Ignored: 12, NotSpecified: 0, Paused: 1, Running: 2, Skipped: 5, Succeeded: 4, Suspended: 6, Terminated: 14, TimedOut: 10, Waiting: 3 },
		SubCategory: { Default: 0, Test: 1 },
		TriggerType: { ApiFlow: 0, Cua: 4, DesktopFlow: 1, Local: 2, RunDesktopFlowDataverseApi: 3 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));