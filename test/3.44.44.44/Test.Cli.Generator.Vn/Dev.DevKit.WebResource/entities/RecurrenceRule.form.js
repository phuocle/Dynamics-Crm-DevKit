'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RecurrenceRule = {
		Instance : {
			Cuoi_cung: 5,
			Dau_tien: 1,
			Thu_ba: 3,
			Thu_hai: 2,
			Thu_tu: 4
		},
		MonthOfYear : {
			Thang_1: 1,
			Thang_10: 10,
			Thang_11: 11,
			Thang_12: 12,
			Thang_2: 2,
			Thang_3: 3,
			Thang_4: 4,
			Thang_5: 5,
			Thang_6: 6,
			Thang_7: 7,
			Thang_8: 8,
			Thang_9: 9,
			Thang_trong_Nam_khong_hop_le: 0
		},
		ObjectTypeCode : {
		},
		PatternEndType : {
			Khong_co_Ngay_Ket_thuc: 1,
			Lan_xay_ra: 2,
			Ngay_Ket_thuc_Kieu: 3
		},
		RecurrencePatternType : {
			Hang_nam: 3,
			Hang_ngay: 0,
			Hang_thang: 2,
			Hang_tuan: 1
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