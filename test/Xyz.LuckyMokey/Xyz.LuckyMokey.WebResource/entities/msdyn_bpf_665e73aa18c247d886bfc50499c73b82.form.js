'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_bpf_665e73aa18c247d886bfc50499c73b82_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_actualend: {},
			msdyn_actualstart: {},
			msdyn_description: {},
			msdyn_salesorderid: {},
			msdyn_scheduledend: {},
			msdyn_scheduledstart: {},
			msdyn_subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			StageStep2: {
				Section: {
					StageStep2_section1: {}
				}
			},
			StageStep16: {
				Section: {
					StageStep16_section1: {}
				}
			},
			StageStep19: {
				Section: {
					StageStep19_section1: {}
				}
			},
			StageStep29: {
				Section: {
					StageStep29_section1: {}
				}
			},
			StageStep32: {
				Section: {
					StageStep32_section1: {}
				}
			},
			StageStep35: {
				Section: {
					StageStep35_section1: {}
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
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_bpf_665e73aa18c247d886bfc50499c73b82 = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Finished: 2,
			Aborted: 3
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