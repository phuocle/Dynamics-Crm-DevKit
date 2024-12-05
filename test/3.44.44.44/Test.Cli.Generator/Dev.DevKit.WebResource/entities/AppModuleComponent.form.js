'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.AppModuleComponent = {
		ComponentType : {
			Business_Process_Flows: 29,
			Charts: 59,
			Command_Ribbon_for_Forms_Grids_sub_grids: 48,
			Entities: 1,
			Forms: 60,
			Sitemap: 62,
			Views: 26
		},
		RootComponentBehavior : {
			Do_not_include_subcomponents: 1,
			Include_As_Shell_Only: 2,
			Include_Subcomponents: 0
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