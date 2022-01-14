'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_journal_Information = function(executionContext, defaultWebResourceName) {
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
			Expenses: {},
			JournalLinesGrid: {},
			msdyn_BookableResource: {},
			msdyn_BookableResource1: {},
			msdyn_Date: {},
			msdyn_description: {},
			msdyn_ExpenseCategory: {},
			msdyn_IsPosted: {},
			msdyn_JournalType: {},
			msdyn_Project: {},
			msdyn_Project1: {},
			msdyn_ProjectTask: {},
			msdyn_ResourceCategory: {},
			msdyn_TransactionDate: {},
			OwnerId: {},
			statuscode: {},
			TimeEntries: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_89B13559_B90E_4EAA_A6BE_47E4EBB36524: {
				Section: {
					_89B13559_B90E_4EAA_A6BE_47E4EBB36524_SECTION_2: {}
				}
			},
			ExpenseCorrectionsTab: {
				Section: {
					ExpenseCorrectionParameters: {},
					tab_4_section_1: {}
				}
			},
			JounalLinesTab: {
				Section: {
					JournalLinesSection: {}
				}
			},
			TimeEntryCorrectionsTab: {
				Section: {
					tab_3_section_1: {},
					TimeEntryCorrectionParameters: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			Expenses: {},
			JournalLinesGrid: {},
			TimeEntries: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_journal = {
		msdyn_JournalType : {
			Entry: 192350000,
			Expense_Correction: 192350002,
			Time_Correction: 192350001
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Draft_Adjustment: 192350000,
			Inactive: 2
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