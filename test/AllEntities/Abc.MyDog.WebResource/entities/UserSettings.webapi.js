'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.UserSettingsApi = function (e) {
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
		var usersettings = {
			AddressBookSyncInterval: { a: 'addressbooksyncinterval' },
			AdvancedFindStartupMode: { a: 'advancedfindstartupmode' },
			AMDesignator: { a: 'amdesignator' },
			AutoCaptureUserStatus: { a: 'autocaptureuserstatus' },
			AutoCreateContactOnPromote: { a: 'autocreatecontactonpromote' },
			BusinessUnitId: { a: 'businessunitid' },
			CalendarType: { a: 'calendartype' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CurrencyFormatCode: { a: 'currencyformatcode' },
			CurrencySymbol: { a: 'currencysymbol' },
			DataValidationModeForExportToExcel: { a: 'datavalidationmodeforexporttoexcel' },
			DateFormatCode: { a: 'dateformatcode' },
			DateFormatString: { a: 'dateformatstring' },
			DateSeparator: { a: 'dateseparator' },
			DecimalSymbol: { a: 'decimalsymbol' },
			DefaultCalendarView: { a: 'defaultcalendarview' },
			DefaultCountryCode: { a: 'defaultcountrycode' },
			DefaultDashboardId: { a: 'defaultdashboardid' },
			DefaultSearchExperience: { a: 'defaultsearchexperience' },
			EntityFormMode: { a: 'entityformmode' },
			FullNameConventionCode: { a: 'fullnameconventioncode' },
			GetStartedPaneContentEnabled: { a: 'getstartedpanecontentenabled' },
			HelpLanguageId: { a: 'helplanguageid' },
			HomepageArea: { a: 'homepagearea' },
			HomepageLayout: { a: 'homepagelayout' },
			HomepageSubarea: { a: 'homepagesubarea' },
			IgnoreUnsolicitedEmail: { a: 'ignoreunsolicitedemail' },
			IncomingEmailFilteringMethod: { a: 'incomingemailfilteringmethod' },
			IsAppsForCrmAlertDismissed: { a: 'isappsforcrmalertdismissed' },
			IsAutoDataCaptureEnabled: { a: 'isautodatacaptureenabled' },
			IsDefaultCountryCodeCheckEnabled: { a: 'isdefaultcountrycodecheckenabled' },
			IsDuplicateDetectionEnabledWhenGoingOnline: { a: 'isduplicatedetectionenabledwhengoingonline' },
			IsEmailConversationViewEnabled: { a: 'isemailconversationviewenabled' },
			IsGuidedHelpEnabled: { a: 'isguidedhelpenabled' },
			IsResourceBookingExchangeSyncEnabled: { a: 'isresourcebookingexchangesyncenabled' },
			IsSendAsAllowed: { a: 'issendasallowed' },
			LastAlertsViewedTime_UtcDateAndTime: { a: 'lastalertsviewedtime' },
			LocaleId: { a: 'localeid' },
			LongDateFormatCode: { a: 'longdateformatcode' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			NegativeCurrencyFormatCode: { a: 'negativecurrencyformatcode' },
			NegativeFormatCode: { a: 'negativeformatcode' },
			NextTrackingNumber: { a: 'nexttrackingnumber' },
			NumberGroupFormat: { a: 'numbergroupformat' },
			NumberSeparator: { a: 'numberseparator' },
			OfflineSyncInterval: { a: 'offlinesyncinterval' },
			OutlookSyncInterval: { a: 'outlooksyncinterval' },
			PagingLimit: { a: 'paginglimit' },
			PersonalizationSettings: { a: 'personalizationsettings' },
			PMDesignator: { a: 'pmdesignator' },
			ReportScriptErrors: { a: 'reportscripterrors' },
			ResourceBookingExchangeSyncVersion: { a: 'resourcebookingexchangesyncversion' },
			SelectedGlobalFilterId: { a: 'selectedglobalfilterid' },
			ShowWeekNumber: { a: 'showweeknumber' },
			SplitViewState: { a: 'splitviewstate' },
			SyncContactCompany: { a: 'synccontactcompany' },
			SystemUserId: { a: 'systemuserid' },
			TimeFormatCode: { a: 'timeformatcode' },
			TimeFormatString: { a: 'timeformatstring' },
			TimeSeparator: { a: 'timeseparator' },
			TimeZoneBias: { a: 'timezonebias' },
			TimeZoneCode: { a: 'timezonecode' },
			TimeZoneDaylightBias: { a: 'timezonedaylightbias' },
			TimeZoneDaylightDay: { a: 'timezonedaylightday' },
			TimeZoneDaylightDayOfWeek: { a: 'timezonedaylightdayofweek' },
			TimeZoneDaylightHour: { a: 'timezonedaylighthour' },
			TimeZoneDaylightMinute: { a: 'timezonedaylightminute' },
			TimeZoneDaylightMonth: { a: 'timezonedaylightmonth' },
			TimeZoneDaylightSecond: { a: 'timezonedaylightsecond' },
			TimeZoneDaylightYear: { a: 'timezonedaylightyear' },
			TimeZoneStandardBias: { a: 'timezonestandardbias' },
			TimeZoneStandardDay: { a: 'timezonestandardday' },
			TimeZoneStandardDayOfWeek: { a: 'timezonestandarddayofweek' },
			TimeZoneStandardHour: { a: 'timezonestandardhour' },
			TimeZoneStandardMinute: { a: 'timezonestandardminute' },
			TimeZoneStandardMonth: { a: 'timezonestandardmonth' },
			TimeZoneStandardSecond: { a: 'timezonestandardsecond' },
			TimeZoneStandardYear: { a: 'timezonestandardyear' },
			TrackingTokenId: { a: 'trackingtokenid' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			UILanguageId: { a: 'uilanguageid' },
			UseCrmFormForAppointment: { a: 'usecrmformforappointment' },
			UseCrmFormForContact: { a: 'usecrmformforcontact' },
			UseCrmFormForEmail: { a: 'usecrmformforemail' },
			UseCrmFormForTask: { a: 'usecrmformfortask' },
			UseImageStrips: { a: 'useimagestrips' },
			UserProfile: { a: 'userprofile' },
			VersionNumber: { a: 'versionnumber', r: true },
			VisualizationPaneLayout: { a: 'visualizationpanelayout' },
			WorkdayStartTime: { a: 'workdaystarttime' },
			WorkdayStopTime: { a: 'workdaystoptime' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in usersettings) {
			var a = usersettings[field].a;
			var b = usersettings[field].b;
			var c = usersettings[field].c;
			var d = usersettings[field].d;
			var g = usersettings[field].g;
			var r = usersettings[field].r;
			usersettings[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		usersettings.Entity = u;
		usersettings.EntityName = 'usersettings';
		usersettings.EntityCollectionName = 'usersettingses';
		usersettings['@odata.etag'] = e['@odata.etag'];
		usersettings.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		usersettings.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return usersettings;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.UserSettings = {
		DataValidationModeForExportToExcel : {
			Full: 0,
			None: 1
		},
		DefaultSearchExperience : {
			Categorized_search: 1,
			Custom_search: 3,
			Relevance_search: 0,
			Use_last_search: 2
		},
		EntityFormMode : {
			Edit: 2,
			Organization_default: 0,
			Read_optimized: 1
		},
		IncomingEmailFilteringMethod : {
			All_email_messages: 0,
			Email_messages_from_Dynamics_365_Leads_Contacts_and_Accounts: 2,
			Email_messages_from_Dynamics_365_records_that_are_email_enabled: 3,
			Email_messages_in_response_to_Dynamics_365_email: 1,
			No_email_messages: 4
		},
		ReportScriptErrors : {
			Ask_me_for_permission_to_send_an_error_report_to_Microsoft: 1,
			Automatically_send_an_error_report_to_Microsoft_without_asking_me_for_permission: 2,
			Never_send_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365: 3
		},
		VisualizationPaneLayout : {
			Side_by_side: 1,
			Top_bottom: 0
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