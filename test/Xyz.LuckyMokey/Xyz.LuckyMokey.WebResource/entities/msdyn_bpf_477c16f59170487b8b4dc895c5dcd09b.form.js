'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Information = function(executionContext, defaultWebResourceName) {
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
			customerid: {},
			msdyn_alerttime: {},
			msdyn_description: {},
			msdyn_device: {},
			msdyn_incidenttype: {},
			msdyn_priority: {},
			msdyn_serviceaccount: {},
			msdyn_substatus: {},
			msdyn_systemstatus: {},
			msdyn_workordertype: {},
			title: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			StageStep2: {
				Section: {
					StageStep2_section1: {}
				}
			},
			StageStep10: {
				Section: {
					StageStep10_section1: {}
				}
			},
			StageStep17: {
				Section: {
					StageStep17_section1: {}
				}
			},
			StageStep24: {
				Section: {
					StageStep24_section1: {}
				}
			},
			StageStep29: {
				Section: {
					StageStep29_section1: {}
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
	OptionSet.msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b = {
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