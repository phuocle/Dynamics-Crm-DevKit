'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.OrganizationApi = function (e) {
		const f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
			const l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			const getFormattedValue = function () {
				if (entity?.[logicalName + f] === undefined || entity?.[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === entityLogicalName) {
						return entity?.[logicalName + f];
					}
					return '';
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
				}
				return entity?.[logicalName + f];
			};
			const getValue = function () {
				if (entity?.[logicalName] === undefined || entity?.[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === undefined || entity?.[logicalName + l] === entityLogicalName) {
						return returnGet(entity?.[logicalName], type);
					}
					return null;
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName]?.toString()?.split(',').map(function (item) { return parseInt(item, 10); });
				}
				return returnGet(entity?.[logicalName], type);
			};
			const returnGet = function (data, type) {
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				const typeParsers = {
					DateTime: function (value) {
						if (value === null || value === undefined) return null;
						if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
						const trimmedString = String(value).trim();
						if (trimmedString === '') return null;
						const timestamp = Date.parse(trimmedString);
						if (isNaN(timestamp)) return null;
						const parsedDate = new Date(timestamp);
						return isNaN(parsedDate.getTime()) ? null : parsedDate;
					},
					Integer: function (value) {
						const parsed = parseInt(value, 10);
						return isNaN(parsed) ? null : parsed;
					},
					Number: function (value) {
						const parsed = Number(value);
						return isNaN(parsed) ? null : parsed;
					},
					Boolean: function (value) {
						if (value === null || value === undefined) return null;
						if (typeof value === 'boolean') return value;
						if (typeof value === 'number') return value !== 0;
						const stringValue = String(value).trim().toLowerCase();
						const trueValues = ["true", "1", "yes", "y"];
						const falseValues = ["false", "0", "no", "n"];
						if (trueValues.includes(stringValue)) return true;
						if (falseValues.includes(stringValue)) return false;
						return false;
					}
				};
				const parser = typeParsers[type];
				return parser ? parser(data) : data;
			};
			const setValue = function (value) {
				if (type === 'MultiOptionSet') value = value?.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName?.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						const cleanValue = typeof value === 'string' ? value.replace(/[{}]/g, '') : value;
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + cleanValue + ')';
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
		const _organization = {
			ACIWebEndpointUrl: { a: 'aciwebendpointurl' },
			AcknowledgementTemplateId: { b: 'acknowledgementtemplateid', a: '_acknowledgementtemplateid_value', c: 'templates', d: 'template' },
			ActivityTypeFilter: { a: 'activitytypefilter', g: 'Boolean' },
			ActivityTypeFilterV2: { a: 'activitytypefilterv2', g: 'Boolean' },
			AdvancedColumnEditorEnabled: { a: 'advancedcolumneditorenabled', g: 'Boolean' },
			AdvancedColumnFilteringEnabled: { a: 'advancedcolumnfilteringenabled', g: 'Boolean' },
			AdvancedFilteringEnabled: { a: 'advancedfilteringenabled', g: 'Boolean' },
			AdvancedLookupEnabled: { a: 'advancedlookupenabled', g: 'Boolean' },
			AdvancedLookupInEditFilter: { a: 'advancedlookupineditfilter', g: 'Integer' },
			AiPromptsAzureAIFoundryModelTypesEnabled: { a: 'aipromptsazureaifoundrymodeltypesenabled', g: 'Boolean' },
			AiPromptsBasicModelTypesEnabled: { a: 'aipromptsbasicmodeltypesenabled', g: 'Boolean' },
			AiPromptsEnabled: { a: 'aipromptsenabled', g: 'Boolean' },
			AiPromptsPremiumModelTypesEnabled: { a: 'aipromptspremiummodeltypesenabled', g: 'Boolean' },
			AiPromptsStandardModelTypesEnabled: { a: 'aipromptsstandardmodeltypesenabled', g: 'Boolean' },
			AllowAddressBookSyncs: { a: 'allowaddressbooksyncs', g: 'Boolean' },
			AllowApplicationUserAccess: { a: 'allowapplicationuseraccess', g: 'Boolean' },
			AllowAutoResponseCreation: { a: 'allowautoresponsecreation', g: 'Boolean' },
			AllowAutoUnsubscribe: { a: 'allowautounsubscribe', g: 'Boolean' },
			AllowAutoUnsubscribeAcknowledgement: { a: 'allowautounsubscribeacknowledgement', g: 'Boolean' },
			AllowClientMessageBarAd: { a: 'allowclientmessagebarad', g: 'Boolean' },
			AllowConnectorsOnPowerFXActions: { a: 'allowconnectorsonpowerfxactions', g: 'Boolean' },
			AllowedApplicationsForDVAccess: { a: 'allowedapplicationsfordvaccess' },
			AllowedIpRangeForFirewall: { a: 'allowediprangeforfirewall' },
			AllowedIpRangeForStorageAccessSignatures: { a: 'allowediprangeforstorageaccesssignatures' },
			AllowedListOfIpRangesForFirewall: { a: 'allowedlistofiprangesforfirewall' },
			AllowedMimeTypes: { a: 'allowedmimetypes' },
			AllowedServiceTagsForFirewall: { a: 'allowedservicetagsforfirewall' },
			AllowEntityOnlyAudit: { a: 'allowentityonlyaudit', g: 'Boolean' },
			AllowLeadingWildcardsInGridSearch: { a: 'allowleadingwildcardsingridsearch', g: 'Boolean' },
			AllowLeadingWildcardsInQuickFind: { a: 'allowleadingwildcardsinquickfind', g: 'Integer' },
			AllowLegacyClientExperience: { a: 'allowlegacyclientexperience', g: 'Boolean' },
			AllowLegacyDialogsEmbedding: { a: 'allowlegacydialogsembedding', g: 'Boolean' },
			AllowMarketingEmailExecution: { a: 'allowmarketingemailexecution', g: 'Boolean' },
			AllowMicrosoftTrustedServiceTags: { a: 'allowmicrosofttrustedservicetags', g: 'Boolean' },
			AllowOfflineScheduledSyncs: { a: 'allowofflinescheduledsyncs', g: 'Boolean' },
			AllowOutlookScheduledSyncs: { a: 'allowoutlookscheduledsyncs', g: 'Boolean' },
			AllowRedirectAdminSettingsToModernUI: { a: 'allowredirectadminsettingstomodernui', g: 'Boolean' },
			AllowUnresolvedPartiesOnEmailSend: { a: 'allowunresolvedpartiesonemailsend', g: 'Boolean' },
			AllowUserFormModePreference: { a: 'allowuserformmodepreference', g: 'Boolean' },
			AllowUsersHidingSystemViews: { a: 'allowusershidingsystemviews', g: 'Boolean' },
			AllowUsersSeeAppdownloadMessage: { a: 'allowusersseeappdownloadmessage', g: 'Boolean' },
			AllowVirtualEntityPluginExecutionOnNestedPipeline: { a: 'allowvirtualentitypluginexecutiononnestedpipeline', g: 'Boolean' },
			AllowWebExcelExport: { a: 'allowwebexcelexport', g: 'Boolean' },
			AMDesignator: { a: 'amdesignator' },
			AppDesignerExperienceEnabled: { a: 'appdesignerexperienceenabled', g: 'Boolean' },
			ApplicationBasedAccessControlMode: { a: 'applicationbasedaccesscontrolmode', g: 'Integer' },
			AppointmentRichEditorExperience: { a: 'appointmentricheditorexperience', g: 'Boolean' },
			AppointmentWithTeamsMeeting: { a: 'appointmentwithteamsmeeting', g: 'Boolean' },
			AppointmentWithTeamsMeetingV2: { a: 'appointmentwithteamsmeetingv2', g: 'Boolean' },
			AreAutomationCenterPreviewFeaturesEnabled: { a: 'areautomationcenterpreviewfeaturesenabled', g: 'Boolean' },
			AreProcessInsightsPreviewFeaturesEnabled: { a: 'areprocessinsightspreviewfeaturesenabled', g: 'Boolean' },
			AuditRetentionPeriod: { a: 'auditretentionperiod', g: 'Integer' },
			AuditRetentionPeriodV2: { a: 'auditretentionperiodv2', g: 'Integer' },
			AuditSettings: { a: 'auditsettings' },
			AutoApplyDefaultonCaseCreate: { a: 'autoapplydefaultoncasecreate', g: 'Boolean' },
			AutoApplyDefaultonCaseUpdate: { a: 'autoapplydefaultoncaseupdate', g: 'Boolean' },
			AutoApplySLA: { a: 'autoapplysla', g: 'Boolean' },
			AzureSchedulerJobCollectionName: { a: 'azureschedulerjobcollectionname' },
			BaseCurrencyId: { b: 'basecurrencyid', a: '_basecurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			BaseCurrencyPrecision: { a: 'basecurrencyprecision', r: true, g: 'Integer' },
			BaseCurrencySymbol: { a: 'basecurrencysymbol', r: true },
			BaseISOCurrencyCode: { a: 'baseisocurrencycode', r: true },
			BingMapsApiKey: { a: 'bingmapsapikey' },
			BlockAccessToSessionTranscriptsForCopilotStudio: { a: 'blockaccesstosessiontranscriptsforcopilotstudio', g: 'Boolean' },
			BlockCopilotAuthorAuthentication: { a: 'blockcopilotauthorauthentication', g: 'Boolean' },
			BlockedApplicationsForDVAccess: { a: 'blockedapplicationsfordvaccess' },
			BlockedAttachments: { a: 'blockedattachments' },
			BlockedMimeTypes: { a: 'blockedmimetypes' },
			BlockTranscriptRecordingForCopilotStudio: { a: 'blocktranscriptrecordingforcopilotstudio', g: 'Boolean' },
			BlockUrlsInResponsesForCopilotStudio: { a: 'blockurlsinresponsesforcopilotstudio', g: 'Boolean' },
			BoundDashboardDefaultCardExpanded: { a: 'bounddashboarddefaultcardexpanded', g: 'Boolean' },
			BulkOperationPrefix: { a: 'bulkoperationprefix' },
			BusinessCardOptions: { a: 'businesscardoptions' },
			BusinessClosureCalendarId: { a: 'businessclosurecalendarid' },
			CalendarType: { a: 'calendartype', g: 'Integer' },
			CampaignPrefix: { a: 'campaignprefix' },
			CanOptOutNewSearchExperience: { a: 'canoptoutnewsearchexperience', g: 'Boolean' },
			CascadeStatusUpdate: { a: 'cascadestatusupdate', g: 'Boolean' },
			CasePrefix: { a: 'caseprefix' },
			CategoryPrefix: { a: 'categoryprefix' },
			ClientFeatureSet: { a: 'clientfeatureset' },
			ContentSecurityPolicyConfiguration: { a: 'contentsecuritypolicyconfiguration' },
			ContentSecurityPolicyConfigurationForCanvas: { a: 'contentsecuritypolicyconfigurationforcanvas' },
			ContentSecurityPolicyOptions: { a: 'contentsecuritypolicyoptions', g: 'Integer' },
			ContentSecurityPolicyReportUri: { a: 'contentsecuritypolicyreporturi' },
			ContractPrefix: { a: 'contractprefix' },
			CopresenceRefreshRate: { a: 'copresencerefreshrate', g: 'Integer' },
			CortanaProactiveExperienceEnabled: { a: 'cortanaproactiveexperienceenabled', g: 'Boolean' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreateProductsWithoutParentInActiveState: { a: 'createproductswithoutparentinactivestate', g: 'Boolean' },
			CuaFlowLogsTtlInMinutes: { a: 'cuaflowlogsttlinminutes', g: 'Integer' },
			CuaFlowLogsVerbosity: { a: 'cuaflowlogsverbosity', g: 'Integer' },
			CurrencyDecimalPrecision: { a: 'currencydecimalprecision', g: 'Integer' },
			CurrencyDisplayOption: { a: 'currencydisplayoption', g: 'Integer' },
			CurrencyFormatCode: { a: 'currencyformatcode', g: 'Integer' },
			CurrencySymbol: { a: 'currencysymbol' },
			CurrentBulkOperationNumber: { a: 'currentbulkoperationnumber', g: 'Integer' },
			CurrentCampaignNumber: { a: 'currentcampaignnumber', g: 'Integer' },
			CurrentCaseNumber: { a: 'currentcasenumber', g: 'Integer' },
			CurrentCategoryNumber: { a: 'currentcategorynumber', g: 'Integer' },
			CurrentContractNumber: { a: 'currentcontractnumber', g: 'Integer' },
			CurrentImportSequenceNumber: { a: 'currentimportsequencenumber', r: true, g: 'Integer' },
			CurrentInvoiceNumber: { a: 'currentinvoicenumber', g: 'Integer' },
			CurrentKaNumber: { a: 'currentkanumber', g: 'Integer' },
			CurrentKbNumber: { a: 'currentkbnumber', g: 'Integer' },
			CurrentOrderNumber: { a: 'currentordernumber', g: 'Integer' },
			CurrentParsedTableNumber: { a: 'currentparsedtablenumber', r: true, g: 'Integer' },
			CurrentQuoteNumber: { a: 'currentquotenumber', g: 'Integer' },
			DateFormatCode: { a: 'dateformatcode', g: 'Integer' },
			DateFormatString: { a: 'dateformatstring' },
			DateSeparator: { a: 'dateseparator' },
			DaysBeforeEmailDescriptionIsMigrated: { a: 'daysbeforeemaildescriptionismigrated', g: 'Integer' },
			DaysBeforeInactiveTeamsChatSyncDisabled: { a: 'daysbeforeinactiveteamschatsyncdisabled', g: 'Integer' },
			DaysSinceRecordLastModifiedMaxValue: { a: 'dayssincerecordlastmodifiedmaxvalue', r: true, g: 'Integer' },
			DecimalSymbol: { a: 'decimalsymbol' },
			DefaultCountryCode: { a: 'defaultcountrycode' },
			DefaultCrmCustomName: { a: 'defaultcrmcustomname' },
			DefaultEmailServerProfileId: { b: 'defaultemailserverprofileid', a: '_defaultemailserverprofileid_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			DefaultEmailSettings: { a: 'defaultemailsettings' },
			DefaultMobileOfflineProfileId: { b: 'defaultmobileofflineprofileid', a: '_defaultmobileofflineprofileid_value', c: 'mobileofflineprofiles', d: 'mobileofflineprofile' },
			DefaultRecurrenceEndRangeType: { a: 'defaultrecurrenceendrangetype', g: 'Integer' },
			DefaultThemeData: { a: 'defaultthemedata' },
			DelegatedAdminUserId: { a: 'delegatedadminuserid' },
			DesktopFlowQueueLogsTtlInMinutes: { a: 'desktopflowqueuelogsttlinminutes', g: 'Integer' },
			DesktopFlowRunActionLogsStatus: { a: 'desktopflowrunactionlogsstatus', g: 'Integer' },
			DesktopFlowRunActionLogVerbosity: { a: 'desktopflowrunactionlogverbosity', g: 'Integer' },
			DesktopFlowRunActionLogVersion: { a: 'desktopflowrunactionlogversion', g: 'Integer' },
			DisabledReason: { a: 'disabledreason', r: true },
			DisableSocialCare: { a: 'disablesocialcare', g: 'Boolean' },
			DisableSystemLabelsCacheSharing: { a: 'disablesystemlabelscachesharing', g: 'Boolean' },
			DiscountCalculationMethod: { a: 'discountcalculationmethod', g: 'Integer' },
			DisplayNavigationTour: { a: 'displaynavigationtour', g: 'Boolean' },
			EmailConnectionChannel: { a: 'emailconnectionchannel', g: 'Integer' },
			EmailCorrelationEnabled: { a: 'emailcorrelationenabled', g: 'Boolean' },
			EmailSendPollingPeriod: { a: 'emailsendpollingperiod', g: 'Integer' },
			EnableAsyncMergeAPIForUCI: { a: 'enableasyncmergeapiforuci', g: 'Boolean' },
			EnableBingMapsIntegration: { a: 'enablebingmapsintegration', g: 'Boolean' },
			EnableCanvasAppsInSolutionsByDefault: { a: 'enablecanvasappsinsolutionsbydefault', g: 'Boolean' },
			EnableCopilotStudioCrossGeoShareDataWithVivaInsights: { a: 'enablecopilotstudiocrossgeosharedatawithvivainsights', g: 'Boolean' },
			EnableCopilotStudioShareDataWithVI: { a: 'enablecopilotstudiosharedatawithvi', g: 'Boolean' },
			EnableCopilotStudioShareDataWithVivaInsights: { a: 'enablecopilotstudiosharedatawithvivainsights', g: 'Boolean' },
			EnableEnvironmentSettingsApp: { a: 'enableenvironmentsettingsapp', g: 'Boolean' },
			EnableFlowsInSolutionByDefault: { a: 'enableflowsinsolutionbydefault', g: 'Boolean' },
			EnableFlowsInSolutionByDefaultGracePeriod: { a: 'enableflowsinsolutionbydefaultgraceperiod', g: 'Boolean' },
			EnableImmersiveSkypeIntegration: { a: 'enableimmersiveskypeintegration', g: 'Boolean' },
			EnableIpBasedCookieBinding: { a: 'enableipbasedcookiebinding', g: 'Boolean' },
			EnableIpBasedFirewallRule: { a: 'enableipbasedfirewallrule', g: 'Boolean' },
			EnableIpBasedFirewallRuleInAuditMode: { a: 'enableipbasedfirewallruleinauditmode', g: 'Boolean' },
			EnableIpBasedStorageAccessSignatureRule: { a: 'enableipbasedstorageaccesssignaturerule', g: 'Boolean' },
			EnableLivePersonaCardUCI: { a: 'enablelivepersonacarduci', g: 'Boolean' },
			EnableLivePersonCardIntegrationInOffice: { a: 'enablelivepersoncardintegrationinoffice', g: 'Boolean' },
			EnableLPAuthoring: { a: 'enablelpauthoring', g: 'Boolean' },
			EnableMakerSwitchToClassic: { a: 'enablemakerswitchtoclassic', g: 'Boolean' },
			EnableMicrosoftFlowIntegration: { a: 'enablemicrosoftflowintegration', g: 'Boolean' },
			EnablePricingOnCreate: { a: 'enablepricingoncreate', g: 'Boolean' },
			EnableRedirectionToModernSettings: { a: 'enableredirectiontomodernsettings', g: 'Boolean' },
			EnableSensitivityLabels: { a: 'enablesensitivitylabels', g: 'Boolean' },
			EnableSmartMatching: { a: 'enablesmartmatching', g: 'Boolean' },
			EnableUnifiedClientCDN: { a: 'enableunifiedclientcdn', g: 'Boolean' },
			EnableUnifiedInterfaceShellRefresh: { a: 'enableunifiedinterfaceshellrefresh', g: 'Boolean' },
			EnforceReadOnlyPlugins: { a: 'enforcereadonlyplugins', g: 'Boolean' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExpireChangeTrackingInDays: { a: 'expirechangetrackingindays', g: 'Integer' },
			ExpireSubscriptionsInDays: { a: 'expiresubscriptionsindays', g: 'Integer' },
			ExternalBaseUrl: { a: 'externalbaseurl' },
			ExternalPartyCorrelationKeys: { a: 'externalpartycorrelationkeys' },
			ExternalPartyEntitySettings: { a: 'externalpartyentitysettings' },
			FeatureSet: { a: 'featureset' },
			FiscalCalendarStart_UtcDateOnly: { a: 'fiscalcalendarstart', g: 'DateTime' },
			FiscalPeriodFormat: { a: 'fiscalperiodformat' },
			FiscalPeriodFormatPeriod: { a: 'fiscalperiodformatperiod', g: 'Integer' },
			FiscalPeriodType: { a: 'fiscalperiodtype', g: 'Integer' },
			FiscalSettingsUpdated: { a: 'fiscalsettingsupdated', r: true, g: 'Boolean' },
			FiscalYearDisplayCode: { a: 'fiscalyeardisplaycode', g: 'Integer' },
			FiscalYearFormat: { a: 'fiscalyearformat' },
			FiscalYearFormatPrefix: { a: 'fiscalyearformatprefix', g: 'Integer' },
			FiscalYearFormatSuffix: { a: 'fiscalyearformatsuffix', g: 'Integer' },
			FiscalYearFormatYear: { a: 'fiscalyearformatyear', g: 'Integer' },
			FiscalYearPeriodConnect: { a: 'fiscalyearperiodconnect' },
			FlowLogsTtlInMinutes: { a: 'flowlogsttlinminutes', g: 'Integer' },
			FlowRunTimeToLiveInSeconds: { a: 'flowruntimetoliveinseconds', g: 'Integer' },
			FullNameConventionCode: { a: 'fullnameconventioncode', g: 'Integer' },
			FutureExpansionWindow: { a: 'futureexpansionwindow', g: 'Integer' },
			GenerateAlertsForErrors: { a: 'generatealertsforerrors', g: 'Boolean' },
			GenerateAlertsForInformation: { a: 'generatealertsforinformation', g: 'Boolean' },
			GenerateAlertsForWarnings: { a: 'generatealertsforwarnings', g: 'Boolean' },
			GetStartedPaneContentEnabled: { a: 'getstartedpanecontentenabled', g: 'Boolean' },
			GlobalAppendUrlParametersEnabled: { a: 'globalappendurlparametersenabled', g: 'Boolean' },
			GlobalHelpUrl: { a: 'globalhelpurl' },
			GlobalHelpUrlEnabled: { a: 'globalhelpurlenabled', g: 'Boolean' },
			GoalRollupExpiryTime: { a: 'goalrollupexpirytime', g: 'Integer' },
			GoalRollupFrequency: { a: 'goalrollupfrequency', g: 'Integer' },
			GrantAccessToNetworkService: { a: 'grantaccesstonetworkservice', g: 'Boolean' },
			HashDeltaSubjectCount: { a: 'hashdeltasubjectcount', g: 'Integer' },
			HashFilterKeywords: { a: 'hashfilterkeywords' },
			HashMaxCount: { a: 'hashmaxcount', g: 'Integer' },
			HashMinAddressCount: { a: 'hashminaddresscount', g: 'Integer' },
			HighContrastThemeData: { a: 'highcontrastthemedata' },
			IgnoreInternalEmail: { a: 'ignoreinternalemail', g: 'Boolean' },
			ImproveSearchLoggingEnabled: { a: 'improvesearchloggingenabled', g: 'Boolean' },
			InactivityTimeoutEnabled: { a: 'inactivitytimeoutenabled', g: 'Boolean' },
			InactivityTimeoutInMins: { a: 'inactivitytimeoutinmins', g: 'Integer' },
			InactivityTimeoutReminderInMins: { a: 'inactivitytimeoutreminderinmins', g: 'Integer' },
			IncomingEmailExchangeEmailRetrievalBatchSize: { a: 'incomingemailexchangeemailretrievalbatchsize', g: 'Integer' },
			InitialVersion: { a: 'initialversion' },
			IntegrationUserId: { a: 'integrationuserid' },
			InvoicePrefix: { a: 'invoiceprefix' },
			IpBasedStorageAccessSignatureMode: { a: 'ipbasedstorageaccesssignaturemode', g: 'Integer' },
			IsActionCardEnabled: { a: 'isactioncardenabled', g: 'Boolean' },
			IsActionSupportFeatureEnabled: { a: 'isactionsupportfeatureenabled', g: 'Boolean' },
			IsActivityAnalysisEnabled: { a: 'isactivityanalysisenabled', g: 'Boolean' },
			IsAllMoneyDecimal: { a: 'isallmoneydecimal', r: true, g: 'Boolean' },
			IsAppMode: { a: 'isappmode', g: 'Boolean' },
			IsAppointmentAttachmentSyncEnabled: { a: 'isappointmentattachmentsyncenabled', g: 'Boolean' },
			IsAssignedTasksSyncEnabled: { a: 'isassignedtaskssyncenabled', g: 'Boolean' },
			IsAuditEnabled: { a: 'isauditenabled', g: 'Boolean' },
			IsAutoDataCaptureEnabled: { a: 'isautodatacaptureenabled', g: 'Boolean' },
			IsAutoDataCaptureV2Enabled: { a: 'isautodatacapturev2enabled', g: 'Boolean' },
			IsAutoInstallAppForD365InTeamsEnabled: { a: 'isautoinstallappford365inteamsenabled', g: 'Boolean' },
			IsAutoSaveEnabled: { a: 'isautosaveenabled', g: 'Boolean' },
			IsBaseCardStaticFieldDataEnabled: { a: 'isbasecardstaticfielddataenabled', g: 'Boolean' },
			IsBasicGeospatialIntegrationEnabled: { a: 'isbasicgeospatialintegrationenabled', g: 'Boolean' },
			IsBPFEntityCustomizationFeatureEnabled: { a: 'isbpfentitycustomizationfeatureenabled', g: 'Boolean' },
			IsCloudFlowSavingsEnabled: { a: 'iscloudflowsavingsenabled', g: 'Boolean' },
			IsClusteringEnabled: { a: 'isclusteringenabled', r: true, g: 'Boolean' },
			IsCollaborationExperienceEnabled: { a: 'iscollaborationexperienceenabled', g: 'Boolean' },
			IsComputerUseInMCSEnabled: { a: 'iscomputeruseinmcsenabled', g: 'Boolean' },
			IsConflictDetectionEnabledForMobileClient: { a: 'isconflictdetectionenabledformobileclient', g: 'Boolean' },
			IsContactMailingAddressSyncEnabled: { a: 'iscontactmailingaddresssyncenabled', g: 'Boolean' },
			IsContentSecurityPolicyEnabled: { a: 'iscontentsecuritypolicyenabled', g: 'Boolean' },
			IsContentSecurityPolicyEnabledForCanvas: { a: 'iscontentsecuritypolicyenabledforcanvas', g: 'Boolean' },
			IsContextualEmailEnabled: { a: 'iscontextualemailenabled', g: 'Boolean' },
			IsContextualHelpEnabled: { a: 'iscontextualhelpenabled', g: 'Boolean' },
			IsCopilotFeedbackEnabled: { a: 'iscopilotfeedbackenabled', g: 'Boolean' },
			IsCuaOnHmgV2Enabled: { a: 'iscuaonhmgv2enabled', g: 'Boolean' },
			IsCustomControlsInCanvasAppsEnabled: { a: 'iscustomcontrolsincanvasappsenabled', g: 'Boolean' },
			IsDefaultCountryCodeCheckEnabled: { a: 'isdefaultcountrycodecheckenabled', g: 'Boolean' },
			IsDelegateAccessEnabled: { a: 'isdelegateaccessenabled', g: 'Boolean' },
			IsDelveActionHubIntegrationEnabled: { a: 'isdelveactionhubintegrationenabled', g: 'Boolean' },
			IsDesktopFlowConnectionEmbeddingEnabled: { a: 'isdesktopflowconnectionembeddingenabled', g: 'Boolean' },
			IsDesktopFlowRuntimeRepairAttendedEnabled: { a: 'isdesktopflowruntimerepairattendedenabled', g: 'Boolean' },
			IsDesktopFlowRuntimeRepairUnattendedEnabled: { a: 'isdesktopflowruntimerepairunattendedenabled', g: 'Boolean' },
			IsDesktopFlowSavingsEnabled: { a: 'isdesktopflowsavingsenabled', g: 'Boolean' },
			IsDesktopFlowSchemaV2Enabled: { a: 'isdesktopflowschemav2enabled', g: 'Boolean' },
			IsDesktopFlowVanillaImageSharingEnabled: { a: 'isdesktopflowvanillaimagesharingenabled', g: 'Boolean' },
			IsDesktopFlowVersionControlEnabled: { a: 'isdesktopflowversioncontrolenabled', g: 'Boolean' },
			IsDesktopFlowVersionControlEnabledByDefault: { a: 'isdesktopflowversioncontrolenabledbydefault', g: 'Boolean' },
			IsDisabled: { a: 'isdisabled', r: true, g: 'Boolean' },
			IsDuplicateDetectionEnabled: { a: 'isduplicatedetectionenabled', g: 'Boolean' },
			IsDuplicateDetectionEnabledForImport: { a: 'isduplicatedetectionenabledforimport', g: 'Boolean' },
			IsDuplicateDetectionEnabledForOfflineSync: { a: 'isduplicatedetectionenabledforofflinesync', g: 'Boolean' },
			IsDuplicateDetectionEnabledForOnlineCreateUpdate: { a: 'isduplicatedetectionenabledforonlinecreateupdate', g: 'Boolean' },
			IsEmailAddressValidationEnabled: { a: 'isemailaddressvalidationenabled', g: 'Boolean' },
			IsEmailMonitoringAllowed: { a: 'isemailmonitoringallowed', g: 'Boolean' },
			IsEmailServerProfileContentFilteringEnabled: { a: 'isemailserverprofilecontentfilteringenabled', g: 'Boolean' },
			IsEnabledForAllRoles: { a: 'isenabledforallroles', g: 'Boolean' },
			IsExternalFileStorageEnabled: { a: 'isexternalfilestorageenabled', g: 'Boolean' },
			IsExternalSearchIndexEnabled: { a: 'isexternalsearchindexenabled', g: 'Boolean' },
			IsFiscalPeriodMonthBased: { a: 'isfiscalperiodmonthbased', g: 'Boolean' },
			IsFolderAutoCreatedonSP: { a: 'isfolderautocreatedonsp', g: 'Boolean' },
			IsFolderBasedTrackingEnabled: { a: 'isfolderbasedtrackingenabled', g: 'Boolean' },
			IsFullTextSearchEnabled: { a: 'isfulltextsearchenabled', g: 'Boolean' },
			IsGeospatialAzureMapsIntegrationEnabled: { a: 'isgeospatialazuremapsintegrationenabled', g: 'Boolean' },
			IsHierarchicalSecurityModelEnabled: { a: 'ishierarchicalsecuritymodelenabled', g: 'Boolean' },
			IsIdeasDataCollectionEnabled: { a: 'isideasdatacollectionenabled', g: 'Boolean' },
			IsLUISEnabledforD365Bot: { a: 'isluisenabledford365bot', g: 'Boolean' },
			IsMailboxForcedUnlockingEnabled: { a: 'ismailboxforcedunlockingenabled', g: 'Boolean' },
			IsMailboxInactiveBackoffEnabled: { a: 'ismailboxinactivebackoffenabled', g: 'Boolean' },
			IsManualSalesForecastingEnabled: { a: 'ismanualsalesforecastingenabled', g: 'Boolean' },
			IsMobileClientOnDemandSyncEnabled: { a: 'ismobileclientondemandsyncenabled', g: 'Boolean' },
			IsMobileOfflineEnabled: { a: 'ismobileofflineenabled', g: 'Boolean' },
			IsModelDrivenAppsInMSTeamsEnabled: { a: 'ismodeldrivenappsinmsteamsenabled', g: 'Boolean' },
			IsMoneySavingsAllowed: { a: 'ismoneysavingsallowed', g: 'Boolean' },
			IsMSTeamsCollaborationEnabled: { a: 'ismsteamscollaborationenabled', g: 'Boolean' },
			IsMSTeamsEnabled: { a: 'ismsteamsenabled', g: 'Boolean' },
			IsMSTeamsSettingChangedByUser: { a: 'ismsteamssettingchangedbyuser', g: 'Boolean' },
			IsMSTeamsUserSyncEnabled: { a: 'ismsteamsusersyncenabled', g: 'Boolean' },
			IsNewAddProductExperienceEnabled: { a: 'isnewaddproductexperienceenabled', g: 'Boolean' },
			IsNotesAnalysisEnabled: { a: 'isnotesanalysisenabled', g: 'Boolean' },
			IsNotificationForD365InTeamsEnabled: { a: 'isnotificationford365inteamsenabled', g: 'Boolean' },
			IsOfficeGraphEnabled: { a: 'isofficegraphenabled', g: 'Boolean' },
			IsOneDriveEnabled: { a: 'isonedriveenabled', g: 'Boolean' },
			IsPAIEnabled: { a: 'ispaienabled', g: 'Boolean' },
			IsPDFGenerationEnabled: { a: 'ispdfgenerationenabled' },
			IsPerProcessCapacityOverageEnabled: { a: 'isperprocesscapacityoverageenabled', g: 'Boolean' },
			IsPlaybookEnabled: { a: 'isplaybookenabled', g: 'Boolean' },
			IsPresenceEnabled: { a: 'ispresenceenabled', g: 'Boolean' },
			IsPreviewEnabledForActionCard: { a: 'ispreviewenabledforactioncard', g: 'Boolean' },
			IsPreviewForAutoCaptureEnabled: { a: 'ispreviewforautocaptureenabled', g: 'Boolean' },
			IsPreviewForEmailMonitoringAllowed: { a: 'ispreviewforemailmonitoringallowed', g: 'Boolean' },
			IsPriceListMandatory: { a: 'ispricelistmandatory', g: 'Boolean' },
			IsProcessCapacityAutoClaimEnabled: { a: 'isprocesscapacityautoclaimenabled', g: 'Boolean' },
			IsProcessMiningEnabled: { a: 'isprocessminingenabled', g: 'Boolean' },
			IsQuickCreateEnabledForOpportunityClose: { a: 'isquickcreateenabledforopportunityclose', g: 'Boolean' },
			IsReadAuditEnabled: { a: 'isreadauditenabled', g: 'Boolean' },
			IsRelationshipInsightsEnabled: { a: 'isrelationshipinsightsenabled', g: 'Boolean' },
			IsResourceBookingExchangeSyncEnabled: { a: 'isresourcebookingexchangesyncenabled', g: 'Boolean' },
			IsRichTextNotesEnabled: { a: 'isrichtextnotesenabled', g: 'Boolean' },
			IsRpaAutoscaleAadJoinEnabled: { a: 'isrpaautoscaleaadjoinenabled', g: 'Boolean' },
			IsRpaAutoscaleEnabled: { a: 'isrpaautoscaleenabled', g: 'Boolean' },
			IsRpaBoxCrossGeoEnabled: { a: 'isrpaboxcrossgeoenabled', g: 'Boolean' },
			IsRpaBoxEnabled: { a: 'isrpaboxenabled', g: 'Boolean' },
			IsRpaUnattendedEnabled: { a: 'isrpaunattendedenabled', g: 'Boolean' },
			IsSalesAssistantEnabled: { a: 'issalesassistantenabled', g: 'Boolean' },
			IsSendCuaAuditLogToPurviewEnabled: { a: 'issendcuaauditlogtopurviewenabled', g: 'Boolean' },
			IsSharingInOrgAllowed: { a: 'issharinginorgallowed', g: 'Boolean' },
			IsSOPIntegrationEnabled: { a: 'issopintegrationenabled', g: 'Boolean' },
			IsTextWrapEnabled: { a: 'istextwrapenabled', g: 'Boolean' },
			IsUploadCuaLogToDataverseEnabled: { a: 'isuploadcualogtodataverseenabled', g: 'Boolean' },
			IsUserAccessAuditEnabled: { a: 'isuseraccessauditenabled', g: 'Boolean' },
			ISVIntegrationCode: { a: 'isvintegrationcode', g: 'Integer' },
			IsWorkQueueSavingsEnabled: { a: 'isworkqueuesavingsenabled', g: 'Boolean' },
			IsWriteInProductsAllowed: { a: 'iswriteinproductsallowed', g: 'Boolean' },
			KaPrefix: { a: 'kaprefix' },
			KbPrefix: { a: 'kbprefix' },
			KMSettings: { a: 'kmsettings' },
			LanguageCode: { a: 'languagecode', g: 'Integer' },
			LegacyAppToggle: { a: 'legacyapptoggle', g: 'Integer' },
			LocaleId: { a: 'localeid', g: 'Integer' },
			LongDateFormatCode: { a: 'longdateformatcode', g: 'Integer' },
			LookupCharacterCountBeforeResolve: { a: 'lookupcharactercountbeforeresolve', g: 'Integer' },
			LookupResolveDelayMS: { a: 'lookupresolvedelayms', g: 'Integer' },
			MailboxIntermittentIssueMinRange: { a: 'mailboxintermittentissueminrange', g: 'Integer' },
			MailboxPermanentIssueMinRange: { a: 'mailboxpermanentissueminrange', g: 'Integer' },
			MaxActionStepsInBPF: { a: 'maxactionstepsinbpf', g: 'Integer' },
			MaxAllowedPendingRollupJobCount: { a: 'maxallowedpendingrollupjobcount', g: 'Integer' },
			MaxAllowedPendingRollupJobPercentage: { a: 'maxallowedpendingrollupjobpercentage', g: 'Integer' },
			MaxAppointmentDurationDays: { a: 'maxappointmentdurationdays', g: 'Integer' },
			MaxConditionsForMobileOfflineFilters: { a: 'maxconditionsformobileofflinefilters', g: 'Integer' },
			MaxDepthForHierarchicalSecurityModel: { a: 'maxdepthforhierarchicalsecuritymodel', g: 'Integer' },
			MaxFolderBasedTrackingMappings: { a: 'maxfolderbasedtrackingmappings', g: 'Integer' },
			MaximumActiveBusinessProcessFlowsAllowedPerEntity: { a: 'maximumactivebusinessprocessflowsallowedperentity', g: 'Integer' },
			MaximumDynamicPropertiesAllowed: { a: 'maximumdynamicpropertiesallowed', g: 'Integer' },
			MaximumEntitiesWithActiveSLA: { a: 'maximumentitieswithactivesla', g: 'Integer' },
			MaximumSLAKPIPerEntityWithActiveSLA: { a: 'maximumslakpiperentitywithactivesla', g: 'Integer' },
			MaximumTrackingNumber: { a: 'maximumtrackingnumber', g: 'Integer' },
			MaxProductsInBundle: { a: 'maxproductsinbundle', g: 'Integer' },
			MaxRecordsForExportToExcel: { a: 'maxrecordsforexporttoexcel', g: 'Integer' },
			MaxRecordsForLookupFilters: { a: 'maxrecordsforlookupfilters', g: 'Integer' },
			MaxRollupFieldsPerEntity: { a: 'maxrollupfieldsperentity', g: 'Integer' },
			MaxRollupFieldsPerOrg: { a: 'maxrollupfieldsperorg', g: 'Integer' },
			MaxSLAItemsPerSLA: { a: 'maxslaitemspersla', g: 'Integer' },
			MaxSupportedInternetExplorerVersion: { a: 'maxsupportedinternetexplorerversion', r: true, g: 'Integer' },
			MaxUploadFileSize: { a: 'maxuploadfilesize', g: 'Integer' },
			MaxVerboseLoggingMailbox: { a: 'maxverboseloggingmailbox', r: true, g: 'Integer' },
			MaxVerboseLoggingSyncCycles: { a: 'maxverboseloggingsynccycles', r: true, g: 'Integer' },
			MetadataSyncLastTimeOfNeverExpiredDeletedObjects_UtcDateAndTime: { a: 'metadatasynclasttimeofneverexpireddeletedobjects', r: true, g: 'DateTime' },
			MetadataSyncTimestamp: { a: 'metadatasynctimestamp', r: true, g: 'Integer' },
			MicrosoftFlowEnvironment: { a: 'microsoftflowenvironment' },
			MinAddressBookSyncInterval: { a: 'minaddressbooksyncinterval', g: 'Integer' },
			MinOfflineSyncInterval: { a: 'minofflinesyncinterval', g: 'Integer' },
			MinOutlookSyncInterval: { a: 'minoutlooksyncinterval', g: 'Integer' },
			MobileOfflineMinLicenseProd: { a: 'mobileofflineminlicenseprod', r: true, g: 'Integer' },
			MobileOfflineMinLicenseTrial: { a: 'mobileofflineminlicensetrial', r: true, g: 'Integer' },
			MobileOfflineSyncInterval: { a: 'mobileofflinesyncinterval', g: 'Integer' },
			ModernAdvancedFindFiltering: { a: 'modernadvancedfindfiltering', g: 'Boolean' },
			ModernAppDesignerCoauthoringEnabled: { a: 'modernappdesignercoauthoringenabled', g: 'Boolean' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			MultiColumnSortEnabled: { a: 'multicolumnsortenabled', g: 'Integer' },
			Name: { a: 'name' },
			NaturalLanguageAssistFilter: { a: 'naturallanguageassistfilter', g: 'Boolean' },
			NegativeCurrencyFormatCode: { a: 'negativecurrencyformatcode', g: 'Integer' },
			NegativeFormatCode: { a: 'negativeformatcode', g: 'Integer' },
			NewSearchExperienceEnabled: { a: 'newsearchexperienceenabled', g: 'Boolean' },
			NextCustomObjectTypeCode: { a: 'nextcustomobjecttypecode', r: true, g: 'Integer' },
			NextTrackingNumber: { a: 'nexttrackingnumber', g: 'Integer' },
			NotifyMailboxOwnerOfEmailServerLevelAlerts: { a: 'notifymailboxownerofemailserverlevelalerts', g: 'Boolean' },
			NumberFormat: { a: 'numberformat' },
			NumberGroupFormat: { a: 'numbergroupformat' },
			NumberSeparator: { a: 'numberseparator' },
			OfficeAppsAutoDeploymentEnabled: { a: 'officeappsautodeploymentenabled', g: 'Boolean' },
			OfficeGraphDelveUrl: { a: 'officegraphdelveurl' },
			OOBPriceCalculationEnabled: { a: 'oobpricecalculationenabled', g: 'Boolean' },
			OptOutSchemaV2EnabledByDefault: { a: 'optoutschemav2enabledbydefault', g: 'Boolean' },
			OrderPrefix: { a: 'orderprefix' },
			OrganizationId: { a: 'organizationid', r: true },
			OrganizationState: { a: 'organizationstate', r: true, g: 'Integer' },
			OrgDbOrgSettings: { a: 'orgdborgsettings' },
			OrgInsightsEnabled: { a: 'orginsightsenabled', g: 'Boolean' },
			PaiPreviewScenarioEnabled: { a: 'paipreviewscenarioenabled', g: 'Boolean' },
			ParsedTableColumnPrefix: { a: 'parsedtablecolumnprefix', r: true },
			ParsedTablePrefix: { a: 'parsedtableprefix', r: true },
			PastExpansionWindow: { a: 'pastexpansionwindow', g: 'Integer' },
			PcfDatasetGridEnabled: { a: 'pcfdatasetgridenabled' },
			PerformACTSyncAfter_UtcDateAndTime: { a: 'performactsyncafter', g: 'DateTime' },
			Picture: { a: 'picture' },
			PinpointLanguageCode: { a: 'pinpointlanguagecode', g: 'Integer' },
			PluginTraceLogSetting: { a: 'plugintracelogsetting', g: 'Integer' },
			PMDesignator: { a: 'pmdesignator' },
			PostMessageWhitelistDomains: { a: 'postmessagewhitelistdomains' },
			PowerAppsMakerBotEnabled: { a: 'powerappsmakerbotenabled', g: 'Boolean' },
			PowerBIAllowCrossRegionOperations: { a: 'powerbiallowcrossregionoperations', g: 'Boolean' },
			PowerBIAutomaticPermissionsAssignment: { a: 'powerbiautomaticpermissionsassignment', g: 'Boolean' },
			PowerBIComponentsCreate: { a: 'powerbicomponentscreate', g: 'Boolean' },
			PowerBiFeatureEnabled: { a: 'powerbifeatureenabled', g: 'Boolean' },
			PricingDecimalPrecision: { a: 'pricingdecimalprecision', g: 'Integer' },
			PrivacyStatementUrl: { a: 'privacystatementurl' },
			PrivilegeUserGroupId: { a: 'privilegeusergroupid' },
			PrivReportingGroupId: { a: 'privreportinggroupid' },
			PrivReportingGroupName: { a: 'privreportinggroupname' },
			ProductRecommendationsEnabled: { a: 'productrecommendationsenabled', g: 'Boolean' },
			QualifyLeadAdditionalOptions: { a: 'qualifyleadadditionaloptions' },
			QuickActionToOpenRecordsInSidePaneEnabled: { a: 'quickactiontoopenrecordsinsidepaneenabled', g: 'Boolean' },
			QuickFindRecordLimitEnabled: { a: 'quickfindrecordlimitenabled', g: 'Boolean' },
			QuotePrefix: { a: 'quoteprefix' },
			RecalculateSLA: { a: 'recalculatesla', g: 'Boolean' },
			RecurrenceDefaultNumberOfOccurrences: { a: 'recurrencedefaultnumberofoccurrences', g: 'Integer' },
			RecurrenceExpansionJobBatchInterval: { a: 'recurrenceexpansionjobbatchinterval', g: 'Integer' },
			RecurrenceExpansionJobBatchSize: { a: 'recurrenceexpansionjobbatchsize', g: 'Integer' },
			RecurrenceExpansionSynchCreateMax: { a: 'recurrenceexpansionsynchcreatemax', g: 'Integer' },
			ReferenceSiteMapXml: { a: 'referencesitemapxml' },
			ReleaseCadence: { a: 'releasecadence', g: 'Integer' },
			ReleaseChannel: { a: 'releasechannel', g: 'Integer' },
			ReleaseWaveName: { a: 'releasewavename' },
			RelevanceSearchEnabledByPlatform: { a: 'relevancesearchenabledbyplatform', g: 'Boolean' },
			RelevanceSearchModifiedOn_UtcDateAndTime: { a: 'relevancesearchmodifiedon', g: 'DateTime' },
			RenderSecureIFrameForEmail: { a: 'rendersecureiframeforemail', g: 'Boolean' },
			ReportingGroupId: { a: 'reportinggroupid' },
			ReportingGroupName: { a: 'reportinggroupname' },
			ReportScriptErrors: { a: 'reportscripterrors', g: 'Integer' },
			RequireApprovalForQueueEmail: { a: 'requireapprovalforqueueemail', g: 'Boolean' },
			RequireApprovalForUserEmail: { a: 'requireapprovalforuseremail', g: 'Boolean' },
			ResolveSimilarUnresolvedEmailAddress: { a: 'resolvesimilarunresolvedemailaddress', g: 'Boolean' },
			RestrictGuestUserAccess: { a: 'restrictGuestUserAccess', g: 'Boolean' },
			RestrictStatusUpdate: { a: 'restrictstatusupdate', g: 'Boolean' },
			ReverseProxyIpAddresses: { a: 'reverseproxyipaddresses' },
			RiErrorStatus: { a: 'rierrorstatus', g: 'Integer' },
			SameSiteModeForSessionCookie: { a: 'samesitemodeforsessioncookie', g: 'Integer' },
			SampleDataImportId: { a: 'sampledataimportid' },
			SavingEventsTTLInMinutes: { a: 'savingeventsttlinminutes', g: 'Integer' },
			SchemaNamePrefix: { a: 'schemanameprefix' },
			SendBulkEmailInUCI: { a: 'sendbulkemailinuci', g: 'Boolean' },
			ServeStaticResourcesFromAzureCDN: { a: 'servestaticresourcesfromazurecdn', g: 'Boolean' },
			SessionRecordingEnabled: { a: 'sessionrecordingenabled', g: 'Boolean' },
			SessionTimeoutEnabled: { a: 'sessiontimeoutenabled', g: 'Boolean' },
			SessionTimeoutInMins: { a: 'sessiontimeoutinmins', g: 'Integer' },
			SessionTimeoutReminderInMins: { a: 'sessiontimeoutreminderinmins', g: 'Integer' },
			SharePointDeploymentType: { a: 'sharepointdeploymenttype', g: 'Integer' },
			ShareToPreviousOwnerOnAssign: { a: 'sharetopreviousowneronassign', g: 'Boolean' },
			ShowKBArticleDeprecationNotification: { a: 'showkbarticledeprecationnotification', g: 'Boolean' },
			ShowWeekNumber: { a: 'showweeknumber', g: 'Boolean' },
			SignupOutlookDownloadFWLink: { a: 'signupoutlookdownloadfwlink' },
			SiteMapXml: { a: 'sitemapxml' },
			SlaPauseStates: { a: 'slapausestates' },
			SocialInsightsEnabled: { a: 'socialinsightsenabled', g: 'Boolean' },
			SocialInsightsInstance: { a: 'socialinsightsinstance' },
			SocialInsightsTermsAccepted: { a: 'socialinsightstermsaccepted', g: 'Boolean' },
			SortId: { a: 'sortid', g: 'Integer' },
			SqlAccessGroupId: { a: 'sqlaccessgroupid' },
			SqlAccessGroupName: { a: 'sqlaccessgroupname' },
			SQMEnabled: { a: 'sqmenabled', g: 'Boolean' },
			SupportUserId: { a: 'supportuserid' },
			SuppressSLA: { a: 'suppresssla', g: 'Boolean' },
			SuppressValidationEmails: { a: 'suppressvalidationemails', g: 'Boolean' },
			SyncBulkOperationBatchSize: { a: 'syncbulkoperationbatchsize', g: 'Integer' },
			SyncBulkOperationMaxLimit: { a: 'syncbulkoperationmaxlimit', g: 'Integer' },
			SyncOptInSelection: { a: 'syncoptinselection', g: 'Boolean' },
			SyncOptInSelectionStatus: { a: 'syncoptinselectionstatus', g: 'Integer' },
			SystemUserId: { a: 'systemuserid' },
			TableScopedDVSearchInApps: { a: 'tablescopeddvsearchinapps', g: 'Boolean' },
			TagMaxAggressiveCycles: { a: 'tagmaxaggressivecycles', g: 'Integer' },
			TagPollingPeriod: { a: 'tagpollingperiod', g: 'Integer' },
			TaskBasedFlowEnabled: { a: 'taskbasedflowenabled', g: 'Boolean' },
			TeamsChatDataSync: { a: 'teamschatdatasync', g: 'Boolean' },
			TelemetryInstrumentationKey: { a: 'telemetryinstrumentationkey' },
			TextAnalyticsEnabled: { a: 'textanalyticsenabled', g: 'Boolean' },
			TimeFormatCode: { a: 'timeformatcode', g: 'Integer' },
			TimeFormatString: { a: 'timeformatstring' },
			TimeSeparator: { a: 'timeseparator' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			TokenExpiry: { a: 'tokenexpiry', g: 'Integer' },
			TokenKey: { a: 'tokenkey' },
			TraceLogMaximumAgeInDays: { a: 'tracelogmaximumageindays', g: 'Integer' },
			TrackingPrefix: { a: 'trackingprefix' },
			TrackingTokenIdBase: { a: 'trackingtokenidbase', g: 'Integer' },
			TrackingTokenIdDigits: { a: 'trackingtokeniddigits', g: 'Integer' },
			UniqueSpecifierLength: { a: 'uniquespecifierlength', g: 'Integer' },
			UnresolveEmailAddressIfMultipleMatch: { a: 'unresolveemailaddressifmultiplematch', g: 'Boolean' },
			UseInbuiltRuleForDefaultPricelistSelection: { a: 'useinbuiltrulefordefaultpricelistselection', g: 'Boolean' },
			UseLegacyRendering: { a: 'uselegacyrendering', g: 'Boolean' },
			UsePositionHierarchy: { a: 'usepositionhierarchy', g: 'Boolean' },
			UseQuickFindViewForGridSearch: { a: 'usequickfindviewforgridsearch', g: 'Boolean' },
			UserAccessAuditingInterval: { a: 'useraccessauditinginterval', g: 'Integer' },
			UseReadForm: { a: 'usereadform', g: 'Boolean' },
			UserGroupId: { a: 'usergroupid' },
			UserRatingEnabled: { a: 'userratingenabled', g: 'Boolean' },
			UseSkypeProtocol: { a: 'useskypeprotocol', g: 'Boolean' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			V3CalloutConfigHash: { a: 'v3calloutconfighash', r: true },
			ValidationMode: { a: 'validationmode', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' },
			WebResourceHash: { a: 'webresourcehash' },
			WeekStartDayCode: { a: 'weekstartdaycode', g: 'Integer' },
			WidgetProperties: { a: 'widgetproperties' },
			YammerGroupId: { a: 'yammergroupid', g: 'Integer' },
			YammerNetworkPermalink: { a: 'yammernetworkpermalink' },
			YammerOAuthAccessTokenExpired: { a: 'yammeroauthaccesstokenexpired', g: 'Boolean' },
			YammerPostMethod: { a: 'yammerpostmethod', g: 'Integer' },
			YearStartWeekCode: { a: 'yearstartweekcode', g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const organization = {};
		organization.ODataEntity = e;
		organization.FormattedValue = {};
		for (const field in _organization) {
			const fieldConfig = _organization[field];
			webApiField(organization, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		organization.Entity = u;
		organization.EntityName = 'organization';
		organization.EntityCollectionName = 'organizations';
		organization['@odata.etag'] = e?.['@odata.etag'];
		organization.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		organization.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return organization;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Organization = {
		ApplicationBasedAccessControlMode: { AuditMode: 2, Disabled: 0, Enabled: 1, Enabled_for_roles: 3 },
		CuaFlowLogsVerbosity: { All_data: 0, Data_without_screenshots: 1, Minimal: 2 },
		CurrencyDisplayOption: { Currency_code: 1, Currency_symbol: 0 },
		CurrencyFormatCode: { _123_0: 0, _123_1: 1, _123_2: 2, _123_3: 3 },
		DateFormatCode: { },
		DefaultRecurrenceEndRangeType: { End_By_Date: 3, No_End_Date: 1, Number_of_Occurrences: 2 },
		DesktopFlowRunActionLogsStatus: { Disabled: 2, Enabled: 0, OnFailure: 1 },
		DesktopFlowRunActionLogVerbosity: { Custom: 2, Debug: 1, Error: 4, Full: 0, Warning: 3 },
		DesktopFlowRunActionLogVersion: { AdditionalContext: 0, AdditionalContextAndFlowLogs: 2, FlowLogs: 1 },
		DiscountCalculationMethod: { Line_item: 0, Per_unit: 1 },
		EmailConnectionChannel: { Microsoft_Dynamics_365_Email_Router: 1, Server_Side_Synchronization: 0 },
		FiscalPeriodFormatPeriod: { M0: 5, Month_0: 4, Month_Name: 7, P0: 3, Q0: 2, Quarter_0: 1, Semester_0: 6 },
		FiscalYearFormatPrefix: { FY: 1 },
		FiscalYearFormatSuffix: { Fiscal_Year: 2, FY: 1 },
		FiscalYearFormatYear: { GGYY: 3, YY: 2, YYYY: 1 },
		FullNameConventionCode: { First_Name: 1, First_Name_Middle_Initial_Last_Name: 3, First_Name_Middle_Name_Last_Name: 5, Last_Name_First_Name: 0, Last_Name_First_Name_Middle_Initial: 2, Last_Name_First_Name_Middle_Name: 4, Last_Name_no_space_First_Name: 7, Last_Name_space_First_Name: 6 },
		IpBasedStorageAccessSignatureMode: { IP_Binding_and_IP_Firewall: 2, IP_Binding_only: 0, IP_Binding_or_IP_Firewall: 3, IP_Firewall_only: 1 },
		ISVIntegrationCode: { All: 7, None: 0, Outlook: 6, Outlook_Laptop_Client: 4, Outlook_Workstation_Client: 2, Web: 1, Web_Outlook_Laptop_Client: 5, Web_Outlook_Workstation_Client: 3 },
		LegacyAppToggle: { Auto: 0, Off: 2, On: 1 },
		NegativeFormatCode: { Brackets: 0, Dash: 1, Dash_plus_Space: 2, Space_plus_Trailing_Dash: 4, Trailing_Dash: 3 },
		OrganizationState: { Active: 3, Creating: 0, Updating: 2, Upgrading: 1 },
		PluginTraceLogSetting: { All: 2, Exception: 1, Off: 0 },
		ReleaseChannel: { Auto: 0, Microsoft_Inner_channel: 2, Monthly_channel: 1, Semi_annual_channel: 3 },
		ReportScriptErrors: { Ask_me_for_permission_to_send_an_error_report_to_Microsoft: 1, Automatically_send_an_error_report_to_Microsoft_without_asking_me_for_permission: 2, Never_send_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365: 3, No_preference_for_sending_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365: 0 },
		SameSiteModeForSessionCookie: { Default: 0, Lax: 2, None: 1, Strict: 3 },
		SharePointDeploymentType: { On_Premises: 1, Online: 0 },
		SyncOptInSelectionStatus: { Failed: 3, Passed: 2, Processing: 1 },
		TimeFormatCode: { },
		ValidationMode: { Block: 2, Off: 0, Warn: 1 },
		WeekStartDayCode: { },
		YammerPostMethod: { Private: 1, Public: 0 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));