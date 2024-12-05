'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.TopicModelExecutionHistory = {
		Status : {
			Failed: 4,
			In_progress: 2,
			Queued: 1,
			Success: 3
		},
		StatusReason : {
			Analysis_failed: 6,
			Analyzing_topic_analysis_execution: 3,
			Connection_failed: 7,
			Synchronization_failed: 5,
			Topic_analysis_execution_is_queued: 1,
			Topic_analysis_execution_is_synchronizing: 2,
			Topic_analysis_has_built: 4
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