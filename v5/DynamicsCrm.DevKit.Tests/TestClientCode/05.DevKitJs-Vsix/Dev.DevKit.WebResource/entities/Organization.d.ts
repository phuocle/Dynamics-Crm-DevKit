//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class OrganizationApi {
		/**
		* DynamicsCrm.DevKit OrganizationApi
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
		/** ACI Web Endpoint URL. */
		ACIWebEndpointUrl: string | null;
		/** Unique identifier of the template to be used for acknowledgement when a user unsubscribes. */
		AcknowledgementTemplateId: string | null;
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
		ApplicationBasedAccessControlMode: OptionSet.Organization.ApplicationBasedAccessControlMode | null;
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
		BaseCurrencyId: string | null;
		/** Number of decimal places that can be used for the base currency. */
		readonly BaseCurrencyPrecision: number | null;
		/** Symbol used for the base currency. */
		readonly BaseCurrencySymbol: string | null;
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
		BusinessClosureCalendarId: string | null;
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
		readonly CreatedBy: string | null;
		/** Date and time when the organization was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the organization. */
		readonly CreatedOnBehalfBy: string | null;
		/** Enable Initial state of newly created products to be Active instead of Draft */
		CreateProductsWithoutParentInActiveState: boolean | null;
		/** Default time to live in minutes for new records in the Flow Logs entity for CUA logs. */
		CuaFlowLogsTtlInMinutes: number | null;
		/** Set the level of detail the computer use logs allow. */
		CuaFlowLogsVerbosity: OptionSet.Organization.CuaFlowLogsVerbosity | null;
		/** Number of decimal places that can be used for currency. */
		CurrencyDecimalPrecision: number | null;
		/** Indicates whether to display money fields with currency code or currency symbol. */
		CurrencyDisplayOption: OptionSet.Organization.CurrencyDisplayOption | null;
		/** Information about how currency symbols are placed throughout Microsoft Dynamics CRM. */
		CurrencyFormatCode: OptionSet.Organization.CurrencyFormatCode | null;
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
		DateFormatCode: OptionSet.Organization.DateFormatCode | null;
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
		DefaultEmailServerProfileId: string | null;
		/** XML string containing the default email settings that are applied when a user or queue is created. */
		DefaultEmailSettings: string | null;
		/** Unique identifier of the default mobile offline profile. */
		DefaultMobileOfflineProfileId: string | null;
		/** Type of default recurrence end range date. */
		DefaultRecurrenceEndRangeType: OptionSet.Organization.DefaultRecurrenceEndRangeType | null;
		/** Default theme data for the organization. */
		DefaultThemeData: string | null;
		/** Unique identifier of the delegated admin user for the organization. */
		DelegatedAdminUserId: string | null;
		/** Default time to live in minutes for new desktop flow queue log records. */
		DesktopFlowQueueLogsTtlInMinutes: number | null;
		/** Toggle the activation of the Power Automate Desktop Flow run action logs. */
		DesktopFlowRunActionLogsStatus: OptionSet.Organization.DesktopFlowRunActionLogsStatus | null;
		/** What verbosity level the Power Automate Desktop Flow Run Action Logs allow. */
		DesktopFlowRunActionLogVerbosity: OptionSet.Organization.DesktopFlowRunActionLogVerbosity | null;
		/** Where the Power Automate Desktop Flow Run Action logs are stored. */
		DesktopFlowRunActionLogVersion: OptionSet.Organization.DesktopFlowRunActionLogVersion | null;
		/** Reason for disabling the organization. */
		readonly DisabledReason: string | null;
		/** Indicates whether Social Care is disabled. */
		DisableSocialCare: boolean | null;
		/** Disable sharing system labels for the organization. */
		DisableSystemLabelsCacheSharing: boolean | null;
		/** Discount calculation method for the QOOI product. */
		DiscountCalculationMethod: OptionSet.Organization.DiscountCalculationMethod | null;
		/** Indicates whether or not navigation tour is displayed. */
		DisplayNavigationTour: boolean | null;
		/** Select if you want to use the Email Router or server-side synchronization for email processing. */
		EmailConnectionChannel: OptionSet.Organization.EmailConnectionChannel | null;
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
		EntityImage_Timestamp: number | null;
		EntityImage_URL: string | null;
		/** For internal use only. */
		readonly EntityImageId: string | null;
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
		FiscalPeriodFormatPeriod: OptionSet.Organization.FiscalPeriodFormatPeriod | null;
		/** Type of fiscal period used throughout Microsoft CRM. */
		FiscalPeriodType: number | null;
		/** Information that specifies whether the fiscal settings have been updated. */
		readonly FiscalSettingsUpdated: boolean | null;
		/** Information that specifies whether the fiscal year should be displayed based on the start date or the end date of the fiscal year. */
		FiscalYearDisplayCode: number | null;
		/** Information that specifies how the name of the fiscal year is displayed throughout Microsoft CRM. */
		FiscalYearFormat: string | null;
		/** Prefix for the display of the fiscal year. */
		FiscalYearFormatPrefix: OptionSet.Organization.FiscalYearFormatPrefix | null;
		/** Suffix for the display of the fiscal year. */
		FiscalYearFormatSuffix: OptionSet.Organization.FiscalYearFormatSuffix | null;
		/** Format for the year. */
		FiscalYearFormatYear: OptionSet.Organization.FiscalYearFormatYear | null;
		/** Information that specifies how the names of the fiscal year and the fiscal period should be connected when displayed together. */
		FiscalYearPeriodConnect: string | null;
		/** Default time to live in minutes for new records in the Flow Logs entity. */
		FlowLogsTtlInMinutes: number | null;
		/** Time to live (in seconds) for flow run */
		FlowRunTimeToLiveInSeconds: number | null;
		/** Order in which names are to be displayed throughout Microsoft CRM. */
		FullNameConventionCode: OptionSet.Organization.FullNameConventionCode | null;
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
		IntegrationUserId: string | null;
		/** Prefix to use for all invoice numbers throughout Microsoft Dynamics 365. */
		InvoicePrefix: string | null;
		/** IP Based SAS mode. */
		IpBasedStorageAccessSignatureMode: OptionSet.Organization.IpBasedStorageAccessSignatureMode | null;
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
		IsAutoInstallAppForD365InTeamsEnabled: boolean | null;
		/** Information on whether auto save is enabled. */
		IsAutoSaveEnabled: boolean | null;
		IsBaseCardStaticFieldDataEnabled: boolean | null;
		/** Determines whether users can make use of basic Geospatial featuers in Canvas apps. */
		IsBasicGeospatialIntegrationEnabled: boolean | null;
		/** Information that specifies whether BPF Entity Customization Feature is enabled */
		IsBPFEntityCustomizationFeatureEnabled: boolean | null;
		/** Indicates whether Power Automate savings feature is enabled for Cloudflow. */
		IsCloudFlowSavingsEnabled: boolean | null;
		/** Read-only flag indicating whether clustering is enabled for the organization. */
		readonly IsClusteringEnabled: boolean | null;
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
		ISVIntegrationCode: OptionSet.Organization.ISVIntegrationCode | null;
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
		LegacyAppToggle: OptionSet.Organization.LegacyAppToggle | null;
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
		readonly ModifiedBy: string | null;
		/** Date and time when the organization was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the organization. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Show the sort by button on views */
		MultiColumnSortEnabled: number | null;
		/** Name of the organization. The name is set when Microsoft CRM is installed and should not be changed. */
		Name: string | null;
		/** Enables Natural Language Assist Filter. */
		NaturalLanguageAssistFilter: boolean | null;
		/** Information that specifies how negative currency numbers are displayed throughout Microsoft Dynamics 365. */
		NegativeCurrencyFormatCode: number | null;
		/** Information that specifies how negative numbers are displayed throughout Microsoft CRM. */
		NegativeFormatCode: OptionSet.Organization.NegativeFormatCode | null;
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
		readonly OrganizationId: string | null;
		/** Indicates the organization lifecycle state */
		readonly OrganizationState: OptionSet.Organization.OrganizationState | null;
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
		PluginTraceLogSetting: OptionSet.Organization.PluginTraceLogSetting | null;
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
		PrivilegeUserGroupId: string | null;
		/** For internal use only. */
		PrivReportingGroupId: string | null;
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
		ReleaseChannel: OptionSet.Organization.ReleaseChannel | null;
		/** Release Wave Applied to Environment. */
		ReleaseWaveName: string | null;
		/** Indicates whether relevance search was enabled for the environment as part of Dataverse's relevance search on-by-default sweep */
		RelevanceSearchEnabledByPlatform: boolean | null;
		/** This setting contains the last modified date for relevance search setting that appears as a toggle in PPAC. */
		RelevanceSearchModifiedOn_UtcDateAndTime: Date | null;
		/** Flag to render the body of email in the Web form in an IFRAME with the security='restricted' attribute set. This is additional security but can cause a credentials prompt. */
		RenderSecureIFrameForEmail: boolean | null;
		/** For internal use only. */
		ReportingGroupId: string | null;
		/** For internal use only. */
		ReportingGroupName: string | null;
		/** Picklist for selecting the organization preference for reporting scripting errors. */
		ReportScriptErrors: OptionSet.Organization.ReportScriptErrors | null;
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
		SameSiteModeForSessionCookie: OptionSet.Organization.SameSiteModeForSessionCookie | null;
		/** Unique identifier of the sample data import job. */
		SampleDataImportId: string | null;
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
		SharePointDeploymentType: OptionSet.Organization.SharePointDeploymentType | null;
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
		SqlAccessGroupId: string | null;
		/** For internal use only. */
		SqlAccessGroupName: string | null;
		/** Setting for SQM data collection, 0 no, 1 yes enabled */
		SQMEnabled: boolean | null;
		/** Unique identifier of the support user for the organization. */
		SupportUserId: string | null;
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
		SyncOptInSelectionStatus: OptionSet.Organization.SyncOptInSelectionStatus | null;
		/** Unique identifier of the system user for the organization. */
		SystemUserId: string | null;
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
		TimeFormatCode: OptionSet.Organization.TimeFormatCode | null;
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
		UserGroupId: string | null;
		/** Enable the user rating feature to show the NSAT score and comment to maker */
		UserRatingEnabled: boolean | null;
		/** Indicates default protocol selected for organization. */
		UseSkypeProtocol: boolean | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Hash of the V3 callout configuration file. */
		readonly V3CalloutConfigHash: string | null;
		/** Validation mode for apps in this environment */
		ValidationMode: OptionSet.Organization.ValidationMode | null;
		/** Version number of the organization. */
		readonly VersionNumber: number | null;
		/** Hash value of web resources. */
		WebResourceHash: string | null;
		/** Designated first day of the week throughout Microsoft Dynamics 365. */
		WeekStartDayCode: OptionSet.Organization.WeekStartDayCode | null;
		/** For Internal use only. */
		WidgetProperties: string | null;
		/** Denotes the Yammer group ID */
		YammerGroupId: number | null;
		/** Denotes the Yammer network permalink */
		YammerNetworkPermalink: string | null;
		/** Denotes whether the OAuth access token for Yammer network has expired */
		YammerOAuthAccessTokenExpired: boolean | null;
		/** Internal Use Only */
		YammerPostMethod: OptionSet.Organization.YammerPostMethod | null;
		/** Information that specifies how the first week of the year is specified in Microsoft Dynamics 365. */
		YearStartWeekCode: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** ACI Web Endpoint URL. */
			readonly ACIWebEndpointUrl: string;
			/** Unique identifier of the template to be used for acknowledgement when a user unsubscribes. */
			readonly AcknowledgementTemplateId: string;
			/** Information on whether filtering activity based on entity in app. */
			readonly ActivityTypeFilter: string;
			/** Whether to show only activities configured in this app or all activities in the 'New activity' button. */
			readonly ActivityTypeFilterV2: string;
			/** Flag to indicate if the display column options on a view in model-driven apps is enabled */
			readonly AdvancedColumnEditorEnabled: string;
			/** Flag to indicate if the advanced column filtering in a view in model-driven apps is enabled */
			readonly AdvancedColumnFilteringEnabled: string;
			/** Flag to indicate if the advanced filtering on all tables in a model-driven app is enabled */
			readonly AdvancedFilteringEnabled: string;
			/** Flag to indicate if the Advanced Lookup feature is enabled for lookup controls */
			readonly AdvancedLookupEnabled: string;
			/** Enables advanced lookup in grid edit filter panel */
			readonly AdvancedLookupInEditFilter: string;
			/** Indicates whether Azure AI Foundry model types for AI Prompts are enabled. */
			readonly AiPromptsAzureAIFoundryModelTypesEnabled: string;
			/** Indicates whether Basic model types for AI Prompts are enabled. */
			readonly AiPromptsBasicModelTypesEnabled: string;
			/** Indicates whether AI Prompts feature is enabled. */
			readonly AiPromptsEnabled: string;
			/** Indicates whether Premium model types for AI Prompts are enabled. */
			readonly AiPromptsPremiumModelTypesEnabled: string;
			/** Indicates whether Standard model types for AI Prompts are enabled. */
			readonly AiPromptsStandardModelTypesEnabled: string;
			/** Indicates whether background address book synchronization in Microsoft Office Outlook is allowed. */
			readonly AllowAddressBookSyncs: string;
			/** Information that specifies whether all application users are allowed to access the environment */
			readonly AllowApplicationUserAccess: string;
			/** Indicates whether automatic response creation is allowed. */
			readonly AllowAutoResponseCreation: string;
			/** Indicates whether automatic unsubscribe is allowed. */
			readonly AllowAutoUnsubscribe: string;
			/** Indicates whether automatic unsubscribe acknowledgement email is allowed to send. */
			readonly AllowAutoUnsubscribeAcknowledgement: string;
			/** Indicates whether Outlook Client message bar advertisement is allowed. */
			readonly AllowClientMessageBarAd: string;
			/** Information on whether connectors on power fx actions is enabled. */
			readonly AllowConnectorsOnPowerFXActions: string;
			/** Information that specifies the Applications that are in allow list for the accessing DV resources. */
			readonly AllowedApplicationsForDVAccess: string;
			/** Information that specifies the range of IP addresses that are in allow list for the firewall. */
			readonly AllowedIpRangeForFirewall: string;
			/** Information that specifies the range of IP addresses that are in allowed list for generating the SAS URIs. */
			readonly AllowedIpRangeForStorageAccessSignatures: string;
			/** Specifies list of allowed IP addresses for firewall. */
			readonly AllowedListOfIpRangesForFirewall: string;
			/** Allow upload or download of certain mime types. */
			readonly AllowedMimeTypes: string;
			/** Information that specifies the List of Service Tags that should be allowed by the firewall. */
			readonly AllowedServiceTagsForFirewall: string;
			/** Indicates whether auditing of changes to entity is allowed when no attributes have changed. */
			readonly AllowEntityOnlyAudit: string;
			/** Enables ends-with searches in grids with the use of a leading wildcard on all tables in the environment */
			readonly AllowLeadingWildcardsInGridSearch: string;
			/** Enables ends-with searches in grids with the use of a leading wildcard on all tables in the environment */
			readonly AllowLeadingWildcardsInQuickFind: string;
			/** Enable access to legacy web client UI */
			readonly AllowLegacyClientExperience: string;
			/** Enable embedding of certain legacy dialogs in Unified Interface browser client */
			readonly AllowLegacyDialogsEmbedding: string;
			/** Indicates whether marketing emails execution is allowed. */
			readonly AllowMarketingEmailExecution: string;
			/** Information that specifies whether Microsoft Trusted Service Tags are allowed */
			readonly AllowMicrosoftTrustedServiceTags: string;
			/** Indicates whether background offline synchronization in Microsoft Office Outlook is allowed. */
			readonly AllowOfflineScheduledSyncs: string;
			/** Indicates whether scheduled synchronizations to Outlook are allowed. */
			readonly AllowOutlookScheduledSyncs: string;
			/** Control whether the organization Allow Redirect Legacy Admin Settings To Modern UI */
			readonly AllowRedirectAdminSettingsToModernUI: string;
			/** Indicates whether users are allowed to send email to unresolved parties (parties must still have an email address). */
			readonly AllowUnresolvedPartiesOnEmailSend: string;
			/** Indicates whether individuals can select their form mode preference in their personal options. */
			readonly AllowUserFormModePreference: string;
			/** Flag to indicate if allow end users to hide system views in model-driven apps is enabled */
			readonly AllowUsersHidingSystemViews: string;
			/** Indicates whether the showing tablet application notification bars in a browser is allowed. */
			readonly AllowUsersSeeAppdownloadMessage: string;
			/** Warning : Allowing  Virtual Entity plugin execution on nested pipeline does not offer transactional support. i.e. if call in native entity pipeline fails, then virtual entity operation will not be reverted. */
			readonly AllowVirtualEntityPluginExecutionOnNestedPipeline: string;
			/** Indicates whether Web-based export of grids to Microsoft Office Excel is allowed. */
			readonly AllowWebExcelExport: string;
			/** AM designator to use throughout Microsoft Dynamics CRM. */
			readonly AMDesignator: string;
			/** Indicates whether the appDesignerExperience is enabled for the organization. */
			readonly AppDesignerExperienceEnabled: string;
			/** Application Based Access Control Mode. 0 is Disabled, 1 is audit mode , 2 is enforcement mode */
			readonly ApplicationBasedAccessControlMode: string;
			/** Information on whether rich editing experience for Appointment is enabled. */
			readonly AppointmentRichEditorExperience: string;
			/** Information on whether Teams meeting experience for Appointment is enabled. */
			readonly AppointmentWithTeamsMeeting: string;
			/** Whether Teams meetings experience for appointments is enabled. */
			readonly AppointmentWithTeamsMeetingV2: string;
			/** Indicates whether Power Automate Automation Center preview features will be available for all users in this organization. */
			readonly AreAutomationCenterPreviewFeaturesEnabled: string;
			/** Indicates whether Process Insights Preview features are enabled in this organization. */
			readonly AreProcessInsightsPreviewFeaturesEnabled: string;
			/** Audit Retention Period settings stored in Organization Database. */
			readonly AuditRetentionPeriod: string;
			/** Audit Retention Period settings stored in Organization Database. */
			readonly AuditRetentionPeriodV2: string;
			/** Audit Settings of the organization */
			readonly AuditSettings: string;
			/** Select whether to auto apply the default customer entitlement on case creation. */
			readonly AutoApplyDefaultonCaseCreate: string;
			/** Select whether to auto apply the default customer entitlement on case update. */
			readonly AutoApplyDefaultonCaseUpdate: string;
			/** Indicates whether to Auto-apply SLA on case record update after SLA was manually applied. */
			readonly AutoApplySLA: string;
			/** For internal use only. */
			readonly AzureSchedulerJobCollectionName: string;
			/** Unique identifier of the base currency of the organization. */
			readonly BaseCurrencyId: string;
			/** Number of decimal places that can be used for the base currency. */
			readonly BaseCurrencyPrecision: string;
			/** Symbol used for the base currency. */
			readonly BaseCurrencySymbol: string;
			readonly BaseISOCurrencyCode: string;
			/** Api Key to be used in requests to Bing Maps services. */
			readonly BingMapsApiKey: string;
			/** Enable this feature to prevent makers from accessing and downloading session transcripts */
			readonly BlockAccessToSessionTranscriptsForCopilotStudio: string;
			/** Prevent makers from allowing end-users to use their credentials during authentication to use connectors, actions, flows, and triggers that are connected to an agent */
			readonly BlockCopilotAuthorAuthentication: string;
			/** Information that specifies the Applications that are in block list for the accessing DV resources. */
			readonly BlockedApplicationsForDVAccess: string;
			/** Prevent upload or download of certain attachment types that are considered dangerous. */
			readonly BlockedAttachments: string;
			/** Prevent upload or download of certain mime types that are considered dangerous. */
			readonly BlockedMimeTypes: string;
			/** Enable this feature to block access to session transcripts and conversational transcripts from being written to Dataverse for an individual environment */
			readonly BlockTranscriptRecordingForCopilotStudio: string;
			/** Enable this feature to block URLs and images in Copilot Studio and agent responses for an individual environment. URLs will be replaced with placeholders. */
			readonly BlockUrlsInResponsesForCopilotStudio: string;
			/** Display cards in expanded state for interactive dashboard */
			readonly BoundDashboardDefaultCardExpanded: string;
			/** Prefix used for bulk operation numbering. */
			readonly BulkOperationPrefix: string;
			/** BusinessCardOptions */
			readonly BusinessCardOptions: string;
			/** Unique identifier of the business closure calendar of organization. */
			readonly BusinessClosureCalendarId: string;
			/** Calendar type for the system. Set to Gregorian US by default. */
			readonly CalendarType: string;
			/** Prefix used for campaign numbering. */
			readonly CampaignPrefix: string;
			/** Indicates whether the organization can opt out of the new Relevance search experience (released in Oct 2020) */
			readonly CanOptOutNewSearchExperience: string;
			/** Flag to cascade Update on incident. */
			readonly CascadeStatusUpdate: string;
			/** Prefix to use for all cases throughout Microsoft Dynamics 365. */
			readonly CasePrefix: string;
			/** Type the prefix to use for all categories in Microsoft Dynamics 365. */
			readonly CategoryPrefix: string;
			/** Client Features to be enabled as an XML BLOB. */
			readonly ClientFeatureSet: string;
			/** Policy configuration for CSP */
			readonly ContentSecurityPolicyConfiguration: string;
			/** Content Security Policy configuration for Canvas apps. */
			readonly ContentSecurityPolicyConfigurationForCanvas: string;
			/** Content Security Policy Options. */
			readonly ContentSecurityPolicyOptions: string;
			/** Content Security Policy Report Uri. */
			readonly ContentSecurityPolicyReportUri: string;
			/** Prefix to use for all contracts throughout Microsoft Dynamics 365. */
			readonly ContractPrefix: string;
			/** Refresh rate for copresence data in seconds. */
			readonly CopresenceRefreshRate: string;
			/** Indicates whether the feature CortanaProactiveExperience Flow processes should be enabled for the organization. */
			readonly CortanaProactiveExperienceEnabled: string;
			/** Unique identifier of the user who created the organization. */
			readonly CreatedBy: string;
			/** Date and time when the organization was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the organization. */
			readonly CreatedOnBehalfBy: string;
			/** Enable Initial state of newly created products to be Active instead of Draft */
			readonly CreateProductsWithoutParentInActiveState: string;
			/** Default time to live in minutes for new records in the Flow Logs entity for CUA logs. */
			readonly CuaFlowLogsTtlInMinutes: string;
			/** Set the level of detail the computer use logs allow. */
			readonly CuaFlowLogsVerbosity: string;
			/** Number of decimal places that can be used for currency. */
			readonly CurrencyDecimalPrecision: string;
			/** Indicates whether to display money fields with currency code or currency symbol. */
			readonly CurrencyDisplayOption: string;
			/** Information about how currency symbols are placed throughout Microsoft Dynamics CRM. */
			readonly CurrencyFormatCode: string;
			/** Symbol used for currency throughout Microsoft Dynamics 365. */
			readonly CurrencySymbol: string;
			/** Current bulk operation number. Deprecated. Use SetAutoNumberSeed message. */
			readonly CurrentBulkOperationNumber: string;
			/** Current campaign number. Deprecated. Use SetAutoNumberSeed message. */
			readonly CurrentCampaignNumber: string;
			/** First case number to use. Deprecated. Use SetAutoNumberSeed message. */
			readonly CurrentCaseNumber: string;
			/** Enter the first number to use for Categories. Deprecated. Use SetAutoNumberSeed message. */
			readonly CurrentCategoryNumber: string;
			/** First contract number to use. Deprecated. Use SetAutoNumberSeed message. */
			readonly CurrentContractNumber: string;
			/** Import sequence to use. */
			readonly CurrentImportSequenceNumber: string;
			/** First invoice number to use. Deprecated. Use SetAutoNumberSeed message. */
			readonly CurrentInvoiceNumber: string;
			/** Enter the first number to use for knowledge articles. Deprecated. Use SetAutoNumberSeed message. */
			readonly CurrentKaNumber: string;
			/** First article number to use. Deprecated. Use SetAutoNumberSeed message. */
			readonly CurrentKbNumber: string;
			/** First order number to use. Deprecated. Use SetAutoNumberSeed message. */
			readonly CurrentOrderNumber: string;
			/** First parsed table number to use. */
			readonly CurrentParsedTableNumber: string;
			/** First quote number to use. Deprecated. Use SetAutoNumberSeed message. */
			readonly CurrentQuoteNumber: string;
			/** Information about how the date is displayed throughout Microsoft CRM. */
			readonly DateFormatCode: string;
			/** String showing how the date is displayed throughout Microsoft CRM. */
			readonly DateFormatString: string;
			/** Character used to separate the month, the day, and the year in dates throughout Microsoft Dynamics 365. */
			readonly DateSeparator: string;
			/** Number of days before we migrate email description to blob. */
			readonly DaysBeforeEmailDescriptionIsMigrated: string;
			/** Days of inactivity before sync is disabled for a Teams Chat. */
			readonly DaysBeforeInactiveTeamsChatSyncDisabled: string;
			/** The maximum value for the Mobile Offline setting Days since record last modified */
			readonly DaysSinceRecordLastModifiedMaxValue: string;
			/** Symbol used for decimal in Microsoft Dynamics 365. */
			readonly DecimalSymbol: string;
			/** Text area to enter default country code. */
			readonly DefaultCountryCode: string;
			/** Name of the default crm custom. */
			readonly DefaultCrmCustomName: string;
			/** Unique identifier of the default email server profile. */
			readonly DefaultEmailServerProfileId: string;
			/** XML string containing the default email settings that are applied when a user or queue is created. */
			readonly DefaultEmailSettings: string;
			/** Unique identifier of the default mobile offline profile. */
			readonly DefaultMobileOfflineProfileId: string;
			/** Type of default recurrence end range date. */
			readonly DefaultRecurrenceEndRangeType: string;
			/** Default theme data for the organization. */
			readonly DefaultThemeData: string;
			/** Unique identifier of the delegated admin user for the organization. */
			readonly DelegatedAdminUserId: string;
			/** Default time to live in minutes for new desktop flow queue log records. */
			readonly DesktopFlowQueueLogsTtlInMinutes: string;
			/** Toggle the activation of the Power Automate Desktop Flow run action logs. */
			readonly DesktopFlowRunActionLogsStatus: string;
			/** What verbosity level the Power Automate Desktop Flow Run Action Logs allow. */
			readonly DesktopFlowRunActionLogVerbosity: string;
			/** Where the Power Automate Desktop Flow Run Action logs are stored. */
			readonly DesktopFlowRunActionLogVersion: string;
			/** Reason for disabling the organization. */
			readonly DisabledReason: string;
			/** Indicates whether Social Care is disabled. */
			readonly DisableSocialCare: string;
			/** Disable sharing system labels for the organization. */
			readonly DisableSystemLabelsCacheSharing: string;
			/** Discount calculation method for the QOOI product. */
			readonly DiscountCalculationMethod: string;
			/** Indicates whether or not navigation tour is displayed. */
			readonly DisplayNavigationTour: string;
			/** Select if you want to use the Email Router or server-side synchronization for email processing. */
			readonly EmailConnectionChannel: string;
			/** Flag to turn email correlation on or off. */
			readonly EmailCorrelationEnabled: string;
			/** Normal polling frequency used for sending email in Microsoft Office Outlook. */
			readonly EmailSendPollingPeriod: string;
			/** Determines whether records merged through the merge dialog in UCI are merged asynchronously */
			readonly EnableAsyncMergeAPIForUCI: string;
			/** Enable Integration with Bing Maps */
			readonly EnableBingMapsIntegration: string;
			/** Note: By enabling this feature, you will also enable the automatic creation of enviornment variables when adding data sources for your apps. */
			readonly EnableCanvasAppsInSolutionsByDefault: string;
			/** Enable this feature to allow cross-geo boundary sharing of aggregated analytics data if your preferred data location for Viva Insights is different than the location of your environment */
			readonly EnableCopilotStudioCrossGeoShareDataWithVivaInsights: string;
			/** (Deprecated) Enable this feature to allow Copilot Studio to share aggregated analytics data for custom agents with Viva Insights for an individual environment */
			readonly EnableCopilotStudioShareDataWithVI: string;
			/** Enable this feature to allow Copilot Studio to share aggregated analytics data for custom agents with Viva Insights for an individual environment */
			readonly EnableCopilotStudioShareDataWithVivaInsights: string;
			/** Enables the Environment Settings App */
			readonly EnableEnvironmentSettingsApp: string;
			/** Indicates whether the creation of flows is within a solution by default for this organization. */
			readonly EnableFlowsInSolutionByDefault: string;
			/** Organizations with this attribute set to true will be granted a grace period and excluded from the initial world wide enablement of 'creation of flows within a solution by default' functionality. Once the grace period expires, the functionality will be enabled in your organization. */
			readonly EnableFlowsInSolutionByDefaultGracePeriod: string;
			/** Enable Integration with Immersive Skype */
			readonly EnableImmersiveSkypeIntegration: string;
			/** Information that specifies whether IP based cookie binding is enabled */
			readonly EnableIpBasedCookieBinding: string;
			/** Information that specifies whether IP based firewall rule is enabled */
			readonly EnableIpBasedFirewallRule: string;
			/** Information that specifies whether IP based firewall rule is enabled in Audit Only Mode */
			readonly EnableIpBasedFirewallRuleInAuditMode: string;
			/** Information that specifies whether IP based SAS URI generation rule is enabled */
			readonly EnableIpBasedStorageAccessSignatureRule: string;
			/** Indicates whether the user has enabled or disabled Live Persona Card feature in UCI. */
			readonly EnableLivePersonaCardUCI: string;
			/** Indicates whether the user has enabled or disabled LivePersonCardIntegration in Office. */
			readonly EnableLivePersonCardIntegrationInOffice: string;
			/** Select to enable learning path auhtoring. */
			readonly EnableLPAuthoring: string;
			/** Control whether the organization Switch Maker Portal to Classic */
			readonly EnableMakerSwitchToClassic: string;
			/** Enable Integration with Microsoft Flow */
			readonly EnableMicrosoftFlowIntegration: string;
			/** Enable pricing calculations on a Create call. */
			readonly EnablePricingOnCreate: string;
			/** Enable the redirection to Modern Settings */
			readonly EnableRedirectionToModernSettings: string;
			/** Enable or disable Sensitivity Labels in Email. */
			readonly EnableSensitivityLabels: string;
			/** Use Smart Matching. */
			readonly EnableSmartMatching: string;
			/** Leave empty to use default setting. Set to on/off to enable/disable CDN for UCI. */
			readonly EnableUnifiedClientCDN: string;
			/** Enable site map and commanding update */
			readonly EnableUnifiedInterfaceShellRefresh: string;
			/** Organization setting to enforce read only plugins. */
			readonly EnforceReadOnlyPlugins: string;
			/** The default image for the entity. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** For internal use only. */
			readonly EntityImageId: string;
			/** Maximum number of days to keep change tracking deleted records */
			readonly ExpireChangeTrackingInDays: string;
			/** Maximum number of days before deleting inactive subscriptions. */
			readonly ExpireSubscriptionsInDays: string;
			/** Specify the base URL to use to look for external document suggestions. */
			readonly ExternalBaseUrl: string;
			/** XML string containing the ExternalPartyEnabled entities correlation keys for association of existing External Party instance entities to newly created IsExternalPartyEnabled entities.For internal use only */
			readonly ExternalPartyCorrelationKeys: string;
			/** XML string containing the ExternalPartyEnabled entities settings. */
			readonly ExternalPartyEntitySettings: string;
			/** Features to be enabled as an XML BLOB. */
			readonly FeatureSet: string;
			/** Start date for the fiscal period that is to be used throughout Microsoft CRM. */
			readonly FiscalCalendarStart_UtcDateOnly: string;
			/** Information that specifies how the name of the fiscal period is displayed throughout Microsoft CRM. */
			readonly FiscalPeriodFormat: string;
			/** Format in which the fiscal period will be displayed. */
			readonly FiscalPeriodFormatPeriod: string;
			/** Type of fiscal period used throughout Microsoft CRM. */
			readonly FiscalPeriodType: string;
			/** Information that specifies whether the fiscal settings have been updated. */
			readonly FiscalSettingsUpdated: string;
			/** Information that specifies whether the fiscal year should be displayed based on the start date or the end date of the fiscal year. */
			readonly FiscalYearDisplayCode: string;
			/** Information that specifies how the name of the fiscal year is displayed throughout Microsoft CRM. */
			readonly FiscalYearFormat: string;
			/** Prefix for the display of the fiscal year. */
			readonly FiscalYearFormatPrefix: string;
			/** Suffix for the display of the fiscal year. */
			readonly FiscalYearFormatSuffix: string;
			/** Format for the year. */
			readonly FiscalYearFormatYear: string;
			/** Information that specifies how the names of the fiscal year and the fiscal period should be connected when displayed together. */
			readonly FiscalYearPeriodConnect: string;
			/** Default time to live in minutes for new records in the Flow Logs entity. */
			readonly FlowLogsTtlInMinutes: string;
			/** Time to live (in seconds) for flow run */
			readonly FlowRunTimeToLiveInSeconds: string;
			/** Order in which names are to be displayed throughout Microsoft CRM. */
			readonly FullNameConventionCode: string;
			/** Specifies the maximum number of months in future for which the recurring activities can be created. */
			readonly FutureExpansionWindow: string;
			/** Indicates whether alerts will be generated for errors. */
			readonly GenerateAlertsForErrors: string;
			/** Indicates whether alerts will be generated for information. */
			readonly GenerateAlertsForInformation: string;
			/** Indicates whether alerts will be generated for warnings. */
			readonly GenerateAlertsForWarnings: string;
			/** Indicates whether Get Started content is enabled for this organization. */
			readonly GetStartedPaneContentEnabled: string;
			/** Indicates whether the append URL parameters is enabled. */
			readonly GlobalAppendUrlParametersEnabled: string;
			/** URL for the web page global help. */
			readonly GlobalHelpUrl: string;
			/** Indicates whether the customizable global help is enabled. */
			readonly GlobalHelpUrlEnabled: string;
			/** Number of days after the goal's end date after which the rollup of the goal stops automatically. */
			readonly GoalRollupExpiryTime: string;
			/** Number of hours between automatic rollup jobs . */
			readonly GoalRollupFrequency: string;
			/** For internal use only. */
			readonly GrantAccessToNetworkService: string;
			/** Maximum difference allowed between subject keywords count of the email messaged to be correlated */
			readonly HashDeltaSubjectCount: string;
			/** Filter Subject Keywords */
			readonly HashFilterKeywords: string;
			/** Maximum number of subject keywords or recipients used for correlation */
			readonly HashMaxCount: string;
			/** Minimum number of recipients required to match for email messaged to be correlated */
			readonly HashMinAddressCount: string;
			/** High contrast theme data for the organization. */
			readonly HighContrastThemeData: string;
			/** Indicates whether incoming email sent by internal Microsoft Dynamics 365 users or queues should be tracked. */
			readonly IgnoreInternalEmail: string;
			/** Indicates whether an organization has consented to sharing search query data to help improve search results */
			readonly ImproveSearchLoggingEnabled: string;
			/** Information that specifies whether Inactivity timeout is enabled */
			readonly InactivityTimeoutEnabled: string;
			/** Inactivity timeout in minutes */
			readonly InactivityTimeoutInMins: string;
			/** Inactivity timeout reminder in minutes */
			readonly InactivityTimeoutReminderInMins: string;
			/** Setting for the Async Service Mailbox Queue. Defines the retrieval batch size of exchange server. */
			readonly IncomingEmailExchangeEmailRetrievalBatchSize: string;
			/** Initial version of the organization. */
			readonly InitialVersion: string;
			/** Unique identifier of the integration user for the organization. */
			readonly IntegrationUserId: string;
			/** Prefix to use for all invoice numbers throughout Microsoft Dynamics 365. */
			readonly InvoicePrefix: string;
			/** IP Based SAS mode. */
			readonly IpBasedStorageAccessSignatureMode: string;
			/** Indicates whether the feature Action Card should be enabled for the organization. */
			readonly IsActionCardEnabled: string;
			/** Information that specifies whether Action Support Feature is enabled */
			readonly IsActionSupportFeatureEnabled: string;
			/** Indicates whether the feature Relationship Analytics should be enabled for the organization. */
			readonly IsActivityAnalysisEnabled: string;
			/** Indicates whether all money attributes are converted to decimal. */
			readonly IsAllMoneyDecimal: string;
			/** Indicates whether loading of Microsoft Dynamics 365 in a browser window that does not have address, tool, and menu bars is enabled. */
			readonly IsAppMode: string;
			/** Enable or disable attachments sync for outlook and exchange. */
			readonly IsAppointmentAttachmentSyncEnabled: string;
			/** Enable or disable assigned tasks sync for outlook and exchange. */
			readonly IsAssignedTasksSyncEnabled: string;
			/** Enable or disable auditing of changes. */
			readonly IsAuditEnabled: string;
			/** Indicates whether the feature Auto Capture should be enabled for the organization. */
			readonly IsAutoDataCaptureEnabled: string;
			/** Indicates whether the V2 feature of Auto Capture should be enabled for the organization. */
			readonly IsAutoDataCaptureV2Enabled: string;
			readonly IsAutoInstallAppForD365InTeamsEnabled: string;
			/** Information on whether auto save is enabled. */
			readonly IsAutoSaveEnabled: string;
			readonly IsBaseCardStaticFieldDataEnabled: string;
			/** Determines whether users can make use of basic Geospatial featuers in Canvas apps. */
			readonly IsBasicGeospatialIntegrationEnabled: string;
			/** Information that specifies whether BPF Entity Customization Feature is enabled */
			readonly IsBPFEntityCustomizationFeatureEnabled: string;
			/** Indicates whether Power Automate savings feature is enabled for Cloudflow. */
			readonly IsCloudFlowSavingsEnabled: string;
			/** Read-only flag indicating whether clustering is enabled for the organization. */
			readonly IsClusteringEnabled: string;
			readonly IsCollaborationExperienceEnabled: string;
			/** Indicates whether Computer Use in MCS feature is enabled in this organization. */
			readonly IsComputerUseInMCSEnabled: string;
			/** Information that specifies whether conflict detection for mobile client is enabled. */
			readonly IsConflictDetectionEnabledForMobileClient: string;
			/** Enable or disable mailing address sync for outlook and exchange. */
			readonly IsContactMailingAddressSyncEnabled: string;
			/** Indicates whether Content Security Policy has been enabled for the organization. */
			readonly IsContentSecurityPolicyEnabled: string;
			/** Indicates whether Content Security Policy has been enabled for this organization's Canvas apps. */
			readonly IsContentSecurityPolicyEnabledForCanvas: string;
			/** Indicates whether Contextual email experience is enabled on this organization */
			readonly IsContextualEmailEnabled: string;
			/** Select to enable Contextual Help in UCI. */
			readonly IsContextualHelpEnabled: string;
			/** Determines whether users can provide feedback Copilot experiences. */
			readonly IsCopilotFeedbackEnabled: string;
			/** Indicates whether CUA on Hosted Groups V2 feature is enabled in this organization. */
			readonly IsCuaOnHmgV2Enabled: string;
			/** Indicates whether Custom Controls in canvas PowerApps feature has been enabled for the organization. */
			readonly IsCustomControlsInCanvasAppsEnabled: string;
			/** Enable or disable country code selection. */
			readonly IsDefaultCountryCodeCheckEnabled: string;
			/** Enable Delegation Access content */
			readonly IsDelegateAccessEnabled: string;
			/** Indicates whether the feature Action Hub should be enabled for the organization. */
			readonly IsDelveActionHubIntegrationEnabled: string;
			/** Indicates whether connection embedding in Desktop Flows is enabled in this organization. */
			readonly IsDesktopFlowConnectionEmbeddingEnabled: string;
			/** Indicates whether the Desktop Flows UI Automation Runtime Repair for Attended feature for this organization. */
			readonly IsDesktopFlowRuntimeRepairAttendedEnabled: string;
			/** Indicates whether the Desktop Flows UI Automation Runtime Repair for Unattended feature for this organization. */
			readonly IsDesktopFlowRuntimeRepairUnattendedEnabled: string;
			/** Indicates whether Power Automate savings feature is enabled for Desktopflow. */
			readonly IsDesktopFlowSavingsEnabled: string;
			/** Indicates whether v2 schema for Desktop Flows is enabled in this organization. */
			readonly IsDesktopFlowSchemaV2Enabled: string;
			/** Indicates whether Windows Vanilla Image will be available for Desktop Flow users in this organization. */
			readonly IsDesktopFlowVanillaImageSharingEnabled: string;
			/** Indicates whether version control for Desktop Flows is enabled in this organization. */
			readonly IsDesktopFlowVersionControlEnabled: string;
			/** Indicates if this organization will opt-in to automatically to enable version control for Desktop Flows. */
			readonly IsDesktopFlowVersionControlEnabledByDefault: string;
			/** Information that specifies whether the organization is disabled. */
			readonly IsDisabled: string;
			/** Indicates whether duplicate detection of records is enabled. */
			readonly IsDuplicateDetectionEnabled: string;
			/** Indicates whether duplicate detection of records during import is enabled. */
			readonly IsDuplicateDetectionEnabledForImport: string;
			/** Indicates whether duplicate detection of records during offline synchronization is enabled. */
			readonly IsDuplicateDetectionEnabledForOfflineSync: string;
			/** Indicates whether duplicate detection during online create or update is enabled. */
			readonly IsDuplicateDetectionEnabledForOnlineCreateUpdate: string;
			/** Information on whether Smart Email Address Validation is enabled. */
			readonly IsEmailAddressValidationEnabled: string;
			/** Allow tracking recipient activity on sent emails. */
			readonly IsEmailMonitoringAllowed: string;
			/** Enable Email Server Profile content filtering */
			readonly IsEmailServerProfileContentFilteringEnabled: string;
			/** Indicates whether appmodule is enabled for all roles */
			readonly IsEnabledForAllRoles: string;
			/** Indicates whether the organization's files are being stored in Azure. */
			readonly IsExternalFileStorageEnabled: string;
			/** Select whether data can be synchronized with an external search index. */
			readonly IsExternalSearchIndexEnabled: string;
			/** Indicates whether the fiscal period is displayed as the month number. */
			readonly IsFiscalPeriodMonthBased: string;
			/** Select whether folders should be automatically created on SharePoint. */
			readonly IsFolderAutoCreatedonSP: string;
			/** Enable or disable folder based tracking for Server Side Sync. */
			readonly IsFolderBasedTrackingEnabled: string;
			/** Indicates whether full-text search for Quick Find entities should be enabled for the organization. */
			readonly IsFullTextSearchEnabled: string;
			/** Indicates whether geospatial capabilities leveraging Azure Maps are enabled. */
			readonly IsGeospatialAzureMapsIntegrationEnabled: string;
			/** Enable Hierarchical Security Model */
			readonly IsHierarchicalSecurityModelEnabled: string;
			/** Indicates whether data collection for ideas in canvas PowerApps has been enabled. */
			readonly IsIdeasDataCollectionEnabled: string;
			/** Give Consent to use LUIS in Dynamics 365 Bot */
			readonly IsLUISEnabledforD365Bot: string;
			/** Enable or disable forced unlocking for Server Side Sync mailboxes. */
			readonly IsMailboxForcedUnlockingEnabled: string;
			/** Enable or disable mailbox keep alive for Server Side Sync. */
			readonly IsMailboxInactiveBackoffEnabled: string;
			/** Indicates whether Manual Sales Forecasting feature has been enabled for the organization. */
			readonly IsManualSalesForecastingEnabled: string;
			/** Information that specifies whether mobile client on demand sync is enabled. */
			readonly IsMobileClientOnDemandSyncEnabled: string;
			/** Indicates whether the feature MobileOffline should be enabled for the organization. */
			readonly IsMobileOfflineEnabled: string;
			/** Indicates whether Model Apps can be embedded within Microsoft Teams. This is a tenant admin controlled preview/experimental feature. */
			readonly IsModelDrivenAppsInMSTeamsEnabled: string;
			/** Indicates whether the maker can create Power Automate money based saving rules. */
			readonly IsMoneySavingsAllowed: string;
			/** Indicates whether Microsoft Teams Collaboration feature has been enabled for the organization. */
			readonly IsMSTeamsCollaborationEnabled: string;
			/** Indicates whether Microsoft Teams integration has been enabled for the organization. */
			readonly IsMSTeamsEnabled: string;
			/** Indicates whether the user has enabled or disabled Microsoft Teams integration. */
			readonly IsMSTeamsSettingChangedByUser: string;
			/** Indicates whether Microsoft Teams User Sync feature has been enabled for the organization. */
			readonly IsMSTeamsUserSyncEnabled: string;
			/** Indicates whether new add product experience is enabled. */
			readonly IsNewAddProductExperienceEnabled: string;
			/** Indicates whether the feature Notes Analysis should be enabled for the organization. */
			readonly IsNotesAnalysisEnabled: string;
			readonly IsNotificationForD365InTeamsEnabled: string;
			/** Indicates whether the feature OfficeGraph should be enabled for the organization. */
			readonly IsOfficeGraphEnabled: string;
			/** Indicates whether the feature One Drive should be enabled for the organization. */
			readonly IsOneDriveEnabled: string;
			/** Indicates whether PAI feature has been enabled for the organization. */
			readonly IsPAIEnabled: string;
			/** Indicates whether PDF Generation feature has been enabled for the organization. */
			readonly IsPDFGenerationEnabled: string;
			/** Indicates whether the Per Process overage feature is enabled in this organization. */
			readonly IsPerProcessCapacityOverageEnabled: string;
			/** Indicates whether playbook feature has been enabled for the organization. */
			readonly IsPlaybookEnabled: string;
			/** Information on whether IM presence is enabled. */
			readonly IsPresenceEnabled: string;
			/** Indicates whether the Preview feature for Action Card should be enabled for the organization. */
			readonly IsPreviewEnabledForActionCard: string;
			/** Indicates whether the feature Auto Capture should be enabled for the organization at Preview Settings. */
			readonly IsPreviewForAutoCaptureEnabled: string;
			/** Is Preview For Email Monitoring Allowed. */
			readonly IsPreviewForEmailMonitoringAllowed: string;
			/** Indicates whether PriceList is mandatory for adding existing products to sales entities. */
			readonly IsPriceListMandatory: string;
			/** Indicates whether the Process capacity auto-claim feature is enabled in this organization. */
			readonly IsProcessCapacityAutoClaimEnabled: string;
			/** Indicates whether Process Mining is enabled in this organization. */
			readonly IsProcessMiningEnabled: string;
			/** Select whether to use the standard Out-of-box Opportunity Close experience or opt to for a customized experience. */
			readonly IsQuickCreateEnabledForOpportunityClose: string;
			/** Enable or disable auditing of read operations. */
			readonly IsReadAuditEnabled: string;
			/** Indicates whether the feature Relationship Insights should be enabled for the organization. */
			readonly IsRelationshipInsightsEnabled: string;
			/** Indicates if the synchronization of user resource booking with Exchange is enabled at organization level. */
			readonly IsResourceBookingExchangeSyncEnabled: string;
			/** Indicates whether rich text editor for notes experience is enabled on this organization */
			readonly IsRichTextNotesEnabled: string;
			/** Indicates whether AAD Join for RPA Autoscale is enabled in this organization.. */
			readonly IsRpaAutoscaleAadJoinEnabled: string;
			/** Indicates whether Autoscale feature for RPA is enabled in this organization. */
			readonly IsRpaAutoscaleEnabled: string;
			/** Indicates whether RPA Box feature is enabled in this organization in locations outside the tenant's geographical location. */
			readonly IsRpaBoxCrossGeoEnabled: string;
			/** Indicates whether RPA Box feature is enabled in this organization. */
			readonly IsRpaBoxEnabled: string;
			/** Indicates whether Unattended runs feature for RPA is enabled in this organization. */
			readonly IsRpaUnattendedEnabled: string;
			/** Indicates whether Sales Assistant mobile app has been enabled for the organization. */
			readonly IsSalesAssistantEnabled: string;
			/** Indicates whether sending CUA audit logs to Purview is enabled. */
			readonly IsSendCuaAuditLogToPurviewEnabled: string;
			readonly IsSharingInOrgAllowed: string;
			/** Enable sales order processing integration. */
			readonly IsSOPIntegrationEnabled: string;
			/** Information on whether text wrap is enabled. */
			readonly IsTextWrapEnabled: string;
			/** Indicates whether CUA log upload to Dataverse is enabled. */
			readonly IsUploadCuaLogToDataverseEnabled: string;
			/** Enable or disable auditing of user access. */
			readonly IsUserAccessAuditEnabled: string;
			/** Indicates whether loading of Microsoft Dynamics 365 in a browser window that does not have address, tool, and menu bars is enabled. */
			readonly ISVIntegrationCode: string;
			/** Indicates whether Power Automate savings feature is enabled for WorkQueue. */
			readonly IsWorkQueueSavingsEnabled: string;
			/** Indicates whether Write-in Products can be added to Opportunity/Quote/Order/Invoice or not. */
			readonly IsWriteInProductsAllowed: string;
			/** Type the prefix to use for all knowledge articles in Microsoft Dynamics 365. */
			readonly KaPrefix: string;
			/** Prefix to use for all articles in Microsoft Dynamics 365. */
			readonly KbPrefix: string;
			/** XML string containing the Knowledge Management settings that are applied in Knowledge Management Wizard. */
			readonly KMSettings: string;
			/** Preferred language for the organization. */
			readonly LanguageCode: string;
			/** Show legacy app for admins */
			readonly LegacyAppToggle: string;
			/** Unique identifier of the locale of the organization. */
			readonly LocaleId: string;
			/** Information that specifies how the Long Date format is displayed in Microsoft Dynamics 365. */
			readonly LongDateFormatCode: string;
			/** Minimum number of characters that should be entered in the lookup control before resolving for suggestions */
			readonly LookupCharacterCountBeforeResolve: string;
			/** Minimum delay (in milliseconds) between consecutive inputs in a lookup control that will trigger a search for suggestions */
			readonly LookupResolveDelayMS: string;
			/** Lower Threshold For Mailbox Intermittent Issue. */
			readonly MailboxIntermittentIssueMinRange: string;
			/** Lower Threshold For Mailbox Permanent Issue. */
			readonly MailboxPermanentIssueMinRange: string;
			/** Maximum number of actionsteps allowed in a BPF */
			readonly MaxActionStepsInBPF: string;
			/** Maximum Allowed Pending Rollup Job Count */
			readonly MaxAllowedPendingRollupJobCount: string;
			/** Percentage Of Entity Table Size For Kicking Off Bootstrap Job */
			readonly MaxAllowedPendingRollupJobPercentage: string;
			/** Maximum number of days an appointment can last. */
			readonly MaxAppointmentDurationDays: string;
			/** Maximum number of conditions allowed for mobile offline filters */
			readonly MaxConditionsForMobileOfflineFilters: string;
			/** Maximum depth for hierarchy security propagation. */
			readonly MaxDepthForHierarchicalSecurityModel: string;
			/** Maximum number of Folder Based Tracking mappings user can add */
			readonly MaxFolderBasedTrackingMappings: string;
			/** Maximum number of active business process flows allowed per entity */
			readonly MaximumActiveBusinessProcessFlowsAllowedPerEntity: string;
			/** Restrict the maximum number of product properties for a product family/bundle */
			readonly MaximumDynamicPropertiesAllowed: string;
			/** Maximum number of active SLA allowed per entity in online */
			readonly MaximumEntitiesWithActiveSLA: string;
			/** Maximum number of SLA KPI per active SLA allowed for entity in online */
			readonly MaximumSLAKPIPerEntityWithActiveSLA: string;
			/** Maximum tracking number before recycling takes place. */
			readonly MaximumTrackingNumber: string;
			/** Restrict the maximum no of items in a bundle */
			readonly MaxProductsInBundle: string;
			/** Maximum number of records that will be exported to a static Microsoft Office Excel worksheet when exporting from the grid. */
			readonly MaxRecordsForExportToExcel: string;
			/** Maximum number of lookup and picklist records that can be selected by user for filtering. */
			readonly MaxRecordsForLookupFilters: string;
			/** Maximum Rollup Fields Per Entity */
			readonly MaxRollupFieldsPerEntity: string;
			/** Maximum Rollup Fields Per Organization */
			readonly MaxRollupFieldsPerOrg: string;
			readonly MaxSLAItemsPerSLA: string;
			/** The maximum version of IE to run browser emulation for in Outlook client */
			readonly MaxSupportedInternetExplorerVersion: string;
			/** Maximum allowed size of an attachment. */
			readonly MaxUploadFileSize: string;
			/** Maximum number of mailboxes that can be toggled for verbose logging */
			readonly MaxVerboseLoggingMailbox: string;
			/** Maximum number of sync cycles for which verbose logging will be enabled by default */
			readonly MaxVerboseLoggingSyncCycles: string;
			/** What is the last date/time where there are metadata tracking deleted objects that have never been outside of the expiration period. */
			readonly MetadataSyncLastTimeOfNeverExpiredDeletedObjects_UtcDateAndTime: string;
			/** Contains the maximum version number for attributes used by metadata synchronization that have changed. */
			readonly MetadataSyncTimestamp: string;
			/** (Deprecated) Environment selected for Integration with Microsoft Flow */
			readonly MicrosoftFlowEnvironment: string;
			/** Normal polling frequency used for address book synchronization in Microsoft Office Outlook. */
			readonly MinAddressBookSyncInterval: string;
			/** Normal polling frequency used for background offline synchronization in Microsoft Office Outlook. */
			readonly MinOfflineSyncInterval: string;
			/** Minimum allowed time between scheduled Outlook synchronizations. */
			readonly MinOutlookSyncInterval: string;
			/** Minimum number of user license required for mobile offline service by production/preview organization */
			readonly MobileOfflineMinLicenseProd: string;
			/** Minimum number of user license required for mobile offline service by trial organization */
			readonly MobileOfflineMinLicenseTrial: string;
			/** Sync interval for mobile offline. */
			readonly MobileOfflineSyncInterval: string;
			/** Flag to indicate if the modern advanced find filtering on all tables in a model-driven app is enabled */
			readonly ModernAdvancedFindFiltering: string;
			/** Indicates whether coauthoring is enabled in modern app designer */
			readonly ModernAppDesignerCoauthoringEnabled: string;
			/** Unique identifier of the user who last modified the organization. */
			readonly ModifiedBy: string;
			/** Date and time when the organization was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the organization. */
			readonly ModifiedOnBehalfBy: string;
			/** Show the sort by button on views */
			readonly MultiColumnSortEnabled: string;
			/** Name of the organization. The name is set when Microsoft CRM is installed and should not be changed. */
			readonly Name: string;
			/** Enables Natural Language Assist Filter. */
			readonly NaturalLanguageAssistFilter: string;
			/** Information that specifies how negative currency numbers are displayed throughout Microsoft Dynamics 365. */
			readonly NegativeCurrencyFormatCode: string;
			/** Information that specifies how negative numbers are displayed throughout Microsoft CRM. */
			readonly NegativeFormatCode: string;
			/** Indicates whether an organization has enabled the new Relevance search experience (released in Oct 2020) for the organization */
			readonly NewSearchExperienceEnabled: string;
			/** Next entity type code to use for custom entities. */
			readonly NextCustomObjectTypeCode: string;
			/** Next token to be placed on the subject line of an email message. */
			readonly NextTrackingNumber: string;
			/** Indicates whether mailbox owners will be notified of email server profile level alerts. */
			readonly NotifyMailboxOwnerOfEmailServerLevelAlerts: string;
			/** Specification of how numbers are displayed throughout Microsoft CRM. */
			readonly NumberFormat: string;
			/** Specifies how numbers are grouped in Microsoft Dynamics 365. */
			readonly NumberGroupFormat: string;
			/** Symbol used for number separation in Microsoft Dynamics 365. */
			readonly NumberSeparator: string;
			/** Indicates whether the Office Apps auto deployment is enabled for the organization. */
			readonly OfficeAppsAutoDeploymentEnabled: string;
			/** The url to open the Delve for the organization. */
			readonly OfficeGraphDelveUrl: string;
			/** Enable OOB pricing calculation logic for Opportunity, Quote, Order and Invoice entities. */
			readonly OOBPriceCalculationEnabled: string;
			/** Indicates if this organization will opt-out from automatically enabling schema v2 on the organization. */
			readonly OptOutSchemaV2EnabledByDefault: string;
			/** Prefix to use for all orders throughout Microsoft Dynamics 365. */
			readonly OrderPrefix: string;
			/** Unique identifier of the organization. */
			readonly OrganizationId: string;
			/** Indicates the organization lifecycle state */
			readonly OrganizationState: string;
			/** Organization settings stored in Organization Database. */
			readonly OrgDbOrgSettings: string;
			/** Select whether to turn on OrgInsights for the organization. */
			readonly OrgInsightsEnabled: string;
			/** Indicates whether Preview feature has been enabled for the organization. */
			readonly PaiPreviewScenarioEnabled: string;
			/** Prefix used for parsed table columns. */
			readonly ParsedTableColumnPrefix: string;
			/** Prefix used for parsed tables. */
			readonly ParsedTablePrefix: string;
			/** Specifies the maximum number of months in past for which the recurring activities can be created. */
			readonly PastExpansionWindow: string;
			/** Leave empty to use default setting. Set to on/off to enable/disable replacement of default grids with modern ones in model-driven apps. */
			readonly PcfDatasetGridEnabled: string;
			/** This setting contains the date time before an ACT sync can execute. */
			readonly PerformACTSyncAfter_UtcDateAndTime: string;
			/** For internal use only. */
			readonly Picture: string;
			readonly PinpointLanguageCode: string;
			/** Plug-in Trace Log Setting for the Organization. */
			readonly PluginTraceLogSetting: string;
			/** PM designator to use throughout Microsoft Dynamics 365. */
			readonly PMDesignator: string;
			/** For internal use only. */
			readonly PostMessageWhitelistDomains: string;
			/** Indicates whether bot for makers is enabled. */
			readonly PowerAppsMakerBotEnabled: string;
			/** Indicates whether cross region operations are allowed for the organization */
			readonly PowerBIAllowCrossRegionOperations: string;
			/** Indicates whether automatic permissions assignment to Power BI has been enabled for the organization */
			readonly PowerBIAutomaticPermissionsAssignment: string;
			/** Indicates whether creation of Power BI components has been enabled for the organization */
			readonly PowerBIComponentsCreate: string;
			/** Indicates whether the Power BI feature should be enabled for the organization. */
			readonly PowerBiFeatureEnabled: string;
			/** Number of decimal places that can be used for prices. */
			readonly PricingDecimalPrecision: string;
			/** Privacy Statement URL */
			readonly PrivacyStatementUrl: string;
			/** Unique identifier of the default privilege for users in the organization. */
			readonly PrivilegeUserGroupId: string;
			/** For internal use only. */
			readonly PrivReportingGroupId: string;
			/** For internal use only. */
			readonly PrivReportingGroupName: string;
			/** Select whether to turn on product recommendations for the organization. */
			readonly ProductRecommendationsEnabled: string;
			/** Indicates whether prompt should be shown for new Qualify Lead Experience */
			readonly QualifyLeadAdditionalOptions: string;
			/** Flag to indicate if the feature to use quick action to open records in search side pane is enabled */
			readonly QuickActionToOpenRecordsInSidePaneEnabled: string;
			/** Indicates whether a quick find record limit should be enabled for this organization (allows for faster Quick Find queries but prevents overly broad searches). */
			readonly QuickFindRecordLimitEnabled: string;
			/** Prefix to use for all quotes throughout Microsoft Dynamics 365. */
			readonly QuotePrefix: string;
			/** Indicates whether SLA Recalculation has been enabled for the organization */
			readonly RecalculateSLA: string;
			/** Specifies the default value for number of occurrences field in the recurrence dialog. */
			readonly RecurrenceDefaultNumberOfOccurrences: string;
			/** Specifies the interval (in seconds) for pausing expansion job. */
			readonly RecurrenceExpansionJobBatchInterval: string;
			/** Specifies the value for number of instances created in on demand job in one shot. */
			readonly RecurrenceExpansionJobBatchSize: string;
			/** Specifies the maximum number of instances to be created synchronously after creating a recurring appointment. */
			readonly RecurrenceExpansionSynchCreateMax: string;
			/** XML string that defines the navigation structure for the application. This is the site map from the previously upgraded build and is used in a 3-way merge during upgrade. */
			readonly ReferenceSiteMapXml: string;
			/** Current orgnization release cadence value */
			readonly ReleaseCadence: string;
			/** Model app refresh channel */
			readonly ReleaseChannel: string;
			/** Release Wave Applied to Environment. */
			readonly ReleaseWaveName: string;
			/** Indicates whether relevance search was enabled for the environment as part of Dataverse's relevance search on-by-default sweep */
			readonly RelevanceSearchEnabledByPlatform: string;
			/** This setting contains the last modified date for relevance search setting that appears as a toggle in PPAC. */
			readonly RelevanceSearchModifiedOn_UtcDateAndTime: string;
			/** Flag to render the body of email in the Web form in an IFRAME with the security='restricted' attribute set. This is additional security but can cause a credentials prompt. */
			readonly RenderSecureIFrameForEmail: string;
			/** For internal use only. */
			readonly ReportingGroupId: string;
			/** For internal use only. */
			readonly ReportingGroupName: string;
			/** Picklist for selecting the organization preference for reporting scripting errors. */
			readonly ReportScriptErrors: string;
			/** Indicates whether Send As Other User privilege is enabled. */
			readonly RequireApprovalForQueueEmail: string;
			/** Indicates whether Send As Other User privilege is enabled. */
			readonly RequireApprovalForUserEmail: string;
			/** Apply same email address to all unresolved matches when you manually resolve it for one */
			readonly ResolveSimilarUnresolvedEmailAddress: string;
			/** Information that specifies whether guest user restriction is enabled */
			readonly RestrictGuestUserAccess: string;
			/** Flag to restrict Update on incident. */
			readonly RestrictStatusUpdate: string;
			/** Information that specifies Reverse Proxy IP addresses from which requests have to be allowed. */
			readonly ReverseProxyIpAddresses: string;
			/** Error status of Relationship Insights provisioning. */
			readonly RiErrorStatus: string;
			/** Samesite mode for Session Cookie 0 is Default, 1 is None, 2 is Lax , 3 is Strict */
			readonly SameSiteModeForSessionCookie: string;
			/** Unique identifier of the sample data import job. */
			readonly SampleDataImportId: string;
			/** Default time to live in minutes for new Power Automate savings events records in flow aggregation. */
			readonly SavingEventsTTLInMinutes: string;
			/** Prefix used for custom entities and attributes. */
			readonly SchemaNamePrefix: string;
			/** Indicates whether Send Bulk Email in UCI is enabled for the org. */
			readonly SendBulkEmailInUCI: string;
			/** Serve Static Content From CDN */
			readonly ServeStaticResourcesFromAzureCDN: string;
			/** Enable the session recording feature to record user sessions in UCI */
			readonly SessionRecordingEnabled: string;
			/** Information that specifies whether session timeout is enabled */
			readonly SessionTimeoutEnabled: string;
			/** Session timeout in minutes */
			readonly SessionTimeoutInMins: string;
			/** Session timeout reminder in minutes */
			readonly SessionTimeoutReminderInMins: string;
			/** Indicates which SharePoint deployment type is configured for Server to Server. (Online or On-Premises) */
			readonly SharePointDeploymentType: string;
			/** Information that specifies whether to share to previous owner on assign. */
			readonly ShareToPreviousOwnerOnAssign: string;
			/** Select whether to display a KB article deprecation notification to the user. */
			readonly ShowKBArticleDeprecationNotification: string;
			/** Information that specifies whether to display the week number in calendar displays throughout Microsoft CRM. */
			readonly ShowWeekNumber: string;
			/** CRM for Outlook Download URL */
			readonly SignupOutlookDownloadFWLink: string;
			/** XML string that defines the navigation structure for the application. */
			readonly SiteMapXml: string;
			/** Contains the on hold case status values. */
			readonly SlaPauseStates: string;
			/** Flag for whether the organization is using Social Insights. */
			readonly SocialInsightsEnabled: string;
			/** Identifier for the Social Insights instance for the organization. */
			readonly SocialInsightsInstance: string;
			/** Flag for whether the organization has accepted the Social Insights terms of use. */
			readonly SocialInsightsTermsAccepted: string;
			/** For internal use only. */
			readonly SortId: string;
			/** For internal use only. */
			readonly SqlAccessGroupId: string;
			/** For internal use only. */
			readonly SqlAccessGroupName: string;
			/** Setting for SQM data collection, 0 no, 1 yes enabled */
			readonly SQMEnabled: string;
			/** Unique identifier of the support user for the organization. */
			readonly SupportUserId: string;
			/** Indicates whether SLA is suppressed. */
			readonly SuppressSLA: string;
			/** Leave empty to use default setting. Set to on/off to enable/disable Admin emails when Solution Checker validation fails. */
			readonly SuppressValidationEmails: string;
			/** Number of records to update per operation in Sync Bulk Pause/Resume/Cancel */
			readonly SyncBulkOperationBatchSize: string;
			/** Max total number of records to update in database for Sync Bulk Pause/Resume/Cancel */
			readonly SyncBulkOperationMaxLimit: string;
			/** Indicates the selection to use the dynamics 365 azure sync framework or server side sync. */
			readonly SyncOptInSelection: string;
			/** Indicates the status of the opt-in or opt-out operation for dynamics 365 azure sync. */
			readonly SyncOptInSelectionStatus: string;
			/** Unique identifier of the system user for the organization. */
			readonly SystemUserId: string;
			/** Controls the appearance of option to search over a single DV search indexed table in model-driven apps’ global search in the header. */
			readonly TableScopedDVSearchInApps: string;
			/** Maximum number of aggressive polling cycles executed for email auto-tagging when a new email is received. */
			readonly TagMaxAggressiveCycles: string;
			/** Normal polling frequency used for email receive auto-tagging in outlook. */
			readonly TagPollingPeriod: string;
			/** Select whether to turn on task flows for the organization. */
			readonly TaskBasedFlowEnabled: string;
			/** Information on whether Teams Chat Data Sync is enabled. */
			readonly TeamsChatDataSync: string;
			/** Instrumentation key for Application Insights used to log plugins telemetry. */
			readonly TelemetryInstrumentationKey: string;
			/** Select whether to turn on text analytics for the organization. */
			readonly TextAnalyticsEnabled: string;
			/** Information that specifies how the time is displayed throughout Microsoft CRM. */
			readonly TimeFormatCode: string;
			/** Text for how time is displayed in Microsoft Dynamics 365. */
			readonly TimeFormatString: string;
			/** Text for how the time separator is displayed throughout Microsoft Dynamics 365. */
			readonly TimeSeparator: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Duration used for token expiration. */
			readonly TokenExpiry: string;
			/** Token key. */
			readonly TokenKey: string;
			/** Tracelog record maximum age in days */
			readonly TraceLogMaximumAgeInDays: string;
			/** History list of tracking token prefixes. */
			readonly TrackingPrefix: string;
			/** Base number used to provide separate tracking token identifiers to users belonging to different deployments. */
			readonly TrackingTokenIdBase: string;
			/** Number of digits used to represent a tracking token identifier. */
			readonly TrackingTokenIdDigits: string;
			/** Number of characters appended to invoice, quote, and order numbers. */
			readonly UniqueSpecifierLength: string;
			/** Indicates whether email address should be unresolved if multiple matches are found */
			readonly UnresolveEmailAddressIfMultipleMatch: string;
			/** Flag indicates whether to Use Inbuilt Rule For DefaultPricelist. */
			readonly UseInbuiltRuleForDefaultPricelistSelection: string;
			/** Select whether to use legacy form rendering. */
			readonly UseLegacyRendering: string;
			/** Use position hierarchy */
			readonly UsePositionHierarchy: string;
			/** Indicates whether searching in a grid should use the Quick Find view for the entity. */
			readonly UseQuickFindViewForGridSearch: string;
			/** The interval at which user access is checked for auditing. */
			readonly UserAccessAuditingInterval: string;
			/** Indicates whether the read-optimized form should be enabled for this organization. */
			readonly UseReadForm: string;
			/** Unique identifier of the default group of users in the organization. */
			readonly UserGroupId: string;
			/** Enable the user rating feature to show the NSAT score and comment to maker */
			readonly UserRatingEnabled: string;
			/** Indicates default protocol selected for organization. */
			readonly UseSkypeProtocol: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Hash of the V3 callout configuration file. */
			readonly V3CalloutConfigHash: string;
			/** Validation mode for apps in this environment */
			readonly ValidationMode: string;
			/** Version number of the organization. */
			readonly VersionNumber: string;
			/** Hash value of web resources. */
			readonly WebResourceHash: string;
			/** Designated first day of the week throughout Microsoft Dynamics 365. */
			readonly WeekStartDayCode: string;
			/** For Internal use only. */
			readonly WidgetProperties: string;
			/** Denotes the Yammer group ID */
			readonly YammerGroupId: string;
			/** Denotes the Yammer network permalink */
			readonly YammerNetworkPermalink: string;
			/** Denotes whether the OAuth access token for Yammer network has expired */
			readonly YammerOAuthAccessTokenExpired: string;
			/** Internal Use Only */
			readonly YammerPostMethod: string;
			/** Information that specifies how the first week of the year is specified in Microsoft Dynamics 365. */
			readonly YearStartWeekCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace Organization {
		enum ApplicationBasedAccessControlMode {
			/** AuditMode = 2*/
			AuditMode = 2,
			/** Disabled = 0*/
			Disabled = 0,
			/** Enabled = 1*/
			Enabled = 1,
			/** Enabled_for_roles = 3*/
			Enabled_for_roles = 3
		}
		enum CuaFlowLogsVerbosity {
			/** All_data = 0*/
			All_data = 0,
			/** Data_without_screenshots = 1*/
			Data_without_screenshots = 1,
			/** Minimal = 2*/
			Minimal = 2
		}
		enum CurrencyDisplayOption {
			/** Currency_code = 1*/
			Currency_code = 1,
			/** Currency_symbol = 0*/
			Currency_symbol = 0
		}
		enum CurrencyFormatCode {
			/** _123_0 = 0*/
			_123_0 = 0,
			/** _123_1 = 1*/
			_123_1 = 1,
			/** _123_2 = 2*/
			_123_2 = 2,
			/** _123_3 = 3*/
			_123_3 = 3
		}
		enum DateFormatCode {
		}
		enum DefaultRecurrenceEndRangeType {
			/** End_By_Date = 3*/
			End_By_Date = 3,
			/** No_End_Date = 1*/
			No_End_Date = 1,
			/** Number_of_Occurrences = 2*/
			Number_of_Occurrences = 2
		}
		enum DesktopFlowRunActionLogsStatus {
			/** Disabled = 2*/
			Disabled = 2,
			/** Enabled = 0*/
			Enabled = 0,
			/** OnFailure = 1*/
			OnFailure = 1
		}
		enum DesktopFlowRunActionLogVerbosity {
			/** Custom = 2*/
			Custom = 2,
			/** Debug = 1*/
			Debug = 1,
			/** Error = 4*/
			Error = 4,
			/** Full = 0*/
			Full = 0,
			/** Warning = 3*/
			Warning = 3
		}
		enum DesktopFlowRunActionLogVersion {
			/** AdditionalContext = 0*/
			AdditionalContext = 0,
			/** AdditionalContextAndFlowLogs = 2*/
			AdditionalContextAndFlowLogs = 2,
			/** FlowLogs = 1*/
			FlowLogs = 1
		}
		enum DiscountCalculationMethod {
			/** Line_item = 0*/
			Line_item = 0,
			/** Per_unit = 1*/
			Per_unit = 1
		}
		enum EmailConnectionChannel {
			/** Microsoft_Dynamics_365_Email_Router = 1*/
			Microsoft_Dynamics_365_Email_Router = 1,
			/** Server_Side_Synchronization = 0*/
			Server_Side_Synchronization = 0
		}
		enum FiscalPeriodFormatPeriod {
			/** M0 = 5*/
			M0 = 5,
			/** Month_0 = 4*/
			Month_0 = 4,
			/** Month_Name = 7*/
			Month_Name = 7,
			/** P0 = 3*/
			P0 = 3,
			/** Q0 = 2*/
			Q0 = 2,
			/** Quarter_0 = 1*/
			Quarter_0 = 1,
			/** Semester_0 = 6*/
			Semester_0 = 6
		}
		enum FiscalYearFormatPrefix {
			/** FY = 1*/
			FY = 1
		}
		enum FiscalYearFormatSuffix {
			/** Fiscal_Year = 2*/
			Fiscal_Year = 2,
			/** FY = 1*/
			FY = 1
		}
		enum FiscalYearFormatYear {
			/** GGYY = 3*/
			GGYY = 3,
			/** YY = 2*/
			YY = 2,
			/** YYYY = 1*/
			YYYY = 1
		}
		enum FullNameConventionCode {
			/** First_Name = 1*/
			First_Name = 1,
			/** First_Name_Middle_Initial_Last_Name = 3*/
			First_Name_Middle_Initial_Last_Name = 3,
			/** First_Name_Middle_Name_Last_Name = 5*/
			First_Name_Middle_Name_Last_Name = 5,
			/** Last_Name_First_Name = 0*/
			Last_Name_First_Name = 0,
			/** Last_Name_First_Name_Middle_Initial = 2*/
			Last_Name_First_Name_Middle_Initial = 2,
			/** Last_Name_First_Name_Middle_Name = 4*/
			Last_Name_First_Name_Middle_Name = 4,
			/** Last_Name_no_space_First_Name = 7*/
			Last_Name_no_space_First_Name = 7,
			/** Last_Name_space_First_Name = 6*/
			Last_Name_space_First_Name = 6
		}
		enum IpBasedStorageAccessSignatureMode {
			/** IP_Binding_and_IP_Firewall = 2*/
			IP_Binding_and_IP_Firewall = 2,
			/** IP_Binding_only = 0*/
			IP_Binding_only = 0,
			/** IP_Binding_or_IP_Firewall = 3*/
			IP_Binding_or_IP_Firewall = 3,
			/** IP_Firewall_only = 1*/
			IP_Firewall_only = 1
		}
		enum ISVIntegrationCode {
			/** All = 7*/
			All = 7,
			/** None = 0*/
			None = 0,
			/** Outlook = 6*/
			Outlook = 6,
			/** Outlook_Laptop_Client = 4*/
			Outlook_Laptop_Client = 4,
			/** Outlook_Workstation_Client = 2*/
			Outlook_Workstation_Client = 2,
			/** Web = 1*/
			Web = 1,
			/** Web_Outlook_Laptop_Client = 5*/
			Web_Outlook_Laptop_Client = 5,
			/** Web_Outlook_Workstation_Client = 3*/
			Web_Outlook_Workstation_Client = 3
		}
		enum LegacyAppToggle {
			/** Auto = 0*/
			Auto = 0,
			/** Off = 2*/
			Off = 2,
			/** On = 1*/
			On = 1
		}
		enum NegativeFormatCode {
			/** Brackets = 0*/
			Brackets = 0,
			/** Dash = 1*/
			Dash = 1,
			/** Dash_plus_Space = 2*/
			Dash_plus_Space = 2,
			/** Space_plus_Trailing_Dash = 4*/
			Space_plus_Trailing_Dash = 4,
			/** Trailing_Dash = 3*/
			Trailing_Dash = 3
		}
		enum OrganizationState {
			/** Active = 3*/
			Active = 3,
			/** Creating = 0*/
			Creating = 0,
			/** Updating = 2*/
			Updating = 2,
			/** Upgrading = 1*/
			Upgrading = 1
		}
		enum PluginTraceLogSetting {
			/** All = 2*/
			All = 2,
			/** Exception = 1*/
			Exception = 1,
			/** Off = 0*/
			Off = 0
		}
		enum ReleaseChannel {
			/** Auto = 0*/
			Auto = 0,
			/** Microsoft_Inner_channel = 2*/
			Microsoft_Inner_channel = 2,
			/** Monthly_channel = 1*/
			Monthly_channel = 1,
			/** Semi_annual_channel = 3*/
			Semi_annual_channel = 3
		}
		enum ReportScriptErrors {
			/** Ask_me_for_permission_to_send_an_error_report_to_Microsoft = 1*/
			Ask_me_for_permission_to_send_an_error_report_to_Microsoft = 1,
			/** Automatically_send_an_error_report_to_Microsoft_without_asking_me_for_permission = 2*/
			Automatically_send_an_error_report_to_Microsoft_without_asking_me_for_permission = 2,
			/** Never_send_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365 = 3*/
			Never_send_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365 = 3,
			/** No_preference_for_sending_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365 = 0*/
			No_preference_for_sending_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365 = 0
		}
		enum SameSiteModeForSessionCookie {
			/** Default = 0*/
			Default = 0,
			/** Lax = 2*/
			Lax = 2,
			/** None = 1*/
			None = 1,
			/** Strict = 3*/
			Strict = 3
		}
		enum SharePointDeploymentType {
			/** On_Premises = 1*/
			On_Premises = 1,
			/** Online = 0*/
			Online = 0
		}
		enum SyncOptInSelectionStatus {
			/** Failed = 3*/
			Failed = 3,
			/** Passed = 2*/
			Passed = 2,
			/** Processing = 1*/
			Processing = 1
		}
		enum TimeFormatCode {
		}
		enum ValidationMode {
			/** Block = 2*/
			Block = 2,
			/** Off = 0*/
			Off = 0,
			/** Warn = 1*/
			Warn = 1
		}
		enum WeekStartDayCode {
		}
		enum YammerPostMethod {
			/** Private = 1*/
			Private = 1,
			/** Public = 0*/
			Public = 0
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