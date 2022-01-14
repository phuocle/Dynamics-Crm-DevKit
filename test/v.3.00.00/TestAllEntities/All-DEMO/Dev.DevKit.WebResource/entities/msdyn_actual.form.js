'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_actual_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_AdjustmentStatus: {},
			msdyn_Agreement: {},
			msdyn_Amount: {},
			msdyn_AmountMethod: {},
			msdyn_BasisAmount: {},
			msdyn_BasisQuantity: {},
			msdyn_BillingStatus: {},
			msdyn_BillingType: {},
			msdyn_bookableresource: {},
			msdyn_ContactCustomer: {},
			msdyn_ContactVendor: {},
			msdyn_contractorganizationalunitid: {},
			msdyn_CustomerType: {},
			msdyn_description: {},
			msdyn_DocumentDate: {},
			msdyn_EndDateTime: {},
			msdyn_externaldescription: {},
			msdyn_IncidentType: {},
			msdyn_Invoice: {},
			msdyn_IsJournalized: {},
			msdyn_JournalType: {},
			msdyn_Percent: {},
			msdyn_Price: {},
			msdyn_PriceList: {},
			msdyn_Product: {},
			msdyn_ProductType: {},
			msdyn_Project: {},
			msdyn_Quantity: {},
			msdyn_ResourceCategory: {},
			msdyn_ResourceOrganizationalUnitId: {},
			msdyn_ServiceAccount: {},
			msdyn_ServiceTerritory: {},
			msdyn_StartDateTime: {},
			msdyn_Task: {},
			msdyn_TaxCode: {},
			msdyn_TransactionCategory: {},
			msdyn_TransactionClassification: {},
			msdyn_TransactionTypeCode: {},
			msdyn_Unit: {},
			msdyn_UnitSchedule: {},
			msdyn_VendorType: {},
			msdyn_Warehouse: {},
			msdyn_WorkLocation: {},
			msdyn_WorkOrder: {},
			msdyn_WorkOrderType: {},
			OwnerId: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_88D21A95_2EBC_49E9_A568_6A7A0107BCEC: {
				Section: {
					_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_10: {},
					_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_3: {},
					_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_4: {},
					_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_5: {},
					_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_6: {},
					_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_8: {},
					_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_9: {},
					Accounting: {}
				}
			},
			FieldService: {
				Section: {
					tab_2_section_1: {},
					tab_2_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_actual = {
		msdyn_AdjustmentStatus : {
			Adjusted: 192350001,
			In_Process: 192350000,
			Unadjustable: 192350002
		},
		msdyn_AmountMethod : {
			Fixed_Price: 192350001,
			Multiply_Basis_Amount_By_Percent: 192350003,
			Multiply_Basis_Quantity_By_Price: 192350002,
			Multiply_Quantity_By_Price: 192350000,
			Tax_Calculation: 690970000
		},
		msdyn_BillingStatus : {
			Canceled: 192350003,
			Customer_Invoice_Created: 192350001,
			Customer_Invoice_Posted: 192350002,
			Ready_to_Invoice: 192350004,
			Unbilled_Sales_Created: 192350000,
			Work_order_closed_posted: 690970000
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
		msdyn_JournalType : {
			Break: 690970001,
			Business_Closure: 690970004,
			Overtime: 690970003,
			Travel: 690970002,
			Working_Hours: 690970000
		},
		msdyn_ProductType : {
			Inventory: 690970000,
			Non_Inventory: 690970001,
			Service: 690970002
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
		msdyn_WorkLocation : {
			Facility: 690970001,
			Location_Agnostic: 690970002,
			Onsite: 690970000
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