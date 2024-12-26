'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SavedOrgInsightsConfiguration = {
		Lookback : {
			_2_Tieng: 1,
			_30_Ngay: 4,
			_48_Tieng: 2,
			_7_Ngay: 3
		},
		MetricType : {
			Chuoi_Thoi_gian: 1,
			The_loai: 2
		},
		PlotOption : {
			Bo_do_Tuyen_tinh: 10,
			Bong_bong: 11,
			Cot: 2,
			Dang_vong: 6,
			Dang_vong_kep: 9,
			Danh_sach: 8,
			Duong: 1,
			Thanh: 5,
			The_thong_tin: 7,
			Tron: 4,
			Vung: 3
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