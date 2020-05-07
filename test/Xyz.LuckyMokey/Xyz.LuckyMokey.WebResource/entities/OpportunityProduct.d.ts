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
	namespace FormOpportunityProduct {
		interface tab_newOpportunityProduct_Sections {
			opportunity_product_information: DevKit.Form.Controls.ControlSection;
			pricing: DevKit.Form.Controls.ControlSection;
		}
		interface tab_newOpportunityProduct extends DevKit.Form.Controls.IControlTab {
			Section: tab_newOpportunityProduct_Sections;
		}
		interface Tabs {
			newOpportunityProduct: tab_newOpportunityProduct;
		}
		interface Body {
			Tab: Tabs;
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
	class OpportunityProductApi {
		/**
		* DynamicsCrm.DevKit OpportunityProductApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Shows the total price of the opportunity product, based on the price per unit, volume discount, and quantity. */
		BaseAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Amount in base currency. */
		BaseAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the opportunity product, such as manufacturing details. */
		Description: DevKit.WebApi.StringValue;
		/** The default image for the entity. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the total amount due for the opportunity product, calculated on the Amount value minus the Manual Discount amount. */
		ExtendedAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Extended Amount in base currency. */
		ExtendedAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Select whether the pricing on the opportunity product reflects an override of the product catalog pricing. */
		IsPriceOverridden: DevKit.WebApi.BooleanValue;
		/** For system use only. */
		IsProductOverridden: DevKit.WebApi.BooleanValue;
		/** Type the line item number for the opportunity product to easily identify the product in the opportunity documents and make sure it's listed in the correct order. */
		LineItemNumber: DevKit.WebApi.IntegerValue;
		/** Type the manual discount amount for the opportunity product to deduct any negotiated or other savings from the product total. */
		ManualDiscountAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Manual Discount Amount in base currency. */
		ManualDiscountAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the opportunityproduct. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Billing method for the project opportunity line. Valid values are Time and Material and Fixed Price */
		msdyn_BillingMethod: DevKit.WebApi.OptionSetValue;
		/** Enter the customer budget amount for this opportunity line. */
		msdyn_BudgetAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Budget Amount in base currency. */
		msdyn_budgetamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the total cost price of the product based on the cost price per unit and quantity. */
		msdyn_CostAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Cost Amount in base currency. */
		msdyn_costamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Cost price per unit of the product. The default is the cost price of the product. */
		msdyn_CostPricePerUnit: DevKit.WebApi.MoneyValue;
		/** Value of the Cost Price Per Unit in base currency. */
		msdyn_costpriceperunit_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Enter the duration of the agreement */
		msdyn_Duration: DevKit.WebApi.IntegerValue;
		/** Enter the end date of the agreement */
		msdyn_enddate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** The field to distinguish the order lines to be of project service or field service */
		msdyn_LineType: DevKit.WebApi.OptionSetValue;
		/** Select a price list for the opportunity line */
		msdyn_pricelist: DevKit.WebApi.LookupValue;
		/** Select the project for this opportunity line. */
		msdyn_Project: DevKit.WebApi.LookupValue;
		/** Select the service account for the opportunity line */
		msdyn_serviceaccount: DevKit.WebApi.LookupValue;
		/** Start date of the Agreement */
		msdyn_startdate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the opportunity with which the opportunity product is associated. */
		OpportunityId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the opportunity product. */
		OpportunityProductId: DevKit.WebApi.GuidValue;
		/** Opportunity Product Name. Added for 1:n referential relationship (internal purposes only) */
		OpportunityProductName: DevKit.WebApi.StringValue;
		/** Select the status of the opportunity product. */
		OpportunityStateCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Choose the parent bundle associated with this product */
		ParentBundleId: DevKit.WebApi.GuidValue;
		/** Choose the parent bundle associated with this product */
		ParentBundleIdRef: DevKit.WebApi.LookupValue;
		/** Shows the price per unit of the opportunity product, based on the price list specified on the parent opportunity. */
		PricePerUnit: DevKit.WebApi.MoneyValue;
		/** Value of the Price Per Unit in base currency. */
		PricePerUnit_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the pricing error for the opportunity product. */
		PricingErrorCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the product line item association with bundle in the opportunity */
		ProductAssociationId: DevKit.WebApi.GuidValue;
		/** Type a detailed product description or additional notes about the opportunity product, such as talking points or product updates, that will assist the sales team when they discuss the product with the customer. */
		ProductDescription: DevKit.WebApi.StringValue;
		/** Choose the product to include on the opportunity to link the product's pricing and other information to the opportunity. */
		ProductId: DevKit.WebApi.LookupValue;
		/** Calculated field that will be populated by name and description of the product. */
		ProductName: DevKit.WebApi.StringValue;
		/** Product Type */
		ProductTypeCode: DevKit.WebApi.OptionSetValue;
		/** Status of the property configuration. */
		PropertyConfigurationStatus: DevKit.WebApi.OptionSetValue;
		/** Type the amount or quantity of the product the customer would like to purchase. */
		Quantity: DevKit.WebApi.DecimalValue;
		/** Shows the ID of the data that maintains the sequence. */
		SequenceNumber: DevKit.WebApi.IntegerValue;
		/** Skip price calculation */
		SkipPriceCalculation: DevKit.WebApi.OptionSetValue;
		/** Type the tax amount to be applied on the opportunity product. */
		Tax: DevKit.WebApi.MoneyValue;
		/** Value of the Tax in base currency. */
		Tax_Base: DevKit.WebApi.MoneyValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
		UoMId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Shows the discount amount per unit if a specified volume is purchased. Configure volume discounts in the Product Catalog in the Settings area. */
		VolumeDiscountAmount: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Volume Discount in base currency. */
		VolumeDiscountAmount_Base: DevKit.WebApi.MoneyValueReadonly;
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
//{'JsForm':['Information','OpportunityProduct','OpportunityProduct'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}