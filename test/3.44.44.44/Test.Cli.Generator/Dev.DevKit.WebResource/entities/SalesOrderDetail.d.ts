//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSalesOrderDetail_Field_Service_Information {
		interface tab_address_Sections {
			ship_to_address: DevKit.Controls.Section;
		}
		interface tab_delivery_Sections {
			delivery_information: DevKit.Controls.Section;
			fulfillment: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			pricing: DevKit.Controls.Section;
			sales_order_detail_information: DevKit.Controls.Section;
		}
		interface tab_servicemaintenanceline_Sections {
			servicemaintenanceline: DevKit.Controls.Section;
		}
		interface tab_address extends DevKit.Controls.ITab {
			Section: tab_address_Sections;
		}
		interface tab_delivery extends DevKit.Controls.ITab {
			Section: tab_delivery_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_servicemaintenanceline extends DevKit.Controls.ITab {
			Section: tab_servicemaintenanceline_Sections;
		}
		interface Tabs {
			address: tab_address;
			delivery: tab_delivery;
			general: tab_general;
			servicemaintenanceline: tab_servicemaintenanceline;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the total price of the order product, based on the price per unit, volume discount, and quantity. */
			BaseAmount: DevKit.Controls.Money;
			/** Shows the total amount due for the order product, based on the sum of the unit price, quantity, discounts, and tax. */
			ExtendedAmount: DevKit.Controls.Money;
			/** Select whether the price per unit is fixed at the value in the specified price list or can be overridden by users who have edit rights to the order product. */
			IsPriceOverridden: DevKit.Controls.Boolean;
			/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the order. */
			IsProductOverridden: DevKit.Controls.Boolean;
			/** Type the manual discount amount for the order product to deduct any negotiated or other savings from the product total on the order. */
			ManualDiscountAmount: DevKit.Controls.Money;
			/** Select a Agreement for this order line */
			msdyn_agreement: DevKit.Controls.Lookup;
			/** The field to distinguish the order lines to be of project service or field service */
			msdyn_LineType: DevKit.Controls.OptionSet;
			/** Type the price per unit of the order product. The default is the value in the price list specified on the order for existing products. */
			PricePerUnit: DevKit.Controls.Money;
			/** Type a name or description to identify the type of write-in product included in the order. */
			ProductDescription: DevKit.Controls.String;
			/** Choose the product to include on the order to link the product's pricing and other information to the parent order. */
			ProductId: DevKit.Controls.Lookup;
			/** Type the amount or quantity of the product ordered by the customer. */
			Quantity: DevKit.Controls.Decimal;
			/** Type the amount or quantity of the product that is back ordered for the order. */
			QuantityBackordered: DevKit.Controls.Decimal;
			/** Type the amount or quantity of the product that was canceled. */
			QuantityCancelled: DevKit.Controls.Decimal;
			/** Type the amount or quantity of the product that was shipped for the order. */
			QuantityShipped: DevKit.Controls.Decimal;
			/** Enter the delivery date requested by the customer for the order product. */
			RequestDeliveryBy: DevKit.Controls.Date;
			/** Choose the user responsible for the sale of the order product. */
			SalesRepId: DevKit.Controls.Lookup;
			/** Type the city for the customer's shipping address. */
			ShipTo_City: DevKit.Controls.String;
			/** Type the primary contact name at the customer's shipping address. */
			ShipTo_ContactName: DevKit.Controls.String;
			/** Type the country or region for the customer's shipping address. */
			ShipTo_Country: DevKit.Controls.String;
			/** Type the fax number for the customer's shipping address. */
			ShipTo_Fax: DevKit.Controls.String;
			/** Select the freight terms to make sure shipping orders are processed correctly. */
			ShipTo_FreightTermsCode: DevKit.Controls.OptionSet;
			/** Type the first line of the customer's shipping address. */
			ShipTo_Line1: DevKit.Controls.String;
			/** Type the second line of the customer's shipping address. */
			ShipTo_Line2: DevKit.Controls.String;
			/** Type the third line of the shipping address. */
			ShipTo_Line3: DevKit.Controls.String;
			/** Type a name for the customer's shipping address, such as "Headquarters" or "Field office",  to identify the address. */
			ShipTo_Name: DevKit.Controls.String;
			/** Type the ZIP Code or postal code for the shipping address. */
			ShipTo_PostalCode: DevKit.Controls.String;
			/** Type the state or province for the shipping address. */
			ShipTo_StateOrProvince: DevKit.Controls.String;
			/** Type the phone number for the customer's shipping address. */
			ShipTo_Telephone: DevKit.Controls.String;
			/** Type the tax amount for the order product. */
			Tax: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Controls.Lookup;
			/** Shows the discount amount per unit if a specified volume is purchased. Configure volume discounts in the Product Catalog in the Settings area. */
			VolumeDiscountAmount: DevKit.Controls.Money;
			/** Select whether the order product should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Controls.Boolean;
		}
		interface Navigation {
			msdyn_salesorderdetail_invoicedetail: DevKit.Controls.NavigationItem,
			SalesOrderDetail_Dynamicpropertyinstance: DevKit.Controls.NavigationItem,
			salesorderdetail_parent_salesorderdetail: DevKit.Controls.NavigationItem,
			salesorderdetail_parentref_salesorderdetail: DevKit.Controls.NavigationItem
		}
	}
	class FormSalesOrderDetail_Field_Service_Information extends DevKit.IForm {
		/**
		* Field Service Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SalesOrderDetail_Field_Service_Information */
		Body: DevKit.FormSalesOrderDetail_Field_Service_Information.Body;
		/** The Navigation of form SalesOrderDetail_Field_Service_Information */
		Navigation: DevKit.FormSalesOrderDetail_Field_Service_Information.Navigation;
		/** The SidePanes of form SalesOrderDetail_Field_Service_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSalesOrderDetail_Information {
		interface tab_address_Sections {
			ship_to_address: DevKit.Controls.Section;
		}
		interface tab_delivery_Sections {
			delivery_information: DevKit.Controls.Section;
			fulfillment: DevKit.Controls.Section;
		}
		interface tab_editproductpropertiesinlinetab_Sections {
			productpropertiessection: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			pricing: DevKit.Controls.Section;
			sales_order_detail_information: DevKit.Controls.Section;
		}
		interface tab_address extends DevKit.Controls.ITab {
			Section: tab_address_Sections;
		}
		interface tab_delivery extends DevKit.Controls.ITab {
			Section: tab_delivery_Sections;
		}
		interface tab_editproductpropertiesinlinetab extends DevKit.Controls.ITab {
			Section: tab_editproductpropertiesinlinetab_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			address: tab_address;
			delivery: tab_delivery;
			editproductpropertiesinlinetab: tab_editproductpropertiesinlinetab;
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the total price of the order product, based on the price per unit, volume discount, and quantity. */
			BaseAmount: DevKit.Controls.Money;
			editpropertiescontrol: DevKit.Controls.ActionCards;
			/** Shows the total amount due for the order product, based on the sum of the unit price, quantity, discounts, and tax. */
			ExtendedAmount: DevKit.Controls.Money;
			/** Select whether the price per unit is fixed at the value in the specified price list or can be overridden by users who have edit rights to the order product. */
			IsPriceOverridden: DevKit.Controls.Boolean;
			/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the order. */
			IsProductOverridden: DevKit.Controls.Boolean;
			/** Type the manual discount amount for the order product to deduct any negotiated or other savings from the product total on the order. */
			ManualDiscountAmount: DevKit.Controls.Money;
			/** The field to distinguish the order lines to be of project service or field service */
			msdyn_LineType: DevKit.Controls.OptionSet;
			/** Type the price per unit of the order product. The default is the value in the price list specified on the order for existing products. */
			PricePerUnit: DevKit.Controls.Money;
			/** Type a name or description to identify the type of write-in product included in the order. */
			ProductDescription: DevKit.Controls.String;
			/** Choose the product to include on the order to link the product's pricing and other information to the parent order. */
			ProductId: DevKit.Controls.Lookup;
			/** Type the amount or quantity of the product ordered by the customer. */
			Quantity: DevKit.Controls.Decimal;
			/** Type the amount or quantity of the product that is back ordered for the order. */
			QuantityBackordered: DevKit.Controls.Decimal;
			/** Type the amount or quantity of the product that was canceled. */
			QuantityCancelled: DevKit.Controls.Decimal;
			/** Type the amount or quantity of the product that was shipped for the order. */
			QuantityShipped: DevKit.Controls.Decimal;
			/** Enter the delivery date requested by the customer for the order product. */
			RequestDeliveryBy: DevKit.Controls.Date;
			/** Shows the order for the product. The ID is used to link product pricing and other details to the total amounts and other information on the order. */
			SalesOrderId: DevKit.Controls.Lookup;
			/** Choose the user responsible for the sale of the order product. */
			SalesRepId: DevKit.Controls.Lookup;
			/** Type the city for the customer's shipping address. */
			ShipTo_City: DevKit.Controls.String;
			/** Type the primary contact name at the customer's shipping address. */
			ShipTo_ContactName: DevKit.Controls.String;
			/** Type the country or region for the customer's shipping address. */
			ShipTo_Country: DevKit.Controls.String;
			/** Type the fax number for the customer's shipping address. */
			ShipTo_Fax: DevKit.Controls.String;
			/** Select the freight terms to make sure shipping orders are processed correctly. */
			ShipTo_FreightTermsCode: DevKit.Controls.OptionSet;
			/** Type the first line of the customer's shipping address. */
			ShipTo_Line1: DevKit.Controls.String;
			/** Type the second line of the customer's shipping address. */
			ShipTo_Line2: DevKit.Controls.String;
			/** Type the third line of the shipping address. */
			ShipTo_Line3: DevKit.Controls.String;
			/** Type a name for the customer's shipping address, such as "Headquarters" or "Field office",  to identify the address. */
			ShipTo_Name: DevKit.Controls.String;
			/** Type the ZIP Code or postal code for the shipping address. */
			ShipTo_PostalCode: DevKit.Controls.String;
			/** Type the state or province for the shipping address. */
			ShipTo_StateOrProvince: DevKit.Controls.String;
			/** Type the phone number for the customer's shipping address. */
			ShipTo_Telephone: DevKit.Controls.String;
			/** Type the tax amount for the order product. */
			Tax: DevKit.Controls.Money;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Controls.Lookup;
			/** Shows the discount amount per unit if a specified volume is purchased. Configure volume discounts in the Product Catalog in the Settings area. */
			VolumeDiscountAmount: DevKit.Controls.Money;
			/** Select whether the order product should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Controls.Boolean;
		}
		interface Navigation {
			msdyn_salesorderdetail_invoicedetail: DevKit.Controls.NavigationItem,
			SalesOrderDetail_Dynamicpropertyinstance: DevKit.Controls.NavigationItem,
			salesorderdetail_parent_salesorderdetail: DevKit.Controls.NavigationItem,
			salesorderdetail_parentref_salesorderdetail: DevKit.Controls.NavigationItem
		}
	}
	class FormSalesOrderDetail_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SalesOrderDetail_Information */
		Body: DevKit.FormSalesOrderDetail_Information.Body;
		/** The Navigation of form SalesOrderDetail_Information */
		Navigation: DevKit.FormSalesOrderDetail_Information.Navigation;
		/** The SidePanes of form SalesOrderDetail_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSalesOrderDetail {
		interface tab_general_Sections {
			delivery: DevKit.Controls.Section;
			pricing: DevKit.Controls.Section;
			sales_order_detail_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			ispriceoverridden: DevKit.Controls.ActionCards;
			isproductoverridden: DevKit.Controls.ActionCards;
			/** Type the manual discount amount for the order product to deduct any negotiated or other savings from the product total on the order. */
			ManualDiscountAmount: DevKit.Controls.Money;
			/** Type the price per unit of the order product. The default is the value in the price list specified on the order for existing products. */
			PricePerUnit: DevKit.Controls.Money;
			/** Type a name or description to identify the type of write-in product included in the order. */
			ProductDescription: DevKit.Controls.String;
			/** Choose the product to include on the order to link the product's pricing and other information to the parent order. */
			ProductId: DevKit.Controls.Lookup;
			/** Type the amount or quantity of the product ordered by the customer. */
			Quantity: DevKit.Controls.Decimal;
			/** Enter the delivery date requested by the customer for the order product. */
			RequestDeliveryBy: DevKit.Controls.Date;
			/** Shows the order for the product. The ID is used to link product pricing and other details to the total amounts and other information on the order. */
			SalesOrderId: DevKit.Controls.Lookup;
			/** Choose the user responsible for the sale of the order product. */
			SalesRepId: DevKit.Controls.Lookup;
			/** Type the city for the customer's shipping address. */
			ShipTo_City: DevKit.Controls.String;
			/** Type the primary contact name at the customer's shipping address. */
			ShipTo_ContactName: DevKit.Controls.String;
			/** Type the country or region for the customer's shipping address. */
			ShipTo_Country: DevKit.Controls.String;
			/** Type the fax number for the customer's shipping address. */
			ShipTo_Fax: DevKit.Controls.String;
			/** Select the freight terms to make sure shipping orders are processed correctly. */
			ShipTo_FreightTermsCode: DevKit.Controls.OptionSet;
			/** Type the first line of the customer's shipping address. */
			ShipTo_Line1: DevKit.Controls.String;
			/** Type a name for the customer's shipping address, such as "Headquarters" or "Field office",  to identify the address. */
			ShipTo_Name: DevKit.Controls.String;
			/** Type the ZIP Code or postal code for the shipping address. */
			ShipTo_PostalCode: DevKit.Controls.String;
			/** Type the state or province for the shipping address. */
			ShipTo_StateOrProvince: DevKit.Controls.String;
			/** Type the phone number for the customer's shipping address. */
			ShipTo_Telephone: DevKit.Controls.String;
			/** Type the tax amount for the order product. */
			Tax: DevKit.Controls.Money;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Controls.Lookup;
			/** Select whether the order product should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Controls.Boolean;
		}
	}
	class FormSalesOrderDetail extends DevKit.IForm {
		/**
		* SalesOrderDetail [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SalesOrderDetail */
		Body: DevKit.FormSalesOrderDetail.Body;
	}
	class SalesOrderDetailApi {
		/**
		* DynamicsCrm.DevKit SalesOrderDetailApi
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
		/** Shows the total price of the order product, based on the price per unit, volume discount, and quantity. */
		BaseAmount: number;
		/** Value of the Amount in base currency. */
		readonly BaseAmount_Base: number;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type additional information to describe the order product, such as manufacturing details or acceptable substitutions. */
		Description: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Shows the total amount due for the order product, based on the sum of the unit price, quantity, discounts, and tax. */
		ExtendedAmount: number;
		/** Value of the Extended Amount in base currency. */
		readonly ExtendedAmount_Base: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Select whether the invoice line item is copied from another item or data source. */
		IsCopied: boolean;
		/** Select whether the price per unit is fixed at the value in the specified price list or can be overridden by users who have edit rights to the order product. */
		IsPriceOverridden: boolean;
		/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the order. */
		IsProductOverridden: boolean;
		/** Type the line item number for the order product to easily identify the product in the order and make sure it's listed in the correct sequence. */
		LineItemNumber: number;
		/** Type the manual discount amount for the order product to deduct any negotiated or other savings from the product total on the order. */
		ManualDiscountAmount: number;
		/** Value of the Manual Discount in base currency. */
		readonly ManualDiscountAmount_Base: number;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Select a Agreement for this order line */
		msdyn_agreement: string;
		/** The field to distinguish the order lines to be of project service or field service */
		msdyn_LineType: OptionSet.SalesOrderDetail.msdyn_LineType;
		OrderCreationMethod: OptionSet.SalesOrderDetail.OrderCreationMethod;
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
		/** Type the price per unit of the order product. The default is the value in the price list specified on the order for existing products. */
		PricePerUnit: number;
		/** Value of the Price Per Unit in base currency. */
		readonly PricePerUnit_Base: number;
		/** Select the type of pricing error, such as a missing or invalid product, or missing quantity. */
		PricingErrorCode: OptionSet.SalesOrderDetail.PricingErrorCode;
		/** Unique identifier of the product line item association with bundle in the sales order */
		ProductAssociationId: string;
		/** Type a name or description to identify the type of write-in product included in the order. */
		ProductDescription: string;
		/** Choose the product to include on the order to link the product's pricing and other information to the parent order. */
		ProductId: string;
		/** Calculated field that will be populated by name and description of the product. */
		ProductName: string;
		/** User-defined product ID. */
		readonly ProductNumber: string;
		/** Product Type */
		ProductTypeCode: OptionSet.SalesOrderDetail.ProductTypeCode;
		/** Status of the property configuration. */
		PropertyConfigurationStatus: OptionSet.SalesOrderDetail.PropertyConfigurationStatus;
		/** Type the amount or quantity of the product ordered by the customer. */
		Quantity: number;
		/** Type the amount or quantity of the product that is back ordered for the order. */
		QuantityBackordered: number;
		/** Type the amount or quantity of the product that was canceled. */
		QuantityCancelled: number;
		/** Type the amount or quantity of the product that was shipped for the order. */
		QuantityShipped: number;
		/** Unique identifier for Quote Line associated with Order Line. */
		QuoteDetailId: string;
		/** Enter the delivery date requested by the customer for the order product. */
		RequestDeliveryBy_UtcDateOnly: Date;
		/** Unique identifier of the product specified in the order. */
		SalesOrderDetailId: string;
		/** Sales Order Detail Name. Added for 1:n referential relationship (internal purposes only) */
		SalesOrderDetailName: string;
		/** Shows the order for the product. The ID is used to link product pricing and other details to the total amounts and other information on the order. */
		SalesOrderId: string;
		/** Tells whether product pricing is locked for the order. */
		readonly SalesOrderIsPriceLocked: boolean;
		/** Shows the status of the order that the order detail is associated with. */
		readonly SalesOrderStateCode: OptionSet.SalesOrderDetail.SalesOrderStateCode;
		/** Choose the user responsible for the sale of the order product. */
		SalesRepId: string;
		/** Shows the ID of the data that maintains the sequence. */
		SequenceNumber: number;
		/** Unique identifier of the shipping address. */
		ShipTo_AddressId: string;
		/** Type the city for the customer's shipping address. */
		ShipTo_City: string;
		/** Type the primary contact name at the customer's shipping address. */
		ShipTo_ContactName: string;
		/** Type the country or region for the customer's shipping address. */
		ShipTo_Country: string;
		/** Type the fax number for the customer's shipping address. */
		ShipTo_Fax: string;
		/** Select the freight terms to make sure shipping orders are processed correctly. */
		ShipTo_FreightTermsCode: OptionSet.SalesOrderDetail.ShipTo_FreightTermsCode;
		/** Type the first line of the customer's shipping address. */
		ShipTo_Line1: string;
		/** Type the second line of the customer's shipping address. */
		ShipTo_Line2: string;
		/** Type the third line of the shipping address. */
		ShipTo_Line3: string;
		/** Type a name for the customer's shipping address, such as "Headquarters" or "Field office",  to identify the address. */
		ShipTo_Name: string;
		/** Type the ZIP Code or postal code for the shipping address. */
		ShipTo_PostalCode: string;
		/** Type the state or province for the shipping address. */
		ShipTo_StateOrProvince: string;
		/** Type the phone number for the customer's shipping address. */
		ShipTo_Telephone: string;
		/** Skip the price calculation */
		SkipPriceCalculation: OptionSet.SalesOrderDetail.SkipPriceCalculation;
		/** Type the tax amount for the order product. */
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
		/** Select whether the order product should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
		WillCall: boolean;
		readonly FormattedValue: {
			/** Shows the total price of the order product, based on the price per unit, volume discount, and quantity. */
			readonly BaseAmount: string;
			/** Value of the Amount in base currency. */
			readonly BaseAmount_Base: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type additional information to describe the order product, such as manufacturing details or acceptable substitutions. */
			readonly Description: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Shows the total amount due for the order product, based on the sum of the unit price, quantity, discounts, and tax. */
			readonly ExtendedAmount: string;
			/** Value of the Extended Amount in base currency. */
			readonly ExtendedAmount_Base: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Select whether the invoice line item is copied from another item or data source. */
			readonly IsCopied: string;
			/** Select whether the price per unit is fixed at the value in the specified price list or can be overridden by users who have edit rights to the order product. */
			readonly IsPriceOverridden: string;
			/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the order. */
			readonly IsProductOverridden: string;
			/** Type the line item number for the order product to easily identify the product in the order and make sure it's listed in the correct sequence. */
			readonly LineItemNumber: string;
			/** Type the manual discount amount for the order product to deduct any negotiated or other savings from the product total on the order. */
			readonly ManualDiscountAmount: string;
			/** Value of the Manual Discount in base currency. */
			readonly ManualDiscountAmount_Base: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Select a Agreement for this order line */
			readonly msdyn_agreement: string;
			/** The field to distinguish the order lines to be of project service or field service */
			readonly msdyn_LineType: string;
			readonly OrderCreationMethod: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Choose the parent bundle associated with this product */
			readonly ParentBundleId: string;
			/** Choose the parent bundle associated with this product */
			readonly ParentBundleIdRef: string;
			/** Type the price per unit of the order product. The default is the value in the price list specified on the order for existing products. */
			readonly PricePerUnit: string;
			/** Value of the Price Per Unit in base currency. */
			readonly PricePerUnit_Base: string;
			/** Select the type of pricing error, such as a missing or invalid product, or missing quantity. */
			readonly PricingErrorCode: string;
			/** Unique identifier of the product line item association with bundle in the sales order */
			readonly ProductAssociationId: string;
			/** Type a name or description to identify the type of write-in product included in the order. */
			readonly ProductDescription: string;
			/** Choose the product to include on the order to link the product's pricing and other information to the parent order. */
			readonly ProductId: string;
			/** Calculated field that will be populated by name and description of the product. */
			readonly ProductName: string;
			/** User-defined product ID. */
			readonly ProductNumber: string;
			/** Product Type */
			readonly ProductTypeCode: string;
			/** Status of the property configuration. */
			readonly PropertyConfigurationStatus: string;
			/** Type the amount or quantity of the product ordered by the customer. */
			readonly Quantity: string;
			/** Type the amount or quantity of the product that is back ordered for the order. */
			readonly QuantityBackordered: string;
			/** Type the amount or quantity of the product that was canceled. */
			readonly QuantityCancelled: string;
			/** Type the amount or quantity of the product that was shipped for the order. */
			readonly QuantityShipped: string;
			/** Unique identifier for Quote Line associated with Order Line. */
			readonly QuoteDetailId: string;
			/** Enter the delivery date requested by the customer for the order product. */
			readonly RequestDeliveryBy_UtcDateOnly: string;
			/** Unique identifier of the product specified in the order. */
			readonly SalesOrderDetailId: string;
			/** Sales Order Detail Name. Added for 1:n referential relationship (internal purposes only) */
			readonly SalesOrderDetailName: string;
			/** Shows the order for the product. The ID is used to link product pricing and other details to the total amounts and other information on the order. */
			readonly SalesOrderId: string;
			/** Tells whether product pricing is locked for the order. */
			readonly SalesOrderIsPriceLocked: string;
			/** Shows the status of the order that the order detail is associated with. */
			readonly SalesOrderStateCode: string;
			/** Choose the user responsible for the sale of the order product. */
			readonly SalesRepId: string;
			/** Shows the ID of the data that maintains the sequence. */
			readonly SequenceNumber: string;
			/** Unique identifier of the shipping address. */
			readonly ShipTo_AddressId: string;
			/** Type the city for the customer's shipping address. */
			readonly ShipTo_City: string;
			/** Type the primary contact name at the customer's shipping address. */
			readonly ShipTo_ContactName: string;
			/** Type the country or region for the customer's shipping address. */
			readonly ShipTo_Country: string;
			/** Type the fax number for the customer's shipping address. */
			readonly ShipTo_Fax: string;
			/** Select the freight terms to make sure shipping orders are processed correctly. */
			readonly ShipTo_FreightTermsCode: string;
			/** Type the first line of the customer's shipping address. */
			readonly ShipTo_Line1: string;
			/** Type the second line of the customer's shipping address. */
			readonly ShipTo_Line2: string;
			/** Type the third line of the shipping address. */
			readonly ShipTo_Line3: string;
			/** Type a name for the customer's shipping address, such as "Headquarters" or "Field office",  to identify the address. */
			readonly ShipTo_Name: string;
			/** Type the ZIP Code or postal code for the shipping address. */
			readonly ShipTo_PostalCode: string;
			/** Type the state or province for the shipping address. */
			readonly ShipTo_StateOrProvince: string;
			/** Type the phone number for the customer's shipping address. */
			readonly ShipTo_Telephone: string;
			/** Skip the price calculation */
			readonly SkipPriceCalculation: string;
			/** Type the tax amount for the order product. */
			readonly Tax: string;
			/** Value of the Tax in base currency. */
			readonly Tax_Base: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			readonly UoMId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** Shows the discount amount per unit if a specified volume is purchased. Configure volume discounts in the Product Catalog in the Settings area. */
			readonly VolumeDiscountAmount: string;
			/** Value of the Volume Discount in base currency. */
			readonly VolumeDiscountAmount_Base: string;
			/** Select whether the order product should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			readonly WillCall: string;
		}
	}
}
declare namespace OptionSet {
	namespace SalesOrderDetail {
		enum msdyn_LineType {
			/** 690970001 */
			Field_Service_Line,
			/** 690970000 */
			Project_Service_Line
		}
		enum OrderCreationMethod {
			/** 776160000 */
			Unknown,
			/** 776160001 */
			Win_Quote
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
		enum SalesOrderStateCode {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}