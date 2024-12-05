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
			First: 1,
			Fourth: 4,
			Last: 5,
			Second: 2,
			Third: 3
		},
		MonthOfYear : {
			April: 4,
			August: 8,
			December: 12,
			February: 2,
			Invalid_Month_Of_Year: 0,
			January: 1,
			July: 7,
			June: 6,
			March: 3,
			May: 5,
			November: 11,
			October: 10,
			September: 9
		},
		ObjectTypeCode : {
		},
		PatternEndType : {
			No_End_Date: 1,
			Occurrences: 2,
			Pattern_End_Date: 3
		},
		RecurrencePatternType : {
			Daily: 0,
			Monthly: 2,
			Weekly: 1,
			Yearly: 3
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