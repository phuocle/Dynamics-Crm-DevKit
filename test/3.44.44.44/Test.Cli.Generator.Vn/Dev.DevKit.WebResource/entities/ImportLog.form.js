'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ImportLog = {
		LogPhaseCode : {
			Chuyen_doi: 1,
			Nhap_Cap_nhat: 3,
			Nhap_Tao: 2,
			Phan_tich: 0
		},
		StateCode : {
			Hien_hoat: 0
		},
		StatusCode : {
			Hien_hoat: 0
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