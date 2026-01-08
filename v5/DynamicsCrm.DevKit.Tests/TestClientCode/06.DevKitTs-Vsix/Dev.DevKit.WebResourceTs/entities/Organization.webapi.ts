/**
 * Organization.webapi.ts - Organization WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Organization WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IOrganizationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IOrganizationApi, 'FormattedValue'>]: string };
	/** ACI Web Endpoint URL. */
	ACIWebEndpointUrl: string | null;
	/** Unique identifier of the template to be used for acknowledgement when a user unsubscribes. */
	AcknowledgementTemplateId: DevKit.Guid | null;
	/** Information on whether filtering activity based on entity in app. */
	ActivityTypeFilter: boolean | null;
	/** Whether to show only activities configured in this app or all activities in the 'New activity' button. */
	ActivityTypeFilterV2: boolean | null;
	/** Flag to indicate if the display column options on a view in model-driven apps is enabled */
	AdvancedColumnEditorEnabled: boolean | null;
	/** Flag to indicate if the advanced column filtering in a view in model-driven apps is enabled */
	AdvancedColumnFilteringEnabled: boolean | null;
	/** Flag to indicate if the advanced filtering on all tables in a model-driven app is enabled */
	AdvancedFilteringEnabled: boolean | null;
	/** Flag to indicate if the Advanced Lookup feature is enabled for lookup controls */
	AdvancedLookupEnabled: boolean | null;
	/** Enables advanced lookup in grid edit filter panel */
	AdvancedLookupInEditFilter: number | null;
	/** Indicates whether Azure AI Foundry model types for AI Prompts are enabled. */
	AiPromptsAzureAIFoundryModelTypesEnabled: boolean | null;
	/** Indicates whether Basic model types for AI Prompts are enabled. */
	AiPromptsBasicModelTypesEnabled: boolean | null;
	/** Indicates whether AI Prompts feature is enabled. */
	AiPromptsEnabled: boolean | null;
	/** Indicates whether Premium model types for AI Prompts are enabled. */
	AiPromptsPremiumModelTypesEnabled: boolean | null;
	/** Indicates whether Standard model types for AI Prompts are enabled. */
	AiPromptsStandardModelTypesEnabled: boolean | null;
	/** Indicates whether background address book synchronization in Microsoft Office Outlook is allowed. */
	AllowAddressBookSyncs: boolean | null;
	/** Information that specifies whether all application users are allowed to access the environment */
	AllowApplicationUserAccess: boolean | null;
	/** Indicates whether automatic response creation is allowed. */
	AllowAutoResponseCreation: boolean | null;
	/** Indicates whether automatic unsubscribe is allowed. */
	AllowAutoUnsubscribe: boolean | null;
	/** Indicates whether automatic unsubscribe acknowledgement email is allowed to send. */
	AllowAutoUnsubscribeAcknowledgement: boolean | null;
	/** Indicates whether Outlook Client message bar advertisement is allowed. */
	AllowClientMessageBarAd: boolean | null;
	/** Information on whether connectors on power fx actions is enabled. */
	AllowConnectorsOnPowerFXActions: boolean | null;
	/** Information that specifies the Applications that are in allow list for the accessing DV resources. */
	AllowedApplicationsForDVAccess: string | null;
	/** Information that specifies the range of IP addresses that are in allow list for the firewall. */
	AllowedIpRangeForFirewall: string | null;
	/** Information that specifies the range of IP addresses that are in allowed list for generating the SAS URIs. */
	AllowedIpRangeForStorageAccessSignatures: string | null;
	/** Specifies list of allowed IP addresses for firewall. */
	AllowedListOfIpRangesForFirewall: string | null;
	/** Allow upload or download of certain mime types. */
	AllowedMimeTypes: string | null;
	/** Information that specifies the List of Service Tags that should be allowed by the firewall. */
	AllowedServiceTagsForFirewall: string | null;
	/** Indicates whether auditing of changes to entity is allowed when no attributes have changed. */
	AllowEntityOnlyAudit: boolean | null;
	/** Enables ends-with searches in grids with the use of a leading wildcard on all tables in the environment */
	AllowLeadingWildcardsInGridSearch: boolean | null;
	/** Enables ends-with searches in grids with the use of a leading wildcard on all tables in the environment */
	AllowLeadingWildcardsInQuickFind: number | null;
	/** Enable access to legacy web client UI */
	AllowLegacyClientExperience: boolean | null;
	/** Enable embedding of certain legacy dialogs in Unified Interface browser client */
	AllowLegacyDialogsEmbedding: boolean | null;
	/** Indicates whether marketing emails execution is allowed. */
	AllowMarketingEmailExecution: boolean | null;
	/** Information that specifies whether Microsoft Trusted Service Tags are allowed */
	AllowMicrosoftTrustedServiceTags: boolean | null;
	/** Indicates whether background offline synchronization in Microsoft Office Outlook is allowed. */
	AllowOfflineScheduledSyncs: boolean | null;
	/** Indicates whether scheduled synchronizations to Outlook are allowed. */
	AllowOutlookScheduledSyncs: boolean | null;
	/** Control whether the organization Allow Redirect Legacy Admin Settings To Modern UI */
	AllowRedirectAdminSettingsToModernUI: boolean | null;
	/** Indicates whether users are allowed to send email to unresolved parties (parties must still have an email address). */
	AllowUnresolvedPartiesOnEmailSend: boolean | null;
	/** Indicates whether individuals can select their form mode preference in their personal options. */
	AllowUserFormModePreference: boolean | null;
	/** Flag to indicate if allow end users to hide system views in model-driven apps is enabled */
	AllowUsersHidingSystemViews: boolean | null;
	/** Indicates whether the showing tablet application notification bars in a browser is allowed. */
	AllowUsersSeeAppdownloadMessage: boolean | null;
	/** Warning : Allowing  Virtual Entity plugin execution on nested pipeline does not offer transactional support. i.e. if call in native entity pipeline fails, then virtual entity operation will not be reverted. */
	AllowVirtualEntityPluginExecutionOnNestedPipeline: boolean | null;
	/** Indicates whether Web-based export of grids to Microsoft Office Excel is allowed. */
	AllowWebExcelExport: boolean | null;
	/** AM designator to use throughout Microsoft Dynamics CRM. */
	AMDesignator: string | null;
	/** Indicates whether the appDesignerExperience is enabled for the organization. */
	AppDesignerExperienceEnabled: boolean | null;
	/** Application Based Access Control Mode. 0 is Disabled, 1 is audit mode , 2 is enforcement mode */
	ApplicationBasedAccessControlMode: number | null;
	/** Information on whether rich editing experience for Appointment is enabled. */
	AppointmentRichEditorExperience: boolean | null;
	/** Information on whether Teams meeting experience for Appointment is enabled. */
	AppointmentWithTeamsMeeting: boolean | null;
	/** Whether Teams meetings experience for appointments is enabled. */
	AppointmentWithTeamsMeetingV2: boolean | null;
	/** Indicates whether Power Automate Automation Center preview features will be available for all users in this organization. */
	AreAutomationCenterPreviewFeaturesEnabled: boolean | null;
	/** Indicates whether Process Insights Preview features are enabled in this organization. */
	AreProcessInsightsPreviewFeaturesEnabled: boolean | null;
	/** Audit Retention Period settings stored in Organization Database. */
	AuditRetentionPeriod: number | null;
	/** Audit Retention Period settings stored in Organization Database. */
	AuditRetentionPeriodV2: number | null;
	/** Audit Settings of the organization */
	AuditSettings: string | null;
	/** Select whether to auto apply the default customer entitlement on case creation. */
	AutoApplyDefaultonCaseCreate: boolean | null;
	/** Select whether to auto apply the default customer entitlement on case update. */
	AutoApplyDefaultonCaseUpdate: boolean | null;
	/** Indicates whether to Auto-apply SLA on case record update after SLA was manually applied. */
	AutoApplySLA: boolean | null;
	/** For internal use only. */
	AzureSchedulerJobCollectionName: string | null;
	/** Unique identifier of the base currency of the organization. */
	BaseCurrencyId: DevKit.Guid | null;
	/** Number of decimal places that can be used for the base currency. */
	readonly BaseCurrencyPrecision: number | null;
	/** Symbol used for the base currency. */
	readonly BaseCurrencySymbol: string | null;
	/** Base ISO Currency Code */
	readonly BaseISOCurrencyCode: string | null;
	/** Api Key to be used in requests to Bing Maps services. */
	BingMapsApiKey: string | null;
	/** Enable this feature to prevent makers from accessing and downloading session transcripts */
	BlockAccessToSessionTranscriptsForCopilotStudio: boolean | null;
	/** Prevent makers from allowing end-users to use their credentials during authentication to use connectors, actions, flows, and triggers that are connected to an agent */
	BlockCopilotAuthorAuthentication: boolean | null;
	/** Information that specifies the Applications that are in block list for the accessing DV resources. */
	BlockedApplicationsForDVAccess: string | null;
	/** Prevent upload or download of certain attachment types that are considered dangerous. */
	BlockedAttachments: string | null;
	/** Prevent upload or download of certain mime types that are considered dangerous. */
	BlockedMimeTypes: string | null;
	/** Enable this feature to block access to session transcripts and conversational transcripts from being written to Dataverse for an individual environment */
	BlockTranscriptRecordingForCopilotStudio: boolean | null;
	/** Enable this feature to block URLs and images in Copilot Studio and agent responses for an individual environment. URLs will be replaced with placeholders. */
	BlockUrlsInResponsesForCopilotStudio: boolean | null;
	/** Display cards in expanded state for interactive dashboard */
	BoundDashboardDefaultCardExpanded: boolean | null;
	/** Prefix used for bulk operation numbering. */
	BulkOperationPrefix: string | null;
	/** BusinessCardOptions */
	BusinessCardOptions: string | null;
	/** Unique identifier of the business closure calendar of organization. */
	BusinessClosureCalendarId: DevKit.Guid | null;
	/** Calendar type for the system. Set to Gregorian US by default. */
	CalendarType: number | null;
	/** Prefix used for campaign numbering. */
	CampaignPrefix: string | null;
	/** Indicates whether the organization can opt out of the new Relevance search experience (released in Oct 2020) */
	CanOptOutNewSearchExperience: boolean | null;
	/** Flag to cascade Update on incident. */
	CascadeStatusUpdate: boolean | null;
	/** Prefix to use for all cases throughout Microsoft Dynamics 365. */
	CasePrefix: string | null;
	/** Type the prefix to use for all categories in Microsoft Dynamics 365. */
	CategoryPrefix: string | null;
	/** Client Features to be enabled as an XML BLOB. */
	ClientFeatureSet: string | null;
	/** Policy configuration for CSP */
	ContentSecurityPolicyConfiguration: string | null;
	/** Content Security Policy configuration for Canvas apps. */
	ContentSecurityPolicyConfigurationForCanvas: string | null;
	/** Content Security Policy Options. */
	ContentSecurityPolicyOptions: number | null;
	/** Content Security Policy Report Uri. */
	ContentSecurityPolicyReportUri: string | null;
	/** Prefix to use for all contracts throughout Microsoft Dynamics 365. */
	ContractPrefix: string | null;
	/** Refresh rate for copresence data in seconds. */
	CopresenceRefreshRate: number | null;
	/** Indicates whether the feature CortanaProactiveExperience Flow processes should be enabled for the organization. */
	CortanaProactiveExperienceEnabled: boolean | null;
	/** Unique identifier of the user who created the organization. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the organization was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the organization. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Enable Initial state of newly created products to be Active instead of Draft */
	CreateProductsWithoutParentInActiveState: boolean | null;
	/** Default time to live in minutes for new records in the Flow Logs entity for CUA logs. */
	CuaFlowLogsTtlInMinutes: number | null;
	/** Set the level of detail the computer use logs allow. */
	CuaFlowLogsVerbosity: number | null;
	/** Number of decimal places that can be used for currency. */
	CurrencyDecimalPrecision: number | null;
	/** Indicates whether to display money fields with currency code or currency symbol. */
	CurrencyDisplayOption: number | null;
	/** Information about how currency symbols are placed throughout Microsoft Dynamics CRM. */
	CurrencyFormatCode: number | null;
	/** Symbol used for currency throughout Microsoft Dynamics 365. */
	CurrencySymbol: string | null;
	/** Current bulk operation number. Deprecated. Use SetAutoNumberSeed message. */
	CurrentBulkOperationNumber: number | null;
	/** Current campaign number. Deprecated. Use SetAutoNumberSeed message. */
	CurrentCampaignNumber: number | null;
	/** First case number to use. Deprecated. Use SetAutoNumberSeed message. */
	CurrentCaseNumber: number | null;
	/** Enter the first number to use for Categories. Deprecated. Use SetAutoNumberSeed message. */
	CurrentCategoryNumber: number | null;
	/** First contract number to use. Deprecated. Use SetAutoNumberSeed message. */
	CurrentContractNumber: number | null;
	/** Import sequence to use. */
	readonly CurrentImportSequenceNumber: number | null;
	/** First invoice number to use. Deprecated. Use SetAutoNumberSeed message. */
	CurrentInvoiceNumber: number | null;
	/** Enter the first number to use for knowledge articles. Deprecated. Use SetAutoNumberSeed message. */
	CurrentKaNumber: number | null;
	/** First article number to use. Deprecated. Use SetAutoNumberSeed message. */
	CurrentKbNumber: number | null;
	/** First order number to use. Deprecated. Use SetAutoNumberSeed message. */
	CurrentOrderNumber: number | null;
	/** First parsed table number to use. */
	readonly CurrentParsedTableNumber: number | null;
	/** First quote number to use. Deprecated. Use SetAutoNumberSeed message. */
	CurrentQuoteNumber: number | null;
	/** Information about how the date is displayed throughout Microsoft CRM. */
	DateFormatCode: number | null;
	/** String showing how the date is displayed throughout Microsoft CRM. */
	DateFormatString: string | null;
	/** Character used to separate the month, the day, and the year in dates throughout Microsoft Dynamics 365. */
	DateSeparator: string | null;
	/** Number of days before we migrate email description to blob. */
	DaysBeforeEmailDescriptionIsMigrated: number | null;
	/** Days of inactivity before sync is disabled for a Teams Chat. */
	DaysBeforeInactiveTeamsChatSyncDisabled: number | null;
	/** The maximum value for the Mobile Offline setting Days since record last modified */
	readonly DaysSinceRecordLastModifiedMaxValue: number | null;
	/** Symbol used for decimal in Microsoft Dynamics 365. */
	DecimalSymbol: string | null;
	/** Text area to enter default country code. */
	DefaultCountryCode: string | null;
	/** Name of the default crm custom. */
	DefaultCrmCustomName: string | null;
	/** Unique identifier of the default email server profile. */
	DefaultEmailServerProfileId: DevKit.Guid | null;
	/** XML string containing the default email settings that are applied when a user or queue is created. */
	DefaultEmailSettings: string | null;
	/** Unique identifier of the default mobile offline profile. */
	DefaultMobileOfflineProfileId: DevKit.Guid | null;
	/** Type of default recurrence end range date. */
	DefaultRecurrenceEndRangeType: number | null;
	/** Default theme data for the organization. */
	DefaultThemeData: string | null;
	/** Unique identifier of the delegated admin user for the organization. */
	DelegatedAdminUserId: DevKit.Guid | null;
	/** Default time to live in minutes for new desktop flow queue log records. */
	DesktopFlowQueueLogsTtlInMinutes: number | null;
	/** Toggle the activation of the Power Automate Desktop Flow run action logs. */
	DesktopFlowRunActionLogsStatus: number | null;
	/** What verbosity level the Power Automate Desktop Flow Run Action Logs allow. */
	DesktopFlowRunActionLogVerbosity: number | null;
	/** Where the Power Automate Desktop Flow Run Action logs are stored. */
	DesktopFlowRunActionLogVersion: number | null;
	/** Reason for disabling the organization. */
	readonly DisabledReason: string | null;
	/** Indicates whether Social Care is disabled. */
	DisableSocialCare: boolean | null;
	/** Disable sharing system labels for the organization. */
	DisableSystemLabelsCacheSharing: boolean | null;
	/** Discount calculation method for the QOOI product. */
	DiscountCalculationMethod: number | null;
	/** Indicates whether or not navigation tour is displayed. */
	DisplayNavigationTour: boolean | null;
	/** Select if you want to use the Email Router or server-side synchronization for email processing. */
	EmailConnectionChannel: number | null;
	/** Flag to turn email correlation on or off. */
	EmailCorrelationEnabled: boolean | null;
	/** Normal polling frequency used for sending email in Microsoft Office Outlook. */
	EmailSendPollingPeriod: number | null;
	/** Determines whether records merged through the merge dialog in UCI are merged asynchronously */
	EnableAsyncMergeAPIForUCI: boolean | null;
	/** Enable Integration with Bing Maps */
	EnableBingMapsIntegration: boolean | null;
	/** Note: By enabling this feature, you will also enable the automatic creation of enviornment variables when adding data sources for your apps. */
	EnableCanvasAppsInSolutionsByDefault: boolean | null;
	/** Enable this feature to allow cross-geo boundary sharing of aggregated analytics data if your preferred data location for Viva Insights is different than the location of your environment */
	EnableCopilotStudioCrossGeoShareDataWithVivaInsights: boolean | null;
	/** (Deprecated) Enable this feature to allow Copilot Studio to share aggregated analytics data for custom agents with Viva Insights for an individual environment */
	EnableCopilotStudioShareDataWithVI: boolean | null;
	/** Enable this feature to allow Copilot Studio to share aggregated analytics data for custom agents with Viva Insights for an individual environment */
	EnableCopilotStudioShareDataWithVivaInsights: boolean | null;
	/** Enables the Environment Settings App */
	EnableEnvironmentSettingsApp: boolean | null;
	/** Indicates whether the creation of flows is within a solution by default for this organization. */
	EnableFlowsInSolutionByDefault: boolean | null;
	/** Organizations with this attribute set to true will be granted a grace period and excluded from the initial world wide enablement of 'creation of flows within a solution by default' functionality. Once the grace period expires, the functionality will be enabled in your organization. */
	EnableFlowsInSolutionByDefaultGracePeriod: boolean | null;
	/** Enable Integration with Immersive Skype */
	EnableImmersiveSkypeIntegration: boolean | null;
	/** Information that specifies whether IP based cookie binding is enabled */
	EnableIpBasedCookieBinding: boolean | null;
	/** Information that specifies whether IP based firewall rule is enabled */
	EnableIpBasedFirewallRule: boolean | null;
	/** Information that specifies whether IP based firewall rule is enabled in Audit Only Mode */
	EnableIpBasedFirewallRuleInAuditMode: boolean | null;
	/** Information that specifies whether IP based SAS URI generation rule is enabled */
	EnableIpBasedStorageAccessSignatureRule: boolean | null;
	/** Indicates whether the user has enabled or disabled Live Persona Card feature in UCI. */
	EnableLivePersonaCardUCI: boolean | null;
	/** Indicates whether the user has enabled or disabled LivePersonCardIntegration in Office. */
	EnableLivePersonCardIntegrationInOffice: boolean | null;
	/** Select to enable learning path auhtoring. */
	EnableLPAuthoring: boolean | null;
	/** Control whether the organization Switch Maker Portal to Classic */
	EnableMakerSwitchToClassic: boolean | null;
	/** Enable Integration with Microsoft Flow */
	EnableMicrosoftFlowIntegration: boolean | null;
	/** Enable pricing calculations on a Create call. */
	EnablePricingOnCreate: boolean | null;
	/** Enable the redirection to Modern Settings */
	EnableRedirectionToModernSettings: boolean | null;
	/** Enable or disable Sensitivity Labels in Email. */
	EnableSensitivityLabels: boolean | null;
	/** Use Smart Matching. */
	EnableSmartMatching: boolean | null;
	/** Leave empty to use default setting. Set to on/off to enable/disable CDN for UCI. */
	EnableUnifiedClientCDN: boolean | null;
	/** Enable site map and commanding update */
	EnableUnifiedInterfaceShellRefresh: boolean | null;
	/** Organization setting to enforce read only plugins. */
	EnforceReadOnlyPlugins: boolean | null;
	/** The default image for the entity. */
	EntityImage: string | null;
	/** For internal use only. */
	readonly EntityImageId: DevKit.Guid | null;
	/** Maximum number of days to keep change tracking deleted records */
	ExpireChangeTrackingInDays: number | null;
	/** Maximum number of days before deleting inactive subscriptions. */
	ExpireSubscriptionsInDays: number | null;
	/** Specify the base URL to use to look for external document suggestions. */
	ExternalBaseUrl: string | null;
	/** XML string containing the ExternalPartyEnabled entities correlation keys for association of existing External Party instance entities to newly created IsExternalPartyEnabled entities.For internal use only */
	ExternalPartyCorrelationKeys: string | null;
	/** XML string containing the ExternalPartyEnabled entities settings. */
	ExternalPartyEntitySettings: string | null;
	/** Features to be enabled as an XML BLOB. */
	FeatureSet: string | null;
	/** Start date for the fiscal period that is to be used throughout Microsoft CRM. */
	FiscalCalendarStart_UtcDateOnly: Date | null;
	/** Information that specifies how the name of the fiscal period is displayed throughout Microsoft CRM. */
	FiscalPeriodFormat: string | null;
	/** Format in which the fiscal period will be displayed. */
	FiscalPeriodFormatPeriod: number | null;
	/** Type of fiscal period used throughout Microsoft CRM. */
	FiscalPeriodType: number | null;
	/** Information that specifies whether the fiscal settings have been updated. */
	readonly FiscalSettingsUpdated: boolean | null;
	/** Information that specifies whether the fiscal year should be displayed based on the start date or the end date of the fiscal year. */
	FiscalYearDisplayCode: number | null;
	/** Information that specifies how the name of the fiscal year is displayed throughout Microsoft CRM. */
	FiscalYearFormat: string | null;
	/** Prefix for the display of the fiscal year. */
	FiscalYearFormatPrefix: number | null;
	/** Suffix for the display of the fiscal year. */
	FiscalYearFormatSuffix: number | null;
	/** Format for the year. */
	FiscalYearFormatYear: number | null;
	/** Information that specifies how the names of the fiscal year and the fiscal period should be connected when displayed together. */
	FiscalYearPeriodConnect: string | null;
	/** Default time to live in minutes for new records in the Flow Logs entity. */
	FlowLogsTtlInMinutes: number | null;
	/** Time to live (in seconds) for flow run */
	FlowRunTimeToLiveInSeconds: number | null;
	/** Order in which names are to be displayed throughout Microsoft CRM. */
	FullNameConventionCode: number | null;
	/** Specifies the maximum number of months in future for which the recurring activities can be created. */
	FutureExpansionWindow: number | null;
	/** Indicates whether alerts will be generated for errors. */
	GenerateAlertsForErrors: boolean | null;
	/** Indicates whether alerts will be generated for information. */
	GenerateAlertsForInformation: boolean | null;
	/** Indicates whether alerts will be generated for warnings. */
	GenerateAlertsForWarnings: boolean | null;
	/** Indicates whether Get Started content is enabled for this organization. */
	GetStartedPaneContentEnabled: boolean | null;
	/** Indicates whether the append URL parameters is enabled. */
	GlobalAppendUrlParametersEnabled: boolean | null;
	/** URL for the web page global help. */
	GlobalHelpUrl: string | null;
	/** Indicates whether the customizable global help is enabled. */
	GlobalHelpUrlEnabled: boolean | null;
	/** Number of days after the goal's end date after which the rollup of the goal stops automatically. */
	GoalRollupExpiryTime: number | null;
	/** Number of hours between automatic rollup jobs . */
	GoalRollupFrequency: number | null;
	/** For internal use only. */
	GrantAccessToNetworkService: boolean | null;
	/** Maximum difference allowed between subject keywords count of the email messaged to be correlated */
	HashDeltaSubjectCount: number | null;
	/** Filter Subject Keywords */
	HashFilterKeywords: string | null;
	/** Maximum number of subject keywords or recipients used for correlation */
	HashMaxCount: number | null;
	/** Minimum number of recipients required to match for email messaged to be correlated */
	HashMinAddressCount: number | null;
	/** High contrast theme data for the organization. */
	HighContrastThemeData: string | null;
	/** Indicates whether incoming email sent by internal Microsoft Dynamics 365 users or queues should be tracked. */
	IgnoreInternalEmail: boolean | null;
	/** Indicates whether an organization has consented to sharing search query data to help improve search results */
	ImproveSearchLoggingEnabled: boolean | null;
	/** Information that specifies whether Inactivity timeout is enabled */
	InactivityTimeoutEnabled: boolean | null;
	/** Inactivity timeout in minutes */
	InactivityTimeoutInMins: number | null;
	/** Inactivity timeout reminder in minutes */
	InactivityTimeoutReminderInMins: number | null;
	/** Setting for the Async Service Mailbox Queue. Defines the retrieval batch size of exchange server. */
	IncomingEmailExchangeEmailRetrievalBatchSize: number | null;
	/** Initial version of the organization. */
	InitialVersion: string | null;
	/** Unique identifier of the integration user for the organization. */
	IntegrationUserId: DevKit.Guid | null;
	/** Prefix to use for all invoice numbers throughout Microsoft Dynamics 365. */
	InvoicePrefix: string | null;
	/** IP Based SAS mode. */
	IpBasedStorageAccessSignatureMode: number | null;
	/** Indicates whether the feature Action Card should be enabled for the organization. */
	IsActionCardEnabled: boolean | null;
	/** Information that specifies whether Action Support Feature is enabled */
	IsActionSupportFeatureEnabled: boolean | null;
	/** Indicates whether the feature Relationship Analytics should be enabled for the organization. */
	IsActivityAnalysisEnabled: boolean | null;
	/** Indicates whether all money attributes are converted to decimal. */
	readonly IsAllMoneyDecimal: boolean | null;
	/** Indicates whether loading of Microsoft Dynamics 365 in a browser window that does not have address, tool, and menu bars is enabled. */
	IsAppMode: boolean | null;
	/** Enable or disable attachments sync for outlook and exchange. */
	IsAppointmentAttachmentSyncEnabled: boolean | null;
	/** Enable or disable assigned tasks sync for outlook and exchange. */
	IsAssignedTasksSyncEnabled: boolean | null;
	/** Enable or disable auditing of changes. */
	IsAuditEnabled: boolean | null;
	/** Indicates whether the feature Auto Capture should be enabled for the organization. */
	IsAutoDataCaptureEnabled: boolean | null;
	/** Indicates whether the V2 feature of Auto Capture should be enabled for the organization. */
	IsAutoDataCaptureV2Enabled: boolean | null;
	/** IsAutoInstallAppForD365InTeamsEnabled */
	IsAutoInstallAppForD365InTeamsEnabled: boolean | null;
	/** Information on whether auto save is enabled. */
	IsAutoSaveEnabled: boolean | null;
	/** IsBaseCardStaticFieldDataEnabled */
	IsBaseCardStaticFieldDataEnabled: boolean | null;
	/** Determines whether users can make use of basic Geospatial featuers in Canvas apps. */
	IsBasicGeospatialIntegrationEnabled: boolean | null;
	/** Information that specifies whether BPF Entity Customization Feature is enabled */
	IsBPFEntityCustomizationFeatureEnabled: boolean | null;
	/** Indicates whether Power Automate savings feature is enabled for Cloudflow. */
	IsCloudFlowSavingsEnabled: boolean | null;
	/** Read-only flag indicating whether clustering is enabled for the organization. */
	readonly IsClusteringEnabled: boolean | null;
	/** IsCollaborationExperienceEnabled */
	IsCollaborationExperienceEnabled: boolean | null;
	/** Indicates whether Computer Use in MCS feature is enabled in this organization. */
	IsComputerUseInMCSEnabled: boolean | null;
	/** Information that specifies whether conflict detection for mobile client is enabled. */
	IsConflictDetectionEnabledForMobileClient: boolean | null;
	/** Enable or disable mailing address sync for outlook and exchange. */
	IsContactMailingAddressSyncEnabled: boolean | null;
	/** Indicates whether Content Security Policy has been enabled for the organization. */
	IsContentSecurityPolicyEnabled: boolean | null;
	/** Indicates whether Content Security Policy has been enabled for this organization's Canvas apps. */
	IsContentSecurityPolicyEnabledForCanvas: boolean | null;
	/** Indicates whether Contextual email experience is enabled on this organization */
	IsContextualEmailEnabled: boolean | null;
	/** Select to enable Contextual Help in UCI. */
	IsContextualHelpEnabled: boolean | null;
	/** Determines whether users can provide feedback Copilot experiences. */
	IsCopilotFeedbackEnabled: boolean | null;
	/** Indicates whether CUA on Hosted Groups V2 feature is enabled in this organization. */
	IsCuaOnHmgV2Enabled: boolean | null;
	/** Indicates whether Custom Controls in canvas PowerApps feature has been enabled for the organization. */
	IsCustomControlsInCanvasAppsEnabled: boolean | null;
	/** Enable or disable country code selection. */
	IsDefaultCountryCodeCheckEnabled: boolean | null;
	/** Enable Delegation Access content */
	IsDelegateAccessEnabled: boolean | null;
	/** Indicates whether the feature Action Hub should be enabled for the organization. */
	IsDelveActionHubIntegrationEnabled: boolean | null;
	/** Indicates whether connection embedding in Desktop Flows is enabled in this organization. */
	IsDesktopFlowConnectionEmbeddingEnabled: boolean | null;
	/** Indicates whether the Desktop Flows UI Automation Runtime Repair for Attended feature for this organization. */
	IsDesktopFlowRuntimeRepairAttendedEnabled: boolean | null;
	/** Indicates whether the Desktop Flows UI Automation Runtime Repair for Unattended feature for this organization. */
	IsDesktopFlowRuntimeRepairUnattendedEnabled: boolean | null;
	/** Indicates whether Power Automate savings feature is enabled for Desktopflow. */
	IsDesktopFlowSavingsEnabled: boolean | null;
	/** Indicates whether v2 schema for Desktop Flows is enabled in this organization. */
	IsDesktopFlowSchemaV2Enabled: boolean | null;
	/** Indicates whether Windows Vanilla Image will be available for Desktop Flow users in this organization. */
	IsDesktopFlowVanillaImageSharingEnabled: boolean | null;
	/** Indicates whether version control for Desktop Flows is enabled in this organization. */
	IsDesktopFlowVersionControlEnabled: boolean | null;
	/** Indicates if this organization will opt-in to automatically to enable version control for Desktop Flows. */
	IsDesktopFlowVersionControlEnabledByDefault: boolean | null;
	/** Information that specifies whether the organization is disabled. */
	readonly IsDisabled: boolean | null;
	/** Indicates whether duplicate detection of records is enabled. */
	IsDuplicateDetectionEnabled: boolean | null;
	/** Indicates whether duplicate detection of records during import is enabled. */
	IsDuplicateDetectionEnabledForImport: boolean | null;
	/** Indicates whether duplicate detection of records during offline synchronization is enabled. */
	IsDuplicateDetectionEnabledForOfflineSync: boolean | null;
	/** Indicates whether duplicate detection during online create or update is enabled. */
	IsDuplicateDetectionEnabledForOnlineCreateUpdate: boolean | null;
	/** Information on whether Smart Email Address Validation is enabled. */
	IsEmailAddressValidationEnabled: boolean | null;
	/** Allow tracking recipient activity on sent emails. */
	IsEmailMonitoringAllowed: boolean | null;
	/** Enable Email Server Profile content filtering */
	IsEmailServerProfileContentFilteringEnabled: boolean | null;
	/** Indicates whether appmodule is enabled for all roles */
	IsEnabledForAllRoles: boolean | null;
	/** Indicates whether the organization's files are being stored in Azure. */
	IsExternalFileStorageEnabled: boolean | null;
	/** Select whether data can be synchronized with an external search index. */
	IsExternalSearchIndexEnabled: boolean | null;
	/** Indicates whether the fiscal period is displayed as the month number. */
	IsFiscalPeriodMonthBased: boolean | null;
	/** Select whether folders should be automatically created on SharePoint. */
	IsFolderAutoCreatedonSP: boolean | null;
	/** Enable or disable folder based tracking for Server Side Sync. */
	IsFolderBasedTrackingEnabled: boolean | null;
	/** Indicates whether full-text search for Quick Find entities should be enabled for the organization. */
	IsFullTextSearchEnabled: boolean | null;
	/** Indicates whether geospatial capabilities leveraging Azure Maps are enabled. */
	IsGeospatialAzureMapsIntegrationEnabled: boolean | null;
	/** Enable Hierarchical Security Model */
	IsHierarchicalSecurityModelEnabled: boolean | null;
	/** Indicates whether data collection for ideas in canvas PowerApps has been enabled. */
	IsIdeasDataCollectionEnabled: boolean | null;
	/** Give Consent to use LUIS in Dynamics 365 Bot */
	IsLUISEnabledforD365Bot: boolean | null;
	/** Enable or disable forced unlocking for Server Side Sync mailboxes. */
	IsMailboxForcedUnlockingEnabled: boolean | null;
	/** Enable or disable mailbox keep alive for Server Side Sync. */
	IsMailboxInactiveBackoffEnabled: boolean | null;
	/** Indicates whether Manual Sales Forecasting feature has been enabled for the organization. */
	IsManualSalesForecastingEnabled: boolean | null;
	/** Information that specifies whether mobile client on demand sync is enabled. */
	IsMobileClientOnDemandSyncEnabled: boolean | null;
	/** Indicates whether the feature MobileOffline should be enabled for the organization. */
	IsMobileOfflineEnabled: boolean | null;
	/** Indicates whether Model Apps can be embedded within Microsoft Teams. This is a tenant admin controlled preview/experimental feature. */
	IsModelDrivenAppsInMSTeamsEnabled: boolean | null;
	/** Indicates whether the maker can create Power Automate money based saving rules. */
	IsMoneySavingsAllowed: boolean | null;
	/** Indicates whether Microsoft Teams Collaboration feature has been enabled for the organization. */
	IsMSTeamsCollaborationEnabled: boolean | null;
	/** Indicates whether Microsoft Teams integration has been enabled for the organization. */
	IsMSTeamsEnabled: boolean | null;
	/** Indicates whether the user has enabled or disabled Microsoft Teams integration. */
	IsMSTeamsSettingChangedByUser: boolean | null;
	/** Indicates whether Microsoft Teams User Sync feature has been enabled for the organization. */
	IsMSTeamsUserSyncEnabled: boolean | null;
	/** Indicates whether new add product experience is enabled. */
	IsNewAddProductExperienceEnabled: boolean | null;
	/** Indicates whether the feature Notes Analysis should be enabled for the organization. */
	IsNotesAnalysisEnabled: boolean | null;
	/** IsNotificationForD365InTeamsEnabled */
	IsNotificationForD365InTeamsEnabled: boolean | null;
	/** Indicates whether the feature OfficeGraph should be enabled for the organization. */
	IsOfficeGraphEnabled: boolean | null;
	/** Indicates whether the feature One Drive should be enabled for the organization. */
	IsOneDriveEnabled: boolean | null;
	/** Indicates whether PAI feature has been enabled for the organization. */
	IsPAIEnabled: boolean | null;
	/** Indicates whether PDF Generation feature has been enabled for the organization. */
	IsPDFGenerationEnabled: string | null;
	/** Indicates whether the Per Process overage feature is enabled in this organization. */
	IsPerProcessCapacityOverageEnabled: boolean | null;
	/** Indicates whether playbook feature has been enabled for the organization. */
	IsPlaybookEnabled: boolean | null;
	/** Information on whether IM presence is enabled. */
	IsPresenceEnabled: boolean | null;
	/** Indicates whether the Preview feature for Action Card should be enabled for the organization. */
	IsPreviewEnabledForActionCard: boolean | null;
	/** Indicates whether the feature Auto Capture should be enabled for the organization at Preview Settings. */
	IsPreviewForAutoCaptureEnabled: boolean | null;
	/** Is Preview For Email Monitoring Allowed. */
	IsPreviewForEmailMonitoringAllowed: boolean | null;
	/** Indicates whether PriceList is mandatory for adding existing products to sales entities. */
	IsPriceListMandatory: boolean | null;
	/** Indicates whether the Process capacity auto-claim feature is enabled in this organization. */
	IsProcessCapacityAutoClaimEnabled: boolean | null;
	/** Indicates whether Process Mining is enabled in this organization. */
	IsProcessMiningEnabled: boolean | null;
	/** Select whether to use the standard Out-of-box Opportunity Close experience or opt to for a customized experience. */
	IsQuickCreateEnabledForOpportunityClose: boolean | null;
	/** Enable or disable auditing of read operations. */
	IsReadAuditEnabled: boolean | null;
	/** Indicates whether the feature Relationship Insights should be enabled for the organization. */
	IsRelationshipInsightsEnabled: boolean | null;
	/** Indicates if the synchronization of user resource booking with Exchange is enabled at organization level. */
	IsResourceBookingExchangeSyncEnabled: boolean | null;
	/** Indicates whether rich text editor for notes experience is enabled on this organization */
	IsRichTextNotesEnabled: boolean | null;
	/** Indicates whether AAD Join for RPA Autoscale is enabled in this organization.. */
	IsRpaAutoscaleAadJoinEnabled: boolean | null;
	/** Indicates whether Autoscale feature for RPA is enabled in this organization. */
	IsRpaAutoscaleEnabled: boolean | null;
	/** Indicates whether RPA Box feature is enabled in this organization in locations outside the tenant's geographical location. */
	IsRpaBoxCrossGeoEnabled: boolean | null;
	/** Indicates whether RPA Box feature is enabled in this organization. */
	IsRpaBoxEnabled: boolean | null;
	/** Indicates whether Unattended runs feature for RPA is enabled in this organization. */
	IsRpaUnattendedEnabled: boolean | null;
	/** Indicates whether Sales Assistant mobile app has been enabled for the organization. */
	IsSalesAssistantEnabled: boolean | null;
	/** Indicates whether sending CUA audit logs to Purview is enabled. */
	IsSendCuaAuditLogToPurviewEnabled: boolean | null;
	/** IsSharingInOrgAllowed */
	IsSharingInOrgAllowed: boolean | null;
	/** Enable sales order processing integration. */
	IsSOPIntegrationEnabled: boolean | null;
	/** Information on whether text wrap is enabled. */
	IsTextWrapEnabled: boolean | null;
	/** Indicates whether CUA log upload to Dataverse is enabled. */
	IsUploadCuaLogToDataverseEnabled: boolean | null;
	/** Enable or disable auditing of user access. */
	IsUserAccessAuditEnabled: boolean | null;
	/** Indicates whether loading of Microsoft Dynamics 365 in a browser window that does not have address, tool, and menu bars is enabled. */
	ISVIntegrationCode: number | null;
	/** Indicates whether Power Automate savings feature is enabled for WorkQueue. */
	IsWorkQueueSavingsEnabled: boolean | null;
	/** Indicates whether Write-in Products can be added to Opportunity/Quote/Order/Invoice or not. */
	IsWriteInProductsAllowed: boolean | null;
	/** Type the prefix to use for all knowledge articles in Microsoft Dynamics 365. */
	KaPrefix: string | null;
	/** Prefix to use for all articles in Microsoft Dynamics 365. */
	KbPrefix: string | null;
	/** XML string containing the Knowledge Management settings that are applied in Knowledge Management Wizard. */
	KMSettings: string | null;
	/** Preferred language for the organization. */
	LanguageCode: number | null;
	/** Show legacy app for admins */
	LegacyAppToggle: number | null;
	/** Unique identifier of the locale of the organization. */
	LocaleId: number | null;
	/** Information that specifies how the Long Date format is displayed in Microsoft Dynamics 365. */
	LongDateFormatCode: number | null;
	/** Minimum number of characters that should be entered in the lookup control before resolving for suggestions */
	LookupCharacterCountBeforeResolve: number | null;
	/** Minimum delay (in milliseconds) between consecutive inputs in a lookup control that will trigger a search for suggestions */
	LookupResolveDelayMS: number | null;
	/** Lower Threshold For Mailbox Intermittent Issue. */
	MailboxIntermittentIssueMinRange: number | null;
	/** Lower Threshold For Mailbox Permanent Issue. */
	MailboxPermanentIssueMinRange: number | null;
	/** Maximum number of actionsteps allowed in a BPF */
	MaxActionStepsInBPF: number | null;
	/** Maximum Allowed Pending Rollup Job Count */
	MaxAllowedPendingRollupJobCount: number | null;
	/** Percentage Of Entity Table Size For Kicking Off Bootstrap Job */
	MaxAllowedPendingRollupJobPercentage: number | null;
	/** Maximum number of days an appointment can last. */
	MaxAppointmentDurationDays: number | null;
	/** Maximum number of conditions allowed for mobile offline filters */
	MaxConditionsForMobileOfflineFilters: number | null;
	/** Maximum depth for hierarchy security propagation. */
	MaxDepthForHierarchicalSecurityModel: number | null;
	/** Maximum number of Folder Based Tracking mappings user can add */
	MaxFolderBasedTrackingMappings: number | null;
	/** Maximum number of active business process flows allowed per entity */
	MaximumActiveBusinessProcessFlowsAllowedPerEntity: number | null;
	/** Restrict the maximum number of product properties for a product family/bundle */
	MaximumDynamicPropertiesAllowed: number | null;
	/** Maximum number of active SLA allowed per entity in online */
	MaximumEntitiesWithActiveSLA: number | null;
	/** Maximum number of SLA KPI per active SLA allowed for entity in online */
	MaximumSLAKPIPerEntityWithActiveSLA: number | null;
	/** Maximum tracking number before recycling takes place. */
	MaximumTrackingNumber: number | null;
	/** Restrict the maximum no of items in a bundle */
	MaxProductsInBundle: number | null;
	/** Maximum number of records that will be exported to a static Microsoft Office Excel worksheet when exporting from the grid. */
	MaxRecordsForExportToExcel: number | null;
	/** Maximum number of lookup and picklist records that can be selected by user for filtering. */
	MaxRecordsForLookupFilters: number | null;
	/** Maximum Rollup Fields Per Entity */
	MaxRollupFieldsPerEntity: number | null;
	/** Maximum Rollup Fields Per Organization */
	MaxRollupFieldsPerOrg: number | null;
	/** Max SLA Items Per SLA */
	MaxSLAItemsPerSLA: number | null;
	/** The maximum version of IE to run browser emulation for in Outlook client */
	readonly MaxSupportedInternetExplorerVersion: number | null;
	/** Maximum allowed size of an attachment. */
	MaxUploadFileSize: number | null;
	/** Maximum number of mailboxes that can be toggled for verbose logging */
	readonly MaxVerboseLoggingMailbox: number | null;
	/** Maximum number of sync cycles for which verbose logging will be enabled by default */
	readonly MaxVerboseLoggingSyncCycles: number | null;
	/** What is the last date/time where there are metadata tracking deleted objects that have never been outside of the expiration period. */
	readonly MetadataSyncLastTimeOfNeverExpiredDeletedObjects_UtcDateAndTime: Date | null;
	/** Contains the maximum version number for attributes used by metadata synchronization that have changed. */
	readonly MetadataSyncTimestamp: number | null;
	/** (Deprecated) Environment selected for Integration with Microsoft Flow */
	MicrosoftFlowEnvironment: string | null;
	/** Normal polling frequency used for address book synchronization in Microsoft Office Outlook. */
	MinAddressBookSyncInterval: number | null;
	/** Normal polling frequency used for background offline synchronization in Microsoft Office Outlook. */
	MinOfflineSyncInterval: number | null;
	/** Minimum allowed time between scheduled Outlook synchronizations. */
	MinOutlookSyncInterval: number | null;
	/** Minimum number of user license required for mobile offline service by production/preview organization */
	readonly MobileOfflineMinLicenseProd: number | null;
	/** Minimum number of user license required for mobile offline service by trial organization */
	readonly MobileOfflineMinLicenseTrial: number | null;
	/** Sync interval for mobile offline. */
	MobileOfflineSyncInterval: number | null;
	/** Flag to indicate if the modern advanced find filtering on all tables in a model-driven app is enabled */
	ModernAdvancedFindFiltering: boolean | null;
	/** Indicates whether coauthoring is enabled in modern app designer */
	ModernAppDesignerCoauthoringEnabled: boolean | null;
	/** Unique identifier of the user who last modified the organization. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the organization was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the organization. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Show the sort by button on views */
	MultiColumnSortEnabled: number | null;
	/** Name of the organization. The name is set when Microsoft CRM is installed and should not be changed. */
	Name: string | null;
	/** Enables Natural Language Assist Filter. */
	NaturalLanguageAssistFilter: boolean | null;
	/** Information that specifies how negative currency numbers are displayed throughout Microsoft Dynamics 365. */
	NegativeCurrencyFormatCode: number | null;
	/** Information that specifies how negative numbers are displayed throughout Microsoft CRM. */
	NegativeFormatCode: number | null;
	/** Indicates whether an organization has enabled the new Relevance search experience (released in Oct 2020) for the organization */
	NewSearchExperienceEnabled: boolean | null;
	/** Next entity type code to use for custom entities. */
	readonly NextCustomObjectTypeCode: number | null;
	/** Next token to be placed on the subject line of an email message. */
	NextTrackingNumber: number | null;
	/** Indicates whether mailbox owners will be notified of email server profile level alerts. */
	NotifyMailboxOwnerOfEmailServerLevelAlerts: boolean | null;
	/** Specification of how numbers are displayed throughout Microsoft CRM. */
	NumberFormat: string | null;
	/** Specifies how numbers are grouped in Microsoft Dynamics 365. */
	NumberGroupFormat: string | null;
	/** Symbol used for number separation in Microsoft Dynamics 365. */
	NumberSeparator: string | null;
	/** Indicates whether the Office Apps auto deployment is enabled for the organization. */
	OfficeAppsAutoDeploymentEnabled: boolean | null;
	/** The url to open the Delve for the organization. */
	OfficeGraphDelveUrl: string | null;
	/** Enable OOB pricing calculation logic for Opportunity, Quote, Order and Invoice entities. */
	OOBPriceCalculationEnabled: boolean | null;
	/** Indicates if this organization will opt-out from automatically enabling schema v2 on the organization. */
	OptOutSchemaV2EnabledByDefault: boolean | null;
	/** Prefix to use for all orders throughout Microsoft Dynamics 365. */
	OrderPrefix: string | null;
	/** Unique identifier of the organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Indicates the organization lifecycle state */
	readonly OrganizationState: number | null;
	/** Organization settings stored in Organization Database. */
	OrgDbOrgSettings: string | null;
	/** Select whether to turn on OrgInsights for the organization. */
	OrgInsightsEnabled: boolean | null;
	/** Indicates whether Preview feature has been enabled for the organization. */
	PaiPreviewScenarioEnabled: boolean | null;
	/** Prefix used for parsed table columns. */
	readonly ParsedTableColumnPrefix: string | null;
	/** Prefix used for parsed tables. */
	readonly ParsedTablePrefix: string | null;
	/** Specifies the maximum number of months in past for which the recurring activities can be created. */
	PastExpansionWindow: number | null;
	/** Leave empty to use default setting. Set to on/off to enable/disable replacement of default grids with modern ones in model-driven apps. */
	PcfDatasetGridEnabled: string | null;
	/** This setting contains the date time before an ACT sync can execute. */
	PerformACTSyncAfter_UtcDateAndTime: Date | null;
	/** For internal use only. */
	Picture: string | null;
	PinpointLanguageCode: number | null;
	/** Plug-in Trace Log Setting for the Organization. */
	PluginTraceLogSetting: number | null;
	/** PM designator to use throughout Microsoft Dynamics 365. */
	PMDesignator: string | null;
	/** For internal use only. */
	PostMessageWhitelistDomains: string | null;
	/** Indicates whether bot for makers is enabled. */
	PowerAppsMakerBotEnabled: boolean | null;
	/** Indicates whether cross region operations are allowed for the organization */
	PowerBIAllowCrossRegionOperations: boolean | null;
	/** Indicates whether automatic permissions assignment to Power BI has been enabled for the organization */
	PowerBIAutomaticPermissionsAssignment: boolean | null;
	/** Indicates whether creation of Power BI components has been enabled for the organization */
	PowerBIComponentsCreate: boolean | null;
	/** Indicates whether the Power BI feature should be enabled for the organization. */
	PowerBiFeatureEnabled: boolean | null;
	/** Number of decimal places that can be used for prices. */
	PricingDecimalPrecision: number | null;
	/** Privacy Statement URL */
	PrivacyStatementUrl: string | null;
	/** Unique identifier of the default privilege for users in the organization. */
	PrivilegeUserGroupId: DevKit.Guid | null;
	/** For internal use only. */
	PrivReportingGroupId: DevKit.Guid | null;
	/** For internal use only. */
	PrivReportingGroupName: string | null;
	/** Select whether to turn on product recommendations for the organization. */
	ProductRecommendationsEnabled: boolean | null;
	/** Indicates whether prompt should be shown for new Qualify Lead Experience */
	QualifyLeadAdditionalOptions: string | null;
	/** Flag to indicate if the feature to use quick action to open records in search side pane is enabled */
	QuickActionToOpenRecordsInSidePaneEnabled: boolean | null;
	/** Indicates whether a quick find record limit should be enabled for this organization (allows for faster Quick Find queries but prevents overly broad searches). */
	QuickFindRecordLimitEnabled: boolean | null;
	/** Prefix to use for all quotes throughout Microsoft Dynamics 365. */
	QuotePrefix: string | null;
	/** Indicates whether SLA Recalculation has been enabled for the organization */
	RecalculateSLA: boolean | null;
	/** Specifies the default value for number of occurrences field in the recurrence dialog. */
	RecurrenceDefaultNumberOfOccurrences: number | null;
	/** Specifies the interval (in seconds) for pausing expansion job. */
	RecurrenceExpansionJobBatchInterval: number | null;
	/** Specifies the value for number of instances created in on demand job in one shot. */
	RecurrenceExpansionJobBatchSize: number | null;
	/** Specifies the maximum number of instances to be created synchronously after creating a recurring appointment. */
	RecurrenceExpansionSynchCreateMax: number | null;
	/** XML string that defines the navigation structure for the application. This is the site map from the previously upgraded build and is used in a 3-way merge during upgrade. */
	ReferenceSiteMapXml: string | null;
	/** Current orgnization release cadence value */
	ReleaseCadence: number | null;
	/** Model app refresh channel */
	ReleaseChannel: number | null;
	/** Release Wave Applied to Environment. */
	ReleaseWaveName: string | null;
	/** Indicates whether relevance search was enabled for the environment as part of Dataverse's relevance search on-by-default sweep */
	RelevanceSearchEnabledByPlatform: boolean | null;
	/** This setting contains the last modified date for relevance search setting that appears as a toggle in PPAC. */
	RelevanceSearchModifiedOn_UtcDateAndTime: Date | null;
	/** Flag to render the body of email in the Web form in an IFRAME with the security='restricted' attribute set. This is additional security but can cause a credentials prompt. */
	RenderSecureIFrameForEmail: boolean | null;
	/** For internal use only. */
	ReportingGroupId: DevKit.Guid | null;
	/** For internal use only. */
	ReportingGroupName: string | null;
	/** Picklist for selecting the organization preference for reporting scripting errors. */
	ReportScriptErrors: number | null;
	/** Indicates whether Send As Other User privilege is enabled. */
	RequireApprovalForQueueEmail: boolean | null;
	/** Indicates whether Send As Other User privilege is enabled. */
	RequireApprovalForUserEmail: boolean | null;
	/** Apply same email address to all unresolved matches when you manually resolve it for one */
	ResolveSimilarUnresolvedEmailAddress: boolean | null;
	/** Information that specifies whether guest user restriction is enabled */
	RestrictGuestUserAccess: boolean | null;
	/** Flag to restrict Update on incident. */
	RestrictStatusUpdate: boolean | null;
	/** Information that specifies Reverse Proxy IP addresses from which requests have to be allowed. */
	ReverseProxyIpAddresses: string | null;
	/** Error status of Relationship Insights provisioning. */
	RiErrorStatus: number | null;
	/** Samesite mode for Session Cookie 0 is Default, 1 is None, 2 is Lax , 3 is Strict */
	SameSiteModeForSessionCookie: number | null;
	/** Unique identifier of the sample data import job. */
	SampleDataImportId: DevKit.Guid | null;
	/** Default time to live in minutes for new Power Automate savings events records in flow aggregation. */
	SavingEventsTTLInMinutes: number | null;
	/** Prefix used for custom entities and attributes. */
	SchemaNamePrefix: string | null;
	/** Indicates whether Send Bulk Email in UCI is enabled for the org. */
	SendBulkEmailInUCI: boolean | null;
	/** Serve Static Content From CDN */
	ServeStaticResourcesFromAzureCDN: boolean | null;
	/** Enable the session recording feature to record user sessions in UCI */
	SessionRecordingEnabled: boolean | null;
	/** Information that specifies whether session timeout is enabled */
	SessionTimeoutEnabled: boolean | null;
	/** Session timeout in minutes */
	SessionTimeoutInMins: number | null;
	/** Session timeout reminder in minutes */
	SessionTimeoutReminderInMins: number | null;
	/** Indicates which SharePoint deployment type is configured for Server to Server. (Online or On-Premises) */
	SharePointDeploymentType: number | null;
	/** Information that specifies whether to share to previous owner on assign. */
	ShareToPreviousOwnerOnAssign: boolean | null;
	/** Select whether to display a KB article deprecation notification to the user. */
	ShowKBArticleDeprecationNotification: boolean | null;
	/** Information that specifies whether to display the week number in calendar displays throughout Microsoft CRM. */
	ShowWeekNumber: boolean | null;
	/** CRM for Outlook Download URL */
	SignupOutlookDownloadFWLink: string | null;
	/** XML string that defines the navigation structure for the application. */
	SiteMapXml: string | null;
	/** Contains the on hold case status values. */
	SlaPauseStates: string | null;
	/** Flag for whether the organization is using Social Insights. */
	SocialInsightsEnabled: boolean | null;
	/** Identifier for the Social Insights instance for the organization. */
	SocialInsightsInstance: string | null;
	/** Flag for whether the organization has accepted the Social Insights terms of use. */
	SocialInsightsTermsAccepted: boolean | null;
	/** For internal use only. */
	SortId: number | null;
	/** For internal use only. */
	SqlAccessGroupId: DevKit.Guid | null;
	/** For internal use only. */
	SqlAccessGroupName: string | null;
	/** Setting for SQM data collection, 0 no, 1 yes enabled */
	SQMEnabled: boolean | null;
	/** Unique identifier of the support user for the organization. */
	SupportUserId: DevKit.Guid | null;
	/** Indicates whether SLA is suppressed. */
	SuppressSLA: boolean | null;
	/** Leave empty to use default setting. Set to on/off to enable/disable Admin emails when Solution Checker validation fails. */
	SuppressValidationEmails: boolean | null;
	/** Number of records to update per operation in Sync Bulk Pause/Resume/Cancel */
	SyncBulkOperationBatchSize: number | null;
	/** Max total number of records to update in database for Sync Bulk Pause/Resume/Cancel */
	SyncBulkOperationMaxLimit: number | null;
	/** Indicates the selection to use the dynamics 365 azure sync framework or server side sync. */
	SyncOptInSelection: boolean | null;
	/** Indicates the status of the opt-in or opt-out operation for dynamics 365 azure sync. */
	SyncOptInSelectionStatus: number | null;
	/** Unique identifier of the system user for the organization. */
	SystemUserId: DevKit.Guid | null;
	/** Controls the appearance of option to search over a single DV search indexed table in model-driven apps’ global search in the header. */
	TableScopedDVSearchInApps: boolean | null;
	/** Maximum number of aggressive polling cycles executed for email auto-tagging when a new email is received. */
	TagMaxAggressiveCycles: number | null;
	/** Normal polling frequency used for email receive auto-tagging in outlook. */
	TagPollingPeriod: number | null;
	/** Select whether to turn on task flows for the organization. */
	TaskBasedFlowEnabled: boolean | null;
	/** Information on whether Teams Chat Data Sync is enabled. */
	TeamsChatDataSync: boolean | null;
	/** Instrumentation key for Application Insights used to log plugins telemetry. */
	TelemetryInstrumentationKey: string | null;
	/** Select whether to turn on text analytics for the organization. */
	TextAnalyticsEnabled: boolean | null;
	/** Information that specifies how the time is displayed throughout Microsoft CRM. */
	TimeFormatCode: number | null;
	/** Text for how time is displayed in Microsoft Dynamics 365. */
	TimeFormatString: string | null;
	/** Text for how the time separator is displayed throughout Microsoft Dynamics 365. */
	TimeSeparator: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Duration used for token expiration. */
	TokenExpiry: number | null;
	/** Token key. */
	TokenKey: string | null;
	/** Tracelog record maximum age in days */
	TraceLogMaximumAgeInDays: number | null;
	/** History list of tracking token prefixes. */
	TrackingPrefix: string | null;
	/** Base number used to provide separate tracking token identifiers to users belonging to different deployments. */
	TrackingTokenIdBase: number | null;
	/** Number of digits used to represent a tracking token identifier. */
	TrackingTokenIdDigits: number | null;
	/** Number of characters appended to invoice, quote, and order numbers. */
	UniqueSpecifierLength: number | null;
	/** Indicates whether email address should be unresolved if multiple matches are found */
	UnresolveEmailAddressIfMultipleMatch: boolean | null;
	/** Flag indicates whether to Use Inbuilt Rule For DefaultPricelist. */
	UseInbuiltRuleForDefaultPricelistSelection: boolean | null;
	/** Select whether to use legacy form rendering. */
	UseLegacyRendering: boolean | null;
	/** Use position hierarchy */
	UsePositionHierarchy: boolean | null;
	/** Indicates whether searching in a grid should use the Quick Find view for the entity. */
	UseQuickFindViewForGridSearch: boolean | null;
	/** The interval at which user access is checked for auditing. */
	UserAccessAuditingInterval: number | null;
	/** Indicates whether the read-optimized form should be enabled for this organization. */
	UseReadForm: boolean | null;
	/** Unique identifier of the default group of users in the organization. */
	UserGroupId: DevKit.Guid | null;
	/** Enable the user rating feature to show the NSAT score and comment to maker */
	UserRatingEnabled: boolean | null;
	/** Indicates default protocol selected for organization. */
	UseSkypeProtocol: boolean | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Hash of the V3 callout configuration file. */
	readonly V3CalloutConfigHash: string | null;
	/** Validation mode for apps in this environment */
	ValidationMode: number | null;
	/** Version number of the organization. */
	readonly VersionNumber: number | null;
	/** Hash value of web resources. */
	WebResourceHash: string | null;
	/** Designated first day of the week throughout Microsoft Dynamics 365. */
	WeekStartDayCode: number | null;
	/** For Internal use only. */
	WidgetProperties: string | null;
	/** Denotes the Yammer group ID */
	YammerGroupId: number | null;
	/** Denotes the Yammer network permalink */
	YammerNetworkPermalink: string | null;
	/** Denotes whether the OAuth access token for Yammer network has expired */
	YammerOAuthAccessTokenExpired: boolean | null;
	/** Internal Use Only */
	YammerPostMethod: number | null;
	/** Information that specifies how the first week of the year is specified in Microsoft Dynamics 365. */
	YearStartWeekCode: number | null;
}

const OrganizationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ACIWebEndpointUrl: { logicalName: 'aciwebendpointurl' },
	AcknowledgementTemplateId: { schemaName: 'AcknowledgementTemplateId', logicalName: '_acknowledgementtemplateid_value', entityCollectionName: 'templates', entityLogicalName: 'template' },
	ActivityTypeFilter: { logicalName: 'activitytypefilter', type: 'Boolean' },
	ActivityTypeFilterV2: { logicalName: 'activitytypefilterv2', type: 'Boolean' },
	AdvancedColumnEditorEnabled: { logicalName: 'advancedcolumneditorenabled', type: 'Boolean' },
	AdvancedColumnFilteringEnabled: { logicalName: 'advancedcolumnfilteringenabled', type: 'Boolean' },
	AdvancedFilteringEnabled: { logicalName: 'advancedfilteringenabled', type: 'Boolean' },
	AdvancedLookupEnabled: { logicalName: 'advancedlookupenabled', type: 'Boolean' },
	AdvancedLookupInEditFilter: { logicalName: 'advancedlookupineditfilter', type: 'Integer' },
	AiPromptsAzureAIFoundryModelTypesEnabled: { logicalName: 'aipromptsazureaifoundrymodeltypesenabled', type: 'Boolean' },
	AiPromptsBasicModelTypesEnabled: { logicalName: 'aipromptsbasicmodeltypesenabled', type: 'Boolean' },
	AiPromptsEnabled: { logicalName: 'aipromptsenabled', type: 'Boolean' },
	AiPromptsPremiumModelTypesEnabled: { logicalName: 'aipromptspremiummodeltypesenabled', type: 'Boolean' },
	AiPromptsStandardModelTypesEnabled: { logicalName: 'aipromptsstandardmodeltypesenabled', type: 'Boolean' },
	AllowAddressBookSyncs: { logicalName: 'allowaddressbooksyncs', type: 'Boolean' },
	AllowApplicationUserAccess: { logicalName: 'allowapplicationuseraccess', type: 'Boolean' },
	AllowAutoResponseCreation: { logicalName: 'allowautoresponsecreation', type: 'Boolean' },
	AllowAutoUnsubscribe: { logicalName: 'allowautounsubscribe', type: 'Boolean' },
	AllowAutoUnsubscribeAcknowledgement: { logicalName: 'allowautounsubscribeacknowledgement', type: 'Boolean' },
	AllowClientMessageBarAd: { logicalName: 'allowclientmessagebarad', type: 'Boolean' },
	AllowConnectorsOnPowerFXActions: { logicalName: 'allowconnectorsonpowerfxactions', type: 'Boolean' },
	AllowedApplicationsForDVAccess: { logicalName: 'allowedapplicationsfordvaccess' },
	AllowedIpRangeForFirewall: { logicalName: 'allowediprangeforfirewall' },
	AllowedIpRangeForStorageAccessSignatures: { logicalName: 'allowediprangeforstorageaccesssignatures' },
	AllowedListOfIpRangesForFirewall: { logicalName: 'allowedlistofiprangesforfirewall' },
	AllowedMimeTypes: { logicalName: 'allowedmimetypes' },
	AllowedServiceTagsForFirewall: { logicalName: 'allowedservicetagsforfirewall' },
	AllowEntityOnlyAudit: { logicalName: 'allowentityonlyaudit', type: 'Boolean' },
	AllowLeadingWildcardsInGridSearch: { logicalName: 'allowleadingwildcardsingridsearch', type: 'Boolean' },
	AllowLeadingWildcardsInQuickFind: { logicalName: 'allowleadingwildcardsinquickfind', type: 'Integer' },
	AllowLegacyClientExperience: { logicalName: 'allowlegacyclientexperience', type: 'Boolean' },
	AllowLegacyDialogsEmbedding: { logicalName: 'allowlegacydialogsembedding', type: 'Boolean' },
	AllowMarketingEmailExecution: { logicalName: 'allowmarketingemailexecution', type: 'Boolean' },
	AllowMicrosoftTrustedServiceTags: { logicalName: 'allowmicrosofttrustedservicetags', type: 'Boolean' },
	AllowOfflineScheduledSyncs: { logicalName: 'allowofflinescheduledsyncs', type: 'Boolean' },
	AllowOutlookScheduledSyncs: { logicalName: 'allowoutlookscheduledsyncs', type: 'Boolean' },
	AllowRedirectAdminSettingsToModernUI: { logicalName: 'allowredirectadminsettingstomodernui', type: 'Boolean' },
	AllowUnresolvedPartiesOnEmailSend: { logicalName: 'allowunresolvedpartiesonemailsend', type: 'Boolean' },
	AllowUserFormModePreference: { logicalName: 'allowuserformmodepreference', type: 'Boolean' },
	AllowUsersHidingSystemViews: { logicalName: 'allowusershidingsystemviews', type: 'Boolean' },
	AllowUsersSeeAppdownloadMessage: { logicalName: 'allowusersseeappdownloadmessage', type: 'Boolean' },
	AllowVirtualEntityPluginExecutionOnNestedPipeline: { logicalName: 'allowvirtualentitypluginexecutiononnestedpipeline', type: 'Boolean' },
	AllowWebExcelExport: { logicalName: 'allowwebexcelexport', type: 'Boolean' },
	AMDesignator: { logicalName: 'amdesignator' },
	AppDesignerExperienceEnabled: { logicalName: 'appdesignerexperienceenabled', type: 'Boolean' },
	ApplicationBasedAccessControlMode: { logicalName: 'applicationbasedaccesscontrolmode', type: 'Integer' },
	AppointmentRichEditorExperience: { logicalName: 'appointmentricheditorexperience', type: 'Boolean' },
	AppointmentWithTeamsMeeting: { logicalName: 'appointmentwithteamsmeeting', type: 'Boolean' },
	AppointmentWithTeamsMeetingV2: { logicalName: 'appointmentwithteamsmeetingv2', type: 'Boolean' },
	AreAutomationCenterPreviewFeaturesEnabled: { logicalName: 'areautomationcenterpreviewfeaturesenabled', type: 'Boolean' },
	AreProcessInsightsPreviewFeaturesEnabled: { logicalName: 'areprocessinsightspreviewfeaturesenabled', type: 'Boolean' },
	AuditRetentionPeriod: { logicalName: 'auditretentionperiod', type: 'Integer' },
	AuditRetentionPeriodV2: { logicalName: 'auditretentionperiodv2', type: 'Integer' },
	AuditSettings: { logicalName: 'auditsettings' },
	AutoApplyDefaultonCaseCreate: { logicalName: 'autoapplydefaultoncasecreate', type: 'Boolean' },
	AutoApplyDefaultonCaseUpdate: { logicalName: 'autoapplydefaultoncaseupdate', type: 'Boolean' },
	AutoApplySLA: { logicalName: 'autoapplysla', type: 'Boolean' },
	AzureSchedulerJobCollectionName: { logicalName: 'azureschedulerjobcollectionname' },
	BaseCurrencyId: { schemaName: 'BaseCurrencyId', logicalName: '_basecurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	BaseCurrencyPrecision: { logicalName: 'basecurrencyprecision', readOnly: true, type: 'Integer' },
	BaseCurrencySymbol: { logicalName: 'basecurrencysymbol', readOnly: true },
	BaseISOCurrencyCode: { logicalName: 'baseisocurrencycode', readOnly: true },
	BingMapsApiKey: { logicalName: 'bingmapsapikey' },
	BlockAccessToSessionTranscriptsForCopilotStudio: { logicalName: 'blockaccesstosessiontranscriptsforcopilotstudio', type: 'Boolean' },
	BlockCopilotAuthorAuthentication: { logicalName: 'blockcopilotauthorauthentication', type: 'Boolean' },
	BlockedApplicationsForDVAccess: { logicalName: 'blockedapplicationsfordvaccess' },
	BlockedAttachments: { logicalName: 'blockedattachments' },
	BlockedMimeTypes: { logicalName: 'blockedmimetypes' },
	BlockTranscriptRecordingForCopilotStudio: { logicalName: 'blocktranscriptrecordingforcopilotstudio', type: 'Boolean' },
	BlockUrlsInResponsesForCopilotStudio: { logicalName: 'blockurlsinresponsesforcopilotstudio', type: 'Boolean' },
	BoundDashboardDefaultCardExpanded: { logicalName: 'bounddashboarddefaultcardexpanded', type: 'Boolean' },
	BulkOperationPrefix: { logicalName: 'bulkoperationprefix' },
	BusinessCardOptions: { logicalName: 'businesscardoptions' },
	BusinessClosureCalendarId: { logicalName: 'businessclosurecalendarid' },
	CalendarType: { logicalName: 'calendartype', type: 'Integer' },
	CampaignPrefix: { logicalName: 'campaignprefix' },
	CanOptOutNewSearchExperience: { logicalName: 'canoptoutnewsearchexperience', type: 'Boolean' },
	CascadeStatusUpdate: { logicalName: 'cascadestatusupdate', type: 'Boolean' },
	CasePrefix: { logicalName: 'caseprefix' },
	CategoryPrefix: { logicalName: 'categoryprefix' },
	ClientFeatureSet: { logicalName: 'clientfeatureset' },
	ContentSecurityPolicyConfiguration: { logicalName: 'contentsecuritypolicyconfiguration' },
	ContentSecurityPolicyConfigurationForCanvas: { logicalName: 'contentsecuritypolicyconfigurationforcanvas' },
	ContentSecurityPolicyOptions: { logicalName: 'contentsecuritypolicyoptions', type: 'Integer' },
	ContentSecurityPolicyReportUri: { logicalName: 'contentsecuritypolicyreporturi' },
	ContractPrefix: { logicalName: 'contractprefix' },
	CopresenceRefreshRate: { logicalName: 'copresencerefreshrate', type: 'Integer' },
	CortanaProactiveExperienceEnabled: { logicalName: 'cortanaproactiveexperienceenabled', type: 'Boolean' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreateProductsWithoutParentInActiveState: { logicalName: 'createproductswithoutparentinactivestate', type: 'Boolean' },
	CuaFlowLogsTtlInMinutes: { logicalName: 'cuaflowlogsttlinminutes', type: 'Integer' },
	CuaFlowLogsVerbosity: { logicalName: 'cuaflowlogsverbosity', type: 'Integer' },
	CurrencyDecimalPrecision: { logicalName: 'currencydecimalprecision', type: 'Integer' },
	CurrencyDisplayOption: { logicalName: 'currencydisplayoption', type: 'Integer' },
	CurrencyFormatCode: { logicalName: 'currencyformatcode', type: 'Integer' },
	CurrencySymbol: { logicalName: 'currencysymbol' },
	CurrentBulkOperationNumber: { logicalName: 'currentbulkoperationnumber', type: 'Integer' },
	CurrentCampaignNumber: { logicalName: 'currentcampaignnumber', type: 'Integer' },
	CurrentCaseNumber: { logicalName: 'currentcasenumber', type: 'Integer' },
	CurrentCategoryNumber: { logicalName: 'currentcategorynumber', type: 'Integer' },
	CurrentContractNumber: { logicalName: 'currentcontractnumber', type: 'Integer' },
	CurrentImportSequenceNumber: { logicalName: 'currentimportsequencenumber', readOnly: true, type: 'Integer' },
	CurrentInvoiceNumber: { logicalName: 'currentinvoicenumber', type: 'Integer' },
	CurrentKaNumber: { logicalName: 'currentkanumber', type: 'Integer' },
	CurrentKbNumber: { logicalName: 'currentkbnumber', type: 'Integer' },
	CurrentOrderNumber: { logicalName: 'currentordernumber', type: 'Integer' },
	CurrentParsedTableNumber: { logicalName: 'currentparsedtablenumber', readOnly: true, type: 'Integer' },
	CurrentQuoteNumber: { logicalName: 'currentquotenumber', type: 'Integer' },
	DateFormatCode: { logicalName: 'dateformatcode', type: 'Integer' },
	DateFormatString: { logicalName: 'dateformatstring' },
	DateSeparator: { logicalName: 'dateseparator' },
	DaysBeforeEmailDescriptionIsMigrated: { logicalName: 'daysbeforeemaildescriptionismigrated', type: 'Integer' },
	DaysBeforeInactiveTeamsChatSyncDisabled: { logicalName: 'daysbeforeinactiveteamschatsyncdisabled', type: 'Integer' },
	DaysSinceRecordLastModifiedMaxValue: { logicalName: 'dayssincerecordlastmodifiedmaxvalue', readOnly: true, type: 'Integer' },
	DecimalSymbol: { logicalName: 'decimalsymbol' },
	DefaultCountryCode: { logicalName: 'defaultcountrycode' },
	DefaultCrmCustomName: { logicalName: 'defaultcrmcustomname' },
	DefaultEmailServerProfileId: { schemaName: 'DefaultEmailServerProfileId', logicalName: '_defaultemailserverprofileid_value', entityCollectionName: 'emailserverprofiles', entityLogicalName: 'emailserverprofile' },
	DefaultEmailSettings: { logicalName: 'defaultemailsettings' },
	DefaultMobileOfflineProfileId: { schemaName: 'DefaultMobileOfflineProfileId', logicalName: '_defaultmobileofflineprofileid_value', entityCollectionName: 'mobileofflineprofiles', entityLogicalName: 'mobileofflineprofile' },
	DefaultRecurrenceEndRangeType: { logicalName: 'defaultrecurrenceendrangetype', type: 'Integer' },
	DefaultThemeData: { logicalName: 'defaultthemedata' },
	DelegatedAdminUserId: { logicalName: 'delegatedadminuserid' },
	DesktopFlowQueueLogsTtlInMinutes: { logicalName: 'desktopflowqueuelogsttlinminutes', type: 'Integer' },
	DesktopFlowRunActionLogsStatus: { logicalName: 'desktopflowrunactionlogsstatus', type: 'Integer' },
	DesktopFlowRunActionLogVerbosity: { logicalName: 'desktopflowrunactionlogverbosity', type: 'Integer' },
	DesktopFlowRunActionLogVersion: { logicalName: 'desktopflowrunactionlogversion', type: 'Integer' },
	DisabledReason: { logicalName: 'disabledreason', readOnly: true },
	DisableSocialCare: { logicalName: 'disablesocialcare', type: 'Boolean' },
	DisableSystemLabelsCacheSharing: { logicalName: 'disablesystemlabelscachesharing', type: 'Boolean' },
	DiscountCalculationMethod: { logicalName: 'discountcalculationmethod', type: 'Integer' },
	DisplayNavigationTour: { logicalName: 'displaynavigationtour', type: 'Boolean' },
	EmailConnectionChannel: { logicalName: 'emailconnectionchannel', type: 'Integer' },
	EmailCorrelationEnabled: { logicalName: 'emailcorrelationenabled', type: 'Boolean' },
	EmailSendPollingPeriod: { logicalName: 'emailsendpollingperiod', type: 'Integer' },
	EnableAsyncMergeAPIForUCI: { logicalName: 'enableasyncmergeapiforuci', type: 'Boolean' },
	EnableBingMapsIntegration: { logicalName: 'enablebingmapsintegration', type: 'Boolean' },
	EnableCanvasAppsInSolutionsByDefault: { logicalName: 'enablecanvasappsinsolutionsbydefault', type: 'Boolean' },
	EnableCopilotStudioCrossGeoShareDataWithVivaInsights: { logicalName: 'enablecopilotstudiocrossgeosharedatawithvivainsights', type: 'Boolean' },
	EnableCopilotStudioShareDataWithVI: { logicalName: 'enablecopilotstudiosharedatawithvi', type: 'Boolean' },
	EnableCopilotStudioShareDataWithVivaInsights: { logicalName: 'enablecopilotstudiosharedatawithvivainsights', type: 'Boolean' },
	EnableEnvironmentSettingsApp: { logicalName: 'enableenvironmentsettingsapp', type: 'Boolean' },
	EnableFlowsInSolutionByDefault: { logicalName: 'enableflowsinsolutionbydefault', type: 'Boolean' },
	EnableFlowsInSolutionByDefaultGracePeriod: { logicalName: 'enableflowsinsolutionbydefaultgraceperiod', type: 'Boolean' },
	EnableImmersiveSkypeIntegration: { logicalName: 'enableimmersiveskypeintegration', type: 'Boolean' },
	EnableIpBasedCookieBinding: { logicalName: 'enableipbasedcookiebinding', type: 'Boolean' },
	EnableIpBasedFirewallRule: { logicalName: 'enableipbasedfirewallrule', type: 'Boolean' },
	EnableIpBasedFirewallRuleInAuditMode: { logicalName: 'enableipbasedfirewallruleinauditmode', type: 'Boolean' },
	EnableIpBasedStorageAccessSignatureRule: { logicalName: 'enableipbasedstorageaccesssignaturerule', type: 'Boolean' },
	EnableLivePersonaCardUCI: { logicalName: 'enablelivepersonacarduci', type: 'Boolean' },
	EnableLivePersonCardIntegrationInOffice: { logicalName: 'enablelivepersoncardintegrationinoffice', type: 'Boolean' },
	EnableLPAuthoring: { logicalName: 'enablelpauthoring', type: 'Boolean' },
	EnableMakerSwitchToClassic: { logicalName: 'enablemakerswitchtoclassic', type: 'Boolean' },
	EnableMicrosoftFlowIntegration: { logicalName: 'enablemicrosoftflowintegration', type: 'Boolean' },
	EnablePricingOnCreate: { logicalName: 'enablepricingoncreate', type: 'Boolean' },
	EnableRedirectionToModernSettings: { logicalName: 'enableredirectiontomodernsettings', type: 'Boolean' },
	EnableSensitivityLabels: { logicalName: 'enablesensitivitylabels', type: 'Boolean' },
	EnableSmartMatching: { logicalName: 'enablesmartmatching', type: 'Boolean' },
	EnableUnifiedClientCDN: { logicalName: 'enableunifiedclientcdn', type: 'Boolean' },
	EnableUnifiedInterfaceShellRefresh: { logicalName: 'enableunifiedinterfaceshellrefresh', type: 'Boolean' },
	EnforceReadOnlyPlugins: { logicalName: 'enforcereadonlyplugins', type: 'Boolean' },
	EntityImage: { logicalName: 'entityimage' },
	EntityImageId: { logicalName: 'entityimageid', readOnly: true },
	ExpireChangeTrackingInDays: { logicalName: 'expirechangetrackingindays', type: 'Integer' },
	ExpireSubscriptionsInDays: { logicalName: 'expiresubscriptionsindays', type: 'Integer' },
	ExternalBaseUrl: { logicalName: 'externalbaseurl' },
	ExternalPartyCorrelationKeys: { logicalName: 'externalpartycorrelationkeys' },
	ExternalPartyEntitySettings: { logicalName: 'externalpartyentitysettings' },
	FeatureSet: { logicalName: 'featureset' },
	FiscalCalendarStart_UtcDateOnly: { logicalName: 'fiscalcalendarstart', type: 'DateTime' },
	FiscalPeriodFormat: { logicalName: 'fiscalperiodformat' },
	FiscalPeriodFormatPeriod: { logicalName: 'fiscalperiodformatperiod', type: 'Integer' },
	FiscalPeriodType: { logicalName: 'fiscalperiodtype', type: 'Integer' },
	FiscalSettingsUpdated: { logicalName: 'fiscalsettingsupdated', readOnly: true, type: 'Boolean' },
	FiscalYearDisplayCode: { logicalName: 'fiscalyeardisplaycode', type: 'Integer' },
	FiscalYearFormat: { logicalName: 'fiscalyearformat' },
	FiscalYearFormatPrefix: { logicalName: 'fiscalyearformatprefix', type: 'Integer' },
	FiscalYearFormatSuffix: { logicalName: 'fiscalyearformatsuffix', type: 'Integer' },
	FiscalYearFormatYear: { logicalName: 'fiscalyearformatyear', type: 'Integer' },
	FiscalYearPeriodConnect: { logicalName: 'fiscalyearperiodconnect' },
	FlowLogsTtlInMinutes: { logicalName: 'flowlogsttlinminutes', type: 'Integer' },
	FlowRunTimeToLiveInSeconds: { logicalName: 'flowruntimetoliveinseconds', type: 'Integer' },
	FullNameConventionCode: { logicalName: 'fullnameconventioncode', type: 'Integer' },
	FutureExpansionWindow: { logicalName: 'futureexpansionwindow', type: 'Integer' },
	GenerateAlertsForErrors: { logicalName: 'generatealertsforerrors', type: 'Boolean' },
	GenerateAlertsForInformation: { logicalName: 'generatealertsforinformation', type: 'Boolean' },
	GenerateAlertsForWarnings: { logicalName: 'generatealertsforwarnings', type: 'Boolean' },
	GetStartedPaneContentEnabled: { logicalName: 'getstartedpanecontentenabled', type: 'Boolean' },
	GlobalAppendUrlParametersEnabled: { logicalName: 'globalappendurlparametersenabled', type: 'Boolean' },
	GlobalHelpUrl: { logicalName: 'globalhelpurl' },
	GlobalHelpUrlEnabled: { logicalName: 'globalhelpurlenabled', type: 'Boolean' },
	GoalRollupExpiryTime: { logicalName: 'goalrollupexpirytime', type: 'Integer' },
	GoalRollupFrequency: { logicalName: 'goalrollupfrequency', type: 'Integer' },
	GrantAccessToNetworkService: { logicalName: 'grantaccesstonetworkservice', type: 'Boolean' },
	HashDeltaSubjectCount: { logicalName: 'hashdeltasubjectcount', type: 'Integer' },
	HashFilterKeywords: { logicalName: 'hashfilterkeywords' },
	HashMaxCount: { logicalName: 'hashmaxcount', type: 'Integer' },
	HashMinAddressCount: { logicalName: 'hashminaddresscount', type: 'Integer' },
	HighContrastThemeData: { logicalName: 'highcontrastthemedata' },
	IgnoreInternalEmail: { logicalName: 'ignoreinternalemail', type: 'Boolean' },
	ImproveSearchLoggingEnabled: { logicalName: 'improvesearchloggingenabled', type: 'Boolean' },
	InactivityTimeoutEnabled: { logicalName: 'inactivitytimeoutenabled', type: 'Boolean' },
	InactivityTimeoutInMins: { logicalName: 'inactivitytimeoutinmins', type: 'Integer' },
	InactivityTimeoutReminderInMins: { logicalName: 'inactivitytimeoutreminderinmins', type: 'Integer' },
	IncomingEmailExchangeEmailRetrievalBatchSize: { logicalName: 'incomingemailexchangeemailretrievalbatchsize', type: 'Integer' },
	InitialVersion: { logicalName: 'initialversion' },
	IntegrationUserId: { logicalName: 'integrationuserid' },
	InvoicePrefix: { logicalName: 'invoiceprefix' },
	IpBasedStorageAccessSignatureMode: { logicalName: 'ipbasedstorageaccesssignaturemode', type: 'Integer' },
	IsActionCardEnabled: { logicalName: 'isactioncardenabled', type: 'Boolean' },
	IsActionSupportFeatureEnabled: { logicalName: 'isactionsupportfeatureenabled', type: 'Boolean' },
	IsActivityAnalysisEnabled: { logicalName: 'isactivityanalysisenabled', type: 'Boolean' },
	IsAllMoneyDecimal: { logicalName: 'isallmoneydecimal', readOnly: true, type: 'Boolean' },
	IsAppMode: { logicalName: 'isappmode', type: 'Boolean' },
	IsAppointmentAttachmentSyncEnabled: { logicalName: 'isappointmentattachmentsyncenabled', type: 'Boolean' },
	IsAssignedTasksSyncEnabled: { logicalName: 'isassignedtaskssyncenabled', type: 'Boolean' },
	IsAuditEnabled: { logicalName: 'isauditenabled', type: 'Boolean' },
	IsAutoDataCaptureEnabled: { logicalName: 'isautodatacaptureenabled', type: 'Boolean' },
	IsAutoDataCaptureV2Enabled: { logicalName: 'isautodatacapturev2enabled', type: 'Boolean' },
	IsAutoInstallAppForD365InTeamsEnabled: { logicalName: 'isautoinstallappford365inteamsenabled', type: 'Boolean' },
	IsAutoSaveEnabled: { logicalName: 'isautosaveenabled', type: 'Boolean' },
	IsBaseCardStaticFieldDataEnabled: { logicalName: 'isbasecardstaticfielddataenabled', type: 'Boolean' },
	IsBasicGeospatialIntegrationEnabled: { logicalName: 'isbasicgeospatialintegrationenabled', type: 'Boolean' },
	IsBPFEntityCustomizationFeatureEnabled: { logicalName: 'isbpfentitycustomizationfeatureenabled', type: 'Boolean' },
	IsCloudFlowSavingsEnabled: { logicalName: 'iscloudflowsavingsenabled', type: 'Boolean' },
	IsClusteringEnabled: { logicalName: 'isclusteringenabled', readOnly: true, type: 'Boolean' },
	IsCollaborationExperienceEnabled: { logicalName: 'iscollaborationexperienceenabled', type: 'Boolean' },
	IsComputerUseInMCSEnabled: { logicalName: 'iscomputeruseinmcsenabled', type: 'Boolean' },
	IsConflictDetectionEnabledForMobileClient: { logicalName: 'isconflictdetectionenabledformobileclient', type: 'Boolean' },
	IsContactMailingAddressSyncEnabled: { logicalName: 'iscontactmailingaddresssyncenabled', type: 'Boolean' },
	IsContentSecurityPolicyEnabled: { logicalName: 'iscontentsecuritypolicyenabled', type: 'Boolean' },
	IsContentSecurityPolicyEnabledForCanvas: { logicalName: 'iscontentsecuritypolicyenabledforcanvas', type: 'Boolean' },
	IsContextualEmailEnabled: { logicalName: 'iscontextualemailenabled', type: 'Boolean' },
	IsContextualHelpEnabled: { logicalName: 'iscontextualhelpenabled', type: 'Boolean' },
	IsCopilotFeedbackEnabled: { logicalName: 'iscopilotfeedbackenabled', type: 'Boolean' },
	IsCuaOnHmgV2Enabled: { logicalName: 'iscuaonhmgv2enabled', type: 'Boolean' },
	IsCustomControlsInCanvasAppsEnabled: { logicalName: 'iscustomcontrolsincanvasappsenabled', type: 'Boolean' },
	IsDefaultCountryCodeCheckEnabled: { logicalName: 'isdefaultcountrycodecheckenabled', type: 'Boolean' },
	IsDelegateAccessEnabled: { logicalName: 'isdelegateaccessenabled', type: 'Boolean' },
	IsDelveActionHubIntegrationEnabled: { logicalName: 'isdelveactionhubintegrationenabled', type: 'Boolean' },
	IsDesktopFlowConnectionEmbeddingEnabled: { logicalName: 'isdesktopflowconnectionembeddingenabled', type: 'Boolean' },
	IsDesktopFlowRuntimeRepairAttendedEnabled: { logicalName: 'isdesktopflowruntimerepairattendedenabled', type: 'Boolean' },
	IsDesktopFlowRuntimeRepairUnattendedEnabled: { logicalName: 'isdesktopflowruntimerepairunattendedenabled', type: 'Boolean' },
	IsDesktopFlowSavingsEnabled: { logicalName: 'isdesktopflowsavingsenabled', type: 'Boolean' },
	IsDesktopFlowSchemaV2Enabled: { logicalName: 'isdesktopflowschemav2enabled', type: 'Boolean' },
	IsDesktopFlowVanillaImageSharingEnabled: { logicalName: 'isdesktopflowvanillaimagesharingenabled', type: 'Boolean' },
	IsDesktopFlowVersionControlEnabled: { logicalName: 'isdesktopflowversioncontrolenabled', type: 'Boolean' },
	IsDesktopFlowVersionControlEnabledByDefault: { logicalName: 'isdesktopflowversioncontrolenabledbydefault', type: 'Boolean' },
	IsDisabled: { logicalName: 'isdisabled', readOnly: true, type: 'Boolean' },
	IsDuplicateDetectionEnabled: { logicalName: 'isduplicatedetectionenabled', type: 'Boolean' },
	IsDuplicateDetectionEnabledForImport: { logicalName: 'isduplicatedetectionenabledforimport', type: 'Boolean' },
	IsDuplicateDetectionEnabledForOfflineSync: { logicalName: 'isduplicatedetectionenabledforofflinesync', type: 'Boolean' },
	IsDuplicateDetectionEnabledForOnlineCreateUpdate: { logicalName: 'isduplicatedetectionenabledforonlinecreateupdate', type: 'Boolean' },
	IsEmailAddressValidationEnabled: { logicalName: 'isemailaddressvalidationenabled', type: 'Boolean' },
	IsEmailMonitoringAllowed: { logicalName: 'isemailmonitoringallowed', type: 'Boolean' },
	IsEmailServerProfileContentFilteringEnabled: { logicalName: 'isemailserverprofilecontentfilteringenabled', type: 'Boolean' },
	IsEnabledForAllRoles: { logicalName: 'isenabledforallroles', type: 'Boolean' },
	IsExternalFileStorageEnabled: { logicalName: 'isexternalfilestorageenabled', type: 'Boolean' },
	IsExternalSearchIndexEnabled: { logicalName: 'isexternalsearchindexenabled', type: 'Boolean' },
	IsFiscalPeriodMonthBased: { logicalName: 'isfiscalperiodmonthbased', type: 'Boolean' },
	IsFolderAutoCreatedonSP: { logicalName: 'isfolderautocreatedonsp', type: 'Boolean' },
	IsFolderBasedTrackingEnabled: { logicalName: 'isfolderbasedtrackingenabled', type: 'Boolean' },
	IsFullTextSearchEnabled: { logicalName: 'isfulltextsearchenabled', type: 'Boolean' },
	IsGeospatialAzureMapsIntegrationEnabled: { logicalName: 'isgeospatialazuremapsintegrationenabled', type: 'Boolean' },
	IsHierarchicalSecurityModelEnabled: { logicalName: 'ishierarchicalsecuritymodelenabled', type: 'Boolean' },
	IsIdeasDataCollectionEnabled: { logicalName: 'isideasdatacollectionenabled', type: 'Boolean' },
	IsLUISEnabledforD365Bot: { logicalName: 'isluisenabledford365bot', type: 'Boolean' },
	IsMailboxForcedUnlockingEnabled: { logicalName: 'ismailboxforcedunlockingenabled', type: 'Boolean' },
	IsMailboxInactiveBackoffEnabled: { logicalName: 'ismailboxinactivebackoffenabled', type: 'Boolean' },
	IsManualSalesForecastingEnabled: { logicalName: 'ismanualsalesforecastingenabled', type: 'Boolean' },
	IsMobileClientOnDemandSyncEnabled: { logicalName: 'ismobileclientondemandsyncenabled', type: 'Boolean' },
	IsMobileOfflineEnabled: { logicalName: 'ismobileofflineenabled', type: 'Boolean' },
	IsModelDrivenAppsInMSTeamsEnabled: { logicalName: 'ismodeldrivenappsinmsteamsenabled', type: 'Boolean' },
	IsMoneySavingsAllowed: { logicalName: 'ismoneysavingsallowed', type: 'Boolean' },
	IsMSTeamsCollaborationEnabled: { logicalName: 'ismsteamscollaborationenabled', type: 'Boolean' },
	IsMSTeamsEnabled: { logicalName: 'ismsteamsenabled', type: 'Boolean' },
	IsMSTeamsSettingChangedByUser: { logicalName: 'ismsteamssettingchangedbyuser', type: 'Boolean' },
	IsMSTeamsUserSyncEnabled: { logicalName: 'ismsteamsusersyncenabled', type: 'Boolean' },
	IsNewAddProductExperienceEnabled: { logicalName: 'isnewaddproductexperienceenabled', type: 'Boolean' },
	IsNotesAnalysisEnabled: { logicalName: 'isnotesanalysisenabled', type: 'Boolean' },
	IsNotificationForD365InTeamsEnabled: { logicalName: 'isnotificationford365inteamsenabled', type: 'Boolean' },
	IsOfficeGraphEnabled: { logicalName: 'isofficegraphenabled', type: 'Boolean' },
	IsOneDriveEnabled: { logicalName: 'isonedriveenabled', type: 'Boolean' },
	IsPAIEnabled: { logicalName: 'ispaienabled', type: 'Boolean' },
	IsPDFGenerationEnabled: { logicalName: 'ispdfgenerationenabled' },
	IsPerProcessCapacityOverageEnabled: { logicalName: 'isperprocesscapacityoverageenabled', type: 'Boolean' },
	IsPlaybookEnabled: { logicalName: 'isplaybookenabled', type: 'Boolean' },
	IsPresenceEnabled: { logicalName: 'ispresenceenabled', type: 'Boolean' },
	IsPreviewEnabledForActionCard: { logicalName: 'ispreviewenabledforactioncard', type: 'Boolean' },
	IsPreviewForAutoCaptureEnabled: { logicalName: 'ispreviewforautocaptureenabled', type: 'Boolean' },
	IsPreviewForEmailMonitoringAllowed: { logicalName: 'ispreviewforemailmonitoringallowed', type: 'Boolean' },
	IsPriceListMandatory: { logicalName: 'ispricelistmandatory', type: 'Boolean' },
	IsProcessCapacityAutoClaimEnabled: { logicalName: 'isprocesscapacityautoclaimenabled', type: 'Boolean' },
	IsProcessMiningEnabled: { logicalName: 'isprocessminingenabled', type: 'Boolean' },
	IsQuickCreateEnabledForOpportunityClose: { logicalName: 'isquickcreateenabledforopportunityclose', type: 'Boolean' },
	IsReadAuditEnabled: { logicalName: 'isreadauditenabled', type: 'Boolean' },
	IsRelationshipInsightsEnabled: { logicalName: 'isrelationshipinsightsenabled', type: 'Boolean' },
	IsResourceBookingExchangeSyncEnabled: { logicalName: 'isresourcebookingexchangesyncenabled', type: 'Boolean' },
	IsRichTextNotesEnabled: { logicalName: 'isrichtextnotesenabled', type: 'Boolean' },
	IsRpaAutoscaleAadJoinEnabled: { logicalName: 'isrpaautoscaleaadjoinenabled', type: 'Boolean' },
	IsRpaAutoscaleEnabled: { logicalName: 'isrpaautoscaleenabled', type: 'Boolean' },
	IsRpaBoxCrossGeoEnabled: { logicalName: 'isrpaboxcrossgeoenabled', type: 'Boolean' },
	IsRpaBoxEnabled: { logicalName: 'isrpaboxenabled', type: 'Boolean' },
	IsRpaUnattendedEnabled: { logicalName: 'isrpaunattendedenabled', type: 'Boolean' },
	IsSalesAssistantEnabled: { logicalName: 'issalesassistantenabled', type: 'Boolean' },
	IsSendCuaAuditLogToPurviewEnabled: { logicalName: 'issendcuaauditlogtopurviewenabled', type: 'Boolean' },
	IsSharingInOrgAllowed: { logicalName: 'issharinginorgallowed', type: 'Boolean' },
	IsSOPIntegrationEnabled: { logicalName: 'issopintegrationenabled', type: 'Boolean' },
	IsTextWrapEnabled: { logicalName: 'istextwrapenabled', type: 'Boolean' },
	IsUploadCuaLogToDataverseEnabled: { logicalName: 'isuploadcualogtodataverseenabled', type: 'Boolean' },
	IsUserAccessAuditEnabled: { logicalName: 'isuseraccessauditenabled', type: 'Boolean' },
	ISVIntegrationCode: { logicalName: 'isvintegrationcode', type: 'Integer' },
	IsWorkQueueSavingsEnabled: { logicalName: 'isworkqueuesavingsenabled', type: 'Boolean' },
	IsWriteInProductsAllowed: { logicalName: 'iswriteinproductsallowed', type: 'Boolean' },
	KaPrefix: { logicalName: 'kaprefix' },
	KbPrefix: { logicalName: 'kbprefix' },
	KMSettings: { logicalName: 'kmsettings' },
	LanguageCode: { logicalName: 'languagecode', type: 'Integer' },
	LegacyAppToggle: { logicalName: 'legacyapptoggle', type: 'Integer' },
	LocaleId: { logicalName: 'localeid', type: 'Integer' },
	LongDateFormatCode: { logicalName: 'longdateformatcode', type: 'Integer' },
	LookupCharacterCountBeforeResolve: { logicalName: 'lookupcharactercountbeforeresolve', type: 'Integer' },
	LookupResolveDelayMS: { logicalName: 'lookupresolvedelayms', type: 'Integer' },
	MailboxIntermittentIssueMinRange: { logicalName: 'mailboxintermittentissueminrange', type: 'Integer' },
	MailboxPermanentIssueMinRange: { logicalName: 'mailboxpermanentissueminrange', type: 'Integer' },
	MaxActionStepsInBPF: { logicalName: 'maxactionstepsinbpf', type: 'Integer' },
	MaxAllowedPendingRollupJobCount: { logicalName: 'maxallowedpendingrollupjobcount', type: 'Integer' },
	MaxAllowedPendingRollupJobPercentage: { logicalName: 'maxallowedpendingrollupjobpercentage', type: 'Integer' },
	MaxAppointmentDurationDays: { logicalName: 'maxappointmentdurationdays', type: 'Integer' },
	MaxConditionsForMobileOfflineFilters: { logicalName: 'maxconditionsformobileofflinefilters', type: 'Integer' },
	MaxDepthForHierarchicalSecurityModel: { logicalName: 'maxdepthforhierarchicalsecuritymodel', type: 'Integer' },
	MaxFolderBasedTrackingMappings: { logicalName: 'maxfolderbasedtrackingmappings', type: 'Integer' },
	MaximumActiveBusinessProcessFlowsAllowedPerEntity: { logicalName: 'maximumactivebusinessprocessflowsallowedperentity', type: 'Integer' },
	MaximumDynamicPropertiesAllowed: { logicalName: 'maximumdynamicpropertiesallowed', type: 'Integer' },
	MaximumEntitiesWithActiveSLA: { logicalName: 'maximumentitieswithactivesla', type: 'Integer' },
	MaximumSLAKPIPerEntityWithActiveSLA: { logicalName: 'maximumslakpiperentitywithactivesla', type: 'Integer' },
	MaximumTrackingNumber: { logicalName: 'maximumtrackingnumber', type: 'Integer' },
	MaxProductsInBundle: { logicalName: 'maxproductsinbundle', type: 'Integer' },
	MaxRecordsForExportToExcel: { logicalName: 'maxrecordsforexporttoexcel', type: 'Integer' },
	MaxRecordsForLookupFilters: { logicalName: 'maxrecordsforlookupfilters', type: 'Integer' },
	MaxRollupFieldsPerEntity: { logicalName: 'maxrollupfieldsperentity', type: 'Integer' },
	MaxRollupFieldsPerOrg: { logicalName: 'maxrollupfieldsperorg', type: 'Integer' },
	MaxSLAItemsPerSLA: { logicalName: 'maxslaitemspersla', type: 'Integer' },
	MaxSupportedInternetExplorerVersion: { logicalName: 'maxsupportedinternetexplorerversion', readOnly: true, type: 'Integer' },
	MaxUploadFileSize: { logicalName: 'maxuploadfilesize', type: 'Integer' },
	MaxVerboseLoggingMailbox: { logicalName: 'maxverboseloggingmailbox', readOnly: true, type: 'Integer' },
	MaxVerboseLoggingSyncCycles: { logicalName: 'maxverboseloggingsynccycles', readOnly: true, type: 'Integer' },
	MetadataSyncLastTimeOfNeverExpiredDeletedObjects_UtcDateAndTime: { logicalName: 'metadatasynclasttimeofneverexpireddeletedobjects', readOnly: true, type: 'DateTime' },
	MetadataSyncTimestamp: { logicalName: 'metadatasynctimestamp', readOnly: true, type: 'Integer' },
	MicrosoftFlowEnvironment: { logicalName: 'microsoftflowenvironment' },
	MinAddressBookSyncInterval: { logicalName: 'minaddressbooksyncinterval', type: 'Integer' },
	MinOfflineSyncInterval: { logicalName: 'minofflinesyncinterval', type: 'Integer' },
	MinOutlookSyncInterval: { logicalName: 'minoutlooksyncinterval', type: 'Integer' },
	MobileOfflineMinLicenseProd: { logicalName: 'mobileofflineminlicenseprod', readOnly: true, type: 'Integer' },
	MobileOfflineMinLicenseTrial: { logicalName: 'mobileofflineminlicensetrial', readOnly: true, type: 'Integer' },
	MobileOfflineSyncInterval: { logicalName: 'mobileofflinesyncinterval', type: 'Integer' },
	ModernAdvancedFindFiltering: { logicalName: 'modernadvancedfindfiltering', type: 'Boolean' },
	ModernAppDesignerCoauthoringEnabled: { logicalName: 'modernappdesignercoauthoringenabled', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	MultiColumnSortEnabled: { logicalName: 'multicolumnsortenabled', type: 'Integer' },
	Name: { logicalName: 'name' },
	NaturalLanguageAssistFilter: { logicalName: 'naturallanguageassistfilter', type: 'Boolean' },
	NegativeCurrencyFormatCode: { logicalName: 'negativecurrencyformatcode', type: 'Integer' },
	NegativeFormatCode: { logicalName: 'negativeformatcode', type: 'Integer' },
	NewSearchExperienceEnabled: { logicalName: 'newsearchexperienceenabled', type: 'Boolean' },
	NextCustomObjectTypeCode: { logicalName: 'nextcustomobjecttypecode', readOnly: true, type: 'Integer' },
	NextTrackingNumber: { logicalName: 'nexttrackingnumber', type: 'Integer' },
	NotifyMailboxOwnerOfEmailServerLevelAlerts: { logicalName: 'notifymailboxownerofemailserverlevelalerts', type: 'Boolean' },
	NumberFormat: { logicalName: 'numberformat' },
	NumberGroupFormat: { logicalName: 'numbergroupformat' },
	NumberSeparator: { logicalName: 'numberseparator' },
	OfficeAppsAutoDeploymentEnabled: { logicalName: 'officeappsautodeploymentenabled', type: 'Boolean' },
	OfficeGraphDelveUrl: { logicalName: 'officegraphdelveurl' },
	OOBPriceCalculationEnabled: { logicalName: 'oobpricecalculationenabled', type: 'Boolean' },
	OptOutSchemaV2EnabledByDefault: { logicalName: 'optoutschemav2enabledbydefault', type: 'Boolean' },
	OrderPrefix: { logicalName: 'orderprefix' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	OrganizationState: { logicalName: 'organizationstate', readOnly: true, type: 'Integer' },
	OrgDbOrgSettings: { logicalName: 'orgdborgsettings' },
	OrgInsightsEnabled: { logicalName: 'orginsightsenabled', type: 'Boolean' },
	PaiPreviewScenarioEnabled: { logicalName: 'paipreviewscenarioenabled', type: 'Boolean' },
	ParsedTableColumnPrefix: { logicalName: 'parsedtablecolumnprefix', readOnly: true },
	ParsedTablePrefix: { logicalName: 'parsedtableprefix', readOnly: true },
	PastExpansionWindow: { logicalName: 'pastexpansionwindow', type: 'Integer' },
	PcfDatasetGridEnabled: { logicalName: 'pcfdatasetgridenabled' },
	PerformACTSyncAfter_UtcDateAndTime: { logicalName: 'performactsyncafter', type: 'DateTime' },
	Picture: { logicalName: 'picture' },
	PinpointLanguageCode: { logicalName: 'pinpointlanguagecode', type: 'Integer' },
	PluginTraceLogSetting: { logicalName: 'plugintracelogsetting', type: 'Integer' },
	PMDesignator: { logicalName: 'pmdesignator' },
	PostMessageWhitelistDomains: { logicalName: 'postmessagewhitelistdomains' },
	PowerAppsMakerBotEnabled: { logicalName: 'powerappsmakerbotenabled', type: 'Boolean' },
	PowerBIAllowCrossRegionOperations: { logicalName: 'powerbiallowcrossregionoperations', type: 'Boolean' },
	PowerBIAutomaticPermissionsAssignment: { logicalName: 'powerbiautomaticpermissionsassignment', type: 'Boolean' },
	PowerBIComponentsCreate: { logicalName: 'powerbicomponentscreate', type: 'Boolean' },
	PowerBiFeatureEnabled: { logicalName: 'powerbifeatureenabled', type: 'Boolean' },
	PricingDecimalPrecision: { logicalName: 'pricingdecimalprecision', type: 'Integer' },
	PrivacyStatementUrl: { logicalName: 'privacystatementurl' },
	PrivilegeUserGroupId: { logicalName: 'privilegeusergroupid' },
	PrivReportingGroupId: { logicalName: 'privreportinggroupid' },
	PrivReportingGroupName: { logicalName: 'privreportinggroupname' },
	ProductRecommendationsEnabled: { logicalName: 'productrecommendationsenabled', type: 'Boolean' },
	QualifyLeadAdditionalOptions: { logicalName: 'qualifyleadadditionaloptions' },
	QuickActionToOpenRecordsInSidePaneEnabled: { logicalName: 'quickactiontoopenrecordsinsidepaneenabled', type: 'Boolean' },
	QuickFindRecordLimitEnabled: { logicalName: 'quickfindrecordlimitenabled', type: 'Boolean' },
	QuotePrefix: { logicalName: 'quoteprefix' },
	RecalculateSLA: { logicalName: 'recalculatesla', type: 'Boolean' },
	RecurrenceDefaultNumberOfOccurrences: { logicalName: 'recurrencedefaultnumberofoccurrences', type: 'Integer' },
	RecurrenceExpansionJobBatchInterval: { logicalName: 'recurrenceexpansionjobbatchinterval', type: 'Integer' },
	RecurrenceExpansionJobBatchSize: { logicalName: 'recurrenceexpansionjobbatchsize', type: 'Integer' },
	RecurrenceExpansionSynchCreateMax: { logicalName: 'recurrenceexpansionsynchcreatemax', type: 'Integer' },
	ReferenceSiteMapXml: { logicalName: 'referencesitemapxml' },
	ReleaseCadence: { logicalName: 'releasecadence', type: 'Integer' },
	ReleaseChannel: { logicalName: 'releasechannel', type: 'Integer' },
	ReleaseWaveName: { logicalName: 'releasewavename' },
	RelevanceSearchEnabledByPlatform: { logicalName: 'relevancesearchenabledbyplatform', type: 'Boolean' },
	RelevanceSearchModifiedOn_UtcDateAndTime: { logicalName: 'relevancesearchmodifiedon', type: 'DateTime' },
	RenderSecureIFrameForEmail: { logicalName: 'rendersecureiframeforemail', type: 'Boolean' },
	ReportingGroupId: { logicalName: 'reportinggroupid' },
	ReportingGroupName: { logicalName: 'reportinggroupname' },
	ReportScriptErrors: { logicalName: 'reportscripterrors', type: 'Integer' },
	RequireApprovalForQueueEmail: { logicalName: 'requireapprovalforqueueemail', type: 'Boolean' },
	RequireApprovalForUserEmail: { logicalName: 'requireapprovalforuseremail', type: 'Boolean' },
	ResolveSimilarUnresolvedEmailAddress: { logicalName: 'resolvesimilarunresolvedemailaddress', type: 'Boolean' },
	RestrictGuestUserAccess: { logicalName: 'restrictGuestUserAccess', type: 'Boolean' },
	RestrictStatusUpdate: { logicalName: 'restrictstatusupdate', type: 'Boolean' },
	ReverseProxyIpAddresses: { logicalName: 'reverseproxyipaddresses' },
	RiErrorStatus: { logicalName: 'rierrorstatus', type: 'Integer' },
	SameSiteModeForSessionCookie: { logicalName: 'samesitemodeforsessioncookie', type: 'Integer' },
	SampleDataImportId: { logicalName: 'sampledataimportid' },
	SavingEventsTTLInMinutes: { logicalName: 'savingeventsttlinminutes', type: 'Integer' },
	SchemaNamePrefix: { logicalName: 'schemanameprefix' },
	SendBulkEmailInUCI: { logicalName: 'sendbulkemailinuci', type: 'Boolean' },
	ServeStaticResourcesFromAzureCDN: { logicalName: 'servestaticresourcesfromazurecdn', type: 'Boolean' },
	SessionRecordingEnabled: { logicalName: 'sessionrecordingenabled', type: 'Boolean' },
	SessionTimeoutEnabled: { logicalName: 'sessiontimeoutenabled', type: 'Boolean' },
	SessionTimeoutInMins: { logicalName: 'sessiontimeoutinmins', type: 'Integer' },
	SessionTimeoutReminderInMins: { logicalName: 'sessiontimeoutreminderinmins', type: 'Integer' },
	SharePointDeploymentType: { logicalName: 'sharepointdeploymenttype', type: 'Integer' },
	ShareToPreviousOwnerOnAssign: { logicalName: 'sharetopreviousowneronassign', type: 'Boolean' },
	ShowKBArticleDeprecationNotification: { logicalName: 'showkbarticledeprecationnotification', type: 'Boolean' },
	ShowWeekNumber: { logicalName: 'showweeknumber', type: 'Boolean' },
	SignupOutlookDownloadFWLink: { logicalName: 'signupoutlookdownloadfwlink' },
	SiteMapXml: { logicalName: 'sitemapxml' },
	SlaPauseStates: { logicalName: 'slapausestates' },
	SocialInsightsEnabled: { logicalName: 'socialinsightsenabled', type: 'Boolean' },
	SocialInsightsInstance: { logicalName: 'socialinsightsinstance' },
	SocialInsightsTermsAccepted: { logicalName: 'socialinsightstermsaccepted', type: 'Boolean' },
	SortId: { logicalName: 'sortid', type: 'Integer' },
	SqlAccessGroupId: { logicalName: 'sqlaccessgroupid' },
	SqlAccessGroupName: { logicalName: 'sqlaccessgroupname' },
	SQMEnabled: { logicalName: 'sqmenabled', type: 'Boolean' },
	SupportUserId: { logicalName: 'supportuserid' },
	SuppressSLA: { logicalName: 'suppresssla', type: 'Boolean' },
	SuppressValidationEmails: { logicalName: 'suppressvalidationemails', type: 'Boolean' },
	SyncBulkOperationBatchSize: { logicalName: 'syncbulkoperationbatchsize', type: 'Integer' },
	SyncBulkOperationMaxLimit: { logicalName: 'syncbulkoperationmaxlimit', type: 'Integer' },
	SyncOptInSelection: { logicalName: 'syncoptinselection', type: 'Boolean' },
	SyncOptInSelectionStatus: { logicalName: 'syncoptinselectionstatus', type: 'Integer' },
	SystemUserId: { logicalName: 'systemuserid' },
	TableScopedDVSearchInApps: { logicalName: 'tablescopeddvsearchinapps', type: 'Boolean' },
	TagMaxAggressiveCycles: { logicalName: 'tagmaxaggressivecycles', type: 'Integer' },
	TagPollingPeriod: { logicalName: 'tagpollingperiod', type: 'Integer' },
	TaskBasedFlowEnabled: { logicalName: 'taskbasedflowenabled', type: 'Boolean' },
	TeamsChatDataSync: { logicalName: 'teamschatdatasync', type: 'Boolean' },
	TelemetryInstrumentationKey: { logicalName: 'telemetryinstrumentationkey' },
	TextAnalyticsEnabled: { logicalName: 'textanalyticsenabled', type: 'Boolean' },
	TimeFormatCode: { logicalName: 'timeformatcode', type: 'Integer' },
	TimeFormatString: { logicalName: 'timeformatstring' },
	TimeSeparator: { logicalName: 'timeseparator' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TokenExpiry: { logicalName: 'tokenexpiry', type: 'Integer' },
	TokenKey: { logicalName: 'tokenkey' },
	TraceLogMaximumAgeInDays: { logicalName: 'tracelogmaximumageindays', type: 'Integer' },
	TrackingPrefix: { logicalName: 'trackingprefix' },
	TrackingTokenIdBase: { logicalName: 'trackingtokenidbase', type: 'Integer' },
	TrackingTokenIdDigits: { logicalName: 'trackingtokeniddigits', type: 'Integer' },
	UniqueSpecifierLength: { logicalName: 'uniquespecifierlength', type: 'Integer' },
	UnresolveEmailAddressIfMultipleMatch: { logicalName: 'unresolveemailaddressifmultiplematch', type: 'Boolean' },
	UseInbuiltRuleForDefaultPricelistSelection: { logicalName: 'useinbuiltrulefordefaultpricelistselection', type: 'Boolean' },
	UseLegacyRendering: { logicalName: 'uselegacyrendering', type: 'Boolean' },
	UsePositionHierarchy: { logicalName: 'usepositionhierarchy', type: 'Boolean' },
	UseQuickFindViewForGridSearch: { logicalName: 'usequickfindviewforgridsearch', type: 'Boolean' },
	UserAccessAuditingInterval: { logicalName: 'useraccessauditinginterval', type: 'Integer' },
	UseReadForm: { logicalName: 'usereadform', type: 'Boolean' },
	UserGroupId: { logicalName: 'usergroupid' },
	UserRatingEnabled: { logicalName: 'userratingenabled', type: 'Boolean' },
	UseSkypeProtocol: { logicalName: 'useskypeprotocol', type: 'Boolean' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	V3CalloutConfigHash: { logicalName: 'v3calloutconfighash', readOnly: true },
	ValidationMode: { logicalName: 'validationmode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WebResourceHash: { logicalName: 'webresourcehash' },
	WeekStartDayCode: { logicalName: 'weekstartdaycode', type: 'Integer' },
	WidgetProperties: { logicalName: 'widgetproperties' },
	YammerGroupId: { logicalName: 'yammergroupid', type: 'Integer' },
	YammerNetworkPermalink: { logicalName: 'yammernetworkpermalink' },
	YammerOAuthAccessTokenExpired: { logicalName: 'yammeroauthaccesstokenexpired', type: 'Boolean' },
	YammerPostMethod: { logicalName: 'yammerpostmethod', type: 'Integer' },
	YearStartWeekCode: { logicalName: 'yearstartweekcode', type: 'Integer' },
};

/**
 * Organization WebApi class for early-bound style coding
 * Usage: const organization = new OrganizationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class OrganizationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IOrganizationApi>(entity, 'organization', 'organizations', OrganizationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface OrganizationApi extends IOrganizationApi { }
