'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_analysiscomponent_Information = function(executionContext, defaultWebResourceName) {
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
		var navigation = {
			msdyn_analysiscomponent_msdyn_analysisresult: {}
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
	OptionSet.msdyn_analysiscomponent = {
		msdyn_AnalysisComponentType : {
			Component_Health: 192350001,
			Object_Health: 192350002,
			Organization_Health: 192350000
		},
		msdyn_ComponentType : {
			Configuration: 192350005,
			Entity: 192350001,
			Form: 192350003,
			Plugin: 192350004,
			Solution: 192350000,
			View: 192350002
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Canceled: 2,
			Complete: 192350001,
			Completed_With_Exceptions: 192350003,
			Exception: 192350002,
			Pending: 1,
			Running: 192350000
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