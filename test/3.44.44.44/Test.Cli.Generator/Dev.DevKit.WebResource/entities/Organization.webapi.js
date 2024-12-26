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
			AllowedListOfIpRangesForFirewall: { a: 'allowedlistofiprangesforfirewall' },
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
			AllowVirtualEntityPluginExecutionOnNestedPipeline: { a: 'allowvirtualentitypluginexecutiononnestedpipeline' },
			AllowWebExcelExport: { a: 'allowwebexcelexport' },
			AMDesignator: { a: 'amdesignator' },
			AppDesignerExperienceEnabled: { a: 'appdesignerexperienceenabled' },
			ApplicationBasedAccessControlMode: { a: 'applicationbasedaccesscontrolmode' },
			AppointmentRichEditorExperience: { a: 'appointmentricheditorexperience' },
			AppointmentWithTeamsMeeting: { a: 'appointmentwithteamsmeeting' },
			AppointmentWithTeamsMeetingV2: { a: 'appointmentwithteamsmeetingv2' },
			AreSalesAddressSuggestionsEnabled: { a: 'aresalesaddresssuggestionsenabled' },
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
			BlockAccessToSessionTranscriptsForCopilotStudio: { a: 'blockaccesstosessiontranscriptsforcopilotstudio' },
			BlockCopilotAuthorAuthentication: { a: 'blockcopilotauthorauthentication' },
			BlockedApplicationsForDVAccess: { a: 'blockedapplicationsfordvaccess' },
			BlockedAttachments: { a: 'blockedattachments' },
			BlockedMimeTypes: { a: 'blockedmimetypes' },
			BlockTranscriptRecordingForCopilotStudio: { a: 'blocktranscriptrecordingforcopilotstudio' },
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
			DefaultTeamsChatTitleRecordName: { a: 'defaultteamschattitlerecordname' },
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
			EmailTemplateDefaultView: { a: 'emailtemplatedefaultview' },
			EnableAsyncMergeAPIForUCI: { a: 'enableasyncmergeapiforuci' },
			EnableBingMapsIntegration: { a: 'enablebingmapsintegration' },
			EnableCalendarImportExport: { a: 'enablecalendarimportexport' },
			EnableCanvasAppsInSolutionsByDefault: { a: 'enablecanvasappsinsolutionsbydefault' },
			EnableEmailTemplateViews: { a: 'enableemailtemplateviews' },
			EnableEnvironmentSettingsApp: { a: 'enableenvironmentsettingsapp' },
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
			EnableSensitivityLabelsForTeamsCollab: { a: 'enablesensitivitylabelsforteamscollab' },
			EnableSmartMatching: { a: 'enablesmartmatching' },
			EnableUnifiedClientCDN: { a: 'enableunifiedclientcdn' },
			EnableUnifiedInterfaceShellRefresh: { a: 'enableunifiedinterfaceshellrefresh' },
			EnforceReadOnlyPlugins: { a: 'enforcereadonlyplugins' },
			EnhancedOQOIAddProductsSettings: { a: 'enhancedoqoiaddproductssettings' },
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
			IsDesktopFlowVanillaImageSharingEnabled: { a: 'isdesktopflowvanillaimagesharingenabled' },
			IsDisabled: { a: 'isdisabled', r: true },
			IsDuplicateDetectionEnabled: { a: 'isduplicatedetectionenabled' },
			IsDuplicateDetectionEnabledForImport: { a: 'isduplicatedetectionenabledforimport' },
			IsDuplicateDetectionEnabledForOfflineSync: { a: 'isduplicatedetectionenabledforofflinesync' },
			IsDuplicateDetectionEnabledForOnlineCreateUpdate: { a: 'isduplicatedetectionenabledforonlinecreateupdate' },
			IsEmailAddressValidationEnabled: { a: 'isemailaddressvalidationenabled' },
			IsEmailMonitoringAllowed: { a: 'isemailmonitoringallowed' },
			IsEmailServerProfileContentFilteringEnabled: { a: 'isemailserverprofilecontentfilteringenabled' },
			IsEmbedTeamsCollabEnabled: { a: 'isembedteamscollabenabled' },
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
			IsProcessCapacityAutoClaimEnabled: { a: 'isprocesscapacityautoclaimenabled' },
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
			IsSalesMobilePreviewEnabled: { a: 'issalesmobilepreviewenabled' },
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
			SalesMobileQuickCreateDisabled: { a: 'salesmobilequickcreatedisabled' },
			SalesMobileUseUCIFormsForCreate: { a: 'salesmobileuseuciformsforcreate' },
			SalesMobileUseUCIFormsForView: { a: 'salesmobileuseuciformsforview' },
			SameSiteModeForSessionCookie: { a: 'samesitemodeforsessioncookie' },
			SampleDataImportId: { a: 'sampledataimportid' },
			SchedulingEngine: { a: 'schedulingengine' },
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
			SkipSelectRecordDialog: { a: 'skipselectrecorddialog' },
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