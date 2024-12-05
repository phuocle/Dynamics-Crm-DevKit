'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_AIConfiguration = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_Type : {
			RunConfiguration: 190690001,
			TrainingConfiguration: 190690000
		},
		statecode : {
			Done: 2,
			Draft: 0,
			Failed: 3,
			InProgress: 1
		},
		statuscode : {
			CancelFailed: 12,
			Cancelling: 2,
			DeleteFailed: 13,
			Deleting: 5,
			Draft: 0,
			Published: 7,
			PublishFailed: 10,
			Publishing: 3,
			Scheduled: 8,
			Trained: 6,
			TrainFailed: 9,
			Training: 1,
			UnpublishFailed: 11,
			Unpublishing: 4,
			UnsuccessfulTraining: 14
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