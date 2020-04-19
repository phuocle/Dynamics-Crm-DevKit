//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormCategory {
		interface tab_AssociatedCategories_Sections {
			Associated_Categories: DevKit.Form.Controls.ControlSection;
		}
		interface tab_AssociatedCategories extends DevKit.Form.Controls.IControlTab {
			Section: tab_AssociatedCategories_Sections;
		}
		interface Tabs {
			AssociatedCategories: tab_AssociatedCategories;
		}
		interface Body {
			Tab: Tabs;
			AssociatedCategoriesGrid: DevKit.Form.Controls.ControlGrid;
			/** Shows the category number for customer reference. */
			CategoryNumber: DevKit.Form.Controls.ControlString;
			/** Type a detailed description of the category */
			Description: DevKit.Form.Controls.ControlString;
			/** Select an existing category article for the category. */
			ParentCategoryId: DevKit.Form.Controls.ControlLookup;
			/** Enter a number to define the display position of the category in the hierarchy. */
			SequenceNumber: DevKit.Form.Controls.ControlInteger;
			/** Type a title for the Category. */
			Title: DevKit.Form.Controls.ControlString;
		}
	}
	class FormCategory extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Category
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Category */
		Body: LuckyMokey.FormCategory.Body;
	}
	namespace FormCategory_Main_Interactive {
		interface Tabs {
		}
		interface Body {
			/** Type a detailed description of the category */
			Description: DevKit.Form.Controls.ControlString;
			/** Select an existing category article for the category. */
			ParentCategoryId: DevKit.Form.Controls.ControlLookup;
			/** Enter a number to define the display position of the category in the hierarchy. */
			SequenceNumber: DevKit.Form.Controls.ControlInteger;
			/** Type a title for the Category. */
			Title: DevKit.Form.Controls.ControlString;
		}
	}
	class FormCategory_Main_Interactive extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Category_Main_Interactive
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Category_Main_Interactive */
		Body: LuckyMokey.FormCategory_Main_Interactive.Body;
	}
}
declare namespace OptionSet {
	namespace Category {
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
//{'JsForm':['Category','Category Main Interactive'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}