//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormWorkflow_Information {
		interface tab_notes_Sections {
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab_notes extends DevKit.Form.Controls.IControlTab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Description of the process. */
			Description: DevKit.Form.Controls.ControlString;
			/** Name of the process. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user or team who owns the process. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormWorkflow_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Workflow_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Workflow_Information */
		Body: LuckyMokey.FormWorkflow_Information.Body;
	}
}
declare namespace OptionSet {
	namespace Workflow {
		enum BusinessProcessType {
			/** 0 */
			Business_Flow,
			/** 1 */
			Task_Flow
		}
		enum Category {
			/** 0 */
			Workflow,
			/** 1 */
			Dialog,
			/** 2 */
			Business_Rule,
			/** 3 */
			Action,
			/** 4 */
			Business_Process_Flow,
			/** 5 */
			Modern_Flow,
			/** 6 */
			Reserved
		}
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
		enum CreateStage {
			/** 20 */
			Pre_operation,
			/** 40 */
			Post_operation
		}
		enum DeleteStage {
			/** 20 */
			Pre_operation,
			/** 40 */
			Post_operation
		}
		enum Mode {
			/** 0 */
			Background,
			/** 1 */
			Real_time
		}
		enum ProcessTriggerScope {
			/** 1 */
			Form,
			/** 2 */
			Entity
		}
		enum RunAs {
			/** 0 */
			Owner,
			/** 1 */
			Calling_User
		}
		enum Scope {
			/** 1 */
			User,
			/** 2 */
			Business_Unit,
			/** 3 */
			Parent_Child_Business_Units,
			/** 4 */
			Organization
		}
		enum StateCode {
			/** 0 */
			Draft,
			/** 1 */
			Activated
		}
		enum StatusCode {
			/** 1 */
			Draft,
			/** 2 */
			Activated
		}
		enum Type {
			/** 1 */
			Definition,
			/** 2 */
			Activation,
			/** 3 */
			Template
		}
		enum UIFlowType {
			/** 0 */
			Desktop,
			/** 1 */
			Selenium_IDE,
			/** 2 */
			PowerShell
		}
		enum UpdateStage {
			/** 20 */
			Pre_operation,
			/** 40 */
			Post_operation
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