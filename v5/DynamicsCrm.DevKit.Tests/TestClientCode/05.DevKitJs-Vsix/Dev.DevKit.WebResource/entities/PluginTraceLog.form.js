'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormPluginTraceLog_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Configuration", "CorrelationId", "Depth", "ExceptionDetails", "IsSystemCreated", "MessageBlock", "MessageName", "Mode", "OperationType", "PerformanceExecutionDuration", "PerformanceExecutionStartTime", "PersistenceKey", "PluginStepId", "PrimaryEntity", "RequestId", "SecureConfiguration", "TypeName"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["MessageName", "OperationType", "PrimaryEntity"],
			navigation: [],
			quick: [],
			tab: ["Configuration___Configuration_Context", "Configuration___Configuration_General", "Execution___Execution_Performance"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.PluginTraceLog = {
		Mode: { Asynchronous: 1, Synchronous: 0 },
		OperationType: { Plug_in: 1, Unknown: 0, Workflow_Activity: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));