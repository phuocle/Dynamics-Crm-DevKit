'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	'use strict';
	DevKit.Formmsdyn_knowledgearticletemplate_Main_Form = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["msdyn_Content", "msdyn_Description", "msdyn_isinternal", "msdyn_keywords", "msdyn_languagelocaleid", "msdyn_LanguageLocaleIdName", "msdyn_name", "msdyn_subjectid", "msdyn_title", "OwnerId"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["_92E59EE7_820A_42FC_907F_F86D2C4677C2____92E59EE7_820A_42FC_907F_F86D2C4677C2_SECTION_1", "_92E59EE7_820A_42FC_907F_F86D2C4677C2____92E59EE7_820A_42FC_907F_F86D2C4677C2_SECTION_2", "_92E59EE7_820A_42FC_907F_F86D2C4677C2___Content"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.msdyn_knowledgearticletemplate = {
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));