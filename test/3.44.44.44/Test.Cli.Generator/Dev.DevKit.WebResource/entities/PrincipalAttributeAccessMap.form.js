'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.PrincipalAttributeAccessMap = {
		CreateAccess : {
			Allowed: 4,
			Not_Allowed: 0
		},
		ReadAccess : {
			Allowed: 4,
			Not_Allowed: 0
		},
		ReadUnMaskedAccess : {
			All_Records: 3,
			Not_Allowed: 0,
			One_Record: 1
		},
		UpdateAccess : {
			Allowed: 4,
			Not_Allowed: 0
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