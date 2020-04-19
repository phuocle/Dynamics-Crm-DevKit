'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_analysisjob = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Pending: 1,
			Running: 192350000,
			Complete: 192350001,
			Exception: 192350002,
			Completed_With_Exceptions: 192350003,
			Canceled: 2
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