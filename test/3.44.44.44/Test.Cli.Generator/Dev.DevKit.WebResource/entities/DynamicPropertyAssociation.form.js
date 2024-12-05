'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.DynamicPropertyAssociation = {
		AssociationStatus : {
			Active: 0,
			Deleted: 1,
			Draft: 2,
			Draft_Added: 3,
			Draft_Deleted: 4
		},
		InheritanceState : {
			Inherited: 0,
			Overridden: 1,
			Owned: 2
		},
		RegardingObjectTypeCode : {
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