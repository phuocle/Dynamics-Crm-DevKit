'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_analysisjob_Information = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			AssociatedAnalysisResults: {},
			msdyn_EndTime: {},
			msdyn_ErrorCount: {},
			msdyn_ErrorCount_1: {},
			msdyn_Exception: {},
			msdyn_name: {},
			msdyn_RuleFailCount: {},
			msdyn_RuleFailCount_1: {},
			msdyn_RulePassCount: {},
			msdyn_RulePassCount_1: {},
			msdyn_RuleRunCount: {},
			msdyn_RuleRunCount_1: {},
			msdyn_sevcriticalcount: {},
			msdyn_sevhighcount: {},
			msdyn_sevlowcount: {},
			msdyn_sevmediumcount: {},
			msdyn_StartTime: {},
			msdyn_SuggestionCount: {},
			msdyn_SuggestionCount_1: {},
			msdyn_WarningCount: {},
			msdyn_WarningCount_1: {},
			statecode: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_F1A26849_5CBD_4343_BE37_A5447D0EA5A6: {
				Section: {
					_BFA242F2_7FBF_468A_85CA_6D52BD4193D1: {},
					_F1A26849_5CBD_4343_BE37_A5447D0EA5A6_SECTION_2: {},
					_F1A26849_5CBD_4343_BE37_A5447D0EA5A6_SECTION_3: {}
				}
			},
			summary_tab: {
				Section: {
					_E6707165_9B00_4ABC_9DF3_D04E06FEC0F2_SECTION_4: {},
					tab_3_section_overview: {}
				}
			},
			tab_2: {
				Section: {
					tab_2_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			AssociatedAnalysisResults: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_analysisjob = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Canceled: 2,
			Complete: 192350001,
			Completed_With_Exceptions: 192350003,
			Exception: 192350002,
			Pending: 1,
			Running: 192350000
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));