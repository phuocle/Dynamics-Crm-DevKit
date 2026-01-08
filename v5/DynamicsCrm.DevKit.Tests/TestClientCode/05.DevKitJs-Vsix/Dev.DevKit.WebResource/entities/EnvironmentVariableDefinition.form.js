'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormEnvironmentVariableDefinition_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ConnectionReferenceId", "connectortype", "datasourcetype", "DefaultValue", "Description", "DisplayName", "OwnerId", "ParentDefinitionId", "SchemaName", "Type", "Values"],
			bpf: [],
			dialog: [],
			grid: ["Values"],
			header: [],
			navigation: [],
			quick: [],
			tab: []
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.EnvironmentVariableDefinition = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		SecretStore: { Azure_Key_Vault: 0, Microsoft_Dataverse: 1 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		Type: { Boolean: 100000002, Data_Source: 100000004, JSON: 100000003, Number: 100000001, Secret: 100000005, String: 100000000 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));