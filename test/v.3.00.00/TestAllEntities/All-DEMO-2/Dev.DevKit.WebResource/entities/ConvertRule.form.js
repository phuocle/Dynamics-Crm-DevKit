'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ConvertRule = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		SenderResolutionOption : {
			Creating_a_new_contact_automatically: 0,
			Mapping_in_Power_Automate_manually: 1
		},
		SourceTypeCode : {
			Email: 2,
			Social_Monitoring: 1
		},
		StateCode : {
			Active: 1,
			Draft: 0
		},
		StatusCode : {
			Active: 2,
			Draft: 1
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