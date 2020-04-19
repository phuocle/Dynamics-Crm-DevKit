//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormOpportunity_AI_for_Sales {
		interface Header {
			/** Enter the expected closing date of the opportunity to help make accurate revenue forecasts. */
			EstimatedCloseDate: DevKit.Form.Controls.ControlDate;
			/** Type the estimated revenue amount to indicate the potential sale or value of the opportunity for revenue forecasting. This field can be either system-populated or editable based on the selection in the Revenue field. */
			EstimatedValue: DevKit.Form.Controls.ControlMoney;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the opportunity's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_Summary_Sections {
			opportunity_information: DevKit.Form.Controls.ControlSection;
			Opportunity_details: DevKit.Form.Controls.ControlSection;
			Notes_pane: DevKit.Form.Controls.ControlSection;
			Summary_section_6: DevKit.Form.Controls.ControlSection;
			Social_pane: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Product_Line_Items_Sections {
			opportunityproducts: DevKit.Form.Controls.ControlSection;
			suggestionsection: DevKit.Form.Controls.ControlSection;
			DynamicProperties: DevKit.Form.Controls.ControlSection;
			totals: DevKit.Form.Controls.ControlSection;
		}
		interface tab_QUOTES_Sections {
			opportunityquotes: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Summary extends DevKit.Form.Controls.IControlTab {
			Section: tab_Summary_Sections;
		}
		interface tab_Product_Line_Items extends DevKit.Form.Controls.IControlTab {
			Section: tab_Product_Line_Items_Sections;
		}
		interface tab_QUOTES extends DevKit.Form.Controls.IControlTab {
			Section: tab_QUOTES_Sections;
		}
		interface Tabs {
			Summary: tab_Summary;
			Product_Line_Items: tab_Product_Line_Items;
			QUOTES: tab_QUOTES;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			ActionCards: DevKit.Form.Controls.ControlActionCards;
			Stakeholders: DevKit.Form.Controls.ControlGrid;
			Pursuit_Team: DevKit.Form.Controls.ControlGrid;
			Competitors: DevKit.Form.Controls.ControlGrid;
			opportunityproductsGrid: DevKit.Form.Controls.ControlGrid;
			quote: DevKit.Form.Controls.ControlGrid;
			/** Type a value between 0 and 1,000,000,000,000 to indicate the lead's potential available budget. */
			BudgetAmount: DevKit.Form.Controls.ControlMoney;
			/** Type notes about the company or organization associated with the opportunity. */
			CurrentSituation: DevKit.Form.Controls.ControlString;
			/** Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements. */
			CustomerNeed: DevKit.Form.Controls.ControlString;
			/** Type additional information to describe the opportunity, such as possible products to sell or past purchases from the customer. */
			Description: DevKit.Form.Controls.ControlString;
			/** Type the discount amount for the opportunity if the customer is eligible for special savings. */
			DiscountAmount: DevKit.Form.Controls.ControlMoney;
			/** Type the discount rate that should be applied to the Product Totals field to include additional savings for the customer in the opportunity. */
			DiscountPercentage: DevKit.Form.Controls.ControlDecimal;
			/** Type the cost of freight or shipping for the products included in the opportunity for use in calculating the Total Amount field. */
			FreightAmount: DevKit.Form.Controls.ControlMoney;
			/** Select whether the estimated revenue for the opportunity is calculated automatically based on the products entered or entered manually by a user. */
			IsRevenueSystemCalculated: DevKit.Form.Controls.ControlBoolean;
			/** Internal use only. */
			msdyn_OrderType: DevKit.Form.Controls.ControlOptionSet;
			/** Type a subject or descriptive name, such as the expected order or company name, for the opportunity. */
			Name: DevKit.Form.Controls.ControlString;
			/** Choose an account to connect this opportunity to, so that the relationship is visible in reports and analytics, and to provide a quick link to additional details, such as financial information and activities. */
			ParentAccountId: DevKit.Form.Controls.ControlLookup;
			/** Choose a contact to connect this opportunity to, so that the relationship is visible in reports and analytics. */
			ParentContactId: DevKit.Form.Controls.ControlLookup;
			/** Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices. */
			PriceLevelId: DevKit.Form.Controls.ControlLookup;
			/** Type notes about the proposed solution for the opportunity. */
			ProposedSolution: DevKit.Form.Controls.ControlString;
			/** Choose whether an individual or a committee will be involved in the  purchase process for the lead. */
			PurchaseProcess: DevKit.Form.Controls.ControlOptionSet;
			/** Choose how long the lead will likely take to make the purchase. */
			PurchaseTimeframe: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the opportunity. */
			TotalAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total product amount for the opportunity, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount of the opportunity. */
			TotalAmountLessFreight: DevKit.Form.Controls.ControlMoney;
			/** Shows the sum of all existing and write-in products included on the opportunity, based on the specified price list and quantities. */
			TotalLineItemAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total of the Tax amounts specified on all products included in the opportunity, included in the Total Amount field calculation for the opportunity. */
			TotalTax: DevKit.Form.Controls.ControlMoney;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			navActivities: DevKit.Form.Controls.ControlNavigationItem,
			navOrders: DevKit.Form.Controls.ControlNavigationItem,
			navRelationship: DevKit.Form.Controls.ControlNavigationItem,
			navInvoices: DevKit.Form.Controls.ControlNavigationItem,
			navComp: DevKit.Form.Controls.ControlNavigationItem,
			navDocument: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navConnections: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
		interface ProcessOpportunity_Sales_Process {
			/** Type a value between 0 and 1,000,000,000,000 to indicate the lead's potential available budget. */
			BudgetAmount: DevKit.Form.Controls.ControlMoney;
			/** Select whether a final proposal has been completed for the opportunity. */
			CompleteFinalProposal: DevKit.Form.Controls.ControlBoolean;
			/** Select whether an internal review has been completed for this opportunity. */
			CompleteInternalReview: DevKit.Form.Controls.ControlBoolean;
			/** Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements. */
			CustomerNeed: DevKit.Form.Controls.ControlString;
			/** Select whether your notes include information about who makes the purchase decisions at the lead's company. */
			DecisionMaker: DevKit.Form.Controls.ControlBoolean;
			/** Type additional information to describe the opportunity, such as possible products to sell or past purchases from the customer. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select whether a proposal has been developed for the opportunity. */
			DevelopProposal: DevKit.Form.Controls.ControlBoolean;
			/** Choose whether the sales team has recorded detailed notes on the proposals and the account's responses. */
			FileDebrief: DevKit.Form.Controls.ControlBoolean;
			/** Enter the date and time when the final decision of the opportunity was made. */
			FinalDecisionDate: DevKit.Form.Controls.ControlDate;
			/** Select whether information about competitors is included. */
			IdentifyCompetitors: DevKit.Form.Controls.ControlBoolean;
			/** Select whether the customer contacts for this opportunity have been identified. */
			IdentifyCustomerContacts: DevKit.Form.Controls.ControlBoolean;
			/** Choose whether you have recorded who will pursue the opportunity. */
			IdentifyPursuitTeam: DevKit.Form.Controls.ControlBoolean;
			/** Choose an account to connect this opportunity to, so that the relationship is visible in reports and analytics, and to provide a quick link to additional details, such as financial information and activities. */
			ParentAccountId: DevKit.Form.Controls.ControlLookup;
			/** Choose a contact to connect this opportunity to, so that the relationship is visible in reports and analytics. */
			ParentContactId: DevKit.Form.Controls.ControlLookup;
			/** Select whether the final proposal has been presented to the account. */
			PresentFinalProposal: DevKit.Form.Controls.ControlBoolean;
			/** Select whether a proposal for the opportunity has been presented to the account. */
			PresentProposal: DevKit.Form.Controls.ControlBoolean;
			/** Type notes about the proposed solution for the opportunity. */
			ProposedSolution: DevKit.Form.Controls.ControlString;
			/** Choose whether an individual or a committee will be involved in the  purchase process for the lead. */
			PurchaseProcess: DevKit.Form.Controls.ControlOptionSet;
			/** Choose how long the lead will likely take to make the purchase. */
			PurchaseTimeframe: DevKit.Form.Controls.ControlOptionSet;
			/** Select whether a thank you note has been sent to the account for considering the proposal. */
			SendThankYouNote: DevKit.Form.Controls.ControlBoolean;
		}
		interface Process extends DevKit.Form.Controls.IControlProcess {
			Opportunity_Sales_Process: ProcessOpportunity_Sales_Process;
		}
	}
	class FormOpportunity_AI_for_Sales extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Opportunity_AI_for_Sales
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Opportunity_AI_for_Sales */
		Body: LuckyMokey.FormOpportunity_AI_for_Sales.Body;
		/** The Header section of form Opportunity_AI_for_Sales */
		Header: LuckyMokey.FormOpportunity_AI_for_Sales.Header;
		/** The Navigation of form Opportunity_AI_for_Sales */
		Navigation: LuckyMokey.FormOpportunity_AI_for_Sales.Navigation;
		/** The Process of form Opportunity_AI_for_Sales */
		Process: LuckyMokey.FormOpportunity_AI_for_Sales.Process;
	}
	namespace FormOpportunity {
		interface tab_newOpportunity_Sections {
			quickOpportunity_column1: DevKit.Form.Controls.ControlSection;
			quickOpportunity_column2: DevKit.Form.Controls.ControlSection;
			quickOpportunity_column3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_newOpportunity extends DevKit.Form.Controls.IControlTab {
			Section: tab_newOpportunity_Sections;
		}
		interface Tabs {
			newOpportunity: tab_newOpportunity;
		}
		interface Body {
			Tab: Tabs;
			/** Type a value between 0 and 1,000,000,000,000 to indicate the lead's potential available budget. */
			BudgetAmount: DevKit.Form.Controls.ControlMoney;
			/** Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements. */
			CustomerNeed: DevKit.Form.Controls.ControlString;
			/** Enter the expected closing date of the opportunity to help make accurate revenue forecasts. */
			EstimatedCloseDate: DevKit.Form.Controls.ControlDate;
			/** Type the estimated revenue amount to indicate the potential sale or value of the opportunity for revenue forecasting. This field can be either system-populated or editable based on the selection in the Revenue field. */
			EstimatedValue: DevKit.Form.Controls.ControlMoney;
			/** The organizational unit in charge of the opportunity. */
			msdyn_ContractOrganizationalUnitId: DevKit.Form.Controls.ControlLookup;
			/** Internal use only. */
			msdyn_OrderType: DevKit.Form.Controls.ControlOptionSet;
			/** Type a subject or descriptive name, such as the expected order or company name, for the opportunity. */
			Name: DevKit.Form.Controls.ControlString;
			/** Choose an account to connect this opportunity to, so that the relationship is visible in reports and analytics, and to provide a quick link to additional details, such as financial information and activities. */
			ParentAccountId: DevKit.Form.Controls.ControlLookup;
			/** Choose a contact to connect this opportunity to, so that the relationship is visible in reports and analytics. */
			ParentContactId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormOpportunity extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Opportunity
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Opportunity */
		Body: LuckyMokey.FormOpportunity.Body;
	}
}
declare namespace OptionSet {
	namespace Opportunity {
		enum BudgetStatus {
			/** 0 */
			No_Committed_Budget,
			/** 1 */
			May_Buy,
			/** 2 */
			Can_Buy,
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
			/** 100000001 */
			Pipeline,
			/** 100000002 */
			Best_case,
			/** 100000003 */
			Committed,
			/** 100000004 */
			Omitted,
			/** 100000005 */
			Won,
			/** 100000006 */
			Lost
		}
		enum msdyn_OrderType {
			/** 192350001 */
			Work_based,
			/** 192350000 */
			Item_based,
			/** 690970002 */
			Service_Maintenance_Based
		}
		enum Need {
			/** 0 */
			Must_have,
			/** 1 */
			Should_have,
			/** 2 */
			Good_to_have,
			/** 3 */
			No_need
		}
		enum OpportunityRatingCode {
			/** 1 */
			Hot,
			/** 2 */
			Warm,
			/** 3 */
			Cold
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
		enum PurchaseProcess {
			/** 0 */
			Individual,
			/** 1 */
			Committee,
			/** 2 */
			Unknown
		}
		enum PurchaseTimeframe {
			/** 0 */
			Immediate,
			/** 1 */
			This_Quarter,
			/** 2 */
			Next_Quarter,
			/** 3 */
			This_Year,
			/** 4 */
			Unknown
		}
		enum SalesStage {
			/** 0 */
			Qualify,
			/** 1 */
			Develop,
			/** 2 */
			Propose,
			/** 3 */
			Close
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
			/** 0 */
			Open,
			/** 1 */
			Won,
			/** 2 */
			Lost
		}
		enum StatusCode {
			/** 1 */
			In_Progress,
			/** 2 */
			On_Hold,
			/** 3 */
			Won,
			/** 4 */
			Canceled,
			/** 5 */
			Out_Sold
		}
		enum TimeLine {
			/** 0 */
			Immediate,
			/** 1 */
			This_Quarter,
			/** 2 */
			Next_Quarter,
			/** 3 */
			This_Year,
			/** 4 */
			Not_known
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
//{'JsForm':['AI for Sales','Opportunity'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}