//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormInvoice_Information {
		interface tab_general_Sections {
			invoice_information: DevKit.Form.Controls.ControlSection;
			totals: DevKit.Form.Controls.ControlSection;
		}
		interface tab_shipping_Sections {
			dates: DevKit.Form.Controls.ControlSection;
			shipping_information: DevKit.Form.Controls.ControlSection;
			description: DevKit.Form.Controls.ControlSection;
		}
		interface tab_addresses_Sections {
			bill_to_address: DevKit.Form.Controls.ControlSection;
			ship_to_address: DevKit.Form.Controls.ControlSection;
		}
		interface tab_administration_Sections {
			internal_information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_notes_Sections {
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab_shipping extends DevKit.Form.Controls.IControlTab {
			Section: tab_shipping_Sections;
		}
		interface tab_addresses extends DevKit.Form.Controls.IControlTab {
			Section: tab_addresses_Sections;
		}
		interface tab_administration extends DevKit.Form.Controls.IControlTab {
			Section: tab_administration_Sections;
		}
		interface tab_notes extends DevKit.Form.Controls.IControlTab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			general: tab_general;
			shipping: tab_shipping;
			addresses: tab_addresses;
			administration: tab_administration;
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Type the city for the customer's billing address. */
			BillTo_City: DevKit.Form.Controls.ControlString;
			/** Type the country or region for the customer's billing address. */
			BillTo_Country: DevKit.Form.Controls.ControlString;
			/** Type the fax number for the customer's billing address. */
			BillTo_Fax: DevKit.Form.Controls.ControlString;
			/** Type the first line of the customer's billing address. */
			BillTo_Line1: DevKit.Form.Controls.ControlString;
			/** Type the second line of the customer's billing address. */
			BillTo_Line2: DevKit.Form.Controls.ControlString;
			/** Type the third line of the billing address. */
			BillTo_Line3: DevKit.Form.Controls.ControlString;
			/** Type a name for the customer's billing address, such as "Headquarters" or "Field office", to identify the address. */
			BillTo_Name: DevKit.Form.Controls.ControlString;
			/** Type the ZIP Code or postal code for the billing address. */
			BillTo_PostalCode: DevKit.Form.Controls.ControlString;
			/** Type the state or province for the billing address. */
			BillTo_StateOrProvince: DevKit.Form.Controls.ControlString;
			/** Type the phone number for the customer's billing address. */
			BillTo_Telephone: DevKit.Form.Controls.ControlString;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Enter the date when the products included in the invoice were delivered. */
			DateDelivered: DevKit.Form.Controls.ControlDate;
			/** Type additional information to describe the invoice, such as shipping details or product substitutions. */
			Description: DevKit.Form.Controls.ControlString;
			/** Type the discount amount for the invoice if the customer is eligible for special savings. */
			DiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Type the discount rate that should be applied to the Detail Amount field, for use in calculating the Pre-Freight Amount and Total Amount values for the invoice. */
			DiscountPercentage: DevKit.Form.Controls.ControlDecimal;
			/** Enter the date by which the invoice should be paid by the customer. */
			DueDate: DevKit.Form.Controls.ControlDate;
			/** Type the cost of freight or shipping for the products included in the invoice for use in calculating the total amount due. */
			FreightAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the identifying number or code of the invoice. */
			InvoiceNumber: DevKit.Form.Controls.ControlString;
			/** Select whether prices specified on the invoice are locked from any further updates. */
			IsPriceLocked: DevKit.Form.Controls.ControlBoolean;
			/** Type a descriptive name for the invoice. */
			Name: DevKit.Form.Controls.ControlString;
			/** Choose the opportunity that the invoice is related to for reporting and analytics. */
			OpportunityId: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Form.Controls.ControlLookup;
			/** Choose the order related to the invoice to make sure the order is fulfilled and invoiced correctly. */
			SalesOrderId: DevKit.Form.Controls.ControlLookup;
			/** Select a shipping method for deliveries sent to this address. */
			ShippingMethodCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type the city for the customer's shipping address. */
			ShipTo_City: DevKit.Form.Controls.ControlString;
			/** Type the country or region for the customer's shipping address. */
			ShipTo_Country: DevKit.Form.Controls.ControlString;
			/** Type the fax number for the customer's shipping address. */
			ShipTo_Fax: DevKit.Form.Controls.ControlString;
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
			/** Select the invoice's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the total amount due, calculated as the sum of the products, discount, freight, and taxes for the invoice. */
			TotalAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total product amount due, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount due for the invoice. */
			TotalAmountLessFreight: DevKit.Form.Controls.ControlMoney;
			/** Shows the sum of all existing and write-in products included on the invoice, based on the specified price list and quantities. */
			TotalLineItemAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total of the Tax amounts specified on all products included in the invoice, included in the Total Amount due calculation for the invoice. */
			TotalTax: DevKit.Form.Controls.ControlMoney;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
			/** Select whether the products included in the invoice should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Form.Controls.ControlBoolean;
		}
		interface ProcessProject_Service_Invoice_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Choose the order related to the invoice to make sure the order is fulfilled and invoiced correctly. */
			SalesOrderId: DevKit.Form.Controls.ControlLookup;
			/** Shows the total amount due, calculated as the sum of the products, discount, freight, and taxes for the invoice. */
			TotalAmount: DevKit.Form.Controls.ControlMoney;
		}
		interface Process extends DevKit.Form.Controls.IControlProcess {
			Project_Service_Invoice_Process: ProcessProject_Service_Invoice_Process;
		}
	}
	class FormInvoice_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Invoice_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Invoice_Information */
		Body: LuckyMokey.FormInvoice_Information.Body;
		/** The Process of form Invoice_Information */
		Process: LuckyMokey.FormInvoice_Information.Process;
	}
	namespace FormInvoice {
		interface Header {
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Shows whether the invoice is active, paid, or canceled. Paid and canceled invoices are read-only and can't be edited unless they are reactivated. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select the invoice's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the total amount due, calculated as the sum of the products, discount, freight, and taxes for the invoice. */
			TotalAmount: DevKit.Form.Controls.ControlMoney;
		}
		interface tab_Summary_tab_Sections {
			invoice_information: DevKit.Form.Controls.ControlSection;
			dates: DevKit.Form.Controls.ControlSection;
			shipping_information: DevKit.Form.Controls.ControlSection;
			addresses: DevKit.Form.Controls.ControlSection;
			products: DevKit.Form.Controls.ControlSection;
			suggestionsection: DevKit.Form.Controls.ControlSection;
			DynamicProperties: DevKit.Form.Controls.ControlSection;
			totals: DevKit.Form.Controls.ControlSection;
			sales_information: DevKit.Form.Controls.ControlSection;
			description_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_details_tab_Sections {
			Social_Pane: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Summary_tab extends DevKit.Form.Controls.IControlTab {
			Section: tab_Summary_tab_Sections;
		}
		interface tab_details_tab extends DevKit.Form.Controls.IControlTab {
			Section: tab_details_tab_Sections;
		}
		interface Tabs {
			Summary_tab: tab_Summary_tab;
			details_tab: tab_details_tab;
		}
		interface Body {
			Tab: Tabs;
			invoicedetailsGrid: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Shows the complete Bill To address. */
			BillTo_Composite: DevKit.Form.Controls.ControlString;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Enter the date when the products included in the invoice were delivered. */
			DateDelivered: DevKit.Form.Controls.ControlDate;
			/** Type additional information to describe the invoice, such as shipping details or product substitutions. */
			Description: DevKit.Form.Controls.ControlString;
			/** Type the discount amount for the invoice if the customer is eligible for special savings. */
			DiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Type the discount rate that should be applied to the Detail Amount field, for use in calculating the Pre-Freight Amount and Total Amount values for the invoice. */
			DiscountPercentage: DevKit.Form.Controls.ControlDecimal;
			/** Enter the date by which the invoice should be paid by the customer. */
			DueDate: DevKit.Form.Controls.ControlDate;
			/** Type the cost of freight or shipping for the products included in the invoice for use in calculating the total amount due. */
			FreightAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the identifying number or code of the invoice. */
			InvoiceNumber: DevKit.Form.Controls.ControlString;
			/** Select whether prices specified on the invoice are locked from any further updates. */
			IsPriceLocked: DevKit.Form.Controls.ControlBoolean;
			/** Whether the Invoice is for an Item-based or a service maintainence-based sale */
			msdyn_OrderType: DevKit.Form.Controls.ControlOptionSet;
			/** Type a descriptive name for the invoice. */
			Name: DevKit.Form.Controls.ControlString;
			/** Choose the opportunity that the invoice is related to for reporting and analytics. */
			OpportunityId: DevKit.Form.Controls.ControlLookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Form.Controls.ControlLookup;
			/** Choose the order related to the invoice to make sure the order is fulfilled and invoiced correctly. */
			SalesOrderId: DevKit.Form.Controls.ControlLookup;
			/** Select a shipping method for deliveries sent to this address. */
			ShippingMethodCode: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the complete Ship To address. */
			ShipTo_Composite: DevKit.Form.Controls.ControlString;
			/** Shows the total amount due, calculated as the sum of the products, discount, freight, and taxes for the invoice. */
			TotalAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total product amount due, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount due for the invoice. */
			TotalAmountLessFreight: DevKit.Form.Controls.ControlMoney;
			/** Shows the sum of all existing and write-in products included on the invoice, based on the specified price list and quantities. */
			TotalLineItemAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total of the Tax amounts specified on all products included in the invoice, included in the Total Amount due calculation for the invoice. */
			TotalTax: DevKit.Form.Controls.ControlMoney;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
			/** Select whether the products included in the invoice should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Form.Controls.ControlBoolean;
		}
		interface Navigation {
			navProducts: DevKit.Form.Controls.ControlNavigationItem
		}
		interface ProcessProject_Service_Invoice_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Choose the order related to the invoice to make sure the order is fulfilled and invoiced correctly. */
			SalesOrderId: DevKit.Form.Controls.ControlLookup;
			/** Shows the total amount due, calculated as the sum of the products, discount, freight, and taxes for the invoice. */
			TotalAmount: DevKit.Form.Controls.ControlMoney;
		}
		interface Process extends DevKit.Form.Controls.IControlProcess {
			Project_Service_Invoice_Process: ProcessProject_Service_Invoice_Process;
		}
	}
	class FormInvoice extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Invoice
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Invoice */
		Body: LuckyMokey.FormInvoice.Body;
		/** The Header section of form Invoice */
		Header: LuckyMokey.FormInvoice.Header;
		/** The Navigation of form Invoice */
		Navigation: LuckyMokey.FormInvoice.Navigation;
		/** The Process of form Invoice */
		Process: LuckyMokey.FormInvoice.Process;
	}
	namespace FormProject_Invoice {
		interface Header {
			/** Project specific status */
			msdyn_projectinvoicestatus: DevKit.Form.Controls.ControlOptionSet;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Shows whether the invoice is active, paid, or canceled. Paid and canceled invoices are read-only and can't be edited unless they are reactivated. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the total amount due, calculated as the sum of the products, discount, freight, and taxes for the invoice. */
			TotalAmount: DevKit.Form.Controls.ControlMoney;
		}
		interface tab_Summary_tab_project_Sections {
			tab_5_section_1: DevKit.Form.Controls.ControlSection;
			Summary_tab_project_section_3: DevKit.Form.Controls.ControlSection;
			tab_5_section_2: DevKit.Form.Controls.ControlSection;
			Summary_tab_project_section_5: DevKit.Form.Controls.ControlSection;
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
			products: DevKit.Form.Controls.ControlSection;
			totals: DevKit.Form.Controls.ControlSection;
		}
		interface tab_HiddenLockedFields_Sections {
			tab_5_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_details_tab_Sections {
			Social_Pane: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Summary_tab_project extends DevKit.Form.Controls.IControlTab {
			Section: tab_Summary_tab_project_Sections;
		}
		interface tab_HiddenLockedFields extends DevKit.Form.Controls.IControlTab {
			Section: tab_HiddenLockedFields_Sections;
		}
		interface tab_details_tab extends DevKit.Form.Controls.IControlTab {
			Section: tab_details_tab_Sections;
		}
		interface Tabs {
			Summary_tab_project: tab_Summary_tab_project;
			HiddenLockedFields: tab_HiddenLockedFields;
			details_tab: tab_details_tab;
		}
		interface Body {
			Tab: Tabs;
			ProjectInvoiceLines: DevKit.Form.Controls.ControlGrid;
			invoicedetailsGrid: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Shows the complete Bill To address. */
			BillTo_Composite: DevKit.Form.Controls.ControlString;
			/** Type a name for the customer's billing address, such as "Headquarters" or "Field office", to identify the address. */
			BillTo_Name: DevKit.Form.Controls.ControlString;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Type additional information to describe the invoice, such as shipping details or product substitutions. */
			Description: DevKit.Form.Controls.ControlString;
			/** Type the discount amount for the invoice if the customer is eligible for special savings. */
			DiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Type the discount rate that should be applied to the Detail Amount field, for use in calculating the Pre-Freight Amount and Total Amount values for the invoice. */
			DiscountPercentage: DevKit.Form.Controls.ControlDecimal;
			/** Enter the date by which the invoice should be paid by the customer. */
			DueDate: DevKit.Form.Controls.ControlDate;
			/** Type the cost of freight or shipping for the products included in the invoice for use in calculating the total amount due. */
			FreightAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the identifying number or code of the invoice. */
			InvoiceNumber: DevKit.Form.Controls.ControlString;
			/** Type the primary contact name at the customer's billing address. */
			msdyn_billtocontactname: DevKit.Form.Controls.ControlString;
			/** Whether the Invoice is for an Item-based or a service maintainence-based sale */
			msdyn_OrderType: DevKit.Form.Controls.ControlOptionSet;
			/** Type a descriptive name for the invoice. */
			Name: DevKit.Form.Controls.ControlString;
			/** Choose the opportunity that the invoice is related to for reporting and analytics. */
			OpportunityId: DevKit.Form.Controls.ControlLookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Form.Controls.ControlLookup;
			/** Choose the order related to the invoice to make sure the order is fulfilled and invoiced correctly. */
			SalesOrderId: DevKit.Form.Controls.ControlLookup;
			/** Shows the total amount due, calculated as the sum of the products, discount, freight, and taxes for the invoice. */
			TotalAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total product amount due, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount due for the invoice. */
			TotalAmountLessFreight: DevKit.Form.Controls.ControlMoney;
			/** Shows the sum of all existing and write-in products included on the invoice, based on the specified price list and quantities. */
			TotalLineItemAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total of the Tax amounts specified on all products included in the invoice, included in the Total Amount due calculation for the invoice. */
			TotalTax: DevKit.Form.Controls.ControlMoney;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
			/** Select whether the products included in the invoice should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Form.Controls.ControlBoolean;
		}
		interface Navigation {
			navProducts: DevKit.Form.Controls.ControlNavigationItem
		}
		interface ProcessProject_Service_Invoice_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Choose the order related to the invoice to make sure the order is fulfilled and invoiced correctly. */
			SalesOrderId: DevKit.Form.Controls.ControlLookup;
			/** Shows the total amount due, calculated as the sum of the products, discount, freight, and taxes for the invoice. */
			TotalAmount: DevKit.Form.Controls.ControlMoney;
		}
		interface Process extends DevKit.Form.Controls.IControlProcess {
			Project_Service_Invoice_Process: ProcessProject_Service_Invoice_Process;
		}
	}
	class FormProject_Invoice extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Project_Invoice
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Project_Invoice */
		Body: LuckyMokey.FormProject_Invoice.Body;
		/** The Header section of form Project_Invoice */
		Header: LuckyMokey.FormProject_Invoice.Header;
		/** The Navigation of form Project_Invoice */
		Navigation: LuckyMokey.FormProject_Invoice.Navigation;
		/** The Process of form Project_Invoice */
		Process: LuckyMokey.FormProject_Invoice.Process;
	}
}
declare namespace OptionSet {
	namespace Invoice {
		enum msdyn_OrderType {
			/** 192350001 */
			Work_based,
			/** 192350000 */
			Item_based,
			/** 690970002 */
			Service_Maintenance_Based
		}
		enum msdyn_projectinvoicestatus {
			/** 192350000 */
			Draft,
			/** 192350001 */
			In_Review,
			/** 192350002 */
			Confirmed,
			/** 192350003 */
			Invoice_Paid
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
		enum PriorityCode {
			/** 1 */
			Default_Value
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
			Active,
			/** 1 */
			Closed_deprecated,
			/** 2 */
			Paid,
			/** 3 */
			Canceled
		}
		enum StatusCode {
			/** 1 */
			New,
			/** 2 */
			Partially_Shipped,
			/** 4 */
			Billed,
			/** 5 */
			Booked_applies_to_services,
			/** 6 */
			Installed_applies_to_services,
			/** 3 */
			Canceled_deprecated,
			/** 7 */
			Paid_in_Full_deprecated,
			/** 100001 */
			Complete,
			/** 100002 */
			Partial,
			/** 100003 */
			Canceled
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
//{'JsForm':['Information','Invoice','Project Invoice'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}