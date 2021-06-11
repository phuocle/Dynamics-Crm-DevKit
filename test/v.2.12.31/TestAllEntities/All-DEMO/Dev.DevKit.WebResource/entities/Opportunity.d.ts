//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormOpportunity_AI_for_Sales {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the expected closing date of the opportunity to help make accurate revenue forecasts. */
			EstimatedCloseDate: DevKit.Controls.Date;
			/** Type the estimated revenue amount to indicate the potential sale or value of the opportunity for revenue forecasting. This field can be either system-populated or editable based on the selection in the Revenue field. */
			EstimatedValue: DevKit.Controls.Money;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the opportunity's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_Product_Line_Items_Sections {
			DynamicProperties: DevKit.Controls.Section;
			opportunityproducts: DevKit.Controls.Section;
			suggestionsection: DevKit.Controls.Section;
			totals: DevKit.Controls.Section;
		}
		interface tab_QUOTES_Sections {
			opportunityquotes: DevKit.Controls.Section;
		}
		interface tab_Summary_Sections {
			Notes_pane: DevKit.Controls.Section;
			Opportunity_details: DevKit.Controls.Section;
			opportunity_information: DevKit.Controls.Section;
			Social_pane: DevKit.Controls.Section;
			Summary_section_6: DevKit.Controls.Section;
		}
		interface tab_Product_Line_Items extends DevKit.Controls.ITab {
			Section: tab_Product_Line_Items_Sections;
		}
		interface tab_QUOTES extends DevKit.Controls.ITab {
			Section: tab_QUOTES_Sections;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface Tabs {
			Product_Line_Items: tab_Product_Line_Items;
			QUOTES: tab_QUOTES;
			Summary: tab_Summary;
		}
		interface Body {
			Tab: Tabs;
			ActionCards: DevKit.Controls.ActionCards;
			/** Type a value between 0 and 1,000,000,000,000 to indicate the lead's potential available budget. */
			BudgetAmount: DevKit.Controls.Money;
			/** Type notes about the company or organization associated with the opportunity. */
			CurrentSituation: DevKit.Controls.String;
			/** Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements. */
			CustomerNeed: DevKit.Controls.String;
			/** Type additional information to describe the opportunity, such as possible products to sell or past purchases from the customer. */
			Description: DevKit.Controls.String;
			/** Type the discount amount for the opportunity if the customer is eligible for special savings. */
			DiscountAmount: DevKit.Controls.Money;
			/** Type the discount rate that should be applied to the Product Totals field to include additional savings for the customer in the opportunity. */
			DiscountPercentage: DevKit.Controls.Decimal;
			/** Type the cost of freight or shipping for the products included in the opportunity for use in calculating the Total Amount field. */
			FreightAmount: DevKit.Controls.Money;
			/** Select whether the estimated revenue for the opportunity is calculated automatically based on the products entered or entered manually by a user. */
			IsRevenueSystemCalculated: DevKit.Controls.Boolean;
			/** Internal use only. */
			msdyn_OrderType: DevKit.Controls.OptionSet;
			/** Type a subject or descriptive name, such as the expected order or company name, for the opportunity. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Choose an account to connect this opportunity to, so that the relationship is visible in reports and analytics, and to provide a quick link to additional details, such as financial information and activities. */
			ParentAccountId: DevKit.Controls.Lookup;
			/** Choose a contact to connect this opportunity to, so that the relationship is visible in reports and analytics. */
			ParentContactId: DevKit.Controls.Lookup;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Controls.Lookup;
			/** Type notes about the proposed solution for the opportunity. */
			ProposedSolution: DevKit.Controls.String;
			/** Choose whether an individual or a committee will be involved in the  purchase process for the lead. */
			PurchaseProcess: DevKit.Controls.OptionSet;
			/** Choose how long the lead will likely take to make the purchase. */
			PurchaseTimeframe: DevKit.Controls.OptionSet;
			/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the opportunity. */
			TotalAmount: DevKit.Controls.Money;
			/** Shows the total product amount for the opportunity, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount of the opportunity. */
			TotalAmountLessFreight: DevKit.Controls.Money;
			/** Shows the sum of all existing and write-in products included on the opportunity, based on the specified price list and quantities. */
			TotalLineItemAmount: DevKit.Controls.Money;
			/** Shows the total of the Tax amounts specified on all products included in the opportunity, included in the Total Amount field calculation for the opportunity. */
			TotalTax: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			navActivities: DevKit.Controls.NavigationItem,
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navComp: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem,
			navDocument: DevKit.Controls.NavigationItem,
			navInvoices: DevKit.Controls.NavigationItem,
			navOrders: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			navRelationship: DevKit.Controls.NavigationItem
		}
		interface ProcessOpportunity_Sales_Process {
			/** Type a value between 0 and 1,000,000,000,000 to indicate the lead's potential available budget. */
			BudgetAmount: DevKit.Controls.Money;
			/** Select whether a final proposal has been completed for the opportunity. */
			CompleteFinalProposal: DevKit.Controls.Boolean;
			/** Select whether an internal review has been completed for this opportunity. */
			CompleteInternalReview: DevKit.Controls.Boolean;
			/** Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements. */
			CustomerNeed: DevKit.Controls.String;
			/** Select whether your notes include information about who makes the purchase decisions at the lead's company. */
			DecisionMaker: DevKit.Controls.Boolean;
			/** Type additional information to describe the opportunity, such as possible products to sell or past purchases from the customer. */
			Description: DevKit.Controls.String;
			/** Select whether a proposal has been developed for the opportunity. */
			DevelopProposal: DevKit.Controls.Boolean;
			/** Choose whether the sales team has recorded detailed notes on the proposals and the account's responses. */
			FileDebrief: DevKit.Controls.Boolean;
			/** Enter the date and time when the final decision of the opportunity was made. */
			FinalDecisionDate: DevKit.Controls.Date;
			/** Select whether information about competitors is included. */
			IdentifyCompetitors: DevKit.Controls.Boolean;
			/** Select whether the customer contacts for this opportunity have been identified. */
			IdentifyCustomerContacts: DevKit.Controls.Boolean;
			/** Choose whether you have recorded who will pursue the opportunity. */
			IdentifyPursuitTeam: DevKit.Controls.Boolean;
			/** Choose an account to connect this opportunity to, so that the relationship is visible in reports and analytics, and to provide a quick link to additional details, such as financial information and activities. */
			ParentAccountId: DevKit.Controls.Lookup;
			/** Choose a contact to connect this opportunity to, so that the relationship is visible in reports and analytics. */
			ParentContactId: DevKit.Controls.Lookup;
			/** Select whether the final proposal has been presented to the account. */
			PresentFinalProposal: DevKit.Controls.Boolean;
			/** Select whether a proposal for the opportunity has been presented to the account. */
			PresentProposal: DevKit.Controls.Boolean;
			/** Type notes about the proposed solution for the opportunity. */
			ProposedSolution: DevKit.Controls.String;
			/** Choose whether an individual or a committee will be involved in the  purchase process for the lead. */
			PurchaseProcess: DevKit.Controls.OptionSet;
			/** Choose how long the lead will likely take to make the purchase. */
			PurchaseTimeframe: DevKit.Controls.OptionSet;
			/** Select whether a thank you note has been sent to the account for considering the proposal. */
			SendThankYouNote: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
			Opportunity_Sales_Process: ProcessOpportunity_Sales_Process;
		}
		interface Grid {
			Stakeholders: DevKit.Controls.Grid;
			Pursuit_Team: DevKit.Controls.Grid;
			Competitors: DevKit.Controls.Grid;
			opportunityproductsGrid: DevKit.Controls.Grid;
			quote: DevKit.Controls.Grid;
		}
	}
	class FormOpportunity_AI_for_Sales extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Opportunity_AI_for_Sales
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Opportunity_AI_for_Sales */
		Body: DevKit.FormOpportunity_AI_for_Sales.Body;
		/** The Header section of form Opportunity_AI_for_Sales */
		Header: DevKit.FormOpportunity_AI_for_Sales.Header;
		/** The Navigation of form Opportunity_AI_for_Sales */
		Navigation: DevKit.FormOpportunity_AI_for_Sales.Navigation;
		/** The Process of form Opportunity_AI_for_Sales */
		Process: DevKit.FormOpportunity_AI_for_Sales.Process;
		/** The Grid of form Opportunity_AI_for_Sales */
		Grid: DevKit.FormOpportunity_AI_for_Sales.Grid;
	}
	namespace FormOpportunity_Field_Service_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the expected closing date of the opportunity to help make accurate revenue forecasts. */
			EstimatedCloseDate: DevKit.Controls.Date;
			/** Type the estimated revenue amount to indicate the potential sale or value of the opportunity for revenue forecasting. This field can be either system-populated or editable based on the selection in the Revenue field. */
			EstimatedValue: DevKit.Controls.Money;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the opportunity's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_opportunity_line_items_Sections {
			opportunityproducts: DevKit.Controls.Section;
			ServiceMaintenanceLines: DevKit.Controls.Section;
			totals: DevKit.Controls.Section;
		}
		interface tab_QUOTES_Sections {
			opportunityquotes: DevKit.Controls.Section;
			QUOTES_section_2: DevKit.Controls.Section;
		}
		interface tab_Summary_Sections {
			Notes_pane: DevKit.Controls.Section;
			Opportunity_details: DevKit.Controls.Section;
			opportunity_information: DevKit.Controls.Section;
			Social_pane: DevKit.Controls.Section;
		}
		interface tab_tab_4_Sections {
			tab_4_section_2: DevKit.Controls.Section;
		}
		interface tab_opportunity_line_items extends DevKit.Controls.ITab {
			Section: tab_opportunity_line_items_Sections;
		}
		interface tab_QUOTES extends DevKit.Controls.ITab {
			Section: tab_QUOTES_Sections;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface Tabs {
			opportunity_line_items: tab_opportunity_line_items;
			QUOTES: tab_QUOTES;
			Summary: tab_Summary;
			tab_4: tab_tab_4;
		}
		interface Body {
			Tab: Tabs;
			/** Type a value between 0 and 1,000,000,000,000 to indicate the lead's potential available budget. */
			BudgetAmount: DevKit.Controls.Money;
			/** Type a number from 0 to 100 that represents the likelihood of closing the opportunity. This can aid the sales team in their efforts to convert the opportunity in a sale. */
			CloseProbability: DevKit.Controls.Integer;
			/** Type notes about the company or organization associated with the opportunity. */
			CurrentSituation: DevKit.Controls.String;
			/** Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements. */
			CustomerNeed: DevKit.Controls.String;
			/** Type additional information to describe the opportunity, such as possible products to sell or past purchases from the customer. */
			Description: DevKit.Controls.String;
			/** Type the discount amount for the opportunity if the customer is eligible for special savings. */
			DiscountAmount: DevKit.Controls.Money;
			/** Type the discount rate that should be applied to the Product Totals field to include additional savings for the customer in the opportunity. */
			DiscountPercentage: DevKit.Controls.Decimal;
			/** Type the cost of freight or shipping for the products included in the opportunity for use in calculating the Total Amount field. */
			FreightAmount: DevKit.Controls.Money;
			/** Select whether the estimated revenue for the opportunity is calculated automatically based on the products entered or entered manually by a user. */
			IsRevenueSystemCalculated: DevKit.Controls.Boolean;
			/** Internal use only. */
			msdyn_OrderType: DevKit.Controls.OptionSet;
			/** Unique identifier for Work Order Type associated with Opportunity. */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name, such as the expected order or company name, for the opportunity. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Select the expected value or priority of the opportunity based on revenue, customer status, or closing probability. */
			OpportunityRatingCode: DevKit.Controls.OptionSet;
			/** Choose an account to connect this opportunity to, so that the relationship is visible in reports and analytics, and to provide a quick link to additional details, such as financial information and activities. */
			ParentAccountId: DevKit.Controls.Lookup;
			/** Choose a contact to connect this opportunity to, so that the relationship is visible in reports and analytics. */
			ParentContactId: DevKit.Controls.Lookup;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Controls.Lookup;
			/** Type notes about the proposed solution for the opportunity. */
			ProposedSolution: DevKit.Controls.String;
			/** Choose whether an individual or a committee will be involved in the  purchase process for the lead. */
			PurchaseProcess: DevKit.Controls.OptionSet;
			/** Choose how long the lead will likely take to make the purchase. */
			PurchaseTimeframe: DevKit.Controls.OptionSet;
			/** Select the sales process stage for the opportunity to indicate the probability of closing the opportunity. */
			SalesStageCode: DevKit.Controls.OptionSet;
			/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the opportunity. */
			TotalAmount: DevKit.Controls.Money;
			/** Shows the total product amount for the opportunity, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount of the opportunity. */
			TotalAmountLessFreight: DevKit.Controls.Money;
			/** Shows the sum of all existing and write-in products included on the opportunity, based on the specified price list and quantities. */
			TotalLineItemAmount: DevKit.Controls.Money;
			/** Shows the total of the Tax amounts specified on all products included in the opportunity, included in the Total Amount field calculation for the opportunity. */
			TotalTax: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_opportunity_msdyn_workorder: DevKit.Controls.NavigationItem,
			navActivities: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navComp: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem,
			navDocument: DevKit.Controls.NavigationItem,
			navInvoices: DevKit.Controls.NavigationItem,
			navOrders: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			navRelationship: DevKit.Controls.NavigationItem
		}
		interface ProcessOpportunity_Sales_Process {
			/** Type a value between 0 and 1,000,000,000,000 to indicate the lead's potential available budget. */
			BudgetAmount: DevKit.Controls.Money;
			/** Select whether a final proposal has been completed for the opportunity. */
			CompleteFinalProposal: DevKit.Controls.Boolean;
			/** Select whether an internal review has been completed for this opportunity. */
			CompleteInternalReview: DevKit.Controls.Boolean;
			/** Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements. */
			CustomerNeed: DevKit.Controls.String;
			/** Select whether your notes include information about who makes the purchase decisions at the lead's company. */
			DecisionMaker: DevKit.Controls.Boolean;
			/** Type additional information to describe the opportunity, such as possible products to sell or past purchases from the customer. */
			Description: DevKit.Controls.String;
			/** Select whether a proposal has been developed for the opportunity. */
			DevelopProposal: DevKit.Controls.Boolean;
			/** Choose whether the sales team has recorded detailed notes on the proposals and the account's responses. */
			FileDebrief: DevKit.Controls.Boolean;
			/** Enter the date and time when the final decision of the opportunity was made. */
			FinalDecisionDate: DevKit.Controls.Date;
			/** Select whether information about competitors is included. */
			IdentifyCompetitors: DevKit.Controls.Boolean;
			/** Select whether the customer contacts for this opportunity have been identified. */
			IdentifyCustomerContacts: DevKit.Controls.Boolean;
			/** Choose whether you have recorded who will pursue the opportunity. */
			IdentifyPursuitTeam: DevKit.Controls.Boolean;
			/** Choose an account to connect this opportunity to, so that the relationship is visible in reports and analytics, and to provide a quick link to additional details, such as financial information and activities. */
			ParentAccountId: DevKit.Controls.Lookup;
			/** Choose a contact to connect this opportunity to, so that the relationship is visible in reports and analytics. */
			ParentContactId: DevKit.Controls.Lookup;
			/** Select whether the final proposal has been presented to the account. */
			PresentFinalProposal: DevKit.Controls.Boolean;
			/** Select whether a proposal for the opportunity has been presented to the account. */
			PresentProposal: DevKit.Controls.Boolean;
			/** Type notes about the proposed solution for the opportunity. */
			ProposedSolution: DevKit.Controls.String;
			/** Choose whether an individual or a committee will be involved in the  purchase process for the lead. */
			PurchaseProcess: DevKit.Controls.OptionSet;
			/** Choose how long the lead will likely take to make the purchase. */
			PurchaseTimeframe: DevKit.Controls.OptionSet;
			/** Select whether a thank you note has been sent to the account for considering the proposal. */
			SendThankYouNote: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
			Opportunity_Sales_Process: ProcessOpportunity_Sales_Process;
		}
		interface Grid {
			Stakeholders: DevKit.Controls.Grid;
			Pursuit_Team: DevKit.Controls.Grid;
			Competitors: DevKit.Controls.Grid;
			opportunityproductsGrid: DevKit.Controls.Grid;
			OpportunityServicesGrid: DevKit.Controls.Grid;
			quote: DevKit.Controls.Grid;
		}
	}
	class FormOpportunity_Field_Service_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Opportunity_Field_Service_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Opportunity_Field_Service_Information */
		Body: DevKit.FormOpportunity_Field_Service_Information.Body;
		/** The Header section of form Opportunity_Field_Service_Information */
		Header: DevKit.FormOpportunity_Field_Service_Information.Header;
		/** The Navigation of form Opportunity_Field_Service_Information */
		Navigation: DevKit.FormOpportunity_Field_Service_Information.Navigation;
		/** The Process of form Opportunity_Field_Service_Information */
		Process: DevKit.FormOpportunity_Field_Service_Information.Process;
		/** The Grid of form Opportunity_Field_Service_Information */
		Grid: DevKit.FormOpportunity_Field_Service_Information.Grid;
	}
	namespace FormOpportunity_Project_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the expected closing date of the opportunity to help make accurate revenue forecasts. */
			EstimatedCloseDate: DevKit.Controls.Date;
			/** Type the estimated revenue amount to indicate the potential sale or value of the opportunity for revenue forecasting. This field can be either system-populated or editable based on the selection in the Revenue field. */
			EstimatedValue: DevKit.Controls.Money;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the opportunity's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_OpportunityLinesTab_Sections {
			OpportunityLinesSection: DevKit.Controls.Section;
			OpportunityLinesTab_section_3: DevKit.Controls.Section;
			totals: DevKit.Controls.Section;
		}
		interface tab_Product_Line_Items_Sections {
			DynamicProperties: DevKit.Controls.Section;
			opportunityproducts: DevKit.Controls.Section;
			suggestionsection: DevKit.Controls.Section;
		}
		interface tab_QUOTES_Sections {
			opportunityquotes: DevKit.Controls.Section;
		}
		interface tab_Summary_Sections {
			Notes_pane: DevKit.Controls.Section;
			Opportunity_details: DevKit.Controls.Section;
			opportunity_information: DevKit.Controls.Section;
			Social_pane: DevKit.Controls.Section;
		}
		interface tab_OpportunityLinesTab extends DevKit.Controls.ITab {
			Section: tab_OpportunityLinesTab_Sections;
		}
		interface tab_Product_Line_Items extends DevKit.Controls.ITab {
			Section: tab_Product_Line_Items_Sections;
		}
		interface tab_QUOTES extends DevKit.Controls.ITab {
			Section: tab_QUOTES_Sections;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface Tabs {
			OpportunityLinesTab: tab_OpportunityLinesTab;
			Product_Line_Items: tab_Product_Line_Items;
			QUOTES: tab_QUOTES;
			Summary: tab_Summary;
		}
		interface Body {
			Tab: Tabs;
			/** Type a value between 0 and 1,000,000,000,000 to indicate the lead's potential available budget. */
			BudgetAmount: DevKit.Controls.Money;
			/** Type a number from 0 to 100 that represents the likelihood of closing the opportunity. This can aid the sales team in their efforts to convert the opportunity in a sale. */
			CloseProbability: DevKit.Controls.Integer;
			/** Type notes about the company or organization associated with the opportunity. */
			CurrentSituation: DevKit.Controls.String;
			/** Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements. */
			CustomerNeed: DevKit.Controls.String;
			/** Type additional information to describe the opportunity, such as possible products to sell or past purchases from the customer. */
			Description: DevKit.Controls.String;
			/** Type the discount amount for the opportunity if the customer is eligible for special savings. */
			DiscountAmount: DevKit.Controls.Money;
			/** Type the discount rate that should be applied to the Product Totals field to include additional savings for the customer in the opportunity. */
			DiscountPercentage: DevKit.Controls.Decimal;
			/** Type the cost of freight or shipping for the products included in the opportunity for use in calculating the Total Amount field. */
			FreightAmount: DevKit.Controls.Money;
			/** Select whether the estimated revenue for the opportunity is calculated automatically based on the products entered or entered manually by a user. */
			IsRevenueSystemCalculated: DevKit.Controls.Boolean;
			/** The account manager responsible for the opportunity. */
			msdyn_AccountManagerId: DevKit.Controls.Lookup;
			/** The organizational unit in charge of the opportunity. */
			msdyn_ContractOrganizationalUnitId: DevKit.Controls.Lookup;
			/** Internal use only. */
			msdyn_OrderType: DevKit.Controls.OptionSet;
			/** Type a subject or descriptive name, such as the expected order or company name, for the opportunity. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Select the expected value or priority of the opportunity based on revenue, customer status, or closing probability. */
			OpportunityRatingCode: DevKit.Controls.OptionSet;
			/** Choose an account to connect this opportunity to, so that the relationship is visible in reports and analytics, and to provide a quick link to additional details, such as financial information and activities. */
			ParentAccountId: DevKit.Controls.Lookup;
			/** Choose a contact to connect this opportunity to, so that the relationship is visible in reports and analytics. */
			ParentContactId: DevKit.Controls.Lookup;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Controls.Lookup;
			/** Type notes about the proposed solution for the opportunity. */
			ProposedSolution: DevKit.Controls.String;
			/** Choose whether an individual or a committee will be involved in the  purchase process for the lead. */
			PurchaseProcess: DevKit.Controls.OptionSet;
			/** Choose how long the lead will likely take to make the purchase. */
			PurchaseTimeframe: DevKit.Controls.OptionSet;
			/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the opportunity. */
			TotalAmount: DevKit.Controls.Money;
			/** Shows the total product amount for the opportunity, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount of the opportunity. */
			TotalAmountLessFreight: DevKit.Controls.Money;
			/** Shows the sum of all existing and write-in products included on the opportunity, based on the specified price list and quantities. */
			TotalLineItemAmount: DevKit.Controls.Money;
			/** Shows the total of the Tax amounts specified on all products included in the opportunity, included in the Total Amount field calculation for the opportunity. */
			TotalTax: DevKit.Controls.Money;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_opportunity_msdyn_opportunitypricelist_Opportunity: DevKit.Controls.NavigationItem,
			navActivities: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navComp: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem,
			navInvoices: DevKit.Controls.NavigationItem,
			navOrders: DevKit.Controls.NavigationItem,
			navProducts: DevKit.Controls.NavigationItem,
			navRelationship: DevKit.Controls.NavigationItem
		}
		interface ProcessOpportunity_Sales_Process {
			/** Type a value between 0 and 1,000,000,000,000 to indicate the lead's potential available budget. */
			BudgetAmount: DevKit.Controls.Money;
			/** Select whether a final proposal has been completed for the opportunity. */
			CompleteFinalProposal: DevKit.Controls.Boolean;
			/** Select whether an internal review has been completed for this opportunity. */
			CompleteInternalReview: DevKit.Controls.Boolean;
			/** Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements. */
			CustomerNeed: DevKit.Controls.String;
			/** Select whether your notes include information about who makes the purchase decisions at the lead's company. */
			DecisionMaker: DevKit.Controls.Boolean;
			/** Type additional information to describe the opportunity, such as possible products to sell or past purchases from the customer. */
			Description: DevKit.Controls.String;
			/** Select whether a proposal has been developed for the opportunity. */
			DevelopProposal: DevKit.Controls.Boolean;
			/** Choose whether the sales team has recorded detailed notes on the proposals and the account's responses. */
			FileDebrief: DevKit.Controls.Boolean;
			/** Enter the date and time when the final decision of the opportunity was made. */
			FinalDecisionDate: DevKit.Controls.Date;
			/** Select whether information about competitors is included. */
			IdentifyCompetitors: DevKit.Controls.Boolean;
			/** Select whether the customer contacts for this opportunity have been identified. */
			IdentifyCustomerContacts: DevKit.Controls.Boolean;
			/** Choose whether you have recorded who will pursue the opportunity. */
			IdentifyPursuitTeam: DevKit.Controls.Boolean;
			/** Choose an account to connect this opportunity to, so that the relationship is visible in reports and analytics, and to provide a quick link to additional details, such as financial information and activities. */
			ParentAccountId: DevKit.Controls.Lookup;
			/** Choose a contact to connect this opportunity to, so that the relationship is visible in reports and analytics. */
			ParentContactId: DevKit.Controls.Lookup;
			/** Select whether the final proposal has been presented to the account. */
			PresentFinalProposal: DevKit.Controls.Boolean;
			/** Select whether a proposal for the opportunity has been presented to the account. */
			PresentProposal: DevKit.Controls.Boolean;
			/** Type notes about the proposed solution for the opportunity. */
			ProposedSolution: DevKit.Controls.String;
			/** Choose whether an individual or a committee will be involved in the  purchase process for the lead. */
			PurchaseProcess: DevKit.Controls.OptionSet;
			/** Choose how long the lead will likely take to make the purchase. */
			PurchaseTimeframe: DevKit.Controls.OptionSet;
			/** Select whether a thank you note has been sent to the account for considering the proposal. */
			SendThankYouNote: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
			Opportunity_Sales_Process: ProcessOpportunity_Sales_Process;
		}
		interface Grid {
			Stakeholders: DevKit.Controls.Grid;
			Pursuit_Team: DevKit.Controls.Grid;
			Competitors: DevKit.Controls.Grid;
			ProjectLinesGrid: DevKit.Controls.Grid;
			opportunityproductsGrid: DevKit.Controls.Grid;
			quote: DevKit.Controls.Grid;
		}
	}
	class FormOpportunity_Project_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Opportunity_Project_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Opportunity_Project_Information */
		Body: DevKit.FormOpportunity_Project_Information.Body;
		/** The Header section of form Opportunity_Project_Information */
		Header: DevKit.FormOpportunity_Project_Information.Header;
		/** The Navigation of form Opportunity_Project_Information */
		Navigation: DevKit.FormOpportunity_Project_Information.Navigation;
		/** The Process of form Opportunity_Project_Information */
		Process: DevKit.FormOpportunity_Project_Information.Process;
		/** The Grid of form Opportunity_Project_Information */
		Grid: DevKit.FormOpportunity_Project_Information.Grid;
	}
	namespace FormOpportunity {
		interface tab_newOpportunity_Sections {
			quickOpportunity_column1: DevKit.Controls.Section;
			quickOpportunity_column2: DevKit.Controls.Section;
			quickOpportunity_column3: DevKit.Controls.Section;
		}
		interface tab_newOpportunity extends DevKit.Controls.ITab {
			Section: tab_newOpportunity_Sections;
		}
		interface Tabs {
			newOpportunity: tab_newOpportunity;
		}
		interface Body {
			Tab: Tabs;
			/** Type a value between 0 and 1,000,000,000,000 to indicate the lead's potential available budget. */
			BudgetAmount: DevKit.Controls.Money;
			/** Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements. */
			CustomerNeed: DevKit.Controls.String;
			/** Enter the expected closing date of the opportunity to help make accurate revenue forecasts. */
			EstimatedCloseDate: DevKit.Controls.Date;
			/** Type the estimated revenue amount to indicate the potential sale or value of the opportunity for revenue forecasting. This field can be either system-populated or editable based on the selection in the Revenue field. */
			EstimatedValue: DevKit.Controls.Money;
			/** The organizational unit in charge of the opportunity. */
			msdyn_ContractOrganizationalUnitId: DevKit.Controls.Lookup;
			/** Internal use only. */
			msdyn_OrderType: DevKit.Controls.OptionSet;
			/** Type a subject or descriptive name, such as the expected order or company name, for the opportunity. */
			Name: DevKit.Controls.String;
			/** Choose an account to connect this opportunity to, so that the relationship is visible in reports and analytics, and to provide a quick link to additional details, such as financial information and activities. */
			ParentAccountId: DevKit.Controls.Lookup;
			/** Choose a contact to connect this opportunity to, so that the relationship is visible in reports and analytics. */
			ParentContactId: DevKit.Controls.Lookup;
		}
	}
	class FormOpportunity extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Opportunity
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Opportunity */
		Body: DevKit.FormOpportunity.Body;
	}
}
declare namespace OptionSet {
	namespace Opportunity {
		enum BudgetStatus {
			/** 2 */
			Can_Buy,
			/** 1 */
			May_Buy,
			/** 0 */
			No_Committed_Budget,
			/** 3 */
			Will_Buy
		}
		enum InitialCommunication {
			/** 0 */
			Contacted,
			/** 1 */
			Not_Contacted
		}
		enum msdyn_forecastcategory {
			/** 100000002 */
			Best_case,
			/** 100000003 */
			Committed,
			/** 100000006 */
			Lost,
			/** 100000004 */
			Omitted,
			/** 100000001 */
			Pipeline,
			/** 100000005 */
			Won
		}
		enum msdyn_OrderType {
			/** 192350000 */
			Item_based,
			/** 690970002 */
			Service_Maintenance_Based,
			/** 192350001 */
			Work_based
		}
		enum Need {
			/** 2 */
			Good_to_have,
			/** 0 */
			Must_have,
			/** 3 */
			No_need,
			/** 1 */
			Should_have
		}
		enum OpportunityRatingCode {
			/** 3 */
			Cold,
			/** 1 */
			Hot,
			/** 2 */
			Warm
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
		enum PurchaseProcess {
			/** 1 */
			Committee,
			/** 0 */
			Individual,
			/** 2 */
			Unknown
		}
		enum PurchaseTimeframe {
			/** 0 */
			Immediate,
			/** 2 */
			Next_Quarter,
			/** 1 */
			This_Quarter,
			/** 3 */
			This_Year,
			/** 4 */
			Unknown
		}
		enum SalesStage {
			/** 3 */
			Close,
			/** 1 */
			Develop,
			/** 2 */
			Propose,
			/** 0 */
			Qualify
		}
		enum SalesStageCode {
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
			/** 2 */
			Lost,
			/** 0 */
			Open,
			/** 1 */
			Won
		}
		enum StatusCode {
			/** 4 */
			Canceled,
			/** 1 */
			In_Progress,
			/** 2 */
			On_Hold,
			/** 5 */
			Out_Sold,
			/** 3 */
			Won
		}
		enum TimeLine {
			/** 0 */
			Immediate,
			/** 2 */
			Next_Quarter,
			/** 4 */
			Not_known,
			/** 1 */
			This_Quarter,
			/** 3 */
			This_Year
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
//{'JsForm':['AI for Sales','Field Service Information','Opportunity','Project Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}