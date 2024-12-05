'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormAIPlugin_main_form = function(executionContext, defaultWebResourceName) {
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
			AIPluginTitle: {},
			HumanDescription: {},
			HumanName: {},
			ModelDescription: {},
			ModelName: {},
			Name: {},
			OperationsGrid: {},
			PluginType: {},
			SchemaVersion: {},
			UpsertSwagger: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			New_Tab: {
				Section: {
					New_Section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			OperationsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			AIPlugin_AIPluginConversationStarterMapping: {},
			aiplugingovernance_aiplugin: {},
			AIPluginInstance_AIPlugin_AIPlugin: {},
			AIPluginOperation_AIPlugin_AIPlugin: {},
			msdyn_aiplugin_msdyn_servicecopilotplugin_aipluginid: {},
			sideloadedaiplugin_AIPlugin_aiplugin: {}
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
	OptionSet.AIPlugin = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		PluginSubType : {
			Certified_Connector: 1,
			Conversational: 5,
			Custom_Api: 6,
			Custom_Connector: 8,
			Dataverse: 0,
			Flow: 3,
			Prompt: 4,
			QA: 2,
			Rest_Api: 7
		},
		PluginType : {
			Connector: 2,
			CustomConnector: 1,
			Dataverse: 0,
			Flow: 3
		},
		SchemaVersion : {
			_10: 0
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