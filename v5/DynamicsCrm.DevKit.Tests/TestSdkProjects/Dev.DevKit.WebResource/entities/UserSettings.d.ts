//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class UserSettingsApi {
		/**
		* DynamicsCrm.DevKit UserSettingsApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Normal polling frequency used for address book synchronization in Microsoft Office Outlook. */
		AddressBookSyncInterval: number | null;
		/** Default mode, such as simple or detailed, for advanced find. */
		AdvancedFindStartupMode: number | null;
		/** This attribute is no longer used. The data is now in the Mailbox.AllowEmailConnectorToUseCredentials attribute. */
		readonly AllowEmailCredentials: boolean | null;
		/** AM designator to use in Microsoft Dynamics 365. */
		AMDesignator: string | null;
		/** Set user status for ADC Suggestions */
		AutoCaptureUserStatus: number | null;
		/** Auto-create contact on client promote */
		AutoCreateContactOnPromote: number | null;
		/** Unique identifier of the business unit with which the user is associated. */
		BusinessUnitId: string | null;
		/** Calendar type for the system. Set to Gregorian US by default. */
		CalendarType: number | null;
		/** Unique identifier of the user who created the user settings. */
		readonly CreatedBy: string | null;
		/** Date and time when the user settings object was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the usersettings. */
		readonly CreatedOnBehalfBy: string | null;
		/** Number of decimal places that can be used for currency. */
		CurrencyDecimalPrecision: number | null;
		/** Information about how currency symbols are placed in Microsoft Dynamics 365. */
		CurrencyFormatCode: number | null;
		/** Symbol used for currency in Microsoft Dynamics 365. */
		CurrencySymbol: string | null;
		/** Determines the status of auto install of Dynamics 365 to Teams attempt has been completed */
		D365AutoInstallAttemptStatus: OptionSet.UserSettings.D365AutoInstallAttemptStatus | null;
		/** Information that specifies the level of data validation in excel worksheets exported in a format suitable for import. */
		DataValidationModeForExportToExcel: OptionSet.UserSettings.DataValidationModeForExportToExcel | null;
		/** Information about how the date is displayed in Microsoft Dynamics 365. */
		DateFormatCode: number | null;
		/** String showing how the date is displayed throughout Microsoft 365. */
		DateFormatString: string | null;
		/** Character used to separate the month, the day, and the year in dates in Microsoft Dynamics 365. */
		DateSeparator: string | null;
		/** Symbol used for decimal in Microsoft Dynamics 365. */
		DecimalSymbol: string | null;
		/** Default calendar view for the user. */
		DefaultCalendarView: number | null;
		/** Text area to enter default country code. */
		DefaultCountryCode: string | null;
		/** Unique identifier of the default dashboard. */
		DefaultDashboardId: string | null;
		/** Default search experience for the user. */
		DefaultSearchExperience: OptionSet.UserSettings.DefaultSearchExperience | null;
		/** This attribute is no longer used. The data is now in the Mailbox.Password attribute. */
		readonly EmailPassword: string | null;
		/** This attribute is no longer used. The data is now in the Mailbox.UserName attribute. */
		readonly EmailUsername: string | null;
		/** Indicates the form mode to be used. */
		EntityFormMode: OptionSet.UserSettings.EntityFormMode | null;
		/** Order in which names are to be displayed in Microsoft Dynamics 365. */
		FullNameConventionCode: number | null;
		/** Information that specifies whether the Get Started pane in lists is enabled. */
		GetStartedPaneContentEnabled: boolean | null;
		/** Unique identifier of the Help language. */
		HelpLanguageId: number | null;
		/** Web site home page for the user. */
		HomepageArea: string | null;
		/** Configuration of the home page layout. */
		HomepageLayout: string | null;
		/** Web site page for the user. */
		HomepageSubarea: string | null;
		/** Information that specifies whether a user account is to ignore unsolicited email (deprecated). */
		IgnoreUnsolicitedEmail: boolean | null;
		/** Incoming email filtering method. */
		IncomingEmailFilteringMethod: OptionSet.UserSettings.IncomingEmailFilteringMethod | null;
		/** Show or dismiss alert for Apps for 365. */
		IsAppsForCrmAlertDismissed: boolean | null;
		/** Indicates whether to use the Auto Capture feature enabled or not. */
		IsAutoDataCaptureEnabled: boolean | null;
		/** Enable or disable country code selection . */
		IsDefaultCountryCodeCheckEnabled: boolean | null;
		/** Indicates if duplicate detection is enabled when going online. */
		IsDuplicateDetectionEnabledWhenGoingOnline: boolean | null;
		/** Enable or disable email conversation view on timeline wall selection. */
		IsEmailConversationViewEnabled: boolean | null;
		/** Enable or disable guided help. */
		IsGuidedHelpEnabled: boolean | null;
		/** Indicates if the synchronization of user resource booking with Exchange is enabled at user level. */
		IsResourceBookingExchangeSyncEnabled: boolean | null;
		/** Indicates if send as other user privilege is enabled or not. */
		IsSendAsAllowed: boolean | null;
		/** Shows the last time when the traces were read from the database. */
		LastAlertsViewedTime_UtcDateAndTime: Date | null;
		/** Stores the timestamp for when the ViewPersonalizationSettings attribute was updated for this user in the UserEntityUISettings table. */
		LastModifiedTimeForViewPersonalizationSettings_UtcDateAndTime: Date | null;
		/** Unique identifier of the user locale. */
		LocaleId: number | null;
		/** Information that specifies how Long Date is displayed throughout Microsoft 365. */
		LongDateFormatCode: number | null;
		/** Unique identifier of the user who last modified the user settings. */
		readonly ModifiedBy: string | null;
		/** Date and time when the user settings object was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the usersettings. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Information that specifies how negative currency numbers are displayed in Microsoft Dynamics 365. */
		NegativeCurrencyFormatCode: number | null;
		/** Information that specifies how negative numbers are displayed in Microsoft Dynamics 365. */
		NegativeFormatCode: number | null;
		/** Next tracking number. */
		NextTrackingNumber: number | null;
		/** Information that specifies how numbers are grouped in Microsoft Dynamics 365. */
		NumberGroupFormat: string | null;
		/** Symbol used for number separation in Microsoft Dynamics 365. */
		NumberSeparator: string | null;
		/** Normal polling frequency used for background offline synchronization in Microsoft Office Outlook. */
		OfflineSyncInterval: number | null;
		/** Normal polling frequency used for record synchronization in Microsoft Office Outlook. */
		OutlookSyncInterval: number | null;
		/** Information that specifies how many items to list on a page in list views. */
		PagingLimit: number | null;
		/** For internal use only. */
		PersonalizationSettings: string | null;
		/** PM designator to use in Microsoft Dynamics 365. */
		PMDesignator: string | null;
		/** Preferred Solution when create a component without under a solution in this organization */
		PreferredSolution: string | null;
		/** Number of decimal places that can be used for prices. */
		PricingDecimalPrecision: number | null;
		/** Model app channel override */
		ReleaseChannel: OptionSet.UserSettings.ReleaseChannel | null;
		/** Picklist for selecting the user preference for reporting scripting errors. */
		ReportScriptErrors: OptionSet.UserSettings.ReportScriptErrors | null;
		/** The version number for resource booking synchronization with Exchange. */
		ResourceBookingExchangeSyncVersion: number | null;
		/** Store selected customer service hub dashboard saved filter id. */
		SelectedGlobalFilterId: string | null;
		/** Information that specifies whether to display the week number in calendar displays in Microsoft Dynamics 365. */
		ShowWeekNumber: boolean | null;
		/** For Internal use only */
		SplitViewState: boolean | null;
		/** Indicates if the company field in Microsoft Office Outlook items are set during Outlook synchronization. */
		SyncContactCompany: boolean | null;
		/** Unique identifier of the user. */
		SystemUserId: string | null;
		/** The number of times a user has interacted with the Tabled Scoped Dataverse Search feature teaching bubble. */
		TableScopedDVSearchFeatureTeachingBubbleViews: number | null;
		/** The number of times a user has interacted with the Tabled Scoped Dataverse Search Quick Find teaching bubble. */
		TableScopedDVSearchQuickFindTeachingBubbleViews: number | null;
		/** Information that specifies how the time is displayed in Microsoft Dynamics 365. */
		TimeFormatCode: number | null;
		/** Text for how time is displayed in Microsoft Dynamics 365. */
		TimeFormatString: string | null;
		/** Text for how time is displayed in Microsoft Dynamics 365. */
		TimeSeparator: string | null;
		/** Local time zone adjustment for the user. System calculated based on the time zone selected. */
		TimeZoneBias: number | null;
		/** Local time zone for the user. */
		TimeZoneCode: number | null;
		/** Local time zone daylight adjustment for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightBias: number | null;
		/** Local time zone daylight day for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightDay: number | null;
		/** Local time zone daylight day of week for the user. System calculated based on the time zone selected in Options. */
		TimeZoneDaylightDayOfWeek: number | null;
		/** Local time zone daylight hour for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightHour: number | null;
		/** Local time zone daylight minute for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightMinute: number | null;
		/** Local time zone daylight month for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightMonth: number | null;
		/** Local time zone daylight second for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightSecond: number | null;
		/** Local time zone daylight year for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightYear: number | null;
		/** Local time zone standard time bias for the user. System calculated based on the time zone selected. */
		TimeZoneStandardBias: number | null;
		/** Local time zone standard day for the user. System calculated based on the time zone selected. */
		TimeZoneStandardDay: number | null;
		/** Local time zone standard day of week for the user. System calculated based on the time zone selected. */
		TimeZoneStandardDayOfWeek: number | null;
		/** Local time zone standard hour for the user. System calculated based on the time zone selected. */
		TimeZoneStandardHour: number | null;
		/** Local time zone standard minute for the user. System calculated based on the time zone selected. */
		TimeZoneStandardMinute: number | null;
		/** Local time zone standard month for the user. System calculated based on the time zone selected. */
		TimeZoneStandardMonth: number | null;
		/** Local time zone standard second for the user. System calculated based on the time zone selected. */
		TimeZoneStandardSecond: number | null;
		/** Local time zone standard year for the user. System calculated based on the time zone selected. */
		TimeZoneStandardYear: number | null;
		/** Tracking token ID. */
		TrackingTokenId: number | null;
		/** Unique identifier of the default currency of the user. */
		TransactionCurrencyId: string | null;
		/** The list of app modules with try toggle sets */
		TryToggleSets: string | null;
		/** Enable or disable try toggle status. */
		TryToggleStatus: boolean | null;
		/** Unique identifier of the language in which to view the user interface (UI). */
		UILanguageId: number | null;
		/** Indicates whether to use the Microsoft Dynamics 365 appointment form within Microsoft Office Outlook for creating new appointments. */
		UseCrmFormForAppointment: boolean | null;
		/** Indicates whether to use the Microsoft Dynamics 365 contact form within Microsoft Office Outlook for creating new contacts. */
		UseCrmFormForContact: boolean | null;
		/** Indicates whether to use the Microsoft Dynamics 365 email form within Microsoft Office Outlook for creating new emails. */
		UseCrmFormForEmail: boolean | null;
		/** Indicates whether to use the Microsoft Dynamics 365 task form within Microsoft Office Outlook for creating new tasks. */
		UseCrmFormForTask: boolean | null;
		/** Indicates whether image strips are used to render images. */
		UseImageStrips: boolean | null;
		/** Specifies user profile ids in comma separated list. */
		UserProfile: string | null;
		readonly VersionNumber: number | null;
		/** The layout of the visualization pane. */
		VisualizationPaneLayout: OptionSet.UserSettings.VisualizationPaneLayout | null;
		/** Workday start time for the user. */
		WorkdayStartTime: string | null;
		/** Workday stop time for the user. */
		WorkdayStopTime: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Normal polling frequency used for address book synchronization in Microsoft Office Outlook. */
			readonly AddressBookSyncInterval: string;
			/** Default mode, such as simple or detailed, for advanced find. */
			readonly AdvancedFindStartupMode: string;
			/** This attribute is no longer used. The data is now in the Mailbox.AllowEmailConnectorToUseCredentials attribute. */
			readonly AllowEmailCredentials: string;
			/** AM designator to use in Microsoft Dynamics 365. */
			readonly AMDesignator: string;
			/** Set user status for ADC Suggestions */
			readonly AutoCaptureUserStatus: string;
			/** Auto-create contact on client promote */
			readonly AutoCreateContactOnPromote: string;
			/** Unique identifier of the business unit with which the user is associated. */
			readonly BusinessUnitId: string;
			/** Calendar type for the system. Set to Gregorian US by default. */
			readonly CalendarType: string;
			/** Unique identifier of the user who created the user settings. */
			readonly CreatedBy: string;
			/** Date and time when the user settings object was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the usersettings. */
			readonly CreatedOnBehalfBy: string;
			/** Number of decimal places that can be used for currency. */
			readonly CurrencyDecimalPrecision: string;
			/** Information about how currency symbols are placed in Microsoft Dynamics 365. */
			readonly CurrencyFormatCode: string;
			/** Symbol used for currency in Microsoft Dynamics 365. */
			readonly CurrencySymbol: string;
			/** Determines the status of auto install of Dynamics 365 to Teams attempt has been completed */
			readonly D365AutoInstallAttemptStatus: string;
			/** Information that specifies the level of data validation in excel worksheets exported in a format suitable for import. */
			readonly DataValidationModeForExportToExcel: string;
			/** Information about how the date is displayed in Microsoft Dynamics 365. */
			readonly DateFormatCode: string;
			/** String showing how the date is displayed throughout Microsoft 365. */
			readonly DateFormatString: string;
			/** Character used to separate the month, the day, and the year in dates in Microsoft Dynamics 365. */
			readonly DateSeparator: string;
			/** Symbol used for decimal in Microsoft Dynamics 365. */
			readonly DecimalSymbol: string;
			/** Default calendar view for the user. */
			readonly DefaultCalendarView: string;
			/** Text area to enter default country code. */
			readonly DefaultCountryCode: string;
			/** Unique identifier of the default dashboard. */
			readonly DefaultDashboardId: string;
			/** Default search experience for the user. */
			readonly DefaultSearchExperience: string;
			/** This attribute is no longer used. The data is now in the Mailbox.Password attribute. */
			readonly EmailPassword: string;
			/** This attribute is no longer used. The data is now in the Mailbox.UserName attribute. */
			readonly EmailUsername: string;
			/** Indicates the form mode to be used. */
			readonly EntityFormMode: string;
			/** Order in which names are to be displayed in Microsoft Dynamics 365. */
			readonly FullNameConventionCode: string;
			/** Information that specifies whether the Get Started pane in lists is enabled. */
			readonly GetStartedPaneContentEnabled: string;
			/** Unique identifier of the Help language. */
			readonly HelpLanguageId: string;
			/** Web site home page for the user. */
			readonly HomepageArea: string;
			/** Configuration of the home page layout. */
			readonly HomepageLayout: string;
			/** Web site page for the user. */
			readonly HomepageSubarea: string;
			/** Information that specifies whether a user account is to ignore unsolicited email (deprecated). */
			readonly IgnoreUnsolicitedEmail: string;
			/** Incoming email filtering method. */
			readonly IncomingEmailFilteringMethod: string;
			/** Show or dismiss alert for Apps for 365. */
			readonly IsAppsForCrmAlertDismissed: string;
			/** Indicates whether to use the Auto Capture feature enabled or not. */
			readonly IsAutoDataCaptureEnabled: string;
			/** Enable or disable country code selection . */
			readonly IsDefaultCountryCodeCheckEnabled: string;
			/** Indicates if duplicate detection is enabled when going online. */
			readonly IsDuplicateDetectionEnabledWhenGoingOnline: string;
			/** Enable or disable email conversation view on timeline wall selection. */
			readonly IsEmailConversationViewEnabled: string;
			/** Enable or disable guided help. */
			readonly IsGuidedHelpEnabled: string;
			/** Indicates if the synchronization of user resource booking with Exchange is enabled at user level. */
			readonly IsResourceBookingExchangeSyncEnabled: string;
			/** Indicates if send as other user privilege is enabled or not. */
			readonly IsSendAsAllowed: string;
			/** Shows the last time when the traces were read from the database. */
			readonly LastAlertsViewedTime_UtcDateAndTime: string;
			/** Stores the timestamp for when the ViewPersonalizationSettings attribute was updated for this user in the UserEntityUISettings table. */
			readonly LastModifiedTimeForViewPersonalizationSettings_UtcDateAndTime: string;
			/** Unique identifier of the user locale. */
			readonly LocaleId: string;
			/** Information that specifies how Long Date is displayed throughout Microsoft 365. */
			readonly LongDateFormatCode: string;
			/** Unique identifier of the user who last modified the user settings. */
			readonly ModifiedBy: string;
			/** Date and time when the user settings object was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the usersettings. */
			readonly ModifiedOnBehalfBy: string;
			/** Information that specifies how negative currency numbers are displayed in Microsoft Dynamics 365. */
			readonly NegativeCurrencyFormatCode: string;
			/** Information that specifies how negative numbers are displayed in Microsoft Dynamics 365. */
			readonly NegativeFormatCode: string;
			/** Next tracking number. */
			readonly NextTrackingNumber: string;
			/** Information that specifies how numbers are grouped in Microsoft Dynamics 365. */
			readonly NumberGroupFormat: string;
			/** Symbol used for number separation in Microsoft Dynamics 365. */
			readonly NumberSeparator: string;
			/** Normal polling frequency used for background offline synchronization in Microsoft Office Outlook. */
			readonly OfflineSyncInterval: string;
			/** Normal polling frequency used for record synchronization in Microsoft Office Outlook. */
			readonly OutlookSyncInterval: string;
			/** Information that specifies how many items to list on a page in list views. */
			readonly PagingLimit: string;
			/** For internal use only. */
			readonly PersonalizationSettings: string;
			/** PM designator to use in Microsoft Dynamics 365. */
			readonly PMDesignator: string;
			/** Preferred Solution when create a component without under a solution in this organization */
			readonly PreferredSolution: string;
			/** Number of decimal places that can be used for prices. */
			readonly PricingDecimalPrecision: string;
			/** Model app channel override */
			readonly ReleaseChannel: string;
			/** Picklist for selecting the user preference for reporting scripting errors. */
			readonly ReportScriptErrors: string;
			/** The version number for resource booking synchronization with Exchange. */
			readonly ResourceBookingExchangeSyncVersion: string;
			/** Store selected customer service hub dashboard saved filter id. */
			readonly SelectedGlobalFilterId: string;
			/** Information that specifies whether to display the week number in calendar displays in Microsoft Dynamics 365. */
			readonly ShowWeekNumber: string;
			/** For Internal use only */
			readonly SplitViewState: string;
			/** Indicates if the company field in Microsoft Office Outlook items are set during Outlook synchronization. */
			readonly SyncContactCompany: string;
			/** Unique identifier of the user. */
			readonly SystemUserId: string;
			/** The number of times a user has interacted with the Tabled Scoped Dataverse Search feature teaching bubble. */
			readonly TableScopedDVSearchFeatureTeachingBubbleViews: string;
			/** The number of times a user has interacted with the Tabled Scoped Dataverse Search Quick Find teaching bubble. */
			readonly TableScopedDVSearchQuickFindTeachingBubbleViews: string;
			/** Information that specifies how the time is displayed in Microsoft Dynamics 365. */
			readonly TimeFormatCode: string;
			/** Text for how time is displayed in Microsoft Dynamics 365. */
			readonly TimeFormatString: string;
			/** Text for how time is displayed in Microsoft Dynamics 365. */
			readonly TimeSeparator: string;
			/** Local time zone adjustment for the user. System calculated based on the time zone selected. */
			readonly TimeZoneBias: string;
			/** Local time zone for the user. */
			readonly TimeZoneCode: string;
			/** Local time zone daylight adjustment for the user. System calculated based on the time zone selected. */
			readonly TimeZoneDaylightBias: string;
			/** Local time zone daylight day for the user. System calculated based on the time zone selected. */
			readonly TimeZoneDaylightDay: string;
			/** Local time zone daylight day of week for the user. System calculated based on the time zone selected in Options. */
			readonly TimeZoneDaylightDayOfWeek: string;
			/** Local time zone daylight hour for the user. System calculated based on the time zone selected. */
			readonly TimeZoneDaylightHour: string;
			/** Local time zone daylight minute for the user. System calculated based on the time zone selected. */
			readonly TimeZoneDaylightMinute: string;
			/** Local time zone daylight month for the user. System calculated based on the time zone selected. */
			readonly TimeZoneDaylightMonth: string;
			/** Local time zone daylight second for the user. System calculated based on the time zone selected. */
			readonly TimeZoneDaylightSecond: string;
			/** Local time zone daylight year for the user. System calculated based on the time zone selected. */
			readonly TimeZoneDaylightYear: string;
			/** Local time zone standard time bias for the user. System calculated based on the time zone selected. */
			readonly TimeZoneStandardBias: string;
			/** Local time zone standard day for the user. System calculated based on the time zone selected. */
			readonly TimeZoneStandardDay: string;
			/** Local time zone standard day of week for the user. System calculated based on the time zone selected. */
			readonly TimeZoneStandardDayOfWeek: string;
			/** Local time zone standard hour for the user. System calculated based on the time zone selected. */
			readonly TimeZoneStandardHour: string;
			/** Local time zone standard minute for the user. System calculated based on the time zone selected. */
			readonly TimeZoneStandardMinute: string;
			/** Local time zone standard month for the user. System calculated based on the time zone selected. */
			readonly TimeZoneStandardMonth: string;
			/** Local time zone standard second for the user. System calculated based on the time zone selected. */
			readonly TimeZoneStandardSecond: string;
			/** Local time zone standard year for the user. System calculated based on the time zone selected. */
			readonly TimeZoneStandardYear: string;
			/** Tracking token ID. */
			readonly TrackingTokenId: string;
			/** Unique identifier of the default currency of the user. */
			readonly TransactionCurrencyId: string;
			/** The list of app modules with try toggle sets */
			readonly TryToggleSets: string;
			/** Enable or disable try toggle status. */
			readonly TryToggleStatus: string;
			/** Unique identifier of the language in which to view the user interface (UI). */
			readonly UILanguageId: string;
			/** Indicates whether to use the Microsoft Dynamics 365 appointment form within Microsoft Office Outlook for creating new appointments. */
			readonly UseCrmFormForAppointment: string;
			/** Indicates whether to use the Microsoft Dynamics 365 contact form within Microsoft Office Outlook for creating new contacts. */
			readonly UseCrmFormForContact: string;
			/** Indicates whether to use the Microsoft Dynamics 365 email form within Microsoft Office Outlook for creating new emails. */
			readonly UseCrmFormForEmail: string;
			/** Indicates whether to use the Microsoft Dynamics 365 task form within Microsoft Office Outlook for creating new tasks. */
			readonly UseCrmFormForTask: string;
			/** Indicates whether image strips are used to render images. */
			readonly UseImageStrips: string;
			/** Specifies user profile ids in comma separated list. */
			readonly UserProfile: string;
			readonly VersionNumber: string;
			/** The layout of the visualization pane. */
			readonly VisualizationPaneLayout: string;
			/** Workday start time for the user. */
			readonly WorkdayStartTime: string;
			/** Workday stop time for the user. */
			readonly WorkdayStopTime: string;
		}
	}
}
declare namespace OptionSet {
	namespace UserSettings {
		enum D365AutoInstallAttemptStatus {
			/** Already_installed = 2*/
			Already_installed = 2,
			/** Auto_installed = 1*/
			Auto_installed = 1,
			/** No_Graph_API = 6*/
			No_Graph_API = 6,
			/** No_Solution = 5*/
			No_Solution = 5,
			/** Not_attempted = 0*/
			Not_attempted = 0,
			/** Resource_Disabled = 7*/
			Resource_Disabled = 7,
			/** Teams_admin_blocked = 3*/
			Teams_admin_blocked = 3,
			/** Unauthorized = 4*/
			Unauthorized = 4
		}
		enum DataValidationModeForExportToExcel {
			/** Full = 0*/
			Full = 0,
			/** None = 1*/
			None = 1
		}
		enum DefaultSearchExperience {
			/** Categorized_search = 1*/
			Categorized_search = 1,
			/** Custom_search = 3*/
			Custom_search = 3,
			/** Relevance_search = 0*/
			Relevance_search = 0,
			/** Use_last_search = 2*/
			Use_last_search = 2
		}
		enum EntityFormMode {
			/** Edit = 2*/
			Edit = 2,
			/** Organization_default = 0*/
			Organization_default = 0,
			/** Read_optimized = 1*/
			Read_optimized = 1
		}
		enum IncomingEmailFilteringMethod {
			/** All_email_messages = 0*/
			All_email_messages = 0,
			/** Email_messages_from_Dynamics_365_Leads_Contacts_and_Accounts = 2*/
			Email_messages_from_Dynamics_365_Leads_Contacts_and_Accounts = 2,
			/** Email_messages_from_Dynamics_365_records_that_are_email_enabled = 3*/
			Email_messages_from_Dynamics_365_records_that_are_email_enabled = 3,
			/** Email_messages_in_response_to_Dynamics_365_email = 1*/
			Email_messages_in_response_to_Dynamics_365_email = 1,
			/** No_email_messages = 4*/
			No_email_messages = 4
		}
		enum ReleaseChannel {
			/** Inner_channel_override = 3*/
			Inner_channel_override = 3,
			/** Monthly_channel_override = 2*/
			Monthly_channel_override = 2,
			/** None = 0*/
			None = 0,
			/** Semi_annual_channel_override = 1*/
			Semi_annual_channel_override = 1
		}
		enum ReportScriptErrors {
			/** Ask_me_for_permission_to_send_an_error_report_to_Microsoft = 1*/
			Ask_me_for_permission_to_send_an_error_report_to_Microsoft = 1,
			/** Automatically_send_an_error_report_to_Microsoft_without_asking_me_for_permission = 2*/
			Automatically_send_an_error_report_to_Microsoft_without_asking_me_for_permission = 2,
			/** Never_send_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365 = 3*/
			Never_send_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365 = 3
		}
		enum VisualizationPaneLayout {
			/** Side_by_side = 1*/
			Side_by_side = 1,
			/** Top_bottom = 0*/
			Top_bottom = 0
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}