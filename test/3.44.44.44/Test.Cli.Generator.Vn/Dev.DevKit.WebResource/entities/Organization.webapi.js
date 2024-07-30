'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.OrganizationApi = function (e) {
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return '';
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
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						value = value.replace('{', '').replace('}', '');
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
					}
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(obj.FormattedValue, field, {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(obj, field, {
					get: getValue
				});
			}
			else {
				Object.defineProperty(obj, field, {
					get: getValue,
					set: setValue
				});
			}
		}
		var _organization = {
			ACIWebEndpointUrl: { a: 'aciwebendpointurl' },
			AcknowledgementTemplateId: { b: 'acknowledgementtemplateid', a: '_acknowledgementtemplateid_value', c: 'templates', d: 'template' },
			ActivityTypeFilter: { a: 'activitytypefilter' },
			ActivityTypeFilterV2: { a: 'activitytypefilterv2' },
			AdvancedColumnEditorEnabled: { a: 'advancedcolumneditorenabled' },
			AdvancedColumnFilteringEnabled: { a: 'advancedcolumnfilteringenabled' },
			AdvancedFilteringEnabled: { a: 'advancedfilteringenabled' },
			AdvancedLookupEnabled: { a: 'advancedlookupenabled' },
			AdvancedLookupInEditFilter: { a: 'advancedlookupineditfilter' },
			AiPromptsEnabled: { a: 'aipromptsenabled' },
			AllowAddressBookSyncs: { a: 'allowaddressbooksyncs' },
			AllowApplicationUserAccess: { a: 'allowapplicationuseraccess' },
			AllowAutoResponseCreation: { a: 'allowautoresponsecreation' },
			AllowAutoUnsubscribe: { a: 'allowautounsubscribe' },
			AllowAutoUnsubscribeAcknowledgement: { a: 'allowautounsubscribeacknowledgement' },
			AllowClientMessageBarAd: { a: 'allowclientmessagebarad' },
			AllowConnectorsOnPowerFXActions: { a: 'allowconnectorsonpowerfxactions' },
			AllowedApplicationsForDVAccess: { a: 'allowedapplicationsfordvaccess' },
			AllowedIpRangeForFirewall: { a: 'allowediprangeforfirewall' },
			AllowedIpRangeForStorageAccessSignatures: { a: 'allowediprangeforstorageaccesssignatures' },
			AllowedMimeTypes: { a: 'allowedmimetypes' },
			AllowedServiceTagsForFirewall: { a: 'allowedservicetagsforfirewall' },
			AllowEntityOnlyAudit: { a: 'allowentityonlyaudit' },
			AllowLeadingWildcardsInGridSearch: { a: 'allowleadingwildcardsingridsearch' },
			AllowLeadingWildcardsInQuickFind: { a: 'allowleadingwildcardsinquickfind' },
			AllowLegacyClientExperience: { a: 'allowlegacyclientexperience' },
			AllowLegacyDialogsEmbedding: { a: 'allowlegacydialogsembedding' },
			AllowMarketingEmailExecution: { a: 'allowmarketingemailexecution' },
			AllowMicrosoftTrustedServiceTags: { a: 'allowmicrosofttrustedservicetags' },
			AllowOfflineScheduledSyncs: { a: 'allowofflinescheduledsyncs' },
			AllowOutlookScheduledSyncs: { a: 'allowoutlookscheduledsyncs' },
			AllowRedirectAdminSettingsToModernUI: { a: 'allowredirectadminsettingstomodernui' },
			AllowUnresolvedPartiesOnEmailSend: { a: 'allowunresolvedpartiesonemailsend' },
			AllowUserFormModePreference: { a: 'allowuserformmodepreference' },
			AllowUsersHidingSystemViews: { a: 'allowusershidingsystemviews' },
			AllowUsersSeeAppdownloadMessage: { a: 'allowusersseeappdownloadmessage' },
			AllowWebExcelExport: { a: 'allowwebexcelexport' },
			AMDesignator: { a: 'amdesignator' },
			AppDesignerExperienceEnabled: { a: 'appdesignerexperienceenabled' },
			ApplicationBasedAccessControlMode: { a: 'applicationbasedaccesscontrolmode' },
			AppointmentRichEditorExperience: { a: 'appointmentricheditorexperience' },
			AppointmentWithTeamsMeeting: { a: 'appointmentwithteamsmeeting' },
			AppointmentWithTeamsMeetingV2: { a: 'appointmentwithteamsmeetingv2' },
			AuditRetentionPeriod: { a: 'auditretentionperiod' },
			AuditRetentionPeriodV2: { a: 'auditretentionperiodv2' },
			AuditSettings: { a: 'auditsettings' },
			AutoApplyDefaultonCaseCreate: { a: 'autoapplydefaultoncasecreate' },
			AutoApplyDefaultonCaseUpdate: { a: 'autoapplydefaultoncaseupdate' },
			AutoApplySLA: { a: 'autoapplysla' },
			AzureSchedulerJobCollectionName: { a: 'azureschedulerjobcollectionname' },
			BaseCurrencyId: { b: 'basecurrencyid', a: '_basecurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			BaseCurrencyPrecision: { a: 'basecurrencyprecision', r: true },
			BaseCurrencySymbol: { a: 'basecurrencysymbol', r: true },
			BaseISOCurrencyCode: { a: 'baseisocurrencycode', r: true },
			BingMapsApiKey: { a: 'bingmapsapikey' },
			BlockedApplicationsForDVAccess: { a: 'blockedapplicationsfordvaccess' },
			BlockedAttachments: { a: 'blockedattachments' },
			BlockedMimeTypes: { a: 'blockedmimetypes' },
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
			ContentSecurityPolicyConfigurationForCanvas: { a: 'contentsecuritypolicyconfigurationforcanvas' },
			ContentSecurityPolicyOptions: { a: 'contentsecuritypolicyoptions' },
			ContentSecurityPolicyReportUri: { a: 'contentsecuritypolicyreporturi' },
			ContractPrefix: { a: 'contractprefix' },
			CopresenceRefreshRate: { a: 'copresencerefreshrate' },
			CortanaProactiveExperienceEnabled: { a: 'cortanaproactiveexperienceenabled' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreateProductsWithoutParentInActiveState: { a: 'createproductswithoutparentinactivestate' },
			CurrencyDecimalPrecision: { a: 'currencydecimalprecision' },
			CurrencyDisplayOption: { a: 'currencydisplayoption' },
			CurrencyFormatCode: { a: 'currencyformatcode' },
			CurrencySymbol: { a: 'currencysymbol' },
			CurrentBulkOperationNumber: { a: 'currentbulkoperationnumber' },
			CurrentCampaignNumber: { a: 'currentcampaignnumber' },
			CurrentCaseNumber: { a: 'currentcasenumber' },
			CurrentCategoryNumber: { a: 'currentcategorynumber' },
			CurrentContractNumber: { a: 'currentcontractnumber' },
			CurrentImportSequenceNumber: { a: 'currentimportsequencenumber', r: true },
			CurrentInvoiceNumber: { a: 'currentinvoicenumber' },
			CurrentKaNumber: { a: 'currentkanumber' },
			CurrentKbNumber: { a: 'currentkbnumber' },
			CurrentOrderNumber: { a: 'currentordernumber' },
			CurrentParsedTableNumber: { a: 'currentparsedtablenumber', r: true },
			CurrentQuoteNumber: { a: 'currentquotenumber' },
			DateFormatCode: { a: 'dateformatcode' },
			DateFormatString: { a: 'dateformatstring' },
			DateSeparator: { a: 'dateseparator' },
			DaysBeforeEmailDescriptionIsMigrated: { a: 'daysbeforeemaildescriptionismigrated' },
			DaysBeforeInactiveTeamsChatSyncDisabled: { a: 'daysbeforeinactiveteamschatsyncdisabled' },
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
			DesktopFlowQueueLogsTtlInMinutes: { a: 'desktopflowqueuelogsttlinminutes' },
			DesktopFlowRunActionLogsStatus: { a: 'desktopflowrunactionlogsstatus' },
			DesktopFlowRunActionLogVersion: { a: 'desktopflowrunactionlogversion' },
			DisabledReason: { a: 'disabledreason', r: true },
			DisableSocialCare: { a: 'disablesocialcare' },
			DisableSystemLabelsCacheSharing: { a: 'disablesystemlabelscachesharing' },
			DiscountCalculationMethod: { a: 'discountcalculationmethod' },
			DisplayNavigationTour: { a: 'displaynavigationtour' },
			EmailConnectionChannel: { a: 'emailconnectionchannel' },
			EmailCorrelationEnabled: { a: 'emailcorrelationenabled' },
			EmailSendPollingPeriod: { a: 'emailsendpollingperiod' },
			EnableAsyncMergeAPIForUCI: { a: 'enableasyncmergeapiforuci' },
			EnableBingMapsIntegration: { a: 'enablebingmapsintegration' },
			EnableCanvasAppsInSolutionsByDefault: { a: 'enablecanvasappsinsolutionsbydefault' },
			EnableFlowsInSolutionByDefault: { a: 'enableflowsinsolutionbydefault' },
			EnableFlowsInSolutionByDefaultGracePeriod: { a: 'enableflowsinsolutionbydefaultgraceperiod' },
			EnableImmersiveSkypeIntegration: { a: 'enableimmersiveskypeintegration' },
			EnableIpBasedCookieBinding: { a: 'enableipbasedcookiebinding' },
			EnableIpBasedFirewallRule: { a: 'enableipbasedfirewallrule' },
			EnableIpBasedFirewallRuleInAuditMode: { a: 'enableipbasedfirewallruleinauditmode' },
			EnableIpBasedStorageAccessSignatureRule: { a: 'enableipbasedstorageaccesssignaturerule' },
			EnableLivePersonaCardUCI: { a: 'enablelivepersonacarduci' },
			EnableLivePersonCardIntegrationInOffice: { a: 'enablelivepersoncardintegrationinoffice' },
			EnableLPAuthoring: { a: 'enablelpauthoring' },
			EnableMakerSwitchToClassic: { a: 'enablemakerswitchtoclassic' },
			EnableMicrosoftFlowIntegration: { a: 'enablemicrosoftflowintegration' },
			EnablePricingOnCreate: { a: 'enablepricingoncreate' },
			EnableSmartMatching: { a: 'enablesmartmatching' },
			EnableUnifiedClientCDN: { a: 'enableunifiedclientcdn' },
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
			FiscalSettingsUpdated: { a: 'fiscalsettingsupdated', r: true },
			FiscalYearDisplayCode: { a: 'fiscalyeardisplaycode' },
			FiscalYearFormat: { a: 'fiscalyearformat' },
			FiscalYearFormatPrefix: { a: 'fiscalyearformatprefix' },
			FiscalYearFormatSuffix: { a: 'fiscalyearformatsuffix' },
			FiscalYearFormatYear: { a: 'fiscalyearformatyear' },
			FiscalYearPeriodConnect: { a: 'fiscalyearperiodconnect' },
			FlowLogsTtlInMinutes: { a: 'flowlogsttlinminutes' },
			FlowRunTimeToLiveInSeconds: { a: 'flowruntimetoliveinseconds' },
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
			IpBasedStorageAccessSignatureMode: { a: 'ipbasedstorageaccesssignaturemode' },
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
			IsAutoInstallAppForD365InTeamsEnabled: { a: 'isautoinstallappford365inteamsenabled' },
			IsAutoSaveEnabled: { a: 'isautosaveenabled' },
			IsBaseCardStaticFieldDataEnabled: { a: 'isbasecardstaticfielddataenabled' },
			IsBasicGeospatialIntegrationEnabled: { a: 'isbasicgeospatialintegrationenabled' },
			IsBPFEntityCustomizationFeatureEnabled: { a: 'isbpfentitycustomizationfeatureenabled' },
			IsCollaborationExperienceEnabled: { a: 'iscollaborationexperienceenabled' },
			IsConflictDetectionEnabledForMobileClient: { a: 'isconflictdetectionenabledformobileclient' },
			IsContactMailingAddressSyncEnabled: { a: 'iscontactmailingaddresssyncenabled' },
			IsContentSecurityPolicyEnabled: { a: 'iscontentsecuritypolicyenabled' },
			IsContentSecurityPolicyEnabledForCanvas: { a: 'iscontentsecuritypolicyenabledforcanvas' },
			IsContextualEmailEnabled: { a: 'iscontextualemailenabled' },
			IsContextualHelpEnabled: { a: 'iscontextualhelpenabled' },
			IsCopilotFeedbackEnabled: { a: 'iscopilotfeedbackenabled' },
			IsCustomControlsInCanvasAppsEnabled: { a: 'iscustomcontrolsincanvasappsenabled' },
			IsDefaultCountryCodeCheckEnabled: { a: 'isdefaultcountrycodecheckenabled' },
			IsDelegateAccessEnabled: { a: 'isdelegateaccessenabled' },
			IsDelveActionHubIntegrationEnabled: { a: 'isdelveactionhubintegrationenabled' },
			IsDesktopFlowConnectionEmbeddingEnabled: { a: 'isdesktopflowconnectionembeddingenabled' },
			IsDesktopFlowRuntimeRepairAttendedEnabled: { a: 'isdesktopflowruntimerepairattendedenabled' },
			IsDesktopFlowRuntimeRepairUnattendedEnabled: { a: 'isdesktopflowruntimerepairunattendedenabled' },
			IsDesktopFlowSchemaV2Enabled: { a: 'isdesktopflowschemav2enabled' },
			IsDisabled: { a: 'isdisabled', r: true },
			IsDuplicateDetectionEnabled: { a: 'isduplicatedetectionenabled' },
			IsDuplicateDetectionEnabledForImport: { a: 'isduplicatedetectionenabledforimport' },
			IsDuplicateDetectionEnabledForOfflineSync: { a: 'isduplicatedetectionenabledforofflinesync' },
			IsDuplicateDetectionEnabledForOnlineCreateUpdate: { a: 'isduplicatedetectionenabledforonlinecreateupdate' },
			IsEmailAddressValidationEnabled: { a: 'isemailaddressvalidationenabled' },
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
			IsIdeasDataCollectionEnabled: { a: 'isideasdatacollectionenabled' },
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
			IsNotificationForD365InTeamsEnabled: { a: 'isnotificationford365inteamsenabled' },
			IsOfficeGraphEnabled: { a: 'isofficegraphenabled' },
			IsOneDriveEnabled: { a: 'isonedriveenabled' },
			IsPAIEnabled: { a: 'ispaienabled' },
			IsPDFGenerationEnabled: { a: 'ispdfgenerationenabled' },
			IsPerProcessCapacityOverageEnabled: { a: 'isperprocesscapacityoverageenabled' },
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
			IsRpaAutoscaleAadJoinEnabled: { a: 'isrpaautoscaleaadjoinenabled' },
			IsRpaAutoscaleEnabled: { a: 'isrpaautoscaleenabled' },
			IsRpaBoxCrossGeoEnabled: { a: 'isrpaboxcrossgeoenabled' },
			IsRpaBoxEnabled: { a: 'isrpaboxenabled' },
			IsRpaUnattendedEnabled: { a: 'isrpaunattendedenabled' },
			IsSalesAssistantEnabled: { a: 'issalesassistantenabled' },
			IsSharingInOrgAllowed: { a: 'issharinginorgallowed' },
			IsSOPIntegrationEnabled: { a: 'issopintegrationenabled' },
			IsTextWrapEnabled: { a: 'istextwrapenabled' },
			IsUserAccessAuditEnabled: { a: 'isuseraccessauditenabled' },
			ISVIntegrationCode: { a: 'isvintegrationcode' },
			IsWriteInProductsAllowed: { a: 'iswriteinproductsallowed' },
			KaPrefix: { a: 'kaprefix' },
			KbPrefix: { a: 'kbprefix' },
			KMSettings: { a: 'kmsettings' },
			LanguageCode: { a: 'languagecode' },
			LegacyAppToggle: { a: 'legacyapptoggle' },
			LocaleId: { a: 'localeid' },
			LongDateFormatCode: { a: 'longdateformatcode' },
			LookupCharacterCountBeforeResolve: { a: 'lookupcharactercountbeforeresolve' },
			LookupResolveDelayMS: { a: 'lookupresolvedelayms' },
			MailboxIntermittentIssueMinRange: { a: 'mailboxintermittentissueminrange' },
			MailboxPermanentIssueMinRange: { a: 'mailboxpermanentissueminrange' },
			MaxActionStepsInBPF: { a: 'maxactionstepsinbpf' },
			MaxAllowedPendingRollupJobCount: { a: 'maxallowedpendingrollupjobcount' },
			MaxAllowedPendingRollupJobPercentage: { a: 'maxallowedpendingrollupjobpercentage' },
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
			MaxRollupFieldsPerEntity: { a: 'maxrollupfieldsperentity' },
			MaxRollupFieldsPerOrg: { a: 'maxrollupfieldsperorg' },
			MaxSLAItemsPerSLA: { a: 'maxslaitemspersla' },
			MaxSupportedInternetExplorerVersion: { a: 'maxsupportedinternetexplorerversion', r: true },
			MaxUploadFileSize: { a: 'maxuploadfilesize' },
			MaxVerboseLoggingMailbox: { a: 'maxverboseloggingmailbox', r: true },
			MaxVerboseLoggingSyncCycles: { a: 'maxverboseloggingsynccycles', r: true },
			MetadataSyncLastTimeOfNeverExpiredDeletedObjects_UtcDateAndTime: { a: 'metadatasynclasttimeofneverexpireddeletedobjects', r: true },
			MetadataSyncTimestamp: { a: 'metadatasynctimestamp', r: true },
			MicrosoftFlowEnvironment: { a: 'microsoftflowenvironment' },
			MinAddressBookSyncInterval: { a: 'minaddressbooksyncinterval' },
			MinOfflineSyncInterval: { a: 'minofflinesyncinterval' },
			MinOutlookSyncInterval: { a: 'minoutlooksyncinterval' },
			MobileOfflineMinLicenseProd: { a: 'mobileofflineminlicenseprod', r: true },
			MobileOfflineMinLicenseTrial: { a: 'mobileofflineminlicensetrial', r: true },
			MobileOfflineSyncInterval: { a: 'mobileofflinesyncinterval' },
			ModernAdvancedFindFiltering: { a: 'modernadvancedfindfiltering' },
			ModernAppDesignerCoauthoringEnabled: { a: 'modernappdesignercoauthoringenabled' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			MultiColumnSortEnabled: { a: 'multicolumnsortenabled' },
			Name: { a: 'name' },
			NaturalLanguageAssistFilter: { a: 'naturallanguageassistfilter' },
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
			OptOutSchemaV2EnabledByDefault: { a: 'optoutschemav2enabledbydefault' },
			OrderPrefix: { a: 'orderprefix' },
			OrganizationId: { a: 'organizationid', r: true },
			OrganizationState: { a: 'organizationstate', r: true },
			OrgDbOrgSettings: { a: 'orgdborgsettings' },
			OrgInsightsEnabled: { a: 'orginsightsenabled' },
			PaiPreviewScenarioEnabled: { a: 'paipreviewscenarioenabled' },
			ParsedTableColumnPrefix: { a: 'parsedtablecolumnprefix', r: true },
			ParsedTablePrefix: { a: 'parsedtableprefix', r: true },
			PastExpansionWindow: { a: 'pastexpansionwindow' },
			PcfDatasetGridEnabled: { a: 'pcfdatasetgridenabled' },
			PerformACTSyncAfter_UtcDateAndTime: { a: 'performactsyncafter' },
			Picture: { a: 'picture' },
			PinpointLanguageCode: { a: 'pinpointlanguagecode' },
			PluginTraceLogSetting: { a: 'plugintracelogsetting' },
			PMDesignator: { a: 'pmdesignator' },
			PostMessageWhitelistDomains: { a: 'postmessagewhitelistdomains' },
			PowerAppsMakerBotEnabled: { a: 'powerappsmakerbotenabled' },
			PowerBIAllowCrossRegionOperations: { a: 'powerbiallowcrossregionoperations' },
			PowerBIAutomaticPermissionsAssignment: { a: 'powerbiautomaticpermissionsassignment' },
			PowerBIComponentsCreate: { a: 'powerbicomponentscreate' },
			PowerBiFeatureEnabled: { a: 'powerbifeatureenabled' },
			PricingDecimalPrecision: { a: 'pricingdecimalprecision' },
			PrivacyStatementUrl: { a: 'privacystatementurl' },
			PrivilegeUserGroupId: { a: 'privilegeusergroupid' },
			PrivReportingGroupId: { a: 'privreportinggroupid' },
			PrivReportingGroupName: { a: 'privreportinggroupname' },
			ProductRecommendationsEnabled: { a: 'productrecommendationsenabled' },
			QualifyLeadAdditionalOptions: { a: 'qualifyleadadditionaloptions' },
			QuickActionToOpenRecordsInSidePaneEnabled: { a: 'quickactiontoopenrecordsinsidepaneenabled' },
			QuickFindRecordLimitEnabled: { a: 'quickfindrecordlimitenabled' },
			QuotePrefix: { a: 'quoteprefix' },
			RecalculateSLA: { a: 'recalculatesla' },
			RecurrenceDefaultNumberOfOccurrences: { a: 'recurrencedefaultnumberofoccurrences' },
			RecurrenceExpansionJobBatchInterval: { a: 'recurrenceexpansionjobbatchinterval' },
			RecurrenceExpansionJobBatchSize: { a: 'recurrenceexpansionjobbatchsize' },
			RecurrenceExpansionSynchCreateMax: { a: 'recurrenceexpansionsynchcreatemax' },
			ReferenceSiteMapXml: { a: 'referencesitemapxml' },
			ReleaseCadence: { a: 'releasecadence' },
			ReleaseChannel: { a: 'releasechannel' },
			ReleaseWaveName: { a: 'releasewavename' },
			RelevanceSearchEnabledByPlatform: { a: 'relevancesearchenabledbyplatform' },
			RelevanceSearchModifiedOn_UtcDateAndTime: { a: 'relevancesearchmodifiedon' },
			RenderSecureIFrameForEmail: { a: 'rendersecureiframeforemail' },
			ReportingGroupId: { a: 'reportinggroupid' },
			ReportingGroupName: { a: 'reportinggroupname' },
			ReportScriptErrors: { a: 'reportscripterrors' },
			RequireApprovalForQueueEmail: { a: 'requireapprovalforqueueemail' },
			RequireApprovalForUserEmail: { a: 'requireapprovalforuseremail' },
			ResolveSimilarUnresolvedEmailAddress: { a: 'resolvesimilarunresolvedemailaddress' },
			RestrictGuestUserAccess: { a: 'restrictGuestUserAccess' },
			RestrictStatusUpdate: { a: 'restrictstatusupdate' },
			ReverseProxyIpAddresses: { a: 'reverseproxyipaddresses' },
			RiErrorStatus: { a: 'rierrorstatus' },
			SameSiteModeForSessionCookie: { a: 'samesitemodeforsessioncookie' },
			SampleDataImportId: { a: 'sampledataimportid' },
			SchemaNamePrefix: { a: 'schemanameprefix' },
			SendBulkEmailInUCI: { a: 'sendbulkemailinuci' },
			ServeStaticResourcesFromAzureCDN: { a: 'servestaticresourcesfromazurecdn' },
			SessionRecordingEnabled: { a: 'sessionrecordingenabled' },
			SessionTimeoutEnabled: { a: 'sessiontimeoutenabled' },
			SessionTimeoutInMins: { a: 'sessiontimeoutinmins' },
			SessionTimeoutReminderInMins: { a: 'sessiontimeoutreminderinmins' },
			SharePointDeploymentType: { a: 'sharepointdeploymenttype' },
			ShareToPreviousOwnerOnAssign: { a: 'sharetopreviousowneronassign' },
			ShowKBArticleDeprecationNotification: { a: 'showkbarticledeprecationnotification' },
			ShowWeekNumber: { a: 'showweeknumber' },
			SignupOutlookDownloadFWLink: { a: 'signupoutlookdownloadfwlink' },
			SiteMapXml: { a: 'sitemapxml' },
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
			SuppressValidationEmails: { a: 'suppressvalidationemails' },
			SyncBulkOperationBatchSize: { a: 'syncbulkoperationbatchsize' },
			SyncBulkOperationMaxLimit: { a: 'syncbulkoperationmaxlimit' },
			SyncOptInSelection: { a: 'syncoptinselection' },
			SyncOptInSelectionStatus: { a: 'syncoptinselectionstatus' },
			SystemUserId: { a: 'systemuserid' },
			TableScopedDVSearchInApps: { a: 'tablescopeddvsearchinapps' },
			TagMaxAggressiveCycles: { a: 'tagmaxaggressivecycles' },
			TagPollingPeriod: { a: 'tagpollingperiod' },
			TaskBasedFlowEnabled: { a: 'taskbasedflowenabled' },
			TeamsChatDataSync: { a: 'teamschatdatasync' },
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
			UserRatingEnabled: { a: 'userratingenabled' },
			UseSkypeProtocol: { a: 'useskypeprotocol' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			V3CalloutConfigHash: { a: 'v3calloutconfighash', r: true },
			ValidationMode: { a: 'validationmode' },
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
		var organization = {};
		organization.ODataEntity = e;
		organization.FormattedValue = {};
		for (var field in _organization) {
			var a = _organization[field].a;
			var b = _organization[field].b;
			var c = _organization[field].c;
			var d = _organization[field].d;
			var g = _organization[field].g;
			var r = _organization[field].r;
			webApiField(organization, field, e, a, b, c, d, r, u, g);
		}
		organization.Entity = u;
		organization.EntityName = 'organization';
		organization.EntityCollectionName = 'organizations';
		organization['@odata.etag'] = e['@odata.etag'];
		organization.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		organization.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
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
		ApplicationBasedAccessControlMode : {
			AuditMode: 2,
			Disabled: 0,
			Enabled: 1,
			Enabled_for_roles: 3
		},
		CurrencyDisplayOption : {
			Ky_hieu_loai_tien: 0,
			Ma_loai_tien: 1
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
			Khong_co_Ngay_Ket_thuc: 1,
			Ngay_ket_thuc: 3,
			So_lan_Xay_ra: 2
		},
		DesktopFlowRunActionLogsStatus : {
			Da_bat: 0,
			Da_tat: 2,
			Neu_khong_thanh_cong: 1
		},
		DesktopFlowRunActionLogVersion : {
			AdditionalContext: 0,
			AdditionalContextAndFlowLogs: 2,
			FlowLogs: 1
		},
		DiscountCalculationMethod : {
			Hang_muc: 0,
			Moi_don_vi: 1
		},
		EmailConnectionChannel : {
			Bo_dinh_tuyen_Email_Microsoft_Dynamics_365: 1,
			Dong_bo_phia_May_chu: 0
		},
		FiscalPeriodFormatPeriod : {
			Ky_0: 3,
			Ky_sau_thang_0: 6,
			Q0: 2,
			Quy_0: 1,
			Ten_Thang: 7,
			Thang_0_4: 4,
			Thang_0_5: 5
		},
		FiscalYearFormatPrefix : {
			Nam_Tai_chinh: 1
		},
		FiscalYearFormatSuffix : {
			Nam_Tai_chinh_1: 1,
			Nam_Tai_chinh_2: 2
		},
		FiscalYearFormatYear : {
			GGYY: 3,
			YY: 2,
			YYYY: 1
		},
		FullNameConventionCode : {
			Ho_dau_cach_Ten: 6,
			Ho_khong_co_dau_cach_Ten: 7,
			Ho_Ten: 0,
			Ho_Ten_Ten_dem: 4,
			Ho_Ten_Viet_tat_Ten_dem: 2,
			Ten: 1,
			Ten_Ten_dem_Ho: 5,
			Ten_Viet_tat_Ten_dem_Ho: 3
		},
		IpBasedStorageAccessSignatureMode : {
			IP_Binding_and_IP_Firewall: 2,
			IP_Binding_only: 0,
			IP_Binding_or_IP_Firewall: 3,
			IP_Firewall_only: 1
		},
		ISVIntegrationCode : {
			Khong: 0,
			Outlook: 6,
			Tat_ca: 7,
			Ung_dung_khach_May_tinh_xach_tay_Outlook: 4,
			Ung_dung_khach_May_tram_Outlook: 2,
			Web: 1,
			Web_Ung_dung_khach_May_tinh_xach_tay_Outlook: 5,
			Web_Ung_dung_khach_May_tram_Outlook: 3
		},
		LegacyAppToggle : {
			Bat: 1,
			Tat: 2,
			Tu_dong: 0
		},
		NegativeFormatCode : {
			Dau_cach_cong_voi_Dau_gach_Duoi: 4,
			Dau_gach: 1,
			Dau_gach_cong_voi_Dau_cach: 2,
			Dau_gach_Duoi: 3,
			Dau_ngoac: 0
		},
		OrganizationState : {
			Dang_cap_nhat: 2,
			Dang_nang_cap: 1,
			Dang_tao: 0,
			Hien_hoat: 3
		},
		PluginTraceLogSetting : {
			Ngoai_le: 1,
			Tat: 0,
			Tat_ca: 2
		},
		ReleaseChannel : {
			Kenh_ban_nien: 3,
			Kenh_hang_thang: 1,
			Kenh_noi_bo_cua_Microsoft: 2,
			Tu_dong: 0
		},
		ReportScriptErrors : {
			Khong_bao_gio_gui_bao_cao_loi_toi_Microsoft_ve_Microsoft_Dynamics_365: 3,
			Khong_co_tuy_chon_gui_bao_cao_loi_toi_Microsoft_ve_Microsoft_Dynamics_365: 0,
			Tu_dong_gui_bao_cao_loi_den_Microsoft_ma_khong_xin_phep_toi: 2,
			Xin_phep_toi_khi_gui_bao_cao_loi_den_Microsoft: 1
		},
		SameSiteModeForSessionCookie : {
			Default: 0,
			Lax: 2,
			None: 1,
			Strict: 3
		},
		SharePointDeploymentType : {
			Tai_cho: 1,
			Truc_tuyen: 0
		},
		SyncOptInSelectionStatus : {
			Da_qua: 2,
			Dang_xu_ly: 1,
			Khong_thanh_cong: 3
		},
		TimeFormatCode : {
		},
		ValidationMode : {
			Canh_bao: 1,
			Chan: 2,
			Tat: 0
		},
		WeekStartDayCode : {
		},
		YammerPostMethod : {
			Cong_khai: 0,
			Rieng_tu: 1
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