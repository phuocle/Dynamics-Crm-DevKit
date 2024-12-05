'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.UserSettings = {
		D365AutoInstallAttemptStatus : {
			Already_installed: 2,
			Auto_installed: 1,
			No_Graph_API: 6,
			No_Solution: 5,
			Not_attempted: 0,
			Resource_Disabled: 7,
			Teams_admin_blocked: 3,
			Unauthorized: 4
		},
		DataValidationModeForExportToExcel : {
			Full: 0,
			None: 1
		},
		DefaultSearchExperience : {
			Categorized_search: 1,
			Custom_search: 3,
			Relevance_search: 0,
			Use_last_search: 2
		},
		EntityFormMode : {
			Edit: 2,
			Organization_default: 0,
			Read_optimized: 1
		},
		IncomingEmailFilteringMethod : {
			All_email_messages: 0,
			Email_messages_from_Dynamics_365_Leads_Contacts_and_Accounts: 2,
			Email_messages_from_Dynamics_365_records_that_are_email_enabled: 3,
			Email_messages_in_response_to_Dynamics_365_email: 1,
			No_email_messages: 4
		},
		ReleaseChannel : {
			Inner_channel_override: 3,
			Monthly_channel_override: 2,
			None: 0,
			Semi_annual_channel_override: 1
		},
		ReportScriptErrors : {
			Ask_me_for_permission_to_send_an_error_report_to_Microsoft: 1,
			Automatically_send_an_error_report_to_Microsoft_without_asking_me_for_permission: 2,
			Never_send_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365: 3
		},
		VisualizationPaneLayout : {
			Side_by_side: 1,
			Top_bottom: 0
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