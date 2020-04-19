//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormRecord_Creation_and_Update_Rule_Item {
		interface tab_general_Sections {
			Name: DevKit.Form.Controls.ControlSection;
			ConditionControl: DevKit.Form.Controls.ControlSection;
			CaseProperties: DevKit.Form.Controls.ControlSection;
			RegardingSettingsection: DevKit.Form.Controls.ControlSection;
			primaryactionsection: DevKit.Form.Controls.ControlSection;
			secondaryactionsection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Type a name or title of the rule item that is used for automatic record creation and update. */
			Name: DevKit.Form.Controls.ControlString;
		}
	}
	class FormRecord_Creation_and_Update_Rule_Item extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Record_Creation_and_Update_Rule_Item
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Record_Creation_and_Update_Rule_Item */
		Body: LuckyMokey.FormRecord_Creation_and_Update_Rule_Item.Body;
	}
	namespace FormRecord_Creation_and_Update_Rule_Item_UCI {
		interface tab_ConditionBuilder_Sections {
			New_Condition: DevKit.Form.Controls.ControlSection;
			Actions_To_Take: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ConditionBuilder extends DevKit.Form.Controls.IControlTab {
			Section: tab_ConditionBuilder_Sections;
		}
		interface Tabs {
			ConditionBuilder: tab_ConditionBuilder;
		}
		interface Body {
			Tab: Tabs;
			configure_child_flow: DevKit.Form.Controls.ControlActionCards;
			WebResource_Disclaimer: DevKit.Form.Controls.ControlWebResource;
			arc_condition_config_control: DevKit.Form.Controls.ControlActionCards;
			/** Type a name or title of the rule item that is used for automatic record creation and update. */
			Name: DevKit.Form.Controls.ControlString;
			arc_primary_create_control: DevKit.Form.Controls.ControlActionCards;
		}
	}
	class FormRecord_Creation_and_Update_Rule_Item_UCI extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Record_Creation_and_Update_Rule_Item_UCI
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Record_Creation_and_Update_Rule_Item_UCI */
		Body: LuckyMokey.FormRecord_Creation_and_Update_Rule_Item_UCI.Body;
	}
}
declare namespace OptionSet {
	namespace ConvertRuleItem {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
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
//{'JsForm':['Record Creation and Update Rule Item','Record Creation and Update Rule Item - UCI'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}