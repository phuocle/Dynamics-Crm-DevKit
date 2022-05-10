'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formbotcomponent_Information = function(executionContext, defaultWebResourceName) {
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
			AccentColor: {},
			ChildComponents: {},
			ComponentType: {},
			Content: {},
			Data: {},
			Description: {},
			HelpLink: {},
			IconUrl: {},
			Language: {},
			name: {},
			OwnerId: {},
			ParentBotComponentId: {},
			RelatedBotComponents: {},
			RelatedBots: {},
			RelatedProcesses: {},
			ReusePolicy: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			ChildComponents: {},
			RelatedBotComponents: {},
			RelatedBots: {},
			RelatedProcesses: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
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
			Object_Model_custom_entity: 11,
			Object_Model_Dialog: 9,
			Object_Model_global_variable: 12,
			Object_Model_skill: 13,
			Object_Model_Trigger: 10,
			Skill: 1,
			Topic: 0,
			Trigger: 5
		},
		Language : {
			Arabic: 1025,
			Chinese_Simplified: 2052,
			Chinese_Traditional: 1028,
			Czech: 1029,
			Danish: 1030,
			Dutch: 1043,
			English: 1033,
			Finnish: 1035,
			French: 1036,
			German: 1031,
			Greek: 1032,
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
			Thai: 1054,
			Turkish: 1055
		},
		OwnerIdType : {
		},
		ReusePolicy : {
			None: 0,
			Private: 1,
			Public: 2
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