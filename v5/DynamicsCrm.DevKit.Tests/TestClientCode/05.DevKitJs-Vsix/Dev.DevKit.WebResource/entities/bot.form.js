'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formbot_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["accesscontrolpolicy", "applicationmanifestinformation", "authenticationconfiguration", "authenticationmode", "authenticationtrigger", "authorizedsecuritygroupids", "BotComponents", "ComponentCollections", "Configuration", "ConversationTranscripts", "CreatedBy", "CreatedOn", "iconbase64", "Language", "ModifiedBy", "ModifiedOn", "name", "Origin", "OwnerId", "OwningBusinessUnit", "ProviderConnectionReferenceId", "publishedby", "publishedon", "RuntimeProvider", "SchemaName", "statecode", "statuscode", "SupportedLanguages", "SynchronizationStatus", "Template"],
			bpf: [],
			dialog: [],
			grid: ["BotComponents", "ComponentCollections", "ConversationTranscripts"],
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
	OptionSet.bot = {
		accesscontrolpolicy: { Any: 0, Any_multi_tenant: 3, Copilot_readers: 1, Group_membership: 2 },
		authenticationmode: { Custom_Azure_Active_Directory: 3, Generic_OAuth2: 4, Integrated: 2, None: 1, Unspecified: 0 },
		authenticationtrigger: { Always: 1, As_Needed: 0 },
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		Language: { Arabic: 1025, Chinese_Simplified: 2052, Chinese_Traditional: 1028, Czech: 1029, Danish: 1030, Dutch: 1043, English: 1033, English_Australia: 3081, English_United_Kingdom: 2057, Finnish: 1035, French: 1036, French_Canada: 3084, German: 1031, Greek: 1032, Hebrew: 1037, Hindi: 1081, Indonesian: 1057, Italian: 1040, Japanese: 1041, Korean: 1042, Norwegian: 1044, Polish: 1045, Portuguese_Brazilian: 1046, Portuguese_Portugal: 2070, Russian: 1049, Spanish: 1034, Spanish_United_States: 21514, Swedish: 1053, Thai: 1054, Turkish: 1055 },
		RuntimeProvider: { Nuance_Mix_Shell: 1, Power_Virtual_Agents: 0 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Deprovisioned: 2, MissingLicense: 5, Provisioned: 1, ProvisionFailed: 4, Provisioning: 3 },
		SupportedLanguages: { Arabic: 1025, Chinese_Simplified: 2052, Chinese_Traditional: 1028, Czech: 1029, Danish: 1030, Dutch: 1043, English: 1033, English_Australia: 3081, English_United_Kingdom: 2057, Finnish: 1035, French: 1036, French_Canada: 3084, German: 1031, Greek: 1032, Hebrew: 1037, Hindi: 1081, Indonesian: 1057, Italian: 1040, Japanese: 1041, Korean: 1042, Norwegian: 1044, Polish: 1045, Portuguese_Brazilian: 1046, Portuguese_Portugal: 2070, Russian: 1049, Spanish: 1034, Spanish_United_States: 21514, Swedish: 1053, Thai: 1054, Turkish: 1055 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));