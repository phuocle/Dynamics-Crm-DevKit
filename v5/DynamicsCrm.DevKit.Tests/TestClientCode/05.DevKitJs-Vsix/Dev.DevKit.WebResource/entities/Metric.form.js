'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormMetric_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["AmountDataType", "Description", "IsAmount", "IsStretchTracked", "MetricLineItemSubGrid", "Name"],
			bpf: [],
			dialog: [],
			grid: ["MetricLineItemSubGrid"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["description___description", "general____379F3DB8_82DF_4E44_930A_C7A22C0E5206", "Rollup_Attributes____CEBD8001_3DD4_4ABB_99DE_9A3F2FD250EB"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.Metric = {
		AmountDataType: { Decimal: 1, Integer: 2, Money: 0 },
		StateCode: { Active: 0, Inactive: 1 },
		StatusCode: { Closed: 1, Open: 0 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));