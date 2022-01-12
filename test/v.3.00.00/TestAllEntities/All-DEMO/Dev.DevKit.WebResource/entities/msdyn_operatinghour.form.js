'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_operatinghour_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_calendarid: {},
			msdyn_Description: {},
			msdyn_Description_1: {},
			msdyn_EnableAllDays: {},
			msdyn_Endtimestring: {},
			msdyn_name: {},
			msdyn_name_1: {},
			msdyn_oc_daysofweek: {},
			msdyn_starttimestring: {},
			msdyn_Timezone: {},
			msdyn_Totalworkhours: {},
			OwnerId: {},
			OwnerId_1: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			WorkingHoursTab: {
				Section: {
					WorkingHours_CalendarSection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormOperating_hours = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			msdyn_Description: {},
			msdyn_Description_1: {},
			msdyn_EnableAllDays: {},
			msdyn_Endtimestring: {},
			msdyn_name: {},
			msdyn_name_1: {},
			msdyn_oc_daysofweek: {},
			msdyn_starttimestring: {},
			msdyn_Timezone: {},
			msdyn_Totalworkhours: {},
			OwnerId: {},
			OwnerId_1: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_1_section_2: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_operatinghour = {
		msdyn_oc_daysofweek : {
			Fri: 192350005,
			Mon: 192350001,
			Sat: 192350006,
			Sun: 192350000,
			Thu: 192350004,
			Tue: 192350002,
			Wed: 192350003
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