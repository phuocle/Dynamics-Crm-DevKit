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
			info_datetime: {},
			information_automatedscheduling: {},
			information_scheduling: {},
			msdyncrm_automateschedule: {},
			msdyncrm_datetime: {},
			msdyncrm_description: {},
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
					_F2B03D9E_2315_4E00_9912_5FF604BE6778_SECTION_2: {},
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
	OptionSet.msdyncrm_delaydatetimeactivity = {
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