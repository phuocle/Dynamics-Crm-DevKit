//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
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
		Body: MyDog.FormPluginTraceLog_Information.Body;
		/** The Header section of form PluginTraceLog_Information */
		Header: MyDog.FormPluginTraceLog_Information.Header;
	}
	class PluginTraceLogApi {
		/**
		* DynamicsCrm.DevKit PluginTraceLogApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unsecured configuration for the plug-in trace log. */
		Configuration: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier for tracking plug-in or custom workflow activity execution. */
		CorrelationId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Depth of execution of the plug-in or custom workflow activity. */
		Depth: DevKit.WebApi.IntegerValueReadonly;
		/** Details of the exception. */
		ExceptionDetails: DevKit.WebApi.StringValueReadonly;
		/** Where the event originated. Set to true if it's a system trace; otherwise, false. */
		IsSystemCreated: DevKit.WebApi.BooleanValueReadonly;
		/** Trace text from the plug-in. */
		MessageBlock: DevKit.WebApi.StringValueReadonly;
		/** Name of the message that triggered this plug-in. */
		MessageName: DevKit.WebApi.StringValueReadonly;
		/** Type of execution. */
		Mode: DevKit.WebApi.OptionSetValueReadonly;
		/** Type of custom code. */
		OperationType: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier for the organization. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** Time, in milliseconds, to construct. */
		PerformanceConstructorDuration: DevKit.WebApi.IntegerValueReadonly;
		/** Date and time when constructed. */
		PerformanceConstructorStartTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Time, in milliseconds, to execute the request. */
		PerformanceExecutionDuration: DevKit.WebApi.IntegerValueReadonly;
		/** Time, in milliseconds, to execute the request. */
		PerformanceExecutionStartTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Asynchronous workflow persistence key. */
		PersistenceKey: DevKit.WebApi.GuidValueReadonly;
		/** ID of the plug-in registration step. */
		PluginStepId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier for an entity instance. */
		PluginTraceLogId: DevKit.WebApi.GuidValueReadonly;
		/** Entity, if any, that the plug-in is executed against. */
		PrimaryEntity: DevKit.WebApi.StringValueReadonly;
		/** Plug-in profile formatted as serialized text. */
		Profile: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the message request. */
		RequestId: DevKit.WebApi.GuidValueReadonly;
		/** Secured configuration for the plug-in trace log. */
		SecureConfiguration: DevKit.WebApi.StringValueReadonly;
		/** Class name of the plug-in. */
		TypeName: DevKit.WebApi.StringValueReadonly;
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}