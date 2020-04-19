'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.Formmsdyn_analysiscomponent_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_AnalysisComponentType: {},
			msdyn_AnalysisJobId: {},
			msdyn_ComponentId: {},
			msdyn_ComponentName: {},
			msdyn_ComponentType: {},
			msdyn_ErrorCount: {},
			msdyn_name: {},
			msdyn_RetryCount: {},
			msdyn_RuleFailCount: {},
			msdyn_RulePassCount: {},
			msdyn_RulePassRate: {},
			msdyn_SolutionHealthRuleSetId: {},
			msdyn_WarningCount: {},
			OwnerId: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			: {
				Section: {
				}
			},
			tab_2: {
				Section: {
					tab_2_section_1: {},
					tab_2_section_2: {}
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
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_analysiscomponent = {
		msdyn_AnalysisComponentType : {
			Component_Health: 192350001,
			Organization_Health: 192350000
		},
		msdyn_ComponentType : {
			Solution: 192350000,
			Entity: 192350001,
			View: 192350002,
			Form: 192350003,
			Plugin: 192350004,
			Configuration: 192350005
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Pending: 1,
			Running: 192350000,
			Complete: 192350001,
			Exception: 192350002,
			Completed_With_Exceptions: 192350003,
			Canceled: 2
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