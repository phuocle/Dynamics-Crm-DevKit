'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormDataPerformance_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["AnyOptimizationApplied", "AnyOptimizationAvailable", "Count", "Entity", "LastActionResult", "MaxTime", "MedianTime", "MinTime", "Operation", "OptimizationStatus", "Weight"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["Performance_Improvement___Performance_Improvement"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.DataPerformance = {
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));