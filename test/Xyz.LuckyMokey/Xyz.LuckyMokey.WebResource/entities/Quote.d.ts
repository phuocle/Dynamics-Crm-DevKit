﻿//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormQuote {
		interface tab_newQuote_Sections {
			quickQuote_summary: DevKit.Form.Controls.ControlSection;
			quickQuote_salesinformation: DevKit.Form.Controls.ControlSection;
		}
		interface tab_newQuote extends DevKit.Form.Controls.IControlTab {
			Section: tab_newQuote_Sections;
		}
		interface Tabs {
			newQuote: tab_newQuote;
		}
		interface Body {
			Tab: Tabs;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Type additional information to describe the quote, such as the products or services offered or details about the customer's product preferences. */
			Description: DevKit.Form.Controls.ControlString;
			/** Type a descriptive name for the quote. */
			Name: DevKit.Form.Controls.ControlString;
			/** Choose the opportunity that the quote is related to for reporting and analytics. */
			OpportunityId: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Form.Controls.ControlLookup;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormQuote extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Quote
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Quote */
		Body: LuckyMokey.FormQuote.Body;
	}
}
declare namespace OptionSet {
	namespace Quote {
		enum FreightTermsCode {
			/** 1 */
			FOB,
			/** 2 */
			No_Charge
		}
		enum msdyn_Competitive {
			/** 192350000 */
			Customer_Budget_Not_Available,
			/** 192350001 */
			Within_Customer_Expectations,
			/** 192350002 */
			Outside_Customer_Expectations
		}
		enum msdyn_EstimatedBudget {
			/** 192350000 */
			Budget_Estimate_Not_Available,
			/** 192350001 */
			Within_Customer_Budget,
			/** 192350002 */
			Exceeds_Customer_Budget
		}
		enum msdyn_EstimatedSchedule {
			/** 192350000 */
			Schedule_Not_Available,
			/** 192350001 */
			Estimated_To_Finish_Early,
			/** 192350002 */
			Estimated_To_Finish_Late,
			/** 192350003 */
			Estimated_To_Finish_On_Schedule
		}
		enum msdyn_feasible {
			/** 192350000 */
			Feasibility_Not_Available,
			/** 192350001 */
			Feasible,
			/** 192350002 */
			Not_Feasible
		}
		enum msdyn_OrderType {
			/** 192350001 */
			Work_based,
			/** 192350000 */
			Item_based,
			/** 690970002 */
			Service_Maintenance_Based
		}
		enum msdyn_Profitability {
			/** 192350000 */
			Profitability_Not_Available,
			/** 192350001 */
			Profitable,
			/** 192350002 */
			Not_Profitable
		}
		enum PaymentTermsCode {
			/** 1 */
			Net_30,
			/** 2 */
			_2_10_Net_30,
			/** 3 */
			Net_45,
			/** 4 */
			Net_60
		}
		enum PricingErrorCode {
			/** 0 */
			None,
			/** 1 */
			Detail_Error,
			/** 2 */
			Missing_Price_Level,
			/** 3 */
			Inactive_Price_Level,
			/** 4 */
			Missing_Quantity,
			/** 5 */
			Missing_Unit_Price,
			/** 6 */
			Missing_Product,
			/** 7 */
			Invalid_Product,
			/** 8 */
			Missing_Pricing_Code,
			/** 9 */
			Invalid_Pricing_Code,
			/** 10 */
			Missing_UOM,
			/** 11 */
			Product_Not_In_Price_Level,
			/** 12 */
			Missing_Price_Level_Amount,
			/** 13 */
			Missing_Price_Level_Percentage,
			/** 14 */
			Missing_Price,
			/** 15 */
			Missing_Current_Cost,
			/** 16 */
			Missing_Standard_Cost,
			/** 17 */
			Invalid_Price_Level_Amount,
			/** 18 */
			Invalid_Price_Level_Percentage,
			/** 19 */
			Invalid_Price,
			/** 20 */
			Invalid_Current_Cost,
			/** 21 */
			Invalid_Standard_Cost,
			/** 22 */
			Invalid_Rounding_Policy,
			/** 23 */
			Invalid_Rounding_Option,
			/** 24 */
			Invalid_Rounding_Amount,
			/** 25 */
			Price_Calculation_Error,
			/** 26 */
			Invalid_Discount_Type,
			/** 27 */
			Discount_Type_Invalid_State,
			/** 28 */
			Invalid_Discount,
			/** 29 */
			Invalid_Quantity,
			/** 30 */
			Invalid_Pricing_Precision,
			/** 31 */
			Missing_Product_Default_UOM,
			/** 32 */
			Missing_Product_UOM_Schedule_,
			/** 33 */
			Inactive_Discount_Type,
			/** 34 */
			Invalid_Price_Level_Currency,
			/** 35 */
			Price_Attribute_Out_Of_Range,
			/** 36 */
			Base_Currency_Attribute_Overflow,
			/** 37 */
			Base_Currency_Attribute_Underflow,
			/** 38 */
			Transaction_currency_is_not_set_for_the_product_price_list_item
		}
		enum ShippingMethodCode {
			/** 1 */
			Airborne,
			/** 2 */
			DHL,
			/** 3 */
			FedEx,
			/** 4 */
			UPS,
			/** 5 */
			Postal_Mail,
			/** 6 */
			Full_Load,
			/** 7 */
			Will_Call
		}
		enum ShipTo_FreightTermsCode {
			/** 1 */
			Default_Value
		}
		enum SkipPriceCalculation {
			/** 0 */
			DoPriceCalcAlways,
			/** 1 */
			SkipPriceCalcOnRetrieve
		}
		enum StateCode {
			/** 0 */
			Draft,
			/** 1 */
			Active,
			/** 2 */
			Won,
			/** 3 */
			Closed
		}
		enum StatusCode {
			/** 2,1 */
			In_Progress,
			/** 3 */
			Open,
			/** 4 */
			Won,
			/** 5 */
			Lost,
			/** 6 */
			Canceled,
			/** 7 */
			Revised
		}
        enum RollupState {
            /** 0 - Attribute value is yet to be calculated */
            NotCalculated,
            /** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
            Calculated,
            /** 2 - Attribute value calculation lead to overflow error */
            OverflowError,
            /** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
            OtherError,
            /** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
            RetryLimitExceeded,
            /** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
            HierarchicalRecursionLimitReached,
            /** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
            LoopDetected
        }
	}
}
//{'JsForm':['Quote'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}