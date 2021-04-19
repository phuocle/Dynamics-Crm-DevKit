//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormProductSubstitute {
		interface Tabs {
		}
		interface Body {
			/** Select whether the relationship is unidirectional or bidirectional. */
			Direction: DevKit.Controls.OptionSet;
			/** Shows the product that the relationship is defined for. */
			ProductId: DevKit.Controls.Lookup;
			/** Select the type of the product relationship. */
			SalesRelationshipType: DevKit.Controls.OptionSet;
			/** Select the related product that the relationship needs to be defined for. */
			SubstitutedProductId: DevKit.Controls.Lookup;
		}
	}
	class FormProductSubstitute extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form ProductSubstitute
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ProductSubstitute */
		Body: MyDog.FormProductSubstitute.Body;
	}
	namespace FormProductSubstitute_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Select whether the relationship is unidirectional or bidirectional. */
			Direction: DevKit.Controls.OptionSet;
			/** Shows the product that the relationship is defined for. */
			ProductId: DevKit.Controls.Lookup;
			/** Select the type of the product relationship. */
			SalesRelationshipType: DevKit.Controls.OptionSet;
			/** Select the related product that the relationship needs to be defined for. */
			SubstitutedProductId: DevKit.Controls.Lookup;
		}
	}
	class FormProductSubstitute_Quick_Create extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form ProductSubstitute_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
		/** The Body section of form ProductSubstitute_Quick_Create */
		Body: MyDog.FormProductSubstitute_Quick_Create.Body;
	}
}
declare namespace OptionSet {
	namespace ProductSubstitute {
		enum Direction {
			/** 1 */
			Bi_Directional,
			/** 0 */
			Uni_Directional
		}
		enum SalesRelationshipType {
			/** 2 */
			Accessory,
			/** 1 */
			Cross_sell,
			/** 3 */
			Substitute,
			/** 0 */
			Up_sell
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'JsForm':['ProductSubstitute','Quick Create'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}