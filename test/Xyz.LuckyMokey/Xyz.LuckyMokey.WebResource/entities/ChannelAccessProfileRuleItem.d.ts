//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormChannelAccessProfileRuleItem_Information {
		interface tab_RuleCriteria_Sections {
			ConditionControl: DevKit.Form.Controls.ControlSection;
			rule_then_conditions: DevKit.Form.Controls.ControlSection;
		}
		interface tab_notes_Sections {
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab_RuleCriteria extends DevKit.Form.Controls.IControlTab {
			Section: tab_RuleCriteria_Sections;
		}
		interface tab_notes extends DevKit.Form.Controls.IControlTab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			RuleCriteria: tab_RuleCriteria;
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Choose the channel access profile that the item is assigned to. */
			AssociatedChannelAccessProfile: DevKit.Form.Controls.ControlLookup;
			/** Type additional information to describe the channel access profile rule item. */
			Description: DevKit.Form.Controls.ControlString;
			/** Type a descriptive name for the channel access profile rule item. */
			Name: DevKit.Form.Controls.ControlString;
		}
	}
	class FormChannelAccessProfileRuleItem_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form ChannelAccessProfileRuleItem_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ChannelAccessProfileRuleItem_Information */
		Body: LuckyMokey.FormChannelAccessProfileRuleItem_Information.Body;
	}
}
declare namespace OptionSet {
	namespace ChannelAccessProfileRuleItem {
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}