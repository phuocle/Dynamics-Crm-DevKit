'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.WorkflowLog = {
		ChildWorkflowInstanceObjectTypeCode : {
			Flow_Session: 4720,
			System_Job: 4700,
			Workflow_Session: 4710
		},
		ObjectTypeCode : {
			Flow_Session: 4720,
			System_Job: 4700,
			Workflow_Session: 4710
		},
		RegardingObjectTypeCode : {
		},
		Status : {
			Canceled: 4,
			Failed: 3,
			In_Progress: 1,
			Succeeded: 2,
			Waiting: 5
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