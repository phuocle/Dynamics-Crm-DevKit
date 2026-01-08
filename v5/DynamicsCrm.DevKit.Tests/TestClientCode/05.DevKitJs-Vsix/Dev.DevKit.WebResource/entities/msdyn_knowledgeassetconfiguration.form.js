'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormKnowledge_Asset_Configuration_main_form = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["msdyn_aipluginoperationid", "msdyn_customapiid", "msdyn_providerdetails", "msdyn_providerspecificconfiguration", "msdyn_providertype", "name", "statecode", "UniqueName"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["New_Tab___New_Section"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_knowledgeassetconfiguration = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		statecode: { Draft: 0, InProgress: 1, Published: 2 },
		statuscode: { Deleting: 2, Draft: 0, Published: 3, PublishFailed: 4, Publishing: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));