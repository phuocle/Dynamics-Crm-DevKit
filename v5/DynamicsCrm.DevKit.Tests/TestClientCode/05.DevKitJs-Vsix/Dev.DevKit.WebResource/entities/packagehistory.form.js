'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.Formpackagehistory_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ApplicationName", "CatalogId", "CreatedBy", "DeployAsUserId", "ExecutionName", "IsClusterOperation", "PackageFile", "PackageType", "Priority", "Settings", "StageValue", "UniqueName"],
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
	OptionSet.packagehistory = {
		PackageType: { App: 0, DatabaseVersionUpdate: 2, Solution: 1 },
		Priority: { High: 1, Low: 3, Medium: 2 },
		StageValue: { Configuration: 2, CustomCode: 4, DataImport: 5, FnO: 6, PackageInit: 3, PackageProcessing: 0, QueuedForCluster: 8, SchemaDeployed: 7, Solutions: 1 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Completed: 526430003, Failed: 526430004, In_Process: 526430002, Requested: 526430000, Scheduled: 526430001, Uninstalled: 526430005 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));