'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SavedOrgInsightsConfiguration = {
		Lookback : {
			_2H: 1,
			_30D: 4,
			_48H: 2,
			_7D: 3
		},
		MetricType : {
			Category: 2,
			Time_Series: 1
		},
		PlotOption : {
			Area: 3,
			Bar: 5,
			Bubble: 11,
			Column: 2,
			Donut: 6,
			DoubleDonut: 9,
			Infocard: 7,
			Line: 1,
			LinearGauge: 10,
			List: 8,
			Pie: 4
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