'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormOpportunityProduct_Field_Service_Information = function(executionContext, defaultWebResourceName) {
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
			BaseAmount: {},
			CreatedOn: {},
			ExtendedAmount: {},
			IsPriceOverridden: {},
			IsProductOverridden: {},
			ManualDiscountAmount: {},
			msdyn_Duration: {},
			msdyn_enddate: {},
			msdyn_LineType: {},
			msdyn_pricelist: {},
			msdyn_serviceaccount: {},
			msdyn_startdate: {},
			OpportunityId: {},
			PricePerUnit: {},
			ProductDescription: {},
			ProductId: {},
			ProductTypeCode: {},
			Quantity: {},
			Tax: {},
			TransactionCurrencyId: {},
			UoMId: {},
			VolumeDiscountAmount: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_2: {
				Section: {
					tab_2_section_1: {},
					tab_2_section_2: {},
					tab_2_section_3: {}
				}
			},
			general: {
				Section: {
					pricing: {}
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
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	MyDog.FormOpportunityProduct_Information = function(executionContext, defaultWebResourceName) {
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
			BaseAmount: {},
			ExtendedAmount: {},
			IsPriceOverridden: {},
			IsProductOverridden: {},
			ManualDiscountAmount: {},
			PricePerUnit: {},
			ProductDescription: {},
			ProductId: {},
			Quantity: {},
			Tax: {},
			UoMId: {},
			VolumeDiscountAmount: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					opportunity_product_information: {},
					pricing: {}
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
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	MyDog.FormOpportunityProduct = function(executionContext, defaultWebResourceName) {
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
			BaseAmount: {},
			ExtendedAmount: {},
			IsPriceOverridden: {},
			IsProductOverridden: {},
			ManualDiscountAmount: {},
			OpportunityId: {},
			PricePerUnit: {},
			ProductDescription: {},
			ProductId: {},
			Quantity: {},
			Tax: {},
			UoMId: {},
			VolumeDiscountAmount: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					opportunity_product_information: {},
					pricing: {}
				}
			},
			editproductpropertiesinlinetab: {
				Section: {
					productpropertiessection: {}
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
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	MyDog.FormOpportunityProduct_Project_Information = function(executionContext, defaultWebResourceName) {
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
			BaseAmount: {},
			ExtendedAmount: {},
			IsPriceOverridden: {},
			IsProductOverridden: {},
			ManualDiscountAmount: {},
			msdyn_BillingMethod: {},
			msdyn_BudgetAmount: {},
			msdyn_BudgetAmount_1: {},
			msdyn_LineType: {},
			OpportunityId: {},
			OpportunityId_1: {},
			PricePerUnit: {},
			ProductDescription: {},
			ProductDescription_1: {},
			ProductId: {},
			ProductTypeCode: {},
			ProductTypeCode_1: {},
			ProductTypeCode_2: {},
			Quantity: {},
			Tax: {},
			UoMId: {},
			VolumeDiscountAmount: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			ProjectGeneralTab: {
				Section: {
					ProjectSection: {}
				}
			},
			ProductGeneralTab: {
				Section: {
					opportunity_product_information: {},
					pricing: {}
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
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.OpportunityProduct = {
		msdyn_BillingMethod : {
			Fixed_Price: 192350001,
			Time_and_Material: 192350000
		},
		msdyn_LineType : {
			Field_Service_Line: 690970001,
			Project_Service_Line: 690970000
		},
		OpportunityStateCode : {
		},
		PricingErrorCode : {
			Base_Currency_Attribute_Overflow: 36,
			Base_Currency_Attribute_Underflow: 37,
			Detail_Error: 1,
			Discount_Type_Invalid_State: 27,
			Inactive_Discount_Type: 33,
			Inactive_Price_Level: 3,
			Invalid_Current_Cost: 20,
			Invalid_Discount: 28,
			Invalid_Discount_Type: 26,
			Invalid_Price: 19,
			Invalid_Price_Level_Amount: 17,
			Invalid_Price_Level_Currency: 34,
			Invalid_Price_Level_Percentage: 18,
			Invalid_Pricing_Code: 9,
			Invalid_Pricing_Precision: 30,
			Invalid_Product: 7,
			Invalid_Quantity: 29,
			Invalid_Rounding_Amount: 24,
			Invalid_Rounding_Option: 23,
			Invalid_Rounding_Policy: 22,
			Invalid_Standard_Cost: 21,
			Missing_Current_Cost: 15,
			Missing_Price: 14,
			Missing_Price_Level: 2,
			Missing_Price_Level_Amount: 12,
			Missing_Price_Level_Percentage: 13,
			Missing_Pricing_Code: 8,
			Missing_Product: 6,
			Missing_Product_Default_UOM: 31,
			Missing_Product_UOM_Schedule_: 32,
			Missing_Quantity: 4,
			Missing_Standard_Cost: 16,
			Missing_Unit_Price: 5,
			Missing_UOM: 10,
			None: 0,
			Price_Attribute_Out_Of_Range: 35,
			Price_Calculation_Error: 25,
			Product_Not_In_Price_Level: 11,
			Transaction_currency_is_not_set_for_the_product_price_list_item: 38
		},
		ProductTypeCode : {
			Bundle: 2,
			Optional_Bundle_Product: 4,
			Product: 1,
			Project_based_Service: 5,
			Required_Bundle_Product: 3
		},
		PropertyConfigurationStatus : {
			Edit: 0,
			Not_Configured: 2,
			Rectify: 1
		},
		SkipPriceCalculation : {
			DoPriceCalcAlways: 0,
			SkipPriceCalcOnCreate: 1,
			SkipPriceCalcOnUpdate: 2,
			SkipPriceCalcOnUpSert: 3
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