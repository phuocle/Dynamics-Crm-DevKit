'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.Formmsdyn_pminferredtask_Information = function(executionContext, defaultWebResourceName) {
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
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.msdyn_pminferredtask = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		msdyn_automationstatus: { Complete: 200000003, InProgress: 200000002, NotRecommended: 200000001, NotStarted: 200000000 },
		msdyn_reportprovisioningstatus: { Failed: 193350003, NotStarted: 193350000, Provisioned: 193350002, Provisioning: 193350001, Skipped: 193350004 },
		msdyn_source: { DataLake: 1, ObjectCentric: 2, Recording: 0 },
		statecode: { Done: 2, Draft: 0, Failed: 3, Imported: 4, InProgress: 1 },
		statuscode: { Analyzed: 4, AnalyzeFailed: 5, Analyzing: 2, DeleteFailed: 6, Deleting: 3, Draft: 0, Imported: 7, Ingesting: 8, Queued: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));