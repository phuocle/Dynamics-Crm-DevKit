//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormInvoiceDetail_Information {
		interface tab_general_Sections {
			invoice_detail_information: DevKit.Form.Controls.ControlSection;
			pricing: DevKit.Form.Controls.ControlSection;
		}
		interface tab_delivery_Sections {
			delivery_information: DevKit.Form.Controls.ControlSection;
			fulfillment: DevKit.Form.Controls.ControlSection;
		}
		interface tab_address_Sections {
			ship_to_address: DevKit.Form.Controls.ControlSection;
		}
		interface tab_FieldService_Sections {
			tab_4_section_2: DevKit.Form.Controls.ControlSection;
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
		interface tab_FieldService extends DevKit.Form.Controls.IControlTab {
			Section: tab_FieldService_Sections;
		}
		interface tab_editproductpropertiesinlinetab extends DevKit.Form.Controls.IControlTab {
			Section: tab_editproductpropertiesinlinetab_Sections;
		}
		interface Tabs {
			general: tab_general;
			delivery: tab_delivery;
			address: tab_address;
			FieldService: tab_FieldService;
			editproductpropertiesinlinetab: tab_editproductpropertiesinlinetab;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the date when the invoiced product was delivered to the customer. */
			ActualDeliveryOn: DevKit.Form.Controls.ControlDate;
			/** Shows the total price of the invoice product, based on the price per unit, volume discount, and quantity. */
			BaseAmount: DevKit.Form.Controls.ControlMoney;
			/** Type additional information to describe the product line item of the invoice. */
			Description: DevKit.Form.Controls.ControlString;
			/** Shows the total amount due for the invoice product, based on the sum of the unit price, quantity, discounts, and tax. */
			ExtendedAmount: DevKit.Form.Controls.ControlMoney;
			/** Select whether the price per unit is fixed at the value in the specified price list or can be overridden by users who have edit rights to the invoice product. */
			IsPriceOverridden: DevKit.Form.Controls.ControlBoolean;
			/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the parent invoice. */
			IsProductOverridden: DevKit.Form.Controls.ControlBoolean;
			/** Type the manual discount amount for the invoice product to deduct any negotiated or other savings from the product total. */
			ManualDiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Unique identifier for Agreement associated with Invoice Product. */
			msdyn_Agreement: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Agreement Invoice Product associated with Invoice Product. */
			msdyn_AgreementInvoiceProduct: DevKit.Form.Controls.ControlLookup;
			/** Shows the order of this invoice product within the invoice. */
			msdyn_LineOrder: DevKit.Form.Controls.ControlInteger;
			/** Unique identifier for Work Order associated with Invoice Product. */
			msdyn_WorkOrderId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Work Order Product associated with Invoice Product. */
			msdyn_WorkOrderProductId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Work Order Service associated with Invoice Product. */
			msdyn_WorkOrderServiceId: DevKit.Form.Controls.ControlLookup;
			/** Type the price per unit of the invoice product. The default is the value in the price list specified on the parent invoice for existing products. */
			PricePerUnit: DevKit.Form.Controls.ControlMoney;
			/** Type a name or description to identify the type of write-in product included in the invoice. */
			ProductDescription: DevKit.Form.Controls.ControlString;
			/** Choose the product to include on the invoice. */
			ProductId: DevKit.Form.Controls.ControlLookup;
			editpropertiescontrol: DevKit.Form.Controls.ControlActionCards;
			/** Type the amount or quantity of the product included in the invoice's total amount due. */
			Quantity: DevKit.Form.Controls.ControlDecimal;
			/** Type the amount or quantity of the product that is back ordered for the invoice. */
			QuantityBackordered: DevKit.Form.Controls.ControlDecimal;
			/** Type the amount or quantity of the product that was canceled for the invoice line item. */
			QuantityCancelled: DevKit.Form.Controls.ControlDecimal;
			/** Type the amount or quantity of the product that was shipped. */
			QuantityShipped: DevKit.Form.Controls.ControlDecimal;
			/** Choose the user responsible for the sale of the invoice product. */
			SalesRepId: DevKit.Form.Controls.ControlLookup;
			/** Type the city for the customer's shipping address. */
			ShipTo_City: DevKit.Form.Controls.ControlString;
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
			/** Type the tax amount for the invoice product. */
			Tax: DevKit.Form.Controls.ControlMoney;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Form.Controls.ControlLookup;
			/** Shows the discount amount per unit if a specified volume is purchased. Configure volume discounts in the Product Catalog in the Settings area. */
			VolumeDiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Select whether the invoice product should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class FormInvoiceDetail_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form InvoiceDetail_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form InvoiceDetail_Information */
		Body: LuckyMokey.FormInvoiceDetail_Information.Body;
	}
	namespace FormProject {
		interface tab_ProjectTab_Sections {
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_MilestonesTab_Sections {
			tab_9_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ChargeableTransactionsTab_Sections {
			TransactionsSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ComplimentaryTransactionsTab_Sections {
			tab_6_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_NonChargeableTransactionsTab_Sections {
			tab_7_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ProductTab_Sections {
			invoice_detail_information: DevKit.Form.Controls.ControlSection;
			pricing: DevKit.Form.Controls.ControlSection;
		}
		interface tab_HiddenFields_Sections {
			tab_8_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_delivery_Sections {
			delivery_information: DevKit.Form.Controls.ControlSection;
			fulfillment: DevKit.Form.Controls.ControlSection;
		}
		interface tab_address_Sections {
			ship_to_address: DevKit.Form.Controls.ControlSection;
		}
		interface tab_HiddenTab_Deprecated_Sections {
			HiddenTab_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ProjectTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_ProjectTab_Sections;
		}
		interface tab_MilestonesTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_MilestonesTab_Sections;
		}
		interface tab_ChargeableTransactionsTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_ChargeableTransactionsTab_Sections;
		}
		interface tab_ComplimentaryTransactionsTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_ComplimentaryTransactionsTab_Sections;
		}
		interface tab_NonChargeableTransactionsTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_NonChargeableTransactionsTab_Sections;
		}
		interface tab_ProductTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_ProductTab_Sections;
		}
		interface tab_HiddenFields extends DevKit.Form.Controls.IControlTab {
			Section: tab_HiddenFields_Sections;
		}
		interface tab_delivery extends DevKit.Form.Controls.IControlTab {
			Section: tab_delivery_Sections;
		}
		interface tab_address extends DevKit.Form.Controls.IControlTab {
			Section: tab_address_Sections;
		}
		interface tab_HiddenTab_Deprecated extends DevKit.Form.Controls.IControlTab {
			Section: tab_HiddenTab_Deprecated_Sections;
		}
		interface Tabs {
			ProjectTab: tab_ProjectTab;
			MilestonesTab: tab_MilestonesTab;
			ChargeableTransactionsTab: tab_ChargeableTransactionsTab;
			ComplimentaryTransactionsTab: tab_ComplimentaryTransactionsTab;
			NonChargeableTransactionsTab: tab_NonChargeableTransactionsTab;
			ProductTab: tab_ProductTab;
			HiddenFields: tab_HiddenFields;
			delivery: tab_delivery;
			address: tab_address;
			HiddenTab_Deprecated: tab_HiddenTab_Deprecated;
		}
		interface Body {
			Tab: Tabs;
			MilestonesGrid: DevKit.Form.Controls.ControlGrid;
			ChargeableTransactionsGrid: DevKit.Form.Controls.ControlGrid;
			ComplimentaryTransactionsGrid: DevKit.Form.Controls.ControlGrid;
			NonChargeableTransactionsGrid: DevKit.Form.Controls.ControlGrid;
			/** Enter the date when the invoiced product was delivered to the customer. */
			ActualDeliveryOn: DevKit.Form.Controls.ControlDate;
			/** Shows the total price of the invoice product, based on the price per unit, volume discount, and quantity. */
			BaseAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total price of the invoice product, based on the price per unit, volume discount, and quantity. */
			BaseAmount_1: DevKit.Form.Controls.ControlMoney;
			/** Shows the total amount due for the invoice product, based on the sum of the unit price, quantity, discounts, and tax. */
			ExtendedAmount: DevKit.Form.Controls.ControlMoney;
			/** Select whether the price per unit is fixed at the value in the specified price list or can be overridden by users who have edit rights to the invoice product. */
			IsPriceOverridden: DevKit.Form.Controls.ControlBoolean;
			/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the parent invoice. */
			IsProductOverridden: DevKit.Form.Controls.ControlBoolean;
			/** Type the manual discount amount for the invoice product to deduct any negotiated or other savings from the product total. */
			ManualDiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Billing method for the project invoice line. Valid values are Time and Material and Fixed Price */
			msdyn_BillingMethod: DevKit.Form.Controls.ControlOptionSet;
			/** The amount from included line details that is chargeable. */
			msdyn_chargeableamount: DevKit.Form.Controls.ControlMoney;
			/** The amount from included line details that is complimentary and won't be charged. */
			msdyn_complimentaryamount: DevKit.Form.Controls.ControlMoney;
			/** Amount from the related project contract line if present. */
			msdyn_contractlineamount: DevKit.Form.Controls.ControlMoney;
			/** Amount already invoiced to customer for the same project contract line. */
			msdyn_invoicedtilldate: DevKit.Form.Controls.ControlMoney;
			/** The amount from included line details that is non-chargeable. */
			msdyn_nonchargeableamount: DevKit.Form.Controls.ControlMoney;
			/** Shows the project for this invoice line. */
			msdyn_Project: DevKit.Form.Controls.ControlLookup;
			/** Type the price per unit of the invoice product. The default is the value in the price list specified on the parent invoice for existing products. */
			PricePerUnit: DevKit.Form.Controls.ControlMoney;
			/** Type a name or description to identify the type of write-in product included in the invoice. */
			ProductDescription: DevKit.Form.Controls.ControlString;
			/** Type a name or description to identify the type of write-in product included in the invoice. */
			ProductDescription_1: DevKit.Form.Controls.ControlString;
			/** Choose the product to include on the invoice. */
			ProductId: DevKit.Form.Controls.ControlLookup;
			/** Product Type */
			ProductTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type the amount or quantity of the product included in the invoice's total amount due. */
			Quantity: DevKit.Form.Controls.ControlDecimal;
			/** Type the amount or quantity of the product that is back ordered for the invoice. */
			QuantityBackordered: DevKit.Form.Controls.ControlDecimal;
			/** Type the amount or quantity of the product that was canceled for the invoice line item. */
			QuantityCancelled: DevKit.Form.Controls.ControlDecimal;
			/** Type the amount or quantity of the product that was shipped. */
			QuantityShipped: DevKit.Form.Controls.ControlDecimal;
			/** Unique identifier for Order Line associated with Invoice Line. */
			SalesOrderDetailId: DevKit.Form.Controls.ControlLookup;
			/** Choose the user responsible for the sale of the invoice product. */
			SalesRepId: DevKit.Form.Controls.ControlLookup;
			/** Type the city for the customer's shipping address. */
			ShipTo_City: DevKit.Form.Controls.ControlString;
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
			/** Type the tax amount for the invoice product. */
			Tax: DevKit.Form.Controls.ControlMoney;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Form.Controls.ControlLookup;
			/** Shows the discount amount per unit if a specified volume is purchased. Configure volume discounts in the Product Catalog in the Settings area. */
			VolumeDiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Select whether the invoice product should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class FormProject extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Project
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Project */
		Body: LuckyMokey.FormProject.Body;
	}
	namespace FormInvoiceDetail {
		interface tab_general_Sections {
			invoice_detail_information: DevKit.Form.Controls.ControlSection;
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
			/** Enter the date when the invoiced product was delivered to the customer. */
			ActualDeliveryOn: DevKit.Form.Controls.ControlDate;
			/** Unique identifier of the invoice associated with the invoice product line item. */
			InvoiceId: DevKit.Form.Controls.ControlLookup;
			/** Select whether the price per unit is fixed at the value in the specified price list or can be overridden by users who have edit rights to the invoice product. */
			IsPriceOverridden: DevKit.Form.Controls.ControlBoolean;
			/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the parent invoice. */
			IsProductOverridden: DevKit.Form.Controls.ControlBoolean;
			/** Type the manual discount amount for the invoice product to deduct any negotiated or other savings from the product total. */
			ManualDiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Type the price per unit of the invoice product. The default is the value in the price list specified on the parent invoice for existing products. */
			PricePerUnit: DevKit.Form.Controls.ControlMoney;
			/** Type a name or description to identify the type of write-in product included in the invoice. */
			ProductDescription: DevKit.Form.Controls.ControlString;
			/** Choose the product to include on the invoice. */
			ProductId: DevKit.Form.Controls.ControlLookup;
			/** Type the amount or quantity of the product included in the invoice's total amount due. */
			Quantity: DevKit.Form.Controls.ControlDecimal;
			/** Type the amount or quantity of the product that is back ordered for the invoice. */
			QuantityBackordered: DevKit.Form.Controls.ControlDecimal;
			/** Type the amount or quantity of the product that was canceled for the invoice line item. */
			QuantityCancelled: DevKit.Form.Controls.ControlDecimal;
			/** Type the amount or quantity of the product that was shipped. */
			QuantityShipped: DevKit.Form.Controls.ControlDecimal;
			/** Choose the user responsible for the sale of the invoice product. */
			SalesRepId: DevKit.Form.Controls.ControlLookup;
			/** Type the city for the customer's shipping address. */
			ShipTo_City: DevKit.Form.Controls.ControlString;
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
			/** Type the tax amount for the invoice product. */
			Tax: DevKit.Form.Controls.ControlMoney;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Form.Controls.ControlLookup;
			/** Select whether the invoice product should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class FormInvoiceDetail extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form InvoiceDetail
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form InvoiceDetail */
		Body: LuckyMokey.FormInvoiceDetail.Body;
	}
	class InvoiceDetailApi {
		/**
		* DynamicsCrm.DevKit InvoiceDetailApi
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
		/** Enter the date when the invoiced product was delivered to the customer. */
		ActualDeliveryOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the total price of the invoice product, based on the price per unit, volume discount, and quantity. */
		BaseAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Amount in base currency. */
		BaseAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the product line item of the invoice. */
		Description: DevKit.WebApi.StringValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the total amount due for the invoice product, based on the sum of the unit price, quantity, discounts, and tax. */
		ExtendedAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Extended Amount in base currency. */
		ExtendedAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the invoice product line item. */
		InvoiceDetailId: DevKit.WebApi.GuidValue;
		/** Invoice Detail Name. Added for 1:n referential relationship (internal purposes only) */
		InvoiceDetailName: DevKit.WebApi.StringValue;
		/** Unique identifier of the invoice associated with the invoice product line item. */
		InvoiceId: DevKit.WebApi.LookupValue;
		/** Information about whether invoice product pricing is locked. */
		InvoiceIsPriceLocked: DevKit.WebApi.BooleanValueReadonly;
		/** Status of the invoice product. */
		InvoiceStateCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Select whether the invoice product is copied from another item or data source. */
		IsCopied: DevKit.WebApi.BooleanValue;
		/** Select whether the price per unit is fixed at the value in the specified price list or can be overridden by users who have edit rights to the invoice product. */
		IsPriceOverridden: DevKit.WebApi.BooleanValue;
		/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the parent invoice. */
		IsProductOverridden: DevKit.WebApi.BooleanValue;
		/** Type the line item number for the invoice product to easily identify the product in the invoice and make sure it's listed in the correct order. */
		LineItemNumber: DevKit.WebApi.IntegerValue;
		/** Type the manual discount amount for the invoice product to deduct any negotiated or other savings from the product total. */
		ManualDiscountAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Manual Discount in base currency. */
		ManualDiscountAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for Agreement associated with Invoice Product. */
		msdyn_Agreement: DevKit.WebApi.LookupValue;
		/** Unique identifier for Agreement Invoice Product associated with Invoice Product. */
		msdyn_AgreementInvoiceProduct: DevKit.WebApi.LookupValue;
		/** Billing method for the project invoice line. Valid values are Time and Material and Fixed Price */
		msdyn_BillingMethod: DevKit.WebApi.OptionSetValue;
		/** The amount from included line details that is chargeable. */
		msdyn_chargeableamount: DevKit.WebApi.MoneyValue;
		/** Value of the Chargeable Amount in base currency. */
		msdyn_chargeableamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** The amount from included line details that is complimentary and won't be charged. */
		msdyn_complimentaryamount: DevKit.WebApi.MoneyValue;
		/** Value of the Complimentary Amount in base currency. */
		msdyn_complimentaryamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** (Deprecated) Shows the project contract line for this invoice line. */
		msdyn_ContractLine: DevKit.WebApi.StringValue;
		/** Amount from the related project contract line if present. */
		msdyn_contractlineamount: DevKit.WebApi.MoneyValue;
		/** Value of the project contract line amount in base currency. */
		msdyn_contractlineamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Unique identifier for Currency associated with Invoice Product. */
		msdyn_Currency: DevKit.WebApi.LookupValue;
		/** Amount already invoiced to customer for the same project contract line. */
		msdyn_invoicedtilldate: DevKit.WebApi.MoneyValue;
		/** Value of the Amount Previously Invoiced in base currency. */
		msdyn_invoicedtilldate_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the order of this invoice product within the invoice. */
		msdyn_LineOrder: DevKit.WebApi.IntegerValue;
		/** The field to distinguish the Invoice lines to be of project service or field service */
		msdyn_LineType: DevKit.WebApi.OptionSetValue;
		/** The amount from included line details that is non-chargeable. */
		msdyn_nonchargeableamount: DevKit.WebApi.MoneyValue;
		/** Value of the Non Chargeable Amount in base currency. */
		msdyn_nonchargeableamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Unique identifier for Order Invoicing Product associated with Invoice Product. */
		msdyn_OrderInvoicingProduct: DevKit.WebApi.LookupValue;
		/** Shows the project for this invoice line. */
		msdyn_Project: DevKit.WebApi.LookupValue;
		/** Unique identifier for Work Order associated with Invoice Product. */
		msdyn_WorkOrderId: DevKit.WebApi.LookupValue;
		/** Unique identifier for Work Order Product associated with Invoice Product. */
		msdyn_WorkOrderProductId: DevKit.WebApi.LookupValue;
		/** Unique identifier for Work Order Service associated with Invoice Product. */
		msdyn_WorkOrderServiceId: DevKit.WebApi.LookupValue;
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
		/** Type the price per unit of the invoice product. The default is the value in the price list specified on the parent invoice for existing products. */
		PricePerUnit: DevKit.WebApi.MoneyValue;
		/** Value of the Price Per Unit in base currency. */
		PricePerUnit_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Pricing error for the invoice product line item. */
		PricingErrorCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the product line item association with bundle in the invoice */
		ProductAssociationId: DevKit.WebApi.GuidValue;
		/** Type a name or description to identify the type of write-in product included in the invoice. */
		ProductDescription: DevKit.WebApi.StringValue;
		/** Choose the product to include on the invoice. */
		ProductId: DevKit.WebApi.LookupValue;
		/** Calculated field that will be populated by name and description of the product. */
		ProductName: DevKit.WebApi.StringValue;
		/** Product Type */
		ProductTypeCode: DevKit.WebApi.OptionSetValue;
		/** Status of the property configuration. */
		PropertyConfigurationStatus: DevKit.WebApi.OptionSetValue;
		/** Type the amount or quantity of the product included in the invoice's total amount due. */
		Quantity: DevKit.WebApi.DecimalValue;
		/** Type the amount or quantity of the product that is back ordered for the invoice. */
		QuantityBackordered: DevKit.WebApi.DecimalValue;
		/** Type the amount or quantity of the product that was canceled for the invoice line item. */
		QuantityCancelled: DevKit.WebApi.DecimalValue;
		/** Type the amount or quantity of the product that was shipped. */
		QuantityShipped: DevKit.WebApi.DecimalValue;
		/** Unique identifier for Order Line associated with Invoice Line. */
		SalesOrderDetailId: DevKit.WebApi.LookupValue;
		/** Choose the user responsible for the sale of the invoice product. */
		SalesRepId: DevKit.WebApi.LookupValue;
		/** Shows the ID of the data that maintains the sequence. */
		SequenceNumber: DevKit.WebApi.IntegerValue;
		/** Type a tracking number for shipment of the invoiced product. */
		ShippingTrackingNumber: DevKit.WebApi.StringValue;
		/** Type the city for the customer's shipping address. */
		ShipTo_City: DevKit.WebApi.StringValue;
		/** Type the country or region for the customer's shipping address. */
		ShipTo_Country: DevKit.WebApi.StringValue;
		/** Type the fax number for the customer's shipping address. */
		ShipTo_Fax: DevKit.WebApi.StringValue;
		/** Select the freight terms to make sure shipping orders are processed correctly. */
		ShipTo_FreightTermsCode: DevKit.WebApi.OptionSetValue;
		/** Type the first line of the customer's shipping address. */
		ShipTo_Line1: DevKit.WebApi.StringValue;
		/** Type the second line of the customer's shipping address. */
		ShipTo_Line2: DevKit.WebApi.StringValue;
		/** Type the third line of the shipping address. */
		ShipTo_Line3: DevKit.WebApi.StringValue;
		/** Type a name for the customer's shipping address, such as "Headquarters" or "Field office",  to identify the address. */
		ShipTo_Name: DevKit.WebApi.StringValue;
		/** Type the ZIP Code or postal code for the shipping address. */
		ShipTo_PostalCode: DevKit.WebApi.StringValue;
		/** Type the state or province for the shipping address. */
		ShipTo_StateOrProvince: DevKit.WebApi.StringValue;
		/** Type the phone number for the customer's shipping address. */
		ShipTo_Telephone: DevKit.WebApi.StringValue;
		/** Skip Price Calculation */
		SkipPriceCalculation: DevKit.WebApi.OptionSetValue;
		/** Type the tax amount for the invoice product. */
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
		/** Select whether the invoice product should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
		WillCall: DevKit.WebApi.BooleanValue;
	}
}
declare namespace OptionSet {
	namespace InvoiceDetail {
		enum InvoiceStateCode {
		}
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
//{'JsForm':['Information','InvoiceDetail','Project'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}