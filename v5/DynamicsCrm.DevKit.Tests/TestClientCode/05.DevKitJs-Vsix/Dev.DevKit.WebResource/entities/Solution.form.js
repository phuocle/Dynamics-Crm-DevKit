'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSolution_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ConfigurationPageId", "Description", "FriendlyName", "IFRAME_SolutionsMarketplace", "InstalledOn", "IsManaged", "PublisherId", "UniqueName", "Version"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["_9129B06A_8446_77D8_2BD2_027C5006BE41___solutionmarketplacesection", "general___description", "general___solution_information"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Solution = {
		SolutionType: { Internal: 2, None: 0, Snapshot: 1 },
		SourceControlSyncStatus: { Committed: 4, Errors_in_initial_sync: 2, Initial_sync_in_progress: 1, Not_started: 0, Pending_changes_to_be_committed: 3 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));