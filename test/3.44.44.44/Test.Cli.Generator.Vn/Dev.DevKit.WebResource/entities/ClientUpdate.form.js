'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ClientUpdate = {
		WhenExecute : {
			Sau_khi_SchemaChanges_nhung_truoc_khi_Tai_xuong_du_lieu: 2,
			Sau_khi_tai_xuong_du_lieu: 3,
			Truoc_khi_SchemaChanges: 1
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