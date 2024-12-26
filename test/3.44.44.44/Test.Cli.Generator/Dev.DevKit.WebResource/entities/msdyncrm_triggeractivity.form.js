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
			msdyncrm_description: {},
			msdyncrm_insightsdata: {},
			msdyncrm_rulelogic: {},
			msdyncrm_timeoutamount: {},
			msdyncrm_timeoutunit: {},
			msdyncrm_triggerconditions: {},
			msdyncrm_TriggerScopeEntityTarget: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_D5C697E9_1572_4260_AC56_10BC9E8E387A: {
				Section: {
					conditions_section: {},
					description_section: {}
				}
			},
			data_tab: {
				Section: {
					data_tab_section: {}
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
	OptionSet.msdyncrm_triggeractivity = {
		msdyncrm_rulelogic : {
			And: 192350001,
			Or: 192350002
		},
		msdyncrm_timeoutunit : {
			Day: 192350002,
			Hour: 192350001
		},
		msdyncrm_TriggerScopeEntityTarget : {
			Account: 192350000,
			Contact: 192350001
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