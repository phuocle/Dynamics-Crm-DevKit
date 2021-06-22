'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.OrganizationApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
        function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
            var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
            var property = {};
            var getFormattedValue = function () {
                if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
                    return EMPTY_STRING;
                }
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    if (entity[logicalName + l] === entityLogicalName) {
                        return entity[logicalName + f];
                    }
                    return EMPTY_STRING;
                }
                if (isMultiOptionSet) {
                    return entity[logicalName + f].toString().split(';').map(function (item) { return item.trim(); });
                }
                return entity[logicalName + f];
            };
            var getValue = function () {
                if (entity[logicalName] === undefined || entity[logicalName] === null) {
                    return null;
                }
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    if (entity[logicalName + l] === undefined || entity[logicalName + l] === entityLogicalName) {
                        return entity[logicalName];
                    }
                    return null;
                }
                if (isMultiOptionSet) {
                    return entity[logicalName].toString().split(',').map(function (item) { return parseInt(item, 10); });
                }
                return entity[logicalName];
            };
            var setValue = function (value) {
                if (isMultiOptionSet) value = value.join(',');
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
                    upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
                } else {
                    upsertEntity[logicalName] = value;
                }
                entity[logicalName] = value;
            };
            Object.defineProperty(property, 'FormattedValue', {
                get: getFormattedValue
            });
            if (readOnly) {
                Object.defineProperty(property, 'Value', {
                    get: getValue
                });
            }
            else {
                Object.defineProperty(property, 'Value', {
                    get: getValue,
                    set: setValue
                });
            }
            return property;
        }
		var organization = {
			ACIWebEndpointUrl: { a: 'aciwebendpointurl' },
			AcknowledgementTemplateId: { b: 'acknowledgementtemplateid', a: '_acknowledgementtemplateid_value', c: 'templates', d: 'template' },
			AdvancedLookupEnabled: { a: 'advancedlookupenabled' },
			AllowAddressBookSyncs: { a: 'allowaddressbooksyncs' },
			AllowAutoResponseCreation: { a: 'allowautoresponsecreation' },
			AllowAutoUnsubscribe: { a: 'allowautounsubscribe' },
			AllowAutoUnsubscribeAcknowledgement: { a: 'allowautounsubscribeacknowledgement' },
			AllowClientMessageBarAd: { a: 'allowclientmessagebarad' },
			AllowEntityOnlyAudit: { a: 'allowentityonlyaudit' },
			AllowLegacyClientExperience: { a: 'allowlegacyclientexperience' },
			AllowLegacyDialogsEmbedding: { a: 'allowlegacydialogsembedding' },
			AllowMarketingEmailExecution: { a: 'allowmarketingemailexecution' },
			AllowOfflineScheduledSyncs: { a: 'allowofflinescheduledsyncs' },
			AllowOutlookScheduledSyncs: { a: 'allowoutlookscheduledsyncs' },
			AllowUnresolvedPartiesOnEmailSend: { a: 'allowunresolvedpartiesonemailsend' },
			AllowUserFormModePreference: { a: 'allowuserformmodepreference' },
			AllowUsersSeeAppdownloadMessage: { a: 'allowusersseeappdownloadmessage' },
			AllowWebExcelExport: { a: 'allowwebexcelexport' },
			AMDesignator: { a: 'amdesignator' },
			AppDesignerExperienceEnabled: { a: 'appdesignerexperienceenabled' },
			AppointmentRichEditorExperience: { a: 'appointmentricheditorexperience' },
			AuditRetentionPeriod: { a: 'auditretentionperiod' },
			AuditRetentionPeriodV2: { a: 'auditretentionperiodv2' },
			AutoApplyDefaultonCaseCreate: { a: 'autoapplydefaultoncasecreate' },
			AutoApplyDefaultonCaseUpdate: { a: 'autoapplydefaultoncaseupdate' },
			AutoApplySLA: { a: 'autoapplysla' },
			AzureSchedulerJobCollectionName: { a: 'azureschedulerjobcollectionname' },
			BaseCurrencyId: { b: 'basecurrencyid', a: '_basecurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			BaseCurrencyPrecision: { a: 'basecurrencyprecision', r: true },
			BaseCurrencySymbol: { a: 'basecurrencysymbol', r: true },
			BaseISOCurrencyCode: { a: 'baseisocurrencycode', r: true },
			BingMapsApiKey: { a: 'bingmapsapikey' },
			BlockedAttachments: { a: 'blockedattachments' },
			BoundDashboardDefaultCardExpanded: { a: 'bounddashboarddefaultcardexpanded' },
			BulkOperationPrefix: { a: 'bulkoperationprefix' },
			BusinessCardOptions: { a: 'businesscardoptions' },
			BusinessClosureCalendarId: { a: 'businessclosurecalendarid' },
			CalendarType: { a: 'calendartype' },
			CampaignPrefix: { a: 'campaignprefix' },
			CanOptOutNewSearchExperience: { a: 'canoptoutnewsearchexperience' },
			CascadeStatusUpdate: { a: 'cascadestatusupdate' },
			CasePrefix: { a: 'caseprefix' },
			CategoryPrefix: { a: 'categoryprefix' },
			ClientFeatureSet: { a: 'clientfeatureset' },
			ContentSecurityPolicyConfiguration: { a: 'contentsecuritypolicyconfiguration' },
			ContractPrefix: { a: 'contractprefix' },
			CortanaProactiveExperienceEnabled: { a: 'cortanaproactiveexperienceenabled' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreateProductsWithoutParentInActiveState: { a: 'createproductswithoutparentinactivestate' },
			CurrencyDecimalPrecision: { a: 'currencydecimalprecision' },
			CurrencyDisplayOption: { a: 'currencydisplayoption' },
			CurrencyFormatCode: { a: 'currencyformatcode' },
			CurrencySymbol: { a: 'currencysymbol' },
			CurrentImportSequenceNumber: { a: 'currentimportsequencenumber', r: true },
			CurrentParsedTableNumber: { a: 'currentparsedtablenumber', r: true },
			DateFormatCode: { a: 'dateformatcode' },
			DateFormatString: { a: 'dateformatstring' },
			DateSeparator: { a: 'dateseparator' },
			DaysSinceRecordLastModifiedMaxValue: { a: 'dayssincerecordlastmodifiedmaxvalue', r: true },
			DecimalSymbol: { a: 'decimalsymbol' },
			DefaultCountryCode: { a: 'defaultcountrycode' },
			DefaultCrmCustomName: { a: 'defaultcrmcustomname' },
			DefaultEmailServerProfileId: { b: 'defaultemailserverprofileid', a: '_defaultemailserverprofileid_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			DefaultEmailSettings: { a: 'defaultemailsettings' },
			DefaultMobileOfflineProfileId: { b: 'defaultmobileofflineprofileid', a: '_defaultmobileofflineprofileid_value', c: 'mobileofflineprofiles', d: 'mobileofflineprofile' },
			DefaultRecurrenceEndRangeType: { a: 'defaultrecurrenceendrangetype' },
			DefaultThemeData: { a: 'defaultthemedata' },
			DelegatedAdminUserId: { a: 'delegatedadminuserid' },
			DisabledReason: { a: 'disabledreason', r: true },
			DisableSocialCare: { a: 'disablesocialcare' },
			DiscountCalculationMethod: { a: 'discountcalculationmethod' },
			DisplayNavigationTour: { a: 'displaynavigationtour' },
			EmailConnectionChannel: { a: 'emailconnectionchannel' },
			EmailCorrelationEnabled: { a: 'emailcorrelationenabled' },
			EmailSendPollingPeriod: { a: 'emailsendpollingperiod' },
			EnableBingMapsIntegration: { a: 'enablebingmapsintegration' },
			EnableImmersiveSkypeIntegration: { a: 'enableimmersiveskypeintegration' },
			EnableLivePersonaCardUCI: { a: 'enablelivepersonacarduci' },
			EnableLivePersonCardIntegrationInOffice: { a: 'enablelivepersoncardintegrationinoffice' },
			EnableLPAuthoring: { a: 'enablelpauthoring' },
			EnableMicrosoftFlowIntegration: { a: 'enablemicrosoftflowintegration' },
			EnablePricingOnCreate: { a: 'enablepricingoncreate' },
			EnableSmartMatching: { a: 'enablesmartmatching' },
			EnableUnifiedInterfaceShellRefresh: { a: 'enableunifiedinterfaceshellrefresh' },
			EnforceReadOnlyPlugins: { a: 'enforcereadonlyplugins' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExpireChangeTrackingInDays: { a: 'expirechangetrackingindays' },
			ExpireSubscriptionsInDays: { a: 'expiresubscriptionsindays' },
			ExternalBaseUrl: { a: 'externalbaseurl' },
			ExternalPartyCorrelationKeys: { a: 'externalpartycorrelationkeys' },
			ExternalPartyEntitySettings: { a: 'externalpartyentitysettings' },
			FeatureSet: { a: 'featureset' },
			FiscalCalendarStart_UtcDateOnly: { a: 'fiscalcalendarstart' },
			FiscalPeriodFormat: { a: 'fiscalperiodformat' },
			FiscalPeriodFormatPeriod: { a: 'fiscalperiodformatperiod' },
			FiscalPeriodType: { a: 'fiscalperiodtype' },
			FiscalYearDisplayCode: { a: 'fiscalyeardisplaycode' },
			FiscalYearFormat: { a: 'fiscalyearformat' },
			FiscalYearFormatPrefix: { a: 'fiscalyearformatprefix' },
			FiscalYearFormatSuffix: { a: 'fiscalyearformatsuffix' },
			FiscalYearFormatYear: { a: 'fiscalyearformatyear' },
			FiscalYearPeriodConnect: { a: 'fiscalyearperiodconnect' },
			FullNameConventionCode: { a: 'fullnameconventioncode' },
			FutureExpansionWindow: { a: 'futureexpansionwindow' },
			GenerateAlertsForErrors: { a: 'generatealertsforerrors' },
			GenerateAlertsForInformation: { a: 'generatealertsforinformation' },
			GenerateAlertsForWarnings: { a: 'generatealertsforwarnings' },
			GetStartedPaneContentEnabled: { a: 'getstartedpanecontentenabled' },
			GlobalAppendUrlParametersEnabled: { a: 'globalappendurlparametersenabled' },
			GlobalHelpUrl: { a: 'globalhelpurl' },
			GlobalHelpUrlEnabled: { a: 'globalhelpurlenabled' },
			GoalRollupExpiryTime: { a: 'goalrollupexpirytime' },
			GoalRollupFrequency: { a: 'goalrollupfrequency' },
			GrantAccessToNetworkService: { a: 'grantaccesstonetworkservice' },
			HashDeltaSubjectCount: { a: 'hashdeltasubjectcount' },
			HashFilterKeywords: { a: 'hashfilterkeywords' },
			HashMaxCount: { a: 'hashmaxcount' },
			HashMinAddressCount: { a: 'hashminaddresscount' },
			HighContrastThemeData: { a: 'highcontrastthemedata' },
			IgnoreInternalEmail: { a: 'ignoreinternalemail' },
			ImproveSearchLoggingEnabled: { a: 'improvesearchloggingenabled' },
			InactivityTimeoutEnabled: { a: 'inactivitytimeoutenabled' },
			InactivityTimeoutInMins: { a: 'inactivitytimeoutinmins' },
			InactivityTimeoutReminderInMins: { a: 'inactivitytimeoutreminderinmins' },
			IncomingEmailExchangeEmailRetrievalBatchSize: { a: 'incomingemailexchangeemailretrievalbatchsize' },
			InitialVersion: { a: 'initialversion' },
			IntegrationUserId: { a: 'integrationuserid' },
			InvoicePrefix: { a: 'invoiceprefix' },
			IsActionCardEnabled: { a: 'isactioncardenabled' },
			IsActionSupportFeatureEnabled: { a: 'isactionsupportfeatureenabled' },
			IsActivityAnalysisEnabled: { a: 'isactivityanalysisenabled' },
			IsAllMoneyDecimal: { a: 'isallmoneydecimal', r: true },
			IsAppMode: { a: 'isappmode' },
			IsAppointmentAttachmentSyncEnabled: { a: 'isappointmentattachmentsyncenabled' },
			IsAssignedTasksSyncEnabled: { a: 'isassignedtaskssyncenabled' },
			IsAuditEnabled: { a: 'isauditenabled' },
			IsAutoDataCaptureEnabled: { a: 'isautodatacaptureenabled' },
			IsAutoDataCaptureV2Enabled: { a: 'isautodatacapturev2enabled' },
			IsAutoSaveEnabled: { a: 'isautosaveenabled' },
			IsBPFEntityCustomizationFeatureEnabled: { a: 'isbpfentitycustomizationfeatureenabled' },
			IsConflictDetectionEnabledForMobileClient: { a: 'isconflictdetectionenabledformobileclient' },
			IsContactMailingAddressSyncEnabled: { a: 'iscontactmailingaddresssyncenabled' },
			IsContentSecurityPolicyEnabled: { a: 'iscontentsecuritypolicyenabled' },
			IsContextualEmailEnabled: { a: 'iscontextualemailenabled' },
			IsContextualHelpEnabled: { a: 'iscontextualhelpenabled' },
			IsCustomControlsInCanvasAppsEnabled: { a: 'iscustomcontrolsincanvasappsenabled' },
			IsDefaultCountryCodeCheckEnabled: { a: 'isdefaultcountrycodecheckenabled' },
			IsDelegateAccessEnabled: { a: 'isdelegateaccessenabled' },
			IsDelveActionHubIntegrationEnabled: { a: 'isdelveactionhubintegrationenabled' },
			IsDisabled: { a: 'isdisabled', r: true },
			IsDuplicateDetectionEnabled: { a: 'isduplicatedetectionenabled' },
			IsDuplicateDetectionEnabledForImport: { a: 'isduplicatedetectionenabledforimport' },
			IsDuplicateDetectionEnabledForOfflineSync: { a: 'isduplicatedetectionenabledforofflinesync' },
			IsDuplicateDetectionEnabledForOnlineCreateUpdate: { a: 'isduplicatedetectionenabledforonlinecreateupdate' },
			IsEmailMonitoringAllowed: { a: 'isemailmonitoringallowed' },
			IsEmailServerProfileContentFilteringEnabled: { a: 'isemailserverprofilecontentfilteringenabled' },
			IsEnabledForAllRoles: { a: 'isenabledforallroles' },
			IsExternalFileStorageEnabled: { a: 'isexternalfilestorageenabled' },
			IsExternalSearchIndexEnabled: { a: 'isexternalsearchindexenabled' },
			IsFiscalPeriodMonthBased: { a: 'isfiscalperiodmonthbased' },
			IsFolderAutoCreatedonSP: { a: 'isfolderautocreatedonsp' },
			IsFolderBasedTrackingEnabled: { a: 'isfolderbasedtrackingenabled' },
			IsFullTextSearchEnabled: { a: 'isfulltextsearchenabled' },
			IsGeospatialAzureMapsIntegrationEnabled: { a: 'isgeospatialazuremapsintegrationenabled' },
			IsHierarchicalSecurityModelEnabled: { a: 'ishierarchicalsecuritymodelenabled' },
			IsLUISEnabledforD365Bot: { a: 'isluisenabledford365bot' },
			IsMailboxForcedUnlockingEnabled: { a: 'ismailboxforcedunlockingenabled' },
			IsMailboxInactiveBackoffEnabled: { a: 'ismailboxinactivebackoffenabled' },
			IsManualSalesForecastingEnabled: { a: 'ismanualsalesforecastingenabled' },
			IsMobileClientOnDemandSyncEnabled: { a: 'ismobileclientondemandsyncenabled' },
			IsMobileOfflineEnabled: { a: 'ismobileofflineenabled' },
			IsModelDrivenAppsInMSTeamsEnabled: { a: 'ismodeldrivenappsinmsteamsenabled' },
			IsMSTeamsCollaborationEnabled: { a: 'ismsteamscollaborationenabled' },
			IsMSTeamsEnabled: { a: 'ismsteamsenabled' },
			IsMSTeamsSettingChangedByUser: { a: 'ismsteamssettingchangedbyuser' },
			IsMSTeamsUserSyncEnabled: { a: 'ismsteamsusersyncenabled' },
			IsNewAddProductExperienceEnabled: { a: 'isnewaddproductexperienceenabled' },
			IsNotesAnalysisEnabled: { a: 'isnotesanalysisenabled' },
			IsOfficeGraphEnabled: { a: 'isofficegraphenabled' },
			IsOneDriveEnabled: { a: 'isonedriveenabled' },
			IsPAIEnabled: { a: 'ispaienabled' },
			IsPDFGenerationEnabled: { a: 'ispdfgenerationenabled' },
			IsPlaybookEnabled: { a: 'isplaybookenabled' },
			IsPresenceEnabled: { a: 'ispresenceenabled' },
			IsPreviewEnabledForActionCard: { a: 'ispreviewenabledforactioncard' },
			IsPreviewForAutoCaptureEnabled: { a: 'ispreviewforautocaptureenabled' },
			IsPreviewForEmailMonitoringAllowed: { a: 'ispreviewforemailmonitoringallowed' },
			IsPriceListMandatory: { a: 'ispricelistmandatory' },
			IsQuickCreateEnabledForOpportunityClose: { a: 'isquickcreateenabledforopportunityclose' },
			IsReadAuditEnabled: { a: 'isreadauditenabled' },
			IsRelationshipInsightsEnabled: { a: 'isrelationshipinsightsenabled' },
			IsResourceBookingExchangeSyncEnabled: { a: 'isresourcebookingexchangesyncenabled' },
			IsRichTextNotesEnabled: { a: 'isrichtextnotesenabled' },
			IsSalesAssistantEnabled: { a: 'issalesassistantenabled' },
			IsSOPIntegrationEnabled: { a: 'issopintegrationenabled' },
			IsTextWrapEnabled: { a: 'istextwrapenabled' },
			IsUserAccessAuditEnabled: { a: 'isuseraccessauditenabled' },
			IsWriteInProductsAllowed: { a: 'iswriteinproductsallowed' },
			KaPrefix: { a: 'kaprefix' },
			KbPrefix: { a: 'kbprefix' },
			KMSettings: { a: 'kmsettings' },
			LanguageCode: { a: 'languagecode' },
			LocaleId: { a: 'localeid' },
			LongDateFormatCode: { a: 'longdateformatcode' },
			LookupCharacterCountBeforeResolve: { a: 'lookupcharactercountbeforeresolve' },
			LookupResolveDelayMS: { a: 'lookupresolvedelayms' },
			MailboxIntermittentIssueMinRange: { a: 'mailboxintermittentissueminrange' },
			MailboxPermanentIssueMinRange: { a: 'mailboxpermanentissueminrange' },
			MaxActionStepsInBPF: { a: 'maxactionstepsinbpf' },
			MaxAppointmentDurationDays: { a: 'maxappointmentdurationdays' },
			MaxConditionsForMobileOfflineFilters: { a: 'maxconditionsformobileofflinefilters' },
			MaxDepthForHierarchicalSecurityModel: { a: 'maxdepthforhierarchicalsecuritymodel' },
			MaxFolderBasedTrackingMappings: { a: 'maxfolderbasedtrackingmappings' },
			MaximumActiveBusinessProcessFlowsAllowedPerEntity: { a: 'maximumactivebusinessprocessflowsallowedperentity' },
			MaximumDynamicPropertiesAllowed: { a: 'maximumdynamicpropertiesallowed' },
			MaximumEntitiesWithActiveSLA: { a: 'maximumentitieswithactivesla' },
			MaximumSLAKPIPerEntityWithActiveSLA: { a: 'maximumslakpiperentitywithactivesla' },
			MaximumTrackingNumber: { a: 'maximumtrackingnumber' },
			MaxProductsInBundle: { a: 'maxproductsinbundle' },
			MaxRecordsForExportToExcel: { a: 'maxrecordsforexporttoexcel' },
			MaxRecordsForLookupFilters: { a: 'maxrecordsforlookupfilters' },
			MaxSLAItemsPerSLA: { a: 'maxslaitemspersla' },
			MaxSupportedInternetExplorerVersion: { a: 'maxsupportedinternetexplorerversion', r: true },
			MaxUploadFileSize: { a: 'maxuploadfilesize' },
			MaxVerboseLoggingMailbox: { a: 'maxverboseloggingmailbox', r: true },
			MaxVerboseLoggingSyncCycles: { a: 'maxverboseloggingsynccycles', r: true },
			MetadataSyncLastTimeOfNeverExpiredDeletedObjects_UtcDateAndTime: { a: 'metadatasynclasttimeofneverexpireddeletedobjects', r: true },
			MicrosoftFlowEnvironment: { a: 'microsoftflowenvironment' },
			MinAddressBookSyncInterval: { a: 'minaddressbooksyncinterval' },
			MinOfflineSyncInterval: { a: 'minofflinesyncinterval' },
			MinOutlookSyncInterval: { a: 'minoutlooksyncinterval' },
			MobileOfflineMinLicenseProd: { a: 'mobileofflineminlicenseprod', r: true },
			MobileOfflineMinLicenseTrial: { a: 'mobileofflineminlicensetrial', r: true },
			MobileOfflineSyncInterval: { a: 'mobileofflinesyncinterval' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			NegativeCurrencyFormatCode: { a: 'negativecurrencyformatcode' },
			NegativeFormatCode: { a: 'negativeformatcode' },
			NewSearchExperienceEnabled: { a: 'newsearchexperienceenabled' },
			NextCustomObjectTypeCode: { a: 'nextcustomobjecttypecode', r: true },
			NextTrackingNumber: { a: 'nexttrackingnumber' },
			NotifyMailboxOwnerOfEmailServerLevelAlerts: { a: 'notifymailboxownerofemailserverlevelalerts' },
			NumberFormat: { a: 'numberformat' },
			NumberGroupFormat: { a: 'numbergroupformat' },
			NumberSeparator: { a: 'numberseparator' },
			OfficeAppsAutoDeploymentEnabled: { a: 'officeappsautodeploymentenabled' },
			OfficeGraphDelveUrl: { a: 'officegraphdelveurl' },
			OOBPriceCalculationEnabled: { a: 'oobpricecalculationenabled' },
			OrderPrefix: { a: 'orderprefix' },
			OrganizationId: { a: 'organizationid', r: true },
			OrganizationState: { a: 'organizationstate', r: true },
			OrgDbOrgSettings: { a: 'orgdborgsettings' },
			OrgInsightsEnabled: { a: 'orginsightsenabled' },
			PaiPreviewScenarioEnabled: { a: 'paipreviewscenarioenabled' },
			ParsedTableColumnPrefix: { a: 'parsedtablecolumnprefix', r: true },
			ParsedTablePrefix: { a: 'parsedtableprefix', r: true },
			PastExpansionWindow: { a: 'pastexpansionwindow' },
			Picture: { a: 'picture' },
			PinpointLanguageCode: { a: 'pinpointlanguagecode' },
			PluginTraceLogSetting: { a: 'plugintracelogsetting' },
			PMDesignator: { a: 'pmdesignator' },
			PostMessageWhitelistDomains: { a: 'postmessagewhitelistdomains' },
			PowerBiFeatureEnabled: { a: 'powerbifeatureenabled' },
			PricingDecimalPrecision: { a: 'pricingdecimalprecision' },
			PrivacyStatementUrl: { a: 'privacystatementurl' },
			PrivilegeUserGroupId: { a: 'privilegeusergroupid' },
			PrivReportingGroupId: { a: 'privreportinggroupid' },
			PrivReportingGroupName: { a: 'privreportinggroupname' },
			ProductRecommendationsEnabled: { a: 'productrecommendationsenabled' },
			QualifyLeadAdditionalOptions: { a: 'qualifyleadadditionaloptions' },
			QuickFindRecordLimitEnabled: { a: 'quickfindrecordlimitenabled' },
			QuotePrefix: { a: 'quoteprefix' },
			RecurrenceDefaultNumberOfOccurrences: { a: 'recurrencedefaultnumberofoccurrences' },
			RecurrenceExpansionJobBatchInterval: { a: 'recurrenceexpansionjobbatchinterval' },
			RecurrenceExpansionJobBatchSize: { a: 'recurrenceexpansionjobbatchsize' },
			RecurrenceExpansionSynchCreateMax: { a: 'recurrenceexpansionsynchcreatemax' },
			RelevanceSearchEnabledByPlatform: { a: 'relevancesearchenabledbyplatform' },
			RenderSecureIFrameForEmail: { a: 'rendersecureiframeforemail' },
			ReportingGroupId: { a: 'reportinggroupid' },
			ReportingGroupName: { a: 'reportinggroupname' },
			ReportScriptErrors: { a: 'reportscripterrors' },
			RequireApprovalForQueueEmail: { a: 'requireapprovalforqueueemail' },
			RequireApprovalForUserEmail: { a: 'requireapprovalforuseremail' },
			ResolveSimilarUnresolvedEmailAddress: { a: 'resolvesimilarunresolvedemailaddress' },
			RestrictStatusUpdate: { a: 'restrictstatusupdate' },
			RiErrorStatus: { a: 'rierrorstatus' },
			SampleDataImportId: { a: 'sampledataimportid' },
			SchemaNamePrefix: { a: 'schemanameprefix' },
			SendBulkEmailInUCI: { a: 'sendbulkemailinuci' },
			ServeStaticResourcesFromAzureCDN: { a: 'servestaticresourcesfromazurecdn' },
			SessionTimeoutEnabled: { a: 'sessiontimeoutenabled' },
			SessionTimeoutInMins: { a: 'sessiontimeoutinmins' },
			SessionTimeoutReminderInMins: { a: 'sessiontimeoutreminderinmins' },
			SharePointDeploymentType: { a: 'sharepointdeploymenttype' },
			ShareToPreviousOwnerOnAssign: { a: 'sharetopreviousowneronassign' },
			ShowKBArticleDeprecationNotification: { a: 'showkbarticledeprecationnotification' },
			ShowWeekNumber: { a: 'showweeknumber' },
			SignupOutlookDownloadFWLink: { a: 'signupoutlookdownloadfwlink' },
			SlaPauseStates: { a: 'slapausestates' },
			SocialInsightsEnabled: { a: 'socialinsightsenabled' },
			SocialInsightsInstance: { a: 'socialinsightsinstance' },
			SocialInsightsTermsAccepted: { a: 'socialinsightstermsaccepted' },
			SortId: { a: 'sortid' },
			SqlAccessGroupId: { a: 'sqlaccessgroupid' },
			SqlAccessGroupName: { a: 'sqlaccessgroupname' },
			SQMEnabled: { a: 'sqmenabled' },
			SupportUserId: { a: 'supportuserid' },
			SuppressSLA: { a: 'suppresssla' },
			SyncBulkOperationBatchSize: { a: 'syncbulkoperationbatchsize' },
			SyncBulkOperationMaxLimit: { a: 'syncbulkoperationmaxlimit' },
			SyncOptInSelection: { a: 'syncoptinselection' },
			SyncOptInSelectionStatus: { a: 'syncoptinselectionstatus' },
			SystemUserId: { a: 'systemuserid' },
			TagMaxAggressiveCycles: { a: 'tagmaxaggressivecycles' },
			TagPollingPeriod: { a: 'tagpollingperiod' },
			TaskBasedFlowEnabled: { a: 'taskbasedflowenabled' },
			TelemetryInstrumentationKey: { a: 'telemetryinstrumentationkey' },
			TextAnalyticsEnabled: { a: 'textanalyticsenabled' },
			TimeFormatCode: { a: 'timeformatcode' },
			TimeFormatString: { a: 'timeformatstring' },
			TimeSeparator: { a: 'timeseparator' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TokenExpiry: { a: 'tokenexpiry' },
			TokenKey: { a: 'tokenkey' },
			TraceLogMaximumAgeInDays: { a: 'tracelogmaximumageindays' },
			TrackingPrefix: { a: 'trackingprefix' },
			TrackingTokenIdBase: { a: 'trackingtokenidbase' },
			TrackingTokenIdDigits: { a: 'trackingtokeniddigits' },
			UniqueSpecifierLength: { a: 'uniquespecifierlength' },
			UnresolveEmailAddressIfMultipleMatch: { a: 'unresolveemailaddressifmultiplematch' },
			UseInbuiltRuleForDefaultPricelistSelection: { a: 'useinbuiltrulefordefaultpricelistselection' },
			UseLegacyRendering: { a: 'uselegacyrendering' },
			UsePositionHierarchy: { a: 'usepositionhierarchy' },
			UseQuickFindViewForGridSearch: { a: 'usequickfindviewforgridsearch' },
			UserAccessAuditingInterval: { a: 'useraccessauditinginterval' },
			UseReadForm: { a: 'usereadform' },
			UserGroupId: { a: 'usergroupid' },
			UseSkypeProtocol: { a: 'useskypeprotocol' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			V3CalloutConfigHash: { a: 'v3calloutconfighash', r: true },
			VersionNumber: { a: 'versionnumber', r: true },
			WebResourceHash: { a: 'webresourcehash' },
			WeekStartDayCode: { a: 'weekstartdaycode' },
			WidgetProperties: { a: 'widgetproperties' },
			YammerGroupId: { a: 'yammergroupid' },
			YammerNetworkPermalink: { a: 'yammernetworkpermalink' },
			YammerOAuthAccessTokenExpired: { a: 'yammeroauthaccesstokenexpired' },
			YammerPostMethod: { a: 'yammerpostmethod' },
			YearStartWeekCode: { a: 'yearstartweekcode' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in organization) {
			var a = organization[field].a;
			var b = organization[field].b;
			var c = organization[field].c;
			var d = organization[field].d;
			var g = organization[field].g;
			var r = organization[field].r;
			organization[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		organization.Entity = u;
		organization.EntityName = 'organization';
		organization.EntityCollectionName = 'organizations';
		organization['@odata.etag'] = e['@odata.etag'];
		organization.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		organization.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return organization;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Organization = {
		CurrencyDisplayOption : {
			Currency_code: 1,
			Currency_symbol: 0
		},
		CurrencyFormatCode : {
			_123_: 3,
			_123_0: 0,
			_123_1: 1,
			_123_2: 2
		},
		DateFormatCode : {
		},
		DefaultRecurrenceEndRangeType : {
			End_By_Date: 3,
			No_End_Date: 1,
			Number_of_Occurrences: 2
		},
		DiscountCalculationMethod : {
			Line_item: 0,
			Per_unit: 1
		},
		EmailConnectionChannel : {
			Microsoft_Dynamics_365_Email_Router: 1,
			Server_Side_Synchronization: 0
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
			_: 2,
			FY: 1
		},
		FiscalYearFormatSuffix : {
			_: 3,
			_Fiscal_Year: 2,
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
		ReportScriptErrors : {
			Ask_me_for_permission_to_send_an_error_report_to_Microsoft: 1,
			Automatically_send_an_error_report_to_Microsoft_without_asking_me_for_permission: 2,
			Never_send_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365: 3,
			No_preference_for_sending_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365: 0
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