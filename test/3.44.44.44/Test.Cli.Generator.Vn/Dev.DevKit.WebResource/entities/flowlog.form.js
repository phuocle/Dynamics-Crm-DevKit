'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.flowlog = {
		level : {
			Debug: 100000001,
			Error: 100000004,
			Info: 100000002,
			Verbose: 100000000,
			Warning: 100000003
		},
		parentobjectidIdType : {
		},
		type : {
			CustomLog: 100000000,
			DesktopFlowRunAction: 100000001,
			DesktopFlowRunQueueAssigned: 100000004,
			DesktopFlowRunQueueAssignFailed: 100000005,
			DesktopFlowRunQueued: 100000003,
			DesktopFlowRunQueuePriorityChanged: 100000002,
			DesktopFlowRunQueueRunCompleted: 100000007,
			DesktopFlowRunQueueRunConfirmed: 100000006,
			DesktopFlowRunUnattendedRepairUISelectorRequest: 100000100,
			DesktopFlowRunUnattendedRepairUISelectorResponse: 100000101,
			WorkqueueFlowSession: 100000200,
			WorkqueueProcessorLog: 100000201
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));