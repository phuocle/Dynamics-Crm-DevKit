'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.FormTerritory_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Description", "ManagerId", "Name", "ParentTerritoryId", "territories_subgrid"],
			bpf: [],
			dialog: [],
			grid: ["territories_subgrid"],
			header: [],
			navigation: [],
			quick: [],
			tab: ["general___description", "general___territory_information", "subterritories_tab___territory_tab1_section_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.Territory = {
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));