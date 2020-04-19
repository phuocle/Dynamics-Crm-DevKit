//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormRule_Item {
		interface Header {
			/** Unique identifier for Routing Rule associated with Rule Item. */
			RoutingRuleId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_General_Sections {
			Rule_Item_Information: DevKit.Form.Controls.ControlSection;
			ConditionControl: DevKit.Form.Controls.ControlSection;
			Then_Condition: DevKit.Form.Controls.ControlSection;
		}
		interface tab_notes_Sections {
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab_General extends DevKit.Form.Controls.IControlTab {
			Section: tab_General_Sections;
		}
		interface tab_notes extends DevKit.Form.Controls.IControlTab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			General: tab_General;
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			appConditionBuilder_uc: DevKit.Form.Controls.ControlActionCards;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Look for user/team records or create a new record. */
			AssignObjectId: DevKit.Form.Controls.ControlLookup;
			/** Provide a description for the rule item. */
			Description: DevKit.Form.Controls.ControlString;
			/** Choose if you want to route the record to queue or user/team. */
			msdyn_routeto: DevKit.Form.Controls.ControlOptionSet;
			/** Provide a name for the rule item. */
			Name: DevKit.Form.Controls.ControlString;
			/** Look for a queue or create a new queue. */
			RoutedQueueId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormRule_Item extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Rule_Item
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Rule_Item */
		Body: LuckyMokey.FormRule_Item.Body;
		/** The Header section of form Rule_Item */
		Header: LuckyMokey.FormRule_Item.Header;
	}
}
declare namespace OptionSet {
	namespace RoutingRuleItem {
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
		enum msdyn_routeto {
			/** 1 */
			Queue,
			/** 2 */
			UserTeam
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
//{'JsForm':['Rule Item'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}