//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class UserSettingsApi {
		/**
		* DynamicsCrm.DevKit UserSettingsApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Normal polling frequency used for address book synchronization in Microsoft Office Outlook. */
		AddressBookSyncInterval: number;
		/** Default mode, such as simple or detailed, for advanced find. */
		AdvancedFindStartupMode: number;
		/** This attribute is no longer used. The data is now in the Mailbox.AllowEmailConnectorToUseCredentials attribute. */
		readonly AllowEmailCredentials: boolean;
		/** AM designator to use in Microsoft Dynamics 365. */
		AMDesignator: string;
		/** Set user status for ADC Suggestions */
		AutoCaptureUserStatus: number;
		/** Auto-create contact on client promote */
		AutoCreateContactOnPromote: number;
		/** Unique identifier of the business unit with which the user is associated. */
		BusinessUnitId: string;
		/** Calendar type for the system. Set to Gregorian US by default. */
		CalendarType: number;
		/** Unique identifier of the user who created the user settings. */
		readonly CreatedBy: string;
		/** Date and time when the user settings object was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the usersettings. */
		readonly CreatedOnBehalfBy: string;
		/** Number of decimal places that can be used for currency. */
		CurrencyDecimalPrecision: number;
		/** Information about how currency symbols are placed in Microsoft Dynamics 365. */
		CurrencyFormatCode: number;
		/** Symbol used for currency in Microsoft Dynamics 365. */
		CurrencySymbol: string;
		/** Information that specifies the level of data validation in excel worksheets exported in a format suitable for import. */
		DataValidationModeForExportToExcel: OptionSet.UserSettings.DataValidationModeForExportToExcel;
		/** Information about how the date is displayed in Microsoft Dynamics 365. */
		DateFormatCode: number;
		/** String showing how the date is displayed throughout Microsoft 365. */
		DateFormatString: string;
		/** Character used to separate the month, the day, and the year in dates in Microsoft Dynamics 365. */
		DateSeparator: string;
		/** Symbol used for decimal in Microsoft Dynamics 365. */
		DecimalSymbol: string;
		/** Default calendar view for the user. */
		DefaultCalendarView: number;
		/** Text area to enter default country code. */
		DefaultCountryCode: string;
		/** Unique identifier of the default dashboard. */
		DefaultDashboardId: string;
		/** Default search experience for the user. */
		DefaultSearchExperience: OptionSet.UserSettings.DefaultSearchExperience;
		/** This attribute is no longer used. The data is now in the Mailbox.Password attribute. */
		readonly EmailPassword: string;
		/** This attribute is no longer used. The data is now in the Mailbox.UserName attribute. */
		readonly EmailUsername: string;
		/** Indicates the form mode to be used. */
		EntityFormMode: OptionSet.UserSettings.EntityFormMode;
		/** Order in which names are to be displayed in Microsoft Dynamics 365. */
		FullNameConventionCode: number;
		/** Information that specifies whether the Get Started pane in lists is enabled. */
		GetStartedPaneContentEnabled: boolean;
		/** Unique identifier of the Help language. */
		HelpLanguageId: number;
		/** Web site home page for the user. */
		HomepageArea: string;
		/** Configuration of the home page layout. */
		HomepageLayout: string;
		/** Web site page for the user. */
		HomepageSubarea: string;
		/** Information that specifies whether a user account is to ignore unsolicited email (deprecated). */
		IgnoreUnsolicitedEmail: boolean;
		/** Incoming email filtering method. */
		IncomingEmailFilteringMethod: OptionSet.UserSettings.IncomingEmailFilteringMethod;
		/** Show or dismiss alert for Apps for 365. */
		IsAppsForCrmAlertDismissed: boolean;
		/** Indicates whether to use the Auto Capture feature enabled or not. */
		IsAutoDataCaptureEnabled: boolean;
		/** Enable or disable country code selection . */
		IsDefaultCountryCodeCheckEnabled: boolean;
		/** Indicates if duplicate detection is enabled when going online. */
		IsDuplicateDetectionEnabledWhenGoingOnline: boolean;
		/** Enable or disable email conversation view on timeline wall selection. */
		IsEmailConversationViewEnabled: boolean;
		/** Enable or disable guided help. */
		IsGuidedHelpEnabled: boolean;
		/** Indicates if the synchronization of user resource booking with Exchange is enabled at user level. */
		IsResourceBookingExchangeSyncEnabled: boolean;
		/** Indicates if send as other user privilege is enabled or not. */
		IsSendAsAllowed: boolean;
		/** Shows the last time when the traces were read from the database. */
		LastAlertsViewedTime_UtcDateAndTime: Date;
		/** Stores the timestamp for when the ViewPersonalizationSettings attribute was updated for this user in the UserEntityUISettings table. */
		LastModifiedTimeForViewPersonalizationSettings_UtcDateAndTime: Date;
		/** Unique identifier of the user locale. */
		LocaleId: number;
		/** Information that specifies how Long Date is displayed throughout Microsoft 365. */
		LongDateFormatCode: number;
		/** Unique identifier of the user who last modified the user settings. */
		readonly ModifiedBy: string;
		/** Date and time when the user settings object was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the usersettings. */
		readonly ModifiedOnBehalfBy: string;
		/** Information that specifies how negative currency numbers are displayed in Microsoft Dynamics 365. */
		NegativeCurrencyFormatCode: number;
		/** Information that specifies how negative numbers are displayed in Microsoft Dynamics 365. */
		NegativeFormatCode: number;
		/** Next tracking number. */
		NextTrackingNumber: number;
		/** Information that specifies how numbers are grouped in Microsoft Dynamics 365. */
		NumberGroupFormat: string;
		/** Symbol used for number separation in Microsoft Dynamics 365. */
		NumberSeparator: string;
		/** Normal polling frequency used for background offline synchronization in Microsoft Office Outlook. */
		OfflineSyncInterval: number;
		/** Normal polling frequency used for record synchronization in Microsoft Office Outlook. */
		OutlookSyncInterval: number;
		/** Information that specifies how many items to list on a page in list views. */
		PagingLimit: number;
		/** For internal use only. */
		PersonalizationSettings: string;
		/** PM designator to use in Microsoft Dynamics 365. */
		PMDesignator: string;
		/** Number of decimal places that can be used for prices. */
		PricingDecimalPrecision: number;
		/** Picklist for selecting the user preference for reporting scripting errors. */
		ReportScriptErrors: OptionSet.UserSettings.ReportScriptErrors;
		/** The version number for resource booking synchronization with Exchange. */
		ResourceBookingExchangeSyncVersion: number;
		/** Store selected customer service hub dashboard saved filter id. */
		SelectedGlobalFilterId: string;
		/** Information that specifies whether to display the week number in calendar displays in Microsoft Dynamics 365. */
		ShowWeekNumber: boolean;
		/** For Internal use only */
		SplitViewState: boolean;
		/** Indicates if the company field in Microsoft Office Outlook items are set during Outlook synchronization. */
		SyncContactCompany: boolean;
		/** Unique identifier of the user. */
		SystemUserId: string;
		/** Information that specifies how the time is displayed in Microsoft Dynamics 365. */
		TimeFormatCode: number;
		/** Text for how time is displayed in Microsoft Dynamics 365. */
		TimeFormatString: string;
		/** Text for how time is displayed in Microsoft Dynamics 365. */
		TimeSeparator: string;
		/** Local time zone adjustment for the user. System calculated based on the time zone selected. */
		TimeZoneBias: number;
		/** Local time zone for the user. */
		TimeZoneCode: number;
		/** Local time zone daylight adjustment for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightBias: number;
		/** Local time zone daylight day for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightDay: number;
		/** Local time zone daylight day of week for the user. System calculated based on the time zone selected in Options. */
		TimeZoneDaylightDayOfWeek: number;
		/** Local time zone daylight hour for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightHour: number;
		/** Local time zone daylight minute for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightMinute: number;
		/** Local time zone daylight month for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightMonth: number;
		/** Local time zone daylight second for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightSecond: number;
		/** Local time zone daylight year for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightYear: number;
		/** Local time zone standard time bias for the user. System calculated based on the time zone selected. */
		TimeZoneStandardBias: number;
		/** Local time zone standard day for the user. System calculated based on the time zone selected. */
		TimeZoneStandardDay: number;
		/** Local time zone standard day of week for the user. System calculated based on the time zone selected. */
		TimeZoneStandardDayOfWeek: number;
		/** Local time zone standard hour for the user. System calculated based on the time zone selected. */
		TimeZoneStandardHour: number;
		/** Local time zone standard minute for the user. System calculated based on the time zone selected. */
		TimeZoneStandardMinute: number;
		/** Local time zone standard month for the user. System calculated based on the time zone selected. */
		TimeZoneStandardMonth: number;
		/** Local time zone standard second for the user. System calculated based on the time zone selected. */
		TimeZoneStandardSecond: number;
		/** Local time zone standard year for the user. System calculated based on the time zone selected. */
		TimeZoneStandardYear: number;
		/** Tracking token ID. */
		TrackingTokenId: number;
		/** Unique identifier of the default currency of the user. */
		TransactionCurrencyId: string;
		/** Unique identifier of the language in which to view the user interface (UI). */
		UILanguageId: number;
		/** Indicates whether to use the Microsoft Dynamics 365 appointment form within Microsoft Office Outlook for creating new appointments. */
		UseCrmFormForAppointment: boolean;
		/** Indicates whether to use the Microsoft Dynamics 365 contact form within Microsoft Office Outlook for creating new contacts. */
		UseCrmFormForContact: boolean;
		/** Indicates whether to use the Microsoft Dynamics 365 email form within Microsoft Office Outlook for creating new emails. */
		UseCrmFormForEmail: boolean;
		/** Indicates whether to use the Microsoft Dynamics 365 task form within Microsoft Office Outlook for creating new tasks. */
		UseCrmFormForTask: boolean;
		/** Indicates whether image strips are used to render images. */
		UseImageStrips: boolean;
		/** Specifies user profile ids in comma separated list. */
		UserProfile: string;
		readonly VersionNumber: number;
		/** The layout of the visualization pane. */
		VisualizationPaneLayout: OptionSet.UserSettings.VisualizationPaneLayout;
		/** Workday start time for the user. */
		WorkdayStartTime: string;
		/** Workday stop time for the user. */
		WorkdayStopTime: string;
	}
}
declare namespace OptionSet {
	namespace UserSettings {
		enum DataValidationModeForExportToExcel {
			/** 0 */
			Full,
			/** 1 */
			None
		}
		enum DefaultSearchExperience {
			/** 1 */
			Categorized_search,
			/** 3 */
			Custom_search,
			/** 0 */
			Relevance_search,
			/** 2 */
			Use_last_search
		}
		enum EntityFormMode {
			/** 2 */
			Edit,
			/** 0 */
			Organization_default,
			/** 1 */
			Read_optimized
		}
		enum IncomingEmailFilteringMethod {
			/** 0 */
			All_email_messages,
			/** 2 */
			Email_messages_from_Dynamics_365_Leads_Contacts_and_Accounts,
			/** 3 */
			Email_messages_from_Dynamics_365_records_that_are_email_enabled,
			/** 1 */
			Email_messages_in_response_to_Dynamics_365_email,
			/** 4 */
			No_email_messages
		}
		enum ReportScriptErrors {
			/** 1 */
			Ask_me_for_permission_to_send_an_error_report_to_Microsoft,
			/** 2 */
			Automatically_send_an_error_report_to_Microsoft_without_asking_me_for_permission,
			/** 3 */
			Never_send_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365
		}
		enum VisualizationPaneLayout {
			/** 1 */
			Side_by_side,
			/** 0 */
			Top_bottom
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}