//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyusd_task_Information {
		interface Tabs {
		}
		interface Body {
			Answers: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Unique identifier for Agent Script Task Category associated with Agent Script Task. */
			msdyusd_Category: DevKit.Form.Controls.ControlLookup;
			/** Instructions to the agent on what they should do while on this task. */
			msdyusd_instructions: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			msdyusd_name: DevKit.Form.Controls.ControlString;
			/** Script that the agent should read when on this task.   This field supports replacable parameters.   At runtime, the script will replace [CONTEXT] with the value from the CONTEXT variable. */
			msdyusd_scripttext: DevKit.Form.Controls.ControlString;
			/** Unique identifier for UII Hosted Application associated with Agent Script Task. */
			msdyusd_ShowTab: DevKit.Form.Controls.ControlLookup;
			msdyusd_StartTask: DevKit.Form.Controls.ControlBoolean;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Task */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyusd_task_answer: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyusd_task_agentscriptaction: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyusd_task_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyusd_task_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyusd_task_Information */
		Body: LuckyMokey.Formmsdyusd_task_Information.Body;
		/** The Footer section of form msdyusd_task_Information */
		Footer: LuckyMokey.Formmsdyusd_task_Information.Footer;
		/** The Navigation of form msdyusd_task_Information */
		Navigation: LuckyMokey.Formmsdyusd_task_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyusd_task {
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}