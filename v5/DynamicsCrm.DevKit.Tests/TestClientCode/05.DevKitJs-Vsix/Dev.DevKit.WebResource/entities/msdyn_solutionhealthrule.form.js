'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_solutionhealthrule_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["msdyn_Description", "msdyn_name", "msdyn_OwningSolutionId", "msdyn_ResolutionAction", "msdyn_resolutionmessage", "msdyn_solutionhealthrulesetId", "msdyn_uniquename", "msdyn_Workflow", "OwnerId"],
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
	OptionSet.msdyn_solutionhealthrule = {
		msdyn_ResolutionType: { Auto_Heal: 192350000, Customer_Action_Required: 192350001, Documenation: 192350002, None: 192350003 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));