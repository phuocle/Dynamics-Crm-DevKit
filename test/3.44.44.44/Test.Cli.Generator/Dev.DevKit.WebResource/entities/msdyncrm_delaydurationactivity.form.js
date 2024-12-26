'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormActivity_Form = function(executionContext, defaultWebResourceName) {
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
			info_duration: {},
			information_automatedscheduling: {},
			information_scheduling: {},
			msdyncrm_automateschedule: {},
			msdyncrm_description: {},
			msdyncrm_durationamount: {},
			msdyncrm_durationunit: {},
			msdyncrm_expiration: {},
			msdyncrm_expirationdate: {},
			msdyncrm_insightsdata: {},
			msdyncrm_manualschedulerdisabled: {},
			msdyncrm_permitteddays: {},
			msdyncrm_permittedtimeend: {},
			msdyncrm_permittedtimestart: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			data_tab: {
				Section: {
					data_tab_section: {}
				}
			},
			schedule_tab: {
				Section: {
					_2BD38113_0183_4222_A8A9_791BAB4450C7: {},
					description_section: {},
					expiration_section: {},
					permitted_times_section: {}
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
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_delaydurationactivity = {
		msdyncrm_durationunit : {
			Day: 192350002,
			Hour: 192350001,
			Month: 192350004,
			Week: 192350003
		},
		msdyncrm_permitteddays : {
			Friday: 192350004,
			Monday: 192350000,
			Saturday: 192350005,
			Sunday: 192350006,
			Thursday: 192350003,
			Tuesday: 192350001,
			Wednesday: 192350002
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