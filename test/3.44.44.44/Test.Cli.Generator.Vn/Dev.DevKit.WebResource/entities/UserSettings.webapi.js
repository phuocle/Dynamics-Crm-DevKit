'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.UserSettingsApi = function (e) {
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
		var _usersettings = {
			AddressBookSyncInterval: { a: 'addressbooksyncinterval' },
			AdvancedFindStartupMode: { a: 'advancedfindstartupmode' },
			AllowEmailCredentials: { a: 'allowemailcredentials', r: true },
			AMDesignator: { a: 'amdesignator' },
			AutoCaptureUserStatus: { a: 'autocaptureuserstatus' },
			AutoCreateContactOnPromote: { a: 'autocreatecontactonpromote' },
			BusinessUnitId: { a: 'businessunitid' },
			CalendarType: { a: 'calendartype' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CurrencyDecimalPrecision: { a: 'currencydecimalprecision' },
			CurrencyFormatCode: { a: 'currencyformatcode' },
			CurrencySymbol: { a: 'currencysymbol' },
			D365AutoInstallAttemptStatus: { a: 'd365autoinstallattemptstatus' },
			DataValidationModeForExportToExcel: { a: 'datavalidationmodeforexporttoexcel' },
			DateFormatCode: { a: 'dateformatcode' },
			DateFormatString: { a: 'dateformatstring' },
			DateSeparator: { a: 'dateseparator' },
			DecimalSymbol: { a: 'decimalsymbol' },
			DefaultCalendarView: { a: 'defaultcalendarview' },
			DefaultCountryCode: { a: 'defaultcountrycode' },
			DefaultDashboardId: { a: 'defaultdashboardid' },
			DefaultSearchExperience: { a: 'defaultsearchexperience' },
			EmailPassword: { a: 'emailpassword', r: true },
			EmailUsername: { a: 'emailusername', r: true },
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
			LastModifiedTimeForViewPersonalizationSettings_UtcDateAndTime: { a: 'lastmodifiedtimeforviewpersonalizationsettings' },
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
			PreferredSolution: { b: 'PreferredSolution', a: '_preferredsolution_value', c: 'solutions', d: 'solution' },
			PricingDecimalPrecision: { a: 'pricingdecimalprecision' },
			ReleaseChannel: { a: 'releasechannel' },
			ReportScriptErrors: { a: 'reportscripterrors' },
			ResourceBookingExchangeSyncVersion: { a: 'resourcebookingexchangesyncversion' },
			SelectedGlobalFilterId: { a: 'selectedglobalfilterid' },
			ShowWeekNumber: { a: 'showweeknumber' },
			SplitViewState: { a: 'splitviewstate' },
			SyncContactCompany: { a: 'synccontactcompany' },
			SystemUserId: { a: 'systemuserid' },
			TableScopedDVSearchFeatureTeachingBubbleViews: { a: 'tablescopeddvsearchfeatureteachingbubbleviews' },
			TableScopedDVSearchQuickFindTeachingBubbleViews: { a: 'tablescopeddvsearchquickfindteachingbubbleviews' },
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
			TryToggleSets: { a: 'trytogglesets' },
			TryToggleStatus: { a: 'trytogglestatus' },
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
		var usersettings = {};
		usersettings.ODataEntity = e;
		usersettings.FormattedValue = {};
		for (var field in _usersettings) {
			var a = _usersettings[field].a;
			var b = _usersettings[field].b;
			var c = _usersettings[field].c;
			var d = _usersettings[field].d;
			var g = _usersettings[field].g;
			var r = _usersettings[field].r;
			webApiField(usersettings, field, e, a, b, c, d, r, u, g);
		}
		usersettings.Entity = u;
		usersettings.EntityName = 'usersettings';
		usersettings.EntityCollectionName = 'usersettingses';
		usersettings['@odata.etag'] = e['@odata.etag'];
		usersettings.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		usersettings.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return usersettings;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.UserSettings = {
		D365AutoInstallAttemptStatus : {
			Chua_thuc_hien: 0,
			Da_cai_dat: 2,
			Da_tat_nguon_luc: 7,
			Da_tu_dong_cai_dat: 1,
			Khong_co_giai_phap: 5,
			Khong_co_Graph_API: 6,
			Khong_duoc_uy_quyen: 4,
			Quan_tri_vien_Teams_da_chan: 3
		},
		DataValidationModeForExportToExcel : {
			Day_du: 0,
			Khong: 1
		},
		DefaultSearchExperience : {
			Su_dung_tim_kiem_gan_nhat: 2,
			Tim_kiem_duoc_phan_loai: 1,
			Tim_kiem_lien_quan: 0,
			Tim_kiem_tuy_chinh: 3
		},
		EntityFormMode : {
			Mac_dinh_to_chuc: 0,
			Sua: 2,
			Toi_uu_hoa_dang_chi_doc: 1
		},
		IncomingEmailFilteringMethod : {
			Email_khi_tra_loi_email_Dynamics_365: 1,
			Email_tu_ban_ghi_Dynamics_365_co_bat_email: 3,
			Email_tu_Khach_hang_tiem_nang_Nguoi_lien_he_va_Khach_hang_Dynamics_365: 2,
			Khong_co_email: 4,
			Tat_ca_thu_email: 0
		},
		ReleaseChannel : {
			Khong_co: 0,
			Thay_the_kenh_ben_trong: 3,
			Thay_the_kenh_hang_thang: 2,
			Thay_the_kenh_nua_nam_mot_lan: 1
		},
		ReportScriptErrors : {
			Khong_bao_gio_gui_bao_cao_loi_toi_Microsoft_ve_Microsoft_Dynamics_365: 3,
			Tu_dong_gui_bao_cao_loi_den_Microsoft_ma_khong_xin_phep_toi: 2,
			Xin_phep_toi_khi_gui_bao_cao_loi_den_Microsoft: 1
		},
		VisualizationPaneLayout : {
			Dau_cuoi: 0,
			Lien_ke_nhau: 1
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