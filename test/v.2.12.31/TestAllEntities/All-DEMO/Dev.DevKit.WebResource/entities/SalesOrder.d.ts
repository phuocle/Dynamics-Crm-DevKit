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
			nav_msdyn_salesorder_msdyn_orderinvoicingdate_Order: DevKit.Controls.NavigationItem,
			nav_msdyn_salesorder_msdyn_orderinvoicingsetup_Order: DevKit.Controls.NavigationItem,
			nav_msdyn_salesorder_msdyn_orderinvoicingsetupdate_Order: DevKit.Controls.NavigationItem,
			navProducts: DevKit.Controls.NavigationItem
		}
		interface Grid {
			salesorderdetailsGrid: DevKit.Controls.Grid;
			OrderServicesGrid: DevKit.Controls.Grid;
		}
	}
	class FormSalesOrder_Field_Service_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form SalesOrder_Field_Service_Information
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
	}
	namespace FormSalesOrder_Project_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Shows the current state of the project contract. */
			msdyn_PSAState: DevKit.Controls.OptionSet;
			/** Shows the reason for the project contract status. */
			msdyn_PSAStatusReason: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the order. */
			TotalAmount: DevKit.Controls.Money;
		}
		interface tab_LinesTab_Sections {
			DynamicProperties: DevKit.Controls.Section;
			ProductLinesSection: DevKit.Controls.Section;
			ProjectLinesSection: DevKit.Controls.Section;
		}
		interface tab_ProjectPriceListsTab_Sections {
			ProjectPriceListsSection: DevKit.Controls.Section;
		}
		interface tab_summary_tab_Sections {
			addresses: DevKit.Controls.Section;
			BillingPrintSetup: DevKit.Controls.Section;
			shipping_information: DevKit.Controls.Section;
			Social_Pane: DevKit.Controls.Section;
			suggestionsection: DevKit.Controls.Section;
			Summary: DevKit.Controls.Section;
		}
		interface tab_tab_ContractPerformance_Sections {
			tab_ContractPerformance_section_2: DevKit.Controls.Section;
		}
		interface tab_LinesTab extends DevKit.Controls.ITab {
			Section: tab_LinesTab_Sections;
		}
		interface tab_ProjectPriceListsTab extends DevKit.Controls.ITab {
			Section: tab_ProjectPriceListsTab_Sections;
		}
		interface tab_summary_tab extends DevKit.Controls.ITab {
			Section: tab_summary_tab_Sections;
		}
		interface tab_tab_ContractPerformance extends DevKit.Controls.ITab {
			Section: tab_tab_ContractPerformance_Sections;
		}
		interface Tabs {
			LinesTab: tab_LinesTab;
			ProjectPriceListsTab: tab_ProjectPriceListsTab;
			summary_tab: tab_summary_tab;
			tab_ContractPerformance: tab_tab_ContractPerformance;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the complete Bill To address. */
			BillTo_Composite: DevKit.Controls.String;
			/** Type the primary contact name at the customer's billing address. */
			BillTo_ContactName: DevKit.Controls.String;
			/** Type a name for the customer's billing address, such as "Headquarters" or "Field office", to identify the address. */
			BillTo_Name: DevKit.Controls.String;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Select the freight terms to make sure shipping charges are processed correctly. */
			FreightTermsCode: DevKit.Controls.OptionSet;
			/** Select whether prices specified on the invoice are locked from any further updates. */
			IsPriceLocked: DevKit.Controls.Boolean;
			/** User responsible for managing the account referenced by this contract. */
			msdyn_AccountManagerId: DevKit.Controls.Lookup;
			/** Organizational unit responsible for this contract. */
			msdyn_ContractOrganizationalUnitId: DevKit.Controls.Lookup;
			/** Internal use only */
			msdyn_ordertype: DevKit.Controls.OptionSet;
			/** Shows the reason for the project contract status. */
			msdyn_PSAStatusReason: DevKit.Controls.OptionSet;
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
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Select whether the products included in the order should be shipped to the specified address or held until the customer calls with further pick-up or delivery instructions. */
			WillCall: DevKit.Controls.Boolean;
		}
		interface Navigation {
			nav_msdyn_salesorder_msdyn_actual_SalesContract: DevKit.Controls.NavigationItem,
			nav_msdyn_salesorder_msdyn_contractlinescheduleofvalue_contract: DevKit.Controls.NavigationItem,
			nav_msdyn_salesorder_msdyn_contractperformance_salesorderid: DevKit.Controls.NavigationItem,
			nav_msdyn_salesorder_msdyn_orderpricelist_Contract: DevKit.Controls.NavigationItem,
			nav_msdyn_salesorder_msdyn_project_salesorderid: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem,
			navInvoices: DevKit.Controls.NavigationItem,
			navProducts: DevKit.Controls.NavigationItem
		}
		interface Grid {
			ProjectContractLines: DevKit.Controls.Grid;
			salesorderdetailsGrid: DevKit.Controls.Grid;
			ProjectPriceListsSubGrid: DevKit.Controls.Grid;
			WebResource_ContractPerformance: DevKit.Controls.Grid;
			ContractPerformance_ContractLines: DevKit.Controls.Grid;
			ContractPerformance_ProductContractLines: DevKit.Controls.Grid;
		}
	}
	class FormSalesOrder_Project_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form SalesOrder_Project_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SalesOrder_Project_Information */
		Body: DevKit.FormSalesOrder_Project_Information.Body;
		/** The Header section of form SalesOrder_Project_Information */
		Header: DevKit.FormSalesOrder_Project_Information.Header;
		/** The Navigation of form SalesOrder_Project_Information */
		Navigation: DevKit.FormSalesOrder_Project_Information.Navigation;
		/** The Grid of form SalesOrder_Project_Information */
		Grid: DevKit.FormSalesOrder_Project_Information.Grid;
	}
	namespace FormOrder {
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
			/** Select the order's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class FormOrder extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Order
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Order */
		Body: DevKit.FormOrder.Body;
	}
	namespace FormSalesOrder_Project_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Type additional information to describe the order, such as the products or services offered or details about the customer's product preferences. */
			Description: DevKit.Controls.String;
			/** Internal use only */
			msdyn_ordertype: DevKit.Controls.OptionSet;
			/** Type a descriptive name for the order. */
			Name: DevKit.Controls.String;
			/** Shows the order number for customer reference and to use in search. The number cannot be modified. */
			OrderNumber: DevKit.Controls.String;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class FormSalesOrder_Project_Quick_Create extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form SalesOrder_Project_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SalesOrder_Project_Quick_Create */
		Body: DevKit.FormSalesOrder_Project_Quick_Create.Body;
	}
}
declare namespace OptionSet {
	namespace SalesOrder {
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
			Service_Maintenance_Based,
			/** 192350001 */
			Work_based
		}
		enum msdyn_PSAState {
			/** 192350002 */
			Active,
			/** 192350003 */
			Closed,
			/** 192350000 */
			Draft,
			/** 192350001 */
			On_hold
		}
		enum msdyn_PSAStatusReason {
			/** 192350006 */
			Abandoned,
			/** 192350004 */
			Completed,
			/** 192350003 */
			Confirmed,
			/** 192350000 */
			Draft,
			/** 192350001 */
			In_review,
			/** 192350005 */
			Lost,
			/** 192350002 */
			On_hold
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
//{'JsForm':['Field Service Information','Order','Project Information','Quick Create'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}