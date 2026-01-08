/**
 * UserSettings.webapi.ts - UserSettings WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * UserSettings WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IUserSettingsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IUserSettingsApi, 'FormattedValue'>]: string };
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
	BusinessUnitId: DevKit.Guid | null;
	/** Calendar type for the system. Set to Gregorian US by default. */
	CalendarType: number | null;
	/** Unique identifier of the user who created the user settings. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the user settings object was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the usersettings. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Number of decimal places that can be used for currency. */
	CurrencyDecimalPrecision: number | null;
	/** Information about how currency symbols are placed in Microsoft Dynamics 365. */
	CurrencyFormatCode: number | null;
	/** Symbol used for currency in Microsoft Dynamics 365. */
	CurrencySymbol: string | null;
	/** Determines the status of auto install of Dynamics 365 to Teams attempt has been completed */
	D365AutoInstallAttemptStatus: number | null;
	/** Information that specifies the level of data validation in excel worksheets exported in a format suitable for import. */
	DataValidationModeForExportToExcel: number | null;
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
	DefaultDashboardId: DevKit.Guid | null;
	/** Default search experience for the user. */
	DefaultSearchExperience: number | null;
	/** This attribute is no longer used. The data is now in the Mailbox.Password attribute. */
	readonly EmailPassword: string | null;
	/** This attribute is no longer used. The data is now in the Mailbox.UserName attribute. */
	readonly EmailUsername: string | null;
	/** Indicates the form mode to be used. */
	EntityFormMode: number | null;
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
	IncomingEmailFilteringMethod: number | null;
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
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the user settings object was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the usersettings. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
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
	PreferredSolution: DevKit.Guid | null;
	/** Number of decimal places that can be used for prices. */
	PricingDecimalPrecision: number | null;
	/** Model app channel override */
	ReleaseChannel: number | null;
	/** Picklist for selecting the user preference for reporting scripting errors. */
	ReportScriptErrors: number | null;
	/** The version number for resource booking synchronization with Exchange. */
	ResourceBookingExchangeSyncVersion: number | null;
	/** Store selected customer service hub dashboard saved filter id. */
	SelectedGlobalFilterId: DevKit.Guid | null;
	/** Information that specifies whether to display the week number in calendar displays in Microsoft Dynamics 365. */
	ShowWeekNumber: boolean | null;
	/** For Internal use only */
	SplitViewState: boolean | null;
	/** Indicates if the company field in Microsoft Office Outlook items are set during Outlook synchronization. */
	SyncContactCompany: boolean | null;
	/** Unique identifier of the user. */
	SystemUserId: DevKit.Guid | null;
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
	TransactionCurrencyId: DevKit.Guid | null;
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
	VisualizationPaneLayout: number | null;
	/** Workday start time for the user. */
	WorkdayStartTime: string | null;
	/** Workday stop time for the user. */
	WorkdayStopTime: string | null;
}

const UserSettingsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AddressBookSyncInterval: { logicalName: 'addressbooksyncinterval', type: 'Integer' },
	AdvancedFindStartupMode: { logicalName: 'advancedfindstartupmode', type: 'Integer' },
	AllowEmailCredentials: { logicalName: 'allowemailcredentials', readOnly: true, type: 'Boolean' },
	AMDesignator: { logicalName: 'amdesignator' },
	AutoCaptureUserStatus: { logicalName: 'autocaptureuserstatus', type: 'Integer' },
	AutoCreateContactOnPromote: { logicalName: 'autocreatecontactonpromote', type: 'Integer' },
	BusinessUnitId: { logicalName: 'businessunitid' },
	CalendarType: { logicalName: 'calendartype', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CurrencyDecimalPrecision: { logicalName: 'currencydecimalprecision', type: 'Integer' },
	CurrencyFormatCode: { logicalName: 'currencyformatcode', type: 'Integer' },
	CurrencySymbol: { logicalName: 'currencysymbol' },
	D365AutoInstallAttemptStatus: { logicalName: 'd365autoinstallattemptstatus', type: 'Integer' },
	DataValidationModeForExportToExcel: { logicalName: 'datavalidationmodeforexporttoexcel', type: 'Integer' },
	DateFormatCode: { logicalName: 'dateformatcode', type: 'Integer' },
	DateFormatString: { logicalName: 'dateformatstring' },
	DateSeparator: { logicalName: 'dateseparator' },
	DecimalSymbol: { logicalName: 'decimalsymbol' },
	DefaultCalendarView: { logicalName: 'defaultcalendarview', type: 'Integer' },
	DefaultCountryCode: { logicalName: 'defaultcountrycode' },
	DefaultDashboardId: { logicalName: 'defaultdashboardid' },
	DefaultSearchExperience: { logicalName: 'defaultsearchexperience', type: 'Integer' },
	EmailPassword: { logicalName: 'emailpassword', readOnly: true },
	EmailUsername: { logicalName: 'emailusername', readOnly: true },
	EntityFormMode: { logicalName: 'entityformmode', type: 'Integer' },
	FullNameConventionCode: { logicalName: 'fullnameconventioncode', type: 'Integer' },
	GetStartedPaneContentEnabled: { logicalName: 'getstartedpanecontentenabled', type: 'Boolean' },
	HelpLanguageId: { logicalName: 'helplanguageid', type: 'Integer' },
	HomepageArea: { logicalName: 'homepagearea' },
	HomepageLayout: { logicalName: 'homepagelayout' },
	HomepageSubarea: { logicalName: 'homepagesubarea' },
	IgnoreUnsolicitedEmail: { logicalName: 'ignoreunsolicitedemail', type: 'Boolean' },
	IncomingEmailFilteringMethod: { logicalName: 'incomingemailfilteringmethod', type: 'Integer' },
	IsAppsForCrmAlertDismissed: { logicalName: 'isappsforcrmalertdismissed', type: 'Boolean' },
	IsAutoDataCaptureEnabled: { logicalName: 'isautodatacaptureenabled', type: 'Boolean' },
	IsDefaultCountryCodeCheckEnabled: { logicalName: 'isdefaultcountrycodecheckenabled', type: 'Boolean' },
	IsDuplicateDetectionEnabledWhenGoingOnline: { logicalName: 'isduplicatedetectionenabledwhengoingonline', type: 'Boolean' },
	IsEmailConversationViewEnabled: { logicalName: 'isemailconversationviewenabled', type: 'Boolean' },
	IsGuidedHelpEnabled: { logicalName: 'isguidedhelpenabled', type: 'Boolean' },
	IsResourceBookingExchangeSyncEnabled: { logicalName: 'isresourcebookingexchangesyncenabled', type: 'Boolean' },
	IsSendAsAllowed: { logicalName: 'issendasallowed', type: 'Boolean' },
	LastAlertsViewedTime_UtcDateAndTime: { logicalName: 'lastalertsviewedtime', type: 'DateTime' },
	LastModifiedTimeForViewPersonalizationSettings_UtcDateAndTime: { logicalName: 'lastmodifiedtimeforviewpersonalizationsettings', type: 'DateTime' },
	LocaleId: { logicalName: 'localeid', type: 'Integer' },
	LongDateFormatCode: { logicalName: 'longdateformatcode', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	NegativeCurrencyFormatCode: { logicalName: 'negativecurrencyformatcode', type: 'Integer' },
	NegativeFormatCode: { logicalName: 'negativeformatcode', type: 'Integer' },
	NextTrackingNumber: { logicalName: 'nexttrackingnumber', type: 'Integer' },
	NumberGroupFormat: { logicalName: 'numbergroupformat' },
	NumberSeparator: { logicalName: 'numberseparator' },
	OfflineSyncInterval: { logicalName: 'offlinesyncinterval', type: 'Integer' },
	OutlookSyncInterval: { logicalName: 'outlooksyncinterval', type: 'Integer' },
	PagingLimit: { logicalName: 'paginglimit', type: 'Integer' },
	PersonalizationSettings: { logicalName: 'personalizationsettings' },
	PMDesignator: { logicalName: 'pmdesignator' },
	PreferredSolution: { schemaName: 'PreferredSolution', logicalName: '_preferredsolution_value', entityCollectionName: 'solutions', entityLogicalName: 'solution' },
	PricingDecimalPrecision: { logicalName: 'pricingdecimalprecision', type: 'Integer' },
	ReleaseChannel: { logicalName: 'releasechannel', type: 'Integer' },
	ReportScriptErrors: { logicalName: 'reportscripterrors', type: 'Integer' },
	ResourceBookingExchangeSyncVersion: { logicalName: 'resourcebookingexchangesyncversion', type: 'Integer' },
	SelectedGlobalFilterId: { logicalName: 'selectedglobalfilterid' },
	ShowWeekNumber: { logicalName: 'showweeknumber', type: 'Boolean' },
	SplitViewState: { logicalName: 'splitviewstate', type: 'Boolean' },
	SyncContactCompany: { logicalName: 'synccontactcompany', type: 'Boolean' },
	SystemUserId: { logicalName: 'systemuserid' },
	TableScopedDVSearchFeatureTeachingBubbleViews: { logicalName: 'tablescopeddvsearchfeatureteachingbubbleviews', type: 'Integer' },
	TableScopedDVSearchQuickFindTeachingBubbleViews: { logicalName: 'tablescopeddvsearchquickfindteachingbubbleviews', type: 'Integer' },
	TimeFormatCode: { logicalName: 'timeformatcode', type: 'Integer' },
	TimeFormatString: { logicalName: 'timeformatstring' },
	TimeSeparator: { logicalName: 'timeseparator' },
	TimeZoneBias: { logicalName: 'timezonebias', type: 'Integer' },
	TimeZoneCode: { logicalName: 'timezonecode', type: 'Integer' },
	TimeZoneDaylightBias: { logicalName: 'timezonedaylightbias', type: 'Integer' },
	TimeZoneDaylightDay: { logicalName: 'timezonedaylightday', type: 'Integer' },
	TimeZoneDaylightDayOfWeek: { logicalName: 'timezonedaylightdayofweek', type: 'Integer' },
	TimeZoneDaylightHour: { logicalName: 'timezonedaylighthour', type: 'Integer' },
	TimeZoneDaylightMinute: { logicalName: 'timezonedaylightminute', type: 'Integer' },
	TimeZoneDaylightMonth: { logicalName: 'timezonedaylightmonth', type: 'Integer' },
	TimeZoneDaylightSecond: { logicalName: 'timezonedaylightsecond', type: 'Integer' },
	TimeZoneDaylightYear: { logicalName: 'timezonedaylightyear', type: 'Integer' },
	TimeZoneStandardBias: { logicalName: 'timezonestandardbias', type: 'Integer' },
	TimeZoneStandardDay: { logicalName: 'timezonestandardday', type: 'Integer' },
	TimeZoneStandardDayOfWeek: { logicalName: 'timezonestandarddayofweek', type: 'Integer' },
	TimeZoneStandardHour: { logicalName: 'timezonestandardhour', type: 'Integer' },
	TimeZoneStandardMinute: { logicalName: 'timezonestandardminute', type: 'Integer' },
	TimeZoneStandardMonth: { logicalName: 'timezonestandardmonth', type: 'Integer' },
	TimeZoneStandardSecond: { logicalName: 'timezonestandardsecond', type: 'Integer' },
	TimeZoneStandardYear: { logicalName: 'timezonestandardyear', type: 'Integer' },
	TrackingTokenId: { logicalName: 'trackingtokenid', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	TryToggleSets: { logicalName: 'trytogglesets' },
	TryToggleStatus: { logicalName: 'trytogglestatus', type: 'Boolean' },
	UILanguageId: { logicalName: 'uilanguageid', type: 'Integer' },
	UseCrmFormForAppointment: { logicalName: 'usecrmformforappointment', type: 'Boolean' },
	UseCrmFormForContact: { logicalName: 'usecrmformforcontact', type: 'Boolean' },
	UseCrmFormForEmail: { logicalName: 'usecrmformforemail', type: 'Boolean' },
	UseCrmFormForTask: { logicalName: 'usecrmformfortask', type: 'Boolean' },
	UseImageStrips: { logicalName: 'useimagestrips', type: 'Boolean' },
	UserProfile: { logicalName: 'userprofile' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	VisualizationPaneLayout: { logicalName: 'visualizationpanelayout', type: 'Integer' },
	WorkdayStartTime: { logicalName: 'workdaystarttime' },
	WorkdayStopTime: { logicalName: 'workdaystoptime' },
};

/**
 * UserSettings WebApi class for early-bound style coding
 * Usage: const userSettings = new UserSettingsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class UserSettingsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IUserSettingsApi>(entity, 'usersettings', 'usersettingses', UserSettingsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface UserSettingsApi extends IUserSettingsApi { }
