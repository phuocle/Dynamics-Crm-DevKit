//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class OrganizationApi {
		/**
		* DynamicsCrm.DevKit OrganizationApi
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
		/** ACI Web Endpoint URL. */
		ACIWebEndpointUrl: DevKit.WebApi.StringValue;
		/** Unique identifier of the template to be used for acknowledgement when a user unsubscribes. */
		AcknowledgementTemplateId: DevKit.WebApi.LookupValue;
		/** Indicates whether background address book synchronization in Microsoft Office Outlook is allowed. */
		AllowAddressBookSyncs: DevKit.WebApi.BooleanValue;
		/** Indicates whether automatic response creation is allowed. */
		AllowAutoResponseCreation: DevKit.WebApi.BooleanValue;
		/** Indicates whether automatic unsubscribe is allowed. */
		AllowAutoUnsubscribe: DevKit.WebApi.BooleanValue;
		/** Indicates whether automatic unsubscribe acknowledgement email is allowed to send. */
		AllowAutoUnsubscribeAcknowledgement: DevKit.WebApi.BooleanValue;
		/** Indicates whether Outlook Client message bar advertisement is allowed. */
		AllowClientMessageBarAd: DevKit.WebApi.BooleanValue;
		/** Indicates whether auditing of changes to entity is allowed when no attributes have changed. */
		AllowEntityOnlyAudit: DevKit.WebApi.BooleanValue;
		/** Enable access to legacy web client UI */
		AllowLegacyClientExperience: DevKit.WebApi.BooleanValue;
		/** Enable embedding of certain legacy dialogs in Unified Interface browser client */
		AllowLegacyDialogsEmbedding: DevKit.WebApi.BooleanValue;
		/** Indicates whether marketing emails execution is allowed. */
		AllowMarketingEmailExecution: DevKit.WebApi.BooleanValue;
		/** Indicates whether background offline synchronization in Microsoft Office Outlook is allowed. */
		AllowOfflineScheduledSyncs: DevKit.WebApi.BooleanValue;
		/** Indicates whether scheduled synchronizations to Outlook are allowed. */
		AllowOutlookScheduledSyncs: DevKit.WebApi.BooleanValue;
		/** Indicates whether users are allowed to send email to unresolved parties (parties must still have an email address). */
		AllowUnresolvedPartiesOnEmailSend: DevKit.WebApi.BooleanValue;
		/** Indicates whether individuals can select their form mode preference in their personal options. */
		AllowUserFormModePreference: DevKit.WebApi.BooleanValue;
		/** Indicates whether the showing tablet application notification bars in a browser is allowed. */
		AllowUsersSeeAppdownloadMessage: DevKit.WebApi.BooleanValue;
		/** Indicates whether Web-based export of grids to Microsoft Office Excel is allowed. */
		AllowWebExcelExport: DevKit.WebApi.BooleanValue;
		/** AM designator to use throughout Microsoft Dynamics CRM. */
		AMDesignator: DevKit.WebApi.StringValue;
		/** Indicates whether the appDesignerExperience is enabled for the organization. */
		AppDesignerExperienceEnabled: DevKit.WebApi.BooleanValue;
		/** Information on whether rich editing experience for Appointment is enabled. */
		AppointmentRichEditorExperience: DevKit.WebApi.BooleanValue;
		/** Audit Retention Period settings stored in Organization Database. */
		AuditRetentionPeriod: DevKit.WebApi.IntegerValue;
		/** Audit Retention Period settings stored in Organization Database. */
		AuditRetentionPeriodV2: DevKit.WebApi.IntegerValue;
		/** Select whether to auto apply the default customer entitlement on case creation. */
		AutoApplyDefaultonCaseCreate: DevKit.WebApi.BooleanValue;
		/** Select whether to auto apply the default customer entitlement on case update. */
		AutoApplyDefaultonCaseUpdate: DevKit.WebApi.BooleanValue;
		/** Indicates whether to Auto-apply SLA on case record update after SLA was manually applied. */
		AutoApplySLA: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		AzureSchedulerJobCollectionName: DevKit.WebApi.StringValue;
		/** Unique identifier of the base currency of the organization. */
		BaseCurrencyId: DevKit.WebApi.LookupValue;
		/** Number of decimal places that can be used for the base currency. */
		BaseCurrencyPrecision: DevKit.WebApi.IntegerValueReadonly;
		/** Symbol used for the base currency. */
		BaseCurrencySymbol: DevKit.WebApi.StringValueReadonly;
		BaseISOCurrencyCode: DevKit.WebApi.StringValueReadonly;
		/** Api Key to be used in requests to Bing Maps services. */
		BingMapsApiKey: DevKit.WebApi.StringValue;
		/** Prevent upload or download of certain attachment types that are considered dangerous. */
		BlockedAttachments: DevKit.WebApi.StringValue;
		/** Display cards in expanded state for interactive dashboard */
		BoundDashboardDefaultCardExpanded: DevKit.WebApi.BooleanValue;
		/** Prefix used for bulk operation numbering. */
		BulkOperationPrefix: DevKit.WebApi.StringValue;
		/** BusinessCardOptions */
		BusinessCardOptions: DevKit.WebApi.StringValue;
		/** Unique identifier of the business closure calendar of organization. */
		BusinessClosureCalendarId: DevKit.WebApi.GuidValue;
		/** Calendar type for the system. Set to Gregorian US by default. */
		CalendarType: DevKit.WebApi.IntegerValue;
		/** Prefix used for campaign numbering. */
		CampaignPrefix: DevKit.WebApi.StringValue;
		/** Indicates whether the organization can opt out of the new Relevance search experience (released in Oct 2020) */
		CanOptOutNewSearchExperience: DevKit.WebApi.BooleanValue;
		/** Flag to cascade Update on incident. */
		CascadeStatusUpdate: DevKit.WebApi.BooleanValue;
		/** Prefix to use for all cases throughout Microsoft Dynamics 365. */
		CasePrefix: DevKit.WebApi.StringValue;
		/** Type the prefix to use for all categories in Microsoft Dynamics 365. */
		CategoryPrefix: DevKit.WebApi.StringValue;
		/** Client Features to be enabled as an XML BLOB. */
		ClientFeatureSet: DevKit.WebApi.StringValue;
		/** Policy configuration for CSP */
		ContentSecurityPolicyConfiguration: DevKit.WebApi.StringValue;
		/** Prefix to use for all contracts throughout Microsoft Dynamics 365. */
		ContractPrefix: DevKit.WebApi.StringValue;
		/** Indicates whether the feature CortanaProactiveExperience Flow processes should be enabled for the organization. */
		CortanaProactiveExperienceEnabled: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the user who created the organization. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the organization was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the organization. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enable Initial state of newly created products to be Active instead of Draft */
		CreateProductsWithoutParentInActiveState: DevKit.WebApi.BooleanValue;
		/** Number of decimal places that can be used for currency. */
		CurrencyDecimalPrecision: DevKit.WebApi.IntegerValue;
		/** Indicates whether to display money fields with currency code or currency symbol. */
		CurrencyDisplayOption: DevKit.WebApi.OptionSetValue;
		/** Information about how currency symbols are placed throughout Microsoft Dynamics CRM. */
		CurrencyFormatCode: DevKit.WebApi.OptionSetValue;
		/** Symbol used for currency throughout Microsoft Dynamics 365. */
		CurrencySymbol: DevKit.WebApi.StringValue;
		/** Import sequence to use. */
		CurrentImportSequenceNumber: DevKit.WebApi.IntegerValueReadonly;
		/** First parsed table number to use. */
		CurrentParsedTableNumber: DevKit.WebApi.IntegerValueReadonly;
		/** Information about how the date is displayed throughout Microsoft CRM. */
		DateFormatCode: DevKit.WebApi.OptionSetValue;
		/** String showing how the date is displayed throughout Microsoft CRM. */
		DateFormatString: DevKit.WebApi.StringValue;
		/** Character used to separate the month, the day, and the year in dates throughout Microsoft Dynamics 365. */
		DateSeparator: DevKit.WebApi.StringValue;
		/** The maximum value for the Mobile Offline setting Days since record last modified */
		DaysSinceRecordLastModifiedMaxValue: DevKit.WebApi.IntegerValueReadonly;
		/** Symbol used for decimal in Microsoft Dynamics 365. */
		DecimalSymbol: DevKit.WebApi.StringValue;
		/** Text area to enter default country code. */
		DefaultCountryCode: DevKit.WebApi.StringValue;
		/** Name of the default crm custom. */
		DefaultCrmCustomName: DevKit.WebApi.StringValue;
		/** Unique identifier of the default email server profile. */
		DefaultEmailServerProfileId: DevKit.WebApi.LookupValue;
		/** XML string containing the default email settings that are applied when a user or queue is created. */
		DefaultEmailSettings: DevKit.WebApi.StringValue;
		/** Unique identifier of the default mobile offline profile. */
		DefaultMobileOfflineProfileId: DevKit.WebApi.LookupValue;
		/** Type of default recurrence end range date. */
		DefaultRecurrenceEndRangeType: DevKit.WebApi.OptionSetValue;
		/** Default theme data for the organization. */
		DefaultThemeData: DevKit.WebApi.StringValue;
		/** Unique identifier of the delegated admin user for the organization. */
		DelegatedAdminUserId: DevKit.WebApi.GuidValue;
		/** Reason for disabling the organization. */
		DisabledReason: DevKit.WebApi.StringValueReadonly;
		/** Indicates whether Social Care is disabled. */
		DisableSocialCare: DevKit.WebApi.BooleanValue;
		/** Discount calculation method for the QOOI product. */
		DiscountCalculationMethod: DevKit.WebApi.OptionSetValue;
		/** Indicates whether or not navigation tour is displayed. */
		DisplayNavigationTour: DevKit.WebApi.BooleanValue;
		/** Select if you want to use the Email Router or server-side synchronization for email processing. */
		EmailConnectionChannel: DevKit.WebApi.OptionSetValue;
		/** Flag to turn email correlation on or off. */
		EmailCorrelationEnabled: DevKit.WebApi.BooleanValue;
		/** Normal polling frequency used for sending email in Microsoft Office Outlook. */
		EmailSendPollingPeriod: DevKit.WebApi.IntegerValue;
		/** Enable Integration with Bing Maps */
		EnableBingMapsIntegration: DevKit.WebApi.BooleanValue;
		/** Enable Integration with Immersive Skype */
		EnableImmersiveSkypeIntegration: DevKit.WebApi.BooleanValue;
		/** Indicates whether the user has enabled or disabled Live Persona Card feature in UCI. */
		EnableLivePersonaCardUCI: DevKit.WebApi.BooleanValue;
		/** Indicates whether the user has enabled or disabled LivePersonCardIntegration in Office. */
		EnableLivePersonCardIntegrationInOffice: DevKit.WebApi.BooleanValue;
		/** Select to enable learning path auhtoring. */
		EnableLPAuthoring: DevKit.WebApi.BooleanValue;
		/** Enable Integration with Microsoft Flow */
		EnableMicrosoftFlowIntegration: DevKit.WebApi.BooleanValue;
		/** Enable pricing calculations on a Create call. */
		EnablePricingOnCreate: DevKit.WebApi.BooleanValue;
		/** Use Smart Matching. */
		EnableSmartMatching: DevKit.WebApi.BooleanValue;
		/** Enable site map and commanding update */
		EnableUnifiedInterfaceShellRefresh: DevKit.WebApi.BooleanValue;
		/** Organization setting to enforce read only plugins. */
		EnforceReadOnlyPlugins: DevKit.WebApi.BooleanValue;
		/** The default image for the entity. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Maximum number of days to keep change tracking deleted records */
		ExpireChangeTrackingInDays: DevKit.WebApi.IntegerValue;
		/** Maximum number of days before deleting inactive subscriptions. */
		ExpireSubscriptionsInDays: DevKit.WebApi.IntegerValue;
		/** Specify the base URL to use to look for external document suggestions. */
		ExternalBaseUrl: DevKit.WebApi.StringValue;
		/** XML string containing the ExternalPartyEnabled entities correlation keys for association of existing External Party instance entities to newly created IsExternalPartyEnabled entities.For internal use only */
		ExternalPartyCorrelationKeys: DevKit.WebApi.StringValue;
		/** XML string containing the ExternalPartyEnabled entities settings. */
		ExternalPartyEntitySettings: DevKit.WebApi.StringValue;
		/** Features to be enabled as an XML BLOB. */
		FeatureSet: DevKit.WebApi.StringValue;
		/** Start date for the fiscal period that is to be used throughout Microsoft CRM. */
		FiscalCalendarStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Information that specifies how the name of the fiscal period is displayed throughout Microsoft CRM. */
		FiscalPeriodFormat: DevKit.WebApi.StringValue;
		/** Format in which the fiscal period will be displayed. */
		FiscalPeriodFormatPeriod: DevKit.WebApi.OptionSetValue;
		/** Type of fiscal period used throughout Microsoft CRM. */
		FiscalPeriodType: DevKit.WebApi.IntegerValue;
		/** Information that specifies whether the fiscal year should be displayed based on the start date or the end date of the fiscal year. */
		FiscalYearDisplayCode: DevKit.WebApi.IntegerValue;
		/** Information that specifies how the name of the fiscal year is displayed throughout Microsoft CRM. */
		FiscalYearFormat: DevKit.WebApi.StringValue;
		/** Prefix for the display of the fiscal year. */
		FiscalYearFormatPrefix: DevKit.WebApi.OptionSetValue;
		/** Suffix for the display of the fiscal year. */
		FiscalYearFormatSuffix: DevKit.WebApi.OptionSetValue;
		/** Format for the year. */
		FiscalYearFormatYear: DevKit.WebApi.OptionSetValue;
		/** Information that specifies how the names of the fiscal year and the fiscal period should be connected when displayed together. */
		FiscalYearPeriodConnect: DevKit.WebApi.StringValue;
		/** Order in which names are to be displayed throughout Microsoft CRM. */
		FullNameConventionCode: DevKit.WebApi.OptionSetValue;
		/** Specifies the maximum number of months in future for which the recurring activities can be created. */
		FutureExpansionWindow: DevKit.WebApi.IntegerValue;
		/** Indicates whether alerts will be generated for errors. */
		GenerateAlertsForErrors: DevKit.WebApi.BooleanValue;
		/** Indicates whether alerts will be generated for information. */
		GenerateAlertsForInformation: DevKit.WebApi.BooleanValue;
		/** Indicates whether alerts will be generated for warnings. */
		GenerateAlertsForWarnings: DevKit.WebApi.BooleanValue;
		/** Indicates whether Get Started content is enabled for this organization. */
		GetStartedPaneContentEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether the append URL parameters is enabled. */
		GlobalAppendUrlParametersEnabled: DevKit.WebApi.BooleanValue;
		/** URL for the web page global help. */
		GlobalHelpUrl: DevKit.WebApi.StringValue;
		/** Indicates whether the customizable global help is enabled. */
		GlobalHelpUrlEnabled: DevKit.WebApi.BooleanValue;
		/** Number of days after the goal's end date after which the rollup of the goal stops automatically. */
		GoalRollupExpiryTime: DevKit.WebApi.IntegerValue;
		/** Number of hours between automatic rollup jobs . */
		GoalRollupFrequency: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		GrantAccessToNetworkService: DevKit.WebApi.BooleanValue;
		/** Maximum difference allowed between subject keywords count of the email messaged to be correlated */
		HashDeltaSubjectCount: DevKit.WebApi.IntegerValue;
		/** Filter Subject Keywords */
		HashFilterKeywords: DevKit.WebApi.StringValue;
		/** Maximum number of subject keywords or recipients used for correlation */
		HashMaxCount: DevKit.WebApi.IntegerValue;
		/** Minimum number of recipients required to match for email messaged to be correlated */
		HashMinAddressCount: DevKit.WebApi.IntegerValue;
		/** High contrast theme data for the organization. */
		HighContrastThemeData: DevKit.WebApi.StringValue;
		/** Indicates whether incoming email sent by internal Microsoft Dynamics 365 users or queues should be tracked. */
		IgnoreInternalEmail: DevKit.WebApi.BooleanValue;
		/** Indicates whether an organization has consented to sharing search query data to help improve search results */
		ImproveSearchLoggingEnabled: DevKit.WebApi.BooleanValue;
		/** Information that specifies whether Inactivity timeout is enabled */
		InactivityTimeoutEnabled: DevKit.WebApi.BooleanValue;
		/** Inactivity timeout in minutes */
		InactivityTimeoutInMins: DevKit.WebApi.IntegerValue;
		/** Inactivity timeout reminder in minutes */
		InactivityTimeoutReminderInMins: DevKit.WebApi.IntegerValue;
		/** Setting for the Async Service Mailbox Queue. Defines the retrieval batch size of exchange server. */
		IncomingEmailExchangeEmailRetrievalBatchSize: DevKit.WebApi.IntegerValue;
		/** Initial version of the organization. */
		InitialVersion: DevKit.WebApi.StringValue;
		/** Unique identifier of the integration user for the organization. */
		IntegrationUserId: DevKit.WebApi.GuidValue;
		/** Prefix to use for all invoice numbers throughout Microsoft Dynamics 365. */
		InvoicePrefix: DevKit.WebApi.StringValue;
		/** Indicates whether the feature Action Card should be enabled for the organization. */
		IsActionCardEnabled: DevKit.WebApi.BooleanValue;
		/** Information that specifies whether Action Support Feature is enabled */
		IsActionSupportFeatureEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether the feature Relationship Analytics should be enabled for the organization. */
		IsActivityAnalysisEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether all money attributes are converted to decimal. */
		IsAllMoneyDecimal: DevKit.WebApi.BooleanValueReadonly;
		/** Indicates whether loading of Microsoft Dynamics 365 in a browser window that does not have address, tool, and menu bars is enabled. */
		IsAppMode: DevKit.WebApi.BooleanValue;
		/** Enable or disable attachments sync for outlook and exchange. */
		IsAppointmentAttachmentSyncEnabled: DevKit.WebApi.BooleanValue;
		/** Enable or disable assigned tasks sync for outlook and exchange. */
		IsAssignedTasksSyncEnabled: DevKit.WebApi.BooleanValue;
		/** Enable or disable auditing of changes. */
		IsAuditEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether the feature Auto Capture should be enabled for the organization. */
		IsAutoDataCaptureEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether the V2 feature of Auto Capture should be enabled for the organization. */
		IsAutoDataCaptureV2Enabled: DevKit.WebApi.BooleanValue;
		/** Information on whether auto save is enabled. */
		IsAutoSaveEnabled: DevKit.WebApi.BooleanValue;
		/** Information that specifies whether BPF Entity Customization Feature is enabled */
		IsBPFEntityCustomizationFeatureEnabled: DevKit.WebApi.BooleanValue;
		/** Information that specifies whether conflict detection for mobile client is enabled. */
		IsConflictDetectionEnabledForMobileClient: DevKit.WebApi.BooleanValue;
		/** Enable or disable mailing address sync for outlook and exchange. */
		IsContactMailingAddressSyncEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether Content Security Policy has been enabled for the organization. */
		IsContentSecurityPolicyEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether Contextual email experience is enabled on this organization */
		IsContextualEmailEnabled: DevKit.WebApi.BooleanValue;
		/** Select to enable Contextual Help in UCI. */
		IsContextualHelpEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether Custom Controls in canvas PowerApps feature has been enabled for the organization. */
		IsCustomControlsInCanvasAppsEnabled: DevKit.WebApi.BooleanValue;
		/** Enable or disable country code selection. */
		IsDefaultCountryCodeCheckEnabled: DevKit.WebApi.BooleanValue;
		/** Enable Delegation Access content */
		IsDelegateAccessEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether the feature Action Hub should be enabled for the organization. */
		IsDelveActionHubIntegrationEnabled: DevKit.WebApi.BooleanValue;
		/** Information that specifies whether the organization is disabled. */
		IsDisabled: DevKit.WebApi.BooleanValueReadonly;
		/** Indicates whether duplicate detection of records is enabled. */
		IsDuplicateDetectionEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether duplicate detection of records during import is enabled. */
		IsDuplicateDetectionEnabledForImport: DevKit.WebApi.BooleanValue;
		/** Indicates whether duplicate detection of records during offline synchronization is enabled. */
		IsDuplicateDetectionEnabledForOfflineSync: DevKit.WebApi.BooleanValue;
		/** Indicates whether duplicate detection during online create or update is enabled. */
		IsDuplicateDetectionEnabledForOnlineCreateUpdate: DevKit.WebApi.BooleanValue;
		/** Allow tracking recipient activity on sent emails. */
		IsEmailMonitoringAllowed: DevKit.WebApi.BooleanValue;
		/** Enable Email Server Profile content filtering */
		IsEmailServerProfileContentFilteringEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether appmodule is enabled for all roles */
		IsEnabledForAllRoles: DevKit.WebApi.BooleanValue;
		/** Indicates whether the organization's files are being stored in Azure. */
		IsExternalFileStorageEnabled: DevKit.WebApi.BooleanValue;
		/** Select whether data can be synchronized with an external search index. */
		IsExternalSearchIndexEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether the fiscal period is displayed as the month number. */
		IsFiscalPeriodMonthBased: DevKit.WebApi.BooleanValue;
		/** Select whether folders should be automatically created on SharePoint. */
		IsFolderAutoCreatedonSP: DevKit.WebApi.BooleanValue;
		/** Enable or disable folder based tracking for Server Side Sync. */
		IsFolderBasedTrackingEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether full-text search for Quick Find entities should be enabled for the organization. */
		IsFullTextSearchEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether geospatial capabilities leveraging Azure Maps are enabled. */
		IsGeospatialAzureMapsIntegrationEnabled: DevKit.WebApi.BooleanValue;
		/** Enable Hierarchical Security Model */
		IsHierarchicalSecurityModelEnabled: DevKit.WebApi.BooleanValue;
		/** Give Consent to use LUIS in Dynamics 365 Bot */
		IsLUISEnabledforD365Bot: DevKit.WebApi.BooleanValue;
		/** Enable or disable forced unlocking for Server Side Sync mailboxes. */
		IsMailboxForcedUnlockingEnabled: DevKit.WebApi.BooleanValue;
		/** Enable or disable mailbox keep alive for Server Side Sync. */
		IsMailboxInactiveBackoffEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether Manual Sales Forecasting feature has been enabled for the organization. */
		IsManualSalesForecastingEnabled: DevKit.WebApi.BooleanValue;
		/** Information that specifies whether mobile client on demand sync is enabled. */
		IsMobileClientOnDemandSyncEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether the feature MobileOffline should be enabled for the organization. */
		IsMobileOfflineEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether Model Apps can be embedded within Microsoft Teams. This is a tenant admin controlled preview/experimental feature. */
		IsModelDrivenAppsInMSTeamsEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether Microsoft Teams Collaboration feature has been enabled for the organization. */
		IsMSTeamsCollaborationEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether Microsoft Teams integration has been enabled for the organization. */
		IsMSTeamsEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether the user has enabled or disabled Microsoft Teams integration. */
		IsMSTeamsSettingChangedByUser: DevKit.WebApi.BooleanValue;
		/** Indicates whether Microsoft Teams User Sync feature has been enabled for the organization. */
		IsMSTeamsUserSyncEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether new add product experience is enabled. */
		IsNewAddProductExperienceEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether the feature Notes Analysis should be enabled for the organization. */
		IsNotesAnalysisEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether the feature OfficeGraph should be enabled for the organization. */
		IsOfficeGraphEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether the feature One Drive should be enabled for the organization. */
		IsOneDriveEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether PAI feature has been enabled for the organization. */
		IsPAIEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether PDF Generation feature has been enabled for the organization. */
		IsPDFGenerationEnabled: DevKit.WebApi.StringValue;
		/** Indicates whether playbook feature has been enabled for the organization. */
		IsPlaybookEnabled: DevKit.WebApi.BooleanValue;
		/** Information on whether IM presence is enabled. */
		IsPresenceEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether the Preview feature for Action Card should be enabled for the organization. */
		IsPreviewEnabledForActionCard: DevKit.WebApi.BooleanValue;
		/** Indicates whether the feature Auto Capture should be enabled for the organization at Preview Settings. */
		IsPreviewForAutoCaptureEnabled: DevKit.WebApi.BooleanValue;
		/** Is Preview For Email Monitoring Allowed. */
		IsPreviewForEmailMonitoringAllowed: DevKit.WebApi.BooleanValue;
		/** Indicates whether PriceList is mandatory for adding existing products to sales entities. */
		IsPriceListMandatory: DevKit.WebApi.BooleanValue;
		/** Select whether to use the standard Out-of-box Opportunity Close experience or opt to for a customized experience. */
		IsQuickCreateEnabledForOpportunityClose: DevKit.WebApi.BooleanValue;
		/** Enable or disable auditing of read operations. */
		IsReadAuditEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether the feature Relationship Insights should be enabled for the organization. */
		IsRelationshipInsightsEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates if the synchronization of user resource booking with Exchange is enabled at organization level. */
		IsResourceBookingExchangeSyncEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether rich text editor for notes experience is enabled on this organization */
		IsRichTextNotesEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether Sales Assistant mobile app has been enabled for the organization. */
		IsSalesAssistantEnabled: DevKit.WebApi.BooleanValue;
		/** Enable sales order processing integration. */
		IsSOPIntegrationEnabled: DevKit.WebApi.BooleanValue;
		/** Information on whether text wrap is enabled. */
		IsTextWrapEnabled: DevKit.WebApi.BooleanValue;
		/** Enable or disable auditing of user access. */
		IsUserAccessAuditEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether Write-in Products can be added to Opportunity/Quote/Order/Invoice or not. */
		IsWriteInProductsAllowed: DevKit.WebApi.BooleanValue;
		/** Type the prefix to use for all knowledge articles in Microsoft Dynamics 365. */
		KaPrefix: DevKit.WebApi.StringValue;
		/** Prefix to use for all articles in Microsoft Dynamics 365. */
		KbPrefix: DevKit.WebApi.StringValue;
		/** XML string containing the Knowledge Management settings that are applied in Knowledge Management Wizard. */
		KMSettings: DevKit.WebApi.StringValue;
		/** Preferred language for the organization. */
		LanguageCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the locale of the organization. */
		LocaleId: DevKit.WebApi.IntegerValue;
		/** Information that specifies how the Long Date format is displayed in Microsoft Dynamics 365. */
		LongDateFormatCode: DevKit.WebApi.IntegerValue;
		/** Minimum number of characters that should be entered in the lookup control before resolving for suggestions */
		LookupCharacterCountBeforeResolve: DevKit.WebApi.IntegerValue;
		/** Minimum delay (in milliseconds) between consecutive inputs in a lookup control that will trigger a search for suggestions */
		LookupResolveDelayMS: DevKit.WebApi.IntegerValue;
		/** Lower Threshold For Mailbox Intermittent Issue. */
		MailboxIntermittentIssueMinRange: DevKit.WebApi.IntegerValue;
		/** Lower Threshold For Mailbox Permanent Issue. */
		MailboxPermanentIssueMinRange: DevKit.WebApi.IntegerValue;
		/** Maximum number of actionsteps allowed in a BPF */
		MaxActionStepsInBPF: DevKit.WebApi.IntegerValue;
		/** Maximum number of days an appointment can last. */
		MaxAppointmentDurationDays: DevKit.WebApi.IntegerValue;
		/** Maximum number of conditions allowed for mobile offline filters */
		MaxConditionsForMobileOfflineFilters: DevKit.WebApi.IntegerValue;
		/** Maximum depth for hierarchy security propagation. */
		MaxDepthForHierarchicalSecurityModel: DevKit.WebApi.IntegerValue;
		/** Maximum number of Folder Based Tracking mappings user can add */
		MaxFolderBasedTrackingMappings: DevKit.WebApi.IntegerValue;
		/** Maximum number of active business process flows allowed per entity */
		MaximumActiveBusinessProcessFlowsAllowedPerEntity: DevKit.WebApi.IntegerValue;
		/** Restrict the maximum number of product properties for a product family/bundle */
		MaximumDynamicPropertiesAllowed: DevKit.WebApi.IntegerValue;
		/** Maximum number of active SLA allowed per entity in online */
		MaximumEntitiesWithActiveSLA: DevKit.WebApi.IntegerValue;
		/** Maximum number of SLA KPI per active SLA allowed for entity in online */
		MaximumSLAKPIPerEntityWithActiveSLA: DevKit.WebApi.IntegerValue;
		/** Maximum tracking number before recycling takes place. */
		MaximumTrackingNumber: DevKit.WebApi.IntegerValue;
		/** Restrict the maximum no of items in a bundle */
		MaxProductsInBundle: DevKit.WebApi.IntegerValue;
		/** Maximum number of records that will be exported to a static Microsoft Office Excel worksheet when exporting from the grid. */
		MaxRecordsForExportToExcel: DevKit.WebApi.IntegerValue;
		/** Maximum number of lookup and picklist records that can be selected by user for filtering. */
		MaxRecordsForLookupFilters: DevKit.WebApi.IntegerValue;
		MaxSLAItemsPerSLA: DevKit.WebApi.IntegerValue;
		/** The maximum version of IE to run browser emulation for in Outlook client */
		MaxSupportedInternetExplorerVersion: DevKit.WebApi.IntegerValueReadonly;
		/** Maximum allowed size of an attachment. */
		MaxUploadFileSize: DevKit.WebApi.IntegerValue;
		/** Maximum number of mailboxes that can be toggled for verbose logging */
		MaxVerboseLoggingMailbox: DevKit.WebApi.IntegerValueReadonly;
		/** Maximum number of sync cycles for which verbose logging will be enabled by default */
		MaxVerboseLoggingSyncCycles: DevKit.WebApi.IntegerValueReadonly;
		/** What is the last date/time where there are metadata tracking deleted objects that have never been outside of the expiration period. */
		MetadataSyncLastTimeOfNeverExpiredDeletedObjects_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** (Deprecated) Environment selected for Integration with Microsoft Flow */
		MicrosoftFlowEnvironment: DevKit.WebApi.StringValue;
		/** Normal polling frequency used for address book synchronization in Microsoft Office Outlook. */
		MinAddressBookSyncInterval: DevKit.WebApi.IntegerValue;
		/** Normal polling frequency used for background offline synchronization in Microsoft Office Outlook. */
		MinOfflineSyncInterval: DevKit.WebApi.IntegerValue;
		/** Minimum allowed time between scheduled Outlook synchronizations. */
		MinOutlookSyncInterval: DevKit.WebApi.IntegerValue;
		/** Minimum number of user license required for mobile offline service by production/preview organization */
		MobileOfflineMinLicenseProd: DevKit.WebApi.IntegerValueReadonly;
		/** Minimum number of user license required for mobile offline service by trial organization */
		MobileOfflineMinLicenseTrial: DevKit.WebApi.IntegerValueReadonly;
		/** Sync interval for mobile offline. */
		MobileOfflineSyncInterval: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who last modified the organization. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the organization was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the organization. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the organization. The name is set when Microsoft CRM is installed and should not be changed. */
		Name: DevKit.WebApi.StringValue;
		/** Information that specifies how negative currency numbers are displayed throughout Microsoft Dynamics 365. */
		NegativeCurrencyFormatCode: DevKit.WebApi.IntegerValue;
		/** Information that specifies how negative numbers are displayed throughout Microsoft CRM. */
		NegativeFormatCode: DevKit.WebApi.OptionSetValue;
		/** Indicates whether an organization has enabled the new Relevance search experience (released in Oct 2020) for the organization */
		NewSearchExperienceEnabled: DevKit.WebApi.BooleanValue;
		/** Next entity type code to use for custom entities. */
		NextCustomObjectTypeCode: DevKit.WebApi.IntegerValueReadonly;
		/** Next token to be placed on the subject line of an email message. */
		NextTrackingNumber: DevKit.WebApi.IntegerValue;
		/** Indicates whether mailbox owners will be notified of email server profile level alerts. */
		NotifyMailboxOwnerOfEmailServerLevelAlerts: DevKit.WebApi.BooleanValue;
		/** Specification of how numbers are displayed throughout Microsoft CRM. */
		NumberFormat: DevKit.WebApi.StringValue;
		/** Specifies how numbers are grouped in Microsoft Dynamics 365. */
		NumberGroupFormat: DevKit.WebApi.StringValue;
		/** Symbol used for number separation in Microsoft Dynamics 365. */
		NumberSeparator: DevKit.WebApi.StringValue;
		/** Indicates whether the Office Apps auto deployment is enabled for the organization. */
		OfficeAppsAutoDeploymentEnabled: DevKit.WebApi.BooleanValue;
		/** The url to open the Delve for the organization. */
		OfficeGraphDelveUrl: DevKit.WebApi.StringValue;
		/** Enable OOB pricing calculation logic for Opportunity, Quote, Order and Invoice entities. */
		OOBPriceCalculationEnabled: DevKit.WebApi.BooleanValue;
		/** Prefix to use for all orders throughout Microsoft Dynamics 365. */
		OrderPrefix: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** Indicates the organization lifecycle state */
		OrganizationState: DevKit.WebApi.OptionSetValueReadonly;
		/** Organization settings stored in Organization Database. */
		OrgDbOrgSettings: DevKit.WebApi.StringValue;
		/** Select whether to turn on OrgInsights for the organization. */
		OrgInsightsEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether Preview feature has been enabled for the organization. */
		PaiPreviewScenarioEnabled: DevKit.WebApi.BooleanValue;
		/** Prefix used for parsed table columns. */
		ParsedTableColumnPrefix: DevKit.WebApi.StringValueReadonly;
		/** Prefix used for parsed tables. */
		ParsedTablePrefix: DevKit.WebApi.StringValueReadonly;
		/** Specifies the maximum number of months in past for which the recurring activities can be created. */
		PastExpansionWindow: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		Picture: DevKit.WebApi.StringValue;
		PinpointLanguageCode: DevKit.WebApi.IntegerValue;
		/** Plug-in Trace Log Setting for the Organization. */
		PluginTraceLogSetting: DevKit.WebApi.OptionSetValue;
		/** PM designator to use throughout Microsoft Dynamics 365. */
		PMDesignator: DevKit.WebApi.StringValue;
		/** For internal use only. */
		PostMessageWhitelistDomains: DevKit.WebApi.StringValue;
		/** Indicates whether the Power BI feature should be enabled for the organization. */
		PowerBiFeatureEnabled: DevKit.WebApi.BooleanValue;
		/** Number of decimal places that can be used for prices. */
		PricingDecimalPrecision: DevKit.WebApi.IntegerValue;
		/** Privacy Statement URL */
		PrivacyStatementUrl: DevKit.WebApi.StringValue;
		/** Unique identifier of the default privilege for users in the organization. */
		PrivilegeUserGroupId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		PrivReportingGroupId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		PrivReportingGroupName: DevKit.WebApi.StringValue;
		/** Select whether to turn on product recommendations for the organization. */
		ProductRecommendationsEnabled: DevKit.WebApi.BooleanValue;
		/** Indicates whether prompt should be shown for new Qualify Lead Experience */
		QualifyLeadAdditionalOptions: DevKit.WebApi.StringValue;
		/** Indicates whether a quick find record limit should be enabled for this organization (allows for faster Quick Find queries but prevents overly broad searches). */
		QuickFindRecordLimitEnabled: DevKit.WebApi.BooleanValue;
		/** Prefix to use for all quotes throughout Microsoft Dynamics 365. */
		QuotePrefix: DevKit.WebApi.StringValue;
		/** Specifies the default value for number of occurrences field in the recurrence dialog. */
		RecurrenceDefaultNumberOfOccurrences: DevKit.WebApi.IntegerValue;
		/** Specifies the interval (in seconds) for pausing expansion job. */
		RecurrenceExpansionJobBatchInterval: DevKit.WebApi.IntegerValue;
		/** Specifies the value for number of instances created in on demand job in one shot. */
		RecurrenceExpansionJobBatchSize: DevKit.WebApi.IntegerValue;
		/** Specifies the maximum number of instances to be created synchronously after creating a recurring appointment. */
		RecurrenceExpansionSynchCreateMax: DevKit.WebApi.IntegerValue;
		/** Flag to render the body of email in the Web form in an IFRAME with the security='restricted' attribute set. This is additional security but can cause a credentials prompt. */
		RenderSecureIFrameForEmail: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		ReportingGroupId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		ReportingGroupName: DevKit.WebApi.StringValue;
		/** Picklist for selecting the organization preference for reporting scripting errors. */
		ReportScriptErrors: DevKit.WebApi.OptionSetValue;
		/** Indicates whether Send As Other User privilege is enabled. */
		RequireApprovalForQueueEmail: DevKit.WebApi.BooleanValue;
		/** Indicates whether Send As Other User privilege is enabled. */
		RequireApprovalForUserEmail: DevKit.WebApi.BooleanValue;
		/** Apply same email address to all unresolved matches when you manually resolve it for one */
		ResolveSimilarUnresolvedEmailAddress: DevKit.WebApi.BooleanValue;
		/** Flag to restrict Update on incident. */
		RestrictStatusUpdate: DevKit.WebApi.BooleanValue;
		/** Error status of Relationship Insights provisioning. */
		RiErrorStatus: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the sample data import job. */
		SampleDataImportId: DevKit.WebApi.GuidValue;
		/** Prefix used for custom entities and attributes. */
		SchemaNamePrefix: DevKit.WebApi.StringValue;
		/** Indicates whether Send Bulk Email in UCI is enabled for the org. */
		SendBulkEmailInUCI: DevKit.WebApi.BooleanValue;
		/** Serve Static Content From CDN */
		ServeStaticResourcesFromAzureCDN: DevKit.WebApi.BooleanValue;
		/** Information that specifies whether session timeout is enabled */
		SessionTimeoutEnabled: DevKit.WebApi.BooleanValue;
		/** Session timeout in minutes */
		SessionTimeoutInMins: DevKit.WebApi.IntegerValue;
		/** Session timeout reminder in minutes */
		SessionTimeoutReminderInMins: DevKit.WebApi.IntegerValue;
		/** Indicates which SharePoint deployment type is configured for Server to Server. (Online or On-Premises) */
		SharePointDeploymentType: DevKit.WebApi.OptionSetValue;
		/** Information that specifies whether to share to previous owner on assign. */
		ShareToPreviousOwnerOnAssign: DevKit.WebApi.BooleanValue;
		/** Select whether to display a KB article deprecation notification to the user. */
		ShowKBArticleDeprecationNotification: DevKit.WebApi.BooleanValue;
		/** Information that specifies whether to display the week number in calendar displays throughout Microsoft CRM. */
		ShowWeekNumber: DevKit.WebApi.BooleanValue;
		/** CRM for Outlook Download URL */
		SignupOutlookDownloadFWLink: DevKit.WebApi.StringValue;
		/** Contains the on hold case status values. */
		SlaPauseStates: DevKit.WebApi.StringValue;
		/** Flag for whether the organization is using Social Insights. */
		SocialInsightsEnabled: DevKit.WebApi.BooleanValue;
		/** Identifier for the Social Insights instance for the organization. */
		SocialInsightsInstance: DevKit.WebApi.StringValue;
		/** Flag for whether the organization has accepted the Social Insights terms of use. */
		SocialInsightsTermsAccepted: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		SortId: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		SqlAccessGroupId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		SqlAccessGroupName: DevKit.WebApi.StringValue;
		/** Setting for SQM data collection, 0 no, 1 yes enabled */
		SQMEnabled: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the support user for the organization. */
		SupportUserId: DevKit.WebApi.GuidValue;
		/** Indicates whether SLA is suppressed. */
		SuppressSLA: DevKit.WebApi.BooleanValue;
		/** Number of records to update per operation in Sync Bulk Pause/Resume/Cancel */
		SyncBulkOperationBatchSize: DevKit.WebApi.IntegerValue;
		/** Max total number of records to update in database for Sync Bulk Pause/Resume/Cancel */
		SyncBulkOperationMaxLimit: DevKit.WebApi.IntegerValue;
		/** Indicates the selection to use the dynamics 365 azure sync framework or server side sync. */
		SyncOptInSelection: DevKit.WebApi.BooleanValue;
		/** Indicates the status of the opt-in or opt-out operation for dynamics 365 azure sync. */
		SyncOptInSelectionStatus: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the system user for the organization. */
		SystemUserId: DevKit.WebApi.GuidValue;
		/** Maximum number of aggressive polling cycles executed for email auto-tagging when a new email is received. */
		TagMaxAggressiveCycles: DevKit.WebApi.IntegerValue;
		/** Normal polling frequency used for email receive auto-tagging in outlook. */
		TagPollingPeriod: DevKit.WebApi.IntegerValue;
		/** Select whether to turn on task flows for the organization. */
		TaskBasedFlowEnabled: DevKit.WebApi.BooleanValue;
		/** Instrumentation key for Application Insights used to log plugins telemetry. */
		TelemetryInstrumentationKey: DevKit.WebApi.StringValue;
		/** Select whether to turn on text analytics for the organization. */
		TextAnalyticsEnabled: DevKit.WebApi.BooleanValue;
		/** Information that specifies how the time is displayed throughout Microsoft CRM. */
		TimeFormatCode: DevKit.WebApi.OptionSetValue;
		/** Text for how time is displayed in Microsoft Dynamics 365. */
		TimeFormatString: DevKit.WebApi.StringValue;
		/** Text for how the time separator is displayed throughout Microsoft Dynamics 365. */
		TimeSeparator: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Duration used for token expiration. */
		TokenExpiry: DevKit.WebApi.IntegerValue;
		/** Token key. */
		TokenKey: DevKit.WebApi.StringValue;
		/** Tracelog record maximum age in days */
		TraceLogMaximumAgeInDays: DevKit.WebApi.IntegerValue;
		/** History list of tracking token prefixes. */
		TrackingPrefix: DevKit.WebApi.StringValue;
		/** Base number used to provide separate tracking token identifiers to users belonging to different deployments. */
		TrackingTokenIdBase: DevKit.WebApi.IntegerValue;
		/** Number of digits used to represent a tracking token identifier. */
		TrackingTokenIdDigits: DevKit.WebApi.IntegerValue;
		/** Number of characters appended to invoice, quote, and order numbers. */
		UniqueSpecifierLength: DevKit.WebApi.IntegerValue;
		/** Indicates whether email address should be unresolved if multiple matches are found */
		UnresolveEmailAddressIfMultipleMatch: DevKit.WebApi.BooleanValue;
		/** Flag indicates whether to Use Inbuilt Rule For DefaultPricelist. */
		UseInbuiltRuleForDefaultPricelistSelection: DevKit.WebApi.BooleanValue;
		/** Select whether to use legacy form rendering. */
		UseLegacyRendering: DevKit.WebApi.BooleanValue;
		/** Use position hierarchy */
		UsePositionHierarchy: DevKit.WebApi.BooleanValue;
		/** Indicates whether searching in a grid should use the Quick Find view for the entity. */
		UseQuickFindViewForGridSearch: DevKit.WebApi.BooleanValue;
		/** The interval at which user access is checked for auditing. */
		UserAccessAuditingInterval: DevKit.WebApi.IntegerValue;
		/** Indicates whether the read-optimized form should be enabled for this organization. */
		UseReadForm: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the default group of users in the organization. */
		UserGroupId: DevKit.WebApi.GuidValue;
		/** Indicates default protocol selected for organization. */
		UseSkypeProtocol: DevKit.WebApi.BooleanValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Hash of the V3 callout configuration file. */
		V3CalloutConfigHash: DevKit.WebApi.StringValueReadonly;
		/** Version number of the organization. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Hash value of web resources. */
		WebResourceHash: DevKit.WebApi.StringValue;
		/** Designated first day of the week throughout Microsoft Dynamics 365. */
		WeekStartDayCode: DevKit.WebApi.OptionSetValue;
		/** For Internal use only. */
		WidgetProperties: DevKit.WebApi.StringValue;
		/** Denotes the Yammer group ID */
		YammerGroupId: DevKit.WebApi.IntegerValue;
		/** Denotes the Yammer network permalink */
		YammerNetworkPermalink: DevKit.WebApi.StringValue;
		/** Denotes whether the OAuth access token for Yammer network has expired */
		YammerOAuthAccessTokenExpired: DevKit.WebApi.BooleanValue;
		/** Internal Use Only */
		YammerPostMethod: DevKit.WebApi.OptionSetValue;
		/** Information that specifies how the first week of the year is specified in Microsoft Dynamics 365. */
		YearStartWeekCode: DevKit.WebApi.IntegerValue;
	}
}
declare namespace OptionSet {
	namespace Organization {
		enum CurrencyDisplayOption {
			/** 1 */
			Currency_code,
			/** 0 */
			Currency_symbol
		}
		enum CurrencyFormatCode {
			/** 3 */
			_123_,
			/** 0 */
			_123_0,
			/** 1 */
			_123_1,
			/** 2 */
			_123_2
		}
		enum DateFormatCode {
		}
		enum DefaultRecurrenceEndRangeType {
			/** 3 */
			End_By_Date,
			/** 1 */
			No_End_Date,
			/** 2 */
			Number_of_Occurrences
		}
		enum DiscountCalculationMethod {
			/** 0 */
			Line_item,
			/** 1 */
			Per_unit
		}
		enum EmailConnectionChannel {
			/** 1 */
			Microsoft_Dynamics_365_Email_Router,
			/** 0 */
			Server_Side_Synchronization
		}
		enum FiscalPeriodFormatPeriod {
			/** 5 */
			M0,
			/** 4 */
			Month_0,
			/** 7 */
			Month_Name,
			/** 3 */
			P0,
			/** 2 */
			Q0,
			/** 1 */
			Quarter_0,
			/** 6 */
			Semester_0
		}
		enum FiscalYearFormatPrefix {
			/** 2 */
			_,
			/** 1 */
			FY
		}
		enum FiscalYearFormatSuffix {
			/** 3 */
			_,
			/** 2 */
			_Fiscal_Year,
			/** 1 */
			FY
		}
		enum FiscalYearFormatYear {
			/** 3 */
			GGYY,
			/** 2 */
			YY,
			/** 1 */
			YYYY
		}
		enum FullNameConventionCode {
			/** 1 */
			First_Name,
			/** 3 */
			First_Name_Middle_Initial_Last_Name,
			/** 5 */
			First_Name_Middle_Name_Last_Name,
			/** 0 */
			Last_Name_First_Name,
			/** 2 */
			Last_Name_First_Name_Middle_Initial,
			/** 4 */
			Last_Name_First_Name_Middle_Name,
			/** 7 */
			Last_Name_no_space_First_Name,
			/** 6 */
			Last_Name_space_First_Name
		}
		enum ISVIntegrationCode {
			/** 7 */
			All,
			/** 0 */
			None,
			/** 6 */
			Outlook,
			/** 4 */
			Outlook_Laptop_Client,
			/** 2 */
			Outlook_Workstation_Client,
			/** 1 */
			Web,
			/** 5 */
			Web_Outlook_Laptop_Client,
			/** 3 */
			Web_Outlook_Workstation_Client
		}
		enum NegativeFormatCode {
			/** 0 */
			Brackets,
			/** 1 */
			Dash,
			/** 2 */
			Dash_plus_Space,
			/** 4 */
			Space_plus_Trailing_Dash,
			/** 3 */
			Trailing_Dash
		}
		enum OrganizationState {
			/** 3 */
			Active,
			/** 0 */
			Creating,
			/** 2 */
			Updating,
			/** 1 */
			Upgrading
		}
		enum PluginTraceLogSetting {
			/** 2 */
			All,
			/** 1 */
			Exception,
			/** 0 */
			Off
		}
		enum ReportScriptErrors {
			/** 1 */
			Ask_me_for_permission_to_send_an_error_report_to_Microsoft,
			/** 2 */
			Automatically_send_an_error_report_to_Microsoft_without_asking_me_for_permission,
			/** 3 */
			Never_send_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365,
			/** 0 */
			No_preference_for_sending_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365
		}
		enum SharePointDeploymentType {
			/** 1 */
			On_Premises,
			/** 0 */
			Online
		}
		enum SyncOptInSelectionStatus {
			/** 3 */
			Failed,
			/** 2 */
			Passed,
			/** 1 */
			Processing
		}
		enum TimeFormatCode {
		}
		enum WeekStartDayCode {
		}
		enum YammerPostMethod {
			/** 1 */
			Private,
			/** 0 */
			Public
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}