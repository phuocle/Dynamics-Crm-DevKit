﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormInvoiceDetail_Information {
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
		interface tab_FieldService_Sections {
			tab_4_section_2: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			invoice_detail_information: DevKit.Controls.Section;
			pricing: DevKit.Controls.Section;
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
		interface tab_FieldService extends DevKit.Controls.ITab {
			Section: tab_FieldService_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			address: tab_address;
			delivery: tab_delivery;
			editproductpropertiesinlinetab: tab_editproductpropertiesinlinetab;
			FieldService: tab_FieldService;
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the date when the invoiced product was delivered to the customer. */
			ActualDeliveryOn: DevKit.Controls.Date;
			/** Shows the total price of the invoice product, based on the price per unit, volume discount, and quantity. */
			BaseAmount: DevKit.Controls.Money;
			/** Type additional information to describe the product line item of the invoice. */
			Description: DevKit.Controls.String;
			/** Shows the total amount due for the invoice product, based on the sum of the unit price, quantity, discounts, and tax. */
			ExtendedAmount: DevKit.Controls.Money;
			/** Select whether the price per unit is fixed at the value in the specified price list or can be overridden by users who have edit rights to the invoice product. */
			IsPriceOverridden: DevKit.Controls.Boolean;
			/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the parent invoice. */
			IsProductOverridden: DevKit.Controls.Boolean;
			/** Type the manual discount amount for the invoice product to deduct any negotiated or other savings from the product total. */
			ManualDiscountAmount: DevKit.Controls.Money;
			/** Unique identifier for Agreement associated with Invoice Product. */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** Unique identifier for Agreement Invoice Product associated with Invoice Product. */
			msdyn_AgreementInvoiceProduct: DevKit.Controls.Lookup;
			/** Shows the order of this invoice product within the invoice. */
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Unique identifier for Work Order associated with Invoice Product. */
			msdyn_WorkOrderId: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order Product associated with Invoice Product. */
			msdyn_WorkOrderProductId: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order Service associated with Invoice Product. */
			msdyn_WorkOrderServiceId: DevKit.Controls.Lookup;
			/** Type the price per unit of the invoice product. The default is the value in the price list specified on the parent invoice for existing products. */
			PricePerUnit: DevKit.Controls.Money;
			/** Type a name or description to identify the type of write-in product included in the invoice. */
			ProductDescription: DevKit.Controls.String;
			/** Choose the product to include on the invoice. */
			ProductId: DevKit.Controls.Lookup;
			editpropertiescontrol: DevKit.Controls.ActionCards;
			/** Type the amount or quantity of the product included in the invoice's total amount due. */
			Quantity: DevKit.Controls.Decimal;
			/** Type the amount or quantity of the product that is back ordered for the invoice. */
			QuantityBackordered: DevKit.Controls.Decimal;
			/** Type the amount or quantity of the product that was canceled for the invoice line item. */
			QuantityCancelled: DevKit.Controls.Decimal;
			/** Type the amount or quantity of the product that was shipped. */
			QuantityShipped: DevKit.Controls.Decimal;
			/** Choose the user responsible for the sale of the invoice product. */
			SalesRepId: DevKit.Controls.Lookup;
			/** Type the city for the customer's shipping address. */
			ShipTo_City: DevKit.Controls.String;
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
			/** Type the tax amount for the invoice product. */
			Tax: DevKit.Controls.Money;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Controls.Lookup;
			/** Shows the discount amount per unit if a specified volume is purchased. Configure volume discounts in the Product Catalog in the Settings area. */
			VolumeDiscountAmount: DevKit.Controls.Money;
			/** Select whether the invoice product should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormInvoiceDetail_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form InvoiceDetail_Information */
		Body: DevKit.FormInvoiceDetail_Information.Body;
		/** The Process of form InvoiceDetail_Information */
		Process: DevKit.FormInvoiceDetail_Information.Process;
		/** The SidePanes of form InvoiceDetail_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormProject {
		interface tab_address_Sections {
			ship_to_address: DevKit.Controls.Section;
		}
		interface tab_ChargeableTransactionsTab_Sections {
			TransactionsSection: DevKit.Controls.Section;
		}
		interface tab_ComplimentaryTransactionsTab_Sections {
			tab_6_section_1: DevKit.Controls.Section;
		}
		interface tab_delivery_Sections {
			delivery_information: DevKit.Controls.Section;
			fulfillment: DevKit.Controls.Section;
		}
		interface tab_HiddenFields_Sections {
			tab_8_section_1: DevKit.Controls.Section;
		}
		interface tab_HiddenTab_Deprecated_Sections {
			HiddenTab_section_1: DevKit.Controls.Section;
		}
		interface tab_MilestonesTab_Sections {
			tab_9_section_1: DevKit.Controls.Section;
		}
		interface tab_NonChargeableTransactionsTab_Sections {
			tab_7_section_1: DevKit.Controls.Section;
		}
		interface tab_ProductTab_Sections {
			invoice_detail_information: DevKit.Controls.Section;
			pricing: DevKit.Controls.Section;
		}
		interface tab_ProjectTab_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_address extends DevKit.Controls.ITab {
			Section: tab_address_Sections;
		}
		interface tab_ChargeableTransactionsTab extends DevKit.Controls.ITab {
			Section: tab_ChargeableTransactionsTab_Sections;
		}
		interface tab_ComplimentaryTransactionsTab extends DevKit.Controls.ITab {
			Section: tab_ComplimentaryTransactionsTab_Sections;
		}
		interface tab_delivery extends DevKit.Controls.ITab {
			Section: tab_delivery_Sections;
		}
		interface tab_HiddenFields extends DevKit.Controls.ITab {
			Section: tab_HiddenFields_Sections;
		}
		interface tab_HiddenTab_Deprecated extends DevKit.Controls.ITab {
			Section: tab_HiddenTab_Deprecated_Sections;
		}
		interface tab_MilestonesTab extends DevKit.Controls.ITab {
			Section: tab_MilestonesTab_Sections;
		}
		interface tab_NonChargeableTransactionsTab extends DevKit.Controls.ITab {
			Section: tab_NonChargeableTransactionsTab_Sections;
		}
		interface tab_ProductTab extends DevKit.Controls.ITab {
			Section: tab_ProductTab_Sections;
		}
		interface tab_ProjectTab extends DevKit.Controls.ITab {
			Section: tab_ProjectTab_Sections;
		}
		interface Tabs {
			address: tab_address;
			ChargeableTransactionsTab: tab_ChargeableTransactionsTab;
			ComplimentaryTransactionsTab: tab_ComplimentaryTransactionsTab;
			delivery: tab_delivery;
			HiddenFields: tab_HiddenFields;
			HiddenTab_Deprecated: tab_HiddenTab_Deprecated;
			MilestonesTab: tab_MilestonesTab;
			NonChargeableTransactionsTab: tab_NonChargeableTransactionsTab;
			ProductTab: tab_ProductTab;
			ProjectTab: tab_ProjectTab;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the date when the invoiced product was delivered to the customer. */
			ActualDeliveryOn: DevKit.Controls.Date;
			/** Shows the total price of the invoice product, based on the price per unit, volume discount, and quantity. */
			BaseAmount: DevKit.Controls.Money;
			/** Shows the total price of the invoice product, based on the price per unit, volume discount, and quantity. */
			BaseAmount1: DevKit.Controls.Money;
			/** Shows the total amount due for the invoice product, based on the sum of the unit price, quantity, discounts, and tax. */
			ExtendedAmount: DevKit.Controls.Money;
			/** Unique identifier of the invoice associated with the invoice product line item. */
			InvoiceId: DevKit.Controls.Lookup;
			/** Select whether the price per unit is fixed at the value in the specified price list or can be overridden by users who have edit rights to the invoice product. */
			IsPriceOverridden: DevKit.Controls.Boolean;
			/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the parent invoice. */
			IsProductOverridden: DevKit.Controls.Boolean;
			/** Type the manual discount amount for the invoice product to deduct any negotiated or other savings from the product total. */
			ManualDiscountAmount: DevKit.Controls.Money;
			/** Billing method for the project invoice line. Valid values are Time and Material and Fixed Price */
			msdyn_BillingMethod: DevKit.Controls.OptionSet;
			/** The amount from included line details that is chargeable. */
			msdyn_chargeableamount: DevKit.Controls.Money;
			/** The amount from included line details that is complimentary and won't be charged. */
			msdyn_complimentaryamount: DevKit.Controls.Money;
			/** Amount from the related project contract line if present. */
			msdyn_contractlineamount: DevKit.Controls.Money;
			/** Amount already invoiced to customer for the same project contract line. */
			msdyn_invoicedtilldate: DevKit.Controls.Money;
			/** The amount from included line details that is non-chargeable. */
			msdyn_nonchargeableamount: DevKit.Controls.Money;
			/** Shows the project for this invoice line. */
			msdyn_Project: DevKit.Controls.Lookup;
			/** Type the price per unit of the invoice product. The default is the value in the price list specified on the parent invoice for existing products. */
			PricePerUnit: DevKit.Controls.Money;
			/** Type a name or description to identify the type of write-in product included in the invoice. */
			ProductDescription: DevKit.Controls.String;
			/** Type a name or description to identify the type of write-in product included in the invoice. */
			ProductDescription1: DevKit.Controls.String;
			/** Choose the product to include on the invoice. */
			ProductId: DevKit.Controls.Lookup;
			/** Product Type */
			ProductTypeCode: DevKit.Controls.OptionSet;
			/** Type the amount or quantity of the product included in the invoice's total amount due. */
			Quantity: DevKit.Controls.Decimal;
			/** Type the amount or quantity of the product that is back ordered for the invoice. */
			QuantityBackordered: DevKit.Controls.Decimal;
			/** Type the amount or quantity of the product that was canceled for the invoice line item. */
			QuantityCancelled: DevKit.Controls.Decimal;
			/** Type the amount or quantity of the product that was shipped. */
			QuantityShipped: DevKit.Controls.Decimal;
			/** Unique identifier for Order Line associated with Invoice Line. */
			SalesOrderDetailId: DevKit.Controls.Lookup;
			/** Choose the user responsible for the sale of the invoice product. */
			SalesRepId: DevKit.Controls.Lookup;
			/** Type the city for the customer's shipping address. */
			ShipTo_City: DevKit.Controls.String;
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
			/** Type the tax amount for the invoice product. */
			Tax: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Controls.Lookup;
			/** Shows the discount amount per unit if a specified volume is purchased. Configure volume discounts in the Product Catalog in the Settings area. */
			VolumeDiscountAmount: DevKit.Controls.Money;
			/** Select whether the invoice product should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			ChargeableTransactionsGrid: DevKit.Controls.Grid;
			ComplimentaryTransactionsGrid: DevKit.Controls.Grid;
			MilestonesGrid: DevKit.Controls.Grid;
			NonChargeableTransactionsGrid: DevKit.Controls.Grid;
		}
	}
	class FormProject extends DevKit.IForm {
		/**
		* Project [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Project */
		Body: DevKit.FormProject.Body;
		/** The Process of form Project */
		Process: DevKit.FormProject.Process;
		/** The Grid of form Project */
		Grid: DevKit.FormProject.Grid;
		/** The SidePanes of form Project */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormInvoiceDetail {
		interface tab_general_Sections {
			delivery_information: DevKit.Controls.Section;
			invoice_detail_information: DevKit.Controls.Section;
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
			/** Enter the date when the invoiced product was delivered to the customer. */
			ActualDeliveryOn: DevKit.Controls.Date;
			/** Unique identifier of the invoice associated with the invoice product line item. */
			InvoiceId: DevKit.Controls.Lookup;
			/** Select whether the price per unit is fixed at the value in the specified price list or can be overridden by users who have edit rights to the invoice product. */
			IsPriceOverridden: DevKit.Controls.Boolean;
			/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the parent invoice. */
			IsProductOverridden: DevKit.Controls.Boolean;
			/** Type the manual discount amount for the invoice product to deduct any negotiated or other savings from the product total. */
			ManualDiscountAmount: DevKit.Controls.Money;
			/** Type the price per unit of the invoice product. The default is the value in the price list specified on the parent invoice for existing products. */
			PricePerUnit: DevKit.Controls.Money;
			/** Type a name or description to identify the type of write-in product included in the invoice. */
			ProductDescription: DevKit.Controls.String;
			/** Choose the product to include on the invoice. */
			ProductId: DevKit.Controls.Lookup;
			/** Type the amount or quantity of the product included in the invoice's total amount due. */
			Quantity: DevKit.Controls.Decimal;
			/** Type the amount or quantity of the product that is back ordered for the invoice. */
			QuantityBackordered: DevKit.Controls.Decimal;
			/** Type the amount or quantity of the product that was canceled for the invoice line item. */
			QuantityCancelled: DevKit.Controls.Decimal;
			/** Type the amount or quantity of the product that was shipped. */
			QuantityShipped: DevKit.Controls.Decimal;
			/** Choose the user responsible for the sale of the invoice product. */
			SalesRepId: DevKit.Controls.Lookup;
			/** Type the city for the customer's shipping address. */
			ShipTo_City: DevKit.Controls.String;
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
			/** Type the tax amount for the invoice product. */
			Tax: DevKit.Controls.Money;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Controls.Lookup;
			/** Select whether the invoice product should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Controls.Boolean;
		}
	}
	class FormInvoiceDetail extends DevKit.IForm {
		/**
		* InvoiceDetail [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form InvoiceDetail */
		Body: DevKit.FormInvoiceDetail.Body;
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
		/** Enter the date when the invoiced product was delivered to the customer. */
		ActualDeliveryOn_UtcDateOnly: Date;
		/** Shows the total price of the invoice product, based on the price per unit, volume discount, and quantity. */
		BaseAmount: number;
		/** Value of the Amount in base currency. */
		readonly BaseAmount_Base: number;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type additional information to describe the product line item of the invoice. */
		Description: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Shows the total amount due for the invoice product, based on the sum of the unit price, quantity, discounts, and tax. */
		ExtendedAmount: number;
		/** Value of the Extended Amount in base currency. */
		readonly ExtendedAmount_Base: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the invoice product line item. */
		InvoiceDetailId: string;
		/** Invoice Detail Name. Added for 1:n referential relationship (internal purposes only) */
		InvoiceDetailName: string;
		/** Unique identifier of the invoice associated with the invoice product line item. */
		InvoiceId: string;
		/** Information about whether invoice product pricing is locked. */
		readonly InvoiceIsPriceLocked: boolean;
		/** Status of the invoice product. */
		readonly InvoiceStateCode: OptionSet.InvoiceDetail.InvoiceStateCode;
		/** Select whether the invoice product is copied from another item or data source. */
		IsCopied: boolean;
		/** Select whether the price per unit is fixed at the value in the specified price list or can be overridden by users who have edit rights to the invoice product. */
		IsPriceOverridden: boolean;
		/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the parent invoice. */
		IsProductOverridden: boolean;
		/** Type the line item number for the invoice product to easily identify the product in the invoice and make sure it's listed in the correct order. */
		LineItemNumber: number;
		/** Type the manual discount amount for the invoice product to deduct any negotiated or other savings from the product total. */
		ManualDiscountAmount: number;
		/** Value of the Manual Discount in base currency. */
		readonly ManualDiscountAmount_Base: number;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for Agreement associated with Invoice Product. */
		msdyn_Agreement: string;
		/** Unique identifier for Agreement Invoice Product associated with Invoice Product. */
		msdyn_AgreementInvoiceProduct: string;
		/** Billing method for the project invoice line. Valid values are Time and Material and Fixed Price */
		msdyn_BillingMethod: OptionSet.InvoiceDetail.msdyn_BillingMethod;
		/** The amount from included line details that is chargeable. */
		msdyn_chargeableamount: number;
		/** Value of the Chargeable Amount in base currency. */
		readonly msdyn_chargeableamount_Base: number;
		/** The amount from included line details that is complimentary and won't be charged. */
		msdyn_complimentaryamount: number;
		/** Value of the Complimentary Amount in base currency. */
		readonly msdyn_complimentaryamount_Base: number;
		/** (Deprecated) Shows the project contract line for this invoice line. */
		msdyn_ContractLine: string;
		/** Amount from the related project contract line if present. */
		msdyn_contractlineamount: number;
		/** Value of the project contract line amount in base currency. */
		readonly msdyn_contractlineamount_Base: number;
		/** Unique identifier for Currency associated with Invoice Product. */
		msdyn_Currency: string;
		/** Amount already invoiced to customer for the same project contract line. */
		msdyn_invoicedtilldate: number;
		/** Value of the Amount Previously Invoiced in base currency. */
		readonly msdyn_invoicedtilldate_Base: number;
		/** Shows the order of this invoice product within the invoice. */
		msdyn_LineOrder: number;
		/** The field to distinguish the Invoice lines to be of project service or field service */
		msdyn_LineType: OptionSet.InvoiceDetail.msdyn_LineType;
		/** The amount from included line details that is non-chargeable. */
		msdyn_nonchargeableamount: number;
		/** Value of the Non Chargeable Amount in base currency. */
		readonly msdyn_nonchargeableamount_Base: number;
		/** Unique identifier for Order Invoicing Product associated with Invoice Product. */
		msdyn_OrderInvoicingProduct: string;
		/** Shows the project for this invoice line. */
		msdyn_Project: string;
		/** Unique identifier for Work Order associated with Invoice Product. */
		msdyn_WorkOrderId: string;
		/** Unique identifier for Work Order Product associated with Invoice Product. */
		msdyn_WorkOrderProductId: string;
		/** Unique identifier for Work Order Service associated with Invoice Product. */
		msdyn_WorkOrderServiceId: string;
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
		/** Type the price per unit of the invoice product. The default is the value in the price list specified on the parent invoice for existing products. */
		PricePerUnit: number;
		/** Value of the Price Per Unit in base currency. */
		readonly PricePerUnit_Base: number;
		/** Pricing error for the invoice product line item. */
		PricingErrorCode: OptionSet.InvoiceDetail.PricingErrorCode;
		/** Unique identifier of the product line item association with bundle in the invoice */
		ProductAssociationId: string;
		/** Type a name or description to identify the type of write-in product included in the invoice. */
		ProductDescription: string;
		/** Choose the product to include on the invoice. */
		ProductId: string;
		/** Calculated field that will be populated by name and description of the product. */
		ProductName: string;
		/** User-defined product ID. */
		readonly ProductNumber: string;
		/** Product Type */
		ProductTypeCode: OptionSet.InvoiceDetail.ProductTypeCode;
		/** Status of the property configuration. */
		PropertyConfigurationStatus: OptionSet.InvoiceDetail.PropertyConfigurationStatus;
		/** Type the amount or quantity of the product included in the invoice's total amount due. */
		Quantity: number;
		/** Type the amount or quantity of the product that is back ordered for the invoice. */
		QuantityBackordered: number;
		/** Type the amount or quantity of the product that was canceled for the invoice line item. */
		QuantityCancelled: number;
		/** Type the amount or quantity of the product that was shipped. */
		QuantityShipped: number;
		/** Unique identifier for Order Line associated with Invoice Line. */
		SalesOrderDetailId: string;
		/** Choose the user responsible for the sale of the invoice product. */
		SalesRepId: string;
		/** Shows the ID of the data that maintains the sequence. */
		SequenceNumber: number;
		/** Type a tracking number for shipment of the invoiced product. */
		ShippingTrackingNumber: string;
		/** Type the city for the customer's shipping address. */
		ShipTo_City: string;
		/** Type the country or region for the customer's shipping address. */
		ShipTo_Country: string;
		/** Type the fax number for the customer's shipping address. */
		ShipTo_Fax: string;
		/** Select the freight terms to make sure shipping orders are processed correctly. */
		ShipTo_FreightTermsCode: OptionSet.InvoiceDetail.ShipTo_FreightTermsCode;
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
		/** Skip Price Calculation */
		SkipPriceCalculation: OptionSet.InvoiceDetail.SkipPriceCalculation;
		/** Type the tax amount for the invoice product. */
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
		/** Select whether the invoice product should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
		WillCall: boolean;
	}
}
declare namespace OptionSet {
	namespace InvoiceDetail {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}