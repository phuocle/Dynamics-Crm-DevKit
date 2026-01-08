'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formappnotification_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Body", "Data", "IconType", "OwnerId", "Priority", "Title", "ToastType", "TTLInSeconds"],
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
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.appnotification = {
		IconType: { Custom: 100000005, Failure: 100000002, Info: 100000000, Mention: 100000004, Success: 100000001, Warning: 100000003 },
		Priority: { High: 200000001, Normal: 200000000 },
		ToastType: { Hidden: 200000001, Timed: 200000000 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));