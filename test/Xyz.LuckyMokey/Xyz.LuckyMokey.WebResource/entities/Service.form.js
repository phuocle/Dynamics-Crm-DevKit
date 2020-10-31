'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormService_Information = function(executionContext, defaultWebResourceName) {
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
			AnchorOffset: {},
			Description: {},
			Duration: {},
			Granularity: {},
			IFRAME_RuleTree: {},
			IFRAME_Scheduling: {},
			InitialStatusCode: {},
			IsSchedulable: {},
			msdyn_RequirementGroupId: {},
			msdyn_SchedulingEngine: {},
			Name: {},
			ResourceSpecId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Resource_Requirements: {
				Section: {
					ResourceRequirement: {}
				}
			},
			required_resources: {
				Section: {
					resources: {}
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
	OptionSet.Service = {
		InitialStatusCode : {
			Requested: 1,
			Tentative: 2,
			Pending: 3,
			Reserved: 4,
			In_Progress: 6,
			Arrived: 7,
			Completed: 8,
			Canceled: 9,
			No_Show: 10
		},
		msdyn_SchedulingEngine : {
			Legacy_Scheduling: 0,
			Universal_Resource_Scheduling: 1
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