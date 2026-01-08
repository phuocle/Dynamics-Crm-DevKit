'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formcredential_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["name", "OwnerId"],
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
	OptionSet.credential = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		connectiontype: { CertificateBasedAuthentication: 5, ConnectionReference: 7, CyberArkIdentity: 4, MachineMapping: 6, UsernamePassword: 1, UsernamePasswordList: 2, UsernamePasswordListWithGroupMapping: 3 },
		credentialtype: { ListOfCredentials: 2, SingleCredential: 1 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		usagetype: { Connection: 280920000, Cua: 280920003, DesktopScript: 280920001, Network: 280920002 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));