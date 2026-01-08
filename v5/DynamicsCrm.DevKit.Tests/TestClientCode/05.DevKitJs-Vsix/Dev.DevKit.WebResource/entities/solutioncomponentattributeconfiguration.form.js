'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formsolutioncomponentattributeconfiguration_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["EncodingFormat", "FileExtension", "IsExportDisabled", "IsExportedAsFile", "name", "SolutionComponentConfigurationId"],
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
	OptionSet.solutioncomponentattributeconfiguration = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		CustomManagedBehaviorType: { None: 0, State_Transition: 1 },
		DependencyRemovalCapability: { Disabled: 0, Enabled: 1 },
		EncodingFormat: { Base64: 1, None: 0, UTF8: 2 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));