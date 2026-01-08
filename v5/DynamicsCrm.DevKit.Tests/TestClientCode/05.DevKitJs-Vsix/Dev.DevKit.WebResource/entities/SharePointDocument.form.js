'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSharePointDocument_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: [],
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
	OptionSet.SharePointDocument = {
		DocumentLocationType: { Dedicated_for_OneNote_Integration: 1, General: 0 },
		RegardingObjectTypeCode: { },
		ServiceType: { MS_Teams: 3, OneDrive: 1, Shared_with_me: 2, SharePoint: 0 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));