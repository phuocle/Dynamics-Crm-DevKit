'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_invoicefrequency = {
		msdyn_daysofrun : {
			Day_of_period: 192350000,
			Weekday_of_period: 192350001
		},
		msdyn_period : {
			Weekly: 192350000,
			Monthly: 192350001,
			Biweekly: 192350002
		},
		msdyn_runspermonth : {
			_1: 1,
			_2: 2,
			_3: 3,
			_4: 4
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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