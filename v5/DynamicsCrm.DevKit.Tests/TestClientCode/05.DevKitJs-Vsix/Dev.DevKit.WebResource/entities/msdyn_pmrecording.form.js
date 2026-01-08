'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_pmrecording_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["msdyn_name", "OwnerId"],
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
	OptionSet.msdyn_pmrecording = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		msdyn_publishingstatus: { NotIncluded: 192350000, Obsolete: 192350002, Published: 192350001 },
		msdyn_type: { UiFlow: 192350000 },
		statecode: { Complete: 2, Draft: 0, Failed: 3, Recorded: 1 },
		statuscode: { Complete: 6, Draft: 1, Failed: 7, Imported: 4, Importing: 3, Queued: 2, Recorded: 5 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));