'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.PrincipalSyncAttributeMap = {
		DefaultSyncDirection : {
			Hai_chieu: 3,
			Khong: 0,
			ToCRM: 2,
			ToExchange: 1
		},
		EntityTypeCode : {
		},
		SyncDirection : {
			Hai_chieu: 3,
			Khong: 0,
			ToCRM: 2,
			ToExchange: 1
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