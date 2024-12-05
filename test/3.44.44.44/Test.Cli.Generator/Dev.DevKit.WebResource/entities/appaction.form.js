'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.appaction = {
		ClientType : {
			Browser: 0,
			Mail_App: 2,
			Mobile: 1
		},
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		Context : {
			All: 0,
			Entity: 1
		},
		Location : {
			Associated_Grid: 3,
			Dashboard: 6,
			Form: 0,
			Global_Header: 5,
			Main_Grid: 1,
			Quick_Form: 4,
			Sub_Grid: 2
		},
		OnClickEventType : {
			Formula: 1,
			JavaScript: 2,
			None: 0
		},
		Origin : {
			Default: 0,
			Enhanced_Migrated: 2,
			Migrated: 1
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
		},
		Type : {
			Dropdown_Button: 1,
			Group: 3,
			Split_Button: 2,
			Standard_Button: 0
		},
		VisibilityType : {
			Classic_Rules: 2,
			Formula: 1,
			None: 0
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