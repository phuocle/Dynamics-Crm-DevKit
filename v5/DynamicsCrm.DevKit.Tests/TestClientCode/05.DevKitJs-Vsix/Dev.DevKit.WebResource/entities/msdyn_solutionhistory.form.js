'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.Formmsdyn_solutionhistory_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["msdyn_errorcode", "msdyn_exceptionmessage", "msdyn_ismanaged", "msdyn_isoverwritecustomizations", "msdyn_ispatch", "msdyn_name", "msdyn_operation", "msdyn_publishername", "msdyn_solutionversion", "msdyn_suboperation"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["msdyn_endtime", "msdyn_result", "msdyn_starttime", "msdyn_totaltime"],
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
	OptionSet.msdyn_solutionhistory = {
		msdyn_operation: { Export: 2, ExportLite: 10, Import: 0, ImportTranslation: 6, LanguageProvision: 5, None: 9, Publish: 3, PublishAll: 4, RibbonMetadataGeneration: 7, Uninstall: 1, UpdatingMissingPackages: 11, WorkflowSetState: 8 },
		msdyn_status: { Completed: 1, Queued: 2, Started: 0 },
		msdyn_suboperation: { Delete: 4, FailedInstallingMissingPackages: 8, InlineUpgrade: 5, InstalledMissingPackages: 7, New: 1, None: 0, Update: 3, Upgrade: 2, WaitingForMissingPackages: 6 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));