'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_analysisjob_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["AssociatedAnalysisResults", "msdyn_EndTime", "msdyn_ErrorCount", "msdyn_ErrorCount1", "msdyn_Exception", "msdyn_name", "msdyn_RuleFailCount", "msdyn_RuleFailCount1", "msdyn_RulePassCount", "msdyn_RulePassCount1", "msdyn_RuleRunCount", "msdyn_RuleRunCount1", "msdyn_sevcriticalcount", "msdyn_sevhighcount", "msdyn_sevlowcount", "msdyn_sevmediumcount", "msdyn_StartTime", "msdyn_SuggestionCount", "msdyn_SuggestionCount1", "msdyn_WarningCount", "msdyn_WarningCount1", "statecode", "statuscode"],
			bpf: [],
			dialog: [],
			grid: ["AssociatedAnalysisResults"],
			header: ["OwnerId"],
			navigation: [],
			quick: [],
			tab: ["_F1A26849_5CBD_4343_BE37_A5447D0EA5A6____BFA242F2_7FBF_468A_85CA_6D52BD4193D1", "_F1A26849_5CBD_4343_BE37_A5447D0EA5A6____F1A26849_5CBD_4343_BE37_A5447D0EA5A6_SECTION_2", "_F1A26849_5CBD_4343_BE37_A5447D0EA5A6____F1A26849_5CBD_4343_BE37_A5447D0EA5A6_SECTION_3", "summary_tab____E6707165_9B00_4ABC_9DF3_D04E06FEC0F2_SECTION_4", "summary_tab___tab_3_section_overview", "tab_2___tab_2_section_1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_analysisjob = {
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Canceled: 2, Complete: 192350001, Completed_With_Exceptions: 192350003, Exception: 192350002, Pending: 1, Running: 192350000 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));