'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.FieldPermission = {
		CanCreate : {
			Allowed: 4,
			Not_Allowed: 0
		},
		CanRead : {
			Allowed: 4,
			Not_Allowed: 0
		},
		CanReadUnMasked : {
			All_Records: 3,
			Not_Allowed: 0,
			One_Record: 1
		},
		CanUpdate : {
			Allowed: 4,
			Not_Allowed: 0
		},
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		EntityName : {
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