'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormSLA_KPI_Instance = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["FailureTime", "Name", "Regarding", "SucceededOn", "WarningTime"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["OwnerId", "Status"],
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
	OptionSet.SLAKPIInstance = {
		msdyn_ActionExecutionStatus: { None: 0, Success: 2, Warning: 1 },
		RegardingObjectTypeCode: { },
		Status: { Canceled: 5, In_Progress: 0, Nearing_Noncompliance: 2, Noncompliant: 1, Paused: 3, Succeeded: 4 },
		WarningTimeReached: { No: 0, Yes: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));