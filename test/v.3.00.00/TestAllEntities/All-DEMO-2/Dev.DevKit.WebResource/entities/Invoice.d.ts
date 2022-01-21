//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormInvoice_Field_Service_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows whether the invoice is active, paid, or canceled. Paid and canceled invoices are read-only and can't be edited unless they are reactivated. */
			StateCode: DevKit.Controls.OptionSet;
			/** Select the invoice's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Shows the total amount due, calculated as the sum of the products, discount, freight, and taxes for the invoice. */
			TotalAmount: DevKit.Controls.Money;
		}
		interface tab_details_tab_Sections {
			details_tab_section_4: DevKit.Controls.Section;
		}
		interface tab_Summary_tab_Sections {
			addresses: DevKit.Controls.Section;
			dates: DevKit.Controls.Section;
			details_tab_section_3: DevKit.Controls.Section;
			DynamicProperties: DevKit.Controls.Section;
			HiddenFields: DevKit.Controls.Section;
			invoice_information: DevKit.Controls.Section;
			InvoicePeriodSection: DevKit.Controls.Section;
			products: DevKit.Controls.Section;
			ServicingSection: DevKit.Controls.Section;
			shipping_information: DevKit.Controls.Section;
			Social_Pane: DevKit.Controls.Section;
			Summary_tab_section_11: DevKit.Controls.Section;
			Summary_tab_section_13: DevKit.Controls.Section;
			totals: DevKit.Controls.Section;
		}
		interface tab_details_tab extends DevKit.Controls.ITab {
			Section: tab_details_tab_Sections;
		}
		interface tab_Summary_tab extends DevKit.Controls.ITab {
			Section: tab_Summary_tab_Sections;
		}
		interface Tabs {
			details_tab: tab_details_tab;
			Summary_tab: tab_Summary_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the complete Bill To address. */
			BillTo_Composite: DevKit.Controls.String;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Enter the date when the products included in the invoice were delivered. */
			DateDelivered: DevKit.Controls.Date;
			/** Type additional information to describe the invoice, such as shipping details or product substitutions. */
			Description: DevKit.Controls.String;
			/** Type the discount amount for the invoice if the customer is eligible for special savings. */
			DiscountAmount: DevKit.Controls.Money;
			/** Type the discount rate that should be applied to the Detail Amount field, for use in calculating the Pre-Freight Amount and Total Amount values for the invoice. */
			DiscountPercentage: DevKit.Controls.Decimal;
			/** Enter the date by which the invoice should be paid by the customer. */
			DueDate: DevKit.Controls.Date;
			/** Type the cost of freight or shipping for the products included in the invoice for use in calculating the total amount due. */
			FreightAmount: DevKit.Controls.Money;
			/** Shows the identifying number or code of the invoice. */
			InvoiceNumber: DevKit.Controls.String;
			/** Select whether prices specified on the invoice are locked from any further updates. */
			IsPriceLocked: DevKit.Controls.Boolean;
			/** Document date of the Invoice for use in calculation of payment due date */
			msdyn_InvoiceDate: DevKit.Controls.Date;
			/** Whether the Invoice is for an Item-based or a service maintainence-based sale */
			msdyn_OrderType: DevKit.Controls.OptionSet;
			/** Type a descriptive name for the invoice. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Choose the opportunity that the invoice is related to for reporting and analytics. */
			OpportunityId: DevKit.Controls.Lookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Controls.Lookup;
			/** Choose the order related to the invoice to make sure the order is fulfilled and invoiced correctly. */
			SalesOrderId: DevKit.Controls.Lookup;
			/** Select a shipping method for deliveries sent to this address. */
			ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Shows the complete Ship To address. */
			ShipTo_Composite: DevKit.Controls.String;
			/** Shows the total amount due, calculated as the sum of the products, discount, freight, and taxes for the invoice. */
			TotalAmount: DevKit.Controls.Money;
			/** Shows the total product amount due, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount due for the invoice. */
			TotalAmountLessFreight: DevKit.Controls.Money;
			/** Shows the sum of all existing and write-in products included on the invoice, based on the specified price list and quantities. */
			TotalLineItemAmount: DevKit.Controls.Money;
			/** Shows the total of the Tax amounts specified on all products included in the invoice, included in the Total Amount due calculation for the invoice. */
			TotalTax: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Select whether the products included in the invoice should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Controls.Boolean;
		}
		interface Navigation {
			nav_msdyn_invoice_msdyn_agreementinvoicedate_Invoice: DevKit.Controls.NavigationItem,
			nav_msdyn_invoice_msdyn_orderinvoicingdate_Invoice: DevKit.Controls.NavigationItem,
			nav_msdyn_invoice_msdyn_orderinvoicingsetupdate_Invoice: DevKit.Controls.NavigationItem,
			nav_msdyn_invoice_msdyn_paymentdetail_Invoice: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			navProducts: DevKit.Controls.NavigationItem
		}
		interface ProcessProject_Service_Invoice_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Choose the order related to the invoice to make sure the order is fulfilled and invoiced correctly. */
			SalesOrderId: DevKit.Controls.Lookup;
			/** Shows the total amount due, calculated as the sum of the products, discount, freight, and taxes for the invoice. */
			TotalAmount: DevKit.Controls.Money;
		}
		interface Process extends DevKit.Controls.IProcess {
			Project_Service_Invoice_Process: ProcessProject_Service_Invoice_Process;
		}
		interface Grid {
			GridInvoicingPeriod: DevKit.Controls.Grid;
			GridServiceLines: DevKit.Controls.Grid;
			invoicedetailsGrid: DevKit.Controls.Grid;
		}
	}
	class FormInvoice_Field_Service_Information extends DevKit.IForm {
		/**
		* Field Service Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Invoice_Field_Service_Information */
		Body: DevKit.FormInvoice_Field_Service_Information.Body;
		/** The Header section of form Invoice_Field_Service_Information */
		Header: DevKit.FormInvoice_Field_Service_Information.Header;
		/** The Navigation of form Invoice_Field_Service_Information */
		Navigation: DevKit.FormInvoice_Field_Service_Information.Navigation;
		/** The Process of form Invoice_Field_Service_Information */
		Process: DevKit.FormInvoice_Field_Service_Information.Process;
		/** The Grid of form Invoice_Field_Service_Information */
		Grid: DevKit.FormInvoice_Field_Service_Information.Grid;
		/** The SidePanes of form Invoice_Field_Service_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormInvoice_Information {
		interface tab_addresses_Sections {
			bill_to_address: DevKit.Controls.Section;
			ship_to_address: DevKit.Controls.Section;
		}
		interface tab_administration_Sections {
			internal_information: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			invoice_information: DevKit.Controls.Section;
			totals: DevKit.Controls.Section;
		}
		interface tab_notes_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab_shipping_Sections {
			dates: DevKit.Controls.Section;
			description: DevKit.Controls.Section;
			shipping_information: DevKit.Controls.Section;
		}
		interface tab_addresses extends DevKit.Controls.ITab {
			Section: tab_addresses_Sections;
		}
		interface tab_administration extends DevKit.Controls.ITab {
			Section: tab_administration_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface tab_shipping extends DevKit.Controls.ITab {
			Section: tab_shipping_Sections;
		}
		interface Tabs {
			addresses: tab_addresses;
			administration: tab_administration;
			general: tab_general;
			notes: tab_notes;
			shipping: tab_shipping;
		}
		interface Body {
			Tab: Tabs;
			/** Type the city for the customer's billing address. */
			BillTo_City: DevKit.Controls.String;
			/** Type the country or region for the customer's billing address. */
			BillTo_Country: DevKit.Controls.String;
			/** Type the fax number for the customer's billing address. */
			BillTo_Fax: DevKit.Controls.String;
			/** Type the first line of the customer's billing address. */
			BillTo_Line1: DevKit.Controls.String;
			/** Type the second line of the customer's billing address. */
			BillTo_Line2: DevKit.Controls.String;
			/** Type the third line of the billing address. */
			BillTo_Line3: DevKit.Controls.String;
			/** Type a name for the customer's billing address, such as "Headquarters" or "Field office", to identify the address. */
			BillTo_Name: DevKit.Controls.String;
			/** Type the ZIP Code or postal code for the billing address. */
			BillTo_PostalCode: DevKit.Controls.String;
			/** Type the state or province for the billing address. */
			BillTo_StateOrProvince: DevKit.Controls.String;
			/** Type the phone number for the customer's billing address. */
			BillTo_Telephone: DevKit.Controls.String;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Enter the date when the products included in the invoice were delivered. */
			DateDelivered: DevKit.Controls.Date;
			/** Type additional information to describe the invoice, such as shipping details or product substitutions. */
			Description: DevKit.Controls.String;
			/** Type the discount amount for the invoice if the customer is eligible for special savings. */
			DiscountAmount: DevKit.Controls.Money;
			/** Type the discount rate that should be applied to the Detail Amount field, for use in calculating the Pre-Freight Amount and Total Amount values for the invoice. */
			DiscountPercentage: DevKit.Controls.Decimal;
			/** Enter the date by which the invoice should be paid by the customer. */
			DueDate: DevKit.Controls.Date;
			/** Type the cost of freight or shipping for the products included in the invoice for use in calculating the total amount due. */
			FreightAmount: DevKit.Controls.Money;
			/** Shows the identifying number or code of the invoice. */
			InvoiceNumber: DevKit.Controls.String;
			/** Select whether prices specified on the invoice are locked from any further updates. */
			IsPriceLocked: DevKit.Controls.Boolean;
			/** Type a descriptive name for the invoice. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Choose the opportunity that the invoice is related to for reporting and analytics. */
			OpportunityId: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Controls.Lookup;
			/** Choose the order related to the invoice to make sure the order is fulfilled and invoiced correctly. */
			SalesOrderId: DevKit.Controls.Lookup;
			/** Select a shipping method for deliveries sent to this address. */
			ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Type the city for the customer's shipping address. */
			ShipTo_City: DevKit.Controls.String;
			/** Type the country or region for the customer's shipping address. */
			ShipTo_Country: DevKit.Controls.String;
			/** Type the fax number for the customer's shipping address. */
			ShipTo_Fax: DevKit.Controls.String;
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
			/** Select the invoice's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Shows the total amount due, calculated as the sum of the products, discount, freight, and taxes for the invoice. */
			TotalAmount: DevKit.Controls.Money;
			/** Shows the total product amount due, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount due for the invoice. */
			TotalAmountLessFreight: DevKit.Controls.Money;
			/** Shows the sum of all existing and write-in products included on the invoice, based on the specified price list and quantities. */
			TotalLineItemAmount: DevKit.Controls.Money;
			/** Shows the total of the Tax amounts specified on all products included in the invoice, included in the Total Amount due calculation for the invoice. */
			TotalTax: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Select whether the products included in the invoice should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Controls.Boolean;
		}
		interface ProcessProject_Service_Invoice_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Choose the order related to the invoice to make sure the order is fulfilled and invoiced correctly. */
			SalesOrderId: DevKit.Controls.Lookup;
			/** Shows the total amount due, calculated as the sum of the products, discount, freight, and taxes for the invoice. */
			TotalAmount: DevKit.Controls.Money;
		}
		interface Process extends DevKit.Controls.IProcess {
			Project_Service_Invoice_Process: ProcessProject_Service_Invoice_Process;
		}
	}
	class FormInvoice_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Invoice_Information */
		Body: DevKit.FormInvoice_Information.Body;
		/** The Process of form Invoice_Information */
		Process: DevKit.FormInvoice_Information.Process;
		/** The SidePanes of form Invoice_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormInvoice {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows whether the invoice is active, paid, or canceled. Paid and canceled invoices are read-only and can't be edited unless they are reactivated. */
			StateCode: DevKit.Controls.OptionSet;
			/** Select the invoice's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Shows the total amount due, calculated as the sum of the products, discount, freight, and taxes for the invoice. */
			TotalAmount: DevKit.Controls.Money;
		}
		interface tab_details_tab_Sections {
			Social_Pane: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_Summary_tab_Sections {
			addresses: DevKit.Controls.Section;
			dates: DevKit.Controls.Section;
			description_section: DevKit.Controls.Section;
			DynamicProperties: DevKit.Controls.Section;
			invoice_information: DevKit.Controls.Section;
			products: DevKit.Controls.Section;
			sales_information: DevKit.Controls.Section;
			shipping_information: DevKit.Controls.Section;
			suggestionsection: DevKit.Controls.Section;
			totals: DevKit.Controls.Section;
		}
		interface tab_details_tab extends DevKit.Controls.ITab {
			Section: tab_details_tab_Sections;
		}
		interface tab_Summary_tab extends DevKit.Controls.ITab {
			Section: tab_Summary_tab_Sections;
		}
		interface Tabs {
			details_tab: tab_details_tab;
			Summary_tab: tab_Summary_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the complete Bill To address. */
			BillTo_Composite: DevKit.Controls.String;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Enter the date when the products included in the invoice were delivered. */
			DateDelivered: DevKit.Controls.Date;
			/** Type additional information to describe the invoice, such as shipping details or product substitutions. */
			Description: DevKit.Controls.String;
			/** Type the discount amount for the invoice if the customer is eligible for special savings. */
			DiscountAmount: DevKit.Controls.Money;
			/** Type the discount rate that should be applied to the Detail Amount field, for use in calculating the Pre-Freight Amount and Total Amount values for the invoice. */
			DiscountPercentage: DevKit.Controls.Decimal;
			/** Enter the date by which the invoice should be paid by the customer. */
			DueDate: DevKit.Controls.Date;
			/** Type the cost of freight or shipping for the products included in the invoice for use in calculating the total amount due. */
			FreightAmount: DevKit.Controls.Money;
			/** Shows the identifying number or code of the invoice. */
			InvoiceNumber: DevKit.Controls.String;
			/** Select whether prices specified on the invoice are locked from any further updates. */
			IsPriceLocked: DevKit.Controls.Boolean;
			/** Whether the Invoice is for an Item-based or a service maintainence-based sale */
			msdyn_OrderType: DevKit.Controls.OptionSet;
			/** Type a descriptive name for the invoice. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Choose the opportunity that the invoice is related to for reporting and analytics. */
			OpportunityId: DevKit.Controls.Lookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Controls.Lookup;
			/** Choose the order related to the invoice to make sure the order is fulfilled and invoiced correctly. */
			SalesOrderId: DevKit.Controls.Lookup;
			/** Select a shipping method for deliveries sent to this address. */
			ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Shows the complete Ship To address. */
			ShipTo_Composite: DevKit.Controls.String;
			/** Shows the total amount due, calculated as the sum of the products, discount, freight, and taxes for the invoice. */
			TotalAmount: DevKit.Controls.Money;
			/** Shows the total product amount due, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount due for the invoice. */
			TotalAmountLessFreight: DevKit.Controls.Money;
			/** Shows the sum of all existing and write-in products included on the invoice, based on the specified price list and quantities. */
			TotalLineItemAmount: DevKit.Controls.Money;
			/** Shows the total of the Tax amounts specified on all products included in the invoice, included in the Total Amount due calculation for the invoice. */
			TotalTax: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Select whether the products included in the invoice should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Controls.Boolean;
		}
		interface Navigation {
			navProducts: DevKit.Controls.NavigationItem
		}
		interface ProcessProject_Service_Invoice_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Choose the order related to the invoice to make sure the order is fulfilled and invoiced correctly. */
			SalesOrderId: DevKit.Controls.Lookup;
			/** Shows the total amount due, calculated as the sum of the products, discount, freight, and taxes for the invoice. */
			TotalAmount: DevKit.Controls.Money;
		}
		interface Process extends DevKit.Controls.IProcess {
			Project_Service_Invoice_Process: ProcessProject_Service_Invoice_Process;
		}
		interface Grid {
			invoicedetailsGrid: DevKit.Controls.Grid;
		}
	}
	class FormInvoice extends DevKit.IForm {
		/**
		* Invoice [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Invoice */
		Body: DevKit.FormInvoice.Body;
		/** The Header section of form Invoice */
		Header: DevKit.FormInvoice.Header;
		/** The Navigation of form Invoice */
		Navigation: DevKit.FormInvoice.Navigation;
		/** The Process of form Invoice */
		Process: DevKit.FormInvoice.Process;
		/** The Grid of form Invoice */
		Grid: DevKit.FormInvoice.Grid;
		/** The SidePanes of form Invoice */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormProject_Invoice {
		interface Header extends DevKit.Controls.IHeader {
			/** Project specific status */
			msdyn_projectinvoicestatus: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows whether the invoice is active, paid, or canceled. Paid and canceled invoices are read-only and can't be edited unless they are reactivated. */
			StateCode: DevKit.Controls.OptionSet;
			/** Shows the total amount due, calculated as the sum of the products, discount, freight, and taxes for the invoice. */
			TotalAmount: DevKit.Controls.Money;
		}
		interface tab_details_tab_Sections {
			Social_Pane: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_HiddenLockedFields_Sections {
			tab_5_section_3: DevKit.Controls.Section;
		}
		interface tab_Summary_tab_project_Sections {
			products: DevKit.Controls.Section;
			Summary_tab_project_section_3: DevKit.Controls.Section;
			Summary_tab_project_section_5: DevKit.Controls.Section;
			tab_4_section_1: DevKit.Controls.Section;
			tab_5_section_1: DevKit.Controls.Section;
			tab_5_section_2: DevKit.Controls.Section;
			totals: DevKit.Controls.Section;
		}
		interface tab_details_tab extends DevKit.Controls.ITab {
			Section: tab_details_tab_Sections;
		}
		interface tab_HiddenLockedFields extends DevKit.Controls.ITab {
			Section: tab_HiddenLockedFields_Sections;
		}
		interface tab_Summary_tab_project extends DevKit.Controls.ITab {
			Section: tab_Summary_tab_project_Sections;
		}
		interface Tabs {
			details_tab: tab_details_tab;
			HiddenLockedFields: tab_HiddenLockedFields;
			Summary_tab_project: tab_Summary_tab_project;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the complete Bill To address. */
			BillTo_Composite: DevKit.Controls.String;
			/** Type a name for the customer's billing address, such as "Headquarters" or "Field office", to identify the address. */
			BillTo_Name: DevKit.Controls.String;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Type additional information to describe the invoice, such as shipping details or product substitutions. */
			Description: DevKit.Controls.String;
			/** Type the discount amount for the invoice if the customer is eligible for special savings. */
			DiscountAmount: DevKit.Controls.Money;
			/** Type the discount rate that should be applied to the Detail Amount field, for use in calculating the Pre-Freight Amount and Total Amount values for the invoice. */
			DiscountPercentage: DevKit.Controls.Decimal;
			/** Enter the date by which the invoice should be paid by the customer. */
			DueDate: DevKit.Controls.Date;
			/** Type the cost of freight or shipping for the products included in the invoice for use in calculating the total amount due. */
			FreightAmount: DevKit.Controls.Money;
			/** Shows the identifying number or code of the invoice. */
			InvoiceNumber: DevKit.Controls.String;
			/** Type the primary contact name at the customer's billing address. */
			msdyn_billtocontactname: DevKit.Controls.String;
			/** Whether the Invoice is for an Item-based or a service maintainence-based sale */
			msdyn_OrderType: DevKit.Controls.OptionSet;
			/** Type a descriptive name for the invoice. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Choose the opportunity that the invoice is related to for reporting and analytics. */
			OpportunityId: DevKit.Controls.Lookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Controls.Lookup;
			/** Choose the order related to the invoice to make sure the order is fulfilled and invoiced correctly. */
			SalesOrderId: DevKit.Controls.Lookup;
			/** Shows the total amount due, calculated as the sum of the products, discount, freight, and taxes for the invoice. */
			TotalAmount: DevKit.Controls.Money;
			/** Shows the total product amount due, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount due for the invoice. */
			TotalAmountLessFreight: DevKit.Controls.Money;
			/** Shows the sum of all existing and write-in products included on the invoice, based on the specified price list and quantities. */
			TotalLineItemAmount: DevKit.Controls.Money;
			/** Shows the total of the Tax amounts specified on all products included in the invoice, included in the Total Amount due calculation for the invoice. */
			TotalTax: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Select whether the products included in the invoice should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Controls.Boolean;
		}
		interface Navigation {
			navProducts: DevKit.Controls.NavigationItem
		}
		interface ProcessProject_Service_Invoice_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Choose the order related to the invoice to make sure the order is fulfilled and invoiced correctly. */
			SalesOrderId: DevKit.Controls.Lookup;
			/** Shows the total amount due, calculated as the sum of the products, discount, freight, and taxes for the invoice. */
			TotalAmount: DevKit.Controls.Money;
		}
		interface Process extends DevKit.Controls.IProcess {
			Project_Service_Invoice_Process: ProcessProject_Service_Invoice_Process;
		}
		interface Grid {
			invoicedetailsGrid: DevKit.Controls.Grid;
			ProjectInvoiceLines: DevKit.Controls.Grid;
		}
	}
	class FormProject_Invoice extends DevKit.IForm {
		/**
		* Project Invoice [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Project_Invoice */
		Body: DevKit.FormProject_Invoice.Body;
		/** The Header section of form Project_Invoice */
		Header: DevKit.FormProject_Invoice.Header;
		/** The Navigation of form Project_Invoice */
		Navigation: DevKit.FormProject_Invoice.Navigation;
		/** The Process of form Project_Invoice */
		Process: DevKit.FormProject_Invoice.Process;
		/** The Grid of form Project_Invoice */
		Grid: DevKit.FormProject_Invoice.Grid;
		/** The SidePanes of form Project_Invoice */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormInvoice2 {
		interface tab_newInvoice_Sections {
			quickInvoice_salesinformation: DevKit.Controls.Section;
			quickInvoice_summary: DevKit.Controls.Section;
		}
		interface tab_newInvoice extends DevKit.Controls.ITab {
			Section: tab_newInvoice_Sections;
		}
		interface Tabs {
			newInvoice: tab_newInvoice;
		}
		interface Body {
			Tab: Tabs;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Type additional information to describe the invoice, such as shipping details or product substitutions. */
			Description: DevKit.Controls.String;
			/** Type a descriptive name for the invoice. */
			Name: DevKit.Controls.String;
			/** Choose the opportunity that the invoice is related to for reporting and analytics. */
			OpportunityId: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Controls.Lookup;
			/** Choose the order related to the invoice to make sure the order is fulfilled and invoiced correctly. */
			SalesOrderId: DevKit.Controls.Lookup;
			/** Select the invoice's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class FormInvoice2 extends DevKit.IForm {
		/**
		* Invoice [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Invoice2 */
		Body: DevKit.FormInvoice2.Body;
	}
	class InvoiceApi {
		/**
		* DynamicsCrm.DevKit InvoiceApi
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
		/** Unique identifier of the account with which the invoice is associated. */
		AccountId: DevKit.WebApi.LookupValueReadonly;
		/** Type the city for the customer's billing address. */
		BillTo_City: DevKit.WebApi.StringValue;
		/** Shows the complete Bill To address. */
		BillTo_Composite: DevKit.WebApi.StringValueReadonly;
		/** Type the country or region for the customer's billing address. */
		BillTo_Country: DevKit.WebApi.StringValue;
		/** Type the fax number for the customer's billing address. */
		BillTo_Fax: DevKit.WebApi.StringValue;
		/** Type the first line of the customer's billing address. */
		BillTo_Line1: DevKit.WebApi.StringValue;
		/** Type the second line of the customer's billing address. */
		BillTo_Line2: DevKit.WebApi.StringValue;
		/** Type the third line of the billing address. */
		BillTo_Line3: DevKit.WebApi.StringValue;
		/** Type a name for the customer's billing address, such as "Headquarters" or "Field office", to identify the address. */
		BillTo_Name: DevKit.WebApi.StringValue;
		/** Type the ZIP Code or postal code for the billing address. */
		BillTo_PostalCode: DevKit.WebApi.StringValue;
		/** Type the state or province for the billing address. */
		BillTo_StateOrProvince: DevKit.WebApi.StringValue;
		/** Type the phone number for the customer's billing address. */
		BillTo_Telephone: DevKit.WebApi.StringValue;
		/** Unique identifier of the contact associated with the invoice. */
		ContactId: DevKit.WebApi.LookupValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
		customerid_account: DevKit.WebApi.LookupValue;
		/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
		customerid_contact: DevKit.WebApi.LookupValue;
		/** Enter the date when the products included in the invoice were delivered. */
		DateDelivered_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type additional information to describe the invoice, such as shipping details or product substitutions. */
		Description: DevKit.WebApi.StringValue;
		/** Type the discount amount for the invoice if the customer is eligible for special savings. */
		DiscountAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Invoice Discount Amount in base currency. */
		DiscountAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Type the discount rate that should be applied to the Detail Amount field, for use in calculating the Pre-Freight Amount and Total Amount values for the invoice. */
		DiscountPercentage: DevKit.WebApi.DecimalValue;
		/** Enter the date by which the invoice should be paid by the customer. */
		DueDate_DateOnly: DevKit.WebApi.DateOnlyValue;
		/** The primary email address for the entity. */
		EmailAddress: DevKit.WebApi.StringValue;
		/** The default image for the entity. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Type the cost of freight or shipping for the products included in the invoice for use in calculating the total amount due. */
		FreightAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Freight Amount in base currency. */
		FreightAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the invoice. */
		InvoiceId: DevKit.WebApi.GuidValue;
		/** Shows the identifying number or code of the invoice. */
		InvoiceNumber: DevKit.WebApi.StringValue;
		/** Select whether prices specified on the invoice are locked from any further updates. */
		IsPriceLocked: DevKit.WebApi.BooleanValue;
		/** Enter the date and time when the invoice was last submitted to an accounting or ERP system for processing. */
		LastBackofficeSubmit_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Contains the date time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter the amount due on this invoice. */
		msdyn_AmountDue: DevKit.WebApi.MoneyValue;
		/** Value of the Amount Due in base currency. */
		msdyn_amountdue_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Type the primary contact name at the customer's billing address. */
		msdyn_billtocontactname: DevKit.WebApi.StringValue;
		/** Indicates if this invoice contains corrections to previous invoices. */
		msdyn_HasCorrections: DevKit.WebApi.BooleanValue;
		/** Document date of the Invoice for use in calculation of payment due date */
		msdyn_InvoiceDate_TimezoneDateOnly: DevKit.WebApi.TimezoneDateOnlyValue;
		/** Whether the Invoice is for an Item-based or a service maintainence-based sale */
		msdyn_OrderType: DevKit.WebApi.OptionSetValue;
		/** Project specific status */
		msdyn_projectinvoicestatus: DevKit.WebApi.OptionSetValue;
		/** Type a descriptive name for the invoice. */
		Name: DevKit.WebApi.StringValue;
		/** Shows the duration in minutes for which the invoice was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** Choose the opportunity that the invoice is related to for reporting and analytics. */
		OpportunityId: DevKit.WebApi.LookupValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Select the payment terms to indicate when the customer needs to pay the total amount. */
		PaymentTermsCode: DevKit.WebApi.OptionSetValue;
		/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
		PriceLevelId: DevKit.WebApi.LookupValue;
		/** Type of pricing error for the invoice. */
		PricingErrorCode: DevKit.WebApi.OptionSetValue;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Contains the id of the process associated with the entity. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Choose the order related to the invoice to make sure the order is fulfilled and invoiced correctly. */
		SalesOrderId: DevKit.WebApi.LookupValue;
		/** Select a shipping method for deliveries sent to this address. */
		ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** Type the city for the customer's shipping address. */
		ShipTo_City: DevKit.WebApi.StringValue;
		/** Shows the complete Ship To address. */
		ShipTo_Composite: DevKit.WebApi.StringValueReadonly;
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
		/** Skip Price Calculation (For Internal Use) */
		SkipPriceCalculation: DevKit.WebApi.OptionSetValue;
		/** Choose the service level agreement (SLA) that you want to apply to the invoice record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this invoice. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		/** Contains the id of the stage where the entity is located. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the invoice is active, paid, or canceled. Paid and canceled invoices are read-only and can't be edited unless they are reactivated. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the invoice's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the total amount due, calculated as the sum of the products, discount, freight, and taxes for the invoice. */
		TotalAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Total Amount in base currency. */
		TotalAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the total product amount due, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount due for the invoice. */
		TotalAmountLessFreight: DevKit.WebApi.MoneyValue;
		/** Value of the Total Pre-Freight Amount in base currency. */
		TotalAmountLessFreight_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the total discount amount, based on the discount price and rate entered on the invoice. */
		TotalDiscountAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Total Discount Amount in base currency. */
		TotalDiscountAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the sum of all existing and write-in products included on the invoice, based on the specified price list and quantities. */
		TotalLineItemAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Total Detail Amount in base currency. */
		TotalLineItemAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the Manual Discount amounts specified on all products included in the invoice. This value is reflected in the Detail Amount field on the invoice and is added to any discount amount or rate specified on the invoice. */
		TotalLineItemDiscountAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Total Line Item Discount Amount in base currency. */
		TotalLineItemDiscountAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the total of the Tax amounts specified on all products included in the invoice, included in the Total Amount due calculation for the invoice. */
		TotalTax: DevKit.WebApi.MoneyValue;
		/** Value of the Total Tax in base currency. */
		TotalTax_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Select whether the products included in the invoice should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
		WillCall: DevKit.WebApi.BooleanValue;
	}
}
declare namespace OptionSet {
	namespace Invoice {
		enum msdyn_OrderType {
			/** 192350000 */
			Item_based,
			/** 690970002 */
			Service_Maintenance_Based,
			/** 192350001 */
			Work_based
		}
		enum msdyn_projectinvoicestatus {
			/** 192350002 */
			Confirmed,
			/** 192350000 */
			Draft,
			/** 192350001 */
			In_Review,
			/** 192350003 */
			Invoice_Paid
		}
		enum PaymentTermsCode {
			/** 2 */
			_2_10_Net_30,
			/** 1 */
			Net_30,
			/** 3 */
			Net_45,
			/** 4 */
			Net_60
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
			/** 6 */
			Full_Load,
			/** 5 */
			Postal_Mail,
			/** 4 */
			UPS,
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
			/** 3 */
			Canceled,
			/** 1 */
			Closed_deprecated,
			/** 2 */
			Paid
		}
		enum StatusCode {
			/** 4 */
			Billed,
			/** 5 */
			Booked_applies_to_services,
			/** 100003 */
			Canceled,
			/** 3 */
			Canceled_deprecated,
			/** 100001 */
			Complete,
			/** 6 */
			Installed_applies_to_services,
			/** 1 */
			New,
			/** 7 */
			Paid_in_Full_deprecated,
			/** 100002 */
			Partial,
			/** 2 */
			Partially_Shipped
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}