'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormMcpTool_Main_Form = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Annotations", "BackendToolType", "ConnectorId", "CustomAPIId", "Description", "HTTPMethod", "InputSchema", "MCPServerId", "Name", "OperationId", "RelativePath", "SdkMessagePairId", "Title"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["New_Tab___New_Section"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.MCPTool = {
		BackendToolType: { ConnectorAction: 1, DataverseCustomAPI: 0, Graph: 2, RemoteAPI: 4, RemoteMCP: 3, SdkMessagePair: 5 },
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		HTTPMethod: { DELETE: 4, GET: 0, PATCH: 3, POST: 1, PUT: 2 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));