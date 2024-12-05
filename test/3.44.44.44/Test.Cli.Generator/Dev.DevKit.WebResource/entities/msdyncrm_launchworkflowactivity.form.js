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
			msdyncrm_description1: {},
			msdyncrm_EntityTarget: {},
			msdyncrm_insightsdata: {},
			msdyncrm_name: {},
			msdyncrm_workflowid: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			data_tab: {
				Section: {
					data_tab_section: {}
				}
			},
			main_tab: {
				Section: {
					_BE1EF7ED_4DD6_4F60_BFAE_5A265D7CA548_SECTION_2: {},
					_C205D9FB_2B88_444B_BA74_F5E654BB17AF: {},
					description_section: {},
					workflowdetails_section: {}
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
	OptionSet.msdyncrm_launchworkflowactivity = {
		msdyncrm_EntityTarget : {
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