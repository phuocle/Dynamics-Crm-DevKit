//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormSalesLiterature_Information {
		interface tab_general_Sections {
			sales_literature_information: DevKit.Form.Controls.ControlSection;
			description: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information to describe the sales literature, such as the intended audience or primary messages. */
			Description: DevKit.Form.Controls.ControlString;
			/** Choose the user who is responsible for maintaining or updating the sales literature. */
			EmployeeContactId: DevKit.Form.Controls.ControlLookup;
			/** Enter the expiration date or last day the sales literature can be distributed. */
			ExpirationDate: DevKit.Form.Controls.ControlDate;
			/** Select a category or type to help others identify the intended use of the sales literature. */
			LiteratureTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type a descriptive title for the sales literature. */
			Name: DevKit.Form.Controls.ControlString;
			/** Choose the subject for the sales literature to relate the item to a product or business group. Administrators can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormSalesLiterature_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form SalesLiterature_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form SalesLiterature_Information */
		Body: LuckyMokey.FormSalesLiterature_Information.Body;
	}
	namespace FormSales_Literature {
		interface Header {
			/** Choose the user who is responsible for maintaining or updating the sales literature. */
			EmployeeContactId: DevKit.Form.Controls.ControlLookup;
			/** Enter the expiration date or last day the sales literature can be distributed. */
			ExpirationDate: DevKit.Form.Controls.ControlDate;
		}
		interface tab_general_information_Sections {
			sales_literature_information: DevKit.Form.Controls.ControlSection;
			sales_attachments: DevKit.Form.Controls.ControlSection;
			related: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general_information extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_information_Sections;
		}
		interface Tabs {
			general_information: tab_general_information;
		}
		interface Body {
			Tab: Tabs;
			SalesAttachments: DevKit.Form.Controls.ControlGrid;
			Products: DevKit.Form.Controls.ControlGrid;
			Competitors: DevKit.Form.Controls.ControlGrid;
			/** Type additional information to describe the sales literature, such as the intended audience or primary messages. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select a category or type to help others identify the intended use of the sales literature. */
			LiteratureTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type a descriptive title for the sales literature. */
			Name: DevKit.Form.Controls.ControlString;
			/** Choose the subject for the sales literature to relate the item to a product or business group. Administrators can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			navDoc: DevKit.Form.Controls.ControlNavigationItem,
			navComp: DevKit.Form.Controls.ControlNavigationItem,
			navProducts: DevKit.Form.Controls.ControlNavigationItem,
			navDocument: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormSales_Literature extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Sales_Literature
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Sales_Literature */
		Body: LuckyMokey.FormSales_Literature.Body;
		/** The Header section of form Sales_Literature */
		Header: LuckyMokey.FormSales_Literature.Header;
		/** The Navigation of form Sales_Literature */
		Navigation: LuckyMokey.FormSales_Literature.Navigation;
	}
}
declare namespace OptionSet {
	namespace SalesLiterature {
		enum LiteratureTypeCode {
			/** 0 */
			Presentation,
			/** 1 */
			Product_Sheet,
			/** 2 */
			Policies_And_Procedures,
			/** 3 */
			Sales_Literature,
			/** 4 */
			Spreadsheets,
			/** 5 */
			News,
			/** 6 */
			Bulletins,
			/** 7 */
			Price_Sheets,
			/** 8 */
			Manuals,
			/** 9 */
			Company_Background,
			/** 100001 */
			Marketing_Collateral
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
//{'JsForm':['Information','Sales Literature'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}