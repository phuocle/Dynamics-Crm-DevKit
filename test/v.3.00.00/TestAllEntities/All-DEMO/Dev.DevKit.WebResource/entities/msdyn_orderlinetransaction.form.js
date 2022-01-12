'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_orderlinetransaction_Project_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_AccountVendor: {},
			msdyn_Amount: {},
			msdyn_Amount_1: {},
			msdyn_amount_after_tax: {},
			msdyn_AmountMethod: {},
			msdyn_BasisAmount: {},
			msdyn_BasisQuantity: {},
			msdyn_BillingType: {},
			msdyn_BillingType_1: {},
			msdyn_bookableresource: {},
			msdyn_ContactCustomer: {},
			msdyn_ContactVendor: {},
			msdyn_CustomerType: {},
			msdyn_description: {},
			msdyn_description_1: {},
			msdyn_DocumentDate: {},
			msdyn_EndDateTime: {},
			msdyn_EndDateTime_1: {},
			msdyn_Origin: {},
			msdyn_Percent: {},
			msdyn_Price: {},
			msdyn_Price_1: {},
			msdyn_PriceList: {},
			msdyn_PriceList_1: {},
			msdyn_Product: {},
			msdyn_Project: {},
			msdyn_Quantity: {},
			msdyn_Quantity_1: {},
			msdyn_ResourceCategory: {},
			msdyn_ResourceCategory_1: {},
			msdyn_ResourceOrganizationalUnitId: {},
			msdyn_SalesContract: {},
			msdyn_SalesContract_1: {},
			msdyn_SalesContractLineId: {},
			msdyn_StartDateTime: {},
			msdyn_StartDateTime_1: {},
			msdyn_Task: {},
			msdyn_tax: {},
			msdyn_TransactionCategory: {},
			msdyn_TransactionCategory_1: {},
			msdyn_TransactionClassification: {},
			msdyn_TransactionClassification_1: {},
			msdyn_TransactionTypeCode: {},
			msdyn_TransactionTypeCode_1: {},
			msdyn_Unit: {},
			msdyn_Unit_1: {},
			msdyn_UnitSchedule: {},
			msdyn_VendorType: {},
			OwnerId: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_8C79EFB9_B8BB_4A4A_B617_0CE1C5C65186: {
				Section: {
					AmountSection: {},
					BillingSection: {},
					DateSection: {},
					GeneralSection: {},
					ProductResourceSection: {},
					ProjectSection: {},
					QuantitySection: {},
					VendorSection: {}
				}
			},
			SummaryTab: {
				Section: {
					SummaryTab_section_2: {},
					SummaryTab_section_3: {},
					tab_2_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_orderlinetransaction_Project_Quick_Create = function(executionContext, defaultWebResourceName) {
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
			msdyn_description: {},
			msdyn_EndDateTime: {},
			msdyn_Price: {},
			msdyn_Quantity: {},
			msdyn_ResourceCategory: {},
			msdyn_ResourceOrganizationalUnitId: {},
			msdyn_SalesContract: {},
			msdyn_StartDateTime: {},
			msdyn_tax: {},
			msdyn_TransactionCategory: {},
			msdyn_TransactionClassification: {},
			msdyn_TransactionTypeCode: {},
			msdyn_Unit: {},
			msdyn_UnitSchedule: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
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
	OptionSet.msdyn_orderlinetransaction = {
		msdyn_AmountMethod : {
			Fixed_Price: 192350001,
			Multiply_Basis_Amount_By_Percent: 192350003,
			Multiply_Basis_Quantity_By_Price: 192350002,
			Multiply_Quantity_By_Price: 192350000,
			Tax_Calculation: 690970000
		},
		msdyn_BillingType : {
			Chargeable: 192350001,
			Complimentary: 192350002,
			Non_Chargeable: 192350000,
			Not_Available: 192350003
		},
		msdyn_CustomerType : {
			Account: 192350001,
			Contact: 192350002
		},
		msdyn_TransactionClassification : {
			Additional: 690970001,
			Commission: 690970000,
			Expense: 192350001,
			Fee: 192350004,
			Material: 192350002,
			Milestone: 192350003,
			Tax: 690970002,
			Time: 192350000
		},
		msdyn_TransactionTypeCode : {
			Billed_Sales: 192350006,
			Cost: 192350000,
			Inter_Organizational_Sales: 192350008,
			Project_Contract: 192350004,
			Resourcing_Unit_Cost: 192350007,
			Unbilled_Sales: 192350005
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