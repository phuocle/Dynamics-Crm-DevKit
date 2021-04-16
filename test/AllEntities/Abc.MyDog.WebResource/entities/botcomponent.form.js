'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.Formbotcomponent_Information = function(executionContext, defaultWebResourceName) {
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
			ChildComponents: {},
			ComponentType: {},
			Content: {},
			Data: {},
			Description: {},
			Language: {},
			name: {},
			OwnerId: {},
			ParentBotComponentId: {},
			RelatedBotComponents: {},
			RelatedBots: {},
			RelatedProcesses: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

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
	OptionSet.botcomponent = {
		ComponentState : {
			Published: 0,
			Unpublished: 1,
			Deleted: 2,
			Deleted_Unpublished: 3
		},
		ComponentType : {
			Topic: 0,
			Skill: 1,
			Bot_variable: 2,
			Bot_entity: 3,
			Dialog: 4,
			Language_understanding: 6,
			Language_generation: 7,
			Trigger: 5,
			Dialog_schema: 8
		},
		Language : {
			English: 1033,
			Spanish: 1034,
			Portuguese_Brazilian: 1046,
			French: 1036,
			Dutch: 1043,
			Norwegian: 1044,
			Danish: 1030,
			Swedish: 1053,
			Italian: 1040,
			German: 1031,
			Chinese_Simplified: 2052,
			Chinese_Traditional: 1028,
			Arabic: 1025,
			Japanese: 1041,
			Korean: 1042,
			Hindi: 1081,
			Indonesian: 1057,
			Russian: 1049,
			Polish: 1045,
			Turkish: 1055
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