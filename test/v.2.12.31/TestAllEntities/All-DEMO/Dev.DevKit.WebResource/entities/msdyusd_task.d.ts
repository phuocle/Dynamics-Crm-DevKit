//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyusd_task_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier for Agent Script Task Category associated with Agent Script Task. */
			msdyusd_Category: DevKit.Controls.Lookup;
			/** Instructions to the agent on what they should do while on this task. */
			msdyusd_instructions: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyusd_name: DevKit.Controls.String;
			/** Script that the agent should read when on this task.   This field supports replacable parameters.   At runtime, the script will replace [CONTEXT] with the value from the CONTEXT variable. */
			msdyusd_scripttext: DevKit.Controls.String;
			/** Unique identifier for UII Hosted Application associated with Agent Script Task. */
			msdyusd_ShowTab: DevKit.Controls.Lookup;
			msdyusd_StartTask: DevKit.Controls.Boolean;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Task */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyusd_task_agentscriptaction: DevKit.Controls.NavigationItem,
			nav_msdyusd_task_answer: DevKit.Controls.NavigationItem,
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem
		}
		interface Grid {
			Answers: DevKit.Controls.Grid;
		}
	}
	class Formmsdyusd_task_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyusd_task_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyusd_task_Information */
		Body: DevKit.Formmsdyusd_task_Information.Body;
		/** The Footer section of form msdyusd_task_Information */
		Footer: DevKit.Formmsdyusd_task_Information.Footer;
		/** The Navigation of form msdyusd_task_Information */
		Navigation: DevKit.Formmsdyusd_task_Information.Navigation;
		/** The Grid of form msdyusd_task_Information */
		Grid: DevKit.Formmsdyusd_task_Information.Grid;
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}