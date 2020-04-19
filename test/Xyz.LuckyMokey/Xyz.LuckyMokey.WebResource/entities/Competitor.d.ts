//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormCompetitor {
		interface Header {
			/** Type the amount of revenue reported in the competitor's annual report or other source. */
			ReportedRevenue: DevKit.Form.Controls.ControlMoney;
			/** Type the stock exchange symbol for the competitor to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money. */
			TickerSymbol: DevKit.Form.Controls.ControlString;
		}
		interface tab_COMPETITOR_Sections {
			Competitor_Information: DevKit.Form.Controls.ControlSection;
			notes: DevKit.Form.Controls.ControlSection;
			analysis: DevKit.Form.Controls.ControlSection;
		}
		interface tab_opportunities_Sections {
			Opportunity: DevKit.Form.Controls.ControlSection;
			OpportunitiesChart: DevKit.Form.Controls.ControlSection;
		}
		interface tab_COMPETITOR extends DevKit.Form.Controls.IControlTab {
			Section: tab_COMPETITOR_Sections;
		}
		interface tab_opportunities extends DevKit.Form.Controls.IControlTab {
			Section: tab_opportunities_Sections;
		}
		interface Tabs {
			COMPETITOR: tab_COMPETITOR;
			opportunities: tab_opportunities;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			OpportunityCurrentFiscalYear: DevKit.Form.Controls.ControlGrid;
			ChartTest: DevKit.Form.Controls.ControlGrid;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Form.Controls.ControlString;
			/** Type the company or business name used to identify the competitor in data views and related records. */
			Name: DevKit.Form.Controls.ControlString;
			/** Type notes or other information about the competitor's strengths, such as top-selling products and targeted industries or markets. */
			Strengths: DevKit.Form.Controls.ControlString;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
			/** Type notes or other information about the competitor's weaknesses or areas in which your organization outperforms the competitor. */
			Weaknesses: DevKit.Form.Controls.ControlString;
			/** Type the website URL for the competitor. */
			WebSiteUrl: DevKit.Form.Controls.ControlString;
		}
		interface Navigation {
			navOpportunities: DevKit.Form.Controls.ControlNavigationItem,
			navConnections: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormCompetitor extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Competitor
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Competitor */
		Body: LuckyMokey.FormCompetitor.Body;
		/** The Header section of form Competitor */
		Header: LuckyMokey.FormCompetitor.Header;
		/** The Navigation of form Competitor */
		Navigation: LuckyMokey.FormCompetitor.Navigation;
	}
	namespace FormCompetitor_Information {
		interface tab_general_Sections {
			competitor_information: DevKit.Form.Controls.ControlSection;
			address: DevKit.Form.Controls.ControlSection;
		}
		interface tab_analysis_Sections {
			analysis: DevKit.Form.Controls.ControlSection;
		}
		interface tab_notes_Sections {
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab_analysis extends DevKit.Form.Controls.IControlTab {
			Section: tab_analysis_Sections;
		}
		interface tab_notes extends DevKit.Form.Controls.IControlTab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			general: tab_general;
			analysis: tab_analysis;
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Type the city for the primary address. */
			Address1_City: DevKit.Form.Controls.ControlString;
			/** Type the country or region for the primary address. */
			Address1_Country: DevKit.Form.Controls.ControlString;
			/** Type the first line of the primary address. */
			Address1_Line1: DevKit.Form.Controls.ControlString;
			/** Type the second line of the primary address. */
			Address1_Line2: DevKit.Form.Controls.ControlString;
			/** Type the third line of the primary address. */
			Address1_Line3: DevKit.Form.Controls.ControlString;
			/** Type the ZIP Code or postal code for the primary address. */
			Address1_PostalCode: DevKit.Form.Controls.ControlString;
			/** Type the state or province of the primary address. */
			Address1_StateOrProvince: DevKit.Form.Controls.ControlString;
			/** Type the competitor's primary product, service, or specialty. */
			KeyProduct: DevKit.Form.Controls.ControlString;
			/** Type the company or business name used to identify the competitor in data views and related records. */
			Name: DevKit.Form.Controls.ControlString;
			/** Type notes or other information about the competitive opportunities or selling points you can make. */
			Opportunities: DevKit.Form.Controls.ControlString;
			/** Type notes or other information about the competitor's business, such as location, revenue, or distribution channel. */
			Overview: DevKit.Form.Controls.ControlString;
			/** Type the amount of revenue reported in the competitor's annual report or other source. */
			ReportedRevenue: DevKit.Form.Controls.ControlMoney;
			/** Type the stock exchange at which the competitor is listed to track their stock and financial performance of the company. */
			StockExchange: DevKit.Form.Controls.ControlString;
			/** Type notes or other information about the competitor's strengths, such as top-selling products and targeted industries or markets. */
			Strengths: DevKit.Form.Controls.ControlString;
			/** Type notes or other information about the competitor's threats to your organization when you sell to the same prospect or customer. */
			Threats: DevKit.Form.Controls.ControlString;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
			/** Type notes or other information about the competitor's weaknesses or areas in which your organization outperforms the competitor. */
			Weaknesses: DevKit.Form.Controls.ControlString;
			/** Type the website URL for the competitor. */
			WebSiteUrl: DevKit.Form.Controls.ControlString;
		}
	}
	class FormCompetitor_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Competitor_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Competitor_Information */
		Body: LuckyMokey.FormCompetitor_Information.Body;
	}
}
declare namespace OptionSet {
	namespace Competitor {
		enum Address1_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address1_ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum Address2_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address2_ShippingMethodCode {
			/** 1 */
			Default_Value
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
//{'JsForm':['Competitor','Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}