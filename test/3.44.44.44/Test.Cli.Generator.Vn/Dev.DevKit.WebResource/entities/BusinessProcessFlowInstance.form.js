'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.BusinessProcessFlowInstance = {
		Entity1ObjectTypeCode : {
		},
		Entity2ObjectTypeCode : {
		},
		Entity3ObjectTypeCode : {
		},
		Entity4ObjectTypeCode : {
		},
		Entity5ObjectTypeCode : {
		},
		StateCode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		StatusCode : {
			Da_huy_bo: 3,
			Da_ket_thuc: 2,
			Hien_hoat: 1
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