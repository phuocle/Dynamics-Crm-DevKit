'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormQuote = function(executionContext, defaultWebResourceName) {
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
			CustomerId: {},
			Description: {},
			Name: {},
			OpportunityId: {},
			OwnerId: {},
			PriceLevelId: {},
			TransactionCurrencyId: {}
		}
		devKit.LoadFields(formContext, body);
		var tab = {
			newQuote: {
				Section: {
					quickQuote_summary: {},
					quickQuote_salesinformation: {}
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
	OptionSet.Quote = {
		FreightTermsCode : {
			FOB: 1,
			No_Charge: 2
		},
		msdyn_Competitive : {
			Customer_Budget_Not_Available: 192350000,
			Within_Customer_Expectations: 192350001,
			Outside_Customer_Expectations: 192350002
		},
		msdyn_EstimatedBudget : {
			Budget_Estimate_Not_Available: 192350000,
			Within_Customer_Budget: 192350001,
			Exceeds_Customer_Budget: 192350002
		},
		msdyn_EstimatedSchedule : {
			Schedule_Not_Available: 192350000,
			Estimated_To_Finish_Early: 192350001,
			Estimated_To_Finish_Late: 192350002,
			Estimated_To_Finish_On_Schedule: 192350003
		},
		msdyn_feasible : {
			Feasibility_Not_Available: 192350000,
			Feasible: 192350001,
			Not_Feasible: 192350002
		},
		msdyn_OrderType : {
			Work_based: 192350001,
			Item_based: 192350000,
			Service_Maintenance_Based: 690970002
		},
		msdyn_Profitability : {
			Profitability_Not_Available: 192350000,
			Profitable: 192350001,
			Not_Profitable: 192350002
		},
		PaymentTermsCode : {
			Net_30: 1,
			_2_10_Net_30: 2,
			Net_45: 3,
			Net_60: 4
		},
		PricingErrorCode : {
			None: 0,
			Detail_Error: 1,
			Missing_Price_Level: 2,
			Inactive_Price_Level: 3,
			Missing_Quantity: 4,
			Missing_Unit_Price: 5,
			Missing_Product: 6,
			Invalid_Product: 7,
			Missing_Pricing_Code: 8,
			Invalid_Pricing_Code: 9,
			Missing_UOM: 10,
			Product_Not_In_Price_Level: 11,
			Missing_Price_Level_Amount: 12,
			Missing_Price_Level_Percentage: 13,
			Missing_Price: 14,
			Missing_Current_Cost: 15,
			Missing_Standard_Cost: 16,
			Invalid_Price_Level_Amount: 17,
			Invalid_Price_Level_Percentage: 18,
			Invalid_Price: 19,
			Invalid_Current_Cost: 20,
			Invalid_Standard_Cost: 21,
			Invalid_Rounding_Policy: 22,
			Invalid_Rounding_Option: 23,
			Invalid_Rounding_Amount: 24,
			Price_Calculation_Error: 25,
			Invalid_Discount_Type: 26,
			Discount_Type_Invalid_State: 27,
			Invalid_Discount: 28,
			Invalid_Quantity: 29,
			Invalid_Pricing_Precision: 30,
			Missing_Product_Default_UOM: 31,
			Missing_Product_UOM_Schedule_: 32,
			Inactive_Discount_Type: 33,
			Invalid_Price_Level_Currency: 34,
			Price_Attribute_Out_Of_Range: 35,
			Base_Currency_Attribute_Overflow: 36,
			Base_Currency_Attribute_Underflow: 37,
			Transaction_currency_is_not_set_for_the_product_price_list_item: 38
		},
		ShippingMethodCode : {
			Airborne: 1,
			DHL: 2,
			FedEx: 3,
			UPS: 4,
			Postal_Mail: 5,
			Full_Load: 6,
			Will_Call: 7
		},
		ShipTo_FreightTermsCode : {
			Default_Value: 1
		},
		SkipPriceCalculation : {
			DoPriceCalcAlways: 0,
			SkipPriceCalcOnRetrieve: 1
		},
		StateCode : {
			Draft: 0,
			Active: 1,
			Won: 2,
			Closed: 3
		},
		StatusCode : {
			In_Progress_2: 2,
			In_Progress_1: 1,
			Open: 3,
			Won: 4,
			Lost: 5,
			Canceled: 6,
			Revised: 7
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