//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormPluginTraceLog_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Name of the message that triggered this plug-in. */
			MessageName: DevKit.Controls.String;
			/** Type of custom code. */
			OperationType: DevKit.Controls.OptionSet;
			/** Entity, if any, that the plug-in is executed against. */
			PrimaryEntity: DevKit.Controls.String;
		}
		interface tab_Configuration_Sections {
			/** Context */
			Configuration_Context: DevKit.Controls.Section;
			/** General */
			Configuration_General: DevKit.Controls.Section;
		}
		interface tab_Execution_Sections {
			/** Performance */
			Execution_Performance: DevKit.Controls.Section;
		}
		/** Configuration */
		interface tab_Configuration extends DevKit.Controls.ITab {
			Section: tab_Configuration_Sections;
		}
		/** Execution */
		interface tab_Execution extends DevKit.Controls.ITab {
			Section: tab_Execution_Sections;
		}
		interface Tabs {
			/** Configuration */
			Configuration: tab_Configuration;
			/** Execution */
			Execution: tab_Execution;
		}
		interface Body {
			Tab: Tabs;
			/** Unsecured configuration for the plug-in trace log. */
			Configuration: DevKit.Controls.String;
			/** Unique identifier for tracking plug-in or custom workflow activity execution. */
			CorrelationId: DevKit.Controls.String;
			/** Depth of execution of the plug-in or custom workflow activity. */
			Depth: DevKit.Controls.Integer;
			/** Details of the exception. */
			ExceptionDetails: DevKit.Controls.String;
			/** Where the event originated. Set to true if it's a system trace; otherwise, false. */
			IsSystemCreated: DevKit.Controls.Boolean;
			/** Trace text from the plug-in. */
			MessageBlock: DevKit.Controls.String;
			/** Name of the message that triggered this plug-in. */
			MessageName: DevKit.Controls.String;
			/** Type of execution. */
			Mode: DevKit.Controls.OptionSet;
			/** Type of custom code. */
			OperationType: DevKit.Controls.OptionSet;
			/** Time, in milliseconds, to execute the request. */
			PerformanceExecutionDuration: DevKit.Controls.Integer;
			/** Time, in milliseconds, to execute the request. */
			PerformanceExecutionStartTime: DevKit.Controls.DateTime;
			/** Asynchronous workflow persistence key. */
			PersistenceKey: DevKit.Controls.String;
			/** ID of the plug-in registration step. */
			PluginStepId: DevKit.Controls.String;
			/** Entity, if any, that the plug-in is executed against. */
			PrimaryEntity: DevKit.Controls.String;
			/** Unique identifier of the message request. */
			RequestId: DevKit.Controls.String;
			/** Secured configuration for the plug-in trace log. */
			SecureConfiguration: DevKit.Controls.String;
			/** Class name of the plug-in. */
			TypeName: DevKit.Controls.String;
		}
	}
	export class FormPluginTraceLog_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form PluginTraceLog_Information */
		Body: DevKit.FormPluginTraceLog_Information.Body;
		/** The Header section of form PluginTraceLog_Information */
		Header: DevKit.FormPluginTraceLog_Information.Header;
	}
	export class PluginTraceLogApi {
		/**
		* DynamicsCrm.DevKit PluginTraceLogApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unsecured configuration for the plug-in trace log. */
		readonly Configuration: string | null;
		/** Unique identifier for tracking plug-in or custom workflow activity execution. */
		readonly CorrelationId: string | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Depth of execution of the plug-in or custom workflow activity. */
		readonly Depth: number | null;
		/** Details of the exception. */
		readonly ExceptionDetails: string | null;
		/** Where the event originated. Set to true if it's a system trace; otherwise, false. */
		readonly IsSystemCreated: boolean | null;
		/** Trace text from the plug-in. */
		readonly MessageBlock: string | null;
		/** Name of the message that triggered this plug-in. */
		readonly MessageName: string | null;
		/** Type of execution. */
		readonly Mode: OptionSet.PluginTraceLog.Mode | null;
		/** Type of custom code. */
		readonly OperationType: OptionSet.PluginTraceLog.OperationType | null;
		/** Unique identifier for the organization. */
		readonly OrganizationId: string | null;
		/** Time, in milliseconds, to construct. */
		readonly PerformanceConstructorDuration: number | null;
		/** Date and time when constructed. */
		readonly PerformanceConstructorStartTime_UtcDateAndTime: Date | null;
		/** Time, in milliseconds, to execute the request. */
		readonly PerformanceExecutionDuration: number | null;
		/** Time, in milliseconds, to execute the request. */
		readonly PerformanceExecutionStartTime_UtcDateAndTime: Date | null;
		/** Asynchronous workflow persistence key. */
		readonly PersistenceKey: string | null;
		/** ID of the plug-in registration step. */
		readonly PluginStepId: string | null;
		/** Unique identifier for an entity instance. */
		readonly PluginTraceLogId: string | null;
		/** Entity, if any, that the plug-in is executed against. */
		readonly PrimaryEntity: string | null;
		/** Plug-in profile formatted as serialized text. */
		readonly Profile: string | null;
		/** Unique identifier of the message request. */
		readonly RequestId: string | null;
		/** Secured configuration for the plug-in trace log. */
		readonly SecureConfiguration: string | null;
		/** Class name of the plug-in. */
		readonly TypeName: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unsecured configuration for the plug-in trace log. */
			readonly Configuration: string;
			/** Unique identifier for tracking plug-in or custom workflow activity execution. */
			readonly CorrelationId: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Depth of execution of the plug-in or custom workflow activity. */
			readonly Depth: string;
			/** Details of the exception. */
			readonly ExceptionDetails: string;
			/** Where the event originated. Set to true if it's a system trace; otherwise, false. */
			readonly IsSystemCreated: string;
			/** Trace text from the plug-in. */
			readonly MessageBlock: string;
			/** Name of the message that triggered this plug-in. */
			readonly MessageName: string;
			/** Type of execution. */
			readonly Mode: string;
			/** Type of custom code. */
			readonly OperationType: string;
			/** Unique identifier for the organization. */
			readonly OrganizationId: string;
			/** Time, in milliseconds, to construct. */
			readonly PerformanceConstructorDuration: string;
			/** Date and time when constructed. */
			readonly PerformanceConstructorStartTime_UtcDateAndTime: string;
			/** Time, in milliseconds, to execute the request. */
			readonly PerformanceExecutionDuration: string;
			/** Time, in milliseconds, to execute the request. */
			readonly PerformanceExecutionStartTime_UtcDateAndTime: string;
			/** Asynchronous workflow persistence key. */
			readonly PersistenceKey: string;
			/** ID of the plug-in registration step. */
			readonly PluginStepId: string;
			/** Unique identifier for an entity instance. */
			readonly PluginTraceLogId: string;
			/** Entity, if any, that the plug-in is executed against. */
			readonly PrimaryEntity: string;
			/** Plug-in profile formatted as serialized text. */
			readonly Profile: string;
			/** Unique identifier of the message request. */
			readonly RequestId: string;
			/** Secured configuration for the plug-in trace log. */
			readonly SecureConfiguration: string;
			/** Class name of the plug-in. */
			readonly TypeName: string;
		}
	}
}
declare namespace OptionSet {
	namespace PluginTraceLog {
		enum Mode {
			/** Asynchronous = 1*/
			Asynchronous = 1,
			/** Synchronous = 0*/
			Synchronous = 0
		}
		enum OperationType {
			/** Plug_in = 1*/
			Plug_in = 1,
			/** Unknown = 0*/
			Unknown = 0,
			/** Workflow_Activity = 2*/
			Workflow_Activity = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}