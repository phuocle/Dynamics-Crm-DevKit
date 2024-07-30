'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormGoalRollupQuery_Information = function(executionContext, defaultWebResourceName) {
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
			Name: {},
			Name1: {},
			OwnerId: {},
			queryeditor_uc: {},
			QueryEntityType: {},
			QueryEntityType1: {},
			ruleconditioncontrol: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			rule: {
				Section: {
					criteria: {},
					Rule_Conditions: {},
					section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			goal_rollupquery_actualdecimal: {},
			goal_rollupquery_actualmoney: {},
			goal_rollupquery_customdecimal: {},
			goal_rollupquery_customint: {},
			goal_rollupquery_custommoney: {},
			goal_rollupquery_inprogressdecimal: {},
			goal_rollupquery_inprogressint: {},
			goal_rollupquery_inprogressmoney: {},
			goalrollupquery_actualint: {}
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
	OptionSet.GoalRollupQuery = {
		QueryEntityType : {
		},
		StateCode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		StatusCode : {
			Da_dong: 1,
			Mo: 0
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