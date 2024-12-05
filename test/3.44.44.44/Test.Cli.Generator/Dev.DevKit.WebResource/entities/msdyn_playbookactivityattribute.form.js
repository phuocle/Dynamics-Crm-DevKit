'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_playbookactivityattribute = {
		msdyn_attributeType : {
			_string: 1,
			boolean: 4,
			datetime: 3,
			integer: 2,
			optionset: 5
		},
		statecode : {
			Draft: 0,
			Published: 1
		},
		statuscode : {
			Draft: 1,
			Published: 2
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