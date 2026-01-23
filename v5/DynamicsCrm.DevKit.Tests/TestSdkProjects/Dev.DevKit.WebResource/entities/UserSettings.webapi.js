'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	if (DevKit === undefined) DevKit = {};
	DevKit.UserSettingsApi = function (e) {
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
		const _usersettings = {
			AddressBookSyncInterval: { a: 'addressbooksyncinterval', g: 'Integer' },
			AdvancedFindStartupMode: { a: 'advancedfindstartupmode', g: 'Integer' },
			AllowEmailCredentials: { a: 'allowemailcredentials', r: true, g: 'Boolean' },
			AMDesignator: { a: 'amdesignator' },
			AutoCaptureUserStatus: { a: 'autocaptureuserstatus', g: 'Integer' },
			AutoCreateContactOnPromote: { a: 'autocreatecontactonpromote', g: 'Integer' },
			BusinessUnitId: { a: 'businessunitid' },
			CalendarType: { a: 'calendartype', g: 'Integer' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CurrencyDecimalPrecision: { a: 'currencydecimalprecision', g: 'Integer' },
			CurrencyFormatCode: { a: 'currencyformatcode', g: 'Integer' },
			CurrencySymbol: { a: 'currencysymbol' },
			D365AutoInstallAttemptStatus: { a: 'd365autoinstallattemptstatus', g: 'Integer' },
			DataValidationModeForExportToExcel: { a: 'datavalidationmodeforexporttoexcel', g: 'Integer' },
			DateFormatCode: { a: 'dateformatcode', g: 'Integer' },
			DateFormatString: { a: 'dateformatstring' },
			DateSeparator: { a: 'dateseparator' },
			DecimalSymbol: { a: 'decimalsymbol' },
			DefaultCalendarView: { a: 'defaultcalendarview', g: 'Integer' },
			DefaultCountryCode: { a: 'defaultcountrycode' },
			DefaultDashboardId: { a: 'defaultdashboardid' },
			DefaultSearchExperience: { a: 'defaultsearchexperience', g: 'Integer' },
			EmailPassword: { a: 'emailpassword', r: true },
			EmailUsername: { a: 'emailusername', r: true },
			EntityFormMode: { a: 'entityformmode', g: 'Integer' },
			FullNameConventionCode: { a: 'fullnameconventioncode', g: 'Integer' },
			GetStartedPaneContentEnabled: { a: 'getstartedpanecontentenabled', g: 'Boolean' },
			HelpLanguageId: { a: 'helplanguageid', g: 'Integer' },
			HomepageArea: { a: 'homepagearea' },
			HomepageLayout: { a: 'homepagelayout' },
			HomepageSubarea: { a: 'homepagesubarea' },
			IgnoreUnsolicitedEmail: { a: 'ignoreunsolicitedemail', g: 'Boolean' },
			IncomingEmailFilteringMethod: { a: 'incomingemailfilteringmethod', g: 'Integer' },
			IsAppsForCrmAlertDismissed: { a: 'isappsforcrmalertdismissed', g: 'Boolean' },
			IsAutoDataCaptureEnabled: { a: 'isautodatacaptureenabled', g: 'Boolean' },
			IsDefaultCountryCodeCheckEnabled: { a: 'isdefaultcountrycodecheckenabled', g: 'Boolean' },
			IsDuplicateDetectionEnabledWhenGoingOnline: { a: 'isduplicatedetectionenabledwhengoingonline', g: 'Boolean' },
			IsEmailConversationViewEnabled: { a: 'isemailconversationviewenabled', g: 'Boolean' },
			IsGuidedHelpEnabled: { a: 'isguidedhelpenabled', g: 'Boolean' },
			IsResourceBookingExchangeSyncEnabled: { a: 'isresourcebookingexchangesyncenabled', g: 'Boolean' },
			IsSendAsAllowed: { a: 'issendasallowed', g: 'Boolean' },
			LastAlertsViewedTime_UtcDateAndTime: { a: 'lastalertsviewedtime', g: 'DateTime' },
			LastModifiedTimeForViewPersonalizationSettings_UtcDateAndTime: { a: 'lastmodifiedtimeforviewpersonalizationsettings', g: 'DateTime' },
			LocaleId: { a: 'localeid', g: 'Integer' },
			LongDateFormatCode: { a: 'longdateformatcode', g: 'Integer' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			NegativeCurrencyFormatCode: { a: 'negativecurrencyformatcode', g: 'Integer' },
			NegativeFormatCode: { a: 'negativeformatcode', g: 'Integer' },
			NextTrackingNumber: { a: 'nexttrackingnumber', g: 'Integer' },
			NumberGroupFormat: { a: 'numbergroupformat' },
			NumberSeparator: { a: 'numberseparator' },
			OfflineSyncInterval: { a: 'offlinesyncinterval', g: 'Integer' },
			OutlookSyncInterval: { a: 'outlooksyncinterval', g: 'Integer' },
			PagingLimit: { a: 'paginglimit', g: 'Integer' },
			PersonalizationSettings: { a: 'personalizationsettings' },
			PMDesignator: { a: 'pmdesignator' },
			PreferredSolution: { b: 'preferredsolution', a: '_preferredsolution_value', c: 'solutions', d: 'solution' },
			PricingDecimalPrecision: { a: 'pricingdecimalprecision', g: 'Integer' },
			ReleaseChannel: { a: 'releasechannel', g: 'Integer' },
			ReportScriptErrors: { a: 'reportscripterrors', g: 'Integer' },
			ResourceBookingExchangeSyncVersion: { a: 'resourcebookingexchangesyncversion', g: 'Integer' },
			SelectedGlobalFilterId: { a: 'selectedglobalfilterid' },
			ShowWeekNumber: { a: 'showweeknumber', g: 'Boolean' },
			SplitViewState: { a: 'splitviewstate', g: 'Boolean' },
			SyncContactCompany: { a: 'synccontactcompany', g: 'Boolean' },
			SystemUserId: { a: 'systemuserid' },
			TableScopedDVSearchFeatureTeachingBubbleViews: { a: 'tablescopeddvsearchfeatureteachingbubbleviews', g: 'Integer' },
			TableScopedDVSearchQuickFindTeachingBubbleViews: { a: 'tablescopeddvsearchquickfindteachingbubbleviews', g: 'Integer' },
			TimeFormatCode: { a: 'timeformatcode', g: 'Integer' },
			TimeFormatString: { a: 'timeformatstring' },
			TimeSeparator: { a: 'timeseparator' },
			TimeZoneBias: { a: 'timezonebias', g: 'Integer' },
			TimeZoneCode: { a: 'timezonecode', g: 'Integer' },
			TimeZoneDaylightBias: { a: 'timezonedaylightbias', g: 'Integer' },
			TimeZoneDaylightDay: { a: 'timezonedaylightday', g: 'Integer' },
			TimeZoneDaylightDayOfWeek: { a: 'timezonedaylightdayofweek', g: 'Integer' },
			TimeZoneDaylightHour: { a: 'timezonedaylighthour', g: 'Integer' },
			TimeZoneDaylightMinute: { a: 'timezonedaylightminute', g: 'Integer' },
			TimeZoneDaylightMonth: { a: 'timezonedaylightmonth', g: 'Integer' },
			TimeZoneDaylightSecond: { a: 'timezonedaylightsecond', g: 'Integer' },
			TimeZoneDaylightYear: { a: 'timezonedaylightyear', g: 'Integer' },
			TimeZoneStandardBias: { a: 'timezonestandardbias', g: 'Integer' },
			TimeZoneStandardDay: { a: 'timezonestandardday', g: 'Integer' },
			TimeZoneStandardDayOfWeek: { a: 'timezonestandarddayofweek', g: 'Integer' },
			TimeZoneStandardHour: { a: 'timezonestandardhour', g: 'Integer' },
			TimeZoneStandardMinute: { a: 'timezonestandardminute', g: 'Integer' },
			TimeZoneStandardMonth: { a: 'timezonestandardmonth', g: 'Integer' },
			TimeZoneStandardSecond: { a: 'timezonestandardsecond', g: 'Integer' },
			TimeZoneStandardYear: { a: 'timezonestandardyear', g: 'Integer' },
			TrackingTokenId: { a: 'trackingtokenid', g: 'Integer' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TryToggleSets: { a: 'trytogglesets' },
			TryToggleStatus: { a: 'trytogglestatus', g: 'Boolean' },
			UILanguageId: { a: 'uilanguageid', g: 'Integer' },
			UseCrmFormForAppointment: { a: 'usecrmformforappointment', g: 'Boolean' },
			UseCrmFormForContact: { a: 'usecrmformforcontact', g: 'Boolean' },
			UseCrmFormForEmail: { a: 'usecrmformforemail', g: 'Boolean' },
			UseCrmFormForTask: { a: 'usecrmformfortask', g: 'Boolean' },
			UseImageStrips: { a: 'useimagestrips', g: 'Boolean' },
			UserProfile: { a: 'userprofile' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' },
			VisualizationPaneLayout: { a: 'visualizationpanelayout', g: 'Integer' },
			WorkdayStartTime: { a: 'workdaystarttime' },
			WorkdayStopTime: { a: 'workdaystoptime' }
		};
		if (e === undefined) e = {};
		const u = {};
		const usersettings = {};
		usersettings.ODataEntity = e;
		usersettings.FormattedValue = {};
		for (const field in _usersettings) {
			const fieldConfig = _usersettings[field];
			webApiField(usersettings, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		usersettings.Entity = u;
		usersettings.EntityName = 'usersettings';
		usersettings.EntityCollectionName = 'usersettingses';
		usersettings['@odata.etag'] = e?.['@odata.etag'];
		usersettings.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		usersettings.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return usersettings;
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.UserSettings = {
		D365AutoInstallAttemptStatus: { Already_installed: 2, Auto_installed: 1, No_Graph_API: 6, No_Solution: 5, Not_attempted: 0, Resource_Disabled: 7, Teams_admin_blocked: 3, Unauthorized: 4 },
		DataValidationModeForExportToExcel: { Full: 0, None: 1 },
		DefaultSearchExperience: { Categorized_search: 1, Custom_search: 3, Relevance_search: 0, Use_last_search: 2 },
		EntityFormMode: { Edit: 2, Organization_default: 0, Read_optimized: 1 },
		IncomingEmailFilteringMethod: { All_email_messages: 0, Email_messages_from_Dynamics_365_Leads_Contacts_and_Accounts: 2, Email_messages_from_Dynamics_365_records_that_are_email_enabled: 3, Email_messages_in_response_to_Dynamics_365_email: 1, No_email_messages: 4 },
		ReleaseChannel: { Inner_channel_override: 3, Monthly_channel_override: 2, None: 0, Semi_annual_channel_override: 1 },
		ReportScriptErrors: { Ask_me_for_permission_to_send_an_error_report_to_Microsoft: 1, Automatically_send_an_error_report_to_Microsoft_without_asking_me_for_permission: 2, Never_send_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365: 3 },
		VisualizationPaneLayout: { Side_by_side: 1, Top_bottom: 0 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));