'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormAIPlugin_main_form = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["AIPluginTitle", "HumanDescription", "HumanName", "ModelDescription", "ModelName", "Name", "OperationsGrid", "PluginType", "SchemaVersion", "UpsertSwagger"],
			bpf: [],
			dialog: [],
			grid: ["OperationsGrid"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["New_Tab___New_Section"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.AIPlugin = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		PluginSubType: { Certified_Connector: 1, Conversational: 5, Custom_Api: 6, Custom_Connector: 8, Dataverse: 0, Flow: 3, Prompt: 4, QA: 2, Rest_Api: 7 },
		PluginType: { Connector: 2, CustomConnector: 1, Dataverse: 0, Flow: 3 },
		SchemaVersion: { _10: 0 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));