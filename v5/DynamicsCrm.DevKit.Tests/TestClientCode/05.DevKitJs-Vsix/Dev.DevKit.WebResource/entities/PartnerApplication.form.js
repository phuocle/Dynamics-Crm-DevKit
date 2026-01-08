'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormPartner_Application_Main_Form = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ApplicationRole", "Name", "notescontrol", "PrincipalId", "UseAuthorizationServer"],
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
	OptionSet.PartnerApplication = {
		ApplicationRole: { Client: 0, Server: 1 },
		StateCode: { Active: 0, Inactive: 1 },
		StatusCode: { Disabled: 2, Enabled: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));