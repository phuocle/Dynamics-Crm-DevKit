'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SystemForm = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		FormActivationState : {
			Active: 1,
			Inactive: 0
		},
		FormPresentation : {
			AirForm: 1,
			ClassicForm: 0,
			ConvertedICForm: 2
		},
		ObjectTypeCode : {
		},
		Type : {
			AppointmentBook: 1,
			AppointmentBookBackup: 102,
			Card: 11,
			Contextual_Dashboard: 13,
			Dashboard: 0,
			Dialog: 8,
			InteractionCentricDashboard: 10,
			Main: 2,
			Main_Interactive_experience: 12,
			MainBackup: 101,
			MiniCampaignBO: 3,
			Mobile_Express: 5,
			Other: 100,
			Power_BI_Dashboard: 103,
			Preview: 4,
			Quick_Create: 7,
			Quick_View_Form: 6,
			Task_Flow_Form: 9
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