//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormQuoteDetail_Information {
		interface tab_general_Sections {
			quote_detail_information: DevKit.Form.Controls.ControlSection;
			pricing: DevKit.Form.Controls.ControlSection;
		}
		interface tab_delivery_Sections {
			delivery_information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_address_Sections {
			ship_to_address: DevKit.Form.Controls.ControlSection;
		}
		interface tab_editproductpropertiesinlinetab_Sections {
			productpropertiessection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab_delivery extends DevKit.Form.Controls.IControlTab {
			Section: tab_delivery_Sections;
		}
		interface tab_address extends DevKit.Form.Controls.IControlTab {
			Section: tab_address_Sections;
		}
		interface tab_editproductpropertiesinlinetab extends DevKit.Form.Controls.IControlTab {
			Section: tab_editproductpropertiesinlinetab_Sections;
		}
		interface Tabs {
			general: tab_general;
			delivery: tab_delivery;
			address: tab_address;
			editproductpropertiesinlinetab: tab_editproductpropertiesinlinetab;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the total price of the quote product, based on the price per unit, volume discount, and quantity. */
			BaseAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total amount due for the quote product, based on the sum of the unit price, quantity, discounts ,and tax. */
			ExtendedAmount: DevKit.Form.Controls.ControlMoney;
			/** Select whether the price per unit is fixed at the value in the specified price list or can be overridden by users who have edit rights to the quote product. */
			IsPriceOverridden: DevKit.Form.Controls.ControlBoolean;
			/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the quote. */
			IsProductOverridden: DevKit.Form.Controls.ControlBoolean;
			/** Type the manual discount amount for the quote product to deduct any negotiated or other savings from the product total on the quote. */
			ManualDiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** The field to distinguish the quote lines to be of project service or field service */
			msdyn_LineType: DevKit.Form.Controls.ControlOptionSet;
			/** Type the price per unit of the quote product. The default is to the value in the price list specified on the quote for existing products. */
			PricePerUnit: DevKit.Form.Controls.ControlMoney;
			/** Type a name or description to identify the type of write-in product included in the quote. */
			ProductDescription: DevKit.Form.Controls.ControlString;
			/** Choose the product to include on the quote to link the product's pricing and other information to the quote. */
			ProductId: DevKit.Form.Controls.ControlLookup;
			editpropertiescontrol: DevKit.Form.Controls.ControlActionCards;
			/** Type the amount or quantity of the product requested by the customer. */
			Quantity: DevKit.Form.Controls.ControlDecimal;
			/** Unique identifier of the quote for the quote product. */
			QuoteId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the quote for the quote product. */
			QuoteId_1: DevKit.Form.Controls.ControlLookup;
			/** Enter the delivery date requested by the customer for the quote product. */
			RequestDeliveryBy: DevKit.Form.Controls.ControlDate;
			/** Choose the user responsible for the sale of the quote product. */
			SalesRepId: DevKit.Form.Controls.ControlLookup;
			/** Type the city for the customer's shipping address. */
			ShipTo_City: DevKit.Form.Controls.ControlString;
			/** Type the primary contact name at the customer's shipping address. */
			ShipTo_ContactName: DevKit.Form.Controls.ControlString;
			/** Type the country or region for the customer's shipping address. */
			ShipTo_Country: DevKit.Form.Controls.ControlString;
			/** Type the fax number for the customer's shipping address. */
			ShipTo_Fax: DevKit.Form.Controls.ControlString;
			/** Select the freight terms to make sure shipping orders are processed correctly. */
			ShipTo_FreightTermsCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type the first line of the customer's shipping address. */
			ShipTo_Line1: DevKit.Form.Controls.ControlString;
			/** Type the second line of the customer's shipping address. */
			ShipTo_Line2: DevKit.Form.Controls.ControlString;
			/** Type the third line of the shipping address. */
			ShipTo_Line3: DevKit.Form.Controls.ControlString;
			/** Type a name for the customer's shipping address, such as "Headquarters" or "Field office",  to identify the address. */
			ShipTo_Name: DevKit.Form.Controls.ControlString;
			/** Type the ZIP Code or postal code for the shipping address. */
			ShipTo_PostalCode: DevKit.Form.Controls.ControlString;
			/** Type the state or province for the shipping address. */
			ShipTo_StateOrProvince: DevKit.Form.Controls.ControlString;
			/** Type the phone number for the customer's shipping address. */
			ShipTo_Telephone: DevKit.Form.Controls.ControlString;
			/** Type the tax amount for the quote product. */
			Tax: DevKit.Form.Controls.ControlMoney;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Form.Controls.ControlLookup;
			/** Shows the discount amount per unit if a specified volume is purchased. Configure volume discounts in the Product Catalog in the Settings area. */
			VolumeDiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Select whether the quote product should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class FormQuoteDetail_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form QuoteDetail_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form QuoteDetail_Information */
		Body: LuckyMokey.FormQuoteDetail_Information.Body;
	}
	namespace FormQuoteDetail {
		interface tab_general_Sections {
			quote_detail_information: DevKit.Form.Controls.ControlSection;
			pricing: DevKit.Form.Controls.ControlSection;
			delivery_information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Select whether the price per unit is fixed at the value in the specified price list or can be overridden by users who have edit rights to the quote product. */
			IsPriceOverridden: DevKit.Form.Controls.ControlBoolean;
			/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the quote. */
			IsProductOverridden: DevKit.Form.Controls.ControlBoolean;
			/** Type the manual discount amount for the quote product to deduct any negotiated or other savings from the product total on the quote. */
			ManualDiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Type the price per unit of the quote product. The default is to the value in the price list specified on the quote for existing products. */
			PricePerUnit: DevKit.Form.Controls.ControlMoney;
			/** Type a name or description to identify the type of write-in product included in the quote. */
			ProductDescription: DevKit.Form.Controls.ControlString;
			/** Choose the product to include on the quote to link the product's pricing and other information to the quote. */
			ProductId: DevKit.Form.Controls.ControlLookup;
			/** Type the amount or quantity of the product requested by the customer. */
			Quantity: DevKit.Form.Controls.ControlDecimal;
			/** Unique identifier of the quote for the quote product. */
			QuoteId: DevKit.Form.Controls.ControlLookup;
			/** Enter the delivery date requested by the customer for the quote product. */
			RequestDeliveryBy: DevKit.Form.Controls.ControlDate;
			/** Choose the user responsible for the sale of the quote product. */
			SalesRepId: DevKit.Form.Controls.ControlLookup;
			/** Type the city for the customer's shipping address. */
			ShipTo_City: DevKit.Form.Controls.ControlString;
			/** Type the primary contact name at the customer's shipping address. */
			ShipTo_ContactName: DevKit.Form.Controls.ControlString;
			/** Type the country or region for the customer's shipping address. */
			ShipTo_Country: DevKit.Form.Controls.ControlString;
			/** Type the fax number for the customer's shipping address. */
			ShipTo_Fax: DevKit.Form.Controls.ControlString;
			/** Select the freight terms to make sure shipping orders are processed correctly. */
			ShipTo_FreightTermsCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type the first line of the customer's shipping address. */
			ShipTo_Line1: DevKit.Form.Controls.ControlString;
			/** Type a name for the customer's shipping address, such as "Headquarters" or "Field office",  to identify the address. */
			ShipTo_Name: DevKit.Form.Controls.ControlString;
			/** Type the ZIP Code or postal code for the shipping address. */
			ShipTo_PostalCode: DevKit.Form.Controls.ControlString;
			/** Type the state or province for the shipping address. */
			ShipTo_StateOrProvince: DevKit.Form.Controls.ControlString;
			/** Type the phone number for the customer's shipping address. */
			ShipTo_Telephone: DevKit.Form.Controls.ControlString;
			/** Type the tax amount for the quote product. */
			Tax: DevKit.Form.Controls.ControlMoney;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Form.Controls.ControlLookup;
			/** Select whether the quote product should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class FormQuoteDetail extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form QuoteDetail
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form QuoteDetail */
		Body: LuckyMokey.FormQuoteDetail.Body;
	}
}
declare namespace OptionSet {
	namespace QuoteDetail {
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
		enum QuoteStateCode {
		}
		enum ShipTo_FreightTermsCode {
			/** 1 */
			FOB,
			/** 2 */
			No_Charge
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
//{'JsForm':['Information','QuoteDetail'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}