'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_slakpi_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["msdyn_AdvancedPauseConfiguration", "msdyn_ApplicableFromField", "msdyn_EntityName", "msdyn_KPIField", "msdyn_name", "msdyn_PauseConfigurationXml", "OwnerId", "WebResource_preview"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["General___PauseConfiguration"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.Formmsdyn_slakpi_New_Form = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["msdyn_AdvancedPauseConfiguration", "msdyn_ApplicableFromField", "msdyn_EntityName", "msdyn_KPIField", "msdyn_name", "msdyn_PauseConfigurationXml", "OwnerId"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["tab_1___PauseConfiguration", "tab_1___tab_1_column_1_section_1", "tab_1___tab_1_column_2_section_1", "tab_1___tab_1_column_3_section_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_slakpi = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		statecode: { Active: 1, Inactive: 0 },
		statuscode: { Active: 2, Inactive: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));