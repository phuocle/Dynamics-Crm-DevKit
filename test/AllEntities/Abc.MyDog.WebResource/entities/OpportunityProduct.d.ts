//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormOpportunityProduct_Field_Service_Information {
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
			tab_2_section_3: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			pricing: DevKit.Controls.Section;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the total price of the opportunity product, based on the price per unit, volume discount, and quantity. */
			BaseAmount: DevKit.Controls.Money;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Shows the total amount due for the opportunity product, calculated on the Amount value minus the Manual Discount amount. */
			ExtendedAmount: DevKit.Controls.Money;
			/** Select whether the pricing on the opportunity product reflects an override of the product catalog pricing. */
			IsPriceOverridden: DevKit.Controls.Boolean;
			/** For system use only. */
			IsProductOverridden: DevKit.Controls.Boolean;
			/** Type the manual discount amount for the opportunity product to deduct any negotiated or other savings from the product total. */
			ManualDiscountAmount: DevKit.Controls.Money;
			/** Enter the duration of the agreement */
			msdyn_Duration: DevKit.Controls.Integer;
			/** Enter the end date of the agreement */
			msdyn_enddate: DevKit.Controls.Date;
			/** The field to distinguish the order lines to be of project service or field service */
			msdyn_LineType: DevKit.Controls.OptionSet;
			/** Select a price list for the opportunity line */
			msdyn_pricelist: DevKit.Controls.Lookup;
			/** Select the service account for the opportunity line */
			msdyn_serviceaccount: DevKit.Controls.Lookup;
			/** Start date of the Agreement */
			msdyn_startdate: DevKit.Controls.Date;
			/** Unique identifier of the opportunity with which the opportunity product is associated. */
			OpportunityId: DevKit.Controls.Lookup;
			/** Shows the price per unit of the opportunity product, based on the price list specified on the parent opportunity. */
			PricePerUnit: DevKit.Controls.Money;
			/** Type a detailed product description or additional notes about the opportunity product, such as talking points or product updates, that will assist the sales team when they discuss the product with the customer. */
			ProductDescription: DevKit.Controls.String;
			/** Choose the product to include on the opportunity to link the product's pricing and other information to the opportunity. */
			ProductId: DevKit.Controls.Lookup;
			/** Product Type */
			ProductTypeCode: DevKit.Controls.OptionSet;
			/** Type the amount or quantity of the product the customer would like to purchase. */
			Quantity: DevKit.Controls.Decimal;
			/** Type the tax amount to be applied on the opportunity product. */
			Tax: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Controls.Lookup;
			/** Shows the discount amount per unit if a specified volume is purchased. Configure volume discounts in the Product Catalog in the Settings area. */
			VolumeDiscountAmount: DevKit.Controls.Money;
		}
	}
	class FormOpportunityProduct_Field_Service_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form OpportunityProduct_Field_Service_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form OpportunityProduct_Field_Service_Information */
		Body: MyDog.FormOpportunityProduct_Field_Service_Information.Body;
	}
	namespace FormOpportunityProduct_Information {
		interface tab_general_Sections {
			opportunity_product_information: DevKit.Controls.Section;
			pricing: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the total price of the opportunity product, based on the price per unit, volume discount, and quantity. */
			BaseAmount: DevKit.Controls.Money;
			/** Shows the total amount due for the opportunity product, calculated on the Amount value minus the Manual Discount amount. */
			ExtendedAmount: DevKit.Controls.Money;
			/** Select whether the pricing on the opportunity product reflects an override of the product catalog pricing. */
			IsPriceOverridden: DevKit.Controls.Boolean;
			/** For system use only. */
			IsProductOverridden: DevKit.Controls.Boolean;
			/** Type the manual discount amount for the opportunity product to deduct any negotiated or other savings from the product total. */
			ManualDiscountAmount: DevKit.Controls.Money;
			/** Shows the price per unit of the opportunity product, based on the price list specified on the parent opportunity. */
			PricePerUnit: DevKit.Controls.Money;
			/** Type a detailed product description or additional notes about the opportunity product, such as talking points or product updates, that will assist the sales team when they discuss the product with the customer. */
			ProductDescription: DevKit.Controls.String;
			/** Choose the product to include on the opportunity to link the product's pricing and other information to the opportunity. */
			ProductId: DevKit.Controls.Lookup;
			/** Type the amount or quantity of the product the customer would like to purchase. */
			Quantity: DevKit.Controls.Decimal;
			/** Type the tax amount to be applied on the opportunity product. */
			Tax: DevKit.Controls.Money;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Controls.Lookup;
			/** Shows the discount amount per unit if a specified volume is purchased. Configure volume discounts in the Product Catalog in the Settings area. */
			VolumeDiscountAmount: DevKit.Controls.Money;
		}
	}
	class FormOpportunityProduct_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form OpportunityProduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form OpportunityProduct_Information */
		Body: MyDog.FormOpportunityProduct_Information.Body;
	}
	namespace FormOpportunityProduct {
		interface tab_general_Sections {
			opportunity_product_information: DevKit.Controls.Section;
			pricing: DevKit.Controls.Section;
		}
		interface tab_editproductpropertiesinlinetab_Sections {
			productpropertiessection: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_editproductpropertiesinlinetab extends DevKit.Controls.ITab {
			Section: tab_editproductpropertiesinlinetab_Sections;
		}
		interface Tabs {
			general: tab_general;
			editproductpropertiesinlinetab: tab_editproductpropertiesinlinetab;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the total price of the opportunity product, based on the price per unit, volume discount, and quantity. */
			BaseAmount: DevKit.Controls.Money;
			/** Shows the total amount due for the opportunity product, calculated on the Amount value minus the Manual Discount amount. */
			ExtendedAmount: DevKit.Controls.Money;
			/** Select whether the pricing on the opportunity product reflects an override of the product catalog pricing. */
			IsPriceOverridden: DevKit.Controls.Boolean;
			/** For system use only. */
			IsProductOverridden: DevKit.Controls.Boolean;
			/** Type the manual discount amount for the opportunity product to deduct any negotiated or other savings from the product total. */
			ManualDiscountAmount: DevKit.Controls.Money;
			/** Unique identifier of the opportunity with which the opportunity product is associated. */
			OpportunityId: DevKit.Controls.Lookup;
			/** Shows the price per unit of the opportunity product, based on the price list specified on the parent opportunity. */
			PricePerUnit: DevKit.Controls.Money;
			/** Type a detailed product description or additional notes about the opportunity product, such as talking points or product updates, that will assist the sales team when they discuss the product with the customer. */
			ProductDescription: DevKit.Controls.String;
			/** Choose the product to include on the opportunity to link the product's pricing and other information to the opportunity. */
			ProductId: DevKit.Controls.Lookup;
			/** Type the amount or quantity of the product the customer would like to purchase. */
			Quantity: DevKit.Controls.Decimal;
			/** Type the tax amount to be applied on the opportunity product. */
			Tax: DevKit.Controls.Money;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Controls.Lookup;
			/** Shows the discount amount per unit if a specified volume is purchased. Configure volume discounts in the Product Catalog in the Settings area. */
			VolumeDiscountAmount: DevKit.Controls.Money;
		}
	}
	class FormOpportunityProduct extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form OpportunityProduct
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form OpportunityProduct */
		Body: MyDog.FormOpportunityProduct.Body;
	}
	namespace FormOpportunityProduct_Project_Information {
		interface tab_ProjectGeneralTab_Sections {
			ProjectSection: DevKit.Controls.Section;
		}
		interface tab_ProductGeneralTab_Sections {
			opportunity_product_information: DevKit.Controls.Section;
			pricing: DevKit.Controls.Section;
		}
		interface tab_ProjectGeneralTab extends DevKit.Controls.ITab {
			Section: tab_ProjectGeneralTab_Sections;
		}
		interface tab_ProductGeneralTab extends DevKit.Controls.ITab {
			Section: tab_ProductGeneralTab_Sections;
		}
		interface Tabs {
			ProjectGeneralTab: tab_ProjectGeneralTab;
			ProductGeneralTab: tab_ProductGeneralTab;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the total price of the opportunity product, based on the price per unit, volume discount, and quantity. */
			BaseAmount: DevKit.Controls.Money;
			/** Shows the total amount due for the opportunity product, calculated on the Amount value minus the Manual Discount amount. */
			ExtendedAmount: DevKit.Controls.Money;
			/** Select whether the pricing on the opportunity product reflects an override of the product catalog pricing. */
			IsPriceOverridden: DevKit.Controls.Boolean;
			/** For system use only. */
			IsProductOverridden: DevKit.Controls.Boolean;
			/** Type the manual discount amount for the opportunity product to deduct any negotiated or other savings from the product total. */
			ManualDiscountAmount: DevKit.Controls.Money;
			/** Billing method for the project opportunity line. Valid values are Time and Material and Fixed Price */
			msdyn_BillingMethod: DevKit.Controls.OptionSet;
			/** Enter the customer budget amount for this opportunity line. */
			msdyn_BudgetAmount: DevKit.Controls.Money;
			/** Enter the customer budget amount for this opportunity line. */
			msdyn_BudgetAmount_1: DevKit.Controls.Money;
			/** The field to distinguish the order lines to be of project service or field service */
			msdyn_LineType: DevKit.Controls.OptionSet;
			/** Unique identifier of the opportunity with which the opportunity product is associated. */
			OpportunityId: DevKit.Controls.Lookup;
			/** Unique identifier of the opportunity with which the opportunity product is associated. */
			OpportunityId_1: DevKit.Controls.Lookup;
			/** Shows the price per unit of the opportunity product, based on the price list specified on the parent opportunity. */
			PricePerUnit: DevKit.Controls.Money;
			/** Type a detailed product description or additional notes about the opportunity product, such as talking points or product updates, that will assist the sales team when they discuss the product with the customer. */
			ProductDescription: DevKit.Controls.String;
			/** Type a detailed product description or additional notes about the opportunity product, such as talking points or product updates, that will assist the sales team when they discuss the product with the customer. */
			ProductDescription_1: DevKit.Controls.String;
			/** Choose the product to include on the opportunity to link the product's pricing and other information to the opportunity. */
			ProductId: DevKit.Controls.Lookup;
			/** Product Type */
			ProductTypeCode: DevKit.Controls.OptionSet;
			/** Product Type */
			ProductTypeCode_1: DevKit.Controls.OptionSet;
			/** Product Type */
			ProductTypeCode_2: DevKit.Controls.OptionSet;
			/** Type the amount or quantity of the product the customer would like to purchase. */
			Quantity: DevKit.Controls.Decimal;
			/** Type the tax amount to be applied on the opportunity product. */
			Tax: DevKit.Controls.Money;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Controls.Lookup;
			/** Shows the discount amount per unit if a specified volume is purchased. Configure volume discounts in the Product Catalog in the Settings area. */
			VolumeDiscountAmount: DevKit.Controls.Money;
		}
	}
	class FormOpportunityProduct_Project_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form OpportunityProduct_Project_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form OpportunityProduct_Project_Information */
		Body: MyDog.FormOpportunityProduct_Project_Information.Body;
	}
}
declare namespace OptionSet {
	namespace OpportunityProduct {
		enum msdyn_BillingMethod {
			/** 192350001 */
			Fixed_Price,
			/** 192350000 */
			Time_and_Material
		}
		enum msdyn_LineType {
			/** 690970001 */
			Field_Service_Line,
			/** 690970000 */
			Project_Service_Line
		}
		enum OpportunityStateCode {
		}
		enum PricingErrorCode {
			/** 36 */
			Base_Currency_Attribute_Overflow,
			/** 37 */
			Base_Currency_Attribute_Underflow,
			/** 1 */
			Detail_Error,
			/** 27 */
			Discount_Type_Invalid_State,
			/** 33 */
			Inactive_Discount_Type,
			/** 3 */
			Inactive_Price_Level,
			/** 20 */
			Invalid_Current_Cost,
			/** 28 */
			Invalid_Discount,
			/** 26 */
			Invalid_Discount_Type,
			/** 19 */
			Invalid_Price,
			/** 17 */
			Invalid_Price_Level_Amount,
			/** 34 */
			Invalid_Price_Level_Currency,
			/** 18 */
			Invalid_Price_Level_Percentage,
			/** 9 */
			Invalid_Pricing_Code,
			/** 30 */
			Invalid_Pricing_Precision,
			/** 7 */
			Invalid_Product,
			/** 29 */
			Invalid_Quantity,
			/** 24 */
			Invalid_Rounding_Amount,
			/** 23 */
			Invalid_Rounding_Option,
			/** 22 */
			Invalid_Rounding_Policy,
			/** 21 */
			Invalid_Standard_Cost,
			/** 15 */
			Missing_Current_Cost,
			/** 14 */
			Missing_Price,
			/** 2 */
			Missing_Price_Level,
			/** 12 */
			Missing_Price_Level_Amount,
			/** 13 */
			Missing_Price_Level_Percentage,
			/** 8 */
			Missing_Pricing_Code,
			/** 6 */
			Missing_Product,
			/** 31 */
			Missing_Product_Default_UOM,
			/** 32 */
			Missing_Product_UOM_Schedule_,
			/** 4 */
			Missing_Quantity,
			/** 16 */
			Missing_Standard_Cost,
			/** 5 */
			Missing_Unit_Price,
			/** 10 */
			Missing_UOM,
			/** 0 */
			None,
			/** 35 */
			Price_Attribute_Out_Of_Range,
			/** 25 */
			Price_Calculation_Error,
			/** 11 */
			Product_Not_In_Price_Level,
			/** 38 */
			Transaction_currency_is_not_set_for_the_product_price_list_item
		}
		enum ProductTypeCode {
			/** 2 */
			Bundle,
			/** 4 */
			Optional_Bundle_Product,
			/** 1 */
			Product,
			/** 5 */
			Project_based_Service,
			/** 3 */
			Required_Bundle_Product
		}
		enum PropertyConfigurationStatus {
			/** 0 */
			Edit,
			/** 2 */
			Not_Configured,
			/** 1 */
			Rectify
		}
		enum SkipPriceCalculation {
			/** 0 */
			DoPriceCalcAlways,
			/** 1 */
			SkipPriceCalcOnCreate,
			/** 2 */
			SkipPriceCalcOnUpdate,
			/** 3 */
			SkipPriceCalcOnUpSert
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
//{'JsForm':['Field Service Information','Information','OpportunityProduct','Project Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}