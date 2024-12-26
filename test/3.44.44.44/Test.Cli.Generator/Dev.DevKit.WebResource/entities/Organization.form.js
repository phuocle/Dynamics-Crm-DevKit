'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Organization = {
		ApplicationBasedAccessControlMode : {
			AuditMode: 2,
			Disabled: 0,
			Enabled: 1,
			Enabled_for_roles: 3
		},
		CurrencyDisplayOption : {
			Currency_code: 1,
			Currency_symbol: 0
		},
		CurrencyFormatCode : {
			_123_0: 0,
			_123_1: 1,
			_123_2: 2,
			_123_3: 3
		},
		DateFormatCode : {
		},
		DefaultRecurrenceEndRangeType : {
			End_By_Date: 3,
			No_End_Date: 1,
			Number_of_Occurrences: 2
		},
		DesktopFlowRunActionLogsStatus : {
			Disabled: 2,
			Enabled: 0,
			OnFailure: 1
		},
		DesktopFlowRunActionLogVersion : {
			AdditionalContext: 0,
			AdditionalContextAndFlowLogs: 2,
			FlowLogs: 1
		},
		DiscountCalculationMethod : {
			Line_item: 0,
			Per_unit: 1
		},
		EmailConnectionChannel : {
			Microsoft_Dynamics_365_Email_Router: 1,
			Server_Side_Synchronization: 0
		},
		EmailTemplateDefaultView : {
			Grid_View: 2,
			List_View: 3,
			Tiles_View: 1
		},
		FiscalPeriodFormatPeriod : {
			M0: 5,
			Month_0: 4,
			Month_Name: 7,
			P0: 3,
			Q0: 2,
			Quarter_0: 1,
			Semester_0: 6
		},
		FiscalYearFormatPrefix : {
			FY: 1
		},
		FiscalYearFormatSuffix : {
			Fiscal_Year: 2,
			FY: 1
		},
		FiscalYearFormatYear : {
			GGYY: 3,
			YY: 2,
			YYYY: 1
		},
		FullNameConventionCode : {
			First_Name: 1,
			First_Name_Middle_Initial_Last_Name: 3,
			First_Name_Middle_Name_Last_Name: 5,
			Last_Name_First_Name: 0,
			Last_Name_First_Name_Middle_Initial: 2,
			Last_Name_First_Name_Middle_Name: 4,
			Last_Name_no_space_First_Name: 7,
			Last_Name_space_First_Name: 6
		},
		IpBasedStorageAccessSignatureMode : {
			IP_Binding_and_IP_Firewall: 2,
			IP_Binding_only: 0,
			IP_Binding_or_IP_Firewall: 3,
			IP_Firewall_only: 1
		},
		ISVIntegrationCode : {
			All: 7,
			None: 0,
			Outlook: 6,
			Outlook_Laptop_Client: 4,
			Outlook_Workstation_Client: 2,
			Web: 1,
			Web_Outlook_Laptop_Client: 5,
			Web_Outlook_Workstation_Client: 3
		},
		LegacyAppToggle : {
			Auto: 0,
			Off: 2,
			On: 1
		},
		NegativeFormatCode : {
			Brackets: 0,
			Dash: 1,
			Dash_plus_Space: 2,
			Space_plus_Trailing_Dash: 4,
			Trailing_Dash: 3
		},
		OrganizationState : {
			Active: 3,
			Creating: 0,
			Updating: 2,
			Upgrading: 1
		},
		PluginTraceLogSetting : {
			All: 2,
			Exception: 1,
			Off: 0
		},
		ReleaseChannel : {
			Auto: 0,
			Microsoft_Inner_channel: 2,
			Monthly_channel: 1,
			Semi_annual_channel: 3
		},
		ReportScriptErrors : {
			Ask_me_for_permission_to_send_an_error_report_to_Microsoft: 1,
			Automatically_send_an_error_report_to_Microsoft_without_asking_me_for_permission: 2,
			Never_send_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365: 3,
			No_preference_for_sending_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365: 0
		},
		SameSiteModeForSessionCookie : {
			Default: 0,
			Lax: 2,
			None: 1,
			Strict: 3
		},
		SchedulingEngine : {
			Default_Scheduling_Engine: 0,
			Deprecated_Universal_Resource_Scheduling: 192350000
		},
		SharePointDeploymentType : {
			On_Premises: 1,
			Online: 0
		},
		SyncOptInSelectionStatus : {
			Failed: 3,
			Passed: 2,
			Processing: 1
		},
		TimeFormatCode : {
		},
		ValidationMode : {
			Block: 2,
			Off: 0,
			Warn: 1
		},
		WeekStartDayCode : {
		},
		YammerPostMethod : {
			Private: 1,
			Public: 0
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