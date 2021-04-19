//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormQuote_Field_Service_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the date when the quote pricing is effective or was first communicated to the customer. */
			EffectiveFrom: DevKit.Controls.Date;
			/** Enter the expiration date or last day the quote pricing is effective for the customer. */
			EffectiveTo: DevKit.Controls.Date;
			msdyn_TotalAmount: DevKit.Controls.Money;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_Summary_tab_Sections {
			quote_information: DevKit.Controls.Section;
			shipping_information: DevKit.Controls.Section;
			Summary_tab_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_3_Sections {
			products: DevKit.Controls.Section;
			suggestionsection: DevKit.Controls.Section;
			ServiceLinesSection: DevKit.Controls.Section;
			totals: DevKit.Controls.Section;
		}
		interface tab_Summary_tab extends DevKit.Controls.ITab {
			Section: tab_Summary_tab_Sections;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface Tabs {
			Summary_tab: tab_Summary_tab;
			tab_3: tab_tab_3;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			/** Shows the complete Bill To address. */
			BillTo_Composite: DevKit.Controls.String;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Type additional information to describe the quote, such as the products or services offered or details about the customer's product preferences. */
			Description: DevKit.Controls.String;
			/** Type the discount amount for the quote if the customer is eligible for special savings. */
			DiscountAmount: DevKit.Controls.Money;
			/** Type the discount rate that should be applied to the Detail Amount field to include additional savings for the customer in the quote. */
			DiscountPercentage: DevKit.Controls.Decimal;
			/** Enter the date when the quote pricing is effective or was first communicated to the customer. */
			EffectiveFrom: DevKit.Controls.Date;
			/** Enter the expiration date or last day the quote pricing is effective for the customer. */
			EffectiveTo: DevKit.Controls.Date;
			/** Type the cost of freight or shipping for the products included in the quote for use in calculating the Total Amount field. */
			FreightAmount: DevKit.Controls.Money;
			/** Select the freight terms to make sure shipping charges are processed correctly. */
			FreightTermsCode: DevKit.Controls.OptionSet;
			/** Customer Account associated with this Quote */
			msdyn_Account: DevKit.Controls.Lookup;
			/** The estimated cost of this quote */
			msdyn_EstimatedCost: DevKit.Controls.Money;
			/** Estimated Margin of this quote */
			msdyn_EstimatedQuoteMargin: DevKit.Controls.Decimal;
			/** The totals of all assigned Invoice Setups */
			msdyn_InvoiceSetupTotals: DevKit.Controls.Money;
			/** Internal use only. */
			msdyn_OrderType: DevKit.Controls.OptionSet;
			msdyn_TotalAmount: DevKit.Controls.Money;
			/** Type a descriptive name for the quote. */
			Name: DevKit.Controls.String;
			/** Choose the opportunity that the quote is related to for reporting and analytics. */
			OpportunityId: DevKit.Controls.Lookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Controls.Lookup;
			/** Shows the quote number for customer reference and searching capabilities. The number cannot be modified. */
			QuoteNumber: DevKit.Controls.String;
			/** Shows the version number of the quote for revision history tracking. */
			RevisionNumber: DevKit.Controls.Integer;
			/** Select a shipping method for deliveries sent to this address. */
			ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Shows the complete Ship To address. */
			ShipTo_Composite: DevKit.Controls.String;
			/** Shows whether the quote is draft, active, won, or closed. Only draft quotes can be edited. */
			StateCode: DevKit.Controls.OptionSet;
			/** Select the quote's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the quote. */
			TotalAmount: DevKit.Controls.Money;
			/** Shows the total product amount for the quote, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount due for the quote. */
			TotalAmountLessFreight: DevKit.Controls.Money;
			/** Shows the sum of all existing and write-in products included on the quote, based on the specified price list and quantities. */
			TotalLineItemAmount: DevKit.Controls.Money;
			/** Shows the total of the Tax amounts specified on all products included in the quote, included in the Total Amount due calculation for the quote. */
			TotalTax: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Select whether the products included in the quote should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Controls.Boolean;
		}
		interface Navigation {
			nav_msdyn_quote_msdyn_quoteinvoicingsetup_Quote: DevKit.Controls.NavigationItem
		}
		interface Grid {
			quotedetailsGrid: DevKit.Controls.Grid;
			servicesGrid: DevKit.Controls.Grid;
		}
	}
	class FormQuote_Field_Service_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Quote_Field_Service_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Quote_Field_Service_Information */
		Body: MyDog.FormQuote_Field_Service_Information.Body;
		/** The Header section of form Quote_Field_Service_Information */
		Header: MyDog.FormQuote_Field_Service_Information.Header;
		/** The Navigation of form Quote_Field_Service_Information */
		Navigation: MyDog.FormQuote_Field_Service_Information.Navigation;
		/** The Grid of form Quote_Field_Service_Information */
		Grid: MyDog.FormQuote_Field_Service_Information.Grid;
	}
	namespace FormQuote_Project_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows whether the quote is draft, active, won, or closed. Only draft quotes can be edited. */
			StateCode: DevKit.Controls.OptionSet;
			/** Select the quote's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the quote. */
			TotalAmount: DevKit.Controls.Money;
		}
		interface tab_quoteAnaylsis_tab_Sections {
			tab_6_section_1: DevKit.Controls.Section;
			tab_6_section_2: DevKit.Controls.Section;
			tab_6_section_3: DevKit.Controls.Section;
		}
		interface tab_Summary_tab_Sections {
			quote_information: DevKit.Controls.Section;
			description_section: DevKit.Controls.Section;
			Summary_tab_section_9: DevKit.Controls.Section;
			shipping_information: DevKit.Controls.Section;
			addresses: DevKit.Controls.Section;
			Summary_tab_section_8: DevKit.Controls.Section;
		}
		interface tab_QuoteLinesTab_Sections {
			ProjectLinesSection: DevKit.Controls.Section;
			ProductLinesSection: DevKit.Controls.Section;
			DynamicProperties: DevKit.Controls.Section;
		}
		interface tab_ProjectPriceListsTab_Sections {
			ProjectPriceListsSection: DevKit.Controls.Section;
		}
		interface tab_profitability_analytics_tab_Sections {
			analyticResultSection: DevKit.Controls.Section;
			analyticsChartDetailsSection: DevKit.Controls.Section;
		}
		interface tab_competive_analysis_tab_Sections {
			Summary_tab_section_10: DevKit.Controls.Section;
			analytics_tab_section_5: DevKit.Controls.Section;
		}
		interface tab_quoteAnaylsis_tab extends DevKit.Controls.ITab {
			Section: tab_quoteAnaylsis_tab_Sections;
		}
		interface tab_Summary_tab extends DevKit.Controls.ITab {
			Section: tab_Summary_tab_Sections;
		}
		interface tab_QuoteLinesTab extends DevKit.Controls.ITab {
			Section: tab_QuoteLinesTab_Sections;
		}
		interface tab_ProjectPriceListsTab extends DevKit.Controls.ITab {
			Section: tab_ProjectPriceListsTab_Sections;
		}
		interface tab_profitability_analytics_tab extends DevKit.Controls.ITab {
			Section: tab_profitability_analytics_tab_Sections;
		}
		interface tab_competive_analysis_tab extends DevKit.Controls.ITab {
			Section: tab_competive_analysis_tab_Sections;
		}
		interface Tabs {
			quoteAnaylsis_tab: tab_quoteAnaylsis_tab;
			Summary_tab: tab_Summary_tab;
			QuoteLinesTab: tab_QuoteLinesTab;
			ProjectPriceListsTab: tab_ProjectPriceListsTab;
			profitability_analytics_tab: tab_profitability_analytics_tab;
			competive_analysis_tab: tab_competive_analysis_tab;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			/** Shows the complete Bill To address. */
			BillTo_Composite: DevKit.Controls.String;
			/** Type the primary contact name at the customer's billing address. */
			BillTo_ContactName: DevKit.Controls.String;
			/** Type a name for the customer's billing address, such as "Headquarters" or "Field office", to identify the address. */
			BillTo_Name: DevKit.Controls.String;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Type additional information to describe the quote, such as the products or services offered or details about the customer's product preferences. */
			Description: DevKit.Controls.String;
			/** Enter the date when the quote pricing is effective or was first communicated to the customer. */
			EffectiveFrom: DevKit.Controls.Date;
			/** Enter the expiration date or last day the quote pricing is effective for the customer. */
			EffectiveTo: DevKit.Controls.Date;
			/** Enter the date a decision or order is due from the customer to indicate the expiration date of the quote. */
			ExpiresOn: DevKit.Controls.Date;
			/** Select the freight terms to make sure shipping charges are processed correctly. */
			FreightTermsCode: DevKit.Controls.OptionSet;
			/** Account manager responsible for the quote. */
			msdyn_AccountManagerId: DevKit.Controls.Lookup;
			/** Shows the estimated gross margin after accounting for non-chargeable components. */
			msdyn_AdjustedGrossMargin: DevKit.Controls.Decimal;
			/** Shows the estimated gross margin after accounting for non-chargeable components. */
			msdyn_AdjustedGrossMargin_1: DevKit.Controls.Decimal;
			/** Shows how the quote estimation of sales value and schedule compare to customer expectations on those parameters. Possible values are 1: Within Customer expectations, 2: Not Within Customer expectations, and 0: Customer expectations Not Available. */
			msdyn_Competitive: DevKit.Controls.OptionSet;
			/** Shows how the quote estimation of sales value and schedule compare to customer expectations on those parameters. Possible values are 1: Within Customer expectations, 2: Not Within Customer expectations, and 0: Customer expectations Not Available. */
			msdyn_Competitive_1: DevKit.Controls.OptionSet;
			/** The organizational unit in charge of the contract. */
			msdyn_ContractOrganizationalUnitId: DevKit.Controls.Lookup;
			/** Shows the total customer budget for the quote, computed from all the quote lines. */
			msdyn_CustomerBudgetRollUp: DevKit.Controls.Money;
			/** Shows how the estimated sales value on the quote compares to customer budgets. Possible values are 1: Within Customer Budget, 2: Exceeds Customer Budget, 0: Budget Estimate Not Available */
			msdyn_EstimatedBudget: DevKit.Controls.OptionSet;
			/** Shows how the estimated sales value on the quote compares to customer budgets. Possible values are 1: Within Customer Budget, 2: Exceeds Customer Budget, 0: Budget Estimate Not Available */
			msdyn_EstimatedBudget_1: DevKit.Controls.OptionSet;
			/** Estimated completion date, computed from the details of each quote line. */
			msdyn_EstimatedCompletionRollUp: DevKit.Controls.Date;
			/** Shows how the estimated schedule on the quote compares to customer expectations. Possible values are 1: Estimated To Finish Early, 2: Estimated To Finish Late, 3: Estimated To Finish On Schedule, and 0: Schedule Not Available. */
			msdyn_EstimatedSchedule: DevKit.Controls.OptionSet;
			/** Shows how the estimated schedule on the quote compares to customer expectations. Possible values are 1: Estimated To Finish Early, 2: Estimated To Finish Late, 3: Estimated To Finish On Schedule, and 0: Schedule Not Available. */
			msdyn_EstimatedSchedule_1: DevKit.Controls.OptionSet;
			/** Shows the estimated gross margin without accounting for non-chargeable components. */
			msdyn_GrossMargin: DevKit.Controls.Decimal;
			/** Shows the estimated gross margin without accounting for non-chargeable components. */
			msdyn_GrossMargin_1: DevKit.Controls.Decimal;
			/** Internal use only. */
			msdyn_OrderType: DevKit.Controls.OptionSet;
			/** Shows the estimated profitability of the quote. Possible values are Profitable, Not Profitable, and Profitability not available. */
			msdyn_Profitability: DevKit.Controls.OptionSet;
			/** Shows the estimated profitability of the quote. Possible values are Profitable, Not Profitable, and Profitability not available. */
			msdyn_Profitability_1: DevKit.Controls.OptionSet;
			msdyn_TotalChargeableCostRollup: DevKit.Controls.Money;
			msdyn_TotalNonchargeableCostRollup: DevKit.Controls.Money;
			/** Type a descriptive name for the quote. */
			Name: DevKit.Controls.String;
			/** Choose the opportunity that the quote is related to for reporting and analytics. */
			OpportunityId: DevKit.Controls.Lookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Controls.Lookup;
			/** Shows the quote number for customer reference and searching capabilities. The number cannot be modified. */
			QuoteNumber: DevKit.Controls.String;
			/** Enter the delivery date requested by the customer for all products in the quote. */
			RequestDeliveryBy: DevKit.Controls.Date;
			/** Enter the delivery date requested by the customer for all products in the quote. */
			RequestDeliveryBy_1: DevKit.Controls.Date;
			/** Shows the version number of the quote for revision history tracking. */
			RevisionNumber: DevKit.Controls.Integer;
			/** Select a shipping method for deliveries sent to this address. */
			ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Shows the complete Ship To address. */
			ShipTo_Composite: DevKit.Controls.String;
			/** Select the quote's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the quote. */
			TotalAmount: DevKit.Controls.Money;
			/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the quote. */
			TotalAmount_1: DevKit.Controls.Money;
			/** Value of the Total Amount in base currency. */
			TotalAmount_Base: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Select whether the products included in the quote should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Controls.Boolean;
		}
		interface Navigation {
			navProducts: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem,
			navDocument: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			navOrders: DevKit.Controls.NavigationItem
		}
		interface Grid {
			ProjectQuoteLines: DevKit.Controls.Grid;
			quotedetailsGrid: DevKit.Controls.Grid;
			ProjectPriceListsSubGrid: DevKit.Controls.Grid;
			costRevenueDistribution: DevKit.Controls.Grid;
			quoteLineDetailAnalysis: DevKit.Controls.Grid;
			quoteLineComparisonGrid: DevKit.Controls.Grid;
			totalQuoteAmountComparisonGrid: DevKit.Controls.Grid;
		}
	}
	class FormQuote_Project_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Quote_Project_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Quote_Project_Information */
		Body: MyDog.FormQuote_Project_Information.Body;
		/** The Header section of form Quote_Project_Information */
		Header: MyDog.FormQuote_Project_Information.Header;
		/** The Navigation of form Quote_Project_Information */
		Navigation: MyDog.FormQuote_Project_Information.Navigation;
		/** The Grid of form Quote_Project_Information */
		Grid: MyDog.FormQuote_Project_Information.Grid;
	}
	namespace FormQuote {
		interface tab_newQuote_Sections {
			quickQuote_summary: DevKit.Controls.Section;
			quickQuote_salesinformation: DevKit.Controls.Section;
		}
		interface tab_newQuote extends DevKit.Controls.ITab {
			Section: tab_newQuote_Sections;
		}
		interface Tabs {
			newQuote: tab_newQuote;
		}
		interface Body {
			Tab: Tabs;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Type additional information to describe the quote, such as the products or services offered or details about the customer's product preferences. */
			Description: DevKit.Controls.String;
			/** Type a descriptive name for the quote. */
			Name: DevKit.Controls.String;
			/** Choose the opportunity that the quote is related to for reporting and analytics. */
			OpportunityId: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Controls.Lookup;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class FormQuote extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Quote
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
		/** The Body section of form Quote */
		Body: MyDog.FormQuote.Body;
	}
}
declare namespace OptionSet {
	namespace Quote {
		enum FreightTermsCode {
			/** 1 */
			FOB,
			/** 2 */
			No_Charge
		}
		enum msdyn_Competitive {
			/** 192350000 */
			Customer_Budget_Not_Available,
			/** 192350002 */
			Outside_Customer_Expectations,
			/** 192350001 */
			Within_Customer_Expectations
		}
		enum msdyn_EstimatedBudget {
			/** 192350000 */
			Budget_Estimate_Not_Available,
			/** 192350002 */
			Exceeds_Customer_Budget,
			/** 192350001 */
			Within_Customer_Budget
		}
		enum msdyn_EstimatedSchedule {
			/** 192350001 */
			Estimated_To_Finish_Early,
			/** 192350002 */
			Estimated_To_Finish_Late,
			/** 192350003 */
			Estimated_To_Finish_On_Schedule,
			/** 192350000 */
			Schedule_Not_Available
		}
		enum msdyn_feasible {
			/** 192350000 */
			Feasibility_Not_Available,
			/** 192350001 */
			Feasible,
			/** 192350002 */
			Not_Feasible
		}
		enum msdyn_OrderType {
			/** 192350000 */
			Item_based,
			/** 690970002 */
			Service_Maintenance_Based,
			/** 192350001 */
			Work_based
		}
		enum msdyn_Profitability {
			/** 192350002 */
			Not_Profitable,
			/** 192350000 */
			Profitability_Not_Available,
			/** 192350001 */
			Profitable
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
			/** 1 */
			Active,
			/** 3 */
			Closed,
			/** 0 */
			Draft,
			/** 2 */
			Won
		}
		enum StatusCode {
			/** 6 */
			Canceled,
			/** 1 */
			In_Progress_1,
			/** 2 */
			In_Progress_2,
			/** 5 */
			Lost,
			/** 3 */
			Open,
			/** 7 */
			Revised,
			/** 4 */
			Won
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
//{'JsForm':['Field Service Information','Project Information','Quote'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}