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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Normal polling frequency used for address book synchronization in Microsoft Office Outlook. */
		AddressBookSyncInterval: DevKit.WebApi.IntegerValue;
		/** Default mode, such as simple or detailed, for advanced find. */
		AdvancedFindStartupMode: DevKit.WebApi.IntegerValue;
		/** This attribute is no longer used. The data is now in the Mailbox.AllowEmailConnectorToUseCredentials attribute. */
		AllowEmailCredentials: DevKit.WebApi.BooleanValueReadonly;
		/** AM designator to use in Microsoft Dynamics 365. */
		AMDesignator: DevKit.WebApi.StringValue;
		/** Set user status for ADC Suggestions */
		AutoCaptureUserStatus: DevKit.WebApi.IntegerValue;
		/** Auto-create contact on client promote */
		AutoCreateContactOnPromote: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the business unit with which the user is associated. */
		BusinessUnitId: DevKit.WebApi.GuidValue;
		/** Calendar type for the system. Set to Gregorian US by default. */
		CalendarType: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who created the user settings. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the user settings object was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the usersettings. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Number of decimal places that can be used for currency. */
		CurrencyDecimalPrecision: DevKit.WebApi.IntegerValue;
		/** Information about how currency symbols are placed in Microsoft Dynamics 365. */
		CurrencyFormatCode: DevKit.WebApi.IntegerValue;
		/** Symbol used for currency in Microsoft Dynamics 365. */
		CurrencySymbol: DevKit.WebApi.StringValue;
		/** Information that specifies the level of data validation in excel worksheets exported in a format suitable for import. */
		DataValidationModeForExportToExcel: DevKit.WebApi.OptionSetValue;
		/** Information about how the date is displayed in Microsoft Dynamics 365. */
		DateFormatCode: DevKit.WebApi.IntegerValue;
		/** String showing how the date is displayed throughout Microsoft 365. */
		DateFormatString: DevKit.WebApi.StringValue;
		/** Character used to separate the month, the day, and the year in dates in Microsoft Dynamics 365. */
		DateSeparator: DevKit.WebApi.StringValue;
		/** Symbol used for decimal in Microsoft Dynamics 365. */
		DecimalSymbol: DevKit.WebApi.StringValue;
		/** Default calendar view for the user. */
		DefaultCalendarView: DevKit.WebApi.IntegerValue;
		/** Text area to enter default country code. */
		DefaultCountryCode: DevKit.WebApi.StringValue;
		/** Unique identifier of the default dashboard. */
		DefaultDashboardId: DevKit.WebApi.GuidValue;
		/** Default search experience for the user. */
		DefaultSearchExperience: DevKit.WebApi.OptionSetValue;
		/** This attribute is no longer used. The data is now in the Mailbox.Password attribute. */
		EmailPassword: DevKit.WebApi.StringValueReadonly;
		/** This attribute is no longer used. The data is now in the Mailbox.UserName attribute. */
		EmailUsername: DevKit.WebApi.StringValueReadonly;
		/** Indicates the form mode to be used. */
		EntityFormMode: DevKit.WebApi.OptionSetValue;
		/** Order in which names are to be displayed in Microsoft Dynamics 365. */
		FullNameConventionCode: DevKit.WebApi.IntegerValue;
		/** Information that specifies whether the Get Started pane in lists is enabled. */
		GetStartedPaneContentEnabled: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the Help language. */
		HelpLanguageId: DevKit.WebApi.IntegerValue;
		/** Web site home page for the user. */
		HomepageArea: DevKit.WebApi.StringValue;
		/** Configuration of the home page layout. */
		HomepageLayout: DevKit.WebApi.StringValue;
		/** Web site page for the user. */
		HomepageSubarea: DevKit.WebApi.StringValue;
		/** Information that specifies whether a user account is to ignore unsolicited email (deprecated). */
		IgnoreUnsolicitedEmail: DevKit.WebApi.BooleanValue;
		/** Incoming email filtering method. */
		IncomingEmailFilteringMethod: DevKit.WebApi.OptionSetValue;
		/** Show or dismiss alert for Apps for 365. */
		IsAppsForCrmAlertDismissed: DevKit.WebApi.BooleanValue;
		/** Indicates whether to use the Auto Capture feature enabled or not. */
		IsAutoDataCaptureEnabled: DevKit.WebApi.BooleanValue;
		/** Enable or disable country code selection . */
		IsDefaultCountryCodeCheckEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates if duplicate detection is enabled when going online. */
		IsDuplicateDetectionEnabledWhenGoingOnline: DevKit.WebApi.BooleanValue;
		/** Enable or disable email conversation view on timeline wall selection. */
		IsEmailConversationViewEnabled: DevKit.WebApi.BooleanValue;
		/** Enable or disable guided help. */
		IsGuidedHelpEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates if the synchronization of user resource booking with Exchange is enabled at user level. */
		IsResourceBookingExchangeSyncEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates if send as other user privilege is enabled or not. */
		IsSendAsAllowed: DevKit.WebApi.BooleanValue;
		/** Shows the last time when the traces were read from the database. */
		LastAlertsViewedTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the user locale. */
		LocaleId: DevKit.WebApi.IntegerValue;
		/** Information that specifies how Long Date is displayed throughout Microsoft 365. */
		LongDateFormatCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who last modified the user settings. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the user settings object was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the usersettings. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Information that specifies how negative currency numbers are displayed in Microsoft Dynamics 365. */
		NegativeCurrencyFormatCode: DevKit.WebApi.IntegerValue;
		/** Information that specifies how negative numbers are displayed in Microsoft Dynamics 365. */
		NegativeFormatCode: DevKit.WebApi.IntegerValue;
		/** Next tracking number. */
		NextTrackingNumber: DevKit.WebApi.IntegerValue;
		/** Information that specifies how numbers are grouped in Microsoft Dynamics 365. */
		NumberGroupFormat: DevKit.WebApi.StringValue;
		/** Symbol used for number separation in Microsoft Dynamics 365. */
		NumberSeparator: DevKit.WebApi.StringValue;
		/** Normal polling frequency used for background offline synchronization in Microsoft Office Outlook. */
		OfflineSyncInterval: DevKit.WebApi.IntegerValue;
		/** Normal polling frequency used for record synchronization in Microsoft Office Outlook. */
		OutlookSyncInterval: DevKit.WebApi.IntegerValue;
		/** Information that specifies how many items to list on a page in list views. */
		PagingLimit: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		PersonalizationSettings: DevKit.WebApi.StringValue;
		/** PM designator to use in Microsoft Dynamics 365. */
		PMDesignator: DevKit.WebApi.StringValue;
		/** Number of decimal places that can be used for prices. */
		PricingDecimalPrecision: DevKit.WebApi.IntegerValue;
		/** Picklist for selecting the user preference for reporting scripting errors. */
		ReportScriptErrors: DevKit.WebApi.OptionSetValue;
		/** The version number for resource booking synchronization with Exchange. */
		ResourceBookingExchangeSyncVersion: DevKit.WebApi.BigIntValue;
		/** Store selected customer service hub dashboard saved filter id. */
		SelectedGlobalFilterId: DevKit.WebApi.GuidValue;
		/** Information that specifies whether to display the week number in calendar displays in Microsoft Dynamics 365. */
		ShowWeekNumber: DevKit.WebApi.BooleanValue;
		/** For Internal use only */
		SplitViewState: DevKit.WebApi.BooleanValue;
		/** Indicates if the company field in Microsoft Office Outlook items are set during Outlook synchronization. */
		SyncContactCompany: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the user. */
		SystemUserId: DevKit.WebApi.GuidValue;
		/** Information that specifies how the time is displayed in Microsoft Dynamics 365. */
		TimeFormatCode: DevKit.WebApi.IntegerValue;
		/** Text for how time is displayed in Microsoft Dynamics 365. */
		TimeFormatString: DevKit.WebApi.StringValue;
		/** Text for how time is displayed in Microsoft Dynamics 365. */
		TimeSeparator: DevKit.WebApi.StringValue;
		/** Local time zone adjustment for the user. System calculated based on the time zone selected. */
		TimeZoneBias: DevKit.WebApi.IntegerValue;
		/** Local time zone for the user. */
		TimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Local time zone daylight adjustment for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightBias: DevKit.WebApi.IntegerValue;
		/** Local time zone daylight day for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightDay: DevKit.WebApi.IntegerValue;
		/** Local time zone daylight day of week for the user. System calculated based on the time zone selected in Options. */
		TimeZoneDaylightDayOfWeek: DevKit.WebApi.IntegerValue;
		/** Local time zone daylight hour for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightHour: DevKit.WebApi.IntegerValue;
		/** Local time zone daylight minute for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightMinute: DevKit.WebApi.IntegerValue;
		/** Local time zone daylight month for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightMonth: DevKit.WebApi.IntegerValue;
		/** Local time zone daylight second for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightSecond: DevKit.WebApi.IntegerValue;
		/** Local time zone daylight year for the user. System calculated based on the time zone selected. */
		TimeZoneDaylightYear: DevKit.WebApi.IntegerValue;
		/** Local time zone standard time bias for the user. System calculated based on the time zone selected. */
		TimeZoneStandardBias: DevKit.WebApi.IntegerValue;
		/** Local time zone standard day for the user. System calculated based on the time zone selected. */
		TimeZoneStandardDay: DevKit.WebApi.IntegerValue;
		/** Local time zone standard day of week for the user. System calculated based on the time zone selected. */
		TimeZoneStandardDayOfWeek: DevKit.WebApi.IntegerValue;
		/** Local time zone standard hour for the user. System calculated based on the time zone selected. */
		TimeZoneStandardHour: DevKit.WebApi.IntegerValue;
		/** Local time zone standard minute for the user. System calculated based on the time zone selected. */
		TimeZoneStandardMinute: DevKit.WebApi.IntegerValue;
		/** Local time zone standard month for the user. System calculated based on the time zone selected. */
		TimeZoneStandardMonth: DevKit.WebApi.IntegerValue;
		/** Local time zone standard second for the user. System calculated based on the time zone selected. */
		TimeZoneStandardSecond: DevKit.WebApi.IntegerValue;
		/** Local time zone standard year for the user. System calculated based on the time zone selected. */
		TimeZoneStandardYear: DevKit.WebApi.IntegerValue;
		/** Tracking token ID. */
		TrackingTokenId: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the default currency of the user. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the language in which to view the user interface (UI). */
		UILanguageId: DevKit.WebApi.IntegerValue;
		/** Indicates whether to use the Microsoft Dynamics 365 appointment form within Microsoft Office Outlook for creating new appointments. */
		UseCrmFormForAppointment: DevKit.WebApi.BooleanValue;
		/** Indicates whether to use the Microsoft Dynamics 365 contact form within Microsoft Office Outlook for creating new contacts. */
		UseCrmFormForContact: DevKit.WebApi.BooleanValue;
		/** Indicates whether to use the Microsoft Dynamics 365 email form within Microsoft Office Outlook for creating new emails. */
		UseCrmFormForEmail: DevKit.WebApi.BooleanValue;
		/** Indicates whether to use the Microsoft Dynamics 365 task form within Microsoft Office Outlook for creating new tasks. */
		UseCrmFormForTask: DevKit.WebApi.BooleanValue;
		/** Indicates whether image strips are used to render images. */
		UseImageStrips: DevKit.WebApi.BooleanValue;
		/** Specifies user profile ids in comma separated list. */
		UserProfile: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** The layout of the visualization pane. */
		VisualizationPaneLayout: DevKit.WebApi.OptionSetValue;
		/** Workday start time for the user. */
		WorkdayStartTime: DevKit.WebApi.StringValue;
		/** Workday stop time for the user. */
		WorkdayStopTime: DevKit.WebApi.StringValue;
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00'}