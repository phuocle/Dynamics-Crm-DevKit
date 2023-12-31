'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_expense_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Amount: {},
			msdyn_ExpenseCategory: {},
			msdyn_ExpenseStatus: {},
			msdyn_externaldescription: {},
			msdyn_name: {},
			msdyn_Price: {},
			msdyn_Project: {},
			msdyn_Quantity: {},
			msdyn_Salestaxamount: {},
			msdyn_totalamount: {},
			msdyn_TransactionDate: {},
			msdyn_Unit: {},
			msdyn_UnitGroup: {},
			notescontrol: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var navigation = {
			nav_msdyn_msdyn_expense_msdyn_expensereceipt_ExpenseId: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormCreate_Expense = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			msdyn_Amount: {},
			msdyn_ExpenseCategory: {},
			msdyn_externaldescription: {},
			msdyn_name: {},
			msdyn_Price: {},
			msdyn_Project: {},
			msdyn_Quantity: {},
			msdyn_Salestaxamount: {},
			msdyn_TransactionDate: {},
			msdyn_Unit: {},
			msdyn_UnitGroup: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_expense = {
		msdyn_ExpenseStatus : {
			Approved: 192350002,
			Draft: 192350000,
			Paid: 192350005,
			Posted: 192350004,
			Recall_Requested: 192350006,
			Rejected: 192350003,
			Submitted: 192350001
		},
		msdyn_targetExpenseStatus : {
			Approved: 192350002,
			Draft: 192350000,
			Paid: 192350005,
			Posted: 192350004,
			Recall_Requested: 192350006,
			Rejected: 192350003,
			Submitted: 192350001
		},
		OwnerIdType : {
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Approved: 867380003,
			Draft: 867380000,
			Paid: 867380005,
			Posted: 867380004,
			Rejected: 867380001,
			Submitted: 867380002
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