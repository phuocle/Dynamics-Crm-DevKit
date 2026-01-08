'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formworkqueueitem_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["name", "OwnerId"],
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
	OptionSet.workqueueitem = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		processortype: { Cloud_Flow: 1, Flow_Machine: 2, None: 0 },
		slastatus: { AtRisk: 2, In: 1, NotSet: 0, Out: 3 },
		statecode: { Error: 4, OnHold: 3, Processed: 2, Processing: 1, Queued: 0 },
		statuscode: { BusinessException: 6, DeadLetter: 7, GenericException: 4, ITException: 5, Paused: 3, Processed: 2, Processing: 1, ProcessingTimeout: 8, Queued: 0 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));