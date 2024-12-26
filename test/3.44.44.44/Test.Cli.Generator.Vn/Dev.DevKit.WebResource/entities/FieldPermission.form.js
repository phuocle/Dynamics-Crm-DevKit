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
			Cho_phep: 4,
			Khong_cho_phep: 0
		},
		CanRead : {
			Cho_phep: 4,
			Khong_cho_phep: 0
		},
		CanReadUnMasked : {
			All_Records: 3,
			Not_Allowed: 0,
			One_Record: 1
		},
		CanUpdate : {
			Cho_phep: 4,
			Khong_cho_phep: 0
		},
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
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