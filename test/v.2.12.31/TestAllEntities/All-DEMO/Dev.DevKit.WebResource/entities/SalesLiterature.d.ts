//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSalesLiterature_Information {
		interface tab_general_Sections {
			description: DevKit.Controls.Section;
			sales_literature_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information to describe the sales literature, such as the intended audience or primary messages. */
			Description: DevKit.Controls.String;
			/** Choose the user who is responsible for maintaining or updating the sales literature. */
			EmployeeContactId: DevKit.Controls.Lookup;
			/** Enter the expiration date or last day the sales literature can be distributed. */
			ExpirationDate: DevKit.Controls.Date;
			/** Select a category or type to help others identify the intended use of the sales literature. */
			LiteratureTypeCode: DevKit.Controls.OptionSet;
			/** Type a descriptive title for the sales literature. */
			Name: DevKit.Controls.String;
			/** Choose the subject for the sales literature to relate the item to a product or business group. Administrators can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Controls.Lookup;
		}
	}
	class FormSalesLiterature_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form SalesLiterature_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SalesLiterature_Information */
		Body: DevKit.FormSalesLiterature_Information.Body;
	}
	namespace FormSales_Literature {
		interface Header extends DevKit.Controls.IHeader {
			/** Choose the user who is responsible for maintaining or updating the sales literature. */
			EmployeeContactId: DevKit.Controls.Lookup;
			/** Enter the expiration date or last day the sales literature can be distributed. */
			ExpirationDate: DevKit.Controls.Date;
		}
		interface tab_general_information_Sections {
			related: DevKit.Controls.Section;
			sales_literature_information: DevKit.Controls.Section;
			sales_attachments: DevKit.Controls.Section;
		}
		interface tab_general_information extends DevKit.Controls.ITab {
			Section: tab_general_information_Sections;
		}
		interface Tabs {
			general_information: tab_general_information;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information to describe the sales literature, such as the intended audience or primary messages. */
			Description: DevKit.Controls.String;
			/** Select a category or type to help others identify the intended use of the sales literature. */
			LiteratureTypeCode: DevKit.Controls.OptionSet;
			/** Type a descriptive title for the sales literature. */
			Name: DevKit.Controls.String;
			/** Choose the subject for the sales literature to relate the item to a product or business group. Administrators can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			navComp: DevKit.Controls.NavigationItem,
			navDoc: DevKit.Controls.NavigationItem,
			navDocument: DevKit.Controls.NavigationItem,
			navProducts: DevKit.Controls.NavigationItem
		}
		interface Grid {
			SalesAttachments: DevKit.Controls.Grid;
			Products: DevKit.Controls.Grid;
			Competitors: DevKit.Controls.Grid;
		}
	}
	class FormSales_Literature extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Sales_Literature
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Sales_Literature */
		Body: DevKit.FormSales_Literature.Body;
		/** The Header section of form Sales_Literature */
		Header: DevKit.FormSales_Literature.Header;
		/** The Navigation of form Sales_Literature */
		Navigation: DevKit.FormSales_Literature.Navigation;
		/** The Grid of form Sales_Literature */
		Grid: DevKit.FormSales_Literature.Grid;
	}
}
declare namespace OptionSet {
	namespace SalesLiterature {
		enum LiteratureTypeCode {
			/** 6 */
			Bulletins,
			/** 9 */
			Company_Background,
			/** 8 */
			Manuals,
			/** 100001 */
			Marketing_Collateral,
			/** 5 */
			News,
			/** 2 */
			Policies_And_Procedures,
			/** 0 */
			Presentation,
			/** 7 */
			Price_Sheets,
			/** 1 */
			Product_Sheet,
			/** 3 */
			Sales_Literature,
			/** 4 */
			Spreadsheets
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
//{'JsForm':['Information','Sales Literature'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}