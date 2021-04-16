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
		var grid = {
			ChildComponents: {},
			RelatedBots: {},
			RelatedBotComponents: {},
			RelatedProcesses: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.botcomponent = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		ComponentType : {
			Bot_entity: 3,
			Bot_variable: 2,
			Dialog: 4,
			Dialog_schema: 8,
			Language_generation: 7,
			Language_understanding: 6,
			Skill: 1,
			Topic: 0,
			Trigger: 5
		},
		Language : {
			Arabic: 1025,
			Chinese_Simplified: 2052,
			Chinese_Traditional: 1028,
			Danish: 1030,
			Dutch: 1043,
			English: 1033,
			French: 1036,
			German: 1031,
			Hindi: 1081,
			Indonesian: 1057,
			Italian: 1040,
			Japanese: 1041,
			Korean: 1042,
			Norwegian: 1044,
			Polish: 1045,
			Portuguese_Brazilian: 1046,
			Russian: 1049,
			Spanish: 1034,
			Swedish: 1053,
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