'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_journalline_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_AccountCustomer: {},
			msdyn_AccountingDate: {},
			msdyn_AccountVendor: {},
			msdyn_Amount: {},
			msdyn_AmountMethod: {},
			msdyn_BasisAmount: {},
			msdyn_BasisQuantity: {},
			msdyn_BillingType: {},
			msdyn_bookableresource: {},
			msdyn_ContactCustomer: {},
			msdyn_ContactVendor: {},
			msdyn_CustomerType: {},
			msdyn_description: {},
			msdyn_DocumentDate: {},
			msdyn_EndDateTime: {},
			msdyn_externaldescription: {},
			msdyn_Percent: {},
			msdyn_Price: {},
			msdyn_PriceList: {},
			msdyn_Product: {},
			msdyn_Project: {},
			msdyn_Quantity: {},
			msdyn_ResourceCategory: {},
			msdyn_StartDateTime: {},
			msdyn_Task: {},
			msdyn_TransactionCategory: {},
			msdyn_TransactionClassification: {},
			msdyn_TransactionTypeCode: {},
			msdyn_Unit: {},
			msdyn_UnitSchedule: {},
			msdyn_VendorType: {},
			OwnerId: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7: {
				Section: {
					_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_3: {},
					_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_4: {},
					_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_5: {},
					_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_2: {},
					_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_6: {},
					_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_7: {},
					_377EDB6B_6882_42DC_8F9A_23BBD5CE31A7_SECTION_8: {}
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

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.Formmsdyn_journalline_Quick_Create = function(executionContext, defaultWebResourceName) {
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
			msdyn_AccountingDate: {},
			msdyn_AmountMethod: {},
			msdyn_BasisAmount: {},
			msdyn_BasisQuantity: {},
			msdyn_BillingType: {},
			msdyn_bookableresource: {},
			msdyn_description: {},
			msdyn_DocumentDate: {},
			msdyn_EndDateTime: {},
			msdyn_externaldescription: {},
			msdyn_Percent: {},
			msdyn_Price: {},
			msdyn_Product: {},
			msdyn_Project: {},
			msdyn_Quantity: {},
			msdyn_ResourceCategory: {},
			msdyn_StartDateTime: {},
			msdyn_Task: {},
			msdyn_TransactionCategory: {},
			msdyn_TransactionClassification: {},
			msdyn_TransactionTypeCode: {},
			msdyn_Unit: {},
			msdyn_UnitSchedule: {}
		}
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		}
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	}
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_journalline = {
		msdyn_AmountMethod : {
			Tax_Calculation: 690970000,
			Multiply_Quantity_By_Price: 192350000,
			Fixed_Price: 192350001,
			Multiply_Basis_Quantity_By_Price: 192350002,
			Multiply_Basis_Amount_By_Percent: 192350003
		},
		msdyn_BillingStatus : {
			Ready_to_Invoice: 192350004,
			Work_order_closed_posted: 690970000,
			Unbilled_Sales_Created: 192350000,
			Customer_Invoice_Created: 192350001,
			Customer_Invoice_Posted: 192350002,
			Canceled: 192350003
		},
		msdyn_BillingType : {
			Non_Chargeable: 192350000,
			Chargeable: 192350001,
			Complimentary: 192350002,
			Not_Available: 192350003
		},
		msdyn_CustomerType : {
			Account: 192350001,
			Contact: 192350002
		},
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
		msdyn_VendorType : {
			Account: 192350001,
			Contact: 192350002
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