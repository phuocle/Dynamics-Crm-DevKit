//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormOpportunityProduct_Information {
		interface tab_general_Sections {
			opportunity_product_information: DevKit.Form.Controls.ControlSection;
			pricing: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the total price of the opportunity product, based on the price per unit, volume discount, and quantity. */
			BaseAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total amount due for the opportunity product, calculated on the Amount value minus the Manual Discount amount. */
			ExtendedAmount: DevKit.Form.Controls.ControlMoney;
			/** Select whether the pricing on the opportunity product reflects an override of the product catalog pricing. */
			IsPriceOverridden: DevKit.Form.Controls.ControlBoolean;
			/** For system use only. */
			IsProductOverridden: DevKit.Form.Controls.ControlBoolean;
			/** Type the manual discount amount for the opportunity product to deduct any negotiated or other savings from the product total. */
			ManualDiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the price per unit of the opportunity product, based on the price list specified on the parent opportunity. */
			PricePerUnit: DevKit.Form.Controls.ControlMoney;
			/** Type a detailed product description or additional notes about the opportunity product, such as talking points or product updates, that will assist the sales team when they discuss the product with the customer. */
			ProductDescription: DevKit.Form.Controls.ControlString;
			/** Choose the product to include on the opportunity to link the product's pricing and other information to the opportunity. */
			ProductId: DevKit.Form.Controls.ControlLookup;
			/** Type the amount or quantity of the product the customer would like to purchase. */
			Quantity: DevKit.Form.Controls.ControlDecimal;
			/** Type the tax amount to be applied on the opportunity product. */
			Tax: DevKit.Form.Controls.ControlMoney;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Form.Controls.ControlLookup;
			/** Shows the discount amount per unit if a specified volume is purchased. Configure volume discounts in the Product Catalog in the Settings area. */
			VolumeDiscountAmount: DevKit.Form.Controls.ControlMoney;
		}
	}
	class FormOpportunityProduct_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form OpportunityProduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form OpportunityProduct_Information */
		Body: LuckyMokey.FormOpportunityProduct_Information.Body;
	}
	namespace FormOpportunityProduct {
		interface tab_general_Sections {
			opportunity_product_information: DevKit.Form.Controls.ControlSection;
			pricing: DevKit.Form.Controls.ControlSection;
		}
		interface tab_editproductpropertiesinlinetab_Sections {
			productpropertiessection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab_editproductpropertiesinlinetab extends DevKit.Form.Controls.IControlTab {
			Section: tab_editproductpropertiesinlinetab_Sections;
		}
		interface Tabs {
			general: tab_general;
			editproductpropertiesinlinetab: tab_editproductpropertiesinlinetab;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the total price of the opportunity product, based on the price per unit, volume discount, and quantity. */
			BaseAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total amount due for the opportunity product, calculated on the Amount value minus the Manual Discount amount. */
			ExtendedAmount: DevKit.Form.Controls.ControlMoney;
			/** Select whether the pricing on the opportunity product reflects an override of the product catalog pricing. */
			IsPriceOverridden: DevKit.Form.Controls.ControlBoolean;
			/** For system use only. */
			IsProductOverridden: DevKit.Form.Controls.ControlBoolean;
			/** Type the manual discount amount for the opportunity product to deduct any negotiated or other savings from the product total. */
			ManualDiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Unique identifier of the opportunity with which the opportunity product is associated. */
			OpportunityId: DevKit.Form.Controls.ControlLookup;
			/** Shows the price per unit of the opportunity product, based on the price list specified on the parent opportunity. */
			PricePerUnit: DevKit.Form.Controls.ControlMoney;
			/** Type a detailed product description or additional notes about the opportunity product, such as talking points or product updates, that will assist the sales team when they discuss the product with the customer. */
			ProductDescription: DevKit.Form.Controls.ControlString;
			/** Choose the product to include on the opportunity to link the product's pricing and other information to the opportunity. */
			ProductId: DevKit.Form.Controls.ControlLookup;
			/** Type the amount or quantity of the product the customer would like to purchase. */
			Quantity: DevKit.Form.Controls.ControlDecimal;
			/** Type the tax amount to be applied on the opportunity product. */
			Tax: DevKit.Form.Controls.ControlMoney;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Form.Controls.ControlLookup;
			/** Shows the discount amount per unit if a specified volume is purchased. Configure volume discounts in the Product Catalog in the Settings area. */
			VolumeDiscountAmount: DevKit.Form.Controls.ControlMoney;
		}
	}
	class FormOpportunityProduct extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form OpportunityProduct
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form OpportunityProduct */
		Body: LuckyMokey.FormOpportunityProduct.Body;
	}
}
declare namespace OptionSet {
	namespace OpportunityProduct {
		enum msdyn_BillingMethod {
			/** 192350000 */
			Time_and_Material,
			/** 192350001 */
			Fixed_Price
		}
		enum msdyn_LineType {
			/** 690970000 */
			Project_Service_Line,
			/** 690970001 */
			Field_Service_Line
		}
		enum OpportunityStateCode {
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
		enum ProductTypeCode {
			/** 1 */
			Product,
			/** 2 */
			Bundle,
			/** 3 */
			Required_Bundle_Product,
			/** 4 */
			Optional_Bundle_Product,
			/** 5 */
			Project_based_Service
		}
		enum PropertyConfigurationStatus {
			/** 0 */
			Edit,
			/** 1 */
			Rectify,
			/** 2 */
			Not_Configured
		}
		enum SkipPriceCalculation {
			/** 0 */
			DoPriceCalcAlways,
			/** 1 */
			SkipPriceCalcOnCreate,
			/** 2 */
			SkipPriceCalcOnUpdate
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
//{'JsForm':['Information','OpportunityProduct'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}