'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formnew_bpf_301232cf016d4faebcee80f57b143c69_Information = function(executionContext, defaultWebResourceName) {
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
			address1_city: {},
			devkit_accountid: {},
			devkit_contactid: {},
			devkit_customerid: {},
			ownerid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			StageStep4: {
				Section: {
					StageStep4_section1: {}
				}
			},
			StageStep10: {
				Section: {
					StageStep10_section1: {}
				}
			},
			StageStep14: {
				Section: {
					StageStep14_section1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
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
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.new_bpf_301232cf016d4faebcee80f57b143c69 = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Aborted: 3,
			Active: 1,
			Finished: 2
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