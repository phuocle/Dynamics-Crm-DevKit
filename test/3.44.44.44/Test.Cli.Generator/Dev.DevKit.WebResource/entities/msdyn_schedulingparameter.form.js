'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_schedulingparameter_Information = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			msdyn_AutoUpdateBookingTravel: {},
			msdyn_ConnectToMaps: {},
			msdyn_CustomGeoLatitudeField: {},
			msdyn_CustomGeoLocationEntity: {},
			msdyn_CustomGeoLongitudeField: {},
			msdyn_CustomGeoResourceField: {},
			msdyn_CustomGeoTimestampField: {},
			msdyn_DefaultRadiusUnit: {},
			msdyn_DefaultRadiusValue: {},
			msdyn_EnableAppointments: {},
			msdyn_EnableCustomGeoLocation: {},
			msdyn_EnableOutlookSchedules: {},
			msdyn_EnableSuggestSchedule: {},
			msdyn_GeoLocationExpiresAfterXMinutes: {},
			msdyn_GeoLocationRefreshIntervalSeconds: {},
			msdyn_internalflag: {},
			msdyn_MapApiKey: {},
			msdyn_name: {},
			msdyn_SAAutoFilterServiceTerritory: {},
			msdyn_ScheduleBoardRefreshIntervalSeconds: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_5: {
				Section: {
					tab_5_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_schedulingparameter_Information2 = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			msdyn_name: {},
			notescontrol: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_schedulingparameter = {
		msdyn_AutoUpdateBookingTravel : {
			Disabled: 192350000,
			Enabled: 192350001
		},
		msdyn_DefaultRadiusUnit : {
			KM: 192350001,
			Miles: 192350000
		},
		msdyn_EnableAppointments : {
			No: 192350000,
			Yes: 192350001
		},
		msdyn_EnableOutlookSchedules : {
			No: 192350000,
			Yes: 192350001
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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