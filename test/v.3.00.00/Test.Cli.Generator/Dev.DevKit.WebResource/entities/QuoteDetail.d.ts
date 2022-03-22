﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormQuoteDetail_Field_Service_Information {
		interface tab_address_Sections {
			address_section_2: DevKit.Controls.Section;
			ship_to_address: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			pricing: DevKit.Controls.Section;
			quote_detail_information: DevKit.Controls.Section;
		}
		interface tab_quote_booking_setup_tab_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_address extends DevKit.Controls.ITab {
			Section: tab_address_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_quote_booking_setup_tab extends DevKit.Controls.ITab {
			Section: tab_quote_booking_setup_tab_Sections;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface Tabs {
			address: tab_address;
			general: tab_general;
			quote_booking_setup_tab: tab_quote_booking_setup_tab;
			tab_3: tab_tab_3;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the total price of the quote product, based on the price per unit, volume discount, and quantity. */
			BaseAmount: DevKit.Controls.Money;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Select whether the price per unit is fixed at the value in the specified price list or can be overridden by users who have edit rights to the quote product. */
			IsPriceOverridden: DevKit.Controls.Boolean;
			/** Select whether the price per unit is fixed at the value in the specified price list or can be overridden by users who have edit rights to the quote product. */
			IsPriceOverridden1: DevKit.Controls.Boolean;
			/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the quote. */
			IsProductOverridden: DevKit.Controls.Boolean;
			/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the quote. */
			IsProductOverridden1: DevKit.Controls.Boolean;
			/** Type the manual discount amount for the quote product to deduct any negotiated or other savings from the product total on the quote. */
			ManualDiscountAmount: DevKit.Controls.Money;
			/** The agreement that will be connected to this quote */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** Duration of the service associated with the quote line */
			msdyn_Duration: DevKit.Controls.Integer;
			/** End date of the service associated with the quote line */
			msdyn_EndDate: DevKit.Controls.Date;
			/** The estimated cost of this quote line */
			msdyn_EstimatedCost: DevKit.Controls.Money;
			/** The estimated margin of this quote line */
			msdyn_EstimatedMargin: DevKit.Controls.Decimal;
			msdyn_ImportDetailsFromAgreement: DevKit.Controls.Boolean;
			/** The field to distinguish the quote lines to be of project service or field service */
			msdyn_LineType: DevKit.Controls.OptionSet;
			/** The price list associated for the service account on this quote line */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** The sales tax code */
			msdyn_SalesTaxCode: DevKit.Controls.Lookup;
			/** The service account for this quote line */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Service territory of this service */
			msdyn_ServiceTerritory: DevKit.Controls.Lookup;
			/** Start Date of the service associated with the quote Line */
			msdyn_StartDate: DevKit.Controls.Date;
			/** States whether this is taxable */
			msdyn_Taxable: DevKit.Controls.Boolean;
			/** Type the price per unit of the quote product. The default is to the value in the price list specified on the quote for existing products. */
			PricePerUnit: DevKit.Controls.Money;
			/** Type a name or description to identify the type of write-in product included in the quote. */
			ProductDescription: DevKit.Controls.String;
			/** Choose the product to include on the quote to link the product's pricing and other information to the quote. */
			ProductId: DevKit.Controls.Lookup;
			/** Product Type */
			ProductTypeCode: DevKit.Controls.OptionSet;
			/** Type the amount or quantity of the product requested by the customer. */
			Quantity: DevKit.Controls.Decimal;
			/** Type the amount or quantity of the product requested by the customer. */
			Quantity1: DevKit.Controls.Decimal;
			/** Unique identifier of the quote for the quote product. */
			QuoteId: DevKit.Controls.Lookup;
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
			/** Type the tax amount for the quote product. */
			Tax: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Controls.Lookup;
			/** Shows the discount amount per unit if a specified volume is purchased. Configure volume discounts in the Product Catalog in the Settings area. */
			VolumeDiscountAmount: DevKit.Controls.Money;
			/** Select whether the quote product should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			QuoteBookingSetups: DevKit.Controls.Grid;
		}
	}
	class FormQuoteDetail_Field_Service_Information extends DevKit.IForm {
		/**
		* Field Service Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form QuoteDetail_Field_Service_Information */
		Body: DevKit.FormQuoteDetail_Field_Service_Information.Body;
		/** The Process of form QuoteDetail_Field_Service_Information */
		Process: DevKit.FormQuoteDetail_Field_Service_Information.Process;
		/** The Grid of form QuoteDetail_Field_Service_Information */
		Grid: DevKit.FormQuoteDetail_Field_Service_Information.Grid;
		/** The SidePanes of form QuoteDetail_Field_Service_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormQuoteDetail_Information {
		interface tab_address_Sections {
			ship_to_address: DevKit.Controls.Section;
		}
		interface tab_delivery_Sections {
			delivery_information: DevKit.Controls.Section;
		}
		interface tab_editproductpropertiesinlinetab_Sections {
			productpropertiessection: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			pricing: DevKit.Controls.Section;
			quote_detail_information: DevKit.Controls.Section;
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
			/** Shows the total price of the quote product, based on the price per unit, volume discount, and quantity. */
			BaseAmount: DevKit.Controls.Money;
			/** Shows the total amount due for the quote product, based on the sum of the unit price, quantity, discounts ,and tax. */
			ExtendedAmount: DevKit.Controls.Money;
			/** Select whether the price per unit is fixed at the value in the specified price list or can be overridden by users who have edit rights to the quote product. */
			IsPriceOverridden: DevKit.Controls.Boolean;
			/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the quote. */
			IsProductOverridden: DevKit.Controls.Boolean;
			/** Type the manual discount amount for the quote product to deduct any negotiated or other savings from the product total on the quote. */
			ManualDiscountAmount: DevKit.Controls.Money;
			/** The field to distinguish the quote lines to be of project service or field service */
			msdyn_LineType: DevKit.Controls.OptionSet;
			/** Type the price per unit of the quote product. The default is to the value in the price list specified on the quote for existing products. */
			PricePerUnit: DevKit.Controls.Money;
			/** Type a name or description to identify the type of write-in product included in the quote. */
			ProductDescription: DevKit.Controls.String;
			/** Choose the product to include on the quote to link the product's pricing and other information to the quote. */
			ProductId: DevKit.Controls.Lookup;
			editpropertiescontrol: DevKit.Controls.ActionCards;
			/** Type the amount or quantity of the product requested by the customer. */
			Quantity: DevKit.Controls.Decimal;
			/** Unique identifier of the quote for the quote product. */
			QuoteId: DevKit.Controls.Lookup;
			/** Unique identifier of the quote for the quote product. */
			QuoteId1: DevKit.Controls.Lookup;
			/** Enter the delivery date requested by the customer for the quote product. */
			RequestDeliveryBy: DevKit.Controls.Date;
			/** Choose the user responsible for the sale of the quote product. */
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
			/** Type the tax amount for the quote product. */
			Tax: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Controls.Lookup;
			/** Shows the discount amount per unit if a specified volume is purchased. Configure volume discounts in the Product Catalog in the Settings area. */
			VolumeDiscountAmount: DevKit.Controls.Money;
			/** Select whether the quote product should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormQuoteDetail_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form QuoteDetail_Information */
		Body: DevKit.FormQuoteDetail_Information.Body;
		/** The Process of form QuoteDetail_Information */
		Process: DevKit.FormQuoteDetail_Information.Process;
		/** The SidePanes of form QuoteDetail_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormQuoteDetail_Project_Information {
		interface tab_address_Sections {
			ship_to_address: DevKit.Controls.Section;
		}
		interface tab_ChargeableCategoriesTab_Sections {
			ChargeableCategories: DevKit.Controls.Section;
		}
		interface tab_ChargeableRolesTab_Sections {
			ChargeableRoles: DevKit.Controls.Section;
		}
		interface tab_delivery_Sections {
			delivery_information: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			pricing: DevKit.Controls.Section;
			quote_detail_information: DevKit.Controls.Section;
		}
		interface tab_GeneralProductTab_Sections {
			GeneralCostSection: DevKit.Controls.Section;
			GeneralProductSection: DevKit.Controls.Section;
			GeneralSalesSection: DevKit.Controls.Section;
		}
		interface tab_GeneralProjectTab_Sections {
			AmountsSection: DevKit.Controls.Section;
			ProjectSection: DevKit.Controls.Section;
			TransactionTypesSection: DevKit.Controls.Section;
		}
		interface tab_InvoiceScheduleTab_Sections {
			InvoiceScheduleSection: DevKit.Controls.Section;
			InvoiceScheduleTab_Header: DevKit.Controls.Section;
			MilestoneSection: DevKit.Controls.Section;
		}
		interface tab_ProductTypeTab_Sections {
			tab_8_section_1: DevKit.Controls.Section;
		}
		interface tab_TransactionsTab_Sections {
			TransactionSection: DevKit.Controls.Section;
		}
		interface tab_address extends DevKit.Controls.ITab {
			Section: tab_address_Sections;
		}
		interface tab_ChargeableCategoriesTab extends DevKit.Controls.ITab {
			Section: tab_ChargeableCategoriesTab_Sections;
		}
		interface tab_ChargeableRolesTab extends DevKit.Controls.ITab {
			Section: tab_ChargeableRolesTab_Sections;
		}
		interface tab_delivery extends DevKit.Controls.ITab {
			Section: tab_delivery_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_GeneralProductTab extends DevKit.Controls.ITab {
			Section: tab_GeneralProductTab_Sections;
		}
		interface tab_GeneralProjectTab extends DevKit.Controls.ITab {
			Section: tab_GeneralProjectTab_Sections;
		}
		interface tab_InvoiceScheduleTab extends DevKit.Controls.ITab {
			Section: tab_InvoiceScheduleTab_Sections;
		}
		interface tab_ProductTypeTab extends DevKit.Controls.ITab {
			Section: tab_ProductTypeTab_Sections;
		}
		interface tab_TransactionsTab extends DevKit.Controls.ITab {
			Section: tab_TransactionsTab_Sections;
		}
		interface Tabs {
			address: tab_address;
			ChargeableCategoriesTab: tab_ChargeableCategoriesTab;
			ChargeableRolesTab: tab_ChargeableRolesTab;
			delivery: tab_delivery;
			general: tab_general;
			GeneralProductTab: tab_GeneralProductTab;
			GeneralProjectTab: tab_GeneralProjectTab;
			InvoiceScheduleTab: tab_InvoiceScheduleTab;
			ProductTypeTab: tab_ProductTypeTab;
			TransactionsTab: tab_TransactionsTab;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the total price of the quote product, based on the price per unit, volume discount, and quantity. */
			BaseAmount: DevKit.Controls.Money;
			/** Shows the total amount due for the quote product, based on the sum of the unit price, quantity, discounts ,and tax. */
			ExtendedAmount: DevKit.Controls.Money;
			/** Shows the total amount due for the quote product, based on the sum of the unit price, quantity, discounts ,and tax. */
			ExtendedAmount1: DevKit.Controls.Money;
			/** Shows the total amount due for the quote product, based on the sum of the unit price, quantity, discounts ,and tax. */
			ExtendedAmount2: DevKit.Controls.Money;
			/** Select whether the price per unit is fixed at the value in the specified price list or can be overridden by users who have edit rights to the quote product. */
			IsPriceOverridden: DevKit.Controls.Boolean;
			/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the quote. */
			IsProductOverridden: DevKit.Controls.Boolean;
			/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the quote. */
			IsProductOverridden1: DevKit.Controls.Boolean;
			/** Type the manual discount amount for the quote product to deduct any negotiated or other savings from the product total on the quote. */
			ManualDiscountAmount: DevKit.Controls.Money;
			/** Billing method for the project quote line. Valid values are Time and Material and Fixed Price */
			msdyn_BillingMethod: DevKit.Controls.OptionSet;
			/** Enter the estimated start date for the billing frequency on the project. */
			msdyn_BillingStartDate: DevKit.Controls.Date;
			/** Enter the amount the customer has set aside or is willing to pay for the quote component. */
			msdyn_BudgetAmount: DevKit.Controls.Money;
			/** Enter the amount the customer has set aside or is willing to pay for the quote component. */
			msdyn_BudgetAmount1: DevKit.Controls.Money;
			/** Shows the total cost price of the product based on the cost price per unit and quantity. */
			msdyn_CostAmount: DevKit.Controls.Money;
			/** Cost per unit of the product. The default is the cost price of the product. */
			msdyn_CostPricePerUnit: DevKit.Controls.Money;
			/** Select whether to include expenses in the quote line. */
			msdyn_IncludeExpense: DevKit.Controls.Boolean;
			/** Select whether to include fees in the quote line. */
			msdyn_IncludeFee: DevKit.Controls.Boolean;
			/** Select whether to include time transactions in the quote line. */
			msdyn_IncludeTime: DevKit.Controls.Boolean;
			/** Select the frequency for the automatic invoice creation job to create the invoice. */
			msdyn_invoicefrequency: DevKit.Controls.Lookup;
			/** The field to distinguish the quote lines to be of project service or field service */
			msdyn_LineType: DevKit.Controls.OptionSet;
			/** Select the project related to this quote line. */
			msdyn_Project: DevKit.Controls.Lookup;
			/** Type the price per unit of the quote product. The default is to the value in the price list specified on the quote for existing products. */
			PricePerUnit: DevKit.Controls.Money;
			/** Type the price per unit of the quote product. The default is to the value in the price list specified on the quote for existing products. */
			PricePerUnit1: DevKit.Controls.Money;
			/** Type the price per unit of the quote product. The default is to the value in the price list specified on the quote for existing products. */
			PricePerUnit2: DevKit.Controls.Money;
			/** Type a name or description to identify the type of write-in product included in the quote. */
			ProductDescription: DevKit.Controls.String;
			/** Type a name or description to identify the type of write-in product included in the quote. */
			ProductDescription1: DevKit.Controls.String;
			/** Type a name or description to identify the type of write-in product included in the quote. */
			ProductDescription2: DevKit.Controls.String;
			/** Choose the product to include on the quote to link the product's pricing and other information to the quote. */
			ProductId: DevKit.Controls.Lookup;
			/** Choose the product to include on the quote to link the product's pricing and other information to the quote. */
			ProductId1: DevKit.Controls.Lookup;
			/** Product Type */
			ProductTypeCode: DevKit.Controls.OptionSet;
			/** Product Type */
			ProductTypeCode1: DevKit.Controls.OptionSet;
			/** Type the amount or quantity of the product requested by the customer. */
			Quantity: DevKit.Controls.Decimal;
			/** Type the amount or quantity of the product requested by the customer. */
			Quantity1: DevKit.Controls.Decimal;
			/** Unique identifier of the quote for the quote product. */
			QuoteId: DevKit.Controls.Lookup;
			/** Unique identifier of the quote for the quote product. */
			QuoteId1: DevKit.Controls.Lookup;
			/** Unique identifier of the quote for the quote product. */
			QuoteId2: DevKit.Controls.Lookup;
			/** Unique identifier of the quote for the quote product. */
			QuoteId3: DevKit.Controls.Lookup;
			/** Enter the delivery date requested by the customer for the quote product. */
			RequestDeliveryBy: DevKit.Controls.Date;
			/** Enter the delivery date requested by the customer for the quote product. */
			RequestDeliveryBy1: DevKit.Controls.Date;
			/** Choose the user responsible for the sale of the quote product. */
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
			/** Type the tax amount for the quote product. */
			Tax: DevKit.Controls.Money;
			/** Type the tax amount for the quote product. */
			Tax1: DevKit.Controls.Money;
			/** Type the tax amount for the quote product. */
			Tax2: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Controls.Lookup;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId1: DevKit.Controls.Lookup;
			/** Shows the discount amount per unit if a specified volume is purchased. Configure volume discounts in the Product Catalog in the Settings area. */
			VolumeDiscountAmount: DevKit.Controls.Money;
			/** Select whether the quote product should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			ChargeableCategoriesGrid: DevKit.Controls.Grid;
			ChargeableRolesGrid: DevKit.Controls.Grid;
			EstimationLines: DevKit.Controls.Grid;
			InvoiceScheduleGrid: DevKit.Controls.Grid;
			MilestonesGrid: DevKit.Controls.Grid;
		}
	}
	class FormQuoteDetail_Project_Information extends DevKit.IForm {
		/**
		* Project Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form QuoteDetail_Project_Information */
		Body: DevKit.FormQuoteDetail_Project_Information.Body;
		/** The Process of form QuoteDetail_Project_Information */
		Process: DevKit.FormQuoteDetail_Project_Information.Process;
		/** The Grid of form QuoteDetail_Project_Information */
		Grid: DevKit.FormQuoteDetail_Project_Information.Grid;
		/** The SidePanes of form QuoteDetail_Project_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormQuoteDetail {
		interface tab_general_Sections {
			delivery_information: DevKit.Controls.Section;
			pricing: DevKit.Controls.Section;
			quote_detail_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Select whether the price per unit is fixed at the value in the specified price list or can be overridden by users who have edit rights to the quote product. */
			IsPriceOverridden: DevKit.Controls.Boolean;
			/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the quote. */
			IsProductOverridden: DevKit.Controls.Boolean;
			/** Type the manual discount amount for the quote product to deduct any negotiated or other savings from the product total on the quote. */
			ManualDiscountAmount: DevKit.Controls.Money;
			/** Type the price per unit of the quote product. The default is to the value in the price list specified on the quote for existing products. */
			PricePerUnit: DevKit.Controls.Money;
			/** Type a name or description to identify the type of write-in product included in the quote. */
			ProductDescription: DevKit.Controls.String;
			/** Choose the product to include on the quote to link the product's pricing and other information to the quote. */
			ProductId: DevKit.Controls.Lookup;
			/** Type the amount or quantity of the product requested by the customer. */
			Quantity: DevKit.Controls.Decimal;
			/** Unique identifier of the quote for the quote product. */
			QuoteId: DevKit.Controls.Lookup;
			/** Enter the delivery date requested by the customer for the quote product. */
			RequestDeliveryBy: DevKit.Controls.Date;
			/** Choose the user responsible for the sale of the quote product. */
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
			/** Type the tax amount for the quote product. */
			Tax: DevKit.Controls.Money;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Controls.Lookup;
			/** Select whether the quote product should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Controls.Boolean;
		}
	}
	class FormQuoteDetail extends DevKit.IForm {
		/**
		* QuoteDetail [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form QuoteDetail */
		Body: DevKit.FormQuoteDetail.Body;
	}
	class QuoteDetailApi {
		/**
		* DynamicsCrm.DevKit QuoteDetailApi
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
		/** Shows the total price of the quote product, based on the price per unit, volume discount, and quantity. */
		BaseAmount: number;
		/** Value of the Amount in base currency. */
		readonly BaseAmount_Base: number;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type additional information to describe the quote product, such as manufacturing details or acceptable substitutions. */
		Description: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Shows the total amount due for the quote product, based on the sum of the unit price, quantity, discounts ,and tax. */
		ExtendedAmount: number;
		/** Value of the Extended Amount in base currency. */
		readonly ExtendedAmount_Base: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Select whether the price per unit is fixed at the value in the specified price list or can be overridden by users who have edit rights to the quote product. */
		IsPriceOverridden: boolean;
		/** Select whether the product exists in the Microsoft Dynamics 365 product catalog or is a write-in product specific to the quote. */
		IsProductOverridden: boolean;
		/** Type the line item number for the quote product to easily identify the product in the quote and make sure it's listed in the correct order. */
		LineItemNumber: number;
		/** Type the manual discount amount for the quote product to deduct any negotiated or other savings from the product total on the quote. */
		ManualDiscountAmount: number;
		/** Value of the Manual Discount in base currency. */
		readonly ManualDiscountAmount_Base: number;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** The agreement that will be connected to this quote */
		msdyn_Agreement: string;
		/** Billing method for the project quote line. Valid values are Time and Material and Fixed Price */
		msdyn_BillingMethod: OptionSet.QuoteDetail.msdyn_BillingMethod;
		/** Enter the estimated start date for the billing frequency on the project. */
		msdyn_BillingStartDate_UtcDateOnly: Date;
		/** Enter the amount the customer has set aside or is willing to pay for the quote component. */
		msdyn_BudgetAmount: number;
		/** Value of the Budget Amount in base currency. */
		readonly msdyn_budgetamount_Base: number;
		/** Shows the total cost price of the product based on the cost price per unit and quantity. */
		msdyn_CostAmount: number;
		/** Value of the CostAmount in base currency. */
		readonly msdyn_costamount_Base: number;
		/** Cost per unit of the product. The default is the cost price of the product. */
		msdyn_CostPricePerUnit: number;
		/** Value of the Cost Price Per Unit in base currency. */
		readonly msdyn_costpriceperunit_Base: number;
		/** Duration of the service associated with the quote line */
		msdyn_Duration: number;
		/** End date of the service associated with the quote line */
		msdyn_EndDate_UtcDateOnly: Date;
		/** The estimated cost of this quote line */
		msdyn_EstimatedCost: number;
		/** Value of the EstimatedCost in base currency. */
		readonly msdyn_estimatedcost_Base: number;
		/** The estimated margin of this quote line */
		msdyn_EstimatedMargin: number;
		/** The estimated revenue of this quote line */
		msdyn_EstimatedRevenue: number;
		/** Value of the EstimatedRevenue in base currency. */
		readonly msdyn_estimatedrevenue_Base: number;
		msdyn_ImportDetailsFromAgreement: boolean;
		/** Select whether to include expenses in the quote line. */
		msdyn_IncludeExpense: boolean;
		/** Select whether to include fees in the quote line. */
		msdyn_IncludeFee: boolean;
		/** Select whether to include materials in the quote line. */
		msdyn_IncludeMaterial: boolean;
		/** Select whether to include time transactions in the quote line. */
		msdyn_IncludeTime: boolean;
		/** Select the frequency for the automatic invoice creation job to create the invoice. */
		msdyn_invoicefrequency: string;
		/** abstracts description for product based lines vs write-in products or project based lines */
		readonly msdyn_linedescription: string;
		/** The field to distinguish the quote lines to be of project service or field service */
		msdyn_LineType: OptionSet.QuoteDetail.msdyn_LineType;
		/** Shows the opportunity line related to this quote line. */
		msdyn_OpportunityLine: string;
		/** The price list associated for the service account on this quote line */
		msdyn_PriceList: string;
		/** Select the project related to this quote line. */
		msdyn_Project: string;
		/** The sales tax code */
		msdyn_SalesTaxCode: string;
		/** The service account for this quote line */
		msdyn_ServiceAccount: string;
		/** Service territory of this service */
		msdyn_ServiceTerritory: string;
		/** Start Date of the service associated with the quote Line */
		msdyn_StartDate_UtcDateOnly: Date;
		/** States whether this is taxable */
		msdyn_Taxable: boolean;
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
		/** Type the price per unit of the quote product. The default is to the value in the price list specified on the quote for existing products. */
		PricePerUnit: number;
		/** Value of the Price Per Unit in base currency. */
		readonly PricePerUnit_Base: number;
		/** Select the type of pricing error, such as a missing or invalid product, or missing quantity. */
		PricingErrorCode: OptionSet.QuoteDetail.PricingErrorCode;
		/** Unique identifier of the product line item association with bundle in the quote */
		ProductAssociationId: string;
		/** Type a name or description to identify the type of write-in product included in the quote. */
		ProductDescription: string;
		/** Choose the product to include on the quote to link the product's pricing and other information to the quote. */
		ProductId: string;
		/** Calculated field that will be populated by name and description of the product. */
		ProductName: string;
		/** User-defined product ID. */
		readonly ProductNumber: string;
		/** Product Type */
		ProductTypeCode: OptionSet.QuoteDetail.ProductTypeCode;
		/** Status of the property configuration. */
		PropertyConfigurationStatus: OptionSet.QuoteDetail.PropertyConfigurationStatus;
		/** Type the amount or quantity of the product requested by the customer. */
		Quantity: number;
		/** Unique identifier of the product line item in the quote. */
		QuoteDetailId: string;
		/** Quote Detail Name. Added for 1:n referential relationship (internal purposes only) */
		QuoteDetailName: string;
		/** Unique identifier of the quote for the quote product. */
		QuoteId: string;
		/** Status of the quote product. */
		readonly QuoteStateCode: OptionSet.QuoteDetail.QuoteStateCode;
		/** Enter the delivery date requested by the customer for the quote product. */
		RequestDeliveryBy_UtcDateOnly: Date;
		/** Choose the user responsible for the sale of the quote product. */
		SalesRepId: string;
		/** Unique identifier of the data that maintains the sequence. */
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
		ShipTo_FreightTermsCode: OptionSet.QuoteDetail.ShipTo_FreightTermsCode;
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
		/** Skip the price */
		SkipPriceCalculation: OptionSet.QuoteDetail.SkipPriceCalculation;
		/** Type the tax amount for the quote product. */
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
		/** Select whether the quote product should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
		WillCall: boolean;
	}
}
declare namespace OptionSet {
	namespace QuoteDetail {
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