﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
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
			ServiceLinesSection: DevKit.Controls.Section;
			suggestionsection: DevKit.Controls.Section;
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
			notescontrol: DevKit.Controls.Note;
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
			nav_msdyn_quote_msdyn_quotebookingincident_Quote: DevKit.Controls.NavigationItem,
			nav_msdyn_quote_msdyn_quotebookingproduct_Quote: DevKit.Controls.NavigationItem,
			nav_msdyn_quote_msdyn_quotebookingservice_Quote: DevKit.Controls.NavigationItem,
			nav_msdyn_quote_msdyn_quotebookingservicetask_Quote: DevKit.Controls.NavigationItem,
			nav_msdyn_quote_msdyn_quotebookingsetup_Quote: DevKit.Controls.NavigationItem,
			nav_msdyn_quote_msdyn_quoteinvoicingsetup_Quote: DevKit.Controls.NavigationItem,
			navProducts: DevKit.Controls.NavigationItem
		}
		interface ProcessProject_Service_Project_Stages {

		}
		interface Process extends DevKit.Controls.IProcess {
			Project_Service_Project_Stages: ProcessProject_Service_Project_Stages;
		}
		interface Grid {
			quotedetailsGrid: DevKit.Controls.Grid;
			servicesGrid: DevKit.Controls.Grid;
		}
	}
	class FormQuote_Field_Service_Information extends DevKit.IForm {
		/**
		* Field Service Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Quote_Field_Service_Information */
		Body: DevKit.FormQuote_Field_Service_Information.Body;
		/** The Header section of form Quote_Field_Service_Information */
		Header: DevKit.FormQuote_Field_Service_Information.Header;
		/** The Navigation of form Quote_Field_Service_Information */
		Navigation: DevKit.FormQuote_Field_Service_Information.Navigation;
		/** The Process of form Quote_Field_Service_Information */
		Process: DevKit.FormQuote_Field_Service_Information.Process;
		/** The Grid of form Quote_Field_Service_Information */
		Grid: DevKit.FormQuote_Field_Service_Information.Grid;
		/** The SidePanes of form Quote_Field_Service_Information */
		SidePanes: DevKit.SidePanes;
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
		interface tab_competive_analysis_tab_Sections {
			analytics_tab_section_5: DevKit.Controls.Section;
			Summary_tab_section_10: DevKit.Controls.Section;
		}
		interface tab_profitability_analytics_tab_Sections {
			analyticResultSection: DevKit.Controls.Section;
			analyticsChartDetailsSection: DevKit.Controls.Section;
		}
		interface tab_ProjectPriceListsTab_Sections {
			ProjectPriceListsSection: DevKit.Controls.Section;
		}
		interface tab_quoteAnaylsis_tab_Sections {
			tab_6_section_1: DevKit.Controls.Section;
			tab_6_section_2: DevKit.Controls.Section;
			tab_6_section_3: DevKit.Controls.Section;
		}
		interface tab_QuoteLinesTab_Sections {
			DynamicProperties: DevKit.Controls.Section;
			ProductLinesSection: DevKit.Controls.Section;
			ProjectLinesSection: DevKit.Controls.Section;
		}
		interface tab_Summary_tab_Sections {
			addresses: DevKit.Controls.Section;
			description_section: DevKit.Controls.Section;
			quote_information: DevKit.Controls.Section;
			shipping_information: DevKit.Controls.Section;
			Summary_tab_section_8: DevKit.Controls.Section;
			Summary_tab_section_9: DevKit.Controls.Section;
		}
		interface tab_competive_analysis_tab extends DevKit.Controls.ITab {
			Section: tab_competive_analysis_tab_Sections;
		}
		interface tab_profitability_analytics_tab extends DevKit.Controls.ITab {
			Section: tab_profitability_analytics_tab_Sections;
		}
		interface tab_ProjectPriceListsTab extends DevKit.Controls.ITab {
			Section: tab_ProjectPriceListsTab_Sections;
		}
		interface tab_quoteAnaylsis_tab extends DevKit.Controls.ITab {
			Section: tab_quoteAnaylsis_tab_Sections;
		}
		interface tab_QuoteLinesTab extends DevKit.Controls.ITab {
			Section: tab_QuoteLinesTab_Sections;
		}
		interface tab_Summary_tab extends DevKit.Controls.ITab {
			Section: tab_Summary_tab_Sections;
		}
		interface Tabs {
			competive_analysis_tab: tab_competive_analysis_tab;
			profitability_analytics_tab: tab_profitability_analytics_tab;
			ProjectPriceListsTab: tab_ProjectPriceListsTab;
			quoteAnaylsis_tab: tab_quoteAnaylsis_tab;
			QuoteLinesTab: tab_QuoteLinesTab;
			Summary_tab: tab_Summary_tab;
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
			msdyn_AdjustedGrossMargin1: DevKit.Controls.Decimal;
			/** Shows how the quote estimation of sales value and schedule compare to customer expectations on those parameters. Possible values are 1: Within Customer expectations, 2: Not Within Customer expectations, and 0: Customer expectations Not Available. */
			msdyn_Competitive: DevKit.Controls.OptionSet;
			/** Shows how the quote estimation of sales value and schedule compare to customer expectations on those parameters. Possible values are 1: Within Customer expectations, 2: Not Within Customer expectations, and 0: Customer expectations Not Available. */
			msdyn_Competitive1: DevKit.Controls.OptionSet;
			/** The organizational unit in charge of the contract. */
			msdyn_ContractOrganizationalUnitId: DevKit.Controls.Lookup;
			/** Shows the total customer budget for the quote, computed from all the quote lines. */
			msdyn_CustomerBudgetRollUp: DevKit.Controls.Money;
			/** Shows how the estimated sales value on the quote compares to customer budgets. Possible values are 1: Within Customer Budget, 2: Exceeds Customer Budget, 0: Budget Estimate Not Available */
			msdyn_EstimatedBudget: DevKit.Controls.OptionSet;
			/** Shows how the estimated sales value on the quote compares to customer budgets. Possible values are 1: Within Customer Budget, 2: Exceeds Customer Budget, 0: Budget Estimate Not Available */
			msdyn_EstimatedBudget1: DevKit.Controls.OptionSet;
			/** Estimated completion date, computed from the details of each quote line. */
			msdyn_EstimatedCompletionRollUp: DevKit.Controls.Date;
			/** Shows how the estimated schedule on the quote compares to customer expectations. Possible values are 1: Estimated To Finish Early, 2: Estimated To Finish Late, 3: Estimated To Finish On Schedule, and 0: Schedule Not Available. */
			msdyn_EstimatedSchedule: DevKit.Controls.OptionSet;
			/** Shows how the estimated schedule on the quote compares to customer expectations. Possible values are 1: Estimated To Finish Early, 2: Estimated To Finish Late, 3: Estimated To Finish On Schedule, and 0: Schedule Not Available. */
			msdyn_EstimatedSchedule1: DevKit.Controls.OptionSet;
			/** Shows the estimated gross margin without accounting for non-chargeable components. */
			msdyn_GrossMargin: DevKit.Controls.Decimal;
			/** Shows the estimated gross margin without accounting for non-chargeable components. */
			msdyn_GrossMargin1: DevKit.Controls.Decimal;
			/** Internal use only. */
			msdyn_OrderType: DevKit.Controls.OptionSet;
			/** Shows the estimated profitability of the quote. Possible values are Profitable, Not Profitable, and Profitability not available. */
			msdyn_Profitability: DevKit.Controls.OptionSet;
			/** Shows the estimated profitability of the quote. Possible values are Profitable, Not Profitable, and Profitability not available. */
			msdyn_Profitability1: DevKit.Controls.OptionSet;
			msdyn_TotalChargeableCostRollup: DevKit.Controls.Money;
			msdyn_TotalNonchargeableCostRollup: DevKit.Controls.Money;
			/** Type a descriptive name for the quote. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
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
			RequestDeliveryBy1: DevKit.Controls.Date;
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
			TotalAmount1: DevKit.Controls.Money;
			/** Value of the Total Amount in base currency. */
			TotalAmount_Base: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Select whether the products included in the quote should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			WillCall: DevKit.Controls.Boolean;
		}
		interface Navigation {
			nav_msdyn_quote_msdyn_quotelineanalyticsbreakdown_Quote: DevKit.Controls.NavigationItem,
			nav_msdyn_quote_msdyn_quotelinetransaction: DevKit.Controls.NavigationItem,
			nav_msdyn_quote_msdyn_quotepricelist_Quote: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem,
			navDocument: DevKit.Controls.NavigationItem,
			navOrders: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			navProducts: DevKit.Controls.NavigationItem
		}
		interface ProcessProject_Service_Project_Stages {

		}
		interface Process extends DevKit.Controls.IProcess {
			Project_Service_Project_Stages: ProcessProject_Service_Project_Stages;
		}
		interface Grid {
			costRevenueDistribution: DevKit.Controls.Grid;
			ProjectPriceListsSubGrid: DevKit.Controls.Grid;
			ProjectQuoteLines: DevKit.Controls.Grid;
			quotedetailsGrid: DevKit.Controls.Grid;
			quoteLineComparisonGrid: DevKit.Controls.Grid;
			quoteLineDetailAnalysis: DevKit.Controls.Grid;
			totalQuoteAmountComparisonGrid: DevKit.Controls.Grid;
		}
	}
	class FormQuote_Project_Information extends DevKit.IForm {
		/**
		* Project Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Quote_Project_Information */
		Body: DevKit.FormQuote_Project_Information.Body;
		/** The Header section of form Quote_Project_Information */
		Header: DevKit.FormQuote_Project_Information.Header;
		/** The Navigation of form Quote_Project_Information */
		Navigation: DevKit.FormQuote_Project_Information.Navigation;
		/** The Process of form Quote_Project_Information */
		Process: DevKit.FormQuote_Project_Information.Process;
		/** The Grid of form Quote_Project_Information */
		Grid: DevKit.FormQuote_Project_Information.Grid;
		/** The SidePanes of form Quote_Project_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormQuote {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the date when the quote pricing is effective or was first communicated to the customer. */
			EffectiveFrom: DevKit.Controls.Date;
			/** Enter the expiration date or last day the quote pricing is effective for the customer. */
			EffectiveTo: DevKit.Controls.Date;
			/** Select the quote's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the quote. */
			TotalAmount: DevKit.Controls.Money;
		}
		interface tab_details_tab_Sections {
			Social_Pane: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_Summary_tab_Sections {
			addresses: DevKit.Controls.Section;
			description_section: DevKit.Controls.Section;
			DynamicProperties: DevKit.Controls.Section;
			products: DevKit.Controls.Section;
			quote_information: DevKit.Controls.Section;
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
			/** Type additional information to describe the quote, such as the products or services offered or details about the customer's product preferences. */
			Description: DevKit.Controls.String;
			/** Type the discount amount for the quote if the customer is eligible for special savings. */
			DiscountAmount: DevKit.Controls.Money;
			/** Type the discount rate that should be applied to the Detail Amount field to include additional savings for the customer in the quote. */
			DiscountPercentage: DevKit.Controls.Decimal;
			/** Type the cost of freight or shipping for the products included in the quote for use in calculating the Total Amount field. */
			FreightAmount: DevKit.Controls.Money;
			/** Select the freight terms to make sure shipping charges are processed correctly. */
			FreightTermsCode: DevKit.Controls.OptionSet;
			/** Internal use only. */
			msdyn_OrderType: DevKit.Controls.OptionSet;
			/** Type a descriptive name for the quote. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Choose the opportunity that the quote is related to for reporting and analytics. */
			OpportunityId: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
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
			nav_msdyn_quote_msdyn_quotebookingincident_Quote: DevKit.Controls.NavigationItem,
			nav_msdyn_quote_msdyn_quotebookingproduct_Quote: DevKit.Controls.NavigationItem,
			nav_msdyn_quote_msdyn_quotebookingservice_Quote: DevKit.Controls.NavigationItem,
			nav_msdyn_quote_msdyn_quotebookingservicetask_Quote: DevKit.Controls.NavigationItem,
			nav_msdyn_quote_msdyn_quotebookingsetup_Quote: DevKit.Controls.NavigationItem,
			nav_msdyn_quote_msdyn_quoteinvoicingsetup_Quote: DevKit.Controls.NavigationItem,
			navProducts: DevKit.Controls.NavigationItem
		}
		interface ProcessProject_Service_Project_Stages {

		}
		interface Process extends DevKit.Controls.IProcess {
			Project_Service_Project_Stages: ProcessProject_Service_Project_Stages;
		}
		interface Grid {
			quotedetailsGrid: DevKit.Controls.Grid;
		}
	}
	class FormQuote extends DevKit.IForm {
		/**
		* Quote [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Quote */
		Body: DevKit.FormQuote.Body;
		/** The Header section of form Quote */
		Header: DevKit.FormQuote.Header;
		/** The Navigation of form Quote */
		Navigation: DevKit.FormQuote.Navigation;
		/** The Process of form Quote */
		Process: DevKit.FormQuote.Process;
		/** The Grid of form Quote */
		Grid: DevKit.FormQuote.Grid;
		/** The SidePanes of form Quote */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormQuote2 {
		interface tab_newQuote_Sections {
			quickQuote_salesinformation: DevKit.Controls.Section;
			quickQuote_summary: DevKit.Controls.Section;
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
	class FormQuote2 extends DevKit.IForm {
		/**
		* Quote [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Quote2 */
		Body: DevKit.FormQuote2.Body;
	}
	class QuoteApi {
		/**
		* DynamicsCrm.DevKit QuoteApi
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
		/** Unique identifier of the account with which the quote is associated. */
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
		/** Enter the date when the quote was closed to indicate the expiration, revision, or cancellation date. */
		ClosedOn_DateOnly: Date;
		/** Unique identifier of the contact associated with the quote. */
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
		/** Type additional information to describe the quote, such as the products or services offered or details about the customer's product preferences. */
		Description: string;
		/** Type the discount amount for the quote if the customer is eligible for special savings. */
		DiscountAmount: number;
		/** Value of the Quote Discount Amount in base currency. */
		readonly DiscountAmount_Base: number;
		/** Type the discount rate that should be applied to the Detail Amount field to include additional savings for the customer in the quote. */
		DiscountPercentage: number;
		/** Enter the date when the quote pricing is effective or was first communicated to the customer. */
		EffectiveFrom_UtcDateOnly: Date;
		/** Enter the expiration date or last day the quote pricing is effective for the customer. */
		EffectiveTo_UtcDateOnly: Date;
		/** The primary email address for the entity. */
		EmailAddress: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Enter the date a decision or order is due from the customer to indicate the expiration date of the quote. */
		ExpiresOn_DateOnly: Date;
		/** Type the cost of freight or shipping for the products included in the quote for use in calculating the Total Amount field. */
		FreightAmount: number;
		/** Value of the Freight Amount in base currency. */
		readonly FreightAmount_Base: number;
		/** Select the freight terms to make sure shipping charges are processed correctly. */
		FreightTermsCode: OptionSet.Quote.FreightTermsCode;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Contains the date time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Customer Account associated with this Quote */
		msdyn_Account: string;
		/** Account manager responsible for the quote. */
		msdyn_AccountManagerId: string;
		/** Shows the estimated gross margin after accounting for non-chargeable components. */
		readonly msdyn_AdjustedGrossMargin: number;
		/** Shows how the quote estimation of sales value and schedule compare to customer expectations on those parameters. Possible values are 1: Within Customer expectations, 2: Not Within Customer expectations, and 0: Customer expectations Not Available. */
		readonly msdyn_Competitive: OptionSet.Quote.msdyn_Competitive;
		/** The organizational unit in charge of the contract. */
		msdyn_ContractOrganizationalUnitId: string;
		/** Shows the total customer budget for the quote, computed from all the quote lines. */
		readonly msdyn_CustomerBudgetRollUp: number;
		/** Shows the value of the customer budget in the base currency. */
		readonly msdyn_customerbudgetrollup_Base: number;
		/** Last Updated time of rollup field Customer Budget. */
		readonly msdyn_CustomerBudgetRollUp_Date_UtcDateAndTime: Date;
		/** State of rollup field Customer Budget. */
		readonly msdyn_CustomerBudgetRollUp_State: number;
		/** Shows how the estimated sales value on the quote compares to customer budgets. Possible values are 1: Within Customer Budget, 2: Exceeds Customer Budget, 0: Budget Estimate Not Available */
		readonly msdyn_EstimatedBudget: OptionSet.Quote.msdyn_EstimatedBudget;
		/** Estimated completion date, computed from the details of each quote line. */
		readonly msdyn_EstimatedCompletionRollUp_UtcDateOnly: Date;
		/** Last Updated time of rollup field Estimated Completion. */
		readonly msdyn_EstimatedCompletionRollUp_Date_UtcDateAndTime: Date;
		/** State of rollup field Estimated Completion. */
		readonly msdyn_EstimatedCompletionRollUp_State: number;
		/** The estimated cost of this quote */
		msdyn_EstimatedCost: number;
		/** Value of the Estimated Cost in base currency. */
		readonly msdyn_estimatedcost_Base: number;
		/** Estimated Margin of this quote */
		readonly msdyn_EstimatedQuoteMargin: number;
		/** Shows how the estimated schedule on the quote compares to customer expectations. Possible values are 1: Estimated To Finish Early, 2: Estimated To Finish Late, 3: Estimated To Finish On Schedule, and 0: Schedule Not Available. */
		readonly msdyn_EstimatedSchedule: OptionSet.Quote.msdyn_EstimatedSchedule;
		/** Shows how the quote estimation compares to project estimation. Possible values are 0: Feasibility Not Available, 1: Feasible, and 2: Not Feasible. */
		msdyn_feasible: OptionSet.Quote.msdyn_feasible;
		/** Shows the estimated gross margin without accounting for non-chargeable components. */
		readonly msdyn_GrossMargin: number;
		/** The totals of all assigned Invoice Setups */
		msdyn_InvoiceSetupTotals: number;
		/** Value of the Invoice Setup Totals in base currency. */
		readonly msdyn_invoicesetuptotals_Base: number;
		/** Internal use only. */
		msdyn_OrderType: OptionSet.Quote.msdyn_OrderType;
		/** Shows the estimated profitability of the quote. Possible values are Profitable, Not Profitable, and Profitability not available. */
		readonly msdyn_Profitability: OptionSet.Quote.msdyn_Profitability;
		/** The latest end date of all associated quote lines */
		msdyn_QuoteLineEndDate_UtcDateOnly: Date;
		/** The earliest Start Date of all Quote Lines that are associated to this quote */
		msdyn_QuoteLineStartDate_UtcDateOnly: Date;
		readonly msdyn_TotalAmount: number;
		/** Value of the TotalAmount in base currency. */
		readonly msdyn_totalamount_Base: number;
		readonly msdyn_TotalChargeableCostRollup: number;
		/** Value of the Total Chargeable Cost in base currency. */
		readonly msdyn_totalchargeablecostrollup_Base: number;
		/** Last Updated time of rollup field Total Chargeable Cost. */
		readonly msdyn_TotalChargeableCostRollup_Date_UtcDateAndTime: Date;
		/** State of rollup field Total Chargeable Cost. */
		readonly msdyn_TotalChargeableCostRollup_State: number;
		readonly msdyn_TotalNonchargeableCostRollup: number;
		/** Value of the Total Non-chargeable Cost in base currency. */
		readonly msdyn_totalnonchargeablecostrollup_Base: number;
		/** Last Updated time of rollup field Total Non-chargeable Cost. */
		readonly msdyn_TotalNonchargeableCostRollup_Date_UtcDateAndTime: Date;
		/** State of rollup field Total Non-chargeable Cost. */
		readonly msdyn_TotalNonchargeableCostRollup_State: number;
		/** Type a descriptive name for the quote. */
		Name: string;
		/** Shows the duration in minutes for which the quote was on hold. */
		readonly OnHoldTime: number;
		/** Choose the opportunity that the quote is related to for reporting and analytics. */
		OpportunityId: string;
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
		PaymentTermsCode: OptionSet.Quote.PaymentTermsCode;
		/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
		PriceLevelId: string;
		/** Pricing error for the quote. */
		PricingErrorCode: OptionSet.Quote.PricingErrorCode;
		/** Contains the id of the process associated with the entity. */
		ProcessId: string;
		/** Unique identifier of the quote. */
		QuoteId: string;
		/** Shows the quote number for customer reference and searching capabilities. The number cannot be modified. */
		QuoteNumber: string;
		/** Enter the delivery date requested by the customer for all products in the quote. */
		RequestDeliveryBy_UtcDateOnly: Date;
		/** Shows the version number of the quote for revision history tracking. */
		readonly RevisionNumber: number;
		/** Select a shipping method for deliveries sent to this address. */
		ShippingMethodCode: OptionSet.Quote.ShippingMethodCode;
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
		ShipTo_FreightTermsCode: OptionSet.Quote.ShipTo_FreightTermsCode;
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
		/** Skip Price Calculation (For Internal use) */
		SkipPriceCalculation: OptionSet.Quote.SkipPriceCalculation;
		/** Choose the service level agreement (SLA) that you want to apply to the quote record. */
		SLAId: string;
		/** Last SLA that was applied to this quote. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Contains the id of the stage where the entity is located. */
		StageId: string;
		/** Shows whether the quote is draft, active, won, or closed. Only draft quotes can be edited. */
		StateCode: OptionSet.Quote.StateCode;
		/** Select the quote's status. */
		StatusCode: OptionSet.Quote.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the quote. */
		TotalAmount: number;
		/** Value of the Total Amount in base currency. */
		readonly TotalAmount_Base: number;
		/** Shows the total product amount for the quote, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount due for the quote. */
		TotalAmountLessFreight: number;
		/** Value of the Total Pre-Freight Amount in base currency. */
		readonly TotalAmountLessFreight_Base: number;
		/** Shows the total discount amount, based on the discount price and rate entered on the quote. */
		TotalDiscountAmount: number;
		/** Value of the Total Discount Amount in base currency. */
		readonly TotalDiscountAmount_Base: number;
		/** Shows the sum of all existing and write-in products included on the quote, based on the specified price list and quantities. */
		TotalLineItemAmount: number;
		/** Value of the Total Detail Amount in base currency. */
		readonly TotalLineItemAmount_Base: number;
		/** Shows the total of the Manual Discount amounts specified on all products included in the quote. This value is reflected in the Detail Amount field on the quote and is added to any discount amount or rate specified on the quote */
		TotalLineItemDiscountAmount: number;
		/** Value of the Total Line Item Discount Amount in base currency. */
		readonly TotalLineItemDiscountAmount_Base: number;
		/** Shows the total of the Tax amounts specified on all products included in the quote, included in the Total Amount due calculation for the quote. */
		TotalTax: number;
		/** Value of the Total Tax in base currency. */
		readonly TotalTax_Base: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: string;
		/** For internal use only. */
		readonly UniqueDscId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** Select whether the products included in the quote should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
		WillCall: boolean;
		readonly FormattedValue: {
			/** Unique identifier of the account with which the quote is associated. */
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
			/** Enter the date when the quote was closed to indicate the expiration, revision, or cancellation date. */
			readonly ClosedOn_DateOnly: string;
			/** Unique identifier of the contact associated with the quote. */
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
			/** Type additional information to describe the quote, such as the products or services offered or details about the customer's product preferences. */
			readonly Description: string;
			/** Type the discount amount for the quote if the customer is eligible for special savings. */
			readonly DiscountAmount: string;
			/** Value of the Quote Discount Amount in base currency. */
			readonly DiscountAmount_Base: string;
			/** Type the discount rate that should be applied to the Detail Amount field to include additional savings for the customer in the quote. */
			readonly DiscountPercentage: string;
			/** Enter the date when the quote pricing is effective or was first communicated to the customer. */
			readonly EffectiveFrom_UtcDateOnly: string;
			/** Enter the expiration date or last day the quote pricing is effective for the customer. */
			readonly EffectiveTo_UtcDateOnly: string;
			/** The primary email address for the entity. */
			readonly EmailAddress: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Enter the date a decision or order is due from the customer to indicate the expiration date of the quote. */
			readonly ExpiresOn_DateOnly: string;
			/** Type the cost of freight or shipping for the products included in the quote for use in calculating the Total Amount field. */
			readonly FreightAmount: string;
			/** Value of the Freight Amount in base currency. */
			readonly FreightAmount_Base: string;
			/** Select the freight terms to make sure shipping charges are processed correctly. */
			readonly FreightTermsCode: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Contains the date time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Customer Account associated with this Quote */
			readonly msdyn_Account: string;
			/** Account manager responsible for the quote. */
			readonly msdyn_AccountManagerId: string;
			/** Shows the estimated gross margin after accounting for non-chargeable components. */
			readonly msdyn_AdjustedGrossMargin: string;
			/** Shows how the quote estimation of sales value and schedule compare to customer expectations on those parameters. Possible values are 1: Within Customer expectations, 2: Not Within Customer expectations, and 0: Customer expectations Not Available. */
			readonly msdyn_Competitive: string;
			/** The organizational unit in charge of the contract. */
			readonly msdyn_ContractOrganizationalUnitId: string;
			/** Shows the total customer budget for the quote, computed from all the quote lines. */
			readonly msdyn_CustomerBudgetRollUp: string;
			/** Shows the value of the customer budget in the base currency. */
			readonly msdyn_customerbudgetrollup_Base: string;
			/** Last Updated time of rollup field Customer Budget. */
			readonly msdyn_CustomerBudgetRollUp_Date_UtcDateAndTime: string;
			/** State of rollup field Customer Budget. */
			readonly msdyn_CustomerBudgetRollUp_State: string;
			/** Shows how the estimated sales value on the quote compares to customer budgets. Possible values are 1: Within Customer Budget, 2: Exceeds Customer Budget, 0: Budget Estimate Not Available */
			readonly msdyn_EstimatedBudget: string;
			/** Estimated completion date, computed from the details of each quote line. */
			readonly msdyn_EstimatedCompletionRollUp_UtcDateOnly: string;
			/** Last Updated time of rollup field Estimated Completion. */
			readonly msdyn_EstimatedCompletionRollUp_Date_UtcDateAndTime: string;
			/** State of rollup field Estimated Completion. */
			readonly msdyn_EstimatedCompletionRollUp_State: string;
			/** The estimated cost of this quote */
			readonly msdyn_EstimatedCost: string;
			/** Value of the Estimated Cost in base currency. */
			readonly msdyn_estimatedcost_Base: string;
			/** Estimated Margin of this quote */
			readonly msdyn_EstimatedQuoteMargin: string;
			/** Shows how the estimated schedule on the quote compares to customer expectations. Possible values are 1: Estimated To Finish Early, 2: Estimated To Finish Late, 3: Estimated To Finish On Schedule, and 0: Schedule Not Available. */
			readonly msdyn_EstimatedSchedule: string;
			/** Shows how the quote estimation compares to project estimation. Possible values are 0: Feasibility Not Available, 1: Feasible, and 2: Not Feasible. */
			readonly msdyn_feasible: string;
			/** Shows the estimated gross margin without accounting for non-chargeable components. */
			readonly msdyn_GrossMargin: string;
			/** The totals of all assigned Invoice Setups */
			readonly msdyn_InvoiceSetupTotals: string;
			/** Value of the Invoice Setup Totals in base currency. */
			readonly msdyn_invoicesetuptotals_Base: string;
			/** Internal use only. */
			readonly msdyn_OrderType: string;
			/** Shows the estimated profitability of the quote. Possible values are Profitable, Not Profitable, and Profitability not available. */
			readonly msdyn_Profitability: string;
			/** The latest end date of all associated quote lines */
			readonly msdyn_QuoteLineEndDate_UtcDateOnly: string;
			/** The earliest Start Date of all Quote Lines that are associated to this quote */
			readonly msdyn_QuoteLineStartDate_UtcDateOnly: string;
			readonly msdyn_TotalAmount: string;
			/** Value of the TotalAmount in base currency. */
			readonly msdyn_totalamount_Base: string;
			readonly msdyn_TotalChargeableCostRollup: string;
			/** Value of the Total Chargeable Cost in base currency. */
			readonly msdyn_totalchargeablecostrollup_Base: string;
			/** Last Updated time of rollup field Total Chargeable Cost. */
			readonly msdyn_TotalChargeableCostRollup_Date_UtcDateAndTime: string;
			/** State of rollup field Total Chargeable Cost. */
			readonly msdyn_TotalChargeableCostRollup_State: string;
			readonly msdyn_TotalNonchargeableCostRollup: string;
			/** Value of the Total Non-chargeable Cost in base currency. */
			readonly msdyn_totalnonchargeablecostrollup_Base: string;
			/** Last Updated time of rollup field Total Non-chargeable Cost. */
			readonly msdyn_TotalNonchargeableCostRollup_Date_UtcDateAndTime: string;
			/** State of rollup field Total Non-chargeable Cost. */
			readonly msdyn_TotalNonchargeableCostRollup_State: string;
			/** Type a descriptive name for the quote. */
			readonly Name: string;
			/** Shows the duration in minutes for which the quote was on hold. */
			readonly OnHoldTime: string;
			/** Choose the opportunity that the quote is related to for reporting and analytics. */
			readonly OpportunityId: string;
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
			/** Pricing error for the quote. */
			readonly PricingErrorCode: string;
			/** Contains the id of the process associated with the entity. */
			readonly ProcessId: string;
			/** Unique identifier of the quote. */
			readonly QuoteId: string;
			/** Shows the quote number for customer reference and searching capabilities. The number cannot be modified. */
			readonly QuoteNumber: string;
			/** Enter the delivery date requested by the customer for all products in the quote. */
			readonly RequestDeliveryBy_UtcDateOnly: string;
			/** Shows the version number of the quote for revision history tracking. */
			readonly RevisionNumber: string;
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
			/** Skip Price Calculation (For Internal use) */
			readonly SkipPriceCalculation: string;
			/** Choose the service level agreement (SLA) that you want to apply to the quote record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this quote. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Contains the id of the stage where the entity is located. */
			readonly StageId: string;
			/** Shows whether the quote is draft, active, won, or closed. Only draft quotes can be edited. */
			readonly StateCode: string;
			/** Select the quote's status. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the quote. */
			readonly TotalAmount: string;
			/** Value of the Total Amount in base currency. */
			readonly TotalAmount_Base: string;
			/** Shows the total product amount for the quote, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount due for the quote. */
			readonly TotalAmountLessFreight: string;
			/** Value of the Total Pre-Freight Amount in base currency. */
			readonly TotalAmountLessFreight_Base: string;
			/** Shows the total discount amount, based on the discount price and rate entered on the quote. */
			readonly TotalDiscountAmount: string;
			/** Value of the Total Discount Amount in base currency. */
			readonly TotalDiscountAmount_Base: string;
			/** Shows the sum of all existing and write-in products included on the quote, based on the specified price list and quantities. */
			readonly TotalLineItemAmount: string;
			/** Value of the Total Detail Amount in base currency. */
			readonly TotalLineItemAmount_Base: string;
			/** Shows the total of the Manual Discount amounts specified on all products included in the quote. This value is reflected in the Detail Amount field on the quote and is added to any discount amount or rate specified on the quote */
			readonly TotalLineItemDiscountAmount: string;
			/** Value of the Total Line Item Discount Amount in base currency. */
			readonly TotalLineItemDiscountAmount_Base: string;
			/** Shows the total of the Tax amounts specified on all products included in the quote, included in the Total Amount due calculation for the quote. */
			readonly TotalTax: string;
			/** Value of the Total Tax in base currency. */
			readonly TotalTax_Base: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
			readonly TraversedPath: string;
			/** For internal use only. */
			readonly UniqueDscId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** Select whether the products included in the quote should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions. */
			readonly WillCall: string;
		}
	}
}
declare namespace OptionSet {
	namespace Quote {
		enum CustomerIdType {
		}
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
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}