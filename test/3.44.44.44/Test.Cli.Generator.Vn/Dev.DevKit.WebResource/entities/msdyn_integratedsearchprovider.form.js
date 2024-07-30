'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_integratedsearchprovider = {
		msdyn_authenticationtype : {
			None: 0,
			OAuth: 1
		},
		msdyn_datasourcetype : {
			Website: 0
		},
		msdyn_lookbackperiod : {
			_1_hour: 6,
			_2_hours: 1,
			_30_mins: 5,
			_4_hours: 2,
			_6_hours: 3,
			_8_hours: 4,
			No_Lookback: 0
		},
		msdyn_refreshschedule : {
			_1_day: 8,
			_1_hour: 4,
			_15_mins: 1,
			_2_days: 9,
			_2_hours: 5,
			_30_mins: 2,
			_4_days: 10,
			_4_hours: 6,
			_45_mins: 3,
			_7_days: 11,
			_8_hours: 7,
			No_refresh: 0
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 3,
			Ingestion_Ready: 1,
			Validated: 2
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