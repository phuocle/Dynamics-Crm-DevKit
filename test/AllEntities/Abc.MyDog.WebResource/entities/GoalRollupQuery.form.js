'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormGoalRollupQuery_Information = function(executionContext, defaultWebResourceName) {
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
			Name_1: {},
			OwnerId: {},
			queryeditor_uc: {},
			QueryEntityType: {},
			QueryEntityType_1: {},
			ruleconditioncontrol: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			rule: {
				Section: {
					section_1: {},
					criteria: {},
					Rule_Conditions: {}
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
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.GoalRollupQuery = {
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Open: 0,
			Closed: 1
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