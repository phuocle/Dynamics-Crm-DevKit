'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_marketingemailactivity_Information = function(executionContext, defaultWebResourceName) {
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
			information_automatedscheduling: {},
			information_scheduling: {},
			msdyncrm_abtestdistributionversiona: {},
			msdyncrm_abtestdistributionversionb: {},
			msdyncrm_abtestdurationunit: {},
			msdyncrm_abtestdurationvalue: {},
			msdyncrm_abtestid: {},
			msdyncrm_abtestinconclusiveresult: {},
			msdyncrm_abtestingenabled: {},
			msdyncrm_abtestwinningmetric: {},
			msdyncrm_automateschedule: {},
			msdyncrm_dependencies: {},
			msdyncrm_description: {},
			msdyncrm_emailid: {},
			msdyncrm_emailid1: {},
			msdyncrm_emailid2: {},
			msdyncrm_expiration: {},
			msdyncrm_expirationdate: {},
			msdyncrm_insightsdata: {},
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
			main_tab: {
				Section: {
					abtesting_section: {},
					dependencies_section: {},
					description_section: {},
					emaildetails_section: {},
					expiration_section: {},
					main_tab_section: {},
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
	OptionSet.msdyncrm_marketingemailactivity = {
		msdyncrm_abtestdurationunit : {
			Days: 192350001,
			Hours: 192350000,
			Weeks: 192350002
		},
		msdyncrm_abtestinconclusiveresult : {
			Version_A: 192350000,
			Version_A_and_Version_B_5050: 192350002,
			Version_B: 192350001
		},
		msdyncrm_abtestwinningmetric : {
			Click_through_rate: 192350001,
			Open_rate: 192350000
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
			Active: 0
		},
		statuscode : {
			Active: 1
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