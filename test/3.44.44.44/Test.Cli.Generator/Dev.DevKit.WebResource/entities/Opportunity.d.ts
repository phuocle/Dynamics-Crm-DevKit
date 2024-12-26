//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
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
			lead_qualifying_opportunity: DevKit.Controls.NavigationItem,
			lk_leadtoopportunitysalesprocess_opportunityid: DevKit.Controls.NavigationItem,
			lk_opportunitysalesprocess_opportunityid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_salescopilotinsight_opportunity_msdyn_targetentityid: DevKit.Controls.NavigationItem,
			msdyn_opportunity_dailyopportunitykpiitem_entityid: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_mostcontacted_regardingObjectId: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_mostcontactedby_regardingObjectId: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_opportunitykpiitem_opportunityid: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_salesroutingrun_targetobject: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_timespent_opplookup: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_workorder: DevKit.Controls.NavigationItem,
			msdyn_playbookinstance_opportunity: DevKit.Controls.NavigationItem,
			msdyn_sabackupdiagnostic_opportunity_msdyn_target: DevKit.Controls.NavigationItem,
			msdyn_salesroutingdiagnostic_opportunity_msdyn_target: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_opportunity_qualifiedrecord: DevKit.Controls.NavigationItem,
			msdyn_sequencetarget_opportunity_msdyn_target: DevKit.Controls.NavigationItem,
			msdyncrm_opportunity_msdyncrm_leadtoopportunity: DevKit.Controls.NavigationItem,
			opportunity_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			opportunity_adx_portalcomments: DevKit.Controls.NavigationItem,
			Opportunity_Appointments: DevKit.Controls.NavigationItem,
			opportunity_customer_opportunity_roles: DevKit.Controls.NavigationItem,
			Opportunity_Emails: DevKit.Controls.NavigationItem,
			opportunity_invoices: DevKit.Controls.NavigationItem,
			opportunity_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			opportunity_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			opportunity_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			opportunity_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			opportunity_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			opportunity_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			opportunity_msfp_alerts: DevKit.Controls.NavigationItem,
			opportunity_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			opportunity_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			Opportunity_OpportunityClose: DevKit.Controls.NavigationItem,
			opportunity_OpportunityCloses: DevKit.Controls.NavigationItem,
			opportunity_OrderCloses: DevKit.Controls.NavigationItem,
			Opportunity_Phonecalls: DevKit.Controls.NavigationItem,
			opportunity_Posts: DevKit.Controls.NavigationItem,
			opportunity_QuoteCloses: DevKit.Controls.NavigationItem,
			opportunity_quotes: DevKit.Controls.NavigationItem,
			opportunity_sales_orders: DevKit.Controls.NavigationItem,
			Opportunity_ServiceAppointments: DevKit.Controls.NavigationItem,
			Opportunity_Tasks: DevKit.Controls.NavigationItem,
			opportunity_Teams: DevKit.Controls.NavigationItem,
			product_opportunities: DevKit.Controls.NavigationItem
		}
		interface ProcessLead_to_Opportunity_Sales_Process {
			/** Select whether a final proposal has been completed for the opportunity. */
			CompleteFinalProposal: DevKit.Controls.Boolean;
			/** Select whether an internal review has been completed for this opportunity. */
			CompleteInternalReview: DevKit.Controls.Boolean;
			/** Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements. */
			CustomerNeed: DevKit.Controls.String;
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
			/** Select whether the final proposal has been presented to the account. */
			PresentFinalProposal: DevKit.Controls.Boolean;
			/** Select whether a proposal for the opportunity has been presented to the account. */
			PresentProposal: DevKit.Controls.Boolean;
			/** Type notes about the proposed solution for the opportunity. */
			ProposedSolution: DevKit.Controls.String;
			/** Select whether a thank you note has been sent to the account for considering the proposal. */
			SendThankYouNote: DevKit.Controls.Boolean;
		}
		interface ProcessSales_Process {
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
			Lead_to_Opportunity_Sales_Process: ProcessLead_to_Opportunity_Sales_Process;
			Sales_Process: ProcessSales_Process;
		}
		interface Grid {
			Competitors: DevKit.Controls.Grid;
			opportunityproductsGrid: DevKit.Controls.Grid;
			OpportunityServicesGrid: DevKit.Controls.Grid;
			Pursuit_Team: DevKit.Controls.Grid;
			quote: DevKit.Controls.Grid;
			Stakeholders: DevKit.Controls.Grid;
		}
	}
	class FormOpportunity_Field_Service_Information extends DevKit.IForm {
		/**
		* Field Service Information [Main Form]
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
		/** The SidePanes of form Opportunity_Field_Service_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormLead_qualification_opportunity_form {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_Summary_Sections {
			Opportunity_details: DevKit.Controls.Section;
			opportunity_information: DevKit.Controls.Section;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface Tabs {
			Summary: tab_Summary;
		}
		interface Body {
			Tab: Tabs;
			/** Type a value between 0 and 1,000,000,000,000 to indicate the lead's potential available budget. */
			BudgetAmount: DevKit.Controls.Money;
			/** Type notes about the company or organization associated with the opportunity. */
			CurrentSituation: DevKit.Controls.String;
			/** Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements. */
			CustomerNeed: DevKit.Controls.String;
			/** Type additional information to describe the opportunity, such as possible products to sell or past purchases from the customer. */
			Description: DevKit.Controls.String;
			/** Enter the expected closing date of the opportunity to help make accurate revenue forecasts. */
			EstimatedCloseDate: DevKit.Controls.Date;
			/** Categories used for forecasting. */
			msdyn_forecastcategory: DevKit.Controls.OptionSet;
			/** Type a subject or descriptive name, such as the expected order or company name, for the opportunity. */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Type notes about the proposed solution for the opportunity. */
			ProposedSolution: DevKit.Controls.String;
			/** Choose whether an individual or a committee will be involved in the  purchase process for the lead. */
			PurchaseProcess: DevKit.Controls.OptionSet;
			/** Choose how long the lead will likely take to make the purchase. */
			PurchaseTimeframe: DevKit.Controls.OptionSet;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			lead_qualifying_opportunity: DevKit.Controls.NavigationItem,
			lk_leadtoopportunitysalesprocess_opportunityid: DevKit.Controls.NavigationItem,
			lk_opportunitysalesprocess_opportunityid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_salescopilotinsight_opportunity_msdyn_targetentityid: DevKit.Controls.NavigationItem,
			msdyn_opportunity_dailyopportunitykpiitem_entityid: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_mostcontacted_regardingObjectId: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_mostcontactedby_regardingObjectId: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_opportunitykpiitem_opportunityid: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_salesroutingrun_targetobject: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_timespent_opplookup: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_workorder: DevKit.Controls.NavigationItem,
			msdyn_playbookinstance_opportunity: DevKit.Controls.NavigationItem,
			msdyn_sabackupdiagnostic_opportunity_msdyn_target: DevKit.Controls.NavigationItem,
			msdyn_salesroutingdiagnostic_opportunity_msdyn_target: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_opportunity_qualifiedrecord: DevKit.Controls.NavigationItem,
			msdyn_sequencetarget_opportunity_msdyn_target: DevKit.Controls.NavigationItem,
			msdyncrm_opportunity_msdyncrm_leadtoopportunity: DevKit.Controls.NavigationItem,
			opportunity_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			opportunity_adx_portalcomments: DevKit.Controls.NavigationItem,
			Opportunity_Appointments: DevKit.Controls.NavigationItem,
			opportunity_customer_opportunity_roles: DevKit.Controls.NavigationItem,
			Opportunity_Emails: DevKit.Controls.NavigationItem,
			opportunity_invoices: DevKit.Controls.NavigationItem,
			opportunity_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			opportunity_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			opportunity_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			opportunity_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			opportunity_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			opportunity_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			opportunity_msfp_alerts: DevKit.Controls.NavigationItem,
			opportunity_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			opportunity_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			Opportunity_OpportunityClose: DevKit.Controls.NavigationItem,
			opportunity_OpportunityCloses: DevKit.Controls.NavigationItem,
			opportunity_OrderCloses: DevKit.Controls.NavigationItem,
			Opportunity_Phonecalls: DevKit.Controls.NavigationItem,
			opportunity_Posts: DevKit.Controls.NavigationItem,
			opportunity_QuoteCloses: DevKit.Controls.NavigationItem,
			opportunity_quotes: DevKit.Controls.NavigationItem,
			opportunity_sales_orders: DevKit.Controls.NavigationItem,
			Opportunity_ServiceAppointments: DevKit.Controls.NavigationItem,
			Opportunity_Tasks: DevKit.Controls.NavigationItem,
			opportunity_Teams: DevKit.Controls.NavigationItem,
			product_opportunities: DevKit.Controls.NavigationItem
		}
		interface ProcessLead_to_Opportunity_Sales_Process {
			/** Select whether a final proposal has been completed for the opportunity. */
			CompleteFinalProposal: DevKit.Controls.Boolean;
			/** Select whether an internal review has been completed for this opportunity. */
			CompleteInternalReview: DevKit.Controls.Boolean;
			/** Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements. */
			CustomerNeed: DevKit.Controls.String;
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
			/** Select whether the final proposal has been presented to the account. */
			PresentFinalProposal: DevKit.Controls.Boolean;
			/** Select whether a proposal for the opportunity has been presented to the account. */
			PresentProposal: DevKit.Controls.Boolean;
			/** Type notes about the proposed solution for the opportunity. */
			ProposedSolution: DevKit.Controls.String;
			/** Select whether a thank you note has been sent to the account for considering the proposal. */
			SendThankYouNote: DevKit.Controls.Boolean;
		}
		interface ProcessSales_Process {
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
			Lead_to_Opportunity_Sales_Process: ProcessLead_to_Opportunity_Sales_Process;
			Sales_Process: ProcessSales_Process;
		}
	}
	class FormLead_qualification_opportunity_form extends DevKit.IForm {
		/**
		* Lead qualification opportunity form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Lead_qualification_opportunity_form */
		Body: DevKit.FormLead_qualification_opportunity_form.Body;
		/** The Header section of form Lead_qualification_opportunity_form */
		Header: DevKit.FormLead_qualification_opportunity_form.Header;
		/** The Navigation of form Lead_qualification_opportunity_form */
		Navigation: DevKit.FormLead_qualification_opportunity_form.Navigation;
		/** The Process of form Lead_qualification_opportunity_form */
		Process: DevKit.FormLead_qualification_opportunity_form.Process;
		/** The SidePanes of form Lead_qualification_opportunity_form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormOpportunity {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the expected closing date of the opportunity to help make accurate revenue forecasts. */
			EstimatedCloseDate: DevKit.Controls.Date;
			/** Type the estimated revenue amount to indicate the potential sale or value of the opportunity for revenue forecasting. This field can be either system-populated or editable based on the selection in the Revenue field. */
			EstimatedValue: DevKit.Controls.Money;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose an account to connect this opportunity to, so that the relationship is visible in reports and analytics, and to provide a quick link to additional details, such as financial information and activities. */
			ParentAccountId: DevKit.Controls.Lookup;
		}
		interface tab_documents_sharepoint_Sections {
			documents_sharepoint_section: DevKit.Controls.Section;
		}
		interface tab_FieldService_Sections {
			tab_4_section_1: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
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
			Competitors_Section: DevKit.Controls.Section;
			Notes_pane: DevKit.Controls.Section;
			Opportunity_details: DevKit.Controls.Section;
			opportunity_information: DevKit.Controls.Section;
			Record_Summary_Widget: DevKit.Controls.Section;
			Social_pane: DevKit.Controls.Section;
			Summary_CadenceWidget: DevKit.Controls.Section;
			Summary_section_6: DevKit.Controls.Section;
		}
		interface tab_documents_sharepoint extends DevKit.Controls.ITab {
			Section: tab_documents_sharepoint_Sections;
		}
		interface tab_FieldService extends DevKit.Controls.ITab {
			Section: tab_FieldService_Sections;
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
			documents_sharepoint: tab_documents_sharepoint;
			FieldService: tab_FieldService;
			Product_Line_Items: tab_Product_Line_Items;
			QUOTES: tab_QUOTES;
			Summary: tab_Summary;
		}
		interface Body {
			Tab: Tabs;
			ActionCards: DevKit.Controls.ActionCards;
			/** Type a value between 0 and 1,000,000,000,000 to indicate the lead's potential available budget. */
			BudgetAmount: DevKit.Controls.Money;
			CadenceWidgetControl: DevKit.Controls.ActionCards;
			CopilotSummaryWidget: DevKit.Controls.ActionCards;
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
			/** Categories used for forecasting. */
			msdyn_forecastcategory: DevKit.Controls.OptionSet;
			/** Internal use only. */
			msdyn_OrderType: DevKit.Controls.OptionSet;
			/** Unique identifier for Work Order Type associated with Opportunity. */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name, such as the expected order or company name, for the opportunity. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
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
			Pursuit_Team: DevKit.Controls.ActionCards;
			Stakeholders: DevKit.Controls.ActionCards;
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
			lead_qualifying_opportunity: DevKit.Controls.NavigationItem,
			lk_leadtoopportunitysalesprocess_opportunityid: DevKit.Controls.NavigationItem,
			lk_opportunitysalesprocess_opportunityid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_salescopilotinsight_opportunity_msdyn_targetentityid: DevKit.Controls.NavigationItem,
			msdyn_opportunity_dailyopportunitykpiitem_entityid: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_mostcontacted_regardingObjectId: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_mostcontactedby_regardingObjectId: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_opportunitykpiitem_opportunityid: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_salesroutingrun_targetobject: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_timespent_opplookup: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_workorder: DevKit.Controls.NavigationItem,
			msdyn_playbookinstance_opportunity: DevKit.Controls.NavigationItem,
			msdyn_sabackupdiagnostic_opportunity_msdyn_target: DevKit.Controls.NavigationItem,
			msdyn_salesroutingdiagnostic_opportunity_msdyn_target: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_opportunity_qualifiedrecord: DevKit.Controls.NavigationItem,
			msdyn_sequencetarget_opportunity_msdyn_target: DevKit.Controls.NavigationItem,
			msdyncrm_opportunity_msdyncrm_leadtoopportunity: DevKit.Controls.NavigationItem,
			opportunity_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			opportunity_adx_portalcomments: DevKit.Controls.NavigationItem,
			Opportunity_Appointments: DevKit.Controls.NavigationItem,
			opportunity_customer_opportunity_roles: DevKit.Controls.NavigationItem,
			Opportunity_Emails: DevKit.Controls.NavigationItem,
			opportunity_invoices: DevKit.Controls.NavigationItem,
			opportunity_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			opportunity_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			opportunity_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			opportunity_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			opportunity_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			opportunity_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			opportunity_msfp_alerts: DevKit.Controls.NavigationItem,
			opportunity_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			opportunity_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			Opportunity_OpportunityClose: DevKit.Controls.NavigationItem,
			opportunity_OpportunityCloses: DevKit.Controls.NavigationItem,
			opportunity_OrderCloses: DevKit.Controls.NavigationItem,
			Opportunity_Phonecalls: DevKit.Controls.NavigationItem,
			opportunity_Posts: DevKit.Controls.NavigationItem,
			opportunity_QuoteCloses: DevKit.Controls.NavigationItem,
			opportunity_quotes: DevKit.Controls.NavigationItem,
			opportunity_sales_orders: DevKit.Controls.NavigationItem,
			Opportunity_ServiceAppointments: DevKit.Controls.NavigationItem,
			Opportunity_Tasks: DevKit.Controls.NavigationItem,
			opportunity_Teams: DevKit.Controls.NavigationItem,
			product_opportunities: DevKit.Controls.NavigationItem
		}
		interface ProcessLead_to_Opportunity_Sales_Process {
			/** Select whether a final proposal has been completed for the opportunity. */
			CompleteFinalProposal: DevKit.Controls.Boolean;
			/** Select whether an internal review has been completed for this opportunity. */
			CompleteInternalReview: DevKit.Controls.Boolean;
			/** Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements. */
			CustomerNeed: DevKit.Controls.String;
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
			/** Select whether the final proposal has been presented to the account. */
			PresentFinalProposal: DevKit.Controls.Boolean;
			/** Select whether a proposal for the opportunity has been presented to the account. */
			PresentProposal: DevKit.Controls.Boolean;
			/** Type notes about the proposed solution for the opportunity. */
			ProposedSolution: DevKit.Controls.String;
			/** Select whether a thank you note has been sent to the account for considering the proposal. */
			SendThankYouNote: DevKit.Controls.Boolean;
		}
		interface ProcessSales_Process {
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
			Lead_to_Opportunity_Sales_Process: ProcessLead_to_Opportunity_Sales_Process;
			Sales_Process: ProcessSales_Process;
		}
		interface Grid {
			Competitors: DevKit.Controls.Grid;
			DocumentsSubGrid: DevKit.Controls.Grid;
			opportunityproductsGrid: DevKit.Controls.Grid;
			quote: DevKit.Controls.Grid;
		}
	}
	class FormOpportunity extends DevKit.IForm {
		/**
		* Opportunity [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Opportunity */
		Body: DevKit.FormOpportunity.Body;
		/** The Header section of form Opportunity */
		Header: DevKit.FormOpportunity.Header;
		/** The Navigation of form Opportunity */
		Navigation: DevKit.FormOpportunity.Navigation;
		/** The Process of form Opportunity */
		Process: DevKit.FormOpportunity.Process;
		/** The Grid of form Opportunity */
		Grid: DevKit.FormOpportunity.Grid;
		/** The SidePanes of form Opportunity */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormOpportunity_Sales_Insights {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the expected closing date of the opportunity to help make accurate revenue forecasts. */
			EstimatedCloseDate: DevKit.Controls.Date;
			/** Type the estimated revenue amount to indicate the potential sale or value of the opportunity for revenue forecasting. This field can be either system-populated or editable based on the selection in the Revenue field. */
			EstimatedValue: DevKit.Controls.Money;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose an account to connect this opportunity to, so that the relationship is visible in reports and analytics, and to provide a quick link to additional details, such as financial information and activities. */
			ParentAccountId: DevKit.Controls.Lookup;
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
		interface tab_RAV2_Sections {
			RAV2_section_1: DevKit.Controls.Section;
		}
		interface tab_RELATIONSHIP_ANALYTICS_TAB_Sections {
			Activity_Analysis_section_2: DevKit.Controls.Section;
		}
		interface tab_Summary_Sections {
			Notes_pane: DevKit.Controls.Section;
			Opportunity_details: DevKit.Controls.Section;
			opportunity_information: DevKit.Controls.Section;
			PredictiveScoreSection: DevKit.Controls.Section;
			Social_pane: DevKit.Controls.Section;
			Summary_CadenceWidget: DevKit.Controls.Section;
			Summary_section_6: DevKit.Controls.Section;
			Summary_section_7: DevKit.Controls.Section;
		}
		interface tab_Product_Line_Items extends DevKit.Controls.ITab {
			Section: tab_Product_Line_Items_Sections;
		}
		interface tab_QUOTES extends DevKit.Controls.ITab {
			Section: tab_QUOTES_Sections;
		}
		interface tab_RAV2 extends DevKit.Controls.ITab {
			Section: tab_RAV2_Sections;
		}
		interface tab_RELATIONSHIP_ANALYTICS_TAB extends DevKit.Controls.ITab {
			Section: tab_RELATIONSHIP_ANALYTICS_TAB_Sections;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface Tabs {
			Product_Line_Items: tab_Product_Line_Items;
			QUOTES: tab_QUOTES;
			RAV2: tab_RAV2;
			RELATIONSHIP_ANALYTICS_TAB: tab_RELATIONSHIP_ANALYTICS_TAB;
			Summary: tab_Summary;
		}
		interface Body {
			Tab: Tabs;
			ActionCards: DevKit.Controls.ActionCards;
			/** Type a value between 0 and 1,000,000,000,000 to indicate the lead's potential available budget. */
			BudgetAmount: DevKit.Controls.Money;
			CadenceWidgetControl: DevKit.Controls.ActionCards;
			cc_1626253475424: DevKit.Controls.ActionCards;
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
			Healthwidget: DevKit.Controls.ActionCards;
			/** Select whether the estimated revenue for the opportunity is calculated automatically based on the products entered or entered manually by a user. */
			IsRevenueSystemCalculated: DevKit.Controls.Boolean;
			/** Type a subject or descriptive name, such as the expected order or company name, for the opportunity. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
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
			RICONTAINER_CHARTS: DevKit.Controls.ActionCards;
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
			lead_qualifying_opportunity: DevKit.Controls.NavigationItem,
			lk_leadtoopportunitysalesprocess_opportunityid: DevKit.Controls.NavigationItem,
			lk_opportunitysalesprocess_opportunityid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_salescopilotinsight_opportunity_msdyn_targetentityid: DevKit.Controls.NavigationItem,
			msdyn_opportunity_dailyopportunitykpiitem_entityid: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_mostcontacted_regardingObjectId: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_mostcontactedby_regardingObjectId: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_opportunitykpiitem_opportunityid: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_salesroutingrun_targetobject: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_timespent_opplookup: DevKit.Controls.NavigationItem,
			msdyn_opportunity_msdyn_workorder: DevKit.Controls.NavigationItem,
			msdyn_playbookinstance_opportunity: DevKit.Controls.NavigationItem,
			msdyn_sabackupdiagnostic_opportunity_msdyn_target: DevKit.Controls.NavigationItem,
			msdyn_salesroutingdiagnostic_opportunity_msdyn_target: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_opportunity_qualifiedrecord: DevKit.Controls.NavigationItem,
			msdyn_sequencetarget_opportunity_msdyn_target: DevKit.Controls.NavigationItem,
			msdyncrm_opportunity_msdyncrm_leadtoopportunity: DevKit.Controls.NavigationItem,
			opportunity_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			opportunity_adx_portalcomments: DevKit.Controls.NavigationItem,
			Opportunity_Appointments: DevKit.Controls.NavigationItem,
			opportunity_customer_opportunity_roles: DevKit.Controls.NavigationItem,
			Opportunity_Emails: DevKit.Controls.NavigationItem,
			opportunity_invoices: DevKit.Controls.NavigationItem,
			opportunity_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			opportunity_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			opportunity_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			opportunity_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			opportunity_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			opportunity_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			opportunity_msfp_alerts: DevKit.Controls.NavigationItem,
			opportunity_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			opportunity_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			Opportunity_OpportunityClose: DevKit.Controls.NavigationItem,
			opportunity_OpportunityCloses: DevKit.Controls.NavigationItem,
			opportunity_OrderCloses: DevKit.Controls.NavigationItem,
			Opportunity_Phonecalls: DevKit.Controls.NavigationItem,
			opportunity_Posts: DevKit.Controls.NavigationItem,
			opportunity_QuoteCloses: DevKit.Controls.NavigationItem,
			opportunity_quotes: DevKit.Controls.NavigationItem,
			opportunity_sales_orders: DevKit.Controls.NavigationItem,
			Opportunity_ServiceAppointments: DevKit.Controls.NavigationItem,
			Opportunity_Tasks: DevKit.Controls.NavigationItem,
			opportunity_Teams: DevKit.Controls.NavigationItem,
			product_opportunities: DevKit.Controls.NavigationItem
		}
		interface ProcessLead_to_Opportunity_Sales_Process {
			/** Select whether a final proposal has been completed for the opportunity. */
			CompleteFinalProposal: DevKit.Controls.Boolean;
			/** Select whether an internal review has been completed for this opportunity. */
			CompleteInternalReview: DevKit.Controls.Boolean;
			/** Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements. */
			CustomerNeed: DevKit.Controls.String;
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
			/** Select whether the final proposal has been presented to the account. */
			PresentFinalProposal: DevKit.Controls.Boolean;
			/** Select whether a proposal for the opportunity has been presented to the account. */
			PresentProposal: DevKit.Controls.Boolean;
			/** Type notes about the proposed solution for the opportunity. */
			ProposedSolution: DevKit.Controls.String;
			/** Select whether a thank you note has been sent to the account for considering the proposal. */
			SendThankYouNote: DevKit.Controls.Boolean;
		}
		interface ProcessSales_Process {
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
			Lead_to_Opportunity_Sales_Process: ProcessLead_to_Opportunity_Sales_Process;
			Sales_Process: ProcessSales_Process;
		}
		interface Grid {
			Competitors: DevKit.Controls.Grid;
			opportunityproductsGrid: DevKit.Controls.Grid;
			Pursuit_Team: DevKit.Controls.Grid;
			quote: DevKit.Controls.Grid;
			Stakeholders: DevKit.Controls.Grid;
		}
	}
	class FormOpportunity_Sales_Insights extends DevKit.IForm {
		/**
		* Sales Insights [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Opportunity_Sales_Insights */
		Body: DevKit.FormOpportunity_Sales_Insights.Body;
		/** The Header section of form Opportunity_Sales_Insights */
		Header: DevKit.FormOpportunity_Sales_Insights.Header;
		/** The Navigation of form Opportunity_Sales_Insights */
		Navigation: DevKit.FormOpportunity_Sales_Insights.Navigation;
		/** The Process of form Opportunity_Sales_Insights */
		Process: DevKit.FormOpportunity_Sales_Insights.Process;
		/** The Grid of form Opportunity_Sales_Insights */
		Grid: DevKit.FormOpportunity_Sales_Insights.Grid;
		/** The SidePanes of form Opportunity_Sales_Insights */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormOpportunity2 {
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
	class FormOpportunity2 extends DevKit.IForm {
		/**
		* Opportunity [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Opportunity2 */
		Body: DevKit.FormOpportunity2.Body;
	}
	class OpportunityApi {
		/**
		* DynamicsCrm.DevKit OpportunityApi
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
		/** Internal attribute for storing customerid. Do not use this attribute directly; use parentaccountid instead. */
		readonly AccountId: string;
		/** Shows the date and time when the opportunity was closed or canceled. */
		ActualCloseDate_DateOnly: Date;
		/** Type the actual revenue amount for the opportunity for reporting and analysis of estimated versus actual sales. Field defaults to the Est. Revenue value when an opportunity is won. */
		ActualValue: number;
		/** Value of the Actual Revenue in base currency. */
		readonly ActualValue_Base: number;
		/** Type a value between 0 and 1,000,000,000,000 to indicate the lead's potential available budget. */
		BudgetAmount: number;
		/** Value of the Budget Amount in base currency. */
		readonly BudgetAmount_Base: number;
		/** Select the likely budget status for the lead's company. This may help determine the lead rating or your sales approach. */
		BudgetStatus: OptionSet.Opportunity.BudgetStatus;
		/** Shows the campaign that the opportunity was created from. The ID is used for tracking the success of the campaign. */
		CampaignId: string;
		/** Choose whether the proposal feedback has been captured for the opportunity. */
		CaptureProposalFeedback: boolean;
		/** Type a number from 0 to 100 that represents the likelihood of closing the opportunity. This can aid the sales team in their efforts to convert the opportunity in a sale. */
		CloseProbability: number;
		/** Select whether a final proposal has been completed for the opportunity. */
		CompleteFinalProposal: boolean;
		/** Select whether an internal review has been completed for this opportunity. */
		CompleteInternalReview: boolean;
		/** Select whether the lead confirmed interest in your offerings. This helps in determining the lead quality and the probability of it turning into an opportunity. */
		ConfirmInterest: boolean;
		/** Internal attribute for storing customerid. Do not use this attribute directly; use parentcontactid instead. */
		readonly ContactId: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type notes about the company or organization associated with the opportunity. */
		CurrentSituation: string;
		/** Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders. */
		customerid_account: string;
		/** Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders. */
		customerid_contact: string;
		/** Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements. */
		CustomerNeed: string;
		/** Type notes about the customer's pain points to help the sales team identify products and services that could address these pain points. */
		CustomerPainPoints: string;
		/** Select whether your notes include information about who makes the purchase decisions at the lead's company. */
		DecisionMaker: boolean;
		/** Type additional information to describe the opportunity, such as possible products to sell or past purchases from the customer. */
		Description: string;
		/** Select whether a proposal has been developed for the opportunity. */
		DevelopProposal: boolean;
		/** Type the discount amount for the opportunity if the customer is eligible for special savings. */
		DiscountAmount: number;
		/** Value of the Opportunity Discount Amount in base currency. */
		readonly DiscountAmount_Base: number;
		/** Type the discount rate that should be applied to the Product Totals field to include additional savings for the customer in the opportunity. */
		DiscountPercentage: number;
		/** The primary email address for the entity. */
		EmailAddress: string;
		/** Enter the expected closing date of the opportunity to help make accurate revenue forecasts. */
		EstimatedCloseDate_DateOnly: Date;
		/** Type the estimated revenue amount to indicate the potential sale or value of the opportunity for revenue forecasting. This field can be either system-populated or editable based on the selection in the Revenue field. */
		EstimatedValue: number;
		/** Value of the Est. Revenue in base currency. */
		readonly EstimatedValue_Base: number;
		/** Select whether the fit between the lead's requirements and your offerings was evaluated. */
		EvaluateFit: boolean;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Choose whether the sales team has recorded detailed notes on the proposals and the account's responses. */
		FileDebrief: boolean;
		/** Enter the date and time when the final decision of the opportunity was made. */
		FinalDecisionDate_DateOnly: Date;
		/** Type the cost of freight or shipping for the products included in the opportunity for use in calculating the Total Amount field. */
		FreightAmount: number;
		/** Value of the Freight Amount in base currency. */
		readonly FreightAmount_Base: number;
		/** Select whether information about competitors is included. */
		IdentifyCompetitors: boolean;
		/** Select whether the customer contacts for this opportunity have been identified. */
		IdentifyCustomerContacts: boolean;
		/** Choose whether you have recorded who will pursue the opportunity. */
		IdentifyPursuitTeam: boolean;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Choose whether someone from the sales team contacted this lead earlier. */
		InitialCommunication: OptionSet.Opportunity.InitialCommunication;
		/** Indicates whether the opportunity is private or visible to the entire organization. */
		readonly IsPrivate: boolean;
		/** Select whether the estimated revenue for the opportunity is calculated automatically based on the products entered or entered manually by a user. */
		IsRevenueSystemCalculated: boolean;
		/** Contains the date time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Categories used for forecasting. */
		msdyn_forecastcategory: OptionSet.Opportunity.msdyn_forecastcategory;
		/** Describes whether opportunity is opted out or not */
		msdyn_gdproptout: boolean;
		msdyn_OpportunityGrade: OptionSet.Opportunity.msdyn_OpportunityGrade;
		/** Maps to opportunity KPI records */
		msdyn_opportunitykpiid: string;
		msdyn_OpportunityScore: number;
		msdyn_OpportunityScoreTrend: OptionSet.Opportunity.msdyn_OpportunityScoreTrend;
		/** Internal use only. */
		msdyn_OrderType: OptionSet.Opportunity.msdyn_OrderType;
		/** Predictive score */
		msdyn_PredictiveScoreId: string;
		msdyn_ScoreHistory: string;
		msdyn_ScoreReasons: string;
		/** Unique identifier for Segment associated with Opportunity. */
		msdyn_segmentid: string;
		msdyn_similaropportunities: string;
		/** Unique identifier for Work Order Type associated with Opportunity. */
		msdyn_WorkOrderType: string;
		/** The Journey action id in which the opportunity is created. */
		msdynmkt_JourneyActionId: string;
		/** The journey id in which the opportunity is created */
		msdynmkt_JourneyId: string;
		/** Type a subject or descriptive name, such as the expected order or company name, for the opportunity. */
		Name: string;
		/** Choose how high the level of need is for the lead's company. */
		Need: OptionSet.Opportunity.Need;
		/** Shows the duration in minutes for which the opportunity was on hold. */
		readonly OnHoldTime: number;
		/** Unique identifier of the opportunity. */
		OpportunityId: string;
		/** Select the expected value or priority of the opportunity based on revenue, customer status, or closing probability. */
		OpportunityRatingCode: OptionSet.Opportunity.OpportunityRatingCode;
		/** Choose the lead that the opportunity was created from for reporting and analytics. The field is read-only after the opportunity is created and defaults to the correct lead when an opportunity is created from a converted lead. */
		OriginatingLeadId: string;
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
		/** Choose an account to connect this opportunity to, so that the relationship is visible in reports and analytics, and to provide a quick link to additional details, such as financial information and activities. */
		ParentAccountId: string;
		/** Choose a contact to connect this opportunity to, so that the relationship is visible in reports and analytics. */
		ParentContactId: string;
		/** Information about whether the opportunity participates in workflow rules. */
		ParticipatesInWorkflow: boolean;
		/** Select whether the final proposal has been presented to the account. */
		PresentFinalProposal: boolean;
		/** Select whether a proposal for the opportunity has been presented to the account. */
		PresentProposal: boolean;
		/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
		PriceLevelId: string;
		/** Pricing error for the opportunity. */
		PricingErrorCode: OptionSet.Opportunity.PricingErrorCode;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: OptionSet.Opportunity.PriorityCode;
		/** Contains the id of the process associated with the entity. */
		ProcessId: string;
		/** Type notes about the proposed solution for the opportunity. */
		ProposedSolution: string;
		/** Choose whether an individual or a committee will be involved in the  purchase process for the lead. */
		PurchaseProcess: OptionSet.Opportunity.PurchaseProcess;
		/** Choose how long the lead will likely take to make the purchase. */
		PurchaseTimeframe: OptionSet.Opportunity.PurchaseTimeframe;
		/** Select whether the decision about pursuing the opportunity has been made. */
		PursuitDecision: boolean;
		/** Type comments about the qualification or scoring of the lead. */
		QualificationComments: string;
		/** Type comments about the quotes associated with the opportunity. */
		QuoteComments: string;
		/** Choose whether the proposal feedback has been captured and resolved for the opportunity. */
		ResolveFeedback: boolean;
		/** Select the sales stage of this opportunity to aid the sales team in their efforts to win this opportunity. */
		SalesStage: OptionSet.Opportunity.SalesStage;
		/** Select the sales process stage for the opportunity to indicate the probability of closing the opportunity. */
		SalesStageCode: OptionSet.Opportunity.SalesStageCode;
		/** Enter the date and time of the prospecting follow-up meeting with the lead. */
		ScheduleFollowup_Prospect_UtcDateOnly: Date;
		/** Enter the date and time of the qualifying follow-up meeting with the lead. */
		ScheduleFollowup_Qualify_UtcDateOnly: Date;
		/** Enter the date and time of the proposal meeting for the opportunity. */
		ScheduleProposalMeeting_UtcDateOnly: Date;
		/** Select whether a thank you note has been sent to the account for considering the proposal. */
		SendThankYouNote: boolean;
		/** Skip Price Calculation (For Internal Use) */
		SkipPriceCalculation: OptionSet.Opportunity.SkipPriceCalculation;
		/** Choose the service level agreement (SLA) that you want to apply to the opportunity record. */
		SLAId: string;
		/** Last SLA that was applied to this opportunity. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Contains the id of the stage where the entity is located. */
		StageId: string;
		/** Shows whether the opportunity is open, won, or lost. Won and lost opportunities are read-only and can't be edited until they are reactivated. */
		StateCode: OptionSet.Opportunity.StateCode;
		/** Select the opportunity's status. */
		StatusCode: OptionSet.Opportunity.StatusCode;
		/** Shows the ID of the workflow step. */
		StepId: string;
		/** Shows the current phase in the sales pipeline for the opportunity.  */
		StepName: string;
		/** Number of users or conversations followed the record */
		TeamsFollowed: number;
		/** Select when the opportunity is likely to be closed. */
		TimeLine: OptionSet.Opportunity.TimeLine;
		/** Total time spent for emails (read and write) and meetings by me in relation to the opportunity record. */
		readonly TimeSpentByMeOnEmailAndMeetings: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the opportunity. */
		TotalAmount: number;
		/** Value of the Total Amount in base currency. */
		readonly TotalAmount_Base: number;
		/** Shows the total product amount for the opportunity, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount of the opportunity. */
		TotalAmountLessFreight: number;
		/** Value of the Total Pre-Freight Amount in base currency. */
		readonly TotalAmountLessFreight_Base: number;
		/** Shows the total discount amount, based on the discount price and rate entered on the opportunity. */
		TotalDiscountAmount: number;
		/** Value of the Total Discount Amount in base currency. */
		readonly TotalDiscountAmount_Base: number;
		/** Shows the sum of all existing and write-in products included on the opportunity, based on the specified price list and quantities. */
		TotalLineItemAmount: number;
		/** Value of the Total Detail Amount in base currency. */
		readonly TotalLineItemAmount_Base: number;
		/** Shows the total of the Manual Discount amounts specified on all products included in the opportunity. This value is reflected in the Total Detail Amount field on the opportunity and is added to any discount amount or rate specified on the opportunity. */
		TotalLineItemDiscountAmount: number;
		/** Value of the Total Line Item Discount Amount in base currency. */
		readonly TotalLineItemDiscountAmount_Base: number;
		/** Shows the total of the Tax amounts specified on all products included in the opportunity, included in the Total Amount field calculation for the opportunity. */
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
		readonly FormattedValue: {
			/** Internal attribute for storing customerid. Do not use this attribute directly; use parentaccountid instead. */
			readonly AccountId: string;
			/** Shows the date and time when the opportunity was closed or canceled. */
			readonly ActualCloseDate_DateOnly: string;
			/** Type the actual revenue amount for the opportunity for reporting and analysis of estimated versus actual sales. Field defaults to the Est. Revenue value when an opportunity is won. */
			readonly ActualValue: string;
			/** Value of the Actual Revenue in base currency. */
			readonly ActualValue_Base: string;
			/** Type a value between 0 and 1,000,000,000,000 to indicate the lead's potential available budget. */
			readonly BudgetAmount: string;
			/** Value of the Budget Amount in base currency. */
			readonly BudgetAmount_Base: string;
			/** Select the likely budget status for the lead's company. This may help determine the lead rating or your sales approach. */
			readonly BudgetStatus: string;
			/** Shows the campaign that the opportunity was created from. The ID is used for tracking the success of the campaign. */
			readonly CampaignId: string;
			/** Choose whether the proposal feedback has been captured for the opportunity. */
			readonly CaptureProposalFeedback: string;
			/** Type a number from 0 to 100 that represents the likelihood of closing the opportunity. This can aid the sales team in their efforts to convert the opportunity in a sale. */
			readonly CloseProbability: string;
			/** Select whether a final proposal has been completed for the opportunity. */
			readonly CompleteFinalProposal: string;
			/** Select whether an internal review has been completed for this opportunity. */
			readonly CompleteInternalReview: string;
			/** Select whether the lead confirmed interest in your offerings. This helps in determining the lead quality and the probability of it turning into an opportunity. */
			readonly ConfirmInterest: string;
			/** Internal attribute for storing customerid. Do not use this attribute directly; use parentcontactid instead. */
			readonly ContactId: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type notes about the company or organization associated with the opportunity. */
			readonly CurrentSituation: string;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders. */
			readonly customerid_account: string;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders. */
			readonly customerid_contact: string;
			/** Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements. */
			readonly CustomerNeed: string;
			/** Type notes about the customer's pain points to help the sales team identify products and services that could address these pain points. */
			readonly CustomerPainPoints: string;
			/** Select whether your notes include information about who makes the purchase decisions at the lead's company. */
			readonly DecisionMaker: string;
			/** Type additional information to describe the opportunity, such as possible products to sell or past purchases from the customer. */
			readonly Description: string;
			/** Select whether a proposal has been developed for the opportunity. */
			readonly DevelopProposal: string;
			/** Type the discount amount for the opportunity if the customer is eligible for special savings. */
			readonly DiscountAmount: string;
			/** Value of the Opportunity Discount Amount in base currency. */
			readonly DiscountAmount_Base: string;
			/** Type the discount rate that should be applied to the Product Totals field to include additional savings for the customer in the opportunity. */
			readonly DiscountPercentage: string;
			/** The primary email address for the entity. */
			readonly EmailAddress: string;
			/** Enter the expected closing date of the opportunity to help make accurate revenue forecasts. */
			readonly EstimatedCloseDate_DateOnly: string;
			/** Type the estimated revenue amount to indicate the potential sale or value of the opportunity for revenue forecasting. This field can be either system-populated or editable based on the selection in the Revenue field. */
			readonly EstimatedValue: string;
			/** Value of the Est. Revenue in base currency. */
			readonly EstimatedValue_Base: string;
			/** Select whether the fit between the lead's requirements and your offerings was evaluated. */
			readonly EvaluateFit: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Choose whether the sales team has recorded detailed notes on the proposals and the account's responses. */
			readonly FileDebrief: string;
			/** Enter the date and time when the final decision of the opportunity was made. */
			readonly FinalDecisionDate_DateOnly: string;
			/** Type the cost of freight or shipping for the products included in the opportunity for use in calculating the Total Amount field. */
			readonly FreightAmount: string;
			/** Value of the Freight Amount in base currency. */
			readonly FreightAmount_Base: string;
			/** Select whether information about competitors is included. */
			readonly IdentifyCompetitors: string;
			/** Select whether the customer contacts for this opportunity have been identified. */
			readonly IdentifyCustomerContacts: string;
			/** Choose whether you have recorded who will pursue the opportunity. */
			readonly IdentifyPursuitTeam: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Choose whether someone from the sales team contacted this lead earlier. */
			readonly InitialCommunication: string;
			/** Indicates whether the opportunity is private or visible to the entire organization. */
			readonly IsPrivate: string;
			/** Select whether the estimated revenue for the opportunity is calculated automatically based on the products entered or entered manually by a user. */
			readonly IsRevenueSystemCalculated: string;
			/** Contains the date time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Categories used for forecasting. */
			readonly msdyn_forecastcategory: string;
			/** Describes whether opportunity is opted out or not */
			readonly msdyn_gdproptout: string;
			readonly msdyn_OpportunityGrade: string;
			/** Maps to opportunity KPI records */
			readonly msdyn_opportunitykpiid: string;
			readonly msdyn_OpportunityScore: string;
			readonly msdyn_OpportunityScoreTrend: string;
			/** Internal use only. */
			readonly msdyn_OrderType: string;
			/** Predictive score */
			readonly msdyn_PredictiveScoreId: string;
			readonly msdyn_ScoreHistory: string;
			readonly msdyn_ScoreReasons: string;
			/** Unique identifier for Segment associated with Opportunity. */
			readonly msdyn_segmentid: string;
			readonly msdyn_similaropportunities: string;
			/** Unique identifier for Work Order Type associated with Opportunity. */
			readonly msdyn_WorkOrderType: string;
			/** The Journey action id in which the opportunity is created. */
			readonly msdynmkt_JourneyActionId: string;
			/** The journey id in which the opportunity is created */
			readonly msdynmkt_JourneyId: string;
			/** Type a subject or descriptive name, such as the expected order or company name, for the opportunity. */
			readonly Name: string;
			/** Choose how high the level of need is for the lead's company. */
			readonly Need: string;
			/** Shows the duration in minutes for which the opportunity was on hold. */
			readonly OnHoldTime: string;
			/** Unique identifier of the opportunity. */
			readonly OpportunityId: string;
			/** Select the expected value or priority of the opportunity based on revenue, customer status, or closing probability. */
			readonly OpportunityRatingCode: string;
			/** Choose the lead that the opportunity was created from for reporting and analytics. The field is read-only after the opportunity is created and defaults to the correct lead when an opportunity is created from a converted lead. */
			readonly OriginatingLeadId: string;
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
			/** Choose an account to connect this opportunity to, so that the relationship is visible in reports and analytics, and to provide a quick link to additional details, such as financial information and activities. */
			readonly ParentAccountId: string;
			/** Choose a contact to connect this opportunity to, so that the relationship is visible in reports and analytics. */
			readonly ParentContactId: string;
			/** Information about whether the opportunity participates in workflow rules. */
			readonly ParticipatesInWorkflow: string;
			/** Select whether the final proposal has been presented to the account. */
			readonly PresentFinalProposal: string;
			/** Select whether a proposal for the opportunity has been presented to the account. */
			readonly PresentProposal: string;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			readonly PriceLevelId: string;
			/** Pricing error for the opportunity. */
			readonly PricingErrorCode: string;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			readonly PriorityCode: string;
			/** Contains the id of the process associated with the entity. */
			readonly ProcessId: string;
			/** Type notes about the proposed solution for the opportunity. */
			readonly ProposedSolution: string;
			/** Choose whether an individual or a committee will be involved in the  purchase process for the lead. */
			readonly PurchaseProcess: string;
			/** Choose how long the lead will likely take to make the purchase. */
			readonly PurchaseTimeframe: string;
			/** Select whether the decision about pursuing the opportunity has been made. */
			readonly PursuitDecision: string;
			/** Type comments about the qualification or scoring of the lead. */
			readonly QualificationComments: string;
			/** Type comments about the quotes associated with the opportunity. */
			readonly QuoteComments: string;
			/** Choose whether the proposal feedback has been captured and resolved for the opportunity. */
			readonly ResolveFeedback: string;
			/** Select the sales stage of this opportunity to aid the sales team in their efforts to win this opportunity. */
			readonly SalesStage: string;
			/** Select the sales process stage for the opportunity to indicate the probability of closing the opportunity. */
			readonly SalesStageCode: string;
			/** Enter the date and time of the prospecting follow-up meeting with the lead. */
			readonly ScheduleFollowup_Prospect_UtcDateOnly: string;
			/** Enter the date and time of the qualifying follow-up meeting with the lead. */
			readonly ScheduleFollowup_Qualify_UtcDateOnly: string;
			/** Enter the date and time of the proposal meeting for the opportunity. */
			readonly ScheduleProposalMeeting_UtcDateOnly: string;
			/** Select whether a thank you note has been sent to the account for considering the proposal. */
			readonly SendThankYouNote: string;
			/** Skip Price Calculation (For Internal Use) */
			readonly SkipPriceCalculation: string;
			/** Choose the service level agreement (SLA) that you want to apply to the opportunity record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this opportunity. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Contains the id of the stage where the entity is located. */
			readonly StageId: string;
			/** Shows whether the opportunity is open, won, or lost. Won and lost opportunities are read-only and can't be edited until they are reactivated. */
			readonly StateCode: string;
			/** Select the opportunity's status. */
			readonly StatusCode: string;
			/** Shows the ID of the workflow step. */
			readonly StepId: string;
			/** Shows the current phase in the sales pipeline for the opportunity.  */
			readonly StepName: string;
			/** Number of users or conversations followed the record */
			readonly TeamsFollowed: string;
			/** Select when the opportunity is likely to be closed. */
			readonly TimeLine: string;
			/** Total time spent for emails (read and write) and meetings by me in relation to the opportunity record. */
			readonly TimeSpentByMeOnEmailAndMeetings: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the opportunity. */
			readonly TotalAmount: string;
			/** Value of the Total Amount in base currency. */
			readonly TotalAmount_Base: string;
			/** Shows the total product amount for the opportunity, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount of the opportunity. */
			readonly TotalAmountLessFreight: string;
			/** Value of the Total Pre-Freight Amount in base currency. */
			readonly TotalAmountLessFreight_Base: string;
			/** Shows the total discount amount, based on the discount price and rate entered on the opportunity. */
			readonly TotalDiscountAmount: string;
			/** Value of the Total Discount Amount in base currency. */
			readonly TotalDiscountAmount_Base: string;
			/** Shows the sum of all existing and write-in products included on the opportunity, based on the specified price list and quantities. */
			readonly TotalLineItemAmount: string;
			/** Value of the Total Detail Amount in base currency. */
			readonly TotalLineItemAmount_Base: string;
			/** Shows the total of the Manual Discount amounts specified on all products included in the opportunity. This value is reflected in the Total Detail Amount field on the opportunity and is added to any discount amount or rate specified on the opportunity. */
			readonly TotalLineItemDiscountAmount: string;
			/** Value of the Total Line Item Discount Amount in base currency. */
			readonly TotalLineItemDiscountAmount_Base: string;
			/** Shows the total of the Tax amounts specified on all products included in the opportunity, included in the Total Amount field calculation for the opportunity. */
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
		}
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
		enum CustomerIdType {
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
		enum msdyn_OpportunityGrade {
			/** 0 */
			Grade_A,
			/** 1 */
			Grade_B,
			/** 2 */
			Grade_C,
			/** 3 */
			Grade_D
		}
		enum msdyn_OpportunityScoreTrend {
			/** 2 */
			Declining,
			/** 0 */
			Improving,
			/** 3 */
			Not_enough_info,
			/** 1 */
			Steady
		}
		enum msdyn_OrderType {
			/** 192350000 */
			Item_based,
			/** 690970002 */
			Service_Maintenance_Based
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}