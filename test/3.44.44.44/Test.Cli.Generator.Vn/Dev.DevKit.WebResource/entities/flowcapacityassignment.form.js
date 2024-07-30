'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.flowcapacityassignment = {
		AllocationOrigin : {
			He_thong: 1,
			Nguoi_dung: 0
		},
		CapacitySource : {
			AddOn: 0,
			FailOpen: 3,
			UserTrial: 2,
			ViralAdoption: 1
		},
		CapacityType : {
			PowerAutomateHostedRpa: 0,
			PowerAutomatePerProcess: 1
		},
		regardingIdType : {
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
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