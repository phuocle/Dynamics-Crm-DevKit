//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSalesOrder_Field_Service_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows whether the order is active, submitted, fulfilled, canceled, or invoiced. Only active orders can be edited. */
			StateCode: DevKit.Controls.OptionSet;
			/** Select the order's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the order. */
			TotalAmount: DevKit.Controls.Money;
		}
		interface tab_order_line_items_Sections {
			ProductLinesSection: DevKit.Controls.Section;
			ServiceLinesSection: DevKit.Controls.Section;
			totals: DevKit.Controls.Section;
		}
		interface tab_summary_tab_Sections {
			BillingPrintSetup: DevKit.Controls.Section;
			order_line_items_section_4: DevKit.Controls.Section;
			SocialPanTab: DevKit.Controls.Section;
			Summary: DevKit.Controls.Section;
		}
		interface tab_order_line_items extends DevKit.Controls.ITab {
			Section: tab_order_line_items_Sections;
		}
		interface tab_summary_tab extends DevKit.Controls.ITab {
			Section: tab_summary_tab_Sections;
		}
		interface Tabs {
			order_line_items: tab_order_line_items;
			summary_tab: tab_summary_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the complete Bill To address. */
			BillTo_Composite: DevKit.Controls.String;
			/** Type the primary contact name at the customer's billing address. */
			BillTo_ContactName: DevKit.Controls.String;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Enter the date that all or part of the order was shipped to the customer. */
			DateFulfilled: DevKit.Controls.Date;
			/** Type additional information to describe the order, such as the products or services offered or details about the customer's product preferences. */
			Description: DevKit.Controls.String;
			/** Type the discount amount for the order if the customer is eligible for special savings. */
			DiscountAmount: DevKit.Controls.Money;
			/** Type the discount rate that should be applied to the Detail Amount field to include additional savings for the customer in the order. */
			DiscountPercentage: DevKit.Controls.Decimal;
			/** Type the cost of freight or shipping for the products included in the order for use in calculating the Total Amount field. */
			FreightAmount: DevKit.Controls.Money;
			/** Select the freight terms to make sure shipping charges are processed correctly. */
			FreightTermsCode: DevKit.Controls.OptionSet;
			/** Select whether prices specified on the invoice are locked from any further updates. */
			IsPriceLocked: DevKit.Controls.Boolean;
			/** Customer Account associated with this Order */
			msdyn_Account: DevKit.Controls.Lookup;
			/** Internal use only */
			msdyn_ordertype: DevKit.Controls.OptionSet;
			/** Type a descriptive name for the order. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Choose the related opportunity so that the data for the order and opportunity are linked for reporting and analytics. */
			OpportunityId: DevKit.Controls.Lookup;
			/** Shows the order number for customer reference and to use in search. The number cannot be modified. */
			OrderNumber: DevKit.Controls.String;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Controls.Lookup;
			/** Choose the related quote so that order data and quote data are linked for reporting and analytics. */
			QuoteId: DevKit.Controls.Lookup;
			/** Enter the delivery date requested by the customer for all products in the order. */
			RequestDeliveryBy: DevKit.Controls.Date;
			/** Select a shipping method for deliveries sent to this address. */
			ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Shows the complete Ship To address. */
			ShipTo_Composite: DevKit.Controls.String;
			/** Shows whether the order is active, submitted, fulfilled, canceled, or invoiced. Only active orders can be edited. */
			StateCode: DevKit.Controls.OptionSet;
			/** Select the order's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the order. */
			TotalAmount: DevKit.Controls.Money;
			/** Shows the total product amount for the order, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount due for the order. */
			TotalAmountLessFreight: DevKit.Controls.Money;
			/** Shows the sum of all existing and write-in products included on the order, based on the specified price list and quantities. */
			TotalLineItemAmount: DevKit.Controls.Money;
			/** Shows the Tax amounts specified on all products included in the order, included in the Total Amount due calculation for the order. */
			TotalTax: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Select whether the products included in the order should be shipped to the specified address or held until the customer calls with further pick-up or delivery instructions. */
			WillCall: DevKit.Controls.Boolean;
		}
		interface Navigation {
			lk_opportunitysalesprocess_salesorderid: DevKit.Controls.NavigationItem,
			msdyn_playbookinstance_salesorder: DevKit.Controls.NavigationItem,
			msdyn_salesorder_msdyn_actual_SalesContract: DevKit.Controls.NavigationItem,
			msdyn_salesorder_msdyn_orderinvoicingdate_Order: DevKit.Controls.NavigationItem,
			msdyn_salesorder_msdyn_orderinvoicingsetup_Order: DevKit.Controls.NavigationItem,
			msdyn_salesorder_msdyn_orderinvoicingsetupdate_Order: DevKit.Controls.NavigationItem,
			order_details: DevKit.Controls.NavigationItem,
			order_invoices: DevKit.Controls.NavigationItem,
			salesorder_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			salesorder_adx_portalcomments: DevKit.Controls.NavigationItem,
			SalesOrder_Appointments: DevKit.Controls.NavigationItem,
			SalesOrder_Emails: DevKit.Controls.NavigationItem,
			salesorder_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			salesorder_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			salesorder_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			salesorder_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			salesorder_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			salesorder_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			salesorder_msfp_alerts: DevKit.Controls.NavigationItem,
			salesorder_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			salesorder_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			SalesOrder_OrderClose: DevKit.Controls.NavigationItem,
			SalesOrder_Phonecalls: DevKit.Controls.NavigationItem,
			SalesOrder_ServiceAppointments: DevKit.Controls.NavigationItem,
			SalesOrder_Tasks: DevKit.Controls.NavigationItem
		}
		interface Grid {
			OrderServicesGrid: DevKit.Controls.Grid;
			salesorderdetailsGrid: DevKit.Controls.Grid;
		}
	}
	class FormSalesOrder_Field_Service_Information extends DevKit.IForm {
		/**
		* Field Service Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SalesOrder_Field_Service_Information */
		Body: DevKit.FormSalesOrder_Field_Service_Information.Body;
		/** The Header section of form SalesOrder_Field_Service_Information */
		Header: DevKit.FormSalesOrder_Field_Service_Information.Header;
		/** The Navigation of form SalesOrder_Field_Service_Information */
		Navigation: DevKit.FormSalesOrder_Field_Service_Information.Navigation;
		/** The Grid of form SalesOrder_Field_Service_Information */
		Grid: DevKit.FormSalesOrder_Field_Service_Information.Grid;
		/** The SidePanes of form SalesOrder_Field_Service_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormOrder {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows whether the order is active, submitted, fulfilled, canceled, or invoiced. Only active orders can be edited. */
			StateCode: DevKit.Controls.OptionSet;
			/** Select the order's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the order. */
			TotalAmount: DevKit.Controls.Money;
		}
		interface tab_summary_tab_Sections {
			addresses: DevKit.Controls.Section;
			description_section: DevKit.Controls.Section;
			DynamicProperties: DevKit.Controls.Section;
			order_information: DevKit.Controls.Section;
			products: DevKit.Controls.Section;
			sales_information: DevKit.Controls.Section;
			shipping_dates: DevKit.Controls.Section;
			shipping_information: DevKit.Controls.Section;
			Social_Pane: DevKit.Controls.Section;
			suggestionsection: DevKit.Controls.Section;
			totals: DevKit.Controls.Section;
		}
		interface tab_summary_tab extends DevKit.Controls.ITab {
			Section: tab_summary_tab_Sections;
		}
		interface Tabs {
			summary_tab: tab_summary_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the complete Bill To address. */
			BillTo_Composite: DevKit.Controls.String;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Enter the date that all or part of the order was shipped to the customer. */
			DateFulfilled: DevKit.Controls.Date;
			/** Type additional information to describe the order, such as the products or services offered or details about the customer's product preferences. */
			Description: DevKit.Controls.String;
			/** Type the discount amount for the order if the customer is eligible for special savings. */
			DiscountAmount: DevKit.Controls.Money;
			/** Type the discount rate that should be applied to the Detail Amount field to include additional savings for the customer in the order. */
			DiscountPercentage: DevKit.Controls.Decimal;
			/** Type the cost of freight or shipping for the products included in the order for use in calculating the Total Amount field. */
			FreightAmount: DevKit.Controls.Money;
			/** Select the freight terms to make sure shipping charges are processed correctly. */
			FreightTermsCode: DevKit.Controls.OptionSet;
			/** Select whether prices specified on the invoice are locked from any further updates. */
			IsPriceLocked: DevKit.Controls.Boolean;
			/** Internal use only */
			msdyn_ordertype: DevKit.Controls.OptionSet;
			/** Type a descriptive name for the order. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Choose the related opportunity so that the data for the order and opportunity are linked for reporting and analytics. */
			OpportunityId: DevKit.Controls.Lookup;
			/** Shows the order number for customer reference and to use in search. The number cannot be modified. */
			OrderNumber: DevKit.Controls.String;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Controls.Lookup;
			/** Choose the related quote so that order data and quote data are linked for reporting and analytics. */
			QuoteId: DevKit.Controls.Lookup;
			/** Enter the delivery date requested by the customer for all products in the order. */
			RequestDeliveryBy: DevKit.Controls.Date;
			/** Select a shipping method for deliveries sent to this address. */
			ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Shows the complete Ship To address. */
			ShipTo_Composite: DevKit.Controls.String;
			/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the order. */
			TotalAmount: DevKit.Controls.Money;
			/** Shows the total product amount for the order, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount due for the order. */
			TotalAmountLessFreight: DevKit.Controls.Money;
			/** Shows the sum of all existing and write-in products included on the order, based on the specified price list and quantities. */
			TotalLineItemAmount: DevKit.Controls.Money;
			/** Shows the Tax amounts specified on all products included in the order, included in the Total Amount due calculation for the order. */
			TotalTax: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Select whether the products included in the order should be shipped to the specified address or held until the customer calls with further pick-up or delivery instructions. */
			WillCall: DevKit.Controls.Boolean;
		}
		interface Navigation {
			lk_opportunitysalesprocess_salesorderid: DevKit.Controls.NavigationItem,
			msdyn_playbookinstance_salesorder: DevKit.Controls.NavigationItem,
			msdyn_salesorder_msdyn_actual_SalesContract: DevKit.Controls.NavigationItem,
			msdyn_salesorder_msdyn_orderinvoicingdate_Order: DevKit.Controls.NavigationItem,
			msdyn_salesorder_msdyn_orderinvoicingsetup_Order: DevKit.Controls.NavigationItem,
			msdyn_salesorder_msdyn_orderinvoicingsetupdate_Order: DevKit.Controls.NavigationItem,
			order_details: DevKit.Controls.NavigationItem,
			order_invoices: DevKit.Controls.NavigationItem,
			salesorder_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			salesorder_adx_portalcomments: DevKit.Controls.NavigationItem,
			SalesOrder_Appointments: DevKit.Controls.NavigationItem,
			SalesOrder_Emails: DevKit.Controls.NavigationItem,
			salesorder_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			salesorder_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			salesorder_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			salesorder_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			salesorder_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			salesorder_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			salesorder_msfp_alerts: DevKit.Controls.NavigationItem,
			salesorder_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			salesorder_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			SalesOrder_OrderClose: DevKit.Controls.NavigationItem,
			SalesOrder_Phonecalls: DevKit.Controls.NavigationItem,
			SalesOrder_ServiceAppointments: DevKit.Controls.NavigationItem,
			SalesOrder_Tasks: DevKit.Controls.NavigationItem
		}
		interface Grid {
			salesorderdetailsGrid: DevKit.Controls.Grid;
		}
	}
	class FormOrder extends DevKit.IForm {
		/**
		* Order [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Order */
		Body: DevKit.FormOrder.Body;
		/** The Header section of form Order */
		Header: DevKit.FormOrder.Header;
		/** The Navigation of form Order */
		Navigation: DevKit.FormOrder.Navigation;
		/** The Grid of form Order */
		Grid: DevKit.FormOrder.Grid;
		/** The SidePanes of form Order */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormOrder2 {
		interface tab_newSalesOrder_Sections {
			quickOrder_salesinformation: DevKit.Controls.Section;
			quickOrder_summary: DevKit.Controls.Section;
		}
		interface tab_newSalesOrder extends DevKit.Controls.ITab {
			Section: tab_newSalesOrder_Sections;
		}
		interface Tabs {
			newSalesOrder: tab_newSalesOrder;
		}
		interface Body {
			Tab: Tabs;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Type additional information to describe the order, such as the products or services offered or details about the customer's product preferences. */
			Description: DevKit.Controls.String;
			/** Select the order's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Type a descriptive name for the order. */
			Name: DevKit.Controls.String;
			/** Choose the related opportunity so that the data for the order and opportunity are linked for reporting and analytics. */
			OpportunityId: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Controls.Lookup;
			/** Choose the related quote so that order data and quote data are linked for reporting and analytics. */
			QuoteId: DevKit.Controls.Lookup;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class FormOrder2 extends DevKit.IForm {
		/**
		* Order [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Order2 */
		Body: DevKit.FormOrder2.Body;
	}
	class SalesOrderApi {
		/**
		* DynamicsCrm.DevKit SalesOrderApi
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
		/** Shows the parent account related to the record. This information is used to link the sales order to the account selected in the Customer field for reporting and analytics. */
		readonly AccountId: string;
		/** Unique identifier of the billing address. */
		BillTo_AddressId: string;
		/** Type the city for the customer's billing address. */
		BillTo_City: string;
		/** Shows the complete Bill To address. */
		readonly BillTo_Composite: string;
		/** Type the primary contact name at the customer's billing address. */
		BillTo_ContactName: string;
		/** Type the country or region for the customer's billing address. */
		BillTo_Country: string;
		/** Type the fax number for the customer's billing address. */
		BillTo_Fax: string;
		/** Type the first line of the customer's billing address. */
		BillTo_Line1: string;
		/** Type the second line of the customer's billing address. */
		BillTo_Line2: string;
		/** Type the third line of the billing address. */
		BillTo_Line3: string;
		/** Type a name for the customer's billing address, such as "Headquarters" or "Field office", to identify the address. */
		BillTo_Name: string;
		/** Type the ZIP Code or postal code for the billing address. */
		BillTo_PostalCode: string;
		/** Type the state or province for the billing address. */
		BillTo_StateOrProvince: string;
		/** Type the phone number for the customer's billing address. */
		BillTo_Telephone: string;
		/** Shows the campaign that the order was created from. */
		CampaignId: string;
		/** Shows the parent contact related to the record. This information is used to link the contract to the contact selected in the Customer field for reporting and analytics. */
		readonly ContactId: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
		customerid_account: string;
		/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
		customerid_contact: string;
		/** Enter the date that all or part of the order was shipped to the customer. */
		DateFulfilled_UtcDateOnly: Date;
		/** Type additional information to describe the order, such as the products or services offered or details about the customer's product preferences. */
		Description: string;
		/** Type the discount amount for the order if the customer is eligible for special savings. */
		DiscountAmount: number;
		/** Value of the Order Discount Amount in base currency. */
		readonly DiscountAmount_Base: number;
		/** Type the discount rate that should be applied to the Detail Amount field to include additional savings for the customer in the order. */
		DiscountPercentage: number;
		/** The primary email address for the entity. */
		EmailAddress: string;
		/** The default image for the entity. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Type the cost of freight or shipping for the products included in the order for use in calculating the Total Amount field. */
		FreightAmount: number;
		/** Value of the Freight Amount in base currency. */
		readonly FreightAmount_Base: number;
		/** Select the freight terms to make sure shipping charges are processed correctly. */
		FreightTermsCode: OptionSet.SalesOrder.FreightTermsCode;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Select whether prices specified on the invoice are locked from any further updates. */
		IsPriceLocked: boolean;
		/** Enter the date and time when the order was last submitted to an accounting or ERP system for processing. */
		LastBackofficeSubmit_UtcDateOnly: Date;
		/** Contains the date time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Customer Account associated with this Order */
		msdyn_Account: string;
		/** Internal use only */
		msdyn_ordertype: OptionSet.SalesOrder.msdyn_ordertype;
		/** For internal use only */
		msdyn_ProcessStartedOn_TimezoneDateAndTime: Date;
		/** Type a descriptive name for the order. */
		Name: string;
		/** Shows the duration in minutes for which the order was on hold. */
		readonly OnHoldTime: number;
		/** Choose the related opportunity so that the data for the order and opportunity are linked for reporting and analytics. */
		OpportunityId: string;
		OrderCreationMethod: OptionSet.SalesOrder.OrderCreationMethod;
		/** Shows the order number for customer reference and to use in search. The number cannot be modified. */
		OrderNumber: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Select the payment terms to indicate when the customer needs to pay the total amount. */
		PaymentTermsCode: OptionSet.SalesOrder.PaymentTermsCode;
		/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
		PriceLevelId: string;
		/** Select the type of pricing error, such as a missing or invalid product, or missing quantity. */
		PricingErrorCode: OptionSet.SalesOrder.PricingErrorCode;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: OptionSet.SalesOrder.PriorityCode;
		/** Contains the id of the process associated with the entity. */
		ProcessId: string;
		/** Choose the related quote so that order data and quote data are linked for reporting and analytics. */
		QuoteId: string;
		/** Enter the delivery date requested by the customer for all products in the order. */
		RequestDeliveryBy_UtcDateOnly: Date;
		/** Unique identifier of the order. */
		SalesOrderId: string;
		/** Select a shipping method for deliveries sent to this address. */
		ShippingMethodCode: OptionSet.SalesOrder.ShippingMethodCode;
		/** Unique identifier of the shipping address. */
		ShipTo_AddressId: string;
		/** Type the city for the customer's shipping address. */
		ShipTo_City: string;
		/** Shows the complete Ship To address. */
		readonly ShipTo_Composite: string;
		/** Type the primary contact name at the customer's shipping address. */
		ShipTo_ContactName: string;
		/** Type the country or region for the customer's shipping address. */
		ShipTo_Country: string;
		/** Type the fax number for the customer's shipping address. */
		ShipTo_Fax: string;
		/** Select the freight terms to make sure shipping orders are processed correctly. */
		ShipTo_FreightTermsCode: OptionSet.SalesOrder.ShipTo_FreightTermsCode;
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
		SkipPriceCalculation: OptionSet.SalesOrder.SkipPriceCalculation;
		/** Choose the service level agreement (SLA) that you want to apply to the sales order record. */
		SLAId: string;
		/** Last SLA that was applied to this sales order. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Contains the id of the stage where the entity is located. */
		StageId: string;
		/** Shows whether the order is active, submitted, fulfilled, canceled, or invoiced. Only active orders can be edited. */
		StateCode: OptionSet.SalesOrder.StateCode;
		/** Select the order's status. */
		StatusCode: OptionSet.SalesOrder.StatusCode;
		/** Enter the date when the order was submitted to the fulfillment or shipping center. */
		SubmitDate_UtcDateOnly: Date;
		/** Type the code for the submitted status in the fulfillment or shipping center system. */
		SubmitStatus: number;
		/** Type additional details or notes about the order for the fulfillment or shipping center. */
		SubmitStatusDescription: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the order. */
		TotalAmount: number;
		/** Value of the Total Amount in base currency. */
		readonly TotalAmount_Base: number;
		/** Shows the total product amount for the order, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount due for the order. */
		TotalAmountLessFreight: number;
		/** Value of the Total Pre-Freight Amount in base currency. */
		readonly TotalAmountLessFreight_Base: number;
		/** Shows the total discount amount, based on the discount price and rate entered on the order. */
		TotalDiscountAmount: number;
		/** Value of the Total Discount Amount in base currency. */
		readonly TotalDiscountAmount_Base: number;
		/** Shows the sum of all existing and write-in products included on the order, based on the specified price list and quantities. */
		TotalLineItemAmount: number;
		/** Value of the Total Detail Amount in base currency. */
		readonly TotalLineItemAmount_Base: number;
		/** Shows the total of the Manual Discount amounts specified on all products included in the order. This value is reflected in the Detail Amount field on the order and is added to any discount amount or rate specified on the order. */
		TotalLineItemDiscountAmount: number;
		/** Value of the Total Line Item Discount Amount in base currency. */
		readonly TotalLineItemDiscountAmount_Base: number;
		/** Shows the Tax amounts specified on all products included in the order, included in the Total Amount due calculation for the order. */
		TotalTax: number;
		/** Value of the Total Tax in base currency. */
		readonly TotalTax_Base: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** Select whether the products included in the order should be shipped to the specified address or held until the customer calls with further pick-up or delivery instructions. */
		WillCall: boolean;
		readonly FormattedValue: {
			/** Shows the parent account related to the record. This information is used to link the sales order to the account selected in the Customer field for reporting and analytics. */
			readonly AccountId: string;
			/** Unique identifier of the billing address. */
			readonly BillTo_AddressId: string;
			/** Type the city for the customer's billing address. */
			readonly BillTo_City: string;
			/** Shows the complete Bill To address. */
			readonly BillTo_Composite: string;
			/** Type the primary contact name at the customer's billing address. */
			readonly BillTo_ContactName: string;
			/** Type the country or region for the customer's billing address. */
			readonly BillTo_Country: string;
			/** Type the fax number for the customer's billing address. */
			readonly BillTo_Fax: string;
			/** Type the first line of the customer's billing address. */
			readonly BillTo_Line1: string;
			/** Type the second line of the customer's billing address. */
			readonly BillTo_Line2: string;
			/** Type the third line of the billing address. */
			readonly BillTo_Line3: string;
			/** Type a name for the customer's billing address, such as "Headquarters" or "Field office", to identify the address. */
			readonly BillTo_Name: string;
			/** Type the ZIP Code or postal code for the billing address. */
			readonly BillTo_PostalCode: string;
			/** Type the state or province for the billing address. */
			readonly BillTo_StateOrProvince: string;
			/** Type the phone number for the customer's billing address. */
			readonly BillTo_Telephone: string;
			/** Shows the campaign that the order was created from. */
			readonly CampaignId: string;
			/** Shows the parent contact related to the record. This information is used to link the contract to the contact selected in the Customer field for reporting and analytics. */
			readonly ContactId: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			readonly customerid_account: string;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			readonly customerid_contact: string;
			/** Enter the date that all or part of the order was shipped to the customer. */
			readonly DateFulfilled_UtcDateOnly: string;
			/** Type additional information to describe the order, such as the products or services offered or details about the customer's product preferences. */
			readonly Description: string;
			/** Type the discount amount for the order if the customer is eligible for special savings. */
			readonly DiscountAmount: string;
			/** Value of the Order Discount Amount in base currency. */
			readonly DiscountAmount_Base: string;
			/** Type the discount rate that should be applied to the Detail Amount field to include additional savings for the customer in the order. */
			readonly DiscountPercentage: string;
			/** The primary email address for the entity. */
			readonly EmailAddress: string;
			/** The default image for the entity. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Type the cost of freight or shipping for the products included in the order for use in calculating the Total Amount field. */
			readonly FreightAmount: string;
			/** Value of the Freight Amount in base currency. */
			readonly FreightAmount_Base: string;
			/** Select the freight terms to make sure shipping charges are processed correctly. */
			readonly FreightTermsCode: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Select whether prices specified on the invoice are locked from any further updates. */
			readonly IsPriceLocked: string;
			/** Enter the date and time when the order was last submitted to an accounting or ERP system for processing. */
			readonly LastBackofficeSubmit_UtcDateOnly: string;
			/** Contains the date time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Customer Account associated with this Order */
			readonly msdyn_Account: string;
			/** Internal use only */
			readonly msdyn_ordertype: string;
			/** For internal use only */
			readonly msdyn_ProcessStartedOn_TimezoneDateAndTime: string;
			/** Type a descriptive name for the order. */
			readonly Name: string;
			/** Shows the duration in minutes for which the order was on hold. */
			readonly OnHoldTime: string;
			/** Choose the related opportunity so that the data for the order and opportunity are linked for reporting and analytics. */
			readonly OpportunityId: string;
			readonly OrderCreationMethod: string;
			/** Shows the order number for customer reference and to use in search. The number cannot be modified. */
			readonly OrderNumber: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			readonly PaymentTermsCode: string;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			readonly PriceLevelId: string;
			/** Select the type of pricing error, such as a missing or invalid product, or missing quantity. */
			readonly PricingErrorCode: string;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			readonly PriorityCode: string;
			/** Contains the id of the process associated with the entity. */
			readonly ProcessId: string;
			/** Choose the related quote so that order data and quote data are linked for reporting and analytics. */
			readonly QuoteId: string;
			/** Enter the delivery date requested by the customer for all products in the order. */
			readonly RequestDeliveryBy_UtcDateOnly: string;
			/** Unique identifier of the order. */
			readonly SalesOrderId: string;
			/** Select a shipping method for deliveries sent to this address. */
			readonly ShippingMethodCode: string;
			/** Unique identifier of the shipping address. */
			readonly ShipTo_AddressId: string;
			/** Type the city for the customer's shipping address. */
			readonly ShipTo_City: string;
			/** Shows the complete Ship To address. */
			readonly ShipTo_Composite: string;
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
			/** Skip Price Calculation */
			readonly SkipPriceCalculation: string;
			/** Choose the service level agreement (SLA) that you want to apply to the sales order record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this sales order. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Contains the id of the stage where the entity is located. */
			readonly StageId: string;
			/** Shows whether the order is active, submitted, fulfilled, canceled, or invoiced. Only active orders can be edited. */
			readonly StateCode: string;
			/** Select the order's status. */
			readonly StatusCode: string;
			/** Enter the date when the order was submitted to the fulfillment or shipping center. */
			readonly SubmitDate_UtcDateOnly: string;
			/** Type the code for the submitted status in the fulfillment or shipping center system. */
			readonly SubmitStatus: string;
			/** Type additional details or notes about the order for the fulfillment or shipping center. */
			readonly SubmitStatusDescription: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the order. */
			readonly TotalAmount: string;
			/** Value of the Total Amount in base currency. */
			readonly TotalAmount_Base: string;
			/** Shows the total product amount for the order, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount due for the order. */
			readonly TotalAmountLessFreight: string;
			/** Value of the Total Pre-Freight Amount in base currency. */
			readonly TotalAmountLessFreight_Base: string;
			/** Shows the total discount amount, based on the discount price and rate entered on the order. */
			readonly TotalDiscountAmount: string;
			/** Value of the Total Discount Amount in base currency. */
			readonly TotalDiscountAmount_Base: string;
			/** Shows the sum of all existing and write-in products included on the order, based on the specified price list and quantities. */
			readonly TotalLineItemAmount: string;
			/** Value of the Total Detail Amount in base currency. */
			readonly TotalLineItemAmount_Base: string;
			/** Shows the total of the Manual Discount amounts specified on all products included in the order. This value is reflected in the Detail Amount field on the order and is added to any discount amount or rate specified on the order. */
			readonly TotalLineItemDiscountAmount: string;
			/** Value of the Total Line Item Discount Amount in base currency. */
			readonly TotalLineItemDiscountAmount_Base: string;
			/** Shows the Tax amounts specified on all products included in the order, included in the Total Amount due calculation for the order. */
			readonly TotalTax: string;
			/** Value of the Total Tax in base currency. */
			readonly TotalTax_Base: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** Select whether the products included in the order should be shipped to the specified address or held until the customer calls with further pick-up or delivery instructions. */
			readonly WillCall: string;
		}
	}
}
declare namespace OptionSet {
	namespace SalesOrder {
		enum CustomerIdType {
		}
		enum FreightTermsCode {
			/** 1 */
			FOB,
			/** 2 */
			No_Charge
		}
		enum msdyn_ordertype {
			/** 192350000 */
			Item_based,
			/** 690970002 */
			Service_Maintenance_Based
		}
		enum OrderCreationMethod {
			/** 776160000 */
			Unknown,
			/** 776160001 */
			Win_Quote
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
			/** 2 */
			Canceled,
			/** 3 */
			Fulfilled,
			/** 4 */
			Invoiced,
			/** 1 */
			Submitted
		}
		enum StatusCode {
			/** 100001 */
			Complete,
			/** 3 */
			In_Progress,
			/** 100003 */
			Invoiced,
			/** 1 */
			New,
			/** 4 */
			No_Money,
			/** 690970000 */
			On_hold,
			/** 100002 */
			Partial,
			/** 2 */
			Pending
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