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
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
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