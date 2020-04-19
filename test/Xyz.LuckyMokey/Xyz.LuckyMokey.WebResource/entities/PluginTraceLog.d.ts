//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormPluginTraceLog_Information {
		interface Header {
			/** Name of the message that triggered this plug-in. */
			MessageName: DevKit.Form.Controls.ControlString;
			/** Type of custom code. */
			OperationType: DevKit.Form.Controls.ControlOptionSet;
			/** Entity, if any, that the plug-in is executed against. */
			PrimaryEntity: DevKit.Form.Controls.ControlString;
		}
		interface tab_Configuration_Sections {
			Configuration_General: DevKit.Form.Controls.ControlSection;
			Configuration_Context: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Execution_Sections {
			Execution_Performance: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Configuration extends DevKit.Form.Controls.IControlTab {
			Section: tab_Configuration_Sections;
		}
		interface tab_Execution extends DevKit.Form.Controls.IControlTab {
			Section: tab_Execution_Sections;
		}
		interface Tabs {
			Configuration: tab_Configuration;
			Execution: tab_Execution;
		}
		interface Body {
			Tab: Tabs;
			/** Unsecured configuration for the plug-in trace log. */
			Configuration: DevKit.Form.Controls.ControlString;
			/** Unique identifier for tracking plug-in or custom workflow activity execution. */
			CorrelationId: DevKit.Form.Controls.ControlString;
			/** Depth of execution of the plug-in or custom workflow activity. */
			Depth: DevKit.Form.Controls.ControlInteger;
			/** Details of the exception. */
			ExceptionDetails: DevKit.Form.Controls.ControlString;
			/** Where the event originated. Set to true if it's a system trace; otherwise, false. */
			IsSystemCreated: DevKit.Form.Controls.ControlBoolean;
			/** Trace text from the plug-in. */
			MessageBlock: DevKit.Form.Controls.ControlString;
			/** Name of the message that triggered this plug-in. */
			MessageName: DevKit.Form.Controls.ControlString;
			/** Type of execution. */
			Mode: DevKit.Form.Controls.ControlOptionSet;
			/** Type of custom code. */
			OperationType: DevKit.Form.Controls.ControlOptionSet;
			/** Time, in milliseconds, to execute the request. */
			PerformanceExecutionDuration: DevKit.Form.Controls.ControlInteger;
			/** Time, in milliseconds, to execute the request. */
			PerformanceExecutionStartTime: DevKit.Form.Controls.ControlDateTime;
			/** Asynchronous workflow persistence key. */
			PersistenceKey: DevKit.Form.Controls.ControlString;
			/** ID of the plug-in registration step. */
			PluginStepId: DevKit.Form.Controls.ControlString;
			/** Entity, if any, that the plug-in is executed against. */
			PrimaryEntity: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the message request. */
			RequestId: DevKit.Form.Controls.ControlString;
			/** Secured configuration for the plug-in trace log. */
			SecureConfiguration: DevKit.Form.Controls.ControlString;
			/** Class name of the plug-in. */
			TypeName: DevKit.Form.Controls.ControlString;
		}
	}
	class FormPluginTraceLog_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form PluginTraceLog_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form PluginTraceLog_Information */
		Body: LuckyMokey.FormPluginTraceLog_Information.Body;
		/** The Header section of form PluginTraceLog_Information */
		Header: LuckyMokey.FormPluginTraceLog_Information.Header;
	}
}
declare namespace OptionSet {
	namespace PluginTraceLog {
		enum Mode {
			/** 0 */
			Synchronous,
			/** 1 */
			Asynchronous
		}
		enum OperationType {
			/** 0 */
			Unknown,
			/** 1 */
			Plug_in,
			/** 2 */
			Workflow_Activity
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