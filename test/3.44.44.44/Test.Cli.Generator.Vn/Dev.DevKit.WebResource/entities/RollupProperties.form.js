'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RollupProperties = {
		AggregateType : {
			Toi_da: 4,
			Toi_thieu: 3,
			Tong: 1,
			Tong_dem: 0,
			Trung_binh: 2
		},
		InitialValueCalculationStatus : {
			Da_hoan_thanh: 3,
			Da_tam_dung: 2,
			Dang_tien_hanh: 1,
			Dang_treo: 0,
			Khong_thanh_cong: 4
		},
		StateCode : {
			Hop_le: 0,
			Khong_hop_le: 1
		},
		StatusCode : {
			Hop_le: 1,
			Khong_hop_le: 2
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