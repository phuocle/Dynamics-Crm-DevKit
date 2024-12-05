'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.CallbackRegistration = {
		Message : {
			Added: 1,
			Added_or_Deleted: 5,
			Added_or_Modified: 4,
			Added_or_Modified_or_Deleted: 7,
			Deleted: 2,
			Modified: 3,
			Modified_or_Deleted: 6
		},
		RunAs : {
			Flow_owner: 3,
			Modifying_user: 1,
			Row_owner: 2
		},
		Scope : {
			BusinessUnit: 2,
			Organization: 4,
			ParentChildBusinessUnit: 3,
			User: 1
		},
		Version : {
			V1: 1,
			V2: 2,
			V3: 3
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