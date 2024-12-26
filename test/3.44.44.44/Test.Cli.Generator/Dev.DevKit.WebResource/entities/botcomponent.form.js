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
			Category: {},
			ChildComponents: {},
			ComponentType: {},
			Content: {},
			CreatedBy: {},
			CreatedOn: {},
			Data: {},
			Description: {},
			HelpLink: {},
			IconUrl: {},
			Language: {},
			ModifiedBy: {},
			ModifiedOn: {},
			name: {},
			OwnerId: {},
			OwningBusinessUnit: {},
			ParentBotComponentCollectionId: {},
			ParentBotComponentId: {},
			ParentBotId: {},
			RelatedBotComponents: {},
			RelatedBots: {},
			RelatedProcesses: {},
			ReusePolicy: {},
			SchemaName: {},
			statecode: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			ChildComponents: {},
			RelatedBotComponents: {},
			RelatedBots: {},
			RelatedProcesses: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			botcomponent_parent_botcomponent: {},
			Comment_Artifact_BotComponent: {},
			msdyn_botcomponent_msdyn_servicecopilotplugin_botcomponentid: {},
			msdyn_botcomponent_msdyn_servicecopilotpluginaction_botcomponentid: {}
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
	OptionSet.botcomponent = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		ComponentType : {
			Bot_entity: 3,
			Bot_entity_V2: 11,
			Bot_File_Attachment: 14,
			Bot_translations_V2: 10,
			Bot_variable: 2,
			Bot_variable_V2: 12,
			Copilot_Settings: 18,
			Custom_GPT: 15,
			Dialog: 4,
			Dialog_schema: 8,
			External_Trigger: 17,
			Knowledge_Source: 16,
			Language_generation: 7,
			Language_understanding: 6,
			Skill: 1,
			Skill_V2: 13,
			Topic: 0,
			Topic_V2: 9,
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
			English_Australia: 3081,
			English_United_Kingdom: 2057,
			Finnish: 1035,
			French: 1036,
			French_Canada: 3084,
			German: 1031,
			Greek: 1032,
			Hebrew: 1037,
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
			Spanish_United_States: 21514,
			Swedish: 1053,
			Thai: 1054,
			Turkish: 1055
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