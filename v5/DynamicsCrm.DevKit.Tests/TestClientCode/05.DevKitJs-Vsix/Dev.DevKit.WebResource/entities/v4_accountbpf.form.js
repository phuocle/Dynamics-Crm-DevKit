'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formv4_accountbpf_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["industrycode", "name", "primarycontactid", "revenue"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["StageStep3___StageStep3_section1", "StageStep9___StageStep9_section1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.v4_accountbpf = {
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Aborted: 3, Active: 1, Finished: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));