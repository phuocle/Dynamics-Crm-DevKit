'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ServicePlan = {
		AccessMode : {
			Custom_applications: 0,
			First_party_and_Custom_applications: 2,
			First_party_applications: 1,
			No_restrictions_For_legacy_license_only_overrides_012: 3,
			Restricted_to_ISV_applications_and_will_Override_all_other_access_modes_including_access_mode_3: 4
		},
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
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