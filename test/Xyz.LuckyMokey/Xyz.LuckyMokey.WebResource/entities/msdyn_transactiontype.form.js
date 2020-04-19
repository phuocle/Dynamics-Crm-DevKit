'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_transactiontype_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_DefaultUnit: {},
			msdyn_TransactionClassification: {},
			msdyn_TransactionTypeCode: {},
			msdyn_UnitGroup: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_FB738610_ECE5_4F2C_BE45_09EA8EB0CFE2: {
				Section: {
					_FB738610_ECE5_4F2C_BE45_09EA8EB0CFE2_SECTION_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			nav_msdyn_msdyn_transactiontype_msdyn_contractlinescheduleofvalue_transactiontype: {},
			nav_msdyn_msdyn_transactiontype_msdyn_expense_TransactionType: {},
			nav_msdyn_msdyn_transactiontype_msdyn_quotelineanalyticsbreakdown_TransactionType: {},
			nav_msdyn_msdyn_transactiontype_msdyn_transactiontype_ParentTransactionType: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_transactiontype = {
		msdyn_TransactionClassification : {
			Commission: 690970000,
			Additional: 690970001,
			Tax: 690970002,
			Time: 192350000,
			Expense: 192350001,
			Material: 192350002,
			Milestone: 192350003,
			Fee: 192350004
		},
		msdyn_TransactionTypeCode : {
			Cost: 192350000,
			Project_Contract: 192350004,
			Unbilled_Sales: 192350005,
			Billed_Sales: 192350006,
			Resourcing_Unit_Cost: 192350007,
			Inter_Organizational_Sales: 192350008
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
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