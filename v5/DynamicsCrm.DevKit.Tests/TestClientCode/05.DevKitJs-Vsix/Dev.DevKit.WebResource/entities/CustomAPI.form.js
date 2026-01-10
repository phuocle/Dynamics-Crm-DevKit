'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormCustomAPI_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["AllowedCustomProcessingStepType", "BindingType", "BoundEntityLogicalName", "Description", "DisplayName", "ExecutePrivilegeName", "IsFunction", "IsPrivate", "Name", "OwnerId", "PluginTypeId", "UniqueName", "WorkflowSdkStepEnabled"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: []
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.CustomAPI = {
		AllowedCustomProcessingStepType: { Async_Only: 1, None: 0, Sync_and_Async: 2 },
		BindingType: { Entity: 1, Entity_Collection: 2, Global: 0 },
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));