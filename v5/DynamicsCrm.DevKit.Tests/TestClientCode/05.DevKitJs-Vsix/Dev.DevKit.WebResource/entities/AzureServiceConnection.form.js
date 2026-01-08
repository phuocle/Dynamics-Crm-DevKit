'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormAzureServiceConnection_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["AccountKey", "CreatedBy", "Description", "LastConnectionStatusCode", "LastConnectionTime", "ModifiedBy", "ModifiedOn", "Name", "ServiceUri"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["StateCode"],
			navigation: [],
			quick: [],
			tab: ["general___connectioninfo", "general___connectiontestinfo"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.AzureServiceConnection = {
		ConnectionType: { Recommendation: 1, Text_Analytics: 2 },
		LastConnectionStatusCode: { Failure: 2, Success: 1 },
		StateCode: { Active: 0, Inactive: 1 },
		StatusCode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));