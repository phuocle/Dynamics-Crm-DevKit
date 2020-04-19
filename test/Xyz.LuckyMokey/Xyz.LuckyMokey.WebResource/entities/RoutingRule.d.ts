//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormRouting_Rule_Set {
		interface tab_General_Sections {
			Routing_Rule_Set_Information: DevKit.Form.Controls.ControlSection;
			Rule_Items: DevKit.Form.Controls.ControlSection;
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
			RuleItems: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Provide a description about the objective of the routing rule. */
			Description: DevKit.Form.Controls.ControlString;
			/** Logical name of the entity. */
			msdyn_entitylogicalname: DevKit.Form.Controls.ControlString;
			/** Provide a name for the routing rule. */
			Name: DevKit.Form.Controls.ControlString;
			/** For internal use only. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormRouting_Rule_Set extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Routing_Rule_Set
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Routing_Rule_Set */
		Body: LuckyMokey.FormRouting_Rule_Set.Body;
	}
}
declare namespace OptionSet {
	namespace RoutingRule {
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
		enum StateCode {
			/** 0 */
			Draft,
			/** 1 */
			Active
		}
		enum StatusCode {
			/** 1 */
			Draft,
			/** 2 */
			Active
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
//{'JsForm':['Routing Rule Set'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}