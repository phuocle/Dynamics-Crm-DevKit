//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormOpportunityProduct_Field_Service_Information {
		interface tab_general_Sections {
			pricing: DevKit.Controls.Section;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
			tab_2_section_3: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			general: tab_general;
			tab_2: tab_tab_2;
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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormOpportunityProduct_Field_Service_Information extends DevKit.IForm {
		/**
		* Field Service Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form OpportunityProduct_Field_Service_Information */
		Body: DevKit.FormOpportunityProduct_Field_Service_Information.Body;
		/** The Process of form OpportunityProduct_Field_Service_Information */
		Process: DevKit.FormOpportunityProduct_Field_Service_Information.Process;
		/** The SidePanes of form OpportunityProduct_Field_Service_Information */
		SidePanes: DevKit.SidePanes;
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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormOpportunityProduct_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form OpportunityProduct_Information */
		Body: DevKit.FormOpportunityProduct_Information.Body;
		/** The Process of form OpportunityProduct_Information */
		Process: DevKit.FormOpportunityProduct_Information.Process;
		/** The SidePanes of form OpportunityProduct_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormOpportunityProduct {
		interface tab_editproductpropertiesinlinetab_Sections {
			productpropertiessection: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			opportunity_product_information: DevKit.Controls.Section;
			pricing: DevKit.Controls.Section;
		}
		interface tab_editproductpropertiesinlinetab extends DevKit.Controls.ITab {
			Section: tab_editproductpropertiesinlinetab_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			editproductpropertiesinlinetab: tab_editproductpropertiesinlinetab;
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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormOpportunityProduct extends DevKit.IForm {
		/**
		* OpportunityProduct [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form OpportunityProduct */
		Body: DevKit.FormOpportunityProduct.Body;
		/** The Process of form OpportunityProduct */
		Process: DevKit.FormOpportunityProduct.Process;
		/** The SidePanes of form OpportunityProduct */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormOpportunityProduct_Project_Information {
		interface tab_ProductGeneralTab_Sections {
			opportunity_product_information: DevKit.Controls.Section;
			pricing: DevKit.Controls.Section;
		}
		interface tab_ProjectGeneralTab_Sections {
			ProjectSection: DevKit.Controls.Section;
		}
		interface tab_ProductGeneralTab extends DevKit.Controls.ITab {
			Section: tab_ProductGeneralTab_Sections;
		}
		interface tab_ProjectGeneralTab extends DevKit.Controls.ITab {
			Section: tab_ProjectGeneralTab_Sections;
		}
		interface Tabs {
			ProductGeneralTab: tab_ProductGeneralTab;
			ProjectGeneralTab: tab_ProjectGeneralTab;
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
			msdyn_BudgetAmount1: DevKit.Controls.Money;
			/** The field to distinguish the order lines to be of project service or field service */
			msdyn_LineType: DevKit.Controls.OptionSet;
			/** Unique identifier of the opportunity with which the opportunity product is associated. */
			OpportunityId: DevKit.Controls.Lookup;
			/** Unique identifier of the opportunity with which the opportunity product is associated. */
			OpportunityId1: DevKit.Controls.Lookup;
			/** Shows the price per unit of the opportunity product, based on the price list specified on the parent opportunity. */
			PricePerUnit: DevKit.Controls.Money;
			/** Type a detailed product description or additional notes about the opportunity product, such as talking points or product updates, that will assist the sales team when they discuss the product with the customer. */
			ProductDescription: DevKit.Controls.String;
			/** Type a detailed product description or additional notes about the opportunity product, such as talking points or product updates, that will assist the sales team when they discuss the product with the customer. */
			ProductDescription1: DevKit.Controls.String;
			/** Choose the product to include on the opportunity to link the product's pricing and other information to the opportunity. */
			ProductId: DevKit.Controls.Lookup;
			/** Product Type */
			ProductTypeCode: DevKit.Controls.OptionSet;
			/** Product Type */
			ProductTypeCode1: DevKit.Controls.OptionSet;
			/** Product Type */
			ProductTypeCode2: DevKit.Controls.OptionSet;
			/** Type the amount or quantity of the product the customer would like to purchase. */
			Quantity: DevKit.Controls.Decimal;
			/** Type the tax amount to be applied on the opportunity product. */
			Tax: DevKit.Controls.Money;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Controls.Lookup;
			/** Shows the discount amount per unit if a specified volume is purchased. Configure volume discounts in the Product Catalog in the Settings area. */
			VolumeDiscountAmount: DevKit.Controls.Money;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormOpportunityProduct_Project_Information extends DevKit.IForm {
		/**
		* Project Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form OpportunityProduct_Project_Information */
		Body: DevKit.FormOpportunityProduct_Project_Information.Body;
		/** The Process of form OpportunityProduct_Project_Information */
		Process: DevKit.FormOpportunityProduct_Project_Information.Process;
		/** The SidePanes of form OpportunityProduct_Project_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormOpportunityProduct2 {
		interface tab_newOpportunityProduct_Sections {
			opportunity_product_information: DevKit.Controls.Section;
			pricing: DevKit.Controls.Section;
		}
		interface tab_newOpportunityProduct extends DevKit.Controls.ITab {
			Section: tab_newOpportunityProduct_Sections;
		}
		interface Tabs {
			newOpportunityProduct: tab_newOpportunityProduct;
		}
		interface Body {
			Tab: Tabs;
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
		}
	}
	class FormOpportunityProduct2 extends DevKit.IForm {
		/**
		* OpportunityProduct [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form OpportunityProduct2 */
		Body: DevKit.FormOpportunityProduct2.Body;
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Shows the total price of the opportunity product, based on the price per unit, volume discount, and quantity. */
		BaseAmount: number;
		/** Value of the Amount in base currency. */
		readonly BaseAmount_Base: number;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type additional information to describe the opportunity product, such as manufacturing details. */
		Description: string;
		/** The default image for the entity. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Shows the total amount due for the opportunity product, calculated on the Amount value minus the Manual Discount amount. */
		ExtendedAmount: number;
		/** Value of the Extended Amount in base currency. */
		readonly ExtendedAmount_Base: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Select whether the pricing on the opportunity product reflects an override of the product catalog pricing. */
		IsPriceOverridden: boolean;
		/** For system use only. */
		IsProductOverridden: boolean;
		/** Type the line item number for the opportunity product to easily identify the product in the opportunity documents and make sure it's listed in the correct order. */
		LineItemNumber: number;
		/** Type the manual discount amount for the opportunity product to deduct any negotiated or other savings from the product total. */
		ManualDiscountAmount: number;
		/** Value of the Manual Discount Amount in base currency. */
		readonly ManualDiscountAmount_Base: number;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the opportunityproduct. */
		readonly ModifiedOnBehalfBy: string;
		/** Billing method for the project opportunity line. Valid values are Time and Material and Fixed Price */
		msdyn_BillingMethod: OptionSet.OpportunityProduct.msdyn_BillingMethod;
		/** Enter the customer budget amount for this opportunity line. */
		msdyn_BudgetAmount: number;
		/** Value of the Budget Amount in base currency. */
		readonly msdyn_budgetamount_Base: number;
		/** Shows the total cost price of the product based on the cost price per unit and quantity. */
		msdyn_CostAmount: number;
		/** Value of the Cost Amount in base currency. */
		readonly msdyn_costamount_Base: number;
		/** Cost price per unit of the product. The default is the cost price of the product. */
		msdyn_CostPricePerUnit: number;
		/** Value of the Cost Price Per Unit in base currency. */
		readonly msdyn_costpriceperunit_Base: number;
		/** Enter the duration of the agreement */
		msdyn_Duration: number;
		/** Enter the end date of the agreement */
		msdyn_enddate_UtcDateOnly: Date;
		/** The field to distinguish the order lines to be of project service or field service */
		msdyn_LineType: OptionSet.OpportunityProduct.msdyn_LineType;
		/** Select a price list for the opportunity line */
		msdyn_pricelist: string;
		/** Select the project for this opportunity line. */
		msdyn_Project: string;
		/** Select the service account for the opportunity line */
		msdyn_serviceaccount: string;
		/** Start date of the Agreement */
		msdyn_startdate_UtcDateOnly: Date;
		/** Unique identifier of the opportunity with which the opportunity product is associated. */
		OpportunityId: string;
		/** Unique identifier of the opportunity product. */
		OpportunityProductId: string;
		/** Opportunity Product Name. Added for 1:n referential relationship (internal purposes only) */
		OpportunityProductName: string;
		/** Select the status of the opportunity product. */
		readonly OpportunityStateCode: OptionSet.OpportunityProduct.OpportunityStateCode;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Choose the parent bundle associated with this product */
		ParentBundleId: string;
		/** Choose the parent bundle associated with this product */
		ParentBundleIdRef: string;
		/** Shows the price per unit of the opportunity product, based on the price list specified on the parent opportunity. */
		PricePerUnit: number;
		/** Value of the Price Per Unit in base currency. */
		readonly PricePerUnit_Base: number;
		/** Select the pricing error for the opportunity product. */
		PricingErrorCode: OptionSet.OpportunityProduct.PricingErrorCode;
		/** Unique identifier of the product line item association with bundle in the opportunity */
		ProductAssociationId: string;
		/** Type a detailed product description or additional notes about the opportunity product, such as talking points or product updates, that will assist the sales team when they discuss the product with the customer. */
		ProductDescription: string;
		/** Choose the product to include on the opportunity to link the product's pricing and other information to the opportunity. */
		ProductId: string;
		/** Calculated field that will be populated by name and description of the product. */
		ProductName: string;
		/** Product Type */
		ProductTypeCode: OptionSet.OpportunityProduct.ProductTypeCode;
		/** Status of the property configuration. */
		PropertyConfigurationStatus: OptionSet.OpportunityProduct.PropertyConfigurationStatus;
		/** Type the amount or quantity of the product the customer would like to purchase. */
		Quantity: number;
		/** Shows the ID of the data that maintains the sequence. */
		SequenceNumber: number;
		/** Skip price calculation */
		SkipPriceCalculation: OptionSet.OpportunityProduct.SkipPriceCalculation;
		/** Type the tax amount to be applied on the opportunity product. */
		Tax: number;
		/** Value of the Tax in base currency. */
		readonly Tax_Base: number;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
		UoMId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** Shows the discount amount per unit if a specified volume is purchased. Configure volume discounts in the Product Catalog in the Settings area. */
		readonly VolumeDiscountAmount: number;
		/** Value of the Volume Discount in base currency. */
		readonly VolumeDiscountAmount_Base: number;
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
			Missing_Product_UOM_Schedule,
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}