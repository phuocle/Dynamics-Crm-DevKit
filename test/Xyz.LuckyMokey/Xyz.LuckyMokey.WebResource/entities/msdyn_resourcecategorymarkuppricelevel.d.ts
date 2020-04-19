//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_resourcecategorymarkuppricelevel_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Enter the markup percent over base price. This field is relevant only when the price calculation method selected is "Markup percentage". */
			msdyn_percent: DevKit.Form.Controls.ControlDecimal;
			/** Select the price list to which this price list item is being added. */
			msdyn_pricelist: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_resourcecategorymarkuppricelevel_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_resourcecategorymarkuppricelevel_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_resourcecategorymarkuppricelevel_Information */
		Body: LuckyMokey.Formmsdyn_resourcecategorymarkuppricelevel_Information.Body;
	}
	namespace Formmsdyn_resourcecategorymarkuppricelevel_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the markup percent over base price. This field is relevant only when the price calculation method selected is "Markup percentage". */
			msdyn_percent: DevKit.Form.Controls.ControlDecimal;
		}
	}
	class Formmsdyn_resourcecategorymarkuppricelevel_Quick_Create extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_resourcecategorymarkuppricelevel_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_resourcecategorymarkuppricelevel_Quick_Create */
		Body: LuckyMokey.Formmsdyn_resourcecategorymarkuppricelevel_Quick_Create.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_resourcecategorymarkuppricelevel {
		enum msdyn_pricecalculation {
			/** 192350000 */
			Price_per_unit,
			/** 192350001 */
			At_cost,
			/** 192350002 */
			Markup_percentage
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
//{'JsForm':['Information','Quick Create'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}